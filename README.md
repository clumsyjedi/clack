# Clack

Searchy, greppy jq-ish stuff for clojurey, edenish data

On the command line.

## Setup

[https://github.com/clojure/clojurescript/wiki/Quick-Start#running-clojurescript-on-nodejs](cribbed from)

The only differences are that we had to specify a :nodejs target and we do not output main.js to the out directory. This is important due to the way that Node.js resolves JavaScript source files.

Node.js has great source mapping support, in order to enable it just install source-map-support:

```npm install source-map-support```

Let's build your Node project:

```java -cp cljs.jar:src clojure.main node.clj```

You can run your file with:

```node main.js```


