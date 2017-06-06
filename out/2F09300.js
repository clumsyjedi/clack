goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__15602__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__15602 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15603__i = 0, G__15603__a = new Array(arguments.length -  0);
while (G__15603__i < G__15603__a.length) {G__15603__a[G__15603__i] = arguments[G__15603__i + 0]; ++G__15603__i;}
  args = new cljs.core.IndexedSeq(G__15603__a,0);
} 
return G__15602__delegate.call(this,args);};
G__15602.cljs$lang$maxFixedArity = 0;
G__15602.cljs$lang$applyTo = (function (arglist__15604){
var args = cljs.core.seq(arglist__15604);
return G__15602__delegate(args);
});
G__15602.cljs$core$IFn$_invoke$arity$variadic = G__15602__delegate;
return G__15602;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__15605__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__15605 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15606__i = 0, G__15606__a = new Array(arguments.length -  0);
while (G__15606__i < G__15606__a.length) {G__15606__a[G__15606__i] = arguments[G__15606__i + 0]; ++G__15606__i;}
  args = new cljs.core.IndexedSeq(G__15606__a,0);
} 
return G__15605__delegate.call(this,args);};
G__15605.cljs$lang$maxFixedArity = 0;
G__15605.cljs$lang$applyTo = (function (arglist__15607){
var args = cljs.core.seq(arglist__15607);
return G__15605__delegate(args);
});
G__15605.cljs$core$IFn$_invoke$arity$variadic = G__15605__delegate;
return G__15605;
})()
;

return null;
});
