// Compiled by ClojureScript 1.8.51 {:optimize-constants true, :target :nodejs}
goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__12032__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__12032 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12033__i = 0, G__12033__a = new Array(arguments.length -  0);
while (G__12033__i < G__12033__a.length) {G__12033__a[G__12033__i] = arguments[G__12033__i + 0]; ++G__12033__i;}
  args = new cljs.core.IndexedSeq(G__12033__a,0);
} 
return G__12032__delegate.call(this,args);};
G__12032.cljs$lang$maxFixedArity = 0;
G__12032.cljs$lang$applyTo = (function (arglist__12034){
var args = cljs.core.seq(arglist__12034);
return G__12032__delegate(args);
});
G__12032.cljs$core$IFn$_invoke$arity$variadic = G__12032__delegate;
return G__12032;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__12035__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__12035 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12036__i = 0, G__12036__a = new Array(arguments.length -  0);
while (G__12036__i < G__12036__a.length) {G__12036__a[G__12036__i] = arguments[G__12036__i + 0]; ++G__12036__i;}
  args = new cljs.core.IndexedSeq(G__12036__a,0);
} 
return G__12035__delegate.call(this,args);};
G__12035.cljs$lang$maxFixedArity = 0;
G__12035.cljs$lang$applyTo = (function (arglist__12037){
var args = cljs.core.seq(arglist__12037);
return G__12035__delegate(args);
});
G__12035.cljs$core$IFn$_invoke$arity$variadic = G__12035__delegate;
return G__12035;
})()
;

return null;
});

//# sourceMappingURL=nodejs.js.map