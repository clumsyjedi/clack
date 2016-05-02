// Compiled by ClojureScript 1.8.51 {:optimize-constants true, :target :nodejs}
goog.provide('clack.util');
goog.require('cljs.core');
goog.require('cljs.tools.reader');
goog.require('cljs.js');
goog.require('cljs.pprint');
goog.require('cognitect.transit');
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
clack.util.find_encoding = (function clack$util$find_encoding(enc){
return cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$js,cljs.core.cst$kw$json,cljs.core.cst$kw$json,cljs.core.cst$kw$json,cljs.core.cst$kw$transit,cljs.core.cst$kw$tjs,cljs.core.cst$kw$transit_DASH_js,cljs.core.cst$kw$tjs,cljs.core.cst$kw$tjs,cljs.core.cst$kw$tjs,cljs.core.cst$kw$edn,cljs.core.cst$kw$edn], null),enc,cljs.core.cst$kw$edn);
});
if(typeof clack.util.read_input !== 'undefined'){
} else {
clack.util.read_input = (function (){var method_table__7135__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__7136__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__7137__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__7138__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__7139__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"clack.util","read-input"),((function (method_table__7135__auto__,prefer_table__7136__auto__,method_cache__7137__auto__,cached_hierarchy__7138__auto__,hierarchy__7139__auto__){
return (function (encoding,input){
return clack.util.find_encoding.call(null,encoding);
});})(method_table__7135__auto__,prefer_table__7136__auto__,method_cache__7137__auto__,cached_hierarchy__7138__auto__,hierarchy__7139__auto__))
,cljs.core.cst$kw$default,hierarchy__7139__auto__,method_table__7135__auto__,prefer_table__7136__auto__,method_cache__7137__auto__,cached_hierarchy__7138__auto__));
})();
}
cljs.core._add_method.call(null,clack.util.read_input,cljs.core.cst$kw$json,(function (_,input){
return cljs.core.js__GT_clj.call(null,JSON.parse(input));
}));
cljs.core._add_method.call(null,clack.util.read_input,cljs.core.cst$kw$tjs,(function (_,input){
var r = cognitect.transit.reader.call(null,cljs.core.cst$kw$json);
return cognitect.transit.read.call(null,r,input);
}));
cljs.core._add_method.call(null,clack.util.read_input,cljs.core.cst$kw$edn,(function (_,input){
return cljs.tools.reader.read_string.call(null,input);
}));
cljs.core._add_method.call(null,clack.util.read_input,cljs.core.cst$kw$default,(function (_,input){
return clack.util.read_input.call(null,cljs.core.cst$kw$edn,input);
}));
if(typeof clack.util.write_output !== 'undefined'){
} else {
clack.util.write_output = (function (){var method_table__7135__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__7136__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__7137__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__7138__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__7139__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"clack.util","write-output"),((function (method_table__7135__auto__,prefer_table__7136__auto__,method_cache__7137__auto__,cached_hierarchy__7138__auto__,hierarchy__7139__auto__){
return (function (encoding,output){
return clack.util.find_encoding.call(null,encoding);
});})(method_table__7135__auto__,prefer_table__7136__auto__,method_cache__7137__auto__,cached_hierarchy__7138__auto__,hierarchy__7139__auto__))
,cljs.core.cst$kw$default,hierarchy__7139__auto__,method_table__7135__auto__,prefer_table__7136__auto__,method_cache__7137__auto__,cached_hierarchy__7138__auto__));
})();
}
cljs.core._add_method.call(null,clack.util.write_output,cljs.core.cst$kw$json,(function (_,output){
return JSON.stringify(cljs.core.clj__GT_js.call(null,output),null,"\t");
}));
cljs.core._add_method.call(null,clack.util.write_output,cljs.core.cst$kw$tjs,(function (_,output){
var w = cognitect.transit.writer.call(null,cljs.core.cst$kw$json);
return cognitect.transit.write.call(null,w,output);
}));
cljs.core._add_method.call(null,clack.util.write_output,cljs.core.cst$kw$edn,(function (_,output){
var sb__7196__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_16620_16622 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_16621_16623 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_16620_16622,_STAR_print_fn_STAR_16621_16623,sb__7196__auto__){
return (function (x__7197__auto__){
return sb__7196__auto__.append(x__7197__auto__);
});})(_STAR_print_newline_STAR_16620_16622,_STAR_print_fn_STAR_16621_16623,sb__7196__auto__))
;

try{cljs.pprint.pprint.call(null,output);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_16621_16623;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_16620_16622;
}
return [cljs.core.str(sb__7196__auto__)].join('');
}));

//# sourceMappingURL=util.js.map