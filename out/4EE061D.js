goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__13801__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__13801 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13802__i = 0, G__13802__a = new Array(arguments.length -  0);
while (G__13802__i < G__13802__a.length) {G__13802__a[G__13802__i] = arguments[G__13802__i + 0]; ++G__13802__i;}
  args = new cljs.core.IndexedSeq(G__13802__a,0);
} 
return G__13801__delegate.call(this,args);};
G__13801.cljs$lang$maxFixedArity = 0;
G__13801.cljs$lang$applyTo = (function (arglist__13803){
var args = cljs.core.seq(arglist__13803);
return G__13801__delegate(args);
});
G__13801.cljs$core$IFn$_invoke$arity$variadic = G__13801__delegate;
return G__13801;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__13804__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__13804 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13805__i = 0, G__13805__a = new Array(arguments.length -  0);
while (G__13805__i < G__13805__a.length) {G__13805__a[G__13805__i] = arguments[G__13805__i + 0]; ++G__13805__i;}
  args = new cljs.core.IndexedSeq(G__13805__a,0);
} 
return G__13804__delegate.call(this,args);};
G__13804.cljs$lang$maxFixedArity = 0;
G__13804.cljs$lang$applyTo = (function (arglist__13806){
var args = cljs.core.seq(arglist__13806);
return G__13804__delegate(args);
});
G__13804.cljs$core$IFn$_invoke$arity$variadic = G__13804__delegate;
return G__13804;
})()
;

return null;
});
