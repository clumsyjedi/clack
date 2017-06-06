goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__16191__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__16191 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16192__i = 0, G__16192__a = new Array(arguments.length -  0);
while (G__16192__i < G__16192__a.length) {G__16192__a[G__16192__i] = arguments[G__16192__i + 0]; ++G__16192__i;}
  args = new cljs.core.IndexedSeq(G__16192__a,0);
} 
return G__16191__delegate.call(this,args);};
G__16191.cljs$lang$maxFixedArity = 0;
G__16191.cljs$lang$applyTo = (function (arglist__16193){
var args = cljs.core.seq(arglist__16193);
return G__16191__delegate(args);
});
G__16191.cljs$core$IFn$_invoke$arity$variadic = G__16191__delegate;
return G__16191;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__16194__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__16194 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16195__i = 0, G__16195__a = new Array(arguments.length -  0);
while (G__16195__i < G__16195__a.length) {G__16195__a[G__16195__i] = arguments[G__16195__i + 0]; ++G__16195__i;}
  args = new cljs.core.IndexedSeq(G__16195__a,0);
} 
return G__16194__delegate.call(this,args);};
G__16194.cljs$lang$maxFixedArity = 0;
G__16194.cljs$lang$applyTo = (function (arglist__16196){
var args = cljs.core.seq(arglist__16196);
return G__16194__delegate(args);
});
G__16194.cljs$core$IFn$_invoke$arity$variadic = G__16194__delegate;
return G__16194;
})()
;

return null;
});
