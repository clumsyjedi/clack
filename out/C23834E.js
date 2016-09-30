goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__15159__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__15159 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15160__i = 0, G__15160__a = new Array(arguments.length -  0);
while (G__15160__i < G__15160__a.length) {G__15160__a[G__15160__i] = arguments[G__15160__i + 0]; ++G__15160__i;}
  args = new cljs.core.IndexedSeq(G__15160__a,0);
} 
return G__15159__delegate.call(this,args);};
G__15159.cljs$lang$maxFixedArity = 0;
G__15159.cljs$lang$applyTo = (function (arglist__15161){
var args = cljs.core.seq(arglist__15161);
return G__15159__delegate(args);
});
G__15159.cljs$core$IFn$_invoke$arity$variadic = G__15159__delegate;
return G__15159;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__15162__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__15162 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15163__i = 0, G__15163__a = new Array(arguments.length -  0);
while (G__15163__i < G__15163__a.length) {G__15163__a[G__15163__i] = arguments[G__15163__i + 0]; ++G__15163__i;}
  args = new cljs.core.IndexedSeq(G__15163__a,0);
} 
return G__15162__delegate.call(this,args);};
G__15162.cljs$lang$maxFixedArity = 0;
G__15162.cljs$lang$applyTo = (function (arglist__15164){
var args = cljs.core.seq(arglist__15164);
return G__15162__delegate(args);
});
G__15162.cljs$core$IFn$_invoke$arity$variadic = G__15162__delegate;
return G__15162;
})()
;

return null;
});
