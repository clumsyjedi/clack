(ns clack.serializer.protocol)

(defprotocol ISerializer
  (freeze [this data]))
