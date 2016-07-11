// Compiled by ClojureScript 1.8.51 {:optimize-constants true, :target :nodejs}
goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__13178__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__13178 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13179__i = 0, G__13179__a = new Array(arguments.length -  0);
while (G__13179__i < G__13179__a.length) {G__13179__a[G__13179__i] = arguments[G__13179__i + 0]; ++G__13179__i;}
  args = new cljs.core.IndexedSeq(G__13179__a,0);
} 
return G__13178__delegate.call(this,args);};
G__13178.cljs$lang$maxFixedArity = 0;
G__13178.cljs$lang$applyTo = (function (arglist__13180){
var args = cljs.core.seq(arglist__13180);
return G__13178__delegate(args);
});
G__13178.cljs$core$IFn$_invoke$arity$variadic = G__13178__delegate;
return G__13178;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__13181__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__13181 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13182__i = 0, G__13182__a = new Array(arguments.length -  0);
while (G__13182__i < G__13182__a.length) {G__13182__a[G__13182__i] = arguments[G__13182__i + 0]; ++G__13182__i;}
  args = new cljs.core.IndexedSeq(G__13182__a,0);
} 
return G__13181__delegate.call(this,args);};
G__13181.cljs$lang$maxFixedArity = 0;
G__13181.cljs$lang$applyTo = (function (arglist__13183){
var args = cljs.core.seq(arglist__13183);
return G__13181__delegate(args);
});
G__13181.cljs$core$IFn$_invoke$arity$variadic = G__13181__delegate;
return G__13181;
})()
;

return null;
});

//# sourceMappingURL=nodejs.js.map