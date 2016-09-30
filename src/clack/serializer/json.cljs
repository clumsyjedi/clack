(ns clack.serializer.json
  (:require [clack.serializer.protocol :refer [ISerializer]]))

(def jsonparse (js/require "jsonparse"))

(defrecord JsonSerializer []
  ISerializer
  (freeze [this data]
    (js/JSON.stringify (clj->js data))))

(defn serializer []
  (->JsonSerializer))
