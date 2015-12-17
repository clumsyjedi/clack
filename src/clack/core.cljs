(ns clack.core
  (:require [cljs.nodejs :as nodejs]
            [cljs.pprint :refer [pprint]]
            [cljs.reader :refer [read-string]]))

(nodejs/enable-util-print!)

(defn slurp-stdin []
  (js/process.stdin.setEncoding "utf8")
  (js/process.stdout.setEncoding "utf8")

  (let [input (atom "")
        query (when-let [args (not-empty (drop 2 (js->clj js/process.argv)))]
                (read-string (first args)))]
    (js/process.stdin.on "readable" (fn []
                                      (when-let [chunk (js/process.stdin.read)]
                                        (swap! input #(str % chunk)))))
    (js/process.stdin.on "end" (fn []
                                 (println :QQQ (type query) query)
                                 (let [data (read-string @input)] 
                                   (pprint (if query
                                             (get-in data query)
                                             data)))))))

(defn -main [& args]
  (slurp-stdin))

(set! *main-cli-fn* -main)

