goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__13065__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__13065 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13066__i = 0, G__13066__a = new Array(arguments.length -  0);
while (G__13066__i < G__13066__a.length) {G__13066__a[G__13066__i] = arguments[G__13066__i + 0]; ++G__13066__i;}
  args = new cljs.core.IndexedSeq(G__13066__a,0);
} 
return G__13065__delegate.call(this,args);};
G__13065.cljs$lang$maxFixedArity = 0;
G__13065.cljs$lang$applyTo = (function (arglist__13067){
var args = cljs.core.seq(arglist__13067);
return G__13065__delegate(args);
});
G__13065.cljs$core$IFn$_invoke$arity$variadic = G__13065__delegate;
return G__13065;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__13068__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__13068 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13069__i = 0, G__13069__a = new Array(arguments.length -  0);
while (G__13069__i < G__13069__a.length) {G__13069__a[G__13069__i] = arguments[G__13069__i + 0]; ++G__13069__i;}
  args = new cljs.core.IndexedSeq(G__13069__a,0);
} 
return G__13068__delegate.call(this,args);};
G__13068.cljs$lang$maxFixedArity = 0;
G__13068.cljs$lang$applyTo = (function (arglist__13070){
var args = cljs.core.seq(arglist__13070);
return G__13068__delegate(args);
});
G__13068.cljs$core$IFn$_invoke$arity$variadic = G__13068__delegate;
return G__13068;
})()
;

return null;
});
