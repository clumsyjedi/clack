goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__16337__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__16337 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16338__i = 0, G__16338__a = new Array(arguments.length -  0);
while (G__16338__i < G__16338__a.length) {G__16338__a[G__16338__i] = arguments[G__16338__i + 0]; ++G__16338__i;}
  args = new cljs.core.IndexedSeq(G__16338__a,0);
} 
return G__16337__delegate.call(this,args);};
G__16337.cljs$lang$maxFixedArity = 0;
G__16337.cljs$lang$applyTo = (function (arglist__16339){
var args = cljs.core.seq(arglist__16339);
return G__16337__delegate(args);
});
G__16337.cljs$core$IFn$_invoke$arity$variadic = G__16337__delegate;
return G__16337;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__16340__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__16340 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16341__i = 0, G__16341__a = new Array(arguments.length -  0);
while (G__16341__i < G__16341__a.length) {G__16341__a[G__16341__i] = arguments[G__16341__i + 0]; ++G__16341__i;}
  args = new cljs.core.IndexedSeq(G__16341__a,0);
} 
return G__16340__delegate.call(this,args);};
G__16340.cljs$lang$maxFixedArity = 0;
G__16340.cljs$lang$applyTo = (function (arglist__16342){
var args = cljs.core.seq(arglist__16342);
return G__16340__delegate(args);
});
G__16340.cljs$core$IFn$_invoke$arity$variadic = G__16340__delegate;
return G__16340;
})()
;

return null;
});
