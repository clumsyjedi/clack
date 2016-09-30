(ns clack.serializer
  (:require [clack.serializer.edn :as edn]
            [clack.serializer.json :as json]
            [clack.serializer.transit :as transit]
            [clack.serializer.protocol :refer [freeze]]))

(defn- serializer [input-type]
  (condp = input-type
    :json (json/serializer)
    :tjs (transit/serializer)
    (edn/serializer)))

(defn serialize [input-type data]
  (freeze (serializer input-type) data))
