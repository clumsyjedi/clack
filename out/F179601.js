goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__14985__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__14985 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14986__i = 0, G__14986__a = new Array(arguments.length -  0);
while (G__14986__i < G__14986__a.length) {G__14986__a[G__14986__i] = arguments[G__14986__i + 0]; ++G__14986__i;}
  args = new cljs.core.IndexedSeq(G__14986__a,0);
} 
return G__14985__delegate.call(this,args);};
G__14985.cljs$lang$maxFixedArity = 0;
G__14985.cljs$lang$applyTo = (function (arglist__14987){
var args = cljs.core.seq(arglist__14987);
return G__14985__delegate(args);
});
G__14985.cljs$core$IFn$_invoke$arity$variadic = G__14985__delegate;
return G__14985;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__14988__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__14988 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14989__i = 0, G__14989__a = new Array(arguments.length -  0);
while (G__14989__i < G__14989__a.length) {G__14989__a[G__14989__i] = arguments[G__14989__i + 0]; ++G__14989__i;}
  args = new cljs.core.IndexedSeq(G__14989__a,0);
} 
return G__14988__delegate.call(this,args);};
G__14988.cljs$lang$maxFixedArity = 0;
G__14988.cljs$lang$applyTo = (function (arglist__14990){
var args = cljs.core.seq(arglist__14990);
return G__14988__delegate(args);
});
G__14988.cljs$core$IFn$_invoke$arity$variadic = G__14988__delegate;
return G__14988;
})()
;

return null;
});
