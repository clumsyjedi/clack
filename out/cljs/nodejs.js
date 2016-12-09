// Compiled by ClojureScript 1.9.229 {:optimize-constants true, :target :nodejs}
goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__14972__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__14972 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14973__i = 0, G__14973__a = new Array(arguments.length -  0);
while (G__14973__i < G__14973__a.length) {G__14973__a[G__14973__i] = arguments[G__14973__i + 0]; ++G__14973__i;}
  args = new cljs.core.IndexedSeq(G__14973__a,0);
} 
return G__14972__delegate.call(this,args);};
G__14972.cljs$lang$maxFixedArity = 0;
G__14972.cljs$lang$applyTo = (function (arglist__14974){
var args = cljs.core.seq(arglist__14974);
return G__14972__delegate(args);
});
G__14972.cljs$core$IFn$_invoke$arity$variadic = G__14972__delegate;
return G__14972;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__14975__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__14975 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14976__i = 0, G__14976__a = new Array(arguments.length -  0);
while (G__14976__i < G__14976__a.length) {G__14976__a[G__14976__i] = arguments[G__14976__i + 0]; ++G__14976__i;}
  args = new cljs.core.IndexedSeq(G__14976__a,0);
} 
return G__14975__delegate.call(this,args);};
G__14975.cljs$lang$maxFixedArity = 0;
G__14975.cljs$lang$applyTo = (function (arglist__14977){
var args = cljs.core.seq(arglist__14977);
return G__14975__delegate(args);
});
G__14975.cljs$core$IFn$_invoke$arity$variadic = G__14975__delegate;
return G__14975;
})()
;

return null;
});

//# sourceMappingURL=nodejs.js.map