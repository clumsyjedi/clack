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
clack.core.allowed_opts = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$remove,cljs.core.cst$kw$get,cljs.core.cst$kw$wrap,cljs.core.cst$kw$input_DASH_format,cljs.core.cst$kw$output_DASH_format,cljs.core.cst$kw$filter,cljs.core.cst$kw$unwrap,cljs.core.cst$kw$map,cljs.core.cst$kw$eval],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-r","--remove"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-g","--get-in"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-w","--wrap"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-i","--input-format"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-o","--output-format"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-f","--filter"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-u","--unwrap"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-m","--map"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-e","--eval"], null)]);
clack.core.input_opt_keys = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$input_DASH_format,null,cljs.core.cst$kw$output_DASH_format,null], null), null);
clack.core.search_opts = cljs.core.reduce.call(null,(function (coll,p__18914){
var vec__18915 = p__18914;
var k = cljs.core.nth.call(null,vec__18915,(0),null);
var vec__18918 = cljs.core.nth.call(null,vec__18915,(1),null);
var short_opt = cljs.core.nth.call(null,vec__18918,(0),null);
var long_opt = cljs.core.nth.call(null,vec__18918,(1),null);
return cljs.core.assoc.call(null,coll,short_opt,k,long_opt,k);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.dissoc.call(null,clack.core.allowed_opts,cljs.core.cst$kw$input_DASH_format,cljs.core.cst$kw$output_DASH_format,cljs.core.cst$kw$wrap,cljs.core.cst$kw$unwrap));
clack.core.wrap_opts = cljs.core.reduce.call(null,(function (coll,p__18921){
var vec__18922 = p__18921;
var k = cljs.core.nth.call(null,vec__18922,(0),null);
var vec__18925 = cljs.core.nth.call(null,vec__18922,(1),null);
var short_opt = cljs.core.nth.call(null,vec__18925,(0),null);
var long_opt = cljs.core.nth.call(null,vec__18925,(1),null);
return cljs.core.assoc.call(null,coll,short_opt,k,long_opt,k);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.select_keys.call(null,clack.core.allowed_opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$wrap,cljs.core.cst$kw$unwrap], null)));
clack.core.input_opts = cljs.core.reduce.call(null,(function (coll,p__18929){
var vec__18930 = p__18929;
var k = cljs.core.nth.call(null,vec__18930,(0),null);
var vec__18933 = cljs.core.nth.call(null,vec__18930,(1),null);
var short_opt = cljs.core.nth.call(null,vec__18933,(0),null);
var long_opt = cljs.core.nth.call(null,vec__18933,(1),null);
return cljs.core.assoc.call(null,coll,short_opt,k,long_opt,k);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,(function (p1__18928_SHARP_){
return clack.core.input_opt_keys.call(null,cljs.core.key.call(null,p1__18928_SHARP_));
}),clack.core.allowed_opts));
clack.core.looks_like_regex_QMARK_ = (function clack$core$looks_like_regex_QMARK_(s){
return cljs.core.re_find.call(null,/^\/[^\/]*\/$/,s);
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
var re = cljs.core.re_pattern.call(null,cljs.core.second.call(null,cljs.core.re_find.call(null,/^\/([^\/]*)\/$/,arg)));
return cljs.core.re_find.call(null,re,[cljs.core.str(s)].join(''));
});
});
clack.core.get_query = (function clack$core$get_query(var_args){
var args18936 = [];
var len__7484__auto___18943 = arguments.length;
var i__7485__auto___18944 = (0);
while(true){
if((i__7485__auto___18944 < len__7484__auto___18943)){
args18936.push((arguments[i__7485__auto___18944]));

var G__18945 = (i__7485__auto___18944 + (1));
i__7485__auto___18944 = G__18945;
continue;
} else {
}
break;
}

var G__18938 = args18936.length;
switch (G__18938) {
case 1:
return clack.core.get_query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clack.core.get_query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18936.length)].join('')));

}
});

clack.core.get_query.cljs$core$IFn$_invoke$arity$1 = (function (args){
return clack.core.get_query.call(null,args,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$meta,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$search,cljs.core.PersistentVector.EMPTY], null));
});

clack.core.get_query.cljs$core$IFn$_invoke$arity$2 = (function (p__18939,query){
while(true){
var vec__18940 = p__18939;
var seq__18941 = cljs.core.seq.call(null,vec__18940);
var first__18942 = cljs.core.first.call(null,seq__18941);
var seq__18941__$1 = cljs.core.next.call(null,seq__18941);
var arg = first__18942;
var args = seq__18941__$1;
if(cljs.core.not.call(null,arg)){
return query;
} else {
if(cljs.core.truth_(clack.core.looks_like_regex_QMARK_.call(null,arg))){
var G__18947 = cljs.core.rest.call(null,args);
var G__18948 = cljs.core.update_in.call(null,query,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$search], null),cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$eval,clack.core.regex_fn.call(null,arg)], null));
p__18939 = G__18947;
query = G__18948;
continue;
} else {
if(cljs.core.truth_(clack.core.looks_like_keyword_QMARK_.call(null,arg))){
var G__18949 = args;
var G__18950 = cljs.core.update_in.call(null,query,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$search], null),cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$get,cljs.core.keyword.call(null,arg.substr((1)))], null));
p__18939 = G__18949;
query = G__18950;
continue;
} else {
if(cljs.core.truth_(clack.core.looks_like_number_QMARK_.call(null,arg))){
var G__18951 = args;
var G__18952 = cljs.core.update_in.call(null,query,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$search], null),cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$get,parseInt(arg)], null));
p__18939 = G__18951;
query = G__18952;
continue;
} else {
if(cljs.core.truth_(clack.core.looks_like_string_QMARK_.call(null,arg))){
var G__18953 = args;
var G__18954 = cljs.core.update_in.call(null,query,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$search], null),cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$get,arg], null));
p__18939 = G__18953;
query = G__18954;
continue;
} else {
if(cljs.core.truth_(clack.core.wrap_opts.call(null,arg))){
var G__18955 = args;
var G__18956 = cljs.core.update_in.call(null,query,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$meta], null),cljs.core.assoc,clack.core.wrap_opts.call(null,arg),true);
p__18939 = G__18955;
query = G__18956;
continue;
} else {
if(cljs.core.truth_(clack.core.input_opts.call(null,arg))){
var G__18957 = cljs.core.rest.call(null,args);
var G__18958 = cljs.core.update_in.call(null,query,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$meta], null),cljs.core.assoc,clack.core.input_opts.call(null,arg),cljs.core.keyword.call(null,cljs.tools.reader.read_string.call(null,cljs.core.first.call(null,args))));
p__18939 = G__18957;
query = G__18958;
continue;
} else {
if(cljs.core.truth_(clack.core.search_opts.call(null,arg))){
var pred = cljs.core.first.call(null,args);
var G__18959 = cljs.core.rest.call(null,args);
var G__18960 = cljs.core.update_in.call(null,query,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$search], null),cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clack.core.search_opts.call(null,arg),(cljs.core.truth_(clack.core.looks_like_regex_QMARK_.call(null,pred))?clack.core.regex_fn.call(null,pred):cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(clack.util.eval_STAR_.call(null,pred)))], null));
p__18939 = G__18959;
query = G__18960;
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
break;
}
});

clack.core.get_query.cljs$lang$maxFixedArity = 2;

clack.core.search = (function clack$core$search(data,p__18961){
while(true){
var vec__18971 = p__18961;
var seq__18972 = cljs.core.seq.call(null,vec__18971);
var first__18973 = cljs.core.first.call(null,seq__18972);
var seq__18972__$1 = cljs.core.next.call(null,seq__18972);
var vec__18974 = first__18973;
var qtype = cljs.core.nth.call(null,vec__18974,(0),null);
var qval = cljs.core.nth.call(null,vec__18974,(1),null);
var query = vec__18974;
var queries = seq__18972__$1;
if(cljs.core.not.call(null,query)){
return data;
} else {
var G__18980 = (function (){var pred__18977 = cljs.core._EQ_;
var expr__18978 = qtype;
if(cljs.core.truth_(pred__18977.call(null,cljs.core.cst$kw$get,expr__18978))){
return cljs.core.get.call(null,data,qval);
} else {
if(cljs.core.truth_(pred__18977.call(null,cljs.core.cst$kw$map,expr__18978))){
return cljs.core.map.call(null,qval,data);
} else {
if(cljs.core.truth_(pred__18977.call(null,cljs.core.cst$kw$filter,expr__18978))){
return cljs.core.filter.call(null,qval,data);
} else {
if(cljs.core.truth_(pred__18977.call(null,cljs.core.cst$kw$remove,expr__18978))){
return cljs.core.remove.call(null,qval,data);
} else {
if(cljs.core.truth_(pred__18977.call(null,cljs.core.cst$kw$eval,expr__18978))){
return qval.call(null,data);
} else {
return [cljs.core.str("Unknown query type: "),cljs.core.str(qtype)].join('');
}
}
}
}
}
})();
var G__18981 = queries;
data = G__18980;
p__18961 = G__18981;
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
var len__7484__auto___18987 = arguments.length;
var i__7485__auto___18988 = (0);
while(true){
if((i__7485__auto___18988 < len__7484__auto___18987)){
args__7491__auto__.push((arguments[i__7485__auto___18988]));

var G__18989 = (i__7485__auto___18988 + (1));
i__7485__auto___18988 = G__18989;
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
var seq__18983 = cljs.core.seq.call(null,clack.core.apply_query.call(null,query,entities__$1));
var chunk__18984 = null;
var count__18985 = (0);
var i__18986 = (0);
while(true){
if((i__18986 < count__18985)){
var entity = cljs.core._nth.call(null,chunk__18984,i__18986);
cljs.core.print.call(null,entity);

var G__18990 = seq__18983;
var G__18991 = chunk__18984;
var G__18992 = count__18985;
var G__18993 = (i__18986 + (1));
seq__18983 = G__18990;
chunk__18984 = G__18991;
count__18985 = G__18992;
i__18986 = G__18993;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__18983);
if(temp__4657__auto__){
var seq__18983__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18983__$1)){
var c__7220__auto__ = cljs.core.chunk_first.call(null,seq__18983__$1);
var G__18994 = cljs.core.chunk_rest.call(null,seq__18983__$1);
var G__18995 = c__7220__auto__;
var G__18996 = cljs.core.count.call(null,c__7220__auto__);
var G__18997 = (0);
seq__18983 = G__18994;
chunk__18984 = G__18995;
count__18985 = G__18996;
i__18986 = G__18997;
continue;
} else {
var entity = cljs.core.first.call(null,seq__18983__$1);
cljs.core.print.call(null,entity);

var G__18998 = cljs.core.next.call(null,seq__18983__$1);
var G__18999 = null;
var G__19000 = (0);
var G__19001 = (0);
seq__18983 = G__18998;
chunk__18984 = G__18999;
count__18985 = G__19000;
i__18986 = G__19001;
continue;
}
} else {
return null;
}
}
break;
}
});})(query))
);
});

clack.core._main.cljs$lang$maxFixedArity = (0);

clack.core._main.cljs$lang$applyTo = (function (seq18982){
return clack.core._main.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18982));
});

cljs.core._STAR_main_cli_fn_STAR_ = clack.core._main;

//# sourceMappingURL=core.js.map