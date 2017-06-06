goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__15449__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__15449 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15450__i = 0, G__15450__a = new Array(arguments.length -  0);
while (G__15450__i < G__15450__a.length) {G__15450__a[G__15450__i] = arguments[G__15450__i + 0]; ++G__15450__i;}
  args = new cljs.core.IndexedSeq(G__15450__a,0);
} 
return G__15449__delegate.call(this,args);};
G__15449.cljs$lang$maxFixedArity = 0;
G__15449.cljs$lang$applyTo = (function (arglist__15451){
var args = cljs.core.seq(arglist__15451);
return G__15449__delegate(args);
});
G__15449.cljs$core$IFn$_invoke$arity$variadic = G__15449__delegate;
return G__15449;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__15452__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__15452 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15453__i = 0, G__15453__a = new Array(arguments.length -  0);
while (G__15453__i < G__15453__a.length) {G__15453__a[G__15453__i] = arguments[G__15453__i + 0]; ++G__15453__i;}
  args = new cljs.core.IndexedSeq(G__15453__a,0);
} 
return G__15452__delegate.call(this,args);};
G__15452.cljs$lang$maxFixedArity = 0;
G__15452.cljs$lang$applyTo = (function (arglist__15454){
var args = cljs.core.seq(arglist__15454);
return G__15452__delegate(args);
});
G__15452.cljs$core$IFn$_invoke$arity$variadic = G__15452__delegate;
return G__15452;
})()
;

return null;
});
