#!/usr/bin/bash
cd "$(dirname "$0")"
cd ..
[[ $CI = true ]] && WATCH= || WATCH=--watch
echo $WATCH
deno test --unstable . $WATCH
