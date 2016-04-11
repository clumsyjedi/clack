# Clack

Searchy, greppy jq-ish stuff for clojurey, edenish data

On the command line.

## Setup

1. Install [https://nodejs.org](Node.js) on your machine and make sure the `node` executable is on your PATH.
1. Clone this project `git clone https://github.com/clumsyjedi/clack`
1. Add `clack` executable to your path `export PATH=/path/to/clack/bin:$PATH`

and you're done.

## Usage

Clack provides a command line interface to clojure data and code. It is inspired conceptually by [jq](https://github.com/stedolan/jq) but differs considerably in it's syntax.

Clack reads data from stdin, and writes it to stdout. Options for manipulating that data are passed as arguments to the executable.

Let's look at some examples:

*Echoing data unchanged*

```
echo '{}' | clack
```

Looking up a key in a map

```
echo '{:foo :bar}' | clack :foo
```

Multi-level key lookup

```
echo '{:foo {:bar {:baz "whaaaat?"}}}' | clack :foo :bar :baz
```

Extracting data as shown above delegates to clojurescripts `get` fn. The lookup args are passed through some regexes to identify whether they map to a edn primitive such as a number, string or keyword.

```
echo '{"foo" {:bar [:baz]}}' | clack foo :bar 0
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

Likewise this allows tou to do lookups with strings that start with `-` - which would normll be interpreted as getopt style args.

```
echo '{"-filter" :bar}' | clack -g '"-filter"'
```

Finally, you can chain as many operations as you want , either through multiple switches, or by chaining on the command line with pipes (clack pipes if you like).

```
echo {:foo {:bar {:baz [0 1 2]}}} | clack -e first -e second :bar -g :baz -f 'even?'
```
or
```
echo {:foo {:bar {:baz [0 1 2]}}} | clack -e first | clack -e second | clack -g :bar | clack :baz | clack -f 'even?'
```

&copy; 2016 Frazer Irving
