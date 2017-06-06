(ns clack.parser
  (:require [clack.parser.edn :as edn]
            [clack.parser.json :as json]
            [clack.parser.transit :as transit]
            [clack.parser.protocol :refer [handle-input]]
            [clack.parser.string :as string]
            [clack.parser.yaml :as yaml]))

(defn- parser [input-type]
  (condp = input-type
    :json (json/parser)
    :str (string/parser)
    :tjs (transit/parser)
    :yaml (yaml/parser)
    (edn/parser)))

(defn parse [input-type stream complete-fn]
  (handle-input (parser input-type) stream complete-fn))
