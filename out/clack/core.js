// Compiled by ClojureScript 1.8.51 {:optimize-constants true, :target :nodejs}
goog.provide('clack.core');
goog.require('cljs.core');
goog.require('cljs.nodejs');
goog.require('cljs.pprint');
goog.require('clack.util');
cljs.nodejs.enable_util_print_BANG_.call(null);
clack.core.allowed_opts = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$input_DASH_format,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-i","--input-format"], null),cljs.core.cst$kw$output_DASH_format,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-o","--output-format"], null),cljs.core.cst$kw$map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-m","--map"], null),cljs.core.cst$kw$filter,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-f","--filter"], null),cljs.core.cst$kw$remove,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-r","--remove"], null),cljs.core.cst$kw$get,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-g","--get-in"], null),cljs.core.cst$kw$eval,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-e","--eval"], null)], null);
clack.core.meta_opt_keys = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$input_DASH_format,null,cljs.core.cst$kw$output_DASH_format,null], null), null);
clack.core.search_opts = cljs.core.reduce.call(null,(function (coll,p__13187){
var vec__13188 = p__13187;
var k = cljs.core.nth.call(null,vec__13188,(0),null);
var vec__13189 = cljs.core.nth.call(null,vec__13188,(1),null);
var short_opt = cljs.core.nth.call(null,vec__13189,(0),null);
var long_opt = cljs.core.nth.call(null,vec__13189,(1),null);
return cljs.core.assoc.call(null,coll,short_opt,k,long_opt,k);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.call(null,(function (p1__13186_SHARP_){
return clack.core.meta_opt_keys.call(null,cljs.core.key.call(null,p1__13186_SHARP_));
}),clack.core.allowed_opts));
clack.core.meta_opts = cljs.core.reduce.call(null,(function (coll,p__13191){
var vec__13192 = p__13191;
var k = cljs.core.nth.call(null,vec__13192,(0),null);
var vec__13193 = cljs.core.nth.call(null,vec__13192,(1),null);
var short_opt = cljs.core.nth.call(null,vec__13193,(0),null);
var long_opt = cljs.core.nth.call(null,vec__13193,(1),null);
return cljs.core.assoc.call(null,coll,short_opt,k,long_opt,k);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,(function (p1__13190_SHARP_){
return clack.core.meta_opt_keys.call(null,cljs.core.key.call(null,p1__13190_SHARP_));
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
var args13194 = [];
var len__7280__auto___13199 = arguments.length;
var i__7281__auto___13200 = (0);
while(true){
if((i__7281__auto___13200 < len__7280__auto___13199)){
args13194.push((arguments[i__7281__auto___13200]));

var G__13201 = (i__7281__auto___13200 + (1));
i__7281__auto___13200 = G__13201;
continue;
} else {
}
break;
}

var G__13196 = args13194.length;
switch (G__13196) {
case 1:
return clack.core.get_query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clack.core.get_query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13194.length)].join('')));

}
});

clack.core.get_query.cljs$core$IFn$_invoke$arity$1 = (function (args){
return clack.core.get_query.call(null,args,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$meta,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$search,cljs.core.PersistentVector.EMPTY], null));
});

clack.core.get_query.cljs$core$IFn$_invoke$arity$2 = (function (p__13197,query){
while(true){
var vec__13198 = p__13197;
var arg = cljs.core.nth.call(null,vec__13198,(0),null);
var args = cljs.core.nthnext.call(null,vec__13198,(1));
if(cljs.core.not.call(null,arg)){
return query;
} else {
if(cljs.core.truth_(clack.core.looks_like_keyword_QMARK_.call(null,arg))){
var G__13203 = args;
var G__13204 = cljs.core.update_in.call(null,query,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$search], null),cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$get,cljs.core.keyword.call(null,arg.substr((1)))], null));
p__13197 = G__13203;
query = G__13204;
continue;
} else {
if(cljs.core.truth_(clack.core.looks_like_number_QMARK_.call(null,arg))){
var G__13205 = args;
var G__13206 = cljs.core.update_in.call(null,query,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$search], null),cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$get,parseInt(arg)], null));
p__13197 = G__13205;
query = G__13206;
continue;
} else {
if(cljs.core.truth_(clack.core.looks_like_string_QMARK_.call(null,arg))){
var G__13207 = args;
var G__13208 = cljs.core.update_in.call(null,query,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$search], null),cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$get,arg], null));
p__13197 = G__13207;
query = G__13208;
continue;
} else {
if(cljs.core.truth_(clack.core.meta_opts.call(null,arg))){
var G__13209 = cljs.core.rest.call(null,args);
var G__13210 = cljs.core.update_in.call(null,query,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$meta], null),cljs.core.assoc,clack.core.meta_opts.call(null,arg),cljs.core.keyword.call(null,clack.util.read_input.call(null,cljs.core.cst$kw$edn,cljs.core.first.call(null,args))));
p__13197 = G__13209;
query = G__13210;
continue;
} else {
if(cljs.core.truth_(clack.core.search_opts.call(null,arg))){
var G__13211 = cljs.core.rest.call(null,args);
var G__13212 = cljs.core.update_in.call(null,query,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$search], null),cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clack.core.search_opts.call(null,arg),cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(clack.util.eval_STAR_.call(null,cljs.core.first.call(null,args)))], null));
p__13197 = G__13211;
query = G__13212;
continue;
} else {
return clack.util.error.call(null,[cljs.core.str("Unknown argument: "),cljs.core.str(arg)].join(''));

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
clack.core.search = (function clack$core$search(data,p__13213){
while(true){
var vec__13219 = p__13213;
var vec__13220 = cljs.core.nth.call(null,vec__13219,(0),null);
var qtype = cljs.core.nth.call(null,vec__13220,(0),null);
var qval = cljs.core.nth.call(null,vec__13220,(1),null);
var query = vec__13220;
var queries = cljs.core.nthnext.call(null,vec__13219,(1));
if(cljs.core.not.call(null,query)){
return data;
} else {
var G__13224 = (function (){var pred__13221 = cljs.core._EQ_;
var expr__13222 = qtype;
if(cljs.core.truth_(pred__13221.call(null,cljs.core.cst$kw$get,expr__13222))){
return cljs.core.get.call(null,data,qval);
} else {
if(cljs.core.truth_(pred__13221.call(null,cljs.core.cst$kw$map,expr__13222))){
return cljs.core.map.call(null,qval,data);
} else {
if(cljs.core.truth_(pred__13221.call(null,cljs.core.cst$kw$filter,expr__13222))){
return cljs.core.filter.call(null,qval,data);
} else {
if(cljs.core.truth_(pred__13221.call(null,cljs.core.cst$kw$remove,expr__13222))){
return cljs.core.remove.call(null,qval,data);
} else {
if(cljs.core.truth_(pred__13221.call(null,cljs.core.cst$kw$eval,expr__13222))){
return qval.call(null,data);
} else {
return [cljs.core.str("Unknown query type: "),cljs.core.str(qtype)].join('');
}
}
}
}
}
})();
var G__13225 = queries;
data = G__13224;
p__13213 = G__13225;
continue;
}
break;
}
});
clack.core.handle_input = (function clack$core$handle_input(input,query,meta){

var data = clack.util.read_input.call(null,cljs.core.cst$kw$input_DASH_format.cljs$core$IFn$_invoke$arity$1(meta),input);
return clack.util.write_output.call(null,cljs.core.cst$kw$output_DASH_format.cljs$core$IFn$_invoke$arity$1(meta),(cljs.core.truth_(cljs.core.not_empty.call(null,query))?clack.core.search.call(null,data,query):data));
});
clack.core.slurp_stdin = (function clack$core$slurp_stdin(){
var input = cljs.core.atom.call(null,"");
var map__13229 = (function (){var temp__4657__auto__ = cljs.core.not_empty.call(null,cljs.core.drop.call(null,(2),cljs.core.js__GT_clj.call(null,process.argv)));
if(cljs.core.truth_(temp__4657__auto__)){
var args = temp__4657__auto__;
return clack.core.get_query.call(null,args);
} else {
return null;
}
})();
var map__13229__$1 = ((((!((map__13229 == null)))?((((map__13229.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13229.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13229):map__13229);
var meta = cljs.core.get.call(null,map__13229__$1,cljs.core.cst$kw$meta);
var search = cljs.core.get.call(null,map__13229__$1,cljs.core.cst$kw$search);
process.stdin.on("readable",((function (input,map__13229,map__13229__$1,meta,search){
return (function (){
var temp__4657__auto__ = process.stdin.read();
if(cljs.core.truth_(temp__4657__auto__)){
var chunk = temp__4657__auto__;
return cljs.core.swap_BANG_.call(null,input,((function (chunk,temp__4657__auto__,input,map__13229,map__13229__$1,meta,search){
return (function (p1__13226_SHARP_){
return [cljs.core.str(p1__13226_SHARP_),cljs.core.str(chunk)].join('');
});})(chunk,temp__4657__auto__,input,map__13229,map__13229__$1,meta,search))
);
} else {
return null;
}
});})(input,map__13229,map__13229__$1,meta,search))
);

return process.stdin.on("end",((function (input,map__13229,map__13229__$1,meta,search){
return (function (){
return cljs.core.print.call(null,clack.core.handle_input.call(null,cljs.core.deref.call(null,input),search,meta));
});})(input,map__13229,map__13229__$1,meta,search))
);
});
clack.core._main = (function clack$core$_main(var_args){
var args__7287__auto__ = [];
var len__7280__auto___13232 = arguments.length;
var i__7281__auto___13233 = (0);
while(true){
if((i__7281__auto___13233 < len__7280__auto___13232)){
args__7287__auto__.push((arguments[i__7281__auto___13233]));

var G__13234 = (i__7281__auto___13233 + (1));
i__7281__auto___13233 = G__13234;
continue;
} else {
}
break;
}

var argseq__7288__auto__ = ((((0) < args__7287__auto__.length))?(new cljs.core.IndexedSeq(args__7287__auto__.slice((0)),(0),null)):null);
return clack.core._main.cljs$core$IFn$_invoke$arity$variadic(argseq__7288__auto__);
});

clack.core._main.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return clack.core.slurp_stdin.call(null);
});

clack.core._main.cljs$lang$maxFixedArity = (0);

clack.core._main.cljs$lang$applyTo = (function (seq13231){
return clack.core._main.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13231));
});
cljs.core._STAR_main_cli_fn_STAR_ = clack.core._main;

//# sourceMappingURL=core.js.map