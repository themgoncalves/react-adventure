#!/bin/sh
source ./scripts/utils/colors.sh

target="$1";

if [ -n "$target" ]; then
    echo $Dim $ rimraf $target $Reset
    rimraf $target
else
    echo $Red A target path is required.
    echo $Reset
    exit 1
fi
