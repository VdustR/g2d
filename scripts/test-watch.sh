#!/usr/bin/sh
cd "$(dirname "$0")"
cd ..
deno test --importmap=import_map.json --unstable --watch .
