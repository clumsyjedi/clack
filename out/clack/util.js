// Compiled by ClojureScript 1.9.229 {:optimize-constants true, :target :nodejs}
goog.provide('clack.util');
goog.require('cljs.core');
goog.require('cljs.js');
goog.require('cljs.tools.reader');
goog.require('cljs.pprint');
goog.require('cognitect.transit');
goog.require('clojure.string');
if(typeof clack.util.formats !== 'undefined'){
} else {
clack.util.formats = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$js,cljs.core.cst$kw$json,cljs.core.cst$kw$json,cljs.core.cst$kw$json,cljs.core.cst$kw$transit,cljs.core.cst$kw$tjs,cljs.core.cst$kw$transit_DASH_js,cljs.core.cst$kw$tjs,cljs.core.cst$kw$tjs,cljs.core.cst$kw$tjs,cljs.core.cst$kw$edn,cljs.core.cst$kw$edn], null);
}
/**
 * log error and exit with error code
 */
clack.util.error = (function clack$util$error(msg){
console.error(msg);

return process.exit((1));
});
clack.util.slurp = (function clack$util$slurp(filename){
require("fs");

return fs.readFileSync(filename);
});
/**
 * evaluate string
 */
clack.util.eval_STAR_ = (function clack$util$eval_STAR_(s){
return cljs.js.eval.call(null,cljs.js.empty_state.call(null),cljs.tools.reader.read_string.call(null,s),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$eval,cljs.js.js_eval,cljs.core.cst$kw$source_DASH_map,true,cljs.core.cst$kw$context,cljs.core.cst$kw$expr], null),cljs.core.identity);
});
clack.util.input_format = (function clack$util$input_format(meta){
return cljs.core.get.call(null,clack.util.formats,cljs.core.get.call(null,meta,cljs.core.cst$kw$input_DASH_format),cljs.core.cst$kw$edn);
});
clack.util.output_format = (function clack$util$output_format(meta){
return cljs.core.get.call(null,clack.util.formats,cljs.core.get.call(null,meta,cljs.core.cst$kw$output_DASH_format),cljs.core.cst$kw$edn);
});

//# sourceMappingURL=util.js.map