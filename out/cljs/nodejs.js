// Compiled by ClojureScript 1.9.229 {:optimize-constants true, :target :nodejs}
goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__14801__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__14801 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14802__i = 0, G__14802__a = new Array(arguments.length -  0);
while (G__14802__i < G__14802__a.length) {G__14802__a[G__14802__i] = arguments[G__14802__i + 0]; ++G__14802__i;}
  args = new cljs.core.IndexedSeq(G__14802__a,0);
} 
return G__14801__delegate.call(this,args);};
G__14801.cljs$lang$maxFixedArity = 0;
G__14801.cljs$lang$applyTo = (function (arglist__14803){
var args = cljs.core.seq(arglist__14803);
return G__14801__delegate(args);
});
G__14801.cljs$core$IFn$_invoke$arity$variadic = G__14801__delegate;
return G__14801;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__14804__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__14804 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14805__i = 0, G__14805__a = new Array(arguments.length -  0);
while (G__14805__i < G__14805__a.length) {G__14805__a[G__14805__i] = arguments[G__14805__i + 0]; ++G__14805__i;}
  args = new cljs.core.IndexedSeq(G__14805__a,0);
} 
return G__14804__delegate.call(this,args);};
G__14804.cljs$lang$maxFixedArity = 0;
G__14804.cljs$lang$applyTo = (function (arglist__14806){
var args = cljs.core.seq(arglist__14806);
return G__14804__delegate(args);
});
G__14804.cljs$core$IFn$_invoke$arity$variadic = G__14804__delegate;
return G__14804;
})()
;

return null;
});

//# sourceMappingURL=nodejs.js.map