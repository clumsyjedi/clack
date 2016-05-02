// Compiled by ClojureScript 1.8.51 {:optimize-constants true, :target :nodejs}
goog.provide('clack.core');
goog.require('cljs.core');
goog.require('cljs.nodejs');
goog.require('cljs.pprint');
goog.require('clack.util');
cljs.nodejs.enable_util_print_BANG_.call(null);
clack.core.allowed_opts = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$input_DASH_format,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-i","--input-format"], null),cljs.core.cst$kw$output_DASH_format,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-o","--output-format"], null),cljs.core.cst$kw$filter,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-f","--filter"], null),cljs.core.cst$kw$remove,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-r","--remove"], null),cljs.core.cst$kw$get,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-g","--get-in"], null),cljs.core.cst$kw$eval,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-e","--eval"], null)], null);
clack.core.meta_opt_keys = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$input_DASH_format,null,cljs.core.cst$kw$output_DASH_format,null], null), null);
clack.core.search_opts = cljs.core.reduce.call(null,(function (coll,p__16627){
var vec__16628 = p__16627;
var k = cljs.core.nth.call(null,vec__16628,(0),null);
var vec__16629 = cljs.core.nth.call(null,vec__16628,(1),null);
var short_opt = cljs.core.nth.call(null,vec__16629,(0),null);
var long_opt = cljs.core.nth.call(null,vec__16629,(1),null);
return cljs.core.assoc.call(null,coll,short_opt,k,long_opt,k);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.call(null,(function (p1__16626_SHARP_){
return clack.core.meta_opt_keys.call(null,cljs.core.key.call(null,p1__16626_SHARP_));
}),clack.core.allowed_opts));
clack.core.meta_opts = cljs.core.reduce.call(null,(function (coll,p__16631){
var vec__16632 = p__16631;
var k = cljs.core.nth.call(null,vec__16632,(0),null);
var vec__16633 = cljs.core.nth.call(null,vec__16632,(1),null);
var short_opt = cljs.core.nth.call(null,vec__16633,(0),null);
var long_opt = cljs.core.nth.call(null,vec__16633,(1),null);
return cljs.core.assoc.call(null,coll,short_opt,k,long_opt,k);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,(function (p1__16630_SHARP_){
return clack.core.meta_opt_keys.call(null,cljs.core.key.call(null,p1__16630_SHARP_));
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
var args16634 = [];
var len__7280__auto___16639 = arguments.length;
var i__7281__auto___16640 = (0);
while(true){
if((i__7281__auto___16640 < len__7280__auto___16639)){
args16634.push((arguments[i__7281__auto___16640]));

var G__16641 = (i__7281__auto___16640 + (1));
i__7281__auto___16640 = G__16641;
continue;
} else {
}
break;
}

var G__16636 = args16634.length;
switch (G__16636) {
case 1:
return clack.core.get_query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clack.core.get_query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16634.length)].join('')));

}
});

clack.core.get_query.cljs$core$IFn$_invoke$arity$1 = (function (args){
return clack.core.get_query.call(null,args,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$meta,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$search,cljs.core.PersistentVector.EMPTY], null));
});

clack.core.get_query.cljs$core$IFn$_invoke$arity$2 = (function (p__16637,query){
while(true){
var vec__16638 = p__16637;
var arg = cljs.core.nth.call(null,vec__16638,(0),null);
var args = cljs.core.nthnext.call(null,vec__16638,(1));
if(cljs.core.not.call(null,arg)){
return query;
} else {
if(cljs.core.truth_(clack.core.looks_like_keyword_QMARK_.call(null,arg))){
var G__16643 = args;
var G__16644 = cljs.core.update_in.call(null,query,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$search], null),cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$get,cljs.core.keyword.call(null,arg.substr((1)))], null));
p__16637 = G__16643;
query = G__16644;
continue;
} else {
if(cljs.core.truth_(clack.core.looks_like_number_QMARK_.call(null,arg))){
var G__16645 = args;
var G__16646 = cljs.core.update_in.call(null,query,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$search], null),cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$get,parseInt(arg)], null));
p__16637 = G__16645;
query = G__16646;
continue;
} else {
if(cljs.core.truth_(clack.core.looks_like_string_QMARK_.call(null,arg))){
var G__16647 = args;
var G__16648 = cljs.core.update_in.call(null,query,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$search], null),cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$get,arg], null));
p__16637 = G__16647;
query = G__16648;
continue;
} else {
if(cljs.core.truth_(clack.core.meta_opts.call(null,arg))){
var G__16649 = cljs.core.rest.call(null,args);
var G__16650 = cljs.core.update_in.call(null,query,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$meta], null),cljs.core.assoc,clack.core.meta_opts.call(null,arg),cljs.core.keyword.call(null,clack.util.read_input.call(null,cljs.core.cst$kw$edn,cljs.core.first.call(null,args))));
p__16637 = G__16649;
query = G__16650;
continue;
} else {
if(cljs.core.truth_(clack.core.search_opts.call(null,arg))){
var G__16651 = cljs.core.rest.call(null,args);
var G__16652 = cljs.core.update_in.call(null,query,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$search], null),cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clack.core.search_opts.call(null,arg),cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(clack.util.eval_STAR_.call(null,cljs.core.first.call(null,args)))], null));
p__16637 = G__16651;
query = G__16652;
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
clack.core.search = (function clack$core$search(data,p__16653){
while(true){
var vec__16659 = p__16653;
var vec__16660 = cljs.core.nth.call(null,vec__16659,(0),null);
var qtype = cljs.core.nth.call(null,vec__16660,(0),null);
var qval = cljs.core.nth.call(null,vec__16660,(1),null);
var query = vec__16660;
var queries = cljs.core.nthnext.call(null,vec__16659,(1));
if(cljs.core.not.call(null,query)){
return data;
} else {
var G__16664 = (function (){var pred__16661 = cljs.core._EQ_;
var expr__16662 = qtype;
if(cljs.core.truth_(pred__16661.call(null,cljs.core.cst$kw$get,expr__16662))){
return cljs.core.get.call(null,data,qval);
} else {
if(cljs.core.truth_(pred__16661.call(null,cljs.core.cst$kw$filter,expr__16662))){
return cljs.core.filter.call(null,qval,data);
} else {
if(cljs.core.truth_(pred__16661.call(null,cljs.core.cst$kw$remove,expr__16662))){
return cljs.core.remove.call(null,qval,data);
} else {
if(cljs.core.truth_(pred__16661.call(null,cljs.core.cst$kw$eval,expr__16662))){
return qval.call(null,data);
} else {
return [cljs.core.str("Unknown query type: "),cljs.core.str(qtype)].join('');
}
}
}
}
})();
var G__16665 = queries;
data = G__16664;
p__16653 = G__16665;
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
var map__16669 = (function (){var temp__4657__auto__ = cljs.core.not_empty.call(null,cljs.core.drop.call(null,(2),cljs.core.js__GT_clj.call(null,process.argv)));
if(cljs.core.truth_(temp__4657__auto__)){
var args = temp__4657__auto__;
return clack.core.get_query.call(null,args);
} else {
return null;
}
})();
var map__16669__$1 = ((((!((map__16669 == null)))?((((map__16669.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16669.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16669):map__16669);
var meta = cljs.core.get.call(null,map__16669__$1,cljs.core.cst$kw$meta);
var search = cljs.core.get.call(null,map__16669__$1,cljs.core.cst$kw$search);
process.stdin.on("readable",((function (input,map__16669,map__16669__$1,meta,search){
return (function (){
var temp__4657__auto__ = process.stdin.read();
if(cljs.core.truth_(temp__4657__auto__)){
var chunk = temp__4657__auto__;
return cljs.core.swap_BANG_.call(null,input,((function (chunk,temp__4657__auto__,input,map__16669,map__16669__$1,meta,search){
return (function (p1__16666_SHARP_){
return [cljs.core.str(p1__16666_SHARP_),cljs.core.str(chunk)].join('');
});})(chunk,temp__4657__auto__,input,map__16669,map__16669__$1,meta,search))
);
} else {
return null;
}
});})(input,map__16669,map__16669__$1,meta,search))
);

return process.stdin.on("end",((function (input,map__16669,map__16669__$1,meta,search){
return (function (){
return cljs.core.print.call(null,clack.core.handle_input.call(null,cljs.core.deref.call(null,input),search,meta));
});})(input,map__16669,map__16669__$1,meta,search))
);
});
clack.core._main = (function clack$core$_main(var_args){
var args__7287__auto__ = [];
var len__7280__auto___16672 = arguments.length;
var i__7281__auto___16673 = (0);
while(true){
if((i__7281__auto___16673 < len__7280__auto___16672)){
args__7287__auto__.push((arguments[i__7281__auto___16673]));

var G__16674 = (i__7281__auto___16673 + (1));
i__7281__auto___16673 = G__16674;
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

clack.core._main.cljs$lang$applyTo = (function (seq16671){
return clack.core._main.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16671));
});
cljs.core._STAR_main_cli_fn_STAR_ = clack.core._main;

//# sourceMappingURL=core.js.map