// Compiled by ClojureScript 1.9.229 {:optimize-constants true, :target :nodejs}
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
return cljs.core.reduce.call(null,(function (m,p__9133){
var vec__9134 = p__9133;
var i = cljs.core.nth.call(null,vec__9134,(0),null);
var v = cljs.core.nth.call(null,vec__9134,(1),null);
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
var vec__9140 = seg;
var gcol = cljs.core.nth.call(null,vec__9140,(0),null);
var source = cljs.core.nth.call(null,vec__9140,(1),null);
var line = cljs.core.nth.call(null,vec__9140,(2),null);
var col = cljs.core.nth.call(null,vec__9140,(3),null);
var name = cljs.core.nth.call(null,vec__9140,(4),null);
return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$gcol,gcol,cljs.core.cst$kw$source,(goog.object.get(source_map,"sources")[source]),cljs.core.cst$kw$line,line,cljs.core.cst$kw$col,col,cljs.core.cst$kw$name,(function (){var temp__4657__auto__ = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,seg));
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
var vec__9149 = seg;
var gcol = cljs.core.nth.call(null,vec__9149,(0),null);
var source = cljs.core.nth.call(null,vec__9149,(1),null);
var line = cljs.core.nth.call(null,vec__9149,(2),null);
var col = cljs.core.nth.call(null,vec__9149,(3),null);
var name = cljs.core.nth.call(null,vec__9149,(4),null);
var vec__9152 = relseg;
var rgcol = cljs.core.nth.call(null,vec__9152,(0),null);
var rsource = cljs.core.nth.call(null,vec__9152,(1),null);
var rline = cljs.core.nth.call(null,vec__9152,(2),null);
var rcol = cljs.core.nth.call(null,vec__9152,(3),null);
var rname = cljs.core.nth.call(null,vec__9152,(4),null);
var nseg = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(gcol + rgcol),((function (){var or__6409__auto__ = source;
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return (0);
}
})() + rsource),((function (){var or__6409__auto__ = line;
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return (0);
}
})() + rline),((function (){var or__6409__auto__ = col;
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return (0);
}
})() + rcol),((function (){var or__6409__auto__ = name;
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return (0);
}
})() + rname)], null);
if(cljs.core.truth_(name)){
return cljs.core.with_meta.call(null,nseg,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,(name + rname)], null));
} else {
return nseg;
}
});
/**
 * Helper for decode-reverse. Take a reverse source map and
 *   update it with a segment map.
 */
cljs.source_map.update_reverse_result = (function cljs$source_map$update_reverse_result(result,segmap,gline){
var map__9157 = segmap;
var map__9157__$1 = ((((!((map__9157 == null)))?((((map__9157.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9157.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9157):map__9157);
var gcol = cljs.core.get.call(null,map__9157__$1,cljs.core.cst$kw$gcol);
var source = cljs.core.get.call(null,map__9157__$1,cljs.core.cst$kw$source);
var line = cljs.core.get.call(null,map__9157__$1,cljs.core.cst$kw$line);
var col = cljs.core.get.call(null,map__9157__$1,cljs.core.cst$kw$col);
var name = cljs.core.get.call(null,map__9157__$1,cljs.core.cst$kw$name);
var d = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$gline,gline,cljs.core.cst$kw$gcol,gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,cljs.core.cst$kw$name,name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.call(null,((function (map__9157,map__9157__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.call(null,((function (map__9157,map__9157__$1,gcol,source,line,col,name,d,d__$1){
return (function (m__$1){
return cljs.core.update_in.call(null,m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.call(null,((function (map__9157,map__9157__$1,gcol,source,line,col,name,d,d__$1){
return (function (v){
return cljs.core.conj.call(null,v,d__$1);
});})(map__9157,map__9157__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__9157,map__9157__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});})(map__9157,map__9157__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var args9159 = [];
var len__7484__auto___9165 = arguments.length;
var i__7485__auto___9166 = (0);
while(true){
if((i__7485__auto___9166 < len__7484__auto___9165)){
args9159.push((arguments[i__7485__auto___9166]));

var G__9167 = (i__7485__auto___9166 + (1));
i__7485__auto___9166 = G__9167;
continue;
} else {
}
break;
}

var G__9161 = args9159.length;
switch (G__9161) {
case 1:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9159.length)].join('')));

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
var vec__9162 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__9169 = cljs.core.next.call(null,segs__$1);
var G__9170 = nrelseg;
var G__9171 = cljs.source_map.update_reverse_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__9169;
relseg__$1 = G__9170;
result__$1 = G__9171;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__9162,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__9162,(1),null);
var G__9172 = (gline + (1));
var G__9173 = cljs.core.next.call(null,lines__$1);
var G__9174 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__9175 = result__$1;
gline = G__9172;
lines__$1 = G__9173;
relseg = G__9174;
result = G__9175;
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
var map__9179 = segmap;
var map__9179__$1 = ((((!((map__9179 == null)))?((((map__9179.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9179.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9179):map__9179);
var gcol = cljs.core.get.call(null,map__9179__$1,cljs.core.cst$kw$gcol);
var source = cljs.core.get.call(null,map__9179__$1,cljs.core.cst$kw$source);
var line = cljs.core.get.call(null,map__9179__$1,cljs.core.cst$kw$line);
var col = cljs.core.get.call(null,map__9179__$1,cljs.core.cst$kw$col);
var name = cljs.core.get.call(null,map__9179__$1,cljs.core.cst$kw$name);
var d = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line,cljs.core.cst$kw$col,col,cljs.core.cst$kw$source,source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,cljs.core.cst$kw$name,name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.call(null,((function (map__9179,map__9179__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.call(null,((function (map__9179,map__9179__$1,gcol,source,line,col,name,d,d__$1){
return (function (p1__9176_SHARP_){
return cljs.core.conj.call(null,p1__9176_SHARP_,d__$1);
});})(map__9179,map__9179__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__9179,map__9179__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var args9181 = [];
var len__7484__auto___9187 = arguments.length;
var i__7485__auto___9188 = (0);
while(true){
if((i__7485__auto___9188 < len__7484__auto___9187)){
args9181.push((arguments[i__7485__auto___9188]));

var G__9189 = (i__7485__auto___9188 + (1));
i__7485__auto___9188 = G__9189;
continue;
} else {
}
break;
}

var G__9183 = args9181.length;
switch (G__9183) {
case 1:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9181.length)].join('')));

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
var vec__9184 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__9191 = cljs.core.next.call(null,segs__$1);
var G__9192 = nrelseg;
var G__9193 = cljs.source_map.update_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__9191;
relseg__$1 = G__9192;
result__$1 = G__9193;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__9184,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__9184,(1),null);
var G__9194 = (gline + (1));
var G__9195 = cljs.core.next.call(null,lines__$1);
var G__9196 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__9197 = result__$1;
gline = G__9194;
lines__$1 = G__9195;
relseg = G__9196;
result = G__9197;
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
return (function (p__9210){
var vec__9211 = p__9210;
var _ = cljs.core.nth.call(null,vec__9211,(0),null);
var source = cljs.core.nth.call(null,vec__9211,(1),null);
var line = cljs.core.nth.call(null,vec__9211,(2),null);
var col = cljs.core.nth.call(null,vec__9211,(3),null);
var name = cljs.core.nth.call(null,vec__9211,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
});})(relseg))
);

return cljs.core.conj.call(null,segs,cljs.core.reduce.call(null,((function (relseg){
return (function (cols__$1,p__9214){
var vec__9215 = p__9214;
var gcol = cljs.core.nth.call(null,vec__9215,(0),null);
var sidx = cljs.core.nth.call(null,vec__9215,(1),null);
var line = cljs.core.nth.call(null,vec__9215,(2),null);
var col = cljs.core.nth.call(null,vec__9215,(3),null);
var name = cljs.core.nth.call(null,vec__9215,(4),null);
var seg = vec__9215;
var offset = cljs.core.map.call(null,cljs.core._,seg,cljs.core.deref.call(null,relseg));
cljs.core.swap_BANG_.call(null,relseg,((function (offset,vec__9215,gcol,sidx,line,col,name,seg,relseg){
return (function (p__9218){
var vec__9219 = p__9218;
var _ = cljs.core.nth.call(null,vec__9219,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__9219,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__9219,(2),null);
var ___$3 = cljs.core.nth.call(null,vec__9219,(3),null);
var lname = cljs.core.nth.call(null,vec__9219,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__6409__auto__ = name;
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return lname;
}
})()], null);
});})(offset,vec__9215,gcol,sidx,line,col,name,seg,relseg))
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
var preamble_lines = cljs.core.take.call(null,(function (){var or__6409__auto__ = cljs.core.cst$kw$preamble_DASH_line_DASH_count.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return (0);
}
})(),cljs.core.repeat.call(null,cljs.core.PersistentVector.EMPTY));
var info__GT_segv = ((function (lines,names__GT_idx,name_idx,preamble_lines){
return (function (info,source_idx,line,col){
var segv = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$gcol.cljs$core$IFn$_invoke$arity$1(info),source_idx,line,col], null);
var temp__4655__auto__ = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(info);
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
var seq__9307 = cljs.core.seq.call(null,infos);
var chunk__9308 = null;
var count__9309 = (0);
var i__9310 = (0);
while(true){
if((i__9310 < count__9309)){
var info = cljs.core._nth.call(null,chunk__9308,i__9310);
var segv_9389 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_9390 = cljs.core.cst$kw$gline.cljs$core$IFn$_invoke$arity$1(info);
var lc_9391 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_9390 > (lc_9391 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__9307,chunk__9308,count__9309,i__9310,segv_9389,gline_9390,lc_9391,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_9390 - (lc_9391 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_9389], null));
});})(seq__9307,chunk__9308,count__9309,i__9310,segv_9389,gline_9390,lc_9391,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__9307,chunk__9308,count__9309,i__9310,segv_9389,gline_9390,lc_9391,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_9390], null),cljs.core.conj,segv_9389);
});})(seq__9307,chunk__9308,count__9309,i__9310,segv_9389,gline_9390,lc_9391,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__9392 = seq__9307;
var G__9393 = chunk__9308;
var G__9394 = count__9309;
var G__9395 = (i__9310 + (1));
seq__9307 = G__9392;
chunk__9308 = G__9393;
count__9309 = G__9394;
i__9310 = G__9395;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__9307);
if(temp__4657__auto__){
var seq__9307__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9307__$1)){
var c__7220__auto__ = cljs.core.chunk_first.call(null,seq__9307__$1);
var G__9396 = cljs.core.chunk_rest.call(null,seq__9307__$1);
var G__9397 = c__7220__auto__;
var G__9398 = cljs.core.count.call(null,c__7220__auto__);
var G__9399 = (0);
seq__9307 = G__9396;
chunk__9308 = G__9397;
count__9309 = G__9398;
i__9310 = G__9399;
continue;
} else {
var info = cljs.core.first.call(null,seq__9307__$1);
var segv_9400 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_9401 = cljs.core.cst$kw$gline.cljs$core$IFn$_invoke$arity$1(info);
var lc_9402 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_9401 > (lc_9402 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__9307,chunk__9308,count__9309,i__9310,segv_9400,gline_9401,lc_9402,info,seq__9307__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_9401 - (lc_9402 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_9400], null));
});})(seq__9307,chunk__9308,count__9309,i__9310,segv_9400,gline_9401,lc_9402,info,seq__9307__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__9307,chunk__9308,count__9309,i__9310,segv_9400,gline_9401,lc_9402,info,seq__9307__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_9401], null),cljs.core.conj,segv_9400);
});})(seq__9307,chunk__9308,count__9309,i__9310,segv_9400,gline_9401,lc_9402,info,seq__9307__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__9403 = cljs.core.next.call(null,seq__9307__$1);
var G__9404 = null;
var G__9405 = (0);
var G__9406 = (0);
seq__9307 = G__9403;
chunk__9308 = G__9404;
count__9309 = G__9405;
i__9310 = G__9406;
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
var seq__9311_9407 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__9312_9408 = null;
var count__9313_9409 = (0);
var i__9314_9410 = (0);
while(true){
if((i__9314_9410 < count__9313_9409)){
var vec__9315_9411 = cljs.core._nth.call(null,chunk__9312_9408,i__9314_9410);
var source_idx_9412 = cljs.core.nth.call(null,vec__9315_9411,(0),null);
var vec__9318_9413 = cljs.core.nth.call(null,vec__9315_9411,(1),null);
var __9414 = cljs.core.nth.call(null,vec__9318_9413,(0),null);
var lines_9415__$1 = cljs.core.nth.call(null,vec__9318_9413,(1),null);
var seq__9321_9416 = cljs.core.seq.call(null,lines_9415__$1);
var chunk__9322_9417 = null;
var count__9323_9418 = (0);
var i__9324_9419 = (0);
while(true){
if((i__9324_9419 < count__9323_9418)){
var vec__9325_9420 = cljs.core._nth.call(null,chunk__9322_9417,i__9324_9419);
var line_9421 = cljs.core.nth.call(null,vec__9325_9420,(0),null);
var cols_9422 = cljs.core.nth.call(null,vec__9325_9420,(1),null);
var seq__9328_9423 = cljs.core.seq.call(null,cols_9422);
var chunk__9329_9424 = null;
var count__9330_9425 = (0);
var i__9331_9426 = (0);
while(true){
if((i__9331_9426 < count__9330_9425)){
var vec__9332_9427 = cljs.core._nth.call(null,chunk__9329_9424,i__9331_9426);
var col_9428 = cljs.core.nth.call(null,vec__9332_9427,(0),null);
var infos_9429 = cljs.core.nth.call(null,vec__9332_9427,(1),null);
encode_cols.call(null,infos_9429,source_idx_9412,line_9421,col_9428);

var G__9430 = seq__9328_9423;
var G__9431 = chunk__9329_9424;
var G__9432 = count__9330_9425;
var G__9433 = (i__9331_9426 + (1));
seq__9328_9423 = G__9430;
chunk__9329_9424 = G__9431;
count__9330_9425 = G__9432;
i__9331_9426 = G__9433;
continue;
} else {
var temp__4657__auto___9434 = cljs.core.seq.call(null,seq__9328_9423);
if(temp__4657__auto___9434){
var seq__9328_9435__$1 = temp__4657__auto___9434;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9328_9435__$1)){
var c__7220__auto___9436 = cljs.core.chunk_first.call(null,seq__9328_9435__$1);
var G__9437 = cljs.core.chunk_rest.call(null,seq__9328_9435__$1);
var G__9438 = c__7220__auto___9436;
var G__9439 = cljs.core.count.call(null,c__7220__auto___9436);
var G__9440 = (0);
seq__9328_9423 = G__9437;
chunk__9329_9424 = G__9438;
count__9330_9425 = G__9439;
i__9331_9426 = G__9440;
continue;
} else {
var vec__9335_9441 = cljs.core.first.call(null,seq__9328_9435__$1);
var col_9442 = cljs.core.nth.call(null,vec__9335_9441,(0),null);
var infos_9443 = cljs.core.nth.call(null,vec__9335_9441,(1),null);
encode_cols.call(null,infos_9443,source_idx_9412,line_9421,col_9442);

var G__9444 = cljs.core.next.call(null,seq__9328_9435__$1);
var G__9445 = null;
var G__9446 = (0);
var G__9447 = (0);
seq__9328_9423 = G__9444;
chunk__9329_9424 = G__9445;
count__9330_9425 = G__9446;
i__9331_9426 = G__9447;
continue;
}
} else {
}
}
break;
}

var G__9448 = seq__9321_9416;
var G__9449 = chunk__9322_9417;
var G__9450 = count__9323_9418;
var G__9451 = (i__9324_9419 + (1));
seq__9321_9416 = G__9448;
chunk__9322_9417 = G__9449;
count__9323_9418 = G__9450;
i__9324_9419 = G__9451;
continue;
} else {
var temp__4657__auto___9452 = cljs.core.seq.call(null,seq__9321_9416);
if(temp__4657__auto___9452){
var seq__9321_9453__$1 = temp__4657__auto___9452;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9321_9453__$1)){
var c__7220__auto___9454 = cljs.core.chunk_first.call(null,seq__9321_9453__$1);
var G__9455 = cljs.core.chunk_rest.call(null,seq__9321_9453__$1);
var G__9456 = c__7220__auto___9454;
var G__9457 = cljs.core.count.call(null,c__7220__auto___9454);
var G__9458 = (0);
seq__9321_9416 = G__9455;
chunk__9322_9417 = G__9456;
count__9323_9418 = G__9457;
i__9324_9419 = G__9458;
continue;
} else {
var vec__9338_9459 = cljs.core.first.call(null,seq__9321_9453__$1);
var line_9460 = cljs.core.nth.call(null,vec__9338_9459,(0),null);
var cols_9461 = cljs.core.nth.call(null,vec__9338_9459,(1),null);
var seq__9341_9462 = cljs.core.seq.call(null,cols_9461);
var chunk__9342_9463 = null;
var count__9343_9464 = (0);
var i__9344_9465 = (0);
while(true){
if((i__9344_9465 < count__9343_9464)){
var vec__9345_9466 = cljs.core._nth.call(null,chunk__9342_9463,i__9344_9465);
var col_9467 = cljs.core.nth.call(null,vec__9345_9466,(0),null);
var infos_9468 = cljs.core.nth.call(null,vec__9345_9466,(1),null);
encode_cols.call(null,infos_9468,source_idx_9412,line_9460,col_9467);

var G__9469 = seq__9341_9462;
var G__9470 = chunk__9342_9463;
var G__9471 = count__9343_9464;
var G__9472 = (i__9344_9465 + (1));
seq__9341_9462 = G__9469;
chunk__9342_9463 = G__9470;
count__9343_9464 = G__9471;
i__9344_9465 = G__9472;
continue;
} else {
var temp__4657__auto___9473__$1 = cljs.core.seq.call(null,seq__9341_9462);
if(temp__4657__auto___9473__$1){
var seq__9341_9474__$1 = temp__4657__auto___9473__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9341_9474__$1)){
var c__7220__auto___9475 = cljs.core.chunk_first.call(null,seq__9341_9474__$1);
var G__9476 = cljs.core.chunk_rest.call(null,seq__9341_9474__$1);
var G__9477 = c__7220__auto___9475;
var G__9478 = cljs.core.count.call(null,c__7220__auto___9475);
var G__9479 = (0);
seq__9341_9462 = G__9476;
chunk__9342_9463 = G__9477;
count__9343_9464 = G__9478;
i__9344_9465 = G__9479;
continue;
} else {
var vec__9348_9480 = cljs.core.first.call(null,seq__9341_9474__$1);
var col_9481 = cljs.core.nth.call(null,vec__9348_9480,(0),null);
var infos_9482 = cljs.core.nth.call(null,vec__9348_9480,(1),null);
encode_cols.call(null,infos_9482,source_idx_9412,line_9460,col_9481);

var G__9483 = cljs.core.next.call(null,seq__9341_9474__$1);
var G__9484 = null;
var G__9485 = (0);
var G__9486 = (0);
seq__9341_9462 = G__9483;
chunk__9342_9463 = G__9484;
count__9343_9464 = G__9485;
i__9344_9465 = G__9486;
continue;
}
} else {
}
}
break;
}

var G__9487 = cljs.core.next.call(null,seq__9321_9453__$1);
var G__9488 = null;
var G__9489 = (0);
var G__9490 = (0);
seq__9321_9416 = G__9487;
chunk__9322_9417 = G__9488;
count__9323_9418 = G__9489;
i__9324_9419 = G__9490;
continue;
}
} else {
}
}
break;
}

var G__9491 = seq__9311_9407;
var G__9492 = chunk__9312_9408;
var G__9493 = count__9313_9409;
var G__9494 = (i__9314_9410 + (1));
seq__9311_9407 = G__9491;
chunk__9312_9408 = G__9492;
count__9313_9409 = G__9493;
i__9314_9410 = G__9494;
continue;
} else {
var temp__4657__auto___9495 = cljs.core.seq.call(null,seq__9311_9407);
if(temp__4657__auto___9495){
var seq__9311_9496__$1 = temp__4657__auto___9495;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9311_9496__$1)){
var c__7220__auto___9497 = cljs.core.chunk_first.call(null,seq__9311_9496__$1);
var G__9498 = cljs.core.chunk_rest.call(null,seq__9311_9496__$1);
var G__9499 = c__7220__auto___9497;
var G__9500 = cljs.core.count.call(null,c__7220__auto___9497);
var G__9501 = (0);
seq__9311_9407 = G__9498;
chunk__9312_9408 = G__9499;
count__9313_9409 = G__9500;
i__9314_9410 = G__9501;
continue;
} else {
var vec__9351_9502 = cljs.core.first.call(null,seq__9311_9496__$1);
var source_idx_9503 = cljs.core.nth.call(null,vec__9351_9502,(0),null);
var vec__9354_9504 = cljs.core.nth.call(null,vec__9351_9502,(1),null);
var __9505 = cljs.core.nth.call(null,vec__9354_9504,(0),null);
var lines_9506__$1 = cljs.core.nth.call(null,vec__9354_9504,(1),null);
var seq__9357_9507 = cljs.core.seq.call(null,lines_9506__$1);
var chunk__9358_9508 = null;
var count__9359_9509 = (0);
var i__9360_9510 = (0);
while(true){
if((i__9360_9510 < count__9359_9509)){
var vec__9361_9511 = cljs.core._nth.call(null,chunk__9358_9508,i__9360_9510);
var line_9512 = cljs.core.nth.call(null,vec__9361_9511,(0),null);
var cols_9513 = cljs.core.nth.call(null,vec__9361_9511,(1),null);
var seq__9364_9514 = cljs.core.seq.call(null,cols_9513);
var chunk__9365_9515 = null;
var count__9366_9516 = (0);
var i__9367_9517 = (0);
while(true){
if((i__9367_9517 < count__9366_9516)){
var vec__9368_9518 = cljs.core._nth.call(null,chunk__9365_9515,i__9367_9517);
var col_9519 = cljs.core.nth.call(null,vec__9368_9518,(0),null);
var infos_9520 = cljs.core.nth.call(null,vec__9368_9518,(1),null);
encode_cols.call(null,infos_9520,source_idx_9503,line_9512,col_9519);

var G__9521 = seq__9364_9514;
var G__9522 = chunk__9365_9515;
var G__9523 = count__9366_9516;
var G__9524 = (i__9367_9517 + (1));
seq__9364_9514 = G__9521;
chunk__9365_9515 = G__9522;
count__9366_9516 = G__9523;
i__9367_9517 = G__9524;
continue;
} else {
var temp__4657__auto___9525__$1 = cljs.core.seq.call(null,seq__9364_9514);
if(temp__4657__auto___9525__$1){
var seq__9364_9526__$1 = temp__4657__auto___9525__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9364_9526__$1)){
var c__7220__auto___9527 = cljs.core.chunk_first.call(null,seq__9364_9526__$1);
var G__9528 = cljs.core.chunk_rest.call(null,seq__9364_9526__$1);
var G__9529 = c__7220__auto___9527;
var G__9530 = cljs.core.count.call(null,c__7220__auto___9527);
var G__9531 = (0);
seq__9364_9514 = G__9528;
chunk__9365_9515 = G__9529;
count__9366_9516 = G__9530;
i__9367_9517 = G__9531;
continue;
} else {
var vec__9371_9532 = cljs.core.first.call(null,seq__9364_9526__$1);
var col_9533 = cljs.core.nth.call(null,vec__9371_9532,(0),null);
var infos_9534 = cljs.core.nth.call(null,vec__9371_9532,(1),null);
encode_cols.call(null,infos_9534,source_idx_9503,line_9512,col_9533);

var G__9535 = cljs.core.next.call(null,seq__9364_9526__$1);
var G__9536 = null;
var G__9537 = (0);
var G__9538 = (0);
seq__9364_9514 = G__9535;
chunk__9365_9515 = G__9536;
count__9366_9516 = G__9537;
i__9367_9517 = G__9538;
continue;
}
} else {
}
}
break;
}

var G__9539 = seq__9357_9507;
var G__9540 = chunk__9358_9508;
var G__9541 = count__9359_9509;
var G__9542 = (i__9360_9510 + (1));
seq__9357_9507 = G__9539;
chunk__9358_9508 = G__9540;
count__9359_9509 = G__9541;
i__9360_9510 = G__9542;
continue;
} else {
var temp__4657__auto___9543__$1 = cljs.core.seq.call(null,seq__9357_9507);
if(temp__4657__auto___9543__$1){
var seq__9357_9544__$1 = temp__4657__auto___9543__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9357_9544__$1)){
var c__7220__auto___9545 = cljs.core.chunk_first.call(null,seq__9357_9544__$1);
var G__9546 = cljs.core.chunk_rest.call(null,seq__9357_9544__$1);
var G__9547 = c__7220__auto___9545;
var G__9548 = cljs.core.count.call(null,c__7220__auto___9545);
var G__9549 = (0);
seq__9357_9507 = G__9546;
chunk__9358_9508 = G__9547;
count__9359_9509 = G__9548;
i__9360_9510 = G__9549;
continue;
} else {
var vec__9374_9550 = cljs.core.first.call(null,seq__9357_9544__$1);
var line_9551 = cljs.core.nth.call(null,vec__9374_9550,(0),null);
var cols_9552 = cljs.core.nth.call(null,vec__9374_9550,(1),null);
var seq__9377_9553 = cljs.core.seq.call(null,cols_9552);
var chunk__9378_9554 = null;
var count__9379_9555 = (0);
var i__9380_9556 = (0);
while(true){
if((i__9380_9556 < count__9379_9555)){
var vec__9381_9557 = cljs.core._nth.call(null,chunk__9378_9554,i__9380_9556);
var col_9558 = cljs.core.nth.call(null,vec__9381_9557,(0),null);
var infos_9559 = cljs.core.nth.call(null,vec__9381_9557,(1),null);
encode_cols.call(null,infos_9559,source_idx_9503,line_9551,col_9558);

var G__9560 = seq__9377_9553;
var G__9561 = chunk__9378_9554;
var G__9562 = count__9379_9555;
var G__9563 = (i__9380_9556 + (1));
seq__9377_9553 = G__9560;
chunk__9378_9554 = G__9561;
count__9379_9555 = G__9562;
i__9380_9556 = G__9563;
continue;
} else {
var temp__4657__auto___9564__$2 = cljs.core.seq.call(null,seq__9377_9553);
if(temp__4657__auto___9564__$2){
var seq__9377_9565__$1 = temp__4657__auto___9564__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9377_9565__$1)){
var c__7220__auto___9566 = cljs.core.chunk_first.call(null,seq__9377_9565__$1);
var G__9567 = cljs.core.chunk_rest.call(null,seq__9377_9565__$1);
var G__9568 = c__7220__auto___9566;
var G__9569 = cljs.core.count.call(null,c__7220__auto___9566);
var G__9570 = (0);
seq__9377_9553 = G__9567;
chunk__9378_9554 = G__9568;
count__9379_9555 = G__9569;
i__9380_9556 = G__9570;
continue;
} else {
var vec__9384_9571 = cljs.core.first.call(null,seq__9377_9565__$1);
var col_9572 = cljs.core.nth.call(null,vec__9384_9571,(0),null);
var infos_9573 = cljs.core.nth.call(null,vec__9384_9571,(1),null);
encode_cols.call(null,infos_9573,source_idx_9503,line_9551,col_9572);

var G__9574 = cljs.core.next.call(null,seq__9377_9565__$1);
var G__9575 = null;
var G__9576 = (0);
var G__9577 = (0);
seq__9377_9553 = G__9574;
chunk__9378_9554 = G__9575;
count__9379_9555 = G__9576;
i__9380_9556 = G__9577;
continue;
}
} else {
}
}
break;
}

var G__9578 = cljs.core.next.call(null,seq__9357_9544__$1);
var G__9579 = null;
var G__9580 = (0);
var G__9581 = (0);
seq__9357_9507 = G__9578;
chunk__9358_9508 = G__9579;
count__9359_9509 = G__9580;
i__9360_9510 = G__9581;
continue;
}
} else {
}
}
break;
}

var G__9582 = cljs.core.next.call(null,seq__9311_9496__$1);
var G__9583 = null;
var G__9584 = (0);
var G__9585 = (0);
seq__9311_9407 = G__9582;
chunk__9312_9408 = G__9583;
count__9313_9409 = G__9584;
i__9314_9410 = G__9585;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__9387 = ({"version": (3), "file": cljs.core.cst$kw$file.cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys.call(null,m);
var f = cljs.core.comp.call(null,((cljs.core.cst$kw$source_DASH_map_DASH_timestamp.cljs$core$IFn$_invoke$arity$1(opts) === true)?((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__9222_SHARP_){
return [cljs.core.str(p1__9222_SHARP_),cljs.core.str("?rel="),cljs.core.str((new Date()).valueOf())].join('');
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
:cljs.core.identity),((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__9223_SHARP_){
return cljs.core.last.call(null,clojure.string.split.call(null,p1__9223_SHARP_,/\//));
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
);
return cljs.core.into_array.call(null,cljs.core.map.call(null,f,paths));
})(), "lineCount": cljs.core.cst$kw$lines.cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.call(null,";",cljs.core.map.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__9224_SHARP_){
return clojure.string.join.call(null,",",p1__9224_SHARP_);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,cljs.source_map.lines__GT_segs.call(null,cljs.core.concat.call(null,preamble_lines,cljs.core.deref.call(null,lines))))), "names": cljs.core.into_array.call(null,cljs.core.map.call(null,clojure.set.map_invert.call(null,cljs.core.deref.call(null,names__GT_idx)),cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,names__GT_idx)))))});
if(cljs.core.truth_(cljs.core.cst$kw$sources_DASH_content.cljs$core$IFn$_invoke$arity$1(opts))){
var G__9388 = G__9387;
goog.object.set(G__9388,"sourcesContent",cljs.core.into_array.call(null,cljs.core.cst$kw$sources_DASH_content.cljs$core$IFn$_invoke$arity$1(opts)));

return G__9388;
} else {
return G__9387;
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
var vec__9595 = cljs.core.first.call(null,line_map_seq);
var line = cljs.core.nth.call(null,vec__9595,(0),null);
var col_map = cljs.core.nth.call(null,vec__9595,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq.call(null,col_map);
var new_cols = cljs.core.sorted_map.call(null);
while(true){
if(col_map_seq){
var vec__9598 = cljs.core.first.call(null,col_map_seq);
var col = cljs.core.nth.call(null,vec__9598,(0),null);
var infos = cljs.core.nth.call(null,vec__9598,(1),null);
var G__9604 = cljs.core.next.call(null,col_map_seq);
var G__9605 = cljs.core.assoc.call(null,new_cols,col,cljs.core.reduce.call(null,((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__9598,col,infos,vec__9595,line,col_map){
return (function (v,p__9601){
var map__9602 = p__9601;
var map__9602__$1 = ((((!((map__9602 == null)))?((((map__9602.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9602.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9602):map__9602);
var gline = cljs.core.get.call(null,map__9602__$1,cljs.core.cst$kw$gline);
var gcol = cljs.core.get.call(null,map__9602__$1,cljs.core.cst$kw$gcol);
return cljs.core.into.call(null,v,cljs.core.get_in.call(null,js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__9598,col,infos,vec__9595,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__9604;
new_cols = G__9605;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__9606 = cljs.core.next.call(null,line_map_seq);
var G__9607 = cljs.core.assoc.call(null,new_lines,line,new_cols);
line_map_seq = G__9606;
new_lines = G__9607;
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
var seq__9670_9732 = cljs.core.seq.call(null,reverse_map);
var chunk__9671_9733 = null;
var count__9672_9734 = (0);
var i__9673_9735 = (0);
while(true){
if((i__9673_9735 < count__9672_9734)){
var vec__9674_9736 = cljs.core._nth.call(null,chunk__9671_9733,i__9673_9735);
var line_9737 = cljs.core.nth.call(null,vec__9674_9736,(0),null);
var columns_9738 = cljs.core.nth.call(null,vec__9674_9736,(1),null);
var seq__9677_9739 = cljs.core.seq.call(null,columns_9738);
var chunk__9678_9740 = null;
var count__9679_9741 = (0);
var i__9680_9742 = (0);
while(true){
if((i__9680_9742 < count__9679_9741)){
var vec__9681_9743 = cljs.core._nth.call(null,chunk__9678_9740,i__9680_9742);
var column_9744 = cljs.core.nth.call(null,vec__9681_9743,(0),null);
var column_info_9745 = cljs.core.nth.call(null,vec__9681_9743,(1),null);
var seq__9684_9746 = cljs.core.seq.call(null,column_info_9745);
var chunk__9685_9747 = null;
var count__9686_9748 = (0);
var i__9687_9749 = (0);
while(true){
if((i__9687_9749 < count__9686_9748)){
var map__9688_9750 = cljs.core._nth.call(null,chunk__9685_9747,i__9687_9749);
var map__9688_9751__$1 = ((((!((map__9688_9750 == null)))?((((map__9688_9750.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9688_9750.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9688_9750):map__9688_9750);
var gline_9752 = cljs.core.get.call(null,map__9688_9751__$1,cljs.core.cst$kw$gline);
var gcol_9753 = cljs.core.get.call(null,map__9688_9751__$1,cljs.core.cst$kw$gcol);
var name_9754 = cljs.core.get.call(null,map__9688_9751__$1,cljs.core.cst$kw$name);
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_9752], null),cljs.core.fnil.call(null,((function (seq__9684_9746,chunk__9685_9747,count__9686_9748,i__9687_9749,seq__9677_9739,chunk__9678_9740,count__9679_9741,i__9680_9742,seq__9670_9732,chunk__9671_9733,count__9672_9734,i__9673_9735,map__9688_9750,map__9688_9751__$1,gline_9752,gcol_9753,name_9754,vec__9681_9743,column_9744,column_info_9745,vec__9674_9736,line_9737,columns_9738,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_9753], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line_9737,cljs.core.cst$kw$col,column_9744,cljs.core.cst$kw$name,name_9754], null));
});})(seq__9684_9746,chunk__9685_9747,count__9686_9748,i__9687_9749,seq__9677_9739,chunk__9678_9740,count__9679_9741,i__9680_9742,seq__9670_9732,chunk__9671_9733,count__9672_9734,i__9673_9735,map__9688_9750,map__9688_9751__$1,gline_9752,gcol_9753,name_9754,vec__9681_9743,column_9744,column_info_9745,vec__9674_9736,line_9737,columns_9738,inverted))
,cljs.core.sorted_map.call(null)));

var G__9755 = seq__9684_9746;
var G__9756 = chunk__9685_9747;
var G__9757 = count__9686_9748;
var G__9758 = (i__9687_9749 + (1));
seq__9684_9746 = G__9755;
chunk__9685_9747 = G__9756;
count__9686_9748 = G__9757;
i__9687_9749 = G__9758;
continue;
} else {
var temp__4657__auto___9759 = cljs.core.seq.call(null,seq__9684_9746);
if(temp__4657__auto___9759){
var seq__9684_9760__$1 = temp__4657__auto___9759;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9684_9760__$1)){
var c__7220__auto___9761 = cljs.core.chunk_first.call(null,seq__9684_9760__$1);
var G__9762 = cljs.core.chunk_rest.call(null,seq__9684_9760__$1);
var G__9763 = c__7220__auto___9761;
var G__9764 = cljs.core.count.call(null,c__7220__auto___9761);
var G__9765 = (0);
seq__9684_9746 = G__9762;
chunk__9685_9747 = G__9763;
count__9686_9748 = G__9764;
i__9687_9749 = G__9765;
continue;
} else {
var map__9690_9766 = cljs.core.first.call(null,seq__9684_9760__$1);
var map__9690_9767__$1 = ((((!((map__9690_9766 == null)))?((((map__9690_9766.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9690_9766.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9690_9766):map__9690_9766);
var gline_9768 = cljs.core.get.call(null,map__9690_9767__$1,cljs.core.cst$kw$gline);
var gcol_9769 = cljs.core.get.call(null,map__9690_9767__$1,cljs.core.cst$kw$gcol);
var name_9770 = cljs.core.get.call(null,map__9690_9767__$1,cljs.core.cst$kw$name);
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_9768], null),cljs.core.fnil.call(null,((function (seq__9684_9746,chunk__9685_9747,count__9686_9748,i__9687_9749,seq__9677_9739,chunk__9678_9740,count__9679_9741,i__9680_9742,seq__9670_9732,chunk__9671_9733,count__9672_9734,i__9673_9735,map__9690_9766,map__9690_9767__$1,gline_9768,gcol_9769,name_9770,seq__9684_9760__$1,temp__4657__auto___9759,vec__9681_9743,column_9744,column_info_9745,vec__9674_9736,line_9737,columns_9738,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_9769], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line_9737,cljs.core.cst$kw$col,column_9744,cljs.core.cst$kw$name,name_9770], null));
});})(seq__9684_9746,chunk__9685_9747,count__9686_9748,i__9687_9749,seq__9677_9739,chunk__9678_9740,count__9679_9741,i__9680_9742,seq__9670_9732,chunk__9671_9733,count__9672_9734,i__9673_9735,map__9690_9766,map__9690_9767__$1,gline_9768,gcol_9769,name_9770,seq__9684_9760__$1,temp__4657__auto___9759,vec__9681_9743,column_9744,column_info_9745,vec__9674_9736,line_9737,columns_9738,inverted))
,cljs.core.sorted_map.call(null)));

var G__9771 = cljs.core.next.call(null,seq__9684_9760__$1);
var G__9772 = null;
var G__9773 = (0);
var G__9774 = (0);
seq__9684_9746 = G__9771;
chunk__9685_9747 = G__9772;
count__9686_9748 = G__9773;
i__9687_9749 = G__9774;
continue;
}
} else {
}
}
break;
}

var G__9775 = seq__9677_9739;
var G__9776 = chunk__9678_9740;
var G__9777 = count__9679_9741;
var G__9778 = (i__9680_9742 + (1));
seq__9677_9739 = G__9775;
chunk__9678_9740 = G__9776;
count__9679_9741 = G__9777;
i__9680_9742 = G__9778;
continue;
} else {
var temp__4657__auto___9779 = cljs.core.seq.call(null,seq__9677_9739);
if(temp__4657__auto___9779){
var seq__9677_9780__$1 = temp__4657__auto___9779;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9677_9780__$1)){
var c__7220__auto___9781 = cljs.core.chunk_first.call(null,seq__9677_9780__$1);
var G__9782 = cljs.core.chunk_rest.call(null,seq__9677_9780__$1);
var G__9783 = c__7220__auto___9781;
var G__9784 = cljs.core.count.call(null,c__7220__auto___9781);
var G__9785 = (0);
seq__9677_9739 = G__9782;
chunk__9678_9740 = G__9783;
count__9679_9741 = G__9784;
i__9680_9742 = G__9785;
continue;
} else {
var vec__9692_9786 = cljs.core.first.call(null,seq__9677_9780__$1);
var column_9787 = cljs.core.nth.call(null,vec__9692_9786,(0),null);
var column_info_9788 = cljs.core.nth.call(null,vec__9692_9786,(1),null);
var seq__9695_9789 = cljs.core.seq.call(null,column_info_9788);
var chunk__9696_9790 = null;
var count__9697_9791 = (0);
var i__9698_9792 = (0);
while(true){
if((i__9698_9792 < count__9697_9791)){
var map__9699_9793 = cljs.core._nth.call(null,chunk__9696_9790,i__9698_9792);
var map__9699_9794__$1 = ((((!((map__9699_9793 == null)))?((((map__9699_9793.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9699_9793.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9699_9793):map__9699_9793);
var gline_9795 = cljs.core.get.call(null,map__9699_9794__$1,cljs.core.cst$kw$gline);
var gcol_9796 = cljs.core.get.call(null,map__9699_9794__$1,cljs.core.cst$kw$gcol);
var name_9797 = cljs.core.get.call(null,map__9699_9794__$1,cljs.core.cst$kw$name);
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_9795], null),cljs.core.fnil.call(null,((function (seq__9695_9789,chunk__9696_9790,count__9697_9791,i__9698_9792,seq__9677_9739,chunk__9678_9740,count__9679_9741,i__9680_9742,seq__9670_9732,chunk__9671_9733,count__9672_9734,i__9673_9735,map__9699_9793,map__9699_9794__$1,gline_9795,gcol_9796,name_9797,vec__9692_9786,column_9787,column_info_9788,seq__9677_9780__$1,temp__4657__auto___9779,vec__9674_9736,line_9737,columns_9738,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_9796], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line_9737,cljs.core.cst$kw$col,column_9787,cljs.core.cst$kw$name,name_9797], null));
});})(seq__9695_9789,chunk__9696_9790,count__9697_9791,i__9698_9792,seq__9677_9739,chunk__9678_9740,count__9679_9741,i__9680_9742,seq__9670_9732,chunk__9671_9733,count__9672_9734,i__9673_9735,map__9699_9793,map__9699_9794__$1,gline_9795,gcol_9796,name_9797,vec__9692_9786,column_9787,column_info_9788,seq__9677_9780__$1,temp__4657__auto___9779,vec__9674_9736,line_9737,columns_9738,inverted))
,cljs.core.sorted_map.call(null)));

var G__9798 = seq__9695_9789;
var G__9799 = chunk__9696_9790;
var G__9800 = count__9697_9791;
var G__9801 = (i__9698_9792 + (1));
seq__9695_9789 = G__9798;
chunk__9696_9790 = G__9799;
count__9697_9791 = G__9800;
i__9698_9792 = G__9801;
continue;
} else {
var temp__4657__auto___9802__$1 = cljs.core.seq.call(null,seq__9695_9789);
if(temp__4657__auto___9802__$1){
var seq__9695_9803__$1 = temp__4657__auto___9802__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9695_9803__$1)){
var c__7220__auto___9804 = cljs.core.chunk_first.call(null,seq__9695_9803__$1);
var G__9805 = cljs.core.chunk_rest.call(null,seq__9695_9803__$1);
var G__9806 = c__7220__auto___9804;
var G__9807 = cljs.core.count.call(null,c__7220__auto___9804);
var G__9808 = (0);
seq__9695_9789 = G__9805;
chunk__9696_9790 = G__9806;
count__9697_9791 = G__9807;
i__9698_9792 = G__9808;
continue;
} else {
var map__9701_9809 = cljs.core.first.call(null,seq__9695_9803__$1);
var map__9701_9810__$1 = ((((!((map__9701_9809 == null)))?((((map__9701_9809.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9701_9809.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9701_9809):map__9701_9809);
var gline_9811 = cljs.core.get.call(null,map__9701_9810__$1,cljs.core.cst$kw$gline);
var gcol_9812 = cljs.core.get.call(null,map__9701_9810__$1,cljs.core.cst$kw$gcol);
var name_9813 = cljs.core.get.call(null,map__9701_9810__$1,cljs.core.cst$kw$name);
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_9811], null),cljs.core.fnil.call(null,((function (seq__9695_9789,chunk__9696_9790,count__9697_9791,i__9698_9792,seq__9677_9739,chunk__9678_9740,count__9679_9741,i__9680_9742,seq__9670_9732,chunk__9671_9733,count__9672_9734,i__9673_9735,map__9701_9809,map__9701_9810__$1,gline_9811,gcol_9812,name_9813,seq__9695_9803__$1,temp__4657__auto___9802__$1,vec__9692_9786,column_9787,column_info_9788,seq__9677_9780__$1,temp__4657__auto___9779,vec__9674_9736,line_9737,columns_9738,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_9812], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line_9737,cljs.core.cst$kw$col,column_9787,cljs.core.cst$kw$name,name_9813], null));
});})(seq__9695_9789,chunk__9696_9790,count__9697_9791,i__9698_9792,seq__9677_9739,chunk__9678_9740,count__9679_9741,i__9680_9742,seq__9670_9732,chunk__9671_9733,count__9672_9734,i__9673_9735,map__9701_9809,map__9701_9810__$1,gline_9811,gcol_9812,name_9813,seq__9695_9803__$1,temp__4657__auto___9802__$1,vec__9692_9786,column_9787,column_info_9788,seq__9677_9780__$1,temp__4657__auto___9779,vec__9674_9736,line_9737,columns_9738,inverted))
,cljs.core.sorted_map.call(null)));

var G__9814 = cljs.core.next.call(null,seq__9695_9803__$1);
var G__9815 = null;
var G__9816 = (0);
var G__9817 = (0);
seq__9695_9789 = G__9814;
chunk__9696_9790 = G__9815;
count__9697_9791 = G__9816;
i__9698_9792 = G__9817;
continue;
}
} else {
}
}
break;
}

var G__9818 = cljs.core.next.call(null,seq__9677_9780__$1);
var G__9819 = null;
var G__9820 = (0);
var G__9821 = (0);
seq__9677_9739 = G__9818;
chunk__9678_9740 = G__9819;
count__9679_9741 = G__9820;
i__9680_9742 = G__9821;
continue;
}
} else {
}
}
break;
}

var G__9822 = seq__9670_9732;
var G__9823 = chunk__9671_9733;
var G__9824 = count__9672_9734;
var G__9825 = (i__9673_9735 + (1));
seq__9670_9732 = G__9822;
chunk__9671_9733 = G__9823;
count__9672_9734 = G__9824;
i__9673_9735 = G__9825;
continue;
} else {
var temp__4657__auto___9826 = cljs.core.seq.call(null,seq__9670_9732);
if(temp__4657__auto___9826){
var seq__9670_9827__$1 = temp__4657__auto___9826;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9670_9827__$1)){
var c__7220__auto___9828 = cljs.core.chunk_first.call(null,seq__9670_9827__$1);
var G__9829 = cljs.core.chunk_rest.call(null,seq__9670_9827__$1);
var G__9830 = c__7220__auto___9828;
var G__9831 = cljs.core.count.call(null,c__7220__auto___9828);
var G__9832 = (0);
seq__9670_9732 = G__9829;
chunk__9671_9733 = G__9830;
count__9672_9734 = G__9831;
i__9673_9735 = G__9832;
continue;
} else {
var vec__9703_9833 = cljs.core.first.call(null,seq__9670_9827__$1);
var line_9834 = cljs.core.nth.call(null,vec__9703_9833,(0),null);
var columns_9835 = cljs.core.nth.call(null,vec__9703_9833,(1),null);
var seq__9706_9836 = cljs.core.seq.call(null,columns_9835);
var chunk__9707_9837 = null;
var count__9708_9838 = (0);
var i__9709_9839 = (0);
while(true){
if((i__9709_9839 < count__9708_9838)){
var vec__9710_9840 = cljs.core._nth.call(null,chunk__9707_9837,i__9709_9839);
var column_9841 = cljs.core.nth.call(null,vec__9710_9840,(0),null);
var column_info_9842 = cljs.core.nth.call(null,vec__9710_9840,(1),null);
var seq__9713_9843 = cljs.core.seq.call(null,column_info_9842);
var chunk__9714_9844 = null;
var count__9715_9845 = (0);
var i__9716_9846 = (0);
while(true){
if((i__9716_9846 < count__9715_9845)){
var map__9717_9847 = cljs.core._nth.call(null,chunk__9714_9844,i__9716_9846);
var map__9717_9848__$1 = ((((!((map__9717_9847 == null)))?((((map__9717_9847.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9717_9847.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9717_9847):map__9717_9847);
var gline_9849 = cljs.core.get.call(null,map__9717_9848__$1,cljs.core.cst$kw$gline);
var gcol_9850 = cljs.core.get.call(null,map__9717_9848__$1,cljs.core.cst$kw$gcol);
var name_9851 = cljs.core.get.call(null,map__9717_9848__$1,cljs.core.cst$kw$name);
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_9849], null),cljs.core.fnil.call(null,((function (seq__9713_9843,chunk__9714_9844,count__9715_9845,i__9716_9846,seq__9706_9836,chunk__9707_9837,count__9708_9838,i__9709_9839,seq__9670_9732,chunk__9671_9733,count__9672_9734,i__9673_9735,map__9717_9847,map__9717_9848__$1,gline_9849,gcol_9850,name_9851,vec__9710_9840,column_9841,column_info_9842,vec__9703_9833,line_9834,columns_9835,seq__9670_9827__$1,temp__4657__auto___9826,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_9850], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line_9834,cljs.core.cst$kw$col,column_9841,cljs.core.cst$kw$name,name_9851], null));
});})(seq__9713_9843,chunk__9714_9844,count__9715_9845,i__9716_9846,seq__9706_9836,chunk__9707_9837,count__9708_9838,i__9709_9839,seq__9670_9732,chunk__9671_9733,count__9672_9734,i__9673_9735,map__9717_9847,map__9717_9848__$1,gline_9849,gcol_9850,name_9851,vec__9710_9840,column_9841,column_info_9842,vec__9703_9833,line_9834,columns_9835,seq__9670_9827__$1,temp__4657__auto___9826,inverted))
,cljs.core.sorted_map.call(null)));

var G__9852 = seq__9713_9843;
var G__9853 = chunk__9714_9844;
var G__9854 = count__9715_9845;
var G__9855 = (i__9716_9846 + (1));
seq__9713_9843 = G__9852;
chunk__9714_9844 = G__9853;
count__9715_9845 = G__9854;
i__9716_9846 = G__9855;
continue;
} else {
var temp__4657__auto___9856__$1 = cljs.core.seq.call(null,seq__9713_9843);
if(temp__4657__auto___9856__$1){
var seq__9713_9857__$1 = temp__4657__auto___9856__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9713_9857__$1)){
var c__7220__auto___9858 = cljs.core.chunk_first.call(null,seq__9713_9857__$1);
var G__9859 = cljs.core.chunk_rest.call(null,seq__9713_9857__$1);
var G__9860 = c__7220__auto___9858;
var G__9861 = cljs.core.count.call(null,c__7220__auto___9858);
var G__9862 = (0);
seq__9713_9843 = G__9859;
chunk__9714_9844 = G__9860;
count__9715_9845 = G__9861;
i__9716_9846 = G__9862;
continue;
} else {
var map__9719_9863 = cljs.core.first.call(null,seq__9713_9857__$1);
var map__9719_9864__$1 = ((((!((map__9719_9863 == null)))?((((map__9719_9863.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9719_9863.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9719_9863):map__9719_9863);
var gline_9865 = cljs.core.get.call(null,map__9719_9864__$1,cljs.core.cst$kw$gline);
var gcol_9866 = cljs.core.get.call(null,map__9719_9864__$1,cljs.core.cst$kw$gcol);
var name_9867 = cljs.core.get.call(null,map__9719_9864__$1,cljs.core.cst$kw$name);
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_9865], null),cljs.core.fnil.call(null,((function (seq__9713_9843,chunk__9714_9844,count__9715_9845,i__9716_9846,seq__9706_9836,chunk__9707_9837,count__9708_9838,i__9709_9839,seq__9670_9732,chunk__9671_9733,count__9672_9734,i__9673_9735,map__9719_9863,map__9719_9864__$1,gline_9865,gcol_9866,name_9867,seq__9713_9857__$1,temp__4657__auto___9856__$1,vec__9710_9840,column_9841,column_info_9842,vec__9703_9833,line_9834,columns_9835,seq__9670_9827__$1,temp__4657__auto___9826,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_9866], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line_9834,cljs.core.cst$kw$col,column_9841,cljs.core.cst$kw$name,name_9867], null));
});})(seq__9713_9843,chunk__9714_9844,count__9715_9845,i__9716_9846,seq__9706_9836,chunk__9707_9837,count__9708_9838,i__9709_9839,seq__9670_9732,chunk__9671_9733,count__9672_9734,i__9673_9735,map__9719_9863,map__9719_9864__$1,gline_9865,gcol_9866,name_9867,seq__9713_9857__$1,temp__4657__auto___9856__$1,vec__9710_9840,column_9841,column_info_9842,vec__9703_9833,line_9834,columns_9835,seq__9670_9827__$1,temp__4657__auto___9826,inverted))
,cljs.core.sorted_map.call(null)));

var G__9868 = cljs.core.next.call(null,seq__9713_9857__$1);
var G__9869 = null;
var G__9870 = (0);
var G__9871 = (0);
seq__9713_9843 = G__9868;
chunk__9714_9844 = G__9869;
count__9715_9845 = G__9870;
i__9716_9846 = G__9871;
continue;
}
} else {
}
}
break;
}

var G__9872 = seq__9706_9836;
var G__9873 = chunk__9707_9837;
var G__9874 = count__9708_9838;
var G__9875 = (i__9709_9839 + (1));
seq__9706_9836 = G__9872;
chunk__9707_9837 = G__9873;
count__9708_9838 = G__9874;
i__9709_9839 = G__9875;
continue;
} else {
var temp__4657__auto___9876__$1 = cljs.core.seq.call(null,seq__9706_9836);
if(temp__4657__auto___9876__$1){
var seq__9706_9877__$1 = temp__4657__auto___9876__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9706_9877__$1)){
var c__7220__auto___9878 = cljs.core.chunk_first.call(null,seq__9706_9877__$1);
var G__9879 = cljs.core.chunk_rest.call(null,seq__9706_9877__$1);
var G__9880 = c__7220__auto___9878;
var G__9881 = cljs.core.count.call(null,c__7220__auto___9878);
var G__9882 = (0);
seq__9706_9836 = G__9879;
chunk__9707_9837 = G__9880;
count__9708_9838 = G__9881;
i__9709_9839 = G__9882;
continue;
} else {
var vec__9721_9883 = cljs.core.first.call(null,seq__9706_9877__$1);
var column_9884 = cljs.core.nth.call(null,vec__9721_9883,(0),null);
var column_info_9885 = cljs.core.nth.call(null,vec__9721_9883,(1),null);
var seq__9724_9886 = cljs.core.seq.call(null,column_info_9885);
var chunk__9725_9887 = null;
var count__9726_9888 = (0);
var i__9727_9889 = (0);
while(true){
if((i__9727_9889 < count__9726_9888)){
var map__9728_9890 = cljs.core._nth.call(null,chunk__9725_9887,i__9727_9889);
var map__9728_9891__$1 = ((((!((map__9728_9890 == null)))?((((map__9728_9890.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9728_9890.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9728_9890):map__9728_9890);
var gline_9892 = cljs.core.get.call(null,map__9728_9891__$1,cljs.core.cst$kw$gline);
var gcol_9893 = cljs.core.get.call(null,map__9728_9891__$1,cljs.core.cst$kw$gcol);
var name_9894 = cljs.core.get.call(null,map__9728_9891__$1,cljs.core.cst$kw$name);
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_9892], null),cljs.core.fnil.call(null,((function (seq__9724_9886,chunk__9725_9887,count__9726_9888,i__9727_9889,seq__9706_9836,chunk__9707_9837,count__9708_9838,i__9709_9839,seq__9670_9732,chunk__9671_9733,count__9672_9734,i__9673_9735,map__9728_9890,map__9728_9891__$1,gline_9892,gcol_9893,name_9894,vec__9721_9883,column_9884,column_info_9885,seq__9706_9877__$1,temp__4657__auto___9876__$1,vec__9703_9833,line_9834,columns_9835,seq__9670_9827__$1,temp__4657__auto___9826,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_9893], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line_9834,cljs.core.cst$kw$col,column_9884,cljs.core.cst$kw$name,name_9894], null));
});})(seq__9724_9886,chunk__9725_9887,count__9726_9888,i__9727_9889,seq__9706_9836,chunk__9707_9837,count__9708_9838,i__9709_9839,seq__9670_9732,chunk__9671_9733,count__9672_9734,i__9673_9735,map__9728_9890,map__9728_9891__$1,gline_9892,gcol_9893,name_9894,vec__9721_9883,column_9884,column_info_9885,seq__9706_9877__$1,temp__4657__auto___9876__$1,vec__9703_9833,line_9834,columns_9835,seq__9670_9827__$1,temp__4657__auto___9826,inverted))
,cljs.core.sorted_map.call(null)));

var G__9895 = seq__9724_9886;
var G__9896 = chunk__9725_9887;
var G__9897 = count__9726_9888;
var G__9898 = (i__9727_9889 + (1));
seq__9724_9886 = G__9895;
chunk__9725_9887 = G__9896;
count__9726_9888 = G__9897;
i__9727_9889 = G__9898;
continue;
} else {
var temp__4657__auto___9899__$2 = cljs.core.seq.call(null,seq__9724_9886);
if(temp__4657__auto___9899__$2){
var seq__9724_9900__$1 = temp__4657__auto___9899__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9724_9900__$1)){
var c__7220__auto___9901 = cljs.core.chunk_first.call(null,seq__9724_9900__$1);
var G__9902 = cljs.core.chunk_rest.call(null,seq__9724_9900__$1);
var G__9903 = c__7220__auto___9901;
var G__9904 = cljs.core.count.call(null,c__7220__auto___9901);
var G__9905 = (0);
seq__9724_9886 = G__9902;
chunk__9725_9887 = G__9903;
count__9726_9888 = G__9904;
i__9727_9889 = G__9905;
continue;
} else {
var map__9730_9906 = cljs.core.first.call(null,seq__9724_9900__$1);
var map__9730_9907__$1 = ((((!((map__9730_9906 == null)))?((((map__9730_9906.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9730_9906.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9730_9906):map__9730_9906);
var gline_9908 = cljs.core.get.call(null,map__9730_9907__$1,cljs.core.cst$kw$gline);
var gcol_9909 = cljs.core.get.call(null,map__9730_9907__$1,cljs.core.cst$kw$gcol);
var name_9910 = cljs.core.get.call(null,map__9730_9907__$1,cljs.core.cst$kw$name);
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_9908], null),cljs.core.fnil.call(null,((function (seq__9724_9886,chunk__9725_9887,count__9726_9888,i__9727_9889,seq__9706_9836,chunk__9707_9837,count__9708_9838,i__9709_9839,seq__9670_9732,chunk__9671_9733,count__9672_9734,i__9673_9735,map__9730_9906,map__9730_9907__$1,gline_9908,gcol_9909,name_9910,seq__9724_9900__$1,temp__4657__auto___9899__$2,vec__9721_9883,column_9884,column_info_9885,seq__9706_9877__$1,temp__4657__auto___9876__$1,vec__9703_9833,line_9834,columns_9835,seq__9670_9827__$1,temp__4657__auto___9826,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_9909], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line_9834,cljs.core.cst$kw$col,column_9884,cljs.core.cst$kw$name,name_9910], null));
});})(seq__9724_9886,chunk__9725_9887,count__9726_9888,i__9727_9889,seq__9706_9836,chunk__9707_9837,count__9708_9838,i__9709_9839,seq__9670_9732,chunk__9671_9733,count__9672_9734,i__9673_9735,map__9730_9906,map__9730_9907__$1,gline_9908,gcol_9909,name_9910,seq__9724_9900__$1,temp__4657__auto___9899__$2,vec__9721_9883,column_9884,column_info_9885,seq__9706_9877__$1,temp__4657__auto___9876__$1,vec__9703_9833,line_9834,columns_9835,seq__9670_9827__$1,temp__4657__auto___9826,inverted))
,cljs.core.sorted_map.call(null)));

var G__9911 = cljs.core.next.call(null,seq__9724_9900__$1);
var G__9912 = null;
var G__9913 = (0);
var G__9914 = (0);
seq__9724_9886 = G__9911;
chunk__9725_9887 = G__9912;
count__9726_9888 = G__9913;
i__9727_9889 = G__9914;
continue;
}
} else {
}
}
break;
}

var G__9915 = cljs.core.next.call(null,seq__9706_9877__$1);
var G__9916 = null;
var G__9917 = (0);
var G__9918 = (0);
seq__9706_9836 = G__9915;
chunk__9707_9837 = G__9916;
count__9708_9838 = G__9917;
i__9709_9839 = G__9918;
continue;
}
} else {
}
}
break;
}

var G__9919 = cljs.core.next.call(null,seq__9670_9827__$1);
var G__9920 = null;
var G__9921 = (0);
var G__9922 = (0);
seq__9670_9732 = G__9919;
chunk__9671_9733 = G__9920;
count__9672_9734 = G__9921;
i__9673_9735 = G__9922;
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