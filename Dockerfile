ARG BUILD_IMAGE=denoland/deno:alpine-1.14.3
ARG RUNTIME_IMAGE=ubuntu:21.10
ARG DENO_COMPILE_TARGET=x86_64-unknown-linux-gnu

FROM $BUILD_IMAGE AS build
ARG DENO_COMPILE_TARGET
WORKDIR /repo
COPY . .
RUN sh ./scripts/compile.sh

FROM $RUNTIME_IMAGE
ARG DENO_COMPILE_TARGET
COPY --from=build /repo/dist/$DENO_COMPILE_TARGET/g2d /usr/local/bin/
COPY docker-entrypoint.sh /usr/local/bin/
ENTRYPOINT ["docker-entrypoint.sh"]
CMD ["g2d"]
