goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__14877__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__14877 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14878__i = 0, G__14878__a = new Array(arguments.length -  0);
while (G__14878__i < G__14878__a.length) {G__14878__a[G__14878__i] = arguments[G__14878__i + 0]; ++G__14878__i;}
  args = new cljs.core.IndexedSeq(G__14878__a,0);
} 
return G__14877__delegate.call(this,args);};
G__14877.cljs$lang$maxFixedArity = 0;
G__14877.cljs$lang$applyTo = (function (arglist__14879){
var args = cljs.core.seq(arglist__14879);
return G__14877__delegate(args);
});
G__14877.cljs$core$IFn$_invoke$arity$variadic = G__14877__delegate;
return G__14877;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__14880__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__14880 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14881__i = 0, G__14881__a = new Array(arguments.length -  0);
while (G__14881__i < G__14881__a.length) {G__14881__a[G__14881__i] = arguments[G__14881__i + 0]; ++G__14881__i;}
  args = new cljs.core.IndexedSeq(G__14881__a,0);
} 
return G__14880__delegate.call(this,args);};
G__14880.cljs$lang$maxFixedArity = 0;
G__14880.cljs$lang$applyTo = (function (arglist__14882){
var args = cljs.core.seq(arglist__14882);
return G__14880__delegate(args);
});
G__14880.cljs$core$IFn$_invoke$arity$variadic = G__14880__delegate;
return G__14880;
})()
;

return null;
});
