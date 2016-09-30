(ns clack.serializer.transit
  (:require [clack.serializer.protocol :refer [ISerializer]]
            [cognitect.transit :as transit]
            ))

(defrecord TransitSerializer []
  ISerializer
  (freeze [this data]
    (transit/write (transit/writer :json) data)))

(defn serializer []
  (->TransitSerializer))
