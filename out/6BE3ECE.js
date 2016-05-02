goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__13361__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__13361 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13362__i = 0, G__13362__a = new Array(arguments.length -  0);
while (G__13362__i < G__13362__a.length) {G__13362__a[G__13362__i] = arguments[G__13362__i + 0]; ++G__13362__i;}
  args = new cljs.core.IndexedSeq(G__13362__a,0);
} 
return G__13361__delegate.call(this,args);};
G__13361.cljs$lang$maxFixedArity = 0;
G__13361.cljs$lang$applyTo = (function (arglist__13363){
var args = cljs.core.seq(arglist__13363);
return G__13361__delegate(args);
});
G__13361.cljs$core$IFn$_invoke$arity$variadic = G__13361__delegate;
return G__13361;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__13364__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__13364 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13365__i = 0, G__13365__a = new Array(arguments.length -  0);
while (G__13365__i < G__13365__a.length) {G__13365__a[G__13365__i] = arguments[G__13365__i + 0]; ++G__13365__i;}
  args = new cljs.core.IndexedSeq(G__13365__a,0);
} 
return G__13364__delegate.call(this,args);};
G__13364.cljs$lang$maxFixedArity = 0;
G__13364.cljs$lang$applyTo = (function (arglist__13366){
var args = cljs.core.seq(arglist__13366);
return G__13364__delegate(args);
});
G__13364.cljs$core$IFn$_invoke$arity$variadic = G__13364__delegate;
return G__13364;
})()
;

return null;
});
