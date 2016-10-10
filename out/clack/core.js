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
clack.core.allowed_opts = new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$input_DASH_format,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-i","--input-format"], null),cljs.core.cst$kw$output_DASH_format,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-o","--output-format"], null),cljs.core.cst$kw$slurp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-s","--slurp"], null),cljs.core.cst$kw$map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-m","--map"], null),cljs.core.cst$kw$filter,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-f","--filter"], null),cljs.core.cst$kw$remove,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-r","--remove"], null),cljs.core.cst$kw$get,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-g","--get-in"], null),cljs.core.cst$kw$eval,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-e","--eval"], null)], null);
clack.core.input_opt_keys = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$input_DASH_format,null,cljs.core.cst$kw$output_DASH_format,null], null), null);
clack.core.search_opts = cljs.core.reduce.call(null,(function (coll,p__14880){
var vec__14881 = p__14880;
var k = cljs.core.nth.call(null,vec__14881,(0),null);
var vec__14884 = cljs.core.nth.call(null,vec__14881,(1),null);
var short_opt = cljs.core.nth.call(null,vec__14884,(0),null);
var long_opt = cljs.core.nth.call(null,vec__14884,(1),null);
return cljs.core.assoc.call(null,coll,short_opt,k,long_opt,k);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.dissoc.call(null,clack.core.allowed_opts,cljs.core.cst$kw$input_DASH_format,cljs.core.cst$kw$output_DASH_format,cljs.core.cst$kw$slurp));
clack.core.slurp_opts = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (k){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,true], null);
}),cljs.core.cst$kw$slurp.cljs$core$IFn$_invoke$arity$1(clack.core.allowed_opts)));
clack.core.input_opts = cljs.core.reduce.call(null,(function (coll,p__14888){
var vec__14889 = p__14888;
var k = cljs.core.nth.call(null,vec__14889,(0),null);
var vec__14892 = cljs.core.nth.call(null,vec__14889,(1),null);
var short_opt = cljs.core.nth.call(null,vec__14892,(0),null);
var long_opt = cljs.core.nth.call(null,vec__14892,(1),null);
return cljs.core.assoc.call(null,coll,short_opt,k,long_opt,k);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,(function (p1__14887_SHARP_){
return clack.core.input_opt_keys.call(null,cljs.core.key.call(null,p1__14887_SHARP_));
}),clack.core.allowed_opts));
clack.core.looks_like_keyword_QMARK_ = (function clack$core$looks_like_keyword_QMARK_(s){
return cljs.core.re_find.call(null,/^:[\w\-\.\/]+$/,s);
});
clack.core.looks_like_string_QMARK_ = (function clack$core$looks_like_string_QMARK_(s){
return cljs.core.re_find.call(null,/^[\w\.][\w\-\.]*$/,s);
});
clack.core.looks_like_number_QMARK_ = (function clack$core$looks_like_number_QMARK_(s){
return cljs.core.every_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, ["0",null,"1",null,"2",null,"3",null,"4",null,"5",null,"6",null,"7",null,"8",null,"9",null], null), null),s);
});
clack.core.get_query = (function clack$core$get_query(var_args){
var args14895 = [];
var len__7484__auto___14902 = arguments.length;
var i__7485__auto___14903 = (0);
while(true){
if((i__7485__auto___14903 < len__7484__auto___14902)){
args14895.push((arguments[i__7485__auto___14903]));

var G__14904 = (i__7485__auto___14903 + (1));
i__7485__auto___14903 = G__14904;
continue;
} else {
}
break;
}

var G__14897 = args14895.length;
switch (G__14897) {
case 1:
return clack.core.get_query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clack.core.get_query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14895.length)].join('')));

}
});

clack.core.get_query.cljs$core$IFn$_invoke$arity$1 = (function (args){
return clack.core.get_query.call(null,args,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$meta,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$search,cljs.core.PersistentVector.EMPTY], null));
});

clack.core.get_query.cljs$core$IFn$_invoke$arity$2 = (function (p__14898,query){
while(true){
var vec__14899 = p__14898;
var seq__14900 = cljs.core.seq.call(null,vec__14899);
var first__14901 = cljs.core.first.call(null,seq__14900);
var seq__14900__$1 = cljs.core.next.call(null,seq__14900);
var arg = first__14901;
var args = seq__14900__$1;
if(cljs.core.not.call(null,arg)){
return query;
} else {
if(cljs.core.truth_(clack.core.looks_like_keyword_QMARK_.call(null,arg))){
var G__14906 = args;
var G__14907 = cljs.core.update_in.call(null,query,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$search], null),cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$get,cljs.core.keyword.call(null,arg.substr((1)))], null));
p__14898 = G__14906;
query = G__14907;
continue;
} else {
if(cljs.core.truth_(clack.core.looks_like_number_QMARK_.call(null,arg))){
var G__14908 = args;
var G__14909 = cljs.core.update_in.call(null,query,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$search], null),cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$get,parseInt(arg)], null));
p__14898 = G__14908;
query = G__14909;
continue;
} else {
if(cljs.core.truth_(clack.core.looks_like_string_QMARK_.call(null,arg))){
var G__14910 = args;
var G__14911 = cljs.core.update_in.call(null,query,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$search], null),cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$get,arg], null));
p__14898 = G__14910;
query = G__14911;
continue;
} else {
if(cljs.core.truth_(clack.core.slurp_opts.call(null,arg))){
var G__14912 = args;
var G__14913 = cljs.core.update_in.call(null,query,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$meta], null),cljs.core.assoc,cljs.core.cst$kw$slurp,true);
p__14898 = G__14912;
query = G__14913;
continue;
} else {
if(cljs.core.truth_(clack.core.input_opts.call(null,arg))){
var G__14914 = cljs.core.rest.call(null,args);
var G__14915 = cljs.core.update_in.call(null,query,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$meta], null),cljs.core.assoc,clack.core.input_opts.call(null,arg),cljs.core.keyword.call(null,cljs.tools.reader.read_string.call(null,cljs.core.first.call(null,args))));
p__14898 = G__14914;
query = G__14915;
continue;
} else {
if(cljs.core.truth_(clack.core.search_opts.call(null,arg))){
var G__14916 = cljs.core.rest.call(null,args);
var G__14917 = cljs.core.update_in.call(null,query,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$search], null),cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clack.core.search_opts.call(null,arg),cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(clack.util.eval_STAR_.call(null,cljs.core.first.call(null,args)))], null));
p__14898 = G__14916;
query = G__14917;
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
break;
}
});

clack.core.get_query.cljs$lang$maxFixedArity = 2;

clack.core.search = (function clack$core$search(data,p__14918){
while(true){
var vec__14928 = p__14918;
var seq__14929 = cljs.core.seq.call(null,vec__14928);
var first__14930 = cljs.core.first.call(null,seq__14929);
var seq__14929__$1 = cljs.core.next.call(null,seq__14929);
var vec__14931 = first__14930;
var qtype = cljs.core.nth.call(null,vec__14931,(0),null);
var qval = cljs.core.nth.call(null,vec__14931,(1),null);
var query = vec__14931;
var queries = seq__14929__$1;
if(cljs.core.not.call(null,query)){
return data;
} else {
var G__14937 = (function (){var pred__14934 = cljs.core._EQ_;
var expr__14935 = qtype;
if(cljs.core.truth_(pred__14934.call(null,cljs.core.cst$kw$get,expr__14935))){
return cljs.core.get.call(null,data,qval);
} else {
if(cljs.core.truth_(pred__14934.call(null,cljs.core.cst$kw$map,expr__14935))){
return cljs.core.map.call(null,qval,data);
} else {
if(cljs.core.truth_(pred__14934.call(null,cljs.core.cst$kw$filter,expr__14935))){
return cljs.core.filter.call(null,qval,data);
} else {
if(cljs.core.truth_(pred__14934.call(null,cljs.core.cst$kw$remove,expr__14935))){
return cljs.core.remove.call(null,qval,data);
} else {
if(cljs.core.truth_(pred__14934.call(null,cljs.core.cst$kw$eval,expr__14935))){
return qval.call(null,data);
} else {
return [cljs.core.str("Unknown query type: "),cljs.core.str(qtype)].join('');
}
}
}
}
}
})();
var G__14938 = queries;
data = G__14937;
p__14918 = G__14938;
continue;
}
break;
}
});
clack.core.apply_query = (function clack$core$apply_query(query,entities){
var entities__$1 = cljs.core.map.call(null,(function (entity){
return clack.core.search.call(null,entity,cljs.core.not_empty.call(null,cljs.core.get.call(null,query,cljs.core.cst$kw$search)));
}),entities);
var entities__$2 = (cljs.core.truth_(cljs.core.get_in.call(null,query,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$meta,cljs.core.cst$kw$slurp], null)))?cljs.core.first.call(null,entities__$1):entities__$1);
return cljs.core.map.call(null,cljs.core.partial.call(null,clack.serializer.serialize,clack.util.output_format.call(null,cljs.core.cst$kw$meta.cljs$core$IFn$_invoke$arity$1(query))),entities__$2);
});
clack.core._main = (function clack$core$_main(var_args){
var args__7491__auto__ = [];
var len__7484__auto___14944 = arguments.length;
var i__7485__auto___14945 = (0);
while(true){
if((i__7485__auto___14945 < len__7484__auto___14944)){
args__7491__auto__.push((arguments[i__7485__auto___14945]));

var G__14946 = (i__7485__auto___14945 + (1));
i__7485__auto___14945 = G__14946;
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
var entities__$1 = (cljs.core.truth_(cljs.core.get_in.call(null,query,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$meta,cljs.core.cst$kw$slurp], null)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [entities], null):entities);
var seq__14940 = cljs.core.seq.call(null,clack.core.apply_query.call(null,query,entities__$1));
var chunk__14941 = null;
var count__14942 = (0);
var i__14943 = (0);
while(true){
if((i__14943 < count__14942)){
var entity = cljs.core._nth.call(null,chunk__14941,i__14943);
cljs.core.print.call(null,entity);

var G__14947 = seq__14940;
var G__14948 = chunk__14941;
var G__14949 = count__14942;
var G__14950 = (i__14943 + (1));
seq__14940 = G__14947;
chunk__14941 = G__14948;
count__14942 = G__14949;
i__14943 = G__14950;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__14940);
if(temp__4657__auto__){
var seq__14940__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14940__$1)){
var c__7220__auto__ = cljs.core.chunk_first.call(null,seq__14940__$1);
var G__14951 = cljs.core.chunk_rest.call(null,seq__14940__$1);
var G__14952 = c__7220__auto__;
var G__14953 = cljs.core.count.call(null,c__7220__auto__);
var G__14954 = (0);
seq__14940 = G__14951;
chunk__14941 = G__14952;
count__14942 = G__14953;
i__14943 = G__14954;
continue;
} else {
var entity = cljs.core.first.call(null,seq__14940__$1);
cljs.core.print.call(null,entity);

var G__14955 = cljs.core.next.call(null,seq__14940__$1);
var G__14956 = null;
var G__14957 = (0);
var G__14958 = (0);
seq__14940 = G__14955;
chunk__14941 = G__14956;
count__14942 = G__14957;
i__14943 = G__14958;
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

clack.core._main.cljs$lang$applyTo = (function (seq14939){
return clack.core._main.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14939));
});

cljs.core._STAR_main_cli_fn_STAR_ = clack.core._main;

//# sourceMappingURL=core.js.map