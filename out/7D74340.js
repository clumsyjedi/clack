goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__15577__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__15577 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15578__i = 0, G__15578__a = new Array(arguments.length -  0);
while (G__15578__i < G__15578__a.length) {G__15578__a[G__15578__i] = arguments[G__15578__i + 0]; ++G__15578__i;}
  args = new cljs.core.IndexedSeq(G__15578__a,0);
} 
return G__15577__delegate.call(this,args);};
G__15577.cljs$lang$maxFixedArity = 0;
G__15577.cljs$lang$applyTo = (function (arglist__15579){
var args = cljs.core.seq(arglist__15579);
return G__15577__delegate(args);
});
G__15577.cljs$core$IFn$_invoke$arity$variadic = G__15577__delegate;
return G__15577;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__15580__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__15580 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15581__i = 0, G__15581__a = new Array(arguments.length -  0);
while (G__15581__i < G__15581__a.length) {G__15581__a[G__15581__i] = arguments[G__15581__i + 0]; ++G__15581__i;}
  args = new cljs.core.IndexedSeq(G__15581__a,0);
} 
return G__15580__delegate.call(this,args);};
G__15580.cljs$lang$maxFixedArity = 0;
G__15580.cljs$lang$applyTo = (function (arglist__15582){
var args = cljs.core.seq(arglist__15582);
return G__15580__delegate(args);
});
G__15580.cljs$core$IFn$_invoke$arity$variadic = G__15580__delegate;
return G__15580;
})()
;

return null;
});
