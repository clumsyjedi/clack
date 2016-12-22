#!/bin/bash

version=$1
if [ "$version" = "" ]; then
    echo "usage: ./bundle.sh <version>" >&2;
    exit 1;
fi
filename="bundle/clack-$version.tar.gz"
tar -czf $filename bin out test clack.js;
echo -n 'sha256 is: ';
echo $(shasum -a 256 $filename)
