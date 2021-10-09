#!/usr/bin/bash
cd "$(dirname "$0")"
cd ..

mkdir -p dist/$DENO_PLATFORM
deno compile \
  --importmap=import_map.json \
  --unstable \
  --allow-read \
  --allow-write \
  --output dist/$DENO_PLATFORM/g2d \
  --target=$DENO_PLATFORM \
  bin.ts
