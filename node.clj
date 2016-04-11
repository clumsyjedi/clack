(require 'cljs.build.api)

(cljs.build.api/build "src"
                      {:main 'clack.core
                       :output-to "clack.js"
                       :target :nodejs })
