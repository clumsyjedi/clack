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
clack.core.search_opts = cljs.core.reduce.call(null,(function (coll,p__14876){
var vec__14877 = p__14876;
var k = cljs.core.nth.call(null,vec__14877,(0),null);
var vec__14880 = cljs.core.nth.call(null,vec__14877,(1),null);
var short_opt = cljs.core.nth.call(null,vec__14880,(0),null);
var long_opt = cljs.core.nth.call(null,vec__14880,(1),null);
return cljs.core.assoc.call(null,coll,short_opt,k,long_opt,k);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.dissoc.call(null,clack.core.allowed_opts,cljs.core.cst$kw$input_DASH_format,cljs.core.cst$kw$output_DASH_format,cljs.core.cst$kw$wrap,cljs.core.cst$kw$unwrap));
clack.core.wrap_opts = cljs.core.reduce.call(null,(function (coll,p__14883){
var vec__14884 = p__14883;
var k = cljs.core.nth.call(null,vec__14884,(0),null);
var vec__14887 = cljs.core.nth.call(null,vec__14884,(1),null);
var short_opt = cljs.core.nth.call(null,vec__14887,(0),null);
var long_opt = cljs.core.nth.call(null,vec__14887,(1),null);
return cljs.core.assoc.call(null,coll,short_opt,k,long_opt,k);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.select_keys.call(null,clack.core.allowed_opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$wrap,cljs.core.cst$kw$unwrap], null)));
clack.core.input_opts = cljs.core.reduce.call(null,(function (coll,p__14891){
var vec__14892 = p__14891;
var k = cljs.core.nth.call(null,vec__14892,(0),null);
var vec__14895 = cljs.core.nth.call(null,vec__14892,(1),null);
var short_opt = cljs.core.nth.call(null,vec__14895,(0),null);
var long_opt = cljs.core.nth.call(null,vec__14895,(1),null);
return cljs.core.assoc.call(null,coll,short_opt,k,long_opt,k);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,(function (p1__14890_SHARP_){
return clack.core.input_opt_keys.call(null,cljs.core.key.call(null,p1__14890_SHARP_));
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
var args14898 = [];
var len__7484__auto___14905 = arguments.length;
var i__7485__auto___14906 = (0);
while(true){
if((i__7485__auto___14906 < len__7484__auto___14905)){
args14898.push((arguments[i__7485__auto___14906]));

var G__14907 = (i__7485__auto___14906 + (1));
i__7485__auto___14906 = G__14907;
continue;
} else {
}
break;
}

var G__14900 = args14898.length;
switch (G__14900) {
case 1:
return clack.core.get_query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clack.core.get_query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14898.length)].join('')));

}
});

clack.core.get_query.cljs$core$IFn$_invoke$arity$1 = (function (args){
return clack.core.get_query.call(null,args,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$meta,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$search,cljs.core.PersistentVector.EMPTY], null));
});

clack.core.get_query.cljs$core$IFn$_invoke$arity$2 = (function (p__14901,query){
while(true){
var vec__14902 = p__14901;
var seq__14903 = cljs.core.seq.call(null,vec__14902);
var first__14904 = cljs.core.first.call(null,seq__14903);
var seq__14903__$1 = cljs.core.next.call(null,seq__14903);
var arg = first__14904;
var args = seq__14903__$1;
if(cljs.core.not.call(null,arg)){
return query;
} else {
if(cljs.core.truth_(clack.core.looks_like_regex_QMARK_.call(null,arg))){
var G__14909 = cljs.core.rest.call(null,args);
var G__14910 = cljs.core.update_in.call(null,query,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$search], null),cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$eval,clack.core.regex_fn.call(null,arg)], null));
p__14901 = G__14909;
query = G__14910;
continue;
} else {
if(cljs.core.truth_(clack.core.looks_like_keyword_QMARK_.call(null,arg))){
var G__14911 = args;
var G__14912 = cljs.core.update_in.call(null,query,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$search], null),cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$get,cljs.core.keyword.call(null,arg.substr((1)))], null));
p__14901 = G__14911;
query = G__14912;
continue;
} else {
if(cljs.core.truth_(clack.core.looks_like_number_QMARK_.call(null,arg))){
var G__14913 = args;
var G__14914 = cljs.core.update_in.call(null,query,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$search], null),cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$get,parseInt(arg)], null));
p__14901 = G__14913;
query = G__14914;
continue;
} else {
if(cljs.core.truth_(clack.core.looks_like_string_QMARK_.call(null,arg))){
var G__14915 = args;
var G__14916 = cljs.core.update_in.call(null,query,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$search], null),cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$get,arg], null));
p__14901 = G__14915;
query = G__14916;
continue;
} else {
if(cljs.core.truth_(clack.core.wrap_opts.call(null,arg))){
var G__14917 = args;
var G__14918 = cljs.core.update_in.call(null,query,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$meta], null),cljs.core.assoc,clack.core.wrap_opts.call(null,arg),true);
p__14901 = G__14917;
query = G__14918;
continue;
} else {
if(cljs.core.truth_(clack.core.input_opts.call(null,arg))){
var G__14919 = cljs.core.rest.call(null,args);
var G__14920 = cljs.core.update_in.call(null,query,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$meta], null),cljs.core.assoc,clack.core.input_opts.call(null,arg),cljs.core.keyword.call(null,cljs.tools.reader.read_string.call(null,cljs.core.first.call(null,args))));
p__14901 = G__14919;
query = G__14920;
continue;
} else {
if(cljs.core.truth_(clack.core.search_opts.call(null,arg))){
var pred = cljs.core.first.call(null,args);
var G__14921 = cljs.core.rest.call(null,args);
var G__14922 = cljs.core.update_in.call(null,query,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$search], null),cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clack.core.search_opts.call(null,arg),(cljs.core.truth_(clack.core.looks_like_regex_QMARK_.call(null,pred))?clack.core.regex_fn.call(null,pred):cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(clack.util.eval_STAR_.call(null,pred)))], null));
p__14901 = G__14921;
query = G__14922;
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

clack.core.search = (function clack$core$search(data,p__14923){
while(true){
var vec__14933 = p__14923;
var seq__14934 = cljs.core.seq.call(null,vec__14933);
var first__14935 = cljs.core.first.call(null,seq__14934);
var seq__14934__$1 = cljs.core.next.call(null,seq__14934);
var vec__14936 = first__14935;
var qtype = cljs.core.nth.call(null,vec__14936,(0),null);
var qval = cljs.core.nth.call(null,vec__14936,(1),null);
var query = vec__14936;
var queries = seq__14934__$1;
if(cljs.core.not.call(null,query)){
return data;
} else {
var G__14942 = (function (){var pred__14939 = cljs.core._EQ_;
var expr__14940 = qtype;
if(cljs.core.truth_(pred__14939.call(null,cljs.core.cst$kw$get,expr__14940))){
return cljs.core.get.call(null,data,qval);
} else {
if(cljs.core.truth_(pred__14939.call(null,cljs.core.cst$kw$map,expr__14940))){
return cljs.core.map.call(null,qval,data);
} else {
if(cljs.core.truth_(pred__14939.call(null,cljs.core.cst$kw$filter,expr__14940))){
return cljs.core.filter.call(null,qval,data);
} else {
if(cljs.core.truth_(pred__14939.call(null,cljs.core.cst$kw$remove,expr__14940))){
return cljs.core.remove.call(null,qval,data);
} else {
if(cljs.core.truth_(pred__14939.call(null,cljs.core.cst$kw$eval,expr__14940))){
return qval.call(null,data);
} else {
return [cljs.core.str("Unknown query type: "),cljs.core.str(qtype)].join('');
}
}
}
}
}
})();
var G__14943 = queries;
data = G__14942;
p__14923 = G__14943;
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
var len__7484__auto___14949 = arguments.length;
var i__7485__auto___14950 = (0);
while(true){
if((i__7485__auto___14950 < len__7484__auto___14949)){
args__7491__auto__.push((arguments[i__7485__auto___14950]));

var G__14951 = (i__7485__auto___14950 + (1));
i__7485__auto___14950 = G__14951;
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
var seq__14945 = cljs.core.seq.call(null,clack.core.apply_query.call(null,query,entities__$1));
var chunk__14946 = null;
var count__14947 = (0);
var i__14948 = (0);
while(true){
if((i__14948 < count__14947)){
var entity = cljs.core._nth.call(null,chunk__14946,i__14948);
cljs.core.print.call(null,entity);

var G__14952 = seq__14945;
var G__14953 = chunk__14946;
var G__14954 = count__14947;
var G__14955 = (i__14948 + (1));
seq__14945 = G__14952;
chunk__14946 = G__14953;
count__14947 = G__14954;
i__14948 = G__14955;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__14945);
if(temp__4657__auto__){
var seq__14945__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14945__$1)){
var c__7220__auto__ = cljs.core.chunk_first.call(null,seq__14945__$1);
var G__14956 = cljs.core.chunk_rest.call(null,seq__14945__$1);
var G__14957 = c__7220__auto__;
var G__14958 = cljs.core.count.call(null,c__7220__auto__);
var G__14959 = (0);
seq__14945 = G__14956;
chunk__14946 = G__14957;
count__14947 = G__14958;
i__14948 = G__14959;
continue;
} else {
var entity = cljs.core.first.call(null,seq__14945__$1);
cljs.core.print.call(null,entity);

var G__14960 = cljs.core.next.call(null,seq__14945__$1);
var G__14961 = null;
var G__14962 = (0);
var G__14963 = (0);
seq__14945 = G__14960;
chunk__14946 = G__14961;
count__14947 = G__14962;
i__14948 = G__14963;
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

clack.core._main.cljs$lang$applyTo = (function (seq14944){
return clack.core._main.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14944));
});

cljs.core._STAR_main_cli_fn_STAR_ = clack.core._main;

//# sourceMappingURL=core.js.map