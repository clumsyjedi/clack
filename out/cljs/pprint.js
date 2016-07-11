// Compiled by ClojureScript 1.8.51 {:optimize-constants true, :target :nodejs}
goog.provide('cljs.pprint');
goog.require('cljs.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('goog.string.StringBuffer');
cljs.pprint.print = (function cljs$pprint$print(var_args){
var args__7287__auto__ = [];
var len__7280__auto___12121 = arguments.length;
var i__7281__auto___12122 = (0);
while(true){
if((i__7281__auto___12122 < len__7280__auto___12121)){
args__7287__auto__.push((arguments[i__7281__auto___12122]));

var G__12123 = (i__7281__auto___12122 + (1));
i__7281__auto___12122 = G__12123;
continue;
} else {
}
break;
}

var argseq__7288__auto__ = ((((0) < args__7287__auto__.length))?(new cljs.core.IndexedSeq(args__7287__auto__.slice((0)),(0),null)):null);
return cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(argseq__7288__auto__);
});

cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic = (function (more){
return cljs.core._write.call(null,cljs.core._STAR_out_STAR_,cljs.core.apply.call(null,cljs.core.print_str,more));
});

cljs.pprint.print.cljs$lang$maxFixedArity = (0);

cljs.pprint.print.cljs$lang$applyTo = (function (seq12120){
return cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12120));
});
cljs.pprint.println = (function cljs$pprint$println(var_args){
var args__7287__auto__ = [];
var len__7280__auto___12125 = arguments.length;
var i__7281__auto___12126 = (0);
while(true){
if((i__7281__auto___12126 < len__7280__auto___12125)){
args__7287__auto__.push((arguments[i__7281__auto___12126]));

var G__12127 = (i__7281__auto___12126 + (1));
i__7281__auto___12126 = G__12127;
continue;
} else {
}
break;
}

var argseq__7288__auto__ = ((((0) < args__7287__auto__.length))?(new cljs.core.IndexedSeq(args__7287__auto__.slice((0)),(0),null)):null);
return cljs.pprint.println.cljs$core$IFn$_invoke$arity$variadic(argseq__7288__auto__);
});

cljs.pprint.println.cljs$core$IFn$_invoke$arity$variadic = (function (more){
cljs.core.apply.call(null,cljs.pprint.print,more);

return cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"\n");
});

cljs.pprint.println.cljs$lang$maxFixedArity = (0);

cljs.pprint.println.cljs$lang$applyTo = (function (seq12124){
return cljs.pprint.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12124));
});
cljs.pprint.print_char = (function cljs$pprint$print_char(c){
return cljs.core._write.call(null,cljs.core._STAR_out_STAR_,(function (){var pred__12131 = cljs.core._EQ_;
var expr__12132 = c;
if(cljs.core.truth_(pred__12131.call(null,"\b",expr__12132))){
return "\\backspace";
} else {
if(cljs.core.truth_(pred__12131.call(null,"\t",expr__12132))){
return "\\tab";
} else {
if(cljs.core.truth_(pred__12131.call(null,"\n",expr__12132))){
return "\\newline";
} else {
if(cljs.core.truth_(pred__12131.call(null,"\f",expr__12132))){
return "\\formfeed";
} else {
if(cljs.core.truth_(pred__12131.call(null,"\r",expr__12132))){
return "\\return";
} else {
if(cljs.core.truth_(pred__12131.call(null,"\"",expr__12132))){
return "\\\"";
} else {
if(cljs.core.truth_(pred__12131.call(null,"\\",expr__12132))){
return "\\\\";
} else {
return [cljs.core.str("\\"),cljs.core.str(c)].join('');
}
}
}
}
}
}
}
})());
});
cljs.pprint.pr = (function cljs$pprint$pr(var_args){
var args__7287__auto__ = [];
var len__7280__auto___12135 = arguments.length;
var i__7281__auto___12136 = (0);
while(true){
if((i__7281__auto___12136 < len__7280__auto___12135)){
args__7287__auto__.push((arguments[i__7281__auto___12136]));

var G__12137 = (i__7281__auto___12136 + (1));
i__7281__auto___12136 = G__12137;
continue;
} else {
}
break;
}

var argseq__7288__auto__ = ((((0) < args__7287__auto__.length))?(new cljs.core.IndexedSeq(args__7287__auto__.slice((0)),(0),null)):null);
return cljs.pprint.pr.cljs$core$IFn$_invoke$arity$variadic(argseq__7288__auto__);
});

cljs.pprint.pr.cljs$core$IFn$_invoke$arity$variadic = (function (more){
return cljs.core._write.call(null,cljs.core._STAR_out_STAR_,cljs.core.apply.call(null,cljs.core.pr_str,more));
});

cljs.pprint.pr.cljs$lang$maxFixedArity = (0);

cljs.pprint.pr.cljs$lang$applyTo = (function (seq12134){
return cljs.pprint.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12134));
});
cljs.pprint.prn = (function cljs$pprint$prn(var_args){
var args__7287__auto__ = [];
var len__7280__auto___12139 = arguments.length;
var i__7281__auto___12140 = (0);
while(true){
if((i__7281__auto___12140 < len__7280__auto___12139)){
args__7287__auto__.push((arguments[i__7281__auto___12140]));

var G__12141 = (i__7281__auto___12140 + (1));
i__7281__auto___12140 = G__12141;
continue;
} else {
}
break;
}

var argseq__7288__auto__ = ((((0) < args__7287__auto__.length))?(new cljs.core.IndexedSeq(args__7287__auto__.slice((0)),(0),null)):null);
return cljs.pprint.prn.cljs$core$IFn$_invoke$arity$variadic(argseq__7288__auto__);
});

cljs.pprint.prn.cljs$core$IFn$_invoke$arity$variadic = (function (more){
cljs.core.apply.call(null,cljs.pprint.pr,more);

return cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"\n");
});

cljs.pprint.prn.cljs$lang$maxFixedArity = (0);

cljs.pprint.prn.cljs$lang$applyTo = (function (seq12138){
return cljs.pprint.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12138));
});
/**
 * Returns true if n is an float.
 */
cljs.pprint.float_QMARK_ = (function cljs$pprint$float_QMARK_(n){
return (typeof n === 'number') && (!(isNaN(n))) && (!((n === Infinity))) && (!((parseFloat(n) === parseInt(n,(10)))));
});
/**
 * Convert char to int
 */
cljs.pprint.char_code = (function cljs$pprint$char_code(c){
if(typeof c === 'number'){
return c;
} else {
if((typeof c === 'string') && ((c.length === (1)))){
return c.charCodeAt((0));
} else {
throw (new Error("Argument to char must be a character or number"));

}
}
});
cljs.pprint.map_passing_context = (function cljs$pprint$map_passing_context(func,initial_context,lis){
var context = initial_context;
var lis__$1 = lis;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_.call(null,lis__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,context], null);
} else {
var this$ = cljs.core.first.call(null,lis__$1);
var remainder = cljs.core.next.call(null,lis__$1);
var vec__12143 = cljs.core.apply.call(null,func,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$,context], null));
var result = cljs.core.nth.call(null,vec__12143,(0),null);
var new_context = cljs.core.nth.call(null,vec__12143,(1),null);
var G__12144 = new_context;
var G__12145 = remainder;
var G__12146 = cljs.core.conj.call(null,acc,result);
context = G__12144;
lis__$1 = G__12145;
acc = G__12146;
continue;
}
break;
}
});
cljs.pprint.consume = (function cljs$pprint$consume(func,initial_context){
var context = initial_context;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
var vec__12148 = cljs.core.apply.call(null,func,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [context], null));
var result = cljs.core.nth.call(null,vec__12148,(0),null);
var new_context = cljs.core.nth.call(null,vec__12148,(1),null);
if(cljs.core.not.call(null,result)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,new_context], null);
} else {
var G__12149 = new_context;
var G__12150 = cljs.core.conj.call(null,acc,result);
context = G__12149;
acc = G__12150;
continue;
}
break;
}
});
cljs.pprint.consume_while = (function cljs$pprint$consume_while(func,initial_context){
var context = initial_context;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
var vec__12152 = cljs.core.apply.call(null,func,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [context], null));
var result = cljs.core.nth.call(null,vec__12152,(0),null);
var continue$ = cljs.core.nth.call(null,vec__12152,(1),null);
var new_context = cljs.core.nth.call(null,vec__12152,(2),null);
if(cljs.core.not.call(null,continue$)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,context], null);
} else {
var G__12153 = new_context;
var G__12154 = cljs.core.conj.call(null,acc,result);
context = G__12153;
acc = G__12154;
continue;
}
break;
}
});
cljs.pprint.unzip_map = (function cljs$pprint$unzip_map(m){

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__6990__auto__ = (function cljs$pprint$unzip_map_$_iter__12179(s__12180){
return (new cljs.core.LazySeq(null,(function (){
var s__12180__$1 = s__12180;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__12180__$1);
if(temp__4657__auto__){
var s__12180__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12180__$2)){
var c__6988__auto__ = cljs.core.chunk_first.call(null,s__12180__$2);
var size__6989__auto__ = cljs.core.count.call(null,c__6988__auto__);
var b__12182 = cljs.core.chunk_buffer.call(null,size__6989__auto__);
if((function (){var i__12181 = (0);
while(true){
if((i__12181 < size__6989__auto__)){
var vec__12187 = cljs.core._nth.call(null,c__6988__auto__,i__12181);
var k = cljs.core.nth.call(null,vec__12187,(0),null);
var vec__12188 = cljs.core.nth.call(null,vec__12187,(1),null);
var v1 = cljs.core.nth.call(null,vec__12188,(0),null);
var v2 = cljs.core.nth.call(null,vec__12188,(1),null);
cljs.core.chunk_append.call(null,b__12182,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v1], null));

var G__12203 = (i__12181 + (1));
i__12181 = G__12203;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12182),cljs$pprint$unzip_map_$_iter__12179.call(null,cljs.core.chunk_rest.call(null,s__12180__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12182),null);
}
} else {
var vec__12189 = cljs.core.first.call(null,s__12180__$2);
var k = cljs.core.nth.call(null,vec__12189,(0),null);
var vec__12190 = cljs.core.nth.call(null,vec__12189,(1),null);
var v1 = cljs.core.nth.call(null,vec__12190,(0),null);
var v2 = cljs.core.nth.call(null,vec__12190,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v1], null),cljs$pprint$unzip_map_$_iter__12179.call(null,cljs.core.rest.call(null,s__12180__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__6990__auto__.call(null,m);
})()),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__6990__auto__ = (function cljs$pprint$unzip_map_$_iter__12191(s__12192){
return (new cljs.core.LazySeq(null,(function (){
var s__12192__$1 = s__12192;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__12192__$1);
if(temp__4657__auto__){
var s__12192__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12192__$2)){
var c__6988__auto__ = cljs.core.chunk_first.call(null,s__12192__$2);
var size__6989__auto__ = cljs.core.count.call(null,c__6988__auto__);
var b__12194 = cljs.core.chunk_buffer.call(null,size__6989__auto__);
if((function (){var i__12193 = (0);
while(true){
if((i__12193 < size__6989__auto__)){
var vec__12199 = cljs.core._nth.call(null,c__6988__auto__,i__12193);
var k = cljs.core.nth.call(null,vec__12199,(0),null);
var vec__12200 = cljs.core.nth.call(null,vec__12199,(1),null);
var v1 = cljs.core.nth.call(null,vec__12200,(0),null);
var v2 = cljs.core.nth.call(null,vec__12200,(1),null);
cljs.core.chunk_append.call(null,b__12194,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v2], null));

var G__12204 = (i__12193 + (1));
i__12193 = G__12204;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12194),cljs$pprint$unzip_map_$_iter__12191.call(null,cljs.core.chunk_rest.call(null,s__12192__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12194),null);
}
} else {
var vec__12201 = cljs.core.first.call(null,s__12192__$2);
var k = cljs.core.nth.call(null,vec__12201,(0),null);
var vec__12202 = cljs.core.nth.call(null,vec__12201,(1),null);
var v1 = cljs.core.nth.call(null,vec__12202,(0),null);
var v2 = cljs.core.nth.call(null,vec__12202,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v2], null),cljs$pprint$unzip_map_$_iter__12191.call(null,cljs.core.rest.call(null,s__12192__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__6990__auto__.call(null,m);
})())], null);
});
cljs.pprint.tuple_map = (function cljs$pprint$tuple_map(m,v1){

return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__6990__auto__ = (function cljs$pprint$tuple_map_$_iter__12213(s__12214){
return (new cljs.core.LazySeq(null,(function (){
var s__12214__$1 = s__12214;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__12214__$1);
if(temp__4657__auto__){
var s__12214__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12214__$2)){
var c__6988__auto__ = cljs.core.chunk_first.call(null,s__12214__$2);
var size__6989__auto__ = cljs.core.count.call(null,c__6988__auto__);
var b__12216 = cljs.core.chunk_buffer.call(null,size__6989__auto__);
if((function (){var i__12215 = (0);
while(true){
if((i__12215 < size__6989__auto__)){
var vec__12219 = cljs.core._nth.call(null,c__6988__auto__,i__12215);
var k = cljs.core.nth.call(null,vec__12219,(0),null);
var v = cljs.core.nth.call(null,vec__12219,(1),null);
cljs.core.chunk_append.call(null,b__12216,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,v1], null)], null));

var G__12221 = (i__12215 + (1));
i__12215 = G__12221;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12216),cljs$pprint$tuple_map_$_iter__12213.call(null,cljs.core.chunk_rest.call(null,s__12214__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12216),null);
}
} else {
var vec__12220 = cljs.core.first.call(null,s__12214__$2);
var k = cljs.core.nth.call(null,vec__12220,(0),null);
var v = cljs.core.nth.call(null,vec__12220,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,v1], null)], null),cljs$pprint$tuple_map_$_iter__12213.call(null,cljs.core.rest.call(null,s__12214__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__6990__auto__.call(null,m);
})());
});
cljs.pprint.rtrim = (function cljs$pprint$rtrim(s,c){

var len = cljs.core.count.call(null,s);
if(((len > (0))) && (cljs.core._EQ_.call(null,cljs.core.nth.call(null,s,(cljs.core.count.call(null,s) - (1))),c))){
var n = (len - (1));
while(true){
if((n < (0))){
return "";
} else {
if(!(cljs.core._EQ_.call(null,cljs.core.nth.call(null,s,n),c))){
return cljs.core.subs.call(null,s,(0),(n + (1)));
} else {
var G__12222 = (n - (1));
n = G__12222;
continue;

}
}
break;
}
} else {
return s;
}
});
cljs.pprint.ltrim = (function cljs$pprint$ltrim(s,c){

var len = cljs.core.count.call(null,s);
if(((len > (0))) && (cljs.core._EQ_.call(null,cljs.core.nth.call(null,s,(0)),c))){
var n = (0);
while(true){
if((cljs.core._EQ_.call(null,n,len)) || (!(cljs.core._EQ_.call(null,cljs.core.nth.call(null,s,n),c)))){
return cljs.core.subs.call(null,s,n);
} else {
var G__12223 = (n + (1));
n = G__12223;
continue;
}
break;
}
} else {
return s;
}
});
cljs.pprint.prefix_count = (function cljs$pprint$prefix_count(aseq,val){

var test = ((cljs.core.coll_QMARK_.call(null,val))?cljs.core.set.call(null,val):cljs.core.PersistentHashSet.fromArray([val], true));
var pos = (0);
while(true){
if((cljs.core._EQ_.call(null,pos,cljs.core.count.call(null,aseq))) || (cljs.core.not.call(null,test.call(null,cljs.core.nth.call(null,aseq,pos))))){
return pos;
} else {
var G__12224 = (pos + (1));
pos = G__12224;
continue;
}
break;
}
});

/**
 * @interface
 */
cljs.pprint.IPrettyFlush = function(){};

cljs.pprint._ppflush = (function cljs$pprint$_ppflush(pp){
if((!((pp == null))) && (!((pp.cljs$pprint$IPrettyFlush$_ppflush$arity$1 == null)))){
return pp.cljs$pprint$IPrettyFlush$_ppflush$arity$1(pp);
} else {
var x__6873__auto__ = (((pp == null))?null:pp);
var m__6874__auto__ = (cljs.pprint._ppflush[goog.typeOf(x__6873__auto__)]);
if(!((m__6874__auto__ == null))){
return m__6874__auto__.call(null,pp);
} else {
var m__6874__auto____$1 = (cljs.pprint._ppflush["_"]);
if(!((m__6874__auto____$1 == null))){
return m__6874__auto____$1.call(null,pp);
} else {
throw cljs.core.missing_protocol.call(null,"IPrettyFlush.-ppflush",pp);
}
}
}
});

cljs.pprint._STAR_default_page_width_STAR_ = (72);
cljs.pprint.get_field = (function cljs$pprint$get_field(this$,sym){
return sym.call(null,cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
});
cljs.pprint.set_field = (function cljs$pprint$set_field(this$,sym,new_val){
return cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,sym,new_val);
});
cljs.pprint.get_column = (function cljs$pprint$get_column(this$){
return cljs.pprint.get_field.call(null,this$,cljs.core.cst$kw$cur);
});
cljs.pprint.get_line = (function cljs$pprint$get_line(this$){
return cljs.pprint.get_field.call(null,this$,cljs.core.cst$kw$line);
});
cljs.pprint.get_max_column = (function cljs$pprint$get_max_column(this$){
return cljs.pprint.get_field.call(null,this$,cljs.core.cst$kw$max);
});
cljs.pprint.set_max_column = (function cljs$pprint$set_max_column(this$,new_max){
cljs.pprint.set_field.call(null,this$,cljs.core.cst$kw$max,new_max);

return null;
});
cljs.pprint.get_writer = (function cljs$pprint$get_writer(this$){
return cljs.pprint.get_field.call(null,this$,cljs.core.cst$kw$base);
});
cljs.pprint.c_write_char = (function cljs$pprint$c_write_char(this$,c){
if(cljs.core._EQ_.call(null,c,"\n")){
cljs.pprint.set_field.call(null,this$,cljs.core.cst$kw$cur,(0));

cljs.pprint.set_field.call(null,this$,cljs.core.cst$kw$line,(cljs.pprint.get_field.call(null,this$,cljs.core.cst$kw$line) + (1)));
} else {
cljs.pprint.set_field.call(null,this$,cljs.core.cst$kw$cur,(cljs.pprint.get_field.call(null,this$,cljs.core.cst$kw$cur) + (1)));
}

return cljs.core._write.call(null,cljs.pprint.get_field.call(null,this$,cljs.core.cst$kw$base),c);
});
cljs.pprint.column_writer = (function cljs$pprint$column_writer(var_args){
var args12226 = [];
var len__7280__auto___12235 = arguments.length;
var i__7281__auto___12236 = (0);
while(true){
if((i__7281__auto___12236 < len__7280__auto___12235)){
args12226.push((arguments[i__7281__auto___12236]));

var G__12237 = (i__7281__auto___12236 + (1));
i__7281__auto___12236 = G__12237;
continue;
} else {
}
break;
}

var G__12228 = args12226.length;
switch (G__12228) {
case 1:
return cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12226.length)].join('')));

}
});

cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$1 = (function (writer){
return cljs.pprint.column_writer.call(null,writer,cljs.pprint._STAR_default_page_width_STAR_);
});

cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$2 = (function (writer,max_columns){
var fields = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$max,max_columns,cljs.core.cst$kw$cur,(0),cljs.core.cst$kw$line,(0),cljs.core.cst$kw$base,writer], null));
if(typeof cljs.pprint.t_cljs$pprint12229 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint12229 = (function (writer,max_columns,fields,meta12230){
this.writer = writer;
this.max_columns = max_columns;
this.fields = fields;
this.meta12230 = meta12230;
this.cljs$lang$protocol_mask$partition0$ = 1074167808;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.pprint.t_cljs$pprint12229.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (fields){
return (function (_12231,meta12230__$1){
var self__ = this;
var _12231__$1 = this;
return (new cljs.pprint.t_cljs$pprint12229(self__.writer,self__.max_columns,self__.fields,meta12230__$1));
});})(fields))
;

cljs.pprint.t_cljs$pprint12229.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (fields){
return (function (_12231){
var self__ = this;
var _12231__$1 = this;
return self__.meta12230;
});})(fields))
;

cljs.pprint.t_cljs$pprint12229.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (fields){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.fields;
});})(fields))
;

cljs.pprint.t_cljs$pprint12229.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (fields){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush.call(null,self__.writer);
});})(fields))
;

cljs.pprint.t_cljs$pprint12229.prototype.cljs$core$IWriter$_write$arity$2 = ((function (fields){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__12232 = cljs.core._EQ_;
var expr__12233 = cljs.core.type.call(null,x);
if(cljs.core.truth_(pred__12232.call(null,String,expr__12233))){
var s = x;
var nl = s.lastIndexOf("\n");
if((nl < (0))){
cljs.pprint.set_field.call(null,this$__$1,cljs.core.cst$kw$cur,(cljs.pprint.get_field.call(null,this$__$1,cljs.core.cst$kw$cur) + cljs.core.count.call(null,s)));
} else {
cljs.pprint.set_field.call(null,this$__$1,cljs.core.cst$kw$cur,((cljs.core.count.call(null,s) - nl) - (1)));

cljs.pprint.set_field.call(null,this$__$1,cljs.core.cst$kw$line,(cljs.pprint.get_field.call(null,this$__$1,cljs.core.cst$kw$line) + cljs.core.count.call(null,cljs.core.filter.call(null,((function (s,nl,pred__12232,expr__12233,this$__$1,fields){
return (function (p1__12225_SHARP_){
return cljs.core._EQ_.call(null,p1__12225_SHARP_,"\n");
});})(s,nl,pred__12232,expr__12233,this$__$1,fields))
,s))));
}

return cljs.core._write.call(null,cljs.pprint.get_field.call(null,this$__$1,cljs.core.cst$kw$base),s);
} else {
if(cljs.core.truth_(pred__12232.call(null,Number,expr__12233))){
return cljs.pprint.c_write_char.call(null,this$__$1,x);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__12233)].join('')));
}
}
});})(fields))
;

cljs.pprint.t_cljs$pprint12229.getBasis = ((function (fields){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$writer,cljs.core.cst$sym$max_DASH_columns,cljs.core.cst$sym$fields,cljs.core.cst$sym$meta12230], null);
});})(fields))
;

cljs.pprint.t_cljs$pprint12229.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint12229.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint12229";

cljs.pprint.t_cljs$pprint12229.cljs$lang$ctorPrWriter = ((function (fields){
return (function (this__6816__auto__,writer__6817__auto__,opt__6818__auto__){
return cljs.core._write.call(null,writer__6817__auto__,"cljs.pprint/t_cljs$pprint12229");
});})(fields))
;

cljs.pprint.__GT_t_cljs$pprint12229 = ((function (fields){
return (function cljs$pprint$__GT_t_cljs$pprint12229(writer__$1,max_columns__$1,fields__$1,meta12230){
return (new cljs.pprint.t_cljs$pprint12229(writer__$1,max_columns__$1,fields__$1,meta12230));
});})(fields))
;

}

return (new cljs.pprint.t_cljs$pprint12229(writer,max_columns,fields,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.pprint.column_writer.cljs$lang$maxFixedArity = 2;

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.logical_block = (function (parent,section,start_col,indent,done_nl,intra_block_nl,prefix,per_line_prefix,suffix,logical_block_callback,__meta,__extmap,__hash){
this.parent = parent;
this.section = section;
this.start_col = start_col;
this.indent = indent;
this.done_nl = done_nl;
this.intra_block_nl = intra_block_nl;
this.prefix = prefix;
this.per_line_prefix = per_line_prefix;
this.suffix = suffix;
this.logical_block_callback = logical_block_callback;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.pprint.logical_block.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__6832__auto__,k__6833__auto__){
var self__ = this;
var this__6832__auto____$1 = this;
return cljs.core._lookup.call(null,this__6832__auto____$1,k__6833__auto__,null);
});

cljs.pprint.logical_block.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__6834__auto__,k12240,else__6835__auto__){
var self__ = this;
var this__6834__auto____$1 = this;
var G__12242 = (((k12240 instanceof cljs.core.Keyword))?k12240.fqn:null);
switch (G__12242) {
case "suffix":
return self__.suffix;

break;
case "indent":
return self__.indent;

break;
case "parent":
return self__.parent;

break;
case "section":
return self__.section;

break;
case "done-nl":
return self__.done_nl;

break;
case "start-col":
return self__.start_col;

break;
case "prefix":
return self__.prefix;

break;
case "per-line-prefix":
return self__.per_line_prefix;

break;
case "logical-block-callback":
return self__.logical_block_callback;

break;
case "intra-block-nl":
return self__.intra_block_nl;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k12240,else__6835__auto__);

}
});

cljs.pprint.logical_block.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__6846__auto__,writer__6847__auto__,opts__6848__auto__){
var self__ = this;
var this__6846__auto____$1 = this;
var pr_pair__6849__auto__ = ((function (this__6846__auto____$1){
return (function (keyval__6850__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__6847__auto__,cljs.core.pr_writer,""," ","",opts__6848__auto__,keyval__6850__auto__);
});})(this__6846__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__6847__auto__,pr_pair__6849__auto__,"#cljs.pprint.logical-block{",", ","}",opts__6848__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$parent,self__.parent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$section,self__.section],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_col,self__.start_col],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$indent,self__.indent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$done_DASH_nl,self__.done_nl],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$intra_DASH_block_DASH_nl,self__.intra_block_nl],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$prefix,self__.prefix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$per_DASH_line_DASH_prefix,self__.per_line_prefix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$suffix,self__.suffix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block_DASH_callback,self__.logical_block_callback],null))], null),self__.__extmap));
});

cljs.pprint.logical_block.prototype.cljs$core$IIterable$ = true;

cljs.pprint.logical_block.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12239){
var self__ = this;
var G__12239__$1 = this;
return (new cljs.core.RecordIter((0),G__12239__$1,10,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$parent,cljs.core.cst$kw$section,cljs.core.cst$kw$start_DASH_col,cljs.core.cst$kw$indent,cljs.core.cst$kw$done_DASH_nl,cljs.core.cst$kw$intra_DASH_block_DASH_nl,cljs.core.cst$kw$prefix,cljs.core.cst$kw$per_DASH_line_DASH_prefix,cljs.core.cst$kw$suffix,cljs.core.cst$kw$logical_DASH_block_DASH_callback], null),cljs.core._iterator.call(null,self__.__extmap)));
});

cljs.pprint.logical_block.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__6830__auto__){
var self__ = this;
var this__6830__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.logical_block.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__6826__auto__){
var self__ = this;
var this__6826__auto____$1 = this;
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.logical_block.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__6836__auto__){
var self__ = this;
var this__6836__auto____$1 = this;
return (10 + cljs.core.count.call(null,self__.__extmap));
});

cljs.pprint.logical_block.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__6827__auto__){
var self__ = this;
var this__6827__auto____$1 = this;
var h__6645__auto__ = self__.__hash;
if(!((h__6645__auto__ == null))){
return h__6645__auto__;
} else {
var h__6645__auto____$1 = cljs.core.hash_imap.call(null,this__6827__auto____$1);
self__.__hash = h__6645__auto____$1;

return h__6645__auto____$1;
}
});

cljs.pprint.logical_block.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__6828__auto__,other__6829__auto__){
var self__ = this;
var this__6828__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6198__auto__ = other__6829__auto__;
if(cljs.core.truth_(and__6198__auto__)){
var and__6198__auto____$1 = (this__6828__auto____$1.constructor === other__6829__auto__.constructor);
if(and__6198__auto____$1){
return cljs.core.equiv_map.call(null,this__6828__auto____$1,other__6829__auto__);
} else {
return and__6198__auto____$1;
}
} else {
return and__6198__auto__;
}
})())){
return true;
} else {
return false;
}
});

cljs.pprint.logical_block.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__6841__auto__,k__6842__auto__){
var self__ = this;
var this__6841__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [cljs.core.cst$kw$suffix,null,cljs.core.cst$kw$indent,null,cljs.core.cst$kw$parent,null,cljs.core.cst$kw$section,null,cljs.core.cst$kw$done_DASH_nl,null,cljs.core.cst$kw$start_DASH_col,null,cljs.core.cst$kw$prefix,null,cljs.core.cst$kw$per_DASH_line_DASH_prefix,null,cljs.core.cst$kw$logical_DASH_block_DASH_callback,null,cljs.core.cst$kw$intra_DASH_block_DASH_nl,null], null), null),k__6842__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__6841__auto____$1),self__.__meta),k__6842__auto__);
} else {
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__6842__auto__)),null));
}
});

cljs.pprint.logical_block.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__6839__auto__,k__6840__auto__,G__12239){
var self__ = this;
var this__6839__auto____$1 = this;
var pred__12243 = cljs.core.keyword_identical_QMARK_;
var expr__12244 = k__6840__auto__;
if(cljs.core.truth_(pred__12243.call(null,cljs.core.cst$kw$parent,expr__12244))){
return (new cljs.pprint.logical_block(G__12239,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12243.call(null,cljs.core.cst$kw$section,expr__12244))){
return (new cljs.pprint.logical_block(self__.parent,G__12239,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12243.call(null,cljs.core.cst$kw$start_DASH_col,expr__12244))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,G__12239,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12243.call(null,cljs.core.cst$kw$indent,expr__12244))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,G__12239,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12243.call(null,cljs.core.cst$kw$done_DASH_nl,expr__12244))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,G__12239,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12243.call(null,cljs.core.cst$kw$intra_DASH_block_DASH_nl,expr__12244))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,G__12239,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12243.call(null,cljs.core.cst$kw$prefix,expr__12244))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,G__12239,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12243.call(null,cljs.core.cst$kw$per_DASH_line_DASH_prefix,expr__12244))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,G__12239,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12243.call(null,cljs.core.cst$kw$suffix,expr__12244))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,G__12239,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12243.call(null,cljs.core.cst$kw$logical_DASH_block_DASH_callback,expr__12244))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,G__12239,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__6840__auto__,G__12239),null));
}
}
}
}
}
}
}
}
}
}
});

cljs.pprint.logical_block.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__6844__auto__){
var self__ = this;
var this__6844__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$parent,self__.parent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$section,self__.section],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_col,self__.start_col],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$indent,self__.indent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$done_DASH_nl,self__.done_nl],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$intra_DASH_block_DASH_nl,self__.intra_block_nl],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$prefix,self__.prefix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$per_DASH_line_DASH_prefix,self__.per_line_prefix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$suffix,self__.suffix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block_DASH_callback,self__.logical_block_callback],null))], null),self__.__extmap));
});

cljs.pprint.logical_block.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__6831__auto__,G__12239){
var self__ = this;
var this__6831__auto____$1 = this;
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,G__12239,self__.__extmap,self__.__hash));
});

cljs.pprint.logical_block.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__6837__auto__,entry__6838__auto__){
var self__ = this;
var this__6837__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__6838__auto__)){
return cljs.core._assoc.call(null,this__6837__auto____$1,cljs.core._nth.call(null,entry__6838__auto__,(0)),cljs.core._nth.call(null,entry__6838__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__6837__auto____$1,entry__6838__auto__);
}
});

cljs.pprint.logical_block.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$parent,cljs.core.cst$sym$section,cljs.core.cst$sym$start_DASH_col,cljs.core.cst$sym$indent,cljs.core.cst$sym$done_DASH_nl,cljs.core.cst$sym$intra_DASH_block_DASH_nl,cljs.core.cst$sym$prefix,cljs.core.cst$sym$per_DASH_line_DASH_prefix,cljs.core.cst$sym$suffix,cljs.core.cst$sym$logical_DASH_block_DASH_callback], null);
});

cljs.pprint.logical_block.cljs$lang$type = true;

cljs.pprint.logical_block.cljs$lang$ctorPrSeq = (function (this__6866__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljs.pprint/logical-block");
});

cljs.pprint.logical_block.cljs$lang$ctorPrWriter = (function (this__6866__auto__,writer__6867__auto__){
return cljs.core._write.call(null,writer__6867__auto__,"cljs.pprint/logical-block");
});

cljs.pprint.__GT_logical_block = (function cljs$pprint$__GT_logical_block(parent,section,start_col,indent,done_nl,intra_block_nl,prefix,per_line_prefix,suffix,logical_block_callback){
return (new cljs.pprint.logical_block(parent,section,start_col,indent,done_nl,intra_block_nl,prefix,per_line_prefix,suffix,logical_block_callback,null,null,null));
});

cljs.pprint.map__GT_logical_block = (function cljs$pprint$map__GT_logical_block(G__12241){
return (new cljs.pprint.logical_block(cljs.core.cst$kw$parent.cljs$core$IFn$_invoke$arity$1(G__12241),cljs.core.cst$kw$section.cljs$core$IFn$_invoke$arity$1(G__12241),cljs.core.cst$kw$start_DASH_col.cljs$core$IFn$_invoke$arity$1(G__12241),cljs.core.cst$kw$indent.cljs$core$IFn$_invoke$arity$1(G__12241),cljs.core.cst$kw$done_DASH_nl.cljs$core$IFn$_invoke$arity$1(G__12241),cljs.core.cst$kw$intra_DASH_block_DASH_nl.cljs$core$IFn$_invoke$arity$1(G__12241),cljs.core.cst$kw$prefix.cljs$core$IFn$_invoke$arity$1(G__12241),cljs.core.cst$kw$per_DASH_line_DASH_prefix.cljs$core$IFn$_invoke$arity$1(G__12241),cljs.core.cst$kw$suffix.cljs$core$IFn$_invoke$arity$1(G__12241),cljs.core.cst$kw$logical_DASH_block_DASH_callback.cljs$core$IFn$_invoke$arity$1(G__12241),null,cljs.core.dissoc.call(null,G__12241,cljs.core.cst$kw$parent,cljs.core.cst$kw$section,cljs.core.cst$kw$start_DASH_col,cljs.core.cst$kw$indent,cljs.core.cst$kw$done_DASH_nl,cljs.core.cst$kw$intra_DASH_block_DASH_nl,cljs.core.cst$kw$prefix,cljs.core.cst$kw$per_DASH_line_DASH_prefix,cljs.core.cst$kw$suffix,cljs.core.cst$kw$logical_DASH_block_DASH_callback),null));
});

cljs.pprint.ancestor_QMARK_ = (function cljs$pprint$ancestor_QMARK_(parent,child){
var child__$1 = cljs.core.cst$kw$parent.cljs$core$IFn$_invoke$arity$1(child);
while(true){
if((child__$1 == null)){
return false;
} else {
if((parent === child__$1)){
return true;
} else {
var G__12247 = cljs.core.cst$kw$parent.cljs$core$IFn$_invoke$arity$1(child__$1);
child__$1 = G__12247;
continue;

}
}
break;
}
});
cljs.pprint.buffer_length = (function cljs$pprint$buffer_length(l){
var l__$1 = cljs.core.seq.call(null,l);
if(l__$1){
return (cljs.core.cst$kw$end_DASH_pos.cljs$core$IFn$_invoke$arity$1(cljs.core.last.call(null,l__$1)) - cljs.core.cst$kw$start_DASH_pos.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,l__$1)));
} else {
return (0);
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.buffer_blob = (function (type_tag,data,trailing_white_space,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.data = data;
this.trailing_white_space = trailing_white_space;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.pprint.buffer_blob.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__6832__auto__,k__6833__auto__){
var self__ = this;
var this__6832__auto____$1 = this;
return cljs.core._lookup.call(null,this__6832__auto____$1,k__6833__auto__,null);
});

cljs.pprint.buffer_blob.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__6834__auto__,k12249,else__6835__auto__){
var self__ = this;
var this__6834__auto____$1 = this;
var G__12251 = (((k12249 instanceof cljs.core.Keyword))?k12249.fqn:null);
switch (G__12251) {
case "type-tag":
return self__.type_tag;

break;
case "data":
return self__.data;

break;
case "trailing-white-space":
return self__.trailing_white_space;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k12249,else__6835__auto__);

}
});

cljs.pprint.buffer_blob.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__6846__auto__,writer__6847__auto__,opts__6848__auto__){
var self__ = this;
var this__6846__auto____$1 = this;
var pr_pair__6849__auto__ = ((function (this__6846__auto____$1){
return (function (keyval__6850__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__6847__auto__,cljs.core.pr_writer,""," ","",opts__6848__auto__,keyval__6850__auto__);
});})(this__6846__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__6847__auto__,pr_pair__6849__auto__,"#cljs.pprint.buffer-blob{",", ","}",opts__6848__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$data,self__.data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$trailing_DASH_white_DASH_space,self__.trailing_white_space],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IIterable$ = true;

cljs.pprint.buffer_blob.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12248){
var self__ = this;
var G__12248__$1 = this;
return (new cljs.core.RecordIter((0),G__12248__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$type_DASH_tag,cljs.core.cst$kw$data,cljs.core.cst$kw$trailing_DASH_white_DASH_space,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], null),cljs.core._iterator.call(null,self__.__extmap)));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__6830__auto__){
var self__ = this;
var this__6830__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.buffer_blob.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__6826__auto__){
var self__ = this;
var this__6826__auto____$1 = this;
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.buffer_blob.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__6836__auto__){
var self__ = this;
var this__6836__auto____$1 = this;
return (5 + cljs.core.count.call(null,self__.__extmap));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__6827__auto__){
var self__ = this;
var this__6827__auto____$1 = this;
var h__6645__auto__ = self__.__hash;
if(!((h__6645__auto__ == null))){
return h__6645__auto__;
} else {
var h__6645__auto____$1 = cljs.core.hash_imap.call(null,this__6827__auto____$1);
self__.__hash = h__6645__auto____$1;

return h__6645__auto____$1;
}
});

cljs.pprint.buffer_blob.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__6828__auto__,other__6829__auto__){
var self__ = this;
var this__6828__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6198__auto__ = other__6829__auto__;
if(cljs.core.truth_(and__6198__auto__)){
var and__6198__auto____$1 = (this__6828__auto____$1.constructor === other__6829__auto__.constructor);
if(and__6198__auto____$1){
return cljs.core.equiv_map.call(null,this__6828__auto____$1,other__6829__auto__);
} else {
return and__6198__auto____$1;
}
} else {
return and__6198__auto__;
}
})())){
return true;
} else {
return false;
}
});

cljs.pprint.buffer_blob.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__6841__auto__,k__6842__auto__){
var self__ = this;
var this__6841__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$end_DASH_pos,null,cljs.core.cst$kw$trailing_DASH_white_DASH_space,null,cljs.core.cst$kw$type_DASH_tag,null,cljs.core.cst$kw$start_DASH_pos,null,cljs.core.cst$kw$data,null], null), null),k__6842__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__6841__auto____$1),self__.__meta),k__6842__auto__);
} else {
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__6842__auto__)),null));
}
});

cljs.pprint.buffer_blob.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__6839__auto__,k__6840__auto__,G__12248){
var self__ = this;
var this__6839__auto____$1 = this;
var pred__12252 = cljs.core.keyword_identical_QMARK_;
var expr__12253 = k__6840__auto__;
if(cljs.core.truth_(pred__12252.call(null,cljs.core.cst$kw$type_DASH_tag,expr__12253))){
return (new cljs.pprint.buffer_blob(G__12248,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12252.call(null,cljs.core.cst$kw$data,expr__12253))){
return (new cljs.pprint.buffer_blob(self__.type_tag,G__12248,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12252.call(null,cljs.core.cst$kw$trailing_DASH_white_DASH_space,expr__12253))){
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,G__12248,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12252.call(null,cljs.core.cst$kw$start_DASH_pos,expr__12253))){
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,G__12248,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12252.call(null,cljs.core.cst$kw$end_DASH_pos,expr__12253))){
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,G__12248,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__6840__auto__,G__12248),null));
}
}
}
}
}
});

cljs.pprint.buffer_blob.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__6844__auto__){
var self__ = this;
var this__6844__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$data,self__.data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$trailing_DASH_white_DASH_space,self__.trailing_white_space],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__6831__auto__,G__12248){
var self__ = this;
var this__6831__auto____$1 = this;
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,G__12248,self__.__extmap,self__.__hash));
});

cljs.pprint.buffer_blob.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__6837__auto__,entry__6838__auto__){
var self__ = this;
var this__6837__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__6838__auto__)){
return cljs.core._assoc.call(null,this__6837__auto____$1,cljs.core._nth.call(null,entry__6838__auto__,(0)),cljs.core._nth.call(null,entry__6838__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__6837__auto____$1,entry__6838__auto__);
}
});

cljs.pprint.buffer_blob.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$type_DASH_tag,cljs.core.cst$sym$data,cljs.core.cst$sym$trailing_DASH_white_DASH_space,cljs.core.cst$sym$start_DASH_pos,cljs.core.cst$sym$end_DASH_pos], null);
});

cljs.pprint.buffer_blob.cljs$lang$type = true;

cljs.pprint.buffer_blob.cljs$lang$ctorPrSeq = (function (this__6866__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljs.pprint/buffer-blob");
});

cljs.pprint.buffer_blob.cljs$lang$ctorPrWriter = (function (this__6866__auto__,writer__6867__auto__){
return cljs.core._write.call(null,writer__6867__auto__,"cljs.pprint/buffer-blob");
});

cljs.pprint.__GT_buffer_blob = (function cljs$pprint$__GT_buffer_blob(type_tag,data,trailing_white_space,start_pos,end_pos){
return (new cljs.pprint.buffer_blob(type_tag,data,trailing_white_space,start_pos,end_pos,null,null,null));
});

cljs.pprint.map__GT_buffer_blob = (function cljs$pprint$map__GT_buffer_blob(G__12250){
return (new cljs.pprint.buffer_blob(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(G__12250),cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(G__12250),cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(G__12250),cljs.core.cst$kw$start_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__12250),cljs.core.cst$kw$end_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__12250),null,cljs.core.dissoc.call(null,G__12250,cljs.core.cst$kw$type_DASH_tag,cljs.core.cst$kw$data,cljs.core.cst$kw$trailing_DASH_white_DASH_space,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos),null));
});


cljs.pprint.make_buffer_blob = (function cljs$pprint$make_buffer_blob(data,trailing_white_space,start_pos,end_pos){
return (new cljs.pprint.buffer_blob(cljs.core.cst$kw$buffer_DASH_blob,data,trailing_white_space,start_pos,end_pos,null,null,null));
});

cljs.pprint.buffer_blob_QMARK_ = (function cljs$pprint$buffer_blob_QMARK_(x__12055__auto__){
return cljs.core._EQ_.call(null,cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(x__12055__auto__),cljs.core.cst$kw$buffer_DASH_blob);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.nl_t = (function (type_tag,type,logical_block,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.type = type;
this.logical_block = logical_block;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.pprint.nl_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__6832__auto__,k__6833__auto__){
var self__ = this;
var this__6832__auto____$1 = this;
return cljs.core._lookup.call(null,this__6832__auto____$1,k__6833__auto__,null);
});

cljs.pprint.nl_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__6834__auto__,k12257,else__6835__auto__){
var self__ = this;
var this__6834__auto____$1 = this;
var G__12259 = (((k12257 instanceof cljs.core.Keyword))?k12257.fqn:null);
switch (G__12259) {
case "type-tag":
return self__.type_tag;

break;
case "type":
return self__.type;

break;
case "logical-block":
return self__.logical_block;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k12257,else__6835__auto__);

}
});

cljs.pprint.nl_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__6846__auto__,writer__6847__auto__,opts__6848__auto__){
var self__ = this;
var this__6846__auto____$1 = this;
var pr_pair__6849__auto__ = ((function (this__6846__auto____$1){
return (function (keyval__6850__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__6847__auto__,cljs.core.pr_writer,""," ","",opts__6848__auto__,keyval__6850__auto__);
});})(this__6846__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__6847__auto__,pr_pair__6849__auto__,"#cljs.pprint.nl-t{",", ","}",opts__6848__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type,self__.type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block,self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.nl_t.prototype.cljs$core$IIterable$ = true;

cljs.pprint.nl_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12256){
var self__ = this;
var G__12256__$1 = this;
return (new cljs.core.RecordIter((0),G__12256__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$type_DASH_tag,cljs.core.cst$kw$type,cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], null),cljs.core._iterator.call(null,self__.__extmap)));
});

cljs.pprint.nl_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__6830__auto__){
var self__ = this;
var this__6830__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.nl_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__6826__auto__){
var self__ = this;
var this__6826__auto____$1 = this;
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.nl_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__6836__auto__){
var self__ = this;
var this__6836__auto____$1 = this;
return (5 + cljs.core.count.call(null,self__.__extmap));
});

cljs.pprint.nl_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__6827__auto__){
var self__ = this;
var this__6827__auto____$1 = this;
var h__6645__auto__ = self__.__hash;
if(!((h__6645__auto__ == null))){
return h__6645__auto__;
} else {
var h__6645__auto____$1 = cljs.core.hash_imap.call(null,this__6827__auto____$1);
self__.__hash = h__6645__auto____$1;

return h__6645__auto____$1;
}
});

cljs.pprint.nl_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__6828__auto__,other__6829__auto__){
var self__ = this;
var this__6828__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6198__auto__ = other__6829__auto__;
if(cljs.core.truth_(and__6198__auto__)){
var and__6198__auto____$1 = (this__6828__auto____$1.constructor === other__6829__auto__.constructor);
if(and__6198__auto____$1){
return cljs.core.equiv_map.call(null,this__6828__auto____$1,other__6829__auto__);
} else {
return and__6198__auto____$1;
}
} else {
return and__6198__auto__;
}
})())){
return true;
} else {
return false;
}
});

cljs.pprint.nl_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__6841__auto__,k__6842__auto__){
var self__ = this;
var this__6841__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$end_DASH_pos,null,cljs.core.cst$kw$type,null,cljs.core.cst$kw$logical_DASH_block,null,cljs.core.cst$kw$type_DASH_tag,null,cljs.core.cst$kw$start_DASH_pos,null], null), null),k__6842__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__6841__auto____$1),self__.__meta),k__6842__auto__);
} else {
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__6842__auto__)),null));
}
});

cljs.pprint.nl_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__6839__auto__,k__6840__auto__,G__12256){
var self__ = this;
var this__6839__auto____$1 = this;
var pred__12260 = cljs.core.keyword_identical_QMARK_;
var expr__12261 = k__6840__auto__;
if(cljs.core.truth_(pred__12260.call(null,cljs.core.cst$kw$type_DASH_tag,expr__12261))){
return (new cljs.pprint.nl_t(G__12256,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12260.call(null,cljs.core.cst$kw$type,expr__12261))){
return (new cljs.pprint.nl_t(self__.type_tag,G__12256,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12260.call(null,cljs.core.cst$kw$logical_DASH_block,expr__12261))){
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,G__12256,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12260.call(null,cljs.core.cst$kw$start_DASH_pos,expr__12261))){
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,G__12256,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12260.call(null,cljs.core.cst$kw$end_DASH_pos,expr__12261))){
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,G__12256,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__6840__auto__,G__12256),null));
}
}
}
}
}
});

cljs.pprint.nl_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__6844__auto__){
var self__ = this;
var this__6844__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type,self__.type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block,self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.nl_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__6831__auto__,G__12256){
var self__ = this;
var this__6831__auto____$1 = this;
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,G__12256,self__.__extmap,self__.__hash));
});

cljs.pprint.nl_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__6837__auto__,entry__6838__auto__){
var self__ = this;
var this__6837__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__6838__auto__)){
return cljs.core._assoc.call(null,this__6837__auto____$1,cljs.core._nth.call(null,entry__6838__auto__,(0)),cljs.core._nth.call(null,entry__6838__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__6837__auto____$1,entry__6838__auto__);
}
});

cljs.pprint.nl_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$type_DASH_tag,cljs.core.cst$sym$type,cljs.core.cst$sym$logical_DASH_block,cljs.core.cst$sym$start_DASH_pos,cljs.core.cst$sym$end_DASH_pos], null);
});

cljs.pprint.nl_t.cljs$lang$type = true;

cljs.pprint.nl_t.cljs$lang$ctorPrSeq = (function (this__6866__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljs.pprint/nl-t");
});

cljs.pprint.nl_t.cljs$lang$ctorPrWriter = (function (this__6866__auto__,writer__6867__auto__){
return cljs.core._write.call(null,writer__6867__auto__,"cljs.pprint/nl-t");
});

cljs.pprint.__GT_nl_t = (function cljs$pprint$__GT_nl_t(type_tag,type,logical_block,start_pos,end_pos){
return (new cljs.pprint.nl_t(type_tag,type,logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.map__GT_nl_t = (function cljs$pprint$map__GT_nl_t(G__12258){
return (new cljs.pprint.nl_t(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(G__12258),cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(G__12258),cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(G__12258),cljs.core.cst$kw$start_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__12258),cljs.core.cst$kw$end_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__12258),null,cljs.core.dissoc.call(null,G__12258,cljs.core.cst$kw$type_DASH_tag,cljs.core.cst$kw$type,cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos),null));
});


cljs.pprint.make_nl_t = (function cljs$pprint$make_nl_t(type,logical_block,start_pos,end_pos){
return (new cljs.pprint.nl_t(cljs.core.cst$kw$nl_DASH_t,type,logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.nl_t_QMARK_ = (function cljs$pprint$nl_t_QMARK_(x__12055__auto__){
return cljs.core._EQ_.call(null,cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(x__12055__auto__),cljs.core.cst$kw$nl_DASH_t);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.start_block_t = (function (type_tag,logical_block,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.logical_block = logical_block;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.pprint.start_block_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__6832__auto__,k__6833__auto__){
var self__ = this;
var this__6832__auto____$1 = this;
return cljs.core._lookup.call(null,this__6832__auto____$1,k__6833__auto__,null);
});

cljs.pprint.start_block_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__6834__auto__,k12265,else__6835__auto__){
var self__ = this;
var this__6834__auto____$1 = this;
var G__12267 = (((k12265 instanceof cljs.core.Keyword))?k12265.fqn:null);
switch (G__12267) {
case "type-tag":
return self__.type_tag;

break;
case "logical-block":
return self__.logical_block;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k12265,else__6835__auto__);

}
});

cljs.pprint.start_block_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__6846__auto__,writer__6847__auto__,opts__6848__auto__){
var self__ = this;
var this__6846__auto____$1 = this;
var pr_pair__6849__auto__ = ((function (this__6846__auto____$1){
return (function (keyval__6850__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__6847__auto__,cljs.core.pr_writer,""," ","",opts__6848__auto__,keyval__6850__auto__);
});})(this__6846__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__6847__auto__,pr_pair__6849__auto__,"#cljs.pprint.start-block-t{",", ","}",opts__6848__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block,self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.start_block_t.prototype.cljs$core$IIterable$ = true;

cljs.pprint.start_block_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12264){
var self__ = this;
var G__12264__$1 = this;
return (new cljs.core.RecordIter((0),G__12264__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$type_DASH_tag,cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], null),cljs.core._iterator.call(null,self__.__extmap)));
});

cljs.pprint.start_block_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__6830__auto__){
var self__ = this;
var this__6830__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.start_block_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__6826__auto__){
var self__ = this;
var this__6826__auto____$1 = this;
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.start_block_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__6836__auto__){
var self__ = this;
var this__6836__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

cljs.pprint.start_block_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__6827__auto__){
var self__ = this;
var this__6827__auto____$1 = this;
var h__6645__auto__ = self__.__hash;
if(!((h__6645__auto__ == null))){
return h__6645__auto__;
} else {
var h__6645__auto____$1 = cljs.core.hash_imap.call(null,this__6827__auto____$1);
self__.__hash = h__6645__auto____$1;

return h__6645__auto____$1;
}
});

cljs.pprint.start_block_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__6828__auto__,other__6829__auto__){
var self__ = this;
var this__6828__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6198__auto__ = other__6829__auto__;
if(cljs.core.truth_(and__6198__auto__)){
var and__6198__auto____$1 = (this__6828__auto____$1.constructor === other__6829__auto__.constructor);
if(and__6198__auto____$1){
return cljs.core.equiv_map.call(null,this__6828__auto____$1,other__6829__auto__);
} else {
return and__6198__auto____$1;
}
} else {
return and__6198__auto__;
}
})())){
return true;
} else {
return false;
}
});

cljs.pprint.start_block_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__6841__auto__,k__6842__auto__){
var self__ = this;
var this__6841__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$end_DASH_pos,null,cljs.core.cst$kw$logical_DASH_block,null,cljs.core.cst$kw$type_DASH_tag,null,cljs.core.cst$kw$start_DASH_pos,null], null), null),k__6842__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__6841__auto____$1),self__.__meta),k__6842__auto__);
} else {
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__6842__auto__)),null));
}
});

cljs.pprint.start_block_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__6839__auto__,k__6840__auto__,G__12264){
var self__ = this;
var this__6839__auto____$1 = this;
var pred__12268 = cljs.core.keyword_identical_QMARK_;
var expr__12269 = k__6840__auto__;
if(cljs.core.truth_(pred__12268.call(null,cljs.core.cst$kw$type_DASH_tag,expr__12269))){
return (new cljs.pprint.start_block_t(G__12264,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12268.call(null,cljs.core.cst$kw$logical_DASH_block,expr__12269))){
return (new cljs.pprint.start_block_t(self__.type_tag,G__12264,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12268.call(null,cljs.core.cst$kw$start_DASH_pos,expr__12269))){
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,G__12264,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12268.call(null,cljs.core.cst$kw$end_DASH_pos,expr__12269))){
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,G__12264,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__6840__auto__,G__12264),null));
}
}
}
}
});

cljs.pprint.start_block_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__6844__auto__){
var self__ = this;
var this__6844__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block,self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.start_block_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__6831__auto__,G__12264){
var self__ = this;
var this__6831__auto____$1 = this;
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,G__12264,self__.__extmap,self__.__hash));
});

cljs.pprint.start_block_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__6837__auto__,entry__6838__auto__){
var self__ = this;
var this__6837__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__6838__auto__)){
return cljs.core._assoc.call(null,this__6837__auto____$1,cljs.core._nth.call(null,entry__6838__auto__,(0)),cljs.core._nth.call(null,entry__6838__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__6837__auto____$1,entry__6838__auto__);
}
});

cljs.pprint.start_block_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$type_DASH_tag,cljs.core.cst$sym$logical_DASH_block,cljs.core.cst$sym$start_DASH_pos,cljs.core.cst$sym$end_DASH_pos], null);
});

cljs.pprint.start_block_t.cljs$lang$type = true;

cljs.pprint.start_block_t.cljs$lang$ctorPrSeq = (function (this__6866__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljs.pprint/start-block-t");
});

cljs.pprint.start_block_t.cljs$lang$ctorPrWriter = (function (this__6866__auto__,writer__6867__auto__){
return cljs.core._write.call(null,writer__6867__auto__,"cljs.pprint/start-block-t");
});

cljs.pprint.__GT_start_block_t = (function cljs$pprint$__GT_start_block_t(type_tag,logical_block,start_pos,end_pos){
return (new cljs.pprint.start_block_t(type_tag,logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.map__GT_start_block_t = (function cljs$pprint$map__GT_start_block_t(G__12266){
return (new cljs.pprint.start_block_t(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(G__12266),cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(G__12266),cljs.core.cst$kw$start_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__12266),cljs.core.cst$kw$end_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__12266),null,cljs.core.dissoc.call(null,G__12266,cljs.core.cst$kw$type_DASH_tag,cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos),null));
});


cljs.pprint.make_start_block_t = (function cljs$pprint$make_start_block_t(logical_block,start_pos,end_pos){
return (new cljs.pprint.start_block_t(cljs.core.cst$kw$start_DASH_block_DASH_t,logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.start_block_t_QMARK_ = (function cljs$pprint$start_block_t_QMARK_(x__12055__auto__){
return cljs.core._EQ_.call(null,cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(x__12055__auto__),cljs.core.cst$kw$start_DASH_block_DASH_t);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.end_block_t = (function (type_tag,logical_block,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.logical_block = logical_block;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.pprint.end_block_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__6832__auto__,k__6833__auto__){
var self__ = this;
var this__6832__auto____$1 = this;
return cljs.core._lookup.call(null,this__6832__auto____$1,k__6833__auto__,null);
});

cljs.pprint.end_block_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__6834__auto__,k12273,else__6835__auto__){
var self__ = this;
var this__6834__auto____$1 = this;
var G__12275 = (((k12273 instanceof cljs.core.Keyword))?k12273.fqn:null);
switch (G__12275) {
case "type-tag":
return self__.type_tag;

break;
case "logical-block":
return self__.logical_block;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k12273,else__6835__auto__);

}
});

cljs.pprint.end_block_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__6846__auto__,writer__6847__auto__,opts__6848__auto__){
var self__ = this;
var this__6846__auto____$1 = this;
var pr_pair__6849__auto__ = ((function (this__6846__auto____$1){
return (function (keyval__6850__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__6847__auto__,cljs.core.pr_writer,""," ","",opts__6848__auto__,keyval__6850__auto__);
});})(this__6846__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__6847__auto__,pr_pair__6849__auto__,"#cljs.pprint.end-block-t{",", ","}",opts__6848__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block,self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.end_block_t.prototype.cljs$core$IIterable$ = true;

cljs.pprint.end_block_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12272){
var self__ = this;
var G__12272__$1 = this;
return (new cljs.core.RecordIter((0),G__12272__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$type_DASH_tag,cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], null),cljs.core._iterator.call(null,self__.__extmap)));
});

cljs.pprint.end_block_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__6830__auto__){
var self__ = this;
var this__6830__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.end_block_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__6826__auto__){
var self__ = this;
var this__6826__auto____$1 = this;
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.end_block_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__6836__auto__){
var self__ = this;
var this__6836__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

cljs.pprint.end_block_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__6827__auto__){
var self__ = this;
var this__6827__auto____$1 = this;
var h__6645__auto__ = self__.__hash;
if(!((h__6645__auto__ == null))){
return h__6645__auto__;
} else {
var h__6645__auto____$1 = cljs.core.hash_imap.call(null,this__6827__auto____$1);
self__.__hash = h__6645__auto____$1;

return h__6645__auto____$1;
}
});

cljs.pprint.end_block_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__6828__auto__,other__6829__auto__){
var self__ = this;
var this__6828__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6198__auto__ = other__6829__auto__;
if(cljs.core.truth_(and__6198__auto__)){
var and__6198__auto____$1 = (this__6828__auto____$1.constructor === other__6829__auto__.constructor);
if(and__6198__auto____$1){
return cljs.core.equiv_map.call(null,this__6828__auto____$1,other__6829__auto__);
} else {
return and__6198__auto____$1;
}
} else {
return and__6198__auto__;
}
})())){
return true;
} else {
return false;
}
});

cljs.pprint.end_block_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__6841__auto__,k__6842__auto__){
var self__ = this;
var this__6841__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$end_DASH_pos,null,cljs.core.cst$kw$logical_DASH_block,null,cljs.core.cst$kw$type_DASH_tag,null,cljs.core.cst$kw$start_DASH_pos,null], null), null),k__6842__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__6841__auto____$1),self__.__meta),k__6842__auto__);
} else {
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__6842__auto__)),null));
}
});

cljs.pprint.end_block_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__6839__auto__,k__6840__auto__,G__12272){
var self__ = this;
var this__6839__auto____$1 = this;
var pred__12276 = cljs.core.keyword_identical_QMARK_;
var expr__12277 = k__6840__auto__;
if(cljs.core.truth_(pred__12276.call(null,cljs.core.cst$kw$type_DASH_tag,expr__12277))){
return (new cljs.pprint.end_block_t(G__12272,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12276.call(null,cljs.core.cst$kw$logical_DASH_block,expr__12277))){
return (new cljs.pprint.end_block_t(self__.type_tag,G__12272,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12276.call(null,cljs.core.cst$kw$start_DASH_pos,expr__12277))){
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,G__12272,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12276.call(null,cljs.core.cst$kw$end_DASH_pos,expr__12277))){
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,G__12272,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__6840__auto__,G__12272),null));
}
}
}
}
});

cljs.pprint.end_block_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__6844__auto__){
var self__ = this;
var this__6844__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block,self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.end_block_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__6831__auto__,G__12272){
var self__ = this;
var this__6831__auto____$1 = this;
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,G__12272,self__.__extmap,self__.__hash));
});

cljs.pprint.end_block_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__6837__auto__,entry__6838__auto__){
var self__ = this;
var this__6837__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__6838__auto__)){
return cljs.core._assoc.call(null,this__6837__auto____$1,cljs.core._nth.call(null,entry__6838__auto__,(0)),cljs.core._nth.call(null,entry__6838__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__6837__auto____$1,entry__6838__auto__);
}
});

cljs.pprint.end_block_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$type_DASH_tag,cljs.core.cst$sym$logical_DASH_block,cljs.core.cst$sym$start_DASH_pos,cljs.core.cst$sym$end_DASH_pos], null);
});

cljs.pprint.end_block_t.cljs$lang$type = true;

cljs.pprint.end_block_t.cljs$lang$ctorPrSeq = (function (this__6866__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljs.pprint/end-block-t");
});

cljs.pprint.end_block_t.cljs$lang$ctorPrWriter = (function (this__6866__auto__,writer__6867__auto__){
return cljs.core._write.call(null,writer__6867__auto__,"cljs.pprint/end-block-t");
});

cljs.pprint.__GT_end_block_t = (function cljs$pprint$__GT_end_block_t(type_tag,logical_block,start_pos,end_pos){
return (new cljs.pprint.end_block_t(type_tag,logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.map__GT_end_block_t = (function cljs$pprint$map__GT_end_block_t(G__12274){
return (new cljs.pprint.end_block_t(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(G__12274),cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(G__12274),cljs.core.cst$kw$start_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__12274),cljs.core.cst$kw$end_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__12274),null,cljs.core.dissoc.call(null,G__12274,cljs.core.cst$kw$type_DASH_tag,cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos),null));
});


cljs.pprint.make_end_block_t = (function cljs$pprint$make_end_block_t(logical_block,start_pos,end_pos){
return (new cljs.pprint.end_block_t(cljs.core.cst$kw$end_DASH_block_DASH_t,logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.end_block_t_QMARK_ = (function cljs$pprint$end_block_t_QMARK_(x__12055__auto__){
return cljs.core._EQ_.call(null,cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(x__12055__auto__),cljs.core.cst$kw$end_DASH_block_DASH_t);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.indent_t = (function (type_tag,logical_block,relative_to,offset,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.logical_block = logical_block;
this.relative_to = relative_to;
this.offset = offset;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.pprint.indent_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__6832__auto__,k__6833__auto__){
var self__ = this;
var this__6832__auto____$1 = this;
return cljs.core._lookup.call(null,this__6832__auto____$1,k__6833__auto__,null);
});

cljs.pprint.indent_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__6834__auto__,k12281,else__6835__auto__){
var self__ = this;
var this__6834__auto____$1 = this;
var G__12283 = (((k12281 instanceof cljs.core.Keyword))?k12281.fqn:null);
switch (G__12283) {
case "type-tag":
return self__.type_tag;

break;
case "logical-block":
return self__.logical_block;

break;
case "relative-to":
return self__.relative_to;

break;
case "offset":
return self__.offset;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k12281,else__6835__auto__);

}
});

cljs.pprint.indent_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__6846__auto__,writer__6847__auto__,opts__6848__auto__){
var self__ = this;
var this__6846__auto____$1 = this;
var pr_pair__6849__auto__ = ((function (this__6846__auto____$1){
return (function (keyval__6850__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__6847__auto__,cljs.core.pr_writer,""," ","",opts__6848__auto__,keyval__6850__auto__);
});})(this__6846__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__6847__auto__,pr_pair__6849__auto__,"#cljs.pprint.indent-t{",", ","}",opts__6848__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block,self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$relative_DASH_to,self__.relative_to],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$offset,self__.offset],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.indent_t.prototype.cljs$core$IIterable$ = true;

cljs.pprint.indent_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12280){
var self__ = this;
var G__12280__$1 = this;
return (new cljs.core.RecordIter((0),G__12280__$1,6,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$type_DASH_tag,cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$relative_DASH_to,cljs.core.cst$kw$offset,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], null),cljs.core._iterator.call(null,self__.__extmap)));
});

cljs.pprint.indent_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__6830__auto__){
var self__ = this;
var this__6830__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.indent_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__6826__auto__){
var self__ = this;
var this__6826__auto____$1 = this;
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.indent_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__6836__auto__){
var self__ = this;
var this__6836__auto____$1 = this;
return (6 + cljs.core.count.call(null,self__.__extmap));
});

cljs.pprint.indent_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__6827__auto__){
var self__ = this;
var this__6827__auto____$1 = this;
var h__6645__auto__ = self__.__hash;
if(!((h__6645__auto__ == null))){
return h__6645__auto__;
} else {
var h__6645__auto____$1 = cljs.core.hash_imap.call(null,this__6827__auto____$1);
self__.__hash = h__6645__auto____$1;

return h__6645__auto____$1;
}
});

cljs.pprint.indent_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__6828__auto__,other__6829__auto__){
var self__ = this;
var this__6828__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6198__auto__ = other__6829__auto__;
if(cljs.core.truth_(and__6198__auto__)){
var and__6198__auto____$1 = (this__6828__auto____$1.constructor === other__6829__auto__.constructor);
if(and__6198__auto____$1){
return cljs.core.equiv_map.call(null,this__6828__auto____$1,other__6829__auto__);
} else {
return and__6198__auto____$1;
}
} else {
return and__6198__auto__;
}
})())){
return true;
} else {
return false;
}
});

cljs.pprint.indent_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__6841__auto__,k__6842__auto__){
var self__ = this;
var this__6841__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$offset,null,cljs.core.cst$kw$end_DASH_pos,null,cljs.core.cst$kw$relative_DASH_to,null,cljs.core.cst$kw$logical_DASH_block,null,cljs.core.cst$kw$type_DASH_tag,null,cljs.core.cst$kw$start_DASH_pos,null], null), null),k__6842__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__6841__auto____$1),self__.__meta),k__6842__auto__);
} else {
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__6842__auto__)),null));
}
});

cljs.pprint.indent_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__6839__auto__,k__6840__auto__,G__12280){
var self__ = this;
var this__6839__auto____$1 = this;
var pred__12284 = cljs.core.keyword_identical_QMARK_;
var expr__12285 = k__6840__auto__;
if(cljs.core.truth_(pred__12284.call(null,cljs.core.cst$kw$type_DASH_tag,expr__12285))){
return (new cljs.pprint.indent_t(G__12280,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12284.call(null,cljs.core.cst$kw$logical_DASH_block,expr__12285))){
return (new cljs.pprint.indent_t(self__.type_tag,G__12280,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12284.call(null,cljs.core.cst$kw$relative_DASH_to,expr__12285))){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,G__12280,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12284.call(null,cljs.core.cst$kw$offset,expr__12285))){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,G__12280,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12284.call(null,cljs.core.cst$kw$start_DASH_pos,expr__12285))){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,G__12280,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12284.call(null,cljs.core.cst$kw$end_DASH_pos,expr__12285))){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,G__12280,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__6840__auto__,G__12280),null));
}
}
}
}
}
}
});

cljs.pprint.indent_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__6844__auto__){
var self__ = this;
var this__6844__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block,self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$relative_DASH_to,self__.relative_to],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$offset,self__.offset],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.indent_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__6831__auto__,G__12280){
var self__ = this;
var this__6831__auto____$1 = this;
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,G__12280,self__.__extmap,self__.__hash));
});

cljs.pprint.indent_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__6837__auto__,entry__6838__auto__){
var self__ = this;
var this__6837__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__6838__auto__)){
return cljs.core._assoc.call(null,this__6837__auto____$1,cljs.core._nth.call(null,entry__6838__auto__,(0)),cljs.core._nth.call(null,entry__6838__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__6837__auto____$1,entry__6838__auto__);
}
});

cljs.pprint.indent_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$type_DASH_tag,cljs.core.cst$sym$logical_DASH_block,cljs.core.cst$sym$relative_DASH_to,cljs.core.cst$sym$offset,cljs.core.cst$sym$start_DASH_pos,cljs.core.cst$sym$end_DASH_pos], null);
});

cljs.pprint.indent_t.cljs$lang$type = true;

cljs.pprint.indent_t.cljs$lang$ctorPrSeq = (function (this__6866__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljs.pprint/indent-t");
});

cljs.pprint.indent_t.cljs$lang$ctorPrWriter = (function (this__6866__auto__,writer__6867__auto__){
return cljs.core._write.call(null,writer__6867__auto__,"cljs.pprint/indent-t");
});

cljs.pprint.__GT_indent_t = (function cljs$pprint$__GT_indent_t(type_tag,logical_block,relative_to,offset,start_pos,end_pos){
return (new cljs.pprint.indent_t(type_tag,logical_block,relative_to,offset,start_pos,end_pos,null,null,null));
});

cljs.pprint.map__GT_indent_t = (function cljs$pprint$map__GT_indent_t(G__12282){
return (new cljs.pprint.indent_t(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(G__12282),cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(G__12282),cljs.core.cst$kw$relative_DASH_to.cljs$core$IFn$_invoke$arity$1(G__12282),cljs.core.cst$kw$offset.cljs$core$IFn$_invoke$arity$1(G__12282),cljs.core.cst$kw$start_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__12282),cljs.core.cst$kw$end_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__12282),null,cljs.core.dissoc.call(null,G__12282,cljs.core.cst$kw$type_DASH_tag,cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$relative_DASH_to,cljs.core.cst$kw$offset,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos),null));
});


cljs.pprint.make_indent_t = (function cljs$pprint$make_indent_t(logical_block,relative_to,offset,start_pos,end_pos){
return (new cljs.pprint.indent_t(cljs.core.cst$kw$indent_DASH_t,logical_block,relative_to,offset,start_pos,end_pos,null,null,null));
});

cljs.pprint.indent_t_QMARK_ = (function cljs$pprint$indent_t_QMARK_(x__12055__auto__){
return cljs.core._EQ_.call(null,cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(x__12055__auto__),cljs.core.cst$kw$indent_DASH_t);
});
cljs.pprint.pp_newline = (function cljs$pprint$pp_newline(){
return "\n";
});
if(typeof cljs.pprint.write_token !== 'undefined'){
} else {
cljs.pprint.write_token = (function (){var method_table__7135__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__7136__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__7137__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__7138__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__7139__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.pprint","write-token"),((function (method_table__7135__auto__,prefer_table__7136__auto__,method_cache__7137__auto__,cached_hierarchy__7138__auto__,hierarchy__7139__auto__){
return (function (p1__12289_SHARP_,p2__12288_SHARP_){
return cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(p2__12288_SHARP_);
});})(method_table__7135__auto__,prefer_table__7136__auto__,method_cache__7137__auto__,cached_hierarchy__7138__auto__,hierarchy__7139__auto__))
,cljs.core.cst$kw$default,hierarchy__7139__auto__,method_table__7135__auto__,prefer_table__7136__auto__,method_cache__7137__auto__,cached_hierarchy__7138__auto__));
})();
}
cljs.core._add_method.call(null,cljs.pprint.write_token,cljs.core.cst$kw$start_DASH_block_DASH_t,(function (this$,token){
var temp__4657__auto___12290 = cljs.core.cst$kw$logical_DASH_block_DASH_callback.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__4657__auto___12290)){
var cb_12291 = temp__4657__auto___12290;
cb_12291.call(null,cljs.core.cst$kw$start);
} else {
}

var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(token);
var temp__4657__auto___12292 = cljs.core.cst$kw$prefix.cljs$core$IFn$_invoke$arity$1(lb);
if(cljs.core.truth_(temp__4657__auto___12292)){
var prefix_12293 = temp__4657__auto___12292;
cljs.core._write.call(null,cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),prefix_12293);
} else {
}

var col = cljs.pprint.get_column.call(null,cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))));
cljs.core.reset_BANG_.call(null,cljs.core.cst$kw$start_DASH_col.cljs$core$IFn$_invoke$arity$1(lb),col);

return cljs.core.reset_BANG_.call(null,cljs.core.cst$kw$indent.cljs$core$IFn$_invoke$arity$1(lb),col);
}));
cljs.core._add_method.call(null,cljs.pprint.write_token,cljs.core.cst$kw$end_DASH_block_DASH_t,(function (this$,token){
var temp__4657__auto___12294 = cljs.core.cst$kw$logical_DASH_block_DASH_callback.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__4657__auto___12294)){
var cb_12295 = temp__4657__auto___12294;
cb_12295.call(null,cljs.core.cst$kw$end);
} else {
}

var temp__4657__auto__ = cljs.core.cst$kw$suffix.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(token));
if(cljs.core.truth_(temp__4657__auto__)){
var suffix = temp__4657__auto__;
return cljs.core._write.call(null,cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),suffix);
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.pprint.write_token,cljs.core.cst$kw$indent_DASH_t,(function (this$,token){
var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(token);
return cljs.core.reset_BANG_.call(null,cljs.core.cst$kw$indent.cljs$core$IFn$_invoke$arity$1(lb),(cljs.core.cst$kw$offset.cljs$core$IFn$_invoke$arity$1(token) + (function (){var pred__12296 = cljs.core._EQ_;
var expr__12297 = cljs.core.cst$kw$relative_DASH_to.cljs$core$IFn$_invoke$arity$1(token);
if(cljs.core.truth_(pred__12296.call(null,cljs.core.cst$kw$block,expr__12297))){
return cljs.core.deref.call(null,cljs.core.cst$kw$start_DASH_col.cljs$core$IFn$_invoke$arity$1(lb));
} else {
if(cljs.core.truth_(pred__12296.call(null,cljs.core.cst$kw$current,expr__12297))){
return cljs.pprint.get_column.call(null,cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))));
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__12297)].join('')));
}
}
})()));
}));
cljs.core._add_method.call(null,cljs.pprint.write_token,cljs.core.cst$kw$buffer_DASH_blob,(function (this$,token){
return cljs.core._write.call(null,cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(token));
}));
cljs.core._add_method.call(null,cljs.pprint.write_token,cljs.core.cst$kw$nl_DASH_t,(function (this$,token){
if(cljs.core.truth_((function (){var or__6210__auto__ = cljs.core._EQ_.call(null,cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(token),cljs.core.cst$kw$mandatory);
if(or__6210__auto__){
return or__6210__auto__;
} else {
var and__6198__auto__ = !(cljs.core._EQ_.call(null,cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(token),cljs.core.cst$kw$fill));
if(and__6198__auto__){
return cljs.core.deref.call(null,cljs.core.cst$kw$done_DASH_nl.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(token)));
} else {
return and__6198__auto__;
}
}
})())){
cljs.pprint.emit_nl.call(null,this$,token);
} else {
var temp__4655__auto___12299 = cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__4655__auto___12299)){
var tws_12300 = temp__4655__auto___12299;
cljs.core._write.call(null,cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),tws_12300);
} else {
}
}

return cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,null);
}));
cljs.pprint.write_tokens = (function cljs$pprint$write_tokens(this$,tokens,force_trailing_whitespace){
var seq__12305 = cljs.core.seq.call(null,tokens);
var chunk__12306 = null;
var count__12307 = (0);
var i__12308 = (0);
while(true){
if((i__12308 < count__12307)){
var token = cljs.core._nth.call(null,chunk__12306,i__12308);
if(!(cljs.core._EQ_.call(null,cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(token),cljs.core.cst$kw$nl_DASH_t))){
var temp__4655__auto___12309 = cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__4655__auto___12309)){
var tws_12310 = temp__4655__auto___12309;
cljs.core._write.call(null,cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),tws_12310);
} else {
}
} else {
}

cljs.pprint.write_token.call(null,this$,token);

cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(token));

var tws_12311 = cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_((function (){var and__6198__auto__ = force_trailing_whitespace;
if(cljs.core.truth_(and__6198__auto__)){
return tws_12311;
} else {
return and__6198__auto__;
}
})())){
cljs.core._write.call(null,cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),tws_12311);

cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,null);
} else {
}

var G__12312 = seq__12305;
var G__12313 = chunk__12306;
var G__12314 = count__12307;
var G__12315 = (i__12308 + (1));
seq__12305 = G__12312;
chunk__12306 = G__12313;
count__12307 = G__12314;
i__12308 = G__12315;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__12305);
if(temp__4657__auto__){
var seq__12305__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12305__$1)){
var c__7021__auto__ = cljs.core.chunk_first.call(null,seq__12305__$1);
var G__12316 = cljs.core.chunk_rest.call(null,seq__12305__$1);
var G__12317 = c__7021__auto__;
var G__12318 = cljs.core.count.call(null,c__7021__auto__);
var G__12319 = (0);
seq__12305 = G__12316;
chunk__12306 = G__12317;
count__12307 = G__12318;
i__12308 = G__12319;
continue;
} else {
var token = cljs.core.first.call(null,seq__12305__$1);
if(!(cljs.core._EQ_.call(null,cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(token),cljs.core.cst$kw$nl_DASH_t))){
var temp__4655__auto___12320 = cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__4655__auto___12320)){
var tws_12321 = temp__4655__auto___12320;
cljs.core._write.call(null,cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),tws_12321);
} else {
}
} else {
}

cljs.pprint.write_token.call(null,this$,token);

cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(token));

var tws_12322 = cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_((function (){var and__6198__auto__ = force_trailing_whitespace;
if(cljs.core.truth_(and__6198__auto__)){
return tws_12322;
} else {
return and__6198__auto__;
}
})())){
cljs.core._write.call(null,cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),tws_12322);

cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,null);
} else {
}

var G__12323 = cljs.core.next.call(null,seq__12305__$1);
var G__12324 = null;
var G__12325 = (0);
var G__12326 = (0);
seq__12305 = G__12323;
chunk__12306 = G__12324;
count__12307 = G__12325;
i__12308 = G__12326;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.pprint.tokens_fit_QMARK_ = (function cljs$pprint$tokens_fit_QMARK_(this$,tokens){
var maxcol = cljs.pprint.get_max_column.call(null,cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))));
return ((maxcol == null)) || (((cljs.pprint.get_column.call(null,cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)))) + cljs.pprint.buffer_length.call(null,tokens)) < maxcol));
});
cljs.pprint.linear_nl_QMARK_ = (function cljs$pprint$linear_nl_QMARK_(this$,lb,section){
var or__6210__auto__ = cljs.core.deref.call(null,cljs.core.cst$kw$done_DASH_nl.cljs$core$IFn$_invoke$arity$1(lb));
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return cljs.core.not.call(null,cljs.pprint.tokens_fit_QMARK_.call(null,this$,section));
}
});
cljs.pprint.miser_nl_QMARK_ = (function cljs$pprint$miser_nl_QMARK_(this$,lb,section){
var miser_width = cljs.pprint.get_miser_width.call(null,this$);
var maxcol = cljs.pprint.get_max_column.call(null,cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))));
var and__6198__auto__ = miser_width;
if(cljs.core.truth_(and__6198__auto__)){
var and__6198__auto____$1 = maxcol;
if(cljs.core.truth_(and__6198__auto____$1)){
var and__6198__auto____$2 = (cljs.core.deref.call(null,cljs.core.cst$kw$start_DASH_col.cljs$core$IFn$_invoke$arity$1(lb)) >= (maxcol - miser_width));
if(and__6198__auto____$2){
return cljs.pprint.linear_nl_QMARK_.call(null,this$,lb,section);
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
if(typeof cljs.pprint.emit_nl_QMARK_ !== 'undefined'){
} else {
cljs.pprint.emit_nl_QMARK_ = (function (){var method_table__7135__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__7136__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__7137__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__7138__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__7139__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.pprint","emit-nl?"),((function (method_table__7135__auto__,prefer_table__7136__auto__,method_cache__7137__auto__,cached_hierarchy__7138__auto__,hierarchy__7139__auto__){
return (function (t,_,___$1,___$2){
return cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(t);
});})(method_table__7135__auto__,prefer_table__7136__auto__,method_cache__7137__auto__,cached_hierarchy__7138__auto__,hierarchy__7139__auto__))
,cljs.core.cst$kw$default,hierarchy__7139__auto__,method_table__7135__auto__,prefer_table__7136__auto__,method_cache__7137__auto__,cached_hierarchy__7138__auto__));
})();
}
cljs.core._add_method.call(null,cljs.pprint.emit_nl_QMARK_,cljs.core.cst$kw$linear,(function (newl,this$,section,_){
var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(newl);
return cljs.pprint.linear_nl_QMARK_.call(null,this$,lb,section);
}));
cljs.core._add_method.call(null,cljs.pprint.emit_nl_QMARK_,cljs.core.cst$kw$miser,(function (newl,this$,section,_){
var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(newl);
return cljs.pprint.miser_nl_QMARK_.call(null,this$,lb,section);
}));
cljs.core._add_method.call(null,cljs.pprint.emit_nl_QMARK_,cljs.core.cst$kw$fill,(function (newl,this$,section,subsection){
var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(newl);
var or__6210__auto__ = cljs.core.deref.call(null,cljs.core.cst$kw$intra_DASH_block_DASH_nl.cljs$core$IFn$_invoke$arity$1(lb));
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
var or__6210__auto____$1 = cljs.core.not.call(null,cljs.pprint.tokens_fit_QMARK_.call(null,this$,subsection));
if(or__6210__auto____$1){
return or__6210__auto____$1;
} else {
return cljs.pprint.miser_nl_QMARK_.call(null,this$,lb,section);
}
}
}));
cljs.core._add_method.call(null,cljs.pprint.emit_nl_QMARK_,cljs.core.cst$kw$mandatory,(function (_,___$1,___$2,___$3){
return true;
}));
cljs.pprint.get_section = (function cljs$pprint$get_section(buffer){
var nl = cljs.core.first.call(null,buffer);
var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(nl);
var section = cljs.core.seq.call(null,cljs.core.take_while.call(null,((function (nl,lb){
return (function (p1__12327_SHARP_){
return cljs.core.not.call(null,(function (){var and__6198__auto__ = cljs.pprint.nl_t_QMARK_.call(null,p1__12327_SHARP_);
if(cljs.core.truth_(and__6198__auto__)){
return cljs.pprint.ancestor_QMARK_.call(null,cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(p1__12327_SHARP_),lb);
} else {
return and__6198__auto__;
}
})());
});})(nl,lb))
,cljs.core.next.call(null,buffer)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [section,cljs.core.seq.call(null,cljs.core.drop.call(null,(cljs.core.count.call(null,section) + (1)),buffer))], null);
});
cljs.pprint.get_sub_section = (function cljs$pprint$get_sub_section(buffer){
var nl = cljs.core.first.call(null,buffer);
var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(nl);
var section = cljs.core.seq.call(null,cljs.core.take_while.call(null,((function (nl,lb){
return (function (p1__12328_SHARP_){
var nl_lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(p1__12328_SHARP_);
return cljs.core.not.call(null,(function (){var and__6198__auto__ = cljs.pprint.nl_t_QMARK_.call(null,p1__12328_SHARP_);
if(cljs.core.truth_(and__6198__auto__)){
var or__6210__auto__ = cljs.core._EQ_.call(null,nl_lb,lb);
if(or__6210__auto__){
return or__6210__auto__;
} else {
return cljs.pprint.ancestor_QMARK_.call(null,nl_lb,lb);
}
} else {
return and__6198__auto__;
}
})());
});})(nl,lb))
,cljs.core.next.call(null,buffer)));
return section;
});
cljs.pprint.update_nl_state = (function cljs$pprint$update_nl_state(lb){
cljs.core.reset_BANG_.call(null,cljs.core.cst$kw$intra_DASH_block_DASH_nl.cljs$core$IFn$_invoke$arity$1(lb),true);

cljs.core.reset_BANG_.call(null,cljs.core.cst$kw$done_DASH_nl.cljs$core$IFn$_invoke$arity$1(lb),true);

var lb__$1 = cljs.core.cst$kw$parent.cljs$core$IFn$_invoke$arity$1(lb);
while(true){
if(cljs.core.truth_(lb__$1)){
cljs.core.reset_BANG_.call(null,cljs.core.cst$kw$done_DASH_nl.cljs$core$IFn$_invoke$arity$1(lb__$1),true);

cljs.core.reset_BANG_.call(null,cljs.core.cst$kw$intra_DASH_block_DASH_nl.cljs$core$IFn$_invoke$arity$1(lb__$1),true);

var G__12329 = cljs.core.cst$kw$parent.cljs$core$IFn$_invoke$arity$1(lb__$1);
lb__$1 = G__12329;
continue;
} else {
return null;
}
break;
}
});
cljs.pprint.emit_nl = (function cljs$pprint$emit_nl(this$,nl){
cljs.core._write.call(null,cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),cljs.pprint.pp_newline.call(null));

cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,null);

var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(nl);
var prefix = cljs.core.cst$kw$per_DASH_line_DASH_prefix.cljs$core$IFn$_invoke$arity$1(lb);
if(cljs.core.truth_(prefix)){
cljs.core._write.call(null,cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),prefix);
} else {
}

var istr_12330 = cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(cljs.core.deref.call(null,cljs.core.cst$kw$indent.cljs$core$IFn$_invoke$arity$1(lb)) - cljs.core.count.call(null,prefix))," "));
cljs.core._write.call(null,cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),istr_12330);

return cljs.pprint.update_nl_state.call(null,lb);
});
cljs.pprint.split_at_newline = (function cljs$pprint$split_at_newline(tokens){
var pre = cljs.core.seq.call(null,cljs.core.take_while.call(null,(function (p1__12331_SHARP_){
return cljs.core.not.call(null,cljs.pprint.nl_t_QMARK_.call(null,p1__12331_SHARP_));
}),tokens));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pre,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,pre),tokens))], null);
});
cljs.pprint.write_token_string = (function cljs$pprint$write_token_string(this$,tokens){
var vec__12334 = cljs.pprint.split_at_newline.call(null,tokens);
var a = cljs.core.nth.call(null,vec__12334,(0),null);
var b = cljs.core.nth.call(null,vec__12334,(1),null);
if(cljs.core.truth_(a)){
cljs.pprint.write_tokens.call(null,this$,a,false);
} else {
}

if(cljs.core.truth_(b)){
var vec__12335 = cljs.pprint.get_section.call(null,b);
var section = cljs.core.nth.call(null,vec__12335,(0),null);
var remainder = cljs.core.nth.call(null,vec__12335,(1),null);
var newl = cljs.core.first.call(null,b);
var do_nl = cljs.pprint.emit_nl_QMARK_.call(null,newl,this$,section,cljs.pprint.get_sub_section.call(null,b));
var result = (cljs.core.truth_(do_nl)?(function (){
cljs.pprint.emit_nl.call(null,this$,newl);

return cljs.core.next.call(null,b);
})()
:b);
var long_section = cljs.core.not.call(null,cljs.pprint.tokens_fit_QMARK_.call(null,this$,result));
var result__$1 = ((long_section)?(function (){var rem2 = cljs$pprint$write_token_string.call(null,this$,section);
if(cljs.core._EQ_.call(null,rem2,section)){
cljs.pprint.write_tokens.call(null,this$,section,false);

return remainder;
} else {
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.concat.call(null,rem2,remainder));
}
})():result);
return result__$1;
} else {
return null;
}
});
cljs.pprint.write_line = (function cljs$pprint$write_line(this$){
var buffer = cljs.core.cst$kw$buffer.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
while(true){
cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,cljs.core.cst$kw$buffer,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,buffer));

if(cljs.core.not.call(null,cljs.pprint.tokens_fit_QMARK_.call(null,this$,buffer))){
var new_buffer = cljs.pprint.write_token_string.call(null,this$,buffer);
if(!((buffer === new_buffer))){
var G__12336 = new_buffer;
buffer = G__12336;
continue;
} else {
return null;
}
} else {
return null;
}
break;
}
});
cljs.pprint.add_to_buffer = (function cljs$pprint$add_to_buffer(this$,token){
cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,cljs.core.cst$kw$buffer,cljs.core.conj.call(null,cljs.core.cst$kw$buffer.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),token));

if(cljs.core.not.call(null,cljs.pprint.tokens_fit_QMARK_.call(null,this$,cljs.core.cst$kw$buffer.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)))))){
return cljs.pprint.write_line.call(null,this$);
} else {
return null;
}
});
cljs.pprint.write_buffered_output = (function cljs$pprint$write_buffered_output(this$){
cljs.pprint.write_line.call(null,this$);

var temp__4655__auto__ = cljs.core.cst$kw$buffer.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__4655__auto__)){
var buf = temp__4655__auto__;
cljs.pprint.write_tokens.call(null,this$,buf,true);

return cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,cljs.core.cst$kw$buffer,cljs.core.PersistentVector.EMPTY);
} else {
return null;
}
});
cljs.pprint.write_white_space = (function cljs$pprint$write_white_space(this$){
var temp__4657__auto__ = cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__4657__auto__)){
var tws = temp__4657__auto__;
cljs.core._write.call(null,cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),tws);

return cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,null);
} else {
return null;
}
});
cljs.pprint.write_initial_lines = (function cljs$pprint$write_initial_lines(this$,s){
var lines = clojure.string.split.call(null,s,"\n",(-1));
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,lines),(1))){
return s;
} else {
var prefix = cljs.core.cst$kw$per_DASH_line_DASH_prefix.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.cst$kw$logical_DASH_blocks.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)))));
var l = cljs.core.first.call(null,lines);
if(cljs.core._EQ_.call(null,cljs.core.cst$kw$buffering,cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))))){
var oldpos_12345 = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
var newpos_12346 = (oldpos_12345 + cljs.core.count.call(null,l));
cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,cljs.core.cst$kw$pos,newpos_12346);

cljs.pprint.add_to_buffer.call(null,this$,cljs.pprint.make_buffer_blob.call(null,l,null,oldpos_12345,newpos_12346));

cljs.pprint.write_buffered_output.call(null,this$);
} else {
cljs.pprint.write_white_space.call(null,this$);

cljs.core._write.call(null,cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),l);
}

cljs.core._write.call(null,cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),"\n");

var seq__12341_12347 = cljs.core.seq.call(null,cljs.core.next.call(null,cljs.core.butlast.call(null,lines)));
var chunk__12342_12348 = null;
var count__12343_12349 = (0);
var i__12344_12350 = (0);
while(true){
if((i__12344_12350 < count__12343_12349)){
var l_12351__$1 = cljs.core._nth.call(null,chunk__12342_12348,i__12344_12350);
cljs.core._write.call(null,cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),l_12351__$1);

cljs.core._write.call(null,cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),cljs.pprint.pp_newline.call(null));

if(cljs.core.truth_(prefix)){
cljs.core._write.call(null,cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),prefix);
} else {
}

var G__12352 = seq__12341_12347;
var G__12353 = chunk__12342_12348;
var G__12354 = count__12343_12349;
var G__12355 = (i__12344_12350 + (1));
seq__12341_12347 = G__12352;
chunk__12342_12348 = G__12353;
count__12343_12349 = G__12354;
i__12344_12350 = G__12355;
continue;
} else {
var temp__4657__auto___12356 = cljs.core.seq.call(null,seq__12341_12347);
if(temp__4657__auto___12356){
var seq__12341_12357__$1 = temp__4657__auto___12356;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12341_12357__$1)){
var c__7021__auto___12358 = cljs.core.chunk_first.call(null,seq__12341_12357__$1);
var G__12359 = cljs.core.chunk_rest.call(null,seq__12341_12357__$1);
var G__12360 = c__7021__auto___12358;
var G__12361 = cljs.core.count.call(null,c__7021__auto___12358);
var G__12362 = (0);
seq__12341_12347 = G__12359;
chunk__12342_12348 = G__12360;
count__12343_12349 = G__12361;
i__12344_12350 = G__12362;
continue;
} else {
var l_12363__$1 = cljs.core.first.call(null,seq__12341_12357__$1);
cljs.core._write.call(null,cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),l_12363__$1);

cljs.core._write.call(null,cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),cljs.pprint.pp_newline.call(null));

if(cljs.core.truth_(prefix)){
cljs.core._write.call(null,cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),prefix);
} else {
}

var G__12364 = cljs.core.next.call(null,seq__12341_12357__$1);
var G__12365 = null;
var G__12366 = (0);
var G__12367 = (0);
seq__12341_12347 = G__12364;
chunk__12342_12348 = G__12365;
count__12343_12349 = G__12366;
i__12344_12350 = G__12367;
continue;
}
} else {
}
}
break;
}

cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,cljs.core.cst$kw$buffering,cljs.core.cst$kw$writing);

return cljs.core.last.call(null,lines);
}
});
cljs.pprint.p_write_char = (function cljs$pprint$p_write_char(this$,c){
if(cljs.core._EQ_.call(null,cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),cljs.core.cst$kw$writing)){
cljs.pprint.write_white_space.call(null,this$);

return cljs.core._write.call(null,cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),c);
} else {
if(cljs.core._EQ_.call(null,c,"\n")){
return cljs.pprint.write_initial_lines.call(null,this$,"\n");
} else {
var oldpos = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
var newpos = (oldpos + (1));
cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,cljs.core.cst$kw$pos,newpos);

return cljs.pprint.add_to_buffer.call(null,this$,cljs.pprint.make_buffer_blob.call(null,cljs.core.char$.call(null,c),null,oldpos,newpos));
}
}
});
cljs.pprint.pretty_writer = (function cljs$pprint$pretty_writer(writer,max_columns,miser_width){
var lb = (new cljs.pprint.logical_block(null,null,cljs.core.atom.call(null,(0)),cljs.core.atom.call(null,(0)),cljs.core.atom.call(null,false),cljs.core.atom.call(null,false),null,null,null,null,null,null,null));
var fields = cljs.core.atom.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$logical_DASH_blocks,cljs.core.cst$kw$miser_DASH_width,cljs.core.cst$kw$buffer_DASH_block,cljs.core.cst$kw$pretty_DASH_writer,cljs.core.cst$kw$sections,cljs.core.cst$kw$mode,cljs.core.cst$kw$pos,cljs.core.cst$kw$trailing_DASH_white_DASH_space,cljs.core.cst$kw$base,cljs.core.cst$kw$buffer_DASH_level,cljs.core.cst$kw$buffer],[lb,miser_width,lb,true,null,cljs.core.cst$kw$writing,(0),null,cljs.pprint.column_writer.call(null,writer,max_columns),(1),cljs.core.PersistentVector.EMPTY]));
if(typeof cljs.pprint.t_cljs$pprint12374 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.pprint.IPrettyFlush}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint12374 = (function (pretty_writer,writer,max_columns,miser_width,lb,fields,meta12375){
this.pretty_writer = pretty_writer;
this.writer = writer;
this.max_columns = max_columns;
this.miser_width = miser_width;
this.lb = lb;
this.fields = fields;
this.meta12375 = meta12375;
this.cljs$lang$protocol_mask$partition0$ = 1074167808;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.pprint.t_cljs$pprint12374.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (lb,fields){
return (function (_12376,meta12375__$1){
var self__ = this;
var _12376__$1 = this;
return (new cljs.pprint.t_cljs$pprint12374(self__.pretty_writer,self__.writer,self__.max_columns,self__.miser_width,self__.lb,self__.fields,meta12375__$1));
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint12374.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (lb,fields){
return (function (_12376){
var self__ = this;
var _12376__$1 = this;
return self__.meta12375;
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint12374.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (lb,fields){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.fields;
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint12374.prototype.cljs$core$IWriter$_write$arity$2 = ((function (lb,fields){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__12377 = cljs.core._EQ_;
var expr__12378 = cljs.core.type.call(null,x);
if(cljs.core.truth_(pred__12377.call(null,String,expr__12378))){
var s0 = cljs.pprint.write_initial_lines.call(null,this$__$1,x);
var s = clojure.string.replace_first.call(null,s0,/\s+$/,"");
var white_space = cljs.core.subs.call(null,s0,cljs.core.count.call(null,s));
var mode = cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$__$1)));
if(cljs.core._EQ_.call(null,mode,cljs.core.cst$kw$writing)){
cljs.pprint.write_white_space.call(null,this$__$1);

cljs.core._write.call(null,cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$__$1))),s);

return cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$__$1),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,white_space);
} else {
var oldpos = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$__$1)));
var newpos = (oldpos + cljs.core.count.call(null,s0));
cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$__$1),cljs.core.assoc,cljs.core.cst$kw$pos,newpos);

return cljs.pprint.add_to_buffer.call(null,this$__$1,cljs.pprint.make_buffer_blob.call(null,s,white_space,oldpos,newpos));
}
} else {
if(cljs.core.truth_(pred__12377.call(null,Number,expr__12378))){
return cljs.pprint.p_write_char.call(null,this$__$1,x);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__12378)].join('')));
}
}
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint12374.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (lb,fields){
return (function (this$){
var self__ = this;
var this$__$1 = this;
cljs.pprint._ppflush.call(null,this$__$1);

return cljs.core._flush.call(null,cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$__$1))));
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint12374.prototype.cljs$pprint$IPrettyFlush$ = true;

cljs.pprint.t_cljs$pprint12374.prototype.cljs$pprint$IPrettyFlush$_ppflush$arity$1 = ((function (lb,fields){
return (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.call(null,cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$__$1))),cljs.core.cst$kw$buffering)){
cljs.pprint.write_tokens.call(null,this$__$1,cljs.core.cst$kw$buffer.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$__$1))),true);

return cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$__$1),cljs.core.assoc,cljs.core.cst$kw$buffer,cljs.core.PersistentVector.EMPTY);
} else {
return cljs.pprint.write_white_space.call(null,this$__$1);
}
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint12374.getBasis = ((function (lb,fields){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$pretty_DASH_writer,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$private,true,cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$writer,cljs.core.cst$sym$max_DASH_columns,cljs.core.cst$sym$miser_DASH_width], null)))], null)),cljs.core.cst$sym$writer,cljs.core.cst$sym$max_DASH_columns,cljs.core.cst$sym$miser_DASH_width,cljs.core.cst$sym$lb,cljs.core.cst$sym$fields,cljs.core.cst$sym$meta12375], null);
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint12374.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint12374.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint12374";

cljs.pprint.t_cljs$pprint12374.cljs$lang$ctorPrWriter = ((function (lb,fields){
return (function (this__6816__auto__,writer__6817__auto__,opt__6818__auto__){
return cljs.core._write.call(null,writer__6817__auto__,"cljs.pprint/t_cljs$pprint12374");
});})(lb,fields))
;

cljs.pprint.__GT_t_cljs$pprint12374 = ((function (lb,fields){
return (function cljs$pprint$pretty_writer_$___GT_t_cljs$pprint12374(pretty_writer__$1,writer__$1,max_columns__$1,miser_width__$1,lb__$1,fields__$1,meta12375){
return (new cljs.pprint.t_cljs$pprint12374(pretty_writer__$1,writer__$1,max_columns__$1,miser_width__$1,lb__$1,fields__$1,meta12375));
});})(lb,fields))
;

}

return (new cljs.pprint.t_cljs$pprint12374(cljs$pprint$pretty_writer,writer,max_columns,miser_width,lb,fields,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.pprint.start_block = (function cljs$pprint$start_block(this$,prefix,per_line_prefix,suffix){
var lb = (new cljs.pprint.logical_block(cljs.core.cst$kw$logical_DASH_blocks.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),null,cljs.core.atom.call(null,(0)),cljs.core.atom.call(null,(0)),cljs.core.atom.call(null,false),cljs.core.atom.call(null,false),prefix,per_line_prefix,suffix,null,null,null,null));
cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,cljs.core.cst$kw$logical_DASH_blocks,lb);

if(cljs.core._EQ_.call(null,cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),cljs.core.cst$kw$writing)){
cljs.pprint.write_white_space.call(null,this$);

var temp__4657__auto___12380 = cljs.core.cst$kw$logical_DASH_block_DASH_callback.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__4657__auto___12380)){
var cb_12381 = temp__4657__auto___12380;
cb_12381.call(null,cljs.core.cst$kw$start);
} else {
}

if(cljs.core.truth_(prefix)){
cljs.core._write.call(null,cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),prefix);
} else {
}

var col = cljs.pprint.get_column.call(null,cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))));
cljs.core.reset_BANG_.call(null,cljs.core.cst$kw$start_DASH_col.cljs$core$IFn$_invoke$arity$1(lb),col);

return cljs.core.reset_BANG_.call(null,cljs.core.cst$kw$indent.cljs$core$IFn$_invoke$arity$1(lb),col);
} else {
var oldpos = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
var newpos = (oldpos + (cljs.core.truth_(prefix)?cljs.core.count.call(null,prefix):(0)));
cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,cljs.core.cst$kw$pos,newpos);

return cljs.pprint.add_to_buffer.call(null,this$,cljs.pprint.make_start_block_t.call(null,lb,oldpos,newpos));
}
});
cljs.pprint.end_block = (function cljs$pprint$end_block(this$){
var lb = cljs.core.cst$kw$logical_DASH_blocks.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
var suffix = cljs.core.cst$kw$suffix.cljs$core$IFn$_invoke$arity$1(lb);
if(cljs.core._EQ_.call(null,cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),cljs.core.cst$kw$writing)){
cljs.pprint.write_white_space.call(null,this$);

if(cljs.core.truth_(suffix)){
cljs.core._write.call(null,cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),suffix);
} else {
}

var temp__4657__auto___12382 = cljs.core.cst$kw$logical_DASH_block_DASH_callback.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__4657__auto___12382)){
var cb_12383 = temp__4657__auto___12382;
cb_12383.call(null,cljs.core.cst$kw$end);
} else {
}
} else {
var oldpos_12384 = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
var newpos_12385 = (oldpos_12384 + (cljs.core.truth_(suffix)?cljs.core.count.call(null,suffix):(0)));
cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,cljs.core.cst$kw$pos,newpos_12385);

cljs.pprint.add_to_buffer.call(null,this$,cljs.pprint.make_end_block_t.call(null,lb,oldpos_12384,newpos_12385));
}

return cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,cljs.core.cst$kw$logical_DASH_blocks,cljs.core.cst$kw$parent.cljs$core$IFn$_invoke$arity$1(lb));
});
cljs.pprint.nl = (function cljs$pprint$nl(this$,type){
cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,cljs.core.cst$kw$mode,cljs.core.cst$kw$buffering);

var pos = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
return cljs.pprint.add_to_buffer.call(null,this$,cljs.pprint.make_nl_t.call(null,type,cljs.core.cst$kw$logical_DASH_blocks.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),pos,pos));
});
cljs.pprint.indent = (function cljs$pprint$indent(this$,relative_to,offset){
var lb = cljs.core.cst$kw$logical_DASH_blocks.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core._EQ_.call(null,cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),cljs.core.cst$kw$writing)){
cljs.pprint.write_white_space.call(null,this$);

return cljs.core.reset_BANG_.call(null,cljs.core.cst$kw$indent.cljs$core$IFn$_invoke$arity$1(lb),(offset + (function (){var pred__12389 = cljs.core._EQ_;
var expr__12390 = relative_to;
if(cljs.core.truth_(pred__12389.call(null,cljs.core.cst$kw$block,expr__12390))){
return cljs.core.deref.call(null,cljs.core.cst$kw$start_DASH_col.cljs$core$IFn$_invoke$arity$1(lb));
} else {
if(cljs.core.truth_(pred__12389.call(null,cljs.core.cst$kw$current,expr__12390))){
return cljs.pprint.get_column.call(null,cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))));
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__12390)].join('')));
}
}
})()));
} else {
var pos = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
return cljs.pprint.add_to_buffer.call(null,this$,cljs.pprint.make_indent_t.call(null,lb,relative_to,offset,pos,pos));
}
});
cljs.pprint.get_miser_width = (function cljs$pprint$get_miser_width(this$){
return cljs.core.cst$kw$miser_DASH_width.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
});
/**
 * Bind to true if you want write to use pretty printing
 */
cljs.pprint._STAR_print_pretty_STAR_ = true;
if(typeof cljs.pprint._STAR_print_pprint_dispatch_STAR_ !== 'undefined'){
} else {
/**
 * The pretty print dispatch function. Use with-pprint-dispatch or
 * set-pprint-dispatch to modify.
 */
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = null;
}
/**
 * Pretty printing will try to avoid anything going beyond this column.
 * Set it to nil to have pprint let the line be arbitrarily long. This will ignore all
 * non-mandatory newlines.
 */
cljs.pprint._STAR_print_right_margin_STAR_ = (72);
/**
 * The column at which to enter miser style. Depending on the dispatch table,
 * miser style add newlines in more places to try to keep lines short allowing for further
 * levels of nesting.
 */
cljs.pprint._STAR_print_miser_width_STAR_ = (40);
/**
 * Maximum number of lines to print in a pretty print instance (N.B. This is not yet used)
 */
cljs.pprint._STAR_print_lines_STAR_ = null;
/**
 * Mark circular structures (N.B. This is not yet used)
 */
cljs.pprint._STAR_print_circle_STAR_ = null;
/**
 * Mark repeated structures rather than repeat them (N.B. This is not yet used)
 */
cljs.pprint._STAR_print_shared_STAR_ = null;
/**
 * Don't print namespaces with symbols. This is particularly useful when
 * pretty printing the results of macro expansions
 */
cljs.pprint._STAR_print_suppress_namespaces_STAR_ = null;
/**
 * Print a radix specifier in front of integers and rationals. If *print-base* is 2, 8,
 * or 16, then the radix specifier used is #b, #o, or #x, respectively. Otherwise the
 * radix specifier is in the form #XXr where XX is the decimal value of *print-base* 
 */
cljs.pprint._STAR_print_radix_STAR_ = null;
/**
 * The base to use for printing integers and rationals.
 */
cljs.pprint._STAR_print_base_STAR_ = (10);
cljs.pprint._STAR_current_level_STAR_ = (0);
cljs.pprint._STAR_current_length_STAR_ = null;
cljs.pprint.write_option_table = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$miser_DASH_width,cljs.core.cst$kw$right_DASH_margin,cljs.core.cst$kw$circle,cljs.core.cst$kw$lines,cljs.core.cst$kw$suppress_DASH_namespaces,cljs.core.cst$kw$radix,cljs.core.cst$kw$level,cljs.core.cst$kw$readably,cljs.core.cst$kw$dispatch,cljs.core.cst$kw$length,cljs.core.cst$kw$pretty,cljs.core.cst$kw$base],[new cljs.core.Var(function(){return cljs.pprint._STAR_print_miser_width_STAR_;},cljs.core.cst$sym$cljs$pprint_SLASH__STAR_print_DASH_miser_DASH_width_STAR_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$added,cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$dynamic,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],["1.2",cljs.core.cst$sym$cljs$pprint,cljs.core.cst$sym$_STAR_print_DASH_miser_DASH_width_STAR_,"out/cljs/pprint.cljs",21,1,true,632,637,cljs.core.List.EMPTY,"The column at which to enter miser style. Depending on the dispatch table,\nmiser style add newlines in more places to try to keep lines short allowing for further\nlevels of nesting.",(cljs.core.truth_(cljs.pprint._STAR_print_miser_width_STAR_)?cljs.pprint._STAR_print_miser_width_STAR_.cljs$lang$test:null)])),new cljs.core.Var(function(){return cljs.pprint._STAR_print_right_margin_STAR_;},cljs.core.cst$sym$cljs$pprint_SLASH__STAR_print_DASH_right_DASH_margin_STAR_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$added,cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$dynamic,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],["1.2",cljs.core.cst$sym$cljs$pprint,cljs.core.cst$sym$_STAR_print_DASH_right_DASH_margin_STAR_,"out/cljs/pprint.cljs",22,1,true,625,630,cljs.core.List.EMPTY,"Pretty printing will try to avoid anything going beyond this column.\nSet it to nil to have pprint let the line be arbitrarily long. This will ignore all\nnon-mandatory newlines.",(cljs.core.truth_(cljs.pprint._STAR_print_right_margin_STAR_)?cljs.pprint._STAR_print_right_margin_STAR_.cljs$lang$test:null)])),new cljs.core.Var(function(){return cljs.pprint._STAR_print_circle_STAR_;},cljs.core.cst$sym$cljs$pprint_SLASH__STAR_print_DASH_circle_STAR_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$private,cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$dynamic,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[true,cljs.core.cst$sym$cljs$pprint,cljs.core.cst$sym$_STAR_print_DASH_circle_STAR_,"out/cljs/pprint.cljs",15,1,true,646,649,cljs.core.List.EMPTY,"Mark circular structures (N.B. This is not yet used)",(cljs.core.truth_(cljs.pprint._STAR_print_circle_STAR_)?cljs.pprint._STAR_print_circle_STAR_.cljs$lang$test:null)])),new cljs.core.Var(function(){return cljs.pprint._STAR_print_lines_STAR_;},cljs.core.cst$sym$cljs$pprint_SLASH__STAR_print_DASH_lines_STAR_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$private,cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$dynamic,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[true,cljs.core.cst$sym$cljs$pprint,cljs.core.cst$sym$_STAR_print_DASH_lines_STAR_,"out/cljs/pprint.cljs",14,1,true,640,643,cljs.core.List.EMPTY,"Maximum number of lines to print in a pretty print instance (N.B. This is not yet used)",(cljs.core.truth_(cljs.pprint._STAR_print_lines_STAR_)?cljs.pprint._STAR_print_lines_STAR_.cljs$lang$test:null)])),new cljs.core.Var(function(){return cljs.pprint._STAR_print_suppress_namespaces_STAR_;},cljs.core.cst$sym$cljs$pprint_SLASH__STAR_print_DASH_suppress_DASH_namespaces_STAR_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$added,cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$dynamic,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],["1.2",cljs.core.cst$sym$cljs$pprint,cljs.core.cst$sym$_STAR_print_DASH_suppress_DASH_namespaces_STAR_,"out/cljs/pprint.cljs",28,1,true,657,661,cljs.core.List.EMPTY,"Don't print namespaces with symbols. This is particularly useful when\npretty printing the results of macro expansions",(cljs.core.truth_(cljs.pprint._STAR_print_suppress_namespaces_STAR_)?cljs.pprint._STAR_print_suppress_namespaces_STAR_.cljs$lang$test:null)])),new cljs.core.Var(function(){return cljs.pprint._STAR_print_radix_STAR_;},cljs.core.cst$sym$cljs$pprint_SLASH__STAR_print_DASH_radix_STAR_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$added,cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$dynamic,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],["1.2",cljs.core.cst$sym$cljs$pprint,cljs.core.cst$sym$_STAR_print_DASH_radix_STAR_,"out/cljs/pprint.cljs",14,1,true,665,670,cljs.core.List.EMPTY,"Print a radix specifier in front of integers and rationals. If *print-base* is 2, 8,\nor 16, then the radix specifier used is #b, #o, or #x, respectively. Otherwise the\nradix specifier is in the form #XXr where XX is the decimal value of *print-base* ",(cljs.core.truth_(cljs.pprint._STAR_print_radix_STAR_)?cljs.pprint._STAR_print_radix_STAR_.cljs$lang$test:null)])),new cljs.core.Var(function(){return cljs.core._STAR_print_level_STAR_;},cljs.core.cst$sym$cljs$core_SLASH__STAR_print_DASH_level_STAR_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$dynamic,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$jsdoc,cljs.core.cst$kw$test],[cljs.core.cst$sym$cljs$core,cljs.core.cst$sym$_STAR_print_DASH_level_STAR_,"cljs/core.cljs",(16),(1),true,(117),(128),cljs.core.List.EMPTY,"*print-level* controls how many levels deep the printer will\n  print nested objects. If it is bound to logical false, there is no\n  limit. Otherwise, it must be bound to an integer indicating the maximum\n  level to print. Each argument to print is at level 0; if an argument is a\n  collection, its items are at level 1; and so on. If an object is a\n  collection and is at a level greater than or equal to the value bound to\n  *print-level*, the printer prints '#' to represent it. The root binding\n  is nil indicating no limit.",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["@type {null|number}"], null),(cljs.core.truth_(cljs.core._STAR_print_level_STAR_)?cljs.core._STAR_print_level_STAR_.cljs$lang$test:null)])),new cljs.core.Var(function(){return cljs.core._STAR_print_readably_STAR_;},cljs.core.cst$sym$cljs$core_SLASH__STAR_print_DASH_readably_STAR_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$dynamic,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$cljs$core,cljs.core.cst$sym$_STAR_print_DASH_readably_STAR_,"cljs/core.cljs",(19),(1),true,(81),(87),cljs.core.List.EMPTY,"When set to logical false, strings and characters will be printed with\n  non-alphanumeric characters converted to the appropriate escape sequences.\n\n  Defaults to true",(cljs.core.truth_(cljs.core._STAR_print_readably_STAR_)?cljs.core._STAR_print_readably_STAR_.cljs$lang$test:null)])),new cljs.core.Var(function(){return cljs.pprint._STAR_print_pprint_dispatch_STAR_;},cljs.core.cst$sym$cljs$pprint_SLASH__STAR_print_DASH_pprint_DASH_dispatch_STAR_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$added,cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$dynamic,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],["1.2",cljs.core.cst$sym$cljs$pprint,cljs.core.cst$sym$_STAR_print_DASH_pprint_DASH_dispatch_STAR_,"out/cljs/pprint.cljs",25,1,true,619,623,cljs.core.List.EMPTY,"The pretty print dispatch function. Use with-pprint-dispatch or\nset-pprint-dispatch to modify.",(cljs.core.truth_(cljs.pprint._STAR_print_pprint_dispatch_STAR_)?cljs.pprint._STAR_print_pprint_dispatch_STAR_.cljs$lang$test:null)])),new cljs.core.Var(function(){return cljs.core._STAR_print_length_STAR_;},cljs.core.cst$sym$cljs$core_SLASH__STAR_print_DASH_length_STAR_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$dynamic,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$jsdoc,cljs.core.cst$kw$test],[cljs.core.cst$sym$cljs$core,cljs.core.cst$sym$_STAR_print_DASH_length_STAR_,"cljs/core.cljs",(17),(1),true,(105),(115),cljs.core.List.EMPTY,"*print-length* controls how many items of each collection the\n  printer will print. If it is bound to logical false, there is no\n  limit. Otherwise, it must be bound to an integer indicating the maximum\n  number of items of each collection to print. If a collection contains\n  more items, the printer will print items up to the limit followed by\n  '...' to represent the remaining items. The root binding is nil\n  indicating no limit.",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["@type {null|number}"], null),(cljs.core.truth_(cljs.core._STAR_print_length_STAR_)?cljs.core._STAR_print_length_STAR_.cljs$lang$test:null)])),new cljs.core.Var(function(){return cljs.pprint._STAR_print_pretty_STAR_;},cljs.core.cst$sym$cljs$pprint_SLASH__STAR_print_DASH_pretty_STAR_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$dynamic,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$cljs$pprint,cljs.core.cst$sym$_STAR_print_DASH_pretty_STAR_,"out/cljs/pprint.cljs",16,1,true,615,617,cljs.core.List.EMPTY,"Bind to true if you want write to use pretty printing",(cljs.core.truth_(cljs.pprint._STAR_print_pretty_STAR_)?cljs.pprint._STAR_print_pretty_STAR_.cljs$lang$test:null)])),new cljs.core.Var(function(){return cljs.pprint._STAR_print_base_STAR_;},cljs.core.cst$sym$cljs$pprint_SLASH__STAR_print_DASH_base_STAR_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$added,cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$dynamic,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],["1.2",cljs.core.cst$sym$cljs$pprint,cljs.core.cst$sym$_STAR_print_DASH_base_STAR_,"out/cljs/pprint.cljs",13,1,true,672,675,cljs.core.List.EMPTY,"The base to use for printing integers and rationals.",(cljs.core.truth_(cljs.pprint._STAR_print_base_STAR_)?cljs.pprint._STAR_print_base_STAR_.cljs$lang$test:null)]))]);
cljs.pprint.table_ize = (function cljs$pprint$table_ize(t,m){
return cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.mapcat.call(null,(function (p1__12392_SHARP_){
var temp__4657__auto__ = cljs.core.get.call(null,t,cljs.core.key.call(null,p1__12392_SHARP_));
if(cljs.core.truth_(temp__4657__auto__)){
var v = temp__4657__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,cljs.core.val.call(null,p1__12392_SHARP_)], null);
} else {
return null;
}
}),m));
});
/**
 * Return true iff x is a PrettyWriter
 */
cljs.pprint.pretty_writer_QMARK_ = (function cljs$pprint$pretty_writer_QMARK_(x){
var and__6198__auto__ = ((!((x == null)))?((((x.cljs$lang$protocol_mask$partition0$ & (32768))) || (x.cljs$core$IDeref$))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x));
if(and__6198__auto__){
return cljs.core.cst$kw$pretty_DASH_writer.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,x)));
} else {
return and__6198__auto__;
}
});
/**
 * Wrap base-writer in a PrettyWriter with the specified right-margin and miser-width
 */
cljs.pprint.make_pretty_writer = (function cljs$pprint$make_pretty_writer(base_writer,right_margin,miser_width){
return cljs.pprint.pretty_writer.call(null,base_writer,right_margin,miser_width);
});
/**
 * Write an object to *out* subject to the current bindings of the printer control
 * variables. Use the kw-args argument to override individual variables for this call (and
 * any recursive calls).
 * 
 * *out* must be a PrettyWriter if pretty printing is enabled. This is the responsibility
 * of the caller.
 * 
 * This method is primarily intended for use by pretty print dispatch functions that
 * already know that the pretty printer will have set up their environment appropriately.
 * Normal library clients should use the standard "write" interface. 
 */
cljs.pprint.write_out = (function cljs$pprint$write_out(object){
var length_reached = (function (){var and__6198__auto__ = cljs.pprint._STAR_current_length_STAR_;
if(cljs.core.truth_(and__6198__auto__)){
var and__6198__auto____$1 = cljs.core._STAR_print_length_STAR_;
if(cljs.core.truth_(and__6198__auto____$1)){
return (cljs.pprint._STAR_current_length_STAR_ >= cljs.core._STAR_print_length_STAR_);
} else {
return and__6198__auto____$1;
}
} else {
return and__6198__auto__;
}
})();
if(cljs.core.not.call(null,cljs.pprint._STAR_print_pretty_STAR_)){
cljs.pprint.pr.call(null,object);
} else {
if(cljs.core.truth_(length_reached)){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"...");
} else {
if(cljs.core.truth_(cljs.pprint._STAR_current_length_STAR_)){
cljs.pprint._STAR_current_length_STAR_ = (cljs.pprint._STAR_current_length_STAR_ + (1));
} else {
}

cljs.pprint._STAR_print_pprint_dispatch_STAR_.call(null,object);
}
}

return length_reached;
});
/**
 * Write an object subject to the current bindings of the printer control variables.
 * Use the kw-args argument to override individual variables for this call (and any
 * recursive calls). Returns the string result if :stream is nil or nil otherwise.
 * 
 * The following keyword arguments can be passed with values:
 *   Keyword              Meaning                              Default value
 *   :stream              Writer for output or nil             true (indicates *out*)
 *   :base                Base to use for writing rationals    Current value of *print-base*
 *   :circle*             If true, mark circular structures    Current value of *print-circle*
 *   :length              Maximum elements to show in sublists Current value of *print-length*
 *   :level               Maximum depth                        Current value of *print-level*
 *   :lines*              Maximum lines of output              Current value of *print-lines*
 *   :miser-width         Width to enter miser mode            Current value of *print-miser-width*
 *   :dispatch            The pretty print dispatch function   Current value of *print-pprint-dispatch*
 *   :pretty              If true, do pretty printing          Current value of *print-pretty*
 *   :radix               If true, prepend a radix specifier   Current value of *print-radix*
 *   :readably*           If true, print readably              Current value of *print-readably*
 *   :right-margin        The column for the right margin      Current value of *print-right-margin*
 *   :suppress-namespaces If true, no namespaces in symbols    Current value of *print-suppress-namespaces*
 * 
 *   * = not yet supported
 */
cljs.pprint.write = (function cljs$pprint$write(var_args){
var args__7287__auto__ = [];
var len__7280__auto___12413 = arguments.length;
var i__7281__auto___12414 = (0);
while(true){
if((i__7281__auto___12414 < len__7280__auto___12413)){
args__7287__auto__.push((arguments[i__7281__auto___12414]));

var G__12415 = (i__7281__auto___12414 + (1));
i__7281__auto___12414 = G__12415;
continue;
} else {
}
break;
}

var argseq__7288__auto__ = ((((1) < args__7287__auto__.length))?(new cljs.core.IndexedSeq(args__7287__auto__.slice((1)),(0),null)):null);
return cljs.pprint.write.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7288__auto__);
});

cljs.pprint.write.cljs$core$IFn$_invoke$arity$variadic = (function (object,kw_args){
var options = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$stream,true], null),cljs.core.apply.call(null,cljs.core.hash_map,kw_args));
var _STAR_print_base_STAR_12399 = cljs.pprint._STAR_print_base_STAR_;
var _STAR_print_circle_STAR_12400 = cljs.pprint._STAR_print_circle_STAR_;
var _STAR_print_length_STAR_12401 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR_12402 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_lines_STAR_12403 = cljs.pprint._STAR_print_lines_STAR_;
var _STAR_print_miser_width_STAR_12404 = cljs.pprint._STAR_print_miser_width_STAR_;
var _STAR_print_pprint_dispatch_STAR_12405 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
var _STAR_print_pretty_STAR_12406 = cljs.pprint._STAR_print_pretty_STAR_;
var _STAR_print_radix_STAR_12407 = cljs.pprint._STAR_print_radix_STAR_;
var _STAR_print_readably_STAR_12408 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_right_margin_STAR_12409 = cljs.pprint._STAR_print_right_margin_STAR_;
var _STAR_print_suppress_namespaces_STAR_12410 = cljs.pprint._STAR_print_suppress_namespaces_STAR_;
cljs.pprint._STAR_print_base_STAR_ = cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_base_STAR_);

cljs.pprint._STAR_print_circle_STAR_ = cljs.core.cst$kw$circle.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_circle_STAR_);

cljs.core._STAR_print_length_STAR_ = cljs.core.cst$kw$length.cljs$core$IFn$_invoke$arity$2(options,cljs.core._STAR_print_length_STAR_);

cljs.core._STAR_print_level_STAR_ = cljs.core.cst$kw$level.cljs$core$IFn$_invoke$arity$2(options,cljs.core._STAR_print_level_STAR_);

cljs.pprint._STAR_print_lines_STAR_ = cljs.core.cst$kw$lines.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_lines_STAR_);

cljs.pprint._STAR_print_miser_width_STAR_ = cljs.core.cst$kw$miser_DASH_width.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_miser_width_STAR_);

cljs.pprint._STAR_print_pprint_dispatch_STAR_ = cljs.core.cst$kw$dispatch.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_pprint_dispatch_STAR_);

cljs.pprint._STAR_print_pretty_STAR_ = cljs.core.cst$kw$pretty.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_pretty_STAR_);

cljs.pprint._STAR_print_radix_STAR_ = cljs.core.cst$kw$radix.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_radix_STAR_);

cljs.core._STAR_print_readably_STAR_ = cljs.core.cst$kw$readably.cljs$core$IFn$_invoke$arity$2(options,cljs.core._STAR_print_readably_STAR_);

cljs.pprint._STAR_print_right_margin_STAR_ = cljs.core.cst$kw$right_DASH_margin.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_right_margin_STAR_);

cljs.pprint._STAR_print_suppress_namespaces_STAR_ = cljs.core.cst$kw$suppress_DASH_namespaces.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_suppress_namespaces_STAR_);

try{try{var sb = (new goog.string.StringBuffer());
var optval = ((cljs.core.contains_QMARK_.call(null,options,cljs.core.cst$kw$stream))?cljs.core.cst$kw$stream.cljs$core$IFn$_invoke$arity$1(options):true);
var base_writer = (((optval === true) || ((optval == null)))?(new cljs.core.StringBufferWriter(sb)):optval);
if(cljs.core.truth_(cljs.pprint._STAR_print_pretty_STAR_)){
var base_writer__12038__auto___12416 = base_writer;
var new_writer__12039__auto___12417 = cljs.core.not.call(null,cljs.pprint.pretty_writer_QMARK_.call(null,base_writer__12038__auto___12416));
var _STAR_out_STAR_12411_12418 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = ((new_writer__12039__auto___12417)?cljs.pprint.make_pretty_writer.call(null,base_writer__12038__auto___12416,cljs.pprint._STAR_print_right_margin_STAR_,cljs.pprint._STAR_print_miser_width_STAR_):base_writer__12038__auto___12416);

try{cljs.pprint.write_out.call(null,object);

cljs.pprint._ppflush.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_12411_12418;
}} else {
var _STAR_out_STAR_12412_12419 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = base_writer;

try{cljs.pprint.pr.call(null,object);
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_12412_12419;
}}

if(optval === true){
cljs.core._STAR_print_fn_STAR_.call(null,[cljs.core.str(sb)].join(''));
} else {
}

if((optval == null)){
return [cljs.core.str(sb)].join('');
} else {
return null;
}
}finally {}}finally {cljs.pprint._STAR_print_suppress_namespaces_STAR_ = _STAR_print_suppress_namespaces_STAR_12410;

cljs.pprint._STAR_print_right_margin_STAR_ = _STAR_print_right_margin_STAR_12409;

cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR_12408;

cljs.pprint._STAR_print_radix_STAR_ = _STAR_print_radix_STAR_12407;

cljs.pprint._STAR_print_pretty_STAR_ = _STAR_print_pretty_STAR_12406;

cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR_12405;

cljs.pprint._STAR_print_miser_width_STAR_ = _STAR_print_miser_width_STAR_12404;

cljs.pprint._STAR_print_lines_STAR_ = _STAR_print_lines_STAR_12403;

cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_12402;

cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR_12401;

cljs.pprint._STAR_print_circle_STAR_ = _STAR_print_circle_STAR_12400;

cljs.pprint._STAR_print_base_STAR_ = _STAR_print_base_STAR_12399;
}});

cljs.pprint.write.cljs$lang$maxFixedArity = (1);

cljs.pprint.write.cljs$lang$applyTo = (function (seq12397){
var G__12398 = cljs.core.first.call(null,seq12397);
var seq12397__$1 = cljs.core.next.call(null,seq12397);
return cljs.pprint.write.cljs$core$IFn$_invoke$arity$variadic(G__12398,seq12397__$1);
});
cljs.pprint.pprint = (function cljs$pprint$pprint(var_args){
var args12420 = [];
var len__7280__auto___12426 = arguments.length;
var i__7281__auto___12427 = (0);
while(true){
if((i__7281__auto___12427 < len__7280__auto___12426)){
args12420.push((arguments[i__7281__auto___12427]));

var G__12428 = (i__7281__auto___12427 + (1));
i__7281__auto___12427 = G__12428;
continue;
} else {
}
break;
}

var G__12422 = args12420.length;
switch (G__12422) {
case 1:
return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12420.length)].join('')));

}
});

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1 = (function (object){
var sb = (new goog.string.StringBuffer());
var _STAR_out_STAR_12423 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = (new cljs.core.StringBufferWriter(sb));

try{cljs.pprint.pprint.call(null,object,cljs.core._STAR_out_STAR_);

return cljs.core._STAR_print_fn_STAR_.call(null,[cljs.core.str(sb)].join(''));
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_12423;
}});

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$2 = (function (object,writer){
var base_writer__12038__auto__ = writer;
var new_writer__12039__auto__ = cljs.core.not.call(null,cljs.pprint.pretty_writer_QMARK_.call(null,base_writer__12038__auto__));
var _STAR_out_STAR_12424 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = ((new_writer__12039__auto__)?cljs.pprint.make_pretty_writer.call(null,base_writer__12038__auto__,cljs.pprint._STAR_print_right_margin_STAR_,cljs.pprint._STAR_print_miser_width_STAR_):base_writer__12038__auto__);

try{var _STAR_print_pretty_STAR_12425_12430 = cljs.pprint._STAR_print_pretty_STAR_;
cljs.pprint._STAR_print_pretty_STAR_ = true;

try{cljs.pprint.write_out.call(null,object);
}finally {cljs.pprint._STAR_print_pretty_STAR_ = _STAR_print_pretty_STAR_12425_12430;
}
if(!(cljs.core._EQ_.call(null,(0),cljs.pprint.get_column.call(null,cljs.core._STAR_out_STAR_)))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"\n");
} else {
}

return cljs.pprint._ppflush.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_12424;
}});

cljs.pprint.pprint.cljs$lang$maxFixedArity = 2;
cljs.pprint.set_pprint_dispatch = (function cljs$pprint$set_pprint_dispatch(function$){
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = function$;

return null;
});
cljs.pprint.check_enumerated_arg = (function cljs$pprint$check_enumerated_arg(arg,choices){
if(cljs.core.not.call(null,choices.call(null,arg))){
throw (new Error([cljs.core.str("Bad argument: "),cljs.core.str(arg),cljs.core.str(". It must be one of "),cljs.core.str(choices)].join('')));
} else {
return null;
}
});
cljs.pprint.level_exceeded = (function cljs$pprint$level_exceeded(){
var and__6198__auto__ = cljs.core._STAR_print_level_STAR_;
if(cljs.core.truth_(and__6198__auto__)){
return (cljs.pprint._STAR_current_level_STAR_ >= cljs.core._STAR_print_level_STAR_);
} else {
return and__6198__auto__;
}
});
/**
 * Print a conditional newline to a pretty printing stream. kind specifies if the
 *   newline is :linear, :miser, :fill, or :mandatory.
 * 
 *   This function is intended for use when writing custom dispatch functions.
 * 
 *   Output is sent to *out* which must be a pretty printing writer.
 */
cljs.pprint.pprint_newline = (function cljs$pprint$pprint_newline(kind){
cljs.pprint.check_enumerated_arg.call(null,kind,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$mandatory,null,cljs.core.cst$kw$miser,null,cljs.core.cst$kw$fill,null,cljs.core.cst$kw$linear,null], null), null));

return cljs.pprint.nl.call(null,cljs.core._STAR_out_STAR_,kind);
});
/**
 * Create an indent at this point in the pretty printing stream. This defines how
 * following lines are indented. relative-to can be either :block or :current depending
 * whether the indent should be computed relative to the start of the logical block or
 * the current column position. n is an offset.
 * 
 * This function is intended for use when writing custom dispatch functions.
 * 
 * Output is sent to *out* which must be a pretty printing writer.
 */
cljs.pprint.pprint_indent = (function cljs$pprint$pprint_indent(relative_to,n){
cljs.pprint.check_enumerated_arg.call(null,relative_to,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$block,null,cljs.core.cst$kw$current,null], null), null));

return cljs.pprint.indent.call(null,cljs.core._STAR_out_STAR_,relative_to,n);
});
/**
 * Tab at this point in the pretty printing stream. kind specifies whether the tab
 * is :line, :section, :line-relative, or :section-relative.
 * 
 * Colnum and colinc specify the target column and the increment to move the target
 * forward if the output is already past the original target.
 * 
 * This function is intended for use when writing custom dispatch functions.
 * 
 * Output is sent to *out* which must be a pretty printing writer.
 * 
 * THIS FUNCTION IS NOT YET IMPLEMENTED.
 */
cljs.pprint.pprint_tab = (function cljs$pprint$pprint_tab(kind,colnum,colinc){
cljs.pprint.check_enumerated_arg.call(null,kind,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$section,null,cljs.core.cst$kw$line,null,cljs.core.cst$kw$line_DASH_relative,null,cljs.core.cst$kw$section_DASH_relative,null], null), null));

throw (new Error("pprint-tab is not yet implemented"));
});
/**
 * An implementation of a Common Lisp compatible format function. cl-format formats its
 * arguments to an output stream or string based on the format control string given. It
 * supports sophisticated formatting of structured data.
 * 
 * Writer satisfies IWriter, true to output via *print-fn* or nil to output
 * to a string, format-in is the format control string and the remaining arguments
 * are the data to be formatted.
 * 
 * The format control string is a string to be output with embedded 'format directives'
 * describing how to format the various arguments passed in.
 * 
 * If writer is nil, cl-format returns the formatted result string. Otherwise, cl-format
 * returns nil.
 * 
 * For example:
 *  (let [results [46 38 22]]
 *      (cl-format true "There ~[are~;is~:;are~]~:* ~d result~:p: ~{~d~^, ~}~%"
 *                 (count results) results))
 * 
 * Prints via *print-fn*:
 *  There are 3 results: 46, 38, 22
 * 
 * Detailed documentation on format control strings is available in the "Common Lisp the
 * Language, 2nd edition", Chapter 22 (available online at:
 * http://www.cs.cmu.edu/afs/cs.cmu.edu/project/ai-repository/ai/html/cltl/clm/node200.html#SECTION002633000000000000000)
 * and in the Common Lisp HyperSpec at
 * http://www.lispworks.com/documentation/HyperSpec/Body/22_c.htm
 */
cljs.pprint.cl_format = (function cljs$pprint$cl_format(var_args){
var args__7287__auto__ = [];
var len__7280__auto___12434 = arguments.length;
var i__7281__auto___12435 = (0);
while(true){
if((i__7281__auto___12435 < len__7280__auto___12434)){
args__7287__auto__.push((arguments[i__7281__auto___12435]));

var G__12436 = (i__7281__auto___12435 + (1));
i__7281__auto___12435 = G__12436;
continue;
} else {
}
break;
}

var argseq__7288__auto__ = ((((2) < args__7287__auto__.length))?(new cljs.core.IndexedSeq(args__7287__auto__.slice((2)),(0),null)):null);
return cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7288__auto__);
});

cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic = (function (writer,format_in,args){
var compiled_format = ((typeof format_in === 'string')?cljs.pprint.compile_format.call(null,format_in):format_in);
var navigator = cljs.pprint.init_navigator.call(null,args);
return cljs.pprint.execute_format.call(null,writer,compiled_format,navigator);
});

cljs.pprint.cl_format.cljs$lang$maxFixedArity = (2);

cljs.pprint.cl_format.cljs$lang$applyTo = (function (seq12431){
var G__12432 = cljs.core.first.call(null,seq12431);
var seq12431__$1 = cljs.core.next.call(null,seq12431);
var G__12433 = cljs.core.first.call(null,seq12431__$1);
var seq12431__$2 = cljs.core.next.call(null,seq12431__$1);
return cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(G__12432,G__12433,seq12431__$2);
});
cljs.pprint._STAR_format_str_STAR_ = null;
cljs.pprint.format_error = (function cljs$pprint$format_error(message,offset){
var full_message = [cljs.core.str(message),cljs.core.str("\n"),cljs.core.str(cljs.pprint._STAR_format_str_STAR_),cljs.core.str("\n"),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,offset," "))),cljs.core.str("^"),cljs.core.str("\n")].join('');
throw Error(full_message);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.arg_navigator = (function (seq,rest,pos,__meta,__extmap,__hash){
this.seq = seq;
this.rest = rest;
this.pos = pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.pprint.arg_navigator.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__6832__auto__,k__6833__auto__){
var self__ = this;
var this__6832__auto____$1 = this;
return cljs.core._lookup.call(null,this__6832__auto____$1,k__6833__auto__,null);
});

cljs.pprint.arg_navigator.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__6834__auto__,k12438,else__6835__auto__){
var self__ = this;
var this__6834__auto____$1 = this;
var G__12440 = (((k12438 instanceof cljs.core.Keyword))?k12438.fqn:null);
switch (G__12440) {
case "seq":
return self__.seq;

break;
case "rest":
return self__.rest;

break;
case "pos":
return self__.pos;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k12438,else__6835__auto__);

}
});

cljs.pprint.arg_navigator.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__6846__auto__,writer__6847__auto__,opts__6848__auto__){
var self__ = this;
var this__6846__auto____$1 = this;
var pr_pair__6849__auto__ = ((function (this__6846__auto____$1){
return (function (keyval__6850__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__6847__auto__,cljs.core.pr_writer,""," ","",opts__6848__auto__,keyval__6850__auto__);
});})(this__6846__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__6847__auto__,pr_pair__6849__auto__,"#cljs.pprint.arg-navigator{",", ","}",opts__6848__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$seq,self__.seq],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$rest,self__.rest],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$pos,self__.pos],null))], null),self__.__extmap));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IIterable$ = true;

cljs.pprint.arg_navigator.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12437){
var self__ = this;
var G__12437__$1 = this;
return (new cljs.core.RecordIter((0),G__12437__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$seq,cljs.core.cst$kw$rest,cljs.core.cst$kw$pos], null),cljs.core._iterator.call(null,self__.__extmap)));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__6830__auto__){
var self__ = this;
var this__6830__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.arg_navigator.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__6826__auto__){
var self__ = this;
var this__6826__auto____$1 = this;
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.arg_navigator.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__6836__auto__){
var self__ = this;
var this__6836__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__6827__auto__){
var self__ = this;
var this__6827__auto____$1 = this;
var h__6645__auto__ = self__.__hash;
if(!((h__6645__auto__ == null))){
return h__6645__auto__;
} else {
var h__6645__auto____$1 = cljs.core.hash_imap.call(null,this__6827__auto____$1);
self__.__hash = h__6645__auto____$1;

return h__6645__auto____$1;
}
});

cljs.pprint.arg_navigator.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__6828__auto__,other__6829__auto__){
var self__ = this;
var this__6828__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6198__auto__ = other__6829__auto__;
if(cljs.core.truth_(and__6198__auto__)){
var and__6198__auto____$1 = (this__6828__auto____$1.constructor === other__6829__auto__.constructor);
if(and__6198__auto____$1){
return cljs.core.equiv_map.call(null,this__6828__auto____$1,other__6829__auto__);
} else {
return and__6198__auto____$1;
}
} else {
return and__6198__auto__;
}
})())){
return true;
} else {
return false;
}
});

cljs.pprint.arg_navigator.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__6841__auto__,k__6842__auto__){
var self__ = this;
var this__6841__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$pos,null,cljs.core.cst$kw$seq,null,cljs.core.cst$kw$rest,null], null), null),k__6842__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__6841__auto____$1),self__.__meta),k__6842__auto__);
} else {
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__6842__auto__)),null));
}
});

cljs.pprint.arg_navigator.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__6839__auto__,k__6840__auto__,G__12437){
var self__ = this;
var this__6839__auto____$1 = this;
var pred__12441 = cljs.core.keyword_identical_QMARK_;
var expr__12442 = k__6840__auto__;
if(cljs.core.truth_(pred__12441.call(null,cljs.core.cst$kw$seq,expr__12442))){
return (new cljs.pprint.arg_navigator(G__12437,self__.rest,self__.pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12441.call(null,cljs.core.cst$kw$rest,expr__12442))){
return (new cljs.pprint.arg_navigator(self__.seq,G__12437,self__.pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12441.call(null,cljs.core.cst$kw$pos,expr__12442))){
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,G__12437,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__6840__auto__,G__12437),null));
}
}
}
});

cljs.pprint.arg_navigator.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__6844__auto__){
var self__ = this;
var this__6844__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$seq,self__.seq],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$rest,self__.rest],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$pos,self__.pos],null))], null),self__.__extmap));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__6831__auto__,G__12437){
var self__ = this;
var this__6831__auto____$1 = this;
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,G__12437,self__.__extmap,self__.__hash));
});

cljs.pprint.arg_navigator.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__6837__auto__,entry__6838__auto__){
var self__ = this;
var this__6837__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__6838__auto__)){
return cljs.core._assoc.call(null,this__6837__auto____$1,cljs.core._nth.call(null,entry__6838__auto__,(0)),cljs.core._nth.call(null,entry__6838__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__6837__auto____$1,entry__6838__auto__);
}
});

cljs.pprint.arg_navigator.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$seq,cljs.core.cst$sym$rest,cljs.core.cst$sym$pos], null);
});

cljs.pprint.arg_navigator.cljs$lang$type = true;

cljs.pprint.arg_navigator.cljs$lang$ctorPrSeq = (function (this__6866__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljs.pprint/arg-navigator");
});

cljs.pprint.arg_navigator.cljs$lang$ctorPrWriter = (function (this__6866__auto__,writer__6867__auto__){
return cljs.core._write.call(null,writer__6867__auto__,"cljs.pprint/arg-navigator");
});

cljs.pprint.__GT_arg_navigator = (function cljs$pprint$__GT_arg_navigator(seq,rest,pos){
return (new cljs.pprint.arg_navigator(seq,rest,pos,null,null,null));
});

cljs.pprint.map__GT_arg_navigator = (function cljs$pprint$map__GT_arg_navigator(G__12439){
return (new cljs.pprint.arg_navigator(cljs.core.cst$kw$seq.cljs$core$IFn$_invoke$arity$1(G__12439),cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(G__12439),cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(G__12439),null,cljs.core.dissoc.call(null,G__12439,cljs.core.cst$kw$seq,cljs.core.cst$kw$rest,cljs.core.cst$kw$pos),null));
});

/**
 * Create a new arg-navigator from the sequence with the position set to 0
 */
cljs.pprint.init_navigator = (function cljs$pprint$init_navigator(s){
var s__$1 = cljs.core.seq.call(null,s);
return (new cljs.pprint.arg_navigator(s__$1,s__$1,(0),null,null,null));
});
cljs.pprint.next_arg = (function cljs$pprint$next_arg(navigator){
var rst = cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(navigator);
if(cljs.core.truth_(rst)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,rst),(new cljs.pprint.arg_navigator(cljs.core.cst$kw$seq.cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.next.call(null,rst),(cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(navigator) + (1)),null,null,null))], null);
} else {
throw Error("Not enough arguments for format definition");
}
});
cljs.pprint.next_arg_or_nil = (function cljs$pprint$next_arg_or_nil(navigator){
var rst = cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(navigator);
if(cljs.core.truth_(rst)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,rst),(new cljs.pprint.arg_navigator(cljs.core.cst$kw$seq.cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.next.call(null,rst),(cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(navigator) + (1)),null,null,null))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,navigator], null);
}
});
cljs.pprint.get_format_arg = (function cljs$pprint$get_format_arg(navigator){
var vec__12446 = cljs.pprint.next_arg.call(null,navigator);
var raw_format = cljs.core.nth.call(null,vec__12446,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__12446,(1),null);
var compiled_format = ((typeof raw_format === 'string')?cljs.pprint.compile_format.call(null,raw_format):raw_format);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [compiled_format,navigator__$1], null);
});
cljs.pprint.absolute_reposition = (function cljs$pprint$absolute_reposition(navigator,position){
if((position >= cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(navigator))){
return cljs.pprint.relative_reposition.call(null,navigator,(cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(navigator) - position));
} else {
return (new cljs.pprint.arg_navigator(cljs.core.cst$kw$seq.cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.drop.call(null,position,cljs.core.cst$kw$seq.cljs$core$IFn$_invoke$arity$1(navigator)),position,null,null,null));
}
});
cljs.pprint.relative_reposition = (function cljs$pprint$relative_reposition(navigator,position){
var newpos = (cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(navigator) + position);
if((position < (0))){
return cljs.pprint.absolute_reposition.call(null,navigator,newpos);
} else {
return (new cljs.pprint.arg_navigator(cljs.core.cst$kw$seq.cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.drop.call(null,position,cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(navigator)),newpos,null,null,null));
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.compiled_directive = (function (func,def,params,offset,__meta,__extmap,__hash){
this.func = func;
this.def = def;
this.params = params;
this.offset = offset;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.pprint.compiled_directive.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__6832__auto__,k__6833__auto__){
var self__ = this;
var this__6832__auto____$1 = this;
return cljs.core._lookup.call(null,this__6832__auto____$1,k__6833__auto__,null);
});

cljs.pprint.compiled_directive.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__6834__auto__,k12448,else__6835__auto__){
var self__ = this;
var this__6834__auto____$1 = this;
var G__12450 = (((k12448 instanceof cljs.core.Keyword))?k12448.fqn:null);
switch (G__12450) {
case "func":
return self__.func;

break;
case "def":
return self__.def;

break;
case "params":
return self__.params;

break;
case "offset":
return self__.offset;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k12448,else__6835__auto__);

}
});

cljs.pprint.compiled_directive.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__6846__auto__,writer__6847__auto__,opts__6848__auto__){
var self__ = this;
var this__6846__auto____$1 = this;
var pr_pair__6849__auto__ = ((function (this__6846__auto____$1){
return (function (keyval__6850__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__6847__auto__,cljs.core.pr_writer,""," ","",opts__6848__auto__,keyval__6850__auto__);
});})(this__6846__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__6847__auto__,pr_pair__6849__auto__,"#cljs.pprint.compiled-directive{",", ","}",opts__6848__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$func,self__.func],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$def,self__.def],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$params,self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$offset,self__.offset],null))], null),self__.__extmap));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IIterable$ = true;

cljs.pprint.compiled_directive.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12447){
var self__ = this;
var G__12447__$1 = this;
return (new cljs.core.RecordIter((0),G__12447__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$func,cljs.core.cst$kw$def,cljs.core.cst$kw$params,cljs.core.cst$kw$offset], null),cljs.core._iterator.call(null,self__.__extmap)));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__6830__auto__){
var self__ = this;
var this__6830__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.compiled_directive.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__6826__auto__){
var self__ = this;
var this__6826__auto____$1 = this;
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.compiled_directive.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__6836__auto__){
var self__ = this;
var this__6836__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__6827__auto__){
var self__ = this;
var this__6827__auto____$1 = this;
var h__6645__auto__ = self__.__hash;
if(!((h__6645__auto__ == null))){
return h__6645__auto__;
} else {
var h__6645__auto____$1 = cljs.core.hash_imap.call(null,this__6827__auto____$1);
self__.__hash = h__6645__auto____$1;

return h__6645__auto____$1;
}
});

cljs.pprint.compiled_directive.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__6828__auto__,other__6829__auto__){
var self__ = this;
var this__6828__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6198__auto__ = other__6829__auto__;
if(cljs.core.truth_(and__6198__auto__)){
var and__6198__auto____$1 = (this__6828__auto____$1.constructor === other__6829__auto__.constructor);
if(and__6198__auto____$1){
return cljs.core.equiv_map.call(null,this__6828__auto____$1,other__6829__auto__);
} else {
return and__6198__auto____$1;
}
} else {
return and__6198__auto__;
}
})())){
return true;
} else {
return false;
}
});

cljs.pprint.compiled_directive.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__6841__auto__,k__6842__auto__){
var self__ = this;
var this__6841__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$offset,null,cljs.core.cst$kw$func,null,cljs.core.cst$kw$params,null,cljs.core.cst$kw$def,null], null), null),k__6842__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__6841__auto____$1),self__.__meta),k__6842__auto__);
} else {
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__6842__auto__)),null));
}
});

cljs.pprint.compiled_directive.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__6839__auto__,k__6840__auto__,G__12447){
var self__ = this;
var this__6839__auto____$1 = this;
var pred__12451 = cljs.core.keyword_identical_QMARK_;
var expr__12452 = k__6840__auto__;
if(cljs.core.truth_(pred__12451.call(null,cljs.core.cst$kw$func,expr__12452))){
return (new cljs.pprint.compiled_directive(G__12447,self__.def,self__.params,self__.offset,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12451.call(null,cljs.core.cst$kw$def,expr__12452))){
return (new cljs.pprint.compiled_directive(self__.func,G__12447,self__.params,self__.offset,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12451.call(null,cljs.core.cst$kw$params,expr__12452))){
return (new cljs.pprint.compiled_directive(self__.func,self__.def,G__12447,self__.offset,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12451.call(null,cljs.core.cst$kw$offset,expr__12452))){
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,G__12447,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__6840__auto__,G__12447),null));
}
}
}
}
});

cljs.pprint.compiled_directive.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__6844__auto__){
var self__ = this;
var this__6844__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$func,self__.func],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$def,self__.def],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$params,self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$offset,self__.offset],null))], null),self__.__extmap));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__6831__auto__,G__12447){
var self__ = this;
var this__6831__auto____$1 = this;
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,G__12447,self__.__extmap,self__.__hash));
});

cljs.pprint.compiled_directive.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__6837__auto__,entry__6838__auto__){
var self__ = this;
var this__6837__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__6838__auto__)){
return cljs.core._assoc.call(null,this__6837__auto____$1,cljs.core._nth.call(null,entry__6838__auto__,(0)),cljs.core._nth.call(null,entry__6838__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__6837__auto____$1,entry__6838__auto__);
}
});

cljs.pprint.compiled_directive.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$func,cljs.core.cst$sym$def,cljs.core.cst$sym$params,cljs.core.cst$sym$offset], null);
});

cljs.pprint.compiled_directive.cljs$lang$type = true;

cljs.pprint.compiled_directive.cljs$lang$ctorPrSeq = (function (this__6866__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljs.pprint/compiled-directive");
});

cljs.pprint.compiled_directive.cljs$lang$ctorPrWriter = (function (this__6866__auto__,writer__6867__auto__){
return cljs.core._write.call(null,writer__6867__auto__,"cljs.pprint/compiled-directive");
});

cljs.pprint.__GT_compiled_directive = (function cljs$pprint$__GT_compiled_directive(func,def,params,offset){
return (new cljs.pprint.compiled_directive(func,def,params,offset,null,null,null));
});

cljs.pprint.map__GT_compiled_directive = (function cljs$pprint$map__GT_compiled_directive(G__12449){
return (new cljs.pprint.compiled_directive(cljs.core.cst$kw$func.cljs$core$IFn$_invoke$arity$1(G__12449),cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(G__12449),cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(G__12449),cljs.core.cst$kw$offset.cljs$core$IFn$_invoke$arity$1(G__12449),null,cljs.core.dissoc.call(null,G__12449,cljs.core.cst$kw$func,cljs.core.cst$kw$def,cljs.core.cst$kw$params,cljs.core.cst$kw$offset),null));
});

cljs.pprint.realize_parameter = (function cljs$pprint$realize_parameter(p__12455,navigator){
var vec__12459 = p__12455;
var param = cljs.core.nth.call(null,vec__12459,(0),null);
var vec__12460 = cljs.core.nth.call(null,vec__12459,(1),null);
var raw_val = cljs.core.nth.call(null,vec__12460,(0),null);
var offset = cljs.core.nth.call(null,vec__12460,(1),null);
var vec__12461 = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null], null), null),param))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [raw_val,navigator], null):((cljs.core._EQ_.call(null,raw_val,cljs.core.cst$kw$parameter_DASH_from_DASH_args))?cljs.pprint.next_arg.call(null,navigator):((cljs.core._EQ_.call(null,raw_val,cljs.core.cst$kw$remaining_DASH_arg_DASH_count))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.count.call(null,cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(navigator)),navigator], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [raw_val,navigator], null)
)));
var real_param = cljs.core.nth.call(null,vec__12461,(0),null);
var new_navigator = cljs.core.nth.call(null,vec__12461,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [real_param,offset], null)], null),new_navigator], null);
});
cljs.pprint.realize_parameter_list = (function cljs$pprint$realize_parameter_list(parameter_map,navigator){
var vec__12463 = cljs.pprint.map_passing_context.call(null,cljs.pprint.realize_parameter,navigator,parameter_map);
var pairs = cljs.core.nth.call(null,vec__12463,(0),null);
var new_navigator = cljs.core.nth.call(null,vec__12463,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,pairs),new_navigator], null);
});
cljs.pprint.special_radix_markers = new cljs.core.PersistentArrayMap(null, 3, [(2),"#b",(8),"#o",(16),"#x"], null);
cljs.pprint.format_simple_number = (function cljs$pprint$format_simple_number(n){
if(cljs.core.integer_QMARK_.call(null,n)){
if(cljs.core._EQ_.call(null,cljs.pprint._STAR_print_base_STAR_,(10))){
return [cljs.core.str(n),cljs.core.str((cljs.core.truth_(cljs.pprint._STAR_print_radix_STAR_)?".":null))].join('');
} else {
return [cljs.core.str((cljs.core.truth_(cljs.pprint._STAR_print_radix_STAR_)?(function (){var or__6210__auto__ = cljs.core.get.call(null,cljs.pprint.special_radix_markers,cljs.pprint._STAR_print_base_STAR_);
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return [cljs.core.str("#"),cljs.core.str(cljs.pprint._STAR_print_base_STAR_),cljs.core.str("r")].join('');
}
})():null)),cljs.core.str(cljs.pprint.opt_base_str.call(null,cljs.pprint._STAR_print_base_STAR_,n))].join('');
}
} else {
return null;

}
});
cljs.pprint.format_ascii = (function cljs$pprint$format_ascii(print_func,params,arg_navigator,offsets){
var vec__12465 = cljs.pprint.next_arg.call(null,arg_navigator);
var arg = cljs.core.nth.call(null,vec__12465,(0),null);
var arg_navigator__$1 = cljs.core.nth.call(null,vec__12465,(1),null);
var base_output = (function (){var or__6210__auto__ = cljs.pprint.format_simple_number.call(null,arg);
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return print_func.call(null,arg);
}
})();
var base_width = base_output.length;
var min_width = (base_width + cljs.core.cst$kw$minpad.cljs$core$IFn$_invoke$arity$1(params));
var width = (((min_width >= cljs.core.cst$kw$mincol.cljs$core$IFn$_invoke$arity$1(params)))?min_width:(min_width + ((cljs.core.quot.call(null,((cljs.core.cst$kw$mincol.cljs$core$IFn$_invoke$arity$1(params) - min_width) - (1)),cljs.core.cst$kw$colinc.cljs$core$IFn$_invoke$arity$1(params)) + (1)) * cljs.core.cst$kw$colinc.cljs$core$IFn$_invoke$arity$1(params))));
var chars = cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(width - base_width),cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params)));
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))){
cljs.pprint.print.call(null,[cljs.core.str(chars),cljs.core.str(base_output)].join(''));
} else {
cljs.pprint.print.call(null,[cljs.core.str(base_output),cljs.core.str(chars)].join(''));
}

return arg_navigator__$1;
});
/**
 * returns true if a number is actually an integer (that is, has no fractional part)
 */
cljs.pprint.integral_QMARK_ = (function cljs$pprint$integral_QMARK_(x){
if(cljs.core.integer_QMARK_.call(null,x)){
return true;
} else {
if(cljs.pprint.float_QMARK_.call(null,x)){
return cljs.core._EQ_.call(null,x,Math.floor(x));
} else {
return false;

}
}
});
/**
 * Return the list of remainders (essentially the 'digits') of val in the given base
 */
cljs.pprint.remainders = (function cljs$pprint$remainders(base,val){
return cljs.core.reverse.call(null,cljs.core.first.call(null,cljs.pprint.consume.call(null,(function (p1__12466_SHARP_){
if((p1__12466_SHARP_ > (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rem.call(null,p1__12466_SHARP_,base),cljs.core.quot.call(null,p1__12466_SHARP_,base)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null);
}
}),val)));
});
/**
 * Return val as a string in the given base
 */
cljs.pprint.base_str = (function cljs$pprint$base_str(base,val){
if((val === (0))){
return "0";
} else {
var xlated_val = val
;
return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (xlated_val){
return (function (p1__12467_SHARP_){
if((p1__12467_SHARP_ < (10))){
return cljs.core.char$.call(null,(cljs.pprint.char_code.call(null,"0") + p1__12467_SHARP_));
} else {
return cljs.core.char$.call(null,(cljs.pprint.char_code.call(null,"a") + (p1__12467_SHARP_ - (10))));
}
});})(xlated_val))
,cljs.pprint.remainders.call(null,base,val)));
}
});
cljs.pprint.javascript_base_formats = new cljs.core.PersistentArrayMap(null, 3, [(8),"%o",(10),"%d",(16),"%x"], null);
/**
 * Return val as a string in the given base. No cljs format, so no improved performance.
 */
cljs.pprint.opt_base_str = (function cljs$pprint$opt_base_str(base,val){
return cljs.pprint.base_str.call(null,base,val);
});
cljs.pprint.group_by_STAR_ = (function cljs$pprint$group_by_STAR_(unit,lis){
return cljs.core.reverse.call(null,cljs.core.first.call(null,cljs.pprint.consume.call(null,(function (x){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq.call(null,cljs.core.reverse.call(null,cljs.core.take.call(null,unit,x))),cljs.core.seq.call(null,cljs.core.drop.call(null,unit,x))], null);
}),cljs.core.reverse.call(null,lis))));
});
cljs.pprint.format_integer = (function cljs$pprint$format_integer(base,params,arg_navigator,offsets){
var vec__12470 = cljs.pprint.next_arg.call(null,arg_navigator);
var arg = cljs.core.nth.call(null,vec__12470,(0),null);
var arg_navigator__$1 = cljs.core.nth.call(null,vec__12470,(1),null);
if(cljs.core.truth_(cljs.pprint.integral_QMARK_.call(null,arg))){
var neg_12471 = (arg < (0));
var pos_arg_12472 = ((neg_12471)?(- arg):arg);
var raw_str_12473 = cljs.pprint.opt_base_str.call(null,base,pos_arg_12472);
var group_str_12474 = (cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?(function (){var groups = cljs.core.map.call(null,((function (neg_12471,pos_arg_12472,raw_str_12473,vec__12470,arg,arg_navigator__$1){
return (function (p1__12468_SHARP_){
return cljs.core.apply.call(null,cljs.core.str,p1__12468_SHARP_);
});})(neg_12471,pos_arg_12472,raw_str_12473,vec__12470,arg,arg_navigator__$1))
,cljs.pprint.group_by_STAR_.call(null,cljs.core.cst$kw$commainterval.cljs$core$IFn$_invoke$arity$1(params),raw_str_12473));
var commas = cljs.core.repeat.call(null,cljs.core.count.call(null,groups),cljs.core.cst$kw$commachar.cljs$core$IFn$_invoke$arity$1(params));
return cljs.core.apply.call(null,cljs.core.str,cljs.core.next.call(null,cljs.core.interleave.call(null,commas,groups)));
})():raw_str_12473);
var signed_str_12475 = ((neg_12471)?[cljs.core.str("-"),cljs.core.str(group_str_12474)].join(''):(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))?[cljs.core.str("+"),cljs.core.str(group_str_12474)].join(''):group_str_12474
));
var padded_str_12476 = (((signed_str_12475.length < cljs.core.cst$kw$mincol.cljs$core$IFn$_invoke$arity$1(params)))?[cljs.core.str(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(cljs.core.cst$kw$mincol.cljs$core$IFn$_invoke$arity$1(params) - signed_str_12475.length),cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str(signed_str_12475)].join(''):signed_str_12475);
cljs.pprint.print.call(null,padded_str_12476);
} else {
cljs.pprint.format_ascii.call(null,cljs.core.print_str,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$mincol,cljs.core.cst$kw$mincol.cljs$core$IFn$_invoke$arity$1(params),cljs.core.cst$kw$colinc,(1),cljs.core.cst$kw$minpad,(0),cljs.core.cst$kw$padchar,cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params),cljs.core.cst$kw$at,true], null),cljs.pprint.init_navigator.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),null);
}

return arg_navigator__$1;
});
cljs.pprint.english_cardinal_units = new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, ["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"], null);
cljs.pprint.english_ordinal_units = new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, ["zeroth","first","second","third","fourth","fifth","sixth","seventh","eighth","ninth","tenth","eleventh","twelfth","thirteenth","fourteenth","fifteenth","sixteenth","seventeenth","eighteenth","nineteenth"], null);
cljs.pprint.english_cardinal_tens = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"], null);
cljs.pprint.english_ordinal_tens = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","","twentieth","thirtieth","fortieth","fiftieth","sixtieth","seventieth","eightieth","ninetieth"], null);
cljs.pprint.english_scale_numbers = new cljs.core.PersistentVector(null, 22, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","thousand","million","billion","trillion","quadrillion","quintillion","sextillion","septillion","octillion","nonillion","decillion","undecillion","duodecillion","tredecillion","quattuordecillion","quindecillion","sexdecillion","septendecillion","octodecillion","novemdecillion","vigintillion"], null);
/**
 * Convert a number less than 1000 to a cardinal english string
 */
cljs.pprint.format_simple_cardinal = (function cljs$pprint$format_simple_cardinal(num){
var hundreds = cljs.core.quot.call(null,num,(100));
var tens = cljs.core.rem.call(null,num,(100));
return [cljs.core.str((((hundreds > (0)))?[cljs.core.str(cljs.core.nth.call(null,cljs.pprint.english_cardinal_units,hundreds)),cljs.core.str(" hundred")].join(''):null)),cljs.core.str(((((hundreds > (0))) && ((tens > (0))))?" ":null)),cljs.core.str((((tens > (0)))?(((tens < (20)))?cljs.core.nth.call(null,cljs.pprint.english_cardinal_units,tens):(function (){var ten_digit = cljs.core.quot.call(null,tens,(10));
var unit_digit = cljs.core.rem.call(null,tens,(10));
return [cljs.core.str((((ten_digit > (0)))?cljs.core.nth.call(null,cljs.pprint.english_cardinal_tens,ten_digit):null)),cljs.core.str(((((ten_digit > (0))) && ((unit_digit > (0))))?"-":null)),cljs.core.str((((unit_digit > (0)))?cljs.core.nth.call(null,cljs.pprint.english_cardinal_units,unit_digit):null))].join('');
})()):null))].join('');
});
/**
 * Take a sequence of parts, add scale numbers (e.g., million) and combine into a string
 *   offset is a factor of 10^3 to multiply by
 */
cljs.pprint.add_english_scales = (function cljs$pprint$add_english_scales(parts,offset){
var cnt = cljs.core.count.call(null,parts);
var acc = cljs.core.PersistentVector.EMPTY;
var pos = (cnt - (1));
var this$ = cljs.core.first.call(null,parts);
var remainder = cljs.core.next.call(null,parts);
while(true){
if((remainder == null)){
return [cljs.core.str(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,", ",acc))),cljs.core.str((((!(cljs.core.empty_QMARK_.call(null,this$))) && (!(cljs.core.empty_QMARK_.call(null,acc))))?", ":null)),cljs.core.str(this$),cljs.core.str((((!(cljs.core.empty_QMARK_.call(null,this$))) && (((pos + offset) > (0))))?[cljs.core.str(" "),cljs.core.str(cljs.core.nth.call(null,cljs.pprint.english_scale_numbers,(pos + offset)))].join(''):null))].join('');
} else {
var G__12477 = ((cljs.core.empty_QMARK_.call(null,this$))?acc:cljs.core.conj.call(null,acc,[cljs.core.str(this$),cljs.core.str(" "),cljs.core.str(cljs.core.nth.call(null,cljs.pprint.english_scale_numbers,(pos + offset)))].join('')));
var G__12478 = (pos - (1));
var G__12479 = cljs.core.first.call(null,remainder);
var G__12480 = cljs.core.next.call(null,remainder);
acc = G__12477;
pos = G__12478;
this$ = G__12479;
remainder = G__12480;
continue;
}
break;
}
});
cljs.pprint.format_cardinal_english = (function cljs$pprint$format_cardinal_english(params,navigator,offsets){
var vec__12482 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__12482,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__12482,(1),null);
if(cljs.core._EQ_.call(null,(0),arg)){
cljs.pprint.print.call(null,"zero");
} else {
var abs_arg_12483 = (((arg < (0)))?(- arg):arg);
var parts_12484 = cljs.pprint.remainders.call(null,(1000),abs_arg_12483);
if((cljs.core.count.call(null,parts_12484) <= cljs.core.count.call(null,cljs.pprint.english_scale_numbers))){
var parts_strs_12485 = cljs.core.map.call(null,cljs.pprint.format_simple_cardinal,parts_12484);
var full_str_12486 = cljs.pprint.add_english_scales.call(null,parts_strs_12485,(0));
cljs.pprint.print.call(null,[cljs.core.str((((arg < (0)))?"minus ":null)),cljs.core.str(full_str_12486)].join(''));
} else {
cljs.pprint.format_integer.call(null,(10),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$mincol,(0),cljs.core.cst$kw$padchar," ",cljs.core.cst$kw$commachar,",",cljs.core.cst$kw$commainterval,(3),cljs.core.cst$kw$colon,true], null),cljs.pprint.init_navigator.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$mincol,(0),cljs.core.cst$kw$padchar,(0),cljs.core.cst$kw$commachar,(0),cljs.core.cst$kw$commainterval,(0)], null));
}
}

return navigator__$1;
});
/**
 * Convert a number less than 1000 to a ordinal english string
 *   Note this should only be used for the last one in the sequence
 */
cljs.pprint.format_simple_ordinal = (function cljs$pprint$format_simple_ordinal(num){
var hundreds = cljs.core.quot.call(null,num,(100));
var tens = cljs.core.rem.call(null,num,(100));
return [cljs.core.str((((hundreds > (0)))?[cljs.core.str(cljs.core.nth.call(null,cljs.pprint.english_cardinal_units,hundreds)),cljs.core.str(" hundred")].join(''):null)),cljs.core.str(((((hundreds > (0))) && ((tens > (0))))?" ":null)),cljs.core.str((((tens > (0)))?(((tens < (20)))?cljs.core.nth.call(null,cljs.pprint.english_ordinal_units,tens):(function (){var ten_digit = cljs.core.quot.call(null,tens,(10));
var unit_digit = cljs.core.rem.call(null,tens,(10));
if(((ten_digit > (0))) && (!((unit_digit > (0))))){
return cljs.core.nth.call(null,cljs.pprint.english_ordinal_tens,ten_digit);
} else {
return [cljs.core.str((((ten_digit > (0)))?cljs.core.nth.call(null,cljs.pprint.english_cardinal_tens,ten_digit):null)),cljs.core.str(((((ten_digit > (0))) && ((unit_digit > (0))))?"-":null)),cljs.core.str((((unit_digit > (0)))?cljs.core.nth.call(null,cljs.pprint.english_ordinal_units,unit_digit):null))].join('');
}
})()):(((hundreds > (0)))?"th":null)))].join('');
});
cljs.pprint.format_ordinal_english = (function cljs$pprint$format_ordinal_english(params,navigator,offsets){
var vec__12488 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__12488,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__12488,(1),null);
if(cljs.core._EQ_.call(null,(0),arg)){
cljs.pprint.print.call(null,"zeroth");
} else {
var abs_arg_12489 = (((arg < (0)))?(- arg):arg);
var parts_12490 = cljs.pprint.remainders.call(null,(1000),abs_arg_12489);
if((cljs.core.count.call(null,parts_12490) <= cljs.core.count.call(null,cljs.pprint.english_scale_numbers))){
var parts_strs_12491 = cljs.core.map.call(null,cljs.pprint.format_simple_cardinal,cljs.core.drop_last.call(null,parts_12490));
var head_str_12492 = cljs.pprint.add_english_scales.call(null,parts_strs_12491,(1));
var tail_str_12493 = cljs.pprint.format_simple_ordinal.call(null,cljs.core.last.call(null,parts_12490));
cljs.pprint.print.call(null,[cljs.core.str((((arg < (0)))?"minus ":null)),cljs.core.str((((!(cljs.core.empty_QMARK_.call(null,head_str_12492))) && (!(cljs.core.empty_QMARK_.call(null,tail_str_12493))))?[cljs.core.str(head_str_12492),cljs.core.str(", "),cljs.core.str(tail_str_12493)].join(''):((!(cljs.core.empty_QMARK_.call(null,head_str_12492)))?[cljs.core.str(head_str_12492),cljs.core.str("th")].join(''):tail_str_12493
)))].join(''));
} else {
cljs.pprint.format_integer.call(null,(10),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$mincol,(0),cljs.core.cst$kw$padchar," ",cljs.core.cst$kw$commachar,",",cljs.core.cst$kw$commainterval,(3),cljs.core.cst$kw$colon,true], null),cljs.pprint.init_navigator.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$mincol,(0),cljs.core.cst$kw$padchar,(0),cljs.core.cst$kw$commachar,(0),cljs.core.cst$kw$commainterval,(0)], null));

var low_two_digits_12494 = cljs.core.rem.call(null,arg,(100));
var not_teens_12495 = (((11) < low_two_digits_12494)) || (((19) > low_two_digits_12494));
var low_digit_12496 = cljs.core.rem.call(null,low_two_digits_12494,(10));
cljs.pprint.print.call(null,((((low_digit_12496 === (1))) && (not_teens_12495))?"st":((((low_digit_12496 === (2))) && (not_teens_12495))?"nd":((((low_digit_12496 === (3))) && (not_teens_12495))?"rd":"th"
))));
}
}

return navigator__$1;
});
cljs.pprint.old_roman_table = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["I","II","III","IIII","V","VI","VII","VIII","VIIII"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","XX","XXX","XXXX","L","LX","LXX","LXXX","LXXXX"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["C","CC","CCC","CCCC","D","DC","DCC","DCCC","DCCCC"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M","MM","MMM"], null)], null);
cljs.pprint.new_roman_table = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["I","II","III","IV","V","VI","VII","VIII","IX"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","XX","XXX","XL","L","LX","LXX","LXXX","XC"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["C","CC","CCC","CD","D","DC","DCC","DCCC","CM"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M","MM","MMM"], null)], null);
/**
 * Format a roman numeral using the specified look-up table
 */
cljs.pprint.format_roman = (function cljs$pprint$format_roman(table,params,navigator,offsets){
var vec__12498 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__12498,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__12498,(1),null);
if((typeof arg === 'number') && ((arg > (0))) && ((arg < (4000)))){
var digits_12499 = cljs.pprint.remainders.call(null,(10),arg);
var acc_12500 = cljs.core.PersistentVector.EMPTY;
var pos_12501 = (cljs.core.count.call(null,digits_12499) - (1));
var digits_12502__$1 = digits_12499;
while(true){
if(cljs.core.empty_QMARK_.call(null,digits_12502__$1)){
cljs.pprint.print.call(null,cljs.core.apply.call(null,cljs.core.str,acc_12500));
} else {
var digit_12503 = cljs.core.first.call(null,digits_12502__$1);
var G__12504 = ((cljs.core._EQ_.call(null,(0),digit_12503))?acc_12500:cljs.core.conj.call(null,acc_12500,cljs.core.nth.call(null,cljs.core.nth.call(null,table,pos_12501),(digit_12503 - (1)))));
var G__12505 = (pos_12501 - (1));
var G__12506 = cljs.core.next.call(null,digits_12502__$1);
acc_12500 = G__12504;
pos_12501 = G__12505;
digits_12502__$1 = G__12506;
continue;
}
break;
}
} else {
cljs.pprint.format_integer.call(null,(10),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$mincol,(0),cljs.core.cst$kw$padchar," ",cljs.core.cst$kw$commachar,",",cljs.core.cst$kw$commainterval,(3),cljs.core.cst$kw$colon,true], null),cljs.pprint.init_navigator.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$mincol,(0),cljs.core.cst$kw$padchar,(0),cljs.core.cst$kw$commachar,(0),cljs.core.cst$kw$commainterval,(0)], null));
}

return navigator__$1;
});
cljs.pprint.format_old_roman = (function cljs$pprint$format_old_roman(params,navigator,offsets){
return cljs.pprint.format_roman.call(null,cljs.pprint.old_roman_table,params,navigator,offsets);
});
cljs.pprint.format_new_roman = (function cljs$pprint$format_new_roman(params,navigator,offsets){
return cljs.pprint.format_roman.call(null,cljs.pprint.new_roman_table,params,navigator,offsets);
});
cljs.pprint.special_chars = new cljs.core.PersistentArrayMap(null, 5, [(8),"Backspace",(9),"Tab",(10),"Newline",(13),"Return",(32),"Space"], null);
cljs.pprint.pretty_character = (function cljs$pprint$pretty_character(params,navigator,offsets){
var vec__12508 = cljs.pprint.next_arg.call(null,navigator);
var c = cljs.core.nth.call(null,vec__12508,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__12508,(1),null);
var as_int = cljs.pprint.char_code.call(null,c);
var base_char = (as_int & (127));
var meta = (as_int & (128));
var special = cljs.core.get.call(null,cljs.pprint.special_chars,base_char);
if((meta > (0))){
cljs.pprint.print.call(null,"Meta-");
} else {
}

cljs.pprint.print.call(null,(cljs.core.truth_(special)?special:(((base_char < (32)))?[cljs.core.str("Control-"),cljs.core.str(cljs.core.char$.call(null,(base_char + (64))))].join(''):((cljs.core._EQ_.call(null,base_char,(127)))?"Control-?":cljs.core.char$.call(null,base_char)
))));

return navigator__$1;
});
cljs.pprint.readable_character = (function cljs$pprint$readable_character(params,navigator,offsets){
var vec__12513 = cljs.pprint.next_arg.call(null,navigator);
var c = cljs.core.nth.call(null,vec__12513,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__12513,(1),null);
var pred__12514_12517 = cljs.core._EQ_;
var expr__12515_12518 = cljs.core.cst$kw$char_DASH_format.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(pred__12514_12517.call(null,"o",expr__12515_12518))){
cljs.pprint.cl_format.call(null,true,"\\o~3, '0o",cljs.pprint.char_code.call(null,c));
} else {
if(cljs.core.truth_(pred__12514_12517.call(null,"u",expr__12515_12518))){
cljs.pprint.cl_format.call(null,true,"\\u~4, '0x",cljs.pprint.char_code.call(null,c));
} else {
if(cljs.core.truth_(pred__12514_12517.call(null,null,expr__12515_12518))){
cljs.pprint.print_char.call(null,c);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__12515_12518)].join('')));
}
}
}

return navigator__$1;
});
cljs.pprint.plain_character = (function cljs$pprint$plain_character(params,navigator,offsets){
var vec__12520 = cljs.pprint.next_arg.call(null,navigator);
var char$ = cljs.core.nth.call(null,vec__12520,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__12520,(1),null);
cljs.pprint.print.call(null,char$);

return navigator__$1;
});
cljs.pprint.abort_QMARK_ = (function cljs$pprint$abort_QMARK_(context){
var token = cljs.core.first.call(null,context);
return (cljs.core._EQ_.call(null,cljs.core.cst$kw$up_DASH_arrow,token)) || (cljs.core._EQ_.call(null,cljs.core.cst$kw$colon_DASH_up_DASH_arrow,token));
});
cljs.pprint.execute_sub_format = (function cljs$pprint$execute_sub_format(format,args,base_args){
return cljs.core.second.call(null,cljs.pprint.map_passing_context.call(null,(function (element,context){
if(cljs.core.truth_(cljs.pprint.abort_QMARK_.call(null,context))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,context], null);
} else {
var vec__12523 = cljs.pprint.realize_parameter_list.call(null,cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(element),context);
var params = cljs.core.nth.call(null,vec__12523,(0),null);
var args__$1 = cljs.core.nth.call(null,vec__12523,(1),null);
var vec__12524 = cljs.pprint.unzip_map.call(null,params);
var params__$1 = cljs.core.nth.call(null,vec__12524,(0),null);
var offsets = cljs.core.nth.call(null,vec__12524,(1),null);
var params__$2 = cljs.core.assoc.call(null,params__$1,cljs.core.cst$kw$base_DASH_args,base_args);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.apply.call(null,cljs.core.cst$kw$func.cljs$core$IFn$_invoke$arity$1(element),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [params__$2,args__$1,offsets], null))], null);
}
}),args,format));
});
/**
 * Produce string parts for the mantissa (normalize 1-9) and exponent
 */
cljs.pprint.float_parts_base = (function cljs$pprint$float_parts_base(f){
var s = clojure.string.lower_case.call(null,[cljs.core.str(f)].join(''));
var exploc = s.indexOf("e");
var dotloc = s.indexOf(".");
if((exploc < (0))){
if((dotloc < (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,[cljs.core.str((cljs.core.count.call(null,s) - (1)))].join('')], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(cljs.core.subs.call(null,s,(0),dotloc)),cljs.core.str(cljs.core.subs.call(null,s,(dotloc + (1))))].join(''),[cljs.core.str((dotloc - (1)))].join('')], null);
}
} else {
if((dotloc < (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,s,(0),exploc),cljs.core.subs.call(null,s,(exploc + (1)))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(cljs.core.subs.call(null,s,(0),(1))),cljs.core.str(cljs.core.subs.call(null,s,(2),exploc))].join(''),cljs.core.subs.call(null,s,(exploc + (1)))], null);
}
}
});
/**
 * Take care of leading and trailing zeros in decomposed floats
 */
cljs.pprint.float_parts = (function cljs$pprint$float_parts(f){
var vec__12526 = cljs.pprint.float_parts_base.call(null,f);
var m = cljs.core.nth.call(null,vec__12526,(0),null);
var e = cljs.core.nth.call(null,vec__12526,(1),null);
var m1 = cljs.pprint.rtrim.call(null,m,"0");
var m2 = cljs.pprint.ltrim.call(null,m1,"0");
var delta = (cljs.core.count.call(null,m1) - cljs.core.count.call(null,m2));
var e__$1 = ((((cljs.core.count.call(null,e) > (0))) && (cljs.core._EQ_.call(null,cljs.core.nth.call(null,e,(0)),"+")))?cljs.core.subs.call(null,e,(1)):e);
if(cljs.core.empty_QMARK_.call(null,m2)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["0",(0)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m2,(parseInt(e__$1,(10)) - delta)], null);
}
});
/**
 * Assumption: The input string consists of one or more decimal digits,
 *   and no other characters. Return a string containing one or more
 *   decimal digits containing a decimal number one larger than the input
 *   string. The output string will always be the same length as the input
 *   string, or one character longer.
 */
cljs.pprint.inc_s = (function cljs$pprint$inc_s(s){
var len_1 = (cljs.core.count.call(null,s) - (1));
var i = (len_1 | (0));
while(true){
if((i < (0))){
return cljs.core.apply.call(null,cljs.core.str,"1",cljs.core.repeat.call(null,(len_1 + (1)),"0"));
} else {
if(cljs.core._EQ_.call(null,"9",s.charAt(i))){
var G__12527 = (i - (1));
i = G__12527;
continue;
} else {
return cljs.core.apply.call(null,cljs.core.str,cljs.core.subs.call(null,s,(0),i),cljs.core.char$.call(null,(cljs.pprint.char_code.call(null,s.charAt(i)) + (1))),cljs.core.repeat.call(null,(len_1 - i),"0"));

}
}
break;
}
});
cljs.pprint.round_str = (function cljs$pprint$round_str(m,e,d,w){
if(cljs.core.truth_((function (){var or__6210__auto__ = d;
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return w;
}
})())){
var len = cljs.core.count.call(null,m);
var w__$1 = (cljs.core.truth_(w)?(function (){var x__6541__auto__ = (2);
var y__6542__auto__ = w;
return ((x__6541__auto__ > y__6542__auto__) ? x__6541__auto__ : y__6542__auto__);
})():(0));
var round_pos = (cljs.core.truth_(d)?((e + d) + (1)):(((e >= (0)))?(function (){var x__6541__auto__ = (e + (1));
var y__6542__auto__ = (w__$1 - (1));
return ((x__6541__auto__ > y__6542__auto__) ? x__6541__auto__ : y__6542__auto__);
})():(w__$1 + e)
));
var vec__12529 = ((cljs.core._EQ_.call(null,round_pos,(0)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("0"),cljs.core.str(m)].join(''),(e + (1)),(1),(len + (1))], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,round_pos,len], null));
var m1 = cljs.core.nth.call(null,vec__12529,(0),null);
var e1 = cljs.core.nth.call(null,vec__12529,(1),null);
var round_pos__$1 = cljs.core.nth.call(null,vec__12529,(2),null);
var len__$1 = cljs.core.nth.call(null,vec__12529,(3),null);
if(cljs.core.truth_(round_pos__$1)){
if((round_pos__$1 < (0))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["0",(0),false], null);
} else {
if((len__$1 > round_pos__$1)){
var round_char = cljs.core.nth.call(null,m1,round_pos__$1);
var result = cljs.core.subs.call(null,m1,(0),round_pos__$1);
if((cljs.pprint.char_code.call(null,round_char) >= cljs.pprint.char_code.call(null,"5"))){
var round_up_result = cljs.pprint.inc_s.call(null,result);
var expanded = (cljs.core.count.call(null,round_up_result) > cljs.core.count.call(null,result));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((expanded)?cljs.core.subs.call(null,round_up_result,(0),(cljs.core.count.call(null,round_up_result) - (1))):round_up_result),e1,expanded], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,e1,false], null);
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,false], null);
}
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,false], null);
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,false], null);
}
});
cljs.pprint.expand_fixed = (function cljs$pprint$expand_fixed(m,e,d){
var vec__12531 = (((e < (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,((- e) - (1)),"0"))),cljs.core.str(m)].join(''),(-1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e], null));
var m1 = cljs.core.nth.call(null,vec__12531,(0),null);
var e1 = cljs.core.nth.call(null,vec__12531,(1),null);
var len = cljs.core.count.call(null,m1);
var target_len = (cljs.core.truth_(d)?((e1 + d) + (1)):(e1 + (1)));
if((len < target_len)){
return [cljs.core.str(m1),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(target_len - len),"0")))].join('');
} else {
return m1;
}
});
/**
 * Insert the decimal point at the right spot in the number to match an exponent
 */
cljs.pprint.insert_decimal = (function cljs$pprint$insert_decimal(m,e){
if((e < (0))){
return [cljs.core.str("."),cljs.core.str(m)].join('');
} else {
var loc = (e + (1));
return [cljs.core.str(cljs.core.subs.call(null,m,(0),loc)),cljs.core.str("."),cljs.core.str(cljs.core.subs.call(null,m,loc))].join('');
}
});
cljs.pprint.get_fixed = (function cljs$pprint$get_fixed(m,e,d){
return cljs.pprint.insert_decimal.call(null,cljs.pprint.expand_fixed.call(null,m,e,d),e);
});
/**
 * Insert the decimal point at the right spot in the number to match an exponent
 */
cljs.pprint.insert_scaled_decimal = (function cljs$pprint$insert_scaled_decimal(m,k){
if((k < (0))){
return [cljs.core.str("."),cljs.core.str(m)].join('');
} else {
return [cljs.core.str(cljs.core.subs.call(null,m,(0),k)),cljs.core.str("."),cljs.core.str(cljs.core.subs.call(null,m,k))].join('');
}
});
cljs.pprint.convert_ratio = (function cljs$pprint$convert_ratio(x){
return x;
});
cljs.pprint.fixed_float = (function cljs$pprint$fixed_float(params,navigator,offsets){
var w = cljs.core.cst$kw$w.cljs$core$IFn$_invoke$arity$1(params);
var d = cljs.core.cst$kw$d.cljs$core$IFn$_invoke$arity$1(params);
var vec__12536 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__12536,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__12536,(1),null);
var vec__12537 = (((arg < (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-",(- arg)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["+",arg], null));
var sign = cljs.core.nth.call(null,vec__12537,(0),null);
var abs = cljs.core.nth.call(null,vec__12537,(1),null);
var abs__$1 = cljs.pprint.convert_ratio.call(null,abs);
var vec__12538 = cljs.pprint.float_parts.call(null,abs__$1);
var mantissa = cljs.core.nth.call(null,vec__12538,(0),null);
var exp = cljs.core.nth.call(null,vec__12538,(1),null);
var scaled_exp = (exp + cljs.core.cst$kw$k.cljs$core$IFn$_invoke$arity$1(params));
var add_sign = (function (){var or__6210__auto__ = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return (arg < (0));
}
})();
var append_zero = (cljs.core.not.call(null,d)) && (((cljs.core.count.call(null,mantissa) - (1)) <= scaled_exp));
var vec__12539 = cljs.pprint.round_str.call(null,mantissa,scaled_exp,d,(cljs.core.truth_(w)?(w - (cljs.core.truth_(add_sign)?(1):(0))):null));
var rounded_mantissa = cljs.core.nth.call(null,vec__12539,(0),null);
var scaled_exp__$1 = cljs.core.nth.call(null,vec__12539,(1),null);
var expanded = cljs.core.nth.call(null,vec__12539,(2),null);
var fixed_repr = cljs.pprint.get_fixed.call(null,rounded_mantissa,(cljs.core.truth_(expanded)?(scaled_exp__$1 + (1)):scaled_exp__$1),d);
var fixed_repr__$1 = (cljs.core.truth_((function (){var and__6198__auto__ = w;
if(cljs.core.truth_(and__6198__auto__)){
var and__6198__auto____$1 = d;
if(cljs.core.truth_(and__6198__auto____$1)){
return ((d >= (1))) && (cljs.core._EQ_.call(null,fixed_repr.charAt((0)),"0")) && (cljs.core._EQ_.call(null,fixed_repr.charAt((1)),".")) && ((cljs.core.count.call(null,fixed_repr) > (w - (cljs.core.truth_(add_sign)?(1):(0)))));
} else {
return and__6198__auto____$1;
}
} else {
return and__6198__auto__;
}
})())?cljs.core.subs.call(null,fixed_repr,(1)):fixed_repr);
var prepend_zero = cljs.core._EQ_.call(null,cljs.core.first.call(null,fixed_repr__$1),".");
if(cljs.core.truth_(w)){
var len_12540 = cljs.core.count.call(null,fixed_repr__$1);
var signed_len_12541 = (cljs.core.truth_(add_sign)?(len_12540 + (1)):len_12540);
var prepend_zero_12542__$1 = (prepend_zero) && (!((signed_len_12541 >= w)));
var append_zero_12543__$1 = (append_zero) && (!((signed_len_12541 >= w)));
var full_len_12544 = (((prepend_zero_12542__$1) || (append_zero_12543__$1))?(signed_len_12541 + (1)):signed_len_12541);
if(cljs.core.truth_((function (){var and__6198__auto__ = (full_len_12544 > w);
if(and__6198__auto__){
return cljs.core.cst$kw$overflowchar.cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__6198__auto__;
}
})())){
cljs.pprint.print.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,w,cljs.core.cst$kw$overflowchar.cljs$core$IFn$_invoke$arity$1(params))));
} else {
cljs.pprint.print.call(null,[cljs.core.str(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(w - full_len_12544),cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str((cljs.core.truth_(add_sign)?sign:null)),cljs.core.str(((prepend_zero_12542__$1)?"0":null)),cljs.core.str(fixed_repr__$1),cljs.core.str(((append_zero_12543__$1)?"0":null))].join(''));
}
} else {
cljs.pprint.print.call(null,[cljs.core.str((cljs.core.truth_(add_sign)?sign:null)),cljs.core.str(((prepend_zero)?"0":null)),cljs.core.str(fixed_repr__$1),cljs.core.str(((append_zero)?"0":null))].join(''));
}

return navigator__$1;
});
cljs.pprint.exponential_float = (function cljs$pprint$exponential_float(params,navigator,offset){
var vec__12551 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__12551,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__12551,(1),null);
var arg__$1 = cljs.pprint.convert_ratio.call(null,arg);
var G__12553_12557 = cljs.pprint.float_parts.call(null,(((arg__$1 < (0)))?(- arg__$1):arg__$1));
var vec__12554_12558 = G__12553_12557;
var mantissa_12559 = cljs.core.nth.call(null,vec__12554_12558,(0),null);
var exp_12560 = cljs.core.nth.call(null,vec__12554_12558,(1),null);
var G__12553_12561__$1 = G__12553_12557;
while(true){
var vec__12555_12562 = G__12553_12561__$1;
var mantissa_12563__$1 = cljs.core.nth.call(null,vec__12555_12562,(0),null);
var exp_12564__$1 = cljs.core.nth.call(null,vec__12555_12562,(1),null);
var w_12565 = cljs.core.cst$kw$w.cljs$core$IFn$_invoke$arity$1(params);
var d_12566 = cljs.core.cst$kw$d.cljs$core$IFn$_invoke$arity$1(params);
var e_12567 = cljs.core.cst$kw$e.cljs$core$IFn$_invoke$arity$1(params);
var k_12568 = cljs.core.cst$kw$k.cljs$core$IFn$_invoke$arity$1(params);
var expchar_12569 = (function (){var or__6210__auto__ = cljs.core.cst$kw$exponentchar.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return "E";
}
})();
var add_sign_12570 = (function (){var or__6210__auto__ = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return (arg__$1 < (0));
}
})();
var prepend_zero_12571 = (k_12568 <= (0));
var scaled_exp_12572 = (exp_12564__$1 - (k_12568 - (1)));
var scaled_exp_str_12573 = [cljs.core.str(Math.abs(scaled_exp_12572))].join('');
var scaled_exp_str_12574__$1 = [cljs.core.str(expchar_12569),cljs.core.str((((scaled_exp_12572 < (0)))?"-":"+")),cljs.core.str((cljs.core.truth_(e_12567)?cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(e_12567 - cljs.core.count.call(null,scaled_exp_str_12573)),"0")):null)),cljs.core.str(scaled_exp_str_12573)].join('');
var exp_width_12575 = cljs.core.count.call(null,scaled_exp_str_12574__$1);
var base_mantissa_width_12576 = cljs.core.count.call(null,mantissa_12563__$1);
var scaled_mantissa_12577 = [cljs.core.str(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(- k_12568),"0"))),cljs.core.str(mantissa_12563__$1),cljs.core.str((cljs.core.truth_(d_12566)?cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,((d_12566 - (base_mantissa_width_12576 - (1))) - (((k_12568 < (0)))?(- k_12568):(0))),"0")):null))].join('');
var w_mantissa_12578 = (cljs.core.truth_(w_12565)?(w_12565 - exp_width_12575):null);
var vec__12556_12579 = cljs.pprint.round_str.call(null,scaled_mantissa_12577,(0),((cljs.core._EQ_.call(null,k_12568,(0)))?(d_12566 - (1)):(((k_12568 > (0)))?d_12566:(((k_12568 < (0)))?(d_12566 - (1)):null))),(cljs.core.truth_(w_mantissa_12578)?(w_mantissa_12578 - (cljs.core.truth_(add_sign_12570)?(1):(0))):null));
var rounded_mantissa_12580 = cljs.core.nth.call(null,vec__12556_12579,(0),null);
var __12581 = cljs.core.nth.call(null,vec__12556_12579,(1),null);
var incr_exp_12582 = cljs.core.nth.call(null,vec__12556_12579,(2),null);
var full_mantissa_12583 = cljs.pprint.insert_scaled_decimal.call(null,rounded_mantissa_12580,k_12568);
var append_zero_12584 = (cljs.core._EQ_.call(null,k_12568,cljs.core.count.call(null,rounded_mantissa_12580))) && ((d_12566 == null));
if(cljs.core.not.call(null,incr_exp_12582)){
if(cljs.core.truth_(w_12565)){
var len_12585 = (cljs.core.count.call(null,full_mantissa_12583) + exp_width_12575);
var signed_len_12586 = (cljs.core.truth_(add_sign_12570)?(len_12585 + (1)):len_12585);
var prepend_zero_12587__$1 = (prepend_zero_12571) && (!(cljs.core._EQ_.call(null,signed_len_12586,w_12565)));
var full_len_12588 = ((prepend_zero_12587__$1)?(signed_len_12586 + (1)):signed_len_12586);
var append_zero_12589__$1 = (append_zero_12584) && ((full_len_12588 < w_12565));
if(cljs.core.truth_((function (){var and__6198__auto__ = (function (){var or__6210__auto__ = (full_len_12588 > w_12565);
if(or__6210__auto__){
return or__6210__auto__;
} else {
var and__6198__auto__ = e_12567;
if(cljs.core.truth_(and__6198__auto__)){
return ((exp_width_12575 - (2)) > e_12567);
} else {
return and__6198__auto__;
}
}
})();
if(cljs.core.truth_(and__6198__auto__)){
return cljs.core.cst$kw$overflowchar.cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__6198__auto__;
}
})())){
cljs.pprint.print.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,w_12565,cljs.core.cst$kw$overflowchar.cljs$core$IFn$_invoke$arity$1(params))));
} else {
cljs.pprint.print.call(null,[cljs.core.str(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,((w_12565 - full_len_12588) - ((append_zero_12589__$1)?(1):(0))),cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str((cljs.core.truth_(add_sign_12570)?(((arg__$1 < (0)))?"-":"+"):null)),cljs.core.str(((prepend_zero_12587__$1)?"0":null)),cljs.core.str(full_mantissa_12583),cljs.core.str(((append_zero_12589__$1)?"0":null)),cljs.core.str(scaled_exp_str_12574__$1)].join(''));
}
} else {
cljs.pprint.print.call(null,[cljs.core.str((cljs.core.truth_(add_sign_12570)?(((arg__$1 < (0)))?"-":"+"):null)),cljs.core.str(((prepend_zero_12571)?"0":null)),cljs.core.str(full_mantissa_12583),cljs.core.str(((append_zero_12584)?"0":null)),cljs.core.str(scaled_exp_str_12574__$1)].join(''));
}
} else {
var G__12590 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rounded_mantissa_12580,(exp_12564__$1 + (1))], null);
G__12553_12561__$1 = G__12590;
continue;
}
break;
}

return navigator__$1;
});
cljs.pprint.general_float = (function cljs$pprint$general_float(params,navigator,offsets){
var vec__12593 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__12593,(0),null);
var _ = cljs.core.nth.call(null,vec__12593,(1),null);
var arg__$1 = cljs.pprint.convert_ratio.call(null,arg);
var vec__12594 = cljs.pprint.float_parts.call(null,(((arg__$1 < (0)))?(- arg__$1):arg__$1));
var mantissa = cljs.core.nth.call(null,vec__12594,(0),null);
var exp = cljs.core.nth.call(null,vec__12594,(1),null);
var w = cljs.core.cst$kw$w.cljs$core$IFn$_invoke$arity$1(params);
var d = cljs.core.cst$kw$d.cljs$core$IFn$_invoke$arity$1(params);
var e = cljs.core.cst$kw$e.cljs$core$IFn$_invoke$arity$1(params);
var n = ((cljs.core._EQ_.call(null,arg__$1,0.0))?(0):(exp + (1)));
var ee = (cljs.core.truth_(e)?(e + (2)):(4));
var ww = (cljs.core.truth_(w)?(w - ee):null);
var d__$1 = (cljs.core.truth_(d)?d:(function (){var x__6541__auto__ = cljs.core.count.call(null,mantissa);
var y__6542__auto__ = (function (){var x__6548__auto__ = n;
var y__6549__auto__ = (7);
return ((x__6548__auto__ < y__6549__auto__) ? x__6548__auto__ : y__6549__auto__);
})();
return ((x__6541__auto__ > y__6542__auto__) ? x__6541__auto__ : y__6542__auto__);
})());
var dd = (d__$1 - n);
if((((0) <= dd)) && ((dd <= d__$1))){
var navigator__$1 = cljs.pprint.fixed_float.call(null,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$w,ww,cljs.core.cst$kw$d,dd,cljs.core.cst$kw$k,(0),cljs.core.cst$kw$overflowchar,cljs.core.cst$kw$overflowchar.cljs$core$IFn$_invoke$arity$1(params),cljs.core.cst$kw$padchar,cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params),cljs.core.cst$kw$at,cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params)], null),navigator,offsets);
cljs.pprint.print.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,ee," ")));

return navigator__$1;
} else {
return cljs.pprint.exponential_float.call(null,params,navigator,offsets);
}
});
cljs.pprint.dollar_float = (function cljs$pprint$dollar_float(params,navigator,offsets){
var vec__12598 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__12598,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__12598,(1),null);
var vec__12599 = cljs.pprint.float_parts.call(null,Math.abs(arg));
var mantissa = cljs.core.nth.call(null,vec__12599,(0),null);
var exp = cljs.core.nth.call(null,vec__12599,(1),null);
var d = cljs.core.cst$kw$d.cljs$core$IFn$_invoke$arity$1(params);
var n = cljs.core.cst$kw$n.cljs$core$IFn$_invoke$arity$1(params);
var w = cljs.core.cst$kw$w.cljs$core$IFn$_invoke$arity$1(params);
var add_sign = (function (){var or__6210__auto__ = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return (arg < (0));
}
})();
var vec__12600 = cljs.pprint.round_str.call(null,mantissa,exp,d,null);
var rounded_mantissa = cljs.core.nth.call(null,vec__12600,(0),null);
var scaled_exp = cljs.core.nth.call(null,vec__12600,(1),null);
var expanded = cljs.core.nth.call(null,vec__12600,(2),null);
var fixed_repr = cljs.pprint.get_fixed.call(null,rounded_mantissa,(cljs.core.truth_(expanded)?(scaled_exp + (1)):scaled_exp),d);
var full_repr = [cljs.core.str(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(n - fixed_repr.indexOf(".")),"0"))),cljs.core.str(fixed_repr)].join('');
var full_len = (cljs.core.count.call(null,full_repr) + (cljs.core.truth_(add_sign)?(1):(0)));
cljs.pprint.print.call(null,[cljs.core.str((cljs.core.truth_((function (){var and__6198__auto__ = cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__6198__auto__)){
return add_sign;
} else {
return and__6198__auto__;
}
})())?(((arg < (0)))?"-":"+"):null)),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(w - full_len),cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str((cljs.core.truth_((function (){var and__6198__auto__ = cljs.core.not.call(null,cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params));
if(and__6198__auto__){
return add_sign;
} else {
return and__6198__auto__;
}
})())?(((arg < (0)))?"-":"+"):null)),cljs.core.str(full_repr)].join(''));

return navigator__$1;
});
cljs.pprint.choice_conditional = (function cljs$pprint$choice_conditional(params,arg_navigator,offsets){
var arg = cljs.core.cst$kw$selector.cljs$core$IFn$_invoke$arity$1(params);
var vec__12602 = (cljs.core.truth_(arg)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg,arg_navigator], null):cljs.pprint.next_arg.call(null,arg_navigator));
var arg__$1 = cljs.core.nth.call(null,vec__12602,(0),null);
var navigator = cljs.core.nth.call(null,vec__12602,(1),null);
var clauses = cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params);
var clause = ((((arg__$1 < (0))) || ((arg__$1 >= cljs.core.count.call(null,clauses))))?cljs.core.first.call(null,cljs.core.cst$kw$else.cljs$core$IFn$_invoke$arity$1(params)):cljs.core.nth.call(null,clauses,arg__$1));
if(cljs.core.truth_(clause)){
return cljs.pprint.execute_sub_format.call(null,clause,navigator,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
} else {
return navigator;
}
});
cljs.pprint.boolean_conditional = (function cljs$pprint$boolean_conditional(params,arg_navigator,offsets){
var vec__12604 = cljs.pprint.next_arg.call(null,arg_navigator);
var arg = cljs.core.nth.call(null,vec__12604,(0),null);
var navigator = cljs.core.nth.call(null,vec__12604,(1),null);
var clauses = cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params);
var clause = (cljs.core.truth_(arg)?cljs.core.second.call(null,clauses):cljs.core.first.call(null,clauses));
if(cljs.core.truth_(clause)){
return cljs.pprint.execute_sub_format.call(null,clause,navigator,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
} else {
return navigator;
}
});
cljs.pprint.check_arg_conditional = (function cljs$pprint$check_arg_conditional(params,arg_navigator,offsets){
var vec__12606 = cljs.pprint.next_arg.call(null,arg_navigator);
var arg = cljs.core.nth.call(null,vec__12606,(0),null);
var navigator = cljs.core.nth.call(null,vec__12606,(1),null);
var clauses = cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params);
var clause = (cljs.core.truth_(arg)?cljs.core.first.call(null,clauses):null);
if(cljs.core.truth_(arg)){
if(cljs.core.truth_(clause)){
return cljs.pprint.execute_sub_format.call(null,clause,arg_navigator,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
} else {
return arg_navigator;
}
} else {
return navigator;
}
});
cljs.pprint.iterate_sublist = (function cljs$pprint$iterate_sublist(params,navigator,offsets){
var max_count = cljs.core.cst$kw$max_DASH_iterations.cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first.call(null,cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params));
var vec__12609 = ((cljs.core.empty_QMARK_.call(null,param_clause))?cljs.pprint.get_format_arg.call(null,navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.call(null,vec__12609,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__12609,(1),null);
var vec__12610 = cljs.pprint.next_arg.call(null,navigator__$1);
var arg_list = cljs.core.nth.call(null,vec__12610,(0),null);
var navigator__$2 = cljs.core.nth.call(null,vec__12610,(1),null);
var args = cljs.pprint.init_navigator.call(null,arg_list);
var count = (0);
var args__$1 = args;
var last_pos = ((-1) | (0));
while(true){
if((cljs.core.not.call(null,max_count)) && (cljs.core._EQ_.call(null,cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(args__$1),last_pos)) && ((count > (1)))){
throw Error("%{ construct not consuming any arguments: Infinite loop!");
} else {
}

if(cljs.core.truth_((function (){var or__6210__auto__ = (cljs.core.empty_QMARK_.call(null,cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(args__$1))) && ((cljs.core.not.call(null,cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$right_DASH_params.cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))));
if(or__6210__auto__){
return or__6210__auto__;
} else {
var and__6198__auto__ = max_count;
if(cljs.core.truth_(and__6198__auto__)){
return (count >= max_count);
} else {
return and__6198__auto__;
}
}
})())){
return navigator__$2;
} else {
var iter_result = cljs.pprint.execute_sub_format.call(null,clause,args__$1,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
if(cljs.core._EQ_.call(null,cljs.core.cst$kw$up_DASH_arrow,cljs.core.first.call(null,iter_result))){
return navigator__$2;
} else {
var G__12611 = (count + (1));
var G__12612 = iter_result;
var G__12613 = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(args__$1);
count = G__12611;
args__$1 = G__12612;
last_pos = G__12613;
continue;
}
}
break;
}
});
cljs.pprint.iterate_list_of_sublists = (function cljs$pprint$iterate_list_of_sublists(params,navigator,offsets){
var max_count = cljs.core.cst$kw$max_DASH_iterations.cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first.call(null,cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params));
var vec__12616 = ((cljs.core.empty_QMARK_.call(null,param_clause))?cljs.pprint.get_format_arg.call(null,navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.call(null,vec__12616,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__12616,(1),null);
var vec__12617 = cljs.pprint.next_arg.call(null,navigator__$1);
var arg_list = cljs.core.nth.call(null,vec__12617,(0),null);
var navigator__$2 = cljs.core.nth.call(null,vec__12617,(1),null);
var count = (0);
var arg_list__$1 = arg_list;
while(true){
if(cljs.core.truth_((function (){var or__6210__auto__ = (cljs.core.empty_QMARK_.call(null,arg_list__$1)) && ((cljs.core.not.call(null,cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$right_DASH_params.cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))));
if(or__6210__auto__){
return or__6210__auto__;
} else {
var and__6198__auto__ = max_count;
if(cljs.core.truth_(and__6198__auto__)){
return (count >= max_count);
} else {
return and__6198__auto__;
}
}
})())){
return navigator__$2;
} else {
var iter_result = cljs.pprint.execute_sub_format.call(null,clause,cljs.pprint.init_navigator.call(null,cljs.core.first.call(null,arg_list__$1)),cljs.pprint.init_navigator.call(null,cljs.core.next.call(null,arg_list__$1)));
if(cljs.core._EQ_.call(null,cljs.core.cst$kw$colon_DASH_up_DASH_arrow,cljs.core.first.call(null,iter_result))){
return navigator__$2;
} else {
var G__12618 = (count + (1));
var G__12619 = cljs.core.next.call(null,arg_list__$1);
count = G__12618;
arg_list__$1 = G__12619;
continue;
}
}
break;
}
});
cljs.pprint.iterate_main_list = (function cljs$pprint$iterate_main_list(params,navigator,offsets){
var max_count = cljs.core.cst$kw$max_DASH_iterations.cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first.call(null,cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params));
var vec__12621 = ((cljs.core.empty_QMARK_.call(null,param_clause))?cljs.pprint.get_format_arg.call(null,navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.call(null,vec__12621,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__12621,(1),null);
var count = (0);
var navigator__$2 = navigator__$1;
var last_pos = ((-1) | (0));
while(true){
if((cljs.core.not.call(null,max_count)) && (cljs.core._EQ_.call(null,cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(navigator__$2),last_pos)) && ((count > (1)))){
throw Error("%@{ construct not consuming any arguments: Infinite loop!");
} else {
}

if(cljs.core.truth_((function (){var or__6210__auto__ = (cljs.core.empty_QMARK_.call(null,cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(navigator__$2))) && ((cljs.core.not.call(null,cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$right_DASH_params.cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))));
if(or__6210__auto__){
return or__6210__auto__;
} else {
var and__6198__auto__ = max_count;
if(cljs.core.truth_(and__6198__auto__)){
return (count >= max_count);
} else {
return and__6198__auto__;
}
}
})())){
return navigator__$2;
} else {
var iter_result = cljs.pprint.execute_sub_format.call(null,clause,navigator__$2,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
if(cljs.core._EQ_.call(null,cljs.core.cst$kw$up_DASH_arrow,cljs.core.first.call(null,iter_result))){
return cljs.core.second.call(null,iter_result);
} else {
var G__12622 = (count + (1));
var G__12623 = iter_result;
var G__12624 = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(navigator__$2);
count = G__12622;
navigator__$2 = G__12623;
last_pos = G__12624;
continue;
}
}
break;
}
});
cljs.pprint.iterate_main_sublists = (function cljs$pprint$iterate_main_sublists(params,navigator,offsets){
var max_count = cljs.core.cst$kw$max_DASH_iterations.cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first.call(null,cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params));
var vec__12627 = ((cljs.core.empty_QMARK_.call(null,param_clause))?cljs.pprint.get_format_arg.call(null,navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.call(null,vec__12627,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__12627,(1),null);
var count = (0);
var navigator__$2 = navigator__$1;
while(true){
if(cljs.core.truth_((function (){var or__6210__auto__ = (cljs.core.empty_QMARK_.call(null,cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(navigator__$2))) && ((cljs.core.not.call(null,cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$right_DASH_params.cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))));
if(or__6210__auto__){
return or__6210__auto__;
} else {
var and__6198__auto__ = max_count;
if(cljs.core.truth_(and__6198__auto__)){
return (count >= max_count);
} else {
return and__6198__auto__;
}
}
})())){
return navigator__$2;
} else {
var vec__12628 = cljs.pprint.next_arg_or_nil.call(null,navigator__$2);
var sublist = cljs.core.nth.call(null,vec__12628,(0),null);
var navigator__$3 = cljs.core.nth.call(null,vec__12628,(1),null);
var iter_result = cljs.pprint.execute_sub_format.call(null,clause,cljs.pprint.init_navigator.call(null,sublist),navigator__$3);
if(cljs.core._EQ_.call(null,cljs.core.cst$kw$colon_DASH_up_DASH_arrow,cljs.core.first.call(null,iter_result))){
return navigator__$3;
} else {
var G__12629 = (count + (1));
var G__12630 = navigator__$3;
count = G__12629;
navigator__$2 = G__12630;
continue;
}
}
break;
}
});
cljs.pprint.logical_block_or_justify = (function cljs$pprint$logical_block_or_justify(params,navigator,offsets){
if(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$right_DASH_params.cljs$core$IFn$_invoke$arity$1(params)))){
return cljs.pprint.format_logical_block.call(null,params,navigator,offsets);
} else {
return cljs.pprint.justify_clauses.call(null,params,navigator,offsets);
}
});
cljs.pprint.render_clauses = (function cljs$pprint$render_clauses(clauses,navigator,base_navigator){
var clauses__$1 = clauses;
var acc = cljs.core.PersistentVector.EMPTY;
var navigator__$1 = navigator;
while(true){
if(cljs.core.empty_QMARK_.call(null,clauses__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,navigator__$1], null);
} else {
var clause = cljs.core.first.call(null,clauses__$1);
var vec__12633 = (function (){var sb = (new goog.string.StringBuffer());
var _STAR_out_STAR_12634 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = (new cljs.core.StringBufferWriter(sb));

try{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.pprint.execute_sub_format.call(null,clause,navigator__$1,base_navigator),[cljs.core.str(sb)].join('')], null);
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_12634;
}})();
var iter_result = cljs.core.nth.call(null,vec__12633,(0),null);
var result_str = cljs.core.nth.call(null,vec__12633,(1),null);
if(cljs.core._EQ_.call(null,cljs.core.cst$kw$up_DASH_arrow,cljs.core.first.call(null,iter_result))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,cljs.core.second.call(null,iter_result)], null);
} else {
var G__12635 = cljs.core.next.call(null,clauses__$1);
var G__12636 = cljs.core.conj.call(null,acc,result_str);
var G__12637 = iter_result;
clauses__$1 = G__12635;
acc = G__12636;
navigator__$1 = G__12637;
continue;
}
}
break;
}
});
cljs.pprint.justify_clauses = (function cljs$pprint$justify_clauses(params,navigator,offsets){
var vec__12642 = (function (){var temp__4657__auto__ = cljs.core.cst$kw$else.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(temp__4657__auto__)){
var else$ = temp__4657__auto__;
return cljs.pprint.render_clauses.call(null,else$,navigator,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
} else {
return null;
}
})();
var vec__12643 = cljs.core.nth.call(null,vec__12642,(0),null);
var eol_str = cljs.core.nth.call(null,vec__12643,(0),null);
var new_navigator = cljs.core.nth.call(null,vec__12642,(1),null);
var navigator__$1 = (function (){var or__6210__auto__ = new_navigator;
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return navigator;
}
})();
var vec__12644 = (function (){var temp__4657__auto__ = cljs.core.cst$kw$else_DASH_params.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(temp__4657__auto__)){
var p = temp__4657__auto__;
return cljs.pprint.realize_parameter_list.call(null,p,navigator__$1);
} else {
return null;
}
})();
var else_params = cljs.core.nth.call(null,vec__12644,(0),null);
var new_navigator__$1 = cljs.core.nth.call(null,vec__12644,(1),null);
var navigator__$2 = (function (){var or__6210__auto__ = new_navigator__$1;
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return navigator__$1;
}
})();
var min_remaining = (function (){var or__6210__auto__ = cljs.core.first.call(null,cljs.core.cst$kw$min_DASH_remaining.cljs$core$IFn$_invoke$arity$1(else_params));
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return (0);
}
})();
var max_columns = (function (){var or__6210__auto__ = cljs.core.first.call(null,cljs.core.cst$kw$max_DASH_columns.cljs$core$IFn$_invoke$arity$1(else_params));
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return cljs.pprint.get_max_column.call(null,cljs.core._STAR_out_STAR_);
}
})();
var clauses = cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params);
var vec__12645 = cljs.pprint.render_clauses.call(null,clauses,navigator__$2,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
var strs = cljs.core.nth.call(null,vec__12645,(0),null);
var navigator__$3 = cljs.core.nth.call(null,vec__12645,(1),null);
var slots = (function (){var x__6541__auto__ = (1);
var y__6542__auto__ = (((cljs.core.count.call(null,strs) - (1)) + (cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?(1):(0))) + (cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))?(1):(0)));
return ((x__6541__auto__ > y__6542__auto__) ? x__6541__auto__ : y__6542__auto__);
})();
var chars = cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,cljs.core.count,strs));
var mincol = cljs.core.cst$kw$mincol.cljs$core$IFn$_invoke$arity$1(params);
var minpad = cljs.core.cst$kw$minpad.cljs$core$IFn$_invoke$arity$1(params);
var colinc = cljs.core.cst$kw$colinc.cljs$core$IFn$_invoke$arity$1(params);
var minout = (chars + (slots * minpad));
var result_columns = (((minout <= mincol))?mincol:(mincol + (colinc * ((1) + cljs.core.quot.call(null,((minout - mincol) - (1)),colinc)))));
var total_pad = (result_columns - chars);
var pad = (function (){var x__6541__auto__ = minpad;
var y__6542__auto__ = cljs.core.quot.call(null,total_pad,slots);
return ((x__6541__auto__ > y__6542__auto__) ? x__6541__auto__ : y__6542__auto__);
})();
var extra_pad = (total_pad - (pad * slots));
var pad_str = cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,pad,cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params)));
if(cljs.core.truth_((function (){var and__6198__auto__ = eol_str;
if(cljs.core.truth_(and__6198__auto__)){
return (((cljs.pprint.get_column.call(null,cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,cljs.core._STAR_out_STAR_)))) + min_remaining) + result_columns) > max_columns);
} else {
return and__6198__auto__;
}
})())){
cljs.pprint.print.call(null,eol_str);
} else {
}

var slots_12646__$1 = slots;
var extra_pad_12647__$1 = extra_pad;
var strs_12648__$1 = strs;
var pad_only_12649 = (function (){var or__6210__auto__ = cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return (cljs.core._EQ_.call(null,cljs.core.count.call(null,strs_12648__$1),(1))) && (cljs.core.not.call(null,cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params)));
}
})();
while(true){
if(cljs.core.seq.call(null,strs_12648__$1)){
cljs.pprint.print.call(null,[cljs.core.str(((cljs.core.not.call(null,pad_only_12649))?cljs.core.first.call(null,strs_12648__$1):null)),cljs.core.str((cljs.core.truth_((function (){var or__6210__auto__ = pad_only_12649;
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
var or__6210__auto____$1 = cljs.core.next.call(null,strs_12648__$1);
if(or__6210__auto____$1){
return or__6210__auto____$1;
} else {
return cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
}
}
})())?pad_str:null)),cljs.core.str((((extra_pad_12647__$1 > (0)))?cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params):null))].join(''));

var G__12650 = (slots_12646__$1 - (1));
var G__12651 = (extra_pad_12647__$1 - (1));
var G__12652 = (cljs.core.truth_(pad_only_12649)?strs_12648__$1:cljs.core.next.call(null,strs_12648__$1));
var G__12653 = false;
slots_12646__$1 = G__12650;
extra_pad_12647__$1 = G__12651;
strs_12648__$1 = G__12652;
pad_only_12649 = G__12653;
continue;
} else {
}
break;
}

return navigator__$3;
});
/**
 * Returns a proxy that wraps writer, converting all characters to lower case
 */
cljs.pprint.downcase_writer = (function cljs$pprint$downcase_writer(writer){
if(typeof cljs.pprint.t_cljs$pprint12660 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint12660 = (function (downcase_writer,writer,meta12661){
this.downcase_writer = downcase_writer;
this.writer = writer;
this.meta12661 = meta12661;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.pprint.t_cljs$pprint12660.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12662,meta12661__$1){
var self__ = this;
var _12662__$1 = this;
return (new cljs.pprint.t_cljs$pprint12660(self__.downcase_writer,self__.writer,meta12661__$1));
});

cljs.pprint.t_cljs$pprint12660.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12662){
var self__ = this;
var _12662__$1 = this;
return self__.meta12661;
});

cljs.pprint.t_cljs$pprint12660.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush.call(null,self__.writer);
});

cljs.pprint.t_cljs$pprint12660.prototype.cljs$core$IWriter$_write$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__12663 = cljs.core._EQ_;
var expr__12664 = cljs.core.type.call(null,x);
if(cljs.core.truth_(pred__12663.call(null,String,expr__12664))){
var s = x;
return cljs.core._write.call(null,self__.writer,clojure.string.lower_case.call(null,s));
} else {
if(cljs.core.truth_(pred__12663.call(null,Number,expr__12664))){
var c = x;
return cljs.core._write.call(null,self__.writer,clojure.string.lower_case.call(null,cljs.core.char$.call(null,c)));
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__12664)].join('')));
}
}
});

cljs.pprint.t_cljs$pprint12660.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$downcase_DASH_writer,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$private,true,cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$writer], null))),cljs.core.cst$kw$doc,"Returns a proxy that wraps writer, converting all characters to lower case"], null)),cljs.core.cst$sym$writer,cljs.core.cst$sym$meta12661], null);
});

cljs.pprint.t_cljs$pprint12660.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint12660.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint12660";

cljs.pprint.t_cljs$pprint12660.cljs$lang$ctorPrWriter = (function (this__6816__auto__,writer__6817__auto__,opt__6818__auto__){
return cljs.core._write.call(null,writer__6817__auto__,"cljs.pprint/t_cljs$pprint12660");
});

cljs.pprint.__GT_t_cljs$pprint12660 = (function cljs$pprint$downcase_writer_$___GT_t_cljs$pprint12660(downcase_writer__$1,writer__$1,meta12661){
return (new cljs.pprint.t_cljs$pprint12660(downcase_writer__$1,writer__$1,meta12661));
});

}

return (new cljs.pprint.t_cljs$pprint12660(cljs$pprint$downcase_writer,writer,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a proxy that wraps writer, converting all characters to upper case
 */
cljs.pprint.upcase_writer = (function cljs$pprint$upcase_writer(writer){
if(typeof cljs.pprint.t_cljs$pprint12672 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint12672 = (function (upcase_writer,writer,meta12673){
this.upcase_writer = upcase_writer;
this.writer = writer;
this.meta12673 = meta12673;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.pprint.t_cljs$pprint12672.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12674,meta12673__$1){
var self__ = this;
var _12674__$1 = this;
return (new cljs.pprint.t_cljs$pprint12672(self__.upcase_writer,self__.writer,meta12673__$1));
});

cljs.pprint.t_cljs$pprint12672.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12674){
var self__ = this;
var _12674__$1 = this;
return self__.meta12673;
});

cljs.pprint.t_cljs$pprint12672.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush.call(null,self__.writer);
});

cljs.pprint.t_cljs$pprint12672.prototype.cljs$core$IWriter$_write$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__12675 = cljs.core._EQ_;
var expr__12676 = cljs.core.type.call(null,x);
if(cljs.core.truth_(pred__12675.call(null,String,expr__12676))){
var s = x;
return cljs.core._write.call(null,self__.writer,clojure.string.upper_case.call(null,s));
} else {
if(cljs.core.truth_(pred__12675.call(null,Number,expr__12676))){
var c = x;
return cljs.core._write.call(null,self__.writer,clojure.string.upper_case.call(null,cljs.core.char$.call(null,c)));
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__12676)].join('')));
}
}
});

cljs.pprint.t_cljs$pprint12672.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$upcase_DASH_writer,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$private,true,cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$writer], null))),cljs.core.cst$kw$doc,"Returns a proxy that wraps writer, converting all characters to upper case"], null)),cljs.core.cst$sym$writer,cljs.core.cst$sym$meta12673], null);
});

cljs.pprint.t_cljs$pprint12672.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint12672.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint12672";

cljs.pprint.t_cljs$pprint12672.cljs$lang$ctorPrWriter = (function (this__6816__auto__,writer__6817__auto__,opt__6818__auto__){
return cljs.core._write.call(null,writer__6817__auto__,"cljs.pprint/t_cljs$pprint12672");
});

cljs.pprint.__GT_t_cljs$pprint12672 = (function cljs$pprint$upcase_writer_$___GT_t_cljs$pprint12672(upcase_writer__$1,writer__$1,meta12673){
return (new cljs.pprint.t_cljs$pprint12672(upcase_writer__$1,writer__$1,meta12673));
});

}

return (new cljs.pprint.t_cljs$pprint12672(cljs$pprint$upcase_writer,writer,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Capitalizes the words in a string. If first? is false, don't capitalize the
 *                                    first character of the string even if it's a letter.
 */
cljs.pprint.capitalize_string = (function cljs$pprint$capitalize_string(s,first_QMARK_){
var f = cljs.core.first.call(null,s);
var s__$1 = (cljs.core.truth_((function (){var and__6198__auto__ = first_QMARK_;
if(cljs.core.truth_(and__6198__auto__)){
var and__6198__auto____$1 = f;
if(cljs.core.truth_(and__6198__auto____$1)){
return goog.string.isUnicodeChar(f);
} else {
return and__6198__auto____$1;
}
} else {
return and__6198__auto__;
}
})())?[cljs.core.str(clojure.string.upper_case.call(null,f)),cljs.core.str(cljs.core.subs.call(null,s,(1)))].join(''):s);
return cljs.core.apply.call(null,cljs.core.str,cljs.core.first.call(null,cljs.pprint.consume.call(null,((function (f,s__$1){
return (function (s__$2){
if(cljs.core.empty_QMARK_.call(null,s__$2)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null);
} else {
var m = RegExp("\\W\\w","g").exec(s__$2);
var offset = (function (){var and__6198__auto__ = m;
if(cljs.core.truth_(and__6198__auto__)){
return (m.index + (1));
} else {
return and__6198__auto__;
}
})();
if(cljs.core.truth_(offset)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(cljs.core.subs.call(null,s__$2,(0),offset)),cljs.core.str(clojure.string.upper_case.call(null,cljs.core.nth.call(null,s__$2,offset)))].join(''),cljs.core.subs.call(null,s__$2,(offset + (1)))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s__$2,null], null);
}
}
});})(f,s__$1))
,s__$1)));
});
/**
 * Returns a proxy that wraps writer, capitalizing all words
 */
cljs.pprint.capitalize_word_writer = (function cljs$pprint$capitalize_word_writer(writer){
var last_was_whitespace_QMARK_ = cljs.core.atom.call(null,true);
if(typeof cljs.pprint.t_cljs$pprint12684 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint12684 = (function (capitalize_word_writer,writer,last_was_whitespace_QMARK_,meta12685){
this.capitalize_word_writer = capitalize_word_writer;
this.writer = writer;
this.last_was_whitespace_QMARK_ = last_was_whitespace_QMARK_;
this.meta12685 = meta12685;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.pprint.t_cljs$pprint12684.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (last_was_whitespace_QMARK_){
return (function (_12686,meta12685__$1){
var self__ = this;
var _12686__$1 = this;
return (new cljs.pprint.t_cljs$pprint12684(self__.capitalize_word_writer,self__.writer,self__.last_was_whitespace_QMARK_,meta12685__$1));
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint12684.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (last_was_whitespace_QMARK_){
return (function (_12686){
var self__ = this;
var _12686__$1 = this;
return self__.meta12685;
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint12684.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (last_was_whitespace_QMARK_){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush.call(null,self__.writer);
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint12684.prototype.cljs$core$IWriter$_write$arity$2 = ((function (last_was_whitespace_QMARK_){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__12687 = cljs.core._EQ_;
var expr__12688 = cljs.core.type.call(null,x);
if(cljs.core.truth_(pred__12687.call(null,String,expr__12688))){
var s = x;
cljs.core._write.call(null,self__.writer,cljs.pprint.capitalize_string.call(null,s.toLowerCase(),cljs.core.deref.call(null,self__.last_was_whitespace_QMARK_)));

if((s.length > (0))){
return cljs.core.reset_BANG_.call(null,self__.last_was_whitespace_QMARK_,goog.string.isEmptyOrWhitespace(cljs.core.nth.call(null,s,(cljs.core.count.call(null,s) - (1)))));
} else {
return null;
}
} else {
if(cljs.core.truth_(pred__12687.call(null,Number,expr__12688))){
var c = cljs.core.char$.call(null,x);
var mod_c = (cljs.core.truth_(cljs.core.deref.call(null,self__.last_was_whitespace_QMARK_))?clojure.string.upper_case.call(null,c):c);
cljs.core._write.call(null,self__.writer,mod_c);

return cljs.core.reset_BANG_.call(null,self__.last_was_whitespace_QMARK_,goog.string.isEmptyOrWhitespace(c));
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__12688)].join('')));
}
}
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint12684.getBasis = ((function (last_was_whitespace_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$capitalize_DASH_word_DASH_writer,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$private,true,cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$writer], null))),cljs.core.cst$kw$doc,"Returns a proxy that wraps writer, capitalizing all words"], null)),cljs.core.cst$sym$writer,cljs.core.cst$sym$last_DASH_was_DASH_whitespace_QMARK_,cljs.core.cst$sym$meta12685], null);
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint12684.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint12684.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint12684";

cljs.pprint.t_cljs$pprint12684.cljs$lang$ctorPrWriter = ((function (last_was_whitespace_QMARK_){
return (function (this__6816__auto__,writer__6817__auto__,opt__6818__auto__){
return cljs.core._write.call(null,writer__6817__auto__,"cljs.pprint/t_cljs$pprint12684");
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.__GT_t_cljs$pprint12684 = ((function (last_was_whitespace_QMARK_){
return (function cljs$pprint$capitalize_word_writer_$___GT_t_cljs$pprint12684(capitalize_word_writer__$1,writer__$1,last_was_whitespace_QMARK___$1,meta12685){
return (new cljs.pprint.t_cljs$pprint12684(capitalize_word_writer__$1,writer__$1,last_was_whitespace_QMARK___$1,meta12685));
});})(last_was_whitespace_QMARK_))
;

}

return (new cljs.pprint.t_cljs$pprint12684(cljs$pprint$capitalize_word_writer,writer,last_was_whitespace_QMARK_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a proxy that wraps writer, capitalizing the first word
 */
cljs.pprint.init_cap_writer = (function cljs$pprint$init_cap_writer(writer){
var capped = cljs.core.atom.call(null,false);
if(typeof cljs.pprint.t_cljs$pprint12696 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint12696 = (function (init_cap_writer,writer,capped,meta12697){
this.init_cap_writer = init_cap_writer;
this.writer = writer;
this.capped = capped;
this.meta12697 = meta12697;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.pprint.t_cljs$pprint12696.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (capped){
return (function (_12698,meta12697__$1){
var self__ = this;
var _12698__$1 = this;
return (new cljs.pprint.t_cljs$pprint12696(self__.init_cap_writer,self__.writer,self__.capped,meta12697__$1));
});})(capped))
;

cljs.pprint.t_cljs$pprint12696.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (capped){
return (function (_12698){
var self__ = this;
var _12698__$1 = this;
return self__.meta12697;
});})(capped))
;

cljs.pprint.t_cljs$pprint12696.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (capped){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush.call(null,self__.writer);
});})(capped))
;

cljs.pprint.t_cljs$pprint12696.prototype.cljs$core$IWriter$_write$arity$2 = ((function (capped){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__12699 = cljs.core._EQ_;
var expr__12700 = cljs.core.type.call(null,x);
if(cljs.core.truth_(pred__12699.call(null,String,expr__12700))){
var s = clojure.string.lower_case.call(null,x);
if(cljs.core.not.call(null,cljs.core.deref.call(null,self__.capped))){
var m = RegExp("\\S","g").exec(s);
var offset = (function (){var and__6198__auto__ = m;
if(cljs.core.truth_(and__6198__auto__)){
return m.index;
} else {
return and__6198__auto__;
}
})();
if(cljs.core.truth_(offset)){
cljs.core._write.call(null,self__.writer,[cljs.core.str(cljs.core.subs.call(null,s,(0),offset)),cljs.core.str(clojure.string.upper_case.call(null,cljs.core.nth.call(null,s,offset))),cljs.core.str(clojure.string.lower_case.call(null,cljs.core.subs.call(null,s,(offset + (1)))))].join(''));

return cljs.core.reset_BANG_.call(null,self__.capped,true);
} else {
return cljs.core._write.call(null,self__.writer,s);
}
} else {
return cljs.core._write.call(null,self__.writer,clojure.string.lower_case.call(null,s));
}
} else {
if(cljs.core.truth_(pred__12699.call(null,Number,expr__12700))){
var c = cljs.core.char$.call(null,x);
if(cljs.core.truth_((function (){var and__6198__auto__ = cljs.core.not.call(null,cljs.core.deref.call(null,self__.capped));
if(and__6198__auto__){
return goog.string.isUnicodeChar(c);
} else {
return and__6198__auto__;
}
})())){
cljs.core.reset_BANG_.call(null,self__.capped,true);

return cljs.core._write.call(null,self__.writer,clojure.string.upper_case.call(null,c));
} else {
return cljs.core._write.call(null,self__.writer,clojure.string.lower_case.call(null,c));
}
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__12700)].join('')));
}
}
});})(capped))
;

cljs.pprint.t_cljs$pprint12696.getBasis = ((function (capped){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$init_DASH_cap_DASH_writer,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$private,true,cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$writer], null))),cljs.core.cst$kw$doc,"Returns a proxy that wraps writer, capitalizing the first word"], null)),cljs.core.cst$sym$writer,cljs.core.cst$sym$capped,cljs.core.cst$sym$meta12697], null);
});})(capped))
;

cljs.pprint.t_cljs$pprint12696.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint12696.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint12696";

cljs.pprint.t_cljs$pprint12696.cljs$lang$ctorPrWriter = ((function (capped){
return (function (this__6816__auto__,writer__6817__auto__,opt__6818__auto__){
return cljs.core._write.call(null,writer__6817__auto__,"cljs.pprint/t_cljs$pprint12696");
});})(capped))
;

cljs.pprint.__GT_t_cljs$pprint12696 = ((function (capped){
return (function cljs$pprint$init_cap_writer_$___GT_t_cljs$pprint12696(init_cap_writer__$1,writer__$1,capped__$1,meta12697){
return (new cljs.pprint.t_cljs$pprint12696(init_cap_writer__$1,writer__$1,capped__$1,meta12697));
});})(capped))
;

}

return (new cljs.pprint.t_cljs$pprint12696(cljs$pprint$init_cap_writer,writer,capped,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.pprint.modify_case = (function cljs$pprint$modify_case(make_writer,params,navigator,offsets){
var clause = cljs.core.first.call(null,cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params));
var _STAR_out_STAR_12703 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = make_writer.call(null,cljs.core._STAR_out_STAR_);

try{return cljs.pprint.execute_sub_format.call(null,clause,navigator,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_12703;
}});
/**
 * Returns the IWriter passed in wrapped in a pretty writer proxy, unless it's
 * already a pretty writer. Generally, it is unnecessary to call this function, since pprint,
 * write, and cl-format all call it if they need to. However if you want the state to be
 * preserved across calls, you will want to wrap them with this.
 * 
 * For example, when you want to generate column-aware output with multiple calls to cl-format,
 * do it like in this example:
 * 
 *  (defn print-table [aseq column-width]
 *    (binding [*out* (get-pretty-writer *out*)]
 *      (doseq [row aseq]
 *        (doseq [col row]
 *          (cl-format true "~4D~7,vT" col column-width))
 *        (prn))))
 * 
 * Now when you run:
 * 
 *  user> (print-table (map #(vector % (* % %) (* % % %)) (range 1 11)) 8)
 * 
 * It prints a table of squares and cubes for the numbers from 1 to 10:
 * 
 *     1      1       1
 *     2      4       8
 *     3      9      27
 *     4     16      64
 *     5     25     125
 *     6     36     216
 *     7     49     343
 *     8     64     512
 *     9     81     729
 *    10    100    1000
 */
cljs.pprint.get_pretty_writer = (function cljs$pprint$get_pretty_writer(writer){
if(cljs.core.truth_(cljs.pprint.pretty_writer_QMARK_.call(null,writer))){
return writer;
} else {
return cljs.pprint.pretty_writer.call(null,writer,cljs.pprint._STAR_print_right_margin_STAR_,cljs.pprint._STAR_print_miser_width_STAR_);
}
});
/**
 * Make a newline if *out* is not already at the beginning of the line. If *out* is
 * not a pretty writer (which keeps track of columns), this function always outputs a newline.
 */
cljs.pprint.fresh_line = (function cljs$pprint$fresh_line(){
if(((!((cljs.core._STAR_out_STAR_ == null)))?((((cljs.core._STAR_out_STAR_.cljs$lang$protocol_mask$partition0$ & (32768))) || (cljs.core._STAR_out_STAR_.cljs$core$IDeref$))?true:(((!cljs.core._STAR_out_STAR_.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,cljs.core._STAR_out_STAR_):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,cljs.core._STAR_out_STAR_))){
if(!(cljs.core._EQ_.call(null,(0),cljs.pprint.get_column.call(null,cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,cljs.core._STAR_out_STAR_))))))){
return cljs.pprint.prn.call(null);
} else {
return null;
}
} else {
return cljs.pprint.prn.call(null);
}
});
cljs.pprint.absolute_tabulation = (function cljs$pprint$absolute_tabulation(params,navigator,offsets){
var colnum_12706 = cljs.core.cst$kw$colnum.cljs$core$IFn$_invoke$arity$1(params);
var colinc_12707 = cljs.core.cst$kw$colinc.cljs$core$IFn$_invoke$arity$1(params);
var current_12708 = cljs.pprint.get_column.call(null,cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,cljs.core._STAR_out_STAR_))));
var space_count_12709 = (((current_12708 < colnum_12706))?(colnum_12706 - current_12708):((cljs.core._EQ_.call(null,colinc_12707,(0)))?(0):(colinc_12707 - cljs.core.rem.call(null,(current_12708 - colnum_12706),colinc_12707))
));
cljs.pprint.print.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,space_count_12709," ")));

return navigator;
});
cljs.pprint.relative_tabulation = (function cljs$pprint$relative_tabulation(params,navigator,offsets){
var colrel_12710 = cljs.core.cst$kw$colnum.cljs$core$IFn$_invoke$arity$1(params);
var colinc_12711 = cljs.core.cst$kw$colinc.cljs$core$IFn$_invoke$arity$1(params);
var start_col_12712 = (colrel_12710 + cljs.pprint.get_column.call(null,cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,cljs.core._STAR_out_STAR_)))));
var offset_12713 = (((colinc_12711 > (0)))?cljs.core.rem.call(null,start_col_12712,colinc_12711):(0));
var space_count_12714 = (colrel_12710 + ((cljs.core._EQ_.call(null,(0),offset_12713))?(0):(colinc_12711 - offset_12713)));
cljs.pprint.print.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,space_count_12714," ")));

return navigator;
});
cljs.pprint.format_logical_block = (function cljs$pprint$format_logical_block(params,navigator,offsets){
var clauses = cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params);
var clause_count = cljs.core.count.call(null,clauses);
var prefix = (((clause_count > (1)))?cljs.core.cst$kw$string.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.first.call(null,clauses)))):(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?"(":null));
var body = cljs.core.nth.call(null,clauses,(((clause_count > (1)))?(1):(0)));
var suffix = (((clause_count > (2)))?cljs.core.cst$kw$string.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.nth.call(null,clauses,(2))))):(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?")":null));
var vec__12718 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__12718,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__12718,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_12719_12721 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_12720_12722 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,prefix,null,suffix);

cljs.pprint.execute_sub_format.call(null,body,cljs.pprint.init_navigator.call(null,arg),cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_12720_12722;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_12719_12721;
}}


return navigator__$1;
});
cljs.pprint.set_indent = (function cljs$pprint$set_indent(params,navigator,offsets){
var relative_to = (cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?cljs.core.cst$kw$current:cljs.core.cst$kw$block);
cljs.pprint.pprint_indent.call(null,relative_to,cljs.core.cst$kw$n.cljs$core$IFn$_invoke$arity$1(params));

return navigator;
});
cljs.pprint.conditional_newline = (function cljs$pprint$conditional_newline(params,navigator,offsets){
var kind = (cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))?cljs.core.cst$kw$mandatory:cljs.core.cst$kw$fill):(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))?cljs.core.cst$kw$miser:cljs.core.cst$kw$linear));
cljs.pprint.pprint_newline.call(null,kind);

return navigator;
});
cljs.pprint.directive_table = cljs.core.PersistentHashMap.fromArrays(["A","S","D","B","O","X","R","P","C","F","E","G","$","%","&","|","~","\n","T","*","?","(",")","[",";","]","{","}","<",">","^","W","_","I"],[new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"A",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$colinc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),cljs.core.cst$kw$minpad,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (p1__12723_SHARP_,p2__12724_SHARP_,p3__12725_SHARP_){
return cljs.pprint.format_ascii.call(null,cljs.core.print_str,p1__12723_SHARP_,p2__12724_SHARP_,p3__12725_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"S",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$colinc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),cljs.core.cst$kw$minpad,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (p1__12726_SHARP_,p2__12727_SHARP_,p3__12728_SHARP_){
return cljs.pprint.format_ascii.call(null,cljs.core.pr_str,p1__12726_SHARP_,p2__12727_SHARP_,p3__12728_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"D",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),cljs.core.cst$kw$commachar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),cljs.core.cst$kw$commainterval,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (p1__12729_SHARP_,p2__12730_SHARP_,p3__12731_SHARP_){
return cljs.pprint.format_integer.call(null,(10),p1__12729_SHARP_,p2__12730_SHARP_,p3__12731_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"B",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),cljs.core.cst$kw$commachar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),cljs.core.cst$kw$commainterval,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (p1__12732_SHARP_,p2__12733_SHARP_,p3__12734_SHARP_){
return cljs.pprint.format_integer.call(null,(2),p1__12732_SHARP_,p2__12733_SHARP_,p3__12734_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"O",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),cljs.core.cst$kw$commachar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),cljs.core.cst$kw$commainterval,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (p1__12735_SHARP_,p2__12736_SHARP_,p3__12737_SHARP_){
return cljs.pprint.format_integer.call(null,(8),p1__12735_SHARP_,p2__12736_SHARP_,p3__12737_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"X",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),cljs.core.cst$kw$commachar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),cljs.core.cst$kw$commainterval,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (p1__12738_SHARP_,p2__12739_SHARP_,p3__12740_SHARP_){
return cljs.pprint.format_integer.call(null,(16),p1__12738_SHARP_,p2__12739_SHARP_,p3__12740_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"R",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(5),[cljs.core.cst$kw$base,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),cljs.core.cst$kw$commachar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),cljs.core.cst$kw$commainterval,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
if(cljs.core.truth_(cljs.core.first.call(null,cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(params)))){
return (function (p1__12741_SHARP_,p2__12742_SHARP_,p3__12743_SHARP_){
return cljs.pprint.format_integer.call(null,cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(p1__12741_SHARP_),p1__12741_SHARP_,p2__12742_SHARP_,p3__12743_SHARP_);
});
} else {
if(cljs.core.truth_((function (){var and__6198__auto__ = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__6198__auto__)){
return cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__6198__auto__;
}
})())){
return (function (p1__12744_SHARP_,p2__12745_SHARP_,p3__12746_SHARP_){
return cljs.pprint.format_old_roman.call(null,p1__12744_SHARP_,p2__12745_SHARP_,p3__12746_SHARP_);
});
} else {
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))){
return (function (p1__12747_SHARP_,p2__12748_SHARP_,p3__12749_SHARP_){
return cljs.pprint.format_new_roman.call(null,p1__12747_SHARP_,p2__12748_SHARP_,p3__12749_SHARP_);
});
} else {
if(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))){
return (function (p1__12750_SHARP_,p2__12751_SHARP_,p3__12752_SHARP_){
return cljs.pprint.format_ordinal_english.call(null,p1__12750_SHARP_,p2__12751_SHARP_,p3__12752_SHARP_);
});
} else {
return (function (p1__12753_SHARP_,p2__12754_SHARP_,p3__12755_SHARP_){
return cljs.pprint.format_cardinal_english.call(null,p1__12753_SHARP_,p2__12754_SHARP_,p3__12755_SHARP_);
});

}
}
}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"P",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,navigator,offsets){
var navigator__$1 = (cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params__$1))?cljs.pprint.relative_reposition.call(null,navigator,(-1)):navigator);
var strs = (cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params__$1))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["y","ies"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","s"], null));
var vec__12765 = cljs.pprint.next_arg.call(null,navigator__$1);
var arg = cljs.core.nth.call(null,vec__12765,(0),null);
var navigator__$2 = cljs.core.nth.call(null,vec__12765,(1),null);
cljs.pprint.print.call(null,((cljs.core._EQ_.call(null,arg,(1)))?cljs.core.first.call(null,strs):cljs.core.second.call(null,strs)));

return navigator__$2;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"C",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$char_DASH_format,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
if(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.pretty_character;
} else {
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.readable_character;
} else {
return cljs.pprint.plain_character;

}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"F",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(5),[cljs.core.cst$kw$w,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$d,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$overflowchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$at,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return cljs.pprint.fixed_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"E",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(7),[cljs.core.cst$kw$w,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$d,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$e,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),cljs.core.cst$kw$overflowchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),cljs.core.cst$kw$exponentchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$at,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return cljs.pprint.exponential_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"G",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(7),[cljs.core.cst$kw$w,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$d,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$e,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),cljs.core.cst$kw$overflowchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),cljs.core.cst$kw$exponentchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$at,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return cljs.pprint.general_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"$",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$d,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),Number], null),cljs.core.cst$kw$n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),cljs.core.cst$kw$w,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return cljs.pprint.dollar_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"%",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$count,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),cljs.core.cst$kw$flags,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var n__7125__auto___12771 = cljs.core.cst$kw$count.cljs$core$IFn$_invoke$arity$1(params__$1);
var i_12772 = (0);
while(true){
if((i_12772 < n__7125__auto___12771)){
cljs.pprint.prn.call(null);

var G__12773 = (i_12772 + (1));
i_12772 = G__12773;
continue;
} else {
}
break;
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"&",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$count,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$pretty,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var cnt_12774 = cljs.core.cst$kw$count.cljs$core$IFn$_invoke$arity$1(params__$1);
if((cnt_12774 > (0))){
cljs.pprint.fresh_line.call(null);
} else {
}

var n__7125__auto___12775 = (cnt_12774 - (1));
var i_12776 = (0);
while(true){
if((i_12776 < n__7125__auto___12775)){
cljs.pprint.prn.call(null);

var G__12777 = (i_12776 + (1));
i_12776 = G__12777;
continue;
} else {
}
break;
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"|",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$count,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),cljs.core.cst$kw$flags,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var n__7125__auto___12778 = cljs.core.cst$kw$count.cljs$core$IFn$_invoke$arity$1(params__$1);
var i_12779 = (0);
while(true){
if((i_12779 < n__7125__auto___12778)){
cljs.pprint.print.call(null,"\f");

var G__12780 = (i_12779 + (1));
i_12779 = G__12780;
continue;
} else {
}
break;
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"~",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),cljs.core.cst$kw$flags,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var n = cljs.core.cst$kw$n.cljs$core$IFn$_invoke$arity$1(params__$1);
cljs.pprint.print.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,n,"~")));

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"\n",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params__$1))){
cljs.pprint.prn.call(null);
} else {
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"T",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(2),[cljs.core.cst$kw$colnum,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),cljs.core.cst$kw$colinc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$at,null,cljs.core.cst$kw$pretty,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))){
return (function (p1__12756_SHARP_,p2__12757_SHARP_,p3__12758_SHARP_){
return cljs.pprint.relative_tabulation.call(null,p1__12756_SHARP_,p2__12757_SHARP_,p3__12758_SHARP_);
});
} else {
return (function (p1__12759_SHARP_,p2__12760_SHARP_,p3__12761_SHARP_){
return cljs.pprint.absolute_tabulation.call(null,p1__12759_SHARP_,p2__12760_SHARP_,p3__12761_SHARP_);
});
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"*",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,navigator,offsets){
var n = cljs.core.cst$kw$n.cljs$core$IFn$_invoke$arity$1(params__$1);
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params__$1))){
return cljs.pprint.absolute_reposition.call(null,navigator,n);
} else {
return cljs.pprint.relative_reposition.call(null,navigator,(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params__$1))?(- n):n));
}
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"?",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$at,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))){
return (function (params__$1,navigator,offsets){
var vec__12766 = cljs.pprint.get_format_arg.call(null,navigator);
var subformat = cljs.core.nth.call(null,vec__12766,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__12766,(1),null);
return cljs.pprint.execute_sub_format.call(null,subformat,navigator__$1,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params__$1));
});
} else {
return (function (params__$1,navigator,offsets){
var vec__12767 = cljs.pprint.get_format_arg.call(null,navigator);
var subformat = cljs.core.nth.call(null,vec__12767,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__12767,(1),null);
var vec__12768 = cljs.pprint.next_arg.call(null,navigator__$1);
var subargs = cljs.core.nth.call(null,vec__12768,(0),null);
var navigator__$2 = cljs.core.nth.call(null,vec__12768,(1),null);
var sub_navigator = cljs.pprint.init_navigator.call(null,subargs);
cljs.pprint.execute_sub_format.call(null,subformat,sub_navigator,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params__$1));

return navigator__$2;
});
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"(",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$right,")",cljs.core.cst$kw$allows_DASH_separator,null,cljs.core.cst$kw$else,null], null),cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
var mod_case_writer = (cljs.core.truth_((function (){var and__6198__auto__ = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__6198__auto__)){
return cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__6198__auto__;
}
})())?cljs.pprint.upcase_writer:(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?cljs.pprint.capitalize_word_writer:(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))?cljs.pprint.init_cap_writer:cljs.pprint.downcase_writer
)));
return ((function (mod_case_writer){
return (function (p1__12762_SHARP_,p2__12763_SHARP_,p3__12764_SHARP_){
return cljs.pprint.modify_case.call(null,mod_case_writer,p1__12762_SHARP_,p2__12763_SHARP_,p3__12764_SHARP_);
});
;})(mod_case_writer))
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,")",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"[",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$selector,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null], null), null),cljs.core.cst$kw$bracket_DASH_info,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$right,"]",cljs.core.cst$kw$allows_DASH_separator,true,cljs.core.cst$kw$else,cljs.core.cst$kw$last], null),cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
if(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.boolean_conditional;
} else {
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.check_arg_conditional;
} else {
return cljs.pprint.choice_conditional;

}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,";",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(2),[cljs.core.cst$kw$min_DASH_remaining,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$max_DASH_columns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$colon,null], null), null),cljs.core.cst$kw$bracket_DASH_info,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$separator,true], null),cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"]",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"{",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$max_DASH_iterations,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$right,"}",cljs.core.cst$kw$allows_DASH_separator,false], null),cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
if(cljs.core.truth_((function (){var and__6198__auto__ = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__6198__auto__)){
return cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__6198__auto__;
}
})())){
return cljs.pprint.iterate_main_sublists;
} else {
if(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.iterate_list_of_sublists;
} else {
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.iterate_main_list;
} else {
return cljs.pprint.iterate_sublist;

}
}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"}",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$colon,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"<",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$colinc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),cljs.core.cst$kw$minpad,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null,cljs.core.cst$kw$pretty,null], null), null),cljs.core.cst$kw$bracket_DASH_info,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$right,">",cljs.core.cst$kw$allows_DASH_separator,true,cljs.core.cst$kw$else,cljs.core.cst$kw$first], null),cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return cljs.pprint.logical_block_or_justify;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,">",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$colon,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"^",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(3),[cljs.core.cst$kw$arg1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$arg2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$arg3,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$colon,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,navigator,offsets){
var arg1 = cljs.core.cst$kw$arg1.cljs$core$IFn$_invoke$arity$1(params__$1);
var arg2 = cljs.core.cst$kw$arg2.cljs$core$IFn$_invoke$arity$1(params__$1);
var arg3 = cljs.core.cst$kw$arg3.cljs$core$IFn$_invoke$arity$1(params__$1);
var exit = (cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params__$1))?cljs.core.cst$kw$colon_DASH_up_DASH_arrow:cljs.core.cst$kw$up_DASH_arrow);
if(cljs.core.truth_((function (){var and__6198__auto__ = arg1;
if(cljs.core.truth_(and__6198__auto__)){
var and__6198__auto____$1 = arg2;
if(cljs.core.truth_(and__6198__auto____$1)){
return arg3;
} else {
return and__6198__auto____$1;
}
} else {
return and__6198__auto__;
}
})())){
if(((arg1 <= arg2)) && ((arg2 <= arg3))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}
} else {
if(cljs.core.truth_((function (){var and__6198__auto__ = arg1;
if(cljs.core.truth_(and__6198__auto__)){
return arg2;
} else {
return and__6198__auto__;
}
})())){
if(cljs.core._EQ_.call(null,arg1,arg2)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}
} else {
if(cljs.core.truth_(arg1)){
if(cljs.core._EQ_.call(null,arg1,(0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}
} else {
if((cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params__$1))?cljs.core.empty_QMARK_.call(null,cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params__$1))):cljs.core.empty_QMARK_.call(null,cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(navigator)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}

}
}
}
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"W",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null,cljs.core.cst$kw$pretty,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
if(cljs.core.truth_((function (){var or__6210__auto__ = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params);
}
})())){
var bindings = cljs.core.concat.call(null,(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$level,null,cljs.core.cst$kw$length,null], null):cljs.core.PersistentVector.EMPTY),(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$pretty,true], null):cljs.core.PersistentVector.EMPTY));
return ((function (bindings){
return (function (params__$1,navigator,offsets){
var vec__12769 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__12769,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__12769,(1),null);
if(cljs.core.truth_(cljs.core.apply.call(null,cljs.pprint.write,arg,bindings))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$up_DASH_arrow,navigator__$1], null);
} else {
return navigator__$1;
}
});
;})(bindings))
} else {
return (function (params__$1,navigator,offsets){
var vec__12770 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__12770,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__12770,(1),null);
if(cljs.core.truth_(cljs.pprint.write_out.call(null,arg))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$up_DASH_arrow,navigator__$1], null);
} else {
return navigator__$1;
}
});
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"_",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return cljs.pprint.conditional_newline;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"I",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$colon,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return cljs.pprint.set_indent;
})], null)]);
cljs.pprint.param_pattern = /^([vV]|#|('.)|([+-]?\d+)|(?=,))/;
cljs.pprint.special_params = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$remaining_DASH_arg_DASH_count,null,cljs.core.cst$kw$parameter_DASH_from_DASH_args,null], null), null);
cljs.pprint.extract_param = (function cljs$pprint$extract_param(p__12781){
var vec__12783 = p__12781;
var s = cljs.core.nth.call(null,vec__12783,(0),null);
var offset = cljs.core.nth.call(null,vec__12783,(1),null);
var saw_comma = cljs.core.nth.call(null,vec__12783,(2),null);
var m = (new RegExp(cljs.pprint.param_pattern.source,"g"));
var param = m.exec(s);
if(cljs.core.truth_(param)){
var token_str = cljs.core.first.call(null,param);
var remainder = cljs.core.subs.call(null,s,m.lastIndex);
var new_offset = (offset + m.lastIndex);
if(!(cljs.core._EQ_.call(null,",",cljs.core.nth.call(null,remainder,(0))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [token_str,offset], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [remainder,new_offset,false], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [token_str,offset], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,remainder,(1)),(new_offset + (1)),true], null)], null);
}
} else {
if(cljs.core.truth_(saw_comma)){
return cljs.pprint.format_error.call(null,"Badly formed parameters in format directive",offset);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,offset], null)], null);
}
}
});
cljs.pprint.extract_params = (function cljs$pprint$extract_params(s,offset){
return cljs.pprint.consume.call(null,cljs.pprint.extract_param,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,offset,false], null));
});
/**
 * Translate the string representation of a param to the internalized
 *                                    representation
 */
cljs.pprint.translate_param = (function cljs$pprint$translate_param(p__12784){
var vec__12786 = p__12784;
var p = cljs.core.nth.call(null,vec__12786,(0),null);
var offset = cljs.core.nth.call(null,vec__12786,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.call(null,p.length,(0)))?null:(((cljs.core._EQ_.call(null,p.length,(1))) && (cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["V",null,"v",null], null), null),cljs.core.nth.call(null,p,(0)))))?cljs.core.cst$kw$parameter_DASH_from_DASH_args:(((cljs.core._EQ_.call(null,p.length,(1))) && (cljs.core._EQ_.call(null,"#",cljs.core.nth.call(null,p,(0)))))?cljs.core.cst$kw$remaining_DASH_arg_DASH_count:(((cljs.core._EQ_.call(null,p.length,(2))) && (cljs.core._EQ_.call(null,"'",cljs.core.nth.call(null,p,(0)))))?cljs.core.nth.call(null,p,(1)):parseInt(p,(10))
)))),offset], null);
});
cljs.pprint.flag_defs = new cljs.core.PersistentArrayMap(null, 2, [":",cljs.core.cst$kw$colon,"@",cljs.core.cst$kw$at], null);
cljs.pprint.extract_flags = (function cljs$pprint$extract_flags(s,offset){
return cljs.pprint.consume.call(null,(function (p__12789){
var vec__12790 = p__12789;
var s__$1 = cljs.core.nth.call(null,vec__12790,(0),null);
var offset__$1 = cljs.core.nth.call(null,vec__12790,(1),null);
var flags = cljs.core.nth.call(null,vec__12790,(2),null);
if(cljs.core.empty_QMARK_.call(null,s__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s__$1,offset__$1,flags], null)], null);
} else {
var flag = cljs.core.get.call(null,cljs.pprint.flag_defs,cljs.core.first.call(null,s__$1));
if(cljs.core.truth_(flag)){
if(cljs.core.contains_QMARK_.call(null,flags,flag)){
return cljs.pprint.format_error.call(null,[cljs.core.str("Flag \""),cljs.core.str(cljs.core.first.call(null,s__$1)),cljs.core.str("\" appears more than once in a directive")].join(''),offset__$1);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,s__$1,(1)),(offset__$1 + (1)),cljs.core.assoc.call(null,flags,flag,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,offset__$1], null))], null)], null);
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s__$1,offset__$1,flags], null)], null);
}
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,offset,cljs.core.PersistentArrayMap.EMPTY], null));
});
cljs.pprint.check_flags = (function cljs$pprint$check_flags(def,flags){
var allowed = cljs.core.cst$kw$flags.cljs$core$IFn$_invoke$arity$1(def);
if(cljs.core.truth_((function (){var and__6198__auto__ = cljs.core.not.call(null,cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(allowed));
if(and__6198__auto__){
return cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(flags);
} else {
return and__6198__auto__;
}
})())){
cljs.pprint.format_error.call(null,[cljs.core.str("\"@\" is an illegal flag for format directive \""),cljs.core.str(cljs.core.cst$kw$directive.cljs$core$IFn$_invoke$arity$1(def)),cljs.core.str("\"")].join(''),cljs.core.nth.call(null,cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(flags),(1)));
} else {
}

if(cljs.core.truth_((function (){var and__6198__auto__ = cljs.core.not.call(null,cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(allowed));
if(and__6198__auto__){
return cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(flags);
} else {
return and__6198__auto__;
}
})())){
cljs.pprint.format_error.call(null,[cljs.core.str("\":\" is an illegal flag for format directive \""),cljs.core.str(cljs.core.cst$kw$directive.cljs$core$IFn$_invoke$arity$1(def)),cljs.core.str("\"")].join(''),cljs.core.nth.call(null,cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(flags),(1)));
} else {
}

if(cljs.core.truth_((function (){var and__6198__auto__ = cljs.core.not.call(null,cljs.core.cst$kw$both.cljs$core$IFn$_invoke$arity$1(allowed));
if(and__6198__auto__){
var and__6198__auto____$1 = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(flags);
if(cljs.core.truth_(and__6198__auto____$1)){
return cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(flags);
} else {
return and__6198__auto____$1;
}
} else {
return and__6198__auto__;
}
})())){
return cljs.pprint.format_error.call(null,[cljs.core.str("Cannot combine \"@\" and \":\" flags for format directive \""),cljs.core.str(cljs.core.cst$kw$directive.cljs$core$IFn$_invoke$arity$1(def)),cljs.core.str("\"")].join(''),(function (){var x__6548__auto__ = cljs.core.nth.call(null,cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(flags),(1));
var y__6549__auto__ = cljs.core.nth.call(null,cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(flags),(1));
return ((x__6548__auto__ < y__6549__auto__) ? x__6548__auto__ : y__6549__auto__);
})());
} else {
return null;
}
});
/**
 * Takes a directive definition and the list of actual parameters and
 * a map of flags and returns a map of the parameters and flags with defaults
 * filled in. We check to make sure that there are the right types and number
 * of parameters as well.
 */
cljs.pprint.map_params = (function cljs$pprint$map_params(def,params,flags,offset){
cljs.pprint.check_flags.call(null,def,flags);

if((cljs.core.count.call(null,params) > cljs.core.count.call(null,cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(def)))){
cljs.pprint.format_error.call(null,cljs.pprint.cl_format.call(null,null,"Too many parameters for directive \"~C\": ~D~:* ~[were~;was~:;were~] specified but only ~D~:* ~[are~;is~:;are~] allowed",cljs.core.cst$kw$directive.cljs$core$IFn$_invoke$arity$1(def),cljs.core.count.call(null,params),cljs.core.count.call(null,cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(def))),cljs.core.second.call(null,cljs.core.first.call(null,params)));
} else {
}

cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__12791_SHARP_,p2__12792_SHARP_){
var val = cljs.core.first.call(null,p1__12791_SHARP_);
if(!(((val == null)) || (cljs.core.contains_QMARK_.call(null,cljs.pprint.special_params,val)) || (cljs.core._EQ_.call(null,cljs.core.second.call(null,cljs.core.second.call(null,p2__12792_SHARP_)),cljs.core.type.call(null,val))))){
return cljs.pprint.format_error.call(null,[cljs.core.str("Parameter "),cljs.core.str(cljs.core.name.call(null,cljs.core.first.call(null,p2__12792_SHARP_))),cljs.core.str(" has bad type in directive \""),cljs.core.str(cljs.core.cst$kw$directive.cljs$core$IFn$_invoke$arity$1(def)),cljs.core.str("\": "),cljs.core.str(cljs.core.type.call(null,val))].join(''),cljs.core.second.call(null,p1__12791_SHARP_));
} else {
return null;
}
}),params,cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(def)));

return cljs.core.merge.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.reverse.call(null,(function (){var iter__6990__auto__ = (function cljs$pprint$map_params_$_iter__12808(s__12809){
return (new cljs.core.LazySeq(null,(function (){
var s__12809__$1 = s__12809;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__12809__$1);
if(temp__4657__auto__){
var s__12809__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12809__$2)){
var c__6988__auto__ = cljs.core.chunk_first.call(null,s__12809__$2);
var size__6989__auto__ = cljs.core.count.call(null,c__6988__auto__);
var b__12811 = cljs.core.chunk_buffer.call(null,size__6989__auto__);
if((function (){var i__12810 = (0);
while(true){
if((i__12810 < size__6989__auto__)){
var vec__12816 = cljs.core._nth.call(null,c__6988__auto__,i__12810);
var name = cljs.core.nth.call(null,vec__12816,(0),null);
var vec__12817 = cljs.core.nth.call(null,vec__12816,(1),null);
var default$ = cljs.core.nth.call(null,vec__12817,(0),null);
cljs.core.chunk_append.call(null,b__12811,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [default$,offset], null)], null));

var G__12820 = (i__12810 + (1));
i__12810 = G__12820;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12811),cljs$pprint$map_params_$_iter__12808.call(null,cljs.core.chunk_rest.call(null,s__12809__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12811),null);
}
} else {
var vec__12818 = cljs.core.first.call(null,s__12809__$2);
var name = cljs.core.nth.call(null,vec__12818,(0),null);
var vec__12819 = cljs.core.nth.call(null,vec__12818,(1),null);
var default$ = cljs.core.nth.call(null,vec__12819,(0),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [default$,offset], null)], null),cljs$pprint$map_params_$_iter__12808.call(null,cljs.core.rest.call(null,s__12809__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__6990__auto__.call(null,cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(def));
})())),cljs.core.reduce.call(null,(function (p1__12793_SHARP_,p2__12794_SHARP_){
return cljs.core.apply.call(null,cljs.core.assoc,p1__12793_SHARP_,p2__12794_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,(function (p1__12795_SHARP_){
return cljs.core.first.call(null,cljs.core.nth.call(null,p1__12795_SHARP_,(1)));
}),cljs.core.zipmap.call(null,cljs.core.keys.call(null,cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(def)),params))),flags);
});
cljs.pprint.compile_directive = (function cljs$pprint$compile_directive(s,offset){
var vec__12825 = cljs.pprint.extract_params.call(null,s,offset);
var raw_params = cljs.core.nth.call(null,vec__12825,(0),null);
var vec__12826 = cljs.core.nth.call(null,vec__12825,(1),null);
var rest = cljs.core.nth.call(null,vec__12826,(0),null);
var offset__$1 = cljs.core.nth.call(null,vec__12826,(1),null);
var vec__12827 = cljs.pprint.extract_flags.call(null,rest,offset__$1);
var _ = cljs.core.nth.call(null,vec__12827,(0),null);
var vec__12828 = cljs.core.nth.call(null,vec__12827,(1),null);
var rest__$1 = cljs.core.nth.call(null,vec__12828,(0),null);
var offset__$2 = cljs.core.nth.call(null,vec__12828,(1),null);
var flags = cljs.core.nth.call(null,vec__12828,(2),null);
var directive = cljs.core.first.call(null,rest__$1);
var def = cljs.core.get.call(null,cljs.pprint.directive_table,clojure.string.upper_case.call(null,directive));
var params = (cljs.core.truth_(def)?cljs.pprint.map_params.call(null,def,cljs.core.map.call(null,cljs.pprint.translate_param,raw_params),flags,offset__$2):null);
if(cljs.core.not.call(null,directive)){
cljs.pprint.format_error.call(null,"Format string ended in the middle of a directive",offset__$2);
} else {
}

if(cljs.core.not.call(null,def)){
cljs.pprint.format_error.call(null,[cljs.core.str("Directive \""),cljs.core.str(directive),cljs.core.str("\" is undefined")].join(''),offset__$2);
} else {
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.pprint.compiled_directive(cljs.core.cst$kw$generator_DASH_fn.cljs$core$IFn$_invoke$arity$1(def).call(null,params,offset__$2),def,params,offset__$2,null,null,null)),(function (){var remainder = cljs.core.subs.call(null,rest__$1,(1));
var offset__$3 = (offset__$2 + (1));
var trim_QMARK_ = (cljs.core._EQ_.call(null,"\n",cljs.core.cst$kw$directive.cljs$core$IFn$_invoke$arity$1(def))) && (cljs.core.not.call(null,cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params)));
var trim_count = ((trim_QMARK_)?cljs.pprint.prefix_count.call(null,remainder,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ","\t"], null)):(0));
var remainder__$1 = cljs.core.subs.call(null,remainder,trim_count);
var offset__$4 = (offset__$3 + trim_count);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [remainder__$1,offset__$4], null);
})()], null);
});
cljs.pprint.compile_raw_string = (function cljs$pprint$compile_raw_string(s,offset){
return (new cljs.pprint.compiled_directive((function (_,a,___$1){
cljs.pprint.print.call(null,s);

return a;
}),null,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$string,s], null),offset,null,null,null));
});
cljs.pprint.right_bracket = (function cljs$pprint$right_bracket(this$){
return cljs.core.cst$kw$right.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$bracket_DASH_info.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(this$)));
});
cljs.pprint.separator_QMARK_ = (function cljs$pprint$separator_QMARK_(this$){
return cljs.core.cst$kw$separator.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$bracket_DASH_info.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(this$)));
});
cljs.pprint.else_separator_QMARK_ = (function cljs$pprint$else_separator_QMARK_(this$){
var and__6198__auto__ = cljs.core.cst$kw$separator.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$bracket_DASH_info.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(this$)));
if(cljs.core.truth_(and__6198__auto__)){
return cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(this$));
} else {
return and__6198__auto__;
}
});
cljs.pprint.process_bracket = (function cljs$pprint$process_bracket(this$,remainder){
var vec__12830 = cljs.pprint.collect_clauses.call(null,cljs.core.cst$kw$bracket_DASH_info.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(this$)),cljs.core.cst$kw$offset.cljs$core$IFn$_invoke$arity$1(this$),remainder);
var subex = cljs.core.nth.call(null,vec__12830,(0),null);
var remainder__$1 = cljs.core.nth.call(null,vec__12830,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.pprint.compiled_directive(cljs.core.cst$kw$func.cljs$core$IFn$_invoke$arity$1(this$),cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(this$),cljs.core.merge.call(null,cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(this$),cljs.pprint.tuple_map.call(null,subex,cljs.core.cst$kw$offset.cljs$core$IFn$_invoke$arity$1(this$))),cljs.core.cst$kw$offset.cljs$core$IFn$_invoke$arity$1(this$),null,null,null)),remainder__$1], null);
});
cljs.pprint.process_clause = (function cljs$pprint$process_clause(bracket_info,offset,remainder){
return cljs.pprint.consume.call(null,(function (remainder__$1){
if(cljs.core.empty_QMARK_.call(null,remainder__$1)){
return cljs.pprint.format_error.call(null,"No closing bracket found.",offset);
} else {
var this$ = cljs.core.first.call(null,remainder__$1);
var remainder__$2 = cljs.core.next.call(null,remainder__$1);
if(cljs.core.truth_(cljs.pprint.right_bracket.call(null,this$))){
return cljs.pprint.process_bracket.call(null,this$,remainder__$2);
} else {
if(cljs.core._EQ_.call(null,cljs.core.cst$kw$right.cljs$core$IFn$_invoke$arity$1(bracket_info),cljs.core.cst$kw$directive.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(this$)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$right_DASH_bracket,cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(this$),null,remainder__$2], null)], null);
} else {
if(cljs.core.truth_(cljs.pprint.else_separator_QMARK_.call(null,this$))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$else,null,cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(this$),remainder__$2], null)], null);
} else {
if(cljs.core.truth_(cljs.pprint.separator_QMARK_.call(null,this$))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$separator,null,null,remainder__$2], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$,remainder__$2], null);

}
}
}
}
}
}),remainder);
});
cljs.pprint.collect_clauses = (function cljs$pprint$collect_clauses(bracket_info,offset,remainder){
return cljs.core.second.call(null,cljs.pprint.consume.call(null,(function (p__12835){
var vec__12836 = p__12835;
var clause_map = cljs.core.nth.call(null,vec__12836,(0),null);
var saw_else = cljs.core.nth.call(null,vec__12836,(1),null);
var remainder__$1 = cljs.core.nth.call(null,vec__12836,(2),null);
var vec__12837 = cljs.pprint.process_clause.call(null,bracket_info,offset,remainder__$1);
var clause = cljs.core.nth.call(null,vec__12837,(0),null);
var vec__12838 = cljs.core.nth.call(null,vec__12837,(1),null);
var type = cljs.core.nth.call(null,vec__12838,(0),null);
var right_params = cljs.core.nth.call(null,vec__12838,(1),null);
var else_params = cljs.core.nth.call(null,vec__12838,(2),null);
var remainder__$2 = cljs.core.nth.call(null,vec__12838,(3),null);
if(cljs.core._EQ_.call(null,type,cljs.core.cst$kw$right_DASH_bracket)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.call(null,cljs.core.concat,clause_map,cljs.core.PersistentArrayMap.fromArray([(cljs.core.truth_(saw_else)?cljs.core.cst$kw$else:cljs.core.cst$kw$clauses),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null),cljs.core.cst$kw$right_DASH_params,right_params], true, false)),remainder__$2], null)], null);
} else {
if(cljs.core._EQ_.call(null,type,cljs.core.cst$kw$else)){
if(cljs.core.truth_(cljs.core.cst$kw$else.cljs$core$IFn$_invoke$arity$1(clause_map))){
return cljs.pprint.format_error.call(null,"Two else clauses (\"~:;\") inside bracket construction.",offset);
} else {
if(cljs.core.not.call(null,cljs.core.cst$kw$else.cljs$core$IFn$_invoke$arity$1(bracket_info))){
return cljs.pprint.format_error.call(null,"An else clause (\"~:;\") is in a bracket type that doesn't support it.",offset);
} else {
if((cljs.core._EQ_.call(null,cljs.core.cst$kw$first,cljs.core.cst$kw$else.cljs$core$IFn$_invoke$arity$1(bracket_info))) && (cljs.core.seq.call(null,cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(clause_map)))){
return cljs.pprint.format_error.call(null,"The else clause (\"~:;\") is only allowed in the first position for this directive.",offset);
} else {
if(cljs.core._EQ_.call(null,cljs.core.cst$kw$first,cljs.core.cst$kw$else.cljs$core$IFn$_invoke$arity$1(bracket_info))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.call(null,cljs.core.concat,clause_map,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$else,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null),cljs.core.cst$kw$else_DASH_params,else_params], null)),false,remainder__$2], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.call(null,cljs.core.concat,clause_map,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$clauses,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null)], null)),true,remainder__$2], null)], null);
}

}
}
}
} else {
if(cljs.core._EQ_.call(null,type,cljs.core.cst$kw$separator)){
if(cljs.core.truth_(saw_else)){
return cljs.pprint.format_error.call(null,"A plain clause (with \"~;\") follows an else clause (\"~:;\") inside bracket construction.",offset);
} else {
if(cljs.core.not.call(null,cljs.core.cst$kw$allows_DASH_separator.cljs$core$IFn$_invoke$arity$1(bracket_info))){
return cljs.pprint.format_error.call(null,"A separator (\"~;\") is in a bracket type that doesn't support it.",offset);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.call(null,cljs.core.concat,clause_map,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$clauses,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null)], null)),false,remainder__$2], null)], null);

}
}
} else {
return null;
}
}
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$clauses,cljs.core.PersistentVector.EMPTY], null),false,remainder], null)));
});
/**
 * Take a linearly compiled format and process the bracket directives to give it
 * the appropriate tree structure
 */
cljs.pprint.process_nesting = (function cljs$pprint$process_nesting(format){
return cljs.core.first.call(null,cljs.pprint.consume.call(null,(function (remainder){
var this$ = cljs.core.first.call(null,remainder);
var remainder__$1 = cljs.core.next.call(null,remainder);
var bracket = cljs.core.cst$kw$bracket_DASH_info.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(this$));
if(cljs.core.truth_(cljs.core.cst$kw$right.cljs$core$IFn$_invoke$arity$1(bracket))){
return cljs.pprint.process_bracket.call(null,this$,remainder__$1);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$,remainder__$1], null);
}
}),format));
});
/**
 * Compiles format-str into a compiled format which can be used as an argument
 * to cl-format just like a plain format string. Use this function for improved
 * performance when you're using the same format string repeatedly
 */
cljs.pprint.compile_format = (function cljs$pprint$compile_format(format_str){
var _STAR_format_str_STAR_12842 = cljs.pprint._STAR_format_str_STAR_;
cljs.pprint._STAR_format_str_STAR_ = format_str;

try{return cljs.pprint.process_nesting.call(null,cljs.core.first.call(null,cljs.pprint.consume.call(null,((function (_STAR_format_str_STAR_12842){
return (function (p__12843){
var vec__12844 = p__12843;
var s = cljs.core.nth.call(null,vec__12844,(0),null);
var offset = cljs.core.nth.call(null,vec__12844,(1),null);
if(cljs.core.empty_QMARK_.call(null,s)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,s], null);
} else {
var tilde = s.indexOf("~");
if((tilde < (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.pprint.compile_raw_string.call(null,s,offset),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",(offset + s.length)], null)], null);
} else {
if((tilde === (0))){
return cljs.pprint.compile_directive.call(null,cljs.core.subs.call(null,s,(1)),(offset + (1)));
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.pprint.compile_raw_string.call(null,cljs.core.subs.call(null,s,(0),tilde),offset),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,s,tilde),(tilde + offset)], null)], null);

}
}
}
});})(_STAR_format_str_STAR_12842))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [format_str,(0)], null))));
}finally {cljs.pprint._STAR_format_str_STAR_ = _STAR_format_str_STAR_12842;
}});
/**
 * determine whether a given compiled format has any directives that depend on the
 * column number or pretty printing
 */
cljs.pprint.needs_pretty = (function cljs$pprint$needs_pretty(format){
var format__$1 = format;
while(true){
if(cljs.core.empty_QMARK_.call(null,format__$1)){
return false;
} else {
if(cljs.core.truth_((function (){var or__6210__auto__ = cljs.core.cst$kw$pretty.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$flags.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,format__$1))));
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
var or__6210__auto____$1 = cljs.core.some.call(null,cljs$pprint$needs_pretty,cljs.core.first.call(null,cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,format__$1)))));
if(cljs.core.truth_(or__6210__auto____$1)){
return or__6210__auto____$1;
} else {
return cljs.core.some.call(null,cljs$pprint$needs_pretty,cljs.core.first.call(null,cljs.core.cst$kw$else.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,format__$1)))));
}
}
})())){
return true;
} else {
var G__12845 = cljs.core.next.call(null,format__$1);
format__$1 = G__12845;
continue;
}
}
break;
}
});
/**
 * Executes the format with the arguments.
 */
cljs.pprint.execute_format = (function cljs$pprint$execute_format(var_args){
var args12846 = [];
var len__7280__auto___12852 = arguments.length;
var i__7281__auto___12853 = (0);
while(true){
if((i__7281__auto___12853 < len__7280__auto___12852)){
args12846.push((arguments[i__7281__auto___12853]));

var G__12854 = (i__7281__auto___12853 + (1));
i__7281__auto___12853 = G__12854;
continue;
} else {
}
break;
}

var G__12848 = args12846.length;
switch (G__12848) {
case 3:
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12846.length)].join('')));

}
});

cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$3 = (function (stream,format,args){
var sb = (new goog.string.StringBuffer());
var real_stream = (((cljs.core.not.call(null,stream)) || (stream === true))?(new cljs.core.StringBufferWriter(sb)):stream);
var wrapped_stream = (cljs.core.truth_((function (){var and__6198__auto__ = cljs.pprint.needs_pretty.call(null,format);
if(cljs.core.truth_(and__6198__auto__)){
return cljs.core.not.call(null,cljs.pprint.pretty_writer_QMARK_.call(null,real_stream));
} else {
return and__6198__auto__;
}
})())?cljs.pprint.get_pretty_writer.call(null,real_stream):real_stream);
var _STAR_out_STAR_12849 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = wrapped_stream;

try{try{cljs.pprint.execute_format.call(null,format,args);
}finally {if(!((real_stream === wrapped_stream))){
cljs.core._flush.call(null,wrapped_stream);
} else {
}
}
if(cljs.core.not.call(null,stream)){
return [cljs.core.str(sb)].join('');
} else {
if(stream === true){
return cljs.core._STAR_print_fn_STAR_.call(null,[cljs.core.str(sb)].join(''));
} else {
return null;

}
}
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_12849;
}});

cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2 = (function (format,args){
cljs.pprint.map_passing_context.call(null,(function (element,context){
if(cljs.core.truth_(cljs.pprint.abort_QMARK_.call(null,context))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,context], null);
} else {
var vec__12850 = cljs.pprint.realize_parameter_list.call(null,cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(element),context);
var params = cljs.core.nth.call(null,vec__12850,(0),null);
var args__$1 = cljs.core.nth.call(null,vec__12850,(1),null);
var vec__12851 = cljs.pprint.unzip_map.call(null,params);
var params__$1 = cljs.core.nth.call(null,vec__12851,(0),null);
var offsets = cljs.core.nth.call(null,vec__12851,(1),null);
var params__$2 = cljs.core.assoc.call(null,params__$1,cljs.core.cst$kw$base_DASH_args,args__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.apply.call(null,cljs.core.cst$kw$func.cljs$core$IFn$_invoke$arity$1(element),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [params__$2,args__$1,offsets], null))], null);
}
}),args,format);

return null;
});

cljs.pprint.execute_format.cljs$lang$maxFixedArity = 3;
cljs.pprint.cached_compile = cljs.core.memoize.call(null,cljs.pprint.compile_format);
/**
 * Installs a function as a new method of multimethod associated with dispatch-value. 
 */
cljs.pprint.use_method = (function cljs$pprint$use_method(multifn,dispatch_val,func){
return cljs.core._add_method.call(null,multifn,dispatch_val,func);
});
cljs.pprint.reader_macros = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$sym$quote,"'",cljs.core.cst$sym$var,"#'",cljs.core.cst$sym$clojure$core_SLASH_deref,"@",cljs.core.cst$sym$clojure$core_SLASH_unquote,"~",cljs.core.cst$sym$cljs$core_SLASH_deref,"@",cljs.core.cst$sym$cljs$core_SLASH_unquote,"~"], null);
cljs.pprint.pprint_reader_macro = (function cljs$pprint$pprint_reader_macro(alis){
var macro_char = cljs.pprint.reader_macros.call(null,cljs.core.first.call(null,alis));
if(cljs.core.truth_((function (){var and__6198__auto__ = macro_char;
if(cljs.core.truth_(and__6198__auto__)){
return cljs.core._EQ_.call(null,(2),cljs.core.count.call(null,alis));
} else {
return and__6198__auto__;
}
})())){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,macro_char);

cljs.pprint.write_out.call(null,cljs.core.second.call(null,alis));

return true;
} else {
return null;
}
});
cljs.pprint.pprint_simple_list = (function cljs$pprint$pprint_simple_list(alis){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_12859_12862 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_12860_12863 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,"(",null,")");

var length_count12861_12864 = (0);
var alis_12865__$1 = cljs.core.seq.call(null,alis);
while(true){
if((cljs.core.not.call(null,cljs.core._STAR_print_length_STAR_)) || ((length_count12861_12864 < cljs.core._STAR_print_length_STAR_))){
if(alis_12865__$1){
cljs.pprint.write_out.call(null,cljs.core.first.call(null,alis_12865__$1));

if(cljs.core.next.call(null,alis_12865__$1)){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,cljs.core.cst$kw$linear);

var G__12866 = (length_count12861_12864 + (1));
var G__12867 = cljs.core.next.call(null,alis_12865__$1);
length_count12861_12864 = G__12866;
alis_12865__$1 = G__12867;
continue;
} else {
}
} else {
}
} else {
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_12860_12863;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_12859_12862;
}}

return null;
});
cljs.pprint.pprint_list = (function cljs$pprint$pprint_list(alis){
if(cljs.core.not.call(null,cljs.pprint.pprint_reader_macro.call(null,alis))){
return cljs.pprint.pprint_simple_list.call(null,alis);
} else {
return null;
}
});
cljs.pprint.pprint_vector = (function cljs$pprint$pprint_vector(avec){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_12871_12874 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_12872_12875 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,"[",null,"]");

var length_count12873_12876 = (0);
var aseq_12877 = cljs.core.seq.call(null,avec);
while(true){
if((cljs.core.not.call(null,cljs.core._STAR_print_length_STAR_)) || ((length_count12873_12876 < cljs.core._STAR_print_length_STAR_))){
if(aseq_12877){
cljs.pprint.write_out.call(null,cljs.core.first.call(null,aseq_12877));

if(cljs.core.next.call(null,aseq_12877)){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,cljs.core.cst$kw$linear);

var G__12878 = (length_count12873_12876 + (1));
var G__12879 = cljs.core.next.call(null,aseq_12877);
length_count12873_12876 = G__12878;
aseq_12877 = G__12879;
continue;
} else {
}
} else {
}
} else {
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_12872_12875;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_12871_12874;
}}

return null;
});
cljs.pprint.pprint_array = (function (){var format_in__12099__auto__ = "~<[~;~@{~w~^, ~:_~}~;]~:>";
var cf__12100__auto__ = ((typeof format_in__12099__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__12099__auto__):format_in__12099__auto__);
return ((function (format_in__12099__auto__,cf__12100__auto__){
return (function() { 
var G__12880__delegate = function (args__12101__auto__){
var navigator__12102__auto__ = cljs.pprint.init_navigator.call(null,args__12101__auto__);
return cljs.pprint.execute_format.call(null,cf__12100__auto__,navigator__12102__auto__);
};
var G__12880 = function (var_args){
var args__12101__auto__ = null;
if (arguments.length > 0) {
var G__12881__i = 0, G__12881__a = new Array(arguments.length -  0);
while (G__12881__i < G__12881__a.length) {G__12881__a[G__12881__i] = arguments[G__12881__i + 0]; ++G__12881__i;}
  args__12101__auto__ = new cljs.core.IndexedSeq(G__12881__a,0);
} 
return G__12880__delegate.call(this,args__12101__auto__);};
G__12880.cljs$lang$maxFixedArity = 0;
G__12880.cljs$lang$applyTo = (function (arglist__12882){
var args__12101__auto__ = cljs.core.seq(arglist__12882);
return G__12880__delegate(args__12101__auto__);
});
G__12880.cljs$core$IFn$_invoke$arity$variadic = G__12880__delegate;
return G__12880;
})()
;
;})(format_in__12099__auto__,cf__12100__auto__))
})();
cljs.pprint.pprint_map = (function cljs$pprint$pprint_map(amap){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_12888_12893 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_12889_12894 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,"{",null,"}");

var length_count12890_12895 = (0);
var aseq_12896 = cljs.core.seq.call(null,amap);
while(true){
if((cljs.core.not.call(null,cljs.core._STAR_print_length_STAR_)) || ((length_count12890_12895 < cljs.core._STAR_print_length_STAR_))){
if(aseq_12896){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_12891_12897 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_12892_12898 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,null,null,null);

cljs.pprint.write_out.call(null,cljs.core.ffirst.call(null,aseq_12896));

cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,cljs.core.cst$kw$linear);

cljs.pprint._STAR_current_length_STAR_ = (0);

cljs.pprint.write_out.call(null,cljs.core.fnext.call(null,cljs.core.first.call(null,aseq_12896)));

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_12892_12898;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_12891_12897;
}}


if(cljs.core.next.call(null,aseq_12896)){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,", ");

cljs.pprint.pprint_newline.call(null,cljs.core.cst$kw$linear);

var G__12899 = (length_count12890_12895 + (1));
var G__12900 = cljs.core.next.call(null,aseq_12896);
length_count12890_12895 = G__12899;
aseq_12896 = G__12900;
continue;
} else {
}
} else {
}
} else {
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_12889_12894;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_12888_12893;
}}

return null;
});
cljs.pprint.pprint_simple_default = (function cljs$pprint$pprint_simple_default(obj){
return cljs.core._write.call(null,cljs.core._STAR_out_STAR_,cljs.core.pr_str.call(null,obj));
});
cljs.pprint.pprint_set = (function (){var format_in__12099__auto__ = "~<#{~;~@{~w~^ ~:_~}~;}~:>";
var cf__12100__auto__ = ((typeof format_in__12099__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__12099__auto__):format_in__12099__auto__);
return ((function (format_in__12099__auto__,cf__12100__auto__){
return (function() { 
var G__12901__delegate = function (args__12101__auto__){
var navigator__12102__auto__ = cljs.pprint.init_navigator.call(null,args__12101__auto__);
return cljs.pprint.execute_format.call(null,cf__12100__auto__,navigator__12102__auto__);
};
var G__12901 = function (var_args){
var args__12101__auto__ = null;
if (arguments.length > 0) {
var G__12902__i = 0, G__12902__a = new Array(arguments.length -  0);
while (G__12902__i < G__12902__a.length) {G__12902__a[G__12902__i] = arguments[G__12902__i + 0]; ++G__12902__i;}
  args__12101__auto__ = new cljs.core.IndexedSeq(G__12902__a,0);
} 
return G__12901__delegate.call(this,args__12101__auto__);};
G__12901.cljs$lang$maxFixedArity = 0;
G__12901.cljs$lang$applyTo = (function (arglist__12903){
var args__12101__auto__ = cljs.core.seq(arglist__12903);
return G__12901__delegate(args__12101__auto__);
});
G__12901.cljs$core$IFn$_invoke$arity$variadic = G__12901__delegate;
return G__12901;
})()
;
;})(format_in__12099__auto__,cf__12100__auto__))
})();
cljs.pprint.type_map = new cljs.core.PersistentArrayMap(null, 2, ["core$future_call","Future","core$promise","Promise"], null);
/**
 * Map ugly type names to something simpler
 */
cljs.pprint.map_ref_type = (function cljs$pprint$map_ref_type(name){
var or__6210__auto__ = (function (){var temp__4657__auto__ = cljs.core.re_find.call(null,/^[^$]+\$[^$]+/,name);
if(cljs.core.truth_(temp__4657__auto__)){
var match = temp__4657__auto__;
return cljs.pprint.type_map.call(null,match);
} else {
return null;
}
})();
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return name;
}
});
cljs.pprint.pprint_ideref = (function cljs$pprint$pprint_ideref(o){
var prefix = [cljs.core.str("#<"),cljs.core.str(cljs.pprint.map_ref_type.call(null,cljs.core.type.call(null,o).name)),cljs.core.str("@"),cljs.core.str(goog.getUid(o)),cljs.core.str(": ")].join('');
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_12908_12912 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_12909_12913 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,prefix,null,">");

cljs.pprint.pprint_indent.call(null,cljs.core.cst$kw$block,(- (cljs.core.count.call(null,prefix) - (2))));

cljs.pprint.pprint_newline.call(null,cljs.core.cst$kw$linear);

cljs.pprint.write_out.call(null,(((function (){var and__6198__auto__ = ((!((o == null)))?((((o.cljs$lang$protocol_mask$partition1$ & (1))) || (o.cljs$core$IPending$))?true:(((!o.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IPending,o):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IPending,o));
if(and__6198__auto__){
return !(cljs.core._realized_QMARK_.call(null,o));
} else {
return and__6198__auto__;
}
})())?cljs.core.cst$kw$not_DASH_delivered:cljs.core.deref.call(null,o)));

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_12909_12913;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_12908_12912;
}}

return null;
});
cljs.pprint.pprint_pqueue = (function (){var format_in__12099__auto__ = "~<<-(~;~@{~w~^ ~_~}~;)-<~:>";
var cf__12100__auto__ = ((typeof format_in__12099__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__12099__auto__):format_in__12099__auto__);
return ((function (format_in__12099__auto__,cf__12100__auto__){
return (function() { 
var G__12914__delegate = function (args__12101__auto__){
var navigator__12102__auto__ = cljs.pprint.init_navigator.call(null,args__12101__auto__);
return cljs.pprint.execute_format.call(null,cf__12100__auto__,navigator__12102__auto__);
};
var G__12914 = function (var_args){
var args__12101__auto__ = null;
if (arguments.length > 0) {
var G__12915__i = 0, G__12915__a = new Array(arguments.length -  0);
while (G__12915__i < G__12915__a.length) {G__12915__a[G__12915__i] = arguments[G__12915__i + 0]; ++G__12915__i;}
  args__12101__auto__ = new cljs.core.IndexedSeq(G__12915__a,0);
} 
return G__12914__delegate.call(this,args__12101__auto__);};
G__12914.cljs$lang$maxFixedArity = 0;
G__12914.cljs$lang$applyTo = (function (arglist__12916){
var args__12101__auto__ = cljs.core.seq(arglist__12916);
return G__12914__delegate(args__12101__auto__);
});
G__12914.cljs$core$IFn$_invoke$arity$variadic = G__12914__delegate;
return G__12914;
})()
;
;})(format_in__12099__auto__,cf__12100__auto__))
})();
cljs.pprint.type_dispatcher = (function cljs$pprint$type_dispatcher(obj){
if((obj instanceof cljs.core.PersistentQueue)){
return cljs.core.cst$kw$queue;
} else {
if(((!((obj == null)))?((((obj.cljs$lang$protocol_mask$partition0$ & (32768))) || (obj.cljs$core$IDeref$))?true:(((!obj.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,obj):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,obj))){
return cljs.core.cst$kw$deref;
} else {
if((obj instanceof cljs.core.Symbol)){
return cljs.core.cst$kw$symbol;
} else {
if(cljs.core.seq_QMARK_.call(null,obj)){
return cljs.core.cst$kw$list;
} else {
if(cljs.core.map_QMARK_.call(null,obj)){
return cljs.core.cst$kw$map;
} else {
if(cljs.core.vector_QMARK_.call(null,obj)){
return cljs.core.cst$kw$vector;
} else {
if(cljs.core.set_QMARK_.call(null,obj)){
return cljs.core.cst$kw$set;
} else {
if((obj == null)){
return null;
} else {
return cljs.core.cst$kw$default;

}
}
}
}
}
}
}
}
});
if(typeof cljs.pprint.simple_dispatch !== 'undefined'){
} else {
/**
 * The pretty print dispatch function for simple data structure format.
 */
cljs.pprint.simple_dispatch = (function (){var method_table__7135__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__7136__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__7137__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__7138__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__7139__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.pprint","simple-dispatch"),cljs.pprint.type_dispatcher,cljs.core.cst$kw$default,hierarchy__7139__auto__,method_table__7135__auto__,prefer_table__7136__auto__,method_cache__7137__auto__,cached_hierarchy__7138__auto__));
})();
}
cljs.pprint.use_method.call(null,cljs.pprint.simple_dispatch,cljs.core.cst$kw$list,cljs.pprint.pprint_list);
cljs.pprint.use_method.call(null,cljs.pprint.simple_dispatch,cljs.core.cst$kw$vector,cljs.pprint.pprint_vector);
cljs.pprint.use_method.call(null,cljs.pprint.simple_dispatch,cljs.core.cst$kw$map,cljs.pprint.pprint_map);
cljs.pprint.use_method.call(null,cljs.pprint.simple_dispatch,cljs.core.cst$kw$set,cljs.pprint.pprint_set);
cljs.pprint.use_method.call(null,cljs.pprint.simple_dispatch,null,(function (){
return cljs.core._write.call(null,cljs.core._STAR_out_STAR_,cljs.core.pr_str.call(null,null));
}));
cljs.pprint.use_method.call(null,cljs.pprint.simple_dispatch,cljs.core.cst$kw$default,cljs.pprint.pprint_simple_default);
cljs.pprint.set_pprint_dispatch.call(null,cljs.pprint.simple_dispatch);
/**
 * Figure out which kind of brackets to use
 */
cljs.pprint.brackets = (function cljs$pprint$brackets(form){
if(cljs.core.vector_QMARK_.call(null,form)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[","]"], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(",")"], null);
}
});
/**
 * Pretty print a single reference (import, use, etc.) from a namespace decl
 */
cljs.pprint.pprint_ns_reference = (function cljs$pprint$pprint_ns_reference(reference){
if(cljs.core.sequential_QMARK_.call(null,reference)){
var vec__12927 = cljs.pprint.brackets.call(null,reference);
var start = cljs.core.nth.call(null,vec__12927,(0),null);
var end = cljs.core.nth.call(null,vec__12927,(1),null);
var vec__12928 = reference;
var keyw = cljs.core.nth.call(null,vec__12928,(0),null);
var args = cljs.core.nthnext.call(null,vec__12928,(1));
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_12929_12935 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_12930_12936 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,start,null,end);

(function (){var format_in__12099__auto__ = "~w~:i";
var cf__12100__auto__ = ((typeof format_in__12099__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__12099__auto__):format_in__12099__auto__);
return ((function (format_in__12099__auto__,cf__12100__auto__,_STAR_current_level_STAR_12929_12935,_STAR_current_length_STAR_12930_12936,vec__12927,start,end,vec__12928,keyw,args){
return (function() { 
var G__12937__delegate = function (args__12101__auto__){
var navigator__12102__auto__ = cljs.pprint.init_navigator.call(null,args__12101__auto__);
return cljs.pprint.execute_format.call(null,cf__12100__auto__,navigator__12102__auto__);
};
var G__12937 = function (var_args){
var args__12101__auto__ = null;
if (arguments.length > 0) {
var G__12938__i = 0, G__12938__a = new Array(arguments.length -  0);
while (G__12938__i < G__12938__a.length) {G__12938__a[G__12938__i] = arguments[G__12938__i + 0]; ++G__12938__i;}
  args__12101__auto__ = new cljs.core.IndexedSeq(G__12938__a,0);
} 
return G__12937__delegate.call(this,args__12101__auto__);};
G__12937.cljs$lang$maxFixedArity = 0;
G__12937.cljs$lang$applyTo = (function (arglist__12939){
var args__12101__auto__ = cljs.core.seq(arglist__12939);
return G__12937__delegate(args__12101__auto__);
});
G__12937.cljs$core$IFn$_invoke$arity$variadic = G__12937__delegate;
return G__12937;
})()
;
;})(format_in__12099__auto__,cf__12100__auto__,_STAR_current_level_STAR_12929_12935,_STAR_current_length_STAR_12930_12936,vec__12927,start,end,vec__12928,keyw,args))
})().call(null,keyw);

var args_12940__$1 = args;
while(true){
if(cljs.core.seq.call(null,args_12940__$1)){
(function (){var format_in__12099__auto__ = " ";
var cf__12100__auto__ = ((typeof format_in__12099__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__12099__auto__):format_in__12099__auto__);
return ((function (args_12940__$1,format_in__12099__auto__,cf__12100__auto__,_STAR_current_level_STAR_12929_12935,_STAR_current_length_STAR_12930_12936,vec__12927,start,end,vec__12928,keyw,args){
return (function() { 
var G__12941__delegate = function (args__12101__auto__){
var navigator__12102__auto__ = cljs.pprint.init_navigator.call(null,args__12101__auto__);
return cljs.pprint.execute_format.call(null,cf__12100__auto__,navigator__12102__auto__);
};
var G__12941 = function (var_args){
var args__12101__auto__ = null;
if (arguments.length > 0) {
var G__12942__i = 0, G__12942__a = new Array(arguments.length -  0);
while (G__12942__i < G__12942__a.length) {G__12942__a[G__12942__i] = arguments[G__12942__i + 0]; ++G__12942__i;}
  args__12101__auto__ = new cljs.core.IndexedSeq(G__12942__a,0);
} 
return G__12941__delegate.call(this,args__12101__auto__);};
G__12941.cljs$lang$maxFixedArity = 0;
G__12941.cljs$lang$applyTo = (function (arglist__12943){
var args__12101__auto__ = cljs.core.seq(arglist__12943);
return G__12941__delegate(args__12101__auto__);
});
G__12941.cljs$core$IFn$_invoke$arity$variadic = G__12941__delegate;
return G__12941;
})()
;
;})(args_12940__$1,format_in__12099__auto__,cf__12100__auto__,_STAR_current_level_STAR_12929_12935,_STAR_current_length_STAR_12930_12936,vec__12927,start,end,vec__12928,keyw,args))
})().call(null);

var arg_12944 = cljs.core.first.call(null,args_12940__$1);
if(cljs.core.sequential_QMARK_.call(null,arg_12944)){
var vec__12931_12945 = cljs.pprint.brackets.call(null,arg_12944);
var start_12946__$1 = cljs.core.nth.call(null,vec__12931_12945,(0),null);
var end_12947__$1 = cljs.core.nth.call(null,vec__12931_12945,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_12932_12948 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_12933_12949 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,start_12946__$1,null,end_12947__$1);

if((cljs.core._EQ_.call(null,cljs.core.count.call(null,arg_12944),(3))) && ((cljs.core.second.call(null,arg_12944) instanceof cljs.core.Keyword))){
var vec__12934_12950 = arg_12944;
var ns_12951 = cljs.core.nth.call(null,vec__12934_12950,(0),null);
var kw_12952 = cljs.core.nth.call(null,vec__12934_12950,(1),null);
var lis_12953 = cljs.core.nth.call(null,vec__12934_12950,(2),null);
(function (){var format_in__12099__auto__ = "~w ~w ";
var cf__12100__auto__ = ((typeof format_in__12099__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__12099__auto__):format_in__12099__auto__);
return ((function (args_12940__$1,format_in__12099__auto__,cf__12100__auto__,vec__12934_12950,ns_12951,kw_12952,lis_12953,_STAR_current_level_STAR_12932_12948,_STAR_current_length_STAR_12933_12949,vec__12931_12945,start_12946__$1,end_12947__$1,arg_12944,_STAR_current_level_STAR_12929_12935,_STAR_current_length_STAR_12930_12936,vec__12927,start,end,vec__12928,keyw,args){
return (function() { 
var G__12954__delegate = function (args__12101__auto__){
var navigator__12102__auto__ = cljs.pprint.init_navigator.call(null,args__12101__auto__);
return cljs.pprint.execute_format.call(null,cf__12100__auto__,navigator__12102__auto__);
};
var G__12954 = function (var_args){
var args__12101__auto__ = null;
if (arguments.length > 0) {
var G__12955__i = 0, G__12955__a = new Array(arguments.length -  0);
while (G__12955__i < G__12955__a.length) {G__12955__a[G__12955__i] = arguments[G__12955__i + 0]; ++G__12955__i;}
  args__12101__auto__ = new cljs.core.IndexedSeq(G__12955__a,0);
} 
return G__12954__delegate.call(this,args__12101__auto__);};
G__12954.cljs$lang$maxFixedArity = 0;
G__12954.cljs$lang$applyTo = (function (arglist__12956){
var args__12101__auto__ = cljs.core.seq(arglist__12956);
return G__12954__delegate(args__12101__auto__);
});
G__12954.cljs$core$IFn$_invoke$arity$variadic = G__12954__delegate;
return G__12954;
})()
;
;})(args_12940__$1,format_in__12099__auto__,cf__12100__auto__,vec__12934_12950,ns_12951,kw_12952,lis_12953,_STAR_current_level_STAR_12932_12948,_STAR_current_length_STAR_12933_12949,vec__12931_12945,start_12946__$1,end_12947__$1,arg_12944,_STAR_current_level_STAR_12929_12935,_STAR_current_length_STAR_12930_12936,vec__12927,start,end,vec__12928,keyw,args))
})().call(null,ns_12951,kw_12952);

if(cljs.core.sequential_QMARK_.call(null,lis_12953)){
(function (){var format_in__12099__auto__ = ((cljs.core.vector_QMARK_.call(null,lis_12953))?"~<[~;~@{~w~^ ~:_~}~;]~:>":"~<(~;~@{~w~^ ~:_~}~;)~:>");
var cf__12100__auto__ = ((typeof format_in__12099__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__12099__auto__):format_in__12099__auto__);
return ((function (args_12940__$1,format_in__12099__auto__,cf__12100__auto__,vec__12934_12950,ns_12951,kw_12952,lis_12953,_STAR_current_level_STAR_12932_12948,_STAR_current_length_STAR_12933_12949,vec__12931_12945,start_12946__$1,end_12947__$1,arg_12944,_STAR_current_level_STAR_12929_12935,_STAR_current_length_STAR_12930_12936,vec__12927,start,end,vec__12928,keyw,args){
return (function() { 
var G__12957__delegate = function (args__12101__auto__){
var navigator__12102__auto__ = cljs.pprint.init_navigator.call(null,args__12101__auto__);
return cljs.pprint.execute_format.call(null,cf__12100__auto__,navigator__12102__auto__);
};
var G__12957 = function (var_args){
var args__12101__auto__ = null;
if (arguments.length > 0) {
var G__12958__i = 0, G__12958__a = new Array(arguments.length -  0);
while (G__12958__i < G__12958__a.length) {G__12958__a[G__12958__i] = arguments[G__12958__i + 0]; ++G__12958__i;}
  args__12101__auto__ = new cljs.core.IndexedSeq(G__12958__a,0);
} 
return G__12957__delegate.call(this,args__12101__auto__);};
G__12957.cljs$lang$maxFixedArity = 0;
G__12957.cljs$lang$applyTo = (function (arglist__12959){
var args__12101__auto__ = cljs.core.seq(arglist__12959);
return G__12957__delegate(args__12101__auto__);
});
G__12957.cljs$core$IFn$_invoke$arity$variadic = G__12957__delegate;
return G__12957;
})()
;
;})(args_12940__$1,format_in__12099__auto__,cf__12100__auto__,vec__12934_12950,ns_12951,kw_12952,lis_12953,_STAR_current_level_STAR_12932_12948,_STAR_current_length_STAR_12933_12949,vec__12931_12945,start_12946__$1,end_12947__$1,arg_12944,_STAR_current_level_STAR_12929_12935,_STAR_current_length_STAR_12930_12936,vec__12927,start,end,vec__12928,keyw,args))
})().call(null,lis_12953);
} else {
cljs.pprint.write_out.call(null,lis_12953);
}
} else {
cljs.core.apply.call(null,(function (){var format_in__12099__auto__ = "~w ~:i~@{~w~^ ~:_~}";
var cf__12100__auto__ = ((typeof format_in__12099__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__12099__auto__):format_in__12099__auto__);
return ((function (args_12940__$1,format_in__12099__auto__,cf__12100__auto__,_STAR_current_level_STAR_12932_12948,_STAR_current_length_STAR_12933_12949,vec__12931_12945,start_12946__$1,end_12947__$1,arg_12944,_STAR_current_level_STAR_12929_12935,_STAR_current_length_STAR_12930_12936,vec__12927,start,end,vec__12928,keyw,args){
return (function() { 
var G__12960__delegate = function (args__12101__auto__){
var navigator__12102__auto__ = cljs.pprint.init_navigator.call(null,args__12101__auto__);
return cljs.pprint.execute_format.call(null,cf__12100__auto__,navigator__12102__auto__);
};
var G__12960 = function (var_args){
var args__12101__auto__ = null;
if (arguments.length > 0) {
var G__12961__i = 0, G__12961__a = new Array(arguments.length -  0);
while (G__12961__i < G__12961__a.length) {G__12961__a[G__12961__i] = arguments[G__12961__i + 0]; ++G__12961__i;}
  args__12101__auto__ = new cljs.core.IndexedSeq(G__12961__a,0);
} 
return G__12960__delegate.call(this,args__12101__auto__);};
G__12960.cljs$lang$maxFixedArity = 0;
G__12960.cljs$lang$applyTo = (function (arglist__12962){
var args__12101__auto__ = cljs.core.seq(arglist__12962);
return G__12960__delegate(args__12101__auto__);
});
G__12960.cljs$core$IFn$_invoke$arity$variadic = G__12960__delegate;
return G__12960;
})()
;
;})(args_12940__$1,format_in__12099__auto__,cf__12100__auto__,_STAR_current_level_STAR_12932_12948,_STAR_current_length_STAR_12933_12949,vec__12931_12945,start_12946__$1,end_12947__$1,arg_12944,_STAR_current_level_STAR_12929_12935,_STAR_current_length_STAR_12930_12936,vec__12927,start,end,vec__12928,keyw,args))
})(),arg_12944);
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_12933_12949;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_12932_12948;
}}


if(cljs.core.next.call(null,args_12940__$1)){
(function (){var format_in__12099__auto__ = "~_";
var cf__12100__auto__ = ((typeof format_in__12099__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__12099__auto__):format_in__12099__auto__);
return ((function (args_12940__$1,format_in__12099__auto__,cf__12100__auto__,vec__12931_12945,start_12946__$1,end_12947__$1,arg_12944,_STAR_current_level_STAR_12929_12935,_STAR_current_length_STAR_12930_12936,vec__12927,start,end,vec__12928,keyw,args){
return (function() { 
var G__12963__delegate = function (args__12101__auto__){
var navigator__12102__auto__ = cljs.pprint.init_navigator.call(null,args__12101__auto__);
return cljs.pprint.execute_format.call(null,cf__12100__auto__,navigator__12102__auto__);
};
var G__12963 = function (var_args){
var args__12101__auto__ = null;
if (arguments.length > 0) {
var G__12964__i = 0, G__12964__a = new Array(arguments.length -  0);
while (G__12964__i < G__12964__a.length) {G__12964__a[G__12964__i] = arguments[G__12964__i + 0]; ++G__12964__i;}
  args__12101__auto__ = new cljs.core.IndexedSeq(G__12964__a,0);
} 
return G__12963__delegate.call(this,args__12101__auto__);};
G__12963.cljs$lang$maxFixedArity = 0;
G__12963.cljs$lang$applyTo = (function (arglist__12965){
var args__12101__auto__ = cljs.core.seq(arglist__12965);
return G__12963__delegate(args__12101__auto__);
});
G__12963.cljs$core$IFn$_invoke$arity$variadic = G__12963__delegate;
return G__12963;
})()
;
;})(args_12940__$1,format_in__12099__auto__,cf__12100__auto__,vec__12931_12945,start_12946__$1,end_12947__$1,arg_12944,_STAR_current_level_STAR_12929_12935,_STAR_current_length_STAR_12930_12936,vec__12927,start,end,vec__12928,keyw,args))
})().call(null);
} else {
}
} else {
cljs.pprint.write_out.call(null,arg_12944);

if(cljs.core.next.call(null,args_12940__$1)){
(function (){var format_in__12099__auto__ = "~:_";
var cf__12100__auto__ = ((typeof format_in__12099__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__12099__auto__):format_in__12099__auto__);
return ((function (args_12940__$1,format_in__12099__auto__,cf__12100__auto__,arg_12944,_STAR_current_level_STAR_12929_12935,_STAR_current_length_STAR_12930_12936,vec__12927,start,end,vec__12928,keyw,args){
return (function() { 
var G__12966__delegate = function (args__12101__auto__){
var navigator__12102__auto__ = cljs.pprint.init_navigator.call(null,args__12101__auto__);
return cljs.pprint.execute_format.call(null,cf__12100__auto__,navigator__12102__auto__);
};
var G__12966 = function (var_args){
var args__12101__auto__ = null;
if (arguments.length > 0) {
var G__12967__i = 0, G__12967__a = new Array(arguments.length -  0);
while (G__12967__i < G__12967__a.length) {G__12967__a[G__12967__i] = arguments[G__12967__i + 0]; ++G__12967__i;}
  args__12101__auto__ = new cljs.core.IndexedSeq(G__12967__a,0);
} 
return G__12966__delegate.call(this,args__12101__auto__);};
G__12966.cljs$lang$maxFixedArity = 0;
G__12966.cljs$lang$applyTo = (function (arglist__12968){
var args__12101__auto__ = cljs.core.seq(arglist__12968);
return G__12966__delegate(args__12101__auto__);
});
G__12966.cljs$core$IFn$_invoke$arity$variadic = G__12966__delegate;
return G__12966;
})()
;
;})(args_12940__$1,format_in__12099__auto__,cf__12100__auto__,arg_12944,_STAR_current_level_STAR_12929_12935,_STAR_current_length_STAR_12930_12936,vec__12927,start,end,vec__12928,keyw,args))
})().call(null);
} else {
}
}

var G__12969 = cljs.core.next.call(null,args_12940__$1);
args_12940__$1 = G__12969;
continue;
} else {
}
break;
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_12930_12936;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_12929_12935;
}}

return null;
} else {
return cljs.pprint.write_out.call(null,reference);
}
});
/**
 * The pretty print dispatch chunk for the ns macro
 */
cljs.pprint.pprint_ns = (function cljs$pprint$pprint_ns(alis){
if(cljs.core.next.call(null,alis)){
var vec__12975 = alis;
var ns_sym = cljs.core.nth.call(null,vec__12975,(0),null);
var ns_name = cljs.core.nth.call(null,vec__12975,(1),null);
var stuff = cljs.core.nthnext.call(null,vec__12975,(2));
var vec__12976 = ((typeof cljs.core.first.call(null,stuff) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,stuff),cljs.core.next.call(null,stuff)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff], null));
var doc_str = cljs.core.nth.call(null,vec__12976,(0),null);
var stuff__$1 = cljs.core.nth.call(null,vec__12976,(1),null);
var vec__12977 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,stuff__$1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,stuff__$1),cljs.core.next.call(null,stuff__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff__$1], null));
var attr_map = cljs.core.nth.call(null,vec__12977,(0),null);
var references = cljs.core.nth.call(null,vec__12977,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_12978_12980 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_12979_12981 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,"(",null,")");

(function (){var format_in__12099__auto__ = "~w ~1I~@_~w";
var cf__12100__auto__ = ((typeof format_in__12099__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__12099__auto__):format_in__12099__auto__);
return ((function (format_in__12099__auto__,cf__12100__auto__,_STAR_current_level_STAR_12978_12980,_STAR_current_length_STAR_12979_12981,vec__12975,ns_sym,ns_name,stuff,vec__12976,doc_str,stuff__$1,vec__12977,attr_map,references){
return (function() { 
var G__12982__delegate = function (args__12101__auto__){
var navigator__12102__auto__ = cljs.pprint.init_navigator.call(null,args__12101__auto__);
return cljs.pprint.execute_format.call(null,cf__12100__auto__,navigator__12102__auto__);
};
var G__12982 = function (var_args){
var args__12101__auto__ = null;
if (arguments.length > 0) {
var G__12983__i = 0, G__12983__a = new Array(arguments.length -  0);
while (G__12983__i < G__12983__a.length) {G__12983__a[G__12983__i] = arguments[G__12983__i + 0]; ++G__12983__i;}
  args__12101__auto__ = new cljs.core.IndexedSeq(G__12983__a,0);
} 
return G__12982__delegate.call(this,args__12101__auto__);};
G__12982.cljs$lang$maxFixedArity = 0;
G__12982.cljs$lang$applyTo = (function (arglist__12984){
var args__12101__auto__ = cljs.core.seq(arglist__12984);
return G__12982__delegate(args__12101__auto__);
});
G__12982.cljs$core$IFn$_invoke$arity$variadic = G__12982__delegate;
return G__12982;
})()
;
;})(format_in__12099__auto__,cf__12100__auto__,_STAR_current_level_STAR_12978_12980,_STAR_current_length_STAR_12979_12981,vec__12975,ns_sym,ns_name,stuff,vec__12976,doc_str,stuff__$1,vec__12977,attr_map,references))
})().call(null,ns_sym,ns_name);

if(cljs.core.truth_((function (){var or__6210__auto__ = doc_str;
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
var or__6210__auto____$1 = attr_map;
if(cljs.core.truth_(or__6210__auto____$1)){
return or__6210__auto____$1;
} else {
return cljs.core.seq.call(null,references);
}
}
})())){
(function (){var format_in__12099__auto__ = "~@:_";
var cf__12100__auto__ = ((typeof format_in__12099__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__12099__auto__):format_in__12099__auto__);
return ((function (format_in__12099__auto__,cf__12100__auto__,_STAR_current_level_STAR_12978_12980,_STAR_current_length_STAR_12979_12981,vec__12975,ns_sym,ns_name,stuff,vec__12976,doc_str,stuff__$1,vec__12977,attr_map,references){
return (function() { 
var G__12985__delegate = function (args__12101__auto__){
var navigator__12102__auto__ = cljs.pprint.init_navigator.call(null,args__12101__auto__);
return cljs.pprint.execute_format.call(null,cf__12100__auto__,navigator__12102__auto__);
};
var G__12985 = function (var_args){
var args__12101__auto__ = null;
if (arguments.length > 0) {
var G__12986__i = 0, G__12986__a = new Array(arguments.length -  0);
while (G__12986__i < G__12986__a.length) {G__12986__a[G__12986__i] = arguments[G__12986__i + 0]; ++G__12986__i;}
  args__12101__auto__ = new cljs.core.IndexedSeq(G__12986__a,0);
} 
return G__12985__delegate.call(this,args__12101__auto__);};
G__12985.cljs$lang$maxFixedArity = 0;
G__12985.cljs$lang$applyTo = (function (arglist__12987){
var args__12101__auto__ = cljs.core.seq(arglist__12987);
return G__12985__delegate(args__12101__auto__);
});
G__12985.cljs$core$IFn$_invoke$arity$variadic = G__12985__delegate;
return G__12985;
})()
;
;})(format_in__12099__auto__,cf__12100__auto__,_STAR_current_level_STAR_12978_12980,_STAR_current_length_STAR_12979_12981,vec__12975,ns_sym,ns_name,stuff,vec__12976,doc_str,stuff__$1,vec__12977,attr_map,references))
})().call(null);
} else {
}

if(cljs.core.truth_(doc_str)){
cljs.pprint.cl_format.call(null,true,"\"~a\"~:[~;~:@_~]",doc_str,(function (){var or__6210__auto__ = attr_map;
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return cljs.core.seq.call(null,references);
}
})());
} else {
}

if(cljs.core.truth_(attr_map)){
(function (){var format_in__12099__auto__ = "~w~:[~;~:@_~]";
var cf__12100__auto__ = ((typeof format_in__12099__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__12099__auto__):format_in__12099__auto__);
return ((function (format_in__12099__auto__,cf__12100__auto__,_STAR_current_level_STAR_12978_12980,_STAR_current_length_STAR_12979_12981,vec__12975,ns_sym,ns_name,stuff,vec__12976,doc_str,stuff__$1,vec__12977,attr_map,references){
return (function() { 
var G__12988__delegate = function (args__12101__auto__){
var navigator__12102__auto__ = cljs.pprint.init_navigator.call(null,args__12101__auto__);
return cljs.pprint.execute_format.call(null,cf__12100__auto__,navigator__12102__auto__);
};
var G__12988 = function (var_args){
var args__12101__auto__ = null;
if (arguments.length > 0) {
var G__12989__i = 0, G__12989__a = new Array(arguments.length -  0);
while (G__12989__i < G__12989__a.length) {G__12989__a[G__12989__i] = arguments[G__12989__i + 0]; ++G__12989__i;}
  args__12101__auto__ = new cljs.core.IndexedSeq(G__12989__a,0);
} 
return G__12988__delegate.call(this,args__12101__auto__);};
G__12988.cljs$lang$maxFixedArity = 0;
G__12988.cljs$lang$applyTo = (function (arglist__12990){
var args__12101__auto__ = cljs.core.seq(arglist__12990);
return G__12988__delegate(args__12101__auto__);
});
G__12988.cljs$core$IFn$_invoke$arity$variadic = G__12988__delegate;
return G__12988;
})()
;
;})(format_in__12099__auto__,cf__12100__auto__,_STAR_current_level_STAR_12978_12980,_STAR_current_length_STAR_12979_12981,vec__12975,ns_sym,ns_name,stuff,vec__12976,doc_str,stuff__$1,vec__12977,attr_map,references))
})().call(null,attr_map,cljs.core.seq.call(null,references));
} else {
}

var references_12991__$1 = references;
while(true){
cljs.pprint.pprint_ns_reference.call(null,cljs.core.first.call(null,references_12991__$1));

var temp__4657__auto___12992 = cljs.core.next.call(null,references_12991__$1);
if(temp__4657__auto___12992){
var references_12993__$2 = temp__4657__auto___12992;
cljs.pprint.pprint_newline.call(null,cljs.core.cst$kw$linear);

var G__12994 = references_12993__$2;
references_12991__$1 = G__12994;
continue;
} else {
}
break;
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_12979_12981;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_12978_12980;
}}

return null;
} else {
return cljs.pprint.write_out.call(null,alis);
}
});
cljs.pprint.pprint_hold_first = (function (){var format_in__12099__auto__ = "~:<~w~^ ~@_~w~^ ~_~@{~w~^ ~_~}~:>";
var cf__12100__auto__ = ((typeof format_in__12099__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__12099__auto__):format_in__12099__auto__);
return ((function (format_in__12099__auto__,cf__12100__auto__){
return (function() { 
var G__12995__delegate = function (args__12101__auto__){
var navigator__12102__auto__ = cljs.pprint.init_navigator.call(null,args__12101__auto__);
return cljs.pprint.execute_format.call(null,cf__12100__auto__,navigator__12102__auto__);
};
var G__12995 = function (var_args){
var args__12101__auto__ = null;
if (arguments.length > 0) {
var G__12996__i = 0, G__12996__a = new Array(arguments.length -  0);
while (G__12996__i < G__12996__a.length) {G__12996__a[G__12996__i] = arguments[G__12996__i + 0]; ++G__12996__i;}
  args__12101__auto__ = new cljs.core.IndexedSeq(G__12996__a,0);
} 
return G__12995__delegate.call(this,args__12101__auto__);};
G__12995.cljs$lang$maxFixedArity = 0;
G__12995.cljs$lang$applyTo = (function (arglist__12997){
var args__12101__auto__ = cljs.core.seq(arglist__12997);
return G__12995__delegate(args__12101__auto__);
});
G__12995.cljs$core$IFn$_invoke$arity$variadic = G__12995__delegate;
return G__12995;
})()
;
;})(format_in__12099__auto__,cf__12100__auto__))
})();
cljs.pprint.single_defn = (function cljs$pprint$single_defn(alis,has_doc_str_QMARK_){
if(cljs.core.seq.call(null,alis)){
if(cljs.core.truth_(has_doc_str_QMARK_)){
(function (){var format_in__12099__auto__ = " ~_";
var cf__12100__auto__ = ((typeof format_in__12099__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__12099__auto__):format_in__12099__auto__);
return ((function (format_in__12099__auto__,cf__12100__auto__){
return (function() { 
var G__12998__delegate = function (args__12101__auto__){
var navigator__12102__auto__ = cljs.pprint.init_navigator.call(null,args__12101__auto__);
return cljs.pprint.execute_format.call(null,cf__12100__auto__,navigator__12102__auto__);
};
var G__12998 = function (var_args){
var args__12101__auto__ = null;
if (arguments.length > 0) {
var G__12999__i = 0, G__12999__a = new Array(arguments.length -  0);
while (G__12999__i < G__12999__a.length) {G__12999__a[G__12999__i] = arguments[G__12999__i + 0]; ++G__12999__i;}
  args__12101__auto__ = new cljs.core.IndexedSeq(G__12999__a,0);
} 
return G__12998__delegate.call(this,args__12101__auto__);};
G__12998.cljs$lang$maxFixedArity = 0;
G__12998.cljs$lang$applyTo = (function (arglist__13000){
var args__12101__auto__ = cljs.core.seq(arglist__13000);
return G__12998__delegate(args__12101__auto__);
});
G__12998.cljs$core$IFn$_invoke$arity$variadic = G__12998__delegate;
return G__12998;
})()
;
;})(format_in__12099__auto__,cf__12100__auto__))
})().call(null);
} else {
(function (){var format_in__12099__auto__ = " ~@_";
var cf__12100__auto__ = ((typeof format_in__12099__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__12099__auto__):format_in__12099__auto__);
return ((function (format_in__12099__auto__,cf__12100__auto__){
return (function() { 
var G__13001__delegate = function (args__12101__auto__){
var navigator__12102__auto__ = cljs.pprint.init_navigator.call(null,args__12101__auto__);
return cljs.pprint.execute_format.call(null,cf__12100__auto__,navigator__12102__auto__);
};
var G__13001 = function (var_args){
var args__12101__auto__ = null;
if (arguments.length > 0) {
var G__13002__i = 0, G__13002__a = new Array(arguments.length -  0);
while (G__13002__i < G__13002__a.length) {G__13002__a[G__13002__i] = arguments[G__13002__i + 0]; ++G__13002__i;}
  args__12101__auto__ = new cljs.core.IndexedSeq(G__13002__a,0);
} 
return G__13001__delegate.call(this,args__12101__auto__);};
G__13001.cljs$lang$maxFixedArity = 0;
G__13001.cljs$lang$applyTo = (function (arglist__13003){
var args__12101__auto__ = cljs.core.seq(arglist__13003);
return G__13001__delegate(args__12101__auto__);
});
G__13001.cljs$core$IFn$_invoke$arity$variadic = G__13001__delegate;
return G__13001;
})()
;
;})(format_in__12099__auto__,cf__12100__auto__))
})().call(null);
}

return (function (){var format_in__12099__auto__ = "~{~w~^ ~_~}";
var cf__12100__auto__ = ((typeof format_in__12099__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__12099__auto__):format_in__12099__auto__);
return ((function (format_in__12099__auto__,cf__12100__auto__){
return (function() { 
var G__13004__delegate = function (args__12101__auto__){
var navigator__12102__auto__ = cljs.pprint.init_navigator.call(null,args__12101__auto__);
return cljs.pprint.execute_format.call(null,cf__12100__auto__,navigator__12102__auto__);
};
var G__13004 = function (var_args){
var args__12101__auto__ = null;
if (arguments.length > 0) {
var G__13005__i = 0, G__13005__a = new Array(arguments.length -  0);
while (G__13005__i < G__13005__a.length) {G__13005__a[G__13005__i] = arguments[G__13005__i + 0]; ++G__13005__i;}
  args__12101__auto__ = new cljs.core.IndexedSeq(G__13005__a,0);
} 
return G__13004__delegate.call(this,args__12101__auto__);};
G__13004.cljs$lang$maxFixedArity = 0;
G__13004.cljs$lang$applyTo = (function (arglist__13006){
var args__12101__auto__ = cljs.core.seq(arglist__13006);
return G__13004__delegate(args__12101__auto__);
});
G__13004.cljs$core$IFn$_invoke$arity$variadic = G__13004__delegate;
return G__13004;
})()
;
;})(format_in__12099__auto__,cf__12100__auto__))
})().call(null,alis);
} else {
return null;
}
});
cljs.pprint.multi_defn = (function cljs$pprint$multi_defn(alis,has_doc_str_QMARK_){
if(cljs.core.seq.call(null,alis)){
return (function (){var format_in__12099__auto__ = " ~_~{~w~^ ~_~}";
var cf__12100__auto__ = ((typeof format_in__12099__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__12099__auto__):format_in__12099__auto__);
return ((function (format_in__12099__auto__,cf__12100__auto__){
return (function() { 
var G__13007__delegate = function (args__12101__auto__){
var navigator__12102__auto__ = cljs.pprint.init_navigator.call(null,args__12101__auto__);
return cljs.pprint.execute_format.call(null,cf__12100__auto__,navigator__12102__auto__);
};
var G__13007 = function (var_args){
var args__12101__auto__ = null;
if (arguments.length > 0) {
var G__13008__i = 0, G__13008__a = new Array(arguments.length -  0);
while (G__13008__i < G__13008__a.length) {G__13008__a[G__13008__i] = arguments[G__13008__i + 0]; ++G__13008__i;}
  args__12101__auto__ = new cljs.core.IndexedSeq(G__13008__a,0);
} 
return G__13007__delegate.call(this,args__12101__auto__);};
G__13007.cljs$lang$maxFixedArity = 0;
G__13007.cljs$lang$applyTo = (function (arglist__13009){
var args__12101__auto__ = cljs.core.seq(arglist__13009);
return G__13007__delegate(args__12101__auto__);
});
G__13007.cljs$core$IFn$_invoke$arity$variadic = G__13007__delegate;
return G__13007;
})()
;
;})(format_in__12099__auto__,cf__12100__auto__))
})().call(null,alis);
} else {
return null;
}
});
cljs.pprint.pprint_defn = (function cljs$pprint$pprint_defn(alis){
if(cljs.core.next.call(null,alis)){
var vec__13015 = alis;
var defn_sym = cljs.core.nth.call(null,vec__13015,(0),null);
var defn_name = cljs.core.nth.call(null,vec__13015,(1),null);
var stuff = cljs.core.nthnext.call(null,vec__13015,(2));
var vec__13016 = ((typeof cljs.core.first.call(null,stuff) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,stuff),cljs.core.next.call(null,stuff)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff], null));
var doc_str = cljs.core.nth.call(null,vec__13016,(0),null);
var stuff__$1 = cljs.core.nth.call(null,vec__13016,(1),null);
var vec__13017 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,stuff__$1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,stuff__$1),cljs.core.next.call(null,stuff__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff__$1], null));
var attr_map = cljs.core.nth.call(null,vec__13017,(0),null);
var stuff__$2 = cljs.core.nth.call(null,vec__13017,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_13018_13020 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_13019_13021 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,"(",null,")");

(function (){var format_in__12099__auto__ = "~w ~1I~@_~w";
var cf__12100__auto__ = ((typeof format_in__12099__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__12099__auto__):format_in__12099__auto__);
return ((function (format_in__12099__auto__,cf__12100__auto__,_STAR_current_level_STAR_13018_13020,_STAR_current_length_STAR_13019_13021,vec__13015,defn_sym,defn_name,stuff,vec__13016,doc_str,stuff__$1,vec__13017,attr_map,stuff__$2){
return (function() { 
var G__13022__delegate = function (args__12101__auto__){
var navigator__12102__auto__ = cljs.pprint.init_navigator.call(null,args__12101__auto__);
return cljs.pprint.execute_format.call(null,cf__12100__auto__,navigator__12102__auto__);
};
var G__13022 = function (var_args){
var args__12101__auto__ = null;
if (arguments.length > 0) {
var G__13023__i = 0, G__13023__a = new Array(arguments.length -  0);
while (G__13023__i < G__13023__a.length) {G__13023__a[G__13023__i] = arguments[G__13023__i + 0]; ++G__13023__i;}
  args__12101__auto__ = new cljs.core.IndexedSeq(G__13023__a,0);
} 
return G__13022__delegate.call(this,args__12101__auto__);};
G__13022.cljs$lang$maxFixedArity = 0;
G__13022.cljs$lang$applyTo = (function (arglist__13024){
var args__12101__auto__ = cljs.core.seq(arglist__13024);
return G__13022__delegate(args__12101__auto__);
});
G__13022.cljs$core$IFn$_invoke$arity$variadic = G__13022__delegate;
return G__13022;
})()
;
;})(format_in__12099__auto__,cf__12100__auto__,_STAR_current_level_STAR_13018_13020,_STAR_current_length_STAR_13019_13021,vec__13015,defn_sym,defn_name,stuff,vec__13016,doc_str,stuff__$1,vec__13017,attr_map,stuff__$2))
})().call(null,defn_sym,defn_name);

if(cljs.core.truth_(doc_str)){
(function (){var format_in__12099__auto__ = " ~_~w";
var cf__12100__auto__ = ((typeof format_in__12099__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__12099__auto__):format_in__12099__auto__);
return ((function (format_in__12099__auto__,cf__12100__auto__,_STAR_current_level_STAR_13018_13020,_STAR_current_length_STAR_13019_13021,vec__13015,defn_sym,defn_name,stuff,vec__13016,doc_str,stuff__$1,vec__13017,attr_map,stuff__$2){
return (function() { 
var G__13025__delegate = function (args__12101__auto__){
var navigator__12102__auto__ = cljs.pprint.init_navigator.call(null,args__12101__auto__);
return cljs.pprint.execute_format.call(null,cf__12100__auto__,navigator__12102__auto__);
};
var G__13025 = function (var_args){
var args__12101__auto__ = null;
if (arguments.length > 0) {
var G__13026__i = 0, G__13026__a = new Array(arguments.length -  0);
while (G__13026__i < G__13026__a.length) {G__13026__a[G__13026__i] = arguments[G__13026__i + 0]; ++G__13026__i;}
  args__12101__auto__ = new cljs.core.IndexedSeq(G__13026__a,0);
} 
return G__13025__delegate.call(this,args__12101__auto__);};
G__13025.cljs$lang$maxFixedArity = 0;
G__13025.cljs$lang$applyTo = (function (arglist__13027){
var args__12101__auto__ = cljs.core.seq(arglist__13027);
return G__13025__delegate(args__12101__auto__);
});
G__13025.cljs$core$IFn$_invoke$arity$variadic = G__13025__delegate;
return G__13025;
})()
;
;})(format_in__12099__auto__,cf__12100__auto__,_STAR_current_level_STAR_13018_13020,_STAR_current_length_STAR_13019_13021,vec__13015,defn_sym,defn_name,stuff,vec__13016,doc_str,stuff__$1,vec__13017,attr_map,stuff__$2))
})().call(null,doc_str);
} else {
}

if(cljs.core.truth_(attr_map)){
(function (){var format_in__12099__auto__ = " ~_~w";
var cf__12100__auto__ = ((typeof format_in__12099__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__12099__auto__):format_in__12099__auto__);
return ((function (format_in__12099__auto__,cf__12100__auto__,_STAR_current_level_STAR_13018_13020,_STAR_current_length_STAR_13019_13021,vec__13015,defn_sym,defn_name,stuff,vec__13016,doc_str,stuff__$1,vec__13017,attr_map,stuff__$2){
return (function() { 
var G__13028__delegate = function (args__12101__auto__){
var navigator__12102__auto__ = cljs.pprint.init_navigator.call(null,args__12101__auto__);
return cljs.pprint.execute_format.call(null,cf__12100__auto__,navigator__12102__auto__);
};
var G__13028 = function (var_args){
var args__12101__auto__ = null;
if (arguments.length > 0) {
var G__13029__i = 0, G__13029__a = new Array(arguments.length -  0);
while (G__13029__i < G__13029__a.length) {G__13029__a[G__13029__i] = arguments[G__13029__i + 0]; ++G__13029__i;}
  args__12101__auto__ = new cljs.core.IndexedSeq(G__13029__a,0);
} 
return G__13028__delegate.call(this,args__12101__auto__);};
G__13028.cljs$lang$maxFixedArity = 0;
G__13028.cljs$lang$applyTo = (function (arglist__13030){
var args__12101__auto__ = cljs.core.seq(arglist__13030);
return G__13028__delegate(args__12101__auto__);
});
G__13028.cljs$core$IFn$_invoke$arity$variadic = G__13028__delegate;
return G__13028;
})()
;
;})(format_in__12099__auto__,cf__12100__auto__,_STAR_current_level_STAR_13018_13020,_STAR_current_length_STAR_13019_13021,vec__13015,defn_sym,defn_name,stuff,vec__13016,doc_str,stuff__$1,vec__13017,attr_map,stuff__$2))
})().call(null,attr_map);
} else {
}

if(cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,stuff__$2))){
cljs.pprint.single_defn.call(null,stuff__$2,(function (){var or__6210__auto__ = doc_str;
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return attr_map;
}
})());
} else {
cljs.pprint.multi_defn.call(null,stuff__$2,(function (){var or__6210__auto__ = doc_str;
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return attr_map;
}
})());

}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_13019_13021;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_13018_13020;
}}

return null;
} else {
return cljs.pprint.pprint_simple_code_list.call(null,alis);
}
});
cljs.pprint.pprint_binding_form = (function cljs$pprint$pprint_binding_form(binding_vec){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_13036_13041 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_13037_13042 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,"[",null,"]");

var length_count13038_13043 = (0);
var binding_13044 = binding_vec;
while(true){
if((cljs.core.not.call(null,cljs.core._STAR_print_length_STAR_)) || ((length_count13038_13043 < cljs.core._STAR_print_length_STAR_))){
if(cljs.core.seq.call(null,binding_13044)){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_13039_13045 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_13040_13046 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,null,null,null);


cljs.pprint.write_out.call(null,cljs.core.first.call(null,binding_13044));

if(cljs.core.next.call(null,binding_13044)){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,cljs.core.cst$kw$miser);

cljs.pprint.write_out.call(null,cljs.core.second.call(null,binding_13044));
} else {
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_13040_13046;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_13039_13045;
}}


if(cljs.core.next.call(null,cljs.core.rest.call(null,binding_13044))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,cljs.core.cst$kw$linear);

var G__13047 = (length_count13038_13043 + (1));
var G__13048 = cljs.core.next.call(null,cljs.core.rest.call(null,binding_13044));
length_count13038_13043 = G__13047;
binding_13044 = G__13048;
continue;
} else {
}
} else {
}
} else {
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_13037_13042;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_13036_13041;
}}

return null;
});
cljs.pprint.pprint_let = (function cljs$pprint$pprint_let(alis){
var base_sym = cljs.core.first.call(null,alis);
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_13051_13053 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_13052_13054 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,"(",null,")");

if((cljs.core.next.call(null,alis)) && (cljs.core.vector_QMARK_.call(null,cljs.core.second.call(null,alis)))){
(function (){var format_in__12099__auto__ = "~w ~1I~@_";
var cf__12100__auto__ = ((typeof format_in__12099__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__12099__auto__):format_in__12099__auto__);
return ((function (format_in__12099__auto__,cf__12100__auto__,_STAR_current_level_STAR_13051_13053,_STAR_current_length_STAR_13052_13054,base_sym){
return (function() { 
var G__13055__delegate = function (args__12101__auto__){
var navigator__12102__auto__ = cljs.pprint.init_navigator.call(null,args__12101__auto__);
return cljs.pprint.execute_format.call(null,cf__12100__auto__,navigator__12102__auto__);
};
var G__13055 = function (var_args){
var args__12101__auto__ = null;
if (arguments.length > 0) {
var G__13056__i = 0, G__13056__a = new Array(arguments.length -  0);
while (G__13056__i < G__13056__a.length) {G__13056__a[G__13056__i] = arguments[G__13056__i + 0]; ++G__13056__i;}
  args__12101__auto__ = new cljs.core.IndexedSeq(G__13056__a,0);
} 
return G__13055__delegate.call(this,args__12101__auto__);};
G__13055.cljs$lang$maxFixedArity = 0;
G__13055.cljs$lang$applyTo = (function (arglist__13057){
var args__12101__auto__ = cljs.core.seq(arglist__13057);
return G__13055__delegate(args__12101__auto__);
});
G__13055.cljs$core$IFn$_invoke$arity$variadic = G__13055__delegate;
return G__13055;
})()
;
;})(format_in__12099__auto__,cf__12100__auto__,_STAR_current_level_STAR_13051_13053,_STAR_current_length_STAR_13052_13054,base_sym))
})().call(null,base_sym);

cljs.pprint.pprint_binding_form.call(null,cljs.core.second.call(null,alis));

(function (){var format_in__12099__auto__ = " ~_~{~w~^ ~_~}";
var cf__12100__auto__ = ((typeof format_in__12099__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__12099__auto__):format_in__12099__auto__);
return ((function (format_in__12099__auto__,cf__12100__auto__,_STAR_current_level_STAR_13051_13053,_STAR_current_length_STAR_13052_13054,base_sym){
return (function() { 
var G__13058__delegate = function (args__12101__auto__){
var navigator__12102__auto__ = cljs.pprint.init_navigator.call(null,args__12101__auto__);
return cljs.pprint.execute_format.call(null,cf__12100__auto__,navigator__12102__auto__);
};
var G__13058 = function (var_args){
var args__12101__auto__ = null;
if (arguments.length > 0) {
var G__13059__i = 0, G__13059__a = new Array(arguments.length -  0);
while (G__13059__i < G__13059__a.length) {G__13059__a[G__13059__i] = arguments[G__13059__i + 0]; ++G__13059__i;}
  args__12101__auto__ = new cljs.core.IndexedSeq(G__13059__a,0);
} 
return G__13058__delegate.call(this,args__12101__auto__);};
G__13058.cljs$lang$maxFixedArity = 0;
G__13058.cljs$lang$applyTo = (function (arglist__13060){
var args__12101__auto__ = cljs.core.seq(arglist__13060);
return G__13058__delegate(args__12101__auto__);
});
G__13058.cljs$core$IFn$_invoke$arity$variadic = G__13058__delegate;
return G__13058;
})()
;
;})(format_in__12099__auto__,cf__12100__auto__,_STAR_current_level_STAR_13051_13053,_STAR_current_length_STAR_13052_13054,base_sym))
})().call(null,cljs.core.next.call(null,cljs.core.rest.call(null,alis)));
} else {
cljs.pprint.pprint_simple_code_list.call(null,alis);
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_13052_13054;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_13051_13053;
}}

return null;
});
cljs.pprint.pprint_if = (function (){var format_in__12099__auto__ = "~:<~1I~w~^ ~@_~w~@{ ~_~w~}~:>";
var cf__12100__auto__ = ((typeof format_in__12099__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__12099__auto__):format_in__12099__auto__);
return ((function (format_in__12099__auto__,cf__12100__auto__){
return (function() { 
var G__13061__delegate = function (args__12101__auto__){
var navigator__12102__auto__ = cljs.pprint.init_navigator.call(null,args__12101__auto__);
return cljs.pprint.execute_format.call(null,cf__12100__auto__,navigator__12102__auto__);
};
var G__13061 = function (var_args){
var args__12101__auto__ = null;
if (arguments.length > 0) {
var G__13062__i = 0, G__13062__a = new Array(arguments.length -  0);
while (G__13062__i < G__13062__a.length) {G__13062__a[G__13062__i] = arguments[G__13062__i + 0]; ++G__13062__i;}
  args__12101__auto__ = new cljs.core.IndexedSeq(G__13062__a,0);
} 
return G__13061__delegate.call(this,args__12101__auto__);};
G__13061.cljs$lang$maxFixedArity = 0;
G__13061.cljs$lang$applyTo = (function (arglist__13063){
var args__12101__auto__ = cljs.core.seq(arglist__13063);
return G__13061__delegate(args__12101__auto__);
});
G__13061.cljs$core$IFn$_invoke$arity$variadic = G__13061__delegate;
return G__13061;
})()
;
;})(format_in__12099__auto__,cf__12100__auto__))
})();
cljs.pprint.pprint_cond = (function cljs$pprint$pprint_cond(alis){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_13069_13074 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_13070_13075 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,"(",null,")");

cljs.pprint.pprint_indent.call(null,cljs.core.cst$kw$block,(1));

cljs.pprint.write_out.call(null,cljs.core.first.call(null,alis));

if(cljs.core.next.call(null,alis)){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,cljs.core.cst$kw$linear);

var length_count13071_13076 = (0);
var alis_13077__$1 = cljs.core.next.call(null,alis);
while(true){
if((cljs.core.not.call(null,cljs.core._STAR_print_length_STAR_)) || ((length_count13071_13076 < cljs.core._STAR_print_length_STAR_))){
if(alis_13077__$1){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_13072_13078 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_13073_13079 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,null,null,null);


cljs.pprint.write_out.call(null,cljs.core.first.call(null,alis_13077__$1));

if(cljs.core.next.call(null,alis_13077__$1)){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,cljs.core.cst$kw$miser);

cljs.pprint.write_out.call(null,cljs.core.second.call(null,alis_13077__$1));
} else {
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_13073_13079;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_13072_13078;
}}


if(cljs.core.next.call(null,cljs.core.rest.call(null,alis_13077__$1))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,cljs.core.cst$kw$linear);

var G__13080 = (length_count13071_13076 + (1));
var G__13081 = cljs.core.next.call(null,cljs.core.rest.call(null,alis_13077__$1));
length_count13071_13076 = G__13080;
alis_13077__$1 = G__13081;
continue;
} else {
}
} else {
}
} else {
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"...");
}
break;
}
} else {
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_13070_13075;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_13069_13074;
}}

return null;
});
cljs.pprint.pprint_condp = (function cljs$pprint$pprint_condp(alis){
if((cljs.core.count.call(null,alis) > (3))){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_13087_13092 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_13088_13093 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,"(",null,")");

cljs.pprint.pprint_indent.call(null,cljs.core.cst$kw$block,(1));

cljs.core.apply.call(null,(function (){var format_in__12099__auto__ = "~w ~@_~w ~@_~w ~_";
var cf__12100__auto__ = ((typeof format_in__12099__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__12099__auto__):format_in__12099__auto__);
return ((function (format_in__12099__auto__,cf__12100__auto__,_STAR_current_level_STAR_13087_13092,_STAR_current_length_STAR_13088_13093){
return (function() { 
var G__13094__delegate = function (args__12101__auto__){
var navigator__12102__auto__ = cljs.pprint.init_navigator.call(null,args__12101__auto__);
return cljs.pprint.execute_format.call(null,cf__12100__auto__,navigator__12102__auto__);
};
var G__13094 = function (var_args){
var args__12101__auto__ = null;
if (arguments.length > 0) {
var G__13095__i = 0, G__13095__a = new Array(arguments.length -  0);
while (G__13095__i < G__13095__a.length) {G__13095__a[G__13095__i] = arguments[G__13095__i + 0]; ++G__13095__i;}
  args__12101__auto__ = new cljs.core.IndexedSeq(G__13095__a,0);
} 
return G__13094__delegate.call(this,args__12101__auto__);};
G__13094.cljs$lang$maxFixedArity = 0;
G__13094.cljs$lang$applyTo = (function (arglist__13096){
var args__12101__auto__ = cljs.core.seq(arglist__13096);
return G__13094__delegate(args__12101__auto__);
});
G__13094.cljs$core$IFn$_invoke$arity$variadic = G__13094__delegate;
return G__13094;
})()
;
;})(format_in__12099__auto__,cf__12100__auto__,_STAR_current_level_STAR_13087_13092,_STAR_current_length_STAR_13088_13093))
})(),alis);

var length_count13089_13097 = (0);
var alis_13098__$1 = cljs.core.seq.call(null,cljs.core.drop.call(null,(3),alis));
while(true){
if((cljs.core.not.call(null,cljs.core._STAR_print_length_STAR_)) || ((length_count13089_13097 < cljs.core._STAR_print_length_STAR_))){
if(alis_13098__$1){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_13090_13099 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_13091_13100 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,null,null,null);


cljs.pprint.write_out.call(null,cljs.core.first.call(null,alis_13098__$1));

if(cljs.core.next.call(null,alis_13098__$1)){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,cljs.core.cst$kw$miser);

cljs.pprint.write_out.call(null,cljs.core.second.call(null,alis_13098__$1));
} else {
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_13091_13100;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_13090_13099;
}}


if(cljs.core.next.call(null,cljs.core.rest.call(null,alis_13098__$1))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,cljs.core.cst$kw$linear);

var G__13101 = (length_count13089_13097 + (1));
var G__13102 = cljs.core.next.call(null,cljs.core.rest.call(null,alis_13098__$1));
length_count13089_13097 = G__13101;
alis_13098__$1 = G__13102;
continue;
} else {
}
} else {
}
} else {
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_13088_13093;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_13087_13092;
}}

return null;
} else {
return cljs.pprint.pprint_simple_code_list.call(null,alis);
}
});
cljs.pprint._STAR_symbol_map_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
cljs.pprint.pprint_anon_func = (function cljs$pprint$pprint_anon_func(alis){
var args = cljs.core.second.call(null,alis);
var nlis = cljs.core.first.call(null,cljs.core.rest.call(null,cljs.core.rest.call(null,alis)));
if(cljs.core.vector_QMARK_.call(null,args)){
var _STAR_symbol_map_STAR_13106 = cljs.pprint._STAR_symbol_map_STAR_;
cljs.pprint._STAR_symbol_map_STAR_ = ((cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,args)))?cljs.core.PersistentArrayMap.fromArray([cljs.core.first.call(null,args),"%"], true, false):cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (_STAR_symbol_map_STAR_13106,args,nlis){
return (function (p1__13103_SHARP_,p2__13104_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__13103_SHARP_,[cljs.core.str("%"),cljs.core.str(p2__13104_SHARP_)].join('')],null));
});})(_STAR_symbol_map_STAR_13106,args,nlis))
,args,cljs.core.range.call(null,(1),(cljs.core.count.call(null,args) + (1))))));

try{return (function (){var format_in__12099__auto__ = "~<#(~;~@{~w~^ ~_~}~;)~:>";
var cf__12100__auto__ = ((typeof format_in__12099__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__12099__auto__):format_in__12099__auto__);
return ((function (format_in__12099__auto__,cf__12100__auto__,_STAR_symbol_map_STAR_13106,args,nlis){
return (function() { 
var G__13107__delegate = function (args__12101__auto__){
var navigator__12102__auto__ = cljs.pprint.init_navigator.call(null,args__12101__auto__);
return cljs.pprint.execute_format.call(null,cf__12100__auto__,navigator__12102__auto__);
};
var G__13107 = function (var_args){
var args__12101__auto__ = null;
if (arguments.length > 0) {
var G__13108__i = 0, G__13108__a = new Array(arguments.length -  0);
while (G__13108__i < G__13108__a.length) {G__13108__a[G__13108__i] = arguments[G__13108__i + 0]; ++G__13108__i;}
  args__12101__auto__ = new cljs.core.IndexedSeq(G__13108__a,0);
} 
return G__13107__delegate.call(this,args__12101__auto__);};
G__13107.cljs$lang$maxFixedArity = 0;
G__13107.cljs$lang$applyTo = (function (arglist__13109){
var args__12101__auto__ = cljs.core.seq(arglist__13109);
return G__13107__delegate(args__12101__auto__);
});
G__13107.cljs$core$IFn$_invoke$arity$variadic = G__13107__delegate;
return G__13107;
})()
;
;})(format_in__12099__auto__,cf__12100__auto__,_STAR_symbol_map_STAR_13106,args,nlis))
})().call(null,nlis);
}finally {cljs.pprint._STAR_symbol_map_STAR_ = _STAR_symbol_map_STAR_13106;
}} else {
return cljs.pprint.pprint_simple_code_list.call(null,alis);
}
});
cljs.pprint.pprint_simple_code_list = (function cljs$pprint$pprint_simple_code_list(alis){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_13113_13116 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_13114_13117 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,"(",null,")");

cljs.pprint.pprint_indent.call(null,cljs.core.cst$kw$block,(1));

var length_count13115_13118 = (0);
var alis_13119__$1 = cljs.core.seq.call(null,alis);
while(true){
if((cljs.core.not.call(null,cljs.core._STAR_print_length_STAR_)) || ((length_count13115_13118 < cljs.core._STAR_print_length_STAR_))){
if(alis_13119__$1){
cljs.pprint.write_out.call(null,cljs.core.first.call(null,alis_13119__$1));

if(cljs.core.next.call(null,alis_13119__$1)){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,cljs.core.cst$kw$linear);

var G__13120 = (length_count13115_13118 + (1));
var G__13121 = cljs.core.next.call(null,alis_13119__$1);
length_count13115_13118 = G__13120;
alis_13119__$1 = G__13121;
continue;
} else {
}
} else {
}
} else {
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_13114_13117;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_13113_13116;
}}

return null;
});
cljs.pprint.two_forms = (function cljs$pprint$two_forms(amap){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.mapcat.call(null,cljs.core.identity,(function (){var iter__6990__auto__ = (function cljs$pprint$two_forms_$_iter__13126(s__13127){
return (new cljs.core.LazySeq(null,(function (){
var s__13127__$1 = s__13127;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__13127__$1);
if(temp__4657__auto__){
var s__13127__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__13127__$2)){
var c__6988__auto__ = cljs.core.chunk_first.call(null,s__13127__$2);
var size__6989__auto__ = cljs.core.count.call(null,c__6988__auto__);
var b__13129 = cljs.core.chunk_buffer.call(null,size__6989__auto__);
if((function (){var i__13128 = (0);
while(true){
if((i__13128 < size__6989__auto__)){
var x = cljs.core._nth.call(null,c__6988__auto__,i__13128);
cljs.core.chunk_append.call(null,b__13129,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.call(null,cljs.core.name.call(null,cljs.core.first.call(null,x))),cljs.core.second.call(null,x)], null)], null));

var G__13130 = (i__13128 + (1));
i__13128 = G__13130;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13129),cljs$pprint$two_forms_$_iter__13126.call(null,cljs.core.chunk_rest.call(null,s__13127__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13129),null);
}
} else {
var x = cljs.core.first.call(null,s__13127__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.call(null,cljs.core.name.call(null,cljs.core.first.call(null,x))),cljs.core.second.call(null,x)], null)], null),cljs$pprint$two_forms_$_iter__13126.call(null,cljs.core.rest.call(null,s__13127__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__6990__auto__.call(null,amap);
})()));
});
cljs.pprint.add_core_ns = (function cljs$pprint$add_core_ns(amap){
var core = "clojure.core";
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (core){
return (function (p1__13131_SHARP_){
var vec__13133 = p1__13131_SHARP_;
var s = cljs.core.nth.call(null,vec__13133,(0),null);
var f = cljs.core.nth.call(null,vec__13133,(1),null);
if(cljs.core.not.call(null,(function (){var or__6210__auto__ = cljs.core.namespace.call(null,s);
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return cljs.core.special_symbol_QMARK_.call(null,s);
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.call(null,core,cljs.core.name.call(null,s)),f], null);
} else {
return p1__13131_SHARP_;
}
});})(core))
,amap));
});
cljs.pprint._STAR_code_table_STAR_ = cljs.pprint.two_forms.call(null,cljs.pprint.add_core_ns.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$sym$_DOT_,cljs.core.cst$sym$fn_STAR_,cljs.core.cst$sym$when_DASH_first,cljs.core.cst$sym$if,cljs.core.cst$sym$condp,cljs.core.cst$sym$$$,cljs.core.cst$sym$defmacro,cljs.core.cst$sym$defn,cljs.core.cst$sym$loop,cljs.core.cst$sym$struct,cljs.core.cst$sym$doseq,cljs.core.cst$sym$if_DASH_not,cljs.core.cst$sym$when_DASH_not,cljs.core.cst$sym$def,cljs.core.cst$sym$when,cljs.core.cst$sym$with_DASH_open,cljs.core.cst$sym$with_DASH_local_DASH_vars,cljs.core.cst$sym$defonce,cljs.core.cst$sym$when_DASH_let,cljs.core.cst$sym$ns,cljs.core.cst$sym$dotimes,cljs.core.cst$sym$cond,cljs.core.cst$sym$let,cljs.core.cst$sym$fn,cljs.core.cst$sym$defn_DASH_,cljs.core.cst$sym$locking,cljs.core.cst$sym$_DASH__GT_,cljs.core.cst$sym$if_DASH_let,cljs.core.cst$sym$binding,cljs.core.cst$sym$struct_DASH_map],[cljs.pprint.pprint_hold_first,cljs.pprint.pprint_anon_func,cljs.pprint.pprint_let,cljs.pprint.pprint_if,cljs.pprint.pprint_condp,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_defn,cljs.pprint.pprint_defn,cljs.pprint.pprint_let,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_let,cljs.pprint.pprint_if,cljs.pprint.pprint_if,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_if,cljs.pprint.pprint_let,cljs.pprint.pprint_let,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_let,cljs.pprint.pprint_ns,cljs.pprint.pprint_let,cljs.pprint.pprint_cond,cljs.pprint.pprint_let,cljs.pprint.pprint_defn,cljs.pprint.pprint_defn,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_let,cljs.pprint.pprint_let,cljs.pprint.pprint_hold_first])));
cljs.pprint.pprint_code_list = (function cljs$pprint$pprint_code_list(alis){
if(cljs.core.not.call(null,cljs.pprint.pprint_reader_macro.call(null,alis))){
var temp__4655__auto__ = cljs.pprint._STAR_code_table_STAR_.call(null,cljs.core.first.call(null,alis));
if(cljs.core.truth_(temp__4655__auto__)){
var special_form = temp__4655__auto__;
return special_form.call(null,alis);
} else {
return cljs.pprint.pprint_simple_code_list.call(null,alis);
}
} else {
return null;
}
});
cljs.pprint.pprint_code_symbol = (function cljs$pprint$pprint_code_symbol(sym){
var temp__4655__auto__ = sym.call(null,cljs.pprint._STAR_symbol_map_STAR_);
if(cljs.core.truth_(temp__4655__auto__)){
var arg_num = temp__4655__auto__;
return cljs.pprint.print.call(null,arg_num);
} else {
if(cljs.core.truth_(cljs.pprint._STAR_print_suppress_namespaces_STAR_)){
return cljs.pprint.print.call(null,cljs.core.name.call(null,sym));
} else {
return cljs.pprint.pr.call(null,sym);
}
}
});
if(typeof cljs.pprint.code_dispatch !== 'undefined'){
} else {
/**
 * The pretty print dispatch function for pretty printing Clojure code.
 */
cljs.pprint.code_dispatch = (function (){var method_table__7135__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__7136__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__7137__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__7138__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__7139__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.pprint","code-dispatch"),cljs.pprint.type_dispatcher,cljs.core.cst$kw$default,hierarchy__7139__auto__,method_table__7135__auto__,prefer_table__7136__auto__,method_cache__7137__auto__,cached_hierarchy__7138__auto__));
})();
}
cljs.pprint.use_method.call(null,cljs.pprint.code_dispatch,cljs.core.cst$kw$list,cljs.pprint.pprint_code_list);
cljs.pprint.use_method.call(null,cljs.pprint.code_dispatch,cljs.core.cst$kw$symbol,cljs.pprint.pprint_code_symbol);
cljs.pprint.use_method.call(null,cljs.pprint.code_dispatch,cljs.core.cst$kw$vector,cljs.pprint.pprint_vector);
cljs.pprint.use_method.call(null,cljs.pprint.code_dispatch,cljs.core.cst$kw$map,cljs.pprint.pprint_map);
cljs.pprint.use_method.call(null,cljs.pprint.code_dispatch,cljs.core.cst$kw$set,cljs.pprint.pprint_set);
cljs.pprint.use_method.call(null,cljs.pprint.code_dispatch,cljs.core.cst$kw$queue,cljs.pprint.pprint_pqueue);
cljs.pprint.use_method.call(null,cljs.pprint.code_dispatch,cljs.core.cst$kw$deref,cljs.pprint.pprint_ideref);
cljs.pprint.use_method.call(null,cljs.pprint.code_dispatch,null,cljs.pprint.pr);
cljs.pprint.use_method.call(null,cljs.pprint.code_dispatch,cljs.core.cst$kw$default,cljs.pprint.pprint_simple_default);
cljs.pprint.set_pprint_dispatch.call(null,cljs.pprint.simple_dispatch);
cljs.pprint.add_padding = (function cljs$pprint$add_padding(width,s){
var padding = (function (){var x__6541__auto__ = (0);
var y__6542__auto__ = (width - cljs.core.count.call(null,s));
return ((x__6541__auto__ > y__6542__auto__) ? x__6541__auto__ : y__6542__auto__);
})();
return cljs.core.apply.call(null,cljs.core.str,clojure.string.join.call(null,cljs.core.repeat.call(null,padding," ")),s);
});
/**
 * Prints a collection of maps in a textual table. Prints table headings
 * ks, and then a line of output for each row, corresponding to the keys
 * in ks. If ks are not specified, use the keys of the first item in rows.
 */
cljs.pprint.print_table = (function cljs$pprint$print_table(var_args){
var args13137 = [];
var len__7280__auto___13153 = arguments.length;
var i__7281__auto___13154 = (0);
while(true){
if((i__7281__auto___13154 < len__7280__auto___13153)){
args13137.push((arguments[i__7281__auto___13154]));

var G__13155 = (i__7281__auto___13154 + (1));
i__7281__auto___13154 = G__13155;
continue;
} else {
}
break;
}

var G__13139 = args13137.length;
switch (G__13139) {
case 2:
return cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13137.length)].join('')));

}
});

cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$2 = (function (ks,rows){
var _STAR_print_newline_STAR_13140 = cljs.core._STAR_print_newline_STAR_;
try{if(cljs.core.seq.call(null,rows)){
var widths = cljs.core.map.call(null,((function (_STAR_print_newline_STAR_13140){
return (function (k){
return cljs.core.apply.call(null,cljs.core.max,cljs.core.count.call(null,[cljs.core.str(k)].join('')),cljs.core.map.call(null,((function (_STAR_print_newline_STAR_13140){
return (function (p1__13134_SHARP_){
return cljs.core.count.call(null,[cljs.core.str(cljs.core.get.call(null,p1__13134_SHARP_,k))].join(''));
});})(_STAR_print_newline_STAR_13140))
,rows));
});})(_STAR_print_newline_STAR_13140))
,ks);
var spacers = cljs.core.map.call(null,((function (widths,_STAR_print_newline_STAR_13140){
return (function (p1__13135_SHARP_){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,p1__13135_SHARP_,"-"));
});})(widths,_STAR_print_newline_STAR_13140))
,widths);
var fmt_row = ((function (widths,spacers,_STAR_print_newline_STAR_13140){
return (function (leader,divider,trailer,row){
return [cljs.core.str(leader),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,divider,(function (){var iter__6990__auto__ = ((function (widths,spacers,_STAR_print_newline_STAR_13140){
return (function cljs$pprint$iter__13141(s__13142){
return (new cljs.core.LazySeq(null,((function (widths,spacers,_STAR_print_newline_STAR_13140){
return (function (){
var s__13142__$1 = s__13142;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__13142__$1);
if(temp__4657__auto__){
var s__13142__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__13142__$2)){
var c__6988__auto__ = cljs.core.chunk_first.call(null,s__13142__$2);
var size__6989__auto__ = cljs.core.count.call(null,c__6988__auto__);
var b__13144 = cljs.core.chunk_buffer.call(null,size__6989__auto__);
if((function (){var i__13143 = (0);
while(true){
if((i__13143 < size__6989__auto__)){
var vec__13147 = cljs.core._nth.call(null,c__6988__auto__,i__13143);
var col = cljs.core.nth.call(null,vec__13147,(0),null);
var width = cljs.core.nth.call(null,vec__13147,(1),null);
cljs.core.chunk_append.call(null,b__13144,cljs.pprint.add_padding.call(null,width,[cljs.core.str(col)].join('')));

var G__13157 = (i__13143 + (1));
i__13143 = G__13157;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13144),cljs$pprint$iter__13141.call(null,cljs.core.chunk_rest.call(null,s__13142__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13144),null);
}
} else {
var vec__13148 = cljs.core.first.call(null,s__13142__$2);
var col = cljs.core.nth.call(null,vec__13148,(0),null);
var width = cljs.core.nth.call(null,vec__13148,(1),null);
return cljs.core.cons.call(null,cljs.pprint.add_padding.call(null,width,[cljs.core.str(col)].join('')),cljs$pprint$iter__13141.call(null,cljs.core.rest.call(null,s__13142__$2)));
}
} else {
return null;
}
break;
}
});})(widths,spacers,_STAR_print_newline_STAR_13140))
,null,null));
});})(widths,spacers,_STAR_print_newline_STAR_13140))
;
return iter__6990__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.map.call(null,((function (iter__6990__auto__,widths,spacers,_STAR_print_newline_STAR_13140){
return (function (p1__13136_SHARP_){
return cljs.core.get.call(null,row,p1__13136_SHARP_);
});})(iter__6990__auto__,widths,spacers,_STAR_print_newline_STAR_13140))
,ks),widths));
})()))),cljs.core.str(trailer)].join('');
});})(widths,spacers,_STAR_print_newline_STAR_13140))
;
cljs.core.println.call(null);

cljs.core.println.call(null,fmt_row.call(null,"| "," | "," |",cljs.core.zipmap.call(null,ks,ks)));

cljs.core.println.call(null,fmt_row.call(null,"|-","-+-","-|",cljs.core.zipmap.call(null,ks,spacers)));

var seq__13149 = cljs.core.seq.call(null,rows);
var chunk__13150 = null;
var count__13151 = (0);
var i__13152 = (0);
while(true){
if((i__13152 < count__13151)){
var row = cljs.core._nth.call(null,chunk__13150,i__13152);
cljs.core.println.call(null,fmt_row.call(null,"| "," | "," |",row));

var G__13158 = seq__13149;
var G__13159 = chunk__13150;
var G__13160 = count__13151;
var G__13161 = (i__13152 + (1));
seq__13149 = G__13158;
chunk__13150 = G__13159;
count__13151 = G__13160;
i__13152 = G__13161;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__13149);
if(temp__4657__auto__){
var seq__13149__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13149__$1)){
var c__7021__auto__ = cljs.core.chunk_first.call(null,seq__13149__$1);
var G__13162 = cljs.core.chunk_rest.call(null,seq__13149__$1);
var G__13163 = c__7021__auto__;
var G__13164 = cljs.core.count.call(null,c__7021__auto__);
var G__13165 = (0);
seq__13149 = G__13162;
chunk__13150 = G__13163;
count__13151 = G__13164;
i__13152 = G__13165;
continue;
} else {
var row = cljs.core.first.call(null,seq__13149__$1);
cljs.core.println.call(null,fmt_row.call(null,"| "," | "," |",row));

var G__13166 = cljs.core.next.call(null,seq__13149__$1);
var G__13167 = null;
var G__13168 = (0);
var G__13169 = (0);
seq__13149 = G__13166;
chunk__13150 = G__13167;
count__13151 = G__13168;
i__13152 = G__13169;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_13140;
}});

cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$1 = (function (rows){
return cljs.pprint.print_table.call(null,cljs.core.keys.call(null,cljs.core.first.call(null,rows)),rows);
});

cljs.pprint.print_table.cljs$lang$maxFixedArity = 2;

//# sourceMappingURL=pprint.js.map