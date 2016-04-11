(require 'cljs.build.api)

(cljs.build.api/build "src"
                      {:main 'clack.core
                       :output-to "lib/clack.js"
                       :output-dir "lib/out"
                       :target :nodejs})
