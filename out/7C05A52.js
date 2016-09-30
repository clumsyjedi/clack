goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__15513__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__15513 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15514__i = 0, G__15514__a = new Array(arguments.length -  0);
while (G__15514__i < G__15514__a.length) {G__15514__a[G__15514__i] = arguments[G__15514__i + 0]; ++G__15514__i;}
  args = new cljs.core.IndexedSeq(G__15514__a,0);
} 
return G__15513__delegate.call(this,args);};
G__15513.cljs$lang$maxFixedArity = 0;
G__15513.cljs$lang$applyTo = (function (arglist__15515){
var args = cljs.core.seq(arglist__15515);
return G__15513__delegate(args);
});
G__15513.cljs$core$IFn$_invoke$arity$variadic = G__15513__delegate;
return G__15513;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__15516__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__15516 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15517__i = 0, G__15517__a = new Array(arguments.length -  0);
while (G__15517__i < G__15517__a.length) {G__15517__a[G__15517__i] = arguments[G__15517__i + 0]; ++G__15517__i;}
  args = new cljs.core.IndexedSeq(G__15517__a,0);
} 
return G__15516__delegate.call(this,args);};
G__15516.cljs$lang$maxFixedArity = 0;
G__15516.cljs$lang$applyTo = (function (arglist__15518){
var args = cljs.core.seq(arglist__15518);
return G__15516__delegate(args);
});
G__15516.cljs$core$IFn$_invoke$arity$variadic = G__15516__delegate;
return G__15516;
})()
;

return null;
});
