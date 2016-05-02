goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__15509__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__15509 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15510__i = 0, G__15510__a = new Array(arguments.length -  0);
while (G__15510__i < G__15510__a.length) {G__15510__a[G__15510__i] = arguments[G__15510__i + 0]; ++G__15510__i;}
  args = new cljs.core.IndexedSeq(G__15510__a,0);
} 
return G__15509__delegate.call(this,args);};
G__15509.cljs$lang$maxFixedArity = 0;
G__15509.cljs$lang$applyTo = (function (arglist__15511){
var args = cljs.core.seq(arglist__15511);
return G__15509__delegate(args);
});
G__15509.cljs$core$IFn$_invoke$arity$variadic = G__15509__delegate;
return G__15509;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__15512__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__15512 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15513__i = 0, G__15513__a = new Array(arguments.length -  0);
while (G__15513__i < G__15513__a.length) {G__15513__a[G__15513__i] = arguments[G__15513__i + 0]; ++G__15513__i;}
  args = new cljs.core.IndexedSeq(G__15513__a,0);
} 
return G__15512__delegate.call(this,args);};
G__15512.cljs$lang$maxFixedArity = 0;
G__15512.cljs$lang$applyTo = (function (arglist__15514){
var args = cljs.core.seq(arglist__15514);
return G__15512__delegate(args);
});
G__15512.cljs$core$IFn$_invoke$arity$variadic = G__15512__delegate;
return G__15512;
})()
;

return null;
});
