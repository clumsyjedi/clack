// Compiled by ClojureScript 1.8.51 {:optimize-constants true, :target :nodejs}
goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__11876__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__11876 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11877__i = 0, G__11877__a = new Array(arguments.length -  0);
while (G__11877__i < G__11877__a.length) {G__11877__a[G__11877__i] = arguments[G__11877__i + 0]; ++G__11877__i;}
  args = new cljs.core.IndexedSeq(G__11877__a,0);
} 
return G__11876__delegate.call(this,args);};
G__11876.cljs$lang$maxFixedArity = 0;
G__11876.cljs$lang$applyTo = (function (arglist__11878){
var args = cljs.core.seq(arglist__11878);
return G__11876__delegate(args);
});
G__11876.cljs$core$IFn$_invoke$arity$variadic = G__11876__delegate;
return G__11876;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__11879__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__11879 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11880__i = 0, G__11880__a = new Array(arguments.length -  0);
while (G__11880__i < G__11880__a.length) {G__11880__a[G__11880__i] = arguments[G__11880__i + 0]; ++G__11880__i;}
  args = new cljs.core.IndexedSeq(G__11880__a,0);
} 
return G__11879__delegate.call(this,args);};
G__11879.cljs$lang$maxFixedArity = 0;
G__11879.cljs$lang$applyTo = (function (arglist__11881){
var args = cljs.core.seq(arglist__11881);
return G__11879__delegate(args);
});
G__11879.cljs$core$IFn$_invoke$arity$variadic = G__11879__delegate;
return G__11879;
})()
;

return null;
});

//# sourceMappingURL=nodejs.js.map