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
clack.core.search_opts = cljs.core.reduce.call(null,(function (coll,p__16577){
var vec__16578 = p__16577;
var k = cljs.core.nth.call(null,vec__16578,(0),null);
var vec__16581 = cljs.core.nth.call(null,vec__16578,(1),null);
var short_opt = cljs.core.nth.call(null,vec__16581,(0),null);
var long_opt = cljs.core.nth.call(null,vec__16581,(1),null);
return cljs.core.assoc.call(null,coll,short_opt,k,long_opt,k);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.dissoc.call(null,clack.core.allowed_opts,cljs.core.cst$kw$input_DASH_format,cljs.core.cst$kw$output_DASH_format,cljs.core.cst$kw$wrap,cljs.core.cst$kw$unwrap));
clack.core.wrap_opts = cljs.core.reduce.call(null,(function (coll,p__16584){
var vec__16585 = p__16584;
var k = cljs.core.nth.call(null,vec__16585,(0),null);
var vec__16588 = cljs.core.nth.call(null,vec__16585,(1),null);
var short_opt = cljs.core.nth.call(null,vec__16588,(0),null);
var long_opt = cljs.core.nth.call(null,vec__16588,(1),null);
return cljs.core.assoc.call(null,coll,short_opt,k,long_opt,k);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.select_keys.call(null,clack.core.allowed_opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$wrap,cljs.core.cst$kw$unwrap], null)));
clack.core.input_opts = cljs.core.reduce.call(null,(function (coll,p__16592){
var vec__16593 = p__16592;
var k = cljs.core.nth.call(null,vec__16593,(0),null);
var vec__16596 = cljs.core.nth.call(null,vec__16593,(1),null);
var short_opt = cljs.core.nth.call(null,vec__16596,(0),null);
var long_opt = cljs.core.nth.call(null,vec__16596,(1),null);
return cljs.core.assoc.call(null,coll,short_opt,k,long_opt,k);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,(function (p1__16591_SHARP_){
return clack.core.input_opt_keys.call(null,cljs.core.key.call(null,p1__16591_SHARP_));
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
var args16599 = [];
var len__7484__auto___16606 = arguments.length;
var i__7485__auto___16607 = (0);
while(true){
if((i__7485__auto___16607 < len__7484__auto___16606)){
args16599.push((arguments[i__7485__auto___16607]));

var G__16608 = (i__7485__auto___16607 + (1));
i__7485__auto___16607 = G__16608;
continue;
} else {
}
break;
}

var G__16601 = args16599.length;
switch (G__16601) {
case 1:
return clack.core.get_query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clack.core.get_query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16599.length)].join('')));

}
});

clack.core.get_query.cljs$core$IFn$_invoke$arity$1 = (function (args){
return clack.core.get_query.call(null,args,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$meta,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$search,cljs.core.PersistentVector.EMPTY], null));
});

clack.core.get_query.cljs$core$IFn$_invoke$arity$2 = (function (p__16602,query){
while(true){
var vec__16603 = p__16602;
var seq__16604 = cljs.core.seq.call(null,vec__16603);
var first__16605 = cljs.core.first.call(null,seq__16604);
var seq__16604__$1 = cljs.core.next.call(null,seq__16604);
var arg = first__16605;
var args = seq__16604__$1;
if(cljs.core.not.call(null,arg)){
return query;
} else {
if(cljs.core.truth_(clack.core.looks_like_regex_QMARK_.call(null,arg))){
var G__16610 = cljs.core.rest.call(null,args);
var G__16611 = cljs.core.update_in.call(null,query,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$search], null),cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$eval,clack.core.regex_fn.call(null,arg)], null));
p__16602 = G__16610;
query = G__16611;
continue;
} else {
if(cljs.core.truth_(clack.core.looks_like_keyword_QMARK_.call(null,arg))){
var G__16612 = args;
var G__16613 = cljs.core.update_in.call(null,query,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$search], null),cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$get,cljs.core.keyword.call(null,arg.substr((1)))], null));
p__16602 = G__16612;
query = G__16613;
continue;
} else {
if(cljs.core.truth_(clack.core.looks_like_number_QMARK_.call(null,arg))){
var G__16614 = args;
var G__16615 = cljs.core.update_in.call(null,query,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$search], null),cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$get,parseInt(arg)], null));
p__16602 = G__16614;
query = G__16615;
continue;
} else {
if(cljs.core.truth_(clack.core.looks_like_string_QMARK_.call(null,arg))){
var G__16616 = args;
var G__16617 = cljs.core.update_in.call(null,query,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$search], null),cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$get,arg], null));
p__16602 = G__16616;
query = G__16617;
continue;
} else {
if(cljs.core.truth_(clack.core.wrap_opts.call(null,arg))){
var G__16618 = args;
var G__16619 = cljs.core.update_in.call(null,query,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$meta], null),cljs.core.assoc,clack.core.wrap_opts.call(null,arg),true);
p__16602 = G__16618;
query = G__16619;
continue;
} else {
if(cljs.core.truth_(clack.core.input_opts.call(null,arg))){
var G__16620 = cljs.core.rest.call(null,args);
var G__16621 = cljs.core.update_in.call(null,query,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$meta], null),cljs.core.assoc,clack.core.input_opts.call(null,arg),cljs.core.keyword.call(null,cljs.tools.reader.read_string.call(null,cljs.core.first.call(null,args))));
p__16602 = G__16620;
query = G__16621;
continue;
} else {
if(cljs.core.truth_(clack.core.search_opts.call(null,arg))){
var pred = cljs.core.first.call(null,args);
var G__16622 = cljs.core.rest.call(null,args);
var G__16623 = cljs.core.update_in.call(null,query,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$search], null),cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clack.core.search_opts.call(null,arg),(cljs.core.truth_(clack.core.looks_like_regex_QMARK_.call(null,pred))?clack.core.regex_fn.call(null,pred):cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(clack.util.eval_STAR_.call(null,pred)))], null));
p__16602 = G__16622;
query = G__16623;
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

clack.core.search = (function clack$core$search(data,p__16624){
while(true){
var vec__16634 = p__16624;
var seq__16635 = cljs.core.seq.call(null,vec__16634);
var first__16636 = cljs.core.first.call(null,seq__16635);
var seq__16635__$1 = cljs.core.next.call(null,seq__16635);
var vec__16637 = first__16636;
var qtype = cljs.core.nth.call(null,vec__16637,(0),null);
var qval = cljs.core.nth.call(null,vec__16637,(1),null);
var query = vec__16637;
var queries = seq__16635__$1;
if(cljs.core.not.call(null,query)){
return data;
} else {
var G__16643 = (function (){var pred__16640 = cljs.core._EQ_;
var expr__16641 = qtype;
if(cljs.core.truth_(pred__16640.call(null,cljs.core.cst$kw$get,expr__16641))){
return cljs.core.get.call(null,data,qval);
} else {
if(cljs.core.truth_(pred__16640.call(null,cljs.core.cst$kw$map,expr__16641))){
return cljs.core.map.call(null,qval,data);
} else {
if(cljs.core.truth_(pred__16640.call(null,cljs.core.cst$kw$filter,expr__16641))){
return cljs.core.filter.call(null,qval,data);
} else {
if(cljs.core.truth_(pred__16640.call(null,cljs.core.cst$kw$remove,expr__16641))){
return cljs.core.remove.call(null,qval,data);
} else {
if(cljs.core.truth_(pred__16640.call(null,cljs.core.cst$kw$eval,expr__16641))){
return qval.call(null,data);
} else {
return [cljs.core.str("Unknown query type: "),cljs.core.str(qtype)].join('');
}
}
}
}
}
})();
var G__16644 = queries;
data = G__16643;
p__16624 = G__16644;
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
var len__7484__auto___16650 = arguments.length;
var i__7485__auto___16651 = (0);
while(true){
if((i__7485__auto___16651 < len__7484__auto___16650)){
args__7491__auto__.push((arguments[i__7485__auto___16651]));

var G__16652 = (i__7485__auto___16651 + (1));
i__7485__auto___16651 = G__16652;
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
var seq__16646 = cljs.core.seq.call(null,clack.core.apply_query.call(null,query,entities__$1));
var chunk__16647 = null;
var count__16648 = (0);
var i__16649 = (0);
while(true){
if((i__16649 < count__16648)){
var entity = cljs.core._nth.call(null,chunk__16647,i__16649);
cljs.core.print.call(null,entity);

var G__16653 = seq__16646;
var G__16654 = chunk__16647;
var G__16655 = count__16648;
var G__16656 = (i__16649 + (1));
seq__16646 = G__16653;
chunk__16647 = G__16654;
count__16648 = G__16655;
i__16649 = G__16656;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__16646);
if(temp__4657__auto__){
var seq__16646__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16646__$1)){
var c__7220__auto__ = cljs.core.chunk_first.call(null,seq__16646__$1);
var G__16657 = cljs.core.chunk_rest.call(null,seq__16646__$1);
var G__16658 = c__7220__auto__;
var G__16659 = cljs.core.count.call(null,c__7220__auto__);
var G__16660 = (0);
seq__16646 = G__16657;
chunk__16647 = G__16658;
count__16648 = G__16659;
i__16649 = G__16660;
continue;
} else {
var entity = cljs.core.first.call(null,seq__16646__$1);
cljs.core.print.call(null,entity);

var G__16661 = cljs.core.next.call(null,seq__16646__$1);
var G__16662 = null;
var G__16663 = (0);
var G__16664 = (0);
seq__16646 = G__16661;
chunk__16647 = G__16662;
count__16648 = G__16663;
i__16649 = G__16664;
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

clack.core._main.cljs$lang$applyTo = (function (seq16645){
return clack.core._main.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16645));
});

cljs.core._STAR_main_cli_fn_STAR_ = clack.core._main;

//# sourceMappingURL=core.js.map