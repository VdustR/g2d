FROM denoland/deno:alpine-1.14.3 AS build
WORKDIR /repo
COPY . .
RUN deno compile \
  --importmap=import_map.json \
  --unstable \
  --allow-read \
  --allow-write \
  --output g2d \
  --target=x86_64-unknown-linux-gnu \
  bin.ts

FROM ubuntu:21.10
COPY --from=build /repo/g2d /usr/local/bin/
COPY docker-entrypoint.sh /usr/local/bin/
ENTRYPOINT ["docker-entrypoint.sh"]
CMD ["g2d"]
