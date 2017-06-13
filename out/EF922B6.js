goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__15437__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__15437 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15438__i = 0, G__15438__a = new Array(arguments.length -  0);
while (G__15438__i < G__15438__a.length) {G__15438__a[G__15438__i] = arguments[G__15438__i + 0]; ++G__15438__i;}
  args = new cljs.core.IndexedSeq(G__15438__a,0);
} 
return G__15437__delegate.call(this,args);};
G__15437.cljs$lang$maxFixedArity = 0;
G__15437.cljs$lang$applyTo = (function (arglist__15439){
var args = cljs.core.seq(arglist__15439);
return G__15437__delegate(args);
});
G__15437.cljs$core$IFn$_invoke$arity$variadic = G__15437__delegate;
return G__15437;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__15440__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__15440 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15441__i = 0, G__15441__a = new Array(arguments.length -  0);
while (G__15441__i < G__15441__a.length) {G__15441__a[G__15441__i] = arguments[G__15441__i + 0]; ++G__15441__i;}
  args = new cljs.core.IndexedSeq(G__15441__a,0);
} 
return G__15440__delegate.call(this,args);};
G__15440.cljs$lang$maxFixedArity = 0;
G__15440.cljs$lang$applyTo = (function (arglist__15442){
var args = cljs.core.seq(arglist__15442);
return G__15440__delegate(args);
});
G__15440.cljs$core$IFn$_invoke$arity$variadic = G__15440__delegate;
return G__15440;
})()
;

return null;
});
