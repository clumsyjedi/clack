goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__14939__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__14939 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14940__i = 0, G__14940__a = new Array(arguments.length -  0);
while (G__14940__i < G__14940__a.length) {G__14940__a[G__14940__i] = arguments[G__14940__i + 0]; ++G__14940__i;}
  args = new cljs.core.IndexedSeq(G__14940__a,0);
} 
return G__14939__delegate.call(this,args);};
G__14939.cljs$lang$maxFixedArity = 0;
G__14939.cljs$lang$applyTo = (function (arglist__14941){
var args = cljs.core.seq(arglist__14941);
return G__14939__delegate(args);
});
G__14939.cljs$core$IFn$_invoke$arity$variadic = G__14939__delegate;
return G__14939;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__14942__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__14942 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14943__i = 0, G__14943__a = new Array(arguments.length -  0);
while (G__14943__i < G__14943__a.length) {G__14943__a[G__14943__i] = arguments[G__14943__i + 0]; ++G__14943__i;}
  args = new cljs.core.IndexedSeq(G__14943__a,0);
} 
return G__14942__delegate.call(this,args);};
G__14942.cljs$lang$maxFixedArity = 0;
G__14942.cljs$lang$applyTo = (function (arglist__14944){
var args = cljs.core.seq(arglist__14944);
return G__14942__delegate(args);
});
G__14942.cljs$core$IFn$_invoke$arity$variadic = G__14942__delegate;
return G__14942;
})()
;

return null;
});
