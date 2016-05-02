goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__16677__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__16677 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16678__i = 0, G__16678__a = new Array(arguments.length -  0);
while (G__16678__i < G__16678__a.length) {G__16678__a[G__16678__i] = arguments[G__16678__i + 0]; ++G__16678__i;}
  args = new cljs.core.IndexedSeq(G__16678__a,0);
} 
return G__16677__delegate.call(this,args);};
G__16677.cljs$lang$maxFixedArity = 0;
G__16677.cljs$lang$applyTo = (function (arglist__16679){
var args = cljs.core.seq(arglist__16679);
return G__16677__delegate(args);
});
G__16677.cljs$core$IFn$_invoke$arity$variadic = G__16677__delegate;
return G__16677;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__16680__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__16680 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16681__i = 0, G__16681__a = new Array(arguments.length -  0);
while (G__16681__i < G__16681__a.length) {G__16681__a[G__16681__i] = arguments[G__16681__i + 0]; ++G__16681__i;}
  args = new cljs.core.IndexedSeq(G__16681__a,0);
} 
return G__16680__delegate.call(this,args);};
G__16680.cljs$lang$maxFixedArity = 0;
G__16680.cljs$lang$applyTo = (function (arglist__16682){
var args = cljs.core.seq(arglist__16682);
return G__16680__delegate(args);
});
G__16680.cljs$core$IFn$_invoke$arity$variadic = G__16680__delegate;
return G__16680;
})()
;

return null;
});
