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
clack.core.search_opts = cljs.core.reduce.call(null,(function (coll,p__15051){
var vec__15052 = p__15051;
var k = cljs.core.nth.call(null,vec__15052,(0),null);
var vec__15055 = cljs.core.nth.call(null,vec__15052,(1),null);
var short_opt = cljs.core.nth.call(null,vec__15055,(0),null);
var long_opt = cljs.core.nth.call(null,vec__15055,(1),null);
return cljs.core.assoc.call(null,coll,short_opt,k,long_opt,k);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.dissoc.call(null,clack.core.allowed_opts,cljs.core.cst$kw$input_DASH_format,cljs.core.cst$kw$output_DASH_format,cljs.core.cst$kw$wrap,cljs.core.cst$kw$unwrap));
clack.core.wrap_opts = cljs.core.reduce.call(null,(function (coll,p__15058){
var vec__15059 = p__15058;
var k = cljs.core.nth.call(null,vec__15059,(0),null);
var vec__15062 = cljs.core.nth.call(null,vec__15059,(1),null);
var short_opt = cljs.core.nth.call(null,vec__15062,(0),null);
var long_opt = cljs.core.nth.call(null,vec__15062,(1),null);
return cljs.core.assoc.call(null,coll,short_opt,k,long_opt,k);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.select_keys.call(null,clack.core.allowed_opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$wrap,cljs.core.cst$kw$unwrap], null)));
clack.core.input_opts = cljs.core.reduce.call(null,(function (coll,p__15066){
var vec__15067 = p__15066;
var k = cljs.core.nth.call(null,vec__15067,(0),null);
var vec__15070 = cljs.core.nth.call(null,vec__15067,(1),null);
var short_opt = cljs.core.nth.call(null,vec__15070,(0),null);
var long_opt = cljs.core.nth.call(null,vec__15070,(1),null);
return cljs.core.assoc.call(null,coll,short_opt,k,long_opt,k);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,(function (p1__15065_SHARP_){
return clack.core.input_opt_keys.call(null,cljs.core.key.call(null,p1__15065_SHARP_));
}),clack.core.allowed_opts));
clack.core.looks_like_keyword_QMARK_ = (function clack$core$looks_like_keyword_QMARK_(s){
return cljs.core.re_find.call(null,/^:[\w\-\.\/_]+$/,s);
});
clack.core.looks_like_string_QMARK_ = (function clack$core$looks_like_string_QMARK_(s){
return cljs.core.re_find.call(null,/^[\w\.][\w\-\.]*$/,s);
});
clack.core.looks_like_number_QMARK_ = (function clack$core$looks_like_number_QMARK_(s){
return cljs.core.every_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, ["0",null,"1",null,"2",null,"3",null,"4",null,"5",null,"6",null,"7",null,"8",null,"9",null], null), null),s);
});
clack.core.get_query = (function clack$core$get_query(var_args){
var args15073 = [];
var len__7484__auto___15080 = arguments.length;
var i__7485__auto___15081 = (0);
while(true){
if((i__7485__auto___15081 < len__7484__auto___15080)){
args15073.push((arguments[i__7485__auto___15081]));

var G__15082 = (i__7485__auto___15081 + (1));
i__7485__auto___15081 = G__15082;
continue;
} else {
}
break;
}

var G__15075 = args15073.length;
switch (G__15075) {
case 1:
return clack.core.get_query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clack.core.get_query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15073.length)].join('')));

}
});

clack.core.get_query.cljs$core$IFn$_invoke$arity$1 = (function (args){
return clack.core.get_query.call(null,args,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$meta,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$search,cljs.core.PersistentVector.EMPTY], null));
});

clack.core.get_query.cljs$core$IFn$_invoke$arity$2 = (function (p__15076,query){
while(true){
var vec__15077 = p__15076;
var seq__15078 = cljs.core.seq.call(null,vec__15077);
var first__15079 = cljs.core.first.call(null,seq__15078);
var seq__15078__$1 = cljs.core.next.call(null,seq__15078);
var arg = first__15079;
var args = seq__15078__$1;
if(cljs.core.not.call(null,arg)){
return query;
} else {
if(cljs.core.truth_(clack.core.looks_like_keyword_QMARK_.call(null,arg))){
var G__15084 = args;
var G__15085 = cljs.core.update_in.call(null,query,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$search], null),cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$get,cljs.core.keyword.call(null,arg.substr((1)))], null));
p__15076 = G__15084;
query = G__15085;
continue;
} else {
if(cljs.core.truth_(clack.core.looks_like_number_QMARK_.call(null,arg))){
var G__15086 = args;
var G__15087 = cljs.core.update_in.call(null,query,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$search], null),cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$get,parseInt(arg)], null));
p__15076 = G__15086;
query = G__15087;
continue;
} else {
if(cljs.core.truth_(clack.core.looks_like_string_QMARK_.call(null,arg))){
var G__15088 = args;
var G__15089 = cljs.core.update_in.call(null,query,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$search], null),cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$get,arg], null));
p__15076 = G__15088;
query = G__15089;
continue;
} else {
if(cljs.core.truth_(clack.core.wrap_opts.call(null,arg))){
var G__15090 = args;
var G__15091 = cljs.core.update_in.call(null,query,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$meta], null),cljs.core.assoc,clack.core.wrap_opts.call(null,arg),true);
p__15076 = G__15090;
query = G__15091;
continue;
} else {
if(cljs.core.truth_(clack.core.input_opts.call(null,arg))){
var G__15092 = cljs.core.rest.call(null,args);
var G__15093 = cljs.core.update_in.call(null,query,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$meta], null),cljs.core.assoc,clack.core.input_opts.call(null,arg),cljs.core.keyword.call(null,cljs.tools.reader.read_string.call(null,cljs.core.first.call(null,args))));
p__15076 = G__15092;
query = G__15093;
continue;
} else {
if(cljs.core.truth_(clack.core.search_opts.call(null,arg))){
var G__15094 = cljs.core.rest.call(null,args);
var G__15095 = cljs.core.update_in.call(null,query,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$search], null),cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clack.core.search_opts.call(null,arg),cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(clack.util.eval_STAR_.call(null,cljs.core.first.call(null,args)))], null));
p__15076 = G__15094;
query = G__15095;
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

clack.core.search = (function clack$core$search(data,p__15096){
while(true){
var vec__15106 = p__15096;
var seq__15107 = cljs.core.seq.call(null,vec__15106);
var first__15108 = cljs.core.first.call(null,seq__15107);
var seq__15107__$1 = cljs.core.next.call(null,seq__15107);
var vec__15109 = first__15108;
var qtype = cljs.core.nth.call(null,vec__15109,(0),null);
var qval = cljs.core.nth.call(null,vec__15109,(1),null);
var query = vec__15109;
var queries = seq__15107__$1;
if(cljs.core.not.call(null,query)){
return data;
} else {
var G__15115 = (function (){var pred__15112 = cljs.core._EQ_;
var expr__15113 = qtype;
if(cljs.core.truth_(pred__15112.call(null,cljs.core.cst$kw$get,expr__15113))){
return cljs.core.get.call(null,data,qval);
} else {
if(cljs.core.truth_(pred__15112.call(null,cljs.core.cst$kw$map,expr__15113))){
return cljs.core.map.call(null,qval,data);
} else {
if(cljs.core.truth_(pred__15112.call(null,cljs.core.cst$kw$filter,expr__15113))){
return cljs.core.filter.call(null,qval,data);
} else {
if(cljs.core.truth_(pred__15112.call(null,cljs.core.cst$kw$remove,expr__15113))){
return cljs.core.remove.call(null,qval,data);
} else {
if(cljs.core.truth_(pred__15112.call(null,cljs.core.cst$kw$eval,expr__15113))){
return qval.call(null,data);
} else {
return [cljs.core.str("Unknown query type: "),cljs.core.str(qtype)].join('');
}
}
}
}
}
})();
var G__15116 = queries;
data = G__15115;
p__15096 = G__15116;
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
var len__7484__auto___15122 = arguments.length;
var i__7485__auto___15123 = (0);
while(true){
if((i__7485__auto___15123 < len__7484__auto___15122)){
args__7491__auto__.push((arguments[i__7485__auto___15123]));

var G__15124 = (i__7485__auto___15123 + (1));
i__7485__auto___15123 = G__15124;
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
var seq__15118 = cljs.core.seq.call(null,clack.core.apply_query.call(null,query,entities__$1));
var chunk__15119 = null;
var count__15120 = (0);
var i__15121 = (0);
while(true){
if((i__15121 < count__15120)){
var entity = cljs.core._nth.call(null,chunk__15119,i__15121);
cljs.core.print.call(null,entity);

var G__15125 = seq__15118;
var G__15126 = chunk__15119;
var G__15127 = count__15120;
var G__15128 = (i__15121 + (1));
seq__15118 = G__15125;
chunk__15119 = G__15126;
count__15120 = G__15127;
i__15121 = G__15128;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__15118);
if(temp__4657__auto__){
var seq__15118__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15118__$1)){
var c__7220__auto__ = cljs.core.chunk_first.call(null,seq__15118__$1);
var G__15129 = cljs.core.chunk_rest.call(null,seq__15118__$1);
var G__15130 = c__7220__auto__;
var G__15131 = cljs.core.count.call(null,c__7220__auto__);
var G__15132 = (0);
seq__15118 = G__15129;
chunk__15119 = G__15130;
count__15120 = G__15131;
i__15121 = G__15132;
continue;
} else {
var entity = cljs.core.first.call(null,seq__15118__$1);
cljs.core.print.call(null,entity);

var G__15133 = cljs.core.next.call(null,seq__15118__$1);
var G__15134 = null;
var G__15135 = (0);
var G__15136 = (0);
seq__15118 = G__15133;
chunk__15119 = G__15134;
count__15120 = G__15135;
i__15121 = G__15136;
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

clack.core._main.cljs$lang$applyTo = (function (seq15117){
return clack.core._main.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15117));
});

cljs.core._STAR_main_cli_fn_STAR_ = clack.core._main;

//# sourceMappingURL=core.js.map