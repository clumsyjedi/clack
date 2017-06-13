// Compiled by ClojureScript 1.9.229 {:optimize-constants true, :target :nodejs}
goog.provide('clack.parser');
goog.require('cljs.core');
goog.require('clack.parser.string');
goog.require('clack.parser.json');
goog.require('clack.parser.edn');
goog.require('clack.parser.yaml');
goog.require('clack.parser.transit');
goog.require('clack.parser.protocol');
clack.parser.parser = (function clack$parser$parser(input_type){
var pred__14893 = cljs.core._EQ_;
var expr__14894 = input_type;
if(cljs.core.truth_(pred__14893.call(null,cljs.core.cst$kw$json,expr__14894))){
return clack.parser.json.parser.call(null);
} else {
if(cljs.core.truth_(pred__14893.call(null,cljs.core.cst$kw$str,expr__14894))){
return clack.parser.string.parser.call(null);
} else {
if(cljs.core.truth_(pred__14893.call(null,cljs.core.cst$kw$tjs,expr__14894))){
return clack.parser.transit.parser.call(null);
} else {
if(cljs.core.truth_(pred__14893.call(null,cljs.core.cst$kw$yaml,expr__14894))){
return clack.parser.yaml.parser.call(null);
} else {
return clack.parser.edn.parser.call(null);
}
}
}
}
});
clack.parser.parse = (function clack$parser$parse(input_type,stream,complete_fn,keywordize_QMARK_){
return clack.parser.protocol.handle_input.call(null,clack.parser.parser.call(null,input_type),stream,complete_fn,keywordize_QMARK_);
});

//# sourceMappingURL=parser.js.map