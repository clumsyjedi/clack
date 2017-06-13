// Compiled by ClojureScript 1.9.229 {:optimize-constants true, :target :nodejs}
goog.provide('clack.core');
goog.require('cljs.core');
goog.require('cljs.nodejs');
goog.require('cljs.tools.reader');
goog.require('cljs.pprint');
goog.require('clack.util');
goog.require('clack.parser');
goog.require('clack.serializer');
cljs.nodejs.enable_util_print_BANG_.call(null);
clack.core.allowed_opts = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$remove,cljs.core.cst$kw$get,cljs.core.cst$kw$wrap,cljs.core.cst$kw$input_DASH_format,cljs.core.cst$kw$output_DASH_format,cljs.core.cst$kw$no_DASH_keywordize,cljs.core.cst$kw$filter,cljs.core.cst$kw$unwrap,cljs.core.cst$kw$map,cljs.core.cst$kw$eval],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-r","--remove"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-g","--get-in"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-w","--wrap"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-i","--input-format"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-o","--output-format"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-K","--no-keywordize"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-f","--filter"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-u","--unwrap"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-m","--map"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-e","--eval"], null)]);
clack.core.input_opt_keys = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$input_DASH_format,null,cljs.core.cst$kw$output_DASH_format,null], null), null);
clack.core.search_opts = cljs.core.reduce.call(null,(function (coll,p__15338){
var vec__15339 = p__15338;
var k = cljs.core.nth.call(null,vec__15339,(0),null);
var vec__15342 = cljs.core.nth.call(null,vec__15339,(1),null);
var short_opt = cljs.core.nth.call(null,vec__15342,(0),null);
var long_opt = cljs.core.nth.call(null,vec__15342,(1),null);
return cljs.core.assoc.call(null,coll,short_opt,k,long_opt,k);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.dissoc.call(null,clack.core.allowed_opts,cljs.core.cst$kw$input_DASH_format,cljs.core.cst$kw$output_DASH_format,cljs.core.cst$kw$wrap,cljs.core.cst$kw$unwrap,cljs.core.cst$kw$no_DASH_keywordize));
clack.core.wrap_opts = cljs.core.reduce.call(null,(function (coll,p__15345){
var vec__15346 = p__15345;
var k = cljs.core.nth.call(null,vec__15346,(0),null);
var vec__15349 = cljs.core.nth.call(null,vec__15346,(1),null);
var short_opt = cljs.core.nth.call(null,vec__15349,(0),null);
var long_opt = cljs.core.nth.call(null,vec__15349,(1),null);
return cljs.core.assoc.call(null,coll,short_opt,k,long_opt,k);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.select_keys.call(null,clack.core.allowed_opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$wrap,cljs.core.cst$kw$unwrap], null)));
clack.core.parser_opts = cljs.core.reduce.call(null,(function (coll,p__15352){
var vec__15353 = p__15352;
var k = cljs.core.nth.call(null,vec__15353,(0),null);
var vec__15356 = cljs.core.nth.call(null,vec__15353,(1),null);
var short_opt = cljs.core.nth.call(null,vec__15356,(0),null);
var long_opt = cljs.core.nth.call(null,vec__15356,(1),null);
return cljs.core.assoc.call(null,coll,short_opt,k,long_opt,k);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.select_keys.call(null,clack.core.allowed_opts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$no_DASH_keywordize], null)));
clack.core.input_opts = cljs.core.reduce.call(null,(function (coll,p__15360){
var vec__15361 = p__15360;
var k = cljs.core.nth.call(null,vec__15361,(0),null);
var vec__15364 = cljs.core.nth.call(null,vec__15361,(1),null);
var short_opt = cljs.core.nth.call(null,vec__15364,(0),null);
var long_opt = cljs.core.nth.call(null,vec__15364,(1),null);
return cljs.core.assoc.call(null,coll,short_opt,k,long_opt,k);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,(function (p1__15359_SHARP_){
return clack.core.input_opt_keys.call(null,cljs.core.key.call(null,p1__15359_SHARP_));
}),clack.core.allowed_opts));
clack.core.regex_regex = /^\/[^\/]*\/([a-zA-Z])*?$/;
clack.core.looks_like_regex_QMARK_ = (function clack$core$looks_like_regex_QMARK_(s){
return cljs.core.re_find.call(null,clack.core.regex_regex,s);
});
clack.core.looks_like_keyword_QMARK_ = (function clack$core$looks_like_keyword_QMARK_(s){
return cljs.core.re_find.call(null,/^:[\w\-\.\/_:]+$/,s);
});
clack.core.looks_like_string_QMARK_ = (function clack$core$looks_like_string_QMARK_(s){
return cljs.core.re_find.call(null,/^[\w\.][\w\-\.]*$/,s);
});
clack.core.looks_like_number_QMARK_ = (function clack$core$looks_like_number_QMARK_(s){
return cljs.core.every_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, ["0",null,"1",null,"2",null,"3",null,"4",null,"5",null,"6",null,"7",null,"8",null,"9",null], null), null),s);
});
clack.core.regex_fn = (function clack$core$regex_fn(arg){
return (function (s){
return cljs.core.re_find.call(null,eval(arg),[cljs.core.str(s)].join(''));
});
});
clack.core.get_query = (function clack$core$get_query(var_args){
var args15367 = [];
var len__7484__auto___15374 = arguments.length;
var i__7485__auto___15375 = (0);
while(true){
if((i__7485__auto___15375 < len__7484__auto___15374)){
args15367.push((arguments[i__7485__auto___15375]));

var G__15376 = (i__7485__auto___15375 + (1));
i__7485__auto___15375 = G__15376;
continue;
} else {
}
break;
}

var G__15369 = args15367.length;
switch (G__15369) {
case 1:
return clack.core.get_query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clack.core.get_query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15367.length)].join('')));

}
});

clack.core.get_query.cljs$core$IFn$_invoke$arity$1 = (function (args){
return clack.core.get_query.call(null,args,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$meta,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$search,cljs.core.PersistentVector.EMPTY], null));
});

clack.core.get_query.cljs$core$IFn$_invoke$arity$2 = (function (p__15370,query){
while(true){
var vec__15371 = p__15370;
var seq__15372 = cljs.core.seq.call(null,vec__15371);
var first__15373 = cljs.core.first.call(null,seq__15372);
var seq__15372__$1 = cljs.core.next.call(null,seq__15372);
var arg = first__15373;
var args = seq__15372__$1;
if(cljs.core.not.call(null,arg)){
return query;
} else {
if(cljs.core.truth_(clack.core.looks_like_regex_QMARK_.call(null,arg))){
var G__15378 = cljs.core.rest.call(null,args);
var G__15379 = cljs.core.update_in.call(null,query,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$search], null),cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$eval,clack.core.regex_fn.call(null,arg)], null));
p__15370 = G__15378;
query = G__15379;
continue;
} else {
if(cljs.core.truth_(clack.core.looks_like_keyword_QMARK_.call(null,arg))){
var G__15380 = args;
var G__15381 = cljs.core.update_in.call(null,query,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$search], null),cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$get,cljs.core.keyword.call(null,arg.substr((1)))], null));
p__15370 = G__15380;
query = G__15381;
continue;
} else {
if(cljs.core.truth_(clack.core.looks_like_number_QMARK_.call(null,arg))){
var G__15382 = args;
var G__15383 = cljs.core.update_in.call(null,query,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$search], null),cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$get,parseInt(arg)], null));
p__15370 = G__15382;
query = G__15383;
continue;
} else {
if(cljs.core.truth_(clack.core.looks_like_string_QMARK_.call(null,arg))){
var G__15384 = args;
var G__15385 = cljs.core.update_in.call(null,query,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$search], null),cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$get,arg], null));
p__15370 = G__15384;
query = G__15385;
continue;
} else {
if(cljs.core.truth_(clack.core.parser_opts.call(null,arg))){
var G__15386 = args;
var G__15387 = cljs.core.update_in.call(null,query,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$meta], null),cljs.core.assoc,clack.core.parser_opts.call(null,arg),true);
p__15370 = G__15386;
query = G__15387;
continue;
} else {
if(cljs.core.truth_(clack.core.wrap_opts.call(null,arg))){
var G__15388 = args;
var G__15389 = cljs.core.update_in.call(null,query,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$meta], null),cljs.core.assoc,clack.core.wrap_opts.call(null,arg),true);
p__15370 = G__15388;
query = G__15389;
continue;
} else {
if(cljs.core.truth_(clack.core.input_opts.call(null,arg))){
var G__15390 = cljs.core.rest.call(null,args);
var G__15391 = cljs.core.update_in.call(null,query,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$meta], null),cljs.core.assoc,clack.core.input_opts.call(null,arg),cljs.core.keyword.call(null,cljs.tools.reader.read_string.call(null,cljs.core.first.call(null,args))));
p__15370 = G__15390;
query = G__15391;
continue;
} else {
if(cljs.core.truth_(clack.core.search_opts.call(null,arg))){
var pred = cljs.core.first.call(null,args);
var G__15392 = cljs.core.rest.call(null,args);
var G__15393 = cljs.core.update_in.call(null,query,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$search], null),cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clack.core.search_opts.call(null,arg),(cljs.core.truth_(clack.core.looks_like_regex_QMARK_.call(null,pred))?clack.core.regex_fn.call(null,pred):cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(clack.util.eval_STAR_.call(null,pred)))], null));
p__15370 = G__15392;
query = G__15393;
continue;
} else {
return clack.util.error.call(null,[cljs.core.str("Unknown argument: "),cljs.core.str(arg)].join(''));

}
}
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

clack.core.get_query.cljs$lang$maxFixedArity = 2;

clack.core.search = (function clack$core$search(data,p__15394){
while(true){
var vec__15404 = p__15394;
var seq__15405 = cljs.core.seq.call(null,vec__15404);
var first__15406 = cljs.core.first.call(null,seq__15405);
var seq__15405__$1 = cljs.core.next.call(null,seq__15405);
var vec__15407 = first__15406;
var qtype = cljs.core.nth.call(null,vec__15407,(0),null);
var qval = cljs.core.nth.call(null,vec__15407,(1),null);
var query = vec__15407;
var queries = seq__15405__$1;
if(cljs.core.not.call(null,query)){
return data;
} else {
var G__15413 = (function (){var pred__15410 = cljs.core._EQ_;
var expr__15411 = qtype;
if(cljs.core.truth_(pred__15410.call(null,cljs.core.cst$kw$get,expr__15411))){
return cljs.core.get.call(null,data,qval);
} else {
if(cljs.core.truth_(pred__15410.call(null,cljs.core.cst$kw$map,expr__15411))){
return cljs.core.map.call(null,qval,data);
} else {
if(cljs.core.truth_(pred__15410.call(null,cljs.core.cst$kw$filter,expr__15411))){
return cljs.core.filter.call(null,qval,data);
} else {
if(cljs.core.truth_(pred__15410.call(null,cljs.core.cst$kw$remove,expr__15411))){
return cljs.core.remove.call(null,qval,data);
} else {
if(cljs.core.truth_(pred__15410.call(null,cljs.core.cst$kw$eval,expr__15411))){
return qval.call(null,data);
} else {
return [cljs.core.str("Unknown query type: "),cljs.core.str(qtype)].join('');
}
}
}
}
}
})();
var G__15414 = queries;
data = G__15413;
p__15394 = G__15414;
continue;
}
break;
}
});
clack.core.apply_query = (function clack$core$apply_query(query,entities){
var entities__$1 = cljs.core.map.call(null,(function (entity){
return clack.core.search.call(null,entity,cljs.core.not_empty.call(null,cljs.core.get.call(null,query,cljs.core.cst$kw$search)));
}),entities);
var entities__$2 = (cljs.core.truth_(cljs.core.get_in.call(null,query,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$meta,cljs.core.cst$kw$unwrap], null)))?cljs.core.first.call(null,entities__$1):entities__$1);
return cljs.core.map.call(null,cljs.core.partial.call(null,clack.serializer.serialize,clack.util.output_format.call(null,cljs.core.cst$kw$meta.cljs$core$IFn$_invoke$arity$1(query))),entities__$2);
});
clack.core._main = (function clack$core$_main(var_args){
var args__7491__auto__ = [];
var len__7484__auto___15420 = arguments.length;
var i__7485__auto___15421 = (0);
while(true){
if((i__7485__auto___15421 < len__7484__auto___15420)){
args__7491__auto__.push((arguments[i__7485__auto___15421]));

var G__15422 = (i__7485__auto___15421 + (1));
i__7485__auto___15421 = G__15422;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((0) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((0)),(0),null)):null);
return clack.core._main.cljs$core$IFn$_invoke$arity$variadic(argseq__7492__auto__);
});

clack.core._main.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var query = (function (){var temp__4657__auto__ = cljs.core.not_empty.call(null,cljs.core.drop.call(null,(2),cljs.core.js__GT_clj.call(null,process.argv)));
if(cljs.core.truth_(temp__4657__auto__)){
var args__$1 = temp__4657__auto__;
return clack.core.get_query.call(null,args__$1);
} else {
return null;
}
})();
return clack.parser.parse.call(null,clack.util.input_format.call(null,cljs.core.cst$kw$meta.cljs$core$IFn$_invoke$arity$1(query)),process.stdin,((function (query){
return (function (entities){
var entities__$1 = (cljs.core.truth_(cljs.core.get_in.call(null,query,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$meta,cljs.core.cst$kw$wrap], null)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [entities], null):entities);
var seq__15416 = cljs.core.seq.call(null,clack.core.apply_query.call(null,query,entities__$1));
var chunk__15417 = null;
var count__15418 = (0);
var i__15419 = (0);
while(true){
if((i__15419 < count__15418)){
var entity = cljs.core._nth.call(null,chunk__15417,i__15419);
cljs.core.print.call(null,entity);

var G__15423 = seq__15416;
var G__15424 = chunk__15417;
var G__15425 = count__15418;
var G__15426 = (i__15419 + (1));
seq__15416 = G__15423;
chunk__15417 = G__15424;
count__15418 = G__15425;
i__15419 = G__15426;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__15416);
if(temp__4657__auto__){
var seq__15416__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15416__$1)){
var c__7220__auto__ = cljs.core.chunk_first.call(null,seq__15416__$1);
var G__15427 = cljs.core.chunk_rest.call(null,seq__15416__$1);
var G__15428 = c__7220__auto__;
var G__15429 = cljs.core.count.call(null,c__7220__auto__);
var G__15430 = (0);
seq__15416 = G__15427;
chunk__15417 = G__15428;
count__15418 = G__15429;
i__15419 = G__15430;
continue;
} else {
var entity = cljs.core.first.call(null,seq__15416__$1);
cljs.core.print.call(null,entity);

var G__15431 = cljs.core.next.call(null,seq__15416__$1);
var G__15432 = null;
var G__15433 = (0);
var G__15434 = (0);
seq__15416 = G__15431;
chunk__15417 = G__15432;
count__15418 = G__15433;
i__15419 = G__15434;
continue;
}
} else {
return null;
}
}
break;
}
});})(query))
,cljs.core.not.call(null,cljs.core.get_in.call(null,query,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$meta,cljs.core.cst$kw$no_DASH_keywordize], null))));
});

clack.core._main.cljs$lang$maxFixedArity = (0);

clack.core._main.cljs$lang$applyTo = (function (seq15415){
return clack.core._main.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15415));
});

cljs.core._STAR_main_cli_fn_STAR_ = clack.core._main;

//# sourceMappingURL=core.js.map