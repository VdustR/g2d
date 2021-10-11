const inspect = (
  value: Parameters<typeof Deno.inspect>[0],
  options?: Parameters<typeof Deno.inspect>[1]
) => {
  return Deno.inspect(value, {
    compact: false,
    depth: Infinity,
    iterableLimit: Infinity,
    ...options,
  });
};

export default inspect;
