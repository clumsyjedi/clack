goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__14111__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__14111 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14112__i = 0, G__14112__a = new Array(arguments.length -  0);
while (G__14112__i < G__14112__a.length) {G__14112__a[G__14112__i] = arguments[G__14112__i + 0]; ++G__14112__i;}
  args = new cljs.core.IndexedSeq(G__14112__a,0);
} 
return G__14111__delegate.call(this,args);};
G__14111.cljs$lang$maxFixedArity = 0;
G__14111.cljs$lang$applyTo = (function (arglist__14113){
var args = cljs.core.seq(arglist__14113);
return G__14111__delegate(args);
});
G__14111.cljs$core$IFn$_invoke$arity$variadic = G__14111__delegate;
return G__14111;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__14114__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__14114 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14115__i = 0, G__14115__a = new Array(arguments.length -  0);
while (G__14115__i < G__14115__a.length) {G__14115__a[G__14115__i] = arguments[G__14115__i + 0]; ++G__14115__i;}
  args = new cljs.core.IndexedSeq(G__14115__a,0);
} 
return G__14114__delegate.call(this,args);};
G__14114.cljs$lang$maxFixedArity = 0;
G__14114.cljs$lang$applyTo = (function (arglist__14116){
var args = cljs.core.seq(arglist__14116);
return G__14114__delegate(args);
});
G__14114.cljs$core$IFn$_invoke$arity$variadic = G__14114__delegate;
return G__14114;
})()
;

return null;
});
