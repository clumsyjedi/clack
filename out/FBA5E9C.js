goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__15192__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__15192 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15193__i = 0, G__15193__a = new Array(arguments.length -  0);
while (G__15193__i < G__15193__a.length) {G__15193__a[G__15193__i] = arguments[G__15193__i + 0]; ++G__15193__i;}
  args = new cljs.core.IndexedSeq(G__15193__a,0);
} 
return G__15192__delegate.call(this,args);};
G__15192.cljs$lang$maxFixedArity = 0;
G__15192.cljs$lang$applyTo = (function (arglist__15194){
var args = cljs.core.seq(arglist__15194);
return G__15192__delegate(args);
});
G__15192.cljs$core$IFn$_invoke$arity$variadic = G__15192__delegate;
return G__15192;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__15195__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__15195 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15196__i = 0, G__15196__a = new Array(arguments.length -  0);
while (G__15196__i < G__15196__a.length) {G__15196__a[G__15196__i] = arguments[G__15196__i + 0]; ++G__15196__i;}
  args = new cljs.core.IndexedSeq(G__15196__a,0);
} 
return G__15195__delegate.call(this,args);};
G__15195.cljs$lang$maxFixedArity = 0;
G__15195.cljs$lang$applyTo = (function (arglist__15197){
var args = cljs.core.seq(arglist__15197);
return G__15195__delegate(args);
});
G__15195.cljs$core$IFn$_invoke$arity$variadic = G__15195__delegate;
return G__15195;
})()
;

return null;
});
