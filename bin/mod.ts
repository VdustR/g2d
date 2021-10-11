import findGitIgnore from "./find_gitignore.ts";
import readGitignore from "./read_gitignore.ts";
import { cac, pathResolve, getStdin } from "./deps.ts";
import cwd from "./cwd.ts";
import inspect from "./inspect.ts";
import g2d from "../mod.ts";
import getTargetPath from "./get_target_path.ts";
import version from "../version.ts";

const cli = cac("g2d");

cli
  .command("[file]", "Transform a specific file")
  .option("-o, --output <file>", "Output file")
  .option("-s, --silent", "Silent")
  .action(async (file, options: { output?: string; silent?: boolean }) => {
    const output: string = options.output || "";
    const silent: boolean =
      options.silent === undefined ? !output : Boolean(options.silent);
    const info = (...args: Parameters<typeof console.log>) => {
      if (silent) return;
      return console.log(...args);
    };

    const gitignore = file
      ? await readGitignore(pathResolve(cwd, file))
      : !Deno.isatty(Deno.stdin.rid)
      ? { content: await getStdin({ exitOnEnter: false }), path: undefined }
      : await findGitIgnore();
    if (!gitignore) throw new Error(".gitignore not found");
    info(
      `.gitignore ${
        gitignore.path ? inspect(gitignore.path) : "from stdin"
      } loaded!`
    );
    const dockerignore = g2d(gitignore.content);
    if (!output) {
      console.log(dockerignore);
      return;
    }
    const targetPath = await getTargetPath(output);
    await Deno.writeTextFile(targetPath, dockerignore);
    info(`.dockerignore ${targetPath} exported!`);
  });

cli.help();
cli.version(version);

cli.parse();
