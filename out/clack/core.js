// Compiled by ClojureScript 1.8.51 {:optimize-constants true, :target :nodejs}
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
return cljs.js.eval.call(null,cljs.js.empty_state.call(null),cljs.tools.reader.read_string.call(null,s),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$eval,cljs.js.js_eval,cljs.core.cst$kw$source_DASH_map,true,cljs.core.cst$kw$context,cljs.core.cst$kw$expr], null),(function (result){
return result;
}));
});
clack.core.allowed_opts = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$filter,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-f","--filter"], null),cljs.core.cst$kw$remove,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-r","--remove"], null),cljs.core.cst$kw$get,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-g","--get-in"], null),cljs.core.cst$kw$eval,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-e","--eval"], null)], null);
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
var args13026 = [];
var len__7280__auto___13031 = arguments.length;
var i__7281__auto___13032 = (0);
while(true){
if((i__7281__auto___13032 < len__7280__auto___13031)){
args13026.push((arguments[i__7281__auto___13032]));

var G__13033 = (i__7281__auto___13032 + (1));
i__7281__auto___13032 = G__13033;
continue;
} else {
}
break;
}

var G__13028 = args13026.length;
switch (G__13028) {
case 1:
return clack.core.get_query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clack.core.get_query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13026.length)].join('')));

}
});

clack.core.get_query.cljs$core$IFn$_invoke$arity$1 = (function (args){
return clack.core.get_query.call(null,args,cljs.core.PersistentVector.EMPTY);
});

clack.core.get_query.cljs$core$IFn$_invoke$arity$2 = (function (p__13029,query){
while(true){
var vec__13030 = p__13029;
var arg = cljs.core.nth.call(null,vec__13030,(0),null);
var args = cljs.core.nthnext.call(null,vec__13030,(1));
if(cljs.core.not.call(null,arg)){
return query;
} else {
if(cljs.core.truth_(clack.core.looks_like_keyword_QMARK_.call(null,arg))){
var G__13035 = args;
var G__13036 = cljs.core.conj.call(null,query,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$get,cljs.core.keyword.call(null,arg.substr((1)))], null));
p__13029 = G__13035;
query = G__13036;
continue;
} else {
if(cljs.core.truth_(clack.core.looks_like_number_QMARK_.call(null,arg))){
var G__13037 = args;
var G__13038 = cljs.core.conj.call(null,query,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$get,parseInt(arg)], null));
p__13029 = G__13037;
query = G__13038;
continue;
} else {
if(cljs.core.truth_(clack.core.looks_like_string_QMARK_.call(null,arg))){
var G__13039 = args;
var G__13040 = cljs.core.conj.call(null,query,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$get,arg], null));
p__13029 = G__13039;
query = G__13040;
continue;
} else {
if(cljs.core.truth_(clack.core.short_opts.call(null,arg))){
var G__13041 = cljs.core.rest.call(null,args);
var G__13042 = cljs.core.conj.call(null,query,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clack.core.short_opts.call(null,arg),cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(clack.core.eval_STAR_.call(null,cljs.core.first.call(null,args)))], null));
p__13029 = G__13041;
query = G__13042;
continue;
} else {
if(cljs.core.truth_(clack.core.long_opts.call(null,arg))){
var G__13043 = cljs.core.rest.call(null,args);
var G__13044 = cljs.core.conj.call(null,query,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clack.core.long_opts.call(null,arg),cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(clack.core.eval_STAR_.call(null,cljs.core.first.call(null,args)))], null));
p__13029 = G__13043;
query = G__13044;
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
clack.core.search = (function clack$core$search(data,p__13045){
while(true){
var vec__13051 = p__13045;
var vec__13052 = cljs.core.nth.call(null,vec__13051,(0),null);
var qtype = cljs.core.nth.call(null,vec__13052,(0),null);
var qval = cljs.core.nth.call(null,vec__13052,(1),null);
var query = vec__13052;
var queries = cljs.core.nthnext.call(null,vec__13051,(1));
if(cljs.core.not.call(null,query)){
return data;
} else {
var G__13056 = (function (){var pred__13053 = cljs.core._EQ_;
var expr__13054 = qtype;
if(cljs.core.truth_(pred__13053.call(null,cljs.core.cst$kw$get,expr__13054))){
return cljs.core.get.call(null,data,qval);
} else {
if(cljs.core.truth_(pred__13053.call(null,cljs.core.cst$kw$filter,expr__13054))){
return cljs.core.filter.call(null,qval,data);
} else {
if(cljs.core.truth_(pred__13053.call(null,cljs.core.cst$kw$remove,expr__13054))){
return cljs.core.remove.call(null,qval,data);
} else {
if(cljs.core.truth_(pred__13053.call(null,cljs.core.cst$kw$eval,expr__13054))){
return qval.call(null,data);
} else {
return [cljs.core.str("Unknown query type: "),cljs.core.str(qtype)].join('');
}
}
}
}
})();
var G__13057 = queries;
data = G__13056;
p__13045 = G__13057;
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
return (function (p1__13058_SHARP_){
return [cljs.core.str(p1__13058_SHARP_),cljs.core.str(chunk)].join('');
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
return cljs.pprint.pprint.call(null,(cljs.core.truth_(query)?clack.core.search.call(null,cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(data),query):cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(data)));
});})(input,query))
);
});
clack.core._main = (function clack$core$_main(var_args){
var args__7287__auto__ = [];
var len__7280__auto___13060 = arguments.length;
var i__7281__auto___13061 = (0);
while(true){
if((i__7281__auto___13061 < len__7280__auto___13060)){
args__7287__auto__.push((arguments[i__7281__auto___13061]));

var G__13062 = (i__7281__auto___13061 + (1));
i__7281__auto___13061 = G__13062;
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

clack.core._main.cljs$lang$applyTo = (function (seq13059){
return clack.core._main.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13059));
});
cljs.core._STAR_main_cli_fn_STAR_ = clack.core._main;

//# sourceMappingURL=core.js.map