(ns clack.core
  (:require [cljs.nodejs :as nodejs]
            [cljs.pprint :refer [pprint]]))

(nodejs/enable-util-print!)

(defn slurp-stdin []
  ;(js/process.stdin.setEncoding "utf8")
  ;(js/process.stdout.setEncoding "utf8")
  (let [input (atom "")]
    (js/process.stdin.on "readable" (fn []
                                      (when-let [chunk (js/process.stdin.read)]
                                        (swap! input #(str % chunk)))))
    (js/process.stdin.on "end" (fn []
                                 (print @input)))))

(defn -main [& args]
  (slurp-stdin))

(set! *main-cli-fn* -main)

