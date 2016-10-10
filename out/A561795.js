goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__15307__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__15307 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15308__i = 0, G__15308__a = new Array(arguments.length -  0);
while (G__15308__i < G__15308__a.length) {G__15308__a[G__15308__i] = arguments[G__15308__i + 0]; ++G__15308__i;}
  args = new cljs.core.IndexedSeq(G__15308__a,0);
} 
return G__15307__delegate.call(this,args);};
G__15307.cljs$lang$maxFixedArity = 0;
G__15307.cljs$lang$applyTo = (function (arglist__15309){
var args = cljs.core.seq(arglist__15309);
return G__15307__delegate(args);
});
G__15307.cljs$core$IFn$_invoke$arity$variadic = G__15307__delegate;
return G__15307;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__15310__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__15310 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15311__i = 0, G__15311__a = new Array(arguments.length -  0);
while (G__15311__i < G__15311__a.length) {G__15311__a[G__15311__i] = arguments[G__15311__i + 0]; ++G__15311__i;}
  args = new cljs.core.IndexedSeq(G__15311__a,0);
} 
return G__15310__delegate.call(this,args);};
G__15310.cljs$lang$maxFixedArity = 0;
G__15310.cljs$lang$applyTo = (function (arglist__15312){
var args = cljs.core.seq(arglist__15312);
return G__15310__delegate(args);
});
G__15310.cljs$core$IFn$_invoke$arity$variadic = G__15310__delegate;
return G__15310;
})()
;

return null;
});
