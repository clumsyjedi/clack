goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__15711__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__15711 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15712__i = 0, G__15712__a = new Array(arguments.length -  0);
while (G__15712__i < G__15712__a.length) {G__15712__a[G__15712__i] = arguments[G__15712__i + 0]; ++G__15712__i;}
  args = new cljs.core.IndexedSeq(G__15712__a,0);
} 
return G__15711__delegate.call(this,args);};
G__15711.cljs$lang$maxFixedArity = 0;
G__15711.cljs$lang$applyTo = (function (arglist__15713){
var args = cljs.core.seq(arglist__15713);
return G__15711__delegate(args);
});
G__15711.cljs$core$IFn$_invoke$arity$variadic = G__15711__delegate;
return G__15711;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__15714__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__15714 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15715__i = 0, G__15715__a = new Array(arguments.length -  0);
while (G__15715__i < G__15715__a.length) {G__15715__a[G__15715__i] = arguments[G__15715__i + 0]; ++G__15715__i;}
  args = new cljs.core.IndexedSeq(G__15715__a,0);
} 
return G__15714__delegate.call(this,args);};
G__15714.cljs$lang$maxFixedArity = 0;
G__15714.cljs$lang$applyTo = (function (arglist__15716){
var args = cljs.core.seq(arglist__15716);
return G__15714__delegate(args);
});
G__15714.cljs$core$IFn$_invoke$arity$variadic = G__15714__delegate;
return G__15714;
})()
;

return null;
});
