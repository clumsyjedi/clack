goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__14431__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__14431 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14432__i = 0, G__14432__a = new Array(arguments.length -  0);
while (G__14432__i < G__14432__a.length) {G__14432__a[G__14432__i] = arguments[G__14432__i + 0]; ++G__14432__i;}
  args = new cljs.core.IndexedSeq(G__14432__a,0);
} 
return G__14431__delegate.call(this,args);};
G__14431.cljs$lang$maxFixedArity = 0;
G__14431.cljs$lang$applyTo = (function (arglist__14433){
var args = cljs.core.seq(arglist__14433);
return G__14431__delegate(args);
});
G__14431.cljs$core$IFn$_invoke$arity$variadic = G__14431__delegate;
return G__14431;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__14434__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__14434 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14435__i = 0, G__14435__a = new Array(arguments.length -  0);
while (G__14435__i < G__14435__a.length) {G__14435__a[G__14435__i] = arguments[G__14435__i + 0]; ++G__14435__i;}
  args = new cljs.core.IndexedSeq(G__14435__a,0);
} 
return G__14434__delegate.call(this,args);};
G__14434.cljs$lang$maxFixedArity = 0;
G__14434.cljs$lang$applyTo = (function (arglist__14436){
var args = cljs.core.seq(arglist__14436);
return G__14434__delegate(args);
});
G__14434.cljs$core$IFn$_invoke$arity$variadic = G__14434__delegate;
return G__14434;
})()
;

return null;
});
