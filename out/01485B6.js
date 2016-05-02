goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__14687__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__14687 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14688__i = 0, G__14688__a = new Array(arguments.length -  0);
while (G__14688__i < G__14688__a.length) {G__14688__a[G__14688__i] = arguments[G__14688__i + 0]; ++G__14688__i;}
  args = new cljs.core.IndexedSeq(G__14688__a,0);
} 
return G__14687__delegate.call(this,args);};
G__14687.cljs$lang$maxFixedArity = 0;
G__14687.cljs$lang$applyTo = (function (arglist__14689){
var args = cljs.core.seq(arglist__14689);
return G__14687__delegate(args);
});
G__14687.cljs$core$IFn$_invoke$arity$variadic = G__14687__delegate;
return G__14687;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__14690__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__14690 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14691__i = 0, G__14691__a = new Array(arguments.length -  0);
while (G__14691__i < G__14691__a.length) {G__14691__a[G__14691__i] = arguments[G__14691__i + 0]; ++G__14691__i;}
  args = new cljs.core.IndexedSeq(G__14691__a,0);
} 
return G__14690__delegate.call(this,args);};
G__14690.cljs$lang$maxFixedArity = 0;
G__14690.cljs$lang$applyTo = (function (arglist__14692){
var args = cljs.core.seq(arglist__14692);
return G__14690__delegate(args);
});
G__14690.cljs$core$IFn$_invoke$arity$variadic = G__14690__delegate;
return G__14690;
})()
;

return null;
});
