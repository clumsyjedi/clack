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
clack.core.allowed_opts = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$input_DASH_format,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-i","--input-format"], null),cljs.core.cst$kw$output_DASH_format,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-o","--output-format"], null),cljs.core.cst$kw$map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-m","--map"], null),cljs.core.cst$kw$filter,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-f","--filter"], null),cljs.core.cst$kw$remove,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-r","--remove"], null),cljs.core.cst$kw$get,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-g","--get-in"], null),cljs.core.cst$kw$eval,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-e","--eval"], null)], null);
clack.core.meta_opt_keys = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$input_DASH_format,null,cljs.core.cst$kw$output_DASH_format,null], null), null);
clack.core.search_opts = cljs.core.reduce.call(null,(function (coll,p__15429){
var vec__15430 = p__15429;
var k = cljs.core.nth.call(null,vec__15430,(0),null);
var vec__15433 = cljs.core.nth.call(null,vec__15430,(1),null);
var short_opt = cljs.core.nth.call(null,vec__15433,(0),null);
var long_opt = cljs.core.nth.call(null,vec__15433,(1),null);
return cljs.core.assoc.call(null,coll,short_opt,k,long_opt,k);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.call(null,(function (p1__15428_SHARP_){
return clack.core.meta_opt_keys.call(null,cljs.core.key.call(null,p1__15428_SHARP_));
}),clack.core.allowed_opts));
clack.core.meta_opts = cljs.core.reduce.call(null,(function (coll,p__15437){
var vec__15438 = p__15437;
var k = cljs.core.nth.call(null,vec__15438,(0),null);
var vec__15441 = cljs.core.nth.call(null,vec__15438,(1),null);
var short_opt = cljs.core.nth.call(null,vec__15441,(0),null);
var long_opt = cljs.core.nth.call(null,vec__15441,(1),null);
return cljs.core.assoc.call(null,coll,short_opt,k,long_opt,k);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,(function (p1__15436_SHARP_){
return clack.core.meta_opt_keys.call(null,cljs.core.key.call(null,p1__15436_SHARP_));
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
var args15444 = [];
var len__7484__auto___15451 = arguments.length;
var i__7485__auto___15452 = (0);
while(true){
if((i__7485__auto___15452 < len__7484__auto___15451)){
args15444.push((arguments[i__7485__auto___15452]));

var G__15453 = (i__7485__auto___15452 + (1));
i__7485__auto___15452 = G__15453;
continue;
} else {
}
break;
}

var G__15446 = args15444.length;
switch (G__15446) {
case 1:
return clack.core.get_query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clack.core.get_query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15444.length)].join('')));

}
});

clack.core.get_query.cljs$core$IFn$_invoke$arity$1 = (function (args){
return clack.core.get_query.call(null,args,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$meta,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$search,cljs.core.PersistentVector.EMPTY], null));
});

clack.core.get_query.cljs$core$IFn$_invoke$arity$2 = (function (p__15447,query){
while(true){
var vec__15448 = p__15447;
var seq__15449 = cljs.core.seq.call(null,vec__15448);
var first__15450 = cljs.core.first.call(null,seq__15449);
var seq__15449__$1 = cljs.core.next.call(null,seq__15449);
var arg = first__15450;
var args = seq__15449__$1;
if(cljs.core.not.call(null,arg)){
return query;
} else {
if(cljs.core.truth_(clack.core.looks_like_keyword_QMARK_.call(null,arg))){
var G__15455 = args;
var G__15456 = cljs.core.update_in.call(null,query,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$search], null),cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$get,cljs.core.keyword.call(null,arg.substr((1)))], null));
p__15447 = G__15455;
query = G__15456;
continue;
} else {
if(cljs.core.truth_(clack.core.looks_like_number_QMARK_.call(null,arg))){
var G__15457 = args;
var G__15458 = cljs.core.update_in.call(null,query,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$search], null),cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$get,parseInt(arg)], null));
p__15447 = G__15457;
query = G__15458;
continue;
} else {
if(cljs.core.truth_(clack.core.looks_like_string_QMARK_.call(null,arg))){
var G__15459 = args;
var G__15460 = cljs.core.update_in.call(null,query,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$search], null),cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$get,arg], null));
p__15447 = G__15459;
query = G__15460;
continue;
} else {
if(cljs.core.truth_(clack.core.meta_opts.call(null,arg))){
var G__15461 = cljs.core.rest.call(null,args);
var G__15462 = cljs.core.update_in.call(null,query,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$meta], null),cljs.core.assoc,clack.core.meta_opts.call(null,arg),cljs.core.keyword.call(null,cljs.tools.reader.read_string.call(null,cljs.core.first.call(null,args))));
p__15447 = G__15461;
query = G__15462;
continue;
} else {
if(cljs.core.truth_(clack.core.search_opts.call(null,arg))){
var G__15463 = cljs.core.rest.call(null,args);
var G__15464 = cljs.core.update_in.call(null,query,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$search], null),cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clack.core.search_opts.call(null,arg),cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(clack.util.eval_STAR_.call(null,cljs.core.first.call(null,args)))], null));
p__15447 = G__15463;
query = G__15464;
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

clack.core.search = (function clack$core$search(data,p__15465){
while(true){
var vec__15475 = p__15465;
var seq__15476 = cljs.core.seq.call(null,vec__15475);
var first__15477 = cljs.core.first.call(null,seq__15476);
var seq__15476__$1 = cljs.core.next.call(null,seq__15476);
var vec__15478 = first__15477;
var qtype = cljs.core.nth.call(null,vec__15478,(0),null);
var qval = cljs.core.nth.call(null,vec__15478,(1),null);
var query = vec__15478;
var queries = seq__15476__$1;
if(cljs.core.not.call(null,query)){
return data;
} else {
var G__15484 = (function (){var pred__15481 = cljs.core._EQ_;
var expr__15482 = qtype;
if(cljs.core.truth_(pred__15481.call(null,cljs.core.cst$kw$get,expr__15482))){
return cljs.core.get.call(null,data,qval);
} else {
if(cljs.core.truth_(pred__15481.call(null,cljs.core.cst$kw$map,expr__15482))){
return cljs.core.map.call(null,qval,data);
} else {
if(cljs.core.truth_(pred__15481.call(null,cljs.core.cst$kw$filter,expr__15482))){
return cljs.core.filter.call(null,qval,data);
} else {
if(cljs.core.truth_(pred__15481.call(null,cljs.core.cst$kw$remove,expr__15482))){
return cljs.core.remove.call(null,qval,data);
} else {
if(cljs.core.truth_(pred__15481.call(null,cljs.core.cst$kw$eval,expr__15482))){
return qval.call(null,data);
} else {
return [cljs.core.str("Unknown query type: "),cljs.core.str(qtype)].join('');
}
}
}
}
}
})();
var G__15485 = queries;
data = G__15484;
p__15465 = G__15485;
continue;
}
break;
}
});
clack.core.apply_query = (function clack$core$apply_query(query,entities){
return cljs.core.map.call(null,cljs.core.partial.call(null,clack.serializer.serialize,clack.util.output_format.call(null,cljs.core.cst$kw$meta.cljs$core$IFn$_invoke$arity$1(query))),(function (){var temp__4655__auto__ = cljs.core.not_empty.call(null,cljs.core.get.call(null,query,cljs.core.cst$kw$search));
if(cljs.core.truth_(temp__4655__auto__)){
var s = temp__4655__auto__;
return cljs.core.map.call(null,((function (s,temp__4655__auto__){
return (function (p1__15486_SHARP_){
return clack.core.search.call(null,p1__15486_SHARP_,s);
});})(s,temp__4655__auto__))
,entities);
} else {
return entities;
}
})());
});
clack.core.slurp_stdin = (function clack$core$slurp_stdin(){
var query = (function (){var temp__4657__auto__ = cljs.core.not_empty.call(null,cljs.core.drop.call(null,(2),cljs.core.js__GT_clj.call(null,process.argv)));
if(cljs.core.truth_(temp__4657__auto__)){
var args = temp__4657__auto__;
return clack.core.get_query.call(null,args);
} else {
return null;
}
})();
return clack.parser.parse.call(null,clack.util.input_format.call(null,cljs.core.cst$kw$meta.cljs$core$IFn$_invoke$arity$1(query)),process.stdin,((function (query){
return (function (entities){
var seq__15491 = cljs.core.seq.call(null,clack.core.apply_query.call(null,query,entities));
var chunk__15492 = null;
var count__15493 = (0);
var i__15494 = (0);
while(true){
if((i__15494 < count__15493)){
var entity = cljs.core._nth.call(null,chunk__15492,i__15494);
cljs.core.print.call(null,entity);

var G__15495 = seq__15491;
var G__15496 = chunk__15492;
var G__15497 = count__15493;
var G__15498 = (i__15494 + (1));
seq__15491 = G__15495;
chunk__15492 = G__15496;
count__15493 = G__15497;
i__15494 = G__15498;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__15491);
if(temp__4657__auto__){
var seq__15491__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15491__$1)){
var c__7220__auto__ = cljs.core.chunk_first.call(null,seq__15491__$1);
var G__15499 = cljs.core.chunk_rest.call(null,seq__15491__$1);
var G__15500 = c__7220__auto__;
var G__15501 = cljs.core.count.call(null,c__7220__auto__);
var G__15502 = (0);
seq__15491 = G__15499;
chunk__15492 = G__15500;
count__15493 = G__15501;
i__15494 = G__15502;
continue;
} else {
var entity = cljs.core.first.call(null,seq__15491__$1);
cljs.core.print.call(null,entity);

var G__15503 = cljs.core.next.call(null,seq__15491__$1);
var G__15504 = null;
var G__15505 = (0);
var G__15506 = (0);
seq__15491 = G__15503;
chunk__15492 = G__15504;
count__15493 = G__15505;
i__15494 = G__15506;
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
clack.core._main = (function clack$core$_main(var_args){
var args__7491__auto__ = [];
var len__7484__auto___15508 = arguments.length;
var i__7485__auto___15509 = (0);
while(true){
if((i__7485__auto___15509 < len__7484__auto___15508)){
args__7491__auto__.push((arguments[i__7485__auto___15509]));

var G__15510 = (i__7485__auto___15509 + (1));
i__7485__auto___15509 = G__15510;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((0) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((0)),(0),null)):null);
return clack.core._main.cljs$core$IFn$_invoke$arity$variadic(argseq__7492__auto__);
});

clack.core._main.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return clack.core.slurp_stdin.call(null);
});

clack.core._main.cljs$lang$maxFixedArity = (0);

clack.core._main.cljs$lang$applyTo = (function (seq15507){
return clack.core._main.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15507));
});

cljs.core._STAR_main_cli_fn_STAR_ = clack.core._main;

//# sourceMappingURL=core.js.map