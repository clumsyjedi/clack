goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__14751__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__14751 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14752__i = 0, G__14752__a = new Array(arguments.length -  0);
while (G__14752__i < G__14752__a.length) {G__14752__a[G__14752__i] = arguments[G__14752__i + 0]; ++G__14752__i;}
  args = new cljs.core.IndexedSeq(G__14752__a,0);
} 
return G__14751__delegate.call(this,args);};
G__14751.cljs$lang$maxFixedArity = 0;
G__14751.cljs$lang$applyTo = (function (arglist__14753){
var args = cljs.core.seq(arglist__14753);
return G__14751__delegate(args);
});
G__14751.cljs$core$IFn$_invoke$arity$variadic = G__14751__delegate;
return G__14751;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__14754__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__14754 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14755__i = 0, G__14755__a = new Array(arguments.length -  0);
while (G__14755__i < G__14755__a.length) {G__14755__a[G__14755__i] = arguments[G__14755__i + 0]; ++G__14755__i;}
  args = new cljs.core.IndexedSeq(G__14755__a,0);
} 
return G__14754__delegate.call(this,args);};
G__14754.cljs$lang$maxFixedArity = 0;
G__14754.cljs$lang$applyTo = (function (arglist__14756){
var args = cljs.core.seq(arglist__14756);
return G__14754__delegate(args);
});
G__14754.cljs$core$IFn$_invoke$arity$variadic = G__14754__delegate;
return G__14754;
})()
;

return null;
});
