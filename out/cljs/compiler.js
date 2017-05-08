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
var map__9949 = s;
var map__9949__$1 = ((((!((map__9949 == null)))?((((map__9949.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9949.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9949):map__9949);
var name = cljs.core.get.call(null,map__9949__$1,cljs.core.cst$kw$name);
var info = cljs.core.get.call(null,map__9949__$1,cljs.core.cst$kw$info);
var d = (0);
var G__9952 = info;
var map__9953 = G__9952;
var map__9953__$1 = ((((!((map__9953 == null)))?((((map__9953.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9953.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9953):map__9953);
var shadow = cljs.core.get.call(null,map__9953__$1,cljs.core.cst$kw$shadow);
var d__$1 = d;
var G__9952__$1 = G__9952;
while(true){
var d__$2 = d__$1;
var map__9955 = G__9952__$1;
var map__9955__$1 = ((((!((map__9955 == null)))?((((map__9955.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9955.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9955):map__9955);
var shadow__$1 = cljs.core.get.call(null,map__9955__$1,cljs.core.cst$kw$shadow);
if(cljs.core.truth_(shadow__$1)){
var G__9957 = (d__$2 + (1));
var G__9958 = shadow__$1;
d__$1 = G__9957;
G__9952__$1 = G__9958;
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
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__9959){
var map__9964 = p__9959;
var map__9964__$1 = ((((!((map__9964 == null)))?((((map__9964.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9964.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9964):map__9964);
var name_var = map__9964__$1;
var name = cljs.core.get.call(null,map__9964__$1,cljs.core.cst$kw$name);
var info = cljs.core.get.call(null,map__9964__$1,cljs.core.cst$kw$info);
var name__$1 = clojure.string.replace.call(null,[cljs.core.str(name)].join(''),"..","_DOT__DOT_");
var map__9966 = info;
var map__9966__$1 = ((((!((map__9966 == null)))?((((map__9966.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9966.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9966):map__9966);
var ns = cljs.core.get.call(null,map__9966__$1,cljs.core.cst$kw$ns);
var fn_scope = cljs.core.get.call(null,map__9966__$1,cljs.core.cst$kw$fn_DASH_scope);
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
var args9968 = [];
var len__7484__auto___9971 = arguments.length;
var i__7485__auto___9972 = (0);
while(true){
if((i__7485__auto___9972 < len__7484__auto___9971)){
args9968.push((arguments[i__7485__auto___9972]));

var G__9973 = (i__7485__auto___9972 + (1));
i__7485__auto___9972 = G__9973;
continue;
} else {
}
break;
}

var G__9970 = args9968.length;
switch (G__9970) {
case 1:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9968.length)].join('')));

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
var G__9976 = cp;
switch (G__9976) {
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
var seq__9982_9986 = cljs.core.seq.call(null,s);
var chunk__9983_9987 = null;
var count__9984_9988 = (0);
var i__9985_9989 = (0);
while(true){
if((i__9985_9989 < count__9984_9988)){
var c_9990 = cljs.core._nth.call(null,chunk__9983_9987,i__9985_9989);
sb.append(cljs.compiler.escape_char.call(null,c_9990));

var G__9991 = seq__9982_9986;
var G__9992 = chunk__9983_9987;
var G__9993 = count__9984_9988;
var G__9994 = (i__9985_9989 + (1));
seq__9982_9986 = G__9991;
chunk__9983_9987 = G__9992;
count__9984_9988 = G__9993;
i__9985_9989 = G__9994;
continue;
} else {
var temp__4657__auto___9995 = cljs.core.seq.call(null,seq__9982_9986);
if(temp__4657__auto___9995){
var seq__9982_9996__$1 = temp__4657__auto___9995;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9982_9996__$1)){
var c__7220__auto___9997 = cljs.core.chunk_first.call(null,seq__9982_9996__$1);
var G__9998 = cljs.core.chunk_rest.call(null,seq__9982_9996__$1);
var G__9999 = c__7220__auto___9997;
var G__10000 = cljs.core.count.call(null,c__7220__auto___9997);
var G__10001 = (0);
seq__9982_9986 = G__9998;
chunk__9983_9987 = G__9999;
count__9984_9988 = G__10000;
i__9985_9989 = G__10001;
continue;
} else {
var c_10002 = cljs.core.first.call(null,seq__9982_9996__$1);
sb.append(cljs.compiler.escape_char.call(null,c_10002));

var G__10003 = cljs.core.next.call(null,seq__9982_9996__$1);
var G__10004 = null;
var G__10005 = (0);
var G__10006 = (0);
seq__9982_9986 = G__10003;
chunk__9983_9987 = G__10004;
count__9984_9988 = G__10005;
i__9985_9989 = G__10006;
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
var val__8098__auto__ = cljs.env._STAR_compiler_STAR_;
if((val__8098__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = cljs.env.default_compiler_env.call(null);
} else {
}

try{if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__10012_10017 = ast;
var map__10012_10018__$1 = ((((!((map__10012_10017 == null)))?((((map__10012_10017.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10012_10017.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10012_10017):map__10012_10017);
var env_10019 = cljs.core.get.call(null,map__10012_10018__$1,cljs.core.cst$kw$env);
if(cljs.core.truth_(cljs.core.cst$kw$line.cljs$core$IFn$_invoke$arity$1(env_10019))){
var map__10014_10020 = env_10019;
var map__10014_10021__$1 = ((((!((map__10014_10020 == null)))?((((map__10014_10020.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10014_10020.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10014_10020):map__10014_10020);
var line_10022 = cljs.core.get.call(null,map__10014_10021__$1,cljs.core.cst$kw$line);
var column_10023 = cljs.core.get.call(null,map__10014_10021__$1,cljs.core.cst$kw$column);
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,((function (map__10014_10020,map__10014_10021__$1,line_10022,column_10023,map__10012_10017,map__10012_10018__$1,env_10019,val__8098__auto__){
return (function (m){
var minfo = (function (){var G__10016 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$gcol,cljs.core.cst$kw$gen_DASH_col.cljs$core$IFn$_invoke$arity$1(m),cljs.core.cst$kw$gline,cljs.core.cst$kw$gen_DASH_line.cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core._EQ_.call(null,cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(ast),cljs.core.cst$kw$var)){
return cljs.core.assoc.call(null,G__10016,cljs.core.cst$kw$name,[cljs.core.str(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$info.cljs$core$IFn$_invoke$arity$1(ast)))].join(''));
} else {
return G__10016;
}
})();
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$source_DASH_map,(line_10022 - (1))], null),cljs.core.fnil.call(null,((function (minfo,map__10014_10020,map__10014_10021__$1,line_10022,column_10023,map__10012_10017,map__10012_10018__$1,env_10019,val__8098__auto__){
return (function (line__$1){
return cljs.core.update_in.call(null,line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_10023)?(column_10023 - (1)):(0))], null),cljs.core.fnil.call(null,((function (minfo,map__10014_10020,map__10014_10021__$1,line_10022,column_10023,map__10012_10017,map__10012_10018__$1,env_10019,val__8098__auto__){
return (function (column__$1){
return cljs.core.conj.call(null,column__$1,minfo);
});})(minfo,map__10014_10020,map__10014_10021__$1,line_10022,column_10023,map__10012_10017,map__10012_10018__$1,env_10019,val__8098__auto__))
,cljs.core.PersistentVector.EMPTY));
});})(minfo,map__10014_10020,map__10014_10021__$1,line_10022,column_10023,map__10012_10017,map__10012_10018__$1,env_10019,val__8098__auto__))
,cljs.core.sorted_map.call(null)));
});})(map__10014_10020,map__10014_10021__$1,line_10022,column_10023,map__10012_10017,map__10012_10018__$1,env_10019,val__8098__auto__))
);
} else {
}
} else {
}

return cljs.compiler.emit_STAR_.call(null,ast);
}finally {if((val__8098__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = null;
} else {
}
}});
cljs.compiler.emits = (function cljs$compiler$emits(var_args){
var args__7491__auto__ = [];
var len__7484__auto___10030 = arguments.length;
var i__7485__auto___10031 = (0);
while(true){
if((i__7485__auto___10031 < len__7484__auto___10030)){
args__7491__auto__.push((arguments[i__7485__auto___10031]));

var G__10032 = (i__7485__auto___10031 + (1));
i__7485__auto___10031 = G__10032;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((0) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((0)),(0),null)):null);
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(argseq__7492__auto__);
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
var seq__10026_10033 = cljs.core.seq.call(null,xs);
var chunk__10027_10034 = null;
var count__10028_10035 = (0);
var i__10029_10036 = (0);
while(true){
if((i__10029_10036 < count__10028_10035)){
var x_10037 = cljs.core._nth.call(null,chunk__10027_10034,i__10029_10036);
if((x_10037 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_10037)){
cljs.compiler.emit.call(null,x_10037);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_10037)){
cljs.core.apply.call(null,cljs.compiler.emits,x_10037);
} else {
if(goog.isFunction(x_10037)){
x_10037.call(null);
} else {
var s_10038 = cljs.core.print_str.call(null,x_10037);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$gen_DASH_col], null),((function (seq__10026_10033,chunk__10027_10034,count__10028_10035,i__10029_10036,s_10038,x_10037){
return (function (p1__10024_SHARP_){
return (p1__10024_SHARP_ + cljs.core.count.call(null,s_10038));
});})(seq__10026_10033,chunk__10027_10034,count__10028_10035,i__10029_10036,s_10038,x_10037))
);
}

cljs.core.print.call(null,s_10038);

}
}
}
}

var G__10039 = seq__10026_10033;
var G__10040 = chunk__10027_10034;
var G__10041 = count__10028_10035;
var G__10042 = (i__10029_10036 + (1));
seq__10026_10033 = G__10039;
chunk__10027_10034 = G__10040;
count__10028_10035 = G__10041;
i__10029_10036 = G__10042;
continue;
} else {
var temp__4657__auto___10043 = cljs.core.seq.call(null,seq__10026_10033);
if(temp__4657__auto___10043){
var seq__10026_10044__$1 = temp__4657__auto___10043;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10026_10044__$1)){
var c__7220__auto___10045 = cljs.core.chunk_first.call(null,seq__10026_10044__$1);
var G__10046 = cljs.core.chunk_rest.call(null,seq__10026_10044__$1);
var G__10047 = c__7220__auto___10045;
var G__10048 = cljs.core.count.call(null,c__7220__auto___10045);
var G__10049 = (0);
seq__10026_10033 = G__10046;
chunk__10027_10034 = G__10047;
count__10028_10035 = G__10048;
i__10029_10036 = G__10049;
continue;
} else {
var x_10050 = cljs.core.first.call(null,seq__10026_10044__$1);
if((x_10050 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_10050)){
cljs.compiler.emit.call(null,x_10050);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_10050)){
cljs.core.apply.call(null,cljs.compiler.emits,x_10050);
} else {
if(goog.isFunction(x_10050)){
x_10050.call(null);
} else {
var s_10051 = cljs.core.print_str.call(null,x_10050);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$gen_DASH_col], null),((function (seq__10026_10033,chunk__10027_10034,count__10028_10035,i__10029_10036,s_10051,x_10050,seq__10026_10044__$1,temp__4657__auto___10043){
return (function (p1__10024_SHARP_){
return (p1__10024_SHARP_ + cljs.core.count.call(null,s_10051));
});})(seq__10026_10033,chunk__10027_10034,count__10028_10035,i__10029_10036,s_10051,x_10050,seq__10026_10044__$1,temp__4657__auto___10043))
);
}

cljs.core.print.call(null,s_10051);

}
}
}
}

var G__10052 = cljs.core.next.call(null,seq__10026_10044__$1);
var G__10053 = null;
var G__10054 = (0);
var G__10055 = (0);
seq__10026_10033 = G__10052;
chunk__10027_10034 = G__10053;
count__10028_10035 = G__10054;
i__10029_10036 = G__10055;
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

cljs.compiler.emits.cljs$lang$applyTo = (function (seq10025){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10025));
});

cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var args__7491__auto__ = [];
var len__7484__auto___10060 = arguments.length;
var i__7485__auto___10061 = (0);
while(true){
if((i__7485__auto___10061 < len__7484__auto___10060)){
args__7491__auto__.push((arguments[i__7485__auto___10061]));

var G__10062 = (i__7485__auto___10061 + (1));
i__7485__auto___10061 = G__10062;
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
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,(function (p__10057){
var map__10058 = p__10057;
var map__10058__$1 = ((((!((map__10058 == null)))?((((map__10058.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10058.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10058):map__10058);
var m = map__10058__$1;
var gen_line = cljs.core.get.call(null,map__10058__$1,cljs.core.cst$kw$gen_DASH_line);
return cljs.core.assoc.call(null,m,cljs.core.cst$kw$gen_DASH_line,(gen_line + (1)),cljs.core.cst$kw$gen_DASH_col,(0));
}));
} else {
}

return null;
});

cljs.compiler.emitln.cljs$lang$maxFixedArity = (0);

cljs.compiler.emitln.cljs$lang$applyTo = (function (seq10056){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10056));
});

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__7395__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_10065_10067 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_10066_10068 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_10065_10067,_STAR_print_fn_STAR_10066_10068,sb__7395__auto__){
return (function (x__7396__auto__){
return sb__7395__auto__.append(x__7396__auto__);
});})(_STAR_print_newline_STAR_10065_10067,_STAR_print_fn_STAR_10066_10068,sb__7395__auto__))
;

try{cljs.compiler.emit.call(null,expr);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_10066_10068;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_10065_10067;
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
var vec__10069 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,[cljs.core.str(x)].join(''));
var _ = cljs.core.nth.call(null,vec__10069,(0),null);
var flags = cljs.core.nth.call(null,vec__10069,(1),null);
var pattern = cljs.core.nth.call(null,vec__10069,(2),null);
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,cljs.core.cst$kw$var,(function (p__10073){
var map__10074 = p__10073;
var map__10074__$1 = ((((!((map__10074 == null)))?((((map__10074.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10074.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10074):map__10074);
var arg = map__10074__$1;
var info = cljs.core.get.call(null,map__10074__$1,cljs.core.cst$kw$info);
var env = cljs.core.get.call(null,map__10074__$1,cljs.core.cst$kw$env);
var form = cljs.core.get.call(null,map__10074__$1,cljs.core.cst$kw$form);
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
var env__9933__auto__ = env;
if(cljs.core._EQ_.call(null,cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__9933__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,(function (){var G__10076 = info__$1;
if(cljs.core.not_EQ_.call(null,form,cljs.core.cst$sym$js_SLASH__DASH_Infinity)){
return cljs.compiler.munge.call(null,G__10076);
} else {
return G__10076;
}
})());

if(cljs.core._EQ_.call(null,cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__9933__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,cljs.core.cst$kw$var_DASH_special,(function (p__10077){
var map__10078 = p__10077;
var map__10078__$1 = ((((!((map__10078 == null)))?((((map__10078.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10078.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10078):map__10078);
var arg = map__10078__$1;
var env = cljs.core.get.call(null,map__10078__$1,cljs.core.cst$kw$env);
var var$ = cljs.core.get.call(null,map__10078__$1,cljs.core.cst$kw$var);
var sym = cljs.core.get.call(null,map__10078__$1,cljs.core.cst$kw$sym);
var meta = cljs.core.get.call(null,map__10078__$1,cljs.core.cst$kw$meta);
if(cljs.analyzer.ast_QMARK_.call(null,sym)){
} else {
throw (new Error("Assert failed: (ana/ast? sym)"));
}

if(cljs.analyzer.ast_QMARK_.call(null,meta)){
} else {
throw (new Error("Assert failed: (ana/ast? meta)"));
}

var map__10080 = cljs.core.cst$kw$info.cljs$core$IFn$_invoke$arity$1(var$);
var map__10080__$1 = ((((!((map__10080 == null)))?((((map__10080.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10080.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10080):map__10080);
var name = cljs.core.get.call(null,map__10080__$1,cljs.core.cst$kw$name);
var env__9933__auto__ = env;
if(cljs.core._EQ_.call(null,cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__9933__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"new cljs.core.Var(function(){return ",cljs.compiler.munge.call(null,name),";},",sym,",",meta,")");

if(cljs.core._EQ_.call(null,cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__9933__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,cljs.core.cst$kw$meta,(function (p__10082){
var map__10083 = p__10082;
var map__10083__$1 = ((((!((map__10083 == null)))?((((map__10083.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10083.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10083):map__10083);
var expr = cljs.core.get.call(null,map__10083__$1,cljs.core.cst$kw$expr);
var meta = cljs.core.get.call(null,map__10083__$1,cljs.core.cst$kw$meta);
var env = cljs.core.get.call(null,map__10083__$1,cljs.core.cst$kw$env);
var env__9933__auto__ = env;
if(cljs.core._EQ_.call(null,cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__9933__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"cljs.core.with_meta(",expr,",",meta,")");

if(cljs.core._EQ_.call(null,cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__9933__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.array_map_threshold = (8);
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
return (cljs.core.every_QMARK_.call(null,(function (p1__10085_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(p1__10085_SHARP_),cljs.core.cst$kw$constant);
}),keys)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,keys)),cljs.core.count.call(null,keys)));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,cljs.core.cst$kw$map,(function (p__10086){
var map__10087 = p__10086;
var map__10087__$1 = ((((!((map__10087 == null)))?((((map__10087.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10087.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10087):map__10087);
var env = cljs.core.get.call(null,map__10087__$1,cljs.core.cst$kw$env);
var keys = cljs.core.get.call(null,map__10087__$1,cljs.core.cst$kw$keys);
var vals = cljs.core.get.call(null,map__10087__$1,cljs.core.cst$kw$vals);
var env__9933__auto__ = env;
if(cljs.core._EQ_.call(null,cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__9933__auto__))){
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

if(cljs.core._EQ_.call(null,cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__9933__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,cljs.core.cst$kw$list,(function (p__10089){
var map__10090 = p__10089;
var map__10090__$1 = ((((!((map__10090 == null)))?((((map__10090.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10090.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10090):map__10090);
var items = cljs.core.get.call(null,map__10090__$1,cljs.core.cst$kw$items);
var env = cljs.core.get.call(null,map__10090__$1,cljs.core.cst$kw$env);
var env__9933__auto__ = env;
if(cljs.core._EQ_.call(null,cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__9933__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.List.EMPTY");
} else {
cljs.compiler.emits.call(null,"cljs.core.list(",cljs.compiler.comma_sep.call(null,items),")");
}

if(cljs.core._EQ_.call(null,cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__9933__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,cljs.core.cst$kw$vector,(function (p__10092){
var map__10093 = p__10092;
var map__10093__$1 = ((((!((map__10093 == null)))?((((map__10093.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10093.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10093):map__10093);
var items = cljs.core.get.call(null,map__10093__$1,cljs.core.cst$kw$items);
var env = cljs.core.get.call(null,map__10093__$1,cljs.core.cst$kw$env);
var env__9933__auto__ = env;
if(cljs.core._EQ_.call(null,cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__9933__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.PersistentVector.EMPTY");
} else {
var cnt_10095 = cljs.core.count.call(null,items);
if((cnt_10095 < (32))){
cljs.compiler.emits.call(null,"new cljs.core.PersistentVector(null, ",cnt_10095,", 5, cljs.core.PersistentVector.EMPTY_NODE, [",cljs.compiler.comma_sep.call(null,items),"], null)");
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentVector.fromArray([",cljs.compiler.comma_sep.call(null,items),"], true)");
}
}

if(cljs.core._EQ_.call(null,cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__9933__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
return (cljs.core.every_QMARK_.call(null,(function (p1__10096_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(p1__10096_SHARP_),cljs.core.cst$kw$constant);
}),items)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,items)),cljs.core.count.call(null,items)));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,cljs.core.cst$kw$set,(function (p__10097){
var map__10098 = p__10097;
var map__10098__$1 = ((((!((map__10098 == null)))?((((map__10098.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10098.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10098):map__10098);
var items = cljs.core.get.call(null,map__10098__$1,cljs.core.cst$kw$items);
var env = cljs.core.get.call(null,map__10098__$1,cljs.core.cst$kw$env);
var env__9933__auto__ = env;
if(cljs.core._EQ_.call(null,cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__9933__auto__))){
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

if(cljs.core._EQ_.call(null,cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__9933__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,cljs.core.cst$kw$js_DASH_value,(function (p__10100){
var map__10101 = p__10100;
var map__10101__$1 = ((((!((map__10101 == null)))?((((map__10101.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10101.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10101):map__10101);
var items = cljs.core.get.call(null,map__10101__$1,cljs.core.cst$kw$items);
var js_type = cljs.core.get.call(null,map__10101__$1,cljs.core.cst$kw$js_DASH_type);
var env = cljs.core.get.call(null,map__10101__$1,cljs.core.cst$kw$env);
var env__9933__auto__ = env;
if(cljs.core._EQ_.call(null,cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__9933__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core._EQ_.call(null,js_type,cljs.core.cst$kw$object)){
cljs.compiler.emits.call(null,"({");

var temp__4657__auto___10119 = cljs.core.seq.call(null,items);
if(temp__4657__auto___10119){
var items_10120__$1 = temp__4657__auto___10119;
var vec__10103_10121 = items_10120__$1;
var seq__10104_10122 = cljs.core.seq.call(null,vec__10103_10121);
var first__10105_10123 = cljs.core.first.call(null,seq__10104_10122);
var seq__10104_10124__$1 = cljs.core.next.call(null,seq__10104_10122);
var vec__10106_10125 = first__10105_10123;
var k_10126 = cljs.core.nth.call(null,vec__10106_10125,(0),null);
var v_10127 = cljs.core.nth.call(null,vec__10106_10125,(1),null);
var r_10128 = seq__10104_10124__$1;
cljs.compiler.emits.call(null,"\"",cljs.core.name.call(null,k_10126),"\": ",v_10127);

var seq__10109_10129 = cljs.core.seq.call(null,r_10128);
var chunk__10110_10130 = null;
var count__10111_10131 = (0);
var i__10112_10132 = (0);
while(true){
if((i__10112_10132 < count__10111_10131)){
var vec__10113_10133 = cljs.core._nth.call(null,chunk__10110_10130,i__10112_10132);
var k_10134__$1 = cljs.core.nth.call(null,vec__10113_10133,(0),null);
var v_10135__$1 = cljs.core.nth.call(null,vec__10113_10133,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_10134__$1),"\": ",v_10135__$1);

var G__10136 = seq__10109_10129;
var G__10137 = chunk__10110_10130;
var G__10138 = count__10111_10131;
var G__10139 = (i__10112_10132 + (1));
seq__10109_10129 = G__10136;
chunk__10110_10130 = G__10137;
count__10111_10131 = G__10138;
i__10112_10132 = G__10139;
continue;
} else {
var temp__4657__auto___10140__$1 = cljs.core.seq.call(null,seq__10109_10129);
if(temp__4657__auto___10140__$1){
var seq__10109_10141__$1 = temp__4657__auto___10140__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10109_10141__$1)){
var c__7220__auto___10142 = cljs.core.chunk_first.call(null,seq__10109_10141__$1);
var G__10143 = cljs.core.chunk_rest.call(null,seq__10109_10141__$1);
var G__10144 = c__7220__auto___10142;
var G__10145 = cljs.core.count.call(null,c__7220__auto___10142);
var G__10146 = (0);
seq__10109_10129 = G__10143;
chunk__10110_10130 = G__10144;
count__10111_10131 = G__10145;
i__10112_10132 = G__10146;
continue;
} else {
var vec__10116_10147 = cljs.core.first.call(null,seq__10109_10141__$1);
var k_10148__$1 = cljs.core.nth.call(null,vec__10116_10147,(0),null);
var v_10149__$1 = cljs.core.nth.call(null,vec__10116_10147,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_10148__$1),"\": ",v_10149__$1);

var G__10150 = cljs.core.next.call(null,seq__10109_10141__$1);
var G__10151 = null;
var G__10152 = (0);
var G__10153 = (0);
seq__10109_10129 = G__10150;
chunk__10110_10130 = G__10151;
count__10111_10131 = G__10152;
i__10112_10132 = G__10153;
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

if(cljs.core._EQ_.call(null,cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__9933__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,cljs.core.cst$kw$constant,(function (p__10154){
var map__10155 = p__10154;
var map__10155__$1 = ((((!((map__10155 == null)))?((((map__10155.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10155.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10155):map__10155);
var form = cljs.core.get.call(null,map__10155__$1,cljs.core.cst$kw$form);
var env = cljs.core.get.call(null,map__10155__$1,cljs.core.cst$kw$env);
if(cljs.core._EQ_.call(null,cljs.core.cst$kw$statement,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__9933__auto__ = env;
if(cljs.core._EQ_.call(null,cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__9933__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_constant.call(null,form);

if(cljs.core._EQ_.call(null,cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__9933__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(p__10157){
var map__10160 = p__10157;
var map__10160__$1 = ((((!((map__10160 == null)))?((((map__10160.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10160.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10160):map__10160);
var op = cljs.core.get.call(null,map__10160__$1,cljs.core.cst$kw$op);
var form = cljs.core.get.call(null,map__10160__$1,cljs.core.cst$kw$form);
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
cljs.compiler.falsey_constant_QMARK_ = (function cljs$compiler$falsey_constant_QMARK_(p__10162){
var map__10165 = p__10162;
var map__10165__$1 = ((((!((map__10165 == null)))?((((map__10165.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10165.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10165):map__10165);
var op = cljs.core.get.call(null,map__10165__$1,cljs.core.cst$kw$op);
var form = cljs.core.get.call(null,map__10165__$1,cljs.core.cst$kw$form);
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,cljs.core.cst$kw$if,(function (p__10167){
var map__10168 = p__10167;
var map__10168__$1 = ((((!((map__10168 == null)))?((((map__10168.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10168.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10168):map__10168);
var test = cljs.core.get.call(null,map__10168__$1,cljs.core.cst$kw$test);
var then = cljs.core.get.call(null,map__10168__$1,cljs.core.cst$kw$then);
var else$ = cljs.core.get.call(null,map__10168__$1,cljs.core.cst$kw$else);
var env = cljs.core.get.call(null,map__10168__$1,cljs.core.cst$kw$env);
var unchecked = cljs.core.get.call(null,map__10168__$1,cljs.core.cst$kw$unchecked);
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,cljs.core.cst$kw$case_STAR_,(function (p__10170){
var map__10171 = p__10170;
var map__10171__$1 = ((((!((map__10171 == null)))?((((map__10171.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10171.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10171):map__10171);
var v = cljs.core.get.call(null,map__10171__$1,cljs.core.cst$kw$v);
var tests = cljs.core.get.call(null,map__10171__$1,cljs.core.cst$kw$tests);
var thens = cljs.core.get.call(null,map__10171__$1,cljs.core.cst$kw$thens);
var default$ = cljs.core.get.call(null,map__10171__$1,cljs.core.cst$kw$default);
var env = cljs.core.get.call(null,map__10171__$1,cljs.core.cst$kw$env);
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

var seq__10173_10191 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),cljs.core.interleave.call(null,tests,thens)));
var chunk__10174_10192 = null;
var count__10175_10193 = (0);
var i__10176_10194 = (0);
while(true){
if((i__10176_10194 < count__10175_10193)){
var vec__10177_10195 = cljs.core._nth.call(null,chunk__10174_10192,i__10176_10194);
var ts_10196 = cljs.core.nth.call(null,vec__10177_10195,(0),null);
var then_10197 = cljs.core.nth.call(null,vec__10177_10195,(1),null);
var seq__10180_10198 = cljs.core.seq.call(null,ts_10196);
var chunk__10181_10199 = null;
var count__10182_10200 = (0);
var i__10183_10201 = (0);
while(true){
if((i__10183_10201 < count__10182_10200)){
var test_10202 = cljs.core._nth.call(null,chunk__10181_10199,i__10183_10201);
cljs.compiler.emitln.call(null,"case ",test_10202,":");

var G__10203 = seq__10180_10198;
var G__10204 = chunk__10181_10199;
var G__10205 = count__10182_10200;
var G__10206 = (i__10183_10201 + (1));
seq__10180_10198 = G__10203;
chunk__10181_10199 = G__10204;
count__10182_10200 = G__10205;
i__10183_10201 = G__10206;
continue;
} else {
var temp__4657__auto___10207 = cljs.core.seq.call(null,seq__10180_10198);
if(temp__4657__auto___10207){
var seq__10180_10208__$1 = temp__4657__auto___10207;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10180_10208__$1)){
var c__7220__auto___10209 = cljs.core.chunk_first.call(null,seq__10180_10208__$1);
var G__10210 = cljs.core.chunk_rest.call(null,seq__10180_10208__$1);
var G__10211 = c__7220__auto___10209;
var G__10212 = cljs.core.count.call(null,c__7220__auto___10209);
var G__10213 = (0);
seq__10180_10198 = G__10210;
chunk__10181_10199 = G__10211;
count__10182_10200 = G__10212;
i__10183_10201 = G__10213;
continue;
} else {
var test_10214 = cljs.core.first.call(null,seq__10180_10208__$1);
cljs.compiler.emitln.call(null,"case ",test_10214,":");

var G__10215 = cljs.core.next.call(null,seq__10180_10208__$1);
var G__10216 = null;
var G__10217 = (0);
var G__10218 = (0);
seq__10180_10198 = G__10215;
chunk__10181_10199 = G__10216;
count__10182_10200 = G__10217;
i__10183_10201 = G__10218;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_10197);
} else {
cljs.compiler.emitln.call(null,then_10197);
}

cljs.compiler.emitln.call(null,"break;");

var G__10219 = seq__10173_10191;
var G__10220 = chunk__10174_10192;
var G__10221 = count__10175_10193;
var G__10222 = (i__10176_10194 + (1));
seq__10173_10191 = G__10219;
chunk__10174_10192 = G__10220;
count__10175_10193 = G__10221;
i__10176_10194 = G__10222;
continue;
} else {
var temp__4657__auto___10223 = cljs.core.seq.call(null,seq__10173_10191);
if(temp__4657__auto___10223){
var seq__10173_10224__$1 = temp__4657__auto___10223;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10173_10224__$1)){
var c__7220__auto___10225 = cljs.core.chunk_first.call(null,seq__10173_10224__$1);
var G__10226 = cljs.core.chunk_rest.call(null,seq__10173_10224__$1);
var G__10227 = c__7220__auto___10225;
var G__10228 = cljs.core.count.call(null,c__7220__auto___10225);
var G__10229 = (0);
seq__10173_10191 = G__10226;
chunk__10174_10192 = G__10227;
count__10175_10193 = G__10228;
i__10176_10194 = G__10229;
continue;
} else {
var vec__10184_10230 = cljs.core.first.call(null,seq__10173_10224__$1);
var ts_10231 = cljs.core.nth.call(null,vec__10184_10230,(0),null);
var then_10232 = cljs.core.nth.call(null,vec__10184_10230,(1),null);
var seq__10187_10233 = cljs.core.seq.call(null,ts_10231);
var chunk__10188_10234 = null;
var count__10189_10235 = (0);
var i__10190_10236 = (0);
while(true){
if((i__10190_10236 < count__10189_10235)){
var test_10237 = cljs.core._nth.call(null,chunk__10188_10234,i__10190_10236);
cljs.compiler.emitln.call(null,"case ",test_10237,":");

var G__10238 = seq__10187_10233;
var G__10239 = chunk__10188_10234;
var G__10240 = count__10189_10235;
var G__10241 = (i__10190_10236 + (1));
seq__10187_10233 = G__10238;
chunk__10188_10234 = G__10239;
count__10189_10235 = G__10240;
i__10190_10236 = G__10241;
continue;
} else {
var temp__4657__auto___10242__$1 = cljs.core.seq.call(null,seq__10187_10233);
if(temp__4657__auto___10242__$1){
var seq__10187_10243__$1 = temp__4657__auto___10242__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10187_10243__$1)){
var c__7220__auto___10244 = cljs.core.chunk_first.call(null,seq__10187_10243__$1);
var G__10245 = cljs.core.chunk_rest.call(null,seq__10187_10243__$1);
var G__10246 = c__7220__auto___10244;
var G__10247 = cljs.core.count.call(null,c__7220__auto___10244);
var G__10248 = (0);
seq__10187_10233 = G__10245;
chunk__10188_10234 = G__10246;
count__10189_10235 = G__10247;
i__10190_10236 = G__10248;
continue;
} else {
var test_10249 = cljs.core.first.call(null,seq__10187_10243__$1);
cljs.compiler.emitln.call(null,"case ",test_10249,":");

var G__10250 = cljs.core.next.call(null,seq__10187_10243__$1);
var G__10251 = null;
var G__10252 = (0);
var G__10253 = (0);
seq__10187_10233 = G__10250;
chunk__10188_10234 = G__10251;
count__10189_10235 = G__10252;
i__10190_10236 = G__10253;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_10232);
} else {
cljs.compiler.emitln.call(null,then_10232);
}

cljs.compiler.emitln.call(null,"break;");

var G__10254 = cljs.core.next.call(null,seq__10173_10224__$1);
var G__10255 = null;
var G__10256 = (0);
var G__10257 = (0);
seq__10173_10191 = G__10254;
chunk__10174_10192 = G__10255;
count__10175_10193 = G__10256;
i__10176_10194 = G__10257;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,cljs.core.cst$kw$throw,(function (p__10258){
var map__10259 = p__10258;
var map__10259__$1 = ((((!((map__10259 == null)))?((((map__10259.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10259.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10259):map__10259);
var throw$ = cljs.core.get.call(null,map__10259__$1,cljs.core.cst$kw$throw);
var env = cljs.core.get.call(null,map__10259__$1,cljs.core.cst$kw$env);
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
var vec__10266 = ((!(((-1) === idx)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,t,(0),idx),cljs.core.subs.call(null,t,(idx + (1)),cljs.core.count.call(null,t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.call(null,vec__10266,(0),null);
var rstr = cljs.core.nth.call(null,vec__10266,(1),null);
var ret_t = (cljs.core.truth_(rstr)?cljs$compiler$resolve_type.call(null,env,rstr):null);
var axstr = cljs.core.subs.call(null,fstr,(9),(cljs.core.count.call(null,fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_.call(null,axstr))?null:cljs.core.map.call(null,cljs.core.comp.call(null,((function (idx,vec__10266,fstr,rstr,ret_t,axstr){
return (function (p1__10261_SHARP_){
return cljs$compiler$resolve_type.call(null,env,p1__10261_SHARP_);
});})(idx,vec__10266,fstr,rstr,ret_t,axstr))
,clojure.string.trim),clojure.string.split.call(null,axstr,/,/)));
var G__10269 = [cljs.core.str("function("),cljs.core.str(clojure.string.join.call(null,",",args_ts)),cljs.core.str(")")].join('');
if(cljs.core.truth_(ret_t)){
return [cljs.core.str(G__10269),cljs.core.str(":"),cljs.core.str(ret_t)].join('');
} else {
return G__10269;
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
return (function (p1__10270_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__10270_SHARP_);
});})(ts__$1,xs))
,xs))),cljs.core.str("}")].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find.call(null,/@param/,line))){
var vec__10277 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__10278 = cljs.core.seq.call(null,vec__10277);
var first__10279 = cljs.core.first.call(null,seq__10278);
var seq__10278__$1 = cljs.core.next.call(null,seq__10278);
var p = first__10279;
var first__10279__$1 = cljs.core.first.call(null,seq__10278__$1);
var seq__10278__$2 = cljs.core.next.call(null,seq__10278__$1);
var ts = first__10279__$1;
var first__10279__$2 = cljs.core.first.call(null,seq__10278__$2);
var seq__10278__$3 = cljs.core.next.call(null,seq__10278__$2);
var n = first__10279__$2;
var xs = seq__10278__$3;
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
var vec__10280 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__10281 = cljs.core.seq.call(null,vec__10280);
var first__10282 = cljs.core.first.call(null,seq__10281);
var seq__10281__$1 = cljs.core.next.call(null,seq__10281);
var p = first__10282;
var first__10282__$1 = cljs.core.first.call(null,seq__10281__$1);
var seq__10281__$2 = cljs.core.next.call(null,seq__10281__$1);
var ts = first__10282__$1;
var xs = seq__10281__$2;
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
var args10284 = [];
var len__7484__auto___10319 = arguments.length;
var i__7485__auto___10320 = (0);
while(true){
if((i__7485__auto___10320 < len__7484__auto___10319)){
args10284.push((arguments[i__7485__auto___10320]));

var G__10321 = (i__7485__auto___10320 + (1));
i__7485__auto___10320 = G__10321;
continue;
} else {
}
break;
}

var G__10286 = args10284.length;
switch (G__10286) {
case 2:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10284.length)].join('')));

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
var vec__10308 = cljs.core.map.call(null,((function (docs,docs__$1,docs__$2){
return (function (p1__10283_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))){
return cljs.compiler.munge_param_return.call(null,env,p1__10283_SHARP_);
} else {
return p1__10283_SHARP_;
}
});})(docs,docs__$1,docs__$2))
,clojure.string.split_lines.call(null,e));
var seq__10309 = cljs.core.seq.call(null,vec__10308);
var first__10310 = cljs.core.first.call(null,seq__10309);
var seq__10309__$1 = cljs.core.next.call(null,seq__10309);
var x = first__10310;
var ys = seq__10309__$1;
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,x,"*/","* /"));

var seq__10311 = cljs.core.seq.call(null,ys);
var chunk__10312 = null;
var count__10313 = (0);
var i__10314 = (0);
while(true){
if((i__10314 < count__10313)){
var next_line = cljs.core._nth.call(null,chunk__10312,i__10314);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));

var G__10323 = seq__10311;
var G__10324 = chunk__10312;
var G__10325 = count__10313;
var G__10326 = (i__10314 + (1));
seq__10311 = G__10323;
chunk__10312 = G__10324;
count__10313 = G__10325;
i__10314 = G__10326;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__10311);
if(temp__4657__auto__){
var seq__10311__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10311__$1)){
var c__7220__auto__ = cljs.core.chunk_first.call(null,seq__10311__$1);
var G__10327 = cljs.core.chunk_rest.call(null,seq__10311__$1);
var G__10328 = c__7220__auto__;
var G__10329 = cljs.core.count.call(null,c__7220__auto__);
var G__10330 = (0);
seq__10311 = G__10327;
chunk__10312 = G__10328;
count__10313 = G__10329;
i__10314 = G__10330;
continue;
} else {
var next_line = cljs.core.first.call(null,seq__10311__$1);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));

var G__10331 = cljs.core.next.call(null,seq__10311__$1);
var G__10332 = null;
var G__10333 = (0);
var G__10334 = (0);
seq__10311 = G__10331;
chunk__10312 = G__10332;
count__10313 = G__10333;
i__10314 = G__10334;
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

var seq__10315_10335 = cljs.core.seq.call(null,docs__$2);
var chunk__10316_10336 = null;
var count__10317_10337 = (0);
var i__10318_10338 = (0);
while(true){
if((i__10318_10338 < count__10317_10337)){
var e_10339 = cljs.core._nth.call(null,chunk__10316_10336,i__10318_10338);
if(cljs.core.truth_(e_10339)){
print_comment_lines.call(null,e_10339);
} else {
}

var G__10340 = seq__10315_10335;
var G__10341 = chunk__10316_10336;
var G__10342 = count__10317_10337;
var G__10343 = (i__10318_10338 + (1));
seq__10315_10335 = G__10340;
chunk__10316_10336 = G__10341;
count__10317_10337 = G__10342;
i__10318_10338 = G__10343;
continue;
} else {
var temp__4657__auto___10344 = cljs.core.seq.call(null,seq__10315_10335);
if(temp__4657__auto___10344){
var seq__10315_10345__$1 = temp__4657__auto___10344;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10315_10345__$1)){
var c__7220__auto___10346 = cljs.core.chunk_first.call(null,seq__10315_10345__$1);
var G__10347 = cljs.core.chunk_rest.call(null,seq__10315_10345__$1);
var G__10348 = c__7220__auto___10346;
var G__10349 = cljs.core.count.call(null,c__7220__auto___10346);
var G__10350 = (0);
seq__10315_10335 = G__10347;
chunk__10316_10336 = G__10348;
count__10317_10337 = G__10349;
i__10318_10338 = G__10350;
continue;
} else {
var e_10351 = cljs.core.first.call(null,seq__10315_10345__$1);
if(cljs.core.truth_(e_10351)){
print_comment_lines.call(null,e_10351);
} else {
}

var G__10352 = cljs.core.next.call(null,seq__10315_10345__$1);
var G__10353 = null;
var G__10354 = (0);
var G__10355 = (0);
seq__10315_10335 = G__10352;
chunk__10316_10336 = G__10353;
count__10317_10337 = G__10354;
i__10318_10338 = G__10355;
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
return (function (p1__10357_SHARP_){
return goog.string.startsWith(p1__10357_SHARP_,"@define");
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,cljs.core.cst$kw$def,(function (p__10358){
var map__10359 = p__10358;
var map__10359__$1 = ((((!((map__10359 == null)))?((((map__10359.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10359.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10359):map__10359);
var name = cljs.core.get.call(null,map__10359__$1,cljs.core.cst$kw$name);
var var$ = cljs.core.get.call(null,map__10359__$1,cljs.core.cst$kw$var);
var init = cljs.core.get.call(null,map__10359__$1,cljs.core.cst$kw$init);
var env = cljs.core.get.call(null,map__10359__$1,cljs.core.cst$kw$env);
var doc = cljs.core.get.call(null,map__10359__$1,cljs.core.cst$kw$doc);
var jsdoc = cljs.core.get.call(null,map__10359__$1,cljs.core.cst$kw$jsdoc);
var export$ = cljs.core.get.call(null,map__10359__$1,cljs.core.cst$kw$export);
var test = cljs.core.get.call(null,map__10359__$1,cljs.core.cst$kw$test);
var var_ast = cljs.core.get.call(null,map__10359__$1,cljs.core.cst$kw$var_DASH_ast);
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
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__10361){
var map__10382 = p__10361;
var map__10382__$1 = ((((!((map__10382 == null)))?((((map__10382.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10382.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10382):map__10382);
var name = cljs.core.get.call(null,map__10382__$1,cljs.core.cst$kw$name);
var params = cljs.core.get.call(null,map__10382__$1,cljs.core.cst$kw$params);
var env = cljs.core.get.call(null,map__10382__$1,cljs.core.cst$kw$env);
var arglist = cljs.core.gensym.call(null,"arglist__");
var delegate_name = [cljs.core.str(cljs.compiler.munge.call(null,name)),cljs.core.str("__delegate")].join('');
cljs.compiler.emitln.call(null,"(function (",arglist,"){");

var seq__10384_10402 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.drop_last.call(null,(2),params)));
var chunk__10385_10403 = null;
var count__10386_10404 = (0);
var i__10387_10405 = (0);
while(true){
if((i__10387_10405 < count__10386_10404)){
var vec__10388_10406 = cljs.core._nth.call(null,chunk__10385_10403,i__10387_10405);
var i_10407 = cljs.core.nth.call(null,vec__10388_10406,(0),null);
var param_10408 = cljs.core.nth.call(null,vec__10388_10406,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_10408);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");

var G__10409 = seq__10384_10402;
var G__10410 = chunk__10385_10403;
var G__10411 = count__10386_10404;
var G__10412 = (i__10387_10405 + (1));
seq__10384_10402 = G__10409;
chunk__10385_10403 = G__10410;
count__10386_10404 = G__10411;
i__10387_10405 = G__10412;
continue;
} else {
var temp__4657__auto___10413 = cljs.core.seq.call(null,seq__10384_10402);
if(temp__4657__auto___10413){
var seq__10384_10414__$1 = temp__4657__auto___10413;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10384_10414__$1)){
var c__7220__auto___10415 = cljs.core.chunk_first.call(null,seq__10384_10414__$1);
var G__10416 = cljs.core.chunk_rest.call(null,seq__10384_10414__$1);
var G__10417 = c__7220__auto___10415;
var G__10418 = cljs.core.count.call(null,c__7220__auto___10415);
var G__10419 = (0);
seq__10384_10402 = G__10416;
chunk__10385_10403 = G__10417;
count__10386_10404 = G__10418;
i__10387_10405 = G__10419;
continue;
} else {
var vec__10391_10420 = cljs.core.first.call(null,seq__10384_10414__$1);
var i_10421 = cljs.core.nth.call(null,vec__10391_10420,(0),null);
var param_10422 = cljs.core.nth.call(null,vec__10391_10420,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_10422);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");

var G__10423 = cljs.core.next.call(null,seq__10384_10414__$1);
var G__10424 = null;
var G__10425 = (0);
var G__10426 = (0);
seq__10384_10402 = G__10423;
chunk__10385_10403 = G__10424;
count__10386_10404 = G__10425;
i__10387_10405 = G__10426;
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

var seq__10394_10427 = cljs.core.seq.call(null,params);
var chunk__10395_10428 = null;
var count__10396_10429 = (0);
var i__10397_10430 = (0);
while(true){
if((i__10397_10430 < count__10396_10429)){
var param_10431 = cljs.core._nth.call(null,chunk__10395_10428,i__10397_10430);
cljs.compiler.emit.call(null,param_10431);

if(cljs.core._EQ_.call(null,param_10431,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__10432 = seq__10394_10427;
var G__10433 = chunk__10395_10428;
var G__10434 = count__10396_10429;
var G__10435 = (i__10397_10430 + (1));
seq__10394_10427 = G__10432;
chunk__10395_10428 = G__10433;
count__10396_10429 = G__10434;
i__10397_10430 = G__10435;
continue;
} else {
var temp__4657__auto___10436 = cljs.core.seq.call(null,seq__10394_10427);
if(temp__4657__auto___10436){
var seq__10394_10437__$1 = temp__4657__auto___10436;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10394_10437__$1)){
var c__7220__auto___10438 = cljs.core.chunk_first.call(null,seq__10394_10437__$1);
var G__10439 = cljs.core.chunk_rest.call(null,seq__10394_10437__$1);
var G__10440 = c__7220__auto___10438;
var G__10441 = cljs.core.count.call(null,c__7220__auto___10438);
var G__10442 = (0);
seq__10394_10427 = G__10439;
chunk__10395_10428 = G__10440;
count__10396_10429 = G__10441;
i__10397_10430 = G__10442;
continue;
} else {
var param_10443 = cljs.core.first.call(null,seq__10394_10437__$1);
cljs.compiler.emit.call(null,param_10443);

if(cljs.core._EQ_.call(null,param_10443,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__10444 = cljs.core.next.call(null,seq__10394_10437__$1);
var G__10445 = null;
var G__10446 = (0);
var G__10447 = (0);
seq__10394_10427 = G__10444;
chunk__10395_10428 = G__10445;
count__10396_10429 = G__10446;
i__10397_10430 = G__10447;
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

var seq__10398_10448 = cljs.core.seq.call(null,params);
var chunk__10399_10449 = null;
var count__10400_10450 = (0);
var i__10401_10451 = (0);
while(true){
if((i__10401_10451 < count__10400_10450)){
var param_10452 = cljs.core._nth.call(null,chunk__10399_10449,i__10401_10451);
cljs.compiler.emit.call(null,param_10452);

if(cljs.core._EQ_.call(null,param_10452,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__10453 = seq__10398_10448;
var G__10454 = chunk__10399_10449;
var G__10455 = count__10400_10450;
var G__10456 = (i__10401_10451 + (1));
seq__10398_10448 = G__10453;
chunk__10399_10449 = G__10454;
count__10400_10450 = G__10455;
i__10401_10451 = G__10456;
continue;
} else {
var temp__4657__auto___10457 = cljs.core.seq.call(null,seq__10398_10448);
if(temp__4657__auto___10457){
var seq__10398_10458__$1 = temp__4657__auto___10457;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10398_10458__$1)){
var c__7220__auto___10459 = cljs.core.chunk_first.call(null,seq__10398_10458__$1);
var G__10460 = cljs.core.chunk_rest.call(null,seq__10398_10458__$1);
var G__10461 = c__7220__auto___10459;
var G__10462 = cljs.core.count.call(null,c__7220__auto___10459);
var G__10463 = (0);
seq__10398_10448 = G__10460;
chunk__10399_10449 = G__10461;
count__10400_10450 = G__10462;
i__10401_10451 = G__10463;
continue;
} else {
var param_10464 = cljs.core.first.call(null,seq__10398_10458__$1);
cljs.compiler.emit.call(null,param_10464);

if(cljs.core._EQ_.call(null,param_10464,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__10465 = cljs.core.next.call(null,seq__10398_10458__$1);
var G__10466 = null;
var G__10467 = (0);
var G__10468 = (0);
seq__10398_10448 = G__10465;
chunk__10399_10449 = G__10466;
count__10400_10450 = G__10467;
i__10401_10451 = G__10468;
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
var seq__10473 = cljs.core.seq.call(null,params);
var chunk__10474 = null;
var count__10475 = (0);
var i__10476 = (0);
while(true){
if((i__10476 < count__10475)){
var param = cljs.core._nth.call(null,chunk__10474,i__10476);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__10477 = seq__10473;
var G__10478 = chunk__10474;
var G__10479 = count__10475;
var G__10480 = (i__10476 + (1));
seq__10473 = G__10477;
chunk__10474 = G__10478;
count__10475 = G__10479;
i__10476 = G__10480;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__10473);
if(temp__4657__auto__){
var seq__10473__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10473__$1)){
var c__7220__auto__ = cljs.core.chunk_first.call(null,seq__10473__$1);
var G__10481 = cljs.core.chunk_rest.call(null,seq__10473__$1);
var G__10482 = c__7220__auto__;
var G__10483 = cljs.core.count.call(null,c__7220__auto__);
var G__10484 = (0);
seq__10473 = G__10481;
chunk__10474 = G__10482;
count__10475 = G__10483;
i__10476 = G__10484;
continue;
} else {
var param = cljs.core.first.call(null,seq__10473__$1);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__10485 = cljs.core.next.call(null,seq__10473__$1);
var G__10486 = null;
var G__10487 = (0);
var G__10488 = (0);
seq__10473 = G__10485;
chunk__10474 = G__10486;
count__10475 = G__10487;
i__10476 = G__10488;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__10489){
var map__10492 = p__10489;
var map__10492__$1 = ((((!((map__10492 == null)))?((((map__10492.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10492.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10492):map__10492);
var type = cljs.core.get.call(null,map__10492__$1,cljs.core.cst$kw$type);
var name = cljs.core.get.call(null,map__10492__$1,cljs.core.cst$kw$name);
var variadic = cljs.core.get.call(null,map__10492__$1,cljs.core.cst$kw$variadic);
var params = cljs.core.get.call(null,map__10492__$1,cljs.core.cst$kw$params);
var expr = cljs.core.get.call(null,map__10492__$1,cljs.core.cst$kw$expr);
var env = cljs.core.get.call(null,map__10492__$1,cljs.core.cst$kw$env);
var recurs = cljs.core.get.call(null,map__10492__$1,cljs.core.cst$kw$recurs);
var max_fixed_arity = cljs.core.get.call(null,map__10492__$1,cljs.core.cst$kw$max_DASH_fixed_DASH_arity);
var env__9933__auto__ = env;
if(cljs.core._EQ_.call(null,cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__9933__auto__))){
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

if(cljs.core._EQ_.call(null,cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__9933__auto__))){
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
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__10494){
var map__10505 = p__10494;
var map__10505__$1 = ((((!((map__10505 == null)))?((((map__10505.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10505.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10505):map__10505);
var f = map__10505__$1;
var type = cljs.core.get.call(null,map__10505__$1,cljs.core.cst$kw$type);
var name = cljs.core.get.call(null,map__10505__$1,cljs.core.cst$kw$name);
var variadic = cljs.core.get.call(null,map__10505__$1,cljs.core.cst$kw$variadic);
var params = cljs.core.get.call(null,map__10505__$1,cljs.core.cst$kw$params);
var expr = cljs.core.get.call(null,map__10505__$1,cljs.core.cst$kw$expr);
var env = cljs.core.get.call(null,map__10505__$1,cljs.core.cst$kw$env);
var recurs = cljs.core.get.call(null,map__10505__$1,cljs.core.cst$kw$recurs);
var max_fixed_arity = cljs.core.get.call(null,map__10505__$1,cljs.core.cst$kw$max_DASH_fixed_DASH_arity);
var env__9933__auto__ = env;
if(cljs.core._EQ_.call(null,cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__9933__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var name_10515__$1 = (function (){var or__6409__auto__ = name;
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_10516 = cljs.compiler.munge.call(null,name_10515__$1);
var delegate_name_10517 = [cljs.core.str(mname_10516),cljs.core.str("__delegate")].join('');
cljs.compiler.emitln.call(null,"(function() { ");

cljs.compiler.emits.call(null,"var ",delegate_name_10517," = function (");

var seq__10507_10518 = cljs.core.seq.call(null,params);
var chunk__10508_10519 = null;
var count__10509_10520 = (0);
var i__10510_10521 = (0);
while(true){
if((i__10510_10521 < count__10509_10520)){
var param_10522 = cljs.core._nth.call(null,chunk__10508_10519,i__10510_10521);
cljs.compiler.emit.call(null,param_10522);

if(cljs.core._EQ_.call(null,param_10522,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__10523 = seq__10507_10518;
var G__10524 = chunk__10508_10519;
var G__10525 = count__10509_10520;
var G__10526 = (i__10510_10521 + (1));
seq__10507_10518 = G__10523;
chunk__10508_10519 = G__10524;
count__10509_10520 = G__10525;
i__10510_10521 = G__10526;
continue;
} else {
var temp__4657__auto___10527 = cljs.core.seq.call(null,seq__10507_10518);
if(temp__4657__auto___10527){
var seq__10507_10528__$1 = temp__4657__auto___10527;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10507_10528__$1)){
var c__7220__auto___10529 = cljs.core.chunk_first.call(null,seq__10507_10528__$1);
var G__10530 = cljs.core.chunk_rest.call(null,seq__10507_10528__$1);
var G__10531 = c__7220__auto___10529;
var G__10532 = cljs.core.count.call(null,c__7220__auto___10529);
var G__10533 = (0);
seq__10507_10518 = G__10530;
chunk__10508_10519 = G__10531;
count__10509_10520 = G__10532;
i__10510_10521 = G__10533;
continue;
} else {
var param_10534 = cljs.core.first.call(null,seq__10507_10528__$1);
cljs.compiler.emit.call(null,param_10534);

if(cljs.core._EQ_.call(null,param_10534,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__10535 = cljs.core.next.call(null,seq__10507_10528__$1);
var G__10536 = null;
var G__10537 = (0);
var G__10538 = (0);
seq__10507_10518 = G__10535;
chunk__10508_10519 = G__10536;
count__10509_10520 = G__10537;
i__10510_10521 = G__10538;
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

cljs.compiler.emitln.call(null,"var ",mname_10516," = function (",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$var_args], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",(cljs.core.count.call(null,params) - (1)),") {");

var a_10539 = cljs.compiler.emit_arguments_to_array.call(null,(cljs.core.count.call(null,params) - (1)));
cljs.compiler.emitln.call(null,"  ",cljs.core.last.call(null,params)," = new cljs.core.IndexedSeq(",a_10539,",0);");

cljs.compiler.emitln.call(null,"} ");
} else {
}

cljs.compiler.emits.call(null,"return ",delegate_name_10517,".call(this,");

var seq__10511_10540 = cljs.core.seq.call(null,params);
var chunk__10512_10541 = null;
var count__10513_10542 = (0);
var i__10514_10543 = (0);
while(true){
if((i__10514_10543 < count__10513_10542)){
var param_10544 = cljs.core._nth.call(null,chunk__10512_10541,i__10514_10543);
cljs.compiler.emit.call(null,param_10544);

if(cljs.core._EQ_.call(null,param_10544,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__10545 = seq__10511_10540;
var G__10546 = chunk__10512_10541;
var G__10547 = count__10513_10542;
var G__10548 = (i__10514_10543 + (1));
seq__10511_10540 = G__10545;
chunk__10512_10541 = G__10546;
count__10513_10542 = G__10547;
i__10514_10543 = G__10548;
continue;
} else {
var temp__4657__auto___10549 = cljs.core.seq.call(null,seq__10511_10540);
if(temp__4657__auto___10549){
var seq__10511_10550__$1 = temp__4657__auto___10549;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10511_10550__$1)){
var c__7220__auto___10551 = cljs.core.chunk_first.call(null,seq__10511_10550__$1);
var G__10552 = cljs.core.chunk_rest.call(null,seq__10511_10550__$1);
var G__10553 = c__7220__auto___10551;
var G__10554 = cljs.core.count.call(null,c__7220__auto___10551);
var G__10555 = (0);
seq__10511_10540 = G__10552;
chunk__10512_10541 = G__10553;
count__10513_10542 = G__10554;
i__10514_10543 = G__10555;
continue;
} else {
var param_10556 = cljs.core.first.call(null,seq__10511_10550__$1);
cljs.compiler.emit.call(null,param_10556);

if(cljs.core._EQ_.call(null,param_10556,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__10557 = cljs.core.next.call(null,seq__10511_10550__$1);
var G__10558 = null;
var G__10559 = (0);
var G__10560 = (0);
seq__10511_10540 = G__10557;
chunk__10512_10541 = G__10558;
count__10513_10542 = G__10559;
i__10514_10543 = G__10560;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,");");

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,mname_10516,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.call(null,mname_10516,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to.call(null,cljs.core.assoc.call(null,f,cljs.core.cst$kw$name,name_10515__$1));

cljs.compiler.emitln.call(null,";");

cljs.compiler.emitln.call(null,mname_10516,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_10517,";");

cljs.compiler.emitln.call(null,"return ",mname_10516,";");

cljs.compiler.emitln.call(null,"})()");

if(cljs.core._EQ_.call(null,cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__9933__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,cljs.core.cst$kw$fn,(function (p__10564){
var map__10565 = p__10564;
var map__10565__$1 = ((((!((map__10565 == null)))?((((map__10565.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10565.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10565):map__10565);
var name = cljs.core.get.call(null,map__10565__$1,cljs.core.cst$kw$name);
var env = cljs.core.get.call(null,map__10565__$1,cljs.core.cst$kw$env);
var methods$ = cljs.core.get.call(null,map__10565__$1,cljs.core.cst$kw$methods);
var max_fixed_arity = cljs.core.get.call(null,map__10565__$1,cljs.core.cst$kw$max_DASH_fixed_DASH_arity);
var variadic = cljs.core.get.call(null,map__10565__$1,cljs.core.cst$kw$variadic);
var recur_frames = cljs.core.get.call(null,map__10565__$1,cljs.core.cst$kw$recur_DASH_frames);
var loop_lets = cljs.core.get.call(null,map__10565__$1,cljs.core.cst$kw$loop_DASH_lets);
if(cljs.core._EQ_.call(null,cljs.core.cst$kw$statement,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var loop_locals = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.compiler.munge,cljs.core.concat.call(null,cljs.core.mapcat.call(null,cljs.core.cst$kw$params,cljs.core.filter.call(null,((function (map__10565,map__10565__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__10561_SHARP_){
var and__6397__auto__ = p1__10561_SHARP_;
if(cljs.core.truth_(and__6397__auto__)){
return cljs.core.deref.call(null,cljs.core.cst$kw$flag.cljs$core$IFn$_invoke$arity$1(p1__10561_SHARP_));
} else {
return and__6397__auto__;
}
});})(map__10565,map__10565__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
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
var name_10600__$1 = (function (){var or__6409__auto__ = name;
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_10601 = cljs.compiler.munge.call(null,name_10600__$1);
var maxparams_10602 = cljs.core.apply.call(null,cljs.core.max_key,cljs.core.count,cljs.core.map.call(null,cljs.core.cst$kw$params,methods$));
var mmap_10603 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (name_10600__$1,mname_10601,maxparams_10602,loop_locals,map__10565,map__10565__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.call(null,cljs.core.symbol.call(null,[cljs.core.str(mname_10601),cljs.core.str("__"),cljs.core.str(cljs.core.count.call(null,cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
});})(name_10600__$1,mname_10601,maxparams_10602,loop_locals,map__10565,map__10565__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,methods$));
var ms_10604 = cljs.core.sort_by.call(null,((function (name_10600__$1,mname_10601,maxparams_10602,mmap_10603,loop_locals,map__10565,map__10565__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__10562_SHARP_){
return cljs.core.count.call(null,cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__10562_SHARP_)));
});})(name_10600__$1,mname_10601,maxparams_10602,mmap_10603,loop_locals,map__10565,map__10565__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,cljs.core.seq.call(null,mmap_10603));
if(cljs.core._EQ_.call(null,cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"(function() {");

cljs.compiler.emitln.call(null,"var ",mname_10601," = null;");

var seq__10567_10605 = cljs.core.seq.call(null,ms_10604);
var chunk__10568_10606 = null;
var count__10569_10607 = (0);
var i__10570_10608 = (0);
while(true){
if((i__10570_10608 < count__10569_10607)){
var vec__10571_10609 = cljs.core._nth.call(null,chunk__10568_10606,i__10570_10608);
var n_10610 = cljs.core.nth.call(null,vec__10571_10609,(0),null);
var meth_10611 = cljs.core.nth.call(null,vec__10571_10609,(1),null);
cljs.compiler.emits.call(null,"var ",n_10610," = ");

if(cljs.core.truth_(cljs.core.cst$kw$variadic.cljs$core$IFn$_invoke$arity$1(meth_10611))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_10611);
} else {
cljs.compiler.emit_fn_method.call(null,meth_10611);
}

cljs.compiler.emitln.call(null,";");

var G__10612 = seq__10567_10605;
var G__10613 = chunk__10568_10606;
var G__10614 = count__10569_10607;
var G__10615 = (i__10570_10608 + (1));
seq__10567_10605 = G__10612;
chunk__10568_10606 = G__10613;
count__10569_10607 = G__10614;
i__10570_10608 = G__10615;
continue;
} else {
var temp__4657__auto___10616 = cljs.core.seq.call(null,seq__10567_10605);
if(temp__4657__auto___10616){
var seq__10567_10617__$1 = temp__4657__auto___10616;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10567_10617__$1)){
var c__7220__auto___10618 = cljs.core.chunk_first.call(null,seq__10567_10617__$1);
var G__10619 = cljs.core.chunk_rest.call(null,seq__10567_10617__$1);
var G__10620 = c__7220__auto___10618;
var G__10621 = cljs.core.count.call(null,c__7220__auto___10618);
var G__10622 = (0);
seq__10567_10605 = G__10619;
chunk__10568_10606 = G__10620;
count__10569_10607 = G__10621;
i__10570_10608 = G__10622;
continue;
} else {
var vec__10574_10623 = cljs.core.first.call(null,seq__10567_10617__$1);
var n_10624 = cljs.core.nth.call(null,vec__10574_10623,(0),null);
var meth_10625 = cljs.core.nth.call(null,vec__10574_10623,(1),null);
cljs.compiler.emits.call(null,"var ",n_10624," = ");

if(cljs.core.truth_(cljs.core.cst$kw$variadic.cljs$core$IFn$_invoke$arity$1(meth_10625))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_10625);
} else {
cljs.compiler.emit_fn_method.call(null,meth_10625);
}

cljs.compiler.emitln.call(null,";");

var G__10626 = cljs.core.next.call(null,seq__10567_10617__$1);
var G__10627 = null;
var G__10628 = (0);
var G__10629 = (0);
seq__10567_10605 = G__10626;
chunk__10568_10606 = G__10627;
count__10569_10607 = G__10628;
i__10570_10608 = G__10629;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,mname_10601," = function(",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,maxparams_10602),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$var_args], null)):maxparams_10602)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,maxparams_10602));

cljs.compiler.emitln.call(null," = var_args;");
} else {
}

cljs.compiler.emitln.call(null,"switch(arguments.length){");

var seq__10577_10630 = cljs.core.seq.call(null,ms_10604);
var chunk__10578_10631 = null;
var count__10579_10632 = (0);
var i__10580_10633 = (0);
while(true){
if((i__10580_10633 < count__10579_10632)){
var vec__10581_10634 = cljs.core._nth.call(null,chunk__10578_10631,i__10580_10633);
var n_10635 = cljs.core.nth.call(null,vec__10581_10634,(0),null);
var meth_10636 = cljs.core.nth.call(null,vec__10581_10634,(1),null);
if(cljs.core.truth_(cljs.core.cst$kw$variadic.cljs$core$IFn$_invoke$arity$1(meth_10636))){
cljs.compiler.emitln.call(null,"default:");

var restarg_10637 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_10637," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_10638 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_10637," = new cljs.core.IndexedSeq(",a_10638,",0);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_10635,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_10602)),(((cljs.core.count.call(null,maxparams_10602) > (1)))?", ":null),restarg_10637,");");
} else {
var pcnt_10639 = cljs.core.count.call(null,cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(meth_10636));
cljs.compiler.emitln.call(null,"case ",pcnt_10639,":");

cljs.compiler.emitln.call(null,"return ",n_10635,".call(this",(((pcnt_10639 === (0)))?null:cljs.core._conj.call(null,(function (){var x__7243__auto__ = cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_10639,maxparams_10602));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),",")),");");
}

var G__10640 = seq__10577_10630;
var G__10641 = chunk__10578_10631;
var G__10642 = count__10579_10632;
var G__10643 = (i__10580_10633 + (1));
seq__10577_10630 = G__10640;
chunk__10578_10631 = G__10641;
count__10579_10632 = G__10642;
i__10580_10633 = G__10643;
continue;
} else {
var temp__4657__auto___10644 = cljs.core.seq.call(null,seq__10577_10630);
if(temp__4657__auto___10644){
var seq__10577_10645__$1 = temp__4657__auto___10644;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10577_10645__$1)){
var c__7220__auto___10646 = cljs.core.chunk_first.call(null,seq__10577_10645__$1);
var G__10647 = cljs.core.chunk_rest.call(null,seq__10577_10645__$1);
var G__10648 = c__7220__auto___10646;
var G__10649 = cljs.core.count.call(null,c__7220__auto___10646);
var G__10650 = (0);
seq__10577_10630 = G__10647;
chunk__10578_10631 = G__10648;
count__10579_10632 = G__10649;
i__10580_10633 = G__10650;
continue;
} else {
var vec__10584_10651 = cljs.core.first.call(null,seq__10577_10645__$1);
var n_10652 = cljs.core.nth.call(null,vec__10584_10651,(0),null);
var meth_10653 = cljs.core.nth.call(null,vec__10584_10651,(1),null);
if(cljs.core.truth_(cljs.core.cst$kw$variadic.cljs$core$IFn$_invoke$arity$1(meth_10653))){
cljs.compiler.emitln.call(null,"default:");

var restarg_10654 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_10654," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_10655 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_10654," = new cljs.core.IndexedSeq(",a_10655,",0);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_10652,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_10602)),(((cljs.core.count.call(null,maxparams_10602) > (1)))?", ":null),restarg_10654,");");
} else {
var pcnt_10656 = cljs.core.count.call(null,cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(meth_10653));
cljs.compiler.emitln.call(null,"case ",pcnt_10656,":");

cljs.compiler.emitln.call(null,"return ",n_10652,".call(this",(((pcnt_10656 === (0)))?null:cljs.core._conj.call(null,(function (){var x__7243__auto__ = cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_10656,maxparams_10602));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),",")),");");
}

var G__10657 = cljs.core.next.call(null,seq__10577_10645__$1);
var G__10658 = null;
var G__10659 = (0);
var G__10660 = (0);
seq__10577_10630 = G__10657;
chunk__10578_10631 = G__10658;
count__10579_10632 = G__10659;
i__10580_10633 = G__10660;
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
cljs.compiler.emitln.call(null,mname_10601,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.call(null,mname_10601,".cljs$lang$applyTo = ",cljs.core.some.call(null,((function (name_10600__$1,mname_10601,maxparams_10602,mmap_10603,ms_10604,loop_locals,map__10565,map__10565__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__10563_SHARP_){
var vec__10587 = p1__10563_SHARP_;
var n = cljs.core.nth.call(null,vec__10587,(0),null);
var m = cljs.core.nth.call(null,vec__10587,(1),null);
if(cljs.core.truth_(cljs.core.cst$kw$variadic.cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
});})(name_10600__$1,mname_10601,maxparams_10602,mmap_10603,ms_10604,loop_locals,map__10565,map__10565__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,ms_10604),".cljs$lang$applyTo;");
} else {
}

var seq__10590_10661 = cljs.core.seq.call(null,ms_10604);
var chunk__10591_10662 = null;
var count__10592_10663 = (0);
var i__10593_10664 = (0);
while(true){
if((i__10593_10664 < count__10592_10663)){
var vec__10594_10665 = cljs.core._nth.call(null,chunk__10591_10662,i__10593_10664);
var n_10666 = cljs.core.nth.call(null,vec__10594_10665,(0),null);
var meth_10667 = cljs.core.nth.call(null,vec__10594_10665,(1),null);
var c_10668 = cljs.core.count.call(null,cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(meth_10667));
if(cljs.core.truth_(cljs.core.cst$kw$variadic.cljs$core$IFn$_invoke$arity$1(meth_10667))){
cljs.compiler.emitln.call(null,mname_10601,".cljs$core$IFn$_invoke$arity$variadic = ",n_10666,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_10601,".cljs$core$IFn$_invoke$arity$",c_10668," = ",n_10666,";");
}

var G__10669 = seq__10590_10661;
var G__10670 = chunk__10591_10662;
var G__10671 = count__10592_10663;
var G__10672 = (i__10593_10664 + (1));
seq__10590_10661 = G__10669;
chunk__10591_10662 = G__10670;
count__10592_10663 = G__10671;
i__10593_10664 = G__10672;
continue;
} else {
var temp__4657__auto___10673 = cljs.core.seq.call(null,seq__10590_10661);
if(temp__4657__auto___10673){
var seq__10590_10674__$1 = temp__4657__auto___10673;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10590_10674__$1)){
var c__7220__auto___10675 = cljs.core.chunk_first.call(null,seq__10590_10674__$1);
var G__10676 = cljs.core.chunk_rest.call(null,seq__10590_10674__$1);
var G__10677 = c__7220__auto___10675;
var G__10678 = cljs.core.count.call(null,c__7220__auto___10675);
var G__10679 = (0);
seq__10590_10661 = G__10676;
chunk__10591_10662 = G__10677;
count__10592_10663 = G__10678;
i__10593_10664 = G__10679;
continue;
} else {
var vec__10597_10680 = cljs.core.first.call(null,seq__10590_10674__$1);
var n_10681 = cljs.core.nth.call(null,vec__10597_10680,(0),null);
var meth_10682 = cljs.core.nth.call(null,vec__10597_10680,(1),null);
var c_10683 = cljs.core.count.call(null,cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(meth_10682));
if(cljs.core.truth_(cljs.core.cst$kw$variadic.cljs$core$IFn$_invoke$arity$1(meth_10682))){
cljs.compiler.emitln.call(null,mname_10601,".cljs$core$IFn$_invoke$arity$variadic = ",n_10681,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_10601,".cljs$core$IFn$_invoke$arity$",c_10683," = ",n_10681,";");
}

var G__10684 = cljs.core.next.call(null,seq__10590_10674__$1);
var G__10685 = null;
var G__10686 = (0);
var G__10687 = (0);
seq__10590_10661 = G__10684;
chunk__10591_10662 = G__10685;
count__10592_10663 = G__10686;
i__10593_10664 = G__10687;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"return ",mname_10601,";");

cljs.compiler.emitln.call(null,"})()");
}

if(loop_locals){
return cljs.compiler.emitln.call(null,";})(",cljs.compiler.comma_sep.call(null,loop_locals),"))");
} else {
return null;
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,cljs.core.cst$kw$do,(function (p__10688){
var map__10689 = p__10688;
var map__10689__$1 = ((((!((map__10689 == null)))?((((map__10689.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10689.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10689):map__10689);
var statements = cljs.core.get.call(null,map__10689__$1,cljs.core.cst$kw$statements);
var ret = cljs.core.get.call(null,map__10689__$1,cljs.core.cst$kw$ret);
var env = cljs.core.get.call(null,map__10689__$1,cljs.core.cst$kw$env);
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

var seq__10691_10695 = cljs.core.seq.call(null,statements);
var chunk__10692_10696 = null;
var count__10693_10697 = (0);
var i__10694_10698 = (0);
while(true){
if((i__10694_10698 < count__10693_10697)){
var s_10699 = cljs.core._nth.call(null,chunk__10692_10696,i__10694_10698);
cljs.compiler.emitln.call(null,s_10699);

var G__10700 = seq__10691_10695;
var G__10701 = chunk__10692_10696;
var G__10702 = count__10693_10697;
var G__10703 = (i__10694_10698 + (1));
seq__10691_10695 = G__10700;
chunk__10692_10696 = G__10701;
count__10693_10697 = G__10702;
i__10694_10698 = G__10703;
continue;
} else {
var temp__4657__auto___10704 = cljs.core.seq.call(null,seq__10691_10695);
if(temp__4657__auto___10704){
var seq__10691_10705__$1 = temp__4657__auto___10704;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10691_10705__$1)){
var c__7220__auto___10706 = cljs.core.chunk_first.call(null,seq__10691_10705__$1);
var G__10707 = cljs.core.chunk_rest.call(null,seq__10691_10705__$1);
var G__10708 = c__7220__auto___10706;
var G__10709 = cljs.core.count.call(null,c__7220__auto___10706);
var G__10710 = (0);
seq__10691_10695 = G__10707;
chunk__10692_10696 = G__10708;
count__10693_10697 = G__10709;
i__10694_10698 = G__10710;
continue;
} else {
var s_10711 = cljs.core.first.call(null,seq__10691_10705__$1);
cljs.compiler.emitln.call(null,s_10711);

var G__10712 = cljs.core.next.call(null,seq__10691_10705__$1);
var G__10713 = null;
var G__10714 = (0);
var G__10715 = (0);
seq__10691_10695 = G__10712;
chunk__10692_10696 = G__10713;
count__10693_10697 = G__10714;
i__10694_10698 = G__10715;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,cljs.core.cst$kw$try,(function (p__10716){
var map__10717 = p__10716;
var map__10717__$1 = ((((!((map__10717 == null)))?((((map__10717.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10717.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10717):map__10717);
var env = cljs.core.get.call(null,map__10717__$1,cljs.core.cst$kw$env);
var try$ = cljs.core.get.call(null,map__10717__$1,cljs.core.cst$kw$try);
var catch$ = cljs.core.get.call(null,map__10717__$1,cljs.core.cst$kw$catch);
var name = cljs.core.get.call(null,map__10717__$1,cljs.core.cst$kw$name);
var finally$ = cljs.core.get.call(null,map__10717__$1,cljs.core.cst$kw$finally);
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
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__10719,is_loop){
var map__10731 = p__10719;
var map__10731__$1 = ((((!((map__10731 == null)))?((((map__10731.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10731.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10731):map__10731);
var bindings = cljs.core.get.call(null,map__10731__$1,cljs.core.cst$kw$bindings);
var expr = cljs.core.get.call(null,map__10731__$1,cljs.core.cst$kw$expr);
var env = cljs.core.get.call(null,map__10731__$1,cljs.core.cst$kw$env);
var context = cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,cljs.core.cst$kw$expr,context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var _STAR_lexical_renames_STAR_10733_10742 = cljs.compiler._STAR_lexical_renames_STAR_;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.into.call(null,cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.call(null,cljs.core.cst$kw$statement,context))?cljs.core.map.call(null,((function (_STAR_lexical_renames_STAR_10733_10742,context,map__10731,map__10731__$1,bindings,expr,env){
return (function (binding){
var name = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope.call(null,binding),cljs.core.gensym.call(null,[cljs.core.str(name),cljs.core.str("-")].join(''))],null));
});})(_STAR_lexical_renames_STAR_10733_10742,context,map__10731,map__10731__$1,bindings,expr,env))
,bindings):null));

try{var seq__10734_10743 = cljs.core.seq.call(null,bindings);
var chunk__10735_10744 = null;
var count__10736_10745 = (0);
var i__10737_10746 = (0);
while(true){
if((i__10737_10746 < count__10736_10745)){
var map__10738_10747 = cljs.core._nth.call(null,chunk__10735_10744,i__10737_10746);
var map__10738_10748__$1 = ((((!((map__10738_10747 == null)))?((((map__10738_10747.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10738_10747.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10738_10747):map__10738_10747);
var binding_10749 = map__10738_10748__$1;
var init_10750 = cljs.core.get.call(null,map__10738_10748__$1,cljs.core.cst$kw$init);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_10749);

cljs.compiler.emitln.call(null," = ",init_10750,";");

var G__10751 = seq__10734_10743;
var G__10752 = chunk__10735_10744;
var G__10753 = count__10736_10745;
var G__10754 = (i__10737_10746 + (1));
seq__10734_10743 = G__10751;
chunk__10735_10744 = G__10752;
count__10736_10745 = G__10753;
i__10737_10746 = G__10754;
continue;
} else {
var temp__4657__auto___10755 = cljs.core.seq.call(null,seq__10734_10743);
if(temp__4657__auto___10755){
var seq__10734_10756__$1 = temp__4657__auto___10755;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10734_10756__$1)){
var c__7220__auto___10757 = cljs.core.chunk_first.call(null,seq__10734_10756__$1);
var G__10758 = cljs.core.chunk_rest.call(null,seq__10734_10756__$1);
var G__10759 = c__7220__auto___10757;
var G__10760 = cljs.core.count.call(null,c__7220__auto___10757);
var G__10761 = (0);
seq__10734_10743 = G__10758;
chunk__10735_10744 = G__10759;
count__10736_10745 = G__10760;
i__10737_10746 = G__10761;
continue;
} else {
var map__10740_10762 = cljs.core.first.call(null,seq__10734_10756__$1);
var map__10740_10763__$1 = ((((!((map__10740_10762 == null)))?((((map__10740_10762.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10740_10762.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10740_10762):map__10740_10762);
var binding_10764 = map__10740_10763__$1;
var init_10765 = cljs.core.get.call(null,map__10740_10763__$1,cljs.core.cst$kw$init);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_10764);

cljs.compiler.emitln.call(null," = ",init_10765,";");

var G__10766 = cljs.core.next.call(null,seq__10734_10756__$1);
var G__10767 = null;
var G__10768 = (0);
var G__10769 = (0);
seq__10734_10743 = G__10766;
chunk__10735_10744 = G__10767;
count__10736_10745 = G__10768;
i__10737_10746 = G__10769;
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
}finally {cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR_10733_10742;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,cljs.core.cst$kw$recur,(function (p__10770){
var map__10771 = p__10770;
var map__10771__$1 = ((((!((map__10771 == null)))?((((map__10771.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10771.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10771):map__10771);
var frame = cljs.core.get.call(null,map__10771__$1,cljs.core.cst$kw$frame);
var exprs = cljs.core.get.call(null,map__10771__$1,cljs.core.cst$kw$exprs);
var env = cljs.core.get.call(null,map__10771__$1,cljs.core.cst$kw$env);
var temps = cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,exprs),cljs.core.repeatedly.call(null,cljs.core.gensym)));
var params = cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(frame);
var n__7324__auto___10773 = cljs.core.count.call(null,exprs);
var i_10774 = (0);
while(true){
if((i_10774 < n__7324__auto___10773)){
cljs.compiler.emitln.call(null,"var ",temps.call(null,i_10774)," = ",exprs.call(null,i_10774),";");

var G__10775 = (i_10774 + (1));
i_10774 = G__10775;
continue;
} else {
}
break;
}

var n__7324__auto___10776 = cljs.core.count.call(null,exprs);
var i_10777 = (0);
while(true){
if((i_10777 < n__7324__auto___10776)){
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,params.call(null,i_10777))," = ",temps.call(null,i_10777),";");

var G__10778 = (i_10777 + (1));
i_10777 = G__10778;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.call(null,"continue;");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,cljs.core.cst$kw$letfn,(function (p__10779){
var map__10780 = p__10779;
var map__10780__$1 = ((((!((map__10780 == null)))?((((map__10780.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10780.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10780):map__10780);
var bindings = cljs.core.get.call(null,map__10780__$1,cljs.core.cst$kw$bindings);
var expr = cljs.core.get.call(null,map__10780__$1,cljs.core.cst$kw$expr);
var env = cljs.core.get.call(null,map__10780__$1,cljs.core.cst$kw$env);
var context = cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,cljs.core.cst$kw$expr,context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var seq__10782_10790 = cljs.core.seq.call(null,bindings);
var chunk__10783_10791 = null;
var count__10784_10792 = (0);
var i__10785_10793 = (0);
while(true){
if((i__10785_10793 < count__10784_10792)){
var map__10786_10794 = cljs.core._nth.call(null,chunk__10783_10791,i__10785_10793);
var map__10786_10795__$1 = ((((!((map__10786_10794 == null)))?((((map__10786_10794.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10786_10794.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10786_10794):map__10786_10794);
var binding_10796 = map__10786_10795__$1;
var init_10797 = cljs.core.get.call(null,map__10786_10795__$1,cljs.core.cst$kw$init);
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_10796)," = ",init_10797,";");

var G__10798 = seq__10782_10790;
var G__10799 = chunk__10783_10791;
var G__10800 = count__10784_10792;
var G__10801 = (i__10785_10793 + (1));
seq__10782_10790 = G__10798;
chunk__10783_10791 = G__10799;
count__10784_10792 = G__10800;
i__10785_10793 = G__10801;
continue;
} else {
var temp__4657__auto___10802 = cljs.core.seq.call(null,seq__10782_10790);
if(temp__4657__auto___10802){
var seq__10782_10803__$1 = temp__4657__auto___10802;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10782_10803__$1)){
var c__7220__auto___10804 = cljs.core.chunk_first.call(null,seq__10782_10803__$1);
var G__10805 = cljs.core.chunk_rest.call(null,seq__10782_10803__$1);
var G__10806 = c__7220__auto___10804;
var G__10807 = cljs.core.count.call(null,c__7220__auto___10804);
var G__10808 = (0);
seq__10782_10790 = G__10805;
chunk__10783_10791 = G__10806;
count__10784_10792 = G__10807;
i__10785_10793 = G__10808;
continue;
} else {
var map__10788_10809 = cljs.core.first.call(null,seq__10782_10803__$1);
var map__10788_10810__$1 = ((((!((map__10788_10809 == null)))?((((map__10788_10809.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10788_10809.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10788_10809):map__10788_10809);
var binding_10811 = map__10788_10810__$1;
var init_10812 = cljs.core.get.call(null,map__10788_10810__$1,cljs.core.cst$kw$init);
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_10811)," = ",init_10812,";");

var G__10813 = cljs.core.next.call(null,seq__10782_10803__$1);
var G__10814 = null;
var G__10815 = (0);
var G__10816 = (0);
seq__10782_10790 = G__10813;
chunk__10783_10791 = G__10814;
count__10784_10792 = G__10815;
i__10785_10793 = G__10816;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,cljs.core.cst$kw$invoke,(function (p__10819){
var map__10820 = p__10819;
var map__10820__$1 = ((((!((map__10820 == null)))?((((map__10820.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10820.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10820):map__10820);
var expr = map__10820__$1;
var f = cljs.core.get.call(null,map__10820__$1,cljs.core.cst$kw$f);
var args = cljs.core.get.call(null,map__10820__$1,cljs.core.cst$kw$args);
var env = cljs.core.get.call(null,map__10820__$1,cljs.core.cst$kw$env);
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
var vec__10822 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count.call(null,args);
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$info], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__10820,map__10820__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,cljs.core.cst$kw$name,cljs.core.symbol.call(null,[cljs.core.str(cljs.compiler.munge.call(null,info__$1)),cljs.core.str(".cljs$core$IFn$_invoke$arity$variadic")].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$info], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__10820,map__10820__$1,expr,f,args,env){
return (function (p1__10817_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__10817_SHARP_,cljs.core.cst$kw$shadow),cljs.core.cst$kw$fn_DASH_self_DASH_name);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__10820,map__10820__$1,expr,f,args,env))
);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__10820,map__10820__$1,expr,f,args,env))
),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$max_DASH_fixed_DASH_arity,mfa], null)], null);
} else {
var arities = cljs.core.map.call(null,cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([arity], true),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$info], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__10820,map__10820__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,cljs.core.cst$kw$name,cljs.core.symbol.call(null,[cljs.core.str(cljs.compiler.munge.call(null,info__$1)),cljs.core.str(".cljs$core$IFn$_invoke$arity$"),cljs.core.str(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$info], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__10820,map__10820__$1,expr,f,args,env){
return (function (p1__10818_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__10818_SHARP_,cljs.core.cst$kw$shadow),cljs.core.cst$kw$fn_DASH_self_DASH_name);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__10820,map__10820__$1,expr,f,args,env))
);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__10820,map__10820__$1,expr,f,args,env))
),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.call(null,vec__10822,(0),null);
var variadic_invoke = cljs.core.nth.call(null,vec__10822,(1),null);
var env__9933__auto__ = env;
if(cljs.core._EQ_.call(null,cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__9933__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.call(null,"!(",cljs.core.first.call(null,args),")");
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_10825 = [cljs.core.str(cljs.compiler.munge.call(null,cljs.compiler.protocol_prefix.call(null,protocol))),cljs.core.str(cljs.compiler.munge.call(null,cljs.core.name.call(null,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(info)))),cljs.core.str("$arity$"),cljs.core.str(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,cljs.core.first.call(null,args),".",pimpl_10825,"(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",cljs.core.rest.call(null,args))),")");
} else {
if(keyword_QMARK_){
cljs.compiler.emits.call(null,f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count.call(null,args),"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_10826 = cljs.core.cst$kw$max_DASH_fixed_DASH_arity.cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,mfa_10826,args)),(((mfa_10826 === (0)))?null:","),"cljs.core.array_seq([",cljs.compiler.comma_sep.call(null,cljs.core.drop.call(null,mfa_10826,args)),"], 0))");
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
var fprop_10827 = [cljs.core.str(".cljs$core$IFn$_invoke$arity$"),cljs.core.str(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,"(",f__$1,fprop_10827," ? ",f__$1,fprop_10827,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),"))");
} else {
cljs.compiler.emits.call(null,f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),")");
}

}
}
}
}
}

if(cljs.core._EQ_.call(null,cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__9933__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,cljs.core.cst$kw$new,(function (p__10828){
var map__10829 = p__10828;
var map__10829__$1 = ((((!((map__10829 == null)))?((((map__10829.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10829.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10829):map__10829);
var ctor = cljs.core.get.call(null,map__10829__$1,cljs.core.cst$kw$ctor);
var args = cljs.core.get.call(null,map__10829__$1,cljs.core.cst$kw$args);
var env = cljs.core.get.call(null,map__10829__$1,cljs.core.cst$kw$env);
var env__9933__auto__ = env;
if(cljs.core._EQ_.call(null,cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__9933__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(new ",ctor,"(",cljs.compiler.comma_sep.call(null,args),"))");

if(cljs.core._EQ_.call(null,cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__9933__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,cljs.core.cst$kw$set_BANG_,(function (p__10831){
var map__10832 = p__10831;
var map__10832__$1 = ((((!((map__10832 == null)))?((((map__10832.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10832.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10832):map__10832);
var target = cljs.core.get.call(null,map__10832__$1,cljs.core.cst$kw$target);
var val = cljs.core.get.call(null,map__10832__$1,cljs.core.cst$kw$val);
var env = cljs.core.get.call(null,map__10832__$1,cljs.core.cst$kw$env);
var env__9933__auto__ = env;
if(cljs.core._EQ_.call(null,cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__9933__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,target," = ",val);

if(cljs.core._EQ_.call(null,cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__9933__auto__))){
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

var seq__10838_10842 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,seen)),cljs.core.distinct.call(null,cljs.core.vals.call(null,libs))));
var chunk__10839_10843 = null;
var count__10840_10844 = (0);
var i__10841_10845 = (0);
while(true){
if((i__10841_10845 < count__10840_10844)){
var lib_10846 = cljs.core._nth.call(null,chunk__10839_10843,i__10841_10845);
if(cljs.core.truth_((function (){var or__6409__auto__ = cljs.core.cst$kw$reload.cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_10846),cljs.core.cst$kw$reload);
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_10846),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__6409__auto__ = cljs.core.cst$kw$reload_DASH_all.cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_10846),cljs.core.cst$kw$reload_DASH_all);
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_10846),"', 'reload-all');");
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_10846),"');");

}
}

var G__10847 = seq__10838_10842;
var G__10848 = chunk__10839_10843;
var G__10849 = count__10840_10844;
var G__10850 = (i__10841_10845 + (1));
seq__10838_10842 = G__10847;
chunk__10839_10843 = G__10848;
count__10840_10844 = G__10849;
i__10841_10845 = G__10850;
continue;
} else {
var temp__4657__auto___10851 = cljs.core.seq.call(null,seq__10838_10842);
if(temp__4657__auto___10851){
var seq__10838_10852__$1 = temp__4657__auto___10851;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10838_10852__$1)){
var c__7220__auto___10853 = cljs.core.chunk_first.call(null,seq__10838_10852__$1);
var G__10854 = cljs.core.chunk_rest.call(null,seq__10838_10852__$1);
var G__10855 = c__7220__auto___10853;
var G__10856 = cljs.core.count.call(null,c__7220__auto___10853);
var G__10857 = (0);
seq__10838_10842 = G__10854;
chunk__10839_10843 = G__10855;
count__10840_10844 = G__10856;
i__10841_10845 = G__10857;
continue;
} else {
var lib_10858 = cljs.core.first.call(null,seq__10838_10852__$1);
if(cljs.core.truth_((function (){var or__6409__auto__ = cljs.core.cst$kw$reload.cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_10858),cljs.core.cst$kw$reload);
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_10858),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__6409__auto__ = cljs.core.cst$kw$reload_DASH_all.cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_10858),cljs.core.cst$kw$reload_DASH_all);
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_10858),"', 'reload-all');");
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_10858),"');");

}
}

var G__10859 = cljs.core.next.call(null,seq__10838_10852__$1);
var G__10860 = null;
var G__10861 = (0);
var G__10862 = (0);
seq__10838_10842 = G__10859;
chunk__10839_10843 = G__10860;
count__10840_10844 = G__10861;
i__10841_10845 = G__10862;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,cljs.core.cst$kw$ns,(function (p__10863){
var map__10864 = p__10863;
var map__10864__$1 = ((((!((map__10864 == null)))?((((map__10864.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10864.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10864):map__10864);
var name = cljs.core.get.call(null,map__10864__$1,cljs.core.cst$kw$name);
var requires = cljs.core.get.call(null,map__10864__$1,cljs.core.cst$kw$requires);
var uses = cljs.core.get.call(null,map__10864__$1,cljs.core.cst$kw$uses);
var require_macros = cljs.core.get.call(null,map__10864__$1,cljs.core.cst$kw$require_DASH_macros);
var reloads = cljs.core.get.call(null,map__10864__$1,cljs.core.cst$kw$reloads);
var env = cljs.core.get.call(null,map__10864__$1,cljs.core.cst$kw$env);
cljs.compiler.emitln.call(null,"goog.provide('",cljs.compiler.munge.call(null,name),"');");

if(cljs.core._EQ_.call(null,name,cljs.core.cst$sym$cljs$core)){
} else {
cljs.compiler.emitln.call(null,"goog.require('cljs.core');");
}

cljs.compiler.load_libs.call(null,requires,null,cljs.core.cst$kw$require.cljs$core$IFn$_invoke$arity$1(reloads));

return cljs.compiler.load_libs.call(null,uses,requires,cljs.core.cst$kw$use.cljs$core$IFn$_invoke$arity$1(reloads));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,cljs.core.cst$kw$deftype_STAR_,(function (p__10866){
var map__10867 = p__10866;
var map__10867__$1 = ((((!((map__10867 == null)))?((((map__10867.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10867.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10867):map__10867);
var t = cljs.core.get.call(null,map__10867__$1,cljs.core.cst$kw$t);
var fields = cljs.core.get.call(null,map__10867__$1,cljs.core.cst$kw$fields);
var pmasks = cljs.core.get.call(null,map__10867__$1,cljs.core.cst$kw$pmasks);
var body = cljs.core.get.call(null,map__10867__$1,cljs.core.cst$kw$body);
var protocols = cljs.core.get.call(null,map__10867__$1,cljs.core.cst$kw$protocols);
var fields__$1 = cljs.core.map.call(null,cljs.compiler.munge,fields);
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__10869_10887 = cljs.core.seq.call(null,protocols);
var chunk__10870_10888 = null;
var count__10871_10889 = (0);
var i__10872_10890 = (0);
while(true){
if((i__10872_10890 < count__10871_10889)){
var protocol_10891 = cljs.core._nth.call(null,chunk__10870_10888,i__10872_10890);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_10891)].join('')),"}");

var G__10892 = seq__10869_10887;
var G__10893 = chunk__10870_10888;
var G__10894 = count__10871_10889;
var G__10895 = (i__10872_10890 + (1));
seq__10869_10887 = G__10892;
chunk__10870_10888 = G__10893;
count__10871_10889 = G__10894;
i__10872_10890 = G__10895;
continue;
} else {
var temp__4657__auto___10896 = cljs.core.seq.call(null,seq__10869_10887);
if(temp__4657__auto___10896){
var seq__10869_10897__$1 = temp__4657__auto___10896;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10869_10897__$1)){
var c__7220__auto___10898 = cljs.core.chunk_first.call(null,seq__10869_10897__$1);
var G__10899 = cljs.core.chunk_rest.call(null,seq__10869_10897__$1);
var G__10900 = c__7220__auto___10898;
var G__10901 = cljs.core.count.call(null,c__7220__auto___10898);
var G__10902 = (0);
seq__10869_10887 = G__10899;
chunk__10870_10888 = G__10900;
count__10871_10889 = G__10901;
i__10872_10890 = G__10902;
continue;
} else {
var protocol_10903 = cljs.core.first.call(null,seq__10869_10897__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_10903)].join('')),"}");

var G__10904 = cljs.core.next.call(null,seq__10869_10897__$1);
var G__10905 = null;
var G__10906 = (0);
var G__10907 = (0);
seq__10869_10887 = G__10904;
chunk__10870_10888 = G__10905;
count__10871_10889 = G__10906;
i__10872_10890 = G__10907;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__10873_10908 = cljs.core.seq.call(null,fields__$1);
var chunk__10874_10909 = null;
var count__10875_10910 = (0);
var i__10876_10911 = (0);
while(true){
if((i__10876_10911 < count__10875_10910)){
var fld_10912 = cljs.core._nth.call(null,chunk__10874_10909,i__10876_10911);
cljs.compiler.emitln.call(null,"this.",fld_10912," = ",fld_10912,";");

var G__10913 = seq__10873_10908;
var G__10914 = chunk__10874_10909;
var G__10915 = count__10875_10910;
var G__10916 = (i__10876_10911 + (1));
seq__10873_10908 = G__10913;
chunk__10874_10909 = G__10914;
count__10875_10910 = G__10915;
i__10876_10911 = G__10916;
continue;
} else {
var temp__4657__auto___10917 = cljs.core.seq.call(null,seq__10873_10908);
if(temp__4657__auto___10917){
var seq__10873_10918__$1 = temp__4657__auto___10917;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10873_10918__$1)){
var c__7220__auto___10919 = cljs.core.chunk_first.call(null,seq__10873_10918__$1);
var G__10920 = cljs.core.chunk_rest.call(null,seq__10873_10918__$1);
var G__10921 = c__7220__auto___10919;
var G__10922 = cljs.core.count.call(null,c__7220__auto___10919);
var G__10923 = (0);
seq__10873_10908 = G__10920;
chunk__10874_10909 = G__10921;
count__10875_10910 = G__10922;
i__10876_10911 = G__10923;
continue;
} else {
var fld_10924 = cljs.core.first.call(null,seq__10873_10918__$1);
cljs.compiler.emitln.call(null,"this.",fld_10924," = ",fld_10924,";");

var G__10925 = cljs.core.next.call(null,seq__10873_10918__$1);
var G__10926 = null;
var G__10927 = (0);
var G__10928 = (0);
seq__10873_10908 = G__10925;
chunk__10874_10909 = G__10926;
count__10875_10910 = G__10927;
i__10876_10911 = G__10928;
continue;
}
} else {
}
}
break;
}

var seq__10877_10929 = cljs.core.seq.call(null,pmasks);
var chunk__10878_10930 = null;
var count__10879_10931 = (0);
var i__10880_10932 = (0);
while(true){
if((i__10880_10932 < count__10879_10931)){
var vec__10881_10933 = cljs.core._nth.call(null,chunk__10878_10930,i__10880_10932);
var pno_10934 = cljs.core.nth.call(null,vec__10881_10933,(0),null);
var pmask_10935 = cljs.core.nth.call(null,vec__10881_10933,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_10934,"$ = ",pmask_10935,";");

var G__10936 = seq__10877_10929;
var G__10937 = chunk__10878_10930;
var G__10938 = count__10879_10931;
var G__10939 = (i__10880_10932 + (1));
seq__10877_10929 = G__10936;
chunk__10878_10930 = G__10937;
count__10879_10931 = G__10938;
i__10880_10932 = G__10939;
continue;
} else {
var temp__4657__auto___10940 = cljs.core.seq.call(null,seq__10877_10929);
if(temp__4657__auto___10940){
var seq__10877_10941__$1 = temp__4657__auto___10940;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10877_10941__$1)){
var c__7220__auto___10942 = cljs.core.chunk_first.call(null,seq__10877_10941__$1);
var G__10943 = cljs.core.chunk_rest.call(null,seq__10877_10941__$1);
var G__10944 = c__7220__auto___10942;
var G__10945 = cljs.core.count.call(null,c__7220__auto___10942);
var G__10946 = (0);
seq__10877_10929 = G__10943;
chunk__10878_10930 = G__10944;
count__10879_10931 = G__10945;
i__10880_10932 = G__10946;
continue;
} else {
var vec__10884_10947 = cljs.core.first.call(null,seq__10877_10941__$1);
var pno_10948 = cljs.core.nth.call(null,vec__10884_10947,(0),null);
var pmask_10949 = cljs.core.nth.call(null,vec__10884_10947,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_10948,"$ = ",pmask_10949,";");

var G__10950 = cljs.core.next.call(null,seq__10877_10941__$1);
var G__10951 = null;
var G__10952 = (0);
var G__10953 = (0);
seq__10877_10929 = G__10950;
chunk__10878_10930 = G__10951;
count__10879_10931 = G__10952;
i__10880_10932 = G__10953;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,cljs.core.cst$kw$defrecord_STAR_,(function (p__10954){
var map__10955 = p__10954;
var map__10955__$1 = ((((!((map__10955 == null)))?((((map__10955.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10955.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10955):map__10955);
var t = cljs.core.get.call(null,map__10955__$1,cljs.core.cst$kw$t);
var fields = cljs.core.get.call(null,map__10955__$1,cljs.core.cst$kw$fields);
var pmasks = cljs.core.get.call(null,map__10955__$1,cljs.core.cst$kw$pmasks);
var body = cljs.core.get.call(null,map__10955__$1,cljs.core.cst$kw$body);
var protocols = cljs.core.get.call(null,map__10955__$1,cljs.core.cst$kw$protocols);
var fields__$1 = cljs.core.concat.call(null,cljs.core.map.call(null,cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$__meta,cljs.core.cst$sym$__extmap,cljs.core.cst$sym$__hash], null));
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__10957_10975 = cljs.core.seq.call(null,protocols);
var chunk__10958_10976 = null;
var count__10959_10977 = (0);
var i__10960_10978 = (0);
while(true){
if((i__10960_10978 < count__10959_10977)){
var protocol_10979 = cljs.core._nth.call(null,chunk__10958_10976,i__10960_10978);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_10979)].join('')),"}");

var G__10980 = seq__10957_10975;
var G__10981 = chunk__10958_10976;
var G__10982 = count__10959_10977;
var G__10983 = (i__10960_10978 + (1));
seq__10957_10975 = G__10980;
chunk__10958_10976 = G__10981;
count__10959_10977 = G__10982;
i__10960_10978 = G__10983;
continue;
} else {
var temp__4657__auto___10984 = cljs.core.seq.call(null,seq__10957_10975);
if(temp__4657__auto___10984){
var seq__10957_10985__$1 = temp__4657__auto___10984;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10957_10985__$1)){
var c__7220__auto___10986 = cljs.core.chunk_first.call(null,seq__10957_10985__$1);
var G__10987 = cljs.core.chunk_rest.call(null,seq__10957_10985__$1);
var G__10988 = c__7220__auto___10986;
var G__10989 = cljs.core.count.call(null,c__7220__auto___10986);
var G__10990 = (0);
seq__10957_10975 = G__10987;
chunk__10958_10976 = G__10988;
count__10959_10977 = G__10989;
i__10960_10978 = G__10990;
continue;
} else {
var protocol_10991 = cljs.core.first.call(null,seq__10957_10985__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_10991)].join('')),"}");

var G__10992 = cljs.core.next.call(null,seq__10957_10985__$1);
var G__10993 = null;
var G__10994 = (0);
var G__10995 = (0);
seq__10957_10975 = G__10992;
chunk__10958_10976 = G__10993;
count__10959_10977 = G__10994;
i__10960_10978 = G__10995;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__10961_10996 = cljs.core.seq.call(null,fields__$1);
var chunk__10962_10997 = null;
var count__10963_10998 = (0);
var i__10964_10999 = (0);
while(true){
if((i__10964_10999 < count__10963_10998)){
var fld_11000 = cljs.core._nth.call(null,chunk__10962_10997,i__10964_10999);
cljs.compiler.emitln.call(null,"this.",fld_11000," = ",fld_11000,";");

var G__11001 = seq__10961_10996;
var G__11002 = chunk__10962_10997;
var G__11003 = count__10963_10998;
var G__11004 = (i__10964_10999 + (1));
seq__10961_10996 = G__11001;
chunk__10962_10997 = G__11002;
count__10963_10998 = G__11003;
i__10964_10999 = G__11004;
continue;
} else {
var temp__4657__auto___11005 = cljs.core.seq.call(null,seq__10961_10996);
if(temp__4657__auto___11005){
var seq__10961_11006__$1 = temp__4657__auto___11005;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10961_11006__$1)){
var c__7220__auto___11007 = cljs.core.chunk_first.call(null,seq__10961_11006__$1);
var G__11008 = cljs.core.chunk_rest.call(null,seq__10961_11006__$1);
var G__11009 = c__7220__auto___11007;
var G__11010 = cljs.core.count.call(null,c__7220__auto___11007);
var G__11011 = (0);
seq__10961_10996 = G__11008;
chunk__10962_10997 = G__11009;
count__10963_10998 = G__11010;
i__10964_10999 = G__11011;
continue;
} else {
var fld_11012 = cljs.core.first.call(null,seq__10961_11006__$1);
cljs.compiler.emitln.call(null,"this.",fld_11012," = ",fld_11012,";");

var G__11013 = cljs.core.next.call(null,seq__10961_11006__$1);
var G__11014 = null;
var G__11015 = (0);
var G__11016 = (0);
seq__10961_10996 = G__11013;
chunk__10962_10997 = G__11014;
count__10963_10998 = G__11015;
i__10964_10999 = G__11016;
continue;
}
} else {
}
}
break;
}

var seq__10965_11017 = cljs.core.seq.call(null,pmasks);
var chunk__10966_11018 = null;
var count__10967_11019 = (0);
var i__10968_11020 = (0);
while(true){
if((i__10968_11020 < count__10967_11019)){
var vec__10969_11021 = cljs.core._nth.call(null,chunk__10966_11018,i__10968_11020);
var pno_11022 = cljs.core.nth.call(null,vec__10969_11021,(0),null);
var pmask_11023 = cljs.core.nth.call(null,vec__10969_11021,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_11022,"$ = ",pmask_11023,";");

var G__11024 = seq__10965_11017;
var G__11025 = chunk__10966_11018;
var G__11026 = count__10967_11019;
var G__11027 = (i__10968_11020 + (1));
seq__10965_11017 = G__11024;
chunk__10966_11018 = G__11025;
count__10967_11019 = G__11026;
i__10968_11020 = G__11027;
continue;
} else {
var temp__4657__auto___11028 = cljs.core.seq.call(null,seq__10965_11017);
if(temp__4657__auto___11028){
var seq__10965_11029__$1 = temp__4657__auto___11028;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10965_11029__$1)){
var c__7220__auto___11030 = cljs.core.chunk_first.call(null,seq__10965_11029__$1);
var G__11031 = cljs.core.chunk_rest.call(null,seq__10965_11029__$1);
var G__11032 = c__7220__auto___11030;
var G__11033 = cljs.core.count.call(null,c__7220__auto___11030);
var G__11034 = (0);
seq__10965_11017 = G__11031;
chunk__10966_11018 = G__11032;
count__10967_11019 = G__11033;
i__10968_11020 = G__11034;
continue;
} else {
var vec__10972_11035 = cljs.core.first.call(null,seq__10965_11029__$1);
var pno_11036 = cljs.core.nth.call(null,vec__10972_11035,(0),null);
var pmask_11037 = cljs.core.nth.call(null,vec__10972_11035,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_11036,"$ = ",pmask_11037,";");

var G__11038 = cljs.core.next.call(null,seq__10965_11029__$1);
var G__11039 = null;
var G__11040 = (0);
var G__11041 = (0);
seq__10965_11017 = G__11038;
chunk__10966_11018 = G__11039;
count__10967_11019 = G__11040;
i__10968_11020 = G__11041;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,cljs.core.cst$kw$dot,(function (p__11042){
var map__11043 = p__11042;
var map__11043__$1 = ((((!((map__11043 == null)))?((((map__11043.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11043.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11043):map__11043);
var target = cljs.core.get.call(null,map__11043__$1,cljs.core.cst$kw$target);
var field = cljs.core.get.call(null,map__11043__$1,cljs.core.cst$kw$field);
var method = cljs.core.get.call(null,map__11043__$1,cljs.core.cst$kw$method);
var args = cljs.core.get.call(null,map__11043__$1,cljs.core.cst$kw$args);
var env = cljs.core.get.call(null,map__11043__$1,cljs.core.cst$kw$env);
var env__9933__auto__ = env;
if(cljs.core._EQ_.call(null,cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__9933__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep.call(null,args),")");
}

if(cljs.core._EQ_.call(null,cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__9933__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,cljs.core.cst$kw$js,(function (p__11045){
var map__11046 = p__11045;
var map__11046__$1 = ((((!((map__11046 == null)))?((((map__11046.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11046.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11046):map__11046);
var op = cljs.core.get.call(null,map__11046__$1,cljs.core.cst$kw$op);
var env = cljs.core.get.call(null,map__11046__$1,cljs.core.cst$kw$env);
var code = cljs.core.get.call(null,map__11046__$1,cljs.core.cst$kw$code);
var segs = cljs.core.get.call(null,map__11046__$1,cljs.core.cst$kw$segs);
var args = cljs.core.get.call(null,map__11046__$1,cljs.core.cst$kw$args);
if(cljs.core.truth_((function (){var and__6397__auto__ = code;
if(cljs.core.truth_(and__6397__auto__)){
return goog.string.startsWith(clojure.string.trim.call(null,code),"/*");
} else {
return and__6397__auto__;
}
})())){
return cljs.compiler.emits.call(null,code);
} else {
var env__9933__auto__ = env;
if(cljs.core._EQ_.call(null,cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__9933__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.call(null,code);
} else {
cljs.compiler.emits.call(null,cljs.core.interleave.call(null,cljs.core.concat.call(null,segs,cljs.core.repeat.call(null,null)),cljs.core.concat.call(null,args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.call(null,cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__9933__auto__))){
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
var seq__11060 = cljs.core.seq.call(null,table);
var chunk__11061 = null;
var count__11062 = (0);
var i__11063 = (0);
while(true){
if((i__11063 < count__11062)){
var vec__11064 = cljs.core._nth.call(null,chunk__11061,i__11063);
var sym = cljs.core.nth.call(null,vec__11064,(0),null);
var value = cljs.core.nth.call(null,vec__11064,(1),null);
var ns_11070 = cljs.core.namespace.call(null,sym);
var name_11071 = cljs.core.name.call(null,sym);
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

var G__11072 = seq__11060;
var G__11073 = chunk__11061;
var G__11074 = count__11062;
var G__11075 = (i__11063 + (1));
seq__11060 = G__11072;
chunk__11061 = G__11073;
count__11062 = G__11074;
i__11063 = G__11075;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__11060);
if(temp__4657__auto__){
var seq__11060__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11060__$1)){
var c__7220__auto__ = cljs.core.chunk_first.call(null,seq__11060__$1);
var G__11076 = cljs.core.chunk_rest.call(null,seq__11060__$1);
var G__11077 = c__7220__auto__;
var G__11078 = cljs.core.count.call(null,c__7220__auto__);
var G__11079 = (0);
seq__11060 = G__11076;
chunk__11061 = G__11077;
count__11062 = G__11078;
i__11063 = G__11079;
continue;
} else {
var vec__11067 = cljs.core.first.call(null,seq__11060__$1);
var sym = cljs.core.nth.call(null,vec__11067,(0),null);
var value = cljs.core.nth.call(null,vec__11067,(1),null);
var ns_11080 = cljs.core.namespace.call(null,sym);
var name_11081 = cljs.core.name.call(null,sym);
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

var G__11082 = cljs.core.next.call(null,seq__11060__$1);
var G__11083 = null;
var G__11084 = (0);
var G__11085 = (0);
seq__11060 = G__11082;
chunk__11061 = G__11083;
count__11062 = G__11084;
i__11063 = G__11085;
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