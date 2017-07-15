(ns clack.parser.edn
  (:require [clack.parser.protocol :refer [IParser]]
            [cljs.tools.reader :refer [read-string]]
            [planck.core :refer [slurp]]))

(defrecord EdnParser []
  IParser
  (handle-input [this stream complete-fn _]
    (complete-fn [(read-string (slurp stream))])))

(defn parser []
  (->EdnParser))
