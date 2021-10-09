#!/usr/bin/sh
cd "$(dirname "$0")"

DENO_COMPILE_TARGET=x86_64-unknown-linux-gnu ./compile.sh
DENO_COMPILE_TARGET=x86_64-pc-windows-msvc ./compile.sh
DENO_COMPILE_TARGET=x86_64-apple-darwin ./compile.sh
DENO_COMPILE_TARGET=aarch64-apple-darwin ./compile.sh
