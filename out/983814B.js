goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__14962__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__14962 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14963__i = 0, G__14963__a = new Array(arguments.length -  0);
while (G__14963__i < G__14963__a.length) {G__14963__a[G__14963__i] = arguments[G__14963__i + 0]; ++G__14963__i;}
  args = new cljs.core.IndexedSeq(G__14963__a,0);
} 
return G__14962__delegate.call(this,args);};
G__14962.cljs$lang$maxFixedArity = 0;
G__14962.cljs$lang$applyTo = (function (arglist__14964){
var args = cljs.core.seq(arglist__14964);
return G__14962__delegate(args);
});
G__14962.cljs$core$IFn$_invoke$arity$variadic = G__14962__delegate;
return G__14962;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__14965__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__14965 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14966__i = 0, G__14966__a = new Array(arguments.length -  0);
while (G__14966__i < G__14966__a.length) {G__14966__a[G__14966__i] = arguments[G__14966__i + 0]; ++G__14966__i;}
  args = new cljs.core.IndexedSeq(G__14966__a,0);
} 
return G__14965__delegate.call(this,args);};
G__14965.cljs$lang$maxFixedArity = 0;
G__14965.cljs$lang$applyTo = (function (arglist__14967){
var args = cljs.core.seq(arglist__14967);
return G__14965__delegate(args);
});
G__14965.cljs$core$IFn$_invoke$arity$variadic = G__14965__delegate;
return G__14965;
})()
;

return null;
});
