// Compiled by ClojureScript 1.9.229 {:optimize-constants true, :target :nodejs}
goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__14797__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__14797 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14798__i = 0, G__14798__a = new Array(arguments.length -  0);
while (G__14798__i < G__14798__a.length) {G__14798__a[G__14798__i] = arguments[G__14798__i + 0]; ++G__14798__i;}
  args = new cljs.core.IndexedSeq(G__14798__a,0);
} 
return G__14797__delegate.call(this,args);};
G__14797.cljs$lang$maxFixedArity = 0;
G__14797.cljs$lang$applyTo = (function (arglist__14799){
var args = cljs.core.seq(arglist__14799);
return G__14797__delegate(args);
});
G__14797.cljs$core$IFn$_invoke$arity$variadic = G__14797__delegate;
return G__14797;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__14800__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__14800 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14801__i = 0, G__14801__a = new Array(arguments.length -  0);
while (G__14801__i < G__14801__a.length) {G__14801__a[G__14801__i] = arguments[G__14801__i + 0]; ++G__14801__i;}
  args = new cljs.core.IndexedSeq(G__14801__a,0);
} 
return G__14800__delegate.call(this,args);};
G__14800.cljs$lang$maxFixedArity = 0;
G__14800.cljs$lang$applyTo = (function (arglist__14802){
var args = cljs.core.seq(arglist__14802);
return G__14800__delegate(args);
});
G__14800.cljs$core$IFn$_invoke$arity$variadic = G__14800__delegate;
return G__14800;
})()
;

return null;
});

//# sourceMappingURL=nodejs.js.map