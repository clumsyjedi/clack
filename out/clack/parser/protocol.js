// Compiled by ClojureScript 1.9.229 {:optimize-constants true, :target :nodejs}
goog.provide('clack.parser.protocol');
goog.require('cljs.core');

/**
 * @interface
 */
clack.parser.protocol.IParser = function(){};

clack.parser.protocol.handle_input = (function clack$parser$protocol$handle_input(this$,stream,complete_fn,keywordize_QMARK_){
if((!((this$ == null))) && (!((this$.clack$parser$protocol$IParser$handle_input$arity$4 == null)))){
return this$.clack$parser$protocol$IParser$handle_input$arity$4(this$,stream,complete_fn,keywordize_QMARK_);
} else {
var x__7072__auto__ = (((this$ == null))?null:this$);
var m__7073__auto__ = (clack.parser.protocol.handle_input[goog.typeOf(x__7072__auto__)]);
if(!((m__7073__auto__ == null))){
return m__7073__auto__.call(null,this$,stream,complete_fn,keywordize_QMARK_);
} else {
var m__7073__auto____$1 = (clack.parser.protocol.handle_input["_"]);
if(!((m__7073__auto____$1 == null))){
return m__7073__auto____$1.call(null,this$,stream,complete_fn,keywordize_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"IParser.handle-input",this$);
}
}
}
});


//# sourceMappingURL=protocol.js.map