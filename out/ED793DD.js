goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__13987__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__13987 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13988__i = 0, G__13988__a = new Array(arguments.length -  0);
while (G__13988__i < G__13988__a.length) {G__13988__a[G__13988__i] = arguments[G__13988__i + 0]; ++G__13988__i;}
  args = new cljs.core.IndexedSeq(G__13988__a,0);
} 
return G__13987__delegate.call(this,args);};
G__13987.cljs$lang$maxFixedArity = 0;
G__13987.cljs$lang$applyTo = (function (arglist__13989){
var args = cljs.core.seq(arglist__13989);
return G__13987__delegate(args);
});
G__13987.cljs$core$IFn$_invoke$arity$variadic = G__13987__delegate;
return G__13987;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__13990__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__13990 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13991__i = 0, G__13991__a = new Array(arguments.length -  0);
while (G__13991__i < G__13991__a.length) {G__13991__a[G__13991__i] = arguments[G__13991__i + 0]; ++G__13991__i;}
  args = new cljs.core.IndexedSeq(G__13991__a,0);
} 
return G__13990__delegate.call(this,args);};
G__13990.cljs$lang$maxFixedArity = 0;
G__13990.cljs$lang$applyTo = (function (arglist__13992){
var args = cljs.core.seq(arglist__13992);
return G__13990__delegate(args);
});
G__13990.cljs$core$IFn$_invoke$arity$variadic = G__13990__delegate;
return G__13990;
})()
;

return null;
});
