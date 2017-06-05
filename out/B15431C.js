goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__14966__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__14966 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14967__i = 0, G__14967__a = new Array(arguments.length -  0);
while (G__14967__i < G__14967__a.length) {G__14967__a[G__14967__i] = arguments[G__14967__i + 0]; ++G__14967__i;}
  args = new cljs.core.IndexedSeq(G__14967__a,0);
} 
return G__14966__delegate.call(this,args);};
G__14966.cljs$lang$maxFixedArity = 0;
G__14966.cljs$lang$applyTo = (function (arglist__14968){
var args = cljs.core.seq(arglist__14968);
return G__14966__delegate(args);
});
G__14966.cljs$core$IFn$_invoke$arity$variadic = G__14966__delegate;
return G__14966;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__14969__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__14969 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14970__i = 0, G__14970__a = new Array(arguments.length -  0);
while (G__14970__i < G__14970__a.length) {G__14970__a[G__14970__i] = arguments[G__14970__i + 0]; ++G__14970__i;}
  args = new cljs.core.IndexedSeq(G__14970__a,0);
} 
return G__14969__delegate.call(this,args);};
G__14969.cljs$lang$maxFixedArity = 0;
G__14969.cljs$lang$applyTo = (function (arglist__14971){
var args = cljs.core.seq(arglist__14971);
return G__14969__delegate(args);
});
G__14969.cljs$core$IFn$_invoke$arity$variadic = G__14969__delegate;
return G__14969;
})()
;

return null;
});
