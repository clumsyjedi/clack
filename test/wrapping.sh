# multiple data structures are handled
assert "echo 1 2 3 | clack -e inc" "2\n3\n4"

# wrapping of data structures works
assert "echo 1 2 3 | clack -w" "[1 2 3]"

# unwrapping of data structures works
assert "echo '[1 2 3]' | clack -u" "1\n2\n3"
