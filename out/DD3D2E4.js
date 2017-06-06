goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__15328__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__15328 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15329__i = 0, G__15329__a = new Array(arguments.length -  0);
while (G__15329__i < G__15329__a.length) {G__15329__a[G__15329__i] = arguments[G__15329__i + 0]; ++G__15329__i;}
  args = new cljs.core.IndexedSeq(G__15329__a,0);
} 
return G__15328__delegate.call(this,args);};
G__15328.cljs$lang$maxFixedArity = 0;
G__15328.cljs$lang$applyTo = (function (arglist__15330){
var args = cljs.core.seq(arglist__15330);
return G__15328__delegate(args);
});
G__15328.cljs$core$IFn$_invoke$arity$variadic = G__15328__delegate;
return G__15328;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__15331__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__15331 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15332__i = 0, G__15332__a = new Array(arguments.length -  0);
while (G__15332__i < G__15332__a.length) {G__15332__a[G__15332__i] = arguments[G__15332__i + 0]; ++G__15332__i;}
  args = new cljs.core.IndexedSeq(G__15332__a,0);
} 
return G__15331__delegate.call(this,args);};
G__15331.cljs$lang$maxFixedArity = 0;
G__15331.cljs$lang$applyTo = (function (arglist__15333){
var args = cljs.core.seq(arglist__15333);
return G__15331__delegate(args);
});
G__15331.cljs$core$IFn$_invoke$arity$variadic = G__15331__delegate;
return G__15331;
})()
;

return null;
});
