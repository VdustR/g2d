# g2d [![Test](https://github.com/VdustR/g2d/actions/workflows/test.yml/badge.svg)](https://github.com/VdustR/g2d/actions/workflows/test.yml)

Transform `.gitignore` into `.dockerignore`.

| `.gitignore` | `.dockerignore` |
| ------------ | --------------- |
| `!/`         | `!`             |
| `!`          | `!**/`          |
| `/`          | -               |
| -            | `**/`           |

## Usage

`g2d` will detect the nearest `.gitignore` by default.

```sh
# std output
g2d

# write into .dockerignore
g2d -o .

# if foo is a directory
# .dockerignore would be export into foo/.dockerignore
g2d -o foo
cat foo/.gitignore

# if foo is a file
# .dockerignore would be export into foo
g2d -o foo
cat foo

# more
g2d -h
```

## Dev

```sh
deno run --importmap=import_map.json --unstable --allow-read --allow-write bin.ts
```

## Test

```sh
deno test --importmap=import_map.json --unstable .
```
