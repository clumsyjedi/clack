goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__5554__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__5554 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__5555__i = 0, G__5555__a = new Array(arguments.length -  0);
while (G__5555__i < G__5555__a.length) {G__5555__a[G__5555__i] = arguments[G__5555__i + 0]; ++G__5555__i;}
  args = new cljs.core.IndexedSeq(G__5555__a,0);
} 
return G__5554__delegate.call(this,args);};
G__5554.cljs$lang$maxFixedArity = 0;
G__5554.cljs$lang$applyTo = (function (arglist__5556){
var args = cljs.core.seq(arglist__5556);
return G__5554__delegate(args);
});
G__5554.cljs$core$IFn$_invoke$arity$variadic = G__5554__delegate;
return G__5554;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__5557__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__5557 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__5558__i = 0, G__5558__a = new Array(arguments.length -  0);
while (G__5558__i < G__5558__a.length) {G__5558__a[G__5558__i] = arguments[G__5558__i + 0]; ++G__5558__i;}
  args = new cljs.core.IndexedSeq(G__5558__a,0);
} 
return G__5557__delegate.call(this,args);};
G__5557.cljs$lang$maxFixedArity = 0;
G__5557.cljs$lang$applyTo = (function (arglist__5559){
var args = cljs.core.seq(arglist__5559);
return G__5557__delegate(args);
});
G__5557.cljs$core$IFn$_invoke$arity$variadic = G__5557__delegate;
return G__5557;
})()
;

return null;
});
