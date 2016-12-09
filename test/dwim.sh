# DWIM - Do What I Mean
#
# There are three invocation modes that are relevant here:

# Input is a single data structure, query should be applied against it, and a dingle data structure should be returned
assert "echo {:foo :bar} | clack :foo " ":bar"

# input is multiple data structures, the query should be applied to each data structure. Output should be multiple data structures.
assert "echo [1 2 3] [4 5 6] [7 8 9] | clack -f 'even?'" "(2)\n(4 6)\n(8)"

# input is multiple data structures, query should be applied to the collection of all datastructures, the output should be multiple data structures
assert "echo {} 1 [] | clack -w -u -f 'coll?'" "{}\n[]"

# read in lines of numbers, increment them, write out lines of numbers
assert "echo 1\n\2\n\3 | clack -e inc" 

# echo foo | clack should have the same output as echo '{"foo" "bar"}' | clack -e first -e key
assert "echo '{\"foo\" \"bar\"}' | clack -e first -e key" '"foo"'
assert "echo foo | clack -i str" '"foo"'
