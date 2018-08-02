#!/bin/sh
source ./scripts/utils/colors.sh

SERVER_TYPE="$1"
SERVER_HOST="$2"
SERVER_PORT="$3"

case $SERVER_TYPE in
    "ssr")
        echo $Dim Server Side Render $SERVER_HOST:$SERVER_PORT $Reset
        yarn run-p build:dev start:server
        ;;
    "csr")
        echo $Dim Client Side Render: $SERVER_HOST:$SERVER_PORT $Reset
        yarn run-p build:dev start:server
        ;;
    *)
        echo Server render type is unknown
        ;;
esac
