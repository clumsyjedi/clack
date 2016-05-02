goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__15447__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__15447 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15448__i = 0, G__15448__a = new Array(arguments.length -  0);
while (G__15448__i < G__15448__a.length) {G__15448__a[G__15448__i] = arguments[G__15448__i + 0]; ++G__15448__i;}
  args = new cljs.core.IndexedSeq(G__15448__a,0);
} 
return G__15447__delegate.call(this,args);};
G__15447.cljs$lang$maxFixedArity = 0;
G__15447.cljs$lang$applyTo = (function (arglist__15449){
var args = cljs.core.seq(arglist__15449);
return G__15447__delegate(args);
});
G__15447.cljs$core$IFn$_invoke$arity$variadic = G__15447__delegate;
return G__15447;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__15450__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__15450 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15451__i = 0, G__15451__a = new Array(arguments.length -  0);
while (G__15451__i < G__15451__a.length) {G__15451__a[G__15451__i] = arguments[G__15451__i + 0]; ++G__15451__i;}
  args = new cljs.core.IndexedSeq(G__15451__a,0);
} 
return G__15450__delegate.call(this,args);};
G__15450.cljs$lang$maxFixedArity = 0;
G__15450.cljs$lang$applyTo = (function (arglist__15452){
var args = cljs.core.seq(arglist__15452);
return G__15450__delegate(args);
});
G__15450.cljs$core$IFn$_invoke$arity$variadic = G__15450__delegate;
return G__15450;
})()
;

return null;
});
