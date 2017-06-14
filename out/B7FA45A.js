goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__15107__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__15107 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15108__i = 0, G__15108__a = new Array(arguments.length -  0);
while (G__15108__i < G__15108__a.length) {G__15108__a[G__15108__i] = arguments[G__15108__i + 0]; ++G__15108__i;}
  args = new cljs.core.IndexedSeq(G__15108__a,0);
} 
return G__15107__delegate.call(this,args);};
G__15107.cljs$lang$maxFixedArity = 0;
G__15107.cljs$lang$applyTo = (function (arglist__15109){
var args = cljs.core.seq(arglist__15109);
return G__15107__delegate(args);
});
G__15107.cljs$core$IFn$_invoke$arity$variadic = G__15107__delegate;
return G__15107;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__15110__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__15110 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15111__i = 0, G__15111__a = new Array(arguments.length -  0);
while (G__15111__i < G__15111__a.length) {G__15111__a[G__15111__i] = arguments[G__15111__i + 0]; ++G__15111__i;}
  args = new cljs.core.IndexedSeq(G__15111__a,0);
} 
return G__15110__delegate.call(this,args);};
G__15110.cljs$lang$maxFixedArity = 0;
G__15110.cljs$lang$applyTo = (function (arglist__15112){
var args = cljs.core.seq(arglist__15112);
return G__15110__delegate(args);
});
G__15110.cljs$core$IFn$_invoke$arity$variadic = G__15110__delegate;
return G__15110;
})()
;

return null;
});
