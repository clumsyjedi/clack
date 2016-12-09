// Compiled by ClojureScript 1.9.229 {:optimize-constants true, :target :nodejs}
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
var map__10124 = s;
var map__10124__$1 = ((((!((map__10124 == null)))?((((map__10124.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10124.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10124):map__10124);
var name = cljs.core.get.call(null,map__10124__$1,cljs.core.cst$kw$name);
var info = cljs.core.get.call(null,map__10124__$1,cljs.core.cst$kw$info);
var d = (0);
var G__10127 = info;
var map__10128 = G__10127;
var map__10128__$1 = ((((!((map__10128 == null)))?((((map__10128.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10128.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10128):map__10128);
var shadow = cljs.core.get.call(null,map__10128__$1,cljs.core.cst$kw$shadow);
var d__$1 = d;
var G__10127__$1 = G__10127;
while(true){
var d__$2 = d__$1;
var map__10130 = G__10127__$1;
var map__10130__$1 = ((((!((map__10130 == null)))?((((map__10130.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10130.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10130):map__10130);
var shadow__$1 = cljs.core.get.call(null,map__10130__$1,cljs.core.cst$kw$shadow);
if(cljs.core.truth_(shadow__$1)){
var G__10132 = (d__$2 + (1));
var G__10133 = shadow__$1;
d__$1 = G__10132;
G__10127__$1 = G__10133;
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
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__10134){
var map__10139 = p__10134;
var map__10139__$1 = ((((!((map__10139 == null)))?((((map__10139.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10139.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10139):map__10139);
var name_var = map__10139__$1;
var name = cljs.core.get.call(null,map__10139__$1,cljs.core.cst$kw$name);
var info = cljs.core.get.call(null,map__10139__$1,cljs.core.cst$kw$info);
var name__$1 = clojure.string.replace.call(null,[cljs.core.str(name)].join(''),"..","_DOT__DOT_");
var map__10141 = info;
var map__10141__$1 = ((((!((map__10141 == null)))?((((map__10141.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10141.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10141):map__10141);
var ns = cljs.core.get.call(null,map__10141__$1,cljs.core.cst$kw$ns);
var fn_scope = cljs.core.get.call(null,map__10141__$1,cljs.core.cst$kw$fn_DASH_scope);
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
var args10143 = [];
var len__7484__auto___10146 = arguments.length;
var i__7485__auto___10147 = (0);
while(true){
if((i__7485__auto___10147 < len__7484__auto___10146)){
args10143.push((arguments[i__7485__auto___10147]));

var G__10148 = (i__7485__auto___10147 + (1));
i__7485__auto___10147 = G__10148;
continue;
} else {
}
break;
}

var G__10145 = args10143.length;
switch (G__10145) {
case 1:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10143.length)].join('')));

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
var G__10151 = cp;
switch (G__10151) {
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
var seq__10157_10161 = cljs.core.seq.call(null,s);
var chunk__10158_10162 = null;
var count__10159_10163 = (0);
var i__10160_10164 = (0);
while(true){
if((i__10160_10164 < count__10159_10163)){
var c_10165 = cljs.core._nth.call(null,chunk__10158_10162,i__10160_10164);
sb.append(cljs.compiler.escape_char.call(null,c_10165));

var G__10166 = seq__10157_10161;
var G__10167 = chunk__10158_10162;
var G__10168 = count__10159_10163;
var G__10169 = (i__10160_10164 + (1));
seq__10157_10161 = G__10166;
chunk__10158_10162 = G__10167;
count__10159_10163 = G__10168;
i__10160_10164 = G__10169;
continue;
} else {
var temp__4657__auto___10170 = cljs.core.seq.call(null,seq__10157_10161);
if(temp__4657__auto___10170){
var seq__10157_10171__$1 = temp__4657__auto___10170;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10157_10171__$1)){
var c__7220__auto___10172 = cljs.core.chunk_first.call(null,seq__10157_10171__$1);
var G__10173 = cljs.core.chunk_rest.call(null,seq__10157_10171__$1);
var G__10174 = c__7220__auto___10172;
var G__10175 = cljs.core.count.call(null,c__7220__auto___10172);
var G__10176 = (0);
seq__10157_10161 = G__10173;
chunk__10158_10162 = G__10174;
count__10159_10163 = G__10175;
i__10160_10164 = G__10176;
continue;
} else {
var c_10177 = cljs.core.first.call(null,seq__10157_10171__$1);
sb.append(cljs.compiler.escape_char.call(null,c_10177));

var G__10178 = cljs.core.next.call(null,seq__10157_10171__$1);
var G__10179 = null;
var G__10180 = (0);
var G__10181 = (0);
seq__10157_10161 = G__10178;
chunk__10158_10162 = G__10179;
count__10159_10163 = G__10180;
i__10160_10164 = G__10181;
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
cljs.compiler.emit_STAR_ = (function (){var method_table__7334__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__7335__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__7336__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__7337__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__7338__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.compiler","emit*"),cljs.core.cst$kw$op,cljs.core.cst$kw$default,hierarchy__7338__auto__,method_table__7334__auto__,prefer_table__7335__auto__,method_cache__7336__auto__,cached_hierarchy__7337__auto__));
})();
}
cljs.compiler.emit = (function cljs$compiler$emit(ast){
var val__8273__auto__ = cljs.env._STAR_compiler_STAR_;
if((val__8273__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = cljs.env.default_compiler_env.call(null);
} else {
}

try{if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__10187_10192 = ast;
var map__10187_10193__$1 = ((((!((map__10187_10192 == null)))?((((map__10187_10192.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10187_10192.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10187_10192):map__10187_10192);
var env_10194 = cljs.core.get.call(null,map__10187_10193__$1,cljs.core.cst$kw$env);
if(cljs.core.truth_(cljs.core.cst$kw$line.cljs$core$IFn$_invoke$arity$1(env_10194))){
var map__10189_10195 = env_10194;
var map__10189_10196__$1 = ((((!((map__10189_10195 == null)))?((((map__10189_10195.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10189_10195.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10189_10195):map__10189_10195);
var line_10197 = cljs.core.get.call(null,map__10189_10196__$1,cljs.core.cst$kw$line);
var column_10198 = cljs.core.get.call(null,map__10189_10196__$1,cljs.core.cst$kw$column);
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,((function (map__10189_10195,map__10189_10196__$1,line_10197,column_10198,map__10187_10192,map__10187_10193__$1,env_10194,val__8273__auto__){
return (function (m){
var minfo = (function (){var G__10191 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$gcol,cljs.core.cst$kw$gen_DASH_col.cljs$core$IFn$_invoke$arity$1(m),cljs.core.cst$kw$gline,cljs.core.cst$kw$gen_DASH_line.cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core._EQ_.call(null,cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(ast),cljs.core.cst$kw$var)){
return cljs.core.assoc.call(null,G__10191,cljs.core.cst$kw$name,[cljs.core.str(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$info.cljs$core$IFn$_invoke$arity$1(ast)))].join(''));
} else {
return G__10191;
}
})();
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$source_DASH_map,(line_10197 - (1))], null),cljs.core.fnil.call(null,((function (minfo,map__10189_10195,map__10189_10196__$1,line_10197,column_10198,map__10187_10192,map__10187_10193__$1,env_10194,val__8273__auto__){
return (function (line__$1){
return cljs.core.update_in.call(null,line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_10198)?(column_10198 - (1)):(0))], null),cljs.core.fnil.call(null,((function (minfo,map__10189_10195,map__10189_10196__$1,line_10197,column_10198,map__10187_10192,map__10187_10193__$1,env_10194,val__8273__auto__){
return (function (column__$1){
return cljs.core.conj.call(null,column__$1,minfo);
});})(minfo,map__10189_10195,map__10189_10196__$1,line_10197,column_10198,map__10187_10192,map__10187_10193__$1,env_10194,val__8273__auto__))
,cljs.core.PersistentVector.EMPTY));
});})(minfo,map__10189_10195,map__10189_10196__$1,line_10197,column_10198,map__10187_10192,map__10187_10193__$1,env_10194,val__8273__auto__))
,cljs.core.sorted_map.call(null)));
});})(map__10189_10195,map__10189_10196__$1,line_10197,column_10198,map__10187_10192,map__10187_10193__$1,env_10194,val__8273__auto__))
);
} else {
}
} else {
}

return cljs.compiler.emit_STAR_.call(null,ast);
}finally {if((val__8273__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = null;
} else {
}
}});
cljs.compiler.emits = (function cljs$compiler$emits(var_args){
var args__7491__auto__ = [];
var len__7484__auto___10205 = arguments.length;
var i__7485__auto___10206 = (0);
while(true){
if((i__7485__auto___10206 < len__7484__auto___10205)){
args__7491__auto__.push((arguments[i__7485__auto___10206]));

var G__10207 = (i__7485__auto___10206 + (1));
i__7485__auto___10206 = G__10207;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((0) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((0)),(0),null)):null);
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(argseq__7492__auto__);
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
var seq__10201_10208 = cljs.core.seq.call(null,xs);
var chunk__10202_10209 = null;
var count__10203_10210 = (0);
var i__10204_10211 = (0);
while(true){
if((i__10204_10211 < count__10203_10210)){
var x_10212 = cljs.core._nth.call(null,chunk__10202_10209,i__10204_10211);
if((x_10212 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_10212)){
cljs.compiler.emit.call(null,x_10212);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_10212)){
cljs.core.apply.call(null,cljs.compiler.emits,x_10212);
} else {
if(goog.isFunction(x_10212)){
x_10212.call(null);
} else {
var s_10213 = cljs.core.print_str.call(null,x_10212);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$gen_DASH_col], null),((function (seq__10201_10208,chunk__10202_10209,count__10203_10210,i__10204_10211,s_10213,x_10212){
return (function (p1__10199_SHARP_){
return (p1__10199_SHARP_ + cljs.core.count.call(null,s_10213));
});})(seq__10201_10208,chunk__10202_10209,count__10203_10210,i__10204_10211,s_10213,x_10212))
);
}

cljs.core.print.call(null,s_10213);

}
}
}
}

var G__10214 = seq__10201_10208;
var G__10215 = chunk__10202_10209;
var G__10216 = count__10203_10210;
var G__10217 = (i__10204_10211 + (1));
seq__10201_10208 = G__10214;
chunk__10202_10209 = G__10215;
count__10203_10210 = G__10216;
i__10204_10211 = G__10217;
continue;
} else {
var temp__4657__auto___10218 = cljs.core.seq.call(null,seq__10201_10208);
if(temp__4657__auto___10218){
var seq__10201_10219__$1 = temp__4657__auto___10218;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10201_10219__$1)){
var c__7220__auto___10220 = cljs.core.chunk_first.call(null,seq__10201_10219__$1);
var G__10221 = cljs.core.chunk_rest.call(null,seq__10201_10219__$1);
var G__10222 = c__7220__auto___10220;
var G__10223 = cljs.core.count.call(null,c__7220__auto___10220);
var G__10224 = (0);
seq__10201_10208 = G__10221;
chunk__10202_10209 = G__10222;
count__10203_10210 = G__10223;
i__10204_10211 = G__10224;
continue;
} else {
var x_10225 = cljs.core.first.call(null,seq__10201_10219__$1);
if((x_10225 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_10225)){
cljs.compiler.emit.call(null,x_10225);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_10225)){
cljs.core.apply.call(null,cljs.compiler.emits,x_10225);
} else {
if(goog.isFunction(x_10225)){
x_10225.call(null);
} else {
var s_10226 = cljs.core.print_str.call(null,x_10225);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$gen_DASH_col], null),((function (seq__10201_10208,chunk__10202_10209,count__10203_10210,i__10204_10211,s_10226,x_10225,seq__10201_10219__$1,temp__4657__auto___10218){
return (function (p1__10199_SHARP_){
return (p1__10199_SHARP_ + cljs.core.count.call(null,s_10226));
});})(seq__10201_10208,chunk__10202_10209,count__10203_10210,i__10204_10211,s_10226,x_10225,seq__10201_10219__$1,temp__4657__auto___10218))
);
}

cljs.core.print.call(null,s_10226);

}
}
}
}

var G__10227 = cljs.core.next.call(null,seq__10201_10219__$1);
var G__10228 = null;
var G__10229 = (0);
var G__10230 = (0);
seq__10201_10208 = G__10227;
chunk__10202_10209 = G__10228;
count__10203_10210 = G__10229;
i__10204_10211 = G__10230;
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

cljs.compiler.emits.cljs$lang$applyTo = (function (seq10200){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10200));
});

cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var args__7491__auto__ = [];
var len__7484__auto___10235 = arguments.length;
var i__7485__auto___10236 = (0);
while(true){
if((i__7485__auto___10236 < len__7484__auto___10235)){
args__7491__auto__.push((arguments[i__7485__auto___10236]));

var G__10237 = (i__7485__auto___10236 + (1));
i__7485__auto___10236 = G__10237;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((0) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((0)),(0),null)):null);
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(argseq__7492__auto__);
});

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
cljs.core.apply.call(null,cljs.compiler.emits,xs);

cljs.core.println.call(null);

if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,(function (p__10232){
var map__10233 = p__10232;
var map__10233__$1 = ((((!((map__10233 == null)))?((((map__10233.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10233.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10233):map__10233);
var m = map__10233__$1;
var gen_line = cljs.core.get.call(null,map__10233__$1,cljs.core.cst$kw$gen_DASH_line);
return cljs.core.assoc.call(null,m,cljs.core.cst$kw$gen_DASH_line,(gen_line + (1)),cljs.core.cst$kw$gen_DASH_col,(0));
}));
} else {
}

return null;
});

cljs.compiler.emitln.cljs$lang$maxFixedArity = (0);

cljs.compiler.emitln.cljs$lang$applyTo = (function (seq10231){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10231));
});

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__7395__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_10240_10242 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_10241_10243 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_10240_10242,_STAR_print_fn_STAR_10241_10243,sb__7395__auto__){
return (function (x__7396__auto__){
return sb__7395__auto__.append(x__7396__auto__);
});})(_STAR_print_newline_STAR_10240_10242,_STAR_print_fn_STAR_10241_10243,sb__7395__auto__))
;

try{cljs.compiler.emit.call(null,expr);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_10241_10243;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_10240_10242;
}
return [cljs.core.str(sb__7395__auto__)].join('');
});
if(typeof cljs.compiler.emit_constant !== 'undefined'){
} else {
cljs.compiler.emit_constant = (function (){var method_table__7334__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__7335__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__7336__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__7337__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__7338__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.compiler","emit-constant"),cljs.core.type,cljs.core.cst$kw$default,hierarchy__7338__auto__,method_table__7334__auto__,prefer_table__7335__auto__,method_cache__7336__auto__,cached_hierarchy__7337__auto__));
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
var vec__10244 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,[cljs.core.str(x)].join(''));
var _ = cljs.core.nth.call(null,vec__10244,(0),null);
var flags = cljs.core.nth.call(null,vec__10244,(1),null);
var pattern = cljs.core.nth.call(null,vec__10244,(2),null);
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,cljs.core.cst$kw$var,(function (p__10248){
var map__10249 = p__10248;
var map__10249__$1 = ((((!((map__10249 == null)))?((((map__10249.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10249.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10249):map__10249);
var arg = map__10249__$1;
var info = cljs.core.get.call(null,map__10249__$1,cljs.core.cst$kw$info);
var env = cljs.core.get.call(null,map__10249__$1,cljs.core.cst$kw$env);
var form = cljs.core.get.call(null,map__10249__$1,cljs.core.cst$kw$form);
var var_name = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(info);
var info__$1 = ((cljs.core._EQ_.call(null,cljs.core.namespace.call(null,var_name),"js"))?(function (){var js_module_name = cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$js_DASH_module_DASH_index,cljs.core.name.call(null,var_name)], null));
var or__6409__auto__ = js_module_name;
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
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
var env__10108__auto__ = env;
if(cljs.core._EQ_.call(null,cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__10108__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,(function (){var G__10251 = info__$1;
if(cljs.core.not_EQ_.call(null,form,cljs.core.cst$sym$js_SLASH__DASH_Infinity)){
return cljs.compiler.munge.call(null,G__10251);
} else {
return G__10251;
}
})());

if(cljs.core._EQ_.call(null,cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__10108__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,cljs.core.cst$kw$var_DASH_special,(function (p__10252){
var map__10253 = p__10252;
var map__10253__$1 = ((((!((map__10253 == null)))?((((map__10253.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10253.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10253):map__10253);
var arg = map__10253__$1;
var env = cljs.core.get.call(null,map__10253__$1,cljs.core.cst$kw$env);
var var$ = cljs.core.get.call(null,map__10253__$1,cljs.core.cst$kw$var);
var sym = cljs.core.get.call(null,map__10253__$1,cljs.core.cst$kw$sym);
var meta = cljs.core.get.call(null,map__10253__$1,cljs.core.cst$kw$meta);
if(cljs.analyzer.ast_QMARK_.call(null,sym)){
} else {
throw (new Error("Assert failed: (ana/ast? sym)"));
}

if(cljs.analyzer.ast_QMARK_.call(null,meta)){
} else {
throw (new Error("Assert failed: (ana/ast? meta)"));
}

var map__10255 = cljs.core.cst$kw$info.cljs$core$IFn$_invoke$arity$1(var$);
var map__10255__$1 = ((((!((map__10255 == null)))?((((map__10255.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10255.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10255):map__10255);
var name = cljs.core.get.call(null,map__10255__$1,cljs.core.cst$kw$name);
var env__10108__auto__ = env;
if(cljs.core._EQ_.call(null,cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__10108__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"new cljs.core.Var(function(){return ",cljs.compiler.munge.call(null,name),";},",sym,",",meta,")");

if(cljs.core._EQ_.call(null,cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__10108__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,cljs.core.cst$kw$meta,(function (p__10257){
var map__10258 = p__10257;
var map__10258__$1 = ((((!((map__10258 == null)))?((((map__10258.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10258.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10258):map__10258);
var expr = cljs.core.get.call(null,map__10258__$1,cljs.core.cst$kw$expr);
var meta = cljs.core.get.call(null,map__10258__$1,cljs.core.cst$kw$meta);
var env = cljs.core.get.call(null,map__10258__$1,cljs.core.cst$kw$env);
var env__10108__auto__ = env;
if(cljs.core._EQ_.call(null,cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__10108__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"cljs.core.with_meta(",expr,",",meta,")");

if(cljs.core._EQ_.call(null,cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__10108__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.array_map_threshold = (8);
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
return (cljs.core.every_QMARK_.call(null,(function (p1__10260_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(p1__10260_SHARP_),cljs.core.cst$kw$constant);
}),keys)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,keys)),cljs.core.count.call(null,keys)));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,cljs.core.cst$kw$map,(function (p__10261){
var map__10262 = p__10261;
var map__10262__$1 = ((((!((map__10262 == null)))?((((map__10262.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10262.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10262):map__10262);
var env = cljs.core.get.call(null,map__10262__$1,cljs.core.cst$kw$env);
var keys = cljs.core.get.call(null,map__10262__$1,cljs.core.cst$kw$keys);
var vals = cljs.core.get.call(null,map__10262__$1,cljs.core.cst$kw$vals);
var env__10108__auto__ = env;
if(cljs.core._EQ_.call(null,cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__10108__auto__))){
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

if(cljs.core._EQ_.call(null,cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__10108__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,cljs.core.cst$kw$list,(function (p__10264){
var map__10265 = p__10264;
var map__10265__$1 = ((((!((map__10265 == null)))?((((map__10265.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10265.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10265):map__10265);
var items = cljs.core.get.call(null,map__10265__$1,cljs.core.cst$kw$items);
var env = cljs.core.get.call(null,map__10265__$1,cljs.core.cst$kw$env);
var env__10108__auto__ = env;
if(cljs.core._EQ_.call(null,cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__10108__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.List.EMPTY");
} else {
cljs.compiler.emits.call(null,"cljs.core.list(",cljs.compiler.comma_sep.call(null,items),")");
}

if(cljs.core._EQ_.call(null,cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__10108__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,cljs.core.cst$kw$vector,(function (p__10267){
var map__10268 = p__10267;
var map__10268__$1 = ((((!((map__10268 == null)))?((((map__10268.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10268.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10268):map__10268);
var items = cljs.core.get.call(null,map__10268__$1,cljs.core.cst$kw$items);
var env = cljs.core.get.call(null,map__10268__$1,cljs.core.cst$kw$env);
var env__10108__auto__ = env;
if(cljs.core._EQ_.call(null,cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__10108__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.PersistentVector.EMPTY");
} else {
var cnt_10270 = cljs.core.count.call(null,items);
if((cnt_10270 < (32))){
cljs.compiler.emits.call(null,"new cljs.core.PersistentVector(null, ",cnt_10270,", 5, cljs.core.PersistentVector.EMPTY_NODE, [",cljs.compiler.comma_sep.call(null,items),"], null)");
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentVector.fromArray([",cljs.compiler.comma_sep.call(null,items),"], true)");
}
}

if(cljs.core._EQ_.call(null,cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__10108__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
return (cljs.core.every_QMARK_.call(null,(function (p1__10271_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(p1__10271_SHARP_),cljs.core.cst$kw$constant);
}),items)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,items)),cljs.core.count.call(null,items)));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,cljs.core.cst$kw$set,(function (p__10272){
var map__10273 = p__10272;
var map__10273__$1 = ((((!((map__10273 == null)))?((((map__10273.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10273.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10273):map__10273);
var items = cljs.core.get.call(null,map__10273__$1,cljs.core.cst$kw$items);
var env = cljs.core.get.call(null,map__10273__$1,cljs.core.cst$kw$env);
var env__10108__auto__ = env;
if(cljs.core._EQ_.call(null,cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__10108__auto__))){
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

if(cljs.core._EQ_.call(null,cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__10108__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,cljs.core.cst$kw$js_DASH_value,(function (p__10275){
var map__10276 = p__10275;
var map__10276__$1 = ((((!((map__10276 == null)))?((((map__10276.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10276.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10276):map__10276);
var items = cljs.core.get.call(null,map__10276__$1,cljs.core.cst$kw$items);
var js_type = cljs.core.get.call(null,map__10276__$1,cljs.core.cst$kw$js_DASH_type);
var env = cljs.core.get.call(null,map__10276__$1,cljs.core.cst$kw$env);
var env__10108__auto__ = env;
if(cljs.core._EQ_.call(null,cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__10108__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core._EQ_.call(null,js_type,cljs.core.cst$kw$object)){
cljs.compiler.emits.call(null,"({");

var temp__4657__auto___10294 = cljs.core.seq.call(null,items);
if(temp__4657__auto___10294){
var items_10295__$1 = temp__4657__auto___10294;
var vec__10278_10296 = items_10295__$1;
var seq__10279_10297 = cljs.core.seq.call(null,vec__10278_10296);
var first__10280_10298 = cljs.core.first.call(null,seq__10279_10297);
var seq__10279_10299__$1 = cljs.core.next.call(null,seq__10279_10297);
var vec__10281_10300 = first__10280_10298;
var k_10301 = cljs.core.nth.call(null,vec__10281_10300,(0),null);
var v_10302 = cljs.core.nth.call(null,vec__10281_10300,(1),null);
var r_10303 = seq__10279_10299__$1;
cljs.compiler.emits.call(null,"\"",cljs.core.name.call(null,k_10301),"\": ",v_10302);

var seq__10284_10304 = cljs.core.seq.call(null,r_10303);
var chunk__10285_10305 = null;
var count__10286_10306 = (0);
var i__10287_10307 = (0);
while(true){
if((i__10287_10307 < count__10286_10306)){
var vec__10288_10308 = cljs.core._nth.call(null,chunk__10285_10305,i__10287_10307);
var k_10309__$1 = cljs.core.nth.call(null,vec__10288_10308,(0),null);
var v_10310__$1 = cljs.core.nth.call(null,vec__10288_10308,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_10309__$1),"\": ",v_10310__$1);

var G__10311 = seq__10284_10304;
var G__10312 = chunk__10285_10305;
var G__10313 = count__10286_10306;
var G__10314 = (i__10287_10307 + (1));
seq__10284_10304 = G__10311;
chunk__10285_10305 = G__10312;
count__10286_10306 = G__10313;
i__10287_10307 = G__10314;
continue;
} else {
var temp__4657__auto___10315__$1 = cljs.core.seq.call(null,seq__10284_10304);
if(temp__4657__auto___10315__$1){
var seq__10284_10316__$1 = temp__4657__auto___10315__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10284_10316__$1)){
var c__7220__auto___10317 = cljs.core.chunk_first.call(null,seq__10284_10316__$1);
var G__10318 = cljs.core.chunk_rest.call(null,seq__10284_10316__$1);
var G__10319 = c__7220__auto___10317;
var G__10320 = cljs.core.count.call(null,c__7220__auto___10317);
var G__10321 = (0);
seq__10284_10304 = G__10318;
chunk__10285_10305 = G__10319;
count__10286_10306 = G__10320;
i__10287_10307 = G__10321;
continue;
} else {
var vec__10291_10322 = cljs.core.first.call(null,seq__10284_10316__$1);
var k_10323__$1 = cljs.core.nth.call(null,vec__10291_10322,(0),null);
var v_10324__$1 = cljs.core.nth.call(null,vec__10291_10322,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_10323__$1),"\": ",v_10324__$1);

var G__10325 = cljs.core.next.call(null,seq__10284_10316__$1);
var G__10326 = null;
var G__10327 = (0);
var G__10328 = (0);
seq__10284_10304 = G__10325;
chunk__10285_10305 = G__10326;
count__10286_10306 = G__10327;
i__10287_10307 = G__10328;
continue;
}
} else {
}
}
break;
}
} else {
}

cljs.compiler.emits.call(null,"})");
} else {
cljs.compiler.emits.call(null,"[",cljs.compiler.comma_sep.call(null,items),"]");
}

if(cljs.core._EQ_.call(null,cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__10108__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,cljs.core.cst$kw$constant,(function (p__10329){
var map__10330 = p__10329;
var map__10330__$1 = ((((!((map__10330 == null)))?((((map__10330.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10330.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10330):map__10330);
var form = cljs.core.get.call(null,map__10330__$1,cljs.core.cst$kw$form);
var env = cljs.core.get.call(null,map__10330__$1,cljs.core.cst$kw$env);
if(cljs.core._EQ_.call(null,cljs.core.cst$kw$statement,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__10108__auto__ = env;
if(cljs.core._EQ_.call(null,cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__10108__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_constant.call(null,form);

if(cljs.core._EQ_.call(null,cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__10108__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(p__10332){
var map__10335 = p__10332;
var map__10335__$1 = ((((!((map__10335 == null)))?((((map__10335.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10335.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10335):map__10335);
var op = cljs.core.get.call(null,map__10335__$1,cljs.core.cst$kw$op);
var form = cljs.core.get.call(null,map__10335__$1,cljs.core.cst$kw$form);
var and__6397__auto__ = cljs.core._EQ_.call(null,op,cljs.core.cst$kw$constant);
if(and__6397__auto__){
var and__6397__auto____$1 = form;
if(cljs.core.truth_(and__6397__auto____$1)){
return !(((typeof form === 'string') && (cljs.core._EQ_.call(null,form,""))) || ((typeof form === 'number') && ((form === (0)))));
} else {
return and__6397__auto____$1;
}
} else {
return and__6397__auto__;
}
});
cljs.compiler.falsey_constant_QMARK_ = (function cljs$compiler$falsey_constant_QMARK_(p__10337){
var map__10340 = p__10337;
var map__10340__$1 = ((((!((map__10340 == null)))?((((map__10340.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10340.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10340):map__10340);
var op = cljs.core.get.call(null,map__10340__$1,cljs.core.cst$kw$op);
var form = cljs.core.get.call(null,map__10340__$1,cljs.core.cst$kw$form);
return (cljs.core._EQ_.call(null,op,cljs.core.cst$kw$constant)) && ((form === false) || ((form == null)));
});
cljs.compiler.safe_test_QMARK_ = (function cljs$compiler$safe_test_QMARK_(env,e){
var tag = cljs.analyzer.infer_tag.call(null,env,e);
var or__6409__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$sym$seq,null,cljs.core.cst$sym$boolean,null], null), null).call(null,tag);
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return cljs.compiler.truthy_constant_QMARK_.call(null,e);
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,cljs.core.cst$kw$if,(function (p__10342){
var map__10343 = p__10342;
var map__10343__$1 = ((((!((map__10343 == null)))?((((map__10343.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10343.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10343):map__10343);
var test = cljs.core.get.call(null,map__10343__$1,cljs.core.cst$kw$test);
var then = cljs.core.get.call(null,map__10343__$1,cljs.core.cst$kw$then);
var else$ = cljs.core.get.call(null,map__10343__$1,cljs.core.cst$kw$else);
var env = cljs.core.get.call(null,map__10343__$1,cljs.core.cst$kw$env);
var unchecked = cljs.core.get.call(null,map__10343__$1,cljs.core.cst$kw$unchecked);
var context = cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env);
var checked = cljs.core.not.call(null,(function (){var or__6409__auto__ = unchecked;
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,cljs.core.cst$kw$case_STAR_,(function (p__10345){
var map__10346 = p__10345;
var map__10346__$1 = ((((!((map__10346 == null)))?((((map__10346.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10346.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10346):map__10346);
var v = cljs.core.get.call(null,map__10346__$1,cljs.core.cst$kw$v);
var tests = cljs.core.get.call(null,map__10346__$1,cljs.core.cst$kw$tests);
var thens = cljs.core.get.call(null,map__10346__$1,cljs.core.cst$kw$thens);
var default$ = cljs.core.get.call(null,map__10346__$1,cljs.core.cst$kw$default);
var env = cljs.core.get.call(null,map__10346__$1,cljs.core.cst$kw$env);
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

var seq__10348_10366 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),cljs.core.interleave.call(null,tests,thens)));
var chunk__10349_10367 = null;
var count__10350_10368 = (0);
var i__10351_10369 = (0);
while(true){
if((i__10351_10369 < count__10350_10368)){
var vec__10352_10370 = cljs.core._nth.call(null,chunk__10349_10367,i__10351_10369);
var ts_10371 = cljs.core.nth.call(null,vec__10352_10370,(0),null);
var then_10372 = cljs.core.nth.call(null,vec__10352_10370,(1),null);
var seq__10355_10373 = cljs.core.seq.call(null,ts_10371);
var chunk__10356_10374 = null;
var count__10357_10375 = (0);
var i__10358_10376 = (0);
while(true){
if((i__10358_10376 < count__10357_10375)){
var test_10377 = cljs.core._nth.call(null,chunk__10356_10374,i__10358_10376);
cljs.compiler.emitln.call(null,"case ",test_10377,":");

var G__10378 = seq__10355_10373;
var G__10379 = chunk__10356_10374;
var G__10380 = count__10357_10375;
var G__10381 = (i__10358_10376 + (1));
seq__10355_10373 = G__10378;
chunk__10356_10374 = G__10379;
count__10357_10375 = G__10380;
i__10358_10376 = G__10381;
continue;
} else {
var temp__4657__auto___10382 = cljs.core.seq.call(null,seq__10355_10373);
if(temp__4657__auto___10382){
var seq__10355_10383__$1 = temp__4657__auto___10382;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10355_10383__$1)){
var c__7220__auto___10384 = cljs.core.chunk_first.call(null,seq__10355_10383__$1);
var G__10385 = cljs.core.chunk_rest.call(null,seq__10355_10383__$1);
var G__10386 = c__7220__auto___10384;
var G__10387 = cljs.core.count.call(null,c__7220__auto___10384);
var G__10388 = (0);
seq__10355_10373 = G__10385;
chunk__10356_10374 = G__10386;
count__10357_10375 = G__10387;
i__10358_10376 = G__10388;
continue;
} else {
var test_10389 = cljs.core.first.call(null,seq__10355_10383__$1);
cljs.compiler.emitln.call(null,"case ",test_10389,":");

var G__10390 = cljs.core.next.call(null,seq__10355_10383__$1);
var G__10391 = null;
var G__10392 = (0);
var G__10393 = (0);
seq__10355_10373 = G__10390;
chunk__10356_10374 = G__10391;
count__10357_10375 = G__10392;
i__10358_10376 = G__10393;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_10372);
} else {
cljs.compiler.emitln.call(null,then_10372);
}

cljs.compiler.emitln.call(null,"break;");

var G__10394 = seq__10348_10366;
var G__10395 = chunk__10349_10367;
var G__10396 = count__10350_10368;
var G__10397 = (i__10351_10369 + (1));
seq__10348_10366 = G__10394;
chunk__10349_10367 = G__10395;
count__10350_10368 = G__10396;
i__10351_10369 = G__10397;
continue;
} else {
var temp__4657__auto___10398 = cljs.core.seq.call(null,seq__10348_10366);
if(temp__4657__auto___10398){
var seq__10348_10399__$1 = temp__4657__auto___10398;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10348_10399__$1)){
var c__7220__auto___10400 = cljs.core.chunk_first.call(null,seq__10348_10399__$1);
var G__10401 = cljs.core.chunk_rest.call(null,seq__10348_10399__$1);
var G__10402 = c__7220__auto___10400;
var G__10403 = cljs.core.count.call(null,c__7220__auto___10400);
var G__10404 = (0);
seq__10348_10366 = G__10401;
chunk__10349_10367 = G__10402;
count__10350_10368 = G__10403;
i__10351_10369 = G__10404;
continue;
} else {
var vec__10359_10405 = cljs.core.first.call(null,seq__10348_10399__$1);
var ts_10406 = cljs.core.nth.call(null,vec__10359_10405,(0),null);
var then_10407 = cljs.core.nth.call(null,vec__10359_10405,(1),null);
var seq__10362_10408 = cljs.core.seq.call(null,ts_10406);
var chunk__10363_10409 = null;
var count__10364_10410 = (0);
var i__10365_10411 = (0);
while(true){
if((i__10365_10411 < count__10364_10410)){
var test_10412 = cljs.core._nth.call(null,chunk__10363_10409,i__10365_10411);
cljs.compiler.emitln.call(null,"case ",test_10412,":");

var G__10413 = seq__10362_10408;
var G__10414 = chunk__10363_10409;
var G__10415 = count__10364_10410;
var G__10416 = (i__10365_10411 + (1));
seq__10362_10408 = G__10413;
chunk__10363_10409 = G__10414;
count__10364_10410 = G__10415;
i__10365_10411 = G__10416;
continue;
} else {
var temp__4657__auto___10417__$1 = cljs.core.seq.call(null,seq__10362_10408);
if(temp__4657__auto___10417__$1){
var seq__10362_10418__$1 = temp__4657__auto___10417__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10362_10418__$1)){
var c__7220__auto___10419 = cljs.core.chunk_first.call(null,seq__10362_10418__$1);
var G__10420 = cljs.core.chunk_rest.call(null,seq__10362_10418__$1);
var G__10421 = c__7220__auto___10419;
var G__10422 = cljs.core.count.call(null,c__7220__auto___10419);
var G__10423 = (0);
seq__10362_10408 = G__10420;
chunk__10363_10409 = G__10421;
count__10364_10410 = G__10422;
i__10365_10411 = G__10423;
continue;
} else {
var test_10424 = cljs.core.first.call(null,seq__10362_10418__$1);
cljs.compiler.emitln.call(null,"case ",test_10424,":");

var G__10425 = cljs.core.next.call(null,seq__10362_10418__$1);
var G__10426 = null;
var G__10427 = (0);
var G__10428 = (0);
seq__10362_10408 = G__10425;
chunk__10363_10409 = G__10426;
count__10364_10410 = G__10427;
i__10365_10411 = G__10428;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_10407);
} else {
cljs.compiler.emitln.call(null,then_10407);
}

cljs.compiler.emitln.call(null,"break;");

var G__10429 = cljs.core.next.call(null,seq__10348_10399__$1);
var G__10430 = null;
var G__10431 = (0);
var G__10432 = (0);
seq__10348_10366 = G__10429;
chunk__10349_10367 = G__10430;
count__10350_10368 = G__10431;
i__10351_10369 = G__10432;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,cljs.core.cst$kw$throw,(function (p__10433){
var map__10434 = p__10433;
var map__10434__$1 = ((((!((map__10434 == null)))?((((map__10434.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10434.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10434):map__10434);
var throw$ = cljs.core.get.call(null,map__10434__$1,cljs.core.cst$kw$throw);
var env = cljs.core.get.call(null,map__10434__$1,cljs.core.cst$kw$env);
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
var vec__10441 = ((!(((-1) === idx)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,t,(0),idx),cljs.core.subs.call(null,t,(idx + (1)),cljs.core.count.call(null,t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.call(null,vec__10441,(0),null);
var rstr = cljs.core.nth.call(null,vec__10441,(1),null);
var ret_t = (cljs.core.truth_(rstr)?cljs$compiler$resolve_type.call(null,env,rstr):null);
var axstr = cljs.core.subs.call(null,fstr,(9),(cljs.core.count.call(null,fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_.call(null,axstr))?null:cljs.core.map.call(null,cljs.core.comp.call(null,((function (idx,vec__10441,fstr,rstr,ret_t,axstr){
return (function (p1__10436_SHARP_){
return cljs$compiler$resolve_type.call(null,env,p1__10436_SHARP_);
});})(idx,vec__10441,fstr,rstr,ret_t,axstr))
,clojure.string.trim),clojure.string.split.call(null,axstr,/,/)));
var G__10444 = [cljs.core.str("function("),cljs.core.str(clojure.string.join.call(null,",",args_ts)),cljs.core.str(")")].join('');
if(cljs.core.truth_(ret_t)){
return [cljs.core.str(G__10444),cljs.core.str(":"),cljs.core.str(ret_t)].join('');
} else {
return G__10444;
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
return (function (p1__10445_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__10445_SHARP_);
});})(ts__$1,xs))
,xs))),cljs.core.str("}")].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find.call(null,/@param/,line))){
var vec__10452 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__10453 = cljs.core.seq.call(null,vec__10452);
var first__10454 = cljs.core.first.call(null,seq__10453);
var seq__10453__$1 = cljs.core.next.call(null,seq__10453);
var p = first__10454;
var first__10454__$1 = cljs.core.first.call(null,seq__10453__$1);
var seq__10453__$2 = cljs.core.next.call(null,seq__10453__$1);
var ts = first__10454__$1;
var first__10454__$2 = cljs.core.first.call(null,seq__10453__$2);
var seq__10453__$3 = cljs.core.next.call(null,seq__10453__$2);
var n = first__10454__$2;
var xs = seq__10453__$3;
if(cljs.core.truth_((function (){var and__6397__auto__ = cljs.core._EQ_.call(null,"@param",p);
if(and__6397__auto__){
var and__6397__auto____$1 = ts;
if(cljs.core.truth_(and__6397__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__6397__auto____$1;
}
} else {
return and__6397__auto__;
}
})())){
return clojure.string.join.call(null," ",cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types.call(null,env,ts),cljs.compiler.munge.call(null,n)], null),xs));
} else {
return line;
}
} else {
if(cljs.core.truth_(cljs.core.re_find.call(null,/@return/,line))){
var vec__10455 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__10456 = cljs.core.seq.call(null,vec__10455);
var first__10457 = cljs.core.first.call(null,seq__10456);
var seq__10456__$1 = cljs.core.next.call(null,seq__10456);
var p = first__10457;
var first__10457__$1 = cljs.core.first.call(null,seq__10456__$1);
var seq__10456__$2 = cljs.core.next.call(null,seq__10456__$1);
var ts = first__10457__$1;
var xs = seq__10456__$2;
if(cljs.core.truth_((function (){var and__6397__auto__ = cljs.core._EQ_.call(null,"@return",p);
if(and__6397__auto__){
var and__6397__auto____$1 = ts;
if(cljs.core.truth_(and__6397__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__6397__auto____$1;
}
} else {
return and__6397__auto__;
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
var args10459 = [];
var len__7484__auto___10494 = arguments.length;
var i__7485__auto___10495 = (0);
while(true){
if((i__7485__auto___10495 < len__7484__auto___10494)){
args10459.push((arguments[i__7485__auto___10495]));

var G__10496 = (i__7485__auto___10495 + (1));
i__7485__auto___10495 = G__10496;
continue;
} else {
}
break;
}

var G__10461 = args10459.length;
switch (G__10461) {
case 2:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10459.length)].join('')));

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
var vec__10483 = cljs.core.map.call(null,((function (docs,docs__$1,docs__$2){
return (function (p1__10458_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))){
return cljs.compiler.munge_param_return.call(null,env,p1__10458_SHARP_);
} else {
return p1__10458_SHARP_;
}
});})(docs,docs__$1,docs__$2))
,clojure.string.split_lines.call(null,e));
var seq__10484 = cljs.core.seq.call(null,vec__10483);
var first__10485 = cljs.core.first.call(null,seq__10484);
var seq__10484__$1 = cljs.core.next.call(null,seq__10484);
var x = first__10485;
var ys = seq__10484__$1;
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,x,"*/","* /"));

var seq__10486 = cljs.core.seq.call(null,ys);
var chunk__10487 = null;
var count__10488 = (0);
var i__10489 = (0);
while(true){
if((i__10489 < count__10488)){
var next_line = cljs.core._nth.call(null,chunk__10487,i__10489);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));

var G__10498 = seq__10486;
var G__10499 = chunk__10487;
var G__10500 = count__10488;
var G__10501 = (i__10489 + (1));
seq__10486 = G__10498;
chunk__10487 = G__10499;
count__10488 = G__10500;
i__10489 = G__10501;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__10486);
if(temp__4657__auto__){
var seq__10486__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10486__$1)){
var c__7220__auto__ = cljs.core.chunk_first.call(null,seq__10486__$1);
var G__10502 = cljs.core.chunk_rest.call(null,seq__10486__$1);
var G__10503 = c__7220__auto__;
var G__10504 = cljs.core.count.call(null,c__7220__auto__);
var G__10505 = (0);
seq__10486 = G__10502;
chunk__10487 = G__10503;
count__10488 = G__10504;
i__10489 = G__10505;
continue;
} else {
var next_line = cljs.core.first.call(null,seq__10486__$1);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));

var G__10506 = cljs.core.next.call(null,seq__10486__$1);
var G__10507 = null;
var G__10508 = (0);
var G__10509 = (0);
seq__10486 = G__10506;
chunk__10487 = G__10507;
count__10488 = G__10508;
i__10489 = G__10509;
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

var seq__10490_10510 = cljs.core.seq.call(null,docs__$2);
var chunk__10491_10511 = null;
var count__10492_10512 = (0);
var i__10493_10513 = (0);
while(true){
if((i__10493_10513 < count__10492_10512)){
var e_10514 = cljs.core._nth.call(null,chunk__10491_10511,i__10493_10513);
if(cljs.core.truth_(e_10514)){
print_comment_lines.call(null,e_10514);
} else {
}

var G__10515 = seq__10490_10510;
var G__10516 = chunk__10491_10511;
var G__10517 = count__10492_10512;
var G__10518 = (i__10493_10513 + (1));
seq__10490_10510 = G__10515;
chunk__10491_10511 = G__10516;
count__10492_10512 = G__10517;
i__10493_10513 = G__10518;
continue;
} else {
var temp__4657__auto___10519 = cljs.core.seq.call(null,seq__10490_10510);
if(temp__4657__auto___10519){
var seq__10490_10520__$1 = temp__4657__auto___10519;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10490_10520__$1)){
var c__7220__auto___10521 = cljs.core.chunk_first.call(null,seq__10490_10520__$1);
var G__10522 = cljs.core.chunk_rest.call(null,seq__10490_10520__$1);
var G__10523 = c__7220__auto___10521;
var G__10524 = cljs.core.count.call(null,c__7220__auto___10521);
var G__10525 = (0);
seq__10490_10510 = G__10522;
chunk__10491_10511 = G__10523;
count__10492_10512 = G__10524;
i__10493_10513 = G__10525;
continue;
} else {
var e_10526 = cljs.core.first.call(null,seq__10490_10520__$1);
if(cljs.core.truth_(e_10526)){
print_comment_lines.call(null,e_10526);
} else {
}

var G__10527 = cljs.core.next.call(null,seq__10490_10520__$1);
var G__10528 = null;
var G__10529 = (0);
var G__10530 = (0);
seq__10490_10510 = G__10527;
chunk__10491_10511 = G__10528;
count__10492_10512 = G__10529;
i__10493_10513 = G__10530;
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
var and__6397__auto__ = cljs.core.some.call(null,((function (opts){
return (function (p1__10532_SHARP_){
return goog.string.startsWith(p1__10532_SHARP_,"@define");
});})(opts))
,jsdoc);
if(cljs.core.truth_(and__6397__auto__)){
var and__6397__auto____$1 = opts;
if(cljs.core.truth_(and__6397__auto____$1)){
var and__6397__auto____$2 = cljs.core._EQ_.call(null,cljs.core.cst$kw$optimizations.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.cst$kw$none);
if(and__6397__auto____$2){
var define = cljs.core.get_in.call(null,opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$closure_DASH_defines,[cljs.core.str(mname)].join('')], null));
if(cljs.core.truth_(cljs.compiler.valid_define_value_QMARK_.call(null,define))){
return cljs.core.pr_str.call(null,define);
} else {
return null;
}
} else {
return and__6397__auto____$2;
}
} else {
return and__6397__auto____$1;
}
} else {
return and__6397__auto__;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,cljs.core.cst$kw$def,(function (p__10533){
var map__10534 = p__10533;
var map__10534__$1 = ((((!((map__10534 == null)))?((((map__10534.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10534.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10534):map__10534);
var name = cljs.core.get.call(null,map__10534__$1,cljs.core.cst$kw$name);
var var$ = cljs.core.get.call(null,map__10534__$1,cljs.core.cst$kw$var);
var init = cljs.core.get.call(null,map__10534__$1,cljs.core.cst$kw$init);
var env = cljs.core.get.call(null,map__10534__$1,cljs.core.cst$kw$env);
var doc = cljs.core.get.call(null,map__10534__$1,cljs.core.cst$kw$doc);
var jsdoc = cljs.core.get.call(null,map__10534__$1,cljs.core.cst$kw$jsdoc);
var export$ = cljs.core.get.call(null,map__10534__$1,cljs.core.cst$kw$export);
var test = cljs.core.get.call(null,map__10534__$1,cljs.core.cst$kw$test);
var var_ast = cljs.core.get.call(null,map__10534__$1,cljs.core.cst$kw$var_DASH_ast);
if(cljs.core.truth_((function (){var or__6409__auto__ = init;
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
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

if(cljs.core.truth_((function (){var and__6397__auto__ = cljs.analyzer._STAR_load_tests_STAR_;
if(cljs.core.truth_(and__6397__auto__)){
return test;
} else {
return and__6397__auto__;
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
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__10536){
var map__10557 = p__10536;
var map__10557__$1 = ((((!((map__10557 == null)))?((((map__10557.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10557.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10557):map__10557);
var name = cljs.core.get.call(null,map__10557__$1,cljs.core.cst$kw$name);
var params = cljs.core.get.call(null,map__10557__$1,cljs.core.cst$kw$params);
var env = cljs.core.get.call(null,map__10557__$1,cljs.core.cst$kw$env);
var arglist = cljs.core.gensym.call(null,"arglist__");
var delegate_name = [cljs.core.str(cljs.compiler.munge.call(null,name)),cljs.core.str("__delegate")].join('');
cljs.compiler.emitln.call(null,"(function (",arglist,"){");

var seq__10559_10577 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.drop_last.call(null,(2),params)));
var chunk__10560_10578 = null;
var count__10561_10579 = (0);
var i__10562_10580 = (0);
while(true){
if((i__10562_10580 < count__10561_10579)){
var vec__10563_10581 = cljs.core._nth.call(null,chunk__10560_10578,i__10562_10580);
var i_10582 = cljs.core.nth.call(null,vec__10563_10581,(0),null);
var param_10583 = cljs.core.nth.call(null,vec__10563_10581,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_10583);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");

var G__10584 = seq__10559_10577;
var G__10585 = chunk__10560_10578;
var G__10586 = count__10561_10579;
var G__10587 = (i__10562_10580 + (1));
seq__10559_10577 = G__10584;
chunk__10560_10578 = G__10585;
count__10561_10579 = G__10586;
i__10562_10580 = G__10587;
continue;
} else {
var temp__4657__auto___10588 = cljs.core.seq.call(null,seq__10559_10577);
if(temp__4657__auto___10588){
var seq__10559_10589__$1 = temp__4657__auto___10588;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10559_10589__$1)){
var c__7220__auto___10590 = cljs.core.chunk_first.call(null,seq__10559_10589__$1);
var G__10591 = cljs.core.chunk_rest.call(null,seq__10559_10589__$1);
var G__10592 = c__7220__auto___10590;
var G__10593 = cljs.core.count.call(null,c__7220__auto___10590);
var G__10594 = (0);
seq__10559_10577 = G__10591;
chunk__10560_10578 = G__10592;
count__10561_10579 = G__10593;
i__10562_10580 = G__10594;
continue;
} else {
var vec__10566_10595 = cljs.core.first.call(null,seq__10559_10589__$1);
var i_10596 = cljs.core.nth.call(null,vec__10566_10595,(0),null);
var param_10597 = cljs.core.nth.call(null,vec__10566_10595,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_10597);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");

var G__10598 = cljs.core.next.call(null,seq__10559_10589__$1);
var G__10599 = null;
var G__10600 = (0);
var G__10601 = (0);
seq__10559_10577 = G__10598;
chunk__10560_10578 = G__10599;
count__10561_10579 = G__10600;
i__10562_10580 = G__10601;
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

var seq__10569_10602 = cljs.core.seq.call(null,params);
var chunk__10570_10603 = null;
var count__10571_10604 = (0);
var i__10572_10605 = (0);
while(true){
if((i__10572_10605 < count__10571_10604)){
var param_10606 = cljs.core._nth.call(null,chunk__10570_10603,i__10572_10605);
cljs.compiler.emit.call(null,param_10606);

if(cljs.core._EQ_.call(null,param_10606,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__10607 = seq__10569_10602;
var G__10608 = chunk__10570_10603;
var G__10609 = count__10571_10604;
var G__10610 = (i__10572_10605 + (1));
seq__10569_10602 = G__10607;
chunk__10570_10603 = G__10608;
count__10571_10604 = G__10609;
i__10572_10605 = G__10610;
continue;
} else {
var temp__4657__auto___10611 = cljs.core.seq.call(null,seq__10569_10602);
if(temp__4657__auto___10611){
var seq__10569_10612__$1 = temp__4657__auto___10611;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10569_10612__$1)){
var c__7220__auto___10613 = cljs.core.chunk_first.call(null,seq__10569_10612__$1);
var G__10614 = cljs.core.chunk_rest.call(null,seq__10569_10612__$1);
var G__10615 = c__7220__auto___10613;
var G__10616 = cljs.core.count.call(null,c__7220__auto___10613);
var G__10617 = (0);
seq__10569_10602 = G__10614;
chunk__10570_10603 = G__10615;
count__10571_10604 = G__10616;
i__10572_10605 = G__10617;
continue;
} else {
var param_10618 = cljs.core.first.call(null,seq__10569_10612__$1);
cljs.compiler.emit.call(null,param_10618);

if(cljs.core._EQ_.call(null,param_10618,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__10619 = cljs.core.next.call(null,seq__10569_10612__$1);
var G__10620 = null;
var G__10621 = (0);
var G__10622 = (0);
seq__10569_10602 = G__10619;
chunk__10570_10603 = G__10620;
count__10571_10604 = G__10621;
i__10572_10605 = G__10622;
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

var seq__10573_10623 = cljs.core.seq.call(null,params);
var chunk__10574_10624 = null;
var count__10575_10625 = (0);
var i__10576_10626 = (0);
while(true){
if((i__10576_10626 < count__10575_10625)){
var param_10627 = cljs.core._nth.call(null,chunk__10574_10624,i__10576_10626);
cljs.compiler.emit.call(null,param_10627);

if(cljs.core._EQ_.call(null,param_10627,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__10628 = seq__10573_10623;
var G__10629 = chunk__10574_10624;
var G__10630 = count__10575_10625;
var G__10631 = (i__10576_10626 + (1));
seq__10573_10623 = G__10628;
chunk__10574_10624 = G__10629;
count__10575_10625 = G__10630;
i__10576_10626 = G__10631;
continue;
} else {
var temp__4657__auto___10632 = cljs.core.seq.call(null,seq__10573_10623);
if(temp__4657__auto___10632){
var seq__10573_10633__$1 = temp__4657__auto___10632;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10573_10633__$1)){
var c__7220__auto___10634 = cljs.core.chunk_first.call(null,seq__10573_10633__$1);
var G__10635 = cljs.core.chunk_rest.call(null,seq__10573_10633__$1);
var G__10636 = c__7220__auto___10634;
var G__10637 = cljs.core.count.call(null,c__7220__auto___10634);
var G__10638 = (0);
seq__10573_10623 = G__10635;
chunk__10574_10624 = G__10636;
count__10575_10625 = G__10637;
i__10576_10626 = G__10638;
continue;
} else {
var param_10639 = cljs.core.first.call(null,seq__10573_10633__$1);
cljs.compiler.emit.call(null,param_10639);

if(cljs.core._EQ_.call(null,param_10639,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__10640 = cljs.core.next.call(null,seq__10573_10633__$1);
var G__10641 = null;
var G__10642 = (0);
var G__10643 = (0);
seq__10573_10623 = G__10640;
chunk__10574_10624 = G__10641;
count__10575_10625 = G__10642;
i__10576_10626 = G__10643;
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
var seq__10648 = cljs.core.seq.call(null,params);
var chunk__10649 = null;
var count__10650 = (0);
var i__10651 = (0);
while(true){
if((i__10651 < count__10650)){
var param = cljs.core._nth.call(null,chunk__10649,i__10651);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__10652 = seq__10648;
var G__10653 = chunk__10649;
var G__10654 = count__10650;
var G__10655 = (i__10651 + (1));
seq__10648 = G__10652;
chunk__10649 = G__10653;
count__10650 = G__10654;
i__10651 = G__10655;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__10648);
if(temp__4657__auto__){
var seq__10648__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10648__$1)){
var c__7220__auto__ = cljs.core.chunk_first.call(null,seq__10648__$1);
var G__10656 = cljs.core.chunk_rest.call(null,seq__10648__$1);
var G__10657 = c__7220__auto__;
var G__10658 = cljs.core.count.call(null,c__7220__auto__);
var G__10659 = (0);
seq__10648 = G__10656;
chunk__10649 = G__10657;
count__10650 = G__10658;
i__10651 = G__10659;
continue;
} else {
var param = cljs.core.first.call(null,seq__10648__$1);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__10660 = cljs.core.next.call(null,seq__10648__$1);
var G__10661 = null;
var G__10662 = (0);
var G__10663 = (0);
seq__10648 = G__10660;
chunk__10649 = G__10661;
count__10650 = G__10662;
i__10651 = G__10663;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__10664){
var map__10667 = p__10664;
var map__10667__$1 = ((((!((map__10667 == null)))?((((map__10667.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10667.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10667):map__10667);
var type = cljs.core.get.call(null,map__10667__$1,cljs.core.cst$kw$type);
var name = cljs.core.get.call(null,map__10667__$1,cljs.core.cst$kw$name);
var variadic = cljs.core.get.call(null,map__10667__$1,cljs.core.cst$kw$variadic);
var params = cljs.core.get.call(null,map__10667__$1,cljs.core.cst$kw$params);
var expr = cljs.core.get.call(null,map__10667__$1,cljs.core.cst$kw$expr);
var env = cljs.core.get.call(null,map__10667__$1,cljs.core.cst$kw$env);
var recurs = cljs.core.get.call(null,map__10667__$1,cljs.core.cst$kw$recurs);
var max_fixed_arity = cljs.core.get.call(null,map__10667__$1,cljs.core.cst$kw$max_DASH_fixed_DASH_arity);
var env__10108__auto__ = env;
if(cljs.core._EQ_.call(null,cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__10108__auto__))){
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

if(cljs.core._EQ_.call(null,cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__10108__auto__))){
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
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__10669){
var map__10680 = p__10669;
var map__10680__$1 = ((((!((map__10680 == null)))?((((map__10680.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10680.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10680):map__10680);
var f = map__10680__$1;
var type = cljs.core.get.call(null,map__10680__$1,cljs.core.cst$kw$type);
var name = cljs.core.get.call(null,map__10680__$1,cljs.core.cst$kw$name);
var variadic = cljs.core.get.call(null,map__10680__$1,cljs.core.cst$kw$variadic);
var params = cljs.core.get.call(null,map__10680__$1,cljs.core.cst$kw$params);
var expr = cljs.core.get.call(null,map__10680__$1,cljs.core.cst$kw$expr);
var env = cljs.core.get.call(null,map__10680__$1,cljs.core.cst$kw$env);
var recurs = cljs.core.get.call(null,map__10680__$1,cljs.core.cst$kw$recurs);
var max_fixed_arity = cljs.core.get.call(null,map__10680__$1,cljs.core.cst$kw$max_DASH_fixed_DASH_arity);
var env__10108__auto__ = env;
if(cljs.core._EQ_.call(null,cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__10108__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var name_10690__$1 = (function (){var or__6409__auto__ = name;
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_10691 = cljs.compiler.munge.call(null,name_10690__$1);
var delegate_name_10692 = [cljs.core.str(mname_10691),cljs.core.str("__delegate")].join('');
cljs.compiler.emitln.call(null,"(function() { ");

cljs.compiler.emits.call(null,"var ",delegate_name_10692," = function (");

var seq__10682_10693 = cljs.core.seq.call(null,params);
var chunk__10683_10694 = null;
var count__10684_10695 = (0);
var i__10685_10696 = (0);
while(true){
if((i__10685_10696 < count__10684_10695)){
var param_10697 = cljs.core._nth.call(null,chunk__10683_10694,i__10685_10696);
cljs.compiler.emit.call(null,param_10697);

if(cljs.core._EQ_.call(null,param_10697,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__10698 = seq__10682_10693;
var G__10699 = chunk__10683_10694;
var G__10700 = count__10684_10695;
var G__10701 = (i__10685_10696 + (1));
seq__10682_10693 = G__10698;
chunk__10683_10694 = G__10699;
count__10684_10695 = G__10700;
i__10685_10696 = G__10701;
continue;
} else {
var temp__4657__auto___10702 = cljs.core.seq.call(null,seq__10682_10693);
if(temp__4657__auto___10702){
var seq__10682_10703__$1 = temp__4657__auto___10702;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10682_10703__$1)){
var c__7220__auto___10704 = cljs.core.chunk_first.call(null,seq__10682_10703__$1);
var G__10705 = cljs.core.chunk_rest.call(null,seq__10682_10703__$1);
var G__10706 = c__7220__auto___10704;
var G__10707 = cljs.core.count.call(null,c__7220__auto___10704);
var G__10708 = (0);
seq__10682_10693 = G__10705;
chunk__10683_10694 = G__10706;
count__10684_10695 = G__10707;
i__10685_10696 = G__10708;
continue;
} else {
var param_10709 = cljs.core.first.call(null,seq__10682_10703__$1);
cljs.compiler.emit.call(null,param_10709);

if(cljs.core._EQ_.call(null,param_10709,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__10710 = cljs.core.next.call(null,seq__10682_10703__$1);
var G__10711 = null;
var G__10712 = (0);
var G__10713 = (0);
seq__10682_10693 = G__10710;
chunk__10683_10694 = G__10711;
count__10684_10695 = G__10712;
i__10685_10696 = G__10713;
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

cljs.compiler.emitln.call(null,"var ",mname_10691," = function (",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$var_args], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",(cljs.core.count.call(null,params) - (1)),") {");

var a_10714 = cljs.compiler.emit_arguments_to_array.call(null,(cljs.core.count.call(null,params) - (1)));
cljs.compiler.emitln.call(null,"  ",cljs.core.last.call(null,params)," = new cljs.core.IndexedSeq(",a_10714,",0);");

cljs.compiler.emitln.call(null,"} ");
} else {
}

cljs.compiler.emits.call(null,"return ",delegate_name_10692,".call(this,");

var seq__10686_10715 = cljs.core.seq.call(null,params);
var chunk__10687_10716 = null;
var count__10688_10717 = (0);
var i__10689_10718 = (0);
while(true){
if((i__10689_10718 < count__10688_10717)){
var param_10719 = cljs.core._nth.call(null,chunk__10687_10716,i__10689_10718);
cljs.compiler.emit.call(null,param_10719);

if(cljs.core._EQ_.call(null,param_10719,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__10720 = seq__10686_10715;
var G__10721 = chunk__10687_10716;
var G__10722 = count__10688_10717;
var G__10723 = (i__10689_10718 + (1));
seq__10686_10715 = G__10720;
chunk__10687_10716 = G__10721;
count__10688_10717 = G__10722;
i__10689_10718 = G__10723;
continue;
} else {
var temp__4657__auto___10724 = cljs.core.seq.call(null,seq__10686_10715);
if(temp__4657__auto___10724){
var seq__10686_10725__$1 = temp__4657__auto___10724;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10686_10725__$1)){
var c__7220__auto___10726 = cljs.core.chunk_first.call(null,seq__10686_10725__$1);
var G__10727 = cljs.core.chunk_rest.call(null,seq__10686_10725__$1);
var G__10728 = c__7220__auto___10726;
var G__10729 = cljs.core.count.call(null,c__7220__auto___10726);
var G__10730 = (0);
seq__10686_10715 = G__10727;
chunk__10687_10716 = G__10728;
count__10688_10717 = G__10729;
i__10689_10718 = G__10730;
continue;
} else {
var param_10731 = cljs.core.first.call(null,seq__10686_10725__$1);
cljs.compiler.emit.call(null,param_10731);

if(cljs.core._EQ_.call(null,param_10731,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__10732 = cljs.core.next.call(null,seq__10686_10725__$1);
var G__10733 = null;
var G__10734 = (0);
var G__10735 = (0);
seq__10686_10715 = G__10732;
chunk__10687_10716 = G__10733;
count__10688_10717 = G__10734;
i__10689_10718 = G__10735;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,");");

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,mname_10691,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.call(null,mname_10691,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to.call(null,cljs.core.assoc.call(null,f,cljs.core.cst$kw$name,name_10690__$1));

cljs.compiler.emitln.call(null,";");

cljs.compiler.emitln.call(null,mname_10691,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_10692,";");

cljs.compiler.emitln.call(null,"return ",mname_10691,";");

cljs.compiler.emitln.call(null,"})()");

if(cljs.core._EQ_.call(null,cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__10108__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,cljs.core.cst$kw$fn,(function (p__10739){
var map__10740 = p__10739;
var map__10740__$1 = ((((!((map__10740 == null)))?((((map__10740.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10740.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10740):map__10740);
var name = cljs.core.get.call(null,map__10740__$1,cljs.core.cst$kw$name);
var env = cljs.core.get.call(null,map__10740__$1,cljs.core.cst$kw$env);
var methods$ = cljs.core.get.call(null,map__10740__$1,cljs.core.cst$kw$methods);
var max_fixed_arity = cljs.core.get.call(null,map__10740__$1,cljs.core.cst$kw$max_DASH_fixed_DASH_arity);
var variadic = cljs.core.get.call(null,map__10740__$1,cljs.core.cst$kw$variadic);
var recur_frames = cljs.core.get.call(null,map__10740__$1,cljs.core.cst$kw$recur_DASH_frames);
var loop_lets = cljs.core.get.call(null,map__10740__$1,cljs.core.cst$kw$loop_DASH_lets);
if(cljs.core._EQ_.call(null,cljs.core.cst$kw$statement,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var loop_locals = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.compiler.munge,cljs.core.concat.call(null,cljs.core.mapcat.call(null,cljs.core.cst$kw$params,cljs.core.filter.call(null,((function (map__10740,map__10740__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__10736_SHARP_){
var and__6397__auto__ = p1__10736_SHARP_;
if(cljs.core.truth_(and__6397__auto__)){
return cljs.core.deref.call(null,cljs.core.cst$kw$flag.cljs$core$IFn$_invoke$arity$1(p1__10736_SHARP_));
} else {
return and__6397__auto__;
}
});})(map__10740,map__10740__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
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
var name_10775__$1 = (function (){var or__6409__auto__ = name;
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_10776 = cljs.compiler.munge.call(null,name_10775__$1);
var maxparams_10777 = cljs.core.apply.call(null,cljs.core.max_key,cljs.core.count,cljs.core.map.call(null,cljs.core.cst$kw$params,methods$));
var mmap_10778 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (name_10775__$1,mname_10776,maxparams_10777,loop_locals,map__10740,map__10740__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.call(null,cljs.core.symbol.call(null,[cljs.core.str(mname_10776),cljs.core.str("__"),cljs.core.str(cljs.core.count.call(null,cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
});})(name_10775__$1,mname_10776,maxparams_10777,loop_locals,map__10740,map__10740__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,methods$));
var ms_10779 = cljs.core.sort_by.call(null,((function (name_10775__$1,mname_10776,maxparams_10777,mmap_10778,loop_locals,map__10740,map__10740__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__10737_SHARP_){
return cljs.core.count.call(null,cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__10737_SHARP_)));
});})(name_10775__$1,mname_10776,maxparams_10777,mmap_10778,loop_locals,map__10740,map__10740__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,cljs.core.seq.call(null,mmap_10778));
if(cljs.core._EQ_.call(null,cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"(function() {");

cljs.compiler.emitln.call(null,"var ",mname_10776," = null;");

var seq__10742_10780 = cljs.core.seq.call(null,ms_10779);
var chunk__10743_10781 = null;
var count__10744_10782 = (0);
var i__10745_10783 = (0);
while(true){
if((i__10745_10783 < count__10744_10782)){
var vec__10746_10784 = cljs.core._nth.call(null,chunk__10743_10781,i__10745_10783);
var n_10785 = cljs.core.nth.call(null,vec__10746_10784,(0),null);
var meth_10786 = cljs.core.nth.call(null,vec__10746_10784,(1),null);
cljs.compiler.emits.call(null,"var ",n_10785," = ");

if(cljs.core.truth_(cljs.core.cst$kw$variadic.cljs$core$IFn$_invoke$arity$1(meth_10786))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_10786);
} else {
cljs.compiler.emit_fn_method.call(null,meth_10786);
}

cljs.compiler.emitln.call(null,";");

var G__10787 = seq__10742_10780;
var G__10788 = chunk__10743_10781;
var G__10789 = count__10744_10782;
var G__10790 = (i__10745_10783 + (1));
seq__10742_10780 = G__10787;
chunk__10743_10781 = G__10788;
count__10744_10782 = G__10789;
i__10745_10783 = G__10790;
continue;
} else {
var temp__4657__auto___10791 = cljs.core.seq.call(null,seq__10742_10780);
if(temp__4657__auto___10791){
var seq__10742_10792__$1 = temp__4657__auto___10791;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10742_10792__$1)){
var c__7220__auto___10793 = cljs.core.chunk_first.call(null,seq__10742_10792__$1);
var G__10794 = cljs.core.chunk_rest.call(null,seq__10742_10792__$1);
var G__10795 = c__7220__auto___10793;
var G__10796 = cljs.core.count.call(null,c__7220__auto___10793);
var G__10797 = (0);
seq__10742_10780 = G__10794;
chunk__10743_10781 = G__10795;
count__10744_10782 = G__10796;
i__10745_10783 = G__10797;
continue;
} else {
var vec__10749_10798 = cljs.core.first.call(null,seq__10742_10792__$1);
var n_10799 = cljs.core.nth.call(null,vec__10749_10798,(0),null);
var meth_10800 = cljs.core.nth.call(null,vec__10749_10798,(1),null);
cljs.compiler.emits.call(null,"var ",n_10799," = ");

if(cljs.core.truth_(cljs.core.cst$kw$variadic.cljs$core$IFn$_invoke$arity$1(meth_10800))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_10800);
} else {
cljs.compiler.emit_fn_method.call(null,meth_10800);
}

cljs.compiler.emitln.call(null,";");

var G__10801 = cljs.core.next.call(null,seq__10742_10792__$1);
var G__10802 = null;
var G__10803 = (0);
var G__10804 = (0);
seq__10742_10780 = G__10801;
chunk__10743_10781 = G__10802;
count__10744_10782 = G__10803;
i__10745_10783 = G__10804;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,mname_10776," = function(",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,maxparams_10777),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$var_args], null)):maxparams_10777)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,maxparams_10777));

cljs.compiler.emitln.call(null," = var_args;");
} else {
}

cljs.compiler.emitln.call(null,"switch(arguments.length){");

var seq__10752_10805 = cljs.core.seq.call(null,ms_10779);
var chunk__10753_10806 = null;
var count__10754_10807 = (0);
var i__10755_10808 = (0);
while(true){
if((i__10755_10808 < count__10754_10807)){
var vec__10756_10809 = cljs.core._nth.call(null,chunk__10753_10806,i__10755_10808);
var n_10810 = cljs.core.nth.call(null,vec__10756_10809,(0),null);
var meth_10811 = cljs.core.nth.call(null,vec__10756_10809,(1),null);
if(cljs.core.truth_(cljs.core.cst$kw$variadic.cljs$core$IFn$_invoke$arity$1(meth_10811))){
cljs.compiler.emitln.call(null,"default:");

var restarg_10812 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_10812," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_10813 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_10812," = new cljs.core.IndexedSeq(",a_10813,",0);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_10810,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_10777)),(((cljs.core.count.call(null,maxparams_10777) > (1)))?", ":null),restarg_10812,");");
} else {
var pcnt_10814 = cljs.core.count.call(null,cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(meth_10811));
cljs.compiler.emitln.call(null,"case ",pcnt_10814,":");

cljs.compiler.emitln.call(null,"return ",n_10810,".call(this",(((pcnt_10814 === (0)))?null:cljs.core._conj.call(null,(function (){var x__7243__auto__ = cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_10814,maxparams_10777));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),",")),");");
}

var G__10815 = seq__10752_10805;
var G__10816 = chunk__10753_10806;
var G__10817 = count__10754_10807;
var G__10818 = (i__10755_10808 + (1));
seq__10752_10805 = G__10815;
chunk__10753_10806 = G__10816;
count__10754_10807 = G__10817;
i__10755_10808 = G__10818;
continue;
} else {
var temp__4657__auto___10819 = cljs.core.seq.call(null,seq__10752_10805);
if(temp__4657__auto___10819){
var seq__10752_10820__$1 = temp__4657__auto___10819;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10752_10820__$1)){
var c__7220__auto___10821 = cljs.core.chunk_first.call(null,seq__10752_10820__$1);
var G__10822 = cljs.core.chunk_rest.call(null,seq__10752_10820__$1);
var G__10823 = c__7220__auto___10821;
var G__10824 = cljs.core.count.call(null,c__7220__auto___10821);
var G__10825 = (0);
seq__10752_10805 = G__10822;
chunk__10753_10806 = G__10823;
count__10754_10807 = G__10824;
i__10755_10808 = G__10825;
continue;
} else {
var vec__10759_10826 = cljs.core.first.call(null,seq__10752_10820__$1);
var n_10827 = cljs.core.nth.call(null,vec__10759_10826,(0),null);
var meth_10828 = cljs.core.nth.call(null,vec__10759_10826,(1),null);
if(cljs.core.truth_(cljs.core.cst$kw$variadic.cljs$core$IFn$_invoke$arity$1(meth_10828))){
cljs.compiler.emitln.call(null,"default:");

var restarg_10829 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_10829," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_10830 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_10829," = new cljs.core.IndexedSeq(",a_10830,",0);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_10827,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_10777)),(((cljs.core.count.call(null,maxparams_10777) > (1)))?", ":null),restarg_10829,");");
} else {
var pcnt_10831 = cljs.core.count.call(null,cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(meth_10828));
cljs.compiler.emitln.call(null,"case ",pcnt_10831,":");

cljs.compiler.emitln.call(null,"return ",n_10827,".call(this",(((pcnt_10831 === (0)))?null:cljs.core._conj.call(null,(function (){var x__7243__auto__ = cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_10831,maxparams_10777));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),",")),");");
}

var G__10832 = cljs.core.next.call(null,seq__10752_10820__$1);
var G__10833 = null;
var G__10834 = (0);
var G__10835 = (0);
seq__10752_10805 = G__10832;
chunk__10753_10806 = G__10833;
count__10754_10807 = G__10834;
i__10755_10808 = G__10835;
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
cljs.compiler.emitln.call(null,mname_10776,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.call(null,mname_10776,".cljs$lang$applyTo = ",cljs.core.some.call(null,((function (name_10775__$1,mname_10776,maxparams_10777,mmap_10778,ms_10779,loop_locals,map__10740,map__10740__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__10738_SHARP_){
var vec__10762 = p1__10738_SHARP_;
var n = cljs.core.nth.call(null,vec__10762,(0),null);
var m = cljs.core.nth.call(null,vec__10762,(1),null);
if(cljs.core.truth_(cljs.core.cst$kw$variadic.cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
});})(name_10775__$1,mname_10776,maxparams_10777,mmap_10778,ms_10779,loop_locals,map__10740,map__10740__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,ms_10779),".cljs$lang$applyTo;");
} else {
}

var seq__10765_10836 = cljs.core.seq.call(null,ms_10779);
var chunk__10766_10837 = null;
var count__10767_10838 = (0);
var i__10768_10839 = (0);
while(true){
if((i__10768_10839 < count__10767_10838)){
var vec__10769_10840 = cljs.core._nth.call(null,chunk__10766_10837,i__10768_10839);
var n_10841 = cljs.core.nth.call(null,vec__10769_10840,(0),null);
var meth_10842 = cljs.core.nth.call(null,vec__10769_10840,(1),null);
var c_10843 = cljs.core.count.call(null,cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(meth_10842));
if(cljs.core.truth_(cljs.core.cst$kw$variadic.cljs$core$IFn$_invoke$arity$1(meth_10842))){
cljs.compiler.emitln.call(null,mname_10776,".cljs$core$IFn$_invoke$arity$variadic = ",n_10841,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_10776,".cljs$core$IFn$_invoke$arity$",c_10843," = ",n_10841,";");
}

var G__10844 = seq__10765_10836;
var G__10845 = chunk__10766_10837;
var G__10846 = count__10767_10838;
var G__10847 = (i__10768_10839 + (1));
seq__10765_10836 = G__10844;
chunk__10766_10837 = G__10845;
count__10767_10838 = G__10846;
i__10768_10839 = G__10847;
continue;
} else {
var temp__4657__auto___10848 = cljs.core.seq.call(null,seq__10765_10836);
if(temp__4657__auto___10848){
var seq__10765_10849__$1 = temp__4657__auto___10848;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10765_10849__$1)){
var c__7220__auto___10850 = cljs.core.chunk_first.call(null,seq__10765_10849__$1);
var G__10851 = cljs.core.chunk_rest.call(null,seq__10765_10849__$1);
var G__10852 = c__7220__auto___10850;
var G__10853 = cljs.core.count.call(null,c__7220__auto___10850);
var G__10854 = (0);
seq__10765_10836 = G__10851;
chunk__10766_10837 = G__10852;
count__10767_10838 = G__10853;
i__10768_10839 = G__10854;
continue;
} else {
var vec__10772_10855 = cljs.core.first.call(null,seq__10765_10849__$1);
var n_10856 = cljs.core.nth.call(null,vec__10772_10855,(0),null);
var meth_10857 = cljs.core.nth.call(null,vec__10772_10855,(1),null);
var c_10858 = cljs.core.count.call(null,cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(meth_10857));
if(cljs.core.truth_(cljs.core.cst$kw$variadic.cljs$core$IFn$_invoke$arity$1(meth_10857))){
cljs.compiler.emitln.call(null,mname_10776,".cljs$core$IFn$_invoke$arity$variadic = ",n_10856,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_10776,".cljs$core$IFn$_invoke$arity$",c_10858," = ",n_10856,";");
}

var G__10859 = cljs.core.next.call(null,seq__10765_10849__$1);
var G__10860 = null;
var G__10861 = (0);
var G__10862 = (0);
seq__10765_10836 = G__10859;
chunk__10766_10837 = G__10860;
count__10767_10838 = G__10861;
i__10768_10839 = G__10862;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"return ",mname_10776,";");

cljs.compiler.emitln.call(null,"})()");
}

if(loop_locals){
return cljs.compiler.emitln.call(null,";})(",cljs.compiler.comma_sep.call(null,loop_locals),"))");
} else {
return null;
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,cljs.core.cst$kw$do,(function (p__10863){
var map__10864 = p__10863;
var map__10864__$1 = ((((!((map__10864 == null)))?((((map__10864.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10864.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10864):map__10864);
var statements = cljs.core.get.call(null,map__10864__$1,cljs.core.cst$kw$statements);
var ret = cljs.core.get.call(null,map__10864__$1,cljs.core.cst$kw$ret);
var env = cljs.core.get.call(null,map__10864__$1,cljs.core.cst$kw$env);
var context = cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var and__6397__auto__ = statements;
if(cljs.core.truth_(and__6397__auto__)){
return cljs.core._EQ_.call(null,cljs.core.cst$kw$expr,context);
} else {
return and__6397__auto__;
}
})())){
cljs.compiler.emitln.call(null,"(function (){");
} else {
}

var seq__10866_10870 = cljs.core.seq.call(null,statements);
var chunk__10867_10871 = null;
var count__10868_10872 = (0);
var i__10869_10873 = (0);
while(true){
if((i__10869_10873 < count__10868_10872)){
var s_10874 = cljs.core._nth.call(null,chunk__10867_10871,i__10869_10873);
cljs.compiler.emitln.call(null,s_10874);

var G__10875 = seq__10866_10870;
var G__10876 = chunk__10867_10871;
var G__10877 = count__10868_10872;
var G__10878 = (i__10869_10873 + (1));
seq__10866_10870 = G__10875;
chunk__10867_10871 = G__10876;
count__10868_10872 = G__10877;
i__10869_10873 = G__10878;
continue;
} else {
var temp__4657__auto___10879 = cljs.core.seq.call(null,seq__10866_10870);
if(temp__4657__auto___10879){
var seq__10866_10880__$1 = temp__4657__auto___10879;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10866_10880__$1)){
var c__7220__auto___10881 = cljs.core.chunk_first.call(null,seq__10866_10880__$1);
var G__10882 = cljs.core.chunk_rest.call(null,seq__10866_10880__$1);
var G__10883 = c__7220__auto___10881;
var G__10884 = cljs.core.count.call(null,c__7220__auto___10881);
var G__10885 = (0);
seq__10866_10870 = G__10882;
chunk__10867_10871 = G__10883;
count__10868_10872 = G__10884;
i__10869_10873 = G__10885;
continue;
} else {
var s_10886 = cljs.core.first.call(null,seq__10866_10880__$1);
cljs.compiler.emitln.call(null,s_10886);

var G__10887 = cljs.core.next.call(null,seq__10866_10880__$1);
var G__10888 = null;
var G__10889 = (0);
var G__10890 = (0);
seq__10866_10870 = G__10887;
chunk__10867_10871 = G__10888;
count__10868_10872 = G__10889;
i__10869_10873 = G__10890;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emit.call(null,ret);

if(cljs.core.truth_((function (){var and__6397__auto__ = statements;
if(cljs.core.truth_(and__6397__auto__)){
return cljs.core._EQ_.call(null,cljs.core.cst$kw$expr,context);
} else {
return and__6397__auto__;
}
})())){
return cljs.compiler.emitln.call(null,"})()");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,cljs.core.cst$kw$try,(function (p__10891){
var map__10892 = p__10891;
var map__10892__$1 = ((((!((map__10892 == null)))?((((map__10892.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10892.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10892):map__10892);
var env = cljs.core.get.call(null,map__10892__$1,cljs.core.cst$kw$env);
var try$ = cljs.core.get.call(null,map__10892__$1,cljs.core.cst$kw$try);
var catch$ = cljs.core.get.call(null,map__10892__$1,cljs.core.cst$kw$catch);
var name = cljs.core.get.call(null,map__10892__$1,cljs.core.cst$kw$name);
var finally$ = cljs.core.get.call(null,map__10892__$1,cljs.core.cst$kw$finally);
var context = cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var or__6409__auto__ = name;
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
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
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__10894,is_loop){
var map__10906 = p__10894;
var map__10906__$1 = ((((!((map__10906 == null)))?((((map__10906.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10906.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10906):map__10906);
var bindings = cljs.core.get.call(null,map__10906__$1,cljs.core.cst$kw$bindings);
var expr = cljs.core.get.call(null,map__10906__$1,cljs.core.cst$kw$expr);
var env = cljs.core.get.call(null,map__10906__$1,cljs.core.cst$kw$env);
var context = cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,cljs.core.cst$kw$expr,context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var _STAR_lexical_renames_STAR_10908_10917 = cljs.compiler._STAR_lexical_renames_STAR_;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.into.call(null,cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.call(null,cljs.core.cst$kw$statement,context))?cljs.core.map.call(null,((function (_STAR_lexical_renames_STAR_10908_10917,context,map__10906,map__10906__$1,bindings,expr,env){
return (function (binding){
var name = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope.call(null,binding),cljs.core.gensym.call(null,[cljs.core.str(name),cljs.core.str("-")].join(''))],null));
});})(_STAR_lexical_renames_STAR_10908_10917,context,map__10906,map__10906__$1,bindings,expr,env))
,bindings):null));

try{var seq__10909_10918 = cljs.core.seq.call(null,bindings);
var chunk__10910_10919 = null;
var count__10911_10920 = (0);
var i__10912_10921 = (0);
while(true){
if((i__10912_10921 < count__10911_10920)){
var map__10913_10922 = cljs.core._nth.call(null,chunk__10910_10919,i__10912_10921);
var map__10913_10923__$1 = ((((!((map__10913_10922 == null)))?((((map__10913_10922.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10913_10922.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10913_10922):map__10913_10922);
var binding_10924 = map__10913_10923__$1;
var init_10925 = cljs.core.get.call(null,map__10913_10923__$1,cljs.core.cst$kw$init);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_10924);

cljs.compiler.emitln.call(null," = ",init_10925,";");

var G__10926 = seq__10909_10918;
var G__10927 = chunk__10910_10919;
var G__10928 = count__10911_10920;
var G__10929 = (i__10912_10921 + (1));
seq__10909_10918 = G__10926;
chunk__10910_10919 = G__10927;
count__10911_10920 = G__10928;
i__10912_10921 = G__10929;
continue;
} else {
var temp__4657__auto___10930 = cljs.core.seq.call(null,seq__10909_10918);
if(temp__4657__auto___10930){
var seq__10909_10931__$1 = temp__4657__auto___10930;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10909_10931__$1)){
var c__7220__auto___10932 = cljs.core.chunk_first.call(null,seq__10909_10931__$1);
var G__10933 = cljs.core.chunk_rest.call(null,seq__10909_10931__$1);
var G__10934 = c__7220__auto___10932;
var G__10935 = cljs.core.count.call(null,c__7220__auto___10932);
var G__10936 = (0);
seq__10909_10918 = G__10933;
chunk__10910_10919 = G__10934;
count__10911_10920 = G__10935;
i__10912_10921 = G__10936;
continue;
} else {
var map__10915_10937 = cljs.core.first.call(null,seq__10909_10931__$1);
var map__10915_10938__$1 = ((((!((map__10915_10937 == null)))?((((map__10915_10937.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10915_10937.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10915_10937):map__10915_10937);
var binding_10939 = map__10915_10938__$1;
var init_10940 = cljs.core.get.call(null,map__10915_10938__$1,cljs.core.cst$kw$init);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_10939);

cljs.compiler.emitln.call(null," = ",init_10940,";");

var G__10941 = cljs.core.next.call(null,seq__10909_10931__$1);
var G__10942 = null;
var G__10943 = (0);
var G__10944 = (0);
seq__10909_10918 = G__10941;
chunk__10910_10919 = G__10942;
count__10911_10920 = G__10943;
i__10912_10921 = G__10944;
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
}finally {cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR_10908_10917;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,cljs.core.cst$kw$recur,(function (p__10945){
var map__10946 = p__10945;
var map__10946__$1 = ((((!((map__10946 == null)))?((((map__10946.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10946.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10946):map__10946);
var frame = cljs.core.get.call(null,map__10946__$1,cljs.core.cst$kw$frame);
var exprs = cljs.core.get.call(null,map__10946__$1,cljs.core.cst$kw$exprs);
var env = cljs.core.get.call(null,map__10946__$1,cljs.core.cst$kw$env);
var temps = cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,exprs),cljs.core.repeatedly.call(null,cljs.core.gensym)));
var params = cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(frame);
var n__7324__auto___10948 = cljs.core.count.call(null,exprs);
var i_10949 = (0);
while(true){
if((i_10949 < n__7324__auto___10948)){
cljs.compiler.emitln.call(null,"var ",temps.call(null,i_10949)," = ",exprs.call(null,i_10949),";");

var G__10950 = (i_10949 + (1));
i_10949 = G__10950;
continue;
} else {
}
break;
}

var n__7324__auto___10951 = cljs.core.count.call(null,exprs);
var i_10952 = (0);
while(true){
if((i_10952 < n__7324__auto___10951)){
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,params.call(null,i_10952))," = ",temps.call(null,i_10952),";");

var G__10953 = (i_10952 + (1));
i_10952 = G__10953;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.call(null,"continue;");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,cljs.core.cst$kw$letfn,(function (p__10954){
var map__10955 = p__10954;
var map__10955__$1 = ((((!((map__10955 == null)))?((((map__10955.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10955.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10955):map__10955);
var bindings = cljs.core.get.call(null,map__10955__$1,cljs.core.cst$kw$bindings);
var expr = cljs.core.get.call(null,map__10955__$1,cljs.core.cst$kw$expr);
var env = cljs.core.get.call(null,map__10955__$1,cljs.core.cst$kw$env);
var context = cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,cljs.core.cst$kw$expr,context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var seq__10957_10965 = cljs.core.seq.call(null,bindings);
var chunk__10958_10966 = null;
var count__10959_10967 = (0);
var i__10960_10968 = (0);
while(true){
if((i__10960_10968 < count__10959_10967)){
var map__10961_10969 = cljs.core._nth.call(null,chunk__10958_10966,i__10960_10968);
var map__10961_10970__$1 = ((((!((map__10961_10969 == null)))?((((map__10961_10969.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10961_10969.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10961_10969):map__10961_10969);
var binding_10971 = map__10961_10970__$1;
var init_10972 = cljs.core.get.call(null,map__10961_10970__$1,cljs.core.cst$kw$init);
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_10971)," = ",init_10972,";");

var G__10973 = seq__10957_10965;
var G__10974 = chunk__10958_10966;
var G__10975 = count__10959_10967;
var G__10976 = (i__10960_10968 + (1));
seq__10957_10965 = G__10973;
chunk__10958_10966 = G__10974;
count__10959_10967 = G__10975;
i__10960_10968 = G__10976;
continue;
} else {
var temp__4657__auto___10977 = cljs.core.seq.call(null,seq__10957_10965);
if(temp__4657__auto___10977){
var seq__10957_10978__$1 = temp__4657__auto___10977;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10957_10978__$1)){
var c__7220__auto___10979 = cljs.core.chunk_first.call(null,seq__10957_10978__$1);
var G__10980 = cljs.core.chunk_rest.call(null,seq__10957_10978__$1);
var G__10981 = c__7220__auto___10979;
var G__10982 = cljs.core.count.call(null,c__7220__auto___10979);
var G__10983 = (0);
seq__10957_10965 = G__10980;
chunk__10958_10966 = G__10981;
count__10959_10967 = G__10982;
i__10960_10968 = G__10983;
continue;
} else {
var map__10963_10984 = cljs.core.first.call(null,seq__10957_10978__$1);
var map__10963_10985__$1 = ((((!((map__10963_10984 == null)))?((((map__10963_10984.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10963_10984.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10963_10984):map__10963_10984);
var binding_10986 = map__10963_10985__$1;
var init_10987 = cljs.core.get.call(null,map__10963_10985__$1,cljs.core.cst$kw$init);
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_10986)," = ",init_10987,";");

var G__10988 = cljs.core.next.call(null,seq__10957_10978__$1);
var G__10989 = null;
var G__10990 = (0);
var G__10991 = (0);
seq__10957_10965 = G__10988;
chunk__10958_10966 = G__10989;
count__10959_10967 = G__10990;
i__10960_10968 = G__10991;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,cljs.core.cst$kw$invoke,(function (p__10994){
var map__10995 = p__10994;
var map__10995__$1 = ((((!((map__10995 == null)))?((((map__10995.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10995.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10995):map__10995);
var expr = map__10995__$1;
var f = cljs.core.get.call(null,map__10995__$1,cljs.core.cst$kw$f);
var args = cljs.core.get.call(null,map__10995__$1,cljs.core.cst$kw$args);
var env = cljs.core.get.call(null,map__10995__$1,cljs.core.cst$kw$env);
var info = cljs.core.cst$kw$info.cljs$core$IFn$_invoke$arity$1(f);
var fn_QMARK_ = (function (){var and__6397__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__6397__auto__)){
var and__6397__auto____$1 = cljs.core.not.call(null,cljs.core.cst$kw$dynamic.cljs$core$IFn$_invoke$arity$1(info));
if(and__6397__auto____$1){
return cljs.core.cst$kw$fn_DASH_var.cljs$core$IFn$_invoke$arity$1(info);
} else {
return and__6397__auto____$1;
}
} else {
return and__6397__auto__;
}
})();
var protocol = cljs.core.cst$kw$protocol.cljs$core$IFn$_invoke$arity$1(info);
var tag = cljs.analyzer.infer_tag.call(null,env,cljs.core.first.call(null,cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(expr)));
var proto_QMARK_ = (function (){var and__6397__auto__ = protocol;
if(cljs.core.truth_(and__6397__auto__)){
var and__6397__auto____$1 = tag;
if(cljs.core.truth_(and__6397__auto____$1)){
var or__6409__auto__ = (function (){var and__6397__auto____$2 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__6397__auto____$2)){
var and__6397__auto____$3 = protocol;
if(cljs.core.truth_(and__6397__auto____$3)){
return cljs.core._EQ_.call(null,tag,cljs.core.cst$sym$not_DASH_native);
} else {
return and__6397__auto____$3;
}
} else {
return and__6397__auto____$2;
}
})();
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
var and__6397__auto____$2 = (function (){var or__6409__auto____$1 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(or__6409__auto____$1)){
return or__6409__auto____$1;
} else {
return cljs.core.cst$kw$protocol_DASH_inline.cljs$core$IFn$_invoke$arity$1(env);
}
})();
if(cljs.core.truth_(and__6397__auto____$2)){
var or__6409__auto____$1 = cljs.core._EQ_.call(null,protocol,tag);
if(or__6409__auto____$1){
return or__6409__auto____$1;
} else {
var and__6397__auto____$3 = !(cljs.core.set_QMARK_.call(null,tag));
if(and__6397__auto____$3){
var and__6397__auto____$4 = cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [cljs.core.cst$sym$clj,null,cljs.core.cst$sym$boolean,null,cljs.core.cst$sym$object,null,cljs.core.cst$sym$any,null,cljs.core.cst$sym$number,null,cljs.core.cst$sym$clj_DASH_or_DASH_nil,null,cljs.core.cst$sym$array,null,cljs.core.cst$sym$string,null,cljs.core.cst$sym$function,null,cljs.core.cst$sym$clj_DASH_nil,null], null), null).call(null,tag));
if(and__6397__auto____$4){
var temp__4657__auto__ = cljs.core.cst$kw$protocols.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_existing_var.call(null,env,cljs.core.symbol.call(null,cljs.core.name.call(null,tag))));
if(cljs.core.truth_(temp__4657__auto__)){
var ps = temp__4657__auto__;
return ps.call(null,protocol);
} else {
return null;
}
} else {
return and__6397__auto____$4;
}
} else {
return and__6397__auto____$3;
}
}
} else {
return and__6397__auto____$2;
}
}
} else {
return and__6397__auto____$1;
}
} else {
return and__6397__auto__;
}
})();
var opt_not_QMARK_ = (cljs.core._EQ_.call(null,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(info),cljs.core.cst$sym$cljs$core_SLASH_not)) && (cljs.core._EQ_.call(null,cljs.analyzer.infer_tag.call(null,env,cljs.core.first.call(null,cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(expr))),cljs.core.cst$sym$boolean));
var ns = cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(info);
var js_QMARK_ = (cljs.core._EQ_.call(null,ns,cljs.core.cst$sym$js)) || (cljs.core._EQ_.call(null,ns,cljs.core.cst$sym$Math));
var goog_QMARK_ = (cljs.core.truth_(ns)?(function (){var or__6409__auto__ = cljs.core._EQ_.call(null,ns,cljs.core.cst$sym$goog);
if(or__6409__auto__){
return or__6409__auto__;
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
var vec__10997 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count.call(null,args);
var variadic_QMARK_ = cljs.core.cst$kw$variadic.cljs$core$IFn$_invoke$arity$1(info);
var mps = cljs.core.cst$kw$method_DASH_params.cljs$core$IFn$_invoke$arity$1(info);
var mfa = cljs.core.cst$kw$max_DASH_fixed_DASH_arity.cljs$core$IFn$_invoke$arity$1(info);
if((cljs.core.not.call(null,variadic_QMARK_)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,mps),(1)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
} else {
if(cljs.core.truth_((function (){var and__6397__auto__ = variadic_QMARK_;
if(cljs.core.truth_(and__6397__auto__)){
return (arity > mfa);
} else {
return and__6397__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$info], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__10995,map__10995__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,cljs.core.cst$kw$name,cljs.core.symbol.call(null,[cljs.core.str(cljs.compiler.munge.call(null,info__$1)),cljs.core.str(".cljs$core$IFn$_invoke$arity$variadic")].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$info], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__10995,map__10995__$1,expr,f,args,env){
return (function (p1__10992_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__10992_SHARP_,cljs.core.cst$kw$shadow),cljs.core.cst$kw$fn_DASH_self_DASH_name);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__10995,map__10995__$1,expr,f,args,env))
);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__10995,map__10995__$1,expr,f,args,env))
),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$max_DASH_fixed_DASH_arity,mfa], null)], null);
} else {
var arities = cljs.core.map.call(null,cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([arity], true),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$info], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__10995,map__10995__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,cljs.core.cst$kw$name,cljs.core.symbol.call(null,[cljs.core.str(cljs.compiler.munge.call(null,info__$1)),cljs.core.str(".cljs$core$IFn$_invoke$arity$"),cljs.core.str(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$info], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__10995,map__10995__$1,expr,f,args,env){
return (function (p1__10993_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__10993_SHARP_,cljs.core.cst$kw$shadow),cljs.core.cst$kw$fn_DASH_self_DASH_name);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__10995,map__10995__$1,expr,f,args,env))
);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__10995,map__10995__$1,expr,f,args,env))
),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.call(null,vec__10997,(0),null);
var variadic_invoke = cljs.core.nth.call(null,vec__10997,(1),null);
var env__10108__auto__ = env;
if(cljs.core._EQ_.call(null,cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__10108__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.call(null,"!(",cljs.core.first.call(null,args),")");
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_11000 = [cljs.core.str(cljs.compiler.munge.call(null,cljs.compiler.protocol_prefix.call(null,protocol))),cljs.core.str(cljs.compiler.munge.call(null,cljs.core.name.call(null,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(info)))),cljs.core.str("$arity$"),cljs.core.str(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,cljs.core.first.call(null,args),".",pimpl_11000,"(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",cljs.core.rest.call(null,args))),")");
} else {
if(keyword_QMARK_){
cljs.compiler.emits.call(null,f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count.call(null,args),"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_11001 = cljs.core.cst$kw$max_DASH_fixed_DASH_arity.cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,mfa_11001,args)),(((mfa_11001 === (0)))?null:","),"cljs.core.array_seq([",cljs.compiler.comma_sep.call(null,cljs.core.drop.call(null,mfa_11001,args)),"], 0))");
} else {
if(cljs.core.truth_((function (){var or__6409__auto__ = fn_QMARK_;
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
var or__6409__auto____$1 = js_QMARK_;
if(or__6409__auto____$1){
return or__6409__auto____$1;
} else {
return goog_QMARK_;
}
}
})())){
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_((function (){var and__6397__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__6397__auto__)){
return cljs.core._EQ_.call(null,cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(f__$1),cljs.core.cst$kw$var);
} else {
return and__6397__auto__;
}
})())){
var fprop_11002 = [cljs.core.str(".cljs$core$IFn$_invoke$arity$"),cljs.core.str(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,"(",f__$1,fprop_11002," ? ",f__$1,fprop_11002,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),"))");
} else {
cljs.compiler.emits.call(null,f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),")");
}

}
}
}
}
}

if(cljs.core._EQ_.call(null,cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__10108__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,cljs.core.cst$kw$new,(function (p__11003){
var map__11004 = p__11003;
var map__11004__$1 = ((((!((map__11004 == null)))?((((map__11004.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11004.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11004):map__11004);
var ctor = cljs.core.get.call(null,map__11004__$1,cljs.core.cst$kw$ctor);
var args = cljs.core.get.call(null,map__11004__$1,cljs.core.cst$kw$args);
var env = cljs.core.get.call(null,map__11004__$1,cljs.core.cst$kw$env);
var env__10108__auto__ = env;
if(cljs.core._EQ_.call(null,cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__10108__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(new ",ctor,"(",cljs.compiler.comma_sep.call(null,args),"))");

if(cljs.core._EQ_.call(null,cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__10108__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,cljs.core.cst$kw$set_BANG_,(function (p__11006){
var map__11007 = p__11006;
var map__11007__$1 = ((((!((map__11007 == null)))?((((map__11007.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11007.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11007):map__11007);
var target = cljs.core.get.call(null,map__11007__$1,cljs.core.cst$kw$target);
var val = cljs.core.get.call(null,map__11007__$1,cljs.core.cst$kw$val);
var env = cljs.core.get.call(null,map__11007__$1,cljs.core.cst$kw$env);
var env__10108__auto__ = env;
if(cljs.core._EQ_.call(null,cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__10108__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,target," = ",val);

if(cljs.core._EQ_.call(null,cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__10108__auto__))){
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

var seq__11013_11017 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,seen)),cljs.core.distinct.call(null,cljs.core.vals.call(null,libs))));
var chunk__11014_11018 = null;
var count__11015_11019 = (0);
var i__11016_11020 = (0);
while(true){
if((i__11016_11020 < count__11015_11019)){
var lib_11021 = cljs.core._nth.call(null,chunk__11014_11018,i__11016_11020);
if(cljs.core.truth_((function (){var or__6409__auto__ = cljs.core.cst$kw$reload.cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_11021),cljs.core.cst$kw$reload);
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_11021),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__6409__auto__ = cljs.core.cst$kw$reload_DASH_all.cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_11021),cljs.core.cst$kw$reload_DASH_all);
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_11021),"', 'reload-all');");
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_11021),"');");

}
}

var G__11022 = seq__11013_11017;
var G__11023 = chunk__11014_11018;
var G__11024 = count__11015_11019;
var G__11025 = (i__11016_11020 + (1));
seq__11013_11017 = G__11022;
chunk__11014_11018 = G__11023;
count__11015_11019 = G__11024;
i__11016_11020 = G__11025;
continue;
} else {
var temp__4657__auto___11026 = cljs.core.seq.call(null,seq__11013_11017);
if(temp__4657__auto___11026){
var seq__11013_11027__$1 = temp__4657__auto___11026;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11013_11027__$1)){
var c__7220__auto___11028 = cljs.core.chunk_first.call(null,seq__11013_11027__$1);
var G__11029 = cljs.core.chunk_rest.call(null,seq__11013_11027__$1);
var G__11030 = c__7220__auto___11028;
var G__11031 = cljs.core.count.call(null,c__7220__auto___11028);
var G__11032 = (0);
seq__11013_11017 = G__11029;
chunk__11014_11018 = G__11030;
count__11015_11019 = G__11031;
i__11016_11020 = G__11032;
continue;
} else {
var lib_11033 = cljs.core.first.call(null,seq__11013_11027__$1);
if(cljs.core.truth_((function (){var or__6409__auto__ = cljs.core.cst$kw$reload.cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_11033),cljs.core.cst$kw$reload);
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_11033),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__6409__auto__ = cljs.core.cst$kw$reload_DASH_all.cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_11033),cljs.core.cst$kw$reload_DASH_all);
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_11033),"', 'reload-all');");
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_11033),"');");

}
}

var G__11034 = cljs.core.next.call(null,seq__11013_11027__$1);
var G__11035 = null;
var G__11036 = (0);
var G__11037 = (0);
seq__11013_11017 = G__11034;
chunk__11014_11018 = G__11035;
count__11015_11019 = G__11036;
i__11016_11020 = G__11037;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,cljs.core.cst$kw$ns,(function (p__11038){
var map__11039 = p__11038;
var map__11039__$1 = ((((!((map__11039 == null)))?((((map__11039.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11039.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11039):map__11039);
var name = cljs.core.get.call(null,map__11039__$1,cljs.core.cst$kw$name);
var requires = cljs.core.get.call(null,map__11039__$1,cljs.core.cst$kw$requires);
var uses = cljs.core.get.call(null,map__11039__$1,cljs.core.cst$kw$uses);
var require_macros = cljs.core.get.call(null,map__11039__$1,cljs.core.cst$kw$require_DASH_macros);
var reloads = cljs.core.get.call(null,map__11039__$1,cljs.core.cst$kw$reloads);
var env = cljs.core.get.call(null,map__11039__$1,cljs.core.cst$kw$env);
cljs.compiler.emitln.call(null,"goog.provide('",cljs.compiler.munge.call(null,name),"');");

if(cljs.core._EQ_.call(null,name,cljs.core.cst$sym$cljs$core)){
} else {
cljs.compiler.emitln.call(null,"goog.require('cljs.core');");
}

cljs.compiler.load_libs.call(null,requires,null,cljs.core.cst$kw$require.cljs$core$IFn$_invoke$arity$1(reloads));

return cljs.compiler.load_libs.call(null,uses,requires,cljs.core.cst$kw$use.cljs$core$IFn$_invoke$arity$1(reloads));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,cljs.core.cst$kw$deftype_STAR_,(function (p__11041){
var map__11042 = p__11041;
var map__11042__$1 = ((((!((map__11042 == null)))?((((map__11042.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11042.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11042):map__11042);
var t = cljs.core.get.call(null,map__11042__$1,cljs.core.cst$kw$t);
var fields = cljs.core.get.call(null,map__11042__$1,cljs.core.cst$kw$fields);
var pmasks = cljs.core.get.call(null,map__11042__$1,cljs.core.cst$kw$pmasks);
var body = cljs.core.get.call(null,map__11042__$1,cljs.core.cst$kw$body);
var protocols = cljs.core.get.call(null,map__11042__$1,cljs.core.cst$kw$protocols);
var fields__$1 = cljs.core.map.call(null,cljs.compiler.munge,fields);
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__11044_11062 = cljs.core.seq.call(null,protocols);
var chunk__11045_11063 = null;
var count__11046_11064 = (0);
var i__11047_11065 = (0);
while(true){
if((i__11047_11065 < count__11046_11064)){
var protocol_11066 = cljs.core._nth.call(null,chunk__11045_11063,i__11047_11065);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_11066)].join('')),"}");

var G__11067 = seq__11044_11062;
var G__11068 = chunk__11045_11063;
var G__11069 = count__11046_11064;
var G__11070 = (i__11047_11065 + (1));
seq__11044_11062 = G__11067;
chunk__11045_11063 = G__11068;
count__11046_11064 = G__11069;
i__11047_11065 = G__11070;
continue;
} else {
var temp__4657__auto___11071 = cljs.core.seq.call(null,seq__11044_11062);
if(temp__4657__auto___11071){
var seq__11044_11072__$1 = temp__4657__auto___11071;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11044_11072__$1)){
var c__7220__auto___11073 = cljs.core.chunk_first.call(null,seq__11044_11072__$1);
var G__11074 = cljs.core.chunk_rest.call(null,seq__11044_11072__$1);
var G__11075 = c__7220__auto___11073;
var G__11076 = cljs.core.count.call(null,c__7220__auto___11073);
var G__11077 = (0);
seq__11044_11062 = G__11074;
chunk__11045_11063 = G__11075;
count__11046_11064 = G__11076;
i__11047_11065 = G__11077;
continue;
} else {
var protocol_11078 = cljs.core.first.call(null,seq__11044_11072__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_11078)].join('')),"}");

var G__11079 = cljs.core.next.call(null,seq__11044_11072__$1);
var G__11080 = null;
var G__11081 = (0);
var G__11082 = (0);
seq__11044_11062 = G__11079;
chunk__11045_11063 = G__11080;
count__11046_11064 = G__11081;
i__11047_11065 = G__11082;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__11048_11083 = cljs.core.seq.call(null,fields__$1);
var chunk__11049_11084 = null;
var count__11050_11085 = (0);
var i__11051_11086 = (0);
while(true){
if((i__11051_11086 < count__11050_11085)){
var fld_11087 = cljs.core._nth.call(null,chunk__11049_11084,i__11051_11086);
cljs.compiler.emitln.call(null,"this.",fld_11087," = ",fld_11087,";");

var G__11088 = seq__11048_11083;
var G__11089 = chunk__11049_11084;
var G__11090 = count__11050_11085;
var G__11091 = (i__11051_11086 + (1));
seq__11048_11083 = G__11088;
chunk__11049_11084 = G__11089;
count__11050_11085 = G__11090;
i__11051_11086 = G__11091;
continue;
} else {
var temp__4657__auto___11092 = cljs.core.seq.call(null,seq__11048_11083);
if(temp__4657__auto___11092){
var seq__11048_11093__$1 = temp__4657__auto___11092;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11048_11093__$1)){
var c__7220__auto___11094 = cljs.core.chunk_first.call(null,seq__11048_11093__$1);
var G__11095 = cljs.core.chunk_rest.call(null,seq__11048_11093__$1);
var G__11096 = c__7220__auto___11094;
var G__11097 = cljs.core.count.call(null,c__7220__auto___11094);
var G__11098 = (0);
seq__11048_11083 = G__11095;
chunk__11049_11084 = G__11096;
count__11050_11085 = G__11097;
i__11051_11086 = G__11098;
continue;
} else {
var fld_11099 = cljs.core.first.call(null,seq__11048_11093__$1);
cljs.compiler.emitln.call(null,"this.",fld_11099," = ",fld_11099,";");

var G__11100 = cljs.core.next.call(null,seq__11048_11093__$1);
var G__11101 = null;
var G__11102 = (0);
var G__11103 = (0);
seq__11048_11083 = G__11100;
chunk__11049_11084 = G__11101;
count__11050_11085 = G__11102;
i__11051_11086 = G__11103;
continue;
}
} else {
}
}
break;
}

var seq__11052_11104 = cljs.core.seq.call(null,pmasks);
var chunk__11053_11105 = null;
var count__11054_11106 = (0);
var i__11055_11107 = (0);
while(true){
if((i__11055_11107 < count__11054_11106)){
var vec__11056_11108 = cljs.core._nth.call(null,chunk__11053_11105,i__11055_11107);
var pno_11109 = cljs.core.nth.call(null,vec__11056_11108,(0),null);
var pmask_11110 = cljs.core.nth.call(null,vec__11056_11108,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_11109,"$ = ",pmask_11110,";");

var G__11111 = seq__11052_11104;
var G__11112 = chunk__11053_11105;
var G__11113 = count__11054_11106;
var G__11114 = (i__11055_11107 + (1));
seq__11052_11104 = G__11111;
chunk__11053_11105 = G__11112;
count__11054_11106 = G__11113;
i__11055_11107 = G__11114;
continue;
} else {
var temp__4657__auto___11115 = cljs.core.seq.call(null,seq__11052_11104);
if(temp__4657__auto___11115){
var seq__11052_11116__$1 = temp__4657__auto___11115;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11052_11116__$1)){
var c__7220__auto___11117 = cljs.core.chunk_first.call(null,seq__11052_11116__$1);
var G__11118 = cljs.core.chunk_rest.call(null,seq__11052_11116__$1);
var G__11119 = c__7220__auto___11117;
var G__11120 = cljs.core.count.call(null,c__7220__auto___11117);
var G__11121 = (0);
seq__11052_11104 = G__11118;
chunk__11053_11105 = G__11119;
count__11054_11106 = G__11120;
i__11055_11107 = G__11121;
continue;
} else {
var vec__11059_11122 = cljs.core.first.call(null,seq__11052_11116__$1);
var pno_11123 = cljs.core.nth.call(null,vec__11059_11122,(0),null);
var pmask_11124 = cljs.core.nth.call(null,vec__11059_11122,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_11123,"$ = ",pmask_11124,";");

var G__11125 = cljs.core.next.call(null,seq__11052_11116__$1);
var G__11126 = null;
var G__11127 = (0);
var G__11128 = (0);
seq__11052_11104 = G__11125;
chunk__11053_11105 = G__11126;
count__11054_11106 = G__11127;
i__11055_11107 = G__11128;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,cljs.core.cst$kw$defrecord_STAR_,(function (p__11129){
var map__11130 = p__11129;
var map__11130__$1 = ((((!((map__11130 == null)))?((((map__11130.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11130.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11130):map__11130);
var t = cljs.core.get.call(null,map__11130__$1,cljs.core.cst$kw$t);
var fields = cljs.core.get.call(null,map__11130__$1,cljs.core.cst$kw$fields);
var pmasks = cljs.core.get.call(null,map__11130__$1,cljs.core.cst$kw$pmasks);
var body = cljs.core.get.call(null,map__11130__$1,cljs.core.cst$kw$body);
var protocols = cljs.core.get.call(null,map__11130__$1,cljs.core.cst$kw$protocols);
var fields__$1 = cljs.core.concat.call(null,cljs.core.map.call(null,cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$__meta,cljs.core.cst$sym$__extmap,cljs.core.cst$sym$__hash], null));
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__11132_11150 = cljs.core.seq.call(null,protocols);
var chunk__11133_11151 = null;
var count__11134_11152 = (0);
var i__11135_11153 = (0);
while(true){
if((i__11135_11153 < count__11134_11152)){
var protocol_11154 = cljs.core._nth.call(null,chunk__11133_11151,i__11135_11153);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_11154)].join('')),"}");

var G__11155 = seq__11132_11150;
var G__11156 = chunk__11133_11151;
var G__11157 = count__11134_11152;
var G__11158 = (i__11135_11153 + (1));
seq__11132_11150 = G__11155;
chunk__11133_11151 = G__11156;
count__11134_11152 = G__11157;
i__11135_11153 = G__11158;
continue;
} else {
var temp__4657__auto___11159 = cljs.core.seq.call(null,seq__11132_11150);
if(temp__4657__auto___11159){
var seq__11132_11160__$1 = temp__4657__auto___11159;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11132_11160__$1)){
var c__7220__auto___11161 = cljs.core.chunk_first.call(null,seq__11132_11160__$1);
var G__11162 = cljs.core.chunk_rest.call(null,seq__11132_11160__$1);
var G__11163 = c__7220__auto___11161;
var G__11164 = cljs.core.count.call(null,c__7220__auto___11161);
var G__11165 = (0);
seq__11132_11150 = G__11162;
chunk__11133_11151 = G__11163;
count__11134_11152 = G__11164;
i__11135_11153 = G__11165;
continue;
} else {
var protocol_11166 = cljs.core.first.call(null,seq__11132_11160__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_11166)].join('')),"}");

var G__11167 = cljs.core.next.call(null,seq__11132_11160__$1);
var G__11168 = null;
var G__11169 = (0);
var G__11170 = (0);
seq__11132_11150 = G__11167;
chunk__11133_11151 = G__11168;
count__11134_11152 = G__11169;
i__11135_11153 = G__11170;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__11136_11171 = cljs.core.seq.call(null,fields__$1);
var chunk__11137_11172 = null;
var count__11138_11173 = (0);
var i__11139_11174 = (0);
while(true){
if((i__11139_11174 < count__11138_11173)){
var fld_11175 = cljs.core._nth.call(null,chunk__11137_11172,i__11139_11174);
cljs.compiler.emitln.call(null,"this.",fld_11175," = ",fld_11175,";");

var G__11176 = seq__11136_11171;
var G__11177 = chunk__11137_11172;
var G__11178 = count__11138_11173;
var G__11179 = (i__11139_11174 + (1));
seq__11136_11171 = G__11176;
chunk__11137_11172 = G__11177;
count__11138_11173 = G__11178;
i__11139_11174 = G__11179;
continue;
} else {
var temp__4657__auto___11180 = cljs.core.seq.call(null,seq__11136_11171);
if(temp__4657__auto___11180){
var seq__11136_11181__$1 = temp__4657__auto___11180;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11136_11181__$1)){
var c__7220__auto___11182 = cljs.core.chunk_first.call(null,seq__11136_11181__$1);
var G__11183 = cljs.core.chunk_rest.call(null,seq__11136_11181__$1);
var G__11184 = c__7220__auto___11182;
var G__11185 = cljs.core.count.call(null,c__7220__auto___11182);
var G__11186 = (0);
seq__11136_11171 = G__11183;
chunk__11137_11172 = G__11184;
count__11138_11173 = G__11185;
i__11139_11174 = G__11186;
continue;
} else {
var fld_11187 = cljs.core.first.call(null,seq__11136_11181__$1);
cljs.compiler.emitln.call(null,"this.",fld_11187," = ",fld_11187,";");

var G__11188 = cljs.core.next.call(null,seq__11136_11181__$1);
var G__11189 = null;
var G__11190 = (0);
var G__11191 = (0);
seq__11136_11171 = G__11188;
chunk__11137_11172 = G__11189;
count__11138_11173 = G__11190;
i__11139_11174 = G__11191;
continue;
}
} else {
}
}
break;
}

var seq__11140_11192 = cljs.core.seq.call(null,pmasks);
var chunk__11141_11193 = null;
var count__11142_11194 = (0);
var i__11143_11195 = (0);
while(true){
if((i__11143_11195 < count__11142_11194)){
var vec__11144_11196 = cljs.core._nth.call(null,chunk__11141_11193,i__11143_11195);
var pno_11197 = cljs.core.nth.call(null,vec__11144_11196,(0),null);
var pmask_11198 = cljs.core.nth.call(null,vec__11144_11196,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_11197,"$ = ",pmask_11198,";");

var G__11199 = seq__11140_11192;
var G__11200 = chunk__11141_11193;
var G__11201 = count__11142_11194;
var G__11202 = (i__11143_11195 + (1));
seq__11140_11192 = G__11199;
chunk__11141_11193 = G__11200;
count__11142_11194 = G__11201;
i__11143_11195 = G__11202;
continue;
} else {
var temp__4657__auto___11203 = cljs.core.seq.call(null,seq__11140_11192);
if(temp__4657__auto___11203){
var seq__11140_11204__$1 = temp__4657__auto___11203;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11140_11204__$1)){
var c__7220__auto___11205 = cljs.core.chunk_first.call(null,seq__11140_11204__$1);
var G__11206 = cljs.core.chunk_rest.call(null,seq__11140_11204__$1);
var G__11207 = c__7220__auto___11205;
var G__11208 = cljs.core.count.call(null,c__7220__auto___11205);
var G__11209 = (0);
seq__11140_11192 = G__11206;
chunk__11141_11193 = G__11207;
count__11142_11194 = G__11208;
i__11143_11195 = G__11209;
continue;
} else {
var vec__11147_11210 = cljs.core.first.call(null,seq__11140_11204__$1);
var pno_11211 = cljs.core.nth.call(null,vec__11147_11210,(0),null);
var pmask_11212 = cljs.core.nth.call(null,vec__11147_11210,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_11211,"$ = ",pmask_11212,";");

var G__11213 = cljs.core.next.call(null,seq__11140_11204__$1);
var G__11214 = null;
var G__11215 = (0);
var G__11216 = (0);
seq__11140_11192 = G__11213;
chunk__11141_11193 = G__11214;
count__11142_11194 = G__11215;
i__11143_11195 = G__11216;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,cljs.core.cst$kw$dot,(function (p__11217){
var map__11218 = p__11217;
var map__11218__$1 = ((((!((map__11218 == null)))?((((map__11218.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11218.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11218):map__11218);
var target = cljs.core.get.call(null,map__11218__$1,cljs.core.cst$kw$target);
var field = cljs.core.get.call(null,map__11218__$1,cljs.core.cst$kw$field);
var method = cljs.core.get.call(null,map__11218__$1,cljs.core.cst$kw$method);
var args = cljs.core.get.call(null,map__11218__$1,cljs.core.cst$kw$args);
var env = cljs.core.get.call(null,map__11218__$1,cljs.core.cst$kw$env);
var env__10108__auto__ = env;
if(cljs.core._EQ_.call(null,cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__10108__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep.call(null,args),")");
}

if(cljs.core._EQ_.call(null,cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__10108__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,cljs.core.cst$kw$js,(function (p__11220){
var map__11221 = p__11220;
var map__11221__$1 = ((((!((map__11221 == null)))?((((map__11221.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11221.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11221):map__11221);
var op = cljs.core.get.call(null,map__11221__$1,cljs.core.cst$kw$op);
var env = cljs.core.get.call(null,map__11221__$1,cljs.core.cst$kw$env);
var code = cljs.core.get.call(null,map__11221__$1,cljs.core.cst$kw$code);
var segs = cljs.core.get.call(null,map__11221__$1,cljs.core.cst$kw$segs);
var args = cljs.core.get.call(null,map__11221__$1,cljs.core.cst$kw$args);
if(cljs.core.truth_((function (){var and__6397__auto__ = code;
if(cljs.core.truth_(and__6397__auto__)){
return goog.string.startsWith(clojure.string.trim.call(null,code),"/*");
} else {
return and__6397__auto__;
}
})())){
return cljs.compiler.emits.call(null,code);
} else {
var env__10108__auto__ = env;
if(cljs.core._EQ_.call(null,cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__10108__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.call(null,code);
} else {
cljs.compiler.emits.call(null,cljs.core.interleave.call(null,cljs.core.concat.call(null,segs,cljs.core.repeat.call(null,null)),cljs.core.concat.call(null,args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.call(null,cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__10108__auto__))){
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
var seq__11235 = cljs.core.seq.call(null,table);
var chunk__11236 = null;
var count__11237 = (0);
var i__11238 = (0);
while(true){
if((i__11238 < count__11237)){
var vec__11239 = cljs.core._nth.call(null,chunk__11236,i__11238);
var sym = cljs.core.nth.call(null,vec__11239,(0),null);
var value = cljs.core.nth.call(null,vec__11239,(1),null);
var ns_11245 = cljs.core.namespace.call(null,sym);
var name_11246 = cljs.core.name.call(null,sym);
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

var G__11247 = seq__11235;
var G__11248 = chunk__11236;
var G__11249 = count__11237;
var G__11250 = (i__11238 + (1));
seq__11235 = G__11247;
chunk__11236 = G__11248;
count__11237 = G__11249;
i__11238 = G__11250;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__11235);
if(temp__4657__auto__){
var seq__11235__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11235__$1)){
var c__7220__auto__ = cljs.core.chunk_first.call(null,seq__11235__$1);
var G__11251 = cljs.core.chunk_rest.call(null,seq__11235__$1);
var G__11252 = c__7220__auto__;
var G__11253 = cljs.core.count.call(null,c__7220__auto__);
var G__11254 = (0);
seq__11235 = G__11251;
chunk__11236 = G__11252;
count__11237 = G__11253;
i__11238 = G__11254;
continue;
} else {
var vec__11242 = cljs.core.first.call(null,seq__11235__$1);
var sym = cljs.core.nth.call(null,vec__11242,(0),null);
var value = cljs.core.nth.call(null,vec__11242,(1),null);
var ns_11255 = cljs.core.namespace.call(null,sym);
var name_11256 = cljs.core.name.call(null,sym);
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

var G__11257 = cljs.core.next.call(null,seq__11235__$1);
var G__11258 = null;
var G__11259 = (0);
var G__11260 = (0);
seq__11235 = G__11257;
chunk__11236 = G__11258;
count__11237 = G__11259;
i__11238 = G__11260;
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