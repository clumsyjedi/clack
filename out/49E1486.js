goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__15570__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__15570 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15571__i = 0, G__15571__a = new Array(arguments.length -  0);
while (G__15571__i < G__15571__a.length) {G__15571__a[G__15571__i] = arguments[G__15571__i + 0]; ++G__15571__i;}
  args = new cljs.core.IndexedSeq(G__15571__a,0);
} 
return G__15570__delegate.call(this,args);};
G__15570.cljs$lang$maxFixedArity = 0;
G__15570.cljs$lang$applyTo = (function (arglist__15572){
var args = cljs.core.seq(arglist__15572);
return G__15570__delegate(args);
});
G__15570.cljs$core$IFn$_invoke$arity$variadic = G__15570__delegate;
return G__15570;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__15573__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__15573 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15574__i = 0, G__15574__a = new Array(arguments.length -  0);
while (G__15574__i < G__15574__a.length) {G__15574__a[G__15574__i] = arguments[G__15574__i + 0]; ++G__15574__i;}
  args = new cljs.core.IndexedSeq(G__15574__a,0);
} 
return G__15573__delegate.call(this,args);};
G__15573.cljs$lang$maxFixedArity = 0;
G__15573.cljs$lang$applyTo = (function (arglist__15575){
var args = cljs.core.seq(arglist__15575);
return G__15573__delegate(args);
});
G__15573.cljs$core$IFn$_invoke$arity$variadic = G__15573__delegate;
return G__15573;
})()
;

return null;
});
