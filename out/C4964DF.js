goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__13297__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__13297 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13298__i = 0, G__13298__a = new Array(arguments.length -  0);
while (G__13298__i < G__13298__a.length) {G__13298__a[G__13298__i] = arguments[G__13298__i + 0]; ++G__13298__i;}
  args = new cljs.core.IndexedSeq(G__13298__a,0);
} 
return G__13297__delegate.call(this,args);};
G__13297.cljs$lang$maxFixedArity = 0;
G__13297.cljs$lang$applyTo = (function (arglist__13299){
var args = cljs.core.seq(arglist__13299);
return G__13297__delegate(args);
});
G__13297.cljs$core$IFn$_invoke$arity$variadic = G__13297__delegate;
return G__13297;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__13300__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__13300 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13301__i = 0, G__13301__a = new Array(arguments.length -  0);
while (G__13301__i < G__13301__a.length) {G__13301__a[G__13301__i] = arguments[G__13301__i + 0]; ++G__13301__i;}
  args = new cljs.core.IndexedSeq(G__13301__a,0);
} 
return G__13300__delegate.call(this,args);};
G__13300.cljs$lang$maxFixedArity = 0;
G__13300.cljs$lang$applyTo = (function (arglist__13302){
var args = cljs.core.seq(arglist__13302);
return G__13300__delegate(args);
});
G__13300.cljs$core$IFn$_invoke$arity$variadic = G__13300__delegate;
return G__13300;
})()
;

return null;
});
