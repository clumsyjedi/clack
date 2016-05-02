goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__13425__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__13425 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13426__i = 0, G__13426__a = new Array(arguments.length -  0);
while (G__13426__i < G__13426__a.length) {G__13426__a[G__13426__i] = arguments[G__13426__i + 0]; ++G__13426__i;}
  args = new cljs.core.IndexedSeq(G__13426__a,0);
} 
return G__13425__delegate.call(this,args);};
G__13425.cljs$lang$maxFixedArity = 0;
G__13425.cljs$lang$applyTo = (function (arglist__13427){
var args = cljs.core.seq(arglist__13427);
return G__13425__delegate(args);
});
G__13425.cljs$core$IFn$_invoke$arity$variadic = G__13425__delegate;
return G__13425;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__13428__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__13428 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13429__i = 0, G__13429__a = new Array(arguments.length -  0);
while (G__13429__i < G__13429__a.length) {G__13429__a[G__13429__i] = arguments[G__13429__i + 0]; ++G__13429__i;}
  args = new cljs.core.IndexedSeq(G__13429__a,0);
} 
return G__13428__delegate.call(this,args);};
G__13428.cljs$lang$maxFixedArity = 0;
G__13428.cljs$lang$applyTo = (function (arglist__13430){
var args = cljs.core.seq(arglist__13430);
return G__13428__delegate(args);
});
G__13428.cljs$core$IFn$_invoke$arity$variadic = G__13428__delegate;
return G__13428;
})()
;

return null;
});
