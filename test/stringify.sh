# stringified numbers
assert "range 2 | clack -o str" "0\n1\n2"

# stringified strings
assert "echo '\"foo\"' | clack -o str" "foo"

# stringified collection elements
assert "echo '{:foo \"bar\"}' | clack -o str :foo" "bar"

