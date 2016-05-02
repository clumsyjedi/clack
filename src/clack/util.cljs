(ns clack.util
  (:require [cljs.tools.reader :refer [read-string]]
            [cljs.js :refer [eval js-eval empty-state]]
            [cljs.pprint :refer [pprint]]
            [cognitect.transit :as transit]))

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


(defn- find-encoding [enc]
  (get {:js :json :json :json 
        :transit :tjs :transit-js :tjs :tjs :tjs
        :edn :edn} 
       enc :edn))

(defmulti read-input (fn [encoding input] (find-encoding encoding)))

(defmethod read-input :json [_ input]
  (js->clj (js/JSON.parse input)))

(defmethod read-input :tjs [_ input]
  (let [r (transit/reader :json)]
    (transit/read r input)))

(defmethod read-input :edn [_ input]
  (read-string input))

(defmethod read-input :default [_ input]
  (read-input :edn input))

(defmulti write-output (fn [encoding output] (find-encoding encoding)))

(defmethod write-output :json [_ output]
  (js/JSON.stringify (clj->js output) nil "\t"))

(defmethod write-output :tjs [_ output]
  (let [w (transit/writer :json)]
    (transit/write w output)))

(defmethod write-output :edn [_ output]
  (with-out-str (pprint output)))


