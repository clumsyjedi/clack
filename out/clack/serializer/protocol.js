// Compiled by ClojureScript 1.9.229 {:optimize-constants true, :target :nodejs}
goog.provide('clack.serializer.protocol');
goog.require('cljs.core');

/**
 * @interface
 */
clack.serializer.protocol.ISerializer = function(){};

clack.serializer.protocol.freeze = (function clack$serializer$protocol$freeze(this$,data){
if((!((this$ == null))) && (!((this$.clack$serializer$protocol$ISerializer$freeze$arity$2 == null)))){
return this$.clack$serializer$protocol$ISerializer$freeze$arity$2(this$,data);
} else {
var x__7072__auto__ = (((this$ == null))?null:this$);
var m__7073__auto__ = (clack.serializer.protocol.freeze[goog.typeOf(x__7072__auto__)]);
if(!((m__7073__auto__ == null))){
return m__7073__auto__.call(null,this$,data);
} else {
var m__7073__auto____$1 = (clack.serializer.protocol.freeze["_"]);
if(!((m__7073__auto____$1 == null))){
return m__7073__auto____$1.call(null,this$,data);
} else {
throw cljs.core.missing_protocol.call(null,"ISerializer.freeze",this$);
}
}
}
});


//# sourceMappingURL=protocol.js.map