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
return cljs.core.reduce.call(null,(function (m,p__9308){
var vec__9309 = p__9308;
var i = cljs.core.nth.call(null,vec__9309,(0),null);
var v = cljs.core.nth.call(null,vec__9309,(1),null);
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
var vec__9315 = seg;
var gcol = cljs.core.nth.call(null,vec__9315,(0),null);
var source = cljs.core.nth.call(null,vec__9315,(1),null);
var line = cljs.core.nth.call(null,vec__9315,(2),null);
var col = cljs.core.nth.call(null,vec__9315,(3),null);
var name = cljs.core.nth.call(null,vec__9315,(4),null);
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
var vec__9324 = seg;
var gcol = cljs.core.nth.call(null,vec__9324,(0),null);
var source = cljs.core.nth.call(null,vec__9324,(1),null);
var line = cljs.core.nth.call(null,vec__9324,(2),null);
var col = cljs.core.nth.call(null,vec__9324,(3),null);
var name = cljs.core.nth.call(null,vec__9324,(4),null);
var vec__9327 = relseg;
var rgcol = cljs.core.nth.call(null,vec__9327,(0),null);
var rsource = cljs.core.nth.call(null,vec__9327,(1),null);
var rline = cljs.core.nth.call(null,vec__9327,(2),null);
var rcol = cljs.core.nth.call(null,vec__9327,(3),null);
var rname = cljs.core.nth.call(null,vec__9327,(4),null);
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
var map__9332 = segmap;
var map__9332__$1 = ((((!((map__9332 == null)))?((((map__9332.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9332.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9332):map__9332);
var gcol = cljs.core.get.call(null,map__9332__$1,cljs.core.cst$kw$gcol);
var source = cljs.core.get.call(null,map__9332__$1,cljs.core.cst$kw$source);
var line = cljs.core.get.call(null,map__9332__$1,cljs.core.cst$kw$line);
var col = cljs.core.get.call(null,map__9332__$1,cljs.core.cst$kw$col);
var name = cljs.core.get.call(null,map__9332__$1,cljs.core.cst$kw$name);
var d = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$gline,gline,cljs.core.cst$kw$gcol,gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,cljs.core.cst$kw$name,name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.call(null,((function (map__9332,map__9332__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.call(null,((function (map__9332,map__9332__$1,gcol,source,line,col,name,d,d__$1){
return (function (m__$1){
return cljs.core.update_in.call(null,m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.call(null,((function (map__9332,map__9332__$1,gcol,source,line,col,name,d,d__$1){
return (function (v){
return cljs.core.conj.call(null,v,d__$1);
});})(map__9332,map__9332__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__9332,map__9332__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});})(map__9332,map__9332__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var args9334 = [];
var len__7484__auto___9340 = arguments.length;
var i__7485__auto___9341 = (0);
while(true){
if((i__7485__auto___9341 < len__7484__auto___9340)){
args9334.push((arguments[i__7485__auto___9341]));

var G__9342 = (i__7485__auto___9341 + (1));
i__7485__auto___9341 = G__9342;
continue;
} else {
}
break;
}

var G__9336 = args9334.length;
switch (G__9336) {
case 1:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9334.length)].join('')));

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
var vec__9337 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__9344 = cljs.core.next.call(null,segs__$1);
var G__9345 = nrelseg;
var G__9346 = cljs.source_map.update_reverse_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__9344;
relseg__$1 = G__9345;
result__$1 = G__9346;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__9337,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__9337,(1),null);
var G__9347 = (gline + (1));
var G__9348 = cljs.core.next.call(null,lines__$1);
var G__9349 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__9350 = result__$1;
gline = G__9347;
lines__$1 = G__9348;
relseg = G__9349;
result = G__9350;
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
var map__9354 = segmap;
var map__9354__$1 = ((((!((map__9354 == null)))?((((map__9354.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9354.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9354):map__9354);
var gcol = cljs.core.get.call(null,map__9354__$1,cljs.core.cst$kw$gcol);
var source = cljs.core.get.call(null,map__9354__$1,cljs.core.cst$kw$source);
var line = cljs.core.get.call(null,map__9354__$1,cljs.core.cst$kw$line);
var col = cljs.core.get.call(null,map__9354__$1,cljs.core.cst$kw$col);
var name = cljs.core.get.call(null,map__9354__$1,cljs.core.cst$kw$name);
var d = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line,cljs.core.cst$kw$col,col,cljs.core.cst$kw$source,source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,cljs.core.cst$kw$name,name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.call(null,((function (map__9354,map__9354__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.call(null,((function (map__9354,map__9354__$1,gcol,source,line,col,name,d,d__$1){
return (function (p1__9351_SHARP_){
return cljs.core.conj.call(null,p1__9351_SHARP_,d__$1);
});})(map__9354,map__9354__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__9354,map__9354__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var args9356 = [];
var len__7484__auto___9362 = arguments.length;
var i__7485__auto___9363 = (0);
while(true){
if((i__7485__auto___9363 < len__7484__auto___9362)){
args9356.push((arguments[i__7485__auto___9363]));

var G__9364 = (i__7485__auto___9363 + (1));
i__7485__auto___9363 = G__9364;
continue;
} else {
}
break;
}

var G__9358 = args9356.length;
switch (G__9358) {
case 1:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9356.length)].join('')));

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
var vec__9359 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__9366 = cljs.core.next.call(null,segs__$1);
var G__9367 = nrelseg;
var G__9368 = cljs.source_map.update_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__9366;
relseg__$1 = G__9367;
result__$1 = G__9368;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__9359,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__9359,(1),null);
var G__9369 = (gline + (1));
var G__9370 = cljs.core.next.call(null,lines__$1);
var G__9371 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__9372 = result__$1;
gline = G__9369;
lines__$1 = G__9370;
relseg = G__9371;
result = G__9372;
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
return (function (p__9385){
var vec__9386 = p__9385;
var _ = cljs.core.nth.call(null,vec__9386,(0),null);
var source = cljs.core.nth.call(null,vec__9386,(1),null);
var line = cljs.core.nth.call(null,vec__9386,(2),null);
var col = cljs.core.nth.call(null,vec__9386,(3),null);
var name = cljs.core.nth.call(null,vec__9386,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
});})(relseg))
);

return cljs.core.conj.call(null,segs,cljs.core.reduce.call(null,((function (relseg){
return (function (cols__$1,p__9389){
var vec__9390 = p__9389;
var gcol = cljs.core.nth.call(null,vec__9390,(0),null);
var sidx = cljs.core.nth.call(null,vec__9390,(1),null);
var line = cljs.core.nth.call(null,vec__9390,(2),null);
var col = cljs.core.nth.call(null,vec__9390,(3),null);
var name = cljs.core.nth.call(null,vec__9390,(4),null);
var seg = vec__9390;
var offset = cljs.core.map.call(null,cljs.core._,seg,cljs.core.deref.call(null,relseg));
cljs.core.swap_BANG_.call(null,relseg,((function (offset,vec__9390,gcol,sidx,line,col,name,seg,relseg){
return (function (p__9393){
var vec__9394 = p__9393;
var _ = cljs.core.nth.call(null,vec__9394,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__9394,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__9394,(2),null);
var ___$3 = cljs.core.nth.call(null,vec__9394,(3),null);
var lname = cljs.core.nth.call(null,vec__9394,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__6409__auto__ = name;
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return lname;
}
})()], null);
});})(offset,vec__9390,gcol,sidx,line,col,name,seg,relseg))
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
var seq__9482 = cljs.core.seq.call(null,infos);
var chunk__9483 = null;
var count__9484 = (0);
var i__9485 = (0);
while(true){
if((i__9485 < count__9484)){
var info = cljs.core._nth.call(null,chunk__9483,i__9485);
var segv_9564 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_9565 = cljs.core.cst$kw$gline.cljs$core$IFn$_invoke$arity$1(info);
var lc_9566 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_9565 > (lc_9566 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__9482,chunk__9483,count__9484,i__9485,segv_9564,gline_9565,lc_9566,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_9565 - (lc_9566 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_9564], null));
});})(seq__9482,chunk__9483,count__9484,i__9485,segv_9564,gline_9565,lc_9566,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__9482,chunk__9483,count__9484,i__9485,segv_9564,gline_9565,lc_9566,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_9565], null),cljs.core.conj,segv_9564);
});})(seq__9482,chunk__9483,count__9484,i__9485,segv_9564,gline_9565,lc_9566,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__9567 = seq__9482;
var G__9568 = chunk__9483;
var G__9569 = count__9484;
var G__9570 = (i__9485 + (1));
seq__9482 = G__9567;
chunk__9483 = G__9568;
count__9484 = G__9569;
i__9485 = G__9570;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__9482);
if(temp__4657__auto__){
var seq__9482__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9482__$1)){
var c__7220__auto__ = cljs.core.chunk_first.call(null,seq__9482__$1);
var G__9571 = cljs.core.chunk_rest.call(null,seq__9482__$1);
var G__9572 = c__7220__auto__;
var G__9573 = cljs.core.count.call(null,c__7220__auto__);
var G__9574 = (0);
seq__9482 = G__9571;
chunk__9483 = G__9572;
count__9484 = G__9573;
i__9485 = G__9574;
continue;
} else {
var info = cljs.core.first.call(null,seq__9482__$1);
var segv_9575 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_9576 = cljs.core.cst$kw$gline.cljs$core$IFn$_invoke$arity$1(info);
var lc_9577 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_9576 > (lc_9577 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__9482,chunk__9483,count__9484,i__9485,segv_9575,gline_9576,lc_9577,info,seq__9482__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_9576 - (lc_9577 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_9575], null));
});})(seq__9482,chunk__9483,count__9484,i__9485,segv_9575,gline_9576,lc_9577,info,seq__9482__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__9482,chunk__9483,count__9484,i__9485,segv_9575,gline_9576,lc_9577,info,seq__9482__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_9576], null),cljs.core.conj,segv_9575);
});})(seq__9482,chunk__9483,count__9484,i__9485,segv_9575,gline_9576,lc_9577,info,seq__9482__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__9578 = cljs.core.next.call(null,seq__9482__$1);
var G__9579 = null;
var G__9580 = (0);
var G__9581 = (0);
seq__9482 = G__9578;
chunk__9483 = G__9579;
count__9484 = G__9580;
i__9485 = G__9581;
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
var seq__9486_9582 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__9487_9583 = null;
var count__9488_9584 = (0);
var i__9489_9585 = (0);
while(true){
if((i__9489_9585 < count__9488_9584)){
var vec__9490_9586 = cljs.core._nth.call(null,chunk__9487_9583,i__9489_9585);
var source_idx_9587 = cljs.core.nth.call(null,vec__9490_9586,(0),null);
var vec__9493_9588 = cljs.core.nth.call(null,vec__9490_9586,(1),null);
var __9589 = cljs.core.nth.call(null,vec__9493_9588,(0),null);
var lines_9590__$1 = cljs.core.nth.call(null,vec__9493_9588,(1),null);
var seq__9496_9591 = cljs.core.seq.call(null,lines_9590__$1);
var chunk__9497_9592 = null;
var count__9498_9593 = (0);
var i__9499_9594 = (0);
while(true){
if((i__9499_9594 < count__9498_9593)){
var vec__9500_9595 = cljs.core._nth.call(null,chunk__9497_9592,i__9499_9594);
var line_9596 = cljs.core.nth.call(null,vec__9500_9595,(0),null);
var cols_9597 = cljs.core.nth.call(null,vec__9500_9595,(1),null);
var seq__9503_9598 = cljs.core.seq.call(null,cols_9597);
var chunk__9504_9599 = null;
var count__9505_9600 = (0);
var i__9506_9601 = (0);
while(true){
if((i__9506_9601 < count__9505_9600)){
var vec__9507_9602 = cljs.core._nth.call(null,chunk__9504_9599,i__9506_9601);
var col_9603 = cljs.core.nth.call(null,vec__9507_9602,(0),null);
var infos_9604 = cljs.core.nth.call(null,vec__9507_9602,(1),null);
encode_cols.call(null,infos_9604,source_idx_9587,line_9596,col_9603);

var G__9605 = seq__9503_9598;
var G__9606 = chunk__9504_9599;
var G__9607 = count__9505_9600;
var G__9608 = (i__9506_9601 + (1));
seq__9503_9598 = G__9605;
chunk__9504_9599 = G__9606;
count__9505_9600 = G__9607;
i__9506_9601 = G__9608;
continue;
} else {
var temp__4657__auto___9609 = cljs.core.seq.call(null,seq__9503_9598);
if(temp__4657__auto___9609){
var seq__9503_9610__$1 = temp__4657__auto___9609;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9503_9610__$1)){
var c__7220__auto___9611 = cljs.core.chunk_first.call(null,seq__9503_9610__$1);
var G__9612 = cljs.core.chunk_rest.call(null,seq__9503_9610__$1);
var G__9613 = c__7220__auto___9611;
var G__9614 = cljs.core.count.call(null,c__7220__auto___9611);
var G__9615 = (0);
seq__9503_9598 = G__9612;
chunk__9504_9599 = G__9613;
count__9505_9600 = G__9614;
i__9506_9601 = G__9615;
continue;
} else {
var vec__9510_9616 = cljs.core.first.call(null,seq__9503_9610__$1);
var col_9617 = cljs.core.nth.call(null,vec__9510_9616,(0),null);
var infos_9618 = cljs.core.nth.call(null,vec__9510_9616,(1),null);
encode_cols.call(null,infos_9618,source_idx_9587,line_9596,col_9617);

var G__9619 = cljs.core.next.call(null,seq__9503_9610__$1);
var G__9620 = null;
var G__9621 = (0);
var G__9622 = (0);
seq__9503_9598 = G__9619;
chunk__9504_9599 = G__9620;
count__9505_9600 = G__9621;
i__9506_9601 = G__9622;
continue;
}
} else {
}
}
break;
}

var G__9623 = seq__9496_9591;
var G__9624 = chunk__9497_9592;
var G__9625 = count__9498_9593;
var G__9626 = (i__9499_9594 + (1));
seq__9496_9591 = G__9623;
chunk__9497_9592 = G__9624;
count__9498_9593 = G__9625;
i__9499_9594 = G__9626;
continue;
} else {
var temp__4657__auto___9627 = cljs.core.seq.call(null,seq__9496_9591);
if(temp__4657__auto___9627){
var seq__9496_9628__$1 = temp__4657__auto___9627;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9496_9628__$1)){
var c__7220__auto___9629 = cljs.core.chunk_first.call(null,seq__9496_9628__$1);
var G__9630 = cljs.core.chunk_rest.call(null,seq__9496_9628__$1);
var G__9631 = c__7220__auto___9629;
var G__9632 = cljs.core.count.call(null,c__7220__auto___9629);
var G__9633 = (0);
seq__9496_9591 = G__9630;
chunk__9497_9592 = G__9631;
count__9498_9593 = G__9632;
i__9499_9594 = G__9633;
continue;
} else {
var vec__9513_9634 = cljs.core.first.call(null,seq__9496_9628__$1);
var line_9635 = cljs.core.nth.call(null,vec__9513_9634,(0),null);
var cols_9636 = cljs.core.nth.call(null,vec__9513_9634,(1),null);
var seq__9516_9637 = cljs.core.seq.call(null,cols_9636);
var chunk__9517_9638 = null;
var count__9518_9639 = (0);
var i__9519_9640 = (0);
while(true){
if((i__9519_9640 < count__9518_9639)){
var vec__9520_9641 = cljs.core._nth.call(null,chunk__9517_9638,i__9519_9640);
var col_9642 = cljs.core.nth.call(null,vec__9520_9641,(0),null);
var infos_9643 = cljs.core.nth.call(null,vec__9520_9641,(1),null);
encode_cols.call(null,infos_9643,source_idx_9587,line_9635,col_9642);

var G__9644 = seq__9516_9637;
var G__9645 = chunk__9517_9638;
var G__9646 = count__9518_9639;
var G__9647 = (i__9519_9640 + (1));
seq__9516_9637 = G__9644;
chunk__9517_9638 = G__9645;
count__9518_9639 = G__9646;
i__9519_9640 = G__9647;
continue;
} else {
var temp__4657__auto___9648__$1 = cljs.core.seq.call(null,seq__9516_9637);
if(temp__4657__auto___9648__$1){
var seq__9516_9649__$1 = temp__4657__auto___9648__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9516_9649__$1)){
var c__7220__auto___9650 = cljs.core.chunk_first.call(null,seq__9516_9649__$1);
var G__9651 = cljs.core.chunk_rest.call(null,seq__9516_9649__$1);
var G__9652 = c__7220__auto___9650;
var G__9653 = cljs.core.count.call(null,c__7220__auto___9650);
var G__9654 = (0);
seq__9516_9637 = G__9651;
chunk__9517_9638 = G__9652;
count__9518_9639 = G__9653;
i__9519_9640 = G__9654;
continue;
} else {
var vec__9523_9655 = cljs.core.first.call(null,seq__9516_9649__$1);
var col_9656 = cljs.core.nth.call(null,vec__9523_9655,(0),null);
var infos_9657 = cljs.core.nth.call(null,vec__9523_9655,(1),null);
encode_cols.call(null,infos_9657,source_idx_9587,line_9635,col_9656);

var G__9658 = cljs.core.next.call(null,seq__9516_9649__$1);
var G__9659 = null;
var G__9660 = (0);
var G__9661 = (0);
seq__9516_9637 = G__9658;
chunk__9517_9638 = G__9659;
count__9518_9639 = G__9660;
i__9519_9640 = G__9661;
continue;
}
} else {
}
}
break;
}

var G__9662 = cljs.core.next.call(null,seq__9496_9628__$1);
var G__9663 = null;
var G__9664 = (0);
var G__9665 = (0);
seq__9496_9591 = G__9662;
chunk__9497_9592 = G__9663;
count__9498_9593 = G__9664;
i__9499_9594 = G__9665;
continue;
}
} else {
}
}
break;
}

var G__9666 = seq__9486_9582;
var G__9667 = chunk__9487_9583;
var G__9668 = count__9488_9584;
var G__9669 = (i__9489_9585 + (1));
seq__9486_9582 = G__9666;
chunk__9487_9583 = G__9667;
count__9488_9584 = G__9668;
i__9489_9585 = G__9669;
continue;
} else {
var temp__4657__auto___9670 = cljs.core.seq.call(null,seq__9486_9582);
if(temp__4657__auto___9670){
var seq__9486_9671__$1 = temp__4657__auto___9670;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9486_9671__$1)){
var c__7220__auto___9672 = cljs.core.chunk_first.call(null,seq__9486_9671__$1);
var G__9673 = cljs.core.chunk_rest.call(null,seq__9486_9671__$1);
var G__9674 = c__7220__auto___9672;
var G__9675 = cljs.core.count.call(null,c__7220__auto___9672);
var G__9676 = (0);
seq__9486_9582 = G__9673;
chunk__9487_9583 = G__9674;
count__9488_9584 = G__9675;
i__9489_9585 = G__9676;
continue;
} else {
var vec__9526_9677 = cljs.core.first.call(null,seq__9486_9671__$1);
var source_idx_9678 = cljs.core.nth.call(null,vec__9526_9677,(0),null);
var vec__9529_9679 = cljs.core.nth.call(null,vec__9526_9677,(1),null);
var __9680 = cljs.core.nth.call(null,vec__9529_9679,(0),null);
var lines_9681__$1 = cljs.core.nth.call(null,vec__9529_9679,(1),null);
var seq__9532_9682 = cljs.core.seq.call(null,lines_9681__$1);
var chunk__9533_9683 = null;
var count__9534_9684 = (0);
var i__9535_9685 = (0);
while(true){
if((i__9535_9685 < count__9534_9684)){
var vec__9536_9686 = cljs.core._nth.call(null,chunk__9533_9683,i__9535_9685);
var line_9687 = cljs.core.nth.call(null,vec__9536_9686,(0),null);
var cols_9688 = cljs.core.nth.call(null,vec__9536_9686,(1),null);
var seq__9539_9689 = cljs.core.seq.call(null,cols_9688);
var chunk__9540_9690 = null;
var count__9541_9691 = (0);
var i__9542_9692 = (0);
while(true){
if((i__9542_9692 < count__9541_9691)){
var vec__9543_9693 = cljs.core._nth.call(null,chunk__9540_9690,i__9542_9692);
var col_9694 = cljs.core.nth.call(null,vec__9543_9693,(0),null);
var infos_9695 = cljs.core.nth.call(null,vec__9543_9693,(1),null);
encode_cols.call(null,infos_9695,source_idx_9678,line_9687,col_9694);

var G__9696 = seq__9539_9689;
var G__9697 = chunk__9540_9690;
var G__9698 = count__9541_9691;
var G__9699 = (i__9542_9692 + (1));
seq__9539_9689 = G__9696;
chunk__9540_9690 = G__9697;
count__9541_9691 = G__9698;
i__9542_9692 = G__9699;
continue;
} else {
var temp__4657__auto___9700__$1 = cljs.core.seq.call(null,seq__9539_9689);
if(temp__4657__auto___9700__$1){
var seq__9539_9701__$1 = temp__4657__auto___9700__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9539_9701__$1)){
var c__7220__auto___9702 = cljs.core.chunk_first.call(null,seq__9539_9701__$1);
var G__9703 = cljs.core.chunk_rest.call(null,seq__9539_9701__$1);
var G__9704 = c__7220__auto___9702;
var G__9705 = cljs.core.count.call(null,c__7220__auto___9702);
var G__9706 = (0);
seq__9539_9689 = G__9703;
chunk__9540_9690 = G__9704;
count__9541_9691 = G__9705;
i__9542_9692 = G__9706;
continue;
} else {
var vec__9546_9707 = cljs.core.first.call(null,seq__9539_9701__$1);
var col_9708 = cljs.core.nth.call(null,vec__9546_9707,(0),null);
var infos_9709 = cljs.core.nth.call(null,vec__9546_9707,(1),null);
encode_cols.call(null,infos_9709,source_idx_9678,line_9687,col_9708);

var G__9710 = cljs.core.next.call(null,seq__9539_9701__$1);
var G__9711 = null;
var G__9712 = (0);
var G__9713 = (0);
seq__9539_9689 = G__9710;
chunk__9540_9690 = G__9711;
count__9541_9691 = G__9712;
i__9542_9692 = G__9713;
continue;
}
} else {
}
}
break;
}

var G__9714 = seq__9532_9682;
var G__9715 = chunk__9533_9683;
var G__9716 = count__9534_9684;
var G__9717 = (i__9535_9685 + (1));
seq__9532_9682 = G__9714;
chunk__9533_9683 = G__9715;
count__9534_9684 = G__9716;
i__9535_9685 = G__9717;
continue;
} else {
var temp__4657__auto___9718__$1 = cljs.core.seq.call(null,seq__9532_9682);
if(temp__4657__auto___9718__$1){
var seq__9532_9719__$1 = temp__4657__auto___9718__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9532_9719__$1)){
var c__7220__auto___9720 = cljs.core.chunk_first.call(null,seq__9532_9719__$1);
var G__9721 = cljs.core.chunk_rest.call(null,seq__9532_9719__$1);
var G__9722 = c__7220__auto___9720;
var G__9723 = cljs.core.count.call(null,c__7220__auto___9720);
var G__9724 = (0);
seq__9532_9682 = G__9721;
chunk__9533_9683 = G__9722;
count__9534_9684 = G__9723;
i__9535_9685 = G__9724;
continue;
} else {
var vec__9549_9725 = cljs.core.first.call(null,seq__9532_9719__$1);
var line_9726 = cljs.core.nth.call(null,vec__9549_9725,(0),null);
var cols_9727 = cljs.core.nth.call(null,vec__9549_9725,(1),null);
var seq__9552_9728 = cljs.core.seq.call(null,cols_9727);
var chunk__9553_9729 = null;
var count__9554_9730 = (0);
var i__9555_9731 = (0);
while(true){
if((i__9555_9731 < count__9554_9730)){
var vec__9556_9732 = cljs.core._nth.call(null,chunk__9553_9729,i__9555_9731);
var col_9733 = cljs.core.nth.call(null,vec__9556_9732,(0),null);
var infos_9734 = cljs.core.nth.call(null,vec__9556_9732,(1),null);
encode_cols.call(null,infos_9734,source_idx_9678,line_9726,col_9733);

var G__9735 = seq__9552_9728;
var G__9736 = chunk__9553_9729;
var G__9737 = count__9554_9730;
var G__9738 = (i__9555_9731 + (1));
seq__9552_9728 = G__9735;
chunk__9553_9729 = G__9736;
count__9554_9730 = G__9737;
i__9555_9731 = G__9738;
continue;
} else {
var temp__4657__auto___9739__$2 = cljs.core.seq.call(null,seq__9552_9728);
if(temp__4657__auto___9739__$2){
var seq__9552_9740__$1 = temp__4657__auto___9739__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9552_9740__$1)){
var c__7220__auto___9741 = cljs.core.chunk_first.call(null,seq__9552_9740__$1);
var G__9742 = cljs.core.chunk_rest.call(null,seq__9552_9740__$1);
var G__9743 = c__7220__auto___9741;
var G__9744 = cljs.core.count.call(null,c__7220__auto___9741);
var G__9745 = (0);
seq__9552_9728 = G__9742;
chunk__9553_9729 = G__9743;
count__9554_9730 = G__9744;
i__9555_9731 = G__9745;
continue;
} else {
var vec__9559_9746 = cljs.core.first.call(null,seq__9552_9740__$1);
var col_9747 = cljs.core.nth.call(null,vec__9559_9746,(0),null);
var infos_9748 = cljs.core.nth.call(null,vec__9559_9746,(1),null);
encode_cols.call(null,infos_9748,source_idx_9678,line_9726,col_9747);

var G__9749 = cljs.core.next.call(null,seq__9552_9740__$1);
var G__9750 = null;
var G__9751 = (0);
var G__9752 = (0);
seq__9552_9728 = G__9749;
chunk__9553_9729 = G__9750;
count__9554_9730 = G__9751;
i__9555_9731 = G__9752;
continue;
}
} else {
}
}
break;
}

var G__9753 = cljs.core.next.call(null,seq__9532_9719__$1);
var G__9754 = null;
var G__9755 = (0);
var G__9756 = (0);
seq__9532_9682 = G__9753;
chunk__9533_9683 = G__9754;
count__9534_9684 = G__9755;
i__9535_9685 = G__9756;
continue;
}
} else {
}
}
break;
}

var G__9757 = cljs.core.next.call(null,seq__9486_9671__$1);
var G__9758 = null;
var G__9759 = (0);
var G__9760 = (0);
seq__9486_9582 = G__9757;
chunk__9487_9583 = G__9758;
count__9488_9584 = G__9759;
i__9489_9585 = G__9760;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__9562 = ({"version": (3), "file": cljs.core.cst$kw$file.cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys.call(null,m);
var f = cljs.core.comp.call(null,((cljs.core.cst$kw$source_DASH_map_DASH_timestamp.cljs$core$IFn$_invoke$arity$1(opts) === true)?((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__9397_SHARP_){
return [cljs.core.str(p1__9397_SHARP_),cljs.core.str("?rel="),cljs.core.str((new Date()).valueOf())].join('');
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
:cljs.core.identity),((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__9398_SHARP_){
return cljs.core.last.call(null,clojure.string.split.call(null,p1__9398_SHARP_,/\//));
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
);
return cljs.core.into_array.call(null,cljs.core.map.call(null,f,paths));
})(), "lineCount": cljs.core.cst$kw$lines.cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.call(null,";",cljs.core.map.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__9399_SHARP_){
return clojure.string.join.call(null,",",p1__9399_SHARP_);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,cljs.source_map.lines__GT_segs.call(null,cljs.core.concat.call(null,preamble_lines,cljs.core.deref.call(null,lines))))), "names": cljs.core.into_array.call(null,cljs.core.map.call(null,clojure.set.map_invert.call(null,cljs.core.deref.call(null,names__GT_idx)),cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,names__GT_idx)))))});
if(cljs.core.truth_(cljs.core.cst$kw$sources_DASH_content.cljs$core$IFn$_invoke$arity$1(opts))){
var G__9563 = G__9562;
goog.object.set(G__9563,"sourcesContent",cljs.core.into_array.call(null,cljs.core.cst$kw$sources_DASH_content.cljs$core$IFn$_invoke$arity$1(opts)));

return G__9563;
} else {
return G__9562;
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
var vec__9770 = cljs.core.first.call(null,line_map_seq);
var line = cljs.core.nth.call(null,vec__9770,(0),null);
var col_map = cljs.core.nth.call(null,vec__9770,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq.call(null,col_map);
var new_cols = cljs.core.sorted_map.call(null);
while(true){
if(col_map_seq){
var vec__9773 = cljs.core.first.call(null,col_map_seq);
var col = cljs.core.nth.call(null,vec__9773,(0),null);
var infos = cljs.core.nth.call(null,vec__9773,(1),null);
var G__9779 = cljs.core.next.call(null,col_map_seq);
var G__9780 = cljs.core.assoc.call(null,new_cols,col,cljs.core.reduce.call(null,((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__9773,col,infos,vec__9770,line,col_map){
return (function (v,p__9776){
var map__9777 = p__9776;
var map__9777__$1 = ((((!((map__9777 == null)))?((((map__9777.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9777.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9777):map__9777);
var gline = cljs.core.get.call(null,map__9777__$1,cljs.core.cst$kw$gline);
var gcol = cljs.core.get.call(null,map__9777__$1,cljs.core.cst$kw$gcol);
return cljs.core.into.call(null,v,cljs.core.get_in.call(null,js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__9773,col,infos,vec__9770,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__9779;
new_cols = G__9780;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__9781 = cljs.core.next.call(null,line_map_seq);
var G__9782 = cljs.core.assoc.call(null,new_lines,line,new_cols);
line_map_seq = G__9781;
new_lines = G__9782;
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
var seq__9845_9907 = cljs.core.seq.call(null,reverse_map);
var chunk__9846_9908 = null;
var count__9847_9909 = (0);
var i__9848_9910 = (0);
while(true){
if((i__9848_9910 < count__9847_9909)){
var vec__9849_9911 = cljs.core._nth.call(null,chunk__9846_9908,i__9848_9910);
var line_9912 = cljs.core.nth.call(null,vec__9849_9911,(0),null);
var columns_9913 = cljs.core.nth.call(null,vec__9849_9911,(1),null);
var seq__9852_9914 = cljs.core.seq.call(null,columns_9913);
var chunk__9853_9915 = null;
var count__9854_9916 = (0);
var i__9855_9917 = (0);
while(true){
if((i__9855_9917 < count__9854_9916)){
var vec__9856_9918 = cljs.core._nth.call(null,chunk__9853_9915,i__9855_9917);
var column_9919 = cljs.core.nth.call(null,vec__9856_9918,(0),null);
var column_info_9920 = cljs.core.nth.call(null,vec__9856_9918,(1),null);
var seq__9859_9921 = cljs.core.seq.call(null,column_info_9920);
var chunk__9860_9922 = null;
var count__9861_9923 = (0);
var i__9862_9924 = (0);
while(true){
if((i__9862_9924 < count__9861_9923)){
var map__9863_9925 = cljs.core._nth.call(null,chunk__9860_9922,i__9862_9924);
var map__9863_9926__$1 = ((((!((map__9863_9925 == null)))?((((map__9863_9925.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9863_9925.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9863_9925):map__9863_9925);
var gline_9927 = cljs.core.get.call(null,map__9863_9926__$1,cljs.core.cst$kw$gline);
var gcol_9928 = cljs.core.get.call(null,map__9863_9926__$1,cljs.core.cst$kw$gcol);
var name_9929 = cljs.core.get.call(null,map__9863_9926__$1,cljs.core.cst$kw$name);
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_9927], null),cljs.core.fnil.call(null,((function (seq__9859_9921,chunk__9860_9922,count__9861_9923,i__9862_9924,seq__9852_9914,chunk__9853_9915,count__9854_9916,i__9855_9917,seq__9845_9907,chunk__9846_9908,count__9847_9909,i__9848_9910,map__9863_9925,map__9863_9926__$1,gline_9927,gcol_9928,name_9929,vec__9856_9918,column_9919,column_info_9920,vec__9849_9911,line_9912,columns_9913,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_9928], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line_9912,cljs.core.cst$kw$col,column_9919,cljs.core.cst$kw$name,name_9929], null));
});})(seq__9859_9921,chunk__9860_9922,count__9861_9923,i__9862_9924,seq__9852_9914,chunk__9853_9915,count__9854_9916,i__9855_9917,seq__9845_9907,chunk__9846_9908,count__9847_9909,i__9848_9910,map__9863_9925,map__9863_9926__$1,gline_9927,gcol_9928,name_9929,vec__9856_9918,column_9919,column_info_9920,vec__9849_9911,line_9912,columns_9913,inverted))
,cljs.core.sorted_map.call(null)));

var G__9930 = seq__9859_9921;
var G__9931 = chunk__9860_9922;
var G__9932 = count__9861_9923;
var G__9933 = (i__9862_9924 + (1));
seq__9859_9921 = G__9930;
chunk__9860_9922 = G__9931;
count__9861_9923 = G__9932;
i__9862_9924 = G__9933;
continue;
} else {
var temp__4657__auto___9934 = cljs.core.seq.call(null,seq__9859_9921);
if(temp__4657__auto___9934){
var seq__9859_9935__$1 = temp__4657__auto___9934;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9859_9935__$1)){
var c__7220__auto___9936 = cljs.core.chunk_first.call(null,seq__9859_9935__$1);
var G__9937 = cljs.core.chunk_rest.call(null,seq__9859_9935__$1);
var G__9938 = c__7220__auto___9936;
var G__9939 = cljs.core.count.call(null,c__7220__auto___9936);
var G__9940 = (0);
seq__9859_9921 = G__9937;
chunk__9860_9922 = G__9938;
count__9861_9923 = G__9939;
i__9862_9924 = G__9940;
continue;
} else {
var map__9865_9941 = cljs.core.first.call(null,seq__9859_9935__$1);
var map__9865_9942__$1 = ((((!((map__9865_9941 == null)))?((((map__9865_9941.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9865_9941.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9865_9941):map__9865_9941);
var gline_9943 = cljs.core.get.call(null,map__9865_9942__$1,cljs.core.cst$kw$gline);
var gcol_9944 = cljs.core.get.call(null,map__9865_9942__$1,cljs.core.cst$kw$gcol);
var name_9945 = cljs.core.get.call(null,map__9865_9942__$1,cljs.core.cst$kw$name);
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_9943], null),cljs.core.fnil.call(null,((function (seq__9859_9921,chunk__9860_9922,count__9861_9923,i__9862_9924,seq__9852_9914,chunk__9853_9915,count__9854_9916,i__9855_9917,seq__9845_9907,chunk__9846_9908,count__9847_9909,i__9848_9910,map__9865_9941,map__9865_9942__$1,gline_9943,gcol_9944,name_9945,seq__9859_9935__$1,temp__4657__auto___9934,vec__9856_9918,column_9919,column_info_9920,vec__9849_9911,line_9912,columns_9913,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_9944], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line_9912,cljs.core.cst$kw$col,column_9919,cljs.core.cst$kw$name,name_9945], null));
});})(seq__9859_9921,chunk__9860_9922,count__9861_9923,i__9862_9924,seq__9852_9914,chunk__9853_9915,count__9854_9916,i__9855_9917,seq__9845_9907,chunk__9846_9908,count__9847_9909,i__9848_9910,map__9865_9941,map__9865_9942__$1,gline_9943,gcol_9944,name_9945,seq__9859_9935__$1,temp__4657__auto___9934,vec__9856_9918,column_9919,column_info_9920,vec__9849_9911,line_9912,columns_9913,inverted))
,cljs.core.sorted_map.call(null)));

var G__9946 = cljs.core.next.call(null,seq__9859_9935__$1);
var G__9947 = null;
var G__9948 = (0);
var G__9949 = (0);
seq__9859_9921 = G__9946;
chunk__9860_9922 = G__9947;
count__9861_9923 = G__9948;
i__9862_9924 = G__9949;
continue;
}
} else {
}
}
break;
}

var G__9950 = seq__9852_9914;
var G__9951 = chunk__9853_9915;
var G__9952 = count__9854_9916;
var G__9953 = (i__9855_9917 + (1));
seq__9852_9914 = G__9950;
chunk__9853_9915 = G__9951;
count__9854_9916 = G__9952;
i__9855_9917 = G__9953;
continue;
} else {
var temp__4657__auto___9954 = cljs.core.seq.call(null,seq__9852_9914);
if(temp__4657__auto___9954){
var seq__9852_9955__$1 = temp__4657__auto___9954;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9852_9955__$1)){
var c__7220__auto___9956 = cljs.core.chunk_first.call(null,seq__9852_9955__$1);
var G__9957 = cljs.core.chunk_rest.call(null,seq__9852_9955__$1);
var G__9958 = c__7220__auto___9956;
var G__9959 = cljs.core.count.call(null,c__7220__auto___9956);
var G__9960 = (0);
seq__9852_9914 = G__9957;
chunk__9853_9915 = G__9958;
count__9854_9916 = G__9959;
i__9855_9917 = G__9960;
continue;
} else {
var vec__9867_9961 = cljs.core.first.call(null,seq__9852_9955__$1);
var column_9962 = cljs.core.nth.call(null,vec__9867_9961,(0),null);
var column_info_9963 = cljs.core.nth.call(null,vec__9867_9961,(1),null);
var seq__9870_9964 = cljs.core.seq.call(null,column_info_9963);
var chunk__9871_9965 = null;
var count__9872_9966 = (0);
var i__9873_9967 = (0);
while(true){
if((i__9873_9967 < count__9872_9966)){
var map__9874_9968 = cljs.core._nth.call(null,chunk__9871_9965,i__9873_9967);
var map__9874_9969__$1 = ((((!((map__9874_9968 == null)))?((((map__9874_9968.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9874_9968.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9874_9968):map__9874_9968);
var gline_9970 = cljs.core.get.call(null,map__9874_9969__$1,cljs.core.cst$kw$gline);
var gcol_9971 = cljs.core.get.call(null,map__9874_9969__$1,cljs.core.cst$kw$gcol);
var name_9972 = cljs.core.get.call(null,map__9874_9969__$1,cljs.core.cst$kw$name);
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_9970], null),cljs.core.fnil.call(null,((function (seq__9870_9964,chunk__9871_9965,count__9872_9966,i__9873_9967,seq__9852_9914,chunk__9853_9915,count__9854_9916,i__9855_9917,seq__9845_9907,chunk__9846_9908,count__9847_9909,i__9848_9910,map__9874_9968,map__9874_9969__$1,gline_9970,gcol_9971,name_9972,vec__9867_9961,column_9962,column_info_9963,seq__9852_9955__$1,temp__4657__auto___9954,vec__9849_9911,line_9912,columns_9913,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_9971], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line_9912,cljs.core.cst$kw$col,column_9962,cljs.core.cst$kw$name,name_9972], null));
});})(seq__9870_9964,chunk__9871_9965,count__9872_9966,i__9873_9967,seq__9852_9914,chunk__9853_9915,count__9854_9916,i__9855_9917,seq__9845_9907,chunk__9846_9908,count__9847_9909,i__9848_9910,map__9874_9968,map__9874_9969__$1,gline_9970,gcol_9971,name_9972,vec__9867_9961,column_9962,column_info_9963,seq__9852_9955__$1,temp__4657__auto___9954,vec__9849_9911,line_9912,columns_9913,inverted))
,cljs.core.sorted_map.call(null)));

var G__9973 = seq__9870_9964;
var G__9974 = chunk__9871_9965;
var G__9975 = count__9872_9966;
var G__9976 = (i__9873_9967 + (1));
seq__9870_9964 = G__9973;
chunk__9871_9965 = G__9974;
count__9872_9966 = G__9975;
i__9873_9967 = G__9976;
continue;
} else {
var temp__4657__auto___9977__$1 = cljs.core.seq.call(null,seq__9870_9964);
if(temp__4657__auto___9977__$1){
var seq__9870_9978__$1 = temp__4657__auto___9977__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9870_9978__$1)){
var c__7220__auto___9979 = cljs.core.chunk_first.call(null,seq__9870_9978__$1);
var G__9980 = cljs.core.chunk_rest.call(null,seq__9870_9978__$1);
var G__9981 = c__7220__auto___9979;
var G__9982 = cljs.core.count.call(null,c__7220__auto___9979);
var G__9983 = (0);
seq__9870_9964 = G__9980;
chunk__9871_9965 = G__9981;
count__9872_9966 = G__9982;
i__9873_9967 = G__9983;
continue;
} else {
var map__9876_9984 = cljs.core.first.call(null,seq__9870_9978__$1);
var map__9876_9985__$1 = ((((!((map__9876_9984 == null)))?((((map__9876_9984.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9876_9984.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9876_9984):map__9876_9984);
var gline_9986 = cljs.core.get.call(null,map__9876_9985__$1,cljs.core.cst$kw$gline);
var gcol_9987 = cljs.core.get.call(null,map__9876_9985__$1,cljs.core.cst$kw$gcol);
var name_9988 = cljs.core.get.call(null,map__9876_9985__$1,cljs.core.cst$kw$name);
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_9986], null),cljs.core.fnil.call(null,((function (seq__9870_9964,chunk__9871_9965,count__9872_9966,i__9873_9967,seq__9852_9914,chunk__9853_9915,count__9854_9916,i__9855_9917,seq__9845_9907,chunk__9846_9908,count__9847_9909,i__9848_9910,map__9876_9984,map__9876_9985__$1,gline_9986,gcol_9987,name_9988,seq__9870_9978__$1,temp__4657__auto___9977__$1,vec__9867_9961,column_9962,column_info_9963,seq__9852_9955__$1,temp__4657__auto___9954,vec__9849_9911,line_9912,columns_9913,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_9987], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line_9912,cljs.core.cst$kw$col,column_9962,cljs.core.cst$kw$name,name_9988], null));
});})(seq__9870_9964,chunk__9871_9965,count__9872_9966,i__9873_9967,seq__9852_9914,chunk__9853_9915,count__9854_9916,i__9855_9917,seq__9845_9907,chunk__9846_9908,count__9847_9909,i__9848_9910,map__9876_9984,map__9876_9985__$1,gline_9986,gcol_9987,name_9988,seq__9870_9978__$1,temp__4657__auto___9977__$1,vec__9867_9961,column_9962,column_info_9963,seq__9852_9955__$1,temp__4657__auto___9954,vec__9849_9911,line_9912,columns_9913,inverted))
,cljs.core.sorted_map.call(null)));

var G__9989 = cljs.core.next.call(null,seq__9870_9978__$1);
var G__9990 = null;
var G__9991 = (0);
var G__9992 = (0);
seq__9870_9964 = G__9989;
chunk__9871_9965 = G__9990;
count__9872_9966 = G__9991;
i__9873_9967 = G__9992;
continue;
}
} else {
}
}
break;
}

var G__9993 = cljs.core.next.call(null,seq__9852_9955__$1);
var G__9994 = null;
var G__9995 = (0);
var G__9996 = (0);
seq__9852_9914 = G__9993;
chunk__9853_9915 = G__9994;
count__9854_9916 = G__9995;
i__9855_9917 = G__9996;
continue;
}
} else {
}
}
break;
}

var G__9997 = seq__9845_9907;
var G__9998 = chunk__9846_9908;
var G__9999 = count__9847_9909;
var G__10000 = (i__9848_9910 + (1));
seq__9845_9907 = G__9997;
chunk__9846_9908 = G__9998;
count__9847_9909 = G__9999;
i__9848_9910 = G__10000;
continue;
} else {
var temp__4657__auto___10001 = cljs.core.seq.call(null,seq__9845_9907);
if(temp__4657__auto___10001){
var seq__9845_10002__$1 = temp__4657__auto___10001;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9845_10002__$1)){
var c__7220__auto___10003 = cljs.core.chunk_first.call(null,seq__9845_10002__$1);
var G__10004 = cljs.core.chunk_rest.call(null,seq__9845_10002__$1);
var G__10005 = c__7220__auto___10003;
var G__10006 = cljs.core.count.call(null,c__7220__auto___10003);
var G__10007 = (0);
seq__9845_9907 = G__10004;
chunk__9846_9908 = G__10005;
count__9847_9909 = G__10006;
i__9848_9910 = G__10007;
continue;
} else {
var vec__9878_10008 = cljs.core.first.call(null,seq__9845_10002__$1);
var line_10009 = cljs.core.nth.call(null,vec__9878_10008,(0),null);
var columns_10010 = cljs.core.nth.call(null,vec__9878_10008,(1),null);
var seq__9881_10011 = cljs.core.seq.call(null,columns_10010);
var chunk__9882_10012 = null;
var count__9883_10013 = (0);
var i__9884_10014 = (0);
while(true){
if((i__9884_10014 < count__9883_10013)){
var vec__9885_10015 = cljs.core._nth.call(null,chunk__9882_10012,i__9884_10014);
var column_10016 = cljs.core.nth.call(null,vec__9885_10015,(0),null);
var column_info_10017 = cljs.core.nth.call(null,vec__9885_10015,(1),null);
var seq__9888_10018 = cljs.core.seq.call(null,column_info_10017);
var chunk__9889_10019 = null;
var count__9890_10020 = (0);
var i__9891_10021 = (0);
while(true){
if((i__9891_10021 < count__9890_10020)){
var map__9892_10022 = cljs.core._nth.call(null,chunk__9889_10019,i__9891_10021);
var map__9892_10023__$1 = ((((!((map__9892_10022 == null)))?((((map__9892_10022.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9892_10022.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9892_10022):map__9892_10022);
var gline_10024 = cljs.core.get.call(null,map__9892_10023__$1,cljs.core.cst$kw$gline);
var gcol_10025 = cljs.core.get.call(null,map__9892_10023__$1,cljs.core.cst$kw$gcol);
var name_10026 = cljs.core.get.call(null,map__9892_10023__$1,cljs.core.cst$kw$name);
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_10024], null),cljs.core.fnil.call(null,((function (seq__9888_10018,chunk__9889_10019,count__9890_10020,i__9891_10021,seq__9881_10011,chunk__9882_10012,count__9883_10013,i__9884_10014,seq__9845_9907,chunk__9846_9908,count__9847_9909,i__9848_9910,map__9892_10022,map__9892_10023__$1,gline_10024,gcol_10025,name_10026,vec__9885_10015,column_10016,column_info_10017,vec__9878_10008,line_10009,columns_10010,seq__9845_10002__$1,temp__4657__auto___10001,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_10025], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line_10009,cljs.core.cst$kw$col,column_10016,cljs.core.cst$kw$name,name_10026], null));
});})(seq__9888_10018,chunk__9889_10019,count__9890_10020,i__9891_10021,seq__9881_10011,chunk__9882_10012,count__9883_10013,i__9884_10014,seq__9845_9907,chunk__9846_9908,count__9847_9909,i__9848_9910,map__9892_10022,map__9892_10023__$1,gline_10024,gcol_10025,name_10026,vec__9885_10015,column_10016,column_info_10017,vec__9878_10008,line_10009,columns_10010,seq__9845_10002__$1,temp__4657__auto___10001,inverted))
,cljs.core.sorted_map.call(null)));

var G__10027 = seq__9888_10018;
var G__10028 = chunk__9889_10019;
var G__10029 = count__9890_10020;
var G__10030 = (i__9891_10021 + (1));
seq__9888_10018 = G__10027;
chunk__9889_10019 = G__10028;
count__9890_10020 = G__10029;
i__9891_10021 = G__10030;
continue;
} else {
var temp__4657__auto___10031__$1 = cljs.core.seq.call(null,seq__9888_10018);
if(temp__4657__auto___10031__$1){
var seq__9888_10032__$1 = temp__4657__auto___10031__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9888_10032__$1)){
var c__7220__auto___10033 = cljs.core.chunk_first.call(null,seq__9888_10032__$1);
var G__10034 = cljs.core.chunk_rest.call(null,seq__9888_10032__$1);
var G__10035 = c__7220__auto___10033;
var G__10036 = cljs.core.count.call(null,c__7220__auto___10033);
var G__10037 = (0);
seq__9888_10018 = G__10034;
chunk__9889_10019 = G__10035;
count__9890_10020 = G__10036;
i__9891_10021 = G__10037;
continue;
} else {
var map__9894_10038 = cljs.core.first.call(null,seq__9888_10032__$1);
var map__9894_10039__$1 = ((((!((map__9894_10038 == null)))?((((map__9894_10038.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9894_10038.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9894_10038):map__9894_10038);
var gline_10040 = cljs.core.get.call(null,map__9894_10039__$1,cljs.core.cst$kw$gline);
var gcol_10041 = cljs.core.get.call(null,map__9894_10039__$1,cljs.core.cst$kw$gcol);
var name_10042 = cljs.core.get.call(null,map__9894_10039__$1,cljs.core.cst$kw$name);
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_10040], null),cljs.core.fnil.call(null,((function (seq__9888_10018,chunk__9889_10019,count__9890_10020,i__9891_10021,seq__9881_10011,chunk__9882_10012,count__9883_10013,i__9884_10014,seq__9845_9907,chunk__9846_9908,count__9847_9909,i__9848_9910,map__9894_10038,map__9894_10039__$1,gline_10040,gcol_10041,name_10042,seq__9888_10032__$1,temp__4657__auto___10031__$1,vec__9885_10015,column_10016,column_info_10017,vec__9878_10008,line_10009,columns_10010,seq__9845_10002__$1,temp__4657__auto___10001,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_10041], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line_10009,cljs.core.cst$kw$col,column_10016,cljs.core.cst$kw$name,name_10042], null));
});})(seq__9888_10018,chunk__9889_10019,count__9890_10020,i__9891_10021,seq__9881_10011,chunk__9882_10012,count__9883_10013,i__9884_10014,seq__9845_9907,chunk__9846_9908,count__9847_9909,i__9848_9910,map__9894_10038,map__9894_10039__$1,gline_10040,gcol_10041,name_10042,seq__9888_10032__$1,temp__4657__auto___10031__$1,vec__9885_10015,column_10016,column_info_10017,vec__9878_10008,line_10009,columns_10010,seq__9845_10002__$1,temp__4657__auto___10001,inverted))
,cljs.core.sorted_map.call(null)));

var G__10043 = cljs.core.next.call(null,seq__9888_10032__$1);
var G__10044 = null;
var G__10045 = (0);
var G__10046 = (0);
seq__9888_10018 = G__10043;
chunk__9889_10019 = G__10044;
count__9890_10020 = G__10045;
i__9891_10021 = G__10046;
continue;
}
} else {
}
}
break;
}

var G__10047 = seq__9881_10011;
var G__10048 = chunk__9882_10012;
var G__10049 = count__9883_10013;
var G__10050 = (i__9884_10014 + (1));
seq__9881_10011 = G__10047;
chunk__9882_10012 = G__10048;
count__9883_10013 = G__10049;
i__9884_10014 = G__10050;
continue;
} else {
var temp__4657__auto___10051__$1 = cljs.core.seq.call(null,seq__9881_10011);
if(temp__4657__auto___10051__$1){
var seq__9881_10052__$1 = temp__4657__auto___10051__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9881_10052__$1)){
var c__7220__auto___10053 = cljs.core.chunk_first.call(null,seq__9881_10052__$1);
var G__10054 = cljs.core.chunk_rest.call(null,seq__9881_10052__$1);
var G__10055 = c__7220__auto___10053;
var G__10056 = cljs.core.count.call(null,c__7220__auto___10053);
var G__10057 = (0);
seq__9881_10011 = G__10054;
chunk__9882_10012 = G__10055;
count__9883_10013 = G__10056;
i__9884_10014 = G__10057;
continue;
} else {
var vec__9896_10058 = cljs.core.first.call(null,seq__9881_10052__$1);
var column_10059 = cljs.core.nth.call(null,vec__9896_10058,(0),null);
var column_info_10060 = cljs.core.nth.call(null,vec__9896_10058,(1),null);
var seq__9899_10061 = cljs.core.seq.call(null,column_info_10060);
var chunk__9900_10062 = null;
var count__9901_10063 = (0);
var i__9902_10064 = (0);
while(true){
if((i__9902_10064 < count__9901_10063)){
var map__9903_10065 = cljs.core._nth.call(null,chunk__9900_10062,i__9902_10064);
var map__9903_10066__$1 = ((((!((map__9903_10065 == null)))?((((map__9903_10065.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9903_10065.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9903_10065):map__9903_10065);
var gline_10067 = cljs.core.get.call(null,map__9903_10066__$1,cljs.core.cst$kw$gline);
var gcol_10068 = cljs.core.get.call(null,map__9903_10066__$1,cljs.core.cst$kw$gcol);
var name_10069 = cljs.core.get.call(null,map__9903_10066__$1,cljs.core.cst$kw$name);
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_10067], null),cljs.core.fnil.call(null,((function (seq__9899_10061,chunk__9900_10062,count__9901_10063,i__9902_10064,seq__9881_10011,chunk__9882_10012,count__9883_10013,i__9884_10014,seq__9845_9907,chunk__9846_9908,count__9847_9909,i__9848_9910,map__9903_10065,map__9903_10066__$1,gline_10067,gcol_10068,name_10069,vec__9896_10058,column_10059,column_info_10060,seq__9881_10052__$1,temp__4657__auto___10051__$1,vec__9878_10008,line_10009,columns_10010,seq__9845_10002__$1,temp__4657__auto___10001,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_10068], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line_10009,cljs.core.cst$kw$col,column_10059,cljs.core.cst$kw$name,name_10069], null));
});})(seq__9899_10061,chunk__9900_10062,count__9901_10063,i__9902_10064,seq__9881_10011,chunk__9882_10012,count__9883_10013,i__9884_10014,seq__9845_9907,chunk__9846_9908,count__9847_9909,i__9848_9910,map__9903_10065,map__9903_10066__$1,gline_10067,gcol_10068,name_10069,vec__9896_10058,column_10059,column_info_10060,seq__9881_10052__$1,temp__4657__auto___10051__$1,vec__9878_10008,line_10009,columns_10010,seq__9845_10002__$1,temp__4657__auto___10001,inverted))
,cljs.core.sorted_map.call(null)));

var G__10070 = seq__9899_10061;
var G__10071 = chunk__9900_10062;
var G__10072 = count__9901_10063;
var G__10073 = (i__9902_10064 + (1));
seq__9899_10061 = G__10070;
chunk__9900_10062 = G__10071;
count__9901_10063 = G__10072;
i__9902_10064 = G__10073;
continue;
} else {
var temp__4657__auto___10074__$2 = cljs.core.seq.call(null,seq__9899_10061);
if(temp__4657__auto___10074__$2){
var seq__9899_10075__$1 = temp__4657__auto___10074__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9899_10075__$1)){
var c__7220__auto___10076 = cljs.core.chunk_first.call(null,seq__9899_10075__$1);
var G__10077 = cljs.core.chunk_rest.call(null,seq__9899_10075__$1);
var G__10078 = c__7220__auto___10076;
var G__10079 = cljs.core.count.call(null,c__7220__auto___10076);
var G__10080 = (0);
seq__9899_10061 = G__10077;
chunk__9900_10062 = G__10078;
count__9901_10063 = G__10079;
i__9902_10064 = G__10080;
continue;
} else {
var map__9905_10081 = cljs.core.first.call(null,seq__9899_10075__$1);
var map__9905_10082__$1 = ((((!((map__9905_10081 == null)))?((((map__9905_10081.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9905_10081.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9905_10081):map__9905_10081);
var gline_10083 = cljs.core.get.call(null,map__9905_10082__$1,cljs.core.cst$kw$gline);
var gcol_10084 = cljs.core.get.call(null,map__9905_10082__$1,cljs.core.cst$kw$gcol);
var name_10085 = cljs.core.get.call(null,map__9905_10082__$1,cljs.core.cst$kw$name);
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_10083], null),cljs.core.fnil.call(null,((function (seq__9899_10061,chunk__9900_10062,count__9901_10063,i__9902_10064,seq__9881_10011,chunk__9882_10012,count__9883_10013,i__9884_10014,seq__9845_9907,chunk__9846_9908,count__9847_9909,i__9848_9910,map__9905_10081,map__9905_10082__$1,gline_10083,gcol_10084,name_10085,seq__9899_10075__$1,temp__4657__auto___10074__$2,vec__9896_10058,column_10059,column_info_10060,seq__9881_10052__$1,temp__4657__auto___10051__$1,vec__9878_10008,line_10009,columns_10010,seq__9845_10002__$1,temp__4657__auto___10001,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_10084], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line_10009,cljs.core.cst$kw$col,column_10059,cljs.core.cst$kw$name,name_10085], null));
});})(seq__9899_10061,chunk__9900_10062,count__9901_10063,i__9902_10064,seq__9881_10011,chunk__9882_10012,count__9883_10013,i__9884_10014,seq__9845_9907,chunk__9846_9908,count__9847_9909,i__9848_9910,map__9905_10081,map__9905_10082__$1,gline_10083,gcol_10084,name_10085,seq__9899_10075__$1,temp__4657__auto___10074__$2,vec__9896_10058,column_10059,column_info_10060,seq__9881_10052__$1,temp__4657__auto___10051__$1,vec__9878_10008,line_10009,columns_10010,seq__9845_10002__$1,temp__4657__auto___10001,inverted))
,cljs.core.sorted_map.call(null)));

var G__10086 = cljs.core.next.call(null,seq__9899_10075__$1);
var G__10087 = null;
var G__10088 = (0);
var G__10089 = (0);
seq__9899_10061 = G__10086;
chunk__9900_10062 = G__10087;
count__9901_10063 = G__10088;
i__9902_10064 = G__10089;
continue;
}
} else {
}
}
break;
}

var G__10090 = cljs.core.next.call(null,seq__9881_10052__$1);
var G__10091 = null;
var G__10092 = (0);
var G__10093 = (0);
seq__9881_10011 = G__10090;
chunk__9882_10012 = G__10091;
count__9883_10013 = G__10092;
i__9884_10014 = G__10093;
continue;
}
} else {
}
}
break;
}

var G__10094 = cljs.core.next.call(null,seq__9845_10002__$1);
var G__10095 = null;
var G__10096 = (0);
var G__10097 = (0);
seq__9845_9907 = G__10094;
chunk__9846_9908 = G__10095;
count__9847_9909 = G__10096;
i__9848_9910 = G__10097;
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