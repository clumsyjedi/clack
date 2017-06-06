goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__16071__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__16071 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16072__i = 0, G__16072__a = new Array(arguments.length -  0);
while (G__16072__i < G__16072__a.length) {G__16072__a[G__16072__i] = arguments[G__16072__i + 0]; ++G__16072__i;}
  args = new cljs.core.IndexedSeq(G__16072__a,0);
} 
return G__16071__delegate.call(this,args);};
G__16071.cljs$lang$maxFixedArity = 0;
G__16071.cljs$lang$applyTo = (function (arglist__16073){
var args = cljs.core.seq(arglist__16073);
return G__16071__delegate(args);
});
G__16071.cljs$core$IFn$_invoke$arity$variadic = G__16071__delegate;
return G__16071;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__16074__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__16074 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16075__i = 0, G__16075__a = new Array(arguments.length -  0);
while (G__16075__i < G__16075__a.length) {G__16075__a[G__16075__i] = arguments[G__16075__i + 0]; ++G__16075__i;}
  args = new cljs.core.IndexedSeq(G__16075__a,0);
} 
return G__16074__delegate.call(this,args);};
G__16074.cljs$lang$maxFixedArity = 0;
G__16074.cljs$lang$applyTo = (function (arglist__16076){
var args = cljs.core.seq(arglist__16076);
return G__16074__delegate(args);
});
G__16074.cljs$core$IFn$_invoke$arity$variadic = G__16074__delegate;
return G__16074;
})()
;

return null;
});
