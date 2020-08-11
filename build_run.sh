#!/bin/bash
set -xe

docker build -f Dockerfile-standard -t libxl-segfault:standard .
docker build -f Dockerfile-alpine -t libxl-segfault:alpine .

docker run -it --rm \
   -e LIBXL_OWNER="${LIBXL_OWNER}" \
   -e LIBXL_KEY="${LIBXL_KEY}" \
   libxl-segfault:standard

docker run -it --rm \
    -e LIBXL_OWNER="${LIBXL_OWNER}" \
    -e LIBXL_KEY="${LIBXL_KEY}" \
    libxl-segfault:alpine
