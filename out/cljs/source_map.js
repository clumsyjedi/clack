// Compiled by ClojureScript 1.8.41 {:target :nodejs}
goog.provide('cljs.source_map');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.source_map.base64_vlq');
/**
 * Take a seq of source file names and return a map from
 * file number to integer index. For reverse source maps.
 */
cljs.source_map.indexed_sources = (function cljs$source_map$indexed_sources(sources){
return cljs.core.reduce.call(null,(function (m,p__1177){
var vec__1178 = p__1177;
var i = cljs.core.nth.call(null,vec__1178,(0),null);
var v = cljs.core.nth.call(null,vec__1178,(1),null);
return cljs.core.assoc.call(null,m,v,i);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.call(null,(function (a,b){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
}),sources));
});
/**
 * Take a seq of source file names and return a comparator
 * that can be used to construct a sorted map. For reverse
 * source maps.
 */
cljs.source_map.source_compare = (function cljs$source_map$source_compare(sources){
var sources__$1 = cljs.source_map.indexed_sources.call(null,sources);
return ((function (sources__$1){
return (function (a,b){
return cljs.core.compare.call(null,sources__$1.call(null,a),sources__$1.call(null,b));
});
;})(sources__$1))
});
/**
 * Take a source map segment represented as a vector
 * and return a map.
 */
cljs.source_map.seg__GT_map = (function cljs$source_map$seg__GT_map(seg,source_map){
var vec__1180 = seg;
var gcol = cljs.core.nth.call(null,vec__1180,(0),null);
var source = cljs.core.nth.call(null,vec__1180,(1),null);
var line = cljs.core.nth.call(null,vec__1180,(2),null);
var col = cljs.core.nth.call(null,vec__1180,(3),null);
var name = cljs.core.nth.call(null,vec__1180,(4),null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol,new cljs.core.Keyword(null,"source","source",-433931539),(goog.object.get(source_map,"sources")[source]),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"name","name",1843675177),(function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,seg));
if(cljs.core.truth_(temp__4657__auto__)){
var name__$1 = temp__4657__auto__;
return (goog.object.get(source_map,"names")[name__$1]);
} else {
return null;
}
})()], null);
});
/**
 * Combine a source map segment vector and a relative
 * source map segment vector and combine them to get
 * an absolute segment posititon information as a vector.
 */
cljs.source_map.seg_combine = (function cljs$source_map$seg_combine(seg,relseg){
var vec__1183 = seg;
var gcol = cljs.core.nth.call(null,vec__1183,(0),null);
var source = cljs.core.nth.call(null,vec__1183,(1),null);
var line = cljs.core.nth.call(null,vec__1183,(2),null);
var col = cljs.core.nth.call(null,vec__1183,(3),null);
var name = cljs.core.nth.call(null,vec__1183,(4),null);
var vec__1184 = relseg;
var rgcol = cljs.core.nth.call(null,vec__1184,(0),null);
var rsource = cljs.core.nth.call(null,vec__1184,(1),null);
var rline = cljs.core.nth.call(null,vec__1184,(2),null);
var rcol = cljs.core.nth.call(null,vec__1184,(3),null);
var rname = cljs.core.nth.call(null,vec__1184,(4),null);
var nseg = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(gcol + rgcol),((function (){var or__2951__auto__ = source;
if(cljs.core.truth_(or__2951__auto__)){
return or__2951__auto__;
} else {
return (0);
}
})() + rsource),((function (){var or__2951__auto__ = line;
if(cljs.core.truth_(or__2951__auto__)){
return or__2951__auto__;
} else {
return (0);
}
})() + rline),((function (){var or__2951__auto__ = col;
if(cljs.core.truth_(or__2951__auto__)){
return or__2951__auto__;
} else {
return (0);
}
})() + rcol),((function (){var or__2951__auto__ = name;
if(cljs.core.truth_(or__2951__auto__)){
return or__2951__auto__;
} else {
return (0);
}
})() + rname)], null);
if(cljs.core.truth_(name)){
return cljs.core.with_meta.call(null,nseg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),(name + rname)], null));
} else {
return nseg;
}
});
/**
 * Helper for decode-reverse. Take a reverse source map and
 *   update it with a segment map.
 */
cljs.source_map.update_reverse_result = (function cljs$source_map$update_reverse_result(result,segmap,gline){
var map__1187 = segmap;
var map__1187__$1 = ((((!((map__1187 == null)))?((((map__1187.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1187.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1187):map__1187);
var gcol = cljs.core.get.call(null,map__1187__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__1187__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__1187__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__1187__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__1187__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gline","gline",-1086242431),gline,new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.call(null,((function (map__1187,map__1187__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.call(null,((function (map__1187,map__1187__$1,gcol,source,line,col,name,d,d__$1){
return (function (m__$1){
return cljs.core.update_in.call(null,m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.call(null,((function (map__1187,map__1187__$1,gcol,source,line,col,name,d,d__$1){
return (function (v){
return cljs.core.conj.call(null,v,d__$1);
});})(map__1187,map__1187__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__1187,map__1187__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});})(map__1187,map__1187__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var args1189 = [];
var len__3480__auto___1193 = arguments.length;
var i__3481__auto___1194 = (0);
while(true){
if((i__3481__auto___1194 < len__3480__auto___1193)){
args1189.push((arguments[i__3481__auto___1194]));

var G__1195 = (i__3481__auto___1194 + (1));
i__3481__auto___1194 = G__1195;
continue;
} else {
}
break;
}

var G__1191 = args1189.length;
switch (G__1191) {
case 1:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args1189.length)].join('')));

}
});

cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode_reverse.call(null,goog.object.get(source_map,"mappings"),source_map);
});

cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = goog.object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq.call(null,clojure.string.split.call(null,mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.sorted_map_by.call(null,cljs.source_map.source_compare.call(null,sources));
while(true){
if(lines__$1){
var line = cljs.core.first.call(null,lines__$1);
var vec__1192 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__1197 = cljs.core.next.call(null,segs__$1);
var G__1198 = nrelseg;
var G__1199 = cljs.source_map.update_reverse_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__1197;
relseg__$1 = G__1198;
result__$1 = G__1199;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__1192,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__1192,(1),null);
var G__1200 = (gline + (1));
var G__1201 = cljs.core.next.call(null,lines__$1);
var G__1202 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__1203 = result__$1;
gline = G__1200;
lines__$1 = G__1201;
relseg = G__1202;
result = G__1203;
continue;
} else {
return result;
}
break;
}
});

cljs.source_map.decode_reverse.cljs$lang$maxFixedArity = 2;
/**
 * Helper for decode. Take a source map and update it based on a
 *   segment map.
 */
cljs.source_map.update_result = (function cljs$source_map$update_result(result,segmap,gline){
var map__1207 = segmap;
var map__1207__$1 = ((((!((map__1207 == null)))?((((map__1207.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1207.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1207):map__1207);
var gcol = cljs.core.get.call(null,map__1207__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__1207__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__1207__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__1207__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__1207__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.call(null,((function (map__1207,map__1207__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.call(null,((function (map__1207,map__1207__$1,gcol,source,line,col,name,d,d__$1){
return (function (p1__1204_SHARP_){
return cljs.core.conj.call(null,p1__1204_SHARP_,d__$1);
});})(map__1207,map__1207__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__1207,map__1207__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var args1209 = [];
var len__3480__auto___1213 = arguments.length;
var i__3481__auto___1214 = (0);
while(true){
if((i__3481__auto___1214 < len__3480__auto___1213)){
args1209.push((arguments[i__3481__auto___1214]));

var G__1215 = (i__3481__auto___1214 + (1));
i__3481__auto___1214 = G__1215;
continue;
} else {
}
break;
}

var G__1211 = args1209.length;
switch (G__1211) {
case 1:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args1209.length)].join('')));

}
});

cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode.call(null,goog.object.get(source_map,"mappings"),source_map);
});

cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = goog.object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq.call(null,clojure.string.split.call(null,mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(lines__$1){
var line = cljs.core.first.call(null,lines__$1);
var vec__1212 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__1217 = cljs.core.next.call(null,segs__$1);
var G__1218 = nrelseg;
var G__1219 = cljs.source_map.update_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__1217;
relseg__$1 = G__1218;
result__$1 = G__1219;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__1212,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__1212,(1),null);
var G__1220 = (gline + (1));
var G__1221 = cljs.core.next.call(null,lines__$1);
var G__1222 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__1223 = result__$1;
gline = G__1220;
lines__$1 = G__1221;
relseg = G__1222;
result = G__1223;
continue;
} else {
return result;
}
break;
}
});

cljs.source_map.decode.cljs$lang$maxFixedArity = 2;
/**
 * Take a nested sorted map encoding line and column information
 * for a file and return a vector of vectors of encoded segments.
 * Each vector represents a line, and the internal vectors are segments
 * representing the contents of the line.
 */
cljs.source_map.lines__GT_segs = (function cljs$source_map$lines__GT_segs(lines){
var relseg = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null));
return cljs.core.reduce.call(null,((function (relseg){
return (function (segs,cols){
cljs.core.swap_BANG_.call(null,relseg,((function (relseg){
return (function (p__1230){
var vec__1231 = p__1230;
var _ = cljs.core.nth.call(null,vec__1231,(0),null);
var source = cljs.core.nth.call(null,vec__1231,(1),null);
var line = cljs.core.nth.call(null,vec__1231,(2),null);
var col = cljs.core.nth.call(null,vec__1231,(3),null);
var name = cljs.core.nth.call(null,vec__1231,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
});})(relseg))
);

return cljs.core.conj.call(null,segs,cljs.core.reduce.call(null,((function (relseg){
return (function (cols__$1,p__1232){
var vec__1233 = p__1232;
var gcol = cljs.core.nth.call(null,vec__1233,(0),null);
var sidx = cljs.core.nth.call(null,vec__1233,(1),null);
var line = cljs.core.nth.call(null,vec__1233,(2),null);
var col = cljs.core.nth.call(null,vec__1233,(3),null);
var name = cljs.core.nth.call(null,vec__1233,(4),null);
var seg = vec__1233;
var offset = cljs.core.map.call(null,cljs.core._,seg,cljs.core.deref.call(null,relseg));
cljs.core.swap_BANG_.call(null,relseg,((function (offset,vec__1233,gcol,sidx,line,col,name,seg,relseg){
return (function (p__1234){
var vec__1235 = p__1234;
var _ = cljs.core.nth.call(null,vec__1235,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__1235,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__1235,(2),null);
var ___$3 = cljs.core.nth.call(null,vec__1235,(3),null);
var lname = cljs.core.nth.call(null,vec__1235,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__2951__auto__ = name;
if(cljs.core.truth_(or__2951__auto__)){
return or__2951__auto__;
} else {
return lname;
}
})()], null);
});})(offset,vec__1233,gcol,sidx,line,col,name,seg,relseg))
);

return cljs.core.conj.call(null,cols__$1,cljs.source_map.base64_vlq.encode.call(null,offset));
});})(relseg))
,cljs.core.PersistentVector.EMPTY,cols));
});})(relseg))
,cljs.core.PersistentVector.EMPTY,lines);
});
/**
 * Take an internal source map representation represented as nested
 * sorted maps of file, line, column and return a source map v3 JSON
 * string.
 */
cljs.source_map.encode = (function cljs$source_map$encode(m,opts){
var lines = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null));
var names__GT_idx = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var name_idx = cljs.core.atom.call(null,(0));
var preamble_lines = cljs.core.take.call(null,(function (){var or__2951__auto__ = new cljs.core.Keyword(null,"preamble-line-count","preamble-line-count",-659949744).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__2951__auto__)){
return or__2951__auto__;
} else {
return (0);
}
})(),cljs.core.repeat.call(null,cljs.core.PersistentVector.EMPTY));
var info__GT_segv = ((function (lines,names__GT_idx,name_idx,preamble_lines){
return (function (info,source_idx,line,col){
var segv = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gcol","gcol",309250807).cljs$core$IFn$_invoke$arity$1(info),source_idx,line,col], null);
var temp__4655__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
if(cljs.core.truth_(temp__4655__auto__)){
var name = temp__4655__auto__;
var idx = (function (){var temp__4655__auto____$1 = cljs.core.get.call(null,cljs.core.deref.call(null,names__GT_idx),name);
if(cljs.core.truth_(temp__4655__auto____$1)){
var idx = temp__4655__auto____$1;
return idx;
} else {
var cidx = cljs.core.deref.call(null,name_idx);
cljs.core.swap_BANG_.call(null,names__GT_idx,cljs.core.assoc,name,cidx);

cljs.core.swap_BANG_.call(null,name_idx,cljs.core.inc);

return cidx;
}
})();
return cljs.core.conj.call(null,segv,idx);
} else {
return segv;
}
});})(lines,names__GT_idx,name_idx,preamble_lines))
;
var encode_cols = ((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (infos,source_idx,line,col){
var seq__1289 = cljs.core.seq.call(null,infos);
var chunk__1290 = null;
var count__1291 = (0);
var i__1292 = (0);
while(true){
if((i__1292 < count__1291)){
var info = cljs.core._nth.call(null,chunk__1290,i__1292);
var segv_1339 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_1340 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_1341 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_1340 > (lc_1341 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__1289,chunk__1290,count__1291,i__1292,segv_1339,gline_1340,lc_1341,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_1340 - (lc_1341 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_1339], null));
});})(seq__1289,chunk__1290,count__1291,i__1292,segv_1339,gline_1340,lc_1341,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__1289,chunk__1290,count__1291,i__1292,segv_1339,gline_1340,lc_1341,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_1340], null),cljs.core.conj,segv_1339);
});})(seq__1289,chunk__1290,count__1291,i__1292,segv_1339,gline_1340,lc_1341,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__1342 = seq__1289;
var G__1343 = chunk__1290;
var G__1344 = count__1291;
var G__1345 = (i__1292 + (1));
seq__1289 = G__1342;
chunk__1290 = G__1343;
count__1291 = G__1344;
i__1292 = G__1345;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__1289);
if(temp__4657__auto__){
var seq__1289__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1289__$1)){
var c__3334__auto__ = cljs.core.chunk_first.call(null,seq__1289__$1);
var G__1346 = cljs.core.chunk_rest.call(null,seq__1289__$1);
var G__1347 = c__3334__auto__;
var G__1348 = cljs.core.count.call(null,c__3334__auto__);
var G__1349 = (0);
seq__1289 = G__1346;
chunk__1290 = G__1347;
count__1291 = G__1348;
i__1292 = G__1349;
continue;
} else {
var info = cljs.core.first.call(null,seq__1289__$1);
var segv_1350 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_1351 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_1352 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_1351 > (lc_1352 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__1289,chunk__1290,count__1291,i__1292,segv_1350,gline_1351,lc_1352,info,seq__1289__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_1351 - (lc_1352 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_1350], null));
});})(seq__1289,chunk__1290,count__1291,i__1292,segv_1350,gline_1351,lc_1352,info,seq__1289__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__1289,chunk__1290,count__1291,i__1292,segv_1350,gline_1351,lc_1352,info,seq__1289__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_1351], null),cljs.core.conj,segv_1350);
});})(seq__1289,chunk__1290,count__1291,i__1292,segv_1350,gline_1351,lc_1352,info,seq__1289__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__1353 = cljs.core.next.call(null,seq__1289__$1);
var G__1354 = null;
var G__1355 = (0);
var G__1356 = (0);
seq__1289 = G__1353;
chunk__1290 = G__1354;
count__1291 = G__1355;
i__1292 = G__1356;
continue;
}
} else {
return null;
}
}
break;
}
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
;
var seq__1293_1357 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__1294_1358 = null;
var count__1295_1359 = (0);
var i__1296_1360 = (0);
while(true){
if((i__1296_1360 < count__1295_1359)){
var vec__1297_1361 = cljs.core._nth.call(null,chunk__1294_1358,i__1296_1360);
var source_idx_1362 = cljs.core.nth.call(null,vec__1297_1361,(0),null);
var vec__1298_1363 = cljs.core.nth.call(null,vec__1297_1361,(1),null);
var __1364 = cljs.core.nth.call(null,vec__1298_1363,(0),null);
var lines_1365__$1 = cljs.core.nth.call(null,vec__1298_1363,(1),null);
var seq__1299_1366 = cljs.core.seq.call(null,lines_1365__$1);
var chunk__1300_1367 = null;
var count__1301_1368 = (0);
var i__1302_1369 = (0);
while(true){
if((i__1302_1369 < count__1301_1368)){
var vec__1303_1370 = cljs.core._nth.call(null,chunk__1300_1367,i__1302_1369);
var line_1371 = cljs.core.nth.call(null,vec__1303_1370,(0),null);
var cols_1372 = cljs.core.nth.call(null,vec__1303_1370,(1),null);
var seq__1304_1373 = cljs.core.seq.call(null,cols_1372);
var chunk__1305_1374 = null;
var count__1306_1375 = (0);
var i__1307_1376 = (0);
while(true){
if((i__1307_1376 < count__1306_1375)){
var vec__1308_1377 = cljs.core._nth.call(null,chunk__1305_1374,i__1307_1376);
var col_1378 = cljs.core.nth.call(null,vec__1308_1377,(0),null);
var infos_1379 = cljs.core.nth.call(null,vec__1308_1377,(1),null);
encode_cols.call(null,infos_1379,source_idx_1362,line_1371,col_1378);

var G__1380 = seq__1304_1373;
var G__1381 = chunk__1305_1374;
var G__1382 = count__1306_1375;
var G__1383 = (i__1307_1376 + (1));
seq__1304_1373 = G__1380;
chunk__1305_1374 = G__1381;
count__1306_1375 = G__1382;
i__1307_1376 = G__1383;
continue;
} else {
var temp__4657__auto___1384 = cljs.core.seq.call(null,seq__1304_1373);
if(temp__4657__auto___1384){
var seq__1304_1385__$1 = temp__4657__auto___1384;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1304_1385__$1)){
var c__3334__auto___1386 = cljs.core.chunk_first.call(null,seq__1304_1385__$1);
var G__1387 = cljs.core.chunk_rest.call(null,seq__1304_1385__$1);
var G__1388 = c__3334__auto___1386;
var G__1389 = cljs.core.count.call(null,c__3334__auto___1386);
var G__1390 = (0);
seq__1304_1373 = G__1387;
chunk__1305_1374 = G__1388;
count__1306_1375 = G__1389;
i__1307_1376 = G__1390;
continue;
} else {
var vec__1309_1391 = cljs.core.first.call(null,seq__1304_1385__$1);
var col_1392 = cljs.core.nth.call(null,vec__1309_1391,(0),null);
var infos_1393 = cljs.core.nth.call(null,vec__1309_1391,(1),null);
encode_cols.call(null,infos_1393,source_idx_1362,line_1371,col_1392);

var G__1394 = cljs.core.next.call(null,seq__1304_1385__$1);
var G__1395 = null;
var G__1396 = (0);
var G__1397 = (0);
seq__1304_1373 = G__1394;
chunk__1305_1374 = G__1395;
count__1306_1375 = G__1396;
i__1307_1376 = G__1397;
continue;
}
} else {
}
}
break;
}

var G__1398 = seq__1299_1366;
var G__1399 = chunk__1300_1367;
var G__1400 = count__1301_1368;
var G__1401 = (i__1302_1369 + (1));
seq__1299_1366 = G__1398;
chunk__1300_1367 = G__1399;
count__1301_1368 = G__1400;
i__1302_1369 = G__1401;
continue;
} else {
var temp__4657__auto___1402 = cljs.core.seq.call(null,seq__1299_1366);
if(temp__4657__auto___1402){
var seq__1299_1403__$1 = temp__4657__auto___1402;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1299_1403__$1)){
var c__3334__auto___1404 = cljs.core.chunk_first.call(null,seq__1299_1403__$1);
var G__1405 = cljs.core.chunk_rest.call(null,seq__1299_1403__$1);
var G__1406 = c__3334__auto___1404;
var G__1407 = cljs.core.count.call(null,c__3334__auto___1404);
var G__1408 = (0);
seq__1299_1366 = G__1405;
chunk__1300_1367 = G__1406;
count__1301_1368 = G__1407;
i__1302_1369 = G__1408;
continue;
} else {
var vec__1310_1409 = cljs.core.first.call(null,seq__1299_1403__$1);
var line_1410 = cljs.core.nth.call(null,vec__1310_1409,(0),null);
var cols_1411 = cljs.core.nth.call(null,vec__1310_1409,(1),null);
var seq__1311_1412 = cljs.core.seq.call(null,cols_1411);
var chunk__1312_1413 = null;
var count__1313_1414 = (0);
var i__1314_1415 = (0);
while(true){
if((i__1314_1415 < count__1313_1414)){
var vec__1315_1416 = cljs.core._nth.call(null,chunk__1312_1413,i__1314_1415);
var col_1417 = cljs.core.nth.call(null,vec__1315_1416,(0),null);
var infos_1418 = cljs.core.nth.call(null,vec__1315_1416,(1),null);
encode_cols.call(null,infos_1418,source_idx_1362,line_1410,col_1417);

var G__1419 = seq__1311_1412;
var G__1420 = chunk__1312_1413;
var G__1421 = count__1313_1414;
var G__1422 = (i__1314_1415 + (1));
seq__1311_1412 = G__1419;
chunk__1312_1413 = G__1420;
count__1313_1414 = G__1421;
i__1314_1415 = G__1422;
continue;
} else {
var temp__4657__auto___1423__$1 = cljs.core.seq.call(null,seq__1311_1412);
if(temp__4657__auto___1423__$1){
var seq__1311_1424__$1 = temp__4657__auto___1423__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1311_1424__$1)){
var c__3334__auto___1425 = cljs.core.chunk_first.call(null,seq__1311_1424__$1);
var G__1426 = cljs.core.chunk_rest.call(null,seq__1311_1424__$1);
var G__1427 = c__3334__auto___1425;
var G__1428 = cljs.core.count.call(null,c__3334__auto___1425);
var G__1429 = (0);
seq__1311_1412 = G__1426;
chunk__1312_1413 = G__1427;
count__1313_1414 = G__1428;
i__1314_1415 = G__1429;
continue;
} else {
var vec__1316_1430 = cljs.core.first.call(null,seq__1311_1424__$1);
var col_1431 = cljs.core.nth.call(null,vec__1316_1430,(0),null);
var infos_1432 = cljs.core.nth.call(null,vec__1316_1430,(1),null);
encode_cols.call(null,infos_1432,source_idx_1362,line_1410,col_1431);

var G__1433 = cljs.core.next.call(null,seq__1311_1424__$1);
var G__1434 = null;
var G__1435 = (0);
var G__1436 = (0);
seq__1311_1412 = G__1433;
chunk__1312_1413 = G__1434;
count__1313_1414 = G__1435;
i__1314_1415 = G__1436;
continue;
}
} else {
}
}
break;
}

var G__1437 = cljs.core.next.call(null,seq__1299_1403__$1);
var G__1438 = null;
var G__1439 = (0);
var G__1440 = (0);
seq__1299_1366 = G__1437;
chunk__1300_1367 = G__1438;
count__1301_1368 = G__1439;
i__1302_1369 = G__1440;
continue;
}
} else {
}
}
break;
}

var G__1441 = seq__1293_1357;
var G__1442 = chunk__1294_1358;
var G__1443 = count__1295_1359;
var G__1444 = (i__1296_1360 + (1));
seq__1293_1357 = G__1441;
chunk__1294_1358 = G__1442;
count__1295_1359 = G__1443;
i__1296_1360 = G__1444;
continue;
} else {
var temp__4657__auto___1445 = cljs.core.seq.call(null,seq__1293_1357);
if(temp__4657__auto___1445){
var seq__1293_1446__$1 = temp__4657__auto___1445;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1293_1446__$1)){
var c__3334__auto___1447 = cljs.core.chunk_first.call(null,seq__1293_1446__$1);
var G__1448 = cljs.core.chunk_rest.call(null,seq__1293_1446__$1);
var G__1449 = c__3334__auto___1447;
var G__1450 = cljs.core.count.call(null,c__3334__auto___1447);
var G__1451 = (0);
seq__1293_1357 = G__1448;
chunk__1294_1358 = G__1449;
count__1295_1359 = G__1450;
i__1296_1360 = G__1451;
continue;
} else {
var vec__1317_1452 = cljs.core.first.call(null,seq__1293_1446__$1);
var source_idx_1453 = cljs.core.nth.call(null,vec__1317_1452,(0),null);
var vec__1318_1454 = cljs.core.nth.call(null,vec__1317_1452,(1),null);
var __1455 = cljs.core.nth.call(null,vec__1318_1454,(0),null);
var lines_1456__$1 = cljs.core.nth.call(null,vec__1318_1454,(1),null);
var seq__1319_1457 = cljs.core.seq.call(null,lines_1456__$1);
var chunk__1320_1458 = null;
var count__1321_1459 = (0);
var i__1322_1460 = (0);
while(true){
if((i__1322_1460 < count__1321_1459)){
var vec__1323_1461 = cljs.core._nth.call(null,chunk__1320_1458,i__1322_1460);
var line_1462 = cljs.core.nth.call(null,vec__1323_1461,(0),null);
var cols_1463 = cljs.core.nth.call(null,vec__1323_1461,(1),null);
var seq__1324_1464 = cljs.core.seq.call(null,cols_1463);
var chunk__1325_1465 = null;
var count__1326_1466 = (0);
var i__1327_1467 = (0);
while(true){
if((i__1327_1467 < count__1326_1466)){
var vec__1328_1468 = cljs.core._nth.call(null,chunk__1325_1465,i__1327_1467);
var col_1469 = cljs.core.nth.call(null,vec__1328_1468,(0),null);
var infos_1470 = cljs.core.nth.call(null,vec__1328_1468,(1),null);
encode_cols.call(null,infos_1470,source_idx_1453,line_1462,col_1469);

var G__1471 = seq__1324_1464;
var G__1472 = chunk__1325_1465;
var G__1473 = count__1326_1466;
var G__1474 = (i__1327_1467 + (1));
seq__1324_1464 = G__1471;
chunk__1325_1465 = G__1472;
count__1326_1466 = G__1473;
i__1327_1467 = G__1474;
continue;
} else {
var temp__4657__auto___1475__$1 = cljs.core.seq.call(null,seq__1324_1464);
if(temp__4657__auto___1475__$1){
var seq__1324_1476__$1 = temp__4657__auto___1475__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1324_1476__$1)){
var c__3334__auto___1477 = cljs.core.chunk_first.call(null,seq__1324_1476__$1);
var G__1478 = cljs.core.chunk_rest.call(null,seq__1324_1476__$1);
var G__1479 = c__3334__auto___1477;
var G__1480 = cljs.core.count.call(null,c__3334__auto___1477);
var G__1481 = (0);
seq__1324_1464 = G__1478;
chunk__1325_1465 = G__1479;
count__1326_1466 = G__1480;
i__1327_1467 = G__1481;
continue;
} else {
var vec__1329_1482 = cljs.core.first.call(null,seq__1324_1476__$1);
var col_1483 = cljs.core.nth.call(null,vec__1329_1482,(0),null);
var infos_1484 = cljs.core.nth.call(null,vec__1329_1482,(1),null);
encode_cols.call(null,infos_1484,source_idx_1453,line_1462,col_1483);

var G__1485 = cljs.core.next.call(null,seq__1324_1476__$1);
var G__1486 = null;
var G__1487 = (0);
var G__1488 = (0);
seq__1324_1464 = G__1485;
chunk__1325_1465 = G__1486;
count__1326_1466 = G__1487;
i__1327_1467 = G__1488;
continue;
}
} else {
}
}
break;
}

var G__1489 = seq__1319_1457;
var G__1490 = chunk__1320_1458;
var G__1491 = count__1321_1459;
var G__1492 = (i__1322_1460 + (1));
seq__1319_1457 = G__1489;
chunk__1320_1458 = G__1490;
count__1321_1459 = G__1491;
i__1322_1460 = G__1492;
continue;
} else {
var temp__4657__auto___1493__$1 = cljs.core.seq.call(null,seq__1319_1457);
if(temp__4657__auto___1493__$1){
var seq__1319_1494__$1 = temp__4657__auto___1493__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1319_1494__$1)){
var c__3334__auto___1495 = cljs.core.chunk_first.call(null,seq__1319_1494__$1);
var G__1496 = cljs.core.chunk_rest.call(null,seq__1319_1494__$1);
var G__1497 = c__3334__auto___1495;
var G__1498 = cljs.core.count.call(null,c__3334__auto___1495);
var G__1499 = (0);
seq__1319_1457 = G__1496;
chunk__1320_1458 = G__1497;
count__1321_1459 = G__1498;
i__1322_1460 = G__1499;
continue;
} else {
var vec__1330_1500 = cljs.core.first.call(null,seq__1319_1494__$1);
var line_1501 = cljs.core.nth.call(null,vec__1330_1500,(0),null);
var cols_1502 = cljs.core.nth.call(null,vec__1330_1500,(1),null);
var seq__1331_1503 = cljs.core.seq.call(null,cols_1502);
var chunk__1332_1504 = null;
var count__1333_1505 = (0);
var i__1334_1506 = (0);
while(true){
if((i__1334_1506 < count__1333_1505)){
var vec__1335_1507 = cljs.core._nth.call(null,chunk__1332_1504,i__1334_1506);
var col_1508 = cljs.core.nth.call(null,vec__1335_1507,(0),null);
var infos_1509 = cljs.core.nth.call(null,vec__1335_1507,(1),null);
encode_cols.call(null,infos_1509,source_idx_1453,line_1501,col_1508);

var G__1510 = seq__1331_1503;
var G__1511 = chunk__1332_1504;
var G__1512 = count__1333_1505;
var G__1513 = (i__1334_1506 + (1));
seq__1331_1503 = G__1510;
chunk__1332_1504 = G__1511;
count__1333_1505 = G__1512;
i__1334_1506 = G__1513;
continue;
} else {
var temp__4657__auto___1514__$2 = cljs.core.seq.call(null,seq__1331_1503);
if(temp__4657__auto___1514__$2){
var seq__1331_1515__$1 = temp__4657__auto___1514__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1331_1515__$1)){
var c__3334__auto___1516 = cljs.core.chunk_first.call(null,seq__1331_1515__$1);
var G__1517 = cljs.core.chunk_rest.call(null,seq__1331_1515__$1);
var G__1518 = c__3334__auto___1516;
var G__1519 = cljs.core.count.call(null,c__3334__auto___1516);
var G__1520 = (0);
seq__1331_1503 = G__1517;
chunk__1332_1504 = G__1518;
count__1333_1505 = G__1519;
i__1334_1506 = G__1520;
continue;
} else {
var vec__1336_1521 = cljs.core.first.call(null,seq__1331_1515__$1);
var col_1522 = cljs.core.nth.call(null,vec__1336_1521,(0),null);
var infos_1523 = cljs.core.nth.call(null,vec__1336_1521,(1),null);
encode_cols.call(null,infos_1523,source_idx_1453,line_1501,col_1522);

var G__1524 = cljs.core.next.call(null,seq__1331_1515__$1);
var G__1525 = null;
var G__1526 = (0);
var G__1527 = (0);
seq__1331_1503 = G__1524;
chunk__1332_1504 = G__1525;
count__1333_1505 = G__1526;
i__1334_1506 = G__1527;
continue;
}
} else {
}
}
break;
}

var G__1528 = cljs.core.next.call(null,seq__1319_1494__$1);
var G__1529 = null;
var G__1530 = (0);
var G__1531 = (0);
seq__1319_1457 = G__1528;
chunk__1320_1458 = G__1529;
count__1321_1459 = G__1530;
i__1322_1460 = G__1531;
continue;
}
} else {
}
}
break;
}

var G__1532 = cljs.core.next.call(null,seq__1293_1446__$1);
var G__1533 = null;
var G__1534 = (0);
var G__1535 = (0);
seq__1293_1357 = G__1532;
chunk__1294_1358 = G__1533;
count__1295_1359 = G__1534;
i__1296_1360 = G__1535;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__1337 = {"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys.call(null,m);
var f = cljs.core.comp.call(null,((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__1236_SHARP_){
return [cljs.core.str(p1__1236_SHARP_),cljs.core.str("?rel="),cljs.core.str((new Date()).valueOf())].join('');
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
:cljs.core.identity),((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__1237_SHARP_){
return cljs.core.last.call(null,clojure.string.split.call(null,p1__1237_SHARP_,/\//));
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
);
return cljs.core.into_array.call(null,cljs.core.map.call(null,f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.call(null,";",cljs.core.map.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__1238_SHARP_){
return clojure.string.join.call(null,",",p1__1238_SHARP_);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,cljs.source_map.lines__GT_segs.call(null,cljs.core.concat.call(null,preamble_lines,cljs.core.deref.call(null,lines))))), "names": cljs.core.into_array.call(null,cljs.core.map.call(null,clojure.set.map_invert.call(null,cljs.core.deref.call(null,names__GT_idx)),cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,names__GT_idx)))))};
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__1338 = G__1337;
goog.object.set(G__1338,"sourcesContent",cljs.core.into_array.call(null,new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__1338;
} else {
return G__1337;
}
})();
return JSON.stringify(source_map_file_contents);
});
/**
 * Merge an internal source map representation of a single
 * ClojureScript file mapping original to generated with a
 * second source map mapping original JS to generated JS.
 * The is to support source maps that work through multiple
 * compilation steps like Google Closure optimization passes.
 */
cljs.source_map.merge_source_maps = (function cljs$source_map$merge_source_maps(cljs_map,js_map){
var line_map_seq = cljs.core.seq.call(null,cljs_map);
var new_lines = cljs.core.sorted_map.call(null);
while(true){
if(line_map_seq){
var vec__1541 = cljs.core.first.call(null,line_map_seq);
var line = cljs.core.nth.call(null,vec__1541,(0),null);
var col_map = cljs.core.nth.call(null,vec__1541,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq.call(null,col_map);
var new_cols = cljs.core.sorted_map.call(null);
while(true){
if(col_map_seq){
var vec__1542 = cljs.core.first.call(null,col_map_seq);
var col = cljs.core.nth.call(null,vec__1542,(0),null);
var infos = cljs.core.nth.call(null,vec__1542,(1),null);
var G__1546 = cljs.core.next.call(null,col_map_seq);
var G__1547 = cljs.core.assoc.call(null,new_cols,col,cljs.core.reduce.call(null,((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__1542,col,infos,vec__1541,line,col_map){
return (function (v,p__1543){
var map__1544 = p__1543;
var map__1544__$1 = ((((!((map__1544 == null)))?((((map__1544.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1544.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1544):map__1544);
var gline = cljs.core.get.call(null,map__1544__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.call(null,map__1544__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.call(null,v,cljs.core.get_in.call(null,js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__1542,col,infos,vec__1541,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__1546;
new_cols = G__1547;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__1548 = cljs.core.next.call(null,line_map_seq);
var G__1549 = cljs.core.assoc.call(null,new_lines,line,new_cols);
line_map_seq = G__1548;
new_lines = G__1549;
continue;
} else {
return new_lines;
}
break;
}
});
/**
 * Given a ClojureScript to JavaScript source map, invert it. Useful when
 * mapping JavaScript stack traces when environment support is unavailable.
 */
cljs.source_map.invert_reverse_map = (function cljs$source_map$invert_reverse_map(reverse_map){
var inverted = cljs.core.atom.call(null,cljs.core.sorted_map.call(null));
var seq__1600_1650 = cljs.core.seq.call(null,reverse_map);
var chunk__1601_1651 = null;
var count__1602_1652 = (0);
var i__1603_1653 = (0);
while(true){
if((i__1603_1653 < count__1602_1652)){
var vec__1604_1654 = cljs.core._nth.call(null,chunk__1601_1651,i__1603_1653);
var line_1655 = cljs.core.nth.call(null,vec__1604_1654,(0),null);
var columns_1656 = cljs.core.nth.call(null,vec__1604_1654,(1),null);
var seq__1605_1657 = cljs.core.seq.call(null,columns_1656);
var chunk__1606_1658 = null;
var count__1607_1659 = (0);
var i__1608_1660 = (0);
while(true){
if((i__1608_1660 < count__1607_1659)){
var vec__1609_1661 = cljs.core._nth.call(null,chunk__1606_1658,i__1608_1660);
var column_1662 = cljs.core.nth.call(null,vec__1609_1661,(0),null);
var column_info_1663 = cljs.core.nth.call(null,vec__1609_1661,(1),null);
var seq__1610_1664 = cljs.core.seq.call(null,column_info_1663);
var chunk__1611_1665 = null;
var count__1612_1666 = (0);
var i__1613_1667 = (0);
while(true){
if((i__1613_1667 < count__1612_1666)){
var map__1614_1668 = cljs.core._nth.call(null,chunk__1611_1665,i__1613_1667);
var map__1614_1669__$1 = ((((!((map__1614_1668 == null)))?((((map__1614_1668.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1614_1668.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1614_1668):map__1614_1668);
var gline_1670 = cljs.core.get.call(null,map__1614_1669__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_1671 = cljs.core.get.call(null,map__1614_1669__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_1672 = cljs.core.get.call(null,map__1614_1669__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_1670], null),cljs.core.fnil.call(null,((function (seq__1610_1664,chunk__1611_1665,count__1612_1666,i__1613_1667,seq__1605_1657,chunk__1606_1658,count__1607_1659,i__1608_1660,seq__1600_1650,chunk__1601_1651,count__1602_1652,i__1603_1653,map__1614_1668,map__1614_1669__$1,gline_1670,gcol_1671,name_1672,vec__1609_1661,column_1662,column_info_1663,vec__1604_1654,line_1655,columns_1656,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_1671], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_1655,new cljs.core.Keyword(null,"col","col",-1959363084),column_1662,new cljs.core.Keyword(null,"name","name",1843675177),name_1672], null));
});})(seq__1610_1664,chunk__1611_1665,count__1612_1666,i__1613_1667,seq__1605_1657,chunk__1606_1658,count__1607_1659,i__1608_1660,seq__1600_1650,chunk__1601_1651,count__1602_1652,i__1603_1653,map__1614_1668,map__1614_1669__$1,gline_1670,gcol_1671,name_1672,vec__1609_1661,column_1662,column_info_1663,vec__1604_1654,line_1655,columns_1656,inverted))
,cljs.core.sorted_map.call(null)));

var G__1673 = seq__1610_1664;
var G__1674 = chunk__1611_1665;
var G__1675 = count__1612_1666;
var G__1676 = (i__1613_1667 + (1));
seq__1610_1664 = G__1673;
chunk__1611_1665 = G__1674;
count__1612_1666 = G__1675;
i__1613_1667 = G__1676;
continue;
} else {
var temp__4657__auto___1677 = cljs.core.seq.call(null,seq__1610_1664);
if(temp__4657__auto___1677){
var seq__1610_1678__$1 = temp__4657__auto___1677;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1610_1678__$1)){
var c__3334__auto___1679 = cljs.core.chunk_first.call(null,seq__1610_1678__$1);
var G__1680 = cljs.core.chunk_rest.call(null,seq__1610_1678__$1);
var G__1681 = c__3334__auto___1679;
var G__1682 = cljs.core.count.call(null,c__3334__auto___1679);
var G__1683 = (0);
seq__1610_1664 = G__1680;
chunk__1611_1665 = G__1681;
count__1612_1666 = G__1682;
i__1613_1667 = G__1683;
continue;
} else {
var map__1616_1684 = cljs.core.first.call(null,seq__1610_1678__$1);
var map__1616_1685__$1 = ((((!((map__1616_1684 == null)))?((((map__1616_1684.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1616_1684.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1616_1684):map__1616_1684);
var gline_1686 = cljs.core.get.call(null,map__1616_1685__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_1687 = cljs.core.get.call(null,map__1616_1685__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_1688 = cljs.core.get.call(null,map__1616_1685__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_1686], null),cljs.core.fnil.call(null,((function (seq__1610_1664,chunk__1611_1665,count__1612_1666,i__1613_1667,seq__1605_1657,chunk__1606_1658,count__1607_1659,i__1608_1660,seq__1600_1650,chunk__1601_1651,count__1602_1652,i__1603_1653,map__1616_1684,map__1616_1685__$1,gline_1686,gcol_1687,name_1688,seq__1610_1678__$1,temp__4657__auto___1677,vec__1609_1661,column_1662,column_info_1663,vec__1604_1654,line_1655,columns_1656,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_1687], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_1655,new cljs.core.Keyword(null,"col","col",-1959363084),column_1662,new cljs.core.Keyword(null,"name","name",1843675177),name_1688], null));
});})(seq__1610_1664,chunk__1611_1665,count__1612_1666,i__1613_1667,seq__1605_1657,chunk__1606_1658,count__1607_1659,i__1608_1660,seq__1600_1650,chunk__1601_1651,count__1602_1652,i__1603_1653,map__1616_1684,map__1616_1685__$1,gline_1686,gcol_1687,name_1688,seq__1610_1678__$1,temp__4657__auto___1677,vec__1609_1661,column_1662,column_info_1663,vec__1604_1654,line_1655,columns_1656,inverted))
,cljs.core.sorted_map.call(null)));

var G__1689 = cljs.core.next.call(null,seq__1610_1678__$1);
var G__1690 = null;
var G__1691 = (0);
var G__1692 = (0);
seq__1610_1664 = G__1689;
chunk__1611_1665 = G__1690;
count__1612_1666 = G__1691;
i__1613_1667 = G__1692;
continue;
}
} else {
}
}
break;
}

var G__1693 = seq__1605_1657;
var G__1694 = chunk__1606_1658;
var G__1695 = count__1607_1659;
var G__1696 = (i__1608_1660 + (1));
seq__1605_1657 = G__1693;
chunk__1606_1658 = G__1694;
count__1607_1659 = G__1695;
i__1608_1660 = G__1696;
continue;
} else {
var temp__4657__auto___1697 = cljs.core.seq.call(null,seq__1605_1657);
if(temp__4657__auto___1697){
var seq__1605_1698__$1 = temp__4657__auto___1697;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1605_1698__$1)){
var c__3334__auto___1699 = cljs.core.chunk_first.call(null,seq__1605_1698__$1);
var G__1700 = cljs.core.chunk_rest.call(null,seq__1605_1698__$1);
var G__1701 = c__3334__auto___1699;
var G__1702 = cljs.core.count.call(null,c__3334__auto___1699);
var G__1703 = (0);
seq__1605_1657 = G__1700;
chunk__1606_1658 = G__1701;
count__1607_1659 = G__1702;
i__1608_1660 = G__1703;
continue;
} else {
var vec__1618_1704 = cljs.core.first.call(null,seq__1605_1698__$1);
var column_1705 = cljs.core.nth.call(null,vec__1618_1704,(0),null);
var column_info_1706 = cljs.core.nth.call(null,vec__1618_1704,(1),null);
var seq__1619_1707 = cljs.core.seq.call(null,column_info_1706);
var chunk__1620_1708 = null;
var count__1621_1709 = (0);
var i__1622_1710 = (0);
while(true){
if((i__1622_1710 < count__1621_1709)){
var map__1623_1711 = cljs.core._nth.call(null,chunk__1620_1708,i__1622_1710);
var map__1623_1712__$1 = ((((!((map__1623_1711 == null)))?((((map__1623_1711.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1623_1711.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1623_1711):map__1623_1711);
var gline_1713 = cljs.core.get.call(null,map__1623_1712__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_1714 = cljs.core.get.call(null,map__1623_1712__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_1715 = cljs.core.get.call(null,map__1623_1712__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_1713], null),cljs.core.fnil.call(null,((function (seq__1619_1707,chunk__1620_1708,count__1621_1709,i__1622_1710,seq__1605_1657,chunk__1606_1658,count__1607_1659,i__1608_1660,seq__1600_1650,chunk__1601_1651,count__1602_1652,i__1603_1653,map__1623_1711,map__1623_1712__$1,gline_1713,gcol_1714,name_1715,vec__1618_1704,column_1705,column_info_1706,seq__1605_1698__$1,temp__4657__auto___1697,vec__1604_1654,line_1655,columns_1656,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_1714], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_1655,new cljs.core.Keyword(null,"col","col",-1959363084),column_1705,new cljs.core.Keyword(null,"name","name",1843675177),name_1715], null));
});})(seq__1619_1707,chunk__1620_1708,count__1621_1709,i__1622_1710,seq__1605_1657,chunk__1606_1658,count__1607_1659,i__1608_1660,seq__1600_1650,chunk__1601_1651,count__1602_1652,i__1603_1653,map__1623_1711,map__1623_1712__$1,gline_1713,gcol_1714,name_1715,vec__1618_1704,column_1705,column_info_1706,seq__1605_1698__$1,temp__4657__auto___1697,vec__1604_1654,line_1655,columns_1656,inverted))
,cljs.core.sorted_map.call(null)));

var G__1716 = seq__1619_1707;
var G__1717 = chunk__1620_1708;
var G__1718 = count__1621_1709;
var G__1719 = (i__1622_1710 + (1));
seq__1619_1707 = G__1716;
chunk__1620_1708 = G__1717;
count__1621_1709 = G__1718;
i__1622_1710 = G__1719;
continue;
} else {
var temp__4657__auto___1720__$1 = cljs.core.seq.call(null,seq__1619_1707);
if(temp__4657__auto___1720__$1){
var seq__1619_1721__$1 = temp__4657__auto___1720__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1619_1721__$1)){
var c__3334__auto___1722 = cljs.core.chunk_first.call(null,seq__1619_1721__$1);
var G__1723 = cljs.core.chunk_rest.call(null,seq__1619_1721__$1);
var G__1724 = c__3334__auto___1722;
var G__1725 = cljs.core.count.call(null,c__3334__auto___1722);
var G__1726 = (0);
seq__1619_1707 = G__1723;
chunk__1620_1708 = G__1724;
count__1621_1709 = G__1725;
i__1622_1710 = G__1726;
continue;
} else {
var map__1625_1727 = cljs.core.first.call(null,seq__1619_1721__$1);
var map__1625_1728__$1 = ((((!((map__1625_1727 == null)))?((((map__1625_1727.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1625_1727.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1625_1727):map__1625_1727);
var gline_1729 = cljs.core.get.call(null,map__1625_1728__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_1730 = cljs.core.get.call(null,map__1625_1728__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_1731 = cljs.core.get.call(null,map__1625_1728__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_1729], null),cljs.core.fnil.call(null,((function (seq__1619_1707,chunk__1620_1708,count__1621_1709,i__1622_1710,seq__1605_1657,chunk__1606_1658,count__1607_1659,i__1608_1660,seq__1600_1650,chunk__1601_1651,count__1602_1652,i__1603_1653,map__1625_1727,map__1625_1728__$1,gline_1729,gcol_1730,name_1731,seq__1619_1721__$1,temp__4657__auto___1720__$1,vec__1618_1704,column_1705,column_info_1706,seq__1605_1698__$1,temp__4657__auto___1697,vec__1604_1654,line_1655,columns_1656,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_1730], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_1655,new cljs.core.Keyword(null,"col","col",-1959363084),column_1705,new cljs.core.Keyword(null,"name","name",1843675177),name_1731], null));
});})(seq__1619_1707,chunk__1620_1708,count__1621_1709,i__1622_1710,seq__1605_1657,chunk__1606_1658,count__1607_1659,i__1608_1660,seq__1600_1650,chunk__1601_1651,count__1602_1652,i__1603_1653,map__1625_1727,map__1625_1728__$1,gline_1729,gcol_1730,name_1731,seq__1619_1721__$1,temp__4657__auto___1720__$1,vec__1618_1704,column_1705,column_info_1706,seq__1605_1698__$1,temp__4657__auto___1697,vec__1604_1654,line_1655,columns_1656,inverted))
,cljs.core.sorted_map.call(null)));

var G__1732 = cljs.core.next.call(null,seq__1619_1721__$1);
var G__1733 = null;
var G__1734 = (0);
var G__1735 = (0);
seq__1619_1707 = G__1732;
chunk__1620_1708 = G__1733;
count__1621_1709 = G__1734;
i__1622_1710 = G__1735;
continue;
}
} else {
}
}
break;
}

var G__1736 = cljs.core.next.call(null,seq__1605_1698__$1);
var G__1737 = null;
var G__1738 = (0);
var G__1739 = (0);
seq__1605_1657 = G__1736;
chunk__1606_1658 = G__1737;
count__1607_1659 = G__1738;
i__1608_1660 = G__1739;
continue;
}
} else {
}
}
break;
}

var G__1740 = seq__1600_1650;
var G__1741 = chunk__1601_1651;
var G__1742 = count__1602_1652;
var G__1743 = (i__1603_1653 + (1));
seq__1600_1650 = G__1740;
chunk__1601_1651 = G__1741;
count__1602_1652 = G__1742;
i__1603_1653 = G__1743;
continue;
} else {
var temp__4657__auto___1744 = cljs.core.seq.call(null,seq__1600_1650);
if(temp__4657__auto___1744){
var seq__1600_1745__$1 = temp__4657__auto___1744;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1600_1745__$1)){
var c__3334__auto___1746 = cljs.core.chunk_first.call(null,seq__1600_1745__$1);
var G__1747 = cljs.core.chunk_rest.call(null,seq__1600_1745__$1);
var G__1748 = c__3334__auto___1746;
var G__1749 = cljs.core.count.call(null,c__3334__auto___1746);
var G__1750 = (0);
seq__1600_1650 = G__1747;
chunk__1601_1651 = G__1748;
count__1602_1652 = G__1749;
i__1603_1653 = G__1750;
continue;
} else {
var vec__1627_1751 = cljs.core.first.call(null,seq__1600_1745__$1);
var line_1752 = cljs.core.nth.call(null,vec__1627_1751,(0),null);
var columns_1753 = cljs.core.nth.call(null,vec__1627_1751,(1),null);
var seq__1628_1754 = cljs.core.seq.call(null,columns_1753);
var chunk__1629_1755 = null;
var count__1630_1756 = (0);
var i__1631_1757 = (0);
while(true){
if((i__1631_1757 < count__1630_1756)){
var vec__1632_1758 = cljs.core._nth.call(null,chunk__1629_1755,i__1631_1757);
var column_1759 = cljs.core.nth.call(null,vec__1632_1758,(0),null);
var column_info_1760 = cljs.core.nth.call(null,vec__1632_1758,(1),null);
var seq__1633_1761 = cljs.core.seq.call(null,column_info_1760);
var chunk__1634_1762 = null;
var count__1635_1763 = (0);
var i__1636_1764 = (0);
while(true){
if((i__1636_1764 < count__1635_1763)){
var map__1637_1765 = cljs.core._nth.call(null,chunk__1634_1762,i__1636_1764);
var map__1637_1766__$1 = ((((!((map__1637_1765 == null)))?((((map__1637_1765.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1637_1765.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1637_1765):map__1637_1765);
var gline_1767 = cljs.core.get.call(null,map__1637_1766__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_1768 = cljs.core.get.call(null,map__1637_1766__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_1769 = cljs.core.get.call(null,map__1637_1766__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_1767], null),cljs.core.fnil.call(null,((function (seq__1633_1761,chunk__1634_1762,count__1635_1763,i__1636_1764,seq__1628_1754,chunk__1629_1755,count__1630_1756,i__1631_1757,seq__1600_1650,chunk__1601_1651,count__1602_1652,i__1603_1653,map__1637_1765,map__1637_1766__$1,gline_1767,gcol_1768,name_1769,vec__1632_1758,column_1759,column_info_1760,vec__1627_1751,line_1752,columns_1753,seq__1600_1745__$1,temp__4657__auto___1744,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_1768], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_1752,new cljs.core.Keyword(null,"col","col",-1959363084),column_1759,new cljs.core.Keyword(null,"name","name",1843675177),name_1769], null));
});})(seq__1633_1761,chunk__1634_1762,count__1635_1763,i__1636_1764,seq__1628_1754,chunk__1629_1755,count__1630_1756,i__1631_1757,seq__1600_1650,chunk__1601_1651,count__1602_1652,i__1603_1653,map__1637_1765,map__1637_1766__$1,gline_1767,gcol_1768,name_1769,vec__1632_1758,column_1759,column_info_1760,vec__1627_1751,line_1752,columns_1753,seq__1600_1745__$1,temp__4657__auto___1744,inverted))
,cljs.core.sorted_map.call(null)));

var G__1770 = seq__1633_1761;
var G__1771 = chunk__1634_1762;
var G__1772 = count__1635_1763;
var G__1773 = (i__1636_1764 + (1));
seq__1633_1761 = G__1770;
chunk__1634_1762 = G__1771;
count__1635_1763 = G__1772;
i__1636_1764 = G__1773;
continue;
} else {
var temp__4657__auto___1774__$1 = cljs.core.seq.call(null,seq__1633_1761);
if(temp__4657__auto___1774__$1){
var seq__1633_1775__$1 = temp__4657__auto___1774__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1633_1775__$1)){
var c__3334__auto___1776 = cljs.core.chunk_first.call(null,seq__1633_1775__$1);
var G__1777 = cljs.core.chunk_rest.call(null,seq__1633_1775__$1);
var G__1778 = c__3334__auto___1776;
var G__1779 = cljs.core.count.call(null,c__3334__auto___1776);
var G__1780 = (0);
seq__1633_1761 = G__1777;
chunk__1634_1762 = G__1778;
count__1635_1763 = G__1779;
i__1636_1764 = G__1780;
continue;
} else {
var map__1639_1781 = cljs.core.first.call(null,seq__1633_1775__$1);
var map__1639_1782__$1 = ((((!((map__1639_1781 == null)))?((((map__1639_1781.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1639_1781.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1639_1781):map__1639_1781);
var gline_1783 = cljs.core.get.call(null,map__1639_1782__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_1784 = cljs.core.get.call(null,map__1639_1782__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_1785 = cljs.core.get.call(null,map__1639_1782__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_1783], null),cljs.core.fnil.call(null,((function (seq__1633_1761,chunk__1634_1762,count__1635_1763,i__1636_1764,seq__1628_1754,chunk__1629_1755,count__1630_1756,i__1631_1757,seq__1600_1650,chunk__1601_1651,count__1602_1652,i__1603_1653,map__1639_1781,map__1639_1782__$1,gline_1783,gcol_1784,name_1785,seq__1633_1775__$1,temp__4657__auto___1774__$1,vec__1632_1758,column_1759,column_info_1760,vec__1627_1751,line_1752,columns_1753,seq__1600_1745__$1,temp__4657__auto___1744,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_1784], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_1752,new cljs.core.Keyword(null,"col","col",-1959363084),column_1759,new cljs.core.Keyword(null,"name","name",1843675177),name_1785], null));
});})(seq__1633_1761,chunk__1634_1762,count__1635_1763,i__1636_1764,seq__1628_1754,chunk__1629_1755,count__1630_1756,i__1631_1757,seq__1600_1650,chunk__1601_1651,count__1602_1652,i__1603_1653,map__1639_1781,map__1639_1782__$1,gline_1783,gcol_1784,name_1785,seq__1633_1775__$1,temp__4657__auto___1774__$1,vec__1632_1758,column_1759,column_info_1760,vec__1627_1751,line_1752,columns_1753,seq__1600_1745__$1,temp__4657__auto___1744,inverted))
,cljs.core.sorted_map.call(null)));

var G__1786 = cljs.core.next.call(null,seq__1633_1775__$1);
var G__1787 = null;
var G__1788 = (0);
var G__1789 = (0);
seq__1633_1761 = G__1786;
chunk__1634_1762 = G__1787;
count__1635_1763 = G__1788;
i__1636_1764 = G__1789;
continue;
}
} else {
}
}
break;
}

var G__1790 = seq__1628_1754;
var G__1791 = chunk__1629_1755;
var G__1792 = count__1630_1756;
var G__1793 = (i__1631_1757 + (1));
seq__1628_1754 = G__1790;
chunk__1629_1755 = G__1791;
count__1630_1756 = G__1792;
i__1631_1757 = G__1793;
continue;
} else {
var temp__4657__auto___1794__$1 = cljs.core.seq.call(null,seq__1628_1754);
if(temp__4657__auto___1794__$1){
var seq__1628_1795__$1 = temp__4657__auto___1794__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1628_1795__$1)){
var c__3334__auto___1796 = cljs.core.chunk_first.call(null,seq__1628_1795__$1);
var G__1797 = cljs.core.chunk_rest.call(null,seq__1628_1795__$1);
var G__1798 = c__3334__auto___1796;
var G__1799 = cljs.core.count.call(null,c__3334__auto___1796);
var G__1800 = (0);
seq__1628_1754 = G__1797;
chunk__1629_1755 = G__1798;
count__1630_1756 = G__1799;
i__1631_1757 = G__1800;
continue;
} else {
var vec__1641_1801 = cljs.core.first.call(null,seq__1628_1795__$1);
var column_1802 = cljs.core.nth.call(null,vec__1641_1801,(0),null);
var column_info_1803 = cljs.core.nth.call(null,vec__1641_1801,(1),null);
var seq__1642_1804 = cljs.core.seq.call(null,column_info_1803);
var chunk__1643_1805 = null;
var count__1644_1806 = (0);
var i__1645_1807 = (0);
while(true){
if((i__1645_1807 < count__1644_1806)){
var map__1646_1808 = cljs.core._nth.call(null,chunk__1643_1805,i__1645_1807);
var map__1646_1809__$1 = ((((!((map__1646_1808 == null)))?((((map__1646_1808.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1646_1808.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1646_1808):map__1646_1808);
var gline_1810 = cljs.core.get.call(null,map__1646_1809__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_1811 = cljs.core.get.call(null,map__1646_1809__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_1812 = cljs.core.get.call(null,map__1646_1809__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_1810], null),cljs.core.fnil.call(null,((function (seq__1642_1804,chunk__1643_1805,count__1644_1806,i__1645_1807,seq__1628_1754,chunk__1629_1755,count__1630_1756,i__1631_1757,seq__1600_1650,chunk__1601_1651,count__1602_1652,i__1603_1653,map__1646_1808,map__1646_1809__$1,gline_1810,gcol_1811,name_1812,vec__1641_1801,column_1802,column_info_1803,seq__1628_1795__$1,temp__4657__auto___1794__$1,vec__1627_1751,line_1752,columns_1753,seq__1600_1745__$1,temp__4657__auto___1744,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_1811], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_1752,new cljs.core.Keyword(null,"col","col",-1959363084),column_1802,new cljs.core.Keyword(null,"name","name",1843675177),name_1812], null));
});})(seq__1642_1804,chunk__1643_1805,count__1644_1806,i__1645_1807,seq__1628_1754,chunk__1629_1755,count__1630_1756,i__1631_1757,seq__1600_1650,chunk__1601_1651,count__1602_1652,i__1603_1653,map__1646_1808,map__1646_1809__$1,gline_1810,gcol_1811,name_1812,vec__1641_1801,column_1802,column_info_1803,seq__1628_1795__$1,temp__4657__auto___1794__$1,vec__1627_1751,line_1752,columns_1753,seq__1600_1745__$1,temp__4657__auto___1744,inverted))
,cljs.core.sorted_map.call(null)));

var G__1813 = seq__1642_1804;
var G__1814 = chunk__1643_1805;
var G__1815 = count__1644_1806;
var G__1816 = (i__1645_1807 + (1));
seq__1642_1804 = G__1813;
chunk__1643_1805 = G__1814;
count__1644_1806 = G__1815;
i__1645_1807 = G__1816;
continue;
} else {
var temp__4657__auto___1817__$2 = cljs.core.seq.call(null,seq__1642_1804);
if(temp__4657__auto___1817__$2){
var seq__1642_1818__$1 = temp__4657__auto___1817__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1642_1818__$1)){
var c__3334__auto___1819 = cljs.core.chunk_first.call(null,seq__1642_1818__$1);
var G__1820 = cljs.core.chunk_rest.call(null,seq__1642_1818__$1);
var G__1821 = c__3334__auto___1819;
var G__1822 = cljs.core.count.call(null,c__3334__auto___1819);
var G__1823 = (0);
seq__1642_1804 = G__1820;
chunk__1643_1805 = G__1821;
count__1644_1806 = G__1822;
i__1645_1807 = G__1823;
continue;
} else {
var map__1648_1824 = cljs.core.first.call(null,seq__1642_1818__$1);
var map__1648_1825__$1 = ((((!((map__1648_1824 == null)))?((((map__1648_1824.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1648_1824.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1648_1824):map__1648_1824);
var gline_1826 = cljs.core.get.call(null,map__1648_1825__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_1827 = cljs.core.get.call(null,map__1648_1825__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_1828 = cljs.core.get.call(null,map__1648_1825__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_1826], null),cljs.core.fnil.call(null,((function (seq__1642_1804,chunk__1643_1805,count__1644_1806,i__1645_1807,seq__1628_1754,chunk__1629_1755,count__1630_1756,i__1631_1757,seq__1600_1650,chunk__1601_1651,count__1602_1652,i__1603_1653,map__1648_1824,map__1648_1825__$1,gline_1826,gcol_1827,name_1828,seq__1642_1818__$1,temp__4657__auto___1817__$2,vec__1641_1801,column_1802,column_info_1803,seq__1628_1795__$1,temp__4657__auto___1794__$1,vec__1627_1751,line_1752,columns_1753,seq__1600_1745__$1,temp__4657__auto___1744,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_1827], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_1752,new cljs.core.Keyword(null,"col","col",-1959363084),column_1802,new cljs.core.Keyword(null,"name","name",1843675177),name_1828], null));
});})(seq__1642_1804,chunk__1643_1805,count__1644_1806,i__1645_1807,seq__1628_1754,chunk__1629_1755,count__1630_1756,i__1631_1757,seq__1600_1650,chunk__1601_1651,count__1602_1652,i__1603_1653,map__1648_1824,map__1648_1825__$1,gline_1826,gcol_1827,name_1828,seq__1642_1818__$1,temp__4657__auto___1817__$2,vec__1641_1801,column_1802,column_info_1803,seq__1628_1795__$1,temp__4657__auto___1794__$1,vec__1627_1751,line_1752,columns_1753,seq__1600_1745__$1,temp__4657__auto___1744,inverted))
,cljs.core.sorted_map.call(null)));

var G__1829 = cljs.core.next.call(null,seq__1642_1818__$1);
var G__1830 = null;
var G__1831 = (0);
var G__1832 = (0);
seq__1642_1804 = G__1829;
chunk__1643_1805 = G__1830;
count__1644_1806 = G__1831;
i__1645_1807 = G__1832;
continue;
}
} else {
}
}
break;
}

var G__1833 = cljs.core.next.call(null,seq__1628_1795__$1);
var G__1834 = null;
var G__1835 = (0);
var G__1836 = (0);
seq__1628_1754 = G__1833;
chunk__1629_1755 = G__1834;
count__1630_1756 = G__1835;
i__1631_1757 = G__1836;
continue;
}
} else {
}
}
break;
}

var G__1837 = cljs.core.next.call(null,seq__1600_1745__$1);
var G__1838 = null;
var G__1839 = (0);
var G__1840 = (0);
seq__1600_1650 = G__1837;
chunk__1601_1651 = G__1838;
count__1602_1652 = G__1839;
i__1603_1653 = G__1840;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,inverted);
});

//# sourceMappingURL=source_map.js.map