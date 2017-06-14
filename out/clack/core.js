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
clack.core.search_opts = cljs.core.reduce.call(null,(function (coll,p__14929){
var vec__14930 = p__14929;
var k = cljs.core.nth.call(null,vec__14930,(0),null);
var vec__14933 = cljs.core.nth.call(null,vec__14930,(1),null);
var short_opt = cljs.core.nth.call(null,vec__14933,(0),null);
var long_opt = cljs.core.nth.call(null,vec__14933,(1),null);
return cljs.core.assoc.call(null,coll,short_opt,k,long_opt,k);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.dissoc.call(null,clack.core.allowed_opts,cljs.core.cst$kw$input_DASH_format,cljs.core.cst$kw$output_DASH_format,cljs.core.cst$kw$wrap,cljs.core.cst$kw$unwrap,cljs.core.cst$kw$no_DASH_keywordize));
clack.core.wrap_opts = cljs.core.reduce.call(null,(function (coll,p__14936){
var vec__14937 = p__14936;
var k = cljs.core.nth.call(null,vec__14937,(0),null);
var vec__14940 = cljs.core.nth.call(null,vec__14937,(1),null);
var short_opt = cljs.core.nth.call(null,vec__14940,(0),null);
var long_opt = cljs.core.nth.call(null,vec__14940,(1),null);
return cljs.core.assoc.call(null,coll,short_opt,k,long_opt,k);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.select_keys.call(null,clack.core.allowed_opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$wrap,cljs.core.cst$kw$unwrap], null)));
clack.core.parser_opts = cljs.core.reduce.call(null,(function (coll,p__14943){
var vec__14944 = p__14943;
var k = cljs.core.nth.call(null,vec__14944,(0),null);
var vec__14947 = cljs.core.nth.call(null,vec__14944,(1),null);
var short_opt = cljs.core.nth.call(null,vec__14947,(0),null);
var long_opt = cljs.core.nth.call(null,vec__14947,(1),null);
return cljs.core.assoc.call(null,coll,short_opt,k,long_opt,k);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.select_keys.call(null,clack.core.allowed_opts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$no_DASH_keywordize], null)));
clack.core.input_opts = cljs.core.reduce.call(null,(function (coll,p__14951){
var vec__14952 = p__14951;
var k = cljs.core.nth.call(null,vec__14952,(0),null);
var vec__14955 = cljs.core.nth.call(null,vec__14952,(1),null);
var short_opt = cljs.core.nth.call(null,vec__14955,(0),null);
var long_opt = cljs.core.nth.call(null,vec__14955,(1),null);
return cljs.core.assoc.call(null,coll,short_opt,k,long_opt,k);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,(function (p1__14950_SHARP_){
return clack.core.input_opt_keys.call(null,cljs.core.key.call(null,p1__14950_SHARP_));
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
clack.core.looks_like_string_QMARK_ = cljs.core.complement.call(null,cljs.core.some_fn.call(null,clack.core.looks_like_number_QMARK_,clack.core.looks_like_keyword_QMARK_,clack.core.looks_like_regex_QMARK_));
clack.core.regex_fn = (function clack$core$regex_fn(arg){
return (function (s){
return cljs.core.re_find.call(null,eval(arg),[cljs.core.str(s)].join(''));
});
});
clack.core.get_query = (function clack$core$get_query(var_args){
var args14958 = [];
var len__7484__auto___14965 = arguments.length;
var i__7485__auto___14966 = (0);
while(true){
if((i__7485__auto___14966 < len__7484__auto___14965)){
args14958.push((arguments[i__7485__auto___14966]));

var G__14967 = (i__7485__auto___14966 + (1));
i__7485__auto___14966 = G__14967;
continue;
} else {
}
break;
}

var G__14960 = args14958.length;
switch (G__14960) {
case 1:
return clack.core.get_query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clack.core.get_query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14958.length)].join('')));

}
});

clack.core.get_query.cljs$core$IFn$_invoke$arity$1 = (function (args){
return clack.core.get_query.call(null,args,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$meta,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$search,cljs.core.PersistentVector.EMPTY], null));
});

clack.core.get_query.cljs$core$IFn$_invoke$arity$2 = (function (p__14961,query){
while(true){
var vec__14962 = p__14961;
var seq__14963 = cljs.core.seq.call(null,vec__14962);
var first__14964 = cljs.core.first.call(null,seq__14963);
var seq__14963__$1 = cljs.core.next.call(null,seq__14963);
var arg = first__14964;
var args = seq__14963__$1;
if(cljs.core.not.call(null,arg)){
return query;
} else {
if(cljs.core.truth_(clack.core.looks_like_regex_QMARK_.call(null,arg))){
var G__14969 = cljs.core.rest.call(null,args);
var G__14970 = cljs.core.update_in.call(null,query,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$search], null),cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$eval,clack.core.regex_fn.call(null,arg)], null));
p__14961 = G__14969;
query = G__14970;
continue;
} else {
if(cljs.core.truth_(clack.core.looks_like_keyword_QMARK_.call(null,arg))){
var G__14971 = args;
var G__14972 = cljs.core.update_in.call(null,query,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$search], null),cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$get,cljs.core.keyword.call(null,arg.substr((1)))], null));
p__14961 = G__14971;
query = G__14972;
continue;
} else {
if(cljs.core.truth_(clack.core.looks_like_number_QMARK_.call(null,arg))){
var G__14973 = args;
var G__14974 = cljs.core.update_in.call(null,query,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$search], null),cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$get,parseInt(arg)], null));
p__14961 = G__14973;
query = G__14974;
continue;
} else {
if(cljs.core.truth_(clack.core.looks_like_string_QMARK_.call(null,arg))){
var G__14975 = args;
var G__14976 = cljs.core.update_in.call(null,query,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$search], null),cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$get,arg], null));
p__14961 = G__14975;
query = G__14976;
continue;
} else {
if(cljs.core.truth_(clack.core.parser_opts.call(null,arg))){
var G__14977 = args;
var G__14978 = cljs.core.update_in.call(null,query,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$meta], null),cljs.core.assoc,clack.core.parser_opts.call(null,arg),true);
p__14961 = G__14977;
query = G__14978;
continue;
} else {
if(cljs.core.truth_(clack.core.wrap_opts.call(null,arg))){
var G__14979 = args;
var G__14980 = cljs.core.update_in.call(null,query,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$meta], null),cljs.core.assoc,clack.core.wrap_opts.call(null,arg),true);
p__14961 = G__14979;
query = G__14980;
continue;
} else {
if(cljs.core.truth_(clack.core.input_opts.call(null,arg))){
var G__14981 = cljs.core.rest.call(null,args);
var G__14982 = cljs.core.update_in.call(null,query,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$meta], null),cljs.core.assoc,clack.core.input_opts.call(null,arg),cljs.core.keyword.call(null,cljs.tools.reader.read_string.call(null,cljs.core.first.call(null,args))));
p__14961 = G__14981;
query = G__14982;
continue;
} else {
if(cljs.core.truth_(clack.core.search_opts.call(null,arg))){
var pred = cljs.core.first.call(null,args);
var G__14983 = cljs.core.rest.call(null,args);
var G__14984 = cljs.core.update_in.call(null,query,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$search], null),cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clack.core.search_opts.call(null,arg),(cljs.core.truth_(clack.core.looks_like_regex_QMARK_.call(null,pred))?clack.core.regex_fn.call(null,pred):cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(clack.util.eval_STAR_.call(null,pred)))], null));
p__14961 = G__14983;
query = G__14984;
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

clack.core.search = (function clack$core$search(data,p__14985){
while(true){
var vec__14995 = p__14985;
var seq__14996 = cljs.core.seq.call(null,vec__14995);
var first__14997 = cljs.core.first.call(null,seq__14996);
var seq__14996__$1 = cljs.core.next.call(null,seq__14996);
var vec__14998 = first__14997;
var qtype = cljs.core.nth.call(null,vec__14998,(0),null);
var qval = cljs.core.nth.call(null,vec__14998,(1),null);
var query = vec__14998;
var queries = seq__14996__$1;
if(cljs.core.not.call(null,query)){
return data;
} else {
var G__15004 = (function (){var pred__15001 = cljs.core._EQ_;
var expr__15002 = qtype;
if(cljs.core.truth_(pred__15001.call(null,cljs.core.cst$kw$get,expr__15002))){
return cljs.core.get.call(null,data,qval);
} else {
if(cljs.core.truth_(pred__15001.call(null,cljs.core.cst$kw$map,expr__15002))){
return cljs.core.map.call(null,qval,data);
} else {
if(cljs.core.truth_(pred__15001.call(null,cljs.core.cst$kw$filter,expr__15002))){
return cljs.core.filter.call(null,qval,data);
} else {
if(cljs.core.truth_(pred__15001.call(null,cljs.core.cst$kw$remove,expr__15002))){
return cljs.core.remove.call(null,qval,data);
} else {
if(cljs.core.truth_(pred__15001.call(null,cljs.core.cst$kw$eval,expr__15002))){
return qval.call(null,data);
} else {
return [cljs.core.str("Unknown query type: "),cljs.core.str(qtype)].join('');
}
}
}
}
}
})();
var G__15005 = queries;
data = G__15004;
p__14985 = G__15005;
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
var len__7484__auto___15011 = arguments.length;
var i__7485__auto___15012 = (0);
while(true){
if((i__7485__auto___15012 < len__7484__auto___15011)){
args__7491__auto__.push((arguments[i__7485__auto___15012]));

var G__15013 = (i__7485__auto___15012 + (1));
i__7485__auto___15012 = G__15013;
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
var seq__15007 = cljs.core.seq.call(null,clack.core.apply_query.call(null,query,entities__$1));
var chunk__15008 = null;
var count__15009 = (0);
var i__15010 = (0);
while(true){
if((i__15010 < count__15009)){
var entity = cljs.core._nth.call(null,chunk__15008,i__15010);
cljs.core.print.call(null,entity);

var G__15014 = seq__15007;
var G__15015 = chunk__15008;
var G__15016 = count__15009;
var G__15017 = (i__15010 + (1));
seq__15007 = G__15014;
chunk__15008 = G__15015;
count__15009 = G__15016;
i__15010 = G__15017;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__15007);
if(temp__4657__auto__){
var seq__15007__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15007__$1)){
var c__7220__auto__ = cljs.core.chunk_first.call(null,seq__15007__$1);
var G__15018 = cljs.core.chunk_rest.call(null,seq__15007__$1);
var G__15019 = c__7220__auto__;
var G__15020 = cljs.core.count.call(null,c__7220__auto__);
var G__15021 = (0);
seq__15007 = G__15018;
chunk__15008 = G__15019;
count__15009 = G__15020;
i__15010 = G__15021;
continue;
} else {
var entity = cljs.core.first.call(null,seq__15007__$1);
cljs.core.print.call(null,entity);

var G__15022 = cljs.core.next.call(null,seq__15007__$1);
var G__15023 = null;
var G__15024 = (0);
var G__15025 = (0);
seq__15007 = G__15022;
chunk__15008 = G__15023;
count__15009 = G__15024;
i__15010 = G__15025;
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

clack.core._main.cljs$lang$applyTo = (function (seq15006){
return clack.core._main.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15006));
});

cljs.core._STAR_main_cli_fn_STAR_ = clack.core._main;

//# sourceMappingURL=core.js.map