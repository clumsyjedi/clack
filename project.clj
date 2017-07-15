(defproject clack "0.0.1"
  :dependencies  [[cljsjs/oboe "2.1.2-1"]]
  :plugins  [[lein-cljsbuild "1.1.3"]]
  :profiles {:dev {:dependencies [[com.cemerick/piggieback "0.2.1"]
                                  [org.clojure/tools.nrepl "0.2.10"]]
                   :repl-options {:nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]}}}
  :cljsbuild {:builds [{:source-paths ["src"]
                        :compiler {:main "clack.core"
                                   :output-to "clack.js"
                                   :output-dir "out"
                                   :target :nodejs
                                   :optimize-constants true
                                   :pretty-print false
                                   }}]})
