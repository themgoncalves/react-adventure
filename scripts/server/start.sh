#!/bin/sh

SERVER_TYPE="$1"
SERVER_HOST="$2"
SERVER_PORT="$3"

case $SERVER_TYPE in
    "ssr")
        echo Server is SSR
        ;;
    "csr")
        yarn start:dev:server
        ;;
    *)
        echo Server render type is unknown
        ;;
esac
