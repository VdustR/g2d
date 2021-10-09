#!/usr/bin/sh
cd "$(dirname "$0")"
cd ..

mkdir -p dist/x86_64-unknown-linux-gnu
deno compile \
  --importmap=import_map.json \
  --unstable \
  --allow-read \
  --allow-write \
  --output dist/x86_64-unknown-linux-gnu/g2d \
  --target=x86_64-unknown-linux-gnu \
  bin.ts

mkdir -p dist/x86_64-pc-windows-msvc
deno compile \
  --importmap=import_map.json \
  --unstable \
  --allow-read \
  --allow-write \
  --output dist/x86_64-pc-windows-msvc/g2d \
  --target=x86_64-pc-windows-msvc \
  bin.ts

mkdir -p dist/x86_64-apple-darwin
deno compile \
  --importmap=import_map.json \
  --unstable \
  --allow-read \
  --allow-write \
  --output dist/x86_64-apple-darwin/g2d \
  --target=x86_64-apple-darwin \
  bin.ts

mkdir -p dist/aarch64-apple-darwin
deno compile \
  --importmap=import_map.json \
  --unstable \
  --allow-read \
  --allow-write \
  --output dist/aarch64-apple-darwin/g2d \
  --target=aarch64-apple-darwin \
  bin.ts
