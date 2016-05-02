goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__16057__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__16057 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16058__i = 0, G__16058__a = new Array(arguments.length -  0);
while (G__16058__i < G__16058__a.length) {G__16058__a[G__16058__i] = arguments[G__16058__i + 0]; ++G__16058__i;}
  args = new cljs.core.IndexedSeq(G__16058__a,0);
} 
return G__16057__delegate.call(this,args);};
G__16057.cljs$lang$maxFixedArity = 0;
G__16057.cljs$lang$applyTo = (function (arglist__16059){
var args = cljs.core.seq(arglist__16059);
return G__16057__delegate(args);
});
G__16057.cljs$core$IFn$_invoke$arity$variadic = G__16057__delegate;
return G__16057;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__16060__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__16060 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16061__i = 0, G__16061__a = new Array(arguments.length -  0);
while (G__16061__i < G__16061__a.length) {G__16061__a[G__16061__i] = arguments[G__16061__i + 0]; ++G__16061__i;}
  args = new cljs.core.IndexedSeq(G__16061__a,0);
} 
return G__16060__delegate.call(this,args);};
G__16060.cljs$lang$maxFixedArity = 0;
G__16060.cljs$lang$applyTo = (function (arglist__16062){
var args = cljs.core.seq(arglist__16062);
return G__16060__delegate(args);
});
G__16060.cljs$core$IFn$_invoke$arity$variadic = G__16060__delegate;
return G__16060;
})()
;

return null;
});
