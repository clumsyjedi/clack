goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__15077__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__15077 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15078__i = 0, G__15078__a = new Array(arguments.length -  0);
while (G__15078__i < G__15078__a.length) {G__15078__a[G__15078__i] = arguments[G__15078__i + 0]; ++G__15078__i;}
  args = new cljs.core.IndexedSeq(G__15078__a,0);
} 
return G__15077__delegate.call(this,args);};
G__15077.cljs$lang$maxFixedArity = 0;
G__15077.cljs$lang$applyTo = (function (arglist__15079){
var args = cljs.core.seq(arglist__15079);
return G__15077__delegate(args);
});
G__15077.cljs$core$IFn$_invoke$arity$variadic = G__15077__delegate;
return G__15077;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__15080__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__15080 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15081__i = 0, G__15081__a = new Array(arguments.length -  0);
while (G__15081__i < G__15081__a.length) {G__15081__a[G__15081__i] = arguments[G__15081__i + 0]; ++G__15081__i;}
  args = new cljs.core.IndexedSeq(G__15081__a,0);
} 
return G__15080__delegate.call(this,args);};
G__15080.cljs$lang$maxFixedArity = 0;
G__15080.cljs$lang$applyTo = (function (arglist__15082){
var args = cljs.core.seq(arglist__15082);
return G__15080__delegate(args);
});
G__15080.cljs$core$IFn$_invoke$arity$variadic = G__15080__delegate;
return G__15080;
})()
;

return null;
});
