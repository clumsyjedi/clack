goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__15323__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__15323 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15324__i = 0, G__15324__a = new Array(arguments.length -  0);
while (G__15324__i < G__15324__a.length) {G__15324__a[G__15324__i] = arguments[G__15324__i + 0]; ++G__15324__i;}
  args = new cljs.core.IndexedSeq(G__15324__a,0);
} 
return G__15323__delegate.call(this,args);};
G__15323.cljs$lang$maxFixedArity = 0;
G__15323.cljs$lang$applyTo = (function (arglist__15325){
var args = cljs.core.seq(arglist__15325);
return G__15323__delegate(args);
});
G__15323.cljs$core$IFn$_invoke$arity$variadic = G__15323__delegate;
return G__15323;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__15326__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__15326 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15327__i = 0, G__15327__a = new Array(arguments.length -  0);
while (G__15327__i < G__15327__a.length) {G__15327__a[G__15327__i] = arguments[G__15327__i + 0]; ++G__15327__i;}
  args = new cljs.core.IndexedSeq(G__15327__a,0);
} 
return G__15326__delegate.call(this,args);};
G__15326.cljs$lang$maxFixedArity = 0;
G__15326.cljs$lang$applyTo = (function (arglist__15328){
var args = cljs.core.seq(arglist__15328);
return G__15326__delegate(args);
});
G__15326.cljs$core$IFn$_invoke$arity$variadic = G__15326__delegate;
return G__15326;
})()
;

return null;
});
