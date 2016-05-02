goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__16541__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__16541 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16542__i = 0, G__16542__a = new Array(arguments.length -  0);
while (G__16542__i < G__16542__a.length) {G__16542__a[G__16542__i] = arguments[G__16542__i + 0]; ++G__16542__i;}
  args = new cljs.core.IndexedSeq(G__16542__a,0);
} 
return G__16541__delegate.call(this,args);};
G__16541.cljs$lang$maxFixedArity = 0;
G__16541.cljs$lang$applyTo = (function (arglist__16543){
var args = cljs.core.seq(arglist__16543);
return G__16541__delegate(args);
});
G__16541.cljs$core$IFn$_invoke$arity$variadic = G__16541__delegate;
return G__16541;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__16544__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__16544 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16545__i = 0, G__16545__a = new Array(arguments.length -  0);
while (G__16545__i < G__16545__a.length) {G__16545__a[G__16545__i] = arguments[G__16545__i + 0]; ++G__16545__i;}
  args = new cljs.core.IndexedSeq(G__16545__a,0);
} 
return G__16544__delegate.call(this,args);};
G__16544.cljs$lang$maxFixedArity = 0;
G__16544.cljs$lang$applyTo = (function (arglist__16546){
var args = cljs.core.seq(arglist__16546);
return G__16544__delegate(args);
});
G__16544.cljs$core$IFn$_invoke$arity$variadic = G__16544__delegate;
return G__16544;
})()
;

return null;
});
