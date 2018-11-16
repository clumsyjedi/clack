# Clack - Clojurescript on the command line.

Clack is a utility for destructuring and transforming data structures on the command line. It runs as a clojurescript application on the Node.js VM, and allows for the application of clojurescript functions to data within shell (eg. bash) pipelines.

Clack can be thought of as a replacement to sed, awk, grep etc. Where these tools have thrived in processing tabular, line based data over the decades, clack targets structured data such as JSON, YAML, TransitJs and EDN - although it can be used as a shell line processor as well.

Clack addresses the same problem spave as the excellent [jq](https://stedolan.github.io/jq/), however where that project focuses exclusively on JSON data, clack targets many data formats.

## Installation

```
npm install -g clack-cljs
```

## First look

Clack transforms input data from STDIN into Clojure (EDN) data structures, applies clojure functions to this data, and prints it to STDOUT. The true power of this process is in the Clojure functions themselves, so the interface to the clack binary is very simple.

Let's look at a trivial example. We have a JSON data structure in a file:

```
{
  "foo": "bar", 
  "baz": {
    "its": [
      "very", 
      "deep"
    ]
  }
}
```

In most line processors it would be hard to extract data nested inside this map. In clack, not so. We can do:

```
$ cat file.json | clack -i js :baz :its -e second
"deep"
```

To break this down:

`-i js` - treat the input as JSON. This input is converted into in memory clojurescript data structures on which our transformations will be applied.

`:baz :its -e second` - apply these tramsformations to the data in left to right order.

So `:baz` and `:its` are clojurescript keywords, that will descend down through the keys of the nested maps.

And `-e second` will evaluate the clojurescript `eval` function, the second element of the array.

## Usage

The top-level switches for clack are:

`clack [-i input-format] [-o output-format] [-w] [-u] [transformation pipeline ...]`

Input/ouput formats can be any one of edn (default), js (json), yaml, tjs (transit) or s (string).

### The transformation pipeline

The pipeline will treat tokens as follows:

`:foo` - any token prefixed with a colon is interpreted as a clojurescript keyword.

```
$ echo {:foo :x} | clack :foo
:x
```

`1` - any number will be interpreted as a number

```
$ echo '[:x :y :z]' | clack 1
:y
```

`/pattern/switches` - a javascript regex pattern, trailed by regex switches.

```
echo Substrings with suBstance | clack -e /subs/i
"Subs"
nil
"suBs"
```

`foo` - any non-numeric, non-colon prefixed token will be interpreted as a string

```
$ echo {"foo" :x} | clack foo
:x
```

Additionally, clack supports the switches `-m` (map), `-f` (filter) and `-r` (remove). These our outlined in the Examples section below.

### Input / output formats

Clack can read and write several formats. To specify a format just supply it as the argument to the `-i` or `-o` switches. The supported formats are:

yaml (YAML)

tjs (Transit JS)

js (JSON)

edn (EDN, default)

str (line bufered strings)

### Wrap/unwrap

A powerful, but counter intuitive feature of clack is that it treats its inputs as a list of data structures. Consider this:

```
$ echo {:foo 1} {:foo 2} | clack :foo
1
2
```

This is a behaviour that facilitates line processing, which is described below. However this may not be what you want. Consider this:

```
$ range 10 | clack -f 'even?'
```

You might assume that the above would filter the number 0-10, leaving only the even numbers. In fact, it will produce an error as it treats each number as a separate data structure and attempts to apply a filter to it (illegal). To get around this, we use the `-w` switch that wraps the data structures up into a list, so that they can be filtered like a list.

```
$ range 10 | clack -w -f 'even?'
(0 2 4 6 8 10)
```

But wait, that's still not what you want. Now the return type is a list of numbers, this was supposed to output numbers, not lists of numbers. No worries, use the `-u` (unwrap) switch.

```
$ range 10 | clack -w -u -f 'even?'
0
2
4
6
8
10
```

Ah that's better.

## clack as a line processor

Now that we have covered the somewhat awkward topic of wrapping and unwrapping, we can explore one of the other uses of clack - as a line processor. With tools like sed or perl one can read lines from stdin, apply a little string based trasformation and output this to stdout. Clack can also treat it's inputs as plain, old, boring strings.

```
cat /usr/share/dict/words | clack -w -u -i s -o s -f /^x/i
# ... all the words on my system that start with x - gosh there's so many.
```

Or, since this is actualy a really useful case

```
$ alias clackln="clack -w -u -i s -o s"
$ cat /usr/share/dict/words | clack -f /^x/i
# ... same list of words, who knew
```


## More Examples

*Echoing data unchanged*

```
$ echo '{}' | clack
{}
```

Looking up a key in a map

```
$ echo '{:foo :bar}' | clack :foo
:bar
```

Multi-level key lookup

```
$ echo '{:foo {:bar {:baz "whaaaat?"}}}' | clack :foo :bar :baz
"whaaaat?"
```

Extracting data as shown above delegates to clojurescripts `get` fn. The lookup args are passed through some regexes to identify whether they map to a edn primitive such as a number, string or keyword.

```
$ echo '{"foo" {:bar [:baz]}}' | clack foo :bar 0
:baz
```

Performing more complicated transformations on data is possible using some slightly more complicated syntax :)

Call a fn on data

```
echo '{:foo 1 :bar 2 :baz 3}' | clack -e keys
```
or
```
echo '{:foo 1 :bar 2 :baz 3}' | clack --eval keys
```

Map data

```
echo '[0 1 2 3 4 5 6 7 8 9]' | clack -m 'inc'
```
or
```
echo '[0 1 2 3 4 5 6 7 8 9]' | clack --map 'inc'
```

Filter data

```
echo '[0 1 2 3 4 5 6 7 8 9]' | clack -f 'even?'
```
or
```
echo '[0 1 2 3 4 5 6 7 8 9]' | clack --filter 'even?'
```

Remove data

```
echo '[0 1 2 3 4 5 6 7 8 9]' | clack -r 'even?'
```
or
```
echo '[0 1 2 3 4 5 6 7 8 9]' | clack --remove 'even?'
```

There is also an explicit syntax for `get`:

```
echo '{:foo :bar}' | clack -g :foo
```

Sometimes the auto-coercion of your query params will catch you out. For example, the output of 

```
"echo '{":foo" :bar}' | clack :foo
```

Is not `:bar` as expected, because the key of the hash is inside quotes, making it a string. To get around this, you can use:

```
echo '{":foo" :bar}' | clack -g '":foo"'
```

Likewise this allows you to do lookups with strings that start with `-` - which would normally be interpreted as getopt style args.

```
echo '{"-filter" :bar}' | clack -g '"-filter"'
```

Finally, you can chain as many operations as you want, either through multiple switches, or by chaining on the command line with pipes (clack pipes if you like).

```
echo {:foo {:bar {:baz [0 1 2]}}} | clack -e first -e second :bar -g :baz -f 'even?'
```
or
```
echo {:foo {:bar {:baz [0 1 2]}}} | clack -e first | clack -e second | clack -g :bar | clack :baz | clack -f 'even?'
```

#meta

Licensed unde the Eclipse Public License - v 1.0

&copy; 2016 Frazer Irving

