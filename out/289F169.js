goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__15917__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__15917 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15918__i = 0, G__15918__a = new Array(arguments.length -  0);
while (G__15918__i < G__15918__a.length) {G__15918__a[G__15918__i] = arguments[G__15918__i + 0]; ++G__15918__i;}
  args = new cljs.core.IndexedSeq(G__15918__a,0);
} 
return G__15917__delegate.call(this,args);};
G__15917.cljs$lang$maxFixedArity = 0;
G__15917.cljs$lang$applyTo = (function (arglist__15919){
var args = cljs.core.seq(arglist__15919);
return G__15917__delegate(args);
});
G__15917.cljs$core$IFn$_invoke$arity$variadic = G__15917__delegate;
return G__15917;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__15920__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__15920 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15921__i = 0, G__15921__a = new Array(arguments.length -  0);
while (G__15921__i < G__15921__a.length) {G__15921__a[G__15921__i] = arguments[G__15921__i + 0]; ++G__15921__i;}
  args = new cljs.core.IndexedSeq(G__15921__a,0);
} 
return G__15920__delegate.call(this,args);};
G__15920.cljs$lang$maxFixedArity = 0;
G__15920.cljs$lang$applyTo = (function (arglist__15922){
var args = cljs.core.seq(arglist__15922);
return G__15920__delegate(args);
});
G__15920.cljs$core$IFn$_invoke$arity$variadic = G__15920__delegate;
return G__15920;
})()
;

return null;
});
