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
clack.core.search_opts = cljs.core.reduce.call(null,(function (coll,p__15228){
var vec__15229 = p__15228;
var k = cljs.core.nth.call(null,vec__15229,(0),null);
var vec__15232 = cljs.core.nth.call(null,vec__15229,(1),null);
var short_opt = cljs.core.nth.call(null,vec__15232,(0),null);
var long_opt = cljs.core.nth.call(null,vec__15232,(1),null);
return cljs.core.assoc.call(null,coll,short_opt,k,long_opt,k);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.dissoc.call(null,clack.core.allowed_opts,cljs.core.cst$kw$input_DASH_format,cljs.core.cst$kw$output_DASH_format,cljs.core.cst$kw$wrap,cljs.core.cst$kw$unwrap,cljs.core.cst$kw$no_DASH_keywordize));
clack.core.wrap_opts = cljs.core.reduce.call(null,(function (coll,p__15235){
var vec__15236 = p__15235;
var k = cljs.core.nth.call(null,vec__15236,(0),null);
var vec__15239 = cljs.core.nth.call(null,vec__15236,(1),null);
var short_opt = cljs.core.nth.call(null,vec__15239,(0),null);
var long_opt = cljs.core.nth.call(null,vec__15239,(1),null);
return cljs.core.assoc.call(null,coll,short_opt,k,long_opt,k);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.select_keys.call(null,clack.core.allowed_opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$wrap,cljs.core.cst$kw$unwrap], null)));
clack.core.parser_opts = cljs.core.reduce.call(null,(function (coll,p__15242){
var vec__15243 = p__15242;
var k = cljs.core.nth.call(null,vec__15243,(0),null);
var vec__15246 = cljs.core.nth.call(null,vec__15243,(1),null);
var short_opt = cljs.core.nth.call(null,vec__15246,(0),null);
var long_opt = cljs.core.nth.call(null,vec__15246,(1),null);
return cljs.core.assoc.call(null,coll,short_opt,k,long_opt,k);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.select_keys.call(null,clack.core.allowed_opts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$no_DASH_keywordize], null)));
clack.core.input_opts = cljs.core.reduce.call(null,(function (coll,p__15250){
var vec__15251 = p__15250;
var k = cljs.core.nth.call(null,vec__15251,(0),null);
var vec__15254 = cljs.core.nth.call(null,vec__15251,(1),null);
var short_opt = cljs.core.nth.call(null,vec__15254,(0),null);
var long_opt = cljs.core.nth.call(null,vec__15254,(1),null);
return cljs.core.assoc.call(null,coll,short_opt,k,long_opt,k);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,(function (p1__15249_SHARP_){
return clack.core.input_opt_keys.call(null,cljs.core.key.call(null,p1__15249_SHARP_));
}),clack.core.allowed_opts));
clack.core.regex_regex = /^\/[^\/]*\/([a-zA-Z])*?$/;
clack.core.looks_like_regex_QMARK_ = (function clack$core$looks_like_regex_QMARK_(s){
return cljs.core.re_find.call(null,clack.core.regex_regex,s);
});
clack.core.looks_like_keyword_QMARK_ = (function clack$core$looks_like_keyword_QMARK_(s){
return cljs.core.re_find.call(null,/^:[\w\-\.\/_:]+$/,s);
});
clack.core.looks_like_number_QMARK_ = (function clack$core$looks_like_number_QMARK_(s){
return cljs.core.every_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, ["0",null,"1",null,"2",null,"3",null,"4",null,"5",null,"6",null,"7",null,"8",null,"9",null], null), null),s);
});
clack.core.looks_like_string_QMARK_ = cljs.core.complement.call(null,cljs.core.some_fn.call(null,clack.core.looks_like_number_QMARK_,clack.core.looks_like_keyword_QMARK_,clack.core.looks_like_regex_QMARK_,cljs.core.set.call(null,cljs.core.mapcat.call(null,cljs.core.second,clack.core.allowed_opts))));
clack.core.regex_fn = (function clack$core$regex_fn(arg){
return (function (s){
return cljs.core.re_find.call(null,eval(arg),[cljs.core.str(s)].join(''));
});
});
clack.core.get_query = (function clack$core$get_query(var_args){
var args15257 = [];
var len__7484__auto___15264 = arguments.length;
var i__7485__auto___15265 = (0);
while(true){
if((i__7485__auto___15265 < len__7484__auto___15264)){
args15257.push((arguments[i__7485__auto___15265]));

var G__15266 = (i__7485__auto___15265 + (1));
i__7485__auto___15265 = G__15266;
continue;
} else {
}
break;
}

var G__15259 = args15257.length;
switch (G__15259) {
case 1:
return clack.core.get_query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clack.core.get_query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15257.length)].join('')));

}
});

clack.core.get_query.cljs$core$IFn$_invoke$arity$1 = (function (args){
return clack.core.get_query.call(null,args,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$meta,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$search,cljs.core.PersistentVector.EMPTY], null));
});

clack.core.get_query.cljs$core$IFn$_invoke$arity$2 = (function (p__15260,query){
while(true){
var vec__15261 = p__15260;
var seq__15262 = cljs.core.seq.call(null,vec__15261);
var first__15263 = cljs.core.first.call(null,seq__15262);
var seq__15262__$1 = cljs.core.next.call(null,seq__15262);
var arg = first__15263;
var args = seq__15262__$1;
if(cljs.core.not.call(null,arg)){
return query;
} else {
if(cljs.core.truth_(clack.core.looks_like_regex_QMARK_.call(null,arg))){
var G__15268 = cljs.core.rest.call(null,args);
var G__15269 = cljs.core.update_in.call(null,query,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$search], null),cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$eval,clack.core.regex_fn.call(null,arg)], null));
p__15260 = G__15268;
query = G__15269;
continue;
} else {
if(cljs.core.truth_(clack.core.looks_like_keyword_QMARK_.call(null,arg))){
var G__15270 = args;
var G__15271 = cljs.core.update_in.call(null,query,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$search], null),cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$get,cljs.core.keyword.call(null,arg.substr((1)))], null));
p__15260 = G__15270;
query = G__15271;
continue;
} else {
if(cljs.core.truth_(clack.core.looks_like_number_QMARK_.call(null,arg))){
var G__15272 = args;
var G__15273 = cljs.core.update_in.call(null,query,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$search], null),cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$get,parseInt(arg)], null));
p__15260 = G__15272;
query = G__15273;
continue;
} else {
if(cljs.core.truth_(clack.core.looks_like_string_QMARK_.call(null,arg))){
var G__15274 = args;
var G__15275 = cljs.core.update_in.call(null,query,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$search], null),cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$get,arg], null));
p__15260 = G__15274;
query = G__15275;
continue;
} else {
if(cljs.core.truth_(clack.core.parser_opts.call(null,arg))){
var G__15276 = args;
var G__15277 = cljs.core.update_in.call(null,query,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$meta], null),cljs.core.assoc,clack.core.parser_opts.call(null,arg),true);
p__15260 = G__15276;
query = G__15277;
continue;
} else {
if(cljs.core.truth_(clack.core.wrap_opts.call(null,arg))){
var G__15278 = args;
var G__15279 = cljs.core.update_in.call(null,query,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$meta], null),cljs.core.assoc,clack.core.wrap_opts.call(null,arg),true);
p__15260 = G__15278;
query = G__15279;
continue;
} else {
if(cljs.core.truth_(clack.core.input_opts.call(null,arg))){
var G__15280 = cljs.core.rest.call(null,args);
var G__15281 = cljs.core.update_in.call(null,query,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$meta], null),cljs.core.assoc,clack.core.input_opts.call(null,arg),cljs.core.keyword.call(null,cljs.tools.reader.read_string.call(null,cljs.core.first.call(null,args))));
p__15260 = G__15280;
query = G__15281;
continue;
} else {
if(cljs.core.truth_(clack.core.search_opts.call(null,arg))){
var pred = cljs.core.first.call(null,args);
var G__15282 = cljs.core.rest.call(null,args);
var G__15283 = cljs.core.update_in.call(null,query,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$search], null),cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clack.core.search_opts.call(null,arg),(cljs.core.truth_(clack.core.looks_like_regex_QMARK_.call(null,pred))?clack.core.regex_fn.call(null,pred):cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(clack.util.eval_STAR_.call(null,pred)))], null));
p__15260 = G__15282;
query = G__15283;
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

clack.core.search = (function clack$core$search(data,p__15284){
while(true){
var vec__15294 = p__15284;
var seq__15295 = cljs.core.seq.call(null,vec__15294);
var first__15296 = cljs.core.first.call(null,seq__15295);
var seq__15295__$1 = cljs.core.next.call(null,seq__15295);
var vec__15297 = first__15296;
var qtype = cljs.core.nth.call(null,vec__15297,(0),null);
var qval = cljs.core.nth.call(null,vec__15297,(1),null);
var query = vec__15297;
var queries = seq__15295__$1;
if(cljs.core.not.call(null,query)){
return data;
} else {
var G__15303 = (function (){var pred__15300 = cljs.core._EQ_;
var expr__15301 = qtype;
if(cljs.core.truth_(pred__15300.call(null,cljs.core.cst$kw$get,expr__15301))){
return cljs.core.get.call(null,data,qval);
} else {
if(cljs.core.truth_(pred__15300.call(null,cljs.core.cst$kw$map,expr__15301))){
return cljs.core.map.call(null,qval,data);
} else {
if(cljs.core.truth_(pred__15300.call(null,cljs.core.cst$kw$filter,expr__15301))){
return cljs.core.filter.call(null,qval,data);
} else {
if(cljs.core.truth_(pred__15300.call(null,cljs.core.cst$kw$remove,expr__15301))){
return cljs.core.remove.call(null,qval,data);
} else {
if(cljs.core.truth_(pred__15300.call(null,cljs.core.cst$kw$eval,expr__15301))){
return qval.call(null,data);
} else {
return [cljs.core.str("Unknown query type: "),cljs.core.str(qtype)].join('');
}
}
}
}
}
})();
var G__15304 = queries;
data = G__15303;
p__15284 = G__15304;
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
var len__7484__auto___15310 = arguments.length;
var i__7485__auto___15311 = (0);
while(true){
if((i__7485__auto___15311 < len__7484__auto___15310)){
args__7491__auto__.push((arguments[i__7485__auto___15311]));

var G__15312 = (i__7485__auto___15311 + (1));
i__7485__auto___15311 = G__15312;
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
var seq__15306 = cljs.core.seq.call(null,clack.core.apply_query.call(null,query,entities__$1));
var chunk__15307 = null;
var count__15308 = (0);
var i__15309 = (0);
while(true){
if((i__15309 < count__15308)){
var entity = cljs.core._nth.call(null,chunk__15307,i__15309);
cljs.core.print.call(null,entity);

var G__15313 = seq__15306;
var G__15314 = chunk__15307;
var G__15315 = count__15308;
var G__15316 = (i__15309 + (1));
seq__15306 = G__15313;
chunk__15307 = G__15314;
count__15308 = G__15315;
i__15309 = G__15316;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__15306);
if(temp__4657__auto__){
var seq__15306__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15306__$1)){
var c__7220__auto__ = cljs.core.chunk_first.call(null,seq__15306__$1);
var G__15317 = cljs.core.chunk_rest.call(null,seq__15306__$1);
var G__15318 = c__7220__auto__;
var G__15319 = cljs.core.count.call(null,c__7220__auto__);
var G__15320 = (0);
seq__15306 = G__15317;
chunk__15307 = G__15318;
count__15308 = G__15319;
i__15309 = G__15320;
continue;
} else {
var entity = cljs.core.first.call(null,seq__15306__$1);
cljs.core.print.call(null,entity);

var G__15321 = cljs.core.next.call(null,seq__15306__$1);
var G__15322 = null;
var G__15323 = (0);
var G__15324 = (0);
seq__15306 = G__15321;
chunk__15307 = G__15322;
count__15308 = G__15323;
i__15309 = G__15324;
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

clack.core._main.cljs$lang$applyTo = (function (seq15305){
return clack.core._main.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15305));
});

cljs.core._STAR_main_cli_fn_STAR_ = clack.core._main;

//# sourceMappingURL=core.js.map