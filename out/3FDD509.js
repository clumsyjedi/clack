goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__16125__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__16125 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16126__i = 0, G__16126__a = new Array(arguments.length -  0);
while (G__16126__i < G__16126__a.length) {G__16126__a[G__16126__i] = arguments[G__16126__i + 0]; ++G__16126__i;}
  args = new cljs.core.IndexedSeq(G__16126__a,0);
} 
return G__16125__delegate.call(this,args);};
G__16125.cljs$lang$maxFixedArity = 0;
G__16125.cljs$lang$applyTo = (function (arglist__16127){
var args = cljs.core.seq(arglist__16127);
return G__16125__delegate(args);
});
G__16125.cljs$core$IFn$_invoke$arity$variadic = G__16125__delegate;
return G__16125;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__16128__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__16128 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16129__i = 0, G__16129__a = new Array(arguments.length -  0);
while (G__16129__i < G__16129__a.length) {G__16129__a[G__16129__i] = arguments[G__16129__i + 0]; ++G__16129__i;}
  args = new cljs.core.IndexedSeq(G__16129__a,0);
} 
return G__16128__delegate.call(this,args);};
G__16128.cljs$lang$maxFixedArity = 0;
G__16128.cljs$lang$applyTo = (function (arglist__16130){
var args = cljs.core.seq(arglist__16130);
return G__16128__delegate(args);
});
G__16128.cljs$core$IFn$_invoke$arity$variadic = G__16128__delegate;
return G__16128;
})()
;

return null;
});
