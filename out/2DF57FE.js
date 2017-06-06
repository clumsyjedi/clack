goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__15831__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__15831 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15832__i = 0, G__15832__a = new Array(arguments.length -  0);
while (G__15832__i < G__15832__a.length) {G__15832__a[G__15832__i] = arguments[G__15832__i + 0]; ++G__15832__i;}
  args = new cljs.core.IndexedSeq(G__15832__a,0);
} 
return G__15831__delegate.call(this,args);};
G__15831.cljs$lang$maxFixedArity = 0;
G__15831.cljs$lang$applyTo = (function (arglist__15833){
var args = cljs.core.seq(arglist__15833);
return G__15831__delegate(args);
});
G__15831.cljs$core$IFn$_invoke$arity$variadic = G__15831__delegate;
return G__15831;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__15834__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__15834 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15835__i = 0, G__15835__a = new Array(arguments.length -  0);
while (G__15835__i < G__15835__a.length) {G__15835__a[G__15835__i] = arguments[G__15835__i + 0]; ++G__15835__i;}
  args = new cljs.core.IndexedSeq(G__15835__a,0);
} 
return G__15834__delegate.call(this,args);};
G__15834.cljs$lang$maxFixedArity = 0;
G__15834.cljs$lang$applyTo = (function (arglist__15836){
var args = cljs.core.seq(arglist__15836);
return G__15834__delegate(args);
});
G__15834.cljs$core$IFn$_invoke$arity$variadic = G__15834__delegate;
return G__15834;
})()
;

return null;
});
