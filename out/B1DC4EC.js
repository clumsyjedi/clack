goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__16667__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__16667 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16668__i = 0, G__16668__a = new Array(arguments.length -  0);
while (G__16668__i < G__16668__a.length) {G__16668__a[G__16668__i] = arguments[G__16668__i + 0]; ++G__16668__i;}
  args = new cljs.core.IndexedSeq(G__16668__a,0);
} 
return G__16667__delegate.call(this,args);};
G__16667.cljs$lang$maxFixedArity = 0;
G__16667.cljs$lang$applyTo = (function (arglist__16669){
var args = cljs.core.seq(arglist__16669);
return G__16667__delegate(args);
});
G__16667.cljs$core$IFn$_invoke$arity$variadic = G__16667__delegate;
return G__16667;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__16670__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__16670 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16671__i = 0, G__16671__a = new Array(arguments.length -  0);
while (G__16671__i < G__16671__a.length) {G__16671__a[G__16671__i] = arguments[G__16671__i + 0]; ++G__16671__i;}
  args = new cljs.core.IndexedSeq(G__16671__a,0);
} 
return G__16670__delegate.call(this,args);};
G__16670.cljs$lang$maxFixedArity = 0;
G__16670.cljs$lang$applyTo = (function (arglist__16672){
var args = cljs.core.seq(arglist__16672);
return G__16670__delegate(args);
});
G__16670.cljs$core$IFn$_invoke$arity$variadic = G__16670__delegate;
return G__16670;
})()
;

return null;
});
