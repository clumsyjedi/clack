goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__14367__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__14367 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14368__i = 0, G__14368__a = new Array(arguments.length -  0);
while (G__14368__i < G__14368__a.length) {G__14368__a[G__14368__i] = arguments[G__14368__i + 0]; ++G__14368__i;}
  args = new cljs.core.IndexedSeq(G__14368__a,0);
} 
return G__14367__delegate.call(this,args);};
G__14367.cljs$lang$maxFixedArity = 0;
G__14367.cljs$lang$applyTo = (function (arglist__14369){
var args = cljs.core.seq(arglist__14369);
return G__14367__delegate(args);
});
G__14367.cljs$core$IFn$_invoke$arity$variadic = G__14367__delegate;
return G__14367;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__14370__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__14370 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14371__i = 0, G__14371__a = new Array(arguments.length -  0);
while (G__14371__i < G__14371__a.length) {G__14371__a[G__14371__i] = arguments[G__14371__i + 0]; ++G__14371__i;}
  args = new cljs.core.IndexedSeq(G__14371__a,0);
} 
return G__14370__delegate.call(this,args);};
G__14370.cljs$lang$maxFixedArity = 0;
G__14370.cljs$lang$applyTo = (function (arglist__14372){
var args = cljs.core.seq(arglist__14372);
return G__14370__delegate(args);
});
G__14370.cljs$core$IFn$_invoke$arity$variadic = G__14370__delegate;
return G__14370;
})()
;

return null;
});
