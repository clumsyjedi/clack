
# basic
assert "echo '{}' | clack" "{}"

# default get
assert "echo '{:foo :bar}' | clack :foo" ":bar"

# defsault multilevel get
assert "echo '{:foo {:bar {:baz \"whaaaat?\"}}}' | clack :foo :bar :baz" "\"whaaaat?\""

# default multilevel / mixed type get
assert "echo '{\"foo\" {:bar [:baz]}}' | clack foo :bar 0" ":baz"

# eval keys short opt
assert "echo '{:foo 1 :bar 2 :baz 3}' | clack -e keys" "(:baz :bar :foo)"

# eval keys long opt
assert "echo '{:foo 1 :bar 2 :baz 3}' | clack --eval keys" "(:baz :bar :foo)"

# filter
assert "echo '[0 1 2 3 4 5 6 7 8 9]' | clack -f 'even?'" "(0 2 4 6 8)"
assert "echo '[0 1 2 3 4 5 6 7 8 9]' | clack --filter 'even?'" "(0 2 4 6 8)"

# map
assert "echo '[0 1 2 3 4 5 6 7 8 9]' | clack -m inc" "(1 2 3 4 5 6 7 8 9 10)"
assert "echo '[0 1 2 3 4 5 6 7 8 9]' | clack --map inc" "(1 2 3 4 5 6 7 8 9 10)"

# remove
assert "echo '[0 1 2 3 4 5 6 7 8 9]' | clack -r 'even?'" "(1 3 5 7 9)"
assert "echo '[0 1 2 3 4 5 6 7 8 9]' | clack --remove 'even?'" "(1 3 5 7 9)"

# explicit get
assert "echo '{:foo :bar}' | clack -g :foo" ":bar"

# get key prefixed with colon
assert "echo '{\":foo\" :bar}' | clack -g '\":foo\"'" ":bar"

# get key prefixed with hyphen
assert "echo '{\"-filter\" :bar}' | clack -g '\"-filter\"'" ":bar"

# big long chain
assert "echo {:foo {:bar {:baz [0 1 2]}}} | clack -e first -e second :bar -g :baz -f 'even?'" "(0 2)"
assert "echo {:foo {:bar {:baz [0 1 2]}}} | clack -e first | clack -e second | clack -g :bar | clack :baz | clack -f 'even?'" "(0 2)"
