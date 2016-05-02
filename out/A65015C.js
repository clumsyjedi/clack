goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__15845__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__15845 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15846__i = 0, G__15846__a = new Array(arguments.length -  0);
while (G__15846__i < G__15846__a.length) {G__15846__a[G__15846__i] = arguments[G__15846__i + 0]; ++G__15846__i;}
  args = new cljs.core.IndexedSeq(G__15846__a,0);
} 
return G__15845__delegate.call(this,args);};
G__15845.cljs$lang$maxFixedArity = 0;
G__15845.cljs$lang$applyTo = (function (arglist__15847){
var args = cljs.core.seq(arglist__15847);
return G__15845__delegate(args);
});
G__15845.cljs$core$IFn$_invoke$arity$variadic = G__15845__delegate;
return G__15845;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__15848__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__15848 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15849__i = 0, G__15849__a = new Array(arguments.length -  0);
while (G__15849__i < G__15849__a.length) {G__15849__a[G__15849__i] = arguments[G__15849__i + 0]; ++G__15849__i;}
  args = new cljs.core.IndexedSeq(G__15849__a,0);
} 
return G__15848__delegate.call(this,args);};
G__15848.cljs$lang$maxFixedArity = 0;
G__15848.cljs$lang$applyTo = (function (arglist__15850){
var args = cljs.core.seq(arglist__15850);
return G__15848__delegate(args);
});
G__15848.cljs$core$IFn$_invoke$arity$variadic = G__15848__delegate;
return G__15848;
})()
;

return null;
});
