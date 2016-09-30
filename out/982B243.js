goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__15277__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__15277 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15278__i = 0, G__15278__a = new Array(arguments.length -  0);
while (G__15278__i < G__15278__a.length) {G__15278__a[G__15278__i] = arguments[G__15278__i + 0]; ++G__15278__i;}
  args = new cljs.core.IndexedSeq(G__15278__a,0);
} 
return G__15277__delegate.call(this,args);};
G__15277.cljs$lang$maxFixedArity = 0;
G__15277.cljs$lang$applyTo = (function (arglist__15279){
var args = cljs.core.seq(arglist__15279);
return G__15277__delegate(args);
});
G__15277.cljs$core$IFn$_invoke$arity$variadic = G__15277__delegate;
return G__15277;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__15280__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__15280 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15281__i = 0, G__15281__a = new Array(arguments.length -  0);
while (G__15281__i < G__15281__a.length) {G__15281__a[G__15281__i] = arguments[G__15281__i + 0]; ++G__15281__i;}
  args = new cljs.core.IndexedSeq(G__15281__a,0);
} 
return G__15280__delegate.call(this,args);};
G__15280.cljs$lang$maxFixedArity = 0;
G__15280.cljs$lang$applyTo = (function (arglist__15282){
var args = cljs.core.seq(arglist__15282);
return G__15280__delegate(args);
});
G__15280.cljs$core$IFn$_invoke$arity$variadic = G__15280__delegate;
return G__15280;
})()
;

return null;
});
