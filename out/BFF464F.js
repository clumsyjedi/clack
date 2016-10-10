goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__15648__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__15648 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15649__i = 0, G__15649__a = new Array(arguments.length -  0);
while (G__15649__i < G__15649__a.length) {G__15649__a[G__15649__i] = arguments[G__15649__i + 0]; ++G__15649__i;}
  args = new cljs.core.IndexedSeq(G__15649__a,0);
} 
return G__15648__delegate.call(this,args);};
G__15648.cljs$lang$maxFixedArity = 0;
G__15648.cljs$lang$applyTo = (function (arglist__15650){
var args = cljs.core.seq(arglist__15650);
return G__15648__delegate(args);
});
G__15648.cljs$core$IFn$_invoke$arity$variadic = G__15648__delegate;
return G__15648;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__15651__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__15651 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15652__i = 0, G__15652__a = new Array(arguments.length -  0);
while (G__15652__i < G__15652__a.length) {G__15652__a[G__15652__i] = arguments[G__15652__i + 0]; ++G__15652__i;}
  args = new cljs.core.IndexedSeq(G__15652__a,0);
} 
return G__15651__delegate.call(this,args);};
G__15651.cljs$lang$maxFixedArity = 0;
G__15651.cljs$lang$applyTo = (function (arglist__15653){
var args = cljs.core.seq(arglist__15653);
return G__15651__delegate(args);
});
G__15651.cljs$core$IFn$_invoke$arity$variadic = G__15651__delegate;
return G__15651;
})()
;

return null;
});
