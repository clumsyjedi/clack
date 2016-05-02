goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__14239__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__14239 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14240__i = 0, G__14240__a = new Array(arguments.length -  0);
while (G__14240__i < G__14240__a.length) {G__14240__a[G__14240__i] = arguments[G__14240__i + 0]; ++G__14240__i;}
  args = new cljs.core.IndexedSeq(G__14240__a,0);
} 
return G__14239__delegate.call(this,args);};
G__14239.cljs$lang$maxFixedArity = 0;
G__14239.cljs$lang$applyTo = (function (arglist__14241){
var args = cljs.core.seq(arglist__14241);
return G__14239__delegate(args);
});
G__14239.cljs$core$IFn$_invoke$arity$variadic = G__14239__delegate;
return G__14239;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__14242__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__14242 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14243__i = 0, G__14243__a = new Array(arguments.length -  0);
while (G__14243__i < G__14243__a.length) {G__14243__a[G__14243__i] = arguments[G__14243__i + 0]; ++G__14243__i;}
  args = new cljs.core.IndexedSeq(G__14243__a,0);
} 
return G__14242__delegate.call(this,args);};
G__14242.cljs$lang$maxFixedArity = 0;
G__14242.cljs$lang$applyTo = (function (arglist__14244){
var args = cljs.core.seq(arglist__14244);
return G__14242__delegate(args);
});
G__14242.cljs$core$IFn$_invoke$arity$variadic = G__14242__delegate;
return G__14242;
})()
;

return null;
});
