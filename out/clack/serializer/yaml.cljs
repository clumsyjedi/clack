(ns clack.serializer.yaml
  (:require [clack.serializer.protocol :refer [ISerializer]]))

(def js-yaml (js/require "js-yaml"))

(defrecord YamlSerializer []
  ISerializer
  (freeze [this data]
    (str "---\n" (.dump js-yaml (clj->js data)))))

(defn serializer []
  (->YamlSerializer))
