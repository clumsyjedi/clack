(ns clack.serializer.string
  (:require [clack.serializer.protocol :refer [ISerializer]]
            [cljs.tools.reader :refer [read-string]]
            [cljs.pprint :refer [pprint]]
            [clojure.string :as s]))

(defrecord StringSerializer []
  ISerializer
  (freeze [this data]
    (str data)))

(defn serializer []
  (->StringSerializer))
