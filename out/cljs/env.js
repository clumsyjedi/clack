// Compiled by ClojureScript 1.9.229 {:optimize-constants true, :target :nodejs}
goog.provide('cljs.env');
goog.require('cljs.core');
cljs.env._STAR_compiler_STAR_ = null;
cljs.env.default_compiler_env = (function cljs$env$default_compiler_env(var_args){
var args8036 = [];
var len__7484__auto___8039 = arguments.length;
var i__7485__auto___8040 = (0);
while(true){
if((i__7485__auto___8040 < len__7484__auto___8039)){
args8036.push((arguments[i__7485__auto___8040]));

var G__8041 = (i__7485__auto___8040 + (1));
i__7485__auto___8040 = G__8041;
continue;
} else {
}
break;
}

var G__8038 = args8036.length;
switch (G__8038) {
case 0:
return cljs.env.default_compiler_env.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.env.default_compiler_env.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8036.length)].join('')));

}
});

cljs.env.default_compiler_env.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.env.default_compiler_env.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cljs.env.default_compiler_env.cljs$core$IFn$_invoke$arity$1 = (function (options){
return cljs.core.atom.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$cljs$user,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,cljs.core.cst$sym$cljs$user], null)], null),cljs.core.cst$kw$cljs$analyzer_SLASH_constant_DASH_table,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$options,options], null)));
});

cljs.env.default_compiler_env.cljs$lang$maxFixedArity = 1;


//# sourceMappingURL=env.js.map