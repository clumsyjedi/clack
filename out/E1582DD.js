goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__15055__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__15055 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15056__i = 0, G__15056__a = new Array(arguments.length -  0);
while (G__15056__i < G__15056__a.length) {G__15056__a[G__15056__i] = arguments[G__15056__i + 0]; ++G__15056__i;}
  args = new cljs.core.IndexedSeq(G__15056__a,0);
} 
return G__15055__delegate.call(this,args);};
G__15055.cljs$lang$maxFixedArity = 0;
G__15055.cljs$lang$applyTo = (function (arglist__15057){
var args = cljs.core.seq(arglist__15057);
return G__15055__delegate(args);
});
G__15055.cljs$core$IFn$_invoke$arity$variadic = G__15055__delegate;
return G__15055;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__15058__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__15058 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15059__i = 0, G__15059__a = new Array(arguments.length -  0);
while (G__15059__i < G__15059__a.length) {G__15059__a[G__15059__i] = arguments[G__15059__i + 0]; ++G__15059__i;}
  args = new cljs.core.IndexedSeq(G__15059__a,0);
} 
return G__15058__delegate.call(this,args);};
G__15058.cljs$lang$maxFixedArity = 0;
G__15058.cljs$lang$applyTo = (function (arglist__15060){
var args = cljs.core.seq(arglist__15060);
return G__15058__delegate(args);
});
G__15058.cljs$core$IFn$_invoke$arity$variadic = G__15058__delegate;
return G__15058;
})()
;

return null;
});
