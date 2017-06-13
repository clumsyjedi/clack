goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__15217__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__15217 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15218__i = 0, G__15218__a = new Array(arguments.length -  0);
while (G__15218__i < G__15218__a.length) {G__15218__a[G__15218__i] = arguments[G__15218__i + 0]; ++G__15218__i;}
  args = new cljs.core.IndexedSeq(G__15218__a,0);
} 
return G__15217__delegate.call(this,args);};
G__15217.cljs$lang$maxFixedArity = 0;
G__15217.cljs$lang$applyTo = (function (arglist__15219){
var args = cljs.core.seq(arglist__15219);
return G__15217__delegate(args);
});
G__15217.cljs$core$IFn$_invoke$arity$variadic = G__15217__delegate;
return G__15217;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__15220__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__15220 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15221__i = 0, G__15221__a = new Array(arguments.length -  0);
while (G__15221__i < G__15221__a.length) {G__15221__a[G__15221__i] = arguments[G__15221__i + 0]; ++G__15221__i;}
  args = new cljs.core.IndexedSeq(G__15221__a,0);
} 
return G__15220__delegate.call(this,args);};
G__15220.cljs$lang$maxFixedArity = 0;
G__15220.cljs$lang$applyTo = (function (arglist__15222){
var args = cljs.core.seq(arglist__15222);
return G__15220__delegate(args);
});
G__15220.cljs$core$IFn$_invoke$arity$variadic = G__15220__delegate;
return G__15220;
})()
;

return null;
});
