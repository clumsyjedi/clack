(defproject clack "0.0.1"
  :dependencies  [[org.clojure/clojure "1.8.0"]
                  [org.clojure/clojurescript  "1.8.51"]]
  :plugins  [[lein-cljsbuild "1.1.3"]]
  :cljsbuild {
    :builds [{
        :source-paths ["src"]
        :compiler {
          :main 'clack.core
          :output-to "clack.js"
          :output-dir "out"
          ;; :optimizations :whitespace
          :target :nodejs
          ;; :pretty-print false
          }}]})
