#!/bin/bash

version=$1
if [ "$version" = "" ]; then
    echo "usage: ./build.sh <version>" >&2;
    exit 1;
fi
filename="bundle/clack-$version.tar.gz"
tar -czf $filename bin out test clack.js node_modules;
echo -n 'sha256 is: ';
echo $(shasum -a 256 $filename)
