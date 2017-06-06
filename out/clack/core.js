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
clack.core.search_opts = cljs.core.reduce.call(null,(function (coll,p__15480){
var vec__15481 = p__15480;
var k = cljs.core.nth.call(null,vec__15481,(0),null);
var vec__15484 = cljs.core.nth.call(null,vec__15481,(1),null);
var short_opt = cljs.core.nth.call(null,vec__15484,(0),null);
var long_opt = cljs.core.nth.call(null,vec__15484,(1),null);
return cljs.core.assoc.call(null,coll,short_opt,k,long_opt,k);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.dissoc.call(null,clack.core.allowed_opts,cljs.core.cst$kw$input_DASH_format,cljs.core.cst$kw$output_DASH_format,cljs.core.cst$kw$wrap,cljs.core.cst$kw$unwrap));
clack.core.wrap_opts = cljs.core.reduce.call(null,(function (coll,p__15487){
var vec__15488 = p__15487;
var k = cljs.core.nth.call(null,vec__15488,(0),null);
var vec__15491 = cljs.core.nth.call(null,vec__15488,(1),null);
var short_opt = cljs.core.nth.call(null,vec__15491,(0),null);
var long_opt = cljs.core.nth.call(null,vec__15491,(1),null);
return cljs.core.assoc.call(null,coll,short_opt,k,long_opt,k);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.select_keys.call(null,clack.core.allowed_opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$wrap,cljs.core.cst$kw$unwrap], null)));
clack.core.input_opts = cljs.core.reduce.call(null,(function (coll,p__15495){
var vec__15496 = p__15495;
var k = cljs.core.nth.call(null,vec__15496,(0),null);
var vec__15499 = cljs.core.nth.call(null,vec__15496,(1),null);
var short_opt = cljs.core.nth.call(null,vec__15499,(0),null);
var long_opt = cljs.core.nth.call(null,vec__15499,(1),null);
return cljs.core.assoc.call(null,coll,short_opt,k,long_opt,k);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,(function (p1__15494_SHARP_){
return clack.core.input_opt_keys.call(null,cljs.core.key.call(null,p1__15494_SHARP_));
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
var args15502 = [];
var len__7484__auto___15509 = arguments.length;
var i__7485__auto___15510 = (0);
while(true){
if((i__7485__auto___15510 < len__7484__auto___15509)){
args15502.push((arguments[i__7485__auto___15510]));

var G__15511 = (i__7485__auto___15510 + (1));
i__7485__auto___15510 = G__15511;
continue;
} else {
}
break;
}

var G__15504 = args15502.length;
switch (G__15504) {
case 1:
return clack.core.get_query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clack.core.get_query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15502.length)].join('')));

}
});

clack.core.get_query.cljs$core$IFn$_invoke$arity$1 = (function (args){
return clack.core.get_query.call(null,args,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$meta,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$search,cljs.core.PersistentVector.EMPTY], null));
});

clack.core.get_query.cljs$core$IFn$_invoke$arity$2 = (function (p__15505,query){
while(true){
var vec__15506 = p__15505;
var seq__15507 = cljs.core.seq.call(null,vec__15506);
var first__15508 = cljs.core.first.call(null,seq__15507);
var seq__15507__$1 = cljs.core.next.call(null,seq__15507);
var arg = first__15508;
var args = seq__15507__$1;
if(cljs.core.not.call(null,arg)){
return query;
} else {
if(cljs.core.truth_(clack.core.looks_like_regex_QMARK_.call(null,arg))){
var G__15513 = cljs.core.rest.call(null,args);
var G__15514 = cljs.core.update_in.call(null,query,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$search], null),cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$eval,clack.core.regex_fn.call(null,arg)], null));
p__15505 = G__15513;
query = G__15514;
continue;
} else {
if(cljs.core.truth_(clack.core.looks_like_keyword_QMARK_.call(null,arg))){
var G__15515 = args;
var G__15516 = cljs.core.update_in.call(null,query,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$search], null),cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$get,cljs.core.keyword.call(null,arg.substr((1)))], null));
p__15505 = G__15515;
query = G__15516;
continue;
} else {
if(cljs.core.truth_(clack.core.looks_like_number_QMARK_.call(null,arg))){
var G__15517 = args;
var G__15518 = cljs.core.update_in.call(null,query,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$search], null),cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$get,parseInt(arg)], null));
p__15505 = G__15517;
query = G__15518;
continue;
} else {
if(cljs.core.truth_(clack.core.looks_like_string_QMARK_.call(null,arg))){
var G__15519 = args;
var G__15520 = cljs.core.update_in.call(null,query,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$search], null),cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$get,arg], null));
p__15505 = G__15519;
query = G__15520;
continue;
} else {
if(cljs.core.truth_(clack.core.wrap_opts.call(null,arg))){
var G__15521 = args;
var G__15522 = cljs.core.update_in.call(null,query,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$meta], null),cljs.core.assoc,clack.core.wrap_opts.call(null,arg),true);
p__15505 = G__15521;
query = G__15522;
continue;
} else {
if(cljs.core.truth_(clack.core.input_opts.call(null,arg))){
var G__15523 = cljs.core.rest.call(null,args);
var G__15524 = cljs.core.update_in.call(null,query,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$meta], null),cljs.core.assoc,clack.core.input_opts.call(null,arg),cljs.core.keyword.call(null,cljs.tools.reader.read_string.call(null,cljs.core.first.call(null,args))));
p__15505 = G__15523;
query = G__15524;
continue;
} else {
if(cljs.core.truth_(clack.core.search_opts.call(null,arg))){
var pred = cljs.core.first.call(null,args);
var G__15525 = cljs.core.rest.call(null,args);
var G__15526 = cljs.core.update_in.call(null,query,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$search], null),cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clack.core.search_opts.call(null,arg),(cljs.core.truth_(clack.core.looks_like_regex_QMARK_.call(null,pred))?clack.core.regex_fn.call(null,pred):cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(clack.util.eval_STAR_.call(null,pred)))], null));
p__15505 = G__15525;
query = G__15526;
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

clack.core.search = (function clack$core$search(data,p__15527){
while(true){
var vec__15537 = p__15527;
var seq__15538 = cljs.core.seq.call(null,vec__15537);
var first__15539 = cljs.core.first.call(null,seq__15538);
var seq__15538__$1 = cljs.core.next.call(null,seq__15538);
var vec__15540 = first__15539;
var qtype = cljs.core.nth.call(null,vec__15540,(0),null);
var qval = cljs.core.nth.call(null,vec__15540,(1),null);
var query = vec__15540;
var queries = seq__15538__$1;
if(cljs.core.not.call(null,query)){
return data;
} else {
var G__15546 = (function (){var pred__15543 = cljs.core._EQ_;
var expr__15544 = qtype;
if(cljs.core.truth_(pred__15543.call(null,cljs.core.cst$kw$get,expr__15544))){
return cljs.core.get.call(null,data,qval);
} else {
if(cljs.core.truth_(pred__15543.call(null,cljs.core.cst$kw$map,expr__15544))){
return cljs.core.map.call(null,qval,data);
} else {
if(cljs.core.truth_(pred__15543.call(null,cljs.core.cst$kw$filter,expr__15544))){
return cljs.core.filter.call(null,qval,data);
} else {
if(cljs.core.truth_(pred__15543.call(null,cljs.core.cst$kw$remove,expr__15544))){
return cljs.core.remove.call(null,qval,data);
} else {
if(cljs.core.truth_(pred__15543.call(null,cljs.core.cst$kw$eval,expr__15544))){
return qval.call(null,data);
} else {
return [cljs.core.str("Unknown query type: "),cljs.core.str(qtype)].join('');
}
}
}
}
}
})();
var G__15547 = queries;
data = G__15546;
p__15527 = G__15547;
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
var len__7484__auto___15553 = arguments.length;
var i__7485__auto___15554 = (0);
while(true){
if((i__7485__auto___15554 < len__7484__auto___15553)){
args__7491__auto__.push((arguments[i__7485__auto___15554]));

var G__15555 = (i__7485__auto___15554 + (1));
i__7485__auto___15554 = G__15555;
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
var seq__15549 = cljs.core.seq.call(null,clack.core.apply_query.call(null,query,entities__$1));
var chunk__15550 = null;
var count__15551 = (0);
var i__15552 = (0);
while(true){
if((i__15552 < count__15551)){
var entity = cljs.core._nth.call(null,chunk__15550,i__15552);
cljs.core.print.call(null,entity);

var G__15556 = seq__15549;
var G__15557 = chunk__15550;
var G__15558 = count__15551;
var G__15559 = (i__15552 + (1));
seq__15549 = G__15556;
chunk__15550 = G__15557;
count__15551 = G__15558;
i__15552 = G__15559;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__15549);
if(temp__4657__auto__){
var seq__15549__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15549__$1)){
var c__7220__auto__ = cljs.core.chunk_first.call(null,seq__15549__$1);
var G__15560 = cljs.core.chunk_rest.call(null,seq__15549__$1);
var G__15561 = c__7220__auto__;
var G__15562 = cljs.core.count.call(null,c__7220__auto__);
var G__15563 = (0);
seq__15549 = G__15560;
chunk__15550 = G__15561;
count__15551 = G__15562;
i__15552 = G__15563;
continue;
} else {
var entity = cljs.core.first.call(null,seq__15549__$1);
cljs.core.print.call(null,entity);

var G__15564 = cljs.core.next.call(null,seq__15549__$1);
var G__15565 = null;
var G__15566 = (0);
var G__15567 = (0);
seq__15549 = G__15564;
chunk__15550 = G__15565;
count__15551 = G__15566;
i__15552 = G__15567;
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

clack.core._main.cljs$lang$applyTo = (function (seq15548){
return clack.core._main.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15548));
});

cljs.core._STAR_main_cli_fn_STAR_ = clack.core._main;

//# sourceMappingURL=core.js.map