(ns clack.parser.protocol)

(defprotocol IParser
  (handle-input [this stream complete-fn keywordize?]))
