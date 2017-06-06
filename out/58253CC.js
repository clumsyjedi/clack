goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__15088__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__15088 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15089__i = 0, G__15089__a = new Array(arguments.length -  0);
while (G__15089__i < G__15089__a.length) {G__15089__a[G__15089__i] = arguments[G__15089__i + 0]; ++G__15089__i;}
  args = new cljs.core.IndexedSeq(G__15089__a,0);
} 
return G__15088__delegate.call(this,args);};
G__15088.cljs$lang$maxFixedArity = 0;
G__15088.cljs$lang$applyTo = (function (arglist__15090){
var args = cljs.core.seq(arglist__15090);
return G__15088__delegate(args);
});
G__15088.cljs$core$IFn$_invoke$arity$variadic = G__15088__delegate;
return G__15088;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__15091__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__15091 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15092__i = 0, G__15092__a = new Array(arguments.length -  0);
while (G__15092__i < G__15092__a.length) {G__15092__a[G__15092__i] = arguments[G__15092__i + 0]; ++G__15092__i;}
  args = new cljs.core.IndexedSeq(G__15092__a,0);
} 
return G__15091__delegate.call(this,args);};
G__15091.cljs$lang$maxFixedArity = 0;
G__15091.cljs$lang$applyTo = (function (arglist__15093){
var args = cljs.core.seq(arglist__15093);
return G__15091__delegate(args);
});
G__15091.cljs$core$IFn$_invoke$arity$variadic = G__15091__delegate;
return G__15091;
})()
;

return null;
});
