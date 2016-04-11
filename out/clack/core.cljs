(ns clack.core
  (:require [cljs.nodejs :as nodejs]
            [cljs.pprint :refer [pprint]]
            [cljs.tools.reader :refer [read-string]]
            [cljs.js :refer [eval js-eval empty-state]]))

(nodejs/enable-util-print!)

(defn error 
  "log error and exit with error code"
  [msg]
  (js/console.error msg)
  (js/process.exit 1))

(defn eval* 
  "evaluate string"
  [s]
  (eval (empty-state)
        (read-string s)
        {:eval       js-eval
         :source-map true
         :context    :expr}
        (fn [result] result)))


(def allowed-opts {:filter ["-f" "--filter"]
                   :remove ["-r" "--remove"]
                   :get ["-g" "--get-in"]
                   :eval ["-e" "--eval"]})


(def short-opts (zipmap (map first (vals allowed-opts)) (keys allowed-opts)))
(def long-opts (zipmap (map second (vals allowed-opts)) (keys allowed-opts)))

;(println :SHORT short-opts)
;(println :LONG long-opts)

(defn looks-like-keyword? [s]
  (re-find #"^:[\w\-\.]+$" s))

(defn looks-like-string? [s]
  (re-find #"^[\w\.][\w\-\.]*$" s))

(defn looks-like-number? [s]
  (every? #{\1 \2 \3 \4 \5 \6 \7 \8 \9 \0} s))

(defn get-query 
  ([args] (get-query args []))
  ([[arg & args] query]
   (cond (not arg)
         query
         
         (looks-like-keyword? arg)
         (recur args (conj query [:get (keyword (.substr arg 1))]))

         (looks-like-number? arg)
         (recur args (conj query [:get (js/parseInt arg)]))

         (looks-like-string? arg)
         (recur args (conj query [:get arg]))

         (short-opts arg)
         (recur (rest args) (conj query [(short-opts arg) (:value (eval* (first args)))]))
         
         (long-opts arg)
         (recur (rest args) (conj query [(long-opts arg) (:value (eval* (first args)))]))

         :default
         (error (str "Unknown argument: " arg))
         )))

(defn search [data [[qtype qval :as query] & queries]]
  (if-not query
    data
    (recur (condp = qtype
             :get (get data qval)
             
             :filter (filter qval data)
             
             :remove (filter qval data)
             
             :eval (qval data)
             
             (str "Unknown query type: " qtype))
           queries)))

(defn slurp-stdin []
  ; do we need these, do some testing around input/output encoding
  ;(js/process.stdin.setEncoding "utf8")
  ;(js/process.stdout.setEncoding "utf8")

  (let [input (atom "")
        query (when-let [args (not-empty (drop 2 (js->clj js/process.argv)))]
                (get-query args))]
    (js/process.stdin.on "readable" (fn []
                                      (when-let [chunk (js/process.stdin.read)]
                                        (swap! input #(str % chunk)))))
    (js/process.stdin.on "end" (fn []
                                 (let [data (eval* @input)] 
                                   (pprint (if query
                                             (search (:value data) query) 
                                             (:value data))))))))

(defn -main [& args]
  (slurp-stdin))

(set! *main-cli-fn* -main)

