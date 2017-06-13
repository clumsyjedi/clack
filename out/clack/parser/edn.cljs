(ns clack.parser.edn
  (:require [clack.parser.protocol :refer [IParser]]
            [cljs.tools.reader :refer [read-string]]))

(defrecord EdnParser []
  IParser
  (handle-input [this stream complete-fn _]
    (let [input (atom "")]
      (.on stream "readable" (fn []
                               (when-let [chunk (.read stream)]
                                 (swap! input #(str % chunk)))))
      (.on stream "end" (fn []
                          (complete-fn (read-string (str "[" @input "]"))))))))

(defn parser []
  (->EdnParser))
