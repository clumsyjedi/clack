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
                   :wrap ["-w" "--wrap"]
                   :unwrap ["-u" "--unwrap"]
                   :map ["-m" "--map"]
                   :filter ["-f" "--filter"]
                   :remove ["-r" "--remove"]
                   :get ["-g" "--get-in"]
                   :eval ["-e" "--eval"]})

(def input-opt-keys #{:input-format :output-format})

;; search opts are filters, evals etc that will be applied to your data structure
(def search-opts (reduce (fn [coll [k [short-opt long-opt]]]
                           (assoc coll short-opt k long-opt k)) 
                         {} (dissoc allowed-opts :input-format :output-format :wrap :unwrap)))

(def wrap-opts (reduce (fn [coll [k [short-opt long-opt]]]
                         (assoc coll short-opt k long-opt k)) 
                       {} (select-keys allowed-opts [:wrap :unwrap])))


;; meta opts are global switches for controlling the behavioure of clack, like whether we are
;; parsing json or edn
(def input-opts (reduce (fn [coll [k [short-opt long-opt]]]
                         (assoc coll short-opt k long-opt k))
                       {} (filter #(input-opt-keys (key %)) allowed-opts)))

(def regex-regex #"^/[^/]*/([a-zA-Z])*?$")

(defn looks-like-regex? [s]
  (re-find regex-regex s))

(defn looks-like-keyword? [s]
  (re-find #"^:[\w\-\./_:]+$" s))

(defn looks-like-string? [s]
  (re-find #"^[\w\.][\w\-\.]*$" s))

(defn looks-like-number? [s]
  (every? #{\1 \2 \3 \4 \5 \6 \7 \8 \9 \0} s))

(defn- regex-fn [arg]
  (fn [s]
    (re-find (js/eval arg) (str s))))

(defn get-query 
  ([args] (get-query args {:meta {} :search []}))
  ([[arg & args] query]
   (cond (not arg)
         query

         (looks-like-regex? arg)
         (recur (rest args) 
                (update-in query [:search] conj [:eval (regex-fn arg)]))

         (looks-like-keyword? arg)
         (recur args (update-in query [:search] 
                                conj [:get (keyword (.substr arg 1))]))

         (looks-like-number? arg)
         (recur args (update-in query [:search] 
                                conj [:get (js/parseInt arg)]))

         (looks-like-string? arg)
         (recur args (update-in query [:search] 
                                conj [:get arg]))


         (wrap-opts arg)
         (recur args
                (update-in query [:meta] 
                           assoc (wrap-opts arg) true))

         (input-opts arg)
         (recur (rest args)
                (update-in query [:meta]
                           assoc (input-opts arg) (keyword (read-string (first args)))))
         
         (search-opts arg)
         (let [pred (first args)]
           (recur (rest args)
                  (update-in query [:search] 
                             conj [(search-opts arg) (if (looks-like-regex? pred)
                                                       (regex-fn pred)
                                                       (:value (eval* pred)))])))
         

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
  (let [entities (map (fn [entity] (search entity (not-empty (get query :search)))) entities)
        entities (if (get-in query [:meta :unwrap]) (first entities) entities)]
    (map (partial serializer/serialize (output-format (:meta query))) entities)))

(defn -main [& args]
  (let [query (when-let [args (not-empty (drop 2 (js->clj js/process.argv)))]
                (get-query args))]
    (parser/parse (input-format (:meta query)) 
                  js/process.stdin 
                  (fn [entities]
                    (let [entities (if (get-in query [:meta :wrap]) [entities] entities)]
                      (doseq [entity (apply-query query entities)]
                        (print entity)))))))

(set! *main-cli-fn* -main)
