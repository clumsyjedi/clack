goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__15139__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__15139 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15140__i = 0, G__15140__a = new Array(arguments.length -  0);
while (G__15140__i < G__15140__a.length) {G__15140__a[G__15140__i] = arguments[G__15140__i + 0]; ++G__15140__i;}
  args = new cljs.core.IndexedSeq(G__15140__a,0);
} 
return G__15139__delegate.call(this,args);};
G__15139.cljs$lang$maxFixedArity = 0;
G__15139.cljs$lang$applyTo = (function (arglist__15141){
var args = cljs.core.seq(arglist__15141);
return G__15139__delegate(args);
});
G__15139.cljs$core$IFn$_invoke$arity$variadic = G__15139__delegate;
return G__15139;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__15142__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__15142 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15143__i = 0, G__15143__a = new Array(arguments.length -  0);
while (G__15143__i < G__15143__a.length) {G__15143__a[G__15143__i] = arguments[G__15143__i + 0]; ++G__15143__i;}
  args = new cljs.core.IndexedSeq(G__15143__a,0);
} 
return G__15142__delegate.call(this,args);};
G__15142.cljs$lang$maxFixedArity = 0;
G__15142.cljs$lang$applyTo = (function (arglist__15144){
var args = cljs.core.seq(arglist__15144);
return G__15142__delegate(args);
});
G__15142.cljs$core$IFn$_invoke$arity$variadic = G__15142__delegate;
return G__15142;
})()
;

return null;
});
