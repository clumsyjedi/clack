goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__16548__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__16548 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16549__i = 0, G__16549__a = new Array(arguments.length -  0);
while (G__16549__i < G__16549__a.length) {G__16549__a[G__16549__i] = arguments[G__16549__i + 0]; ++G__16549__i;}
  args = new cljs.core.IndexedSeq(G__16549__a,0);
} 
return G__16548__delegate.call(this,args);};
G__16548.cljs$lang$maxFixedArity = 0;
G__16548.cljs$lang$applyTo = (function (arglist__16550){
var args = cljs.core.seq(arglist__16550);
return G__16548__delegate(args);
});
G__16548.cljs$core$IFn$_invoke$arity$variadic = G__16548__delegate;
return G__16548;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__16551__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__16551 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16552__i = 0, G__16552__a = new Array(arguments.length -  0);
while (G__16552__i < G__16552__a.length) {G__16552__a[G__16552__i] = arguments[G__16552__i + 0]; ++G__16552__i;}
  args = new cljs.core.IndexedSeq(G__16552__a,0);
} 
return G__16551__delegate.call(this,args);};
G__16551.cljs$lang$maxFixedArity = 0;
G__16551.cljs$lang$applyTo = (function (arglist__16553){
var args = cljs.core.seq(arglist__16553);
return G__16551__delegate(args);
});
G__16551.cljs$core$IFn$_invoke$arity$variadic = G__16551__delegate;
return G__16551;
})()
;

return null;
});
