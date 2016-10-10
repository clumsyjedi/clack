(ns clack.util
  (:require [cljs.js :refer [eval js-eval empty-state]]
            [cljs.tools.reader :refer [read-string]]
            [cljs.pprint :refer [pprint]]
            [cognitect.transit :as transit]
            [clojure.string :as s]))

(defonce formats {:js :json :json :json 
                  :transit :tjs :transit-js :tjs :tjs :tjs
                  :string :str :str :str :s :str
                  :edn :edn})

(defn error 
  "log error and exit with error code"
  [msg]
  (js/console.error msg)
  (js/process.exit 1))

(defn slurp [filename]
  (js/require "fs")
  (js/fs.readFileSync filename))

(defn eval* 
  "evaluate string"
  [s]
  (eval (empty-state)
        (read-string s)
        {:eval       js-eval
         :source-map true
         :context    :expr}
        identity))


(defn input-format [meta]
  (get formats (get meta :input-format) :edn))

(defn output-format [meta]
  (get formats (get meta :output-format) :edn))

