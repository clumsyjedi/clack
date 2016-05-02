goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__15259__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__15259 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15260__i = 0, G__15260__a = new Array(arguments.length -  0);
while (G__15260__i < G__15260__a.length) {G__15260__a[G__15260__i] = arguments[G__15260__i + 0]; ++G__15260__i;}
  args = new cljs.core.IndexedSeq(G__15260__a,0);
} 
return G__15259__delegate.call(this,args);};
G__15259.cljs$lang$maxFixedArity = 0;
G__15259.cljs$lang$applyTo = (function (arglist__15261){
var args = cljs.core.seq(arglist__15261);
return G__15259__delegate(args);
});
G__15259.cljs$core$IFn$_invoke$arity$variadic = G__15259__delegate;
return G__15259;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__15262__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__15262 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15263__i = 0, G__15263__a = new Array(arguments.length -  0);
while (G__15263__i < G__15263__a.length) {G__15263__a[G__15263__i] = arguments[G__15263__i + 0]; ++G__15263__i;}
  args = new cljs.core.IndexedSeq(G__15263__a,0);
} 
return G__15262__delegate.call(this,args);};
G__15262.cljs$lang$maxFixedArity = 0;
G__15262.cljs$lang$applyTo = (function (arglist__15264){
var args = cljs.core.seq(arglist__15264);
return G__15262__delegate(args);
});
G__15262.cljs$core$IFn$_invoke$arity$variadic = G__15262__delegate;
return G__15262;
})()
;

return null;
});
