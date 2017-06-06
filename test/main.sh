#!/bin/bash

retval=0

function assert {
    expression=$1
    expectation=$2
    echo -n "'$expression' should equal '$expectation'..." >&2
    actual=$(eval "$expression")
    if [ "$expectation" != "$actual" ]; then
        echo NOK >&2
        echo "\tactual: $actual" >&2
        retval=1
    else
        echo OK
    fi
}

CLACK_ASSERTIONS_FILE=$1

if [ "$CLACK_ASSERTIONS_FILE" == "" ]; then
    echo "Testing everything"
    . test/general.sh
    . test/transit.sh
    . test/stringify.sh
    . test/dwim.sh
    . test/yaml.sh
else
    echo "Testing $CLACK_ASSERTIONS_FILE"
    . "$CLACK_ASSERTIONS_FILE"
fi


