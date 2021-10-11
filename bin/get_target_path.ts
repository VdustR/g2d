import cwd from "./cwd.ts";
import { pathResolve, ensureFile } from "./deps.ts";
import isDir from "./is_dir.ts";

export default async function getTargetPath(origin: string): Promise<string> {
  const absolute = pathResolve(cwd, origin);
  const target = (await isDir(absolute))
    ? pathResolve(absolute, ".dockerignore")
    : absolute;
  await ensureFile(target);
  return target;
}
