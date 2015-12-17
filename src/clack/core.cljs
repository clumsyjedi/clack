(ns clack.core
  (:require [cljs.nodejs :as nodejs]
            [cljs.pprint :refer [pprint]]))

(nodejs/enable-util-print!)

(defn -main [& args]
  (println "Hello world!"))

(set! *main-cli-fn* -main)

