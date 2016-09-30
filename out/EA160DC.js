goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__14941__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__14941 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14942__i = 0, G__14942__a = new Array(arguments.length -  0);
while (G__14942__i < G__14942__a.length) {G__14942__a[G__14942__i] = arguments[G__14942__i + 0]; ++G__14942__i;}
  args = new cljs.core.IndexedSeq(G__14942__a,0);
} 
return G__14941__delegate.call(this,args);};
G__14941.cljs$lang$maxFixedArity = 0;
G__14941.cljs$lang$applyTo = (function (arglist__14943){
var args = cljs.core.seq(arglist__14943);
return G__14941__delegate(args);
});
G__14941.cljs$core$IFn$_invoke$arity$variadic = G__14941__delegate;
return G__14941;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__14944__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__14944 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14945__i = 0, G__14945__a = new Array(arguments.length -  0);
while (G__14945__i < G__14945__a.length) {G__14945__a[G__14945__i] = arguments[G__14945__i + 0]; ++G__14945__i;}
  args = new cljs.core.IndexedSeq(G__14945__a,0);
} 
return G__14944__delegate.call(this,args);};
G__14944.cljs$lang$maxFixedArity = 0;
G__14944.cljs$lang$applyTo = (function (arglist__14946){
var args = cljs.core.seq(arglist__14946);
return G__14944__delegate(args);
});
G__14944.cljs$core$IFn$_invoke$arity$variadic = G__14944__delegate;
return G__14944;
})()
;

return null;
});
