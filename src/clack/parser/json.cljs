(ns clack.parser.json
  (:require [clack.parser.protocol :refer [IParser]]))

(def jsonparse (js/require "jsonparse"))

(defrecord JsonParser []
  IParser
  (handle-input [this stream complete-fn keywordize?]
    (let [entities (atom [])
          parser (jsonparse.)]
      (aset parser "onValue" (fn [entity]
                               (this-as self
                                        (when (zero? (.-length (.-stack self)))
                                          (swap! entities conj 
                                                 (js->clj entity 
                                                          :keywordize-keys keywordize?))))))
      (.on stream "readable" (fn []
                               (when-let [chunk (.read stream)]
                                 (.write parser chunk))))
      (.on stream "end" (fn []
                          (complete-fn @entities))))))

(defn parser []
  (->JsonParser))
