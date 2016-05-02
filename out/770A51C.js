goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__14623__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__14623 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14624__i = 0, G__14624__a = new Array(arguments.length -  0);
while (G__14624__i < G__14624__a.length) {G__14624__a[G__14624__i] = arguments[G__14624__i + 0]; ++G__14624__i;}
  args = new cljs.core.IndexedSeq(G__14624__a,0);
} 
return G__14623__delegate.call(this,args);};
G__14623.cljs$lang$maxFixedArity = 0;
G__14623.cljs$lang$applyTo = (function (arglist__14625){
var args = cljs.core.seq(arglist__14625);
return G__14623__delegate(args);
});
G__14623.cljs$core$IFn$_invoke$arity$variadic = G__14623__delegate;
return G__14623;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__14626__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__14626 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14627__i = 0, G__14627__a = new Array(arguments.length -  0);
while (G__14627__i < G__14627__a.length) {G__14627__a[G__14627__i] = arguments[G__14627__i + 0]; ++G__14627__i;}
  args = new cljs.core.IndexedSeq(G__14627__a,0);
} 
return G__14626__delegate.call(this,args);};
G__14626.cljs$lang$maxFixedArity = 0;
G__14626.cljs$lang$applyTo = (function (arglist__14628){
var args = cljs.core.seq(arglist__14628);
return G__14626__delegate(args);
});
G__14626.cljs$core$IFn$_invoke$arity$variadic = G__14626__delegate;
return G__14626;
})()
;

return null;
});
