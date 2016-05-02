goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__16473__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__16473 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16474__i = 0, G__16474__a = new Array(arguments.length -  0);
while (G__16474__i < G__16474__a.length) {G__16474__a[G__16474__i] = arguments[G__16474__i + 0]; ++G__16474__i;}
  args = new cljs.core.IndexedSeq(G__16474__a,0);
} 
return G__16473__delegate.call(this,args);};
G__16473.cljs$lang$maxFixedArity = 0;
G__16473.cljs$lang$applyTo = (function (arglist__16475){
var args = cljs.core.seq(arglist__16475);
return G__16473__delegate(args);
});
G__16473.cljs$core$IFn$_invoke$arity$variadic = G__16473__delegate;
return G__16473;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__16476__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__16476 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16477__i = 0, G__16477__a = new Array(arguments.length -  0);
while (G__16477__i < G__16477__a.length) {G__16477__a[G__16477__i] = arguments[G__16477__i + 0]; ++G__16477__i;}
  args = new cljs.core.IndexedSeq(G__16477__a,0);
} 
return G__16476__delegate.call(this,args);};
G__16476.cljs$lang$maxFixedArity = 0;
G__16476.cljs$lang$applyTo = (function (arglist__16478){
var args = cljs.core.seq(arglist__16478);
return G__16476__delegate(args);
});
G__16476.cljs$core$IFn$_invoke$arity$variadic = G__16476__delegate;
return G__16476;
})()
;

return null;
});
