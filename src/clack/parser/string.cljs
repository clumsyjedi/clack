(ns clack.parser.string
  (:require [clack.parser.protocol :refer [IParser]]))

(defrecord StringParser []
  IParser
  (handle-input [this stream complete-fn _]
    (let [lines (atom [])]
      (.on stream "readable" (fn []

                               (let [rl (.createInterface (js/require "readline") 
                                                          (clj->js {:input stream
                                                                    :terminal false}))]
                                 (.on rl "line" (fn [line] 
                                                  (swap! lines conj line))))))
      (.on stream "end" (fn []
                          (complete-fn @lines))))))

(defn parser []
  (->StringParser))
