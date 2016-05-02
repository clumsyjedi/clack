goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__13487__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__13487 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13488__i = 0, G__13488__a = new Array(arguments.length -  0);
while (G__13488__i < G__13488__a.length) {G__13488__a[G__13488__i] = arguments[G__13488__i + 0]; ++G__13488__i;}
  args = new cljs.core.IndexedSeq(G__13488__a,0);
} 
return G__13487__delegate.call(this,args);};
G__13487.cljs$lang$maxFixedArity = 0;
G__13487.cljs$lang$applyTo = (function (arglist__13489){
var args = cljs.core.seq(arglist__13489);
return G__13487__delegate(args);
});
G__13487.cljs$core$IFn$_invoke$arity$variadic = G__13487__delegate;
return G__13487;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__13490__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__13490 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13491__i = 0, G__13491__a = new Array(arguments.length -  0);
while (G__13491__i < G__13491__a.length) {G__13491__a[G__13491__i] = arguments[G__13491__i + 0]; ++G__13491__i;}
  args = new cljs.core.IndexedSeq(G__13491__a,0);
} 
return G__13490__delegate.call(this,args);};
G__13490.cljs$lang$maxFixedArity = 0;
G__13490.cljs$lang$applyTo = (function (arglist__13492){
var args = cljs.core.seq(arglist__13492);
return G__13490__delegate(args);
});
G__13490.cljs$core$IFn$_invoke$arity$variadic = G__13490__delegate;
return G__13490;
})()
;

return null;
});
