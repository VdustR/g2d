import cwd from "/cwd.ts";
import { resolve } from "std/path/mod.ts";
import { ensureFile } from "std/fs/mod.ts";
import isDir from "/is_dir.ts";

export default async function getTargetPath(origin: string): Promise<string> {
  const absolute = resolve(cwd, origin);
  const target = (await isDir(absolute))
    ? resolve(absolute, ".dockerignore")
    : absolute;
  await ensureFile(target);
  return target;
}
