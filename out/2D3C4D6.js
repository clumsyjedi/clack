goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__15832__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__15832 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15833__i = 0, G__15833__a = new Array(arguments.length -  0);
while (G__15833__i < G__15833__a.length) {G__15833__a[G__15833__i] = arguments[G__15833__i + 0]; ++G__15833__i;}
  args = new cljs.core.IndexedSeq(G__15833__a,0);
} 
return G__15832__delegate.call(this,args);};
G__15832.cljs$lang$maxFixedArity = 0;
G__15832.cljs$lang$applyTo = (function (arglist__15834){
var args = cljs.core.seq(arglist__15834);
return G__15832__delegate(args);
});
G__15832.cljs$core$IFn$_invoke$arity$variadic = G__15832__delegate;
return G__15832;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__15835__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__15835 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15836__i = 0, G__15836__a = new Array(arguments.length -  0);
while (G__15836__i < G__15836__a.length) {G__15836__a[G__15836__i] = arguments[G__15836__i + 0]; ++G__15836__i;}
  args = new cljs.core.IndexedSeq(G__15836__a,0);
} 
return G__15835__delegate.call(this,args);};
G__15835.cljs$lang$maxFixedArity = 0;
G__15835.cljs$lang$applyTo = (function (arglist__15837){
var args = cljs.core.seq(arglist__15837);
return G__15835__delegate(args);
});
G__15835.cljs$core$IFn$_invoke$arity$variadic = G__15835__delegate;
return G__15835;
})()
;

return null;
});
