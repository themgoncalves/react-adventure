#!/bin/bash

curl -s $1 >/dev/null && echo Connected. || {
  echo Server is offline...
  echo Starting it now...
  yarn start:silence
  exit 1
}