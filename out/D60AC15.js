goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__1036__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__1036 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1037__i = 0, G__1037__a = new Array(arguments.length -  0);
while (G__1037__i < G__1037__a.length) {G__1037__a[G__1037__i] = arguments[G__1037__i + 0]; ++G__1037__i;}
  args = new cljs.core.IndexedSeq(G__1037__a,0);
} 
return G__1036__delegate.call(this,args);};
G__1036.cljs$lang$maxFixedArity = 0;
G__1036.cljs$lang$applyTo = (function (arglist__1038){
var args = cljs.core.seq(arglist__1038);
return G__1036__delegate(args);
});
G__1036.cljs$core$IFn$_invoke$arity$variadic = G__1036__delegate;
return G__1036;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__1039__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__1039 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1040__i = 0, G__1040__a = new Array(arguments.length -  0);
while (G__1040__i < G__1040__a.length) {G__1040__a[G__1040__i] = arguments[G__1040__i + 0]; ++G__1040__i;}
  args = new cljs.core.IndexedSeq(G__1040__a,0);
} 
return G__1039__delegate.call(this,args);};
G__1039.cljs$lang$maxFixedArity = 0;
G__1039.cljs$lang$applyTo = (function (arglist__1041){
var args = cljs.core.seq(arglist__1041);
return G__1039__delegate(args);
});
G__1039.cljs$core$IFn$_invoke$arity$variadic = G__1039__delegate;
return G__1039;
})()
;

return null;
});
