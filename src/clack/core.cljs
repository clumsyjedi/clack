(ns clack.core
  (:require [cljs.nodejs :as nodejs]
            [cljs.tools.reader :refer [read-string]]
            [cljs.pprint :refer [pprint]]
            [clack.util :refer [input-format output-format eval* error]]
            [clack.parser :as parser]
            [clack.serializer :as serializer])) 

(nodejs/enable-util-print!)

(def allowed-opts {:input-format ["-i" "--input-format"]
                   :output-format ["-o" "--output-format"]
                   :map ["-m" "--map"]
                   :filter ["-f" "--filter"]
                   :remove ["-r" "--remove"]
                   :get ["-g" "--get-in"]
                   :eval ["-e" "--eval"]})

(def meta-opt-keys #{:input-format :output-format})

;; search opts are filters, evals etc that will be applied to your data structure
(def search-opts (reduce (fn [coll [k [short-opt long-opt]]]
                           (assoc coll short-opt k long-opt k)) 
                         {} (remove #(meta-opt-keys (key %)) allowed-opts)))


;; meta opts are global switches for controlling the behavioure of clack, like whether we are
;; parsing json or edn
(def meta-opts (reduce (fn [coll [k [short-opt long-opt]]]
                         (assoc coll short-opt k long-opt k)) 
                       {} (filter #(meta-opt-keys (key %)) allowed-opts)))

(defn looks-like-keyword? [s]
  (re-find #"^:[\w\-\./]+$" s))

(defn looks-like-string? [s]
  (re-find #"^[\w\.][\w\-\.]*$" s))

(defn looks-like-number? [s]
  (every? #{\1 \2 \3 \4 \5 \6 \7 \8 \9 \0} s))

(defn get-query 
  ([args] (get-query args {:meta {} :search []}))
  ([[arg & args] query]
   (cond (not arg)
         query

         (looks-like-keyword? arg)
         (recur args (update-in query [:search] 
                                conj [:get (keyword (.substr arg 1))]))

         (looks-like-number? arg)
         (recur args (update-in query [:search] 
                                conj [:get (js/parseInt arg)]))

         (looks-like-string? arg)
         (recur args (update-in query [:search] 
                                conj [:get arg]))

         (meta-opts arg)
         (recur (rest args) 
                (update-in query [:meta] 
                           assoc (meta-opts arg) (keyword (read-string (first args)))))
         
         (search-opts arg)
         (recur (rest args) 
                (update-in query [:search] 
                           conj [(search-opts arg) (:value (eval* (first args)))]))
         

         :default
         (error (str "Unknown argument: " arg)))))

(defn search [data [[qtype qval :as query] & queries]]
  (if-not query
    data
    (recur (condp = qtype

             :get (get data qval)

             :map (map qval data)
             
             :filter (filter qval data)
             
             :remove (remove qval data)
             
             :eval (qval data)
             
             (str "Unknown query type: " qtype))
           queries)))

(defn apply-query [query entities]
  (map (partial serializer/serialize (output-format (:meta query)))
       (if-let [s (not-empty (get query :search))]
         (map #(search % s) entities)
         entities)))

(defn slurp-stdin []
  (let [query (when-let [args (not-empty (drop 2 (js->clj js/process.argv)))]
                (get-query args))]
    (parser/parse (input-format (:meta query)) 
                  js/process.stdin 
                  (fn [entities]
                    (doseq [entity (apply-query query entities)]
                      (print entity))))))

(defn -main [& args]
  (slurp-stdin))

(set! *main-cli-fn* -main)
