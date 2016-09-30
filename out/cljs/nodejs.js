// Compiled by ClojureScript 1.9.229 {:optimize-constants true, :target :nodejs}
goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__14775__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__14775 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14776__i = 0, G__14776__a = new Array(arguments.length -  0);
while (G__14776__i < G__14776__a.length) {G__14776__a[G__14776__i] = arguments[G__14776__i + 0]; ++G__14776__i;}
  args = new cljs.core.IndexedSeq(G__14776__a,0);
} 
return G__14775__delegate.call(this,args);};
G__14775.cljs$lang$maxFixedArity = 0;
G__14775.cljs$lang$applyTo = (function (arglist__14777){
var args = cljs.core.seq(arglist__14777);
return G__14775__delegate(args);
});
G__14775.cljs$core$IFn$_invoke$arity$variadic = G__14775__delegate;
return G__14775;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__14778__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__14778 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14779__i = 0, G__14779__a = new Array(arguments.length -  0);
while (G__14779__i < G__14779__a.length) {G__14779__a[G__14779__i] = arguments[G__14779__i + 0]; ++G__14779__i;}
  args = new cljs.core.IndexedSeq(G__14779__a,0);
} 
return G__14778__delegate.call(this,args);};
G__14778.cljs$lang$maxFixedArity = 0;
G__14778.cljs$lang$applyTo = (function (arglist__14780){
var args = cljs.core.seq(arglist__14780);
return G__14778__delegate(args);
});
G__14778.cljs$core$IFn$_invoke$arity$variadic = G__14778__delegate;
return G__14778;
})()
;

return null;
});

//# sourceMappingURL=nodejs.js.map