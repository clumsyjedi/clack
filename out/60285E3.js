goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__15001__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__15001 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15002__i = 0, G__15002__a = new Array(arguments.length -  0);
while (G__15002__i < G__15002__a.length) {G__15002__a[G__15002__i] = arguments[G__15002__i + 0]; ++G__15002__i;}
  args = new cljs.core.IndexedSeq(G__15002__a,0);
} 
return G__15001__delegate.call(this,args);};
G__15001.cljs$lang$maxFixedArity = 0;
G__15001.cljs$lang$applyTo = (function (arglist__15003){
var args = cljs.core.seq(arglist__15003);
return G__15001__delegate(args);
});
G__15001.cljs$core$IFn$_invoke$arity$variadic = G__15001__delegate;
return G__15001;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__15004__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__15004 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15005__i = 0, G__15005__a = new Array(arguments.length -  0);
while (G__15005__i < G__15005__a.length) {G__15005__a[G__15005__i] = arguments[G__15005__i + 0]; ++G__15005__i;}
  args = new cljs.core.IndexedSeq(G__15005__a,0);
} 
return G__15004__delegate.call(this,args);};
G__15004.cljs$lang$maxFixedArity = 0;
G__15004.cljs$lang$applyTo = (function (arglist__15006){
var args = cljs.core.seq(arglist__15006);
return G__15004__delegate(args);
});
G__15004.cljs$core$IFn$_invoke$arity$variadic = G__15004__delegate;
return G__15004;
})()
;

return null;
});
