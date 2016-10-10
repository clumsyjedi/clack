goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__15400__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__15400 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15401__i = 0, G__15401__a = new Array(arguments.length -  0);
while (G__15401__i < G__15401__a.length) {G__15401__a[G__15401__i] = arguments[G__15401__i + 0]; ++G__15401__i;}
  args = new cljs.core.IndexedSeq(G__15401__a,0);
} 
return G__15400__delegate.call(this,args);};
G__15400.cljs$lang$maxFixedArity = 0;
G__15400.cljs$lang$applyTo = (function (arglist__15402){
var args = cljs.core.seq(arglist__15402);
return G__15400__delegate(args);
});
G__15400.cljs$core$IFn$_invoke$arity$variadic = G__15400__delegate;
return G__15400;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__15403__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__15403 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15404__i = 0, G__15404__a = new Array(arguments.length -  0);
while (G__15404__i < G__15404__a.length) {G__15404__a[G__15404__i] = arguments[G__15404__i + 0]; ++G__15404__i;}
  args = new cljs.core.IndexedSeq(G__15404__a,0);
} 
return G__15403__delegate.call(this,args);};
G__15403.cljs$lang$maxFixedArity = 0;
G__15403.cljs$lang$applyTo = (function (arglist__15405){
var args = cljs.core.seq(arglist__15405);
return G__15403__delegate(args);
});
G__15403.cljs$core$IFn$_invoke$arity$variadic = G__15403__delegate;
return G__15403;
})()
;

return null;
});
