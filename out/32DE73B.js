goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__14175__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__14175 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14176__i = 0, G__14176__a = new Array(arguments.length -  0);
while (G__14176__i < G__14176__a.length) {G__14176__a[G__14176__i] = arguments[G__14176__i + 0]; ++G__14176__i;}
  args = new cljs.core.IndexedSeq(G__14176__a,0);
} 
return G__14175__delegate.call(this,args);};
G__14175.cljs$lang$maxFixedArity = 0;
G__14175.cljs$lang$applyTo = (function (arglist__14177){
var args = cljs.core.seq(arglist__14177);
return G__14175__delegate(args);
});
G__14175.cljs$core$IFn$_invoke$arity$variadic = G__14175__delegate;
return G__14175;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__14178__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__14178 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14179__i = 0, G__14179__a = new Array(arguments.length -  0);
while (G__14179__i < G__14179__a.length) {G__14179__a[G__14179__i] = arguments[G__14179__i + 0]; ++G__14179__i;}
  args = new cljs.core.IndexedSeq(G__14179__a,0);
} 
return G__14178__delegate.call(this,args);};
G__14178.cljs$lang$maxFixedArity = 0;
G__14178.cljs$lang$applyTo = (function (arglist__14180){
var args = cljs.core.seq(arglist__14180);
return G__14178__delegate(args);
});
G__14178.cljs$core$IFn$_invoke$arity$variadic = G__14178__delegate;
return G__14178;
})()
;

return null;
});
