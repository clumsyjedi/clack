// Compiled by ClojureScript 1.8.41 {:target :nodejs}
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
return cljs.core.map.call(null,get_first_ns_segment,cljs.core.keys.call(null,new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_))));
});
cljs.compiler.shadow_depth = (function cljs$compiler$shadow_depth(s){
var map__1851 = s;
var map__1851__$1 = ((((!((map__1851 == null)))?((((map__1851.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1851.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1851):map__1851);
var name = cljs.core.get.call(null,map__1851__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__1851__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__1854 = info;
var map__1855 = G__1854;
var map__1855__$1 = ((((!((map__1855 == null)))?((((map__1855.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1855.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1855):map__1855);
var shadow = cljs.core.get.call(null,map__1855__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__1854__$1 = G__1854;
while(true){
var d__$2 = d__$1;
var map__1857 = G__1854__$1;
var map__1857__$1 = ((((!((map__1857 == null)))?((((map__1857.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1857.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1857):map__1857);
var shadow__$1 = cljs.core.get.call(null,map__1857__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__1859 = (d__$2 + (1));
var G__1860 = shadow__$1;
d__$1 = G__1859;
G__1854__$1 = G__1860;
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
return cljs.core.hash_combine.call(null,cljs.core._hash.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(s)),cljs.compiler.shadow_depth.call(null,s));
});
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__1861){
var map__1866 = p__1861;
var map__1866__$1 = ((((!((map__1866 == null)))?((((map__1866.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1866.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1866):map__1866);
var name_var = map__1866__$1;
var name = cljs.core.get.call(null,map__1866__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__1866__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace.call(null,[cljs.core.str(name)].join(''),"..","_DOT__DOT_");
var map__1868 = info;
var map__1868__$1 = ((((!((map__1868 == null)))?((((map__1868.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1868.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1868):map__1868);
var ns = cljs.core.get.call(null,map__1868__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.call(null,map__1868__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
var scoped_name = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,"_$_",cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.str,new cljs.core.Keyword(null,"name","name",1843675177)),fn_scope),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name__$1], null))));
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
var args1870 = [];
var len__3480__auto___1873 = arguments.length;
var i__3481__auto___1874 = (0);
while(true){
if((i__3481__auto___1874 < len__3480__auto___1873)){
args1870.push((arguments[i__3481__auto___1874]));

var G__1875 = (i__3481__auto___1874 + (1));
i__3481__auto___1874 = G__1875;
continue;
} else {
}
break;
}

var G__1872 = args1870.length;
switch (G__1872) {
case 1:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args1870.length)].join('')));

}
});

cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs.compiler.munge.call(null,s,cljs.compiler.js_reserved);
});

cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2 = (function (s,reserved){
if(cljs.analyzer.cljs_map_QMARK_.call(null,s)){
var name_var = s;
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(name_var);
var field = new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(name_var);
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(name_var);
if(!((new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531).cljs$core$IFn$_invoke$arity$1(info) == null))){
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
var G__1878 = cp;
switch (G__1878) {
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
var seq__1884_1888 = cljs.core.seq.call(null,s);
var chunk__1885_1889 = null;
var count__1886_1890 = (0);
var i__1887_1891 = (0);
while(true){
if((i__1887_1891 < count__1886_1890)){
var c_1892 = cljs.core._nth.call(null,chunk__1885_1889,i__1887_1891);
sb.append(cljs.compiler.escape_char.call(null,c_1892));

var G__1893 = seq__1884_1888;
var G__1894 = chunk__1885_1889;
var G__1895 = count__1886_1890;
var G__1896 = (i__1887_1891 + (1));
seq__1884_1888 = G__1893;
chunk__1885_1889 = G__1894;
count__1886_1890 = G__1895;
i__1887_1891 = G__1896;
continue;
} else {
var temp__4657__auto___1897 = cljs.core.seq.call(null,seq__1884_1888);
if(temp__4657__auto___1897){
var seq__1884_1898__$1 = temp__4657__auto___1897;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1884_1898__$1)){
var c__3334__auto___1899 = cljs.core.chunk_first.call(null,seq__1884_1898__$1);
var G__1900 = cljs.core.chunk_rest.call(null,seq__1884_1898__$1);
var G__1901 = c__3334__auto___1899;
var G__1902 = cljs.core.count.call(null,c__3334__auto___1899);
var G__1903 = (0);
seq__1884_1888 = G__1900;
chunk__1885_1889 = G__1901;
count__1886_1890 = G__1902;
i__1887_1891 = G__1903;
continue;
} else {
var c_1904 = cljs.core.first.call(null,seq__1884_1898__$1);
sb.append(cljs.compiler.escape_char.call(null,c_1904));

var G__1905 = cljs.core.next.call(null,seq__1884_1898__$1);
var G__1906 = null;
var G__1907 = (0);
var G__1908 = (0);
seq__1884_1888 = G__1905;
chunk__1885_1889 = G__1906;
count__1886_1890 = G__1907;
i__1887_1891 = G__1908;
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
cljs.compiler.emit_STAR_ = (function (){var method_table__3395__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__3396__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__3397__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__3398__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__3399__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.compiler","emit*"),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__3399__auto__,method_table__3395__auto__,prefer_table__3396__auto__,method_cache__3397__auto__,cached_hierarchy__3398__auto__));
})();
}
cljs.compiler.emit = (function cljs$compiler$emit(ast){
var val__5049__auto__ = cljs.env._STAR_compiler_STAR_;
if((val__5049__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = cljs.env.default_compiler_env.call(null);
} else {
}

try{if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__1914_1919 = ast;
var map__1914_1920__$1 = ((((!((map__1914_1919 == null)))?((((map__1914_1919.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1914_1919.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1914_1919):map__1914_1919);
var env_1921 = cljs.core.get.call(null,map__1914_1920__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_1921))){
var map__1916_1922 = env_1921;
var map__1916_1923__$1 = ((((!((map__1916_1922 == null)))?((((map__1916_1922.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1916_1922.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1916_1922):map__1916_1922);
var line_1924 = cljs.core.get.call(null,map__1916_1923__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_1925 = cljs.core.get.call(null,map__1916_1923__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,((function (map__1916_1922,map__1916_1923__$1,line_1924,column_1925,map__1914_1919,map__1914_1920__$1,env_1921,val__5049__auto__){
return (function (m){
var minfo = (function (){var G__1918 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast),new cljs.core.Keyword(null,"var","var",-769682797))){
return cljs.core.assoc.call(null,G__1918,new cljs.core.Keyword(null,"name","name",1843675177),[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast)))].join(''));
} else {
return G__1918;
}
})();
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_1924 - (1))], null),cljs.core.fnil.call(null,((function (minfo,map__1916_1922,map__1916_1923__$1,line_1924,column_1925,map__1914_1919,map__1914_1920__$1,env_1921,val__5049__auto__){
return (function (line__$1){
return cljs.core.update_in.call(null,line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_1925)?(column_1925 - (1)):(0))], null),cljs.core.fnil.call(null,((function (minfo,map__1916_1922,map__1916_1923__$1,line_1924,column_1925,map__1914_1919,map__1914_1920__$1,env_1921,val__5049__auto__){
return (function (column__$1){
return cljs.core.conj.call(null,column__$1,minfo);
});})(minfo,map__1916_1922,map__1916_1923__$1,line_1924,column_1925,map__1914_1919,map__1914_1920__$1,env_1921,val__5049__auto__))
,cljs.core.PersistentVector.EMPTY));
});})(minfo,map__1916_1922,map__1916_1923__$1,line_1924,column_1925,map__1914_1919,map__1914_1920__$1,env_1921,val__5049__auto__))
,cljs.core.sorted_map.call(null)));
});})(map__1916_1922,map__1916_1923__$1,line_1924,column_1925,map__1914_1919,map__1914_1920__$1,env_1921,val__5049__auto__))
);
} else {
}
} else {
}

return cljs.compiler.emit_STAR_.call(null,ast);
}finally {if((val__5049__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = null;
} else {
}
}});
cljs.compiler.emits = (function cljs$compiler$emits(var_args){
var args__3483__auto__ = [];
var len__3480__auto___1932 = arguments.length;
var i__3481__auto___1933 = (0);
while(true){
if((i__3481__auto___1933 < len__3480__auto___1932)){
args__3483__auto__.push((arguments[i__3481__auto___1933]));

var G__1934 = (i__3481__auto___1933 + (1));
i__3481__auto___1933 = G__1934;
continue;
} else {
}
break;
}

var argseq__3484__auto__ = ((((0) < args__3483__auto__.length))?(new cljs.core.IndexedSeq(args__3483__auto__.slice((0)),(0),null)):null);
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(argseq__3484__auto__);
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
var seq__1928_1935 = cljs.core.seq.call(null,xs);
var chunk__1929_1936 = null;
var count__1930_1937 = (0);
var i__1931_1938 = (0);
while(true){
if((i__1931_1938 < count__1930_1937)){
var x_1939 = cljs.core._nth.call(null,chunk__1929_1936,i__1931_1938);
if((x_1939 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_1939)){
cljs.compiler.emit.call(null,x_1939);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_1939)){
cljs.core.apply.call(null,cljs.compiler.emits,x_1939);
} else {
if(goog.isFunction(x_1939)){
x_1939.call(null);
} else {
var s_1940 = cljs.core.print_str.call(null,x_1939);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__1928_1935,chunk__1929_1936,count__1930_1937,i__1931_1938,s_1940,x_1939){
return (function (p1__1926_SHARP_){
return (p1__1926_SHARP_ + cljs.core.count.call(null,s_1940));
});})(seq__1928_1935,chunk__1929_1936,count__1930_1937,i__1931_1938,s_1940,x_1939))
);
}

cljs.core.print.call(null,s_1940);

}
}
}
}

var G__1941 = seq__1928_1935;
var G__1942 = chunk__1929_1936;
var G__1943 = count__1930_1937;
var G__1944 = (i__1931_1938 + (1));
seq__1928_1935 = G__1941;
chunk__1929_1936 = G__1942;
count__1930_1937 = G__1943;
i__1931_1938 = G__1944;
continue;
} else {
var temp__4657__auto___1945 = cljs.core.seq.call(null,seq__1928_1935);
if(temp__4657__auto___1945){
var seq__1928_1946__$1 = temp__4657__auto___1945;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1928_1946__$1)){
var c__3334__auto___1947 = cljs.core.chunk_first.call(null,seq__1928_1946__$1);
var G__1948 = cljs.core.chunk_rest.call(null,seq__1928_1946__$1);
var G__1949 = c__3334__auto___1947;
var G__1950 = cljs.core.count.call(null,c__3334__auto___1947);
var G__1951 = (0);
seq__1928_1935 = G__1948;
chunk__1929_1936 = G__1949;
count__1930_1937 = G__1950;
i__1931_1938 = G__1951;
continue;
} else {
var x_1952 = cljs.core.first.call(null,seq__1928_1946__$1);
if((x_1952 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_1952)){
cljs.compiler.emit.call(null,x_1952);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_1952)){
cljs.core.apply.call(null,cljs.compiler.emits,x_1952);
} else {
if(goog.isFunction(x_1952)){
x_1952.call(null);
} else {
var s_1953 = cljs.core.print_str.call(null,x_1952);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__1928_1935,chunk__1929_1936,count__1930_1937,i__1931_1938,s_1953,x_1952,seq__1928_1946__$1,temp__4657__auto___1945){
return (function (p1__1926_SHARP_){
return (p1__1926_SHARP_ + cljs.core.count.call(null,s_1953));
});})(seq__1928_1935,chunk__1929_1936,count__1930_1937,i__1931_1938,s_1953,x_1952,seq__1928_1946__$1,temp__4657__auto___1945))
);
}

cljs.core.print.call(null,s_1953);

}
}
}
}

var G__1954 = cljs.core.next.call(null,seq__1928_1946__$1);
var G__1955 = null;
var G__1956 = (0);
var G__1957 = (0);
seq__1928_1935 = G__1954;
chunk__1929_1936 = G__1955;
count__1930_1937 = G__1956;
i__1931_1938 = G__1957;
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

cljs.compiler.emits.cljs$lang$applyTo = (function (seq1927){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq1927));
});
cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var args__3483__auto__ = [];
var len__3480__auto___1962 = arguments.length;
var i__3481__auto___1963 = (0);
while(true){
if((i__3481__auto___1963 < len__3480__auto___1962)){
args__3483__auto__.push((arguments[i__3481__auto___1963]));

var G__1964 = (i__3481__auto___1963 + (1));
i__3481__auto___1963 = G__1964;
continue;
} else {
}
break;
}

var argseq__3484__auto__ = ((((0) < args__3483__auto__.length))?(new cljs.core.IndexedSeq(args__3483__auto__.slice((0)),(0),null)):null);
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(argseq__3484__auto__);
});

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
cljs.core.apply.call(null,cljs.compiler.emits,xs);

cljs.core.println.call(null);

if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,(function (p__1959){
var map__1960 = p__1959;
var map__1960__$1 = ((((!((map__1960 == null)))?((((map__1960.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1960.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1960):map__1960);
var m = map__1960__$1;
var gen_line = cljs.core.get.call(null,map__1960__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0));
}));
} else {
}

return null;
});

cljs.compiler.emitln.cljs$lang$maxFixedArity = (0);

cljs.compiler.emitln.cljs$lang$applyTo = (function (seq1958){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq1958));
});
cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__3436__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_1967_1969 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_1968_1970 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_1967_1969,_STAR_print_fn_STAR_1968_1970,sb__3436__auto__){
return (function (x__3437__auto__){
return sb__3436__auto__.append(x__3437__auto__);
});})(_STAR_print_newline_STAR_1967_1969,_STAR_print_fn_STAR_1968_1970,sb__3436__auto__))
;

try{cljs.compiler.emit.call(null,expr);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_1968_1970;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_1967_1969;
}
return [cljs.core.str(sb__3436__auto__)].join('');
});
if(typeof cljs.compiler.emit_constant !== 'undefined'){
} else {
cljs.compiler.emit_constant = (function (){var method_table__3395__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__3396__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__3397__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__3398__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__3399__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.compiler","emit-constant"),cljs.core.type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__3399__auto__,method_table__3395__auto__,prefer_table__3396__auto__,method_cache__3397__auto__,cached_hierarchy__3398__auto__));
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
var vec__1971 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,[cljs.core.str(x)].join(''));
var _ = cljs.core.nth.call(null,vec__1971,(0),null);
var flags = cljs.core.nth.call(null,vec__1971,(1),null);
var pattern = cljs.core.nth.call(null,vec__1971,(2),null);
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
if(cljs.core.truth_(new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_))))){
var value = x.call(null,new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
return cljs.compiler.emits.call(null,"cljs.core.",value);
} else {
return cljs.compiler.emits_keyword.call(null,x);
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,cljs.core.Symbol,(function (x){
if(cljs.core.truth_(new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_))))){
var value = x.call(null,new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"no-op","no-op",-93046065),(function (m){
return null;
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"var","var",-769682797),(function (p__1973){
var map__1974 = p__1973;
var map__1974__$1 = ((((!((map__1974 == null)))?((((map__1974.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1974.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1974):map__1974);
var arg = map__1974__$1;
var info = cljs.core.get.call(null,map__1974__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.call(null,map__1974__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.call(null,map__1974__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var var_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
var info__$1 = ((cljs.core._EQ_.call(null,cljs.core.namespace.call(null,var_name),"js"))?(function (){var js_module_name = cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-module-index","js-module-index",2072061931),cljs.core.name.call(null,var_name)], null));
var or__2951__auto__ = js_module_name;
if(cljs.core.truth_(or__2951__auto__)){
return or__2951__auto__;
} else {
return cljs.core.name.call(null,var_name);
}
})():info);
if(cljs.core.truth_(new cljs.core.Keyword(null,"binding-form?","binding-form?",1728940169).cljs$core$IFn$_invoke$arity$1(arg))){
return cljs.compiler.emits.call(null,cljs.compiler.munge.call(null,arg));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__4485__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__4485__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,(function (){var G__1976 = info__$1;
if(cljs.core.not_EQ_.call(null,form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null))){
return cljs.compiler.munge.call(null,G__1976);
} else {
return G__1976;
}
})());

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__4485__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"var-special","var-special",1131576802),(function (p__1977){
var map__1978 = p__1977;
var map__1978__$1 = ((((!((map__1978 == null)))?((((map__1978.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1978.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1978):map__1978);
var arg = map__1978__$1;
var env = cljs.core.get.call(null,map__1978__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.call(null,map__1978__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.call(null,map__1978__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.call(null,map__1978__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_.call(null,sym)){
} else {
throw (new Error("Assert failed: (ana/ast? sym)"));
}

if(cljs.analyzer.ast_QMARK_.call(null,meta)){
} else {
throw (new Error("Assert failed: (ana/ast? meta)"));
}

var map__1980 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__1980__$1 = ((((!((map__1980 == null)))?((((map__1980.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1980.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1980):map__1980);
var name = cljs.core.get.call(null,map__1980__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__4485__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__4485__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"new cljs.core.Var(function(){return ",cljs.compiler.munge.call(null,name),";},",sym,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__4485__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"meta","meta",1499536964),(function (p__1982){
var map__1983 = p__1982;
var map__1983__$1 = ((((!((map__1983 == null)))?((((map__1983.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1983.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1983):map__1983);
var expr = cljs.core.get.call(null,map__1983__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.call(null,map__1983__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.call(null,map__1983__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__4485__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__4485__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"cljs.core.with_meta(",expr,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__4485__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.array_map_threshold = (8);
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
return (cljs.core.every_QMARK_.call(null,(function (p1__1985_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__1985_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),keys)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,keys)),cljs.core.count.call(null,keys)));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__1986){
var map__1987 = p__1986;
var map__1987__$1 = ((((!((map__1987 == null)))?((((map__1987.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1987.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1987):map__1987);
var env = cljs.core.get.call(null,map__1987__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.call(null,map__1987__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__1987__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__4485__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__4485__auto__))){
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__4485__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"list","list",765357683),(function (p__1989){
var map__1990 = p__1989;
var map__1990__$1 = ((((!((map__1990 == null)))?((((map__1990.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1990.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1990):map__1990);
var items = cljs.core.get.call(null,map__1990__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__1990__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__4485__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__4485__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.List.EMPTY");
} else {
cljs.compiler.emits.call(null,"cljs.core.list(",cljs.compiler.comma_sep.call(null,items),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__4485__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__1992){
var map__1993 = p__1992;
var map__1993__$1 = ((((!((map__1993 == null)))?((((map__1993.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1993.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1993):map__1993);
var items = cljs.core.get.call(null,map__1993__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__1993__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__4485__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__4485__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.PersistentVector.EMPTY");
} else {
var cnt_1995 = cljs.core.count.call(null,items);
if((cnt_1995 < (32))){
cljs.compiler.emits.call(null,"new cljs.core.PersistentVector(null, ",cnt_1995,", 5, cljs.core.PersistentVector.EMPTY_NODE, [",cljs.compiler.comma_sep.call(null,items),"], null)");
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentVector.fromArray([",cljs.compiler.comma_sep.call(null,items),"], true)");
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__4485__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
return (cljs.core.every_QMARK_.call(null,(function (p1__1996_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__1996_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),items)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,items)),cljs.core.count.call(null,items)));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set","set",304602554),(function (p__1997){
var map__1998 = p__1997;
var map__1998__$1 = ((((!((map__1998 == null)))?((((map__1998.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1998.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1998):map__1998);
var items = cljs.core.get.call(null,map__1998__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__1998__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__4485__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__4485__auto__))){
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__4485__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-value","js-value",-758336661),(function (p__2000){
var map__2001 = p__2000;
var map__2001__$1 = ((((!((map__2001 == null)))?((((map__2001.cljs$lang$protocol_mask$partition0$ & (64))) || (map__2001.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2001):map__2001);
var items = cljs.core.get.call(null,map__2001__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var js_type = cljs.core.get.call(null,map__2001__$1,new cljs.core.Keyword(null,"js-type","js-type",539386702));
var env = cljs.core.get.call(null,map__2001__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__4485__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__4485__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core._EQ_.call(null,js_type,new cljs.core.Keyword(null,"object","object",1474613949))){
cljs.compiler.emits.call(null,"{");

var temp__4657__auto___2011 = cljs.core.seq.call(null,items);
if(temp__4657__auto___2011){
var items_2012__$1 = temp__4657__auto___2011;
var vec__2003_2013 = items_2012__$1;
var vec__2004_2014 = cljs.core.nth.call(null,vec__2003_2013,(0),null);
var k_2015 = cljs.core.nth.call(null,vec__2004_2014,(0),null);
var v_2016 = cljs.core.nth.call(null,vec__2004_2014,(1),null);
var r_2017 = cljs.core.nthnext.call(null,vec__2003_2013,(1));
cljs.compiler.emits.call(null,"\"",cljs.core.name.call(null,k_2015),"\": ",v_2016);

var seq__2005_2018 = cljs.core.seq.call(null,r_2017);
var chunk__2006_2019 = null;
var count__2007_2020 = (0);
var i__2008_2021 = (0);
while(true){
if((i__2008_2021 < count__2007_2020)){
var vec__2009_2022 = cljs.core._nth.call(null,chunk__2006_2019,i__2008_2021);
var k_2023__$1 = cljs.core.nth.call(null,vec__2009_2022,(0),null);
var v_2024__$1 = cljs.core.nth.call(null,vec__2009_2022,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_2023__$1),"\": ",v_2024__$1);

var G__2025 = seq__2005_2018;
var G__2026 = chunk__2006_2019;
var G__2027 = count__2007_2020;
var G__2028 = (i__2008_2021 + (1));
seq__2005_2018 = G__2025;
chunk__2006_2019 = G__2026;
count__2007_2020 = G__2027;
i__2008_2021 = G__2028;
continue;
} else {
var temp__4657__auto___2029__$1 = cljs.core.seq.call(null,seq__2005_2018);
if(temp__4657__auto___2029__$1){
var seq__2005_2030__$1 = temp__4657__auto___2029__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2005_2030__$1)){
var c__3334__auto___2031 = cljs.core.chunk_first.call(null,seq__2005_2030__$1);
var G__2032 = cljs.core.chunk_rest.call(null,seq__2005_2030__$1);
var G__2033 = c__3334__auto___2031;
var G__2034 = cljs.core.count.call(null,c__3334__auto___2031);
var G__2035 = (0);
seq__2005_2018 = G__2032;
chunk__2006_2019 = G__2033;
count__2007_2020 = G__2034;
i__2008_2021 = G__2035;
continue;
} else {
var vec__2010_2036 = cljs.core.first.call(null,seq__2005_2030__$1);
var k_2037__$1 = cljs.core.nth.call(null,vec__2010_2036,(0),null);
var v_2038__$1 = cljs.core.nth.call(null,vec__2010_2036,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_2037__$1),"\": ",v_2038__$1);

var G__2039 = cljs.core.next.call(null,seq__2005_2030__$1);
var G__2040 = null;
var G__2041 = (0);
var G__2042 = (0);
seq__2005_2018 = G__2039;
chunk__2006_2019 = G__2040;
count__2007_2020 = G__2041;
i__2008_2021 = G__2042;
continue;
}
} else {
}
}
break;
}
} else {
}

cljs.compiler.emits.call(null,"}");
} else {
cljs.compiler.emits.call(null,"[",cljs.compiler.comma_sep.call(null,items),"]");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__4485__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"constant","constant",-379609303),(function (p__2043){
var map__2044 = p__2043;
var map__2044__$1 = ((((!((map__2044 == null)))?((((map__2044.cljs$lang$protocol_mask$partition0$ & (64))) || (map__2044.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2044):map__2044);
var form = cljs.core.get.call(null,map__2044__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.call(null,map__2044__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__4485__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__4485__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_constant.call(null,form);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__4485__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(p__2046){
var map__2049 = p__2046;
var map__2049__$1 = ((((!((map__2049 == null)))?((((map__2049.cljs$lang$protocol_mask$partition0$ & (64))) || (map__2049.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2049):map__2049);
var op = cljs.core.get.call(null,map__2049__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__2049__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var and__2943__auto__ = cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"constant","constant",-379609303));
if(and__2943__auto__){
var and__2943__auto____$1 = form;
if(cljs.core.truth_(and__2943__auto____$1)){
return !(((typeof form === 'string') && (cljs.core._EQ_.call(null,form,""))) || ((typeof form === 'number') && ((form === (0)))));
} else {
return and__2943__auto____$1;
}
} else {
return and__2943__auto__;
}
});
cljs.compiler.falsey_constant_QMARK_ = (function cljs$compiler$falsey_constant_QMARK_(p__2051){
var map__2054 = p__2051;
var map__2054__$1 = ((((!((map__2054 == null)))?((((map__2054.cljs$lang$protocol_mask$partition0$ & (64))) || (map__2054.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2054):map__2054);
var op = cljs.core.get.call(null,map__2054__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__2054__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
return (cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"constant","constant",-379609303))) && ((form === false) || ((form == null)));
});
cljs.compiler.safe_test_QMARK_ = (function cljs$compiler$safe_test_QMARK_(env,e){
var tag = cljs.analyzer.infer_tag.call(null,env,e);
var or__2951__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null).call(null,tag);
if(cljs.core.truth_(or__2951__auto__)){
return or__2951__auto__;
} else {
return cljs.compiler.truthy_constant_QMARK_.call(null,e);
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__2056){
var map__2057 = p__2056;
var map__2057__$1 = ((((!((map__2057 == null)))?((((map__2057.cljs$lang$protocol_mask$partition0$ & (64))) || (map__2057.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2057):map__2057);
var test = cljs.core.get.call(null,map__2057__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.call(null,map__2057__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.call(null,map__2057__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.call(null,map__2057__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.call(null,map__2057__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
var checked = cljs.core.not.call(null,(function (){var or__2951__auto__ = unchecked;
if(cljs.core.truth_(or__2951__auto__)){
return or__2951__auto__;
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
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"case*","case*",716180697),(function (p__2059){
var map__2060 = p__2059;
var map__2060__$1 = ((((!((map__2060 == null)))?((((map__2060.cljs$lang$protocol_mask$partition0$ & (64))) || (map__2060.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2060):map__2060);
var v = cljs.core.get.call(null,map__2060__$1,new cljs.core.Keyword(null,"v","v",21465059));
var tests = cljs.core.get.call(null,map__2060__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var thens = cljs.core.get.call(null,map__2060__$1,new cljs.core.Keyword(null,"thens","thens",226631442));
var default$ = cljs.core.get.call(null,map__2060__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.call(null,map__2060__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"expr","expr",745722291))){
cljs.compiler.emitln.call(null,"(function(){");
} else {
}

var gs = cljs.core.gensym.call(null,"caseval__");
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"var ",gs,";");
} else {
}

cljs.compiler.emitln.call(null,"switch (",v,") {");

var seq__2062_2076 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),cljs.core.interleave.call(null,tests,thens)));
var chunk__2063_2077 = null;
var count__2064_2078 = (0);
var i__2065_2079 = (0);
while(true){
if((i__2065_2079 < count__2064_2078)){
var vec__2066_2080 = cljs.core._nth.call(null,chunk__2063_2077,i__2065_2079);
var ts_2081 = cljs.core.nth.call(null,vec__2066_2080,(0),null);
var then_2082 = cljs.core.nth.call(null,vec__2066_2080,(1),null);
var seq__2067_2083 = cljs.core.seq.call(null,ts_2081);
var chunk__2068_2084 = null;
var count__2069_2085 = (0);
var i__2070_2086 = (0);
while(true){
if((i__2070_2086 < count__2069_2085)){
var test_2087 = cljs.core._nth.call(null,chunk__2068_2084,i__2070_2086);
cljs.compiler.emitln.call(null,"case ",test_2087,":");

var G__2088 = seq__2067_2083;
var G__2089 = chunk__2068_2084;
var G__2090 = count__2069_2085;
var G__2091 = (i__2070_2086 + (1));
seq__2067_2083 = G__2088;
chunk__2068_2084 = G__2089;
count__2069_2085 = G__2090;
i__2070_2086 = G__2091;
continue;
} else {
var temp__4657__auto___2092 = cljs.core.seq.call(null,seq__2067_2083);
if(temp__4657__auto___2092){
var seq__2067_2093__$1 = temp__4657__auto___2092;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2067_2093__$1)){
var c__3334__auto___2094 = cljs.core.chunk_first.call(null,seq__2067_2093__$1);
var G__2095 = cljs.core.chunk_rest.call(null,seq__2067_2093__$1);
var G__2096 = c__3334__auto___2094;
var G__2097 = cljs.core.count.call(null,c__3334__auto___2094);
var G__2098 = (0);
seq__2067_2083 = G__2095;
chunk__2068_2084 = G__2096;
count__2069_2085 = G__2097;
i__2070_2086 = G__2098;
continue;
} else {
var test_2099 = cljs.core.first.call(null,seq__2067_2093__$1);
cljs.compiler.emitln.call(null,"case ",test_2099,":");

var G__2100 = cljs.core.next.call(null,seq__2067_2093__$1);
var G__2101 = null;
var G__2102 = (0);
var G__2103 = (0);
seq__2067_2083 = G__2100;
chunk__2068_2084 = G__2101;
count__2069_2085 = G__2102;
i__2070_2086 = G__2103;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_2082);
} else {
cljs.compiler.emitln.call(null,then_2082);
}

cljs.compiler.emitln.call(null,"break;");

var G__2104 = seq__2062_2076;
var G__2105 = chunk__2063_2077;
var G__2106 = count__2064_2078;
var G__2107 = (i__2065_2079 + (1));
seq__2062_2076 = G__2104;
chunk__2063_2077 = G__2105;
count__2064_2078 = G__2106;
i__2065_2079 = G__2107;
continue;
} else {
var temp__4657__auto___2108 = cljs.core.seq.call(null,seq__2062_2076);
if(temp__4657__auto___2108){
var seq__2062_2109__$1 = temp__4657__auto___2108;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2062_2109__$1)){
var c__3334__auto___2110 = cljs.core.chunk_first.call(null,seq__2062_2109__$1);
var G__2111 = cljs.core.chunk_rest.call(null,seq__2062_2109__$1);
var G__2112 = c__3334__auto___2110;
var G__2113 = cljs.core.count.call(null,c__3334__auto___2110);
var G__2114 = (0);
seq__2062_2076 = G__2111;
chunk__2063_2077 = G__2112;
count__2064_2078 = G__2113;
i__2065_2079 = G__2114;
continue;
} else {
var vec__2071_2115 = cljs.core.first.call(null,seq__2062_2109__$1);
var ts_2116 = cljs.core.nth.call(null,vec__2071_2115,(0),null);
var then_2117 = cljs.core.nth.call(null,vec__2071_2115,(1),null);
var seq__2072_2118 = cljs.core.seq.call(null,ts_2116);
var chunk__2073_2119 = null;
var count__2074_2120 = (0);
var i__2075_2121 = (0);
while(true){
if((i__2075_2121 < count__2074_2120)){
var test_2122 = cljs.core._nth.call(null,chunk__2073_2119,i__2075_2121);
cljs.compiler.emitln.call(null,"case ",test_2122,":");

var G__2123 = seq__2072_2118;
var G__2124 = chunk__2073_2119;
var G__2125 = count__2074_2120;
var G__2126 = (i__2075_2121 + (1));
seq__2072_2118 = G__2123;
chunk__2073_2119 = G__2124;
count__2074_2120 = G__2125;
i__2075_2121 = G__2126;
continue;
} else {
var temp__4657__auto___2127__$1 = cljs.core.seq.call(null,seq__2072_2118);
if(temp__4657__auto___2127__$1){
var seq__2072_2128__$1 = temp__4657__auto___2127__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2072_2128__$1)){
var c__3334__auto___2129 = cljs.core.chunk_first.call(null,seq__2072_2128__$1);
var G__2130 = cljs.core.chunk_rest.call(null,seq__2072_2128__$1);
var G__2131 = c__3334__auto___2129;
var G__2132 = cljs.core.count.call(null,c__3334__auto___2129);
var G__2133 = (0);
seq__2072_2118 = G__2130;
chunk__2073_2119 = G__2131;
count__2074_2120 = G__2132;
i__2075_2121 = G__2133;
continue;
} else {
var test_2134 = cljs.core.first.call(null,seq__2072_2128__$1);
cljs.compiler.emitln.call(null,"case ",test_2134,":");

var G__2135 = cljs.core.next.call(null,seq__2072_2128__$1);
var G__2136 = null;
var G__2137 = (0);
var G__2138 = (0);
seq__2072_2118 = G__2135;
chunk__2073_2119 = G__2136;
count__2074_2120 = G__2137;
i__2075_2121 = G__2138;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_2117);
} else {
cljs.compiler.emitln.call(null,then_2117);
}

cljs.compiler.emitln.call(null,"break;");

var G__2139 = cljs.core.next.call(null,seq__2062_2109__$1);
var G__2140 = null;
var G__2141 = (0);
var G__2142 = (0);
seq__2062_2076 = G__2139;
chunk__2063_2077 = G__2140;
count__2064_2078 = G__2141;
i__2065_2079 = G__2142;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(default$)){
cljs.compiler.emitln.call(null,"default:");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",default$);
} else {
cljs.compiler.emitln.call(null,default$);
}
} else {
}

cljs.compiler.emitln.call(null,"}");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.call(null,"return ",gs,";})()");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__2143){
var map__2144 = p__2143;
var map__2144__$1 = ((((!((map__2144 == null)))?((((map__2144.cljs$lang$protocol_mask$partition0$ & (64))) || (map__2144.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2144):map__2144);
var throw$ = cljs.core.get.call(null,map__2144__$1,new cljs.core.Keyword(null,"throw","throw",-1044625833));
var env = cljs.core.get.call(null,map__2144__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
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
var vec__2149 = ((!(((-1) === idx)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,t,(0),idx),cljs.core.subs.call(null,t,(idx + (1)),cljs.core.count.call(null,t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.call(null,vec__2149,(0),null);
var rstr = cljs.core.nth.call(null,vec__2149,(1),null);
var ret_t = (cljs.core.truth_(rstr)?cljs$compiler$resolve_type.call(null,env,rstr):null);
var axstr = cljs.core.subs.call(null,fstr,(9),(cljs.core.count.call(null,fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_.call(null,axstr))?null:cljs.core.map.call(null,cljs.core.comp.call(null,((function (idx,vec__2149,fstr,rstr,ret_t,axstr){
return (function (p1__2146_SHARP_){
return cljs$compiler$resolve_type.call(null,env,p1__2146_SHARP_);
});})(idx,vec__2149,fstr,rstr,ret_t,axstr))
,clojure.string.trim),clojure.string.split.call(null,axstr,/,/)));
var G__2150 = [cljs.core.str("function("),cljs.core.str(clojure.string.join.call(null,",",args_ts)),cljs.core.str(")")].join('');
if(cljs.core.truth_(ret_t)){
return [cljs.core.str(G__2150),cljs.core.str(":"),cljs.core.str(ret_t)].join('');
} else {
return G__2150;
}
} else {
if(cljs.core.truth_(goog.string.endsWith(t,"="))){
return [cljs.core.str(cljs$compiler$resolve_type.call(null,env,cljs.core.subs.call(null,t,(0),(cljs.core.count.call(null,t) - (1))))),cljs.core.str("=")].join('');
} else {
return cljs.compiler.munge.call(null,[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,env,cljs.core.symbol.call(null,t))))].join(''));

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
return (function (p1__2151_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__2151_SHARP_);
});})(ts__$1,xs))
,xs))),cljs.core.str("}")].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find.call(null,/@param/,line))){
var vec__2154 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var p = cljs.core.nth.call(null,vec__2154,(0),null);
var ts = cljs.core.nth.call(null,vec__2154,(1),null);
var n = cljs.core.nth.call(null,vec__2154,(2),null);
var xs = cljs.core.nthnext.call(null,vec__2154,(3));
if(cljs.core.truth_((function (){var and__2943__auto__ = cljs.core._EQ_.call(null,"@param",p);
if(and__2943__auto__){
var and__2943__auto____$1 = ts;
if(cljs.core.truth_(and__2943__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__2943__auto____$1;
}
} else {
return and__2943__auto__;
}
})())){
return clojure.string.join.call(null," ",cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types.call(null,env,ts),cljs.compiler.munge.call(null,n)], null),xs));
} else {
return line;
}
} else {
if(cljs.core.truth_(cljs.core.re_find.call(null,/@return/,line))){
var vec__2155 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var p = cljs.core.nth.call(null,vec__2155,(0),null);
var ts = cljs.core.nth.call(null,vec__2155,(1),null);
var xs = cljs.core.nthnext.call(null,vec__2155,(2));
if(cljs.core.truth_((function (){var and__2943__auto__ = cljs.core._EQ_.call(null,"@return",p);
if(and__2943__auto__){
var and__2943__auto____$1 = ts;
if(cljs.core.truth_(and__2943__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__2943__auto____$1;
}
} else {
return and__2943__auto__;
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
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"warn","warn",-436710552),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null), null).call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"closure-warnings","closure-warnings",1362834211),new cljs.core.Keyword(null,"check-types","check-types",-833794607)], null)));
});
/**
 * Emit a nicely formatted comment string.
 */
cljs.compiler.emit_comment = (function cljs$compiler$emit_comment(var_args){
var args2157 = [];
var len__3480__auto___2184 = arguments.length;
var i__3481__auto___2185 = (0);
while(true){
if((i__3481__auto___2185 < len__3480__auto___2184)){
args2157.push((arguments[i__3481__auto___2185]));

var G__2186 = (i__3481__auto___2185 + (1));
i__3481__auto___2185 = G__2186;
continue;
} else {
}
break;
}

var G__2159 = args2157.length;
switch (G__2159) {
case 2:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args2157.length)].join('')));

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
var vec__2175 = cljs.core.map.call(null,((function (docs,docs__$1,docs__$2){
return (function (p1__2156_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))){
return cljs.compiler.munge_param_return.call(null,env,p1__2156_SHARP_);
} else {
return p1__2156_SHARP_;
}
});})(docs,docs__$1,docs__$2))
,clojure.string.split_lines.call(null,e));
var x = cljs.core.nth.call(null,vec__2175,(0),null);
var ys = cljs.core.nthnext.call(null,vec__2175,(1));
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,x,"*/","* /"));

var seq__2176 = cljs.core.seq.call(null,ys);
var chunk__2177 = null;
var count__2178 = (0);
var i__2179 = (0);
while(true){
if((i__2179 < count__2178)){
var next_line = cljs.core._nth.call(null,chunk__2177,i__2179);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));

var G__2188 = seq__2176;
var G__2189 = chunk__2177;
var G__2190 = count__2178;
var G__2191 = (i__2179 + (1));
seq__2176 = G__2188;
chunk__2177 = G__2189;
count__2178 = G__2190;
i__2179 = G__2191;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__2176);
if(temp__4657__auto__){
var seq__2176__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2176__$1)){
var c__3334__auto__ = cljs.core.chunk_first.call(null,seq__2176__$1);
var G__2192 = cljs.core.chunk_rest.call(null,seq__2176__$1);
var G__2193 = c__3334__auto__;
var G__2194 = cljs.core.count.call(null,c__3334__auto__);
var G__2195 = (0);
seq__2176 = G__2192;
chunk__2177 = G__2193;
count__2178 = G__2194;
i__2179 = G__2195;
continue;
} else {
var next_line = cljs.core.first.call(null,seq__2176__$1);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));

var G__2196 = cljs.core.next.call(null,seq__2176__$1);
var G__2197 = null;
var G__2198 = (0);
var G__2199 = (0);
seq__2176 = G__2196;
chunk__2177 = G__2197;
count__2178 = G__2198;
i__2179 = G__2199;
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

var seq__2180_2200 = cljs.core.seq.call(null,docs__$2);
var chunk__2181_2201 = null;
var count__2182_2202 = (0);
var i__2183_2203 = (0);
while(true){
if((i__2183_2203 < count__2182_2202)){
var e_2204 = cljs.core._nth.call(null,chunk__2181_2201,i__2183_2203);
if(cljs.core.truth_(e_2204)){
print_comment_lines.call(null,e_2204);
} else {
}

var G__2205 = seq__2180_2200;
var G__2206 = chunk__2181_2201;
var G__2207 = count__2182_2202;
var G__2208 = (i__2183_2203 + (1));
seq__2180_2200 = G__2205;
chunk__2181_2201 = G__2206;
count__2182_2202 = G__2207;
i__2183_2203 = G__2208;
continue;
} else {
var temp__4657__auto___2209 = cljs.core.seq.call(null,seq__2180_2200);
if(temp__4657__auto___2209){
var seq__2180_2210__$1 = temp__4657__auto___2209;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2180_2210__$1)){
var c__3334__auto___2211 = cljs.core.chunk_first.call(null,seq__2180_2210__$1);
var G__2212 = cljs.core.chunk_rest.call(null,seq__2180_2210__$1);
var G__2213 = c__3334__auto___2211;
var G__2214 = cljs.core.count.call(null,c__3334__auto___2211);
var G__2215 = (0);
seq__2180_2200 = G__2212;
chunk__2181_2201 = G__2213;
count__2182_2202 = G__2214;
i__2183_2203 = G__2215;
continue;
} else {
var e_2216 = cljs.core.first.call(null,seq__2180_2210__$1);
if(cljs.core.truth_(e_2216)){
print_comment_lines.call(null,e_2216);
} else {
}

var G__2217 = cljs.core.next.call(null,seq__2180_2210__$1);
var G__2218 = null;
var G__2219 = (0);
var G__2220 = (0);
seq__2180_2200 = G__2217;
chunk__2181_2201 = G__2218;
count__2182_2202 = G__2219;
i__2183_2203 = G__2220;
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
var opts = cljs.core.get.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword(null,"options","options",99638489));
var and__2943__auto__ = cljs.core.some.call(null,((function (opts){
return (function (p1__2222_SHARP_){
return goog.string.startsWith(p1__2222_SHARP_,"@define");
});})(opts))
,jsdoc);
if(cljs.core.truth_(and__2943__auto__)){
var and__2943__auto____$1 = opts;
if(cljs.core.truth_(and__2943__auto____$1)){
var and__2943__auto____$2 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"none","none",1333468478));
if(and__2943__auto____$2){
var define = cljs.core.get_in.call(null,opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"closure-defines","closure-defines",-1213856476),[cljs.core.str(mname)].join('')], null));
if(cljs.core.truth_(cljs.compiler.valid_define_value_QMARK_.call(null,define))){
return cljs.core.pr_str.call(null,define);
} else {
return null;
}
} else {
return and__2943__auto____$2;
}
} else {
return and__2943__auto____$1;
}
} else {
return and__2943__auto__;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__2223){
var map__2224 = p__2223;
var map__2224__$1 = ((((!((map__2224 == null)))?((((map__2224.cljs$lang$protocol_mask$partition0$ & (64))) || (map__2224.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2224):map__2224);
var name = cljs.core.get.call(null,map__2224__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var var$ = cljs.core.get.call(null,map__2224__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var init = cljs.core.get.call(null,map__2224__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var env = cljs.core.get.call(null,map__2224__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var doc = cljs.core.get.call(null,map__2224__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.call(null,map__2224__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var export$ = cljs.core.get.call(null,map__2224__$1,new cljs.core.Keyword(null,"export","export",214356590));
var test = cljs.core.get.call(null,map__2224__$1,new cljs.core.Keyword(null,"test","test",577538877));
var var_ast = cljs.core.get.call(null,map__2224__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
if(cljs.core.truth_((function (){var or__2951__auto__ = init;
if(cljs.core.truth_(or__2951__auto__)){
return or__2951__auto__;
} else {
return new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env);
}
})())){
var mname = cljs.compiler.munge.call(null,name);
cljs.compiler.emit_comment.call(null,env,doc,cljs.core.concat.call(null,jsdoc,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516).cljs$core$IFn$_invoke$arity$1(init)));

if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env))){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
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

if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"; return (");

cljs.compiler.emits.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"var-special","var-special",1131576802),new cljs.core.Keyword(null,"env","env",-1815813235),cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291))], null),var_ast));

cljs.compiler.emitln.call(null,");})()");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,")");
} else {
}
} else {
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emitln.call(null,";");
}

if(cljs.core.truth_(export$)){
cljs.compiler.emitln.call(null,"goog.exportSymbol('",cljs.compiler.munge.call(null,export$),"', ",mname,");");
} else {
}

if(cljs.core.truth_((function (){var and__2943__auto__ = cljs.analyzer._STAR_load_tests_STAR_;
if(cljs.core.truth_(and__2943__auto__)){
return test;
} else {
return and__2943__auto__;
}
})())){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
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
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__2226){
var map__2243 = p__2226;
var map__2243__$1 = ((((!((map__2243 == null)))?((((map__2243.cljs$lang$protocol_mask$partition0$ & (64))) || (map__2243.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2243):map__2243);
var name = cljs.core.get.call(null,map__2243__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__2243__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__2243__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.call(null,"arglist__");
var delegate_name = [cljs.core.str(cljs.compiler.munge.call(null,name)),cljs.core.str("__delegate")].join('');
cljs.compiler.emitln.call(null,"(function (",arglist,"){");

var seq__2245_2259 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.drop_last.call(null,(2),params)));
var chunk__2246_2260 = null;
var count__2247_2261 = (0);
var i__2248_2262 = (0);
while(true){
if((i__2248_2262 < count__2247_2261)){
var vec__2249_2263 = cljs.core._nth.call(null,chunk__2246_2260,i__2248_2262);
var i_2264 = cljs.core.nth.call(null,vec__2249_2263,(0),null);
var param_2265 = cljs.core.nth.call(null,vec__2249_2263,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_2265);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");

var G__2266 = seq__2245_2259;
var G__2267 = chunk__2246_2260;
var G__2268 = count__2247_2261;
var G__2269 = (i__2248_2262 + (1));
seq__2245_2259 = G__2266;
chunk__2246_2260 = G__2267;
count__2247_2261 = G__2268;
i__2248_2262 = G__2269;
continue;
} else {
var temp__4657__auto___2270 = cljs.core.seq.call(null,seq__2245_2259);
if(temp__4657__auto___2270){
var seq__2245_2271__$1 = temp__4657__auto___2270;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2245_2271__$1)){
var c__3334__auto___2272 = cljs.core.chunk_first.call(null,seq__2245_2271__$1);
var G__2273 = cljs.core.chunk_rest.call(null,seq__2245_2271__$1);
var G__2274 = c__3334__auto___2272;
var G__2275 = cljs.core.count.call(null,c__3334__auto___2272);
var G__2276 = (0);
seq__2245_2259 = G__2273;
chunk__2246_2260 = G__2274;
count__2247_2261 = G__2275;
i__2248_2262 = G__2276;
continue;
} else {
var vec__2250_2277 = cljs.core.first.call(null,seq__2245_2271__$1);
var i_2278 = cljs.core.nth.call(null,vec__2250_2277,(0),null);
var param_2279 = cljs.core.nth.call(null,vec__2250_2277,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_2279);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");

var G__2280 = cljs.core.next.call(null,seq__2245_2271__$1);
var G__2281 = null;
var G__2282 = (0);
var G__2283 = (0);
seq__2245_2259 = G__2280;
chunk__2246_2260 = G__2281;
count__2247_2261 = G__2282;
i__2248_2262 = G__2283;
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

var seq__2251_2284 = cljs.core.seq.call(null,params);
var chunk__2252_2285 = null;
var count__2253_2286 = (0);
var i__2254_2287 = (0);
while(true){
if((i__2254_2287 < count__2253_2286)){
var param_2288 = cljs.core._nth.call(null,chunk__2252_2285,i__2254_2287);
cljs.compiler.emit.call(null,param_2288);

if(cljs.core._EQ_.call(null,param_2288,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__2289 = seq__2251_2284;
var G__2290 = chunk__2252_2285;
var G__2291 = count__2253_2286;
var G__2292 = (i__2254_2287 + (1));
seq__2251_2284 = G__2289;
chunk__2252_2285 = G__2290;
count__2253_2286 = G__2291;
i__2254_2287 = G__2292;
continue;
} else {
var temp__4657__auto___2293 = cljs.core.seq.call(null,seq__2251_2284);
if(temp__4657__auto___2293){
var seq__2251_2294__$1 = temp__4657__auto___2293;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2251_2294__$1)){
var c__3334__auto___2295 = cljs.core.chunk_first.call(null,seq__2251_2294__$1);
var G__2296 = cljs.core.chunk_rest.call(null,seq__2251_2294__$1);
var G__2297 = c__3334__auto___2295;
var G__2298 = cljs.core.count.call(null,c__3334__auto___2295);
var G__2299 = (0);
seq__2251_2284 = G__2296;
chunk__2252_2285 = G__2297;
count__2253_2286 = G__2298;
i__2254_2287 = G__2299;
continue;
} else {
var param_2300 = cljs.core.first.call(null,seq__2251_2294__$1);
cljs.compiler.emit.call(null,param_2300);

if(cljs.core._EQ_.call(null,param_2300,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__2301 = cljs.core.next.call(null,seq__2251_2294__$1);
var G__2302 = null;
var G__2303 = (0);
var G__2304 = (0);
seq__2251_2284 = G__2301;
chunk__2252_2285 = G__2302;
count__2253_2286 = G__2303;
i__2254_2287 = G__2304;
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

var seq__2255_2305 = cljs.core.seq.call(null,params);
var chunk__2256_2306 = null;
var count__2257_2307 = (0);
var i__2258_2308 = (0);
while(true){
if((i__2258_2308 < count__2257_2307)){
var param_2309 = cljs.core._nth.call(null,chunk__2256_2306,i__2258_2308);
cljs.compiler.emit.call(null,param_2309);

if(cljs.core._EQ_.call(null,param_2309,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__2310 = seq__2255_2305;
var G__2311 = chunk__2256_2306;
var G__2312 = count__2257_2307;
var G__2313 = (i__2258_2308 + (1));
seq__2255_2305 = G__2310;
chunk__2256_2306 = G__2311;
count__2257_2307 = G__2312;
i__2258_2308 = G__2313;
continue;
} else {
var temp__4657__auto___2314 = cljs.core.seq.call(null,seq__2255_2305);
if(temp__4657__auto___2314){
var seq__2255_2315__$1 = temp__4657__auto___2314;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2255_2315__$1)){
var c__3334__auto___2316 = cljs.core.chunk_first.call(null,seq__2255_2315__$1);
var G__2317 = cljs.core.chunk_rest.call(null,seq__2255_2315__$1);
var G__2318 = c__3334__auto___2316;
var G__2319 = cljs.core.count.call(null,c__3334__auto___2316);
var G__2320 = (0);
seq__2255_2305 = G__2317;
chunk__2256_2306 = G__2318;
count__2257_2307 = G__2319;
i__2258_2308 = G__2320;
continue;
} else {
var param_2321 = cljs.core.first.call(null,seq__2255_2315__$1);
cljs.compiler.emit.call(null,param_2321);

if(cljs.core._EQ_.call(null,param_2321,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__2322 = cljs.core.next.call(null,seq__2255_2315__$1);
var G__2323 = null;
var G__2324 = (0);
var G__2325 = (0);
seq__2255_2305 = G__2322;
chunk__2256_2306 = G__2323;
count__2257_2307 = G__2324;
i__2258_2308 = G__2325;
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
var seq__2330 = cljs.core.seq.call(null,params);
var chunk__2331 = null;
var count__2332 = (0);
var i__2333 = (0);
while(true){
if((i__2333 < count__2332)){
var param = cljs.core._nth.call(null,chunk__2331,i__2333);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__2334 = seq__2330;
var G__2335 = chunk__2331;
var G__2336 = count__2332;
var G__2337 = (i__2333 + (1));
seq__2330 = G__2334;
chunk__2331 = G__2335;
count__2332 = G__2336;
i__2333 = G__2337;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__2330);
if(temp__4657__auto__){
var seq__2330__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2330__$1)){
var c__3334__auto__ = cljs.core.chunk_first.call(null,seq__2330__$1);
var G__2338 = cljs.core.chunk_rest.call(null,seq__2330__$1);
var G__2339 = c__3334__auto__;
var G__2340 = cljs.core.count.call(null,c__3334__auto__);
var G__2341 = (0);
seq__2330 = G__2338;
chunk__2331 = G__2339;
count__2332 = G__2340;
i__2333 = G__2341;
continue;
} else {
var param = cljs.core.first.call(null,seq__2330__$1);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__2342 = cljs.core.next.call(null,seq__2330__$1);
var G__2343 = null;
var G__2344 = (0);
var G__2345 = (0);
seq__2330 = G__2342;
chunk__2331 = G__2343;
count__2332 = G__2344;
i__2333 = G__2345;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__2346){
var map__2349 = p__2346;
var map__2349__$1 = ((((!((map__2349 == null)))?((((map__2349.cljs$lang$protocol_mask$partition0$ & (64))) || (map__2349.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2349):map__2349);
var type = cljs.core.get.call(null,map__2349__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__2349__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.call(null,map__2349__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.call(null,map__2349__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.call(null,map__2349__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__2349__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__2349__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.call(null,map__2349__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__4485__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__4485__auto__))){
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__4485__auto__))){
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
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__2351){
var map__2362 = p__2351;
var map__2362__$1 = ((((!((map__2362 == null)))?((((map__2362.cljs$lang$protocol_mask$partition0$ & (64))) || (map__2362.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2362):map__2362);
var f = map__2362__$1;
var type = cljs.core.get.call(null,map__2362__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__2362__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.call(null,map__2362__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.call(null,map__2362__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.call(null,map__2362__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__2362__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__2362__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.call(null,map__2362__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__4485__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__4485__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var name_2372__$1 = (function (){var or__2951__auto__ = name;
if(cljs.core.truth_(or__2951__auto__)){
return or__2951__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_2373 = cljs.compiler.munge.call(null,name_2372__$1);
var delegate_name_2374 = [cljs.core.str(mname_2373),cljs.core.str("__delegate")].join('');
cljs.compiler.emitln.call(null,"(function() { ");

cljs.compiler.emits.call(null,"var ",delegate_name_2374," = function (");

var seq__2364_2375 = cljs.core.seq.call(null,params);
var chunk__2365_2376 = null;
var count__2366_2377 = (0);
var i__2367_2378 = (0);
while(true){
if((i__2367_2378 < count__2366_2377)){
var param_2379 = cljs.core._nth.call(null,chunk__2365_2376,i__2367_2378);
cljs.compiler.emit.call(null,param_2379);

if(cljs.core._EQ_.call(null,param_2379,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__2380 = seq__2364_2375;
var G__2381 = chunk__2365_2376;
var G__2382 = count__2366_2377;
var G__2383 = (i__2367_2378 + (1));
seq__2364_2375 = G__2380;
chunk__2365_2376 = G__2381;
count__2366_2377 = G__2382;
i__2367_2378 = G__2383;
continue;
} else {
var temp__4657__auto___2384 = cljs.core.seq.call(null,seq__2364_2375);
if(temp__4657__auto___2384){
var seq__2364_2385__$1 = temp__4657__auto___2384;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2364_2385__$1)){
var c__3334__auto___2386 = cljs.core.chunk_first.call(null,seq__2364_2385__$1);
var G__2387 = cljs.core.chunk_rest.call(null,seq__2364_2385__$1);
var G__2388 = c__3334__auto___2386;
var G__2389 = cljs.core.count.call(null,c__3334__auto___2386);
var G__2390 = (0);
seq__2364_2375 = G__2387;
chunk__2365_2376 = G__2388;
count__2366_2377 = G__2389;
i__2367_2378 = G__2390;
continue;
} else {
var param_2391 = cljs.core.first.call(null,seq__2364_2385__$1);
cljs.compiler.emit.call(null,param_2391);

if(cljs.core._EQ_.call(null,param_2391,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__2392 = cljs.core.next.call(null,seq__2364_2385__$1);
var G__2393 = null;
var G__2394 = (0);
var G__2395 = (0);
seq__2364_2375 = G__2392;
chunk__2365_2376 = G__2393;
count__2366_2377 = G__2394;
i__2367_2378 = G__2395;
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

cljs.compiler.emitln.call(null,"var ",mname_2373," = function (",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",(cljs.core.count.call(null,params) - (1)),") {");

var a_2396 = cljs.compiler.emit_arguments_to_array.call(null,(cljs.core.count.call(null,params) - (1)));
cljs.compiler.emitln.call(null,"  ",cljs.core.last.call(null,params)," = new cljs.core.IndexedSeq(",a_2396,",0);");

cljs.compiler.emitln.call(null,"} ");
} else {
}

cljs.compiler.emits.call(null,"return ",delegate_name_2374,".call(this,");

var seq__2368_2397 = cljs.core.seq.call(null,params);
var chunk__2369_2398 = null;
var count__2370_2399 = (0);
var i__2371_2400 = (0);
while(true){
if((i__2371_2400 < count__2370_2399)){
var param_2401 = cljs.core._nth.call(null,chunk__2369_2398,i__2371_2400);
cljs.compiler.emit.call(null,param_2401);

if(cljs.core._EQ_.call(null,param_2401,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__2402 = seq__2368_2397;
var G__2403 = chunk__2369_2398;
var G__2404 = count__2370_2399;
var G__2405 = (i__2371_2400 + (1));
seq__2368_2397 = G__2402;
chunk__2369_2398 = G__2403;
count__2370_2399 = G__2404;
i__2371_2400 = G__2405;
continue;
} else {
var temp__4657__auto___2406 = cljs.core.seq.call(null,seq__2368_2397);
if(temp__4657__auto___2406){
var seq__2368_2407__$1 = temp__4657__auto___2406;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2368_2407__$1)){
var c__3334__auto___2408 = cljs.core.chunk_first.call(null,seq__2368_2407__$1);
var G__2409 = cljs.core.chunk_rest.call(null,seq__2368_2407__$1);
var G__2410 = c__3334__auto___2408;
var G__2411 = cljs.core.count.call(null,c__3334__auto___2408);
var G__2412 = (0);
seq__2368_2397 = G__2409;
chunk__2369_2398 = G__2410;
count__2370_2399 = G__2411;
i__2371_2400 = G__2412;
continue;
} else {
var param_2413 = cljs.core.first.call(null,seq__2368_2407__$1);
cljs.compiler.emit.call(null,param_2413);

if(cljs.core._EQ_.call(null,param_2413,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__2414 = cljs.core.next.call(null,seq__2368_2407__$1);
var G__2415 = null;
var G__2416 = (0);
var G__2417 = (0);
seq__2368_2397 = G__2414;
chunk__2369_2398 = G__2415;
count__2370_2399 = G__2416;
i__2371_2400 = G__2417;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,");");

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,mname_2373,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.call(null,mname_2373,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to.call(null,cljs.core.assoc.call(null,f,new cljs.core.Keyword(null,"name","name",1843675177),name_2372__$1));

cljs.compiler.emitln.call(null,";");

cljs.compiler.emitln.call(null,mname_2373,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_2374,";");

cljs.compiler.emitln.call(null,"return ",mname_2373,";");

cljs.compiler.emitln.call(null,"})()");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__4485__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__2421){
var map__2422 = p__2421;
var map__2422__$1 = ((((!((map__2422 == null)))?((((map__2422.cljs$lang$protocol_mask$partition0$ & (64))) || (map__2422.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2422):map__2422);
var name = cljs.core.get.call(null,map__2422__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__2422__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.call(null,map__2422__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.call(null,map__2422__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var variadic = cljs.core.get.call(null,map__2422__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var recur_frames = cljs.core.get.call(null,map__2422__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var loop_lets = cljs.core.get.call(null,map__2422__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var loop_locals = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.compiler.munge,cljs.core.concat.call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.filter.call(null,((function (map__2422,map__2422__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__2418_SHARP_){
var and__2943__auto__ = p1__2418_SHARP_;
if(cljs.core.truth_(and__2943__auto__)){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__2418_SHARP_));
} else {
return and__2943__auto__;
}
});})(map__2422,map__2422__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,recur_frames)),cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),loop_lets))));
if(loop_locals){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"((function (",cljs.compiler.comma_sep.call(null,cljs.core.map.call(null,cljs.compiler.munge,loop_locals)),"){");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emits.call(null,"return ");
}
} else {
}

if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,methods$))){
if(cljs.core.truth_(variadic)){
cljs.compiler.emit_variadic_fn_method.call(null,cljs.core.assoc.call(null,cljs.core.first.call(null,methods$),new cljs.core.Keyword(null,"name","name",1843675177),name));
} else {
cljs.compiler.emit_fn_method.call(null,cljs.core.assoc.call(null,cljs.core.first.call(null,methods$),new cljs.core.Keyword(null,"name","name",1843675177),name));
}
} else {
var name_2443__$1 = (function (){var or__2951__auto__ = name;
if(cljs.core.truth_(or__2951__auto__)){
return or__2951__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_2444 = cljs.compiler.munge.call(null,name_2443__$1);
var maxparams_2445 = cljs.core.apply.call(null,cljs.core.max_key,cljs.core.count,cljs.core.map.call(null,new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_2446 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (name_2443__$1,mname_2444,maxparams_2445,loop_locals,map__2422,map__2422__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.call(null,cljs.core.symbol.call(null,[cljs.core.str(mname_2444),cljs.core.str("__"),cljs.core.str(cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
});})(name_2443__$1,mname_2444,maxparams_2445,loop_locals,map__2422,map__2422__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,methods$));
var ms_2447 = cljs.core.sort_by.call(null,((function (name_2443__$1,mname_2444,maxparams_2445,mmap_2446,loop_locals,map__2422,map__2422__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__2419_SHARP_){
return cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__2419_SHARP_)));
});})(name_2443__$1,mname_2444,maxparams_2445,mmap_2446,loop_locals,map__2422,map__2422__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,cljs.core.seq.call(null,mmap_2446));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"(function() {");

cljs.compiler.emitln.call(null,"var ",mname_2444," = null;");

var seq__2424_2448 = cljs.core.seq.call(null,ms_2447);
var chunk__2425_2449 = null;
var count__2426_2450 = (0);
var i__2427_2451 = (0);
while(true){
if((i__2427_2451 < count__2426_2450)){
var vec__2428_2452 = cljs.core._nth.call(null,chunk__2425_2449,i__2427_2451);
var n_2453 = cljs.core.nth.call(null,vec__2428_2452,(0),null);
var meth_2454 = cljs.core.nth.call(null,vec__2428_2452,(1),null);
cljs.compiler.emits.call(null,"var ",n_2453," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_2454))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_2454);
} else {
cljs.compiler.emit_fn_method.call(null,meth_2454);
}

cljs.compiler.emitln.call(null,";");

var G__2455 = seq__2424_2448;
var G__2456 = chunk__2425_2449;
var G__2457 = count__2426_2450;
var G__2458 = (i__2427_2451 + (1));
seq__2424_2448 = G__2455;
chunk__2425_2449 = G__2456;
count__2426_2450 = G__2457;
i__2427_2451 = G__2458;
continue;
} else {
var temp__4657__auto___2459 = cljs.core.seq.call(null,seq__2424_2448);
if(temp__4657__auto___2459){
var seq__2424_2460__$1 = temp__4657__auto___2459;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2424_2460__$1)){
var c__3334__auto___2461 = cljs.core.chunk_first.call(null,seq__2424_2460__$1);
var G__2462 = cljs.core.chunk_rest.call(null,seq__2424_2460__$1);
var G__2463 = c__3334__auto___2461;
var G__2464 = cljs.core.count.call(null,c__3334__auto___2461);
var G__2465 = (0);
seq__2424_2448 = G__2462;
chunk__2425_2449 = G__2463;
count__2426_2450 = G__2464;
i__2427_2451 = G__2465;
continue;
} else {
var vec__2429_2466 = cljs.core.first.call(null,seq__2424_2460__$1);
var n_2467 = cljs.core.nth.call(null,vec__2429_2466,(0),null);
var meth_2468 = cljs.core.nth.call(null,vec__2429_2466,(1),null);
cljs.compiler.emits.call(null,"var ",n_2467," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_2468))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_2468);
} else {
cljs.compiler.emit_fn_method.call(null,meth_2468);
}

cljs.compiler.emitln.call(null,";");

var G__2469 = cljs.core.next.call(null,seq__2424_2460__$1);
var G__2470 = null;
var G__2471 = (0);
var G__2472 = (0);
seq__2424_2448 = G__2469;
chunk__2425_2449 = G__2470;
count__2426_2450 = G__2471;
i__2427_2451 = G__2472;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,mname_2444," = function(",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,maxparams_2445),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_2445)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,maxparams_2445));

cljs.compiler.emitln.call(null," = var_args;");
} else {
}

cljs.compiler.emitln.call(null,"switch(arguments.length){");

var seq__2430_2473 = cljs.core.seq.call(null,ms_2447);
var chunk__2431_2474 = null;
var count__2432_2475 = (0);
var i__2433_2476 = (0);
while(true){
if((i__2433_2476 < count__2432_2475)){
var vec__2434_2477 = cljs.core._nth.call(null,chunk__2431_2474,i__2433_2476);
var n_2478 = cljs.core.nth.call(null,vec__2434_2477,(0),null);
var meth_2479 = cljs.core.nth.call(null,vec__2434_2477,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_2479))){
cljs.compiler.emitln.call(null,"default:");

var restarg_2480 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_2480," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_2481 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_2480," = new cljs.core.IndexedSeq(",a_2481,",0);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_2478,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_2445)),(((cljs.core.count.call(null,maxparams_2445) > (1)))?", ":null),restarg_2480,");");
} else {
var pcnt_2482 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_2479));
cljs.compiler.emitln.call(null,"case ",pcnt_2482,":");

cljs.compiler.emitln.call(null,"return ",n_2478,".call(this",(((pcnt_2482 === (0)))?null:cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_2482,maxparams_2445))),",")),");");
}

var G__2483 = seq__2430_2473;
var G__2484 = chunk__2431_2474;
var G__2485 = count__2432_2475;
var G__2486 = (i__2433_2476 + (1));
seq__2430_2473 = G__2483;
chunk__2431_2474 = G__2484;
count__2432_2475 = G__2485;
i__2433_2476 = G__2486;
continue;
} else {
var temp__4657__auto___2487 = cljs.core.seq.call(null,seq__2430_2473);
if(temp__4657__auto___2487){
var seq__2430_2488__$1 = temp__4657__auto___2487;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2430_2488__$1)){
var c__3334__auto___2489 = cljs.core.chunk_first.call(null,seq__2430_2488__$1);
var G__2490 = cljs.core.chunk_rest.call(null,seq__2430_2488__$1);
var G__2491 = c__3334__auto___2489;
var G__2492 = cljs.core.count.call(null,c__3334__auto___2489);
var G__2493 = (0);
seq__2430_2473 = G__2490;
chunk__2431_2474 = G__2491;
count__2432_2475 = G__2492;
i__2433_2476 = G__2493;
continue;
} else {
var vec__2435_2494 = cljs.core.first.call(null,seq__2430_2488__$1);
var n_2495 = cljs.core.nth.call(null,vec__2435_2494,(0),null);
var meth_2496 = cljs.core.nth.call(null,vec__2435_2494,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_2496))){
cljs.compiler.emitln.call(null,"default:");

var restarg_2497 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_2497," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_2498 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_2497," = new cljs.core.IndexedSeq(",a_2498,",0);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_2495,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_2445)),(((cljs.core.count.call(null,maxparams_2445) > (1)))?", ":null),restarg_2497,");");
} else {
var pcnt_2499 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_2496));
cljs.compiler.emitln.call(null,"case ",pcnt_2499,":");

cljs.compiler.emitln.call(null,"return ",n_2495,".call(this",(((pcnt_2499 === (0)))?null:cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_2499,maxparams_2445))),",")),");");
}

var G__2500 = cljs.core.next.call(null,seq__2430_2488__$1);
var G__2501 = null;
var G__2502 = (0);
var G__2503 = (0);
seq__2430_2473 = G__2500;
chunk__2431_2474 = G__2501;
count__2432_2475 = G__2502;
i__2433_2476 = G__2503;
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
cljs.compiler.emitln.call(null,mname_2444,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.call(null,mname_2444,".cljs$lang$applyTo = ",cljs.core.some.call(null,((function (name_2443__$1,mname_2444,maxparams_2445,mmap_2446,ms_2447,loop_locals,map__2422,map__2422__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__2420_SHARP_){
var vec__2436 = p1__2420_SHARP_;
var n = cljs.core.nth.call(null,vec__2436,(0),null);
var m = cljs.core.nth.call(null,vec__2436,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
});})(name_2443__$1,mname_2444,maxparams_2445,mmap_2446,ms_2447,loop_locals,map__2422,map__2422__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,ms_2447),".cljs$lang$applyTo;");
} else {
}

var seq__2437_2504 = cljs.core.seq.call(null,ms_2447);
var chunk__2438_2505 = null;
var count__2439_2506 = (0);
var i__2440_2507 = (0);
while(true){
if((i__2440_2507 < count__2439_2506)){
var vec__2441_2508 = cljs.core._nth.call(null,chunk__2438_2505,i__2440_2507);
var n_2509 = cljs.core.nth.call(null,vec__2441_2508,(0),null);
var meth_2510 = cljs.core.nth.call(null,vec__2441_2508,(1),null);
var c_2511 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_2510));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_2510))){
cljs.compiler.emitln.call(null,mname_2444,".cljs$core$IFn$_invoke$arity$variadic = ",n_2509,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_2444,".cljs$core$IFn$_invoke$arity$",c_2511," = ",n_2509,";");
}

var G__2512 = seq__2437_2504;
var G__2513 = chunk__2438_2505;
var G__2514 = count__2439_2506;
var G__2515 = (i__2440_2507 + (1));
seq__2437_2504 = G__2512;
chunk__2438_2505 = G__2513;
count__2439_2506 = G__2514;
i__2440_2507 = G__2515;
continue;
} else {
var temp__4657__auto___2516 = cljs.core.seq.call(null,seq__2437_2504);
if(temp__4657__auto___2516){
var seq__2437_2517__$1 = temp__4657__auto___2516;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2437_2517__$1)){
var c__3334__auto___2518 = cljs.core.chunk_first.call(null,seq__2437_2517__$1);
var G__2519 = cljs.core.chunk_rest.call(null,seq__2437_2517__$1);
var G__2520 = c__3334__auto___2518;
var G__2521 = cljs.core.count.call(null,c__3334__auto___2518);
var G__2522 = (0);
seq__2437_2504 = G__2519;
chunk__2438_2505 = G__2520;
count__2439_2506 = G__2521;
i__2440_2507 = G__2522;
continue;
} else {
var vec__2442_2523 = cljs.core.first.call(null,seq__2437_2517__$1);
var n_2524 = cljs.core.nth.call(null,vec__2442_2523,(0),null);
var meth_2525 = cljs.core.nth.call(null,vec__2442_2523,(1),null);
var c_2526 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_2525));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_2525))){
cljs.compiler.emitln.call(null,mname_2444,".cljs$core$IFn$_invoke$arity$variadic = ",n_2524,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_2444,".cljs$core$IFn$_invoke$arity$",c_2526," = ",n_2524,";");
}

var G__2527 = cljs.core.next.call(null,seq__2437_2517__$1);
var G__2528 = null;
var G__2529 = (0);
var G__2530 = (0);
seq__2437_2504 = G__2527;
chunk__2438_2505 = G__2528;
count__2439_2506 = G__2529;
i__2440_2507 = G__2530;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"return ",mname_2444,";");

cljs.compiler.emitln.call(null,"})()");
}

if(loop_locals){
return cljs.compiler.emitln.call(null,";})(",cljs.compiler.comma_sep.call(null,loop_locals),"))");
} else {
return null;
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"do","do",46310725),(function (p__2531){
var map__2532 = p__2531;
var map__2532__$1 = ((((!((map__2532 == null)))?((((map__2532.cljs$lang$protocol_mask$partition0$ & (64))) || (map__2532.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2532):map__2532);
var statements = cljs.core.get.call(null,map__2532__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.call(null,map__2532__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.call(null,map__2532__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var and__2943__auto__ = statements;
if(cljs.core.truth_(and__2943__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context);
} else {
return and__2943__auto__;
}
})())){
cljs.compiler.emitln.call(null,"(function (){");
} else {
}

var seq__2534_2538 = cljs.core.seq.call(null,statements);
var chunk__2535_2539 = null;
var count__2536_2540 = (0);
var i__2537_2541 = (0);
while(true){
if((i__2537_2541 < count__2536_2540)){
var s_2542 = cljs.core._nth.call(null,chunk__2535_2539,i__2537_2541);
cljs.compiler.emitln.call(null,s_2542);

var G__2543 = seq__2534_2538;
var G__2544 = chunk__2535_2539;
var G__2545 = count__2536_2540;
var G__2546 = (i__2537_2541 + (1));
seq__2534_2538 = G__2543;
chunk__2535_2539 = G__2544;
count__2536_2540 = G__2545;
i__2537_2541 = G__2546;
continue;
} else {
var temp__4657__auto___2547 = cljs.core.seq.call(null,seq__2534_2538);
if(temp__4657__auto___2547){
var seq__2534_2548__$1 = temp__4657__auto___2547;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2534_2548__$1)){
var c__3334__auto___2549 = cljs.core.chunk_first.call(null,seq__2534_2548__$1);
var G__2550 = cljs.core.chunk_rest.call(null,seq__2534_2548__$1);
var G__2551 = c__3334__auto___2549;
var G__2552 = cljs.core.count.call(null,c__3334__auto___2549);
var G__2553 = (0);
seq__2534_2538 = G__2550;
chunk__2535_2539 = G__2551;
count__2536_2540 = G__2552;
i__2537_2541 = G__2553;
continue;
} else {
var s_2554 = cljs.core.first.call(null,seq__2534_2548__$1);
cljs.compiler.emitln.call(null,s_2554);

var G__2555 = cljs.core.next.call(null,seq__2534_2548__$1);
var G__2556 = null;
var G__2557 = (0);
var G__2558 = (0);
seq__2534_2538 = G__2555;
chunk__2535_2539 = G__2556;
count__2536_2540 = G__2557;
i__2537_2541 = G__2558;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emit.call(null,ret);

if(cljs.core.truth_((function (){var and__2943__auto__ = statements;
if(cljs.core.truth_(and__2943__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context);
} else {
return and__2943__auto__;
}
})())){
return cljs.compiler.emitln.call(null,"})()");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__2559){
var map__2560 = p__2559;
var map__2560__$1 = ((((!((map__2560 == null)))?((((map__2560.cljs$lang$protocol_mask$partition0$ & (64))) || (map__2560.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2560):map__2560);
var env = cljs.core.get.call(null,map__2560__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var try$ = cljs.core.get.call(null,map__2560__$1,new cljs.core.Keyword(null,"try","try",1380742522));
var catch$ = cljs.core.get.call(null,map__2560__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.call(null,map__2560__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.call(null,map__2560__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var or__2951__auto__ = name;
if(cljs.core.truth_(or__2951__auto__)){
return or__2951__auto__;
} else {
return finally$;
}
})())){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

cljs.compiler.emits.call(null,"try{",try$,"}");

if(cljs.core.truth_(name)){
cljs.compiler.emits.call(null,"catch (",cljs.compiler.munge.call(null,name),"){",catch$,"}");
} else {
}

if(cljs.core.truth_(finally$)){
if(cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"constant","constant",-379609303),new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(finally$))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("finally block cannot contain constant"),cljs.core.str("\n"),cljs.core.str("(not= :constant (:op finally))")].join('')));
}

cljs.compiler.emits.call(null,"finally {",finally$,"}");
} else {
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"})()");
} else {
return null;
}
} else {
return cljs.compiler.emits.call(null,try$);
}
}));
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__2562,is_loop){
var map__2574 = p__2562;
var map__2574__$1 = ((((!((map__2574 == null)))?((((map__2574.cljs$lang$protocol_mask$partition0$ & (64))) || (map__2574.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2574):map__2574);
var bindings = cljs.core.get.call(null,map__2574__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.call(null,map__2574__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__2574__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var _STAR_lexical_renames_STAR_2576_2585 = cljs.compiler._STAR_lexical_renames_STAR_;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.into.call(null,cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.call(null,((function (_STAR_lexical_renames_STAR_2576_2585,context,map__2574,map__2574__$1,bindings,expr,env){
return (function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope.call(null,binding),cljs.core.gensym.call(null,[cljs.core.str(name),cljs.core.str("-")].join(''))],null));
});})(_STAR_lexical_renames_STAR_2576_2585,context,map__2574,map__2574__$1,bindings,expr,env))
,bindings):null));

try{var seq__2577_2586 = cljs.core.seq.call(null,bindings);
var chunk__2578_2587 = null;
var count__2579_2588 = (0);
var i__2580_2589 = (0);
while(true){
if((i__2580_2589 < count__2579_2588)){
var map__2581_2590 = cljs.core._nth.call(null,chunk__2578_2587,i__2580_2589);
var map__2581_2591__$1 = ((((!((map__2581_2590 == null)))?((((map__2581_2590.cljs$lang$protocol_mask$partition0$ & (64))) || (map__2581_2590.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2581_2590):map__2581_2590);
var binding_2592 = map__2581_2591__$1;
var init_2593 = cljs.core.get.call(null,map__2581_2591__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_2592);

cljs.compiler.emitln.call(null," = ",init_2593,";");

var G__2594 = seq__2577_2586;
var G__2595 = chunk__2578_2587;
var G__2596 = count__2579_2588;
var G__2597 = (i__2580_2589 + (1));
seq__2577_2586 = G__2594;
chunk__2578_2587 = G__2595;
count__2579_2588 = G__2596;
i__2580_2589 = G__2597;
continue;
} else {
var temp__4657__auto___2598 = cljs.core.seq.call(null,seq__2577_2586);
if(temp__4657__auto___2598){
var seq__2577_2599__$1 = temp__4657__auto___2598;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2577_2599__$1)){
var c__3334__auto___2600 = cljs.core.chunk_first.call(null,seq__2577_2599__$1);
var G__2601 = cljs.core.chunk_rest.call(null,seq__2577_2599__$1);
var G__2602 = c__3334__auto___2600;
var G__2603 = cljs.core.count.call(null,c__3334__auto___2600);
var G__2604 = (0);
seq__2577_2586 = G__2601;
chunk__2578_2587 = G__2602;
count__2579_2588 = G__2603;
i__2580_2589 = G__2604;
continue;
} else {
var map__2583_2605 = cljs.core.first.call(null,seq__2577_2599__$1);
var map__2583_2606__$1 = ((((!((map__2583_2605 == null)))?((((map__2583_2605.cljs$lang$protocol_mask$partition0$ & (64))) || (map__2583_2605.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2583_2605):map__2583_2605);
var binding_2607 = map__2583_2606__$1;
var init_2608 = cljs.core.get.call(null,map__2583_2606__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_2607);

cljs.compiler.emitln.call(null," = ",init_2608,";");

var G__2609 = cljs.core.next.call(null,seq__2577_2599__$1);
var G__2610 = null;
var G__2611 = (0);
var G__2612 = (0);
seq__2577_2586 = G__2609;
chunk__2578_2587 = G__2610;
count__2579_2588 = G__2611;
i__2580_2589 = G__2612;
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
}finally {cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR_2576_2585;
}
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"})()");
} else {
return null;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"let","let",-1282412701),(function (ast){
return cljs.compiler.emit_let.call(null,ast,false);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"loop","loop",-395552849),(function (ast){
return cljs.compiler.emit_let.call(null,ast,true);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__2613){
var map__2614 = p__2613;
var map__2614__$1 = ((((!((map__2614 == null)))?((((map__2614.cljs$lang$protocol_mask$partition0$ & (64))) || (map__2614.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2614):map__2614);
var frame = cljs.core.get.call(null,map__2614__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.call(null,map__2614__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.call(null,map__2614__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,exprs),cljs.core.repeatedly.call(null,cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__3389__auto___2616 = cljs.core.count.call(null,exprs);
var i_2617 = (0);
while(true){
if((i_2617 < n__3389__auto___2616)){
cljs.compiler.emitln.call(null,"var ",temps.call(null,i_2617)," = ",exprs.call(null,i_2617),";");

var G__2618 = (i_2617 + (1));
i_2617 = G__2618;
continue;
} else {
}
break;
}

var n__3389__auto___2619 = cljs.core.count.call(null,exprs);
var i_2620 = (0);
while(true){
if((i_2620 < n__3389__auto___2619)){
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,params.call(null,i_2620))," = ",temps.call(null,i_2620),";");

var G__2621 = (i_2620 + (1));
i_2620 = G__2621;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.call(null,"continue;");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__2622){
var map__2623 = p__2622;
var map__2623__$1 = ((((!((map__2623 == null)))?((((map__2623.cljs$lang$protocol_mask$partition0$ & (64))) || (map__2623.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2623):map__2623);
var bindings = cljs.core.get.call(null,map__2623__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.call(null,map__2623__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__2623__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var seq__2625_2633 = cljs.core.seq.call(null,bindings);
var chunk__2626_2634 = null;
var count__2627_2635 = (0);
var i__2628_2636 = (0);
while(true){
if((i__2628_2636 < count__2627_2635)){
var map__2629_2637 = cljs.core._nth.call(null,chunk__2626_2634,i__2628_2636);
var map__2629_2638__$1 = ((((!((map__2629_2637 == null)))?((((map__2629_2637.cljs$lang$protocol_mask$partition0$ & (64))) || (map__2629_2637.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2629_2637):map__2629_2637);
var binding_2639 = map__2629_2638__$1;
var init_2640 = cljs.core.get.call(null,map__2629_2638__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_2639)," = ",init_2640,";");

var G__2641 = seq__2625_2633;
var G__2642 = chunk__2626_2634;
var G__2643 = count__2627_2635;
var G__2644 = (i__2628_2636 + (1));
seq__2625_2633 = G__2641;
chunk__2626_2634 = G__2642;
count__2627_2635 = G__2643;
i__2628_2636 = G__2644;
continue;
} else {
var temp__4657__auto___2645 = cljs.core.seq.call(null,seq__2625_2633);
if(temp__4657__auto___2645){
var seq__2625_2646__$1 = temp__4657__auto___2645;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2625_2646__$1)){
var c__3334__auto___2647 = cljs.core.chunk_first.call(null,seq__2625_2646__$1);
var G__2648 = cljs.core.chunk_rest.call(null,seq__2625_2646__$1);
var G__2649 = c__3334__auto___2647;
var G__2650 = cljs.core.count.call(null,c__3334__auto___2647);
var G__2651 = (0);
seq__2625_2633 = G__2648;
chunk__2626_2634 = G__2649;
count__2627_2635 = G__2650;
i__2628_2636 = G__2651;
continue;
} else {
var map__2631_2652 = cljs.core.first.call(null,seq__2625_2646__$1);
var map__2631_2653__$1 = ((((!((map__2631_2652 == null)))?((((map__2631_2652.cljs$lang$protocol_mask$partition0$ & (64))) || (map__2631_2652.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2631_2652):map__2631_2652);
var binding_2654 = map__2631_2653__$1;
var init_2655 = cljs.core.get.call(null,map__2631_2653__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_2654)," = ",init_2655,";");

var G__2656 = cljs.core.next.call(null,seq__2625_2646__$1);
var G__2657 = null;
var G__2658 = (0);
var G__2659 = (0);
seq__2625_2633 = G__2656;
chunk__2626_2634 = G__2657;
count__2627_2635 = G__2658;
i__2628_2636 = G__2659;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,expr);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"})()");
} else {
return null;
}
}));
cljs.compiler.protocol_prefix = (function cljs$compiler$protocol_prefix(psym){
return cljs.core.symbol.call(null,[cljs.core.str([cljs.core.str(psym)].join('').replace((new RegExp("\\.","g")),"$").replace("/","$")),cljs.core.str("$")].join(''));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__2662){
var map__2663 = p__2662;
var map__2663__$1 = ((((!((map__2663 == null)))?((((map__2663.cljs$lang$protocol_mask$partition0$ & (64))) || (map__2663.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2663):map__2663);
var expr = map__2663__$1;
var f = cljs.core.get.call(null,map__2663__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var args = cljs.core.get.call(null,map__2663__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__2663__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(f);
var fn_QMARK_ = (function (){var and__2943__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__2943__auto__)){
var and__2943__auto____$1 = cljs.core.not.call(null,new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(info));
if(and__2943__auto____$1){
return new cljs.core.Keyword(null,"fn-var","fn-var",1086204730).cljs$core$IFn$_invoke$arity$1(info);
} else {
return and__2943__auto____$1;
}
} else {
return and__2943__auto__;
}
})();
var protocol = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(info);
var tag = cljs.analyzer.infer_tag.call(null,env,cljs.core.first.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr)));
var proto_QMARK_ = (function (){var and__2943__auto__ = protocol;
if(cljs.core.truth_(and__2943__auto__)){
var and__2943__auto____$1 = tag;
if(cljs.core.truth_(and__2943__auto____$1)){
var or__2951__auto__ = (function (){var and__2943__auto____$2 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__2943__auto____$2)){
var and__2943__auto____$3 = protocol;
if(cljs.core.truth_(and__2943__auto____$3)){
return cljs.core._EQ_.call(null,tag,new cljs.core.Symbol(null,"not-native","not-native",-236392494,null));
} else {
return and__2943__auto____$3;
}
} else {
return and__2943__auto____$2;
}
})();
if(cljs.core.truth_(or__2951__auto__)){
return or__2951__auto__;
} else {
var and__2943__auto____$2 = (function (){var or__2951__auto____$1 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(or__2951__auto____$1)){
return or__2951__auto____$1;
} else {
return new cljs.core.Keyword(null,"protocol-inline","protocol-inline",1550487556).cljs$core$IFn$_invoke$arity$1(env);
}
})();
if(cljs.core.truth_(and__2943__auto____$2)){
var or__2951__auto____$1 = cljs.core._EQ_.call(null,protocol,tag);
if(or__2951__auto____$1){
return or__2951__auto____$1;
} else {
var and__2943__auto____$3 = !(cljs.core.set_QMARK_.call(null,tag));
if(and__2943__auto____$3){
var and__2943__auto____$4 = cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [new cljs.core.Symbol(null,"clj","clj",980036099,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null,new cljs.core.Symbol(null,"object","object",-1179821820,null),null,new cljs.core.Symbol(null,"any","any",-948528346,null),null,new cljs.core.Symbol(null,"number","number",-1084057331,null),null,new cljs.core.Symbol(null,"clj-or-nil","clj-or-nil",-2008798668,null),null,new cljs.core.Symbol(null,"array","array",-440182315,null),null,new cljs.core.Symbol(null,"string","string",-349010059,null),null,new cljs.core.Symbol(null,"function","function",-486723946,null),null,new cljs.core.Symbol(null,"clj-nil","clj-nil",1321798654,null),null], null), null).call(null,tag));
if(and__2943__auto____$4){
var temp__4657__auto__ = new cljs.core.Keyword(null,"protocols","protocols",-5615896).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_existing_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),tag));
if(cljs.core.truth_(temp__4657__auto__)){
var ps = temp__4657__auto__;
return ps.call(null,protocol);
} else {
return null;
}
} else {
return and__2943__auto____$4;
}
} else {
return and__2943__auto____$3;
}
}
} else {
return and__2943__auto____$2;
}
}
} else {
return and__2943__auto____$1;
}
} else {
return and__2943__auto__;
}
})();
var opt_not_QMARK_ = (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null))) && (cljs.core._EQ_.call(null,cljs.analyzer.infer_tag.call(null,env,cljs.core.first.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr))),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)));
var ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(info);
var js_QMARK_ = (cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"js","js",-886355190,null))) || (cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"Math","Math",2033287572,null)));
var goog_QMARK_ = (cljs.core.truth_(ns)?(function (){var or__2951__auto__ = cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"goog","goog",-70603925,null));
if(or__2951__auto__){
return or__2951__auto__;
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
var keyword_QMARK_ = (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f),new cljs.core.Keyword(null,"constant","constant",-379609303))) && ((new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(f) instanceof cljs.core.Keyword));
var vec__2665 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count.call(null,args);
var variadic_QMARK_ = new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(info);
var mps = new cljs.core.Keyword(null,"method-params","method-params",-980792179).cljs$core$IFn$_invoke$arity$1(info);
var mfa = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(info);
if((cljs.core.not.call(null,variadic_QMARK_)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,mps),(1)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
} else {
if(cljs.core.truth_((function (){var and__2943__auto__ = variadic_QMARK_;
if(cljs.core.truth_(and__2943__auto__)){
return (arity > mfa);
} else {
return and__2943__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__2663,map__2663__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str(cljs.compiler.munge.call(null,info__$1)),cljs.core.str(".cljs$core$IFn$_invoke$arity$variadic")].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__2663,map__2663__$1,expr,f,args,env){
return (function (p1__2660_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__2660_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__2663,map__2663__$1,expr,f,args,env))
);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__2663,map__2663__$1,expr,f,args,env))
),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.call(null,cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([arity], true),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__2663,map__2663__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str(cljs.compiler.munge.call(null,info__$1)),cljs.core.str(".cljs$core$IFn$_invoke$arity$"),cljs.core.str(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__2663,map__2663__$1,expr,f,args,env){
return (function (p1__2661_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__2661_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__2663,map__2663__$1,expr,f,args,env))
);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__2663,map__2663__$1,expr,f,args,env))
),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.call(null,vec__2665,(0),null);
var variadic_invoke = cljs.core.nth.call(null,vec__2665,(1),null);
var env__4485__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__4485__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.call(null,"!(",cljs.core.first.call(null,args),")");
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_2666 = [cljs.core.str(cljs.compiler.munge.call(null,cljs.compiler.protocol_prefix.call(null,protocol))),cljs.core.str(cljs.compiler.munge.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),cljs.core.str("$arity$"),cljs.core.str(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,cljs.core.first.call(null,args),".",pimpl_2666,"(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",cljs.core.rest.call(null,args))),")");
} else {
if(keyword_QMARK_){
cljs.compiler.emits.call(null,f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count.call(null,args),"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_2667 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,mfa_2667,args)),(((mfa_2667 === (0)))?null:","),"cljs.core.array_seq([",cljs.compiler.comma_sep.call(null,cljs.core.drop.call(null,mfa_2667,args)),"], 0))");
} else {
if(cljs.core.truth_((function (){var or__2951__auto__ = fn_QMARK_;
if(cljs.core.truth_(or__2951__auto__)){
return or__2951__auto__;
} else {
var or__2951__auto____$1 = js_QMARK_;
if(or__2951__auto____$1){
return or__2951__auto____$1;
} else {
return goog_QMARK_;
}
}
})())){
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_((function (){var and__2943__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__2943__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1),new cljs.core.Keyword(null,"var","var",-769682797));
} else {
return and__2943__auto__;
}
})())){
var fprop_2668 = [cljs.core.str(".cljs$core$IFn$_invoke$arity$"),cljs.core.str(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,"(",f__$1,fprop_2668," ? ",f__$1,fprop_2668,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),"))");
} else {
cljs.compiler.emits.call(null,f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),")");
}

}
}
}
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__4485__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__2669){
var map__2670 = p__2669;
var map__2670__$1 = ((((!((map__2670 == null)))?((((map__2670.cljs$lang$protocol_mask$partition0$ & (64))) || (map__2670.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2670):map__2670);
var ctor = cljs.core.get.call(null,map__2670__$1,new cljs.core.Keyword(null,"ctor","ctor",1750864802));
var args = cljs.core.get.call(null,map__2670__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__2670__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__4485__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__4485__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(new ",ctor,"(",cljs.compiler.comma_sep.call(null,args),"))");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__4485__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__2672){
var map__2673 = p__2672;
var map__2673__$1 = ((((!((map__2673 == null)))?((((map__2673.cljs$lang$protocol_mask$partition0$ & (64))) || (map__2673.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2673):map__2673);
var target = cljs.core.get.call(null,map__2673__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.call(null,map__2673__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.call(null,map__2673__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__4485__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__4485__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,target," = ",val);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__4485__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.load_libs = (function cljs$compiler$load_libs(libs,seen,reloads){
var loaded_libs = cljs.compiler.munge.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null));
var loaded_libs_temp = cljs.compiler.munge.call(null,cljs.core.gensym.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null)));
if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs)))){
cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set();");

cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs," = cljs.core.set();");
} else {
}

var seq__2679_2683 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,seen)),cljs.core.distinct.call(null,cljs.core.vals.call(null,libs))));
var chunk__2680_2684 = null;
var count__2681_2685 = (0);
var i__2682_2686 = (0);
while(true){
if((i__2682_2686 < count__2681_2685)){
var lib_2687 = cljs.core._nth.call(null,chunk__2680_2684,i__2682_2686);
if(cljs.core.truth_((function (){var or__2951__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__2951__auto__)){
return or__2951__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_2687),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_2687),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__2951__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__2951__auto__)){
return or__2951__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_2687),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_2687),"', 'reload-all');");
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_2687),"');");

}
}

var G__2688 = seq__2679_2683;
var G__2689 = chunk__2680_2684;
var G__2690 = count__2681_2685;
var G__2691 = (i__2682_2686 + (1));
seq__2679_2683 = G__2688;
chunk__2680_2684 = G__2689;
count__2681_2685 = G__2690;
i__2682_2686 = G__2691;
continue;
} else {
var temp__4657__auto___2692 = cljs.core.seq.call(null,seq__2679_2683);
if(temp__4657__auto___2692){
var seq__2679_2693__$1 = temp__4657__auto___2692;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2679_2693__$1)){
var c__3334__auto___2694 = cljs.core.chunk_first.call(null,seq__2679_2693__$1);
var G__2695 = cljs.core.chunk_rest.call(null,seq__2679_2693__$1);
var G__2696 = c__3334__auto___2694;
var G__2697 = cljs.core.count.call(null,c__3334__auto___2694);
var G__2698 = (0);
seq__2679_2683 = G__2695;
chunk__2680_2684 = G__2696;
count__2681_2685 = G__2697;
i__2682_2686 = G__2698;
continue;
} else {
var lib_2699 = cljs.core.first.call(null,seq__2679_2693__$1);
if(cljs.core.truth_((function (){var or__2951__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__2951__auto__)){
return or__2951__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_2699),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_2699),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__2951__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__2951__auto__)){
return or__2951__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_2699),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_2699),"', 'reload-all');");
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_2699),"');");

}
}

var G__2700 = cljs.core.next.call(null,seq__2679_2693__$1);
var G__2701 = null;
var G__2702 = (0);
var G__2703 = (0);
seq__2679_2683 = G__2700;
chunk__2680_2684 = G__2701;
count__2681_2685 = G__2702;
i__2682_2686 = G__2703;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs)))){
return cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs," = cljs.core.into(",loaded_libs_temp,", ",loaded_libs,");");
} else {
return null;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__2704){
var map__2705 = p__2704;
var map__2705__$1 = ((((!((map__2705 == null)))?((((map__2705.cljs$lang$protocol_mask$partition0$ & (64))) || (map__2705.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2705):map__2705);
var name = cljs.core.get.call(null,map__2705__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__2705__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__2705__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__2705__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__2705__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__2705__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
cljs.compiler.emitln.call(null,"goog.provide('",cljs.compiler.munge.call(null,name),"');");

if(cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('cljs.core');");
}

cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads));

return cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"deftype*","deftype*",-677871637),(function (p__2707){
var map__2708 = p__2707;
var map__2708__$1 = ((((!((map__2708 == null)))?((((map__2708.cljs$lang$protocol_mask$partition0$ & (64))) || (map__2708.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2708):map__2708);
var t = cljs.core.get.call(null,map__2708__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__2708__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__2708__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__2708__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__2708__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.call(null,cljs.compiler.munge,fields);
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__2710_2724 = cljs.core.seq.call(null,protocols);
var chunk__2711_2725 = null;
var count__2712_2726 = (0);
var i__2713_2727 = (0);
while(true){
if((i__2713_2727 < count__2712_2726)){
var protocol_2728 = cljs.core._nth.call(null,chunk__2711_2725,i__2713_2727);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_2728)].join('')),"}");

var G__2729 = seq__2710_2724;
var G__2730 = chunk__2711_2725;
var G__2731 = count__2712_2726;
var G__2732 = (i__2713_2727 + (1));
seq__2710_2724 = G__2729;
chunk__2711_2725 = G__2730;
count__2712_2726 = G__2731;
i__2713_2727 = G__2732;
continue;
} else {
var temp__4657__auto___2733 = cljs.core.seq.call(null,seq__2710_2724);
if(temp__4657__auto___2733){
var seq__2710_2734__$1 = temp__4657__auto___2733;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2710_2734__$1)){
var c__3334__auto___2735 = cljs.core.chunk_first.call(null,seq__2710_2734__$1);
var G__2736 = cljs.core.chunk_rest.call(null,seq__2710_2734__$1);
var G__2737 = c__3334__auto___2735;
var G__2738 = cljs.core.count.call(null,c__3334__auto___2735);
var G__2739 = (0);
seq__2710_2724 = G__2736;
chunk__2711_2725 = G__2737;
count__2712_2726 = G__2738;
i__2713_2727 = G__2739;
continue;
} else {
var protocol_2740 = cljs.core.first.call(null,seq__2710_2734__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_2740)].join('')),"}");

var G__2741 = cljs.core.next.call(null,seq__2710_2734__$1);
var G__2742 = null;
var G__2743 = (0);
var G__2744 = (0);
seq__2710_2724 = G__2741;
chunk__2711_2725 = G__2742;
count__2712_2726 = G__2743;
i__2713_2727 = G__2744;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__2714_2745 = cljs.core.seq.call(null,fields__$1);
var chunk__2715_2746 = null;
var count__2716_2747 = (0);
var i__2717_2748 = (0);
while(true){
if((i__2717_2748 < count__2716_2747)){
var fld_2749 = cljs.core._nth.call(null,chunk__2715_2746,i__2717_2748);
cljs.compiler.emitln.call(null,"this.",fld_2749," = ",fld_2749,";");

var G__2750 = seq__2714_2745;
var G__2751 = chunk__2715_2746;
var G__2752 = count__2716_2747;
var G__2753 = (i__2717_2748 + (1));
seq__2714_2745 = G__2750;
chunk__2715_2746 = G__2751;
count__2716_2747 = G__2752;
i__2717_2748 = G__2753;
continue;
} else {
var temp__4657__auto___2754 = cljs.core.seq.call(null,seq__2714_2745);
if(temp__4657__auto___2754){
var seq__2714_2755__$1 = temp__4657__auto___2754;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2714_2755__$1)){
var c__3334__auto___2756 = cljs.core.chunk_first.call(null,seq__2714_2755__$1);
var G__2757 = cljs.core.chunk_rest.call(null,seq__2714_2755__$1);
var G__2758 = c__3334__auto___2756;
var G__2759 = cljs.core.count.call(null,c__3334__auto___2756);
var G__2760 = (0);
seq__2714_2745 = G__2757;
chunk__2715_2746 = G__2758;
count__2716_2747 = G__2759;
i__2717_2748 = G__2760;
continue;
} else {
var fld_2761 = cljs.core.first.call(null,seq__2714_2755__$1);
cljs.compiler.emitln.call(null,"this.",fld_2761," = ",fld_2761,";");

var G__2762 = cljs.core.next.call(null,seq__2714_2755__$1);
var G__2763 = null;
var G__2764 = (0);
var G__2765 = (0);
seq__2714_2745 = G__2762;
chunk__2715_2746 = G__2763;
count__2716_2747 = G__2764;
i__2717_2748 = G__2765;
continue;
}
} else {
}
}
break;
}

var seq__2718_2766 = cljs.core.seq.call(null,pmasks);
var chunk__2719_2767 = null;
var count__2720_2768 = (0);
var i__2721_2769 = (0);
while(true){
if((i__2721_2769 < count__2720_2768)){
var vec__2722_2770 = cljs.core._nth.call(null,chunk__2719_2767,i__2721_2769);
var pno_2771 = cljs.core.nth.call(null,vec__2722_2770,(0),null);
var pmask_2772 = cljs.core.nth.call(null,vec__2722_2770,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_2771,"$ = ",pmask_2772,";");

var G__2773 = seq__2718_2766;
var G__2774 = chunk__2719_2767;
var G__2775 = count__2720_2768;
var G__2776 = (i__2721_2769 + (1));
seq__2718_2766 = G__2773;
chunk__2719_2767 = G__2774;
count__2720_2768 = G__2775;
i__2721_2769 = G__2776;
continue;
} else {
var temp__4657__auto___2777 = cljs.core.seq.call(null,seq__2718_2766);
if(temp__4657__auto___2777){
var seq__2718_2778__$1 = temp__4657__auto___2777;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2718_2778__$1)){
var c__3334__auto___2779 = cljs.core.chunk_first.call(null,seq__2718_2778__$1);
var G__2780 = cljs.core.chunk_rest.call(null,seq__2718_2778__$1);
var G__2781 = c__3334__auto___2779;
var G__2782 = cljs.core.count.call(null,c__3334__auto___2779);
var G__2783 = (0);
seq__2718_2766 = G__2780;
chunk__2719_2767 = G__2781;
count__2720_2768 = G__2782;
i__2721_2769 = G__2783;
continue;
} else {
var vec__2723_2784 = cljs.core.first.call(null,seq__2718_2778__$1);
var pno_2785 = cljs.core.nth.call(null,vec__2723_2784,(0),null);
var pmask_2786 = cljs.core.nth.call(null,vec__2723_2784,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_2785,"$ = ",pmask_2786,";");

var G__2787 = cljs.core.next.call(null,seq__2718_2778__$1);
var G__2788 = null;
var G__2789 = (0);
var G__2790 = (0);
seq__2718_2766 = G__2787;
chunk__2719_2767 = G__2788;
count__2720_2768 = G__2789;
i__2721_2769 = G__2790;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"defrecord*","defrecord*",718069562),(function (p__2791){
var map__2792 = p__2791;
var map__2792__$1 = ((((!((map__2792 == null)))?((((map__2792.cljs$lang$protocol_mask$partition0$ & (64))) || (map__2792.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2792):map__2792);
var t = cljs.core.get.call(null,map__2792__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__2792__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__2792__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__2792__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__2792__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.call(null,cljs.core.map.call(null,cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__2794_2808 = cljs.core.seq.call(null,protocols);
var chunk__2795_2809 = null;
var count__2796_2810 = (0);
var i__2797_2811 = (0);
while(true){
if((i__2797_2811 < count__2796_2810)){
var protocol_2812 = cljs.core._nth.call(null,chunk__2795_2809,i__2797_2811);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_2812)].join('')),"}");

var G__2813 = seq__2794_2808;
var G__2814 = chunk__2795_2809;
var G__2815 = count__2796_2810;
var G__2816 = (i__2797_2811 + (1));
seq__2794_2808 = G__2813;
chunk__2795_2809 = G__2814;
count__2796_2810 = G__2815;
i__2797_2811 = G__2816;
continue;
} else {
var temp__4657__auto___2817 = cljs.core.seq.call(null,seq__2794_2808);
if(temp__4657__auto___2817){
var seq__2794_2818__$1 = temp__4657__auto___2817;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2794_2818__$1)){
var c__3334__auto___2819 = cljs.core.chunk_first.call(null,seq__2794_2818__$1);
var G__2820 = cljs.core.chunk_rest.call(null,seq__2794_2818__$1);
var G__2821 = c__3334__auto___2819;
var G__2822 = cljs.core.count.call(null,c__3334__auto___2819);
var G__2823 = (0);
seq__2794_2808 = G__2820;
chunk__2795_2809 = G__2821;
count__2796_2810 = G__2822;
i__2797_2811 = G__2823;
continue;
} else {
var protocol_2824 = cljs.core.first.call(null,seq__2794_2818__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_2824)].join('')),"}");

var G__2825 = cljs.core.next.call(null,seq__2794_2818__$1);
var G__2826 = null;
var G__2827 = (0);
var G__2828 = (0);
seq__2794_2808 = G__2825;
chunk__2795_2809 = G__2826;
count__2796_2810 = G__2827;
i__2797_2811 = G__2828;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__2798_2829 = cljs.core.seq.call(null,fields__$1);
var chunk__2799_2830 = null;
var count__2800_2831 = (0);
var i__2801_2832 = (0);
while(true){
if((i__2801_2832 < count__2800_2831)){
var fld_2833 = cljs.core._nth.call(null,chunk__2799_2830,i__2801_2832);
cljs.compiler.emitln.call(null,"this.",fld_2833," = ",fld_2833,";");

var G__2834 = seq__2798_2829;
var G__2835 = chunk__2799_2830;
var G__2836 = count__2800_2831;
var G__2837 = (i__2801_2832 + (1));
seq__2798_2829 = G__2834;
chunk__2799_2830 = G__2835;
count__2800_2831 = G__2836;
i__2801_2832 = G__2837;
continue;
} else {
var temp__4657__auto___2838 = cljs.core.seq.call(null,seq__2798_2829);
if(temp__4657__auto___2838){
var seq__2798_2839__$1 = temp__4657__auto___2838;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2798_2839__$1)){
var c__3334__auto___2840 = cljs.core.chunk_first.call(null,seq__2798_2839__$1);
var G__2841 = cljs.core.chunk_rest.call(null,seq__2798_2839__$1);
var G__2842 = c__3334__auto___2840;
var G__2843 = cljs.core.count.call(null,c__3334__auto___2840);
var G__2844 = (0);
seq__2798_2829 = G__2841;
chunk__2799_2830 = G__2842;
count__2800_2831 = G__2843;
i__2801_2832 = G__2844;
continue;
} else {
var fld_2845 = cljs.core.first.call(null,seq__2798_2839__$1);
cljs.compiler.emitln.call(null,"this.",fld_2845," = ",fld_2845,";");

var G__2846 = cljs.core.next.call(null,seq__2798_2839__$1);
var G__2847 = null;
var G__2848 = (0);
var G__2849 = (0);
seq__2798_2829 = G__2846;
chunk__2799_2830 = G__2847;
count__2800_2831 = G__2848;
i__2801_2832 = G__2849;
continue;
}
} else {
}
}
break;
}

var seq__2802_2850 = cljs.core.seq.call(null,pmasks);
var chunk__2803_2851 = null;
var count__2804_2852 = (0);
var i__2805_2853 = (0);
while(true){
if((i__2805_2853 < count__2804_2852)){
var vec__2806_2854 = cljs.core._nth.call(null,chunk__2803_2851,i__2805_2853);
var pno_2855 = cljs.core.nth.call(null,vec__2806_2854,(0),null);
var pmask_2856 = cljs.core.nth.call(null,vec__2806_2854,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_2855,"$ = ",pmask_2856,";");

var G__2857 = seq__2802_2850;
var G__2858 = chunk__2803_2851;
var G__2859 = count__2804_2852;
var G__2860 = (i__2805_2853 + (1));
seq__2802_2850 = G__2857;
chunk__2803_2851 = G__2858;
count__2804_2852 = G__2859;
i__2805_2853 = G__2860;
continue;
} else {
var temp__4657__auto___2861 = cljs.core.seq.call(null,seq__2802_2850);
if(temp__4657__auto___2861){
var seq__2802_2862__$1 = temp__4657__auto___2861;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2802_2862__$1)){
var c__3334__auto___2863 = cljs.core.chunk_first.call(null,seq__2802_2862__$1);
var G__2864 = cljs.core.chunk_rest.call(null,seq__2802_2862__$1);
var G__2865 = c__3334__auto___2863;
var G__2866 = cljs.core.count.call(null,c__3334__auto___2863);
var G__2867 = (0);
seq__2802_2850 = G__2864;
chunk__2803_2851 = G__2865;
count__2804_2852 = G__2866;
i__2805_2853 = G__2867;
continue;
} else {
var vec__2807_2868 = cljs.core.first.call(null,seq__2802_2862__$1);
var pno_2869 = cljs.core.nth.call(null,vec__2807_2868,(0),null);
var pmask_2870 = cljs.core.nth.call(null,vec__2807_2868,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_2869,"$ = ",pmask_2870,";");

var G__2871 = cljs.core.next.call(null,seq__2802_2862__$1);
var G__2872 = null;
var G__2873 = (0);
var G__2874 = (0);
seq__2802_2850 = G__2871;
chunk__2803_2851 = G__2872;
count__2804_2852 = G__2873;
i__2805_2853 = G__2874;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"dot","dot",1442709401),(function (p__2875){
var map__2876 = p__2875;
var map__2876__$1 = ((((!((map__2876 == null)))?((((map__2876.cljs$lang$protocol_mask$partition0$ & (64))) || (map__2876.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2876):map__2876);
var target = cljs.core.get.call(null,map__2876__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.call(null,map__2876__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.call(null,map__2876__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.call(null,map__2876__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__2876__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__4485__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__4485__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep.call(null,args),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__4485__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__2878){
var map__2879 = p__2878;
var map__2879__$1 = ((((!((map__2879 == null)))?((((map__2879.cljs$lang$protocol_mask$partition0$ & (64))) || (map__2879.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2879):map__2879);
var op = cljs.core.get.call(null,map__2879__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.call(null,map__2879__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.call(null,map__2879__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.call(null,map__2879__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.call(null,map__2879__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_((function (){var and__2943__auto__ = code;
if(cljs.core.truth_(and__2943__auto__)){
return goog.string.startsWith(clojure.string.trim.call(null,code),"/*");
} else {
return and__2943__auto__;
}
})())){
return cljs.compiler.emits.call(null,code);
} else {
var env__4485__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__4485__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.call(null,code);
} else {
cljs.compiler.emits.call(null,cljs.core.interleave.call(null,cljs.core.concat.call(null,segs,cljs.core.repeat.call(null,null)),cljs.core.concat.call(null,args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__4485__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.build_affecting_options = (function cljs$compiler$build_affecting_options(opts){
return cljs.core.select_keys.call(null,opts,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),new cljs.core.Keyword(null,"optimize-constants","optimize-constants",232704518),new cljs.core.Keyword(null,"elide-asserts","elide-asserts",537063272),new cljs.core.Keyword(null,"target","target",253001721)], null));
});
cljs.compiler.emit_constants_table = (function cljs$compiler$emit_constants_table(table){
var seq__2889 = cljs.core.seq.call(null,table);
var chunk__2890 = null;
var count__2891 = (0);
var i__2892 = (0);
while(true){
if((i__2892 < count__2891)){
var vec__2893 = cljs.core._nth.call(null,chunk__2890,i__2892);
var sym = cljs.core.nth.call(null,vec__2893,(0),null);
var value = cljs.core.nth.call(null,vec__2893,(1),null);
var ns_2895 = cljs.core.namespace.call(null,sym);
var name_2896 = cljs.core.name.call(null,sym);
cljs.compiler.emits.call(null,"cljs.core.",value," = ");

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword.call(null,sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol.call(null,sym);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot emit constant for type "),cljs.core.str(cljs.core.type.call(null,sym))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-constant-type","invalid-constant-type",1294847471)], null));

}
}

cljs.compiler.emits.call(null,";\n");

var G__2897 = seq__2889;
var G__2898 = chunk__2890;
var G__2899 = count__2891;
var G__2900 = (i__2892 + (1));
seq__2889 = G__2897;
chunk__2890 = G__2898;
count__2891 = G__2899;
i__2892 = G__2900;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__2889);
if(temp__4657__auto__){
var seq__2889__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2889__$1)){
var c__3334__auto__ = cljs.core.chunk_first.call(null,seq__2889__$1);
var G__2901 = cljs.core.chunk_rest.call(null,seq__2889__$1);
var G__2902 = c__3334__auto__;
var G__2903 = cljs.core.count.call(null,c__3334__auto__);
var G__2904 = (0);
seq__2889 = G__2901;
chunk__2890 = G__2902;
count__2891 = G__2903;
i__2892 = G__2904;
continue;
} else {
var vec__2894 = cljs.core.first.call(null,seq__2889__$1);
var sym = cljs.core.nth.call(null,vec__2894,(0),null);
var value = cljs.core.nth.call(null,vec__2894,(1),null);
var ns_2905 = cljs.core.namespace.call(null,sym);
var name_2906 = cljs.core.name.call(null,sym);
cljs.compiler.emits.call(null,"cljs.core.",value," = ");

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword.call(null,sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol.call(null,sym);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot emit constant for type "),cljs.core.str(cljs.core.type.call(null,sym))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-constant-type","invalid-constant-type",1294847471)], null));

}
}

cljs.compiler.emits.call(null,";\n");

var G__2907 = cljs.core.next.call(null,seq__2889__$1);
var G__2908 = null;
var G__2909 = (0);
var G__2910 = (0);
seq__2889 = G__2907;
chunk__2890 = G__2908;
count__2891 = G__2909;
i__2892 = G__2910;
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