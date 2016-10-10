#!/bin/bash

if [ "$CLACK_ASSERT_PATH" == "" ]; then
    echo "Cannot find assert.sh in CLACK_ASSERT_PATH";
    echo "Get a copy of https://github.com/lehmannro/assert.sh";
    exit 1;
fi

. "$CLACK_ASSERT_PATH"

CLACK_ASSERTIONS_FILE=$1

if [ "$CLACK_ASSERTIONS_FILE" == "" ]; then
    echo "Testing everything"
    . test/general.sh
    . test/transit.sh
    . test/stringify.sh
    . test/dwim.sh
else
    echo "Testing $CLACK_ASSERTIONS_FILE"
    . "$CLACK_ASSERTIONS_FILE"
fi

assert_end examples

