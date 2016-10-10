goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__15493__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__15493 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15494__i = 0, G__15494__a = new Array(arguments.length -  0);
while (G__15494__i < G__15494__a.length) {G__15494__a[G__15494__i] = arguments[G__15494__i + 0]; ++G__15494__i;}
  args = new cljs.core.IndexedSeq(G__15494__a,0);
} 
return G__15493__delegate.call(this,args);};
G__15493.cljs$lang$maxFixedArity = 0;
G__15493.cljs$lang$applyTo = (function (arglist__15495){
var args = cljs.core.seq(arglist__15495);
return G__15493__delegate(args);
});
G__15493.cljs$core$IFn$_invoke$arity$variadic = G__15493__delegate;
return G__15493;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__15496__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__15496 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15497__i = 0, G__15497__a = new Array(arguments.length -  0);
while (G__15497__i < G__15497__a.length) {G__15497__a[G__15497__i] = arguments[G__15497__i + 0]; ++G__15497__i;}
  args = new cljs.core.IndexedSeq(G__15497__a,0);
} 
return G__15496__delegate.call(this,args);};
G__15496.cljs$lang$maxFixedArity = 0;
G__15496.cljs$lang$applyTo = (function (arglist__15498){
var args = cljs.core.seq(arglist__15498);
return G__15496__delegate(args);
});
G__15496.cljs$core$IFn$_invoke$arity$variadic = G__15496__delegate;
return G__15496;
})()
;

return null;
});
