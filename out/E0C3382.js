goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__13925__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__13925 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13926__i = 0, G__13926__a = new Array(arguments.length -  0);
while (G__13926__i < G__13926__a.length) {G__13926__a[G__13926__i] = arguments[G__13926__i + 0]; ++G__13926__i;}
  args = new cljs.core.IndexedSeq(G__13926__a,0);
} 
return G__13925__delegate.call(this,args);};
G__13925.cljs$lang$maxFixedArity = 0;
G__13925.cljs$lang$applyTo = (function (arglist__13927){
var args = cljs.core.seq(arglist__13927);
return G__13925__delegate(args);
});
G__13925.cljs$core$IFn$_invoke$arity$variadic = G__13925__delegate;
return G__13925;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__13928__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__13928 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13929__i = 0, G__13929__a = new Array(arguments.length -  0);
while (G__13929__i < G__13929__a.length) {G__13929__a[G__13929__i] = arguments[G__13929__i + 0]; ++G__13929__i;}
  args = new cljs.core.IndexedSeq(G__13929__a,0);
} 
return G__13928__delegate.call(this,args);};
G__13928.cljs$lang$maxFixedArity = 0;
G__13928.cljs$lang$applyTo = (function (arglist__13930){
var args = cljs.core.seq(arglist__13930);
return G__13928__delegate(args);
});
G__13928.cljs$core$IFn$_invoke$arity$variadic = G__13928__delegate;
return G__13928;
})()
;

return null;
});
