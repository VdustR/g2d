export default async function read_gitignore(path: string): Promise<{
  path: string;
  content: string;
}> {
  const content = await Deno.readTextFile(path);
  return {
    path,
    content,
  };
}
