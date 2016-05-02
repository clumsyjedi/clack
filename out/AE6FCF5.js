goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__13677__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__13677 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13678__i = 0, G__13678__a = new Array(arguments.length -  0);
while (G__13678__i < G__13678__a.length) {G__13678__a[G__13678__i] = arguments[G__13678__i + 0]; ++G__13678__i;}
  args = new cljs.core.IndexedSeq(G__13678__a,0);
} 
return G__13677__delegate.call(this,args);};
G__13677.cljs$lang$maxFixedArity = 0;
G__13677.cljs$lang$applyTo = (function (arglist__13679){
var args = cljs.core.seq(arglist__13679);
return G__13677__delegate(args);
});
G__13677.cljs$core$IFn$_invoke$arity$variadic = G__13677__delegate;
return G__13677;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__13680__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__13680 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13681__i = 0, G__13681__a = new Array(arguments.length -  0);
while (G__13681__i < G__13681__a.length) {G__13681__a[G__13681__i] = arguments[G__13681__i + 0]; ++G__13681__i;}
  args = new cljs.core.IndexedSeq(G__13681__a,0);
} 
return G__13680__delegate.call(this,args);};
G__13680.cljs$lang$maxFixedArity = 0;
G__13680.cljs$lang$applyTo = (function (arglist__13682){
var args = cljs.core.seq(arglist__13682);
return G__13680__delegate(args);
});
G__13680.cljs$core$IFn$_invoke$arity$variadic = G__13680__delegate;
return G__13680;
})()
;

return null;
});
