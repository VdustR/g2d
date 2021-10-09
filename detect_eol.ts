export default function detectEol(input: string) {
  const matches = input.match(/\r\n|\n|\r/g);
  let rn = 0;
  let n = 0;
  let r = 0;
  matches?.forEach((match) => {
    if (match === "\r\n") {
      rn++;
    } else if (match === "\n") {
      n++;
    } else if (match === "\r") {
      r++;
    }
  });
  if (rn > n && rn > r) {
    return "\r\n";
  } else if (r > rn && r > n) {
    return "\r";
  } else {
    return "\n";
  }
}
