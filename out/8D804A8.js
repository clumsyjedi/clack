goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__15985__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__15985 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15986__i = 0, G__15986__a = new Array(arguments.length -  0);
while (G__15986__i < G__15986__a.length) {G__15986__a[G__15986__i] = arguments[G__15986__i + 0]; ++G__15986__i;}
  args = new cljs.core.IndexedSeq(G__15986__a,0);
} 
return G__15985__delegate.call(this,args);};
G__15985.cljs$lang$maxFixedArity = 0;
G__15985.cljs$lang$applyTo = (function (arglist__15987){
var args = cljs.core.seq(arglist__15987);
return G__15985__delegate(args);
});
G__15985.cljs$core$IFn$_invoke$arity$variadic = G__15985__delegate;
return G__15985;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__15988__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__15988 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15989__i = 0, G__15989__a = new Array(arguments.length -  0);
while (G__15989__i < G__15989__a.length) {G__15989__a[G__15989__i] = arguments[G__15989__i + 0]; ++G__15989__i;}
  args = new cljs.core.IndexedSeq(G__15989__a,0);
} 
return G__15988__delegate.call(this,args);};
G__15988.cljs$lang$maxFixedArity = 0;
G__15988.cljs$lang$applyTo = (function (arglist__15990){
var args = cljs.core.seq(arglist__15990);
return G__15988__delegate(args);
});
G__15988.cljs$core$IFn$_invoke$arity$variadic = G__15988__delegate;
return G__15988;
})()
;

return null;
});
