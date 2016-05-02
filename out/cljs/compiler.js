// Compiled by ClojureScript 1.8.51 {:optimize-constants true, :target :nodejs}
goog.provide('cljs.compiler');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('cljs.tools.reader');
goog.require('cljs.env');
goog.require('cljs.analyzer');
goog.require('cljs.source_map');
goog.require('goog.string.StringBuffer');
goog.require('clojure.string');
cljs.compiler.js_reserved = cljs.analyzer.js_reserved;
cljs.compiler._STAR_recompiled_STAR_ = null;
cljs.compiler._STAR_inputs_STAR_ = null;
cljs.compiler._STAR_source_map_data_STAR_ = null;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
cljs.compiler.cljs_reserved_file_names = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["deps.cljs",null], null), null);
cljs.compiler.ns_first_segments = (function cljs$compiler$ns_first_segments(){
var get_first_ns_segment = (function cljs$compiler$ns_first_segments_$_get_first_ns_segment(ns){
return cljs.core.first.call(null,clojure.string.split.call(null,[cljs.core.str(ns)].join(''),/\./));
});
return cljs.core.map.call(null,get_first_ns_segment,cljs.core.keys.call(null,cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_))));
});
cljs.compiler.shadow_depth = (function cljs$compiler$shadow_depth(s){
var map__9241 = s;
var map__9241__$1 = ((((!((map__9241 == null)))?((((map__9241.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9241.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9241):map__9241);
var name = cljs.core.get.call(null,map__9241__$1,cljs.core.cst$kw$name);
var info = cljs.core.get.call(null,map__9241__$1,cljs.core.cst$kw$info);
var d = (0);
var G__9244 = info;
var map__9245 = G__9244;
var map__9245__$1 = ((((!((map__9245 == null)))?((((map__9245.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9245.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9245):map__9245);
var shadow = cljs.core.get.call(null,map__9245__$1,cljs.core.cst$kw$shadow);
var d__$1 = d;
var G__9244__$1 = G__9244;
while(true){
var d__$2 = d__$1;
var map__9247 = G__9244__$1;
var map__9247__$1 = ((((!((map__9247 == null)))?((((map__9247.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9247.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9247):map__9247);
var shadow__$1 = cljs.core.get.call(null,map__9247__$1,cljs.core.cst$kw$shadow);
if(cljs.core.truth_(shadow__$1)){
var G__9249 = (d__$2 + (1));
var G__9250 = shadow__$1;
d__$1 = G__9249;
G__9244__$1 = G__9250;
continue;
} else {
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([[cljs.core.str(name)].join('')], true),cljs.compiler.ns_first_segments.call(null)))){
return (d__$2 + (1));
} else {
return d__$2;

}
}
break;
}
});
cljs.compiler.hash_scope = (function cljs$compiler$hash_scope(s){
return cljs.core.hash_combine.call(null,cljs.core._hash.call(null,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(s)),cljs.compiler.shadow_depth.call(null,s));
});
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__9251){
var map__9256 = p__9251;
var map__9256__$1 = ((((!((map__9256 == null)))?((((map__9256.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9256.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9256):map__9256);
var name_var = map__9256__$1;
var name = cljs.core.get.call(null,map__9256__$1,cljs.core.cst$kw$name);
var info = cljs.core.get.call(null,map__9256__$1,cljs.core.cst$kw$info);
var name__$1 = clojure.string.replace.call(null,[cljs.core.str(name)].join(''),"..","_DOT__DOT_");
var map__9258 = info;
var map__9258__$1 = ((((!((map__9258 == null)))?((((map__9258.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9258.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9258):map__9258);
var ns = cljs.core.get.call(null,map__9258__$1,cljs.core.cst$kw$ns);
var fn_scope = cljs.core.get.call(null,map__9258__$1,cljs.core.cst$kw$fn_DASH_scope);
var scoped_name = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,"_$_",cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.str,cljs.core.cst$kw$name),fn_scope),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name__$1], null))));
return cljs.core.symbol.call(null,cljs.compiler.munge.call(null,[cljs.core.str(clojure.string.replace.call(null,[cljs.core.str(ns)].join(''),".","$")),cljs.core.str("$"),cljs.core.str(scoped_name)].join('')));
});
cljs.compiler.munge_reserved = (function cljs$compiler$munge_reserved(reserved){
return (function (s){
if(!((cljs.core.get.call(null,reserved,s) == null))){
return [cljs.core.str(s),cljs.core.str("$")].join('');
} else {
return s;
}
});
});
cljs.compiler.munge = (function cljs$compiler$munge(var_args){
var args9260 = [];
var len__7280__auto___9263 = arguments.length;
var i__7281__auto___9264 = (0);
while(true){
if((i__7281__auto___9264 < len__7280__auto___9263)){
args9260.push((arguments[i__7281__auto___9264]));

var G__9265 = (i__7281__auto___9264 + (1));
i__7281__auto___9264 = G__9265;
continue;
} else {
}
break;
}

var G__9262 = args9260.length;
switch (G__9262) {
case 1:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9260.length)].join('')));

}
});

cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs.compiler.munge.call(null,s,cljs.compiler.js_reserved);
});

cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2 = (function (s,reserved){
if(cljs.analyzer.cljs_map_QMARK_.call(null,s)){
var name_var = s;
var name = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(name_var);
var field = cljs.core.cst$kw$field.cljs$core$IFn$_invoke$arity$1(name_var);
var info = cljs.core.cst$kw$info.cljs$core$IFn$_invoke$arity$1(name_var);
if(!((cljs.core.cst$kw$fn_DASH_self_DASH_name.cljs$core$IFn$_invoke$arity$1(info) == null))){
return cljs.compiler.fn_self_name.call(null,s);
} else {
var depth = cljs.compiler.shadow_depth.call(null,s);
var code = cljs.compiler.hash_scope.call(null,s);
var renamed = cljs.core.get.call(null,cljs.compiler._STAR_lexical_renames_STAR_,code);
var name__$1 = ((field === true)?[cljs.core.str("self__."),cljs.core.str(name)].join(''):((!((renamed == null)))?renamed:name
));
var munged_name = cljs.compiler.munge.call(null,name__$1,reserved);
if((field === true) || ((depth === (0)))){
return munged_name;
} else {
return cljs.core.symbol.call(null,[cljs.core.str(munged_name),cljs.core.str("__$"),cljs.core.str(depth)].join(''));
}
}
} else {
var ss = clojure.string.replace.call(null,[cljs.core.str(s)].join(''),"..","_DOT__DOT_");
var ss__$1 = clojure.string.replace.call(null,ss,(new RegExp("\\/(.)")),".$1");
var rf = cljs.compiler.munge_reserved.call(null,reserved);
var ss__$2 = cljs.core.map.call(null,rf,clojure.string.split.call(null,ss__$1,/\./));
var ss__$3 = clojure.string.join.call(null,".",ss__$2);
var ms = cljs.core.munge.call(null,ss__$3);
if((s instanceof cljs.core.Symbol)){
return cljs.core.symbol.call(null,ms);
} else {
return ms;
}
}
});

cljs.compiler.munge.cljs$lang$maxFixedArity = 2;
cljs.compiler.comma_sep = (function cljs$compiler$comma_sep(xs){
return cljs.core.interpose.call(null,",",xs);
});
cljs.compiler.escape_char = (function cljs$compiler$escape_char(c){
var cp = goog.string.hashCode(c);
var G__9268 = cp;
switch (G__9268) {
case (34):
return "\\\"";

break;
case (92):
return "\\\\";

break;
case (8):
return "\\b";

break;
case (12):
return "\\f";

break;
case (10):
return "\\n";

break;
case (13):
return "\\r";

break;
case (9):
return "\\t";

break;
default:
if((((31) < cp)) && ((cp < (127)))){
return c;
} else {
var unpadded = cp.toString((16));
var pad = cljs.core.subs.call(null,"0000",unpadded.length);
return [cljs.core.str("\\u"),cljs.core.str(pad),cljs.core.str(unpadded)].join('');
}

}
});
cljs.compiler.escape_string = (function cljs$compiler$escape_string(s){
var sb = (new goog.string.StringBuffer());
var seq__9274_9278 = cljs.core.seq.call(null,s);
var chunk__9275_9279 = null;
var count__9276_9280 = (0);
var i__9277_9281 = (0);
while(true){
if((i__9277_9281 < count__9276_9280)){
var c_9282 = cljs.core._nth.call(null,chunk__9275_9279,i__9277_9281);
sb.append(cljs.compiler.escape_char.call(null,c_9282));

var G__9283 = seq__9274_9278;
var G__9284 = chunk__9275_9279;
var G__9285 = count__9276_9280;
var G__9286 = (i__9277_9281 + (1));
seq__9274_9278 = G__9283;
chunk__9275_9279 = G__9284;
count__9276_9280 = G__9285;
i__9277_9281 = G__9286;
continue;
} else {
var temp__4657__auto___9287 = cljs.core.seq.call(null,seq__9274_9278);
if(temp__4657__auto___9287){
var seq__9274_9288__$1 = temp__4657__auto___9287;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9274_9288__$1)){
var c__7021__auto___9289 = cljs.core.chunk_first.call(null,seq__9274_9288__$1);
var G__9290 = cljs.core.chunk_rest.call(null,seq__9274_9288__$1);
var G__9291 = c__7021__auto___9289;
var G__9292 = cljs.core.count.call(null,c__7021__auto___9289);
var G__9293 = (0);
seq__9274_9278 = G__9290;
chunk__9275_9279 = G__9291;
count__9276_9280 = G__9292;
i__9277_9281 = G__9293;
continue;
} else {
var c_9294 = cljs.core.first.call(null,seq__9274_9288__$1);
sb.append(cljs.compiler.escape_char.call(null,c_9294));

var G__9295 = cljs.core.next.call(null,seq__9274_9288__$1);
var G__9296 = null;
var G__9297 = (0);
var G__9298 = (0);
seq__9274_9278 = G__9295;
chunk__9275_9279 = G__9296;
count__9276_9280 = G__9297;
i__9277_9281 = G__9298;
continue;
}
} else {
}
}
break;
}

return sb.toString();
});
cljs.compiler.wrap_in_double_quotes = (function cljs$compiler$wrap_in_double_quotes(x){
return [cljs.core.str("\""),cljs.core.str(x),cljs.core.str("\"")].join('');
});
if(typeof cljs.compiler.emit_STAR_ !== 'undefined'){
} else {
cljs.compiler.emit_STAR_ = (function (){var method_table__7135__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__7136__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__7137__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__7138__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__7139__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.compiler","emit*"),cljs.core.cst$kw$op,cljs.core.cst$kw$default,hierarchy__7139__auto__,method_table__7135__auto__,prefer_table__7136__auto__,method_cache__7137__auto__,cached_hierarchy__7138__auto__));
})();
}
cljs.compiler.emit = (function cljs$compiler$emit(ast){
var val__7808__auto__ = cljs.env._STAR_compiler_STAR_;
if((val__7808__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = cljs.env.default_compiler_env.call(null);
} else {
}

try{if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__9304_9309 = ast;
var map__9304_9310__$1 = ((((!((map__9304_9309 == null)))?((((map__9304_9309.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9304_9309.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9304_9309):map__9304_9309);
var env_9311 = cljs.core.get.call(null,map__9304_9310__$1,cljs.core.cst$kw$env);
if(cljs.core.truth_(cljs.core.cst$kw$line.cljs$core$IFn$_invoke$arity$1(env_9311))){
var map__9306_9312 = env_9311;
var map__9306_9313__$1 = ((((!((map__9306_9312 == null)))?((((map__9306_9312.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9306_9312.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9306_9312):map__9306_9312);
var line_9314 = cljs.core.get.call(null,map__9306_9313__$1,cljs.core.cst$kw$line);
var column_9315 = cljs.core.get.call(null,map__9306_9313__$1,cljs.core.cst$kw$column);
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,((function (map__9306_9312,map__9306_9313__$1,line_9314,column_9315,map__9304_9309,map__9304_9310__$1,env_9311,val__7808__auto__){
return (function (m){
var minfo = (function (){var G__9308 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$gcol,cljs.core.cst$kw$gen_DASH_col.cljs$core$IFn$_invoke$arity$1(m),cljs.core.cst$kw$gline,cljs.core.cst$kw$gen_DASH_line.cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core._EQ_.call(null,cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(ast),cljs.core.cst$kw$var)){
return cljs.core.assoc.call(null,G__9308,cljs.core.cst$kw$name,[cljs.core.str(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$info.cljs$core$IFn$_invoke$arity$1(ast)))].join(''));
} else {
return G__9308;
}
})();
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$source_DASH_map,(line_9314 - (1))], null),cljs.core.fnil.call(null,((function (minfo,map__9306_9312,map__9306_9313__$1,line_9314,column_9315,map__9304_9309,map__9304_9310__$1,env_9311,val__7808__auto__){
return (function (line__$1){
return cljs.core.update_in.call(null,line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_9315)?(column_9315 - (1)):(0))], null),cljs.core.fnil.call(null,((function (minfo,map__9306_9312,map__9306_9313__$1,line_9314,column_9315,map__9304_9309,map__9304_9310__$1,env_9311,val__7808__auto__){
return (function (column__$1){
return cljs.core.conj.call(null,column__$1,minfo);
});})(minfo,map__9306_9312,map__9306_9313__$1,line_9314,column_9315,map__9304_9309,map__9304_9310__$1,env_9311,val__7808__auto__))
,cljs.core.PersistentVector.EMPTY));
});})(minfo,map__9306_9312,map__9306_9313__$1,line_9314,column_9315,map__9304_9309,map__9304_9310__$1,env_9311,val__7808__auto__))
,cljs.core.sorted_map.call(null)));
});})(map__9306_9312,map__9306_9313__$1,line_9314,column_9315,map__9304_9309,map__9304_9310__$1,env_9311,val__7808__auto__))
);
} else {
}
} else {
}

return cljs.compiler.emit_STAR_.call(null,ast);
}finally {if((val__7808__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = null;
} else {
}
}});
cljs.compiler.emits = (function cljs$compiler$emits(var_args){
var args__7287__auto__ = [];
var len__7280__auto___9322 = arguments.length;
var i__7281__auto___9323 = (0);
while(true){
if((i__7281__auto___9323 < len__7280__auto___9322)){
args__7287__auto__.push((arguments[i__7281__auto___9323]));

var G__9324 = (i__7281__auto___9323 + (1));
i__7281__auto___9323 = G__9324;
continue;
} else {
}
break;
}

var argseq__7288__auto__ = ((((0) < args__7287__auto__.length))?(new cljs.core.IndexedSeq(args__7287__auto__.slice((0)),(0),null)):null);
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(argseq__7288__auto__);
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
var seq__9318_9325 = cljs.core.seq.call(null,xs);
var chunk__9319_9326 = null;
var count__9320_9327 = (0);
var i__9321_9328 = (0);
while(true){
if((i__9321_9328 < count__9320_9327)){
var x_9329 = cljs.core._nth.call(null,chunk__9319_9326,i__9321_9328);
if((x_9329 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_9329)){
cljs.compiler.emit.call(null,x_9329);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_9329)){
cljs.core.apply.call(null,cljs.compiler.emits,x_9329);
} else {
if(goog.isFunction(x_9329)){
x_9329.call(null);
} else {
var s_9330 = cljs.core.print_str.call(null,x_9329);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$gen_DASH_col], null),((function (seq__9318_9325,chunk__9319_9326,count__9320_9327,i__9321_9328,s_9330,x_9329){
return (function (p1__9316_SHARP_){
return (p1__9316_SHARP_ + cljs.core.count.call(null,s_9330));
});})(seq__9318_9325,chunk__9319_9326,count__9320_9327,i__9321_9328,s_9330,x_9329))
);
}

cljs.core.print.call(null,s_9330);

}
}
}
}

var G__9331 = seq__9318_9325;
var G__9332 = chunk__9319_9326;
var G__9333 = count__9320_9327;
var G__9334 = (i__9321_9328 + (1));
seq__9318_9325 = G__9331;
chunk__9319_9326 = G__9332;
count__9320_9327 = G__9333;
i__9321_9328 = G__9334;
continue;
} else {
var temp__4657__auto___9335 = cljs.core.seq.call(null,seq__9318_9325);
if(temp__4657__auto___9335){
var seq__9318_9336__$1 = temp__4657__auto___9335;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9318_9336__$1)){
var c__7021__auto___9337 = cljs.core.chunk_first.call(null,seq__9318_9336__$1);
var G__9338 = cljs.core.chunk_rest.call(null,seq__9318_9336__$1);
var G__9339 = c__7021__auto___9337;
var G__9340 = cljs.core.count.call(null,c__7021__auto___9337);
var G__9341 = (0);
seq__9318_9325 = G__9338;
chunk__9319_9326 = G__9339;
count__9320_9327 = G__9340;
i__9321_9328 = G__9341;
continue;
} else {
var x_9342 = cljs.core.first.call(null,seq__9318_9336__$1);
if((x_9342 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_9342)){
cljs.compiler.emit.call(null,x_9342);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_9342)){
cljs.core.apply.call(null,cljs.compiler.emits,x_9342);
} else {
if(goog.isFunction(x_9342)){
x_9342.call(null);
} else {
var s_9343 = cljs.core.print_str.call(null,x_9342);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$gen_DASH_col], null),((function (seq__9318_9325,chunk__9319_9326,count__9320_9327,i__9321_9328,s_9343,x_9342,seq__9318_9336__$1,temp__4657__auto___9335){
return (function (p1__9316_SHARP_){
return (p1__9316_SHARP_ + cljs.core.count.call(null,s_9343));
});})(seq__9318_9325,chunk__9319_9326,count__9320_9327,i__9321_9328,s_9343,x_9342,seq__9318_9336__$1,temp__4657__auto___9335))
);
}

cljs.core.print.call(null,s_9343);

}
}
}
}

var G__9344 = cljs.core.next.call(null,seq__9318_9336__$1);
var G__9345 = null;
var G__9346 = (0);
var G__9347 = (0);
seq__9318_9325 = G__9344;
chunk__9319_9326 = G__9345;
count__9320_9327 = G__9346;
i__9321_9328 = G__9347;
continue;
}
} else {
}
}
break;
}

return null;
});

cljs.compiler.emits.cljs$lang$maxFixedArity = (0);

cljs.compiler.emits.cljs$lang$applyTo = (function (seq9317){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9317));
});
cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var args__7287__auto__ = [];
var len__7280__auto___9352 = arguments.length;
var i__7281__auto___9353 = (0);
while(true){
if((i__7281__auto___9353 < len__7280__auto___9352)){
args__7287__auto__.push((arguments[i__7281__auto___9353]));

var G__9354 = (i__7281__auto___9353 + (1));
i__7281__auto___9353 = G__9354;
continue;
} else {
}
break;
}

var argseq__7288__auto__ = ((((0) < args__7287__auto__.length))?(new cljs.core.IndexedSeq(args__7287__auto__.slice((0)),(0),null)):null);
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(argseq__7288__auto__);
});

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
cljs.core.apply.call(null,cljs.compiler.emits,xs);

cljs.core.println.call(null);

if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,(function (p__9349){
var map__9350 = p__9349;
var map__9350__$1 = ((((!((map__9350 == null)))?((((map__9350.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9350.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9350):map__9350);
var m = map__9350__$1;
var gen_line = cljs.core.get.call(null,map__9350__$1,cljs.core.cst$kw$gen_DASH_line);
return cljs.core.assoc.call(null,m,cljs.core.cst$kw$gen_DASH_line,(gen_line + (1)),cljs.core.cst$kw$gen_DASH_col,(0));
}));
} else {
}

return null;
});

cljs.compiler.emitln.cljs$lang$maxFixedArity = (0);

cljs.compiler.emitln.cljs$lang$applyTo = (function (seq9348){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9348));
});
cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__7196__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_9357_9359 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_9358_9360 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_9357_9359,_STAR_print_fn_STAR_9358_9360,sb__7196__auto__){
return (function (x__7197__auto__){
return sb__7196__auto__.append(x__7197__auto__);
});})(_STAR_print_newline_STAR_9357_9359,_STAR_print_fn_STAR_9358_9360,sb__7196__auto__))
;

try{cljs.compiler.emit.call(null,expr);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_9358_9360;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_9357_9359;
}
return [cljs.core.str(sb__7196__auto__)].join('');
});
if(typeof cljs.compiler.emit_constant !== 'undefined'){
} else {
cljs.compiler.emit_constant = (function (){var method_table__7135__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__7136__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__7137__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__7138__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__7139__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.compiler","emit-constant"),cljs.core.type,cljs.core.cst$kw$default,hierarchy__7139__auto__,method_table__7135__auto__,prefer_table__7136__auto__,method_cache__7137__auto__,cached_hierarchy__7138__auto__));
})();
}
cljs.core._add_method.call(null,cljs.compiler.emit_constant,null,(function (x){
return cljs.compiler.emits.call(null,"null");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,Number,(function (x){
return cljs.compiler.emits.call(null,"(",x,")");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,String,(function (x){
return cljs.compiler.emits.call(null,cljs.compiler.wrap_in_double_quotes.call(null,cljs.compiler.escape_string.call(null,x)));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,Boolean,(function (x){
return cljs.compiler.emits.call(null,(cljs.core.truth_(x)?"true":"false"));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,RegExp,(function (x){
if(cljs.core._EQ_.call(null,"",[cljs.core.str(x)].join(''))){
return cljs.compiler.emits.call(null,"(new RegExp(\"\"))");
} else {
var vec__9361 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,[cljs.core.str(x)].join(''));
var _ = cljs.core.nth.call(null,vec__9361,(0),null);
var flags = cljs.core.nth.call(null,vec__9361,(1),null);
var pattern = cljs.core.nth.call(null,vec__9361,(2),null);
return cljs.compiler.emits.call(null,pattern);
}
}));
cljs.compiler.emits_keyword = (function cljs$compiler$emits_keyword(kw){
var ns = cljs.core.namespace.call(null,kw);
var name = cljs.core.name.call(null,kw);
cljs.compiler.emits.call(null,"new cljs.core.Keyword(");

cljs.compiler.emit_constant.call(null,ns);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,name);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,(cljs.core.truth_(ns)?[cljs.core.str(ns),cljs.core.str("/"),cljs.core.str(name)].join(''):name));

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,cljs.core.hash.call(null,kw));

return cljs.compiler.emits.call(null,")");
});
cljs.compiler.emits_symbol = (function cljs$compiler$emits_symbol(sym){
var ns = cljs.core.namespace.call(null,sym);
var name = cljs.core.name.call(null,sym);
var symstr = ((!((ns == null)))?[cljs.core.str(ns),cljs.core.str("/"),cljs.core.str(name)].join(''):name);
cljs.compiler.emits.call(null,"new cljs.core.Symbol(");

cljs.compiler.emit_constant.call(null,ns);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,name);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,symstr);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,cljs.core.hash.call(null,sym));

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,null);

return cljs.compiler.emits.call(null,")");
});
cljs.core._add_method.call(null,cljs.compiler.emit_constant,cljs.core.Keyword,(function (x){
if(cljs.core.truth_(cljs.core.cst$kw$emit_DASH_constants.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$options.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_))))){
var value = x.call(null,cljs.core.cst$kw$cljs$analyzer_SLASH_constant_DASH_table.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
return cljs.compiler.emits.call(null,"cljs.core.",value);
} else {
return cljs.compiler.emits_keyword.call(null,x);
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,cljs.core.Symbol,(function (x){
if(cljs.core.truth_(cljs.core.cst$kw$emit_DASH_constants.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$options.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_))))){
var value = x.call(null,cljs.core.cst$kw$cljs$analyzer_SLASH_constant_DASH_table.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
return cljs.compiler.emits.call(null,"cljs.core.",value);
} else {
return cljs.compiler.emits_symbol.call(null,x);
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,Date,(function (date){
return cljs.compiler.emits.call(null,"new Date(",date.getTime(),")");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,cljs.core.UUID,(function (uuid){
var uuid_str = uuid.toString();
return cljs.compiler.emits.call(null,"new cljs.core.UUID(\"",uuid_str,"\", ",cljs.core.hash.call(null,uuid_str),")");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,cljs.core.cst$kw$no_DASH_op,(function (m){
return null;
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,cljs.core.cst$kw$var,(function (p__9363){
var map__9364 = p__9363;
var map__9364__$1 = ((((!((map__9364 == null)))?((((map__9364.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9364.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9364):map__9364);
var arg = map__9364__$1;
var info = cljs.core.get.call(null,map__9364__$1,cljs.core.cst$kw$info);
var env = cljs.core.get.call(null,map__9364__$1,cljs.core.cst$kw$env);
var form = cljs.core.get.call(null,map__9364__$1,cljs.core.cst$kw$form);
var var_name = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(info);
var info__$1 = ((cljs.core._EQ_.call(null,cljs.core.namespace.call(null,var_name),"js"))?(function (){var js_module_name = cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$js_DASH_module_DASH_index,cljs.core.name.call(null,var_name)], null));
var or__6210__auto__ = js_module_name;
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return cljs.core.name.call(null,var_name);
}
})():info);
if(cljs.core.truth_(cljs.core.cst$kw$binding_DASH_form_QMARK_.cljs$core$IFn$_invoke$arity$1(arg))){
return cljs.compiler.emits.call(null,cljs.compiler.munge.call(null,arg));
} else {
if(cljs.core._EQ_.call(null,cljs.core.cst$kw$statement,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__9225__auto__ = env;
if(cljs.core._EQ_.call(null,cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__9225__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,(function (){var G__9366 = info__$1;
if(cljs.core.not_EQ_.call(null,form,cljs.core.cst$sym$js_SLASH__DASH_Infinity)){
return cljs.compiler.munge.call(null,G__9366);
} else {
return G__9366;
}
})());

if(cljs.core._EQ_.call(null,cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__9225__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,cljs.core.cst$kw$var_DASH_special,(function (p__9367){
var map__9368 = p__9367;
var map__9368__$1 = ((((!((map__9368 == null)))?((((map__9368.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9368.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9368):map__9368);
var arg = map__9368__$1;
var env = cljs.core.get.call(null,map__9368__$1,cljs.core.cst$kw$env);
var var$ = cljs.core.get.call(null,map__9368__$1,cljs.core.cst$kw$var);
var sym = cljs.core.get.call(null,map__9368__$1,cljs.core.cst$kw$sym);
var meta = cljs.core.get.call(null,map__9368__$1,cljs.core.cst$kw$meta);
if(cljs.analyzer.ast_QMARK_.call(null,sym)){
} else {
throw (new Error("Assert failed: (ana/ast? sym)"));
}

if(cljs.analyzer.ast_QMARK_.call(null,meta)){
} else {
throw (new Error("Assert failed: (ana/ast? meta)"));
}

var map__9370 = cljs.core.cst$kw$info.cljs$core$IFn$_invoke$arity$1(var$);
var map__9370__$1 = ((((!((map__9370 == null)))?((((map__9370.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9370.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9370):map__9370);
var name = cljs.core.get.call(null,map__9370__$1,cljs.core.cst$kw$name);
var env__9225__auto__ = env;
if(cljs.core._EQ_.call(null,cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__9225__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"new cljs.core.Var(function(){return ",cljs.compiler.munge.call(null,name),";},",sym,",",meta,")");

if(cljs.core._EQ_.call(null,cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__9225__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,cljs.core.cst$kw$meta,(function (p__9372){
var map__9373 = p__9372;
var map__9373__$1 = ((((!((map__9373 == null)))?((((map__9373.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9373.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9373):map__9373);
var expr = cljs.core.get.call(null,map__9373__$1,cljs.core.cst$kw$expr);
var meta = cljs.core.get.call(null,map__9373__$1,cljs.core.cst$kw$meta);
var env = cljs.core.get.call(null,map__9373__$1,cljs.core.cst$kw$env);
var env__9225__auto__ = env;
if(cljs.core._EQ_.call(null,cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__9225__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"cljs.core.with_meta(",expr,",",meta,")");

if(cljs.core._EQ_.call(null,cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__9225__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.array_map_threshold = (8);
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
return (cljs.core.every_QMARK_.call(null,(function (p1__9375_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(p1__9375_SHARP_),cljs.core.cst$kw$constant);
}),keys)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,keys)),cljs.core.count.call(null,keys)));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,cljs.core.cst$kw$map,(function (p__9376){
var map__9377 = p__9376;
var map__9377__$1 = ((((!((map__9377 == null)))?((((map__9377.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9377.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9377):map__9377);
var env = cljs.core.get.call(null,map__9377__$1,cljs.core.cst$kw$env);
var keys = cljs.core.get.call(null,map__9377__$1,cljs.core.cst$kw$keys);
var vals = cljs.core.get.call(null,map__9377__$1,cljs.core.cst$kw$vals);
var env__9225__auto__ = env;
if(cljs.core._EQ_.call(null,cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__9225__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if((cljs.core.count.call(null,keys) === (0))){
cljs.compiler.emits.call(null,"cljs.core.PersistentArrayMap.EMPTY");
} else {
if((cljs.core.count.call(null,keys) <= cljs.compiler.array_map_threshold)){
if(cljs.core.truth_(cljs.compiler.distinct_keys_QMARK_.call(null,keys))){
cljs.compiler.emits.call(null,"new cljs.core.PersistentArrayMap(null, ",cljs.core.count.call(null,keys),", [",cljs.compiler.comma_sep.call(null,cljs.core.interleave.call(null,keys,vals)),"], null)");
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentArrayMap.fromArray([",cljs.compiler.comma_sep.call(null,cljs.core.interleave.call(null,keys,vals)),"], true, false)");
}
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentHashMap.fromArrays([",cljs.compiler.comma_sep.call(null,keys),"],[",cljs.compiler.comma_sep.call(null,vals),"])");

}
}

if(cljs.core._EQ_.call(null,cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__9225__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,cljs.core.cst$kw$list,(function (p__9379){
var map__9380 = p__9379;
var map__9380__$1 = ((((!((map__9380 == null)))?((((map__9380.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9380.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9380):map__9380);
var items = cljs.core.get.call(null,map__9380__$1,cljs.core.cst$kw$items);
var env = cljs.core.get.call(null,map__9380__$1,cljs.core.cst$kw$env);
var env__9225__auto__ = env;
if(cljs.core._EQ_.call(null,cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__9225__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.List.EMPTY");
} else {
cljs.compiler.emits.call(null,"cljs.core.list(",cljs.compiler.comma_sep.call(null,items),")");
}

if(cljs.core._EQ_.call(null,cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__9225__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,cljs.core.cst$kw$vector,(function (p__9382){
var map__9383 = p__9382;
var map__9383__$1 = ((((!((map__9383 == null)))?((((map__9383.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9383.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9383):map__9383);
var items = cljs.core.get.call(null,map__9383__$1,cljs.core.cst$kw$items);
var env = cljs.core.get.call(null,map__9383__$1,cljs.core.cst$kw$env);
var env__9225__auto__ = env;
if(cljs.core._EQ_.call(null,cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__9225__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.PersistentVector.EMPTY");
} else {
var cnt_9385 = cljs.core.count.call(null,items);
if((cnt_9385 < (32))){
cljs.compiler.emits.call(null,"new cljs.core.PersistentVector(null, ",cnt_9385,", 5, cljs.core.PersistentVector.EMPTY_NODE, [",cljs.compiler.comma_sep.call(null,items),"], null)");
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentVector.fromArray([",cljs.compiler.comma_sep.call(null,items),"], true)");
}
}

if(cljs.core._EQ_.call(null,cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__9225__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
return (cljs.core.every_QMARK_.call(null,(function (p1__9386_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(p1__9386_SHARP_),cljs.core.cst$kw$constant);
}),items)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,items)),cljs.core.count.call(null,items)));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,cljs.core.cst$kw$set,(function (p__9387){
var map__9388 = p__9387;
var map__9388__$1 = ((((!((map__9388 == null)))?((((map__9388.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9388.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9388):map__9388);
var items = cljs.core.get.call(null,map__9388__$1,cljs.core.cst$kw$items);
var env = cljs.core.get.call(null,map__9388__$1,cljs.core.cst$kw$env);
var env__9225__auto__ = env;
if(cljs.core._EQ_.call(null,cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__9225__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.PersistentHashSet.EMPTY");
} else {
if(cljs.core.truth_(cljs.compiler.distinct_constants_QMARK_.call(null,items))){
cljs.compiler.emits.call(null,"new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, ",cljs.core.count.call(null,items),", [",cljs.compiler.comma_sep.call(null,cljs.core.interleave.call(null,items,cljs.core.repeat.call(null,"null"))),"], null), null)");
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentHashSet.fromArray([",cljs.compiler.comma_sep.call(null,items),"], true)");

}
}

if(cljs.core._EQ_.call(null,cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__9225__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,cljs.core.cst$kw$js_DASH_value,(function (p__9390){
var map__9391 = p__9390;
var map__9391__$1 = ((((!((map__9391 == null)))?((((map__9391.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9391.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9391):map__9391);
var items = cljs.core.get.call(null,map__9391__$1,cljs.core.cst$kw$items);
var js_type = cljs.core.get.call(null,map__9391__$1,cljs.core.cst$kw$js_DASH_type);
var env = cljs.core.get.call(null,map__9391__$1,cljs.core.cst$kw$env);
var env__9225__auto__ = env;
if(cljs.core._EQ_.call(null,cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__9225__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core._EQ_.call(null,js_type,cljs.core.cst$kw$object)){
cljs.compiler.emits.call(null,"{");

var temp__4657__auto___9401 = cljs.core.seq.call(null,items);
if(temp__4657__auto___9401){
var items_9402__$1 = temp__4657__auto___9401;
var vec__9393_9403 = items_9402__$1;
var vec__9394_9404 = cljs.core.nth.call(null,vec__9393_9403,(0),null);
var k_9405 = cljs.core.nth.call(null,vec__9394_9404,(0),null);
var v_9406 = cljs.core.nth.call(null,vec__9394_9404,(1),null);
var r_9407 = cljs.core.nthnext.call(null,vec__9393_9403,(1));
cljs.compiler.emits.call(null,"\"",cljs.core.name.call(null,k_9405),"\": ",v_9406);

var seq__9395_9408 = cljs.core.seq.call(null,r_9407);
var chunk__9396_9409 = null;
var count__9397_9410 = (0);
var i__9398_9411 = (0);
while(true){
if((i__9398_9411 < count__9397_9410)){
var vec__9399_9412 = cljs.core._nth.call(null,chunk__9396_9409,i__9398_9411);
var k_9413__$1 = cljs.core.nth.call(null,vec__9399_9412,(0),null);
var v_9414__$1 = cljs.core.nth.call(null,vec__9399_9412,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_9413__$1),"\": ",v_9414__$1);

var G__9415 = seq__9395_9408;
var G__9416 = chunk__9396_9409;
var G__9417 = count__9397_9410;
var G__9418 = (i__9398_9411 + (1));
seq__9395_9408 = G__9415;
chunk__9396_9409 = G__9416;
count__9397_9410 = G__9417;
i__9398_9411 = G__9418;
continue;
} else {
var temp__4657__auto___9419__$1 = cljs.core.seq.call(null,seq__9395_9408);
if(temp__4657__auto___9419__$1){
var seq__9395_9420__$1 = temp__4657__auto___9419__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9395_9420__$1)){
var c__7021__auto___9421 = cljs.core.chunk_first.call(null,seq__9395_9420__$1);
var G__9422 = cljs.core.chunk_rest.call(null,seq__9395_9420__$1);
var G__9423 = c__7021__auto___9421;
var G__9424 = cljs.core.count.call(null,c__7021__auto___9421);
var G__9425 = (0);
seq__9395_9408 = G__9422;
chunk__9396_9409 = G__9423;
count__9397_9410 = G__9424;
i__9398_9411 = G__9425;
continue;
} else {
var vec__9400_9426 = cljs.core.first.call(null,seq__9395_9420__$1);
var k_9427__$1 = cljs.core.nth.call(null,vec__9400_9426,(0),null);
var v_9428__$1 = cljs.core.nth.call(null,vec__9400_9426,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_9427__$1),"\": ",v_9428__$1);

var G__9429 = cljs.core.next.call(null,seq__9395_9420__$1);
var G__9430 = null;
var G__9431 = (0);
var G__9432 = (0);
seq__9395_9408 = G__9429;
chunk__9396_9409 = G__9430;
count__9397_9410 = G__9431;
i__9398_9411 = G__9432;
continue;
}
} else {
}
}
break;
}
} else {
}

cljs.compiler.emits.call(null,"}");
} else {
cljs.compiler.emits.call(null,"[",cljs.compiler.comma_sep.call(null,items),"]");
}

if(cljs.core._EQ_.call(null,cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__9225__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,cljs.core.cst$kw$constant,(function (p__9433){
var map__9434 = p__9433;
var map__9434__$1 = ((((!((map__9434 == null)))?((((map__9434.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9434.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9434):map__9434);
var form = cljs.core.get.call(null,map__9434__$1,cljs.core.cst$kw$form);
var env = cljs.core.get.call(null,map__9434__$1,cljs.core.cst$kw$env);
if(cljs.core._EQ_.call(null,cljs.core.cst$kw$statement,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__9225__auto__ = env;
if(cljs.core._EQ_.call(null,cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__9225__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_constant.call(null,form);

if(cljs.core._EQ_.call(null,cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__9225__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(p__9436){
var map__9439 = p__9436;
var map__9439__$1 = ((((!((map__9439 == null)))?((((map__9439.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9439.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9439):map__9439);
var op = cljs.core.get.call(null,map__9439__$1,cljs.core.cst$kw$op);
var form = cljs.core.get.call(null,map__9439__$1,cljs.core.cst$kw$form);
var and__6198__auto__ = cljs.core._EQ_.call(null,op,cljs.core.cst$kw$constant);
if(and__6198__auto__){
var and__6198__auto____$1 = form;
if(cljs.core.truth_(and__6198__auto____$1)){
return !(((typeof form === 'string') && (cljs.core._EQ_.call(null,form,""))) || ((typeof form === 'number') && ((form === (0)))));
} else {
return and__6198__auto____$1;
}
} else {
return and__6198__auto__;
}
});
cljs.compiler.falsey_constant_QMARK_ = (function cljs$compiler$falsey_constant_QMARK_(p__9441){
var map__9444 = p__9441;
var map__9444__$1 = ((((!((map__9444 == null)))?((((map__9444.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9444.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9444):map__9444);
var op = cljs.core.get.call(null,map__9444__$1,cljs.core.cst$kw$op);
var form = cljs.core.get.call(null,map__9444__$1,cljs.core.cst$kw$form);
return (cljs.core._EQ_.call(null,op,cljs.core.cst$kw$constant)) && ((form === false) || ((form == null)));
});
cljs.compiler.safe_test_QMARK_ = (function cljs$compiler$safe_test_QMARK_(env,e){
var tag = cljs.analyzer.infer_tag.call(null,env,e);
var or__6210__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$sym$seq,null,cljs.core.cst$sym$boolean,null], null), null).call(null,tag);
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return cljs.compiler.truthy_constant_QMARK_.call(null,e);
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,cljs.core.cst$kw$if,(function (p__9446){
var map__9447 = p__9446;
var map__9447__$1 = ((((!((map__9447 == null)))?((((map__9447.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9447.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9447):map__9447);
var test = cljs.core.get.call(null,map__9447__$1,cljs.core.cst$kw$test);
var then = cljs.core.get.call(null,map__9447__$1,cljs.core.cst$kw$then);
var else$ = cljs.core.get.call(null,map__9447__$1,cljs.core.cst$kw$else);
var env = cljs.core.get.call(null,map__9447__$1,cljs.core.cst$kw$env);
var unchecked = cljs.core.get.call(null,map__9447__$1,cljs.core.cst$kw$unchecked);
var context = cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env);
var checked = cljs.core.not.call(null,(function (){var or__6210__auto__ = unchecked;
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return cljs.compiler.safe_test_QMARK_.call(null,env,test);
}
})());
if(cljs.core.truth_(cljs.compiler.truthy_constant_QMARK_.call(null,test))){
return cljs.compiler.emitln.call(null,then);
} else {
if(cljs.core.truth_(cljs.compiler.falsey_constant_QMARK_.call(null,test))){
return cljs.compiler.emitln.call(null,else$);
} else {
if(cljs.core._EQ_.call(null,cljs.core.cst$kw$expr,context)){
return cljs.compiler.emits.call(null,"(",((checked)?"cljs.core.truth_":null),"(",test,")?",then,":",else$,")");
} else {
if(checked){
cljs.compiler.emitln.call(null,"if(cljs.core.truth_(",test,")){");
} else {
cljs.compiler.emitln.call(null,"if(",test,"){");
}

cljs.compiler.emitln.call(null,then,"} else {");

return cljs.compiler.emitln.call(null,else$,"}");
}

}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,cljs.core.cst$kw$case_STAR_,(function (p__9449){
var map__9450 = p__9449;
var map__9450__$1 = ((((!((map__9450 == null)))?((((map__9450.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9450.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9450):map__9450);
var v = cljs.core.get.call(null,map__9450__$1,cljs.core.cst$kw$v);
var tests = cljs.core.get.call(null,map__9450__$1,cljs.core.cst$kw$tests);
var thens = cljs.core.get.call(null,map__9450__$1,cljs.core.cst$kw$thens);
var default$ = cljs.core.get.call(null,map__9450__$1,cljs.core.cst$kw$default);
var env = cljs.core.get.call(null,map__9450__$1,cljs.core.cst$kw$env);
if(cljs.core._EQ_.call(null,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env),cljs.core.cst$kw$expr)){
cljs.compiler.emitln.call(null,"(function(){");
} else {
}

var gs = cljs.core.gensym.call(null,"caseval__");
if(cljs.core._EQ_.call(null,cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"var ",gs,";");
} else {
}

cljs.compiler.emitln.call(null,"switch (",v,") {");

var seq__9452_9466 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),cljs.core.interleave.call(null,tests,thens)));
var chunk__9453_9467 = null;
var count__9454_9468 = (0);
var i__9455_9469 = (0);
while(true){
if((i__9455_9469 < count__9454_9468)){
var vec__9456_9470 = cljs.core._nth.call(null,chunk__9453_9467,i__9455_9469);
var ts_9471 = cljs.core.nth.call(null,vec__9456_9470,(0),null);
var then_9472 = cljs.core.nth.call(null,vec__9456_9470,(1),null);
var seq__9457_9473 = cljs.core.seq.call(null,ts_9471);
var chunk__9458_9474 = null;
var count__9459_9475 = (0);
var i__9460_9476 = (0);
while(true){
if((i__9460_9476 < count__9459_9475)){
var test_9477 = cljs.core._nth.call(null,chunk__9458_9474,i__9460_9476);
cljs.compiler.emitln.call(null,"case ",test_9477,":");

var G__9478 = seq__9457_9473;
var G__9479 = chunk__9458_9474;
var G__9480 = count__9459_9475;
var G__9481 = (i__9460_9476 + (1));
seq__9457_9473 = G__9478;
chunk__9458_9474 = G__9479;
count__9459_9475 = G__9480;
i__9460_9476 = G__9481;
continue;
} else {
var temp__4657__auto___9482 = cljs.core.seq.call(null,seq__9457_9473);
if(temp__4657__auto___9482){
var seq__9457_9483__$1 = temp__4657__auto___9482;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9457_9483__$1)){
var c__7021__auto___9484 = cljs.core.chunk_first.call(null,seq__9457_9483__$1);
var G__9485 = cljs.core.chunk_rest.call(null,seq__9457_9483__$1);
var G__9486 = c__7021__auto___9484;
var G__9487 = cljs.core.count.call(null,c__7021__auto___9484);
var G__9488 = (0);
seq__9457_9473 = G__9485;
chunk__9458_9474 = G__9486;
count__9459_9475 = G__9487;
i__9460_9476 = G__9488;
continue;
} else {
var test_9489 = cljs.core.first.call(null,seq__9457_9483__$1);
cljs.compiler.emitln.call(null,"case ",test_9489,":");

var G__9490 = cljs.core.next.call(null,seq__9457_9483__$1);
var G__9491 = null;
var G__9492 = (0);
var G__9493 = (0);
seq__9457_9473 = G__9490;
chunk__9458_9474 = G__9491;
count__9459_9475 = G__9492;
i__9460_9476 = G__9493;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_9472);
} else {
cljs.compiler.emitln.call(null,then_9472);
}

cljs.compiler.emitln.call(null,"break;");

var G__9494 = seq__9452_9466;
var G__9495 = chunk__9453_9467;
var G__9496 = count__9454_9468;
var G__9497 = (i__9455_9469 + (1));
seq__9452_9466 = G__9494;
chunk__9453_9467 = G__9495;
count__9454_9468 = G__9496;
i__9455_9469 = G__9497;
continue;
} else {
var temp__4657__auto___9498 = cljs.core.seq.call(null,seq__9452_9466);
if(temp__4657__auto___9498){
var seq__9452_9499__$1 = temp__4657__auto___9498;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9452_9499__$1)){
var c__7021__auto___9500 = cljs.core.chunk_first.call(null,seq__9452_9499__$1);
var G__9501 = cljs.core.chunk_rest.call(null,seq__9452_9499__$1);
var G__9502 = c__7021__auto___9500;
var G__9503 = cljs.core.count.call(null,c__7021__auto___9500);
var G__9504 = (0);
seq__9452_9466 = G__9501;
chunk__9453_9467 = G__9502;
count__9454_9468 = G__9503;
i__9455_9469 = G__9504;
continue;
} else {
var vec__9461_9505 = cljs.core.first.call(null,seq__9452_9499__$1);
var ts_9506 = cljs.core.nth.call(null,vec__9461_9505,(0),null);
var then_9507 = cljs.core.nth.call(null,vec__9461_9505,(1),null);
var seq__9462_9508 = cljs.core.seq.call(null,ts_9506);
var chunk__9463_9509 = null;
var count__9464_9510 = (0);
var i__9465_9511 = (0);
while(true){
if((i__9465_9511 < count__9464_9510)){
var test_9512 = cljs.core._nth.call(null,chunk__9463_9509,i__9465_9511);
cljs.compiler.emitln.call(null,"case ",test_9512,":");

var G__9513 = seq__9462_9508;
var G__9514 = chunk__9463_9509;
var G__9515 = count__9464_9510;
var G__9516 = (i__9465_9511 + (1));
seq__9462_9508 = G__9513;
chunk__9463_9509 = G__9514;
count__9464_9510 = G__9515;
i__9465_9511 = G__9516;
continue;
} else {
var temp__4657__auto___9517__$1 = cljs.core.seq.call(null,seq__9462_9508);
if(temp__4657__auto___9517__$1){
var seq__9462_9518__$1 = temp__4657__auto___9517__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9462_9518__$1)){
var c__7021__auto___9519 = cljs.core.chunk_first.call(null,seq__9462_9518__$1);
var G__9520 = cljs.core.chunk_rest.call(null,seq__9462_9518__$1);
var G__9521 = c__7021__auto___9519;
var G__9522 = cljs.core.count.call(null,c__7021__auto___9519);
var G__9523 = (0);
seq__9462_9508 = G__9520;
chunk__9463_9509 = G__9521;
count__9464_9510 = G__9522;
i__9465_9511 = G__9523;
continue;
} else {
var test_9524 = cljs.core.first.call(null,seq__9462_9518__$1);
cljs.compiler.emitln.call(null,"case ",test_9524,":");

var G__9525 = cljs.core.next.call(null,seq__9462_9518__$1);
var G__9526 = null;
var G__9527 = (0);
var G__9528 = (0);
seq__9462_9508 = G__9525;
chunk__9463_9509 = G__9526;
count__9464_9510 = G__9527;
i__9465_9511 = G__9528;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_9507);
} else {
cljs.compiler.emitln.call(null,then_9507);
}

cljs.compiler.emitln.call(null,"break;");

var G__9529 = cljs.core.next.call(null,seq__9452_9499__$1);
var G__9530 = null;
var G__9531 = (0);
var G__9532 = (0);
seq__9452_9466 = G__9529;
chunk__9453_9467 = G__9530;
count__9454_9468 = G__9531;
i__9455_9469 = G__9532;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(default$)){
cljs.compiler.emitln.call(null,"default:");

if(cljs.core._EQ_.call(null,cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",default$);
} else {
cljs.compiler.emitln.call(null,default$);
}
} else {
}

cljs.compiler.emitln.call(null,"}");

if(cljs.core._EQ_.call(null,cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.call(null,"return ",gs,";})()");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,cljs.core.cst$kw$throw,(function (p__9533){
var map__9534 = p__9533;
var map__9534__$1 = ((((!((map__9534 == null)))?((((map__9534.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9534.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9534):map__9534);
var throw$ = cljs.core.get.call(null,map__9534__$1,cljs.core.cst$kw$throw);
var env = cljs.core.get.call(null,map__9534__$1,cljs.core.cst$kw$env);
if(cljs.core._EQ_.call(null,cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emits.call(null,"(function(){throw ",throw$,"})()");
} else {
return cljs.compiler.emitln.call(null,"throw ",throw$,";");
}
}));
cljs.compiler.base_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 15, ["boolean",null,"object",null,"*",null,"string",null,"Object",null,"Number",null,"null",null,"Date",null,"number",null,"String",null,"RegExp",null,"...*",null,"Array",null,"array",null,"Boolean",null], null), null);
cljs.compiler.mapped_types = new cljs.core.PersistentArrayMap(null, 1, ["nil","null"], null);
cljs.compiler.resolve_type = (function cljs$compiler$resolve_type(env,t){
if(cljs.core.truth_(cljs.core.get.call(null,cljs.compiler.base_types,t))){
return t;
} else {
if(cljs.core.truth_(cljs.core.get.call(null,cljs.compiler.mapped_types,t))){
return cljs.core.get.call(null,cljs.compiler.mapped_types,t);
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"!"))){
return [cljs.core.str("!"),cljs.core.str(cljs$compiler$resolve_type.call(null,env,cljs.core.subs.call(null,t,(1))))].join('');
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"{"))){
return t;
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"function"))){
var idx = t.lastIndexOf(":");
var vec__9539 = ((!(((-1) === idx)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,t,(0),idx),cljs.core.subs.call(null,t,(idx + (1)),cljs.core.count.call(null,t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.call(null,vec__9539,(0),null);
var rstr = cljs.core.nth.call(null,vec__9539,(1),null);
var ret_t = (cljs.core.truth_(rstr)?cljs$compiler$resolve_type.call(null,env,rstr):null);
var axstr = cljs.core.subs.call(null,fstr,(9),(cljs.core.count.call(null,fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_.call(null,axstr))?null:cljs.core.map.call(null,cljs.core.comp.call(null,((function (idx,vec__9539,fstr,rstr,ret_t,axstr){
return (function (p1__9536_SHARP_){
return cljs$compiler$resolve_type.call(null,env,p1__9536_SHARP_);
});})(idx,vec__9539,fstr,rstr,ret_t,axstr))
,clojure.string.trim),clojure.string.split.call(null,axstr,/,/)));
var G__9540 = [cljs.core.str("function("),cljs.core.str(clojure.string.join.call(null,",",args_ts)),cljs.core.str(")")].join('');
if(cljs.core.truth_(ret_t)){
return [cljs.core.str(G__9540),cljs.core.str(":"),cljs.core.str(ret_t)].join('');
} else {
return G__9540;
}
} else {
if(cljs.core.truth_(goog.string.endsWith(t,"="))){
return [cljs.core.str(cljs$compiler$resolve_type.call(null,env,cljs.core.subs.call(null,t,(0),(cljs.core.count.call(null,t) - (1))))),cljs.core.str("=")].join('');
} else {
return cljs.compiler.munge.call(null,[cljs.core.str(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,env,cljs.core.symbol.call(null,t))))].join(''));

}
}
}
}
}
}
});
cljs.compiler.resolve_types = (function cljs$compiler$resolve_types(env,ts){
var ts__$1 = cljs.core.subs.call(null,clojure.string.trim.call(null,ts),(1),(cljs.core.count.call(null,ts) - (1)));
var xs = clojure.string.split.call(null,ts__$1,/\|/);
return [cljs.core.str("{"),cljs.core.str(clojure.string.join.call(null,"|",cljs.core.map.call(null,((function (ts__$1,xs){
return (function (p1__9541_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__9541_SHARP_);
});})(ts__$1,xs))
,xs))),cljs.core.str("}")].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find.call(null,/@param/,line))){
var vec__9544 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var p = cljs.core.nth.call(null,vec__9544,(0),null);
var ts = cljs.core.nth.call(null,vec__9544,(1),null);
var n = cljs.core.nth.call(null,vec__9544,(2),null);
var xs = cljs.core.nthnext.call(null,vec__9544,(3));
if(cljs.core.truth_((function (){var and__6198__auto__ = cljs.core._EQ_.call(null,"@param",p);
if(and__6198__auto__){
var and__6198__auto____$1 = ts;
if(cljs.core.truth_(and__6198__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__6198__auto____$1;
}
} else {
return and__6198__auto__;
}
})())){
return clojure.string.join.call(null," ",cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types.call(null,env,ts),cljs.compiler.munge.call(null,n)], null),xs));
} else {
return line;
}
} else {
if(cljs.core.truth_(cljs.core.re_find.call(null,/@return/,line))){
var vec__9545 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var p = cljs.core.nth.call(null,vec__9545,(0),null);
var ts = cljs.core.nth.call(null,vec__9545,(1),null);
var xs = cljs.core.nthnext.call(null,vec__9545,(2));
if(cljs.core.truth_((function (){var and__6198__auto__ = cljs.core._EQ_.call(null,"@return",p);
if(and__6198__auto__){
var and__6198__auto____$1 = ts;
if(cljs.core.truth_(and__6198__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__6198__auto____$1;
}
} else {
return and__6198__auto__;
}
})())){
return clojure.string.join.call(null," ",cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types.call(null,env,ts)], null),xs));
} else {
return line;
}
} else {
return line;

}
}
});
cljs.compiler.checking_types_QMARK_ = (function cljs$compiler$checking_types_QMARK_(){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$warn,null,cljs.core.cst$kw$error,null], null), null).call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$options,cljs.core.cst$kw$closure_DASH_warnings,cljs.core.cst$kw$check_DASH_types], null)));
});
/**
 * Emit a nicely formatted comment string.
 */
cljs.compiler.emit_comment = (function cljs$compiler$emit_comment(var_args){
var args9547 = [];
var len__7280__auto___9574 = arguments.length;
var i__7281__auto___9575 = (0);
while(true){
if((i__7281__auto___9575 < len__7280__auto___9574)){
args9547.push((arguments[i__7281__auto___9575]));

var G__9576 = (i__7281__auto___9575 + (1));
i__7281__auto___9575 = G__9576;
continue;
} else {
}
break;
}

var G__9549 = args9547.length;
switch (G__9549) {
case 2:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9547.length)].join('')));

}
});

cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2 = (function (doc,jsdoc){
return cljs.compiler.emit_comment.call(null,null,doc,jsdoc);
});

cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3 = (function (env,doc,jsdoc){
var docs = (cljs.core.truth_(doc)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [doc], null):null);
var docs__$1 = (cljs.core.truth_(jsdoc)?cljs.core.concat.call(null,docs,jsdoc):docs);
var docs__$2 = cljs.core.remove.call(null,cljs.core.nil_QMARK_,docs__$1);
var print_comment_lines = ((function (docs,docs__$1,docs__$2){
return (function cljs$compiler$print_comment_lines(e){
var vec__9565 = cljs.core.map.call(null,((function (docs,docs__$1,docs__$2){
return (function (p1__9546_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))){
return cljs.compiler.munge_param_return.call(null,env,p1__9546_SHARP_);
} else {
return p1__9546_SHARP_;
}
});})(docs,docs__$1,docs__$2))
,clojure.string.split_lines.call(null,e));
var x = cljs.core.nth.call(null,vec__9565,(0),null);
var ys = cljs.core.nthnext.call(null,vec__9565,(1));
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,x,"*/","* /"));

var seq__9566 = cljs.core.seq.call(null,ys);
var chunk__9567 = null;
var count__9568 = (0);
var i__9569 = (0);
while(true){
if((i__9569 < count__9568)){
var next_line = cljs.core._nth.call(null,chunk__9567,i__9569);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));

var G__9578 = seq__9566;
var G__9579 = chunk__9567;
var G__9580 = count__9568;
var G__9581 = (i__9569 + (1));
seq__9566 = G__9578;
chunk__9567 = G__9579;
count__9568 = G__9580;
i__9569 = G__9581;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__9566);
if(temp__4657__auto__){
var seq__9566__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9566__$1)){
var c__7021__auto__ = cljs.core.chunk_first.call(null,seq__9566__$1);
var G__9582 = cljs.core.chunk_rest.call(null,seq__9566__$1);
var G__9583 = c__7021__auto__;
var G__9584 = cljs.core.count.call(null,c__7021__auto__);
var G__9585 = (0);
seq__9566 = G__9582;
chunk__9567 = G__9583;
count__9568 = G__9584;
i__9569 = G__9585;
continue;
} else {
var next_line = cljs.core.first.call(null,seq__9566__$1);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));

var G__9586 = cljs.core.next.call(null,seq__9566__$1);
var G__9587 = null;
var G__9588 = (0);
var G__9589 = (0);
seq__9566 = G__9586;
chunk__9567 = G__9587;
count__9568 = G__9588;
i__9569 = G__9589;
continue;
}
} else {
return null;
}
}
break;
}
});})(docs,docs__$1,docs__$2))
;
if(cljs.core.seq.call(null,docs__$2)){
cljs.compiler.emitln.call(null,"/**");

var seq__9570_9590 = cljs.core.seq.call(null,docs__$2);
var chunk__9571_9591 = null;
var count__9572_9592 = (0);
var i__9573_9593 = (0);
while(true){
if((i__9573_9593 < count__9572_9592)){
var e_9594 = cljs.core._nth.call(null,chunk__9571_9591,i__9573_9593);
if(cljs.core.truth_(e_9594)){
print_comment_lines.call(null,e_9594);
} else {
}

var G__9595 = seq__9570_9590;
var G__9596 = chunk__9571_9591;
var G__9597 = count__9572_9592;
var G__9598 = (i__9573_9593 + (1));
seq__9570_9590 = G__9595;
chunk__9571_9591 = G__9596;
count__9572_9592 = G__9597;
i__9573_9593 = G__9598;
continue;
} else {
var temp__4657__auto___9599 = cljs.core.seq.call(null,seq__9570_9590);
if(temp__4657__auto___9599){
var seq__9570_9600__$1 = temp__4657__auto___9599;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9570_9600__$1)){
var c__7021__auto___9601 = cljs.core.chunk_first.call(null,seq__9570_9600__$1);
var G__9602 = cljs.core.chunk_rest.call(null,seq__9570_9600__$1);
var G__9603 = c__7021__auto___9601;
var G__9604 = cljs.core.count.call(null,c__7021__auto___9601);
var G__9605 = (0);
seq__9570_9590 = G__9602;
chunk__9571_9591 = G__9603;
count__9572_9592 = G__9604;
i__9573_9593 = G__9605;
continue;
} else {
var e_9606 = cljs.core.first.call(null,seq__9570_9600__$1);
if(cljs.core.truth_(e_9606)){
print_comment_lines.call(null,e_9606);
} else {
}

var G__9607 = cljs.core.next.call(null,seq__9570_9600__$1);
var G__9608 = null;
var G__9609 = (0);
var G__9610 = (0);
seq__9570_9590 = G__9607;
chunk__9571_9591 = G__9608;
count__9572_9592 = G__9609;
i__9573_9593 = G__9610;
continue;
}
} else {
}
}
break;
}

return cljs.compiler.emitln.call(null," */");
} else {
return null;
}
});

cljs.compiler.emit_comment.cljs$lang$maxFixedArity = 3;
cljs.compiler.valid_define_value_QMARK_ = (function cljs$compiler$valid_define_value_QMARK_(x){
return (typeof x === 'string') || (x === true) || (x === false) || (typeof x === 'number');
});
cljs.compiler.get_define = (function cljs$compiler$get_define(mname,jsdoc){
var opts = cljs.core.get.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),cljs.core.cst$kw$options);
var and__6198__auto__ = cljs.core.some.call(null,((function (opts){
return (function (p1__9612_SHARP_){
return goog.string.startsWith(p1__9612_SHARP_,"@define");
});})(opts))
,jsdoc);
if(cljs.core.truth_(and__6198__auto__)){
var and__6198__auto____$1 = opts;
if(cljs.core.truth_(and__6198__auto____$1)){
var and__6198__auto____$2 = cljs.core._EQ_.call(null,cljs.core.cst$kw$optimizations.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.cst$kw$none);
if(and__6198__auto____$2){
var define = cljs.core.get_in.call(null,opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$closure_DASH_defines,[cljs.core.str(mname)].join('')], null));
if(cljs.core.truth_(cljs.compiler.valid_define_value_QMARK_.call(null,define))){
return cljs.core.pr_str.call(null,define);
} else {
return null;
}
} else {
return and__6198__auto____$2;
}
} else {
return and__6198__auto____$1;
}
} else {
return and__6198__auto__;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,cljs.core.cst$kw$def,(function (p__9613){
var map__9614 = p__9613;
var map__9614__$1 = ((((!((map__9614 == null)))?((((map__9614.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9614.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9614):map__9614);
var name = cljs.core.get.call(null,map__9614__$1,cljs.core.cst$kw$name);
var var$ = cljs.core.get.call(null,map__9614__$1,cljs.core.cst$kw$var);
var init = cljs.core.get.call(null,map__9614__$1,cljs.core.cst$kw$init);
var env = cljs.core.get.call(null,map__9614__$1,cljs.core.cst$kw$env);
var doc = cljs.core.get.call(null,map__9614__$1,cljs.core.cst$kw$doc);
var jsdoc = cljs.core.get.call(null,map__9614__$1,cljs.core.cst$kw$jsdoc);
var export$ = cljs.core.get.call(null,map__9614__$1,cljs.core.cst$kw$export);
var test = cljs.core.get.call(null,map__9614__$1,cljs.core.cst$kw$test);
var var_ast = cljs.core.get.call(null,map__9614__$1,cljs.core.cst$kw$var_DASH_ast);
if(cljs.core.truth_((function (){var or__6210__auto__ = init;
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return cljs.core.cst$kw$def_DASH_emits_DASH_var.cljs$core$IFn$_invoke$arity$1(env);
}
})())){
var mname = cljs.compiler.munge.call(null,name);
cljs.compiler.emit_comment.call(null,env,doc,cljs.core.concat.call(null,jsdoc,cljs.core.cst$kw$jsdoc.cljs$core$IFn$_invoke$arity$1(init)));

if(cljs.core.truth_(cljs.core.cst$kw$def_DASH_emits_DASH_var.cljs$core$IFn$_invoke$arity$1(env))){
if(cljs.core._EQ_.call(null,cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"return (");
} else {
}

cljs.compiler.emitln.call(null,"(function (){");
} else {
}

cljs.compiler.emits.call(null,var$);

if(cljs.core.truth_(init)){
cljs.compiler.emits.call(null," = ",(function (){var temp__4655__auto__ = cljs.compiler.get_define.call(null,mname,jsdoc);
if(cljs.core.truth_(temp__4655__auto__)){
var define = temp__4655__auto__;
return define;
} else {
return init;
}
})());
} else {
}

if(cljs.core.truth_(cljs.core.cst$kw$def_DASH_emits_DASH_var.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"; return (");

cljs.compiler.emits.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$op,cljs.core.cst$kw$var_DASH_special,cljs.core.cst$kw$env,cljs.core.assoc.call(null,env,cljs.core.cst$kw$context,cljs.core.cst$kw$expr)], null),var_ast));

cljs.compiler.emitln.call(null,");})()");

if(cljs.core._EQ_.call(null,cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,")");
} else {
}
} else {
}

if(cljs.core._EQ_.call(null,cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emitln.call(null,";");
}

if(cljs.core.truth_(export$)){
cljs.compiler.emitln.call(null,"goog.exportSymbol('",cljs.compiler.munge.call(null,export$),"', ",mname,");");
} else {
}

if(cljs.core.truth_((function (){var and__6198__auto__ = cljs.analyzer._STAR_load_tests_STAR_;
if(cljs.core.truth_(and__6198__auto__)){
return test;
} else {
return and__6198__auto__;
}
})())){
if(cljs.core._EQ_.call(null,cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,";");
} else {
}

return cljs.compiler.emitln.call(null,var$,".cljs$lang$test = ",test,";");
} else {
return null;
}
} else {
return null;
}
}));
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__9616){
var map__9633 = p__9616;
var map__9633__$1 = ((((!((map__9633 == null)))?((((map__9633.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9633.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9633):map__9633);
var name = cljs.core.get.call(null,map__9633__$1,cljs.core.cst$kw$name);
var params = cljs.core.get.call(null,map__9633__$1,cljs.core.cst$kw$params);
var env = cljs.core.get.call(null,map__9633__$1,cljs.core.cst$kw$env);
var arglist = cljs.core.gensym.call(null,"arglist__");
var delegate_name = [cljs.core.str(cljs.compiler.munge.call(null,name)),cljs.core.str("__delegate")].join('');
cljs.compiler.emitln.call(null,"(function (",arglist,"){");

var seq__9635_9649 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.drop_last.call(null,(2),params)));
var chunk__9636_9650 = null;
var count__9637_9651 = (0);
var i__9638_9652 = (0);
while(true){
if((i__9638_9652 < count__9637_9651)){
var vec__9639_9653 = cljs.core._nth.call(null,chunk__9636_9650,i__9638_9652);
var i_9654 = cljs.core.nth.call(null,vec__9639_9653,(0),null);
var param_9655 = cljs.core.nth.call(null,vec__9639_9653,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_9655);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");

var G__9656 = seq__9635_9649;
var G__9657 = chunk__9636_9650;
var G__9658 = count__9637_9651;
var G__9659 = (i__9638_9652 + (1));
seq__9635_9649 = G__9656;
chunk__9636_9650 = G__9657;
count__9637_9651 = G__9658;
i__9638_9652 = G__9659;
continue;
} else {
var temp__4657__auto___9660 = cljs.core.seq.call(null,seq__9635_9649);
if(temp__4657__auto___9660){
var seq__9635_9661__$1 = temp__4657__auto___9660;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9635_9661__$1)){
var c__7021__auto___9662 = cljs.core.chunk_first.call(null,seq__9635_9661__$1);
var G__9663 = cljs.core.chunk_rest.call(null,seq__9635_9661__$1);
var G__9664 = c__7021__auto___9662;
var G__9665 = cljs.core.count.call(null,c__7021__auto___9662);
var G__9666 = (0);
seq__9635_9649 = G__9663;
chunk__9636_9650 = G__9664;
count__9637_9651 = G__9665;
i__9638_9652 = G__9666;
continue;
} else {
var vec__9640_9667 = cljs.core.first.call(null,seq__9635_9661__$1);
var i_9668 = cljs.core.nth.call(null,vec__9640_9667,(0),null);
var param_9669 = cljs.core.nth.call(null,vec__9640_9667,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_9669);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");

var G__9670 = cljs.core.next.call(null,seq__9635_9661__$1);
var G__9671 = null;
var G__9672 = (0);
var G__9673 = (0);
seq__9635_9649 = G__9670;
chunk__9636_9650 = G__9671;
count__9637_9651 = G__9672;
i__9638_9652 = G__9673;
continue;
}
} else {
}
}
break;
}

if(((1) < cljs.core.count.call(null,params))){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,cljs.core.butlast.call(null,params)));

cljs.compiler.emitln.call(null," = cljs.core.first(",arglist,");");

cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = cljs.core.rest(",arglist,");");

cljs.compiler.emits.call(null,"return ",delegate_name,"(");

var seq__9641_9674 = cljs.core.seq.call(null,params);
var chunk__9642_9675 = null;
var count__9643_9676 = (0);
var i__9644_9677 = (0);
while(true){
if((i__9644_9677 < count__9643_9676)){
var param_9678 = cljs.core._nth.call(null,chunk__9642_9675,i__9644_9677);
cljs.compiler.emit.call(null,param_9678);

if(cljs.core._EQ_.call(null,param_9678,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__9679 = seq__9641_9674;
var G__9680 = chunk__9642_9675;
var G__9681 = count__9643_9676;
var G__9682 = (i__9644_9677 + (1));
seq__9641_9674 = G__9679;
chunk__9642_9675 = G__9680;
count__9643_9676 = G__9681;
i__9644_9677 = G__9682;
continue;
} else {
var temp__4657__auto___9683 = cljs.core.seq.call(null,seq__9641_9674);
if(temp__4657__auto___9683){
var seq__9641_9684__$1 = temp__4657__auto___9683;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9641_9684__$1)){
var c__7021__auto___9685 = cljs.core.chunk_first.call(null,seq__9641_9684__$1);
var G__9686 = cljs.core.chunk_rest.call(null,seq__9641_9684__$1);
var G__9687 = c__7021__auto___9685;
var G__9688 = cljs.core.count.call(null,c__7021__auto___9685);
var G__9689 = (0);
seq__9641_9674 = G__9686;
chunk__9642_9675 = G__9687;
count__9643_9676 = G__9688;
i__9644_9677 = G__9689;
continue;
} else {
var param_9690 = cljs.core.first.call(null,seq__9641_9684__$1);
cljs.compiler.emit.call(null,param_9690);

if(cljs.core._EQ_.call(null,param_9690,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__9691 = cljs.core.next.call(null,seq__9641_9684__$1);
var G__9692 = null;
var G__9693 = (0);
var G__9694 = (0);
seq__9641_9674 = G__9691;
chunk__9642_9675 = G__9692;
count__9643_9676 = G__9693;
i__9644_9677 = G__9694;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,");");
} else {
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = cljs.core.seq(",arglist,");");

cljs.compiler.emits.call(null,"return ",delegate_name,"(");

var seq__9645_9695 = cljs.core.seq.call(null,params);
var chunk__9646_9696 = null;
var count__9647_9697 = (0);
var i__9648_9698 = (0);
while(true){
if((i__9648_9698 < count__9647_9697)){
var param_9699 = cljs.core._nth.call(null,chunk__9646_9696,i__9648_9698);
cljs.compiler.emit.call(null,param_9699);

if(cljs.core._EQ_.call(null,param_9699,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__9700 = seq__9645_9695;
var G__9701 = chunk__9646_9696;
var G__9702 = count__9647_9697;
var G__9703 = (i__9648_9698 + (1));
seq__9645_9695 = G__9700;
chunk__9646_9696 = G__9701;
count__9647_9697 = G__9702;
i__9648_9698 = G__9703;
continue;
} else {
var temp__4657__auto___9704 = cljs.core.seq.call(null,seq__9645_9695);
if(temp__4657__auto___9704){
var seq__9645_9705__$1 = temp__4657__auto___9704;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9645_9705__$1)){
var c__7021__auto___9706 = cljs.core.chunk_first.call(null,seq__9645_9705__$1);
var G__9707 = cljs.core.chunk_rest.call(null,seq__9645_9705__$1);
var G__9708 = c__7021__auto___9706;
var G__9709 = cljs.core.count.call(null,c__7021__auto___9706);
var G__9710 = (0);
seq__9645_9695 = G__9707;
chunk__9646_9696 = G__9708;
count__9647_9697 = G__9709;
i__9648_9698 = G__9710;
continue;
} else {
var param_9711 = cljs.core.first.call(null,seq__9645_9705__$1);
cljs.compiler.emit.call(null,param_9711);

if(cljs.core._EQ_.call(null,param_9711,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__9712 = cljs.core.next.call(null,seq__9645_9705__$1);
var G__9713 = null;
var G__9714 = (0);
var G__9715 = (0);
seq__9645_9695 = G__9712;
chunk__9646_9696 = G__9713;
count__9647_9697 = G__9714;
i__9648_9698 = G__9715;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,");");
}

return cljs.compiler.emits.call(null,"})");
});
cljs.compiler.emit_fn_params = (function cljs$compiler$emit_fn_params(params){
var seq__9720 = cljs.core.seq.call(null,params);
var chunk__9721 = null;
var count__9722 = (0);
var i__9723 = (0);
while(true){
if((i__9723 < count__9722)){
var param = cljs.core._nth.call(null,chunk__9721,i__9723);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__9724 = seq__9720;
var G__9725 = chunk__9721;
var G__9726 = count__9722;
var G__9727 = (i__9723 + (1));
seq__9720 = G__9724;
chunk__9721 = G__9725;
count__9722 = G__9726;
i__9723 = G__9727;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__9720);
if(temp__4657__auto__){
var seq__9720__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9720__$1)){
var c__7021__auto__ = cljs.core.chunk_first.call(null,seq__9720__$1);
var G__9728 = cljs.core.chunk_rest.call(null,seq__9720__$1);
var G__9729 = c__7021__auto__;
var G__9730 = cljs.core.count.call(null,c__7021__auto__);
var G__9731 = (0);
seq__9720 = G__9728;
chunk__9721 = G__9729;
count__9722 = G__9730;
i__9723 = G__9731;
continue;
} else {
var param = cljs.core.first.call(null,seq__9720__$1);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__9732 = cljs.core.next.call(null,seq__9720__$1);
var G__9733 = null;
var G__9734 = (0);
var G__9735 = (0);
seq__9720 = G__9732;
chunk__9721 = G__9733;
count__9722 = G__9734;
i__9723 = G__9735;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__9736){
var map__9739 = p__9736;
var map__9739__$1 = ((((!((map__9739 == null)))?((((map__9739.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9739.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9739):map__9739);
var type = cljs.core.get.call(null,map__9739__$1,cljs.core.cst$kw$type);
var name = cljs.core.get.call(null,map__9739__$1,cljs.core.cst$kw$name);
var variadic = cljs.core.get.call(null,map__9739__$1,cljs.core.cst$kw$variadic);
var params = cljs.core.get.call(null,map__9739__$1,cljs.core.cst$kw$params);
var expr = cljs.core.get.call(null,map__9739__$1,cljs.core.cst$kw$expr);
var env = cljs.core.get.call(null,map__9739__$1,cljs.core.cst$kw$env);
var recurs = cljs.core.get.call(null,map__9739__$1,cljs.core.cst$kw$recurs);
var max_fixed_arity = cljs.core.get.call(null,map__9739__$1,cljs.core.cst$kw$max_DASH_fixed_DASH_arity);
var env__9225__auto__ = env;
if(cljs.core._EQ_.call(null,cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__9225__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(function ",cljs.compiler.munge.call(null,name),"(");

cljs.compiler.emit_fn_params.call(null,params);

cljs.compiler.emitln.call(null,"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"while(true){");
} else {
}

cljs.compiler.emits.call(null,expr);

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"break;");

cljs.compiler.emitln.call(null,"}");
} else {
}

cljs.compiler.emits.call(null,"})");

if(cljs.core._EQ_.call(null,cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__9225__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
/**
 * Emit code that copies function arguments into an array starting at an index.
 *   Returns name of var holding the array.
 */
cljs.compiler.emit_arguments_to_array = (function cljs$compiler$emit_arguments_to_array(startslice){
if(((startslice >= (0))) && (cljs.core.integer_QMARK_.call(null,startslice))){
} else {
throw (new Error("Assert failed: (and (>= startslice 0) (integer? startslice))"));
}

var mname = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
var i = [cljs.core.str(mname),cljs.core.str("__i")].join('');
var a = [cljs.core.str(mname),cljs.core.str("__a")].join('');
cljs.compiler.emitln.call(null,"var ",i," = 0, ",a," = new Array(arguments.length -  ",startslice,");");

cljs.compiler.emitln.call(null,"while (",i," < ",a,".length) {",a,"[",i,"] = arguments[",i," + ",startslice,"]; ++",i,";}");

return a;
});
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__9741){
var map__9752 = p__9741;
var map__9752__$1 = ((((!((map__9752 == null)))?((((map__9752.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9752.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9752):map__9752);
var f = map__9752__$1;
var type = cljs.core.get.call(null,map__9752__$1,cljs.core.cst$kw$type);
var name = cljs.core.get.call(null,map__9752__$1,cljs.core.cst$kw$name);
var variadic = cljs.core.get.call(null,map__9752__$1,cljs.core.cst$kw$variadic);
var params = cljs.core.get.call(null,map__9752__$1,cljs.core.cst$kw$params);
var expr = cljs.core.get.call(null,map__9752__$1,cljs.core.cst$kw$expr);
var env = cljs.core.get.call(null,map__9752__$1,cljs.core.cst$kw$env);
var recurs = cljs.core.get.call(null,map__9752__$1,cljs.core.cst$kw$recurs);
var max_fixed_arity = cljs.core.get.call(null,map__9752__$1,cljs.core.cst$kw$max_DASH_fixed_DASH_arity);
var env__9225__auto__ = env;
if(cljs.core._EQ_.call(null,cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__9225__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var name_9762__$1 = (function (){var or__6210__auto__ = name;
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_9763 = cljs.compiler.munge.call(null,name_9762__$1);
var delegate_name_9764 = [cljs.core.str(mname_9763),cljs.core.str("__delegate")].join('');
cljs.compiler.emitln.call(null,"(function() { ");

cljs.compiler.emits.call(null,"var ",delegate_name_9764," = function (");

var seq__9754_9765 = cljs.core.seq.call(null,params);
var chunk__9755_9766 = null;
var count__9756_9767 = (0);
var i__9757_9768 = (0);
while(true){
if((i__9757_9768 < count__9756_9767)){
var param_9769 = cljs.core._nth.call(null,chunk__9755_9766,i__9757_9768);
cljs.compiler.emit.call(null,param_9769);

if(cljs.core._EQ_.call(null,param_9769,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__9770 = seq__9754_9765;
var G__9771 = chunk__9755_9766;
var G__9772 = count__9756_9767;
var G__9773 = (i__9757_9768 + (1));
seq__9754_9765 = G__9770;
chunk__9755_9766 = G__9771;
count__9756_9767 = G__9772;
i__9757_9768 = G__9773;
continue;
} else {
var temp__4657__auto___9774 = cljs.core.seq.call(null,seq__9754_9765);
if(temp__4657__auto___9774){
var seq__9754_9775__$1 = temp__4657__auto___9774;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9754_9775__$1)){
var c__7021__auto___9776 = cljs.core.chunk_first.call(null,seq__9754_9775__$1);
var G__9777 = cljs.core.chunk_rest.call(null,seq__9754_9775__$1);
var G__9778 = c__7021__auto___9776;
var G__9779 = cljs.core.count.call(null,c__7021__auto___9776);
var G__9780 = (0);
seq__9754_9765 = G__9777;
chunk__9755_9766 = G__9778;
count__9756_9767 = G__9779;
i__9757_9768 = G__9780;
continue;
} else {
var param_9781 = cljs.core.first.call(null,seq__9754_9775__$1);
cljs.compiler.emit.call(null,param_9781);

if(cljs.core._EQ_.call(null,param_9781,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__9782 = cljs.core.next.call(null,seq__9754_9775__$1);
var G__9783 = null;
var G__9784 = (0);
var G__9785 = (0);
seq__9754_9765 = G__9782;
chunk__9755_9766 = G__9783;
count__9756_9767 = G__9784;
i__9757_9768 = G__9785;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"){");

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"while(true){");
} else {
}

cljs.compiler.emits.call(null,expr);

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"break;");

cljs.compiler.emitln.call(null,"}");
} else {
}

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,"var ",mname_9763," = function (",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$var_args], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",(cljs.core.count.call(null,params) - (1)),") {");

var a_9786 = cljs.compiler.emit_arguments_to_array.call(null,(cljs.core.count.call(null,params) - (1)));
cljs.compiler.emitln.call(null,"  ",cljs.core.last.call(null,params)," = new cljs.core.IndexedSeq(",a_9786,",0);");

cljs.compiler.emitln.call(null,"} ");
} else {
}

cljs.compiler.emits.call(null,"return ",delegate_name_9764,".call(this,");

var seq__9758_9787 = cljs.core.seq.call(null,params);
var chunk__9759_9788 = null;
var count__9760_9789 = (0);
var i__9761_9790 = (0);
while(true){
if((i__9761_9790 < count__9760_9789)){
var param_9791 = cljs.core._nth.call(null,chunk__9759_9788,i__9761_9790);
cljs.compiler.emit.call(null,param_9791);

if(cljs.core._EQ_.call(null,param_9791,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__9792 = seq__9758_9787;
var G__9793 = chunk__9759_9788;
var G__9794 = count__9760_9789;
var G__9795 = (i__9761_9790 + (1));
seq__9758_9787 = G__9792;
chunk__9759_9788 = G__9793;
count__9760_9789 = G__9794;
i__9761_9790 = G__9795;
continue;
} else {
var temp__4657__auto___9796 = cljs.core.seq.call(null,seq__9758_9787);
if(temp__4657__auto___9796){
var seq__9758_9797__$1 = temp__4657__auto___9796;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9758_9797__$1)){
var c__7021__auto___9798 = cljs.core.chunk_first.call(null,seq__9758_9797__$1);
var G__9799 = cljs.core.chunk_rest.call(null,seq__9758_9797__$1);
var G__9800 = c__7021__auto___9798;
var G__9801 = cljs.core.count.call(null,c__7021__auto___9798);
var G__9802 = (0);
seq__9758_9787 = G__9799;
chunk__9759_9788 = G__9800;
count__9760_9789 = G__9801;
i__9761_9790 = G__9802;
continue;
} else {
var param_9803 = cljs.core.first.call(null,seq__9758_9797__$1);
cljs.compiler.emit.call(null,param_9803);

if(cljs.core._EQ_.call(null,param_9803,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__9804 = cljs.core.next.call(null,seq__9758_9797__$1);
var G__9805 = null;
var G__9806 = (0);
var G__9807 = (0);
seq__9758_9787 = G__9804;
chunk__9759_9788 = G__9805;
count__9760_9789 = G__9806;
i__9761_9790 = G__9807;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,");");

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,mname_9763,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.call(null,mname_9763,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to.call(null,cljs.core.assoc.call(null,f,cljs.core.cst$kw$name,name_9762__$1));

cljs.compiler.emitln.call(null,";");

cljs.compiler.emitln.call(null,mname_9763,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_9764,";");

cljs.compiler.emitln.call(null,"return ",mname_9763,";");

cljs.compiler.emitln.call(null,"})()");

if(cljs.core._EQ_.call(null,cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__9225__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,cljs.core.cst$kw$fn,(function (p__9811){
var map__9812 = p__9811;
var map__9812__$1 = ((((!((map__9812 == null)))?((((map__9812.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9812.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9812):map__9812);
var name = cljs.core.get.call(null,map__9812__$1,cljs.core.cst$kw$name);
var env = cljs.core.get.call(null,map__9812__$1,cljs.core.cst$kw$env);
var methods$ = cljs.core.get.call(null,map__9812__$1,cljs.core.cst$kw$methods);
var max_fixed_arity = cljs.core.get.call(null,map__9812__$1,cljs.core.cst$kw$max_DASH_fixed_DASH_arity);
var variadic = cljs.core.get.call(null,map__9812__$1,cljs.core.cst$kw$variadic);
var recur_frames = cljs.core.get.call(null,map__9812__$1,cljs.core.cst$kw$recur_DASH_frames);
var loop_lets = cljs.core.get.call(null,map__9812__$1,cljs.core.cst$kw$loop_DASH_lets);
if(cljs.core._EQ_.call(null,cljs.core.cst$kw$statement,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var loop_locals = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.compiler.munge,cljs.core.concat.call(null,cljs.core.mapcat.call(null,cljs.core.cst$kw$params,cljs.core.filter.call(null,((function (map__9812,map__9812__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__9808_SHARP_){
var and__6198__auto__ = p1__9808_SHARP_;
if(cljs.core.truth_(and__6198__auto__)){
return cljs.core.deref.call(null,cljs.core.cst$kw$flag.cljs$core$IFn$_invoke$arity$1(p1__9808_SHARP_));
} else {
return and__6198__auto__;
}
});})(map__9812,map__9812__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,recur_frames)),cljs.core.mapcat.call(null,cljs.core.cst$kw$params,loop_lets))));
if(loop_locals){
if(cljs.core._EQ_.call(null,cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"((function (",cljs.compiler.comma_sep.call(null,cljs.core.map.call(null,cljs.compiler.munge,loop_locals)),"){");

if(cljs.core._EQ_.call(null,cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emits.call(null,"return ");
}
} else {
}

if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,methods$))){
if(cljs.core.truth_(variadic)){
cljs.compiler.emit_variadic_fn_method.call(null,cljs.core.assoc.call(null,cljs.core.first.call(null,methods$),cljs.core.cst$kw$name,name));
} else {
cljs.compiler.emit_fn_method.call(null,cljs.core.assoc.call(null,cljs.core.first.call(null,methods$),cljs.core.cst$kw$name,name));
}
} else {
var name_9833__$1 = (function (){var or__6210__auto__ = name;
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_9834 = cljs.compiler.munge.call(null,name_9833__$1);
var maxparams_9835 = cljs.core.apply.call(null,cljs.core.max_key,cljs.core.count,cljs.core.map.call(null,cljs.core.cst$kw$params,methods$));
var mmap_9836 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (name_9833__$1,mname_9834,maxparams_9835,loop_locals,map__9812,map__9812__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.call(null,cljs.core.symbol.call(null,[cljs.core.str(mname_9834),cljs.core.str("__"),cljs.core.str(cljs.core.count.call(null,cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
});})(name_9833__$1,mname_9834,maxparams_9835,loop_locals,map__9812,map__9812__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,methods$));
var ms_9837 = cljs.core.sort_by.call(null,((function (name_9833__$1,mname_9834,maxparams_9835,mmap_9836,loop_locals,map__9812,map__9812__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__9809_SHARP_){
return cljs.core.count.call(null,cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__9809_SHARP_)));
});})(name_9833__$1,mname_9834,maxparams_9835,mmap_9836,loop_locals,map__9812,map__9812__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,cljs.core.seq.call(null,mmap_9836));
if(cljs.core._EQ_.call(null,cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"(function() {");

cljs.compiler.emitln.call(null,"var ",mname_9834," = null;");

var seq__9814_9838 = cljs.core.seq.call(null,ms_9837);
var chunk__9815_9839 = null;
var count__9816_9840 = (0);
var i__9817_9841 = (0);
while(true){
if((i__9817_9841 < count__9816_9840)){
var vec__9818_9842 = cljs.core._nth.call(null,chunk__9815_9839,i__9817_9841);
var n_9843 = cljs.core.nth.call(null,vec__9818_9842,(0),null);
var meth_9844 = cljs.core.nth.call(null,vec__9818_9842,(1),null);
cljs.compiler.emits.call(null,"var ",n_9843," = ");

if(cljs.core.truth_(cljs.core.cst$kw$variadic.cljs$core$IFn$_invoke$arity$1(meth_9844))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_9844);
} else {
cljs.compiler.emit_fn_method.call(null,meth_9844);
}

cljs.compiler.emitln.call(null,";");

var G__9845 = seq__9814_9838;
var G__9846 = chunk__9815_9839;
var G__9847 = count__9816_9840;
var G__9848 = (i__9817_9841 + (1));
seq__9814_9838 = G__9845;
chunk__9815_9839 = G__9846;
count__9816_9840 = G__9847;
i__9817_9841 = G__9848;
continue;
} else {
var temp__4657__auto___9849 = cljs.core.seq.call(null,seq__9814_9838);
if(temp__4657__auto___9849){
var seq__9814_9850__$1 = temp__4657__auto___9849;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9814_9850__$1)){
var c__7021__auto___9851 = cljs.core.chunk_first.call(null,seq__9814_9850__$1);
var G__9852 = cljs.core.chunk_rest.call(null,seq__9814_9850__$1);
var G__9853 = c__7021__auto___9851;
var G__9854 = cljs.core.count.call(null,c__7021__auto___9851);
var G__9855 = (0);
seq__9814_9838 = G__9852;
chunk__9815_9839 = G__9853;
count__9816_9840 = G__9854;
i__9817_9841 = G__9855;
continue;
} else {
var vec__9819_9856 = cljs.core.first.call(null,seq__9814_9850__$1);
var n_9857 = cljs.core.nth.call(null,vec__9819_9856,(0),null);
var meth_9858 = cljs.core.nth.call(null,vec__9819_9856,(1),null);
cljs.compiler.emits.call(null,"var ",n_9857," = ");

if(cljs.core.truth_(cljs.core.cst$kw$variadic.cljs$core$IFn$_invoke$arity$1(meth_9858))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_9858);
} else {
cljs.compiler.emit_fn_method.call(null,meth_9858);
}

cljs.compiler.emitln.call(null,";");

var G__9859 = cljs.core.next.call(null,seq__9814_9850__$1);
var G__9860 = null;
var G__9861 = (0);
var G__9862 = (0);
seq__9814_9838 = G__9859;
chunk__9815_9839 = G__9860;
count__9816_9840 = G__9861;
i__9817_9841 = G__9862;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,mname_9834," = function(",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,maxparams_9835),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$var_args], null)):maxparams_9835)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,maxparams_9835));

cljs.compiler.emitln.call(null," = var_args;");
} else {
}

cljs.compiler.emitln.call(null,"switch(arguments.length){");

var seq__9820_9863 = cljs.core.seq.call(null,ms_9837);
var chunk__9821_9864 = null;
var count__9822_9865 = (0);
var i__9823_9866 = (0);
while(true){
if((i__9823_9866 < count__9822_9865)){
var vec__9824_9867 = cljs.core._nth.call(null,chunk__9821_9864,i__9823_9866);
var n_9868 = cljs.core.nth.call(null,vec__9824_9867,(0),null);
var meth_9869 = cljs.core.nth.call(null,vec__9824_9867,(1),null);
if(cljs.core.truth_(cljs.core.cst$kw$variadic.cljs$core$IFn$_invoke$arity$1(meth_9869))){
cljs.compiler.emitln.call(null,"default:");

var restarg_9870 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_9870," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_9871 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_9870," = new cljs.core.IndexedSeq(",a_9871,",0);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_9868,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_9835)),(((cljs.core.count.call(null,maxparams_9835) > (1)))?", ":null),restarg_9870,");");
} else {
var pcnt_9872 = cljs.core.count.call(null,cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(meth_9869));
cljs.compiler.emitln.call(null,"case ",pcnt_9872,":");

cljs.compiler.emitln.call(null,"return ",n_9868,".call(this",(((pcnt_9872 === (0)))?null:cljs.core._conj.call(null,(function (){var x__7044__auto__ = cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_9872,maxparams_9835));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})(),",")),");");
}

var G__9873 = seq__9820_9863;
var G__9874 = chunk__9821_9864;
var G__9875 = count__9822_9865;
var G__9876 = (i__9823_9866 + (1));
seq__9820_9863 = G__9873;
chunk__9821_9864 = G__9874;
count__9822_9865 = G__9875;
i__9823_9866 = G__9876;
continue;
} else {
var temp__4657__auto___9877 = cljs.core.seq.call(null,seq__9820_9863);
if(temp__4657__auto___9877){
var seq__9820_9878__$1 = temp__4657__auto___9877;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9820_9878__$1)){
var c__7021__auto___9879 = cljs.core.chunk_first.call(null,seq__9820_9878__$1);
var G__9880 = cljs.core.chunk_rest.call(null,seq__9820_9878__$1);
var G__9881 = c__7021__auto___9879;
var G__9882 = cljs.core.count.call(null,c__7021__auto___9879);
var G__9883 = (0);
seq__9820_9863 = G__9880;
chunk__9821_9864 = G__9881;
count__9822_9865 = G__9882;
i__9823_9866 = G__9883;
continue;
} else {
var vec__9825_9884 = cljs.core.first.call(null,seq__9820_9878__$1);
var n_9885 = cljs.core.nth.call(null,vec__9825_9884,(0),null);
var meth_9886 = cljs.core.nth.call(null,vec__9825_9884,(1),null);
if(cljs.core.truth_(cljs.core.cst$kw$variadic.cljs$core$IFn$_invoke$arity$1(meth_9886))){
cljs.compiler.emitln.call(null,"default:");

var restarg_9887 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_9887," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_9888 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_9887," = new cljs.core.IndexedSeq(",a_9888,",0);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_9885,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_9835)),(((cljs.core.count.call(null,maxparams_9835) > (1)))?", ":null),restarg_9887,");");
} else {
var pcnt_9889 = cljs.core.count.call(null,cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(meth_9886));
cljs.compiler.emitln.call(null,"case ",pcnt_9889,":");

cljs.compiler.emitln.call(null,"return ",n_9885,".call(this",(((pcnt_9889 === (0)))?null:cljs.core._conj.call(null,(function (){var x__7044__auto__ = cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_9889,maxparams_9835));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})(),",")),");");
}

var G__9890 = cljs.core.next.call(null,seq__9820_9878__$1);
var G__9891 = null;
var G__9892 = (0);
var G__9893 = (0);
seq__9820_9863 = G__9890;
chunk__9821_9864 = G__9891;
count__9822_9865 = G__9892;
i__9823_9866 = G__9893;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"throw(new Error('Invalid arity: ' + arguments.length));");

cljs.compiler.emitln.call(null,"};");

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.call(null,mname_9834,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.call(null,mname_9834,".cljs$lang$applyTo = ",cljs.core.some.call(null,((function (name_9833__$1,mname_9834,maxparams_9835,mmap_9836,ms_9837,loop_locals,map__9812,map__9812__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__9810_SHARP_){
var vec__9826 = p1__9810_SHARP_;
var n = cljs.core.nth.call(null,vec__9826,(0),null);
var m = cljs.core.nth.call(null,vec__9826,(1),null);
if(cljs.core.truth_(cljs.core.cst$kw$variadic.cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
});})(name_9833__$1,mname_9834,maxparams_9835,mmap_9836,ms_9837,loop_locals,map__9812,map__9812__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,ms_9837),".cljs$lang$applyTo;");
} else {
}

var seq__9827_9894 = cljs.core.seq.call(null,ms_9837);
var chunk__9828_9895 = null;
var count__9829_9896 = (0);
var i__9830_9897 = (0);
while(true){
if((i__9830_9897 < count__9829_9896)){
var vec__9831_9898 = cljs.core._nth.call(null,chunk__9828_9895,i__9830_9897);
var n_9899 = cljs.core.nth.call(null,vec__9831_9898,(0),null);
var meth_9900 = cljs.core.nth.call(null,vec__9831_9898,(1),null);
var c_9901 = cljs.core.count.call(null,cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(meth_9900));
if(cljs.core.truth_(cljs.core.cst$kw$variadic.cljs$core$IFn$_invoke$arity$1(meth_9900))){
cljs.compiler.emitln.call(null,mname_9834,".cljs$core$IFn$_invoke$arity$variadic = ",n_9899,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_9834,".cljs$core$IFn$_invoke$arity$",c_9901," = ",n_9899,";");
}

var G__9902 = seq__9827_9894;
var G__9903 = chunk__9828_9895;
var G__9904 = count__9829_9896;
var G__9905 = (i__9830_9897 + (1));
seq__9827_9894 = G__9902;
chunk__9828_9895 = G__9903;
count__9829_9896 = G__9904;
i__9830_9897 = G__9905;
continue;
} else {
var temp__4657__auto___9906 = cljs.core.seq.call(null,seq__9827_9894);
if(temp__4657__auto___9906){
var seq__9827_9907__$1 = temp__4657__auto___9906;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9827_9907__$1)){
var c__7021__auto___9908 = cljs.core.chunk_first.call(null,seq__9827_9907__$1);
var G__9909 = cljs.core.chunk_rest.call(null,seq__9827_9907__$1);
var G__9910 = c__7021__auto___9908;
var G__9911 = cljs.core.count.call(null,c__7021__auto___9908);
var G__9912 = (0);
seq__9827_9894 = G__9909;
chunk__9828_9895 = G__9910;
count__9829_9896 = G__9911;
i__9830_9897 = G__9912;
continue;
} else {
var vec__9832_9913 = cljs.core.first.call(null,seq__9827_9907__$1);
var n_9914 = cljs.core.nth.call(null,vec__9832_9913,(0),null);
var meth_9915 = cljs.core.nth.call(null,vec__9832_9913,(1),null);
var c_9916 = cljs.core.count.call(null,cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(meth_9915));
if(cljs.core.truth_(cljs.core.cst$kw$variadic.cljs$core$IFn$_invoke$arity$1(meth_9915))){
cljs.compiler.emitln.call(null,mname_9834,".cljs$core$IFn$_invoke$arity$variadic = ",n_9914,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_9834,".cljs$core$IFn$_invoke$arity$",c_9916," = ",n_9914,";");
}

var G__9917 = cljs.core.next.call(null,seq__9827_9907__$1);
var G__9918 = null;
var G__9919 = (0);
var G__9920 = (0);
seq__9827_9894 = G__9917;
chunk__9828_9895 = G__9918;
count__9829_9896 = G__9919;
i__9830_9897 = G__9920;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"return ",mname_9834,";");

cljs.compiler.emitln.call(null,"})()");
}

if(loop_locals){
return cljs.compiler.emitln.call(null,";})(",cljs.compiler.comma_sep.call(null,loop_locals),"))");
} else {
return null;
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,cljs.core.cst$kw$do,(function (p__9921){
var map__9922 = p__9921;
var map__9922__$1 = ((((!((map__9922 == null)))?((((map__9922.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9922.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9922):map__9922);
var statements = cljs.core.get.call(null,map__9922__$1,cljs.core.cst$kw$statements);
var ret = cljs.core.get.call(null,map__9922__$1,cljs.core.cst$kw$ret);
var env = cljs.core.get.call(null,map__9922__$1,cljs.core.cst$kw$env);
var context = cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var and__6198__auto__ = statements;
if(cljs.core.truth_(and__6198__auto__)){
return cljs.core._EQ_.call(null,cljs.core.cst$kw$expr,context);
} else {
return and__6198__auto__;
}
})())){
cljs.compiler.emitln.call(null,"(function (){");
} else {
}

var seq__9924_9928 = cljs.core.seq.call(null,statements);
var chunk__9925_9929 = null;
var count__9926_9930 = (0);
var i__9927_9931 = (0);
while(true){
if((i__9927_9931 < count__9926_9930)){
var s_9932 = cljs.core._nth.call(null,chunk__9925_9929,i__9927_9931);
cljs.compiler.emitln.call(null,s_9932);

var G__9933 = seq__9924_9928;
var G__9934 = chunk__9925_9929;
var G__9935 = count__9926_9930;
var G__9936 = (i__9927_9931 + (1));
seq__9924_9928 = G__9933;
chunk__9925_9929 = G__9934;
count__9926_9930 = G__9935;
i__9927_9931 = G__9936;
continue;
} else {
var temp__4657__auto___9937 = cljs.core.seq.call(null,seq__9924_9928);
if(temp__4657__auto___9937){
var seq__9924_9938__$1 = temp__4657__auto___9937;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9924_9938__$1)){
var c__7021__auto___9939 = cljs.core.chunk_first.call(null,seq__9924_9938__$1);
var G__9940 = cljs.core.chunk_rest.call(null,seq__9924_9938__$1);
var G__9941 = c__7021__auto___9939;
var G__9942 = cljs.core.count.call(null,c__7021__auto___9939);
var G__9943 = (0);
seq__9924_9928 = G__9940;
chunk__9925_9929 = G__9941;
count__9926_9930 = G__9942;
i__9927_9931 = G__9943;
continue;
} else {
var s_9944 = cljs.core.first.call(null,seq__9924_9938__$1);
cljs.compiler.emitln.call(null,s_9944);

var G__9945 = cljs.core.next.call(null,seq__9924_9938__$1);
var G__9946 = null;
var G__9947 = (0);
var G__9948 = (0);
seq__9924_9928 = G__9945;
chunk__9925_9929 = G__9946;
count__9926_9930 = G__9947;
i__9927_9931 = G__9948;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emit.call(null,ret);

if(cljs.core.truth_((function (){var and__6198__auto__ = statements;
if(cljs.core.truth_(and__6198__auto__)){
return cljs.core._EQ_.call(null,cljs.core.cst$kw$expr,context);
} else {
return and__6198__auto__;
}
})())){
return cljs.compiler.emitln.call(null,"})()");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,cljs.core.cst$kw$try,(function (p__9949){
var map__9950 = p__9949;
var map__9950__$1 = ((((!((map__9950 == null)))?((((map__9950.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9950.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9950):map__9950);
var env = cljs.core.get.call(null,map__9950__$1,cljs.core.cst$kw$env);
var try$ = cljs.core.get.call(null,map__9950__$1,cljs.core.cst$kw$try);
var catch$ = cljs.core.get.call(null,map__9950__$1,cljs.core.cst$kw$catch);
var name = cljs.core.get.call(null,map__9950__$1,cljs.core.cst$kw$name);
var finally$ = cljs.core.get.call(null,map__9950__$1,cljs.core.cst$kw$finally);
var context = cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var or__6210__auto__ = name;
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return finally$;
}
})())){
if(cljs.core._EQ_.call(null,cljs.core.cst$kw$expr,context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

cljs.compiler.emits.call(null,"try{",try$,"}");

if(cljs.core.truth_(name)){
cljs.compiler.emits.call(null,"catch (",cljs.compiler.munge.call(null,name),"){",catch$,"}");
} else {
}

if(cljs.core.truth_(finally$)){
if(cljs.core.not_EQ_.call(null,cljs.core.cst$kw$constant,cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(finally$))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("finally block cannot contain constant"),cljs.core.str("\n"),cljs.core.str("(not= :constant (:op finally))")].join('')));
}

cljs.compiler.emits.call(null,"finally {",finally$,"}");
} else {
}

if(cljs.core._EQ_.call(null,cljs.core.cst$kw$expr,context)){
return cljs.compiler.emits.call(null,"})()");
} else {
return null;
}
} else {
return cljs.compiler.emits.call(null,try$);
}
}));
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__9952,is_loop){
var map__9964 = p__9952;
var map__9964__$1 = ((((!((map__9964 == null)))?((((map__9964.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9964.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9964):map__9964);
var bindings = cljs.core.get.call(null,map__9964__$1,cljs.core.cst$kw$bindings);
var expr = cljs.core.get.call(null,map__9964__$1,cljs.core.cst$kw$expr);
var env = cljs.core.get.call(null,map__9964__$1,cljs.core.cst$kw$env);
var context = cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,cljs.core.cst$kw$expr,context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var _STAR_lexical_renames_STAR_9966_9975 = cljs.compiler._STAR_lexical_renames_STAR_;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.into.call(null,cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.call(null,cljs.core.cst$kw$statement,context))?cljs.core.map.call(null,((function (_STAR_lexical_renames_STAR_9966_9975,context,map__9964,map__9964__$1,bindings,expr,env){
return (function (binding){
var name = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope.call(null,binding),cljs.core.gensym.call(null,[cljs.core.str(name),cljs.core.str("-")].join(''))],null));
});})(_STAR_lexical_renames_STAR_9966_9975,context,map__9964,map__9964__$1,bindings,expr,env))
,bindings):null));

try{var seq__9967_9976 = cljs.core.seq.call(null,bindings);
var chunk__9968_9977 = null;
var count__9969_9978 = (0);
var i__9970_9979 = (0);
while(true){
if((i__9970_9979 < count__9969_9978)){
var map__9971_9980 = cljs.core._nth.call(null,chunk__9968_9977,i__9970_9979);
var map__9971_9981__$1 = ((((!((map__9971_9980 == null)))?((((map__9971_9980.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9971_9980.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9971_9980):map__9971_9980);
var binding_9982 = map__9971_9981__$1;
var init_9983 = cljs.core.get.call(null,map__9971_9981__$1,cljs.core.cst$kw$init);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_9982);

cljs.compiler.emitln.call(null," = ",init_9983,";");

var G__9984 = seq__9967_9976;
var G__9985 = chunk__9968_9977;
var G__9986 = count__9969_9978;
var G__9987 = (i__9970_9979 + (1));
seq__9967_9976 = G__9984;
chunk__9968_9977 = G__9985;
count__9969_9978 = G__9986;
i__9970_9979 = G__9987;
continue;
} else {
var temp__4657__auto___9988 = cljs.core.seq.call(null,seq__9967_9976);
if(temp__4657__auto___9988){
var seq__9967_9989__$1 = temp__4657__auto___9988;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9967_9989__$1)){
var c__7021__auto___9990 = cljs.core.chunk_first.call(null,seq__9967_9989__$1);
var G__9991 = cljs.core.chunk_rest.call(null,seq__9967_9989__$1);
var G__9992 = c__7021__auto___9990;
var G__9993 = cljs.core.count.call(null,c__7021__auto___9990);
var G__9994 = (0);
seq__9967_9976 = G__9991;
chunk__9968_9977 = G__9992;
count__9969_9978 = G__9993;
i__9970_9979 = G__9994;
continue;
} else {
var map__9973_9995 = cljs.core.first.call(null,seq__9967_9989__$1);
var map__9973_9996__$1 = ((((!((map__9973_9995 == null)))?((((map__9973_9995.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9973_9995.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9973_9995):map__9973_9995);
var binding_9997 = map__9973_9996__$1;
var init_9998 = cljs.core.get.call(null,map__9973_9996__$1,cljs.core.cst$kw$init);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_9997);

cljs.compiler.emitln.call(null," = ",init_9998,";");

var G__9999 = cljs.core.next.call(null,seq__9967_9989__$1);
var G__10000 = null;
var G__10001 = (0);
var G__10002 = (0);
seq__9967_9976 = G__9999;
chunk__9968_9977 = G__10000;
count__9969_9978 = G__10001;
i__9970_9979 = G__10002;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.call(null,"while(true){");
} else {
}

cljs.compiler.emits.call(null,expr);

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.call(null,"break;");

cljs.compiler.emitln.call(null,"}");
} else {
}
}finally {cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR_9966_9975;
}
if(cljs.core._EQ_.call(null,cljs.core.cst$kw$expr,context)){
return cljs.compiler.emits.call(null,"})()");
} else {
return null;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,cljs.core.cst$kw$let,(function (ast){
return cljs.compiler.emit_let.call(null,ast,false);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,cljs.core.cst$kw$loop,(function (ast){
return cljs.compiler.emit_let.call(null,ast,true);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,cljs.core.cst$kw$recur,(function (p__10003){
var map__10004 = p__10003;
var map__10004__$1 = ((((!((map__10004 == null)))?((((map__10004.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10004.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10004):map__10004);
var frame = cljs.core.get.call(null,map__10004__$1,cljs.core.cst$kw$frame);
var exprs = cljs.core.get.call(null,map__10004__$1,cljs.core.cst$kw$exprs);
var env = cljs.core.get.call(null,map__10004__$1,cljs.core.cst$kw$env);
var temps = cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,exprs),cljs.core.repeatedly.call(null,cljs.core.gensym)));
var params = cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(frame);
var n__7125__auto___10006 = cljs.core.count.call(null,exprs);
var i_10007 = (0);
while(true){
if((i_10007 < n__7125__auto___10006)){
cljs.compiler.emitln.call(null,"var ",temps.call(null,i_10007)," = ",exprs.call(null,i_10007),";");

var G__10008 = (i_10007 + (1));
i_10007 = G__10008;
continue;
} else {
}
break;
}

var n__7125__auto___10009 = cljs.core.count.call(null,exprs);
var i_10010 = (0);
while(true){
if((i_10010 < n__7125__auto___10009)){
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,params.call(null,i_10010))," = ",temps.call(null,i_10010),";");

var G__10011 = (i_10010 + (1));
i_10010 = G__10011;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.call(null,"continue;");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,cljs.core.cst$kw$letfn,(function (p__10012){
var map__10013 = p__10012;
var map__10013__$1 = ((((!((map__10013 == null)))?((((map__10013.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10013.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10013):map__10013);
var bindings = cljs.core.get.call(null,map__10013__$1,cljs.core.cst$kw$bindings);
var expr = cljs.core.get.call(null,map__10013__$1,cljs.core.cst$kw$expr);
var env = cljs.core.get.call(null,map__10013__$1,cljs.core.cst$kw$env);
var context = cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,cljs.core.cst$kw$expr,context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var seq__10015_10023 = cljs.core.seq.call(null,bindings);
var chunk__10016_10024 = null;
var count__10017_10025 = (0);
var i__10018_10026 = (0);
while(true){
if((i__10018_10026 < count__10017_10025)){
var map__10019_10027 = cljs.core._nth.call(null,chunk__10016_10024,i__10018_10026);
var map__10019_10028__$1 = ((((!((map__10019_10027 == null)))?((((map__10019_10027.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10019_10027.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10019_10027):map__10019_10027);
var binding_10029 = map__10019_10028__$1;
var init_10030 = cljs.core.get.call(null,map__10019_10028__$1,cljs.core.cst$kw$init);
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_10029)," = ",init_10030,";");

var G__10031 = seq__10015_10023;
var G__10032 = chunk__10016_10024;
var G__10033 = count__10017_10025;
var G__10034 = (i__10018_10026 + (1));
seq__10015_10023 = G__10031;
chunk__10016_10024 = G__10032;
count__10017_10025 = G__10033;
i__10018_10026 = G__10034;
continue;
} else {
var temp__4657__auto___10035 = cljs.core.seq.call(null,seq__10015_10023);
if(temp__4657__auto___10035){
var seq__10015_10036__$1 = temp__4657__auto___10035;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10015_10036__$1)){
var c__7021__auto___10037 = cljs.core.chunk_first.call(null,seq__10015_10036__$1);
var G__10038 = cljs.core.chunk_rest.call(null,seq__10015_10036__$1);
var G__10039 = c__7021__auto___10037;
var G__10040 = cljs.core.count.call(null,c__7021__auto___10037);
var G__10041 = (0);
seq__10015_10023 = G__10038;
chunk__10016_10024 = G__10039;
count__10017_10025 = G__10040;
i__10018_10026 = G__10041;
continue;
} else {
var map__10021_10042 = cljs.core.first.call(null,seq__10015_10036__$1);
var map__10021_10043__$1 = ((((!((map__10021_10042 == null)))?((((map__10021_10042.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10021_10042.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10021_10042):map__10021_10042);
var binding_10044 = map__10021_10043__$1;
var init_10045 = cljs.core.get.call(null,map__10021_10043__$1,cljs.core.cst$kw$init);
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_10044)," = ",init_10045,";");

var G__10046 = cljs.core.next.call(null,seq__10015_10036__$1);
var G__10047 = null;
var G__10048 = (0);
var G__10049 = (0);
seq__10015_10023 = G__10046;
chunk__10016_10024 = G__10047;
count__10017_10025 = G__10048;
i__10018_10026 = G__10049;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,expr);

if(cljs.core._EQ_.call(null,cljs.core.cst$kw$expr,context)){
return cljs.compiler.emits.call(null,"})()");
} else {
return null;
}
}));
cljs.compiler.protocol_prefix = (function cljs$compiler$protocol_prefix(psym){
return cljs.core.symbol.call(null,[cljs.core.str([cljs.core.str(psym)].join('').replace((new RegExp("\\.","g")),"$").replace("/","$")),cljs.core.str("$")].join(''));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,cljs.core.cst$kw$invoke,(function (p__10052){
var map__10053 = p__10052;
var map__10053__$1 = ((((!((map__10053 == null)))?((((map__10053.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10053.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10053):map__10053);
var expr = map__10053__$1;
var f = cljs.core.get.call(null,map__10053__$1,cljs.core.cst$kw$f);
var args = cljs.core.get.call(null,map__10053__$1,cljs.core.cst$kw$args);
var env = cljs.core.get.call(null,map__10053__$1,cljs.core.cst$kw$env);
var info = cljs.core.cst$kw$info.cljs$core$IFn$_invoke$arity$1(f);
var fn_QMARK_ = (function (){var and__6198__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__6198__auto__)){
var and__6198__auto____$1 = cljs.core.not.call(null,cljs.core.cst$kw$dynamic.cljs$core$IFn$_invoke$arity$1(info));
if(and__6198__auto____$1){
return cljs.core.cst$kw$fn_DASH_var.cljs$core$IFn$_invoke$arity$1(info);
} else {
return and__6198__auto____$1;
}
} else {
return and__6198__auto__;
}
})();
var protocol = cljs.core.cst$kw$protocol.cljs$core$IFn$_invoke$arity$1(info);
var tag = cljs.analyzer.infer_tag.call(null,env,cljs.core.first.call(null,cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(expr)));
var proto_QMARK_ = (function (){var and__6198__auto__ = protocol;
if(cljs.core.truth_(and__6198__auto__)){
var and__6198__auto____$1 = tag;
if(cljs.core.truth_(and__6198__auto____$1)){
var or__6210__auto__ = (function (){var and__6198__auto____$2 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__6198__auto____$2)){
var and__6198__auto____$3 = protocol;
if(cljs.core.truth_(and__6198__auto____$3)){
return cljs.core._EQ_.call(null,tag,cljs.core.cst$sym$not_DASH_native);
} else {
return and__6198__auto____$3;
}
} else {
return and__6198__auto____$2;
}
})();
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
var and__6198__auto____$2 = (function (){var or__6210__auto____$1 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(or__6210__auto____$1)){
return or__6210__auto____$1;
} else {
return cljs.core.cst$kw$protocol_DASH_inline.cljs$core$IFn$_invoke$arity$1(env);
}
})();
if(cljs.core.truth_(and__6198__auto____$2)){
var or__6210__auto____$1 = cljs.core._EQ_.call(null,protocol,tag);
if(or__6210__auto____$1){
return or__6210__auto____$1;
} else {
var and__6198__auto____$3 = !(cljs.core.set_QMARK_.call(null,tag));
if(and__6198__auto____$3){
var and__6198__auto____$4 = cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [cljs.core.cst$sym$clj,null,cljs.core.cst$sym$boolean,null,cljs.core.cst$sym$object,null,cljs.core.cst$sym$any,null,cljs.core.cst$sym$number,null,cljs.core.cst$sym$clj_DASH_or_DASH_nil,null,cljs.core.cst$sym$array,null,cljs.core.cst$sym$string,null,cljs.core.cst$sym$function,null,cljs.core.cst$sym$clj_DASH_nil,null], null), null).call(null,tag));
if(and__6198__auto____$4){
var temp__4657__auto__ = cljs.core.cst$kw$protocols.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_existing_var.call(null,cljs.core.dissoc.call(null,env,cljs.core.cst$kw$locals),tag));
if(cljs.core.truth_(temp__4657__auto__)){
var ps = temp__4657__auto__;
return ps.call(null,protocol);
} else {
return null;
}
} else {
return and__6198__auto____$4;
}
} else {
return and__6198__auto____$3;
}
}
} else {
return and__6198__auto____$2;
}
}
} else {
return and__6198__auto____$1;
}
} else {
return and__6198__auto__;
}
})();
var opt_not_QMARK_ = (cljs.core._EQ_.call(null,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(info),cljs.core.cst$sym$cljs$core_SLASH_not)) && (cljs.core._EQ_.call(null,cljs.analyzer.infer_tag.call(null,env,cljs.core.first.call(null,cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(expr))),cljs.core.cst$sym$boolean));
var ns = cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(info);
var js_QMARK_ = (cljs.core._EQ_.call(null,ns,cljs.core.cst$sym$js)) || (cljs.core._EQ_.call(null,ns,cljs.core.cst$sym$Math));
var goog_QMARK_ = (cljs.core.truth_(ns)?(function (){var or__6210__auto__ = cljs.core._EQ_.call(null,ns,cljs.core.cst$sym$goog);
if(or__6210__auto__){
return or__6210__auto__;
} else {
var temp__4657__auto__ = [cljs.core.str(ns)].join('');
if(cljs.core.truth_(temp__4657__auto__)){
var ns_str = temp__4657__auto__;
return cljs.core._EQ_.call(null,cljs.core.get.call(null,clojure.string.split.call(null,ns_str,/\./),(0),null),"goog");
} else {
return null;
}
}
})():null);
var keyword_QMARK_ = (cljs.core._EQ_.call(null,cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(f),cljs.core.cst$kw$constant)) && ((cljs.core.cst$kw$form.cljs$core$IFn$_invoke$arity$1(f) instanceof cljs.core.Keyword));
var vec__10055 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count.call(null,args);
var variadic_QMARK_ = cljs.core.cst$kw$variadic.cljs$core$IFn$_invoke$arity$1(info);
var mps = cljs.core.cst$kw$method_DASH_params.cljs$core$IFn$_invoke$arity$1(info);
var mfa = cljs.core.cst$kw$max_DASH_fixed_DASH_arity.cljs$core$IFn$_invoke$arity$1(info);
if((cljs.core.not.call(null,variadic_QMARK_)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,mps),(1)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
} else {
if(cljs.core.truth_((function (){var and__6198__auto__ = variadic_QMARK_;
if(cljs.core.truth_(and__6198__auto__)){
return (arity > mfa);
} else {
return and__6198__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$info], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__10053,map__10053__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,cljs.core.cst$kw$name,cljs.core.symbol.call(null,[cljs.core.str(cljs.compiler.munge.call(null,info__$1)),cljs.core.str(".cljs$core$IFn$_invoke$arity$variadic")].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$info], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__10053,map__10053__$1,expr,f,args,env){
return (function (p1__10050_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__10050_SHARP_,cljs.core.cst$kw$shadow),cljs.core.cst$kw$fn_DASH_self_DASH_name);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__10053,map__10053__$1,expr,f,args,env))
);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__10053,map__10053__$1,expr,f,args,env))
),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$max_DASH_fixed_DASH_arity,mfa], null)], null);
} else {
var arities = cljs.core.map.call(null,cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([arity], true),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$info], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__10053,map__10053__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,cljs.core.cst$kw$name,cljs.core.symbol.call(null,[cljs.core.str(cljs.compiler.munge.call(null,info__$1)),cljs.core.str(".cljs$core$IFn$_invoke$arity$"),cljs.core.str(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$info], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__10053,map__10053__$1,expr,f,args,env){
return (function (p1__10051_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__10051_SHARP_,cljs.core.cst$kw$shadow),cljs.core.cst$kw$fn_DASH_self_DASH_name);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__10053,map__10053__$1,expr,f,args,env))
);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__10053,map__10053__$1,expr,f,args,env))
),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.call(null,vec__10055,(0),null);
var variadic_invoke = cljs.core.nth.call(null,vec__10055,(1),null);
var env__9225__auto__ = env;
if(cljs.core._EQ_.call(null,cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__9225__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.call(null,"!(",cljs.core.first.call(null,args),")");
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_10056 = [cljs.core.str(cljs.compiler.munge.call(null,cljs.compiler.protocol_prefix.call(null,protocol))),cljs.core.str(cljs.compiler.munge.call(null,cljs.core.name.call(null,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(info)))),cljs.core.str("$arity$"),cljs.core.str(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,cljs.core.first.call(null,args),".",pimpl_10056,"(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",cljs.core.rest.call(null,args))),")");
} else {
if(keyword_QMARK_){
cljs.compiler.emits.call(null,f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count.call(null,args),"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_10057 = cljs.core.cst$kw$max_DASH_fixed_DASH_arity.cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,mfa_10057,args)),(((mfa_10057 === (0)))?null:","),"cljs.core.array_seq([",cljs.compiler.comma_sep.call(null,cljs.core.drop.call(null,mfa_10057,args)),"], 0))");
} else {
if(cljs.core.truth_((function (){var or__6210__auto__ = fn_QMARK_;
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
var or__6210__auto____$1 = js_QMARK_;
if(or__6210__auto____$1){
return or__6210__auto____$1;
} else {
return goog_QMARK_;
}
}
})())){
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_((function (){var and__6198__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__6198__auto__)){
return cljs.core._EQ_.call(null,cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(f__$1),cljs.core.cst$kw$var);
} else {
return and__6198__auto__;
}
})())){
var fprop_10058 = [cljs.core.str(".cljs$core$IFn$_invoke$arity$"),cljs.core.str(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,"(",f__$1,fprop_10058," ? ",f__$1,fprop_10058,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),"))");
} else {
cljs.compiler.emits.call(null,f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),")");
}

}
}
}
}
}

if(cljs.core._EQ_.call(null,cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__9225__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,cljs.core.cst$kw$new,(function (p__10059){
var map__10060 = p__10059;
var map__10060__$1 = ((((!((map__10060 == null)))?((((map__10060.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10060.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10060):map__10060);
var ctor = cljs.core.get.call(null,map__10060__$1,cljs.core.cst$kw$ctor);
var args = cljs.core.get.call(null,map__10060__$1,cljs.core.cst$kw$args);
var env = cljs.core.get.call(null,map__10060__$1,cljs.core.cst$kw$env);
var env__9225__auto__ = env;
if(cljs.core._EQ_.call(null,cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__9225__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(new ",ctor,"(",cljs.compiler.comma_sep.call(null,args),"))");

if(cljs.core._EQ_.call(null,cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__9225__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,cljs.core.cst$kw$set_BANG_,(function (p__10062){
var map__10063 = p__10062;
var map__10063__$1 = ((((!((map__10063 == null)))?((((map__10063.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10063.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10063):map__10063);
var target = cljs.core.get.call(null,map__10063__$1,cljs.core.cst$kw$target);
var val = cljs.core.get.call(null,map__10063__$1,cljs.core.cst$kw$val);
var env = cljs.core.get.call(null,map__10063__$1,cljs.core.cst$kw$env);
var env__9225__auto__ = env;
if(cljs.core._EQ_.call(null,cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__9225__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,target," = ",val);

if(cljs.core._EQ_.call(null,cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__9225__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.load_libs = (function cljs$compiler$load_libs(libs,seen,reloads){
var loaded_libs = cljs.compiler.munge.call(null,cljs.core.cst$sym$cljs$core$_STAR_loaded_DASH_libs_STAR_);
var loaded_libs_temp = cljs.compiler.munge.call(null,cljs.core.gensym.call(null,cljs.core.cst$sym$cljs$core$_STAR_loaded_DASH_libs_STAR_));
if(cljs.core.truth_(cljs.core.cst$kw$reload_DASH_all.cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs)))){
cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set();");

cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs," = cljs.core.set();");
} else {
}

var seq__10069_10073 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,seen)),cljs.core.distinct.call(null,cljs.core.vals.call(null,libs))));
var chunk__10070_10074 = null;
var count__10071_10075 = (0);
var i__10072_10076 = (0);
while(true){
if((i__10072_10076 < count__10071_10075)){
var lib_10077 = cljs.core._nth.call(null,chunk__10070_10074,i__10072_10076);
if(cljs.core.truth_((function (){var or__6210__auto__ = cljs.core.cst$kw$reload.cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_10077),cljs.core.cst$kw$reload);
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_10077),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__6210__auto__ = cljs.core.cst$kw$reload_DASH_all.cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_10077),cljs.core.cst$kw$reload_DASH_all);
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_10077),"', 'reload-all');");
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_10077),"');");

}
}

var G__10078 = seq__10069_10073;
var G__10079 = chunk__10070_10074;
var G__10080 = count__10071_10075;
var G__10081 = (i__10072_10076 + (1));
seq__10069_10073 = G__10078;
chunk__10070_10074 = G__10079;
count__10071_10075 = G__10080;
i__10072_10076 = G__10081;
continue;
} else {
var temp__4657__auto___10082 = cljs.core.seq.call(null,seq__10069_10073);
if(temp__4657__auto___10082){
var seq__10069_10083__$1 = temp__4657__auto___10082;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10069_10083__$1)){
var c__7021__auto___10084 = cljs.core.chunk_first.call(null,seq__10069_10083__$1);
var G__10085 = cljs.core.chunk_rest.call(null,seq__10069_10083__$1);
var G__10086 = c__7021__auto___10084;
var G__10087 = cljs.core.count.call(null,c__7021__auto___10084);
var G__10088 = (0);
seq__10069_10073 = G__10085;
chunk__10070_10074 = G__10086;
count__10071_10075 = G__10087;
i__10072_10076 = G__10088;
continue;
} else {
var lib_10089 = cljs.core.first.call(null,seq__10069_10083__$1);
if(cljs.core.truth_((function (){var or__6210__auto__ = cljs.core.cst$kw$reload.cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_10089),cljs.core.cst$kw$reload);
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_10089),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__6210__auto__ = cljs.core.cst$kw$reload_DASH_all.cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_10089),cljs.core.cst$kw$reload_DASH_all);
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_10089),"', 'reload-all');");
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_10089),"');");

}
}

var G__10090 = cljs.core.next.call(null,seq__10069_10083__$1);
var G__10091 = null;
var G__10092 = (0);
var G__10093 = (0);
seq__10069_10073 = G__10090;
chunk__10070_10074 = G__10091;
count__10071_10075 = G__10092;
i__10072_10076 = G__10093;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cljs.core.cst$kw$reload_DASH_all.cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs)))){
return cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs," = cljs.core.into(",loaded_libs_temp,", ",loaded_libs,");");
} else {
return null;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,cljs.core.cst$kw$ns,(function (p__10094){
var map__10095 = p__10094;
var map__10095__$1 = ((((!((map__10095 == null)))?((((map__10095.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10095.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10095):map__10095);
var name = cljs.core.get.call(null,map__10095__$1,cljs.core.cst$kw$name);
var requires = cljs.core.get.call(null,map__10095__$1,cljs.core.cst$kw$requires);
var uses = cljs.core.get.call(null,map__10095__$1,cljs.core.cst$kw$uses);
var require_macros = cljs.core.get.call(null,map__10095__$1,cljs.core.cst$kw$require_DASH_macros);
var reloads = cljs.core.get.call(null,map__10095__$1,cljs.core.cst$kw$reloads);
var env = cljs.core.get.call(null,map__10095__$1,cljs.core.cst$kw$env);
cljs.compiler.emitln.call(null,"goog.provide('",cljs.compiler.munge.call(null,name),"');");

if(cljs.core._EQ_.call(null,name,cljs.core.cst$sym$cljs$core)){
} else {
cljs.compiler.emitln.call(null,"goog.require('cljs.core');");
}

cljs.compiler.load_libs.call(null,requires,null,cljs.core.cst$kw$require.cljs$core$IFn$_invoke$arity$1(reloads));

return cljs.compiler.load_libs.call(null,uses,requires,cljs.core.cst$kw$use.cljs$core$IFn$_invoke$arity$1(reloads));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,cljs.core.cst$kw$deftype_STAR_,(function (p__10097){
var map__10098 = p__10097;
var map__10098__$1 = ((((!((map__10098 == null)))?((((map__10098.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10098.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10098):map__10098);
var t = cljs.core.get.call(null,map__10098__$1,cljs.core.cst$kw$t);
var fields = cljs.core.get.call(null,map__10098__$1,cljs.core.cst$kw$fields);
var pmasks = cljs.core.get.call(null,map__10098__$1,cljs.core.cst$kw$pmasks);
var body = cljs.core.get.call(null,map__10098__$1,cljs.core.cst$kw$body);
var protocols = cljs.core.get.call(null,map__10098__$1,cljs.core.cst$kw$protocols);
var fields__$1 = cljs.core.map.call(null,cljs.compiler.munge,fields);
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__10100_10114 = cljs.core.seq.call(null,protocols);
var chunk__10101_10115 = null;
var count__10102_10116 = (0);
var i__10103_10117 = (0);
while(true){
if((i__10103_10117 < count__10102_10116)){
var protocol_10118 = cljs.core._nth.call(null,chunk__10101_10115,i__10103_10117);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_10118)].join('')),"}");

var G__10119 = seq__10100_10114;
var G__10120 = chunk__10101_10115;
var G__10121 = count__10102_10116;
var G__10122 = (i__10103_10117 + (1));
seq__10100_10114 = G__10119;
chunk__10101_10115 = G__10120;
count__10102_10116 = G__10121;
i__10103_10117 = G__10122;
continue;
} else {
var temp__4657__auto___10123 = cljs.core.seq.call(null,seq__10100_10114);
if(temp__4657__auto___10123){
var seq__10100_10124__$1 = temp__4657__auto___10123;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10100_10124__$1)){
var c__7021__auto___10125 = cljs.core.chunk_first.call(null,seq__10100_10124__$1);
var G__10126 = cljs.core.chunk_rest.call(null,seq__10100_10124__$1);
var G__10127 = c__7021__auto___10125;
var G__10128 = cljs.core.count.call(null,c__7021__auto___10125);
var G__10129 = (0);
seq__10100_10114 = G__10126;
chunk__10101_10115 = G__10127;
count__10102_10116 = G__10128;
i__10103_10117 = G__10129;
continue;
} else {
var protocol_10130 = cljs.core.first.call(null,seq__10100_10124__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_10130)].join('')),"}");

var G__10131 = cljs.core.next.call(null,seq__10100_10124__$1);
var G__10132 = null;
var G__10133 = (0);
var G__10134 = (0);
seq__10100_10114 = G__10131;
chunk__10101_10115 = G__10132;
count__10102_10116 = G__10133;
i__10103_10117 = G__10134;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__10104_10135 = cljs.core.seq.call(null,fields__$1);
var chunk__10105_10136 = null;
var count__10106_10137 = (0);
var i__10107_10138 = (0);
while(true){
if((i__10107_10138 < count__10106_10137)){
var fld_10139 = cljs.core._nth.call(null,chunk__10105_10136,i__10107_10138);
cljs.compiler.emitln.call(null,"this.",fld_10139," = ",fld_10139,";");

var G__10140 = seq__10104_10135;
var G__10141 = chunk__10105_10136;
var G__10142 = count__10106_10137;
var G__10143 = (i__10107_10138 + (1));
seq__10104_10135 = G__10140;
chunk__10105_10136 = G__10141;
count__10106_10137 = G__10142;
i__10107_10138 = G__10143;
continue;
} else {
var temp__4657__auto___10144 = cljs.core.seq.call(null,seq__10104_10135);
if(temp__4657__auto___10144){
var seq__10104_10145__$1 = temp__4657__auto___10144;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10104_10145__$1)){
var c__7021__auto___10146 = cljs.core.chunk_first.call(null,seq__10104_10145__$1);
var G__10147 = cljs.core.chunk_rest.call(null,seq__10104_10145__$1);
var G__10148 = c__7021__auto___10146;
var G__10149 = cljs.core.count.call(null,c__7021__auto___10146);
var G__10150 = (0);
seq__10104_10135 = G__10147;
chunk__10105_10136 = G__10148;
count__10106_10137 = G__10149;
i__10107_10138 = G__10150;
continue;
} else {
var fld_10151 = cljs.core.first.call(null,seq__10104_10145__$1);
cljs.compiler.emitln.call(null,"this.",fld_10151," = ",fld_10151,";");

var G__10152 = cljs.core.next.call(null,seq__10104_10145__$1);
var G__10153 = null;
var G__10154 = (0);
var G__10155 = (0);
seq__10104_10135 = G__10152;
chunk__10105_10136 = G__10153;
count__10106_10137 = G__10154;
i__10107_10138 = G__10155;
continue;
}
} else {
}
}
break;
}

var seq__10108_10156 = cljs.core.seq.call(null,pmasks);
var chunk__10109_10157 = null;
var count__10110_10158 = (0);
var i__10111_10159 = (0);
while(true){
if((i__10111_10159 < count__10110_10158)){
var vec__10112_10160 = cljs.core._nth.call(null,chunk__10109_10157,i__10111_10159);
var pno_10161 = cljs.core.nth.call(null,vec__10112_10160,(0),null);
var pmask_10162 = cljs.core.nth.call(null,vec__10112_10160,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_10161,"$ = ",pmask_10162,";");

var G__10163 = seq__10108_10156;
var G__10164 = chunk__10109_10157;
var G__10165 = count__10110_10158;
var G__10166 = (i__10111_10159 + (1));
seq__10108_10156 = G__10163;
chunk__10109_10157 = G__10164;
count__10110_10158 = G__10165;
i__10111_10159 = G__10166;
continue;
} else {
var temp__4657__auto___10167 = cljs.core.seq.call(null,seq__10108_10156);
if(temp__4657__auto___10167){
var seq__10108_10168__$1 = temp__4657__auto___10167;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10108_10168__$1)){
var c__7021__auto___10169 = cljs.core.chunk_first.call(null,seq__10108_10168__$1);
var G__10170 = cljs.core.chunk_rest.call(null,seq__10108_10168__$1);
var G__10171 = c__7021__auto___10169;
var G__10172 = cljs.core.count.call(null,c__7021__auto___10169);
var G__10173 = (0);
seq__10108_10156 = G__10170;
chunk__10109_10157 = G__10171;
count__10110_10158 = G__10172;
i__10111_10159 = G__10173;
continue;
} else {
var vec__10113_10174 = cljs.core.first.call(null,seq__10108_10168__$1);
var pno_10175 = cljs.core.nth.call(null,vec__10113_10174,(0),null);
var pmask_10176 = cljs.core.nth.call(null,vec__10113_10174,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_10175,"$ = ",pmask_10176,";");

var G__10177 = cljs.core.next.call(null,seq__10108_10168__$1);
var G__10178 = null;
var G__10179 = (0);
var G__10180 = (0);
seq__10108_10156 = G__10177;
chunk__10109_10157 = G__10178;
count__10110_10158 = G__10179;
i__10111_10159 = G__10180;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"})");

return cljs.compiler.emit.call(null,body);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,cljs.core.cst$kw$defrecord_STAR_,(function (p__10181){
var map__10182 = p__10181;
var map__10182__$1 = ((((!((map__10182 == null)))?((((map__10182.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10182.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10182):map__10182);
var t = cljs.core.get.call(null,map__10182__$1,cljs.core.cst$kw$t);
var fields = cljs.core.get.call(null,map__10182__$1,cljs.core.cst$kw$fields);
var pmasks = cljs.core.get.call(null,map__10182__$1,cljs.core.cst$kw$pmasks);
var body = cljs.core.get.call(null,map__10182__$1,cljs.core.cst$kw$body);
var protocols = cljs.core.get.call(null,map__10182__$1,cljs.core.cst$kw$protocols);
var fields__$1 = cljs.core.concat.call(null,cljs.core.map.call(null,cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$__meta,cljs.core.cst$sym$__extmap,cljs.core.cst$sym$__hash], null));
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__10184_10198 = cljs.core.seq.call(null,protocols);
var chunk__10185_10199 = null;
var count__10186_10200 = (0);
var i__10187_10201 = (0);
while(true){
if((i__10187_10201 < count__10186_10200)){
var protocol_10202 = cljs.core._nth.call(null,chunk__10185_10199,i__10187_10201);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_10202)].join('')),"}");

var G__10203 = seq__10184_10198;
var G__10204 = chunk__10185_10199;
var G__10205 = count__10186_10200;
var G__10206 = (i__10187_10201 + (1));
seq__10184_10198 = G__10203;
chunk__10185_10199 = G__10204;
count__10186_10200 = G__10205;
i__10187_10201 = G__10206;
continue;
} else {
var temp__4657__auto___10207 = cljs.core.seq.call(null,seq__10184_10198);
if(temp__4657__auto___10207){
var seq__10184_10208__$1 = temp__4657__auto___10207;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10184_10208__$1)){
var c__7021__auto___10209 = cljs.core.chunk_first.call(null,seq__10184_10208__$1);
var G__10210 = cljs.core.chunk_rest.call(null,seq__10184_10208__$1);
var G__10211 = c__7021__auto___10209;
var G__10212 = cljs.core.count.call(null,c__7021__auto___10209);
var G__10213 = (0);
seq__10184_10198 = G__10210;
chunk__10185_10199 = G__10211;
count__10186_10200 = G__10212;
i__10187_10201 = G__10213;
continue;
} else {
var protocol_10214 = cljs.core.first.call(null,seq__10184_10208__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_10214)].join('')),"}");

var G__10215 = cljs.core.next.call(null,seq__10184_10208__$1);
var G__10216 = null;
var G__10217 = (0);
var G__10218 = (0);
seq__10184_10198 = G__10215;
chunk__10185_10199 = G__10216;
count__10186_10200 = G__10217;
i__10187_10201 = G__10218;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__10188_10219 = cljs.core.seq.call(null,fields__$1);
var chunk__10189_10220 = null;
var count__10190_10221 = (0);
var i__10191_10222 = (0);
while(true){
if((i__10191_10222 < count__10190_10221)){
var fld_10223 = cljs.core._nth.call(null,chunk__10189_10220,i__10191_10222);
cljs.compiler.emitln.call(null,"this.",fld_10223," = ",fld_10223,";");

var G__10224 = seq__10188_10219;
var G__10225 = chunk__10189_10220;
var G__10226 = count__10190_10221;
var G__10227 = (i__10191_10222 + (1));
seq__10188_10219 = G__10224;
chunk__10189_10220 = G__10225;
count__10190_10221 = G__10226;
i__10191_10222 = G__10227;
continue;
} else {
var temp__4657__auto___10228 = cljs.core.seq.call(null,seq__10188_10219);
if(temp__4657__auto___10228){
var seq__10188_10229__$1 = temp__4657__auto___10228;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10188_10229__$1)){
var c__7021__auto___10230 = cljs.core.chunk_first.call(null,seq__10188_10229__$1);
var G__10231 = cljs.core.chunk_rest.call(null,seq__10188_10229__$1);
var G__10232 = c__7021__auto___10230;
var G__10233 = cljs.core.count.call(null,c__7021__auto___10230);
var G__10234 = (0);
seq__10188_10219 = G__10231;
chunk__10189_10220 = G__10232;
count__10190_10221 = G__10233;
i__10191_10222 = G__10234;
continue;
} else {
var fld_10235 = cljs.core.first.call(null,seq__10188_10229__$1);
cljs.compiler.emitln.call(null,"this.",fld_10235," = ",fld_10235,";");

var G__10236 = cljs.core.next.call(null,seq__10188_10229__$1);
var G__10237 = null;
var G__10238 = (0);
var G__10239 = (0);
seq__10188_10219 = G__10236;
chunk__10189_10220 = G__10237;
count__10190_10221 = G__10238;
i__10191_10222 = G__10239;
continue;
}
} else {
}
}
break;
}

var seq__10192_10240 = cljs.core.seq.call(null,pmasks);
var chunk__10193_10241 = null;
var count__10194_10242 = (0);
var i__10195_10243 = (0);
while(true){
if((i__10195_10243 < count__10194_10242)){
var vec__10196_10244 = cljs.core._nth.call(null,chunk__10193_10241,i__10195_10243);
var pno_10245 = cljs.core.nth.call(null,vec__10196_10244,(0),null);
var pmask_10246 = cljs.core.nth.call(null,vec__10196_10244,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_10245,"$ = ",pmask_10246,";");

var G__10247 = seq__10192_10240;
var G__10248 = chunk__10193_10241;
var G__10249 = count__10194_10242;
var G__10250 = (i__10195_10243 + (1));
seq__10192_10240 = G__10247;
chunk__10193_10241 = G__10248;
count__10194_10242 = G__10249;
i__10195_10243 = G__10250;
continue;
} else {
var temp__4657__auto___10251 = cljs.core.seq.call(null,seq__10192_10240);
if(temp__4657__auto___10251){
var seq__10192_10252__$1 = temp__4657__auto___10251;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10192_10252__$1)){
var c__7021__auto___10253 = cljs.core.chunk_first.call(null,seq__10192_10252__$1);
var G__10254 = cljs.core.chunk_rest.call(null,seq__10192_10252__$1);
var G__10255 = c__7021__auto___10253;
var G__10256 = cljs.core.count.call(null,c__7021__auto___10253);
var G__10257 = (0);
seq__10192_10240 = G__10254;
chunk__10193_10241 = G__10255;
count__10194_10242 = G__10256;
i__10195_10243 = G__10257;
continue;
} else {
var vec__10197_10258 = cljs.core.first.call(null,seq__10192_10252__$1);
var pno_10259 = cljs.core.nth.call(null,vec__10197_10258,(0),null);
var pmask_10260 = cljs.core.nth.call(null,vec__10197_10258,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_10259,"$ = ",pmask_10260,";");

var G__10261 = cljs.core.next.call(null,seq__10192_10252__$1);
var G__10262 = null;
var G__10263 = (0);
var G__10264 = (0);
seq__10192_10240 = G__10261;
chunk__10193_10241 = G__10262;
count__10194_10242 = G__10263;
i__10195_10243 = G__10264;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"})");

return cljs.compiler.emit.call(null,body);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,cljs.core.cst$kw$dot,(function (p__10265){
var map__10266 = p__10265;
var map__10266__$1 = ((((!((map__10266 == null)))?((((map__10266.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10266.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10266):map__10266);
var target = cljs.core.get.call(null,map__10266__$1,cljs.core.cst$kw$target);
var field = cljs.core.get.call(null,map__10266__$1,cljs.core.cst$kw$field);
var method = cljs.core.get.call(null,map__10266__$1,cljs.core.cst$kw$method);
var args = cljs.core.get.call(null,map__10266__$1,cljs.core.cst$kw$args);
var env = cljs.core.get.call(null,map__10266__$1,cljs.core.cst$kw$env);
var env__9225__auto__ = env;
if(cljs.core._EQ_.call(null,cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__9225__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep.call(null,args),")");
}

if(cljs.core._EQ_.call(null,cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__9225__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,cljs.core.cst$kw$js,(function (p__10268){
var map__10269 = p__10268;
var map__10269__$1 = ((((!((map__10269 == null)))?((((map__10269.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10269.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10269):map__10269);
var op = cljs.core.get.call(null,map__10269__$1,cljs.core.cst$kw$op);
var env = cljs.core.get.call(null,map__10269__$1,cljs.core.cst$kw$env);
var code = cljs.core.get.call(null,map__10269__$1,cljs.core.cst$kw$code);
var segs = cljs.core.get.call(null,map__10269__$1,cljs.core.cst$kw$segs);
var args = cljs.core.get.call(null,map__10269__$1,cljs.core.cst$kw$args);
if(cljs.core.truth_((function (){var and__6198__auto__ = code;
if(cljs.core.truth_(and__6198__auto__)){
return goog.string.startsWith(clojure.string.trim.call(null,code),"/*");
} else {
return and__6198__auto__;
}
})())){
return cljs.compiler.emits.call(null,code);
} else {
var env__9225__auto__ = env;
if(cljs.core._EQ_.call(null,cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__9225__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.call(null,code);
} else {
cljs.compiler.emits.call(null,cljs.core.interleave.call(null,cljs.core.concat.call(null,segs,cljs.core.repeat.call(null,null)),cljs.core.concat.call(null,args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.call(null,cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__9225__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.build_affecting_options = (function cljs$compiler$build_affecting_options(opts){
return cljs.core.select_keys.call(null,opts,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$static_DASH_fns,cljs.core.cst$kw$optimize_DASH_constants,cljs.core.cst$kw$elide_DASH_asserts,cljs.core.cst$kw$target], null));
});
cljs.compiler.emit_constants_table = (function cljs$compiler$emit_constants_table(table){
var seq__10279 = cljs.core.seq.call(null,table);
var chunk__10280 = null;
var count__10281 = (0);
var i__10282 = (0);
while(true){
if((i__10282 < count__10281)){
var vec__10283 = cljs.core._nth.call(null,chunk__10280,i__10282);
var sym = cljs.core.nth.call(null,vec__10283,(0),null);
var value = cljs.core.nth.call(null,vec__10283,(1),null);
var ns_10285 = cljs.core.namespace.call(null,sym);
var name_10286 = cljs.core.name.call(null,sym);
cljs.compiler.emits.call(null,"cljs.core.",value," = ");

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword.call(null,sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol.call(null,sym);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot emit constant for type "),cljs.core.str(cljs.core.type.call(null,sym))].join(''),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$error,cljs.core.cst$kw$invalid_DASH_constant_DASH_type], null));

}
}

cljs.compiler.emits.call(null,";\n");

var G__10287 = seq__10279;
var G__10288 = chunk__10280;
var G__10289 = count__10281;
var G__10290 = (i__10282 + (1));
seq__10279 = G__10287;
chunk__10280 = G__10288;
count__10281 = G__10289;
i__10282 = G__10290;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__10279);
if(temp__4657__auto__){
var seq__10279__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10279__$1)){
var c__7021__auto__ = cljs.core.chunk_first.call(null,seq__10279__$1);
var G__10291 = cljs.core.chunk_rest.call(null,seq__10279__$1);
var G__10292 = c__7021__auto__;
var G__10293 = cljs.core.count.call(null,c__7021__auto__);
var G__10294 = (0);
seq__10279 = G__10291;
chunk__10280 = G__10292;
count__10281 = G__10293;
i__10282 = G__10294;
continue;
} else {
var vec__10284 = cljs.core.first.call(null,seq__10279__$1);
var sym = cljs.core.nth.call(null,vec__10284,(0),null);
var value = cljs.core.nth.call(null,vec__10284,(1),null);
var ns_10295 = cljs.core.namespace.call(null,sym);
var name_10296 = cljs.core.name.call(null,sym);
cljs.compiler.emits.call(null,"cljs.core.",value," = ");

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword.call(null,sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol.call(null,sym);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot emit constant for type "),cljs.core.str(cljs.core.type.call(null,sym))].join(''),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$error,cljs.core.cst$kw$invalid_DASH_constant_DASH_type], null));

}
}

cljs.compiler.emits.call(null,";\n");

var G__10297 = cljs.core.next.call(null,seq__10279__$1);
var G__10298 = null;
var G__10299 = (0);
var G__10300 = (0);
seq__10279 = G__10297;
chunk__10280 = G__10298;
count__10281 = G__10299;
i__10282 = G__10300;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=compiler.js.map