# yaml parsing

assert "cat test/fixtures/sample.yaml | clack -i yaml :doc" $'"one"\n"two"'
assert "cat test/fixtures/sample.yaml | clack -i yaml -w -e first :arr -e first" $'"first"'
assert "cat test/fixtures/sample.yaml | clack -i yaml -w -e first :map :lol" $'"fml"'

# yaml serializing

assert "echo {:foo \"bar\"} {:baz \"bak\"} | clack -o yaml " $'---\nfoo: bar\n\n---\nbaz: bak'

