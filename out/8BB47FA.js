goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__14559__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__14559 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14560__i = 0, G__14560__a = new Array(arguments.length -  0);
while (G__14560__i < G__14560__a.length) {G__14560__a[G__14560__i] = arguments[G__14560__i + 0]; ++G__14560__i;}
  args = new cljs.core.IndexedSeq(G__14560__a,0);
} 
return G__14559__delegate.call(this,args);};
G__14559.cljs$lang$maxFixedArity = 0;
G__14559.cljs$lang$applyTo = (function (arglist__14561){
var args = cljs.core.seq(arglist__14561);
return G__14559__delegate(args);
});
G__14559.cljs$core$IFn$_invoke$arity$variadic = G__14559__delegate;
return G__14559;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__14562__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__14562 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14563__i = 0, G__14563__a = new Array(arguments.length -  0);
while (G__14563__i < G__14563__a.length) {G__14563__a[G__14563__i] = arguments[G__14563__i + 0]; ++G__14563__i;}
  args = new cljs.core.IndexedSeq(G__14563__a,0);
} 
return G__14562__delegate.call(this,args);};
G__14562.cljs$lang$maxFixedArity = 0;
G__14562.cljs$lang$applyTo = (function (arglist__14564){
var args = cljs.core.seq(arglist__14564);
return G__14562__delegate(args);
});
G__14562.cljs$core$IFn$_invoke$arity$variadic = G__14562__delegate;
return G__14562;
})()
;

return null;
});
