// Compiled by ClojureScript 1.8.41 {:target :nodejs}
goog.provide('clack.core');
goog.require('cljs.core');
goog.require('cljs.nodejs');
goog.require('cljs.pprint');
goog.require('cljs.tools.reader');
goog.require('cljs.js');
cljs.nodejs.enable_util_print_BANG_.call(null);
/**
 * log error and exit with error code
 */
clack.core.error = (function clack$core$error(msg){
console.error(msg);

return process.exit((1));
});
/**
 * evaluate string
 */
clack.core.eval_STAR_ = (function clack$core$eval_STAR_(s){
return cljs.js.eval.call(null,cljs.js.empty_state.call(null),cljs.tools.reader.read_string.call(null,s),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"eval","eval",-1103567905),cljs.js.js_eval,new cljs.core.Keyword(null,"source-map","source-map",1706252311),true,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291)], null),(function (result){
return result;
}));
});
clack.core.allowed_opts = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-f","--filter"], null),new cljs.core.Keyword(null,"remove","remove",-131428414),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-r","--remove"], null),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-g","--get-in"], null),new cljs.core.Keyword(null,"eval","eval",-1103567905),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-e","--eval"], null)], null);
clack.core.short_opts = cljs.core.zipmap.call(null,cljs.core.map.call(null,cljs.core.first,cljs.core.vals.call(null,clack.core.allowed_opts)),cljs.core.keys.call(null,clack.core.allowed_opts));
clack.core.long_opts = cljs.core.zipmap.call(null,cljs.core.map.call(null,cljs.core.second,cljs.core.vals.call(null,clack.core.allowed_opts)),cljs.core.keys.call(null,clack.core.allowed_opts));
clack.core.looks_like_keyword_QMARK_ = (function clack$core$looks_like_keyword_QMARK_(s){
return cljs.core.re_find.call(null,/^:[\w\-\.]+$/,s);
});
clack.core.looks_like_string_QMARK_ = (function clack$core$looks_like_string_QMARK_(s){
return cljs.core.re_find.call(null,/^[\w\.][\w\-\.]*$/,s);
});
clack.core.looks_like_number_QMARK_ = (function clack$core$looks_like_number_QMARK_(s){
return cljs.core.every_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, ["0",null,"1",null,"2",null,"3",null,"4",null,"5",null,"6",null,"7",null,"8",null,"9",null], null), null),s);
});
clack.core.get_query = (function clack$core$get_query(var_args){
var args43 = [];
var len__3480__auto___48 = arguments.length;
var i__3481__auto___49 = (0);
while(true){
if((i__3481__auto___49 < len__3480__auto___48)){
args43.push((arguments[i__3481__auto___49]));

var G__50 = (i__3481__auto___49 + (1));
i__3481__auto___49 = G__50;
continue;
} else {
}
break;
}

var G__45 = args43.length;
switch (G__45) {
case 1:
return clack.core.get_query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clack.core.get_query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43.length)].join('')));

}
});

clack.core.get_query.cljs$core$IFn$_invoke$arity$1 = (function (args){
return clack.core.get_query.call(null,args,cljs.core.PersistentVector.EMPTY);
});

clack.core.get_query.cljs$core$IFn$_invoke$arity$2 = (function (p__46,query){
while(true){
var vec__47 = p__46;
var arg = cljs.core.nth.call(null,vec__47,(0),null);
var args = cljs.core.nthnext.call(null,vec__47,(1));
if(cljs.core.not.call(null,arg)){
return query;
} else {
if(cljs.core.truth_(clack.core.looks_like_keyword_QMARK_.call(null,arg))){
var G__52 = args;
var G__53 = cljs.core.conj.call(null,query,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get","get",1683182755),cljs.core.keyword.call(null,arg.substr((1)))], null));
p__46 = G__52;
query = G__53;
continue;
} else {
if(cljs.core.truth_(clack.core.looks_like_number_QMARK_.call(null,arg))){
var G__54 = args;
var G__55 = cljs.core.conj.call(null,query,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get","get",1683182755),parseInt(arg)], null));
p__46 = G__54;
query = G__55;
continue;
} else {
if(cljs.core.truth_(clack.core.looks_like_string_QMARK_.call(null,arg))){
var G__56 = args;
var G__57 = cljs.core.conj.call(null,query,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get","get",1683182755),arg], null));
p__46 = G__56;
query = G__57;
continue;
} else {
if(cljs.core.truth_(clack.core.short_opts.call(null,arg))){
var G__58 = cljs.core.rest.call(null,args);
var G__59 = cljs.core.conj.call(null,query,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clack.core.short_opts.call(null,arg),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(clack.core.eval_STAR_.call(null,cljs.core.first.call(null,args)))], null));
p__46 = G__58;
query = G__59;
continue;
} else {
if(cljs.core.truth_(clack.core.long_opts.call(null,arg))){
var G__60 = cljs.core.rest.call(null,args);
var G__61 = cljs.core.conj.call(null,query,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clack.core.long_opts.call(null,arg),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(clack.core.eval_STAR_.call(null,cljs.core.first.call(null,args)))], null));
p__46 = G__60;
query = G__61;
continue;
} else {
return clack.core.error.call(null,[cljs.core.str("Unknown argument: "),cljs.core.str(arg)].join(''));

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
clack.core.search = (function clack$core$search(data,p__62){
while(true){
var vec__68 = p__62;
var vec__69 = cljs.core.nth.call(null,vec__68,(0),null);
var qtype = cljs.core.nth.call(null,vec__69,(0),null);
var qval = cljs.core.nth.call(null,vec__69,(1),null);
var query = vec__69;
var queries = cljs.core.nthnext.call(null,vec__68,(1));
if(cljs.core.not.call(null,query)){
return data;
} else {
var G__73 = (function (){var pred__70 = cljs.core._EQ_;
var expr__71 = qtype;
if(cljs.core.truth_(pred__70.call(null,new cljs.core.Keyword(null,"get","get",1683182755),expr__71))){
return cljs.core.get.call(null,data,qval);
} else {
if(cljs.core.truth_(pred__70.call(null,new cljs.core.Keyword(null,"filter","filter",-948537934),expr__71))){
return cljs.core.filter.call(null,qval,data);
} else {
if(cljs.core.truth_(pred__70.call(null,new cljs.core.Keyword(null,"remove","remove",-131428414),expr__71))){
return cljs.core.remove.call(null,qval,data);
} else {
if(cljs.core.truth_(pred__70.call(null,new cljs.core.Keyword(null,"eval","eval",-1103567905),expr__71))){
return qval.call(null,data);
} else {
return [cljs.core.str("Unknown query type: "),cljs.core.str(qtype)].join('');
}
}
}
}
})();
var G__74 = queries;
data = G__73;
p__62 = G__74;
continue;
}
break;
}
});
clack.core.slurp_stdin = (function clack$core$slurp_stdin(){
var input = cljs.core.atom.call(null,"");
var query = (function (){var temp__4657__auto__ = cljs.core.not_empty.call(null,cljs.core.drop.call(null,(2),cljs.core.js__GT_clj.call(null,process.argv)));
if(cljs.core.truth_(temp__4657__auto__)){
var args = temp__4657__auto__;
return clack.core.get_query.call(null,args);
} else {
return null;
}
})();
process.stdin.on("readable",((function (input,query){
return (function (){
var temp__4657__auto__ = process.stdin.read();
if(cljs.core.truth_(temp__4657__auto__)){
var chunk = temp__4657__auto__;
return cljs.core.swap_BANG_.call(null,input,((function (chunk,temp__4657__auto__,input,query){
return (function (p1__75_SHARP_){
return [cljs.core.str(p1__75_SHARP_),cljs.core.str(chunk)].join('');
});})(chunk,temp__4657__auto__,input,query))
);
} else {
return null;
}
});})(input,query))
);

return process.stdin.on("end",((function (input,query){
return (function (){
var data = clack.core.eval_STAR_.call(null,cljs.core.deref.call(null,input));
return cljs.pprint.pprint.call(null,(cljs.core.truth_(query)?clack.core.search.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(data),query):new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(data)));
});})(input,query))
);
});
clack.core._main = (function clack$core$_main(var_args){
var args__3483__auto__ = [];
var len__3480__auto___77 = arguments.length;
var i__3481__auto___78 = (0);
while(true){
if((i__3481__auto___78 < len__3480__auto___77)){
args__3483__auto__.push((arguments[i__3481__auto___78]));

var G__79 = (i__3481__auto___78 + (1));
i__3481__auto___78 = G__79;
continue;
} else {
}
break;
}

var argseq__3484__auto__ = ((((0) < args__3483__auto__.length))?(new cljs.core.IndexedSeq(args__3483__auto__.slice((0)),(0),null)):null);
return clack.core._main.cljs$core$IFn$_invoke$arity$variadic(argseq__3484__auto__);
});

clack.core._main.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return clack.core.slurp_stdin.call(null);
});

clack.core._main.cljs$lang$maxFixedArity = (0);

clack.core._main.cljs$lang$applyTo = (function (seq76){
return clack.core._main.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq76));
});
cljs.core._STAR_main_cli_fn_STAR_ = clack.core._main;

//# sourceMappingURL=core.js.map