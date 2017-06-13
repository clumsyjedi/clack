// Compiled by ClojureScript 1.9.229 {:optimize-constants true, :target :nodejs}
goog.provide('clack.parser.yaml');
goog.require('cljs.core');
goog.require('clack.parser.protocol');
clack.parser.yaml.js_yaml = require("js-yaml");

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
 * @implements {clack.parser.protocol.IParser}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
clack.parser.yaml.YamlParser = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
clack.parser.yaml.YamlParser.prototype.clack$parser$protocol$IParser$ = true;

clack.parser.yaml.YamlParser.prototype.clack$parser$protocol$IParser$handle_input$arity$4 = (function (this$,stream,complete_fn,keywordize_QMARK_){
var self__ = this;
var this$__$1 = this;
var input = cljs.core.atom.call(null,"");
var entities = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
stream.on("readable",((function (input,entities,this$__$1){
return (function (){
var temp__4657__auto__ = stream.read();
if(cljs.core.truth_(temp__4657__auto__)){
var chunk = temp__4657__auto__;
return cljs.core.swap_BANG_.call(null,input,((function (chunk,temp__4657__auto__,input,entities,this$__$1){
return (function (p1__14878_SHARP_){
return [cljs.core.str(p1__14878_SHARP_),cljs.core.str(chunk)].join('');
});})(chunk,temp__4657__auto__,input,entities,this$__$1))
);
} else {
return null;
}
});})(input,entities,this$__$1))
);

return stream.on("end",((function (input,entities,this$__$1){
return (function (){
return complete_fn.call(null,cljs.core.map.call(null,((function (input,entities,this$__$1){
return (function (p1__14879_SHARP_){
return cljs.core.js__GT_clj.call(null,p1__14879_SHARP_,cljs.core.cst$kw$keywordize_DASH_keys,keywordize_QMARK_);
});})(input,entities,this$__$1))
,clack.parser.yaml.js_yaml.loadAll(cljs.core.deref.call(null,input))));
});})(input,entities,this$__$1))
);
});

clack.parser.yaml.YamlParser.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7031__auto__,k__7032__auto__){
var self__ = this;
var this__7031__auto____$1 = this;
return cljs.core._lookup.call(null,this__7031__auto____$1,k__7032__auto__,null);
});

clack.parser.yaml.YamlParser.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7033__auto__,k14881,else__7034__auto__){
var self__ = this;
var this__7033__auto____$1 = this;
var G__14883 = k14881;
switch (G__14883) {
default:
return cljs.core.get.call(null,self__.__extmap,k14881,else__7034__auto__);

}
});

clack.parser.yaml.YamlParser.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7045__auto__,writer__7046__auto__,opts__7047__auto__){
var self__ = this;
var this__7045__auto____$1 = this;
var pr_pair__7048__auto__ = ((function (this__7045__auto____$1){
return (function (keyval__7049__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7046__auto__,cljs.core.pr_writer,""," ","",opts__7047__auto__,keyval__7049__auto__);
});})(this__7045__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7046__auto__,pr_pair__7048__auto__,"#clack.parser.yaml.YamlParser{",", ","}",opts__7047__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

clack.parser.yaml.YamlParser.prototype.cljs$core$IIterable$ = true;

clack.parser.yaml.YamlParser.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__14880){
var self__ = this;
var G__14880__$1 = this;
return (new cljs.core.RecordIter((0),G__14880__$1,0,cljs.core.PersistentVector.EMPTY,cljs.core._iterator.call(null,self__.__extmap)));
});

clack.parser.yaml.YamlParser.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7029__auto__){
var self__ = this;
var this__7029__auto____$1 = this;
return self__.__meta;
});

clack.parser.yaml.YamlParser.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7025__auto__){
var self__ = this;
var this__7025__auto____$1 = this;
return (new clack.parser.yaml.YamlParser(self__.__meta,self__.__extmap,self__.__hash));
});

clack.parser.yaml.YamlParser.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7035__auto__){
var self__ = this;
var this__7035__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

clack.parser.yaml.YamlParser.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7026__auto__){
var self__ = this;
var this__7026__auto____$1 = this;
var h__6844__auto__ = self__.__hash;
if(!((h__6844__auto__ == null))){
return h__6844__auto__;
} else {
var h__6844__auto____$1 = cljs.core.hash_imap.call(null,this__7026__auto____$1);
self__.__hash = h__6844__auto____$1;

return h__6844__auto____$1;
}
});

clack.parser.yaml.YamlParser.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7027__auto__,other__7028__auto__){
var self__ = this;
var this__7027__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6397__auto__ = other__7028__auto__;
if(cljs.core.truth_(and__6397__auto__)){
var and__6397__auto____$1 = (this__7027__auto____$1.constructor === other__7028__auto__.constructor);
if(and__6397__auto____$1){
return cljs.core.equiv_map.call(null,this__7027__auto____$1,other__7028__auto__);
} else {
return and__6397__auto____$1;
}
} else {
return and__6397__auto__;
}
})())){
return true;
} else {
return false;
}
});

clack.parser.yaml.YamlParser.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7040__auto__,k__7041__auto__){
var self__ = this;
var this__7040__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__7041__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7040__auto____$1),self__.__meta),k__7041__auto__);
} else {
return (new clack.parser.yaml.YamlParser(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7041__auto__)),null));
}
});

clack.parser.yaml.YamlParser.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7038__auto__,k__7039__auto__,G__14880){
var self__ = this;
var this__7038__auto____$1 = this;
var pred__14884 = cljs.core.keyword_identical_QMARK_;
var expr__14885 = k__7039__auto__;
return (new clack.parser.yaml.YamlParser(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7039__auto__,G__14880),null));
});

clack.parser.yaml.YamlParser.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7043__auto__){
var self__ = this;
var this__7043__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

clack.parser.yaml.YamlParser.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7030__auto__,G__14880){
var self__ = this;
var this__7030__auto____$1 = this;
return (new clack.parser.yaml.YamlParser(G__14880,self__.__extmap,self__.__hash));
});

clack.parser.yaml.YamlParser.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7036__auto__,entry__7037__auto__){
var self__ = this;
var this__7036__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7037__auto__)){
return cljs.core._assoc.call(null,this__7036__auto____$1,cljs.core._nth.call(null,entry__7037__auto__,(0)),cljs.core._nth.call(null,entry__7037__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7036__auto____$1,entry__7037__auto__);
}
});

clack.parser.yaml.YamlParser.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

clack.parser.yaml.YamlParser.cljs$lang$type = true;

clack.parser.yaml.YamlParser.cljs$lang$ctorPrSeq = (function (this__7065__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"clack.parser.yaml/YamlParser");
});

clack.parser.yaml.YamlParser.cljs$lang$ctorPrWriter = (function (this__7065__auto__,writer__7066__auto__){
return cljs.core._write.call(null,writer__7066__auto__,"clack.parser.yaml/YamlParser");
});

clack.parser.yaml.__GT_YamlParser = (function clack$parser$yaml$__GT_YamlParser(){
return (new clack.parser.yaml.YamlParser(null,null,null));
});

clack.parser.yaml.map__GT_YamlParser = (function clack$parser$yaml$map__GT_YamlParser(G__14882){
return (new clack.parser.yaml.YamlParser(null,cljs.core.dissoc.call(null,G__14882),null));
});

clack.parser.yaml.parser = (function clack$parser$yaml$parser(){
return clack.parser.yaml.__GT_YamlParser.call(null);
});

//# sourceMappingURL=yaml.js.map