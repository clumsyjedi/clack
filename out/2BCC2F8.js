goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__14495__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__14495 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14496__i = 0, G__14496__a = new Array(arguments.length -  0);
while (G__14496__i < G__14496__a.length) {G__14496__a[G__14496__i] = arguments[G__14496__i + 0]; ++G__14496__i;}
  args = new cljs.core.IndexedSeq(G__14496__a,0);
} 
return G__14495__delegate.call(this,args);};
G__14495.cljs$lang$maxFixedArity = 0;
G__14495.cljs$lang$applyTo = (function (arglist__14497){
var args = cljs.core.seq(arglist__14497);
return G__14495__delegate(args);
});
G__14495.cljs$core$IFn$_invoke$arity$variadic = G__14495__delegate;
return G__14495;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__14498__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__14498 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14499__i = 0, G__14499__a = new Array(arguments.length -  0);
while (G__14499__i < G__14499__a.length) {G__14499__a[G__14499__i] = arguments[G__14499__i + 0]; ++G__14499__i;}
  args = new cljs.core.IndexedSeq(G__14499__a,0);
} 
return G__14498__delegate.call(this,args);};
G__14498.cljs$lang$maxFixedArity = 0;
G__14498.cljs$lang$applyTo = (function (arglist__14500){
var args = cljs.core.seq(arglist__14500);
return G__14498__delegate(args);
});
G__14498.cljs$core$IFn$_invoke$arity$variadic = G__14498__delegate;
return G__14498;
})()
;

return null;
});
