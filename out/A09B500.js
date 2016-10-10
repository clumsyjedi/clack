goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__15740__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__15740 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15741__i = 0, G__15741__a = new Array(arguments.length -  0);
while (G__15741__i < G__15741__a.length) {G__15741__a[G__15741__i] = arguments[G__15741__i + 0]; ++G__15741__i;}
  args = new cljs.core.IndexedSeq(G__15741__a,0);
} 
return G__15740__delegate.call(this,args);};
G__15740.cljs$lang$maxFixedArity = 0;
G__15740.cljs$lang$applyTo = (function (arglist__15742){
var args = cljs.core.seq(arglist__15742);
return G__15740__delegate(args);
});
G__15740.cljs$core$IFn$_invoke$arity$variadic = G__15740__delegate;
return G__15740;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__15743__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__15743 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15744__i = 0, G__15744__a = new Array(arguments.length -  0);
while (G__15744__i < G__15744__a.length) {G__15744__a[G__15744__i] = arguments[G__15744__i + 0]; ++G__15744__i;}
  args = new cljs.core.IndexedSeq(G__15744__a,0);
} 
return G__15743__delegate.call(this,args);};
G__15743.cljs$lang$maxFixedArity = 0;
G__15743.cljs$lang$applyTo = (function (arglist__15745){
var args = cljs.core.seq(arglist__15745);
return G__15743__delegate(args);
});
G__15743.cljs$core$IFn$_invoke$arity$variadic = G__15743__delegate;
return G__15743;
})()
;

return null;
});
