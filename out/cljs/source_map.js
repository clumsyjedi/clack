// Compiled by ClojureScript 1.8.51 {:optimize-constants true, :target :nodejs}
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
return cljs.core.reduce.call(null,(function (m,p__8551){
var vec__8552 = p__8551;
var i = cljs.core.nth.call(null,vec__8552,(0),null);
var v = cljs.core.nth.call(null,vec__8552,(1),null);
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
var vec__8554 = seg;
var gcol = cljs.core.nth.call(null,vec__8554,(0),null);
var source = cljs.core.nth.call(null,vec__8554,(1),null);
var line = cljs.core.nth.call(null,vec__8554,(2),null);
var col = cljs.core.nth.call(null,vec__8554,(3),null);
var name = cljs.core.nth.call(null,vec__8554,(4),null);
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
var vec__8557 = seg;
var gcol = cljs.core.nth.call(null,vec__8557,(0),null);
var source = cljs.core.nth.call(null,vec__8557,(1),null);
var line = cljs.core.nth.call(null,vec__8557,(2),null);
var col = cljs.core.nth.call(null,vec__8557,(3),null);
var name = cljs.core.nth.call(null,vec__8557,(4),null);
var vec__8558 = relseg;
var rgcol = cljs.core.nth.call(null,vec__8558,(0),null);
var rsource = cljs.core.nth.call(null,vec__8558,(1),null);
var rline = cljs.core.nth.call(null,vec__8558,(2),null);
var rcol = cljs.core.nth.call(null,vec__8558,(3),null);
var rname = cljs.core.nth.call(null,vec__8558,(4),null);
var nseg = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(gcol + rgcol),((function (){var or__6210__auto__ = source;
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return (0);
}
})() + rsource),((function (){var or__6210__auto__ = line;
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return (0);
}
})() + rline),((function (){var or__6210__auto__ = col;
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return (0);
}
})() + rcol),((function (){var or__6210__auto__ = name;
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
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
var map__8561 = segmap;
var map__8561__$1 = ((((!((map__8561 == null)))?((((map__8561.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8561.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8561):map__8561);
var gcol = cljs.core.get.call(null,map__8561__$1,cljs.core.cst$kw$gcol);
var source = cljs.core.get.call(null,map__8561__$1,cljs.core.cst$kw$source);
var line = cljs.core.get.call(null,map__8561__$1,cljs.core.cst$kw$line);
var col = cljs.core.get.call(null,map__8561__$1,cljs.core.cst$kw$col);
var name = cljs.core.get.call(null,map__8561__$1,cljs.core.cst$kw$name);
var d = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$gline,gline,cljs.core.cst$kw$gcol,gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,cljs.core.cst$kw$name,name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.call(null,((function (map__8561,map__8561__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.call(null,((function (map__8561,map__8561__$1,gcol,source,line,col,name,d,d__$1){
return (function (m__$1){
return cljs.core.update_in.call(null,m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.call(null,((function (map__8561,map__8561__$1,gcol,source,line,col,name,d,d__$1){
return (function (v){
return cljs.core.conj.call(null,v,d__$1);
});})(map__8561,map__8561__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__8561,map__8561__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});})(map__8561,map__8561__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var args8563 = [];
var len__7280__auto___8567 = arguments.length;
var i__7281__auto___8568 = (0);
while(true){
if((i__7281__auto___8568 < len__7280__auto___8567)){
args8563.push((arguments[i__7281__auto___8568]));

var G__8569 = (i__7281__auto___8568 + (1));
i__7281__auto___8568 = G__8569;
continue;
} else {
}
break;
}

var G__8565 = args8563.length;
switch (G__8565) {
case 1:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8563.length)].join('')));

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
var vec__8566 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__8571 = cljs.core.next.call(null,segs__$1);
var G__8572 = nrelseg;
var G__8573 = cljs.source_map.update_reverse_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__8571;
relseg__$1 = G__8572;
result__$1 = G__8573;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__8566,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__8566,(1),null);
var G__8574 = (gline + (1));
var G__8575 = cljs.core.next.call(null,lines__$1);
var G__8576 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__8577 = result__$1;
gline = G__8574;
lines__$1 = G__8575;
relseg = G__8576;
result = G__8577;
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
var map__8581 = segmap;
var map__8581__$1 = ((((!((map__8581 == null)))?((((map__8581.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8581.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8581):map__8581);
var gcol = cljs.core.get.call(null,map__8581__$1,cljs.core.cst$kw$gcol);
var source = cljs.core.get.call(null,map__8581__$1,cljs.core.cst$kw$source);
var line = cljs.core.get.call(null,map__8581__$1,cljs.core.cst$kw$line);
var col = cljs.core.get.call(null,map__8581__$1,cljs.core.cst$kw$col);
var name = cljs.core.get.call(null,map__8581__$1,cljs.core.cst$kw$name);
var d = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line,cljs.core.cst$kw$col,col,cljs.core.cst$kw$source,source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,cljs.core.cst$kw$name,name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.call(null,((function (map__8581,map__8581__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.call(null,((function (map__8581,map__8581__$1,gcol,source,line,col,name,d,d__$1){
return (function (p1__8578_SHARP_){
return cljs.core.conj.call(null,p1__8578_SHARP_,d__$1);
});})(map__8581,map__8581__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__8581,map__8581__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var args8583 = [];
var len__7280__auto___8587 = arguments.length;
var i__7281__auto___8588 = (0);
while(true){
if((i__7281__auto___8588 < len__7280__auto___8587)){
args8583.push((arguments[i__7281__auto___8588]));

var G__8589 = (i__7281__auto___8588 + (1));
i__7281__auto___8588 = G__8589;
continue;
} else {
}
break;
}

var G__8585 = args8583.length;
switch (G__8585) {
case 1:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8583.length)].join('')));

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
var vec__8586 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__8591 = cljs.core.next.call(null,segs__$1);
var G__8592 = nrelseg;
var G__8593 = cljs.source_map.update_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__8591;
relseg__$1 = G__8592;
result__$1 = G__8593;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__8586,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__8586,(1),null);
var G__8594 = (gline + (1));
var G__8595 = cljs.core.next.call(null,lines__$1);
var G__8596 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__8597 = result__$1;
gline = G__8594;
lines__$1 = G__8595;
relseg = G__8596;
result = G__8597;
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
return (function (p__8604){
var vec__8605 = p__8604;
var _ = cljs.core.nth.call(null,vec__8605,(0),null);
var source = cljs.core.nth.call(null,vec__8605,(1),null);
var line = cljs.core.nth.call(null,vec__8605,(2),null);
var col = cljs.core.nth.call(null,vec__8605,(3),null);
var name = cljs.core.nth.call(null,vec__8605,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
});})(relseg))
);

return cljs.core.conj.call(null,segs,cljs.core.reduce.call(null,((function (relseg){
return (function (cols__$1,p__8606){
var vec__8607 = p__8606;
var gcol = cljs.core.nth.call(null,vec__8607,(0),null);
var sidx = cljs.core.nth.call(null,vec__8607,(1),null);
var line = cljs.core.nth.call(null,vec__8607,(2),null);
var col = cljs.core.nth.call(null,vec__8607,(3),null);
var name = cljs.core.nth.call(null,vec__8607,(4),null);
var seg = vec__8607;
var offset = cljs.core.map.call(null,cljs.core._,seg,cljs.core.deref.call(null,relseg));
cljs.core.swap_BANG_.call(null,relseg,((function (offset,vec__8607,gcol,sidx,line,col,name,seg,relseg){
return (function (p__8608){
var vec__8609 = p__8608;
var _ = cljs.core.nth.call(null,vec__8609,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__8609,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__8609,(2),null);
var ___$3 = cljs.core.nth.call(null,vec__8609,(3),null);
var lname = cljs.core.nth.call(null,vec__8609,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__6210__auto__ = name;
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return lname;
}
})()], null);
});})(offset,vec__8607,gcol,sidx,line,col,name,seg,relseg))
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
var preamble_lines = cljs.core.take.call(null,(function (){var or__6210__auto__ = cljs.core.cst$kw$preamble_DASH_line_DASH_count.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
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
var seq__8663 = cljs.core.seq.call(null,infos);
var chunk__8664 = null;
var count__8665 = (0);
var i__8666 = (0);
while(true){
if((i__8666 < count__8665)){
var info = cljs.core._nth.call(null,chunk__8664,i__8666);
var segv_8713 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_8714 = cljs.core.cst$kw$gline.cljs$core$IFn$_invoke$arity$1(info);
var lc_8715 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_8714 > (lc_8715 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__8663,chunk__8664,count__8665,i__8666,segv_8713,gline_8714,lc_8715,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_8714 - (lc_8715 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_8713], null));
});})(seq__8663,chunk__8664,count__8665,i__8666,segv_8713,gline_8714,lc_8715,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__8663,chunk__8664,count__8665,i__8666,segv_8713,gline_8714,lc_8715,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_8714], null),cljs.core.conj,segv_8713);
});})(seq__8663,chunk__8664,count__8665,i__8666,segv_8713,gline_8714,lc_8715,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__8716 = seq__8663;
var G__8717 = chunk__8664;
var G__8718 = count__8665;
var G__8719 = (i__8666 + (1));
seq__8663 = G__8716;
chunk__8664 = G__8717;
count__8665 = G__8718;
i__8666 = G__8719;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__8663);
if(temp__4657__auto__){
var seq__8663__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8663__$1)){
var c__7021__auto__ = cljs.core.chunk_first.call(null,seq__8663__$1);
var G__8720 = cljs.core.chunk_rest.call(null,seq__8663__$1);
var G__8721 = c__7021__auto__;
var G__8722 = cljs.core.count.call(null,c__7021__auto__);
var G__8723 = (0);
seq__8663 = G__8720;
chunk__8664 = G__8721;
count__8665 = G__8722;
i__8666 = G__8723;
continue;
} else {
var info = cljs.core.first.call(null,seq__8663__$1);
var segv_8724 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_8725 = cljs.core.cst$kw$gline.cljs$core$IFn$_invoke$arity$1(info);
var lc_8726 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_8725 > (lc_8726 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__8663,chunk__8664,count__8665,i__8666,segv_8724,gline_8725,lc_8726,info,seq__8663__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_8725 - (lc_8726 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_8724], null));
});})(seq__8663,chunk__8664,count__8665,i__8666,segv_8724,gline_8725,lc_8726,info,seq__8663__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__8663,chunk__8664,count__8665,i__8666,segv_8724,gline_8725,lc_8726,info,seq__8663__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_8725], null),cljs.core.conj,segv_8724);
});})(seq__8663,chunk__8664,count__8665,i__8666,segv_8724,gline_8725,lc_8726,info,seq__8663__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__8727 = cljs.core.next.call(null,seq__8663__$1);
var G__8728 = null;
var G__8729 = (0);
var G__8730 = (0);
seq__8663 = G__8727;
chunk__8664 = G__8728;
count__8665 = G__8729;
i__8666 = G__8730;
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
var seq__8667_8731 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__8668_8732 = null;
var count__8669_8733 = (0);
var i__8670_8734 = (0);
while(true){
if((i__8670_8734 < count__8669_8733)){
var vec__8671_8735 = cljs.core._nth.call(null,chunk__8668_8732,i__8670_8734);
var source_idx_8736 = cljs.core.nth.call(null,vec__8671_8735,(0),null);
var vec__8672_8737 = cljs.core.nth.call(null,vec__8671_8735,(1),null);
var __8738 = cljs.core.nth.call(null,vec__8672_8737,(0),null);
var lines_8739__$1 = cljs.core.nth.call(null,vec__8672_8737,(1),null);
var seq__8673_8740 = cljs.core.seq.call(null,lines_8739__$1);
var chunk__8674_8741 = null;
var count__8675_8742 = (0);
var i__8676_8743 = (0);
while(true){
if((i__8676_8743 < count__8675_8742)){
var vec__8677_8744 = cljs.core._nth.call(null,chunk__8674_8741,i__8676_8743);
var line_8745 = cljs.core.nth.call(null,vec__8677_8744,(0),null);
var cols_8746 = cljs.core.nth.call(null,vec__8677_8744,(1),null);
var seq__8678_8747 = cljs.core.seq.call(null,cols_8746);
var chunk__8679_8748 = null;
var count__8680_8749 = (0);
var i__8681_8750 = (0);
while(true){
if((i__8681_8750 < count__8680_8749)){
var vec__8682_8751 = cljs.core._nth.call(null,chunk__8679_8748,i__8681_8750);
var col_8752 = cljs.core.nth.call(null,vec__8682_8751,(0),null);
var infos_8753 = cljs.core.nth.call(null,vec__8682_8751,(1),null);
encode_cols.call(null,infos_8753,source_idx_8736,line_8745,col_8752);

var G__8754 = seq__8678_8747;
var G__8755 = chunk__8679_8748;
var G__8756 = count__8680_8749;
var G__8757 = (i__8681_8750 + (1));
seq__8678_8747 = G__8754;
chunk__8679_8748 = G__8755;
count__8680_8749 = G__8756;
i__8681_8750 = G__8757;
continue;
} else {
var temp__4657__auto___8758 = cljs.core.seq.call(null,seq__8678_8747);
if(temp__4657__auto___8758){
var seq__8678_8759__$1 = temp__4657__auto___8758;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8678_8759__$1)){
var c__7021__auto___8760 = cljs.core.chunk_first.call(null,seq__8678_8759__$1);
var G__8761 = cljs.core.chunk_rest.call(null,seq__8678_8759__$1);
var G__8762 = c__7021__auto___8760;
var G__8763 = cljs.core.count.call(null,c__7021__auto___8760);
var G__8764 = (0);
seq__8678_8747 = G__8761;
chunk__8679_8748 = G__8762;
count__8680_8749 = G__8763;
i__8681_8750 = G__8764;
continue;
} else {
var vec__8683_8765 = cljs.core.first.call(null,seq__8678_8759__$1);
var col_8766 = cljs.core.nth.call(null,vec__8683_8765,(0),null);
var infos_8767 = cljs.core.nth.call(null,vec__8683_8765,(1),null);
encode_cols.call(null,infos_8767,source_idx_8736,line_8745,col_8766);

var G__8768 = cljs.core.next.call(null,seq__8678_8759__$1);
var G__8769 = null;
var G__8770 = (0);
var G__8771 = (0);
seq__8678_8747 = G__8768;
chunk__8679_8748 = G__8769;
count__8680_8749 = G__8770;
i__8681_8750 = G__8771;
continue;
}
} else {
}
}
break;
}

var G__8772 = seq__8673_8740;
var G__8773 = chunk__8674_8741;
var G__8774 = count__8675_8742;
var G__8775 = (i__8676_8743 + (1));
seq__8673_8740 = G__8772;
chunk__8674_8741 = G__8773;
count__8675_8742 = G__8774;
i__8676_8743 = G__8775;
continue;
} else {
var temp__4657__auto___8776 = cljs.core.seq.call(null,seq__8673_8740);
if(temp__4657__auto___8776){
var seq__8673_8777__$1 = temp__4657__auto___8776;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8673_8777__$1)){
var c__7021__auto___8778 = cljs.core.chunk_first.call(null,seq__8673_8777__$1);
var G__8779 = cljs.core.chunk_rest.call(null,seq__8673_8777__$1);
var G__8780 = c__7021__auto___8778;
var G__8781 = cljs.core.count.call(null,c__7021__auto___8778);
var G__8782 = (0);
seq__8673_8740 = G__8779;
chunk__8674_8741 = G__8780;
count__8675_8742 = G__8781;
i__8676_8743 = G__8782;
continue;
} else {
var vec__8684_8783 = cljs.core.first.call(null,seq__8673_8777__$1);
var line_8784 = cljs.core.nth.call(null,vec__8684_8783,(0),null);
var cols_8785 = cljs.core.nth.call(null,vec__8684_8783,(1),null);
var seq__8685_8786 = cljs.core.seq.call(null,cols_8785);
var chunk__8686_8787 = null;
var count__8687_8788 = (0);
var i__8688_8789 = (0);
while(true){
if((i__8688_8789 < count__8687_8788)){
var vec__8689_8790 = cljs.core._nth.call(null,chunk__8686_8787,i__8688_8789);
var col_8791 = cljs.core.nth.call(null,vec__8689_8790,(0),null);
var infos_8792 = cljs.core.nth.call(null,vec__8689_8790,(1),null);
encode_cols.call(null,infos_8792,source_idx_8736,line_8784,col_8791);

var G__8793 = seq__8685_8786;
var G__8794 = chunk__8686_8787;
var G__8795 = count__8687_8788;
var G__8796 = (i__8688_8789 + (1));
seq__8685_8786 = G__8793;
chunk__8686_8787 = G__8794;
count__8687_8788 = G__8795;
i__8688_8789 = G__8796;
continue;
} else {
var temp__4657__auto___8797__$1 = cljs.core.seq.call(null,seq__8685_8786);
if(temp__4657__auto___8797__$1){
var seq__8685_8798__$1 = temp__4657__auto___8797__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8685_8798__$1)){
var c__7021__auto___8799 = cljs.core.chunk_first.call(null,seq__8685_8798__$1);
var G__8800 = cljs.core.chunk_rest.call(null,seq__8685_8798__$1);
var G__8801 = c__7021__auto___8799;
var G__8802 = cljs.core.count.call(null,c__7021__auto___8799);
var G__8803 = (0);
seq__8685_8786 = G__8800;
chunk__8686_8787 = G__8801;
count__8687_8788 = G__8802;
i__8688_8789 = G__8803;
continue;
} else {
var vec__8690_8804 = cljs.core.first.call(null,seq__8685_8798__$1);
var col_8805 = cljs.core.nth.call(null,vec__8690_8804,(0),null);
var infos_8806 = cljs.core.nth.call(null,vec__8690_8804,(1),null);
encode_cols.call(null,infos_8806,source_idx_8736,line_8784,col_8805);

var G__8807 = cljs.core.next.call(null,seq__8685_8798__$1);
var G__8808 = null;
var G__8809 = (0);
var G__8810 = (0);
seq__8685_8786 = G__8807;
chunk__8686_8787 = G__8808;
count__8687_8788 = G__8809;
i__8688_8789 = G__8810;
continue;
}
} else {
}
}
break;
}

var G__8811 = cljs.core.next.call(null,seq__8673_8777__$1);
var G__8812 = null;
var G__8813 = (0);
var G__8814 = (0);
seq__8673_8740 = G__8811;
chunk__8674_8741 = G__8812;
count__8675_8742 = G__8813;
i__8676_8743 = G__8814;
continue;
}
} else {
}
}
break;
}

var G__8815 = seq__8667_8731;
var G__8816 = chunk__8668_8732;
var G__8817 = count__8669_8733;
var G__8818 = (i__8670_8734 + (1));
seq__8667_8731 = G__8815;
chunk__8668_8732 = G__8816;
count__8669_8733 = G__8817;
i__8670_8734 = G__8818;
continue;
} else {
var temp__4657__auto___8819 = cljs.core.seq.call(null,seq__8667_8731);
if(temp__4657__auto___8819){
var seq__8667_8820__$1 = temp__4657__auto___8819;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8667_8820__$1)){
var c__7021__auto___8821 = cljs.core.chunk_first.call(null,seq__8667_8820__$1);
var G__8822 = cljs.core.chunk_rest.call(null,seq__8667_8820__$1);
var G__8823 = c__7021__auto___8821;
var G__8824 = cljs.core.count.call(null,c__7021__auto___8821);
var G__8825 = (0);
seq__8667_8731 = G__8822;
chunk__8668_8732 = G__8823;
count__8669_8733 = G__8824;
i__8670_8734 = G__8825;
continue;
} else {
var vec__8691_8826 = cljs.core.first.call(null,seq__8667_8820__$1);
var source_idx_8827 = cljs.core.nth.call(null,vec__8691_8826,(0),null);
var vec__8692_8828 = cljs.core.nth.call(null,vec__8691_8826,(1),null);
var __8829 = cljs.core.nth.call(null,vec__8692_8828,(0),null);
var lines_8830__$1 = cljs.core.nth.call(null,vec__8692_8828,(1),null);
var seq__8693_8831 = cljs.core.seq.call(null,lines_8830__$1);
var chunk__8694_8832 = null;
var count__8695_8833 = (0);
var i__8696_8834 = (0);
while(true){
if((i__8696_8834 < count__8695_8833)){
var vec__8697_8835 = cljs.core._nth.call(null,chunk__8694_8832,i__8696_8834);
var line_8836 = cljs.core.nth.call(null,vec__8697_8835,(0),null);
var cols_8837 = cljs.core.nth.call(null,vec__8697_8835,(1),null);
var seq__8698_8838 = cljs.core.seq.call(null,cols_8837);
var chunk__8699_8839 = null;
var count__8700_8840 = (0);
var i__8701_8841 = (0);
while(true){
if((i__8701_8841 < count__8700_8840)){
var vec__8702_8842 = cljs.core._nth.call(null,chunk__8699_8839,i__8701_8841);
var col_8843 = cljs.core.nth.call(null,vec__8702_8842,(0),null);
var infos_8844 = cljs.core.nth.call(null,vec__8702_8842,(1),null);
encode_cols.call(null,infos_8844,source_idx_8827,line_8836,col_8843);

var G__8845 = seq__8698_8838;
var G__8846 = chunk__8699_8839;
var G__8847 = count__8700_8840;
var G__8848 = (i__8701_8841 + (1));
seq__8698_8838 = G__8845;
chunk__8699_8839 = G__8846;
count__8700_8840 = G__8847;
i__8701_8841 = G__8848;
continue;
} else {
var temp__4657__auto___8849__$1 = cljs.core.seq.call(null,seq__8698_8838);
if(temp__4657__auto___8849__$1){
var seq__8698_8850__$1 = temp__4657__auto___8849__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8698_8850__$1)){
var c__7021__auto___8851 = cljs.core.chunk_first.call(null,seq__8698_8850__$1);
var G__8852 = cljs.core.chunk_rest.call(null,seq__8698_8850__$1);
var G__8853 = c__7021__auto___8851;
var G__8854 = cljs.core.count.call(null,c__7021__auto___8851);
var G__8855 = (0);
seq__8698_8838 = G__8852;
chunk__8699_8839 = G__8853;
count__8700_8840 = G__8854;
i__8701_8841 = G__8855;
continue;
} else {
var vec__8703_8856 = cljs.core.first.call(null,seq__8698_8850__$1);
var col_8857 = cljs.core.nth.call(null,vec__8703_8856,(0),null);
var infos_8858 = cljs.core.nth.call(null,vec__8703_8856,(1),null);
encode_cols.call(null,infos_8858,source_idx_8827,line_8836,col_8857);

var G__8859 = cljs.core.next.call(null,seq__8698_8850__$1);
var G__8860 = null;
var G__8861 = (0);
var G__8862 = (0);
seq__8698_8838 = G__8859;
chunk__8699_8839 = G__8860;
count__8700_8840 = G__8861;
i__8701_8841 = G__8862;
continue;
}
} else {
}
}
break;
}

var G__8863 = seq__8693_8831;
var G__8864 = chunk__8694_8832;
var G__8865 = count__8695_8833;
var G__8866 = (i__8696_8834 + (1));
seq__8693_8831 = G__8863;
chunk__8694_8832 = G__8864;
count__8695_8833 = G__8865;
i__8696_8834 = G__8866;
continue;
} else {
var temp__4657__auto___8867__$1 = cljs.core.seq.call(null,seq__8693_8831);
if(temp__4657__auto___8867__$1){
var seq__8693_8868__$1 = temp__4657__auto___8867__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8693_8868__$1)){
var c__7021__auto___8869 = cljs.core.chunk_first.call(null,seq__8693_8868__$1);
var G__8870 = cljs.core.chunk_rest.call(null,seq__8693_8868__$1);
var G__8871 = c__7021__auto___8869;
var G__8872 = cljs.core.count.call(null,c__7021__auto___8869);
var G__8873 = (0);
seq__8693_8831 = G__8870;
chunk__8694_8832 = G__8871;
count__8695_8833 = G__8872;
i__8696_8834 = G__8873;
continue;
} else {
var vec__8704_8874 = cljs.core.first.call(null,seq__8693_8868__$1);
var line_8875 = cljs.core.nth.call(null,vec__8704_8874,(0),null);
var cols_8876 = cljs.core.nth.call(null,vec__8704_8874,(1),null);
var seq__8705_8877 = cljs.core.seq.call(null,cols_8876);
var chunk__8706_8878 = null;
var count__8707_8879 = (0);
var i__8708_8880 = (0);
while(true){
if((i__8708_8880 < count__8707_8879)){
var vec__8709_8881 = cljs.core._nth.call(null,chunk__8706_8878,i__8708_8880);
var col_8882 = cljs.core.nth.call(null,vec__8709_8881,(0),null);
var infos_8883 = cljs.core.nth.call(null,vec__8709_8881,(1),null);
encode_cols.call(null,infos_8883,source_idx_8827,line_8875,col_8882);

var G__8884 = seq__8705_8877;
var G__8885 = chunk__8706_8878;
var G__8886 = count__8707_8879;
var G__8887 = (i__8708_8880 + (1));
seq__8705_8877 = G__8884;
chunk__8706_8878 = G__8885;
count__8707_8879 = G__8886;
i__8708_8880 = G__8887;
continue;
} else {
var temp__4657__auto___8888__$2 = cljs.core.seq.call(null,seq__8705_8877);
if(temp__4657__auto___8888__$2){
var seq__8705_8889__$1 = temp__4657__auto___8888__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8705_8889__$1)){
var c__7021__auto___8890 = cljs.core.chunk_first.call(null,seq__8705_8889__$1);
var G__8891 = cljs.core.chunk_rest.call(null,seq__8705_8889__$1);
var G__8892 = c__7021__auto___8890;
var G__8893 = cljs.core.count.call(null,c__7021__auto___8890);
var G__8894 = (0);
seq__8705_8877 = G__8891;
chunk__8706_8878 = G__8892;
count__8707_8879 = G__8893;
i__8708_8880 = G__8894;
continue;
} else {
var vec__8710_8895 = cljs.core.first.call(null,seq__8705_8889__$1);
var col_8896 = cljs.core.nth.call(null,vec__8710_8895,(0),null);
var infos_8897 = cljs.core.nth.call(null,vec__8710_8895,(1),null);
encode_cols.call(null,infos_8897,source_idx_8827,line_8875,col_8896);

var G__8898 = cljs.core.next.call(null,seq__8705_8889__$1);
var G__8899 = null;
var G__8900 = (0);
var G__8901 = (0);
seq__8705_8877 = G__8898;
chunk__8706_8878 = G__8899;
count__8707_8879 = G__8900;
i__8708_8880 = G__8901;
continue;
}
} else {
}
}
break;
}

var G__8902 = cljs.core.next.call(null,seq__8693_8868__$1);
var G__8903 = null;
var G__8904 = (0);
var G__8905 = (0);
seq__8693_8831 = G__8902;
chunk__8694_8832 = G__8903;
count__8695_8833 = G__8904;
i__8696_8834 = G__8905;
continue;
}
} else {
}
}
break;
}

var G__8906 = cljs.core.next.call(null,seq__8667_8820__$1);
var G__8907 = null;
var G__8908 = (0);
var G__8909 = (0);
seq__8667_8731 = G__8906;
chunk__8668_8732 = G__8907;
count__8669_8733 = G__8908;
i__8670_8734 = G__8909;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__8711 = {"version": (3), "file": cljs.core.cst$kw$file.cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys.call(null,m);
var f = cljs.core.comp.call(null,((cljs.core.cst$kw$source_DASH_map_DASH_timestamp.cljs$core$IFn$_invoke$arity$1(opts) === true)?((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__8610_SHARP_){
return [cljs.core.str(p1__8610_SHARP_),cljs.core.str("?rel="),cljs.core.str((new Date()).valueOf())].join('');
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
:cljs.core.identity),((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__8611_SHARP_){
return cljs.core.last.call(null,clojure.string.split.call(null,p1__8611_SHARP_,/\//));
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
);
return cljs.core.into_array.call(null,cljs.core.map.call(null,f,paths));
})(), "lineCount": cljs.core.cst$kw$lines.cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.call(null,";",cljs.core.map.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__8612_SHARP_){
return clojure.string.join.call(null,",",p1__8612_SHARP_);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,cljs.source_map.lines__GT_segs.call(null,cljs.core.concat.call(null,preamble_lines,cljs.core.deref.call(null,lines))))), "names": cljs.core.into_array.call(null,cljs.core.map.call(null,clojure.set.map_invert.call(null,cljs.core.deref.call(null,names__GT_idx)),cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,names__GT_idx)))))};
if(cljs.core.truth_(cljs.core.cst$kw$sources_DASH_content.cljs$core$IFn$_invoke$arity$1(opts))){
var G__8712 = G__8711;
goog.object.set(G__8712,"sourcesContent",cljs.core.into_array.call(null,cljs.core.cst$kw$sources_DASH_content.cljs$core$IFn$_invoke$arity$1(opts)));

return G__8712;
} else {
return G__8711;
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
var vec__8915 = cljs.core.first.call(null,line_map_seq);
var line = cljs.core.nth.call(null,vec__8915,(0),null);
var col_map = cljs.core.nth.call(null,vec__8915,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq.call(null,col_map);
var new_cols = cljs.core.sorted_map.call(null);
while(true){
if(col_map_seq){
var vec__8916 = cljs.core.first.call(null,col_map_seq);
var col = cljs.core.nth.call(null,vec__8916,(0),null);
var infos = cljs.core.nth.call(null,vec__8916,(1),null);
var G__8920 = cljs.core.next.call(null,col_map_seq);
var G__8921 = cljs.core.assoc.call(null,new_cols,col,cljs.core.reduce.call(null,((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__8916,col,infos,vec__8915,line,col_map){
return (function (v,p__8917){
var map__8918 = p__8917;
var map__8918__$1 = ((((!((map__8918 == null)))?((((map__8918.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8918.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8918):map__8918);
var gline = cljs.core.get.call(null,map__8918__$1,cljs.core.cst$kw$gline);
var gcol = cljs.core.get.call(null,map__8918__$1,cljs.core.cst$kw$gcol);
return cljs.core.into.call(null,v,cljs.core.get_in.call(null,js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__8916,col,infos,vec__8915,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__8920;
new_cols = G__8921;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__8922 = cljs.core.next.call(null,line_map_seq);
var G__8923 = cljs.core.assoc.call(null,new_lines,line,new_cols);
line_map_seq = G__8922;
new_lines = G__8923;
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
var seq__8974_9024 = cljs.core.seq.call(null,reverse_map);
var chunk__8975_9025 = null;
var count__8976_9026 = (0);
var i__8977_9027 = (0);
while(true){
if((i__8977_9027 < count__8976_9026)){
var vec__8978_9028 = cljs.core._nth.call(null,chunk__8975_9025,i__8977_9027);
var line_9029 = cljs.core.nth.call(null,vec__8978_9028,(0),null);
var columns_9030 = cljs.core.nth.call(null,vec__8978_9028,(1),null);
var seq__8979_9031 = cljs.core.seq.call(null,columns_9030);
var chunk__8980_9032 = null;
var count__8981_9033 = (0);
var i__8982_9034 = (0);
while(true){
if((i__8982_9034 < count__8981_9033)){
var vec__8983_9035 = cljs.core._nth.call(null,chunk__8980_9032,i__8982_9034);
var column_9036 = cljs.core.nth.call(null,vec__8983_9035,(0),null);
var column_info_9037 = cljs.core.nth.call(null,vec__8983_9035,(1),null);
var seq__8984_9038 = cljs.core.seq.call(null,column_info_9037);
var chunk__8985_9039 = null;
var count__8986_9040 = (0);
var i__8987_9041 = (0);
while(true){
if((i__8987_9041 < count__8986_9040)){
var map__8988_9042 = cljs.core._nth.call(null,chunk__8985_9039,i__8987_9041);
var map__8988_9043__$1 = ((((!((map__8988_9042 == null)))?((((map__8988_9042.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8988_9042.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8988_9042):map__8988_9042);
var gline_9044 = cljs.core.get.call(null,map__8988_9043__$1,cljs.core.cst$kw$gline);
var gcol_9045 = cljs.core.get.call(null,map__8988_9043__$1,cljs.core.cst$kw$gcol);
var name_9046 = cljs.core.get.call(null,map__8988_9043__$1,cljs.core.cst$kw$name);
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_9044], null),cljs.core.fnil.call(null,((function (seq__8984_9038,chunk__8985_9039,count__8986_9040,i__8987_9041,seq__8979_9031,chunk__8980_9032,count__8981_9033,i__8982_9034,seq__8974_9024,chunk__8975_9025,count__8976_9026,i__8977_9027,map__8988_9042,map__8988_9043__$1,gline_9044,gcol_9045,name_9046,vec__8983_9035,column_9036,column_info_9037,vec__8978_9028,line_9029,columns_9030,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_9045], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line_9029,cljs.core.cst$kw$col,column_9036,cljs.core.cst$kw$name,name_9046], null));
});})(seq__8984_9038,chunk__8985_9039,count__8986_9040,i__8987_9041,seq__8979_9031,chunk__8980_9032,count__8981_9033,i__8982_9034,seq__8974_9024,chunk__8975_9025,count__8976_9026,i__8977_9027,map__8988_9042,map__8988_9043__$1,gline_9044,gcol_9045,name_9046,vec__8983_9035,column_9036,column_info_9037,vec__8978_9028,line_9029,columns_9030,inverted))
,cljs.core.sorted_map.call(null)));

var G__9047 = seq__8984_9038;
var G__9048 = chunk__8985_9039;
var G__9049 = count__8986_9040;
var G__9050 = (i__8987_9041 + (1));
seq__8984_9038 = G__9047;
chunk__8985_9039 = G__9048;
count__8986_9040 = G__9049;
i__8987_9041 = G__9050;
continue;
} else {
var temp__4657__auto___9051 = cljs.core.seq.call(null,seq__8984_9038);
if(temp__4657__auto___9051){
var seq__8984_9052__$1 = temp__4657__auto___9051;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8984_9052__$1)){
var c__7021__auto___9053 = cljs.core.chunk_first.call(null,seq__8984_9052__$1);
var G__9054 = cljs.core.chunk_rest.call(null,seq__8984_9052__$1);
var G__9055 = c__7021__auto___9053;
var G__9056 = cljs.core.count.call(null,c__7021__auto___9053);
var G__9057 = (0);
seq__8984_9038 = G__9054;
chunk__8985_9039 = G__9055;
count__8986_9040 = G__9056;
i__8987_9041 = G__9057;
continue;
} else {
var map__8990_9058 = cljs.core.first.call(null,seq__8984_9052__$1);
var map__8990_9059__$1 = ((((!((map__8990_9058 == null)))?((((map__8990_9058.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8990_9058.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8990_9058):map__8990_9058);
var gline_9060 = cljs.core.get.call(null,map__8990_9059__$1,cljs.core.cst$kw$gline);
var gcol_9061 = cljs.core.get.call(null,map__8990_9059__$1,cljs.core.cst$kw$gcol);
var name_9062 = cljs.core.get.call(null,map__8990_9059__$1,cljs.core.cst$kw$name);
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_9060], null),cljs.core.fnil.call(null,((function (seq__8984_9038,chunk__8985_9039,count__8986_9040,i__8987_9041,seq__8979_9031,chunk__8980_9032,count__8981_9033,i__8982_9034,seq__8974_9024,chunk__8975_9025,count__8976_9026,i__8977_9027,map__8990_9058,map__8990_9059__$1,gline_9060,gcol_9061,name_9062,seq__8984_9052__$1,temp__4657__auto___9051,vec__8983_9035,column_9036,column_info_9037,vec__8978_9028,line_9029,columns_9030,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_9061], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line_9029,cljs.core.cst$kw$col,column_9036,cljs.core.cst$kw$name,name_9062], null));
});})(seq__8984_9038,chunk__8985_9039,count__8986_9040,i__8987_9041,seq__8979_9031,chunk__8980_9032,count__8981_9033,i__8982_9034,seq__8974_9024,chunk__8975_9025,count__8976_9026,i__8977_9027,map__8990_9058,map__8990_9059__$1,gline_9060,gcol_9061,name_9062,seq__8984_9052__$1,temp__4657__auto___9051,vec__8983_9035,column_9036,column_info_9037,vec__8978_9028,line_9029,columns_9030,inverted))
,cljs.core.sorted_map.call(null)));

var G__9063 = cljs.core.next.call(null,seq__8984_9052__$1);
var G__9064 = null;
var G__9065 = (0);
var G__9066 = (0);
seq__8984_9038 = G__9063;
chunk__8985_9039 = G__9064;
count__8986_9040 = G__9065;
i__8987_9041 = G__9066;
continue;
}
} else {
}
}
break;
}

var G__9067 = seq__8979_9031;
var G__9068 = chunk__8980_9032;
var G__9069 = count__8981_9033;
var G__9070 = (i__8982_9034 + (1));
seq__8979_9031 = G__9067;
chunk__8980_9032 = G__9068;
count__8981_9033 = G__9069;
i__8982_9034 = G__9070;
continue;
} else {
var temp__4657__auto___9071 = cljs.core.seq.call(null,seq__8979_9031);
if(temp__4657__auto___9071){
var seq__8979_9072__$1 = temp__4657__auto___9071;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8979_9072__$1)){
var c__7021__auto___9073 = cljs.core.chunk_first.call(null,seq__8979_9072__$1);
var G__9074 = cljs.core.chunk_rest.call(null,seq__8979_9072__$1);
var G__9075 = c__7021__auto___9073;
var G__9076 = cljs.core.count.call(null,c__7021__auto___9073);
var G__9077 = (0);
seq__8979_9031 = G__9074;
chunk__8980_9032 = G__9075;
count__8981_9033 = G__9076;
i__8982_9034 = G__9077;
continue;
} else {
var vec__8992_9078 = cljs.core.first.call(null,seq__8979_9072__$1);
var column_9079 = cljs.core.nth.call(null,vec__8992_9078,(0),null);
var column_info_9080 = cljs.core.nth.call(null,vec__8992_9078,(1),null);
var seq__8993_9081 = cljs.core.seq.call(null,column_info_9080);
var chunk__8994_9082 = null;
var count__8995_9083 = (0);
var i__8996_9084 = (0);
while(true){
if((i__8996_9084 < count__8995_9083)){
var map__8997_9085 = cljs.core._nth.call(null,chunk__8994_9082,i__8996_9084);
var map__8997_9086__$1 = ((((!((map__8997_9085 == null)))?((((map__8997_9085.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8997_9085.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8997_9085):map__8997_9085);
var gline_9087 = cljs.core.get.call(null,map__8997_9086__$1,cljs.core.cst$kw$gline);
var gcol_9088 = cljs.core.get.call(null,map__8997_9086__$1,cljs.core.cst$kw$gcol);
var name_9089 = cljs.core.get.call(null,map__8997_9086__$1,cljs.core.cst$kw$name);
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_9087], null),cljs.core.fnil.call(null,((function (seq__8993_9081,chunk__8994_9082,count__8995_9083,i__8996_9084,seq__8979_9031,chunk__8980_9032,count__8981_9033,i__8982_9034,seq__8974_9024,chunk__8975_9025,count__8976_9026,i__8977_9027,map__8997_9085,map__8997_9086__$1,gline_9087,gcol_9088,name_9089,vec__8992_9078,column_9079,column_info_9080,seq__8979_9072__$1,temp__4657__auto___9071,vec__8978_9028,line_9029,columns_9030,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_9088], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line_9029,cljs.core.cst$kw$col,column_9079,cljs.core.cst$kw$name,name_9089], null));
});})(seq__8993_9081,chunk__8994_9082,count__8995_9083,i__8996_9084,seq__8979_9031,chunk__8980_9032,count__8981_9033,i__8982_9034,seq__8974_9024,chunk__8975_9025,count__8976_9026,i__8977_9027,map__8997_9085,map__8997_9086__$1,gline_9087,gcol_9088,name_9089,vec__8992_9078,column_9079,column_info_9080,seq__8979_9072__$1,temp__4657__auto___9071,vec__8978_9028,line_9029,columns_9030,inverted))
,cljs.core.sorted_map.call(null)));

var G__9090 = seq__8993_9081;
var G__9091 = chunk__8994_9082;
var G__9092 = count__8995_9083;
var G__9093 = (i__8996_9084 + (1));
seq__8993_9081 = G__9090;
chunk__8994_9082 = G__9091;
count__8995_9083 = G__9092;
i__8996_9084 = G__9093;
continue;
} else {
var temp__4657__auto___9094__$1 = cljs.core.seq.call(null,seq__8993_9081);
if(temp__4657__auto___9094__$1){
var seq__8993_9095__$1 = temp__4657__auto___9094__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8993_9095__$1)){
var c__7021__auto___9096 = cljs.core.chunk_first.call(null,seq__8993_9095__$1);
var G__9097 = cljs.core.chunk_rest.call(null,seq__8993_9095__$1);
var G__9098 = c__7021__auto___9096;
var G__9099 = cljs.core.count.call(null,c__7021__auto___9096);
var G__9100 = (0);
seq__8993_9081 = G__9097;
chunk__8994_9082 = G__9098;
count__8995_9083 = G__9099;
i__8996_9084 = G__9100;
continue;
} else {
var map__8999_9101 = cljs.core.first.call(null,seq__8993_9095__$1);
var map__8999_9102__$1 = ((((!((map__8999_9101 == null)))?((((map__8999_9101.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8999_9101.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8999_9101):map__8999_9101);
var gline_9103 = cljs.core.get.call(null,map__8999_9102__$1,cljs.core.cst$kw$gline);
var gcol_9104 = cljs.core.get.call(null,map__8999_9102__$1,cljs.core.cst$kw$gcol);
var name_9105 = cljs.core.get.call(null,map__8999_9102__$1,cljs.core.cst$kw$name);
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_9103], null),cljs.core.fnil.call(null,((function (seq__8993_9081,chunk__8994_9082,count__8995_9083,i__8996_9084,seq__8979_9031,chunk__8980_9032,count__8981_9033,i__8982_9034,seq__8974_9024,chunk__8975_9025,count__8976_9026,i__8977_9027,map__8999_9101,map__8999_9102__$1,gline_9103,gcol_9104,name_9105,seq__8993_9095__$1,temp__4657__auto___9094__$1,vec__8992_9078,column_9079,column_info_9080,seq__8979_9072__$1,temp__4657__auto___9071,vec__8978_9028,line_9029,columns_9030,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_9104], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line_9029,cljs.core.cst$kw$col,column_9079,cljs.core.cst$kw$name,name_9105], null));
});})(seq__8993_9081,chunk__8994_9082,count__8995_9083,i__8996_9084,seq__8979_9031,chunk__8980_9032,count__8981_9033,i__8982_9034,seq__8974_9024,chunk__8975_9025,count__8976_9026,i__8977_9027,map__8999_9101,map__8999_9102__$1,gline_9103,gcol_9104,name_9105,seq__8993_9095__$1,temp__4657__auto___9094__$1,vec__8992_9078,column_9079,column_info_9080,seq__8979_9072__$1,temp__4657__auto___9071,vec__8978_9028,line_9029,columns_9030,inverted))
,cljs.core.sorted_map.call(null)));

var G__9106 = cljs.core.next.call(null,seq__8993_9095__$1);
var G__9107 = null;
var G__9108 = (0);
var G__9109 = (0);
seq__8993_9081 = G__9106;
chunk__8994_9082 = G__9107;
count__8995_9083 = G__9108;
i__8996_9084 = G__9109;
continue;
}
} else {
}
}
break;
}

var G__9110 = cljs.core.next.call(null,seq__8979_9072__$1);
var G__9111 = null;
var G__9112 = (0);
var G__9113 = (0);
seq__8979_9031 = G__9110;
chunk__8980_9032 = G__9111;
count__8981_9033 = G__9112;
i__8982_9034 = G__9113;
continue;
}
} else {
}
}
break;
}

var G__9114 = seq__8974_9024;
var G__9115 = chunk__8975_9025;
var G__9116 = count__8976_9026;
var G__9117 = (i__8977_9027 + (1));
seq__8974_9024 = G__9114;
chunk__8975_9025 = G__9115;
count__8976_9026 = G__9116;
i__8977_9027 = G__9117;
continue;
} else {
var temp__4657__auto___9118 = cljs.core.seq.call(null,seq__8974_9024);
if(temp__4657__auto___9118){
var seq__8974_9119__$1 = temp__4657__auto___9118;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8974_9119__$1)){
var c__7021__auto___9120 = cljs.core.chunk_first.call(null,seq__8974_9119__$1);
var G__9121 = cljs.core.chunk_rest.call(null,seq__8974_9119__$1);
var G__9122 = c__7021__auto___9120;
var G__9123 = cljs.core.count.call(null,c__7021__auto___9120);
var G__9124 = (0);
seq__8974_9024 = G__9121;
chunk__8975_9025 = G__9122;
count__8976_9026 = G__9123;
i__8977_9027 = G__9124;
continue;
} else {
var vec__9001_9125 = cljs.core.first.call(null,seq__8974_9119__$1);
var line_9126 = cljs.core.nth.call(null,vec__9001_9125,(0),null);
var columns_9127 = cljs.core.nth.call(null,vec__9001_9125,(1),null);
var seq__9002_9128 = cljs.core.seq.call(null,columns_9127);
var chunk__9003_9129 = null;
var count__9004_9130 = (0);
var i__9005_9131 = (0);
while(true){
if((i__9005_9131 < count__9004_9130)){
var vec__9006_9132 = cljs.core._nth.call(null,chunk__9003_9129,i__9005_9131);
var column_9133 = cljs.core.nth.call(null,vec__9006_9132,(0),null);
var column_info_9134 = cljs.core.nth.call(null,vec__9006_9132,(1),null);
var seq__9007_9135 = cljs.core.seq.call(null,column_info_9134);
var chunk__9008_9136 = null;
var count__9009_9137 = (0);
var i__9010_9138 = (0);
while(true){
if((i__9010_9138 < count__9009_9137)){
var map__9011_9139 = cljs.core._nth.call(null,chunk__9008_9136,i__9010_9138);
var map__9011_9140__$1 = ((((!((map__9011_9139 == null)))?((((map__9011_9139.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9011_9139.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9011_9139):map__9011_9139);
var gline_9141 = cljs.core.get.call(null,map__9011_9140__$1,cljs.core.cst$kw$gline);
var gcol_9142 = cljs.core.get.call(null,map__9011_9140__$1,cljs.core.cst$kw$gcol);
var name_9143 = cljs.core.get.call(null,map__9011_9140__$1,cljs.core.cst$kw$name);
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_9141], null),cljs.core.fnil.call(null,((function (seq__9007_9135,chunk__9008_9136,count__9009_9137,i__9010_9138,seq__9002_9128,chunk__9003_9129,count__9004_9130,i__9005_9131,seq__8974_9024,chunk__8975_9025,count__8976_9026,i__8977_9027,map__9011_9139,map__9011_9140__$1,gline_9141,gcol_9142,name_9143,vec__9006_9132,column_9133,column_info_9134,vec__9001_9125,line_9126,columns_9127,seq__8974_9119__$1,temp__4657__auto___9118,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_9142], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line_9126,cljs.core.cst$kw$col,column_9133,cljs.core.cst$kw$name,name_9143], null));
});})(seq__9007_9135,chunk__9008_9136,count__9009_9137,i__9010_9138,seq__9002_9128,chunk__9003_9129,count__9004_9130,i__9005_9131,seq__8974_9024,chunk__8975_9025,count__8976_9026,i__8977_9027,map__9011_9139,map__9011_9140__$1,gline_9141,gcol_9142,name_9143,vec__9006_9132,column_9133,column_info_9134,vec__9001_9125,line_9126,columns_9127,seq__8974_9119__$1,temp__4657__auto___9118,inverted))
,cljs.core.sorted_map.call(null)));

var G__9144 = seq__9007_9135;
var G__9145 = chunk__9008_9136;
var G__9146 = count__9009_9137;
var G__9147 = (i__9010_9138 + (1));
seq__9007_9135 = G__9144;
chunk__9008_9136 = G__9145;
count__9009_9137 = G__9146;
i__9010_9138 = G__9147;
continue;
} else {
var temp__4657__auto___9148__$1 = cljs.core.seq.call(null,seq__9007_9135);
if(temp__4657__auto___9148__$1){
var seq__9007_9149__$1 = temp__4657__auto___9148__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9007_9149__$1)){
var c__7021__auto___9150 = cljs.core.chunk_first.call(null,seq__9007_9149__$1);
var G__9151 = cljs.core.chunk_rest.call(null,seq__9007_9149__$1);
var G__9152 = c__7021__auto___9150;
var G__9153 = cljs.core.count.call(null,c__7021__auto___9150);
var G__9154 = (0);
seq__9007_9135 = G__9151;
chunk__9008_9136 = G__9152;
count__9009_9137 = G__9153;
i__9010_9138 = G__9154;
continue;
} else {
var map__9013_9155 = cljs.core.first.call(null,seq__9007_9149__$1);
var map__9013_9156__$1 = ((((!((map__9013_9155 == null)))?((((map__9013_9155.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9013_9155.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9013_9155):map__9013_9155);
var gline_9157 = cljs.core.get.call(null,map__9013_9156__$1,cljs.core.cst$kw$gline);
var gcol_9158 = cljs.core.get.call(null,map__9013_9156__$1,cljs.core.cst$kw$gcol);
var name_9159 = cljs.core.get.call(null,map__9013_9156__$1,cljs.core.cst$kw$name);
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_9157], null),cljs.core.fnil.call(null,((function (seq__9007_9135,chunk__9008_9136,count__9009_9137,i__9010_9138,seq__9002_9128,chunk__9003_9129,count__9004_9130,i__9005_9131,seq__8974_9024,chunk__8975_9025,count__8976_9026,i__8977_9027,map__9013_9155,map__9013_9156__$1,gline_9157,gcol_9158,name_9159,seq__9007_9149__$1,temp__4657__auto___9148__$1,vec__9006_9132,column_9133,column_info_9134,vec__9001_9125,line_9126,columns_9127,seq__8974_9119__$1,temp__4657__auto___9118,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_9158], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line_9126,cljs.core.cst$kw$col,column_9133,cljs.core.cst$kw$name,name_9159], null));
});})(seq__9007_9135,chunk__9008_9136,count__9009_9137,i__9010_9138,seq__9002_9128,chunk__9003_9129,count__9004_9130,i__9005_9131,seq__8974_9024,chunk__8975_9025,count__8976_9026,i__8977_9027,map__9013_9155,map__9013_9156__$1,gline_9157,gcol_9158,name_9159,seq__9007_9149__$1,temp__4657__auto___9148__$1,vec__9006_9132,column_9133,column_info_9134,vec__9001_9125,line_9126,columns_9127,seq__8974_9119__$1,temp__4657__auto___9118,inverted))
,cljs.core.sorted_map.call(null)));

var G__9160 = cljs.core.next.call(null,seq__9007_9149__$1);
var G__9161 = null;
var G__9162 = (0);
var G__9163 = (0);
seq__9007_9135 = G__9160;
chunk__9008_9136 = G__9161;
count__9009_9137 = G__9162;
i__9010_9138 = G__9163;
continue;
}
} else {
}
}
break;
}

var G__9164 = seq__9002_9128;
var G__9165 = chunk__9003_9129;
var G__9166 = count__9004_9130;
var G__9167 = (i__9005_9131 + (1));
seq__9002_9128 = G__9164;
chunk__9003_9129 = G__9165;
count__9004_9130 = G__9166;
i__9005_9131 = G__9167;
continue;
} else {
var temp__4657__auto___9168__$1 = cljs.core.seq.call(null,seq__9002_9128);
if(temp__4657__auto___9168__$1){
var seq__9002_9169__$1 = temp__4657__auto___9168__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9002_9169__$1)){
var c__7021__auto___9170 = cljs.core.chunk_first.call(null,seq__9002_9169__$1);
var G__9171 = cljs.core.chunk_rest.call(null,seq__9002_9169__$1);
var G__9172 = c__7021__auto___9170;
var G__9173 = cljs.core.count.call(null,c__7021__auto___9170);
var G__9174 = (0);
seq__9002_9128 = G__9171;
chunk__9003_9129 = G__9172;
count__9004_9130 = G__9173;
i__9005_9131 = G__9174;
continue;
} else {
var vec__9015_9175 = cljs.core.first.call(null,seq__9002_9169__$1);
var column_9176 = cljs.core.nth.call(null,vec__9015_9175,(0),null);
var column_info_9177 = cljs.core.nth.call(null,vec__9015_9175,(1),null);
var seq__9016_9178 = cljs.core.seq.call(null,column_info_9177);
var chunk__9017_9179 = null;
var count__9018_9180 = (0);
var i__9019_9181 = (0);
while(true){
if((i__9019_9181 < count__9018_9180)){
var map__9020_9182 = cljs.core._nth.call(null,chunk__9017_9179,i__9019_9181);
var map__9020_9183__$1 = ((((!((map__9020_9182 == null)))?((((map__9020_9182.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9020_9182.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9020_9182):map__9020_9182);
var gline_9184 = cljs.core.get.call(null,map__9020_9183__$1,cljs.core.cst$kw$gline);
var gcol_9185 = cljs.core.get.call(null,map__9020_9183__$1,cljs.core.cst$kw$gcol);
var name_9186 = cljs.core.get.call(null,map__9020_9183__$1,cljs.core.cst$kw$name);
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_9184], null),cljs.core.fnil.call(null,((function (seq__9016_9178,chunk__9017_9179,count__9018_9180,i__9019_9181,seq__9002_9128,chunk__9003_9129,count__9004_9130,i__9005_9131,seq__8974_9024,chunk__8975_9025,count__8976_9026,i__8977_9027,map__9020_9182,map__9020_9183__$1,gline_9184,gcol_9185,name_9186,vec__9015_9175,column_9176,column_info_9177,seq__9002_9169__$1,temp__4657__auto___9168__$1,vec__9001_9125,line_9126,columns_9127,seq__8974_9119__$1,temp__4657__auto___9118,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_9185], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line_9126,cljs.core.cst$kw$col,column_9176,cljs.core.cst$kw$name,name_9186], null));
});})(seq__9016_9178,chunk__9017_9179,count__9018_9180,i__9019_9181,seq__9002_9128,chunk__9003_9129,count__9004_9130,i__9005_9131,seq__8974_9024,chunk__8975_9025,count__8976_9026,i__8977_9027,map__9020_9182,map__9020_9183__$1,gline_9184,gcol_9185,name_9186,vec__9015_9175,column_9176,column_info_9177,seq__9002_9169__$1,temp__4657__auto___9168__$1,vec__9001_9125,line_9126,columns_9127,seq__8974_9119__$1,temp__4657__auto___9118,inverted))
,cljs.core.sorted_map.call(null)));

var G__9187 = seq__9016_9178;
var G__9188 = chunk__9017_9179;
var G__9189 = count__9018_9180;
var G__9190 = (i__9019_9181 + (1));
seq__9016_9178 = G__9187;
chunk__9017_9179 = G__9188;
count__9018_9180 = G__9189;
i__9019_9181 = G__9190;
continue;
} else {
var temp__4657__auto___9191__$2 = cljs.core.seq.call(null,seq__9016_9178);
if(temp__4657__auto___9191__$2){
var seq__9016_9192__$1 = temp__4657__auto___9191__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9016_9192__$1)){
var c__7021__auto___9193 = cljs.core.chunk_first.call(null,seq__9016_9192__$1);
var G__9194 = cljs.core.chunk_rest.call(null,seq__9016_9192__$1);
var G__9195 = c__7021__auto___9193;
var G__9196 = cljs.core.count.call(null,c__7021__auto___9193);
var G__9197 = (0);
seq__9016_9178 = G__9194;
chunk__9017_9179 = G__9195;
count__9018_9180 = G__9196;
i__9019_9181 = G__9197;
continue;
} else {
var map__9022_9198 = cljs.core.first.call(null,seq__9016_9192__$1);
var map__9022_9199__$1 = ((((!((map__9022_9198 == null)))?((((map__9022_9198.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9022_9198.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9022_9198):map__9022_9198);
var gline_9200 = cljs.core.get.call(null,map__9022_9199__$1,cljs.core.cst$kw$gline);
var gcol_9201 = cljs.core.get.call(null,map__9022_9199__$1,cljs.core.cst$kw$gcol);
var name_9202 = cljs.core.get.call(null,map__9022_9199__$1,cljs.core.cst$kw$name);
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_9200], null),cljs.core.fnil.call(null,((function (seq__9016_9178,chunk__9017_9179,count__9018_9180,i__9019_9181,seq__9002_9128,chunk__9003_9129,count__9004_9130,i__9005_9131,seq__8974_9024,chunk__8975_9025,count__8976_9026,i__8977_9027,map__9022_9198,map__9022_9199__$1,gline_9200,gcol_9201,name_9202,seq__9016_9192__$1,temp__4657__auto___9191__$2,vec__9015_9175,column_9176,column_info_9177,seq__9002_9169__$1,temp__4657__auto___9168__$1,vec__9001_9125,line_9126,columns_9127,seq__8974_9119__$1,temp__4657__auto___9118,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_9201], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line_9126,cljs.core.cst$kw$col,column_9176,cljs.core.cst$kw$name,name_9202], null));
});})(seq__9016_9178,chunk__9017_9179,count__9018_9180,i__9019_9181,seq__9002_9128,chunk__9003_9129,count__9004_9130,i__9005_9131,seq__8974_9024,chunk__8975_9025,count__8976_9026,i__8977_9027,map__9022_9198,map__9022_9199__$1,gline_9200,gcol_9201,name_9202,seq__9016_9192__$1,temp__4657__auto___9191__$2,vec__9015_9175,column_9176,column_info_9177,seq__9002_9169__$1,temp__4657__auto___9168__$1,vec__9001_9125,line_9126,columns_9127,seq__8974_9119__$1,temp__4657__auto___9118,inverted))
,cljs.core.sorted_map.call(null)));

var G__9203 = cljs.core.next.call(null,seq__9016_9192__$1);
var G__9204 = null;
var G__9205 = (0);
var G__9206 = (0);
seq__9016_9178 = G__9203;
chunk__9017_9179 = G__9204;
count__9018_9180 = G__9205;
i__9019_9181 = G__9206;
continue;
}
} else {
}
}
break;
}

var G__9207 = cljs.core.next.call(null,seq__9002_9169__$1);
var G__9208 = null;
var G__9209 = (0);
var G__9210 = (0);
seq__9002_9128 = G__9207;
chunk__9003_9129 = G__9208;
count__9004_9130 = G__9209;
i__9005_9131 = G__9210;
continue;
}
} else {
}
}
break;
}

var G__9211 = cljs.core.next.call(null,seq__8974_9119__$1);
var G__9212 = null;
var G__9213 = (0);
var G__9214 = (0);
seq__8974_9024 = G__9211;
chunk__8975_9025 = G__9212;
count__8976_9026 = G__9213;
i__8977_9027 = G__9214;
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