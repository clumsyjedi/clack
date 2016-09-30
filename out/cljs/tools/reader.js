// Compiled by ClojureScript 1.9.229 {:optimize-constants true, :target :nodejs}
goog.provide('cljs.tools.reader');
goog.require('cljs.core');
goog.require('cljs.tools.reader.impl.commons');
goog.require('goog.string');
goog.require('goog.array');
goog.require('cljs.tools.reader.reader_types');
goog.require('goog.string.StringBuffer');
goog.require('cljs.tools.reader.impl.utils');
goog.require('clojure.string');






cljs.tools.reader.macro_terminating_QMARK_ = (function cljs$tools$reader$macro_terminating_QMARK_(ch){
var G__7664 = ch;
switch (G__7664) {
case "\"":
case ";":
case "@":
case "^":
case "`":
case "~":
case "(":
case ")":
case "[":
case "]":
case "{":
case "}":
case "\\":
return true;

break;
default:
return false;

}
});
cljs.tools.reader.sb = (new goog.string.StringBuffer());
/**
 * Read in a single logical token from the reader
 */
cljs.tools.reader.read_token = (function cljs$tools$reader$read_token(rdr,initch){
if((initch == null)){
return cljs.tools.reader.reader_types.reader_error.call(null,rdr,"EOF while reading");
} else {
cljs.tools.reader.sb.clear();

var ch = initch;
while(true){
if((cljs.tools.reader.impl.utils.whitespace_QMARK_.call(null,ch)) || (cljs.tools.reader.macro_terminating_QMARK_.call(null,ch)) || ((ch == null))){
if((ch == null)){
} else {
cljs.tools.reader.reader_types.unread.call(null,rdr,ch);
}

return cljs.tools.reader.sb.toString();
} else {
cljs.tools.reader.sb.append(ch);

var G__7666 = cljs.tools.reader.reader_types.read_char.call(null,rdr);
ch = G__7666;
continue;
}
break;
}
}
});
cljs.tools.reader.read_dispatch = (function cljs$tools$reader$read_dispatch(rdr,_,opts,pending_forms){
var temp__4655__auto__ = cljs.tools.reader.reader_types.read_char.call(null,rdr);
if(cljs.core.truth_(temp__4655__auto__)){
var ch = temp__4655__auto__;
var temp__4655__auto____$1 = cljs.tools.reader.dispatch_macros.call(null,ch);
if(cljs.core.truth_(temp__4655__auto____$1)){
var dm = temp__4655__auto____$1;
return dm.call(null,rdr,ch,opts,pending_forms);
} else {
return cljs.tools.reader.read_tagged.call(null,(function (){var G__7668 = rdr;
cljs.tools.reader.reader_types.unread.call(null,G__7668,ch);

return G__7668;
})(),ch,opts,pending_forms);
}
} else {
return cljs.tools.reader.reader_types.reader_error.call(null,rdr,"EOF while reading character");
}
});
cljs.tools.reader.read_unmatched_delimiter = (function cljs$tools$reader$read_unmatched_delimiter(rdr,ch,opts,pending_forms){
return cljs.tools.reader.reader_types.reader_error.call(null,rdr,"Unmatched delimiter ",ch);
});
cljs.tools.reader.read_regex = (function cljs$tools$reader$read_regex(rdr,ch,opts,pending_forms){
var sb = (new goog.string.StringBuffer());
var ch__$1 = cljs.tools.reader.reader_types.read_char.call(null,rdr);
while(true){
if(("\"" === ch__$1)){
return cljs.core.re_pattern.call(null,[cljs.core.str(sb)].join(''));
} else {
if((ch__$1 == null)){
return cljs.tools.reader.reader_types.reader_error.call(null,rdr,"EOF while reading regex");
} else {
sb.append(ch__$1);

if(("\\" === ch__$1)){
var ch_7669__$2 = cljs.tools.reader.reader_types.read_char.call(null,rdr);
if((ch_7669__$2 == null)){
cljs.tools.reader.reader_types.reader_error.call(null,rdr,"EOF while reading regex");
} else {
}

sb.append(ch_7669__$2);
} else {
}

var G__7670 = cljs.tools.reader.reader_types.read_char.call(null,rdr);
ch__$1 = G__7670;
continue;
}
}
break;
}
});
cljs.tools.reader.char_code = (function cljs$tools$reader$char_code(ch,base){
var code = parseInt(ch,base);
if(cljs.core.truth_(isNaN(code))){
return (-1);
} else {
return code;
}
});
cljs.tools.reader.read_unicode_char = (function cljs$tools$reader$read_unicode_char(var_args){
var args7671 = [];
var len__7484__auto___7674 = arguments.length;
var i__7485__auto___7675 = (0);
while(true){
if((i__7485__auto___7675 < len__7484__auto___7674)){
args7671.push((arguments[i__7485__auto___7675]));

var G__7676 = (i__7485__auto___7675 + (1));
i__7485__auto___7675 = G__7676;
continue;
} else {
}
break;
}

var G__7673 = args7671.length;
switch (G__7673) {
case 4:
return cljs.tools.reader.read_unicode_char.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.tools.reader.read_unicode_char.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7671.length)].join('')));

}
});

cljs.tools.reader.read_unicode_char.cljs$core$IFn$_invoke$arity$4 = (function (token,offset,length,base){
var l = (offset + length);
if((cljs.core.count.call(null,token) === l)){
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Invalid unicode character: \\"),cljs.core.str(token)].join(''),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$illegal_DASH_argument], null));
}

var i = offset;
var uc = (0);
while(true){
if((i === l)){
return String.fromCharCode(uc);
} else {
var d = cljs.tools.reader.char_code.call(null,cljs.core.nth.call(null,token,i),base);
if((d === (-1))){
throw cljs.core.ex_info.call(null,[cljs.core.str("Invalid digit: "),cljs.core.str(cljs.core.nth.call(null,token,i))].join(''),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$illegal_DASH_argument], null));
} else {
var G__7678 = (i + (1));
var G__7679 = (d + (uc * base));
i = G__7678;
uc = G__7679;
continue;
}
}
break;
}
});

cljs.tools.reader.read_unicode_char.cljs$core$IFn$_invoke$arity$5 = (function (rdr,initch,base,length,exact_QMARK_){
var i = (1);
var uc = cljs.tools.reader.char_code.call(null,initch,base);
while(true){
if((uc === (-1))){
throw cljs.core.ex_info.call(null,[cljs.core.str("Invalid digit: "),cljs.core.str(initch)].join(''),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$illegal_DASH_argument], null));
} else {
if(!((i === length))){
var ch = cljs.tools.reader.reader_types.peek_char.call(null,rdr);
if(cljs.core.truth_((function (){var or__6409__auto__ = cljs.tools.reader.impl.utils.whitespace_QMARK_.call(null,ch);
if(or__6409__auto__){
return or__6409__auto__;
} else {
var or__6409__auto____$1 = cljs.tools.reader.macros.call(null,ch);
if(cljs.core.truth_(or__6409__auto____$1)){
return or__6409__auto____$1;
} else {
return (ch == null);
}
}
})())){
if(cljs.core.truth_(exact_QMARK_)){
throw cljs.core.ex_info.call(null,[cljs.core.str("Invalid character length: "),cljs.core.str(i),cljs.core.str(", should be: "),cljs.core.str(length)].join(''),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$illegal_DASH_argument], null));
} else {
return String.fromCharCode(uc);
}
} else {
var d = cljs.tools.reader.char_code.call(null,ch,base);
cljs.tools.reader.reader_types.read_char.call(null,rdr);

if((d === (-1))){
throw cljs.core.ex_info.call(null,[cljs.core.str("Invalid digit: "),cljs.core.str(ch)].join(''),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$illegal_DASH_argument], null));
} else {
var G__7680 = (i + (1));
var G__7681 = (d + (uc * base));
i = G__7680;
uc = G__7681;
continue;
}
}
} else {
return String.fromCharCode(uc);
}
}
break;
}
});

cljs.tools.reader.read_unicode_char.cljs$lang$maxFixedArity = 5;

cljs.tools.reader.upper_limit = "\uD7FF".charCodeAt((0));
cljs.tools.reader.lower_limit = "\uE000".charCodeAt((0));
cljs.tools.reader.valid_octal_QMARK_ = (function cljs$tools$reader$valid_octal_QMARK_(token,base){
return (parseInt(token,base) <= (255));
});
/**
 * Read in a character literal
 */
cljs.tools.reader.read_char_STAR_ = (function cljs$tools$reader$read_char_STAR_(rdr,backslash,opts,pending_forms){
var ch = cljs.tools.reader.reader_types.read_char.call(null,rdr);
if(!((ch == null))){
var token = (((cljs.tools.reader.macro_terminating_QMARK_.call(null,ch)) || (cljs.tools.reader.impl.utils.whitespace_QMARK_.call(null,ch)))?[cljs.core.str(ch)].join(''):cljs.tools.reader.read_token.call(null,rdr,ch));
var token_len = token.length;
if(((1) === token_len)){
return token.charAt((0));
} else {
if(cljs.core._EQ_.call(null,token,"newline")){
return "\n";
} else {
if(cljs.core._EQ_.call(null,token,"space")){
return " ";
} else {
if(cljs.core._EQ_.call(null,token,"tab")){
return "\t";
} else {
if(cljs.core._EQ_.call(null,token,"backspace")){
return "\b";
} else {
if(cljs.core._EQ_.call(null,token,"formfeed")){
return "\f";
} else {
if(cljs.core._EQ_.call(null,token,"return")){
return "\r";
} else {
if(cljs.core.truth_(goog.string.startsWith(token,"u"))){
var c = cljs.tools.reader.read_unicode_char.call(null,token,(1),(4),(16));
var ic = c.charCodeAt((0));
if(((ic > cljs.tools.reader.upper_limit)) && ((ic < cljs.tools.reader.lower_limit))){
return cljs.tools.reader.reader_types.reader_error.call(null,rdr,"Invalid character constant: \\u",c);
} else {
return c;
}
} else {
if(cljs.core.truth_(goog.string.startsWith(token,"o"))){
var len = (token_len - (1));
if((len > (3))){
return cljs.tools.reader.reader_types.reader_error.call(null,rdr,"Invalid octal escape sequence length: ",len);
} else {
var offset = (1);
var base = (8);
var uc = cljs.tools.reader.read_unicode_char.call(null,token,offset,len,base);
if(cljs.core.not.call(null,cljs.tools.reader.valid_octal_QMARK_.call(null,cljs.core.subs.call(null,token,offset),base))){
return cljs.tools.reader.reader_types.reader_error.call(null,rdr,"Octal escape sequence must be in range [0, 377]");
} else {
return uc;
}
}
} else {
return cljs.tools.reader.reader_types.reader_error.call(null,rdr,"Unsupported character: \\",token);

}
}
}
}
}
}
}
}
}
} else {
return cljs.tools.reader.reader_types.reader_error.call(null,rdr,"EOF while reading character");
}
});
cljs.tools.reader.starting_line_col_info = (function cljs$tools$reader$starting_line_col_info(rdr){
if(cljs.core.truth_(cljs.tools.reader.reader_types.indexing_reader_QMARK_.call(null,rdr))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.tools.reader.reader_types.get_line_number.call(null,rdr),((cljs.tools.reader.reader_types.get_column_number.call(null,rdr) - (1)) | (0))], null);
} else {
return null;
}
});
cljs.tools.reader.ending_line_col_info = (function cljs$tools$reader$ending_line_col_info(rdr){
if(cljs.core.truth_(cljs.tools.reader.reader_types.indexing_reader_QMARK_.call(null,rdr))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.tools.reader.reader_types.get_line_number.call(null,rdr),cljs.tools.reader.reader_types.get_column_number.call(null,rdr)], null);
} else {
return null;
}
});
if(typeof cljs.tools.reader.READ_EOF !== 'undefined'){
} else {
cljs.tools.reader.READ_EOF = (new Object());
}
if(typeof cljs.tools.reader.READ_FINISHED !== 'undefined'){
} else {
cljs.tools.reader.READ_FINISHED = (new Object());
}
cljs.tools.reader._STAR_read_delim_STAR_ = false;
cljs.tools.reader.read_delimited_internal = (function cljs$tools$reader$read_delimited_internal(delim,rdr,opts,pending_forms){
var vec__7685 = cljs.tools.reader.starting_line_col_info.call(null,rdr);
var start_line = cljs.core.nth.call(null,vec__7685,(0),null);
var start_column = cljs.core.nth.call(null,vec__7685,(1),null);
var delim__$1 = cljs.tools.reader.impl.utils.char$.call(null,delim);
var a = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
while(true){
var form = cljs.tools.reader.read_STAR_.call(null,rdr,false,cljs.tools.reader.READ_EOF,delim__$1,opts,pending_forms);
if((form === cljs.tools.reader.READ_FINISHED)){
return cljs.core.persistent_BANG_.call(null,a);
} else {
if((form === cljs.tools.reader.READ_EOF)){
return cljs.tools.reader.reader_types.reader_error.call(null,rdr,"EOF while reading",(cljs.core.truth_(start_line)?[cljs.core.str(", starting at line "),cljs.core.str(start_line),cljs.core.str(" and column "),cljs.core.str(start_column)].join(''):null));
} else {
var G__7688 = cljs.core.conj_BANG_.call(null,a,form);
a = G__7688;
continue;
}
}
break;
}
});
/**
 * Reads and returns a collection ended with delim
 */
cljs.tools.reader.read_delimited = (function cljs$tools$reader$read_delimited(delim,rdr,opts,pending_forms){
var _STAR_read_delim_STAR_7690 = cljs.tools.reader._STAR_read_delim_STAR_;
cljs.tools.reader._STAR_read_delim_STAR_ = true;

try{return cljs.tools.reader.read_delimited_internal.call(null,delim,rdr,opts,pending_forms);
}finally {cljs.tools.reader._STAR_read_delim_STAR_ = _STAR_read_delim_STAR_7690;
}});
/**
 * Read in a list, including its location if the reader is an indexing reader
 */
cljs.tools.reader.read_list = (function cljs$tools$reader$read_list(rdr,_,opts,pending_forms){
var vec__7697 = cljs.tools.reader.starting_line_col_info.call(null,rdr);
var start_line = cljs.core.nth.call(null,vec__7697,(0),null);
var start_column = cljs.core.nth.call(null,vec__7697,(1),null);
var the_list = cljs.tools.reader.read_delimited.call(null,")",rdr,opts,pending_forms);
var vec__7700 = cljs.tools.reader.ending_line_col_info.call(null,rdr);
var end_line = cljs.core.nth.call(null,vec__7700,(0),null);
var end_column = cljs.core.nth.call(null,vec__7700,(1),null);
return cljs.core.with_meta.call(null,((cljs.core.empty_QMARK_.call(null,the_list))?cljs.core.List.EMPTY:cljs.core.apply.call(null,cljs.core.list,the_list)),(cljs.core.truth_(start_line)?cljs.core.merge.call(null,(function (){var temp__4657__auto__ = cljs.tools.reader.reader_types.get_file_name.call(null,rdr);
if(cljs.core.truth_(temp__4657__auto__)){
var file = temp__4657__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$file,file], null);
} else {
return null;
}
})(),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$line,start_line,cljs.core.cst$kw$column,start_column,cljs.core.cst$kw$end_DASH_line,end_line,cljs.core.cst$kw$end_DASH_column,end_column], null)):null));
});
/**
 * Read in a vector, including its location if the reader is an indexing reader
 */
cljs.tools.reader.read_vector = (function cljs$tools$reader$read_vector(rdr,_,opts,pending_forms){
var vec__7709 = cljs.tools.reader.starting_line_col_info.call(null,rdr);
var start_line = cljs.core.nth.call(null,vec__7709,(0),null);
var start_column = cljs.core.nth.call(null,vec__7709,(1),null);
var the_vector = cljs.tools.reader.read_delimited.call(null,"]",rdr,opts,pending_forms);
var vec__7712 = cljs.tools.reader.ending_line_col_info.call(null,rdr);
var end_line = cljs.core.nth.call(null,vec__7712,(0),null);
var end_column = cljs.core.nth.call(null,vec__7712,(1),null);
return cljs.core.with_meta.call(null,the_vector,(cljs.core.truth_(start_line)?cljs.core.merge.call(null,(function (){var temp__4657__auto__ = cljs.tools.reader.reader_types.get_file_name.call(null,rdr);
if(cljs.core.truth_(temp__4657__auto__)){
var file = temp__4657__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$file,file], null);
} else {
return null;
}
})(),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$line,start_line,cljs.core.cst$kw$column,start_column,cljs.core.cst$kw$end_DASH_line,end_line,cljs.core.cst$kw$end_DASH_column,end_column], null)):null));
});
/**
 * Read in a map, including its location if the reader is an indexing reader
 */
cljs.tools.reader.read_map = (function cljs$tools$reader$read_map(rdr,_,opts,pending_forms){
var vec__7721 = cljs.tools.reader.starting_line_col_info.call(null,rdr);
var start_line = cljs.core.nth.call(null,vec__7721,(0),null);
var start_column = cljs.core.nth.call(null,vec__7721,(1),null);
var the_map = cljs.tools.reader.read_delimited.call(null,"}",rdr,opts,pending_forms);
var map_count = cljs.core.count.call(null,the_map);
var vec__7724 = cljs.tools.reader.ending_line_col_info.call(null,rdr);
var end_line = cljs.core.nth.call(null,vec__7724,(0),null);
var end_column = cljs.core.nth.call(null,vec__7724,(1),null);
if(cljs.core.odd_QMARK_.call(null,map_count)){
cljs.tools.reader.reader_types.reader_error.call(null,rdr,"Map literal must contain an even number of forms");
} else {
}

return cljs.core.with_meta.call(null,(((map_count === (0)))?cljs.core.PersistentArrayMap.EMPTY:cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.to_array.call(null,the_map))),(cljs.core.truth_(start_line)?cljs.core.merge.call(null,(function (){var temp__4657__auto__ = cljs.tools.reader.reader_types.get_file_name.call(null,rdr);
if(cljs.core.truth_(temp__4657__auto__)){
var file = temp__4657__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$file,file], null);
} else {
return null;
}
})(),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$line,start_line,cljs.core.cst$kw$column,start_column,cljs.core.cst$kw$end_DASH_line,end_line,cljs.core.cst$kw$end_DASH_column,end_column], null)):null));
});
cljs.tools.reader.read_number = (function cljs$tools$reader$read_number(rdr,initch){
var sb = (function (){var G__7729 = (new goog.string.StringBuffer());
G__7729.append(initch);

return G__7729;
})();
var ch = cljs.tools.reader.reader_types.read_char.call(null,rdr);
while(true){
if(cljs.core.truth_((function (){var or__6409__auto__ = cljs.tools.reader.impl.utils.whitespace_QMARK_.call(null,ch);
if(or__6409__auto__){
return or__6409__auto__;
} else {
var or__6409__auto____$1 = cljs.tools.reader.macros.call(null,ch);
if(cljs.core.truth_(or__6409__auto____$1)){
return or__6409__auto____$1;
} else {
return (ch == null);
}
}
})())){
var s = [cljs.core.str(sb)].join('');
cljs.tools.reader.reader_types.unread.call(null,rdr,ch);

var or__6409__auto__ = cljs.tools.reader.impl.commons.match_number.call(null,s);
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return cljs.tools.reader.reader_types.reader_error.call(null,rdr,"Invalid number format [",s,"]");
}
} else {
var G__7731 = (function (){var G__7730 = sb;
G__7730.append(ch);

return G__7730;
})();
var G__7732 = cljs.tools.reader.reader_types.read_char.call(null,rdr);
sb = G__7731;
ch = G__7732;
continue;
}
break;
}
});
cljs.tools.reader.escape_char = (function cljs$tools$reader$escape_char(sb,rdr){
var ch = cljs.tools.reader.reader_types.read_char.call(null,rdr);
var G__7734 = ch;
switch (G__7734) {
case "t":
return "\t";

break;
case "r":
return "\r";

break;
case "n":
return "\n";

break;
case "\\":
return "\\";

break;
case "\"":
return "\"";

break;
case "b":
return "\b";

break;
case "f":
return "\f";

break;
case "u":
var ch__$1 = cljs.tools.reader.reader_types.read_char.call(null,rdr);
if(((-1) === parseInt((ch__$1 | (0)),(16)))){
return cljs.tools.reader.reader_types.reader_error.call(null,rdr,"Invalid unicode escape: \\u",ch__$1);
} else {
return cljs.tools.reader.read_unicode_char.call(null,rdr,ch__$1,(16),(4),true);
}

break;
default:
if(cljs.tools.reader.impl.utils.numeric_QMARK_.call(null,ch)){
var ch__$1 = cljs.tools.reader.read_unicode_char.call(null,rdr,ch,(8),(3),false);
if(((ch__$1 | (0)) > (223))){
return cljs.tools.reader.reader_types.reader_error.call(null,rdr,"Octal escape sequence must be in range [0, 377]");
} else {
return ch__$1;
}
} else {
return cljs.tools.reader.reader_types.reader_error.call(null,rdr,"Unsupported escape character: \\",ch);
}

}
});
cljs.tools.reader.read_string_STAR_ = (function cljs$tools$reader$read_string_STAR_(reader,_,opts,pending_forms){
var sb = (new goog.string.StringBuffer());
var ch = cljs.tools.reader.reader_types.read_char.call(null,reader);
while(true){
if((ch == null)){
return cljs.tools.reader.reader_types.reader_error.call(null,reader,"EOF while reading string");
} else {
var G__7739 = ch;
switch (G__7739) {
case "\\":
var G__7743 = (function (){var G__7740 = sb;
G__7740.append(cljs.tools.reader.escape_char.call(null,sb,reader));

return G__7740;
})();
var G__7744 = cljs.tools.reader.reader_types.read_char.call(null,reader);
sb = G__7743;
ch = G__7744;
continue;

break;
case "\"":
return [cljs.core.str(sb)].join('');

break;
default:
var G__7745 = (function (){var G__7741 = sb;
G__7741.append(ch);

return G__7741;
})();
var G__7746 = cljs.tools.reader.reader_types.read_char.call(null,reader);
sb = G__7745;
ch = G__7746;
continue;

}
}
break;
}
});
cljs.tools.reader.loc_info = (function cljs$tools$reader$loc_info(rdr,line,column){
if((line == null)){
return null;
} else {
var file = cljs.tools.reader.reader_types.get_file_name.call(null,rdr);
var filem = (((file == null))?null:new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$file,file], null));
var vec__7750 = cljs.tools.reader.ending_line_col_info.call(null,rdr);
var end_line = cljs.core.nth.call(null,vec__7750,(0),null);
var end_column = cljs.core.nth.call(null,vec__7750,(1),null);
var lcm = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$line,line,cljs.core.cst$kw$column,column,cljs.core.cst$kw$end_DASH_line,end_line,cljs.core.cst$kw$end_DASH_column,end_column], null);
return cljs.core.merge.call(null,filem,lcm);
}
});
cljs.tools.reader.read_symbol = (function cljs$tools$reader$read_symbol(rdr,initch){
var vec__7757 = cljs.tools.reader.starting_line_col_info.call(null,rdr);
var line = cljs.core.nth.call(null,vec__7757,(0),null);
var column = cljs.core.nth.call(null,vec__7757,(1),null);
var token = cljs.tools.reader.read_token.call(null,rdr,initch);
if((token == null)){
return null;
} else {
var G__7760 = token;
switch (G__7760) {
case "nil":
return null;

break;
case "true":
return true;

break;
case "false":
return false;

break;
case "/":
return cljs.core.cst$sym$_SLASH_;

break;
case "NaN":
return Number.NaN;

break;
case "-Infinity":
return Number.NEGATIVE_INFINITY;

break;
case "Infinity":
case "+Infinity":
return Number.POSITIVE_INFINITY;

break;
default:
var p = cljs.tools.reader.impl.commons.parse_symbol.call(null,token);
if(!((p == null))){
var sym = cljs.core.symbol.call(null,cljs.core._nth.call(null,p,(0)),cljs.core._nth.call(null,p,(1)));
return cljs.core._with_meta.call(null,sym,cljs.tools.reader.loc_info.call(null,rdr,line,column));
} else {
return cljs.tools.reader.reader_types.reader_error.call(null,rdr,"Invalid token: ",token);
}

}
}
});
/**
 * Map from ns alias to ns, if non-nil, it will be used to resolve read-time
 * ns aliases.
 * 
 * Defaults to nil
 */
cljs.tools.reader._STAR_alias_map_STAR_ = null;
cljs.tools.reader.resolve_ns = (function cljs$tools$reader$resolve_ns(sym){
var or__6409__auto__ = cljs.core.get.call(null,cljs.tools.reader._STAR_alias_map_STAR_,sym);
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
var temp__4657__auto__ = cljs.core.find_ns.call(null,sym);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return cljs.core.symbol.call(null,cljs.core.ns_name.call(null,ns));
} else {
return null;
}
}
});
cljs.tools.reader.read_keyword = (function cljs$tools$reader$read_keyword(reader,initch,opts,pending_forms){
var ch = cljs.tools.reader.reader_types.read_char.call(null,reader);
if(!(cljs.tools.reader.impl.utils.whitespace_QMARK_.call(null,ch))){
var token = cljs.tools.reader.read_token.call(null,reader,ch);
var s = cljs.tools.reader.impl.commons.parse_symbol.call(null,token);
if(!((s == null))){
var ns = cljs.core._nth.call(null,s,(0));
var name = cljs.core._nth.call(null,s,(1));
if((":" === token.charAt((0)))){
if(!((ns == null))){
var ns__$1 = cljs.tools.reader.resolve_ns.call(null,cljs.core.symbol.call(null,cljs.core.subs.call(null,ns,(1))));
if(!((ns__$1 == null))){
return cljs.core.keyword.call(null,[cljs.core.str(ns__$1)].join(''),name);
} else {
return cljs.tools.reader.reader_types.reader_error.call(null,reader,"Invalid token: :",token);
}
} else {
return cljs.core.keyword.call(null,[cljs.core.str(cljs.core._STAR_ns_STAR_)].join(''),cljs.core.subs.call(null,name,(1)));
}
} else {
return cljs.core.keyword.call(null,ns,name);
}
} else {
return cljs.tools.reader.reader_types.reader_error.call(null,reader,"Invalid token: :",token);
}
} else {
return cljs.tools.reader.reader_types.reader_error.call(null,reader,"Invalid token: :");
}
});
/**
 * Returns a function which wraps a reader in a call to sym
 */
cljs.tools.reader.wrapping_reader = (function cljs$tools$reader$wrapping_reader(sym){
return (function (rdr,_,opts,pending_forms){
var x__7243__auto__ = sym;
return cljs.core._conj.call(null,(function (){var x__7243__auto____$1 = cljs.tools.reader.read_STAR_.call(null,rdr,true,null,opts,pending_forms);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto____$1);
})(),x__7243__auto__);
});
});
/**
 * Read metadata and return the following object with the metadata applied
 */
cljs.tools.reader.read_meta = (function cljs$tools$reader$read_meta(rdr,_,opts,pending_forms){
if((cljs.tools.reader.reader_types.source_logging_reader_QMARK_.call(null,rdr)) && (!(cljs.tools.reader.impl.utils.whitespace_QMARK_.call(null,cljs.tools.reader.reader_types.peek_char.call(null,rdr))))){
return cljs.tools.reader.reader_types.log_source_STAR_.call(null,rdr,(function (){
var vec__7772 = cljs.tools.reader.starting_line_col_info.call(null,rdr);
var line = cljs.core.nth.call(null,vec__7772,(0),null);
var column = cljs.core.nth.call(null,vec__7772,(1),null);
var m = cljs.tools.reader.impl.utils.desugar_meta.call(null,cljs.tools.reader.read_STAR_.call(null,rdr,true,null,opts,pending_forms));
if(cljs.core.map_QMARK_.call(null,m)){
} else {
cljs.tools.reader.reader_types.reader_error.call(null,rdr,"Metadata must be Symbol, Keyword, String or Map");
}

var o = cljs.tools.reader.read_STAR_.call(null,rdr,true,null,opts,pending_forms);
if(((!((o == null)))?((((o.cljs$lang$protocol_mask$partition0$ & (131072))) || (o.cljs$core$IMeta$))?true:false):false)){
var m__$1 = (cljs.core.truth_((function (){var and__6397__auto__ = line;
if(cljs.core.truth_(and__6397__auto__)){
return cljs.core.seq_QMARK_.call(null,o);
} else {
return and__6397__auto__;
}
})())?cljs.core.assoc.call(null,m,cljs.core.cst$kw$line,line,cljs.core.cst$kw$column,column):m);
if(((!((o == null)))?((((o.cljs$lang$protocol_mask$partition0$ & (262144))) || (o.cljs$core$IWithMeta$))?true:false):false)){
return cljs.core.with_meta.call(null,o,cljs.core.merge.call(null,cljs.core.meta.call(null,o),m__$1));
} else {
return cljs.core.reset_meta_BANG_.call(null,o,m__$1);
}
} else {
return cljs.tools.reader.reader_types.reader_error.call(null,rdr,"Metadata can only be applied to IMetas");
}
}));
} else {
var vec__7777 = cljs.tools.reader.starting_line_col_info.call(null,rdr);
var line = cljs.core.nth.call(null,vec__7777,(0),null);
var column = cljs.core.nth.call(null,vec__7777,(1),null);
var m = cljs.tools.reader.impl.utils.desugar_meta.call(null,cljs.tools.reader.read_STAR_.call(null,rdr,true,null,opts,pending_forms));
if(cljs.core.map_QMARK_.call(null,m)){
} else {
cljs.tools.reader.reader_types.reader_error.call(null,rdr,"Metadata must be Symbol, Keyword, String or Map");
}

var o = cljs.tools.reader.read_STAR_.call(null,rdr,true,null,opts,pending_forms);
if(((!((o == null)))?((((o.cljs$lang$protocol_mask$partition0$ & (131072))) || (o.cljs$core$IMeta$))?true:false):false)){
var m__$1 = (cljs.core.truth_((function (){var and__6397__auto__ = line;
if(cljs.core.truth_(and__6397__auto__)){
return cljs.core.seq_QMARK_.call(null,o);
} else {
return and__6397__auto__;
}
})())?cljs.core.assoc.call(null,m,cljs.core.cst$kw$line,line,cljs.core.cst$kw$column,column):m);
if(((!((o == null)))?((((o.cljs$lang$protocol_mask$partition0$ & (262144))) || (o.cljs$core$IWithMeta$))?true:false):false)){
return cljs.core.with_meta.call(null,o,cljs.core.merge.call(null,cljs.core.meta.call(null,o),m__$1));
} else {
return cljs.core.reset_meta_BANG_.call(null,o,m__$1);
}
} else {
return cljs.tools.reader.reader_types.reader_error.call(null,rdr,"Metadata can only be applied to IMetas");
}
}
});
cljs.tools.reader.read_set = (function cljs$tools$reader$read_set(rdr,_,opts,pending_forms){
var vec__7788 = cljs.tools.reader.starting_line_col_info.call(null,rdr);
var start_line = cljs.core.nth.call(null,vec__7788,(0),null);
var start_column = cljs.core.nth.call(null,vec__7788,(1),null);
var start_column__$1 = (cljs.core.truth_(start_column)?((start_column - (1)) | (0)):null);
var the_set = cljs.core.set.call(null,cljs.tools.reader.read_delimited.call(null,"}",rdr,opts,pending_forms));
var vec__7791 = cljs.tools.reader.ending_line_col_info.call(null,rdr);
var end_line = cljs.core.nth.call(null,vec__7791,(0),null);
var end_column = cljs.core.nth.call(null,vec__7791,(1),null);
return cljs.core.with_meta.call(null,the_set,(cljs.core.truth_(start_line)?cljs.core.merge.call(null,(function (){var temp__4657__auto__ = cljs.tools.reader.reader_types.get_file_name.call(null,rdr);
if(cljs.core.truth_(temp__4657__auto__)){
var file = temp__4657__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$file,file], null);
} else {
return null;
}
})(),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$line,start_line,cljs.core.cst$kw$column,start_column__$1,cljs.core.cst$kw$end_DASH_line,end_line,cljs.core.cst$kw$end_DASH_column,end_column], null)):null));
});
/**
 * Read and discard the first object from rdr
 */
cljs.tools.reader.read_discard = (function cljs$tools$reader$read_discard(rdr,_,opts,pending_forms){
var G__7795 = rdr;
cljs.tools.reader.read_STAR_.call(null,G__7795,true,null,opts,pending_forms);

return G__7795;
});
cljs.tools.reader.RESERVED_FEATURES = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$else,null,cljs.core.cst$kw$none,null], null), null);
cljs.tools.reader.has_feature_QMARK_ = (function cljs$tools$reader$has_feature_QMARK_(rdr,feature,opts){
if((feature instanceof cljs.core.Keyword)){
return (cljs.core._EQ_.call(null,cljs.core.cst$kw$default,feature)) || (cljs.core.contains_QMARK_.call(null,cljs.core.get.call(null,opts,cljs.core.cst$kw$features),feature));
} else {
return cljs.tools.reader.reader_types.reader_error.call(null,rdr,[cljs.core.str("Feature should be a keyword: "),cljs.core.str(feature)].join(''));
}
});
cljs.tools.reader.check_eof_error = (function cljs$tools$reader$check_eof_error(form,rdr,first_line){
if((form === cljs.tools.reader.READ_EOF)){
if((first_line < (0))){
return cljs.tools.reader.reader_types.reader_error.call(null,rdr,"EOF while reading");
} else {
return cljs.tools.reader.reader_types.reader_error.call(null,rdr,"EOF while reading, starting at line ",first_line);
}
} else {
return null;
}
});
cljs.tools.reader.check_reserved_features = (function cljs$tools$reader$check_reserved_features(rdr,form){
if(cljs.core.truth_(cljs.core.get.call(null,cljs.tools.reader.RESERVED_FEATURES,form))){
return cljs.tools.reader.reader_types.reader_error.call(null,rdr,[cljs.core.str("Feature name "),cljs.core.str(form),cljs.core.str(" is reserved")].join(''));
} else {
return null;
}
});
cljs.tools.reader.check_invalid_read_cond = (function cljs$tools$reader$check_invalid_read_cond(form,rdr,first_line){
if((form === cljs.tools.reader.READ_FINISHED)){
if((first_line < (0))){
return cljs.tools.reader.reader_types.reader_error.call(null,rdr,"read-cond requires an even number of forms");
} else {
return cljs.tools.reader.reader_types.reader_error.call(null,rdr,[cljs.core.str("read-cond starting on line "),cljs.core.str(first_line),cljs.core.str(" requires an even number of forms")].join(''));
}
} else {
return null;
}
});
/**
 * Read next form and suppress. Return nil or READ_FINISHED.
 */
cljs.tools.reader.read_suppress = (function cljs$tools$reader$read_suppress(first_line,rdr,opts,pending_forms){
var _STAR_suppress_read_STAR_7797 = cljs.tools.reader._STAR_suppress_read_STAR_;
cljs.tools.reader._STAR_suppress_read_STAR_ = true;

try{var form = cljs.tools.reader.read_STAR_.call(null,rdr,false,cljs.tools.reader.READ_EOF,")",opts,pending_forms);
cljs.tools.reader.check_eof_error.call(null,form,rdr,first_line);

if((form === cljs.tools.reader.READ_FINISHED)){
return cljs.tools.reader.READ_FINISHED;
} else {
return null;
}
}finally {cljs.tools.reader._STAR_suppress_read_STAR_ = _STAR_suppress_read_STAR_7797;
}});
if(typeof cljs.tools.reader.NO_MATCH !== 'undefined'){
} else {
cljs.tools.reader.NO_MATCH = (new Object());
}
/**
 * Read next feature. If matched, read next form and return.
 * Otherwise, read and skip next form, returning READ_FINISHED or nil.
 */
cljs.tools.reader.match_feature = (function cljs$tools$reader$match_feature(first_line,rdr,opts,pending_forms){
var feature = cljs.tools.reader.read_STAR_.call(null,rdr,false,cljs.tools.reader.READ_EOF,")",opts,pending_forms);
cljs.tools.reader.check_eof_error.call(null,feature,rdr,first_line);

if(cljs.core._EQ_.call(null,feature,cljs.tools.reader.READ_FINISHED)){
return cljs.tools.reader.READ_FINISHED;
} else {
cljs.tools.reader.check_reserved_features.call(null,rdr,feature);

if(cljs.core.truth_(cljs.tools.reader.has_feature_QMARK_.call(null,rdr,feature,opts))){
var G__7799 = cljs.tools.reader.read_STAR_.call(null,rdr,false,cljs.tools.reader.READ_EOF,")",opts,pending_forms);
cljs.tools.reader.check_eof_error.call(null,G__7799,rdr,first_line);

cljs.tools.reader.check_invalid_read_cond.call(null,G__7799,rdr,first_line);

return G__7799;
} else {
var or__6409__auto__ = cljs.tools.reader.read_suppress.call(null,first_line,rdr,opts,pending_forms);
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return cljs.tools.reader.NO_MATCH;
}
}
}
});
cljs.tools.reader.read_cond_delimited = (function cljs$tools$reader$read_cond_delimited(rdr,splicing,opts,pending_forms){
var first_line = (cljs.core.truth_(cljs.tools.reader.reader_types.indexing_reader_QMARK_.call(null,rdr))?cljs.tools.reader.reader_types.get_line_number.call(null,rdr):(-1));
var result = (function (){var matched = cljs.tools.reader.NO_MATCH;
var finished = null;
while(true){
if((matched === cljs.tools.reader.NO_MATCH)){
var match = cljs.tools.reader.match_feature.call(null,first_line,rdr,opts,pending_forms);
if((match === cljs.tools.reader.READ_FINISHED)){
return cljs.tools.reader.READ_FINISHED;
} else {
var G__7802 = match;
var G__7803 = null;
matched = G__7802;
finished = G__7803;
continue;
}
} else {
if(!((finished === cljs.tools.reader.READ_FINISHED))){
var G__7804 = matched;
var G__7805 = cljs.tools.reader.read_suppress.call(null,first_line,rdr,opts,pending_forms);
matched = G__7804;
finished = G__7805;
continue;
} else {
return matched;

}
}
break;
}
})();
if((result === cljs.tools.reader.READ_FINISHED)){
return rdr;
} else {
if(cljs.core.truth_(splicing)){
if(((!((result == null)))?((((result.cljs$lang$protocol_mask$partition0$ & (16777216))) || (result.cljs$core$ISequential$))?true:false):false)){
goog.array.insertArrayAt(pending_forms,cljs.core.to_array.call(null,result),(0));

return rdr;
} else {
return cljs.tools.reader.reader_types.reader_error.call(null,rdr,"Spliced form list in read-cond-splicing must implement java.util.List.");
}
} else {
return result;
}
}
});
cljs.tools.reader.read_cond = (function cljs$tools$reader$read_cond(rdr,_,opts,pending_forms){
if(cljs.core.not.call(null,(function (){var and__6397__auto__ = opts;
if(cljs.core.truth_(and__6397__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$preserve,null,cljs.core.cst$kw$allow,null], null), null).call(null,cljs.core.cst$kw$read_DASH_cond.cljs$core$IFn$_invoke$arity$1(opts));
} else {
return and__6397__auto__;
}
})())){
throw cljs.core.ex_info.call(null,"Conditional read not allowed",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$runtime_DASH_exception], null));
} else {
}

var temp__4655__auto__ = cljs.tools.reader.reader_types.read_char.call(null,rdr);
if(cljs.core.truth_(temp__4655__auto__)){
var ch = temp__4655__auto__;
var splicing = cljs.core._EQ_.call(null,ch,"@");
var ch__$1 = ((splicing)?cljs.tools.reader.reader_types.read_char.call(null,rdr):ch);
if(splicing){
if(cljs.core.truth_(cljs.tools.reader._STAR_read_delim_STAR_)){
} else {
cljs.tools.reader.reader_types.reader_error.call(null,rdr,"cond-splice not in list");
}
} else {
}

var temp__4655__auto____$1 = ((cljs.tools.reader.impl.utils.whitespace_QMARK_.call(null,ch__$1))?cljs.tools.reader.impl.commons.read_past.call(null,cljs.tools.reader.impl.utils.whitespace_QMARK_,rdr):ch__$1);
if(cljs.core.truth_(temp__4655__auto____$1)){
var ch__$2 = temp__4655__auto____$1;
if(cljs.core.not_EQ_.call(null,ch__$2,"(")){
throw cljs.core.ex_info.call(null,"read-cond body must be a list",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$runtime_DASH_exception], null));
} else {
var _STAR_suppress_read_STAR_7807 = cljs.tools.reader._STAR_suppress_read_STAR_;
cljs.tools.reader._STAR_suppress_read_STAR_ = (function (){var or__6409__auto__ = cljs.tools.reader._STAR_suppress_read_STAR_;
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.cst$kw$preserve,cljs.core.cst$kw$read_DASH_cond.cljs$core$IFn$_invoke$arity$1(opts));
}
})();

try{if(cljs.core.truth_(cljs.tools.reader._STAR_suppress_read_STAR_)){
return cljs.tools.reader.impl.utils.reader_conditional.call(null,cljs.tools.reader.read_list.call(null,rdr,ch__$2,opts,pending_forms),splicing);
} else {
return cljs.tools.reader.read_cond_delimited.call(null,rdr,splicing,opts,pending_forms);
}
}finally {cljs.tools.reader._STAR_suppress_read_STAR_ = _STAR_suppress_read_STAR_7807;
}}
} else {
return cljs.tools.reader.reader_types.reader_error.call(null,rdr,"EOF while reading character");
}
} else {
return cljs.tools.reader.reader_types.reader_error.call(null,rdr,"EOF while reading character");
}
});
cljs.tools.reader.arg_env = null;
/**
 * Get a symbol for an anonymous ?argument?
 */
cljs.tools.reader.garg = (function cljs$tools$reader$garg(n){
return cljs.core.symbol.call(null,[cljs.core.str(((((-1) === n))?"rest":[cljs.core.str("p"),cljs.core.str(n)].join(''))),cljs.core.str("__"),cljs.core.str(cljs.tools.reader.impl.utils.next_id.call(null)),cljs.core.str("#")].join(''));
});
cljs.tools.reader.read_fn = (function cljs$tools$reader$read_fn(rdr,_,opts,pending_forms){
if(cljs.core.truth_(cljs.tools.reader.arg_env)){
throw cljs.core.ex_info.call(null,"Nested #()s are not allowed",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$illegal_DASH_state], null));
} else {
}

var arg_env7810 = cljs.tools.reader.arg_env;
cljs.tools.reader.arg_env = cljs.core.sorted_map.call(null);

try{var form = cljs.tools.reader.read_STAR_.call(null,(function (){var G__7811 = rdr;
cljs.tools.reader.reader_types.unread.call(null,G__7811,"(");

return G__7811;
})(),true,null,opts,pending_forms);
var rargs = cljs.core.rseq.call(null,cljs.tools.reader.arg_env);
var args = ((rargs)?(function (){var higharg = cljs.core.key.call(null,cljs.core.first.call(null,rargs));
var args = (function (){var i = (1);
var args = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
while(true){
if((i > higharg)){
return cljs.core.persistent_BANG_.call(null,args);
} else {
var G__7812 = (i + (1));
var G__7813 = cljs.core.conj_BANG_.call(null,args,(function (){var or__6409__auto__ = cljs.core.get.call(null,cljs.tools.reader.arg_env,i);
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return cljs.tools.reader.garg.call(null,i);
}
})());
i = G__7812;
args = G__7813;
continue;
}
break;
}
})();
var args__$1 = (cljs.core.truth_(cljs.tools.reader.arg_env.call(null,(-1)))?cljs.core.conj.call(null,args,cljs.core.cst$sym$_AMPERSAND_,cljs.tools.reader.arg_env.call(null,(-1))):args);
return args__$1;
})():cljs.core.PersistentVector.EMPTY);
return cljs.core._conj.call(null,(function (){var x__7243__auto__ = args;
return cljs.core._conj.call(null,(function (){var x__7243__auto____$1 = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto____$1);
})(),x__7243__auto__);
})(),cljs.core.cst$sym$fn_STAR_);
}finally {cljs.tools.reader.arg_env = arg_env7810;
}});
/**
 * Registers an argument to the arg-env
 */
cljs.tools.reader.register_arg = (function cljs$tools$reader$register_arg(n){
if(cljs.core.truth_(cljs.tools.reader.arg_env)){
var temp__4655__auto__ = cljs.tools.reader.arg_env.call(null,n);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return ret;
} else {
var g = cljs.tools.reader.garg.call(null,n);
cljs.tools.reader.arg_env = cljs.core.assoc.call(null,cljs.tools.reader.arg_env,n,g);

return g;
}
} else {
throw cljs.core.ex_info.call(null,"Arg literal not in #()",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$illegal_DASH_state], null));
}
});
cljs.tools.reader.read_arg = (function cljs$tools$reader$read_arg(rdr,pct,opts,pending_forms){
if((cljs.tools.reader.arg_env == null)){
return cljs.tools.reader.read_symbol.call(null,rdr,pct);
} else {
var ch = cljs.tools.reader.reader_types.peek_char.call(null,rdr);
if((cljs.tools.reader.impl.utils.whitespace_QMARK_.call(null,ch)) || (cljs.tools.reader.macro_terminating_QMARK_.call(null,ch)) || ((ch == null))){
return cljs.tools.reader.register_arg.call(null,(1));
} else {
if(cljs.core._EQ_.call(null,ch,"&")){
cljs.tools.reader.reader_types.read_char.call(null,rdr);

return cljs.tools.reader.register_arg.call(null,(-1));
} else {
var n = cljs.tools.reader.read_STAR_.call(null,rdr,true,null,opts,pending_forms);
if(!(cljs.core.integer_QMARK_.call(null,n))){
throw cljs.core.ex_info.call(null,"Arg literal must be %, %& or %integer",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$illegal_DASH_state], null));
} else {
return cljs.tools.reader.register_arg.call(null,n);
}

}
}
}
});
cljs.tools.reader.gensym_env = null;
cljs.tools.reader.read_unquote = (function cljs$tools$reader$read_unquote(rdr,comma,opts,pending_forms){
var temp__4655__auto__ = cljs.tools.reader.reader_types.peek_char.call(null,rdr);
if(cljs.core.truth_(temp__4655__auto__)){
var ch = temp__4655__auto__;
if(cljs.core._EQ_.call(null,"@",ch)){
return cljs.tools.reader.wrapping_reader.call(null,cljs.core.cst$sym$clojure$core_SLASH_unquote_DASH_splicing).call(null,(function (){var G__7815 = rdr;
cljs.tools.reader.reader_types.read_char.call(null,G__7815);

return G__7815;
})(),"@",opts,pending_forms);
} else {
return cljs.tools.reader.wrapping_reader.call(null,cljs.core.cst$sym$clojure$core_SLASH_unquote).call(null,rdr,"~",opts,pending_forms);
}
} else {
return null;
}
});
cljs.tools.reader.unquote_splicing_QMARK_ = (function cljs$tools$reader$unquote_splicing_QMARK_(form){
return (cljs.core.seq_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,form),cljs.core.cst$sym$clojure$core_SLASH_unquote_DASH_splicing));
});
cljs.tools.reader.unquote_QMARK_ = (function cljs$tools$reader$unquote_QMARK_(form){
return (cljs.core.seq_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,form),cljs.core.cst$sym$clojure$core_SLASH_unquote));
});
/**
 * Expand a list by resolving its syntax quotes and unquotes
 */
cljs.tools.reader.expand_list = (function cljs$tools$reader$expand_list(s){
var s__$1 = cljs.core.seq.call(null,s);
var r = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
while(true){
if(s__$1){
var item = cljs.core.first.call(null,s__$1);
var ret = cljs.core.conj_BANG_.call(null,r,(cljs.core.truth_(cljs.tools.reader.unquote_QMARK_.call(null,item))?cljs.core._conj.call(null,(function (){var x__7243__auto__ = cljs.core.second.call(null,item);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),cljs.core.cst$sym$clojure$core_SLASH_list):(cljs.core.truth_(cljs.tools.reader.unquote_splicing_QMARK_.call(null,item))?cljs.core.second.call(null,item):cljs.core._conj.call(null,(function (){var x__7243__auto__ = cljs.tools.reader.syntax_quote_STAR_.call(null,item);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),cljs.core.cst$sym$clojure$core_SLASH_list)
)));
var G__7816 = cljs.core.next.call(null,s__$1);
var G__7817 = ret;
s__$1 = G__7816;
r = G__7817;
continue;
} else {
return cljs.core.seq.call(null,cljs.core.persistent_BANG_.call(null,r));
}
break;
}
});
/**
 * Flatten a map into a seq of alternate keys and values
 */
cljs.tools.reader.flatten_map = (function cljs$tools$reader$flatten_map(form){
var s = cljs.core.seq.call(null,form);
var key_vals = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
while(true){
if(s){
var e = cljs.core.first.call(null,s);
var G__7818 = cljs.core.next.call(null,s);
var G__7819 = cljs.core.conj_BANG_.call(null,cljs.core.conj_BANG_.call(null,key_vals,cljs.core.key.call(null,e)),cljs.core.val.call(null,e));
s = G__7818;
key_vals = G__7819;
continue;
} else {
return cljs.core.seq.call(null,cljs.core.persistent_BANG_.call(null,key_vals));
}
break;
}
});
cljs.tools.reader.register_gensym = (function cljs$tools$reader$register_gensym(sym){
if(cljs.core.not.call(null,cljs.tools.reader.gensym_env)){
throw cljs.core.ex_info.call(null,"Gensym literal not in syntax-quote",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$illegal_DASH_state], null));
} else {
}

var or__6409__auto__ = cljs.core.get.call(null,cljs.tools.reader.gensym_env,sym);
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
var gs = cljs.core.symbol.call(null,[cljs.core.str(cljs.core.subs.call(null,cljs.core.name.call(null,sym),(0),(cljs.core.count.call(null,cljs.core.name.call(null,sym)) - (1)))),cljs.core.str("__"),cljs.core.str(cljs.tools.reader.impl.utils.next_id.call(null)),cljs.core.str("__auto__")].join(''));
cljs.tools.reader.gensym_env = cljs.core.assoc.call(null,cljs.tools.reader.gensym_env,sym,gs);

return gs;
}
});
cljs.tools.reader.add_meta = (function cljs$tools$reader$add_meta(form,ret){
if((function (){var and__6397__auto__ = ((!((form == null)))?((((form.cljs$lang$protocol_mask$partition0$ & (262144))) || (form.cljs$core$IWithMeta$))?true:false):false);
if(and__6397__auto__){
return cljs.core.seq.call(null,cljs.core.dissoc.call(null,cljs.core.meta.call(null,form),cljs.core.cst$kw$line,cljs.core.cst$kw$column,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$file,cljs.core.cst$kw$source));
} else {
return and__6397__auto__;
}
})()){
return cljs.core._conj.call(null,(function (){var x__7243__auto__ = ret;
return cljs.core._conj.call(null,(function (){var x__7243__auto____$1 = cljs.tools.reader.syntax_quote_STAR_.call(null,cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto____$1);
})(),x__7243__auto__);
})(),cljs.core.cst$sym$cljs$core_SLASH_with_DASH_meta);
} else {
return ret;
}
});
cljs.tools.reader.syntax_quote_coll = (function cljs$tools$reader$syntax_quote_coll(type,coll){
var res = cljs.core._conj.call(null,(function (){var x__7243__auto__ = cljs.core.cons.call(null,cljs.core.cst$sym$cljs$core_SLASH_concat,cljs.tools.reader.expand_list.call(null,coll));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),cljs.core.cst$sym$cljs$core_SLASH_sequence);
if(cljs.core.truth_(type)){
return cljs.core._conj.call(null,(function (){var x__7243__auto__ = type;
return cljs.core._conj.call(null,(function (){var x__7243__auto____$1 = res;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto____$1);
})(),x__7243__auto__);
})(),cljs.core.cst$sym$cljs$core_SLASH_apply);
} else {
return res;
}
});
/**
 * Decide which map type to use, array-map if less than 16 elements
 */
cljs.tools.reader.map_func = (function cljs$tools$reader$map_func(coll){
if((cljs.core.count.call(null,coll) >= (16))){
return cljs.core.cst$sym$cljs$core_SLASH_hash_DASH_map;
} else {
return cljs.core.cst$sym$cljs$core_SLASH_array_DASH_map;
}
});
cljs.tools.reader.bool_QMARK_ = (function cljs$tools$reader$bool_QMARK_(x){
return ((x instanceof Boolean)) || (x === true) || (x === false);
});
/**
 * Resolve a symbol s into its fully qualified namespace version
 */
cljs.tools.reader.resolve_symbol = (function cljs$tools$reader$resolve_symbol(s){
throw cljs.core.ex_info.call(null,"resolve-symbol is not implemented",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$sym,s], null));
});
cljs.tools.reader.syntax_quote_STAR_ = (function cljs$tools$reader$syntax_quote_STAR_(form){
return cljs.tools.reader.add_meta.call(null,form,((cljs.core.special_symbol_QMARK_.call(null,form))?cljs.core._conj.call(null,(function (){var x__7243__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),cljs.core.cst$sym$quote):(((form instanceof cljs.core.Symbol))?cljs.core._conj.call(null,(function (){var x__7243__auto__ = (cljs.core.truth_(cljs.core.namespace.call(null,form))?cljs.tools.reader.resolve_symbol.call(null,form):(cljs.core.truth_(goog.string.endsWith(cljs.core.name.call(null,form),"#"))?cljs.tools.reader.register_gensym.call(null,form):form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),cljs.core.cst$sym$quote):(cljs.core.truth_(cljs.tools.reader.unquote_QMARK_.call(null,form))?cljs.core.second.call(null,form):(cljs.core.truth_(cljs.tools.reader.unquote_splicing_QMARK_.call(null,form))?(function(){throw cljs.core.ex_info.call(null,"unquote-splice not in list",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$illegal_DASH_state], null))})():((cljs.core.coll_QMARK_.call(null,form))?((((!((form == null)))?((((form.cljs$lang$protocol_mask$partition0$ & (67108864))) || (form.cljs$core$IRecord$))?true:false):false))?form:((cljs.core.map_QMARK_.call(null,form))?cljs.tools.reader.syntax_quote_coll.call(null,cljs.tools.reader.map_func.call(null,form),cljs.tools.reader.flatten_map.call(null,form)):((cljs.core.vector_QMARK_.call(null,form))?cljs.core._conj.call(null,(function (){var x__7243__auto__ = cljs.tools.reader.syntax_quote_coll.call(null,null,form);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),cljs.core.cst$sym$cljs$core_SLASH_vec):((cljs.core.set_QMARK_.call(null,form))?cljs.tools.reader.syntax_quote_coll.call(null,cljs.core.cst$sym$cljs$core_SLASH_hash_DASH_set,form):(((cljs.core.seq_QMARK_.call(null,form)) || (cljs.core.list_QMARK_.call(null,form)))?(function (){var seq = cljs.core.seq.call(null,form);
if(seq){
return cljs.tools.reader.syntax_quote_coll.call(null,null,seq);
} else {
return cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_list);
}
})():(function(){throw cljs.core.ex_info.call(null,"Unknown Collection type",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$unsupported_DASH_operation], null))})()
))))):(cljs.core.truth_((function (){var or__6409__auto__ = (form instanceof cljs.core.Keyword);
if(or__6409__auto__){
return or__6409__auto__;
} else {
var or__6409__auto____$1 = typeof form === 'number';
if(or__6409__auto____$1){
return or__6409__auto____$1;
} else {
var or__6409__auto____$2 = typeof form === 'string';
if(or__6409__auto____$2){
return or__6409__auto____$2;
} else {
var or__6409__auto____$3 = (form == null);
if(or__6409__auto____$3){
return or__6409__auto____$3;
} else {
var or__6409__auto____$4 = cljs.tools.reader.bool_QMARK_.call(null,form);
if(cljs.core.truth_(or__6409__auto____$4)){
return or__6409__auto____$4;
} else {
return (form instanceof RegExp);
}
}
}
}
}
})())?form:cljs.core._conj.call(null,(function (){var x__7243__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7243__auto__);
})(),cljs.core.cst$sym$quote)
)))))));
});
cljs.tools.reader.read_syntax_quote = (function cljs$tools$reader$read_syntax_quote(rdr,backquote,opts,pending_forms){
var gensym_env7827 = cljs.tools.reader.gensym_env;
cljs.tools.reader.gensym_env = cljs.core.PersistentArrayMap.EMPTY;

try{return cljs.tools.reader.syntax_quote_STAR_.call(null,cljs.tools.reader.read_STAR_.call(null,rdr,true,null,opts,pending_forms));
}finally {cljs.tools.reader.gensym_env = gensym_env7827;
}});
cljs.tools.reader.macros = (function cljs$tools$reader$macros(ch){
var G__7829 = ch;
switch (G__7829) {
case "\"":
return cljs.tools.reader.read_string_STAR_;

break;
case ":":
return cljs.tools.reader.read_keyword;

break;
case ";":
return cljs.tools.reader.impl.commons.read_comment;

break;
case "'":
return cljs.tools.reader.wrapping_reader.call(null,cljs.core.cst$sym$quote);

break;
case "@":
return cljs.tools.reader.wrapping_reader.call(null,cljs.core.cst$sym$clojure$core_SLASH_deref);

break;
case "^":
return cljs.tools.reader.read_meta;

break;
case "`":
return cljs.tools.reader.read_syntax_quote;

break;
case "~":
return cljs.tools.reader.read_unquote;

break;
case "(":
return cljs.tools.reader.read_list;

break;
case ")":
return cljs.tools.reader.read_unmatched_delimiter;

break;
case "[":
return cljs.tools.reader.read_vector;

break;
case "]":
return cljs.tools.reader.read_unmatched_delimiter;

break;
case "{":
return cljs.tools.reader.read_map;

break;
case "}":
return cljs.tools.reader.read_unmatched_delimiter;

break;
case "\\":
return cljs.tools.reader.read_char_STAR_;

break;
case "%":
return cljs.tools.reader.read_arg;

break;
case "#":
return cljs.tools.reader.read_dispatch;

break;
default:
return null;

}
});
cljs.tools.reader.dispatch_macros = (function cljs$tools$reader$dispatch_macros(ch){
var G__7832 = ch;
switch (G__7832) {
case "^":
return cljs.tools.reader.read_meta;

break;
case "'":
return cljs.tools.reader.wrapping_reader.call(null,cljs.core.cst$sym$var);

break;
case "(":
return cljs.tools.reader.read_fn;

break;
case "{":
return cljs.tools.reader.read_set;

break;
case "<":
return cljs.tools.reader.impl.commons.throwing_reader.call(null,"Unreadable form");

break;
case "=":
return cljs.tools.reader.impl.commons.throwing_reader.call(null,"read-eval not supported");

break;
case "\"":
return cljs.tools.reader.read_regex;

break;
case "!":
return cljs.tools.reader.impl.commons.read_comment;

break;
case "_":
return cljs.tools.reader.read_discard;

break;
case "?":
return cljs.tools.reader.read_cond;

break;
default:
return null;

}
});
cljs.tools.reader.read_tagged = (function cljs$tools$reader$read_tagged(rdr,initch,opts,pending_forms){
var tag = cljs.tools.reader.read_STAR_.call(null,rdr,true,null,opts,pending_forms);
if(!((tag instanceof cljs.core.Symbol))){
cljs.tools.reader.reader_types.reader_error.call(null,rdr,"Reader tag must be a symbol");
} else {
}

if(cljs.core.truth_(cljs.tools.reader._STAR_suppress_read_STAR_)){
return cljs.core.tagged_literal.call(null,tag,cljs.tools.reader.read_STAR_.call(null,rdr,true,null,opts,pending_forms));
} else {
var temp__4655__auto__ = (function (){var or__6409__auto__ = cljs.tools.reader._STAR_data_readers_STAR_.call(null,tag);
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return cljs.tools.reader.default_data_readers.call(null,tag);
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var f = temp__4655__auto__;
return f.call(null,cljs.tools.reader.read_STAR_.call(null,rdr,true,null,opts,pending_forms));
} else {
var temp__4655__auto____$1 = cljs.tools.reader._STAR_default_data_reader_fn_STAR_;
if(cljs.core.truth_(temp__4655__auto____$1)){
var f = temp__4655__auto____$1;
return f.call(null,tag,cljs.tools.reader.read_STAR_.call(null,rdr,true,null,opts,pending_forms));
} else {
return cljs.tools.reader.reader_types.reader_error.call(null,rdr,"No reader function for tag ",cljs.core.name.call(null,tag));
}
}
}
});
/**
 * Map from reader tag symbols to data reader Vars.
 *   Reader tags without namespace qualifiers are reserved for Clojure.
 *   This light version of tools.reader has no implementation for default
 *   reader tags such as #inst and #uuid.
 */
cljs.tools.reader._STAR_data_readers_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
/**
 * When no data reader is found for a tag and *default-data-reader-fn*
 *   is non-nil, it will be called with two arguments, the tag and the value.
 *   If *default-data-reader-fn* is nil (the default value), an exception
 *   will be thrown for the unknown tag.
 */
cljs.tools.reader._STAR_default_data_reader_fn_STAR_ = null;
cljs.tools.reader._STAR_suppress_read_STAR_ = false;
/**
 * Default map of data reader functions provided by Clojure.
 *   May be overridden by binding *data-readers*
 */
cljs.tools.reader.default_data_readers = cljs.core.PersistentArrayMap.EMPTY;
cljs.tools.reader.read_STAR__internal = (function cljs$tools$reader$read_STAR__internal(reader,eof_error_QMARK_,sentinel,return_on,opts,pending_forms){
while(true){
if((cljs.tools.reader.reader_types.source_logging_reader_QMARK_.call(null,reader)) && (!(cljs.tools.reader.impl.utils.whitespace_QMARK_.call(null,cljs.tools.reader.reader_types.peek_char.call(null,reader))))){
return cljs.tools.reader.reader_types.log_source_STAR_.call(null,reader,(function (){
while(true){
if(!(goog.array.isEmpty(pending_forms))){
var form = (pending_forms[(0)]);
goog.array.removeAt(pending_forms,(0));

return form;
} else {
var ch = cljs.tools.reader.reader_types.read_char.call(null,reader);
if(cljs.tools.reader.impl.utils.whitespace_QMARK_.call(null,ch)){
continue;
} else {
if((ch == null)){
if(eof_error_QMARK_){
return cljs.tools.reader.reader_types.reader_error.call(null,reader,"EOF");
} else {
return sentinel;
}
} else {
if((ch === return_on)){
return cljs.tools.reader.READ_FINISHED;
} else {
if(cljs.tools.reader.impl.commons.number_literal_QMARK_.call(null,reader,ch)){
return cljs.tools.reader.read_number.call(null,reader,ch);
} else {
var f = cljs.tools.reader.macros.call(null,ch);
if(!((f == null))){
var res = f.call(null,reader,ch,opts,pending_forms);
if((res === reader)){
continue;
} else {
return res;
}
} else {
return cljs.tools.reader.read_symbol.call(null,reader,ch);
}

}
}
}
}
}
break;
}
}));
} else {
if(!(goog.array.isEmpty(pending_forms))){
var form = (pending_forms[(0)]);
goog.array.removeAt(pending_forms,(0));

return form;
} else {
var ch = cljs.tools.reader.reader_types.read_char.call(null,reader);
if(cljs.tools.reader.impl.utils.whitespace_QMARK_.call(null,ch)){
continue;
} else {
if((ch == null)){
if(eof_error_QMARK_){
return cljs.tools.reader.reader_types.reader_error.call(null,reader,"EOF");
} else {
return sentinel;
}
} else {
if((ch === return_on)){
return cljs.tools.reader.READ_FINISHED;
} else {
if(cljs.tools.reader.impl.commons.number_literal_QMARK_.call(null,reader,ch)){
return cljs.tools.reader.read_number.call(null,reader,ch);
} else {
var f = cljs.tools.reader.macros.call(null,ch);
if(!((f == null))){
var res = f.call(null,reader,ch,opts,pending_forms);
if((res === reader)){
continue;
} else {
return res;
}
} else {
return cljs.tools.reader.read_symbol.call(null,reader,ch);
}

}
}
}
}
}
}
break;
}
});
cljs.tools.reader.read_STAR_ = (function cljs$tools$reader$read_STAR_(var_args){
var args7834 = [];
var len__7484__auto___7838 = arguments.length;
var i__7485__auto___7839 = (0);
while(true){
if((i__7485__auto___7839 < len__7484__auto___7838)){
args7834.push((arguments[i__7485__auto___7839]));

var G__7840 = (i__7485__auto___7839 + (1));
i__7485__auto___7839 = G__7840;
continue;
} else {
}
break;
}

var G__7836 = args7834.length;
switch (G__7836) {
case 5:
return cljs.tools.reader.read_STAR_.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.tools.reader.read_STAR_.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7834.length)].join('')));

}
});

cljs.tools.reader.read_STAR_.cljs$core$IFn$_invoke$arity$5 = (function (reader,eof_error_QMARK_,sentinel,opts,pending_forms){
return cljs.tools.reader.read_STAR_.call(null,reader,eof_error_QMARK_,sentinel,null,opts,pending_forms);
});

cljs.tools.reader.read_STAR_.cljs$core$IFn$_invoke$arity$6 = (function (reader,eof_error_QMARK_,sentinel,return_on,opts,pending_forms){
try{return cljs.tools.reader.read_STAR__internal.call(null,reader,eof_error_QMARK_,sentinel,return_on,opts,pending_forms);
}catch (e7837){if((e7837 instanceof Error)){
var e = e7837;
if(cljs.tools.reader.impl.utils.ex_info_QMARK_.call(null,e)){
var d = cljs.core.ex_data.call(null,e);
if(cljs.core._EQ_.call(null,cljs.core.cst$kw$reader_DASH_exception,cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(d))){
throw e;
} else {
throw cljs.core.ex_info.call(null,e.message,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$reader_DASH_exception], null),d,(cljs.core.truth_(cljs.tools.reader.reader_types.indexing_reader_QMARK_.call(null,reader))?new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,cljs.tools.reader.reader_types.get_line_number.call(null,reader),cljs.core.cst$kw$column,cljs.tools.reader.reader_types.get_column_number.call(null,reader),cljs.core.cst$kw$file,cljs.tools.reader.reader_types.get_file_name.call(null,reader)], null):null)),e);
}
} else {
throw cljs.core.ex_info.call(null,e.message,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$reader_DASH_exception], null),(cljs.core.truth_(cljs.tools.reader.reader_types.indexing_reader_QMARK_.call(null,reader))?new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,cljs.tools.reader.reader_types.get_line_number.call(null,reader),cljs.core.cst$kw$column,cljs.tools.reader.reader_types.get_column_number.call(null,reader),cljs.core.cst$kw$file,cljs.tools.reader.reader_types.get_file_name.call(null,reader)], null):null)),e);
}
} else {
throw e7837;

}
}});

cljs.tools.reader.read_STAR_.cljs$lang$maxFixedArity = 6;

/**
 * Reads the first object from an IPushbackReader or a java.io.PushbackReader.
 * Returns the object read. If EOF, throws if eof-error? is true.
 * Otherwise returns sentinel. If no stream is providen, *in* will be used.
 * 
 * Opts is a persistent map with valid keys:
 *  :read-cond - :allow to process reader conditionals, or
 *               :preserve to keep all branches
 *  :features - persistent set of feature keywords for reader conditionals
 *  :eof - on eof, return value unless :eofthrow, then throw.
 *         if not specified, will throw
 * 
 * To read data structures only, use clojure.tools.reader.edn/read
 * 
 * Note that the function signature of clojure.tools.reader/read and
 * clojure.tools.reader.edn/read is not the same for eof-handling
 */
cljs.tools.reader.read = (function cljs$tools$reader$read(var_args){
var args7842 = [];
var len__7484__auto___7848 = arguments.length;
var i__7485__auto___7849 = (0);
while(true){
if((i__7485__auto___7849 < len__7484__auto___7848)){
args7842.push((arguments[i__7485__auto___7849]));

var G__7850 = (i__7485__auto___7849 + (1));
i__7485__auto___7849 = G__7850;
continue;
} else {
}
break;
}

var G__7844 = args7842.length;
switch (G__7844) {
case 1:
return cljs.tools.reader.read.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.tools.reader.read.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.tools.reader.read.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7842.length)].join('')));

}
});

cljs.tools.reader.read.cljs$core$IFn$_invoke$arity$1 = (function (reader){
return cljs.tools.reader.read.call(null,reader,true,null);
});

cljs.tools.reader.read.cljs$core$IFn$_invoke$arity$2 = (function (p__7845,reader){
var map__7846 = p__7845;
var map__7846__$1 = ((((!((map__7846 == null)))?((((map__7846.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7846.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7846):map__7846);
var opts = map__7846__$1;
var eof = cljs.core.get.call(null,map__7846__$1,cljs.core.cst$kw$eof,cljs.core.cst$kw$eofthrow);
return cljs.tools.reader.read_STAR_.call(null,reader,cljs.core._EQ_.call(null,eof,cljs.core.cst$kw$eofthrow),eof,null,opts,cljs.core.to_array.call(null,cljs.core.PersistentVector.EMPTY));
});

cljs.tools.reader.read.cljs$core$IFn$_invoke$arity$3 = (function (reader,eof_error_QMARK_,sentinel){
return cljs.tools.reader.read_STAR_.call(null,reader,eof_error_QMARK_,sentinel,null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.to_array.call(null,cljs.core.PersistentVector.EMPTY));
});

cljs.tools.reader.read.cljs$lang$maxFixedArity = 3;

/**
 * Reads one object from the string s.
 * Returns nil when s is nil or empty.
 * 
 * To read data structures only, use clojure.tools.reader.edn/read-string
 * 
 * Note that the function signature of clojure.tools.reader/read-string and
 * clojure.tools.reader.edn/read-string is not the same for eof-handling
 */
cljs.tools.reader.read_string = (function cljs$tools$reader$read_string(var_args){
var args7852 = [];
var len__7484__auto___7855 = arguments.length;
var i__7485__auto___7856 = (0);
while(true){
if((i__7485__auto___7856 < len__7484__auto___7855)){
args7852.push((arguments[i__7485__auto___7856]));

var G__7857 = (i__7485__auto___7856 + (1));
i__7485__auto___7856 = G__7857;
continue;
} else {
}
break;
}

var G__7854 = args7852.length;
switch (G__7854) {
case 1:
return cljs.tools.reader.read_string.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.tools.reader.read_string.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7852.length)].join('')));

}
});

cljs.tools.reader.read_string.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs.tools.reader.read_string.call(null,cljs.core.PersistentArrayMap.EMPTY,s);
});

cljs.tools.reader.read_string.cljs$core$IFn$_invoke$arity$2 = (function (opts,s){
if(cljs.core.truth_((function (){var and__6397__auto__ = s;
if(cljs.core.truth_(and__6397__auto__)){
return !((s === ""));
} else {
return and__6397__auto__;
}
})())){
return cljs.tools.reader.read.call(null,opts,cljs.tools.reader.reader_types.string_push_back_reader.call(null,s));
} else {
return null;
}
});

cljs.tools.reader.read_string.cljs$lang$maxFixedArity = 2;


//# sourceMappingURL=reader.js.map