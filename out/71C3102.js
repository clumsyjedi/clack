goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__15581__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__15581 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15582__i = 0, G__15582__a = new Array(arguments.length -  0);
while (G__15582__i < G__15582__a.length) {G__15582__a[G__15582__i] = arguments[G__15582__i + 0]; ++G__15582__i;}
  args = new cljs.core.IndexedSeq(G__15582__a,0);
} 
return G__15581__delegate.call(this,args);};
G__15581.cljs$lang$maxFixedArity = 0;
G__15581.cljs$lang$applyTo = (function (arglist__15583){
var args = cljs.core.seq(arglist__15583);
return G__15581__delegate(args);
});
G__15581.cljs$core$IFn$_invoke$arity$variadic = G__15581__delegate;
return G__15581;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__15584__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__15584 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15585__i = 0, G__15585__a = new Array(arguments.length -  0);
while (G__15585__i < G__15585__a.length) {G__15585__a[G__15585__i] = arguments[G__15585__i + 0]; ++G__15585__i;}
  args = new cljs.core.IndexedSeq(G__15585__a,0);
} 
return G__15584__delegate.call(this,args);};
G__15584.cljs$lang$maxFixedArity = 0;
G__15584.cljs$lang$applyTo = (function (arglist__15586){
var args = cljs.core.seq(arglist__15586);
return G__15584__delegate(args);
});
G__15584.cljs$core$IFn$_invoke$arity$variadic = G__15584__delegate;
return G__15584;
})()
;

return null;
});
