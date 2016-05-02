goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__15129__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__15129 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15130__i = 0, G__15130__a = new Array(arguments.length -  0);
while (G__15130__i < G__15130__a.length) {G__15130__a[G__15130__i] = arguments[G__15130__i + 0]; ++G__15130__i;}
  args = new cljs.core.IndexedSeq(G__15130__a,0);
} 
return G__15129__delegate.call(this,args);};
G__15129.cljs$lang$maxFixedArity = 0;
G__15129.cljs$lang$applyTo = (function (arglist__15131){
var args = cljs.core.seq(arglist__15131);
return G__15129__delegate(args);
});
G__15129.cljs$core$IFn$_invoke$arity$variadic = G__15129__delegate;
return G__15129;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__15132__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__15132 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15133__i = 0, G__15133__a = new Array(arguments.length -  0);
while (G__15133__i < G__15133__a.length) {G__15133__a[G__15133__i] = arguments[G__15133__i + 0]; ++G__15133__i;}
  args = new cljs.core.IndexedSeq(G__15133__a,0);
} 
return G__15132__delegate.call(this,args);};
G__15132.cljs$lang$maxFixedArity = 0;
G__15132.cljs$lang$applyTo = (function (arglist__15134){
var args = cljs.core.seq(arglist__15134);
return G__15132__delegate(args);
});
G__15132.cljs$core$IFn$_invoke$arity$variadic = G__15132__delegate;
return G__15132;
})()
;

return null;
});
