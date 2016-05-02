goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__16609__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__16609 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16610__i = 0, G__16610__a = new Array(arguments.length -  0);
while (G__16610__i < G__16610__a.length) {G__16610__a[G__16610__i] = arguments[G__16610__i + 0]; ++G__16610__i;}
  args = new cljs.core.IndexedSeq(G__16610__a,0);
} 
return G__16609__delegate.call(this,args);};
G__16609.cljs$lang$maxFixedArity = 0;
G__16609.cljs$lang$applyTo = (function (arglist__16611){
var args = cljs.core.seq(arglist__16611);
return G__16609__delegate(args);
});
G__16609.cljs$core$IFn$_invoke$arity$variadic = G__16609__delegate;
return G__16609;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__16612__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__16612 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16613__i = 0, G__16613__a = new Array(arguments.length -  0);
while (G__16613__i < G__16613__a.length) {G__16613__a[G__16613__i] = arguments[G__16613__i + 0]; ++G__16613__i;}
  args = new cljs.core.IndexedSeq(G__16613__a,0);
} 
return G__16612__delegate.call(this,args);};
G__16612.cljs$lang$maxFixedArity = 0;
G__16612.cljs$lang$applyTo = (function (arglist__16614){
var args = cljs.core.seq(arglist__16614);
return G__16612__delegate(args);
});
G__16612.cljs$core$IFn$_invoke$arity$variadic = G__16612__delegate;
return G__16612;
})()
;

return null;
});
