import detectEol from "/detect_eol.ts";

export default function g2b(input: string): string {
  const eol = detectEol(input);
  return input
    .split(eol)
    .map((line) => {
      if (!line || line.startsWith("#")) return line;
      const isNegative = line.startsWith("!");
      const gitPath = isNegative ? line.slice(1) : line;
      const dockerPath = !gitPath
        ? ""
        : gitPath.startsWith("/")
        ? gitPath.slice(1)
        : `**/${gitPath}`;
      return isNegative ? `!${dockerPath}` : dockerPath;
    })
    .join(eol);
}
