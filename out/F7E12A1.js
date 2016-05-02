goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__13551__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__13551 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13552__i = 0, G__13552__a = new Array(arguments.length -  0);
while (G__13552__i < G__13552__a.length) {G__13552__a[G__13552__i] = arguments[G__13552__i + 0]; ++G__13552__i;}
  args = new cljs.core.IndexedSeq(G__13552__a,0);
} 
return G__13551__delegate.call(this,args);};
G__13551.cljs$lang$maxFixedArity = 0;
G__13551.cljs$lang$applyTo = (function (arglist__13553){
var args = cljs.core.seq(arglist__13553);
return G__13551__delegate(args);
});
G__13551.cljs$core$IFn$_invoke$arity$variadic = G__13551__delegate;
return G__13551;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__13554__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__13554 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13555__i = 0, G__13555__a = new Array(arguments.length -  0);
while (G__13555__i < G__13555__a.length) {G__13555__a[G__13555__i] = arguments[G__13555__i + 0]; ++G__13555__i;}
  args = new cljs.core.IndexedSeq(G__13555__a,0);
} 
return G__13554__delegate.call(this,args);};
G__13554.cljs$lang$maxFixedArity = 0;
G__13554.cljs$lang$applyTo = (function (arglist__13556){
var args = cljs.core.seq(arglist__13556);
return G__13554__delegate(args);
});
G__13554.cljs$core$IFn$_invoke$arity$variadic = G__13554__delegate;
return G__13554;
})()
;

return null;
});
