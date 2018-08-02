#!/bin/sh
source ./scripts/utils/colors.sh

target="$1";

if [ -n "$target" ]; then
    curl -s $1 --connect-timeout 1 >/dev/null && echo Connected. || {
      echo $Cyan Server is offline...
      echo $Green Starting it now...
      echo $Reset
      yarn start
      exit 0
    };
else
    echo $Red A target URL address is required.
    echo $Reset
    exit 1
fi
