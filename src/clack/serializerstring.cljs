(ns clack.serializer.string
  (:require [clack.serializer.protocol :refer [ISerializer]]))

(defrecord EdnSerializer []
  ISerializer
  (freeze [this data]
    (str data)))

(defn serializer []
  (->EdnSerializer))
