goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__15327__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__15327 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15328__i = 0, G__15328__a = new Array(arguments.length -  0);
while (G__15328__i < G__15328__a.length) {G__15328__a[G__15328__i] = arguments[G__15328__i + 0]; ++G__15328__i;}
  args = new cljs.core.IndexedSeq(G__15328__a,0);
} 
return G__15327__delegate.call(this,args);};
G__15327.cljs$lang$maxFixedArity = 0;
G__15327.cljs$lang$applyTo = (function (arglist__15329){
var args = cljs.core.seq(arglist__15329);
return G__15327__delegate(args);
});
G__15327.cljs$core$IFn$_invoke$arity$variadic = G__15327__delegate;
return G__15327;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__15330__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__15330 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15331__i = 0, G__15331__a = new Array(arguments.length -  0);
while (G__15331__i < G__15331__a.length) {G__15331__a[G__15331__i] = arguments[G__15331__i + 0]; ++G__15331__i;}
  args = new cljs.core.IndexedSeq(G__15331__a,0);
} 
return G__15330__delegate.call(this,args);};
G__15330.cljs$lang$maxFixedArity = 0;
G__15330.cljs$lang$applyTo = (function (arglist__15332){
var args = cljs.core.seq(arglist__15332);
return G__15330__delegate(args);
});
G__15330.cljs$core$IFn$_invoke$arity$variadic = G__15330__delegate;
return G__15330;
})()
;

return null;
});
