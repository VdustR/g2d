#!/usr/bin/sh
cd "$(dirname "$0")"
cd ..

mkdir -p dist/$DENO_COMPILE_TARGET
deno compile \
  --importmap=import_map.json \
  --unstable \
  --allow-read \
  --allow-write \
  --output dist/$DENO_COMPILE_TARGET/g2d \
  --target=$DENO_COMPILE_TARGET \
  bin.ts
