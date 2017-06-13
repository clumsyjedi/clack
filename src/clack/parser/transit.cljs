(ns clack.parser.transit
  (:require [clack.parser.protocol :refer [IParser]]
            [cognitect.transit :as transit]
            ))

(defrecord TransitParser []
  IParser
  (handle-input [this stream complete-fn _]
    (let [input (atom "")]
      (.on stream "readable" (fn []
                               (when-let [chunk (.read stream)]
                                 (swap! input #(str % chunk)))))
      (.on stream "end" (fn []
                          (complete-fn (transit/read (transit/reader :json) 
                                                     (str "[" @input "]"))))))))

(defn parser []
  (->TransitParser))
