goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__14303__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__14303 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14304__i = 0, G__14304__a = new Array(arguments.length -  0);
while (G__14304__i < G__14304__a.length) {G__14304__a[G__14304__i] = arguments[G__14304__i + 0]; ++G__14304__i;}
  args = new cljs.core.IndexedSeq(G__14304__a,0);
} 
return G__14303__delegate.call(this,args);};
G__14303.cljs$lang$maxFixedArity = 0;
G__14303.cljs$lang$applyTo = (function (arglist__14305){
var args = cljs.core.seq(arglist__14305);
return G__14303__delegate(args);
});
G__14303.cljs$core$IFn$_invoke$arity$variadic = G__14303__delegate;
return G__14303;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__14306__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__14306 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14307__i = 0, G__14307__a = new Array(arguments.length -  0);
while (G__14307__i < G__14307__a.length) {G__14307__a[G__14307__i] = arguments[G__14307__i + 0]; ++G__14307__i;}
  args = new cljs.core.IndexedSeq(G__14307__a,0);
} 
return G__14306__delegate.call(this,args);};
G__14306.cljs$lang$maxFixedArity = 0;
G__14306.cljs$lang$applyTo = (function (arglist__14308){
var args = cljs.core.seq(arglist__14308);
return G__14306__delegate(args);
});
G__14306.cljs$core$IFn$_invoke$arity$variadic = G__14306__delegate;
return G__14306;
})()
;

return null;
});
