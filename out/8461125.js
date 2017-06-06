goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__16429__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__16429 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16430__i = 0, G__16430__a = new Array(arguments.length -  0);
while (G__16430__i < G__16430__a.length) {G__16430__a[G__16430__i] = arguments[G__16430__i + 0]; ++G__16430__i;}
  args = new cljs.core.IndexedSeq(G__16430__a,0);
} 
return G__16429__delegate.call(this,args);};
G__16429.cljs$lang$maxFixedArity = 0;
G__16429.cljs$lang$applyTo = (function (arglist__16431){
var args = cljs.core.seq(arglist__16431);
return G__16429__delegate(args);
});
G__16429.cljs$core$IFn$_invoke$arity$variadic = G__16429__delegate;
return G__16429;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__16432__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__16432 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16433__i = 0, G__16433__a = new Array(arguments.length -  0);
while (G__16433__i < G__16433__a.length) {G__16433__a[G__16433__i] = arguments[G__16433__i + 0]; ++G__16433__i;}
  args = new cljs.core.IndexedSeq(G__16433__a,0);
} 
return G__16432__delegate.call(this,args);};
G__16432.cljs$lang$maxFixedArity = 0;
G__16432.cljs$lang$applyTo = (function (arglist__16434){
var args = cljs.core.seq(arglist__16434);
return G__16432__delegate(args);
});
G__16432.cljs$core$IFn$_invoke$arity$variadic = G__16432__delegate;
return G__16432;
})()
;

return null;
});
