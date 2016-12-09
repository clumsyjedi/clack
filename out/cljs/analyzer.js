// Compiled by ClojureScript 1.9.229 {:optimize-constants true, :target :nodejs}
goog.provide('cljs.analyzer');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('goog.string');
goog.require('cljs.tools.reader');
goog.require('cljs.tagged_literals');
goog.require('cljs.tools.reader.reader_types');
goog.require('cljs.env');
goog.require('clojure.string');
goog.require('cljs.reader');
cljs.analyzer._STAR_cljs_ns_STAR_ = cljs.core.cst$sym$cljs$user;
cljs.analyzer._STAR_cljs_file_STAR_ = null;
cljs.analyzer._STAR_cljs_static_fns_STAR_ = false;
cljs.analyzer._STAR_cljs_macros_path_STAR_ = "/cljs/core";
cljs.analyzer._STAR_cljs_macros_is_classpath_STAR_ = true;
cljs.analyzer._STAR_cljs_dep_set_STAR_ = cljs.core.with_meta.call(null,cljs.core.PersistentHashSet.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$dep_DASH_path,cljs.core.PersistentVector.EMPTY], null));
cljs.analyzer._STAR_analyze_deps_STAR_ = true;
cljs.analyzer._STAR_load_tests_STAR_ = true;
cljs.analyzer._STAR_load_macros_STAR_ = true;
cljs.analyzer._STAR_reload_macros_STAR_ = false;
cljs.analyzer._STAR_macro_infer_STAR_ = true;
cljs.analyzer._STAR_file_defs_STAR_ = null;
cljs.analyzer._STAR_verbose_STAR_ = false;
cljs.analyzer._cljs_macros_loaded = cljs.core.atom.call(null,false);
cljs.analyzer._STAR_cljs_warnings_STAR_ = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$invoke_DASH_ctor,cljs.core.cst$kw$extending_DASH_base_DASH_js_DASH_type,cljs.core.cst$kw$unsupported_DASH_preprocess_DASH_value,cljs.core.cst$kw$redef,cljs.core.cst$kw$unsupported_DASH_js_DASH_module_DASH_type,cljs.core.cst$kw$invalid_DASH_protocol_DASH_symbol,cljs.core.cst$kw$protocol_DASH_duped_DASH_method,cljs.core.cst$kw$munged_DASH_namespace,cljs.core.cst$kw$single_DASH_segment_DASH_namespace,cljs.core.cst$kw$fn_DASH_arity,cljs.core.cst$kw$variadic_DASH_max_DASH_arity,cljs.core.cst$kw$protocol_DASH_with_DASH_variadic_DASH_method,cljs.core.cst$kw$fn_DASH_deprecated,cljs.core.cst$kw$undeclared_DASH_var,cljs.core.cst$kw$preamble_DASH_missing,cljs.core.cst$kw$undeclared_DASH_protocol_DASH_symbol,cljs.core.cst$kw$dynamic,cljs.core.cst$kw$unprovided,cljs.core.cst$kw$ns_DASH_var_DASH_clash,cljs.core.cst$kw$undeclared_DASH_ns,cljs.core.cst$kw$undeclared_DASH_ns_DASH_form,cljs.core.cst$kw$invalid_DASH_arithmetic,cljs.core.cst$kw$protocol_DASH_deprecated,cljs.core.cst$kw$fn_DASH_var,cljs.core.cst$kw$overload_DASH_arity,cljs.core.cst$kw$protocol_DASH_multiple_DASH_impls,cljs.core.cst$kw$redef_DASH_in_DASH_file,cljs.core.cst$kw$protocol_DASH_invalid_DASH_method,cljs.core.cst$kw$extend_DASH_type_DASH_invalid_DASH_method_DASH_shape,cljs.core.cst$kw$multiple_DASH_variadic_DASH_overloads],[true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true]);
cljs.analyzer.js_reserved = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 62, ["typeof",null,"float",null,"implements",null,"else",null,"boolean",null,"abstract",null,"int",null,"static",null,"package",null,"this",null,"yield",null,"interface",null,"void",null,"delete",null,"class",null,"export",null,"var",null,"try",null,"long",null,"null",null,"return",null,"methods",null,"native",null,"private",null,"new",null,"for",null,"catch",null,"extends",null,"short",null,"protected",null,"throws",null,"synchronized",null,"transient",null,"super",null,"if",null,"let",null,"import",null,"char",null,"switch",null,"const",null,"case",null,"break",null,"volatile",null,"function",null,"continue",null,"final",null,"do",null,"double",null,"while",null,"public",null,"arguments",null,"debugger",null,"with",null,"instanceof",null,"default",null,"throw",null,"goto",null,"finally",null,"byte",null,"constructor",null,"in",null,"enum",null], null), null);
cljs.analyzer.SENTINEL = {};
cljs.analyzer.gets = (function cljs$analyzer$gets(var_args){
var args8329 = [];
var len__7484__auto___8332 = arguments.length;
var i__7485__auto___8333 = (0);
while(true){
if((i__7485__auto___8333 < len__7484__auto___8332)){
args8329.push((arguments[i__7485__auto___8333]));

var G__8334 = (i__7485__auto___8333 + (1));
i__7485__auto___8333 = G__8334;
continue;
} else {
}
break;
}

var G__8331 = args8329.length;
switch (G__8331) {
case 3:
return cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8329.length)].join('')));

}
});

cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$3 = (function (m,k0,k1){
var m__$1 = cljs.core.get.call(null,m,k0,cljs.analyzer.SENTINEL);
if((m__$1 === cljs.analyzer.SENTINEL)){
return null;
} else {
return cljs.core.get.call(null,m__$1,k1);
}
});

cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$4 = (function (m,k0,k1,k2){
var m__$1 = cljs.core.get.call(null,m,k0,cljs.analyzer.SENTINEL);
if((m__$1 === cljs.analyzer.SENTINEL)){
return null;
} else {
var m__$2 = cljs.core.get.call(null,m__$1,k1,cljs.analyzer.SENTINEL);
if((m__$2 === cljs.analyzer.SENTINEL)){
return null;
} else {
return cljs.core.get.call(null,m__$2,k2);
}
}
});

cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$5 = (function (m,k0,k1,k2,k3){
var m__$1 = cljs.core.get.call(null,m,k0,cljs.analyzer.SENTINEL);
if((m__$1 === cljs.analyzer.SENTINEL)){
return null;
} else {
var m__$2 = cljs.core.get.call(null,m__$1,k1,cljs.analyzer.SENTINEL);
if((m__$2 === cljs.analyzer.SENTINEL)){
return null;
} else {
var m__$3 = cljs.core.get.call(null,m__$2,k2,cljs.analyzer.SENTINEL);
if((m__$3 === cljs.analyzer.SENTINEL)){
return null;
} else {
return cljs.core.get.call(null,m__$3,k3);
}
}
}
});

cljs.analyzer.gets.cljs$lang$maxFixedArity = 5;

cljs.analyzer.CLJ_NIL_SYM = cljs.core.cst$sym$clj_DASH_nil;
cljs.analyzer.NUMBER_SYM = cljs.core.cst$sym$number;
cljs.analyzer.STRING_SYM = cljs.core.cst$sym$string;
cljs.analyzer.BOOLEAN_SYM = cljs.core.cst$sym$boolean;
cljs.analyzer.JS_STAR_SYM = cljs.core.cst$sym$js_STAR_;
cljs.analyzer.DOT_SYM = cljs.core.cst$sym$_DOT_;
cljs.analyzer.NEW_SYM = cljs.core.cst$sym$new;
cljs.analyzer.CLJS_CORE_SYM = cljs.core.cst$sym$cljs$core;
cljs.analyzer.CLJS_CORE_MACROS_SYM = cljs.core.cst$sym$cljs$core$macros;
cljs.analyzer.IGNORE_SYM = cljs.core.cst$sym$ignore;
cljs.analyzer.ANY_SYM = cljs.core.cst$sym$any;
cljs.analyzer.cljs_seq_QMARK_ = (function cljs$analyzer$cljs_seq_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition0$ & (64))) || (x.cljs$core$ISeq$)){
return true;
} else {
return false;
}
} else {
return false;
}
});
cljs.analyzer.cljs_map_QMARK_ = (function cljs$analyzer$cljs_map_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition0$ & (1024))) || (x.cljs$core$IMap$)){
return true;
} else {
return false;
}
} else {
return false;
}
});
cljs.analyzer.cljs_vector_QMARK_ = (function cljs$analyzer$cljs_vector_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition0$ & (16384))) || (x.cljs$core$IVector$)){
return true;
} else {
return false;
}
} else {
return false;
}
});
cljs.analyzer.cljs_set_QMARK_ = (function cljs$analyzer$cljs_set_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition0$ & (4096))) || (x.cljs$core$ISet$)){
return true;
} else {
return false;
}
} else {
return false;
}
});
cljs.analyzer.munge_path = (function cljs$analyzer$munge_path(ss){
return cljs.core.munge.call(null,[cljs.core.str(ss)].join(''));
});
/**
 * Given a namespace as a symbol return the relative path. May optionally
 *   provide the file extension, defaults to :cljs.
 */
cljs.analyzer.ns__GT_relpath = (function cljs$analyzer$ns__GT_relpath(var_args){
var args8344 = [];
var len__7484__auto___8347 = arguments.length;
var i__7485__auto___8348 = (0);
while(true){
if((i__7485__auto___8348 < len__7484__auto___8347)){
args8344.push((arguments[i__7485__auto___8348]));

var G__8349 = (i__7485__auto___8348 + (1));
i__7485__auto___8348 = G__8349;
continue;
} else {
}
break;
}

var G__8346 = args8344.length;
switch (G__8346) {
case 1:
return cljs.analyzer.ns__GT_relpath.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.analyzer.ns__GT_relpath.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8344.length)].join('')));

}
});

cljs.analyzer.ns__GT_relpath.cljs$core$IFn$_invoke$arity$1 = (function (ns){
return cljs.analyzer.ns__GT_relpath.call(null,ns,cljs.core.cst$kw$cljs);
});

cljs.analyzer.ns__GT_relpath.cljs$core$IFn$_invoke$arity$2 = (function (ns,ext){
return [cljs.core.str(clojure.string.replace.call(null,cljs.analyzer.munge_path.call(null,ns),".","/")),cljs.core.str("."),cljs.core.str(cljs.core.name.call(null,ext))].join('');
});

cljs.analyzer.ns__GT_relpath.cljs$lang$maxFixedArity = 2;

cljs.analyzer.topo_sort = (function cljs$analyzer$topo_sort(var_args){
var args8351 = [];
var len__7484__auto___8368 = arguments.length;
var i__7485__auto___8369 = (0);
while(true){
if((i__7485__auto___8369 < len__7484__auto___8368)){
args8351.push((arguments[i__7485__auto___8369]));

var G__8370 = (i__7485__auto___8369 + (1));
i__7485__auto___8369 = G__8370;
continue;
} else {
}
break;
}

var G__8353 = args8351.length;
switch (G__8353) {
case 2:
return cljs.analyzer.topo_sort.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.analyzer.topo_sort.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8351.length)].join('')));

}
});

cljs.analyzer.topo_sort.cljs$core$IFn$_invoke$arity$2 = (function (x,get_deps){
return cljs.analyzer.topo_sort.call(null,x,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)),cljs.core.memoize.call(null,get_deps));
});

cljs.analyzer.topo_sort.cljs$core$IFn$_invoke$arity$4 = (function (x,depth,state,memo_get_deps){
var deps = memo_get_deps.call(null,x);
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__8354_8372 = cljs.core.seq.call(null,deps);
var chunk__8355_8373 = null;
var count__8356_8374 = (0);
var i__8357_8375 = (0);
while(true){
if((i__8357_8375 < count__8356_8374)){
var dep_8376 = cljs.core._nth.call(null,chunk__8355_8373,i__8357_8375);
cljs.analyzer.topo_sort.call(null,dep_8376,(depth + (1)),state,memo_get_deps);

var G__8377 = seq__8354_8372;
var G__8378 = chunk__8355_8373;
var G__8379 = count__8356_8374;
var G__8380 = (i__8357_8375 + (1));
seq__8354_8372 = G__8377;
chunk__8355_8373 = G__8378;
count__8356_8374 = G__8379;
i__8357_8375 = G__8380;
continue;
} else {
var temp__4657__auto___8381 = cljs.core.seq.call(null,seq__8354_8372);
if(temp__4657__auto___8381){
var seq__8354_8382__$1 = temp__4657__auto___8381;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8354_8382__$1)){
var c__7220__auto___8383 = cljs.core.chunk_first.call(null,seq__8354_8382__$1);
var G__8384 = cljs.core.chunk_rest.call(null,seq__8354_8382__$1);
var G__8385 = c__7220__auto___8383;
var G__8386 = cljs.core.count.call(null,c__7220__auto___8383);
var G__8387 = (0);
seq__8354_8372 = G__8384;
chunk__8355_8373 = G__8385;
count__8356_8374 = G__8386;
i__8357_8375 = G__8387;
continue;
} else {
var dep_8388 = cljs.core.first.call(null,seq__8354_8382__$1);
cljs.analyzer.topo_sort.call(null,dep_8388,(depth + (1)),state,memo_get_deps);

var G__8389 = cljs.core.next.call(null,seq__8354_8382__$1);
var G__8390 = null;
var G__8391 = (0);
var G__8392 = (0);
seq__8354_8372 = G__8389;
chunk__8355_8373 = G__8390;
count__8356_8374 = G__8391;
i__8357_8375 = G__8392;
continue;
}
} else {
}
}
break;
}

var seq__8358_8393 = cljs.core.seq.call(null,cljs.core.subseq.call(null,cljs.core.deref.call(null,state),cljs.core._LT_,depth));
var chunk__8359_8394 = null;
var count__8360_8395 = (0);
var i__8361_8396 = (0);
while(true){
if((i__8361_8396 < count__8360_8395)){
var vec__8362_8397 = cljs.core._nth.call(null,chunk__8359_8394,i__8361_8396);
var _LT_depth_8398 = cljs.core.nth.call(null,vec__8362_8397,(0),null);
var __8399 = cljs.core.nth.call(null,vec__8362_8397,(1),null);
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [_LT_depth_8398], null),clojure.set.difference,deps);

var G__8400 = seq__8358_8393;
var G__8401 = chunk__8359_8394;
var G__8402 = count__8360_8395;
var G__8403 = (i__8361_8396 + (1));
seq__8358_8393 = G__8400;
chunk__8359_8394 = G__8401;
count__8360_8395 = G__8402;
i__8361_8396 = G__8403;
continue;
} else {
var temp__4657__auto___8404 = cljs.core.seq.call(null,seq__8358_8393);
if(temp__4657__auto___8404){
var seq__8358_8405__$1 = temp__4657__auto___8404;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8358_8405__$1)){
var c__7220__auto___8406 = cljs.core.chunk_first.call(null,seq__8358_8405__$1);
var G__8407 = cljs.core.chunk_rest.call(null,seq__8358_8405__$1);
var G__8408 = c__7220__auto___8406;
var G__8409 = cljs.core.count.call(null,c__7220__auto___8406);
var G__8410 = (0);
seq__8358_8393 = G__8407;
chunk__8359_8394 = G__8408;
count__8360_8395 = G__8409;
i__8361_8396 = G__8410;
continue;
} else {
var vec__8365_8411 = cljs.core.first.call(null,seq__8358_8405__$1);
var _LT_depth_8412 = cljs.core.nth.call(null,vec__8365_8411,(0),null);
var __8413 = cljs.core.nth.call(null,vec__8365_8411,(1),null);
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [_LT_depth_8412], null),clojure.set.difference,deps);

var G__8414 = cljs.core.next.call(null,seq__8358_8405__$1);
var G__8415 = null;
var G__8416 = (0);
var G__8417 = (0);
seq__8358_8393 = G__8414;
chunk__8359_8394 = G__8415;
count__8360_8395 = G__8416;
i__8361_8396 = G__8417;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return cljs.core.distinct.call(null,cljs.core.apply.call(null,cljs.core.concat,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});

cljs.analyzer.topo_sort.cljs$lang$maxFixedArity = 4;


cljs.analyzer.ast_QMARK_ = (function cljs$analyzer$ast_QMARK_(x){
return (cljs.core.map_QMARK_.call(null,x)) && (cljs.core.contains_QMARK_.call(null,x,cljs.core.cst$kw$op));
});
if(typeof cljs.analyzer.error_message !== 'undefined'){
} else {
cljs.analyzer.error_message = (function (){var method_table__7334__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__7335__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__7336__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__7337__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__7338__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.analyzer","error-message"),((function (method_table__7334__auto__,prefer_table__7335__auto__,method_cache__7336__auto__,cached_hierarchy__7337__auto__,hierarchy__7338__auto__){
return (function() { 
var G__8418__delegate = function (warning_type,_){
return warning_type;
};
var G__8418 = function (warning_type,var_args){
var _ = null;
if (arguments.length > 1) {
var G__8419__i = 0, G__8419__a = new Array(arguments.length -  1);
while (G__8419__i < G__8419__a.length) {G__8419__a[G__8419__i] = arguments[G__8419__i + 1]; ++G__8419__i;}
  _ = new cljs.core.IndexedSeq(G__8419__a,0);
} 
return G__8418__delegate.call(this,warning_type,_);};
G__8418.cljs$lang$maxFixedArity = 1;
G__8418.cljs$lang$applyTo = (function (arglist__8420){
var warning_type = cljs.core.first(arglist__8420);
var _ = cljs.core.rest(arglist__8420);
return G__8418__delegate(warning_type,_);
});
G__8418.cljs$core$IFn$_invoke$arity$variadic = G__8418__delegate;
return G__8418;
})()
;})(method_table__7334__auto__,prefer_table__7335__auto__,method_cache__7336__auto__,cached_hierarchy__7337__auto__,hierarchy__7338__auto__))
,cljs.core.cst$kw$default,hierarchy__7338__auto__,method_table__7334__auto__,prefer_table__7335__auto__,method_cache__7336__auto__,cached_hierarchy__7337__auto__));
})();
}
cljs.core._add_method.call(null,cljs.analyzer.error_message,cljs.core.cst$kw$preamble_DASH_missing,(function (warning_type,info){
return [cljs.core.str("Preamble resource file not found: "),cljs.core.str(clojure.string.join.call(null," ",cljs.core.cst$kw$missing.cljs$core$IFn$_invoke$arity$1(info)))].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,cljs.core.cst$kw$unprovided,(function (warning_type,info){
return [cljs.core.str("Required namespace not provided for "),cljs.core.str(clojure.string.join.call(null," ",cljs.core.cst$kw$unprovided.cljs$core$IFn$_invoke$arity$1(info)))].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,cljs.core.cst$kw$undeclared_DASH_var,(function (warning_type,info){
return [cljs.core.str((cljs.core.truth_(cljs.core.cst$kw$macro_DASH_present_QMARK_.cljs$core$IFn$_invoke$arity$1(info))?"Can't take value of macro ":"Use of undeclared Var ")),cljs.core.str(cljs.core.cst$kw$prefix.cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str("/"),cljs.core.str(cljs.core.cst$kw$suffix.cljs$core$IFn$_invoke$arity$1(info))].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,cljs.core.cst$kw$undeclared_DASH_ns,(function (warning_type,p__8421){
var map__8422 = p__8421;
var map__8422__$1 = ((((!((map__8422 == null)))?((((map__8422.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8422.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8422):map__8422);
var info = map__8422__$1;
var ns_sym = cljs.core.get.call(null,map__8422__$1,cljs.core.cst$kw$ns_DASH_sym);
var js_provide = cljs.core.get.call(null,map__8422__$1,cljs.core.cst$kw$js_DASH_provide);
return [cljs.core.str("No such namespace: "),cljs.core.str(ns_sym),cljs.core.str(", could not locate "),cljs.core.str(cljs.analyzer.ns__GT_relpath.call(null,ns_sym,cljs.core.cst$kw$cljs)),cljs.core.str(", "),cljs.core.str(cljs.analyzer.ns__GT_relpath.call(null,ns_sym,cljs.core.cst$kw$cljc)),cljs.core.str(", or Closure namespace \""),cljs.core.str(js_provide),cljs.core.str("\"")].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,cljs.core.cst$kw$undeclared_DASH_macros_DASH_ns,(function (warning_type,p__8424){
var map__8425 = p__8424;
var map__8425__$1 = ((((!((map__8425 == null)))?((((map__8425.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8425.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8425):map__8425);
var info = map__8425__$1;
var ns_sym = cljs.core.get.call(null,map__8425__$1,cljs.core.cst$kw$ns_DASH_sym);
var js_provide = cljs.core.get.call(null,map__8425__$1,cljs.core.cst$kw$js_DASH_provide);
return [cljs.core.str("No such macros namespace: "),cljs.core.str(ns_sym),cljs.core.str(", could not locate "),cljs.core.str(cljs.analyzer.ns__GT_relpath.call(null,ns_sym,cljs.core.cst$kw$clj)),cljs.core.str(" or "),cljs.core.str(cljs.analyzer.ns__GT_relpath.call(null,ns_sym,cljs.core.cst$kw$cljc))].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,cljs.core.cst$kw$dynamic,(function (warning_type,info){
return [cljs.core.str(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str(" not declared ^:dynamic")].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,cljs.core.cst$kw$redef,(function (warning_type,info){
return [cljs.core.str(cljs.core.cst$kw$sym.cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str(" already refers to: "),cljs.core.str(cljs.core.symbol.call(null,[cljs.core.str(cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(info))].join(''),[cljs.core.str(cljs.core.cst$kw$sym.cljs$core$IFn$_invoke$arity$1(info))].join(''))),cljs.core.str(" being replaced by: "),cljs.core.str(cljs.core.symbol.call(null,[cljs.core.str(cljs.core.cst$kw$ns_DASH_name.cljs$core$IFn$_invoke$arity$1(info))].join(''),[cljs.core.str(cljs.core.cst$kw$sym.cljs$core$IFn$_invoke$arity$1(info))].join('')))].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,cljs.core.cst$kw$redef_DASH_in_DASH_file,(function (warning_type,info){
return [cljs.core.str(cljs.core.cst$kw$sym.cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str(" at line "),cljs.core.str(cljs.core.cst$kw$line.cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str(" is being replaced")].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,cljs.core.cst$kw$fn_DASH_var,(function (warning_type,info){
return [cljs.core.str(cljs.core.symbol.call(null,[cljs.core.str(cljs.core.cst$kw$ns_DASH_name.cljs$core$IFn$_invoke$arity$1(info))].join(''),[cljs.core.str(cljs.core.cst$kw$sym.cljs$core$IFn$_invoke$arity$1(info))].join(''))),cljs.core.str(" no longer fn, references are stale")].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,cljs.core.cst$kw$fn_DASH_arity,(function (warning_type,info){
return [cljs.core.str("Wrong number of args ("),cljs.core.str(cljs.core.cst$kw$argc.cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str(") passed to "),cljs.core.str((function (){var or__6409__auto__ = cljs.core.cst$kw$ctor.cljs$core$IFn$_invoke$arity$1(info);
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(info);
}
})())].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,cljs.core.cst$kw$fn_DASH_deprecated,(function (warning_type,info){
return [cljs.core.str(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$info.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$fexpr.cljs$core$IFn$_invoke$arity$1(info)))),cljs.core.str(" is deprecated.")].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,cljs.core.cst$kw$undeclared_DASH_ns_DASH_form,(function (warning_type,info){
return [cljs.core.str("Invalid :refer, "),cljs.core.str(cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str(" "),cljs.core.str(cljs.core.cst$kw$lib.cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str("/"),cljs.core.str(cljs.core.cst$kw$sym.cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str(" does not exist")].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,cljs.core.cst$kw$protocol_DASH_deprecated,(function (warning_type,info){
return [cljs.core.str("Protocol "),cljs.core.str(cljs.core.cst$kw$protocol.cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str(" is deprecated")].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,cljs.core.cst$kw$undeclared_DASH_protocol_DASH_symbol,(function (warning_type,info){
return [cljs.core.str("Can't resolve protocol symbol "),cljs.core.str(cljs.core.cst$kw$protocol.cljs$core$IFn$_invoke$arity$1(info))].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,cljs.core.cst$kw$invalid_DASH_protocol_DASH_symbol,(function (warning_type,info){
return [cljs.core.str("Symbol "),cljs.core.str(cljs.core.cst$kw$protocol.cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str(" is not a protocol")].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,cljs.core.cst$kw$protocol_DASH_invalid_DASH_method,(function (warning_type,info){
if(cljs.core.truth_(cljs.core.cst$kw$no_DASH_such_DASH_method.cljs$core$IFn$_invoke$arity$1(info))){
return [cljs.core.str("Bad method signature in protocol implementation, "),cljs.core.str(cljs.core.cst$kw$protocol.cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str(" does not declare method called "),cljs.core.str(cljs.core.cst$kw$fname.cljs$core$IFn$_invoke$arity$1(info))].join('');
} else {
return [cljs.core.str("Bad method signature in protocol implementation, "),cljs.core.str(cljs.core.cst$kw$protocol.cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str(" "),cljs.core.str(cljs.core.cst$kw$fname.cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str(" does not declare arity "),cljs.core.str(cljs.core.cst$kw$invalid_DASH_arity.cljs$core$IFn$_invoke$arity$1(info))].join('');
}
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,cljs.core.cst$kw$protocol_DASH_duped_DASH_method,(function (warning_type,info){
return [cljs.core.str("Duplicated methods in protocol implementation "),cljs.core.str(cljs.core.cst$kw$protocol.cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str(" "),cljs.core.str(cljs.core.cst$kw$fname.cljs$core$IFn$_invoke$arity$1(info))].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,cljs.core.cst$kw$protocol_DASH_multiple_DASH_impls,(function (warning_type,info){
return [cljs.core.str("Protocol "),cljs.core.str(cljs.core.cst$kw$protocol.cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str(" implemented multiple times")].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,cljs.core.cst$kw$protocol_DASH_with_DASH_variadic_DASH_method,(function (warning_type,info){
return [cljs.core.str("Protocol "),cljs.core.str(cljs.core.cst$kw$protocol.cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str(" declares method "),cljs.core.str(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str(" with variadic signature (&)")].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,cljs.core.cst$kw$multiple_DASH_variadic_DASH_overloads,(function (warning_type,info){
return [cljs.core.str(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str(": Can't have more than 1 variadic overload")].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,cljs.core.cst$kw$variadic_DASH_max_DASH_arity,(function (warning_type,info){
return [cljs.core.str(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str(": Can't have fixed arity function with more params than variadic function")].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,cljs.core.cst$kw$overload_DASH_arity,(function (warning_type,info){
return [cljs.core.str(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str(": Can't have 2 overloads with same arity")].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,cljs.core.cst$kw$extending_DASH_base_DASH_js_DASH_type,(function (warning_type,info){
return [cljs.core.str("Extending an existing JavaScript type - use a different symbol name "),cljs.core.str("instead of "),cljs.core.str(cljs.core.cst$kw$current_DASH_symbol.cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str(" e.g "),cljs.core.str(cljs.core.cst$kw$suggested_DASH_symbol.cljs$core$IFn$_invoke$arity$1(info))].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,cljs.core.cst$kw$invalid_DASH_arithmetic,(function (warning_type,info){
return [cljs.core.str(cljs.core.cst$kw$js_DASH_op.cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str(", all arguments must be numbers, got "),cljs.core.str(cljs.core.cst$kw$types.cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str(" instead.")].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,cljs.core.cst$kw$invoke_DASH_ctor,(function (warning_type,info){
return [cljs.core.str("Cannot invoke type constructor "),cljs.core.str(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$info.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$fexpr.cljs$core$IFn$_invoke$arity$1(info)))),cljs.core.str(" as function ")].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,cljs.core.cst$kw$single_DASH_segment_DASH_namespace,(function (warning_type,info){
return [cljs.core.str(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str(" is a single segment namespace")].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,cljs.core.cst$kw$munged_DASH_namespace,(function (warning_type,p__8428){
var map__8429 = p__8428;
var map__8429__$1 = ((((!((map__8429 == null)))?((((map__8429.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8429.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8429):map__8429);
var info = map__8429__$1;
var name = cljs.core.get.call(null,map__8429__$1,cljs.core.cst$kw$name);
var munged = cljs.core.munge.call(null,clojure.string.join.call(null,".",cljs.core.map.call(null,((function (map__8429,map__8429__$1,info,name){
return (function (p1__8427_SHARP_){
if(cljs.core.truth_(cljs.analyzer.js_reserved.call(null,p1__8427_SHARP_))){
return [cljs.core.str(p1__8427_SHARP_),cljs.core.str("$")].join('');
} else {
return p1__8427_SHARP_;
}
});})(map__8429,map__8429__$1,info,name))
,clojure.string.split.call(null,cljs.core.name.call(null,name),/\./))));
return [cljs.core.str("Namespace "),cljs.core.str(name),cljs.core.str(" contains a reserved JavaScript keyword,"),cljs.core.str(" the corresponding Google Closure namespace will be munged to "),cljs.core.str(munged)].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,cljs.core.cst$kw$ns_DASH_var_DASH_clash,(function (warning_type,p__8431){
var map__8432 = p__8431;
var map__8432__$1 = ((((!((map__8432 == null)))?((((map__8432.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8432.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8432):map__8432);
var info = map__8432__$1;
var ns = cljs.core.get.call(null,map__8432__$1,cljs.core.cst$kw$ns);
var var$ = cljs.core.get.call(null,map__8432__$1,cljs.core.cst$kw$var);
return [cljs.core.str("Namespace "),cljs.core.str(ns),cljs.core.str(" clashes with var "),cljs.core.str(var$)].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,cljs.core.cst$kw$extend_DASH_type_DASH_invalid_DASH_method_DASH_shape,(function (warning_type,p__8434){
var map__8435 = p__8434;
var map__8435__$1 = ((((!((map__8435 == null)))?((((map__8435.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8435.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8435):map__8435);
var info = map__8435__$1;
var protocol = cljs.core.get.call(null,map__8435__$1,cljs.core.cst$kw$protocol);
var method = cljs.core.get.call(null,map__8435__$1,cljs.core.cst$kw$method);
return [cljs.core.str("Bad extend-type method shape for protocol "),cljs.core.str(protocol),cljs.core.str(" method "),cljs.core.str(method),cljs.core.str(", method arities must be grouped together")].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,cljs.core.cst$kw$unsupported_DASH_js_DASH_module_DASH_type,(function (warning_type,p__8437){
var map__8438 = p__8437;
var map__8438__$1 = ((((!((map__8438 == null)))?((((map__8438.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8438.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8438):map__8438);
var info = map__8438__$1;
var module_type = cljs.core.get.call(null,map__8438__$1,cljs.core.cst$kw$module_DASH_type);
var file = cljs.core.get.call(null,map__8438__$1,cljs.core.cst$kw$file);
return [cljs.core.str("Unsupported JavaScript module type "),cljs.core.str(module_type),cljs.core.str(" for foreign library "),cljs.core.str(file),cljs.core.str(".")].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,cljs.core.cst$kw$unsupported_DASH_preprocess_DASH_value,(function (warning_type,p__8440){
var map__8441 = p__8440;
var map__8441__$1 = ((((!((map__8441 == null)))?((((map__8441.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8441.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8441):map__8441);
var preprocess = cljs.core.get.call(null,map__8441__$1,cljs.core.cst$kw$preprocess);
var file = cljs.core.get.call(null,map__8441__$1,cljs.core.cst$kw$file);
return [cljs.core.str("Unsupported preprocess value "),cljs.core.str(preprocess),cljs.core.str(" for foreign library "),cljs.core.str(file),cljs.core.str(".")].join('');
}));
cljs.analyzer.default_warning_handler = (function cljs$analyzer$default_warning_handler(warning_type,env,extra){
if(cljs.core.truth_(warning_type.call(null,cljs.analyzer._STAR_cljs_warnings_STAR_))){
var temp__4657__auto__ = cljs.analyzer.error_message.call(null,warning_type,extra);
if(cljs.core.truth_(temp__4657__auto__)){
var s = temp__4657__auto__;
var _STAR_print_fn_STAR_8444 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_fn_STAR_ = cljs.core._STAR_print_err_fn_STAR_;

try{return cljs.core.println.call(null,cljs.analyzer.message.call(null,env,[cljs.core.str("WARNING: "),cljs.core.str(s)].join('')));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_8444;
}} else {
return null;
}
} else {
return null;
}
});
cljs.analyzer._STAR_cljs_warning_handlers_STAR_ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.analyzer.default_warning_handler], null);
cljs.analyzer.repeat_char = (function cljs$analyzer$repeat_char(c,n){
var ret = c;
var n__$1 = n;
while(true){
if((n__$1 > (0))){
var G__8445 = [cljs.core.str(ret),cljs.core.str(c)].join('');
var G__8446 = (n__$1 - (1));
ret = G__8445;
n__$1 = G__8446;
continue;
} else {
return ret;
}
break;
}
});
cljs.analyzer.hex_format = (function cljs$analyzer$hex_format(s,pad){
var hex = s.charCodeAt((0)).toString((16));
var len = hex.length;
var hex__$1 = (((len < pad))?[cljs.core.str(cljs.analyzer.repeat_char.call(null,"0",(pad - len))),cljs.core.str(hex)].join(''):hex);
return [cljs.core.str("_u"),cljs.core.str(hex__$1),cljs.core.str("_")].join('');
});
cljs.analyzer.gen_constant_id = (function cljs$analyzer$gen_constant_id(value){
var prefix = (((value instanceof cljs.core.Keyword))?"cst$kw$":(((value instanceof cljs.core.Symbol))?"cst$sym$":(function(){throw (new Error([cljs.core.str("constant type "),cljs.core.str(cljs.core.type.call(null,value)),cljs.core.str(" not supported")].join('')))})()
));
var name = (((value instanceof cljs.core.Keyword))?cljs.core.subs.call(null,[cljs.core.str(value)].join(''),(1)):[cljs.core.str(value)].join(''));
var name__$1 = ((cljs.core._EQ_.call(null,".",name))?"_DOT_":clojure.string.replace.call(null,clojure.string.replace.call(null,cljs.core.munge.call(null,clojure.string.replace.call(null,name,"-","_DASH_")),".","$"),/[^a-z0-9$_]/i,((function (prefix,name){
return (function (p1__8447_SHARP_){
return cljs.analyzer.hex_format.call(null,p1__8447_SHARP_,(4));
});})(prefix,name))
));
return cljs.core.symbol.call(null,[cljs.core.str(prefix),cljs.core.str(name__$1)].join(''));
});
cljs.analyzer.register_constant_BANG_ = (function cljs$analyzer$register_constant_BANG_(var_args){
var args8448 = [];
var len__7484__auto___8456 = arguments.length;
var i__7485__auto___8457 = (0);
while(true){
if((i__7485__auto___8457 < len__7484__auto___8456)){
args8448.push((arguments[i__7485__auto___8457]));

var G__8458 = (i__7485__auto___8457 + (1));
i__7485__auto___8457 = G__8458;
continue;
} else {
}
break;
}

var G__8450 = args8448.length;
switch (G__8450) {
case 1:
return cljs.analyzer.register_constant_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.analyzer.register_constant_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8448.length)].join('')));

}
});

cljs.analyzer.register_constant_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (val){
return cljs.analyzer.register_constant_BANG_.call(null,null,val);
});

cljs.analyzer.register_constant_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (env,val){
return cljs.core.swap_BANG_.call(null,cljs.env._STAR_compiler_STAR_,(function (cenv){
var G__8451 = cljs.core.update_in.call(null,cenv,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_constant_DASH_table], null),(function (table){
if(cljs.core.truth_(cljs.core.get.call(null,table,val))){
return table;
} else {
return cljs.core.assoc.call(null,table,val,cljs.analyzer.gen_constant_id.call(null,val));
}
}));
if(cljs.core.truth_(env)){
return cljs.core.update_in.call(null,G__8451,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(env)),cljs.core.cst$kw$cljs$analyzer_SLASH_constants], null),((function (G__8451){
return (function (p__8452){
var map__8453 = p__8452;
var map__8453__$1 = ((((!((map__8453 == null)))?((((map__8453.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8453.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8453):map__8453);
var constants = map__8453__$1;
var seen = cljs.core.get.call(null,map__8453__$1,cljs.core.cst$kw$seen,cljs.core.PersistentHashSet.EMPTY);
var order = cljs.core.get.call(null,map__8453__$1,cljs.core.cst$kw$order,cljs.core.PersistentVector.EMPTY);
var G__8455 = constants;
if(!(cljs.core.contains_QMARK_.call(null,seen,val))){
return cljs.core.assoc.call(null,G__8455,cljs.core.cst$kw$seen,cljs.core.conj.call(null,seen,val),cljs.core.cst$kw$order,cljs.core.conj.call(null,order,val));
} else {
return G__8455;
}
});})(G__8451))
);
} else {
return G__8451;
}
}));
});

cljs.analyzer.register_constant_BANG_.cljs$lang$maxFixedArity = 2;

cljs.analyzer.default_namespaces = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$sym$cljs$core,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,cljs.core.cst$sym$cljs$core], null),cljs.core.cst$sym$cljs$user,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,cljs.core.cst$sym$cljs$user], null)], null);
cljs.analyzer.namespaces = (function (){
if(typeof cljs.analyzer.t_cljs$analyzer8460 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
cljs.analyzer.t_cljs$analyzer8460 = (function (meta8461){
this.meta8461 = meta8461;
this.cljs$lang$protocol_mask$partition0$ = 425984;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.analyzer.t_cljs$analyzer8460.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8462,meta8461__$1){
var self__ = this;
var _8462__$1 = this;
return (new cljs.analyzer.t_cljs$analyzer8460(meta8461__$1));
});

cljs.analyzer.t_cljs$analyzer8460.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8462){
var self__ = this;
var _8462__$1 = this;
return self__.meta8461;
});

cljs.analyzer.t_cljs$analyzer8460.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(!((cljs.env._STAR_compiler_STAR_ == null))){
return cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_));
} else {
return cljs.analyzer.default_namespaces;
}
});

cljs.analyzer.t_cljs$analyzer8460.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta8461], null);
});

cljs.analyzer.t_cljs$analyzer8460.cljs$lang$type = true;

cljs.analyzer.t_cljs$analyzer8460.cljs$lang$ctorStr = "cljs.analyzer/t_cljs$analyzer8460";

cljs.analyzer.t_cljs$analyzer8460.cljs$lang$ctorPrWriter = (function (this__7015__auto__,writer__7016__auto__,opt__7017__auto__){
return cljs.core._write.call(null,writer__7016__auto__,"cljs.analyzer/t_cljs$analyzer8460");
});

cljs.analyzer.__GT_t_cljs$analyzer8460 = (function cljs$analyzer$__GT_t_cljs$analyzer8460(meta8461){
return (new cljs.analyzer.t_cljs$analyzer8460(meta8461));
});

}

return (new cljs.analyzer.t_cljs$analyzer8460(cljs.core.PersistentArrayMap.EMPTY));
})()
;
cljs.analyzer.get_namespace = (function cljs$analyzer$get_namespace(var_args){
var args8463 = [];
var len__7484__auto___8466 = arguments.length;
var i__7485__auto___8467 = (0);
while(true){
if((i__7485__auto___8467 < len__7484__auto___8466)){
args8463.push((arguments[i__7485__auto___8467]));

var G__8468 = (i__7485__auto___8467 + (1));
i__7485__auto___8467 = G__8468;
continue;
} else {
}
break;
}

var G__8465 = args8463.length;
switch (G__8465) {
case 1:
return cljs.analyzer.get_namespace.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.analyzer.get_namespace.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8463.length)].join('')));

}
});

cljs.analyzer.get_namespace.cljs$core$IFn$_invoke$arity$1 = (function (key){
return cljs.analyzer.get_namespace.call(null,cljs.env._STAR_compiler_STAR_,key);
});

cljs.analyzer.get_namespace.cljs$core$IFn$_invoke$arity$2 = (function (cenv,key){
var ns = cljs.core.get_in.call(null,cljs.core.deref.call(null,cenv),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,key], null));
if(!((ns == null))){
return ns;
} else {
if(cljs.core._EQ_.call(null,cljs.core.cst$sym$cljs$user,key)){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,cljs.core.cst$sym$cljs$user], null);
} else {
return null;
}
}
});

cljs.analyzer.get_namespace.cljs$lang$maxFixedArity = 2;

cljs.analyzer.get_line = (function cljs$analyzer$get_line(x,env){
var or__6409__auto__ = cljs.core.cst$kw$line.cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,x));
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return cljs.core.cst$kw$line.cljs$core$IFn$_invoke$arity$1(env);
}
});
cljs.analyzer.get_col = (function cljs$analyzer$get_col(x,env){
var or__6409__auto__ = cljs.core.cst$kw$column.cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,x));
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return cljs.core.cst$kw$column.cljs$core$IFn$_invoke$arity$1(env);
}
});
/**
 * Given a Clojure namespace intern all macros into the ambient ClojureScript
 * analysis environment.
 */
cljs.analyzer.intern_macros = (function cljs$analyzer$intern_macros(var_args){
var args8470 = [];
var len__7484__auto___8481 = arguments.length;
var i__7485__auto___8482 = (0);
while(true){
if((i__7485__auto___8482 < len__7484__auto___8481)){
args8470.push((arguments[i__7485__auto___8482]));

var G__8483 = (i__7485__auto___8482 + (1));
i__7485__auto___8482 = G__8483;
continue;
} else {
}
break;
}

var G__8472 = args8470.length;
switch (G__8472) {
case 1:
return cljs.analyzer.intern_macros.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.analyzer.intern_macros.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8470.length)].join('')));

}
});

cljs.analyzer.intern_macros.cljs$core$IFn$_invoke$arity$1 = (function (ns){
return cljs.analyzer.intern_macros.call(null,ns,false);
});

cljs.analyzer.intern_macros.cljs$core$IFn$_invoke$arity$2 = (function (ns,reload){
if(cljs.core.truth_((function (){var or__6409__auto__ = (cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,ns,cljs.core.cst$kw$macros], null)) == null);
if(or__6409__auto__){
return or__6409__auto__;
} else {
return reload;
}
})())){
return cljs.core.swap_BANG_.call(null,cljs.env._STAR_compiler_STAR_,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,ns,cljs.core.cst$kw$macros], null),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__8473){
var vec__8474 = p__8473;
var k = cljs.core.nth.call(null,vec__8474,(0),null);
var v = cljs.core.nth.call(null,vec__8474,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(function (){var vm = cljs.core.meta.call(null,v);
var ns__$1 = cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(vm).getName();
return cljs.core.assoc.call(null,vm,cljs.core.cst$kw$ns,ns__$1,cljs.core.cst$kw$name,cljs.core.symbol.call(null,[cljs.core.str(ns__$1)].join(''),[cljs.core.str(k)].join('')),cljs.core.cst$kw$macro,true);
})()], null);
}),cljs.core.filter.call(null,(function (p__8477){
var vec__8478 = p__8477;
var _ = cljs.core.nth.call(null,vec__8478,(0),null);
var v = cljs.core.nth.call(null,vec__8478,(1),null);
return v.isMacro();
}),cljs.core.ns_interns_STAR_.call(null,ns)))));
} else {
return null;
}
});

cljs.analyzer.intern_macros.cljs$lang$maxFixedArity = 2;

/**
 * Construct an empty analysis environment. Required to analyze forms.
 */
cljs.analyzer.empty_env = (function cljs$analyzer$empty_env(){
var val__8273__auto__ = cljs.env._STAR_compiler_STAR_;
if((val__8273__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = cljs.env.default_compiler_env.call(null);
} else {
}

try{return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$ns,cljs.analyzer.get_namespace.call(null,cljs.analyzer._STAR_cljs_ns_STAR_),cljs.core.cst$kw$context,cljs.core.cst$kw$statement,cljs.core.cst$kw$locals,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$fn_DASH_scope,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$js_DASH_globals,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (val__8273__auto__){
return (function (p1__8485_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__8485_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,p1__8485_SHARP_], null)],null));
});})(val__8273__auto__))
,cljs.core.list(cljs.core.cst$sym$alert,cljs.core.cst$sym$window,cljs.core.cst$sym$document,cljs.core.cst$sym$console,cljs.core.cst$sym$escape,cljs.core.cst$sym$unescape,cljs.core.cst$sym$screen,cljs.core.cst$sym$location,cljs.core.cst$sym$navigator,cljs.core.cst$sym$history,cljs.core.cst$sym$location,cljs.core.cst$sym$global,cljs.core.cst$sym$process,cljs.core.cst$sym$require,cljs.core.cst$sym$module,cljs.core.cst$sym$exports)))], null);
}finally {if((val__8273__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = null;
} else {
}
}});
cljs.analyzer.source_info = (function cljs$analyzer$source_info(var_args){
var args8486 = [];
var len__7484__auto___8490 = arguments.length;
var i__7485__auto___8491 = (0);
while(true){
if((i__7485__auto___8491 < len__7484__auto___8490)){
args8486.push((arguments[i__7485__auto___8491]));

var G__8492 = (i__7485__auto___8491 + (1));
i__7485__auto___8491 = G__8492;
continue;
} else {
}
break;
}

var G__8488 = args8486.length;
switch (G__8488) {
case 1:
return cljs.analyzer.source_info.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.analyzer.source_info.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8486.length)].join('')));

}
});

cljs.analyzer.source_info.cljs$core$IFn$_invoke$arity$1 = (function (env){
if(cljs.core.truth_(cljs.core.cst$kw$line.cljs$core$IFn$_invoke$arity$1(env))){
return cljs.analyzer.source_info.call(null,null,env);
} else {
return null;
}
});

cljs.analyzer.source_info.cljs$core$IFn$_invoke$arity$2 = (function (name,env){
var G__8489 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$file,((cljs.core._EQ_.call(null,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(env)),cljs.core.cst$sym$cljs$core))?"cljs/core.cljs":cljs.analyzer._STAR_cljs_file_STAR_),cljs.core.cst$kw$line,cljs.analyzer.get_line.call(null,name,env),cljs.core.cst$kw$column,cljs.analyzer.get_col.call(null,name,env)], null);
if(cljs.core.truth_(cljs.core.cst$kw$root_DASH_source_DASH_info.cljs$core$IFn$_invoke$arity$1(env))){
return cljs.core.merge.call(null,G__8489,cljs.core.select_keys.call(null,env,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$root_DASH_source_DASH_info], null)));
} else {
return G__8489;
}
});

cljs.analyzer.source_info.cljs$lang$maxFixedArity = 2;

cljs.analyzer.message = (function cljs$analyzer$message(env,s){
return [cljs.core.str(s),cljs.core.str((cljs.core.truth_(cljs.core.cst$kw$line.cljs$core$IFn$_invoke$arity$1(env))?[cljs.core.str(" at line "),cljs.core.str(cljs.core.cst$kw$line.cljs$core$IFn$_invoke$arity$1(env)),cljs.core.str(" "),cljs.core.str(cljs.analyzer._STAR_cljs_file_STAR_)].join(''):(cljs.core.truth_(cljs.analyzer._STAR_cljs_file_STAR_)?[cljs.core.str(" in file "),cljs.core.str(cljs.analyzer._STAR_cljs_file_STAR_)].join(''):null)))].join('');
});
cljs.analyzer.warning = (function cljs$analyzer$warning(warning_type,env,extra){
var seq__8498 = cljs.core.seq.call(null,cljs.analyzer._STAR_cljs_warning_handlers_STAR_);
var chunk__8499 = null;
var count__8500 = (0);
var i__8501 = (0);
while(true){
if((i__8501 < count__8500)){
var handler = cljs.core._nth.call(null,chunk__8499,i__8501);
handler.call(null,warning_type,env,extra);

var G__8502 = seq__8498;
var G__8503 = chunk__8499;
var G__8504 = count__8500;
var G__8505 = (i__8501 + (1));
seq__8498 = G__8502;
chunk__8499 = G__8503;
count__8500 = G__8504;
i__8501 = G__8505;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__8498);
if(temp__4657__auto__){
var seq__8498__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8498__$1)){
var c__7220__auto__ = cljs.core.chunk_first.call(null,seq__8498__$1);
var G__8506 = cljs.core.chunk_rest.call(null,seq__8498__$1);
var G__8507 = c__7220__auto__;
var G__8508 = cljs.core.count.call(null,c__7220__auto__);
var G__8509 = (0);
seq__8498 = G__8506;
chunk__8499 = G__8507;
count__8500 = G__8508;
i__8501 = G__8509;
continue;
} else {
var handler = cljs.core.first.call(null,seq__8498__$1);
handler.call(null,warning_type,env,extra);

var G__8510 = cljs.core.next.call(null,seq__8498__$1);
var G__8511 = null;
var G__8512 = (0);
var G__8513 = (0);
seq__8498 = G__8510;
chunk__8499 = G__8511;
count__8500 = G__8512;
i__8501 = G__8513;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.analyzer.error = (function cljs$analyzer$error(var_args){
var args8514 = [];
var len__7484__auto___8517 = arguments.length;
var i__7485__auto___8518 = (0);
while(true){
if((i__7485__auto___8518 < len__7484__auto___8517)){
args8514.push((arguments[i__7485__auto___8518]));

var G__8519 = (i__7485__auto___8518 + (1));
i__7485__auto___8518 = G__8519;
continue;
} else {
}
break;
}

var G__8516 = args8514.length;
switch (G__8516) {
case 2:
return cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8514.length)].join('')));

}
});

cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2 = (function (env,msg){
return cljs.analyzer.error.call(null,env,msg,null);
});

cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3 = (function (env,msg,cause){
return cljs.core.ex_info.call(null,cljs.analyzer.message.call(null,env,msg),cljs.core.assoc.call(null,cljs.analyzer.source_info.call(null,env),cljs.core.cst$kw$tag,cljs.core.cst$kw$cljs_SLASH_analysis_DASH_error),cause);
});

cljs.analyzer.error.cljs$lang$maxFixedArity = 3;

cljs.analyzer.analysis_error_QMARK_ = (function cljs$analyzer$analysis_error_QMARK_(ex){
return cljs.core._EQ_.call(null,cljs.core.cst$kw$cljs_SLASH_analysis_DASH_error,cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,ex)));
});
cljs.analyzer.implicit_nses = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$sym$goog$string,null,cljs.core.cst$sym$goog,null,cljs.core.cst$sym$goog$object,null,cljs.core.cst$sym$Math,null,cljs.core.cst$sym$goog$array,null], null), null);
cljs.analyzer.implicit_import_QMARK_ = (function cljs$analyzer$implicit_import_QMARK_(env,prefix,suffix){
return cljs.core.contains_QMARK_.call(null,cljs.analyzer.implicit_nses,prefix);
});
cljs.analyzer.confirm_var_exist_warning = (function cljs$analyzer$confirm_var_exist_warning(env,prefix,suffix){
return (function (env__$1,prefix__$1,suffix__$1){
return cljs.analyzer.warning.call(null,cljs.core.cst$kw$undeclared_DASH_var,env__$1,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$prefix,prefix__$1,cljs.core.cst$kw$suffix,suffix__$1,cljs.core.cst$kw$macro_DASH_present_QMARK_,!((cljs.analyzer.get_expander.call(null,cljs.core.symbol.call(null,[cljs.core.str(prefix__$1)].join(''),[cljs.core.str(suffix__$1)].join('')),env__$1) == null))], null));
});
});
/**
 * Check if a JavaScript namespace has been loaded. JavaScript vars are
 *   not currently checked.
 */
cljs.analyzer.loaded_js_ns_QMARK_ = (function cljs$analyzer$loaded_js_ns_QMARK_(env,prefix){
if(cljs.core.truth_(cljs.analyzer.gets.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,prefix))){
return null;
} else {
var ns = cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(env);
if(!((cljs.core.get.call(null,cljs.core.cst$kw$requires.cljs$core$IFn$_invoke$arity$1(ns),prefix) == null))){
return true;
} else {
if(!((cljs.core.get.call(null,cljs.core.cst$kw$imports.cljs$core$IFn$_invoke$arity$1(ns),prefix) == null))){
return true;
} else {
return false;
}
}
}
});
cljs.analyzer.confirm_var_exists = (function cljs$analyzer$confirm_var_exists(var_args){
var args8522 = [];
var len__7484__auto___8525 = arguments.length;
var i__7485__auto___8526 = (0);
while(true){
if((i__7485__auto___8526 < len__7484__auto___8525)){
args8522.push((arguments[i__7485__auto___8526]));

var G__8527 = (i__7485__auto___8526 + (1));
i__7485__auto___8526 = G__8527;
continue;
} else {
}
break;
}

var G__8524 = args8522.length;
switch (G__8524) {
case 3:
return cljs.analyzer.confirm_var_exists.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.analyzer.confirm_var_exists.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8522.length)].join('')));

}
});

cljs.analyzer.confirm_var_exists.cljs$core$IFn$_invoke$arity$3 = (function (env,prefix,suffix){
var warn = cljs.analyzer.confirm_var_exist_warning.call(null,env,prefix,suffix);
return cljs.analyzer.confirm_var_exists.call(null,env,prefix,suffix,warn);
});

cljs.analyzer.confirm_var_exists.cljs$core$IFn$_invoke$arity$4 = (function (env,prefix,suffix,missing_fn){
var sufstr = [cljs.core.str(suffix)].join('');
var suffix_str = (((!((".." === sufstr))) && (/\./.test(sufstr)))?cljs.core.first.call(null,clojure.string.split.call(null,sufstr,/\./)):suffix);
var suffix__$1 = cljs.core.symbol.call(null,suffix_str);
if((!(cljs.analyzer.implicit_import_QMARK_.call(null,env,prefix,suffix__$1))) && (!(cljs.analyzer.loaded_js_ns_QMARK_.call(null,env,prefix))) && (!((cljs.core._EQ_.call(null,cljs.core.cst$sym$cljs$core,prefix)) && (cljs.core._EQ_.call(null,cljs.core.cst$sym$unquote,suffix__$1)))) && ((cljs.analyzer.gets.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,prefix,cljs.core.cst$kw$defs,suffix__$1) == null))){
return missing_fn.call(null,env,prefix,suffix__$1);
} else {
return null;
}
});

cljs.analyzer.confirm_var_exists.cljs$lang$maxFixedArity = 4;

cljs.analyzer.confirm_var_exists_throw = (function cljs$analyzer$confirm_var_exists_throw(){
return (function (env,prefix,suffix){
return cljs.analyzer.confirm_var_exists.call(null,env,prefix,suffix,(function (env__$1,prefix__$1,suffix__$1){
throw cljs.analyzer.error.call(null,env__$1,[cljs.core.str("Unable to resolve var: "),cljs.core.str(suffix__$1),cljs.core.str(" in this context")].join(''));
}));
});
});
cljs.analyzer.resolve_ns_alias = (function cljs$analyzer$resolve_ns_alias(var_args){
var args8529 = [];
var len__7484__auto___8532 = arguments.length;
var i__7485__auto___8533 = (0);
while(true){
if((i__7485__auto___8533 < len__7484__auto___8532)){
args8529.push((arguments[i__7485__auto___8533]));

var G__8534 = (i__7485__auto___8533 + (1));
i__7485__auto___8533 = G__8534;
continue;
} else {
}
break;
}

var G__8531 = args8529.length;
switch (G__8531) {
case 2:
return cljs.analyzer.resolve_ns_alias.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.analyzer.resolve_ns_alias.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8529.length)].join('')));

}
});

cljs.analyzer.resolve_ns_alias.cljs$core$IFn$_invoke$arity$2 = (function (env,name){
return cljs.analyzer.resolve_ns_alias.call(null,env,name,cljs.core.symbol.call(null,name));
});

cljs.analyzer.resolve_ns_alias.cljs$core$IFn$_invoke$arity$3 = (function (env,name,default$){
var sym = cljs.core.symbol.call(null,name);
return cljs.core.get.call(null,cljs.core.cst$kw$requires.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(env)),sym,default$);
});

cljs.analyzer.resolve_ns_alias.cljs$lang$maxFixedArity = 3;

cljs.analyzer.resolve_macro_ns_alias = (function cljs$analyzer$resolve_macro_ns_alias(var_args){
var args8536 = [];
var len__7484__auto___8539 = arguments.length;
var i__7485__auto___8540 = (0);
while(true){
if((i__7485__auto___8540 < len__7484__auto___8539)){
args8536.push((arguments[i__7485__auto___8540]));

var G__8541 = (i__7485__auto___8540 + (1));
i__7485__auto___8540 = G__8541;
continue;
} else {
}
break;
}

var G__8538 = args8536.length;
switch (G__8538) {
case 2:
return cljs.analyzer.resolve_macro_ns_alias.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.analyzer.resolve_macro_ns_alias.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8536.length)].join('')));

}
});

cljs.analyzer.resolve_macro_ns_alias.cljs$core$IFn$_invoke$arity$2 = (function (env,name){
return cljs.analyzer.resolve_macro_ns_alias.call(null,env,name,cljs.core.symbol.call(null,name));
});

cljs.analyzer.resolve_macro_ns_alias.cljs$core$IFn$_invoke$arity$3 = (function (env,name,default$){
var sym = cljs.core.symbol.call(null,name);
return cljs.core.get.call(null,cljs.core.cst$kw$require_DASH_macros.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(env)),sym,default$);
});

cljs.analyzer.resolve_macro_ns_alias.cljs$lang$maxFixedArity = 3;

/**
 * Given env, an analysis environment, and ns-sym, a symbol identifying a
 * namespace, confirm that the namespace exists. Warn if not found.
 */
cljs.analyzer.confirm_ns = (function cljs$analyzer$confirm_ns(env,ns_sym){
if((cljs.core.not_EQ_.call(null,cljs.core.cst$sym$cljs$core,ns_sym)) && ((cljs.core.get.call(null,cljs.analyzer.implicit_nses,ns_sym) == null)) && ((cljs.core.get.call(null,cljs.core.cst$kw$requires.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(env)),ns_sym) == null)) && ((cljs.analyzer.gets.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,ns_sym) == null))){
return cljs.analyzer.warning.call(null,cljs.core.cst$kw$undeclared_DASH_ns,env,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$ns_DASH_sym,ns_sym], null));
} else {
return null;
}
});
/**
 * Is sym visible from core in the current compilation namespace?
 */
cljs.analyzer.core_name_QMARK_ = (function cljs$analyzer$core_name_QMARK_(env,sym){
var and__6397__auto__ = (function (){var or__6409__auto__ = cljs.analyzer.gets.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,cljs.core.cst$sym$cljs$core,cljs.core.cst$kw$defs,sym);
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
var temp__4657__auto__ = cljs.analyzer.get_expander.call(null,sym,env);
if(cljs.core.truth_(temp__4657__auto__)){
var mac = temp__4657__auto__;
var ns = cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,mac));
return cljs.core._EQ_.call(null,ns.getName(),cljs.core.cst$sym$cljs$core$macros);
} else {
return null;
}
}
})();
if(cljs.core.truth_(and__6397__auto__)){
return !(cljs.core.contains_QMARK_.call(null,cljs.core.cst$kw$excludes.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(env)),sym));
} else {
return and__6397__auto__;
}
});
/**
 * Resolve a var. Accepts a side-effecting confirm fn for producing
 * warnings about unresolved vars.
 */
cljs.analyzer.resolve_var = (function cljs$analyzer$resolve_var(var_args){
var args8543 = [];
var len__7484__auto___8546 = arguments.length;
var i__7485__auto___8547 = (0);
while(true){
if((i__7485__auto___8547 < len__7484__auto___8546)){
args8543.push((arguments[i__7485__auto___8547]));

var G__8548 = (i__7485__auto___8547 + (1));
i__7485__auto___8547 = G__8548;
continue;
} else {
}
break;
}

var G__8545 = args8543.length;
switch (G__8545) {
case 2:
return cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8543.length)].join('')));

}
});

cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2 = (function (env,sym){
return cljs.analyzer.resolve_var.call(null,env,sym,null);
});

cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$3 = (function (env,sym,confirm){
while(true){
if(("js" === cljs.core.namespace.call(null,sym))){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,sym,cljs.core.cst$kw$ns,cljs.core.cst$sym$js], null);
} else {
var s = [cljs.core.str(sym)].join('');
var lcls = cljs.core.cst$kw$locals.cljs$core$IFn$_invoke$arity$1(env);
var lb = cljs.core.get.call(null,lcls,sym);
if(!((lb == null))){
return lb;
} else {
if(!((cljs.core.namespace.call(null,sym) == null))){
var ns = cljs.core.namespace.call(null,sym);
var ns__$1 = ((("clojure.core" === ns))?"cljs.core":ns);
var full_ns = cljs.analyzer.resolve_ns_alias.call(null,env,ns__$1);
if((confirm == null)){
} else {
if(cljs.core.not_EQ_.call(null,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(env)),full_ns)){
cljs.analyzer.confirm_ns.call(null,env,full_ns);
} else {
}

confirm.call(null,env,full_ns,cljs.core.symbol.call(null,cljs.core.name.call(null,sym)));
}

return cljs.core.merge.call(null,cljs.analyzer.gets.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,full_ns,cljs.core.cst$kw$defs,cljs.core.symbol.call(null,cljs.core.name.call(null,sym))),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,cljs.core.symbol.call(null,[cljs.core.str(full_ns)].join(''),[cljs.core.str(cljs.core.name.call(null,sym))].join('')),cljs.core.cst$kw$ns,full_ns], null));
} else {
if((goog.string.contains(s,".")) && (!(goog.string.contains(s,"..")))){
var idx = s.indexOf(".");
var prefix = cljs.core.symbol.call(null,cljs.core.subs.call(null,s,(0),idx));
var suffix = cljs.core.subs.call(null,s,(idx + (1)));
var lb__$1 = cljs.core.get.call(null,lcls,prefix);
if(!((lb__$1 == null))){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(lb__$1))].join(''),suffix)], null);
} else {
var cur_ns = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(env));
var full_ns = cljs.analyzer.gets.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,cur_ns,cljs.core.cst$kw$imports,prefix);
if(!((full_ns == null))){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,cljs.core.symbol.call(null,[cljs.core.str(full_ns)].join(''),suffix)], null);
} else {
var info = cljs.analyzer.gets.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,cur_ns,cljs.core.cst$kw$defs,prefix);
if(!((info == null))){
return cljs.core.merge.call(null,info,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,cljs.core.symbol.call(null,[cljs.core.str(cur_ns)].join(''),[cljs.core.str(sym)].join('')),cljs.core.cst$kw$ns,cur_ns], null));
} else {
return cljs.core.merge.call(null,cljs.analyzer.gets.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,prefix,cljs.core.cst$kw$defs,cljs.core.symbol.call(null,suffix)),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,((cljs.core._EQ_.call(null,"",prefix))?cljs.core.symbol.call(null,suffix):cljs.core.symbol.call(null,[cljs.core.str(prefix)].join(''),suffix)),cljs.core.cst$kw$ns,prefix], null));
}
}
}
} else {
if(!((cljs.analyzer.gets.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(env)),cljs.core.cst$kw$uses,sym) == null))){
var full_ns = cljs.analyzer.gets.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(env)),cljs.core.cst$kw$uses,sym);
return cljs.core.merge.call(null,cljs.analyzer.gets.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,full_ns,cljs.core.cst$kw$defs,sym),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,cljs.core.symbol.call(null,[cljs.core.str(full_ns)].join(''),[cljs.core.str(sym)].join('')),cljs.core.cst$kw$ns,full_ns], null));
} else {
if(!((cljs.analyzer.gets.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(env)),cljs.core.cst$kw$renames,sym) == null))){
var qualified_symbol = cljs.analyzer.gets.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(env)),cljs.core.cst$kw$renames,sym);
var full_ns = cljs.core.symbol.call(null,cljs.core.namespace.call(null,qualified_symbol));
var sym__$1 = cljs.core.symbol.call(null,cljs.core.name.call(null,qualified_symbol));
return cljs.core.merge.call(null,cljs.analyzer.gets.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,full_ns,cljs.core.cst$kw$defs,sym__$1),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,qualified_symbol,cljs.core.cst$kw$ns,full_ns], null));
} else {
if(!((cljs.analyzer.gets.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(env)),cljs.core.cst$kw$imports,sym) == null))){
var G__8550 = env;
var G__8551 = cljs.analyzer.gets.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(env)),cljs.core.cst$kw$imports,sym);
var G__8552 = confirm;
env = G__8550;
sym = G__8551;
confirm = G__8552;
continue;
} else {
var cur_ns = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(env));
var full_ns = ((!((cljs.analyzer.gets.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,cur_ns,cljs.core.cst$kw$defs,sym) == null)))?cur_ns:((cljs.analyzer.core_name_QMARK_.call(null,env,sym))?cljs.core.cst$sym$cljs$core:cur_ns
));
if((confirm == null)){
} else {
confirm.call(null,env,full_ns,sym);
}

return cljs.core.merge.call(null,cljs.analyzer.gets.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,full_ns,cljs.core.cst$kw$defs,sym),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,cljs.core.symbol.call(null,[cljs.core.str(full_ns)].join(''),[cljs.core.str(sym)].join('')),cljs.core.cst$kw$ns,full_ns], null));

}
}
}
}
}
}
}
break;
}
});

cljs.analyzer.resolve_var.cljs$lang$maxFixedArity = 3;

/**
 * Given env, an analysis environment, and sym, a symbol, resolve an existing var.
 * Emits a warning if no such var exists.
 */
cljs.analyzer.resolve_existing_var = (function cljs$analyzer$resolve_existing_var(env,sym){
if(cljs.core.not.call(null,cljs.core.cst$kw$cljs$analyzer_SLASH_no_DASH_resolve.cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,sym)))){
return cljs.analyzer.resolve_var.call(null,env,sym,cljs.analyzer.confirm_var_exists);
} else {
return cljs.analyzer.resolve_var.call(null,env,sym);
}
});
/**
 * Given env, an analysis environment env, and names, a list of symbols, confirm
 * that all correspond to declared dynamic vars.
 */
cljs.analyzer.confirm_bindings = (function cljs$analyzer$confirm_bindings(env,names){
var seq__8557 = cljs.core.seq.call(null,names);
var chunk__8558 = null;
var count__8559 = (0);
var i__8560 = (0);
while(true){
if((i__8560 < count__8559)){
var name = cljs.core._nth.call(null,chunk__8558,i__8560);
var env_8561__$1 = cljs.core.assoc.call(null,env,cljs.core.cst$kw$ns,cljs.analyzer.get_namespace.call(null,cljs.analyzer._STAR_cljs_ns_STAR_));
var ev_8562 = cljs.analyzer.resolve_existing_var.call(null,env_8561__$1,name);
if(cljs.core.truth_((function (){var and__6397__auto__ = ev_8562;
if(cljs.core.truth_(and__6397__auto__)){
return cljs.core.not.call(null,cljs.core.cst$kw$dynamic.cljs$core$IFn$_invoke$arity$1(ev_8562));
} else {
return and__6397__auto__;
}
})())){
cljs.analyzer.warning.call(null,cljs.core.cst$kw$dynamic,env_8561__$1,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ev,ev_8562,cljs.core.cst$kw$name,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(ev_8562)], null));
} else {
}

var G__8563 = seq__8557;
var G__8564 = chunk__8558;
var G__8565 = count__8559;
var G__8566 = (i__8560 + (1));
seq__8557 = G__8563;
chunk__8558 = G__8564;
count__8559 = G__8565;
i__8560 = G__8566;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__8557);
if(temp__4657__auto__){
var seq__8557__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8557__$1)){
var c__7220__auto__ = cljs.core.chunk_first.call(null,seq__8557__$1);
var G__8567 = cljs.core.chunk_rest.call(null,seq__8557__$1);
var G__8568 = c__7220__auto__;
var G__8569 = cljs.core.count.call(null,c__7220__auto__);
var G__8570 = (0);
seq__8557 = G__8567;
chunk__8558 = G__8568;
count__8559 = G__8569;
i__8560 = G__8570;
continue;
} else {
var name = cljs.core.first.call(null,seq__8557__$1);
var env_8571__$1 = cljs.core.assoc.call(null,env,cljs.core.cst$kw$ns,cljs.analyzer.get_namespace.call(null,cljs.analyzer._STAR_cljs_ns_STAR_));
var ev_8572 = cljs.analyzer.resolve_existing_var.call(null,env_8571__$1,name);
if(cljs.core.truth_((function (){var and__6397__auto__ = ev_8572;
if(cljs.core.truth_(and__6397__auto__)){
return cljs.core.not.call(null,cljs.core.cst$kw$dynamic.cljs$core$IFn$_invoke$arity$1(ev_8572));
} else {
return and__6397__auto__;
}
})())){
cljs.analyzer.warning.call(null,cljs.core.cst$kw$dynamic,env_8571__$1,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ev,ev_8572,cljs.core.cst$kw$name,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(ev_8572)], null));
} else {
}

var G__8573 = cljs.core.next.call(null,seq__8557__$1);
var G__8574 = null;
var G__8575 = (0);
var G__8576 = (0);
seq__8557 = G__8573;
chunk__8558 = G__8574;
count__8559 = G__8575;
i__8560 = G__8576;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Given env, an analysis environment, and sym, a symbol, resolve a macro.
 */
cljs.analyzer.resolve_macro_var = (function cljs$analyzer$resolve_macro_var(env,sym){
var ns = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(env));
var namespaces = cljs.core.get.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces);
if(cljs.core.truth_(cljs.core.namespace.call(null,sym))){
var ns__$1 = cljs.core.namespace.call(null,sym);
var ns__$2 = ((cljs.core._EQ_.call(null,"clojure.core",ns__$1))?"cljs.core":ns__$1);
var full_ns = cljs.analyzer.resolve_macro_ns_alias.call(null,env,ns__$2);
return cljs.core.get_in.call(null,namespaces,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [full_ns,cljs.core.cst$kw$macros,cljs.core.symbol.call(null,cljs.core.name.call(null,sym))], null));
} else {
if(cljs.core.truth_(cljs.core.get_in.call(null,namespaces,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns,cljs.core.cst$kw$use_DASH_macros,sym], null)))){
var full_ns = cljs.core.get_in.call(null,namespaces,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns,cljs.core.cst$kw$use_DASH_macros,sym], null));
return cljs.core.get_in.call(null,namespaces,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [full_ns,cljs.core.cst$kw$macros,sym], null));
} else {
if(cljs.core.truth_(cljs.core.get_in.call(null,namespaces,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns,cljs.core.cst$kw$rename_DASH_macros,sym], null)))){
var qualified_symbol = cljs.core.get_in.call(null,namespaces,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns,cljs.core.cst$kw$rename_DASH_macros,sym], null));
var full_ns = cljs.core.symbol.call(null,cljs.core.namespace.call(null,qualified_symbol));
var sym__$1 = cljs.core.symbol.call(null,cljs.core.name.call(null,qualified_symbol));
return cljs.core.get_in.call(null,namespaces,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [full_ns,cljs.core.cst$kw$macros,sym__$1], null));
} else {
var ns__$1 = (cljs.core.truth_(cljs.core.get_in.call(null,namespaces,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns,cljs.core.cst$kw$macros,sym], null)))?ns:((cljs.analyzer.core_name_QMARK_.call(null,env,sym))?cljs.core.cst$sym$cljs$core:null));
if(cljs.core.truth_(ns__$1)){
return cljs.core.get_in.call(null,namespaces,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns__$1,cljs.core.cst$kw$macros,sym], null));
} else {
return null;
}

}
}
}
});


cljs.analyzer.specials = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 21, [cljs.core.cst$sym$_AMPERSAND_,null,cljs.core.cst$sym$case_STAR_,null,cljs.core.cst$sym$defrecord_STAR_,null,cljs.core.cst$sym$try,null,cljs.core.cst$sym$loop_STAR_,null,cljs.core.cst$sym$do,null,cljs.core.cst$sym$letfn_STAR_,null,cljs.core.cst$sym$if,null,cljs.core.cst$sym$new,null,cljs.core.cst$sym$ns,null,cljs.core.cst$sym$deftype_STAR_,null,cljs.core.cst$sym$let_STAR_,null,cljs.core.cst$sym$js_STAR_,null,cljs.core.cst$sym$fn_STAR_,null,cljs.core.cst$sym$recur,null,cljs.core.cst$sym$set_BANG_,null,cljs.core.cst$sym$_DOT_,null,cljs.core.cst$sym$var,null,cljs.core.cst$sym$quote,null,cljs.core.cst$sym$throw,null,cljs.core.cst$sym$def,null], null), null);
cljs.analyzer._STAR_recur_frames_STAR_ = null;
cljs.analyzer._STAR_loop_lets_STAR_ = cljs.core.List.EMPTY;
cljs.analyzer._STAR_allow_redef_STAR_ = false;
cljs.analyzer.analyze_keyword = (function cljs$analyzer$analyze_keyword(env,sym){
cljs.analyzer.register_constant_BANG_.call(null,env,sym);

return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$op,cljs.core.cst$kw$constant,cljs.core.cst$kw$env,env,cljs.core.cst$kw$form,sym,cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core_SLASH_Keyword], null);
});
cljs.analyzer.get_tag = (function cljs$analyzer$get_tag(e){
var tag = cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(e);
if(!((tag == null))){
return tag;
} else {
var tag__$1 = cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$info.cljs$core$IFn$_invoke$arity$1(e));
if(!((tag__$1 == null))){
return tag__$1;
} else {
return cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,cljs.core.cst$kw$form.cljs$core$IFn$_invoke$arity$1(e)));
}
}
});
cljs.analyzer.find_matching_method = (function cljs$analyzer$find_matching_method(f,params){
var methods$ = (function (){var or__6409__auto__ = cljs.core.cst$kw$methods.cljs$core$IFn$_invoke$arity$1(f);
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return cljs.core.cst$kw$methods.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$info.cljs$core$IFn$_invoke$arity$1(f));
}
})();
var c = cljs.core.count.call(null,params);
return cljs.core.some.call(null,((function (methods$,c){
return (function (m){
var and__6397__auto__ = (function (){var or__6409__auto__ = (cljs.core.cst$kw$max_DASH_fixed_DASH_arity.cljs$core$IFn$_invoke$arity$1(m) === c);
if(or__6409__auto__){
return or__6409__auto__;
} else {
return cljs.core.cst$kw$variadic.cljs$core$IFn$_invoke$arity$1(m);
}
})();
if(cljs.core.truth_(and__6397__auto__)){
return m;
} else {
return and__6397__auto__;
}
});})(methods$,c))
,methods$);
});
cljs.analyzer.type_QMARK_ = (function cljs$analyzer$type_QMARK_(env,t){
if((!((t == null))) && ((t instanceof cljs.core.Symbol))){
var var$ = cljs.analyzer.resolve_var.call(null,env,t);
var type = cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(var$);
if(!((type == null))){
return type;
} else {
var type__$1 = cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$info.cljs$core$IFn$_invoke$arity$1(var$));
if(!((type__$1 == null))){
return type__$1;
} else {
var proto = cljs.core.cst$kw$protocol_DASH_symbol.cljs$core$IFn$_invoke$arity$1(var$);
if(!((proto == null))){
return proto;
} else {
return cljs.core.get.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$sym$cljs$core_SLASH_PersistentHashMap,null,cljs.core.cst$sym$cljs$core_SLASH_List,null], null), null),t);
}
}
}
} else {
return null;
}
});
cljs.analyzer.NOT_NATIVE = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$sym$clj,null,cljs.core.cst$sym$not_DASH_native,null], null), null);
cljs.analyzer.BOOLEAN_OR_SEQ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$sym$seq,null,cljs.core.cst$sym$boolean,null], null), null);
cljs.analyzer.infer_if = (function cljs$analyzer$infer_if(env,e){
var map__8581 = e;
var map__8581__$1 = ((((!((map__8581 == null)))?((((map__8581.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8581.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8581):map__8581);
var map__8582 = cljs.core.get.call(null,map__8581__$1,cljs.core.cst$kw$test);
var map__8582__$1 = ((((!((map__8582 == null)))?((((map__8582.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8582.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8582):map__8582);
var op = cljs.core.get.call(null,map__8582__$1,cljs.core.cst$kw$op);
var form = cljs.core.get.call(null,map__8582__$1,cljs.core.cst$kw$form);
var then_tag = cljs.analyzer.infer_tag.call(null,env,cljs.core.cst$kw$then.cljs$core$IFn$_invoke$arity$1(e));
if((cljs.core.keyword_identical_QMARK_.call(null,op,cljs.core.cst$kw$constant)) && (!((form == null))) && (!(form === false))){
return then_tag;
} else {
var else_tag = cljs.analyzer.infer_tag.call(null,env,cljs.core.cst$kw$else.cljs$core$IFn$_invoke$arity$1(e));
if((cljs.core.symbol_identical_QMARK_.call(null,then_tag,else_tag)) || (cljs.core.symbol_identical_QMARK_.call(null,else_tag,cljs.analyzer.IGNORE_SYM))){
return then_tag;
} else {
if(cljs.core.symbol_identical_QMARK_.call(null,then_tag,cljs.analyzer.IGNORE_SYM)){
return else_tag;
} else {
if(((!((cljs.core.get.call(null,cljs.analyzer.NOT_NATIVE,then_tag) == null))) || (cljs.analyzer.type_QMARK_.call(null,env,then_tag))) && ((!((cljs.core.get.call(null,cljs.analyzer.NOT_NATIVE,else_tag) == null))) || (cljs.analyzer.type_QMARK_.call(null,env,else_tag)))){
return cljs.core.cst$sym$clj;
} else {
if((!((cljs.core.get.call(null,cljs.analyzer.BOOLEAN_OR_SEQ,then_tag) == null))) && (!((cljs.core.get.call(null,cljs.analyzer.BOOLEAN_OR_SEQ,else_tag) == null)))){
return cljs.core.cst$sym$seq;
} else {
var then_tag__$1 = ((cljs.analyzer.cljs_set_QMARK_.call(null,then_tag))?then_tag:cljs.core.PersistentHashSet.fromArray([then_tag], true));
var else_tag__$1 = ((cljs.analyzer.cljs_set_QMARK_.call(null,else_tag))?else_tag:cljs.core.PersistentHashSet.fromArray([else_tag], true));
return cljs.core.into.call(null,then_tag__$1,else_tag__$1);
}

}
}
}
}
});
cljs.analyzer.infer_invoke = (function cljs$analyzer$infer_invoke(env,e){
var map__8587 = cljs.core.cst$kw$f.cljs$core$IFn$_invoke$arity$1(e);
var map__8587__$1 = ((((!((map__8587 == null)))?((((map__8587.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8587.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8587):map__8587);
var f = map__8587__$1;
var info = cljs.core.get.call(null,map__8587__$1,cljs.core.cst$kw$info);
var ret_tag = (((cljs.core.cst$kw$fn_DASH_var.cljs$core$IFn$_invoke$arity$1(info) == null))?null:cljs.core.cst$kw$ret_DASH_tag.cljs$core$IFn$_invoke$arity$1(info));
if(!((ret_tag == null))){
return ret_tag;
} else {
var args = cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(e);
var me = cljs.core.assoc.call(null,cljs.analyzer.find_matching_method.call(null,f,args),cljs.core.cst$kw$op,cljs.core.cst$kw$method);
var ret_tag__$1 = cljs.analyzer.infer_tag.call(null,env,me);
if(!((ret_tag__$1 == null))){
return ret_tag__$1;
} else {
return cljs.analyzer.ANY_SYM;
}
}
});
/**
 * Given env, an analysis environment, and e, an AST node, return the inferred
 * type of the node
 */
cljs.analyzer.infer_tag = (function cljs$analyzer$infer_tag(env,e){
var tag = cljs.analyzer.get_tag.call(null,e);
if(!((tag == null))){
return tag;
} else {
var G__8591 = (((cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(e) instanceof cljs.core.Keyword))?cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(e).fqn:null);
switch (G__8591) {
case "js":
return cljs.analyzer.ANY_SYM;

break;
case "let":
return cljs$analyzer$infer_tag.call(null,env,cljs.core.cst$kw$expr.cljs$core$IFn$_invoke$arity$1(e));

break;
case "do":
return cljs$analyzer$infer_tag.call(null,env,cljs.core.cst$kw$ret.cljs$core$IFn$_invoke$arity$1(e));

break;
case "if":
return cljs.analyzer.infer_if.call(null,env,e);

break;
case "method":
return cljs$analyzer$infer_tag.call(null,env,cljs.core.cst$kw$expr.cljs$core$IFn$_invoke$arity$1(e));

break;
case "constant":
var G__8592 = cljs.core.cst$kw$form.cljs$core$IFn$_invoke$arity$1(e);
if(cljs.core._EQ_.call(null,true,G__8592)){
return cljs.analyzer.BOOLEAN_SYM;
} else {
if(cljs.core._EQ_.call(null,false,G__8592)){
return cljs.analyzer.BOOLEAN_SYM;
} else {
return cljs.analyzer.ANY_SYM;

}
}

break;
case "recur":
return cljs.analyzer.IGNORE_SYM;

break;
case "loop":
return cljs$analyzer$infer_tag.call(null,env,cljs.core.cst$kw$expr.cljs$core$IFn$_invoke$arity$1(e));

break;
case "var":
if(!((cljs.core.cst$kw$init.cljs$core$IFn$_invoke$arity$1(e) == null))){
return cljs$analyzer$infer_tag.call(null,env,cljs.core.cst$kw$init.cljs$core$IFn$_invoke$arity$1(e));
} else {
return cljs$analyzer$infer_tag.call(null,env,cljs.core.cst$kw$info.cljs$core$IFn$_invoke$arity$1(e));
}

break;
case "invoke":
return cljs.analyzer.infer_invoke.call(null,env,e);

break;
case "throw":
return cljs.analyzer.IGNORE_SYM;

break;
case "def":
return cljs$analyzer$infer_tag.call(null,env,cljs.core.cst$kw$init.cljs$core$IFn$_invoke$arity$1(e));

break;
case "dot":
return cljs.analyzer.ANY_SYM;

break;
default:
return null;

}
}
});
if(typeof cljs.analyzer.parse !== 'undefined'){
} else {
cljs.analyzer.parse = (function (){var method_table__7334__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__7335__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__7336__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__7337__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__7338__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.analyzer","parse"),((function (method_table__7334__auto__,prefer_table__7335__auto__,method_cache__7336__auto__,cached_hierarchy__7337__auto__,hierarchy__7338__auto__){
return (function() { 
var G__8594__delegate = function (op,rest){
return op;
};
var G__8594 = function (op,var_args){
var rest = null;
if (arguments.length > 1) {
var G__8595__i = 0, G__8595__a = new Array(arguments.length -  1);
while (G__8595__i < G__8595__a.length) {G__8595__a[G__8595__i] = arguments[G__8595__i + 1]; ++G__8595__i;}
  rest = new cljs.core.IndexedSeq(G__8595__a,0);
} 
return G__8594__delegate.call(this,op,rest);};
G__8594.cljs$lang$maxFixedArity = 1;
G__8594.cljs$lang$applyTo = (function (arglist__8596){
var op = cljs.core.first(arglist__8596);
var rest = cljs.core.rest(arglist__8596);
return G__8594__delegate(op,rest);
});
G__8594.cljs$core$IFn$_invoke$arity$variadic = G__8594__delegate;
return G__8594;
})()
;})(method_table__7334__auto__,prefer_table__7335__auto__,method_cache__7336__auto__,cached_hierarchy__7337__auto__,hierarchy__7338__auto__))
,cljs.core.cst$kw$default,hierarchy__7338__auto__,method_table__7334__auto__,prefer_table__7335__auto__,method_cache__7336__auto__,cached_hierarchy__7337__auto__));
})();
}
cljs.analyzer.var_ast = (function cljs$analyzer$var_ast(env,sym){
var var$ = cljs.analyzer.resolve_var.call(null,env,sym,cljs.analyzer.confirm_var_exists_throw.call(null));
var expr_env = cljs.core.assoc.call(null,env,cljs.core.cst$kw$context,cljs.core.cst$kw$expr);
var temp__4655__auto__ = cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(var$);
if(cljs.core.truth_(temp__4655__auto__)){
var var_ns = temp__4655__auto__;
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$var,cljs.analyzer.analyze.call(null,expr_env,sym),cljs.core.cst$kw$sym,cljs.analyzer.analyze.call(null,expr_env,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$quote),(function (){var x__7243__auto__ = cljs.core.symbol.call(null,cljs.core.name.call(null,var_ns),cljs.core.name.call(null,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(var$)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())))),cljs.core.cst$kw$meta,(function (){var ks = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ns,cljs.core.cst$kw$doc,cljs.core.cst$kw$file,cljs.core.cst$kw$line,cljs.core.cst$kw$column], null);
var m = cljs.core.merge.call(null,(function (){var user_meta = cljs.core.cst$kw$meta.cljs$core$IFn$_invoke$arity$1(var$);
var uks = cljs.core.keys.call(null,user_meta);
return cljs.core.zipmap.call(null,uks,cljs.core.map.call(null,((function (user_meta,uks,ks,var_ns,temp__4655__auto__,var$,expr_env){
return (function (p1__8597_SHARP_){
return cljs.core._conj.call(null,(function (){var x__7243__auto__ = cljs.core.get.call(null,user_meta,p1__8597_SHARP_);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),cljs.core.cst$sym$quote);
});})(user_meta,uks,ks,var_ns,temp__4655__auto__,var$,expr_env))
,uks));
})(),cljs.core.assoc.call(null,cljs.core.zipmap.call(null,ks,cljs.core.map.call(null,((function (ks,var_ns,temp__4655__auto__,var$,expr_env){
return (function (p1__8598_SHARP_){
return cljs.core._conj.call(null,(function (){var x__7243__auto__ = cljs.core.get.call(null,var$,p1__8598_SHARP_);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),cljs.core.cst$sym$quote);
});})(ks,var_ns,temp__4655__auto__,var$,expr_env))
,ks)),cljs.core.cst$kw$name,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$quote),(function (){var x__7243__auto__ = cljs.core.symbol.call(null,cljs.core.name.call(null,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(var$)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})()))),cljs.core.cst$kw$test,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_when),(function (){var x__7243__auto__ = sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$$_DASH_cljs$lang$test),(function (){var x__7243__auto__ = sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})()))),cljs.core.cst$kw$arglists,(function (){var arglists = cljs.core.cst$kw$arglists.cljs$core$IFn$_invoke$arity$1(var$);
var arglists_SINGLEQUOTE_ = ((cljs.core._EQ_.call(null,cljs.core.cst$sym$quote,cljs.core.first.call(null,arglists)))?cljs.core.second.call(null,arglists):arglists);
return cljs.core._conj.call(null,(function (){var x__7243__auto__ = cljs.core.doall.call(null,cljs.core.map.call(null,cljs.core.with_meta,arglists_SINGLEQUOTE_,cljs.core.cst$kw$arglists_DASH_meta.cljs$core$IFn$_invoke$arity$1(var$)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),cljs.core.cst$sym$quote);
})()));
return cljs.analyzer.analyze.call(null,expr_env,m);
})()], null);
} else {
return null;
}
});
cljs.core._add_method.call(null,cljs.analyzer.parse,cljs.core.cst$sym$var,(function (op,env,p__8599,_,___$1){
var vec__8600 = p__8599;
var ___$2 = cljs.core.nth.call(null,vec__8600,(0),null);
var sym = cljs.core.nth.call(null,vec__8600,(1),null);
var form = vec__8600;
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$env,env,cljs.core.cst$kw$op,cljs.core.cst$kw$var_DASH_special,cljs.core.cst$kw$form,form], null),cljs.analyzer.var_ast.call(null,env,sym));
}));
cljs.core._add_method.call(null,cljs.analyzer.parse,cljs.core.cst$sym$if,(function (op,env,p__8603,name,_){
var vec__8604 = p__8603;
var ___$1 = cljs.core.nth.call(null,vec__8604,(0),null);
var test = cljs.core.nth.call(null,vec__8604,(1),null);
var then = cljs.core.nth.call(null,vec__8604,(2),null);
var else$ = cljs.core.nth.call(null,vec__8604,(3),null);
var form = vec__8604;
if((cljs.core.count.call(null,form) < (3))){
throw cljs.analyzer.error.call(null,env,"Too few arguments to if");
} else {
}

if((cljs.core.count.call(null,form) > (4))){
throw cljs.analyzer.error.call(null,env,"Too many arguments to if");
} else {
}

var test_expr = (function (){var _STAR_recur_frames_STAR_8607 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = cljs.core.cons.call(null,null,cljs.analyzer._STAR_recur_frames_STAR_);

try{return cljs.analyzer.analyze.call(null,cljs.core.assoc.call(null,env,cljs.core.cst$kw$context,cljs.core.cst$kw$expr),test);
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_8607;
}})();
var then_expr = (function (){var _STAR_allow_redef_STAR_8608 = cljs.analyzer._STAR_allow_redef_STAR_;
cljs.analyzer._STAR_allow_redef_STAR_ = true;

try{return cljs.analyzer.analyze.call(null,env,then);
}finally {cljs.analyzer._STAR_allow_redef_STAR_ = _STAR_allow_redef_STAR_8608;
}})();
var else_expr = (function (){var _STAR_allow_redef_STAR_8609 = cljs.analyzer._STAR_allow_redef_STAR_;
cljs.analyzer._STAR_allow_redef_STAR_ = true;

try{return cljs.analyzer.analyze.call(null,env,else$);
}finally {cljs.analyzer._STAR_allow_redef_STAR_ = _STAR_allow_redef_STAR_8609;
}})();
return new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$env,env,cljs.core.cst$kw$op,cljs.core.cst$kw$if,cljs.core.cst$kw$form,form,cljs.core.cst$kw$test,test_expr,cljs.core.cst$kw$then,then_expr,cljs.core.cst$kw$else,else_expr,cljs.core.cst$kw$unchecked,cljs.core._STAR_unchecked_if_STAR_,cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [test_expr,then_expr,else_expr], null)], null);
}));
cljs.core._add_method.call(null,cljs.analyzer.parse,cljs.core.cst$sym$case_STAR_,(function (op,env,p__8612,name,_){
var vec__8613 = p__8612;
var ___$1 = cljs.core.nth.call(null,vec__8613,(0),null);
var sym = cljs.core.nth.call(null,vec__8613,(1),null);
var tests = cljs.core.nth.call(null,vec__8613,(2),null);
var thens = cljs.core.nth.call(null,vec__8613,(3),null);
var default$ = cljs.core.nth.call(null,vec__8613,(4),null);
var form = vec__8613;
if((sym instanceof cljs.core.Symbol)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("case* must switch on symbol"),cljs.core.str("\n"),cljs.core.str("(symbol? sym)")].join('')));
}

if(cljs.core.every_QMARK_.call(null,cljs.core.vector_QMARK_,tests)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("case* tests must be grouped in vectors"),cljs.core.str("\n"),cljs.core.str("(every? vector? tests)")].join('')));
}

var expr_env = cljs.core.assoc.call(null,env,cljs.core.cst$kw$context,cljs.core.cst$kw$expr);
var v = (function (){var _STAR_recur_frames_STAR_8616 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = cljs.core.cons.call(null,null,cljs.analyzer._STAR_recur_frames_STAR_);

try{return cljs.analyzer.analyze.call(null,expr_env,sym);
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_8616;
}})();
var tests__$1 = cljs.core.mapv.call(null,((function (expr_env,v,vec__8613,___$1,sym,tests,thens,default$,form){
return (function (p1__8610_SHARP_){
return cljs.core.mapv.call(null,((function (expr_env,v,vec__8613,___$1,sym,tests,thens,default$,form){
return (function (t){
return cljs.analyzer.analyze.call(null,expr_env,t);
});})(expr_env,v,vec__8613,___$1,sym,tests,thens,default$,form))
,p1__8610_SHARP_);
});})(expr_env,v,vec__8613,___$1,sym,tests,thens,default$,form))
,tests);
var thens__$1 = cljs.core.mapv.call(null,((function (expr_env,v,tests__$1,vec__8613,___$1,sym,tests,thens,default$,form){
return (function (p1__8611_SHARP_){
return cljs.analyzer.analyze.call(null,env,p1__8611_SHARP_);
});})(expr_env,v,tests__$1,vec__8613,___$1,sym,tests,thens,default$,form))
,thens);
var default$__$1 = cljs.analyzer.analyze.call(null,env,default$);
if(cljs.core.every_QMARK_.call(null,((function (expr_env,v,tests__$1,thens__$1,default$__$1,vec__8613,___$1,sym,tests,thens,default$,form){
return (function (t){
var or__6409__auto__ = cljs.core.cst$kw$const.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$info.cljs$core$IFn$_invoke$arity$1(t));
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
var and__6397__auto__ = cljs.core._EQ_.call(null,cljs.core.cst$kw$constant,cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(t));
if(and__6397__auto__){
return cljs.core.some_fn.call(null,cljs.core.number_QMARK_,cljs.core.string_QMARK_,cljs.core.char_QMARK_).call(null,cljs.core.cst$kw$form.cljs$core$IFn$_invoke$arity$1(t));
} else {
return and__6397__auto__;
}
}
});})(expr_env,v,tests__$1,thens__$1,default$__$1,vec__8613,___$1,sym,tests,thens,default$,form))
,cljs.core.apply.call(null,cljs.core.concat,tests__$1))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("case* tests must be numbers, strings, or constants"),cljs.core.str("\n"),cljs.core.str("(every? (fn [t] (or (-> t :info :const) (and (= :constant (:op t)) ((some-fn number? string? char?) (:form t))))) (apply concat tests))")].join('')));
}

return new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$env,env,cljs.core.cst$kw$op,cljs.core.cst$kw$case_STAR_,cljs.core.cst$kw$form,form,cljs.core.cst$kw$v,v,cljs.core.cst$kw$tests,tests__$1,cljs.core.cst$kw$thens,thens__$1,cljs.core.cst$kw$default,default$__$1,cljs.core.cst$kw$children,cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null),tests__$1,thens__$1,(cljs.core.truth_(default$__$1)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [default$__$1], null):null)))], null);
}));
cljs.core._add_method.call(null,cljs.analyzer.parse,cljs.core.cst$sym$throw,(function (op,env,p__8617,name,_){
var vec__8618 = p__8617;
var ___$1 = cljs.core.nth.call(null,vec__8618,(0),null);
var throw$ = cljs.core.nth.call(null,vec__8618,(1),null);
var form = vec__8618;
var throw_expr = (function (){var _STAR_recur_frames_STAR_8621 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = cljs.core.cons.call(null,null,cljs.analyzer._STAR_recur_frames_STAR_);

try{return cljs.analyzer.analyze.call(null,cljs.core.assoc.call(null,env,cljs.core.cst$kw$context,cljs.core.cst$kw$expr),throw$);
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_8621;
}})();
return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$env,env,cljs.core.cst$kw$op,cljs.core.cst$kw$throw,cljs.core.cst$kw$form,form,cljs.core.cst$kw$throw,throw_expr,cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [throw_expr], null)], null);
}));
cljs.core._add_method.call(null,cljs.analyzer.parse,cljs.core.cst$sym$try,(function (op,env,p__8626,name,_){
var vec__8627 = p__8626;
var seq__8628 = cljs.core.seq.call(null,vec__8627);
var first__8629 = cljs.core.first.call(null,seq__8628);
var seq__8628__$1 = cljs.core.next.call(null,seq__8628);
var ___$1 = first__8629;
var body = seq__8628__$1;
var form = vec__8627;
var catchenv = cljs.core.update_in.call(null,env,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$context], null),((function (vec__8627,seq__8628,first__8629,seq__8628__$1,___$1,body,form){
return (function (p1__8622_SHARP_){
if(cljs.core._EQ_.call(null,cljs.core.cst$kw$expr,p1__8622_SHARP_)){
return cljs.core.cst$kw$return;
} else {
return p1__8622_SHARP_;
}
});})(vec__8627,seq__8628,first__8629,seq__8628__$1,___$1,body,form))
);
var catch_QMARK_ = cljs.core.every_pred.call(null,cljs.core.seq_QMARK_,((function (catchenv,vec__8627,seq__8628,first__8629,seq__8628__$1,___$1,body,form){
return (function (p1__8623_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.first.call(null,p1__8623_SHARP_),cljs.core.cst$sym$catch);
});})(catchenv,vec__8627,seq__8628,first__8629,seq__8628__$1,___$1,body,form))
);
var default_QMARK_ = cljs.core.every_pred.call(null,catch_QMARK_,((function (catchenv,catch_QMARK_,vec__8627,seq__8628,first__8629,seq__8628__$1,___$1,body,form){
return (function (p1__8624_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.second.call(null,p1__8624_SHARP_),cljs.core.cst$kw$default);
});})(catchenv,catch_QMARK_,vec__8627,seq__8628,first__8629,seq__8628__$1,___$1,body,form))
);
var finally_QMARK_ = cljs.core.every_pred.call(null,cljs.core.seq_QMARK_,((function (catchenv,catch_QMARK_,default_QMARK_,vec__8627,seq__8628,first__8629,seq__8628__$1,___$1,body,form){
return (function (p1__8625_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.first.call(null,p1__8625_SHARP_),cljs.core.cst$sym$finally);
});})(catchenv,catch_QMARK_,default_QMARK_,vec__8627,seq__8628,first__8629,seq__8628__$1,___$1,body,form))
);
var map__8630 = (function (){var parser = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$state,cljs.core.cst$kw$start,cljs.core.cst$kw$forms,body,cljs.core.cst$kw$body,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$cblocks,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$dblock,null,cljs.core.cst$kw$fblock,null], null);
while(true){
if(cljs.core.seq_QMARK_.call(null,cljs.core.cst$kw$forms.cljs$core$IFn$_invoke$arity$1(parser))){
var vec__8631 = cljs.core.cst$kw$forms.cljs$core$IFn$_invoke$arity$1(parser);
var seq__8632 = cljs.core.seq.call(null,vec__8631);
var first__8633 = cljs.core.first.call(null,seq__8632);
var seq__8632__$1 = cljs.core.next.call(null,seq__8632);
var form__$1 = first__8633;
var forms_STAR_ = seq__8632__$1;
var parser_STAR_ = cljs.core.assoc.call(null,parser,cljs.core.cst$kw$forms,forms_STAR_);
var G__8634 = (((cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(parser) instanceof cljs.core.Keyword))?cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(parser).fqn:null);
switch (G__8634) {
case "start":
if(cljs.core.truth_(catch_QMARK_.call(null,form__$1))){
var G__8644 = cljs.core.assoc.call(null,parser,cljs.core.cst$kw$state,cljs.core.cst$kw$catches);
parser = G__8644;
continue;
} else {
if(cljs.core.truth_(finally_QMARK_.call(null,form__$1))){
var G__8645 = cljs.core.assoc.call(null,parser,cljs.core.cst$kw$state,cljs.core.cst$kw$finally);
parser = G__8645;
continue;
} else {
var G__8646 = cljs.core.update_in.call(null,parser_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$body], null),cljs.core.conj,form__$1);
parser = G__8646;
continue;

}
}

break;
case "catches":
if(cljs.core.truth_(default_QMARK_.call(null,form__$1))){
var G__8647 = cljs.core.assoc.call(null,parser_STAR_,cljs.core.cst$kw$dblock,form__$1,cljs.core.cst$kw$state,cljs.core.cst$kw$finally);
parser = G__8647;
continue;
} else {
if(cljs.core.truth_(catch_QMARK_.call(null,form__$1))){
var G__8648 = cljs.core.update_in.call(null,parser_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cblocks], null),cljs.core.conj,form__$1);
parser = G__8648;
continue;
} else {
if(cljs.core.truth_(finally_QMARK_.call(null,form__$1))){
var G__8649 = cljs.core.assoc.call(null,parser,cljs.core.cst$kw$state,cljs.core.cst$kw$finally);
parser = G__8649;
continue;
} else {
throw cljs.analyzer.error.call(null,env,"Invalid try form");

}
}
}

break;
case "finally":
var G__8650 = cljs.core.assoc.call(null,parser_STAR_,cljs.core.cst$kw$fblock,form__$1,cljs.core.cst$kw$state,cljs.core.cst$kw$done);
parser = G__8650;
continue;

break;
case "done":
throw cljs.analyzer.error.call(null,env,"Unexpected form after finally");

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(parser))].join('')));

}
} else {
return parser;
}
break;
}
})();
var map__8630__$1 = ((((!((map__8630 == null)))?((((map__8630.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8630.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8630):map__8630);
var body__$1 = cljs.core.get.call(null,map__8630__$1,cljs.core.cst$kw$body);
var cblocks = cljs.core.get.call(null,map__8630__$1,cljs.core.cst$kw$cblocks);
var dblock = cljs.core.get.call(null,map__8630__$1,cljs.core.cst$kw$dblock);
var fblock = cljs.core.get.call(null,map__8630__$1,cljs.core.cst$kw$fblock);
var finally$ = ((cljs.core.seq.call(null,fblock))?cljs.analyzer.analyze.call(null,cljs.core.assoc.call(null,env,cljs.core.cst$kw$context,cljs.core.cst$kw$statement),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$do),cljs.core.rest.call(null,fblock))))):null);
var e = (cljs.core.truth_((function (){var or__6409__auto__ = cljs.core.seq.call(null,cblocks);
if(or__6409__auto__){
return or__6409__auto__;
} else {
return dblock;
}
})())?cljs.core.gensym.call(null,"e"):null);
var default$ = (function (){var temp__4655__auto__ = dblock;
if(cljs.core.truth_(temp__4655__auto__)){
var vec__8636 = temp__4655__auto__;
var seq__8637 = cljs.core.seq.call(null,vec__8636);
var first__8638 = cljs.core.first.call(null,seq__8637);
var seq__8637__$1 = cljs.core.next.call(null,seq__8637);
var ___$2 = first__8638;
var first__8638__$1 = cljs.core.first.call(null,seq__8637__$1);
var seq__8637__$2 = cljs.core.next.call(null,seq__8637__$1);
var ___$3 = first__8638__$1;
var first__8638__$2 = cljs.core.first.call(null,seq__8637__$2);
var seq__8637__$3 = cljs.core.next.call(null,seq__8637__$2);
var name__$1 = first__8638__$2;
var cb = seq__8637__$3;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_let),(function (){var x__7243__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7243__auto__ = name__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = e;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),cb)));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$throw),(function (){var x__7243__auto__ = e;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
}
})();
var cblock = ((cljs.core.seq.call(null,cblocks))?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_cond),cljs.core.mapcat.call(null,((function (catchenv,catch_QMARK_,default_QMARK_,finally_QMARK_,map__8630,map__8630__$1,body__$1,cblocks,dblock,fblock,finally$,e,default$,vec__8627,seq__8628,first__8629,seq__8628__$1,___$1,body,form){
return (function (p__8639){
var vec__8640 = p__8639;
var seq__8641 = cljs.core.seq.call(null,vec__8640);
var first__8642 = cljs.core.first.call(null,seq__8641);
var seq__8641__$1 = cljs.core.next.call(null,seq__8641);
var ___$2 = first__8642;
var first__8642__$1 = cljs.core.first.call(null,seq__8641__$1);
var seq__8641__$2 = cljs.core.next.call(null,seq__8641__$1);
var type = first__8642__$1;
var first__8642__$2 = cljs.core.first.call(null,seq__8641__$2);
var seq__8641__$3 = cljs.core.next.call(null,seq__8641__$2);
var name__$1 = first__8642__$2;
var cb = seq__8641__$3;
if(cljs.core.truth_(name__$1)){
if(cljs.core.not.call(null,cljs.core.namespace.call(null,name__$1))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Can't qualify symbol in catch"),cljs.core.str("\n"),cljs.core.str("(not (namespace name))")].join('')));
}
} else {
}

return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_instance_QMARK_),(function (){var x__7243__auto__ = type;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = e;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_let),(function (){var x__7243__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7243__auto__ = name__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = e;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),cb)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})()))));
});})(catchenv,catch_QMARK_,default_QMARK_,finally_QMARK_,map__8630,map__8630__$1,body__$1,cblocks,dblock,fblock,finally$,e,default$,vec__8627,seq__8628,first__8629,seq__8628__$1,___$1,body,form))
,cblocks),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$kw$else),(function (){var x__7243__auto__ = default$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})()))):default$);
var locals = cljs.core.cst$kw$locals.cljs$core$IFn$_invoke$arity$1(catchenv);
var locals__$1 = (cljs.core.truth_(e)?cljs.core.assoc.call(null,locals,e,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,e,cljs.core.cst$kw$line,cljs.analyzer.get_line.call(null,e,env),cljs.core.cst$kw$column,cljs.analyzer.get_col.call(null,e,env)], null)):locals);
var catch$ = (cljs.core.truth_(cblock)?cljs.analyzer.analyze.call(null,cljs.core.assoc.call(null,catchenv,cljs.core.cst$kw$locals,locals__$1),cblock):null);
var try$ = cljs.analyzer.analyze.call(null,(cljs.core.truth_((function (){var or__6409__auto__ = e;
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return finally$;
}
})())?catchenv:env),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$do),body__$1))));
return new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$env,env,cljs.core.cst$kw$op,cljs.core.cst$kw$try,cljs.core.cst$kw$form,form,cljs.core.cst$kw$try,try$,cljs.core.cst$kw$finally,finally$,cljs.core.cst$kw$name,e,cljs.core.cst$kw$catch,catch$,cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [try$,catch$,finally$], null)], null);
}));
cljs.analyzer.valid_proto = (function cljs$analyzer$valid_proto(x){
if((x instanceof cljs.core.Symbol)){
return x;
} else {
return null;
}
});
cljs.core._add_method.call(null,cljs.analyzer.parse,cljs.core.cst$sym$def,(function (op,env,form,_,___$1){
var pfn = (function() {
var G__8654 = null;
var G__8654__2 = (function (___$2,sym){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$sym,sym], null);
});
var G__8654__3 = (function (___$2,sym,init){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$sym,sym,cljs.core.cst$kw$init,init], null);
});
var G__8654__4 = (function (___$2,sym,doc,init){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$sym,sym,cljs.core.cst$kw$doc,doc,cljs.core.cst$kw$init,init], null);
});
G__8654 = function(___$2,sym,doc,init){
switch(arguments.length){
case 2:
return G__8654__2.call(this,___$2,sym);
case 3:
return G__8654__3.call(this,___$2,sym,doc);
case 4:
return G__8654__4.call(this,___$2,sym,doc,init);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__8654.cljs$core$IFn$_invoke$arity$2 = G__8654__2;
G__8654.cljs$core$IFn$_invoke$arity$3 = G__8654__3;
G__8654.cljs$core$IFn$_invoke$arity$4 = G__8654__4;
return G__8654;
})()
;
var args = cljs.core.apply.call(null,pfn,form);
var sym = cljs.core.cst$kw$sym.cljs$core$IFn$_invoke$arity$1(args);
var sym_meta = cljs.core.meta.call(null,sym);
var tag = cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,sym));
var protocol = cljs.analyzer.valid_proto.call(null,cljs.core.cst$kw$protocol.cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,sym)));
var dynamic = cljs.core.cst$kw$dynamic.cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,sym));
var ns_name = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(env));
var locals = cljs.core.cst$kw$locals.cljs$core$IFn$_invoke$arity$1(env);
var clash_ns = cljs.core.symbol.call(null,[cljs.core.str(ns_name),cljs.core.str("."),cljs.core.str(sym)].join(''));
var sym_ns = cljs.core.namespace.call(null,sym);
var sym__$1 = (cljs.core.truth_((function (){var and__6397__auto__ = sym_ns;
if(cljs.core.truth_(and__6397__auto__)){
return !(cljs.core.symbol_identical_QMARK_.call(null,cljs.core.symbol.call(null,sym_ns),ns_name));
} else {
return and__6397__auto__;
}
})())?(function(){throw cljs.analyzer.error.call(null,env,[cljs.core.str("Can't def ns-qualified name in namespace "),cljs.core.str(sym_ns)].join(''))})():((cljs.core.some_QMARK_.call(null,sym_ns))?cljs.core.symbol.call(null,cljs.core.name.call(null,sym)):sym
));
if(cljs.core.truth_(cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,clash_ns], null)))){
cljs.analyzer.warning.call(null,cljs.core.cst$kw$ns_DASH_var_DASH_clash,env,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ns,cljs.core.symbol.call(null,[cljs.core.str(ns_name),cljs.core.str("."),cljs.core.str(sym__$1)].join('')),cljs.core.cst$kw$var,cljs.core.symbol.call(null,[cljs.core.str(ns_name)].join(''),[cljs.core.str(sym__$1)].join(''))], null));
} else {
}

if(cljs.core.truth_(cljs.core.cst$kw$const.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,env,cljs.core.cst$kw$locals),sym__$1)))){
throw cljs.analyzer.error.call(null,env,"Can't redefine a constant");
} else {
}

var temp__4657__auto___8655 = cljs.core.cst$kw$doc.cljs$core$IFn$_invoke$arity$1(args);
if(cljs.core.truth_(temp__4657__auto___8655)){
var doc_8656 = temp__4657__auto___8655;
if(typeof doc_8656 === 'string'){
} else {
throw cljs.analyzer.error.call(null,env,"Too many arguments to def");
}
} else {
}

var temp__4657__auto___8657 = cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,ns_name,cljs.core.cst$kw$defs,sym__$1], null));
if(cljs.core.truth_(temp__4657__auto___8657)){
var v_8658 = temp__4657__auto___8657;
if(cljs.core.truth_((function (){var and__6397__auto__ = cljs.core.not.call(null,cljs.analyzer._STAR_allow_redef_STAR_);
if(and__6397__auto__){
var and__6397__auto____$1 = cljs.core.not.call(null,cljs.core.cst$kw$declared.cljs$core$IFn$_invoke$arity$1(v_8658));
if(and__6397__auto____$1){
var and__6397__auto____$2 = cljs.core.not.call(null,cljs.core.cst$kw$declared.cljs$core$IFn$_invoke$arity$1(sym_meta));
if(and__6397__auto____$2){
var and__6397__auto____$3 = cljs.analyzer._STAR_file_defs_STAR_;
if(cljs.core.truth_(and__6397__auto____$3)){
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.analyzer._STAR_file_defs_STAR_),sym__$1);
} else {
return and__6397__auto____$3;
}
} else {
return and__6397__auto____$2;
}
} else {
return and__6397__auto____$1;
}
} else {
return and__6397__auto__;
}
})())){
cljs.analyzer.warning.call(null,cljs.core.cst$kw$redef_DASH_in_DASH_file,env,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$sym,sym__$1,cljs.core.cst$kw$line,cljs.core.cst$kw$line.cljs$core$IFn$_invoke$arity$1(v_8658)], null));
} else {
}
} else {
}

if(cljs.core.truth_(cljs.analyzer._STAR_file_defs_STAR_)){
cljs.core.swap_BANG_.call(null,cljs.analyzer._STAR_file_defs_STAR_,cljs.core.conj,sym__$1);
} else {
}

var env__$1 = (cljs.core.truth_((function (){var or__6409__auto__ = (cljs.core.not_EQ_.call(null,ns_name,cljs.core.cst$sym$cljs$core)) && (cljs.analyzer.core_name_QMARK_.call(null,env,sym__$1));
if(or__6409__auto__){
return or__6409__auto__;
} else {
return cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,ns_name,cljs.core.cst$kw$uses,sym__$1], null));
}
})())?(function (){var ev = cljs.analyzer.resolve_existing_var.call(null,cljs.core.dissoc.call(null,env,cljs.core.cst$kw$locals),sym__$1);
cljs.analyzer.warning.call(null,cljs.core.cst$kw$redef,env,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$sym,sym__$1,cljs.core.cst$kw$ns,cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(ev),cljs.core.cst$kw$ns_DASH_name,ns_name], null));

cljs.core.swap_BANG_.call(null,cljs.env._STAR_compiler_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,ns_name,cljs.core.cst$kw$excludes], null),cljs.core.conj,sym__$1);

return cljs.core.update_in.call(null,env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ns,cljs.core.cst$kw$excludes], null),cljs.core.conj,sym__$1);
})():env);
var var_name = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,env__$1,cljs.core.cst$kw$locals),sym__$1));
var init_expr = ((cljs.core.contains_QMARK_.call(null,args,cljs.core.cst$kw$init))?(function (){
cljs.core.swap_BANG_.call(null,cljs.env._STAR_compiler_STAR_,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,ns_name,cljs.core.cst$kw$defs,sym__$1], null),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,var_name], null),sym_meta,(cljs.core.truth_(dynamic)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$dynamic,true], null):null),cljs.analyzer.source_info.call(null,var_name,env__$1)));

var _STAR_recur_frames_STAR_8652 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = cljs.core.cons.call(null,null,cljs.analyzer._STAR_recur_frames_STAR_);

try{return cljs.analyzer.analyze.call(null,cljs.core.assoc.call(null,env__$1,cljs.core.cst$kw$context,cljs.core.cst$kw$expr),cljs.core.cst$kw$init.cljs$core$IFn$_invoke$arity$1(args),sym__$1);
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_8652;
}})()
:null);
var fn_var_QMARK_ = (function (){var and__6397__auto__ = init_expr;
if(cljs.core.truth_(and__6397__auto__)){
return cljs.core._EQ_.call(null,cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(init_expr),cljs.core.cst$kw$fn);
} else {
return and__6397__auto__;
}
})();
var tag__$1 = (cljs.core.truth_(fn_var_QMARK_)?(function (){var or__6409__auto__ = cljs.core.cst$kw$ret_DASH_tag.cljs$core$IFn$_invoke$arity$1(init_expr);
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return tag;
}
})():tag);
var export_as = (function (){var temp__4657__auto__ = cljs.core.cst$kw$export.cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,sym__$1));
if(cljs.core.truth_(temp__4657__auto__)){
var export_val = temp__4657__auto__;
if(cljs.core._EQ_.call(null,true,export_val)){
return var_name;
} else {
return export_val;
}
} else {
return null;
}
})();
var doc = (function (){var or__6409__auto__ = cljs.core.cst$kw$doc.cljs$core$IFn$_invoke$arity$1(args);
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return cljs.core.cst$kw$doc.cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,sym__$1));
}
})();
var temp__4657__auto___8659 = cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,ns_name,cljs.core.cst$kw$defs,sym__$1], null));
if(cljs.core.truth_(temp__4657__auto___8659)){
var v_8660 = temp__4657__auto___8659;
if(cljs.core.truth_((function (){var and__6397__auto__ = cljs.core.not.call(null,cljs.core.cst$kw$declared.cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,sym__$1)));
if(and__6397__auto__){
var and__6397__auto____$1 = cljs.core.cst$kw$fn_DASH_var.cljs$core$IFn$_invoke$arity$1(v_8660);
if(cljs.core.truth_(and__6397__auto____$1)){
return cljs.core.not.call(null,fn_var_QMARK_);
} else {
return and__6397__auto____$1;
}
} else {
return and__6397__auto__;
}
})())){
cljs.analyzer.warning.call(null,cljs.core.cst$kw$fn_DASH_var,env__$1,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ns_DASH_name,ns_name,cljs.core.cst$kw$sym,sym__$1], null));
} else {
}
} else {
}

cljs.core.swap_BANG_.call(null,cljs.env._STAR_compiler_STAR_,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,ns_name,cljs.core.cst$kw$defs,sym__$1], null),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,var_name], null),(function (){var G__8653 = sym_meta;
if(cljs.core.truth_(cljs.core.cst$kw$test.cljs$core$IFn$_invoke$arity$1(sym_meta))){
return cljs.core.assoc.call(null,G__8653,cljs.core.cst$kw$test,true);
} else {
return G__8653;
}
})(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$meta,cljs.core.update_in.call(null,cljs.core.dissoc.call(null,sym_meta,cljs.core.cst$kw$test),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$file], null),((function (env__$1,var_name,init_expr,fn_var_QMARK_,tag__$1,export_as,doc,pfn,args,sym,sym_meta,tag,protocol,dynamic,ns_name,locals,clash_ns,sym_ns,sym__$1){
return (function (f){
if(cljs.core._EQ_.call(null,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(env__$1)),cljs.core.cst$sym$cljs$core)){
return "cljs/core.cljs";
} else {
return f;
}
});})(env__$1,var_name,init_expr,fn_var_QMARK_,tag__$1,export_as,doc,pfn,args,sym,sym_meta,tag,protocol,dynamic,ns_name,locals,clash_ns,sym_ns,sym__$1))
)], null),(cljs.core.truth_(doc)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$doc,doc], null):null),(cljs.core.truth_(dynamic)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$dynamic,true], null):null),cljs.analyzer.source_info.call(null,var_name,env__$1),(cljs.core.truth_(protocol)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$protocol,protocol], null):null),(function (){var temp__4657__auto__ = cljs.core.cst$kw$protocol_DASH_symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,sym__$1));
if(cljs.core.truth_(temp__4657__auto__)){
var protocol_symbol = temp__4657__auto__;
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$protocol_DASH_symbol,protocol_symbol,cljs.core.cst$kw$info,cljs.core.cst$kw$protocol_DASH_info.cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,protocol_symbol)),cljs.core.cst$kw$impls,cljs.core.PersistentHashSet.EMPTY], null);
} else {
return null;
}
})(),(cljs.core.truth_(fn_var_QMARK_)?(function (){var params = cljs.core.map.call(null,((function (env__$1,var_name,init_expr,fn_var_QMARK_,tag__$1,export_as,doc,pfn,args,sym,sym_meta,tag,protocol,dynamic,ns_name,locals,clash_ns,sym_ns,sym__$1){
return (function (p1__8651_SHARP_){
return cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core.cst$kw$name,cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(p1__8651_SHARP_)));
});})(env__$1,var_name,init_expr,fn_var_QMARK_,tag__$1,export_as,doc,pfn,args,sym,sym_meta,tag,protocol,dynamic,ns_name,locals,clash_ns,sym_ns,sym__$1))
,cljs.core.cst$kw$methods.cljs$core$IFn$_invoke$arity$1(init_expr));
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$fn_DASH_var,true,cljs.core.cst$kw$protocol_DASH_impl,cljs.core.cst$kw$protocol_DASH_impl.cljs$core$IFn$_invoke$arity$1(init_expr),cljs.core.cst$kw$protocol_DASH_inline,cljs.core.cst$kw$protocol_DASH_inline.cljs$core$IFn$_invoke$arity$1(init_expr)], null),(function (){var temp__4655__auto__ = cljs.core.cst$kw$top_DASH_fn.cljs$core$IFn$_invoke$arity$1(sym_meta);
if(cljs.core.truth_(temp__4655__auto__)){
var top_fn_meta = temp__4655__auto__;
return top_fn_meta;
} else {
return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$variadic,cljs.core.cst$kw$variadic.cljs$core$IFn$_invoke$arity$1(init_expr),cljs.core.cst$kw$max_DASH_fixed_DASH_arity,cljs.core.cst$kw$max_DASH_fixed_DASH_arity.cljs$core$IFn$_invoke$arity$1(init_expr),cljs.core.cst$kw$method_DASH_params,params,cljs.core.cst$kw$arglists,cljs.core.cst$kw$arglists.cljs$core$IFn$_invoke$arity$1(sym_meta),cljs.core.cst$kw$arglists_DASH_meta,cljs.core.doall.call(null,cljs.core.map.call(null,cljs.core.meta,cljs.core.cst$kw$arglists.cljs$core$IFn$_invoke$arity$1(sym_meta)))], null);
}
})());
})():null),(cljs.core.truth_((function (){var and__6397__auto__ = fn_var_QMARK_;
if(cljs.core.truth_(and__6397__auto__)){
return tag__$1;
} else {
return and__6397__auto__;
}
})())?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$ret_DASH_tag,tag__$1], null):null)));

return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$env,env__$1,cljs.core.cst$kw$op,cljs.core.cst$kw$def,cljs.core.cst$kw$form,form,cljs.core.cst$kw$name,var_name,cljs.core.cst$kw$var,cljs.core.assoc.call(null,cljs.analyzer.analyze.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,env__$1,cljs.core.cst$kw$locals),cljs.core.cst$kw$context,cljs.core.cst$kw$expr),cljs.core.cst$kw$def_DASH_var,true),sym__$1),cljs.core.cst$kw$op,cljs.core.cst$kw$var),cljs.core.cst$kw$doc,doc,cljs.core.cst$kw$jsdoc,cljs.core.cst$kw$jsdoc.cljs$core$IFn$_invoke$arity$1(sym_meta),cljs.core.cst$kw$init,init_expr], null),(cljs.core.truth_(cljs.core.cst$kw$def_DASH_emits_DASH_var.cljs$core$IFn$_invoke$arity$1(env__$1))?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$var_DASH_ast,cljs.analyzer.var_ast.call(null,env__$1,sym__$1)], null):null),(function (){var temp__4657__auto__ = cljs.core.cst$kw$test.cljs$core$IFn$_invoke$arity$1(sym_meta);
if(cljs.core.truth_(temp__4657__auto__)){
var test = temp__4657__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$test,cljs.analyzer.analyze.call(null,cljs.core.assoc.call(null,env__$1,cljs.core.cst$kw$context,cljs.core.cst$kw$expr),test)], null);
} else {
return null;
}
})(),(cljs.core.truth_(tag__$1)?(cljs.core.truth_(fn_var_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$ret_DASH_tag,tag__$1], null):new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,tag__$1], null)):null),(cljs.core.truth_(dynamic)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$dynamic,true], null):null),(cljs.core.truth_(export_as)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$export,export_as], null):null),(cljs.core.truth_(init_expr)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [init_expr], null)], null):null));
}));
cljs.analyzer.analyze_fn_method_param = (function cljs$analyzer$analyze_fn_method_param(env){
return (function (p__8665,name){
var vec__8666 = p__8665;
var locals = cljs.core.nth.call(null,vec__8666,(0),null);
var params = cljs.core.nth.call(null,vec__8666,(1),null);
if(cljs.core.truth_(cljs.core.namespace.call(null,name))){
throw cljs.analyzer.error.call(null,env,[cljs.core.str("Can't use qualified name as parameter: "),cljs.core.str(name)].join(''));
} else {
}

var line = cljs.analyzer.get_line.call(null,name,env);
var column = cljs.analyzer.get_col.call(null,name,env);
var nmeta = cljs.core.meta.call(null,name);
var tag = cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(nmeta);
var shadow = (((locals == null))?null:locals.call(null,name));
var env__$1 = cljs.core.merge.call(null,cljs.core.select_keys.call(null,env,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$context], null)),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$line,line,cljs.core.cst$kw$column,column], null));
var param = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$name,cljs.core.cst$kw$binding_DASH_form_QMARK_,cljs.core.cst$kw$op,cljs.core.cst$kw$env,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$info,cljs.core.cst$kw$tag,cljs.core.cst$kw$shadow],[name,true,cljs.core.cst$kw$var,env__$1,column,line,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,name,cljs.core.cst$kw$shadow,shadow], null),tag,shadow]);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,locals,name,param),cljs.core.conj.call(null,params,param)], null);
});
});
cljs.analyzer.analyze_fn_method_body = (function cljs$analyzer$analyze_fn_method_body(env,form,recur_frames){
var _STAR_recur_frames_STAR_8670 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = recur_frames;

try{return cljs.analyzer.analyze.call(null,env,form);
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_8670;
}});
cljs.analyzer.analyze_fn_method = (function cljs$analyzer$analyze_fn_method(env,locals,form,type){
var param_names = cljs.core.first.call(null,form);
var variadic = cljs.core.boolean$.call(null,cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$_AMPERSAND_,null], null), null),param_names));
var param_names__$1 = cljs.core.vec.call(null,cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$_AMPERSAND_,null], null), null),param_names));
var body = cljs.core.next.call(null,form);
var step = cljs.analyzer.analyze_fn_method_param.call(null,env);
var step_init = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [locals,cljs.core.PersistentVector.EMPTY], null);
var vec__8674 = cljs.core.reduce.call(null,step,step_init,param_names__$1);
var locals__$1 = cljs.core.nth.call(null,vec__8674,(0),null);
var params = cljs.core.nth.call(null,vec__8674,(1),null);
var params_SINGLEQUOTE_ = ((variadic === true)?cljs.core.butlast.call(null,params):params);
var fixed_arity = cljs.core.count.call(null,params_SINGLEQUOTE_);
var recur_frame = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$params,params,cljs.core.cst$kw$flag,cljs.core.atom.call(null,null)], null);
var recur_frames = cljs.core.cons.call(null,recur_frame,cljs.analyzer._STAR_recur_frames_STAR_);
var body_env = cljs.core.assoc.call(null,env,cljs.core.cst$kw$context,cljs.core.cst$kw$return,cljs.core.cst$kw$locals,locals__$1);
var body_form = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$do),body)));
var expr = cljs.analyzer.analyze_fn_method_body.call(null,body_env,body_form,recur_frames);
var recurs = cljs.core.deref.call(null,cljs.core.cst$kw$flag.cljs$core$IFn$_invoke$arity$1(recur_frame));
return new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$env,env,cljs.core.cst$kw$variadic,variadic,cljs.core.cst$kw$params,params,cljs.core.cst$kw$max_DASH_fixed_DASH_arity,fixed_arity,cljs.core.cst$kw$type,type,cljs.core.cst$kw$form,form,cljs.core.cst$kw$expr,expr,cljs.core.cst$kw$recurs,recurs], null);
});
cljs.analyzer.fn_name_var = (function cljs$analyzer$fn_name_var(env,locals,name){
if((name == null)){
return null;
} else {
var ns = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(env));
var shadow = cljs.core.get.call(null,locals,name);
var shadow__$1 = (((shadow == null))?cljs.core.get_in.call(null,env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$js_DASH_globals,name], null)):null);
var fn_scope = cljs.core.cst$kw$fn_DASH_scope.cljs$core$IFn$_invoke$arity$1(env);
var name_var = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,name,cljs.core.cst$kw$info,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$fn_DASH_self_DASH_name,true,cljs.core.cst$kw$fn_DASH_scope,fn_scope,cljs.core.cst$kw$ns,ns,cljs.core.cst$kw$shadow,shadow__$1], null)], null);
var tag = cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,name));
var ret_tag = (((tag == null))?null:new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$ret_DASH_tag,tag], null));
return cljs.core.merge.call(null,name_var,ret_tag);
}
});
cljs.analyzer.analyze_fn_methods_pass2_STAR_ = (function cljs$analyzer$analyze_fn_methods_pass2_STAR_(menv,locals,type,meths){
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__8677_SHARP_){
return cljs.analyzer.analyze_fn_method.call(null,menv,locals,p1__8677_SHARP_,type);
}),meths));
});
cljs.analyzer.analyze_fn_methods_pass2 = (function cljs$analyzer$analyze_fn_methods_pass2(menv,locals,type,meths){
var _STAR_cljs_warnings_STAR_8679 = cljs.analyzer._STAR_cljs_warnings_STAR_;
cljs.analyzer._STAR_cljs_warnings_STAR_ = cljs.core.zipmap.call(null,cljs.core.keys.call(null,cljs.analyzer._STAR_cljs_warnings_STAR_),cljs.core.repeat.call(null,false));

try{return cljs.analyzer.analyze_fn_methods_pass2_STAR_.call(null,menv,locals,type,meths);
}finally {cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR_8679;
}});
cljs.core._add_method.call(null,cljs.analyzer.parse,cljs.core.cst$sym$fn_STAR_,(function (op,env,p__8681,name,_){
var vec__8682 = p__8681;
var seq__8683 = cljs.core.seq.call(null,vec__8682);
var first__8684 = cljs.core.first.call(null,seq__8683);
var seq__8683__$1 = cljs.core.next.call(null,seq__8683);
var ___$1 = first__8684;
var args = seq__8683__$1;
var form = vec__8682;
var vec__8685 = (((cljs.core.first.call(null,args) instanceof cljs.core.Symbol))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args),cljs.core.next.call(null,args)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,cljs.core.seq.call(null,args)], null));
var name__$1 = cljs.core.nth.call(null,vec__8685,(0),null);
var meths = cljs.core.nth.call(null,vec__8685,(1),null);
var meths__$1 = ((cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,meths)))?(function (){var x__7243__auto__ = meths;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})():meths);
var locals = cljs.core.cst$kw$locals.cljs$core$IFn$_invoke$arity$1(env);
var name_var = cljs.analyzer.fn_name_var.call(null,env,locals,name__$1);
var env__$1 = ((!((name__$1 == null)))?cljs.core.update_in.call(null,env,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fn_DASH_scope], null),cljs.core.conj,name_var):env);
var locals__$1 = (((!((locals == null))) && (!((name__$1 == null))))?cljs.core.assoc.call(null,locals,name__$1,name_var):locals);
var form_meta = cljs.core.meta.call(null,form);
var type = cljs.core.cst$kw$cljs$analyzer_SLASH_type.cljs$core$IFn$_invoke$arity$1(form_meta);
var proto_impl = cljs.core.cst$kw$cljs$analyzer_SLASH_protocol_DASH_impl.cljs$core$IFn$_invoke$arity$1(form_meta);
var proto_inline = cljs.core.cst$kw$cljs$analyzer_SLASH_protocol_DASH_inline.cljs$core$IFn$_invoke$arity$1(form_meta);
var menv = (((cljs.core.count.call(null,meths__$1) > (1)))?cljs.core.assoc.call(null,env__$1,cljs.core.cst$kw$context,cljs.core.cst$kw$expr):env__$1);
var menv__$1 = cljs.core.merge.call(null,menv,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$protocol_DASH_impl,proto_impl,cljs.core.cst$kw$protocol_DASH_inline,proto_inline], null));
var methods$ = cljs.core.map.call(null,((function (vec__8685,name__$1,meths,meths__$1,locals,name_var,env__$1,locals__$1,form_meta,type,proto_impl,proto_inline,menv,menv__$1,vec__8682,seq__8683,first__8684,seq__8683__$1,___$1,args,form){
return (function (p1__8680_SHARP_){
return cljs.analyzer.analyze_fn_method.call(null,menv__$1,locals__$1,p1__8680_SHARP_,type);
});})(vec__8685,name__$1,meths,meths__$1,locals,name_var,env__$1,locals__$1,form_meta,type,proto_impl,proto_inline,menv,menv__$1,vec__8682,seq__8683,first__8684,seq__8683__$1,___$1,args,form))
,meths__$1);
var mfa = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,cljs.core.cst$kw$max_DASH_fixed_DASH_arity,methods$));
var variadic = cljs.core.boolean$.call(null,cljs.core.some.call(null,cljs.core.cst$kw$variadic,methods$));
var locals__$2 = ((!((name__$1 == null)))?cljs.core.update_in.call(null,locals__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name__$1], null),cljs.core.assoc,cljs.core.cst$kw$fn_DASH_var,true,cljs.core.cst$kw$variadic,variadic,cljs.core.cst$kw$max_DASH_fixed_DASH_arity,mfa,cljs.core.cst$kw$method_DASH_params,cljs.core.map.call(null,cljs.core.cst$kw$params,methods$)):locals__$1);
var methods$__$1 = ((!((name__$1 == null)))?cljs.analyzer.analyze_fn_methods_pass2.call(null,menv__$1,locals__$2,type,meths__$1):methods$);
var form__$1 = cljs.core.vary_meta.call(null,form,cljs.core.dissoc,cljs.core.cst$kw$cljs$analyzer_SLASH_protocol_DASH_impl,cljs.core.cst$kw$cljs$analyzer_SLASH_protocol_DASH_inline,cljs.core.cst$kw$cljs$analyzer_SLASH_type);
var js_doc = ((variadic === true)?"@param {...*} var_args":null);
var children = cljs.core.mapv.call(null,cljs.core.cst$kw$expr,methods$__$1);
var ast = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$children,cljs.core.cst$kw$protocol_DASH_inline,cljs.core.cst$kw$name,cljs.core.cst$kw$variadic,cljs.core.cst$kw$loop_DASH_lets,cljs.core.cst$kw$protocol_DASH_impl,cljs.core.cst$kw$op,cljs.core.cst$kw$env,cljs.core.cst$kw$methods,cljs.core.cst$kw$recur_DASH_frames,cljs.core.cst$kw$max_DASH_fixed_DASH_arity,cljs.core.cst$kw$form,cljs.core.cst$kw$tag,cljs.core.cst$kw$jsdoc],[children,proto_inline,name_var,variadic,cljs.analyzer._STAR_loop_lets_STAR_,proto_impl,cljs.core.cst$kw$fn,env__$1,methods$__$1,cljs.analyzer._STAR_recur_frames_STAR_,mfa,form__$1,cljs.core.cst$sym$function,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [js_doc], null)]);
var variadic_methods_8688 = cljs.core.filter.call(null,cljs.core.cst$kw$variadic,methods$__$1);
var variadic_params_8689 = cljs.core.count.call(null,cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,variadic_methods_8688)));
var param_counts_8690 = cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.count,cljs.core.cst$kw$params),methods$__$1);
if(((1) < cljs.core.count.call(null,variadic_methods_8688))){
cljs.analyzer.warning.call(null,cljs.core.cst$kw$multiple_DASH_variadic_DASH_overloads,env__$1,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,name_var], null));
} else {
}

if(!(((variadic_params_8689 === (0))) || ((variadic_params_8689 === ((1) + mfa))))){
cljs.analyzer.warning.call(null,cljs.core.cst$kw$variadic_DASH_max_DASH_arity,env__$1,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,name_var], null));
} else {
}

if(cljs.core.not_EQ_.call(null,cljs.core.distinct.call(null,param_counts_8690),param_counts_8690)){
cljs.analyzer.warning.call(null,cljs.core.cst$kw$overload_DASH_arity,env__$1,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,name_var], null));
} else {
}

return cljs.analyzer.analyze_wrap_meta.call(null,ast);
}));
cljs.core._add_method.call(null,cljs.analyzer.parse,cljs.core.cst$sym$letfn_STAR_,(function (op,env,p__8691,name,_){
var vec__8692 = p__8691;
var seq__8693 = cljs.core.seq.call(null,vec__8692);
var first__8694 = cljs.core.first.call(null,seq__8693);
var seq__8693__$1 = cljs.core.next.call(null,seq__8693);
var ___$1 = first__8694;
var first__8694__$1 = cljs.core.first.call(null,seq__8693__$1);
var seq__8693__$2 = cljs.core.next.call(null,seq__8693__$1);
var bindings = first__8694__$1;
var exprs = seq__8693__$2;
var form = vec__8692;
if((cljs.core.vector_QMARK_.call(null,bindings)) && (cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,bindings)))){
} else {
throw cljs.analyzer.error.call(null,env,"bindings must be vector of even number of elements");
}

var n__GT_fexpr = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.juxt.call(null,cljs.core.first,cljs.core.second),cljs.core.partition.call(null,(2),bindings)));
var names = cljs.core.keys.call(null,n__GT_fexpr);
var context = cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env);
var vec__8695 = cljs.core.reduce.call(null,((function (n__GT_fexpr,names,context,vec__8692,seq__8693,first__8694,seq__8693__$1,___$1,first__8694__$1,seq__8693__$2,bindings,exprs,form){
return (function (p__8701,n){
var vec__8702 = p__8701;
var map__8705 = cljs.core.nth.call(null,vec__8702,(0),null);
var map__8705__$1 = ((((!((map__8705 == null)))?((((map__8705.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8705.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8705):map__8705);
var env__$1 = map__8705__$1;
var locals = cljs.core.get.call(null,map__8705__$1,cljs.core.cst$kw$locals);
var bes = cljs.core.nth.call(null,vec__8702,(1),null);
var ret_tag = cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,n));
var fexpr = (function (){var _STAR_cljs_warnings_STAR_8707 = cljs.analyzer._STAR_cljs_warnings_STAR_;
cljs.analyzer._STAR_cljs_warnings_STAR_ = cljs.core.zipmap.call(null,cljs.core.keys.call(null,cljs.analyzer._STAR_cljs_warnings_STAR_),cljs.core.repeat.call(null,false));

try{return cljs.analyzer.analyze.call(null,env__$1,n__GT_fexpr.call(null,n));
}finally {cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR_8707;
}})();
var be = (function (){var G__8708 = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$name,cljs.core.cst$kw$variadic,cljs.core.cst$kw$method_DASH_params,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$max_DASH_fixed_DASH_arity,cljs.core.cst$kw$fn_DASH_var,cljs.core.cst$kw$shadow,cljs.core.cst$kw$local],[n,cljs.core.cst$kw$variadic.cljs$core$IFn$_invoke$arity$1(fexpr),cljs.core.map.call(null,cljs.core.cst$kw$params,cljs.core.cst$kw$methods.cljs$core$IFn$_invoke$arity$1(fexpr)),cljs.analyzer.get_col.call(null,n,env__$1),cljs.analyzer.get_line.call(null,n,env__$1),cljs.core.cst$kw$max_DASH_fixed_DASH_arity.cljs$core$IFn$_invoke$arity$1(fexpr),true,locals.call(null,n),true]);
if(cljs.core.truth_(ret_tag)){
return cljs.core.assoc.call(null,G__8708,cljs.core.cst$kw$ret_DASH_tag,ret_tag);
} else {
return G__8708;
}
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc_in.call(null,env__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$locals,n], null),be),cljs.core.conj.call(null,bes,be)], null);
});})(n__GT_fexpr,names,context,vec__8692,seq__8693,first__8694,seq__8693__$1,___$1,first__8694__$1,seq__8693__$2,bindings,exprs,form))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [env,cljs.core.PersistentVector.EMPTY], null),names);
var meth_env = cljs.core.nth.call(null,vec__8695,(0),null);
var bes = cljs.core.nth.call(null,vec__8695,(1),null);
var meth_env__$1 = cljs.core.assoc.call(null,meth_env,cljs.core.cst$kw$context,cljs.core.cst$kw$expr);
var vec__8698 = cljs.core.reduce.call(null,((function (n__GT_fexpr,names,context,vec__8695,meth_env,bes,meth_env__$1,vec__8692,seq__8693,first__8694,seq__8693__$1,___$1,first__8694__$1,seq__8693__$2,bindings,exprs,form){
return (function (p__8709,p__8710){
var vec__8711 = p__8709;
var meth_env__$2 = cljs.core.nth.call(null,vec__8711,(0),null);
var bes__$1 = cljs.core.nth.call(null,vec__8711,(1),null);
var map__8714 = p__8710;
var map__8714__$1 = ((((!((map__8714 == null)))?((((map__8714.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8714.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8714):map__8714);
var be = map__8714__$1;
var name__$1 = cljs.core.get.call(null,map__8714__$1,cljs.core.cst$kw$name);
var shadow = cljs.core.get.call(null,map__8714__$1,cljs.core.cst$kw$shadow);
var env__$1 = cljs.core.assoc_in.call(null,meth_env__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$locals,name__$1], null),shadow);
var fexpr = cljs.analyzer.analyze.call(null,env__$1,n__GT_fexpr.call(null,name__$1));
var be_SINGLEQUOTE_ = cljs.core.assoc.call(null,be,cljs.core.cst$kw$init,fexpr,cljs.core.cst$kw$variadic,cljs.core.cst$kw$variadic.cljs$core$IFn$_invoke$arity$1(fexpr),cljs.core.cst$kw$max_DASH_fixed_DASH_arity,cljs.core.cst$kw$max_DASH_fixed_DASH_arity.cljs$core$IFn$_invoke$arity$1(fexpr),cljs.core.cst$kw$method_DASH_params,cljs.core.map.call(null,cljs.core.cst$kw$params,cljs.core.cst$kw$methods.cljs$core$IFn$_invoke$arity$1(fexpr)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc_in.call(null,env__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$locals,name__$1], null),be_SINGLEQUOTE_),cljs.core.conj.call(null,bes__$1,be_SINGLEQUOTE_)], null);
});})(n__GT_fexpr,names,context,vec__8695,meth_env,bes,meth_env__$1,vec__8692,seq__8693,first__8694,seq__8693__$1,___$1,first__8694__$1,seq__8693__$2,bindings,exprs,form))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [meth_env__$1,cljs.core.PersistentVector.EMPTY], null),bes);
var meth_env__$2 = cljs.core.nth.call(null,vec__8698,(0),null);
var bes__$1 = cljs.core.nth.call(null,vec__8698,(1),null);
var expr = cljs.analyzer.analyze.call(null,cljs.core.assoc.call(null,meth_env__$2,cljs.core.cst$kw$context,((cljs.core._EQ_.call(null,cljs.core.cst$kw$expr,context))?cljs.core.cst$kw$return:context)),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$do),exprs))));
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$env,env,cljs.core.cst$kw$op,cljs.core.cst$kw$letfn,cljs.core.cst$kw$bindings,bes__$1,cljs.core.cst$kw$expr,expr,cljs.core.cst$kw$form,form,cljs.core.cst$kw$children,cljs.core.conj.call(null,cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core.cst$kw$init,bes__$1)),expr)], null);
}));
cljs.analyzer.analyze_do_statements_STAR_ = (function cljs$analyzer$analyze_do_statements_STAR_(env,exprs){
return cljs.core.seq.call(null,cljs.core.map.call(null,(function (p1__8716_SHARP_){
return cljs.analyzer.analyze.call(null,cljs.core.assoc.call(null,env,cljs.core.cst$kw$context,cljs.core.cst$kw$statement),p1__8716_SHARP_);
}),cljs.core.butlast.call(null,exprs)));
});
cljs.analyzer.analyze_do_statements = (function cljs$analyzer$analyze_do_statements(env,exprs){
var _STAR_recur_frames_STAR_8718 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = cljs.core.cons.call(null,null,cljs.analyzer._STAR_recur_frames_STAR_);

try{return cljs.analyzer.analyze_do_statements_STAR_.call(null,env,exprs);
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_8718;
}});
cljs.core._add_method.call(null,cljs.analyzer.parse,cljs.core.cst$sym$do,(function (op,env,p__8719,_,___$1){
var vec__8720 = p__8719;
var seq__8721 = cljs.core.seq.call(null,vec__8720);
var first__8722 = cljs.core.first.call(null,seq__8721);
var seq__8721__$1 = cljs.core.next.call(null,seq__8721);
var ___$2 = first__8722;
var exprs = seq__8721__$1;
var form = vec__8720;
var statements = cljs.analyzer.analyze_do_statements.call(null,env,exprs);
if((cljs.core.count.call(null,exprs) <= (1))){
var ret = cljs.analyzer.analyze.call(null,env,cljs.core.first.call(null,exprs));
var children = cljs.core.conj.call(null,cljs.core.vec.call(null,statements),ret);
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$op,cljs.core.cst$kw$do,cljs.core.cst$kw$env,env,cljs.core.cst$kw$form,form,cljs.core.cst$kw$statements,statements,cljs.core.cst$kw$ret,ret,cljs.core.cst$kw$children,children], null);
} else {
var ret_env = ((cljs.core._EQ_.call(null,cljs.core.cst$kw$statement,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env)))?cljs.core.assoc.call(null,env,cljs.core.cst$kw$context,cljs.core.cst$kw$statement):cljs.core.assoc.call(null,env,cljs.core.cst$kw$context,cljs.core.cst$kw$return));
var ret = cljs.analyzer.analyze.call(null,ret_env,cljs.core.last.call(null,exprs));
var children = cljs.core.conj.call(null,cljs.core.vec.call(null,statements),ret);
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$op,cljs.core.cst$kw$do,cljs.core.cst$kw$env,env,cljs.core.cst$kw$form,form,cljs.core.cst$kw$statements,statements,cljs.core.cst$kw$ret,ret,cljs.core.cst$kw$children,children], null);
}
}));
cljs.analyzer.analyze_let_binding_init = (function cljs$analyzer$analyze_let_binding_init(env,init,loop_lets){
var _STAR_loop_lets_STAR_8724 = cljs.analyzer._STAR_loop_lets_STAR_;
cljs.analyzer._STAR_loop_lets_STAR_ = loop_lets;

try{return cljs.analyzer.analyze.call(null,env,init);
}finally {cljs.analyzer._STAR_loop_lets_STAR_ = _STAR_loop_lets_STAR_8724;
}});
cljs.analyzer.get_let_tag = (function cljs$analyzer$get_let_tag(name,init_expr){
var tag = cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,name));
if(!((tag == null))){
return tag;
} else {
var tag__$1 = cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(init_expr);
if(!((tag__$1 == null))){
return tag__$1;
} else {
return cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$info.cljs$core$IFn$_invoke$arity$1(init_expr));
}
}
});
cljs.analyzer.analyze_let_bindings_STAR_ = (function cljs$analyzer$analyze_let_bindings_STAR_(encl_env,bindings){
var bes = cljs.core.PersistentVector.EMPTY;
var env = cljs.core.assoc.call(null,encl_env,cljs.core.cst$kw$context,cljs.core.cst$kw$expr);
var bindings__$1 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),bindings));
while(true){
var binding = cljs.core.first.call(null,bindings__$1);
if(!((binding == null))){
var vec__8728 = binding;
var name = cljs.core.nth.call(null,vec__8728,(0),null);
var init = cljs.core.nth.call(null,vec__8728,(1),null);
if((!((cljs.core.namespace.call(null,name) == null))) || (goog.string.contains([cljs.core.str(name)].join(''),"."))){
throw cljs.analyzer.error.call(null,encl_env,[cljs.core.str("Invalid local name: "),cljs.core.str(name)].join(''));
} else {
}

var init_expr = cljs.analyzer.analyze_let_binding_init.call(null,env,init,cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$params,bes], null),cljs.analyzer._STAR_loop_lets_STAR_));
var line = cljs.analyzer.get_line.call(null,name,env);
var col = cljs.analyzer.get_col.call(null,name,env);
var be = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$init,cljs.core.cst$kw$name,cljs.core.cst$kw$binding_DASH_form_QMARK_,cljs.core.cst$kw$op,cljs.core.cst$kw$env,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$info,cljs.core.cst$kw$tag,cljs.core.cst$kw$shadow,cljs.core.cst$kw$local],[init_expr,name,true,cljs.core.cst$kw$var,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$line,line,cljs.core.cst$kw$column,col], null),col,line,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,name,cljs.core.cst$kw$shadow,name.call(null,cljs.core.cst$kw$locals.cljs$core$IFn$_invoke$arity$1(env))], null),cljs.analyzer.get_let_tag.call(null,name,init_expr),name.call(null,cljs.core.cst$kw$locals.cljs$core$IFn$_invoke$arity$1(env)),true]);
var be__$1 = ((cljs.core._EQ_.call(null,cljs.core.cst$kw$fn,cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(init_expr)))?cljs.core.merge.call(null,be,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$fn_DASH_var,true,cljs.core.cst$kw$variadic,cljs.core.cst$kw$variadic.cljs$core$IFn$_invoke$arity$1(init_expr),cljs.core.cst$kw$max_DASH_fixed_DASH_arity,cljs.core.cst$kw$max_DASH_fixed_DASH_arity.cljs$core$IFn$_invoke$arity$1(init_expr),cljs.core.cst$kw$method_DASH_params,cljs.core.map.call(null,cljs.core.cst$kw$params,cljs.core.cst$kw$methods.cljs$core$IFn$_invoke$arity$1(init_expr))], null)):be);
var G__8731 = cljs.core.conj.call(null,bes,be__$1);
var G__8732 = cljs.core.assoc_in.call(null,env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$locals,name], null),be__$1);
var G__8733 = cljs.core.next.call(null,bindings__$1);
bes = G__8731;
env = G__8732;
bindings__$1 = G__8733;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bes,env], null);
}
break;
}
});
cljs.analyzer.analyze_let_bindings = (function cljs$analyzer$analyze_let_bindings(encl_env,bindings){
var _STAR_recur_frames_STAR_8735 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = cljs.core.cons.call(null,null,cljs.analyzer._STAR_recur_frames_STAR_);

try{return cljs.analyzer.analyze_let_bindings_STAR_.call(null,encl_env,bindings);
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_8735;
}});
cljs.analyzer.analyze_let_body_STAR_ = (function cljs$analyzer$analyze_let_body_STAR_(env,context,exprs){
return cljs.analyzer.analyze.call(null,cljs.core.assoc.call(null,env,cljs.core.cst$kw$context,((cljs.core._EQ_.call(null,cljs.core.cst$kw$expr,context))?cljs.core.cst$kw$return:context)),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$do),exprs))));
});
cljs.analyzer.analyze_let_body = (function cljs$analyzer$analyze_let_body(env,context,exprs,recur_frames,loop_lets){
var _STAR_recur_frames_STAR_8738 = cljs.analyzer._STAR_recur_frames_STAR_;
var _STAR_loop_lets_STAR_8739 = cljs.analyzer._STAR_loop_lets_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = recur_frames;

cljs.analyzer._STAR_loop_lets_STAR_ = loop_lets;

try{return cljs.analyzer.analyze_let_body_STAR_.call(null,env,context,exprs);
}finally {cljs.analyzer._STAR_loop_lets_STAR_ = _STAR_loop_lets_STAR_8739;

cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_8738;
}});
cljs.analyzer.analyze_let = (function cljs$analyzer$analyze_let(encl_env,p__8740,is_loop){
var vec__8747 = p__8740;
var seq__8748 = cljs.core.seq.call(null,vec__8747);
var first__8749 = cljs.core.first.call(null,seq__8748);
var seq__8748__$1 = cljs.core.next.call(null,seq__8748);
var _ = first__8749;
var first__8749__$1 = cljs.core.first.call(null,seq__8748__$1);
var seq__8748__$2 = cljs.core.next.call(null,seq__8748__$1);
var bindings = first__8749__$1;
var exprs = seq__8748__$2;
var form = vec__8747;
if((cljs.core.vector_QMARK_.call(null,bindings)) && (cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,bindings)))){
} else {
throw cljs.analyzer.error.call(null,encl_env,"bindings must be vector of even number of elements");
}

var context = cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(encl_env);
var vec__8750 = cljs.analyzer.analyze_let_bindings.call(null,encl_env,bindings);
var bes = cljs.core.nth.call(null,vec__8750,(0),null);
var env = cljs.core.nth.call(null,vec__8750,(1),null);
var recur_frame = ((is_loop === true)?new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$params,bes,cljs.core.cst$kw$flag,cljs.core.atom.call(null,null)], null):null);
var recur_frames = (cljs.core.truth_(recur_frame)?cljs.core.cons.call(null,recur_frame,cljs.analyzer._STAR_recur_frames_STAR_):cljs.analyzer._STAR_recur_frames_STAR_);
var loop_lets = ((is_loop === true)?cljs.analyzer._STAR_loop_lets_STAR_:((!((cljs.analyzer._STAR_loop_lets_STAR_ == null)))?cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$params,bes], null),cljs.analyzer._STAR_loop_lets_STAR_):null));
var expr = cljs.analyzer.analyze_let_body.call(null,env,context,exprs,recur_frames,loop_lets);
var op = ((is_loop === true)?cljs.core.cst$kw$loop:cljs.core.cst$kw$let);
var children = cljs.core.conj.call(null,cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core.cst$kw$init,bes)),expr);
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$op,op,cljs.core.cst$kw$env,encl_env,cljs.core.cst$kw$bindings,bes,cljs.core.cst$kw$expr,expr,cljs.core.cst$kw$form,form,cljs.core.cst$kw$children,children], null);
});
cljs.core._add_method.call(null,cljs.analyzer.parse,cljs.core.cst$sym$let_STAR_,(function (op,encl_env,form,_,___$1){
return cljs.analyzer.analyze_let.call(null,encl_env,form,false);
}));
cljs.core._add_method.call(null,cljs.analyzer.parse,cljs.core.cst$sym$loop_STAR_,(function (op,encl_env,form,_,___$1){
return cljs.analyzer.analyze_let.call(null,encl_env,form,true);
}));
cljs.core._add_method.call(null,cljs.analyzer.parse,cljs.core.cst$sym$recur,(function (op,env,p__8754,_,___$1){
var vec__8755 = p__8754;
var seq__8756 = cljs.core.seq.call(null,vec__8755);
var first__8757 = cljs.core.first.call(null,seq__8756);
var seq__8756__$1 = cljs.core.next.call(null,seq__8756);
var ___$2 = first__8757;
var exprs = seq__8756__$1;
var form = vec__8755;
var context = cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env);
var frame = cljs.core.first.call(null,cljs.analyzer._STAR_recur_frames_STAR_);
var exprs__$1 = (function (){var _STAR_recur_frames_STAR_8758 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = cljs.core.cons.call(null,null,cljs.analyzer._STAR_recur_frames_STAR_);

try{return cljs.core.vec.call(null,cljs.core.map.call(null,((function (_STAR_recur_frames_STAR_8758,context,frame,vec__8755,seq__8756,first__8757,seq__8756__$1,___$2,exprs,form){
return (function (p1__8753_SHARP_){
return cljs.analyzer.analyze.call(null,cljs.core.assoc.call(null,env,cljs.core.cst$kw$context,cljs.core.cst$kw$expr),p1__8753_SHARP_);
});})(_STAR_recur_frames_STAR_8758,context,frame,vec__8755,seq__8756,first__8757,seq__8756__$1,___$2,exprs,form))
,exprs));
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_8758;
}})();
if(cljs.core.truth_(frame)){
} else {
throw cljs.analyzer.error.call(null,env,"Can't recur here");
}

if(cljs.core._EQ_.call(null,cljs.core.count.call(null,exprs__$1),cljs.core.count.call(null,cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(frame)))){
} else {
throw cljs.analyzer.error.call(null,env,"recur argument count mismatch");
}

cljs.core.reset_BANG_.call(null,cljs.core.cst$kw$flag.cljs$core$IFn$_invoke$arity$1(frame),true);

return cljs.core.assoc.call(null,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$env,env,cljs.core.cst$kw$op,cljs.core.cst$kw$recur,cljs.core.cst$kw$form,form], null),cljs.core.cst$kw$frame,frame,cljs.core.cst$kw$exprs,exprs__$1,cljs.core.cst$kw$children,exprs__$1);
}));
cljs.core._add_method.call(null,cljs.analyzer.parse,cljs.core.cst$sym$quote,(function (_,env,p__8759,___$1,___$2){
var vec__8760 = p__8759;
var ___$3 = cljs.core.nth.call(null,vec__8760,(0),null);
var x = cljs.core.nth.call(null,vec__8760,(1),null);
return cljs.analyzer.analyze.call(null,cljs.core.assoc.call(null,env,cljs.core.cst$kw$quoted_QMARK_,true),x);
}));
cljs.core._add_method.call(null,cljs.analyzer.parse,cljs.core.cst$sym$new,(function (_,env,p__8764,___$1,___$2){
var vec__8765 = p__8764;
var seq__8766 = cljs.core.seq.call(null,vec__8765);
var first__8767 = cljs.core.first.call(null,seq__8766);
var seq__8766__$1 = cljs.core.next.call(null,seq__8766);
var ___$3 = first__8767;
var first__8767__$1 = cljs.core.first.call(null,seq__8766__$1);
var seq__8766__$2 = cljs.core.next.call(null,seq__8766__$1);
var ctor = first__8767__$1;
var args = seq__8766__$2;
var form = vec__8765;
if((ctor instanceof cljs.core.Symbol)){
} else {
throw cljs.analyzer.error.call(null,env,"First arg to new must be a symbol");
}

var _STAR_recur_frames_STAR_8768 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = cljs.core.cons.call(null,null,cljs.analyzer._STAR_recur_frames_STAR_);

try{var enve = cljs.core.assoc.call(null,env,cljs.core.cst$kw$context,cljs.core.cst$kw$expr);
var ctorexpr = cljs.analyzer.analyze.call(null,enve,ctor);
var ctor_var = cljs.analyzer.resolve_existing_var.call(null,env,ctor);
var record_args = (cljs.core.truth_((function (){var and__6397__auto__ = cljs.core.cst$kw$record.cljs$core$IFn$_invoke$arity$1(ctor_var);
if(cljs.core.truth_(and__6397__auto__)){
return cljs.core.not.call(null,cljs.core.cst$kw$internal_DASH_ctor.cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,ctor)));
} else {
return and__6397__auto__;
}
})())?cljs.core.repeat.call(null,(3),cljs.analyzer.analyze.call(null,enve,null)):null);
var argexprs = cljs.core.into.call(null,cljs.core.vec.call(null,cljs.core.map.call(null,((function (enve,ctorexpr,ctor_var,record_args,_STAR_recur_frames_STAR_8768,vec__8765,seq__8766,first__8767,seq__8766__$1,___$3,first__8767__$1,seq__8766__$2,ctor,args,form){
return (function (p1__8763_SHARP_){
return cljs.analyzer.analyze.call(null,enve,p1__8763_SHARP_);
});})(enve,ctorexpr,ctor_var,record_args,_STAR_recur_frames_STAR_8768,vec__8765,seq__8766,first__8767,seq__8766__$1,___$3,first__8767__$1,seq__8766__$2,ctor,args,form))
,args)),record_args);
var known_num_fields = cljs.core.cst$kw$num_DASH_fields.cljs$core$IFn$_invoke$arity$1(ctor_var);
var argc = cljs.core.count.call(null,args);
if(cljs.core.truth_((function (){var and__6397__auto__ = cljs.core.not.call(null,cljs.core.cst$kw$internal_DASH_ctor.cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,ctor)));
if(and__6397__auto__){
var and__6397__auto____$1 = known_num_fields;
if(cljs.core.truth_(and__6397__auto____$1)){
return cljs.core.not_EQ_.call(null,known_num_fields,argc);
} else {
return and__6397__auto____$1;
}
} else {
return and__6397__auto__;
}
})())){
cljs.analyzer.warning.call(null,cljs.core.cst$kw$fn_DASH_arity,env,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$argc,argc,cljs.core.cst$kw$ctor,ctor], null));
} else {
}

return new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$env,env,cljs.core.cst$kw$op,cljs.core.cst$kw$new,cljs.core.cst$kw$form,form,cljs.core.cst$kw$ctor,ctorexpr,cljs.core.cst$kw$args,argexprs,cljs.core.cst$kw$children,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ctorexpr], null),argexprs),cljs.core.cst$kw$tag,(function (){var name = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$info.cljs$core$IFn$_invoke$arity$1(ctorexpr));
var or__6409__auto__ = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$sym$js_SLASH_Object,cljs.core.cst$sym$object,cljs.core.cst$sym$js_SLASH_String,cljs.core.cst$sym$string,cljs.core.cst$sym$js_SLASH_Array,cljs.core.cst$sym$array,cljs.core.cst$sym$js_SLASH_Number,cljs.core.cst$sym$number,cljs.core.cst$sym$js_SLASH_Function,cljs.core.cst$sym$function,cljs.core.cst$sym$js_SLASH_Boolean,cljs.core.cst$sym$boolean], null).call(null,name);
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return name;
}
})()], null);
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_8768;
}}));
cljs.core._add_method.call(null,cljs.analyzer.parse,cljs.core.cst$sym$set_BANG_,(function (_,env,p__8769,___$1,___$2){
var vec__8770 = p__8769;
var ___$3 = cljs.core.nth.call(null,vec__8770,(0),null);
var target = cljs.core.nth.call(null,vec__8770,(1),null);
var val = cljs.core.nth.call(null,vec__8770,(2),null);
var alt = cljs.core.nth.call(null,vec__8770,(3),null);
var form = vec__8770;
var vec__8773 = (cljs.core.truth_(alt)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),(function (){var x__7243__auto__ = target;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = val;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})()))),alt], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [target,val], null));
var target__$1 = cljs.core.nth.call(null,vec__8773,(0),null);
var val__$1 = cljs.core.nth.call(null,vec__8773,(1),null);
var _STAR_recur_frames_STAR_8776 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = cljs.core.cons.call(null,null,cljs.analyzer._STAR_recur_frames_STAR_);

try{var enve = cljs.core.assoc.call(null,env,cljs.core.cst$kw$context,cljs.core.cst$kw$expr);
var targetexpr = (((cljs.core._EQ_.call(null,target__$1,cljs.core.cst$sym$_STAR_unchecked_DASH_if_STAR_)) && ((val__$1 === true) || (val__$1 === false)))?(function (){
cljs.core._STAR_unchecked_if_STAR_ = val__$1;

return cljs.core.cst$kw$cljs$analyzer_SLASH_set_DASH_unchecked_DASH_if;
})()
:(((target__$1 instanceof cljs.core.Symbol))?(function (){
if(cljs.core.truth_(cljs.core.cst$kw$const.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,env,cljs.core.cst$kw$locals),target__$1)))){
throw cljs.analyzer.error.call(null,env,"Can't set! a constant");
} else {
}

var local_8777 = target__$1.call(null,cljs.core.cst$kw$locals.cljs$core$IFn$_invoke$arity$1(env));
if(cljs.core.truth_((function (){var or__6409__auto__ = (local_8777 == null);
if(or__6409__auto__){
return or__6409__auto__;
} else {
var and__6397__auto__ = cljs.core.cst$kw$field.cljs$core$IFn$_invoke$arity$1(local_8777);
if(cljs.core.truth_(and__6397__auto__)){
var or__6409__auto____$1 = cljs.core.cst$kw$mutable.cljs$core$IFn$_invoke$arity$1(local_8777);
if(cljs.core.truth_(or__6409__auto____$1)){
return or__6409__auto____$1;
} else {
var or__6409__auto____$2 = cljs.core.cst$kw$unsynchronized_DASH_mutable.cljs$core$IFn$_invoke$arity$1(local_8777);
if(cljs.core.truth_(or__6409__auto____$2)){
return or__6409__auto____$2;
} else {
return cljs.core.cst$kw$volatile_DASH_mutable.cljs$core$IFn$_invoke$arity$1(local_8777);
}
}
} else {
return and__6397__auto__;
}
}
})())){
} else {
throw cljs.analyzer.error.call(null,env,"Can't set! local var or non-mutable field");
}

return cljs.analyzer.analyze_symbol.call(null,enve,target__$1);
})()
:((cljs.core.seq_QMARK_.call(null,target__$1))?(function (){var targetexpr = cljs.analyzer.analyze_seq.call(null,enve,target__$1,null);
if(cljs.core.truth_(cljs.core.cst$kw$field.cljs$core$IFn$_invoke$arity$1(targetexpr))){
return targetexpr;
} else {
return null;
}
})():null)
));
var valexpr = cljs.analyzer.analyze.call(null,enve,val__$1);
if(cljs.core.truth_(targetexpr)){
} else {
throw cljs.analyzer.error.call(null,env,"set! target must be a field or a symbol naming a var");
}

if(cljs.core._EQ_.call(null,targetexpr,cljs.core.cst$kw$cljs$analyzer_SLASH_set_DASH_unchecked_DASH_if)){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$env,env,cljs.core.cst$kw$op,cljs.core.cst$kw$no_DASH_op], null);
} else {
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$env,env,cljs.core.cst$kw$op,cljs.core.cst$kw$set_BANG_,cljs.core.cst$kw$form,form,cljs.core.cst$kw$target,targetexpr,cljs.core.cst$kw$val,valexpr,cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [targetexpr,valexpr], null)], null);

}
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_8776;
}}));
cljs.analyzer.foreign_dep_QMARK_ = (function cljs$analyzer$foreign_dep_QMARK_(dep){
if((dep instanceof cljs.core.Symbol)){
} else {
throw (new Error("Assert failed: (symbol? dep)"));
}

var js_index = cljs.core.cst$kw$js_DASH_dependency_DASH_index.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_));
var temp__4655__auto__ = cljs.core.find.call(null,js_index,cljs.core.name.call(null,dep));
if(cljs.core.truth_(temp__4655__auto__)){
var vec__8783 = temp__4655__auto__;
var _ = cljs.core.nth.call(null,vec__8783,(0),null);
var map__8786 = cljs.core.nth.call(null,vec__8783,(1),null);
var map__8786__$1 = ((((!((map__8786 == null)))?((((map__8786.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8786.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8786):map__8786);
var foreign = cljs.core.get.call(null,map__8786__$1,cljs.core.cst$kw$foreign);
return foreign;
} else {
return false;
}
});
/**
 * Given a lib, a namespace, deps, its dependencies, env, an analysis environment
 * and opts, compiler options - analyze all of the dependencies. Required to
 * correctly analyze usage of other namespaces.
 */
cljs.analyzer.analyze_deps = (function cljs$analyzer$analyze_deps(var_args){
var args8789 = [];
var len__7484__auto___8797 = arguments.length;
var i__7485__auto___8798 = (0);
while(true){
if((i__7485__auto___8798 < len__7484__auto___8797)){
args8789.push((arguments[i__7485__auto___8798]));

var G__8799 = (i__7485__auto___8798 + (1));
i__7485__auto___8798 = G__8799;
continue;
} else {
}
break;
}

var G__8791 = args8789.length;
switch (G__8791) {
case 3:
return cljs.analyzer.analyze_deps.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.analyzer.analyze_deps.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8789.length)].join('')));

}
});

cljs.analyzer.analyze_deps.cljs$core$IFn$_invoke$arity$3 = (function (lib,deps,env){
return cljs.analyzer.analyze_deps.call(null,lib,deps,env,null);
});

cljs.analyzer.analyze_deps.cljs$core$IFn$_invoke$arity$4 = (function (lib,deps,env,opts){
var compiler = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var _STAR_cljs_dep_set_STAR_8792 = cljs.analyzer._STAR_cljs_dep_set_STAR_;
cljs.analyzer._STAR_cljs_dep_set_STAR_ = cljs.core.vary_meta.call(null,cljs.core.conj.call(null,cljs.analyzer._STAR_cljs_dep_set_STAR_,lib),cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$dep_DASH_path], null),cljs.core.conj,lib);

try{if(cljs.core.every_QMARK_.call(null,((function (_STAR_cljs_dep_set_STAR_8792,compiler){
return (function (p1__8788_SHARP_){
return !(cljs.core.contains_QMARK_.call(null,cljs.analyzer._STAR_cljs_dep_set_STAR_,p1__8788_SHARP_));
});})(_STAR_cljs_dep_set_STAR_8792,compiler))
,deps)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Circular dependency detected, "),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," -> ",cljs.core.conj.call(null,cljs.core.cst$kw$dep_DASH_path.cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,cljs.analyzer._STAR_cljs_dep_set_STAR_)),cljs.core.some.call(null,cljs.analyzer._STAR_cljs_dep_set_STAR_,deps)))))].join('')),cljs.core.str("\n"),cljs.core.str("(every? (fn* [p1__8788#] (not (contains? *cljs-dep-set* p1__8788#))) deps)")].join('')));
}

var seq__8793 = cljs.core.seq.call(null,deps);
var chunk__8794 = null;
var count__8795 = (0);
var i__8796 = (0);
while(true){
if((i__8796 < count__8795)){
var dep = cljs.core._nth.call(null,chunk__8794,i__8796);
if(cljs.core.truth_((function (){var or__6409__auto__ = cljs.core.not_empty.call(null,cljs.core.get_in.call(null,compiler,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,dep,cljs.core.cst$kw$defs], null)));
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return cljs.core.contains_QMARK_.call(null,cljs.core.cst$kw$js_DASH_dependency_DASH_index.cljs$core$IFn$_invoke$arity$1(compiler),cljs.core.name.call(null,dep));
}
})())){
} else {
throw cljs.analyzer.error.call(null,env,cljs.analyzer.error_message.call(null,cljs.core.cst$kw$undeclared_DASH_ns,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ns_DASH_sym,dep,cljs.core.cst$kw$js_DASH_provide,cljs.core.name.call(null,dep)], null)));
}

var G__8801 = seq__8793;
var G__8802 = chunk__8794;
var G__8803 = count__8795;
var G__8804 = (i__8796 + (1));
seq__8793 = G__8801;
chunk__8794 = G__8802;
count__8795 = G__8803;
i__8796 = G__8804;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__8793);
if(temp__4657__auto__){
var seq__8793__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8793__$1)){
var c__7220__auto__ = cljs.core.chunk_first.call(null,seq__8793__$1);
var G__8805 = cljs.core.chunk_rest.call(null,seq__8793__$1);
var G__8806 = c__7220__auto__;
var G__8807 = cljs.core.count.call(null,c__7220__auto__);
var G__8808 = (0);
seq__8793 = G__8805;
chunk__8794 = G__8806;
count__8795 = G__8807;
i__8796 = G__8808;
continue;
} else {
var dep = cljs.core.first.call(null,seq__8793__$1);
if(cljs.core.truth_((function (){var or__6409__auto__ = cljs.core.not_empty.call(null,cljs.core.get_in.call(null,compiler,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,dep,cljs.core.cst$kw$defs], null)));
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return cljs.core.contains_QMARK_.call(null,cljs.core.cst$kw$js_DASH_dependency_DASH_index.cljs$core$IFn$_invoke$arity$1(compiler),cljs.core.name.call(null,dep));
}
})())){
} else {
throw cljs.analyzer.error.call(null,env,cljs.analyzer.error_message.call(null,cljs.core.cst$kw$undeclared_DASH_ns,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ns_DASH_sym,dep,cljs.core.cst$kw$js_DASH_provide,cljs.core.name.call(null,dep)], null)));
}

var G__8809 = cljs.core.next.call(null,seq__8793__$1);
var G__8810 = null;
var G__8811 = (0);
var G__8812 = (0);
seq__8793 = G__8809;
chunk__8794 = G__8810;
count__8795 = G__8811;
i__8796 = G__8812;
continue;
}
} else {
return null;
}
}
break;
}
}finally {cljs.analyzer._STAR_cljs_dep_set_STAR_ = _STAR_cljs_dep_set_STAR_8792;
}});

cljs.analyzer.analyze_deps.cljs$lang$maxFixedArity = 4;

cljs.analyzer.missing_use_QMARK_ = (function cljs$analyzer$missing_use_QMARK_(lib,sym,cenv){
var js_lib = cljs.core.get_in.call(null,cenv,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$js_DASH_dependency_DASH_index,cljs.core.name.call(null,lib)], null));
return (cljs.core._EQ_.call(null,cljs.core.get_in.call(null,cenv,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,lib,cljs.core.cst$kw$defs,sym], null),cljs.core.cst$kw$cljs$analyzer_SLASH_not_DASH_found),cljs.core.cst$kw$cljs$analyzer_SLASH_not_DASH_found)) && (!(cljs.core._EQ_.call(null,cljs.core.get.call(null,js_lib,cljs.core.cst$kw$group),cljs.core.cst$kw$goog))) && (cljs.core.not.call(null,cljs.core.get.call(null,js_lib,cljs.core.cst$kw$closure_DASH_lib)));
});
cljs.analyzer.missing_rename_QMARK_ = (function cljs$analyzer$missing_rename_QMARK_(sym,cenv){
var lib = cljs.core.symbol.call(null,cljs.core.namespace.call(null,sym));
var sym__$1 = cljs.core.symbol.call(null,cljs.core.name.call(null,sym));
return cljs.analyzer.missing_use_QMARK_.call(null,lib,sym__$1,cenv);
});
cljs.analyzer.missing_use_macro_QMARK_ = (function cljs$analyzer$missing_use_macro_QMARK_(lib,sym){
var the_ns = cljs.core.find_macros_ns.call(null,lib);
return ((the_ns == null)) || ((the_ns.findInternedVar(sym) == null));
});
cljs.analyzer.missing_rename_macro_QMARK_ = (function cljs$analyzer$missing_rename_macro_QMARK_(sym){
var lib = cljs.core.symbol.call(null,cljs.core.namespace.call(null,sym));
var sym__$1 = cljs.core.symbol.call(null,cljs.core.name.call(null,sym));
var the_ns = cljs.core.find_macros_ns.call(null,lib);
return ((the_ns == null)) || ((the_ns.findInternedVar(sym__$1) == null));
});
cljs.analyzer.missing_uses = (function cljs$analyzer$missing_uses(uses,env){
var cenv = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,((function (cenv){
return (function (p__8817){
var vec__8818 = p__8817;
var sym = cljs.core.nth.call(null,vec__8818,(0),null);
var lib = cljs.core.nth.call(null,vec__8818,(1),null);
return cljs.analyzer.missing_use_QMARK_.call(null,lib,sym,cenv);
});})(cenv))
,uses));
});
cljs.analyzer.missing_renames = (function cljs$analyzer$missing_renames(renames,env){
var cenv = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,((function (cenv){
return (function (p__8825){
var vec__8826 = p__8825;
var _ = cljs.core.nth.call(null,vec__8826,(0),null);
var qualified_sym = cljs.core.nth.call(null,vec__8826,(1),null);
return cljs.analyzer.missing_rename_QMARK_.call(null,qualified_sym,cenv);
});})(cenv))
,renames));
});
cljs.analyzer.missing_use_macros = (function cljs$analyzer$missing_use_macros(use_macros,env){
var cenv = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,((function (cenv){
return (function (p__8833){
var vec__8834 = p__8833;
var sym = cljs.core.nth.call(null,vec__8834,(0),null);
var lib = cljs.core.nth.call(null,vec__8834,(1),null);
return cljs.analyzer.missing_use_macro_QMARK_.call(null,lib,sym);
});})(cenv))
,use_macros));
});
cljs.analyzer.inferred_use_macros = (function cljs$analyzer$inferred_use_macros(use_macros,env){
var cenv = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,((function (cenv){
return (function (p__8841){
var vec__8842 = p__8841;
var sym = cljs.core.nth.call(null,vec__8842,(0),null);
var lib = cljs.core.nth.call(null,vec__8842,(1),null);
return cljs.core.not.call(null,cljs.analyzer.missing_use_macro_QMARK_.call(null,lib,sym));
});})(cenv))
,use_macros));
});
cljs.analyzer.inferred_rename_macros = (function cljs$analyzer$inferred_rename_macros(rename_macros,env){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,(function (p__8849){
var vec__8850 = p__8849;
var _ = cljs.core.nth.call(null,vec__8850,(0),null);
var qualified_sym = cljs.core.nth.call(null,vec__8850,(1),null);
return cljs.core.not.call(null,cljs.analyzer.missing_rename_macro_QMARK_.call(null,qualified_sym));
}),rename_macros));
});
cljs.analyzer.check_uses = (function cljs$analyzer$check_uses(uses,env){
var cenv = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var seq__8863 = cljs.core.seq.call(null,uses);
var chunk__8864 = null;
var count__8865 = (0);
var i__8866 = (0);
while(true){
if((i__8866 < count__8865)){
var vec__8867 = cljs.core._nth.call(null,chunk__8864,i__8866);
var sym = cljs.core.nth.call(null,vec__8867,(0),null);
var lib = cljs.core.nth.call(null,vec__8867,(1),null);
if(cljs.core.truth_(cljs.analyzer.missing_use_QMARK_.call(null,lib,sym,cenv))){
throw cljs.analyzer.error.call(null,env,cljs.analyzer.error_message.call(null,cljs.core.cst$kw$undeclared_DASH_ns_DASH_form,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"var",cljs.core.cst$kw$lib,lib,cljs.core.cst$kw$sym,sym], null)));
} else {
}

var G__8873 = seq__8863;
var G__8874 = chunk__8864;
var G__8875 = count__8865;
var G__8876 = (i__8866 + (1));
seq__8863 = G__8873;
chunk__8864 = G__8874;
count__8865 = G__8875;
i__8866 = G__8876;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__8863);
if(temp__4657__auto__){
var seq__8863__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8863__$1)){
var c__7220__auto__ = cljs.core.chunk_first.call(null,seq__8863__$1);
var G__8877 = cljs.core.chunk_rest.call(null,seq__8863__$1);
var G__8878 = c__7220__auto__;
var G__8879 = cljs.core.count.call(null,c__7220__auto__);
var G__8880 = (0);
seq__8863 = G__8877;
chunk__8864 = G__8878;
count__8865 = G__8879;
i__8866 = G__8880;
continue;
} else {
var vec__8870 = cljs.core.first.call(null,seq__8863__$1);
var sym = cljs.core.nth.call(null,vec__8870,(0),null);
var lib = cljs.core.nth.call(null,vec__8870,(1),null);
if(cljs.core.truth_(cljs.analyzer.missing_use_QMARK_.call(null,lib,sym,cenv))){
throw cljs.analyzer.error.call(null,env,cljs.analyzer.error_message.call(null,cljs.core.cst$kw$undeclared_DASH_ns_DASH_form,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"var",cljs.core.cst$kw$lib,lib,cljs.core.cst$kw$sym,sym], null)));
} else {
}

var G__8881 = cljs.core.next.call(null,seq__8863__$1);
var G__8882 = null;
var G__8883 = (0);
var G__8884 = (0);
seq__8863 = G__8881;
chunk__8864 = G__8882;
count__8865 = G__8883;
i__8866 = G__8884;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.analyzer.check_use_macros = (function cljs$analyzer$check_use_macros(var_args){
var args8885 = [];
var len__7484__auto___8898 = arguments.length;
var i__7485__auto___8899 = (0);
while(true){
if((i__7485__auto___8899 < len__7484__auto___8898)){
args8885.push((arguments[i__7485__auto___8899]));

var G__8900 = (i__7485__auto___8899 + (1));
i__7485__auto___8899 = G__8900;
continue;
} else {
}
break;
}

var G__8887 = args8885.length;
switch (G__8887) {
case 2:
return cljs.analyzer.check_use_macros.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.analyzer.check_use_macros.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8885.length)].join('')));

}
});

cljs.analyzer.check_use_macros.cljs$core$IFn$_invoke$arity$2 = (function (use_macros,env){
return cljs.analyzer.check_use_macros.call(null,use_macros,null,env);
});

cljs.analyzer.check_use_macros.cljs$core$IFn$_invoke$arity$3 = (function (use_macros,missing_uses,env){
var cenv = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var seq__8888_8902 = cljs.core.seq.call(null,use_macros);
var chunk__8889_8903 = null;
var count__8890_8904 = (0);
var i__8891_8905 = (0);
while(true){
if((i__8891_8905 < count__8890_8904)){
var vec__8892_8906 = cljs.core._nth.call(null,chunk__8889_8903,i__8891_8905);
var sym_8907 = cljs.core.nth.call(null,vec__8892_8906,(0),null);
var lib_8908 = cljs.core.nth.call(null,vec__8892_8906,(1),null);
if(cljs.core.truth_(cljs.analyzer.missing_use_macro_QMARK_.call(null,lib_8908,sym_8907))){
throw cljs.analyzer.error.call(null,env,cljs.analyzer.error_message.call(null,cljs.core.cst$kw$undeclared_DASH_ns_DASH_form,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"macro",cljs.core.cst$kw$lib,lib_8908,cljs.core.cst$kw$sym,sym_8907], null)));
} else {
}

var G__8909 = seq__8888_8902;
var G__8910 = chunk__8889_8903;
var G__8911 = count__8890_8904;
var G__8912 = (i__8891_8905 + (1));
seq__8888_8902 = G__8909;
chunk__8889_8903 = G__8910;
count__8890_8904 = G__8911;
i__8891_8905 = G__8912;
continue;
} else {
var temp__4657__auto___8913 = cljs.core.seq.call(null,seq__8888_8902);
if(temp__4657__auto___8913){
var seq__8888_8914__$1 = temp__4657__auto___8913;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8888_8914__$1)){
var c__7220__auto___8915 = cljs.core.chunk_first.call(null,seq__8888_8914__$1);
var G__8916 = cljs.core.chunk_rest.call(null,seq__8888_8914__$1);
var G__8917 = c__7220__auto___8915;
var G__8918 = cljs.core.count.call(null,c__7220__auto___8915);
var G__8919 = (0);
seq__8888_8902 = G__8916;
chunk__8889_8903 = G__8917;
count__8890_8904 = G__8918;
i__8891_8905 = G__8919;
continue;
} else {
var vec__8895_8920 = cljs.core.first.call(null,seq__8888_8914__$1);
var sym_8921 = cljs.core.nth.call(null,vec__8895_8920,(0),null);
var lib_8922 = cljs.core.nth.call(null,vec__8895_8920,(1),null);
if(cljs.core.truth_(cljs.analyzer.missing_use_macro_QMARK_.call(null,lib_8922,sym_8921))){
throw cljs.analyzer.error.call(null,env,cljs.analyzer.error_message.call(null,cljs.core.cst$kw$undeclared_DASH_ns_DASH_form,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"macro",cljs.core.cst$kw$lib,lib_8922,cljs.core.cst$kw$sym,sym_8921], null)));
} else {
}

var G__8923 = cljs.core.next.call(null,seq__8888_8914__$1);
var G__8924 = null;
var G__8925 = (0);
var G__8926 = (0);
seq__8888_8902 = G__8923;
chunk__8889_8903 = G__8924;
count__8890_8904 = G__8925;
i__8891_8905 = G__8926;
continue;
}
} else {
}
}
break;
}

cljs.analyzer.check_uses.call(null,cljs.analyzer.missing_use_macros.call(null,missing_uses,env),env);

return cljs.analyzer.inferred_use_macros.call(null,missing_uses,env);
});

cljs.analyzer.check_use_macros.cljs$lang$maxFixedArity = 3;

cljs.analyzer.check_use_macros_inferring_missing = (function cljs$analyzer$check_use_macros_inferring_missing(p__8930,env){
var map__8933 = p__8930;
var map__8933__$1 = ((((!((map__8933 == null)))?((((map__8933.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8933.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8933):map__8933);
var ast = map__8933__$1;
var name = cljs.core.get.call(null,map__8933__$1,cljs.core.cst$kw$name);
var uses = cljs.core.get.call(null,map__8933__$1,cljs.core.cst$kw$uses);
var use_macros = cljs.core.get.call(null,map__8933__$1,cljs.core.cst$kw$use_DASH_macros);
var missing_uses = (cljs.core.truth_((function (){var and__6397__auto__ = cljs.analyzer._STAR_analyze_deps_STAR_;
if(cljs.core.truth_(and__6397__auto__)){
return cljs.core.seq.call(null,uses);
} else {
return and__6397__auto__;
}
})())?cljs.analyzer.missing_uses.call(null,uses,env):null);
var maybe_macros = cljs.core.apply.call(null,cljs.core.dissoc,uses,cljs.core.keys.call(null,missing_uses));
var remove_missing_uses = ((function (missing_uses,maybe_macros,map__8933,map__8933__$1,ast,name,uses,use_macros){
return (function (p1__8927_SHARP_){
return cljs.core.apply.call(null,cljs.core.dissoc,p1__8927_SHARP_,cljs.core.keys.call(null,missing_uses));
});})(missing_uses,maybe_macros,map__8933,map__8933__$1,ast,name,uses,use_macros))
;
var ast_SINGLEQUOTE_ = cljs.core.update_in.call(null,cljs.core.update_in.call(null,ast,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$use_DASH_macros], null),((function (missing_uses,maybe_macros,remove_missing_uses,map__8933,map__8933__$1,ast,name,uses,use_macros){
return (function (p1__8928_SHARP_){
return cljs.core.merge.call(null,cljs.core.merge.call(null,p1__8928_SHARP_,cljs.analyzer.check_use_macros.call(null,use_macros,missing_uses,env)),cljs.analyzer.inferred_use_macros.call(null,maybe_macros,env));
});})(missing_uses,maybe_macros,remove_missing_uses,map__8933,map__8933__$1,ast,name,uses,use_macros))
),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$uses], null),remove_missing_uses);
cljs.core.swap_BANG_.call(null,cljs.env._STAR_compiler_STAR_,((function (missing_uses,maybe_macros,remove_missing_uses,ast_SINGLEQUOTE_,map__8933,map__8933__$1,ast,name,uses,use_macros){
return (function (p1__8929_SHARP_){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,p1__8929_SHARP_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,name,cljs.core.cst$kw$use_DASH_macros], null),cljs.core.merge,cljs.core.cst$kw$use_DASH_macros.cljs$core$IFn$_invoke$arity$1(ast_SINGLEQUOTE_)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,name,cljs.core.cst$kw$uses], null),remove_missing_uses);
});})(missing_uses,maybe_macros,remove_missing_uses,ast_SINGLEQUOTE_,map__8933,map__8933__$1,ast,name,uses,use_macros))
);

return ast_SINGLEQUOTE_;
});
cljs.analyzer.check_rename_macros_inferring_missing = (function cljs$analyzer$check_rename_macros_inferring_missing(p__8938,env){
var map__8941 = p__8938;
var map__8941__$1 = ((((!((map__8941 == null)))?((((map__8941.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8941.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8941):map__8941);
var ast = map__8941__$1;
var name = cljs.core.get.call(null,map__8941__$1,cljs.core.cst$kw$name);
var renames = cljs.core.get.call(null,map__8941__$1,cljs.core.cst$kw$renames);
var missing_renames = (cljs.core.truth_((function (){var and__6397__auto__ = cljs.analyzer._STAR_analyze_deps_STAR_;
if(cljs.core.truth_(and__6397__auto__)){
return cljs.core.seq.call(null,renames);
} else {
return and__6397__auto__;
}
})())?cljs.analyzer.missing_renames.call(null,renames,env):null);
var maybe_macros = cljs.core.apply.call(null,cljs.core.dissoc,renames,cljs.core.keys.call(null,missing_renames));
var missing_rename_macros = cljs.analyzer.inferred_rename_macros.call(null,missing_renames,env);
var remove_missing_renames = ((function (missing_renames,maybe_macros,missing_rename_macros,map__8941,map__8941__$1,ast,name,renames){
return (function (p1__8935_SHARP_){
return cljs.core.apply.call(null,cljs.core.dissoc,p1__8935_SHARP_,cljs.core.keys.call(null,missing_renames));
});})(missing_renames,maybe_macros,missing_rename_macros,map__8941,map__8941__$1,ast,name,renames))
;
var ast_SINGLEQUOTE_ = cljs.core.update_in.call(null,cljs.core.update_in.call(null,ast,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rename_DASH_macros], null),((function (missing_renames,maybe_macros,missing_rename_macros,remove_missing_renames,map__8941,map__8941__$1,ast,name,renames){
return (function (p1__8936_SHARP_){
return cljs.core.merge.call(null,cljs.core.merge.call(null,p1__8936_SHARP_,missing_rename_macros),cljs.analyzer.inferred_rename_macros.call(null,maybe_macros,env));
});})(missing_renames,maybe_macros,missing_rename_macros,remove_missing_renames,map__8941,map__8941__$1,ast,name,renames))
),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$renames], null),remove_missing_renames);
cljs.core.swap_BANG_.call(null,cljs.env._STAR_compiler_STAR_,((function (missing_renames,maybe_macros,missing_rename_macros,remove_missing_renames,ast_SINGLEQUOTE_,map__8941,map__8941__$1,ast,name,renames){
return (function (p1__8937_SHARP_){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,p1__8937_SHARP_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,name,cljs.core.cst$kw$rename_DASH_macros], null),cljs.core.merge,cljs.core.cst$kw$rename_DASH_macros.cljs$core$IFn$_invoke$arity$1(ast_SINGLEQUOTE_)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,name,cljs.core.cst$kw$renames], null),remove_missing_renames);
});})(missing_renames,maybe_macros,missing_rename_macros,remove_missing_renames,ast_SINGLEQUOTE_,map__8941,map__8941__$1,ast,name,renames))
);

return ast_SINGLEQUOTE_;
});
cljs.analyzer.parse_ns_error_msg = (function cljs$analyzer$parse_ns_error_msg(spec,msg){
return [cljs.core.str(msg),cljs.core.str("; offending spec: "),cljs.core.str(cljs.core.pr_str.call(null,spec))].join('');
});
cljs.analyzer.basic_validate_ns_spec = (function cljs$analyzer$basic_validate_ns_spec(env,macros_QMARK_,spec){
if(((spec instanceof cljs.core.Symbol)) || (cljs.core.sequential_QMARK_.call(null,spec))){
} else {
throw cljs.analyzer.error.call(null,env,cljs.analyzer.parse_ns_error_msg.call(null,spec,"Only [lib.ns & options] and lib.ns specs supported in :require / :require-macros"));
}

if(cljs.core.sequential_QMARK_.call(null,spec)){
if((cljs.core.first.call(null,spec) instanceof cljs.core.Symbol)){
} else {
throw cljs.analyzer.error.call(null,env,cljs.analyzer.parse_ns_error_msg.call(null,spec,"Library name must be specified as a symbol in :require / :require-macros"));
}

if(cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,spec))){
} else {
throw cljs.analyzer.error.call(null,env,cljs.analyzer.parse_ns_error_msg.call(null,spec,"Only :as alias, :refer (names) and :rename {from to} options supported in :require"));
}

if(cljs.core.every_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$as,null,cljs.core.cst$kw$rename,null,cljs.core.cst$kw$refer,null], null), null),cljs.core.map.call(null,cljs.core.first,cljs.core.partition.call(null,(2),cljs.core.next.call(null,spec))))){
} else {
throw cljs.analyzer.error.call(null,env,cljs.analyzer.parse_ns_error_msg.call(null,spec,"Only :as, :refer and :rename options supported in :require / :require-macros"));
}

if((function (){var fs = cljs.core.frequencies.call(null,cljs.core.next.call(null,spec));
return ((fs.call(null,cljs.core.cst$kw$as,(0)) <= (1))) && ((fs.call(null,cljs.core.cst$kw$refer,(0)) <= (1)));
})()){
return null;
} else {
throw cljs.analyzer.error.call(null,env,cljs.analyzer.parse_ns_error_msg.call(null,spec,"Each of :as and :refer options may only be specified once in :require / :require-macros"));
}
} else {
return null;
}
});
cljs.analyzer.parse_ns_excludes = (function cljs$analyzer$parse_ns_excludes(env,args){
return cljs.core.reduce.call(null,(function (s,p__8948){
var vec__8949 = p__8948;
var seq__8950 = cljs.core.seq.call(null,vec__8949);
var first__8951 = cljs.core.first.call(null,seq__8950);
var seq__8950__$1 = cljs.core.next.call(null,seq__8950);
var k = first__8951;
var filters = seq__8950__$1;
if(cljs.core._EQ_.call(null,k,cljs.core.cst$kw$refer_DASH_clojure)){
if(cljs.core.seq.call(null,cljs.core.cst$kw$excludes.cljs$core$IFn$_invoke$arity$1(s))){
throw cljs.analyzer.error.call(null,env,"Only one :refer-clojure form is allowed per namespace definition");
} else {
}

var valid_kws = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$exclude,null,cljs.core.cst$kw$rename,null], null), null);
var xs = (function (){var fs = cljs.core.seq.call(null,filters);
var ret = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$excludes,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$renames,cljs.core.PersistentArrayMap.EMPTY], null);
var err = !(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,filters)));
while(true){
if(err === true){
throw cljs.analyzer.error.call(null,env,"Only [:refer-clojure :exclude (names)] and optionally `:rename {from to}` specs supported");
} else {
if(!((fs == null))){
var kw = cljs.core.first.call(null,fs);
if(cljs.core.truth_(valid_kws.call(null,kw))){
var refs = cljs.core.second.call(null,fs);
if(!(((cljs.core._EQ_.call(null,kw,cljs.core.cst$kw$exclude)) && (cljs.core.sequential_QMARK_.call(null,refs)) && (cljs.core.every_QMARK_.call(null,cljs.core.symbol_QMARK_,refs))) || ((cljs.core._EQ_.call(null,kw,cljs.core.cst$kw$rename)) && (cljs.core.map_QMARK_.call(null,refs)) && (cljs.core.every_QMARK_.call(null,((function (fs,ret,err,refs,kw,valid_kws,vec__8949,seq__8950,first__8951,seq__8950__$1,k,filters){
return (function (p1__8943_SHARP_){
return cljs.core.every_QMARK_.call(null,cljs.core.symbol_QMARK_,p1__8943_SHARP_);
});})(fs,ret,err,refs,kw,valid_kws,vec__8949,seq__8950,first__8951,seq__8950__$1,k,filters))
,refs))))){
var G__8952 = fs;
var G__8953 = ret;
var G__8954 = true;
fs = G__8952;
ret = G__8953;
err = G__8954;
continue;
} else {
if(cljs.core._EQ_.call(null,kw,cljs.core.cst$kw$exclude)){
var G__8955 = cljs.core.nnext.call(null,fs);
var G__8956 = cljs.core.update_in.call(null,ret,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$excludes], null),cljs.core.into,refs);
var G__8957 = false;
fs = G__8955;
ret = G__8956;
err = G__8957;
continue;
} else {
if(cljs.core._EQ_.call(null,kw,cljs.core.cst$kw$rename)){
var G__8958 = cljs.core.nnext.call(null,fs);
var G__8959 = cljs.core.update_in.call(null,ret,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$renames], null),cljs.core.merge,refs);
var G__8960 = false;
fs = G__8958;
ret = G__8959;
err = G__8960;
continue;
} else {
return null;
}
}
}
} else {
var G__8961 = fs;
var G__8962 = ret;
var G__8963 = true;
fs = G__8961;
ret = G__8962;
err = G__8963;
continue;
}
} else {
return ret;

}
}
break;
}
})();
return cljs.core.merge_with.call(null,cljs.core.into,s,xs);
} else {
return s;
}
}),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$excludes,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$renames,cljs.core.PersistentArrayMap.EMPTY], null),args);
});
cljs.analyzer.use__GT_require = (function cljs$analyzer$use__GT_require(env,p__8965){
var vec__8969 = p__8965;
var seq__8970 = cljs.core.seq.call(null,vec__8969);
var first__8971 = cljs.core.first.call(null,seq__8970);
var seq__8970__$1 = cljs.core.next.call(null,seq__8970);
var lib = first__8971;
var filters = seq__8970__$1;
var spec = vec__8969;
if(((lib instanceof cljs.core.Symbol)) && (cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,spec)))){
} else {
throw cljs.analyzer.error.call(null,env,cljs.analyzer.parse_ns_error_msg.call(null,spec,"Only [lib.ns :only (names)] and optionally `:rename {from to}` specs supported in :use / :use-macros"));
}

var fs = cljs.core.seq.call(null,filters);
var ret = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lib], null);
var err = false;
while(true){
if(err === true){
throw cljs.analyzer.error.call(null,env,cljs.analyzer.parse_ns_error_msg.call(null,spec,"Only [lib.ns :only (names)] and optionally `:rename {from to}` specs supported in :use / :use-macros"));
} else {
if(!((fs == null))){
var kw = cljs.core.first.call(null,fs);
var only_QMARK_ = cljs.core._EQ_.call(null,kw,cljs.core.cst$kw$only);
if((only_QMARK_) || (cljs.core._EQ_.call(null,kw,cljs.core.cst$kw$rename))){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([((only_QMARK_)?cljs.core.cst$kw$refer:kw)], true),ret))){
throw cljs.analyzer.error.call(null,env,cljs.analyzer.parse_ns_error_msg.call(null,spec,"Each of :only and :rename options may only be specified once in :use / :use-macros"));
} else {
var refs = cljs.core.second.call(null,fs);
if(!(((only_QMARK_) && (cljs.core.sequential_QMARK_.call(null,refs)) && (cljs.core.every_QMARK_.call(null,cljs.core.symbol_QMARK_,refs))) || ((cljs.core._EQ_.call(null,kw,cljs.core.cst$kw$rename)) && (cljs.core.map_QMARK_.call(null,refs)) && (cljs.core.every_QMARK_.call(null,((function (fs,ret,err,refs,kw,only_QMARK_,vec__8969,seq__8970,first__8971,seq__8970__$1,lib,filters,spec){
return (function (p1__8964_SHARP_){
return cljs.core.every_QMARK_.call(null,cljs.core.symbol_QMARK_,p1__8964_SHARP_);
});})(fs,ret,err,refs,kw,only_QMARK_,vec__8969,seq__8970,first__8971,seq__8970__$1,lib,filters,spec))
,refs))))){
var G__8972 = fs;
var G__8973 = ret;
var G__8974 = true;
fs = G__8972;
ret = G__8973;
err = G__8974;
continue;
} else {
var G__8975 = cljs.core.nnext.call(null,fs);
var G__8976 = cljs.core.into.call(null,ret,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((only_QMARK_)?cljs.core.cst$kw$refer:kw),refs], null));
var G__8977 = false;
fs = G__8975;
ret = G__8976;
err = G__8977;
continue;
}
}
} else {
var G__8978 = fs;
var G__8979 = ret;
var G__8980 = true;
fs = G__8978;
ret = G__8979;
err = G__8980;
continue;
}
} else {
if(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$refer,null], null), null),ret))){
return ret;
} else {
var G__8981 = fs;
var G__8982 = ret;
var G__8983 = true;
fs = G__8981;
ret = G__8982;
err = G__8983;
continue;
}

}
}
break;
}
});
cljs.analyzer.parse_require_spec = (function cljs$analyzer$parse_require_spec(env,macros_QMARK_,deps,aliases,spec){
while(true){
if((spec instanceof cljs.core.Symbol)){
var G__9008 = env;
var G__9009 = macros_QMARK_;
var G__9010 = deps;
var G__9011 = aliases;
var G__9012 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec], null);
env = G__9008;
macros_QMARK_ = G__9009;
deps = G__9010;
aliases = G__9011;
spec = G__9012;
continue;
} else {
cljs.analyzer.basic_validate_ns_spec.call(null,env,macros_QMARK_,spec);

var vec__8996 = spec;
var seq__8997 = cljs.core.seq.call(null,vec__8996);
var first__8998 = cljs.core.first.call(null,seq__8997);
var seq__8997__$1 = cljs.core.next.call(null,seq__8997);
var lib = first__8998;
var opts = seq__8997__$1;
var lib__$1 = (function (){var temp__4655__auto__ = cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$js_DASH_module_DASH_index,cljs.core.name.call(null,lib)], null));
if(cljs.core.truth_(temp__4655__auto__)){
var js_module_name = temp__4655__auto__;
return cljs.core.symbol.call(null,js_module_name);
} else {
return lib;
}
})();
var map__8999 = cljs.core.apply.call(null,cljs.core.hash_map,opts);
var map__8999__$1 = ((((!((map__8999 == null)))?((((map__8999.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8999.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8999):map__8999);
var alias = cljs.core.get.call(null,map__8999__$1,cljs.core.cst$kw$as,lib__$1);
var referred = cljs.core.get.call(null,map__8999__$1,cljs.core.cst$kw$refer);
var renamed = cljs.core.get.call(null,map__8999__$1,cljs.core.cst$kw$rename);
var referred_without_renamed = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,renamed)),referred));
var vec__9000 = (cljs.core.truth_(macros_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$require_DASH_macros,cljs.core.cst$kw$use_DASH_macros,cljs.core.cst$kw$rename_DASH_macros], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$require,cljs.core.cst$kw$use,cljs.core.cst$kw$rename], null));
var rk = cljs.core.nth.call(null,vec__9000,(0),null);
var uk = cljs.core.nth.call(null,vec__9000,(1),null);
var renk = cljs.core.nth.call(null,vec__9000,(2),null);
if(((alias instanceof cljs.core.Symbol)) || ((alias == null))){
} else {
throw cljs.analyzer.error.call(null,env,cljs.analyzer.parse_ns_error_msg.call(null,spec,":as must be followed by a symbol in :require / :require-macros"));
}

if(cljs.core.truth_(alias)){
var alias_type_9013 = (cljs.core.truth_(macros_QMARK_)?cljs.core.cst$kw$macros:cljs.core.cst$kw$fns);
var lib_SINGLEQUOTE__9014 = alias_type_9013.call(null,cljs.core.deref.call(null,aliases)).call(null,alias);
if((!((lib_SINGLEQUOTE__9014 == null))) && (cljs.core.not_EQ_.call(null,lib__$1,lib_SINGLEQUOTE__9014))){
throw cljs.analyzer.error.call(null,env,cljs.analyzer.parse_ns_error_msg.call(null,spec,":as alias must be unique"));
} else {
}

cljs.core.swap_BANG_.call(null,aliases,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [alias_type_9013], null),cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [alias,lib__$1], null));
} else {
}

if(((cljs.core.sequential_QMARK_.call(null,referred)) && (cljs.core.every_QMARK_.call(null,cljs.core.symbol_QMARK_,referred))) || ((referred == null))){
} else {
throw cljs.analyzer.error.call(null,env,cljs.analyzer.parse_ns_error_msg.call(null,spec,":refer must be followed by a sequence of symbols in :require / :require-macros"));
}

if(cljs.core.truth_(macros_QMARK_)){
} else {
cljs.core.swap_BANG_.call(null,deps,cljs.core.conj,lib__$1);
}

return cljs.core.merge.call(null,(cljs.core.truth_(alias)?cljs.core.PersistentArrayMap.fromArray([rk,cljs.core.merge.call(null,cljs.core.PersistentArrayMap.fromArray([alias,lib__$1], true, false),cljs.core.PersistentArrayMap.fromArray([lib__$1,lib__$1], true, false))], true, false):null),((referred_without_renamed)?cljs.core.PersistentArrayMap.fromArray([uk,cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.interleave.call(null,referred_without_renamed,cljs.core.repeat.call(null,lib__$1)))], true, false):null),(cljs.core.truth_(renamed)?cljs.core.PersistentArrayMap.fromArray([renk,cljs.core.reduce.call(null,((function (env,macros_QMARK_,deps,aliases,spec,vec__8996,seq__8997,first__8998,seq__8997__$1,lib,opts,lib__$1,map__8999,map__8999__$1,alias,referred,renamed,referred_without_renamed,vec__9000,rk,uk,renk){
return (function (m,p__9004){
var vec__9005 = p__9004;
var original = cljs.core.nth.call(null,vec__9005,(0),null);
var renamed__$1 = cljs.core.nth.call(null,vec__9005,(1),null);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([original], true),referred))){
} else {
throw cljs.analyzer.error.call(null,env,[cljs.core.str("Renamed symbol "),cljs.core.str(original),cljs.core.str(" not referred")].join(''));
}

return cljs.core.assoc.call(null,m,renamed__$1,cljs.core.symbol.call(null,[cljs.core.str(lib__$1)].join(''),[cljs.core.str(original)].join('')));
});})(env,macros_QMARK_,deps,aliases,spec,vec__8996,seq__8997,first__8998,seq__8997__$1,lib,opts,lib__$1,map__8999,map__8999__$1,alias,referred,renamed,referred_without_renamed,vec__9000,rk,uk,renk))
,cljs.core.PersistentArrayMap.EMPTY,renamed)], true, false):null));
}
break;
}
});
cljs.analyzer.parse_import_spec = (function cljs$analyzer$parse_import_spec(env,deps,spec){
if(((cljs.core.sequential_QMARK_.call(null,spec)) && (cljs.core.every_QMARK_.call(null,cljs.core.symbol_QMARK_,spec))) || (((spec instanceof cljs.core.Symbol)) && ((cljs.core.namespace.call(null,spec) == null)))){
} else {
throw cljs.analyzer.error.call(null,env,cljs.analyzer.parse_ns_error_msg.call(null,spec,"Only lib.ns.Ctor or [lib.ns Ctor*] spec supported in :import"));
}

var import_map = ((cljs.core.sequential_QMARK_.call(null,spec))?cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p1__9015_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__9015_SHARP_,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.first.call(null,spec)),cljs.core.str("."),cljs.core.str(p1__9015_SHARP_)].join(''))],null));
}),cljs.core.rest.call(null,spec))):cljs.core.PersistentArrayMap.fromArray([cljs.core.symbol.call(null,cljs.core.last.call(null,clojure.string.split.call(null,[cljs.core.str(spec)].join(''),/\./))),spec], true, false));
var seq__9026_9036 = cljs.core.seq.call(null,import_map);
var chunk__9027_9037 = null;
var count__9028_9038 = (0);
var i__9029_9039 = (0);
while(true){
if((i__9029_9039 < count__9028_9038)){
var vec__9030_9040 = cljs.core._nth.call(null,chunk__9027_9037,i__9029_9039);
var __9041 = cljs.core.nth.call(null,vec__9030_9040,(0),null);
var spec_9042__$1 = cljs.core.nth.call(null,vec__9030_9040,(1),null);
cljs.core.swap_BANG_.call(null,deps,cljs.core.conj,spec_9042__$1);

var G__9043 = seq__9026_9036;
var G__9044 = chunk__9027_9037;
var G__9045 = count__9028_9038;
var G__9046 = (i__9029_9039 + (1));
seq__9026_9036 = G__9043;
chunk__9027_9037 = G__9044;
count__9028_9038 = G__9045;
i__9029_9039 = G__9046;
continue;
} else {
var temp__4657__auto___9047 = cljs.core.seq.call(null,seq__9026_9036);
if(temp__4657__auto___9047){
var seq__9026_9048__$1 = temp__4657__auto___9047;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9026_9048__$1)){
var c__7220__auto___9049 = cljs.core.chunk_first.call(null,seq__9026_9048__$1);
var G__9050 = cljs.core.chunk_rest.call(null,seq__9026_9048__$1);
var G__9051 = c__7220__auto___9049;
var G__9052 = cljs.core.count.call(null,c__7220__auto___9049);
var G__9053 = (0);
seq__9026_9036 = G__9050;
chunk__9027_9037 = G__9051;
count__9028_9038 = G__9052;
i__9029_9039 = G__9053;
continue;
} else {
var vec__9033_9054 = cljs.core.first.call(null,seq__9026_9048__$1);
var __9055 = cljs.core.nth.call(null,vec__9033_9054,(0),null);
var spec_9056__$1 = cljs.core.nth.call(null,vec__9033_9054,(1),null);
cljs.core.swap_BANG_.call(null,deps,cljs.core.conj,spec_9056__$1);

var G__9057 = cljs.core.next.call(null,seq__9026_9048__$1);
var G__9058 = null;
var G__9059 = (0);
var G__9060 = (0);
seq__9026_9036 = G__9057;
chunk__9027_9037 = G__9058;
count__9028_9038 = G__9059;
i__9029_9039 = G__9060;
continue;
}
} else {
}
}
break;
}

return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$import,import_map,cljs.core.cst$kw$require,import_map], null);
});
/**
 * Given a spec form check whether the spec namespace requires a macro file
 * of the same name. If so return true.
 */
cljs.analyzer.macro_autoload_ns_QMARK_ = (function cljs$analyzer$macro_autoload_ns_QMARK_(form){
if(cljs.core.truth_(cljs.analyzer._STAR_macro_infer_STAR_)){
var ns = ((cljs.core.sequential_QMARK_.call(null,form))?cljs.core.first.call(null,form):form);
var map__9063 = cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,ns], null));
var map__9063__$1 = ((((!((map__9063 == null)))?((((map__9063.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9063.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9063):map__9063);
var use_macros = cljs.core.get.call(null,map__9063__$1,cljs.core.cst$kw$use_DASH_macros);
var require_macros = cljs.core.get.call(null,map__9063__$1,cljs.core.cst$kw$require_DASH_macros);
var or__6409__auto__ = cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([ns], true),cljs.core.vals.call(null,use_macros));
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([ns], true),cljs.core.vals.call(null,require_macros));
}
} else {
return null;
}
});
/**
 * Given a symbol that starts with clojure as the first segment return the
 * same symbol with the first segment replaced with cljs
 */
cljs.analyzer.clj_ns__GT_cljs_ns = (function cljs$analyzer$clj_ns__GT_cljs_ns(sym){
var segs = clojure.string.split.call(null,cljs.core.name.call(null,sym),/\./);
if(cljs.core._EQ_.call(null,"clojure",cljs.core.first.call(null,segs))){
return cljs.core.symbol.call(null,clojure.string.join.call(null,".",cljs.core.cons.call(null,"cljs",cljs.core.next.call(null,segs))));
} else {
return sym;
}
});
/**
 * Given an original set of ns specs desugar :include-macros and :refer-macros
 * usage into only primitive spec forms - :use, :require, :use-macros,
 * :require-macros. If a library includes a macro file of with the same name
 * as the namespace will also be desugared.
 */
cljs.analyzer.desugar_ns_specs = (function cljs$analyzer$desugar_ns_specs(args){
var map__9078 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__9079){
var vec__9080 = p__9079;
var seq__9081 = cljs.core.seq.call(null,vec__9080);
var first__9082 = cljs.core.first.call(null,seq__9081);
var seq__9081__$1 = cljs.core.next.call(null,seq__9081);
var k = first__9082;
var specs = seq__9081__$1;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,specs)], null);
}),args));
var map__9078__$1 = ((((!((map__9078 == null)))?((((map__9078.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9078.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9078):map__9078);
var indexed = map__9078__$1;
var require = cljs.core.get.call(null,map__9078__$1,cljs.core.cst$kw$require);
var sugar_keys = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$include_DASH_macros,null,cljs.core.cst$kw$refer_DASH_macros,null], null), null);
var remove_from_spec = ((function (map__9078,map__9078__$1,indexed,require,sugar_keys){
return (function (pred,spec){
while(true){
if(cljs.core.not.call(null,(function (){var and__6397__auto__ = cljs.core.sequential_QMARK_.call(null,spec);
if(and__6397__auto__){
return cljs.core.some.call(null,pred,spec);
} else {
return and__6397__auto__;
}
})())){
return spec;
} else {
var vec__9084 = cljs.core.split_with.call(null,cljs.core.complement.call(null,pred),spec);
var l = cljs.core.nth.call(null,vec__9084,(0),null);
var r = cljs.core.nth.call(null,vec__9084,(1),null);
var G__9090 = pred;
var G__9091 = cljs.core.concat.call(null,l,cljs.core.drop.call(null,(2),r));
pred = G__9090;
spec = G__9091;
continue;
}
break;
}
});})(map__9078,map__9078__$1,indexed,require,sugar_keys))
;
var replace_refer_macros = ((function (map__9078,map__9078__$1,indexed,require,sugar_keys,remove_from_spec){
return (function (spec){
if(!(cljs.core.sequential_QMARK_.call(null,spec))){
return spec;
} else {
return cljs.core.map.call(null,((function (map__9078,map__9078__$1,indexed,require,sugar_keys,remove_from_spec){
return (function (x){
if(cljs.core._EQ_.call(null,x,cljs.core.cst$kw$refer_DASH_macros)){
return cljs.core.cst$kw$refer;
} else {
return x;
}
});})(map__9078,map__9078__$1,indexed,require,sugar_keys,remove_from_spec))
,spec);
}
});})(map__9078,map__9078__$1,indexed,require,sugar_keys,remove_from_spec))
;
var reload_spec_QMARK_ = ((function (map__9078,map__9078__$1,indexed,require,sugar_keys,remove_from_spec,replace_refer_macros){
return (function (p1__9065_SHARP_){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$reload,null,cljs.core.cst$kw$reload_DASH_all,null], null), null).call(null,p1__9065_SHARP_);
});})(map__9078,map__9078__$1,indexed,require,sugar_keys,remove_from_spec,replace_refer_macros))
;
var to_macro_specs = ((function (map__9078,map__9078__$1,indexed,require,sugar_keys,remove_from_spec,replace_refer_macros,reload_spec_QMARK_){
return (function (specs){
return cljs.core.map.call(null,((function (map__9078,map__9078__$1,indexed,require,sugar_keys,remove_from_spec,replace_refer_macros,reload_spec_QMARK_){
return (function (x){
if(cljs.core.not.call(null,reload_spec_QMARK_.call(null,x))){
return replace_refer_macros.call(null,remove_from_spec.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rename,null], null), null),remove_from_spec.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$refer,null], null), null),remove_from_spec.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$include_DASH_macros,null], null), null),x))));
} else {
return x;
}
});})(map__9078,map__9078__$1,indexed,require,sugar_keys,remove_from_spec,replace_refer_macros,reload_spec_QMARK_))
,cljs.core.filter.call(null,((function (map__9078,map__9078__$1,indexed,require,sugar_keys,remove_from_spec,replace_refer_macros,reload_spec_QMARK_){
return (function (x){
var or__6409__auto__ = (function (){var and__6397__auto__ = cljs.core.sequential_QMARK_.call(null,x);
if(and__6397__auto__){
return cljs.core.some.call(null,sugar_keys,x);
} else {
return and__6397__auto__;
}
})();
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
var or__6409__auto____$1 = reload_spec_QMARK_.call(null,x);
if(cljs.core.truth_(or__6409__auto____$1)){
return or__6409__auto____$1;
} else {
return cljs.analyzer.macro_autoload_ns_QMARK_.call(null,x);
}
}
});})(map__9078,map__9078__$1,indexed,require,sugar_keys,remove_from_spec,replace_refer_macros,reload_spec_QMARK_))
,specs));
});})(map__9078,map__9078__$1,indexed,require,sugar_keys,remove_from_spec,replace_refer_macros,reload_spec_QMARK_))
;
var remove_sugar = cljs.core.partial.call(null,remove_from_spec,sugar_keys);
var temp__4655__auto__ = cljs.core.seq.call(null,to_macro_specs.call(null,require));
if(temp__4655__auto__){
var require_specs = temp__4655__auto__;
return cljs.core.map.call(null,((function (require_specs,temp__4655__auto__,map__9078,map__9078__$1,indexed,require,sugar_keys,remove_from_spec,replace_refer_macros,reload_spec_QMARK_,to_macro_specs,remove_sugar){
return (function (x){
if(cljs.core.not.call(null,reload_spec_QMARK_.call(null,x))){
var vec__9087 = x;
var k = cljs.core.nth.call(null,vec__9087,(0),null);
var v = cljs.core.nth.call(null,vec__9087,(1),null);
return cljs.core.cons.call(null,k,cljs.core.map.call(null,remove_sugar,v));
} else {
return x;
}
});})(require_specs,temp__4655__auto__,map__9078,map__9078__$1,indexed,require,sugar_keys,remove_from_spec,replace_refer_macros,reload_spec_QMARK_,to_macro_specs,remove_sugar))
,cljs.core.update_in.call(null,indexed,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$require_DASH_macros], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentVector.EMPTY),require_specs));
} else {
return args;
}
});
cljs.analyzer.find_def_clash = (function cljs$analyzer$find_def_clash(env,ns,segments){
var to_check = cljs.core.map.call(null,(function (xs){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.call(null,clojure.string.join.call(null,".",cljs.core.butlast.call(null,xs))),cljs.core.symbol.call(null,cljs.core.last.call(null,xs))], null);
}),cljs.core.drop.call(null,(2),cljs.core.reductions.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY,segments)));
var seq__9102 = cljs.core.seq.call(null,to_check);
var chunk__9103 = null;
var count__9104 = (0);
var i__9105 = (0);
while(true){
if((i__9105 < count__9104)){
var vec__9106 = cljs.core._nth.call(null,chunk__9103,i__9105);
var clash_ns = cljs.core.nth.call(null,vec__9106,(0),null);
var name = cljs.core.nth.call(null,vec__9106,(1),null);
if(cljs.core.truth_(cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,clash_ns,cljs.core.cst$kw$defs,name], null)))){
cljs.analyzer.warning.call(null,cljs.core.cst$kw$ns_DASH_var_DASH_clash,env,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ns,ns,cljs.core.cst$kw$var,cljs.core.symbol.call(null,[cljs.core.str(clash_ns)].join(''),[cljs.core.str(name)].join(''))], null));
} else {
}

var G__9112 = seq__9102;
var G__9113 = chunk__9103;
var G__9114 = count__9104;
var G__9115 = (i__9105 + (1));
seq__9102 = G__9112;
chunk__9103 = G__9113;
count__9104 = G__9114;
i__9105 = G__9115;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__9102);
if(temp__4657__auto__){
var seq__9102__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9102__$1)){
var c__7220__auto__ = cljs.core.chunk_first.call(null,seq__9102__$1);
var G__9116 = cljs.core.chunk_rest.call(null,seq__9102__$1);
var G__9117 = c__7220__auto__;
var G__9118 = cljs.core.count.call(null,c__7220__auto__);
var G__9119 = (0);
seq__9102 = G__9116;
chunk__9103 = G__9117;
count__9104 = G__9118;
i__9105 = G__9119;
continue;
} else {
var vec__9109 = cljs.core.first.call(null,seq__9102__$1);
var clash_ns = cljs.core.nth.call(null,vec__9109,(0),null);
var name = cljs.core.nth.call(null,vec__9109,(1),null);
if(cljs.core.truth_(cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,clash_ns,cljs.core.cst$kw$defs,name], null)))){
cljs.analyzer.warning.call(null,cljs.core.cst$kw$ns_DASH_var_DASH_clash,env,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ns,ns,cljs.core.cst$kw$var,cljs.core.symbol.call(null,[cljs.core.str(clash_ns)].join(''),[cljs.core.str(name)].join(''))], null));
} else {
}

var G__9120 = cljs.core.next.call(null,seq__9102__$1);
var G__9121 = null;
var G__9122 = (0);
var G__9123 = (0);
seq__9102 = G__9120;
chunk__9103 = G__9121;
count__9104 = G__9122;
i__9105 = G__9123;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.analyzer.macro_ns_name = (function cljs$analyzer$macro_ns_name(name){
var name_str = [cljs.core.str(name)].join('');
if(cljs.core.not.call(null,goog.string.endsWith(name_str,"$macros"))){
return cljs.core.symbol.call(null,[cljs.core.str(name_str),cljs.core.str("$macros")].join(''));
} else {
return name;
}
});
cljs.core._add_method.call(null,cljs.analyzer.parse,cljs.core.cst$sym$ns,(function (_,env,p__9126,___$1,opts){
var vec__9127 = p__9126;
var seq__9128 = cljs.core.seq.call(null,vec__9127);
var first__9129 = cljs.core.first.call(null,seq__9128);
var seq__9128__$1 = cljs.core.next.call(null,seq__9128);
var ___$2 = first__9129;
var first__9129__$1 = cljs.core.first.call(null,seq__9128__$1);
var seq__9128__$2 = cljs.core.next.call(null,seq__9128__$1);
var name = first__9129__$1;
var args = seq__9128__$2;
var form = vec__9127;
if((name instanceof cljs.core.Symbol)){
} else {
throw cljs.analyzer.error.call(null,env,"Namespaces must be named by a symbol.");
}

var name__$1 = (function (){var G__9130 = name;
if(cljs.core.truth_(cljs.core.cst$kw$macros_DASH_ns.cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.analyzer.macro_ns_name.call(null,G__9130);
} else {
return G__9130;
}
})();
var segments_9148 = clojure.string.split.call(null,cljs.core.name.call(null,name__$1),/\./);
if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,segments_9148))){
cljs.analyzer.warning.call(null,cljs.core.cst$kw$single_DASH_segment_DASH_namespace,env,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,name__$1], null));
} else {
}

if(cljs.core.truth_(cljs.core.some.call(null,cljs.analyzer.js_reserved,segments_9148))){
cljs.analyzer.warning.call(null,cljs.core.cst$kw$munged_DASH_namespace,env,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,name__$1], null));
} else {
}

cljs.analyzer.find_def_clash.call(null,env,name__$1,segments_9148);

var docstring = ((typeof cljs.core.first.call(null,args) === 'string')?cljs.core.first.call(null,args):null);
var mdocstr = cljs.core.cst$kw$doc.cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,name__$1));
var args__$1 = (cljs.core.truth_(docstring)?cljs.core.next.call(null,args):args);
var metadata = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args__$1)))?cljs.core.first.call(null,args__$1):null);
var form_meta = cljs.core.meta.call(null,form);
var args__$2 = cljs.analyzer.desugar_ns_specs.call(null,(cljs.core.truth_(metadata)?cljs.core.next.call(null,args__$1):args__$1));
var name__$2 = cljs.core.vary_meta.call(null,name__$1,cljs.core.merge,metadata);
var map__9131 = cljs.analyzer.parse_ns_excludes.call(null,env,args__$2);
var map__9131__$1 = ((((!((map__9131 == null)))?((((map__9131.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9131.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9131):map__9131);
var excludes = cljs.core.get.call(null,map__9131__$1,cljs.core.cst$kw$excludes);
var core_renames = cljs.core.get.call(null,map__9131__$1,cljs.core.cst$kw$renames);
var core_renames__$1 = cljs.core.reduce.call(null,((function (docstring,mdocstr,args__$1,metadata,form_meta,args__$2,name__$2,map__9131,map__9131__$1,excludes,core_renames,name__$1,vec__9127,seq__9128,first__9129,seq__9128__$1,___$2,first__9129__$1,seq__9128__$2,name,args,form){
return (function (m,p__9134){
var vec__9135 = p__9134;
var original = cljs.core.nth.call(null,vec__9135,(0),null);
var renamed = cljs.core.nth.call(null,vec__9135,(1),null);
return cljs.core.assoc.call(null,m,renamed,cljs.core.symbol.call(null,"cljs.core",[cljs.core.str(original)].join('')));
});})(docstring,mdocstr,args__$1,metadata,form_meta,args__$2,name__$2,map__9131,map__9131__$1,excludes,core_renames,name__$1,vec__9127,seq__9128,first__9129,seq__9128__$1,___$2,first__9129__$1,seq__9128__$2,name,args,form))
,cljs.core.PersistentArrayMap.EMPTY,core_renames);
var deps = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
var aliases = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fns,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$macros,cljs.core.PersistentArrayMap.EMPTY], null));
var spec_parsers = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$require,cljs.core.partial.call(null,cljs.analyzer.parse_require_spec,env,false,deps,aliases),cljs.core.cst$kw$require_DASH_macros,cljs.core.partial.call(null,cljs.analyzer.parse_require_spec,env,true,deps,aliases),cljs.core.cst$kw$use,cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.analyzer.parse_require_spec,env,false,deps,aliases),cljs.core.partial.call(null,cljs.analyzer.use__GT_require,env)),cljs.core.cst$kw$use_DASH_macros,cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.analyzer.parse_require_spec,env,true,deps,aliases),cljs.core.partial.call(null,cljs.analyzer.use__GT_require,env)),cljs.core.cst$kw$import,cljs.core.partial.call(null,cljs.analyzer.parse_import_spec,env,deps)], null);
var valid_forms = cljs.core.atom.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$use_DASH_macros,null,cljs.core.cst$kw$use,null,cljs.core.cst$kw$require,null,cljs.core.cst$kw$require_DASH_macros,null,cljs.core.cst$kw$import,null], null), null));
var reload = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$use,null,cljs.core.cst$kw$require,null,cljs.core.cst$kw$use_DASH_macros,null,cljs.core.cst$kw$require_DASH_macros,null], null));
var reloads = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var map__9132 = cljs.core.reduce.call(null,((function (docstring,mdocstr,args__$1,metadata,form_meta,args__$2,name__$2,map__9131,map__9131__$1,excludes,core_renames,core_renames__$1,deps,aliases,spec_parsers,valid_forms,reload,reloads,name__$1,vec__9127,seq__9128,first__9129,seq__9128__$1,___$2,first__9129__$1,seq__9128__$2,name,args,form){
return (function (m,p__9138){
var vec__9139 = p__9138;
var seq__9140 = cljs.core.seq.call(null,vec__9139);
var first__9141 = cljs.core.first.call(null,seq__9140);
var seq__9140__$1 = cljs.core.next.call(null,seq__9140);
var k = first__9141;
var libs = seq__9140__$1;
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$use_DASH_macros,null,cljs.core.cst$kw$use,null,cljs.core.cst$kw$require,null,cljs.core.cst$kw$require_DASH_macros,null,cljs.core.cst$kw$import,null], null), null).call(null,k))){
} else {
throw cljs.analyzer.error.call(null,env,"Only :refer-clojure, :require, :require-macros, :use, :use-macros, and :import libspecs supported");
}

if(cljs.core.truth_(cljs.core.deref.call(null,valid_forms).call(null,k))){
} else {
throw cljs.analyzer.error.call(null,env,[cljs.core.str("Only one "),cljs.core.str(k),cljs.core.str(" form is allowed per namespace definition")].join(''));
}

cljs.core.swap_BANG_.call(null,valid_forms,cljs.core.disj,k);

if(cljs.core._EQ_.call(null,cljs.core.cst$kw$import,k)){
} else {
if(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$reload,null], null), null),libs))){
cljs.core.swap_BANG_.call(null,reload,cljs.core.assoc,k,cljs.core.cst$kw$reload);
} else {
}

if(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$reload_DASH_all,null], null), null),libs))){
cljs.core.swap_BANG_.call(null,reload,cljs.core.assoc,k,cljs.core.cst$kw$reload_DASH_all);
} else {
}
}

var temp__4657__auto___9149 = cljs.core.seq.call(null,cljs.core.filter.call(null,((function (vec__9139,seq__9140,first__9141,seq__9140__$1,k,libs,docstring,mdocstr,args__$1,metadata,form_meta,args__$2,name__$2,map__9131,map__9131__$1,excludes,core_renames,core_renames__$1,deps,aliases,spec_parsers,valid_forms,reload,reloads,name__$1,vec__9127,seq__9128,first__9129,seq__9128__$1,___$2,first__9129__$1,seq__9128__$2,name,args,form){
return (function (p1__9124_SHARP_){
return cljs.core.cst$kw$reload.cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,p1__9124_SHARP_));
});})(vec__9139,seq__9140,first__9141,seq__9140__$1,k,libs,docstring,mdocstr,args__$1,metadata,form_meta,args__$2,name__$2,map__9131,map__9131__$1,excludes,core_renames,core_renames__$1,deps,aliases,spec_parsers,valid_forms,reload,reloads,name__$1,vec__9127,seq__9128,first__9129,seq__9128__$1,___$2,first__9129__$1,seq__9128__$2,name,args,form))
,libs));
if(temp__4657__auto___9149){
var xs_9150 = temp__4657__auto___9149;
cljs.core.swap_BANG_.call(null,reloads,cljs.core.assoc,k,cljs.core.zipmap.call(null,cljs.core.map.call(null,cljs.core.first,xs_9150),cljs.core.map.call(null,((function (xs_9150,temp__4657__auto___9149,vec__9139,seq__9140,first__9141,seq__9140__$1,k,libs,docstring,mdocstr,args__$1,metadata,form_meta,args__$2,name__$2,map__9131,map__9131__$1,excludes,core_renames,core_renames__$1,deps,aliases,spec_parsers,valid_forms,reload,reloads,name__$1,vec__9127,seq__9128,first__9129,seq__9128__$1,___$2,first__9129__$1,seq__9128__$2,name,args,form){
return (function (p1__9125_SHARP_){
return cljs.core.cst$kw$reload.cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,p1__9125_SHARP_));
});})(xs_9150,temp__4657__auto___9149,vec__9139,seq__9140,first__9141,seq__9140__$1,k,libs,docstring,mdocstr,args__$1,metadata,form_meta,args__$2,name__$2,map__9131,map__9131__$1,excludes,core_renames,core_renames__$1,deps,aliases,spec_parsers,valid_forms,reload,reloads,name__$1,vec__9127,seq__9128,first__9129,seq__9128__$1,___$2,first__9129__$1,seq__9128__$2,name,args,form))
,xs_9150)));
} else {
}

return cljs.core.apply.call(null,cljs.core.merge_with,cljs.core.merge,m,cljs.core.map.call(null,spec_parsers.call(null,k),cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$reload,null,cljs.core.cst$kw$reload_DASH_all,null], null), null),libs)));
});})(docstring,mdocstr,args__$1,metadata,form_meta,args__$2,name__$2,map__9131,map__9131__$1,excludes,core_renames,core_renames__$1,deps,aliases,spec_parsers,valid_forms,reload,reloads,name__$1,vec__9127,seq__9128,first__9129,seq__9128__$1,___$2,first__9129__$1,seq__9128__$2,name,args,form))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.call(null,((function (docstring,mdocstr,args__$1,metadata,form_meta,args__$2,name__$2,map__9131,map__9131__$1,excludes,core_renames,core_renames__$1,deps,aliases,spec_parsers,valid_forms,reload,reloads,name__$1,vec__9127,seq__9128,first__9129,seq__9128__$1,___$2,first__9129__$1,seq__9128__$2,name,args,form){
return (function (p__9142){
var vec__9143 = p__9142;
var r = cljs.core.nth.call(null,vec__9143,(0),null);
return cljs.core._EQ_.call(null,r,cljs.core.cst$kw$refer_DASH_clojure);
});})(docstring,mdocstr,args__$1,metadata,form_meta,args__$2,name__$2,map__9131,map__9131__$1,excludes,core_renames,core_renames__$1,deps,aliases,spec_parsers,valid_forms,reload,reloads,name__$1,vec__9127,seq__9128,first__9129,seq__9128__$1,___$2,first__9129__$1,seq__9128__$2,name,args,form))
,args__$2));
var map__9132__$1 = ((((!((map__9132 == null)))?((((map__9132.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9132.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9132):map__9132);
var params = map__9132__$1;
var uses = cljs.core.get.call(null,map__9132__$1,cljs.core.cst$kw$use);
var requires = cljs.core.get.call(null,map__9132__$1,cljs.core.cst$kw$require);
var renames = cljs.core.get.call(null,map__9132__$1,cljs.core.cst$kw$rename);
var use_macros = cljs.core.get.call(null,map__9132__$1,cljs.core.cst$kw$use_DASH_macros);
var require_macros = cljs.core.get.call(null,map__9132__$1,cljs.core.cst$kw$require_DASH_macros);
var rename_macros = cljs.core.get.call(null,map__9132__$1,cljs.core.cst$kw$rename_DASH_macros);
var imports = cljs.core.get.call(null,map__9132__$1,cljs.core.cst$kw$import);
cljs.analyzer._STAR_cljs_ns_STAR_ = name__$2;

var ns_info = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$rename_DASH_macros,cljs.core.cst$kw$renames,cljs.core.cst$kw$use_DASH_macros,cljs.core.cst$kw$excludes,cljs.core.cst$kw$name,cljs.core.cst$kw$imports,cljs.core.cst$kw$requires,cljs.core.cst$kw$uses,cljs.core.cst$kw$require_DASH_macros,cljs.core.cst$kw$doc],[rename_macros,cljs.core.merge.call(null,renames,core_renames__$1),use_macros,excludes,name__$2,imports,requires,uses,require_macros,(function (){var or__6409__auto__ = docstring;
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return mdocstr;
}
})()]);
var ns_info__$1 = (cljs.core.truth_(cljs.core.cst$kw$merge.cljs$core$IFn$_invoke$arity$1(form_meta))?(function (){var ns_info_SINGLEQUOTE_ = cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,name__$2], null));
if((cljs.core.count.call(null,ns_info_SINGLEQUOTE_) > (0))){
var merge_keys = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$use_DASH_macros,cljs.core.cst$kw$require_DASH_macros,cljs.core.cst$kw$rename_DASH_macros,cljs.core.cst$kw$uses,cljs.core.cst$kw$requires,cljs.core.cst$kw$renames,cljs.core.cst$kw$imports], null);
return cljs.core.merge.call(null,ns_info_SINGLEQUOTE_,cljs.core.merge_with.call(null,cljs.core.merge,cljs.core.select_keys.call(null,ns_info_SINGLEQUOTE_,merge_keys),cljs.core.select_keys.call(null,ns_info,merge_keys)));
} else {
return ns_info;
}
})():ns_info);
cljs.core.swap_BANG_.call(null,cljs.env._STAR_compiler_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,name__$2], null),cljs.core.merge,ns_info__$1);

return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$op,cljs.core.cst$kw$ns,cljs.core.cst$kw$env,env,cljs.core.cst$kw$form,form,cljs.core.cst$kw$deps,cljs.core.deref.call(null,deps),cljs.core.cst$kw$reload,cljs.core.deref.call(null,reload),cljs.core.cst$kw$reloads,cljs.core.deref.call(null,reloads)], null),(function (){var G__9147 = ns_info__$1;
var G__9147__$1 = (cljs.core.truth_(cljs.core.deref.call(null,reload).call(null,cljs.core.cst$kw$use))?cljs.core.update_in.call(null,G__9147,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$uses], null),((function (G__9147,ns_info,ns_info__$1,docstring,mdocstr,args__$1,metadata,form_meta,args__$2,name__$2,map__9131,map__9131__$1,excludes,core_renames,core_renames__$1,deps,aliases,spec_parsers,valid_forms,reload,reloads,map__9132,map__9132__$1,params,uses,requires,renames,use_macros,require_macros,rename_macros,imports,name__$1,vec__9127,seq__9128,first__9129,seq__9128__$1,___$2,first__9129__$1,seq__9128__$2,name,args,form){
return (function (m){
return cljs.core.with_meta.call(null,m,cljs.core.PersistentArrayMap.fromArray([cljs.core.deref.call(null,reload).call(null,cljs.core.cst$kw$use),true], true, false));
});})(G__9147,ns_info,ns_info__$1,docstring,mdocstr,args__$1,metadata,form_meta,args__$2,name__$2,map__9131,map__9131__$1,excludes,core_renames,core_renames__$1,deps,aliases,spec_parsers,valid_forms,reload,reloads,map__9132,map__9132__$1,params,uses,requires,renames,use_macros,require_macros,rename_macros,imports,name__$1,vec__9127,seq__9128,first__9129,seq__9128__$1,___$2,first__9129__$1,seq__9128__$2,name,args,form))
):G__9147);
if(cljs.core.truth_(cljs.core.deref.call(null,reload).call(null,cljs.core.cst$kw$require))){
return cljs.core.update_in.call(null,G__9147__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$requires], null),((function (G__9147,G__9147__$1,ns_info,ns_info__$1,docstring,mdocstr,args__$1,metadata,form_meta,args__$2,name__$2,map__9131,map__9131__$1,excludes,core_renames,core_renames__$1,deps,aliases,spec_parsers,valid_forms,reload,reloads,map__9132,map__9132__$1,params,uses,requires,renames,use_macros,require_macros,rename_macros,imports,name__$1,vec__9127,seq__9128,first__9129,seq__9128__$1,___$2,first__9129__$1,seq__9128__$2,name,args,form){
return (function (m){
return cljs.core.with_meta.call(null,m,cljs.core.PersistentArrayMap.fromArray([cljs.core.deref.call(null,reload).call(null,cljs.core.cst$kw$require),true], true, false));
});})(G__9147,G__9147__$1,ns_info,ns_info__$1,docstring,mdocstr,args__$1,metadata,form_meta,args__$2,name__$2,map__9131,map__9131__$1,excludes,core_renames,core_renames__$1,deps,aliases,spec_parsers,valid_forms,reload,reloads,map__9132,map__9132__$1,params,uses,requires,renames,use_macros,require_macros,rename_macros,imports,name__$1,vec__9127,seq__9128,first__9129,seq__9128__$1,___$2,first__9129__$1,seq__9128__$2,name,args,form))
);
} else {
return G__9147__$1;
}
})());
}));
cljs.analyzer.parse_type = (function cljs$analyzer$parse_type(op,env,p__9151){
var vec__9155 = p__9151;
var _ = cljs.core.nth.call(null,vec__9155,(0),null);
var tsym = cljs.core.nth.call(null,vec__9155,(1),null);
var fields = cljs.core.nth.call(null,vec__9155,(2),null);
var pmasks = cljs.core.nth.call(null,vec__9155,(3),null);
var body = cljs.core.nth.call(null,vec__9155,(4),null);
var form = vec__9155;
var t = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,env,cljs.core.cst$kw$locals),tsym));
var locals = cljs.core.reduce.call(null,((function (t,vec__9155,_,tsym,fields,pmasks,body,form){
return (function (m,fld){
return cljs.core.assoc.call(null,m,fld,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$name,cljs.core.cst$kw$field,cljs.core.cst$kw$column,cljs.core.cst$kw$unsynchronized_DASH_mutable,cljs.core.cst$kw$line,cljs.core.cst$kw$tag,cljs.core.cst$kw$mutable,cljs.core.cst$kw$volatile_DASH_mutable,cljs.core.cst$kw$shadow],[fld,true,cljs.analyzer.get_col.call(null,fld,env),cljs.core.cst$kw$unsynchronized_DASH_mutable.cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,fld)),cljs.analyzer.get_line.call(null,fld,env),cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,fld)),cljs.core.cst$kw$mutable.cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,fld)),cljs.core.cst$kw$volatile_DASH_mutable.cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,fld)),m.call(null,fld)]));
});})(t,vec__9155,_,tsym,fields,pmasks,body,form))
,cljs.core.PersistentArrayMap.EMPTY,((cljs.core._EQ_.call(null,cljs.core.cst$kw$defrecord_STAR_,op))?cljs.core.concat.call(null,fields,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$__meta,cljs.core.cst$sym$__extmap,cljs.core.with_meta(cljs.core.cst$sym$__hash,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mutable,true], null))], null)):fields));
var protocols = cljs.core.cst$kw$protocols.cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,tsym));
cljs.core.swap_BANG_.call(null,cljs.env._STAR_compiler_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(env)),cljs.core.cst$kw$defs,tsym], null),((function (t,locals,protocols,vec__9155,_,tsym,fields,pmasks,body,form){
return (function (m){
var m__$1 = cljs.core.assoc.call(null,(function (){var or__6409__auto__ = m;
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),cljs.core.cst$kw$name,t,cljs.core.cst$kw$type,true,cljs.core.cst$kw$num_DASH_fields,cljs.core.count.call(null,fields),cljs.core.cst$kw$record,cljs.core._EQ_.call(null,cljs.core.cst$kw$defrecord_STAR_,op));
return cljs.core.merge.call(null,m__$1,cljs.core.dissoc.call(null,cljs.core.meta.call(null,tsym),cljs.core.cst$kw$protocols),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$protocols,protocols], null),cljs.analyzer.source_info.call(null,tsym,env));
});})(t,locals,protocols,vec__9155,_,tsym,fields,pmasks,body,form))
);

return new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$op,op,cljs.core.cst$kw$env,env,cljs.core.cst$kw$form,form,cljs.core.cst$kw$t,t,cljs.core.cst$kw$fields,fields,cljs.core.cst$kw$pmasks,pmasks,cljs.core.cst$kw$protocols,cljs.core.disj.call(null,protocols,cljs.core.cst$sym$cljs$core_SLASH_Object),cljs.core.cst$kw$body,cljs.analyzer.analyze.call(null,cljs.core.assoc.call(null,env,cljs.core.cst$kw$locals,locals),body)], null);
});
cljs.core._add_method.call(null,cljs.analyzer.parse,cljs.core.cst$sym$deftype_STAR_,(function (_,env,form,___$1,___$2){
return cljs.analyzer.parse_type.call(null,cljs.core.cst$kw$deftype_STAR_,env,form);
}));
cljs.core._add_method.call(null,cljs.analyzer.parse,cljs.core.cst$sym$defrecord_STAR_,(function (_,env,form,___$1,___$2){
return cljs.analyzer.parse_type.call(null,cljs.core.cst$kw$defrecord_STAR_,env,form);
}));
cljs.analyzer.property_symbol_QMARK_ = (function cljs$analyzer$property_symbol_QMARK_(p1__9158_SHARP_){
return cljs.core.boolean$.call(null,(function (){var and__6397__auto__ = (p1__9158_SHARP_ instanceof cljs.core.Symbol);
if(and__6397__auto__){
return cljs.core.re_matches.call(null,/^-.*/,cljs.core.name.call(null,p1__9158_SHARP_));
} else {
return and__6397__auto__;
}
})());
});
cljs.analyzer.classify_dot_form = (function cljs$analyzer$classify_dot_form(p__9159){
var vec__9163 = p__9159;
var target = cljs.core.nth.call(null,vec__9163,(0),null);
var member = cljs.core.nth.call(null,vec__9163,(1),null);
var args = cljs.core.nth.call(null,vec__9163,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((target == null))?cljs.core.cst$kw$cljs$analyzer_SLASH_error:cljs.core.cst$kw$cljs$analyzer_SLASH_expr
),(cljs.core.truth_(cljs.analyzer.property_symbol_QMARK_.call(null,member))?cljs.core.cst$kw$cljs$analyzer_SLASH_property:(((member instanceof cljs.core.Symbol))?cljs.core.cst$kw$cljs$analyzer_SLASH_symbol:((cljs.core.seq_QMARK_.call(null,member))?cljs.core.cst$kw$cljs$analyzer_SLASH_list:cljs.core.cst$kw$cljs$analyzer_SLASH_error
))),(((args == null))?cljs.core.List.EMPTY:cljs.core.cst$kw$cljs$analyzer_SLASH_expr
)], null);
});
if(typeof cljs.analyzer.build_dot_form !== 'undefined'){
} else {
cljs.analyzer.build_dot_form = (function (){var method_table__7334__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__7335__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__7336__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__7337__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__7338__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.analyzer","build-dot-form"),((function (method_table__7334__auto__,prefer_table__7335__auto__,method_cache__7336__auto__,cached_hierarchy__7337__auto__,hierarchy__7338__auto__){
return (function (p1__9166_SHARP_){
return cljs.analyzer.classify_dot_form.call(null,p1__9166_SHARP_);
});})(method_table__7334__auto__,prefer_table__7335__auto__,method_cache__7336__auto__,cached_hierarchy__7337__auto__,hierarchy__7338__auto__))
,cljs.core.cst$kw$default,hierarchy__7338__auto__,method_table__7334__auto__,prefer_table__7335__auto__,method_cache__7336__auto__,cached_hierarchy__7337__auto__));
})();
}
cljs.core._add_method.call(null,cljs.analyzer.build_dot_form,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_expr,cljs.core.cst$kw$cljs$analyzer_SLASH_property,cljs.core.List.EMPTY], null),(function (p__9167){
var vec__9168 = p__9167;
var target = cljs.core.nth.call(null,vec__9168,(0),null);
var prop = cljs.core.nth.call(null,vec__9168,(1),null);
var _ = cljs.core.nth.call(null,vec__9168,(2),null);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$dot_DASH_action,cljs.core.cst$kw$cljs$analyzer_SLASH_access,cljs.core.cst$kw$target,target,cljs.core.cst$kw$field,cljs.core.symbol.call(null,cljs.core.name.call(null,prop).substring((1)))], null);
}));
cljs.core._add_method.call(null,cljs.analyzer.build_dot_form,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_expr,cljs.core.cst$kw$cljs$analyzer_SLASH_property,cljs.core.cst$kw$cljs$analyzer_SLASH_list], null),(function (p__9171){
var vec__9172 = p__9171;
var target = cljs.core.nth.call(null,vec__9172,(0),null);
var prop = cljs.core.nth.call(null,vec__9172,(1),null);
var args = cljs.core.nth.call(null,vec__9172,(2),null);
throw (new Error([cljs.core.str("Cannot provide arguments "),cljs.core.str(args),cljs.core.str(" on property access "),cljs.core.str(prop)].join('')));
}));
/**
 * Builds the intermediate method call map used to reason about the parsed form during
 *   compilation.
 */
cljs.analyzer.build_method_call = (function cljs$analyzer$build_method_call(target,meth,args){
if((meth instanceof cljs.core.Symbol)){
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$dot_DASH_action,cljs.core.cst$kw$cljs$analyzer_SLASH_call,cljs.core.cst$kw$target,target,cljs.core.cst$kw$method,meth,cljs.core.cst$kw$args,args], null);
} else {
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$dot_DASH_action,cljs.core.cst$kw$cljs$analyzer_SLASH_call,cljs.core.cst$kw$target,target,cljs.core.cst$kw$method,cljs.core.first.call(null,meth),cljs.core.cst$kw$args,args], null);
}
});
cljs.core._add_method.call(null,cljs.analyzer.build_dot_form,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_expr,cljs.core.cst$kw$cljs$analyzer_SLASH_symbol,cljs.core.cst$kw$cljs$analyzer_SLASH_expr], null),(function (p__9175){
var vec__9176 = p__9175;
var target = cljs.core.nth.call(null,vec__9176,(0),null);
var meth = cljs.core.nth.call(null,vec__9176,(1),null);
var args = cljs.core.nth.call(null,vec__9176,(2),null);
return cljs.analyzer.build_method_call.call(null,target,meth,args);
}));
cljs.core._add_method.call(null,cljs.analyzer.build_dot_form,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_expr,cljs.core.cst$kw$cljs$analyzer_SLASH_symbol,cljs.core.List.EMPTY], null),(function (p__9179){
var vec__9180 = p__9179;
var target = cljs.core.nth.call(null,vec__9180,(0),null);
var meth = cljs.core.nth.call(null,vec__9180,(1),null);
var args = cljs.core.nth.call(null,vec__9180,(2),null);
return cljs.analyzer.build_method_call.call(null,target,meth,args);
}));
cljs.core._add_method.call(null,cljs.analyzer.build_dot_form,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_expr,cljs.core.cst$kw$cljs$analyzer_SLASH_list,cljs.core.List.EMPTY], null),(function (p__9183){
var vec__9184 = p__9183;
var target = cljs.core.nth.call(null,vec__9184,(0),null);
var meth_expr = cljs.core.nth.call(null,vec__9184,(1),null);
var _ = cljs.core.nth.call(null,vec__9184,(2),null);
return cljs.analyzer.build_method_call.call(null,target,cljs.core.first.call(null,meth_expr),cljs.core.rest.call(null,meth_expr));
}));
cljs.core._add_method.call(null,cljs.analyzer.build_dot_form,cljs.core.cst$kw$default,(function (dot_form){
throw (new Error([cljs.core.str("Unknown dot form of "),cljs.core.str(cljs.core.list_STAR_.call(null,cljs.core.cst$sym$_DOT_,dot_form)),cljs.core.str(" with classification "),cljs.core.str(cljs.analyzer.classify_dot_form.call(null,dot_form))].join('')));
}));
cljs.analyzer.analyze_dot = (function cljs$analyzer$analyze_dot(env,target,field,member_PLUS_,form){
var v = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [target,field,member_PLUS_], null);
var map__9191 = cljs.analyzer.build_dot_form.call(null,v);
var map__9191__$1 = ((((!((map__9191 == null)))?((((map__9191.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9191.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9191):map__9191);
var dot_action = cljs.core.get.call(null,map__9191__$1,cljs.core.cst$kw$dot_DASH_action);
var target__$1 = cljs.core.get.call(null,map__9191__$1,cljs.core.cst$kw$target);
var method = cljs.core.get.call(null,map__9191__$1,cljs.core.cst$kw$method);
var field__$1 = cljs.core.get.call(null,map__9191__$1,cljs.core.cst$kw$field);
var args = cljs.core.get.call(null,map__9191__$1,cljs.core.cst$kw$args);
var enve = cljs.core.assoc.call(null,env,cljs.core.cst$kw$context,cljs.core.cst$kw$expr);
var targetexpr = cljs.analyzer.analyze.call(null,enve,target__$1);
var form_meta = cljs.core.meta.call(null,form);
var tag = cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(form_meta);
var G__9193 = (((dot_action instanceof cljs.core.Keyword))?dot_action.fqn:null);
switch (G__9193) {
case "cljs.analyzer/access":
var children = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [targetexpr], null);
return new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$op,cljs.core.cst$kw$dot,cljs.core.cst$kw$env,env,cljs.core.cst$kw$form,form,cljs.core.cst$kw$target,targetexpr,cljs.core.cst$kw$field,field__$1,cljs.core.cst$kw$children,children,cljs.core.cst$kw$tag,tag], null);

break;
case "cljs.analyzer/call":
var argexprs = cljs.core.map.call(null,((function (G__9193,v,map__9191,map__9191__$1,dot_action,target__$1,method,field__$1,args,enve,targetexpr,form_meta,tag){
return (function (p1__9187_SHARP_){
return cljs.analyzer.analyze.call(null,enve,p1__9187_SHARP_);
});})(G__9193,v,map__9191,map__9191__$1,dot_action,target__$1,method,field__$1,args,enve,targetexpr,form_meta,tag))
,args);
var children = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [targetexpr], null),argexprs);
return new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$op,cljs.core.cst$kw$dot,cljs.core.cst$kw$env,env,cljs.core.cst$kw$form,form,cljs.core.cst$kw$target,targetexpr,cljs.core.cst$kw$method,method,cljs.core.cst$kw$args,argexprs,cljs.core.cst$kw$children,children,cljs.core.cst$kw$tag,tag], null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(dot_action)].join('')));

}
});
cljs.core._add_method.call(null,cljs.analyzer.parse,cljs.core.cst$sym$_DOT_,(function (_,env,p__9195,___$1,___$2){
var vec__9196 = p__9195;
var seq__9197 = cljs.core.seq.call(null,vec__9196);
var first__9198 = cljs.core.first.call(null,seq__9197);
var seq__9197__$1 = cljs.core.next.call(null,seq__9197);
var ___$3 = first__9198;
var first__9198__$1 = cljs.core.first.call(null,seq__9197__$1);
var seq__9197__$2 = cljs.core.next.call(null,seq__9197__$1);
var target = first__9198__$1;
var vec__9199 = seq__9197__$2;
var seq__9200 = cljs.core.seq.call(null,vec__9199);
var first__9201 = cljs.core.first.call(null,seq__9200);
var seq__9200__$1 = cljs.core.next.call(null,seq__9200);
var field = first__9201;
var member_PLUS_ = seq__9200__$1;
var form = vec__9196;
var _STAR_recur_frames_STAR_9202 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = cljs.core.cons.call(null,null,cljs.analyzer._STAR_recur_frames_STAR_);

try{return cljs.analyzer.analyze_dot.call(null,env,target,field,member_PLUS_,form);
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_9202;
}}));
cljs.analyzer.get_js_tag = (function cljs$analyzer$get_js_tag(form){
var form_meta = cljs.core.meta.call(null,form);
var tag = cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(form_meta);
if(!((tag == null))){
return tag;
} else {
if(cljs.core.cst$kw$numeric.cljs$core$IFn$_invoke$arity$1(form_meta) === true){
return cljs.core.cst$sym$number;
} else {
return null;
}
}
});
cljs.analyzer.js_star_interp = (function cljs$analyzer$js_star_interp(env,s){
var idx = s.indexOf("~{");
if(((-1) === idx)){
var x__7243__auto__ = s;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
} else {
var end = s.indexOf("}",idx);
var inner = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_existing_var.call(null,env,cljs.core.symbol.call(null,cljs.core.subs.call(null,s,((2) + idx),end))));
return (new cljs.core.LazySeq(null,((function (end,inner,idx){
return (function (){
return cljs.core.cons.call(null,cljs.core.subs.call(null,s,(0),idx),cljs.core.cons.call(null,inner,cljs$analyzer$js_star_interp.call(null,env,cljs.core.subs.call(null,s,(end + (1))))));
});})(end,inner,idx))
,null,null));
}
});
cljs.analyzer.js_star_seg = (function cljs$analyzer$js_star_seg(s){
var idx = s.indexOf("~{");
if(((-1) === idx)){
var x__7243__auto__ = s;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
} else {
var end = s.indexOf("}",idx);
return (new cljs.core.LazySeq(null,((function (end,idx){
return (function (){
return cljs.core.cons.call(null,cljs.core.subs.call(null,s,(0),idx),cljs$analyzer$js_star_seg.call(null,cljs.core.subs.call(null,s,(end + (1)))));
});})(end,idx))
,null,null));
}
});
cljs.analyzer.NUMERIC_SET = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$sym$any,null,cljs.core.cst$sym$long,null,cljs.core.cst$sym$double,null,cljs.core.cst$sym$number,null], null), null);
cljs.analyzer.numeric_type_QMARK_ = (function cljs$analyzer$numeric_type_QMARK_(t){
if((t == null)){
return true;
} else {
if(((t instanceof cljs.core.Symbol)) && (!((cljs.core.get.call(null,cljs.analyzer.NUMERIC_SET,t) == null)))){
return true;
} else {
if(cljs.analyzer.cljs_set_QMARK_.call(null,t)){
return (cljs.core.contains_QMARK_.call(null,t,cljs.core.cst$sym$number)) || (cljs.core.contains_QMARK_.call(null,t,cljs.core.cst$sym$long)) || (cljs.core.contains_QMARK_.call(null,t,cljs.core.cst$sym$double)) || (cljs.core.contains_QMARK_.call(null,t,cljs.core.cst$sym$any));
} else {
return null;
}
}
}
});
cljs.analyzer.analyze_js_star_STAR_ = (function cljs$analyzer$analyze_js_star_STAR_(env,jsform,args,form){
var enve = cljs.core.assoc.call(null,env,cljs.core.cst$kw$context,cljs.core.cst$kw$expr);
var argexprs = cljs.core.vec.call(null,cljs.core.map.call(null,((function (enve){
return (function (p1__9203_SHARP_){
return cljs.analyzer.analyze.call(null,enve,p1__9203_SHARP_);
});})(enve))
,args));
var form_meta = cljs.core.meta.call(null,form);
var segs = cljs.analyzer.js_star_seg.call(null,jsform);
var tag = cljs.analyzer.get_js_tag.call(null,form);
var js_op = cljs.core.cst$kw$js_DASH_op.cljs$core$IFn$_invoke$arity$1(form_meta);
var numeric = cljs.core.cst$kw$numeric.cljs$core$IFn$_invoke$arity$1(form_meta);
if(numeric === true){
var types_9205 = cljs.core.map.call(null,((function (enve,argexprs,form_meta,segs,tag,js_op,numeric){
return (function (p1__9204_SHARP_){
return cljs.analyzer.infer_tag.call(null,env,p1__9204_SHARP_);
});})(enve,argexprs,form_meta,segs,tag,js_op,numeric))
,argexprs);
if(cljs.core.every_QMARK_.call(null,cljs.analyzer.numeric_type_QMARK_,types_9205)){
} else {
cljs.analyzer.warning.call(null,cljs.core.cst$kw$invalid_DASH_arithmetic,env,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$js_DASH_op,js_op,cljs.core.cst$kw$types,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,types_9205)], null));
}
} else {
}

return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$args,cljs.core.cst$kw$children,cljs.core.cst$kw$numeric,cljs.core.cst$kw$segs,cljs.core.cst$kw$op,cljs.core.cst$kw$env,cljs.core.cst$kw$js_DASH_op,cljs.core.cst$kw$form,cljs.core.cst$kw$tag],[argexprs,argexprs,numeric,segs,cljs.core.cst$kw$js,env,js_op,form,tag]);
});
cljs.analyzer.analyze_js_star = (function cljs$analyzer$analyze_js_star(env,jsform,args,form){
var _STAR_recur_frames_STAR_9207 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = cljs.core.cons.call(null,null,cljs.analyzer._STAR_recur_frames_STAR_);

try{return cljs.analyzer.analyze_js_star_STAR_.call(null,env,jsform,args,form);
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_9207;
}});
cljs.core._add_method.call(null,cljs.analyzer.parse,cljs.core.cst$sym$js_STAR_,(function (op,env,p__9208,_,___$1){
var vec__9209 = p__9208;
var seq__9210 = cljs.core.seq.call(null,vec__9209);
var first__9211 = cljs.core.first.call(null,seq__9210);
var seq__9210__$1 = cljs.core.next.call(null,seq__9210);
var ___$2 = first__9211;
var first__9211__$1 = cljs.core.first.call(null,seq__9210__$1);
var seq__9210__$2 = cljs.core.next.call(null,seq__9210__$1);
var jsform = first__9211__$1;
var args = seq__9210__$2;
var form = vec__9209;
if(typeof jsform === 'string'){
} else {
throw cljs.analyzer.error.call(null,env,"Invalid js* form");
}

if(!((args == null))){
return cljs.analyzer.analyze_js_star.call(null,env,jsform,args,form);
} else {
var code = cljs.core.apply.call(null,cljs.core.str,cljs.analyzer.js_star_interp.call(null,env,jsform));
var tag = cljs.analyzer.get_js_tag.call(null,form);
var form_meta = cljs.core.meta.call(null,form);
var js_op = cljs.core.cst$kw$js_DASH_op.cljs$core$IFn$_invoke$arity$1(form_meta);
var numeric = cljs.core.cst$kw$numeric.cljs$core$IFn$_invoke$arity$1(form_meta);
return new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$op,cljs.core.cst$kw$js,cljs.core.cst$kw$env,env,cljs.core.cst$kw$form,form,cljs.core.cst$kw$code,code,cljs.core.cst$kw$tag,tag,cljs.core.cst$kw$js_DASH_op,js_op,cljs.core.cst$kw$numeric,numeric], null);
}
}));
cljs.analyzer.analyzed_QMARK_ = (function cljs$analyzer$analyzed_QMARK_(f){
return cljs.core.contains_QMARK_.call(null,cljs.core.meta.call(null,f),cljs.core.cst$kw$cljs$analyzer_SLASH_analyzed);
});
cljs.analyzer.all_values_QMARK_ = (function cljs$analyzer$all_values_QMARK_(exprs){
return cljs.core.every_QMARK_.call(null,(function (p1__9212_SHARP_){
return ((p1__9212_SHARP_ == null)) || ((p1__9212_SHARP_ instanceof cljs.core.Symbol)) || (typeof p1__9212_SHARP_ === 'string') || (typeof p1__9212_SHARP_ === 'number') || (p1__9212_SHARP_ === true) || (p1__9212_SHARP_ === false);
}),exprs);
});
cljs.analyzer.valid_arity_QMARK_ = (function cljs$analyzer$valid_arity_QMARK_(argc,method_params){
return cljs.core.boolean$.call(null,cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([argc], true),cljs.core.map.call(null,cljs.core.count,method_params)));
});
cljs.analyzer.parse_invoke_STAR_ = (function cljs$analyzer$parse_invoke_STAR_(env,p__9214){
var vec__9220 = p__9214;
var seq__9221 = cljs.core.seq.call(null,vec__9220);
var first__9222 = cljs.core.first.call(null,seq__9221);
var seq__9221__$1 = cljs.core.next.call(null,seq__9221);
var f = first__9222;
var args = seq__9221__$1;
var form = vec__9220;
var enve = cljs.core.assoc.call(null,env,cljs.core.cst$kw$context,cljs.core.cst$kw$expr);
var fexpr = cljs.analyzer.analyze.call(null,enve,f);
var argc = cljs.core.count.call(null,args);
var fn_var_QMARK_ = cljs.core.cst$kw$fn_DASH_var.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$info.cljs$core$IFn$_invoke$arity$1(fexpr));
var kw_QMARK_ = cljs.core._EQ_.call(null,cljs.core.cst$sym$cljs$core_SLASH_Keyword,cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(fexpr));
if(cljs.core.truth_(fn_var_QMARK_)){
var map__9223_9225 = cljs.core.cst$kw$info.cljs$core$IFn$_invoke$arity$1(fexpr);
var map__9223_9226__$1 = ((((!((map__9223_9225 == null)))?((((map__9223_9225.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9223_9225.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9223_9225):map__9223_9225);
var variadic_9227 = cljs.core.get.call(null,map__9223_9226__$1,cljs.core.cst$kw$variadic);
var max_fixed_arity_9228 = cljs.core.get.call(null,map__9223_9226__$1,cljs.core.cst$kw$max_DASH_fixed_DASH_arity);
var method_params_9229 = cljs.core.get.call(null,map__9223_9226__$1,cljs.core.cst$kw$method_DASH_params);
var name_9230 = cljs.core.get.call(null,map__9223_9226__$1,cljs.core.cst$kw$name);
if((!(cljs.analyzer.valid_arity_QMARK_.call(null,argc,method_params_9229))) && ((!(variadic_9227)) || ((variadic_9227) && ((argc < max_fixed_arity_9228))))){
cljs.analyzer.warning.call(null,cljs.core.cst$kw$fn_DASH_arity,env,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,name_9230,cljs.core.cst$kw$argc,argc], null));
} else {
}
} else {
}

if((kw_QMARK_) && (!((((1) === argc)) || (((2) === argc))))){
cljs.analyzer.warning.call(null,cljs.core.cst$kw$fn_DASH_arity,env,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,cljs.core.first.call(null,form),cljs.core.cst$kw$argc,argc], null));
} else {
}

var deprecated_QMARK__9231 = cljs.core.cst$kw$deprecated.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$info.cljs$core$IFn$_invoke$arity$1(fexpr));
var no_warn_QMARK__9232 = cljs.core.cst$kw$deprecation_DASH_nowarn.cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,form));
if((cljs.core.boolean$.call(null,deprecated_QMARK__9231)) && (!(cljs.core.boolean$.call(null,no_warn_QMARK__9232)))){
cljs.analyzer.warning.call(null,cljs.core.cst$kw$fn_DASH_deprecated,env,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$fexpr,fexpr], null));
} else {
}

if((cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$info.cljs$core$IFn$_invoke$arity$1(fexpr)) == null)){
} else {
cljs.analyzer.warning.call(null,cljs.core.cst$kw$invoke_DASH_ctor,env,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$fexpr,fexpr], null));
}

if(cljs.core.truth_((function (){var or__6409__auto__ = !(cljs.core.boolean$.call(null,cljs.analyzer._STAR_cljs_static_fns_STAR_));
if(or__6409__auto__){
return or__6409__auto__;
} else {
var or__6409__auto____$1 = !((f instanceof cljs.core.Symbol));
if(or__6409__auto____$1){
return or__6409__auto____$1;
} else {
var or__6409__auto____$2 = fn_var_QMARK_;
if(cljs.core.truth_(or__6409__auto____$2)){
return or__6409__auto____$2;
} else {
return (cljs.analyzer.analyzed_QMARK_.call(null,f)) || (cljs.analyzer.all_values_QMARK_.call(null,args));
}
}
}
})())){
var ana_expr = ((function (enve,fexpr,argc,fn_var_QMARK_,kw_QMARK_,vec__9220,seq__9221,first__9222,seq__9221__$1,f,args,form){
return (function (p1__9213_SHARP_){
return cljs.analyzer.analyze.call(null,enve,p1__9213_SHARP_);
});})(enve,fexpr,argc,fn_var_QMARK_,kw_QMARK_,vec__9220,seq__9221,first__9222,seq__9221__$1,f,args,form))
;
var argexprs = cljs.core.map.call(null,ana_expr,args);
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$env,env,cljs.core.cst$kw$op,cljs.core.cst$kw$invoke,cljs.core.cst$kw$form,form,cljs.core.cst$kw$f,fexpr,cljs.core.cst$kw$args,cljs.core.vec.call(null,argexprs),cljs.core.cst$kw$children,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fexpr], null),argexprs)], null);
} else {
var arg_syms = cljs.core.take.call(null,argc,cljs.core.repeatedly.call(null,cljs.core.gensym));
return cljs.analyzer.analyze.call(null,env,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_let),(function (){var x__7243__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.vec.call(null,cljs.core.interleave.call(null,arg_syms,args))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7243__auto__ = cljs.core.vary_meta.call(null,f,cljs.core.assoc,cljs.core.cst$kw$cljs$analyzer_SLASH_analyzed,true);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),arg_syms)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})()))));
}
});
cljs.analyzer.parse_invoke = (function cljs$analyzer$parse_invoke(env,form){
var _STAR_recur_frames_STAR_9234 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = cljs.core.cons.call(null,null,cljs.analyzer._STAR_recur_frames_STAR_);

try{return cljs.analyzer.parse_invoke_STAR_.call(null,env,form);
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_9234;
}});
/**
 * Finds the var associated with sym
 */
cljs.analyzer.analyze_symbol = (function cljs$analyzer$analyze_symbol(env,sym){
if(cljs.core.cst$kw$quoted_QMARK_.cljs$core$IFn$_invoke$arity$1(env)){
cljs.analyzer.register_constant_BANG_.call(null,env,sym);

return cljs.analyzer.analyze_wrap_meta.call(null,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$op,cljs.core.cst$kw$constant,cljs.core.cst$kw$env,env,cljs.core.cst$kw$form,sym,cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core_SLASH_Symbol], null));
} else {
var map__9237 = cljs.core.meta.call(null,sym);
var map__9237__$1 = ((((!((map__9237 == null)))?((((map__9237.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9237.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9237):map__9237);
var line = cljs.core.get.call(null,map__9237__$1,cljs.core.cst$kw$line);
var column = cljs.core.get.call(null,map__9237__$1,cljs.core.cst$kw$column);
var env__$1 = ((!((line == null)))?cljs.core.assoc.call(null,env,cljs.core.cst$kw$line,line):env);
var env__$2 = ((!((column == null)))?cljs.core.assoc.call(null,env__$1,cljs.core.cst$kw$column,column):env__$1);
var ret = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$env,env__$2,cljs.core.cst$kw$form,sym], null);
var lcls = cljs.core.cst$kw$locals.cljs$core$IFn$_invoke$arity$1(env__$2);
var lb = cljs.core.get.call(null,lcls,sym);
if(!((lb == null))){
return cljs.core.assoc.call(null,ret,cljs.core.cst$kw$op,cljs.core.cst$kw$var,cljs.core.cst$kw$info,lb);
} else {
if(!(cljs.core.cst$kw$def_DASH_var.cljs$core$IFn$_invoke$arity$1(env__$2) === true)){
var sym_meta = cljs.core.meta.call(null,sym);
var info = ((!(cljs.core.contains_QMARK_.call(null,sym_meta,cljs.core.cst$kw$cljs$analyzer_SLASH_analyzed)))?cljs.analyzer.resolve_existing_var.call(null,env__$2,sym):cljs.analyzer.resolve_var.call(null,env__$2,sym));
return cljs.core.assoc.call(null,ret,cljs.core.cst$kw$op,cljs.core.cst$kw$var,cljs.core.cst$kw$info,info);
} else {
var info = cljs.analyzer.resolve_var.call(null,env__$2,sym);
return cljs.core.assoc.call(null,ret,cljs.core.cst$kw$op,cljs.core.cst$kw$var,cljs.core.cst$kw$info,info);
}
}
}
});
cljs.analyzer.excluded_QMARK_ = (function cljs$analyzer$excluded_QMARK_(env,sym){
if(!((cljs.analyzer.gets.call(null,env,cljs.core.cst$kw$ns,cljs.core.cst$kw$excludes,sym) == null))){
return true;
} else {
return !((cljs.analyzer.gets.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,cljs.analyzer.gets.call(null,env,cljs.core.cst$kw$ns,cljs.core.cst$kw$name),cljs.core.cst$kw$excludes,sym) == null));
}
});
cljs.analyzer.used_QMARK_ = (function cljs$analyzer$used_QMARK_(env,sym){
if(!((cljs.analyzer.gets.call(null,env,cljs.core.cst$kw$ns,cljs.core.cst$kw$use_DASH_macros,sym) == null))){
return true;
} else {
return !((cljs.analyzer.gets.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,cljs.analyzer.gets.call(null,env,cljs.core.cst$kw$ns,cljs.core.cst$kw$name),cljs.core.cst$kw$use_DASH_macros,sym) == null));
}
});
cljs.analyzer.get_expander_ns = (function cljs$analyzer$get_expander_ns(env,nstr){
var res = (function (){var or__6409__auto__ = cljs.analyzer.resolve_macro_ns_alias.call(null,env,nstr,null);
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return cljs.analyzer.resolve_ns_alias.call(null,env,nstr,null);
}
})();
var nstr__$1 = (cljs.core.truth_(res)?[cljs.core.str(res)].join(''):nstr);
if(("clojure.core" === nstr__$1)){
return cljs.core.find_macros_ns.call(null,cljs.analyzer.CLJS_CORE_MACROS_SYM);
} else {
if(("clojure.repl" === nstr__$1)){
return cljs.core.find_macros_ns.call(null,cljs.core.cst$sym$cljs$repl);
} else {
if(cljs.core.truth_(goog.string.contains(nstr__$1,"."))){
return cljs.core.find_macros_ns.call(null,cljs.core.symbol.call(null,nstr__$1));
} else {
var G__9240 = env;
var G__9240__$1 = (((G__9240 == null))?null:cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(G__9240));
var G__9240__$2 = (((G__9240__$1 == null))?null:cljs.core.cst$kw$require_DASH_macros.cljs$core$IFn$_invoke$arity$1(G__9240__$1));
var G__9240__$3 = (((G__9240__$2 == null))?null:cljs.core.get.call(null,G__9240__$2,cljs.core.symbol.call(null,nstr__$1)));
if((G__9240__$3 == null)){
return null;
} else {
return cljs.core.find_macros_ns.call(null,G__9240__$3);
}

}
}
}
});
cljs.analyzer.get_expander_STAR_ = (function cljs$analyzer$get_expander_STAR_(sym,env){
if((!((cljs.analyzer.gets.call(null,env,cljs.core.cst$kw$locals,sym) == null))) || ((cljs.analyzer.excluded_QMARK_.call(null,env,sym)) && (!(cljs.analyzer.used_QMARK_.call(null,env,sym))))){
return null;
} else {
var nstr = cljs.core.namespace.call(null,sym);
if(!((nstr == null))){
var ns = cljs.analyzer.get_expander_ns.call(null,env,nstr);
if((ns == null)){
return null;
} else {
return ns.findInternedVar(cljs.core.symbol.call(null,cljs.core.name.call(null,sym)));
}
} else {
if(!((cljs.analyzer.gets.call(null,env,cljs.core.cst$kw$ns,cljs.core.cst$kw$rename_DASH_macros,sym) == null))){
var qualified_symbol = cljs.analyzer.gets.call(null,env,cljs.core.cst$kw$ns,cljs.core.cst$kw$rename_DASH_macros,sym);
var nsym = cljs.core.symbol.call(null,cljs.core.namespace.call(null,qualified_symbol));
var sym__$1 = cljs.core.symbol.call(null,cljs.core.name.call(null,qualified_symbol));
return cljs.core.find_macros_ns.call(null,nsym).findInternedVar(sym__$1);
} else {
var nsym = cljs.analyzer.gets.call(null,env,cljs.core.cst$kw$ns,cljs.core.cst$kw$use_DASH_macros,sym);
if(!((nsym == null))){
return cljs.core.find_macros_ns.call(null,nsym).findInternedVar(sym);
} else {
return cljs.core.find_macros_ns.call(null,cljs.analyzer.CLJS_CORE_MACROS_SYM).findInternedVar(sym);
}

}
}
}
});
/**
 * Given a sym, a symbol identifying a macro, and env, an analysis environment
 * return the corresponding Clojure macroexpander.
 */
cljs.analyzer.get_expander = (function cljs$analyzer$get_expander(sym,env){
var mvar = cljs.analyzer.get_expander_STAR_.call(null,sym,env);
if((!((mvar == null))) && (mvar.isMacro())){
return mvar;
} else {
return null;
}
});
cljs.analyzer.macroexpand_1_STAR_ = (function cljs$analyzer$macroexpand_1_STAR_(env,form){
var op = cljs.core.first.call(null,form);
if(!((cljs.core.get.call(null,cljs.analyzer.specials,op) == null))){
return form;
} else {
var mac_var = (((op instanceof cljs.core.Symbol))?cljs.analyzer.get_expander.call(null,op,env):null);
if(!((mac_var == null))){
var mchk = (function (){var and__6397__auto__ = cljs.spec;
if(cljs.core.truth_(and__6397__auto__)){
return cljs.spec.macroexpand_check;
} else {
return and__6397__auto__;
}
})();
var _ = (cljs.core.truth_(mchk)?mchk.call(null,mac_var,cljs.core.next.call(null,form)):null);
var form_SINGLEQUOTE_ = cljs.core.apply.call(null,cljs.core.deref.call(null,mac_var),form,env,cljs.core.rest.call(null,form));
if(cljs.analyzer.cljs_seq_QMARK_.call(null,form_SINGLEQUOTE_)){
var sym_SINGLEQUOTE_ = cljs.core.first.call(null,form_SINGLEQUOTE_);
var sym = cljs.core.first.call(null,form);
if(cljs.core.symbol_identical_QMARK_.call(null,sym_SINGLEQUOTE_,cljs.analyzer.JS_STAR_SYM)){
var sym__$1 = (cljs.core.truth_(cljs.core.namespace.call(null,sym))?sym:cljs.core.symbol.call(null,"cljs.core",[cljs.core.str(sym)].join('')));
var js_op = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$js_DASH_op,sym__$1], null);
var numeric = (function (){var mac_var_ns = cljs.core.symbol.call(null,cljs.core.namespace.call(null,mac_var.sym));
var mac_var_name = cljs.core.symbol.call(null,cljs.core.name.call(null,mac_var.sym));
return cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,mac_var_ns,cljs.core.cst$kw$defs,mac_var_name,cljs.core.cst$kw$meta,cljs.core.cst$kw$cljs$analyzer_SLASH_numeric], null));
})();
var js_op__$1 = ((numeric === true)?cljs.core.assoc.call(null,js_op,cljs.core.cst$kw$numeric,true):js_op);
return cljs.core.vary_meta.call(null,form_SINGLEQUOTE_,cljs.core.merge,js_op__$1);
} else {
return form_SINGLEQUOTE_;
}
} else {
return form_SINGLEQUOTE_;
}
} else {
if((op instanceof cljs.core.Symbol)){
var opname = [cljs.core.str(op)].join('');
if(("." === opname.charAt((0)))){
var vec__9244 = cljs.core.next.call(null,form);
var seq__9245 = cljs.core.seq.call(null,vec__9244);
var first__9246 = cljs.core.first.call(null,seq__9245);
var seq__9245__$1 = cljs.core.next.call(null,seq__9245);
var target = first__9246;
var args = seq__9245__$1;
return cljs.core.with_meta.call(null,cljs.core.list_STAR_.call(null,cljs.analyzer.DOT_SYM,target,cljs.core.symbol.call(null,cljs.core.subs.call(null,opname,(1))),args),cljs.core.meta.call(null,form));
} else {
if(("." === opname.charAt((opname.length - (1))))){
return cljs.core.with_meta.call(null,cljs.core.list_STAR_.call(null,cljs.analyzer.NEW_SYM,cljs.core.symbol.call(null,cljs.core.subs.call(null,opname,(0),(cljs.core.count.call(null,opname) - (1)))),cljs.core.next.call(null,form)),cljs.core.meta.call(null,form));
} else {
return form;

}
}
} else {
return form;
}
}
}
});
/**
 * Given a env, an analysis environment, and form, a ClojureScript form,
 * macroexpand the form once.
 */
cljs.analyzer.macroexpand_1 = (function cljs$analyzer$macroexpand_1(env,form){
var val__8273__auto__ = cljs.env._STAR_compiler_STAR_;
if((val__8273__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = cljs.env.default_compiler_env.call(null);
} else {
}

try{try{return cljs.analyzer.macroexpand_1_STAR_.call(null,env,form);
}catch (e9248){var err__8309__auto__ = e9248;
if(cljs.analyzer.analysis_error_QMARK_.call(null,err__8309__auto__)){
throw err__8309__auto__;
} else {
throw cljs.analyzer.error.call(null,env,err__8309__auto__.message,err__8309__auto__);
}
}}finally {if((val__8273__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = null;
} else {
}
}});
cljs.analyzer.analyze_seq_STAR_ = (function cljs$analyzer$analyze_seq_STAR_(op,env,form,name,opts){
if(!((cljs.core.get.call(null,cljs.analyzer.specials,op) == null))){
return cljs.analyzer.parse.call(null,op,env,form,name,opts);
} else {
return cljs.analyzer.parse_invoke.call(null,env,form);
}
});
cljs.analyzer.analyze_seq_STAR__wrap = (function cljs$analyzer$analyze_seq_STAR__wrap(op,env,form,name,opts){
try{return cljs.analyzer.analyze_seq_STAR_.call(null,op,env,form,name,opts);
}catch (e9250){var err__8309__auto__ = e9250;
if(cljs.analyzer.analysis_error_QMARK_.call(null,err__8309__auto__)){
throw err__8309__auto__;
} else {
throw cljs.analyzer.error.call(null,env,err__8309__auto__.message,err__8309__auto__);
}
}});
cljs.analyzer.analyze_seq = (function cljs$analyzer$analyze_seq(var_args){
var args9251 = [];
var len__7484__auto___9254 = arguments.length;
var i__7485__auto___9255 = (0);
while(true){
if((i__7485__auto___9255 < len__7484__auto___9254)){
args9251.push((arguments[i__7485__auto___9255]));

var G__9256 = (i__7485__auto___9255 + (1));
i__7485__auto___9255 = G__9256;
continue;
} else {
}
break;
}

var G__9253 = args9251.length;
switch (G__9253) {
case 3:
return cljs.analyzer.analyze_seq.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.analyzer.analyze_seq.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9251.length)].join('')));

}
});

cljs.analyzer.analyze_seq.cljs$core$IFn$_invoke$arity$3 = (function (env,form,name){
return cljs.analyzer.analyze_seq.call(null,env,form,name,null);
});

cljs.analyzer.analyze_seq.cljs$core$IFn$_invoke$arity$4 = (function (env,form,name,opts){
if(cljs.core.cst$kw$quoted_QMARK_.cljs$core$IFn$_invoke$arity$1(env)){
return cljs.analyzer.analyze_list.call(null,env,form);
} else {
var line = cljs.core.cst$kw$line.cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,form));
var line__$1 = (((line == null))?cljs.core.cst$kw$line.cljs$core$IFn$_invoke$arity$1(env):line);
var col = cljs.core.cst$kw$column.cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,form));
var col__$1 = (((col == null))?cljs.core.cst$kw$column.cljs$core$IFn$_invoke$arity$1(env):col);
var env__$1 = cljs.core.assoc.call(null,env,cljs.core.cst$kw$line,line__$1,cljs.core.cst$kw$column,col__$1);
var op = cljs.core.first.call(null,form);
if((op == null)){
throw cljs.analyzer.error.call(null,env__$1,"Can't call nil");
} else {
}

var mform = cljs.analyzer.macroexpand_1.call(null,env__$1,form);
if((form === mform)){
return cljs.analyzer.analyze_seq_STAR__wrap.call(null,op,env__$1,form,name,opts);
} else {
return cljs.analyzer.analyze.call(null,env__$1,mform,name,opts);
}
}
});

cljs.analyzer.analyze_seq.cljs$lang$maxFixedArity = 4;

cljs.analyzer.analyze_map = (function cljs$analyzer$analyze_map(env,form){
var expr_env = cljs.core.assoc.call(null,env,cljs.core.cst$kw$context,cljs.core.cst$kw$expr);
var ks = (function (){var _STAR_recur_frames_STAR_9262 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = cljs.core.cons.call(null,null,cljs.analyzer._STAR_recur_frames_STAR_);

try{return cljs.core.vec.call(null,cljs.core.map.call(null,((function (_STAR_recur_frames_STAR_9262,expr_env){
return (function (p1__9258_SHARP_){
return cljs.analyzer.analyze.call(null,expr_env,p1__9258_SHARP_);
});})(_STAR_recur_frames_STAR_9262,expr_env))
,cljs.core.keys.call(null,form)));
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_9262;
}})();
var vs = (function (){var _STAR_recur_frames_STAR_9263 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = cljs.core.cons.call(null,null,cljs.analyzer._STAR_recur_frames_STAR_);

try{return cljs.core.vec.call(null,cljs.core.map.call(null,((function (_STAR_recur_frames_STAR_9263,expr_env,ks){
return (function (p1__9259_SHARP_){
return cljs.analyzer.analyze.call(null,expr_env,p1__9259_SHARP_);
});})(_STAR_recur_frames_STAR_9263,expr_env,ks))
,cljs.core.vals.call(null,form)));
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_9263;
}})();
return cljs.analyzer.analyze_wrap_meta.call(null,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$op,cljs.core.cst$kw$map,cljs.core.cst$kw$env,env,cljs.core.cst$kw$form,form,cljs.core.cst$kw$keys,ks,cljs.core.cst$kw$vals,vs,cljs.core.cst$kw$children,cljs.core.vec.call(null,cljs.core.interleave.call(null,ks,vs)),cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core_SLASH_IMap], null));
});
cljs.analyzer.analyze_list = (function cljs$analyzer$analyze_list(env,form){
var expr_env = cljs.core.assoc.call(null,env,cljs.core.cst$kw$context,cljs.core.cst$kw$expr);
var items = (function (){var _STAR_recur_frames_STAR_9266 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = cljs.core.cons.call(null,null,cljs.analyzer._STAR_recur_frames_STAR_);

try{return cljs.core.doall.call(null,cljs.core.map.call(null,((function (_STAR_recur_frames_STAR_9266,expr_env){
return (function (p1__9264_SHARP_){
return cljs.analyzer.analyze.call(null,expr_env,p1__9264_SHARP_);
});})(_STAR_recur_frames_STAR_9266,expr_env))
,form));
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_9266;
}})();
return cljs.analyzer.analyze_wrap_meta.call(null,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$op,cljs.core.cst$kw$list,cljs.core.cst$kw$env,env,cljs.core.cst$kw$form,form,cljs.core.cst$kw$items,items,cljs.core.cst$kw$children,items,cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core_SLASH_IList], null));
});
cljs.analyzer.analyze_vector = (function cljs$analyzer$analyze_vector(env,form){
var expr_env = cljs.core.assoc.call(null,env,cljs.core.cst$kw$context,cljs.core.cst$kw$expr);
var items = (function (){var _STAR_recur_frames_STAR_9269 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = cljs.core.cons.call(null,null,cljs.analyzer._STAR_recur_frames_STAR_);

try{return cljs.core.vec.call(null,cljs.core.map.call(null,((function (_STAR_recur_frames_STAR_9269,expr_env){
return (function (p1__9267_SHARP_){
return cljs.analyzer.analyze.call(null,expr_env,p1__9267_SHARP_);
});})(_STAR_recur_frames_STAR_9269,expr_env))
,form));
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_9269;
}})();
return cljs.analyzer.analyze_wrap_meta.call(null,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$op,cljs.core.cst$kw$vector,cljs.core.cst$kw$env,env,cljs.core.cst$kw$form,form,cljs.core.cst$kw$items,items,cljs.core.cst$kw$children,items,cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core_SLASH_IVector], null));
});
cljs.analyzer.analyze_set = (function cljs$analyzer$analyze_set(env,form){
var expr_env = cljs.core.assoc.call(null,env,cljs.core.cst$kw$context,cljs.core.cst$kw$expr);
var items = (function (){var _STAR_recur_frames_STAR_9272 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = cljs.core.cons.call(null,null,cljs.analyzer._STAR_recur_frames_STAR_);

try{return cljs.core.vec.call(null,cljs.core.map.call(null,((function (_STAR_recur_frames_STAR_9272,expr_env){
return (function (p1__9270_SHARP_){
return cljs.analyzer.analyze.call(null,expr_env,p1__9270_SHARP_);
});})(_STAR_recur_frames_STAR_9272,expr_env))
,form));
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_9272;
}})();
return cljs.analyzer.analyze_wrap_meta.call(null,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$op,cljs.core.cst$kw$set,cljs.core.cst$kw$env,env,cljs.core.cst$kw$form,form,cljs.core.cst$kw$items,items,cljs.core.cst$kw$children,items,cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core_SLASH_ISet], null));
});
cljs.analyzer.analyze_js_value = (function cljs$analyzer$analyze_js_value(env,form){
var val = form.val;
var expr_env = cljs.core.assoc.call(null,env,cljs.core.cst$kw$context,cljs.core.cst$kw$expr);
var items = ((cljs.core.map_QMARK_.call(null,val))?cljs.core.zipmap.call(null,cljs.core.keys.call(null,val),(function (){var _STAR_recur_frames_STAR_9277 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = cljs.core.cons.call(null,null,cljs.analyzer._STAR_recur_frames_STAR_);

try{return cljs.core.doall.call(null,cljs.core.map.call(null,((function (_STAR_recur_frames_STAR_9277,val,expr_env){
return (function (p1__9273_SHARP_){
return cljs.analyzer.analyze.call(null,expr_env,p1__9273_SHARP_);
});})(_STAR_recur_frames_STAR_9277,val,expr_env))
,cljs.core.vals.call(null,val)));
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_9277;
}})()):(function (){var _STAR_recur_frames_STAR_9278 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = cljs.core.cons.call(null,null,cljs.analyzer._STAR_recur_frames_STAR_);

try{return cljs.core.doall.call(null,cljs.core.map.call(null,((function (_STAR_recur_frames_STAR_9278,val,expr_env){
return (function (p1__9274_SHARP_){
return cljs.analyzer.analyze.call(null,expr_env,p1__9274_SHARP_);
});})(_STAR_recur_frames_STAR_9278,val,expr_env))
,val));
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_9278;
}})());
return new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$op,cljs.core.cst$kw$js_DASH_value,cljs.core.cst$kw$js_DASH_type,((cljs.core.map_QMARK_.call(null,val))?cljs.core.cst$kw$object:cljs.core.cst$kw$array),cljs.core.cst$kw$env,env,cljs.core.cst$kw$form,form,cljs.core.cst$kw$items,items,cljs.core.cst$kw$children,items,cljs.core.cst$kw$tag,((cljs.core.map_QMARK_.call(null,val))?cljs.core.cst$sym$object:cljs.core.cst$sym$array)], null);
});
cljs.analyzer.elide_reader_meta = (function cljs$analyzer$elide_reader_meta(m){
return cljs.core.dissoc.call(null,m,cljs.core.cst$kw$file,cljs.core.cst$kw$line,cljs.core.cst$kw$column,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$source);
});
cljs.analyzer.analyze_wrap_meta = (function cljs$analyzer$analyze_wrap_meta(expr){
var form = cljs.core.cst$kw$form.cljs$core$IFn$_invoke$arity$1(expr);
var m = cljs.analyzer.elide_reader_meta.call(null,cljs.core.meta.call(null,form));
if(cljs.core.seq.call(null,m)){
var env = cljs.core.cst$kw$env.cljs$core$IFn$_invoke$arity$1(expr);
var expr__$1 = cljs.core.assoc_in.call(null,expr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$env,cljs.core.cst$kw$context], null),cljs.core.cst$kw$expr);
var meta_expr = cljs.analyzer.analyze_map.call(null,cljs.core.cst$kw$env.cljs$core$IFn$_invoke$arity$1(expr__$1),m);
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$op,cljs.core.cst$kw$meta,cljs.core.cst$kw$env,env,cljs.core.cst$kw$form,form,cljs.core.cst$kw$meta,meta_expr,cljs.core.cst$kw$expr,expr__$1,cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [meta_expr,expr__$1], null)], null);
} else {
return expr;
}
});
cljs.analyzer.infer_type = (function cljs$analyzer$infer_type(env,ast,_){
var tag = cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(ast);
if((tag == null)){
var tag__$1 = cljs.analyzer.infer_tag.call(null,env,ast);
if(!((tag__$1 == null))){
return cljs.core.assoc.call(null,ast,cljs.core.cst$kw$tag,tag__$1);
} else {
return ast;
}
} else {
return ast;
}
});
cljs.analyzer._STAR_passes_STAR_ = null;
cljs.analyzer.analyze_form = (function cljs$analyzer$analyze_form(env,form,name,opts){
if((form instanceof cljs.core.Symbol)){
return cljs.analyzer.analyze_symbol.call(null,env,form);
} else {
if((cljs.analyzer.cljs_seq_QMARK_.call(null,form)) && (cljs.core.seq.call(null,form))){
return cljs.analyzer.analyze_seq.call(null,env,form,name,opts);
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,form)){
return cljs.analyzer.analyze_map.call(null,env,form);
} else {
if(cljs.analyzer.cljs_vector_QMARK_.call(null,form)){
return cljs.analyzer.analyze_vector.call(null,env,form);
} else {
if(cljs.analyzer.cljs_set_QMARK_.call(null,form)){
return cljs.analyzer.analyze_set.call(null,env,form);
} else {
if((form instanceof cljs.core.Keyword)){
return cljs.analyzer.analyze_keyword.call(null,env,form);
} else {
if((form instanceof cljs.tagged_literals.JSValue)){
return cljs.analyzer.analyze_js_value.call(null,env,form);
} else {
if(cljs.core._EQ_.call(null,cljs.core.List.EMPTY,form)){
return cljs.analyzer.analyze_list.call(null,env,form);
} else {
var tag = (((form == null))?cljs.analyzer.CLJ_NIL_SYM:((typeof form === 'number')?cljs.analyzer.NUMBER_SYM:((typeof form === 'string')?cljs.analyzer.STRING_SYM:((form === true)?cljs.analyzer.BOOLEAN_SYM:((form === false)?cljs.analyzer.BOOLEAN_SYM:null)))));
var G__9280 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$op,cljs.core.cst$kw$constant,cljs.core.cst$kw$env,env,cljs.core.cst$kw$form,form], null);
if(cljs.core.truth_(tag)){
return cljs.core.assoc.call(null,G__9280,cljs.core.cst$kw$tag,tag);
} else {
return G__9280;
}

}
}
}
}
}
}
}
}
});
cljs.analyzer.analyze_STAR_ = (function cljs$analyzer$analyze_STAR_(env,form,name,opts){
var passes = cljs.analyzer._STAR_passes_STAR_;
var passes__$1 = (((passes == null))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.analyzer.infer_type], null):passes);
var form__$1 = (((form instanceof cljs.core.LazySeq))?((cljs.core.seq.call(null,form))?form:cljs.core.List.EMPTY):form);
var ast = cljs.analyzer.analyze_form.call(null,env,form__$1,name,opts);
return cljs.core.reduce.call(null,((function (passes,passes__$1,form__$1,ast){
return (function (ast__$1,pass){
return pass.call(null,env,ast__$1,opts);
});})(passes,passes__$1,form__$1,ast))
,ast,passes__$1);
});
/**
 * Given an environment, a map containing {:locals (mapping of names to bindings), :context
 *   (one of :statement, :expr, :return), :ns (a symbol naming the
 *   compilation ns)}, and form, returns an expression object (a map
 *   containing at least :form, :op and :env keys). If expr has any (immediately)
 *   nested exprs, must have :children [exprs...] entry. This will
 *   facilitate code walking without knowing the details of the op set.
 */
cljs.analyzer.analyze = (function cljs$analyzer$analyze(var_args){
var args9281 = [];
var len__7484__auto___9286 = arguments.length;
var i__7485__auto___9287 = (0);
while(true){
if((i__7485__auto___9287 < len__7484__auto___9286)){
args9281.push((arguments[i__7485__auto___9287]));

var G__9288 = (i__7485__auto___9287 + (1));
i__7485__auto___9287 = G__9288;
continue;
} else {
}
break;
}

var G__9283 = args9281.length;
switch (G__9283) {
case 2:
return cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9281.length)].join('')));

}
});

cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 = (function (env,form){
return cljs.analyzer.analyze.call(null,env,form,null);
});

cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$3 = (function (env,form,name){
return cljs.analyzer.analyze.call(null,env,form,name,null);
});

cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$4 = (function (env,form,name,opts){
var val__8273__auto__ = cljs.env._STAR_compiler_STAR_;
if((val__8273__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = cljs.env.default_compiler_env.call(null);
} else {
}

try{try{var _STAR_alias_map_STAR_9285 = cljs.tools.reader._STAR_alias_map_STAR_;
cljs.tools.reader._STAR_alias_map_STAR_ = (function (){var or__6409__auto__ = cljs.tools.reader._STAR_alias_map_STAR_;
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();

try{return cljs.analyzer.analyze_STAR_.call(null,env,form,name,opts);
}finally {cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR_9285;
}}catch (e9284){var err__8309__auto__ = e9284;
if(cljs.analyzer.analysis_error_QMARK_.call(null,err__8309__auto__)){
throw err__8309__auto__;
} else {
throw cljs.analyzer.error.call(null,env,err__8309__auto__.message,err__8309__auto__);
}
}}finally {if((val__8273__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = null;
} else {
}
}});

cljs.analyzer.analyze.cljs$lang$maxFixedArity = 4;

cljs.analyzer.resolve_symbol = (function cljs$analyzer$resolve_symbol(s){
return cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.assoc.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),cljs.core.cst$kw$ns,cljs.analyzer.get_namespace.call(null,cljs.analyzer._STAR_cljs_ns_STAR_)),s));
});

//# sourceMappingURL=analyzer.js.map