goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__15946__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__15946 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15947__i = 0, G__15947__a = new Array(arguments.length -  0);
while (G__15947__i < G__15947__a.length) {G__15947__a[G__15947__i] = arguments[G__15947__i + 0]; ++G__15947__i;}
  args = new cljs.core.IndexedSeq(G__15947__a,0);
} 
return G__15946__delegate.call(this,args);};
G__15946.cljs$lang$maxFixedArity = 0;
G__15946.cljs$lang$applyTo = (function (arglist__15948){
var args = cljs.core.seq(arglist__15948);
return G__15946__delegate(args);
});
G__15946.cljs$core$IFn$_invoke$arity$variadic = G__15946__delegate;
return G__15946;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__15949__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__15949 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15950__i = 0, G__15950__a = new Array(arguments.length -  0);
while (G__15950__i < G__15950__a.length) {G__15950__a[G__15950__i] = arguments[G__15950__i + 0]; ++G__15950__i;}
  args = new cljs.core.IndexedSeq(G__15950__a,0);
} 
return G__15949__delegate.call(this,args);};
G__15949.cljs$lang$maxFixedArity = 0;
G__15949.cljs$lang$applyTo = (function (arglist__15951){
var args = cljs.core.seq(arglist__15951);
return G__15949__delegate(args);
});
G__15949.cljs$core$IFn$_invoke$arity$variadic = G__15949__delegate;
return G__15949;
})()
;

return null;
});
