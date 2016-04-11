// Compiled by ClojureScript 1.8.41 {:target :nodejs}
goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__4459__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__4459 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__4460__i = 0, G__4460__a = new Array(arguments.length -  0);
while (G__4460__i < G__4460__a.length) {G__4460__a[G__4460__i] = arguments[G__4460__i + 0]; ++G__4460__i;}
  args = new cljs.core.IndexedSeq(G__4460__a,0);
} 
return G__4459__delegate.call(this,args);};
G__4459.cljs$lang$maxFixedArity = 0;
G__4459.cljs$lang$applyTo = (function (arglist__4461){
var args = cljs.core.seq(arglist__4461);
return G__4459__delegate(args);
});
G__4459.cljs$core$IFn$_invoke$arity$variadic = G__4459__delegate;
return G__4459;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__4462__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__4462 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__4463__i = 0, G__4463__a = new Array(arguments.length -  0);
while (G__4463__i < G__4463__a.length) {G__4463__a[G__4463__i] = arguments[G__4463__i + 0]; ++G__4463__i;}
  args = new cljs.core.IndexedSeq(G__4463__a,0);
} 
return G__4462__delegate.call(this,args);};
G__4462.cljs$lang$maxFixedArity = 0;
G__4462.cljs$lang$applyTo = (function (arglist__4464){
var args = cljs.core.seq(arglist__4464);
return G__4462__delegate(args);
});
G__4462.cljs$core$IFn$_invoke$arity$variadic = G__4462__delegate;
return G__4462;
})()
;

return null;
});

//# sourceMappingURL=nodejs.js.map