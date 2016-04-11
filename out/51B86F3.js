goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__82__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__82 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__83__i = 0, G__83__a = new Array(arguments.length -  0);
while (G__83__i < G__83__a.length) {G__83__a[G__83__i] = arguments[G__83__i + 0]; ++G__83__i;}
  args = new cljs.core.IndexedSeq(G__83__a,0);
} 
return G__82__delegate.call(this,args);};
G__82.cljs$lang$maxFixedArity = 0;
G__82.cljs$lang$applyTo = (function (arglist__84){
var args = cljs.core.seq(arglist__84);
return G__82__delegate(args);
});
G__82.cljs$core$IFn$_invoke$arity$variadic = G__82__delegate;
return G__82;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__85__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__85 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__86__i = 0, G__86__a = new Array(arguments.length -  0);
while (G__86__i < G__86__a.length) {G__86__a[G__86__i] = arguments[G__86__i + 0]; ++G__86__i;}
  args = new cljs.core.IndexedSeq(G__86__a,0);
} 
return G__85__delegate.call(this,args);};
G__85.cljs$lang$maxFixedArity = 0;
G__85.cljs$lang$applyTo = (function (arglist__87){
var args = cljs.core.seq(arglist__87);
return G__85__delegate(args);
});
G__85.cljs$core$IFn$_invoke$arity$variadic = G__85__delegate;
return G__85;
})()
;

return null;
});
