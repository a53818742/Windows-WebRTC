
!function(t){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).pako=t()}}(function(){return function t(e,a,i){function n(s,o){if(!a[s]){if(!e[s]){var l="function"==typeof require&&require;if(!o&&l)return l(s,!0);if(r)return r(s,!0);var h=new Error("Cannot find module '"+s+"'");throw h.code="MODULE_NOT_FOUND",h}var d=a[s]={exports:{}};e[s][0].call(d.exports,function(t){var a=e[s][1][t];return n(a||t)},d,d.exports,t,e,a,i)}return a[s].exports}for(var r="function"==typeof require&&require,s=0;s<i.length;s++)n(i[s]);return n}({1:[function(t,e,a){"use strict";function i(t){if(!(this instanceof i))return new i(t);this.options=s.assign({level:_,method:c,chunkSize:16384,windowBits:15,memLevel:8,strategy:u,to:""},t||{});var e=this.options;e.raw&&e.windowBits>0?e.windowBits=-e.windowBits:e.gzip&&e.windowBits>0&&e.windowBits<16&&(e.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new h,this.strm.avail_out=0;var a=r.deflateInit2(this.strm,e.level,e.method,e.windowBits,e.memLevel,e.strategy);if(a!==f)throw new Error(l[a]);if(e.header&&r.deflateSetHeader(this.strm,e.header),e.dictionary){var n;if(n="string"==typeof e.dictionary?o.string2buf(e.dictionary):"[object ArrayBuffer]"===d.call(e.dictionary)?new Uint8Array(e.dictionary):e.dictionary,(a=r.deflateSetDictionary(this.strm,n))!==f)throw new Error(l[a]);this._dict_set=!0}}function n(t,e){var a=new i(e);if(a.push(t,!0),a.err)throw a.msg||l[a.err];return a.result}var r=t("./zlib/deflate"),s=t("./utils/common"),o=t("./utils/strings"),l=t("./zlib/messages"),h=t("./zlib/zstream"),d=Object.prototype.toString,f=0,_=-1,u=0,c=8;i.prototype.push=function(t,e){var a,i,n=this.strm,l=this.options.chunkSize;if(this.ended)return!1;i=e===~~e?e:!0===e?4:0,"string"==typeof t?n.input=o.string2buf(t):"[object ArrayBuffer]"===d.call(t)?n.input=new Uint8Array(t):n.input=t,n.next_in=0,n.avail_in=n.input.length;do{if(0===n.avail_out&&(n.output=new s.Buf8(l),n.next_out=0,n.avail_out=l),1!==(a=r.deflate(n,i))&&a!==f)return this.onEnd(a),this.ended=!0,!1;0!==n.avail_out&&(0!==n.avail_in||4!==i&&2!==i)||("string"===this.options.to?this.onData(o.buf2binstring(s.shrinkBuf(n.output,n.next_out))):this.onData(s.shrinkBuf(n.output,n.next_out)))}while((n.avail_in>0||0===n.avail_out)&&1!==a);return 4===i?(a=r.deflateEnd(this.strm),this.onEnd(a),this.ended=!0,a===f):2!==i||(this.onEnd(f),n.avail_out=0,!0)},i.prototype.onData=function(t){this.chunks.push(t)},i.prototype.onEnd=function(t){t===f&&("string"===this.options.to?this.result=this.chunks.join(""):this.result=s.flattenChunks(this.chunks)),this.chunks=[],this.err=t,this.msg=this.strm.msg},a.Deflate=i,a.deflate=n,a.deflateRaw=function(t,e){return e=e||{},e.raw=!0,n(t,e)},a.gzip=function(t,e){return e=e||{},e.gzip=!0,n(t,e)}},{"./utils/common":3,"./utils/strings":4,"./zlib/deflate":8,"./zlib/messages":13,"./zlib/zstream":15}],2:[function(t,e,a){"use strict";function i(t){if(!(this instanceof i))return new i(t);this.options=s.assign({chunkSize:16384,windowBits:0,to:""},t||{});var e=this.options;e.raw&&e.windowBits>=0&&e.windowBits<16&&(e.windowBits=-e.windowBits,0===e.windowBits&&(e.windowBits=-15)),!(e.windowBits>=0&&e.windowBits<16)||t&&t.windowBits||(e.windowBits+=32),e.windowBits>15&&e.windowBits<48&&0==(15&e.windowBits)&&(e.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new d,this.strm.avail_out=0;var a=r.inflateInit2(this.strm,e.windowBits);if(a!==l.Z_OK)throw new Error(h[a]);this.header=new f,r.inflateGetHeader(this.strm,this.header)}function n(t,e){var a=new i(e);if(a.push(t,!0),a.err)throw a.msg||h[a.err];return a.result}var r=t("./zlib/inflate"),s=t("./utils/common"),o=t("./utils/strings"),l=t("./zlib/constants"),h=t("./zlib/messages"),d=t("./zlib/zstream"),f=t("./zlib/gzheader"),_=Object.prototype.toString;i.prototype.push=function(t,e){var a,i,n,h,d,f,u=this.strm,c=this.options.chunkSize,b=this.options.dictionary,g=!1;if(this.ended)return!1;i=e===~~e?e:!0===e?l.Z_FINISH:l.Z_NO_FLUSH,"string"==typeof t?u.input=o.binstring2buf(t):"[object ArrayBuffer]"===_.call(t)?u.input=new Uint8Array(t):u.input=t,u.next_in=0,u.avail_in=u.input.length;do{if(0===u.avail_out&&(u.output=new s.Buf8(c),u.next_out=0,u.avail_out=c),(a=r.inflate(u,l.Z_NO_FLUSH))===l.Z_NEED_DICT&&b&&(f="string"==typeof b?o.string2buf(b):"[object ArrayBuffer]"===_.call(b)?new Uint8Array(b):b,a=r.inflateSetDictionary(this.strm,f)),a===l.Z_BUF_ERROR&&!0===g&&(a=l.Z_OK,g=!1),a!==l.Z_STREAM_END&&a!==l.Z_OK)return this.onEnd(a),this.ended=!0,!1;u.next_out&&(0!==u.avail_out&&a!==l.Z_STREAM_END&&(0!==u.avail_in||i!==l.Z_FINISH&&i!==l.Z_SYNC_FLUSH)||("string"===this.options.to?(n=o.utf8border(u.output,u.next_out),h=u.next_out-n,d=o.buf2string(u.output,n),u.next_out=h,u.avail_out=c-h,h&&s.arraySet(u.output,u.output,n,h,0),this.onData(d)):this.onData(s.shrinkBuf(u.output,u.next_out)))),0===u.avail_in&&0===u.avail_out&&(g=!0)}while((u.avail_in>0||0===u.avail_out)&&a!==l.Z_STREAM_END);return a===l.Z_STREAM_END&&(i=l.Z_FINISH),i===l.Z_FINISH?(a=r.inflateEnd(this.strm),this.onEnd(a),this.ended=!0,a===l.Z_OK):i!==l.Z_SYNC_FLUSH||(this.onEnd(l.Z_OK),u.avail_out=0,!0)},i.prototype.onData=function(t){this.chunks.push(t)},i.prototype.onEnd=function(t){t===l.Z_OK&&("string"===this.options.to?this.result=this.chunks.join(""):this.result=s.flattenChunks(this.chunks)),this.chunks=[],this.err=t,this.msg=this.strm.msg},a.Inflate=i,a.inflate=n,a.inflateRaw=function(t,e){return e=e||{},e.raw=!0,n(t,e)},a.ungzip=n},{"./utils/common":3,"./utils/strings":4,"./zlib/constants":6,"./zlib/gzheader":9,"./zlib/inflate":11,"./zlib/messages":13,"./zlib/zstream":15}],3:[function(t,e,a){"use strict";function i(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var n="undefined"!=typeof Uint8Array&&"undefined"!=typeof Uint16Array&&"undefined"!=typeof Int32Array;a.assign=function(t){for(var e=Array.prototype.slice.call(arguments,1);e.length;){var a=e.shift();if(a){if("object"!=typeof a)throw new TypeError(a+"must be non-object");for(var n in a)i(a,n)&&(t[n]=a[n])}}return t},a.shrinkBuf=function(t,e){return t.length===e?t:t.subarray?t.subarray(0,e):(t.length=e,t)};var r={arraySet:function(t,e,a,i,n){if(e.subarray&&t.subarray)t.set(e.subarray(a,a+i),n);else for(var r=0;r<i;r++)t[n+r]=e[a+r]},flattenChunks:function(t){var e,a,i,n,r,s;for(i=0,e=0,a=t.length;e<a;e++)i+=t[e].length;for(s=new Uint8Array(i),n=0,e=0,a=t.length;e<a;e++)r=t[e],s.set(r,n),n+=r.length;return s}},s={arraySet:function(t,e,a,i,n){for(var r=0;r<i;r++)t[n+r]=e[a+r]},flattenChunks:function(t){return[].concat.apply([],t)}};a.setTyped=function(t){t?(a.Buf8=Uint8Array,a.Buf16=Uint16Array,a.Buf32=Int32Array,a.assign(a,r)):(a.Buf8=Array,a.Buf16=Array,a.Buf32=Array,a.assign(a,s))},a.setTyped(n)},{}],4:[function(t,e,a){"use strict";function i(t,e){if(e<65537&&(t.subarray&&s||!t.subarray&&r))return String.fromCharCode.apply(null,n.shrinkBuf(t,e));for(var a="",i=0;i<e;i++)a+=String.fromCharCode(t[i]);return a}var n=t("./common"),r=!0,s=!0;try{String.fromCharCode.apply(null,[0])}catch(t){r=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch(t){s=!1}for(var o=new n.Buf8(256),l=0;l<256;l++)o[l]=l>=252?6:l>=248?5:l>=240?4:l>=224?3:l>=192?2:1;o[254]=o[254]=1,a.string2buf=function(t){var e,a,i,r,s,o=t.length,l=0;for(r=0;r<o;r++)55296==(64512&(a=t.charCodeAt(r)))&&r+1<o&&56320==(64512&(i=t.charCodeAt(r+1)))&&(a=65536+(a-55296<<10)+(i-56320),r++),l+=a<128?1:a<2048?2:a<65536?3:4;for(e=new n.Buf8(l),s=0,r=0;s<l;r++)55296==(64512&(a=t.charCodeAt(r)))&&r+1<o&&56320==(64512&(i=t.charCodeAt(r+1)))&&(a=65536+(a-55296<<10)+(i-56320),r++),a<128?e[s++]=a:a<2048?(e[s++]=192|a>>>6,e[s++]=128|63&a):a<65536?(e[s++]=224|a>>>12,e[s++]=128|a>>>6&63,e[s++]=128|63&a):(e[s++]=240|a>>>18,e[s++]=128|a>>>12&63,e[s++]=128|a>>>6&63,e[s++]=128|63&a);return e},a.buf2binstring=function(t){return i(t,t.length)},a.binstring2buf=function(t){for(var e=new n.Buf8(t.length),a=0,i=e.length;a<i;a++)e[a]=t.charCodeAt(a);return e},a.buf2string=function(t,e){var a,n,r,s,l=e||t.length,h=new Array(2*l);for(n=0,a=0;a<l;)if((r=t[a++])<128)h[n++]=r;else if((s=o[r])>4)h[n++]=65533,a+=s-1;else{for(r&=2===s?31:3===s?15:7;s>1&&a<l;)r=r<<6|63&t[a++],s--;s>1?h[n++]=65533:r<65536?h[n++]=r:(r-=65536,h[n++]=55296|r>>10&1023,h[n++]=56320|1023&r)}return i(h,n)},a.utf8border=function(t,e){var a;for((e=e||t.length)>t.length&&(e=t.length),a=e-1;a>=0&&128==(192&t[a]);)a--;return a<0?e:0===a?e:a+o[t[a]]>e?a:e}},{"./common":3}],5:[function(t,e,a){"use strict";e.exports=function(t,e,a,i){for(var n=65535&t|0,r=t>>>16&65535|0,s=0;0!==a;){a-=s=a>2e3?2e3:a;do{r=r+(n=n+e[i++]|0)|0}while(--s);n%=65521,r%=65521}return n|r<<16|0}},{}],6:[function(t,e,a){"use strict";e.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],7:[function(t,e,a){"use strict";var i=function(){for(var t,e=[],a=0;a<256;a++){t=a;for(var i=0;i<8;i++)t=1&t?3988292384^t>>>1:t>>>1;e[a]=t}return e}();e.exports=function(t,e,a,n){var r=i,s=n+a;t^=-1;for(var o=n;o<s;o++)t=t>>>8^r[255&(t^e[o])];return-1^t}},{}],8:[function(t,e,a){"use strict";function i(t,e){return t.msg=A[e],e}function n(t){return(t<<1)-(t>4?9:0)}function r(t){for(var e=t.length;--e>=0;)t[e]=0}function s(t){var e=t.state,a=e.pending;a>t.avail_out&&(a=t.avail_out),0!==a&&(z.arraySet(t.output,e.pending_buf,e.pending_out,a,t.next_out),t.next_out+=a,e.pending_out+=a,t.total_out+=a,t.avail_out-=a,e.pending-=a,0===e.pending&&(e.pending_out=0))}function o(t,e){B._tr_flush_block(t,t.block_start>=0?t.block_start:-1,t.strstart-t.block_start,e),t.block_start=t.strstart,s(t.strm)}function l(t,e){t.pending_buf[t.pending++]=e}function h(t,e){t.pending_buf[t.pending++]=e>>>8&255,t.pending_buf[t.pending++]=255&e}function d(t,e,a,i){var n=t.avail_in;return n>i&&(n=i),0===n?0:(t.avail_in-=n,z.arraySet(e,t.input,t.next_in,n,a),1===t.state.wrap?t.adler=S(t.adler,e,n,a):2===t.state.wrap&&(t.adler=E(t.adler,e,n,a)),t.next_in+=n,t.total_in+=n,n)}function f(t,e){var a,i,n=t.max_chain_length,r=t.strstart,s=t.prev_length,o=t.nice_match,l=t.strstart>t.w_size-it?t.strstart-(t.w_size-it):0,h=t.window,d=t.w_mask,f=t.prev,_=t.strstart+at,u=h[r+s-1],c=h[r+s];t.prev_length>=t.good_match&&(n>>=2),o>t.lookahead&&(o=t.lookahead);do{if(a=e,h[a+s]===c&&h[a+s-1]===u&&h[a]===h[r]&&h[++a]===h[r+1]){r+=2,a++;do{}while(h[++r]===h[++a]&&h[++r]===h[++a]&&h[++r]===h[++a]&&h[++r]===h[++a]&&h[++r]===h[++a]&&h[++r]===h[++a]&&h[++r]===h[++a]&&h[++r]===h[++a]&&r<_);if(i=at-(_-r),r=_-at,i>s){if(t.match_start=e,s=i,i>=o)break;u=h[r+s-1],c=h[r+s]}}}while((e=f[e&d])>l&&0!=--n);return s<=t.lookahead?s:t.lookahead}function _(t){var e,a,i,n,r,s=t.w_size;do{if(n=t.window_size-t.lookahead-t.strstart,t.strstart>=s+(s-it)){z.arraySet(t.window,t.window,s,s,0),t.match_start-=s,t.strstart-=s,t.block_start-=s,e=a=t.hash_size;do{i=t.head[--e],t.head[e]=i>=s?i-s:0}while(--a);e=a=s;do{i=t.prev[--e],t.prev[e]=i>=s?i-s:0}while(--a);n+=s}if(0===t.strm.avail_in)break;if(a=d(t.strm,t.window,t.strstart+t.lookahead,n),t.lookahead+=a,t.lookahead+t.insert>=et)for(r=t.strstart-t.insert,t.ins_h=t.window[r],t.ins_h=(t.ins_h<<t.hash_shift^t.window[r+1])&t.hash_mask;t.insert&&(t.ins_h=(t.ins_h<<t.hash_shift^t.window[r+et-1])&t.hash_mask,t.prev[r&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=r,r++,t.insert--,!(t.lookahead+t.insert<et)););}while(t.lookahead<it&&0!==t.strm.avail_in)}function u(t,e){for(var a,i;;){if(t.lookahead<it){if(_(t),t.lookahead<it&&e===Z)return _t;if(0===t.lookahead)break}if(a=0,t.lookahead>=et&&(t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+et-1])&t.hash_mask,a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart),0!==a&&t.strstart-a<=t.w_size-it&&(t.match_length=f(t,a)),t.match_length>=et)if(i=B._tr_tally(t,t.strstart-t.match_start,t.match_length-et),t.lookahead-=t.match_length,t.match_length<=t.max_lazy_match&&t.lookahead>=et){t.match_length--;do{t.strstart++,t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+et-1])&t.hash_mask,a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart}while(0!=--t.match_length);t.strstart++}else t.strstart+=t.match_length,t.match_length=0,t.ins_h=t.window[t.strstart],t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+1])&t.hash_mask;else i=B._tr_tally(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++;if(i&&(o(t,!1),0===t.strm.avail_out))return _t}return t.insert=t.strstart<et-1?t.strstart:et-1,e===N?(o(t,!0),0===t.strm.avail_out?ct:bt):t.last_lit&&(o(t,!1),0===t.strm.avail_out)?_t:ut}function c(t,e){for(var a,i,n;;){if(t.lookahead<it){if(_(t),t.lookahead<it&&e===Z)return _t;if(0===t.lookahead)break}if(a=0,t.lookahead>=et&&(t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+et-1])&t.hash_mask,a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart),t.prev_length=t.match_length,t.prev_match=t.match_start,t.match_length=et-1,0!==a&&t.prev_length<t.max_lazy_match&&t.strstart-a<=t.w_size-it&&(t.match_length=f(t,a),t.match_length<=5&&(t.strategy===H||t.match_length===et&&t.strstart-t.match_start>4096)&&(t.match_length=et-1)),t.prev_length>=et&&t.match_length<=t.prev_length){n=t.strstart+t.lookahead-et,i=B._tr_tally(t,t.strstart-1-t.prev_match,t.prev_length-et),t.lookahead-=t.prev_length-1,t.prev_length-=2;do{++t.strstart<=n&&(t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+et-1])&t.hash_mask,a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart)}while(0!=--t.prev_length);if(t.match_available=0,t.match_length=et-1,t.strstart++,i&&(o(t,!1),0===t.strm.avail_out))return _t}else if(t.match_available){if((i=B._tr_tally(t,0,t.window[t.strstart-1]))&&o(t,!1),t.strstart++,t.lookahead--,0===t.strm.avail_out)return _t}else t.match_available=1,t.strstart++,t.lookahead--}return t.match_available&&(i=B._tr_tally(t,0,t.window[t.strstart-1]),t.match_available=0),t.insert=t.strstart<et-1?t.strstart:et-1,e===N?(o(t,!0),0===t.strm.avail_out?ct:bt):t.last_lit&&(o(t,!1),0===t.strm.avail_out)?_t:ut}function b(t,e){for(var a,i,n,r,s=t.window;;){if(t.lookahead<=at){if(_(t),t.lookahead<=at&&e===Z)return _t;if(0===t.lookahead)break}if(t.match_length=0,t.lookahead>=et&&t.strstart>0&&(n=t.strstart-1,(i=s[n])===s[++n]&&i===s[++n]&&i===s[++n])){r=t.strstart+at;do{}while(i===s[++n]&&i===s[++n]&&i===s[++n]&&i===s[++n]&&i===s[++n]&&i===s[++n]&&i===s[++n]&&i===s[++n]&&n<r);t.match_length=at-(r-n),t.match_length>t.lookahead&&(t.match_length=t.lookahead)}if(t.match_length>=et?(a=B._tr_tally(t,1,t.match_length-et),t.lookahead-=t.match_length,t.strstart+=t.match_length,t.match_length=0):(a=B._tr_tally(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++),a&&(o(t,!1),0===t.strm.avail_out))return _t}return t.insert=0,e===N?(o(t,!0),0===t.strm.avail_out?ct:bt):t.last_lit&&(o(t,!1),0===t.strm.avail_out)?_t:ut}function g(t,e){for(var a;;){if(0===t.lookahead&&(_(t),0===t.lookahead)){if(e===Z)return _t;break}if(t.match_length=0,a=B._tr_tally(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++,a&&(o(t,!1),0===t.strm.avail_out))return _t}return t.insert=0,e===N?(o(t,!0),0===t.strm.avail_out?ct:bt):t.last_lit&&(o(t,!1),0===t.strm.avail_out)?_t:ut}function m(t,e,a,i,n){this.good_length=t,this.max_lazy=e,this.nice_length=a,this.max_chain=i,this.func=n}function w(t){t.window_size=2*t.w_size,r(t.head),t.max_lazy_match=x[t.level].max_lazy,t.good_match=x[t.level].good_length,t.nice_match=x[t.level].nice_length,t.max_chain_length=x[t.level].max_chain,t.strstart=0,t.block_start=0,t.lookahead=0,t.insert=0,t.match_length=t.prev_length=et-1,t.match_available=0,t.ins_h=0}function p(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=q,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new z.Buf16(2*$),this.dyn_dtree=new z.Buf16(2*(2*Q+1)),this.bl_tree=new z.Buf16(2*(2*V+1)),r(this.dyn_ltree),r(this.dyn_dtree),r(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new z.Buf16(tt+1),this.heap=new z.Buf16(2*J+1),r(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new z.Buf16(2*J+1),r(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function v(t){var e;return t&&t.state?(t.total_in=t.total_out=0,t.data_type=Y,e=t.state,e.pending=0,e.pending_out=0,e.wrap<0&&(e.wrap=-e.wrap),e.status=e.wrap?rt:dt,t.adler=2===e.wrap?0:1,e.last_flush=Z,B._tr_init(e),D):i(t,U)}function k(t){var e=v(t);return e===D&&w(t.state),e}function y(t,e,a,n,r,s){if(!t)return U;var o=1;if(e===L&&(e=6),n<0?(o=0,n=-n):n>15&&(o=2,n-=16),r<1||r>G||a!==q||n<8||n>15||e<0||e>9||s<0||s>M)return i(t,U);8===n&&(n=9);var l=new p;return t.state=l,l.strm=t,l.wrap=o,l.gzhead=null,l.w_bits=n,l.w_size=1<<l.w_bits,l.w_mask=l.w_size-1,l.hash_bits=r+7,l.hash_size=1<<l.hash_bits,l.hash_mask=l.hash_size-1,l.hash_shift=~~((l.hash_bits+et-1)/et),l.window=new z.Buf8(2*l.w_size),l.head=new z.Buf16(l.hash_size),l.prev=new z.Buf16(l.w_size),l.lit_bufsize=1<<r+6,l.pending_buf_size=4*l.lit_bufsize,l.pending_buf=new z.Buf8(l.pending_buf_size),l.d_buf=1*l.lit_bufsize,l.l_buf=3*l.lit_bufsize,l.level=e,l.strategy=s,l.method=a,k(t)}var x,z=t("../utils/common"),B=t("./trees"),S=t("./adler32"),E=t("./crc32"),A=t("./messages"),Z=0,R=1,C=3,N=4,O=5,D=0,I=1,U=-2,T=-3,F=-5,L=-1,H=1,j=2,K=3,M=4,P=0,Y=2,q=8,G=9,X=15,W=8,J=286,Q=30,V=19,$=2*J+1,tt=15,et=3,at=258,it=at+et+1,nt=32,rt=42,st=69,ot=73,lt=91,ht=103,dt=113,ft=666,_t=1,ut=2,ct=3,bt=4,gt=3;x=[new m(0,0,0,0,function(t,e){var a=65535;for(a>t.pending_buf_size-5&&(a=t.pending_buf_size-5);;){if(t.lookahead<=1){if(_(t),0===t.lookahead&&e===Z)return _t;if(0===t.lookahead)break}t.strstart+=t.lookahead,t.lookahead=0;var i=t.block_start+a;if((0===t.strstart||t.strstart>=i)&&(t.lookahead=t.strstart-i,t.strstart=i,o(t,!1),0===t.strm.avail_out))return _t;if(t.strstart-t.block_start>=t.w_size-it&&(o(t,!1),0===t.strm.avail_out))return _t}return t.insert=0,e===N?(o(t,!0),0===t.strm.avail_out?ct:bt):(t.strstart>t.block_start&&(o(t,!1),t.strm.avail_out),_t)}),new m(4,4,8,4,u),new m(4,5,16,8,u),new m(4,6,32,32,u),new m(4,4,16,16,c),new m(8,16,32,32,c),new m(8,16,128,128,c),new m(8,32,128,256,c),new m(32,128,258,1024,c),new m(32,258,258,4096,c)],a.deflateInit=function(t,e){return y(t,e,q,X,W,P)},a.deflateInit2=y,a.deflateReset=k,a.deflateResetKeep=v,a.deflateSetHeader=function(t,e){return t&&t.state?2!==t.state.wrap?U:(t.state.gzhead=e,D):U},a.deflate=function(t,e){var a,o,d,f;if(!t||!t.state||e>O||e<0)return t?i(t,U):U;if(o=t.state,!t.output||!t.input&&0!==t.avail_in||o.status===ft&&e!==N)return i(t,0===t.avail_out?F:U);if(o.strm=t,a=o.last_flush,o.last_flush=e,o.status===rt)if(2===o.wrap)t.adler=0,l(o,31),l(o,139),l(o,8),o.gzhead?(l(o,(o.gzhead.text?1:0)+(o.gzhead.hcrc?2:0)+(o.gzhead.extra?4:0)+(o.gzhead.name?8:0)+(o.gzhead.comment?16:0)),l(o,255&o.gzhead.time),l(o,o.gzhead.time>>8&255),l(o,o.gzhead.time>>16&255),l(o,o.gzhead.time>>24&255),l(o,9===o.level?2:o.strategy>=j||o.level<2?4:0),l(o,255&o.gzhead.os),o.gzhead.extra&&o.gzhead.extra.length&&(l(o,255&o.gzhead.extra.length),l(o,o.gzhead.extra.length>>8&255)),o.gzhead.hcrc&&(t.adler=E(t.adler,o.pending_buf,o.pending,0)),o.gzindex=0,o.status=st):(l(o,0),l(o,0),l(o,0),l(o,0),l(o,0),l(o,9===o.level?2:o.strategy>=j||o.level<2?4:0),l(o,gt),o.status=dt);else{var _=q+(o.w_bits-8<<4)<<8;_|=(o.strategy>=j||o.level<2?0:o.level<6?1:6===o.level?2:3)<<6,0!==o.strstart&&(_|=nt),_+=31-_%31,o.status=dt,h(o,_),0!==o.strstart&&(h(o,t.adler>>>16),h(o,65535&t.adler)),t.adler=1}if(o.status===st)if(o.gzhead.extra){for(d=o.pending;o.gzindex<(65535&o.gzhead.extra.length)&&(o.pending!==o.pending_buf_size||(o.gzhead.hcrc&&o.pending>d&&(t.adler=E(t.adler,o.pending_buf,o.pending-d,d)),s(t),d=o.pending,o.pending!==o.pending_buf_size));)l(o,255&o.gzhead.extra[o.gzindex]),o.gzindex++;o.gzhead.hcrc&&o.pending>d&&(t.adler=E(t.adler,o.pending_buf,o.pending-d,d)),o.gzindex===o.gzhead.extra.length&&(o.gzindex=0,o.status=ot)}else o.status=ot;if(o.status===ot)if(o.gzhead.name){d=o.pending;do{if(o.pending===o.pending_buf_size&&(o.gzhead.hcrc&&o.pending>d&&(t.adler=E(t.adler,o.pending_buf,o.pending-d,d)),s(t),d=o.pending,o.pending===o.pending_buf_size)){f=1;break}f=o.gzindex<o.gzhead.name.length?255&o.gzhead.name.charCodeAt(o.gzindex++):0,l(o,f)}while(0!==f);o.gzhead.hcrc&&o.pending>d&&(t.adler=E(t.adler,o.pending_buf,o.pending-d,d)),0===f&&(o.gzindex=0,o.status=lt)}else o.status=lt;if(o.status===lt)if(o.gzhead.comment){d=o.pending;do{if(o.pending===o.pending_buf_size&&(o.gzhead.hcrc&&o.pending>d&&(t.adler=E(t.adler,o.pending_buf,o.pending-d,d)),s(t),d=o.pending,o.pending===o.pending_buf_size)){f=1;break}f=o.gzindex<o.gzhead.comment.length?255&o.gzhead.comment.charCodeAt(o.gzindex++):0,l(o,f)}while(0!==f);o.gzhead.hcrc&&o.pending>d&&(t.adler=E(t.adler,o.pending_buf,o.pending-d,d)),0===f&&(o.status=ht)}else o.status=ht;if(o.status===ht&&(o.gzhead.hcrc?(o.pending+2>o.pending_buf_size&&s(t),o.pending+2<=o.pending_buf_size&&(l(o,255&t.adler),l(o,t.adler>>8&255),t.adler=0,o.status=dt)):o.status=dt),0!==o.pending){if(s(t),0===t.avail_out)return o.last_flush=-1,D}else if(0===t.avail_in&&n(e)<=n(a)&&e!==N)return i(t,F);if(o.status===ft&&0!==t.avail_in)return i(t,F);if(0!==t.avail_in||0!==o.lookahead||e!==Z&&o.status!==ft){var u=o.strategy===j?g(o,e):o.strategy===K?b(o,e):x[o.level].func(o,e);if(u!==ct&&u!==bt||(o.status=ft),u===_t||u===ct)return 0===t.avail_out&&(o.last_flush=-1),D;if(u===ut&&(e===R?B._tr_align(o):e!==O&&(B._tr_stored_block(o,0,0,!1),e===C&&(r(o.head),0===o.lookahead&&(o.strstart=0,o.block_start=0,o.insert=0))),s(t),0===t.avail_out))return o.last_flush=-1,D}return e!==N?D:o.wrap<=0?I:(2===o.wrap?(l(o,255&t.adler),l(o,t.adler>>8&255),l(o,t.adler>>16&255),l(o,t.adler>>24&255),l(o,255&t.total_in),l(o,t.total_in>>8&255),l(o,t.total_in>>16&255),l(o,t.total_in>>24&255)):(h(o,t.adler>>>16),h(o,65535&t.adler)),s(t),o.wrap>0&&(o.wrap=-o.wrap),0!==o.pending?D:I)},a.deflateEnd=function(t){var e;return t&&t.state?(e=t.state.status)!==rt&&e!==st&&e!==ot&&e!==lt&&e!==ht&&e!==dt&&e!==ft?i(t,U):(t.state=null,e===dt?i(t,T):D):U},a.deflateSetDictionary=function(t,e){var a,i,n,s,o,l,h,d,f=e.length;if(!t||!t.state)return U;if(a=t.state,2===(s=a.wrap)||1===s&&a.status!==rt||a.lookahead)return U;for(1===s&&(t.adler=S(t.adler,e,f,0)),a.wrap=0,f>=a.w_size&&(0===s&&(r(a.head),a.strstart=0,a.block_start=0,a.insert=0),d=new z.Buf8(a.w_size),z.arraySet(d,e,f-a.w_size,a.w_size,0),e=d,f=a.w_size),o=t.avail_in,l=t.next_in,h=t.input,t.avail_in=f,t.next_in=0,t.input=e,_(a);a.lookahead>=et;){i=a.strstart,n=a.lookahead-(et-1);do{a.ins_h=(a.ins_h<<a.hash_shift^a.window[i+et-1])&a.hash_mask,a.prev[i&a.w_mask]=a.head[a.ins_h],a.head[a.ins_h]=i,i++}while(--n);a.strstart=i,a.lookahead=et-1,_(a)}return a.strstart+=a.lookahead,a.block_start=a.strstart,a.insert=a.lookahead,a.lookahead=0,a.match_length=a.prev_length=et-1,a.match_available=0,t.next_in=l,t.input=h,t.avail_in=o,a.wrap=s,D},a.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":3,"./adler32":5,"./crc32":7,"./messages":13,"./trees":14}],9:[function(t,e,a){"use strict";e.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],10:[function(t,e,a){"use strict";e.exports=function(t,e){var a,i,n,r,s,o,l,h,d,f,_,u,c,b,g,m,w,p,v,k,y,x,z,B,S;a=t.state,i=t.next_in,B=t.input,n=i+(t.avail_in-5),r=t.next_out,S=t.output,s=r-(e-t.avail_out),o=r+(t.avail_out-257),l=a.dmax,h=a.wsize,d=a.whave,f=a.wnext,_=a.window,u=a.hold,c=a.bits,b=a.lencode,g=a.distcode,m=(1<<a.lenbits)-1,w=(1<<a.distbits)-1;t:do{c<15&&(u+=B[i++]<<c,c+=8,u+=B[i++]<<c,c+=8),p=b[u&m];e:for(;;){if(v=p>>>24,u>>>=v,c-=v,0===(v=p>>>16&255))S[r++]=65535&p;else{if(!(16&v)){if(0==(64&v)){p=b[(65535&p)+(u&(1<<v)-1)];continue e}if(32&v){a.mode=12;break t}t.msg="invalid literal/length code",a.mode=30;break t}k=65535&p,(v&=15)&&(c<v&&(u+=B[i++]<<c,c+=8),k+=u&(1<<v)-1,u>>>=v,c-=v),c<15&&(u+=B[i++]<<c,c+=8,u+=B[i++]<<c,c+=8),p=g[u&w];a:for(;;){if(v=p>>>24,u>>>=v,c-=v,!(16&(v=p>>>16&255))){if(0==(64&v)){p=g[(65535&p)+(u&(1<<v)-1)];continue a}t.msg="invalid distance code",a.mode=30;break t}if(y=65535&p,v&=15,c<v&&(u+=B[i++]<<c,(c+=8)<v&&(u+=B[i++]<<c,c+=8)),(y+=u&(1<<v)-1)>l){t.msg="invalid distance too far back",a.mode=30;break t}if(u>>>=v,c-=v,v=r-s,y>v){if((v=y-v)>d&&a.sane){t.msg="invalid distance too far back",a.mode=30;break t}if(x=0,z=_,0===f){if(x+=h-v,v<k){k-=v;do{S[r++]=_[x++]}while(--v);x=r-y,z=S}}else if(f<v){if(x+=h+f-v,(v-=f)<k){k-=v;do{S[r++]=_[x++]}while(--v);if(x=0,f<k){k-=v=f;do{S[r++]=_[x++]}while(--v);x=r-y,z=S}}}else if(x+=f-v,v<k){k-=v;do{S[r++]=_[x++]}while(--v);x=r-y,z=S}for(;k>2;)S[r++]=z[x++],S[r++]=z[x++],S[r++]=z[x++],k-=3;k&&(S[r++]=z[x++],k>1&&(S[r++]=z[x++]))}else{x=r-y;do{S[r++]=S[x++],S[r++]=S[x++],S[r++]=S[x++],k-=3}while(k>2);k&&(S[r++]=S[x++],k>1&&(S[r++]=S[x++]))}break}}break}}while(i<n&&r<o);i-=k=c>>3,u&=(1<<(c-=k<<3))-1,t.next_in=i,t.next_out=r,t.avail_in=i<n?n-i+5:5-(i-n),t.avail_out=r<o?o-r+257:257-(r-o),a.hold=u,a.bits=c}},{}],11:[function(t,e,a){"use strict";function i(t){return(t>>>24&255)+(t>>>8&65280)+((65280&t)<<8)+((255&t)<<24)}function n(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new u.Buf16(320),this.work=new u.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function r(t){var e;return t&&t.state?(e=t.state,t.total_in=t.total_out=e.total=0,t.msg="",e.wrap&&(t.adler=1&e.wrap),e.mode=N,e.last=0,e.havedict=0,e.dmax=32768,e.head=null,e.hold=0,e.bits=0,e.lencode=e.lendyn=new u.Buf32(dt),e.distcode=e.distdyn=new u.Buf32(ft),e.sane=1,e.back=-1,z):E}function s(t){var e;return t&&t.state?(e=t.state,e.wsize=0,e.whave=0,e.wnext=0,r(t)):E}function o(t,e){var a,i;return t&&t.state?(i=t.state,e<0?(a=0,e=-e):(a=1+(e>>4),e<48&&(e&=15)),e&&(e<8||e>15)?E:(null!==i.window&&i.wbits!==e&&(i.window=null),i.wrap=a,i.wbits=e,s(t))):E}function l(t,e){var a,i;return t?(i=new n,t.state=i,i.window=null,(a=o(t,e))!==z&&(t.state=null),a):E}function h(t){if(ut){var e;for(f=new u.Buf32(512),_=new u.Buf32(32),e=0;e<144;)t.lens[e++]=8;for(;e<256;)t.lens[e++]=9;for(;e<280;)t.lens[e++]=7;for(;e<288;)t.lens[e++]=8;for(m(p,t.lens,0,288,f,0,t.work,{bits:9}),e=0;e<32;)t.lens[e++]=5;m(v,t.lens,0,32,_,0,t.work,{bits:5}),ut=!1}t.lencode=f,t.lenbits=9,t.distcode=_,t.distbits=5}function d(t,e,a,i){var n,r=t.state;return null===r.window&&(r.wsize=1<<r.wbits,r.wnext=0,r.whave=0,r.window=new u.Buf8(r.wsize)),i>=r.wsize?(u.arraySet(r.window,e,a-r.wsize,r.wsize,0),r.wnext=0,r.whave=r.wsize):((n=r.wsize-r.wnext)>i&&(n=i),u.arraySet(r.window,e,a-i,n,r.wnext),(i-=n)?(u.arraySet(r.window,e,a-i,i,0),r.wnext=i,r.whave=r.wsize):(r.wnext+=n,r.wnext===r.wsize&&(r.wnext=0),r.whave<r.wsize&&(r.whave+=n))),0}var f,_,u=t("../utils/common"),c=t("./adler32"),b=t("./crc32"),g=t("./inffast"),m=t("./inftrees"),w=0,p=1,v=2,k=4,y=5,x=6,z=0,B=1,S=2,E=-2,A=-3,Z=-4,R=-5,C=8,N=1,O=2,D=3,I=4,U=5,T=6,F=7,L=8,H=9,j=10,K=11,M=12,P=13,Y=14,q=15,G=16,X=17,W=18,J=19,Q=20,V=21,$=22,tt=23,et=24,at=25,it=26,nt=27,rt=28,st=29,ot=30,lt=31,ht=32,dt=852,ft=592,_t=15,ut=!0;a.inflateReset=s,a.inflateReset2=o,a.inflateResetKeep=r,a.inflateInit=function(t){return l(t,_t)},a.inflateInit2=l,a.inflate=function(t,e){var a,n,r,s,o,l,f,_,dt,ft,_t,ut,ct,bt,gt,mt,wt,pt,vt,kt,yt,xt,zt,Bt,St=0,Et=new u.Buf8(4),At=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!t||!t.state||!t.output||!t.input&&0!==t.avail_in)return E;(a=t.state).mode===M&&(a.mode=P),o=t.next_out,r=t.output,f=t.avail_out,s=t.next_in,n=t.input,l=t.avail_in,_=a.hold,dt=a.bits,ft=l,_t=f,xt=z;t:for(;;)switch(a.mode){case N:if(0===a.wrap){a.mode=P;break}for(;dt<16;){if(0===l)break t;l--,_+=n[s++]<<dt,dt+=8}if(2&a.wrap&&35615===_){a.check=0,Et[0]=255&_,Et[1]=_>>>8&255,a.check=b(a.check,Et,2,0),_=0,dt=0,a.mode=O;break}if(a.flags=0,a.head&&(a.head.done=!1),!(1&a.wrap)||(((255&_)<<8)+(_>>8))%31){t.msg="incorrect header check",a.mode=ot;break}if((15&_)!==C){t.msg="unknown compression method",a.mode=ot;break}if(_>>>=4,dt-=4,yt=8+(15&_),0===a.wbits)a.wbits=yt;else if(yt>a.wbits){t.msg="invalid window size",a.mode=ot;break}a.dmax=1<<yt,t.adler=a.check=1,a.mode=512&_?j:M,_=0,dt=0;break;case O:for(;dt<16;){if(0===l)break t;l--,_+=n[s++]<<dt,dt+=8}if(a.flags=_,(255&a.flags)!==C){t.msg="unknown compression method",a.mode=ot;break}if(57344&a.flags){t.msg="unknown header flags set",a.mode=ot;break}a.head&&(a.head.text=_>>8&1),512&a.flags&&(Et[0]=255&_,Et[1]=_>>>8&255,a.check=b(a.check,Et,2,0)),_=0,dt=0,a.mode=D;case D:for(;dt<32;){if(0===l)break t;l--,_+=n[s++]<<dt,dt+=8}a.head&&(a.head.time=_),512&a.flags&&(Et[0]=255&_,Et[1]=_>>>8&255,Et[2]=_>>>16&255,Et[3]=_>>>24&255,a.check=b(a.check,Et,4,0)),_=0,dt=0,a.mode=I;case I:for(;dt<16;){if(0===l)break t;l--,_+=n[s++]<<dt,dt+=8}a.head&&(a.head.xflags=255&_,a.head.os=_>>8),512&a.flags&&(Et[0]=255&_,Et[1]=_>>>8&255,a.check=b(a.check,Et,2,0)),_=0,dt=0,a.mode=U;case U:if(1024&a.flags){for(;dt<16;){if(0===l)break t;l--,_+=n[s++]<<dt,dt+=8}a.length=_,a.head&&(a.head.extra_len=_),512&a.flags&&(Et[0]=255&_,Et[1]=_>>>8&255,a.check=b(a.check,Et,2,0)),_=0,dt=0}else a.head&&(a.head.extra=null);a.mode=T;case T:if(1024&a.flags&&((ut=a.length)>l&&(ut=l),ut&&(a.head&&(yt=a.head.extra_len-a.length,a.head.extra||(a.head.extra=new Array(a.head.extra_len)),u.arraySet(a.head.extra,n,s,ut,yt)),512&a.flags&&(a.check=b(a.check,n,ut,s)),l-=ut,s+=ut,a.length-=ut),a.length))break t;a.length=0,a.mode=F;case F:if(2048&a.flags){if(0===l)break t;ut=0;do{yt=n[s+ut++],a.head&&yt&&a.length<65536&&(a.head.name+=String.fromCharCode(yt))}while(yt&&ut<l);if(512&a.flags&&(a.check=b(a.check,n,ut,s)),l-=ut,s+=ut,yt)break t}else a.head&&(a.head.name=null);a.length=0,a.mode=L;case L:if(4096&a.flags){if(0===l)break t;ut=0;do{yt=n[s+ut++],a.head&&yt&&a.length<65536&&(a.head.comment+=String.fromCharCode(yt))}while(yt&&ut<l);if(512&a.flags&&(a.check=b(a.check,n,ut,s)),l-=ut,s+=ut,yt)break t}else a.head&&(a.head.comment=null);a.mode=H;case H:if(512&a.flags){for(;dt<16;){if(0===l)break t;l--,_+=n[s++]<<dt,dt+=8}if(_!==(65535&a.check)){t.msg="header crc mismatch",a.mode=ot;break}_=0,dt=0}a.head&&(a.head.hcrc=a.flags>>9&1,a.head.done=!0),t.adler=a.check=0,a.mode=M;break;case j:for(;dt<32;){if(0===l)break t;l--,_+=n[s++]<<dt,dt+=8}t.adler=a.check=i(_),_=0,dt=0,a.mode=K;case K:if(0===a.havedict)return t.next_out=o,t.avail_out=f,t.next_in=s,t.avail_in=l,a.hold=_,a.bits=dt,S;t.adler=a.check=1,a.mode=M;case M:if(e===y||e===x)break t;case P:if(a.last){_>>>=7&dt,dt-=7&dt,a.mode=nt;break}for(;dt<3;){if(0===l)break t;l--,_+=n[s++]<<dt,dt+=8}switch(a.last=1&_,_>>>=1,dt-=1,3&_){case 0:a.mode=Y;break;case 1:if(h(a),a.mode=Q,e===x){_>>>=2,dt-=2;break t}break;case 2:a.mode=X;break;case 3:t.msg="invalid block type",a.mode=ot}_>>>=2,dt-=2;break;case Y:for(_>>>=7&dt,dt-=7&dt;dt<32;){if(0===l)break t;l--,_+=n[s++]<<dt,dt+=8}if((65535&_)!=(_>>>16^65535)){t.msg="invalid stored block lengths",a.mode=ot;break}if(a.length=65535&_,_=0,dt=0,a.mode=q,e===x)break t;case q:a.mode=G;case G:if(ut=a.length){if(ut>l&&(ut=l),ut>f&&(ut=f),0===ut)break t;u.arraySet(r,n,s,ut,o),l-=ut,s+=ut,f-=ut,o+=ut,a.length-=ut;break}a.mode=M;break;case X:for(;dt<14;){if(0===l)break t;l--,_+=n[s++]<<dt,dt+=8}if(a.nlen=257+(31&_),_>>>=5,dt-=5,a.ndist=1+(31&_),_>>>=5,dt-=5,a.ncode=4+(15&_),_>>>=4,dt-=4,a.nlen>286||a.ndist>30){t.msg="too many length or distance symbols",a.mode=ot;break}a.have=0,a.mode=W;case W:for(;a.have<a.ncode;){for(;dt<3;){if(0===l)break t;l--,_+=n[s++]<<dt,dt+=8}a.lens[At[a.have++]]=7&_,_>>>=3,dt-=3}for(;a.have<19;)a.lens[At[a.have++]]=0;if(a.lencode=a.lendyn,a.lenbits=7,zt={bits:a.lenbits},xt=m(w,a.lens,0,19,a.lencode,0,a.work,zt),a.lenbits=zt.bits,xt){t.msg="invalid code lengths set",a.mode=ot;break}a.have=0,a.mode=J;case J:for(;a.have<a.nlen+a.ndist;){for(;St=a.lencode[_&(1<<a.lenbits)-1],gt=St>>>24,mt=St>>>16&255,wt=65535&St,!(gt<=dt);){if(0===l)break t;l--,_+=n[s++]<<dt,dt+=8}if(wt<16)_>>>=gt,dt-=gt,a.lens[a.have++]=wt;else{if(16===wt){for(Bt=gt+2;dt<Bt;){if(0===l)break t;l--,_+=n[s++]<<dt,dt+=8}if(_>>>=gt,dt-=gt,0===a.have){t.msg="invalid bit length repeat",a.mode=ot;break}yt=a.lens[a.have-1],ut=3+(3&_),_>>>=2,dt-=2}else if(17===wt){for(Bt=gt+3;dt<Bt;){if(0===l)break t;l--,_+=n[s++]<<dt,dt+=8}dt-=gt,yt=0,ut=3+(7&(_>>>=gt)),_>>>=3,dt-=3}else{for(Bt=gt+7;dt<Bt;){if(0===l)break t;l--,_+=n[s++]<<dt,dt+=8}dt-=gt,yt=0,ut=11+(127&(_>>>=gt)),_>>>=7,dt-=7}if(a.have+ut>a.nlen+a.ndist){t.msg="invalid bit length repeat",a.mode=ot;break}for(;ut--;)a.lens[a.have++]=yt}}if(a.mode===ot)break;if(0===a.lens[256]){t.msg="invalid code -- missing end-of-block",a.mode=ot;break}if(a.lenbits=9,zt={bits:a.lenbits},xt=m(p,a.lens,0,a.nlen,a.lencode,0,a.work,zt),a.lenbits=zt.bits,xt){t.msg="invalid literal/lengths set",a.mode=ot;break}if(a.distbits=6,a.distcode=a.distdyn,zt={bits:a.distbits},xt=m(v,a.lens,a.nlen,a.ndist,a.distcode,0,a.work,zt),a.distbits=zt.bits,xt){t.msg="invalid distances set",a.mode=ot;break}if(a.mode=Q,e===x)break t;case Q:a.mode=V;case V:if(l>=6&&f>=258){t.next_out=o,t.avail_out=f,t.next_in=s,t.avail_in=l,a.hold=_,a.bits=dt,g(t,_t),o=t.next_out,r=t.output,f=t.avail_out,s=t.next_in,n=t.input,l=t.avail_in,_=a.hold,dt=a.bits,a.mode===M&&(a.back=-1);break}for(a.back=0;St=a.lencode[_&(1<<a.lenbits)-1],gt=St>>>24,mt=St>>>16&255,wt=65535&St,!(gt<=dt);){if(0===l)break t;l--,_+=n[s++]<<dt,dt+=8}if(mt&&0==(240&mt)){for(pt=gt,vt=mt,kt=wt;St=a.lencode[kt+((_&(1<<pt+vt)-1)>>pt)],gt=St>>>24,mt=St>>>16&255,wt=65535&St,!(pt+gt<=dt);){if(0===l)break t;l--,_+=n[s++]<<dt,dt+=8}_>>>=pt,dt-=pt,a.back+=pt}if(_>>>=gt,dt-=gt,a.back+=gt,a.length=wt,0===mt){a.mode=it;break}if(32&mt){a.back=-1,a.mode=M;break}if(64&mt){t.msg="invalid literal/length code",a.mode=ot;break}a.extra=15&mt,a.mode=$;case $:if(a.extra){for(Bt=a.extra;dt<Bt;){if(0===l)break t;l--,_+=n[s++]<<dt,dt+=8}a.length+=_&(1<<a.extra)-1,_>>>=a.extra,dt-=a.extra,a.back+=a.extra}a.was=a.length,a.mode=tt;case tt:for(;St=a.distcode[_&(1<<a.distbits)-1],gt=St>>>24,mt=St>>>16&255,wt=65535&St,!(gt<=dt);){if(0===l)break t;l--,_+=n[s++]<<dt,dt+=8}if(0==(240&mt)){for(pt=gt,vt=mt,kt=wt;St=a.distcode[kt+((_&(1<<pt+vt)-1)>>pt)],gt=St>>>24,mt=St>>>16&255,wt=65535&St,!(pt+gt<=dt);){if(0===l)break t;l--,_+=n[s++]<<dt,dt+=8}_>>>=pt,dt-=pt,a.back+=pt}if(_>>>=gt,dt-=gt,a.back+=gt,64&mt){t.msg="invalid distance code",a.mode=ot;break}a.offset=wt,a.extra=15&mt,a.mode=et;case et:if(a.extra){for(Bt=a.extra;dt<Bt;){if(0===l)break t;l--,_+=n[s++]<<dt,dt+=8}a.offset+=_&(1<<a.extra)-1,_>>>=a.extra,dt-=a.extra,a.back+=a.extra}if(a.offset>a.dmax){t.msg="invalid distance too far back",a.mode=ot;break}a.mode=at;case at:if(0===f)break t;if(ut=_t-f,a.offset>ut){if((ut=a.offset-ut)>a.whave&&a.sane){t.msg="invalid distance too far back",a.mode=ot;break}ut>a.wnext?(ut-=a.wnext,ct=a.wsize-ut):ct=a.wnext-ut,ut>a.length&&(ut=a.length),bt=a.window}else bt=r,ct=o-a.offset,ut=a.length;ut>f&&(ut=f),f-=ut,a.length-=ut;do{r[o++]=bt[ct++]}while(--ut);0===a.length&&(a.mode=V);break;case it:if(0===f)break t;r[o++]=a.length,f--,a.mode=V;break;case nt:if(a.wrap){for(;dt<32;){if(0===l)break t;l--,_|=n[s++]<<dt,dt+=8}if(_t-=f,t.total_out+=_t,a.total+=_t,_t&&(t.adler=a.check=a.flags?b(a.check,r,_t,o-_t):c(a.check,r,_t,o-_t)),_t=f,(a.flags?_:i(_))!==a.check){t.msg="incorrect data check",a.mode=ot;break}_=0,dt=0}a.mode=rt;case rt:if(a.wrap&&a.flags){for(;dt<32;){if(0===l)break t;l--,_+=n[s++]<<dt,dt+=8}if(_!==(4294967295&a.total)){t.msg="incorrect length check",a.mode=ot;break}_=0,dt=0}a.mode=st;case st:xt=B;break t;case ot:xt=A;break t;case lt:return Z;case ht:default:return E}return t.next_out=o,t.avail_out=f,t.next_in=s,t.avail_in=l,a.hold=_,a.bits=dt,(a.wsize||_t!==t.avail_out&&a.mode<ot&&(a.mode<nt||e!==k))&&d(t,t.output,t.next_out,_t-t.avail_out)?(a.mode=lt,Z):(ft-=t.avail_in,_t-=t.avail_out,t.total_in+=ft,t.total_out+=_t,a.total+=_t,a.wrap&&_t&&(t.adler=a.check=a.flags?b(a.check,r,_t,t.next_out-_t):c(a.check,r,_t,t.next_out-_t)),t.data_type=a.bits+(a.last?64:0)+(a.mode===M?128:0)+(a.mode===Q||a.mode===q?256:0),(0===ft&&0===_t||e===k)&&xt===z&&(xt=R),xt)},a.inflateEnd=function(t){if(!t||!t.state)return E;var e=t.state;return e.window&&(e.window=null),t.state=null,z},a.inflateGetHeader=function(t,e){var a;return t&&t.state?0==(2&(a=t.state).wrap)?E:(a.head=e,e.done=!1,z):E},a.inflateSetDictionary=function(t,e){var a,i,n=e.length;return t&&t.state?0!==(a=t.state).wrap&&a.mode!==K?E:a.mode===K&&(i=1,(i=c(i,e,n,0))!==a.check)?A:d(t,e,n,n)?(a.mode=lt,Z):(a.havedict=1,z):E},a.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":3,"./adler32":5,"./crc32":7,"./inffast":10,"./inftrees":12}],12:[function(t,e,a){"use strict";var i=t("../utils/common"),n=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],r=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],s=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],o=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];e.exports=function(t,e,a,l,h,d,f,_){var u,c,b,g,m,w,p,v,k,y=_.bits,x=0,z=0,B=0,S=0,E=0,A=0,Z=0,R=0,C=0,N=0,O=null,D=0,I=new i.Buf16(16),U=new i.Buf16(16),T=null,F=0;for(x=0;x<=15;x++)I[x]=0;for(z=0;z<l;z++)I[e[a+z]]++;for(E=y,S=15;S>=1&&0===I[S];S--);if(E>S&&(E=S),0===S)return h[d++]=20971520,h[d++]=20971520,_.bits=1,0;for(B=1;B<S&&0===I[B];B++);for(E<B&&(E=B),R=1,x=1;x<=15;x++)if(R<<=1,(R-=I[x])<0)return-1;if(R>0&&(0===t||1!==S))return-1;for(U[1]=0,x=1;x<15;x++)U[x+1]=U[x]+I[x];for(z=0;z<l;z++)0!==e[a+z]&&(f[U[e[a+z]]++]=z);if(0===t?(O=T=f,w=19):1===t?(O=n,D-=257,T=r,F-=257,w=256):(O=s,T=o,w=-1),N=0,z=0,x=B,m=d,A=E,Z=0,b=-1,C=1<<E,g=C-1,1===t&&C>852||2===t&&C>592)return 1;for(;;){p=x-Z,f[z]<w?(v=0,k=f[z]):f[z]>w?(v=T[F+f[z]],k=O[D+f[z]]):(v=96,k=0),u=1<<x-Z,B=c=1<<A;do{h[m+(N>>Z)+(c-=u)]=p<<24|v<<16|k|0}while(0!==c);for(u=1<<x-1;N&u;)u>>=1;if(0!==u?(N&=u-1,N+=u):N=0,z++,0==--I[x]){if(x===S)break;x=e[a+f[z]]}if(x>E&&(N&g)!==b){for(0===Z&&(Z=E),m+=B,R=1<<(A=x-Z);A+Z<S&&!((R-=I[A+Z])<=0);)A++,R<<=1;if(C+=1<<A,1===t&&C>852||2===t&&C>592)return 1;h[b=N&g]=E<<24|A<<16|m-d|0}}return 0!==N&&(h[m+N]=x-Z<<24|64<<16|0),_.bits=E,0}},{"../utils/common":3}],13:[function(t,e,a){"use strict";e.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],14:[function(t,e,a){"use strict";function i(t){for(var e=t.length;--e>=0;)t[e]=0}function n(t,e,a,i,n){this.static_tree=t,this.extra_bits=e,this.extra_base=a,this.elems=i,this.max_length=n,this.has_stree=t&&t.length}function r(t,e){this.dyn_tree=t,this.max_code=0,this.stat_desc=e}function s(t){return t<256?et[t]:et[256+(t>>>7)]}function o(t,e){t.pending_buf[t.pending++]=255&e,t.pending_buf[t.pending++]=e>>>8&255}function l(t,e,a){t.bi_valid>M-a?(t.bi_buf|=e<<t.bi_valid&65535,o(t,t.bi_buf),t.bi_buf=e>>M-t.bi_valid,t.bi_valid+=a-M):(t.bi_buf|=e<<t.bi_valid&65535,t.bi_valid+=a)}function h(t,e,a){l(t,a[2*e],a[2*e+1])}function d(t,e){var a=0;do{a|=1&t,t>>>=1,a<<=1}while(--e>0);return a>>>1}function f(t){16===t.bi_valid?(o(t,t.bi_buf),t.bi_buf=0,t.bi_valid=0):t.bi_valid>=8&&(t.pending_buf[t.pending++]=255&t.bi_buf,t.bi_buf>>=8,t.bi_valid-=8)}function _(t,e){var a,i,n,r,s,o,l=e.dyn_tree,h=e.max_code,d=e.stat_desc.static_tree,f=e.stat_desc.has_stree,_=e.stat_desc.extra_bits,u=e.stat_desc.extra_base,c=e.stat_desc.max_length,b=0;for(r=0;r<=K;r++)t.bl_count[r]=0;for(l[2*t.heap[t.heap_max]+1]=0,a=t.heap_max+1;a<j;a++)(r=l[2*l[2*(i=t.heap[a])+1]+1]+1)>c&&(r=c,b++),l[2*i+1]=r,i>h||(t.bl_count[r]++,s=0,i>=u&&(s=_[i-u]),o=l[2*i],t.opt_len+=o*(r+s),f&&(t.static_len+=o*(d[2*i+1]+s)));if(0!==b){do{for(r=c-1;0===t.bl_count[r];)r--;t.bl_count[r]--,t.bl_count[r+1]+=2,t.bl_count[c]--,b-=2}while(b>0);for(r=c;0!==r;r--)for(i=t.bl_count[r];0!==i;)(n=t.heap[--a])>h||(l[2*n+1]!==r&&(t.opt_len+=(r-l[2*n+1])*l[2*n],l[2*n+1]=r),i--)}}function u(t,e,a){var i,n,r=new Array(K+1),s=0;for(i=1;i<=K;i++)r[i]=s=s+a[i-1]<<1;for(n=0;n<=e;n++){var o=t[2*n+1];0!==o&&(t[2*n]=d(r[o]++,o))}}function c(){var t,e,a,i,r,s=new Array(K+1);for(a=0,i=0;i<U-1;i++)for(it[i]=a,t=0;t<1<<W[i];t++)at[a++]=i;for(at[a-1]=i,r=0,i=0;i<16;i++)for(nt[i]=r,t=0;t<1<<J[i];t++)et[r++]=i;for(r>>=7;i<L;i++)for(nt[i]=r<<7,t=0;t<1<<J[i]-7;t++)et[256+r++]=i;for(e=0;e<=K;e++)s[e]=0;for(t=0;t<=143;)$[2*t+1]=8,t++,s[8]++;for(;t<=255;)$[2*t+1]=9,t++,s[9]++;for(;t<=279;)$[2*t+1]=7,t++,s[7]++;for(;t<=287;)$[2*t+1]=8,t++,s[8]++;for(u($,F+1,s),t=0;t<L;t++)tt[2*t+1]=5,tt[2*t]=d(t,5);rt=new n($,W,T+1,F,K),st=new n(tt,J,0,L,K),ot=new n(new Array(0),Q,0,H,P)}function b(t){var e;for(e=0;e<F;e++)t.dyn_ltree[2*e]=0;for(e=0;e<L;e++)t.dyn_dtree[2*e]=0;for(e=0;e<H;e++)t.bl_tree[2*e]=0;t.dyn_ltree[2*Y]=1,t.opt_len=t.static_len=0,t.last_lit=t.matches=0}function g(t){t.bi_valid>8?o(t,t.bi_buf):t.bi_valid>0&&(t.pending_buf[t.pending++]=t.bi_buf),t.bi_buf=0,t.bi_valid=0}function m(t,e,a,i){g(t),i&&(o(t,a),o(t,~a)),A.arraySet(t.pending_buf,t.window,e,a,t.pending),t.pending+=a}function w(t,e,a,i){var n=2*e,r=2*a;return t[n]<t[r]||t[n]===t[r]&&i[e]<=i[a]}function p(t,e,a){for(var i=t.heap[a],n=a<<1;n<=t.heap_len&&(n<t.heap_len&&w(e,t.heap[n+1],t.heap[n],t.depth)&&n++,!w(e,i,t.heap[n],t.depth));)t.heap[a]=t.heap[n],a=n,n<<=1;t.heap[a]=i}function v(t,e,a){var i,n,r,o,d=0;if(0!==t.last_lit)do{i=t.pending_buf[t.d_buf+2*d]<<8|t.pending_buf[t.d_buf+2*d+1],n=t.pending_buf[t.l_buf+d],d++,0===i?h(t,n,e):(h(t,(r=at[n])+T+1,e),0!==(o=W[r])&&l(t,n-=it[r],o),h(t,r=s(--i),a),0!==(o=J[r])&&l(t,i-=nt[r],o))}while(d<t.last_lit);h(t,Y,e)}function k(t,e){var a,i,n,r=e.dyn_tree,s=e.stat_desc.static_tree,o=e.stat_desc.has_stree,l=e.stat_desc.elems,h=-1;for(t.heap_len=0,t.heap_max=j,a=0;a<l;a++)0!==r[2*a]?(t.heap[++t.heap_len]=h=a,t.depth[a]=0):r[2*a+1]=0;for(;t.heap_len<2;)r[2*(n=t.heap[++t.heap_len]=h<2?++h:0)]=1,t.depth[n]=0,t.opt_len--,o&&(t.static_len-=s[2*n+1]);for(e.max_code=h,a=t.heap_len>>1;a>=1;a--)p(t,r,a);n=l;do{a=t.heap[1],t.heap[1]=t.heap[t.heap_len--],p(t,r,1),i=t.heap[1],t.heap[--t.heap_max]=a,t.heap[--t.heap_max]=i,r[2*n]=r[2*a]+r[2*i],t.depth[n]=(t.depth[a]>=t.depth[i]?t.depth[a]:t.depth[i])+1,r[2*a+1]=r[2*i+1]=n,t.heap[1]=n++,p(t,r,1)}while(t.heap_len>=2);t.heap[--t.heap_max]=t.heap[1],_(t,e),u(r,h,t.bl_count)}function y(t,e,a){var i,n,r=-1,s=e[1],o=0,l=7,h=4;for(0===s&&(l=138,h=3),e[2*(a+1)+1]=65535,i=0;i<=a;i++)n=s,s=e[2*(i+1)+1],++o<l&&n===s||(o<h?t.bl_tree[2*n]+=o:0!==n?(n!==r&&t.bl_tree[2*n]++,t.bl_tree[2*q]++):o<=10?t.bl_tree[2*G]++:t.bl_tree[2*X]++,o=0,r=n,0===s?(l=138,h=3):n===s?(l=6,h=3):(l=7,h=4))}function x(t,e,a){var i,n,r=-1,s=e[1],o=0,d=7,f=4;for(0===s&&(d=138,f=3),i=0;i<=a;i++)if(n=s,s=e[2*(i+1)+1],!(++o<d&&n===s)){if(o<f)do{h(t,n,t.bl_tree)}while(0!=--o);else 0!==n?(n!==r&&(h(t,n,t.bl_tree),o--),h(t,q,t.bl_tree),l(t,o-3,2)):o<=10?(h(t,G,t.bl_tree),l(t,o-3,3)):(h(t,X,t.bl_tree),l(t,o-11,7));o=0,r=n,0===s?(d=138,f=3):n===s?(d=6,f=3):(d=7,f=4)}}function z(t){var e;for(y(t,t.dyn_ltree,t.l_desc.max_code),y(t,t.dyn_dtree,t.d_desc.max_code),k(t,t.bl_desc),e=H-1;e>=3&&0===t.bl_tree[2*V[e]+1];e--);return t.opt_len+=3*(e+1)+5+5+4,e}function B(t,e,a,i){var n;for(l(t,e-257,5),l(t,a-1,5),l(t,i-4,4),n=0;n<i;n++)l(t,t.bl_tree[2*V[n]+1],3);x(t,t.dyn_ltree,e-1),x(t,t.dyn_dtree,a-1)}function S(t){var e,a=4093624447;for(e=0;e<=31;e++,a>>>=1)if(1&a&&0!==t.dyn_ltree[2*e])return R;if(0!==t.dyn_ltree[18]||0!==t.dyn_ltree[20]||0!==t.dyn_ltree[26])return C;for(e=32;e<T;e++)if(0!==t.dyn_ltree[2*e])return C;return R}function E(t,e,a,i){l(t,(O<<1)+(i?1:0),3),m(t,e,a,!0)}var A=t("../utils/common"),Z=4,R=0,C=1,N=2,O=0,D=1,I=2,U=29,T=256,F=T+1+U,L=30,H=19,j=2*F+1,K=15,M=16,P=7,Y=256,q=16,G=17,X=18,W=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],J=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],Q=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],V=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],$=new Array(2*(F+2));i($);var tt=new Array(2*L);i(tt);var et=new Array(512);i(et);var at=new Array(256);i(at);var it=new Array(U);i(it);var nt=new Array(L);i(nt);var rt,st,ot,lt=!1;a._tr_init=function(t){lt||(c(),lt=!0),t.l_desc=new r(t.dyn_ltree,rt),t.d_desc=new r(t.dyn_dtree,st),t.bl_desc=new r(t.bl_tree,ot),t.bi_buf=0,t.bi_valid=0,b(t)},a._tr_stored_block=E,a._tr_flush_block=function(t,e,a,i){var n,r,s=0;t.level>0?(t.strm.data_type===N&&(t.strm.data_type=S(t)),k(t,t.l_desc),k(t,t.d_desc),s=z(t),n=t.opt_len+3+7>>>3,(r=t.static_len+3+7>>>3)<=n&&(n=r)):n=r=a+5,a+4<=n&&-1!==e?E(t,e,a,i):t.strategy===Z||r===n?(l(t,(D<<1)+(i?1:0),3),v(t,$,tt)):(l(t,(I<<1)+(i?1:0),3),B(t,t.l_desc.max_code+1,t.d_desc.max_code+1,s+1),v(t,t.dyn_ltree,t.dyn_dtree)),b(t),i&&g(t)},a._tr_tally=function(t,e,a){return t.pending_buf[t.d_buf+2*t.last_lit]=e>>>8&255,t.pending_buf[t.d_buf+2*t.last_lit+1]=255&e,t.pending_buf[t.l_buf+t.last_lit]=255&a,t.last_lit++,0===e?t.dyn_ltree[2*a]++:(t.matches++,e--,t.dyn_ltree[2*(at[a]+T+1)]++,t.dyn_dtree[2*s(e)]++),t.last_lit===t.lit_bufsize-1},a._tr_align=function(t){l(t,D<<1,3),h(t,Y,$),f(t)}},{"../utils/common":3}],15:[function(t,e,a){"use strict";e.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],"/":[function(t,e,a){"use strict";var i={};(0,t("./lib/utils/common").assign)(i,t("./lib/deflate"),t("./lib/inflate"),t("./lib/zlib/constants")),e.exports=i},{"./lib/deflate":1,"./lib/inflate":2,"./lib/utils/common":3,"./lib/zlib/constants":6}]},{},[])("/")});



var mdataTheme = "mdataTheme";
var mdata = window.mdata = window.$$ = function(selector) {
	return new mdata.a(selector);
}
mdata.a = mdata.prototype.a = function(selector) {
	var jqobj;
	var j = 0;
	switch(typeof(selector)) {
		case "string":
			jqobj=document.querySelector(selector)
			break;
		case "object":
			jqobj = selector;
			break;
		case 'undefined':
			jqobj = document.body;
			break;
	}
	this.mdataTheme = ""
	this.myobject = jqobj;
	var timer;
	//下面几个animate_开头的变量，都是动画中所用到的
	this.animate_timer = [];
	var animate_style = new Array;
	var animate_value = new Array;
	var animate_time = new Array;
	var animate_speed = new Array;
	/**
	 * [css动画]
	 * @param {String} style0      [样式]
	 * @param {String} startvalue  [初始值,传入true表示当前值为初始值]
	 * @param {String} endvalue	   [要改变的值]
	 * @param {Number} time        [动画时间,毫秒级别]
	 * @param {Number} speed       [速度，默认10毫秒一帧]
	 * @param {Number} type        [0的时候endvalue为最终位置，1的时候endvalue为相对位置]
	 */
	this.animation = function(obj, style0, startvalue, endvalue, time, speed, func, type) {
		var xspeed;
		var i = 0;
		var t0, t1, dt, j_a, t, style1, style2;
		var timer;
		var that = this;
		type = (typeof(type) == "undefined") ? 0 : type;
		time = ((typeof(time) == "string") || (typeof(time) == "number")) ? time : 1000;
		speed = ((typeof(speed) == "string") || (typeof(speed) == "number")) ? speed : 10;
		if(type == 1) {
			endvalue = parseFloat(obj.style[style0]) + parseFloat(endvalue);
		}
		if(style0 == "opacity") {
			style1 = (document.addEventListener) ? 'opacity' : 'filter';
			startvalue = (startvalue > 1) ? (startvalue / 100) : startvalue;
			if(style1 == 'opacity') {
				if(obj.style[style1] == "") {
					obj.style[style1] = (typeof(startvalue) == "boolean") ? 1 : startvalue;
				};
				t0 = (typeof(startvalue) == "string") ? (parseFloat(startvalue)) : (parseFloat(obj.style[style1]));
				t0 = (t0 > 1) ? (t0 / 100) : t0;
				t1 = parseFloat((endvalue > 1) ? 1 : endvalue);
				t1 = parseFloat((endvalue < 0) ? 0 : endvalue);
				t1 = (t1 > 1) ? (t1 / 100) : t1;
			} else {
				if(obj.style[style1] == "") {
					obj.style[style1] = obj.style[style1] = (typeof(startvalue) == "boolean") ? ("alpha(opacity=100)") : (
						"alpha(opacity=" + startvalue * 100 + ")");;
				};
				try {
					t0 = (typeof(startvalue) == "string") ? (parseFloat(startvalue)) : (parseFloat(obj[style1].match(/[0-9]+/g)[0]) /
						100);
				} catch(e) {
					t0 = (typeof(startvalue) == "string") ? (parseFloat(startvalue)) : (parseFloat(obj.style.filter.match(/[0-9]+/g)[
						0]) / 100);
				}

				t0 = (t0 > 1) ? (t0 / 100) : t0;
				t1 = parseFloat((endvalue > 1) ? 1 : endvalue);
				t1 = parseFloat((endvalue < 0) ? 0 : endvalue);
				t1 = (t1 > 1) ? (t1 / 100) : t1;
			}
			t = t1 - t0;
			dt = Math.abs(t);
			j_a = (4 * dt) / (time * time);

			function opacity() {
				timer = setInterval(function() {
					var op = (parseFloat(obj.style[style1]) > 1) ? parseFloat(obj.style[style1]) / 100 : parseFloat(obj.style[
						style1]);
					if(op > 1 || op < 0 || i * speed >= time) {
						obj.style[style1] = (obj.addEventListener) ? ((t1).toFixed(2).toString()) : ("alpha(opacity=" + ((t1 * 100).toFixed(
							2)).toString() + ")");
						clearInterval(timer);
						if(typeof(func) == "function") {
							func(obj);
						}
					}
					if(t > 0) {
						if(op <= (t0 + 0.5 * t)) {
							xspeed = 0.5 * j_a * (i * speed) * (i * speed);
						} else {
							xspeed = dt - 0.5 * j_a * (time - i * speed) * (time - i * speed);
						}

						obj.style[style1] = (obj.addEventListener) ? (((t0 + xspeed).toFixed(2)).toString()) : ("alpha(opacity=" + ((
							(t0 + xspeed) * 100).toFixed(2)).toString() + ")");
					} else {
						if(op >= (t0 + 0.5 * t)) {
							xspeed = 0.5 * j_a * (i * speed) * (i * speed);
						} else {
							xspeed = dt - 0.5 * j_a * (time - i * speed) * (time - i * speed);
						}
						obj.style[style1] = (obj.addEventListener) ? (((t0 - xspeed).toFixed(2)).toString()) : ("alpha(opacity=" + ((
							(t0 - xspeed) * 100).toFixed(2)).toString() + ")");
					}
					i = i + 1;
				}, speed);
			}
			opacity();
		} else if(style0.search(/color/i) >= 0) {
			style1 = style0;
			if(obj.style[style1] == "") {
				obj.style[style1] = "rgb(0,0,0)";
			};

			var color0 = (typeof(startvalue) == "string") ? (startvalue.match(/[0-9]+/g)) : ((obj.style[style1]).match(
				/[0-9]+/g));
			var r0 = parseFloat(color0[0]);
			var g0 = parseFloat(color0[1]);
			var b0 = parseFloat(color0[2]);
			var color1 = endvalue.toString().match(/[0-9]+/g);
			var r1 = parseFloat(color1[0]);
			var g1 = parseFloat(color1[1]);
			var b1 = parseFloat(color1[2]);
			var r_c = r1 - r0;
			var g_c = g1 - g0;
			var b_c = b1 - b0;
			var dr_c = Math.abs(r1 - r0);
			var dg_c = Math.abs(g1 - g0);
			var db_c = Math.abs(b1 - b0);
			var r_a = Math.abs((dr_c * 4) / (time * time));
			var g_a = Math.abs((dg_c * 4) / (time * time));
			var b_a = Math.abs((db_c * 4) / (time * time));
			var r_ds, g_ds, b_ds, r, g, b, color, rm, gm, bm;
			timer = setInterval(function() {
				var m = obj.style[style1];
				color = m.toString().match(/[0-9]+/g);
				r = parseFloat(color[0]);
				g = parseFloat(color[1]);
				b = parseFloat(color[2]);
				if(r_c > 0) {
					if(r <= (r0 + 0.5 * dr_c)) {
						r_ds = 0.5 * r_a * (i * speed) * (i * speed);
					} else {
						r_ds = dr_c - 0.5 * r_a * (time - i * speed) * (time - i * speed);
					}
					rm = r0 + r_ds;
					rm = (rm >= 255) ? 255 : rm;
					rm = (rm <= 0) ? 0 : rm;
				} else {
					if(r < (r0 + 0.5 * dr_c)) {
						r_ds = dr_c - 0.5 * r_a * (time - i * speed) * (time - i * speed);
					} else {
						r_ds = 0.5 * r_a * (i * speed) * (i * speed);
					}
					rm = r0 - r_ds;
					rm = (rm >= 255) ? 255 : rm;
					rm = (rm <= 0) ? 0 : rm;
				}
				if(g_c > 0) {
					if(g <= (g0 + 0.5 * dg_c)) {
						g_ds = 0.5 * g_a * (i * speed) * (i * speed);
					} else {
						g_ds = dg_c - 0.5 * g_a * (time - i * speed) * (time - i * speed);
					}
					gm = g0 + g_ds;
					gm = (gm >= 255) ? 255 : gm;
					gm = (gm <= 0) ? 0 : gm;
				} else {
					if(g < (g0 + 0.5 * dg_c)) {
						g_ds = dg_c - 0.5 * g_a * (time - i * speed) * (time - i * speed);
					} else {
						g_ds = 0.5 * g_a * (i * speed) * (i * speed);
					}
					gm = g0 - g_ds;
					gm = (gm >= 255) ? 255 : gm;
					gm = (gm <= 0) ? 0 : gm;
				}
				if(b_c > 0) {
					if(b <= (b0 + 0.5 * db_c)) {
						b_ds = 0.5 * b_a * (i * speed) * (i * speed);
					} else {
						b_ds = db_c - 0.5 * b_a * (time - i * speed) * (time - i * speed);
					}
					bm = b0 + b_ds;
					bm = (bm >= 255) ? 255 : bm;
					bm = (bm <= 0) ? 0 : bm;
				} else {
					if(b < (b0 + 0.5 * db_c)) {
						b_ds = db_c - 0.5 * b_a * (time - i * speed) * (time - i * speed);
					} else {
						b_ds = 0.5 * b_a * (i * speed) * (i * speed);
					}
					bm = b0 - b_ds;
					bm = (bm >= 255) ? 255 : bm;
					bm = (bm <= 0) ? 0 : bm;
				}
				var co = "rgb(" + parseInt(rm).toString() + "," + parseInt(gm).toString() + "," + parseInt(bm).toString() + ")";
				obj.style[style0] = co.toString();
				i = i + 1;
				if(i * speed >= time) {
					clearInterval(timer);
					obj.style[style0] = endvalue.toString();
					if(typeof(func) == "function") {
						func(obj);
					}
				};
			}, speed);
		} else if(style0 == "left" || style0 == "top" || style0 == "height" || style0 == "width") {

			switch(style0) {
				case "left":
					style1 = 'offsetLeft';
					//obj.style.position = 'absolute';
					break;
				case 'top':
					style1 = 'offsetTop';
					//obj.style.position = 'absolute';
					break;
				case 'width':
					style1 = 'offsetWidth';
					break;
				case 'height':
					style1 = 'offsetHeight';
					break;
			};

			t0 = (typeof(startvalue) == "string") ? (parseFloat(startvalue)) : (parseFloat(obj[style1]));
			t1 = parseFloat(endvalue);
			t = t1 - t0;
			j_a = Math.abs((t * 4) / (time * time));
			dt = Math.abs(t);
			var i = 0;
			var vmax = 0;
			var t_half = 0;
			var s_half = 0;
			timer = setInterval(function() {
				if(t >= 0) {
					//向X或Y周正轴方向运动
					if(obj[style1] >= t1 || i * speed >= time) {
						obj.style[style0] = t1 + 'px';
						clearInterval(timer);
						if(typeof(func) == "function") {
							func(obj);
						}
					} else {
						if(obj[style1] <= (t0 + 0.5 * t)) {
							xspeed = 0.5 * j_a * (i * speed) * (i * speed);
							vmax = j_a * i * speed;
							t_half = i;
							s_half = xspeed;
						} else {
							xspeed = vmax * (i - t_half) * speed - 0.5 * j_a * (i - t_half) * (i - t_half) * speed * speed + s_half;
						}
						obj.style[style0] = t0 + xspeed + 'px';
					};
				} else {
					//向X或Y周负轴方向运动
					if(obj[style1] <= t1 || i * speed >= time) {
						obj.style[style0] = t1 + 'px';
						clearInterval(timer);
						if(typeof(func) == "function") {
							func(obj);
						}
					} else {
						if(parseFloat(obj[style1]) > (t0 + 0.5 * t)) {
							xspeed = 0.5 * j_a * (i * speed) * (i * speed);
							vmax = j_a * i * speed;
							t_half = i;
							s_half = xspeed;
						} else {
							xspeed = vmax * (i - t_half) * speed - 0.5 * j_a * (i - t_half) * (i - t_half) * speed * speed + s_half;
						};
						obj.style[style0] = t0 - xspeed + 'px';
					};
				};
				i = i + 1;
			}, speed);
		} else if(style0 == "point") {
			style1 = "left";
			style2 = 'top';
			var start = new Array();
			//obj.style.position = 'absolute';
			if(typeof(startvalue) == "string") {
				start = startvalue.toString().match(/([0-9.]+)/g);
				if(start.length = 2) {
					var left = parseFloat(start[0]);
					var top = parseFloat(start[1]);
					obj.style[style1] = left - 0.5 * parseFloat(obj.offsetWidth) - parseFloat(obj.style.paddingLeft) - parseFloat(
						obj.style.marginLeft) + 'px';
					obj.style[style2] = top - 0.5 * parseFloat(obj.offsetHeight) - parseFloat(obj.style.paddingTop) - parseFloat(obj
						.style.marginTop) + 'px';
					timer = setInterval(function() {
						if(i * speed >= time) {
							obj.style[style1] = left - 0.5 * parseFloat(obj.offsetWidth) - parseFloat(obj.style.paddingLeft) -
								parseFloat(obj.style.marginLeft) + 'px';
							obj.style[style2] = top - 0.5 * parseFloat(obj.offsetHeight) - parseFloat(obj.style.paddingTop) - parseFloat(
								obj.style.marginTop) + 'px';
							clearInterval(timer);
							if(typeof(func) == "function") {
								func(obj);
							}
						} else {
							obj.style[style1] = left - 0.5 * parseFloat(obj.offsetWidth) - parseFloat(obj.style.paddingLeft) -
								parseFloat(obj.style.marginLeft) + 'px';
							obj.style[style2] = top - 0.5 * parseFloat(obj.offsetHeight) - parseFloat(obj.style.paddingTop) - parseFloat(
								obj.style.marginTop) + 'px';
						};
						i = i + 1;
					}, speed);
				}
			}
		} else {
			style1 = style0;
			(parseFloat(obj.style[style1]) >= 0) ? 0: (obj.style[style1] = "0px");
			t0 = (typeof(startvalue) == "string") ? (parseFloat(startvalue)) : (parseFloat(obj.style[style1]));
			t1 = parseFloat(endvalue);
			t = t1 - t0;
			j_a = Math.abs((t * 4) / (time * time));
			dt = Math.abs(t);
			timer = setInterval(function() {
				if(t >= 0) {
					if(parseFloat(obj.style[style1]) >= t1 || i * speed >= time) {
						obj.style[style0] = endvalue;
						clearInterval(timer);
						if(typeof(func) == "function") {
							func(obj);
						}
					} else {
						if(parseFloat(obj.style[style1]) <= (t0 + 0.5 * t)) {
							xspeed = 0.5 * j_a * (i * speed) * (i * speed);
						} else {
							xspeed = dt - 0.5 * j_a * (time - i * speed) * (time - i * speed);
						}
						obj.style[style0] = t0 + xspeed + 'px';
					};
				} else {
					if(parseFloat(obj.style[style1]) <= t1 || i * speed >= time) {
						obj.style[style0] = endvalue;
						clearInterval(timer);
						if(typeof(func) == "function") {
							func(obj);
						}
					} else {
						if(parseFloat(obj[style1]) < (t0 + 0.5 * t)) {
							xspeed = dt - 0.5 * j_a * (time - i * speed) * (time - i * speed);
						} else {
							xspeed = 0.5 * j_a * (i * speed) * (i * speed);
						};
						obj.style[style0] = t0 - xspeed + 'px';
					};
				};
				i = i + 1;
			}, speed);
		};
		this.animate_timer.push(timer);
		return timer;
	};
	/**
	 * [css动画]
	 * @param {String} style0      [样式]
	 * @param {String} startvalue  [初始值,传入true表示当前值为初始值]
	 * @param {String} endvalue	   [要改变的值]
	 * @param {Number} time        [动画时间,毫秒级别]
	 * @param {Number} speed       [速度，默认10毫秒一帧]
	 * @param {Number} type        [0的时候endvalue为最终位置，1的时候endvalue为相对位置]
	 */
	this.animationType = function(obj, type0, startvalue, endvalue, time, speed, func, type) {
		var xspeed;
		var i = 0;
		var t0, t1, dt, j_a, t;
		var timer;
		var that = this;

		type = (typeof(type) == "undefined") ? 0 : type;
		time = ((typeof(time) == "string") || (typeof(time) == "number")) ? time : 1000;
		speed = ((typeof(speed) == "string") || (typeof(speed) == "number")) ? speed : 10;
		if(type == 1) {
			endvalue = parseFloat(obj[type0]) + parseFloat(endvalue);
		}
		if(type0 == "height" || type0 == "width" || type == "left" || type == "top") {
			t0 = (typeof(startvalue) != "boolean") ? (parseFloat(startvalue)) : (parseFloat(obj[type0]));
			t1 = parseFloat(endvalue);
			t = t1 - t0;
			j_a = Math.abs((t * 4) / (time * time));
			dt = Math.abs(t);
			var i = 0;
			var vmax = 0;
			var t_half = 0;
			var s_half = 0;
			timer = setInterval(function() {
				if(t >= 0) {
					//向X或Y周正轴方向运动
					if(parseFloat(obj[type0]) >= t1 || i * speed >= time) {
						obj[type0] = t1;
						clearInterval(timer);
						if(typeof(func) == "function") {
							func(obj);
						}
					} else {
						if(parseFloat(obj[type0]) <= (t0 + 0.5 * t)) {
							xspeed = 0.5 * j_a * (i * speed) * (i * speed);
							vmax = j_a * i * speed;
							t_half = i;
							s_half = xspeed;
						} else {
							xspeed = vmax * (i - t_half) * speed - 0.5 * j_a * (i - t_half) * (i - t_half) * speed * speed + s_half;
						}
						obj[type0] = t0 + xspeed;
					};
				} else {
					//向X或Y周负轴方向运动
					if(parseFloat(obj[type0]) <= t1 || i * speed >= time) {
						obj[type0] = t1;
						clearInterval(timer);
						if(typeof(func) == "function") {
							func(obj);
						}
					} else {
						if(parseFloat(obj[type0]) > (t0 + 0.5 * t)) {
							xspeed = 0.5 * j_a * (i * speed) * (i * speed);
							vmax = j_a * i * speed;
							t_half = i;
							s_half = xspeed;
						} else {
							xspeed = vmax * (i - t_half) * speed - 0.5 * j_a * (i - t_half) * (i - t_half) * speed * speed + s_half;
						};
						obj[type0] = t0 - xspeed;
					};
				};
				i = i + 1;
			}, speed);
		}
	}
	this.setHeight = function(obj, s) {
		var b = $$().browser();
		if(b.browser == "IE") {
			var a = s.search(/[\+\-]+/);
			if(a > -1) {
				var m = s.match(/[0-9%px]+/ig);
				var w = parseFloat(obj.parentNode.offsetHeight) * [parseInt(m[0]) / 100];
				switch(s.match(/[\+\-]+/)[0]) {
					case "-":
						w = w - parseFloat(m[1]);
						break;
					case "+":
						w = w + parseFloat(m[1]);
						break;
				}
				obj.style.height = w + "px";
			} else {
				obj.style.height = s;
			}
		} else {
			obj.style.height = "-moz-calc(" + s + ")";
			obj.style.height = "-webkit-calc(" + s + ")";
			obj.style.height = "calc(" + s + ")";
		}
	}
	this.setWidth = function(obj, s) {
		var b = $$().browser();
		if(b.browser == "IE") {
			if(s.search(/[\+\-]+/) > -1 && s.search(/%/) > -1) {
				var m = s.match(/[0-9%px]+/ig);
				var kk = obj.parentNode;
				if(kk == null) {
					kk = document.body;
				}
				var w = parseFloat(kk.offsetWidth) * [parseInt(m[0]) / 100];
				switch(s.match(/[\+\-]+/)[0]) {
					case "-":
						w = w - parseFloat(m[1]);
						break;
					case "+":
						w = w + parseFloat(m[1]);
						break;
				}
				obj.style.width = w + "px";
			} else {
				obj.style.width = s;
			}
		} else {
			obj.style.width = "-moz-calc(" + s + ")";
			obj.style.width = "-webkit-calc(" + s + ")";
			obj.style.width = "calc(" + s + ")";
		}
	}
	this.mycss0 = function(Myobject, json, value) {
		var that = this;
		switch(typeof(value)) {
			case "undefined":
				switch(typeof(json)) {
					case "object":
						for(var key in json) {
							if(key == "opacity") {
								Myobject.style.filter = "alpha(opacity=" + json[key] * 100 + "";
								Myobject.style.opacity = json[key];
							} else if(key == "className") {
								Myobject.style.className += " " + json[key];
							} else if(key == "height") {
								that.setHeight(Myobject, json[key]);
							} else if(key == "width") {
								that.setWidth(Myobject, json[key]);
							} else {

								if(json[key].search(/rgba/ig) > -1) {
									try {
										Myobject.style[key] = json[key];
									} catch(e) {
										var m = json[key].match(/[0-9.]+/g);
										var r = parseInt(m[0] * 255).toString(16);
										var g = parseInt(m[1] * 255).toString(16);
										var b = parseInt(m[2] * 255).toString(16);
										var a = parseInt(m[3] * 255).toString(16);
										r = (r.length == 1) ? ("0" + r) : r;
										g = (g.length == 1) ? ("0" + g) : g;
										b = (b.length == 1) ? ("0" + b) : b;
										a = (a.length == 1) ? ("0" + a) : a;
										Myobject.style["filter"] = "progid:DXImageTransform.Microsoft.gradient(startColorstr=#" + a + r + g + b +
											",endColorstr=#" + a + r + g + b + ")";
									}
								} else {
									Myobject.style[key] = json[key];
								}
							}
						};
						return false;
						break;
					case "string":
						switch(json) {
							case "width":
								return Myobject.offsetWidth;
								break;
							case "height":
								return Myobject.offsetHeight;
								break;
							case "left":
								return Myobject.offsetLeft;
								break;
							case "top":
								return Myobject.offsetTop;
								break;
							case "scrollLeft":
								return Myobject.scrollLeft;
								break;
							case "scrollTop":
								return Myobject.scrollTop;
								break;
							case "opacity":
								if(Myobject.addEventListener) {
									return(Myobject.style.opacity == "") ? 1 : (Myobject.style.opacity);
								} else {
									return(Myobject.style.filter == "") ? 1 : (parseFloat(Myobject.style.opacity));
								};
								break;
							default:
								return Myobject.style[json];
								break;
						};
						break;
				};
				break;
			case "string":
				if(typeof(json) == "string" && value != "") {
					if(json == "height") {
						that.setHeight(Myobject, value);
					} else if(json == "width") {
						that.setWidth(Myobject, value);
					} else {
						if(value.search(/rgba/ig) > -1) {
							try {
								Myobject.style[json] = value;
							} catch(e) {
								var m = value.match(/[0-9.]+/g);
								var r = parseInt(m[0] * 255).toString(16);
								var g = parseInt(m[1] * 255).toString(16);
								var b = parseInt(m[2] * 255).toString(16);
								var a = parseInt(m[3] * 255).toString(16);
								r = (r.length == 1) ? ("0" + r) : r;
								g = (g.length == 1) ? ("0" + g) : g;
								b = (b.length == 1) ? ("0" + b) : b;
								a = (a.length == 1) ? ("0" + a) : a;
								Myobject.style["filter"] = "progid:DXImageTransform.Microsoft.gradient(startColorstr=#" + a + r + g + b +
									",endColorstr=#" + a + r + g + b + ")";
							}
						} else {
							Myobject.style[json] = value;
						}
					}
				}
				switch(json) {
					case "width":
						return Myobject.offsetWidth;
						break;
					case "height":
						return Myobject.offsetHeight;
						break;
					case "left":
						return Myobject.offsetLeft;
						break;
					case "top":
						return Myobject.offsetTop;
						break;
					case "scrollLeft":
						return Myobject.scrollLeft;
						break;
					case "scrollTop":
						return Myobject.scrollTop;
						break;
					case "opacity":
						Myobject.style.filter = "alpha(opacity=" + value * 100 + "";
						if(typeof(window.document.addEventListener) == "function") {
							return(Myobject.style.opacity == "") ? 1 : (Myobject.style.opacity);
						} else {
							return(Myobject.style.filter == "") ? 1 : (parseFloat(Myobject.style.opacity));
						};
						break;
					default:
						return Myobject.style[json];
						break;
				};
				break;
		}
	}
	return this;
}
mdata.a.prototype.selectionobj = function() {
	return this.myobject;
}
mdata.a.prototype.defaults = function(vars, values) {
	if(typeof(vars) == "undefined") {
		return values;
	} else {
		if(vars != null) {
			return vars;
		} else {
			return values;
		}
	};
}
/*DOM元素*/
mdata.a.prototype.mycss = function(json, value, type) {
	var o = this.myobject;
	var r = null;
	var that = this;

	function a() {
		if(typeof(o.push) == "function") {
			for(i = 0; i < o.length; i++) {
				if(value == "") {
					r = o[i].style[json] = "";
				} else {
					r = that.mycss0(o[i], json, value);
				}

			}
		} else {
			type = that.defaults(type, 0);
			if(type == 0) {
				if(typeof(o.childNodes) == "object") {
					r = that.mycss0(o, json, value);
				}
			} else {
				for(var i = 0; i < o.childNodes.length; i++) {
					that.mycss0(o.childNodes[i], json, value);
				}
			}
		}
	}
	a()
	//	$$().addEvent("resize", function() {
	//		a();
	//	})
	return r;
}
mdata.a.prototype.mytype = function(json, value, type) {
	var o = this.myobject;
	var getType = -1;
	type = this.defaults(type, 0);
	switch(typeof(json)) {
		case "object":
			if(typeof(o.length) == "number") {
				for(i = 0; i < o.length; i++) {
					for(var key in json) {
						if (key=="innerHTML") {
								o[i].innerHTML=json[key]
							}else{
								o[i].setAttribute(key, json[key]);
							}
					};
				}
			} else {
				if(type == 0) {
					if(typeof(o.childNodes) == "object") {
						for(var key in json) {
							if (key=="innerHTML") {
								o.innerHTML=json[key]
							}else{
								o.setAttribute(key, json[key]);
							}
							
						};
					}
				} else {
					for(var i = 0; i < o.childNodes.length; i++) {
						for(var key in json) {
							if (key=="innerHTML") {
								o.childNodes[i].innerHTML=json[key]
							}else{
								o.childNodes[i].setAttribute(key, json[key]);
							}
							
						};
					}
				}
			};
			return 0;
			break;
		case "string":
			if(typeof(value) == "string") {
				if (key=="innerHTML") {
								o.innerHTML=value
							}else{
								o.setAttribute(json, value);
							}
				
				return 0;
			} else {
				return o[json];
			}
			break;
	}
}
mdata.a.prototype.addEle = function(objname, mystyle, mytype, txt) {
	objname = (typeof(objname) == "undefined") ? ('div') : (objname);
	var s = objname;
	if(typeof(window.document.addEventListener) == "function") {
		if(objname.search(/checkbox|file|hidden|image|password|radio|reset|submit/ig) > -1) {
			objname = "input";
		}
	} else {
		if(objname.match(/button|checkbox|file|hidden|image|password|radio|reset|submit|text/) != null) {
			objname = "input";
		}
	};
	var newobj = document.createElement(objname);
	newobj.setAttribute("tabindex", "0");
	newobj.style.zIndex = "100";
	newobj.setAttribute("mdata", mdataTheme);
	var c = "";
	newobj.style.height = newobj.style.height;
	newobj.style.width = newobj.style.width;
	$$(newobj).mycss(mystyle);
	if(s != objname) {
		newobj.setAttribute("type", s);
	}
	if(typeof(mystyle) != "undefined") {
		$$(newobj).mycss(mystyle);
	};
	if(typeof(mytype) != "undefined") {
		$$(newobj).mytype(mytype);
	};
	if(typeof(objname) != "input" && typeof(txt) == "string") {
		$$(newobj).HTML(txt);
	};
	newobj.id = this.checkId("obj");
	this.myobject.appendChild(newobj);
	return newobj;
};
mdata.a.prototype.insertAfter = function(newElement) { // newElement是要追加的元素 targetElement 是指定元素的位置 
	var targetElement = this.myobject;
	var m;
	var parent = targetElement.parentNode; // 找到指定元素的父节点
	if(typeof(newElement) == "string") {
		var p = document.createElement(newElement);
		if(parent.lastChild == targetElement) { // 判断指定元素的是否是节点中的最后一个位置 如果是的话就直接使用appendChild方法 
			m = parent.appendChild(p, targetElement);
		} else {
			m = parent.insertBefore(p, targetElement.nextSibling);
		};
		//p.innerHTML = newElement;
	};
	if(typeof(newElement) == "object") {
		if(parent.lastChild == targetElement) { // 判断指定元素的是否是节点中的最后一个位置 如果是的话就直接使用appendChild方法 
			m = parent.appendChild(newElement, targetElement);
		} else {
			m = parent.insertBefore(newElement, targetElement.nextSibling);
		};
	}
	return m;
};
mdata.a.prototype.insertBefore = function(newElement) { // newElement是要追加的元素 targetElement 是指定元素的位置 
	var targetElement = this.myobject;
	var m;
	var parent = targetElement.parentNodes; // 找到指定元素的父节点
	if(typeof(newElement) == "string") {
		var p = document.createElement(newElement);
		if(parent.lastChild == targetElement) { // 判断指定元素的是否是节点中的最后一个位置 如果是的话就直接使用appendChild方法 
			m = parent.appendChild(p, targetElement);
		} else {
			m = parent.insertBefore(p, targetElement.previousSibling);
		};
		//p.innerHTML = newElement;
	};
	if(typeof(newElement) == "object") {
		if(parent.lastChild == targetElement) { // 判断指定元素的是否是节点中的最后一个位置 如果是的话就直接使用appendChild方法 
			m = parent.appendChild(newElement, targetElement);
		} else {
			m = parent.insertBefore(newElement, targetElement.previousSibling);
		};
	}
	return m;
};
mdata.a.prototype.replaceTagName = function(newTagName) {
	var targetElement = this.myobject;
	newTagName = this.defaults(newTagName, "p");
	var i = targetElement.outerHTML;
	i = i.replace(/^<[a-zA-Z0-9_]*/, "<" + newTagName + "");
	i = i.replace(/[a-zA-Z0-9_]*>$/, newTagName + ">");
	return i;
};
mdata.a.prototype.appendMyChild = function(objname, mytype, mystyle, str) {
	var o = "<" + objname + " " + mytype + " style='" + mystyle + "' >" + str + "</" + objname + ">";
	this.myobject.innerHTML += o;
}
mdata.a.prototype.removeElem = function(obj) {

	var o = this.myobject;
	if(typeof(obj) != "object") {
		
		o.parentNode.removeChild(o);
	} else {
		if(document.body.addEvent) {
			//obj.removeNode(true);
		} else {
			obj.parentNode.removeChild(obj);
		}
	};
}
mdata.a.prototype.checkClass = function(classname) {
	var i = 0;
	while(document.getElementsByClassName(classname).length > 0) {
		classname = classname + i;
		i++;
	}
	return classname;
}
mdata.a.prototype.checkId = function(id) {
	var i = 0;
	var yid = id;
	while(document.getElementById(id)!= null) {
		id = yid + i;
		i++;
	}
	return id;
}
mdata.a.prototype.HTML = function(str) {
	var o = this.myobject;
	var a = (o.tagName == 'INPUT') ? "value" : "innerHTML";
	if(typeof(str) != "undefined") {
		o[a] = str.toString();
		return "";
	} else {
		if(o.getAttribute("mdataplacehoder")=="1"){
			return ""
		}
		return o[a];
	}
}

mdata.a.prototype.addEvent = function(eventtype, handler, type) {
	var o = this.myobject;
	var h = function(e) {
		if(type == true) {
			if(e.stopPropagation) {
				e.stopPropagation();
			} else if(window.event) {
				window.event.cancelBubble = true;
			}
		};
		handler(e);
	};
	var g = function(obj) {
		if(typeof(window.document.addEventListener) == "function") {
			obj.addEventListener(eventtype, h);
		} else {
			obj.attachEvent('on' + eventtype, h);
		};
	};
	if(o instanceof Array) {
		for(i = 0; i < o.length; i++) {
			if(eventtype == "resize") {
				window.addEventListener("resize", function() {
					handler(e);
				})
			} else {
				g(o[i]);
			}

		}
	} else {
		if(eventtype == "resize") {
			window.addEventListener("resize", function(e) {
				handler(e);
			})
		} else {
			g(o);
		}
	}
	return h;
}
mdata.a.prototype.removeEvent = function(eventtype, handler) {
	var o = this.myobject;
	if(typeof(window.document.addEventListener) == "function") {
		o.removeEventListener(eventtype, handler);
	} else {
		o.detachEvent('on' + eventtype, handler);
	}
}
mdata.a.prototype.Resize = function(func) {
	window.addEventListener("resize", function() {
		func()
	});
}
mdata.a.prototype.parent = function() {
	return this.myobject.parentNode;
}

mdata.a.prototype.unSelect = function(obj) {
	if(typeof(obj) == "undefined") {
		obj = this.myobject;
	};
	obj.style.MozUserSelect = "none";
	obj.style.mozUserSelect = "none";
	obj.style.msUserSelect = "none";
	obj.style.webkitUserSelect = "none";
	obj.setAttribute('unselectable', 'on');
};


/*公共函数*/
mdata.a.prototype.setSelectionobj = function(obj) {
	this.myobject = obj;
}
mdata.a.prototype.animate = function(json, type) {
	var o = this.myobject;
	var that = this;
	if(o instanceof Array) {
		for(i = 0; i < o.length; i++) {
			for(var s in json) {
				an(i, s)
			}
		}
	} else {
		if(typeof(o.length) == "undefined" && typeof(o) == "object") {
			for(var s in json) {
				var t = this.animation(o, s, json[s]['start'], json[s]['end'], json[s]['time'], json[s]['speed'], json[s]['func'],
					type);
				that.animate_timer.push(t);
			}
		}
	}

	function an(i, s) {
		var t = that.animation(o[i], s, json[s]['start'], json[s]['end'], json[s]['time'], json[s]['speed'], json[s]['func'],
			type);
		that.animate_timer.push(t);
	}
	return that.animate_timer;
}
mdata.a.prototype.clearAnimateTimer = function() {
	for(var i = 0; i < this.animate_timer.length; i++) {
		clearInterval(this.animate_timer[i])
	}
	this.animate_timer = [];
};
mdata.a.prototype.browserLight = function() {
	var ua, device, kernel, system, sysverson, browser, browserverson;
	ua = navigator.userAgent.toLowerCase();
	if(ua.search(/mobile/ig) > -1) {
		device="mobile"
		
		
	} else {
		device = "PC";
		
	}

	return {
		UA: ua,
		device: device
	};
}

mdata.a.prototype.curtime = function(kind) {
	var timestr;
	if(kind != 4 || kind != 5) {
		var myDate = new Date();
		var year = myDate.getFullYear(); //获取完整的年份(4位,1970-????)
		var mouth = myDate.getMonth() + 1; //获取当前月份(0-11,0代表1月)
		var day = myDate.getDate(); //获取当前日(1-31)
		var hour = myDate.getHours(); //获取当前小时数(0-23)
		var minute = myDate.getMinutes(); //获取当前分钟数(0-59)
		var second = myDate.getSeconds(); //获取当前秒数(0-59)
		var milsec = myDate.getMilliseconds(); //获取当前毫秒数(0-999)
	}
	switch(kind) {
		//20151010101010
		case 0:
			timestr = full(year, 4) + full(mouth, 2) + full(day, 2) + full(hour, 2) + full(minute, 2) + full(second, 2) + full(
				milsec, 3);
			break;
			//2015年12月23日 15分15秒122毫秒
		case 1:
			timestr = full(year, 4) + "年" + full(mouth, 2) + "月" + full(day, 2) + "日  " + full(hour, 2) + "时" + full(minute, 2) +
				"分" + full(second, 2) + "秒" + full(milsec, 3) + "毫秒";
			break;
			//2015/12/11 15:12:12.123
		case 2:
			timestr = full(year, 4) + "/" + full(mouth, 2) + "/" + full(day, 2) + " " + full(hour, 2) + ":" + full(minute, 2) +
				":" + full(second, 2) + "." + full(milsec, 3);
			break;
			//2015-15-12 15:22:23.235
		case 3:
			timestr = full(year, 4) + "-" + full(mouth, 2) + "-" + full(day, 2) + " " + full(hour, 2) + ":" + full(minute, 2) +
				":" + full(second, 2) + "." + full(milsec, 3);
			break;
		case 4:
			timestr=(new Date()).valueOf()+"";
			break;
		case 5:
			timestr = (parseInt(Date.parse(new Date())/1000)).toString();
			break;
		default:
			timestr = full(year, 4) + "-" + full(mouth, 2) + "-" + full(day, 2) + " " + full(hour, 2) + ":" + full(minute, 2) +
				":" + full(second, 2) + "." + full(milsec, 3);
			break;
	}

	function full(str, num) {
		var b = "";
		str = str.toString();
		while(str.length < num) {
			str = "0" + str;
		}

		return str;
	}
	return timestr;
}
mdata.a.prototype.inttime = function(stringTime, type) {
	var x = stringTime.match(/([0-9]+)/g);
	var m = x;
	if(x.length <= 7) {
		m.push("000");
	};
	stringTime = stringTime.replace(/[\.|\/|\:][0-9]{3}/g, "");
	stringTime = stringTime.replace(/\-/g, "/");
	var d = Date.parse(new Date(stringTime)) + parseInt(m[6]);
	var inttime = (typeof(type) == "undefined") ? parseInt(d / 1000) : d;
	return {
		inttime: d,
		fullyear: m[0],
		fullmonth: m[1],
		fullday: m[2],
		fullhour: m[3],
		fullminute: m[4],
		fullsecond: m[5],
		fullmil: m[6],
		year: parseInt(m[0]),
		month: parseInt(m[1]),
		day: parseInt(m[2]),
		hour: parseInt(m[3]),
		minute: parseInt(m[4]),
		second: parseInt(m[5]),
		mil: parseInt(m[6])
	}
}
mdata.a.prototype.strtime = function(inttime, type) {
	var d = new Date().setTime(parseInt(inttime));
	var m = new Date(d);
	var year = m.getFullYear();
	var month = parseInt(m.getMonth()) + 1;
	var day = parseInt(m.getDate());
	var hour = parseInt(m.getHours());
	var minute = parseInt(m.getMinutes());
	var second = parseInt(m.getSeconds());
	var mil = parseInt(m.getMilliseconds());
	var strtime;
	type = (typeof(type) == "undefined") ? 0 : type;
	switch(type) {
		case 0:
			strtime = full(year, 4) + "-" + full(month, 2) + "-" + full(day, 2) + " " + full(hour, 2) + ":" + full(minute, 2) +
				":" + full(second, 2) + "." + full(mil, 3);
			break;
		case 1:
			strtime = full(year, 4) + "/" + full(month, 2) + "/" + full(day, 2) + " " + full(hour, 2) + ":" + full(minute, 2) +
				":" + full(second, 2) + "." + full(mil, 3);
			break;
		case 2:
			strtime = full(year, 4) + "年" + full(month, 2) + "月" + full(day, 2) + "日" + full(hour, 2) + "时" + full(minute, 2) +
				"分" + full(second, 2) + "秒" + full(mil, 3) + "毫秒";
			break;
		default:
			strtime = full(year, 4) + "-" + full(month, 2) + "-" + full(day, 2) + " " + full(hour, 2) + ":" + full(minute, 2) +
				":" + full(second, 2) + "." + full(mil, 3);
			break;
	}

	function full(str, num) {
		var b = "";
		str = str + "";
		for(i = 0; i < (num - str.length); i++) {
			b = b + "0";
		}
		return b + str;
	}
	return {
		"strtime": strtime,
		"fullyear": year,
		"fullmonth": full(month, 2),
		"fullday": full(day, 2),
		"fullhour": full(hour, 2),
		"fullminute": full(minute, 2),
		"fullsecond": full(second, 2),
		"fullmil": full(mil, 2),
		"year": year,
		"month": parseInt(month),
		"day": parseInt(day),
		"hour": parseInt(hour),
		"minute": parseInt(minute),
		"second": parseInt(second),
		"mil": parseInt(mil)
	}
}

mdata.a.prototype.getBrowerClientSize = function() {
	return {
		"height": document.documentElement.clientHeight,
		"width": document.documentElement.clientWidth
	}
}
mdata.a.prototype.getBrowerSize = function() {
	return {
		"width": window.screen.availWidth,
		"height": window.screen.availHeight
	}
}
mdata.a.prototype.getScroll = function() {
	return document.documentElement.scrollTop;
}
mdata.a.prototype.getMousePosition = function(event) {
	var mouse = event || window.event;
	var scrollX = document.documentElement.scrollLeft || document.body.scrollLeft;
	var scrollY = document.documentElement.scrollTop || document.body.scrollTop;
	var x = mouse.pageX || mouse.clientX + scrollX;
	var y = mouse.pageY || mouse.clientY + scrollY;
	return {
		'x': x,
		'y': y,
		'button': mouse.button
	}
}
mdata.a.prototype.ajax_post = function(config) {
	var browser = navigator.appName;
	var xmlhttp;
	var encodeUrlEnable=config["encodeUrlEnable"];
	var url=config["url"];
	var str=config["str"];
	var response=config["response"];
	var func=config["func"];
	var otherfunc=config["otherfunc"];
	var zipEnable=config["zipEnable"];
	var freefunc=config["freefunc"];
	if(browser == "Microsoft Internet Explorer") {
		xmlhttp = new ActiveXObject("Microsoft.XMLHttp");
	} else {
		xmlhttp = new XMLHttpRequest();
	}
	xmlhttp.open("POST", url, true);
	try{
		freefunc(xmlhttp)
	}catch(e){
		//TODO handle the exception
	}
	xmlhttp.setRequestHeader("Content-type", "text/json");
	var smm=str;
	try{
		if (encodeUrlEnable==true) {
			smm=str;
		} else{
			
		}
	}catch(e){
		//TODO handle the exception
	}
	try{
		
		if (zipEnable==true) {
			var sss=$$().zip().zip(smm);
			xmlhttp.send(sss);
		} else{
			xmlhttp.send(smm);
		}
	}catch(e){
		//TODO handle the exception
		xmlhttp.send(smm);
	}
	
	try{
		for (var i in func) {
			try{
				if (i=="readystatechange") {					
					$$(xmlhttp).addEvent("readystatechange",function(e){	
						if(typeof(otherfunc) == "function") {
							otherfunc(xmlhttp);
						};
						if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {							
							var res=xmlhttp.responseText
							try{
								if (zipEnable==true) {
									res=$$().zip().unzip(res);
								}
							}catch(e){
								//TODO handle the exception
							}
							if(typeof(response) == "object") {
								response[0] = res;
							};
							try{
								func[i](res);
							}catch(e){
								//TODO handle the exception
								//console.log(e)
							}
						}
					})
				}else{
					$$(xmlhttp).addEvent(i,function(e){
						func[i](e)
					})
				}
				
			}catch(e){
				//TODO handle the exception
				//console.log(e)
			}
		}
	}catch(e){
		//TODO handle the exception
	}
}
mdata.a.prototype.reg = function(str, regstr, index) {
	index = (typeof(index) == "undefined") ? 0 : index;
	var i = parseInt(index);
	if(i == -2) {
		var m = str.match(regstr);
		return m;
	} else if(i == -1) {
		return str.search(regstr);
	} else if(i >= 0) {
		var m = str.match(regstr);
		return(m != null && m.length > i) ? m[i] : "undefined";
	}
}
mdata.a.prototype.getEleToBodyPosition = function(objects,debug) {
	if(typeof(objects) != "object") {
		objects = this.myobject;
	};
	return $(objects).offset();
}

/*基础插件*/
mdata.a.prototype.addElem = function(objname, type, value, str) {
	objname = (typeof(objname) == "undefined") ? ('div') : (objname);
	var s = objname;
	var obj1 = 0;
	var strobj;
	var o = this.myobject;
	//创建一个外壳
	var box = document.createElement("div");
	box.style.display = "inline-block";
	box.style.position = "relative";
	box.setAttribute("tabindex", "0");
	box.id = this.checkId("obj");
	o.appendChild(box);
	//开始创建删除元素
	type = this.defaults(type, 0);
	//type=(typeof(type)=="undefined")?("删除"):type;
	if(type != 0) {
		var delfv = document.createElement("div");
		delfv.style.width = "100%";
		delfv.style.height = "20%";
		delfv.style.position = "absolute";
		delfv.style.zIndex = 2;
		delfv.style.top = "0";
		delfv.style.left = "0";
		delfv.style.textAlign = "right";
		box.appendChild(delfv);

		var del = document.createElement("span");
		del.innerHTML = "删除";
		delfv.appendChild(del);
		del.style.display = "none";
		del.style.color = "dodgerblue";
		del.style.cursor = "default";

		$$(box).addEvent("mouseenter", function() {
			del.style.display = "inline";
			delfv.style.display = "inline";
		})
		$$(box).addEvent("mouseleave", function() {
			del.style.display = "none";
			delfv.style.display = "none";
		})
		$$(del).addEvent("click", function() {
			o.removeChild(box);
		});
	}
	//开始创建主元素
	if(document.body.addEventListener) {
		if(objname.search(/checkbox|file|hidden|image|password|radio|reset|submit/ig) > -1) {
			objname = "input";
		}
		var obje = document.createElement(objname);
		obje.style.tabIndex = '0';
		if(s != objname) {
			obje.setAttribute("type", s);
		}
		box.appendChild(obje);
		var a = (obje.name == 'input') ? "value" : "innerHTML";
		if(typeof(value) != "undefined" && value != "") {
			obje[a] = value.toString();
		}
	} else {
		if(objname.match(/button|checkbox|file|hidden|image|password|radio|reset|submit|text/) != null) {
			obj1 = objname;
			objname = "input";
		}
		var obje = document.createElement(objname);
		obje.style.tabIndex = '0';
		if(s != objname) {
			obje.setAttribute("type", s);
		}
		if(obj1 != 0) {
			obje.setAttribute('type', "button");
			obje.setAttribute('value', value.toString());
		}
		box.appendChild(obje);
	};
	//开始创建字符串元素
	str = (typeof(str) == "undefined") ? ("") : str;
	if(str != "") {
		var delf = document.createElement("div");
		delf.style.width = "100%";
		delf.style.position = "absolute";
		delf.style.zIndex = 2;
		delf.style.left = "0";
		delf.style.backgroundColor = "white";
		delf.style.textAlign = "center";
		delf.style.height = "10%";
		box.appendChild(delf);

		strobj = document.createElement("span");
		strobj.innerHTML = str;
		strobj.style.cursor = "default";
		delf.appendChild(strobj);
		strobj.style.cursor = "default";
		strobj.style.display = "none";

		$$(box).addEvent("mouseenter", function() {
			delf.style.display = "inline";
			strobj.style.display = "inline";
		})
		$$(box).addEvent("mouseleave", function() {
			delf.style.display = "none";
			strobj.style.display = "none";
		})
	};
	var that = this;
	$$(obje).typeChange("offsetWidth", function() {
		if(type != 0) {
			var delvh = parseFloat(obje.offsetHeight) * 0.2;
			var delvw = delfv.offsetWidth;
			var delva = new Array(delvw, delvh);
		};
		if(str != "") {
			var fff = delf.offsetHeight;
			var a = new Array(box.offsetWidth, fff);
			delf.style.top = obje.offsetHeight - parseFloat(fff) + "px";
		};
	});
	return obje;
}

mdata.a.prototype.tips = function(positionObj, txt) {
	var d = document.createElement("div");
	d.style.zIndex = "9999";
	d.innerHTML = txt;
	d.style.position = "absolute";
	d.style.border = "1px solid gray";
	d.style.display = "none";
	d.style.backgroundColor = "black";
	d.style.fontSize = "12px";
	var siz = this.getFontSize("12px", txt);
	d.style.width = siz.width * 1.1 + "px";
	d.style.height = siz.height * 1.2 + "px";
	d.style.textAlign = "center";
	d.style.color = "white";
	if(typeof(positionObj) == "object") {
		positionObj.appendChild(d);
	} else {
		document.body.appendChild(d);
	}
	var o = this.myobject;
	
	$$(o).addEvent("mouseenter", function() {
		let pp=$$(o).getEleToBodyPosition();
		d.style.top = pp.top + o.offsetHeight + "px";
		d.style.left = pp.left + "px";
		d.style.display = "inline-block";
		setTimeout(function() {
			d.style.display = "none";
		}, 1500);
	})
	$$(o).addEvent("mouseleave", function() {
		d.style.display = "none";
	});
	return d;
}
/**
 * 创建表格
 * @param {Object} fatherobj         父元素
 * @param {Object} trheightarray     tr高度数组
 * @param {Object} tdwidtharray      td宽度数组
 **/
mdata.a.prototype.create_table = function(fatherobj, trheightarrayA, tdwidtharrayA, func, mycss0,enable) {
	var obj;
	if(fatherobj && typeof(fatherobj) == "object") {
		obj = fatherobj;
	} else {
		obj = this.myobject;
	};
	var to = document.createElement("table");
	to.setAttribute("cellspacing","0");
	to.setAttribute("cellpadding","0")
	obj.appendChild(to);
	if (fatherobj!=1) {
		if (this.defaults(enable,1)==1) {
			to.style.height = "100%";
			to.style.width = "100%";
			to.style.textAlign = "center";
		}
		
		to.style.tableLayout = "fixed";
		to.setAttribute("cellspacing", "0");
		to.setAttribute("cellpadding", "0");
		to.style.padding = "0";
		to.style.margin = "0";
		to.style.overflow = "hidden";
		to.style.cursor = "default";
		to.style.borderCollapse = "collapse";
	}
	
	to.tds = [];
//	to.style.position = "relative";
	if(typeof(mycss0) != "undefined") {
		$$(to).mycss(mycss0);
	}
	
	var trheightarray=[];
	try{
		if (typeof(trheightarrayA)=="number") {
			for (var i=0;i<trheightarrayA;i++) {
				trheightarray.push("");
			}
		}else{
			trheightarray=trheightarrayA
		}
	}catch(e){
		//TODO handle the exception
		////console.log(e)
	}
	try{
		var tdwidtharray=[];
		if (typeof(tdwidtharrayA)=="number") {
			for (var i=0;i<tdwidtharrayA;i++) {
				tdwidtharray.push("");
			}
		}else{
			tdwidtharray=tdwidtharrayA;
		}
	}catch(e){
		//TODO handle the exception
		//console.log(e)
	}
	var trobj;
	var tdobj;
	var tr = [];
	if(typeof(trheightarray) == "object" && trheightarray.length > 0) {
		for(i = 0; i < trheightarray.length; i++) {
			trobj = document.createElement("tr");
			to.appendChild(trobj);
			trobj.setAttribute("tabindex", 0);
			if (fatherobj!=1) {
				trobj.style.width = "100%";
			}
			
			typecss("tr", trheightarray[i], trobj);
			tr.push(trobj);
			tr[tr.length - 1].td = [];
			///$$(trobj).mycss("height", x(trheightarray[i]));
			if(typeof(tdwidtharray) == "object" && ($$().JSONlength(tdwidtharray)) > 0) {
				if(tdwidtharray["tr0"]) {
					for(j = 0; j < tdwidtharray["tr" + i].length; j++) {
						tdobj = document.createElement("td");
						tdobj.setAttribute("tabindex", 0);
						typecss("td", tdwidtharray["tr" + i][j], tdobj);
						trobj.appendChild(tdobj);
						to.tds.push(tdobj);
						tr[tr.length - 1].td[j] = tdobj;
					};
				} else {
					for(j = 0; j < tdwidtharray.length; j++) {
						tdobj = document.createElement("td");
						tdobj.setAttribute("tabindex", 0);
						typecss("td", tdwidtharray[j], tdobj);
						trobj.appendChild(tdobj);
						to.tds.push(tdobj);
						tr[tr.length - 1].td[j] = tdobj;
					};
				}

			};
			if(typeof(tdwidtharray) == "string") {
				tdobj = document.createElement("td");
				tdobj.setAttribute("tabindex", 0);
				if (fatherobj!=1) {
					tdobj.style.width = "100%";
				}
				typecss("td", tdwidtharray, tdobj);
				//$$(tdobj).mycss("width", x(tdwidtharray));
				trobj.appendChild(tdobj);
				to.tds.push(tdobj);
				tr[tr.length - 1].td[0] = tdobj;
			};
		};
	} else if(typeof(trheightarray) == "string") {
		trobj = document.createElement("tr");
		to.appendChild(trobj);
		trobj.setAttribute("tabindex", 0);
		typecss("tr", trheightarray, trobj);
		tr.push(trobj);
		tr[tr.length - 1].td = [];
		//$$(trobj).mycss("height", x(trheightarray));
		if(typeof(tdwidtharray) == "object") {
			for(j = 0; j < tdwidtharray["tr0"].length; j++) {
				tdobj = document.createElement("td");
				trobj.appendChild(tdobj);
				tdobj.setAttribute("tabindex", 0);
				typecss("td", tdwidtharray["tr0"][j], tdobj);
				//$$(tdobj).mycss("width", x(tdwidtharray["tr0"][j]));
				to.tds.push(tdobj);
				tr[tr.length - 1].td[j] = tdobj;
			}
		} else {
			tdobj = document.createElement("td");
			trobj.appendChild(tdobj);
			tdobj.setAttribute("tabindex", 0);
			typecss("td", tdwidtharray, tdobj);
			$$(tdobj).mycss("width", x(tdwidtharray));
			to.tds.push(tdobj);
			tr[tr.length - 1].td[0] = tdobj;
		}
	}

	function x(str) {
		var re = new RegExp(/^[^t^s]*/);

		var m = re.exec(str);
		return m[0];
	};

	function typecss(ty, styles, obj) {
		try {
			if (styles.length<=0) {
				return;
			}
			x = styles.match(/([^{]*)/)[0];
			if(ty == "tr") {
				obj.style.height = x;
			}
			if(ty == "td") {
				obj.style.width = x;
			}
			x = styles.replace(x, "");
			var s = eval('(' + x + ')');
			for(var i in s["type"]) {
				if(i == "innerHTML") {
					obj.innerHTML = s["type"][i];
				} else {
					obj.setAttribute(i,s["type"][i]);
				}
			}
			for(var i in s["css"]) {
				obj.style[i] = s["css"][i];
			}
		} catch(e) {
			//TODO handle the exception
			if(ty == "tr") {
				obj.style.height = styles;
			}
			if(ty == "td") {
				obj.style.width = styles;
			}
		}
	}

	to.tr = tr;

	if(typeof(func) == "function") {
		for(var i = 0; i < to.tr.length; i++) {
			for(var j = 0; j < to.tr[i].td.length; j++) {
				(function(i, j) {
					$$(to.tr[i].td[j]).addEvent("click", function() {
						func(i, j)
					})
				})(i, j)
			}
		}
	}
	//$$().pasteTable(to);
	return to;
};
mdata.a.prototype.width_height = function(va) {
	if(typeof(va) == "number") {
		if(va <= 1) {
			va = va * 100 + '%';
		} else {
			va = va + 'px';
		};
	} else if(typeof(va) == "string") {
		va = va;
	} else if(typeof(va) == "undefined") {
		va = "";
	}
	return va;
};
mdata.a.prototype.JSONlength = function(jsonobj) {
	var size = 0,
		key;
	for(key in jsonobj) {
		if(jsonobj.hasOwnProperty(key)) size++;
	}
	return size;
}
mdata.a.prototype.guid10 = function() {
	var str='xxxxxxxxxx'.replace(/[xy]/g, function(c) {
		var r = Math.random() * 16 | 0,
			v = c == 'x' ? r : (r & 0x3 | 0x8);
		return v.toString(16);
	});
	return str
};
mdata.a.prototype.guid = function() {
	var str='xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
		var r = Math.random() * 16 | 0,
			v = c == 'x' ? r : (r & 0x3 | 0x8);
		return v.toString(16);
	});
	str=str+"-"+$$().curtime(4);
	return str
};

mdata.a.prototype.getUrlString = function(name) {
//	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
//	var r = window.location.search.substr(1).match(reg);
//	if(r != null) return unescape(r[2]);
//	return null;
	// 获取参数
    var url = window.location.search;
    // 正则筛选地址栏
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    // 匹配目标参数
    var result = url.substr(1).match(reg);
    //返回参数值
    return result ? decodeURIComponent(result[2]) : "";
}
mdata.a.prototype.fullScreen = function(obj) {

	var requestFullScreen = function(element) {
		// 判断各种浏览器，找到正确的方法
		var requestMethod = element.requestFullScreen || //W3C
			element.webkitRequestFullScreen || //FireFox
			element.mozRequestFullScreen || //Chrome等
			element.msRequestFullScreen; //IE11
		if(requestMethod) {
			requestMethod.call(element);
		} else if(typeof window.ActiveXObject !== "undefined") { //for Internet Explorer
			var wscript = new ActiveXObject("WScript.Shell");
			if(wscript !== null) {
				wscript.SendKeys("{F11}");
			}
		}
	}
	//退出全屏
	var exitFullscreen = function() {
		// 判断各种浏览器，找到正确的方法
		var exitMethod = document.exitFullscreen || //W3C
			document.mozCancelFullScreen || //FireFox
			document.webkitExitFullscreen || //Chrome等
			document.webkitExitFullscreen; //IE11
		if(exitMethod) {
			exitMethod.call(document);
		} else if(typeof window.ActiveXObject !== "undefined") { //for Internet Explorer
			var wscript = new ActiveXObject("WScript.Shell");
			if(wscript !== null) {
				wscript.SendKeys("{F11}");
			}
		}
	}
	var checkFull = function() {
		var isFull = document.fullscreenEnabled || window.fullScreen || document.webkitIsFullScreen || document.msFullscreenEnabled;
		//to fix : false || undefined == undefined
		if(isFull === undefined) {
			isFull = false;
		}
		return isFull;
	}
	if(typeof(obj) != "object") {
		obj = document.documentElement
	} else {
		obj.style.width = "100%";
		obj.style.height = "100%";
		obj.style.overflowY = "scroll";
		requestFullScreen(obj); // 某个页面元素
	}
	if(checkFull()) {
		exitFullscreen();
	} else {
		requestFullScreen(obj); // 整个网页
	}
}



mdata.a.prototype.zip=function(){
	function handleCodePoints(array) {
		var CHUNK_SIZE = 0x8000; // arbitrary number here, not too small, not too big
		var index = 0;
		var length = array.length;
		var result = '';
		var slice;
		var arr = [];
		for(var i = 0, _i = array.length; i < _i; i++) {
			arr[i] = array[i];
		}
		while(index < length) {
			slice = arr.slice(index, Math.min(index + CHUNK_SIZE, length)); // `Math.min` is not really necessary here I think
			result += String.fromCharCode.apply(null, slice);
			index += CHUNK_SIZE;
		}
		return result;
	}
	this.unzip=function(b64Data) {
		var strData = window.atob(b64Data);
		// Convert binary string to character-number array
		var charData = strData.split('').map(function(x) {
			return x.charCodeAt(0);
		});
		// Turn number array into byte-array
		var binData = new Uint8Array(charData);
		// // unzip
		var data = pako.inflate(binData);
		// Convert gunzipped byteArray back to ascii string:
		var strData = handleCodePoints(new Uint16Array(data)); //注意事项3会解释
		//strData   = String.fromCharCode.apply(null, new Uint16Array(data));
		return strData;
	}
	
	this.zip=function(str) {
		var binaryString = pako.gzip(str, { to: 'string' });
		return btoa(binaryString);
// 		var s = pako.gzip(encodeURIComponent(str), {
// 			to: 'string'
// 		})
// 		return decodeURIComponent(str)
	}
	return this;
}

mdata.a.prototype.getJSONlength=function(jsonvalue){
	var i=0;
	for (var key in jsonvalue) {
		i++
	}
	return i;
}



