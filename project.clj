(defproject clack "0.0.1"
  :dependencies  [[org.clojure/clojure "1.8.0"]
                  [org.clojure/clojurescript "1.8.51"]
                  [com.cognitect/transit-cljs "0.8.237"]]
  :plugins  [[lein-cljsbuild "1.1.3"]]
  :profiles {:dev {:dependencies [[com.cemerick/piggieback "0.2.1"]
                                  [org.clojure/tools.nrepl "0.2.10"]]
                   :repl-options {:nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]}}}
  :cljsbuild {:builds [{:source-paths ["src"]
                        :compiler {
                                   :main "clack.core"
                                   :output-to "clack.js"
                                   :output-dir "out"
                                   :optimizations :none
                                   :target :nodejs
                                   :optimize-constants true
                                   :pretty-print false
                                   }}]})
