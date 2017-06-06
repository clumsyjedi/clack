goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__15951__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__15951 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15952__i = 0, G__15952__a = new Array(arguments.length -  0);
while (G__15952__i < G__15952__a.length) {G__15952__a[G__15952__i] = arguments[G__15952__i + 0]; ++G__15952__i;}
  args = new cljs.core.IndexedSeq(G__15952__a,0);
} 
return G__15951__delegate.call(this,args);};
G__15951.cljs$lang$maxFixedArity = 0;
G__15951.cljs$lang$applyTo = (function (arglist__15953){
var args = cljs.core.seq(arglist__15953);
return G__15951__delegate(args);
});
G__15951.cljs$core$IFn$_invoke$arity$variadic = G__15951__delegate;
return G__15951;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__15954__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__15954 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15955__i = 0, G__15955__a = new Array(arguments.length -  0);
while (G__15955__i < G__15955__a.length) {G__15955__a[G__15955__i] = arguments[G__15955__i + 0]; ++G__15955__i;}
  args = new cljs.core.IndexedSeq(G__15955__a,0);
} 
return G__15954__delegate.call(this,args);};
G__15954.cljs$lang$maxFixedArity = 0;
G__15954.cljs$lang$applyTo = (function (arglist__15956){
var args = cljs.core.seq(arglist__15956);
return G__15954__delegate(args);
});
G__15954.cljs$core$IFn$_invoke$arity$variadic = G__15954__delegate;
return G__15954;
})()
;

return null;
});
