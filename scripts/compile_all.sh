#!/usr/bin/bash
cd "$(dirname "$0")"

DENO_PLATFORM=x86_64-unknown-linux-gnu ./compile.sh
DENO_PLATFORM=x86_64-pc-windows-msvc ./compile.sh
DENO_PLATFORM=x86_64-apple-darwin ./compile.sh
DENO_PLATFORM=aarch64-apple-darwin ./compile.sh
