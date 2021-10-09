export default function g2b(input: string): string {
  return input.replace(
    /(^|\r\n|\n|\r)([^\r\n]{1,2})/g,
    (match, eol: string, start: string) => {
      return match.trim() === "" || start.startsWith("#")
        ? match
        : start.startsWith("!/")
        ? `${eol}${start.replace(/^!\//, "!")}`
        : start.startsWith("!")
        ? `${eol}${start.replace(/^!/, "!**/")}`
        : start.startsWith("/")
        ? `${eol}${start.replace(/^\//, "")}`
        : `${eol}${start.replace(/^/, "**/")}`;
    }
  );
}
