(ns clack.parser.yaml
  (:require [clack.parser.protocol :refer [IParser]]))

(def js-yaml (js/require "js-yaml"))

(defrecord YamlParser []
  IParser
  (handle-input [this stream complete-fn]
    (let [input (atom "")
          entities (atom [])]
      (.on stream "readable" (fn []
                               (when-let [chunk (.read stream)]
                                 (swap! input #(str % chunk)))))
      (.on stream "end" (fn []
                          (complete-fn (map #(js->clj % :keywordize-keys true)
                                            (.loadAll js-yaml @input))))))))

(defn parser []
  (->YamlParser))
