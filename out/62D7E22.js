goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__16405__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__16405 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16406__i = 0, G__16406__a = new Array(arguments.length -  0);
while (G__16406__i < G__16406__a.length) {G__16406__a[G__16406__i] = arguments[G__16406__i + 0]; ++G__16406__i;}
  args = new cljs.core.IndexedSeq(G__16406__a,0);
} 
return G__16405__delegate.call(this,args);};
G__16405.cljs$lang$maxFixedArity = 0;
G__16405.cljs$lang$applyTo = (function (arglist__16407){
var args = cljs.core.seq(arglist__16407);
return G__16405__delegate(args);
});
G__16405.cljs$core$IFn$_invoke$arity$variadic = G__16405__delegate;
return G__16405;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__16408__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__16408 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16409__i = 0, G__16409__a = new Array(arguments.length -  0);
while (G__16409__i < G__16409__a.length) {G__16409__a[G__16409__i] = arguments[G__16409__i + 0]; ++G__16409__i;}
  args = new cljs.core.IndexedSeq(G__16409__a,0);
} 
return G__16408__delegate.call(this,args);};
G__16408.cljs$lang$maxFixedArity = 0;
G__16408.cljs$lang$applyTo = (function (arglist__16410){
var args = cljs.core.seq(arglist__16410);
return G__16408__delegate(args);
});
G__16408.cljs$core$IFn$_invoke$arity$variadic = G__16408__delegate;
return G__16408;
})()
;

return null;
});
