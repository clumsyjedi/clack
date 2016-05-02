goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__15713__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__15713 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15714__i = 0, G__15714__a = new Array(arguments.length -  0);
while (G__15714__i < G__15714__a.length) {G__15714__a[G__15714__i] = arguments[G__15714__i + 0]; ++G__15714__i;}
  args = new cljs.core.IndexedSeq(G__15714__a,0);
} 
return G__15713__delegate.call(this,args);};
G__15713.cljs$lang$maxFixedArity = 0;
G__15713.cljs$lang$applyTo = (function (arglist__15715){
var args = cljs.core.seq(arglist__15715);
return G__15713__delegate(args);
});
G__15713.cljs$core$IFn$_invoke$arity$variadic = G__15713__delegate;
return G__15713;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__15716__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__15716 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15717__i = 0, G__15717__a = new Array(arguments.length -  0);
while (G__15717__i < G__15717__a.length) {G__15717__a[G__15717__i] = arguments[G__15717__i + 0]; ++G__15717__i;}
  args = new cljs.core.IndexedSeq(G__15717__a,0);
} 
return G__15716__delegate.call(this,args);};
G__15716.cljs$lang$maxFixedArity = 0;
G__15716.cljs$lang$applyTo = (function (arglist__15718){
var args = cljs.core.seq(arglist__15718);
return G__15716__delegate(args);
});
G__15716.cljs$core$IFn$_invoke$arity$variadic = G__15716__delegate;
return G__15716;
})()
;

return null;
});
