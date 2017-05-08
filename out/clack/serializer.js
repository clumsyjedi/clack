// Compiled by ClojureScript 1.9.229 {:optimize-constants true, :target :nodejs}
goog.provide('clack.serializer');
goog.require('cljs.core');
goog.require('clack.serializer.edn');
goog.require('clack.serializer.json');
goog.require('clack.serializer.transit');
goog.require('clack.serializer.string');
goog.require('clack.serializer.protocol');
clack.serializer.serializer = (function clack$serializer$serializer(input_type){
var pred__14842 = cljs.core._EQ_;
var expr__14843 = input_type;
if(cljs.core.truth_(pred__14842.call(null,cljs.core.cst$kw$json,expr__14843))){
return clack.serializer.json.serializer.call(null);
} else {
if(cljs.core.truth_(pred__14842.call(null,cljs.core.cst$kw$str,expr__14843))){
return clack.serializer.string.serializer.call(null);
} else {
if(cljs.core.truth_(pred__14842.call(null,cljs.core.cst$kw$tjs,expr__14843))){
return clack.serializer.transit.serializer.call(null);
} else {
return clack.serializer.edn.serializer.call(null);
}
}
}
});
clack.serializer.serialize = (function clack$serializer$serialize(input_type,data){
return clack.serializer.protocol.freeze.call(null,clack.serializer.serializer.call(null,input_type),data);
});

//# sourceMappingURL=serializer.js.map