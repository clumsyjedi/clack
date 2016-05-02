goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__13863__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__13863 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13864__i = 0, G__13864__a = new Array(arguments.length -  0);
while (G__13864__i < G__13864__a.length) {G__13864__a[G__13864__i] = arguments[G__13864__i + 0]; ++G__13864__i;}
  args = new cljs.core.IndexedSeq(G__13864__a,0);
} 
return G__13863__delegate.call(this,args);};
G__13863.cljs$lang$maxFixedArity = 0;
G__13863.cljs$lang$applyTo = (function (arglist__13865){
var args = cljs.core.seq(arglist__13865);
return G__13863__delegate(args);
});
G__13863.cljs$core$IFn$_invoke$arity$variadic = G__13863__delegate;
return G__13863;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__13866__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__13866 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13867__i = 0, G__13867__a = new Array(arguments.length -  0);
while (G__13867__i < G__13867__a.length) {G__13867__a[G__13867__i] = arguments[G__13867__i + 0]; ++G__13867__i;}
  args = new cljs.core.IndexedSeq(G__13867__a,0);
} 
return G__13866__delegate.call(this,args);};
G__13866.cljs$lang$maxFixedArity = 0;
G__13866.cljs$lang$applyTo = (function (arglist__13868){
var args = cljs.core.seq(arglist__13868);
return G__13866__delegate(args);
});
G__13866.cljs$core$IFn$_invoke$arity$variadic = G__13866__delegate;
return G__13866;
})()
;

return null;
});
