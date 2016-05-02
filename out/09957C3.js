goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__15065__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__15065 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15066__i = 0, G__15066__a = new Array(arguments.length -  0);
while (G__15066__i < G__15066__a.length) {G__15066__a[G__15066__i] = arguments[G__15066__i + 0]; ++G__15066__i;}
  args = new cljs.core.IndexedSeq(G__15066__a,0);
} 
return G__15065__delegate.call(this,args);};
G__15065.cljs$lang$maxFixedArity = 0;
G__15065.cljs$lang$applyTo = (function (arglist__15067){
var args = cljs.core.seq(arglist__15067);
return G__15065__delegate(args);
});
G__15065.cljs$core$IFn$_invoke$arity$variadic = G__15065__delegate;
return G__15065;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__15068__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__15068 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15069__i = 0, G__15069__a = new Array(arguments.length -  0);
while (G__15069__i < G__15069__a.length) {G__15069__a[G__15069__i] = arguments[G__15069__i + 0]; ++G__15069__i;}
  args = new cljs.core.IndexedSeq(G__15069__a,0);
} 
return G__15068__delegate.call(this,args);};
G__15068.cljs$lang$maxFixedArity = 0;
G__15068.cljs$lang$applyTo = (function (arglist__15070){
var args = cljs.core.seq(arglist__15070);
return G__15068__delegate(args);
});
G__15068.cljs$core$IFn$_invoke$arity$variadic = G__15068__delegate;
return G__15068;
})()
;

return null;
});
