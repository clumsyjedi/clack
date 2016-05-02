goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__15781__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__15781 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15782__i = 0, G__15782__a = new Array(arguments.length -  0);
while (G__15782__i < G__15782__a.length) {G__15782__a[G__15782__i] = arguments[G__15782__i + 0]; ++G__15782__i;}
  args = new cljs.core.IndexedSeq(G__15782__a,0);
} 
return G__15781__delegate.call(this,args);};
G__15781.cljs$lang$maxFixedArity = 0;
G__15781.cljs$lang$applyTo = (function (arglist__15783){
var args = cljs.core.seq(arglist__15783);
return G__15781__delegate(args);
});
G__15781.cljs$core$IFn$_invoke$arity$variadic = G__15781__delegate;
return G__15781;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__15784__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__15784 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15785__i = 0, G__15785__a = new Array(arguments.length -  0);
while (G__15785__i < G__15785__a.length) {G__15785__a[G__15785__i] = arguments[G__15785__i + 0]; ++G__15785__i;}
  args = new cljs.core.IndexedSeq(G__15785__a,0);
} 
return G__15784__delegate.call(this,args);};
G__15784.cljs$lang$maxFixedArity = 0;
G__15784.cljs$lang$applyTo = (function (arglist__15786){
var args = cljs.core.seq(arglist__15786);
return G__15784__delegate(args);
});
G__15784.cljs$core$IFn$_invoke$arity$variadic = G__15784__delegate;
return G__15784;
})()
;

return null;
});
