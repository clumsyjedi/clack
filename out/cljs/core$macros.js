// Compiled by ClojureScript 1.9.229 {:optimize-constants true, :target :nodejs}
goog.provide('cljs.core$macros');
goog.require('cljs.core');
goog.require('cljs.compiler');
goog.require('cljs.core');
goog.require('cljs.env');
goog.require('cljs.analyzer');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('clojure.walk');
/**
 * Threads the expr through the forms. Inserts x as the
 *   second item in the first form, making a list of it if it is not a
 *   list already. If there are more forms, inserts the first form as the
 *   second item in second form, etc.
 */
cljs.core$macros.__GT_ = (function cljs$core$macros$__GT_(var_args){
var args__7491__auto__ = [];
var len__7484__auto___11298 = arguments.length;
var i__7485__auto___11299 = (0);
while(true){
if((i__7485__auto___11299 < len__7484__auto___11298)){
args__7491__auto__.push((arguments[i__7485__auto___11299]));

var G__11300 = (i__7485__auto___11299 + (1));
i__7485__auto___11299 = G__11300;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((3) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7492__auto__);
});

cljs.core$macros.__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
var x__$1 = x;
var forms__$1 = forms;
while(true){
if(cljs.core.truth_(forms__$1)){
var form = cljs.core.first.call(null,forms__$1);
var threaded = ((cljs.core.seq_QMARK_.call(null,form))?cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7243__auto__ = cljs.core.first.call(null,form);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = x__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),cljs.core.next.call(null,form)))),cljs.core.meta.call(null,form)):(function (){var x__7243__auto__ = form;
return cljs.core._conj.call(null,(function (){var x__7243__auto____$1 = x__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto____$1);
})(),x__7243__auto__);
})());
var G__11301 = threaded;
var G__11302 = cljs.core.next.call(null,forms__$1);
x__$1 = G__11301;
forms__$1 = G__11302;
continue;
} else {
return x__$1;
}
break;
}
});

cljs.core$macros.__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.__GT_.cljs$lang$applyTo = (function (seq11294){
var G__11295 = cljs.core.first.call(null,seq11294);
var seq11294__$1 = cljs.core.next.call(null,seq11294);
var G__11296 = cljs.core.first.call(null,seq11294__$1);
var seq11294__$2 = cljs.core.next.call(null,seq11294__$1);
var G__11297 = cljs.core.first.call(null,seq11294__$2);
var seq11294__$3 = cljs.core.next.call(null,seq11294__$2);
return cljs.core$macros.__GT_.cljs$core$IFn$_invoke$arity$variadic(G__11295,G__11296,G__11297,seq11294__$3);
});


cljs.core$macros.__GT_.cljs$lang$macro = true;
/**
 * Threads the expr through the forms. Inserts x as the
 *   last item in the first form, making a list of it if it is not a
 *   list already. If there are more forms, inserts the first form as the
 *   last item in second form, etc.
 */
cljs.core$macros.__GT__GT_ = (function cljs$core$macros$__GT__GT_(var_args){
var args__7491__auto__ = [];
var len__7484__auto___11307 = arguments.length;
var i__7485__auto___11308 = (0);
while(true){
if((i__7485__auto___11308 < len__7484__auto___11307)){
args__7491__auto__.push((arguments[i__7485__auto___11308]));

var G__11309 = (i__7485__auto___11308 + (1));
i__7485__auto___11308 = G__11309;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((3) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.__GT__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7492__auto__);
});

cljs.core$macros.__GT__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
var x__$1 = x;
var forms__$1 = forms;
while(true){
if(cljs.core.truth_(forms__$1)){
var form = cljs.core.first.call(null,forms__$1);
var threaded = ((cljs.core.seq_QMARK_.call(null,form))?cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7243__auto__ = cljs.core.first.call(null,form);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),cljs.core.next.call(null,form),(function (){var x__7243__auto__ = x__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})()))),cljs.core.meta.call(null,form)):(function (){var x__7243__auto__ = form;
return cljs.core._conj.call(null,(function (){var x__7243__auto____$1 = x__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto____$1);
})(),x__7243__auto__);
})());
var G__11310 = threaded;
var G__11311 = cljs.core.next.call(null,forms__$1);
x__$1 = G__11310;
forms__$1 = G__11311;
continue;
} else {
return x__$1;
}
break;
}
});

cljs.core$macros.__GT__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.__GT__GT_.cljs$lang$applyTo = (function (seq11303){
var G__11304 = cljs.core.first.call(null,seq11303);
var seq11303__$1 = cljs.core.next.call(null,seq11303);
var G__11305 = cljs.core.first.call(null,seq11303__$1);
var seq11303__$2 = cljs.core.next.call(null,seq11303__$1);
var G__11306 = cljs.core.first.call(null,seq11303__$2);
var seq11303__$3 = cljs.core.next.call(null,seq11303__$2);
return cljs.core$macros.__GT__GT_.cljs$core$IFn$_invoke$arity$variadic(G__11304,G__11305,G__11306,seq11303__$3);
});


cljs.core$macros.__GT__GT_.cljs$lang$macro = true;
/**
 * form => fieldName-symbol or (instanceMethodName-symbol args*)
 * 
 *   Expands into a member access (.) of the first member on the first
 *   argument, followed by the next member on the result, etc. For
 *   instance:
 * 
 *   (.. System (getProperties) (get "os.name"))
 * 
 *   expands to:
 * 
 *   (. (. System (getProperties)) (get "os.name"))
 * 
 *   but is easier to write, read, and understand.
 */
cljs.core$macros._DOT__DOT_ = (function cljs$core$macros$_DOT__DOT_(var_args){
var args11312 = [];
var len__7484__auto___11320 = arguments.length;
var i__7485__auto___11321 = (0);
while(true){
if((i__7485__auto___11321 < len__7484__auto___11320)){
args11312.push((arguments[i__7485__auto___11321]));

var G__11322 = (i__7485__auto___11321 + (1));
i__7485__auto___11321 = G__11322;
continue;
} else {
}
break;
}

var G__11319 = args11312.length;
switch (G__11319) {
case 4:
return cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__7503__auto__ = (new cljs.core.IndexedSeq(args11312.slice((4)),(0),null));
return cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__7503__auto__);

}
});

cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,form){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),(function (){var x__7243__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
});

cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,form,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$$$),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),(function (){var x__7243__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),more)));
});

cljs.core$macros._DOT__DOT_.cljs$lang$applyTo = (function (seq11313){
var G__11314 = cljs.core.first.call(null,seq11313);
var seq11313__$1 = cljs.core.next.call(null,seq11313);
var G__11315 = cljs.core.first.call(null,seq11313__$1);
var seq11313__$2 = cljs.core.next.call(null,seq11313__$1);
var G__11316 = cljs.core.first.call(null,seq11313__$2);
var seq11313__$3 = cljs.core.next.call(null,seq11313__$2);
var G__11317 = cljs.core.first.call(null,seq11313__$3);
var seq11313__$4 = cljs.core.next.call(null,seq11313__$3);
return cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$variadic(G__11314,G__11315,G__11316,G__11317,seq11313__$4);
});

cljs.core$macros._DOT__DOT_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._DOT__DOT_.cljs$lang$macro = true;
/**
 * Ignores body, yields nil
 */
cljs.core$macros.comment = (function cljs$core$macros$comment(var_args){
var args__7491__auto__ = [];
var len__7484__auto___11327 = arguments.length;
var i__7485__auto___11328 = (0);
while(true){
if((i__7485__auto___11328 < len__7484__auto___11327)){
args__7491__auto__.push((arguments[i__7485__auto___11328]));

var G__11329 = (i__7485__auto___11328 + (1));
i__7485__auto___11328 = G__11329;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((2) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.comment.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7492__auto__);
});

cljs.core$macros.comment.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return null;
});

cljs.core$macros.comment.cljs$lang$maxFixedArity = (2);

cljs.core$macros.comment.cljs$lang$applyTo = (function (seq11324){
var G__11325 = cljs.core.first.call(null,seq11324);
var seq11324__$1 = cljs.core.next.call(null,seq11324);
var G__11326 = cljs.core.first.call(null,seq11324__$1);
var seq11324__$2 = cljs.core.next.call(null,seq11324__$1);
return cljs.core$macros.comment.cljs$core$IFn$_invoke$arity$variadic(G__11325,G__11326,seq11324__$2);
});


cljs.core$macros.comment.cljs$lang$macro = true;
/**
 * Takes a set of test/expr pairs. It evaluates each test one at a
 *   time.  If a test returns logical true, cond evaluates and returns
 *   the value of the corresponding expr and doesn't evaluate any of the
 *   other tests or exprs. (cond) returns nil.
 */
cljs.core$macros.cond = (function cljs$core$macros$cond(var_args){
var args__7491__auto__ = [];
var len__7484__auto___11333 = arguments.length;
var i__7485__auto___11334 = (0);
while(true){
if((i__7485__auto___11334 < len__7484__auto___11333)){
args__7491__auto__.push((arguments[i__7485__auto___11334]));

var G__11335 = (i__7485__auto___11334 + (1));
i__7485__auto___11334 = G__11335;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((2) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.cond.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7492__auto__);
});

cljs.core$macros.cond.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,clauses){
if(cljs.core.truth_(clauses)){
return cljs.core._conj.call(null,(function (){var x__7243__auto__ = cljs.core.first.call(null,clauses);
return cljs.core._conj.call(null,(function (){var x__7243__auto____$1 = ((cljs.core.next.call(null,clauses))?cljs.core.second.call(null,clauses):(function(){throw (new Error("cond requires an even number of forms"))})());
return cljs.core._conj.call(null,(function (){var x__7243__auto____$2 = cljs.core.cons.call(null,cljs.core.cst$sym$cljs$core_SLASH_cond,cljs.core.next.call(null,cljs.core.next.call(null,clauses)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto____$2);
})(),x__7243__auto____$1);
})(),x__7243__auto__);
})(),cljs.core.cst$sym$if);
} else {
return null;
}
});

cljs.core$macros.cond.cljs$lang$maxFixedArity = (2);

cljs.core$macros.cond.cljs$lang$applyTo = (function (seq11330){
var G__11331 = cljs.core.first.call(null,seq11330);
var seq11330__$1 = cljs.core.next.call(null,seq11330);
var G__11332 = cljs.core.first.call(null,seq11330__$1);
var seq11330__$2 = cljs.core.next.call(null,seq11330__$1);
return cljs.core$macros.cond.cljs$core$IFn$_invoke$arity$variadic(G__11331,G__11332,seq11330__$2);
});


cljs.core$macros.cond.cljs$lang$macro = true;
/**
 * defs the supplied var names with no bindings, useful for making forward declarations.
 */
cljs.core$macros.declare = (function cljs$core$macros$declare(var_args){
var args__7491__auto__ = [];
var len__7484__auto___11340 = arguments.length;
var i__7485__auto___11341 = (0);
while(true){
if((i__7485__auto___11341 < len__7484__auto___11340)){
args__7491__auto__.push((arguments[i__7485__auto___11341]));

var G__11342 = (i__7485__auto___11341 + (1));
i__7485__auto___11341 = G__11342;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((2) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.declare.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7492__auto__);
});

cljs.core$macros.declare.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,names){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$do),cljs.core.map.call(null,(function (p1__11336_SHARP_){
return cljs.core._conj.call(null,(function (){var x__7243__auto__ = cljs.core.vary_meta.call(null,p1__11336_SHARP_,cljs.core.assoc,cljs.core.cst$kw$declared,true);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),cljs.core.cst$sym$def);
}),names))));
});

cljs.core$macros.declare.cljs$lang$maxFixedArity = (2);

cljs.core$macros.declare.cljs$lang$applyTo = (function (seq11337){
var G__11338 = cljs.core.first.call(null,seq11337);
var seq11337__$1 = cljs.core.next.call(null,seq11337);
var G__11339 = cljs.core.first.call(null,seq11337__$1);
var seq11337__$2 = cljs.core.next.call(null,seq11337__$1);
return cljs.core$macros.declare.cljs$core$IFn$_invoke$arity$variadic(G__11338,G__11339,seq11337__$2);
});


cljs.core$macros.declare.cljs$lang$macro = true;
/**
 * Evaluates x then calls all of the methods and functions with the
 *   value of x supplied at the front of the given arguments.  The forms
 *   are evaluated in order.  Returns x.
 * 
 *   (doto (new java.util.HashMap) (.put "a" 1) (.put "b" 2))
 */
cljs.core$macros.doto = (function cljs$core$macros$doto(var_args){
var args__7491__auto__ = [];
var len__7484__auto___11347 = arguments.length;
var i__7485__auto___11348 = (0);
while(true){
if((i__7485__auto___11348 < len__7484__auto___11347)){
args__7491__auto__.push((arguments[i__7485__auto___11348]));

var G__11349 = (i__7485__auto___11348 + (1));
i__7485__auto___11348 = G__11349;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((3) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.doto.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7492__auto__);
});

cljs.core$macros.doto.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
var gx = cljs.core.gensym.call(null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7243__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7243__auto__ = gx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),cljs.core.map.call(null,((function (gx){
return (function (f){
if(cljs.core.seq_QMARK_.call(null,f)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7243__auto__ = cljs.core.first.call(null,f);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = gx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),cljs.core.next.call(null,f))));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7243__auto__ = f;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = gx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
}
});})(gx))
,forms),(function (){var x__7243__auto__ = gx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
});

cljs.core$macros.doto.cljs$lang$maxFixedArity = (3);

cljs.core$macros.doto.cljs$lang$applyTo = (function (seq11343){
var G__11344 = cljs.core.first.call(null,seq11343);
var seq11343__$1 = cljs.core.next.call(null,seq11343);
var G__11345 = cljs.core.first.call(null,seq11343__$1);
var seq11343__$2 = cljs.core.next.call(null,seq11343__$1);
var G__11346 = cljs.core.first.call(null,seq11343__$2);
var seq11343__$3 = cljs.core.next.call(null,seq11343__$2);
return cljs.core$macros.doto.cljs$core$IFn$_invoke$arity$variadic(G__11344,G__11345,G__11346,seq11343__$3);
});


cljs.core$macros.doto.cljs$lang$macro = true;
cljs.core$macros.parse_impls = (function cljs$core$macros$parse_impls(specs){
var ret = cljs.core.PersistentArrayMap.EMPTY;
var s = specs;
while(true){
if(cljs.core.seq.call(null,s)){
var G__11350 = cljs.core.assoc.call(null,ret,cljs.core.first.call(null,s),cljs.core.take_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,s)));
var G__11351 = cljs.core.drop_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,s));
ret = G__11350;
s = G__11351;
continue;
} else {
return ret;
}
break;
}
});
cljs.core$macros.emit_extend_protocol = (function cljs$core$macros$emit_extend_protocol(p,specs){
var impls = cljs.core$macros.parse_impls.call(null,specs);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$do),cljs.core.map.call(null,((function (impls){
return (function (p__11356){
var vec__11357 = p__11356;
var t = cljs.core.nth.call(null,vec__11357,(0),null);
var fs = cljs.core.nth.call(null,vec__11357,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_extend_DASH_type),(function (){var x__7243__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = p;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),fs)));
});})(impls))
,impls))));
});
/**
 * Useful when you want to provide several implementations of the same
 *   protocol all at once. Takes a single protocol and the implementation
 *   of that protocol for one or more types. Expands into calls to
 *   extend-type:
 * 
 *   (extend-protocol Protocol
 *     AType
 *       (foo [x] ...)
 *       (bar [x y] ...)
 *     BType
 *       (foo [x] ...)
 *       (bar [x y] ...)
 *     AClass
 *       (foo [x] ...)
 *       (bar [x y] ...)
 *     nil
 *       (foo [x] ...)
 *       (bar [x y] ...))
 * 
 *   expands into:
 * 
 *   (do
 *    (clojure.core/extend-type AType Protocol
 *      (foo [x] ...)
 *      (bar [x y] ...))
 *    (clojure.core/extend-type BType Protocol
 *      (foo [x] ...)
 *      (bar [x y] ...))
 *    (clojure.core/extend-type AClass Protocol
 *      (foo [x] ...)
 *      (bar [x y] ...))
 *    (clojure.core/extend-type nil Protocol
 *      (foo [x] ...)
 *      (bar [x y] ...)))
 */
cljs.core$macros.extend_protocol = (function cljs$core$macros$extend_protocol(var_args){
var args__7491__auto__ = [];
var len__7484__auto___11364 = arguments.length;
var i__7485__auto___11365 = (0);
while(true){
if((i__7485__auto___11365 < len__7484__auto___11364)){
args__7491__auto__.push((arguments[i__7485__auto___11365]));

var G__11366 = (i__7485__auto___11365 + (1));
i__7485__auto___11365 = G__11366;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((3) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.extend_protocol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7492__auto__);
});

cljs.core$macros.extend_protocol.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p,specs){
return cljs.core$macros.emit_extend_protocol.call(null,p,specs);
});

cljs.core$macros.extend_protocol.cljs$lang$maxFixedArity = (3);

cljs.core$macros.extend_protocol.cljs$lang$applyTo = (function (seq11360){
var G__11361 = cljs.core.first.call(null,seq11360);
var seq11360__$1 = cljs.core.next.call(null,seq11360);
var G__11362 = cljs.core.first.call(null,seq11360__$1);
var seq11360__$2 = cljs.core.next.call(null,seq11360__$1);
var G__11363 = cljs.core.first.call(null,seq11360__$2);
var seq11360__$3 = cljs.core.next.call(null,seq11360__$2);
return cljs.core$macros.extend_protocol.cljs$core$IFn$_invoke$arity$variadic(G__11361,G__11362,G__11363,seq11360__$3);
});


cljs.core$macros.extend_protocol.cljs$lang$macro = true;
cljs.core$macros.maybe_destructured = (function cljs$core$macros$maybe_destructured(params,body){
if(cljs.core.every_QMARK_.call(null,cljs.core.symbol_QMARK_,params)){
return cljs.core.cons.call(null,params,body);
} else {
var params__$1 = params;
var new_params = cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.meta.call(null,params__$1));
var lets = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.truth_(params__$1)){
if((cljs.core.first.call(null,params__$1) instanceof cljs.core.Symbol)){
var G__11367 = cljs.core.next.call(null,params__$1);
var G__11368 = cljs.core.conj.call(null,new_params,cljs.core.first.call(null,params__$1));
var G__11369 = lets;
params__$1 = G__11367;
new_params = G__11368;
lets = G__11369;
continue;
} else {
var gparam = cljs.core.gensym.call(null,"p__");
var G__11370 = cljs.core.next.call(null,params__$1);
var G__11371 = cljs.core.conj.call(null,new_params,gparam);
var G__11372 = cljs.core.conj.call(null,cljs.core.conj.call(null,lets,cljs.core.first.call(null,params__$1)),gparam);
params__$1 = G__11370;
new_params = G__11371;
lets = G__11372;
continue;
}
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7243__auto__ = new_params;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7243__auto__ = lets;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
}
break;
}
}
});
/**
 * params => positional-params* , or positional-params* & next-param
 *   positional-param => binding-form
 *   next-param => binding-form
 *   name => symbol
 * 
 *   Defines a function
 */
cljs.core$macros.fn = (function cljs$core$macros$fn(var_args){
var args__7491__auto__ = [];
var len__7484__auto___11379 = arguments.length;
var i__7485__auto___11380 = (0);
while(true){
if((i__7485__auto___11380 < len__7484__auto___11379)){
args__7491__auto__.push((arguments[i__7485__auto___11380]));

var G__11381 = (i__7485__auto___11380 + (1));
i__7485__auto___11380 = G__11381;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((2) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.fn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7492__auto__);
});

cljs.core$macros.fn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,sigs){
var name = (((cljs.core.first.call(null,sigs) instanceof cljs.core.Symbol))?cljs.core.first.call(null,sigs):null);
var sigs__$1 = (cljs.core.truth_(name)?cljs.core.next.call(null,sigs):sigs);
var sigs__$2 = ((cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,sigs__$1)))?(function (){var x__7243__auto__ = sigs__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})():((cljs.core.seq_QMARK_.call(null,cljs.core.first.call(null,sigs__$1)))?sigs__$1:(function(){throw (new Error(((cljs.core.seq.call(null,sigs__$1))?[cljs.core.str("Parameter declaration "),cljs.core.str(cljs.core.first.call(null,sigs__$1)),cljs.core.str(" should be a vector")].join(''):[cljs.core.str("Parameter declaration missing")].join(''))))})()));
var psig = ((function (name,sigs__$1,sigs__$2){
return (function (sig){
if(!(cljs.core.seq_QMARK_.call(null,sig))){
throw (new Error([cljs.core.str("Invalid signature "),cljs.core.str(sig),cljs.core.str(" should be a list")].join('')));
} else {
}

var vec__11376 = sig;
var seq__11377 = cljs.core.seq.call(null,vec__11376);
var first__11378 = cljs.core.first.call(null,seq__11377);
var seq__11377__$1 = cljs.core.next.call(null,seq__11377);
var params = first__11378;
var body = seq__11377__$1;
var _ = ((!(cljs.core.vector_QMARK_.call(null,params)))?(function(){throw (new Error(((cljs.core.seq_QMARK_.call(null,cljs.core.first.call(null,sigs__$2)))?[cljs.core.str("Parameter declaration "),cljs.core.str(params),cljs.core.str(" should be a vector")].join(''):[cljs.core.str("Invalid signature "),cljs.core.str(sig),cljs.core.str(" should be a list")].join(''))))})():null);
var conds = (((cljs.core.next.call(null,body)) && (cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))))?cljs.core.first.call(null,body):null);
var body__$1 = (cljs.core.truth_(conds)?cljs.core.next.call(null,body):body);
var conds__$1 = (function (){var or__6409__auto__ = conds;
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return cljs.core.meta.call(null,params);
}
})();
var pre = cljs.core.cst$kw$pre.cljs$core$IFn$_invoke$arity$1(conds__$1);
var post = cljs.core.cst$kw$post.cljs$core$IFn$_invoke$arity$1(conds__$1);
var body__$2 = (cljs.core.truth_(post)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7243__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$_PERCENT_),(function (){var x__7243__auto__ = ((((1) < cljs.core.count.call(null,body__$1)))?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$do),body__$1))):cljs.core.first.call(null,body__$1));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),cljs.core.map.call(null,((function (vec__11376,seq__11377,first__11378,seq__11377__$1,params,body,_,conds,body__$1,conds__$1,pre,post,name,sigs__$1,sigs__$2){
return (function (c){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_assert),(function (){var x__7243__auto__ = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
});})(vec__11376,seq__11377,first__11378,seq__11377__$1,params,body,_,conds,body__$1,conds__$1,pre,post,name,sigs__$1,sigs__$2))
,post),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$_PERCENT_))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})()))):body__$1);
var body__$3 = (cljs.core.truth_(pre)?cljs.core.concat.call(null,cljs.core.map.call(null,((function (vec__11376,seq__11377,first__11378,seq__11377__$1,params,body,_,conds,body__$1,conds__$1,pre,post,body__$2,name,sigs__$1,sigs__$2){
return (function (c){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_assert),(function (){var x__7243__auto__ = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
});})(vec__11376,seq__11377,first__11378,seq__11377__$1,params,body,_,conds,body__$1,conds__$1,pre,post,body__$2,name,sigs__$1,sigs__$2))
,pre),body__$2):body__$2);
return cljs.core$macros.maybe_destructured.call(null,params,body__$3);
});})(name,sigs__$1,sigs__$2))
;
var new_sigs = cljs.core.map.call(null,psig,sigs__$2);
return cljs.core.with_meta.call(null,(cljs.core.truth_(name)?cljs.core.list_STAR_.call(null,cljs.core.cst$sym$fn_STAR_,name,new_sigs):cljs.core.cons.call(null,cljs.core.cst$sym$fn_STAR_,new_sigs)),cljs.core.meta.call(null,_AMPERSAND_form));
});

cljs.core$macros.fn.cljs$lang$maxFixedArity = (2);

cljs.core$macros.fn.cljs$lang$applyTo = (function (seq11373){
var G__11374 = cljs.core.first.call(null,seq11373);
var seq11373__$1 = cljs.core.next.call(null,seq11373);
var G__11375 = cljs.core.first.call(null,seq11373__$1);
var seq11373__$2 = cljs.core.next.call(null,seq11373__$1);
return cljs.core$macros.fn.cljs$core$IFn$_invoke$arity$variadic(G__11374,G__11375,seq11373__$2);
});


cljs.core$macros.fn.cljs$lang$macro = true;
/**
 * same as defn, yielding non-public def
 */
cljs.core$macros.defn_ = (function cljs$core$macros$defn_(var_args){
var args__7491__auto__ = [];
var len__7484__auto___11386 = arguments.length;
var i__7485__auto___11387 = (0);
while(true){
if((i__7485__auto___11387 < len__7484__auto___11386)){
args__7491__auto__.push((arguments[i__7485__auto___11387]));

var G__11388 = (i__7485__auto___11387 + (1));
i__7485__auto___11387 = G__11388;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((3) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.defn_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7492__auto__);
});

cljs.core$macros.defn_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,decls){
return cljs.core.list_STAR_.call(null,cljs.core.cst$sym$cljs$core$macros_SLASH_defn,cljs.core.with_meta.call(null,name,cljs.core.assoc.call(null,cljs.core.meta.call(null,name),cljs.core.cst$kw$private,true)),decls);
});

cljs.core$macros.defn_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.defn_.cljs$lang$applyTo = (function (seq11382){
var G__11383 = cljs.core.first.call(null,seq11382);
var seq11382__$1 = cljs.core.next.call(null,seq11382);
var G__11384 = cljs.core.first.call(null,seq11382__$1);
var seq11382__$2 = cljs.core.next.call(null,seq11382__$1);
var G__11385 = cljs.core.first.call(null,seq11382__$2);
var seq11382__$3 = cljs.core.next.call(null,seq11382__$2);
return cljs.core$macros.defn_.cljs$core$IFn$_invoke$arity$variadic(G__11383,G__11384,G__11385,seq11382__$3);
});


cljs.core$macros.defn_.cljs$lang$macro = true;
/**
 * bindings => binding-form test
 * 
 *   If test is true, evaluates then with binding-form bound to the value of
 *   test, if not, yields else
 */
cljs.core$macros.if_let = (function cljs$core$macros$if_let(var_args){
var args11390 = [];
var len__7484__auto___11399 = arguments.length;
var i__7485__auto___11400 = (0);
while(true){
if((i__7485__auto___11400 < len__7484__auto___11399)){
args11390.push((arguments[i__7485__auto___11400]));

var G__11401 = (i__7485__auto___11400 + (1));
i__7485__auto___11400 = G__11401;
continue;
} else {
}
break;
}

var G__11398 = args11390.length;
switch (G__11398) {
case 4:
return cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__7503__auto__ = (new cljs.core.IndexedSeq(args11390.slice((5)),(0),null));
return cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__7503__auto__);

}
});

cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,then){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_if_DASH_let),(function (){var x__7243__auto__ = bindings;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = then;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
});

cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,then,else$,oldform){
if(cljs.core.vector_QMARK_.call(null,bindings)){
} else {
throw cljs.core.ex_info.call(null,"if-let requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core.empty_QMARK_.call(null,oldform)){
} else {
throw cljs.core.ex_info.call(null,"if-let requires 1 or 2 forms after binding vector",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core._EQ_.call(null,(2),cljs.core.count.call(null,bindings))){
} else {
throw cljs.core.ex_info.call(null,"if-let requires exactly 2 forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var form = bindings.call(null,(0));
var tst = bindings.call(null,(1));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7243__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$temp__11389__auto__),(function (){var x__7243__auto__ = tst;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$if),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$temp__11389__auto__),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7243__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7243__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$temp__11389__auto__)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = then;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = else$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
});

cljs.core$macros.if_let.cljs$lang$applyTo = (function (seq11391){
var G__11392 = cljs.core.first.call(null,seq11391);
var seq11391__$1 = cljs.core.next.call(null,seq11391);
var G__11393 = cljs.core.first.call(null,seq11391__$1);
var seq11391__$2 = cljs.core.next.call(null,seq11391__$1);
var G__11394 = cljs.core.first.call(null,seq11391__$2);
var seq11391__$3 = cljs.core.next.call(null,seq11391__$2);
var G__11395 = cljs.core.first.call(null,seq11391__$3);
var seq11391__$4 = cljs.core.next.call(null,seq11391__$3);
var G__11396 = cljs.core.first.call(null,seq11391__$4);
var seq11391__$5 = cljs.core.next.call(null,seq11391__$4);
return cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$variadic(G__11392,G__11393,G__11394,G__11395,G__11396,seq11391__$5);
});

cljs.core$macros.if_let.cljs$lang$maxFixedArity = (5);


cljs.core$macros.if_let.cljs$lang$macro = true;
/**
 * Evaluates test. If logical false, evaluates and returns then expr,
 *   otherwise else expr, if supplied, else nil.
 */
cljs.core$macros.if_not = (function cljs$core$macros$if_not(var_args){
var args11403 = [];
var len__7484__auto___11406 = arguments.length;
var i__7485__auto___11407 = (0);
while(true){
if((i__7485__auto___11407 < len__7484__auto___11406)){
args11403.push((arguments[i__7485__auto___11407]));

var G__11408 = (i__7485__auto___11407 + (1));
i__7485__auto___11407 = G__11408;
continue;
} else {
}
break;
}

var G__11405 = args11403.length;
switch (G__11405) {
case 4:
return cljs.core$macros.if_not.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core$macros.if_not.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str((args11403.length - (2)))].join('')));

}
});

cljs.core$macros.if_not.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,test,then){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_if_DASH_not),(function (){var x__7243__auto__ = test;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = then;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
});

cljs.core$macros.if_not.cljs$core$IFn$_invoke$arity$5 = (function (_AMPERSAND_form,_AMPERSAND_env,test,then,else$){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_not),(function (){var x__7243__auto__ = test;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = then;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = else$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
});

cljs.core$macros.if_not.cljs$lang$maxFixedArity = 5;


cljs.core$macros.if_not.cljs$lang$macro = true;
/**
 * fnspec ==> (fname [params*] exprs) or (fname ([params*] exprs)+)
 * 
 *   Takes a vector of function specs and a body, and generates a set of
 *   bindings of functions to their names. All of the names are available
 *   in all of the definitions of the functions, as well as the body.
 */
cljs.core$macros.letfn = (function cljs$core$macros$letfn(var_args){
var args__7491__auto__ = [];
var len__7484__auto___11415 = arguments.length;
var i__7485__auto___11416 = (0);
while(true){
if((i__7485__auto___11416 < len__7484__auto___11415)){
args__7491__auto__.push((arguments[i__7485__auto___11416]));

var G__11417 = (i__7485__auto___11416 + (1));
i__7485__auto___11416 = G__11417;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((3) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.letfn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7492__auto__);
});

cljs.core$macros.letfn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,fnspecs,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$letfn_STAR_),(function (){var x__7243__auto__ = cljs.core.vec.call(null,cljs.core.interleave.call(null,cljs.core.map.call(null,cljs.core.first,fnspecs),cljs.core.map.call(null,(function (p1__11410_SHARP_){
return cljs.core.cons.call(null,cljs.core.cst$sym$cljs$core$macros_SLASH_fn,p1__11410_SHARP_);
}),fnspecs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),body)));
});

cljs.core$macros.letfn.cljs$lang$maxFixedArity = (3);

cljs.core$macros.letfn.cljs$lang$applyTo = (function (seq11411){
var G__11412 = cljs.core.first.call(null,seq11411);
var seq11411__$1 = cljs.core.next.call(null,seq11411);
var G__11413 = cljs.core.first.call(null,seq11411__$1);
var seq11411__$2 = cljs.core.next.call(null,seq11411__$1);
var G__11414 = cljs.core.first.call(null,seq11411__$2);
var seq11411__$3 = cljs.core.next.call(null,seq11411__$2);
return cljs.core$macros.letfn.cljs$core$IFn$_invoke$arity$variadic(G__11412,G__11413,G__11414,seq11411__$3);
});


cljs.core$macros.letfn.cljs$lang$macro = true;
/**
 * Expands into code that creates a fn that expects to be passed an
 *   object and any args and calls the named instance method on the
 *   object passing the args. Use when you want to treat a Java method as
 *   a first-class fn. name may be type-hinted with the method receiver's
 *   type in order to avoid reflective calls.
 */
cljs.core$macros.memfn = (function cljs$core$macros$memfn(var_args){
var args__7491__auto__ = [];
var len__7484__auto___11422 = arguments.length;
var i__7485__auto___11423 = (0);
while(true){
if((i__7485__auto___11423 < len__7484__auto___11422)){
args__7491__auto__.push((arguments[i__7485__auto___11423]));

var G__11424 = (i__7485__auto___11423 + (1));
i__7485__auto___11423 = G__11424;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((3) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.memfn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7492__auto__);
});

cljs.core$macros.memfn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,args){
var t = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"target"),cljs.core.meta.call(null,name));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),(function (){var x__7243__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7243__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),args))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),(function (){var x__7243__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7243__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),args)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
});

cljs.core$macros.memfn.cljs$lang$maxFixedArity = (3);

cljs.core$macros.memfn.cljs$lang$applyTo = (function (seq11418){
var G__11419 = cljs.core.first.call(null,seq11418);
var seq11418__$1 = cljs.core.next.call(null,seq11418);
var G__11420 = cljs.core.first.call(null,seq11418__$1);
var seq11418__$2 = cljs.core.next.call(null,seq11418__$1);
var G__11421 = cljs.core.first.call(null,seq11418__$2);
var seq11418__$3 = cljs.core.next.call(null,seq11418__$2);
return cljs.core$macros.memfn.cljs$core$IFn$_invoke$arity$variadic(G__11419,G__11420,G__11421,seq11418__$3);
});


cljs.core$macros.memfn.cljs$lang$macro = true;
/**
 * Evaluates test. If logical true, evaluates body in an implicit do.
 */
cljs.core$macros.when = (function cljs$core$macros$when(var_args){
var args__7491__auto__ = [];
var len__7484__auto___11429 = arguments.length;
var i__7485__auto___11430 = (0);
while(true){
if((i__7485__auto___11430 < len__7484__auto___11429)){
args__7491__auto__.push((arguments[i__7485__auto___11430]));

var G__11431 = (i__7485__auto___11430 + (1));
i__7485__auto___11430 = G__11431;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((3) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7492__auto__);
});

cljs.core$macros.when.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,test,body){
return cljs.core._conj.call(null,(function (){var x__7243__auto__ = test;
return cljs.core._conj.call(null,(function (){var x__7243__auto____$1 = cljs.core.cons.call(null,cljs.core.cst$sym$do,body);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto____$1);
})(),x__7243__auto__);
})(),cljs.core.cst$sym$if);
});

cljs.core$macros.when.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when.cljs$lang$applyTo = (function (seq11425){
var G__11426 = cljs.core.first.call(null,seq11425);
var seq11425__$1 = cljs.core.next.call(null,seq11425);
var G__11427 = cljs.core.first.call(null,seq11425__$1);
var seq11425__$2 = cljs.core.next.call(null,seq11425__$1);
var G__11428 = cljs.core.first.call(null,seq11425__$2);
var seq11425__$3 = cljs.core.next.call(null,seq11425__$2);
return cljs.core$macros.when.cljs$core$IFn$_invoke$arity$variadic(G__11426,G__11427,G__11428,seq11425__$3);
});


cljs.core$macros.when.cljs$lang$macro = true;
/**
 * bindings => x xs
 * 
 *   Roughly the same as (when (seq xs) (let [x (first xs)] body)) but xs is evaluated only once
 */
cljs.core$macros.when_first = (function cljs$core$macros$when_first(var_args){
var args__7491__auto__ = [];
var len__7484__auto___11440 = arguments.length;
var i__7485__auto___11441 = (0);
while(true){
if((i__7485__auto___11441 < len__7484__auto___11440)){
args__7491__auto__.push((arguments[i__7485__auto___11441]));

var G__11442 = (i__7485__auto___11441 + (1));
i__7485__auto___11441 = G__11442;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((3) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when_first.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7492__auto__);
});

cljs.core$macros.when_first.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
if(cljs.core.vector_QMARK_.call(null,bindings)){
} else {
throw cljs.core.ex_info.call(null,"when-first requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core._EQ_.call(null,(2),cljs.core.count.call(null,bindings))){
} else {
throw cljs.core.ex_info.call(null,"when-first requires exactly 2 forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var vec__11437 = bindings;
var x = cljs.core.nth.call(null,vec__11437,(0),null);
var xs = cljs.core.nth.call(null,vec__11437,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_when_DASH_let),(function (){var x__7243__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$xs__11432__auto__),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_seq),(function (){var x__7243__auto__ = xs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7243__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7243__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_first),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$xs__11432__auto__))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
});

cljs.core$macros.when_first.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when_first.cljs$lang$applyTo = (function (seq11433){
var G__11434 = cljs.core.first.call(null,seq11433);
var seq11433__$1 = cljs.core.next.call(null,seq11433);
var G__11435 = cljs.core.first.call(null,seq11433__$1);
var seq11433__$2 = cljs.core.next.call(null,seq11433__$1);
var G__11436 = cljs.core.first.call(null,seq11433__$2);
var seq11433__$3 = cljs.core.next.call(null,seq11433__$2);
return cljs.core$macros.when_first.cljs$core$IFn$_invoke$arity$variadic(G__11434,G__11435,G__11436,seq11433__$3);
});


cljs.core$macros.when_first.cljs$lang$macro = true;
/**
 * bindings => binding-form test
 * 
 *   When test is true, evaluates body with binding-form bound to the value of test
 */
cljs.core$macros.when_let = (function cljs$core$macros$when_let(var_args){
var args__7491__auto__ = [];
var len__7484__auto___11448 = arguments.length;
var i__7485__auto___11449 = (0);
while(true){
if((i__7485__auto___11449 < len__7484__auto___11448)){
args__7491__auto__.push((arguments[i__7485__auto___11449]));

var G__11450 = (i__7485__auto___11449 + (1));
i__7485__auto___11449 = G__11450;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((3) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when_let.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7492__auto__);
});

cljs.core$macros.when_let.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
if(cljs.core.vector_QMARK_.call(null,bindings)){
} else {
throw cljs.core.ex_info.call(null,"when-let requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core._EQ_.call(null,(2),cljs.core.count.call(null,bindings))){
} else {
throw cljs.core.ex_info.call(null,"when-let requires exactly 2 forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var form = bindings.call(null,(0));
var tst = bindings.call(null,(1));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7243__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$temp__11443__auto__),(function (){var x__7243__auto__ = tst;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_when),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$temp__11443__auto__),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7243__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7243__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$temp__11443__auto__)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
});

cljs.core$macros.when_let.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when_let.cljs$lang$applyTo = (function (seq11444){
var G__11445 = cljs.core.first.call(null,seq11444);
var seq11444__$1 = cljs.core.next.call(null,seq11444);
var G__11446 = cljs.core.first.call(null,seq11444__$1);
var seq11444__$2 = cljs.core.next.call(null,seq11444__$1);
var G__11447 = cljs.core.first.call(null,seq11444__$2);
var seq11444__$3 = cljs.core.next.call(null,seq11444__$2);
return cljs.core$macros.when_let.cljs$core$IFn$_invoke$arity$variadic(G__11445,G__11446,G__11447,seq11444__$3);
});


cljs.core$macros.when_let.cljs$lang$macro = true;
/**
 * Evaluates test. If logical false, evaluates body in an implicit do.
 */
cljs.core$macros.when_not = (function cljs$core$macros$when_not(var_args){
var args__7491__auto__ = [];
var len__7484__auto___11455 = arguments.length;
var i__7485__auto___11456 = (0);
while(true){
if((i__7485__auto___11456 < len__7484__auto___11455)){
args__7491__auto__.push((arguments[i__7485__auto___11456]));

var G__11457 = (i__7485__auto___11456 + (1));
i__7485__auto___11456 = G__11457;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((3) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when_not.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7492__auto__);
});

cljs.core$macros.when_not.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,test,body){
return cljs.core._conj.call(null,(function (){var x__7243__auto__ = test;
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__7243__auto____$1 = cljs.core.cons.call(null,cljs.core.cst$sym$do,body);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto____$1);
})(),null),x__7243__auto__);
})(),cljs.core.cst$sym$if);
});

cljs.core$macros.when_not.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when_not.cljs$lang$applyTo = (function (seq11451){
var G__11452 = cljs.core.first.call(null,seq11451);
var seq11451__$1 = cljs.core.next.call(null,seq11451);
var G__11453 = cljs.core.first.call(null,seq11451__$1);
var seq11451__$2 = cljs.core.next.call(null,seq11451__$1);
var G__11454 = cljs.core.first.call(null,seq11451__$2);
var seq11451__$3 = cljs.core.next.call(null,seq11451__$2);
return cljs.core$macros.when_not.cljs$core$IFn$_invoke$arity$variadic(G__11452,G__11453,G__11454,seq11451__$3);
});


cljs.core$macros.when_not.cljs$lang$macro = true;
/**
 * Repeatedly executes body while test expression is true. Presumes
 *   some side-effect will cause test to become false/nil. Returns nil
 */
cljs.core$macros.while$ = (function cljs$core$macros$while(var_args){
var args__7491__auto__ = [];
var len__7484__auto___11462 = arguments.length;
var i__7485__auto___11463 = (0);
while(true){
if((i__7485__auto___11463 < len__7484__auto___11462)){
args__7491__auto__.push((arguments[i__7485__auto___11463]));

var G__11464 = (i__7485__auto___11463 + (1));
i__7485__auto___11463 = G__11464;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((3) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.while$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7492__auto__);
});

cljs.core$macros.while$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,test,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_loop),(function (){var x__7243__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_when),(function (){var x__7243__auto__ = test;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),body,(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$recur))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
});

cljs.core$macros.while$.cljs$lang$maxFixedArity = (3);

cljs.core$macros.while$.cljs$lang$applyTo = (function (seq11458){
var G__11459 = cljs.core.first.call(null,seq11458);
var seq11458__$1 = cljs.core.next.call(null,seq11458);
var G__11460 = cljs.core.first.call(null,seq11458__$1);
var seq11458__$2 = cljs.core.next.call(null,seq11458__$1);
var G__11461 = cljs.core.first.call(null,seq11458__$2);
var seq11458__$3 = cljs.core.next.call(null,seq11458__$2);
return cljs.core$macros.while$.cljs$core$IFn$_invoke$arity$variadic(G__11459,G__11460,G__11461,seq11458__$3);
});


cljs.core$macros.while$.cljs$lang$macro = true;
/**
 * Takes an expression and a set of test/form pairs. Threads expr (via ->)
 *   through each form for which the corresponding test
 *   expression is true. Note that, unlike cond branching, cond-> threading does
 *   not short circuit after the first true test expression.
 */
cljs.core$macros.cond__GT_ = (function cljs$core$macros$cond__GT_(var_args){
var args__7491__auto__ = [];
var len__7484__auto___11473 = arguments.length;
var i__7485__auto___11474 = (0);
while(true){
if((i__7485__auto___11474 < len__7484__auto___11473)){
args__7491__auto__.push((arguments[i__7485__auto___11474]));

var G__11475 = (i__7485__auto___11474 + (1));
i__7485__auto___11474 = G__11475;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((3) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.cond__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7492__auto__);
});

cljs.core$macros.cond__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,clauses){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,clauses))){
} else {
throw (new Error("Assert failed: (even? (count clauses))"));
}

var g = cljs.core.gensym.call(null);
var pstep = ((function (g){
return (function (p__11469){
var vec__11470 = p__11469;
var test = cljs.core.nth.call(null,vec__11470,(0),null);
var step = cljs.core.nth.call(null,vec__11470,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__7243__auto__ = test;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__DASH__GT_),(function (){var x__7243__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = step;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
});})(g))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7243__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7243__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),cljs.core.interleave.call(null,cljs.core.repeat.call(null,g),cljs.core.map.call(null,pstep,cljs.core.partition.call(null,(2),clauses)))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
});

cljs.core$macros.cond__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.cond__GT_.cljs$lang$applyTo = (function (seq11465){
var G__11466 = cljs.core.first.call(null,seq11465);
var seq11465__$1 = cljs.core.next.call(null,seq11465);
var G__11467 = cljs.core.first.call(null,seq11465__$1);
var seq11465__$2 = cljs.core.next.call(null,seq11465__$1);
var G__11468 = cljs.core.first.call(null,seq11465__$2);
var seq11465__$3 = cljs.core.next.call(null,seq11465__$2);
return cljs.core$macros.cond__GT_.cljs$core$IFn$_invoke$arity$variadic(G__11466,G__11467,G__11468,seq11465__$3);
});


cljs.core$macros.cond__GT_.cljs$lang$macro = true;
/**
 * Takes an expression and a set of test/form pairs. Threads expr (via ->>)
 *   through each form for which the corresponding test expression
 *   is true.  Note that, unlike cond branching, cond->> threading does not short circuit
 *   after the first true test expression.
 */
cljs.core$macros.cond__GT__GT_ = (function cljs$core$macros$cond__GT__GT_(var_args){
var args__7491__auto__ = [];
var len__7484__auto___11484 = arguments.length;
var i__7485__auto___11485 = (0);
while(true){
if((i__7485__auto___11485 < len__7484__auto___11484)){
args__7491__auto__.push((arguments[i__7485__auto___11485]));

var G__11486 = (i__7485__auto___11485 + (1));
i__7485__auto___11485 = G__11486;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((3) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.cond__GT__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7492__auto__);
});

cljs.core$macros.cond__GT__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,clauses){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,clauses))){
} else {
throw (new Error("Assert failed: (even? (count clauses))"));
}

var g = cljs.core.gensym.call(null);
var pstep = ((function (g){
return (function (p__11480){
var vec__11481 = p__11480;
var test = cljs.core.nth.call(null,vec__11481,(0),null);
var step = cljs.core.nth.call(null,vec__11481,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__7243__auto__ = test;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__DASH__GT__GT_),(function (){var x__7243__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = step;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
});})(g))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7243__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7243__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),cljs.core.interleave.call(null,cljs.core.repeat.call(null,g),cljs.core.map.call(null,pstep,cljs.core.partition.call(null,(2),clauses)))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
});

cljs.core$macros.cond__GT__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.cond__GT__GT_.cljs$lang$applyTo = (function (seq11476){
var G__11477 = cljs.core.first.call(null,seq11476);
var seq11476__$1 = cljs.core.next.call(null,seq11476);
var G__11478 = cljs.core.first.call(null,seq11476__$1);
var seq11476__$2 = cljs.core.next.call(null,seq11476__$1);
var G__11479 = cljs.core.first.call(null,seq11476__$2);
var seq11476__$3 = cljs.core.next.call(null,seq11476__$2);
return cljs.core$macros.cond__GT__GT_.cljs$core$IFn$_invoke$arity$variadic(G__11477,G__11478,G__11479,seq11476__$3);
});


cljs.core$macros.cond__GT__GT_.cljs$lang$macro = true;
/**
 * Binds name to expr, evaluates the first form in the lexical context
 *   of that binding, then binds name to that result, repeating for each
 *   successive form, returning the result of the last form.
 */
cljs.core$macros.as__GT_ = (function cljs$core$macros$as__GT_(var_args){
var args__7491__auto__ = [];
var len__7484__auto___11492 = arguments.length;
var i__7485__auto___11493 = (0);
while(true){
if((i__7485__auto___11493 < len__7484__auto___11492)){
args__7491__auto__.push((arguments[i__7485__auto___11493]));

var G__11494 = (i__7485__auto___11493 + (1));
i__7485__auto___11493 = G__11494;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((4) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.as__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__7492__auto__);
});

cljs.core$macros.as__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,name,forms){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7243__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7243__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),cljs.core.interleave.call(null,cljs.core.repeat.call(null,name),forms)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
});

cljs.core$macros.as__GT_.cljs$lang$maxFixedArity = (4);

cljs.core$macros.as__GT_.cljs$lang$applyTo = (function (seq11487){
var G__11488 = cljs.core.first.call(null,seq11487);
var seq11487__$1 = cljs.core.next.call(null,seq11487);
var G__11489 = cljs.core.first.call(null,seq11487__$1);
var seq11487__$2 = cljs.core.next.call(null,seq11487__$1);
var G__11490 = cljs.core.first.call(null,seq11487__$2);
var seq11487__$3 = cljs.core.next.call(null,seq11487__$2);
var G__11491 = cljs.core.first.call(null,seq11487__$3);
var seq11487__$4 = cljs.core.next.call(null,seq11487__$3);
return cljs.core$macros.as__GT_.cljs$core$IFn$_invoke$arity$variadic(G__11488,G__11489,G__11490,G__11491,seq11487__$4);
});


cljs.core$macros.as__GT_.cljs$lang$macro = true;
/**
 * When expr is not nil, threads it into the first form (via ->),
 *   and when that result is not nil, through the next etc
 */
cljs.core$macros.some__GT_ = (function cljs$core$macros$some__GT_(var_args){
var args__7491__auto__ = [];
var len__7484__auto___11499 = arguments.length;
var i__7485__auto___11500 = (0);
while(true){
if((i__7485__auto___11500 < len__7484__auto___11499)){
args__7491__auto__.push((arguments[i__7485__auto___11500]));

var G__11501 = (i__7485__auto___11500 + (1));
i__7485__auto___11500 = G__11501;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((3) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.some__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7492__auto__);
});

cljs.core$macros.some__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,forms){
var g = cljs.core.gensym.call(null);
var pstep = ((function (g){
return (function (step){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_nil_QMARK_),(function (){var x__7243__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__DASH__GT_),(function (){var x__7243__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = step;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
});})(g))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7243__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7243__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),cljs.core.interleave.call(null,cljs.core.repeat.call(null,g),cljs.core.map.call(null,pstep,forms))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
});

cljs.core$macros.some__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.some__GT_.cljs$lang$applyTo = (function (seq11495){
var G__11496 = cljs.core.first.call(null,seq11495);
var seq11495__$1 = cljs.core.next.call(null,seq11495);
var G__11497 = cljs.core.first.call(null,seq11495__$1);
var seq11495__$2 = cljs.core.next.call(null,seq11495__$1);
var G__11498 = cljs.core.first.call(null,seq11495__$2);
var seq11495__$3 = cljs.core.next.call(null,seq11495__$2);
return cljs.core$macros.some__GT_.cljs$core$IFn$_invoke$arity$variadic(G__11496,G__11497,G__11498,seq11495__$3);
});


cljs.core$macros.some__GT_.cljs$lang$macro = true;
/**
 * When expr is not nil, threads it into the first form (via ->>),
 *   and when that result is not nil, through the next etc
 */
cljs.core$macros.some__GT__GT_ = (function cljs$core$macros$some__GT__GT_(var_args){
var args__7491__auto__ = [];
var len__7484__auto___11506 = arguments.length;
var i__7485__auto___11507 = (0);
while(true){
if((i__7485__auto___11507 < len__7484__auto___11506)){
args__7491__auto__.push((arguments[i__7485__auto___11507]));

var G__11508 = (i__7485__auto___11507 + (1));
i__7485__auto___11507 = G__11508;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((3) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.some__GT__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7492__auto__);
});

cljs.core$macros.some__GT__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,forms){
var g = cljs.core.gensym.call(null);
var pstep = ((function (g){
return (function (step){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_nil_QMARK_),(function (){var x__7243__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__DASH__GT__GT_),(function (){var x__7243__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = step;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
});})(g))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7243__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7243__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),cljs.core.interleave.call(null,cljs.core.repeat.call(null,g),cljs.core.map.call(null,pstep,forms))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
});

cljs.core$macros.some__GT__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.some__GT__GT_.cljs$lang$applyTo = (function (seq11502){
var G__11503 = cljs.core.first.call(null,seq11502);
var seq11502__$1 = cljs.core.next.call(null,seq11502);
var G__11504 = cljs.core.first.call(null,seq11502__$1);
var seq11502__$2 = cljs.core.next.call(null,seq11502__$1);
var G__11505 = cljs.core.first.call(null,seq11502__$2);
var seq11502__$3 = cljs.core.next.call(null,seq11502__$2);
return cljs.core$macros.some__GT__GT_.cljs$core$IFn$_invoke$arity$variadic(G__11503,G__11504,G__11505,seq11502__$3);
});


cljs.core$macros.some__GT__GT_.cljs$lang$macro = true;
/**
 * bindings => binding-form test
 * 
 *    If test is not nil, evaluates then with binding-form bound to the
 *    value of test, if not, yields else
 */
cljs.core$macros.if_some = (function cljs$core$macros$if_some(var_args){
var args11510 = [];
var len__7484__auto___11519 = arguments.length;
var i__7485__auto___11520 = (0);
while(true){
if((i__7485__auto___11520 < len__7484__auto___11519)){
args11510.push((arguments[i__7485__auto___11520]));

var G__11521 = (i__7485__auto___11520 + (1));
i__7485__auto___11520 = G__11521;
continue;
} else {
}
break;
}

var G__11518 = args11510.length;
switch (G__11518) {
case 4:
return cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__7503__auto__ = (new cljs.core.IndexedSeq(args11510.slice((5)),(0),null));
return cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__7503__auto__);

}
});

cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,then){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_if_DASH_some),(function (){var x__7243__auto__ = bindings;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = then;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
});

cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,then,else$,oldform){
if(cljs.core.vector_QMARK_.call(null,bindings)){
} else {
throw cljs.core.ex_info.call(null,"if-some requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core.empty_QMARK_.call(null,oldform)){
} else {
throw cljs.core.ex_info.call(null,"if-some requires 1 or 2 forms after binding vector",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core._EQ_.call(null,(2),cljs.core.count.call(null,bindings))){
} else {
throw cljs.core.ex_info.call(null,"if-some requires exactly 2 forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var form = bindings.call(null,(0));
var tst = bindings.call(null,(1));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7243__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$temp__11509__auto__),(function (){var x__7243__auto__ = tst;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_nil_QMARK_),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$temp__11509__auto__))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = else$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7243__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7243__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$temp__11509__auto__)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = then;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
});

cljs.core$macros.if_some.cljs$lang$applyTo = (function (seq11511){
var G__11512 = cljs.core.first.call(null,seq11511);
var seq11511__$1 = cljs.core.next.call(null,seq11511);
var G__11513 = cljs.core.first.call(null,seq11511__$1);
var seq11511__$2 = cljs.core.next.call(null,seq11511__$1);
var G__11514 = cljs.core.first.call(null,seq11511__$2);
var seq11511__$3 = cljs.core.next.call(null,seq11511__$2);
var G__11515 = cljs.core.first.call(null,seq11511__$3);
var seq11511__$4 = cljs.core.next.call(null,seq11511__$3);
var G__11516 = cljs.core.first.call(null,seq11511__$4);
var seq11511__$5 = cljs.core.next.call(null,seq11511__$4);
return cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$variadic(G__11512,G__11513,G__11514,G__11515,G__11516,seq11511__$5);
});

cljs.core$macros.if_some.cljs$lang$maxFixedArity = (5);


cljs.core$macros.if_some.cljs$lang$macro = true;
/**
 * bindings => binding-form test
 * 
 *    When test is not nil, evaluates body with binding-form bound to the
 *    value of test
 */
cljs.core$macros.when_some = (function cljs$core$macros$when_some(var_args){
var args__7491__auto__ = [];
var len__7484__auto___11528 = arguments.length;
var i__7485__auto___11529 = (0);
while(true){
if((i__7485__auto___11529 < len__7484__auto___11528)){
args__7491__auto__.push((arguments[i__7485__auto___11529]));

var G__11530 = (i__7485__auto___11529 + (1));
i__7485__auto___11529 = G__11530;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((3) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7492__auto__);
});

cljs.core$macros.when_some.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
if(cljs.core.vector_QMARK_.call(null,bindings)){
} else {
throw cljs.core.ex_info.call(null,"when-some requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core._EQ_.call(null,(2),cljs.core.count.call(null,bindings))){
} else {
throw cljs.core.ex_info.call(null,"when-some requires exactly 2 forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var form = bindings.call(null,(0));
var tst = bindings.call(null,(1));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7243__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$temp__11523__auto__),(function (){var x__7243__auto__ = tst;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_nil_QMARK_),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$temp__11523__auto__))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7243__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7243__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$temp__11523__auto__)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
});

cljs.core$macros.when_some.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when_some.cljs$lang$applyTo = (function (seq11524){
var G__11525 = cljs.core.first.call(null,seq11524);
var seq11524__$1 = cljs.core.next.call(null,seq11524);
var G__11526 = cljs.core.first.call(null,seq11524__$1);
var seq11524__$2 = cljs.core.next.call(null,seq11524__$1);
var G__11527 = cljs.core.first.call(null,seq11524__$2);
var seq11524__$3 = cljs.core.next.call(null,seq11524__$2);
return cljs.core$macros.when_some.cljs$core$IFn$_invoke$arity$variadic(G__11525,G__11526,G__11527,seq11524__$3);
});


cljs.core$macros.when_some.cljs$lang$macro = true;
/**
 * A good fdecl looks like (([a] ...) ([a b] ...)) near the end of defn.
 */
cljs.core$macros.assert_valid_fdecl = (function cljs$core$macros$assert_valid_fdecl(fdecl){
if(cljs.core.empty_QMARK_.call(null,fdecl)){
throw (new Error("Parameter declaration missing"));
} else {
}

var argdecls = cljs.core.map.call(null,(function (p1__11531_SHARP_){
if(cljs.core.seq_QMARK_.call(null,p1__11531_SHARP_)){
return cljs.core.first.call(null,p1__11531_SHARP_);
} else {
throw (new Error(((cljs.core.seq_QMARK_.call(null,cljs.core.first.call(null,fdecl)))?[cljs.core.str("Invalid signature \""),cljs.core.str(p1__11531_SHARP_),cljs.core.str("\" should be a list")].join(''):[cljs.core.str("Parameter declaration \""),cljs.core.str(p1__11531_SHARP_),cljs.core.str("\" should be a vector")].join(''))));
}
}),fdecl);
var bad_args = cljs.core.seq.call(null,cljs.core.remove.call(null,((function (argdecls){
return (function (p1__11532_SHARP_){
return cljs.core.vector_QMARK_.call(null,p1__11532_SHARP_);
});})(argdecls))
,argdecls));
if(bad_args){
throw (new Error([cljs.core.str("Parameter declaration \""),cljs.core.str(cljs.core.first.call(null,bad_args)),cljs.core.str("\" should be a vector")].join('')));
} else {
return null;
}
});
cljs.core$macros.sigs = (function cljs$core$macros$sigs(fdecl){
cljs.core$macros.assert_valid_fdecl.call(null,fdecl);

var asig = (function (fdecl__$1){
var arglist = cljs.core.first.call(null,fdecl__$1);
var arglist__$1 = ((cljs.core._EQ_.call(null,cljs.core.cst$sym$_AMPERSAND_form,cljs.core.first.call(null,arglist)))?cljs.core.subvec.call(null,arglist,(2),cljs.core.count.call(null,arglist)):arglist);
var body = cljs.core.next.call(null,fdecl__$1);
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
if(cljs.core.next.call(null,body)){
return cljs.core.with_meta.call(null,arglist__$1,cljs.core.conj.call(null,(cljs.core.truth_(cljs.core.meta.call(null,arglist__$1))?cljs.core.meta.call(null,arglist__$1):cljs.core.PersistentArrayMap.EMPTY),cljs.core.first.call(null,body)));
} else {
return arglist__$1;
}
} else {
return arglist__$1;
}
});
if(cljs.core.seq_QMARK_.call(null,cljs.core.first.call(null,fdecl))){
var ret = cljs.core.PersistentVector.EMPTY;
var fdecls = fdecl;
while(true){
if(cljs.core.truth_(fdecls)){
var G__11533 = cljs.core.conj.call(null,ret,asig.call(null,cljs.core.first.call(null,fdecls)));
var G__11534 = cljs.core.next.call(null,fdecls);
ret = G__11533;
fdecls = G__11534;
continue;
} else {
return cljs.core.seq.call(null,ret);
}
break;
}
} else {
var x__7243__auto__ = asig.call(null,fdecl);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
}
});
/**
 * defs name to have the root value of init iff the named var has no root value,
 *   else init is unevaluated
 */
cljs.core$macros.defonce = (function cljs$core$macros$defonce(_AMPERSAND_form,_AMPERSAND_env,x,init){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_when_DASH_not),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_exists_QMARK_),(function (){var x__7243__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$def),(function (){var x__7243__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = init;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
});

cljs.core$macros.defonce.cljs$lang$macro = true;
cljs.core$macros.destructure = (function cljs$core$macros$destructure(bindings){
var bents = cljs.core.partition.call(null,(2),bindings);
var pb = ((function (bents){
return (function cljs$core$macros$destructure_$_pb(bvec,b,v){
var pvec = ((function (bents){
return (function (bvec__$1,b__$1,val){
var gvec = cljs.core.gensym.call(null,"vec__");
var gseq = cljs.core.gensym.call(null,"seq__");
var gfirst = cljs.core.gensym.call(null,"first__");
var has_rest = cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$_AMPERSAND_,null], null), null),b__$1);
var ret = (function (){var ret = cljs.core.conj.call(null,bvec__$1,gvec,val);
if(cljs.core.truth_(has_rest)){
return cljs.core.conj.call(null,ret,gseq,cljs.core._conj.call(null,(function (){var x__7243__auto__ = gvec;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),cljs.core.cst$sym$cljs$core_SLASH_seq));
} else {
return ret;
}
})();
var n = (0);
var bs = b__$1;
var seen_rest_QMARK_ = false;
while(true){
if(cljs.core.seq.call(null,bs)){
var firstb = cljs.core.first.call(null,bs);
if(cljs.core._EQ_.call(null,firstb,cljs.core.cst$sym$_AMPERSAND_)){
var G__11544 = cljs$core$macros$destructure_$_pb.call(null,ret,cljs.core.second.call(null,bs),gseq);
var G__11545 = n;
var G__11546 = cljs.core.nnext.call(null,bs);
var G__11547 = true;
ret = G__11544;
n = G__11545;
bs = G__11546;
seen_rest_QMARK_ = G__11547;
continue;
} else {
if(cljs.core._EQ_.call(null,firstb,cljs.core.cst$kw$as)){
return cljs$core$macros$destructure_$_pb.call(null,ret,cljs.core.second.call(null,bs),gvec);
} else {
if(seen_rest_QMARK_){
throw (new Error("Unsupported binding form, only :as can follow & parameter"));
} else {
var G__11548 = cljs$core$macros$destructure_$_pb.call(null,(cljs.core.truth_(has_rest)?cljs.core.conj.call(null,ret,gfirst,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_first),(function (){var x__7243__auto__ = gseq;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})()))),gseq,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_next),(function (){var x__7243__auto__ = gseq;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())))):ret),firstb,(cljs.core.truth_(has_rest)?gfirst:cljs.core._conj.call(null,(function (){var x__7243__auto__ = gvec;
return cljs.core._conj.call(null,(function (){var x__7243__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,null),x__7243__auto____$1);
})(),x__7243__auto__);
})(),cljs.core.cst$sym$cljs$core_SLASH_nth)));
var G__11549 = (n + (1));
var G__11550 = cljs.core.next.call(null,bs);
var G__11551 = seen_rest_QMARK_;
ret = G__11548;
n = G__11549;
bs = G__11550;
seen_rest_QMARK_ = G__11551;
continue;
}

}
}
} else {
return ret;
}
break;
}
});})(bents))
;
var pmap = ((function (pvec,bents){
return (function (bvec__$1,b__$1,v__$1){
var gmap = cljs.core.gensym.call(null,"map__");
var defaults = cljs.core.cst$kw$or.cljs$core$IFn$_invoke$arity$1(b__$1);
var ret = ((function (gmap,defaults,pvec,bents){
return (function (ret){
if(cljs.core.truth_(cljs.core.cst$kw$as.cljs$core$IFn$_invoke$arity$1(b__$1))){
return cljs.core.conj.call(null,ret,cljs.core.cst$kw$as.cljs$core$IFn$_invoke$arity$1(b__$1),gmap);
} else {
return ret;
}
});})(gmap,defaults,pvec,bents))
.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,bvec__$1,gmap),v__$1),gmap),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_implements_QMARK_),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_ISeq),(function (){var x__7243__auto__ = gmap;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_apply),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_hash_DASH_map),(function (){var x__7243__auto__ = gmap;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = gmap;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())))));
var bes = (function (){var transforms = cljs.core.reduce.call(null,((function (ret,gmap,defaults,pvec,bents){
return (function (transforms,mk){
if((mk instanceof cljs.core.Keyword)){
var mkns = cljs.core.namespace.call(null,mk);
var mkn = cljs.core.name.call(null,mk);
if(cljs.core._EQ_.call(null,mkn,"keys")){
return cljs.core.assoc.call(null,transforms,mk,((function (mkns,mkn,ret,gmap,defaults,pvec,bents){
return (function (p1__11535_SHARP_){
return cljs.core.keyword.call(null,(function (){var or__6409__auto__ = mkns;
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return cljs.core.namespace.call(null,p1__11535_SHARP_);
}
})(),cljs.core.name.call(null,p1__11535_SHARP_));
});})(mkns,mkn,ret,gmap,defaults,pvec,bents))
);
} else {
if(cljs.core._EQ_.call(null,mkn,"syms")){
return cljs.core.assoc.call(null,transforms,mk,((function (mkns,mkn,ret,gmap,defaults,pvec,bents){
return (function (p1__11536_SHARP_){
return cljs.core._conj.call(null,(function (){var x__7243__auto__ = cljs.core.symbol.call(null,(function (){var or__6409__auto__ = mkns;
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return cljs.core.namespace.call(null,p1__11536_SHARP_);
}
})(),cljs.core.name.call(null,p1__11536_SHARP_));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),cljs.core.cst$sym$quote);
});})(mkns,mkn,ret,gmap,defaults,pvec,bents))
);
} else {
if(cljs.core._EQ_.call(null,mkn,"strs")){
return cljs.core.assoc.call(null,transforms,mk,cljs.core.str);
} else {
return transforms;

}
}
}
} else {
return transforms;
}
});})(ret,gmap,defaults,pvec,bents))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keys.call(null,b__$1));
return cljs.core.reduce.call(null,((function (transforms,ret,gmap,defaults,pvec,bents){
return (function (bes,entry){
return cljs.core.reduce.call(null,((function (transforms,ret,gmap,defaults,pvec,bents){
return (function (p1__11537_SHARP_,p2__11538_SHARP_){
return cljs.core.assoc.call(null,p1__11537_SHARP_,p2__11538_SHARP_,cljs.core.val.call(null,entry).call(null,p2__11538_SHARP_));
});})(transforms,ret,gmap,defaults,pvec,bents))
,cljs.core.dissoc.call(null,bes,cljs.core.key.call(null,entry)),cljs.core.key.call(null,entry).call(null,bes));
});})(transforms,ret,gmap,defaults,pvec,bents))
,cljs.core.dissoc.call(null,b__$1,cljs.core.cst$kw$as,cljs.core.cst$kw$or),transforms);
})();
while(true){
if(cljs.core.seq.call(null,bes)){
var bb = cljs.core.key.call(null,cljs.core.first.call(null,bes));
var bk = cljs.core.val.call(null,cljs.core.first.call(null,bes));
var local = ((((!((bb == null)))?((((bb.cljs$lang$protocol_mask$partition1$ & (4096))) || (bb.cljs$core$INamed$))?true:false):false))?cljs.core.with_meta.call(null,cljs.core.symbol.call(null,null,cljs.core.name.call(null,bb)),cljs.core.meta.call(null,bb)):bb);
var bv = ((cljs.core.contains_QMARK_.call(null,defaults,local))?cljs.core._conj.call(null,(function (){var x__7243__auto__ = gmap;
return cljs.core._conj.call(null,(function (){var x__7243__auto____$1 = bk;
return cljs.core._conj.call(null,(function (){var x__7243__auto____$2 = defaults.call(null,local);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto____$2);
})(),x__7243__auto____$1);
})(),x__7243__auto__);
})(),cljs.core.cst$sym$cljs$core_SLASH_get):cljs.core._conj.call(null,(function (){var x__7243__auto__ = gmap;
return cljs.core._conj.call(null,(function (){var x__7243__auto____$1 = bk;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto____$1);
})(),x__7243__auto__);
})(),cljs.core.cst$sym$cljs$core_SLASH_get));
var G__11552 = ((((bb instanceof cljs.core.Keyword)) || ((bb instanceof cljs.core.Symbol)))?cljs.core.conj.call(null,ret,local,bv):cljs$core$macros$destructure_$_pb.call(null,ret,bb,bv));
var G__11553 = cljs.core.next.call(null,bes);
ret = G__11552;
bes = G__11553;
continue;
} else {
return ret;
}
break;
}
});})(pvec,bents))
;
if((b instanceof cljs.core.Symbol)){
return cljs.core.conj.call(null,cljs.core.conj.call(null,bvec,(cljs.core.truth_(cljs.core.namespace.call(null,b))?cljs.core.symbol.call(null,cljs.core.name.call(null,b)):b)),v);
} else {
if((b instanceof cljs.core.Keyword)){
return cljs.core.conj.call(null,cljs.core.conj.call(null,bvec,cljs.core.symbol.call(null,cljs.core.name.call(null,b))),v);
} else {
if(cljs.core.vector_QMARK_.call(null,b)){
return pvec.call(null,bvec,b,v);
} else {
if(cljs.core.map_QMARK_.call(null,b)){
return pmap.call(null,bvec,b,v);
} else {
throw (new Error([cljs.core.str("Unsupported binding form: "),cljs.core.str(b)].join('')));

}
}
}
}
});})(bents))
;
var process_entry = ((function (bents,pb){
return (function (bvec,b){
return pb.call(null,bvec,cljs.core.first.call(null,b),cljs.core.second.call(null,b));
});})(bents,pb))
;
if(cljs.core.every_QMARK_.call(null,cljs.core.symbol_QMARK_,cljs.core.map.call(null,cljs.core.first,bents))){
return bindings;
} else {
var temp__4655__auto__ = cljs.core.seq.call(null,cljs.core.filter.call(null,((function (bents,pb,process_entry){
return (function (p1__11539_SHARP_){
return (cljs.core.first.call(null,p1__11539_SHARP_) instanceof cljs.core.Keyword);
});})(bents,pb,process_entry))
,bents));
if(temp__4655__auto__){
var kwbs = temp__4655__auto__;
throw (new Error([cljs.core.str("Unsupported binding key: "),cljs.core.str(cljs.core.ffirst.call(null,kwbs))].join('')));
} else {
return cljs.core.reduce.call(null,process_entry,cljs.core.PersistentVector.EMPTY,bents);
}
}
});
/**
 * Defines a var using `goog.define`. Passed default value must be
 *   string, number or boolean.
 * 
 *   Default value can be overridden at compile time using the
 *   compiler option `:closure-defines`.
 * 
 *   Example:
 *  (ns your-app.core)
 *  (goog-define DEBUG! false)
 *  ;; can be overridden with
 *  :closure-defines {"your_app.core.DEBUG_BANG_" true}
 *  or
 *  :closure-defines {'your-app.core/DEBUG! true}
 */
cljs.core$macros.goog_define = (function cljs$core$macros$goog_define(_AMPERSAND_form,_AMPERSAND_env,sym,default$){
if((typeof default$ === 'string') || (typeof default$ === 'number') || (default$ === true) || (default$ === false)){
} else {
throw cljs.core.ex_info.call(null,"goog-define requires a string, number or boolean as default value",cljs.core.PersistentArrayMap.EMPTY);
}


var defname = cljs.compiler.munge.call(null,[cljs.core.str(cljs.core._STAR_ns_STAR_),cljs.core.str("/"),cljs.core.str(sym)].join(''));
var type = ((typeof default$ === 'string')?"string":((typeof default$ === 'number')?"number":(((default$ === true) || (default$ === false))?"boolean":null)));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$do),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_declare),(function (){var x__7243__auto__ = cljs.core.symbol.call(null,sym);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$js_STAR_),(function (){var x__7243__auto__ = [cljs.core.str("/** @define {"),cljs.core.str(type),cljs.core.str("} */")].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$goog_SLASH_define),(function (){var x__7243__auto__ = defname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = default$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
});

cljs.core$macros.goog_define.cljs$lang$macro = true;
/**
 * binding => binding-form init-expr
 * 
 *   Evaluates the exprs in a lexical context in which the symbols in
 *   the binding-forms are bound to their respective init-exprs or parts
 *   therein.
 */
cljs.core$macros.let$ = (function cljs$core$macros$let(var_args){
var args__7491__auto__ = [];
var len__7484__auto___11558 = arguments.length;
var i__7485__auto___11559 = (0);
while(true){
if((i__7485__auto___11559 < len__7484__auto___11558)){
args__7491__auto__.push((arguments[i__7485__auto___11559]));

var G__11560 = (i__7485__auto___11559 + (1));
i__7485__auto___11559 = G__11560;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((3) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.let$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7492__auto__);
});

cljs.core$macros.let$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
if(cljs.core.vector_QMARK_.call(null,bindings)){
} else {
throw cljs.core.ex_info.call(null,"let requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,bindings))){
} else {
throw cljs.core.ex_info.call(null,"let requires an even number of forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$let_STAR_),(function (){var x__7243__auto__ = cljs.core$macros.destructure.call(null,bindings);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),body)));
});

cljs.core$macros.let$.cljs$lang$maxFixedArity = (3);

cljs.core$macros.let$.cljs$lang$applyTo = (function (seq11554){
var G__11555 = cljs.core.first.call(null,seq11554);
var seq11554__$1 = cljs.core.next.call(null,seq11554);
var G__11556 = cljs.core.first.call(null,seq11554__$1);
var seq11554__$2 = cljs.core.next.call(null,seq11554__$1);
var G__11557 = cljs.core.first.call(null,seq11554__$2);
var seq11554__$3 = cljs.core.next.call(null,seq11554__$2);
return cljs.core$macros.let$.cljs$core$IFn$_invoke$arity$variadic(G__11555,G__11556,G__11557,seq11554__$3);
});


cljs.core$macros.let$.cljs$lang$macro = true;
/**
 * Evaluates the exprs in a lexical context in which the symbols in
 *   the binding-forms are bound to their respective init-exprs or parts
 *   therein. Acts as a recur target.
 */
cljs.core$macros.loop = (function cljs$core$macros$loop(var_args){
var args__7491__auto__ = [];
var len__7484__auto___11569 = arguments.length;
var i__7485__auto___11570 = (0);
while(true){
if((i__7485__auto___11570 < len__7484__auto___11569)){
args__7491__auto__.push((arguments[i__7485__auto___11570]));

var G__11571 = (i__7485__auto___11570 + (1));
i__7485__auto___11570 = G__11571;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((3) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.loop.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7492__auto__);
});

cljs.core$macros.loop.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
if(cljs.core.vector_QMARK_.call(null,bindings)){
} else {
throw cljs.core.ex_info.call(null,"loop requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,bindings))){
} else {
throw cljs.core.ex_info.call(null,"loop requires an even number of forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var db = cljs.core$macros.destructure.call(null,bindings);
if(cljs.core._EQ_.call(null,db,bindings)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$loop_STAR_),(function (){var x__7243__auto__ = bindings;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),body)));
} else {
var vs = cljs.core.take_nth.call(null,(2),cljs.core.drop.call(null,(1),bindings));
var bs = cljs.core.take_nth.call(null,(2),bindings);
var gs = cljs.core.map.call(null,((function (vs,bs,db){
return (function (b){
if((b instanceof cljs.core.Symbol)){
return b;
} else {
return cljs.core.gensym.call(null);
}
});})(vs,bs,db))
,bs);
var bfs = cljs.core.reduce.call(null,((function (vs,bs,gs,db){
return (function (ret,p__11565){
var vec__11566 = p__11565;
var b = cljs.core.nth.call(null,vec__11566,(0),null);
var v = cljs.core.nth.call(null,vec__11566,(1),null);
var g = cljs.core.nth.call(null,vec__11566,(2),null);
if((b instanceof cljs.core.Symbol)){
return cljs.core.conj.call(null,ret,g,v);
} else {
return cljs.core.conj.call(null,ret,g,v,b,g);
}
});})(vs,bs,gs,db))
,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,cljs.core.vector,bs,vs,gs));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7243__auto__ = bfs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$loop_STAR_),(function (){var x__7243__auto__ = cljs.core.vec.call(null,cljs.core.interleave.call(null,gs,gs));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7243__auto__ = cljs.core.vec.call(null,cljs.core.interleave.call(null,bs,gs));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
}
});

cljs.core$macros.loop.cljs$lang$maxFixedArity = (3);

cljs.core$macros.loop.cljs$lang$applyTo = (function (seq11561){
var G__11562 = cljs.core.first.call(null,seq11561);
var seq11561__$1 = cljs.core.next.call(null,seq11561);
var G__11563 = cljs.core.first.call(null,seq11561__$1);
var seq11561__$2 = cljs.core.next.call(null,seq11561__$1);
var G__11564 = cljs.core.first.call(null,seq11561__$2);
var seq11561__$3 = cljs.core.next.call(null,seq11561__$2);
return cljs.core$macros.loop.cljs$core$IFn$_invoke$arity$variadic(G__11562,G__11563,G__11564,seq11561__$3);
});


cljs.core$macros.loop.cljs$lang$macro = true;
/**
 * protocol fqn -> [partition number, bit]
 */
cljs.core$macros.fast_path_protocols = cljs.core.zipmap.call(null,cljs.core.map.call(null,(function (p1__11572_SHARP_){
return cljs.core.symbol.call(null,"cljs.core",[cljs.core.str(p1__11572_SHARP_)].join(''));
}),cljs.core.PersistentVector.fromArray([cljs.core.cst$sym$IFn,cljs.core.cst$sym$ICounted,cljs.core.cst$sym$IEmptyableCollection,cljs.core.cst$sym$ICollection,cljs.core.cst$sym$IIndexed,cljs.core.cst$sym$ASeq,cljs.core.cst$sym$ISeq,cljs.core.cst$sym$INext,cljs.core.cst$sym$ILookup,cljs.core.cst$sym$IAssociative,cljs.core.cst$sym$IMap,cljs.core.cst$sym$IMapEntry,cljs.core.cst$sym$ISet,cljs.core.cst$sym$IStack,cljs.core.cst$sym$IVector,cljs.core.cst$sym$IDeref,cljs.core.cst$sym$IDerefWithTimeout,cljs.core.cst$sym$IMeta,cljs.core.cst$sym$IWithMeta,cljs.core.cst$sym$IReduce,cljs.core.cst$sym$IKVReduce,cljs.core.cst$sym$IEquiv,cljs.core.cst$sym$IHash,cljs.core.cst$sym$ISeqable,cljs.core.cst$sym$ISequential,cljs.core.cst$sym$IList,cljs.core.cst$sym$IRecord,cljs.core.cst$sym$IReversible,cljs.core.cst$sym$ISorted,cljs.core.cst$sym$IPrintWithWriter,cljs.core.cst$sym$IWriter,cljs.core.cst$sym$IPrintWithWriter,cljs.core.cst$sym$IPending,cljs.core.cst$sym$IWatchable,cljs.core.cst$sym$IEditableCollection,cljs.core.cst$sym$ITransientCollection,cljs.core.cst$sym$ITransientAssociative,cljs.core.cst$sym$ITransientMap,cljs.core.cst$sym$ITransientVector,cljs.core.cst$sym$ITransientSet,cljs.core.cst$sym$IMultiFn,cljs.core.cst$sym$IChunkedSeq,cljs.core.cst$sym$IChunkedNext,cljs.core.cst$sym$IComparable,cljs.core.cst$sym$INamed,cljs.core.cst$sym$ICloneable,cljs.core.cst$sym$IAtom,cljs.core.cst$sym$IReset,cljs.core.cst$sym$ISwap], true)),cljs.core.iterate.call(null,(function (p__11573){
var vec__11574 = p__11573;
var p = cljs.core.nth.call(null,vec__11574,(0),null);
var b = cljs.core.nth.call(null,vec__11574,(1),null);
if(((2147483648) === b)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(p + (1)),(1)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,((2) * b)], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null)));
/**
 * total number of partitions
 */
cljs.core$macros.fast_path_protocol_partitions_count = (function (){var c = cljs.core.count.call(null,cljs.core$macros.fast_path_protocols);
var m = cljs.core.mod.call(null,c,(32));
if((m === (0))){
return cljs.core.quot.call(null,c,(32));
} else {
return (cljs.core.quot.call(null,c,(32)) + (1));
}
})();
cljs.core$macros.str = (function cljs$core$macros$str(var_args){
var args__7491__auto__ = [];
var len__7484__auto___11580 = arguments.length;
var i__7485__auto___11581 = (0);
while(true){
if((i__7485__auto___11581 < len__7484__auto___11580)){
args__7491__auto__.push((arguments[i__7485__auto___11581]));

var G__11582 = (i__7485__auto___11581 + (1));
i__7485__auto___11581 = G__11582;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((2) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7492__auto__);
});

cljs.core$macros.str.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
var strs = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,",",cljs.core.repeat.call(null,cljs.core.count.call(null,xs),"cljs.core.str(~{})")));
return cljs.core.list_STAR_.call(null,cljs.core.cst$sym$js_STAR_,[cljs.core.str("["),cljs.core.str(strs),cljs.core.str("].join('')")].join(''),xs);
});

cljs.core$macros.str.cljs$lang$maxFixedArity = (2);

cljs.core$macros.str.cljs$lang$applyTo = (function (seq11577){
var G__11578 = cljs.core.first.call(null,seq11577);
var seq11577__$1 = cljs.core.next.call(null,seq11577);
var G__11579 = cljs.core.first.call(null,seq11577__$1);
var seq11577__$2 = cljs.core.next.call(null,seq11577__$1);
return cljs.core$macros.str.cljs$core$IFn$_invoke$arity$variadic(G__11578,G__11579,seq11577__$2);
});


cljs.core$macros.str.cljs$lang$macro = true;
cljs.core$macros.bool_expr = (function cljs$core$macros$bool_expr(e){
return cljs.core.vary_meta.call(null,e,cljs.core.assoc,cljs.core.cst$kw$tag,cljs.core.cst$sym$boolean);
});
cljs.core$macros.simple_test_expr_QMARK_ = (function cljs$core$macros$simple_test_expr_QMARK_(env,ast){
var and__6397__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$js,null,cljs.core.cst$kw$constant,null,cljs.core.cst$kw$var,null,cljs.core.cst$kw$invoke,null,cljs.core.cst$kw$dot,null], null), null).call(null,cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(ast));
if(cljs.core.truth_(and__6397__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$sym$seq,null,cljs.core.cst$sym$boolean,null], null), null).call(null,cljs.analyzer.infer_tag.call(null,env,ast));
} else {
return and__6397__auto__;
}
});
/**
 * Evaluates exprs one at a time, from left to right. If a form
 *   returns logical false (nil or false), and returns that value and
 *   doesn't evaluate any of the other expressions, otherwise it returns
 *   the value of the last expr. (and) returns true.
 */
cljs.core$macros.and = (function cljs$core$macros$and(var_args){
var args11586 = [];
var len__7484__auto___11593 = arguments.length;
var i__7485__auto___11594 = (0);
while(true){
if((i__7485__auto___11594 < len__7484__auto___11593)){
args11586.push((arguments[i__7485__auto___11594]));

var G__11595 = (i__7485__auto___11594 + (1));
i__7485__auto___11594 = G__11595;
continue;
} else {
}
break;
}

var G__11592 = args11586.length;
switch (G__11592) {
case 2:
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__7503__auto__ = (new cljs.core.IndexedSeq(args11586.slice((3)),(0),null));
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7503__auto__);

}
});

cljs.core$macros.and.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return true;
});

cljs.core$macros.and.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.and.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,next){
var forms = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null),next);
if(cljs.core.every_QMARK_.call(null,((function (forms){
return (function (p1__11583_SHARP_){
return cljs.core$macros.simple_test_expr_QMARK_.call(null,_AMPERSAND_env,p1__11583_SHARP_);
});})(forms))
,cljs.core.map.call(null,((function (forms){
return (function (p1__11584_SHARP_){
return cljs.analyzer.analyze.call(null,_AMPERSAND_env,p1__11584_SHARP_);
});})(forms))
,forms))){
var and_str = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," && ",cljs.core.repeat.call(null,cljs.core.count.call(null,forms),"(~{})")));
return cljs.core$macros.bool_expr.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$js_STAR_),(function (){var x__7243__auto__ = and_str;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),forms))));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7243__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$and__11585__auto__),(function (){var x__7243__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$if),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$and__11585__auto__),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_and),next)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$and__11585__auto__))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
}
});

cljs.core$macros.and.cljs$lang$applyTo = (function (seq11587){
var G__11588 = cljs.core.first.call(null,seq11587);
var seq11587__$1 = cljs.core.next.call(null,seq11587);
var G__11589 = cljs.core.first.call(null,seq11587__$1);
var seq11587__$2 = cljs.core.next.call(null,seq11587__$1);
var G__11590 = cljs.core.first.call(null,seq11587__$2);
var seq11587__$3 = cljs.core.next.call(null,seq11587__$2);
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$variadic(G__11588,G__11589,G__11590,seq11587__$3);
});

cljs.core$macros.and.cljs$lang$maxFixedArity = (3);


cljs.core$macros.and.cljs$lang$macro = true;
/**
 * Evaluates exprs one at a time, from left to right. If a form
 *   returns a logical true value, or returns that value and doesn't
 *   evaluate any of the other expressions, otherwise it returns the
 *   value of the last expression. (or) returns nil.
 */
cljs.core$macros.or = (function cljs$core$macros$or(var_args){
var args11600 = [];
var len__7484__auto___11607 = arguments.length;
var i__7485__auto___11608 = (0);
while(true){
if((i__7485__auto___11608 < len__7484__auto___11607)){
args11600.push((arguments[i__7485__auto___11608]));

var G__11609 = (i__7485__auto___11608 + (1));
i__7485__auto___11608 = G__11609;
continue;
} else {
}
break;
}

var G__11606 = args11600.length;
switch (G__11606) {
case 2:
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__7503__auto__ = (new cljs.core.IndexedSeq(args11600.slice((3)),(0),null));
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7503__auto__);

}
});

cljs.core$macros.or.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return null;
});

cljs.core$macros.or.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.or.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,next){
var forms = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null),next);
if(cljs.core.every_QMARK_.call(null,((function (forms){
return (function (p1__11597_SHARP_){
return cljs.core$macros.simple_test_expr_QMARK_.call(null,_AMPERSAND_env,p1__11597_SHARP_);
});})(forms))
,cljs.core.map.call(null,((function (forms){
return (function (p1__11598_SHARP_){
return cljs.analyzer.analyze.call(null,_AMPERSAND_env,p1__11598_SHARP_);
});})(forms))
,forms))){
var or_str = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," || ",cljs.core.repeat.call(null,cljs.core.count.call(null,forms),"(~{})")));
return cljs.core$macros.bool_expr.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$js_STAR_),(function (){var x__7243__auto__ = or_str;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),forms))));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7243__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$or__11599__auto__),(function (){var x__7243__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$if),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$or__11599__auto__),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$or__11599__auto__),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_or),next)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
}
});

cljs.core$macros.or.cljs$lang$applyTo = (function (seq11601){
var G__11602 = cljs.core.first.call(null,seq11601);
var seq11601__$1 = cljs.core.next.call(null,seq11601);
var G__11603 = cljs.core.first.call(null,seq11601__$1);
var seq11601__$2 = cljs.core.next.call(null,seq11601__$1);
var G__11604 = cljs.core.first.call(null,seq11601__$2);
var seq11601__$3 = cljs.core.next.call(null,seq11601__$2);
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$variadic(G__11602,G__11603,G__11604,seq11601__$3);
});

cljs.core$macros.or.cljs$lang$maxFixedArity = (3);


cljs.core$macros.or.cljs$lang$macro = true;
cljs.core$macros.nil_QMARK_ = (function cljs$core$macros$nil_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_coercive_DASH__EQ_),(function (){var x__7243__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
});

cljs.core$macros.nil_QMARK_.cljs$lang$macro = true;
cljs.core$macros.coercive_not = (function cljs$core$macros$coercive_not(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__7243__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),"(!~{})"),cljs.core.cst$sym$js_STAR_));
});

cljs.core$macros.coercive_not.cljs$lang$macro = true;
cljs.core$macros.coercive_not_EQ_ = (function cljs$core$macros$coercive_not_EQ_(_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__7243__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__7243__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto____$1);
})(),x__7243__auto__);
})(),"(~{} != ~{})"),cljs.core.cst$sym$js_STAR_));
});

cljs.core$macros.coercive_not_EQ_.cljs$lang$macro = true;
cljs.core$macros.coercive__EQ_ = (function cljs$core$macros$coercive__EQ_(_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__7243__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__7243__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto____$1);
})(),x__7243__auto__);
})(),"(~{} == ~{})"),cljs.core.cst$sym$js_STAR_));
});

cljs.core$macros.coercive__EQ_.cljs$lang$macro = true;
cljs.core$macros.coercive_boolean = (function cljs$core$macros$coercive_boolean(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.with_meta.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__7243__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),"~{}"),cljs.core.cst$sym$js_STAR_),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$boolean], null));
});

cljs.core$macros.coercive_boolean.cljs$lang$macro = true;
cljs.core$macros.truth_ = (function cljs$core$macros$truth_(_AMPERSAND_form,_AMPERSAND_env,x){
if((x instanceof cljs.core.Symbol)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("x is substituted twice"),cljs.core.str("\n"),cljs.core.str("(core/symbol? x)")].join('')));
}

return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__7243__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__7243__auto____$1 = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto____$1);
})(),x__7243__auto__);
})(),"(~{} != null && ~{} !== false)"),cljs.core.cst$sym$js_STAR_);
});

cljs.core$macros.truth_.cljs$lang$macro = true;
cljs.core$macros.js_arguments = (function cljs$core$macros$js_arguments(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"arguments"),cljs.core.cst$sym$js_STAR_);
});

cljs.core$macros.js_arguments.cljs$lang$macro = true;
cljs.core$macros.js_delete = (function cljs$core$macros$js_delete(_AMPERSAND_form,_AMPERSAND_env,obj,key){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__7243__auto__ = obj;
return cljs.core._conj.call(null,(function (){var x__7243__auto____$1 = key;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto____$1);
})(),x__7243__auto__);
})(),"delete ~{}[~{}]"),cljs.core.cst$sym$js_STAR_);
});

cljs.core$macros.js_delete.cljs$lang$macro = true;
cljs.core$macros.js_in = (function cljs$core$macros$js_in(_AMPERSAND_form,_AMPERSAND_env,key,obj){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__7243__auto__ = key;
return cljs.core._conj.call(null,(function (){var x__7243__auto____$1 = obj;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto____$1);
})(),x__7243__auto__);
})(),"~{} in ~{}"),cljs.core.cst$sym$js_STAR_);
});

cljs.core$macros.js_in.cljs$lang$macro = true;
/**
 * Emit JavaScript "debugger;" statement
 */
cljs.core$macros.js_debugger = (function cljs$core$macros$js_debugger(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core._conj.call(null,(function (){var x__7243__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"debugger"),cljs.core.cst$sym$js_STAR_);
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,null),x__7243__auto__);
})(),cljs.core.cst$sym$do);
});

cljs.core$macros.js_debugger.cljs$lang$macro = true;
/**
 * Emit a top-level JavaScript multi-line comment. New lines will create a
 *   new comment line. Comment block will be preceded and followed by a newline
 */
cljs.core$macros.js_comment = (function cljs$core$macros$js_comment(_AMPERSAND_form,_AMPERSAND_env,comment){
var vec__11615 = clojure.string.split.call(null,comment,/\n/);
var seq__11616 = cljs.core.seq.call(null,vec__11615);
var first__11617 = cljs.core.first.call(null,seq__11616);
var seq__11616__$1 = cljs.core.next.call(null,seq__11616);
var x = first__11617;
var ys = seq__11616__$1;
return cljs.core._conj.call(null,(function (){var x__7243__auto__ = [cljs.core.str("\n/**\n"),cljs.core.str([cljs.core.str(" * "),cljs.core.str(x),cljs.core.str("\n")].join('')),cljs.core.str(cljs.core.reduce.call(null,cljs.core.str,"",cljs.core.map.call(null,((function (vec__11615,seq__11616,first__11617,seq__11616__$1,x,ys){
return (function (p1__11611_SHARP_){
return [cljs.core.str(" * "),cljs.core.str(clojure.string.replace.call(null,p1__11611_SHARP_,/^   /,"")),cljs.core.str("\n")].join('');
});})(vec__11615,seq__11616,first__11617,seq__11616__$1,x,ys))
,ys))),cljs.core.str(" */\n")].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),cljs.core.cst$sym$js_STAR_);
});

cljs.core$macros.js_comment.cljs$lang$macro = true;
/**
 * EXPERIMENTAL: Subject to change. Unsafely cast a value to a different type.
 */
cljs.core$macros.unsafe_cast = (function cljs$core$macros$unsafe_cast(_AMPERSAND_form,_AMPERSAND_env,t,x){
var cast_expr = [cljs.core.str("~{} = /** @type {"),cljs.core.str(t),cljs.core.str("} */ (~{})")].join('');
return cljs.core._conj.call(null,(function (){var x__7243__auto__ = cast_expr;
return cljs.core._conj.call(null,(function (){var x__7243__auto____$1 = x;
return cljs.core._conj.call(null,(function (){var x__7243__auto____$2 = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto____$2);
})(),x__7243__auto____$1);
})(),x__7243__auto__);
})(),cljs.core.cst$sym$js_STAR_);
});

cljs.core$macros.unsafe_cast.cljs$lang$macro = true;
/**
 * Emit an inline JavaScript comment.
 */
cljs.core$macros.js_inline_comment = (function cljs$core$macros$js_inline_comment(_AMPERSAND_form,_AMPERSAND_env,comment){
return cljs.core._conj.call(null,(function (){var x__7243__auto__ = [cljs.core.str("/**"),cljs.core.str(comment),cljs.core.str("*/")].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),cljs.core.cst$sym$js_STAR_);
});

cljs.core$macros.js_inline_comment.cljs$lang$macro = true;
cljs.core$macros.true_QMARK_ = (function cljs$core$macros$true_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__7243__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),"~{} === true"),cljs.core.cst$sym$js_STAR_));
});

cljs.core$macros.true_QMARK_.cljs$lang$macro = true;
cljs.core$macros.false_QMARK_ = (function cljs$core$macros$false_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__7243__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),"~{} === false"),cljs.core.cst$sym$js_STAR_));
});

cljs.core$macros.false_QMARK_.cljs$lang$macro = true;
cljs.core$macros.string_QMARK_ = (function cljs$core$macros$string_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__7243__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),"typeof ~{} === 'string'"),cljs.core.cst$sym$js_STAR_));
});

cljs.core$macros.string_QMARK_.cljs$lang$macro = true;
/**
 * Return true if argument exists, analogous to usage of typeof operator
 * in JavaScript.
 */
cljs.core$macros.exists_QMARK_ = (function cljs$core$macros$exists_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__7243__auto__ = cljs.core.vary_meta.call(null,x,cljs.core.assoc,cljs.core.cst$kw$cljs$analyzer_SLASH_no_DASH_resolve,true);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),"typeof ~{} !== 'undefined'"),cljs.core.cst$sym$js_STAR_));
});

cljs.core$macros.exists_QMARK_.cljs$lang$macro = true;
/**
 * Return true if argument is identical to the JavaScript undefined value.
 */
cljs.core$macros.undefined_QMARK_ = (function cljs$core$macros$undefined_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__7243__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),"(void 0 === ~{})"),cljs.core.cst$sym$js_STAR_));
});

cljs.core$macros.undefined_QMARK_.cljs$lang$macro = true;
cljs.core$macros.identical_QMARK_ = (function cljs$core$macros$identical_QMARK_(_AMPERSAND_form,_AMPERSAND_env,a,b){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__7243__auto__ = a;
return cljs.core._conj.call(null,(function (){var x__7243__auto____$1 = b;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto____$1);
})(),x__7243__auto__);
})(),"(~{} === ~{})"),cljs.core.cst$sym$js_STAR_));
});

cljs.core$macros.identical_QMARK_.cljs$lang$macro = true;
cljs.core$macros.instance_QMARK_ = (function cljs$core$macros$instance_QMARK_(_AMPERSAND_form,_AMPERSAND_env,c,x){
return cljs.core$macros.bool_expr.call(null,(((c instanceof cljs.core.Symbol))?cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__7243__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__7243__auto____$1 = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto____$1);
})(),x__7243__auto__);
})(),"(~{} instanceof ~{})"),cljs.core.cst$sym$js_STAR_):cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7243__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$c__11618__auto__),(function (){var x__7243__auto__ = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$x__11619__auto__),(function (){var x__7243__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$js_STAR_),cljs.core._conj.call(null,cljs.core.List.EMPTY,"(~{} instanceof ~{})"),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$x__11619__auto__),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$c__11618__auto__))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())))));
});

cljs.core$macros.instance_QMARK_.cljs$lang$macro = true;
cljs.core$macros.number_QMARK_ = (function cljs$core$macros$number_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__7243__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),"typeof ~{} === 'number'"),cljs.core.cst$sym$js_STAR_));
});

cljs.core$macros.number_QMARK_.cljs$lang$macro = true;
cljs.core$macros.symbol_QMARK_ = (function cljs$core$macros$symbol_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_instance_QMARK_),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_Symbol),(function (){var x__7243__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})()))));
});

cljs.core$macros.symbol_QMARK_.cljs$lang$macro = true;
cljs.core$macros.keyword_QMARK_ = (function cljs$core$macros$keyword_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_instance_QMARK_),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_Keyword),(function (){var x__7243__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})()))));
});

cljs.core$macros.keyword_QMARK_.cljs$lang$macro = true;
cljs.core$macros.aget = (function cljs$core$macros$aget(var_args){
var args11620 = [];
var len__7484__auto___11628 = arguments.length;
var i__7485__auto___11629 = (0);
while(true){
if((i__7485__auto___11629 < len__7484__auto___11628)){
args11620.push((arguments[i__7485__auto___11629]));

var G__11630 = (i__7485__auto___11629 + (1));
i__7485__auto___11629 = G__11630;
continue;
} else {
}
break;
}

var G__11627 = args11620.length;
switch (G__11627) {
case 4:
return cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__7503__auto__ = (new cljs.core.IndexedSeq(args11620.slice((4)),(0),null));
return cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__7503__auto__);

}
});

cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,a,i){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__7243__auto__ = a;
return cljs.core._conj.call(null,(function (){var x__7243__auto____$1 = i;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto____$1);
})(),x__7243__auto__);
})(),"(~{}[~{}])"),cljs.core.cst$sym$js_STAR_);
});

cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,a,i,idxs){
var astr = cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,cljs.core.count.call(null,idxs),"[~{}]"));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$js_STAR_),(function (){var x__7243__auto__ = [cljs.core.str("(~{}[~{}]"),cljs.core.str(astr),cljs.core.str(")")].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = a;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = i;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),idxs)));
});

cljs.core$macros.aget.cljs$lang$applyTo = (function (seq11621){
var G__11622 = cljs.core.first.call(null,seq11621);
var seq11621__$1 = cljs.core.next.call(null,seq11621);
var G__11623 = cljs.core.first.call(null,seq11621__$1);
var seq11621__$2 = cljs.core.next.call(null,seq11621__$1);
var G__11624 = cljs.core.first.call(null,seq11621__$2);
var seq11621__$3 = cljs.core.next.call(null,seq11621__$2);
var G__11625 = cljs.core.first.call(null,seq11621__$3);
var seq11621__$4 = cljs.core.next.call(null,seq11621__$3);
return cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$variadic(G__11622,G__11623,G__11624,G__11625,seq11621__$4);
});

cljs.core$macros.aget.cljs$lang$maxFixedArity = (4);


cljs.core$macros.aget.cljs$lang$macro = true;
cljs.core$macros.aset = (function cljs$core$macros$aset(var_args){
var args11632 = [];
var len__7484__auto___11641 = arguments.length;
var i__7485__auto___11642 = (0);
while(true){
if((i__7485__auto___11642 < len__7484__auto___11641)){
args11632.push((arguments[i__7485__auto___11642]));

var G__11643 = (i__7485__auto___11642 + (1));
i__7485__auto___11642 = G__11643;
continue;
} else {
}
break;
}

var G__11640 = args11632.length;
switch (G__11640) {
case 5:
return cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
var argseq__7503__auto__ = (new cljs.core.IndexedSeq(args11632.slice((5)),(0),null));
return cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__7503__auto__);

}
});

cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$5 = (function (_AMPERSAND_form,_AMPERSAND_env,a,i,v){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__7243__auto__ = a;
return cljs.core._conj.call(null,(function (){var x__7243__auto____$1 = i;
return cljs.core._conj.call(null,(function (){var x__7243__auto____$2 = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto____$2);
})(),x__7243__auto____$1);
})(),x__7243__auto__);
})(),"(~{}[~{}] = ~{})"),cljs.core.cst$sym$js_STAR_);
});

cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,a,idx,idx2,idxv){
var n = (cljs.core.count.call(null,idxv) - (1));
var astr = cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,n,"[~{}]"));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$js_STAR_),(function (){var x__7243__auto__ = [cljs.core.str("(~{}[~{}][~{}]"),cljs.core.str(astr),cljs.core.str(" = ~{})")].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = a;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = idx2;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),idxv)));
});

cljs.core$macros.aset.cljs$lang$applyTo = (function (seq11633){
var G__11634 = cljs.core.first.call(null,seq11633);
var seq11633__$1 = cljs.core.next.call(null,seq11633);
var G__11635 = cljs.core.first.call(null,seq11633__$1);
var seq11633__$2 = cljs.core.next.call(null,seq11633__$1);
var G__11636 = cljs.core.first.call(null,seq11633__$2);
var seq11633__$3 = cljs.core.next.call(null,seq11633__$2);
var G__11637 = cljs.core.first.call(null,seq11633__$3);
var seq11633__$4 = cljs.core.next.call(null,seq11633__$3);
var G__11638 = cljs.core.first.call(null,seq11633__$4);
var seq11633__$5 = cljs.core.next.call(null,seq11633__$4);
return cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$variadic(G__11634,G__11635,G__11636,G__11637,G__11638,seq11633__$5);
});

cljs.core$macros.aset.cljs$lang$maxFixedArity = (5);


cljs.core$macros.aset.cljs$lang$macro = true;
cljs.core$macros._PLUS_ = (function cljs$core$macros$_PLUS_(var_args){
var args11645 = [];
var len__7484__auto___11653 = arguments.length;
var i__7485__auto___11654 = (0);
while(true){
if((i__7485__auto___11654 < len__7484__auto___11653)){
args11645.push((arguments[i__7485__auto___11654]));

var G__11655 = (i__7485__auto___11654 + (1));
i__7485__auto___11654 = G__11655;
continue;
} else {
}
break;
}

var G__11652 = args11645.length;
switch (G__11652) {
case 2:
return cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__7503__auto__ = (new cljs.core.IndexedSeq(args11645.slice((4)),(0),null));
return cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__7503__auto__);

}
});

cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return (0);
});

cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__7243__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__7243__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto____$1);
})(),x__7243__auto__);
})(),"(~{} + ~{})"),cljs.core.cst$sym$js_STAR_);
});

cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__PLUS_),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__PLUS_),(function (){var x__7243__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),more)));
});

cljs.core$macros._PLUS_.cljs$lang$applyTo = (function (seq11646){
var G__11647 = cljs.core.first.call(null,seq11646);
var seq11646__$1 = cljs.core.next.call(null,seq11646);
var G__11648 = cljs.core.first.call(null,seq11646__$1);
var seq11646__$2 = cljs.core.next.call(null,seq11646__$1);
var G__11649 = cljs.core.first.call(null,seq11646__$2);
var seq11646__$3 = cljs.core.next.call(null,seq11646__$2);
var G__11650 = cljs.core.first.call(null,seq11646__$3);
var seq11646__$4 = cljs.core.next.call(null,seq11646__$3);
return cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$variadic(G__11647,G__11648,G__11649,G__11650,seq11646__$4);
});

cljs.core$macros._PLUS_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._PLUS_.cljs$lang$macro = true;
cljs.core$macros.byte$ = (function cljs$core$macros$byte(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.byte$.cljs$lang$macro = true;
cljs.core$macros.short$ = (function cljs$core$macros$short(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.short$.cljs$lang$macro = true;
cljs.core$macros.float$ = (function cljs$core$macros$float(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.float$.cljs$lang$macro = true;
cljs.core$macros.double$ = (function cljs$core$macros$double(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.double$.cljs$lang$macro = true;
cljs.core$macros.unchecked_byte = (function cljs$core$macros$unchecked_byte(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.unchecked_byte.cljs$lang$macro = true;
cljs.core$macros.unchecked_char = (function cljs$core$macros$unchecked_char(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.unchecked_char.cljs$lang$macro = true;
cljs.core$macros.unchecked_short = (function cljs$core$macros$unchecked_short(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.unchecked_short.cljs$lang$macro = true;
cljs.core$macros.unchecked_float = (function cljs$core$macros$unchecked_float(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.unchecked_float.cljs$lang$macro = true;
cljs.core$macros.unchecked_double = (function cljs$core$macros$unchecked_double(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.unchecked_double.cljs$lang$macro = true;
cljs.core$macros.unchecked_add = (function cljs$core$macros$unchecked_add(var_args){
var args__7491__auto__ = [];
var len__7484__auto___11660 = arguments.length;
var i__7485__auto___11661 = (0);
while(true){
if((i__7485__auto___11661 < len__7484__auto___11660)){
args__7491__auto__.push((arguments[i__7485__auto___11661]));

var G__11662 = (i__7485__auto___11661 + (1));
i__7485__auto___11661 = G__11662;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((2) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_add.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7492__auto__);
});

cljs.core$macros.unchecked_add.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__PLUS_),xs)));
});

cljs.core$macros.unchecked_add.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_add.cljs$lang$applyTo = (function (seq11657){
var G__11658 = cljs.core.first.call(null,seq11657);
var seq11657__$1 = cljs.core.next.call(null,seq11657);
var G__11659 = cljs.core.first.call(null,seq11657__$1);
var seq11657__$2 = cljs.core.next.call(null,seq11657__$1);
return cljs.core$macros.unchecked_add.cljs$core$IFn$_invoke$arity$variadic(G__11658,G__11659,seq11657__$2);
});


cljs.core$macros.unchecked_add.cljs$lang$macro = true;
cljs.core$macros.unchecked_add_int = (function cljs$core$macros$unchecked_add_int(var_args){
var args__7491__auto__ = [];
var len__7484__auto___11666 = arguments.length;
var i__7485__auto___11667 = (0);
while(true){
if((i__7485__auto___11667 < len__7484__auto___11666)){
args__7491__auto__.push((arguments[i__7485__auto___11667]));

var G__11668 = (i__7485__auto___11667 + (1));
i__7485__auto___11667 = G__11668;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((2) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_add_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7492__auto__);
});

cljs.core$macros.unchecked_add_int.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__PLUS_),xs)));
});

cljs.core$macros.unchecked_add_int.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_add_int.cljs$lang$applyTo = (function (seq11663){
var G__11664 = cljs.core.first.call(null,seq11663);
var seq11663__$1 = cljs.core.next.call(null,seq11663);
var G__11665 = cljs.core.first.call(null,seq11663__$1);
var seq11663__$2 = cljs.core.next.call(null,seq11663__$1);
return cljs.core$macros.unchecked_add_int.cljs$core$IFn$_invoke$arity$variadic(G__11664,G__11665,seq11663__$2);
});


cljs.core$macros.unchecked_add_int.cljs$lang$macro = true;
cljs.core$macros.unchecked_dec = (function cljs$core$macros$unchecked_dec(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_dec),(function (){var x__7243__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
});

cljs.core$macros.unchecked_dec.cljs$lang$macro = true;
cljs.core$macros.unchecked_dec_int = (function cljs$core$macros$unchecked_dec_int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_dec),(function (){var x__7243__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
});

cljs.core$macros.unchecked_dec_int.cljs$lang$macro = true;
cljs.core$macros.unchecked_divide_int = (function cljs$core$macros$unchecked_divide_int(var_args){
var args__7491__auto__ = [];
var len__7484__auto___11672 = arguments.length;
var i__7485__auto___11673 = (0);
while(true){
if((i__7485__auto___11673 < len__7484__auto___11672)){
args__7491__auto__.push((arguments[i__7485__auto___11673]));

var G__11674 = (i__7485__auto___11673 + (1));
i__7485__auto___11673 = G__11674;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((2) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_divide_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7492__auto__);
});

cljs.core$macros.unchecked_divide_int.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__SLASH_),xs)));
});

cljs.core$macros.unchecked_divide_int.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_divide_int.cljs$lang$applyTo = (function (seq11669){
var G__11670 = cljs.core.first.call(null,seq11669);
var seq11669__$1 = cljs.core.next.call(null,seq11669);
var G__11671 = cljs.core.first.call(null,seq11669__$1);
var seq11669__$2 = cljs.core.next.call(null,seq11669__$1);
return cljs.core$macros.unchecked_divide_int.cljs$core$IFn$_invoke$arity$variadic(G__11670,G__11671,seq11669__$2);
});


cljs.core$macros.unchecked_divide_int.cljs$lang$macro = true;
cljs.core$macros.unchecked_inc = (function cljs$core$macros$unchecked_inc(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_inc),(function (){var x__7243__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
});

cljs.core$macros.unchecked_inc.cljs$lang$macro = true;
cljs.core$macros.unchecked_inc_int = (function cljs$core$macros$unchecked_inc_int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_inc),(function (){var x__7243__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
});

cljs.core$macros.unchecked_inc_int.cljs$lang$macro = true;
cljs.core$macros.unchecked_multiply = (function cljs$core$macros$unchecked_multiply(var_args){
var args__7491__auto__ = [];
var len__7484__auto___11678 = arguments.length;
var i__7485__auto___11679 = (0);
while(true){
if((i__7485__auto___11679 < len__7484__auto___11678)){
args__7491__auto__.push((arguments[i__7485__auto___11679]));

var G__11680 = (i__7485__auto___11679 + (1));
i__7485__auto___11679 = G__11680;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((2) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_multiply.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7492__auto__);
});

cljs.core$macros.unchecked_multiply.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__STAR_),xs)));
});

cljs.core$macros.unchecked_multiply.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_multiply.cljs$lang$applyTo = (function (seq11675){
var G__11676 = cljs.core.first.call(null,seq11675);
var seq11675__$1 = cljs.core.next.call(null,seq11675);
var G__11677 = cljs.core.first.call(null,seq11675__$1);
var seq11675__$2 = cljs.core.next.call(null,seq11675__$1);
return cljs.core$macros.unchecked_multiply.cljs$core$IFn$_invoke$arity$variadic(G__11676,G__11677,seq11675__$2);
});


cljs.core$macros.unchecked_multiply.cljs$lang$macro = true;
cljs.core$macros.unchecked_multiply_int = (function cljs$core$macros$unchecked_multiply_int(var_args){
var args__7491__auto__ = [];
var len__7484__auto___11684 = arguments.length;
var i__7485__auto___11685 = (0);
while(true){
if((i__7485__auto___11685 < len__7484__auto___11684)){
args__7491__auto__.push((arguments[i__7485__auto___11685]));

var G__11686 = (i__7485__auto___11685 + (1));
i__7485__auto___11685 = G__11686;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((2) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_multiply_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7492__auto__);
});

cljs.core$macros.unchecked_multiply_int.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__STAR_),xs)));
});

cljs.core$macros.unchecked_multiply_int.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_multiply_int.cljs$lang$applyTo = (function (seq11681){
var G__11682 = cljs.core.first.call(null,seq11681);
var seq11681__$1 = cljs.core.next.call(null,seq11681);
var G__11683 = cljs.core.first.call(null,seq11681__$1);
var seq11681__$2 = cljs.core.next.call(null,seq11681__$1);
return cljs.core$macros.unchecked_multiply_int.cljs$core$IFn$_invoke$arity$variadic(G__11682,G__11683,seq11681__$2);
});


cljs.core$macros.unchecked_multiply_int.cljs$lang$macro = true;
cljs.core$macros.unchecked_negate = (function cljs$core$macros$unchecked_negate(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__DASH_),(function (){var x__7243__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
});

cljs.core$macros.unchecked_negate.cljs$lang$macro = true;
cljs.core$macros.unchecked_negate_int = (function cljs$core$macros$unchecked_negate_int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__DASH_),(function (){var x__7243__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
});

cljs.core$macros.unchecked_negate_int.cljs$lang$macro = true;
cljs.core$macros.unchecked_remainder_int = (function cljs$core$macros$unchecked_remainder_int(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_mod),(function (){var x__7243__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
});

cljs.core$macros.unchecked_remainder_int.cljs$lang$macro = true;
cljs.core$macros.unchecked_subtract = (function cljs$core$macros$unchecked_subtract(var_args){
var args__7491__auto__ = [];
var len__7484__auto___11690 = arguments.length;
var i__7485__auto___11691 = (0);
while(true){
if((i__7485__auto___11691 < len__7484__auto___11690)){
args__7491__auto__.push((arguments[i__7485__auto___11691]));

var G__11692 = (i__7485__auto___11691 + (1));
i__7485__auto___11691 = G__11692;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((2) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_subtract.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7492__auto__);
});

cljs.core$macros.unchecked_subtract.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__DASH_),xs)));
});

cljs.core$macros.unchecked_subtract.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_subtract.cljs$lang$applyTo = (function (seq11687){
var G__11688 = cljs.core.first.call(null,seq11687);
var seq11687__$1 = cljs.core.next.call(null,seq11687);
var G__11689 = cljs.core.first.call(null,seq11687__$1);
var seq11687__$2 = cljs.core.next.call(null,seq11687__$1);
return cljs.core$macros.unchecked_subtract.cljs$core$IFn$_invoke$arity$variadic(G__11688,G__11689,seq11687__$2);
});


cljs.core$macros.unchecked_subtract.cljs$lang$macro = true;
cljs.core$macros.unchecked_subtract_int = (function cljs$core$macros$unchecked_subtract_int(var_args){
var args__7491__auto__ = [];
var len__7484__auto___11696 = arguments.length;
var i__7485__auto___11697 = (0);
while(true){
if((i__7485__auto___11697 < len__7484__auto___11696)){
args__7491__auto__.push((arguments[i__7485__auto___11697]));

var G__11698 = (i__7485__auto___11697 + (1));
i__7485__auto___11697 = G__11698;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((2) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_subtract_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7492__auto__);
});

cljs.core$macros.unchecked_subtract_int.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__DASH_),xs)));
});

cljs.core$macros.unchecked_subtract_int.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_subtract_int.cljs$lang$applyTo = (function (seq11693){
var G__11694 = cljs.core.first.call(null,seq11693);
var seq11693__$1 = cljs.core.next.call(null,seq11693);
var G__11695 = cljs.core.first.call(null,seq11693__$1);
var seq11693__$2 = cljs.core.next.call(null,seq11693__$1);
return cljs.core$macros.unchecked_subtract_int.cljs$core$IFn$_invoke$arity$variadic(G__11694,G__11695,seq11693__$2);
});


cljs.core$macros.unchecked_subtract_int.cljs$lang$macro = true;
cljs.core$macros._ = (function cljs$core$macros$_(var_args){
var args11699 = [];
var len__7484__auto___11707 = arguments.length;
var i__7485__auto___11708 = (0);
while(true){
if((i__7485__auto___11708 < len__7484__auto___11707)){
args11699.push((arguments[i__7485__auto___11708]));

var G__11709 = (i__7485__auto___11708 + (1));
i__7485__auto___11708 = G__11709;
continue;
} else {
}
break;
}

var G__11706 = args11699.length;
switch (G__11706) {
case 3:
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__7503__auto__ = (new cljs.core.IndexedSeq(args11699.slice((4)),(0),null));
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__7503__auto__);

}
});

cljs.core$macros._.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__7243__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),"(- ~{})"),cljs.core.cst$sym$js_STAR_);
});

cljs.core$macros._.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__7243__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__7243__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto____$1);
})(),x__7243__auto__);
})(),"(~{} - ~{})"),cljs.core.cst$sym$js_STAR_);
});

cljs.core$macros._.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__DASH_),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__DASH_),(function (){var x__7243__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),more)));
});

cljs.core$macros._.cljs$lang$applyTo = (function (seq11700){
var G__11701 = cljs.core.first.call(null,seq11700);
var seq11700__$1 = cljs.core.next.call(null,seq11700);
var G__11702 = cljs.core.first.call(null,seq11700__$1);
var seq11700__$2 = cljs.core.next.call(null,seq11700__$1);
var G__11703 = cljs.core.first.call(null,seq11700__$2);
var seq11700__$3 = cljs.core.next.call(null,seq11700__$2);
var G__11704 = cljs.core.first.call(null,seq11700__$3);
var seq11700__$4 = cljs.core.next.call(null,seq11700__$3);
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$variadic(G__11701,G__11702,G__11703,G__11704,seq11700__$4);
});

cljs.core$macros._.cljs$lang$maxFixedArity = (4);


cljs.core$macros._.cljs$lang$macro = true;
cljs.core$macros._STAR_ = (function cljs$core$macros$_STAR_(var_args){
var args11711 = [];
var len__7484__auto___11719 = arguments.length;
var i__7485__auto___11720 = (0);
while(true){
if((i__7485__auto___11720 < len__7484__auto___11719)){
args11711.push((arguments[i__7485__auto___11720]));

var G__11721 = (i__7485__auto___11720 + (1));
i__7485__auto___11720 = G__11721;
continue;
} else {
}
break;
}

var G__11718 = args11711.length;
switch (G__11718) {
case 2:
return cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__7503__auto__ = (new cljs.core.IndexedSeq(args11711.slice((4)),(0),null));
return cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__7503__auto__);

}
});

cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return (1);
});

cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__7243__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__7243__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto____$1);
})(),x__7243__auto__);
})(),"(~{} * ~{})"),cljs.core.cst$sym$js_STAR_);
});

cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__STAR_),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__STAR_),(function (){var x__7243__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),more)));
});

cljs.core$macros._STAR_.cljs$lang$applyTo = (function (seq11712){
var G__11713 = cljs.core.first.call(null,seq11712);
var seq11712__$1 = cljs.core.next.call(null,seq11712);
var G__11714 = cljs.core.first.call(null,seq11712__$1);
var seq11712__$2 = cljs.core.next.call(null,seq11712__$1);
var G__11715 = cljs.core.first.call(null,seq11712__$2);
var seq11712__$3 = cljs.core.next.call(null,seq11712__$2);
var G__11716 = cljs.core.first.call(null,seq11712__$3);
var seq11712__$4 = cljs.core.next.call(null,seq11712__$3);
return cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$variadic(G__11713,G__11714,G__11715,G__11716,seq11712__$4);
});

cljs.core$macros._STAR_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._STAR_.cljs$lang$macro = true;
cljs.core$macros._SLASH_ = (function cljs$core$macros$_SLASH_(var_args){
var args11723 = [];
var len__7484__auto___11731 = arguments.length;
var i__7485__auto___11732 = (0);
while(true){
if((i__7485__auto___11732 < len__7484__auto___11731)){
args11723.push((arguments[i__7485__auto___11732]));

var G__11733 = (i__7485__auto___11732 + (1));
i__7485__auto___11732 = G__11733;
continue;
} else {
}
break;
}

var G__11730 = args11723.length;
switch (G__11730) {
case 3:
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__7503__auto__ = (new cljs.core.IndexedSeq(args11723.slice((4)),(0),null));
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__7503__auto__);

}
});

cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__SLASH_),cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)),(function (){var x__7243__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
});

cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__7243__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__7243__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto____$1);
})(),x__7243__auto__);
})(),"(~{} / ~{})"),cljs.core.cst$sym$js_STAR_);
});

cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__SLASH_),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__SLASH_),(function (){var x__7243__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),more)));
});

cljs.core$macros._SLASH_.cljs$lang$applyTo = (function (seq11724){
var G__11725 = cljs.core.first.call(null,seq11724);
var seq11724__$1 = cljs.core.next.call(null,seq11724);
var G__11726 = cljs.core.first.call(null,seq11724__$1);
var seq11724__$2 = cljs.core.next.call(null,seq11724__$1);
var G__11727 = cljs.core.first.call(null,seq11724__$2);
var seq11724__$3 = cljs.core.next.call(null,seq11724__$2);
var G__11728 = cljs.core.first.call(null,seq11724__$3);
var seq11724__$4 = cljs.core.next.call(null,seq11724__$3);
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$variadic(G__11725,G__11726,G__11727,G__11728,seq11724__$4);
});

cljs.core$macros._SLASH_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._SLASH_.cljs$lang$macro = true;
cljs.core$macros.divide = (function cljs$core$macros$divide(var_args){
var args11735 = [];
var len__7484__auto___11743 = arguments.length;
var i__7485__auto___11744 = (0);
while(true){
if((i__7485__auto___11744 < len__7484__auto___11743)){
args11735.push((arguments[i__7485__auto___11744]));

var G__11745 = (i__7485__auto___11744 + (1));
i__7485__auto___11744 = G__11745;
continue;
} else {
}
break;
}

var G__11742 = args11735.length;
switch (G__11742) {
case 3:
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__7503__auto__ = (new cljs.core.IndexedSeq(args11735.slice((4)),(0),null));
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__7503__auto__);

}
});

cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__SLASH_),cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)),(function (){var x__7243__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
});

cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__7243__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__7243__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto____$1);
})(),x__7243__auto__);
})(),"(~{} / ~{})"),cljs.core.cst$sym$js_STAR_);
});

cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__SLASH_),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__SLASH_),(function (){var x__7243__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),more)));
});

cljs.core$macros.divide.cljs$lang$applyTo = (function (seq11736){
var G__11737 = cljs.core.first.call(null,seq11736);
var seq11736__$1 = cljs.core.next.call(null,seq11736);
var G__11738 = cljs.core.first.call(null,seq11736__$1);
var seq11736__$2 = cljs.core.next.call(null,seq11736__$1);
var G__11739 = cljs.core.first.call(null,seq11736__$2);
var seq11736__$3 = cljs.core.next.call(null,seq11736__$2);
var G__11740 = cljs.core.first.call(null,seq11736__$3);
var seq11736__$4 = cljs.core.next.call(null,seq11736__$3);
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$variadic(G__11737,G__11738,G__11739,G__11740,seq11736__$4);
});

cljs.core$macros.divide.cljs$lang$maxFixedArity = (4);


cljs.core$macros.divide.cljs$lang$macro = true;
cljs.core$macros._LT_ = (function cljs$core$macros$_LT_(var_args){
var args11747 = [];
var len__7484__auto___11755 = arguments.length;
var i__7485__auto___11756 = (0);
while(true){
if((i__7485__auto___11756 < len__7484__auto___11755)){
args11747.push((arguments[i__7485__auto___11756]));

var G__11757 = (i__7485__auto___11756 + (1));
i__7485__auto___11756 = G__11757;
continue;
} else {
}
break;
}

var G__11754 = args11747.length;
switch (G__11754) {
case 3:
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__7503__auto__ = (new cljs.core.IndexedSeq(args11747.slice((4)),(0),null));
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__7503__auto__);

}
});

cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__7243__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__7243__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto____$1);
})(),x__7243__auto__);
})(),"(~{} < ~{})"),cljs.core.cst$sym$js_STAR_));
});

cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_and),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__LT_),(function (){var x__7243__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__LT_),(function (){var x__7243__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),more)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
});

cljs.core$macros._LT_.cljs$lang$applyTo = (function (seq11748){
var G__11749 = cljs.core.first.call(null,seq11748);
var seq11748__$1 = cljs.core.next.call(null,seq11748);
var G__11750 = cljs.core.first.call(null,seq11748__$1);
var seq11748__$2 = cljs.core.next.call(null,seq11748__$1);
var G__11751 = cljs.core.first.call(null,seq11748__$2);
var seq11748__$3 = cljs.core.next.call(null,seq11748__$2);
var G__11752 = cljs.core.first.call(null,seq11748__$3);
var seq11748__$4 = cljs.core.next.call(null,seq11748__$3);
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$variadic(G__11749,G__11750,G__11751,G__11752,seq11748__$4);
});

cljs.core$macros._LT_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._LT_.cljs$lang$macro = true;
cljs.core$macros._LT__EQ_ = (function cljs$core$macros$_LT__EQ_(var_args){
var args11759 = [];
var len__7484__auto___11767 = arguments.length;
var i__7485__auto___11768 = (0);
while(true){
if((i__7485__auto___11768 < len__7484__auto___11767)){
args11759.push((arguments[i__7485__auto___11768]));

var G__11769 = (i__7485__auto___11768 + (1));
i__7485__auto___11768 = G__11769;
continue;
} else {
}
break;
}

var G__11766 = args11759.length;
switch (G__11766) {
case 3:
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__7503__auto__ = (new cljs.core.IndexedSeq(args11759.slice((4)),(0),null));
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__7503__auto__);

}
});

cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__7243__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__7243__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto____$1);
})(),x__7243__auto__);
})(),"(~{} <= ~{})"),cljs.core.cst$sym$js_STAR_));
});

cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_and),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__LT__EQ_),(function (){var x__7243__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__LT__EQ_),(function (){var x__7243__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),more)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
});

cljs.core$macros._LT__EQ_.cljs$lang$applyTo = (function (seq11760){
var G__11761 = cljs.core.first.call(null,seq11760);
var seq11760__$1 = cljs.core.next.call(null,seq11760);
var G__11762 = cljs.core.first.call(null,seq11760__$1);
var seq11760__$2 = cljs.core.next.call(null,seq11760__$1);
var G__11763 = cljs.core.first.call(null,seq11760__$2);
var seq11760__$3 = cljs.core.next.call(null,seq11760__$2);
var G__11764 = cljs.core.first.call(null,seq11760__$3);
var seq11760__$4 = cljs.core.next.call(null,seq11760__$3);
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__11761,G__11762,G__11763,G__11764,seq11760__$4);
});

cljs.core$macros._LT__EQ_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._LT__EQ_.cljs$lang$macro = true;
cljs.core$macros._GT_ = (function cljs$core$macros$_GT_(var_args){
var args11771 = [];
var len__7484__auto___11779 = arguments.length;
var i__7485__auto___11780 = (0);
while(true){
if((i__7485__auto___11780 < len__7484__auto___11779)){
args11771.push((arguments[i__7485__auto___11780]));

var G__11781 = (i__7485__auto___11780 + (1));
i__7485__auto___11780 = G__11781;
continue;
} else {
}
break;
}

var G__11778 = args11771.length;
switch (G__11778) {
case 3:
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__7503__auto__ = (new cljs.core.IndexedSeq(args11771.slice((4)),(0),null));
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__7503__auto__);

}
});

cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__7243__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__7243__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto____$1);
})(),x__7243__auto__);
})(),"(~{} > ~{})"),cljs.core.cst$sym$js_STAR_));
});

cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_and),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__GT_),(function (){var x__7243__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__GT_),(function (){var x__7243__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),more)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
});

cljs.core$macros._GT_.cljs$lang$applyTo = (function (seq11772){
var G__11773 = cljs.core.first.call(null,seq11772);
var seq11772__$1 = cljs.core.next.call(null,seq11772);
var G__11774 = cljs.core.first.call(null,seq11772__$1);
var seq11772__$2 = cljs.core.next.call(null,seq11772__$1);
var G__11775 = cljs.core.first.call(null,seq11772__$2);
var seq11772__$3 = cljs.core.next.call(null,seq11772__$2);
var G__11776 = cljs.core.first.call(null,seq11772__$3);
var seq11772__$4 = cljs.core.next.call(null,seq11772__$3);
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$variadic(G__11773,G__11774,G__11775,G__11776,seq11772__$4);
});

cljs.core$macros._GT_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._GT_.cljs$lang$macro = true;
cljs.core$macros._GT__EQ_ = (function cljs$core$macros$_GT__EQ_(var_args){
var args11783 = [];
var len__7484__auto___11791 = arguments.length;
var i__7485__auto___11792 = (0);
while(true){
if((i__7485__auto___11792 < len__7484__auto___11791)){
args11783.push((arguments[i__7485__auto___11792]));

var G__11793 = (i__7485__auto___11792 + (1));
i__7485__auto___11792 = G__11793;
continue;
} else {
}
break;
}

var G__11790 = args11783.length;
switch (G__11790) {
case 3:
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__7503__auto__ = (new cljs.core.IndexedSeq(args11783.slice((4)),(0),null));
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__7503__auto__);

}
});

cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__7243__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__7243__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto____$1);
})(),x__7243__auto__);
})(),"(~{} >= ~{})"),cljs.core.cst$sym$js_STAR_));
});

cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_and),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__GT__EQ_),(function (){var x__7243__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__GT__EQ_),(function (){var x__7243__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),more)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
});

cljs.core$macros._GT__EQ_.cljs$lang$applyTo = (function (seq11784){
var G__11785 = cljs.core.first.call(null,seq11784);
var seq11784__$1 = cljs.core.next.call(null,seq11784);
var G__11786 = cljs.core.first.call(null,seq11784__$1);
var seq11784__$2 = cljs.core.next.call(null,seq11784__$1);
var G__11787 = cljs.core.first.call(null,seq11784__$2);
var seq11784__$3 = cljs.core.next.call(null,seq11784__$2);
var G__11788 = cljs.core.first.call(null,seq11784__$3);
var seq11784__$4 = cljs.core.next.call(null,seq11784__$3);
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__11785,G__11786,G__11787,G__11788,seq11784__$4);
});

cljs.core$macros._GT__EQ_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._GT__EQ_.cljs$lang$macro = true;
cljs.core$macros._EQ__EQ_ = (function cljs$core$macros$_EQ__EQ_(var_args){
var args11795 = [];
var len__7484__auto___11803 = arguments.length;
var i__7485__auto___11804 = (0);
while(true){
if((i__7485__auto___11804 < len__7484__auto___11803)){
args11795.push((arguments[i__7485__auto___11804]));

var G__11805 = (i__7485__auto___11804 + (1));
i__7485__auto___11804 = G__11805;
continue;
} else {
}
break;
}

var G__11802 = args11795.length;
switch (G__11802) {
case 3:
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__7503__auto__ = (new cljs.core.IndexedSeq(args11795.slice((4)),(0),null));
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__7503__auto__);

}
});

cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__7243__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__7243__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto____$1);
})(),x__7243__auto__);
})(),"(~{} === ~{})"),cljs.core.cst$sym$js_STAR_));
});

cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_and),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__EQ__EQ_),(function (){var x__7243__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__EQ__EQ_),(function (){var x__7243__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),more)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
});

cljs.core$macros._EQ__EQ_.cljs$lang$applyTo = (function (seq11796){
var G__11797 = cljs.core.first.call(null,seq11796);
var seq11796__$1 = cljs.core.next.call(null,seq11796);
var G__11798 = cljs.core.first.call(null,seq11796__$1);
var seq11796__$2 = cljs.core.next.call(null,seq11796__$1);
var G__11799 = cljs.core.first.call(null,seq11796__$2);
var seq11796__$3 = cljs.core.next.call(null,seq11796__$2);
var G__11800 = cljs.core.first.call(null,seq11796__$3);
var seq11796__$4 = cljs.core.next.call(null,seq11796__$3);
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__11797,G__11798,G__11799,G__11800,seq11796__$4);
});

cljs.core$macros._EQ__EQ_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._EQ__EQ_.cljs$lang$macro = true;
cljs.core$macros.dec = (function cljs$core$macros$dec(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__DASH_),(function (){var x__7243__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)))));
});

cljs.core$macros.dec.cljs$lang$macro = true;
cljs.core$macros.inc = (function cljs$core$macros$inc(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__PLUS_),(function (){var x__7243__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)))));
});

cljs.core$macros.inc.cljs$lang$macro = true;
cljs.core$macros.zero_QMARK_ = (function cljs$core$macros$zero_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__EQ__EQ_),(function (){var x__7243__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)))));
});

cljs.core$macros.zero_QMARK_.cljs$lang$macro = true;
cljs.core$macros.pos_QMARK_ = (function cljs$core$macros$pos_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__GT_),(function (){var x__7243__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)))));
});

cljs.core$macros.pos_QMARK_.cljs$lang$macro = true;
cljs.core$macros.neg_QMARK_ = (function cljs$core$macros$neg_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__LT_),(function (){var x__7243__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)))));
});

cljs.core$macros.neg_QMARK_.cljs$lang$macro = true;
cljs.core$macros.max = (function cljs$core$macros$max(var_args){
var args11809 = [];
var len__7484__auto___11817 = arguments.length;
var i__7485__auto___11818 = (0);
while(true){
if((i__7485__auto___11818 < len__7484__auto___11817)){
args11809.push((arguments[i__7485__auto___11818]));

var G__11819 = (i__7485__auto___11818 + (1));
i__7485__auto___11818 = G__11819;
continue;
} else {
}
break;
}

var G__11816 = args11809.length;
switch (G__11816) {
case 3:
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__7503__auto__ = (new cljs.core.IndexedSeq(args11809.slice((4)),(0),null));
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__7503__auto__);

}
});

cljs.core$macros.max.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.max.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7243__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$x__11807__auto__),(function (){var x__7243__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$y__11808__auto__),(function (){var x__7243__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$js_STAR_),cljs.core._conj.call(null,cljs.core.List.EMPTY,"((~{} > ~{}) ? ~{} : ~{})"),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$x__11807__auto__),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$y__11808__auto__),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$x__11807__auto__),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$y__11808__auto__))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
});

cljs.core$macros.max.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_max),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_max),(function (){var x__7243__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),more)));
});

cljs.core$macros.max.cljs$lang$applyTo = (function (seq11810){
var G__11811 = cljs.core.first.call(null,seq11810);
var seq11810__$1 = cljs.core.next.call(null,seq11810);
var G__11812 = cljs.core.first.call(null,seq11810__$1);
var seq11810__$2 = cljs.core.next.call(null,seq11810__$1);
var G__11813 = cljs.core.first.call(null,seq11810__$2);
var seq11810__$3 = cljs.core.next.call(null,seq11810__$2);
var G__11814 = cljs.core.first.call(null,seq11810__$3);
var seq11810__$4 = cljs.core.next.call(null,seq11810__$3);
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$variadic(G__11811,G__11812,G__11813,G__11814,seq11810__$4);
});

cljs.core$macros.max.cljs$lang$maxFixedArity = (4);


cljs.core$macros.max.cljs$lang$macro = true;
cljs.core$macros.min = (function cljs$core$macros$min(var_args){
var args11823 = [];
var len__7484__auto___11831 = arguments.length;
var i__7485__auto___11832 = (0);
while(true){
if((i__7485__auto___11832 < len__7484__auto___11831)){
args11823.push((arguments[i__7485__auto___11832]));

var G__11833 = (i__7485__auto___11832 + (1));
i__7485__auto___11832 = G__11833;
continue;
} else {
}
break;
}

var G__11830 = args11823.length;
switch (G__11830) {
case 3:
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__7503__auto__ = (new cljs.core.IndexedSeq(args11823.slice((4)),(0),null));
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__7503__auto__);

}
});

cljs.core$macros.min.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.min.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7243__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$x__11821__auto__),(function (){var x__7243__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$y__11822__auto__),(function (){var x__7243__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$js_STAR_),cljs.core._conj.call(null,cljs.core.List.EMPTY,"((~{} < ~{}) ? ~{} : ~{})"),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$x__11821__auto__),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$y__11822__auto__),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$x__11821__auto__),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$y__11822__auto__))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
});

cljs.core$macros.min.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_min),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_min),(function (){var x__7243__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),more)));
});

cljs.core$macros.min.cljs$lang$applyTo = (function (seq11824){
var G__11825 = cljs.core.first.call(null,seq11824);
var seq11824__$1 = cljs.core.next.call(null,seq11824);
var G__11826 = cljs.core.first.call(null,seq11824__$1);
var seq11824__$2 = cljs.core.next.call(null,seq11824__$1);
var G__11827 = cljs.core.first.call(null,seq11824__$2);
var seq11824__$3 = cljs.core.next.call(null,seq11824__$2);
var G__11828 = cljs.core.first.call(null,seq11824__$3);
var seq11824__$4 = cljs.core.next.call(null,seq11824__$3);
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$variadic(G__11825,G__11826,G__11827,G__11828,seq11824__$4);
});

cljs.core$macros.min.cljs$lang$maxFixedArity = (4);


cljs.core$macros.min.cljs$lang$macro = true;
cljs.core$macros.js_mod = (function cljs$core$macros$js_mod(_AMPERSAND_form,_AMPERSAND_env,num,div){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__7243__auto__ = num;
return cljs.core._conj.call(null,(function (){var x__7243__auto____$1 = div;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto____$1);
})(),x__7243__auto__);
})(),"(~{} % ~{})"),cljs.core.cst$sym$js_STAR_);
});

cljs.core$macros.js_mod.cljs$lang$macro = true;
cljs.core$macros.bit_not = (function cljs$core$macros$bit_not(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__7243__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),"(~ ~{})"),cljs.core.cst$sym$js_STAR_);
});

cljs.core$macros.bit_not.cljs$lang$macro = true;
cljs.core$macros.bit_and = (function cljs$core$macros$bit_and(var_args){
var args11835 = [];
var len__7484__auto___11843 = arguments.length;
var i__7485__auto___11844 = (0);
while(true){
if((i__7485__auto___11844 < len__7484__auto___11843)){
args11835.push((arguments[i__7485__auto___11844]));

var G__11845 = (i__7485__auto___11844 + (1));
i__7485__auto___11844 = G__11845;
continue;
} else {
}
break;
}

var G__11842 = args11835.length;
switch (G__11842) {
case 4:
return cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__7503__auto__ = (new cljs.core.IndexedSeq(args11835.slice((4)),(0),null));
return cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__7503__auto__);

}
});

cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__7243__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__7243__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto____$1);
})(),x__7243__auto__);
})(),"(~{} & ~{})"),cljs.core.cst$sym$js_STAR_);
});

cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_bit_DASH_and),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_bit_DASH_and),(function (){var x__7243__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),more)));
});

cljs.core$macros.bit_and.cljs$lang$applyTo = (function (seq11836){
var G__11837 = cljs.core.first.call(null,seq11836);
var seq11836__$1 = cljs.core.next.call(null,seq11836);
var G__11838 = cljs.core.first.call(null,seq11836__$1);
var seq11836__$2 = cljs.core.next.call(null,seq11836__$1);
var G__11839 = cljs.core.first.call(null,seq11836__$2);
var seq11836__$3 = cljs.core.next.call(null,seq11836__$2);
var G__11840 = cljs.core.first.call(null,seq11836__$3);
var seq11836__$4 = cljs.core.next.call(null,seq11836__$3);
return cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$variadic(G__11837,G__11838,G__11839,G__11840,seq11836__$4);
});

cljs.core$macros.bit_and.cljs$lang$maxFixedArity = (4);


cljs.core$macros.bit_and.cljs$lang$macro = true;
cljs.core$macros.unsafe_bit_and = (function cljs$core$macros$unsafe_bit_and(var_args){
var args11847 = [];
var len__7484__auto___11855 = arguments.length;
var i__7485__auto___11856 = (0);
while(true){
if((i__7485__auto___11856 < len__7484__auto___11855)){
args11847.push((arguments[i__7485__auto___11856]));

var G__11857 = (i__7485__auto___11856 + (1));
i__7485__auto___11856 = G__11857;
continue;
} else {
}
break;
}

var G__11854 = args11847.length;
switch (G__11854) {
case 4:
return cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__7503__auto__ = (new cljs.core.IndexedSeq(args11847.slice((4)),(0),null));
return cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__7503__auto__);

}
});

cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__7243__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__7243__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto____$1);
})(),x__7243__auto__);
})(),"(~{} & ~{})"),cljs.core.cst$sym$js_STAR_));
});

cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_unsafe_DASH_bit_DASH_and),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_unsafe_DASH_bit_DASH_and),(function (){var x__7243__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),more)));
});

cljs.core$macros.unsafe_bit_and.cljs$lang$applyTo = (function (seq11848){
var G__11849 = cljs.core.first.call(null,seq11848);
var seq11848__$1 = cljs.core.next.call(null,seq11848);
var G__11850 = cljs.core.first.call(null,seq11848__$1);
var seq11848__$2 = cljs.core.next.call(null,seq11848__$1);
var G__11851 = cljs.core.first.call(null,seq11848__$2);
var seq11848__$3 = cljs.core.next.call(null,seq11848__$2);
var G__11852 = cljs.core.first.call(null,seq11848__$3);
var seq11848__$4 = cljs.core.next.call(null,seq11848__$3);
return cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$variadic(G__11849,G__11850,G__11851,G__11852,seq11848__$4);
});

cljs.core$macros.unsafe_bit_and.cljs$lang$maxFixedArity = (4);


cljs.core$macros.unsafe_bit_and.cljs$lang$macro = true;
cljs.core$macros.bit_or = (function cljs$core$macros$bit_or(var_args){
var args11859 = [];
var len__7484__auto___11867 = arguments.length;
var i__7485__auto___11868 = (0);
while(true){
if((i__7485__auto___11868 < len__7484__auto___11867)){
args11859.push((arguments[i__7485__auto___11868]));

var G__11869 = (i__7485__auto___11868 + (1));
i__7485__auto___11868 = G__11869;
continue;
} else {
}
break;
}

var G__11866 = args11859.length;
switch (G__11866) {
case 4:
return cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__7503__auto__ = (new cljs.core.IndexedSeq(args11859.slice((4)),(0),null));
return cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__7503__auto__);

}
});

cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__7243__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__7243__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto____$1);
})(),x__7243__auto__);
})(),"(~{} | ~{})"),cljs.core.cst$sym$js_STAR_);
});

cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_bit_DASH_or),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_bit_DASH_or),(function (){var x__7243__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),more)));
});

cljs.core$macros.bit_or.cljs$lang$applyTo = (function (seq11860){
var G__11861 = cljs.core.first.call(null,seq11860);
var seq11860__$1 = cljs.core.next.call(null,seq11860);
var G__11862 = cljs.core.first.call(null,seq11860__$1);
var seq11860__$2 = cljs.core.next.call(null,seq11860__$1);
var G__11863 = cljs.core.first.call(null,seq11860__$2);
var seq11860__$3 = cljs.core.next.call(null,seq11860__$2);
var G__11864 = cljs.core.first.call(null,seq11860__$3);
var seq11860__$4 = cljs.core.next.call(null,seq11860__$3);
return cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$variadic(G__11861,G__11862,G__11863,G__11864,seq11860__$4);
});

cljs.core$macros.bit_or.cljs$lang$maxFixedArity = (4);


cljs.core$macros.bit_or.cljs$lang$macro = true;
cljs.core$macros.int$ = (function cljs$core$macros$int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_bit_DASH_or),(function (){var x__7243__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)))));
});

cljs.core$macros.int$.cljs$lang$macro = true;
cljs.core$macros.bit_xor = (function cljs$core$macros$bit_xor(var_args){
var args11871 = [];
var len__7484__auto___11879 = arguments.length;
var i__7485__auto___11880 = (0);
while(true){
if((i__7485__auto___11880 < len__7484__auto___11879)){
args11871.push((arguments[i__7485__auto___11880]));

var G__11881 = (i__7485__auto___11880 + (1));
i__7485__auto___11880 = G__11881;
continue;
} else {
}
break;
}

var G__11878 = args11871.length;
switch (G__11878) {
case 4:
return cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__7503__auto__ = (new cljs.core.IndexedSeq(args11871.slice((4)),(0),null));
return cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__7503__auto__);

}
});

cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__7243__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__7243__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto____$1);
})(),x__7243__auto__);
})(),"(~{} ^ ~{})"),cljs.core.cst$sym$js_STAR_);
});

cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_bit_DASH_xor),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_bit_DASH_xor),(function (){var x__7243__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),more)));
});

cljs.core$macros.bit_xor.cljs$lang$applyTo = (function (seq11872){
var G__11873 = cljs.core.first.call(null,seq11872);
var seq11872__$1 = cljs.core.next.call(null,seq11872);
var G__11874 = cljs.core.first.call(null,seq11872__$1);
var seq11872__$2 = cljs.core.next.call(null,seq11872__$1);
var G__11875 = cljs.core.first.call(null,seq11872__$2);
var seq11872__$3 = cljs.core.next.call(null,seq11872__$2);
var G__11876 = cljs.core.first.call(null,seq11872__$3);
var seq11872__$4 = cljs.core.next.call(null,seq11872__$3);
return cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$variadic(G__11873,G__11874,G__11875,G__11876,seq11872__$4);
});

cljs.core$macros.bit_xor.cljs$lang$maxFixedArity = (4);


cljs.core$macros.bit_xor.cljs$lang$macro = true;
cljs.core$macros.bit_and_not = (function cljs$core$macros$bit_and_not(var_args){
var args11883 = [];
var len__7484__auto___11891 = arguments.length;
var i__7485__auto___11892 = (0);
while(true){
if((i__7485__auto___11892 < len__7484__auto___11891)){
args11883.push((arguments[i__7485__auto___11892]));

var G__11893 = (i__7485__auto___11892 + (1));
i__7485__auto___11892 = G__11893;
continue;
} else {
}
break;
}

var G__11890 = args11883.length;
switch (G__11890) {
case 4:
return cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__7503__auto__ = (new cljs.core.IndexedSeq(args11883.slice((4)),(0),null));
return cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__7503__auto__);

}
});

cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__7243__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__7243__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto____$1);
})(),x__7243__auto__);
})(),"(~{} & ~~{})"),cljs.core.cst$sym$js_STAR_);
});

cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_bit_DASH_and_DASH_not),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_bit_DASH_and_DASH_not),(function (){var x__7243__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),more)));
});

cljs.core$macros.bit_and_not.cljs$lang$applyTo = (function (seq11884){
var G__11885 = cljs.core.first.call(null,seq11884);
var seq11884__$1 = cljs.core.next.call(null,seq11884);
var G__11886 = cljs.core.first.call(null,seq11884__$1);
var seq11884__$2 = cljs.core.next.call(null,seq11884__$1);
var G__11887 = cljs.core.first.call(null,seq11884__$2);
var seq11884__$3 = cljs.core.next.call(null,seq11884__$2);
var G__11888 = cljs.core.first.call(null,seq11884__$3);
var seq11884__$4 = cljs.core.next.call(null,seq11884__$3);
return cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$variadic(G__11885,G__11886,G__11887,G__11888,seq11884__$4);
});

cljs.core$macros.bit_and_not.cljs$lang$maxFixedArity = (4);


cljs.core$macros.bit_and_not.cljs$lang$macro = true;
cljs.core$macros.bit_clear = (function cljs$core$macros$bit_clear(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__7243__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__7243__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto____$1);
})(),x__7243__auto__);
})(),"(~{} & ~(1 << ~{}))"),cljs.core.cst$sym$js_STAR_);
});

cljs.core$macros.bit_clear.cljs$lang$macro = true;
cljs.core$macros.bit_flip = (function cljs$core$macros$bit_flip(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__7243__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__7243__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto____$1);
})(),x__7243__auto__);
})(),"(~{} ^ (1 << ~{}))"),cljs.core.cst$sym$js_STAR_);
});

cljs.core$macros.bit_flip.cljs$lang$macro = true;
cljs.core$macros.bit_test = (function cljs$core$macros$bit_test(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__7243__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__7243__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto____$1);
})(),x__7243__auto__);
})(),"((~{} & (1 << ~{})) != 0)"),cljs.core.cst$sym$js_STAR_));
});

cljs.core$macros.bit_test.cljs$lang$macro = true;
cljs.core$macros.bit_shift_left = (function cljs$core$macros$bit_shift_left(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__7243__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__7243__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto____$1);
})(),x__7243__auto__);
})(),"(~{} << ~{})"),cljs.core.cst$sym$js_STAR_);
});

cljs.core$macros.bit_shift_left.cljs$lang$macro = true;
cljs.core$macros.bit_shift_right = (function cljs$core$macros$bit_shift_right(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__7243__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__7243__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto____$1);
})(),x__7243__auto__);
})(),"(~{} >> ~{})"),cljs.core.cst$sym$js_STAR_);
});

cljs.core$macros.bit_shift_right.cljs$lang$macro = true;
cljs.core$macros.bit_shift_right_zero_fill = (function cljs$core$macros$bit_shift_right_zero_fill(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__7243__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__7243__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto____$1);
})(),x__7243__auto__);
})(),"(~{} >>> ~{})"),cljs.core.cst$sym$js_STAR_);
});

cljs.core$macros.bit_shift_right_zero_fill.cljs$lang$macro = true;
cljs.core$macros.unsigned_bit_shift_right = (function cljs$core$macros$unsigned_bit_shift_right(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__7243__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__7243__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto____$1);
})(),x__7243__auto__);
})(),"(~{} >>> ~{})"),cljs.core.cst$sym$js_STAR_);
});

cljs.core$macros.unsigned_bit_shift_right.cljs$lang$macro = true;
cljs.core$macros.bit_set = (function cljs$core$macros$bit_set(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__7243__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__7243__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto____$1);
})(),x__7243__auto__);
})(),"(~{} | (1 << ~{}))"),cljs.core.cst$sym$js_STAR_);
});

cljs.core$macros.bit_set.cljs$lang$macro = true;
cljs.core$macros.mask = (function cljs$core$macros$mask(_AMPERSAND_form,_AMPERSAND_env,hash,shift){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__7243__auto__ = hash;
return cljs.core._conj.call(null,(function (){var x__7243__auto____$1 = shift;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto____$1);
})(),x__7243__auto__);
})(),"((~{} >>> ~{}) & 0x01f)"),cljs.core.cst$sym$js_STAR_);
});

cljs.core$macros.mask.cljs$lang$macro = true;
cljs.core$macros.bitpos = (function cljs$core$macros$bitpos(_AMPERSAND_form,_AMPERSAND_env,hash,shift){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_mask),(function (){var x__7243__auto__ = hash;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = shift;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),"(1 << ~{})"),cljs.core.cst$sym$js_STAR_);
});

cljs.core$macros.bitpos.cljs$lang$macro = true;
cljs.core$macros.caching_hash = (function cljs$core$macros$caching_hash(_AMPERSAND_form,_AMPERSAND_env,coll,hash_fn,hash_key){
if((hash_key instanceof cljs.core.Symbol)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("hash-key is substituted twice"),cljs.core.str("\n"),cljs.core.str("(clojure.core/symbol? hash-key)")].join('')));
}

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7243__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$h__11895__auto__),(function (){var x__7243__auto__ = hash_key;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_if_DASH_not),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_nil_QMARK_),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$h__11895__auto__))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$h__11895__auto__),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7243__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$h__11895__auto__),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7243__auto__ = hash_fn;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = coll;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),(function (){var x__7243__auto__ = hash_key;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$h__11895__auto__))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$h__11895__auto__))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
});

cljs.core$macros.caching_hash.cljs$lang$macro = true;
cljs.core$macros.do_curried = (function cljs$core$macros$do_curried(name,doc,meta,args,body){
var cargs = cljs.core.vec.call(null,cljs.core.butlast.call(null,args));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_defn),(function (){var x__7243__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = doc;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = meta;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7243__auto__ = cargs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),(function (){var x__7243__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$x__11896__auto__)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7243__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),cargs,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$x__11896__auto__))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7243__auto__ = args;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
});
/**
 * Builds another arity of the fn that returns a fn awaiting the last
 *   param
 */
cljs.core$macros.defcurried = (function cljs$core$macros$defcurried(var_args){
var args__7491__auto__ = [];
var len__7484__auto___11904 = arguments.length;
var i__7485__auto___11905 = (0);
while(true){
if((i__7485__auto___11905 < len__7484__auto___11904)){
args__7491__auto__.push((arguments[i__7485__auto___11905]));

var G__11906 = (i__7485__auto___11905 + (1));
i__7485__auto___11905 = G__11906;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((6) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((6)),(0),null)):null);
return cljs.core$macros.defcurried.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),argseq__7492__auto__);
});

cljs.core$macros.defcurried.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,doc,meta,args,body){
return cljs.core$macros.do_curried.call(null,name,doc,meta,args,body);
});

cljs.core$macros.defcurried.cljs$lang$maxFixedArity = (6);

cljs.core$macros.defcurried.cljs$lang$applyTo = (function (seq11897){
var G__11898 = cljs.core.first.call(null,seq11897);
var seq11897__$1 = cljs.core.next.call(null,seq11897);
var G__11899 = cljs.core.first.call(null,seq11897__$1);
var seq11897__$2 = cljs.core.next.call(null,seq11897__$1);
var G__11900 = cljs.core.first.call(null,seq11897__$2);
var seq11897__$3 = cljs.core.next.call(null,seq11897__$2);
var G__11901 = cljs.core.first.call(null,seq11897__$3);
var seq11897__$4 = cljs.core.next.call(null,seq11897__$3);
var G__11902 = cljs.core.first.call(null,seq11897__$4);
var seq11897__$5 = cljs.core.next.call(null,seq11897__$4);
var G__11903 = cljs.core.first.call(null,seq11897__$5);
var seq11897__$6 = cljs.core.next.call(null,seq11897__$5);
return cljs.core$macros.defcurried.cljs$core$IFn$_invoke$arity$variadic(G__11898,G__11899,G__11900,G__11901,G__11902,G__11903,seq11897__$6);
});


cljs.core$macros.defcurried.cljs$lang$macro = true;
cljs.core$macros.do_rfn = (function cljs$core$macros$do_rfn(f1,k,fkv){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7243__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7243__auto__ = f1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = clojure.walk.postwalk.call(null,(function (p1__11907_SHARP_){
if(cljs.core.sequential_QMARK_.call(null,p1__11907_SHARP_)){
return ((cljs.core.vector_QMARK_.call(null,p1__11907_SHARP_))?cljs.core.vec:cljs.core.identity).call(null,cljs.core.remove.call(null,cljs.core.PersistentHashSet.fromArray([k], true),p1__11907_SHARP_));
} else {
return p1__11907_SHARP_;
}
}),fkv);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = fkv;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
});
/**
 * Builds 3-arity reducing fn given names of wrapped fn and key, and k/v impl.
 */
cljs.core$macros.rfn = (function cljs$core$macros$rfn(_AMPERSAND_form,_AMPERSAND_env,p__11908,fkv){
var vec__11912 = p__11908;
var f1 = cljs.core.nth.call(null,vec__11912,(0),null);
var k = cljs.core.nth.call(null,vec__11912,(1),null);
return cljs.core$macros.do_rfn.call(null,f1,k,fkv);
});

cljs.core$macros.rfn.cljs$lang$macro = true;
cljs.core$macros.protocol_prefix = (function cljs$core$macros$protocol_prefix(psym){
return [cljs.core.str([cljs.core.str(psym)].join('').replace((new RegExp("\\.","g")),"$").replace("/","$")),cljs.core.str("$")].join('');
});
cljs.core$macros.base_type = new cljs.core.PersistentArrayMap(null, 8, [null,"null",cljs.core.cst$sym$object,"object",cljs.core.cst$sym$string,"string",cljs.core.cst$sym$number,"number",cljs.core.cst$sym$array,"array",cljs.core.cst$sym$function,"function",cljs.core.cst$sym$boolean,"boolean",cljs.core.cst$sym$default,"_"], null);
cljs.core$macros.js_base_type = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$sym$js_SLASH_Boolean,"boolean",cljs.core.cst$sym$js_SLASH_String,"string",cljs.core.cst$sym$js_SLASH_Array,"array",cljs.core.cst$sym$js_SLASH_Object,"object",cljs.core.cst$sym$js_SLASH_Number,"number",cljs.core.cst$sym$js_SLASH_Function,"function"], null);
/**
 * reify is a macro with the following structure:
 * 
 *  (reify options* specs*)
 * 
 *   Currently there are no options.
 * 
 *   Each spec consists of the protocol name followed by zero
 *   or more method bodies:
 * 
 *   protocol
 *   (methodName [args+] body)*
 * 
 *   Methods should be supplied for all methods of the desired
 *   protocol(s). You can also define overrides for Object methods. Note that
 *   the first parameter must be supplied to correspond to the target object
 *   ('this' in JavaScript parlance). Note also that recur calls
 *   to the method head should *not* pass the target object, it will be supplied
 *   automatically and can not be substituted.
 * 
 *   recur works to method heads The method bodies of reify are lexical
 *   closures, and can refer to the surrounding local scope:
 * 
 *   (str (let [f "foo"]
 *     (reify Object
 *       (toString [this] f))))
 *   == "foo"
 * 
 *   (seq (let [f "foo"]
 *     (reify ISeqable
 *       (-seq [this] (-seq f)))))
 *   == (\f \o \o))
 * 
 *   reify always implements IMeta and IWithMeta and transfers meta
 *   data of the form to the created object.
 * 
 *   (meta ^{:k :v} (reify Object (toString [this] "foo")))
 *   == {:k :v}
 */
cljs.core$macros.reify = (function cljs$core$macros$reify(var_args){
var args__7491__auto__ = [];
var len__7484__auto___11918 = arguments.length;
var i__7485__auto___11919 = (0);
while(true){
if((i__7485__auto___11919 < len__7484__auto___11918)){
args__7491__auto__.push((arguments[i__7485__auto___11919]));

var G__11920 = (i__7485__auto___11919 + (1));
i__7485__auto___11919 = G__11920;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((2) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.reify.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7492__auto__);
});

cljs.core$macros.reify.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,impls){
var t = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,[cljs.core.str("t_"),cljs.core.str(clojure.string.replace.call(null,[cljs.core.str(cljs.core.munge.call(null,cljs.analyzer._STAR_cljs_ns_STAR_))].join(''),".","$"))].join('')),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$anonymous,true], null));
var meta_sym = cljs.core.gensym.call(null,"meta");
var this_sym = cljs.core.gensym.call(null,"_");
var locals = cljs.core.keys.call(null,cljs.core.cst$kw$locals.cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
var ns = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
var munge = cljs.compiler.munge;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$do),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_when_DASH_not),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_exists_QMARK_),(function (){var x__7243__auto__ = cljs.core.symbol.call(null,[cljs.core.str(ns)].join(''),[cljs.core.str(t)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_deftype),(function (){var x__7243__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,locals,(function (){var x__7243__auto__ = meta_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_IWithMeta),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$_DASH_with_DASH_meta),(function (){var x__7243__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7243__auto__ = this_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = meta_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$new),(function (){var x__7243__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),locals,(function (){var x__7243__auto__ = meta_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_IMeta),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$_DASH_meta),(function (){var x__7243__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7243__auto__ = this_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = meta_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),impls)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$new),(function (){var x__7243__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),locals,(function (){var x__7243__auto__ = cljs.analyzer.elide_reader_meta.call(null,cljs.core.meta.call(null,_AMPERSAND_form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
});

cljs.core$macros.reify.cljs$lang$maxFixedArity = (2);

cljs.core$macros.reify.cljs$lang$applyTo = (function (seq11915){
var G__11916 = cljs.core.first.call(null,seq11915);
var seq11915__$1 = cljs.core.next.call(null,seq11915);
var G__11917 = cljs.core.first.call(null,seq11915__$1);
var seq11915__$2 = cljs.core.next.call(null,seq11915__$1);
return cljs.core$macros.reify.cljs$core$IFn$_invoke$arity$variadic(G__11916,G__11917,seq11915__$2);
});


cljs.core$macros.reify.cljs$lang$macro = true;
/**
 * Identical to reify but mutates its first argument.
 */
cljs.core$macros.specify_BANG_ = (function cljs$core$macros$specify_BANG_(var_args){
var args__7491__auto__ = [];
var len__7484__auto___11925 = arguments.length;
var i__7485__auto___11926 = (0);
while(true){
if((i__7485__auto___11926 < len__7484__auto___11925)){
args__7491__auto__.push((arguments[i__7485__auto___11926]));

var G__11927 = (i__7485__auto___11926 + (1));
i__7485__auto___11926 = G__11927;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((3) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.specify_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7492__auto__);
});

cljs.core$macros.specify_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,impls){
var x = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"x"),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$extend,cljs.core.cst$kw$instance], null));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7243__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7243__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_extend_DASH_type),(function (){var x__7243__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),impls)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
});

cljs.core$macros.specify_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.specify_BANG_.cljs$lang$applyTo = (function (seq11921){
var G__11922 = cljs.core.first.call(null,seq11921);
var seq11921__$1 = cljs.core.next.call(null,seq11921);
var G__11923 = cljs.core.first.call(null,seq11921__$1);
var seq11921__$2 = cljs.core.next.call(null,seq11921__$1);
var G__11924 = cljs.core.first.call(null,seq11921__$2);
var seq11921__$3 = cljs.core.next.call(null,seq11921__$2);
return cljs.core$macros.specify_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__11922,G__11923,G__11924,seq11921__$3);
});


cljs.core$macros.specify_BANG_.cljs$lang$macro = true;
/**
 * Identical to specify! but does not mutate its first argument. The first
 *   argument must be an ICloneable instance.
 */
cljs.core$macros.specify = (function cljs$core$macros$specify(var_args){
var args__7491__auto__ = [];
var len__7484__auto___11932 = arguments.length;
var i__7485__auto___11933 = (0);
while(true){
if((i__7485__auto___11933 < len__7484__auto___11932)){
args__7491__auto__.push((arguments[i__7485__auto___11933]));

var G__11934 = (i__7485__auto___11933 + (1));
i__7485__auto___11933 = G__11934;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((3) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.specify.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7492__auto__);
});

cljs.core$macros.specify.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,impls){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_specify_BANG_),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_clone),(function (){var x__7243__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),impls)));
});

cljs.core$macros.specify.cljs$lang$maxFixedArity = (3);

cljs.core$macros.specify.cljs$lang$applyTo = (function (seq11928){
var G__11929 = cljs.core.first.call(null,seq11928);
var seq11928__$1 = cljs.core.next.call(null,seq11928);
var G__11930 = cljs.core.first.call(null,seq11928__$1);
var seq11928__$2 = cljs.core.next.call(null,seq11928__$1);
var G__11931 = cljs.core.first.call(null,seq11928__$2);
var seq11928__$3 = cljs.core.next.call(null,seq11928__$2);
return cljs.core$macros.specify.cljs$core$IFn$_invoke$arity$variadic(G__11929,G__11930,G__11931,seq11928__$3);
});


cljs.core$macros.specify.cljs$lang$macro = true;
cljs.core$macros.js_this = (function cljs$core$macros$js_this(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"this"),cljs.core.cst$sym$js_STAR_);
});

cljs.core$macros.js_this.cljs$lang$macro = true;
/**
 * Defines a scope where JavaScript's implicit "this" is bound to the name provided.
 */
cljs.core$macros.this_as = (function cljs$core$macros$this_as(var_args){
var args__7491__auto__ = [];
var len__7484__auto___11939 = arguments.length;
var i__7485__auto___11940 = (0);
while(true){
if((i__7485__auto___11940 < len__7484__auto___11939)){
args__7491__auto__.push((arguments[i__7485__auto___11940]));

var G__11941 = (i__7485__auto___11940 + (1));
i__7485__auto___11940 = G__11941;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((3) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.this_as.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7492__auto__);
});

cljs.core$macros.this_as.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7243__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7243__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_js_DASH_this))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),body)));
});

cljs.core$macros.this_as.cljs$lang$maxFixedArity = (3);

cljs.core$macros.this_as.cljs$lang$applyTo = (function (seq11935){
var G__11936 = cljs.core.first.call(null,seq11935);
var seq11935__$1 = cljs.core.next.call(null,seq11935);
var G__11937 = cljs.core.first.call(null,seq11935__$1);
var seq11935__$2 = cljs.core.next.call(null,seq11935__$1);
var G__11938 = cljs.core.first.call(null,seq11935__$2);
var seq11935__$3 = cljs.core.next.call(null,seq11935__$2);
return cljs.core$macros.this_as.cljs$core$IFn$_invoke$arity$variadic(G__11936,G__11937,G__11938,seq11935__$3);
});


cljs.core$macros.this_as.cljs$lang$macro = true;
cljs.core$macros.to_property = (function cljs$core$macros$to_property(sym){
return cljs.core.symbol.call(null,[cljs.core.str("-"),cljs.core.str(sym)].join(''));
});
cljs.core$macros.warn_and_update_protocol = (function cljs$core$macros$warn_and_update_protocol(p,type,env){
if(cljs.core._EQ_.call(null,cljs.core.cst$sym$Object,p)){
return null;
} else {
var temp__4655__auto__ = cljs.analyzer.resolve_existing_var.call(null,cljs.core.dissoc.call(null,env,cljs.core.cst$kw$locals),p);
if(cljs.core.truth_(temp__4655__auto__)){
var var$ = temp__4655__auto__;
if(cljs.core.truth_(cljs.core.cst$kw$protocol_DASH_symbol.cljs$core$IFn$_invoke$arity$1(var$))){
} else {
cljs.analyzer.warning.call(null,cljs.core.cst$kw$invalid_DASH_protocol_DASH_symbol,env,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$protocol,p], null));
}

if(cljs.core.truth_((function (){var and__6397__auto__ = cljs.core.cst$kw$protocol_DASH_deprecated.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_warnings_STAR_);
if(cljs.core.truth_(and__6397__auto__)){
var and__6397__auto____$1 = cljs.core.cst$kw$deprecated.cljs$core$IFn$_invoke$arity$1(var$);
if(cljs.core.truth_(and__6397__auto____$1)){
return cljs.core.not.call(null,cljs.core.cst$kw$deprecation_DASH_nowarn.cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,p)));
} else {
return and__6397__auto____$1;
}
} else {
return and__6397__auto__;
}
})())){
cljs.analyzer.warning.call(null,cljs.core.cst$kw$protocol_DASH_deprecated,env,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$protocol,p], null));
} else {
}

if(cljs.core.truth_(cljs.core.cst$kw$protocol_DASH_symbol.cljs$core$IFn$_invoke$arity$1(var$))){
return cljs.core.swap_BANG_.call(null,cljs.env._STAR_compiler_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces], null),((function (var$,temp__4655__auto__){
return (function (ns){
return cljs.core.update_in.call(null,ns,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(var$),cljs.core.cst$kw$defs,cljs.core.symbol.call(null,cljs.core.name.call(null,p)),cljs.core.cst$kw$impls], null),cljs.core.conj,type);
});})(var$,temp__4655__auto__))
);
} else {
return null;
}
} else {
if(cljs.core.truth_(cljs.core.cst$kw$undeclared.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_warnings_STAR_))){
return cljs.analyzer.warning.call(null,cljs.core.cst$kw$undeclared_DASH_protocol_DASH_symbol,env,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$protocol,p], null));
} else {
return null;
}
}
}
});
cljs.core$macros.resolve_var = (function cljs$core$macros$resolve_var(env,sym){
var ret = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,env,cljs.core.cst$kw$locals),sym));
if(cljs.core.truth_(ret)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Can't resolve: "),cljs.core.str(sym)].join('')),cljs.core.str("\n"),cljs.core.str("ret")].join('')));
}

return ret;
});
cljs.core$macros.__GT_impl_map = (function cljs$core$macros$__GT_impl_map(impls){
var ret = cljs.core.PersistentArrayMap.EMPTY;
var s = impls;
while(true){
if(cljs.core.seq.call(null,s)){
var G__11942 = cljs.core.assoc.call(null,ret,cljs.core.first.call(null,s),cljs.core.take_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,s)));
var G__11943 = cljs.core.drop_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,s));
ret = G__11942;
s = G__11943;
continue;
} else {
return ret;
}
break;
}
});
cljs.core$macros.base_assign_impls = (function cljs$core$macros$base_assign_impls(env,resolve,tsym,type,p__11944){
var vec__11952 = p__11944;
var p = cljs.core.nth.call(null,vec__11952,(0),null);
var sigs = cljs.core.nth.call(null,vec__11952,(1),null);
cljs.core$macros.warn_and_update_protocol.call(null,p,tsym,env);

var psym = resolve.call(null,p);
var pfn_prefix = cljs.core.subs.call(null,[cljs.core.str(psym)].join(''),(0),([cljs.core.str(psym)].join('').indexOf("/") + (1)));
return cljs.core.cons.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_aset),(function (){var x__7243__auto__ = psym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = type;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true)))),cljs.core.map.call(null,((function (psym,pfn_prefix,vec__11952,p,sigs){
return (function (p__11955){
var vec__11956 = p__11955;
var seq__11957 = cljs.core.seq.call(null,vec__11956);
var first__11958 = cljs.core.first.call(null,seq__11957);
var seq__11957__$1 = cljs.core.next.call(null,seq__11957);
var f = first__11958;
var meths = seq__11957__$1;
var form = vec__11956;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_aset),(function (){var x__7243__auto__ = cljs.core.symbol.call(null,[cljs.core.str(pfn_prefix),cljs.core.str(f)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = type;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),meths))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
});})(psym,pfn_prefix,vec__11952,p,sigs))
,sigs));
});
if(typeof cljs.core$macros.extend_prefix !== 'undefined'){
} else {
cljs.core$macros.extend_prefix = (function (){var method_table__7334__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__7335__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__7336__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__7337__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__7338__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.core$macros","extend-prefix"),((function (method_table__7334__auto__,prefer_table__7335__auto__,method_cache__7336__auto__,cached_hierarchy__7337__auto__,hierarchy__7338__auto__){
return (function (tsym,sym){
return cljs.core.cst$kw$extend.cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,tsym));
});})(method_table__7334__auto__,prefer_table__7335__auto__,method_cache__7336__auto__,cached_hierarchy__7337__auto__,hierarchy__7338__auto__))
,cljs.core.cst$kw$default,hierarchy__7338__auto__,method_table__7334__auto__,prefer_table__7335__auto__,method_cache__7336__auto__,cached_hierarchy__7337__auto__));
})();
}
cljs.core._add_method.call(null,cljs.core$macros.extend_prefix,cljs.core.cst$kw$instance,(function (tsym,sym){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$$$),(function (){var x__7243__auto__ = tsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core$macros.to_property.call(null,sym);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
}));
cljs.core._add_method.call(null,cljs.core$macros.extend_prefix,cljs.core.cst$kw$default,(function (tsym,sym){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$$$),(function (){var x__7243__auto__ = tsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$_DASH_prototype),(function (){var x__7243__auto__ = cljs.core$macros.to_property.call(null,sym);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
}));
cljs.core$macros.adapt_obj_params = (function cljs$core$macros$adapt_obj_params(type,p__11959){
var vec__11966 = p__11959;
var seq__11967 = cljs.core.seq.call(null,vec__11966);
var first__11968 = cljs.core.first.call(null,seq__11967);
var seq__11967__$1 = cljs.core.next.call(null,seq__11967);
var vec__11969 = first__11968;
var seq__11970 = cljs.core.seq.call(null,vec__11969);
var first__11971 = cljs.core.first.call(null,seq__11970);
var seq__11970__$1 = cljs.core.next.call(null,seq__11970);
var this$ = first__11971;
var args = seq__11970__$1;
var sig = vec__11969;
var body = seq__11967__$1;
var x__7243__auto__ = cljs.core.vec.call(null,args);
return cljs.core._conj.call(null,(function (){var x__7243__auto____$1 = cljs.core.list_STAR_.call(null,cljs.core.cst$sym$this_DASH_as,cljs.core.vary_meta.call(null,this$,cljs.core.assoc,cljs.core.cst$kw$tag,type),body);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto____$1);
})(),x__7243__auto__);
});
cljs.core$macros.adapt_ifn_params = (function cljs$core$macros$adapt_ifn_params(type,p__11972){
var vec__11979 = p__11972;
var seq__11980 = cljs.core.seq.call(null,vec__11979);
var first__11981 = cljs.core.first.call(null,seq__11980);
var seq__11980__$1 = cljs.core.next.call(null,seq__11980);
var vec__11982 = first__11981;
var seq__11983 = cljs.core.seq.call(null,vec__11982);
var first__11984 = cljs.core.first.call(null,seq__11983);
var seq__11983__$1 = cljs.core.next.call(null,seq__11983);
var this$ = first__11984;
var args = seq__11983__$1;
var sig = vec__11982;
var body = seq__11980__$1;
var self_sym = cljs.core.with_meta.call(null,cljs.core.cst$sym$self__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,type], null));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7243__auto__ = cljs.core.vec.call(null,cljs.core.cons.call(null,self_sym,args));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_this_DASH_as),(function (){var x__7243__auto__ = self_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7243__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7243__auto__ = this$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = self_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
});
cljs.core$macros.adapt_ifn_invoke_params = (function cljs$core$macros$adapt_ifn_invoke_params(type,p__11985){
var vec__11992 = p__11985;
var seq__11993 = cljs.core.seq.call(null,vec__11992);
var first__11994 = cljs.core.first.call(null,seq__11993);
var seq__11993__$1 = cljs.core.next.call(null,seq__11993);
var vec__11995 = first__11994;
var seq__11996 = cljs.core.seq.call(null,vec__11995);
var first__11997 = cljs.core.first.call(null,seq__11996);
var seq__11996__$1 = cljs.core.next.call(null,seq__11996);
var this$ = first__11997;
var args = seq__11996__$1;
var sig = vec__11995;
var body = seq__11993__$1;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7243__auto__ = cljs.core.vec.call(null,args);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_this_DASH_as),(function (){var x__7243__auto__ = cljs.core.vary_meta.call(null,this$,cljs.core.assoc,cljs.core.cst$kw$tag,type);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
});
cljs.core$macros.adapt_proto_params = (function cljs$core$macros$adapt_proto_params(type,p__11998){
var vec__12005 = p__11998;
var seq__12006 = cljs.core.seq.call(null,vec__12005);
var first__12007 = cljs.core.first.call(null,seq__12006);
var seq__12006__$1 = cljs.core.next.call(null,seq__12006);
var vec__12008 = first__12007;
var seq__12009 = cljs.core.seq.call(null,vec__12008);
var first__12010 = cljs.core.first.call(null,seq__12009);
var seq__12009__$1 = cljs.core.next.call(null,seq__12009);
var this$ = first__12010;
var args = seq__12009__$1;
var sig = vec__12008;
var body = seq__12006__$1;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7243__auto__ = cljs.core.vec.call(null,cljs.core.cons.call(null,cljs.core.vary_meta.call(null,this$,cljs.core.assoc,cljs.core.cst$kw$tag,type),args));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_this_DASH_as),(function (){var x__7243__auto__ = this$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
});
cljs.core$macros.add_obj_methods = (function cljs$core$macros$add_obj_methods(type,type_sym,sigs){
return cljs.core.map.call(null,(function (p__12019){
var vec__12020 = p__12019;
var seq__12021 = cljs.core.seq.call(null,vec__12020);
var first__12022 = cljs.core.first.call(null,seq__12021);
var seq__12021__$1 = cljs.core.next.call(null,seq__12021);
var f = first__12022;
var meths = seq__12021__$1;
var form = vec__12020;
var vec__12023 = ((cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,meths)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rest.call(null,form)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,meths], null));
var f__$1 = cljs.core.nth.call(null,vec__12023,(0),null);
var meths__$1 = cljs.core.nth.call(null,vec__12023,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),(function (){var x__7243__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,f__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),cljs.core.map.call(null,((function (vec__12023,f__$1,meths__$1,vec__12020,seq__12021,first__12022,seq__12021__$1,f,meths,form){
return (function (p1__12011_SHARP_){
return cljs.core$macros.adapt_obj_params.call(null,type,p1__12011_SHARP_);
});})(vec__12023,f__$1,meths__$1,vec__12020,seq__12021,first__12022,seq__12021__$1,f,meths,form))
,meths__$1)))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
}),sigs);
});
cljs.core$macros.ifn_invoke_methods = (function cljs$core$macros$ifn_invoke_methods(type,type_sym,p__12027){
var vec__12031 = p__12027;
var seq__12032 = cljs.core.seq.call(null,vec__12031);
var first__12033 = cljs.core.first.call(null,seq__12032);
var seq__12032__$1 = cljs.core.next.call(null,seq__12032);
var f = first__12033;
var meths = seq__12032__$1;
var form = vec__12031;
return cljs.core.map.call(null,((function (vec__12031,seq__12032,first__12033,seq__12032__$1,f,meths,form){
return (function (meth){
var arity = cljs.core.count.call(null,cljs.core.first.call(null,meth));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),(function (){var x__7243__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,cljs.core.symbol.call(null,[cljs.core.str("cljs$core$IFn$_invoke$arity$"),cljs.core.str(arity)].join('')));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),(function (){var x__7243__auto__ = meth;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})()))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
});})(vec__12031,seq__12032,first__12033,seq__12032__$1,f,meths,form))
,cljs.core.map.call(null,((function (vec__12031,seq__12032,first__12033,seq__12032__$1,f,meths,form){
return (function (p1__12026_SHARP_){
return cljs.core$macros.adapt_ifn_invoke_params.call(null,type,p1__12026_SHARP_);
});})(vec__12031,seq__12032,first__12033,seq__12032__$1,f,meths,form))
,meths));
});
cljs.core$macros.add_ifn_methods = (function cljs$core$macros$add_ifn_methods(type,type_sym,p__12035){
var vec__12039 = p__12035;
var seq__12040 = cljs.core.seq.call(null,vec__12039);
var first__12041 = cljs.core.first.call(null,seq__12040);
var seq__12040__$1 = cljs.core.next.call(null,seq__12040);
var f = first__12041;
var meths = seq__12040__$1;
var form = vec__12039;
var meths__$1 = cljs.core.map.call(null,((function (vec__12039,seq__12040,first__12041,seq__12040__$1,f,meths,form){
return (function (p1__12034_SHARP_){
return cljs.core$macros.adapt_ifn_params.call(null,type,p1__12034_SHARP_);
});})(vec__12039,seq__12040,first__12041,seq__12040__$1,f,meths,form))
,meths);
var this_sym = cljs.core.with_meta.call(null,cljs.core.cst$sym$self__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,type], null));
var argsym = cljs.core.gensym.call(null,"args");
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),(function (){var x__7243__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,cljs.core.cst$sym$call);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),meths__$1))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})()))),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),(function (){var x__7243__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,cljs.core.cst$sym$apply);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),(function (){var x__7243__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this_sym,argsym], null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_this_DASH_as),(function (){var x__7243__auto__ = this_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$$apply),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$$_DASH_call),(function (){var x__7243__auto__ = this_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = this_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$$concat),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_array),(function (){var x__7243__auto__ = this_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_aclone),(function (){var x__7243__auto__ = argsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})()))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())))], null),cljs.core$macros.ifn_invoke_methods.call(null,type,type_sym,form));
});
cljs.core$macros.add_proto_methods_STAR_ = (function cljs$core$macros$add_proto_methods_STAR_(pprefix,type,type_sym,p__12042){
var vec__12050 = p__12042;
var seq__12051 = cljs.core.seq.call(null,vec__12050);
var first__12052 = cljs.core.first.call(null,seq__12051);
var seq__12051__$1 = cljs.core.next.call(null,seq__12051);
var f = first__12052;
var meths = seq__12051__$1;
var form = vec__12050;
var pf = [cljs.core.str(pprefix),cljs.core.str(cljs.core.name.call(null,f))].join('');
if(cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,meths))){
var meth = meths;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),(function (){var x__7243__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,[cljs.core.str(pf),cljs.core.str("$arity$"),cljs.core.str(cljs.core.count.call(null,cljs.core.first.call(null,meth)))].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),cljs.core$macros.adapt_proto_params.call(null,type,meth)))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())))], null);
} else {
return cljs.core.map.call(null,((function (pf,vec__12050,seq__12051,first__12052,seq__12051__$1,f,meths,form){
return (function (p__12053){
var vec__12054 = p__12053;
var seq__12055 = cljs.core.seq.call(null,vec__12054);
var first__12056 = cljs.core.first.call(null,seq__12055);
var seq__12055__$1 = cljs.core.next.call(null,seq__12055);
var sig = first__12056;
var body = seq__12055__$1;
var meth = vec__12054;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),(function (){var x__7243__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,[cljs.core.str(pf),cljs.core.str("$arity$"),cljs.core.str(cljs.core.count.call(null,sig))].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),(function (){var x__7243__auto__ = cljs.core$macros.adapt_proto_params.call(null,type,meth);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})()))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
});})(pf,vec__12050,seq__12051,first__12052,seq__12051__$1,f,meths,form))
,meths);
}
});
cljs.core$macros.proto_assign_impls = (function cljs$core$macros$proto_assign_impls(env,resolve,type_sym,type,p__12057){
var vec__12061 = p__12057;
var p = cljs.core.nth.call(null,vec__12061,(0),null);
var sigs = cljs.core.nth.call(null,vec__12061,(1),null);
cljs.core$macros.warn_and_update_protocol.call(null,p,type,env);

var psym = resolve.call(null,p);
var pprefix = cljs.core$macros.protocol_prefix.call(null,psym);
var skip_flag = cljs.core.set.call(null,cljs.core.cst$kw$skip_DASH_protocol_DASH_flag.cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,type_sym)));
if(cljs.core._EQ_.call(null,p,cljs.core.cst$sym$Object)){
return cljs.core$macros.add_obj_methods.call(null,type,type_sym,sigs);
} else {
return cljs.core.concat.call(null,(cljs.core.truth_(skip_flag.call(null,psym))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),(function (){var x__7243__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,pprefix);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))))], null)),cljs.core.mapcat.call(null,((function (psym,pprefix,skip_flag,vec__12061,p,sigs){
return (function (sig){
if(cljs.core._EQ_.call(null,psym,cljs.core.cst$sym$cljs$core_SLASH_IFn)){
return cljs.core$macros.add_ifn_methods.call(null,type,type_sym,sig);
} else {
return cljs.core$macros.add_proto_methods_STAR_.call(null,pprefix,type,type_sym,sig);
}
});})(psym,pprefix,skip_flag,vec__12061,p,sigs))
,sigs));
}
});
cljs.core$macros.validate_impl_sigs = (function cljs$core$macros$validate_impl_sigs(env,p,method){
if(cljs.core._EQ_.call(null,p,cljs.core.cst$sym$Object)){
return null;
} else {
var var$ = cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,env,cljs.core.cst$kw$locals),p);
var minfo = cljs.core.cst$kw$methods.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$protocol_DASH_info.cljs$core$IFn$_invoke$arity$1(var$));
var method_name = cljs.core.first.call(null,method);
var __GT_name = cljs.core.comp.call(null,cljs.core.symbol,cljs.core.name);
var vec__12067 = ((cljs.core.vector_QMARK_.call(null,cljs.core.second.call(null,method)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [__GT_name.call(null,method_name),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second.call(null,method)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [__GT_name.call(null,method_name),cljs.core.map.call(null,cljs.core.first,cljs.core.rest.call(null,method))], null));
var fname = cljs.core.nth.call(null,vec__12067,(0),null);
var sigs = cljs.core.nth.call(null,vec__12067,(1),null);
var decmeths = cljs.core.get.call(null,minfo,fname,cljs.core.cst$kw$cljs$core$macros_SLASH_not_DASH_found);
if(cljs.core._EQ_.call(null,decmeths,cljs.core.cst$kw$cljs$core$macros_SLASH_not_DASH_found)){
cljs.analyzer.warning.call(null,cljs.core.cst$kw$protocol_DASH_invalid_DASH_method,env,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$protocol,p,cljs.core.cst$kw$fname,fname,cljs.core.cst$kw$no_DASH_such_DASH_method,true], null));
} else {
}

if(cljs.core.truth_(cljs.core.namespace.call(null,method_name))){
var method_var_12070 = cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,env,cljs.core.cst$kw$locals),method_name,cljs.analyzer.confirm_var_exist_warning);
if(cljs.core._EQ_.call(null,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(var$),cljs.core.cst$kw$protocol.cljs$core$IFn$_invoke$arity$1(method_var_12070))){
} else {
cljs.analyzer.warning.call(null,cljs.core.cst$kw$protocol_DASH_invalid_DASH_method,env,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$protocol,p,cljs.core.cst$kw$fname,method_name,cljs.core.cst$kw$no_DASH_such_DASH_method,true], null));
}
} else {
}

var sigs__$1 = sigs;
var seen = cljs.core.PersistentHashSet.EMPTY;
while(true){
if(cljs.core.seq.call(null,sigs__$1)){
var sig = cljs.core.first.call(null,sigs__$1);
var c = cljs.core.count.call(null,sig);
if(cljs.core.contains_QMARK_.call(null,seen,c)){
cljs.analyzer.warning.call(null,cljs.core.cst$kw$protocol_DASH_duped_DASH_method,env,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$protocol,p,cljs.core.cst$kw$fname,fname], null));
} else {
}

if((cljs.core.not_EQ_.call(null,decmeths,cljs.core.cst$kw$cljs$core$macros_SLASH_not_DASH_found)) && (cljs.core.not.call(null,cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([c], true),cljs.core.map.call(null,cljs.core.count,decmeths))))){
cljs.analyzer.warning.call(null,cljs.core.cst$kw$protocol_DASH_invalid_DASH_method,env,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$protocol,p,cljs.core.cst$kw$fname,fname,cljs.core.cst$kw$invalid_DASH_arity,c], null));
} else {
}

var G__12071 = cljs.core.next.call(null,sigs__$1);
var G__12072 = cljs.core.conj.call(null,seen,c);
sigs__$1 = G__12071;
seen = G__12072;
continue;
} else {
return null;
}
break;
}
}
});
cljs.core$macros.validate_impls = (function cljs$core$macros$validate_impls(env,impls){
var protos = cljs.core.PersistentHashSet.EMPTY;
var impls__$1 = impls;
while(true){
if(cljs.core.seq.call(null,impls__$1)){
var proto = cljs.core.first.call(null,impls__$1);
var methods$ = cljs.core.take_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,impls__$1));
var impls__$2 = cljs.core.drop_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,impls__$1));
if(cljs.core.contains_QMARK_.call(null,protos,proto)){
cljs.analyzer.warning.call(null,cljs.core.cst$kw$protocol_DASH_multiple_DASH_impls,env,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$protocol,proto], null));
} else {
}

var seen_12079 = cljs.core.PersistentHashSet.EMPTY;
var methods_12080__$1 = methods$;
while(true){
if(cljs.core.seq.call(null,methods_12080__$1)){
var vec__12076_12081 = cljs.core.first.call(null,methods_12080__$1);
var fname_12082 = cljs.core.nth.call(null,vec__12076_12081,(0),null);
var method_12083 = vec__12076_12081;
if(cljs.core.contains_QMARK_.call(null,seen_12079,fname_12082)){
cljs.analyzer.warning.call(null,cljs.core.cst$kw$extend_DASH_type_DASH_invalid_DASH_method_DASH_shape,env,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$protocol,proto,cljs.core.cst$kw$method,fname_12082], null));
} else {
}

cljs.core$macros.validate_impl_sigs.call(null,env,proto,method_12083);

var G__12084 = cljs.core.conj.call(null,seen_12079,fname_12082);
var G__12085 = cljs.core.next.call(null,methods_12080__$1);
seen_12079 = G__12084;
methods_12080__$1 = G__12085;
continue;
} else {
}
break;
}

var G__12086 = cljs.core.conj.call(null,protos,proto);
var G__12087 = impls__$2;
protos = G__12086;
impls__$1 = G__12087;
continue;
} else {
return null;
}
break;
}
});
cljs.core$macros.type_hint_first_arg = (function cljs$core$macros$type_hint_first_arg(type_sym,argv){
return cljs.core.assoc.call(null,argv,(0),cljs.core.vary_meta.call(null,argv.call(null,(0)),cljs.core.assoc,cljs.core.cst$kw$tag,type_sym));
});
cljs.core$macros.type_hint_single_arity_sig = (function cljs$core$macros$type_hint_single_arity_sig(type_sym,sig){
return cljs.core.list_STAR_.call(null,cljs.core.first.call(null,sig),cljs.core$macros.type_hint_first_arg.call(null,type_sym,cljs.core.second.call(null,sig)),cljs.core.nnext.call(null,sig));
});
cljs.core$macros.type_hint_multi_arity_sig = (function cljs$core$macros$type_hint_multi_arity_sig(type_sym,sig){
return cljs.core.list_STAR_.call(null,cljs.core$macros.type_hint_first_arg.call(null,type_sym,cljs.core.first.call(null,sig)),cljs.core.next.call(null,sig));
});
cljs.core$macros.type_hint_multi_arity_sigs = (function cljs$core$macros$type_hint_multi_arity_sigs(type_sym,sigs){
return cljs.core.list_STAR_.call(null,cljs.core.first.call(null,sigs),cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core$macros.type_hint_multi_arity_sig,type_sym),cljs.core.rest.call(null,sigs)));
});
cljs.core$macros.type_hint_sigs = (function cljs$core$macros$type_hint_sigs(type_sym,sig){
if(cljs.core.vector_QMARK_.call(null,cljs.core.second.call(null,sig))){
return cljs.core$macros.type_hint_single_arity_sig.call(null,type_sym,sig);
} else {
return cljs.core$macros.type_hint_multi_arity_sigs.call(null,type_sym,sig);
}
});
cljs.core$macros.type_hint_impl_map = (function cljs$core$macros$type_hint_impl_map(type_sym,impl_map){
return cljs.core.reduce_kv.call(null,(function (m,proto,sigs){
return cljs.core.assoc.call(null,m,proto,cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core$macros.type_hint_sigs,type_sym),sigs));
}),cljs.core.PersistentArrayMap.EMPTY,impl_map);
});
/**
 * Extend a type to a series of protocols. Useful when you are
 *   supplying the definitions explicitly inline. Propagates the
 *   type as a type hint on the first argument of all fns.
 * 
 *   type-sym may be
 * 
 * * default, meaning the definitions will apply for any value,
 *   unless an extend-type exists for one of the more specific
 *   cases below.
 * * nil, meaning the definitions will apply for the nil value.
 * * any of object, boolean, number, string, array, or function,
 *   indicating the definitions will apply for values of the
 *   associated base JavaScript types. Note that, for example,
 *   string should be used instead of js/String.
 * * a JavaScript type not covered by the previous list, such
 *   as js/RegExp.
 * * a type defined by deftype or defrecord.
 * 
 *   (extend-type MyType
 *  ICounted
 *  (-count [c] ...)
 *  Foo
 *  (bar [x y] ...)
 *  (baz ([x] ...) ([x y & zs] ...))
 */
cljs.core$macros.extend_type = (function cljs$core$macros$extend_type(var_args){
var args__7491__auto__ = [];
var len__7484__auto___12096 = arguments.length;
var i__7485__auto___12097 = (0);
while(true){
if((i__7485__auto___12097 < len__7484__auto___12096)){
args__7491__auto__.push((arguments[i__7485__auto___12097]));

var G__12098 = (i__7485__auto___12097 + (1));
i__7485__auto___12097 = G__12098;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((3) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.extend_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7492__auto__);
});

cljs.core$macros.extend_type.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,type_sym,impls){
var env = _AMPERSAND_env;
var _ = cljs.core$macros.validate_impls.call(null,env,impls);
var resolve = cljs.core.partial.call(null,cljs.core$macros.resolve_var,env);
var impl_map = cljs.core$macros.__GT_impl_map.call(null,impls);
var impl_map__$1 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$sym$boolean,null,cljs.core.cst$sym$number,null], null), null).call(null,type_sym))?cljs.core$macros.type_hint_impl_map.call(null,type_sym,impl_map):impl_map);
var vec__12093 = (function (){var temp__4655__auto__ = cljs.core$macros.base_type.call(null,type_sym);
if(cljs.core.truth_(temp__4655__auto__)){
var type = temp__4655__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core$macros.base_assign_impls], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [resolve.call(null,type_sym),cljs.core$macros.proto_assign_impls], null);
}
})();
var type = cljs.core.nth.call(null,vec__12093,(0),null);
var assign_impls = cljs.core.nth.call(null,vec__12093,(1),null);
if(cljs.core.truth_((function (){var and__6397__auto__ = cljs.core.cst$kw$extending_DASH_base_DASH_js_DASH_type.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_warnings_STAR_);
if(cljs.core.truth_(and__6397__auto__)){
return cljs.core$macros.js_base_type.call(null,type_sym);
} else {
return and__6397__auto__;
}
})())){
cljs.analyzer.warning.call(null,cljs.core.cst$kw$extending_DASH_base_DASH_js_DASH_type,env,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$current_DASH_symbol,type_sym,cljs.core.cst$kw$suggested_DASH_symbol,cljs.core$macros.js_base_type.call(null,type_sym)], null));
} else {
}

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$do),cljs.core.mapcat.call(null,((function (env,_,resolve,impl_map,impl_map__$1,vec__12093,type,assign_impls){
return (function (p1__12088_SHARP_){
return assign_impls.call(null,env,resolve,type_sym,type,p1__12088_SHARP_);
});})(env,_,resolve,impl_map,impl_map__$1,vec__12093,type,assign_impls))
,impl_map__$1))));
});

cljs.core$macros.extend_type.cljs$lang$maxFixedArity = (3);

cljs.core$macros.extend_type.cljs$lang$applyTo = (function (seq12089){
var G__12090 = cljs.core.first.call(null,seq12089);
var seq12089__$1 = cljs.core.next.call(null,seq12089);
var G__12091 = cljs.core.first.call(null,seq12089__$1);
var seq12089__$2 = cljs.core.next.call(null,seq12089__$1);
var G__12092 = cljs.core.first.call(null,seq12089__$2);
var seq12089__$3 = cljs.core.next.call(null,seq12089__$2);
return cljs.core$macros.extend_type.cljs$core$IFn$_invoke$arity$variadic(G__12090,G__12091,G__12092,seq12089__$3);
});


cljs.core$macros.extend_type.cljs$lang$macro = true;
cljs.core$macros.prepare_protocol_masks = (function cljs$core$macros$prepare_protocol_masks(env,impls){
var resolve = cljs.core.partial.call(null,cljs.core$macros.resolve_var,env);
var impl_map = cljs.core$macros.__GT_impl_map.call(null,impls);
var fpp_pbs = cljs.core.seq.call(null,cljs.core.keep.call(null,cljs.core$macros.fast_path_protocols,cljs.core.map.call(null,resolve,cljs.core.keys.call(null,impl_map))));
if(fpp_pbs){
var fpps = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,cljs.core.partial.call(null,cljs.core.contains_QMARK_,cljs.core$macros.fast_path_protocols),cljs.core.map.call(null,resolve,cljs.core.keys.call(null,impl_map))));
var parts = (function (){var parts = cljs.core.group_by.call(null,cljs.core.first,fpp_pbs);
var parts__$1 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.juxt.call(null,cljs.core.key,cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,cljs.core.peek),cljs.core.val)),parts));
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.juxt.call(null,cljs.core.key,cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.reduce,cljs.core.bit_or),cljs.core.val)),parts__$1));
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fpps,cljs.core.reduce.call(null,((function (fpps,parts,resolve,impl_map,fpp_pbs){
return (function (ps,p){
return cljs.core.update_in.call(null,ps,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p], null),cljs.core.fnil.call(null,cljs.core.identity,(0)));
});})(fpps,parts,resolve,impl_map,fpp_pbs))
,parts,cljs.core.range.call(null,cljs.core$macros.fast_path_protocol_partitions_count))], null);
} else {
return null;
}
});
cljs.core$macros.annotate_specs = (function cljs$core$macros$annotate_specs(annots,v,p__12100){
var vec__12104 = p__12100;
var f = cljs.core.nth.call(null,vec__12104,(0),null);
var sigs = cljs.core.nth.call(null,vec__12104,(1),null);
return cljs.core.conj.call(null,v,cljs.core.vary_meta.call(null,cljs.core.cons.call(null,f,cljs.core.map.call(null,((function (vec__12104,f,sigs){
return (function (p1__12099_SHARP_){
return cljs.core.cons.call(null,cljs.core.second.call(null,p1__12099_SHARP_),cljs.core.nnext.call(null,p1__12099_SHARP_));
});})(vec__12104,f,sigs))
,sigs)),cljs.core.merge,annots));
});
cljs.core$macros.dt__GT_et = (function cljs$core$macros$dt__GT_et(var_args){
var args12107 = [];
var len__7484__auto___12110 = arguments.length;
var i__7485__auto___12111 = (0);
while(true){
if((i__7485__auto___12111 < len__7484__auto___12110)){
args12107.push((arguments[i__7485__auto___12111]));

var G__12112 = (i__7485__auto___12111 + (1));
i__7485__auto___12111 = G__12112;
continue;
} else {
}
break;
}

var G__12109 = args12107.length;
switch (G__12109) {
case 3:
return cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12107.length)].join('')));

}
});

cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$3 = (function (type,specs,fields){
return cljs.core$macros.dt__GT_et.call(null,type,specs,fields,false);
});

cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$4 = (function (type,specs,fields,inline){
var annots = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$cljs$analyzer_SLASH_type,type,cljs.core.cst$kw$cljs$analyzer_SLASH_protocol_DASH_impl,true,cljs.core.cst$kw$cljs$analyzer_SLASH_protocol_DASH_inline,inline], null);
var ret = cljs.core.PersistentVector.EMPTY;
var specs__$1 = specs;
while(true){
if(cljs.core.seq.call(null,specs__$1)){
var p = cljs.core.first.call(null,specs__$1);
var ret__$1 = cljs.core.into.call(null,cljs.core.conj.call(null,ret,p),cljs.core.reduce.call(null,cljs.core.partial.call(null,cljs.core$macros.annotate_specs,annots),cljs.core.PersistentVector.EMPTY,cljs.core.group_by.call(null,cljs.core.first,cljs.core.take_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,specs__$1)))));
var specs__$2 = cljs.core.drop_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,specs__$1));
var G__12114 = ret__$1;
var G__12115 = specs__$2;
ret = G__12114;
specs__$1 = G__12115;
continue;
} else {
return ret;
}
break;
}
});

cljs.core$macros.dt__GT_et.cljs$lang$maxFixedArity = 4;

cljs.core$macros.collect_protocols = (function cljs$core$macros$collect_protocols(impls,env){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,(function (p1__12116_SHARP_){
return cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,env,cljs.core.cst$kw$locals),p1__12116_SHARP_));
}),cljs.core.filter.call(null,cljs.core.symbol_QMARK_,impls)));
});
cljs.core$macros.build_positional_factory = (function cljs$core$macros$build_positional_factory(rsym,rname,fields){
var fn_name = cljs.core.with_meta.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.cst$sym$_DASH__GT_),cljs.core.str(rsym)].join('')),cljs.core.assoc.call(null,cljs.core.meta.call(null,rsym),cljs.core.cst$kw$factory,cljs.core.cst$kw$positional));
var field_values = (cljs.core.truth_(cljs.core.cst$kw$internal_DASH_ctor.cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,rsym)))?cljs.core.conj.call(null,fields,null,null,null):fields);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_defn),(function (){var x__7243__auto__ = fn_name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,fields))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$new),(function (){var x__7243__auto__ = rname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),field_values)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
});
cljs.core$macros.validate_fields = (function cljs$core$macros$validate_fields(case$,name,fields){
if(cljs.core.vector_QMARK_.call(null,fields)){
return null;
} else {
throw (new Error([cljs.core.str(case$),cljs.core.str(" "),cljs.core.str(name),cljs.core.str(", no fields vector given.")].join('')));
}
});
/**
 * (deftype name [fields*]  options* specs*)
 * 
 *   Currently there are no options.
 * 
 *   Each spec consists of a protocol or interface name followed by zero
 *   or more method bodies:
 * 
 *   protocol-or-Object
 *   (methodName [args*] body)*
 * 
 *   The type will have the (by default, immutable) fields named by
 *   fields, which can have type hints. Protocols and methods
 *   are optional. The only methods that can be supplied are those
 *   declared in the protocols/interfaces.  Note that method bodies are
 *   not closures, the local environment includes only the named fields,
 *   and those fields can be accessed directly. Fields can be qualified
 *   with the metadata :mutable true at which point (set! afield aval) will be
 *   supported in method bodies. Note well that mutable fields are extremely
 *   difficult to use correctly, and are present only to facilitate the building
 *   of higherlevel constructs, such as ClojureScript's reference types, in
 *   ClojureScript itself. They are for experts only - if the semantics and
 *   implications of :mutable are not immediately apparent to you, you should not
 *   be using them.
 * 
 *   Method definitions take the form:
 * 
 *   (methodname [args*] body)
 * 
 *   The argument and return types can be hinted on the arg and
 *   methodname symbols. If not supplied, they will be inferred, so type
 *   hints should be reserved for disambiguation.
 * 
 *   Methods should be supplied for all methods of the desired
 *   protocol(s). You can also define overrides for methods of Object. Note that
 *   a parameter must be supplied to correspond to the target object
 *   ('this' in JavaScript parlance). Note also that recur calls to the method
 *   head should *not* pass the target object, it will be supplied
 *   automatically and can not be substituted.
 * 
 *   In the method bodies, the (unqualified) name can be used to name the
 *   class (for calls to new, instance? etc).
 * 
 *   One constructor will be defined, taking the designated fields.  Note
 *   that the field names __meta and __extmap are currently reserved and
 *   should not be used when defining your own types.
 * 
 *   Given (deftype TypeName ...), a factory function called ->TypeName
 *   will be defined, taking positional parameters for the fields
 */
cljs.core$macros.deftype = (function cljs$core$macros$deftype(var_args){
var args__7491__auto__ = [];
var len__7484__auto___12128 = arguments.length;
var i__7485__auto___12129 = (0);
while(true){
if((i__7485__auto___12129 < len__7484__auto___12128)){
args__7491__auto__.push((arguments[i__7485__auto___12129]));

var G__12130 = (i__7485__auto___12129 + (1));
i__7485__auto___12129 = G__12130;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((4) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.deftype.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__7492__auto__);
});

cljs.core$macros.deftype.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,t,fields,impls){
cljs.core$macros.validate_fields.call(null,"deftype",t,fields);

var env = _AMPERSAND_env;
var r = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,env,cljs.core.cst$kw$locals),t));
var vec__12125 = cljs.core$macros.prepare_protocol_masks.call(null,env,impls);
var fpps = cljs.core.nth.call(null,vec__12125,(0),null);
var pmasks = cljs.core.nth.call(null,vec__12125,(1),null);
var protocols = cljs.core$macros.collect_protocols.call(null,impls,env);
var t__$1 = cljs.core.vary_meta.call(null,t,cljs.core.assoc,cljs.core.cst$kw$protocols,protocols,cljs.core.cst$kw$skip_DASH_protocol_DASH_flag,fpps);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$do),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$deftype_STAR_),(function (){var x__7243__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = fields;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = pmasks;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = ((cljs.core.seq.call(null,impls))?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_extend_DASH_type),(function (){var x__7243__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),cljs.core$macros.dt__GT_et.call(null,t__$1,impls,fields)))):null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$$_DASH_getBasis),(function (){var x__7243__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),(function (){var x__7243__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$quote),(function (){var x__7243__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,fields))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$$_DASH_cljs$lang$type),(function (){var x__7243__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$$_DASH_cljs$lang$ctorStr),(function (){var x__7243__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = [cljs.core.str(r)].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$$_DASH_cljs$lang$ctorPrWriter),(function (){var x__7243__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),(function (){var x__7243__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$this__12117__auto__),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$writer__12118__auto__),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$opt__12119__auto__)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__DASH_write),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$writer__12118__auto__),(function (){var x__7243__auto__ = [cljs.core.str(r)].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core$macros.build_positional_factory.call(null,t__$1,r,fields);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
});

cljs.core$macros.deftype.cljs$lang$maxFixedArity = (4);

cljs.core$macros.deftype.cljs$lang$applyTo = (function (seq12120){
var G__12121 = cljs.core.first.call(null,seq12120);
var seq12120__$1 = cljs.core.next.call(null,seq12120);
var G__12122 = cljs.core.first.call(null,seq12120__$1);
var seq12120__$2 = cljs.core.next.call(null,seq12120__$1);
var G__12123 = cljs.core.first.call(null,seq12120__$2);
var seq12120__$3 = cljs.core.next.call(null,seq12120__$2);
var G__12124 = cljs.core.first.call(null,seq12120__$3);
var seq12120__$4 = cljs.core.next.call(null,seq12120__$3);
return cljs.core$macros.deftype.cljs$core$IFn$_invoke$arity$variadic(G__12121,G__12122,G__12123,G__12124,seq12120__$4);
});


cljs.core$macros.deftype.cljs$lang$macro = true;
/**
 * Do not use this directly - use defrecord
 */
cljs.core$macros.emit_defrecord = (function cljs$core$macros$emit_defrecord(env,tagname,rname,fields,impls){
var hinted_fields = fields;
var fields__$1 = cljs.core.vec.call(null,cljs.core.map.call(null,((function (hinted_fields){
return (function (p1__12131_SHARP_){
return cljs.core.with_meta.call(null,p1__12131_SHARP_,null);
});})(hinted_fields))
,fields));
var base_fields = fields__$1;
var pr_open = [cljs.core.str("#"),cljs.core.str(cljs.core.namespace.call(null,rname)),cljs.core.str("."),cljs.core.str(cljs.core.name.call(null,rname)),cljs.core.str("{")].join('');
var fields__$2 = cljs.core.conj.call(null,fields__$1,cljs.core.cst$sym$__meta,cljs.core.cst$sym$__extmap,cljs.core.with_meta.call(null,cljs.core.cst$sym$__hash,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mutable,true], null)));
var gs = cljs.core.gensym.call(null);
var ksym = cljs.core.gensym.call(null,"k");
var impls__$1 = cljs.core.concat.call(null,impls,new cljs.core.PersistentVector(null, 28, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$IRecord,cljs.core.cst$sym$ICloneable,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$_DASH_clone),(function (){var x__7243__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$this__12132__auto__)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$new),(function (){var x__7243__auto__ = tagname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),fields__$2)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})()))),cljs.core.cst$sym$IHash,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$_DASH_hash),(function (){var x__7243__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$this__12133__auto__)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_caching_DASH_hash),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$this__12133__auto__),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$hash_DASH_imap),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$__hash))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})()))),cljs.core.cst$sym$IEquiv,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$_DASH_equiv),(function (){var x__7243__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$this__12134__auto__),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$other__12135__auto__)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_and),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$other__12135__auto__),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_identical_QMARK_),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$$_DASH_constructor),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$this__12134__auto__))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$$_DASH_constructor),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$other__12135__auto__))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_equiv_DASH_map),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$this__12134__auto__),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$other__12135__auto__))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})()))),cljs.core.cst$sym$IMeta,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$_DASH_meta),(function (){var x__7243__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$this__12136__auto__)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$__meta)))),cljs.core.cst$sym$IWithMeta,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$_DASH_with_DASH_meta),(function (){var x__7243__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$this__12137__auto__),(function (){var x__7243__auto__ = gs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$new),(function (){var x__7243__auto__ = tagname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),cljs.core.replace.call(null,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$__meta,gs], null),fields__$2))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})()))),cljs.core.cst$sym$ILookup,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$_DASH_lookup),(function (){var x__7243__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$this__12138__auto__),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$k__12139__auto__)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__DASH_lookup),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$this__12138__auto__),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$k__12139__auto__),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})()))),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$_DASH_lookup),(function (){var x__7243__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$this__12140__auto__),(function (){var x__7243__auto__ = ksym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$else__12141__auto__)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_case),(function (){var x__7243__auto__ = ksym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),cljs.core.mapcat.call(null,((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (f){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,f),f], null);
});})(gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,base_fields),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_get),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$__extmap),(function (){var x__7243__auto__ = ksym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$else__12141__auto__))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})()))),cljs.core.cst$sym$ICounted,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$_DASH_count),(function (){var x__7243__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$this__12142__auto__)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__PLUS_),(function (){var x__7243__auto__ = cljs.core.count.call(null,base_fields);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_count),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$__extmap))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})()))),cljs.core.cst$sym$ICollection,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$_DASH_conj),(function (){var x__7243__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$this__12143__auto__),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$entry__12144__auto__)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_vector_QMARK_),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$entry__12144__auto__))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__DASH_assoc),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$this__12143__auto__),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__DASH_nth),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$entry__12144__auto__),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__DASH_nth),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$entry__12144__auto__),cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_reduce),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__DASH_conj),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$this__12143__auto__),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$entry__12144__auto__))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})()))),cljs.core.cst$sym$IAssociative,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$_DASH_assoc),(function (){var x__7243__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$this__12145__auto__),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$k__12146__auto__),(function (){var x__7243__auto__ = gs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_condp),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_keyword_DASH_identical_QMARK_),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$k__12146__auto__),cljs.core.mapcat.call(null,((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (fld){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,fld),cljs.core.list_STAR_.call(null,cljs.core.cst$sym$new,tagname,cljs.core.replace.call(null,cljs.core.PersistentArrayMap.fromArray([fld,gs,cljs.core.cst$sym$__hash,null], true, false),fields__$2))], null);
});})(gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,base_fields),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$new),(function (){var x__7243__auto__ = tagname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$sym$__hash,null,cljs.core.cst$sym$__extmap,null], null), null),fields__$2),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_assoc),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$__extmap),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$k__12146__auto__),(function (){var x__7243__auto__ = gs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})()))),cljs.core.cst$sym$IMap,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$_DASH_dissoc),(function (){var x__7243__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$this__12147__auto__),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$k__12148__auto__)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_contains_QMARK_),(function (){var x__7243__auto__ = cljs.core.apply.call(null,cljs.core.hash_set,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.keyword,base_fields)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$k__12148__auto__))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_dissoc),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_with_DASH_meta),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_into),(function (){var x__7243__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$this__12147__auto__))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$__meta))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$k__12148__auto__))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$new),(function (){var x__7243__auto__ = tagname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$sym$__hash,null,cljs.core.cst$sym$__extmap,null], null), null),fields__$2),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_not_DASH_empty),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_dissoc),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$__extmap),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$k__12148__auto__))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})()))),cljs.core.cst$sym$ISeqable,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$_DASH_seq),(function (){var x__7243__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$this__12150__auto__)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_seq),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_concat),(function (){var x__7243__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (p1__12149_SHARP_){
return cljs.core._conj.call(null,(function (){var x__7243__auto__ = cljs.core.keyword.call(null,p1__12149_SHARP_);
return cljs.core._conj.call(null,(function (){var x__7243__auto____$1 = p1__12149_SHARP_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto____$1);
})(),x__7243__auto__);
})(),cljs.core.cst$sym$cljs$core$macros_SLASH_vector);
});})(gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,base_fields)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$__extmap))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})()))),cljs.core.cst$sym$IIterable,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$_DASH_iterator),(function (){var x__7243__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7243__auto__ = gs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$RecordIter$),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),(function (){var x__7243__auto__ = gs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.count.call(null,base_fields);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.keyword,base_fields)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__DASH_iterator),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$__extmap))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})()))),cljs.core.cst$sym$IPrintWithWriter,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$_DASH_pr_DASH_writer),(function (){var x__7243__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$this__12152__auto__),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$writer__12153__auto__),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$opts__12154__auto__)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7243__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$pr_DASH_pair__12155__auto__),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),(function (){var x__7243__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$keyval__12156__auto__)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_pr_DASH_sequential_DASH_writer),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$writer__12153__auto__),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_pr_DASH_writer),cljs.core._conj.call(null,cljs.core.List.EMPTY,""),cljs.core._conj.call(null,cljs.core.List.EMPTY," "),cljs.core._conj.call(null,cljs.core.List.EMPTY,""),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$opts__12154__auto__),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$keyval__12156__auto__))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_pr_DASH_sequential_DASH_writer),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$writer__12153__auto__),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$pr_DASH_pair__12155__auto__),(function (){var x__7243__auto__ = pr_open;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,", "),cljs.core._conj.call(null,cljs.core.List.EMPTY,"}"),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$opts__12154__auto__),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_concat),(function (){var x__7243__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (p1__12151_SHARP_){
return cljs.core._conj.call(null,(function (){var x__7243__auto__ = cljs.core.keyword.call(null,p1__12151_SHARP_);
return cljs.core._conj.call(null,(function (){var x__7243__auto____$1 = p1__12151_SHARP_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto____$1);
})(),x__7243__auto__);
})(),cljs.core.cst$sym$cljs$core$macros_SLASH_vector);
});})(gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,base_fields)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$__extmap))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())))], null));
var vec__12160 = cljs.core$macros.prepare_protocol_masks.call(null,env,impls__$1);
var fpps = cljs.core.nth.call(null,vec__12160,(0),null);
var pmasks = cljs.core.nth.call(null,vec__12160,(1),null);
var protocols = cljs.core$macros.collect_protocols.call(null,impls__$1,env);
var tagname__$1 = cljs.core.vary_meta.call(null,tagname,cljs.core.assoc,cljs.core.cst$kw$protocols,protocols,cljs.core.cst$kw$skip_DASH_protocol_DASH_flag,fpps);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$do),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$defrecord_STAR_),(function (){var x__7243__auto__ = tagname__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = hinted_fields;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = pmasks;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_extend_DASH_type),(function (){var x__7243__auto__ = tagname__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),cljs.core$macros.dt__GT_et.call(null,tagname__$1,impls__$1,fields__$2,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
});
cljs.core$macros.build_map_factory = (function cljs$core$macros$build_map_factory(rsym,rname,fields){
var fn_name = cljs.core.with_meta.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.cst$sym$map_DASH__GT_),cljs.core.str(rsym)].join('')),cljs.core.assoc.call(null,cljs.core.meta.call(null,rsym),cljs.core.cst$kw$factory,cljs.core.cst$kw$map));
var ms = cljs.core.gensym.call(null);
var ks = cljs.core.map.call(null,cljs.core.keyword,fields);
var getters = cljs.core.map.call(null,((function (fn_name,ms,ks){
return (function (k){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7243__auto__ = k;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = ms;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
});})(fn_name,ms,ks))
,ks);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_defn),(function (){var x__7243__auto__ = fn_name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7243__auto__ = ms;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$new),(function (){var x__7243__auto__ = rname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),getters,cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_dissoc),(function (){var x__7243__auto__ = ms;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),ks)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
});
/**
 * (defrecord name [fields*]  options* specs*)
 * 
 *   Currently there are no options.
 * 
 *   Each spec consists of a protocol or interface name followed by zero
 *   or more method bodies:
 * 
 *   protocol-or-Object
 *   (methodName [args*] body)*
 * 
 *   The record will have the (immutable) fields named by
 *   fields, which can have type hints. Protocols and methods
 *   are optional. The only methods that can be supplied are those
 *   declared in the protocols.  Note that method bodies are
 *   not closures, the local environment includes only the named fields,
 *   and those fields can be accessed directly.
 * 
 *   Method definitions take the form:
 * 
 *   (methodname [args*] body)
 * 
 *   The argument and return types can be hinted on the arg and
 *   methodname symbols. If not supplied, they will be inferred, so type
 *   hints should be reserved for disambiguation.
 * 
 *   Methods should be supplied for all methods of the desired
 *   protocol(s). You can also define overrides for
 *   methods of Object. Note that a parameter must be supplied to
 *   correspond to the target object ('this' in JavaScript parlance). Note also
 *   that recur calls to the method head should *not* pass the target object, it
 *   will be supplied automatically and can not be substituted.
 * 
 *   In the method bodies, the (unqualified) name can be used to name the
 *   class (for calls to new, instance? etc).
 * 
 *   The type will have implementations of several ClojureScript
 *   protocol generated automatically: IMeta/IWithMeta (metadata support) and
 *   IMap, etc.
 * 
 *   In addition, defrecord will define type-and-value-based =,
 *   and will define ClojureScript IHash and IEquiv.
 * 
 *   Two constructors will be defined, one taking the designated fields
 *   followed by a metadata map (nil for none) and an extension field
 *   map (nil for none), and one taking only the fields (using nil for
 *   meta and extension fields). Note that the field names __meta
 *   and __extmap are currently reserved and should not be used when
 *   defining your own records.
 * 
 *   Given (defrecord TypeName ...), two factory functions will be
 *   defined: ->TypeName, taking positional parameters for the fields,
 *   and map->TypeName, taking a map of keywords to field values.
 */
cljs.core$macros.defrecord = (function cljs$core$macros$defrecord(var_args){
var args__7491__auto__ = [];
var len__7484__auto___12170 = arguments.length;
var i__7485__auto___12171 = (0);
while(true){
if((i__7485__auto___12171 < len__7484__auto___12170)){
args__7491__auto__.push((arguments[i__7485__auto___12171]));

var G__12172 = (i__7485__auto___12171 + (1));
i__7485__auto___12171 = G__12172;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((4) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.defrecord.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__7492__auto__);
});

cljs.core$macros.defrecord.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,rsym,fields,impls){
cljs.core$macros.validate_fields.call(null,"defrecord",rsym,fields);

var rsym__$1 = cljs.core.vary_meta.call(null,rsym,cljs.core.assoc,cljs.core.cst$kw$internal_DASH_ctor,true);
var r = cljs.core.vary_meta.call(null,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,_AMPERSAND_env,cljs.core.cst$kw$locals),rsym__$1)),cljs.core.assoc,cljs.core.cst$kw$internal_DASH_ctor,true);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7243__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core$macros.emit_defrecord.call(null,_AMPERSAND_env,rsym__$1,r,fields,impls);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$$_DASH_getBasis),(function (){var x__7243__auto__ = r;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),(function (){var x__7243__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$quote),(function (){var x__7243__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,fields))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$$_DASH_cljs$lang$type),(function (){var x__7243__auto__ = r;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$$_DASH_cljs$lang$ctorPrSeq),(function (){var x__7243__auto__ = r;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),(function (){var x__7243__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$this__12163__auto__)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_list),(function (){var x__7243__auto__ = [cljs.core.str(r)].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$$_DASH_cljs$lang$ctorPrWriter),(function (){var x__7243__auto__ = r;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),(function (){var x__7243__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$this__12163__auto__),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$writer__12164__auto__)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__DASH_write),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$writer__12164__auto__),(function (){var x__7243__auto__ = [cljs.core.str(r)].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core$macros.build_positional_factory.call(null,rsym__$1,r,fields);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core$macros.build_map_factory.call(null,rsym__$1,r,fields);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = r;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
});

cljs.core$macros.defrecord.cljs$lang$maxFixedArity = (4);

cljs.core$macros.defrecord.cljs$lang$applyTo = (function (seq12165){
var G__12166 = cljs.core.first.call(null,seq12165);
var seq12165__$1 = cljs.core.next.call(null,seq12165);
var G__12167 = cljs.core.first.call(null,seq12165__$1);
var seq12165__$2 = cljs.core.next.call(null,seq12165__$1);
var G__12168 = cljs.core.first.call(null,seq12165__$2);
var seq12165__$3 = cljs.core.next.call(null,seq12165__$2);
var G__12169 = cljs.core.first.call(null,seq12165__$3);
var seq12165__$4 = cljs.core.next.call(null,seq12165__$3);
return cljs.core$macros.defrecord.cljs$core$IFn$_invoke$arity$variadic(G__12166,G__12167,G__12168,G__12169,seq12165__$4);
});


cljs.core$macros.defrecord.cljs$lang$macro = true;
/**
 * A protocol is a named set of named methods and their signatures:
 * 
 *   (defprotocol AProtocolName
 *  ;optional doc string
 *  "A doc string for AProtocol abstraction"
 * 
 *   ;method signatures
 *  (bar [this a b] "bar docs")
 *  (baz [this a] [this a b] [this a b c] "baz docs"))
 * 
 *   No implementations are provided. Docs can be specified for the
 *   protocol overall and for each method. The above yields a set of
 *   polymorphic functions and a protocol object. All are
 *   namespace-qualified by the ns enclosing the definition The resulting
 *   functions dispatch on the type of their first argument, which is
 *   required and corresponds to the implicit target object ('this' in
 *   JavaScript parlance). defprotocol is dynamic, has no special compile-time
 *   effect, and defines no new types.
 * 
 *   (defprotocol P
 *  (foo [this])
 *  (bar-me [this] [this y]))
 * 
 *   (deftype Foo [a b c]
 *  P
 *  (foo [this] a)
 *  (bar-me [this] b)
 *  (bar-me [this y] (+ c y)))
 * 
 *   (bar-me (Foo. 1 2 3) 42)
 *   => 45
 * 
 *   (foo
 *  (let [x 42]
 *    (reify P
 *      (foo [this] 17)
 *      (bar-me [this] x)
 *      (bar-me [this y] x))))
 *   => 17
 */
cljs.core$macros.defprotocol = (function cljs$core$macros$defprotocol(var_args){
var args__7491__auto__ = [];
var len__7484__auto___12200 = arguments.length;
var i__7485__auto___12201 = (0);
while(true){
if((i__7485__auto___12201 < len__7484__auto___12200)){
args__7491__auto__.push((arguments[i__7485__auto___12201]));

var G__12202 = (i__7485__auto___12201 + (1));
i__7485__auto___12201 = G__12202;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((3) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.defprotocol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7492__auto__);
});

cljs.core$macros.defprotocol.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,psym,doc_PLUS_methods){
var p = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,_AMPERSAND_env,cljs.core.cst$kw$locals),psym));
var vec__12179 = ((typeof cljs.core.first.call(null,doc_PLUS_methods) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,doc_PLUS_methods),cljs.core.next.call(null,doc_PLUS_methods)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,doc_PLUS_methods], null));
var doc = cljs.core.nth.call(null,vec__12179,(0),null);
var methods$ = cljs.core.nth.call(null,vec__12179,(1),null);
var psym__$1 = cljs.core.vary_meta.call(null,psym,cljs.core.assoc,cljs.core.cst$kw$doc,doc,cljs.core.cst$kw$protocol_DASH_symbol,true);
var ns_name = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
var fqn = ((function (p,vec__12179,doc,methods$,psym__$1,ns_name){
return (function (n){
return cljs.core.symbol.call(null,[cljs.core.str(ns_name),cljs.core.str("."),cljs.core.str(n)].join(''));
});})(p,vec__12179,doc,methods$,psym__$1,ns_name))
;
var prefix = cljs.core$macros.protocol_prefix.call(null,p);
var _ = (function (){var seq__12182 = cljs.core.seq.call(null,methods$);
var chunk__12183 = null;
var count__12184 = (0);
var i__12185 = (0);
while(true){
if((i__12185 < count__12184)){
var vec__12186 = cljs.core._nth.call(null,chunk__12183,i__12185);
var seq__12187 = cljs.core.seq.call(null,vec__12186);
var first__12188 = cljs.core.first.call(null,seq__12187);
var seq__12187__$1 = cljs.core.next.call(null,seq__12187);
var mname = first__12188;
var arities = seq__12187__$1;
if(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(0),null], null), null),cljs.core.map.call(null,cljs.core.count,cljs.core.filter.call(null,cljs.core.vector_QMARK_,arities))))){
throw (new Error([cljs.core.str("Invalid protocol, "),cljs.core.str(psym__$1),cljs.core.str(" defines method "),cljs.core.str(mname),cljs.core.str(" with arity 0")].join('')));
} else {
}

var G__12203 = seq__12182;
var G__12204 = chunk__12183;
var G__12205 = count__12184;
var G__12206 = (i__12185 + (1));
seq__12182 = G__12203;
chunk__12183 = G__12204;
count__12184 = G__12205;
i__12185 = G__12206;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__12182);
if(temp__4657__auto__){
var seq__12182__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12182__$1)){
var c__7220__auto__ = cljs.core.chunk_first.call(null,seq__12182__$1);
var G__12207 = cljs.core.chunk_rest.call(null,seq__12182__$1);
var G__12208 = c__7220__auto__;
var G__12209 = cljs.core.count.call(null,c__7220__auto__);
var G__12210 = (0);
seq__12182 = G__12207;
chunk__12183 = G__12208;
count__12184 = G__12209;
i__12185 = G__12210;
continue;
} else {
var vec__12189 = cljs.core.first.call(null,seq__12182__$1);
var seq__12190 = cljs.core.seq.call(null,vec__12189);
var first__12191 = cljs.core.first.call(null,seq__12190);
var seq__12190__$1 = cljs.core.next.call(null,seq__12190);
var mname = first__12191;
var arities = seq__12190__$1;
if(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(0),null], null), null),cljs.core.map.call(null,cljs.core.count,cljs.core.filter.call(null,cljs.core.vector_QMARK_,arities))))){
throw (new Error([cljs.core.str("Invalid protocol, "),cljs.core.str(psym__$1),cljs.core.str(" defines method "),cljs.core.str(mname),cljs.core.str(" with arity 0")].join('')));
} else {
}

var G__12211 = cljs.core.next.call(null,seq__12182__$1);
var G__12212 = null;
var G__12213 = (0);
var G__12214 = (0);
seq__12182 = G__12211;
chunk__12183 = G__12212;
count__12184 = G__12213;
i__12185 = G__12214;
continue;
}
} else {
return null;
}
}
break;
}
})();
var expand_sig = ((function (p,vec__12179,doc,methods$,psym__$1,ns_name,fqn,prefix,_){
return (function (fname,slot,sig){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7243__auto__ = sig;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_and),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_not),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_nil_QMARK_),(function (){var x__7243__auto__ = cljs.core.first.call(null,sig);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_not),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_nil_QMARK_),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),(function (){var x__7243__auto__ = cljs.core.first.call(null,sig);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.symbol.call(null,[cljs.core.str("-"),cljs.core.str(slot)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),(function (){var x__7243__auto__ = cljs.core.first.call(null,sig);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = slot;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),sig)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7243__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$x__12173__auto__),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_nil_QMARK_),(function (){var x__7243__auto__ = cljs.core.first.call(null,sig);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__7243__auto__ = cljs.core.first.call(null,sig);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$m__12174__auto__),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_aget),(function (){var x__7243__auto__ = fqn.call(null,fname);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$goog_SLASH_typeOf),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$x__12173__auto__))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_if_DASH_not),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_nil_QMARK_),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$m__12174__auto__))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$m__12174__auto__),sig)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7243__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$m__12174__auto__),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_aget),(function (){var x__7243__auto__ = fqn.call(null,fname);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,"_"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_if_DASH_not),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_nil_QMARK_),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$m__12174__auto__))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$m__12174__auto__),sig)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$throw),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_missing_DASH_protocol),(function (){var x__7243__auto__ = [cljs.core.str(psym__$1),cljs.core.str("."),cljs.core.str(fname)].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.first.call(null,sig);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
});})(p,vec__12179,doc,methods$,psym__$1,ns_name,fqn,prefix,_))
;
var psym__$2 = cljs.core.vary_meta.call(null,cljs.core.vary_meta.call(null,psym__$1,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$jsdoc], null),cljs.core.conj,"@interface"),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$protocol_DASH_info,cljs.core.cst$kw$methods], null),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (p,vec__12179,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig){
return (function (p__12192){
var vec__12193 = p__12192;
var seq__12194 = cljs.core.seq.call(null,vec__12193);
var first__12195 = cljs.core.first.call(null,seq__12194);
var seq__12194__$1 = cljs.core.next.call(null,seq__12194);
var fname = first__12195;
var sigs = seq__12194__$1;
var doc__$1 = (function (){var doc__$1 = cljs.core.last.call(null,sigs);
if(typeof doc__$1 === 'string'){
return doc__$1;
} else {
return null;
}
})();
var sigs__$1 = cljs.core.take_while.call(null,cljs.core.vector_QMARK_,sigs);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vary_meta.call(null,fname,cljs.core.assoc,cljs.core.cst$kw$doc,doc__$1),cljs.core.vec.call(null,sigs__$1)], null);
});})(p,vec__12179,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig))
,methods$)));
var method = ((function (p,vec__12179,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2){
return (function (p__12196){
var vec__12197 = p__12196;
var seq__12198 = cljs.core.seq.call(null,vec__12197);
var first__12199 = cljs.core.first.call(null,seq__12198);
var seq__12198__$1 = cljs.core.next.call(null,seq__12198);
var fname = first__12199;
var sigs = seq__12198__$1;
var doc__$1 = (function (){var doc__$1 = cljs.core.last.call(null,sigs);
if(typeof doc__$1 === 'string'){
return doc__$1;
} else {
return null;
}
})();
var sigs__$1 = cljs.core.take_while.call(null,cljs.core.vector_QMARK_,sigs);
var amp = (cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$_AMPERSAND_,null], null), null),cljs.core.apply.call(null,cljs.core.concat,sigs__$1)))?cljs.analyzer.warning.call(null,cljs.core.cst$kw$protocol_DASH_with_DASH_variadic_DASH_method,_AMPERSAND_env,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$protocol,psym__$2,cljs.core.cst$kw$name,fname], null)):null);
var slot = cljs.core.symbol.call(null,[cljs.core.str(prefix),cljs.core.str(cljs.core.name.call(null,fname))].join(''));
var fname__$1 = cljs.core.vary_meta.call(null,fname,cljs.core.assoc,cljs.core.cst$kw$protocol,p,cljs.core.cst$kw$doc,doc__$1);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_defn),(function (){var x__7243__auto__ = fname__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),cljs.core.map.call(null,((function (doc__$1,sigs__$1,amp,slot,fname__$1,vec__12197,seq__12198,first__12199,seq__12198__$1,fname,sigs,p,vec__12179,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2){
return (function (sig){
return expand_sig.call(null,fname__$1,cljs.core.symbol.call(null,[cljs.core.str(slot),cljs.core.str("$arity$"),cljs.core.str(cljs.core.count.call(null,sig))].join('')),sig);
});})(doc__$1,sigs__$1,amp,slot,fname__$1,vec__12197,seq__12198,first__12199,seq__12198__$1,fname,sigs,p,vec__12179,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2))
,sigs__$1))));
});})(p,vec__12179,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$do),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$_STAR_unchecked_DASH_if_STAR_),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$def),(function (){var x__7243__auto__ = psym__$2;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$js_STAR_),cljs.core._conj.call(null,cljs.core.List.EMPTY,"function(){}"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),cljs.core.map.call(null,method,methods$),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$_STAR_unchecked_DASH_if_STAR_),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
});

cljs.core$macros.defprotocol.cljs$lang$maxFixedArity = (3);

cljs.core$macros.defprotocol.cljs$lang$applyTo = (function (seq12175){
var G__12176 = cljs.core.first.call(null,seq12175);
var seq12175__$1 = cljs.core.next.call(null,seq12175);
var G__12177 = cljs.core.first.call(null,seq12175__$1);
var seq12175__$2 = cljs.core.next.call(null,seq12175__$1);
var G__12178 = cljs.core.first.call(null,seq12175__$2);
var seq12175__$3 = cljs.core.next.call(null,seq12175__$2);
return cljs.core$macros.defprotocol.cljs$core$IFn$_invoke$arity$variadic(G__12176,G__12177,G__12178,seq12175__$3);
});


cljs.core$macros.defprotocol.cljs$lang$macro = true;
/**
 * EXPERIMENTAL
 */
cljs.core$macros.implements_QMARK_ = (function cljs$core$macros$implements_QMARK_(_AMPERSAND_form,_AMPERSAND_env,psym,x){
var p = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,_AMPERSAND_env,cljs.core.cst$kw$locals),psym));
var prefix = cljs.core$macros.protocol_prefix.call(null,p);
var xsym = cljs.core$macros.bool_expr.call(null,cljs.core.gensym.call(null));
var vec__12218 = cljs.core$macros.fast_path_protocols.call(null,p);
var part = cljs.core.nth.call(null,vec__12218,(0),null);
var bit = cljs.core.nth.call(null,vec__12218,(1),null);
var msym = cljs.core.symbol.call(null,[cljs.core.str("-cljs$lang$protocol_mask$partition"),cljs.core.str(part),cljs.core.str("$")].join(''));
if(!((x instanceof cljs.core.Symbol))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7243__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7243__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__7243__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_or),(function (){var x__7243__auto__ = (cljs.core.truth_(bit)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_unsafe_DASH_bit_DASH_and),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),(function (){var x__7243__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = msym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = bit;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})()))):false);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core$macros.bool_expr.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),(function (){var x__7243__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.symbol.call(null,[cljs.core.str("-"),cljs.core.str(prefix)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_if_DASH_not),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_nil_QMARK_),(function (){var x__7243__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_or),(function (){var x__7243__auto__ = (cljs.core.truth_(bit)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_unsafe_DASH_bit_DASH_and),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),(function (){var x__7243__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = msym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = bit;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})()))):false);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core$macros.bool_expr.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),(function (){var x__7243__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.symbol.call(null,[cljs.core.str("-"),cljs.core.str(prefix)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
}
});

cljs.core$macros.implements_QMARK_.cljs$lang$macro = true;
/**
 * Returns true if x satisfies the protocol
 */
cljs.core$macros.satisfies_QMARK_ = (function cljs$core$macros$satisfies_QMARK_(_AMPERSAND_form,_AMPERSAND_env,psym,x){
var p = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,_AMPERSAND_env,cljs.core.cst$kw$locals),psym));
var prefix = cljs.core$macros.protocol_prefix.call(null,p);
var xsym = cljs.core$macros.bool_expr.call(null,cljs.core.gensym.call(null));
var vec__12224 = cljs.core$macros.fast_path_protocols.call(null,p);
var part = cljs.core.nth.call(null,vec__12224,(0),null);
var bit = cljs.core.nth.call(null,vec__12224,(1),null);
var msym = cljs.core.symbol.call(null,[cljs.core.str("-cljs$lang$protocol_mask$partition"),cljs.core.str(part),cljs.core.str("$")].join(''));
if(!((x instanceof cljs.core.Symbol))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7243__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7243__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_if_DASH_not),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_nil_QMARK_),(function (){var x__7243__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_or),(function (){var x__7243__auto__ = (cljs.core.truth_(bit)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_unsafe_DASH_bit_DASH_and),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),(function (){var x__7243__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = msym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = bit;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})()))):false);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core$macros.bool_expr.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),(function (){var x__7243__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.symbol.call(null,[cljs.core.str("-"),cljs.core.str(prefix)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_coercive_DASH_not),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),(function (){var x__7243__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = msym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_native_DASH_satisfies_QMARK_),(function (){var x__7243__auto__ = psym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_native_DASH_satisfies_QMARK_),(function (){var x__7243__auto__ = psym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_if_DASH_not),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_nil_QMARK_),(function (){var x__7243__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_or),(function (){var x__7243__auto__ = (cljs.core.truth_(bit)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_unsafe_DASH_bit_DASH_and),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),(function (){var x__7243__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = msym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = bit;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})()))):false);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core$macros.bool_expr.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),(function (){var x__7243__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.symbol.call(null,[cljs.core.str("-"),cljs.core.str(prefix)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_coercive_DASH_not),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),(function (){var x__7243__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = msym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_native_DASH_satisfies_QMARK_),(function (){var x__7243__auto__ = psym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_native_DASH_satisfies_QMARK_),(function (){var x__7243__auto__ = psym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
}
});

cljs.core$macros.satisfies_QMARK_.cljs$lang$macro = true;
/**
 * Takes a body of expressions that returns an ISeq or nil, and yields
 *   a ISeqable object that will invoke the body only the first time seq
 *   is called, and will cache the result and return it on all subsequent
 *   seq calls.
 */
cljs.core$macros.lazy_seq = (function cljs$core$macros$lazy_seq(var_args){
var args__7491__auto__ = [];
var len__7484__auto___12230 = arguments.length;
var i__7485__auto___12231 = (0);
while(true){
if((i__7485__auto___12231 < len__7484__auto___12230)){
args__7491__auto__.push((arguments[i__7485__auto___12231]));

var G__12232 = (i__7485__auto___12231 + (1));
i__7485__auto___12231 = G__12232;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((2) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.lazy_seq.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7492__auto__);
});

cljs.core$macros.lazy_seq.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$new),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_LazySeq),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),(function (){var x__7243__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
});

cljs.core$macros.lazy_seq.cljs$lang$maxFixedArity = (2);

cljs.core$macros.lazy_seq.cljs$lang$applyTo = (function (seq12227){
var G__12228 = cljs.core.first.call(null,seq12227);
var seq12227__$1 = cljs.core.next.call(null,seq12227);
var G__12229 = cljs.core.first.call(null,seq12227__$1);
var seq12227__$2 = cljs.core.next.call(null,seq12227__$1);
return cljs.core$macros.lazy_seq.cljs$core$IFn$_invoke$arity$variadic(G__12228,G__12229,seq12227__$2);
});


cljs.core$macros.lazy_seq.cljs$lang$macro = true;
/**
 * Takes a body of expressions and yields a Delay object that will
 *   invoke the body only the first time it is forced (with force or deref/@), and
 *   will cache the result and return it on all subsequent force
 *   calls.
 */
cljs.core$macros.delay = (function cljs$core$macros$delay(var_args){
var args__7491__auto__ = [];
var len__7484__auto___12236 = arguments.length;
var i__7485__auto___12237 = (0);
while(true){
if((i__7485__auto___12237 < len__7484__auto___12236)){
args__7491__auto__.push((arguments[i__7485__auto___12237]));

var G__12238 = (i__7485__auto___12237 + (1));
i__7485__auto___12237 = G__12238;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((2) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.delay.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7492__auto__);
});

cljs.core$macros.delay.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$new),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_Delay),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),(function (){var x__7243__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
});

cljs.core$macros.delay.cljs$lang$maxFixedArity = (2);

cljs.core$macros.delay.cljs$lang$applyTo = (function (seq12233){
var G__12234 = cljs.core.first.call(null,seq12233);
var seq12233__$1 = cljs.core.next.call(null,seq12233);
var G__12235 = cljs.core.first.call(null,seq12233__$1);
var seq12233__$2 = cljs.core.next.call(null,seq12233__$1);
return cljs.core$macros.delay.cljs$core$IFn$_invoke$arity$variadic(G__12234,G__12235,seq12233__$2);
});


cljs.core$macros.delay.cljs$lang$macro = true;
/**
 * binding => var-symbol temp-value-expr
 * 
 *   Temporarily redefines vars while executing the body.  The
 *   temp-value-exprs will be evaluated and each resulting value will
 *   replace in parallel the root value of its var.  After the body is
 *   executed, the root values of all the vars will be set back to their
 *   old values. Useful for mocking out functions during testing.
 */
cljs.core$macros.with_redefs = (function cljs$core$macros$with_redefs(var_args){
var args__7491__auto__ = [];
var len__7484__auto___12247 = arguments.length;
var i__7485__auto___12248 = (0);
while(true){
if((i__7485__auto___12248 < len__7484__auto___12247)){
args__7491__auto__.push((arguments[i__7485__auto___12248]));

var G__12249 = (i__7485__auto___12248 + (1));
i__7485__auto___12248 = G__12249;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((3) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.with_redefs.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7492__auto__);
});

cljs.core$macros.with_redefs.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
var names = cljs.core.take_nth.call(null,(2),bindings);
var vals = cljs.core.take_nth.call(null,(2),cljs.core.drop.call(null,(1),bindings));
var tempnames = cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.gensym,cljs.core.name),names);
var binds = cljs.core.map.call(null,cljs.core.vector,names,vals);
var resets = cljs.core.reverse.call(null,cljs.core.map.call(null,cljs.core.vector,names,tempnames));
var bind_value = ((function (names,vals,tempnames,binds,resets){
return (function (p__12243){
var vec__12244 = p__12243;
var k = cljs.core.nth.call(null,vec__12244,(0),null);
var v = cljs.core.nth.call(null,vec__12244,(1),null);
return cljs.core._conj.call(null,(function (){var x__7243__auto__ = k;
return cljs.core._conj.call(null,(function (){var x__7243__auto____$1 = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto____$1);
})(),x__7243__auto__);
})(),cljs.core.cst$sym$set_BANG_);
});})(names,vals,tempnames,binds,resets))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7243__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.interleave.call(null,tempnames,names)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),cljs.core.map.call(null,bind_value,binds),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$try),body,(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$finally),cljs.core.map.call(null,bind_value,resets))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
});

cljs.core$macros.with_redefs.cljs$lang$maxFixedArity = (3);

cljs.core$macros.with_redefs.cljs$lang$applyTo = (function (seq12239){
var G__12240 = cljs.core.first.call(null,seq12239);
var seq12239__$1 = cljs.core.next.call(null,seq12239);
var G__12241 = cljs.core.first.call(null,seq12239__$1);
var seq12239__$2 = cljs.core.next.call(null,seq12239__$1);
var G__12242 = cljs.core.first.call(null,seq12239__$2);
var seq12239__$3 = cljs.core.next.call(null,seq12239__$2);
return cljs.core$macros.with_redefs.cljs$core$IFn$_invoke$arity$variadic(G__12240,G__12241,G__12242,seq12239__$3);
});


cljs.core$macros.with_redefs.cljs$lang$macro = true;
/**
 * binding => var-symbol init-expr
 * 
 *   Creates new bindings for the (already-existing) vars, with the
 *   supplied initial values, executes the exprs in an implicit do, then
 *   re-establishes the bindings that existed before.  The new bindings
 *   are made in parallel (unlike let); all init-exprs are evaluated
 *   before the vars are bound to their new values.
 */
cljs.core$macros.binding = (function cljs$core$macros$binding(var_args){
var args__7491__auto__ = [];
var len__7484__auto___12254 = arguments.length;
var i__7485__auto___12255 = (0);
while(true){
if((i__7485__auto___12255 < len__7484__auto___12254)){
args__7491__auto__.push((arguments[i__7485__auto___12255]));

var G__12256 = (i__7485__auto___12255 + (1));
i__7485__auto___12255 = G__12256;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((3) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.binding.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7492__auto__);
});

cljs.core$macros.binding.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
var names = cljs.core.take_nth.call(null,(2),bindings);
cljs.analyzer.confirm_bindings.call(null,_AMPERSAND_env,names);

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_with_DASH_redefs),(function (){var x__7243__auto__ = bindings;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),body)));
});

cljs.core$macros.binding.cljs$lang$maxFixedArity = (3);

cljs.core$macros.binding.cljs$lang$applyTo = (function (seq12250){
var G__12251 = cljs.core.first.call(null,seq12250);
var seq12250__$1 = cljs.core.next.call(null,seq12250);
var G__12252 = cljs.core.first.call(null,seq12250__$1);
var seq12250__$2 = cljs.core.next.call(null,seq12250__$1);
var G__12253 = cljs.core.first.call(null,seq12250__$2);
var seq12250__$3 = cljs.core.next.call(null,seq12250__$2);
return cljs.core$macros.binding.cljs$core$IFn$_invoke$arity$variadic(G__12251,G__12252,G__12253,seq12250__$3);
});


cljs.core$macros.binding.cljs$lang$macro = true;
/**
 * Takes a binary predicate, an expression, and a set of clauses.
 *   Each clause can take the form of either:
 * 
 *   test-expr result-expr
 * 
 *   test-expr :>> result-fn
 * 
 *   Note :>> is an ordinary keyword.
 * 
 *   For each clause, (pred test-expr expr) is evaluated. If it returns
 *   logical true, the clause is a match. If a binary clause matches, the
 *   result-expr is returned, if a ternary clause matches, its result-fn,
 *   which must be a unary function, is called with the result of the
 *   predicate as its argument, the result of that call being the return
 *   value of condp. A single default expression can follow the clauses,
 *   and its value will be returned if no clause matches. If no default
 *   expression is provided and no clause matches, an
 *   IllegalArgumentException is thrown.
 */
cljs.core$macros.condp = (function cljs$core$macros$condp(var_args){
var args__7491__auto__ = [];
var len__7484__auto___12275 = arguments.length;
var i__7485__auto___12276 = (0);
while(true){
if((i__7485__auto___12276 < len__7484__auto___12275)){
args__7491__auto__.push((arguments[i__7485__auto___12276]));

var G__12277 = (i__7485__auto___12276 + (1));
i__7485__auto___12276 = G__12277;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((4) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.condp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__7492__auto__);
});

cljs.core$macros.condp.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,pred,expr,clauses){
var gpred = cljs.core.gensym.call(null,"pred__");
var gexpr = cljs.core.gensym.call(null,"expr__");
var emit = ((function (gpred,gexpr){
return (function cljs$core$macros$emit(pred__$1,expr__$1,args){
var vec__12269 = cljs.core.split_at.call(null,((cljs.core._EQ_.call(null,cljs.core.cst$kw$_GT__GT_,cljs.core.second.call(null,args)))?(3):(2)),args);
var vec__12272 = cljs.core.nth.call(null,vec__12269,(0),null);
var a = cljs.core.nth.call(null,vec__12272,(0),null);
var b = cljs.core.nth.call(null,vec__12272,(1),null);
var c = cljs.core.nth.call(null,vec__12272,(2),null);
var clause = vec__12272;
var more = cljs.core.nth.call(null,vec__12269,(1),null);
var n = cljs.core.count.call(null,clause);
if(cljs.core._EQ_.call(null,(0),n)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$throw),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$js_SLASH_Error$),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_str),cljs.core._conj.call(null,cljs.core.List.EMPTY,"No matching clause: "),(function (){var x__7243__auto__ = expr__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
} else {
if(cljs.core._EQ_.call(null,(1),n)){
return a;
} else {
if(cljs.core._EQ_.call(null,(2),n)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7243__auto__ = pred__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = a;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = expr__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = b;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs$core$macros$emit.call(null,pred__$1,expr__$1,more);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_if_DASH_let),(function (){var x__7243__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$p__12257__auto__),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7243__auto__ = pred__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = a;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = expr__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7243__auto__ = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$p__12257__auto__))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs$core$macros$emit.call(null,pred__$1,expr__$1,more);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));

}
}
}
});})(gpred,gexpr))
;
var gres = cljs.core.gensym.call(null,"res__");
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7243__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7243__auto__ = gpred;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = pred;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = gexpr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = emit.call(null,gpred,gexpr,clauses);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
});

cljs.core$macros.condp.cljs$lang$maxFixedArity = (4);

cljs.core$macros.condp.cljs$lang$applyTo = (function (seq12258){
var G__12259 = cljs.core.first.call(null,seq12258);
var seq12258__$1 = cljs.core.next.call(null,seq12258);
var G__12260 = cljs.core.first.call(null,seq12258__$1);
var seq12258__$2 = cljs.core.next.call(null,seq12258__$1);
var G__12261 = cljs.core.first.call(null,seq12258__$2);
var seq12258__$3 = cljs.core.next.call(null,seq12258__$2);
var G__12262 = cljs.core.first.call(null,seq12258__$3);
var seq12258__$4 = cljs.core.next.call(null,seq12258__$3);
return cljs.core$macros.condp.cljs$core$IFn$_invoke$arity$variadic(G__12259,G__12260,G__12261,G__12262,seq12258__$4);
});


cljs.core$macros.condp.cljs$lang$macro = true;
cljs.core$macros.assoc_test = (function cljs$core$macros$assoc_test(m,test,expr,env){
if(cljs.core.contains_QMARK_.call(null,m,test)){
throw (new Error([cljs.core.str("Duplicate case test constant '"),cljs.core.str(test),cljs.core.str("'"),cljs.core.str((cljs.core.truth_(cljs.core.cst$kw$line.cljs$core$IFn$_invoke$arity$1(env))?[cljs.core.str(" on line "),cljs.core.str(cljs.core.cst$kw$line.cljs$core$IFn$_invoke$arity$1(env)),cljs.core.str(" "),cljs.core.str(cljs.analyzer._STAR_cljs_file_STAR_)].join(''):null))].join('')));
} else {
return cljs.core.assoc.call(null,m,test,expr);
}
});
cljs.core$macros.const_QMARK_ = (function cljs$core$macros$const_QMARK_(env,x){
var m = (function (){var and__6397__auto__ = cljs.core.list_QMARK_.call(null,x);
if(and__6397__auto__){
return cljs.analyzer.resolve_var.call(null,env,cljs.core.last.call(null,x));
} else {
return and__6397__auto__;
}
})();
if(cljs.core.truth_(m)){
return cljs.core.get.call(null,m,cljs.core.cst$kw$const);
} else {
return null;
}
});
/**
 * Takes an expression, and a set of clauses.
 * 
 *   Each clause can take the form of either:
 * 
 *   test-constant result-expr
 * 
 *   (test-constant1 ... test-constantN)  result-expr
 * 
 *   The test-constants are not evaluated. They must be compile-time
 *   literals, and need not be quoted.  If the expression is equal to a
 *   test-constant, the corresponding result-expr is returned. A single
 *   default expression can follow the clauses, and its value will be
 *   returned if no clause matches. If no default expression is provided
 *   and no clause matches, an Error is thrown.
 * 
 *   Unlike cond and condp, case does a constant-time dispatch, the
 *   clauses are not considered sequentially.  All manner of constant
 *   expressions are acceptable in case, including numbers, strings,
 *   symbols, keywords, and (ClojureScript) composites thereof. Note that since
 *   lists are used to group multiple constants that map to the same
 *   expression, a vector can be used to match a list if needed. The
 *   test-constants need not be all of the same type.
 */
cljs.core$macros.case$ = (function cljs$core$macros$case(var_args){
var args__7491__auto__ = [];
var len__7484__auto___12298 = arguments.length;
var i__7485__auto___12299 = (0);
while(true){
if((i__7485__auto___12299 < len__7484__auto___12298)){
args__7491__auto__.push((arguments[i__7485__auto___12299]));

var G__12300 = (i__7485__auto___12299 + (1));
i__7485__auto___12299 = G__12300;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((3) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.case$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7492__auto__);
});

cljs.core$macros.case$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,e,clauses){
var default$ = ((cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,clauses)))?cljs.core.last.call(null,clauses):cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$throw),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$js_SLASH_Error$),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_str),cljs.core._conj.call(null,cljs.core.List.EMPTY,"No matching clause: "),(function (){var x__7243__auto__ = e;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})()))));
var env = _AMPERSAND_env;
var pairs = cljs.core.reduce.call(null,((function (default$,env){
return (function (m,p__12286){
var vec__12287 = p__12286;
var test = cljs.core.nth.call(null,vec__12287,(0),null);
var expr = cljs.core.nth.call(null,vec__12287,(1),null);
if(cljs.core.seq_QMARK_.call(null,test)){
return cljs.core.reduce.call(null,((function (vec__12287,test,expr,default$,env){
return (function (m__$1,test__$1){
var test__$2 = (((test__$1 instanceof cljs.core.Symbol))?cljs.core._conj.call(null,(function (){var x__7243__auto__ = test__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),cljs.core.cst$sym$quote):test__$1);
return cljs.core$macros.assoc_test.call(null,m__$1,test__$2,expr,env);
});})(vec__12287,test,expr,default$,env))
,m,test);
} else {
if((test instanceof cljs.core.Symbol)){
return cljs.core$macros.assoc_test.call(null,m,cljs.core._conj.call(null,(function (){var x__7243__auto__ = test;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),cljs.core.cst$sym$quote),expr,env);
} else {
return cljs.core$macros.assoc_test.call(null,m,test,expr,env);

}
}
});})(default$,env))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.partition.call(null,(2),clauses));
var esym = cljs.core.gensym.call(null);
var tests = cljs.core.keys.call(null,pairs);
if(cljs.core.every_QMARK_.call(null,cljs.core.some_fn.call(null,cljs.core.number_QMARK_,cljs.core.string_QMARK_,cljs.core.fnil.call(null,cljs.core.char_QMARK_,cljs.core.cst$kw$nonchar),((function (default$,env,pairs,esym,tests){
return (function (p1__12278_SHARP_){
return cljs.core$macros.const_QMARK_.call(null,env,p1__12278_SHARP_);
});})(default$,env,pairs,esym,tests))
),tests)){
var no_default = ((cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,clauses)))?cljs.core.butlast.call(null,clauses):clauses);
var tests__$1 = cljs.core.mapv.call(null,((function (no_default,default$,env,pairs,esym,tests){
return (function (p1__12279_SHARP_){
if(cljs.core.seq_QMARK_.call(null,p1__12279_SHARP_)){
return cljs.core.vec.call(null,p1__12279_SHARP_);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12279_SHARP_], null);
}
});})(no_default,default$,env,pairs,esym,tests))
,cljs.core.take_nth.call(null,(2),no_default));
var thens = cljs.core.vec.call(null,cljs.core.take_nth.call(null,(2),cljs.core.drop.call(null,(1),no_default)));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7243__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7243__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = e;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$case_STAR_),(function (){var x__7243__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = tests__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = thens;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = default$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
} else {
if(cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,tests)){
var tests__$1 = cljs.core.mapv.call(null,((function (default$,env,pairs,esym,tests){
return (function (p1__12281_SHARP_){
if(cljs.core.seq_QMARK_.call(null,p1__12281_SHARP_)){
return cljs.core.vec.call(null,p1__12281_SHARP_);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12281_SHARP_], null);
}
});})(default$,env,pairs,esym,tests))
,cljs.core.vec.call(null,cljs.core.map.call(null,((function (default$,env,pairs,esym,tests){
return (function (p1__12280_SHARP_){
return [cljs.core.str(p1__12280_SHARP_)].join('').substring((1));
});})(default$,env,pairs,esym,tests))
,tests)));
var thens = cljs.core.vec.call(null,cljs.core.vals.call(null,pairs));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7243__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7243__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_keyword_QMARK_),(function (){var x__7243__auto__ = e;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$$_DASH_fqn),(function (){var x__7243__auto__ = e;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$case_STAR_),(function (){var x__7243__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = tests__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = thens;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = default$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7243__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7243__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = e;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_cond),cljs.core.mapcat.call(null,((function (default$,env,pairs,esym,tests){
return (function (p__12294){
var vec__12295 = p__12294;
var m = cljs.core.nth.call(null,vec__12295,(0),null);
var c = cljs.core.nth.call(null,vec__12295,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__EQ_),(function (){var x__7243__auto__ = m;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
});})(default$,env,pairs,esym,tests))
,pairs),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$kw$else),(function (){var x__7243__auto__ = default$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));

}
}
});

cljs.core$macros.case$.cljs$lang$maxFixedArity = (3);

cljs.core$macros.case$.cljs$lang$applyTo = (function (seq12282){
var G__12283 = cljs.core.first.call(null,seq12282);
var seq12282__$1 = cljs.core.next.call(null,seq12282);
var G__12284 = cljs.core.first.call(null,seq12282__$1);
var seq12282__$2 = cljs.core.next.call(null,seq12282__$1);
var G__12285 = cljs.core.first.call(null,seq12282__$2);
var seq12282__$3 = cljs.core.next.call(null,seq12282__$2);
return cljs.core$macros.case$.cljs$core$IFn$_invoke$arity$variadic(G__12283,G__12284,G__12285,seq12282__$3);
});


cljs.core$macros.case$.cljs$lang$macro = true;
/**
 * Evaluates expr and throws an exception if it does not evaluate to
 *   logical true.
 */
cljs.core$macros.assert = (function cljs$core$macros$assert(var_args){
var args12301 = [];
var len__7484__auto___12304 = arguments.length;
var i__7485__auto___12305 = (0);
while(true){
if((i__7485__auto___12305 < len__7484__auto___12304)){
args12301.push((arguments[i__7485__auto___12305]));

var G__12306 = (i__7485__auto___12305 + (1));
i__7485__auto___12305 = G__12306;
continue;
} else {
}
break;
}

var G__12303 = args12301.length;
switch (G__12303) {
case 3:
return cljs.core$macros.assert.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.assert.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str((args12301.length - (2)))].join('')));

}
});

cljs.core$macros.assert.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
if(cljs.core.truth_(cljs.core._STAR_assert_STAR_)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_when_DASH_not),(function (){var x__7243__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$throw),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$js_SLASH_Error$),(function (){var x__7243__auto__ = [cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,x))].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
} else {
return null;
}
});

cljs.core$macros.assert.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,message){
if(cljs.core.truth_(cljs.core._STAR_assert_STAR_)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_when_DASH_not),(function (){var x__7243__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$throw),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$js_SLASH_Error$),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_str),cljs.core._conj.call(null,cljs.core.List.EMPTY,"Assert failed: "),(function (){var x__7243__auto__ = message;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,"\n"),(function (){var x__7243__auto__ = cljs.core.pr_str.call(null,x);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
} else {
return null;
}
});

cljs.core$macros.assert.cljs$lang$maxFixedArity = 4;


cljs.core$macros.assert.cljs$lang$macro = true;
/**
 * List comprehension. Takes a vector of one or more
 * binding-form/collection-expr pairs, each followed by zero or more
 * modifiers, and yields a lazy sequence of evaluations of expr.
 * Collections are iterated in a nested fashion, rightmost fastest,
 * and nested coll-exprs can refer to bindings created in prior
 * binding-forms.  Supported modifiers are: :let [binding-form expr ...],
 * :while test, :when test.
 * 
 *   (take 100 (for [x (range 100000000) y (range 1000000) :while (< y x)]  [x y]))
 */
cljs.core$macros.for$ = (function cljs$core$macros$for(_AMPERSAND_form,_AMPERSAND_env,seq_exprs,body_expr){
if(cljs.core.vector_QMARK_.call(null,seq_exprs)){
} else {
throw cljs.core.ex_info.call(null,"for requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,seq_exprs))){
} else {
throw cljs.core.ex_info.call(null,"for requires an even number of forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var to_groups = (function (seq_exprs__$1){
return cljs.core.reduce.call(null,(function (groups,p__12394){
var vec__12395 = p__12394;
var k = cljs.core.nth.call(null,vec__12395,(0),null);
var v = cljs.core.nth.call(null,vec__12395,(1),null);
if((k instanceof cljs.core.Keyword)){
return cljs.core.conj.call(null,cljs.core.pop.call(null,groups),cljs.core.conj.call(null,cljs.core.peek.call(null,groups),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null)));
} else {
return cljs.core.conj.call(null,groups,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
}
}),cljs.core.PersistentVector.EMPTY,cljs.core.partition.call(null,(2),seq_exprs__$1));
});
var err = ((function (to_groups){
return (function() { 
var G__12475__delegate = function (msg){
throw cljs.core.ex_info.call(null,cljs.core.apply.call(null,cljs.core.str,msg),cljs.core.PersistentArrayMap.EMPTY);
};
var G__12475 = function (var_args){
var msg = null;
if (arguments.length > 0) {
var G__12476__i = 0, G__12476__a = new Array(arguments.length -  0);
while (G__12476__i < G__12476__a.length) {G__12476__a[G__12476__i] = arguments[G__12476__i + 0]; ++G__12476__i;}
  msg = new cljs.core.IndexedSeq(G__12476__a,0);
} 
return G__12475__delegate.call(this,msg);};
G__12475.cljs$lang$maxFixedArity = 0;
G__12475.cljs$lang$applyTo = (function (arglist__12477){
var msg = cljs.core.seq(arglist__12477);
return G__12475__delegate(msg);
});
G__12475.cljs$core$IFn$_invoke$arity$variadic = G__12475__delegate;
return G__12475;
})()
;})(to_groups))
;
var emit_bind = ((function (to_groups,err){
return (function cljs$core$macros$for_$_emit_bind(p__12398){
var vec__12437 = p__12398;
var seq__12438 = cljs.core.seq.call(null,vec__12437);
var first__12439 = cljs.core.first.call(null,seq__12438);
var seq__12438__$1 = cljs.core.next.call(null,seq__12438);
var vec__12440 = first__12439;
var seq__12441 = cljs.core.seq.call(null,vec__12440);
var first__12442 = cljs.core.first.call(null,seq__12441);
var seq__12441__$1 = cljs.core.next.call(null,seq__12441);
var bind = first__12442;
var first__12442__$1 = cljs.core.first.call(null,seq__12441__$1);
var seq__12441__$2 = cljs.core.next.call(null,seq__12441__$1);
var expr = first__12442__$1;
var mod_pairs = seq__12441__$2;
var vec__12443 = seq__12438__$1;
var vec__12446 = cljs.core.nth.call(null,vec__12443,(0),null);
var _ = cljs.core.nth.call(null,vec__12446,(0),null);
var next_expr = cljs.core.nth.call(null,vec__12446,(1),null);
var next_groups = vec__12443;
var giter = cljs.core.gensym.call(null,"iter__");
var gxs = cljs.core.gensym.call(null,"s__");
var do_mod = ((function (giter,gxs,vec__12437,seq__12438,first__12439,seq__12438__$1,vec__12440,seq__12441,first__12442,seq__12441__$1,bind,first__12442__$1,seq__12441__$2,expr,mod_pairs,vec__12443,vec__12446,_,next_expr,next_groups,to_groups,err){
return (function cljs$core$macros$for_$_emit_bind_$_do_mod(p__12449){
var vec__12456 = p__12449;
var seq__12457 = cljs.core.seq.call(null,vec__12456);
var first__12458 = cljs.core.first.call(null,seq__12457);
var seq__12457__$1 = cljs.core.next.call(null,seq__12457);
var vec__12459 = first__12458;
var k = cljs.core.nth.call(null,vec__12459,(0),null);
var v = cljs.core.nth.call(null,vec__12459,(1),null);
var pair = vec__12459;
var etc = seq__12457__$1;
if(cljs.core._EQ_.call(null,k,cljs.core.cst$kw$let)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7243__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs$core$macros$for_$_emit_bind_$_do_mod.call(null,etc);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
} else {
if(cljs.core._EQ_.call(null,k,cljs.core.cst$kw$while)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_when),(function (){var x__7243__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs$core$macros$for_$_emit_bind_$_do_mod.call(null,etc);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
} else {
if(cljs.core._EQ_.call(null,k,cljs.core.cst$kw$when)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__7243__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs$core$macros$for_$_emit_bind_$_do_mod.call(null,etc);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$recur),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_rest),(function (){var x__7243__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
} else {
if((k instanceof cljs.core.Keyword)){
return err.call(null,"Invalid 'for' keyword ",k);
} else {
if(next_groups){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7243__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$iterys__12308__auto__),(function (){var x__7243__auto__ = cljs$core$macros$for_$_emit_bind.call(null,next_groups);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$fs__12309__auto__),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_seq),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$iterys__12308__auto__),(function (){var x__7243__auto__ = next_expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$if),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$fs__12309__auto__),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_concat),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$fs__12309__auto__),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7243__auto__ = giter;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_rest),(function (){var x__7243__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$recur),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_rest),(function (){var x__7243__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_cons),(function (){var x__7243__auto__ = body_expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7243__auto__ = giter;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_rest),(function (){var x__7243__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));

}
}
}
}
}
});})(giter,gxs,vec__12437,seq__12438,first__12439,seq__12438__$1,vec__12440,seq__12441,first__12442,seq__12441__$1,bind,first__12442__$1,seq__12441__$2,expr,mod_pairs,vec__12443,vec__12446,_,next_expr,next_groups,to_groups,err))
;
if(next_groups){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),(function (){var x__7243__auto__ = giter;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7243__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_lazy_DASH_seq),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_loop),(function (){var x__7243__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7243__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_when_DASH_first),(function (){var x__7243__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7243__auto__ = bind;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = do_mod.call(null,mod_pairs);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
} else {
var gi = cljs.core.gensym.call(null,"i__");
var gb = cljs.core.gensym.call(null,"b__");
var do_cmod = ((function (gi,gb,giter,gxs,do_mod,vec__12437,seq__12438,first__12439,seq__12438__$1,vec__12440,seq__12441,first__12442,seq__12441__$1,bind,first__12442__$1,seq__12441__$2,expr,mod_pairs,vec__12443,vec__12446,_,next_expr,next_groups,to_groups,err){
return (function cljs$core$macros$for_$_emit_bind_$_do_cmod(p__12462){
var vec__12469 = p__12462;
var seq__12470 = cljs.core.seq.call(null,vec__12469);
var first__12471 = cljs.core.first.call(null,seq__12470);
var seq__12470__$1 = cljs.core.next.call(null,seq__12470);
var vec__12472 = first__12471;
var k = cljs.core.nth.call(null,vec__12472,(0),null);
var v = cljs.core.nth.call(null,vec__12472,(1),null);
var pair = vec__12472;
var etc = seq__12470__$1;
if(cljs.core._EQ_.call(null,k,cljs.core.cst$kw$let)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7243__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs$core$macros$for_$_emit_bind_$_do_cmod.call(null,etc);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
} else {
if(cljs.core._EQ_.call(null,k,cljs.core.cst$kw$while)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_when),(function (){var x__7243__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs$core$macros$for_$_emit_bind_$_do_cmod.call(null,etc);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
} else {
if(cljs.core._EQ_.call(null,k,cljs.core.cst$kw$when)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__7243__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs$core$macros$for_$_emit_bind_$_do_cmod.call(null,etc);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$recur),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_unchecked_DASH_inc),(function (){var x__7243__auto__ = gi;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
} else {
if((k instanceof cljs.core.Keyword)){
return err.call(null,"Invalid 'for' keyword ",k);
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$do),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_chunk_DASH_append),(function (){var x__7243__auto__ = gb;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = body_expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$recur),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_unchecked_DASH_inc),(function (){var x__7243__auto__ = gi;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));

}
}
}
}
});})(gi,gb,giter,gxs,do_mod,vec__12437,seq__12438,first__12439,seq__12438__$1,vec__12440,seq__12441,first__12442,seq__12441__$1,bind,first__12442__$1,seq__12441__$2,expr,mod_pairs,vec__12443,vec__12446,_,next_expr,next_groups,to_groups,err))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),(function (){var x__7243__auto__ = giter;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7243__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_lazy_DASH_seq),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_loop),(function (){var x__7243__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7243__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_when_DASH_let),(function (){var x__7243__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7243__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_seq),(function (){var x__7243__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_chunked_DASH_seq_QMARK_),(function (){var x__7243__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7243__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$c__12310__auto__),(function (){var x__7243__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_chunk_DASH_first),(function (){var x__7243__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})()))),cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$kw$file),cljs.core._conj.call(null,cljs.core.List.EMPTY,"/Users/clumsyjedi/workspace/clack/out/cljs/core.cljc"),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$kw$line),cljs.core._conj.call(null,cljs.core.List.EMPTY,2314),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$kw$column),cljs.core._conj.call(null,cljs.core.List.EMPTY,52),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$kw$end_DASH_line),cljs.core._conj.call(null,cljs.core.List.EMPTY,2314),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$kw$end_DASH_column),cljs.core._conj.call(null,cljs.core.List.EMPTY,82),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$kw$tag),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_not_DASH_native))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$size__12311__auto__),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_count),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$c__12310__auto__))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = gb;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_chunk_DASH_buffer),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$size__12311__auto__))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_coercive_DASH_boolean),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_loop),(function (){var x__7243__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7243__auto__ = gi;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__LT_),(function (){var x__7243__auto__ = gi;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$size__12311__auto__))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7243__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7243__auto__ = bind;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__DASH_nth),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$c__12310__auto__),(function (){var x__7243__auto__ = gi;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = do_cmod.call(null,mod_pairs);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_chunk_DASH_cons),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_chunk),(function (){var x__7243__auto__ = gb;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7243__auto__ = giter;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_chunk_DASH_rest),(function (){var x__7243__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_chunk_DASH_cons),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_chunk),(function (){var x__7243__auto__ = gb;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7243__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7243__auto__ = bind;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_first),(function (){var x__7243__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = do_mod.call(null,mod_pairs);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
}
});})(to_groups,err))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7243__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$iter__12312__auto__),(function (){var x__7243__auto__ = emit_bind.call(null,to_groups.call(null,seq_exprs));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$iter__12312__auto__),(function (){var x__7243__auto__ = cljs.core.second.call(null,seq_exprs);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
});

cljs.core$macros.for$.cljs$lang$macro = true;
/**
 * Repeatedly executes body (presumably for side-effects) with
 *   bindings and filtering as provided by "for".  Does not retain
 *   the head of the sequence. Returns nil.
 */
cljs.core$macros.doseq = (function cljs$core$macros$doseq(var_args){
var args__7491__auto__ = [];
var len__7484__auto___12483 = arguments.length;
var i__7485__auto___12484 = (0);
while(true){
if((i__7485__auto___12484 < len__7484__auto___12483)){
args__7491__auto__.push((arguments[i__7485__auto___12484]));

var G__12485 = (i__7485__auto___12484 + (1));
i__7485__auto___12484 = G__12485;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((3) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.doseq.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7492__auto__);
});

cljs.core$macros.doseq.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,seq_exprs,body){
if(cljs.core.vector_QMARK_.call(null,seq_exprs)){
} else {
throw cljs.core.ex_info.call(null,"doseq requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,seq_exprs))){
} else {
throw cljs.core.ex_info.call(null,"doseq requires an even number of forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var err = (function() { 
var G__12486__delegate = function (msg){
throw cljs.core.ex_info.call(null,cljs.core.apply.call(null,cljs.core.str,msg),cljs.core.PersistentArrayMap.EMPTY);
};
var G__12486 = function (var_args){
var msg = null;
if (arguments.length > 0) {
var G__12487__i = 0, G__12487__a = new Array(arguments.length -  0);
while (G__12487__i < G__12487__a.length) {G__12487__a[G__12487__i] = arguments[G__12487__i + 0]; ++G__12487__i;}
  msg = new cljs.core.IndexedSeq(G__12487__a,0);
} 
return G__12486__delegate.call(this,msg);};
G__12486.cljs$lang$maxFixedArity = 0;
G__12486.cljs$lang$applyTo = (function (arglist__12488){
var msg = cljs.core.seq(arglist__12488);
return G__12486__delegate(msg);
});
G__12486.cljs$core$IFn$_invoke$arity$variadic = G__12486__delegate;
return G__12486;
})()
;
var step = ((function (err){
return (function cljs$core$macros$step(recform,exprs){
if(cljs.core.not.call(null,exprs)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$do),body)))], null);
} else {
var k = cljs.core.first.call(null,exprs);
var v = cljs.core.second.call(null,exprs);
var seqsym = cljs.core.gensym.call(null,"seq__");
var recform__$1 = (((k instanceof cljs.core.Keyword))?recform:cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$recur),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_next),(function (){var x__7243__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0))))));
var steppair = cljs$core$macros$step.call(null,recform__$1,cljs.core.nnext.call(null,exprs));
var needrec = steppair.call(null,(0));
var subform = steppair.call(null,(1));
if(cljs.core._EQ_.call(null,k,cljs.core.cst$kw$let)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [needrec,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7243__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = subform;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())))], null);
} else {
if(cljs.core._EQ_.call(null,k,cljs.core.cst$kw$while)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_when),(function (){var x__7243__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = subform;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(cljs.core.truth_(needrec)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recform__$1], null):null))))], null);
} else {
if(cljs.core._EQ_.call(null,k,cljs.core.cst$kw$when)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__7243__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$do),(function (){var x__7243__auto__ = subform;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(cljs.core.truth_(needrec)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recform__$1], null):null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = recform__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())))], null);
} else {
if((k instanceof cljs.core.Keyword)){
return err.call(null,"Invalid 'doseq' keyword",k);
} else {
var chunksym = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"chunk__"),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$not_DASH_native], null));
var countsym = cljs.core.gensym.call(null,"count__");
var isym = cljs.core.gensym.call(null,"i__");
var recform_chunk = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$recur),(function (){var x__7243__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = chunksym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = countsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_unchecked_DASH_inc),(function (){var x__7243__auto__ = isym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
var steppair_chunk = cljs$core$macros$step.call(null,recform_chunk,cljs.core.nnext.call(null,exprs));
var subform_chunk = steppair_chunk.call(null,(1));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_loop),(function (){var x__7243__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7243__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_seq),(function (){var x__7243__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = chunksym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__7243__auto__ = countsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),(function (){var x__7243__auto__ = isym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_coercive_DASH_boolean),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__LT_),(function (){var x__7243__auto__ = isym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = countsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7243__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7243__auto__ = k;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__DASH_nth),(function (){var x__7243__auto__ = chunksym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = isym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = subform_chunk;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(cljs.core.truth_(needrec)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recform_chunk], null):null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_when_DASH_let),(function (){var x__7243__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7243__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_seq),(function (){var x__7243__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_chunked_DASH_seq_QMARK_),(function (){var x__7243__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7243__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$c__12478__auto__),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_chunk_DASH_first),(function (){var x__7243__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$recur),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_chunk_DASH_rest),(function (){var x__7243__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$c__12478__auto__),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_count),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$c__12478__auto__))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7243__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7243__auto__ = k;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_first),(function (){var x__7243__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = subform;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(cljs.core.truth_(needrec)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recform__$1], null):null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())))], null);

}
}
}
}
}
});})(err))
;
return cljs.core.nth.call(null,step.call(null,null,cljs.core.seq.call(null,seq_exprs)),(1));
});

cljs.core$macros.doseq.cljs$lang$maxFixedArity = (3);

cljs.core$macros.doseq.cljs$lang$applyTo = (function (seq12479){
var G__12480 = cljs.core.first.call(null,seq12479);
var seq12479__$1 = cljs.core.next.call(null,seq12479);
var G__12481 = cljs.core.first.call(null,seq12479__$1);
var seq12479__$2 = cljs.core.next.call(null,seq12479__$1);
var G__12482 = cljs.core.first.call(null,seq12479__$2);
var seq12479__$3 = cljs.core.next.call(null,seq12479__$2);
return cljs.core$macros.doseq.cljs$core$IFn$_invoke$arity$variadic(G__12480,G__12481,G__12482,seq12479__$3);
});


cljs.core$macros.doseq.cljs$lang$macro = true;
cljs.core$macros.array = (function cljs$core$macros$array(var_args){
var args__7491__auto__ = [];
var len__7484__auto___12492 = arguments.length;
var i__7485__auto___12493 = (0);
while(true){
if((i__7485__auto___12493 < len__7484__auto___12492)){
args__7491__auto__.push((arguments[i__7485__auto___12493]));

var G__12494 = (i__7485__auto___12493 + (1));
i__7485__auto___12493 = G__12494;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((2) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.array.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7492__auto__);
});

cljs.core$macros.array.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,rest){
var xs_str = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,",",cljs.core.take.call(null,cljs.core.count.call(null,rest),cljs.core.repeat.call(null,"~{}"))));
return cljs.core.vary_meta.call(null,cljs.core.list_STAR_.call(null,cljs.core.cst$sym$js_STAR_,[cljs.core.str("["),cljs.core.str(xs_str),cljs.core.str("]")].join(''),rest),cljs.core.assoc,cljs.core.cst$kw$tag,cljs.core.cst$sym$array);
});

cljs.core$macros.array.cljs$lang$maxFixedArity = (2);

cljs.core$macros.array.cljs$lang$applyTo = (function (seq12489){
var G__12490 = cljs.core.first.call(null,seq12489);
var seq12489__$1 = cljs.core.next.call(null,seq12489);
var G__12491 = cljs.core.first.call(null,seq12489__$1);
var seq12489__$2 = cljs.core.next.call(null,seq12489__$1);
return cljs.core$macros.array.cljs$core$IFn$_invoke$arity$variadic(G__12490,G__12491,seq12489__$2);
});


cljs.core$macros.array.cljs$lang$macro = true;
cljs.core$macros.make_array = (function cljs$core$macros$make_array(var_args){
var args12498 = [];
var len__7484__auto___12506 = arguments.length;
var i__7485__auto___12507 = (0);
while(true){
if((i__7485__auto___12507 < len__7484__auto___12506)){
args12498.push((arguments[i__7485__auto___12507]));

var G__12508 = (i__7485__auto___12507 + (1));
i__7485__auto___12507 = G__12508;
continue;
} else {
}
break;
}

var G__12505 = args12498.length;
switch (G__12505) {
case 3:
return cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__7503__auto__ = (new cljs.core.IndexedSeq(args12498.slice((4)),(0),null));
return cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__7503__auto__);

}
});

cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,size){
return cljs.core.vary_meta.call(null,((typeof size === 'number')?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_array),cljs.core.take.call(null,size,cljs.core.repeat.call(null,null))))):cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$js_SLASH_Array$),(function (){var x__7243__auto__ = size;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())))),cljs.core.assoc,cljs.core.cst$kw$tag,cljs.core.cst$sym$array);
});

cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,type,size){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_make_DASH_array),(function (){var x__7243__auto__ = size;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
});

cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,type,size,more_sizes){
return cljs.core.vary_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7243__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$dims__12495__auto__),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_list),more_sizes)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$dimarray__12496__auto__),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_make_DASH_array),(function (){var x__7243__auto__ = size;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_dotimes),(function (){var x__7243__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$i__12497__auto__),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_alength),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$dimarray__12496__auto__))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_aset),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$dimarray__12496__auto__),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$i__12497__auto__),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_apply),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_make_DASH_array),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$dims__12495__auto__))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$dimarray__12496__auto__)))),cljs.core.assoc,cljs.core.cst$kw$tag,cljs.core.cst$sym$array);
});

cljs.core$macros.make_array.cljs$lang$applyTo = (function (seq12499){
var G__12500 = cljs.core.first.call(null,seq12499);
var seq12499__$1 = cljs.core.next.call(null,seq12499);
var G__12501 = cljs.core.first.call(null,seq12499__$1);
var seq12499__$2 = cljs.core.next.call(null,seq12499__$1);
var G__12502 = cljs.core.first.call(null,seq12499__$2);
var seq12499__$3 = cljs.core.next.call(null,seq12499__$2);
var G__12503 = cljs.core.first.call(null,seq12499__$3);
var seq12499__$4 = cljs.core.next.call(null,seq12499__$3);
return cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$variadic(G__12500,G__12501,G__12502,G__12503,seq12499__$4);
});

cljs.core$macros.make_array.cljs$lang$maxFixedArity = (4);


cljs.core$macros.make_array.cljs$lang$macro = true;
cljs.core$macros.list = (function cljs$core$macros$list(var_args){
var args12511 = [];
var len__7484__auto___12518 = arguments.length;
var i__7485__auto___12519 = (0);
while(true){
if((i__7485__auto___12519 < len__7484__auto___12518)){
args12511.push((arguments[i__7485__auto___12519]));

var G__12520 = (i__7485__auto___12519 + (1));
i__7485__auto___12519 = G__12520;
continue;
} else {
}
break;
}

var G__12517 = args12511.length;
switch (G__12517) {
case 2:
return cljs.core$macros.list.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7503__auto__ = (new cljs.core.IndexedSeq(args12511.slice((3)),(0),null));
return cljs.core$macros.list.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7503__auto__);

}
});

cljs.core$macros.list.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.list(cljs.core.cst$sym$$_DASH_EMPTY,cljs.core.cst$sym$cljs$core_SLASH_List);
});

cljs.core$macros.list.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,xs){
if(cljs.core._EQ_.call(null,cljs.core.cst$kw$constant,cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.analyze.call(null,_AMPERSAND_env,x)))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__DASH_conj),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_list),xs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7243__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$x__12510__auto__),(function (){var x__7243__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__DASH_conj),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_list),xs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$x__12510__auto__))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
}
});

cljs.core$macros.list.cljs$lang$applyTo = (function (seq12512){
var G__12513 = cljs.core.first.call(null,seq12512);
var seq12512__$1 = cljs.core.next.call(null,seq12512);
var G__12514 = cljs.core.first.call(null,seq12512__$1);
var seq12512__$2 = cljs.core.next.call(null,seq12512__$1);
var G__12515 = cljs.core.first.call(null,seq12512__$2);
var seq12512__$3 = cljs.core.next.call(null,seq12512__$2);
return cljs.core$macros.list.cljs$core$IFn$_invoke$arity$variadic(G__12513,G__12514,G__12515,seq12512__$3);
});

cljs.core$macros.list.cljs$lang$maxFixedArity = (3);


cljs.core$macros.list.cljs$lang$macro = true;
cljs.core$macros.vector = (function cljs$core$macros$vector(var_args){
var args12522 = [];
var len__7484__auto___12528 = arguments.length;
var i__7485__auto___12529 = (0);
while(true){
if((i__7485__auto___12529 < len__7484__auto___12528)){
args12522.push((arguments[i__7485__auto___12529]));

var G__12530 = (i__7485__auto___12529 + (1));
i__7485__auto___12529 = G__12530;
continue;
} else {
}
break;
}

var G__12527 = args12522.length;
switch (G__12527) {
case 2:
return cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7503__auto__ = (new cljs.core.IndexedSeq(args12522.slice((2)),(0),null));
return cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7503__auto__);

}
});

cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.list(cljs.core.cst$sym$$_DASH_EMPTY,cljs.core.cst$sym$cljs$core_SLASH_PersistentVector);
});

cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
var cnt = cljs.core.count.call(null,xs);
if((cnt < (32))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_PersistentVector$),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__7243__auto__ = cnt;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(5)),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$$_DASH_EMPTY_DASH_NODE),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_PersistentVector))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_array),xs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
} else {
return cljs.core.vary_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$$fromArray),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_PersistentVector),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_array),xs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true)))),cljs.core.assoc,cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core_SLASH_PersistentVector);
}
});

cljs.core$macros.vector.cljs$lang$applyTo = (function (seq12523){
var G__12524 = cljs.core.first.call(null,seq12523);
var seq12523__$1 = cljs.core.next.call(null,seq12523);
var G__12525 = cljs.core.first.call(null,seq12523__$1);
var seq12523__$2 = cljs.core.next.call(null,seq12523__$1);
return cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$variadic(G__12524,G__12525,seq12523__$2);
});

cljs.core$macros.vector.cljs$lang$maxFixedArity = (2);


cljs.core$macros.vector.cljs$lang$macro = true;
cljs.core$macros.array_map = (function cljs$core$macros$array_map(var_args){
var args12534 = [];
var len__7484__auto___12540 = arguments.length;
var i__7485__auto___12541 = (0);
while(true){
if((i__7485__auto___12541 < len__7484__auto___12540)){
args12534.push((arguments[i__7485__auto___12541]));

var G__12542 = (i__7485__auto___12541 + (1));
i__7485__auto___12541 = G__12542;
continue;
} else {
}
break;
}

var G__12539 = args12534.length;
switch (G__12539) {
case 2:
return cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7503__auto__ = (new cljs.core.IndexedSeq(args12534.slice((2)),(0),null));
return cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7503__auto__);

}
});

cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.list(cljs.core.cst$sym$$_DASH_EMPTY,cljs.core.cst$sym$cljs$core_SLASH_PersistentArrayMap);
});

cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,kvs){
var keys = cljs.core.map.call(null,cljs.core.first,cljs.core.partition.call(null,(2),kvs));
if((cljs.core.every_QMARK_.call(null,((function (keys){
return (function (p1__12532_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(p1__12532_SHARP_),cljs.core.cst$kw$constant);
});})(keys))
,cljs.core.map.call(null,((function (keys){
return (function (p1__12533_SHARP_){
return cljs.analyzer.analyze.call(null,_AMPERSAND_env,p1__12533_SHARP_);
});})(keys))
,keys))) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,keys)),cljs.core.count.call(null,keys)))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_PersistentArrayMap$),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__7243__auto__ = (cljs.core.count.call(null,kvs) / (2));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_array),kvs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$$fromArray),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_PersistentArrayMap),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_array),kvs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
}
});

cljs.core$macros.array_map.cljs$lang$applyTo = (function (seq12535){
var G__12536 = cljs.core.first.call(null,seq12535);
var seq12535__$1 = cljs.core.next.call(null,seq12535);
var G__12537 = cljs.core.first.call(null,seq12535__$1);
var seq12535__$2 = cljs.core.next.call(null,seq12535__$1);
return cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$variadic(G__12536,G__12537,seq12535__$2);
});

cljs.core$macros.array_map.cljs$lang$maxFixedArity = (2);


cljs.core$macros.array_map.cljs$lang$macro = true;
cljs.core$macros.hash_map = (function cljs$core$macros$hash_map(var_args){
var args12544 = [];
var len__7484__auto___12550 = arguments.length;
var i__7485__auto___12551 = (0);
while(true){
if((i__7485__auto___12551 < len__7484__auto___12550)){
args12544.push((arguments[i__7485__auto___12551]));

var G__12552 = (i__7485__auto___12551 + (1));
i__7485__auto___12551 = G__12552;
continue;
} else {
}
break;
}

var G__12549 = args12544.length;
switch (G__12549) {
case 2:
return cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7503__auto__ = (new cljs.core.IndexedSeq(args12544.slice((2)),(0),null));
return cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7503__auto__);

}
});

cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$$_DASH_EMPTY),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_PersistentHashMap))));
});

cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,kvs){
var pairs = cljs.core.partition.call(null,(2),kvs);
var ks = cljs.core.map.call(null,cljs.core.first,pairs);
var vs = cljs.core.map.call(null,cljs.core.second,pairs);
return cljs.core.vary_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$$fromArrays),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_PersistentHashMap),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_array),ks)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_array),vs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})()))),cljs.core.assoc,cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core_SLASH_PersistentHashMap);
});

cljs.core$macros.hash_map.cljs$lang$applyTo = (function (seq12545){
var G__12546 = cljs.core.first.call(null,seq12545);
var seq12545__$1 = cljs.core.next.call(null,seq12545);
var G__12547 = cljs.core.first.call(null,seq12545__$1);
var seq12545__$2 = cljs.core.next.call(null,seq12545__$1);
return cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$variadic(G__12546,G__12547,seq12545__$2);
});

cljs.core$macros.hash_map.cljs$lang$maxFixedArity = (2);


cljs.core$macros.hash_map.cljs$lang$macro = true;
cljs.core$macros.hash_set = (function cljs$core$macros$hash_set(var_args){
var args12556 = [];
var len__7484__auto___12562 = arguments.length;
var i__7485__auto___12563 = (0);
while(true){
if((i__7485__auto___12563 < len__7484__auto___12562)){
args12556.push((arguments[i__7485__auto___12563]));

var G__12564 = (i__7485__auto___12563 + (1));
i__7485__auto___12563 = G__12564;
continue;
} else {
}
break;
}

var G__12561 = args12556.length;
switch (G__12561) {
case 2:
return cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7503__auto__ = (new cljs.core.IndexedSeq(args12556.slice((2)),(0),null));
return cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7503__auto__);

}
});

cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$$_DASH_EMPTY),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_PersistentHashSet))));
});

cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
if(((cljs.core.count.call(null,xs) <= (8))) && (cljs.core.every_QMARK_.call(null,(function (p1__12554_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(p1__12554_SHARP_),cljs.core.cst$kw$constant);
}),cljs.core.map.call(null,(function (p1__12555_SHARP_){
return cljs.analyzer.analyze.call(null,_AMPERSAND_env,p1__12555_SHARP_);
}),xs))) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,xs)),cljs.core.count.call(null,xs)))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_PersistentHashSet$),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_PersistentArrayMap$),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__7243__auto__ = cljs.core.count.call(null,xs);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_array),cljs.core.interleave.call(null,xs,cljs.core.repeat.call(null,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
} else {
return cljs.core.vary_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$$fromArray),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_PersistentHashSet),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_array),xs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true)))),cljs.core.assoc,cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core_SLASH_PersistentHashSet);
}
});

cljs.core$macros.hash_set.cljs$lang$applyTo = (function (seq12557){
var G__12558 = cljs.core.first.call(null,seq12557);
var seq12557__$1 = cljs.core.next.call(null,seq12557);
var G__12559 = cljs.core.first.call(null,seq12557__$1);
var seq12557__$2 = cljs.core.next.call(null,seq12557__$1);
return cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$variadic(G__12558,G__12559,seq12557__$2);
});

cljs.core$macros.hash_set.cljs$lang$maxFixedArity = (2);


cljs.core$macros.hash_set.cljs$lang$macro = true;
cljs.core$macros.js_obj_STAR_ = (function cljs$core$macros$js_obj_STAR_(kvs){
var kvs_str = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,",",cljs.core.take.call(null,cljs.core.count.call(null,kvs),cljs.core.repeat.call(null,"~{}:~{}"))));
return cljs.core.vary_meta.call(null,cljs.core.list_STAR_.call(null,cljs.core.cst$sym$js_STAR_,[cljs.core.str("{"),cljs.core.str(kvs_str),cljs.core.str("}")].join(''),cljs.core.apply.call(null,cljs.core.concat,kvs)),cljs.core.assoc,cljs.core.cst$kw$tag,cljs.core.cst$sym$object);
});
cljs.core$macros.js_obj = (function cljs$core$macros$js_obj(var_args){
var args__7491__auto__ = [];
var len__7484__auto___12581 = arguments.length;
var i__7485__auto___12582 = (0);
while(true){
if((i__7485__auto___12582 < len__7484__auto___12581)){
args__7491__auto__.push((arguments[i__7485__auto___12582]));

var G__12583 = (i__7485__auto___12582 + (1));
i__7485__auto___12582 = G__12583;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((2) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.js_obj.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7492__auto__);
});

cljs.core$macros.js_obj.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,rest){
var sym_or_str_QMARK_ = (function (x){
return ((x instanceof cljs.core.Symbol)) || (typeof x === 'string');
});
var filter_on_keys = ((function (sym_or_str_QMARK_){
return (function (f,coll){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,((function (sym_or_str_QMARK_){
return (function (p__12569){
var vec__12570 = p__12569;
var k = cljs.core.nth.call(null,vec__12570,(0),null);
var _ = cljs.core.nth.call(null,vec__12570,(1),null);
return f.call(null,k);
});})(sym_or_str_QMARK_))
,coll));
});})(sym_or_str_QMARK_))
;
var kvs = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,(2),rest)));
var sym_pairs = filter_on_keys.call(null,cljs.core.symbol_QMARK_,kvs);
var expr__GT_local = cljs.core.zipmap.call(null,cljs.core.filter.call(null,cljs.core.complement.call(null,sym_or_str_QMARK_),cljs.core.keys.call(null,kvs)),cljs.core.repeatedly.call(null,cljs.core.gensym));
var obj = cljs.core.gensym.call(null,"obj");
if(cljs.core.empty_QMARK_.call(null,rest)){
return cljs.core$macros.js_obj_STAR_.call(null,cljs.core.List.EMPTY);
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7243__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.apply.call(null,cljs.core.concat,clojure.set.map_invert.call(null,expr__GT_local)),(function (){var x__7243__auto__ = obj;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core$macros.js_obj_STAR_.call(null,filter_on_keys.call(null,cljs.core.string_QMARK_,kvs));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),cljs.core.map.call(null,((function (sym_or_str_QMARK_,filter_on_keys,kvs,sym_pairs,expr__GT_local,obj){
return (function (p__12573){
var vec__12574 = p__12573;
var k = cljs.core.nth.call(null,vec__12574,(0),null);
var v = cljs.core.nth.call(null,vec__12574,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_aset),(function (){var x__7243__auto__ = obj;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = k;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
});})(sym_or_str_QMARK_,filter_on_keys,kvs,sym_pairs,expr__GT_local,obj))
,sym_pairs),cljs.core.map.call(null,((function (sym_or_str_QMARK_,filter_on_keys,kvs,sym_pairs,expr__GT_local,obj){
return (function (p__12577){
var vec__12578 = p__12577;
var k = cljs.core.nth.call(null,vec__12578,(0),null);
var v = cljs.core.nth.call(null,vec__12578,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_aset),(function (){var x__7243__auto__ = obj;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.get.call(null,kvs,k);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
});})(sym_or_str_QMARK_,filter_on_keys,kvs,sym_pairs,expr__GT_local,obj))
,expr__GT_local),(function (){var x__7243__auto__ = obj;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
}
});

cljs.core$macros.js_obj.cljs$lang$maxFixedArity = (2);

cljs.core$macros.js_obj.cljs$lang$applyTo = (function (seq12566){
var G__12567 = cljs.core.first.call(null,seq12566);
var seq12566__$1 = cljs.core.next.call(null,seq12566);
var G__12568 = cljs.core.first.call(null,seq12566__$1);
var seq12566__$2 = cljs.core.next.call(null,seq12566__$1);
return cljs.core$macros.js_obj.cljs$core$IFn$_invoke$arity$variadic(G__12567,G__12568,seq12566__$2);
});


cljs.core$macros.js_obj.cljs$lang$macro = true;
cljs.core$macros.alength = (function cljs$core$macros$alength(_AMPERSAND_form,_AMPERSAND_env,a){
return cljs.core.vary_meta.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__7243__auto__ = a;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),"~{}.length"),cljs.core.cst$sym$js_STAR_),cljs.core.assoc,cljs.core.cst$kw$tag,cljs.core.cst$sym$number);
});

cljs.core$macros.alength.cljs$lang$macro = true;
/**
 * Maps an expression across an array a, using an index named idx, and
 *   return value named ret, initialized to a clone of a, then setting
 *   each element of ret to the evaluation of expr, returning the new
 *   array ret.
 */
cljs.core$macros.amap = (function cljs$core$macros$amap(_AMPERSAND_form,_AMPERSAND_env,a,idx,ret,expr){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7243__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$a__12584__auto__),(function (){var x__7243__auto__ = a;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = ret;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_aclone),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$a__12584__auto__))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_loop),(function (){var x__7243__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7243__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__LT_),(function (){var x__7243__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_alength),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$a__12584__auto__))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$do),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_aset),(function (){var x__7243__auto__ = ret;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$recur),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_inc),(function (){var x__7243__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = ret;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
});

cljs.core$macros.amap.cljs$lang$macro = true;
/**
 * Reduces an expression across an array a, using an index named idx,
 *   and return value named ret, initialized to init, setting ret to the
 *   evaluation of expr at each step, returning ret.
 */
cljs.core$macros.areduce = (function cljs$core$macros$areduce(_AMPERSAND_form,_AMPERSAND_env,a,idx,ret,init,expr){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7243__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$a__12585__auto__),(function (){var x__7243__auto__ = a;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_loop),(function (){var x__7243__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7243__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),(function (){var x__7243__auto__ = ret;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = init;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__LT_),(function (){var x__7243__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_alength),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$a__12585__auto__))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$recur),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_inc),(function (){var x__7243__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = ret;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
});

cljs.core$macros.areduce.cljs$lang$macro = true;
/**
 * bindings => name n
 * 
 *   Repeatedly executes body (presumably for side-effects) with name
 *   bound to integers from 0 through n-1.
 */
cljs.core$macros.dotimes = (function cljs$core$macros$dotimes(var_args){
var args__7491__auto__ = [];
var len__7484__auto___12591 = arguments.length;
var i__7485__auto___12592 = (0);
while(true){
if((i__7485__auto___12592 < len__7484__auto___12591)){
args__7491__auto__.push((arguments[i__7485__auto___12592]));

var G__12593 = (i__7485__auto___12592 + (1));
i__7485__auto___12592 = G__12593;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((3) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.dotimes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7492__auto__);
});

cljs.core$macros.dotimes.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
var i = cljs.core.first.call(null,bindings);
var n = cljs.core.second.call(null,bindings);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7243__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$n__12586__auto__),(function (){var x__7243__auto__ = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_loop),(function (){var x__7243__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7243__auto__ = i;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_when),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__LT_),(function (){var x__7243__auto__ = i;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$n__12586__auto__))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),body,(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$recur),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_inc),(function (){var x__7243__auto__ = i;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
});

cljs.core$macros.dotimes.cljs$lang$maxFixedArity = (3);

cljs.core$macros.dotimes.cljs$lang$applyTo = (function (seq12587){
var G__12588 = cljs.core.first.call(null,seq12587);
var seq12587__$1 = cljs.core.next.call(null,seq12587);
var G__12589 = cljs.core.first.call(null,seq12587__$1);
var seq12587__$2 = cljs.core.next.call(null,seq12587__$1);
var G__12590 = cljs.core.first.call(null,seq12587__$2);
var seq12587__$3 = cljs.core.next.call(null,seq12587__$2);
return cljs.core$macros.dotimes.cljs$core$IFn$_invoke$arity$variadic(G__12588,G__12589,G__12590,seq12587__$3);
});


cljs.core$macros.dotimes.cljs$lang$macro = true;
/**
 * Throws an exception if the given option map contains keys not listed
 *   as valid, else returns nil.
 */
cljs.core$macros.check_valid_options = (function cljs$core$macros$check_valid_options(var_args){
var args__7491__auto__ = [];
var len__7484__auto___12597 = arguments.length;
var i__7485__auto___12598 = (0);
while(true){
if((i__7485__auto___12598 < len__7484__auto___12597)){
args__7491__auto__.push((arguments[i__7485__auto___12598]));

var G__12599 = (i__7485__auto___12598 + (1));
i__7485__auto___12598 = G__12599;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((1) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((1)),(0),null)):null);
return cljs.core$macros.check_valid_options.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7492__auto__);
});

cljs.core$macros.check_valid_options.cljs$core$IFn$_invoke$arity$variadic = (function (options,valid_keys){
if(cljs.core.seq.call(null,cljs.core.apply.call(null,cljs.core.disj,cljs.core.apply.call(null,cljs.core.hash_set,cljs.core.keys.call(null,options)),valid_keys))){
throw cljs.core.apply.call(null,cljs.core.str,"Only these options are valid: ",cljs.core.first.call(null,valid_keys),cljs.core.map.call(null,(function (p1__12594_SHARP_){
return [cljs.core.str(", "),cljs.core.str(p1__12594_SHARP_)].join('');
}),cljs.core.rest.call(null,valid_keys)));
} else {
return null;
}
});

cljs.core$macros.check_valid_options.cljs$lang$maxFixedArity = (1);

cljs.core$macros.check_valid_options.cljs$lang$applyTo = (function (seq12595){
var G__12596 = cljs.core.first.call(null,seq12595);
var seq12595__$1 = cljs.core.next.call(null,seq12595);
return cljs.core$macros.check_valid_options.cljs$core$IFn$_invoke$arity$variadic(G__12596,seq12595__$1);
});

/**
 * Creates a new multimethod with the associated dispatch function.
 *   The docstring and attribute-map are optional.
 * 
 *   Options are key-value pairs and may be one of:
 *  :default    the default dispatch value, defaults to :default
 *  :hierarchy  the isa? hierarchy to use for dispatching
 *              defaults to the global hierarchy
 */
cljs.core$macros.defmulti = (function cljs$core$macros$defmulti(var_args){
var args__7491__auto__ = [];
var len__7484__auto___12609 = arguments.length;
var i__7485__auto___12610 = (0);
while(true){
if((i__7485__auto___12610 < len__7484__auto___12609)){
args__7491__auto__.push((arguments[i__7485__auto___12610]));

var G__12611 = (i__7485__auto___12610 + (1));
i__7485__auto___12610 = G__12611;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((3) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.defmulti.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7492__auto__);
});

cljs.core$macros.defmulti.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,mm_name,options){
var docstring = ((typeof cljs.core.first.call(null,options) === 'string')?cljs.core.first.call(null,options):null);
var options__$1 = ((typeof cljs.core.first.call(null,options) === 'string')?cljs.core.next.call(null,options):options);
var m = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,options__$1)))?cljs.core.first.call(null,options__$1):cljs.core.PersistentArrayMap.EMPTY);
var options__$2 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,options__$1)))?cljs.core.next.call(null,options__$1):options__$1);
var dispatch_fn = cljs.core.first.call(null,options__$2);
var options__$3 = cljs.core.next.call(null,options__$2);
var m__$1 = (cljs.core.truth_(docstring)?cljs.core.assoc.call(null,m,cljs.core.cst$kw$doc,docstring):m);
var m__$2 = (cljs.core.truth_(cljs.core.meta.call(null,mm_name))?cljs.core.conj.call(null,cljs.core.meta.call(null,mm_name),m__$1):m__$1);
var mm_ns = [cljs.core.str(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env)))].join('');
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,options__$3),(1))){
throw (new Error("The syntax for defmulti has changed. Example: (defmulti name dispatch-fn :default dispatch-value)"));
} else {
}

var options__$4 = cljs.core.apply.call(null,cljs.core.hash_map,options__$3);
var default$ = cljs.core.get.call(null,options__$4,cljs.core.cst$kw$default,cljs.core.cst$kw$default);
cljs.core$macros.check_valid_options.call(null,options__$4,cljs.core.cst$kw$default,cljs.core.cst$kw$hierarchy);

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_defonce),(function (){var x__7243__auto__ = cljs.core.with_meta.call(null,mm_name,m__$2);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7243__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$method_DASH_table__12600__auto__),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_atom),(function (){var x__7243__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$prefer_DASH_table__12601__auto__),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_atom),(function (){var x__7243__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$method_DASH_cache__12602__auto__),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_atom),(function (){var x__7243__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cached_DASH_hierarchy__12603__auto__),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_atom),(function (){var x__7243__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$hierarchy__12604__auto__),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_get),(function (){var x__7243__auto__ = options__$4;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$kw$hierarchy),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_get_DASH_global_DASH_hierarchy))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_MultiFn$),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_symbol),(function (){var x__7243__auto__ = mm_ns;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.name.call(null,mm_name);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = dispatch_fn;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = default$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$hierarchy__12604__auto__),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$method_DASH_table__12600__auto__),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$prefer_DASH_table__12601__auto__),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$method_DASH_cache__12602__auto__),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cached_DASH_hierarchy__12603__auto__))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
});

cljs.core$macros.defmulti.cljs$lang$maxFixedArity = (3);

cljs.core$macros.defmulti.cljs$lang$applyTo = (function (seq12605){
var G__12606 = cljs.core.first.call(null,seq12605);
var seq12605__$1 = cljs.core.next.call(null,seq12605);
var G__12607 = cljs.core.first.call(null,seq12605__$1);
var seq12605__$2 = cljs.core.next.call(null,seq12605__$1);
var G__12608 = cljs.core.first.call(null,seq12605__$2);
var seq12605__$3 = cljs.core.next.call(null,seq12605__$2);
return cljs.core$macros.defmulti.cljs$core$IFn$_invoke$arity$variadic(G__12606,G__12607,G__12608,seq12605__$3);
});


cljs.core$macros.defmulti.cljs$lang$macro = true;
/**
 * Creates and installs a new method of multimethod associated with dispatch-value. 
 */
cljs.core$macros.defmethod = (function cljs$core$macros$defmethod(var_args){
var args__7491__auto__ = [];
var len__7484__auto___12617 = arguments.length;
var i__7485__auto___12618 = (0);
while(true){
if((i__7485__auto___12618 < len__7484__auto___12617)){
args__7491__auto__.push((arguments[i__7485__auto___12618]));

var G__12619 = (i__7485__auto___12618 + (1));
i__7485__auto___12618 = G__12619;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((4) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.defmethod.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__7492__auto__);
});

cljs.core$macros.defmethod.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,multifn,dispatch_val,fn_tail){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__DASH_add_DASH_method),(function (){var x__7243__auto__ = cljs.core.with_meta.call(null,multifn,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core_SLASH_MultiFn], null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = dispatch_val;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),fn_tail)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
});

cljs.core$macros.defmethod.cljs$lang$maxFixedArity = (4);

cljs.core$macros.defmethod.cljs$lang$applyTo = (function (seq12612){
var G__12613 = cljs.core.first.call(null,seq12612);
var seq12612__$1 = cljs.core.next.call(null,seq12612);
var G__12614 = cljs.core.first.call(null,seq12612__$1);
var seq12612__$2 = cljs.core.next.call(null,seq12612__$1);
var G__12615 = cljs.core.first.call(null,seq12612__$2);
var seq12612__$3 = cljs.core.next.call(null,seq12612__$2);
var G__12616 = cljs.core.first.call(null,seq12612__$3);
var seq12612__$4 = cljs.core.next.call(null,seq12612__$3);
return cljs.core$macros.defmethod.cljs$core$IFn$_invoke$arity$variadic(G__12613,G__12614,G__12615,G__12616,seq12612__$4);
});


cljs.core$macros.defmethod.cljs$lang$macro = true;
/**
 * Evaluates expr and prints the time it took. Returns the value of expr.
 */
cljs.core$macros.time = (function cljs$core$macros$time(_AMPERSAND_form,_AMPERSAND_env,expr){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7243__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$start__12620__auto__),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_system_DASH_time))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$ret__12621__auto__),(function (){var x__7243__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_prn),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_str),cljs.core._conj.call(null,cljs.core.List.EMPTY,"Elapsed time: "),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$$toFixed),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__DASH_),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_system_DASH_time))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$start__12620__auto__))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(6)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY," msecs"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$ret__12621__auto__))));
});

cljs.core$macros.time.cljs$lang$macro = true;
/**
 * Runs expr iterations times in the context of a let expression with
 *   the given bindings, then prints out the bindings and the expr
 *   followed by number of iterations and total time. The optional
 *   argument print-fn, defaulting to println, sets function used to
 *   print the result. expr's string representation will be produced
 *   using pr-str in any case.
 */
cljs.core$macros.simple_benchmark = (function cljs$core$macros$simple_benchmark(var_args){
var args__7491__auto__ = [];
var len__7484__auto___12636 = arguments.length;
var i__7485__auto___12637 = (0);
while(true){
if((i__7485__auto___12637 < len__7484__auto___12636)){
args__7491__auto__.push((arguments[i__7485__auto___12637]));

var G__12638 = (i__7485__auto___12637 + (1));
i__7485__auto___12637 = G__12638;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((5) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((5)),(0),null)):null);
return cljs.core$macros.simple_benchmark.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__7492__auto__);
});

cljs.core$macros.simple_benchmark.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,expr,iterations,p__12633){
var map__12634 = p__12633;
var map__12634__$1 = ((((!((map__12634 == null)))?((((map__12634.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12634.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12634):map__12634);
var print_fn = cljs.core.get.call(null,map__12634__$1,cljs.core.cst$kw$print_DASH_fn,cljs.core.cst$sym$println);
var bs_str = cljs.core.pr_str.call(null,bindings);
var expr_str = cljs.core.pr_str.call(null,expr);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7243__auto__ = bindings;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7243__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$start__12622__auto__),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$$getTime),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$js_SLASH_Date$))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$ret__12623__auto__),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_dotimes),(function (){var x__7243__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$___12624__auto__),(function (){var x__7243__auto__ = iterations;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$end__12625__auto__),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$$getTime),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$js_SLASH_Date$))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$elapsed__12626__auto__),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__DASH_),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$end__12625__auto__),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$start__12622__auto__))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7243__auto__ = print_fn;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_str),(function (){var x__7243__auto__ = bs_str;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,", "),(function (){var x__7243__auto__ = expr_str;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,", "),(function (){var x__7243__auto__ = iterations;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY," runs, "),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$elapsed__12626__auto__),cljs.core._conj.call(null,cljs.core.List.EMPTY," msecs"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
});

cljs.core$macros.simple_benchmark.cljs$lang$maxFixedArity = (5);

cljs.core$macros.simple_benchmark.cljs$lang$applyTo = (function (seq12627){
var G__12628 = cljs.core.first.call(null,seq12627);
var seq12627__$1 = cljs.core.next.call(null,seq12627);
var G__12629 = cljs.core.first.call(null,seq12627__$1);
var seq12627__$2 = cljs.core.next.call(null,seq12627__$1);
var G__12630 = cljs.core.first.call(null,seq12627__$2);
var seq12627__$3 = cljs.core.next.call(null,seq12627__$2);
var G__12631 = cljs.core.first.call(null,seq12627__$3);
var seq12627__$4 = cljs.core.next.call(null,seq12627__$3);
var G__12632 = cljs.core.first.call(null,seq12627__$4);
var seq12627__$5 = cljs.core.next.call(null,seq12627__$4);
return cljs.core$macros.simple_benchmark.cljs$core$IFn$_invoke$arity$variadic(G__12628,G__12629,G__12630,G__12631,G__12632,seq12627__$5);
});


cljs.core$macros.simple_benchmark.cljs$lang$macro = true;
cljs.core$macros.cs = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.gensym,cljs.core.str,cljs.core.char$),cljs.core.range.call(null,(97),(118))));
cljs.core$macros.gen_apply_to_helper = (function cljs$core$macros$gen_apply_to_helper(var_args){
var args12639 = [];
var len__7484__auto___12642 = arguments.length;
var i__7485__auto___12643 = (0);
while(true){
if((i__7485__auto___12643 < len__7484__auto___12642)){
args12639.push((arguments[i__7485__auto___12643]));

var G__12644 = (i__7485__auto___12643 + (1));
i__7485__auto___12643 = G__12644;
continue;
} else {
}
break;
}

var G__12641 = args12639.length;
switch (G__12641) {
case 0:
return cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12639.length)].join('')));

}
});

cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core$macros.gen_apply_to_helper.call(null,(1));
});

cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$1 = (function (n){
var prop = cljs.core.symbol.call(null,[cljs.core.str("-cljs$core$IFn$_invoke$arity$"),cljs.core.str(n)].join(''));
var f = cljs.core.symbol.call(null,[cljs.core.str("cljs$core$IFn$_invoke$arity$"),cljs.core.str(n)].join(''));
if((n <= (20))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7243__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7243__auto__ = cljs.core$macros.cs.call(null,(n - (1)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__DASH_first),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$args))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$args),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__DASH_rest),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$args))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__EQ__EQ_),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$argc),(function (){var x__7243__auto__ = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$f),(function (){var x__7243__auto__ = prop;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$f),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7243__auto__ = f;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),cljs.core.take.call(null,n,cljs.core$macros.cs))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$f),cljs.core.take.call(null,n,cljs.core$macros.cs))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core$macros.gen_apply_to_helper.call(null,(n + (1)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$throw),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$js_SLASH_Error$),cljs.core._conj.call(null,cljs.core.List.EMPTY,"Only up to 20 arguments supported on functions"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
}
});

cljs.core$macros.gen_apply_to_helper.cljs$lang$maxFixedArity = 1;

cljs.core$macros.gen_apply_to = (function cljs$core$macros$gen_apply_to(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$do),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$_STAR_unchecked_DASH_if_STAR_),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_defn),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$apply_DASH_to),(function (){var x__7243__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$f),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$argc),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$args)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7243__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$args),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_seq),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$args))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_zero_QMARK_),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$argc))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$f))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core$macros.gen_apply_to_helper.call(null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$_STAR_unchecked_DASH_if_STAR_),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
});

cljs.core$macros.gen_apply_to.cljs$lang$macro = true;
/**
 * Evaluates exprs in a context in which *print-fn* is bound to .append
 *   on a fresh StringBuffer.  Returns the string created by any nested
 *   printing calls.
 */
cljs.core$macros.with_out_str = (function cljs$core$macros$with_out_str(var_args){
var args__7491__auto__ = [];
var len__7484__auto___12651 = arguments.length;
var i__7485__auto___12652 = (0);
while(true){
if((i__7485__auto___12652 < len__7484__auto___12651)){
args__7491__auto__.push((arguments[i__7485__auto___12652]));

var G__12653 = (i__7485__auto___12652 + (1));
i__7485__auto___12652 = G__12653;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((2) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.with_out_str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7492__auto__);
});

cljs.core$macros.with_out_str.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7243__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$sb__12646__auto__),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$js_SLASH_goog$string$StringBuffer$))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_binding),(function (){var x__7243__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__STAR_print_DASH_newline_STAR_),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__STAR_print_DASH_fn_STAR_),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),(function (){var x__7243__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$x__12647__auto__)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$$append),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$sb__12646__auto__),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$x__12647__auto__))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_str),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$sb__12646__auto__))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
});

cljs.core$macros.with_out_str.cljs$lang$maxFixedArity = (2);

cljs.core$macros.with_out_str.cljs$lang$applyTo = (function (seq12648){
var G__12649 = cljs.core.first.call(null,seq12648);
var seq12648__$1 = cljs.core.next.call(null,seq12648);
var G__12650 = cljs.core.first.call(null,seq12648__$1);
var seq12648__$2 = cljs.core.next.call(null,seq12648__$1);
return cljs.core$macros.with_out_str.cljs$core$IFn$_invoke$arity$variadic(G__12649,G__12650,seq12648__$2);
});


cljs.core$macros.with_out_str.cljs$lang$macro = true;
/**
 * Expands to code which yields a lazy sequence of the concatenation
 *   of the supplied colls.  Each coll expr is not evaluated until it is
 *   needed.
 * 
 *   (lazy-cat xs ys zs) === (concat (lazy-seq xs) (lazy-seq ys) (lazy-seq zs))
 */
cljs.core$macros.lazy_cat = (function cljs$core$macros$lazy_cat(var_args){
var args__7491__auto__ = [];
var len__7484__auto___12658 = arguments.length;
var i__7485__auto___12659 = (0);
while(true){
if((i__7485__auto___12659 < len__7484__auto___12658)){
args__7491__auto__.push((arguments[i__7485__auto___12659]));

var G__12660 = (i__7485__auto___12659 + (1));
i__7485__auto___12659 = G__12660;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((2) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.lazy_cat.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7492__auto__);
});

cljs.core$macros.lazy_cat.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,colls){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_concat),cljs.core.map.call(null,(function (p1__12654_SHARP_){
return cljs.core._conj.call(null,(function (){var x__7243__auto__ = p1__12654_SHARP_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),cljs.core.cst$sym$cljs$core$macros_SLASH_lazy_DASH_seq);
}),colls))));
});

cljs.core$macros.lazy_cat.cljs$lang$maxFixedArity = (2);

cljs.core$macros.lazy_cat.cljs$lang$applyTo = (function (seq12655){
var G__12656 = cljs.core.first.call(null,seq12655);
var seq12655__$1 = cljs.core.next.call(null,seq12655);
var G__12657 = cljs.core.first.call(null,seq12655__$1);
var seq12655__$2 = cljs.core.next.call(null,seq12655__$1);
return cljs.core$macros.lazy_cat.cljs$core$IFn$_invoke$arity$variadic(G__12656,G__12657,seq12655__$2);
});


cljs.core$macros.lazy_cat.cljs$lang$macro = true;
cljs.core$macros.js_str = (function cljs$core$macros$js_str(_AMPERSAND_form,_AMPERSAND_env,s){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__7243__auto__ = s;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),"''+~{}"),cljs.core.cst$sym$js_STAR_);
});

cljs.core$macros.js_str.cljs$lang$macro = true;
cljs.core$macros.es6_iterable = (function cljs$core$macros$es6_iterable(_AMPERSAND_form,_AMPERSAND_env,ty){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_aset),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$$_DASH_prototype),(function (){var x__7243__auto__ = ty;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_ITER_SYMBOL),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),(function (){var x__7243__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_this_DASH_as),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$this__12661__auto__),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_es6_DASH_iterator),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$this__12661__auto__))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
});

cljs.core$macros.es6_iterable.cljs$lang$macro = true;
/**
 * Returns a map of the intern mappings for the namespace.
 */
cljs.core$macros.ns_interns = (function cljs$core$macros$ns_interns(_AMPERSAND_form,_AMPERSAND_env,p__12662){
var vec__12674 = p__12662;
var quote = cljs.core.nth.call(null,vec__12674,(0),null);
var ns = cljs.core.nth.call(null,vec__12674,(1),null);
if((cljs.core._EQ_.call(null,quote,cljs.core.cst$sym$quote)) && ((ns instanceof cljs.core.Symbol))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Argument to ns-interns must be a quoted symbol"),cljs.core.str("\n"),cljs.core.str("(core/and (= quote (quote quote)) (core/symbol? ns))")].join('')));
}

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_into),(function (){var x__7243__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,((function (vec__12674,quote,ns){
return (function (p__12681){
var vec__12682 = p__12681;
var sym = cljs.core.nth.call(null,vec__12682,(0),null);
var _ = cljs.core.nth.call(null,vec__12682,(1),null);
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_symbol),(function (){var x__7243__auto__ = cljs.core.name.call(null,sym);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$var),(function (){var x__7243__auto__ = cljs.core.symbol.call(null,cljs.core.name.call(null,ns),cljs.core.name.call(null,sym));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})()))));
});})(vec__12674,quote,ns))
,cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,ns,cljs.core.cst$kw$defs], null)))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
});

cljs.core$macros.ns_interns.cljs$lang$macro = true;
/**
 * Removes the mappings for the symbol from the namespace.
 */
cljs.core$macros.ns_unmap = (function cljs$core$macros$ns_unmap(_AMPERSAND_form,_AMPERSAND_env,p__12685,p__12686){
var vec__12693 = p__12685;
var quote0 = cljs.core.nth.call(null,vec__12693,(0),null);
var ns = cljs.core.nth.call(null,vec__12693,(1),null);
var vec__12696 = p__12686;
var quote1 = cljs.core.nth.call(null,vec__12696,(0),null);
var sym = cljs.core.nth.call(null,vec__12696,(1),null);
if((cljs.core._EQ_.call(null,quote0,cljs.core.cst$sym$quote)) && ((ns instanceof cljs.core.Symbol)) && (cljs.core._EQ_.call(null,quote1,cljs.core.cst$sym$quote)) && ((sym instanceof cljs.core.Symbol))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Arguments to ns-unmap must be quoted symbols"),cljs.core.str("\n"),cljs.core.str("(core/and (= quote0 (quote quote)) (core/symbol? ns) (= quote1 (quote quote)) (core/symbol? sym))")].join('')));
}

cljs.core.swap_BANG_.call(null,cljs.env._STAR_compiler_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,ns,cljs.core.cst$kw$defs], null),cljs.core.dissoc,sym);

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_js_DASH_delete),(function (){var x__7243__auto__ = cljs.compiler.munge.call(null,ns);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.compiler.munge.call(null,[cljs.core.str(sym)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
});

cljs.core$macros.ns_unmap.cljs$lang$macro = true;
/**
 * Non-atomically swaps the value of the volatile as if:
 * (apply f current-value-of-vol args). Returns the value that
 * was swapped in.
 */
cljs.core$macros.vswap_BANG_ = (function cljs$core$macros$vswap_BANG_(var_args){
var args__7491__auto__ = [];
var len__7484__auto___12704 = arguments.length;
var i__7485__auto___12705 = (0);
while(true){
if((i__7485__auto___12705 < len__7484__auto___12704)){
args__7491__auto__.push((arguments[i__7485__auto___12705]));

var G__12706 = (i__7485__auto___12705 + (1));
i__7485__auto___12705 = G__12706;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((4) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.vswap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__7492__auto__);
});

cljs.core$macros.vswap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,vol,f,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__DASH_vreset_BANG_),(function (){var x__7243__auto__ = vol;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7243__auto__ = f;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__DASH_deref),(function (){var x__7243__auto__ = vol;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),args)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
});

cljs.core$macros.vswap_BANG_.cljs$lang$maxFixedArity = (4);

cljs.core$macros.vswap_BANG_.cljs$lang$applyTo = (function (seq12699){
var G__12700 = cljs.core.first.call(null,seq12699);
var seq12699__$1 = cljs.core.next.call(null,seq12699);
var G__12701 = cljs.core.first.call(null,seq12699__$1);
var seq12699__$2 = cljs.core.next.call(null,seq12699__$1);
var G__12702 = cljs.core.first.call(null,seq12699__$2);
var seq12699__$3 = cljs.core.next.call(null,seq12699__$2);
var G__12703 = cljs.core.first.call(null,seq12699__$3);
var seq12699__$4 = cljs.core.next.call(null,seq12699__$3);
return cljs.core$macros.vswap_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__12700,G__12701,G__12702,G__12703,seq12699__$4);
});


cljs.core$macros.vswap_BANG_.cljs$lang$macro = true;
cljs.core$macros.locking = (function cljs$core$macros$locking(var_args){
var args__7491__auto__ = [];
var len__7484__auto___12711 = arguments.length;
var i__7485__auto___12712 = (0);
while(true){
if((i__7485__auto___12712 < len__7484__auto___12711)){
args__7491__auto__.push((arguments[i__7485__auto___12712]));

var G__12713 = (i__7485__auto___12712 + (1));
i__7485__auto___12712 = G__12713;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((3) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.locking.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7492__auto__);
});

cljs.core$macros.locking.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$do),forms)));
});

cljs.core$macros.locking.cljs$lang$maxFixedArity = (3);

cljs.core$macros.locking.cljs$lang$applyTo = (function (seq12707){
var G__12708 = cljs.core.first.call(null,seq12707);
var seq12707__$1 = cljs.core.next.call(null,seq12707);
var G__12709 = cljs.core.first.call(null,seq12707__$1);
var seq12707__$2 = cljs.core.next.call(null,seq12707__$1);
var G__12710 = cljs.core.first.call(null,seq12707__$2);
var seq12707__$3 = cljs.core.next.call(null,seq12707__$2);
return cljs.core$macros.locking.cljs$core$IFn$_invoke$arity$variadic(G__12708,G__12709,G__12710,seq12707__$3);
});


cljs.core$macros.locking.cljs$lang$macro = true;
cljs.core$macros.load_file_STAR_ = (function cljs$core$macros$load_file_STAR_(_AMPERSAND_form,_AMPERSAND_env,f){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$js_SLASH_goog),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$nodeGlobalRequire),(function (){var x__7243__auto__ = f;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
});

cljs.core$macros.load_file_STAR_.cljs$lang$macro = true;
/**
 * If form represents a macro form, returns its expansion,
 *   else returns form.
 */
cljs.core$macros.macroexpand_1 = (function cljs$core$macros$macroexpand_1(_AMPERSAND_form,_AMPERSAND_env,quoted){
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,quoted),cljs.core.cst$sym$quote)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Argument to macroexpand-1 must be quoted"),cljs.core.str("\n"),cljs.core.str("(core/= (core/first quoted) (quote quote))")].join('')));
}

var form = cljs.core.second.call(null,quoted);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$quote),(function (){var x__7243__auto__ = cljs.analyzer.macroexpand_1.call(null,_AMPERSAND_env,form);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
});

cljs.core$macros.macroexpand_1.cljs$lang$macro = true;
/**
 * Repeatedly calls macroexpand-1 on form until it no longer
 *   represents a macro form, then returns it.  Note neither
 *   macroexpand-1 nor macroexpand expand macros in subforms.
 */
cljs.core$macros.macroexpand = (function cljs$core$macros$macroexpand(_AMPERSAND_form,_AMPERSAND_env,quoted){
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,quoted),cljs.core.cst$sym$quote)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Argument to macroexpand must be quoted"),cljs.core.str("\n"),cljs.core.str("(core/= (core/first quoted) (quote quote))")].join('')));
}

var form = cljs.core.second.call(null,quoted);
var env = _AMPERSAND_env;
var form__$1 = form;
var form_SINGLEQUOTE_ = cljs.analyzer.macroexpand_1.call(null,env,form__$1);
while(true){
if(!((form__$1 === form_SINGLEQUOTE_))){
var G__12714 = form_SINGLEQUOTE_;
var G__12715 = cljs.analyzer.macroexpand_1.call(null,env,form_SINGLEQUOTE_);
form__$1 = G__12714;
form_SINGLEQUOTE_ = G__12715;
continue;
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$quote),(function (){var x__7243__auto__ = form_SINGLEQUOTE_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
}
break;
}
});

cljs.core$macros.macroexpand.cljs$lang$macro = true;
cljs.core$macros.multi_arity_fn_QMARK_ = (function cljs$core$macros$multi_arity_fn_QMARK_(fdecl){
return ((1) < cljs.core.count.call(null,fdecl));
});
cljs.core$macros.variadic_fn_QMARK_ = (function cljs$core$macros$variadic_fn_QMARK_(fdecl){
var and__6397__auto__ = cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,fdecl));
if(and__6397__auto__){
return cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$_AMPERSAND_,null], null), null),cljs.core.ffirst.call(null,fdecl));
} else {
return and__6397__auto__;
}
});
cljs.core$macros.variadic_fn_STAR_ = (function cljs$core$macros$variadic_fn_STAR_(var_args){
var args12716 = [];
var len__7484__auto___12723 = arguments.length;
var i__7485__auto___12724 = (0);
while(true){
if((i__7485__auto___12724 < len__7484__auto___12723)){
args12716.push((arguments[i__7485__auto___12724]));

var G__12725 = (i__7485__auto___12724 + (1));
i__7485__auto___12724 = G__12725;
continue;
} else {
}
break;
}

var G__12718 = args12716.length;
switch (G__12718) {
case 2:
return cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12716.length)].join('')));

}
});

cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (sym,method){
return cljs.core$macros.variadic_fn_STAR_.call(null,sym,method,true);
});

cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (sym,p__12719,solo){
var vec__12720 = p__12719;
var seq__12721 = cljs.core.seq.call(null,vec__12720);
var first__12722 = cljs.core.first.call(null,seq__12721);
var seq__12721__$1 = cljs.core.next.call(null,seq__12721);
var arglist = first__12722;
var body = seq__12721__$1;
var method = vec__12720;
var sig = cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$_AMPERSAND_,null], null), null),arglist);
var restarg = cljs.core.gensym.call(null,"seq");
var get_delegate = ((function (sig,restarg,vec__12720,seq__12721,first__12722,seq__12721__$1,arglist,body,method){
return (function cljs$core$macros$get_delegate(){
return cljs.core.cst$sym$cljs$core$IFn$_invoke$arity$variadic;
});})(sig,restarg,vec__12720,seq__12721,first__12722,seq__12721__$1,arglist,body,method))
;
var get_delegate_prop = ((function (sig,restarg,vec__12720,seq__12721,first__12722,seq__12721__$1,arglist,body,method){
return (function cljs$core$macros$get_delegate_prop(){
return cljs.core.symbol.call(null,[cljs.core.str("-"),cljs.core.str(get_delegate.call(null))].join(''));
});})(sig,restarg,vec__12720,seq__12721,first__12722,seq__12721__$1,arglist,body,method))
;
var param_bind = ((function (sig,restarg,vec__12720,seq__12721,first__12722,seq__12721__$1,arglist,body,method){
return (function cljs$core$macros$param_bind(param){
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7243__auto__ = param;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7243__auto__ = cljs.core.with_meta.call(null,cljs.core.cst$sym$cljs$core_SLASH_first,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$kw$file),cljs.core._conj.call(null,cljs.core.List.EMPTY,"/Users/clumsyjedi/workspace/clack/out/cljs/core.cljc"),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$kw$line),cljs.core._conj.call(null,cljs.core.List.EMPTY,2764),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$kw$column),cljs.core._conj.call(null,cljs.core.List.EMPTY,49),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$kw$end_DASH_line),cljs.core._conj.call(null,cljs.core.List.EMPTY,2764),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$kw$end_DASH_column),cljs.core._conj.call(null,cljs.core.List.EMPTY,54),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$kw$cljs$analyzer_SLASH_no_DASH_resolve),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7243__auto__ = cljs.core.with_meta.call(null,cljs.core.cst$sym$cljs$core_SLASH_next,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$kw$file),cljs.core._conj.call(null,cljs.core.List.EMPTY,"/Users/clumsyjedi/workspace/clack/out/cljs/core.cljc"),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$kw$line),cljs.core._conj.call(null,cljs.core.List.EMPTY,2765),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$kw$column),cljs.core._conj.call(null,cljs.core.List.EMPTY,51),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$kw$end_DASH_line),cljs.core._conj.call(null,cljs.core.List.EMPTY,2765),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$kw$end_DASH_column),cljs.core._conj.call(null,cljs.core.List.EMPTY,55),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$kw$cljs$analyzer_SLASH_no_DASH_resolve),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})()))));
});})(sig,restarg,vec__12720,seq__12721,first__12722,seq__12721__$1,arglist,body,method))
;
var apply_to = ((function (sig,restarg,vec__12720,seq__12721,first__12722,seq__12721__$1,arglist,body,method){
return (function cljs$core$macros$apply_to(){
if(((1) < cljs.core.count.call(null,sig))){
var params = cljs.core.repeatedly.call(null,(cljs.core.count.call(null,sig) - (1)),cljs.core.gensym);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7243__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7243__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7243__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.mapcat.call(null,param_bind,params)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),(function (){var x__7243__auto__ = sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7243__auto__ = get_delegate.call(null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),params,(function (){var x__7243__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7243__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7243__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),(function (){var x__7243__auto__ = sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7243__auto__ = get_delegate.call(null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_seq),(function (){var x__7243__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
}
});})(sig,restarg,vec__12720,seq__12721,first__12722,seq__12721__$1,arglist,body,method))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$do),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),(function (){var x__7243__auto__ = sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = get_delegate_prop.call(null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7243__auto__ = cljs.core.vec.call(null,sig);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(cljs.core.truth_(solo)?cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),(function (){var x__7243__auto__ = sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$_DASH_cljs$lang$maxFixedArity))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = (cljs.core.count.call(null,sig) - (1));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())))):null),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),(function (){var x__7243__auto__ = sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$_DASH_cljs$lang$applyTo))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = apply_to.call(null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
});

cljs.core$macros.variadic_fn_STAR_.cljs$lang$maxFixedArity = 3;

cljs.core$macros.copy_arguments = (function cljs$core$macros$copy_arguments(_AMPERSAND_form,_AMPERSAND_env,dest){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7243__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$len__12727__auto__),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_alength),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_js_DASH_arguments))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_loop),(function (){var x__7243__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$i__12728__auto__),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_when),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__LT_),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$i__12728__auto__),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$len__12727__auto__))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$$push),(function (){var x__7243__auto__ = dest;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_aget),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_js_DASH_arguments))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$i__12728__auto__))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$recur),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_inc),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$i__12728__auto__))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
});

cljs.core$macros.copy_arguments.cljs$lang$macro = true;
cljs.core$macros.variadic_fn = (function cljs$core$macros$variadic_fn(name,meta,p__12731,emit_var_QMARK_){
var vec__12738 = p__12731;
var vec__12741 = cljs.core.nth.call(null,vec__12738,(0),null);
var seq__12742 = cljs.core.seq.call(null,vec__12741);
var first__12743 = cljs.core.first.call(null,seq__12742);
var seq__12742__$1 = cljs.core.next.call(null,seq__12742);
var arglist = first__12743;
var body = seq__12742__$1;
var method = vec__12741;
var fdecl = vec__12738;
var dest_args = ((function (vec__12738,vec__12741,seq__12742,first__12743,seq__12742__$1,arglist,body,method,fdecl){
return (function cljs$core$macros$variadic_fn_$_dest_args(c){
return cljs.core.map.call(null,((function (vec__12738,vec__12741,seq__12742,first__12743,seq__12742__$1,arglist,body,method,fdecl){
return (function (n){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_aget),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_js_DASH_arguments))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
});})(vec__12738,vec__12741,seq__12742,first__12743,seq__12742__$1,arglist,body,method,fdecl))
,cljs.core.range.call(null,c));
});})(vec__12738,vec__12741,seq__12742,first__12743,seq__12742__$1,arglist,body,method,fdecl))
;
var rname = cljs.core.symbol.call(null,[cljs.core.str(cljs.analyzer._STAR_cljs_ns_STAR_)].join(''),[cljs.core.str(name)].join(''));
var sig = cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$_AMPERSAND_,null], null), null),arglist);
var c_1 = (cljs.core.count.call(null,sig) - (1));
var meta__$1 = cljs.core.assoc.call(null,meta,cljs.core.cst$kw$top_DASH_fn,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$variadic,true,cljs.core.cst$kw$max_DASH_fixed_DASH_arity,c_1,cljs.core.cst$kw$method_DASH_params,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sig], null),cljs.core.cst$kw$arglists,(function (){var x__7243__auto__ = arglist;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),cljs.core.cst$kw$arglists_DASH_meta,cljs.core.doall.call(null,cljs.core.map.call(null,meta,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arglist], null)))], null));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$do),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$def),(function (){var x__7243__auto__ = cljs.core.with_meta.call(null,name,meta__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),(function (){var x__7243__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$var_args)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7243__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$args__12729__auto__),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_array))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_copy_DASH_arguments),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$args__12729__auto__))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7243__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$argseq__12730__auto__),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_when),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__LT_),(function (){var x__7243__auto__ = c_1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_alength),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$args__12729__auto__))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$new),(function (){var x__7243__auto__ = cljs.core.with_meta.call(null,cljs.core.cst$sym$cljs$core_SLASH_IndexedSeq,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$kw$file),cljs.core._conj.call(null,cljs.core.List.EMPTY,"/Users/clumsyjedi/workspace/clack/out/cljs/core.cljc"),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$kw$line),cljs.core._conj.call(null,cljs.core.List.EMPTY,2812),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$kw$column),cljs.core._conj.call(null,cljs.core.List.EMPTY,55),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$kw$end_DASH_line),cljs.core._conj.call(null,cljs.core.List.EMPTY,2812),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$kw$end_DASH_column),cljs.core._conj.call(null,cljs.core.List.EMPTY,75),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$kw$cljs$analyzer_SLASH_no_DASH_resolve),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$$slice),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$args__12729__auto__),(function (){var x__7243__auto__ = c_1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),(function (){var x__7243__auto__ = rname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$IFn$_invoke$arity$variadic),dest_args.call(null,c_1),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$argseq__12730__auto__))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core$macros.variadic_fn_STAR_.call(null,rname,method);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = (cljs.core.truth_(emit_var_QMARK_)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$var),(function (){var x__7243__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})()))):null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
});
cljs.core$macros.multi_arity_fn = (function cljs$core$macros$multi_arity_fn(name,meta,fdecl,emit_var_QMARK_){
var dest_args = (function cljs$core$macros$multi_arity_fn_$_dest_args(c){
return cljs.core.map.call(null,(function (n){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_aget),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_js_DASH_arguments))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
}),cljs.core.range.call(null,c));
});
var fixed_arity = (function cljs$core$macros$multi_arity_fn_$_fixed_arity(rname,sig){
var c = cljs.core.count.call(null,sig);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),(function (){var x__7243__auto__ = rname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7243__auto__ = cljs.core.symbol.call(null,[cljs.core.str("cljs$core$IFn$_invoke$arity$"),cljs.core.str(c)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),dest_args.call(null,c))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())))], null);
});
var fn_method = (function cljs$core$macros$multi_arity_fn_$_fn_method(p__12768){
var vec__12772 = p__12768;
var seq__12773 = cljs.core.seq.call(null,vec__12772);
var first__12774 = cljs.core.first.call(null,seq__12773);
var seq__12773__$1 = cljs.core.next.call(null,seq__12773);
var sig = first__12774;
var body = seq__12773__$1;
var method = vec__12772;
if(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$_AMPERSAND_,null], null), null),sig))){
return cljs.core$macros.variadic_fn_STAR_.call(null,name,method,false);
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),(function (){var x__7243__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.symbol.call(null,[cljs.core.str("-cljs$core$IFn$_invoke$arity$"),cljs.core.str(cljs.core.count.call(null,sig))].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),(function (){var x__7243__auto__ = method;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
}
});
var rname = cljs.core.symbol.call(null,[cljs.core.str(cljs.analyzer._STAR_cljs_ns_STAR_)].join(''),[cljs.core.str(name)].join(''));
var arglists = cljs.core.map.call(null,cljs.core.first,fdecl);
var varsig_QMARK_ = ((function (rname,arglists){
return (function (p1__12744_SHARP_){
return cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$_AMPERSAND_,null], null), null),p1__12744_SHARP_);
});})(rname,arglists))
;
var variadic = cljs.core.boolean$.call(null,cljs.core.some.call(null,varsig_QMARK_,arglists));
var sigs = cljs.core.remove.call(null,varsig_QMARK_,arglists);
var maxfa = cljs.core.apply.call(null,cljs.core.max,cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.count,sigs),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.count.call(null,cljs.core.first.call(null,cljs.core.filter.call(null,varsig_QMARK_,arglists))) - (2))], null)));
var meta__$1 = cljs.core.assoc.call(null,meta,cljs.core.cst$kw$top_DASH_fn,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$variadic,variadic,cljs.core.cst$kw$max_DASH_fixed_DASH_arity,maxfa,cljs.core.cst$kw$method_DASH_params,sigs,cljs.core.cst$kw$arglists,arglists,cljs.core.cst$kw$arglists_DASH_meta,cljs.core.doall.call(null,cljs.core.map.call(null,meta,arglists))], null));
var args_sym = cljs.core.gensym.call(null,"args");
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$do),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$def),(function (){var x__7243__auto__ = cljs.core.with_meta.call(null,name,meta__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),(function (){var x__7243__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$var_args)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7243__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7243__auto__ = args_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_array))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_copy_DASH_arguments),(function (){var x__7243__auto__ = args_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_case),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_alength),(function (){var x__7243__auto__ = args_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),cljs.core.mapcat.call(null,((function (rname,arglists,varsig_QMARK_,variadic,sigs,maxfa,meta__$1,args_sym){
return (function (p1__12745_SHARP_){
return fixed_arity.call(null,rname,p1__12745_SHARP_);
});})(rname,arglists,varsig_QMARK_,variadic,sigs,maxfa,meta__$1,args_sym))
,sigs),(function (){var x__7243__auto__ = ((variadic)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7243__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$argseq__12746__auto__),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$new),(function (){var x__7243__auto__ = cljs.core.with_meta.call(null,cljs.core.cst$sym$cljs$core_SLASH_IndexedSeq,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$kw$file),cljs.core._conj.call(null,cljs.core.List.EMPTY,"/Users/clumsyjedi/workspace/clack/out/cljs/core.cljc"),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$kw$line),cljs.core._conj.call(null,cljs.core.List.EMPTY,2870),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$kw$column),cljs.core._conj.call(null,cljs.core.List.EMPTY,58),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$kw$end_DASH_line),cljs.core._conj.call(null,cljs.core.List.EMPTY,2870),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$kw$end_DASH_column),cljs.core._conj.call(null,cljs.core.List.EMPTY,78),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$kw$cljs$analyzer_SLASH_no_DASH_resolve),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$$slice),(function (){var x__7243__auto__ = args_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = maxfa;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),(function (){var x__7243__auto__ = rname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$IFn$_invoke$arity$variadic),dest_args.call(null,maxfa),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$argseq__12746__auto__))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})()))):(cljs.core.truth_(cljs.core.cst$kw$macro.cljs$core$IFn$_invoke$arity$1(meta__$1))?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$throw),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$js_SLASH_Error$),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_str),cljs.core._conj.call(null,cljs.core.List.EMPTY,"Invalid arity: "),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__DASH_),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_alength),(function (){var x__7243__auto__ = args_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(2)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})()))):cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$throw),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$js_SLASH_Error$),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_str),cljs.core._conj.call(null,cljs.core.List.EMPTY,"Invalid arity: "),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_alength),(function (){var x__7243__auto__ = args_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),cljs.core.map.call(null,fn_method,fdecl),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),(function (){var x__7243__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),(function (){var x__7243__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$_DASH_cljs$lang$maxFixedArity))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = maxfa;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = (cljs.core.truth_(emit_var_QMARK_)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$var),(function (){var x__7243__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})()))):null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})())));
});
/**
 * Same as (def name (core/fn [params* ] exprs*)) or (def
 *  name (core/fn ([params* ] exprs*)+)) with any doc-string or attrs added
 *  to the var metadata. prepost-map defines a map with optional keys
 *  :pre and :post that contain collections of pre or post conditions.
 * @param {...*} var_args
 */
cljs.core$macros.defn = (function() { 
var cljs$core$macros$defn__delegate = function (_AMPERSAND_form,_AMPERSAND_env,name,fdecl){
if((name instanceof cljs.core.Symbol)){
} else {
throw (new Error("First argument to defn must be a symbol"));
}

var m = ((typeof cljs.core.first.call(null,fdecl) === 'string')?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$doc,cljs.core.first.call(null,fdecl)], null):cljs.core.PersistentArrayMap.EMPTY);
var fdecl__$1 = ((typeof cljs.core.first.call(null,fdecl) === 'string')?cljs.core.next.call(null,fdecl):fdecl);
var m__$1 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,fdecl__$1)))?cljs.core.conj.call(null,m,cljs.core.first.call(null,fdecl__$1)):m);
var fdecl__$2 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,fdecl__$1)))?cljs.core.next.call(null,fdecl__$1):fdecl__$1);
var fdecl__$3 = ((cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,fdecl__$2)))?(function (){var x__7243__auto__ = fdecl__$2;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})():fdecl__$2);
var m__$2 = ((cljs.core.map_QMARK_.call(null,cljs.core.last.call(null,fdecl__$3)))?cljs.core.conj.call(null,m__$1,cljs.core.last.call(null,fdecl__$3)):m__$1);
var fdecl__$4 = ((cljs.core.map_QMARK_.call(null,cljs.core.last.call(null,fdecl__$3)))?cljs.core.butlast.call(null,fdecl__$3):fdecl__$3);
var m__$3 = cljs.core.conj.call(null,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$arglists,cljs.core._conj.call(null,(function (){var x__7243__auto__ = cljs.core$macros.sigs.call(null,fdecl__$4);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),cljs.core.cst$sym$quote)], null),m__$2);
var m__$4 = cljs.core.conj.call(null,(cljs.core.truth_(cljs.core.meta.call(null,name))?cljs.core.meta.call(null,name):cljs.core.PersistentArrayMap.EMPTY),m__$3);
if(cljs.core.truth_(cljs.core$macros.multi_arity_fn_QMARK_.call(null,fdecl__$4))){
return cljs.core$macros.multi_arity_fn.call(null,name,(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))?cljs.core.update_in.call(null,m__$4,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$jsdoc], null),cljs.core.conj,"@param {...*} var_args"):m__$4),fdecl__$4,cljs.core.cst$kw$def_DASH_emits_DASH_var.cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
} else {
if(cljs.core.truth_(cljs.core$macros.variadic_fn_QMARK_.call(null,fdecl__$4))){
return cljs.core$macros.variadic_fn.call(null,name,(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))?cljs.core.update_in.call(null,m__$4,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$jsdoc], null),cljs.core.conj,"@param {...*} var_args"):m__$4),fdecl__$4,cljs.core.cst$kw$def_DASH_emits_DASH_var.cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
} else {
return cljs.core._conj.call(null,(function (){var x__7243__auto__ = cljs.core.with_meta.call(null,name,m__$4);
return cljs.core._conj.call(null,(function (){var x__7243__auto____$1 = cljs.core.cons.call(null,cljs.core.cst$sym$cljs$core$macros_SLASH_fn,fdecl__$4);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto____$1);
})(),x__7243__auto__);
})(),cljs.core.cst$sym$def);

}
}
};
var cljs$core$macros$defn = function (_AMPERSAND_form,_AMPERSAND_env,name,var_args){
var fdecl = null;
if (arguments.length > 3) {
var G__12775__i = 0, G__12775__a = new Array(arguments.length -  3);
while (G__12775__i < G__12775__a.length) {G__12775__a[G__12775__i] = arguments[G__12775__i + 3]; ++G__12775__i;}
  fdecl = new cljs.core.IndexedSeq(G__12775__a,0);
} 
return cljs$core$macros$defn__delegate.call(this,_AMPERSAND_form,_AMPERSAND_env,name,fdecl);};
cljs$core$macros$defn.cljs$lang$maxFixedArity = 3;
cljs$core$macros$defn.cljs$lang$applyTo = (function (arglist__12776){
var _AMPERSAND_form = cljs.core.first(arglist__12776);
arglist__12776 = cljs.core.next(arglist__12776);
var _AMPERSAND_env = cljs.core.first(arglist__12776);
arglist__12776 = cljs.core.next(arglist__12776);
var name = cljs.core.first(arglist__12776);
var fdecl = cljs.core.rest(arglist__12776);
return cljs$core$macros$defn__delegate(_AMPERSAND_form,_AMPERSAND_env,name,fdecl);
});
cljs$core$macros$defn.cljs$core$IFn$_invoke$arity$variadic = cljs$core$macros$defn__delegate;
return cljs$core$macros$defn;
})()
;
cljs.core$macros.defn.cljs$lang$macro = true;
/**
 * Like defn, but the resulting function name is declared as a
 *   macro and will be used as a macro by the compiler when it is
 *   called.
 */
cljs.core$macros.defmacro = (function cljs$core$macros$defmacro(var_args){
var args__7491__auto__ = [];
var len__7484__auto___12781 = arguments.length;
var i__7485__auto___12782 = (0);
while(true){
if((i__7485__auto___12782 < len__7484__auto___12781)){
args__7491__auto__.push((arguments[i__7485__auto___12782]));

var G__12783 = (i__7485__auto___12782 + (1));
i__7485__auto___12782 = G__12783;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((3) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.defmacro.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7492__auto__);
});

cljs.core$macros.defmacro.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,args){
var prefix = (function (){var p = (function (){var x__7243__auto__ = cljs.core.vary_meta.call(null,name,cljs.core.assoc,cljs.core.cst$kw$macro,true);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})();
var args__$1 = args;
while(true){
var f = cljs.core.first.call(null,args__$1);
if(typeof f === 'string'){
var G__12784 = cljs.core.cons.call(null,f,p);
var G__12785 = cljs.core.next.call(null,args__$1);
p = G__12784;
args__$1 = G__12785;
continue;
} else {
if(cljs.core.map_QMARK_.call(null,f)){
var G__12786 = cljs.core.cons.call(null,f,p);
var G__12787 = cljs.core.next.call(null,args__$1);
p = G__12786;
args__$1 = G__12787;
continue;
} else {
return p;
}
}
break;
}
})();
var fdecl = (function (){var fd = args;
while(true){
if(typeof cljs.core.first.call(null,fd) === 'string'){
var G__12788 = cljs.core.next.call(null,fd);
fd = G__12788;
continue;
} else {
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,fd))){
var G__12789 = cljs.core.next.call(null,fd);
fd = G__12789;
continue;
} else {
return fd;
}
}
break;
}
})();
var fdecl__$1 = ((cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,fdecl)))?(function (){var x__7243__auto__ = fdecl;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})():fdecl);
var add_implicit_args = ((function (prefix,fdecl,fdecl__$1){
return (function (fd){
var args__$1 = cljs.core.first.call(null,fd);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,cljs.core.cst$sym$_AMPERSAND_form,cljs.core.cons.call(null,cljs.core.cst$sym$_AMPERSAND_env,args__$1))),cljs.core.next.call(null,fd));
});})(prefix,fdecl,fdecl__$1))
;
var add_args = ((function (prefix,fdecl,fdecl__$1,add_implicit_args){
return (function (acc,ds){
while(true){
if((ds == null)){
return acc;
} else {
var d = cljs.core.first.call(null,ds);
if(cljs.core.map_QMARK_.call(null,d)){
return cljs.core.conj.call(null,acc,d);
} else {
var G__12790 = cljs.core.conj.call(null,acc,add_implicit_args.call(null,d));
var G__12791 = cljs.core.next.call(null,ds);
acc = G__12790;
ds = G__12791;
continue;
}
}
break;
}
});})(prefix,fdecl,fdecl__$1,add_implicit_args))
;
var fdecl__$2 = cljs.core.seq.call(null,add_args.call(null,cljs.core.PersistentVector.EMPTY,fdecl__$1));
var decl = (function (){var p = prefix;
var d = fdecl__$2;
while(true){
if(cljs.core.truth_(p)){
var G__12792 = cljs.core.next.call(null,p);
var G__12793 = cljs.core.cons.call(null,cljs.core.first.call(null,p),d);
p = G__12792;
d = G__12793;
continue;
} else {
return d;
}
break;
}
})();
return cljs.core._conj.call(null,(function (){var x__7243__auto__ = cljs.core.cons.call(null,cljs.core.cst$sym$cljs$core$macros_SLASH_defn,decl);
return cljs.core._conj.call(null,(function (){var x__7243__auto____$1 = cljs.core._conj.call(null,(function (){var x__7243__auto____$1 = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),(function (){var x__7243__auto____$1 = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto____$1);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cst$sym$_DASH_cljs$lang$macro))));
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,true),x__7243__auto____$1);
})(),cljs.core.cst$sym$set_BANG_);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto____$1);
})(),x__7243__auto__);
})(),cljs.core.cst$sym$do);
});

cljs.core$macros.defmacro.cljs$lang$maxFixedArity = (3);

cljs.core$macros.defmacro.cljs$lang$applyTo = (function (seq12777){
var G__12778 = cljs.core.first.call(null,seq12777);
var seq12777__$1 = cljs.core.next.call(null,seq12777);
var G__12779 = cljs.core.first.call(null,seq12777__$1);
var seq12777__$2 = cljs.core.next.call(null,seq12777__$1);
var G__12780 = cljs.core.first.call(null,seq12777__$2);
var seq12777__$3 = cljs.core.next.call(null,seq12777__$2);
return cljs.core$macros.defmacro.cljs$core$IFn$_invoke$arity$variadic(G__12778,G__12779,G__12780,seq12777__$3);
});

cljs.core$macros.defmacro.cljs$lang$macro = true;

//# sourceMappingURL=core$macros.js.map