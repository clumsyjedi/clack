goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__15028__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__15028 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15029__i = 0, G__15029__a = new Array(arguments.length -  0);
while (G__15029__i < G__15029__a.length) {G__15029__a[G__15029__i] = arguments[G__15029__i + 0]; ++G__15029__i;}
  args = new cljs.core.IndexedSeq(G__15029__a,0);
} 
return G__15028__delegate.call(this,args);};
G__15028.cljs$lang$maxFixedArity = 0;
G__15028.cljs$lang$applyTo = (function (arglist__15030){
var args = cljs.core.seq(arglist__15030);
return G__15028__delegate(args);
});
G__15028.cljs$core$IFn$_invoke$arity$variadic = G__15028__delegate;
return G__15028;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__15031__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__15031 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15032__i = 0, G__15032__a = new Array(arguments.length -  0);
while (G__15032__i < G__15032__a.length) {G__15032__a[G__15032__i] = arguments[G__15032__i + 0]; ++G__15032__i;}
  args = new cljs.core.IndexedSeq(G__15032__a,0);
} 
return G__15031__delegate.call(this,args);};
G__15031.cljs$lang$maxFixedArity = 0;
G__15031.cljs$lang$applyTo = (function (arglist__15033){
var args = cljs.core.seq(arglist__15033);
return G__15031__delegate(args);
});
G__15031.cljs$core$IFn$_invoke$arity$variadic = G__15031__delegate;
return G__15031;
})()
;

return null;
});
