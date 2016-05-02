goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__13233__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__13233 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13234__i = 0, G__13234__a = new Array(arguments.length -  0);
while (G__13234__i < G__13234__a.length) {G__13234__a[G__13234__i] = arguments[G__13234__i + 0]; ++G__13234__i;}
  args = new cljs.core.IndexedSeq(G__13234__a,0);
} 
return G__13233__delegate.call(this,args);};
G__13233.cljs$lang$maxFixedArity = 0;
G__13233.cljs$lang$applyTo = (function (arglist__13235){
var args = cljs.core.seq(arglist__13235);
return G__13233__delegate(args);
});
G__13233.cljs$core$IFn$_invoke$arity$variadic = G__13233__delegate;
return G__13233;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__13236__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__13236 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13237__i = 0, G__13237__a = new Array(arguments.length -  0);
while (G__13237__i < G__13237__a.length) {G__13237__a[G__13237__i] = arguments[G__13237__i + 0]; ++G__13237__i;}
  args = new cljs.core.IndexedSeq(G__13237__a,0);
} 
return G__13236__delegate.call(this,args);};
G__13236.cljs$lang$maxFixedArity = 0;
G__13236.cljs$lang$applyTo = (function (arglist__13238){
var args = cljs.core.seq(arglist__13238);
return G__13236__delegate(args);
});
G__13236.cljs$core$IFn$_invoke$arity$variadic = G__13236__delegate;
return G__13236;
})()
;

return null;
});
