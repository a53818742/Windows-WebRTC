
/*
 * MD5加密
 * 
 * 
 * 
 */

 
(function(factory){if(typeof exports==="object"){module.exports=factory()}else if(typeof define==="function"&&define.amd){define(factory)}else{var glob;try{glob=window}catch(e){glob=self}glob.SparkMD5=factory()}})(function(undefined){"use strict";var add32=function(a,b){return a+b&4294967295},hex_chr=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];function cmn(q,a,b,x,s,t){a=add32(add32(a,q),add32(x,t));return add32(a<<s|a>>>32-s,b)}function md5cycle(x,k){var a=x[0],b=x[1],c=x[2],d=x[3];a+=(b&c|~b&d)+k[0]-680876936|0;a=(a<<7|a>>>25)+b|0;d+=(a&b|~a&c)+k[1]-389564586|0;d=(d<<12|d>>>20)+a|0;c+=(d&a|~d&b)+k[2]+606105819|0;c=(c<<17|c>>>15)+d|0;b+=(c&d|~c&a)+k[3]-1044525330|0;b=(b<<22|b>>>10)+c|0;a+=(b&c|~b&d)+k[4]-176418897|0;a=(a<<7|a>>>25)+b|0;d+=(a&b|~a&c)+k[5]+1200080426|0;d=(d<<12|d>>>20)+a|0;c+=(d&a|~d&b)+k[6]-1473231341|0;c=(c<<17|c>>>15)+d|0;b+=(c&d|~c&a)+k[7]-45705983|0;b=(b<<22|b>>>10)+c|0;a+=(b&c|~b&d)+k[8]+1770035416|0;a=(a<<7|a>>>25)+b|0;d+=(a&b|~a&c)+k[9]-1958414417|0;d=(d<<12|d>>>20)+a|0;c+=(d&a|~d&b)+k[10]-42063|0;c=(c<<17|c>>>15)+d|0;b+=(c&d|~c&a)+k[11]-1990404162|0;b=(b<<22|b>>>10)+c|0;a+=(b&c|~b&d)+k[12]+1804603682|0;a=(a<<7|a>>>25)+b|0;d+=(a&b|~a&c)+k[13]-40341101|0;d=(d<<12|d>>>20)+a|0;c+=(d&a|~d&b)+k[14]-1502002290|0;c=(c<<17|c>>>15)+d|0;b+=(c&d|~c&a)+k[15]+1236535329|0;b=(b<<22|b>>>10)+c|0;a+=(b&d|c&~d)+k[1]-165796510|0;a=(a<<5|a>>>27)+b|0;d+=(a&c|b&~c)+k[6]-1069501632|0;d=(d<<9|d>>>23)+a|0;c+=(d&b|a&~b)+k[11]+643717713|0;c=(c<<14|c>>>18)+d|0;b+=(c&a|d&~a)+k[0]-373897302|0;b=(b<<20|b>>>12)+c|0;a+=(b&d|c&~d)+k[5]-701558691|0;a=(a<<5|a>>>27)+b|0;d+=(a&c|b&~c)+k[10]+38016083|0;d=(d<<9|d>>>23)+a|0;c+=(d&b|a&~b)+k[15]-660478335|0;c=(c<<14|c>>>18)+d|0;b+=(c&a|d&~a)+k[4]-405537848|0;b=(b<<20|b>>>12)+c|0;a+=(b&d|c&~d)+k[9]+568446438|0;a=(a<<5|a>>>27)+b|0;d+=(a&c|b&~c)+k[14]-1019803690|0;d=(d<<9|d>>>23)+a|0;c+=(d&b|a&~b)+k[3]-187363961|0;c=(c<<14|c>>>18)+d|0;b+=(c&a|d&~a)+k[8]+1163531501|0;b=(b<<20|b>>>12)+c|0;a+=(b&d|c&~d)+k[13]-1444681467|0;a=(a<<5|a>>>27)+b|0;d+=(a&c|b&~c)+k[2]-51403784|0;d=(d<<9|d>>>23)+a|0;c+=(d&b|a&~b)+k[7]+1735328473|0;c=(c<<14|c>>>18)+d|0;b+=(c&a|d&~a)+k[12]-1926607734|0;b=(b<<20|b>>>12)+c|0;a+=(b^c^d)+k[5]-378558|0;a=(a<<4|a>>>28)+b|0;d+=(a^b^c)+k[8]-2022574463|0;d=(d<<11|d>>>21)+a|0;c+=(d^a^b)+k[11]+1839030562|0;c=(c<<16|c>>>16)+d|0;b+=(c^d^a)+k[14]-35309556|0;b=(b<<23|b>>>9)+c|0;a+=(b^c^d)+k[1]-1530992060|0;a=(a<<4|a>>>28)+b|0;d+=(a^b^c)+k[4]+1272893353|0;d=(d<<11|d>>>21)+a|0;c+=(d^a^b)+k[7]-155497632|0;c=(c<<16|c>>>16)+d|0;b+=(c^d^a)+k[10]-1094730640|0;b=(b<<23|b>>>9)+c|0;a+=(b^c^d)+k[13]+681279174|0;a=(a<<4|a>>>28)+b|0;d+=(a^b^c)+k[0]-358537222|0;d=(d<<11|d>>>21)+a|0;c+=(d^a^b)+k[3]-722521979|0;c=(c<<16|c>>>16)+d|0;b+=(c^d^a)+k[6]+76029189|0;b=(b<<23|b>>>9)+c|0;a+=(b^c^d)+k[9]-640364487|0;a=(a<<4|a>>>28)+b|0;d+=(a^b^c)+k[12]-421815835|0;d=(d<<11|d>>>21)+a|0;c+=(d^a^b)+k[15]+530742520|0;c=(c<<16|c>>>16)+d|0;b+=(c^d^a)+k[2]-995338651|0;b=(b<<23|b>>>9)+c|0;a+=(c^(b|~d))+k[0]-198630844|0;a=(a<<6|a>>>26)+b|0;d+=(b^(a|~c))+k[7]+1126891415|0;d=(d<<10|d>>>22)+a|0;c+=(a^(d|~b))+k[14]-1416354905|0;c=(c<<15|c>>>17)+d|0;b+=(d^(c|~a))+k[5]-57434055|0;b=(b<<21|b>>>11)+c|0;a+=(c^(b|~d))+k[12]+1700485571|0;a=(a<<6|a>>>26)+b|0;d+=(b^(a|~c))+k[3]-1894986606|0;d=(d<<10|d>>>22)+a|0;c+=(a^(d|~b))+k[10]-1051523|0;c=(c<<15|c>>>17)+d|0;b+=(d^(c|~a))+k[1]-2054922799|0;b=(b<<21|b>>>11)+c|0;a+=(c^(b|~d))+k[8]+1873313359|0;a=(a<<6|a>>>26)+b|0;d+=(b^(a|~c))+k[15]-30611744|0;d=(d<<10|d>>>22)+a|0;c+=(a^(d|~b))+k[6]-1560198380|0;c=(c<<15|c>>>17)+d|0;b+=(d^(c|~a))+k[13]+1309151649|0;b=(b<<21|b>>>11)+c|0;a+=(c^(b|~d))+k[4]-145523070|0;a=(a<<6|a>>>26)+b|0;d+=(b^(a|~c))+k[11]-1120210379|0;d=(d<<10|d>>>22)+a|0;c+=(a^(d|~b))+k[2]+718787259|0;c=(c<<15|c>>>17)+d|0;b+=(d^(c|~a))+k[9]-343485551|0;b=(b<<21|b>>>11)+c|0;x[0]=a+x[0]|0;x[1]=b+x[1]|0;x[2]=c+x[2]|0;x[3]=d+x[3]|0}function md5blk(s){var md5blks=[],i;for(i=0;i<64;i+=4){md5blks[i>>2]=s.charCodeAt(i)+(s.charCodeAt(i+1)<<8)+(s.charCodeAt(i+2)<<16)+(s.charCodeAt(i+3)<<24)}return md5blks}function md5blk_array(a){var md5blks=[],i;for(i=0;i<64;i+=4){md5blks[i>>2]=a[i]+(a[i+1]<<8)+(a[i+2]<<16)+(a[i+3]<<24)}return md5blks}function md51(s){var n=s.length,state=[1732584193,-271733879,-1732584194,271733878],i,length,tail,tmp,lo,hi;for(i=64;i<=n;i+=64){md5cycle(state,md5blk(s.substring(i-64,i)))}s=s.substring(i-64);length=s.length;tail=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];for(i=0;i<length;i+=1){tail[i>>2]|=s.charCodeAt(i)<<(i%4<<3)}tail[i>>2]|=128<<(i%4<<3);if(i>55){md5cycle(state,tail);for(i=0;i<16;i+=1){tail[i]=0}}tmp=n*8;tmp=tmp.toString(16).match(/(.*?)(.{0,8})$/);lo=parseInt(tmp[2],16);hi=parseInt(tmp[1],16)||0;tail[14]=lo;tail[15]=hi;md5cycle(state,tail);return state}function md51_array(a){var n=a.length,state=[1732584193,-271733879,-1732584194,271733878],i,length,tail,tmp,lo,hi;for(i=64;i<=n;i+=64){md5cycle(state,md5blk_array(a.subarray(i-64,i)))}a=i-64<n?a.subarray(i-64):new Uint8Array(0);length=a.length;tail=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];for(i=0;i<length;i+=1){tail[i>>2]|=a[i]<<(i%4<<3)}tail[i>>2]|=128<<(i%4<<3);if(i>55){md5cycle(state,tail);for(i=0;i<16;i+=1){tail[i]=0}}tmp=n*8;tmp=tmp.toString(16).match(/(.*?)(.{0,8})$/);lo=parseInt(tmp[2],16);hi=parseInt(tmp[1],16)||0;tail[14]=lo;tail[15]=hi;md5cycle(state,tail);return state}function rhex(n){var s="",j;for(j=0;j<4;j+=1){s+=hex_chr[n>>j*8+4&15]+hex_chr[n>>j*8&15]}return s}function hex(x){var i;for(i=0;i<x.length;i+=1){x[i]=rhex(x[i])}return x.join("")}if(hex(md51("hello"))!=="5d41402abc4b2a76b9719d911017c592"){add32=function(x,y){var lsw=(x&65535)+(y&65535),msw=(x>>16)+(y>>16)+(lsw>>16);return msw<<16|lsw&65535}}if(typeof ArrayBuffer!=="undefined"&&!ArrayBuffer.prototype.slice){(function(){function clamp(val,length){val=val|0||0;if(val<0){return Math.max(val+length,0)}return Math.min(val,length)}ArrayBuffer.prototype.slice=function(from,to){var length=this.byteLength,begin=clamp(from,length),end=length,num,target,targetArray,sourceArray;if(to!==undefined){end=clamp(to,length)}if(begin>end){return new ArrayBuffer(0)}num=end-begin;target=new ArrayBuffer(num);targetArray=new Uint8Array(target);sourceArray=new Uint8Array(this,begin,num);targetArray.set(sourceArray);return target}})()}function toUtf8(str){if(/[\u0080-\uFFFF]/.test(str)){str=unescape(encodeURIComponent(str))}return str}function utf8Str2ArrayBuffer(str,returnUInt8Array){var length=str.length,buff=new ArrayBuffer(length),arr=new Uint8Array(buff),i;for(i=0;i<length;i+=1){arr[i]=str.charCodeAt(i)}return returnUInt8Array?arr:buff}function arrayBuffer2Utf8Str(buff){return String.fromCharCode.apply(null,new Uint8Array(buff))}function concatenateArrayBuffers(first,second,returnUInt8Array){var result=new Uint8Array(first.byteLength+second.byteLength);result.set(new Uint8Array(first));result.set(new Uint8Array(second),first.byteLength);return returnUInt8Array?result:result.buffer}function hexToBinaryString(hex){var bytes=[],length=hex.length,x;for(x=0;x<length-1;x+=2){bytes.push(parseInt(hex.substr(x,2),16))}return String.fromCharCode.apply(String,bytes)}function SparkMD5(){this.reset()}SparkMD5.prototype.append=function(str){this.appendBinary(toUtf8(str));return this};SparkMD5.prototype.appendBinary=function(contents){this._buff+=contents;this._length+=contents.length;var length=this._buff.length,i;for(i=64;i<=length;i+=64){md5cycle(this._hash,md5blk(this._buff.substring(i-64,i)))}this._buff=this._buff.substring(i-64);return this};SparkMD5.prototype.end=function(raw){var buff=this._buff,length=buff.length,i,tail=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],ret;for(i=0;i<length;i+=1){tail[i>>2]|=buff.charCodeAt(i)<<(i%4<<3)}this._finish(tail,length);ret=hex(this._hash);if(raw){ret=hexToBinaryString(ret)}this.reset();return ret};SparkMD5.prototype.reset=function(){this._buff="";this._length=0;this._hash=[1732584193,-271733879,-1732584194,271733878];return this};SparkMD5.prototype.getState=function(){return{buff:this._buff,length:this._length,hash:this._hash}};SparkMD5.prototype.setState=function(state){this._buff=state.buff;this._length=state.length;this._hash=state.hash;return this};SparkMD5.prototype.destroy=function(){delete this._hash;delete this._buff;delete this._length};SparkMD5.prototype._finish=function(tail,length){var i=length,tmp,lo,hi;tail[i>>2]|=128<<(i%4<<3);if(i>55){md5cycle(this._hash,tail);for(i=0;i<16;i+=1){tail[i]=0}}tmp=this._length*8;tmp=tmp.toString(16).match(/(.*?)(.{0,8})$/);lo=parseInt(tmp[2],16);hi=parseInt(tmp[1],16)||0;tail[14]=lo;tail[15]=hi;md5cycle(this._hash,tail)};SparkMD5.hash=function(str,raw){return SparkMD5.hashBinary(toUtf8(str),raw)};SparkMD5.hashBinary=function(content,raw){var hash=md51(content),ret=hex(hash);return raw?hexToBinaryString(ret):ret};SparkMD5.ArrayBuffer=function(){this.reset()};SparkMD5.ArrayBuffer.prototype.append=function(arr){var buff=concatenateArrayBuffers(this._buff.buffer,arr,true),length=buff.length,i;this._length+=arr.byteLength;for(i=64;i<=length;i+=64){md5cycle(this._hash,md5blk_array(buff.subarray(i-64,i)))}this._buff=i-64<length?new Uint8Array(buff.buffer.slice(i-64)):new Uint8Array(0);return this};SparkMD5.ArrayBuffer.prototype.end=function(raw){var buff=this._buff,length=buff.length,tail=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],i,ret;for(i=0;i<length;i+=1){tail[i>>2]|=buff[i]<<(i%4<<3)}this._finish(tail,length);ret=hex(this._hash);if(raw){ret=hexToBinaryString(ret)}this.reset();return ret};SparkMD5.ArrayBuffer.prototype.reset=function(){this._buff=new Uint8Array(0);this._length=0;this._hash=[1732584193,-271733879,-1732584194,271733878];return this};SparkMD5.ArrayBuffer.prototype.getState=function(){var state=SparkMD5.prototype.getState.call(this);state.buff=arrayBuffer2Utf8Str(state.buff);return state};SparkMD5.ArrayBuffer.prototype.setState=function(state){state.buff=utf8Str2ArrayBuffer(state.buff,true);return SparkMD5.prototype.setState.call(this,state)};SparkMD5.ArrayBuffer.prototype.destroy=SparkMD5.prototype.destroy;SparkMD5.ArrayBuffer.prototype._finish=SparkMD5.prototype._finish;SparkMD5.ArrayBuffer.hash=function(arr,raw){var hash=md51_array(new Uint8Array(arr)),ret=hex(hash);return raw?hexToBinaryString(ret):ret};return SparkMD5});


/**
 * pako.js
 */
/* pako 1.0.8 nodeca/pako */(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.pako = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';


var zlib_deflate = require('./zlib/deflate');
var utils        = require('./utils/common');
var strings      = require('./utils/strings');
var msg          = require('./zlib/messages');
var ZStream      = require('./zlib/zstream');

var toString = Object.prototype.toString;

/* Public constants ==========================================================*/
/* ===========================================================================*/

var Z_NO_FLUSH      = 0;
var Z_FINISH        = 4;

var Z_OK            = 0;
var Z_STREAM_END    = 1;
var Z_SYNC_FLUSH    = 2;

var Z_DEFAULT_COMPRESSION = -1;

var Z_DEFAULT_STRATEGY    = 0;

var Z_DEFLATED  = 8;

/* ===========================================================================*/


/**
 * class Deflate
 *
 * Generic JS-style wrapper for zlib calls. If you don't need
 * streaming behaviour - use more simple functions: [[deflate]],
 * [[deflateRaw]] and [[gzip]].
 **/

/* internal
 * Deflate.chunks -> Array
 *
 * Chunks of output data, if [[Deflate#onData]] not overridden.
 **/

/**
 * Deflate.result -> Uint8Array|Array
 *
 * Compressed result, generated by default [[Deflate#onData]]
 * and [[Deflate#onEnd]] handlers. Filled after you push last chunk
 * (call [[Deflate#push]] with `Z_FINISH` / `true` param)  or if you
 * push a chunk with explicit flush (call [[Deflate#push]] with
 * `Z_SYNC_FLUSH` param).
 **/

/**
 * Deflate.err -> Number
 *
 * Error code after deflate finished. 0 (Z_OK) on success.
 * You will not need it in real life, because deflate errors
 * are possible only on wrong options or bad `onData` / `onEnd`
 * custom handlers.
 **/

/**
 * Deflate.msg -> String
 *
 * Error message, if [[Deflate.err]] != 0
 **/


/**
 * new Deflate(options)
 * - options (Object): zlib deflate options.
 *
 * Creates new deflator instance with specified params. Throws exception
 * on bad params. Supported options:
 *
 * - `level`
 * - `windowBits`
 * - `memLevel`
 * - `strategy`
 * - `dictionary`
 *
 * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
 * for more information on these.
 *
 * Additional options, for internal needs:
 *
 * - `chunkSize` - size of generated data chunks (16K by default)
 * - `raw` (Boolean) - do raw deflate
 * - `gzip` (Boolean) - create gzip wrapper
 * - `to` (String) - if equal to 'string', then result will be "binary string"
 *    (each char code [0..255])
 * - `header` (Object) - custom header for gzip
 *   - `text` (Boolean) - true if compressed data believed to be text
 *   - `time` (Number) - modification time, unix timestamp
 *   - `os` (Number) - operation system code
 *   - `extra` (Array) - array of bytes with extra data (max 65536)
 *   - `name` (String) - file name (binary string)
 *   - `comment` (String) - comment (binary string)
 *   - `hcrc` (Boolean) - true if header crc should be added
 *
 * ##### Example:
 *
 * ```javascript
 * var pako = require('pako')
 *   , chunk1 = Uint8Array([1,2,3,4,5,6,7,8,9])
 *   , chunk2 = Uint8Array([10,11,12,13,14,15,16,17,18,19]);
 *
 * var deflate = new pako.Deflate({ level: 3});
 *
 * deflate.push(chunk1, false);
 * deflate.push(chunk2, true);  // true -> last chunk
 *
 * if (deflate.err) { throw new Error(deflate.err); }
 *
 * ////console.log(deflate.result);
 * ```
 **/
function Deflate(options) {
  if (!(this instanceof Deflate)) return new Deflate(options);

  this.options = utils.assign({
    level: Z_DEFAULT_COMPRESSION,
    method: Z_DEFLATED,
    chunkSize: 16384000,
    windowBits: 15,
    memLevel: 8,
    strategy: Z_DEFAULT_STRATEGY,
    to: ''
  }, options || {});

  var opt = this.options;

  if (opt.raw && (opt.windowBits > 0)) {
    opt.windowBits = -opt.windowBits;
  }

  else if (opt.gzip && (opt.windowBits > 0) && (opt.windowBits < 16)) {
    opt.windowBits += 16;
  }

  this.err    = 0;      // error code, if happens (0 = Z_OK)
  this.msg    = '';     // error message
  this.ended  = false;  // used to avoid multiple onEnd() calls
  this.chunks = [];     // chunks of compressed data

  this.strm = new ZStream();
  this.strm.avail_out = 0;

  var status = zlib_deflate.deflateInit2(
    this.strm,
    opt.level,
    opt.method,
    opt.windowBits,
    opt.memLevel,
    opt.strategy
  );

  if (status !== Z_OK) {
    throw new Error(msg[status]);
  }

  if (opt.header) {
    zlib_deflate.deflateSetHeader(this.strm, opt.header);
  }

  if (opt.dictionary) {
    var dict;
    // Convert data if needed
    if (typeof opt.dictionary === 'string') {
      // If we need to compress text, change encoding to utf8.
      dict = strings.string2buf(opt.dictionary);
    } else if (toString.call(opt.dictionary) === '[object ArrayBuffer]') {
      dict = new Uint8Array(opt.dictionary);
    } else {
      dict = opt.dictionary;
    }

    status = zlib_deflate.deflateSetDictionary(this.strm, dict);

    if (status !== Z_OK) {
      throw new Error(msg[status]);
    }

    this._dict_set = true;
  }
}

/**
 * Deflate#push(data[, mode]) -> Boolean
 * - data (Uint8Array|Array|ArrayBuffer|String): input data. Strings will be
 *   converted to utf8 byte sequence.
 * - mode (Number|Boolean): 0..6 for corresponding Z_NO_FLUSH..Z_TREE modes.
 *   See constants. Skipped or `false` means Z_NO_FLUSH, `true` means Z_FINISH.
 *
 * Sends input data to deflate pipe, generating [[Deflate#onData]] calls with
 * new compressed chunks. Returns `true` on success. The last data block must have
 * mode Z_FINISH (or `true`). That will flush internal pending buffers and call
 * [[Deflate#onEnd]]. For interim explicit flushes (without ending the stream) you
 * can use mode Z_SYNC_FLUSH, keeping the compression context.
 *
 * On fail call [[Deflate#onEnd]] with error code and return false.
 *
 * We strongly recommend to use `Uint8Array` on input for best speed (output
 * array format is detected automatically). Also, don't skip last param and always
 * use the same type in your code (boolean or number). That will improve JS speed.
 *
 * For regular `Array`-s make sure all elements are [0..255].
 *
 * ##### Example
 *
 * ```javascript
 * push(chunk, false); // push one of data chunks
 * ...
 * push(chunk, true);  // push last chunk
 * ```
 **/
Deflate.prototype.push = function (data, mode) {
  var strm = this.strm;
  var chunkSize = this.options.chunkSize;
  var status, _mode;

  if (this.ended) { return false; }

  _mode = (mode === ~~mode) ? mode : ((mode === true) ? Z_FINISH : Z_NO_FLUSH);

  // Convert data if needed
  if (typeof data === 'string') {
    // If we need to compress text, change encoding to utf8.
    strm.input = strings.string2buf(data);
  } else if (toString.call(data) === '[object ArrayBuffer]') {
    strm.input = new Uint8Array(data);
  } else {
    strm.input = data;
  }

  strm.next_in = 0;
  strm.avail_in = strm.input.length;

  do {
    if (strm.avail_out === 0) {
      strm.output = new utils.Buf8(chunkSize);
      strm.next_out = 0;
      strm.avail_out = chunkSize;
    }
    status = zlib_deflate.deflate(strm, _mode);    /* no bad return value */

    if (status !== Z_STREAM_END && status !== Z_OK) {
      this.onEnd(status);
      this.ended = true;
      return false;
    }
    if (strm.avail_out === 0 || (strm.avail_in === 0 && (_mode === Z_FINISH || _mode === Z_SYNC_FLUSH))) {
      if (this.options.to === 'string') {
        this.onData(strings.buf2binstring(utils.shrinkBuf(strm.output, strm.next_out)));
      } else {
        this.onData(utils.shrinkBuf(strm.output, strm.next_out));
      }
    }
  } while ((strm.avail_in > 0 || strm.avail_out === 0) && status !== Z_STREAM_END);

  // Finalize on the last chunk.
  if (_mode === Z_FINISH) {
    status = zlib_deflate.deflateEnd(this.strm);
    this.onEnd(status);
    this.ended = true;
    return status === Z_OK;
  }

  // callback interim results if Z_SYNC_FLUSH.
  if (_mode === Z_SYNC_FLUSH) {
    this.onEnd(Z_OK);
    strm.avail_out = 0;
    return true;
  }

  return true;
};


/**
 * Deflate#onData(chunk) -> Void
 * - chunk (Uint8Array|Array|String): output data. Type of array depends
 *   on js engine support. When string output requested, each chunk
 *   will be string.
 *
 * By default, stores data blocks in `chunks[]` property and glue
 * those in `onEnd`. Override this handler, if you need another behaviour.
 **/
Deflate.prototype.onData = function (chunk) {
  this.chunks.push(chunk);
};


/**
 * Deflate#onEnd(status) -> Void
 * - status (Number): deflate status. 0 (Z_OK) on success,
 *   other if not.
 *
 * Called once after you tell deflate that the input stream is
 * complete (Z_FINISH) or should be flushed (Z_SYNC_FLUSH)
 * or if an error happened. By default - join collected chunks,
 * free memory and fill `results` / `err` properties.
 **/
Deflate.prototype.onEnd = function (status) {
  // On success - join
  if (status === Z_OK) {
    if (this.options.to === 'string') {
      this.result = this.chunks.join('');
    } else {
      this.result = utils.flattenChunks(this.chunks);
    }
  }
  this.chunks = [];
  this.err = status;
  this.msg = this.strm.msg;
};


/**
 * deflate(data[, options]) -> Uint8Array|Array|String
 * - data (Uint8Array|Array|String): input data to compress.
 * - options (Object): zlib deflate options.
 *
 * Compress `data` with deflate algorithm and `options`.
 *
 * Supported options are:
 *
 * - level
 * - windowBits
 * - memLevel
 * - strategy
 * - dictionary
 *
 * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
 * for more information on these.
 *
 * Sugar (options):
 *
 * - `raw` (Boolean) - say that we work with raw stream, if you don't wish to specify
 *   negative windowBits implicitly.
 * - `to` (String) - if equal to 'string', then result will be "binary string"
 *    (each char code [0..255])
 *
 * ##### Example:
 *
 * ```javascript
 * var pako = require('pako')
 *   , data = Uint8Array([1,2,3,4,5,6,7,8,9]);
 *
 * ////console.log(pako.deflate(data));
 * ```
 **/
function deflate(input, options) {
  var deflator = new Deflate(options);

  deflator.push(input, true);

  // That will never happens, if you don't cheat with options :)
  if (deflator.err) { throw deflator.msg || msg[deflator.err]; }

  return deflator.result;
}


/**
 * deflateRaw(data[, options]) -> Uint8Array|Array|String
 * - data (Uint8Array|Array|String): input data to compress.
 * - options (Object): zlib deflate options.
 *
 * The same as [[deflate]], but creates raw data, without wrapper
 * (header and adler32 crc).
 **/
function deflateRaw(input, options) {
  options = options || {};
  options.raw = true;
  return deflate(input, options);
}


/**
 * gzip(data[, options]) -> Uint8Array|Array|String
 * - data (Uint8Array|Array|String): input data to compress.
 * - options (Object): zlib deflate options.
 *
 * The same as [[deflate]], but create gzip wrapper instead of
 * deflate one.
 **/
function gzip(input, options) {
  options = options || {};
  options.gzip = true;
  return deflate(input, options);
}


exports.Deflate = Deflate;
exports.deflate = deflate;
exports.deflateRaw = deflateRaw;
exports.gzip = gzip;

},{"./utils/common":3,"./utils/strings":4,"./zlib/deflate":8,"./zlib/messages":13,"./zlib/zstream":15}],2:[function(require,module,exports){
'use strict';


var zlib_inflate = require('./zlib/inflate');
var utils        = require('./utils/common');
var strings      = require('./utils/strings');
var c            = require('./zlib/constants');
var msg          = require('./zlib/messages');
var ZStream      = require('./zlib/zstream');
var GZheader     = require('./zlib/gzheader');

var toString = Object.prototype.toString;

/**
 * class Inflate
 *
 * Generic JS-style wrapper for zlib calls. If you don't need
 * streaming behaviour - use more simple functions: [[inflate]]
 * and [[inflateRaw]].
 **/

/* internal
 * inflate.chunks -> Array
 *
 * Chunks of output data, if [[Inflate#onData]] not overridden.
 **/

/**
 * Inflate.result -> Uint8Array|Array|String
 *
 * Uncompressed result, generated by default [[Inflate#onData]]
 * and [[Inflate#onEnd]] handlers. Filled after you push last chunk
 * (call [[Inflate#push]] with `Z_FINISH` / `true` param) or if you
 * push a chunk with explicit flush (call [[Inflate#push]] with
 * `Z_SYNC_FLUSH` param).
 **/

/**
 * Inflate.err -> Number
 *
 * Error code after inflate finished. 0 (Z_OK) on success.
 * Should be checked if broken data possible.
 **/

/**
 * Inflate.msg -> String
 *
 * Error message, if [[Inflate.err]] != 0
 **/


/**
 * new Inflate(options)
 * - options (Object): zlib inflate options.
 *
 * Creates new inflator instance with specified params. Throws exception
 * on bad params. Supported options:
 *
 * - `windowBits`
 * - `dictionary`
 *
 * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
 * for more information on these.
 *
 * Additional options, for internal needs:
 *
 * - `chunkSize` - size of generated data chunks (16K by default)
 * - `raw` (Boolean) - do raw inflate
 * - `to` (String) - if equal to 'string', then result will be converted
 *   from utf8 to utf16 (javascript) string. When string output requested,
 *   chunk length can differ from `chunkSize`, depending on content.
 *
 * By default, when no options set, autodetect deflate/gzip data format via
 * wrapper header.
 *
 * ##### Example:
 *
 * ```javascript
 * var pako = require('pako')
 *   , chunk1 = Uint8Array([1,2,3,4,5,6,7,8,9])
 *   , chunk2 = Uint8Array([10,11,12,13,14,15,16,17,18,19]);
 *
 * var inflate = new pako.Inflate({ level: 3});
 *
 * inflate.push(chunk1, false);
 * inflate.push(chunk2, true);  // true -> last chunk
 *
 * if (inflate.err) { throw new Error(inflate.err); }
 *
 * ////console.log(inflate.result);
 * ```
 **/
function Inflate(options) {
  if (!(this instanceof Inflate)) return new Inflate(options);

  this.options = utils.assign({
    chunkSize: 16384000,
    windowBits: 0,
    to: ''
  }, options || {});

  var opt = this.options;

  // Force window size for `raw` data, if not set directly,
  // because we have no header for autodetect.
  if (opt.raw && (opt.windowBits >= 0) && (opt.windowBits < 16)) {
    opt.windowBits = -opt.windowBits;
    if (opt.windowBits === 0) { opt.windowBits = -15; }
  }

  // If `windowBits` not defined (and mode not raw) - set autodetect flag for gzip/deflate
  if ((opt.windowBits >= 0) && (opt.windowBits < 16) &&
      !(options && options.windowBits)) {
    opt.windowBits += 32;
  }

  // Gzip header has no info about windows size, we can do autodetect only
  // for deflate. So, if window size not set, force it to max when gzip possible
  if ((opt.windowBits > 15) && (opt.windowBits < 48)) {
    // bit 3 (16) -> gzipped data
    // bit 4 (32) -> autodetect gzip/deflate
    if ((opt.windowBits & 15) === 0) {
      opt.windowBits |= 15;
    }
  }

  this.err    = 0;      // error code, if happens (0 = Z_OK)
  this.msg    = '';     // error message
  this.ended  = false;  // used to avoid multiple onEnd() calls
  this.chunks = [];     // chunks of compressed data

  this.strm   = new ZStream();
  this.strm.avail_out = 0;

  var status  = zlib_inflate.inflateInit2(
    this.strm,
    opt.windowBits
  );

  if (status !== c.Z_OK) {
    throw new Error(msg[status]);
  }

  this.header = new GZheader();

  zlib_inflate.inflateGetHeader(this.strm, this.header);

  // Setup dictionary
  if (opt.dictionary) {
    // Convert data if needed
    if (typeof opt.dictionary === 'string') {
      opt.dictionary = strings.string2buf(opt.dictionary);
    } else if (toString.call(opt.dictionary) === '[object ArrayBuffer]') {
      opt.dictionary = new Uint8Array(opt.dictionary);
    }
    if (opt.raw) { //In raw mode we need to set the dictionary early
      status = zlib_inflate.inflateSetDictionary(this.strm, opt.dictionary);
      if (status !== c.Z_OK) {
        throw new Error(msg[status]);
      }
    }
  }
}

/**
 * Inflate#push(data[, mode]) -> Boolean
 * - data (Uint8Array|Array|ArrayBuffer|String): input data
 * - mode (Number|Boolean): 0..6 for corresponding Z_NO_FLUSH..Z_TREE modes.
 *   See constants. Skipped or `false` means Z_NO_FLUSH, `true` means Z_FINISH.
 *
 * Sends input data to inflate pipe, generating [[Inflate#onData]] calls with
 * new output chunks. Returns `true` on success. The last data block must have
 * mode Z_FINISH (or `true`). That will flush internal pending buffers and call
 * [[Inflate#onEnd]]. For interim explicit flushes (without ending the stream) you
 * can use mode Z_SYNC_FLUSH, keeping the decompression context.
 *
 * On fail call [[Inflate#onEnd]] with error code and return false.
 *
 * We strongly recommend to use `Uint8Array` on input for best speed (output
 * format is detected automatically). Also, don't skip last param and always
 * use the same type in your code (boolean or number). That will improve JS speed.
 *
 * For regular `Array`-s make sure all elements are [0..255].
 *
 * ##### Example
 *
 * ```javascript
 * push(chunk, false); // push one of data chunks
 * ...
 * push(chunk, true);  // push last chunk
 * ```
 **/
Inflate.prototype.push = function (data, mode) {
  var strm = this.strm;
  var chunkSize = this.options.chunkSize;
  var dictionary = this.options.dictionary;
  var status, _mode;
  var next_out_utf8, tail, utf8str;

  // Flag to properly process Z_BUF_ERROR on testing inflate call
  // when we check that all output data was flushed.
  var allowBufError = false;

  if (this.ended) { return false; }
  _mode = (mode === ~~mode) ? mode : ((mode === true) ? c.Z_FINISH : c.Z_NO_FLUSH);

  // Convert data if needed
  if (typeof data === 'string') {
    // Only binary strings can be decompressed on practice
    strm.input = strings.binstring2buf(data);
  } else if (toString.call(data) === '[object ArrayBuffer]') {
    strm.input = new Uint8Array(data);
  } else {
    strm.input = data;
  }

  strm.next_in = 0;
  strm.avail_in = strm.input.length;

  do {
    if (strm.avail_out === 0) {
      strm.output = new utils.Buf8(chunkSize);
      strm.next_out = 0;
      strm.avail_out = chunkSize;
    }

    status = zlib_inflate.inflate(strm, c.Z_NO_FLUSH);    /* no bad return value */

    if (status === c.Z_NEED_DICT && dictionary) {
      status = zlib_inflate.inflateSetDictionary(this.strm, dictionary);
    }

    if (status === c.Z_BUF_ERROR && allowBufError === true) {
      status = c.Z_OK;
      allowBufError = false;
    }

    if (status !== c.Z_STREAM_END && status !== c.Z_OK) {
      this.onEnd(status);
      this.ended = true;
      return false;
    }

    if (strm.next_out) {
      if (strm.avail_out === 0 || status === c.Z_STREAM_END || (strm.avail_in === 0 && (_mode === c.Z_FINISH || _mode === c.Z_SYNC_FLUSH))) {

        if (this.options.to === 'string') {

          next_out_utf8 = strings.utf8border(strm.output, strm.next_out);

          tail = strm.next_out - next_out_utf8;
          utf8str = strings.buf2string(strm.output, next_out_utf8);

          // move tail
          strm.next_out = tail;
          strm.avail_out = chunkSize - tail;
          if (tail) { utils.arraySet(strm.output, strm.output, next_out_utf8, tail, 0); }

          this.onData(utf8str);

        } else {
          this.onData(utils.shrinkBuf(strm.output, strm.next_out));
        }
      }
    }

    // When no more input data, we should check that internal inflate buffers
    // are flushed. The only way to do it when avail_out = 0 - run one more
    // inflate pass. But if output data not exists, inflate return Z_BUF_ERROR.
    // Here we set flag to process this error properly.
    //
    // NOTE. Deflate does not return error in this case and does not needs such
    // logic.
    if (strm.avail_in === 0 && strm.avail_out === 0) {
      allowBufError = true;
    }

  } while ((strm.avail_in > 0 || strm.avail_out === 0) && status !== c.Z_STREAM_END);

  if (status === c.Z_STREAM_END) {
    _mode = c.Z_FINISH;
  }

  // Finalize on the last chunk.
  if (_mode === c.Z_FINISH) {
    status = zlib_inflate.inflateEnd(this.strm);
    this.onEnd(status);
    this.ended = true;
    return status === c.Z_OK;
  }

  // callback interim results if Z_SYNC_FLUSH.
  if (_mode === c.Z_SYNC_FLUSH) {
    this.onEnd(c.Z_OK);
    strm.avail_out = 0;
    return true;
  }

  return true;
};


/**
 * Inflate#onData(chunk) -> Void
 * - chunk (Uint8Array|Array|String): output data. Type of array depends
 *   on js engine support. When string output requested, each chunk
 *   will be string.
 *
 * By default, stores data blocks in `chunks[]` property and glue
 * those in `onEnd`. Override this handler, if you need another behaviour.
 **/
Inflate.prototype.onData = function (chunk) {
  this.chunks.push(chunk);
};


/**
 * Inflate#onEnd(status) -> Void
 * - status (Number): inflate status. 0 (Z_OK) on success,
 *   other if not.
 *
 * Called either after you tell inflate that the input stream is
 * complete (Z_FINISH) or should be flushed (Z_SYNC_FLUSH)
 * or if an error happened. By default - join collected chunks,
 * free memory and fill `results` / `err` properties.
 **/
Inflate.prototype.onEnd = function (status) {
  // On success - join
  if (status === c.Z_OK) {
    if (this.options.to === 'string') {
      // Glue & convert here, until we teach pako to send
      // utf8 aligned strings to onData
      this.result = this.chunks.join('');
    } else {
      this.result = utils.flattenChunks(this.chunks);
    }
  }
  this.chunks = [];
  this.err = status;
  this.msg = this.strm.msg;
};


/**
 * inflate(data[, options]) -> Uint8Array|Array|String
 * - data (Uint8Array|Array|String): input data to decompress.
 * - options (Object): zlib inflate options.
 *
 * Decompress `data` with inflate/ungzip and `options`. Autodetect
 * format via wrapper header by default. That's why we don't provide
 * separate `ungzip` method.
 *
 * Supported options are:
 *
 * - windowBits
 *
 * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
 * for more information.
 *
 * Sugar (options):
 *
 * - `raw` (Boolean) - say that we work with raw stream, if you don't wish to specify
 *   negative windowBits implicitly.
 * - `to` (String) - if equal to 'string', then result will be converted
 *   from utf8 to utf16 (javascript) string. When string output requested,
 *   chunk length can differ from `chunkSize`, depending on content.
 *
 *
 * ##### Example:
 *
 * ```javascript
 * var pako = require('pako')
 *   , input = pako.deflate([1,2,3,4,5,6,7,8,9])
 *   , output;
 *
 * try {
 *   output = pako.inflate(input);
 * } catch (err)
 *   ////console.log(err);
 * }
 * ```
 **/
function inflate(input, options) {
  var inflator = new Inflate(options);

  inflator.push(input, true);

  // That will never happens, if you don't cheat with options :)
  if (inflator.err) { throw inflator.msg || msg[inflator.err]; }

  return inflator.result;
}


/**
 * inflateRaw(data[, options]) -> Uint8Array|Array|String
 * - data (Uint8Array|Array|String): input data to decompress.
 * - options (Object): zlib inflate options.
 *
 * The same as [[inflate]], but creates raw data, without wrapper
 * (header and adler32 crc).
 **/
function inflateRaw(input, options) {
  options = options || {};
  options.raw = true;
  return inflate(input, options);
}


/**
 * ungzip(data[, options]) -> Uint8Array|Array|String
 * - data (Uint8Array|Array|String): input data to decompress.
 * - options (Object): zlib inflate options.
 *
 * Just shortcut to [[inflate]], because it autodetects format
 * by header.content. Done for convenience.
 **/


exports.Inflate = Inflate;
exports.inflate = inflate;
exports.inflateRaw = inflateRaw;
exports.ungzip  = inflate;

},{"./utils/common":3,"./utils/strings":4,"./zlib/constants":6,"./zlib/gzheader":9,"./zlib/inflate":11,"./zlib/messages":13,"./zlib/zstream":15}],3:[function(require,module,exports){
'use strict';


var TYPED_OK =  (typeof Uint8Array !== 'undefined') &&
                (typeof Uint16Array !== 'undefined') &&
                (typeof Int32Array !== 'undefined');

function _has(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

exports.assign = function (obj /*from1, from2, from3, ...*/) {
  var sources = Array.prototype.slice.call(arguments, 1);
  while (sources.length) {
    var source = sources.shift();
    if (!source) { continue; }

    if (typeof source !== 'object') {
      throw new TypeError(source + 'must be non-object');
    }

    for (var p in source) {
      if (_has(source, p)) {
        obj[p] = source[p];
      }
    }
  }

  return obj;
};


// reduce buffer size, avoiding mem copy
exports.shrinkBuf = function (buf, size) {
  if (buf.length === size) { return buf; }
  if (buf.subarray) { return buf.subarray(0, size); }
  buf.length = size;
  return buf;
};


var fnTyped = {
  arraySet: function (dest, src, src_offs, len, dest_offs) {
    if (src.subarray && dest.subarray) {
      dest.set(src.subarray(src_offs, src_offs + len), dest_offs);
      return;
    }
    // Fallback to ordinary array
    for (var i = 0; i < len; i++) {
      dest[dest_offs + i] = src[src_offs + i];
    }
  },
  // Join array of chunks to single array.
  flattenChunks: function (chunks) {
    var i, l, len, pos, chunk, result;

    // calculate data length
    len = 0;
    for (i = 0, l = chunks.length; i < l; i++) {
      len += chunks[i].length;
    }

    // join chunks
    result = new Uint8Array(len);
    pos = 0;
    for (i = 0, l = chunks.length; i < l; i++) {
      chunk = chunks[i];
      result.set(chunk, pos);
      pos += chunk.length;
    }

    return result;
  }
};

var fnUntyped = {
  arraySet: function (dest, src, src_offs, len, dest_offs) {
    for (var i = 0; i < len; i++) {
      dest[dest_offs + i] = src[src_offs + i];
    }
  },
  // Join array of chunks to single array.
  flattenChunks: function (chunks) {
    return [].concat.apply([], chunks);
  }
};


// Enable/Disable typed arrays use, for testing
//
exports.setTyped = function (on) {
  if (on) {
    exports.Buf8  = Uint8Array;
    exports.Buf16 = Uint16Array;
    exports.Buf32 = Int32Array;
    exports.assign(exports, fnTyped);
  } else {
    exports.Buf8  = Array;
    exports.Buf16 = Array;
    exports.Buf32 = Array;
    exports.assign(exports, fnUntyped);
  }
};

exports.setTyped(TYPED_OK);

},{}],4:[function(require,module,exports){
// String encode/decode helpers
'use strict';


var utils = require('./common');


// Quick check if we can use fast array to bin string conversion
//
// - apply(Array) can fail on Android 2.2
// - apply(Uint8Array) can fail on iOS 5.1 Safari
//
var STR_APPLY_OK = true;
var STR_APPLY_UIA_OK = true;

try { String.fromCharCode.apply(null, [ 0 ]); } catch (__) { STR_APPLY_OK = false; }
try { String.fromCharCode.apply(null, new Uint8Array(1)); } catch (__) { STR_APPLY_UIA_OK = false; }


// Table with utf8 lengths (calculated by first byte of sequence)
// Note, that 5 & 6-byte values and some 4-byte values can not be represented in JS,
// because max possible codepoint is 0x10ffff
var _utf8len = new utils.Buf8(256);
for (var q = 0; q < 256; q++) {
  _utf8len[q] = (q >= 252 ? 6 : q >= 248 ? 5 : q >= 240 ? 4 : q >= 224 ? 3 : q >= 192 ? 2 : 1);
}
_utf8len[254] = _utf8len[254] = 1; // Invalid sequence start


// convert string to array (typed, when possible)
exports.string2buf = function (str) {
  var buf, c, c2, m_pos, i, str_len = str.length, buf_len = 0;

  // count binary size
  for (m_pos = 0; m_pos < str_len; m_pos++) {
    c = str.charCodeAt(m_pos);
    if ((c & 0xfc00) === 0xd800 && (m_pos + 1 < str_len)) {
      c2 = str.charCodeAt(m_pos + 1);
      if ((c2 & 0xfc00) === 0xdc00) {
        c = 0x10000 + ((c - 0xd800) << 10) + (c2 - 0xdc00);
        m_pos++;
      }
    }
    buf_len += c < 0x80 ? 1 : c < 0x800 ? 2 : c < 0x10000 ? 3 : 4;
  }

  // allocate buffer
  buf = new utils.Buf8(buf_len);

  // convert
  for (i = 0, m_pos = 0; i < buf_len; m_pos++) {
    c = str.charCodeAt(m_pos);
    if ((c & 0xfc00) === 0xd800 && (m_pos + 1 < str_len)) {
      c2 = str.charCodeAt(m_pos + 1);
      if ((c2 & 0xfc00) === 0xdc00) {
        c = 0x10000 + ((c - 0xd800) << 10) + (c2 - 0xdc00);
        m_pos++;
      }
    }
    if (c < 0x80) {
      /* one byte */
      buf[i++] = c;
    } else if (c < 0x800) {
      /* two bytes */
      buf[i++] = 0xC0 | (c >>> 6);
      buf[i++] = 0x80 | (c & 0x3f);
    } else if (c < 0x10000) {
      /* three bytes */
      buf[i++] = 0xE0 | (c >>> 12);
      buf[i++] = 0x80 | (c >>> 6 & 0x3f);
      buf[i++] = 0x80 | (c & 0x3f);
    } else {
      /* four bytes */
      buf[i++] = 0xf0 | (c >>> 18);
      buf[i++] = 0x80 | (c >>> 12 & 0x3f);
      buf[i++] = 0x80 | (c >>> 6 & 0x3f);
      buf[i++] = 0x80 | (c & 0x3f);
    }
  }

  return buf;
};

// Helper (used in 2 places)
function buf2binstring(buf, len) {
  // On Chrome, the arguments in a function call that are allowed is `65534`.
  // If the length of the buffer is smaller than that, we can use this optimization,
  // otherwise we will take a slower path.
  if (len < 65534) {
    if ((buf.subarray && STR_APPLY_UIA_OK) || (!buf.subarray && STR_APPLY_OK)) {
      return String.fromCharCode.apply(null, utils.shrinkBuf(buf, len));
    }
  }

  var result = '';
  for (var i = 0; i < len; i++) {
    result += String.fromCharCode(buf[i]);
  }
  return result;
}


// Convert byte array to binary string
exports.buf2binstring = function (buf) {
  return buf2binstring(buf, buf.length);
};


// Convert binary string (typed, when possible)
exports.binstring2buf = function (str) {
  var buf = new utils.Buf8(str.length);
  for (var i = 0, len = buf.length; i < len; i++) {
    buf[i] = str.charCodeAt(i);
  }
  return buf;
};


// convert array to string
exports.buf2string = function (buf, max) {
  var i, out, c, c_len;
  var len = max || buf.length;

  // Reserve max possible length (2 words per char)
  // NB: by unknown reasons, Array is significantly faster for
  //     String.fromCharCode.apply than Uint16Array.
  var utf16buf = new Array(len * 2);

  for (out = 0, i = 0; i < len;) {
    c = buf[i++];
    // quick process ascii
    if (c < 0x80) { utf16buf[out++] = c; continue; }

    c_len = _utf8len[c];
    // skip 5 & 6 byte codes
    if (c_len > 4) { utf16buf[out++] = 0xfffd; i += c_len - 1; continue; }

    // apply mask on first byte
    c &= c_len === 2 ? 0x1f : c_len === 3 ? 0x0f : 0x07;
    // join the rest
    while (c_len > 1 && i < len) {
      c = (c << 6) | (buf[i++] & 0x3f);
      c_len--;
    }

    // terminated by end of string?
    if (c_len > 1) { utf16buf[out++] = 0xfffd; continue; }

    if (c < 0x10000) {
      utf16buf[out++] = c;
    } else {
      c -= 0x10000;
      utf16buf[out++] = 0xd800 | ((c >> 10) & 0x3ff);
      utf16buf[out++] = 0xdc00 | (c & 0x3ff);
    }
  }

  return buf2binstring(utf16buf, out);
};


// Calculate max possible position in utf8 buffer,
// that will not break sequence. If that's not possible
// - (very small limits) return max size as is.
//
// buf[] - utf8 bytes array
// max   - length limit (mandatory);
exports.utf8border = function (buf, max) {
  var pos;

  max = max || buf.length;
  if (max > buf.length) { max = buf.length; }

  // go back from last position, until start of sequence found
  pos = max - 1;
  while (pos >= 0 && (buf[pos] & 0xC0) === 0x80) { pos--; }

  // Very small and broken sequence,
  // return max, because we should return something anyway.
  if (pos < 0) { return max; }

  // If we came to start of buffer - that means buffer is too small,
  // return max too.
  if (pos === 0) { return max; }

  return (pos + _utf8len[buf[pos]] > max) ? pos : max;
};

},{"./common":3}],5:[function(require,module,exports){
'use strict';

// Note: adler32 takes 12% for level 0 and 2% for level 6.
// It isn't worth it to make additional optimizations as in original.
// Small size is preferable.

// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

function adler32(adler, buf, len, pos) {
  var s1 = (adler & 0xffff) |0,
      s2 = ((adler >>> 16) & 0xffff) |0,
      n = 0;

  while (len !== 0) {
    // Set limit ~ twice less than 5552, to keep
    // s2 in 31-bits, because we force signed ints.
    // in other case %= will fail.
    n = len > 2000 ? 2000 : len;
    len -= n;

    do {
      s1 = (s1 + buf[pos++]) |0;
      s2 = (s2 + s1) |0;
    } while (--n);

    s1 %= 65521;
    s2 %= 65521;
  }

  return (s1 | (s2 << 16)) |0;
}


module.exports = adler32;

},{}],6:[function(require,module,exports){
'use strict';

// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

module.exports = {

  /* Allowed flush values; see deflate() and inflate() below for details */
  Z_NO_FLUSH:         0,
  Z_PARTIAL_FLUSH:    1,
  Z_SYNC_FLUSH:       2,
  Z_FULL_FLUSH:       3,
  Z_FINISH:           4,
  Z_BLOCK:            5,
  Z_TREES:            6,

  /* Return codes for the compression/decompression functions. Negative values
  * are errors, positive values are used for special but normal events.
  */
  Z_OK:               0,
  Z_STREAM_END:       1,
  Z_NEED_DICT:        2,
  Z_ERRNO:           -1,
  Z_STREAM_ERROR:    -2,
  Z_DATA_ERROR:      -3,
  //Z_MEM_ERROR:     -4,
  Z_BUF_ERROR:       -5,
  //Z_VERSION_ERROR: -6,

  /* compression levels */
  Z_NO_COMPRESSION:         0,
  Z_BEST_SPEED:             1,
  Z_BEST_COMPRESSION:       9,
  Z_DEFAULT_COMPRESSION:   -1,


  Z_FILTERED:               1,
  Z_HUFFMAN_ONLY:           2,
  Z_RLE:                    3,
  Z_FIXED:                  4,
  Z_DEFAULT_STRATEGY:       0,

  /* Possible values of the data_type field (though see inflate()) */
  Z_BINARY:                 0,
  Z_TEXT:                   1,
  //Z_ASCII:                1, // = Z_TEXT (deprecated)
  Z_UNKNOWN:                2,

  /* The deflate compression method */
  Z_DEFLATED:               8
  //Z_NULL:                 null // Use -1 or null inline, depending on var type
};

},{}],7:[function(require,module,exports){
'use strict';

// Note: we can't get significant speed boost here.
// So write code to minimize size - no pregenerated tables
// and array tools dependencies.

// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

// Use ordinary array, since untyped makes no boost here
function makeTable() {
  var c, table = [];

  for (var n = 0; n < 256; n++) {
    c = n;
    for (var k = 0; k < 8; k++) {
      c = ((c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1));
    }
    table[n] = c;
  }

  return table;
}

// Create table on load. Just 255 signed longs. Not a problem.
var crcTable = makeTable();


function crc32(crc, buf, len, pos) {
  var t = crcTable,
      end = pos + len;

  crc ^= -1;

  for (var i = pos; i < end; i++) {
    crc = (crc >>> 8) ^ t[(crc ^ buf[i]) & 0xFF];
  }

  return (crc ^ (-1)); // >>> 0;
}


module.exports = crc32;

},{}],8:[function(require,module,exports){
'use strict';

// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

var utils   = require('../utils/common');
var trees   = require('./trees');
var adler32 = require('./adler32');
var crc32   = require('./crc32');
var msg     = require('./messages');

/* Public constants ==========================================================*/
/* ===========================================================================*/


/* Allowed flush values; see deflate() and inflate() below for details */
var Z_NO_FLUSH      = 0;
var Z_PARTIAL_FLUSH = 1;
//var Z_SYNC_FLUSH    = 2;
var Z_FULL_FLUSH    = 3;
var Z_FINISH        = 4;
var Z_BLOCK         = 5;
//var Z_TREES         = 6;


/* Return codes for the compression/decompression functions. Negative values
 * are errors, positive values are used for special but normal events.
 */
var Z_OK            = 0;
var Z_STREAM_END    = 1;
//var Z_NEED_DICT     = 2;
//var Z_ERRNO         = -1;
var Z_STREAM_ERROR  = -2;
var Z_DATA_ERROR    = -3;
//var Z_MEM_ERROR     = -4;
var Z_BUF_ERROR     = -5;
//var Z_VERSION_ERROR = -6;


/* compression levels */
//var Z_NO_COMPRESSION      = 0;
//var Z_BEST_SPEED          = 1;
//var Z_BEST_COMPRESSION    = 9;
var Z_DEFAULT_COMPRESSION = -1;


var Z_FILTERED            = 1;
var Z_HUFFMAN_ONLY        = 2;
var Z_RLE                 = 3;
var Z_FIXED               = 4;
var Z_DEFAULT_STRATEGY    = 0;

/* Possible values of the data_type field (though see inflate()) */
//var Z_BINARY              = 0;
//var Z_TEXT                = 1;
//var Z_ASCII               = 1; // = Z_TEXT
var Z_UNKNOWN             = 2;


/* The deflate compression method */
var Z_DEFLATED  = 8;

/*============================================================================*/


var MAX_MEM_LEVEL = 9;
/* Maximum value for memLevel in deflateInit2 */
var MAX_WBITS = 15;
/* 32K LZ77 window */
var DEF_MEM_LEVEL = 8;


var LENGTH_CODES  = 29;
/* number of length codes, not counting the special END_BLOCK code */
var LITERALS      = 256;
/* number of literal bytes 0..255 */
var L_CODES       = LITERALS + 1 + LENGTH_CODES;
/* number of Literal or Length codes, including the END_BLOCK code */
var D_CODES       = 30;
/* number of distance codes */
var BL_CODES      = 19;
/* number of codes used to transfer the bit lengths */
var HEAP_SIZE     = 2 * L_CODES + 1;
/* maximum heap size */
var MAX_BITS  = 15;
/* All codes must not exceed MAX_BITS bits */

var MIN_MATCH = 3;
var MAX_MATCH = 258;
var MIN_LOOKAHEAD = (MAX_MATCH + MIN_MATCH + 1);

var PRESET_DICT = 0x20;

var INIT_STATE = 42;
var EXTRA_STATE = 69;
var NAME_STATE = 73;
var COMMENT_STATE = 91;
var HCRC_STATE = 103;
var BUSY_STATE = 113;
var FINISH_STATE = 666;

var BS_NEED_MORE      = 1; /* block not completed, need more input or more output */
var BS_BLOCK_DONE     = 2; /* block flush performed */
var BS_FINISH_STARTED = 3; /* finish started, need only more output at next deflate */
var BS_FINISH_DONE    = 4; /* finish done, accept no more input or output */

var OS_CODE = 0x03; // Unix :) . Don't detect, use this default.

function err(strm, errorCode) {
  strm.msg = msg[errorCode];
  return errorCode;
}

function rank(f) {
  return ((f) << 1) - ((f) > 4 ? 9 : 0);
}

function zero(buf) { var len = buf.length; while (--len >= 0) { buf[len] = 0; } }


/* =========================================================================
 * Flush as much pending output as possible. All deflate() output goes
 * through this function so some applications may wish to modify it
 * to avoid allocating a large strm->output buffer and copying into it.
 * (See also read_buf()).
 */
function flush_pending(strm) {
  var s = strm.state;

  //_tr_flush_bits(s);
  var len = s.pending;
  if (len > strm.avail_out) {
    len = strm.avail_out;
  }
  if (len === 0) { return; }

  utils.arraySet(strm.output, s.pending_buf, s.pending_out, len, strm.next_out);
  strm.next_out += len;
  s.pending_out += len;
  strm.total_out += len;
  strm.avail_out -= len;
  s.pending -= len;
  if (s.pending === 0) {
    s.pending_out = 0;
  }
}


function flush_block_only(s, last) {
  trees._tr_flush_block(s, (s.block_start >= 0 ? s.block_start : -1), s.strstart - s.block_start, last);
  s.block_start = s.strstart;
  flush_pending(s.strm);
}


function put_byte(s, b) {
  s.pending_buf[s.pending++] = b;
}


/* =========================================================================
 * Put a short in the pending buffer. The 16-bit value is put in MSB order.
 * IN assertion: the stream state is correct and there is enough room in
 * pending_buf.
 */
function putShortMSB(s, b) {
//  put_byte(s, (Byte)(b >> 8));
//  put_byte(s, (Byte)(b & 0xff));
  s.pending_buf[s.pending++] = (b >>> 8) & 0xff;
  s.pending_buf[s.pending++] = b & 0xff;
}


/* ===========================================================================
 * Read a new buffer from the current input stream, update the adler32
 * and total number of bytes read.  All deflate() input goes through
 * this function so some applications may wish to modify it to avoid
 * allocating a large strm->input buffer and copying from it.
 * (See also flush_pending()).
 */
function read_buf(strm, buf, start, size) {
  var len = strm.avail_in;

  if (len > size) { len = size; }
  if (len === 0) { return 0; }

  strm.avail_in -= len;

  // zmemcpy(buf, strm->next_in, len);
  utils.arraySet(buf, strm.input, strm.next_in, len, start);
  if (strm.state.wrap === 1) {
    strm.adler = adler32(strm.adler, buf, len, start);
  }

  else if (strm.state.wrap === 2) {
    strm.adler = crc32(strm.adler, buf, len, start);
  }

  strm.next_in += len;
  strm.total_in += len;

  return len;
}


/* ===========================================================================
 * Set match_start to the longest match starting at the given string and
 * return its length. Matches shorter or equal to prev_length are discarded,
 * in which case the result is equal to prev_length and match_start is
 * garbage.
 * IN assertions: cur_match is the head of the hash chain for the current
 *   string (strstart) and its distance is <= MAX_DIST, and prev_length >= 1
 * OUT assertion: the match length is not greater than s->lookahead.
 */
function longest_match(s, cur_match) {
  var chain_length = s.max_chain_length;      /* max hash chain length */
  var scan = s.strstart; /* current string */
  var match;                       /* matched string */
  var len;                           /* length of current match */
  var best_len = s.prev_length;              /* best match length so far */
  var nice_match = s.nice_match;             /* stop if match long enough */
  var limit = (s.strstart > (s.w_size - MIN_LOOKAHEAD)) ?
      s.strstart - (s.w_size - MIN_LOOKAHEAD) : 0/*NIL*/;

  var _win = s.window; // shortcut

  var wmask = s.w_mask;
  var prev  = s.prev;

  /* Stop when cur_match becomes <= limit. To simplify the code,
   * we prevent matches with the string of window index 0.
   */

  var strend = s.strstart + MAX_MATCH;
  var scan_end1  = _win[scan + best_len - 1];
  var scan_end   = _win[scan + best_len];

  /* The code is optimized for HASH_BITS >= 8 and MAX_MATCH-2 multiple of 16.
   * It is easy to get rid of this optimization if necessary.
   */
  // Assert(s->hash_bits >= 8 && MAX_MATCH == 258, "Code too clever");

  /* Do not waste too much time if we already have a good match: */
  if (s.prev_length >= s.good_match) {
    chain_length >>= 2;
  }
  /* Do not look for matches beyond the end of the input. This is necessary
   * to make deflate deterministic.
   */
  if (nice_match > s.lookahead) { nice_match = s.lookahead; }

  // Assert((ulg)s->strstart <= s->window_size-MIN_LOOKAHEAD, "need lookahead");

  do {
    // Assert(cur_match < s->strstart, "no future");
    match = cur_match;

    /* Skip to next match if the match length cannot increase
     * or if the match length is less than 2.  Note that the checks below
     * for insufficient lookahead only occur occasionally for performance
     * reasons.  Therefore uninitialized memory will be accessed, and
     * conditional jumps will be made that depend on those values.
     * However the length of the match is limited to the lookahead, so
     * the output of deflate is not affected by the uninitialized values.
     */

    if (_win[match + best_len]     !== scan_end  ||
        _win[match + best_len - 1] !== scan_end1 ||
        _win[match]                !== _win[scan] ||
        _win[++match]              !== _win[scan + 1]) {
      continue;
    }

    /* The check at best_len-1 can be removed because it will be made
     * again later. (This heuristic is not always a win.)
     * It is not necessary to compare scan[2] and match[2] since they
     * are always equal when the other bytes match, given that
     * the hash keys are equal and that HASH_BITS >= 8.
     */
    scan += 2;
    match++;
    // Assert(*scan == *match, "match[2]?");

    /* We check for insufficient lookahead only every 8th comparison;
     * the 256th check will be made at strstart+258.
     */
    do {
      /*jshint noempty:false*/
    } while (_win[++scan] === _win[++match] && _win[++scan] === _win[++match] &&
             _win[++scan] === _win[++match] && _win[++scan] === _win[++match] &&
             _win[++scan] === _win[++match] && _win[++scan] === _win[++match] &&
             _win[++scan] === _win[++match] && _win[++scan] === _win[++match] &&
             scan < strend);

    // Assert(scan <= s->window+(unsigned)(s->window_size-1), "wild scan");

    len = MAX_MATCH - (strend - scan);
    scan = strend - MAX_MATCH;

    if (len > best_len) {
      s.match_start = cur_match;
      best_len = len;
      if (len >= nice_match) {
        break;
      }
      scan_end1  = _win[scan + best_len - 1];
      scan_end   = _win[scan + best_len];
    }
  } while ((cur_match = prev[cur_match & wmask]) > limit && --chain_length !== 0);

  if (best_len <= s.lookahead) {
    return best_len;
  }
  return s.lookahead;
}


/* ===========================================================================
 * Fill the window when the lookahead becomes insufficient.
 * Updates strstart and lookahead.
 *
 * IN assertion: lookahead < MIN_LOOKAHEAD
 * OUT assertions: strstart <= window_size-MIN_LOOKAHEAD
 *    At least one byte has been read, or avail_in == 0; reads are
 *    performed for at least two bytes (required for the zip translate_eol
 *    option -- not supported here).
 */
function fill_window(s) {
  var _w_size = s.w_size;
  var p, n, m, more, str;

  //Assert(s->lookahead < MIN_LOOKAHEAD, "already enough lookahead");

  do {
    more = s.window_size - s.lookahead - s.strstart;

    // JS ints have 32 bit, block below not needed
    /* Deal with !@#$% 64K limit: */
    //if (sizeof(int) <= 2) {
    //    if (more == 0 && s->strstart == 0 && s->lookahead == 0) {
    //        more = wsize;
    //
    //  } else if (more == (unsigned)(-1)) {
    //        /* Very unlikely, but possible on 16 bit machine if
    //         * strstart == 0 && lookahead == 1 (input done a byte at time)
    //         */
    //        more--;
    //    }
    //}


    /* If the window is almost full and there is insufficient lookahead,
     * move the upper half to the lower one to make room in the upper half.
     */
    if (s.strstart >= _w_size + (_w_size - MIN_LOOKAHEAD)) {

      utils.arraySet(s.window, s.window, _w_size, _w_size, 0);
      s.match_start -= _w_size;
      s.strstart -= _w_size;
      /* we now have strstart >= MAX_DIST */
      s.block_start -= _w_size;

      /* Slide the hash table (could be avoided with 32 bit values
       at the expense of memory usage). We slide even when level == 0
       to keep the hash table consistent if we switch back to level > 0
       later. (Using level 0 permanently is not an optimal usage of
       zlib, so we don't care about this pathological case.)
       */

      n = s.hash_size;
      p = n;
      do {
        m = s.head[--p];
        s.head[p] = (m >= _w_size ? m - _w_size : 0);
      } while (--n);

      n = _w_size;
      p = n;
      do {
        m = s.prev[--p];
        s.prev[p] = (m >= _w_size ? m - _w_size : 0);
        /* If n is not on any hash chain, prev[n] is garbage but
         * its value will never be used.
         */
      } while (--n);

      more += _w_size;
    }
    if (s.strm.avail_in === 0) {
      break;
    }

    /* If there was no sliding:
     *    strstart <= WSIZE+MAX_DIST-1 && lookahead <= MIN_LOOKAHEAD - 1 &&
     *    more == window_size - lookahead - strstart
     * => more >= window_size - (MIN_LOOKAHEAD-1 + WSIZE + MAX_DIST-1)
     * => more >= window_size - 2*WSIZE + 2
     * In the BIG_MEM or MMAP case (not yet supported),
     *   window_size == input_size + MIN_LOOKAHEAD  &&
     *   strstart + s->lookahead <= input_size => more >= MIN_LOOKAHEAD.
     * Otherwise, window_size == 2*WSIZE so more >= 2.
     * If there was sliding, more >= WSIZE. So in all cases, more >= 2.
     */
    //Assert(more >= 2, "more < 2");
    n = read_buf(s.strm, s.window, s.strstart + s.lookahead, more);
    s.lookahead += n;

    /* Initialize the hash value now that we have some input: */
    if (s.lookahead + s.insert >= MIN_MATCH) {
      str = s.strstart - s.insert;
      s.ins_h = s.window[str];

      /* UPDATE_HASH(s, s->ins_h, s->window[str + 1]); */
      s.ins_h = ((s.ins_h << s.hash_shift) ^ s.window[str + 1]) & s.hash_mask;
//#if MIN_MATCH != 3
//        Call update_hash() MIN_MATCH-3 more times
//#endif
      while (s.insert) {
        /* UPDATE_HASH(s, s->ins_h, s->window[str + MIN_MATCH-1]); */
        s.ins_h = ((s.ins_h << s.hash_shift) ^ s.window[str + MIN_MATCH - 1]) & s.hash_mask;

        s.prev[str & s.w_mask] = s.head[s.ins_h];
        s.head[s.ins_h] = str;
        str++;
        s.insert--;
        if (s.lookahead + s.insert < MIN_MATCH) {
          break;
        }
      }
    }
    /* If the whole input has less than MIN_MATCH bytes, ins_h is garbage,
     * but this is not important since only literal bytes will be emitted.
     */

  } while (s.lookahead < MIN_LOOKAHEAD && s.strm.avail_in !== 0);

  /* If the WIN_INIT bytes after the end of the current data have never been
   * written, then zero those bytes in order to avoid memory check reports of
   * the use of uninitialized (or uninitialised as Julian writes) bytes by
   * the longest match routines.  Update the high water mark for the next
   * time through here.  WIN_INIT is set to MAX_MATCH since the longest match
   * routines allow scanning to strstart + MAX_MATCH, ignoring lookahead.
   */
//  if (s.high_water < s.window_size) {
//    var curr = s.strstart + s.lookahead;
//    var init = 0;
//
//    if (s.high_water < curr) {
//      /* Previous high water mark below current data -- zero WIN_INIT
//       * bytes or up to end of window, whichever is less.
//       */
//      init = s.window_size - curr;
//      if (init > WIN_INIT)
//        init = WIN_INIT;
//      zmemzero(s->window + curr, (unsigned)init);
//      s->high_water = curr + init;
//    }
//    else if (s->high_water < (ulg)curr + WIN_INIT) {
//      /* High water mark at or above current data, but below current data
//       * plus WIN_INIT -- zero out to current data plus WIN_INIT, or up
//       * to end of window, whichever is less.
//       */
//      init = (ulg)curr + WIN_INIT - s->high_water;
//      if (init > s->window_size - s->high_water)
//        init = s->window_size - s->high_water;
//      zmemzero(s->window + s->high_water, (unsigned)init);
//      s->high_water += init;
//    }
//  }
//
//  Assert((ulg)s->strstart <= s->window_size - MIN_LOOKAHEAD,
//    "not enough room for search");
}

/* ===========================================================================
 * Copy without compression as much as possible from the input stream, return
 * the current block state.
 * This function does not insert new strings in the dictionary since
 * uncompressible data is probably not useful. This function is used
 * only for the level=0 compression option.
 * NOTE: this function should be optimized to avoid extra copying from
 * window to pending_buf.
 */
function deflate_stored(s, flush) {
  /* Stored blocks are limited to 0xffff bytes, pending_buf is limited
   * to pending_buf_size, and each stored block has a 5 byte header:
   */
  var max_block_size = 0xffff;

  if (max_block_size > s.pending_buf_size - 5) {
    max_block_size = s.pending_buf_size - 5;
  }

  /* Copy as much as possible from input to output: */
  for (;;) {
    /* Fill the window as much as possible: */
    if (s.lookahead <= 1) {

      //Assert(s->strstart < s->w_size+MAX_DIST(s) ||
      //  s->block_start >= (long)s->w_size, "slide too late");
//      if (!(s.strstart < s.w_size + (s.w_size - MIN_LOOKAHEAD) ||
//        s.block_start >= s.w_size)) {
//        throw  new Error("slide too late");
//      }

      fill_window(s);
      if (s.lookahead === 0 && flush === Z_NO_FLUSH) {
        return BS_NEED_MORE;
      }

      if (s.lookahead === 0) {
        break;
      }
      /* flush the current block */
    }
    //Assert(s->block_start >= 0L, "block gone");
//    if (s.block_start < 0) throw new Error("block gone");

    s.strstart += s.lookahead;
    s.lookahead = 0;

    /* Emit a stored block if pending_buf will be full: */
    var max_start = s.block_start + max_block_size;

    if (s.strstart === 0 || s.strstart >= max_start) {
      /* strstart == 0 is possible when wraparound on 16-bit machine */
      s.lookahead = s.strstart - max_start;
      s.strstart = max_start;
      /*** FLUSH_BLOCK(s, 0); ***/
      flush_block_only(s, false);
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
      /***/


    }
    /* Flush if we may have to slide, otherwise block_start may become
     * negative and the data will be gone:
     */
    if (s.strstart - s.block_start >= (s.w_size - MIN_LOOKAHEAD)) {
      /*** FLUSH_BLOCK(s, 0); ***/
      flush_block_only(s, false);
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
      /***/
    }
  }

  s.insert = 0;

  if (flush === Z_FINISH) {
    /*** FLUSH_BLOCK(s, 1); ***/
    flush_block_only(s, true);
    if (s.strm.avail_out === 0) {
      return BS_FINISH_STARTED;
    }
    /***/
    return BS_FINISH_DONE;
  }

  if (s.strstart > s.block_start) {
    /*** FLUSH_BLOCK(s, 0); ***/
    flush_block_only(s, false);
    if (s.strm.avail_out === 0) {
      return BS_NEED_MORE;
    }
    /***/
  }

  return BS_NEED_MORE;
}

/* ===========================================================================
 * Compress as much as possible from the input stream, return the current
 * block state.
 * This function does not perform lazy evaluation of matches and inserts
 * new strings in the dictionary only for unmatched strings or for short
 * matches. It is used only for the fast compression options.
 */
function deflate_fast(s, flush) {
  var hash_head;        /* head of the hash chain */
  var bflush;           /* set if current block must be flushed */

  for (;;) {
    /* Make sure that we always have enough lookahead, except
     * at the end of the input file. We need MAX_MATCH bytes
     * for the next match, plus MIN_MATCH bytes to insert the
     * string following the next match.
     */
    if (s.lookahead < MIN_LOOKAHEAD) {
      fill_window(s);
      if (s.lookahead < MIN_LOOKAHEAD && flush === Z_NO_FLUSH) {
        return BS_NEED_MORE;
      }
      if (s.lookahead === 0) {
        break; /* flush the current block */
      }
    }

    /* Insert the string window[strstart .. strstart+2] in the
     * dictionary, and set hash_head to the head of the hash chain:
     */
    hash_head = 0/*NIL*/;
    if (s.lookahead >= MIN_MATCH) {
      /*** INSERT_STRING(s, s.strstart, hash_head); ***/
      s.ins_h = ((s.ins_h << s.hash_shift) ^ s.window[s.strstart + MIN_MATCH - 1]) & s.hash_mask;
      hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
      s.head[s.ins_h] = s.strstart;
      /***/
    }

    /* Find the longest match, discarding those <= prev_length.
     * At this point we have always match_length < MIN_MATCH
     */
    if (hash_head !== 0/*NIL*/ && ((s.strstart - hash_head) <= (s.w_size - MIN_LOOKAHEAD))) {
      /* To simplify the code, we prevent matches with the string
       * of window index 0 (in particular we have to avoid a match
       * of the string with itself at the start of the input file).
       */
      s.match_length = longest_match(s, hash_head);
      /* longest_match() sets match_start */
    }
    if (s.match_length >= MIN_MATCH) {
      // check_match(s, s.strstart, s.match_start, s.match_length); // for debug only

      /*** _tr_tally_dist(s, s.strstart - s.match_start,
                     s.match_length - MIN_MATCH, bflush); ***/
      bflush = trees._tr_tally(s, s.strstart - s.match_start, s.match_length - MIN_MATCH);

      s.lookahead -= s.match_length;

      /* Insert new strings in the hash table only if the match length
       * is not too large. This saves time but degrades compression.
       */
      if (s.match_length <= s.max_lazy_match/*max_insert_length*/ && s.lookahead >= MIN_MATCH) {
        s.match_length--; /* string at strstart already in table */
        do {
          s.strstart++;
          /*** INSERT_STRING(s, s.strstart, hash_head); ***/
          s.ins_h = ((s.ins_h << s.hash_shift) ^ s.window[s.strstart + MIN_MATCH - 1]) & s.hash_mask;
          hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
          s.head[s.ins_h] = s.strstart;
          /***/
          /* strstart never exceeds WSIZE-MAX_MATCH, so there are
           * always MIN_MATCH bytes ahead.
           */
        } while (--s.match_length !== 0);
        s.strstart++;
      } else
      {
        s.strstart += s.match_length;
        s.match_length = 0;
        s.ins_h = s.window[s.strstart];
        /* UPDATE_HASH(s, s.ins_h, s.window[s.strstart+1]); */
        s.ins_h = ((s.ins_h << s.hash_shift) ^ s.window[s.strstart + 1]) & s.hash_mask;

//#if MIN_MATCH != 3
//                Call UPDATE_HASH() MIN_MATCH-3 more times
//#endif
        /* If lookahead < MIN_MATCH, ins_h is garbage, but it does not
         * matter since it will be recomputed at next deflate call.
         */
      }
    } else {
      /* No match, output a literal byte */
      //Tracevv((stderr,"%c", s.window[s.strstart]));
      /*** _tr_tally_lit(s, s.window[s.strstart], bflush); ***/
      bflush = trees._tr_tally(s, 0, s.window[s.strstart]);

      s.lookahead--;
      s.strstart++;
    }
    if (bflush) {
      /*** FLUSH_BLOCK(s, 0); ***/
      flush_block_only(s, false);
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
      /***/
    }
  }
  s.insert = ((s.strstart < (MIN_MATCH - 1)) ? s.strstart : MIN_MATCH - 1);
  if (flush === Z_FINISH) {
    /*** FLUSH_BLOCK(s, 1); ***/
    flush_block_only(s, true);
    if (s.strm.avail_out === 0) {
      return BS_FINISH_STARTED;
    }
    /***/
    return BS_FINISH_DONE;
  }
  if (s.last_lit) {
    /*** FLUSH_BLOCK(s, 0); ***/
    flush_block_only(s, false);
    if (s.strm.avail_out === 0) {
      return BS_NEED_MORE;
    }
    /***/
  }
  return BS_BLOCK_DONE;
}

/* ===========================================================================
 * Same as above, but achieves better compression. We use a lazy
 * evaluation for matches: a match is finally adopted only if there is
 * no better match at the next window position.
 */
function deflate_slow(s, flush) {
  var hash_head;          /* head of hash chain */
  var bflush;              /* set if current block must be flushed */

  var max_insert;

  /* Process the input block. */
  for (;;) {
    /* Make sure that we always have enough lookahead, except
     * at the end of the input file. We need MAX_MATCH bytes
     * for the next match, plus MIN_MATCH bytes to insert the
     * string following the next match.
     */
    if (s.lookahead < MIN_LOOKAHEAD) {
      fill_window(s);
      if (s.lookahead < MIN_LOOKAHEAD && flush === Z_NO_FLUSH) {
        return BS_NEED_MORE;
      }
      if (s.lookahead === 0) { break; } /* flush the current block */
    }

    /* Insert the string window[strstart .. strstart+2] in the
     * dictionary, and set hash_head to the head of the hash chain:
     */
    hash_head = 0/*NIL*/;
    if (s.lookahead >= MIN_MATCH) {
      /*** INSERT_STRING(s, s.strstart, hash_head); ***/
      s.ins_h = ((s.ins_h << s.hash_shift) ^ s.window[s.strstart + MIN_MATCH - 1]) & s.hash_mask;
      hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
      s.head[s.ins_h] = s.strstart;
      /***/
    }

    /* Find the longest match, discarding those <= prev_length.
     */
    s.prev_length = s.match_length;
    s.prev_match = s.match_start;
    s.match_length = MIN_MATCH - 1;

    if (hash_head !== 0/*NIL*/ && s.prev_length < s.max_lazy_match &&
        s.strstart - hash_head <= (s.w_size - MIN_LOOKAHEAD)/*MAX_DIST(s)*/) {
      /* To simplify the code, we prevent matches with the string
       * of window index 0 (in particular we have to avoid a match
       * of the string with itself at the start of the input file).
       */
      s.match_length = longest_match(s, hash_head);
      /* longest_match() sets match_start */

      if (s.match_length <= 5 &&
         (s.strategy === Z_FILTERED || (s.match_length === MIN_MATCH && s.strstart - s.match_start > 4096/*TOO_FAR*/))) {

        /* If prev_match is also MIN_MATCH, match_start is garbage
         * but we will ignore the current match anyway.
         */
        s.match_length = MIN_MATCH - 1;
      }
    }
    /* If there was a match at the previous step and the current
     * match is not better, output the previous match:
     */
    if (s.prev_length >= MIN_MATCH && s.match_length <= s.prev_length) {
      max_insert = s.strstart + s.lookahead - MIN_MATCH;
      /* Do not insert strings in hash table beyond this. */

      //check_match(s, s.strstart-1, s.prev_match, s.prev_length);

      /***_tr_tally_dist(s, s.strstart - 1 - s.prev_match,
                     s.prev_length - MIN_MATCH, bflush);***/
      bflush = trees._tr_tally(s, s.strstart - 1 - s.prev_match, s.prev_length - MIN_MATCH);
      /* Insert in hash table all strings up to the end of the match.
       * strstart-1 and strstart are already inserted. If there is not
       * enough lookahead, the last two strings are not inserted in
       * the hash table.
       */
      s.lookahead -= s.prev_length - 1;
      s.prev_length -= 2;
      do {
        if (++s.strstart <= max_insert) {
          /*** INSERT_STRING(s, s.strstart, hash_head); ***/
          s.ins_h = ((s.ins_h << s.hash_shift) ^ s.window[s.strstart + MIN_MATCH - 1]) & s.hash_mask;
          hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
          s.head[s.ins_h] = s.strstart;
          /***/
        }
      } while (--s.prev_length !== 0);
      s.match_available = 0;
      s.match_length = MIN_MATCH - 1;
      s.strstart++;

      if (bflush) {
        /*** FLUSH_BLOCK(s, 0); ***/
        flush_block_only(s, false);
        if (s.strm.avail_out === 0) {
          return BS_NEED_MORE;
        }
        /***/
      }

    } else if (s.match_available) {
      /* If there was no match at the previous position, output a
       * single literal. If there was a match but the current match
       * is longer, truncate the previous match to a single literal.
       */
      //Tracevv((stderr,"%c", s->window[s->strstart-1]));
      /*** _tr_tally_lit(s, s.window[s.strstart-1], bflush); ***/
      bflush = trees._tr_tally(s, 0, s.window[s.strstart - 1]);

      if (bflush) {
        /*** FLUSH_BLOCK_ONLY(s, 0) ***/
        flush_block_only(s, false);
        /***/
      }
      s.strstart++;
      s.lookahead--;
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
    } else {
      /* There is no previous match to compare with, wait for
       * the next step to decide.
       */
      s.match_available = 1;
      s.strstart++;
      s.lookahead--;
    }
  }
  //Assert (flush != Z_NO_FLUSH, "no flush?");
  if (s.match_available) {
    //Tracevv((stderr,"%c", s->window[s->strstart-1]));
    /*** _tr_tally_lit(s, s.window[s.strstart-1], bflush); ***/
    bflush = trees._tr_tally(s, 0, s.window[s.strstart - 1]);

    s.match_available = 0;
  }
  s.insert = s.strstart < MIN_MATCH - 1 ? s.strstart : MIN_MATCH - 1;
  if (flush === Z_FINISH) {
    /*** FLUSH_BLOCK(s, 1); ***/
    flush_block_only(s, true);
    if (s.strm.avail_out === 0) {
      return BS_FINISH_STARTED;
    }
    /***/
    return BS_FINISH_DONE;
  }
  if (s.last_lit) {
    /*** FLUSH_BLOCK(s, 0); ***/
    flush_block_only(s, false);
    if (s.strm.avail_out === 0) {
      return BS_NEED_MORE;
    }
    /***/
  }

  return BS_BLOCK_DONE;
}


/* ===========================================================================
 * For Z_RLE, simply look for runs of bytes, generate matches only of distance
 * one.  Do not maintain a hash table.  (It will be regenerated if this run of
 * deflate switches away from Z_RLE.)
 */
function deflate_rle(s, flush) {
  var bflush;            /* set if current block must be flushed */
  var prev;              /* byte at distance one to match */
  var scan, strend;      /* scan goes up to strend for length of run */

  var _win = s.window;

  for (;;) {
    /* Make sure that we always have enough lookahead, except
     * at the end of the input file. We need MAX_MATCH bytes
     * for the longest run, plus one for the unrolled loop.
     */
    if (s.lookahead <= MAX_MATCH) {
      fill_window(s);
      if (s.lookahead <= MAX_MATCH && flush === Z_NO_FLUSH) {
        return BS_NEED_MORE;
      }
      if (s.lookahead === 0) { break; } /* flush the current block */
    }

    /* See how many times the previous byte repeats */
    s.match_length = 0;
    if (s.lookahead >= MIN_MATCH && s.strstart > 0) {
      scan = s.strstart - 1;
      prev = _win[scan];
      if (prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan]) {
        strend = s.strstart + MAX_MATCH;
        do {
          /*jshint noempty:false*/
        } while (prev === _win[++scan] && prev === _win[++scan] &&
                 prev === _win[++scan] && prev === _win[++scan] &&
                 prev === _win[++scan] && prev === _win[++scan] &&
                 prev === _win[++scan] && prev === _win[++scan] &&
                 scan < strend);
        s.match_length = MAX_MATCH - (strend - scan);
        if (s.match_length > s.lookahead) {
          s.match_length = s.lookahead;
        }
      }
      //Assert(scan <= s->window+(uInt)(s->window_size-1), "wild scan");
    }

    /* Emit match if have run of MIN_MATCH or longer, else emit literal */
    if (s.match_length >= MIN_MATCH) {
      //check_match(s, s.strstart, s.strstart - 1, s.match_length);

      /*** _tr_tally_dist(s, 1, s.match_length - MIN_MATCH, bflush); ***/
      bflush = trees._tr_tally(s, 1, s.match_length - MIN_MATCH);

      s.lookahead -= s.match_length;
      s.strstart += s.match_length;
      s.match_length = 0;
    } else {
      /* No match, output a literal byte */
      //Tracevv((stderr,"%c", s->window[s->strstart]));
      /*** _tr_tally_lit(s, s.window[s.strstart], bflush); ***/
      bflush = trees._tr_tally(s, 0, s.window[s.strstart]);

      s.lookahead--;
      s.strstart++;
    }
    if (bflush) {
      /*** FLUSH_BLOCK(s, 0); ***/
      flush_block_only(s, false);
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
      /***/
    }
  }
  s.insert = 0;
  if (flush === Z_FINISH) {
    /*** FLUSH_BLOCK(s, 1); ***/
    flush_block_only(s, true);
    if (s.strm.avail_out === 0) {
      return BS_FINISH_STARTED;
    }
    /***/
    return BS_FINISH_DONE;
  }
  if (s.last_lit) {
    /*** FLUSH_BLOCK(s, 0); ***/
    flush_block_only(s, false);
    if (s.strm.avail_out === 0) {
      return BS_NEED_MORE;
    }
    /***/
  }
  return BS_BLOCK_DONE;
}

/* ===========================================================================
 * For Z_HUFFMAN_ONLY, do not look for matches.  Do not maintain a hash table.
 * (It will be regenerated if this run of deflate switches away from Huffman.)
 */
function deflate_huff(s, flush) {
  var bflush;             /* set if current block must be flushed */

  for (;;) {
    /* Make sure that we have a literal to write. */
    if (s.lookahead === 0) {
      fill_window(s);
      if (s.lookahead === 0) {
        if (flush === Z_NO_FLUSH) {
          return BS_NEED_MORE;
        }
        break;      /* flush the current block */
      }
    }

    /* Output a literal byte */
    s.match_length = 0;
    //Tracevv((stderr,"%c", s->window[s->strstart]));
    /*** _tr_tally_lit(s, s.window[s.strstart], bflush); ***/
    bflush = trees._tr_tally(s, 0, s.window[s.strstart]);
    s.lookahead--;
    s.strstart++;
    if (bflush) {
      /*** FLUSH_BLOCK(s, 0); ***/
      flush_block_only(s, false);
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
      /***/
    }
  }
  s.insert = 0;
  if (flush === Z_FINISH) {
    /*** FLUSH_BLOCK(s, 1); ***/
    flush_block_only(s, true);
    if (s.strm.avail_out === 0) {
      return BS_FINISH_STARTED;
    }
    /***/
    return BS_FINISH_DONE;
  }
  if (s.last_lit) {
    /*** FLUSH_BLOCK(s, 0); ***/
    flush_block_only(s, false);
    if (s.strm.avail_out === 0) {
      return BS_NEED_MORE;
    }
    /***/
  }
  return BS_BLOCK_DONE;
}

/* Values for max_lazy_match, good_match and max_chain_length, depending on
 * the desired pack level (0..9). The values given below have been tuned to
 * exclude worst case performance for pathological files. Better values may be
 * found for specific files.
 */
function Config(good_length, max_lazy, nice_length, max_chain, func) {
  this.good_length = good_length;
  this.max_lazy = max_lazy;
  this.nice_length = nice_length;
  this.max_chain = max_chain;
  this.func = func;
}

var configuration_table;

configuration_table = [
  /*      good lazy nice chain */
  new Config(0, 0, 0, 0, deflate_stored),          /* 0 store only */
  new Config(4, 4, 8, 4, deflate_fast),            /* 1 max speed, no lazy matches */
  new Config(4, 5, 16, 8, deflate_fast),           /* 2 */
  new Config(4, 6, 32, 32, deflate_fast),          /* 3 */

  new Config(4, 4, 16, 16, deflate_slow),          /* 4 lazy matches */
  new Config(8, 16, 32, 32, deflate_slow),         /* 5 */
  new Config(8, 16, 128, 128, deflate_slow),       /* 6 */
  new Config(8, 32, 128, 256, deflate_slow),       /* 7 */
  new Config(32, 128, 258, 1024, deflate_slow),    /* 8 */
  new Config(32, 258, 258, 4096, deflate_slow)     /* 9 max compression */
];


/* ===========================================================================
 * Initialize the "longest match" routines for a new zlib stream
 */
function lm_init(s) {
  s.window_size = 2 * s.w_size;

  /*** CLEAR_HASH(s); ***/
  zero(s.head); // Fill with NIL (= 0);

  /* Set the default configuration parameters:
   */
  s.max_lazy_match = configuration_table[s.level].max_lazy;
  s.good_match = configuration_table[s.level].good_length;
  s.nice_match = configuration_table[s.level].nice_length;
  s.max_chain_length = configuration_table[s.level].max_chain;

  s.strstart = 0;
  s.block_start = 0;
  s.lookahead = 0;
  s.insert = 0;
  s.match_length = s.prev_length = MIN_MATCH - 1;
  s.match_available = 0;
  s.ins_h = 0;
}


function DeflateState() {
  this.strm = null;            /* pointer back to this zlib stream */
  this.status = 0;            /* as the name implies */
  this.pending_buf = null;      /* output still pending */
  this.pending_buf_size = 0;  /* size of pending_buf */
  this.pending_out = 0;       /* next pending byte to output to the stream */
  this.pending = 0;           /* nb of bytes in the pending buffer */
  this.wrap = 0;              /* bit 0 true for zlib, bit 1 true for gzip */
  this.gzhead = null;         /* gzip header information to write */
  this.gzindex = 0;           /* where in extra, name, or comment */
  this.method = Z_DEFLATED; /* can only be DEFLATED */
  this.last_flush = -1;   /* value of flush param for previous deflate call */

  this.w_size = 0;  /* LZ77 window size (32K by default) */
  this.w_bits = 0;  /* log2(w_size)  (8..16) */
  this.w_mask = 0;  /* w_size - 1 */

  this.window = null;
  /* Sliding window. Input bytes are read into the second half of the window,
   * and move to the first half later to keep a dictionary of at least wSize
   * bytes. With this organization, matches are limited to a distance of
   * wSize-MAX_MATCH bytes, but this ensures that IO is always
   * performed with a length multiple of the block size.
   */

  this.window_size = 0;
  /* Actual size of window: 2*wSize, except when the user input buffer
   * is directly used as sliding window.
   */

  this.prev = null;
  /* Link to older string with same hash index. To limit the size of this
   * array to 64K, this link is maintained only for the last 32K strings.
   * An index in this array is thus a window index modulo 32K.
   */

  this.head = null;   /* Heads of the hash chains or NIL. */

  this.ins_h = 0;       /* hash index of string to be inserted */
  this.hash_size = 0;   /* number of elements in hash table */
  this.hash_bits = 0;   /* log2(hash_size) */
  this.hash_mask = 0;   /* hash_size-1 */

  this.hash_shift = 0;
  /* Number of bits by which ins_h must be shifted at each input
   * step. It must be such that after MIN_MATCH steps, the oldest
   * byte no longer takes part in the hash key, that is:
   *   hash_shift * MIN_MATCH >= hash_bits
   */

  this.block_start = 0;
  /* Window position at the beginning of the current output block. Gets
   * negative when the window is moved backwards.
   */

  this.match_length = 0;      /* length of best match */
  this.prev_match = 0;        /* previous match */
  this.match_available = 0;   /* set if previous match exists */
  this.strstart = 0;          /* start of string to insert */
  this.match_start = 0;       /* start of matching string */
  this.lookahead = 0;         /* number of valid bytes ahead in window */

  this.prev_length = 0;
  /* Length of the best match at previous step. Matches not greater than this
   * are discarded. This is used in the lazy match evaluation.
   */

  this.max_chain_length = 0;
  /* To speed up deflation, hash chains are never searched beyond this
   * length.  A higher limit improves compression ratio but degrades the
   * speed.
   */

  this.max_lazy_match = 0;
  /* Attempt to find a better match only when the current match is strictly
   * smaller than this value. This mechanism is used only for compression
   * levels >= 4.
   */
  // That's alias to max_lazy_match, don't use directly
  //this.max_insert_length = 0;
  /* Insert new strings in the hash table only if the match length is not
   * greater than this length. This saves time but degrades compression.
   * max_insert_length is used only for compression levels <= 3.
   */

  this.level = 0;     /* compression level (1..9) */
  this.strategy = 0;  /* favor or force Huffman coding*/

  this.good_match = 0;
  /* Use a faster search when the previous match is longer than this */

  this.nice_match = 0; /* Stop searching when current match exceeds this */

              /* used by trees.c: */

  /* Didn't use ct_data typedef below to suppress compiler warning */

  // struct ct_data_s dyn_ltree[HEAP_SIZE];   /* literal and length tree */
  // struct ct_data_s dyn_dtree[2*D_CODES+1]; /* distance tree */
  // struct ct_data_s bl_tree[2*BL_CODES+1];  /* Huffman tree for bit lengths */

  // Use flat array of DOUBLE size, with interleaved fata,
  // because JS does not support effective
  this.dyn_ltree  = new utils.Buf16(HEAP_SIZE * 2);
  this.dyn_dtree  = new utils.Buf16((2 * D_CODES + 1) * 2);
  this.bl_tree    = new utils.Buf16((2 * BL_CODES + 1) * 2);
  zero(this.dyn_ltree);
  zero(this.dyn_dtree);
  zero(this.bl_tree);

  this.l_desc   = null;         /* desc. for literal tree */
  this.d_desc   = null;         /* desc. for distance tree */
  this.bl_desc  = null;         /* desc. for bit length tree */

  //ush bl_count[MAX_BITS+1];
  this.bl_count = new utils.Buf16(MAX_BITS + 1);
  /* number of codes at each bit length for an optimal tree */

  //int heap[2*L_CODES+1];      /* heap used to build the Huffman trees */
  this.heap = new utils.Buf16(2 * L_CODES + 1);  /* heap used to build the Huffman trees */
  zero(this.heap);

  this.heap_len = 0;               /* number of elements in the heap */
  this.heap_max = 0;               /* element of largest frequency */
  /* The sons of heap[n] are heap[2*n] and heap[2*n+1]. heap[0] is not used.
   * The same heap array is used to build all trees.
   */

  this.depth = new utils.Buf16(2 * L_CODES + 1); //uch depth[2*L_CODES+1];
  zero(this.depth);
  /* Depth of each subtree used as tie breaker for trees of equal frequency
   */

  this.l_buf = 0;          /* buffer index for literals or lengths */

  this.lit_bufsize = 0;
  /* Size of match buffer for literals/lengths.  There are 4 reasons for
   * limiting lit_bufsize to 64K:
   *   - frequencies can be kept in 16 bit counters
   *   - if compression is not successful for the first block, all input
   *     data is still in the window so we can still emit a stored block even
   *     when input comes from standard input.  (This can also be done for
   *     all blocks if lit_bufsize is not greater than 32K.)
   *   - if compression is not successful for a file smaller than 64K, we can
   *     even emit a stored file instead of a stored block (saving 5 bytes).
   *     This is applicable only for zip (not gzip or zlib).
   *   - creating new Huffman trees less frequently may not provide fast
   *     adaptation to changes in the input data statistics. (Take for
   *     example a binary file with poorly compressible code followed by
   *     a highly compressible string table.) Smaller buffer sizes give
   *     fast adaptation but have of course the overhead of transmitting
   *     trees more frequently.
   *   - I can't count above 4
   */

  this.last_lit = 0;      /* running index in l_buf */

  this.d_buf = 0;
  /* Buffer index for distances. To simplify the code, d_buf and l_buf have
   * the same number of elements. To use different lengths, an extra flag
   * array would be necessary.
   */

  this.opt_len = 0;       /* bit length of current block with optimal trees */
  this.static_len = 0;    /* bit length of current block with static trees */
  this.matches = 0;       /* number of string matches in current block */
  this.insert = 0;        /* bytes at end of window left to insert */


  this.bi_buf = 0;
  /* Output buffer. bits are inserted starting at the bottom (least
   * significant bits).
   */
  this.bi_valid = 0;
  /* Number of valid bits in bi_buf.  All bits above the last valid bit
   * are always zero.
   */

  // Used for window memory init. We safely ignore it for JS. That makes
  // sense only for pointers and memory check tools.
  //this.high_water = 0;
  /* High water mark offset in window for initialized bytes -- bytes above
   * this are set to zero in order to avoid memory check warnings when
   * longest match routines access bytes past the input.  This is then
   * updated to the new high water mark.
   */
}


function deflateResetKeep(strm) {
  var s;

  if (!strm || !strm.state) {
    return err(strm, Z_STREAM_ERROR);
  }

  strm.total_in = strm.total_out = 0;
  strm.data_type = Z_UNKNOWN;

  s = strm.state;
  s.pending = 0;
  s.pending_out = 0;

  if (s.wrap < 0) {
    s.wrap = -s.wrap;
    /* was made negative by deflate(..., Z_FINISH); */
  }
  s.status = (s.wrap ? INIT_STATE : BUSY_STATE);
  strm.adler = (s.wrap === 2) ?
    0  // crc32(0, Z_NULL, 0)
  :
    1; // adler32(0, Z_NULL, 0)
  s.last_flush = Z_NO_FLUSH;
  trees._tr_init(s);
  return Z_OK;
}


function deflateReset(strm) {
  var ret = deflateResetKeep(strm);
  if (ret === Z_OK) {
    lm_init(strm.state);
  }
  return ret;
}


function deflateSetHeader(strm, head) {
  if (!strm || !strm.state) { return Z_STREAM_ERROR; }
  if (strm.state.wrap !== 2) { return Z_STREAM_ERROR; }
  strm.state.gzhead = head;
  return Z_OK;
}


function deflateInit2(strm, level, method, windowBits, memLevel, strategy) {
  if (!strm) { // === Z_NULL
    return Z_STREAM_ERROR;
  }
  var wrap = 1;

  if (level === Z_DEFAULT_COMPRESSION) {
    level = 6;
  }

  if (windowBits < 0) { /* suppress zlib wrapper */
    wrap = 0;
    windowBits = -windowBits;
  }

  else if (windowBits > 15) {
    wrap = 2;           /* write gzip wrapper instead */
    windowBits -= 16;
  }


  if (memLevel < 1 || memLevel > MAX_MEM_LEVEL || method !== Z_DEFLATED ||
    windowBits < 8 || windowBits > 15 || level < 0 || level > 9 ||
    strategy < 0 || strategy > Z_FIXED) {
    return err(strm, Z_STREAM_ERROR);
  }


  if (windowBits === 8) {
    windowBits = 9;
  }
  /* until 256-byte window bug fixed */

  var s = new DeflateState();

  strm.state = s;
  s.strm = strm;

  s.wrap = wrap;
  s.gzhead = null;
  s.w_bits = windowBits;
  s.w_size = 1 << s.w_bits;
  s.w_mask = s.w_size - 1;

  s.hash_bits = memLevel + 7;
  s.hash_size = 1 << s.hash_bits;
  s.hash_mask = s.hash_size - 1;
  s.hash_shift = ~~((s.hash_bits + MIN_MATCH - 1) / MIN_MATCH);

  s.window = new utils.Buf8(s.w_size * 2);
  s.head = new utils.Buf16(s.hash_size);
  s.prev = new utils.Buf16(s.w_size);

  // Don't need mem init magic for JS.
  //s.high_water = 0;  /* nothing written to s->window yet */

  s.lit_bufsize = 1 << (memLevel + 6); /* 16K elements by default */

  s.pending_buf_size = s.lit_bufsize * 4;

  //overlay = (ushf *) ZALLOC(strm, s->lit_bufsize, sizeof(ush)+2);
  //s->pending_buf = (uchf *) overlay;
  s.pending_buf = new utils.Buf8(s.pending_buf_size);

  // It is offset from `s.pending_buf` (size is `s.lit_bufsize * 2`)
  //s->d_buf = overlay + s->lit_bufsize/sizeof(ush);
  s.d_buf = 1 * s.lit_bufsize;

  //s->l_buf = s->pending_buf + (1+sizeof(ush))*s->lit_bufsize;
  s.l_buf = (1 + 2) * s.lit_bufsize;

  s.level = level;
  s.strategy = strategy;
  s.method = method;

  return deflateReset(strm);
}

function deflateInit(strm, level) {
  return deflateInit2(strm, level, Z_DEFLATED, MAX_WBITS, DEF_MEM_LEVEL, Z_DEFAULT_STRATEGY);
}


function deflate(strm, flush) {
  var old_flush, s;
  var beg, val; // for gzip header write only

  if (!strm || !strm.state ||
    flush > Z_BLOCK || flush < 0) {
    return strm ? err(strm, Z_STREAM_ERROR) : Z_STREAM_ERROR;
  }

  s = strm.state;

  if (!strm.output ||
      (!strm.input && strm.avail_in !== 0) ||
      (s.status === FINISH_STATE && flush !== Z_FINISH)) {
    return err(strm, (strm.avail_out === 0) ? Z_BUF_ERROR : Z_STREAM_ERROR);
  }

  s.strm = strm; /* just in case */
  old_flush = s.last_flush;
  s.last_flush = flush;

  /* Write the header */
  if (s.status === INIT_STATE) {

    if (s.wrap === 2) { // GZIP header
      strm.adler = 0;  //crc32(0L, Z_NULL, 0);
      put_byte(s, 31);
      put_byte(s, 139);
      put_byte(s, 8);
      if (!s.gzhead) { // s->gzhead == Z_NULL
        put_byte(s, 0);
        put_byte(s, 0);
        put_byte(s, 0);
        put_byte(s, 0);
        put_byte(s, 0);
        put_byte(s, s.level === 9 ? 2 :
                    (s.strategy >= Z_HUFFMAN_ONLY || s.level < 2 ?
                     4 : 0));
        put_byte(s, OS_CODE);
        s.status = BUSY_STATE;
      }
      else {
        put_byte(s, (s.gzhead.text ? 1 : 0) +
                    (s.gzhead.hcrc ? 2 : 0) +
                    (!s.gzhead.extra ? 0 : 4) +
                    (!s.gzhead.name ? 0 : 8) +
                    (!s.gzhead.comment ? 0 : 16)
        );
        put_byte(s, s.gzhead.time & 0xff);
        put_byte(s, (s.gzhead.time >> 8) & 0xff);
        put_byte(s, (s.gzhead.time >> 16) & 0xff);
        put_byte(s, (s.gzhead.time >> 24) & 0xff);
        put_byte(s, s.level === 9 ? 2 :
                    (s.strategy >= Z_HUFFMAN_ONLY || s.level < 2 ?
                     4 : 0));
        put_byte(s, s.gzhead.os & 0xff);
        if (s.gzhead.extra && s.gzhead.extra.length) {
          put_byte(s, s.gzhead.extra.length & 0xff);
          put_byte(s, (s.gzhead.extra.length >> 8) & 0xff);
        }
        if (s.gzhead.hcrc) {
          strm.adler = crc32(strm.adler, s.pending_buf, s.pending, 0);
        }
        s.gzindex = 0;
        s.status = EXTRA_STATE;
      }
    }
    else // DEFLATE header
    {
      var header = (Z_DEFLATED + ((s.w_bits - 8) << 4)) << 8;
      var level_flags = -1;

      if (s.strategy >= Z_HUFFMAN_ONLY || s.level < 2) {
        level_flags = 0;
      } else if (s.level < 6) {
        level_flags = 1;
      } else if (s.level === 6) {
        level_flags = 2;
      } else {
        level_flags = 3;
      }
      header |= (level_flags << 6);
      if (s.strstart !== 0) { header |= PRESET_DICT; }
      header += 31 - (header % 31);

      s.status = BUSY_STATE;
      putShortMSB(s, header);

      /* Save the adler32 of the preset dictionary: */
      if (s.strstart !== 0) {
        putShortMSB(s, strm.adler >>> 16);
        putShortMSB(s, strm.adler & 0xffff);
      }
      strm.adler = 1; // adler32(0L, Z_NULL, 0);
    }
  }

//#ifdef GZIP
  if (s.status === EXTRA_STATE) {
    if (s.gzhead.extra/* != Z_NULL*/) {
      beg = s.pending;  /* start of bytes to update crc */

      while (s.gzindex < (s.gzhead.extra.length & 0xffff)) {
        if (s.pending === s.pending_buf_size) {
          if (s.gzhead.hcrc && s.pending > beg) {
            strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
          }
          flush_pending(strm);
          beg = s.pending;
          if (s.pending === s.pending_buf_size) {
            break;
          }
        }
        put_byte(s, s.gzhead.extra[s.gzindex] & 0xff);
        s.gzindex++;
      }
      if (s.gzhead.hcrc && s.pending > beg) {
        strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
      }
      if (s.gzindex === s.gzhead.extra.length) {
        s.gzindex = 0;
        s.status = NAME_STATE;
      }
    }
    else {
      s.status = NAME_STATE;
    }
  }
  if (s.status === NAME_STATE) {
    if (s.gzhead.name/* != Z_NULL*/) {
      beg = s.pending;  /* start of bytes to update crc */
      //int val;

      do {
        if (s.pending === s.pending_buf_size) {
          if (s.gzhead.hcrc && s.pending > beg) {
            strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
          }
          flush_pending(strm);
          beg = s.pending;
          if (s.pending === s.pending_buf_size) {
            val = 1;
            break;
          }
        }
        // JS specific: little magic to add zero terminator to end of string
        if (s.gzindex < s.gzhead.name.length) {
          val = s.gzhead.name.charCodeAt(s.gzindex++) & 0xff;
        } else {
          val = 0;
        }
        put_byte(s, val);
      } while (val !== 0);

      if (s.gzhead.hcrc && s.pending > beg) {
        strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
      }
      if (val === 0) {
        s.gzindex = 0;
        s.status = COMMENT_STATE;
      }
    }
    else {
      s.status = COMMENT_STATE;
    }
  }
  if (s.status === COMMENT_STATE) {
    if (s.gzhead.comment/* != Z_NULL*/) {
      beg = s.pending;  /* start of bytes to update crc */
      //int val;

      do {
        if (s.pending === s.pending_buf_size) {
          if (s.gzhead.hcrc && s.pending > beg) {
            strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
          }
          flush_pending(strm);
          beg = s.pending;
          if (s.pending === s.pending_buf_size) {
            val = 1;
            break;
          }
        }
        // JS specific: little magic to add zero terminator to end of string
        if (s.gzindex < s.gzhead.comment.length) {
          val = s.gzhead.comment.charCodeAt(s.gzindex++) & 0xff;
        } else {
          val = 0;
        }
        put_byte(s, val);
      } while (val !== 0);

      if (s.gzhead.hcrc && s.pending > beg) {
        strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
      }
      if (val === 0) {
        s.status = HCRC_STATE;
      }
    }
    else {
      s.status = HCRC_STATE;
    }
  }
  if (s.status === HCRC_STATE) {
    if (s.gzhead.hcrc) {
      if (s.pending + 2 > s.pending_buf_size) {
        flush_pending(strm);
      }
      if (s.pending + 2 <= s.pending_buf_size) {
        put_byte(s, strm.adler & 0xff);
        put_byte(s, (strm.adler >> 8) & 0xff);
        strm.adler = 0; //crc32(0L, Z_NULL, 0);
        s.status = BUSY_STATE;
      }
    }
    else {
      s.status = BUSY_STATE;
    }
  }
//#endif

  /* Flush as much pending output as possible */
  if (s.pending !== 0) {
    flush_pending(strm);
    if (strm.avail_out === 0) {
      /* Since avail_out is 0, deflate will be called again with
       * more output space, but possibly with both pending and
       * avail_in equal to zero. There won't be anything to do,
       * but this is not an error situation so make sure we
       * return OK instead of BUF_ERROR at next call of deflate:
       */
      s.last_flush = -1;
      return Z_OK;
    }

    /* Make sure there is something to do and avoid duplicate consecutive
     * flushes. For repeated and useless calls with Z_FINISH, we keep
     * returning Z_STREAM_END instead of Z_BUF_ERROR.
     */
  } else if (strm.avail_in === 0 && rank(flush) <= rank(old_flush) &&
    flush !== Z_FINISH) {
    return err(strm, Z_BUF_ERROR);
  }

  /* User must not provide more input after the first FINISH: */
  if (s.status === FINISH_STATE && strm.avail_in !== 0) {
    return err(strm, Z_BUF_ERROR);
  }

  /* Start a new block or continue the current one.
   */
  if (strm.avail_in !== 0 || s.lookahead !== 0 ||
    (flush !== Z_NO_FLUSH && s.status !== FINISH_STATE)) {
    var bstate = (s.strategy === Z_HUFFMAN_ONLY) ? deflate_huff(s, flush) :
      (s.strategy === Z_RLE ? deflate_rle(s, flush) :
        configuration_table[s.level].func(s, flush));

    if (bstate === BS_FINISH_STARTED || bstate === BS_FINISH_DONE) {
      s.status = FINISH_STATE;
    }
    if (bstate === BS_NEED_MORE || bstate === BS_FINISH_STARTED) {
      if (strm.avail_out === 0) {
        s.last_flush = -1;
        /* avoid BUF_ERROR next call, see above */
      }
      return Z_OK;
      /* If flush != Z_NO_FLUSH && avail_out == 0, the next call
       * of deflate should use the same flush parameter to make sure
       * that the flush is complete. So we don't have to output an
       * empty block here, this will be done at next call. This also
       * ensures that for a very small output buffer, we emit at most
       * one empty block.
       */
    }
    if (bstate === BS_BLOCK_DONE) {
      if (flush === Z_PARTIAL_FLUSH) {
        trees._tr_align(s);
      }
      else if (flush !== Z_BLOCK) { /* FULL_FLUSH or SYNC_FLUSH */

        trees._tr_stored_block(s, 0, 0, false);
        /* For a full flush, this empty block will be recognized
         * as a special marker by inflate_sync().
         */
        if (flush === Z_FULL_FLUSH) {
          /*** CLEAR_HASH(s); ***/             /* forget history */
          zero(s.head); // Fill with NIL (= 0);

          if (s.lookahead === 0) {
            s.strstart = 0;
            s.block_start = 0;
            s.insert = 0;
          }
        }
      }
      flush_pending(strm);
      if (strm.avail_out === 0) {
        s.last_flush = -1; /* avoid BUF_ERROR at next call, see above */
        return Z_OK;
      }
    }
  }
  //Assert(strm->avail_out > 0, "bug2");
  //if (strm.avail_out <= 0) { throw new Error("bug2");}

  if (flush !== Z_FINISH) { return Z_OK; }
  if (s.wrap <= 0) { return Z_STREAM_END; }

  /* Write the trailer */
  if (s.wrap === 2) {
    put_byte(s, strm.adler & 0xff);
    put_byte(s, (strm.adler >> 8) & 0xff);
    put_byte(s, (strm.adler >> 16) & 0xff);
    put_byte(s, (strm.adler >> 24) & 0xff);
    put_byte(s, strm.total_in & 0xff);
    put_byte(s, (strm.total_in >> 8) & 0xff);
    put_byte(s, (strm.total_in >> 16) & 0xff);
    put_byte(s, (strm.total_in >> 24) & 0xff);
  }
  else
  {
    putShortMSB(s, strm.adler >>> 16);
    putShortMSB(s, strm.adler & 0xffff);
  }

  flush_pending(strm);
  /* If avail_out is zero, the application will call deflate again
   * to flush the rest.
   */
  if (s.wrap > 0) { s.wrap = -s.wrap; }
  /* write the trailer only once! */
  return s.pending !== 0 ? Z_OK : Z_STREAM_END;
}

function deflateEnd(strm) {
  var status;

  if (!strm/*== Z_NULL*/ || !strm.state/*== Z_NULL*/) {
    return Z_STREAM_ERROR;
  }

  status = strm.state.status;
  if (status !== INIT_STATE &&
    status !== EXTRA_STATE &&
    status !== NAME_STATE &&
    status !== COMMENT_STATE &&
    status !== HCRC_STATE &&
    status !== BUSY_STATE &&
    status !== FINISH_STATE
  ) {
    return err(strm, Z_STREAM_ERROR);
  }

  strm.state = null;

  return status === BUSY_STATE ? err(strm, Z_DATA_ERROR) : Z_OK;
}


/* =========================================================================
 * Initializes the compression dictionary from the given byte
 * sequence without producing any compressed output.
 */
function deflateSetDictionary(strm, dictionary) {
  var dictLength = dictionary.length;

  var s;
  var str, n;
  var wrap;
  var avail;
  var next;
  var input;
  var tmpDict;

  if (!strm/*== Z_NULL*/ || !strm.state/*== Z_NULL*/) {
    return Z_STREAM_ERROR;
  }

  s = strm.state;
  wrap = s.wrap;

  if (wrap === 2 || (wrap === 1 && s.status !== INIT_STATE) || s.lookahead) {
    return Z_STREAM_ERROR;
  }

  /* when using zlib wrappers, compute Adler-32 for provided dictionary */
  if (wrap === 1) {
    /* adler32(strm->adler, dictionary, dictLength); */
    strm.adler = adler32(strm.adler, dictionary, dictLength, 0);
  }

  s.wrap = 0;   /* avoid computing Adler-32 in read_buf */

  /* if dictionary would fill window, just replace the history */
  if (dictLength >= s.w_size) {
    if (wrap === 0) {            /* already empty otherwise */
      /*** CLEAR_HASH(s); ***/
      zero(s.head); // Fill with NIL (= 0);
      s.strstart = 0;
      s.block_start = 0;
      s.insert = 0;
    }
    /* use the tail */
    // dictionary = dictionary.slice(dictLength - s.w_size);
    tmpDict = new utils.Buf8(s.w_size);
    utils.arraySet(tmpDict, dictionary, dictLength - s.w_size, s.w_size, 0);
    dictionary = tmpDict;
    dictLength = s.w_size;
  }
  /* insert dictionary into window and hash */
  avail = strm.avail_in;
  next = strm.next_in;
  input = strm.input;
  strm.avail_in = dictLength;
  strm.next_in = 0;
  strm.input = dictionary;
  fill_window(s);
  while (s.lookahead >= MIN_MATCH) {
    str = s.strstart;
    n = s.lookahead - (MIN_MATCH - 1);
    do {
      /* UPDATE_HASH(s, s->ins_h, s->window[str + MIN_MATCH-1]); */
      s.ins_h = ((s.ins_h << s.hash_shift) ^ s.window[str + MIN_MATCH - 1]) & s.hash_mask;

      s.prev[str & s.w_mask] = s.head[s.ins_h];

      s.head[s.ins_h] = str;
      str++;
    } while (--n);
    s.strstart = str;
    s.lookahead = MIN_MATCH - 1;
    fill_window(s);
  }
  s.strstart += s.lookahead;
  s.block_start = s.strstart;
  s.insert = s.lookahead;
  s.lookahead = 0;
  s.match_length = s.prev_length = MIN_MATCH - 1;
  s.match_available = 0;
  strm.next_in = next;
  strm.input = input;
  strm.avail_in = avail;
  s.wrap = wrap;
  return Z_OK;
}


exports.deflateInit = deflateInit;
exports.deflateInit2 = deflateInit2;
exports.deflateReset = deflateReset;
exports.deflateResetKeep = deflateResetKeep;
exports.deflateSetHeader = deflateSetHeader;
exports.deflate = deflate;
exports.deflateEnd = deflateEnd;
exports.deflateSetDictionary = deflateSetDictionary;
exports.deflateInfo = 'pako deflate (from Nodeca project)';

/* Not implemented
exports.deflateBound = deflateBound;
exports.deflateCopy = deflateCopy;
exports.deflateParams = deflateParams;
exports.deflatePending = deflatePending;
exports.deflatePrime = deflatePrime;
exports.deflateTune = deflateTune;
*/

},{"../utils/common":3,"./adler32":5,"./crc32":7,"./messages":13,"./trees":14}],9:[function(require,module,exports){
'use strict';

// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

function GZheader() {
  /* true if compressed data believed to be text */
  this.text       = 0;
  /* modification time */
  this.time       = 0;
  /* extra flags (not used when writing a gzip file) */
  this.xflags     = 0;
  /* operating system */
  this.os         = 0;
  /* pointer to extra field or Z_NULL if none */
  this.extra      = null;
  /* extra field length (valid if extra != Z_NULL) */
  this.extra_len  = 0; // Actually, we don't need it in JS,
                       // but leave for few code modifications

  //
  // Setup limits is not necessary because in js we should not preallocate memory
  // for inflate use constant limit in 65536 bytes
  //

  /* space at extra (only when reading header) */
  // this.extra_max  = 0;
  /* pointer to zero-terminated file name or Z_NULL */
  this.name       = '';
  /* space at name (only when reading header) */
  // this.name_max   = 0;
  /* pointer to zero-terminated comment or Z_NULL */
  this.comment    = '';
  /* space at comment (only when reading header) */
  // this.comm_max   = 0;
  /* true if there was or will be a header crc */
  this.hcrc       = 0;
  /* true when done reading gzip header (not used when writing a gzip file) */
  this.done       = false;
}

module.exports = GZheader;

},{}],10:[function(require,module,exports){
'use strict';

// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

// See state defs from inflate.js
var BAD = 30;       /* got a data error -- remain here until reset */
var TYPE = 12;      /* i: waiting for type bits, including last-flag bit */

/*
   Decode literal, length, and distance codes and write out the resulting
   literal and match bytes until either not enough input or output is
   available, an end-of-block is encountered, or a data error is encountered.
   When large enough input and output buffers are supplied to inflate(), for
   example, a 16K input buffer and a 64K output buffer, more than 95% of the
   inflate execution time is spent in this routine.

   Entry assumptions:

        state.mode === LEN
        strm.avail_in >= 6
        strm.avail_out >= 258
        start >= strm.avail_out
        state.bits < 8

   On return, state.mode is one of:

        LEN -- ran out of enough output space or enough available input
        TYPE -- reached end of block code, inflate() to interpret next block
        BAD -- error in block data

   Notes:

    - The maximum input bits used by a length/distance pair is 15 bits for the
      length code, 5 bits for the length extra, 15 bits for the distance code,
      and 13 bits for the distance extra.  This totals 48 bits, or six bytes.
      Therefore if strm.avail_in >= 6, then there is enough input to avoid
      checking for available input while decoding.

    - The maximum bytes that a single length/distance pair can output is 258
      bytes, which is the maximum length that can be coded.  inflate_fast()
      requires strm.avail_out >= 258 for each loop to avoid checking for
      output space.
 */
module.exports = function inflate_fast(strm, start) {
  var state;
  var _in;                    /* local strm.input */
  var last;                   /* have enough input while in < last */
  var _out;                   /* local strm.output */
  var beg;                    /* inflate()'s initial strm.output */
  var end;                    /* while out < end, enough space available */
//#ifdef INFLATE_STRICT
  var dmax;                   /* maximum distance from zlib header */
//#endif
  var wsize;                  /* window size or zero if not using window */
  var whave;                  /* valid bytes in the window */
  var wnext;                  /* window write index */
  // Use `s_window` instead `window`, avoid conflict with instrumentation tools
  var s_window;               /* allocated sliding window, if wsize != 0 */
  var hold;                   /* local strm.hold */
  var bits;                   /* local strm.bits */
  var lcode;                  /* local strm.lencode */
  var dcode;                  /* local strm.distcode */
  var lmask;                  /* mask for first level of length codes */
  var dmask;                  /* mask for first level of distance codes */
  var here;                   /* retrieved table entry */
  var op;                     /* code bits, operation, extra bits, or */
                              /*  window position, window bytes to copy */
  var len;                    /* match length, unused bytes */
  var dist;                   /* match distance */
  var from;                   /* where to copy match from */
  var from_source;


  var input, output; // JS specific, because we have no pointers

  /* copy state to local variables */
  state = strm.state;
  //here = state.here;
  _in = strm.next_in;
  input = strm.input;
  last = _in + (strm.avail_in - 5);
  _out = strm.next_out;
  output = strm.output;
  beg = _out - (start - strm.avail_out);
  end = _out + (strm.avail_out - 257);
//#ifdef INFLATE_STRICT
  dmax = state.dmax;
//#endif
  wsize = state.wsize;
  whave = state.whave;
  wnext = state.wnext;
  s_window = state.window;
  hold = state.hold;
  bits = state.bits;
  lcode = state.lencode;
  dcode = state.distcode;
  lmask = (1 << state.lenbits) - 1;
  dmask = (1 << state.distbits) - 1;


  /* decode literals and length/distances until end-of-block or not enough
     input data or output space */

  top:
  do {
    if (bits < 15) {
      hold += input[_in++] << bits;
      bits += 8;
      hold += input[_in++] << bits;
      bits += 8;
    }

    here = lcode[hold & lmask];

    dolen:
    for (;;) { // Goto emulation
      op = here >>> 24/*here.bits*/;
      hold >>>= op;
      bits -= op;
      op = (here >>> 16) & 0xff/*here.op*/;
      if (op === 0) {                          /* literal */
        //Tracevv((stderr, here.val >= 0x20 && here.val < 0x7f ?
        //        "inflate:         literal '%c'\n" :
        //        "inflate:         literal 0x%02x\n", here.val));
        output[_out++] = here & 0xffff/*here.val*/;
      }
      else if (op & 16) {                     /* length base */
        len = here & 0xffff/*here.val*/;
        op &= 15;                           /* number of extra bits */
        if (op) {
          if (bits < op) {
            hold += input[_in++] << bits;
            bits += 8;
          }
          len += hold & ((1 << op) - 1);
          hold >>>= op;
          bits -= op;
        }
        //Tracevv((stderr, "inflate:         length %u\n", len));
        if (bits < 15) {
          hold += input[_in++] << bits;
          bits += 8;
          hold += input[_in++] << bits;
          bits += 8;
        }
        here = dcode[hold & dmask];

        dodist:
        for (;;) { // goto emulation
          op = here >>> 24/*here.bits*/;
          hold >>>= op;
          bits -= op;
          op = (here >>> 16) & 0xff/*here.op*/;

          if (op & 16) {                      /* distance base */
            dist = here & 0xffff/*here.val*/;
            op &= 15;                       /* number of extra bits */
            if (bits < op) {
              hold += input[_in++] << bits;
              bits += 8;
              if (bits < op) {
                hold += input[_in++] << bits;
                bits += 8;
              }
            }
            dist += hold & ((1 << op) - 1);
//#ifdef INFLATE_STRICT
            if (dist > dmax) {
              strm.msg = 'invalid distance too far back';
              state.mode = BAD;
              break top;
            }
//#endif
            hold >>>= op;
            bits -= op;
            //Tracevv((stderr, "inflate:         distance %u\n", dist));
            op = _out - beg;                /* max distance in output */
            if (dist > op) {                /* see if copy from window */
              op = dist - op;               /* distance back in window */
              if (op > whave) {
                if (state.sane) {
                  strm.msg = 'invalid distance too far back';
                  state.mode = BAD;
                  break top;
                }

// (!) This block is disabled in zlib defaults,
// don't enable it for binary compatibility
//#ifdef INFLATE_ALLOW_INVALID_DISTANCE_TOOFAR_ARRR
//                if (len <= op - whave) {
//                  do {
//                    output[_out++] = 0;
//                  } while (--len);
//                  continue top;
//                }
//                len -= op - whave;
//                do {
//                  output[_out++] = 0;
//                } while (--op > whave);
//                if (op === 0) {
//                  from = _out - dist;
//                  do {
//                    output[_out++] = output[from++];
//                  } while (--len);
//                  continue top;
//                }
//#endif
              }
              from = 0; // window index
              from_source = s_window;
              if (wnext === 0) {           /* very common case */
                from += wsize - op;
                if (op < len) {         /* some from window */
                  len -= op;
                  do {
                    output[_out++] = s_window[from++];
                  } while (--op);
                  from = _out - dist;  /* rest from output */
                  from_source = output;
                }
              }
              else if (wnext < op) {      /* wrap around window */
                from += wsize + wnext - op;
                op -= wnext;
                if (op < len) {         /* some from end of window */
                  len -= op;
                  do {
                    output[_out++] = s_window[from++];
                  } while (--op);
                  from = 0;
                  if (wnext < len) {  /* some from start of window */
                    op = wnext;
                    len -= op;
                    do {
                      output[_out++] = s_window[from++];
                    } while (--op);
                    from = _out - dist;      /* rest from output */
                    from_source = output;
                  }
                }
              }
              else {                      /* contiguous in window */
                from += wnext - op;
                if (op < len) {         /* some from window */
                  len -= op;
                  do {
                    output[_out++] = s_window[from++];
                  } while (--op);
                  from = _out - dist;  /* rest from output */
                  from_source = output;
                }
              }
              while (len > 2) {
                output[_out++] = from_source[from++];
                output[_out++] = from_source[from++];
                output[_out++] = from_source[from++];
                len -= 3;
              }
              if (len) {
                output[_out++] = from_source[from++];
                if (len > 1) {
                  output[_out++] = from_source[from++];
                }
              }
            }
            else {
              from = _out - dist;          /* copy direct from output */
              do {                        /* minimum length is three */
                output[_out++] = output[from++];
                output[_out++] = output[from++];
                output[_out++] = output[from++];
                len -= 3;
              } while (len > 2);
              if (len) {
                output[_out++] = output[from++];
                if (len > 1) {
                  output[_out++] = output[from++];
                }
              }
            }
          }
          else if ((op & 64) === 0) {          /* 2nd level distance code */
            here = dcode[(here & 0xffff)/*here.val*/ + (hold & ((1 << op) - 1))];
            continue dodist;
          }
          else {
            strm.msg = 'invalid distance code';
            state.mode = BAD;
            break top;
          }

          break; // need to emulate goto via "continue"
        }
      }
      else if ((op & 64) === 0) {              /* 2nd level length code */
        here = lcode[(here & 0xffff)/*here.val*/ + (hold & ((1 << op) - 1))];
        continue dolen;
      }
      else if (op & 32) {                     /* end-of-block */
        //Tracevv((stderr, "inflate:         end of block\n"));
        state.mode = TYPE;
        break top;
      }
      else {
        strm.msg = 'invalid literal/length code';
        state.mode = BAD;
        break top;
      }

      break; // need to emulate goto via "continue"
    }
  } while (_in < last && _out < end);

  /* return unused bytes (on entry, bits < 8, so in won't go too far back) */
  len = bits >> 3;
  _in -= len;
  bits -= len << 3;
  hold &= (1 << bits) - 1;

  /* update state and return */
  strm.next_in = _in;
  strm.next_out = _out;
  strm.avail_in = (_in < last ? 5 + (last - _in) : 5 - (_in - last));
  strm.avail_out = (_out < end ? 257 + (end - _out) : 257 - (_out - end));
  state.hold = hold;
  state.bits = bits;
  return;
};

},{}],11:[function(require,module,exports){
'use strict';

// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

var utils         = require('../utils/common');
var adler32       = require('./adler32');
var crc32         = require('./crc32');
var inflate_fast  = require('./inffast');
var inflate_table = require('./inftrees');

var CODES = 0;
var LENS = 1;
var DISTS = 2;

/* Public constants ==========================================================*/
/* ===========================================================================*/


/* Allowed flush values; see deflate() and inflate() below for details */
//var Z_NO_FLUSH      = 0;
//var Z_PARTIAL_FLUSH = 1;
//var Z_SYNC_FLUSH    = 2;
//var Z_FULL_FLUSH    = 3;
var Z_FINISH        = 4;
var Z_BLOCK         = 5;
var Z_TREES         = 6;


/* Return codes for the compression/decompression functions. Negative values
 * are errors, positive values are used for special but normal events.
 */
var Z_OK            = 0;
var Z_STREAM_END    = 1;
var Z_NEED_DICT     = 2;
//var Z_ERRNO         = -1;
var Z_STREAM_ERROR  = -2;
var Z_DATA_ERROR    = -3;
var Z_MEM_ERROR     = -4;
var Z_BUF_ERROR     = -5;
//var Z_VERSION_ERROR = -6;

/* The deflate compression method */
var Z_DEFLATED  = 8;


/* STATES ====================================================================*/
/* ===========================================================================*/


var    HEAD = 1;       /* i: waiting for magic header */
var    FLAGS = 2;      /* i: waiting for method and flags (gzip) */
var    TIME = 3;       /* i: waiting for modification time (gzip) */
var    OS = 4;         /* i: waiting for extra flags and operating system (gzip) */
var    EXLEN = 5;      /* i: waiting for extra length (gzip) */
var    EXTRA = 6;      /* i: waiting for extra bytes (gzip) */
var    NAME = 7;       /* i: waiting for end of file name (gzip) */
var    COMMENT = 8;    /* i: waiting for end of comment (gzip) */
var    HCRC = 9;       /* i: waiting for header crc (gzip) */
var    DICTID = 10;    /* i: waiting for dictionary check value */
var    DICT = 11;      /* waiting for inflateSetDictionary() call */
var        TYPE = 12;      /* i: waiting for type bits, including last-flag bit */
var        TYPEDO = 13;    /* i: same, but skip check to exit inflate on new block */
var        STORED = 14;    /* i: waiting for stored size (length and complement) */
var        COPY_ = 15;     /* i/o: same as COPY below, but only first time in */
var        COPY = 16;      /* i/o: waiting for input or output to copy stored block */
var        TABLE = 17;     /* i: waiting for dynamic block table lengths */
var        LENLENS = 18;   /* i: waiting for code length code lengths */
var        CODELENS = 19;  /* i: waiting for length/lit and distance code lengths */
var            LEN_ = 20;      /* i: same as LEN below, but only first time in */
var            LEN = 21;       /* i: waiting for length/lit/eob code */
var            LENEXT = 22;    /* i: waiting for length extra bits */
var            DIST = 23;      /* i: waiting for distance code */
var            DISTEXT = 24;   /* i: waiting for distance extra bits */
var            MATCH = 25;     /* o: waiting for output space to copy string */
var            LIT = 26;       /* o: waiting for output space to write literal */
var    CHECK = 27;     /* i: waiting for 32-bit check value */
var    LENGTH = 28;    /* i: waiting for 32-bit length (gzip) */
var    DONE = 29;      /* finished check, done -- remain here until reset */
var    BAD = 30;       /* got a data error -- remain here until reset */
var    MEM = 31;       /* got an inflate() memory error -- remain here until reset */
var    SYNC = 32;      /* looking for synchronization bytes to restart inflate() */

/* ===========================================================================*/



var ENOUGH_LENS = 852;
var ENOUGH_DISTS = 592;
//var ENOUGH =  (ENOUGH_LENS+ENOUGH_DISTS);

var MAX_WBITS = 15;
/* 32K LZ77 window */
var DEF_WBITS = MAX_WBITS;


function zswap32(q) {
  return  (((q >>> 24) & 0xff) +
          ((q >>> 8) & 0xff00) +
          ((q & 0xff00) << 8) +
          ((q & 0xff) << 24));
}


function InflateState() {
  this.mode = 0;             /* current inflate mode */
  this.last = false;          /* true if processing last block */
  this.wrap = 0;              /* bit 0 true for zlib, bit 1 true for gzip */
  this.havedict = false;      /* true if dictionary provided */
  this.flags = 0;             /* gzip header method and flags (0 if zlib) */
  this.dmax = 0;              /* zlib header max distance (INFLATE_STRICT) */
  this.check = 0;             /* protected copy of check value */
  this.total = 0;             /* protected copy of output count */
  // TODO: may be {}
  this.head = null;           /* where to save gzip header information */

  /* sliding window */
  this.wbits = 0;             /* log base 2 of requested window size */
  this.wsize = 0;             /* window size or zero if not using window */
  this.whave = 0;             /* valid bytes in the window */
  this.wnext = 0;             /* window write index */
  this.window = null;         /* allocated sliding window, if needed */

  /* bit accumulator */
  this.hold = 0;              /* input bit accumulator */
  this.bits = 0;              /* number of bits in "in" */

  /* for string and stored block copying */
  this.length = 0;            /* literal or length of data to copy */
  this.offset = 0;            /* distance back to copy string from */

  /* for table and code decoding */
  this.extra = 0;             /* extra bits needed */

  /* fixed and dynamic code tables */
  this.lencode = null;          /* starting table for length/literal codes */
  this.distcode = null;         /* starting table for distance codes */
  this.lenbits = 0;           /* index bits for lencode */
  this.distbits = 0;          /* index bits for distcode */

  /* dynamic table building */
  this.ncode = 0;             /* number of code length code lengths */
  this.nlen = 0;              /* number of length code lengths */
  this.ndist = 0;             /* number of distance code lengths */
  this.have = 0;              /* number of code lengths in lens[] */
  this.next = null;              /* next available space in codes[] */

  this.lens = new utils.Buf16(320); /* temporary storage for code lengths */
  this.work = new utils.Buf16(288); /* work area for code table building */

  /*
   because we don't have pointers in js, we use lencode and distcode directly
   as buffers so we don't need codes
  */
  //this.codes = new utils.Buf32(ENOUGH);       /* space for code tables */
  this.lendyn = null;              /* dynamic table for length/literal codes (JS specific) */
  this.distdyn = null;             /* dynamic table for distance codes (JS specific) */
  this.sane = 0;                   /* if false, allow invalid distance too far */
  this.back = 0;                   /* bits back of last unprocessed length/lit */
  this.was = 0;                    /* initial length of match */
}

function inflateResetKeep(strm) {
  var state;

  if (!strm || !strm.state) { return Z_STREAM_ERROR; }
  state = strm.state;
  strm.total_in = strm.total_out = state.total = 0;
  strm.msg = ''; /*Z_NULL*/
  if (state.wrap) {       /* to support ill-conceived Java test suite */
    strm.adler = state.wrap & 1;
  }
  state.mode = HEAD;
  state.last = 0;
  state.havedict = 0;
  state.dmax = 32768;
  state.head = null/*Z_NULL*/;
  state.hold = 0;
  state.bits = 0;
  //state.lencode = state.distcode = state.next = state.codes;
  state.lencode = state.lendyn = new utils.Buf32(ENOUGH_LENS);
  state.distcode = state.distdyn = new utils.Buf32(ENOUGH_DISTS);

  state.sane = 1;
  state.back = -1;
  //Tracev((stderr, "inflate: reset\n"));
  return Z_OK;
}

function inflateReset(strm) {
  var state;

  if (!strm || !strm.state) { return Z_STREAM_ERROR; }
  state = strm.state;
  state.wsize = 0;
  state.whave = 0;
  state.wnext = 0;
  return inflateResetKeep(strm);

}

function inflateReset2(strm, windowBits) {
  var wrap;
  var state;

  /* get the state */
  if (!strm || !strm.state) { return Z_STREAM_ERROR; }
  state = strm.state;

  /* extract wrap request from windowBits parameter */
  if (windowBits < 0) {
    wrap = 0;
    windowBits = -windowBits;
  }
  else {
    wrap = (windowBits >> 4) + 1;
    if (windowBits < 48) {
      windowBits &= 15;
    }
  }

  /* set number of window bits, free window if different */
  if (windowBits && (windowBits < 8 || windowBits > 15)) {
    return Z_STREAM_ERROR;
  }
  if (state.window !== null && state.wbits !== windowBits) {
    state.window = null;
  }

  /* update state and reset the rest of it */
  state.wrap = wrap;
  state.wbits = windowBits;
  return inflateReset(strm);
}

function inflateInit2(strm, windowBits) {
  var ret;
  var state;

  if (!strm) { return Z_STREAM_ERROR; }
  //strm.msg = Z_NULL;                 /* in case we return an error */

  state = new InflateState();

  //if (state === Z_NULL) return Z_MEM_ERROR;
  //Tracev((stderr, "inflate: allocated\n"));
  strm.state = state;
  state.window = null/*Z_NULL*/;
  ret = inflateReset2(strm, windowBits);
  if (ret !== Z_OK) {
    strm.state = null/*Z_NULL*/;
  }
  return ret;
}

function inflateInit(strm) {
  return inflateInit2(strm, DEF_WBITS);
}


/*
 Return state with length and distance decoding tables and index sizes set to
 fixed code decoding.  Normally this returns fixed tables from inffixed.h.
 If BUILDFIXED is defined, then instead this routine builds the tables the
 first time it's called, and returns those tables the first time and
 thereafter.  This reduces the size of the code by about 2K bytes, in
 exchange for a little execution time.  However, BUILDFIXED should not be
 used for threaded applications, since the rewriting of the tables and virgin
 may not be thread-safe.
 */
var virgin = true;

var lenfix, distfix; // We have no pointers in JS, so keep tables separate

function fixedtables(state) {
  /* build fixed huffman tables if first call (may not be thread safe) */
  if (virgin) {
    var sym;

    lenfix = new utils.Buf32(512);
    distfix = new utils.Buf32(32);

    /* literal/length table */
    sym = 0;
    while (sym < 144) { state.lens[sym++] = 8; }
    while (sym < 256) { state.lens[sym++] = 9; }
    while (sym < 280) { state.lens[sym++] = 7; }
    while (sym < 288) { state.lens[sym++] = 8; }

    inflate_table(LENS,  state.lens, 0, 288, lenfix,   0, state.work, { bits: 9 });

    /* distance table */
    sym = 0;
    while (sym < 32) { state.lens[sym++] = 5; }

    inflate_table(DISTS, state.lens, 0, 32,   distfix, 0, state.work, { bits: 5 });

    /* do this just once */
    virgin = false;
  }

  state.lencode = lenfix;
  state.lenbits = 9;
  state.distcode = distfix;
  state.distbits = 5;
}


/*
 Update the window with the last wsize (normally 32K) bytes written before
 returning.  If window does not exist yet, create it.  This is only called
 when a window is already in use, or when output has been written during this
 inflate call, but the end of the deflate stream has not been reached yet.
 It is also called to create a window for dictionary data when a dictionary
 is loaded.

 Providing output buffers larger than 32K to inflate() should provide a speed
 advantage, since only the last 32K of output is copied to the sliding window
 upon return from inflate(), and since all distances after the first 32K of
 output will fall in the output data, making match copies simpler and faster.
 The advantage may be dependent on the size of the processor's data caches.
 */
function updatewindow(strm, src, end, copy) {
  var dist;
  var state = strm.state;

  /* if it hasn't been done already, allocate space for the window */
  if (state.window === null) {
    state.wsize = 1 << state.wbits;
    state.wnext = 0;
    state.whave = 0;

    state.window = new utils.Buf8(state.wsize);
  }

  /* copy state->wsize or less output bytes into the circular window */
  if (copy >= state.wsize) {
    utils.arraySet(state.window, src, end - state.wsize, state.wsize, 0);
    state.wnext = 0;
    state.whave = state.wsize;
  }
  else {
    dist = state.wsize - state.wnext;
    if (dist > copy) {
      dist = copy;
    }
    //zmemcpy(state->window + state->wnext, end - copy, dist);
    utils.arraySet(state.window, src, end - copy, dist, state.wnext);
    copy -= dist;
    if (copy) {
      //zmemcpy(state->window, end - copy, copy);
      utils.arraySet(state.window, src, end - copy, copy, 0);
      state.wnext = copy;
      state.whave = state.wsize;
    }
    else {
      state.wnext += dist;
      if (state.wnext === state.wsize) { state.wnext = 0; }
      if (state.whave < state.wsize) { state.whave += dist; }
    }
  }
  return 0;
}

function inflate(strm, flush) {
  var state;
  var input, output;          // input/output buffers
  var next;                   /* next input INDEX */
  var put;                    /* next output INDEX */
  var have, left;             /* available input and output */
  var hold;                   /* bit buffer */
  var bits;                   /* bits in bit buffer */
  var _in, _out;              /* save starting available input and output */
  var copy;                   /* number of stored or match bytes to copy */
  var from;                   /* where to copy match bytes from */
  var from_source;
  var here = 0;               /* current decoding table entry */
  var here_bits, here_op, here_val; // paked "here" denormalized (JS specific)
  //var last;                   /* parent table entry */
  var last_bits, last_op, last_val; // paked "last" denormalized (JS specific)
  var len;                    /* length to copy for repeats, bits to drop */
  var ret;                    /* return code */
  var hbuf = new utils.Buf8(4);    /* buffer for gzip header crc calculation */
  var opts;

  var n; // temporary var for NEED_BITS

  var order = /* permutation of code lengths */
    [ 16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15 ];


  if (!strm || !strm.state || !strm.output ||
      (!strm.input && strm.avail_in !== 0)) {
    return Z_STREAM_ERROR;
  }

  state = strm.state;
  if (state.mode === TYPE) { state.mode = TYPEDO; }    /* skip check */


  //--- LOAD() ---
  put = strm.next_out;
  output = strm.output;
  left = strm.avail_out;
  next = strm.next_in;
  input = strm.input;
  have = strm.avail_in;
  hold = state.hold;
  bits = state.bits;
  //---

  _in = have;
  _out = left;
  ret = Z_OK;

  inf_leave: // goto emulation
  for (;;) {
    switch (state.mode) {
      case HEAD:
        if (state.wrap === 0) {
          state.mode = TYPEDO;
          break;
        }
        //=== NEEDBITS(16);
        while (bits < 16) {
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        if ((state.wrap & 2) && hold === 0x8b1f) {  /* gzip header */
          state.check = 0/*crc32(0L, Z_NULL, 0)*/;
          //=== CRC2(state.check, hold);
          hbuf[0] = hold & 0xff;
          hbuf[1] = (hold >>> 8) & 0xff;
          state.check = crc32(state.check, hbuf, 2, 0);
          //===//

          //=== INITBITS();
          hold = 0;
          bits = 0;
          //===//
          state.mode = FLAGS;
          break;
        }
        state.flags = 0;           /* expect zlib header */
        if (state.head) {
          state.head.done = false;
        }
        if (!(state.wrap & 1) ||   /* check if zlib header allowed */
          (((hold & 0xff)/*BITS(8)*/ << 8) + (hold >> 8)) % 31) {
          strm.msg = 'incorrect header check';
          state.mode = BAD;
          break;
        }
        if ((hold & 0x0f)/*BITS(4)*/ !== Z_DEFLATED) {
          strm.msg = 'unknown compression method';
          state.mode = BAD;
          break;
        }
        //--- DROPBITS(4) ---//
        hold >>>= 4;
        bits -= 4;
        //---//
        len = (hold & 0x0f)/*BITS(4)*/ + 8;
        if (state.wbits === 0) {
          state.wbits = len;
        }
        else if (len > state.wbits) {
          strm.msg = 'invalid window size';
          state.mode = BAD;
          break;
        }
        state.dmax = 1 << len;
        //Tracev((stderr, "inflate:   zlib header ok\n"));
        strm.adler = state.check = 1/*adler32(0L, Z_NULL, 0)*/;
        state.mode = hold & 0x200 ? DICTID : TYPE;
        //=== INITBITS();
        hold = 0;
        bits = 0;
        //===//
        break;
      case FLAGS:
        //=== NEEDBITS(16); */
        while (bits < 16) {
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        state.flags = hold;
        if ((state.flags & 0xff) !== Z_DEFLATED) {
          strm.msg = 'unknown compression method';
          state.mode = BAD;
          break;
        }
        if (state.flags & 0xe000) {
          strm.msg = 'unknown header flags set';
          state.mode = BAD;
          break;
        }
        if (state.head) {
          state.head.text = ((hold >> 8) & 1);
        }
        if (state.flags & 0x0200) {
          //=== CRC2(state.check, hold);
          hbuf[0] = hold & 0xff;
          hbuf[1] = (hold >>> 8) & 0xff;
          state.check = crc32(state.check, hbuf, 2, 0);
          //===//
        }
        //=== INITBITS();
        hold = 0;
        bits = 0;
        //===//
        state.mode = TIME;
        /* falls through */
      case TIME:
        //=== NEEDBITS(32); */
        while (bits < 32) {
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        if (state.head) {
          state.head.time = hold;
        }
        if (state.flags & 0x0200) {
          //=== CRC4(state.check, hold)
          hbuf[0] = hold & 0xff;
          hbuf[1] = (hold >>> 8) & 0xff;
          hbuf[2] = (hold >>> 16) & 0xff;
          hbuf[3] = (hold >>> 24) & 0xff;
          state.check = crc32(state.check, hbuf, 4, 0);
          //===
        }
        //=== INITBITS();
        hold = 0;
        bits = 0;
        //===//
        state.mode = OS;
        /* falls through */
      case OS:
        //=== NEEDBITS(16); */
        while (bits < 16) {
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        if (state.head) {
          state.head.xflags = (hold & 0xff);
          state.head.os = (hold >> 8);
        }
        if (state.flags & 0x0200) {
          //=== CRC2(state.check, hold);
          hbuf[0] = hold & 0xff;
          hbuf[1] = (hold >>> 8) & 0xff;
          state.check = crc32(state.check, hbuf, 2, 0);
          //===//
        }
        //=== INITBITS();
        hold = 0;
        bits = 0;
        //===//
        state.mode = EXLEN;
        /* falls through */
      case EXLEN:
        if (state.flags & 0x0400) {
          //=== NEEDBITS(16); */
          while (bits < 16) {
            if (have === 0) { break inf_leave; }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          //===//
          state.length = hold;
          if (state.head) {
            state.head.extra_len = hold;
          }
          if (state.flags & 0x0200) {
            //=== CRC2(state.check, hold);
            hbuf[0] = hold & 0xff;
            hbuf[1] = (hold >>> 8) & 0xff;
            state.check = crc32(state.check, hbuf, 2, 0);
            //===//
          }
          //=== INITBITS();
          hold = 0;
          bits = 0;
          //===//
        }
        else if (state.head) {
          state.head.extra = null/*Z_NULL*/;
        }
        state.mode = EXTRA;
        /* falls through */
      case EXTRA:
        if (state.flags & 0x0400) {
          copy = state.length;
          if (copy > have) { copy = have; }
          if (copy) {
            if (state.head) {
              len = state.head.extra_len - state.length;
              if (!state.head.extra) {
                // Use untyped array for more convenient processing later
                state.head.extra = new Array(state.head.extra_len);
              }
              utils.arraySet(
                state.head.extra,
                input,
                next,
                // extra field is limited to 65536 bytes
                // - no need for additional size check
                copy,
                /*len + copy > state.head.extra_max - len ? state.head.extra_max : copy,*/
                len
              );
              //zmemcpy(state.head.extra + len, next,
              //        len + copy > state.head.extra_max ?
              //        state.head.extra_max - len : copy);
            }
            if (state.flags & 0x0200) {
              state.check = crc32(state.check, input, copy, next);
            }
            have -= copy;
            next += copy;
            state.length -= copy;
          }
          if (state.length) { break inf_leave; }
        }
        state.length = 0;
        state.mode = NAME;
        /* falls through */
      case NAME:
        if (state.flags & 0x0800) {
          if (have === 0) { break inf_leave; }
          copy = 0;
          do {
            // TODO: 2 or 1 bytes?
            len = input[next + copy++];
            /* use constant limit because in js we should not preallocate memory */
            if (state.head && len &&
                (state.length < 65536 /*state.head.name_max*/)) {
              state.head.name += String.fromCharCode(len);
            }
          } while (len && copy < have);

          if (state.flags & 0x0200) {
            state.check = crc32(state.check, input, copy, next);
          }
          have -= copy;
          next += copy;
          if (len) { break inf_leave; }
        }
        else if (state.head) {
          state.head.name = null;
        }
        state.length = 0;
        state.mode = COMMENT;
        /* falls through */
      case COMMENT:
        if (state.flags & 0x1000) {
          if (have === 0) { break inf_leave; }
          copy = 0;
          do {
            len = input[next + copy++];
            /* use constant limit because in js we should not preallocate memory */
            if (state.head && len &&
                (state.length < 65536 /*state.head.comm_max*/)) {
              state.head.comment += String.fromCharCode(len);
            }
          } while (len && copy < have);
          if (state.flags & 0x0200) {
            state.check = crc32(state.check, input, copy, next);
          }
          have -= copy;
          next += copy;
          if (len) { break inf_leave; }
        }
        else if (state.head) {
          state.head.comment = null;
        }
        state.mode = HCRC;
        /* falls through */
      case HCRC:
        if (state.flags & 0x0200) {
          //=== NEEDBITS(16); */
          while (bits < 16) {
            if (have === 0) { break inf_leave; }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          //===//
          if (hold !== (state.check & 0xffff)) {
            strm.msg = 'header crc mismatch';
            state.mode = BAD;
            break;
          }
          //=== INITBITS();
          hold = 0;
          bits = 0;
          //===//
        }
        if (state.head) {
          state.head.hcrc = ((state.flags >> 9) & 1);
          state.head.done = true;
        }
        strm.adler = state.check = 0;
        state.mode = TYPE;
        break;
      case DICTID:
        //=== NEEDBITS(32); */
        while (bits < 32) {
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        strm.adler = state.check = zswap32(hold);
        //=== INITBITS();
        hold = 0;
        bits = 0;
        //===//
        state.mode = DICT;
        /* falls through */
      case DICT:
        if (state.havedict === 0) {
          //--- RESTORE() ---
          strm.next_out = put;
          strm.avail_out = left;
          strm.next_in = next;
          strm.avail_in = have;
          state.hold = hold;
          state.bits = bits;
          //---
          return Z_NEED_DICT;
        }
        strm.adler = state.check = 1/*adler32(0L, Z_NULL, 0)*/;
        state.mode = TYPE;
        /* falls through */
      case TYPE:
        if (flush === Z_BLOCK || flush === Z_TREES) { break inf_leave; }
        /* falls through */
      case TYPEDO:
        if (state.last) {
          //--- BYTEBITS() ---//
          hold >>>= bits & 7;
          bits -= bits & 7;
          //---//
          state.mode = CHECK;
          break;
        }
        //=== NEEDBITS(3); */
        while (bits < 3) {
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        state.last = (hold & 0x01)/*BITS(1)*/;
        //--- DROPBITS(1) ---//
        hold >>>= 1;
        bits -= 1;
        //---//

        switch ((hold & 0x03)/*BITS(2)*/) {
          case 0:                             /* stored block */
            //Tracev((stderr, "inflate:     stored block%s\n",
            //        state.last ? " (last)" : ""));
            state.mode = STORED;
            break;
          case 1:                             /* fixed block */
            fixedtables(state);
            //Tracev((stderr, "inflate:     fixed codes block%s\n",
            //        state.last ? " (last)" : ""));
            state.mode = LEN_;             /* decode codes */
            if (flush === Z_TREES) {
              //--- DROPBITS(2) ---//
              hold >>>= 2;
              bits -= 2;
              //---//
              break inf_leave;
            }
            break;
          case 2:                             /* dynamic block */
            //Tracev((stderr, "inflate:     dynamic codes block%s\n",
            //        state.last ? " (last)" : ""));
            state.mode = TABLE;
            break;
          case 3:
            strm.msg = 'invalid block type';
            state.mode = BAD;
        }
        //--- DROPBITS(2) ---//
        hold >>>= 2;
        bits -= 2;
        //---//
        break;
      case STORED:
        //--- BYTEBITS() ---// /* go to byte boundary */
        hold >>>= bits & 7;
        bits -= bits & 7;
        //---//
        //=== NEEDBITS(32); */
        while (bits < 32) {
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        if ((hold & 0xffff) !== ((hold >>> 16) ^ 0xffff)) {
          strm.msg = 'invalid stored block lengths';
          state.mode = BAD;
          break;
        }
        state.length = hold & 0xffff;
        //Tracev((stderr, "inflate:       stored length %u\n",
        //        state.length));
        //=== INITBITS();
        hold = 0;
        bits = 0;
        //===//
        state.mode = COPY_;
        if (flush === Z_TREES) { break inf_leave; }
        /* falls through */
      case COPY_:
        state.mode = COPY;
        /* falls through */
      case COPY:
        copy = state.length;
        if (copy) {
          if (copy > have) { copy = have; }
          if (copy > left) { copy = left; }
          if (copy === 0) { break inf_leave; }
          //--- zmemcpy(put, next, copy); ---
          utils.arraySet(output, input, next, copy, put);
          //---//
          have -= copy;
          next += copy;
          left -= copy;
          put += copy;
          state.length -= copy;
          break;
        }
        //Tracev((stderr, "inflate:       stored end\n"));
        state.mode = TYPE;
        break;
      case TABLE:
        //=== NEEDBITS(14); */
        while (bits < 14) {
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        state.nlen = (hold & 0x1f)/*BITS(5)*/ + 257;
        //--- DROPBITS(5) ---//
        hold >>>= 5;
        bits -= 5;
        //---//
        state.ndist = (hold & 0x1f)/*BITS(5)*/ + 1;
        //--- DROPBITS(5) ---//
        hold >>>= 5;
        bits -= 5;
        //---//
        state.ncode = (hold & 0x0f)/*BITS(4)*/ + 4;
        //--- DROPBITS(4) ---//
        hold >>>= 4;
        bits -= 4;
        //---//
//#ifndef PKZIP_BUG_WORKAROUND
        if (state.nlen > 286 || state.ndist > 30) {
          strm.msg = 'too many length or distance symbols';
          state.mode = BAD;
          break;
        }
//#endif
        //Tracev((stderr, "inflate:       table sizes ok\n"));
        state.have = 0;
        state.mode = LENLENS;
        /* falls through */
      case LENLENS:
        while (state.have < state.ncode) {
          //=== NEEDBITS(3);
          while (bits < 3) {
            if (have === 0) { break inf_leave; }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          //===//
          state.lens[order[state.have++]] = (hold & 0x07);//BITS(3);
          //--- DROPBITS(3) ---//
          hold >>>= 3;
          bits -= 3;
          //---//
        }
        while (state.have < 19) {
          state.lens[order[state.have++]] = 0;
        }
        // We have separate tables & no pointers. 2 commented lines below not needed.
        //state.next = state.codes;
        //state.lencode = state.next;
        // Switch to use dynamic table
        state.lencode = state.lendyn;
        state.lenbits = 7;

        opts = { bits: state.lenbits };
        ret = inflate_table(CODES, state.lens, 0, 19, state.lencode, 0, state.work, opts);
        state.lenbits = opts.bits;

        if (ret) {
          strm.msg = 'invalid code lengths set';
          state.mode = BAD;
          break;
        }
        //Tracev((stderr, "inflate:       code lengths ok\n"));
        state.have = 0;
        state.mode = CODELENS;
        /* falls through */
      case CODELENS:
        while (state.have < state.nlen + state.ndist) {
          for (;;) {
            here = state.lencode[hold & ((1 << state.lenbits) - 1)];/*BITS(state.lenbits)*/
            here_bits = here >>> 24;
            here_op = (here >>> 16) & 0xff;
            here_val = here & 0xffff;

            if ((here_bits) <= bits) { break; }
            //--- PULLBYTE() ---//
            if (have === 0) { break inf_leave; }
            have--;
            hold += input[next++] << bits;
            bits += 8;
            //---//
          }
          if (here_val < 16) {
            //--- DROPBITS(here.bits) ---//
            hold >>>= here_bits;
            bits -= here_bits;
            //---//
            state.lens[state.have++] = here_val;
          }
          else {
            if (here_val === 16) {
              //=== NEEDBITS(here.bits + 2);
              n = here_bits + 2;
              while (bits < n) {
                if (have === 0) { break inf_leave; }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              //===//
              //--- DROPBITS(here.bits) ---//
              hold >>>= here_bits;
              bits -= here_bits;
              //---//
              if (state.have === 0) {
                strm.msg = 'invalid bit length repeat';
                state.mode = BAD;
                break;
              }
              len = state.lens[state.have - 1];
              copy = 3 + (hold & 0x03);//BITS(2);
              //--- DROPBITS(2) ---//
              hold >>>= 2;
              bits -= 2;
              //---//
            }
            else if (here_val === 17) {
              //=== NEEDBITS(here.bits + 3);
              n = here_bits + 3;
              while (bits < n) {
                if (have === 0) { break inf_leave; }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              //===//
              //--- DROPBITS(here.bits) ---//
              hold >>>= here_bits;
              bits -= here_bits;
              //---//
              len = 0;
              copy = 3 + (hold & 0x07);//BITS(3);
              //--- DROPBITS(3) ---//
              hold >>>= 3;
              bits -= 3;
              //---//
            }
            else {
              //=== NEEDBITS(here.bits + 7);
              n = here_bits + 7;
              while (bits < n) {
                if (have === 0) { break inf_leave; }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              //===//
              //--- DROPBITS(here.bits) ---//
              hold >>>= here_bits;
              bits -= here_bits;
              //---//
              len = 0;
              copy = 11 + (hold & 0x7f);//BITS(7);
              //--- DROPBITS(7) ---//
              hold >>>= 7;
              bits -= 7;
              //---//
            }
            if (state.have + copy > state.nlen + state.ndist) {
              strm.msg = 'invalid bit length repeat';
              state.mode = BAD;
              break;
            }
            while (copy--) {
              state.lens[state.have++] = len;
            }
          }
        }

        /* handle error breaks in while */
        if (state.mode === BAD) { break; }

        /* check for end-of-block code (better have one) */
        if (state.lens[256] === 0) {
          strm.msg = 'invalid code -- missing end-of-block';
          state.mode = BAD;
          break;
        }

        /* build code tables -- note: do not change the lenbits or distbits
           values here (9 and 6) without reading the comments in inftrees.h
           concerning the ENOUGH constants, which depend on those values */
        state.lenbits = 9;

        opts = { bits: state.lenbits };
        ret = inflate_table(LENS, state.lens, 0, state.nlen, state.lencode, 0, state.work, opts);
        // We have separate tables & no pointers. 2 commented lines below not needed.
        // state.next_index = opts.table_index;
        state.lenbits = opts.bits;
        // state.lencode = state.next;

        if (ret) {
          strm.msg = 'invalid literal/lengths set';
          state.mode = BAD;
          break;
        }

        state.distbits = 6;
        //state.distcode.copy(state.codes);
        // Switch to use dynamic table
        state.distcode = state.distdyn;
        opts = { bits: state.distbits };
        ret = inflate_table(DISTS, state.lens, state.nlen, state.ndist, state.distcode, 0, state.work, opts);
        // We have separate tables & no pointers. 2 commented lines below not needed.
        // state.next_index = opts.table_index;
        state.distbits = opts.bits;
        // state.distcode = state.next;

        if (ret) {
          strm.msg = 'invalid distances set';
          state.mode = BAD;
          break;
        }
        //Tracev((stderr, 'inflate:       codes ok\n'));
        state.mode = LEN_;
        if (flush === Z_TREES) { break inf_leave; }
        /* falls through */
      case LEN_:
        state.mode = LEN;
        /* falls through */
      case LEN:
        if (have >= 6 && left >= 258) {
          //--- RESTORE() ---
          strm.next_out = put;
          strm.avail_out = left;
          strm.next_in = next;
          strm.avail_in = have;
          state.hold = hold;
          state.bits = bits;
          //---
          inflate_fast(strm, _out);
          //--- LOAD() ---
          put = strm.next_out;
          output = strm.output;
          left = strm.avail_out;
          next = strm.next_in;
          input = strm.input;
          have = strm.avail_in;
          hold = state.hold;
          bits = state.bits;
          //---

          if (state.mode === TYPE) {
            state.back = -1;
          }
          break;
        }
        state.back = 0;
        for (;;) {
          here = state.lencode[hold & ((1 << state.lenbits) - 1)];  /*BITS(state.lenbits)*/
          here_bits = here >>> 24;
          here_op = (here >>> 16) & 0xff;
          here_val = here & 0xffff;

          if (here_bits <= bits) { break; }
          //--- PULLBYTE() ---//
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
          //---//
        }
        if (here_op && (here_op & 0xf0) === 0) {
          last_bits = here_bits;
          last_op = here_op;
          last_val = here_val;
          for (;;) {
            here = state.lencode[last_val +
                    ((hold & ((1 << (last_bits + last_op)) - 1))/*BITS(last.bits + last.op)*/ >> last_bits)];
            here_bits = here >>> 24;
            here_op = (here >>> 16) & 0xff;
            here_val = here & 0xffff;

            if ((last_bits + here_bits) <= bits) { break; }
            //--- PULLBYTE() ---//
            if (have === 0) { break inf_leave; }
            have--;
            hold += input[next++] << bits;
            bits += 8;
            //---//
          }
          //--- DROPBITS(last.bits) ---//
          hold >>>= last_bits;
          bits -= last_bits;
          //---//
          state.back += last_bits;
        }
        //--- DROPBITS(here.bits) ---//
        hold >>>= here_bits;
        bits -= here_bits;
        //---//
        state.back += here_bits;
        state.length = here_val;
        if (here_op === 0) {
          //Tracevv((stderr, here.val >= 0x20 && here.val < 0x7f ?
          //        "inflate:         literal '%c'\n" :
          //        "inflate:         literal 0x%02x\n", here.val));
          state.mode = LIT;
          break;
        }
        if (here_op & 32) {
          //Tracevv((stderr, "inflate:         end of block\n"));
          state.back = -1;
          state.mode = TYPE;
          break;
        }
        if (here_op & 64) {
          strm.msg = 'invalid literal/length code';
          state.mode = BAD;
          break;
        }
        state.extra = here_op & 15;
        state.mode = LENEXT;
        /* falls through */
      case LENEXT:
        if (state.extra) {
          //=== NEEDBITS(state.extra);
          n = state.extra;
          while (bits < n) {
            if (have === 0) { break inf_leave; }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          //===//
          state.length += hold & ((1 << state.extra) - 1)/*BITS(state.extra)*/;
          //--- DROPBITS(state.extra) ---//
          hold >>>= state.extra;
          bits -= state.extra;
          //---//
          state.back += state.extra;
        }
        //Tracevv((stderr, "inflate:         length %u\n", state.length));
        state.was = state.length;
        state.mode = DIST;
        /* falls through */
      case DIST:
        for (;;) {
          here = state.distcode[hold & ((1 << state.distbits) - 1)];/*BITS(state.distbits)*/
          here_bits = here >>> 24;
          here_op = (here >>> 16) & 0xff;
          here_val = here & 0xffff;

          if ((here_bits) <= bits) { break; }
          //--- PULLBYTE() ---//
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
          //---//
        }
        if ((here_op & 0xf0) === 0) {
          last_bits = here_bits;
          last_op = here_op;
          last_val = here_val;
          for (;;) {
            here = state.distcode[last_val +
                    ((hold & ((1 << (last_bits + last_op)) - 1))/*BITS(last.bits + last.op)*/ >> last_bits)];
            here_bits = here >>> 24;
            here_op = (here >>> 16) & 0xff;
            here_val = here & 0xffff;

            if ((last_bits + here_bits) <= bits) { break; }
            //--- PULLBYTE() ---//
            if (have === 0) { break inf_leave; }
            have--;
            hold += input[next++] << bits;
            bits += 8;
            //---//
          }
          //--- DROPBITS(last.bits) ---//
          hold >>>= last_bits;
          bits -= last_bits;
          //---//
          state.back += last_bits;
        }
        //--- DROPBITS(here.bits) ---//
        hold >>>= here_bits;
        bits -= here_bits;
        //---//
        state.back += here_bits;
        if (here_op & 64) {
          strm.msg = 'invalid distance code';
          state.mode = BAD;
          break;
        }
        state.offset = here_val;
        state.extra = (here_op) & 15;
        state.mode = DISTEXT;
        /* falls through */
      case DISTEXT:
        if (state.extra) {
          //=== NEEDBITS(state.extra);
          n = state.extra;
          while (bits < n) {
            if (have === 0) { break inf_leave; }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          //===//
          state.offset += hold & ((1 << state.extra) - 1)/*BITS(state.extra)*/;
          //--- DROPBITS(state.extra) ---//
          hold >>>= state.extra;
          bits -= state.extra;
          //---//
          state.back += state.extra;
        }
//#ifdef INFLATE_STRICT
        if (state.offset > state.dmax) {
          strm.msg = 'invalid distance too far back';
          state.mode = BAD;
          break;
        }
//#endif
        //Tracevv((stderr, "inflate:         distance %u\n", state.offset));
        state.mode = MATCH;
        /* falls through */
      case MATCH:
        if (left === 0) { break inf_leave; }
        copy = _out - left;
        if (state.offset > copy) {         /* copy from window */
          copy = state.offset - copy;
          if (copy > state.whave) {
            if (state.sane) {
              strm.msg = 'invalid distance too far back';
              state.mode = BAD;
              break;
            }
// (!) This block is disabled in zlib defaults,
// don't enable it for binary compatibility
//#ifdef INFLATE_ALLOW_INVALID_DISTANCE_TOOFAR_ARRR
//          Trace((stderr, "inflate.c too far\n"));
//          copy -= state.whave;
//          if (copy > state.length) { copy = state.length; }
//          if (copy > left) { copy = left; }
//          left -= copy;
//          state.length -= copy;
//          do {
//            output[put++] = 0;
//          } while (--copy);
//          if (state.length === 0) { state.mode = LEN; }
//          break;
//#endif
          }
          if (copy > state.wnext) {
            copy -= state.wnext;
            from = state.wsize - copy;
          }
          else {
            from = state.wnext - copy;
          }
          if (copy > state.length) { copy = state.length; }
          from_source = state.window;
        }
        else {                              /* copy from output */
          from_source = output;
          from = put - state.offset;
          copy = state.length;
        }
        if (copy > left) { copy = left; }
        left -= copy;
        state.length -= copy;
        do {
          output[put++] = from_source[from++];
        } while (--copy);
        if (state.length === 0) { state.mode = LEN; }
        break;
      case LIT:
        if (left === 0) { break inf_leave; }
        output[put++] = state.length;
        left--;
        state.mode = LEN;
        break;
      case CHECK:
        if (state.wrap) {
          //=== NEEDBITS(32);
          while (bits < 32) {
            if (have === 0) { break inf_leave; }
            have--;
            // Use '|' instead of '+' to make sure that result is signed
            hold |= input[next++] << bits;
            bits += 8;
          }
          //===//
          _out -= left;
          strm.total_out += _out;
          state.total += _out;
          if (_out) {
            strm.adler = state.check =
                /*UPDATE(state.check, put - _out, _out);*/
                (state.flags ? crc32(state.check, output, _out, put - _out) : adler32(state.check, output, _out, put - _out));

          }
          _out = left;
          // NB: crc32 stored as signed 32-bit int, zswap32 returns signed too
          if ((state.flags ? hold : zswap32(hold)) !== state.check) {
            strm.msg = 'incorrect data check';
            state.mode = BAD;
            break;
          }
          //=== INITBITS();
          hold = 0;
          bits = 0;
          //===//
          //Tracev((stderr, "inflate:   check matches trailer\n"));
        }
        state.mode = LENGTH;
        /* falls through */
      case LENGTH:
        if (state.wrap && state.flags) {
          //=== NEEDBITS(32);
          while (bits < 32) {
            if (have === 0) { break inf_leave; }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          //===//
          if (hold !== (state.total & 0xffffffff)) {
            strm.msg = 'incorrect length check';
            state.mode = BAD;
            break;
          }
          //=== INITBITS();
          hold = 0;
          bits = 0;
          //===//
          //Tracev((stderr, "inflate:   length matches trailer\n"));
        }
        state.mode = DONE;
        /* falls through */
      case DONE:
        ret = Z_STREAM_END;
        break inf_leave;
      case BAD:
        ret = Z_DATA_ERROR;
        break inf_leave;
      case MEM:
        return Z_MEM_ERROR;
      case SYNC:
        /* falls through */
      default:
        return Z_STREAM_ERROR;
    }
  }

  // inf_leave <- here is real place for "goto inf_leave", emulated via "break inf_leave"

  /*
     Return from inflate(), updating the total counts and the check value.
     If there was no progress during the inflate() call, return a buffer
     error.  Call updatewindow() to create and/or update the window state.
     Note: a memory error from inflate() is non-recoverable.
   */

  //--- RESTORE() ---
  strm.next_out = put;
  strm.avail_out = left;
  strm.next_in = next;
  strm.avail_in = have;
  state.hold = hold;
  state.bits = bits;
  //---

  if (state.wsize || (_out !== strm.avail_out && state.mode < BAD &&
                      (state.mode < CHECK || flush !== Z_FINISH))) {
    if (updatewindow(strm, strm.output, strm.next_out, _out - strm.avail_out)) {
      state.mode = MEM;
      return Z_MEM_ERROR;
    }
  }
  _in -= strm.avail_in;
  _out -= strm.avail_out;
  strm.total_in += _in;
  strm.total_out += _out;
  state.total += _out;
  if (state.wrap && _out) {
    strm.adler = state.check = /*UPDATE(state.check, strm.next_out - _out, _out);*/
      (state.flags ? crc32(state.check, output, _out, strm.next_out - _out) : adler32(state.check, output, _out, strm.next_out - _out));
  }
  strm.data_type = state.bits + (state.last ? 64 : 0) +
                    (state.mode === TYPE ? 128 : 0) +
                    (state.mode === LEN_ || state.mode === COPY_ ? 256 : 0);
  if (((_in === 0 && _out === 0) || flush === Z_FINISH) && ret === Z_OK) {
    ret = Z_BUF_ERROR;
  }
  return ret;
}

function inflateEnd(strm) {

  if (!strm || !strm.state /*|| strm->zfree == (free_func)0*/) {
    return Z_STREAM_ERROR;
  }

  var state = strm.state;
  if (state.window) {
    state.window = null;
  }
  strm.state = null;
  return Z_OK;
}

function inflateGetHeader(strm, head) {
  var state;

  /* check state */
  if (!strm || !strm.state) { return Z_STREAM_ERROR; }
  state = strm.state;
  if ((state.wrap & 2) === 0) { return Z_STREAM_ERROR; }

  /* save header structure */
  state.head = head;
  head.done = false;
  return Z_OK;
}

function inflateSetDictionary(strm, dictionary) {
  var dictLength = dictionary.length;

  var state;
  var dictid;
  var ret;

  /* check state */
  if (!strm /* == Z_NULL */ || !strm.state /* == Z_NULL */) { return Z_STREAM_ERROR; }
  state = strm.state;

  if (state.wrap !== 0 && state.mode !== DICT) {
    return Z_STREAM_ERROR;
  }

  /* check for correct dictionary identifier */
  if (state.mode === DICT) {
    dictid = 1; /* adler32(0, null, 0)*/
    /* dictid = adler32(dictid, dictionary, dictLength); */
    dictid = adler32(dictid, dictionary, dictLength, 0);
    if (dictid !== state.check) {
      return Z_DATA_ERROR;
    }
  }
  /* copy dictionary to window using updatewindow(), which will amend the
   existing dictionary if appropriate */
  ret = updatewindow(strm, dictionary, dictLength, dictLength);
  if (ret) {
    state.mode = MEM;
    return Z_MEM_ERROR;
  }
  state.havedict = 1;
  // Tracev((stderr, "inflate:   dictionary set\n"));
  return Z_OK;
}

exports.inflateReset = inflateReset;
exports.inflateReset2 = inflateReset2;
exports.inflateResetKeep = inflateResetKeep;
exports.inflateInit = inflateInit;
exports.inflateInit2 = inflateInit2;
exports.inflate = inflate;
exports.inflateEnd = inflateEnd;
exports.inflateGetHeader = inflateGetHeader;
exports.inflateSetDictionary = inflateSetDictionary;
exports.inflateInfo = 'pako inflate (from Nodeca project)';

/* Not implemented
exports.inflateCopy = inflateCopy;
exports.inflateGetDictionary = inflateGetDictionary;
exports.inflateMark = inflateMark;
exports.inflatePrime = inflatePrime;
exports.inflateSync = inflateSync;
exports.inflateSyncPoint = inflateSyncPoint;
exports.inflateUndermine = inflateUndermine;
*/

},{"../utils/common":3,"./adler32":5,"./crc32":7,"./inffast":10,"./inftrees":12}],12:[function(require,module,exports){
'use strict';

// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

var utils = require('../utils/common');

var MAXBITS = 15;
var ENOUGH_LENS = 852;
var ENOUGH_DISTS = 592;
//var ENOUGH = (ENOUGH_LENS+ENOUGH_DISTS);

var CODES = 0;
var LENS = 1;
var DISTS = 2;

var lbase = [ /* Length codes 257..285 base */
  3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31,
  35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0
];

var lext = [ /* Length codes 257..285 extra */
  16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18,
  19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78
];

var dbase = [ /* Distance codes 0..29 base */
  1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193,
  257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145,
  8193, 12289, 16385, 24577, 0, 0
];

var dext = [ /* Distance codes 0..29 extra */
  16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22,
  23, 23, 24, 24, 25, 25, 26, 26, 27, 27,
  28, 28, 29, 29, 64, 64
];

module.exports = function inflate_table(type, lens, lens_index, codes, table, table_index, work, opts)
{
  var bits = opts.bits;
      //here = opts.here; /* table entry for duplication */

  var len = 0;               /* a code's length in bits */
  var sym = 0;               /* index of code symbols */
  var min = 0, max = 0;          /* minimum and maximum code lengths */
  var root = 0;              /* number of index bits for root table */
  var curr = 0;              /* number of index bits for current table */
  var drop = 0;              /* code bits to drop for sub-table */
  var left = 0;                   /* number of prefix codes available */
  var used = 0;              /* code entries in table used */
  var huff = 0;              /* Huffman code */
  var incr;              /* for incrementing code, index */
  var fill;              /* index for replicating entries */
  var low;               /* low bits for current root entry */
  var mask;              /* mask for low root bits */
  var next;             /* next available space in table */
  var base = null;     /* base value table to use */
  var base_index = 0;
//  var shoextra;    /* extra bits table to use */
  var end;                    /* use base and extra for symbol > end */
  var count = new utils.Buf16(MAXBITS + 1); //[MAXBITS+1];    /* number of codes of each length */
  var offs = new utils.Buf16(MAXBITS + 1); //[MAXBITS+1];     /* offsets in table for each length */
  var extra = null;
  var extra_index = 0;

  var here_bits, here_op, here_val;

  /*
   Process a set of code lengths to create a canonical Huffman code.  The
   code lengths are lens[0..codes-1].  Each length corresponds to the
   symbols 0..codes-1.  The Huffman code is generated by first sorting the
   symbols by length from short to long, and retaining the symbol order
   for codes with equal lengths.  Then the code starts with all zero bits
   for the first code of the shortest length, and the codes are integer
   increments for the same length, and zeros are appended as the length
   increases.  For the deflate format, these bits are stored backwards
   from their more natural integer increment ordering, and so when the
   decoding tables are built in the large loop below, the integer codes
   are incremented backwards.

   This routine assumes, but does not check, that all of the entries in
   lens[] are in the range 0..MAXBITS.  The caller must assure this.
   1..MAXBITS is interpreted as that code length.  zero means that that
   symbol does not occur in this code.

   The codes are sorted by computing a count of codes for each length,
   creating from that a table of starting indices for each length in the
   sorted table, and then entering the symbols in order in the sorted
   table.  The sorted table is work[], with that space being provided by
   the caller.

   The length counts are used for other purposes as well, i.e. finding
   the minimum and maximum length codes, determining if there are any
   codes at all, checking for a valid set of lengths, and looking ahead
   at length counts to determine sub-table sizes when building the
   decoding tables.
   */

  /* accumulate lengths for codes (assumes lens[] all in 0..MAXBITS) */
  for (len = 0; len <= MAXBITS; len++) {
    count[len] = 0;
  }
  for (sym = 0; sym < codes; sym++) {
    count[lens[lens_index + sym]]++;
  }

  /* bound code lengths, force root to be within code lengths */
  root = bits;
  for (max = MAXBITS; max >= 1; max--) {
    if (count[max] !== 0) { break; }
  }
  if (root > max) {
    root = max;
  }
  if (max === 0) {                     /* no symbols to code at all */
    //table.op[opts.table_index] = 64;  //here.op = (var char)64;    /* invalid code marker */
    //table.bits[opts.table_index] = 1;   //here.bits = (var char)1;
    //table.val[opts.table_index++] = 0;   //here.val = (var short)0;
    table[table_index++] = (1 << 24) | (64 << 16) | 0;


    //table.op[opts.table_index] = 64;
    //table.bits[opts.table_index] = 1;
    //table.val[opts.table_index++] = 0;
    table[table_index++] = (1 << 24) | (64 << 16) | 0;

    opts.bits = 1;
    return 0;     /* no symbols, but wait for decoding to report error */
  }
  for (min = 1; min < max; min++) {
    if (count[min] !== 0) { break; }
  }
  if (root < min) {
    root = min;
  }

  /* check for an over-subscribed or incomplete set of lengths */
  left = 1;
  for (len = 1; len <= MAXBITS; len++) {
    left <<= 1;
    left -= count[len];
    if (left < 0) {
      return -1;
    }        /* over-subscribed */
  }
  if (left > 0 && (type === CODES || max !== 1)) {
    return -1;                      /* incomplete set */
  }

  /* generate offsets into symbol table for each length for sorting */
  offs[1] = 0;
  for (len = 1; len < MAXBITS; len++) {
    offs[len + 1] = offs[len] + count[len];
  }

  /* sort symbols by length, by symbol order within each length */
  for (sym = 0; sym < codes; sym++) {
    if (lens[lens_index + sym] !== 0) {
      work[offs[lens[lens_index + sym]]++] = sym;
    }
  }

  /*
   Create and fill in decoding tables.  In this loop, the table being
   filled is at next and has curr index bits.  The code being used is huff
   with length len.  That code is converted to an index by dropping drop
   bits off of the bottom.  For codes where len is less than drop + curr,
   those top drop + curr - len bits are incremented through all values to
   fill the table with replicated entries.

   root is the number of index bits for the root table.  When len exceeds
   root, sub-tables are created pointed to by the root entry with an index
   of the low root bits of huff.  This is saved in low to check for when a
   new sub-table should be started.  drop is zero when the root table is
   being filled, and drop is root when sub-tables are being filled.

   When a new sub-table is needed, it is necessary to look ahead in the
   code lengths to determine what size sub-table is needed.  The length
   counts are used for this, and so count[] is decremented as codes are
   entered in the tables.

   used keeps track of how many table entries have been allocated from the
   provided *table space.  It is checked for LENS and DIST tables against
   the constants ENOUGH_LENS and ENOUGH_DISTS to guard against changes in
   the initial root table size constants.  See the comments in inftrees.h
   for more information.

   sym increments through all symbols, and the loop terminates when
   all codes of length max, i.e. all codes, have been processed.  This
   routine permits incomplete codes, so another loop after this one fills
   in the rest of the decoding tables with invalid code markers.
   */

  /* set up for code type */
  // poor man optimization - use if-else instead of switch,
  // to avoid deopts in old v8
  if (type === CODES) {
    base = extra = work;    /* dummy value--not used */
    end = 19;

  } else if (type === LENS) {
    base = lbase;
    base_index -= 257;
    extra = lext;
    extra_index -= 257;
    end = 256;

  } else {                    /* DISTS */
    base = dbase;
    extra = dext;
    end = -1;
  }

  /* initialize opts for loop */
  huff = 0;                   /* starting code */
  sym = 0;                    /* starting code symbol */
  len = min;                  /* starting code length */
  next = table_index;              /* current table to fill in */
  curr = root;                /* current table index bits */
  drop = 0;                   /* current bits to drop from code for index */
  low = -1;                   /* trigger new sub-table when len > root */
  used = 1 << root;          /* use root table entries */
  mask = used - 1;            /* mask for comparing low */

  /* check available table space */
  if ((type === LENS && used > ENOUGH_LENS) ||
    (type === DISTS && used > ENOUGH_DISTS)) {
    return 1;
  }

  /* process all codes and make table entries */
  for (;;) {
    /* create table entry */
    here_bits = len - drop;
    if (work[sym] < end) {
      here_op = 0;
      here_val = work[sym];
    }
    else if (work[sym] > end) {
      here_op = extra[extra_index + work[sym]];
      here_val = base[base_index + work[sym]];
    }
    else {
      here_op = 32 + 64;         /* end of block */
      here_val = 0;
    }

    /* replicate for those indices with low len bits equal to huff */
    incr = 1 << (len - drop);
    fill = 1 << curr;
    min = fill;                 /* save offset to next table */
    do {
      fill -= incr;
      table[next + (huff >> drop) + fill] = (here_bits << 24) | (here_op << 16) | here_val |0;
    } while (fill !== 0);

    /* backwards increment the len-bit code huff */
    incr = 1 << (len - 1);
    while (huff & incr) {
      incr >>= 1;
    }
    if (incr !== 0) {
      huff &= incr - 1;
      huff += incr;
    } else {
      huff = 0;
    }

    /* go to next symbol, update count, len */
    sym++;
    if (--count[len] === 0) {
      if (len === max) { break; }
      len = lens[lens_index + work[sym]];
    }

    /* create new sub-table if needed */
    if (len > root && (huff & mask) !== low) {
      /* if first time, transition to sub-tables */
      if (drop === 0) {
        drop = root;
      }

      /* increment past last table */
      next += min;            /* here min is 1 << curr */

      /* determine length of next table */
      curr = len - drop;
      left = 1 << curr;
      while (curr + drop < max) {
        left -= count[curr + drop];
        if (left <= 0) { break; }
        curr++;
        left <<= 1;
      }

      /* check for enough space */
      used += 1 << curr;
      if ((type === LENS && used > ENOUGH_LENS) ||
        (type === DISTS && used > ENOUGH_DISTS)) {
        return 1;
      }

      /* point entry in root table to sub-table */
      low = huff & mask;
      /*table.op[low] = curr;
      table.bits[low] = root;
      table.val[low] = next - opts.table_index;*/
      table[low] = (root << 24) | (curr << 16) | (next - table_index) |0;
    }
  }

  /* fill in remaining table entry if code is incomplete (guaranteed to have
   at most one remaining entry, since if the code is incomplete, the
   maximum code length that was allowed to get this far is one bit) */
  if (huff !== 0) {
    //table.op[next + huff] = 64;            /* invalid code marker */
    //table.bits[next + huff] = len - drop;
    //table.val[next + huff] = 0;
    table[next + huff] = ((len - drop) << 24) | (64 << 16) |0;
  }

  /* set return parameters */
  //opts.table_index += used;
  opts.bits = root;
  return 0;
};

},{"../utils/common":3}],13:[function(require,module,exports){
'use strict';

// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

module.exports = {
  2:      'need dictionary',     /* Z_NEED_DICT       2  */
  1:      'stream end',          /* Z_STREAM_END      1  */
  0:      '',                    /* Z_OK              0  */
  '-1':   'file error',          /* Z_ERRNO         (-1) */
  '-2':   'stream error',        /* Z_STREAM_ERROR  (-2) */
  '-3':   'data error',          /* Z_DATA_ERROR    (-3) */
  '-4':   'insufficient memory', /* Z_MEM_ERROR     (-4) */
  '-5':   'buffer error',        /* Z_BUF_ERROR     (-5) */
  '-6':   'incompatible version' /* Z_VERSION_ERROR (-6) */
};

},{}],14:[function(require,module,exports){
'use strict';

// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

/* eslint-disable space-unary-ops */

var utils = require('../utils/common');

/* Public constants ==========================================================*/
/* ===========================================================================*/


//var Z_FILTERED          = 1;
//var Z_HUFFMAN_ONLY      = 2;
//var Z_RLE               = 3;
var Z_FIXED               = 4;
//var Z_DEFAULT_STRATEGY  = 0;

/* Possible values of the data_type field (though see inflate()) */
var Z_BINARY              = 0;
var Z_TEXT                = 1;
//var Z_ASCII             = 1; // = Z_TEXT
var Z_UNKNOWN             = 2;

/*============================================================================*/


function zero(buf) { var len = buf.length; while (--len >= 0) { buf[len] = 0; } }

// From zutil.h

var STORED_BLOCK = 0;
var STATIC_TREES = 1;
var DYN_TREES    = 2;
/* The three kinds of block type */

var MIN_MATCH    = 3;
var MAX_MATCH    = 258;
/* The minimum and maximum match lengths */

// From deflate.h
/* ===========================================================================
 * Internal compression state.
 */

var LENGTH_CODES  = 29;
/* number of length codes, not counting the special END_BLOCK code */

var LITERALS      = 256;
/* number of literal bytes 0..255 */

var L_CODES       = LITERALS + 1 + LENGTH_CODES;
/* number of Literal or Length codes, including the END_BLOCK code */

var D_CODES       = 30;
/* number of distance codes */

var BL_CODES      = 19;
/* number of codes used to transfer the bit lengths */

var HEAP_SIZE     = 2 * L_CODES + 1;
/* maximum heap size */

var MAX_BITS      = 15;
/* All codes must not exceed MAX_BITS bits */

var Buf_size      = 16;
/* size of bit buffer in bi_buf */


/* ===========================================================================
 * Constants
 */

var MAX_BL_BITS = 7;
/* Bit length codes must not exceed MAX_BL_BITS bits */

var END_BLOCK   = 256;
/* end of block literal code */

var REP_3_6     = 16;
/* repeat previous bit length 3-6 times (2 bits of repeat count) */

var REPZ_3_10   = 17;
/* repeat a zero length 3-10 times  (3 bits of repeat count) */

var REPZ_11_138 = 18;
/* repeat a zero length 11-138 times  (7 bits of repeat count) */

/* eslint-disable comma-spacing,array-bracket-spacing */
var extra_lbits =   /* extra bits for each length code */
  [0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0];

var extra_dbits =   /* extra bits for each distance code */
  [0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13];

var extra_blbits =  /* extra bits for each bit length code */
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7];

var bl_order =
  [16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];
/* eslint-enable comma-spacing,array-bracket-spacing */

/* The lengths of the bit length codes are sent in order of decreasing
 * probability, to avoid transmitting the lengths for unused bit length codes.
 */

/* ===========================================================================
 * Local data. These are initialized only once.
 */

// We pre-fill arrays with 0 to avoid uninitialized gaps

var DIST_CODE_LEN = 512; /* see definition of array dist_code below */

// !!!! Use flat array instead of structure, Freq = i*2, Len = i*2+1
var static_ltree  = new Array((L_CODES + 2) * 2);
zero(static_ltree);
/* The static literal tree. Since the bit lengths are imposed, there is no
 * need for the L_CODES extra codes used during heap construction. However
 * The codes 286 and 287 are needed to build a canonical tree (see _tr_init
 * below).
 */

var static_dtree  = new Array(D_CODES * 2);
zero(static_dtree);
/* The static distance tree. (Actually a trivial tree since all codes use
 * 5 bits.)
 */

var _dist_code    = new Array(DIST_CODE_LEN);
zero(_dist_code);
/* Distance codes. The first 256 values correspond to the distances
 * 3 .. 258, the last 256 values correspond to the top 8 bits of
 * the 15 bit distances.
 */

var _length_code  = new Array(MAX_MATCH - MIN_MATCH + 1);
zero(_length_code);
/* length code for each normalized match length (0 == MIN_MATCH) */

var base_length   = new Array(LENGTH_CODES);
zero(base_length);
/* First normalized length for each code (0 = MIN_MATCH) */

var base_dist     = new Array(D_CODES);
zero(base_dist);
/* First normalized distance for each code (0 = distance of 1) */


function StaticTreeDesc(static_tree, extra_bits, extra_base, elems, max_length) {

  this.static_tree  = static_tree;  /* static tree or NULL */
  this.extra_bits   = extra_bits;   /* extra bits for each code or NULL */
  this.extra_base   = extra_base;   /* base index for extra_bits */
  this.elems        = elems;        /* max number of elements in the tree */
  this.max_length   = max_length;   /* max bit length for the codes */

  // show if `static_tree` has data or dummy - needed for monomorphic objects
  this.has_stree    = static_tree && static_tree.length;
}


var static_l_desc;
var static_d_desc;
var static_bl_desc;


function TreeDesc(dyn_tree, stat_desc) {
  this.dyn_tree = dyn_tree;     /* the dynamic tree */
  this.max_code = 0;            /* largest code with non zero frequency */
  this.stat_desc = stat_desc;   /* the corresponding static tree */
}



function d_code(dist) {
  return dist < 256 ? _dist_code[dist] : _dist_code[256 + (dist >>> 7)];
}


/* ===========================================================================
 * Output a short LSB first on the stream.
 * IN assertion: there is enough room in pendingBuf.
 */
function put_short(s, w) {
//    put_byte(s, (uch)((w) & 0xff));
//    put_byte(s, (uch)((ush)(w) >> 8));
  s.pending_buf[s.pending++] = (w) & 0xff;
  s.pending_buf[s.pending++] = (w >>> 8) & 0xff;
}


/* ===========================================================================
 * Send a value on a given number of bits.
 * IN assertion: length <= 16 and value fits in length bits.
 */
function send_bits(s, value, length) {
  if (s.bi_valid > (Buf_size - length)) {
    s.bi_buf |= (value << s.bi_valid) & 0xffff;
    put_short(s, s.bi_buf);
    s.bi_buf = value >> (Buf_size - s.bi_valid);
    s.bi_valid += length - Buf_size;
  } else {
    s.bi_buf |= (value << s.bi_valid) & 0xffff;
    s.bi_valid += length;
  }
}


function send_code(s, c, tree) {
  send_bits(s, tree[c * 2]/*.Code*/, tree[c * 2 + 1]/*.Len*/);
}


/* ===========================================================================
 * Reverse the first len bits of a code, using straightforward code (a faster
 * method would use a table)
 * IN assertion: 1 <= len <= 15
 */
function bi_reverse(code, len) {
  var res = 0;
  do {
    res |= code & 1;
    code >>>= 1;
    res <<= 1;
  } while (--len > 0);
  return res >>> 1;
}


/* ===========================================================================
 * Flush the bit buffer, keeping at most 7 bits in it.
 */
function bi_flush(s) {
  if (s.bi_valid === 16) {
    put_short(s, s.bi_buf);
    s.bi_buf = 0;
    s.bi_valid = 0;

  } else if (s.bi_valid >= 8) {
    s.pending_buf[s.pending++] = s.bi_buf & 0xff;
    s.bi_buf >>= 8;
    s.bi_valid -= 8;
  }
}


/* ===========================================================================
 * Compute the optimal bit lengths for a tree and update the total bit length
 * for the current block.
 * IN assertion: the fields freq and dad are set, heap[heap_max] and
 *    above are the tree nodes sorted by increasing frequency.
 * OUT assertions: the field len is set to the optimal bit length, the
 *     array bl_count contains the frequencies for each bit length.
 *     The length opt_len is updated; static_len is also updated if stree is
 *     not null.
 */
function gen_bitlen(s, desc)
//    deflate_state *s;
//    tree_desc *desc;    /* the tree descriptor */
{
  var tree            = desc.dyn_tree;
  var max_code        = desc.max_code;
  var stree           = desc.stat_desc.static_tree;
  var has_stree       = desc.stat_desc.has_stree;
  var extra           = desc.stat_desc.extra_bits;
  var base            = desc.stat_desc.extra_base;
  var max_length      = desc.stat_desc.max_length;
  var h;              /* heap index */
  var n, m;           /* iterate over the tree elements */
  var bits;           /* bit length */
  var xbits;          /* extra bits */
  var f;              /* frequency */
  var overflow = 0;   /* number of elements with bit length too large */

  for (bits = 0; bits <= MAX_BITS; bits++) {
    s.bl_count[bits] = 0;
  }

  /* In a first pass, compute the optimal bit lengths (which may
   * overflow in the case of the bit length tree).
   */
  tree[s.heap[s.heap_max] * 2 + 1]/*.Len*/ = 0; /* root of the heap */

  for (h = s.heap_max + 1; h < HEAP_SIZE; h++) {
    n = s.heap[h];
    bits = tree[tree[n * 2 + 1]/*.Dad*/ * 2 + 1]/*.Len*/ + 1;
    if (bits > max_length) {
      bits = max_length;
      overflow++;
    }
    tree[n * 2 + 1]/*.Len*/ = bits;
    /* We overwrite tree[n].Dad which is no longer needed */

    if (n > max_code) { continue; } /* not a leaf node */

    s.bl_count[bits]++;
    xbits = 0;
    if (n >= base) {
      xbits = extra[n - base];
    }
    f = tree[n * 2]/*.Freq*/;
    s.opt_len += f * (bits + xbits);
    if (has_stree) {
      s.static_len += f * (stree[n * 2 + 1]/*.Len*/ + xbits);
    }
  }
  if (overflow === 0) { return; }

  // Trace((stderr,"\nbit length overflow\n"));
  /* This happens for example on obj2 and pic of the Calgary corpus */

  /* Find the first bit length which could increase: */
  do {
    bits = max_length - 1;
    while (s.bl_count[bits] === 0) { bits--; }
    s.bl_count[bits]--;      /* move one leaf down the tree */
    s.bl_count[bits + 1] += 2; /* move one overflow item as its brother */
    s.bl_count[max_length]--;
    /* The brother of the overflow item also moves one step up,
     * but this does not affect bl_count[max_length]
     */
    overflow -= 2;
  } while (overflow > 0);

  /* Now recompute all bit lengths, scanning in increasing frequency.
   * h is still equal to HEAP_SIZE. (It is simpler to reconstruct all
   * lengths instead of fixing only the wrong ones. This idea is taken
   * from 'ar' written by Haruhiko Okumura.)
   */
  for (bits = max_length; bits !== 0; bits--) {
    n = s.bl_count[bits];
    while (n !== 0) {
      m = s.heap[--h];
      if (m > max_code) { continue; }
      if (tree[m * 2 + 1]/*.Len*/ !== bits) {
        // Trace((stderr,"code %d bits %d->%d\n", m, tree[m].Len, bits));
        s.opt_len += (bits - tree[m * 2 + 1]/*.Len*/) * tree[m * 2]/*.Freq*/;
        tree[m * 2 + 1]/*.Len*/ = bits;
      }
      n--;
    }
  }
}


/* ===========================================================================
 * Generate the codes for a given tree and bit counts (which need not be
 * optimal).
 * IN assertion: the array bl_count contains the bit length statistics for
 * the given tree and the field len is set for all tree elements.
 * OUT assertion: the field code is set for all tree elements of non
 *     zero code length.
 */
function gen_codes(tree, max_code, bl_count)
//    ct_data *tree;             /* the tree to decorate */
//    int max_code;              /* largest code with non zero frequency */
//    ushf *bl_count;            /* number of codes at each bit length */
{
  var next_code = new Array(MAX_BITS + 1); /* next code value for each bit length */
  var code = 0;              /* running code value */
  var bits;                  /* bit index */
  var n;                     /* code index */

  /* The distribution counts are first used to generate the code values
   * without bit reversal.
   */
  for (bits = 1; bits <= MAX_BITS; bits++) {
    next_code[bits] = code = (code + bl_count[bits - 1]) << 1;
  }
  /* Check that the bit counts in bl_count are consistent. The last code
   * must be all ones.
   */
  //Assert (code + bl_count[MAX_BITS]-1 == (1<<MAX_BITS)-1,
  //        "inconsistent bit counts");
  //Tracev((stderr,"\ngen_codes: max_code %d ", max_code));

  for (n = 0;  n <= max_code; n++) {
    var len = tree[n * 2 + 1]/*.Len*/;
    if (len === 0) { continue; }
    /* Now reverse the bits */
    tree[n * 2]/*.Code*/ = bi_reverse(next_code[len]++, len);

    //Tracecv(tree != static_ltree, (stderr,"\nn %3d %c l %2d c %4x (%x) ",
    //     n, (isgraph(n) ? n : ' '), len, tree[n].Code, next_code[len]-1));
  }
}


/* ===========================================================================
 * Initialize the various 'constant' tables.
 */
function tr_static_init() {
  var n;        /* iterates over tree elements */
  var bits;     /* bit counter */
  var length;   /* length value */
  var code;     /* code value */
  var dist;     /* distance index */
  var bl_count = new Array(MAX_BITS + 1);
  /* number of codes at each bit length for an optimal tree */

  // do check in _tr_init()
  //if (static_init_done) return;

  /* For some embedded targets, global variables are not initialized: */
/*#ifdef NO_INIT_GLOBAL_POINTERS
  static_l_desc.static_tree = static_ltree;
  static_l_desc.extra_bits = extra_lbits;
  static_d_desc.static_tree = static_dtree;
  static_d_desc.extra_bits = extra_dbits;
  static_bl_desc.extra_bits = extra_blbits;
#endif*/

  /* Initialize the mapping length (0..255) -> length code (0..28) */
  length = 0;
  for (code = 0; code < LENGTH_CODES - 1; code++) {
    base_length[code] = length;
    for (n = 0; n < (1 << extra_lbits[code]); n++) {
      _length_code[length++] = code;
    }
  }
  //Assert (length == 256, "tr_static_init: length != 256");
  /* Note that the length 255 (match length 258) can be represented
   * in two different ways: code 284 + 5 bits or code 285, so we
   * overwrite length_code[255] to use the best encoding:
   */
  _length_code[length - 1] = code;

  /* Initialize the mapping dist (0..32K) -> dist code (0..29) */
  dist = 0;
  for (code = 0; code < 16; code++) {
    base_dist[code] = dist;
    for (n = 0; n < (1 << extra_dbits[code]); n++) {
      _dist_code[dist++] = code;
    }
  }
  //Assert (dist == 256, "tr_static_init: dist != 256");
  dist >>= 7; /* from now on, all distances are divided by 128 */
  for (; code < D_CODES; code++) {
    base_dist[code] = dist << 7;
    for (n = 0; n < (1 << (extra_dbits[code] - 7)); n++) {
      _dist_code[256 + dist++] = code;
    }
  }
  //Assert (dist == 256, "tr_static_init: 256+dist != 512");

  /* Construct the codes of the static literal tree */
  for (bits = 0; bits <= MAX_BITS; bits++) {
    bl_count[bits] = 0;
  }

  n = 0;
  while (n <= 143) {
    static_ltree[n * 2 + 1]/*.Len*/ = 8;
    n++;
    bl_count[8]++;
  }
  while (n <= 255) {
    static_ltree[n * 2 + 1]/*.Len*/ = 9;
    n++;
    bl_count[9]++;
  }
  while (n <= 279) {
    static_ltree[n * 2 + 1]/*.Len*/ = 7;
    n++;
    bl_count[7]++;
  }
  while (n <= 287) {
    static_ltree[n * 2 + 1]/*.Len*/ = 8;
    n++;
    bl_count[8]++;
  }
  /* Codes 286 and 287 do not exist, but we must include them in the
   * tree construction to get a canonical Huffman tree (longest code
   * all ones)
   */
  gen_codes(static_ltree, L_CODES + 1, bl_count);

  /* The static distance tree is trivial: */
  for (n = 0; n < D_CODES; n++) {
    static_dtree[n * 2 + 1]/*.Len*/ = 5;
    static_dtree[n * 2]/*.Code*/ = bi_reverse(n, 5);
  }

  // Now data ready and we can init static trees
  static_l_desc = new StaticTreeDesc(static_ltree, extra_lbits, LITERALS + 1, L_CODES, MAX_BITS);
  static_d_desc = new StaticTreeDesc(static_dtree, extra_dbits, 0,          D_CODES, MAX_BITS);
  static_bl_desc = new StaticTreeDesc(new Array(0), extra_blbits, 0,         BL_CODES, MAX_BL_BITS);

  //static_init_done = true;
}


/* ===========================================================================
 * Initialize a new block.
 */
function init_block(s) {
  var n; /* iterates over tree elements */

  /* Initialize the trees. */
  for (n = 0; n < L_CODES;  n++) { s.dyn_ltree[n * 2]/*.Freq*/ = 0; }
  for (n = 0; n < D_CODES;  n++) { s.dyn_dtree[n * 2]/*.Freq*/ = 0; }
  for (n = 0; n < BL_CODES; n++) { s.bl_tree[n * 2]/*.Freq*/ = 0; }

  s.dyn_ltree[END_BLOCK * 2]/*.Freq*/ = 1;
  s.opt_len = s.static_len = 0;
  s.last_lit = s.matches = 0;
}


/* ===========================================================================
 * Flush the bit buffer and align the output on a byte boundary
 */
function bi_windup(s)
{
  if (s.bi_valid > 8) {
    put_short(s, s.bi_buf);
  } else if (s.bi_valid > 0) {
    //put_byte(s, (Byte)s->bi_buf);
    s.pending_buf[s.pending++] = s.bi_buf;
  }
  s.bi_buf = 0;
  s.bi_valid = 0;
}

/* ===========================================================================
 * Copy a stored block, storing first the length and its
 * one's complement if requested.
 */
function copy_block(s, buf, len, header)
//DeflateState *s;
//charf    *buf;    /* the input data */
//unsigned len;     /* its length */
//int      header;  /* true if block header must be written */
{
  bi_windup(s);        /* align on byte boundary */

  if (header) {
    put_short(s, len);
    put_short(s, ~len);
  }
//  while (len--) {
//    put_byte(s, *buf++);
//  }
  utils.arraySet(s.pending_buf, s.window, buf, len, s.pending);
  s.pending += len;
}

/* ===========================================================================
 * Compares to subtrees, using the tree depth as tie breaker when
 * the subtrees have equal frequency. This minimizes the worst case length.
 */
function smaller(tree, n, m, depth) {
  var _n2 = n * 2;
  var _m2 = m * 2;
  return (tree[_n2]/*.Freq*/ < tree[_m2]/*.Freq*/ ||
         (tree[_n2]/*.Freq*/ === tree[_m2]/*.Freq*/ && depth[n] <= depth[m]));
}

/* ===========================================================================
 * Restore the heap property by moving down the tree starting at node k,
 * exchanging a node with the smallest of its two sons if necessary, stopping
 * when the heap property is re-established (each father smaller than its
 * two sons).
 */
function pqdownheap(s, tree, k)
//    deflate_state *s;
//    ct_data *tree;  /* the tree to restore */
//    int k;               /* node to move down */
{
  var v = s.heap[k];
  var j = k << 1;  /* left son of k */
  while (j <= s.heap_len) {
    /* Set j to the smallest of the two sons: */
    if (j < s.heap_len &&
      smaller(tree, s.heap[j + 1], s.heap[j], s.depth)) {
      j++;
    }
    /* Exit if v is smaller than both sons */
    if (smaller(tree, v, s.heap[j], s.depth)) { break; }

    /* Exchange v with the smallest son */
    s.heap[k] = s.heap[j];
    k = j;

    /* And continue down the tree, setting j to the left son of k */
    j <<= 1;
  }
  s.heap[k] = v;
}


// inlined manually
// var SMALLEST = 1;

/* ===========================================================================
 * Send the block data compressed using the given Huffman trees
 */
function compress_block(s, ltree, dtree)
//    deflate_state *s;
//    const ct_data *ltree; /* literal tree */
//    const ct_data *dtree; /* distance tree */
{
  var dist;           /* distance of matched string */
  var lc;             /* match length or unmatched char (if dist == 0) */
  var lx = 0;         /* running index in l_buf */
  var code;           /* the code to send */
  var extra;          /* number of extra bits to send */

  if (s.last_lit !== 0) {
    do {
      dist = (s.pending_buf[s.d_buf + lx * 2] << 8) | (s.pending_buf[s.d_buf + lx * 2 + 1]);
      lc = s.pending_buf[s.l_buf + lx];
      lx++;

      if (dist === 0) {
        send_code(s, lc, ltree); /* send a literal byte */
        //Tracecv(isgraph(lc), (stderr," '%c' ", lc));
      } else {
        /* Here, lc is the match length - MIN_MATCH */
        code = _length_code[lc];
        send_code(s, code + LITERALS + 1, ltree); /* send the length code */
        extra = extra_lbits[code];
        if (extra !== 0) {
          lc -= base_length[code];
          send_bits(s, lc, extra);       /* send the extra length bits */
        }
        dist--; /* dist is now the match distance - 1 */
        code = d_code(dist);
        //Assert (code < D_CODES, "bad d_code");

        send_code(s, code, dtree);       /* send the distance code */
        extra = extra_dbits[code];
        if (extra !== 0) {
          dist -= base_dist[code];
          send_bits(s, dist, extra);   /* send the extra distance bits */
        }
      } /* literal or match pair ? */

      /* Check that the overlay between pending_buf and d_buf+l_buf is ok: */
      //Assert((uInt)(s->pending) < s->lit_bufsize + 2*lx,
      //       "pendingBuf overflow");

    } while (lx < s.last_lit);
  }

  send_code(s, END_BLOCK, ltree);
}


/* ===========================================================================
 * Construct one Huffman tree and assigns the code bit strings and lengths.
 * Update the total bit length for the current block.
 * IN assertion: the field freq is set for all tree elements.
 * OUT assertions: the fields len and code are set to the optimal bit length
 *     and corresponding code. The length opt_len is updated; static_len is
 *     also updated if stree is not null. The field max_code is set.
 */
function build_tree(s, desc)
//    deflate_state *s;
//    tree_desc *desc; /* the tree descriptor */
{
  var tree     = desc.dyn_tree;
  var stree    = desc.stat_desc.static_tree;
  var has_stree = desc.stat_desc.has_stree;
  var elems    = desc.stat_desc.elems;
  var n, m;          /* iterate over heap elements */
  var max_code = -1; /* largest code with non zero frequency */
  var node;          /* new node being created */

  /* Construct the initial heap, with least frequent element in
   * heap[SMALLEST]. The sons of heap[n] are heap[2*n] and heap[2*n+1].
   * heap[0] is not used.
   */
  s.heap_len = 0;
  s.heap_max = HEAP_SIZE;

  for (n = 0; n < elems; n++) {
    if (tree[n * 2]/*.Freq*/ !== 0) {
      s.heap[++s.heap_len] = max_code = n;
      s.depth[n] = 0;

    } else {
      tree[n * 2 + 1]/*.Len*/ = 0;
    }
  }

  /* The pkzip format requires that at least one distance code exists,
   * and that at least one bit should be sent even if there is only one
   * possible code. So to avoid special checks later on we force at least
   * two codes of non zero frequency.
   */
  while (s.heap_len < 2) {
    node = s.heap[++s.heap_len] = (max_code < 2 ? ++max_code : 0);
    tree[node * 2]/*.Freq*/ = 1;
    s.depth[node] = 0;
    s.opt_len--;

    if (has_stree) {
      s.static_len -= stree[node * 2 + 1]/*.Len*/;
    }
    /* node is 0 or 1 so it does not have extra bits */
  }
  desc.max_code = max_code;

  /* The elements heap[heap_len/2+1 .. heap_len] are leaves of the tree,
   * establish sub-heaps of increasing lengths:
   */
  for (n = (s.heap_len >> 1/*int /2*/); n >= 1; n--) { pqdownheap(s, tree, n); }

  /* Construct the Huffman tree by repeatedly combining the least two
   * frequent nodes.
   */
  node = elems;              /* next internal node of the tree */
  do {
    //pqremove(s, tree, n);  /* n = node of least frequency */
    /*** pqremove ***/
    n = s.heap[1/*SMALLEST*/];
    s.heap[1/*SMALLEST*/] = s.heap[s.heap_len--];
    pqdownheap(s, tree, 1/*SMALLEST*/);
    /***/

    m = s.heap[1/*SMALLEST*/]; /* m = node of next least frequency */

    s.heap[--s.heap_max] = n; /* keep the nodes sorted by frequency */
    s.heap[--s.heap_max] = m;

    /* Create a new node father of n and m */
    tree[node * 2]/*.Freq*/ = tree[n * 2]/*.Freq*/ + tree[m * 2]/*.Freq*/;
    s.depth[node] = (s.depth[n] >= s.depth[m] ? s.depth[n] : s.depth[m]) + 1;
    tree[n * 2 + 1]/*.Dad*/ = tree[m * 2 + 1]/*.Dad*/ = node;

    /* and insert the new node in the heap */
    s.heap[1/*SMALLEST*/] = node++;
    pqdownheap(s, tree, 1/*SMALLEST*/);

  } while (s.heap_len >= 2);

  s.heap[--s.heap_max] = s.heap[1/*SMALLEST*/];

  /* At this point, the fields freq and dad are set. We can now
   * generate the bit lengths.
   */
  gen_bitlen(s, desc);

  /* The field len is now set, we can generate the bit codes */
  gen_codes(tree, max_code, s.bl_count);
}


/* ===========================================================================
 * Scan a literal or distance tree to determine the frequencies of the codes
 * in the bit length tree.
 */
function scan_tree(s, tree, max_code)
//    deflate_state *s;
//    ct_data *tree;   /* the tree to be scanned */
//    int max_code;    /* and its largest code of non zero frequency */
{
  var n;                     /* iterates over all tree elements */
  var prevlen = -1;          /* last emitted length */
  var curlen;                /* length of current code */

  var nextlen = tree[0 * 2 + 1]/*.Len*/; /* length of next code */

  var count = 0;             /* repeat count of the current code */
  var max_count = 7;         /* max repeat count */
  var min_count = 4;         /* min repeat count */

  if (nextlen === 0) {
    max_count = 138;
    min_count = 3;
  }
  tree[(max_code + 1) * 2 + 1]/*.Len*/ = 0xffff; /* guard */

  for (n = 0; n <= max_code; n++) {
    curlen = nextlen;
    nextlen = tree[(n + 1) * 2 + 1]/*.Len*/;

    if (++count < max_count && curlen === nextlen) {
      continue;

    } else if (count < min_count) {
      s.bl_tree[curlen * 2]/*.Freq*/ += count;

    } else if (curlen !== 0) {

      if (curlen !== prevlen) { s.bl_tree[curlen * 2]/*.Freq*/++; }
      s.bl_tree[REP_3_6 * 2]/*.Freq*/++;

    } else if (count <= 10) {
      s.bl_tree[REPZ_3_10 * 2]/*.Freq*/++;

    } else {
      s.bl_tree[REPZ_11_138 * 2]/*.Freq*/++;
    }

    count = 0;
    prevlen = curlen;

    if (nextlen === 0) {
      max_count = 138;
      min_count = 3;

    } else if (curlen === nextlen) {
      max_count = 6;
      min_count = 3;

    } else {
      max_count = 7;
      min_count = 4;
    }
  }
}


/* ===========================================================================
 * Send a literal or distance tree in compressed form, using the codes in
 * bl_tree.
 */
function send_tree(s, tree, max_code)
//    deflate_state *s;
//    ct_data *tree; /* the tree to be scanned */
//    int max_code;       /* and its largest code of non zero frequency */
{
  var n;                     /* iterates over all tree elements */
  var prevlen = -1;          /* last emitted length */
  var curlen;                /* length of current code */

  var nextlen = tree[0 * 2 + 1]/*.Len*/; /* length of next code */

  var count = 0;             /* repeat count of the current code */
  var max_count = 7;         /* max repeat count */
  var min_count = 4;         /* min repeat count */

  /* tree[max_code+1].Len = -1; */  /* guard already set */
  if (nextlen === 0) {
    max_count = 138;
    min_count = 3;
  }

  for (n = 0; n <= max_code; n++) {
    curlen = nextlen;
    nextlen = tree[(n + 1) * 2 + 1]/*.Len*/;

    if (++count < max_count && curlen === nextlen) {
      continue;

    } else if (count < min_count) {
      do { send_code(s, curlen, s.bl_tree); } while (--count !== 0);

    } else if (curlen !== 0) {
      if (curlen !== prevlen) {
        send_code(s, curlen, s.bl_tree);
        count--;
      }
      //Assert(count >= 3 && count <= 6, " 3_6?");
      send_code(s, REP_3_6, s.bl_tree);
      send_bits(s, count - 3, 2);

    } else if (count <= 10) {
      send_code(s, REPZ_3_10, s.bl_tree);
      send_bits(s, count - 3, 3);

    } else {
      send_code(s, REPZ_11_138, s.bl_tree);
      send_bits(s, count - 11, 7);
    }

    count = 0;
    prevlen = curlen;
    if (nextlen === 0) {
      max_count = 138;
      min_count = 3;

    } else if (curlen === nextlen) {
      max_count = 6;
      min_count = 3;

    } else {
      max_count = 7;
      min_count = 4;
    }
  }
}


/* ===========================================================================
 * Construct the Huffman tree for the bit lengths and return the index in
 * bl_order of the last bit length code to send.
 */
function build_bl_tree(s) {
  var max_blindex;  /* index of last bit length code of non zero freq */

  /* Determine the bit length frequencies for literal and distance trees */
  scan_tree(s, s.dyn_ltree, s.l_desc.max_code);
  scan_tree(s, s.dyn_dtree, s.d_desc.max_code);

  /* Build the bit length tree: */
  build_tree(s, s.bl_desc);
  /* opt_len now includes the length of the tree representations, except
   * the lengths of the bit lengths codes and the 5+5+4 bits for the counts.
   */

  /* Determine the number of bit length codes to send. The pkzip format
   * requires that at least 4 bit length codes be sent. (appnote.txt says
   * 3 but the actual value used is 4.)
   */
  for (max_blindex = BL_CODES - 1; max_blindex >= 3; max_blindex--) {
    if (s.bl_tree[bl_order[max_blindex] * 2 + 1]/*.Len*/ !== 0) {
      break;
    }
  }
  /* Update opt_len to include the bit length tree and counts */
  s.opt_len += 3 * (max_blindex + 1) + 5 + 5 + 4;
  //Tracev((stderr, "\ndyn trees: dyn %ld, stat %ld",
  //        s->opt_len, s->static_len));

  return max_blindex;
}


/* ===========================================================================
 * Send the header for a block using dynamic Huffman trees: the counts, the
 * lengths of the bit length codes, the literal tree and the distance tree.
 * IN assertion: lcodes >= 257, dcodes >= 1, blcodes >= 4.
 */
function send_all_trees(s, lcodes, dcodes, blcodes)
//    deflate_state *s;
//    int lcodes, dcodes, blcodes; /* number of codes for each tree */
{
  var rank;                    /* index in bl_order */

  //Assert (lcodes >= 257 && dcodes >= 1 && blcodes >= 4, "not enough codes");
  //Assert (lcodes <= L_CODES && dcodes <= D_CODES && blcodes <= BL_CODES,
  //        "too many codes");
  //Tracev((stderr, "\nbl counts: "));
  send_bits(s, lcodes - 257, 5); /* not +255 as stated in appnote.txt */
  send_bits(s, dcodes - 1,   5);
  send_bits(s, blcodes - 4,  4); /* not -3 as stated in appnote.txt */
  for (rank = 0; rank < blcodes; rank++) {
    //Tracev((stderr, "\nbl code %2d ", bl_order[rank]));
    send_bits(s, s.bl_tree[bl_order[rank] * 2 + 1]/*.Len*/, 3);
  }
  //Tracev((stderr, "\nbl tree: sent %ld", s->bits_sent));

  send_tree(s, s.dyn_ltree, lcodes - 1); /* literal tree */
  //Tracev((stderr, "\nlit tree: sent %ld", s->bits_sent));

  send_tree(s, s.dyn_dtree, dcodes - 1); /* distance tree */
  //Tracev((stderr, "\ndist tree: sent %ld", s->bits_sent));
}


/* ===========================================================================
 * Check if the data type is TEXT or BINARY, using the following algorithm:
 * - TEXT if the two conditions below are satisfied:
 *    a) There are no non-portable control characters belonging to the
 *       "black list" (0..6, 14..25, 28..31).
 *    b) There is at least one printable character belonging to the
 *       "white list" (9 {TAB}, 10 {LF}, 13 {CR}, 32..255).
 * - BINARY otherwise.
 * - The following partially-portable control characters form a
 *   "gray list" that is ignored in this detection algorithm:
 *   (7 {BEL}, 8 {BS}, 11 {VT}, 12 {FF}, 26 {SUB}, 27 {ESC}).
 * IN assertion: the fields Freq of dyn_ltree are set.
 */
function detect_data_type(s) {
  /* black_mask is the bit mask of black-listed bytes
   * set bits 0..6, 14..25, and 28..31
   * 0xf3ffc07f = binary 11110011111111111100000001111111
   */
  var black_mask = 0xf3ffc07f;
  var n;

  /* Check for non-textual ("black-listed") bytes. */
  for (n = 0; n <= 31; n++, black_mask >>>= 1) {
    if ((black_mask & 1) && (s.dyn_ltree[n * 2]/*.Freq*/ !== 0)) {
      return Z_BINARY;
    }
  }

  /* Check for textual ("white-listed") bytes. */
  if (s.dyn_ltree[9 * 2]/*.Freq*/ !== 0 || s.dyn_ltree[10 * 2]/*.Freq*/ !== 0 ||
      s.dyn_ltree[13 * 2]/*.Freq*/ !== 0) {
    return Z_TEXT;
  }
  for (n = 32; n < LITERALS; n++) {
    if (s.dyn_ltree[n * 2]/*.Freq*/ !== 0) {
      return Z_TEXT;
    }
  }

  /* There are no "black-listed" or "white-listed" bytes:
   * this stream either is empty or has tolerated ("gray-listed") bytes only.
   */
  return Z_BINARY;
}


var static_init_done = false;

/* ===========================================================================
 * Initialize the tree data structures for a new zlib stream.
 */
function _tr_init(s)
{

  if (!static_init_done) {
    tr_static_init();
    static_init_done = true;
  }

  s.l_desc  = new TreeDesc(s.dyn_ltree, static_l_desc);
  s.d_desc  = new TreeDesc(s.dyn_dtree, static_d_desc);
  s.bl_desc = new TreeDesc(s.bl_tree, static_bl_desc);

  s.bi_buf = 0;
  s.bi_valid = 0;

  /* Initialize the first block of the first file: */
  init_block(s);
}


/* ===========================================================================
 * Send a stored block
 */
function _tr_stored_block(s, buf, stored_len, last)
//DeflateState *s;
//charf *buf;       /* input block */
//ulg stored_len;   /* length of input block */
//int last;         /* one if this is the last block for a file */
{
  send_bits(s, (STORED_BLOCK << 1) + (last ? 1 : 0), 3);    /* send block type */
  copy_block(s, buf, stored_len, true); /* with header */
}


/* ===========================================================================
 * Send one empty static block to give enough lookahead for inflate.
 * This takes 10 bits, of which 7 may remain in the bit buffer.
 */
function _tr_align(s) {
  send_bits(s, STATIC_TREES << 1, 3);
  send_code(s, END_BLOCK, static_ltree);
  bi_flush(s);
}


/* ===========================================================================
 * Determine the best encoding for the current block: dynamic trees, static
 * trees or store, and output the encoded block to the zip file.
 */
function _tr_flush_block(s, buf, stored_len, last)
//DeflateState *s;
//charf *buf;       /* input block, or NULL if too old */
//ulg stored_len;   /* length of input block */
//int last;         /* one if this is the last block for a file */
{
  var opt_lenb, static_lenb;  /* opt_len and static_len in bytes */
  var max_blindex = 0;        /* index of last bit length code of non zero freq */

  /* Build the Huffman trees unless a stored block is forced */
  if (s.level > 0) {

    /* Check if the file is binary or text */
    if (s.strm.data_type === Z_UNKNOWN) {
      s.strm.data_type = detect_data_type(s);
    }

    /* Construct the literal and distance trees */
    build_tree(s, s.l_desc);
    // Tracev((stderr, "\nlit data: dyn %ld, stat %ld", s->opt_len,
    //        s->static_len));

    build_tree(s, s.d_desc);
    // Tracev((stderr, "\ndist data: dyn %ld, stat %ld", s->opt_len,
    //        s->static_len));
    /* At this point, opt_len and static_len are the total bit lengths of
     * the compressed block data, excluding the tree representations.
     */

    /* Build the bit length tree for the above two trees, and get the index
     * in bl_order of the last bit length code to send.
     */
    max_blindex = build_bl_tree(s);

    /* Determine the best encoding. Compute the block lengths in bytes. */
    opt_lenb = (s.opt_len + 3 + 7) >>> 3;
    static_lenb = (s.static_len + 3 + 7) >>> 3;

    // Tracev((stderr, "\nopt %lu(%lu) stat %lu(%lu) stored %lu lit %u ",
    //        opt_lenb, s->opt_len, static_lenb, s->static_len, stored_len,
    //        s->last_lit));

    if (static_lenb <= opt_lenb) { opt_lenb = static_lenb; }

  } else {
    // Assert(buf != (char*)0, "lost buf");
    opt_lenb = static_lenb = stored_len + 5; /* force a stored block */
  }

  if ((stored_len + 4 <= opt_lenb) && (buf !== -1)) {
    /* 4: two words for the lengths */

    /* The test buf != NULL is only necessary if LIT_BUFSIZE > WSIZE.
     * Otherwise we can't have processed more than WSIZE input bytes since
     * the last block flush, because compression would have been
     * successful. If LIT_BUFSIZE <= WSIZE, it is never too late to
     * transform a block into a stored block.
     */
    _tr_stored_block(s, buf, stored_len, last);

  } else if (s.strategy === Z_FIXED || static_lenb === opt_lenb) {

    send_bits(s, (STATIC_TREES << 1) + (last ? 1 : 0), 3);
    compress_block(s, static_ltree, static_dtree);

  } else {
    send_bits(s, (DYN_TREES << 1) + (last ? 1 : 0), 3);
    send_all_trees(s, s.l_desc.max_code + 1, s.d_desc.max_code + 1, max_blindex + 1);
    compress_block(s, s.dyn_ltree, s.dyn_dtree);
  }
  // Assert (s->compressed_len == s->bits_sent, "bad compressed size");
  /* The above check is made mod 2^32, for files larger than 512 MB
   * and uLong implemented on 32 bits.
   */
  init_block(s);

  if (last) {
    bi_windup(s);
  }
  // Tracev((stderr,"\ncomprlen %lu(%lu) ", s->compressed_len>>3,
  //       s->compressed_len-7*last));
}

/* ===========================================================================
 * Save the match info and tally the frequency counts. Return true if
 * the current block must be flushed.
 */
function _tr_tally(s, dist, lc)
//    deflate_state *s;
//    unsigned dist;  /* distance of matched string */
//    unsigned lc;    /* match length-MIN_MATCH or unmatched char (if dist==0) */
{
  //var out_length, in_length, dcode;

  s.pending_buf[s.d_buf + s.last_lit * 2]     = (dist >>> 8) & 0xff;
  s.pending_buf[s.d_buf + s.last_lit * 2 + 1] = dist & 0xff;

  s.pending_buf[s.l_buf + s.last_lit] = lc & 0xff;
  s.last_lit++;

  if (dist === 0) {
    /* lc is the unmatched char */
    s.dyn_ltree[lc * 2]/*.Freq*/++;
  } else {
    s.matches++;
    /* Here, lc is the match length - MIN_MATCH */
    dist--;             /* dist = match distance - 1 */
    //Assert((ush)dist < (ush)MAX_DIST(s) &&
    //       (ush)lc <= (ush)(MAX_MATCH-MIN_MATCH) &&
    //       (ush)d_code(dist) < (ush)D_CODES,  "_tr_tally: bad match");

    s.dyn_ltree[(_length_code[lc] + LITERALS + 1) * 2]/*.Freq*/++;
    s.dyn_dtree[d_code(dist) * 2]/*.Freq*/++;
  }

// (!) This block is disabled in zlib defaults,
// don't enable it for binary compatibility

//#ifdef TRUNCATE_BLOCK
//  /* Try to guess if it is profitable to stop the current block here */
//  if ((s.last_lit & 0x1fff) === 0 && s.level > 2) {
//    /* Compute an upper bound for the compressed length */
//    out_length = s.last_lit*8;
//    in_length = s.strstart - s.block_start;
//
//    for (dcode = 0; dcode < D_CODES; dcode++) {
//      out_length += s.dyn_dtree[dcode*2]/*.Freq*/ * (5 + extra_dbits[dcode]);
//    }
//    out_length >>>= 3;
//    //Tracev((stderr,"\nlast_lit %u, in %ld, out ~%ld(%ld%%) ",
//    //       s->last_lit, in_length, out_length,
//    //       100L - out_length*100L/in_length));
//    if (s.matches < (s.last_lit>>1)/*int /2*/ && out_length < (in_length>>1)/*int /2*/) {
//      return true;
//    }
//  }
//#endif

  return (s.last_lit === s.lit_bufsize - 1);
  /* We avoid equality with lit_bufsize because of wraparound at 64K
   * on 16 bit machines and because stored blocks are restricted to
   * 64K-1 bytes.
   */
}

exports._tr_init  = _tr_init;
exports._tr_stored_block = _tr_stored_block;
exports._tr_flush_block  = _tr_flush_block;
exports._tr_tally = _tr_tally;
exports._tr_align = _tr_align;

},{"../utils/common":3}],15:[function(require,module,exports){
'use strict';

// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

function ZStream() {
  /* next input byte */
  this.input = null; // JS specific, because we have no pointers
  this.next_in = 0;
  /* number of bytes available at input */
  this.avail_in = 0;
  /* total number of input bytes read so far */
  this.total_in = 0;
  /* next output byte should be put there */
  this.output = null; // JS specific, because we have no pointers
  this.next_out = 0;
  /* remaining free space at output */
  this.avail_out = 0;
  /* total number of bytes output so far */
  this.total_out = 0;
  /* last error message, NULL if no error */
  this.msg = ''/*Z_NULL*/;
  /* not visible by applications */
  this.state = null;
  /* best guess about the data type: binary or text */
  this.data_type = 2/*Z_UNKNOWN*/;
  /* adler32 value of the uncompressed data */
  this.adler = 0;
}

module.exports = ZStream;

},{}],"/":[function(require,module,exports){
// Top level file is just a mixin of submodules & constants
'use strict';

var assign    = require('./lib/utils/common').assign;

var deflate   = require('./lib/deflate');
var inflate   = require('./lib/inflate');
var constants = require('./lib/zlib/constants');

var pako = {};

assign(pako, deflate, inflate, constants);

module.exports = pako;

},{"./lib/deflate":1,"./lib/inflate":2,"./lib/utils/common":3,"./lib/zlib/constants":6}]},{},[])("/")
});



/*
---
description: Pinyin, to get chinese pinyin from chinese.
license: MIT-style
authors: Bill Lue
requires:
  core/1.2.1: '*'
provides: [Pinyin]
...
*/
//(function( window, undefined ){
// var Pinyin = new Class({
var pinyin = (function() {
	var Pinyin = function(ops) {
			this.initialize(ops);
		},
		options = {
			checkPolyphone: false,
			charcase: 'default'
		};
	Pinyin.fn = Pinyin.prototype = {
		init: function(ops) {
			this.options = extend(options, ops);
		},
		initialize: function(ops) {
			this.init(ops);
			this.char_dict =
				"YDYQSXMWZSSXJBYMGCCZQPSSQBYCDSCDQLDYLYBSSJGYZZJJFKCCLZDHWDWZJLJPFYYNWJJTMYHZWZHFLZPPQHGSCYYYNJQYXXGJHHSDSJNKKTMOMLCRXYPSNQSECCQZGGLLYJLMYZZSECYKYYHQWJSSGGYXYZYJWWKDJHYCHMYXJTLXJYQBYXZLDWRDJRWYSRLDZJPCBZJJBRCFTLECZSTZFXXZHTRQHYBDLYCZSSYMMRFMYQZPWWJJYFCRWFDFZQPYDDWYXKYJAWJFFXYPSFTZYHHYZYSWCJYXSCLCXXWZZXNBGNNXBXLZSZSBSGPYSYZDHMDZBQBZCWDZZYYTZHBTSYYBZGNTNXQYWQSKBPHHLXGYBFMJEBJHHGQTJCYSXSTKZHLYCKGLYSMZXYALMELDCCXGZYRJXSDLTYZCQKCNNJWHJTZZCQLJSTSTBNXBTYXCEQXGKWJYFLZQLYHYXSPSFXLMPBYSXXXYDJCZYLLLSJXFHJXPJBTFFYABYXBHZZBJYZLWLCZGGBTSSMDTJZXPTHYQTGLJSCQFZKJZJQNLZWLSLHDZBWJNCJZYZSQQYCQYRZCJJWYBRTWPYFTWEXCSKDZCTBZHYZZYYJXZCFFZZMJYXXSDZZOTTBZLQWFCKSZSXFYRLNYJMBDTHJXSQQCCSBXYYTSYFBXDZTGBCNSLCYZZPSAZYZZSCJCSHZQYDXLBPJLLMQXTYDZXSQJTZPXLCGLQTZWJBHCTSYJSFXYEJJTLBGXSXJMYJQQPFZASYJNTYDJXKJCDJSZCBARTDCLYJQMWNQNCLLLKBYBZZSYHQQLTWLCCXTXLLZNTYLNEWYZYXCZXXGRKRMTCNDNJTSYYSSDQDGHSDBJGHRWRQLYBGLXHLGTGXBQJDZPYJSJYJCTMRNYMGRZJCZGJMZMGXMPRYXKJNYMSGMZJYMKMFXMLDTGFBHCJHKYLPFMDXLQJJSMTQGZSJLQDLDGJYCALCMZCSDJLLNXDJFFFFJCZFMZFFPFKHKGDPSXKTACJDHHZDDCRRCFQYJKQCCWJDXHWJLYLLZGCFCQDSMLZPBJJPLSBCJGGDCKKDEZSQCCKJGCGKDJTJDLZYCXKLQSCGJCLTFPCQCZGWPJDQYZJJBYJHSJDZWGFSJGZKQCCZLLPSPKJGQJHZZLJPLGJGJJTHJJYJZCZMLZLYQBGJWMLJKXZDZNJQSYZMLJLLJKYWXMKJLHSKJGBMCLYYMKXJQLBMLLKMDXXKWYXYSLMLPSJQQJQXYXFJTJDXMXXLLCXQBSYJBGWYMBGGBCYXPJYGPEPFGDJGBHBNSQJYZJKJKHXQFGQZKFHYGKHDKLLSDJQXPQYKYBNQSXQNSZSWHBSXWHXWBZZXDMNSJBSBKBBZKLYLXGWXDRWYQZMYWSJQLCJXXJXKJEQXSCYETLZHLYYYSDZPAQYZCMTLSHTZCFYZYXYLJSDCJQAGYSLCQLYYYSHMRQQKLDXZSCSSSYDYCJYSFSJBFRSSZQSBXXPXJYSDRCKGJLGDKZJZBDKTCSYQPYHSTCLDJDHMXMCGXYZHJDDTMHLTXZXYLYMOHYJCLTYFBQQXPFBDFHHTKSQHZYYWCNXXCRWHOWGYJLEGWDQCWGFJYCSNTMYTOLBYGWQWESJPWNMLRYDZSZTXYQPZGCWXHNGPYXSHMYQJXZTDPPBFYHZHTJYFDZWKGKZBLDNTSXHQEEGZZYLZMMZYJZGXZXKHKSTXNXXWYLYAPSTHXDWHZYMPXAGKYDXBHNHXKDPJNMYHYLPMGOCSLNZHKXXLPZZLBMLSFBHHGYGYYGGBHSCYAQTYWLXTZQCEZYDQDQMMHTKLLSZHLSJZWFYHQSWSCWLQAZYNYTLSXTHAZNKZZSZZLAXXZWWCTGQQTDDYZTCCHYQZFLXPSLZYGPZSZNGLNDQTBDLXGTCTAJDKYWNSYZLJHHZZCWNYYZYWMHYCHHYXHJKZWSXHZYXLYSKQYSPSLYZWMYPPKBYGLKZHTYXAXQSYSHXASMCHKDSCRSWJPWXSGZJLWWSCHSJHSQNHCSEGNDAQTBAALZZMSSTDQJCJKTSCJAXPLGGXHHGXXZCXPDMMHLDGTYBYSJMXHMRCPXXJZCKZXSHMLQXXTTHXWZFKHCCZDYTCJYXQHLXDHYPJQXYLSYYDZOZJNYXQEZYSQYAYXWYPDGXDDXSPPYZNDLTWRHXYDXZZJHTCXMCZLHPYYYYMHZLLHNXMYLLLMDCPPXHMXDKYCYRDLTXJCHHZZXZLCCLYLNZSHZJZZLNNRLWHYQSNJHXYNTTTKYJPYCHHYEGKCTTWLGQRLGGTGTYGYHPYHYLQYQGCWYQKPYYYTTTTLHYHLLTYTTSPLKYZXGZWGPYDSSZZDQXSKCQNMJJZZBXYQMJRTFFBTKHZKBXLJJKDXJTLBWFZPPTKQTZTGPDGNTPJYFALQMKGXBDCLZFHZCLLLLADPMXDJHLCCLGYHDZFGYDDGCYYFGYDXKSSEBDHYKDKDKHNAXXYBPBYYHXZQGAFFQYJXDMLJCSQZLLPCHBSXGJYNDYBYQSPZWJLZKSDDTACTBXZDYZYPJZQSJNKKTKNJDJGYYPGTLFYQKASDNTCYHBLWDZHBBYDWJRYGKZYHEYYFJMSDTYFZJJHGCXPLXHLDWXXJKYTCYKSSSMTWCTTQZLPBSZDZWZXGZAGYKTYWXLHLSPBCLLOQMMZSSLCMBJCSZZKYDCZJGQQDSMCYTZQQLWZQZXSSFPTTFQMDDZDSHDTDWFHTDYZJYQJQKYPBDJYYXTLJHDRQXXXHAYDHRJLKLYTWHLLRLLRCXYLBWSRSZZSYMKZZHHKYHXKSMDSYDYCJPBZBSQLFCXXXNXKXWYWSDZYQOGGQMMYHCDZTTFJYYBGSTTTYBYKJDHKYXBELHTYPJQNFXFDYKZHQKZBYJTZBXHFDXKDASWTAWAJLDYJSFHBLDNNTNQJTJNCHXFJSRFWHZFMDRYJYJWZPDJKZYJYMPCYZNYNXFBYTFYFWYGDBNZZZDNYTXZEMMQBSQEHXFZMBMFLZZSRXYMJGSXWZJSPRYDJSJGXHJJGLJJYNZZJXHGXKYMLPYYYCXYTWQZSWHWLYRJLPXSLSXMFSWWKLCTNXNYNPSJSZHDZEPTXMYYWXYYSYWLXJQZQXZDCLEEELMCPJPCLWBXSQHFWWTFFJTNQJHJQDXHWLBYZNFJLALKYYJLDXHHYCSTYYWNRJYXYWTRMDRQHWQCMFJDYZMHMYYXJWMYZQZXTLMRSPWWCHAQBXYGZYPXYYRRCLMPYMGKSJSZYSRMYJSNXTPLNBAPPYPYLXYYZKYNLDZYJZCZNNLMZHHARQMPGWQTZMXXMLLHGDZXYHXKYXYCJMFFYYHJFSBSSQLXXNDYCANNMTCJCYPRRNYTYQNYYMBMSXNDLYLYSLJRLXYSXQMLLYZLZJJJKYZZCSFBZXXMSTBJGNXYZHLXNMCWSCYZYFZLXBRNNNYLBNRTGZQYSATSWRYHYJZMZDHZGZDWYBSSCSKXSYHYTXXGCQGXZZSHYXJSCRHMKKBXCZJYJYMKQHZJFNBHMQHYSNJNZYBKNQMCLGQHWLZNZSWXKHLJHYYBQLBFCDSXDLDSPFZPSKJYZWZXZDDXJSMMEGJSCSSMGCLXXKYYYLNYPWWWGYDKZJGGGZGGSYCKNJWNJPCXBJJTQTJWDSSPJXZXNZXUMELPXFSXTLLXCLJXJJLJZXCTPSWXLYDHLYQRWHSYCSQYYBYAYWJJJQFWQCQQCJQGXALDBZZYJGKGXPLTZYFXJLTPADKYQHPMATLCPDCKBMTXYBHKLENXDLEEGQDYMSAWHZMLJTWYGXLYQZLJEEYYBQQFFNLYXRDSCTGJGXYYNKLLYQKCCTLHJLQMKKZGCYYGLLLJDZGYDHZWXPYSJBZKDZGYZZHYWYFQYTYZSZYEZZLYMHJJHTSMQWYZLKYYWZCSRKQYTLTDXWCTYJKLWSQZWBDCQYNCJSRSZJLKCDCDTLZZZACQQZZDDXYPLXZBQJYLZLLLQDDZQJYJYJZYXNYYYNYJXKXDAZWYRDLJYYYRJLXLLDYXJCYWYWNQCCLDDNYYYNYCKCZHXXCCLGZQJGKWPPCQQJYSBZZXYJSQPXJPZBSBDSFNSFPZXHDWZTDWPPTFLZZBZDMYYPQJRSDZSQZSQXBDGCPZSWDWCSQZGMDHZXMWWFYBPDGPHTMJTHZSMMBGZMBZJCFZWFZBBZMQCFMBDMCJXLGPNJBBXGYHYYJGPTZGZMQBQTCGYXJXLWZKYDPDYMGCFTPFXYZTZXDZXTGKMTYBBCLBJASKYTSSQYYMSZXFJEWLXLLSZBQJJJAKLYLXLYCCTSXMCWFKKKBSXLLLLJYXTYLTJYYTDPJHNHNNKBYQNFQYYZBYYESSESSGDYHFHWTCJBSDZZTFDMXHCNJZYMQWSRYJDZJQPDQBBSTJGGFBKJBXTGQHNGWJXJGDLLTHZHHYYYYYYSXWTYYYCCBDBPYPZYCCZYJPZYWCBDLFWZCWJDXXHYHLHWZZXJTCZLCDPXUJCZZZLYXJJTXPHFXWPYWXZPTDZZBDZCYHJHMLXBQXSBYLRDTGJRRCTTTHYTCZWMXFYTWWZCWJWXJYWCSKYBZSCCTZQNHXNWXXKHKFHTSWOCCJYBCMPZZYKBNNZPBZHHZDLSYDDYTYFJPXYNGFXBYQXCBHXCPSXTYZDMKYSNXSXLHKMZXLYHDHKWHXXSSKQYHHCJYXGLHZXCSNHEKDTGZXQYPKDHEXTYKCNYMYYYPKQYYYKXZLTHJQTBYQHXBMYHSQCKWWYLLHCYYLNNEQXQWMCFBDCCMLJGGXDQKTLXKGNQCDGZJWYJJLYHHQTTTNWCHMXCXWHWSZJYDJCCDBQCDGDNYXZTHCQRXCBHZTQCBXWGQWYYBXHMBYMYQTYEXMQKYAQYRGYZSLFYKKQHYSSQYSHJGJCNXKZYCXSBXYXHYYLSTYCXQTHYSMGSCPMMGCCCCCMTZTASMGQZJHKLOSQYLSWTMXSYQKDZLJQQYPLSYCZTCQQPBBQJZCLPKHQZYYXXDTDDTSJCXFFLLCHQXMJLWCJCXTSPYCXNDTJSHJWXDQQJSKXYAMYLSJHMLALYKXCYYDMNMDQMXMCZNNCYBZKKYFLMCHCMLHXRCJJHSYLNMTJZGZGYWJXSRXCWJGJQHQZDQJDCJJZKJKGDZQGJJYJYLXZXXCDQHHHEYTMHLFSBDJSYYSHFYSTCZQLPBDRFRZTZYKYWHSZYQKWDQZRKMSYNBCRXQBJYFAZPZZEDZCJYWBCJWHYJBQSZYWRYSZPTDKZPFPBNZTKLQYHBBZPNPPTYZZYBQNYDCPJMMCYCQMCYFZZDCMNLFPBPLNGQJTBTTNJZPZBBZNJKLJQYLNBZQHKSJZNGGQSZZKYXSHPZSNBCGZKDDZQANZHJKDRTLZLSWJLJZLYWTJNDJZJHXYAYNCBGTZCSSQMNJPJYTYSWXZFKWJQTKHTZPLBHSNJZSYZBWZZZZLSYLSBJHDWWQPSLMMFBJDWAQYZTCJTBNNWZXQXCDSLQGDSDPDZHJTQQPSWLYYJZLGYXYZLCTCBJTKTYCZJTQKBSJLGMGZDMCSGPYNJZYQYYKNXRPWSZXMTNCSZZYXYBYHYZAXYWQCJTLLCKJJTJHGDXDXYQYZZBYWDLWQCGLZGJGQRQZCZSSBCRPCSKYDZNXJSQGXSSJMYDNSTZTPBDLTKZWXQWQTZEXNQCZGWEZKSSBYBRTSSSLCCGBPSZQSZLCCGLLLZXHZQTHCZMQGYZQZNMCOCSZJMMZSQPJYGQLJYJPPLDXRGZYXCCSXHSHGTZNLZWZKJCXTCFCJXLBMQBCZZWPQDNHXLJCTHYZLGYLNLSZZPCXDSCQQHJQKSXZPBAJYEMSMJTZDXLCJYRYYNWJBNGZZTMJXLTBSLYRZPYLSSCNXPHLLHYLLQQZQLXYMRSYCXZLMMCZLTZSDWTJJLLNZGGQXPFSKYGYGHBFZPDKMWGHCXMSGDXJMCJZDYCABXJDLNBCDQYGSKYDQTXDJJYXMSZQAZDZFSLQXYJSJZYLBTXXWXQQZBJZUFBBLYLWDSLJHXJYZJWTDJCZFQZQZZDZSXZZQLZCDZFJHYSPYMPQZMLPPLFFXJJNZZYLSJEYQZFPFZKSYWJJJHRDJZZXTXXGLGHYDXCSKYSWMMZCWYBAZBJKSHFHJCXMHFQHYXXYZFTSJYZFXYXPZLCHMZMBXHZZSXYFYMNCWDABAZLXKTCSHHXKXJJZJSTHYGXSXYYHHHJWXKZXSSBZZWHHHCWTZZZPJXSNXQQJGZYZYWLLCWXZFXXYXYHXMKYYSWSQMNLNAYCYSPMJKHWCQHYLAJJMZXHMMCNZHBHXCLXTJPLTXYJHDYYLTTXFSZHYXXSJBJYAYRSMXYPLCKDUYHLXRLNLLSTYZYYQYGYHHSCCSMZCTZQXKYQFPYYRPFFLKQUNTSZLLZMWWTCQQYZWTLLMLMPWMBZSSTZRBPDDTLQJJBXZCSRZQQYGWCSXFWZLXCCRSZDZMCYGGDZQSGTJSWLJMYMMZYHFBJDGYXCCPSHXNZCSBSJYJGJMPPWAFFYFNXHYZXZYLREMZGZCYZSSZDLLJCSQFNXZKPTXZGXJJGFMYYYSNBTYLBNLHPFZDCYFBMGQRRSSSZXYSGTZRNYDZZCDGPJAFJFZKNZBLCZSZPSGCYCJSZLMLRSZBZZLDLSLLYSXSQZQLYXZLSKKBRXBRBZCYCXZZZEEYFGKLZLYYHGZSGZLFJHGTGWKRAAJYZKZQTSSHJJXDCYZUYJLZYRZDQQHGJZXSSZBYKJPBFRTJXLLFQWJHYLQTYMBLPZDXTZYGBDHZZRBGXHWNJTJXLKSCFSMWLSDQYSJTXKZSCFWJLBXFTZLLJZLLQBLSQMQQCGCZFPBPHZCZJLPYYGGDTGWDCFCZQYYYQYSSCLXZSKLZZZGFFCQNWGLHQYZJJCZLQZZYJPJZZBPDCCMHJGXDQDGDLZQMFGPSYTSDYFWWDJZJYSXYYCZCYHZWPBYKXRYLYBHKJKSFXTZJMMCKHLLTNYYMSYXYZPYJQYCSYCWMTJJKQYRHLLQXPSGTLYYCLJSCPXJYZFNMLRGJJTYZBXYZMSJYJHHFZQMSYXRSZCWTLRTQZSSTKXGQKGSPTGCZNJSJCQCXHMXGGZTQYDJKZDLBZSXJLHYQGGGTHQSZPYHJHHGYYGKGGCWJZZYLCZLXQSFTGZSLLLMLJSKCTBLLZZSZMMNYTPZSXQHJCJYQXYZXZQZCPSHKZZYSXCDFGMWQRLLQXRFZTLYSTCTMJCXJJXHJNXTNRZTZFQYHQGLLGCXSZSJDJLJCYDSJTLNYXHSZXCGJZYQPYLFHDJSBPCCZHJJJQZJQDYBSSLLCMYTTMQTBHJQNNYGKYRQYQMZGCJKPDCGMYZHQLLSLLCLMHOLZGDYYFZSLJCQZLYLZQJESHNYLLJXGJXLYSYYYXNBZLJSSZCQQCJYLLZLTJYLLZLLBNYLGQCHXYYXOXCXQKYJXXXYKLXSXXYQXCYKQXQCSGYXXYQXYGYTQOHXHXPYXXXULCYEYCHZZCBWQBBWJQZSCSZSSLZYLKDESJZWMYMCYTSDSXXSCJPQQSQYLYYZYCMDJDZYWCBTJSYDJKCYDDJLBDJJSODZYSYXQQYXDHHGQQYQHDYXWGMMMAJDYBBBPPBCMUUPLJZSMTXERXJMHQNUTPJDCBSSMSSSTKJTSSMMTRCPLZSZMLQDSDMJMQPNQDXCFYNBFSDQXYXHYAYKQYDDLQYYYSSZBYDSLNTFQTZQPZMCHDHCZCWFDXTMYQSPHQYYXSRGJCWTJTZZQMGWJJTJHTQJBBHWZPXXHYQFXXQYWYYHYSCDYDHHQMNMTMWCPBSZPPZZGLMZFOLLCFWHMMSJZTTDHZZYFFYTZZGZYSKYJXQYJZQBHMBZZLYGHGFMSHPZFZSNCLPBQSNJXZSLXXFPMTYJYGBXLLDLXPZJYZJYHHZCYWHJYLSJEXFSZZYWXKZJLUYDTMLYMQJPWXYHXSKTQJEZRPXXZHHMHWQPWQLYJJQJJZSZCPHJLCHHNXJLQWZJHBMZYXBDHHYPZLHLHLGFWLCHYYTLHJXCJMSCPXSTKPNHQXSRTYXXTESYJCTLSSLSTDLLLWWYHDHRJZSFGXTSYCZYNYHTDHWJSLHTZDQDJZXXQHGYLTZPHCSQFCLNJTCLZPFSTPDYNYLGMJLLYCQHYSSHCHYLHQYQTMZYPBYWRFQYKQSYSLZDQJMPXYYSSRHZJNYWTQDFZBWWTWWRXCWHGYHXMKMYYYQMSMZHNGCEPMLQQMTCWCTMMPXJPJJHFXYYZSXZHTYBMSTSYJTTQQQYYLHYNPYQZLCYZHZWSMYLKFJXLWGXYPJYTYSYXYMZCKTTWLKSMZSYLMPWLZWXWQZSSAQSYXYRHSSNTSRAPXCPWCMGDXHXZDZYFJHGZTTSBJHGYZSZYSMYCLLLXBTYXHBBZJKSSDMALXHYCFYGMQYPJYCQXJLLLJGSLZGQLYCJCCZOTYXMTMTTLLWTGPXYMZMKLPSZZZXHKQYSXCTYJZYHXSHYXZKXLZWPSQPYHJWPJPWXQQYLXSDHMRSLZZYZWTTCYXYSZZSHBSCCSTPLWSSCJCHNLCGCHSSPHYLHFHHXJSXYLLNYLSZDHZXYLSXLWZYKCLDYAXZCMDDYSPJTQJZLNWQPSSSWCTSTSZLBLNXSMNYYMJQBQHRZWTYYDCHQLXKPZWBGQYBKFCMZWPZLLYYLSZYDWHXPSBCMLJBSCGBHXLQHYRLJXYSWXWXZSLDFHLSLYNJLZYFLYJYCDRJLFSYZFSLLCQYQFGJYHYXZLYLMSTDJCYHBZLLNWLXXYGYYHSMGDHXXHHLZZJZXCZZZCYQZFNGWPYLCPKPYYPMCLQKDGXZGGWQBDXZZKZFBXXLZXJTPJPTTBYTSZZDWSLCHZHSLTYXHQLHYXXXYYZYSWTXZKHLXZXZPYHGCHKCFSYHUTJRLXFJXPTZTWHPLYXFCRHXSHXKYXXYHZQDXQWULHYHMJTBFLKHTXCWHJFWJCFPQRYQXCYYYQYGRPYWSGSUNGWCHKZDXYFLXXHJJBYZWTSXXNCYJJYMSWZJQRMHXZWFQSYLZJZGBHYNSLBGTTCSYBYXXWXYHXYYXNSQYXMQYWRGYQLXBBZLJSYLPSYTJZYHYZAWLRORJMKSCZJXXXYXCHDYXRYXXJDTSQFXLYLTSFFYXLMTYJMJUYYYXLTZCSXQZQHZXLYYXZHDNBRXXXJCTYHLBRLMBRLLAXKYLLLJLYXXLYCRYLCJTGJCMTLZLLCYZZPZPCYAWHJJFYBDYYZSMPCKZDQYQPBPCJPDCYZMDPBCYYDYCNNPLMTMLRMFMMGWYZBSJGYGSMZQQQZTXMKQWGXLLPJGZBQCDJJJFPKJKCXBLJMSWMDTQJXLDLPPBXCWRCQFBFQJCZAHZGMYKPHYYHZYKNDKZMBPJYXPXYHLFPNYYGXJDBKXNXHJMZJXSTRSTLDXSKZYSYBZXJLXYSLBZYSLHXJPFXPQNBYLLJQKYGZMCYZZYMCCSLCLHZFWFWYXZMWSXTYNXJHPYYMCYSPMHYSMYDYSHQYZCHMJJMZCAAGCFJBBHPLYZYLXXSDJGXDHKXXTXXNBHRMLYJSLTXMRHNLXQJXYZLLYSWQGDLBJHDCGJYQYCMHWFMJYBMBYJYJWYMDPWHXQLDYGPDFXXBCGJSPCKRSSYZJMSLBZZJFLJJJLGXZGYXYXLSZQYXBEXYXHGCXBPLDYHWETTWWCJMBTXCHXYQXLLXFLYXLLJLSSFWDPZSMYJCLMWYTCZPCHQEKCQBWLCQYDPLQPPQZQFJQDJHYMMCXTXDRMJWRHXCJZYLQXDYYNHYYHRSLSRSYWWZJYMTLTLLGTQCJZYABTCKZCJYCCQLJZQXALMZYHYWLWDXZXQDLLQSHGPJFJLJHJABCQZDJGTKHSSTCYJLPSWZLXZXRWGLDLZRLZXTGSLLLLZLYXXWGDZYGBDPHZPBRLWSXQBPFDWOFMWHLYPCBJCCLDMBZPBZZLCYQXLDOMZBLZWPDWYYGDSTTHCSQSCCRSSSYSLFYBFNTYJSZDFNDPDHDZZMBBLSLCMYFFGTJJQWFTMTPJWFNLBZCMMJTGBDZLQLPYFHYYMJYLSDCHDZJWJCCTLJCLDTLJJCPDDSQDSSZYBNDBJLGGJZXSXNLYCYBJXQYCBYLZCFZPPGKCXZDZFZTJJFJSJXZBNZYJQTTYJYHTYCZHYMDJXTTMPXSPLZCDWSLSHXYPZGTFMLCJTYCBPMGDKWYCYZCDSZZYHFLYCTYGWHKJYYLSJCXGYWJCBLLCSNDDBTZBSCLYZCZZSSQDLLMQYYHFSLQLLXFTYHABXGWNYWYYPLLSDLDLLBJCYXJZMLHLJDXYYQYTDLLLBUGBFDFBBQJZZMDPJHGCLGMJJPGAEHHBWCQXAXHHHZCHXYPHJAXHLPHJPGPZJQCQZGJJZZUZDMQYYBZZPHYHYBWHAZYJHYKFGDPFQSDLZMLJXKXGALXZDAGLMDGXMWZQYXXDXXPFDMMSSYMPFMDMMKXKSYZYSHDZKXSYSMMZZZMSYDNZZCZXFPLSTMZDNMXCKJMZTYYMZMZZMSXHHDCZJEMXXKLJSTLWLSQLYJZLLZJSSDPPMHNLZJCZYHMXXHGZCJMDHXTKGRMXFWMCGMWKDTKSXQMMMFZZYDKMSCLCMPCGMHSPXQPZDSSLCXKYXTWLWJYAHZJGZQMCSNXYYMMPMLKJXMHLMLQMXCTKZMJQYSZJSYSZHSYJZJCDAJZYBSDQJZGWZQQXFKDMSDJLFWEHKZQKJPEYPZYSZCDWYJFFMZZYLTTDZZEFMZLBNPPLPLPEPSZALLTYLKCKQZKGENQLWAGYXYDPXLHSXQQWQCQXQCLHYXXMLYCCWLYMQYSKGCHLCJNSZKPYZKCQZQLJPDMDZHLASXLBYDWQLWDNBQCRYDDZTJYBKBWSZDXDTNPJDTCTQDFXQQMGNXECLTTBKPWSLCTYQLPWYZZKLPYGZCQQPLLKCCYLPQMZCZQCLJSLQZDJXLDDHPZQDLJJXZQDXYZQKZLJCYQDYJPPYPQYKJYRMPCBYMCXKLLZLLFQPYLLLMBSGLCYSSLRSYSQTMXYXZQZFDZUYSYZTFFMZZSMZQHZSSCCMLYXWTPZGXZJGZGSJSGKDDHTQGGZLLBJDZLCBCHYXYZHZFYWXYZYMSDBZZYJGTSMTFXQYXQSTDGSLNXDLRYZZLRYYLXQHTXSRTZNGZXBNQQZFMYKMZJBZYMKBPNLYZPBLMCNQYZZZSJZHJCTZKHYZZJRDYZHNPXGLFZTLKGJTCTSSYLLGZRZBBQZZKLPKLCZYSSUYXBJFPNJZZXCDWXZYJXZZDJJKGGRSRJKMSMZJLSJYWQSKYHQJSXPJZZZLSNSHRNYPZTWCHKLPSRZLZXYJQXQKYSJYCZTLQZYBBYBWZPQDWWYZCYTJCJXCKCWDKKZXSGKDZXWWYYJQYYTCYTDLLXWKCZKKLCCLZCQQDZLQLCSFQCHQHSFSMQZZLNBJJZBSJHTSZDYSJQJPDLZCDCWJKJZZLPYCGMZWDJJBSJQZSYZYHHXJPBJYDSSXDZNCGLQMBTSFSBPDZDLZNFGFJGFSMPXJQLMBLGQCYYXBQKDJJQYRFKZTJDHCZKLBSDZCFJTPLLJGXHYXZCSSZZXSTJYGKGCKGYOQXJPLZPBPGTGYJZGHZQZZLBJLSQFZGKQQJZGYCZBZQTLDXRJXBSXXPZXHYZYCLWDXJJHXMFDZPFZHQHQMQGKSLYHTYCGFRZGNQXCLPDLBZCSCZQLLJBLHBZCYPZZPPDYMZZSGYHCKCPZJGSLJLNSCDSLDLXBMSTLDDFJMKDJDHZLZXLSZQPQPGJLLYBDSZGQLBZLSLKYYHZTTNTJYQTZZPSZQZTLLJTYYLLQLLQYZQLBDZLSLYYZYMDFSZSNHLXZNCZQZPBWSKRFBSYZMTHBLGJPMCZZLSTLXSHTCSYZLZBLFEQHLXFLCJLYLJQCBZLZJHHSSTBRMHXZHJZCLXFNBGXGTQJCZTMSFZKJMSSNXLJKBHSJXNTNLZDNTLMSJXGZJYJCZXYJYJWRWWQNZTNFJSZPZSHZJFYRDJSFSZJZBJFZQZZHZLXFYSBZQLZSGYFTZDCSZXZJBQMSZKJRHYJZCKMJKHCHGTXKXQGLXPXFXTRTYLXJXHDTSJXHJZJXZWZLCQSBTXWXGXTXXHXFTSDKFJHZYJFJXRZSDLLLTQSQQZQWZXSYQTWGWBZCGZLLYZBCLMQQTZHZXZXLJFRMYZFLXYSQXXJKXRMQDZDMMYYBSQBHGZMWFWXGMXLZPYYTGZYCCDXYZXYWGSYJYZNBHPZJSQSYXSXRTFYZGRHZTXSZZTHCBFCLSYXZLZQMZLMPLMXZJXSFLBYZMYQHXJSXRXSQZZZSSLYFRCZJRCRXHHZXQYDYHXSJJHZCXZBTYNSYSXJBQLPXZQPYMLXZKYXLXCJLCYSXXZZLXDLLLJJYHZXGYJWKJRWYHCPSGNRZLFZWFZZNSXGXFLZSXZZZBFCSYJDBRJKRDHHGXJLJJTGXJXXSTJTJXLYXQFCSGSWMSBCTLQZZWLZZKXJMLTMJYHSDDBXGZHDLBMYJFRZFSGCLYJBPMLYSMSXLSZJQQHJZFXGFQFQBPXZGYYQXGZTCQWYLTLGWSGWHRLFSFGZJMGMGBGTJFSYZZGZYZAFLSSPMLPFLCWBJZCLJJMZLPJJLYMQDMYYYFBGYGYZMLYZDXQYXRQQQHSYYYQXYLJTYXFSFSLLGNQCYHYCWFHCCCFXPYLYPLLZYXXXXXKQHHXSHJZCFZSCZJXCPZWHHHHHAPYLQALPQAFYHXDYLUKMZQGGGDDESRNNZLTZGCHYPPYSQJJHCLLJTOLNJPZLJLHYMHEYDYDSQYCDDHGZUNDZCLZYZLLZNTNYZGSLHSLPJJBDGWXPCDUTJCKLKCLWKLLCASSTKZZDNQNTTLYYZSSYSSZZRYLJQKCQDHHCRXRZYDGRGCWCGZQFFFPPJFZYNAKRGYWYQPQXXFKJTSZZXSWZDDFBBXTBGTZKZNPZZPZXZPJSZBMQHKCYXYLDKLJNYPKYGHGDZJXXEAHPNZKZTZCMXCXMMJXNKSZQNMNLWBWWXJKYHCPSTMCSQTZJYXTPCTPDTNNPGLLLZSJLSPBLPLQHDTNJNLYYRSZFFJFQWDPHZDWMRZCCLODAXNSSNYZRESTYJWJYJDBCFXNMWTTBYLWSTSZGYBLJPXGLBOCLHPCBJLTMXZLJYLZXCLTPNCLCKXTPZJSWCYXSFYSZDKNTLBYJCYJLLSTGQCBXRYZXBXKLYLHZLQZLNZCXWJZLJZJNCJHXMNZZGJZZXTZJXYCYYCXXJYYXJJXSSSJSTSSTTPPGQTCSXWZDCSYFPTFBFHFBBLZJCLZZDBXGCXLQPXKFZFLSYLTUWBMQJHSZBMDDBCYSCCLDXYCDDQLYJJWMQLLCSGLJJSYFPYYCCYLTJANTJJPWYCMMGQYYSXDXQMZHSZXPFTWWZQSWQRFKJLZJQQYFBRXJHHFWJJZYQAZMYFRHCYYBYQWLPEXCCZSTYRLTTDMQLYKMBBGMYYJPRKZNPBSXYXBHYZDJDNGHPMFSGMWFZMFQMMBCMZZCJJLCNUXYQLMLRYGQZCYXZLWJGCJCGGMCJNFYZZJHYCPRRCMTZQZXHFQGTJXCCJEAQCRJYHPLQLSZDJRBCQHQDYRHYLYXJSYMHZYDWLDFRYHBPYDTSSCNWBXGLPZMLZZTQSSCPJMXXYCSJYTYCGHYCJWYRXXLFEMWJNMKLLSWTXHYYYNCMMCWJDQDJZGLLJWJRKHPZGGFLCCSCZMCBLTBHBQJXQDSPDJZZGKGLFQYWBZYZJLTSTDHQHCTCBCHFLQMPWDSHYYTQWCNZZJTLBYMBPDYYYXSQKXWYYFLXXNCWCXYPMAELYKKJMZZZBRXYYQJFLJPFHHHYTZZXSGQQMHSPGDZQWBWPJHZJDYSCQWZKTXXSQLZYYMYSDZGRXCKKUJLWPYSYSCSYZLRMLQSYLJXBCXTLWDQZPCYCYKPPPNSXFYZJJRCEMHSZMSXLXGLRWGCSTLRSXBZGBZGZTCPLUJLSLYLYMTXMTZPALZXPXJTJWTCYYZLBLXBZLQMYLXPGHDSLSSDMXMBDZZSXWHAMLCZCPJMCNHJYSNSYGCHSKQMZZQDLLKABLWJXSFMOCDXJRRLYQZKJMYBYQLYHETFJZFRFKSRYXFJTWDSXXSYSQJYSLYXWJHSNLXYYXHBHAWHHJZXWMYLJCSSLKYDZTXBZSYFDXGXZJKHSXXYBSSXDPYNZWRPTQZCZENYGCXQFJYKJBZMLJCMQQXUOXSLYXXLYLLJDZBTYMHPFSTTQQWLHOKYBLZZALZXQLHZWRRQHLSTMYPYXJJXMQSJFNBXYXYJXXYQYLTHYLQYFMLKLJTMLLHSZWKZHLJMLHLJKLJSTLQXYLMBHHLNLZXQJHXCFXXLHYHJJGBYZZKBXSCQDJQDSUJZYYHZHHMGSXCSYMXFEBCQWWRBPYYJQTYZCYQYQQZYHMWFFHGZFRJFCDPXNTQYZPDYKHJLFRZXPPXZDBBGZQSTLGDGYLCQMLCHHMFYWLZYXKJLYPQHSYWMQQGQZMLZJNSQXJQSYJYCBEHSXFSZPXZWFLLBCYYJDYTDTHWZSFJMQQYJLMQXXLLDTTKHHYBFPWTYYSQQWNQWLGWDEBZWCMYGCULKJXTMXMYJSXHYBRWFYMWFRXYQMXYSZTZZTFYKMLDHQDXWYYNLCRYJBLPSXCXYWLSPRRJWXHQYPHTYDNXHHMMYWYTZCSQMTSSCCDALWZTCPQPYJLLQZYJSWXMZZMMYLMXCLMXCZMXMZSQTZPPQQBLPGXQZHFLJJHYTJSRXWZXSCCDLXTYJDCQJXSLQYCLZXLZZXMXQRJMHRHZJBHMFLJLMLCLQNLDXZLLLPYPSYJYSXCQQDCMQJZZXHNPNXZMEKMXHYKYQLXSXTXJYYHWDCWDZHQYYBGYBCYSCFGPSJNZDYZZJZXRZRQJJYMCANYRJTLDPPYZBSTJKXXZYPFDWFGZZRPYMTNGXZQBYXNBUFNQKRJQZMJEGRZGYCLKXZDSKKNSXKCLJSPJYYZLQQJYBZSSQLLLKJXTBKTYLCCDDBLSPPFYLGYDTZJYQGGKQTTFZXBDKTYYHYBBFYTYYBCLPDYTGDHRYRNJSPTCSNYJQHKLLLZSLYDXXWBCJQSPXBPJZJCJDZFFXXBRMLAZHCSNDLBJDSZBLPRZTSWSBXBCLLXXLZDJZSJPYLYXXYFTFFFBHJJXGBYXJPMMMPSSJZJMTLYZJXSWXTYLEDQPJMYGQZJGDJLQJWJQLLSJGJGYGMSCLJJXDTYGJQJQJCJZCJGDZZSXQGSJGGCXHQXSNQLZZBXHSGZXCXYLJXYXYYDFQQJHJFXDHCTXJYRXYSQTJXYEFYYSSYYJXNCYZXFXMSYSZXYYSCHSHXZZZGZZZGFJDLTYLNPZGYJYZYYQZPBXQBDZTZCZYXXYHHSQXSHDHGQHJHGYWSZTMZMLHYXGEBTYLZKQWYTJZRCLEKYSTDBCYKQQSAYXCJXWWGSBHJYZYDHCSJKQCXSWXFLTYNYZPZCCZJQTZWJQDZZZQZLJJXLSBHPYXXPSXSHHEZTXFPTLQYZZXHYTXNCFZYYHXGNXMYWXTZSJPTHHGYMXMXQZXTSBCZYJYXXTYYZYPCQLMMSZMJZZLLZXGXZAAJZYXJMZXWDXZSXZDZXLEYJJZQBHZWZZZQTZPSXZTDSXJJJZNYAZPHXYYSRNQDTHZHYYKYJHDZXZLSWCLYBZYECWCYCRYLCXNHZYDZYDYJDFRJJHTRSQTXYXJRJHOJYNXELXSFSFJZGHPZSXZSZDZCQZBYYKLSGSJHCZSHDGQGXYZGXCHXZJWYQWGYHKSSEQZZNDZFKWYSSTCLZSTSYMCDHJXXYWEYXCZAYDMPXMDSXYBSQMJMZJMTZQLPJYQZCGQHXJHHLXXHLHDLDJQCLDWBSXFZZYYSCHTYTYYBHECXHYKGJPXHHYZJFXHWHBDZFYZBCAPNPGNYDMSXHMMMMAMYNBYJTMPXYYMCTHJBZYFCGTYHWPHFTWZZEZSBZEGPFMTSKFTYCMHFLLHGPZJXZJGZJYXZSBBQSCZZLZCCSTPGXMJSFTCCZJZDJXCYBZLFCJSYZFGSZLYBCWZZBYZDZYPSWYJZXZBDSYUXLZZBZFYGCZXBZHZFTPBGZGEJBSTGKDMFHYZZJHZLLZZGJQZLSFDJSSCBZGPDLFZFZSZYZYZSYGCXSNXXCHCZXTZZLJFZGQSQYXZJQDCCZTQCDXZJYQJQCHXZTDLGSCXZSYQJQTZWLQDQZTQCHQQJZYEZZZPBWKDJFCJPZTYPQYQTTYNLMBDKTJZPQZQZZFPZSBNJLGYJDXJDZZKZGQKXDLPZJTCJDQBXDJQJSTCKNXBXZMSLYJCQMTJQWWCJQNJNLLLHJCWQTBZQYDZCZPZZDZYDDCYZZZCCJTTJFZDPRRTZTJDCQTQZDTJNPLZBCLLCTZSXKJZQZPZLBZRBTJDCXFCZDBCCJJLTQQPLDCGZDBBZJCQDCJWYNLLZYZCCDWLLXWZLXRXNTQQCZXKQLSGDFQTDDGLRLAJJTKUYMKQLLTZYTDYYCZGJWYXDXFRSKSTQTENQMRKQZHHQKDLDAZFKYPBGGPZREBZZYKZZSPEGJXGYKQZZZSLYSYYYZWFQZYLZZLZHWCHKYPQGNPGBLPLRRJYXCCSYYHSFZFYBZYYTGZXYLXCZWXXZJZBLFFLGSKHYJZEYJHLPLLLLCZGXDRZELRHGKLZZYHZLYQSZZJZQLJZFLNBHGWLCZCFJYSPYXZLZLXGCCPZBLLCYBBBBUBBCBPCRNNZCZYRBFSRLDCGQYYQXYGMQZWTZYTYJXYFWTEHZZJYWLCCNTZYJJZDEDPZDZTSYQJHDYMBJNYJZLXTSSTPHNDJXXBYXQTZQDDTJTDYYTGWSCSZQFLSHLGLBCZPHDLYZJYCKWTYTYLBNYTSDSYCCTYSZYYEBHEXHQDTWNYGYCLXTSZYSTQMYGZAZCCSZZDSLZCLZRQXYYELJSBYMXSXZTEMBBLLYYLLYTDQYSHYMRQWKFKBFXNXSBYCHXBWJYHTQBPBSBWDZYLKGZSKYHXQZJXHXJXGNLJKZLYYCDXLFYFGHLJGJYBXQLYBXQPQGZTZPLNCYPXDJYQYDYMRBESJYYHKXXSTMXRCZZYWXYQYBMCLLYZHQYZWQXDBXBZWZMSLPDMYSKFMZKLZCYQYCZLQXFZZYDQZPZYGYJYZMZXDZFYFYTTQTZHGSPCZMLCCYTZXJCYTJMKSLPZHYSNZLLYTPZCTZZCKTXDHXXTQCYFKSMQCCYYAZHTJPCYLZLYJBJXTPNYLJYYNRXSYLMMNXJSMYBCSYSYLZYLXJJQYLDZLPQBFZZBLFNDXQKCZFYWHGQMRDSXYCYTXNQQJZYYPFZXDYZFPRXEJDGYQBXRCNFYYQPGHYJDYZXGRHTKYLNWDZNTSMPKLBTHBPYSZBZTJZSZZJTYYXZPHSSZZBZCZPTQFZMYFLYPYBBJQXZMXXDJMTSYSKKBJZXHJCKLPSMKYJZCXTMLJYXRZZQSLXXQPYZXMKYXXXJCLJPRMYYGADYSKQLSNDHYZKQXZYZTCGHZTLMLWZYBWSYCTBHJHJFCWZTXWYTKZLXQSHLYJZJXTMPLPYCGLTBZZTLZJCYJGDTCLKLPLLQPJMZPAPXYZLKKTKDZCZZBNZDYDYQZJYJGMCTXLTGXSZLMLHBGLKFWNWZHDXUHLFMKYSLGXDTWWFRJEJZTZHYDXYKSHWFZCQSHKTMQQHTZHYMJDJSKHXZJZBZZXYMPAGQMSTPXLSKLZYNWRTSQLSZBPSPSGZWYHTLKSSSWHZZLYYTNXJGMJSZSUFWNLSOZTXGXLSAMMLBWLDSZYLAKQCQCTMYCFJBSLXCLZZCLXXKSBZQCLHJPSQPLSXXCKSLNHPSFQQYTXYJZLQLDXZQJZDYYDJNZPTUZDSKJFSLJHYLZSQZLBTXYDGTQFDBYAZXDZHZJNHHQBYKNXJJQCZMLLJZKSPLDYCLBBLXKLELXJLBQYCXJXGCNLCQPLZLZYJTZLJGYZDZPLTQCSXFDMNYCXGBTJDCZNBGBQYQJWGKFHTNPYQZQGBKPBBYZMTJDYTBLSQMPSXTBNPDXKLEMYYCJYNZCTLDYKZZXDDXHQSHDGMZSJYCCTAYRZLPYLTLKXSLZCGGEXCLFXLKJRTLQJAQZNCMBYDKKCXGLCZJZXJHPTDJJMZQYKQSECQZDSHHADMLZFMMZBGNTJNNLGBYJBRBTMLBYJDZXLCJLPLDLPCQDHLXZLYCBLCXZZJADJLNZMMSSSMYBHBSQKBHRSXXJMXSDZNZPXLGBRHWGGFCXGMSKLLTSJYYCQLTSKYWYYHYWXBXQYWPYWYKQLSQPTNTKHQCWDQKTWPXXHCPTHTWUMSSYHBWCRWXHJMKMZNGWTMLKFGHKJYLSYYCXWHYECLQHKQHTTQKHFZLDXQWYZYYDESBPKYRZPJFYYZJCEQDZZDLATZBBFJLLCXDLMJSSXEGYGSJQXCWBXSSZPDYZCXDNYXPPZYDLYJCZPLTXLSXYZYRXCYYYDYLWWNZSAHJSYQYHGYWWAXTJZDAXYSRLTDPSSYYFNEJDXYZHLXLLLZQZSJNYQYQQXYJGHZGZCYJCHZLYCDSHWSHJZYJXCLLNXZJJYYXNFXMWFPYLCYLLABWDDHWDXJMCXZTZPMLQZHSFHZYNZTLLDYWLSLXHYMMYLMBWWKYXYADTXYLLDJPYBPWUXJMWMLLSAFDLLYFLBHHHBQQLTZJCQJLDJTFFKMMMBYTHYGDCQRDDWRQJXNBYSNWZDBYYTBJHPYBYTTJXAAHGQDQTMYSTQXKBTZPKJLZRBEQQSSMJJBDJOTGTBXPGBKTLHQXJJJCTHXQDWJLWRFWQGWSHCKRYSWGFTGYGBXSDWDWRFHWYTJJXXXJYZYSLPYYYPAYXHYDQKXSHXYXGSKQHYWFDDDPPLCJLQQEEWXKSYYKDYPLTJTHKJLTCYYHHJTTPLTZZCDLTHQKZXQYSTEEYWYYZYXXYYSTTJKLLPZMCYHQGXYHSRMBXPLLNQYDQHXSXXWGDQBSHYLLPJJJTHYJKYPPTHYYKTYEZYENMDSHLCRPQFDGFXZPSFTLJXXJBSWYYSKSFLXLPPLBBBLBSFXFYZBSJSSYLPBBFFFFSSCJDSTZSXZRYYSYFFSYZYZBJTBCTSBSDHRTJJBYTCXYJEYLXCBNEBJDSYXYKGSJZBXBYTFZWGENYHHTHZHHXFWGCSTBGXKLSXYWMTMBYXJSTZSCDYQRCYTWXZFHMYMCXLZNSDJTTTXRYCFYJSBSDYERXJLJXBBDEYNJGHXGCKGSCYMBLXJMSZNSKGXFBNBPTHFJAAFXYXFPXMYPQDTZCXZZPXRSYWZDLYBBKTYQPQJPZYPZJZNJPZJLZZFYSBTTSLMPTZRTDXQSJEHBZYLZDHLJSQMLHTXTJECXSLZZSPKTLZKQQYFSYGYWPCPQFHQHYTQXZKRSGTTSQCZLPTXCDYYZXSQZSLXLZMYCPCQBZYXHBSXLZDLTCDXTYLZJYYZPZYZLTXJSJXHLPMYTXCQRBLZSSFJZZTNJYTXMYJHLHPPLCYXQJQQKZZSCPZKSWALQSBLCCZJSXGWWWYGYKTJBBZTDKHXHKGTGPBKQYSLPXPJCKBMLLXDZSTBKLGGQKQLSBKKTFXRMDKBFTPZFRTBBRFERQGXYJPZSSTLBZTPSZQZSJDHLJQLZBPMSMMSXLQQNHKNBLRDDNXXDHDDJCYYGYLXGZLXSYGMQQGKHBPMXYXLYTQWLWGCPBMQXCYZYDRJBHTDJYHQSHTMJSBYPLWHLZFFNYPMHXXHPLTBQPFBJWQDBYGPNZTPFZJGSDDTQSHZEAWZZYLLTYYBWJKXXGHLFKXDJTMSZSQYNZGGSWQSPHTLSSKMCLZXYSZQZXNCJDQGZDLFNYKLJCJLLZLMZZNHYDSSHTHZZLZZBBHQZWWYCRZHLYQQJBEYFXXXWHSRXWQHWPSLMSSKZTTYGYQQWRSLALHMJTQJSMXQBJJZJXZYZKXBYQXBJXSHZTSFJLXMXZXFGHKZSZGGYLCLSARJYHSLLLMZXELGLXYDJYTLFBHBPNLYZFBBHPTGJKWETZHKJJXZXXGLLJLSTGSHJJYQLQZFKCGNNDJSSZFDBCTWWSEQFHQJBSAQTGYPQLBXBMMYWXGSLZHGLZGQYFLZBYFZJFRYSFMBYZHQGFWZSYFYJJPHZBYYZFFWODGRLMFTWLBZGYCQXCDJYGZYYYYTYTYDWEGAZYHXJLZYYHLRMGRXXZCLHNELJJTJTPWJYBJJBXJJTJTEEKHWSLJPLPSFYZPQQBDLQJJTYYQLYZKDKSQJYYQZLDQTGJQYZJSUCMRYQTHTEJMFCTYHYPKMHYZWJDQFHYYXWSHCTXRLJHQXHCCYYYJLTKTTYTMXGTCJTZAYYOCZLYLBSZYWJYTSJYHBYSHFJLYGJXXTMZYYLTXXYPZLXYJZYZYYPNHMYMDYYLBLHLSYYQQLLNJJYMSOYQBZGDLYXYLCQYXTSZEGXHZGLHWBLJHEYXTWQMAKBPQCGYSHHEGQCMWYYWLJYJHYYZLLJJYLHZYHMGSLJLJXCJJYCLYCJPCPZJZJMMYLCQLNQLJQJSXYJMLSZLJQLYCMMHCFMMFPQQMFYLQMCFFQMMMMHMZNFHHJGTTHHKHSLNCHHYQDXTMMQDCYZYXYQMYQYLTDCYYYZAZZCYMZYDLZFFFMMYCQZWZZMABTBYZTDMNZZGGDFTYPCGQYTTSSFFWFDTZQSSYSTWXJHXYTSXXYLBYQHWWKXHZXWZNNZZJZJJQJCCCHYYXBZXZCYZTLLCQXYNJYCYYCYNZZQYYYEWYCZDCJYCCHYJLBTZYYCQWMPWPYMLGKDLDLGKQQBGYCHJXY"
			this.full_dict = {
				"a": "\u554a\u963f\u9515",
				"ai": "\u57c3\u6328\u54ce\u5509\u54c0\u7691\u764c\u853c\u77ee\u827e\u788d\u7231\u9698\u8bf6\u6371\u55f3\u55cc\u5ad2\u7477\u66a7\u7839\u953f\u972d",
				"an": "\u978d\u6c28\u5b89\u4ffa\u6309\u6697\u5cb8\u80fa\u6848\u8c19\u57ef\u63de\u72b4\u5eb5\u6849\u94f5\u9e4c\u9878\u9eef",
				"ang": "\u80ae\u6602\u76ce",
				"ao": "\u51f9\u6556\u71ac\u7ff1\u8884\u50b2\u5965\u61ca\u6fb3\u5773\u62d7\u55f7\u5662\u5c99\u5ed2\u9068\u5aaa\u9a9c\u8071\u87af\u93ca\u9ccc\u93d6",
				"ba": "\u82ad\u634c\u6252\u53ed\u5427\u7b06\u516b\u75a4\u5df4\u62d4\u8dcb\u9776\u628a\u8019\u575d\u9738\u7f62\u7238\u8307\u83dd\u8406\u636d\u5c9c\u705e\u6777\u94af\u7c91\u9c85\u9b43",
				"bai": "\u767d\u67cf\u767e\u6446\u4f70\u8d25\u62dc\u7a17\u859c\u63b0\u97b4",
				"ban": "\u6591\u73ed\u642c\u6273\u822c\u9881\u677f\u7248\u626e\u62cc\u4f34\u74e3\u534a\u529e\u7eca\u962a\u5742\u8c73\u94a3\u7622\u764d\u8228",
				"bang": "\u90a6\u5e2e\u6886\u699c\u8180\u7ed1\u68d2\u78c5\u868c\u9551\u508d\u8c24\u84a1\u8783",
				"bao": "\u82de\u80de\u5305\u8912\u96f9\u4fdd\u5821\u9971\u5b9d\u62b1\u62a5\u66b4\u8c79\u9c8d\u7206\u52f9\u8446\u5b80\u5b62\u7172\u9e28\u8913\u8db5\u9f85",
				"bo": "\u5265\u8584\u73bb\u83e0\u64ad\u62e8\u94b5\u6ce2\u535a\u52c3\u640f\u94c2\u7b94\u4f2f\u5e1b\u8236\u8116\u818a\u6e24\u6cca\u9a73\u4eb3\u8543\u5575\u997d\u6a97\u64d8\u7934\u94b9\u9e41\u7c38\u8ddb",
				"bei": "\u676f\u7891\u60b2\u5351\u5317\u8f88\u80cc\u8d1d\u94a1\u500d\u72c8\u5907\u60eb\u7119\u88ab\u5b5b\u9642\u90b6\u57e4\u84d3\u5457\u602b\u6096\u789a\u9e4e\u8919\u943e",
				"ben": "\u5954\u82ef\u672c\u7b28\u755a\u574c\u951b",
				"beng": "\u5d29\u7ef7\u752d\u6cf5\u8e66\u8ff8\u552a\u5623\u750f",
				"bi": "\u903c\u9f3b\u6bd4\u9119\u7b14\u5f7c\u78a7\u84d6\u853d\u6bd5\u6bd9\u6bd6\u5e01\u5e87\u75f9\u95ed\u655d\u5f0a\u5fc5\u8f9f\u58c1\u81c2\u907f\u965b\u5315\u4ef3\u4ffe\u8298\u835c\u8378\u5421\u54d4\u72f4\u5eb3\u610e\u6ed7\u6fde\u5f3c\u59a3\u5a62\u5b16\u74a7\u8d32\u7540\u94cb\u79d5\u88e8\u7b5a\u7b85\u7be6\u822d\u895e\u8df8\u9ac0",
				"bian": "\u97ad\u8fb9\u7f16\u8d2c\u6241\u4fbf\u53d8\u535e\u8fa8\u8fa9\u8fab\u904d\u533e\u5f01\u82c4\u5fed\u6c74\u7f0f\u7178\u782d\u78a5\u7a39\u7a86\u8759\u7b3e\u9cca",
				"biao": "\u6807\u5f6a\u8198\u8868\u5a4a\u9aa0\u98d1\u98d9\u98da\u706c\u9556\u9573\u762d\u88f1\u9cd4",
				"bie": "\u9cd6\u618b\u522b\u762a\u8e69\u9cd8",
				"bin": "\u5f6c\u658c\u6fd2\u6ee8\u5bbe\u6448\u50a7\u6d5c\u7f24\u73a2\u6ba1\u8191\u9554\u9acc\u9b13",
				"bing": "\u5175\u51b0\u67c4\u4e19\u79c9\u997c\u70b3\u75c5\u5e76\u7980\u90b4\u6452\u7ee0\u678b\u69df\u71f9",
				"bu": "\u6355\u535c\u54fa\u8865\u57e0\u4e0d\u5e03\u6b65\u7c3f\u90e8\u6016\u62ca\u535f\u900b\u74ff\u6661\u949a\u91ad",
				"ca": "\u64e6\u5693\u7924",
				"cai": "\u731c\u88c1\u6750\u624d\u8d22\u776c\u8e29\u91c7\u5f69\u83dc\u8521",
				"can": "\u9910\u53c2\u8695\u6b8b\u60ed\u60e8\u707f\u9a96\u74a8\u7cb2\u9eea",
				"cang": "\u82cd\u8231\u4ed3\u6ca7\u85cf\u4f27",
				"cao": "\u64cd\u7cd9\u69fd\u66f9\u8349\u8279\u5608\u6f15\u87ac\u825a",
				"ce": "\u5395\u7b56\u4fa7\u518c\u6d4b\u5202\u5e3b\u607b",
				"ceng": "\u5c42\u8e6d\u564c",
				"cha": "\u63d2\u53c9\u832c\u8336\u67e5\u78b4\u643d\u5bdf\u5c94\u5dee\u8be7\u7339\u9987\u6c4a\u59f9\u6748\u6942\u69ce\u6aab\u9497\u9538\u9572\u8869",
				"chai": "\u62c6\u67f4\u8c7a\u4faa\u8308\u7625\u867f\u9f87",
				"chan": "\u6400\u63ba\u8749\u998b\u8c17\u7f20\u94f2\u4ea7\u9610\u98a4\u5181\u8c04\u8c36\u8487\u5edb\u5fcf\u6f7a\u6fb6\u5b71\u7fbc\u5a75\u5b17\u9aa3\u89c7\u7985\u9561\u88e3\u87fe\u8e94",
				"chang": "\u660c\u7316\u573a\u5c1d\u5e38\u957f\u507f\u80a0\u5382\u655e\u7545\u5531\u5021\u4f25\u9b2f\u82cc\u83d6\u5f9c\u6005\u60dd\u960a\u5a3c\u5ae6\u6636\u6c05\u9cb3",
				"chao": "\u8d85\u6284\u949e\u671d\u5632\u6f6e\u5de2\u5435\u7092\u600a\u7ec9\u6641\u8016",
				"che": "\u8f66\u626f\u64a4\u63a3\u5f7b\u6f88\u577c\u5c6e\u7817",
				"chen": "\u90f4\u81e3\u8fb0\u5c18\u6668\u5ff1\u6c89\u9648\u8d81\u886c\u79f0\u8c0c\u62bb\u55d4\u5bb8\u741b\u6987\u809c\u80c2\u789c\u9f80",
				"cheng": "\u6491\u57ce\u6a59\u6210\u5448\u4e58\u7a0b\u60e9\u6f84\u8bda\u627f\u901e\u9a8b\u79e4\u57d5\u5d4a\u5fb5\u6d48\u67a8\u67fd\u6a18\u665f\u584d\u77a0\u94d6\u88ce\u86cf\u9172",
				"chi": "\u5403\u75f4\u6301\u5319\u6c60\u8fdf\u5f1b\u9a70\u803b\u9f7f\u4f88\u5c3a\u8d64\u7fc5\u65a5\u70bd\u50ba\u5880\u82aa\u830c\u640b\u53f1\u54e7\u557b\u55e4\u5f73\u996c\u6cb2\u5ab8\u6555\u80dd\u7719\u7735\u9e31\u761b\u892b\u86a9\u87ad\u7b1e\u7bea\u8c49\u8e05\u8e1f\u9b51",
				"chong": "\u5145\u51b2\u866b\u5d07\u5ba0\u833a\u5fe1\u61a7\u94f3\u825f",
				"chou": "\u62bd\u916c\u7574\u8e0c\u7a20\u6101\u7b79\u4ec7\u7ef8\u7785\u4e11\u4fe6\u5733\u5e31\u60c6\u6eb4\u59af\u7633\u96e0\u9c8b",
				"chu": "\u81ed\u521d\u51fa\u6a71\u53a8\u8e87\u9504\u96cf\u6ec1\u9664\u695a\u7840\u50a8\u77d7\u6410\u89e6\u5904\u4e8d\u520d\u61b7\u7ecc\u6775\u696e\u6a17\u870d\u8e70\u9edc",
				"chuan": "\u63e3\u5ddd\u7a7f\u693d\u4f20\u8239\u5598\u4e32\u63be\u821b\u60f4\u9044\u5ddb\u6c1a\u948f\u9569\u8221",
				"chuang": "\u75ae\u7a97\u5e62\u5e8a\u95ef\u521b\u6006",
				"chui": "\u5439\u708a\u6376\u9524\u5782\u9672\u68f0\u69cc",
				"chun": "\u6625\u693f\u9187\u5507\u6df3\u7eaf\u8822\u4fc3\u83bc\u6c8c\u80ab\u6710\u9e51\u877d",
				"chuo": "\u6233\u7ef0\u851f\u8fb6\u8f8d\u955e\u8e14\u9f8a",
				"ci": "\u75b5\u8328\u78c1\u96cc\u8f9e\u6148\u74f7\u8bcd\u6b64\u523a\u8d50\u6b21\u8360\u5472\u5d6f\u9e5a\u8785\u7ccd\u8d91",
				"cong": "\u806a\u8471\u56f1\u5306\u4ece\u4e1b\u506c\u82c1\u6dd9\u9aa2\u742e\u7481\u679e",
				"cu": "\u51d1\u7c97\u918b\u7c07\u731d\u6b82\u8e59",
				"cuan": "\u8e7f\u7be1\u7a9c\u6c46\u64ba\u6615\u7228",
				"cui": "\u6467\u5d14\u50ac\u8106\u7601\u7cb9\u6dec\u7fe0\u8403\u60b4\u7480\u69b1\u96b9",
				"cun": "\u6751\u5b58\u5bf8\u78cb\u5fd6\u76b4",
				"cuo": "\u64ae\u6413\u63aa\u632b\u9519\u539d\u811e\u9509\u77ec\u75e4\u9e7e\u8e49\u8e9c",
				"da": "\u642d\u8fbe\u7b54\u7629\u6253\u5927\u8037\u54d2\u55d2\u601b\u59b2\u75b8\u8921\u7b2a\u977c\u9791",
				"dai": "\u5446\u6b79\u50a3\u6234\u5e26\u6b86\u4ee3\u8d37\u888b\u5f85\u902e\u6020\u57ed\u7519\u5454\u5cb1\u8fe8\u902f\u9a80\u7ed0\u73b3\u9edb",
				"dan": "\u803d\u62c5\u4e39\u5355\u90f8\u63b8\u80c6\u65e6\u6c2e\u4f46\u60ee\u6de1\u8bde\u5f39\u86cb\u4ebb\u510b\u5369\u840f\u5556\u6fb9\u6a90\u6b9a\u8d55\u7708\u7605\u8043\u7baa",
				"dang": "\u5f53\u6321\u515a\u8361\u6863\u8c20\u51fc\u83ea\u5b95\u7800\u94db\u88c6",
				"dao": "\u5200\u6363\u8e48\u5012\u5c9b\u7977\u5bfc\u5230\u7a3b\u60bc\u9053\u76d7\u53e8\u5541\u5fc9\u6d2e\u6c18\u7118\u5fd1\u7e9b",
				"de": "\u5fb7\u5f97\u7684\u951d",
				"deng": "\u8e6c\u706f\u767b\u7b49\u77aa\u51f3\u9093\u5654\u5d9d\u6225\u78f4\u956b\u7c26",
				"di": "\u5824\u4f4e\u6ef4\u8fea\u654c\u7b1b\u72c4\u6da4\u7fdf\u5ae1\u62b5\u5e95\u5730\u8482\u7b2c\u5e1d\u5f1f\u9012\u7f14\u6c10\u7c74\u8bcb\u8c1b\u90b8\u577b\u839c\u837b\u5600\u5a23\u67e2\u68e3\u89cc\u7825\u78b2\u7747\u955d\u7f9d\u9ab6",
				"dian": "\u98a0\u6382\u6ec7\u7898\u70b9\u5178\u975b\u57ab\u7535\u4f43\u7538\u5e97\u60e6\u5960\u6dc0\u6bbf\u4e36\u963d\u576b\u57dd\u5dc5\u73b7\u765c\u766b\u7c1f\u8e2e",
				"diao": "\u7889\u53fc\u96d5\u51cb\u5201\u6389\u540a\u9493\u8c03\u8f7a\u94de\u8729\u7c9c\u8c82",
				"die": "\u8dcc\u7239\u789f\u8776\u8fed\u8c0d\u53e0\u4f5a\u57a4\u581e\u63f2\u558b\u6e2b\u8f76\u7252\u74de\u8936\u800b\u8e40\u9cbd\u9cce",
				"ding": "\u4e01\u76ef\u53ee\u9489\u9876\u9f0e\u952d\u5b9a\u8ba2\u4e22\u4ec3\u5576\u738e\u815a\u7887\u753a\u94e4\u7594\u8035\u914a",
				"dong": "\u4e1c\u51ac\u8463\u61c2\u52a8\u680b\u4f97\u606b\u51bb\u6d1e\u578c\u549a\u5cbd\u5cd2\u5902\u6c21\u80e8\u80f4\u7850\u9e2b",
				"dou": "\u515c\u6296\u6597\u9661\u8c46\u9017\u75d8\u8538\u94ad\u7aa6\u7aac\u86aa\u7bfc\u9161",
				"du": "\u90fd\u7763\u6bd2\u728a\u72ec\u8bfb\u5835\u7779\u8d4c\u675c\u9540\u809a\u5ea6\u6e21\u5992\u828f\u561f\u6e0e\u691f\u6a50\u724d\u8839\u7b03\u9ad1\u9ee9",
				"duan": "\u7aef\u77ed\u953b\u6bb5\u65ad\u7f0e\u5f56\u6934\u7145\u7c16",
				"dui": "\u5806\u5151\u961f\u5bf9\u603c\u619d\u7893",
				"dun": "\u58a9\u5428\u8e72\u6566\u987f\u56e4\u949d\u76fe\u9041\u7096\u7818\u7905\u76f9\u9566\u8db8",
				"duo": "\u6387\u54c6\u591a\u593a\u579b\u8eb2\u6735\u8dfa\u8235\u5241\u60f0\u5815\u5484\u54da\u7f0d\u67c1\u94ce\u88f0\u8e31",
				"e": "\u86fe\u5ce8\u9e45\u4fc4\u989d\u8bb9\u5a25\u6076\u5384\u627c\u904f\u9102\u997f\u5669\u8c14\u57a9\u57ad\u82ca\u83aa\u843c\u5443\u6115\u5c59\u5a40\u8f6d\u66f7\u816d\u786a\u9507\u9537\u9e57\u989a\u9cc4",
				"en": "\u6069\u84bd\u6441\u5514\u55ef",
				"er": "\u800c\u513f\u8033\u5c14\u9975\u6d31\u4e8c\u8d30\u8fe9\u73e5\u94d2\u9e38\u9c95",
				"fa": "\u53d1\u7f5a\u7b4f\u4f10\u4e4f\u9600\u6cd5\u73d0\u57a1\u781d",
				"fan": "\u85e9\u5e06\u756a\u7ffb\u6a0a\u77fe\u9492\u7e41\u51e1\u70e6\u53cd\u8fd4\u8303\u8d29\u72af\u996d\u6cdb\u8629\u5e61\u72ad\u68b5\u6535\u71d4\u7548\u8e6f",
				"fang": "\u574a\u82b3\u65b9\u80aa\u623f\u9632\u59a8\u4eff\u8bbf\u7eba\u653e\u531a\u90a1\u5f77\u94ab\u822b\u9c82",
				"fei": "\u83f2\u975e\u5561\u98de\u80a5\u532a\u8bfd\u5420\u80ba\u5e9f\u6cb8\u8d39\u82be\u72d2\u60b1\u6ddd\u5983\u7ecb\u7eef\u69a7\u8153\u6590\u6249\u7953\u7829\u9544\u75f1\u871a\u7bda\u7fe1\u970f\u9cb1",
				"fen": "\u82ac\u915a\u5429\u6c1b\u5206\u7eb7\u575f\u711a\u6c7e\u7c89\u594b\u4efd\u5fff\u6124\u7caa\u507e\u7035\u68fc\u610d\u9cbc\u9f22",
				"feng": "\u4e30\u5c01\u67ab\u8702\u5cf0\u950b\u98ce\u75af\u70fd\u9022\u51af\u7f1d\u8bbd\u5949\u51e4\u4ff8\u9146\u8451\u6ca3\u781c",
				"fu": "\u4f5b\u5426\u592b\u6577\u80a4\u5b75\u6276\u62c2\u8f90\u5e45\u6c1f\u7b26\u4f0f\u4fd8\u670d\u6d6e\u6daa\u798f\u88b1\u5f17\u752b\u629a\u8f85\u4fef\u91dc\u65a7\u812f\u8151\u5e9c\u8150\u8d74\u526f\u8986\u8d4b\u590d\u5085\u4ed8\u961c\u7236\u8179\u8d1f\u5bcc\u8ba3\u9644\u5987\u7f1a\u5490\u5310\u51eb\u90db\u8299\u82fb\u832f\u83a9\u83d4\u544b\u5e5e\u6ecf\u8274\u5b5a\u9a78\u7ec2\u6874\u8d59\u9efb\u9efc\u7f58\u7a03\u99a5\u864d\u86a8\u8709\u8760\u876e\u9eb8\u8dba\u8dd7\u9cc6",
				"ga": "\u5676\u560e\u86e4\u5c2c\u5477\u5c15\u5c1c\u65ee\u9486",
				"gai": "\u8be5\u6539\u6982\u9499\u76d6\u6e89\u4e10\u9654\u5793\u6224\u8d45\u80f2",
				"gan": "\u5e72\u7518\u6746\u67d1\u7aff\u809d\u8d76\u611f\u79c6\u6562\u8d63\u5769\u82f7\u5c34\u64c0\u6cd4\u6de6\u6f89\u7ec0\u6a44\u65f0\u77f8\u75b3\u9150",
				"gang": "\u5188\u521a\u94a2\u7f38\u809b\u7eb2\u5c97\u6e2f\u6206\u7f61\u9883\u7b7b",
				"gong": "\u6760\u5de5\u653b\u529f\u606d\u9f9a\u4f9b\u8eac\u516c\u5bab\u5f13\u5de9\u6c5e\u62f1\u8d21\u5171\u857b\u5efe\u54a3\u73d9\u80b1\u86a3\u86e9\u89e5",
				"gao": "\u7bd9\u768b\u9ad8\u818f\u7f94\u7cd5\u641e\u9550\u7a3f\u544a\u777e\u8bf0\u90dc\u84bf\u85c1\u7f1f\u69d4\u69c1\u6772\u9506",
				"ge": "\u54e5\u6b4c\u6401\u6208\u9e3d\u80f3\u7599\u5272\u9769\u845b\u683c\u9601\u9694\u94ec\u4e2a\u5404\u9b32\u4ee1\u54ff\u5865\u55dd\u7ea5\u643f\u8188\u784c\u94ea\u9549\u88bc\u988c\u867c\u8238\u9abc\u9ac2",
				"gei": "\u7ed9",
				"gen": "\u6839\u8ddf\u4e98\u831b\u54cf\u826e",
				"geng": "\u8015\u66f4\u5e9a\u7fb9\u57c2\u803f\u6897\u54fd\u8d53\u9ca0",
				"gou": "\u94a9\u52fe\u6c9f\u82df\u72d7\u57a2\u6784\u8d2d\u591f\u4f5d\u8bdf\u5ca3\u9058\u5abe\u7f11\u89cf\u5f40\u9e32\u7b31\u7bdd\u97b2",
				"gu": "\u8f9c\u83c7\u5495\u7b8d\u4f30\u6cbd\u5b64\u59d1\u9f13\u53e4\u86ca\u9aa8\u8c37\u80a1\u6545\u987e\u56fa\u96c7\u560f\u8bc2\u83f0\u54cc\u5d2e\u6c69\u688f\u8f71\u726f\u727f\u80cd\u81cc\u6bc2\u77bd\u7f5f\u94b4\u9522\u74e0\u9e2a\u9e44\u75fc\u86c4\u9164\u89da\u9cb4\u9ab0\u9e58",
				"gua": "\u522e\u74dc\u5250\u5be1\u6302\u8902\u5366\u8bd6\u5471\u681d\u9e39",
				"guai": "\u4e56\u62d0\u602a\u54d9",
				"guan": "\u68fa\u5173\u5b98\u51a0\u89c2\u7ba1\u9986\u7f50\u60ef\u704c\u8d2f\u500c\u839e\u63bc\u6dab\u76e5\u9e73\u9ccf",
				"guang": "\u5149\u5e7f\u901b\u72b7\u6844\u80f1\u7592",
				"gui": "\u7470\u89c4\u572d\u7845\u5f52\u9f9f\u95fa\u8f68\u9b3c\u8be1\u7678\u6842\u67dc\u8dea\u8d35\u523d\u5326\u523f\u5e8b\u5b84\u59ab\u6867\u7085\u6677\u7688\u7c0b\u9c91\u9cdc",
				"gun": "\u8f8a\u6eda\u68cd\u4e28\u886e\u7ef2\u78d9\u9ca7",
				"guo": "\u9505\u90ed\u56fd\u679c\u88f9\u8fc7\u9998\u8803\u57da\u63b4\u5459\u56d7\u5e3c\u5d1e\u7313\u6901\u8662\u951e\u8052\u872e\u873e\u8748",
				"ha": "\u54c8",
				"hai": "\u9ab8\u5b69\u6d77\u6c26\u4ea5\u5bb3\u9a87\u54b4\u55e8\u988f\u91a2",
				"han": "\u9163\u61a8\u90af\u97e9\u542b\u6db5\u5bd2\u51fd\u558a\u7f55\u7ff0\u64bc\u634d\u65f1\u61be\u608d\u710a\u6c57\u6c49\u9097\u83e1\u6496\u961a\u701a\u6657\u7113\u9894\u86b6\u9f3e",
				"hen": "\u592f\u75d5\u5f88\u72e0\u6068",
				"hang": "\u676d\u822a\u6c86\u7ed7\u73e9\u6841",
				"hao": "\u58d5\u568e\u8c6a\u6beb\u90dd\u597d\u8017\u53f7\u6d69\u8585\u55e5\u5686\u6fe0\u704f\u660a\u7693\u98a2\u869d",
				"he": "\u5475\u559d\u8377\u83cf\u6838\u79be\u548c\u4f55\u5408\u76d2\u8c89\u9602\u6cb3\u6db8\u8d6b\u8910\u9e64\u8d3a\u8bc3\u52be\u58d1\u85ff\u55d1\u55ec\u9616\u76cd\u86b5\u7fee",
				"hei": "\u563f\u9ed1",
				"heng": "\u54fc\u4ea8\u6a2a\u8861\u6052\u8a07\u8605",
				"hong": "\u8f70\u54c4\u70d8\u8679\u9e3f\u6d2a\u5b8f\u5f18\u7ea2\u9ec9\u8ba7\u836d\u85a8\u95f3\u6cd3",
				"hou": "\u5589\u4faf\u7334\u543c\u539a\u5019\u540e\u5820\u5f8c\u9005\u760a\u7bcc\u7cc7\u9c8e\u9aba",
				"hu": "\u547c\u4e4e\u5ffd\u745a\u58f6\u846b\u80e1\u8774\u72d0\u7cca\u6e56\u5f27\u864e\u552c\u62a4\u4e92\u6caa\u6237\u51b1\u553f\u56eb\u5cb5\u7322\u6019\u60da\u6d52\u6ef9\u7425\u69f2\u8f77\u89f3\u70c0\u7173\u623d\u6248\u795c\u9e55\u9e71\u7b0f\u9190\u659b",
				"hua": "\u82b1\u54d7\u534e\u733e\u6ed1\u753b\u5212\u5316\u8bdd\u5290\u6d4d\u9a85\u6866\u94e7\u7a1e",
				"huai": "\u69d0\u5f8a\u6000\u6dee\u574f\u8fd8\u8e1d",
				"huan": "\u6b22\u73af\u6853\u7f13\u6362\u60a3\u5524\u75ea\u8c62\u7115\u6da3\u5ba6\u5e7b\u90c7\u5942\u57b8\u64d0\u571c\u6d39\u6d63\u6f36\u5bf0\u902d\u7f33\u953e\u9ca9\u9b1f",
				"huang": "\u8352\u614c\u9ec4\u78fa\u8757\u7c27\u7687\u51f0\u60f6\u714c\u6643\u5e4c\u604d\u8c0e\u968d\u5fa8\u6e5f\u6f62\u9051\u749c\u8093\u7640\u87e5\u7bc1\u9cc7",
				"hui": "\u7070\u6325\u8f89\u5fbd\u6062\u86d4\u56de\u6bc1\u6094\u6167\u5349\u60e0\u6666\u8d3f\u79fd\u4f1a\u70e9\u6c47\u8bb3\u8bf2\u7ed8\u8bd9\u8334\u835f\u8559\u54d5\u5599\u96b3\u6d04\u5f57\u7f0b\u73f2\u6656\u605a\u867a\u87ea\u9ebe",
				"hun": "\u8364\u660f\u5a5a\u9b42\u6d51\u6df7\u8be8\u9984\u960d\u6eb7\u7f17",
				"huo": "\u8c41\u6d3b\u4f19\u706b\u83b7\u6216\u60d1\u970d\u8d27\u7978\u6509\u56af\u5925\u94ac\u952a\u956c\u8020\u8816",
				"ji": "\u51fb\u573e\u57fa\u673a\u7578\u7a3d\u79ef\u7b95\u808c\u9965\u8ff9\u6fc0\u8ba5\u9e21\u59ec\u7ee9\u7f09\u5409\u6781\u68d8\u8f91\u7c4d\u96c6\u53ca\u6025\u75be\u6c72\u5373\u5ac9\u7ea7\u6324\u51e0\u810a\u5df1\u84df\u6280\u5180\u5b63\u4f0e\u796d\u5242\u60b8\u6d4e\u5bc4\u5bc2\u8ba1\u8bb0\u65e2\u5fcc\u9645\u5993\u7ee7\u7eaa\u5c45\u4e0c\u4e69\u525e\u4f76\u4f74\u8114\u58bc\u82a8\u82b0\u8401\u84ba\u857a\u638e\u53fd\u54ad\u54dc\u5527\u5c8c\u5d74\u6d0e\u5f50\u5c50\u9aa5\u757f\u7391\u696b\u6b9b\u621f\u6222\u8d4d\u89ca\u7284\u9f51\u77f6\u7f81\u5d47\u7a37\u7620\u7635\u866e\u7b08\u7b04\u66a8\u8dfb\u8dfd\u9701\u9c9a\u9cab\u9afb\u9e82",
				"jia": "\u5609\u67b7\u5939\u4f73\u5bb6\u52a0\u835a\u988a\u8d3e\u7532\u94be\u5047\u7a3c\u4ef7\u67b6\u9a7e\u5ac1\u4f3d\u90cf\u62ee\u5cac\u6d43\u8fe6\u73c8\u621b\u80db\u605d\u94d7\u9553\u75c2\u86f1\u7b33\u8888\u8dcf",
				"jian": "\u6b7c\u76d1\u575a\u5c16\u7b3a\u95f4\u714e\u517c\u80a9\u8270\u5978\u7f04\u8327\u68c0\u67ec\u78b1\u7877\u62e3\u6361\u7b80\u4fed\u526a\u51cf\u8350\u69db\u9274\u8df5\u8d31\u89c1\u952e\u7bad\u4ef6\u5065\u8230\u5251\u996f\u6e10\u6e85\u6da7\u5efa\u50ed\u8c0f\u8c2b\u83c5\u84b9\u641b\u56dd\u6e54\u8e47\u8b07\u7f23\u67a7\u67d9\u6957\u620b\u622c\u726e\u728d\u6bfd\u8171\u7751\u950f\u9e63\u88e5\u7b15\u7bb4\u7fe6\u8dbc\u8e3a\u9ca3\u97af",
				"jiang": "\u50f5\u59dc\u5c06\u6d46\u6c5f\u7586\u848b\u6868\u5956\u8bb2\u5320\u9171\u964d\u8333\u6d1a\u7edb\u7f30\u729f\u7913\u8029\u7ce8\u8c47",
				"jiao": "\u8549\u6912\u7901\u7126\u80f6\u4ea4\u90ca\u6d47\u9a84\u5a07\u56bc\u6405\u94f0\u77eb\u4fa5\u811a\u72e1\u89d2\u997a\u7f34\u7ede\u527f\u6559\u9175\u8f7f\u8f83\u53eb\u4f7c\u50ec\u832d\u6322\u564d\u5ce4\u5fbc\u59e3\u7e9f\u656b\u768e\u9e6a\u86df\u91ae\u8de4\u9c9b",
				"jie": "\u7a96\u63ed\u63a5\u7686\u79f8\u8857\u9636\u622a\u52ab\u8282\u6854\u6770\u6377\u776b\u7aed\u6d01\u7ed3\u89e3\u59d0\u6212\u85c9\u82a5\u754c\u501f\u4ecb\u75a5\u8beb\u5c4a\u5048\u8ba6\u8bd8\u5588\u55df\u736c\u5a55\u5b51\u6840\u7352\u78a3\u9534\u7596\u88b7\u9889\u86a7\u7faf\u9c92\u9ab1\u9aeb",
				"jin": "\u5dfe\u7b4b\u65a4\u91d1\u4eca\u6d25\u895f\u7d27\u9526\u4ec5\u8c28\u8fdb\u9773\u664b\u7981\u8fd1\u70ec\u6d78\u5c3d\u537a\u8369\u5807\u5664\u9991\u5ed1\u5997\u7f19\u747e\u69ff\u8d46\u89d0\u9485\u9513\u887f\u77dc",
				"jing": "\u52b2\u8346\u5162\u830e\u775b\u6676\u9cb8\u4eac\u60ca\u7cbe\u7cb3\u7ecf\u4e95\u8b66\u666f\u9888\u9759\u5883\u656c\u955c\u5f84\u75c9\u9756\u7adf\u7ade\u51c0\u522d\u5106\u9631\u83c1\u734d\u61ac\u6cfe\u8ff3\u5f2a\u5a67\u80bc\u80eb\u8148\u65cc",
				"jiong": "\u70af\u7a98\u5182\u8fe5\u6243",
				"jiu": "\u63ea\u7a76\u7ea0\u7396\u97ed\u4e45\u7078\u4e5d\u9152\u53a9\u6551\u65e7\u81fc\u8205\u548e\u5c31\u759a\u50e6\u557e\u9604\u67e9\u6855\u9e6b\u8d73\u9b0f",
				"ju": "\u97a0\u62d8\u72d9\u75bd\u9a79\u83ca\u5c40\u5480\u77e9\u4e3e\u6cae\u805a\u62d2\u636e\u5de8\u5177\u8ddd\u8e1e\u952f\u4ff1\u53e5\u60e7\u70ac\u5267\u5028\u8bb5\u82e3\u82f4\u8392\u63ac\u907d\u5c66\u741a\u67b8\u6910\u6998\u6989\u6a58\u728b\u98d3\u949c\u9514\u7aad\u88fe\u8d84\u91b5\u8e3d\u9f83\u96ce\u97ab",
				"juan": "\u6350\u9e43\u5a1f\u5026\u7737\u5377\u7ee2\u9104\u72f7\u6d93\u684a\u8832\u9529\u954c\u96bd",
				"jue": "\u6485\u652b\u6289\u6398\u5014\u7235\u89c9\u51b3\u8bc0\u7edd\u53a5\u5282\u8c32\u77cd\u8568\u5658\u5d1b\u7357\u5b53\u73cf\u6877\u6a5b\u721d\u9562\u8e76\u89d6",
				"jun": "\u5747\u83cc\u94a7\u519b\u541b\u5cfb\u4fca\u7ae3\u6d5a\u90e1\u9a8f\u6343\u72fb\u76b2\u7b60\u9e87",
				"ka": "\u5580\u5496\u5361\u4f67\u5494\u80e9",
				"ke": "\u54af\u5777\u82db\u67ef\u68f5\u78d5\u9897\u79d1\u58f3\u54b3\u53ef\u6e34\u514b\u523b\u5ba2\u8bfe\u5ca2\u606a\u6e98\u9a92\u7f02\u73c2\u8f72\u6c2a\u778c\u94b6\u75b4\u7aa0\u874c\u9ac1",
				"kai": "\u5f00\u63e9\u6977\u51ef\u6168\u5240\u57b2\u8488\u5ffe\u607a\u94e0\u950e",
				"kan": "\u520a\u582a\u52d8\u574e\u780d\u770b\u4f83\u51f5\u83b0\u83b6\u6221\u9f9b\u77b0",
				"kang": "\u5eb7\u6177\u7ce0\u625b\u6297\u4ea2\u7095\u5751\u4f09\u95f6\u94aa",
				"kao": "\u8003\u62f7\u70e4\u9760\u5c3b\u6832\u7292\u94d0",
				"ken": "\u80af\u5543\u57a6\u6073\u57a0\u88c9\u9880",
				"keng": "\u542d\u5fd0\u94ff",
				"kong": "\u7a7a\u6050\u5b54\u63a7\u5025\u5d06\u7b9c",
				"kou": "\u62a0\u53e3\u6263\u5bc7\u82a4\u853b\u53e9\u770d\u7b58",
				"ku": "\u67af\u54ed\u7a9f\u82e6\u9177\u5e93\u88e4\u5233\u5800\u55be\u7ed4\u9ab7",
				"kua": "\u5938\u57ae\u630e\u8de8\u80ef\u4f89",
				"kuai": "\u5757\u7b77\u4fa9\u5feb\u84af\u90d0\u8489\u72ef\u810d",
				"kuan": "\u5bbd\u6b3e\u9acb",
				"kuang": "\u5321\u7b50\u72c2\u6846\u77ff\u7736\u65f7\u51b5\u8bd3\u8bf3\u909d\u5739\u593c\u54d0\u7ea9\u8d36",
				"kui": "\u4e8f\u76d4\u5cbf\u7aa5\u8475\u594e\u9b41\u5080\u9988\u6127\u6e83\u9997\u532e\u5914\u9697\u63c6\u55b9\u559f\u609d\u6126\u9615\u9035\u668c\u777d\u8069\u8770\u7bd1\u81fe\u8dec",
				"kun": "\u5764\u6606\u6346\u56f0\u6083\u9603\u7428\u951f\u918c\u9cb2\u9ae1",
				"kuo": "\u62ec\u6269\u5ed3\u9614\u86de",
				"la": "\u5783\u62c9\u5587\u8721\u814a\u8fa3\u5566\u524c\u647a\u908b\u65ef\u782c\u760c",
				"lai": "\u83b1\u6765\u8d56\u5d03\u5f95\u6d9e\u6fd1\u8d49\u7750\u94fc\u765e\u7c41",
				"lan": "\u84dd\u5a6a\u680f\u62e6\u7bee\u9611\u5170\u6f9c\u8c30\u63fd\u89c8\u61d2\u7f06\u70c2\u6ee5\u5549\u5c9a\u61d4\u6f24\u6984\u6593\u7f71\u9567\u8934",
				"lang": "\u7405\u6994\u72fc\u5eca\u90ce\u6717\u6d6a\u83a8\u8497\u5577\u9606\u9512\u7a02\u8782",
				"lao": "\u635e\u52b3\u7262\u8001\u4f6c\u59e5\u916a\u70d9\u6d9d\u5520\u5d02\u6833\u94d1\u94f9\u75e8\u91aa",
				"le": "\u52d2\u4e50\u808b\u4ec2\u53fb\u561e\u6cd0\u9cd3",
				"lei": "\u96f7\u956d\u857e\u78ca\u7d2f\u5121\u5792\u64c2\u7c7b\u6cea\u7fb8\u8bd4\u837d\u54a7\u6f2f\u5ad8\u7f27\u6a91\u8012\u9179",
				"ling": "\u68f1\u51b7\u62ce\u73b2\u83f1\u96f6\u9f84\u94c3\u4f36\u7f9a\u51cc\u7075\u9675\u5cad\u9886\u53e6\u4ee4\u9143\u5844\u82d3\u5464\u56f9\u6ce0\u7eeb\u67c3\u68c2\u74f4\u8046\u86c9\u7fce\u9cae",
				"leng": "\u695e\u6123",
				"li": "\u5398\u68a8\u7281\u9ece\u7bf1\u72f8\u79bb\u6f13\u7406\u674e\u91cc\u9ca4\u793c\u8389\u8354\u540f\u6817\u4e3d\u5389\u52b1\u783e\u5386\u5229\u5088\u4f8b\u4fd0\u75e2\u7acb\u7c92\u6ca5\u96b6\u529b\u7483\u54e9\u4fea\u4fda\u90e6\u575c\u82c8\u8385\u84e0\u85dc\u6369\u5456\u5533\u55b1\u7301\u6ea7\u6fa7\u9026\u5a0c\u5ae0\u9a8a\u7f21\u73de\u67a5\u680e\u8f79\u623e\u783a\u8a48\u7f79\u9502\u9e42\u75a0\u75ac\u86ce\u870a\u8821\u7b20\u7be5\u7c9d\u91b4\u8dde\u96f3\u9ca1\u9ce2\u9ee7",
				"lian": "\u4fe9\u8054\u83b2\u8fde\u9570\u5ec9\u601c\u6d9f\u5e18\u655b\u8138\u94fe\u604b\u70bc\u7ec3\u631b\u8539\u5941\u6f4b\u6fc2\u5a08\u740f\u695d\u6b93\u81c1\u81a6\u88e2\u880a\u9ca2",
				"liang": "\u7cae\u51c9\u6881\u7cb1\u826f\u4e24\u8f86\u91cf\u667e\u4eae\u8c05\u589a\u690b\u8e09\u9753\u9b49",
				"liao": "\u64a9\u804a\u50da\u7597\u71ce\u5be5\u8fbd\u6f66\u4e86\u6482\u9563\u5ed6\u6599\u84fc\u5c25\u5639\u7360\u5bee\u7f2d\u948c\u9e69\u8022",
				"lie": "\u5217\u88c2\u70c8\u52a3\u730e\u51bd\u57d2\u6d0c\u8d94\u8e90\u9b23",
				"lin": "\u7433\u6797\u78f7\u9716\u4e34\u90bb\u9cde\u6dcb\u51db\u8d41\u541d\u853a\u5d99\u5eea\u9074\u6aa9\u8f9a\u77b5\u7cbc\u8e8f\u9e9f",
				"liu": "\u6e9c\u7409\u69b4\u786b\u998f\u7559\u5218\u7624\u6d41\u67f3\u516d\u62a1\u507b\u848c\u6cd6\u6d4f\u905b\u9a9d\u7efa\u65d2\u7198\u950d\u954f\u9e68\u938f",
				"long": "\u9f99\u804b\u5499\u7b3c\u7abf\u9686\u5784\u62e2\u9647\u5f04\u5785\u830f\u6cf7\u73d1\u680a\u80e7\u783b\u7643",
				"lou": "\u697c\u5a04\u6402\u7bd3\u6f0f\u964b\u55bd\u5d5d\u9542\u7618\u8027\u877c\u9ac5",
				"lu": "\u82a6\u5362\u9885\u5e90\u7089\u63b3\u5364\u864f\u9c81\u9e93\u788c\u9732\u8def\u8d42\u9e7f\u6f5e\u7984\u5f55\u9646\u622e\u5786\u6445\u64b8\u565c\u6cf8\u6e0c\u6f09\u7490\u680c\u6a79\u8f73\u8f82\u8f98\u6c07\u80ea\u9565\u9e2c\u9e6d\u7c0f\u823b\u9c88",
				"lv": "\u9a74\u5415\u94dd\u4fa3\u65c5\u5c65\u5c61\u7f15\u8651\u6c2f\u5f8b\u7387\u6ee4\u7eff\u634b\u95fe\u6988\u8182\u7a06\u891b",
				"luan": "\u5ce6\u5b6a\u6ee6\u5375\u4e71\u683e\u9e3e\u92ae",
				"lue": "\u63a0\u7565\u950a",
				"lun": "\u8f6e\u4f26\u4ed1\u6ca6\u7eb6\u8bba\u56f5",
				"luo": "\u841d\u87ba\u7f57\u903b\u9523\u7ba9\u9aa1\u88f8\u843d\u6d1b\u9a86\u7edc\u502e\u8366\u645e\u7321\u6cfa\u6924\u8136\u9559\u7630\u96d2",
				"ma": "\u5988\u9ebb\u739b\u7801\u8682\u9a6c\u9a82\u561b\u5417\u551b\u72b8\u5b37\u6769\u9ebd",
				"mai": "\u57cb\u4e70\u9ea6\u5356\u8fc8\u8109\u52a2\u836c\u54aa\u973e",
				"man": "\u7792\u9992\u86ee\u6ee1\u8513\u66fc\u6162\u6f2b\u8c29\u5881\u5e54\u7f26\u71b3\u9558\u989f\u87a8\u9cd7\u9794",
				"mang": "\u8292\u832b\u76f2\u5fd9\u83bd\u9099\u6f2d\u6726\u786d\u87d2",
				"meng": "\u6c13\u840c\u8499\u6aac\u76df\u9530\u731b\u68a6\u5b5f\u52d0\u750d\u77a2\u61f5\u791e\u867b\u8722\u8813\u824b\u8268\u9efe",
				"miao": "\u732b\u82d7\u63cf\u7784\u85d0\u79d2\u6e3a\u5e99\u5999\u55b5\u9088\u7f08\u7f2a\u676a\u6dfc\u7707\u9e4b\u8731",
				"mao": "\u8305\u951a\u6bdb\u77db\u94c6\u536f\u8302\u5192\u5e3d\u8c8c\u8d38\u4f94\u88a4\u52d6\u8306\u5cc1\u7441\u6634\u7266\u8004\u65c4\u61cb\u7780\u86d1\u8765\u87ca\u9ae6",
				"me": "\u4e48",
				"mei": "\u73ab\u679a\u6885\u9176\u9709\u7164\u6ca1\u7709\u5a92\u9541\u6bcf\u7f8e\u6627\u5bd0\u59b9\u5a9a\u5776\u8393\u5d4b\u7338\u6d7c\u6e44\u6963\u9545\u9e5b\u8882\u9b45",
				"men": "\u95e8\u95f7\u4eec\u626a\u739f\u7116\u61d1\u9494",
				"mi": "\u772f\u919a\u9761\u7cdc\u8ff7\u8c1c\u5f25\u7c73\u79d8\u89c5\u6ccc\u871c\u5bc6\u5e42\u8288\u5196\u8c27\u863c\u5627\u7315\u736f\u6c68\u5b93\u5f2d\u8112\u6549\u7cf8\u7e3b\u9e8b",
				"mian": "\u68c9\u7720\u7ef5\u5195\u514d\u52c9\u5a29\u7f05\u9762\u6c94\u6e4e\u817c\u7704",
				"mie": "\u8511\u706d\u54a9\u881b\u7bfe",
				"min": "\u6c11\u62bf\u76bf\u654f\u60af\u95fd\u82e0\u5cb7\u95f5\u6cef\u73c9",
				"ming": "\u660e\u879f\u9e23\u94ed\u540d\u547d\u51a5\u8317\u6e9f\u669d\u7791\u9169",
				"miu": "\u8c2c",
				"mo": "\u6478\u6479\u8611\u6a21\u819c\u78e8\u6469\u9b54\u62b9\u672b\u83ab\u58a8\u9ed8\u6cab\u6f20\u5bde\u964c\u8c1f\u8309\u84e6\u998d\u5aeb\u9546\u79e3\u763c\u8031\u87c6\u8c8a\u8c98",
				"mou": "\u8c0b\u725f\u67d0\u53b6\u54de\u5a7a\u7738\u936a",
				"mu": "\u62c7\u7261\u4ea9\u59c6\u6bcd\u5893\u66ae\u5e55\u52df\u6155\u6728\u76ee\u7766\u7267\u7a46\u4eeb\u82dc\u5452\u6c90\u6bea\u94bc",
				"na": "\u62ff\u54ea\u5450\u94a0\u90a3\u5a1c\u7eb3\u5185\u637a\u80ad\u954e\u8872\u7bac",
				"nai": "\u6c16\u4e43\u5976\u8010\u5948\u9f10\u827f\u8418\u67f0",
				"nan": "\u5357\u7537\u96be\u56ca\u5583\u56e1\u6960\u8169\u877b\u8d67",
				"nao": "\u6320\u8111\u607c\u95f9\u5b6c\u57b4\u7331\u7459\u7847\u94d9\u86f2",
				"ne": "\u6dd6\u5462\u8bb7",
				"nei": "\u9981",
				"nen": "\u5ae9\u80fd\u6798\u6041",
				"ni": "\u59ae\u9713\u502a\u6ce5\u5c3c\u62df\u4f60\u533f\u817b\u9006\u6eba\u4f32\u576d\u730a\u6029\u6ee0\u6635\u65ce\u7962\u615d\u7768\u94cc\u9cb5",
				"nian": "\u852b\u62c8\u5e74\u78be\u64b5\u637b\u5ff5\u5eff\u8f87\u9ecf\u9c87\u9cb6",
				"niang": "\u5a18\u917f",
				"niao": "\u9e1f\u5c3f\u8311\u5b32\u8132\u8885",
				"nie": "\u634f\u8042\u5b7d\u556e\u954a\u954d\u6d85\u4e5c\u9667\u8616\u55eb\u8080\u989e\u81ec\u8e51",
				"nin": "\u60a8\u67e0",
				"ning": "\u72de\u51dd\u5b81\u62e7\u6cde\u4f5e\u84e5\u549b\u752f\u804d",
				"niu": "\u725b\u626d\u94ae\u7ebd\u72c3\u5ff8\u599e\u86b4",
				"nong": "\u8113\u6d53\u519c\u4fac",
				"nu": "\u5974\u52aa\u6012\u5476\u5e11\u5f29\u80ec\u5b65\u9a7d",
				"nv": "\u5973\u6067\u9495\u8844",
				"nuan": "\u6696",
				"nuenue": "\u8650",
				"nue": "\u759f\u8c11",
				"nuo": "\u632a\u61e6\u7cef\u8bfa\u50a9\u6426\u558f\u9518",
				"ou": "\u54e6\u6b27\u9e25\u6bb4\u85d5\u5455\u5076\u6ca4\u6004\u74ef\u8026",
				"pa": "\u556a\u8db4\u722c\u5e15\u6015\u7436\u8469\u7b62",
				"pai": "\u62cd\u6392\u724c\u5f98\u6e43\u6d3e\u4ff3\u848e",
				"pan": "\u6500\u6f58\u76d8\u78d0\u76fc\u7554\u5224\u53db\u723f\u6cee\u88a2\u897b\u87e0\u8e52",
				"pang": "\u4e53\u5e9e\u65c1\u802a\u80d6\u6ec2\u9004",
				"pao": "\u629b\u5486\u5228\u70ae\u888d\u8dd1\u6ce1\u530f\u72cd\u5e96\u812c\u75b1",
				"pei": "\u5478\u80da\u57f9\u88f4\u8d54\u966a\u914d\u4f69\u6c9b\u638a\u8f94\u5e14\u6de0\u65c6\u952b\u9185\u9708",
				"pen": "\u55b7\u76c6\u6e53",
				"peng": "\u7830\u62a8\u70f9\u6f8e\u5f6d\u84ec\u68da\u787c\u7bf7\u81a8\u670b\u9e4f\u6367\u78b0\u576f\u580b\u562d\u6026\u87db",
				"pi": "\u7812\u9739\u6279\u62ab\u5288\u7435\u6bd7\u5564\u813e\u75b2\u76ae\u5339\u75de\u50fb\u5c41\u8b6c\u4e15\u9674\u90b3\u90eb\u572e\u9f19\u64d7\u567c\u5e80\u5ab2\u7eb0\u6787\u7513\u7765\u7f74\u94cd\u75e6\u7656\u758b\u868d\u8c94",
				"pian": "\u7bc7\u504f\u7247\u9a97\u8c1d\u9a88\u728f\u80fc\u890a\u7fe9\u8e41",
				"piao": "\u98d8\u6f02\u74e2\u7968\u527d\u560c\u5ad6\u7f25\u6b8d\u779f\u87b5",
				"pie": "\u6487\u77a5\u4e3f\u82e4\u6c15",
				"pin": "\u62fc\u9891\u8d2b\u54c1\u8058\u62da\u59d8\u5ad4\u6980\u725d\u98a6",
				"ping": "\u4e52\u576a\u82f9\u840d\u5e73\u51ed\u74f6\u8bc4\u5c4f\u4fdc\u5a09\u67b0\u9c86",
				"po": "\u5761\u6cfc\u9887\u5a46\u7834\u9b44\u8feb\u7c95\u53f5\u9131\u6ea5\u73c0\u948b\u94b7\u76a4\u7b38",
				"pou": "\u5256\u88d2\u8e23",
				"pu": "\u6251\u94fa\u4ec6\u8386\u8461\u83e9\u84b2\u57d4\u6734\u5703\u666e\u6d66\u8c31\u66dd\u7011\u530d\u5657\u6fee\u749e\u6c06\u9564\u9568\u8e7c",
				"qi": "\u671f\u6b3a\u6816\u621a\u59bb\u4e03\u51c4\u6f06\u67d2\u6c8f\u5176\u68cb\u5947\u6b67\u7566\u5d0e\u8110\u9f50\u65d7\u7948\u7941\u9a91\u8d77\u5c82\u4e5e\u4f01\u542f\u5951\u780c\u5668\u6c14\u8fc4\u5f03\u6c7d\u6ce3\u8bab\u4e9f\u4e93\u573b\u8291\u840b\u847a\u5601\u5c7a\u5c90\u6c54\u6dc7\u9a90\u7eee\u742a\u7426\u675e\u6864\u69ed\u6b39\u797a\u61a9\u789b\u86f4\u871e\u7da6\u7dae\u8dbf\u8e4a\u9ccd\u9e92",
				"qia": "\u6390\u6070\u6d3d\u845c",
				"qian": "\u7275\u6266\u948e\u94c5\u5343\u8fc1\u7b7e\u4edf\u8c26\u4e7e\u9ed4\u94b1\u94b3\u524d\u6f5c\u9063\u6d45\u8c34\u5811\u5d4c\u6b20\u6b49\u4f65\u9621\u828a\u82a1\u8368\u63ae\u5c8d\u60ad\u614a\u9a9e\u6434\u8930\u7f31\u6920\u80b7\u6106\u94a4\u8654\u7b9d",
				"qiang": "\u67aa\u545b\u8154\u7f8c\u5899\u8537\u5f3a\u62a2\u5af1\u6a2f\u6217\u709d\u9516\u9535\u956a\u8941\u8723\u7f9f\u8deb\u8dc4",
				"qiao": "\u6a47\u9539\u6572\u6084\u6865\u77a7\u4e54\u4fa8\u5de7\u9798\u64ac\u7fd8\u5ced\u4fcf\u7a8d\u5281\u8bee\u8c2f\u835e\u6100\u6194\u7f32\u6a35\u6bf3\u7857\u8df7\u9792",
				"qie": "\u5207\u8304\u4e14\u602f\u7a83\u90c4\u553c\u60ec\u59be\u6308\u9532\u7ba7",
				"qin": "\u94a6\u4fb5\u4eb2\u79e6\u7434\u52e4\u82b9\u64d2\u79bd\u5bdd\u6c81\u82a9\u84c1\u8572\u63ff\u5423\u55ea\u5659\u6eb1\u6a8e\u8793\u887e",
				"qing": "\u9752\u8f7b\u6c22\u503e\u537f\u6e05\u64ce\u6674\u6c30\u60c5\u9877\u8bf7\u5e86\u5029\u82d8\u570a\u6aa0\u78ec\u873b\u7f44\u7b90\u8b26\u9cad\u9ee5",
				"qiong": "\u743c\u7a77\u909b\u8315\u7a79\u7b47\u928e",
				"qiu": "\u79cb\u4e18\u90b1\u7403\u6c42\u56da\u914b\u6cc5\u4fc5\u6c3d\u5def\u827d\u72b0\u6e6b\u9011\u9052\u6978\u8d47\u9e20\u866c\u86af\u8764\u88d8\u7cd7\u9cc5\u9f3d",
				"qu": "\u8d8b\u533a\u86c6\u66f2\u8eaf\u5c48\u9a71\u6e20\u53d6\u5a36\u9f8b\u8da3\u53bb\u8bce\u52ac\u8556\u8627\u5c96\u8862\u9612\u74a9\u89d1\u6c0d\u795b\u78f2\u766f\u86d0\u883c\u9eb4\u77bf\u9ee2",
				"quan": "\u5708\u98a7\u6743\u919b\u6cc9\u5168\u75ca\u62f3\u72ac\u5238\u529d\u8be0\u8343\u737e\u609b\u7efb\u8f81\u754e\u94e8\u8737\u7b4c\u9b08",
				"que": "\u7f3a\u7094\u7638\u5374\u9e4a\u69b7\u786e\u96c0\u9619\u60ab",
				"qun": "\u88d9\u7fa4\u9021",
				"ran": "\u7136\u71c3\u5189\u67d3\u82d2\u9aef",
				"rang": "\u74e4\u58e4\u6518\u56b7\u8ba9\u79b3\u7a70",
				"rao": "\u9976\u6270\u7ed5\u835b\u5a06\u6861",
				"ruo": "\u60f9\u82e5\u5f31",
				"re": "\u70ed\u504c",
				"ren": "\u58ec\u4ec1\u4eba\u5fcd\u97e7\u4efb\u8ba4\u5203\u598a\u7eab\u4ede\u834f\u845a\u996a\u8f6b\u7a14\u887d",
				"reng": "\u6254\u4ecd",
				"ri": "\u65e5",
				"rong": "\u620e\u8338\u84c9\u8363\u878d\u7194\u6eb6\u5bb9\u7ed2\u5197\u5d58\u72e8\u7f1b\u6995\u877e",
				"rou": "\u63c9\u67d4\u8089\u7cc5\u8e42\u97a3",
				"ru": "\u8339\u8815\u5112\u5b7a\u5982\u8fb1\u4e73\u6c5d\u5165\u8925\u84d0\u85b7\u5685\u6d33\u6ebd\u6fe1\u94f7\u8966\u98a5",
				"ruan": "\u8f6f\u962e\u670a",
				"rui": "\u854a\u745e\u9510\u82ae\u8564\u777f\u868b",
				"run": "\u95f0\u6da6",
				"sa": "\u6492\u6d12\u8428\u5345\u4ee8\u6332\u98d2",
				"sai": "\u816e\u9cc3\u585e\u8d5b\u567b",
				"san": "\u4e09\u53c1\u4f1e\u6563\u5f61\u9993\u6c35\u6bf5\u7cc1\u9730",
				"sang": "\u6851\u55d3\u4e27\u6421\u78c9\u98a1",
				"sao": "\u6414\u9a9a\u626b\u5ac2\u57fd\u81ca\u7619\u9ccb",
				"se": "\u745f\u8272\u6da9\u556c\u94e9\u94ef\u7a51",
				"sen": "\u68ee",
				"seng": "\u50e7",
				"sha": "\u838e\u7802\u6740\u5239\u6c99\u7eb1\u50bb\u5565\u715e\u810e\u6b43\u75e7\u88df\u970e\u9ca8",
				"shai": "\u7b5b\u6652\u917e",
				"shan": "\u73ca\u82eb\u6749\u5c71\u5220\u717d\u886b\u95ea\u9655\u64c5\u8d61\u81b3\u5584\u6c55\u6247\u7f2e\u5261\u8baa\u912f\u57cf\u829f\u6f78\u59d7\u9a9f\u81bb\u9490\u759d\u87ee\u8222\u8dda\u9cdd",
				"shang": "\u5892\u4f24\u5546\u8d4f\u664c\u4e0a\u5c1a\u88f3\u57a7\u7ef1\u6b87\u71b5\u89de",
				"shao": "\u68a2\u634e\u7a0d\u70e7\u828d\u52fa\u97f6\u5c11\u54e8\u90b5\u7ecd\u52ad\u82d5\u6f72\u86f8\u7b24\u7b72\u8244",
				"she": "\u5962\u8d4a\u86c7\u820c\u820d\u8d66\u6444\u5c04\u6151\u6d89\u793e\u8bbe\u538d\u4f58\u731e\u7572\u9e9d",
				"shen": "\u7837\u7533\u547b\u4f38\u8eab\u6df1\u5a20\u7ec5\u795e\u6c88\u5ba1\u5a76\u751a\u80be\u614e\u6e17\u8bdc\u8c02\u5432\u54c2\u6e16\u6939\u77e7\u8703",
				"sheng": "\u58f0\u751f\u7525\u7272\u5347\u7ef3\u7701\u76db\u5269\u80dc\u5723\u4e1e\u6e11\u5ab5\u771a\u7b19",
				"shi": "\u5e08\u5931\u72ee\u65bd\u6e7f\u8bd7\u5c38\u8671\u5341\u77f3\u62fe\u65f6\u4ec0\u98df\u8680\u5b9e\u8bc6\u53f2\u77e2\u4f7f\u5c4e\u9a76\u59cb\u5f0f\u793a\u58eb\u4e16\u67ff\u4e8b\u62ed\u8a93\u901d\u52bf\u662f\u55dc\u566c\u9002\u4ed5\u4f8d\u91ca\u9970\u6c0f\u5e02\u6043\u5ba4\u89c6\u8bd5\u8c25\u57d8\u83b3\u84cd\u5f11\u5511\u9963\u8f7c\u8006\u8d33\u70bb\u793b\u94c8\u94ca\u87ab\u8210\u7b6e\u8c55\u9ca5\u9cba",
				"shou": "\u6536\u624b\u9996\u5b88\u5bff\u6388\u552e\u53d7\u7626\u517d\u624c\u72e9\u7ef6\u824f",
				"shu": "\u852c\u67a2\u68b3\u6b8a\u6292\u8f93\u53d4\u8212\u6dd1\u758f\u4e66\u8d4e\u5b70\u719f\u85af\u6691\u66d9\u7f72\u8700\u9ecd\u9f20\u5c5e\u672f\u8ff0\u6811\u675f\u620d\u7ad6\u5885\u5eb6\u6570\u6f31\u6055\u500f\u587e\u83fd\u5fc4\u6cad\u6d91\u6f8d\u59dd\u7ebe\u6bf9\u8167\u6bb3\u956f\u79eb\u9e6c",
				"shua": "\u5237\u800d\u5530\u6dae",
				"shuai": "\u6454\u8870\u7529\u5e05\u87c0",
				"shuan": "\u6813\u62f4\u95e9",
				"shuang": "\u971c\u53cc\u723d\u5b40",
				"shui": "\u8c01\u6c34\u7761\u7a0e",
				"shun": "\u542e\u77ac\u987a\u821c\u6042",
				"shuo": "\u8bf4\u7855\u6714\u70c1\u84b4\u6420\u55cd\u6fef\u5981\u69ca\u94c4",
				"si": "\u65af\u6495\u5636\u601d\u79c1\u53f8\u4e1d\u6b7b\u8086\u5bfa\u55e3\u56db\u4f3a\u4f3c\u9972\u5df3\u53ae\u4fdf\u5155\u83e5\u549d\u6c5c\u6cd7\u6f8c\u59d2\u9a77\u7f0c\u7940\u7960\u9536\u9e36\u801c\u86f3\u7b25",
				"song": "\u677e\u8038\u6002\u9882\u9001\u5b8b\u8bbc\u8bf5\u51c7\u83d8\u5d27\u5d69\u5fea\u609a\u6dde\u7ae6",
				"sou": "\u641c\u8258\u64de\u55fd\u53df\u55d6\u55fe\u998a\u6eb2\u98d5\u778d\u953c\u878b",
				"su": "\u82cf\u9165\u4fd7\u7d20\u901f\u7c9f\u50f3\u5851\u6eaf\u5bbf\u8bc9\u8083\u5919\u8c21\u850c\u55c9\u612b\u7c0c\u89eb\u7a23",
				"suan": "\u9178\u849c\u7b97",
				"sui": "\u867d\u968b\u968f\u7ee5\u9ad3\u788e\u5c81\u7a57\u9042\u96a7\u795f\u84d1\u51ab\u8c07\u6fc9\u9083\u71e7\u772d\u7762",
				"sun": "\u5b59\u635f\u7b0b\u836a\u72f2\u98e7\u69ab\u8de3\u96bc",
				"suo": "\u68ad\u5506\u7f29\u7410\u7d22\u9501\u6240\u5522\u55e6\u5a11\u686b\u7743\u7fa7",
				"ta": "\u584c\u4ed6\u5b83\u5979\u5854\u736d\u631e\u8e4b\u8e0f\u95fc\u6ebb\u9062\u69bb\u6c93",
				"tai": "\u80ce\u82d4\u62ac\u53f0\u6cf0\u915e\u592a\u6001\u6c70\u90b0\u85b9\u80bd\u70b1\u949b\u8dc6\u9c90",
				"tan": "\u574d\u644a\u8d2a\u762b\u6ee9\u575b\u6a80\u75f0\u6f6d\u8c2d\u8c08\u5766\u6bef\u8892\u78b3\u63a2\u53f9\u70ad\u90ef\u8548\u6619\u94bd\u952c\u8983",
				"tang": "\u6c64\u5858\u642a\u5802\u68e0\u819b\u5510\u7cd6\u50a5\u9967\u6e8f\u746d\u94f4\u9557\u8025\u8797\u87b3\u7fb0\u91a3",
				"thang": "\u5018\u8eba\u6dcc",
				"theng": "\u8d9f\u70eb",
				"tao": "\u638f\u6d9b\u6ed4\u7ee6\u8404\u6843\u9003\u6dd8\u9676\u8ba8\u5957\u6311\u9f17\u5555\u97ec\u9955",
				"te": "\u7279",
				"teng": "\u85e4\u817e\u75bc\u8a8a\u6ed5",
				"ti": "\u68af\u5254\u8e22\u9511\u63d0\u9898\u8e44\u557c\u4f53\u66ff\u568f\u60d5\u6d95\u5243\u5c49\u8351\u608c\u9016\u7ee8\u7f07\u9e48\u88fc\u918d",
				"tian": "\u5929\u6dfb\u586b\u7530\u751c\u606c\u8214\u8146\u63ad\u5fdd\u9617\u6b84\u754b\u94bf\u86ba",
				"tiao": "\u6761\u8fe2\u773a\u8df3\u4f7b\u7967\u94eb\u7a95\u9f86\u9ca6",
				"tie": "\u8d34\u94c1\u5e16\u841c\u992e",
				"ting": "\u5385\u542c\u70c3\u6c40\u5ef7\u505c\u4ead\u5ead\u633a\u8247\u839b\u8476\u5a77\u6883\u8713\u9706",
				"tong": "\u901a\u6850\u916e\u77b3\u540c\u94dc\u5f64\u7ae5\u6876\u6345\u7b52\u7edf\u75db\u4f5f\u50ee\u4edd\u833c\u55f5\u6078\u6f7c\u783c",
				"tou": "\u5077\u6295\u5934\u900f\u4ea0",
				"tu": "\u51f8\u79c3\u7a81\u56fe\u5f92\u9014\u6d82\u5c60\u571f\u5410\u5154\u580d\u837c\u83df\u948d\u9174",
				"tuan": "\u6e4d\u56e2\u7583",
				"tui": "\u63a8\u9893\u817f\u8715\u892a\u9000\u5fd2\u717a",
				"tun": "\u541e\u5c6f\u81c0\u9968\u66be\u8c5a\u7a80",
				"tuo": "\u62d6\u6258\u8131\u9e35\u9640\u9a6e\u9a7c\u692d\u59a5\u62d3\u553e\u4e47\u4f57\u5768\u5eb9\u6cb1\u67dd\u7823\u7ba8\u8204\u8dce\u9f0d",
				"wa": "\u6316\u54c7\u86d9\u6d3c\u5a03\u74e6\u889c\u4f64\u5a32\u817d",
				"wai": "\u6b6a\u5916",
				"wan": "\u8c4c\u5f2f\u6e7e\u73a9\u987d\u4e38\u70f7\u5b8c\u7897\u633d\u665a\u7696\u60cb\u5b9b\u5a49\u4e07\u8155\u525c\u8284\u82cb\u83c0\u7ea8\u7efe\u742c\u8118\u7579\u873f\u7ba2",
				"wang": "\u6c6a\u738b\u4ea1\u6789\u7f51\u5f80\u65fa\u671b\u5fd8\u5984\u7f54\u5c22\u60d8\u8f8b\u9b4d",
				"wei": "\u5a01\u5dcd\u5fae\u5371\u97e6\u8fdd\u6845\u56f4\u552f\u60df\u4e3a\u6f4d\u7ef4\u82c7\u840e\u59d4\u4f1f\u4f2a\u5c3e\u7eac\u672a\u851a\u5473\u754f\u80c3\u5582\u9b4f\u4f4d\u6e2d\u8c13\u5c09\u6170\u536b\u502d\u504e\u8bff\u9688\u8473\u8587\u5e0f\u5e37\u5d34\u5d6c\u7325\u732c\u95f1\u6ca9\u6d27\u6da0\u9036\u5a13\u73ae\u97ea\u8ece\u709c\u7168\u71a8\u75ff\u8249\u9c94",
				"wen": "\u761f\u6e29\u868a\u6587\u95fb\u7eb9\u543b\u7a33\u7d0a\u95ee\u520e\u6120\u960c\u6c76\u74ba\u97eb\u6b81\u96ef",
				"weng": "\u55e1\u7fc1\u74ee\u84ca\u8579",
				"wo": "\u631d\u8717\u6da1\u7a9d\u6211\u65a1\u5367\u63e1\u6c83\u83b4\u5e44\u6e25\u674c\u809f\u9f8c",
				"wu": "\u5deb\u545c\u94a8\u4e4c\u6c61\u8bec\u5c4b\u65e0\u829c\u68a7\u543e\u5434\u6bcb\u6b66\u4e94\u6342\u5348\u821e\u4f0d\u4fae\u575e\u620a\u96fe\u6664\u7269\u52ff\u52a1\u609f\u8bef\u5140\u4ef5\u9622\u90ac\u572c\u82b4\u5e91\u6003\u5fe4\u6d6f\u5be4\u8fd5\u59a9\u9a9b\u727e\u7110\u9e49\u9e5c\u8708\u92c8\u9f2f",
				"xi": "\u6614\u7199\u6790\u897f\u7852\u77fd\u6670\u563b\u5438\u9521\u727a\u7a00\u606f\u5e0c\u6089\u819d\u5915\u60dc\u7184\u70ef\u6eaa\u6c50\u7280\u6a84\u88ad\u5e2d\u4e60\u5ab3\u559c\u94e3\u6d17\u7cfb\u9699\u620f\u7ec6\u50d6\u516e\u96b0\u90d7\u831c\u8478\u84f0\u595a\u550f\u5f99\u9969\u960b\u6d60\u6dc5\u5c63\u5b09\u73ba\u6a28\u66e6\u89cb\u6b37\u71b9\u798a\u79a7\u94b8\u7699\u7a78\u8725\u87cb\u823e\u7fb2\u7c9e\u7fd5\u91af\u9f37",
				"xia": "\u778e\u867e\u5323\u971e\u8f96\u6687\u5ce1\u4fa0\u72ed\u4e0b\u53a6\u590f\u5413\u6380\u846d\u55c4\u72ce\u9050\u7455\u7856\u7615\u7f45\u9ee0",
				"xian": "\u9528\u5148\u4ed9\u9c9c\u7ea4\u54b8\u8d24\u8854\u8237\u95f2\u6d8e\u5f26\u5acc\u663e\u9669\u73b0\u732e\u53bf\u817a\u9985\u7fa1\u5baa\u9677\u9650\u7ebf\u51bc\u85d3\u5c98\u7303\u66b9\u5a34\u6c19\u7946\u9e47\u75eb\u86ac\u7b45\u7c7c\u9170\u8df9",
				"xiang": "\u76f8\u53a2\u9576\u9999\u7bb1\u8944\u6e58\u4e61\u7fd4\u7965\u8be6\u60f3\u54cd\u4eab\u9879\u5df7\u6a61\u50cf\u5411\u8c61\u8297\u8459\u9977\u5ea0\u9aa7\u7f03\u87d3\u9c9e\u98e8",
				"xiao": "\u8427\u785d\u9704\u524a\u54ee\u56a3\u9500\u6d88\u5bb5\u6dc6\u6653\u5c0f\u5b5d\u6821\u8096\u5578\u7b11\u6548\u54d3\u54bb\u5d24\u6f47\u900d\u9a81\u7ee1\u67ad\u67b5\u7b71\u7bab\u9b48",
				"xie": "\u6954\u4e9b\u6b47\u874e\u978b\u534f\u631f\u643a\u90aa\u659c\u80c1\u8c10\u5199\u68b0\u5378\u87f9\u61c8\u6cc4\u6cfb\u8c22\u5c51\u5055\u4eb5\u52f0\u71ee\u85a4\u64b7\u5ee8\u7023\u9082\u7ec1\u7f2c\u69ad\u698d\u6b59\u8e9e",
				"xin": "\u85aa\u82af\u950c\u6b23\u8f9b\u65b0\u5ffb\u5fc3\u4fe1\u8845\u56df\u99a8\u8398\u6b46\u94fd\u946b",
				"xing": "\u661f\u8165\u7329\u60fa\u5174\u5211\u578b\u5f62\u90a2\u884c\u9192\u5e78\u674f\u6027\u59d3\u9649\u8347\u8365\u64e4\u60bb\u784e",
				"xiong": "\u5144\u51f6\u80f8\u5308\u6c79\u96c4\u718a\u828e",
				"xiu": "\u4f11\u4fee\u7f9e\u673d\u55c5\u9508\u79c0\u8896\u7ee3\u83a0\u5cab\u9990\u5ea5\u9e3a\u8c85\u9af9",
				"xu": "\u589f\u620c\u9700\u865a\u5618\u987b\u5f90\u8bb8\u84c4\u9157\u53d9\u65ed\u5e8f\u755c\u6064\u7d6e\u5a7f\u7eea\u7eed\u8bb4\u8be9\u5729\u84ff\u6035\u6d2b\u6e86\u987c\u6829\u7166\u7809\u76f1\u80e5\u7cc8\u9191",
				"xuan": "\u8f69\u55a7\u5ba3\u60ac\u65cb\u7384\u9009\u7663\u7729\u7eda\u5107\u8c16\u8431\u63ce\u9994\u6ceb\u6d35\u6e32\u6f29\u7487\u6966\u6684\u70ab\u714a\u78b9\u94c9\u955f\u75c3",
				"xue": "\u9774\u859b\u5b66\u7a74\u96ea\u8840\u5671\u6cf6\u9cd5",
				"xun": "\u52cb\u718f\u5faa\u65ec\u8be2\u5bfb\u9a6f\u5de1\u6b89\u6c5b\u8bad\u8baf\u900a\u8fc5\u5dfd\u57d9\u8340\u85b0\u5ccb\u5f87\u6d54\u66db\u7aa8\u91ba\u9c9f",
				"ya": "\u538b\u62bc\u9e26\u9e2d\u5440\u4e2b\u82bd\u7259\u869c\u5d16\u8859\u6daf\u96c5\u54d1\u4e9a\u8bb6\u4f22\u63e0\u5416\u5c88\u8fd3\u5a05\u740a\u6860\u6c29\u7811\u775a\u75d6",
				"yan": "\u7109\u54bd\u9609\u70df\u6df9\u76d0\u4e25\u7814\u8712\u5ca9\u5ef6\u8a00\u989c\u960e\u708e\u6cbf\u5944\u63a9\u773c\u884d\u6f14\u8273\u5830\u71d5\u538c\u781a\u96c1\u5501\u5f66\u7130\u5bb4\u8c1a\u9a8c\u53a3\u9765\u8d5d\u4fe8\u5043\u5156\u8ba0\u8c33\u90fe\u9122\u82ab\u83f8\u5d26\u6079\u95eb\u960f\u6d07\u6e6e\u6edf\u598d\u5ae3\u7430\u664f\u80ed\u814c\u7131\u7f68\u7b75\u917d\u9b47\u990d\u9f39",
				"yang": "\u6b83\u592e\u9e2f\u79e7\u6768\u626c\u4f6f\u75a1\u7f8a\u6d0b\u9633\u6c27\u4ef0\u75d2\u517b\u6837\u6f3e\u5f89\u600f\u6cf1\u7080\u70ca\u6059\u86d8\u9785",
				"yao": "\u9080\u8170\u5996\u7476\u6447\u5c27\u9065\u7a91\u8c23\u59da\u54ac\u8200\u836f\u8981\u8000\u592d\u723b\u5406\u5d3e\u5fad\u7039\u5e7a\u73e7\u6773\u66dc\u80b4\u9e5e\u7a88\u7e47\u9cd0",
				"ye": "\u6930\u564e\u8036\u7237\u91ce\u51b6\u4e5f\u9875\u6396\u4e1a\u53f6\u66f3\u814b\u591c\u6db2\u8c12\u90ba\u63f6\u9980\u6654\u70e8\u94d8",
				"yi": "\u4e00\u58f9\u533b\u63d6\u94f1\u4f9d\u4f0a\u8863\u9890\u5937\u9057\u79fb\u4eea\u80f0\u7591\u6c82\u5b9c\u59e8\u5f5d\u6905\u8681\u501a\u5df2\u4e59\u77e3\u4ee5\u827a\u6291\u6613\u9091\u5c79\u4ebf\u5f79\u81c6\u9038\u8084\u75ab\u4ea6\u88d4\u610f\u6bc5\u5fc6\u4e49\u76ca\u6ea2\u8be3\u8bae\u8c0a\u8bd1\u5f02\u7ffc\u7fcc\u7ece\u5208\u5293\u4f7e\u8bd2\u572a\u572f\u57f8\u61ff\u82e1\u858f\u5f08\u5955\u6339\u5f0b\u5453\u54a6\u54bf\u566b\u5cc4\u5db7\u7317\u9974\u603f\u6021\u6092\u6f2a\u8fe4\u9a7f\u7f22\u6baa\u8d3b\u65d6\u71a0\u9487\u9552\u9571\u75cd\u7617\u7654\u7fca\u8864\u8734\u8223\u7fbf\u7ff3\u914f\u9edf",
				"yin": "\u8335\u836b\u56e0\u6bb7\u97f3\u9634\u59fb\u541f\u94f6\u6deb\u5bc5\u996e\u5c39\u5f15\u9690\u5370\u80e4\u911e\u5819\u831a\u5591\u72fa\u5924\u6c24\u94df\u763e\u8693\u972a\u9f88",
				"ying": "\u82f1\u6a31\u5a74\u9e70\u5e94\u7f28\u83b9\u8424\u8425\u8367\u8747\u8fce\u8d62\u76c8\u5f71\u9896\u786c\u6620\u5b34\u90e2\u8314\u83ba\u8426\u6484\u5624\u81ba\u6ee2\u6f46\u701b\u745b\u748e\u6979\u9e66\u763f\u988d\u7f42",
				"yo": "\u54df\u5537",
				"yong": "\u62e5\u4f63\u81c3\u75c8\u5eb8\u96cd\u8e0a\u86f9\u548f\u6cf3\u6d8c\u6c38\u607f\u52c7\u7528\u4fd1\u58c5\u5889\u6175\u9095\u955b\u752c\u9cd9\u9954",
				"you": "\u5e7d\u4f18\u60a0\u5fe7\u5c24\u7531\u90ae\u94c0\u72b9\u6cb9\u6e38\u9149\u6709\u53cb\u53f3\u4f51\u91c9\u8bf1\u53c8\u5e7c\u5363\u6538\u4f91\u83b8\u5466\u56ff\u5ba5\u67da\u7337\u7256\u94d5\u75a3\u8763\u9c7f\u9edd\u9f2c",
				"yu": "\u8fc2\u6de4\u4e8e\u76c2\u6986\u865e\u611a\u8206\u4f59\u4fde\u903e\u9c7c\u6109\u6e1d\u6e14\u9685\u4e88\u5a31\u96e8\u4e0e\u5c7f\u79b9\u5b87\u8bed\u7fbd\u7389\u57df\u828b\u90c1\u5401\u9047\u55bb\u5cea\u5fa1\u6108\u6b32\u72f1\u80b2\u8a89\u6d74\u5bd3\u88d5\u9884\u8c6b\u9a6d\u79ba\u6bd3\u4f1b\u4fe3\u8c00\u8c15\u8438\u84e3\u63c4\u5581\u5704\u5709\u5d5b\u72f3\u996b\u5ebe\u9608\u59aa\u59a4\u7ea1\u745c\u6631\u89ce\u8174\u6b24\u65bc\u715c\u71e0\u807f\u94b0\u9e46\u7610\u7600\u7ab3\u8753\u7afd\u8201\u96e9\u9f89",
				"yuan": "\u9e33\u6e0a\u51a4\u5143\u57a3\u8881\u539f\u63f4\u8f95\u56ed\u5458\u5706\u733f\u6e90\u7f18\u8fdc\u82d1\u613f\u6028\u9662\u586c\u6c85\u5a9b\u7457\u6a7c\u7230\u7722\u9e22\u8788\u9f0b",
				"yue": "\u66f0\u7ea6\u8d8a\u8dc3\u94a5\u5cb3\u7ca4\u6708\u60a6\u9605\u9fa0\u6a3e\u5216\u94ba",
				"yun": "\u8018\u4e91\u90e7\u5300\u9668\u5141\u8fd0\u8574\u915d\u6655\u97f5\u5b55\u90d3\u82b8\u72c1\u607d\u7ead\u6b92\u6600\u6c32",
				"za": "\u531d\u7838\u6742\u62f6\u5482",
				"zai": "\u683d\u54c9\u707e\u5bb0\u8f7d\u518d\u5728\u54b1\u5d3d\u753e",
				"zan": "\u6512\u6682\u8d5e\u74d2\u661d\u7c2a\u7ccc\u8db1\u933e",
				"zang": "\u8d43\u810f\u846c\u5958\u6215\u81e7",
				"zao": "\u906d\u7cdf\u51ff\u85fb\u67a3\u65e9\u6fa1\u86a4\u8e81\u566a\u9020\u7682\u7076\u71e5\u5523\u7f2b",
				"ze": "\u8d23\u62e9\u5219\u6cfd\u4ec4\u8d5c\u5567\u8fee\u6603\u7b2e\u7ba6\u8234",
				"zei": "\u8d3c",
				"zen": "\u600e\u8c2e",
				"zeng": "\u589e\u618e\u66fe\u8d60\u7f2f\u7511\u7f7e\u9503",
				"zha": "\u624e\u55b3\u6e23\u672d\u8f67\u94e1\u95f8\u7728\u6805\u69a8\u548b\u4e4d\u70b8\u8bc8\u63f8\u5412\u54a4\u54f3\u600d\u781f\u75c4\u86b1\u9f44",
				"zhai": "\u6458\u658b\u5b85\u7a84\u503a\u5be8\u7826",
				"zhan": "\u77bb\u6be1\u8a79\u7c98\u6cbe\u76cf\u65a9\u8f97\u5d2d\u5c55\u8638\u6808\u5360\u6218\u7ad9\u6e5b\u7efd\u8c35\u640c\u65c3",
				"zhang": "\u6a1f\u7ae0\u5f70\u6f33\u5f20\u638c\u6da8\u6756\u4e08\u5e10\u8d26\u4ed7\u80c0\u7634\u969c\u4ec9\u9123\u5e5b\u5d82\u7350\u5adc\u748b\u87d1",
				"zhao": "\u62db\u662d\u627e\u6cbc\u8d75\u7167\u7f69\u5146\u8087\u53ec\u722a\u8bcf\u68f9\u948a\u7b0a",
				"zhe": "\u906e\u6298\u54f2\u86f0\u8f99\u8005\u9517\u8517\u8fd9\u6d59\u8c2a\u966c\u67d8\u8f84\u78d4\u9e67\u891a\u8707\u8d6d",
				"zhen": "\u73cd\u659f\u771f\u7504\u7827\u81fb\u8d1e\u9488\u4fa6\u6795\u75b9\u8bca\u9707\u632f\u9547\u9635\u7f1c\u6862\u699b\u8f78\u8d48\u80d7\u6715\u796f\u755b\u9e29",
				"zheng": "\u84b8\u6323\u7741\u5f81\u72f0\u4e89\u6014\u6574\u62ef\u6b63\u653f\u5e27\u75c7\u90d1\u8bc1\u8be4\u5ce5\u94b2\u94ee\u7b5d",
				"zhi": "\u829d\u679d\u652f\u5431\u8718\u77e5\u80a2\u8102\u6c41\u4e4b\u7ec7\u804c\u76f4\u690d\u6b96\u6267\u503c\u4f84\u5740\u6307\u6b62\u8dbe\u53ea\u65e8\u7eb8\u5fd7\u631a\u63b7\u81f3\u81f4\u7f6e\u5e1c\u5cd9\u5236\u667a\u79e9\u7a1a\u8d28\u7099\u75d4\u6ede\u6cbb\u7a92\u536e\u965f\u90c5\u57f4\u82b7\u646d\u5e19\u5fee\u5f58\u54ab\u9a98\u6809\u67b3\u6800\u684e\u8f75\u8f7e\u6534\u8d3d\u81a3\u7949\u7957\u9ef9\u96c9\u9e37\u75e3\u86ed\u7d77\u916f\u8dd6\u8e2c\u8e2f\u8c78\u89ef",
				"zhong": "\u4e2d\u76c5\u5fe0\u949f\u8877\u7ec8\u79cd\u80bf\u91cd\u4ef2\u4f17\u51a2\u953a\u87bd\u8202\u822f\u8e35",
				"zhou": "\u821f\u5468\u5dde\u6d32\u8bcc\u7ca5\u8f74\u8098\u5e1a\u5492\u76b1\u5b99\u663c\u9aa4\u5544\u7740\u501c\u8bf9\u836e\u9b3b\u7ea3\u80c4\u78a1\u7c40\u8233\u914e\u9cb7",
				"zhu": "\u73e0\u682a\u86db\u6731\u732a\u8bf8\u8bdb\u9010\u7af9\u70db\u716e\u62c4\u77a9\u5631\u4e3b\u8457\u67f1\u52a9\u86c0\u8d2e\u94f8\u7b51\u4f4f\u6ce8\u795d\u9a7b\u4f2b\u4f8f\u90be\u82ce\u8331\u6d19\u6e1a\u6f74\u9a7a\u677c\u69e0\u6a65\u70b7\u94e2\u75b0\u7603\u86b0\u7afa\u7bb8\u7fe5\u8e85\u9e88",
				"zhua": "\u6293",
				"zhuai": "\u62fd",
				"zhuan": "\u4e13\u7816\u8f6c\u64b0\u8d5a\u7bc6\u629f\u556d\u989b",
				"zhuang": "\u6869\u5e84\u88c5\u5986\u649e\u58ee\u72b6\u4e2c",
				"zhui": "\u690e\u9525\u8ffd\u8d58\u5760\u7f00\u8411\u9a93\u7f12",
				"zhun": "\u8c06\u51c6",
				"zhuo": "\u6349\u62d9\u5353\u684c\u7422\u8301\u914c\u707c\u6d4a\u502c\u8bfc\u5ef4\u855e\u64e2\u555c\u6d5e\u6dbf\u6753\u712f\u799a\u65ab",
				"zi": "\u5179\u54a8\u8d44\u59ff\u6ecb\u6dc4\u5b5c\u7d2b\u4ed4\u7c7d\u6ed3\u5b50\u81ea\u6e0d\u5b57\u8c18\u5d6b\u59ca\u5b73\u7f01\u6893\u8f8e\u8d40\u6063\u7726\u9531\u79ed\u8014\u7b2b\u7ca2\u89dc\u8a3e\u9cbb\u9aed",
				"zong": "\u9b03\u68d5\u8e2a\u5b97\u7efc\u603b\u7eb5\u8159\u7cbd",
				"zou": "\u90b9\u8d70\u594f\u63cd\u9139\u9cb0",
				"zu": "\u79df\u8db3\u5352\u65cf\u7956\u8bc5\u963b\u7ec4\u4fce\u83f9\u5550\u5f82\u9a75\u8e74",
				"zuan": "\u94bb\u7e82\u6525\u7f35",
				"zui": "\u5634\u9189\u6700\u7f6a",
				"zun": "\u5c0a\u9075\u6499\u6a3d\u9cdf",
				"zuo": "\u6628\u5de6\u4f50\u67de\u505a\u4f5c\u5750\u5ea7\u961d\u963c\u80d9\u795a\u9162",
				"cou": "\u85ae\u6971\u8f8f\u8160",
				"nang": "\u652e\u54dd\u56d4\u9995\u66e9",
				"o": "\u5594",
				"dia": "\u55f2",
				"chuai": "\u562c\u81aa\u8e39",
				"cen": "\u5c91\u6d94",
				"diu": "\u94e5",
				"nou": "\u8028",
				"fou": "\u7f36",
				"bia": "\u9adf"
			};
			this.polyphone = {
				"19969": "DZ",
				"19975": "WM",
				"19988": "QJ",
				"20048": "YL",
				"20056": "SC",
				"20060": "NM",
				"20094": "QG",
				"20127": "QJ",
				"20167": "QC",
				"20193": "YG",
				"20250": "KH",
				"20256": "ZC",
				"20282": "SC",
				"20285": "QJG",
				"20291": "TD",
				"20314": "YD",
				"20340": "NE",
				"20375": "TD",
				"20389": "YJ",
				"20391": "CZ",
				"20415": "PB",
				"20446": "YS",
				"20447": "SQ",
				"20504": "TC",
				"20608": "KG",
				"20854": "QJ",
				"20857": "ZC",
				"20911": "PF",
				"20504": "TC",
				"20608": "KG",
				"20854": "QJ",
				"20857": "ZC",
				"20911": "PF",
				"20985": "AW",
				"21032": "PB",
				"21048": "XQ",
				"21049": "SC",
				"21089": "YS",
				"21119": "JC",
				"21242": "SB",
				"21273": "SC",
				"21305": "YP",
				"21306": "QO",
				"21330": "ZC",
				"21333": "SDC",
				"21345": "QK",
				"21378": "CA",
				"21397": "SC",
				"21414": "XS",
				"21442": "SC",
				"21477": "JG",
				"21480": "TD",
				"21484": "ZS",
				"21494": "YX",
				"21505": "YX",
				"21512": "HG",
				"21523": "XH",
				"21537": "PB",
				"21542": "PF",
				"21549": "KH",
				"21571": "E",
				"21574": "DA",
				"21588": "TD",
				"21589": "O",
				"21618": "ZC",
				"21621": "KHA",
				"21632": "ZJ",
				"21654": "KG",
				"21679": "LKG",
				"21683": "KH",
				"21710": "A",
				"21719": "YH",
				"21734": "WOE",
				"21769": "A",
				"21780": "WN",
				"21804": "XH",
				"21834": "A",
				"21899": "ZD",
				"21903": "RN",
				"21908": "WO",
				"21939": "ZC",
				"21956": "SA",
				"21964": "YA",
				"21970": "TD",
				"22003": "A",
				"22031": "JG",
				"22040": "XS",
				"22060": "ZC",
				"22066": "ZC",
				"22079": "MH",
				"22129": "XJ",
				"22179": "XA",
				"22237": "NJ",
				"22244": "TD",
				"22280": "JQ",
				"22300": "YH",
				"22313": "XW",
				"22331": "YQ",
				"22343": "YJ",
				"22351": "PH",
				"22395": "DC",
				"22412": "TD",
				"22484": "PB",
				"22500": "PB",
				"22534": "ZD",
				"22549": "DH",
				"22561": "PB",
				"22612": "TD",
				"22771": "KQ",
				"22831": "HB",
				"22841": "JG",
				"22855": "QJ",
				"22865": "XQ",
				"23013": "ML",
				"23081": "WM",
				"23487": "SX",
				"23558": "QJ",
				"23561": "YW",
				"23586": "YW",
				"23614": "YW",
				"23615": "SN",
				"23631": "PB",
				"23646": "ZS",
				"23663": "ZT",
				"23673": "YG",
				"23762": "TD",
				"23769": "ZS",
				"23780": "QJ",
				"23884": "QK",
				"24055": "XH",
				"24113": "DC",
				"24162": "ZC",
				"24191": "GA",
				"24273": "QJ",
				"24324": "NL",
				"24377": "TD",
				"24378": "QJ",
				"24439": "PF",
				"24554": "ZS",
				"24683": "TD",
				"24694": "WE",
				"24733": "LK",
				"24925": "TN",
				"25094": "ZG",
				"25100": "XQ",
				"25103": "XH",
				"25153": "PB",
				"25170": "PB",
				"25179": "KG",
				"25203": "PB",
				"25240": "ZS",
				"25282": "FB",
				"25303": "NA",
				"25324": "KG",
				"25341": "ZY",
				"25373": "WZ",
				"25375": "XJ",
				"25384": "A",
				"25457": "A",
				"25528": "SD",
				"25530": "SC",
				"25552": "TD",
				"25774": "ZC",
				"25874": "ZC",
				"26044": "YW",
				"26080": "WM",
				"26292": "PB",
				"26333": "PB",
				"26355": "ZY",
				"26366": "CZ",
				"26397": "ZC",
				"26399": "QJ",
				"26415": "ZS",
				"26451": "SB",
				"26526": "ZC",
				"26552": "JG",
				"26561": "TD",
				"26588": "JG",
				"26597": "CZ",
				"26629": "ZS",
				"26638": "YL",
				"26646": "XQ",
				"26653": "KG",
				"26657": "XJ",
				"26727": "HG",
				"26894": "ZC",
				"26937": "ZS",
				"26946": "ZC",
				"26999": "KJ",
				"27099": "KJ",
				"27449": "YQ",
				"27481": "XS",
				"27542": "ZS",
				"27663": "ZS",
				"27748": "TS",
				"27784": "SC",
				"27788": "ZD",
				"27795": "TD",
				"27812": "O",
				"27850": "PB",
				"27852": "MB",
				"27895": "SL",
				"27898": "PL",
				"27973": "QJ",
				"27981": "KH",
				"27986": "HX",
				"27994": "XJ",
				"28044": "YC",
				"28065": "WG",
				"28177": "SM",
				"28267": "QJ",
				"28291": "KH",
				"28337": "ZQ",
				"28463": "TL",
				"28548": "DC",
				"28601": "TD",
				"28689": "PB",
				"28805": "JG",
				"28820": "QG",
				"28846": "PB",
				"28952": "TD",
				"28975": "ZC",
				"29100": "A",
				"29325": "QJ",
				"29575": "SL",
				"29602": "FB",
				"30010": "TD",
				"30044": "CX",
				"30058": "PF",
				"30091": "YSP",
				"30111": "YN",
				"30229": "XJ",
				"30427": "SC",
				"30465": "SX",
				"30631": "YQ",
				"30655": "QJ",
				"30684": "QJG",
				"30707": "SD",
				"30729": "XH",
				"30796": "LG",
				"30917": "PB",
				"31074": "NM",
				"31085": "JZ",
				"31109": "SC",
				"31181": "ZC",
				"31192": "MLB",
				"31293": "JQ",
				"31400": "YX",
				"31584": "YJ",
				"31896": "ZN",
				"31909": "ZY",
				"31995": "XJ",
				"32321": "PF",
				"32327": "ZY",
				"32418": "HG",
				"32420": "XQ",
				"32421": "HG",
				"32438": "LG",
				"32473": "GJ",
				"32488": "TD",
				"32521": "QJ",
				"32527": "PB",
				"32562": "ZSQ",
				"32564": "JZ",
				"32735": "ZD",
				"32793": "PB",
				"33071": "PF",
				"33098": "XL",
				"33100": "YA",
				"33152": "PB",
				"33261": "CX",
				"33324": "BP",
				"33333": "TD",
				"33406": "YA",
				"33426": "WM",
				"33432": "PB",
				"33445": "JG",
				"33486": "ZN",
				"33493": "TS",
				"33507": "QJ",
				"33540": "QJ",
				"33544": "ZC",
				"33564": "XQ",
				"33617": "YT",
				"33632": "QJ",
				"33636": "XH",
				"33637": "YX",
				"33694": "WG",
				"33705": "PF",
				"33728": "YW",
				"33882": "SR",
				"34067": "WM",
				"34074": "YW",
				"34121": "QJ",
				"34255": "ZC",
				"34259": "XL",
				"34425": "JH",
				"34430": "XH",
				"34485": "KH",
				"34503": "YS",
				"34532": "HG",
				"34552": "XS",
				"34558": "YE",
				"34593": "ZL",
				"34660": "YQ",
				"34892": "XH",
				"34928": "SC",
				"34999": "QJ",
				"35048": "PB",
				"35059": "SC",
				"35098": "ZC",
				"35203": "TQ",
				"35265": "JX",
				"35299": "JX",
				"35782": "SZ",
				"35828": "YS",
				"35830": "E",
				"35843": "TD",
				"35895": "YG",
				"35977": "MH",
				"36158": "JG",
				"36228": "QJ",
				"36426": "XQ",
				"36466": "DC",
				"36710": "JC",
				"36711": "ZYG",
				"36767": "PB",
				"36866": "SK",
				"36951": "YW",
				"37034": "YX",
				"37063": "XH",
				"37218": "ZC",
				"37325": "ZC",
				"38063": "PB",
				"38079": "TD",
				"38085": "QY",
				"38107": "DC",
				"38116": "TD",
				"38123": "YD",
				"38224": "HG",
				"38241": "XTC",
				"38271": "ZC",
				"38415": "YE",
				"38426": "KH",
				"38461": "YD",
				"38463": "AE",
				"38466": "PB",
				"38477": "XJ",
				"38518": "YT",
				"38551": "WK",
				"38585": "ZC",
				"38704": "XS",
				"38739": "LJ",
				"38761": "GJ",
				"38808": "SQ",
				"39048": "JG",
				"39049": "XJ",
				"39052": "HG",
				"39076": "CZ",
				"39271": "XT",
				"39534": "TD",
				"39552": "TD",
				"39584": "PB",
				"39647": "SB",
				"39730": "LG",
				"39748": "TPB",
				"40109": "ZQ",
				"40479": "ND",
				"40516": "HG",
				"40536": "HG",
				"40583": "QJ",
				"40765": "YQ",
				"40784": "QJ",
				"40840": "YK",
				"40863": "QJG"
			};
		},
		// 提取拼音, 返回首字母大写形式
		getFullChars: function(str) {
			var result = '',
				name;
			var reg = new RegExp('[a-zA-Z0-9\- ]');
			for(var i = 0, len = str.length; i < len; i++) {
				var ch = str.substr(i, 1),
					unicode = ch.charCodeAt(0);
				if(unicode > 40869 || unicode < 19968) {
					result += ch;
				} else {
					name = this._getFullChar(ch);
					if(name !== false) {
						result += name;
					}
				}
			}
			return result;
		},
		// 提取首字母，返回大写形式
		getCamelChars: function(str) {
			if(typeof(str) !== 'string')
				throw new Error(-1, "函数getFisrt需要字符串类型参数!");
			var chars = []; //保存中间结果的数组
			for(var i = 0, len = str.length; i < len; i++) {
				//获得unicode码
				var ch = str.charAt(i);
				//检查该unicode码是否在处理范围之内,在则返回该码对映汉字的拼音首字母,不在则调用其它函数处理
				chars.push(this._getChar(ch));
			}
			//处理arrResult,返回所有可能的拼音首字母串数组
			return this._getResult(chars);
		},
		// 提取拼音
		_getFullChar: function(str) {
			for(var key in this.full_dict) {
				if(-1 !== this.full_dict[key].indexOf(str)) {
					return this._capitalize(key);
					break;
				}
			}
			return false;
		},
		// 首字母大写
		_capitalize: function(str) {
			if(str.length > 0) {
				var first = str.substr(0, 1).toUpperCase();
				var spare = str.substr(1, str.length);
				return first + spare;
			}
		},
		_getChar: function(ch) {
			var unicode = ch.charCodeAt(0);
			//如果不在汉字处理范围之内,返回原字符,也可以调用自己的处理函数
			if(unicode > 40869 || unicode < 19968)
				return ch; //dealWithOthers(ch);
			//检查是否是多音字,是按多音字处理,不是就直接在strChineseFirstPY字符串中找对应的首字母
			if(!this.options.checkPolyphone)
				return this.char_dict.charAt(unicode - 19968);
			return this.polyphone[unicode] ? this.polyphone[unicode] : this.char_dict.charAt(unicode - 19968);
		},
		_getResult: function(chars) {
			if(!this.options.checkPolyphone)
				return chars.join('');
			var result = [''];
			for(var i = 0, len = chars.length; i < len; i++) {
				var str = chars[i],
					strlen = str.length;
				if(strlen == 1) {
					for(var j = 0; j < result.length; j++) {
						result[k] += str;
					}
				} else {
					var swap1 = result.slice(0);
					result = [];
					for(var j = 0; j < strlen; j++) {
						//复制一个相同的arrRslt
						var swap2 = swap1.slice(0);
						//把当前字符str[k]添加到每个元素末尾
						for(var k = 0; k < swap2.length; k++) {
							swap2[k] += str.charAt(j);
						}
						//把复制并修改后的数组连接到arrRslt上
						result = result.concat(swap2);
					}
				}
			}
			return result;
		}
	};
	var extend = function(dst, src) {
		for(var property in src) {
			dst[property] = src[property];
		}
		return dst;
	};
	return new Pinyin(arguments);
})();
var mdataTheme = "mdataTheme";
var mdata = window.mdata = window.$$ = function(selector) {
	return new mdata.a(selector);
}
mdata.a = mdata.prototype.a = function(selector) {
	var jqobj;
	var j = 0;
	switch(typeof(selector)) {
		case "string":
			var ar0 = selector.match(/([#|.|:]*[a-zA-Z0-9_-]+)/g);
			for(i = 0; i < ar0.length; i++) {
				var m = ar0[i].match(/([#|.|:]*)([a-zA-Z0-9_-]+)/);
				switch(m[1]) {
					case "#":
						jqobj = document.getElementById(m[2]);
						break;
					case ".":
						jqobj = (j == 0) ? document.getElementsByClassName(m[2]) : jqobj.getElementsByClassName(m[2]);
						break;
					case ":":
						jqobj = (j == 0) ? document.getElementsByTagName("*")[m[2]] : jqobj[m[2]];
						break;
					case "":
						jqobj = document.getElementsByTagName(m[2]);
						break;
				};
				if(i == 0) {
					j = 1;
				}
			};
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
mdata.a.prototype.styleChange = function(vstyle, func, normalstatus, time) {
	var obj = this.myobject;
	var laststatus = obj.style[vstyle];
	var nowstatus;
	time = (typeof(time) == "undefined") ? 50 : time;
	var timer = setInterval(function() {
		nowstatus = obj.style[vstyle];
		if(nowstatus == laststatus) {
			laststatus = nowstatus;
		} else {
			laststatus = nowstatus;
			if(typeof(normalstatus) != "string") {
				func(obj);
			} else {
				if(nowstatus == normalstatus) {
					func(obj);
				}
			}

		};
	}, time);
}
mdata.a.prototype.typeChange = function(vtype, func, normalstatus, time) {
	var obj = this.myobject;
	var vt = this.reg(vtype, /([a-zA-Z0-9]+)/i, -2);
	var laststatus = obj[vtype];
	var nowstatus;
	time = (typeof(time) == "undefined") ? 50 : time;
	var timer = setInterval(function() {
		nowstatus = obj[vtype];
		if(nowstatus == laststatus) {
			laststatus = nowstatus;
		} else {
			laststatus = nowstatus;
			if(typeof(normalstatus) == "undefined") {
				func(obj);
			} else {
				if(nowstatus == normalstatus) {
					func(obj);
				}
			}

		};
	}, time);
}
mdata.a.prototype.sizeChange = function(obj, func, time) {
	obj = (typeof(obj) == "object") ? obj : this.myobject
	var widths = obj.offsetWidth;
	var heights = obj.offsetHeight;
	var lefts = obj.offsetLeft;
	var tops = obj.offsetTop
	time = (typeof(time) == "number") ? time : 100;
	var i = 0;
	var timer = setInterval(function() {
		if(obj.style.display != "none") {
			if(i == 0) {
				widths = obj.offsetWidth;
				heights = obj.offsetHeight;
				i = 1;
			};
			if(obj.offsetWidth != widths || obj.offsetHeight != heights || obj.offsetLeft != lefts || obj.offsetTop != tops) {
				func(obj);
				widths = obj.offsetWidth;
				heights = obj.offsetHeight;
				lefts = obj.offsetLeft;
				tops = obj.offsetTop
			}
		}
	}, time);
}
mdata.a.prototype.styleStatus = function(vstyle, func, time) {
	var obj = this.myobject;
	var value = obj.style[vstyle];
	time = (typeof(time) == "undefined") ? 50 : time;
	var timer = setInterval(function() {
		if(obj.style[vstyle] != "" && obj.style[vstyle] != 0) {
			func(obj);
			clearInterval(timer);
		}
	}, time);
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
mdata.a.prototype.checkSize = function(width, height, ex, ey) {
	var x0 = document.body.clientWidth;
	var y0 = document.body.clientHeight;
	var Fwidth = parseFloat(width);
	var Fheight = parseFloat(height);
	var x2, y2;
	if(x0 - ex >= Fwidth) {
		x2 = ex;
	} else {
		x2 = ex - Fwidth;
	};
	if(y0 - ey >= Fheight) {
		y2 = ey;
	} else {
		y2 = ey - Fheight;
	}
	return {
		'x': x2,
		'y': y2
	};
}
mdata.a.prototype.create_Svg = function(x, y, width, height) {
	var svgs = 'http://www.w3.org/2000/svg';
	x = this.width_height(x);
	y = this.width_height(y);
	width = this.width_height(width);
	height = this.width_height(height);

	var svg = document.createElementNS(svgs, 'svg');
	svg.setAttribute("x", x);
	svg.setAttribute("y", y);
	svg.setAttribute("width", width);
	svg.setAttribute("height", height);
	svg.style.position = 'absolute';
	svg.setAttribute('version', 1.1);
	svg.setAttribute('xmlns', svgs);
	this.myobject.appendChild(svg);
	return svg;
};
mdata.a.prototype.refresh_Svg = function(x, y, width, height) {
	this.myobject.setAttribute("x", x);
	this.myobject.setAttribute("y", y);
	this.myobject.setAttribute("width", width);
	this.myobject.setAttribute("height", height);
};
mdata.a.prototype.create_Path = function(pathstr, fillColor, strokeWidth, strokeColor, strokeOpacity) {
	var svgs = 'http://www.w3.org/2000/svg';
	var path = document.createElementNS(svgs, 'path');
	path.setAttribute("d", pathstr);
	path.style.fill = fillColor;
	path.style.strokeWidth = strokeWidth;
	path.style.stroke = strokeColor.toString();
	path.style.filter = "alpha(opacity=" + strokeOpacity * 100 + ")";
	path.style.opacity = strokeOpacity;
	path.style.mozOpacity = strokeOpacity;
	this.myobject.appendChild(path);
}
mdata.a.prototype.refresh_Path = function(pathstr, fillColor, strokeWidth, strokeColor, strokeOpacity) {
	this.myobject.setAttribute("d", pathstr);
	this.myobject.style.fill = fillColor;
	this.myobject.style.strokeWidth = strokeWidth;
	this.myobject.style.stroke = strokeColor.toString();
	this.myobject.style.filter = "alpha(opacity=" + strokeOpacity * 100 + ")";
	this.myobject.style.opacity = strokeOpacity;
	this.myobject.style.mozOpacity = strokeOpacity;
}
mdata.a.prototype.create_bgline = function(barheight, barwidth, xpos, ypos, type, strokeWidth, strokeColor,
	strokeOpacity) {
	var lineobjx = new Array;
	var lineobjy = new Array;
	var that = this;
	var xgobj = document.createElementNS('http://www.w3.org/2000/svg', 'g');
	xgobj.setAttribute('class', 'xbgline');
	that.myobject.appendChild(xgobj);
	var ygobj = document.createElementNS('http://www.w3.org/2000/svg', 'g');
	ygobj.setAttribute('class', 'ybgline');
	that.myobject.appendChild(ygobj);
	switch(type) {
		case 0:
			//绘制x轴网格
			for(i = 1; i < xpos.x.length; i++) {
				lineobjx[i - 1] = $$(xgobj).create_Line(xpos.x[i], xpos.y, xpos.x[i], xpos.y - barheight, strokeWidth, strokeColor,
					strokeOpacity);
			};
			break;
		case 1:
			//绘制y轴网格
			for(i = 0; i < ypos.y.length - 1; i++) {
				lineobjy[i - 1] = $$(ygobj).create_Line(ypos.x, ypos.y[i], ypos.x + barwidth, ypos.y[i], strokeWidth, strokeColor,
					strokeOpacity);
			};
			break;
		case 2:
			//绘制xy轴网格
			for(i = 1; i < xpos.x.length; i++) {
				lineobjx[i - 1] = $$(xgobj).create_Line(xpos.x[i], xpos.y, xpos.x[i], xpos.y - barheight, strokeWidth, strokeColor,
					strokeOpacity);
			};

			for(i = 0; i < ypos.y.length - 1; i++) {
				lineobjy[i - 1] = $$(ygobj).create_Line(ypos.x, ypos.y[i], ypos.x + barwidth, ypos.y[i], strokeWidth, strokeColor,
					strokeOpacity);
			};
			break;
	};
	return {
		"x": lineobjx,
		"y": lineobjy,
		"xg": xgobj,
		"yg": ygobj
	};
};
mdata.a.prototype.refresh_bgline = function(barheight, barwidth, xpos, ypos, type, strokeWidth, strokeColor,
	strokeOpacity) {
	var that = this;
	switch(type) {
		case 0:
			//绘制x轴网格
			for(i = 1; i < xpos.x.length; i++) {
				$$(that.myobject.x[i - 1]).refresh_Line(xpos.x[i], xpos.y, xpos.x[i], xpos.y - barheight, strokeWidth, strokeColor,
					strokeOpacity);
			};
			break;
		case 1:
			//绘制y轴网格
			for(i = 0; i < ypos.y.length - 1; i++) {
				$$(that.myobject.y[i - 1]).refresh_Line(ypos.x, ypos.y[i], ypos.x + barwidth, ypos.y[i], strokeWidth, strokeColor,
					strokeOpacity);
			};
			break;
		case 2:
			//绘制xy轴网格
			for(i = 1; i < xpos.x.length; i++) {
				$$(that.myobject.x[i - 1]).refresh_Line(xpos.x[i], xpos.y, xpos.x[i], xpos.y - barheight, strokeWidth, strokeColor,
					strokeOpacity);
			};
			for(i = 0; i < ypos.y.length - 1; i++) {
				$$(that.myobject.y[i - 1]).refresh_Line(ypos.x, ypos.y[i], ypos.x + barwidth, ypos.y[i], strokeWidth, strokeColor,
					strokeOpacity);
			};
			break;
	};
};

mdata.a.prototype.create_Title = function(title_width, title_font, title_fontsize, title_text, title_align,
	title_fontcolor, title_top) {
	father = this.myobject;
	var fatherwidth = this.defaults(title_width, father.getAttribute("height"));
	title_font = this.defaults(title_font, "微软雅黑");
	title_text = this.defaults(title_text, "标题");
	title_align = this.defaults(title_align, 50);
	title_fontsize = this.defaults(title_fontsize, "16px");
	title_fontcolor = this.defaults(title_fontcolor, "black");
	title_top = this.defaults(title_top, "0");
	var svgs = 'http://www.w3.org/2000/svg';
	var textsize = this.getFontSize(title_fontsize, title_text);
	var zindex = 1;
	var left = title_align / 100 * (fatherwidth - textsize.width);
	var g = document.createElementNS(svgs, 'g');
	g.style.zIndex = zindex;
	g.setAttribute("class", "title");
	father.appendChild(g);

	var text1 = document.createElementNS(svgs, 'text');
	text1.setAttribute("x", left);
	text1.setAttribute("y", title_top + textsize.height);
	text1.style.fontSize = title_fontsize;
	text1.style.fontcolor = title_fontcolor;
	text1.style.fillColor = "black";
	text1.textContent = title_text;
	g.appendChild(text1);
	return {
		'obj': text1,
		"size": textsize
	};
}
mdata.a.prototype.create_Rect = function(x, y, width, height, rx, ry, fillColor, strokeWidth, strokeColor,
	strokeOpacity) {
	var svgs = 'http://www.w3.org/2000/svg';
	var rect = document.createElementNS(svgs, 'rect');
	rect.setAttribute("x", x);
	rect.setAttribute("y", y);
	rect.setAttribute("rx", rx);
	rect.setAttribute("ry", ry);
	rect.setAttribute("width", width.toString());
	rect.setAttribute("height", height.toString());
	rect.style.fill = fillColor;
	rect.style.strokeWidth = strokeWidth;
	rect.style.stroke = strokeColor.toString();
	rect.style.filter = "alpha(opacity=" + strokeOpacity * 100 + ")";
	rect.style.opacity = strokeOpacity;
	rect.style.mozOpacity = strokeOpacity;
	this.myobject.appendChild(rect);
	return rect;
}
mdata.a.prototype.create_G = function(x, y, width, height, rx, ry, fillColor, strokeWidth, strokeColor, strokeOpacity) {
	var svgs = 'http://www.w3.org/2000/svg';
	var rect = document.createElementNS(svgs, 'g');
	rect.setAttribute("x", x);
	rect.setAttribute("y", y);
	rect.setAttribute("rx", rx);
	rect.setAttribute("ry", ry);
	rect.setAttribute("width", width.toString());
	rect.setAttribute("height", height.toString());
	rect.style.fill = fillColor;
	rect.style.strokeWidth = strokeWidth;
	rect.style.stroke = strokeColor.toString();
	rect.style.filter = "alpha(opacity=" + strokeOpacity * 100 + ")";
	rect.style.opacity = strokeOpacity;
	rect.style.mozOpacity = strokeOpacity;
	this.myobject.appendChild(rect);
	return rect;
}
mdata.a.prototype.refresh_Rect = function(x, y, width, height, rx, ry, fillColor, strokeWidth, strokeColor,
	strokeOpacity) {
	this.myobject.setAttribute("x", x);
	this.myobject.setAttribute("y", y);
	this.myobject.setAttribute("rx", rx);
	this.myobject.setAttribute("ry", ry);
	this.myobject.setAttribute("width", width.toString());
	this.myobject.setAttribute("height", height.toString());
	this.myobject.style.fill = fillColor;
	this.myobject.style.strokeWidth = strokeWidth;
	this.myobject.style.stroke = strokeColor.toString();
	this.myobject.style.filter = "alpha(opacity=" + strokeOpacity * 100 + ")";
	this.myobject.style.opacity = strokeOpacity;
	this.myobject.style.mozOpacity = strokeOpacity;
}

mdata.a.prototype.create_Line = function(x1, y1, x2, y2, strokeWidth, strokeColor, strokeOpacity) {
	var svgs = "http://www.w3.org/2000/svg";
	x1 = this.defaults(x1, 10);
	y1 = this.defaults(y1, 10);
	x2 = this.defaults(x2, 20);
	y2 = this.defaults(y2, 20);
	var line = document.createElementNS(svgs, 'line');
	line.setAttribute("x1", x1);
	line.setAttribute("y1", y1);
	line.setAttribute("x2", x2);
	line.setAttribute("y2", y2);
	line.style.strokeWidth = strokeWidth;
	line.style.stroke = strokeColor;
	line.style.filter = "alpha(opacity=" + strokeOpacity * 100 + ")";
	line.style.opacity = strokeOpacity;
	line.style.mozOpacity = strokeOpacity;
	this.myobject.appendChild(line);
	return line;
}
mdata.a.prototype.refresh_Line = function(x1, y1, x2, y2, strokeWidth, strokeColor, strokeOpacity) {
	this.myobject.setAttribute("x1", x1);
	this.myobject.setAttribute("y1", y1);
	this.myobject.setAttribute("x2", x2);
	this.myobject.setAttribute("y2", y2);
	this.myobject.style.strokeWidth = strokeWidth;
	this.myobject.style.stroke = strokeColor;
	this.myobject.style.filter = "alpha(opacity=" + strokeOpacity * 100 + ")";
	this.myobject.style.opacity = strokeOpacity;
	this.myobject.style.mozOpacity = strokeOpacity;
}
mdata.a.prototype.create_Polyline = function(datastr, strokewidth, strokecolor) {
	var svgs = 'http://www.w3.org/2000/svg';
	strokewidth = this.defaults(strokewidth, 2);
	strokecolor = this.defaults(strokecolor, 'red');

	var line = document.createElementNS(svgs, 'path');
	line.setAttribute("d", datastr);
	line.setAttribute("stroke-width", strokewidth);
	line.setAttribute("stroke", strokecolor);
	this.myobject.appendChild(line);
	return line;
}
mdata.a.prototype.refresh_Polyline = function(datastr, strokewidth, strokecolor) {
	this.myobject.setAttribute("d", datastr);
	this.myobject.setAttribute("stroke-width", strokewidth);
	this.myobject.setAttribute("stroke", strokecolor);
}
mdata.a.prototype.create_Ellipse = function(cx, cy, rx, ry, fillcolor, strokewidth, strokecolor) {
	var svgs = 'http://www.w3.org/2000/svg';
	cx = this.defaults(cx, 10);
	cy = this.defaults(cy, 10);
	rx = this.defaults(rx, 20);
	ry = this.defaults(ry, 20);
	fillcolor = this.defaults(fillcolor, 'green');
	strokewidth = this.defaults(strokewidth, 2);
	strokecolor = this.defaults(strokecolor, 'red');

	var Ellipse = document.createElementNS(svgs, 'ellipse');
	Ellipse.setAttribute("cx", cx);
	Ellipse.setAttribute("cy", cy);
	Ellipse.setAttribute("rx", rx);
	Ellipse.setAttribute("ry", ry);
	Ellipse.style.fill = fillcolor;
	Ellipse.style.strokeWidth = strokewidth;
	Ellipse.style.stroke = strokecolor;
	this.myobject.appendChild(Ellipse);
	return Ellipse;
}
mdata.a.prototype.refresh_Ellipse = function(cx, cy, rx, ry, fillcolor, strokewidth, strokecolor) {
	this.myobject.setAttribute("cx", cx);
	this.myobject.setAttribute("cy", cy);
	this.myobject.setAttribute("rx", rx);
	this.myobject.setAttribute("ry", ry);
	this.myobject.style.fill = fillcolor;
	this.myobject.style.strokeWidth = strokewidth;
	this.myobject.style.stroke = strokecolor;
}
mdata.a.prototype.create_Circle = function(cx, cy, r, fillcolor, strokewidth, strokecolor) {
	var svgs = 'http://www.w3.org/2000/svg';
	cx = this.defaults(cx, 10);
	cy = this.defaults(cy, 10);
	r = this.defaults(r, 100);
	fillcolor = this.defaults(fillcolor, 'green');
	strokewidth = this.defaults(strokewidth, 2);
	strokecolor = this.defaults(strokecolor, 'red');
	var Circle = document.createElementNS(svgs, 'circle');
	Circle.setAttribute("cx", cx);
	Circle.setAttribute("cy", cy);
	Circle.setAttribute("r", r);
	Circle.setAttribute("fill", fillcolor);
	Circle.setAttribute("strokeWidth", strokewidth);
	Circle.setAttribute("stroke", strokecolor);
	this.myobject.appendChild(Circle);
	return Circle;
}
mdata.a.prototype.refresh_Circle = function(cx, cy, r, fillcolor, strokewidth, strokecolor) {
	this.myobject.setAttribute("cx", cx);
	this.myobject.setAttribute("cy", cy);
	this.myobject.setAttribute("r", r);
	this.myobject.setAttribute("fill", fillcolor);
	this.myobject.setAttribute("strokeWidth", strokewidth);
	this.myobject.setAttribute("stroke", strokecolor);
}
mdata.a.prototype.create_text = function(x, y, str, fontsize, fontColor, fontOpacity) {
	var svgs = 'http://www.w3.org/2000/svg';
	var fsize = this.getFontSize(fontsize, str);
	var text1 = document.createElementNS(svgs, 'text');
	text1.setAttribute("x", x);
	text1.setAttribute("y", y);
	text1.style.fontSize = fontsize;
	text1.style.color = fontColor;
	text1.style.filter = "alpha(opacity=" + fontOpacity * 100 + ")";
	text1.style.opacity = fontOpacity;
	text1.style.mozOpacity = fontOpacity;
	text1.style.textAlign = 'center';
	text1.textContent = str;
	this.myobject.appendChild(text1);
	text1.setAttribute('x', x);
	return text1;
}
mdata.a.prototype.refresh_text = function(x, y, str, fontsize, fontColor, fontOpacity) {
	var fsize = this.getFontSize(fontsize, str);
	this.myobject.setAttribute("x", x);
	this.myobject.setAttribute("y", y);
	this.myobject.style.fontSize = fontsize;
	this.myobject.style.color = fontColor;
	this.myobject.style.filter = "alpha(opacity=" + fontOpacity * 100 + ")";
	this.myobject.style.opacity = fontOpacity;
	this.myobject.style.mozOpacity = fontOpacity;
	this.myobject.style.textAlign = 'center';
	this.myobject.textContent = str;
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

mdata.a.prototype.removeRight = function() {
	window.document.oncontextmenu = function() {
		return false;
	};
}

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
mdata.a.prototype.browser = function() {
	var ua, device, kernel, system, sysverson, browser, browserverson;
	ua = navigator.userAgent.toLowerCase();
	if(ua.search(/mobile/ig) > -1) {
		if(ua.search(/symbian/ig) > -1) {
			device = de(/^Nokia[0-9a-zA-Z_.]+/i, 0);
			system = 'Symbian';
			sysverson = de(/SymbianOS[\/]([0-9_.]+)/i, 1);
			kernel = de(/Series[0-9]+[\/]([0-9_.]+)/i, 1);
		} else if(ua.search(/android/ig) > -1) {
			system = "android";
			sysverson = de(/android\s*([0-9._-]+)/i, 1);
			device = de(/\;([^\;]*)build/i, 1);
			kernel = de(/build\/([0-9a-zA-Z._-]+)/i, 1);
		} else if(ua.search(/iphone/ig) > -1) {
			device = "iphone";
			system = "ios";
			kernel = de(/mobile\/([0-9a-zA-Z-._]*)/i, 1);
			sysverson = de(/iphone\s*os\s*([0-9._]*)/i, 1);
		} else if(ua.search(/ipad/ig) > -1) {
			device = "ipad";
			system = "ios";
			kernel = de(/mobile\/([0-9a-zA-Z-._]*)/i, 1);
			sysverson = de(/cpu\s*os\s*([0-9._]*)/i, 1);
		} else if(ua.search(/\(bb/ig) > -1) {
			device = "BlackBerry";
			system = "blackberry";
			kernel = de(/version\/([0-9a-zA-Z-._]*)/i, 1);
			sysverson = de(/version\/([0-9._]*)/i, 1);
		} else if(ua.search(/windows/ig) > -1) {
			device = "lumia";
			system = de(/windows\s*phone\s*[0-9._]+/i, 0);
			kernel = system;
			sysverson = system;
		} else {
			device = "unknown";
			stystem = "unknown";
			sysverson = "unknown";
		}
	} else if(ua.search(/symbian/ig) > -1) {
		device = de(/^Nokia[0-9a-zA-Z_.]+/ig, 0);
		system = 'Symbian';
		sysverson = de(/SymbianOS[\/]([0-9_.]+)/i, 1);
		kernel = de(/Series[0-9]+[\/]([0-9_.]+)/i, 1);
	} else {
		device = "PC";
		if(ua.search(/Linux/ig) > -1) {
			system = 'Linux';
		} else if(ua.search(/Mac OS/ig) > -1) {
			system = "Mac";
		} else if(ua.search(/windows/ig) > -1) {
			kernel = de(/windows\s*nt\s*[a-zA-Z0-9._-]*/ig, 0);
			var mm = kernel.match(/[0-9.]+/)[0];
			switch(mm) {
				case "5.0":
					system = "windows 2000";
					sysverson = "2000";
					break;
				case "5.1":
					system = "windows XP";
					sysverson = "XP";
					break;
				case "5.2":
					system = "windows server 2003";
					sysverson = "2003";
					break;
				case "6.0":
					system = "windows vista";
					sysverson = "vista";
					break;
				case "6.1":
					system = "windows 7";
					sysverson = "7";
					break;
				case "6.2":
					system = "windows 8";
					sysverson = "8";
					break;
				case "6.3":
					system = "windows 8.1";
					sysverson = "8.1";
					break;
				case "6.4":
					system = "windows 10";
					sysverson = "10";
					break;
				case "10.0":
					system = "windows 10";
					sysverson = "10";
					break;
			}
		} else if(ua.search(/FreeBSD/ig) > -1) {
			system = "FreeBSD";
		} else if(ua.search(/SunOS/ig) > -1) {
			system = "SunOS";
		};
	}

	if(ua.search(/sogou/i) > -1) {
		browser = "sogou";
		browserverson = de(/[sogoumobilebrowser]\/([0-9._]*)/i, 1);
	} else if(ua.search(/\s+se\s+/i) > -1) {
		browser = "sogou";
		browserverson = "undefined";
	} else if(ua.search(/liebaofast|lbbrowser/i) > -1) {
		browser = "liebao";
		browserverson = de(/(liebaofast|lbbrowser)\/*([0-9._]*)/i, 2);
	} else if(ua.search(/qqbrowser/i) > -1) {
		browser = "qq";
		browserverson = de(/qqbrowser\/([0-9._]*)/i, 1);
	} else if(ua.search(/(ucbrowser)|([\s+\;+]ubrowser)/i) > -1) {
		browser = "UC";
		browserverson = de(/(ucbrowser|ubrowser)\/*([0-9._]*)/i, 2);
	} else if(ua.search(/(baidubrowser)|([\s+\;+]bidubrowser)/i) > -1) {
		browser = "baidu";
		browserverson = de(/(baidubrowser|bidubrowser)\/*([0-9._]*)/i, 2);
	} else if(ua.search(/360/i) > -1) {
		browser = "360";
		if(ua.search(/free/ig) > -1) {
			browser = "360free";
		};
		browserverson = de(/360\s+[\s+a-zA-Z\(]+([0-9._A-Za-z]+)/i, 1);
	} else if(ua.search(/2345browser/i) > -1) {
		browser = "2345";
		browserverson = de(/2345browser\/([0-9._]*)/i, 1);
	} else if(ua.search(/mxbrowser/i) > -1) {
		browser = "aoyou";
		browserverson = de(/mxbrowser\/([0-9._]*)/i, 1);
	} else if(ua.search(/opr|oprea/i) > -1) {
		browser = "oprea";
		browserverson = de(/(opr|oprea)\/([0-9._]*)/i, 2);
	} else if(ua.search(/browserng/i) > -1) {
		browser = "via";
		browserverson = de(/browserng\/([0-9._]*)/i, 1);
	} else if(ua.search(/baiduboxapp/i) > -1) {
		browser = "baiduboxapp";
		browserverson = de(/baiduboxapp\/([0-9._]*)/i, 1);
	} else if(ua.search(/huohoubrowser/i) > -1) {
		browser = "huohou";
		browserverson = de(/huohoubrowser\/([0-9._]*)/i, 1);
	} else if(ua.search(/dolphinbrowser/i) > -1) {
		browser = "dolphin";
		browserverson = de(/dolphinbrowsercn\/([0-9._]*)/i, 1);
	} else if(ua.search(/lebrowser/i) > -1) {
		browser = "lvcha";
		browserverson = de(/lebrowser\/([0-9._]*)/i, 1);
	} else if(ua.search(/firefox/i) > -1) {
		browser = "firefox";
		browserverson = de(/firefox\/([0-9._]*)/i, 1);
	} else if(ua.search(/(msie)\s*([\w.]+)/i) > -1) {
		browser = 'IE';
		browserverson = de(/(msie)\s*([\w.]+)/i, 2);
	} else if(ua.search(/(rv)([:])([\d.]+)/i) > -1) {
		browser = 'IE';
		browserverson = de(/(rv)([:])([\d.]+)/i, 3);
	} else {
		if(ua.indexOf("chrome") == -1 && ua.indexOf('safari') != -1) {
			browser = "safari";
			browserverson = de(/safari\/([0-9._]*)/i, 1);
		} else if(ua.indexOf("chrome") != -1 && ua.indexOf('safari') != -1) {
			browser = "chrome";
			browserverson = de(/chrome\/([0-9._]*)/i, 1);
		}
	};

	function de(regstr, index) {
		var m = ua.match(regstr);
		return(m != null && m.length > index) ? m[index] : "undefined";
	}
	return {
		UA: ua,
		device: device,
		kernel: kernel,
		system: system,
		systemverson: sysverson,
		browser: browser,
		browserverson: browserverson
	};
}
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
mdata.a.prototype.autoFontSize = function(fontsize, str, obj, maxvalue) {
	var w = document.createElement("span");
	fontsize = this.defaults(fontsize, 1);
	maxvalue = this.defaults(maxvalue, 100);
	document.body.appendChild(w);
	w.innerHTML = str;
	var h = "px";
	obj = (typeof(obj) == "undefined") ? this.myobject : obj;
	w.style.fontSize = fontsize + h;
	var x0 = w.offsetWidth;
	var y0 = w.offsetHeight;
	if(typeof(obj.push) == "function") {
		while(parseFloat(w.offsetWidth) < obj[0] * 0.9 && parseFloat(w.offsetHeight) < obj[1] - 5 && fontsize < parseFloat(
				maxvalue)) {
			fontsize = fontsize + 0.5;

			w.style.fontSize = fontsize + h;
		};
	} else {
		while(parseFloat(w.offsetWidth) < obj.offsetWidth * 0.9 && parseFloat(w.offsetHeight) < obj.offsetHeight - 5 &&
			fontsize < parseFloat(maxvalue)) {
			fontsize = fontsize + 0.5;
			w.style.fontSize = fontsize + h;
		};
	}
	w.parentNode.removeChild(w);
	return fontsize + h;
}
mdata.a.prototype.getFontSize = function(fontsize, textarr) {
	var spobj = document.createElement('span');
	spobj.style.fontSize = fontsize;
	spobj.innerHTML = textarr;
	spobj.setAttribute('id', "ceshi");
	document.body.appendChild(spobj);
	var a = spobj.offsetHeight;
	var b = spobj.offsetWidth;
	//var b=text.getBoundingClientRect().right-text.getBoundingClientRect().left
	if(document.body.addEvent) {
		spobj.removeNode(true);
	} else {
		spobj.parentNode.removeChild(spobj);
	}
	return {
		"height": a,
		"width": b
	};
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
mdata.a.prototype.ajax_get = function(url, str, value, func) {
	var response = "";
	var resqrr;
	var request;
	var browser = navigator.appName;
	if(browser == "Microsoft Internet Explorer") {
		request = new ActiveXObject("Microsoft.XMLHttp");
	} else {
		request = new XMLHttpRequest();
	}
	var aurl = url;
	if(typeof(str) == "string") {
		var aurl = url + "?" + str;
	}
	request.open('GET', aurl, true);
	request.onreadystatechange = function() {
		if(request.readyState == 4 && request.status == 200) {
			response = request.responseText;
			if(typeof(func) != "undefined") {
				func(response);
			};
			if(typeof(value) == "object") {
				value[0] = response;
			};

		};
	};
	request.send();
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
mdata.a.prototype.addCookie = function(strname, str, time) {
	document.cookie = strname + "=" + escape(str) + ";expires=" + time;
};
mdata.a.prototype.setCookie = function(strname, str, time) {
	document.cookie = strname + "=" + escape(str) + ";expires=" + time;
}
mdata.a.prototype.getCookie = function(strname) {
	var a = new Array();
	var patt1 = new RegExp("" + strname + "=([^;]+)");
	a = document.cookie.match(patt1)[1];
	return a;
}
mdata.a.prototype.removeCookie = function(strname) {
	document.cookie = strname + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
}
mdata.a.prototype.addScript = function(ScriptSrc, callback) {
	var head = document.getElementsByTagName('head')[0];
	var script = document.createElement('script');
	script.type = 'text/javascript';
	script.setAttribute("src", ScriptSrc);
	head.appendChild(script);
	if(document.body.addEventListener) {
		script.onload = function() {
			callback();
		}
	} else {
		script.onreadystatechange = function() {
			if(this.readyState == 'loaded' || this.readyState == 'complete') {
				callback();
			}
		}
	}
}
mdata.a.prototype.SHA1 = function(msg) {
	function rotate_left(n, s) {
		var t4 = (n << s) | (n >>> (32 - s));
		return t4;
	};

	function lsb_hex(val) {
		var str = "";
		var i;
		var vh;
		var vl;

		for(i = 0; i <= 6; i += 2) {
			vh = (val >>> (i * 4 + 4)) & 0x0f;
			vl = (val >>> (i * 4)) & 0x0f;
			str += vh.toString(16) + vl.toString(16);
		}
		return str;
	};

	function cvt_hex(val) {
		var str = "";
		var i;
		var v;

		for(i = 7; i >= 0; i--) {
			v = (val >>> (i * 4)) & 0x0f;
			str += v.toString(16);
		}
		return str;
	};

	function Utf8Encode(string) {
		string = string.replace(/\r\n/g, "\n");
		var utftext = "";

		for(var n = 0; n < string.length; n++) {

			var c = string.charCodeAt(n);

			if(c < 128) {
				utftext += String.fromCharCode(c);
			} else if((c > 127) && (c < 2048)) {
				utftext += String.fromCharCode((c >> 6) | 192);
				utftext += String.fromCharCode((c & 63) | 128);
			} else {
				utftext += String.fromCharCode((c >> 12) | 224);
				utftext += String.fromCharCode(((c >> 6) & 63) | 128);
				utftext += String.fromCharCode((c & 63) | 128);
			}

		}

		return utftext;
	};

	var blockstart;
	var i, j;
	var W = new Array(80);
	var H0 = 0x67452301;
	var H1 = 0xEFCDAB89;
	var H2 = 0x98BADCFE;
	var H3 = 0x10325476;
	var H4 = 0xC3D2E1F0;
	var A, B, C, D, E;
	var temp;

	msg = Utf8Encode(msg);

	var msg_len = msg.length;

	var word_array = new Array();
	for(i = 0; i < msg_len - 3; i += 4) {
		j = msg.charCodeAt(i) << 24 | msg.charCodeAt(i + 1) << 16 |
			msg.charCodeAt(i + 2) << 8 | msg.charCodeAt(i + 3);
		word_array.push(j);
	}

	switch(msg_len % 4) {
		case 0:
			i = 0x080000000;
			break;
		case 1:
			i = msg.charCodeAt(msg_len - 1) << 24 | 0x0800000;
			break;

		case 2:
			i = msg.charCodeAt(msg_len - 2) << 24 | msg.charCodeAt(msg_len - 1) << 16 | 0x08000;
			break;

		case 3:
			i = msg.charCodeAt(msg_len - 3) << 24 | msg.charCodeAt(msg_len - 2) << 16 | msg.charCodeAt(msg_len - 1) << 8 | 0x80;
			break;
	}

	word_array.push(i);

	while((word_array.length % 16) != 14) word_array.push(0);

	word_array.push(msg_len >>> 29);
	word_array.push((msg_len << 3) & 0x0ffffffff);

	for(blockstart = 0; blockstart < word_array.length; blockstart += 16) {

		for(i = 0; i < 16; i++) W[i] = word_array[blockstart + i];
		for(i = 16; i <= 79; i++) W[i] = rotate_left(W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16], 1);

		A = H0;
		B = H1;
		C = H2;
		D = H3;
		E = H4;

		for(i = 0; i <= 19; i++) {
			temp = (rotate_left(A, 5) + ((B & C) | (~B & D)) + E + W[i] + 0x5A827999) & 0x0ffffffff;
			E = D;
			D = C;
			C = rotate_left(B, 30);
			B = A;
			A = temp;
		}

		for(i = 20; i <= 39; i++) {
			temp = (rotate_left(A, 5) + (B ^ C ^ D) + E + W[i] + 0x6ED9EBA1) & 0x0ffffffff;
			E = D;
			D = C;
			C = rotate_left(B, 30);
			B = A;
			A = temp;
		}

		for(i = 40; i <= 59; i++) {
			temp = (rotate_left(A, 5) + ((B & C) | (B & D) | (C & D)) + E + W[i] + 0x8F1BBCDC) & 0x0ffffffff;
			E = D;
			D = C;
			C = rotate_left(B, 30);
			B = A;
			A = temp;
		}

		for(i = 60; i <= 79; i++) {
			temp = (rotate_left(A, 5) + (B ^ C ^ D) + E + W[i] + 0xCA62C1D6) & 0x0ffffffff;
			E = D;
			D = C;
			C = rotate_left(B, 30);
			B = A;
			A = temp;
		}
		H0 = (H0 + A) & 0x0ffffffff;
		H1 = (H1 + B) & 0x0ffffffff;
		H2 = (H2 + C) & 0x0ffffffff;
		H3 = (H3 + D) & 0x0ffffffff;
		H4 = (H4 + E) & 0x0ffffffff;
	}
	var temp = cvt_hex(H0) + cvt_hex(H1) + cvt_hex(H2) + cvt_hex(H3) + cvt_hex(H4);
	return temp.toLowerCase();
}
mdata.a.prototype.base64 = function() {
	// private property
	_keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
	// public method for encoding
	this.encode = function(input) {
		var output = "";
		var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
		var i = 0;
		input = _utf8_encode(input);
		while(i < input.length) {
			chr1 = input.charCodeAt(i++);
			chr2 = input.charCodeAt(i++);
			chr3 = input.charCodeAt(i++);
			enc1 = chr1 >> 2;
			enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
			enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
			enc4 = chr3 & 63;
			if(isNaN(chr2)) {
				enc3 = enc4 = 64;
			} else if(isNaN(chr3)) {
				enc4 = 64;
			}
			output = output +
				_keyStr.charAt(enc1) + _keyStr.charAt(enc2) +
				_keyStr.charAt(enc3) + _keyStr.charAt(enc4);
		}
		return output;
	}
	// public method for decoding
	this.decode = function(input) {
		var output = "";
		var chr1, chr2, chr3;
		var enc1, enc2, enc3, enc4;
		var i = 0;
		input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
		while(i < input.length) {
			enc1 = _keyStr.indexOf(input.charAt(i++));
			enc2 = _keyStr.indexOf(input.charAt(i++));
			enc3 = _keyStr.indexOf(input.charAt(i++));
			enc4 = _keyStr.indexOf(input.charAt(i++));
			chr1 = (enc1 << 2) | (enc2 >> 4);
			chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
			chr3 = ((enc3 & 3) << 6) | enc4;
			output = output + String.fromCharCode(chr1);
			if(enc3 != 64) {
				output = output + String.fromCharCode(chr2);
			}
			if(enc4 != 64) {
				output = output + String.fromCharCode(chr3);
			}
		}
		output = _utf8_decode(output);
		return output;
	}
	// private method for UTF-8 encoding
	_utf8_encode = function(string) {
		string = string.replace(/\r\n/g, "\n");
		var utftext = "";
		for(var n = 0; n < string.length; n++) {
			var c = string.charCodeAt(n);
			if(c < 128) {
				utftext += String.fromCharCode(c);
			} else if((c > 127) && (c < 2048)) {
				utftext += String.fromCharCode((c >> 6) | 192);
				utftext += String.fromCharCode((c & 63) | 128);
			} else {
				utftext += String.fromCharCode((c >> 12) | 224);
				utftext += String.fromCharCode(((c >> 6) & 63) | 128);
				utftext += String.fromCharCode((c & 63) | 128);
			}

		}
		return utftext;
	}
	// private method for UTF-8 decoding
	_utf8_decode = function(utftext) {
		var string = "";
		var i = 0;
		var c = c1 = c2 = 0;
		while(i < utftext.length) {
			c = utftext.charCodeAt(i);
			if(c < 128) {
				string += String.fromCharCode(c);
				i++;
			} else if((c > 191) && (c < 224)) {
				c2 = utftext.charCodeAt(i + 1);
				string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
				i += 2;
			} else {
				c2 = utftext.charCodeAt(i + 1);
				c3 = utftext.charCodeAt(i + 2);
				string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
				i += 3;
			}
		}
		return string;
	}
	return this;
}
mdata.a.prototype.md5_1 = function() {

	var hexcase = 0; /* hex output format. 0 - lowercase; 1 - uppercase        */
	var b64pad = ""; /* base-64 pad character. "=" for strict RFC compliance   */
	var chrsz = 8; /* bits per input character. 8 - ASCII; 16 - Unicode      */
	this.hex_md5 = function(s) {
		return binl2hex(core_md5(str2binl(s), s.length * chrsz));
	}
	this.b64_md5 = function(s) {
		return binl2b64(core_md5(str2binl(s), s.length * chrsz));
	}
	this.str_md5 = function(s) {
		return binl2str(core_md5(str2binl(s), s.length * chrsz));
	}
	this.hex_hmac_md5 = function(key, data) {
		return binl2hex(core_hmac_md5(key, data));
	}
	this.b64_hmac_md5 = function(key, data) {
		return binl2b64(core_hmac_md5(key, data));
	}
	this.str_hmac_md5 = function(key, data) {
		return binl2str(core_hmac_md5(key, data));
	}
	this.hash = function(key, data) {
		var bkey = str2binl(key);
		if(bkey.length > 16) bkey = core_md5(bkey, key.length * chrsz);
		var ipad = Array(16),
			opad = Array(16);
		for(var i = 0; i < 16; i++) {
			ipad[i] = bkey[i] ^ 0x36363636;
			opad[i] = bkey[i] ^ 0x5C5C5C5C;
		}
		return core_md5(ipad.concat(str2binl(data)), 512 + data.length * chrsz);
	}

	function md5_vm_test() {
		return hex_md5("abc") == "900150983cd24fb0d6963f7d28e17f72";
	}

	function core_md5(x, len) {
		/* append padding */
		x[len >> 5] |= 0x80 << ((len) % 32);
		x[(((len + 64) >>> 9) << 4) + 14] = len;

		var a = 1732584193;
		var b = -271733879;
		var c = -1732584194;
		var d = 271733878;

		for(var i = 0; i < x.length; i += 16) {
			var olda = a;
			var oldb = b;
			var oldc = c;
			var oldd = d;

			a = md5_ff(a, b, c, d, x[i + 0], 7, -680876936);
			d = md5_ff(d, a, b, c, x[i + 1], 12, -389564586);
			c = md5_ff(c, d, a, b, x[i + 2], 17, 606105819);
			b = md5_ff(b, c, d, a, x[i + 3], 22, -1044525330);
			a = md5_ff(a, b, c, d, x[i + 4], 7, -176418897);
			d = md5_ff(d, a, b, c, x[i + 5], 12, 1200080426);
			c = md5_ff(c, d, a, b, x[i + 6], 17, -1473231341);
			b = md5_ff(b, c, d, a, x[i + 7], 22, -45705983);
			a = md5_ff(a, b, c, d, x[i + 8], 7, 1770035416);
			d = md5_ff(d, a, b, c, x[i + 9], 12, -1958414417);
			c = md5_ff(c, d, a, b, x[i + 10], 17, -42063);
			b = md5_ff(b, c, d, a, x[i + 11], 22, -1990404162);
			a = md5_ff(a, b, c, d, x[i + 12], 7, 1804603682);
			d = md5_ff(d, a, b, c, x[i + 13], 12, -40341101);
			c = md5_ff(c, d, a, b, x[i + 14], 17, -1502002290);
			b = md5_ff(b, c, d, a, x[i + 15], 22, 1236535329);

			a = md5_gg(a, b, c, d, x[i + 1], 5, -165796510);
			d = md5_gg(d, a, b, c, x[i + 6], 9, -1069501632);
			c = md5_gg(c, d, a, b, x[i + 11], 14, 643717713);
			b = md5_gg(b, c, d, a, x[i + 0], 20, -373897302);
			a = md5_gg(a, b, c, d, x[i + 5], 5, -701558691);
			d = md5_gg(d, a, b, c, x[i + 10], 9, 38016083);
			c = md5_gg(c, d, a, b, x[i + 15], 14, -660478335);
			b = md5_gg(b, c, d, a, x[i + 4], 20, -405537848);
			a = md5_gg(a, b, c, d, x[i + 9], 5, 568446438);
			d = md5_gg(d, a, b, c, x[i + 14], 9, -1019803690);
			c = md5_gg(c, d, a, b, x[i + 3], 14, -187363961);
			b = md5_gg(b, c, d, a, x[i + 8], 20, 1163531501);
			a = md5_gg(a, b, c, d, x[i + 13], 5, -1444681467);
			d = md5_gg(d, a, b, c, x[i + 2], 9, -51403784);
			c = md5_gg(c, d, a, b, x[i + 7], 14, 1735328473);
			b = md5_gg(b, c, d, a, x[i + 12], 20, -1926607734);

			a = md5_hh(a, b, c, d, x[i + 5], 4, -378558);
			d = md5_hh(d, a, b, c, x[i + 8], 11, -2022574463);
			c = md5_hh(c, d, a, b, x[i + 11], 16, 1839030562);
			b = md5_hh(b, c, d, a, x[i + 14], 23, -35309556);
			a = md5_hh(a, b, c, d, x[i + 1], 4, -1530992060);
			d = md5_hh(d, a, b, c, x[i + 4], 11, 1272893353);
			c = md5_hh(c, d, a, b, x[i + 7], 16, -155497632);
			b = md5_hh(b, c, d, a, x[i + 10], 23, -1094730640);
			a = md5_hh(a, b, c, d, x[i + 13], 4, 681279174);
			d = md5_hh(d, a, b, c, x[i + 0], 11, -358537222);
			c = md5_hh(c, d, a, b, x[i + 3], 16, -722521979);
			b = md5_hh(b, c, d, a, x[i + 6], 23, 76029189);
			a = md5_hh(a, b, c, d, x[i + 9], 4, -640364487);
			d = md5_hh(d, a, b, c, x[i + 12], 11, -421815835);
			c = md5_hh(c, d, a, b, x[i + 15], 16, 530742520);
			b = md5_hh(b, c, d, a, x[i + 2], 23, -995338651);

			a = md5_ii(a, b, c, d, x[i + 0], 6, -198630844);
			d = md5_ii(d, a, b, c, x[i + 7], 10, 1126891415);
			c = md5_ii(c, d, a, b, x[i + 14], 15, -1416354905);
			b = md5_ii(b, c, d, a, x[i + 5], 21, -57434055);
			a = md5_ii(a, b, c, d, x[i + 12], 6, 1700485571);
			d = md5_ii(d, a, b, c, x[i + 3], 10, -1894986606);
			c = md5_ii(c, d, a, b, x[i + 10], 15, -1051523);
			b = md5_ii(b, c, d, a, x[i + 1], 21, -2054922799);
			a = md5_ii(a, b, c, d, x[i + 8], 6, 1873313359);
			d = md5_ii(d, a, b, c, x[i + 15], 10, -30611744);
			c = md5_ii(c, d, a, b, x[i + 6], 15, -1560198380);
			b = md5_ii(b, c, d, a, x[i + 13], 21, 1309151649);
			a = md5_ii(a, b, c, d, x[i + 4], 6, -145523070);
			d = md5_ii(d, a, b, c, x[i + 11], 10, -1120210379);
			c = md5_ii(c, d, a, b, x[i + 2], 15, 718787259);
			b = md5_ii(b, c, d, a, x[i + 9], 21, -343485551);

			a = safe_add(a, olda);
			b = safe_add(b, oldb);
			c = safe_add(c, oldc);
			d = safe_add(d, oldd);
		}
		return Array(a, b, c, d);

	}

	function md5_cmn(q, a, b, x, s, t) {
		return safe_add(bit_rol(safe_add(safe_add(a, q), safe_add(x, t)), s), b);
	}

	function md5_ff(a, b, c, d, x, s, t) {
		return md5_cmn((b & c) | ((~b) & d), a, b, x, s, t);
	}

	function md5_gg(a, b, c, d, x, s, t) {
		return md5_cmn((b & d) | (c & (~d)), a, b, x, s, t);
	}

	function md5_hh(a, b, c, d, x, s, t) {
		return md5_cmn(b ^ c ^ d, a, b, x, s, t);
	}

	function md5_ii(a, b, c, d, x, s, t) {
		return md5_cmn(c ^ (b | (~d)), a, b, x, s, t);
	}

	/*
	 * Calculate the HMAC-MD5, of a key and some data
	 */
	function core_hmac_md5(key, data) {
		var bkey = str2binl(key);
		if(bkey.length > 16) bkey = core_md5(bkey, key.length * chrsz);

		var ipad = Array(16),
			opad = Array(16);
		for(var i = 0; i < 16; i++) {
			ipad[i] = bkey[i] ^ 0x36363636;
			opad[i] = bkey[i] ^ 0x5C5C5C5C;
		}

		var hash = core_md5(ipad.concat(str2binl(data)), 512 + data.length * chrsz);
		return core_md5(opad.concat(hash), 512 + 128);
	}

	/*
	 * Add integers, wrapping at 2^32. This uses 16-bit operations internally
	 * to work around bugs in some JS interpreters.
	 */
	function safe_add(x, y) {
		var lsw = (x & 0xFFFF) + (y & 0xFFFF);
		var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
		return(msw << 16) | (lsw & 0xFFFF);
	}

	/*
	 * 对32为进行移位.
	 */
	function bit_rol(num, cnt) {
		return(num << cnt) | (num >>> (32 - cnt));
	}

	/*
	 * 字符组转二进制数组.
	 */
	function str2binl(str) {
		var bin = Array();
		var mask = (1 << chrsz) - 1;
		for(var i = 0; i < str.length * chrsz; i += chrsz)
			bin[i >> 5] |= (str.charCodeAt(i / chrsz) & mask) << (i % 32);
		return bin;
	}

	/*
	 * 二进制转为字符串
	 */
	function binl2str(bin) {
		var str = "";
		var mask = (1 << chrsz) - 1;
		for(var i = 0; i < bin.length * 32; i += chrsz)
			str += String.fromCharCode((bin[i >> 5] >>> (i % 32)) & mask);
		return str;
	}

	/*
	 * 把数组翻译成字hex.
	 */
	function binl2hex(binarray) {
		var hex_tab = hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
		var str = "";
		for(var i = 0; i < binarray.length * 4; i++) {
			str += hex_tab.charAt((binarray[i >> 2] >> ((i % 4) * 8 + 4)) & 0xF) +
				hex_tab.charAt((binarray[i >> 2] >> ((i % 4) * 8)) & 0xF);
		}
		return str;
	}

	/*
	 * 把一个数组用base64加密
	 */
	function binl2b64(binarray) {
		var tab = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
		var str = "";
		for(var i = 0; i < binarray.length * 4; i += 3) {
			var triplet = (((binarray[i >> 2] >> 8 * (i % 4)) & 0xFF) << 16) |
				(((binarray[i + 1 >> 2] >> 8 * ((i + 1) % 4)) & 0xFF) << 8) |
				((binarray[i + 2 >> 2] >> 8 * ((i + 2) % 4)) & 0xFF);
			for(var j = 0; j < 4; j++) {
				if(i * 8 + j * 6 > binarray.length * 32) str += b64pad;
				else str += tab.charAt((triplet >> 6 * (3 - j)) & 0x3F);
			}
		}
		return str;
	}

	return this;
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
			var delfsize = that.autoFontSize(1, "删除", delva, 24);
			del.style.fontSize = delfsize;
		};
		if(str != "") {
			var fff = delf.offsetHeight;
			var a = new Array(box.offsetWidth, fff);
			var fsize = that.autoFontSize(1, str, a, 24);
			delf.style.top = obje.offsetHeight - parseFloat(fff) + "px";
			delf.style.fontSize = fsize;
			//th.style.fontSize=fsize;
		};
	});
	return obje;
}
mdata.a.prototype.addImage = function(config) {
	//objname="img";
	var obj1 = 0;
	var strobj;
	var mobj = this.myobject;
	var delfv;
	var filename="";
	var filetype="";
	this.file={};
	this.box=0;
	this.deleteObj=0;
	this.previewSmallDiv=0;
	this.priviewSmallImg=0;
	this.previewBigDiv=0;
	this.contentTable=0;
	this.subtable=0;
	this.privateClass="sys_addImage";
	this.fileurl=""
	var that = this;
	this.init=function(){
		that.box=$$(mobj).addEle('div',0,{"class":that.privateClass});
		
		that.previewSmallDiv=$$(that.box).addEle("div",0,{"class":that.privateClass+"-imgpreview"});
		that.previewSmallDiv.setAttribute("tag","div");
		that.previewSmallDiv.setAttribute("loadstatus","0");
		that.priviewSmallImg=$$(that.previewSmallDiv).addEle("img",0,{"class":that.privateClass+"-imgpreview-img"});
		that.previewBigDiv=$$().addEle("div",0,{"class":that.privateClass+"-imgpreview-big"});
		that.contentTable=$$(that.previewSmallDiv).create_table(1,["","",""],[""]);
		that.contentTable.setAttribute("class",that.privateClass+"-contentTable");
		
		that.subtable=$$(that.contentTable.tr[0].td[0]).create_table(1,[""],["","",""]);
		that.subtable.tr[0].td[1].innerHTML="&nbsp;&nbsp;";
		that.subtable.setAttribute("class",that.privateClass+"-subtable");
		$$(that.contentTable.tr[2].td[0]).addEvent("click",function(e){
			console.log("===");
			if (that.fileurl!="") {
				try{
					config["openfunc"](that.fileurl);
				}catch(e){
					//TODO handle the exception
					window.open(that.fileurl); 
				}
			}
		});
		that.contentTable.tr[2].td[0].setAttribute("class",that.privateClass+"-addImage-content")
		that.contentTable.tr[2].style.height="";
		
		
		//开始创建删除元素
		type = (typeof(type) == "undefined") ? 0 : type;
		that.subtable.tr[0].td[1].setAttribute("class",that.privateClass+"-addImage-kongge");
		if (config["type"]>=1) {
			that.subtable.tr[0].td[2].setAttribute("class",that.privateClass+"-addImage-delete");
			that.subtable.tr[0].td[2].innerHTML="✖";
			that.deleteObj = that.subtable.tr[0].td[2];
			$$(that.deleteObj).addEvent("click", function() {
				try{
					config["delFunc"](that.box)
				}catch(e){
					//TODO handle the exception
				}
				mobj.removeChild(that.box);
				$$().removeElem(that.previewBigDiv)
			},true);
		}
		if(config["type"]>=2){
			var iff = document.createElement("input");
			iff.type = "file";
			iff.style.display="none";
			document.body.appendChild(iff);
			that.subtable.tr[0].td[0].innerHTML="✚";
			try{
				if (config["accept"].length>0) {
					iff.setAttribute("accept",config["accept"]);
				}
			}catch(e){
				//TODO handle the exception
			}
			that.subtable.tr[0].td[0].setAttribute("class",that.privateClass+"-tihuan");
			var th = that.subtable.tr[0].td[0];
			$$(th).addEvent("click", function() {
				iff.click();
				$$(iff).addEvent("change", function() {
					var g = iff.files;
					if(g.length > 0) {
						if(window.FileReader) {
							that.loadFile(g[0]);
						};
			
					};
				})
			});
		}
		try{
			if ("file" in config) {
				that.loadFile(config["file"])
			}
		}catch(e){
			//TODO handle the exception
		}
	}
	//创建一个外壳
	
	//table.style.display="none";
	var loadcss=function(){
		try{		
			if (document.getElementsByClassName(that.privateClass+"-CSS").length>0) {
				return;
			}
			var s=config["ROOTPATH"];
			if (s.match(/\/$/)) {
				
			}else{
				s=s+"/"
			}
			var lin = document.createElement("link");
			lin.setAttribute("class", that.privateClass+"-CSS");
			lin.setAttribute("rel", "stylesheet");
			lin.setAttribute("href", "http://" + window.location.host + s+"css/controls/"+that.privateClass+".css?v=" + Math.random())
			document.body.appendChild(lin);
		}catch(e){
			//TODO handle the exception
			//console.log(e)
		}
		
	}
	loadcss();
	this.loadFile=function(newfile){
		try{
			if (typeof(newfile)=="object") {
				that.file=newfile;
				try{
					v=JSON.stringify(newfile);
					if (typeof(newfile["filePathField"])!="undefined") {
						that.fileurl=newfile["filePathField"];
					}
					that.file.dbhave=1;
					filename=newfile["filePathField"].match(/\/*([^\/]+)$/)[1];
					filetype=filename.match(/\.([^\.]+)$/)[1].toLocaleLowerCase();
					that.subtable.tr[0].td[1].innerHTML=filetype
					if (filetype=="ico" || filetype=="png" || filetype=="jpg" || filetype=="jpeg" || filetype=="gif" || filetype=="svg" || filetype=="bmp") {
						that.previewSmallDiv.setAttribute("tag","png");
						that.priviewSmallImg.setAttribute("tag","png");
					}else{
						that.previewSmallDiv.setAttribute("tag","div");
						that.priviewSmallImg.setAttribute("tag","div");
					}
					
					that.contentTable.tr[2].td[0].innerHTML=filename;
					try{
						config["setFileNameFunc"](that.contentTable.tr[2].td[0])
						
					}catch(e){
						//TODO handle the exception
						console.log("+=",config);
					}
					that.previewSmallDiv.setAttribute("fileType",filetype);
					that.priviewSmallImg.setAttribute("src",newfile["filePathField"]);
					try{
						config["changefunc"](newfile)
					}catch(e){
						//TODO handle the exception
					}
				}catch(e){
					//TODO handle the exception
					filename=newfile.name.match(/\/*([^\/]+)$/)[0];
					filetype=filename.match(/\.([^\.]+)$/)[1].toLocaleLowerCase();
					that.priviewSmallImg.setAttribute("fileType",filetype);
					that.previewSmallDiv.setAttribute("fileType","*");
					
					if (filetype=="ico" || filetype=="png" || filetype=="jpg" || filetype=="jpeg" || filetype=="gif" || filetype=="svg" || filetype=="bmp") {
						that.previewSmallDiv.setAttribute("tag","div");
						
						if (newfile.size<5*1024*1024) {
							that.priviewSmallImg.setAttribute("tag","png");
						}else{
							that.priviewSmallImg.setAttribute("tag","bigpng");
						}
					}else{
						that.previewSmallDiv.setAttribute("tag","div");
						that.priviewSmallImg.setAttribute("tag","div");
					}
					that.subtable.tr[0].td[1].innerHTML=filetype;
					var chunkSize = (typeof(config["chunkSize"])=="number")?config["chunkSize"]:5*1024*1024;//一片5M 
					newfile.chunkSize=chunkSize;
					that.priviewSmallImg.setAttribute("src","");
					var start=0;
					var mflag=0;
					newfile.chunk={};
					var end=((start + chunkSize) >= newfile.size) ? newfile.size : start + chunkSize;;
					var isfilesize=0;
					var blobSlice = File.prototype.slice || File.prototype.mozSlice || File.prototype.webkitSlice;
					var thisss=0;
					var spark = new SparkMD5();
					//var spark = new SparkMD5.ArrayBuffer();
					var frOnprogress=function(e){
						if(e.loaded<thisss){
							thisss=0;
						}
			    		if (thisss==0) {
			    			thisss=e.loaded;
			    		}else{
			    			thisss=e.loaded-thisss;
			    		}
			    		var va=((isfilesize+thisss)/newfile.size*100).toFixed(1);
			    		if (va>=100) {
			    			va=100;	
			    			that.previewSmallDiv.setAttribute("filetype",filetype);
			    			that.contentTable.tr[2].td[0].innerHTML=filename;
							try{
								config["setFileNameFunc"](that.contentTable.tr[2].td[0])
							}catch(e){
								//TODO handle the exception
							}
			    		}else{
			    			that.contentTable.tr[2].td[0].innerHTML="读取进度："+va+"%";
			    		}
			    		
					}
					var frOnload = function(e) {
						spark.appendBinary(e.target.result); // append array buffer
						newfile.chunk[isfilesize-chunkSize+""]=$$().md5_1().hex_md5(e.target.result)
						if (isfilesize < newfile.size) {
							loadNext();
						} else{
							that.contentTable.tr[2].td[0].innerHTML=filename;
							try{
								config["setFileNameFunc"](that.contentTable.tr[2].td[0])
							}catch(e){
								//TODO handle the exception
							}
							newfile.dbhave=0;
				        	if (newfile.size<5*1024*1024) {
								newfile.src=e.target.result;
								that.priviewSmallImg.setAttribute("src",newfile.src);
							}
				        	newfile.md5=spark.end();
				        	that.file=newfile;
				        	try{
								config["changefunc"](newfile)
							}catch(e){
								//TODO handle the exception
							}
						}				
					};
					var frOnerror = function() {
						that.file="";
						that.contentTable.tr[2].td[0].innerHTML="加载错误！";
					};
	
					function loadNext() {
						var fileReader = new FileReader();
						isfilesize+=chunkSize;
						fileReader.onprogress = frOnprogress;
						fileReader.onload = frOnload;
						fileReader.onerror = frOnerror;
						fileReader.readAsDataURL(blobSlice.call(newfile, start, end));						
						start = end;
						end = ((end + chunkSize) >= newfile.size) ? newfile.size : end + chunkSize;					
					};	
					loadNext();
				}
				
			}
			
		}catch(e){
			//TODO handle the exception
			//console.log(e)
		}
		
	}
	return this;
}

mdata.a.prototype.calendar = function(msecenable,surefunc,todayfunc) {
	//定义当前的年月日时分秒毫秒
	var cur_select_month; //当前选择的月份
	var cur_dayss = 1;
	var jt = $$();
	//时间字符串元素和点击元素
	var timestrobj, timeclickobj;
	//年月日时分秒元素
	var yearobj, monthobj, dayobj, hourobj, minuteobj, secondobj, msecobj;
	var year_before_obj, year_after_obj, month_before_obj, month_after_obj;
	var todayobj, sureobj;
	//可见区域元素
	var calobj;
	//弹窗外壳元素
	var box, box_table;
	//日期元素数组
	var time;
	this.msecenable=1;
	if(typeof(msecenable)=="number"){
		this.msecenable=msecenable;
	};
	this.setTimeCallBack=function(obj){};
	this.msecenable=false;
	var width = "150px",
		height = "25px",
		boxwidth = 290,
		boxheight = 286;
	var o = this.myobject;
	var privateClass = "calendar";
	var that = this;
	init();
	/**
	 * 设置时间
	 */
	this.setTime = function(year, month, day, hour, minute, second, msec) {
		var that=this;
		timestrobj.value = def(year, 4) + "-" + def(month, 2) + "-" + def(day, 2) + " " + def(hour, 2) + ":" + def(minute,
			2) + ":" + def(second, 2) ;
		if (typeof(msec)!="undefined") {
			if (typeof(msec)=="number") {
				timestrobj.value+=+ "." + def(msec, 3)
			}
		};
		try{
			that.setTimeCallBack(timestrobj);
		}catch(e){
			//TODO handle the exception
		}
	};
	this.setStrTime = function(str,mescenable,func) {
		var cur=$$().curtime();
		var ta=str.match(/([0-9]+)/ig);
		var tc=cur.match(/([0-9]+)/ig);
		try{
			var year=(typeof(ta[0])!="undefined")?ta[0]:tc[0];
		}catch(e){
			//TODO handle the exception
			var year=tc[0];
		}
		try{
			var month=(typeof(ta[1])!="undefined")?ta[1]:tc[1];
		}catch(e){
			//TODO handle the exception
			var month=tc[1]
		}
		try{
			var day=(typeof(ta[2])!="undefined")?ta[2]:tc[2];
		}catch(e){
			//TODO handle the exception
			var day=tc[2]
		}
		try{
			var hour=(typeof(ta[3])!="undefined")?ta[3]:'00';
		}catch(e){
			//TODO handle the exception
			var hour='00'
		}
		
		try{
			var minute=(typeof(ta[4])!="undefined")?ta[4]:'00';
		}catch(e){
			//TODO handle the exception
			var minute='00'
		}
		try{
			var second=(typeof(ta[5])!="undefined")?ta[5]:'00';
		}catch(e){
			//TODO handle the exception
			var second='00'
		}
		if (typeof(mescenable)!="undefined") {
			if (mescenable==true) {
				try{		
					var msec=(typeof(ta[6])!="undefined")?ta[6]:tc[6];	
				}catch(e){
					//TODO handle the exception
					
				}
			}
		}
		that.setTime(year, month, day, hour, minute, second, msec)
//		timestrobj.value = def(year, 4) + "-" + def(month, 2) + "-" + def(day, 2) + " " + def(hour, 2) + ":" + def(minute,
//			2) + ":" + def(second, 2) ;
//		if (typeof(msec)!="undefined") {
//			if (typeof(msec)=="number") {
//				timestrobj.value+=+ "." + def(msec, 3)
//			}
//		}	
	};
	/**
	 * [获取时间,type=0 20151010101010,type=1 2015年12月23日 15分15秒122毫秒,type=2 2015/12/11 15:12:12.123,type=3 2015-15-12 15:22:23.235,type=4 秒，type=5 毫秒,默认秒]
	 */
	this.getTime = function(type) {
		
		timestr = timestrobj.value;
		if (timestr.length==10) {
			timestr=timestr+" 00:00:00";
		}
		var m = timestr.match(/[0-9]+/ig);
		type = (typeof(type) == "undefined") ? 4 : type;
		switch(type) {
			case 0:
				timestr = timestr.replace(/[^0-9]*/g, "");
				break;
			case 1:
				timestr = m[0] + "年" + m[1] + "月" + m[2] + "日  " + m[3] + "时" + m[4] + "分" + m[5] + "秒";
				if (typeof(m[6])=="string") {
					timestr+= + "." + m[6]+ "毫秒"	
				}
				break;
			case 2:
				timestr = m[0] + "/" + m[1] + "/" + m[2] + " " + m[3] + ":" + m[4] + ":" + m[5];
				if (typeof(m[6])=="string") {
					timestr+= + "." + m[6]	
				}
				break;
			case 3:
				timestr = m[0] + "-" + m[1] + "-" + m[2] + " " + m[3] + ":" + m[4] + ":" + m[5];
				if (typeof(m[6])=="string") {
					timestr+= + "." + m[6]	
				}
				break;
			case 4:
				timestr = jt.inttime(timestr, 0).inttime;
				break;
			case 5:
				timestr = jt.inttime(timestr).inttime;
				break;
			default:
				timestr = jt.inttime(timestr, 0).inttime;
				break;
		}
		return timestr;
	};
	this.setFontSize = function(fontsize) {
		calobj.style.fontSize = fontsize;
		box.style.fontSize = fontsize;
	};
	this.setHeight = function(height) {
		height = jt.width_height(height);
		calobj.style.height = height;
	};
	this.setWidth = function(width) {
		width = jt.width_height(width);
		calobj.style.width = width;
	};
	this.setBoxHeight = function(height) {
		height = jt.width_height(height);
		box.style.height = height;
	};
	this.setBoxWidth = function(width) {
		width = jt.width_height(width);
		box.style.width = width;
	};
	this.getHeight = function(height) {
		return calobj.offsetHeight;
	};
	this.getWidth = function(width) {
		return calobj.offsetWidth;
	};
	this.getBoxHeight = function(height) {
		return box.offsetHeight;
	};
	this.getBoxWidth = function(width) {
		return box.offsetWidth;
	};
	this.getX = function() {
		return calobj.offsetLeft;
	};
	this.getY = function() {
		return calobj.offsetTop;
	};
	this.getBoxX = function() {
		return box.offsetLeft;
	};
	this.getBoxY = function() {
		return box.offsetTop;
	};
	/**
	 * 获取obj
	 * @return {Object} [返回数组，数组有N个元素，分别表示该控件的不同元素]
	 */
	this.getObj = function() {
		return {
			"cal": calobj,
			"box": box,
			"boxt_able": box_table,
			"time": timestrobj,
			"timeselect": timeclickobj,
			"beforeyear": year_before_obj,
			"afteryear": year_after_obj,
			"year": yearobj,
			"beforemonth": month_before_obj,
			"aftermonth": month_after_obj,
			"month": monthobj,
			"day": dayobj,
			"hour": hourobj,
			"minute": minuteobj,
			"second": secondobj,
			"msec": msecobj,
			"today": todayobj,
			"sure": sureobj
		};
	};

	function init() {
		create_view();
		create_box();
		create_days();
		create_time();
		changecolor();
		changeTime();
		add_click();
		box.style.display = "none";
	}
	//创建可见区域
	function create_view() {
		width = $$().width_height(width);
		height = $$().width_height(height);
		calobj=$$(o).create_table(0,[""],["100% - 18px","16px"]);
		$$(calobj).mycss({
			"width": parseInt(width) - 2 + "px",
			"height": parseInt(height) - 2 + "px",
			"border": "1px solid black",
			"cursor": "default",
			"overflow":"hidden",
			"borderCollapse":""
		});
		
		$$(calobj).mytype({
			"class": privateClass + " " + that.mdataTheme + "-" + privateClass + "-view"
		})
		$$(calobj).addEvent("mousedown", function() {}, true);
		timestrobj = $$(calobj.tr[0].td[0]).addEle("input", {
			"width": "100%",
			"height":"100%",
			"display": "inline-block",
			"textAlign": "center",
			"border": "none"
		}, {
			"type": "text",
			"class": $$(calobj).mytype("class") + "-timeinput"
		});
		$$().unSelect(calobj);
//		var sp = $$(calobj).addEle("div", {
//			"width": "20px",
//			"height": "100%",
//			"display": "inline-block",
//			"textAlign": "center"
//		}, {
//			"class": $$(calobj).mytype("class") + "-timeiselect"
//		});
// 		var fonts = $$().autoFontSize(1, "1970-01-01 08:00:00.000", timestrobj);
// 		timestrobj.style.fontSize = fonts;
		timestrobj.value = "1970-01-01 08:00:00.000";
		timeclickobj = $$(calobj.tr[0].td[1]).addEle("span", 0, 0, "▽");
//		timeclickobj.style.top = (sp.offsetHeight - timeclickobj.offsetHeight) / 2 + "px";
//		timeclickobj.style.position = "relative";
	}

	//创建弹窗区域外壳div
	function create_box() {
		var w = $$().width_height(boxwidth);
		var h = $$().width_height(boxheight);
		var t = calobj.offsetHeight + calobj.offsetTop + "px";
		var l = calobj.offsetLeft + "px";
		box = $$().addEle("div", {
			"width": w,
			"height": h,
			"top": t,
			"left": l,
			"position": "absolute",
			"zIndex": "9999"
		}, {
			"type": "text",
			"class": privateClass + " " + that.mdataTheme + "-" + privateClass + "-alertWindowDiv"
		});
		box_table = $$(box).create_table(false, ["28px", "28px", "202px", "28px"], "100%");
		box_table.style.width = "100%";
		box_table.style.height = "";
		box_table.style.position = "absolute";
		$$(box).addEvent("mousedown", function() {}, true);
		time = jt.create_table(box_table.tr[0].td[0], ["100%"], ["50%", "50%"]);
		var strarr = [];
		var valurarr = [];
		for(i = 1970; i < 2100; i++) {
			strarr.push(i + "年");
			valurarr.push(i);
		}
		yearobj = $$(time.tr[0].td[0]).sys_selectmenu();
		yearobj.zhezhao = box;
		yearobj.mode = 0;
		yearobj.init();
		
		yearobj.addSelects(strarr);
		yearobj.addEvent("click", function() {
			try{
				yearobj.box.style.top=time.offsetHeight+"px";
			}catch(e){
				//TODO handle the exception
				//console.log(yearobj)
			}
			var y = yearobj.getValue();
			var m = monthobj.getValue();
			if(typeof(y) == "string" && typeof(m) == "string") {
				cale(y, m);
			}
		}, true);
		var strarr1 = [];
		var valurarr1 = [];
		for(i = 1; i < 13; i++) {
			strarr1.push(i + "月");
			valurarr1.push(i);
		}
		monthobj = $$(time.tr[0].td[1]).sys_selectmenu();
		monthobj.zhezhao = box;
		monthobj.mode = 0;
		monthobj.init();

		monthobj.addSelects(strarr1);
		monthobj.addEvent("click", function() {}, true);
		monthobj.addEvent("click", function() {
			try{
				monthobj.box.style.top=time.offsetHeight+"px";
			}catch(e){
				//TODO handle the exception
				//console.log(yearobj)
			}
			var y = yearobj.getValue();
			var m = monthobj.getValue();

			if(typeof(y) == "string" && typeof(m) == "string") {
				cale(y, m);
			}
		}, true);
		$$(timeclickobj).addEvent("click", function(e) {
			if(box.style.display == "none") {
				var a=$$(calobj).getEleToBodyPosition();
				
				box.style.display = "inline-block";
				box.style.left =Math.abs(e.clientX)-calobj.offsetWidth + "px";
				box.style.top = a.top+calobj.offsetHeight + "px";
				if (a.top+calobj.offsetHeight+box.offsetHeight>window.innerHeight) {
					box.style.top = a.top-box.offsetHeight + "px";
				}
				box.style.display = "block";
				box.style.float = "left";
				box.focus();
				var f = $$().curtime(3);;
				var mm = f.match(/[0-9]+/ig);
				cur_dayss = getweek(mm[0], mm[1], mm[2]);
				curSelected();
			} else {
				box.style.display = "none";
				$$(dayobj[cur_dayss]).mytype("select", "0");
			}
		});
	}
	//创建每月的日期
	function create_days() {
		var weekdaydays = ["日", "一", "二", "三", "四", "五", "六"];
		var tdw = ["", "", "", "", "", "", ""];
		var week = $$(box_table.tr[1].td[0]).create_table(0, [""], {
			"tr0": tdw
		});
		week.style.width = "290px";
		week.style.height = "28px";
		for(var i = 0; i < week.tr[0].td.length; i++) {
			week.tr[0].td[i].innerHTML = weekdaydays[i];
		}
		//日期区域
		var daystd = {
			"tr0": tdw,
			"tr1": tdw,
			"tr2": tdw,
			"tr3": tdw,
			"tr4": tdw,
			"tr5": tdw,
			"tr6": tdw
		};
		var d = $$(box_table.tr[2].td[0]).create_table(0, ["", "", "", "", "", ""], daystd);
		d.style.width = "100%";
		d.style.height = box_table.tr[2].td[0].offsetHeight + "px";
		dayobj = d.tds;
	}

	//日期下面的时间区域
	function create_time() {
		var td = {
			"tr0": ["14%", "1%", "14%", "1%", "14%", "1%", "17%", "1%", "18%", "18%"]
		}
		box_table.tr[3].td[0].style.width = "100%";
		var d_c = jt.create_table(box_table.tr[3].td[0], "100%", td);
		d_c.tr[0].style.textAlign = "center";
		hourobj = $$(d_c.tr[0].td[0]).addEle("input");
		hourobj.setAttribute("type", "number");
		hourobj.style.width = "80%";
		hourobj.style.tabIndex = "0";
		hourobj.pattern = '[0-9]';
		hourobj.maxLength = 2;
		hourobj.min = 0;
		hourobj.max = 23;
		hourobj.step = 1;
		minuteobj = $$(d_c.tr[0].td[2]).addEle("input");
		minuteobj.setAttribute("type", "number");
		minuteobj.style.width = "80%";
		minuteobj.style.tabIndex = "0";
		minuteobj.pattern = '[0-9]';
		minuteobj.maxLength = 2;
		minuteobj.min = 0;
		minuteobj.max = 59;
		minuteobj.step = 1;
		secondobj = $$(d_c.tr[0].td[4]).addEle("input");
		secondobj.setAttribute("type", "number");
		secondobj.style.width = "80%";
		secondobj.style.tabIndex = "0";
		secondobj.pattern = '[0-9]';
		secondobj.maxLength = 2;
		secondobj.min = 0;
		secondobj.max = 59;
		secondobj.step = 1;
		msecobj = $$(d_c.tr[0].td[6]).addEle("input");
		msecobj.setAttribute("type", "number");
		msecobj.style.width = "80%";
		msecobj.style.tabIndex = "0";
		msecobj.pattern = '[0-9]';
		msecobj.maxLength = 3;
		msecobj.min = 0;
		msecobj.max = 999;
		msecobj.step = 1;
		if (that.msecenable!=1) {
			msecobj.style.display="none"
		}
		todayobj = $$(d_c.tr[0].td[8]).addEle("button");
		$$(todayobj).HTML("今天");
		todayobj.style.fontSize = "12px";
		sureobj = $$(d_c.tr[0].td[9]).addEle("button");
		$$(sureobj).HTML("确认");
		sureobj.style.fontSize = "12px";
		d_c.tr[0].td[1].innerHTML = ":";
		d_c.tr[0].td[3].innerHTML = ":";
		if(that.msecenable==1){
			d_c.tr[0].td[5].innerHTML = ".";
		}
		$$(sureobj).addEvent("click", function() {
			
			timestrobj.value = def(parseInt(yearobj.getValue()), 4) + "-" + def(parseInt(cur_select_month), 2) +
				"-" + def(parseInt(dayobj[cur_dayss].innerHTML), 2) + " " + def(parseInt(hourobj.value), 2) + ":" + def(parseInt(
					minuteobj.value), 2) + ":" + def(parseInt(secondobj.value), 2);
			if(that.msecenable==1){
				timestrobj.value+="." + def(parseInt(msecobj.value), 3)
			}
			if(typeof(surefunc)=="function"){
				surefunc(timestrobj)
			}
			box.style.display = "none";
			$$(dayobj[cur_dayss]).mytype("select", "0");
			try{
				that.setTimeCallBack(timestrobj);
			}catch(e){
				//TODO handle the exception
			}
		});
	}
	/**
	 * 根据当前的时间，将弹窗事件置为当前时间
	 */
	function curSelected() {
		var times = timestrobj.value;
		var ff = times.match(/[0-9]+/ig);
		$$(dayobj[cur_dayss]).mytype("select", "0");
		cale(ff[0], ff[1]);
		var w = getweek(ff[0], ff[1], 1);
		try{
			hourobj.value = def(ff[3], 2);
		}catch(e){
			//TODO handle the exception
		}
		try{
			minuteobj.value = def(ff[4], 2);
		}catch(e){
			//TODO handle the exception
		}
		
		try{
			secondobj.value = def(ff[5], 2);
		}catch(e){
			//TODO handle the exception
		}
		try{
			msecobj.value = def(ff[6], 3);
		}catch(e){
			//TODO handle the exception
		}
		
		ff[1]=ff[1].replace(/^0/,"");
		yearobj.setSelectedByString(ff[0] + "年");
		monthobj.setSelectedByString(ff[1] + "月");
		cur_select_month = parseInt(ff[1]);
		$$(dayobj[parseInt(w) + parseInt(ff[2]) - 1]).mytype("select", "1");
		cur_dayss = parseInt(w) + parseInt(ff[2]) - 1;
	};
	/**
	 * 为前一年、后一年、前一月、后一月四个按钮，添加相关事件
	 */
	function add_click() {
		yearobj.selectFunc = function() {
			cale(parseInt(yearobj.getValue()), monthobj.getValue());
		}
		monthobj.selectFunc = function() {
			cale(parseInt(yearobj.getValue()), monthobj.getValue());
		}
		$$(todayobj).addEvent("click", function() {
			var d = new Date();
			yearobj.setSelectedByString(d.getFullYear() + "年");
			monthobj.setSelectedByString(parseInt(d.getMonth()) + 1 + "月");
			var w = cale(d.getFullYear(), d.getMonth() + 1);
			var ls_j = w + d.getDate() - 1;
			cur_select_month = parseInt(d.getMonth() + 1);
			hourobj.value = d.getHours();
			minuteobj.value = d.getMinutes();
			secondobj.value = d.getSeconds();
			msecobj.value = d.getMilliseconds();
			
			if(typeof(todayfunc)=="function"){
				todayfunc(hourobj,minuteobj,secondobj,msecobj)
			}
			
			$$(dayobj[cur_dayss]).mytype("select", "0");
			$$(dayobj[ls_j]).mytype("select", "1");
			cur_dayss = ls_j;
		});
		$$(window).addEvent("click", function() {
			box.style.display = "none";
			$$(dayobj[cur_dayss]).mytype("select", "0");
		});
		$$(document.body).addEvent("click", function() {
			box.style.display = "none";
			$$(dayobj[cur_dayss]).mytype("select", "0");
		});
		$$(box).addEvent("click", function() {}, true);
		$$(calobj).addEvent("click", function() {}, true);
	}
	/**
	 * 创建元素
	 * @param {Object} fatherobj  [父元素]
	 * @param {String} objname    [元素名称]
	 * @param {Number} width      [宽度]
	 * @param {Number} height     [高度]
	 */
	function obj(fatherobj, objname, width, height) {
		var o = document.createElement(objname);
		o.style.textAlign = "center";
		o.style.width = jt.width_height(width);
		o.style.height = jt.width_height(height);
		o.style.display = "inline-block";
		fatherobj.appendChild(o);
		return o;
	};
	/**
	 * [获取某一天是周几]
	 * @param {String} year  [年]
	 * @param {String} month [月]
	 * @param {String} day   [日]
	 */
	function getweek(year, month, day) {
		year = parseInt(year);
		month = parseInt(month);
		day = parseInt(day);
		year = def(year, 4);
		month = def(month, 2);
		day = def(day, 2);
		var b = $$().browser();
		if(b.browser = "IE" && b.browserverson < 9) {
			var j = parseISO8601(year + "-" + month + "-" + day);
			return j.getDay();
		} else {
			return(new Date(year + "-" + month + "-" + day)).getDay();
		}
	};

	function parseISO8601(dateStringInRange) {
		var isoExp = /^\s*(\d{4})-(\d\d)-(\d\d)\s*$/,
			date = new Date(NaN),
			month,
			parts = isoExp.exec(dateStringInRange);

		if(parts) {
			month = +parts[2];
			date.setFullYear(parts[1], month - 1, parts[3]);
			if(month != date.getMonth() + 1) {
				date.setTime(NaN);
			}
		}
		return date;
	}
	/**
	 * [把字符串格式化为固定数目的字符串]
	 * @param {String} var_s  [字符串]
	 * @param {String} num    [字符串长度]
	 */
	function def(var_s, num) {
		var_s = var_s.toString();
		var d = "";
		if(var_s.length < num) {
			for(i = 0; i < (num - var_s.length); i++) {
				d = d + "0";
			}
			var_s = d + var_s;
		} else {
			var_s = var_s.substr(0, num);
		}
		return var_s;
	}
	/**
	 * [获得某一个月有多少天]
	 * @param {Number} year  [年]
	 * @param {Number} month [月]
	 */
	function getdays(year, month) {
		var m = parseInt(month);
		var y = parseInt(year);
		var day = 30;
		if(m == 1 || m == 3 || m == 5 || m == 7 || m == 8 || m == 10 || m == 12) {
			day = 31;
		} else if(m == 2) {
			day = y % 4 == 0 && y % 100 != 0 || y % 400 == 0 ? 29 : 28;
		}
		return day;
	}
	/**
	 * [填充日历日期]
	 * @param {string} year
	 * @param {string} month
	 */
	function cale(year, month) {
		var daynum = getdays(year, month);
		var weekday = getweek(year, month, 1);
		var j = 1;
		//填充当月的日期
		for(i = weekday; i < daynum + weekday; i++) {
			$$(dayobj[i]).mytype("Month", "0");
			dayobj[i].innerHTML = j;
			j = j + 1;
		};
		//补充当月日期前面的空格
		var mm = parseInt(month) - 1;
		var m, y, before_daynum;
		if(mm < 1) {
			before_daynum = getdays(parseInt(year) - 1, 12);
		} else {
			before_daynum = getdays(year, mm);
		}
		var j = before_daynum - weekday + 1;
		for(i = 0; i < weekday; i++) {
			dayobj[i].innerHTML = j;
			$$(dayobj[i]).mytype("Month", "-1");
			//dayobj[i].style.color = "rgb(191,191,191)";
			j = j + 1;
		}
		//补充当月日期后面的空格
		var mm = parseInt(month) + 1;
		var m, y, before_daynum;
		if(mm > 12) {
			before_daynum = getdays(parseInt(year) + 1, 1);
		} else {
			before_daynum = getdays(year, mm);
		}
		var j = before_daynum - weekday;
		j = 1;
		for(i = daynum + weekday; i < dayobj.length; i++) {
			dayobj[i].innerHTML = j;
			$$(dayobj[i]).mytype("Month", "1");
			j = j + 1;
		};
		return weekday;
	};
	/**
	 * 鼠标经过日期变色
	 */
	function changecolor() {
		//鼠标经过的日期变色
		for(i = 0; i < dayobj.length; i++) {
			color(i);
		};
	};
	/**
	 * 当时间字符串改变的时候，重新设置日历
	 */
	function changeTime() {
		$$(timestrobj).typeChange("innerHTML", function() {
			curSelected();
		});
	};
	/**
	 * 为某个日期设置点击事件和鼠标经过事件
	 * @param {Number} index     [索引]
	 * @param {String} strcolor  [颜色]
	 */
	function color(index) {
		$$(dayobj[index]).addEvent("click", function() {
			$$(dayobj[parseInt(cur_dayss)]).mytype("select", "0");
			var weekday = getweek(parseInt(yearobj.getValue()), parseInt(monthobj.getValue()), 1);
			var dayss = getdays(parseInt(yearobj.getValue()), parseInt(monthobj.getValue()));
			var fistday = getweek(parseInt(yearobj.getValue()), parseInt(monthobj.getValue()), 1);
			$$(dayobj[index]).mytype("select", "1");
			cur_dayss = index;
			cur_select_month = parseInt(monthobj.getValue());
			if(index < parseInt(fistday)) {
				cur_select_month -= 1;
				if(cur_select_month == 0) {
					cur_select_month = 12;
				}
			} else if(index > parseInt(fistday) + dayss - 1) {
				cur_select_month += 1;
				if(cur_select_month == 13) {
					cur_select_month = 1;
				}
			};
		});
		$$(dayobj[index]).addEvent("mouseenter", function() {
			dayobj[index].setAttribute("mouseentering", "1");
		});
		$$(dayobj[index]).addEvent("mouseout", function() {
			dayobj[index].setAttribute("mouseentering", "0");
		});
	};
	return this;
}

mdata.a.prototype.myAlert = function(titlestr, msg,func,ROOTPATH) {
	titlestr = (typeof(titlestr) == "string") ? titlestr : "提示";
	var browser = $$().browser();
	this.type = 2; //设置弹窗类型,在init之前设置，1确认，2确认、取消，3 重试、确认，4 重置、确认，5取消，确认，重置
	this.mask; //获取遮罩div
	this.maskBackground = "rgba(0,0,0,0.2)"; //遮罩区域颜色以及透明度，0-1,0完全透明，1完全不透明
	this.popWindow; //获取弹窗div
	this.table; //获取弹窗div里面的table元素，此table三行，第一行4列：标题、最小化、最大化、关闭，第二行一列，该列里面有一个div,div里面是内容，table一行2*N列，第三行按钮区域
	this.title; //获取标题元素
	this.contentObj; //获取弹窗内容obj;
	this.closeFunc = []; //设置关闭按钮函数数组，可直接给该数组push函数
	this.bigFunc = []; //设置最大化按钮函数数组，可直接给该数组push函数
	this.smallFunc = []; //设置最小化按钮函数数组，可直接给该数组push函数

	this.sureFunc = {}; //设置确认功能数组，可直接给该数组push函数
	this.cancelFunc = {}; //设置取消功能数组，可直接给该数组push函数
	this.resetFunc = {}; //设置重置功能数组，可直接给该数组push函数

	this.sureObj; //获取确认按钮元素
	this.cancelObj; //获取取消按钮元素
	this.resetObj; //获取重置按钮元素
	this.width = "300px"; //设置弹窗区域宽度
	this.height = "200px"; //设置弹窗区域高度
	this.curCSSPath=(typeof(ROOTPATH)=="string")?ROOTPATH:"/www/";
	var that = this;
	var td2;
	
	this.loadcss=function(){
		try{
			if (document.getElementsByClassName("sys_myalert-CSS").length>0) {
				return;
			}
			var s=that.curCSSPath;
			if (s.match(/\/$/)) {
				
			}else{
				s=s+"/"
			}
			var lin = document.createElement("link");
			lin.setAttribute("class", "sys_myalert-CSS");
			lin.setAttribute("rel", "stylesheet");
			lin.setAttribute("href", "http://" + window.location.host + s +'css/controls/sys_myalert.css?v=' + Math.random())
			document.body.appendChild(lin);
		}catch(e){
			//TODO handle the exception
		}
	}
	that.loadcss();
	switch(this.type) {
		case 1:
			td2 = ['100% {"type":{"colspan":"4"}}'];
			break;
		case 2:
		case 3:
		case 4:
			td2 = ['50% {"type":{"colspan:"2"}}', '50% {"type":{"colspan:"2"}}'];
			break;
		case 5:
			td2 = ["33% ", "34% ", "33%"];
			break;
	}
	var left;
	var top;
	//遮罩区域
	function initMask() {
		that.mask = $$(that.myobject).addEle("div", {
			"cursor": "default",
			"width": "100%",
			"height": "100%",
			"zIndex": "9100",
			"position": "absolute",
			"float": "left",
			"top": "0",
			"left": "0",
			"background": that.maskBackground
		}, {
			"class": "myalert-mask"
		});
		$$().unSelect(that.mask);
		//弹窗情况下，屏蔽页面其他操作
		$$(that.mask).addEvent("mousedown", function() {}, true);
	};
	//创建弹窗区域
	function initMainWindow() {
		var browerViewSize = $$().getBrowerClientSize();
		var closeobj = new Object();

		//窗口区域
		that.popWindow = $$(that.mask).addEle("div", {
			"position": "relative",
			"cursor": "default",
			"width": that.width,
			"height": that.height,
			"zIndex": "9001",
			"float": "left",
			"textAlign": "center",
			"border": "1px solid black",
		}, {
			"class": "myalert-mask-window"
		});
		var left = (that.mask.offsetWidth - that.popWindow.offsetWidth) / 2 + "px";
		var top = (that.mask.offsetHeight - that.popWindow.offsetHeight) / 2 + "px";
		that.popWindow.style.left = left;
		that.popWindow.style.top = top;
		//弹窗内容区
		that.table = $$(that.popWindow).create_table(false, ["30px", "", "40px"], {
			"tr0": ["", '20px {"css":{"fontWeight":"bold"}}', '20px  {"css":{"fontWeight":"bold"}}',
				'20px  {"css":{"fontWeight":"bold"}}'
			],
			"tr1": ['100%'],
			"tr2": ['100%']
		});
		that.table.tr[1].td[0].setAttribute("colspan", 4);
		that.table.tr[2].td[0].setAttribute("colspan", 4);
		that.table.style.height = "100%";
		that.title = $$(that.table.tr[0].td[0]).addEle("span");
		that.title.innerHTML = titlestr;
		that.table.tr[0].style.fontSize = "18.5px";
		that.table.tr[0].style.textAlign = "left";
		that.table.tr[0].style.display = "";
		that.table.tr[1].style.display = "";
		that.table.tr[2].style.display = "";
		$$(that.table.tr[0].td[0]).mycss("width", "100% - 60px");
		that.table.tr[1].td[0].style.width = "100%";
		that.table.tr[1].td[0].style.textAlign = "left";
		that.table.tr[1].td[0].style.display = ""
		that.table.tr[2].style.textAlign = "center";
		that.contentObj = $$(that.table.tr[1].td[0]).addEle("div", 0, 0, msg);
		that.contentObj.style.textAlign = "center";
		var canceltable = $$(that.table.tr[2].td[0]).create_table(false, [""], {
			"tr0": td2
		})
		$$().sizeChange(that.table, function() {
			if(browser.browser == "IE" && browser.browserverson < 10) {
				that.table.style.width = "";
			}
			that.table.style.width = "100%";
			$$(that.table.tr[0].td[0]).mycss("width", "100% - 60px");
			that.contentObj.style.top = (that.contentObj.parentNode.offsetHeight - that.contentObj.offsetHeight) / 2 + "px";
		});
		switch(that.type) {
			case 1:
				that.sureObj = $$(canceltable.tr[0].td[0]).addEle("button", {}, {}, "确认");
				break;
			case 2:
				that.sureObj = $$(canceltable.tr[0].td[0]).addEle("button", {}, {}, "确认");
				that.cancelObj = $$(canceltable.tr[0].td[1]).addEle("button", {}, {}, "取消");
				break;
			case 3:
				that.resetObj = $$(canceltable.tr[0].td[0]).addEle("button", {}, {}, "重试");
				that.sureObj = $$(canceltable.tr[0].td[1]).addEle("button", {}, {}, "确认");
				break;
			case 4:
				that.resetObj = $$(canceltable.tr[0].td[0]).addEle("button", {}, {}, "重置");
				that.sureObj = $$(canceltable.tr[0].td[1]).addEle("button", {}, {}, "确认");
				break;
			case 5:
				that.resetObj = $$(canceltable.tr[0].td[0]).addEle("button", {}, {}, "重置");
				that.cancelObj = $$(canceltable.tr[0].td[1]).addEle("button", {}, {}, "取消");
				that.sureObj = $$(canceltable.tr[0].td[2]).addEle("button", {}, {}, "确认");
				break;
		};
		$$(that.table.tr[0].td).mycss("height", "");
		//$$(that.table.tr[1].td).mycss("height","");
		$$(that.table.tr[2].td).mycss("height", "");
		$$(that.popWindow).drag(that.table.tr[0].td[0]);
		//关闭窗口
		that.table.tr[0].td[1].innerHTML = "-";
		that.table.tr[0].td[2].innerHTML = "□";
		that.table.tr[0].td[3].innerHTML = "×";
		//最小化
		$$(that.table.tr[0].td[1]).addEvent("click", function() {
			for(i = 0; i < that.smallFunc.length; i++) {
				that.smallFunc[i];
			};
			that.mask.style.display = "none";
		}, true)
		//最大化或还原
		function bigs() {
			for(i = 0; i < that.bigFunc.length; i++) {
				that.bigFunc[i];
			};
			if(that.popWindow.style.width == "100%") {
				that.popWindow.style.width = that.width;
				that.popWindow.style.height = that.height;
				that.popWindow.style.left = left;
				that.popWindow.style.top = top;
			} else {
				that.width = that.popWindow.offsetWidth + "px";
				that.height = that.popWindow.offsetHeight + "px";
				left = that.popWindow.offsetLeft + "px";
				top = that.popWindow.offsetTop + "px";
				that.popWindow.style.width = "100%";
				$$(that.popWindow).mycss("height", "100% - 4px");
				that.popWindow.style.top = "0";
				that.popWindow.style.left = "0";

			}
		}
		$$(that.table.tr[0]).addEvent("dblclick", function() {
			bigs();
		}, true)
		$$(that.table.tr[0].td[2]).addEvent("click", function() {
			bigs();
		}, true)
		//关闭
		$$(that.table.tr[0].td[3]).addEvent("click", function() {
			for(i = 0; i < that.closeFunc.length; i++) {
				that.closeFunc[i];
			};
			$$(that.mask).removeElem(that.mask);
		}, true);
		if(!that.cancelFunc["click"]) {
			that.cancelFunc["click"] = [];
		}
		that.cancelFunc["click"].push(function() {
			$$(that.mask).removeElem(that.mask);
		});
		for(var key in that.cancelFunc) {
			for(var i = 0; i < that.cancelFunc[key].length; i++) {
				(function(i, key) {
					$$(that.cancelObj).addEvent(key, function() {
						if(that.cancelObj[key]) {
							if(typeof(that.cancelFunc[key]) == "object") {
								for(var i = 0; i < that.cancelFunc[key].length; i++) {
									that.cancelFunc[key][i]();
								}
							}
						}
					}, true);
				})(i, key)
			}
		}
		if (typeof(func)=="function") {
			$$(that.sureObj).addEvent("click", function() {
				func()
			}, true);
		}
		for(var key in that.sureFunc) {
			for(var i = 0; i < that.sureFunc[key].length; i++) {
				(function(i, key) {
					$$(that.sureObj).addEvent(key, function() {
						if(that.sureObj[key]) {
							if(typeof(that.sureFunc[key]) == "object") {
								for(var i = 0; i < that.sureFunc[key].length; i++) {
									that.sureFunc[key][i]();
								}
							}
						}
					}, true);
				})(i, key)
			}
		}
		$$(that.sureObj).addEvent("click", function() {
			$$(that.mask).removeElem(that.mask);
		})
		for(var key in that.resetFunc) {
			for(var i = 0; i < that.resetFunc[key].length; i++) {
				(function(i, key) {
					$$(that.resetObj).addEvent(key, function() {
						if(that.resetObj[key]) {
							if(typeof(that.resetFunc[key]) == "object") {
								for(var i = 0; i < that.resetFunc[key].length; i++) {
									that.resetFunc[key][i]();
								}
							}
						}
					}, true);
				})(i, key)
			}
		}
		that.contentObj.style.top = (that.contentObj.parentNode.offsetHeight - that.contentObj.offsetHeight) / 2 + "px";
		if(browser.browser == "IE" && browser.browserverson < 10) {
			that.table.tr[1].td[0].setAttribute("colspan", "4");
			if(browser.browserverson < 9) {
				that.contentObj.style.position = "relative";
			}
		}
	}
	this.addSureEvent = function(type, func) {
		if(typeof(that.sureFunc[type]) == "undefined") {
			that.sureFunc[type] = [];
			that.sureFunc[type].push(func);
		}
		if(typeof(that.sureFunc[type]) == "object") {
			that.sureFunc[type].push(func);
		}
		return that.sureFunc[type].length - 1;
	};
	this.addCancelEvent = function(type, func) {
		if(typeof(that.cancelFunc[type]) == "undefined") {
			that.cancelFunc[type] = [];
			that.cancelFunc[type].push(func);
		}
		if(typeof(that.cancelFunc[type]) == "object") {
			that.cancelFunc[type].push(func);
		}
		return that.cancelFunc[type].length - 1;
	}
	this.addResetEvent = function(type, func) {
		if(typeof(that.resetFunc[type]) == "undefined") {
			that.resetFunc[type] = [];
			that.resetFunc[type].push(func);
		}
		if(typeof(that.resetFunc[type]) == "object") {
			that.resetFunc[type].push(func);
		}
		return that.resetFunc[type].length - 1;
	}
	initMask();
	initMainWindow();
	$$().dragResize(that.popWindow);
	return this;
}

mdata.a.prototype.uploadFileImgElem = function(imgstr, name, width, height, func) {
	var obj1 = 0;
	var strobj;
	var mobj = this.myobject;
	var delfv;
	//创建一个外壳
	var box = document.createElement("div");
	box.style.display = "inline-block";
	box.style.position = "relative";
	box.style.overflow = "hidden";
	box.style.width = this.width_height(width);
	box.style.height = this.width_height(height);
	box.id = this.checkId("fileImg");
	mobj.appendChild(box);
	//开始创建主元素
	var obje = document.createElement("img");
	box.appendChild(obje);
	obje.style.width = "100%";
	obje.setAttribute("src", imgstr);
	//开始创建进度条元素
	var processbox = document.createElement("div");
	box.appendChild(processbox);
	processbox.style.width = "100%";
	processbox.style.height = "16px";

	obje.style.height = box.offsetHeight - 20 + "px";

	var process = document.createElement("div");
	processbox.appendChild(process);
	process.style.width = "0%";
	process.style.height = "100%";
	process.style.backgroundColor = "limegreen";
	process.innerHTML = "0%";
	//开始创建删除元素
	delfv = document.createElement("div");
	delfv.style.width = "100%";
	delfv.style.height = "20%";
	delfv.style.float = "left";
	delfv.style.zIndex = 2;
	delfv.style.position = "absolute";
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
		if(typeof(func) == "function") {
			func(box);
		}
		mobj.removeChild(box);
	}, true);
	//开始创建字符串元素
	name = (typeof(name) == "undefined") ? ("") : name;
	if(name != "") {
		var delf = document.createElement("div");
		delf.style.width = "100%";
		delf.style.position = "absolute";
		delf.style.zIndex = 2;
		delf.style.left = "0";
		delf.style.top = "60%";
		delf.style.backgroundColor = "white";
		delf.style.textAlign = "center";
		delf.style.height = "20%";
		delf.style.filter = "alpha(opacity=50)";
		delf.style.opacity = 0.5;
		box.appendChild(delf);

		var fs = $$().autoFontSize(1, name, [delf.offsetWidth, delf.offsetHeight], 30);
		delf.style.fontSize = fs;
		strobj = document.createElement("span");
		strobj.innerHTML = name;
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
	$$(obje).typeChange("offsetWidth", function() {
		if(type != 0) {
			var delvh = parseFloat(obje.offsetHeight) * 0.2;
			var delvw = delfv.offsetWidth;
			var delva = new Array(delvw, delvh);
			var delfsize = this.autoFontSize(1, "删除", delva, 24);
			del.style.fontSize = delfsize;
			if(type == 2) {
				th.style.fontSize = delfsize;
			}
		};
		if(name != "") {
			var fff = delf.offsetHeight;
			var a = new Array(box.offsetWidth, fff);
			var fsize = $$(box).autoFontSize(1, str, a, 24);
			delf.style.top = obje.offsetHeight - parseFloat(fff) + "px";
			delf.style.fontSize = fsize;
			//th.style.fontSize=fsize;
		};
	});
	box.processvalue = process;
	return box;
}

mdata.a.prototype.open = function(URL, titlename, width, height, argumentstr, type) {
	type = (typeof(type) == "undefined") ? 1 : type;
	var x = window.screen.availWidth;
	var y = window.screen.availHeight;
	switch(type) {
		case 1:
			var feature = "help=1;resizable=0;status=0;scroll=0;dialogHide=0;edge=raised";
			feature = feature + ";width=" + parseFloat(width) + ";height=" + parseFloat(height);

			feature = feature + ";dialogTop=" + parseInt((y - parseFloat(height)) * 0.4) + "px;dialogLeft=" + parseInt((x -
				parseFloat(width)) * 0.4) + "px";
			var m = window.showModalDialog(URL, titlename, feature, true);
			break;
		case 0:
			var feature = "location=0,menubar=0,resizable=0,scrollbars=0,status=0,toolbar=0,fullscreen=1,channelmode=1";
			feature = feature + ",dialogWidth=" + parseFloat(width) + ",dialogHeight =" + parseFloat(height);

			feature = feature + ",top=" + parseInt((y - parseFloat(height)) * 0.4) + ",left=" + parseInt((x - parseFloat(width)) *
				0.4);
			var m = window.open(URL, argumentstr, feature, true);
	}
	return m;
}

mdata.a.prototype.sys_fileDrop = function(config) {
	var obj = this.myobject;//选择器当前选择对象
	this.files=[];//创建的addImage对象合集
	this.filesjson={}//
	this.privateClass = "sys_fileDrop";//私有类名称
	this.dragBox;//
	this.inputObj;
	this.dragObj;
	this.txtObj;
	this.inputBox;
	this.uploadButtonObj;
	var that = this;
	var chunkSize=(typeof(config["chunkSize"])=="undefined")?512*1024:config["chunkSize"];
	config=(typeof(config) == "object")?config:{};
	var MaxFileType = (typeof(config["filetype"]) == "string") ? config["filetype"] : "";
	var MaxFileSize = (typeof(config["maxfilesize"]) == "number") ? config["maxfilesize"] : 150000 * 1024;
	this.loadcss = function() {
		try{
			var l=document.getElementsByClassName(that.privateClass+"-CSS");
			if (l.length>0) {
				return;
			}
			var lin = document.createElement("link");
			lin.setAttribute("class", that.privateClass+"-CSS");
			lin.setAttribute("rel", "stylesheet");
			var s=config["ROOTPATH"];
			if (s.match(/\/$/)) {
				
			}else{
				s=s+"/"
			}
			lin.setAttribute("href", "http://" + window.location.host + s +'css/controls/sys_fileDrop.css?v=' + Math.random())
			document.body.appendChild(lin);
		}catch(e){
			//TODO handle the exception
		}
	}	
	this.init=function(){
		that.dragBox = $$(obj).addEle("div", {
			"width": "100%",
			"height": "100%"
		}, {
			"class": that.privateClass + "-fileDropBox"
		});
		that.inputBox=$$(that.dragBox).addEle("div", {
			"width": "100%"		
		}, {
			"class": that.privateClass + "-inputbox"
		});
		
		that.inputObj = $$(that.inputBox).addEle("input", {"display":"inline-block"},{
			"type": "file",
			"class":that.privateClass+"-input",
			"accept": MaxFileType
		});
		if (typeof(config["uploadButton"])==true) {
			that.uploadButtonObj=$$(that.inputBox).addEle("button",0,{
				"class":that.privateClass+"-uploadButton"
			},"上传");
		} else{
			
		}
		
		that.inputTitle=$$(that.inputBox).addEle("span", {"color":"red","textAlign":"right","display":"block"},{
			"type": "file",
			"class":that.privateClass+"-span"
		});
		that.dragObj = $$(that.dragBox).addEle("div", {
			"position": "relative"
		},{
			"class":that.privateClass+"-div"
		});
		that.loadcss();
	}
	try{
		if(typeof(config["initEnable"])=="boolean" && config["initEnable"]==true){
			that.init();
		};
	}catch(e){
		//TODO handle the exception
	}
	this.addFile=function(file){	
		var l=0;
		var img = $$(that.dragObj).addImage({"setFileNameFunc":config["setFileNameFunc"],"type":2,"chunkSize":chunkSize,"openfunc":config["openfunc"],"ROOTPATH":config["ROOTPATH"],"file":file,"delFunc":function(s){
			try{
				if(that.inputTitle.innerHTML==file.name){
					that.inputTitle.innerHTML="";
				}
			}catch(e){
				//TODO handle the exception
			}
			deleteFile(l);
		},"changefunc":function(s){
			if(s.dbhave==1){
				var t=(typeof(img.file[config["ServerFileUpTime"]])=="undefined")?"":img.file[config["ServerFileUpTime"]];
				var size=s[config["ServerFileSize"]]/1024/1024;
				if (size<1) {
					size=parseInt(size*1000)+"KB"
				}else{
					size=size.toFixed(2)+"MB"
				}
				that.inputTitle.innerHTML=t+"  "+s[config["ServerFileName"]]+"  "+size;
				that.inputTitle.style.fontSize=$$(that.inputTitle).autoFontSize(0.05,that.inputTitle.innerHTML,0,30);
			}else{
				var size=s.size/1024/1024;
				if (size<1) {
					size=parseInt(size*1000)+"KB"
				}else{
					size=size.toFixed(2)+"MB"
				}
				that.inputTitle.innerHTML=s["name"]+"  "+size;
				that.inputTitle.style.fontSize=$$(that.inputTitle).autoFontSize(0.05,that.inputTitle.innerHTML,0,30);
			}
		}});
		img.init();
		l=(new Date()).valueOf().toString()
		that.filesjson[l]=img;
		that.files.push(img);
		$$(img.box).addEvent("click",function(){
			if(img.file.dbhave==1){
				var t=(typeof(img.file[config["ServerFileUpTime"]])=="undefined")?"":img.file[config["ServerFileUpTime"]];
				var size=img.file[config["ServerFileSize"]]/1024/1024;
				if (size<1) {
					size=parseInt(size*1000)+"KB"
				}else{
					size=size.toFixed(2)+"MB"
				}
				that.inputTitle.innerHTML=t+"  "+img.file[config["ServerFileName"]]+"  "+size;
				that.inputTitle.style.fontSize=$$(that.inputTitle).autoFontSize(0.05,that.inputTitle.innerHTML,0,30);
			}else{
				var size=img.file.size/1024/1024;
				if (size<1) {
					size=parseInt(size*1000)+"KB"
				}else{
					size=size.toFixed(2)+"MB"
				}
				that.inputTitle.innerHTML=img.file.name+"  "+size;
				that.inputTitle.style.fontSize=$$(that.inputTitle).autoFontSize(0.05,that.inputTitle.innerHTML,0,30);
			}
		})
	}
	var deleteFile = function(fileobj) {
		try{
			that.inputObj.value="";
		}catch(e){
			//TODO handle the exception
		}
		try {
			delete that.filesjson[fileobj];
		} catch(e) {
			//TODO handle the exception
		}
		that.files=[];
		for (var i in that.filesjson) {
			that.files.push(that.filesjson[i])
		}
	}

	$$(that.inputObj).addEvent("change", function(e) {
		var e = e || window.event;
		//获取 文件 个数 取消的时候使用
		var files = e.target.files;
		that.addFile(files[0]);
	})

	function handleFileDragEnter(e) {
		e.stopPropagation(); //zu
		e.preventDefault();
		obj.classList.add('filedrag');
	}

	function handleFileDragLeave(e) {
		e.stopPropagation();
		e.preventDefault();
		obj.classList.remove('filedrag');
	}

	function handleFileDragOver(e) {
		e.stopPropagation();
		e.preventDefault();
		e.dataTransfer.dropEffect = 'copy';
	}
	function handleFileDrop(e) {
		e.stopPropagation();
		e.preventDefault();
		obj.classList.remove('filedrag');
		var files = e.dataTransfer.files;
		for (var i=0;i<files.length;i++) {
			that.addFile(files[i]);
		}
	};
	$$(that.dragObj).addEvent('dragenter', handleFileDragEnter);
	$$(that.dragObj).addEvent('dragleave', handleFileDragLeave);
	$$(that.dragObj).addEvent('dragover', handleFileDragOver);
	$$(that.dragObj).addEvent("drop", handleFileDrop);

	return this;
}

mdata.a.prototype.create_selection = function(strarr, valuestrarr,func) {
	var selectobj = document.createElement("div");
	this.myobject.appendChild(selectobj);
	selectobj.style.overflow = "scroll";
	selectobj.setAttribute("class","create_selection");
	selectobj.style.overflowX = "hidden";
	selectobj.style.backgroundColor = "white";
	selectobj.setAttribute("tabindex", "0");
	selectobj.style.textAlign = 'center';
	selectobj.id = this.checkId('selection');

	var objs=[];
	for(i = 0; i < strarr.length; i++) {
		var opt = document.createElement("div");
		selectobj.appendChild(opt);
		opt.innerHTML = strarr[i];
		objs.push(opt);
		opt.style.cursor="default";
		opt.setAttribute("mouseenter","0")
		try{
			selectobj.value = valuestrarr[i];
		}catch(e){
			//TODO handle the exception
		}
		(function(i, opt, selectobj, valuestrarr) {
			$$(opt).addEvent("click", function() {
				if (typeof(func)=="function") {
					func(opt.innerHTML)
				}
				selectobj.selected = opt.innerHTML;
				try{
					selectobj.value = valuestrarr[i];
				}catch(e){
					//TODO handle the exception
				}
				for(i = 0; i < objs.length; i++) {
					objs[i].setAttribute("select","0")
				}
				opt.setAttribute("select","1")
				//selectobj.style.display = "none";
			});
			$$(opt).addEvent("mouseenter", function() {
				opt.setAttribute("mouseenter","1")
			});
			$$(opt).addEvent("mouseleave", function() {
				opt.setAttribute("mouseenter","0")
			});
		})(i, opt, selectobj, valuestrarr)
	};
	return selectobj;
};
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
mdata.a.prototype.create_selectboxddd = function(fatherobj, strarr, valuestrarr, default_select_index, width, height) {
	if(fatherobj && typeof(fatherobj) == "object") {
		obj = fatherobj;
	} else {
		obj = this.myobject;
	};
	var box = document.createElement("select");
	obj.appendChild(box);
	box.style.width = this.width_height(width);
	box.style.height = this.width_height(height);
	box.style.textAlign = 'left';
	box.id = this.checkId('selectbox');
	var opt = [];
	if(typeof(valuestrarr) != "object") {
		valuestrarr = new Array();
		for(i = 0; i < strarr.length; i++) {
			valuestrarr.push(i);
		};
	}
	for(i = 0; i < strarr.length; i++) {
		opt[i] = document.createElement("option");
		box.appendChild(opt[i]);
		opt[i].innerHTML = strarr[i];
	};
	return box;
};
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
	$$().pasteTable(to);
	return to;
};
/**
 * [创建一个table]
 * @param {Object} fatherobj       [创建table的父元素，其类型不为object时，父元素默认为选择器选择元素]
 * @param {Object} trheightarray   [tr高度数组，创建tr的数目是根据该数组的长度而定的]
 * @param {Object} tdwidtharray    [td宽度json数组，创建td的数目是根据该json数组中对应的tr数组的长度而定的。]
 */
mdata.a.prototype.create_tableEn = function(fatherobj, trheightarray, tdwidtharray) {
	var obj;
	if(fatherobj && typeof(fatherobj) == "object") {
		obj = fatherobj;
	} else {
		obj = this.myobject;
	};
	var to = document.createElement("table");
	obj.appendChild(to);
	to.style.float = "left";
	to.cellPadding = "0";
	to.style.padding = "0";
	to.style.margin = "0";
	to.style.overflow = "hidden";
	to.style.cursor = "default";
	to.style.borderCollapse = "collapse";
	var trobj;
	var tdobj;
	if(typeof(trheightarray) == "object") {
		for(i = 0; i < trheightarray.length; i++) {
			trobj = document.createElement("tr");
			to.appendChild(trobj);
			trobj.style.float = "left"
			trobj.style.height = parseInt(trheightarray[i]) / 100 * obj.offsetHeight + "px";
			if(typeof(tdwidtharray) == "object") {
				for(j = 0; j < tdwidtharray["tr" + i].length; j++) {
					tdobj = document.createElement("td");
					tdobj.style.float = "left";
					tdobj.style.height = parseInt(trheightarray[i]) / 100 * obj.offsetHeight + "px";
					tdobj.style.width = parseInt(tdwidtharray["tr" + i][j]) / 100 * obj.offsetWidth + "px";
					trobj.appendChild(tdobj);
				}
			} else {
				tdobj = document.createElement("td");
				tdobj.style.width = tdwidtharray;
				trobj.appendChild(tdobj);
			}
		};
	} else if(typeof(trheightarray) == "string") {
		trobj = document.createElement("tr");
		to.appendChild(trobj);
		if(typeof(tdwidtharray) == "object") {
			for(j = 0; j < tdwidtharray["tr0"].length; j++) {
				tdobj = document.createElement("td");
				tdobj.style.width = tdwidtharray["tr0"][j];
				trobj.appendChild(tdobj);
			}
		} else {
			tdobj = document.createElement("td");
			tdobj.style.width = tdwidtharray;
			trobj.appendChild(tdobj);
		}
	}
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
mdata.a.prototype.setMiddle = function(fatherobj, sonobj) {
	sonobj = (typeof(sonobj) == "undefined") ? (this.myobject) : (sonobj);
	sonobj.style.position = "relative";
	sonobj.style.top = (((fatherobj.offsetHeight - sonobj.offsetHeight) / 2) / fatherobj.offsetHeight) * 100 + "%";
	var sw = sonobj.borderWidth;
	if(typeof(sw) == "undefined") {
		sw = 0;
	}
	sonobj.style.left = (((fatherobj.offsetWidth - sonobj.offsetWidth - sw * 2) / 2) / fatherobj.offsetWidth) * 100 + "%";
};
mdata.a.prototype.remove = function(index) {
	if(isNaN(index) || index > this.length) {
		return false;
	}
	for(var i = 0, n = 0; i < this.length; i++) {
		if(this[i] != this[index]) {
			this[n++] = this[i]
		}
	}
	this.length -= 1
}
mdata.a.prototype.createBackImg = function(imgsrc, txt, width, height, py, px, pxwidth, pyheight, pxnum, pynum) {
	var div = $$().addEle("div");
	$$(div).mycss({
		"width": width,
		"height": height
	});
	var rwidth = div.offsetWidth;
	var rheight = div.offsetHeight;
	$$(div).removeElem();
	var mstyle = "style='width:" + width + ";height:" + height + ";background-image:url(" + imgsrc + ");";
	mstyle = mstyle + "background-size:" + pxnum * rwidth + "px  " + pynum * rheight + "px;";
	mstyle += "background-position:-" + (px - 1) * rwidth + "px  -" + (py - 1) * rheight + "px;";
	mstyle += "background-repeat:no-repeat;display:inline-block'";
	return "<table style='border-collapse:collapse;'><tr><td style='width:" + width + "'><div " + mstyle +
		"></div></td><td>" + txt + "</td></tr></table>";
}
mdata.a.prototype.setImg = function(imgsrc, width, height, py, px, pxwidth, pyheight, pxnum, pynum) {
	var obj = this.myobject;
	var div = $$(obj).addEle("div");

	$$(div).mycss({
		"width": width,
		"height": height,
	});
	var rwidth = div.offsetWidth;
	var rheight = div.offsetHeight;
	//console.log(pxnum , rwidth + "px  " , pynum ,rheight)
	$$(div).mycss({
		"backgroundImage": "url(" + imgsrc + ")",
		"background-size": "" + pxnum * rwidth + "px  " + pynum * rheight + "px",
		"background-position": "-" + (px - 1) * rwidth + "px  -" + (py - 1) * rheight + "px",
		"background-repeat": "no-repeat"
	});
	return div;
}
mdata.a.prototype.lunbo = function(width, height, imgSrc, imgHref, imgText, selectType, contentType, delaytime,
	movetime) {
	var obj = this.myobject;
	var imglength = imgSrc.length - 1;
	var thisImg = 0; //当前选择的图片
	var auto_timer = -1; //自动轮播定时器
	var auto_img_timer = -1;
	var auto_txt_timer = -1;
	var manual_select = -1; //手动选择标志
	var pc;
	var imgHreff = 0; //图片网址
	var contentObj = []; //图片说明区域元素合集
	var liobj = []; //图片选择区域元素合集
	var ul = new Object; //图片选择区域ul元素
	var go_on_timer = -1; //定时器
	var manual_img_timer = -1; //手动轮播图片定时器
	var manual_txt_timer = -1; //手动轮播内容定时器
	var auto_img_over_flag = 1; //动画完成标志，完成之后为0，否则为整数
	var auto_txt_over_flag = 1; //动画完成标志，完成之后为0，否则为整数
	var manual_img_over_flag = 1; //动画完成标志，完成之后为0，否则为整数
	var manual_txt_over_flag = 1; //动画完成标志，完成之后为0，否则为整数
	var left = right = 0; //左侧和右侧
	var left_right = []; //
	var flag = 0; //1的时候选择左侧，2的时候选择右侧
	//创建可见区域
	var that = this;
	var box = $$(obj).addEle("div", 0);
	$$(box).mycss({
		"width": this.width_height(width),
		"height": this.width_height(height),
		"position": "relative",
		"word-break": "keep-all",
		/* 不换行 */
		"white-space": "nowrap",
		/* 不换行 */
		"overflow": "hidden" /*超出隐藏*/
	});
	var rwidth = box.offsetWidth;
	var rheight = box.offsetHeight;
	//创建img区域
	var imgobj = [];
	for(var i = 0; i <= imglength; i++) {
		imgobj[i] = $$(box).addEle("img", 0);
		imgobj[i].setAttribute("src", imgSrc[i]);
		imgobj[i].setAttribute("index", i);
		imgobj[i].i = i;
		$$(imgobj[i]).mycss({
			"width": "100%",
			"height": "100%",
			"zIndex": "1",
			"left": rwidth * i + "px",
			"top": "0px"
		});
	}
	$$(box).addEvent("click", function() {
		window.open(imgHref[thisImg]);
	});
	/**
	 * 创建图片点击区域，上一张，下一张图片
	 */
	function createImgSelect() {
		//创建圆点区域
		switch(selectType) {
			case 0:
				ul = document.createElement('ul');
				box.appendChild(ul);
				for(i = 0; i <= imglength; i++) {
					var li = document.createElement('li');
					li.innerHTML = "●";
					ul.appendChild(li);
					liobj[i] = li;
					liobj[i].i = i;
				};
				break;
			case 1:
				ul = document.createElement('ul');
				box.appendChild(ul);
				for(i = 0; i < 3; i++) {
					var li = document.createElement('li');
					ul.appendChild(li);
					liobj[i] = li;
					liobj[i].i = i;
				};
				right = document.createElement("div");
				right.style.position = "relative";
				right.innerHTML = ">";
				right.i = 2;
				right.style.fontSize = 0.2 * height + "px";
				liobj[2].appendChild(right);

				left = document.createElement("div");
				left.style.position = "relative";
				left.style.fontSize = 0.2 * height + "px";
				left.innerHTML = "<";
				liobj[0].appendChild(left);
				left.i = 1;
				left_right[0] = left;
				left_right[1] = right;
		}
		init_ul_css(ul);
		init_li_css(liobj);
		liobj[thisImg].style.color = "white";
	}
	/**
	 * 创建图片说明区域
	 */
	function createContent() {
		//创建内容说明区域
		pc = $$(box).addEle("div");
		$$(pc).mycss({
			"position": "absolute",
			"width": '96%',
			"height": "16%",
			"top": "80%",
			"z-index": "2",
			'padding': '2% 2% 2% 2%',
			"filter": "alpha(opacity=40)",
			"opacity": "0.4",
			"-moz-opacity": "0.4",
			'cursor': "default",
			'overflow': "hidden",
			"backgroundColor": "gray"
		});
		for(i = 0; i <= imglength; i++) {
			var ls = $$(pc).addEle("div");
			$$(ls).mycss({
				"position": "absolute",
				"width": "100%",
				"height": "70%",
				"display": "inline-block",
				'text-overflow': 'ellipsis',
				"text-indent": "2em",
				'fontSize': "1em",
				'overflow': "hidden",
				'line-height': "1.5em",
				'left': i * rwidth + "px",
				'white-space': 'pre-wrap',
				'word-wrap': 'break-word',
				'word-break': 'normal'
			});
			contentObj[i] = ls;
			content(i);
		};
		switch(contentType) {
			case 0:
				for(i = 1; i <= imglength; i++) {
					contentObj[i].style.left = '0';
					contentObj[i].style.display = "none";
				};
				contentObj[0].style.left = "0";
				contentObj[0].style.display = 'inline-block';
				break;
		};
	};
	/**
	 * 给图片内容区域填写内容
	 */
	function content(i) {
		var textarea_width = contentObj[0].offsetWidth;
		var textarea_height = contentObj[0].offsetHeight;
		var fontContent = imgText[i];
		var fontsize = that.getFontSize("1em", "我");

		var textRows = Math.round(textarea_height / (fontsize.height * 1.5));
		var textarea_text = fontContent.substr(0, textRows * parseInt(textarea_width / fontsize.width) - 4) + "...";
		contentObj[i].innerHTML = textarea_text;
	}
	/**
	 * 初始化轮播器中的ul
	 */
	function init_ul_css(ulobj, xtextalign, xposition, xtop, xzindex, xheight, xfsize, xpadding) {
		switch(selectType) {
			case 0:
				$$(ulobj).mycss({
					'width': (imglength + 1) * 10 + "%",
					"height": (xheight ? xheight : '10%'),
					"position": "absolute",
					"float": "left",
					"textAlign": "center",
					'left': (100 - (imglength + 1) * 10) / 2 + "%",
					'margin': '0 0',
					'text-align': (xtextalign ? xtextalign : 'center'),
					'position': (xposition ? xposition : 'absolute'),
					'top': (xtop ? xtop : '70%'),
					'z-index': (xzindex ? xzindex : '20'),
					'font-size': (xfsize ? xfsize : '200%'),
					'padding': (xpadding ? xpadding : '0')
				});
				break;
			case 1:
				$$(ulobj).mycss({
					'width': "100%",
					"height": '100%',
					"position": "absolute",
					"float": "left",
					"textAlign": "center",
					'left': "0%",
					'margin': '0 0',
					'top': "0",
					'z-index': "20",
					'padding': "0"
				});
				break;
			default:
				break;
		}
	};
	/**
	 * 初始化轮播器中的li
	 */
	function init_li_css(liobjs, xcursor, xfloat, xheight, xcolor, xmargin, xpadding) {
		switch(selectType) {
			case 0:
				$$(liobjs).mycss({
					'width': Math.ceil(100 / (imglength + 1)) + "%",
					'list-style-type': 'none',
					'cursor': (xcursor ? xcursor : 'pointer'),
					'float': (xfloat ? xfloat : 'left'),
					'height': (xheight ? xheight : '100%'),
					'color': (xcolor ? xcolor : '#333'),
					'text-align': 'center',
					'top': '0%',
					"line-height": "100%",
					'padding': (xpadding ? xpadding : '0')
				});
				break;
			case 1:
				$$(liobjs).mycss({
					'width': "10%",
					'list-style-type': 'none',
					'cursor': 'pointer',
					'float': 'left',
					'height': '100%',
					'color': '#999',
					'text-align': 'center',
					'top': '0%',
					'padding': "0"
				});
				liobjs[1].style.width = "80%";
				left.style.width = "100%";
				left.style.color = "black";
				right.style.width = "100%";
				right.style.color = "black";
				var jk = this;
				left.style.top = (box.offsetHeight - left.offsetHeight) / 2 + "px";
				right.style.top = (box.offsetHeight - right.offsetHeight) / 2 + "px";
				$$(left).addEvent("mouseenter", function() {
					left.style.color = "white";
				})
				$$(left).addEvent("mouseleave", function() {
					left.style.color = "black";
				})
				$$(right).addEvent("mouseenter", function() {
					right.style.color = "white";
				})
				$$(right).addEvent("mouseleave", function() {
					right.style.color = "black";
				})
				break;
		}
	};
	/**
	 * 图片内容轮换样式为0时，不断变换内容
	 */
	function contentTypes0() {
		if(thisImg == 0) {
			contentObj[imglength].style.display = 'none';
		} else {
			contentObj[thisImg - 1].style.display = 'none';
		}
		contentObj[thisImg].style.display = 'inline-block';
	}
	/**
	 * 手动轮播时，动画过后，排位图片
	 */
	function manual_img_position() {
		for(var i = 0; i <= imglength; i++) {
			imgobj[i].style.left = rwidth * (i - thisImg) + "px";
		}
	};
	/**
	 * 手动轮播时，动画过后，排位内容
	 */
	function manual_txt_position() {
		for(var i = 0; i <= imglength; i++) {
			switch(contentType) {
				case 0:
					contentTypes0();
					break;
				case 1:
					contentObj[i].style.left = rwidth * (i - thisImg) + "px";
					break;
			};
		}
	};
	/**
	 * 自动轮播时，动画过后，重新排位图片
	 */
	function auto_img_position() {
		var n = Math.abs(thisImg - imglength);
		if(thisImg == 0) {
			for(i = 0; i <= imglength; i++) {
				imgobj[i].style.left = rwidth * i + 'px';
			}
		} else {
			for(var i = 0; i < thisImg; i++) {
				imgobj[i].style.left = rwidth * (i + n + 1) + "px";
			}
		}
	};

	/**
	 * 自动轮播时，动画过后，重新排位内容
	 */
	function auto_txt_position() {
		var n = Math.abs(thisImg - imglength);
		for(var i = 0; i < thisImg; i++) {
			switch(contentType) {
				case 0:
					contentTypes0();
					break;
				case 1:
					contentObj[i].style.left = rwidth * (i + n + 1) + "px";
					break;
			};
		}
		if(thisImg == 0 && contentType == 1) {
			for(i = 0; i <= imglength; i++) {
				contentObj[i].style.left = rwidth * i + "px";
			}
		}
	};
	/**
	 * 手动移动函数
	 * @param {Number} selectImg  [当前鼠标所选的图片索引，从0开始]
	 * @param {Number} type       [类型，0为自动切换，1为手动切换]
	 */
	function manual_moves(selectImg) {
		var x = 0
		var y = 0;
		var jj = thisImg;
		var m = thisImg;
		var j = selectImg;
		var n = Math.abs(j - m);
		if(n == imglength) {
			n = 1;
		}
		var movelength = n * rwidth;
		var end = 0;
		manual_select = selectImg;
		thisImg = selectImg;
		switch(selectType) {
			case 0:
				if(j > m) {
					end = -1 * movelength;
				} else {
					end = movelength;
				}
				break;
			case 1:
				switch(flag) {
					case 1:
						end = movelength;
						break;
					case 2:
						end = -1 * movelength;
						break;
				}
				break;
		}
		manual_img_over_flag = 1;
		manual_txt_over_flag = 1;
		switch(selectType) {
			case 0:
				liobj[thisImg].style.color = "#333";
				liobj[selectImg].style.color = "whitesmoke";
				break;
		}
		manual_img_timer = $$(imgobj).animate({
			"left": {
				"start": true,
				"end": end,
				"time": movetime,
				"speed": 10,
				"func": function() {
					x = x + 1;
					manual_img_over_flag = manual_img_over_flag + 1;
					if(x == imglength + 1) {
						if(selectType == 0) {
							manual_img_position();
						};
						manual_img_over_flag = 0;
					}
				}
			}
		}, 1);
		switch(contentType) {
			case 0:
				contentObj[thisImg].style.display = 'none';
				contentObj[selectImg].style.display = 'inline-block';
				break;
			case 1:
				manual_txt_timer = $$(contentObj).animate({
					"left": {
						"start": true,
						"end": end,
						"time": movetime,
						"speed": 10,
						"func": function() {
							y = y + 1;
							manual_txt_over_flag = manual_txt_over_flag + 1;
							if(y == imglength + 1) {
								manual_txt_over_flag = 0;
								if(selectType == 0) {
									manual_txt_position();
								}
							}
						}
					}
				}, 1);
				break;
		};
	}
	/**
	 * 清除定时器
	 * 手动选择图片时，如果选择第一个图片，第一个图片动起来，再选择第二个图片时，清除第一个图片的定时器
	 * 手动选择图片时，如果选择第一个图片，第一个内容动起来，再选择第二个图片时，要清除第一个内容定时器
	 * 
	 */
	function clearTimer() {
		if(typeof(manual_img_timer) == "object") {
			for(var i = 0; i < manual_img_timer.length; i++) {
				clearInterval(manual_img_timer[i]);
			}
			for(var i = 0; i < manual_txt_timer.length; i++) {
				clearInterval(manual_txt_timer[i]);
			}
		} else {
			clearInterval(manual_img_timer);
			clearInterval(manual_txt_timer);
		}
	}
	/**
	 * 手动轮播
	 * 鼠标进入轮播区域后：1.清除所有定时器。2.归位当前图片。3.归位图片说明
	 * 鼠标进入切换区域后：1.清除所有定时器。2.上一张选区变成白色。3.移动图片和文本说明。4.当前图片索引赋值给manual_select。5.当前选区变成选中状态
	 * 鼠标离开切换区域后：1.清除所有定时器。2.当前选区变白。3.manual_select=-1
	 * 
	 */
	function manual_move() {
		switch(selectType) {
			case 0:
				flag = 0;
				$$(ul.childNodes).addEvent("click", function(e) {
					clearInterval(auto_timer);
					clearInterval(auto_img_timer);
					clearInterval(auto_txt_timer);
					''
					clearTimeout(go_on_timer);
					clearTimer();
					liobj[thisImg].style.color = "#333";
					manual_img_position();
					manual_txt_position();
					manual_moves(e.target.i);
				}, true);
				$$(ul.childNodes).addEvent("mouseleave", function(e) {
					if(manual_select >= 0) {
						manual_img_position();
						manual_txt_position();
					}
				});
				$$(ul).addEvent("mouseleave", function(e) {
					if(manual_select >= 0) {
						manual_select = -1;
						if(manual_img_over_flag == 0) {
							auto_img_position();
						};
						if(manual_txt_over_flag == 0) {
							auto_txt_position();
						};
						go_on_timer = setTimeout(function() {
							auto_move();
						}, 100);
					}
				});
				break;
			case 1:
				$$(left_right).addEvent("click", function(e) {
					flag = e.target.i;
					clearInterval(auto_timer);
					clearInterval(auto_img_timer);
					clearInterval(auto_txt_timer);
					''
					clearTimeout(go_on_timer);
					clearTimer();
					switch(flag) {
						case 1:
							if(thisImg == 0) {
								manual_select = imglength;
							} else {
								manual_select = thisImg - 1;
							};
							imgobj[manual_select].style.left = -1 * rwidth + "px";
							contentObj[manual_select].style.left = -1 * rwidth + "px";
							break;
						case 2:
							if(thisImg == imglength) {
								manual_select = 0;
							} else {
								manual_select = thisImg + 1;
							};
							imgobj[manual_select].style.left = width + "px";
							contentObj[manual_select].style.left = width + "px";
							break;
					}
					manual_moves(manual_select);
				}, true);
				$$(left_right).addEvent("mouseleave", function(e) {
					if(manual_select >= 0) {
						manual_select = -1;
						auto_img_position();
						auto_txt_position();
						go_on_timer = setTimeout(function() {
							auto_move();
						}, 100);
					}
				}, true);
		}
	}
	/**
	 * 自动轮播
	 */
	function auto_move() {
		flag = 0;
		auto_timer = setInterval(function() {
			if(manual_select < 0) {
				if(liobj[thisImg]) {
					liobj[thisImg].style.color = "#333";
				}
				auto_img_position();
				auto_txt_position();
				thisImg = thisImg + 1;
				if(thisImg > imglength) {
					thisImg = 0;
				};
				if(liobj[thisImg]) {
					liobj[thisImg].style.color = "white";
				}
				auto_img_timer = $$(imgobj).animate({
					"left": {
						"start": true,
						"end": -1 * rwidth,
						"time": movetime,
						"speed": 10
					}
				}, 1);
				switch(contentType) {
					case 0:
						contentTypes0();
						break;
					case 1:
						auto_txt_timer = $$(contentObj).animate({
							"left": {
								"start": true,
								"end": -1 * rwidth,
								"time": movetime,
								"speed": 10
							}
						}, 1);
						break;
				};
			}
		}, delaytime);
	};
	/**
	 * 获取图片元素合集
	 */
	this.getImgObjects = function() {
		return imgobj;
	};
	/**
	 * 获取轮播图元素
	 */
	this.getBox = function() {
		return box;
	};
	/**
	 * 获取上一站或下一站选项元素合集
	 */
	this.getSelectObjs = function() {
		return liobj;
	};
	/**
	 * 获取上一站或下一站选项外壳元素
	 */
	this.getSelectBox = function() {
		return ul;
	};
	/**
	 * 获取选区内容元素合集
	 */
	this.getContentObjs = function() {
		return contentObj;
	};
	/**
	 * 获取选区内容元素合集
	 */
	this.getContentBox = function() {
		return pc;
	};
	createImgSelect();
	createContent();
	auto_move();
	manual_move();
};
mdata.a.prototype.getOpacityFromRgba = function(rgba) {
	var re = rgba.match(/[0-9.]{1,3}/g); //利用正则表达式去掉多余的部分，将rgb中的数字提取
	return parseFloat(re[3]);
}
mdata.a.prototype.RgbToHex = function(rgb) {
	var regexp = /[0-9]{1,3}/g;
	var re = rgb.match(regexp); //利用正则表达式去掉多余的部分，将rgb中的数字提取
	var hexColor = "#";
	var hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
	for(var i = 0; i < 3; i++) {
		var r = null,
			c = re[i],
			l = c;
		var hexAr = [];
		while(c > 16) {
			r = c % 16;
			c = (c / 16) >> 0;
			hexAr.push(hex[r]);
		}
		hexAr.push(hex[c]);
		if(l < 16 && l != "") {
			hexAr.push(0)
		}
		hexColor += hexAr.reverse().join('');
	}
	return hexColor;
	//return hex;
}

mdata.a.prototype.create_xAxis = function(x1, y1, width, num, kdwidth, strokeWidth, strokeColor, strokeOpacity) {
	var svgs = 'http://www.w3.org/2000/svg';
	var xpos = [];
	var g = document.createElementNS(svgs, 'g');
	this.myobject.appendChild(g);
	g.setAttribute("class", "xAxis");
	var xAxis = $$(g).create_Line(x1, y1 + strokeWidth, x1 + width, y1 + strokeWidth, strokeWidth, strokeColor,
		strokeOpacity);
	var jg = width / (num - 1);
	var obj = [];
	obj[0] = xAxis;
	g.style.filter = "alpha(opacity=" + strokeOpacity * 100 + ")";
	g.style.opacity = strokeOpacity;
	g.style.mozOpacity = strokeOpacity;
	for(i = 0; i < num; i++) {
		xpos[i] = x1 + i * jg;
		obj[i + 1] = $$(g).create_Line(xpos[i], y1 + strokeWidth, xpos[i], y1 + strokeWidth + kdwidth, strokeWidth,
			strokeColor, strokeOpacity);
	}
	return {
		"x": xpos,
		"y": y1 + strokeWidth,
		"objects": obj,
		"g": g
	};
}
mdata.a.prototype.refresh_xAxis = function(x1, y1, width, num, kdwidth, strokeWidth, strokeColor, strokeOpacity) {
	$$(this.myobject.objects[0]).refresh_Line(x1, y1 + strokeWidth, x1 + width, y1 + strokeWidth, strokeWidth,
		strokeColor, strokeOpacity);
	var jg = width / (num - 1);
	this.myobject.g.style.filter = "alpha(opacity=" + strokeOpacity * 100 + ")";
	this.myobject.g.style.opacity = strokeOpacity;
	this.myobject.g.style.mozOpacity = strokeOpacity;
	for(i = 0; i < num; i++) {
		var a = x1 + i * jg;
		$$(this.myobject.objects[i + 1]).refresh_Line(a, y1 + strokeWidth, a, y1 + strokeWidth + kdwidth, strokeWidth,
			strokeColor, strokeOpacity);
	}
}
mdata.a.prototype.create_yAxis = function(x1, y1, height, num, kdwidth, strokeWidth, strokeColor, strokeOpacity) {
	var svgs = 'http://www.w3.org/2000/svg';
	var ypos = [];
	var strokewidth = 1;
	var stroke = 'black';
	num = this.defaults(num, 5);
	kdwidth = this.defaults(kdwidth, 4);
	var g = document.createElementNS(svgs, 'g');
	g.setAttribute("class", "yAxis");
	this.myobject.appendChild(g);
	g.style.filter = "alpha(opacity=" + strokeOpacity * 100 + ")";
	g.style.opacity = strokeOpacity;
	g.style.mozOpacity = strokeOpacity;
	var yAxis = $$(g).create_Line(x1, y1, x1, y1 + height, strokewidth, stroke);
	var jg = height / (num - 1);
	var obj = [];
	obj[0] = yAxis;
	for(i = 0; i < num; i++) {
		ypos[i] = y1 + i * jg;
		obj[i + 1] = $$(g).create_Line(x1 - kdwidth, ypos[i], x1, ypos[i], strokewidth, stroke);
	}
	return {
		"x": x1,
		"y": ypos,
		"objects": obj,
		"g": g
	};
}
mdata.a.prototype.refresh_yAxis = function(x1, y1, height, num, kdwidth, strokeWidth, strokeColor, strokeOpacity) {
	$$(this.myobject.objects[0]).refresh_Line(x1, y1, x1, y1 + height, strokeWidth, strokeColor);
	var jg = height / (num - 1);
	this.myobject.g.style.filter = "alpha(opacity=" + strokeOpacity * 100 + ")";
	this.myobject.g.style.opacity = strokeOpacity;
	this.myobject.g.style.mozOpacity = strokeOpacity;
	for(i = 0; i < num; i++) {
		var ypos = y1 + i * jg;
		$$(this.myobject.objects[i + 1]).refresh_Line(x1 - kdwidth, ypos, x1, ypos, strokeWidth, strokeColor);
	}
}
mdata.a.prototype.create_xAxis_text = function(x0, y0, width, textarr, fontSize, fontColor, fontOpacity, xtype, obj) {
	var svgs = 'http://www.w3.org/2000/svg';
	xtype = this.defaults(xtype, 0);
	var g = document.createElementNS(svgs, 'g');
	g.setAttribute('class', 'xtext');
	this.myobject.appendChild(g);
	var textobj = [];
	switch(xtype) {
		//如果X轴为散列值，所谓的散列值，指的是类似于棒图的X轴，此时obj应该传入棒图rect的数组
		case 0:
			var xwidth = width / (textarr.length + 1);
			for(i = 0; i < textarr.length; i++) {
				var ls = this.getFontSize(fontSize, textarr[i]);
				var x = parseFloat(obj[i].getAttribute("x")) + (parseFloat(obj[i].getAttribute("width")) - ls.width) / 2;
				textobj[i] = $$(g).create_text(x, y0 + ls.height, textarr[i], fontSize, fontColor, fontOpacity);
			};
			break;
			//如果X轴为连续值，所谓的连续值，指的是类似于曲线的X轴，此时obj应该传入x轴背景网格的数组
		case 1:
			var xwidth = width / (textarr.length - 1);
			for(i = 0; i < textarr.length; i++) {
				var ls = this.getFontSize(fontSize, textarr[i]);
				var x = parseFloat(x0) + xwidth * i - ls.width / 2;
				textobj[i] = $$(g).create_text(x, y0 + ls.height, textarr[i], fontSize, fontColor, fontOpacity);
			};
			break;
	}
	return {
		"textobjs": textobj,
		"g": g
	};
}
mdata.a.prototype.refresh_xAxis_text = function(x0, y0, width, textarr, fontSize, fontColor, fontOpacity, xtype, obj) {
	var objects = this.myobject.textobjs;
	switch(xtype) {
		//如果X轴为散列值，所谓的散列值，指的是类似于棒图的X轴，此时obj应该传入棒图rect的数组
		case 0:
			var xwidth = width / (textarr.length + 1);
			for(i = 0; i < textarr.length; i++) {
				var ls = this.getFontSize(fontSize, textarr[i]);
				var x = parseFloat(obj[i].getAttribute("x")) + (parseFloat(obj[i].getAttribute("width")) - ls.width) / 2;
				$$(objects[i]).refresh_text(x, y0 + ls.height, textarr[i], fontSize, fontColor, fontOpacity);
			};
			break;
			//如果X轴为连续值，所谓的连续值，指的是类似于曲线的X轴，此时obj应该传入x轴背景网格的数组
		case 1:
			var xwidth = width / (textarr.length - 1);
			for(i = 0; i < textarr.length; i++) {
				var ls = this.getFontSize(fontSize, textarr[i]);
				var x = parseFloat(x0) + xwidth * i - ls.width / 2;
				$$(objects[i]).refresh_text(x, y0 + ls.height, textarr[i], fontSize, fontColor, fontOpacity);
			};
			break;
	}
}
mdata.a.prototype.create_yAxis_text = function(x0, y0, height, width, num, max, min, fontSize, fontColor, fontOpacity,
	aligntype, ytype) {
	var svgs = 'http://www.w3.org/2000/svg';
	aligntype = this.defaults(aligntype, 0);
	ytype = this.defaults(ytype, 0);
	var g = document.createElementNS(svgs, 'g');
	g.setAttribute('class', "ytext");
	this.myobject.appendChild(g);
	var textarr = new Array;
	var jg = Math.abs(max - min) / (num - 1);
	//生成y轴数据数组，从大到小排列
	for(i = 0; i < num; i++) {
		textarr[num - i - 1] = (min + jg * i).toFixed(1);
	};
	var textobj = new Array();
	var yheight = height / (num - 1);
	for(i = 0; i < num; i++) {
		switch(aligntype) {
			case 0:
				var ls = this.getFontSize(fontSize, textarr[0]);
				textobj[i] = $$(g).create_text(0, y0 + i * yheight + ls.height / 3, textarr[i], fontSize, fontColor, fontOpacity,
					aligntype);
				break;
			case 1:
				var ls = this.getFontSize(fontSize, textarr[i]);
				textobj[i] = $$(g).create_text(width - ls.width, y0 + i * yheight + ls.height / 3, textarr[i], fontSize, fontColor,
					fontOpacity, aligntype);
				break;
			case 2:
				var ls = this.getFontSize(fontSize, textarr[i]);
				textobj[i] = $$(g).create_text((width - ls.width) / 2, y0 + i * yheight + ls.height / 3, textarr[i], fontSize,
					fontColor, fontOpacity, aligntype);
				break;
		}
	};
	return {
		"textobjs": textobj,
		"g": g
	};
}
mdata.a.prototype.refresh_yAxis_text = function(x0, y0, height, width, num, max, min, fontSize, fontColor, fontOpacity,
	aligntype, ytype) {
	var textarr = new Array;
	var jg = Math.abs(max - min) / (num - 1);
	//生成y轴数据数组，从大到小排列
	for(i = 0; i < num; i++) {
		textarr[num - i - 1] = (min + jg * i).toFixed(1);
	};
	var yheight = height / (num - 1);
	for(i = 0; i < num; i++) {
		switch(aligntype) {
			case 0:
				var ls = this.getFontSize(fontSize, textarr[0]);
				$$(this.myobject[i]).refresh_text(0, y0 + i * yheight + ls.height / 3, textarr[i], fontSize, fontColor,
					fontOpacity, aligntype);
				break;
			case 1:
				var ls = this.getFontSize(fontSize, textarr[i]);
				$$(this.myobject[i]).refresh_text(width - ls.width, y0 + i * yheight + ls.height / 3, textarr[i], fontSize,
					fontColor, fontOpacity, aligntype);
				break;
			case 2:
				var ls = this.getFontSize(fontSize, textarr[i]);
				$$(this.myobject[i]).refresh_text((width - ls.width) / 2, y0 + i * yheight + ls.height / 3, textarr[i], fontSize,
					fontColor, fontOpacity, aligntype);
				break;
		}
	};
}
mdata.a.prototype.Scale = function(scalearr, pxtop, height, data) {
	var newdata;
	var new_scale_max = Math.max.apply(null, scalearr);
	var new_scale_min = Math.min.apply(null, scalearr);
	var a = (new_scale_max - new_scale_min);
	var bili = Math.abs((height - pxtop) / a);
	if(typeof(data) == "object") {
		newdata = new Array();
		for(i = 0; i < data.length; i++) {
			newdata[i] = -data[i] * bili - new_scale_min * bili;
		};
	}
	if(typeof(data) == "number") {
		newdata = (data - new_scale_min) * bili - new_scale_min * bili;
	}

	return {
		'newdata': newdata,
		'bili': bili
	};
}

mdata.a.prototype.webSocketClient = function(ip, port) {
	var url = "ws://" + ip + ":" + port + "";
	var ws;
	this.open = function() {
		ws = new WebSocket(url);
	};
	this.sendmsg = function(str) {
		ws.send(str);
	};
	this.close = function() {
		ws.close();
	};
	/**
	 * 为websocket添加监听事件
	 * @param {String}   eventstr    [event事件，有四种，分别是open/message/error/close]
	 * @param {Function} func        [要执行的事件]
	 */
	this.onevent = function(eventstr, func) {
		ws.addEventListener(eventstr, function(e) {
			func();
		});
	};
	/**
	 * 获取socket
	 */
	this.socket = function() {
		return ws;
	};
	return this;
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
//添加一个图文说明元素
mdata.a.prototype.addImgS = function(obj, src, content) {
	var name = "";
	if(typeof(content) == "undefined") {
		name = src.match(/([^\/]*$)/)[1];
	} else {
		name = content;
	};
	var div = $$(obj).addEle("div", {
		"display": "inline-block",
		"width": "64px",
		"height": "84px",
		"margin": "20px"
	}, 0);
	var img = $$(div).addEle("img", {
		"width": "64px",
		"height": "64px"
	}, {
		"src": src
	});
	var divc = $$(div).addEle("div", {
		"width": "100%",
		"height": "18px",
		"overflow": "hidden",
		"text-align": "center",
		"display": "inline-block"
	}, 0);
	divc.innerHTML = name;
	var fs = this.autoFontSize(0.1, name, divc, 30);
	divc.style.fontSize = fs;
};
mdata.a.prototype.previewBigImg = function() {
	var jt = $$();
	var img;
	var index = -1;
	var tb;
	var srcs = [];
	var cycle_enable = false;
	//遮罩区域
	var mask = jt.addEle("div", {
		"cursor": "default",
		"width": "100%",
		"height": "100%",
		"zIndex": "9002",
		"position": "absolute",
		"float": "left",
		"top": "0",
		"left": "0",
		"background": "rgba(0,0,0,0.7)"
	});
	$$(mask).unSelect();
	img = $$(mask).addEle("img", {
		"width": "80%",
		"height": "80%",
		"top": "10%",
		"left": "10%",
		"position": "relative"
	}, {
		"src": ""
	});
	tb = $$(mask).create_table(0, ["100%"], {
		"tr0": ["10%", "80%", "10%"]
	});
	$$(tb).mycss({
		"width": "80%",
		"height": "80%",
		"top": "10%",
		"left": "10%",
		"position": "absolute"
	});
	var left = $$(tb.tr[0].td[0]).addEle("div", {
		"color": "red",
		"position": "relative"
	});
	left.innerHTML = "<<";
	left.style.fontSize = "80px";
	$$().setMiddle(tb.tr[0].td[0], left);
	left.style.display = "none";
	$$(tb.tr[0].td[0]).addEvent("mouseenter", function() {
		left.style.display = "block";
		tb.tr[0].td[0].style.background = "rgba(0,0,0,0.5)";
	})
	$$(tb.tr[0].td[0]).addEvent("mouseleave", function() {
		left.style.display = "none";
		tb.tr[0].td[0].style.background = "";
	});
	$$(tb.tr[0].td[0]).addEvent("click", function() {
		index -= 1;
		if(index < 0) {
			if(cycle_enable) {
				index = srcs.length - 1;
			} else {
				index = 0;
			}
		};
		img.src = srcs[index];
	}, true);
	var right = $$(tb.tr[0].td[2]).addEle("div", {
		"color": "red",
		"position": "relative"
	});
	right.innerHTML = ">>";
	right.style.fontSize = "80px";
	$$().setMiddle(tb.tr[0].td[0], right);
	right.style.display = "none";
	$$(tb.tr[0].td[2]).addEvent("mouseenter", function() {
		right.style.display = "block";
		tb.tr[0].td[2].style.background = "rgba(0,0,0,0.5)";
	});
	$$(tb.tr[0].td[2]).addEvent("mouseleave", function() {
		right.style.display = "none";
		tb.tr[0].td[2].style.background = "";
	});
	$$(tb.tr[0].td[2]).addEvent("click", function() {
		index += 1;
		if(index > srcs.length - 1) {
			if(cycle_enable) {
				index = 0;
			} else {
				index = srcs.length - 1;
			}
		};
		img.src = srcs[index];
	}, true);
	$$(mask).addEvent("click", function() {
		mask.style.display = "none";
	}, true);
	mask.style.display = "none";
	this.addSrc = function(url) {
		srcs.push(url);
	};
	this.cycle_Enable = function(enable) {
		cycle_enable = $$().defaults(enable, false);
	};
	this.setSrcS = function(urls) {
		srcs = urls;
	};
	this.setSrcFromUrl = function(url) {
		mask.style.display = "block";
		img.src = url;

	};
	this.setSrcFromIndex = function(index) {
		for(var i = 0; i < srcs.length; i++) {
			if(i == index) {
				mask.style.display = "block";
				img.src = srcs[index];
			}
		}
	};
	this.delSrcFromUrl = function(url) {
		for(var i = 0; i < srcs.length; i++) {
			if(url == srcs[i]) {
				srcs.splice(i, 1);
			}
		}
	};
	this.delSrcFromIndex = function(index) {
		srcs.splice(index, 1);
	};
	this.getMask = function() {
		return mask;
	}
	return this;
}
mdata.a.prototype.fileUpload = function() {
	var mdata = $$();
	this.LocalUpLoad = function(obj) {
		var LocalUpLoadTable; //本地上传的总表格
		var input; //input file按钮
		var up; //上传按钮
		var process; //进度条
		var processTips; //上传时候文字提示元素
		var files = []; //文件元素数组
		var filesImgs = []; //文件预览图片元素数组
		var preview_width = 64; //预览区宽度
		var preview_height = 64; //预览区高度
		var sliceLength = 102400; //切片长度，单位KB
		var start = 0; //切片起始点
		var end = sliceLength; //切片结束点
		var blobs = []; //数组，该数组包含每一个文件的所有切片文件，blobs[0]存放了f[0]的所有切片文件
		var md5s = []; //数组，该数组包含没一个文件的所有切片片段的md5，入md5s[0][0]存放blobs[0][0]的md5校验，即第一个file文件的第一个切片md5
		var request; //ajax对象
		var box; //按钮区表格
		var inputChangeCall;
		var preview = mdata.previewBigImg(); //生成预览图
		preview.cycle_Enable(true);
		this.initTable = function(urls) {
			var url = urls;
			//创建本地上传的总表格
			LocalUpLoadTable = mdata.create_table(obj, ["40px", "100% - 40px"], {
				"tr0": ["40%", "10%", "20%", "30%"],
				"tr1": ["100%"]
			});
			LocalUpLoadTable.tr[1].td[0].style.textAlign = "left";
			LocalUpLoadTable.tr[1].style.overflow = "auto";
			LocalUpLoadTable.tr[1].style.overflowY = "auto";
			LocalUpLoadTable.tr[1].td[0].style.colSpan = 4;
			//创建input文件
			LocalUpLoadTable.tr[0].style.display = "";
			input = $$(LocalUpLoadTable.tr[0].td[0]).addEle("input", {
				"width": "80%",
				"position": "relative"
			}, {
				"type": "file",
				"multiple": "multiple"
			});
			//创建上传按钮
			up = $$(LocalUpLoadTable.tr[0].td[1]).addEle("button", {
				"width": "100%",
				"position": "relative"
			});
			$$(up).HTML("上传文件");
			$$(up).addEvent("click", function() {
				upLoad(url);
			});
			//创建文件上传进度div
			var proce = $$(LocalUpLoadTable.tr[0].td[2]).addEle("div", {
				"width": "80%",
				"height": "16px",
				"display": "inline-block",
				"border": "1px solid black",
				"position": "relative",
				"text-align": "left",
				"border-radius": "10px"
			});
			process = $$(proce).addEle("div", {
				"width": "0",
				"height": "100%",
				"position": "relative",
				"backgroundColor": "limegreen",
				"display": "inline-block",
				"border-radius": "10px"
			});
			process.innerHTML = "0%";
			process.style.textAlign = "right";
			//文件上传显示提示文字区域
			processTips = LocalUpLoadTable.tr[0].td[3];
			LocalUpLoadTable.tr[0].td[3].style.color = "red";
			LocalUpLoadTable.tr[0].td[3].style.lineHeight = LocalUpLoadTable.tds[3].offsetHeight + "px";
			LocalUpLoadTable.tr[0].td[3].innerHTML = "等待上传";

			mdata.setMiddle(LocalUpLoadTable.tr[0].td[0], input);
			mdata.setMiddle(LocalUpLoadTable.tr[0].td[1], up);
			mdata.setMiddle(LocalUpLoadTable.tr[0].td[2], proce);
			mdata.setMiddle(LocalUpLoadTable.tr[0].td[3], processTips);
			//设置拖拽区域以及拖拽函数
			var df = [];
			var g = function() {
				for(var s in df[0][0]) {
					var k = df[0][0][s]; //imgstr,name,width,height
					var img;
					(function(k) {
						var src = getFileImg(k);
						img = $$(LocalUpLoadTable.tr[1].td[0]).uploadFileImgElem(src, k.name, preview_width + "px", preview_height +
							20 + "px",
							function(obj) {
								delete filesImgs[obj.getAttribute("index")];
								delete files[obj.getAttribute("index")];
								preview.delSrcFromUrl(src);
							});
						preview.addSrc(src);
						$$(img).addEvent("click", function() {
							preview.setSrcFromUrl(src);
						})
					})(k);
					img.setAttribute("index", filesImgs.length);
					filesImgs.push(img);
					files.push(k.files);
				};

			};
			$$(LocalUpLoadTable).fileDrop(df, g);
			//设置input上传功能
			inputChangeCall = function() {
				processTips.innerHTML = "正在检测文件..请稍后";
				$$(up).mytype("disabled", "true");
				var lsfiles = input.files;
				if(lsfiles.length > 0) {
					if(window.FileReader) {
						for(var i = 0, fi; fi = lsfiles[i]; i++) {
							(function(i, fi, files) {
								var reader = new FileReader();
								reader.readAsDataURL(fi);
								reader.onloadend = function(e) {
									var nf = new Object();
									nf.files = fi;
									nf.name = fi["name"];
									nf.src = e.target.result;
									var src = getFileImg(nf);
									img = $$(LocalUpLoadTable.tr[1].td[0]).uploadFileImgElem(src, nf.name, preview_width + "px",
										preview_height + 20 + "px",
										function(obj) {
											delete filesImgs[obj.getAttribute("index")];
											delete files[obj.getAttribute("index")];
											preview.delSrcFromUrl(src);
										});
									preview.addSrc(src);
									$$(img).addEvent("click", function() {
										preview.setSrcFromUrl(src);
									})
									img.setAttribute("index", filesImgs.length);
									processTips.innerHTML = "文件检测完毕";
									up.removeAttribute("disabled");
									filesImgs.push(img);
									files.push(nf.files);
								};
							})(i, fi, files);
						};
					}
				} else {
					up.removeAttribute("disabled");
					processTips.innerHTML = "文件检测完毕";
				}
			}
			$$(input).addEvent("change", function() {
				inputChangeCall();
			});
		}
		//设置文件类型，type为accept许可的字符串，不同格式之间，/隔开
		var setFileType = function(type) {
			input.setAttribute("accept", type);
		};
		//页面读取完毕文件之后执行的函数
		var setFunc = function(fun) {
			func = fun;
		};
		//获取最后一次上传的文件
		var getLastFile = function() {
			return files[files.length];
		};
		//获取当前文件数组
		var getFiles = function() {
			return files;
		};
		//设置切片大小
		var setSliceLength = function(length) {
			sliceLength = length;
			start = 0;
			end = sliceLength;
		};
		//进行文件切片
		var fileSlice = function() {
			for(var i = 0; i < files.length; i++) {
				blobs[i] = [];
				start = 0;
				end = sliceLength;
				while(end < files[i]["size"] + sliceLength) {
					blobs[i].push(files[i].slice(start, end));
					start = end;
					end += sliceLength;
				}
			};
		}
		//从切片文件hash出md5
		var hashSlice = function() {
			md5s = new Array(blobs.length);
			for(var i = 0; i < blobs.length; i++) {
				md5s[i] = new Array(blobs[i].length);
				for(var j = 0; j < blobs[i].length; j++) {
					(function(i, j) {
						spark = new SparkMD5.ArrayBuffer();
						var fileReader = new FileReader();
						fileReader.readAsArrayBuffer(blobs[i][j]);
						fileReader.onload = function(e) {
							spark.append(e.target.result);
							md5s[i][j] = spark.end();
						};
					})(i, j)
				}
			}
		}
		//获取文件预览图片，如果是文件直接是该图片的预览图，如果是其他文件，
		var getFileImg = function(file) {
			var name = file["name"];
			var type = $$().reg(name, /\.([\W\w]*$)/i, 1); //
			var imgsrc = "./img/AllFilesImg.png";
			var rs = "";
			switch(type.toLowerCase()) {
				case "png":
				case "jpg":
				case "gif":
				case "bmp":
				case "jpeg":
					rs = file.src;
					break;
				default:
					rs = "./img/file.png"
					break;
			}
			return rs;
		}
		var upLoad = function(urls) {
			url = urls;
			//创建ajax对象
			createRequest();
			//重新整理要发送的文件
			arrangeMentFiles();
			//先对所有的文件进行切片
			fileSlice();
			//获取所有文件切片的hash值
			hashSlice();
			var sliceIndex = 0;
			//稍微等待一会，等hash值校验出来，如果不等待，可能hash值还没出来，数据就发送出去了
			setTimeout(function() {
				UploadSingleSlice(sliceIndex, urls);
			}, 200);
		};
		//创建ajax对象
		var createRequest = function() {
			if(window.navigator.userAgent.indexOf("MSIE") >= 1) {
				request = new ActiveXObject("Microsoft.XMLHttp");
			} else {
				request = new XMLHttpRequest();
			};
		};
		//上传之前，重新整理文件数组，因为有些文件可能选中之后又被删掉了
		var arrangeMentFiles = function() {
			var nf = files;
			var nfobjs = filesImgs;
			files = [];
			filesImgs = [];
			for(var i = 0; i < nf.length; i++) {
				if(typeof(nf[i]) == "object") {
					var obj = nf[i];
					files[i] = obj;
					filesImgs.push(nfobjs[i]);
				}
			};
		};
		//发送单个数据片
		var guid = "";
		var UploadSingleSlice = function(sliceIndex, urls) {
			var form = new FormData();
			if(sliceIndex == 0) {
				guid = mdata.guid();
			};
			form.append("hash", md5s[0][sliceIndex]);
			form.append("GUID", guid); //总文件个数
			form.append("FileNum", files.length); //总文件个数
			form.append("FileName", files[0].name); //当前文件名
			form.append("FileSliceNum", blobs[0].length); //当前文件切片数目
			form.append("fileIndex", 0); //当前文件索引号
			form.append("sliceIndex", sliceIndex); //当前切片索引号
			form.append("md5", md5s[0][sliceIndex]);
			form.append("localFileUpLoad", blobs[0][sliceIndex]);
			request.open("post", urls + "?new=" + parseInt(1000 * Math.random()), true);
			//侦查当前切片上传情况
			request.upload.onprogress = function(evt) {
				var loaded = evt.loaded;
				var tot = evt.total;
				var jk = loaded / tot;
				var jls = loaded + sliceIndex * sliceLength;
				var per = 100 * (jls / files[0]["size"]);
				per = per.toFixed(2);
				if(per >= 100) {
					per = 100;
				}
				//已经上传的百分比
				process.style.width = per + "%";
				process.innerHTML = per + "%";
				processTips.innerHTML += ".";
				if(sliceIndex % 5) {
					processTips.innerHTML = "正在上传";
				}
				filesImgs[0].processvalue.innerHTML = per + "%";
				filesImgs[0].processvalue.style.width = per + "%";
				if(per == 100) {
					processTips.innerHTML = "上传成功！";
				}
			};
			request.onreadystatechange = function() {
				if(request.readyState == 4) {
					if(request.status >= 200 && request.status < 300) {
						if(this.responseText == "failed") {
							setTimeout(function() {
								UploadSingleSlice(sliceIndex, urls);
							}, 50);
						} else {;
							sliceIndex += 1;
							if(sliceIndex == blobs[0].length) {
								sliceIndex = 0;
								$$(filesImgs[0]).removeElem();
								filesImgs.splice(0, 1);
								blobs.splice(0, 1);
								md5s.splice(0, 1);
								files.splice(0, 1);
							};
							//////console.log("总共"+blobs.length+"个文件，第"+fileIndex+"个文件,当前文件有"+blobs[fileIndex].length+"个片段，第"+sliceIndex+"个片段");
							if(blobs[0]) {
								if(sliceIndex < blobs[0].length && files.length > 0) {
									setTimeout(function() {
										UploadSingleSlice(sliceIndex, urls);
									}, 50);
								} else {

								}
							} else {
								processTips.innerHTML = "文件全部上传成功！";
								$$(input).removeElem();
								//创建input文件
								input = $$(LocalUpLoadTable.tr[0].td[0]).addEle("input", {
									"width": "80%",
									"position": "relative"
								}, {
									"type": "file",
									"multiple": "multiple"
								});
								$$().setMiddle(LocalUpLoadTable.tr[0].td[0], input);
								$$(input).addEvent("change", function() {
									inputChangeCall();
								});
								//input.setAttribute("value","");
							}

						}
					}
				}
			};
			request.send(form);
		};

		return this;
	}
	this.serverFiles = function(obj) {
		var serverFileTable; //服务器总表格
		var request = new Object();
		var selectType; //选择文件类型
		var inputName; //输入文件名称
		var sendSure; //确认按钮
		this.initTable = function() {
			//创建服务器的总表格
			serverFileTable = mdata.create_table(obj, ["40px",
				"100% - 40px - 2px  style.overflow=auto  style.overflowY=auto "
			], {
				"tr0": ["33.33%", "33.33%", "33.34%"],
				"tr1": ["100%  style.textAlign=left"]
			});
			var check = sys_selectmenu(serverFileTable.tr[0].td[0]);
			check.init(["图片", "文档", "视频", "压缩文件", "程序", "其他文件"], 0, 100, 20);
			inputName = $$(serverFileTable.tr[0].td[1]).addEle("input", 0, {
				"type": "text",
				"value": "请输入文件名",
				"onfocus": "javascript:if(this.value=='请输入文件名')this.value=''",
				"onblur": "javascript:if(this.value=='') this.value='请输入内容'"
			}, "");
			sendSure = $$(serverFileTable.tr[0].td[2]).addEle("button", {
				"width": "50%"
			}, 0, "查询");
			selectType = check.getObjects();
			$$().setMiddle(serverFileTable.tr[0].td[0], selectType);
			$$().setMiddle(serverFileTable.tr[0].td[1], inputName);
			$$().setMiddle(serverFileTable.tr[0].td[2], sendSure);
		};

		//创建ajax对象
		this.sendPost = function(url, filepath, filetype) {
			var that = this;
			if(window.navigator.userAgent.indexOf("MSIE") >= 1) {
				request = new ActiveXObject("Microsoft.XMLHttp");
			} else {
				request = new XMLHttpRequest();
			};
			var form = new FormData();
			form.append("getServerFiles", true);
			form.append("filePath", filepath);
			form.append("filetype", filetype);
			request.open("post", url + "?new=" + parseInt(1000 * Math.random()), true);
			request.onreadystatechange = function() {
				if(request.readyState == 4) {
					if(request.status >= 200 && request.status < 300) {
						var a = JSON.parse(request.responseText);
						for(var i = 0; i < a.length; i++) {
							$$().addImgS(serverFileTable.tds[3], a[i]);
						}
					}
				}
			};
			request.send(form);
		};
		return this;
	}
	this.internetFile = function(obj) {
		var d = $$(obj).addEle("div", {
			"width": "100%",
			"textAlign": "center"
		});
		$$(d).addEle("span", 0, 0, "请输入图片网址:");
		$$(d).addEle("input", {
			"width": "90%"
		}, {
			"type": "text"
		});
		$$(d).addEle("button", 0, {
			"width": "30px"
		}, "确定");
		$$().setMiddle(obj, d);
	}
	return this;
};

//复合组件
mdata.a.prototype.sys_selectmenu22 = function() {
	this.that = this;
	this.box = null;
	this.timer = null;
	this.scanTime = 100;
	this.RunCyccallbacks = []; //运行时周期执行事件
	this.Initcallbacks = []; //初始化完毕执行事件
	this.changeEvent = []; //选项改变事件
	this.box; //下拉框外壳元素
	this.displayObj; //下拉框显示区域元素
	this.selectObj; //下拉框下拉区域
	this.array_inhtml0 = [];
	this.array_inhtml1 = [];
	this.array_strs = [];
	this.array_values = [];
	this.tableObj;
	this.width = 100;
	this.height = 100;
	this.selectDefaultHeight = 200; //下拉框默认最大高度
	this.mouseColor = "green";
	this.d1 = "20%";
	this.d2 = "80%";
	this.addRunCycFunc = function(callback) {
		this.RunCyccallbacks[this.RunCyccallbacks.length] = callback;
		return this.RunCyccallbacks.length - 1;
	}
	this.addInitFunc = function(callback) {
		this.Initcallbacks[this.Initcallbacks.length] = callback;
		return this.Initcallbacks.length - 1;
	}
	this.addEvent = function(eventtype, handler, type) {
		$$(this.box).addEvent(eventtype, handler, type);
		$$(this.selectObj).addEvent(eventtype, handler, type);
	};
	this.addChangeEvent = function(handler) {
		this.changeEvent.push(handler);
	};
	this.addSelect = function(inhtml0, inhtml1, str, value, type, func) {
		type = $$().defaults(type, 0);
		if(!inhtml0) {
			inhtml0 = "";
		}
		if(!inhtml1) {
			inhtml1 = "";
		}
		if(!str) {
			str = "";
		}
		if(type == 0) {
			this.array_inhtml0.push(inhtml0);
			this.array_inhtml1.push(inhtml1);
			this.array_strs.push(str);
			this.array_values.push(value);
		}
		var opt = document.createElement("tr");
		$$(opt).mytype({
			"value": value,
			"str": str,
			"selectIndex": this.tableObj.tr.length
		});
		opt.style.width = "100%";
		opt.style.position = "relative";
		this.tableObj.appendChild(opt);
		this.tableObj.tr.push(opt);
		this.tableObj.tr[this.tableObj.tr.length - 1].td = [];
		var optd0 = document.createElement("td");
		optd0.innerHTML = inhtml0;
		optd0.setAttribute('value', value);
		optd0.setAttribute('str', str);
		optd0.style.width = this.d1;
		optd0.style.textAlign = "center";
		opt.appendChild(optd0);
		this.tableObj.tr[this.tableObj.tr.length - 1].td.push(optd0);
		var optd1 = document.createElement("td");
		optd1.innerHTML = inhtml1;
		optd1.style.width = this.d2;
		optd1.setAttribute('value', value);
		optd1.setAttribute('str', str);
		optd1.style.textAlign = "center";
		opt.appendChild(optd1);
		this.tableObj.tr[this.tableObj.tr.length - 1].td.push(optd1);
		var that = this;
		$$(opt).addEvent("mouseenter", function() {
			opt.style.backgroundColor = that.mouseColor;
		});
		$$(opt).addEvent("mouseleave", function() {
			opt.style.backgroundColor = "";
		});
		$$(optd0).addEvent("click", function() {
			if(typeof(func) == "function") {
				func(optd0.childNodes[0]);
			};
		});
		$$(optd1).addEvent("click", function() {
			$$(that.displayObj).mytype("selectIndex", opt.getAttribute("selectIndex"));
			$$(that.displayObj).mytype("values", opt.getAttribute("value"));
			that.displayObj.value = opt.getAttribute("str");
			$$(that.displayObj).mytype("str", opt.getAttribute("str"));
			that.selectObj.style.display = "none";
			for(var i = 0; i < that.changeEvent.length; i++) {
				that.changeEvent[i]();
			}
		});
	};
	this.init = function(array_inhtml0, array_inhtml1, array_strs, array_values, width, height) {
		var sel = this;
		if(typeof(array_inhtml0) == "object") {
			sel.array_inhtml0 = array_inhtml0;
		} else {
			array_inhtml0 = [];
		}
		if(typeof(array_inhtml1) == "object") {
			sel.array_inhtml1 = array_inhtml1;
		} else {
			array_inhtml1 = [];
		}
		if(typeof(array_strs) == "object") {
			sel.array_strs = array_strs;
		} else {
			array_strs = [];
		}
		if(typeof(array_values) == "object") {
			sel.array_values = array_values;
		} else {
			array_values = [];
			for(i = 0; i < array_strs.length; i++) {
				array_values.push(i);
				sel.array_values.push(i);
			};
		};
		//创建元素
		sel.width = width;
		sel.height = height;
		width = sel.that.width_height(width);
		height = sel.that.width_height(height);
		sel.box = this.that.addEle("div", {
			"width": parseInt(width) - 2 + "px",
			"height": parseInt(height) - 2 + "px",
			"border": "1px solid black",
			"cursor": "default"
		});

		var table = $$(sel.box).table();
		table.addTr();
		var td0 = table.addTd(0, {
			"width": parseInt(width) - 25 + "px",
			"padding": "0",
			"margin": "0"
		});
		var td1 = table.addTd(0, {
			"width": "18px",
			"padding": "0",
			"margin": "0"
		});
		this.displayObj = $$(td0).addEle("input", {
			"width": "100%",
			"height": "100%",
			"textAlign": "center",
			"border": "none",
			"background-color": "transparent"
		}, {
			"type": "text"
		});
		this.that.unSelect(sel.box);
		var sp = $$(td1).addEle("div", {
			"width": "18px",
			"height": parseInt(height) - 2 + "px",
			"display": "inline-block"
		});
		var ss = $$(sp).addEle("span", 0, 0, "▽");

		this.selectObj = $$().addEle("div", {
			"overflowY": "scroll",
			"backgroundColor": "white",
			"border": "1px solid black",
			"width": parseInt(width) - 2 + "px",
			"z-index": "9999",
			"display": "none",
			"float": "left",
			"position": "absolute"
		});
		this.tableObj = $$(this.selectObj).addEle("table", {
			"width": "100%",
			"cursor": "default"
		}, {
			"cellpadding": "0",
			"cellspacing": "0"
		});
		this.tableObj.tr = [];
		$$(sel.displayObj).addEvent("keydown", function(event) {
			var e = event || window.event || arguments.callee.caller.arguments[0];
			if(e && e.keyCode == 13) {
				sel.setSelectByStr(sel.displayObj.value);
				sel.selectObj.style.display = "none"
			}
		})
		$$(document).addEvent("click", function() {
			sel.selectObj.style.display = "none";
		});
		$$(sel.box).addEvent("click", function() {}, true)
		var b = $$().browser();
		if(b.browser == "IE" && b.browserverson < 9) {
			this.displayObj.onpropertychange = function() {
				for(var i = 0; i < sel.tableObj.tr.length; i++) {
					var r = new RegExp(sel.displayObj.value, "ig");
					if((sel.tableObj.tr[i].td[1].innerHTML).search(r) == -1) {
						sel.tableObj.tr[i].style.display = "none";
					} else {
						sel.tableObj.tr[i].style.display = "";
					}
				}
			}
		} else {
			$$(this.displayObj).addEvent("input", function() {
				for(var i = 0; i < sel.tableObj.tr.length; i++) {
					var r = new RegExp(sel.displayObj.value, "ig");
					if((sel.tableObj.tr[i].td[1].innerHTML).search(r) == -1) {
						sel.tableObj.tr[i].style.display = "none";
					} else {
						sel.tableObj.tr[i].style.display = "";
					}
				}
			});
		}
		$$(sel.box).addEvent("click", function() {
			for(var i = 0; i < sel.tableObj.tr.length; i++) {
				sel.tableObj.tr[i].style.display = "";
			}
			if(sel.selectObj.style.display == "none") {
				var p = $$().getEleToBodyPosition(sel.box);
				
				sel.selectObj.style.display = "inline-block";
				sel.selectObj.style.left = p.left + "px";
				sel.selectObj.style.top = p.top + "px";
				if(sel.selectObj.offsetHeight > sel.height) {
					sel.selectObj.style.height = sel.selectDefaultHeight + "px";
				}
			} else {
				sel.selectObj.style.display = "none"
			}

		}, true);
		//添加选项
		for(var i = 0; i < sel.array_inhtml1.length; i++) {
			this.addSelect(array_inhtml0[i], array_inhtml1[i], array_strs[i], array_values[i], true);
		}
		//设置默认选项
		if(this.tableObj.tr.length) {
			this.tableObj.tr[0].click();
		}
		//初始化完成执行函数
		for(var i = 0; i < this.Initcallbacks.length; i++) {
			this.Initcallbacks[i]();
		}
		//周期执行函数
		this.timer = setInterval(function() {
			for(var i = 0; i < sel.RunCyccallbacks.length; i++) {
				sel.RunCyccallbacks[i]();
			}
		}, this.scanTime);
	}
	this.getSelectMenu2Obj = function() {
		return this.box;
	}
	this.getSelectedStr = function() {
		return this.displayObj.getAttribute("str");
	};
	this.getSelectValue = function() {
		return this.displayObj.getAttribute("values");
	};
	this.getSelectIndex = function() {
		return this.displayObj.getAttribute("selectIndex");
	};
	this.getStrs = function() {
		return this.array_strs;
	};
	this.getValues = function() {
		return this.array_values;
	};
	this.myStyle = function(json, value) {
		var a = $$(this.box).mycss(json, value);
		return a;
	}
	this.myType = function(json, value) {
		var a = $$(this.box).mytype(json, value);
		return a;
	}
	this.removeCallBack = function(index) {
		index = this.that.defaults(index, -1);
		if(index == -1) {
			this.Initcallbacks = [];
		} else if(index >= 0) {
			this.Initcallbacks.splice(index, 1);
		}
	}
	this.removeCysCallBack = function(index) {
		index = this.that.defaults(index, -1);
		if(index == -1) {
			this.RunCyccallbacks = [];
		} else if(index >= 0) {
			this.RunCyccallbacks.splice(index, 1);
		}
	}
	this.removeElem = function() {
		that.removeElem(this.box);
	}
	this.removeEvent = function(eventtype, handler) {
		$$(this.box).removeEvent(eventtype, handler);
	}
	this.removeSelectByStr = function(str) {
		for(var i = 0; i < this.array_strs.length; i++) {
			if(str == this.array_strs[i]) {
				this.removeSelectByIndex(i);
				break;
			}
		}
	}
	this.removeSelectByValue = function(value) {

		for(var i = 0; i < this.array_values.length; i++) {
			if(value == this.array_values[i]) {
				this.removeSelectByIndex(i);
				break;
			}
		}
	}
	this.removeSelectByIndex = function(index) {
		if(index >= 0) {
			this.array_strs.splice(index, 1);
			this.array_values.splice(index, 1);
			this.array_inhtml0.splice(index, 1);
			this.array_inhtml1.splice(index, 1);
			this.that.removeElem(this.tableObj.tr[index]);
		}
	}
	this.setSelectByIndex = function(index) {
		this.tableObj.tr[index].td[1].click();;
	};
	this.setSelectByValue = function(value) {
		for(var i = 0; i < this.array_values.length; i++) {
			if(value == this.array_values[i]) {
				this.tableObj.tr[i].td[1].click();
				break;
			}
		}
	};
	this.setSelectByStr = function(str) {
		for(var i = 0; i < this.array_strs.length; i++) {
			if(str == this.array_strs[i]) {
				this.tableObj.tr[i].click();
				break;
			}
		}
	};
	this.setSelectMouseColor = function(color) {
		this.mouseColor = color;
	};
	this.setScanTime = function(time) {
		this.scanTime = time;
	};
	this.setStrByStr = function(oldStr, inhtml0, inhtml1, newStr, newvalue) {
		for(var i = 0; i < this.array_strs.length; i++) {
			if(oldStr == this.array_strs[i]) {
				this.setStrByIndex(index, inhtml0, inhtml1, newStr, newvalue);
				break;
			}
		}
	}
	this.setStrByValue = function(value, inhtml0, inhtml1, newStr, newvalue) {
		for(var i = 0; i < this.array_values.length; i++) {
			if(value == this.array_values[i]) {
				this.setStrByIndex(index, inhtml0, inhtml1, newStr, newvalue);
				break;
			}
		}

	}
	this.setStrByIndex = function(index, inhtml0, inhtml1, newStr, newvalue) {
		if(index > -1) {
			if(inhtml0) {
				this.tableObj.tr[index].td[0] = inhtml0;
				this.array_inhtml0[index] = inhtml0;
			}
			if(inhtml1) {
				this.tableObj.tr[index].td[1] = inhtml1;
				this.array_inhtml1[index] = inhtml1;
			}
			if(newStr) {
				$$(this.tableObj.tr[index].td[1]).mytype("str", newStr);
				this.array_strs[index] = newStr;
			}
			if(nvalueewStr) {
				$$(this.tableObj.tr[index].td[1]).mytype("value", newvalue);
				this.array_values[index] = newvalue;
			}
		}
	}
	this.setSelectType = function(w1, w2) {
		this.d1 = w1;
		this.d2 = w2;
		if(typeof(this.tableObj) == "object") {
			if(this.tableObj.tr.length > 0) {
				for(var i = 0; i < this.tableObj.tr.length; i++) {
					this.tableObj.tr[i].td[0].style.width = w1;
					if(parseInt(w1) == 0) {
						this.tableObj.tr[i].td[0].style.display = "none";
					} else {
						this.tableObj.tr[i].td[0].style.display = "";
					}
					this.tableObj.tr[i].td[1].style.width = w2;
					if(parseInt(w2) == 0) {
						this.tableObj.tr[i].td[1].style.display = "none";
					} else {
						this.tableObj.tr[i].td[1].style.display = "";
					}
				}
			}
		}
	}
	return this;
};
mdata.a.prototype.sys_selectmenu99999 = function() {
	this.that = this;
	this.inputObj = new Object();
	this.myobj = this.that.selectionobj();
	this.boxobj = null;
	this.box = null;
	this.check = null;
	this.textobj = null;
	this.timer = null;
	this.scanTime = 100;
	this.RunCyccallbacks = [];
	this.Initcallbacks = [];
	this.strs = []; //下拉框字符串数组
	this.values = []; //下拉框绑定数值数组
	this.selects = []; //下拉框元素数组
	this.clickbox = null;
	this.clickcolor = "red";
	this.clickNum = -1;
	this.width = 100;
	this.height = 100;
	this.maxHeight = 200;
	this.clickColor = "red";
	this.mouseColor = "green";
	this.changeEvent = [];

	this.addRunCycFunc = function(callback) {
		this.RunCyccallbacks[this.RunCyccallbacks.length] = callback;
		return this.RunCyccallbacks.length - 1;
	}
	this.addInitFunc = function(callback) {
		this.Initcallbacks[this.Initcallbacks.length] = callback;
		return this.Initcallbacks.length - 1;
	}
	this.addEvent = function(eventtype, handler, type) {
		$$(this.box).addEvent(eventtype, handler, type);
	};
	this.addChangeEvent = function(handler) {
		this.changeEvent.push(handler);
	};
	this.addSelect = function(str, value, type) {
		if(typeof(type) == "undefined") {
			this.strs[this.strs.length] = str;
			this.values[this.values.length] = value;
		}
		var opt = document.createElement("option");
		opt.text = str;
		opt.setAttribute('value', value);
		this.selects.push(opt);
		try {
			this.box.add(opt, null);
		} catch(e) {
			this.box.add(opt);
		}
	};
	this.init = function(strs, values, width, height, tipstr) {
		var sel = this;
		sel.strs = strs;
		if(typeof(values) != "object") {
			var t = values;
			values = [];
			for(i = 0; i < strs.length; i++) {
				values.push(i);
			}
		};
		sel.values = values;
		sel.width = width;
		sel.height = height;
		this.boxobj = $$(this.myobject).addEle("div", {
			"position": "relative",
			"display": "inline-block",
			"width": parseInt(width) + "px",
			"height": parseInt(height) + "px"
		})
		var d2 = $$(this.boxobj).addEle("div", {
			"left": "0",
			"top": "0",
			"position": "relative"
		});
		sel.box = $$(d2).addEle("select", {
			"width": parseInt(width) + "px",
			"height": parseInt(height) + "px",
			"textAlign": "center",
			"float": "left"
		});
		var d1 = $$(this.boxobj).addEle("div", {
			"float": "left",
			"left": "0",
			"top": "0",
			"position": "absolute"
		});
		sel.inputObj = $$(d1).addEle("input", {
			"width": parseInt(width) - 20 + "px",
			"height": parseInt(height) - 6 + "px",
			"left": "0",
			"top": "0",
			"position": "relative",
			"float": "left"
		}, {
			"type": "text"
		});
		$$(sel.inputObj).addEvent("keydown", function(event) {
			var e = event || window.event || arguments.callee.caller.arguments[0];
			if(e && e.keyCode == 13) {
				sel.setSelectByStr(sel.inputObj.value);
			}
		});
		try {
			this.inputObj.onpropertychange = function() {
				for(var i = 0; i < sel.box.options.length; i++) {
					var r = new RegExp(sel.inputObj.value, "ig");
					if((sel.box.options[i].text).search(r) == -1) {
						sel.box.options[i].style.display = "none";
					} else {
						sel.box.options[i].style.display = "";
					}
				}
			}
		} catch(e) {
			$$(this.inputObj).addEvent("input", function() {
				for(var i = 0; i < sel.box.options.length; i++) {
					var r = new RegExp(sel.inputObj.value, "ig");
					if((sel.box.options[i].text).search(r) == -1) {
						sel.box.options[i].style.display = "none";
					} else {
						sel.box.options[i].style.display = "";
					}
				}
			});
		};
		$$(sel.box).addEvent("change", function() {
			var index = sel.box.selectedIndex; // 选中索引
			var text = sel.box.options[index].text; // 选中文本
			sel.inputObj.value = text;
		})
		$$(sel.inputObj).addEvent("focus", function() {
			if(sel.inputObj.getAttribute("value") == tipstr) {
				sel.inputObj.setAttribute("value", "");
			};
		});
		$$(sel.box).addEvent("change", function() {
			for(var i = 0; i < sel.changeEvent.length; i++) {
				sel.changeEvent[i]();
			};
		});
		for(i = 0; i < strs.length; i++) {
			this.addSelect(strs[i], values[i], 0);
		};
		clearInterval(sel.timer);
		sel.timer = setInterval(function() {
			for(var i = 0; i < sel.RunCyccallbacks.length; i++) {
				sel.RunCyccallbacks[i]();
			}
		}, sel.scanTime);
	}
	this.getObjects = function() {
		return this.box;
	}
	this.getSelected = function() {
		var index = this.box.selectedIndex; // 选中索引
		var text = this.box.options[index].text; // 选中文本
		return text;
	};
	this.getSelectValue = function() {
		var index = this.box.selectedIndex; // 选中索引
		var value = this.box.options[index].value; // 选中值
		return value;
	}
	this.getStrs = function() {
		return this.strs;
	};
	this.getValues = function() {
		return this.values;
	};
	this.myStyle = function(json, value) {
		var a = $$(this.box).mycss(json, value);
		return a;
	}
	this.myType = function(json, value) {

		var a = $$(this.box).mytype(json, value);
		return a;
	}
	this.removeCallBack = function(index) {
		index = this.that.defaults(index, -1);
		if(index == -1) {
			this.Initcallbacks = [];
		} else if(index >= 0) {
			this.Initcallbacks.splice(index, 1);
		}
	}
	this.removeCysCallBack = function(index) {
		index = this.that.defaults(index, -1);
		if(index == -1) {
			this.RunCyccallbacks = [];
		} else if(index >= 0) {
			this.RunCyccallbacks.splice(index, 1);
		}
	}
	this.removeElem = function() {
		that.removeElem(this.box);
	}
	this.removeEvent = function(eventtype, handler) {
		$$(this.box).removeEvent(eventtype, handler);
	}
	this.removeSelectByStr = function(str) {
		var index = -1;
		for(var i = 0; i < this.strs.length; i++) {
			if(str == this.strs[i]) {
				index = i;
				break;
			}
		}
		this.removeSelectByIndex(index);
	}
	this.removeSelectByValue = function(value) {
		var index = -1;
		for(var i = 0; i < this.values.length; i++) {
			if(value == this.values[i]) {
				index = i;
				break;
			}
		}
		this.removeSelectByIndex(index);
	}
	this.removeSelectByIndex = function(index) {
		if(index >= 0) {
			this.strs.splice(index, 1);
			this.values.splice(index, 1);
			this.that.removeElem(this.selects[index]);
			this.selects.splice(index, 1);
		}
	}
	this.setSelectByIndex = function(index) {
		this.selects[index].selected = true;
		this.inputObj.value = this.getSelected();
	};
	this.setSelectByValue = function(value) {
		for(var i = 0; i < this.strs.length; i++) {
			if(this.values[i] == value) {
				this.selects[i].selected = true;
				this.inputObj.value = this.getSelected();
				break;
			}
		}
	};
	this.setSelectByStr = function(str) {
		for(var i = 0; i < this.strs.length; i++) {
			if(this.strs[i] == str) {
				this.selects[i].selected = true;
				this.inputObj.value = this.getSelected();
				break;
			}
		}
	};
	this.setSelectMouseColor = function(color) {
		this.mouseColor = color;
	};
	this.setScanTime = function(time) {
		this.scanTime = time;
	};
	this.setStrByStr = function(oldStr, newStr) {
		var index = -1;
		for(var i = 0; i < this.strs.length; i++) {
			if(oldStr == this.strs[i]) {
				index = i;
				break;
			}
		}
		this.setStrByIndex(index, newStr);
	}
	this.setStrByValue = function(value, newStr) {
		var index = -1;
		for(var i = 0; i < this.values.length; i++) {
			if(value == this.values[i]) {
				index = i;
				break;
			}
		}
		this.setStrByIndex(index, newStr);
	}
	this.setStrByIndex = function(index, newStr) {
		if(index > -1) {
			this.strs[index] = newStr;
			this.selects[index].innerHTML = newStr;
		}
	}
	return this;
}
mdata.a.prototype.menu = function(obj, title, textarr) {
	var obje = this.myobject;
	if(typeof(obj) != "object") {
		obj = obje;
	}
	var that = this;
	var o = $$(obj).addEle("div", {
		"backgroundColor": "white",
		"position": "absolute",
		"zIndex": "9999",
		"float": "left",
		"display": "inline-block"
	}, {
		"tabindex": 0,
		"hidefocus": true
	});
	var td = {};
	var tr = [];
	for(var i = 0; i < textarr.length + 1; i++) {
		td["tr" + i] = [" style.border=1px solid black"];
		tr.push("");
	};

	var t = $$(o).create_table(0, tr, td);
	t.style.width = "";
	t.style.height = "";
	o.style.display = "none";
	t.tr[0].td[0].innerHTML = title;

	this.mouseovercolor = "#66ccff";
	$$(t.tr[0].td[0]).addEvent("mouseenter", function() {
		t.tr[0].td[0].style.backgroundColor = that.mouseovercolor;
	});
	$$(t.tr[0].td[0]).addEvent("mouseout", function() {
		t.tr[0].td[0].style.backgroundColor = "";
	});
	$$(o).addEvent("blur", function() {
		o.style.display = "none";
	});
	$$(o).addEvent("mouseenter", function() {
		o.focus()
	})
	$$(o).addEvent("click", function() {
		o.style.display = "none";
	});
	for(var i = 1; i < t.tr.length; i++) {
		t.tr[i].td[0].innerHTML = textarr[i - 1];
		(function(o, obj, color) {
			$$(obj).addEvent("mouseenter", function() {
				obj.style.backgroundColor = color;
			});
			$$(obj).addEvent("mouseout", function() {
				obj.style.backgroundColor = "";
			});
		})(o, t.tr[i].td[0], that.mouseovercolor)
	}

	this.obj = o;
	this.table = t;
	this.setDisplay = function(enable) {
		if(enable == 1) {
			o.style.display = "inline-block";
			o.style.left = window.event.clientX + 10 + "px";
			o.style.top = window.event.clientY + "px";
			o.focus();
		} else {
			o.style.display = "none"
		}
	}
	return this;
}
mdata.a.prototype.rightMenuSingle = function(obj, width, textarr, imgarr, JSONCallBack) {
	this.removeRight();
	this.enterColor = "green"; //鼠标进入元素颜色
	this.bgcolor = 'white'; //背景颜色
	this.singleHeight = 20; //单个选项高度
	this.classname = "RightMenu"; //右键菜单className	
	obj = (typeof(obj) == "object") ? obj : this.myobject;
	if(obj.foc != 1) {
		obj.foc = 0;
	}
	var that = this;
	var nobj;
	var dd = $$().addEle("div", {
		"className": that.classname,
		"width": "100%",
		"height": "100%",
		"left": "0",
		"top": "0",
		"position": "absolute",
		"zIndex": "9000"
	}, {
		"tabIndex": "0"
	});
	var tablediv = $$().addEle("div", {
		"className": that.classname,
		"position": "absolute",
		"cursor": "default",
		"border": "1px solid black",
		"zIndex": "9001",
		"backgroundColor": that.bgcolor
	}, {
		"tabIndex": "0"
	});

	$$(tablediv).unSelect();

	var v = [];
	for(var i in textarr) {
		v.push("")
	}
	var t = $$(tablediv).create_table(0, v, ["10px", "", "10px"]);
	t.style.width = "";
	for(var i = 0; i < textarr.length; i++) {
		t.tr[i].td[1].style.textAlign = "left";
		t.tr[i].td[1].innerHTML = textarr[i];
		if(typeof(JSONCallBack) == "function") {
			try {
				(function(i) {
					$$(t.tr[i].td[1]).addEvent("mousedown", function(e) {
						
						var m = $$().getMousePosition(e);
						if(m.button == 0) {
							JSONCallBack(textarr[i]);
						}
					})
				})(i)
			} catch(e) {
				//TODO handle the exception
				////console.log(e)
			}
		}
	}
	dd.style.display = "none";
	tablediv.style.display = "none";
	$$(obj).addEvent("mousedown", function(e) {
		var m = $$().getMousePosition(e);
		var p = $$().getEleToBodyPosition(obj); //获得当前选项距离浏览器的绝对位置
		
		var b = $$().getBrowerClientSize(); //获得浏览器当前可视区域宽度高度
		if(m.button == 2 && obj.getAttribute("select") + "" == "1") {
			//console.log(m.x,m.y)
			dd.style.display = "";
			tablediv.style.display = "";
			tablediv.style.display = "";
			tablediv.style.left = m.x + "px";
			tablediv.style.top = m.y + "px";
			//console.log(tablediv.id);
			if(m.x >= p.left && m.x <= obj.offsetWidth + p.left && m.y >= p.top && m.y <= p.top + obj.offsetHeight) {
				
				tablediv.style.display = "inline-block";
				tablediv.style.display = "";
				if(m.x + tablediv.offsetWidth > b.width) {

					tablediv.style.left = m.x - tablediv.offsetWidth + "px";
				}
				if(m.y + tablediv.offsetHeight > window.innerHeight) {
					tablediv.style.top = m.y - tablediv.offsetHeight + "px";
				};
				if(tablediv.offsetTop <= 0) {
					tablediv.style.top = "10px"
				}
			}
		}
	}, true);
	$$().addEvent("mousedown", function() {
		dd.style.display = "none";
		tablediv.style.display = "none";
	});
	return tablediv;
}
mdata.a.prototype.rightMenu = function() {
	var obje = this.myobject;
	this.removeRight();
	this.enterColor = ""; //鼠标进入元素颜色
	this.bgcolor = 'white'; //背景颜色
	this.singleHeight = 20; //单个选项高度
	this.classname = "RightMenu"; //右键菜单className
	var objs = []; //右键菜单元素组合
	$$().addEvent("click", function() {
		$$(objs).mycss("display", "none");
	});

	this.addRightMenu = function(obj, width, textarr, imgarr, JSONCallBack) {
		obj = (typeof(obj) == "object") ? obj : obje;
		var that = this;
		var nobj;
		var tablediv = $$().addEle("div", {
			"className": that.classname,
			"width": width + "px",
			"position": "absolute",
			"cursor": "default",
			"border": "1px solid black",
			"zIndex": "9001",
			"backgroundColor": that.bgcolor
		}, {
			"tabIndex": "0"
		})
		$$(tablediv).unSelect();
		objs.push(tablediv);
		if(obj.getAttribute("id") == "" || obj.getAttribute("id") == null) {
			obj.id = $$().checkId();
		}
		obj.setAttribute("tabIndex", "0");
		$$(obj).addEvent("mousedown", function(e) {
			var m = $$().getMousePosition(e);
			tablediv.style.display = "none"
		})
		if(objs.length == 1) {
			$$(obj).addEvent("mousedown", function(event) {
				var m = $$().getMousePosition(event);
				if(m.button == 2) {
					var p = $$().getEleToBodyPosition(table); //获得当前选项距离浏览器的绝对位置
					
					var b = $$().getBrowerClientSize(); //获得浏览器当前可视区域宽度高度
					objs[0].style.display = "inline-block";
					objs[0].style.left = m.x + "px";
					objs[0].style.top = m.y + "px";
					if(m.x + objs[0].offsetWidth > b.width) {
						objs[0].style.left = b.width - objs[0].offsetWidth + "px";
					}
					if(m.y + objs[0].offsetHeight > b.height) {
						objs[0].style.top = b.height - objs[0].offsetHeight + "px";
					};
				}
			}, true);
		} else {
			obj.td[2].innerHTML = "▶";
			obj.ishaveNextLevelRightMenu = 1;
		}

		obj.NextLevelRightMenuObj = tablediv;
		obj.ishaveNextLevelRightMenu = 1;
		var j = [];
		for(i = 0; i < textarr.length; i++) {
			j.push(that.singleHeight + "px");
		};
		var x1 = (parseInt(width) * 0.1 <= 16) ? 16 : parseInt(width) * 0.1;
		var x2 = parseInt(width) * 0.7;
		var x3 = (parseInt(width) * 0.1 <= 16) ? 16 : parseInt(width) * 0.1;
		var table = $$(tablediv).create_table(0, j, [x1 + "px", x2 + "px", x3 + "px"]);
		table.style.height = "";
		tablediv.table = table;

		for(i = 0; i < textarr.length; i++) {
			table.tr[i].style.display = "";
			table.tr[i].td[0].style.display = "";
			table.tr[i].td[1].style.display = "";
			table.tr[i].td[2].style.display = "";
			table.tr[i].td[1].style.textAlign = "left";
			if(typeof(imgarr) == "object" && imgarr.length > i) {
				table.tr[i].td[0] = imgarr[i];
			} else {
				table.tr[i].td[0] = "";
			}
			table.tr[i].selectEnable = true; //该选项是否可选
			table.tr[i].td[1].innerHTML = textarr[i]; //菜单具体内容
			table.tr[i].ishaveNextLevelRightMenu = 0; //该菜单是否存在子菜单
			table.tr[i].NextLevelRightMenuObj = new Object(); //该菜单的子菜单元素
			var objet = table.tr[i];
			var ji = i;

			if(typeof(JSONCallBack) == "object") {
				try {
					if(typeof(JSONCallBack[i]) == "object" && JSONCallBack[i].length > 0) {
						for(key in JSONCallBack[i]) {
							(function(i, key) {
								$$(table.tr[i]).addEvent(key, function() {
									JSONCallBack[i][key]();
								})
							})(i, key)
						}
					}
				} catch(e) {
					//TODO handle the exception
				}
			}

			//			//添加函数
			(function(ji, objet) {

				$$(objet).addEvent("click", function() {
					if(objet.selectEnable) {
						if(objet.ishaveNextLevelRightMenu == 1) {
							objet.NextLevelRightMenuObj.style.display = "inline-block";
						} else {
							$$(objs).mycss("display", "none");
						}
					}
				}, true);
				$$(objet).addEvent("mouseenter", function() {
					//关闭其它选项打开的子菜单
					if(typeof(nobj) == "object") {
						nobj.style.display = "none";
						for(var i = 0; i < nobj.table.tr.length; i++) {
							if(nobj.table.tr[i].ishaveNextLevelRightMenu) {
								nobj.table.tr[i].NextLevelRightMenuObj.style.display = "none";
							}
						}
					};
					//					for(var z = 0; z < table.tr.length; z++) {
					//						table.tr[z].style.backgroundColor = that.bgcolor;
					//					}
					//					if(objet.selectEnable) {
					//						objet.style.backgroundColor = that.enterColor;
					//					}
					var p = $$().getEleToBodyPosition(objet); //获得当前选项距离浏览器的绝对位置
					
					
					var b = $$().getBrowerClientSize(); //获得浏览器当前可视区域宽度高度
					if(objet.ishaveNextLevelRightMenu == 1 && objet.selectEnable == true) {
						nobj = objet.NextLevelRightMenuObj;
						nobj.style.display = "inline-block";
						nobj.style.left = p.left + table.offsetWidth + "px";
						nobj.style.top = p.top + "px";
						if(p.left + table.offsetWidth + nobj.offsetWidth > b.width) {
							nobj.style.left = p.left - nobj.offsetWidth + "px";
						}
						if(p.top + nobj.offsetHeight > b.height) {
							nobj.style.top = b.height - nobj.offsetHeight + "px";
						};
						if(nobj.offsetTop <= 0) {
							nobj.style.top = "10px"
						}
					}
				})
			})(ji, objet);
		}
		tablediv.style.display = "none";
		return table;
	}
	this.addCallBack = function(index1, index2, index3, eventtype, func, handle) {
		var o = obje.NextLevelRightMenuObj.table.tr[index1];
		if(typeof(index2) == "number") {
			o = o.NextLevelRightMenuObj.table.tr[index2];
			if(typeof(index3) == "number") {
				o = o.NextLevelRightMenuObj.table.tr[index3];
			}
		}
		if(typeof(o.callBackFunc[eventtype]) == "object") {
			o.callBackFunc[eventtype].push(func);
		} else {
			o.callBackFunc[eventtype] = [];
			o.callBackFunc[eventtype].push(func);
		}
	}
	this.addCallBackFunc = function(obj, index, eventtype, handle) {
		var r = -1;
		if(typeof(obj.tr[index].callBackFunc) == "object") {
			if(typeof(obj.tr[index].callBackFunc[eventtype]) == "undefined") {
				obj.tr[index].callBackFunc[eventtype] = [];
				r = 0;
			} else {
				r = obj.tr[index].callBackFunc[eventtype].length;
			}
		} else {
			obj.tr[index].callBackFunc = [];
			obj.tr[index].callBackFunc[eventtype] = [];
			r = 0;
		}
		obj.tr[index].callBackFunc[eventtype].push(handle);
		return r;
	};
	this.removeCallBackFunc = function(obj, index, callIndex, eventtype) {
		var r = -1;
		if(typeof(obj.tr[index].callBackFunc) == "object") {
			if(typeof(obj.tr[index].callBackFunc[eventtype]) == "object") {
				if(obj.tr[index].callBackFunc[eventtype].length > callIndex) {
					obj.tr[index].callBackFunc[eventtype].splice(callIndex, 1);
					r = obj.tr[index].callBackFunc[eventtype].length;
				};
			};
		};
		return r;
	}
	this.removeRightMenu = function(obj) {
		obj.NextLevelRightMenuObj = new Object();
		obj.ishaveNextLevelRightMenu = 0;
		obj.td[2].innerHTML = "";
	};
	this.removeRightMenuIndex = function(obj, index) {
		var o = obj.tr[index];
		if(obj.tr.length > index) {
			obj.tr.splice(index, 1);
		}
		//		if (obj.callbackgrr.length>index) {
		//			obj.callbackgrr.splice(index,1);
		//		}
		$$(obj).removeElem(o);
	};

	this.setSelectRightMenuCallBackFuncByIndex = function(obj, index, eventtype, handle, type) {
		if(typeof(obj.tr[index]) == "object") {
			$$(obj.tr[index]).addEvent(eventtype, handle, type);
			return true;
		}
	};
	this.setSelectRightMenuByIndex = function(obj, index) {
		obj.tr[index].click();
	};
	this.setSelectRightMenuByStr = function(obj, str) {
		for(var i = 0; i < obj.tr.length; i++) {
			if(str == obj.tr[i].td[1].innerHTML) {
				this.setSelectRightMenuByIndex(i, str);
				break;
			}
		}
	};
	this.setSelectEnableByIndex = function(obj, index, enable) {
		enable = (typeof(enable) == "undefined") ? false : enable;
		index = (typeof(index) == "number") ? index : 0;
		obj.tr[index].selectEnable = enable;
		if(enable) {
			obj.tr[index].style.color = ""
		} else {
			obj.tr[index].style.color = "gray";
		};
	};
	this.setSelectEnableByStr = function(obj, str, enable) {
		enable = (typeof(enable) == "undefined") ? false : enable;
		for(var i = 0; i < obj.tr.length; i++) {
			if(str == obj.tr[i].td[1].innerHTML) {
				obj.tr[i].selectEnable = enable;
				if(enable) {
					obj.tr[i].style.color = ""
				} else {
					obj.tr[i].style.color = "gray";
				};
				break;
			}
		}
	};
	return this;
}
mdata.a.prototype.treeMenu = function(objm) {
	var obje = (typeof(objm) == "object") ? objm : this.myobject;
	this.removeRight();
	this.enterColor = "green"; //鼠标进入元素颜色
	this.bgcolor = 'white'; //背景颜色
	this.singleHeight = 20; //单个选项高度
	this.classname = "RightMenu"; //右键菜单className
	var objs = []; //右键菜单元素组合

	$$().addEvent("click", function() {
		$$(objs).mycss("display", "none");
	});

	function bodyd(oo) {
		while(oo.parentNode != document.body) {
			oo = oo.parentNode;
		}
	}
	$$(obje).addEvent("click", function() {
		var lsm = $$().getEleToBodyPosition(obje);
		
		objs[0].style.left = lsm.left + "px";
		objs[0].style.top = lsm.top + "px";
		//bodyd(obje);
		objs[0].style.display = "inline-block";
	}, true);
	this.addMenu = function(indexStr, width, textarr, imgarr, JSONCallBack) {
		var tobj = getindexobj(indexStr);
		var that = this;
		var nobj;
		var tablediv = $$().addEle("div", {
			"className": that.classname,
			"width": width + "px",
			"position": "absolute",
			"cursor": "default",
			"border": "1px solid black",
			"zIndex": "9001",
			"backgroundColor": that.bgcolor
		}, {
			"tabIndex": "0"
		})
		$$(tablediv).unSelect();
		objs.push(tablediv);
		if(objs.length > 1) {
			tobj.td[2].innerHTML = "▶";
			tobj.ishaveNextLevelRightMenu = 1;
		}
		tobj.NextLevelRightMenuObj = tablediv;
		tobj.ishaveNextLevelRightMenu = 1;
		var j = [];
		for(i = 0; i < textarr.length; i++) {
			j.push(that.singleHeight + "px");
		};
		var x1 = (parseInt(width) * 0.1 <= 16) ? 16 : parseInt(width) * 0.1;
		var x2 = parseInt(width) * 0.7;
		var x3 = (parseInt(width) * 0.1 <= 16) ? 16 : parseInt(width) * 0.1;
		var table = $$(tablediv).create_table(0, j, [x1 + "px", x2 + "px", x3 + "px"]);
		table.style.height = "";
		tablediv.table = table;
		for(i = 0; i < textarr.length; i++) {
			table.tr[i].callBackFunc = {
				abort: [],
				blur: [],
				change: [],
				click: [],
				dblclick: [],
				error: [],
				focus: [],
				keydown: [],
				keyup: [],
				keypress: [],
				load: [],
				mousedown: [],
				mousemove: [],
				mouseout: [],
				mouseover: [],
				mouseup: [],
				mouseleave: [],
				mouseenter: [],
				reset: [],
				resize: [],
				select: [],
				submit: [],
				unload: []
			};
			if(typeof(JSONCallBack) == "object") {
				if(typeof(JSONCallBack[i]) == "object") {
					for(var key in JSONCallBack) {
						for(var j = 0; j < JSONCallBack[key].length; j++) {
							table.tr[i].callBackFunc[key].push(JSONCallBack[key][j]);
						}
					}
				}
			}
			table.tr[i].style.display = "";
			table.tr[i].td[0].style.display = "";
			table.tr[i].td[1].style.display = "";
			table.tr[i].td[2].style.display = "";
			table.tr[i].td[1].style.textAlign = "left";
			if(typeof(imgarr) == "object" && imgarr.length > i) {
				table.tr[i].td[0] = imgarr[i];
			} else {
				table.tr[i].td[0] = "";
			}
			table.selectnum = -1;
			table.openSelectNum = -1;
			table.tr[i].selectEnable = true; //该选项是否可选
			table.tr[i].td[1].innerHTML = textarr[i]; //菜单具体内容
			table.tr[i].ishaveNextLevelRightMenu = 0; //该菜单是否存在子菜单
			table.tr[i].NextLevelRightMenuObj = new Object(); //该菜单的子菜单元素
			var objet = table.tr[i];
			//			//添加函数
			for(var key in objet.callBackFunc) {
				(function(i, key, objet) {
					$$(objet).addEvent(key, function() {
						if(key != "click" && key != "mouseenter") {
							if(objet.callBackFunc[key].length > 0) {
								for(var lsii = 0; lsii < objet.callBackFunc[key].length; lsii++) {
									objet.callBackFunc[key][lsii]();
								}
							}
						}
					})
				})(i, key, objet)
			}
			(function(i, objet) {
				objet.callBackFunc["mouseenter"].push(function() {
					//恢复其它选项颜色
					if(objet.parentNode.selectnum > -1) {
						objet.parentNode.tr[objet.parentNode.selectnum].style.backgroundColor = that.bgcolor;
					}
					//设置该选项颜色
					objet.style.backgroundColor = that.enterColor;
					objet.parentNode.selectnum = i;
					//关闭其它选项打开的子菜单
					if(objet.parentNode.openSelectNum > -1 && objet.parentNode.tr[objet.parentNode.openSelectNum].ishaveNextLevelRightMenu) {
						objet.parentNode.tr[objet.parentNode.openSelectNum].NextLevelRightMenuObj.style.display = "none";
					};
					objet.parentNode.openSelectNum = i;
					//显示子菜单，并实时调整子菜单位置
					if(objet.ishaveNextLevelRightMenu) {
						var p = $$().getEleToBodyPosition(objet); //获得当前选项距离浏览器的绝对位置
						
						objet.NextLevelRightMenuObj.style.display = "inline-block";
						objet.NextLevelRightMenuObj.style.left = p.left + objet.offsetWidth + "px";
						objet.NextLevelRightMenuObj.style.top = p.top + "px";
					}
				});
				$$(objet).addEvent("mouseenter", function() {
					if(objet.callBackFunc["mouseenter"].length > 0) {
						for(var lsii = 1; lsii < objet.callBackFunc["mouseenter"].length; lsii++) {
							objet.callBackFunc["mouseenter"][lsii]();
						}
						objet.callBackFunc["mouseenter"][0]();
					}
				})
				$$(objet).addEvent("click", function() {
					if(objet.callBackFunc["click"].length > 0) {
						for(var lsii = 0; lsii < objet.callBackFunc["click"].length; lsii++) {
							objet.callBackFunc["click"][lsii]();
						}
					}
					//执行完正常点击事件后，执行一遍mouseenter事件（以便于触摸设备执行该事件），当前选项没有子菜单的时候，关闭所有菜单
					if(objet.callBackFunc["mouseenter"].length > 0) {
						for(var lsii = 1; lsii < objet.callBackFunc["mouseenter"].length; lsii++) {
							objet.callBackFunc["mouseenter"][lsii]();
						}
						objet.callBackFunc["mouseenter"][0]();
					}
					if(!objet.ishaveNextLevelRightMenu) {
						$$(objs).mycss("display", "none");
					}
				}, true)
			})(i, objet)

		}
		tablediv.style.display = "none";
		return table;
	}
	this.addCallBackByIndex = function(indexStr, eventtype, func, handle) {
		var o = getindexobj(indexStr);
		if(typeof(o.callBackFunc[eventtype]) == "object") {
			o.callBackFunc[eventtype].push(func);
		} else {
			o.callBackFunc[eventtype] = [];
			o.callBackFunc[eventtype].push(func);
		}
		return o.callBackFunc[eventtype].length - 1;
	}
	this.addCallBackByStr = function(strArray, eventtype, func, handle) {
		var o = getstrobj(strArray);
		if(typeof(o.callBackFunc[eventtype]) == "object") {
			o.callBackFunc[eventtype].push(func);
		} else {
			o.callBackFunc[eventtype] = [];
			o.callBackFunc[eventtype].push(func);
		}
		return o.callBackFunc[eventtype].length - 1;
	}
	this.removeCallBackByIndex = function(indexStr, callIndex, eventtype) {
		var r = -1;
		var obj = getindexobj(indexStr);
		if(typeof(obj.callBackFunc) == "object") {
			if(typeof(obj.callBackFunc[eventtype]) == "object") {
				if(obj.callBackFunc[eventtype].length > callIndex) {
					obj.callBackFunc[eventtype].splice(callIndex, 1);
					r = obj.callBackFunc[eventtype].length;
				};
			};
		};
		return r;
	}
	this.removeCallBackByStr = function(strArray, callIndex, eventtype) {
		var r = -1;
		var obj = getstrobj(strArray);
		if(typeof(obj.callBackFunc) == "object") {
			if(typeof(obj.callBackFunc[eventtype]) == "object") {
				if(obj.callBackFunc[eventtype].length > callIndex) {
					obj.callBackFunc[eventtype].splice(callIndex, 1);
					r = obj.callBackFunc[eventtype].length;
				};
			};
		};
		return r;
	}
	this.removeRightMenuByIndex = function(indexStr) {
		var obj = getindexobj(indexStr);
		obj.NextLevelRightMenuObj = new Object();
		obj.ishaveNextLevelRightMenu = 0;
		obj.td[2].innerHTML = "";
	};
	this.removeRightMenuByStr = function(strArray) {
		var obj = getstrobj(strArray);
		obj.NextLevelRightMenuObj = new Object();
		obj.ishaveNextLevelRightMenu = 0;
		obj.td[2].innerHTML = "";
	};
	this.setClickedByIndex = function(indexStr, enable) {
		var obj = getindexobj(indexStr);
		enable = (typeof(enable) == "boolean") ? enable : true;
		if(enable) {
			obj.style.backgroundColor = "gray";
			obj.click();
		} else {
			obj.style.backgroundColor = "";
		};
	};
	this.setClickedByStr = function(strArray) {
		var obj = getstrobj(strArray);
		enable = (typeof(enable) == "boolean") ? enable : true;
		if(enable) {
			obj.style.color = ""
		} else {
			obj.style.color = "gray";
			obj.click();
		};
	};

	function getindexobj(indexStr) {
		var obj = obje;
		var m = indexStr.match(/[0-9-]+/ig);

		for(var i = 0; i < m.length; i++) {
			var index = parseInt(m[i]);
			if(index > 0 && index < obj.NextLevelRightMenuObj.table.tr.length) {
				obj = obj.NextLevelRightMenuObj.table.tr[index];
			} else {
				return obj;
			}
		}
		return obj;
	}

	function getstrobj(strArray) {
		var obj = obje;
		for(var i = 0; i < strArray.length; i++) {
			obj = obj.NextLevelRightMenuObj.table.tr;
			for(var j = 0; j < obj.length; j++) {
				if(obj[j].td[1].innerHTML == strArray[i]) {
					obj = obj[j];
					break;
				}
			}
		}
		return obj;
	}
	return this;
}
mdata.a.prototype.tabs = function() {
	var content = this.myobject;
	var strs = [];
	var defaultSelect = 0;
	var that = this;
	var td = []; //标签内容区宽度数组
	var ctd = []; //标签标题区宽度数组
	var content_table;
	var selectIndex = -1;
	var d;
	this.init = function(headHeight, width, height) {
		headHeight = that.defaults(headHeight, 20);
		headHeight = that.width_height(headHeight);
		for(var i = 0; i < strs.length; i++) {
			ctd.push("");
			td.push("");
		};
		if(typeof(height) != "undefined" && typeof(width) != "undefined") {
			d = $$(content).addEle("div", {
				"width": width,
				"height": height,
				"display": "inline-block"
			})
		} else {
			d = $$(content).addEle("div", {
				"display": "inline-block"
			})
		}
		d.style.border = "1px solid black";
		//tab页内容区
		content_table = $$(d).create_table(0, [headHeight + "  style.width=100%", "2px", "100% - 22px   style.height="], {});
		content_table.style.width = parseFloat(width) + "px";
		content_table.style.height = "";
		//content_table.style.border="1px solid black";
		content_table.tr[0].td = [];
		content_table.tr[1].td = [];
		content_table.tr[2].td = [];
		content_table.tr[0].style.display = "";
		content_table.tr[1].style.display = "";
		content_table.tr[2].style.display = "";
		for(var i = 0; i < strs.length; i++) {
			this.addTab(strs[i], 1);
		};
		contentTitle(0);
	}
	this.setStrs = function(strarray) {
		strs = strarray;
	};
	this.addTab = function(str, type) {
		type = $$().defaults(type, 0);
		if(type == 0) {
			strs.push(str);
		}
		var td1 = $$(content_table.tr[0]).addEle("td", {
			"text-align": "center"
		}, 0, str);
		var td2 = $$(content_table.tr[1]).addEle("td");
		var td3 = $$(content_table.tr[2]).addEle("td", {
			"text-align": "left"
		});
		content_table.tr[0].td.push(td1);
		content_table.tr[1].td.push(td2);
		content_table.tr[2].td.push(td3);
		td1.style.borderBottom = "1px solid black";
		td1.index = content_table.tr[0].childNodes.length - 1;
		if(td1.index <= 0) {
			td1.index = 0;
		};
		$$(td1).addEvent("click", function() {
			contentTitle(td1.index);
			selectIndex = td1.index;
		});
	};
	this.delTabByStr = function(str) {
		for(var i = 0; i < strs.length; i++) {
			if(strs[i] == str) {
				this.delTabByIndex(i);
			}
		}
	};
	this.delTabByIndex = function(index) {
		strs.splice(index, 1);
		$$(content_table.tr[0]).removeElem(content_table.tr[0].td[i]);
		$$(content_table.tr[1]).removeElem(content_table.tr[1].td[i]);
		$$(content_table.tr[2]).removeElem(content_table.tr[2].td[i]);
	};
	this.getContentObjs = function() {
		return content_table;
	};
	this.getTabBox = function() {
		return d;
	};

	function contentTitle(index) {
		content_table.tr[0].td[index].style.border = "1px solid black";
		content_table.tr[0].td[index].style.borderBottom = "";
		content_table.tr[0].td[index].style.color = "blue";
		content_table.tr[2].td[index].style.display = "";
		content_table.tr[2].td[index].setAttribute("colspan", strs.length);
		for(var i = 0; i < strs.length; i++) {
			content_table.tr[0].td[i].innerHTML = strs[i];
			content_table.tr[0].td[i].index = i;
			content_table.tr[0].td[i].style.display = "";
			content_table.tr[0].td[i].style.height = "";
			if(i != index) {
				content_table.tr[0].td[i].style.border = "";
				content_table.tr[0].td[i].style.borderBottom = "1px solid black";
				content_table.tr[0].td[i].style.color = "";
				content_table.tr[2].td[i].style.display = "none";
			}
		};
	};
	return this;
};
mdata.a.prototype.table = function(mystyle, mytype,obj) {
	
	if(typeof(obj)!="object"){
		this.table = this.addEle("table", mystyle, mytype);
		this.table.tr = [];
		this.tr = []
	}else{
		this.table=obj;
		this.table.tr = [];
		this.tr =[]
		for(var i=0;i<this.table.rows.length;i++){
			this.table.tr.push(this.table.rows[i]);
			this.table.tr[i].td=[];
			this.tr.push(this.table.rows[i])
			for(var j=0;j<this.table.rows[i].cells.length;j++){
				this.table.tr[i].td.push(this.table.rows[i].cells[j]);			
			}
		}
		
	}
	
	this.table.tr = [];
	this.tr = []
	this.table.setAttribute("cellpadding", "0");
	this.table.setAttribute("cellSpacing", "0");
	var that = this;
	this.addTr = function(mycss, mytype) {
		var trobj = $$(that.table).addEle("tr", mycss, mytype);
		that.table.tr.push(trobj);
		that.table.tr[that.table.tr.length - 1].td = [];
		that.tr.push(trobj);
		that.tr[that.table.tr.length - 1].td = [];
		return trobj;
	}
	this.addTd = function(index, mycss, mytype,innhtml) {
		var tdobj =0;
		if (typeof(index)=="object") {
			tdobj = $$(index).addEle("td", mycss, mytype);
			
		} else{
			tdobj = $$(that.table.tr[index]).addEle("td", mycss, mytype);
			that.tr[index].td.push(tdobj);
			that.table.tr[index].td.push(tdobj);
		}
		//var tdobj = $$(that.tr[index]).addEle("td", mycss, mytype);
		if (typeof(innhtml)=="string") {
			tdobj.innerHTML=innhtml;
		}
		return tdobj;
	};
	this.removeTr = function(trindex) {
		if (typeof(that.tr[trindex])=="object") {
			$$(that.table).removeElem(that.tr[trindex]);
		}
		that.table.tr.splice(trindex, 1);
		that.tr.splice(trindex, 1);
	};
	this.removeTd = function(trindex, tdindex) {
		$$(that.table.tr[trindex]).removeElem(that.table.tr[trindex].td[tdindex]);
		that.table.tr[trindex].td.splice(tdindex, 1);
		that.tr[trindex].td.splice(tdindex, 1);
	};
	return this;
}
mdata.a.prototype.LunBoTu = function() {
	var that = this;
	var imgSrcs = []; //图片地址数组
	var imgHrefs = []; //图片连接数组
	var imgTexts = []; //图片说明数组
	var defaultWidth = 800; //默认图片宽度
	var defaultHeight = 600; //默认图片高度
	var imgDelayTime = 5000; //默认图片停留时间，毫秒级
	var imgMoveTime = 1000; //默认图片移动时间，毫秒级
	var imgSelectType = 0; //图片选择样式，0圆点，1左右
	var imgContentType = 0; //内容移动样式，0跟随图片移动，1不跟随
	var div; //外壳div
	var imgdiv; //图片对象外壳div
	var content; //文本对象外壳div
	var selectdiv; //选择外壳div
	var selecttable; //选择器table
	var imgdivs = []; //图片对象数组
	var contents = []; //文本对象数组
	var selectdivs = []; //选择数组
	var $$div; //mdata选择的div对象
	var $$content; //mdata选择的文本对象
	var $$contents = $$();
	var $$div; //mdata选择的div对象
	var width, height;
	var manualSelect = -1; //手动模式下，用户鼠标点选的图片索引
	var content_type = -1; //内容是否跟随图片运动，0不跟随，1跟随
	var timer, timer1;
	var moves = []; //移动
	var $$moves = $$(); //移动data
	var $$imgs = $$();
	var $$opacity_curimgdiv = $$();
	var $$opacity_nextimgdiv = $$();
	var $$opacity_curselectdiv = $$();
	var $$opacity_nextselectdiv = $$();
	var $$opacity_curcontentdiv = $$();
	var $$opacity_nextcontentdiv = $$();
	var x; //左右手动滑动时移动的位置
	var animate_type = 0; //动画方式，
	var animate = {};
	var animate_style = "left"; //动画style，0为普通动画
	var animate_style_animate = {};

	var animate_style__start = true;
	var animate_style__end = 0;
	var animate_style__time = 0;
	var animate_style__speed = 0;
	var animate_style__func = 0;
	var contentMove = 0; //文字是否随着图片滚动0跟随，1不跟随
	var imgMove = 1; //图片移动的方式，0左右滑动，1渐隐渐显
	this.init = function(imgwidth, imgheight, imgSrc, imgHref, imgText, selectType, contentType, delaytime, movetime) {
		width = that.defaults(imgwidth, defaultWidth);
		height = that.defaults(imgheight, defaultHeight);
		div = this.addEle("div", {
			"width": width + "px",
			"height": height + "px",
			"overflow": "hidden",
			"position": "relative",
			"cursor": "default",
			"outline": "none"
		});
		imgdiv = $$(div).addEle("div", {
			"width": "100%",
			"height": "100%",
			"position": "absolute",
			"left": "0",
			"top": "0",
			"float": "left"
		});

		imgdiv.curimgindex = 0;
		imgdiv.setAttribute("curimgindex", 0);
		content = $$(div).addEle("div", {
			"zIndex": "200",
			"width": "100%",
			"height": "20%",
			"position": "absolute",
			"left": "0",
			"top": "80%",
			"backgroundColor": "rgba(0,0,0,0.5)",
			"color": "rgb(255,255,255)"
		});
		var sselectdiv = $$(div).addEle("div", {
			"zIndex": "201",
			"width": "100%",
			"height": "10%",
			"position": "absolute",
			"left": "0",
			"top": "70%"
		});
		selecttable = $$(sselectdiv).table();
		$$(selecttable.table).mycss({
			"width": "100%",
			"height": "100%"
		});
		$$div = $$(imgdiv); //mdata选择的div对象
		$$content = $$(content); //mdata选择的文本对象
		$$div = $$(imgdiv); //mdata选择的div对象
		selecttable.addTr();

		selectdiv = selecttable.addTd(0);
		var tf = that.autoFontSize(1, "●", selectdiv, 50);
		selectdiv.style.fontSize = tf;
		selectdiv.style.textAlign = "center";
		if(imgSrc instanceof Array) {
			imgSrcs = imgSrc;
		}
		if(imgHref instanceof Array) {
			imgHrefs = imgHref;
		}
		if(imgText instanceof Array) {
			imgTexts = imgText;
		}
		for(var i = 0; i < imgSrcs.length; i++) {
			this.addImg(imgSrcs[i], imgHrefs[i], imgTexts[i]);
		}
		$$content.setSelectionobj(contents);
		$$imgs.setSelectionobj(imgdivs);
		delaytime = that.defaults(delaytime, imgDelayTime);
		movetime = that.defaults(movetime, imgMoveTime);
		auto();
	}
	this.addImg = function(imgSrc, imgHref, imgText) {
		if(typeof(imgSrc) == "string" && typeof(imgHref) == "string" && typeof(imgText) == "string") {
			var w = parseFloat(width) * imgdivs.length;
			var imgd = $$div.addEle("div", {
				"position": "absolute",
				"left": w + "px",
				"top": "0px",
				"width": "100%",
				"height": "100%",
				"display": "inline-block"
			}, 0, "<img src='" + imgSrc + "' click='window.open(" + imgHref + ")' style='width: 100%;height: 100%;'/>")
			imgdivs.push(imgd);
			var imgc = $$(content).addEle("div", {
				"lineHeight": "150%",
				"position": "absolute",
				"left": w + "px",
				"top": "0px",
				"width": "100%",
				"height": "100%",
				"display": "inline-block"
			})
			var p = $$(imgc).addEle("p", {
				"color": "rgb(255,255,255)",
				"text-indent": "2em"
			}, 0, imgText);
			contents.push(imgc);

			var imgs = $$(selectdiv).addEle("span", {
				"color": "rgb(0,0,0)"
			}, 0, "●");
			selectdivs.push(imgs);
			var num = imgdivs.length - 1;
			$$(imgs).addEvent("mouseenter", function() {
				imgs.style.color = "rgb(255,255,255)";
				manualSelect = num;
				if(num != imgdiv.curimgindex) {
					BeforeManualMove(num);
					imgManualMove(num);
					contentManualMove(num);
				}
			})
			$$(imgs).addEvent("mouseleave", function() {
				imgdiv.curimgindex = num;
				manualSelect = -1;
			})
		}
	};
	this.deleteImg = function(index) {
		$$opacity_curimgdiv.clearAnimateTimer();
		$$imgs.clearAnimateTimer();
		$$content.clearAnimateTimer();
		$$opacity_curcontentdiv.clearAnimateTimer();
		$$opacity_nextcontentdiv.clearAnimateTimer();
		$$opacity_curselectdiv.clearAnimateTimer();
		$$opacity_nextselectdiv.clearAnimateTimer();
		$$opacity_curimgdiv.clearAnimateTimer();
		$$opacity_nextimgdiv.clearAnimateTimer();
		imgdiv.curimgindex = 0;
		$$(imgdivs[index].parentNode).removeElem(imgdivs[index]);
		$$(contents[index].parentNode).removeElem(contents[index]);
		$$(selectdivs[index].parentNode).removeElem(selectdivs[index]);
		imgdivs.splice(index, 1);
		contents.splice(index, 1);
		selectdivs.splice(index, 1);
	}

	function auto() {
		selectdivs[imgdiv.curimgindex].style.color = "rgb(255,255,255)";
		imgdiv.setAttribute("curimgindex", imgdiv.curimgindex);
		setInterval(function() {
			if(imgdiv.curimgindex <= imgdivs.length - 1 && manualSelect == -1) {
				imgAutoMove(); //图片自动移动
				contentAutoMove(); //图片说明自动移动
			}
		}, imgDelayTime);
	}
	/**
	 * 图片手动移动函数
	 * @param {Number} index    [当前手动选择的图片索引]
	 */
	function imgManualMove(index) {
		switch(imgMove) {
			case 0:
				$$moves.animate({
					"left": {
						"start": true,
						"end": x,
						"time": imgMoveTime,
						"speed": 6,
						"func": function() {
							imgdiv.curimgindex = index;
							imgdivs[index].style.zIndex = '';
							resetImgPosition(index);
						}
					}
				}, 1);
				break;
			case 1:
				for(var i = 0; i < imgdivs.length; i++) {
					imgdivs[i].style.left = '';
				}
				$$opacity_curimgdiv.animate({
					"opacity": {
						"start": true,
						"end": 0,
						"time": imgMoveTime,
						"speed": 10,
						"func": function(obj) {
							obj.style.zIndex = "";
						}
					}
				}, 0);
				$$opacity_nextimgdiv.animate({
					"opacity": {
						"start": true,
						"end": "1",
						"time": imgMoveTime,
						"speed": 10,
						"func": function() {

						}
					}
				}, 0);
				break;
			default:
				break;
		}
	}
	/**
	 * 重新整理图片位置
	 * @param {Number} index     [当前图片索引]
	 */
	function resetImgPosition(index) {
		for(var i = index - 1; i > -1; i--) {
			imgdivs[i].style.left = [imgdivs.length - Math.abs(i - index)] * parseFloat(width) + "px";
		}
		for(var i = index; i < imgdivs.length; i++) {
			imgdivs[i].style.left = Math.abs(i - index) * parseFloat(width) + "px";
		}
	}
	/**
	 * 重新整理图片说明位置
	 * @param {Number} index     [当前图片索引]
	 */
	function resetImgContentPosition(index) {
		for(var i = index - 1; i > -1; i--) {
			contents[i].style.left = [contents.length - Math.abs(i - index)] * parseFloat(width) + "px";
		}
		for(var i = index; i < imgdivs.length; i++) {
			contents[i].style.left = Math.abs(i - index) * parseFloat(width) + "px";
		}
	}
	/**
	 * 手动滑动前先处理一些情况
	 * @param {Number} index        [当前手动选择的选择索引]   
	 */
	function BeforeManualMove(index) {
		//图片移动前处理
		switch(imgMove) {
			case 0:
				for(var m = 0; m < imgdivs.length; m++) {
					imgdivs[m].style.zIndex = '';
				}
				imgdivs[index].style.zIndex = '100';
				imgdivs[imgdiv.curimgindex].style.zIndex = '99';
				selectdivs[imgdiv.curimgindex].style.color = "";
				imgdivs[imgdiv.curimgindex].style.left = "0";
				x = parseFloat(width);
				if(imgdiv.curimgindex < index) {
					imgdivs[index].style.left = parseFloat(width) + "px";
					x = -1 * parseFloat(width);
				}
				if(imgdiv.curimgindex > index) {
					imgdivs[index].style.left = -1 * parseFloat(width) + "px";
				}
				$$moves.setSelectionobj([imgdivs[imgdiv.curimgindex], imgdivs[index]]);
				$$moves.clearAnimateTimer();
				break;
			case 1:
				for(var i = 0; i < imgdivs.length; i++) {
					if(i != imgdiv.curimgindex && i != index) {
						imgdivs[i].style.zIndex = "";
					}
				}
				imgdivs[imgdiv.curimgindex].style.zIndex = "100";
				imgdivs[index].style.zIndex = "99";
				selectdivs[imgdiv.curimgindex].style.color = "rgb(0,0,0)";
				$$opacity_curimgdiv.setSelectionobj(imgdivs[imgdiv.curimgindex]);
				$$opacity_nextimgdiv.setSelectionobj(imgdivs[index]);
				selectdivs[index].style.color = "rgb(255,255,255)";
				$$opacity_nextselectdiv.setSelectionobj(selectdivs[index]);
				$$opacity_curimgdiv.clearAnimateTimer();
				$$opacity_nextimgdiv.clearAnimateTimer();
				//imgdiv.curimgindex=index;
				break;
			default:
				break;
		}
		//内容移动前处理
		switch(contentMove) {
			case 0:
				for(var m = 0; m < imgdivs.length; m++) {
					contents[m].style.zIndex = '';
				}
				contents[index].style.zIndex = '100';
				contents[imgdiv.curimgindex].style.left = "0";
				contents[imgdiv.curimgindex].style.zIndex = '99';
				if(imgdiv.curimgindex < index) {
					contents[index].style.left = parseFloat(width) + "px";
				}
				if(imgdiv.curimgindex > index) {
					contents[index].style.left = -1 * parseFloat(width) + "px";
				}
				$$contents.setSelectionobj([contents[imgdiv.curimgindex], contents[index]]);
				$$contents.clearAnimateTimer();
				break;
			case 1:
				for(var i = 0; i < contents.length; i++) {
					if(i != imgdiv.curimgindex && i != index) {
						contents[i].style.zIndex = "";
						$$(contents[i]).mycss("opacity", "0");
					}
				}
				contents[imgdiv.curimgindex].style.zIndex = "200";
				contents[index].style.zIndex = "199";
				$$opacity_curcontentdiv.setSelectionobj(contents[imgdiv.curimgindex]);
				$$opacity_nextcontentdiv.setSelectionobj(contents[index]);
				$$opacity_curcontentdiv.clearAnimateTimer();
				$$opacity_nextcontentdiv.clearAnimateTimer();
				//imgdiv.curimgindex=index;
			default:
				break;
		}

	}
	/**
	 * 图片说明元素手动滑动类型
	 * @param {Number} index        [当前手动选择的选择索引]   
	 * @param {String} end          [移动结束时的位置]
	 */
	function contentManualMove(index) {
		switch(contentMove) {
			case 0:
				for(var i = 0; i < imgdivs.length; i++) {
					if(i != imgdiv.curimgindex && i != index) {
						contents[i].style.left = -2 * parseFloat(width) + "px";
					}
				};
				$$contents.animate({
					"left": {
						"start": true,
						"end": x,
						"time": imgMoveTime,
						"speed": 6,
						"func": function() {
							imgdiv.curimgindex = index;
							contents[index].style.zIndex = '';
							for(var i = index - 1; i > -1; i--) {
								contents[i].style.left = [contents.length - Math.abs(i - index)] * parseFloat(width) + "px";
							}
							for(var i = index; i < imgdivs.length; i++) {
								contents[i].style.left = Math.abs(i - index) * parseFloat(width) + "px";
							}
						}
					}
				}, 1);
				break;
			case 1:
				for(var i = 0; i < contents.length; i++) {
					contents[i].style.left = '';
				}
				$$opacity_curcontentdiv.animate({
					"opacity": {
						"start": true,
						"end": 0,
						"time": imgMoveTime,
						"speed": 10,
						"func": function(obj) {
							obj.style.zIndex = "";
						}
					}
				}, 0);
				$$opacity_nextcontentdiv.animate({
					"opacity": {
						"start": true,
						"end": "1",
						"time": imgMoveTime,
						"speed": 10
					}
				}, 0);
				break;
			default:
				break;
		}
		if(contentMove == 0) {

		}
	}
	/**
	 * 图片说明元素自动滑动
	 */
	function contentAutoMove() {
		switch(contentMove) {
			case 0:
				resetImgContentPosition(imgdiv.curimgindex)
				$$content.animate({
					"left": {
						"start": true,
						"end": "-800",
						"time": imgMoveTime,
						"speed": 6,
						"func": function(obj) {
							if(obj.offsetLeft < 0) {
								obj.style.left = (imgdivs.length - 1) * parseFloat(width) + "px"
							}
						}
					}
				}, 1);
				break;
			case 1:
				for(var i = 0; i < contents.length; i++) {
					contents[i].style.left = '';
					$$(contents[i]).mycss("opacity", "0");
				};
				var jk = 0;
				$$opacity_curcontentdiv.setSelectionobj(contents[imgdiv.curimgindex]);
				if(typeof(contents[imgdiv.curimgindex + 1]) != "undefined") {
					$$opacity_nextcontentdiv.setSelectionobj(contents[imgdiv.curimgindex + 1]);
				} else {
					$$opacity_nextcontentdiv.setSelectionobj(contents[0]);
				}
				$$opacity_curcontentdiv.mycss("opacity", "1");
				$$opacity_nextcontentdiv.mycss("opacity", "0");
				$$opacity_curcontentdiv.mycss("zIndex", "100");
				$$opacity_nextcontentdiv.mycss("zIndex", "100");
				$$opacity_curcontentdiv.clearAnimateTimer();
				$$opacity_nextcontentdiv.clearAnimateTimer();
				$$opacity_curcontentdiv.animate({
					"opacity": {
						"start": true,
						"end": 0,
						"time": imgMoveTime,
						"speed": 10,
						"func": function(obj) {
							obj.style.zIndex = "";
						}
					}
				}, 0);
				$$opacity_nextcontentdiv.animate({
					"opacity": {
						"start": true,
						"end": "1",
						"time": imgMoveTime,
						"speed": 10
					}
				}, 0);
				break;
			default:
				break;
		}

	}
	/**
	 * 图片自动移动函数
	 */
	function imgAutoMove() {
		switch(imgMove) {
			case 0:
				var jk = 0;
				resetImgPosition(imgdiv.curimgindex);
				$$imgs.clearAnimateTimer();
				$$imgs.animate({
					"left": {
						"start": true,
						"end": "-800",
						"time": imgMoveTime,
						"speed": 6,
						"func": function(obj) {
							if(obj.offsetLeft < 0) {
								obj.style.left = (imgdivs.length - 1) * parseFloat(width) + "px"
							}
							jk += 1;
							if(jk == imgdivs.length - 1) {
								selectdivs[imgdiv.curimgindex].style.color = "";
								imgdiv.curimgindex += 1;
								if(imgdiv.curimgindex >= imgdivs.length) {
									imgdiv.curimgindex = 0;
								}
								selectdivs[imgdiv.curimgindex].style.color = "rgb(255,255,255)";
								imgdiv.setAttribute("curimgindex", imgdiv.curimgindex);
							}
						}
					}
				}, 1);
				break;
			case 1:
				for(var i = 0; i < imgdivs.length; i++) {
					imgdivs[i].style.left = '';
					if(i != imgdiv.curimgindex) {
						//selectdivs[i].style.color='rgb(0,0,0)';
					}
				};
				var jk = 0;
				$$opacity_curimgdiv.setSelectionobj(imgdivs[imgdiv.curimgindex]);
				$$opacity_curselectdiv.setSelectionobj(selectdivs[imgdiv.curimgindex]);
				if(typeof(imgdivs[imgdiv.curimgindex + 1]) != "undefined") {
					$$opacity_nextimgdiv.setSelectionobj(imgdivs[imgdiv.curimgindex + 1]);
					$$opacity_nextselectdiv.setSelectionobj(selectdivs[imgdiv.curimgindex + 1]);
				} else {
					$$opacity_nextimgdiv.setSelectionobj(imgdivs[0]);
					$$opacity_nextselectdiv.setSelectionobj(selectdivs[0]);
				}
				$$opacity_curimgdiv.mycss("opacity", "1");
				$$opacity_nextimgdiv.mycss("opacity", "0");
				$$opacity_curimgdiv.mycss("zIndex", "100");
				$$opacity_nextimgdiv.mycss("zIndex", "100");
				$$opacity_curimgdiv.clearAnimateTimer();
				$$opacity_nextimgdiv.clearAnimateTimer();
				$$opacity_curselectdiv.clearAnimateTimer();
				$$opacity_nextselectdiv.clearAnimateTimer();
				$$opacity_curimgdiv.animate({
					"opacity": {
						"start": true,
						"end": 0,
						"time": imgMoveTime,
						"speed": 10,
						"func": function(obj) {
							obj.style.zIndex = "";
						}
					}
				}, 0);
				$$opacity_curselectdiv.animate({
					"color": {
						"start": "rgb(255,255,255)",
						"end": "rgb(0,0,0)",
						"time": imgMoveTime,
						"speed": 10
					}
				}, 0);
				$$opacity_nextselectdiv.animate({
					"color": {
						"start": "rgb(0,0,0)",
						"end": "rgb(255,255,255)",
						"time": imgMoveTime,
						"speed": 10
					}
				}, 0);
				$$opacity_nextimgdiv.animate({
					"opacity": {
						"start": true,
						"end": "1",
						"time": imgMoveTime,
						"speed": 10,
						"func": function(obj) {
							imgdiv.curimgindex += 1;
							if(imgdiv.curimgindex >= imgdivs.length) {
								imgdiv.curimgindex = 0;
							}
						}
					}
				}, 0);
				break;
			default:
				break;
		}
	}
	return this;
}

//功能性函数
mdata.a.prototype.dragResize = function(obj) {
	obj = (typeof(obj) == "object") ? obj : this.myobject;
	obj.style.position = "absolute";
	var b = $$().browser();
	var p = $$().getEleToBodyPosition(obj); //获取元素当前距离浏览器顶部绝对距离
	
	var h = obj.offsetHeight; //获取当前元素高度
	var w = obj.offsetWidth; //获取当前元素宽度
	var w1 = [p.left, p.top]; //左上位置，x,y
	var w2 = [p.left + w, p.top]; //右上角位置，x,y
	var w3 = [p.left + w, p.top + h]; //右下角位置，x,y
	var w4 = [p.left, p.top + h]; //左下角位置，x,y
	var p0 = {
		"x": 0,
		"y": 0,
		"button": -1
	};
	var p1 = {
		"x": 0,
		"y": 0,
		"button": -1
	};
	var movex = 0;
	var movey = 0;
	var SpotRadius = 10; //识别半径，默认5像素
	var SpotArea = -1; //识别区，左上0，上1，右上2，右3，右下4，下5，左下6，左7
	var downflag = -1;
	var h0 = obj.offsetTop + obj.offsetHeight;
	var l0 = obj.offsetWidth + obj.offsetWidth;
	var pe0, pe1;
	$$(obj).addEvent("mousedown", function(e) {
		var jk = $$().getEleToBodyPosition(obj);
		h0 = jk.top + obj.offsetHeight;
		l0 = jk.left + obj.offsetWidth;
		m(e);
		pe0 = $$().getMousePosition(e);
		if(SpotArea >= 0 && SpotArea <= 7) {
			downflag = 1;

		} else {
			downflag = -1;
		}
	});

	if(b.browser == "IE" && b.browserverson == 9) {
		$$(document.body).addEvent("mousemove", function(e) {
			if(downflag == 1 && SpotArea >= 0 && SpotArea <= 7) {
				switch(SpotArea) {
					case 0:
						obj.style.left = p1.x + "px";
						obj.style.width = l0 - p1.x + "px";
						obj.style.top = p1.y + "px";
						obj.style.height = h0 - p1.y + "px";
						break;
					case 1:
						obj.style.top = p1.y + "px";
						obj.style.height = h0 - obj.offsetTop + "px";
						break;
					case 2:
						obj.style.width = p1.x - obj.offsetLeft + "px";
						obj.style.top = p1.y + "px";
						obj.style.height = h0 - p1.y + "px";
						break;
					case 3:
						obj.style.width = p1.x - obj.offsetLeft + "px";
						break;
					case 4:
						obj.style.width = p1.x - obj.offsetLeft + "px";
						obj.style.height = p1.y - obj.offsetTop + "px";
						break;
					case 5:
						obj.style.height = p1.y - obj.offsetTop + "px";
						break;
					case 6:
						obj.style.left = p1.x + "px";
						obj.style.width = l0 - p1.x + "px";
						obj.style.height = p1.y - obj.offsetTop + "px";
						break;
					case 7:
						obj.style.left = p1.x + "px";
						obj.style.width = l0 - p1.x + "px";
						break;
				}
			}
		});
	} else if(b.browser == "IE" && b.browserverson == 8) {
		function iemouseup(e, ieobj) {
			downflag = -1;
			pe1 = $$().getMousePosition(e);
			var iemovex = pe1.x - pe0.x;
			var iemovey = pe1.y - pe0.y;
			ieobj.style.cursor = "default";
			switch(SpotArea) {
				case 0:
					ieobj.style.left = ieobj.offsetLeft + iemovex + "px";
					ieobj.style.width = iemovex + ieobj.offsetWidth + "px";
					ieobj.style.top = ieobj.offsetTop + iemovey + "px";
					ieobj.style.height = ieobj.offsetHeight + iemovey + "px";
					break;
				case 1:
					ieobj.style.top = ieobj.offsetTop + iemovey + "px";
					ieobj.style.height = ieobj.offsetHeight - iemovey + "px";
					break;
				case 2:
					ieobj.style.width = iemovex + ieobj.offsetWidth + "px";
					ieobj.style.top = ieobj.offsetTop + iemovey + "px";
					ieobj.style.height = ieobj.offsetHeight + iemovey + "px";
					break;
				case 3:
					ieobj.style.width = iemovex + ieobj.offsetWidth + "px";
					break;
				case 4:
					ieobj.style.width = iemovex + ieobj.offsetWidth + "px";
					ieobj.style.height = ieobj.offsetHeight + iemovey + "px";
					break;
				case 5:
					ieobj.style.height = ieobj.offsetHeight + iemovey + "px";
					break;
				case 6:
					ieobj.style.left = ieobj.offsetLeft + iemovex + "px";
					ieobj.style.width = iemovex + ieobj.offsetWidth + "px";
					ieobj.style.height = ieobj.offsetHeight + iemovey + "px";
					break;
				case 7:
					ieobj.style.left = ieobj.offsetLeft + iemovex + "px";
					ieobj.style.width = ieobj.offsetWidth - iemovex + "px";
					break;
			}
			SpotArea = -1;
		}
		$$(obj).addEvent("mouseup", function(e) {
			iemouseup(e, obj)
		});
		var mmobj = obj;
		while(obj.parentNode) {
			$$(obj.parentNode).addEvent("mouseup", function(e) {
				iemouseup(e, mmobj);
			});
			obj = obj.parentNode;
		}
		obj = mmobj;
	} else {
		$$(document.body).addEvent("mousemove", function(e) {
			if(downflag == 1 && SpotArea >= 0 && SpotArea <= 7) {
				p1 = $$().getMousePosition(e);
				switch(SpotArea) {
					case 0:
						obj.style.left = p1.x + "px";
						obj.style.width = l0 - p1.x + "px";
						obj.style.top = p1.y + "px";
						obj.style.height = h0 - p1.y + "px";
						break;
					case 1:
						obj.style.top = p1.y + "px";
						obj.style.height = h0 - obj.offsetTop + "px";
						break;
					case 2:
						obj.style.width = p1.x - obj.offsetLeft + "px";
						obj.style.top = p1.y + "px";
						obj.style.height = h0 - p1.y + "px";
						break;
					case 3:
						obj.style.width = p1.x - obj.offsetLeft + "px";
						break;
					case 4:
						obj.style.width = p1.x - obj.offsetLeft + "px";
						obj.style.height = p1.y - obj.offsetTop + "px";
						break;
					case 5:
						obj.style.height = p1.y - obj.offsetTop + "px";
						break;
					case 6:
						obj.style.left = p1.x + "px";
						obj.style.width = l0 - p1.x + "px";
						obj.style.height = p1.y - obj.offsetTop + "px";
						break;
					case 7:
						obj.style.left = p1.x + "px";
						obj.style.width = l0 - p1.x + "px";
						break;
				}
			}
		});
		$$(obj).addEvent("mouseup", function() {
			downflag = -1;
			SpotArea = -1;
			obj.style.cursor = "default";
			h0 = obj.offsetTop + obj.offsetHeight;
			l0 = obj.offsetLeft + obj.offsetWidth;
		});
		var mmobj = obj;
		while(obj.parentNode) {
			$$(obj.parentNode).addEvent("mouseup", function() {
				downflag = -1;
				SpotArea = -1;
				obj.style.cursor = "default";
				h0 = obj.offsetTop + obj.offsetHeight;
				l0 = obj.offsetLeft + obj.offsetWidth;
			});
			obj = obj.parentNode;
		}
		obj = mmobj;
	}
	$$(obj).addEvent("mousemove", function(event) {
		if(downflag < 1) {
			m(event);
		}
	});

	function m(event) {
		p = $$().getEleToBodyPosition(obj); //获取元素当前距离浏览器顶部绝对距离
		h = obj.offsetHeight; //获取当前元素高度
		w = obj.offsetWidth; //获取当前元素宽度
		w1 = [p.left, p.top]; //左上位置，x,y
		w2 = [p.left + w, p.top]; //右上角位置，x,y
		w3 = [p.left + w, p.top + h]; //右下角位置，x,y
		w4 = [p.left, p.top + h]; //左下角位置，x,y
		p0 = $$().getMousePosition(event);
		//左上角
		if(p0.x >= w1[0] - SpotRadius && p0.x <= w1[0] + SpotRadius && p0.y >= w1[1] - SpotRadius && p0.y <= w1[1] +
			SpotRadius) {
			obj.style.cursor = "se-resize";
			SpotArea = 0;
		} else if(p0.x > w1[0] + SpotRadius && p0.x <= w2[0] - SpotRadius && p0.y >= w1[1] - SpotRadius && p0.y <= w1[1] +
			SpotRadius) {
			obj.style.cursor = "s-resize";
			SpotArea = 1;
		} else if(p0.x > w2[0] - SpotRadius && p0.x < w2[0] + SpotRadius && p0.y >= w2[1] - SpotRadius && p0.y <= w2[1] +
			SpotRadius) {
			obj.style.cursor = "sw-resize";
			SpotArea = 2;
		} else if(p0.x > w2[0] - SpotRadius && p0.x < w2[0] + SpotRadius && p0.y > w2[1] + SpotRadius && p0.y < w3[1] -
			SpotRadius) {
			obj.style.cursor = "w-resize";
			SpotArea = 3;
		} else if(p0.x >= w2[0] - SpotRadius && p0.x <= w2[0] + SpotRadius && p0.y >= w3[1] - SpotRadius && p0.y <= w3[1] +
			SpotRadius) {
			obj.style.cursor = "nw-resize";
			SpotArea = 4;
		} else if(p0.x > w1[0] + SpotRadius && p0.x < w2[0] - SpotRadius && p0.y >= w3[1] - SpotRadius && p0.y <= w3[1] +
			SpotRadius) {
			obj.style.cursor = "n-resize";
			SpotArea = 5;
		} else if(p0.x >= w4[0] - SpotRadius && p0.x <= w4[0] + SpotRadius && p0.y >= w4[1] - SpotRadius && p0.y <= w4[1] +
			SpotRadius) {
			obj.style.cursor = "ne-resize";
			SpotArea = 6;
		} else if(p0.x >= w1[0] - SpotRadius && p0.x <= w1[0] + SpotRadius && p0.y > w1[1] + SpotRadius && p0.y <= w4[1] -
			SpotRadius) {
			obj.style.cursor = "e-resize";
			SpotArea = 7;
		} else {
			SpotArea = -1;
			obj.style.cursor = "";
		}
	}

}
mdata.a.prototype.drag = function(dragobj) {
	var enableMove = false;
	var p0, p1;
	var that = this;

	var b = $$().browser();

	that.myobject.style.position = 'absolute';
	$$().unSelect(that.myobject);
	var bwidth = 5; //距离边框高度
	var mousedown = function(e) {
		p0 = $$().getMousePosition(e);
		var p = $$().getEleToBodyPosition(dragobj);
		if(p0.x > p.left + bwidth && p0.x < p.left + that.myobject.offsetWidth - bwidth && p0.y > p.top + bwidth && p0.y <
			that.myobject.offsetHeight + p.top - bwidth) {
			dragobj.style.cursor = "move";
			enableMove = true;
		}
	};
	var mousemove = function(e) {
		if(enableMove == true) {
			p1 = $$().getMousePosition(e);
			if(that.myobject.offsetLeft + p1.x - p0.x>=0 && that.myobject.offsetTop + p1.y - p0.y >=0 && that.myobject.offsetTop + p1.y - p0.y<document.body.clientHeight-that.myobject.offsetHeight*0.4 && that.myobject.offsetLeft + p1.x - p0.x<document.body.clientWidth-that.myobject.offsetWidth){
				that.myobject.style.left = that.myobject.offsetLeft + p1.x - p0.x + "px";
				that.myobject.style.top = that.myobject.offsetTop + p1.y - p0.y + "px";
				p0 = p1;
			}
		}
	};
	var mouseup = function(e) {
		that.myobject.style.cursor = "";
		dragobj.style.cursor = "";
		enableMove = false;
	};
	if(b.browser == "IE" && b.browserverson < 10) {

	} else {
		$$(dragobj).addEvent('mousedown', mousedown);
		$$(window).addEvent('mousemove', mousemove);
		$$(window).addEvent('mouseup', mouseup);
	}

}
mdata.a.prototype.hovers = function(width, height) {
	this.mask; //遮罩div
	this.popWindow; //弹窗div
	this.table; //弹窗div里面的table，此table三行，第一行4列：标题、最小化、最大化、关闭，第二行一列，该列里面有一个table，table一行2*N列，第三行一列，位内容
	this.closeFunc = []; //关闭按钮函数数组
	this.bigFunc = []; //最大化按钮函数数组
	this.smallFunc = []; //最小化按钮函数数组
	this.menu = []; //顶部菜单数组
	var that = this;
	var browser = $$().browser();
	width = that.defaults(width, "600px");
	height = that.defaults(height, "450px");
	var left;
	var top;
	//遮罩区域
	function initMask() {
		that.mask = that.addEle("div", {
			"cursor": "default",
			"width": "100%",
			"height": "100%",
			"zIndex": "9001",
			"position": "absolute",
			"float": "left",
			"top": "0",
			"left": "0",
			"background": "rgba(0,0,0,0.2)"
		});
		$$().unSelect(that.mask);
		//弹窗情况下，屏蔽页面其他操作
		$$(that.mask).addEvent("mousedown", function() {}, true);
	};
	//创建弹窗区域
	function initMainWindow() {
		var browerViewSize = that.getBrowerClientSize();
		var closeobj = new Object();
		//窗口区域
		that.popWindow = $$(that.mask).addEle("div", {
			"position": "relative",
			"cursor": "default",
			"width": width,
			"height": height,
			"zIndex": "9001",
			"float": "left",
			"textAlign": "center",
			"border": "2px solid black",
			"backgroundColor": "white"
		});
		var left = (that.mask.offsetWidth - that.popWindow.offsetWidth) / 2 + "px";
		var top = (that.mask.offsetHeight - that.popWindow.offsetHeight) / 2 + "px";
		that.popWindow.style.left = left;
		that.popWindow.style.top = top;
		//弹窗内容区
		that.table = $$(that.popWindow).create_table(false, ["35px", "20px", "100% - 55px"], {
			"tr0": ["88%", '4% {"css":{"fontWeight":"bold"}}', '4% {"css":{"fontWeight":"bold"}}',
				'4% {"css":{"fontWeight":"bold"}}'
			],
			'tr1': ['100% {"type":{"colspan":"4"}}'],
			'tr2': ['100% {"type":{"colspan":"4"}}']
		});
		that.table.style.position = "";
		that.table.tr[0].td[0].style.textAlign = "center";
		that.table.style.height = "";
		var title = $$(that.table.tr[0].td[0]).addEle("span");
		title.innerHTML = "标题";
		that.table.tr[0].style.backgroundColor = "cornflowerblue";
		that.table.tr[0].style.textAlign = "center";
		that.table.tr[0].style.display = "";
		that.table.tr[1].style.display = "";
		that.table.tr[2].style.display = "";
		that.table.tr[1].td[0].style.width = "100%";
		that.table.tr[1].style.borderBottom = "1px solid black";
		that.table.tr[1].td[0].table = $$(that.table.tr[1].td[0]).table();
		that.table.tr[1].td[0].table.table.style.width = "100%";
		that.table.tr[1].td[0].table.addTr({
			"width": "100%"
		});
		for(var i = 0; i < that.menu.length * 2; i++) {
			var tdwidth = that.table.tr[1].td[0].offsetWidth * (100 / (that.menu.length * 2)) / 100 + "px";
			var td = that.table.tr[1].td[0].table.addTd(0, {
				"width": tdwidth
			});
			if(i < that.menu.length) {
				td.innerHTML = that.menu[i];
			}
		}
		that.table.tr[2].td[0].style.width = "100%";
		$$(that.popWindow).drag(that.table.tr[0].td[0]);
		//关闭窗口
		that.table.tr[0].td[1].style.textAlign = "center";
		that.table.tr[0].td[1].innerHTML = "-";
		that.table.tr[0].td[2].innerHTML = "□";
		that.table.tr[0].td[3].innerHTML = "×";
		//最小化
		$$(that.table.tr[0].td[1]).addEvent("click", function() {
			for(i = 0; i < that.smallFunc.length; i++) {
				that.smallFunc[i];
			};
			that.mask.style.display = "none";
		})
		//最大化或还原
		function bigs() {
			for(i = 0; i < that.bigFunc.length; i++) {
				that.bigFunc[i];
			};
			if(that.popWindow.style.width == "100%") {
				that.popWindow.style.width = width;
				that.popWindow.style.height = height;
				that.popWindow.style.left = left;
				that.popWindow.style.top = top;
			} else {
				width = that.popWindow.offsetWidth + "px";
				height = that.popWindow.offsetHeight + "px";
				left = that.popWindow.offsetLeft + "px";
				top = that.popWindow.offsetTop + "px";
				that.popWindow.style.width = "100%";
				$$(that.popWindow).mycss("height", "100% - 4px");
				that.popWindow.style.top = "0";
				that.popWindow.style.left = "0";
			}
		}
		$$(that.table.tr[0]).addEvent("dblclick", function() {
			bigs();
		})
		$$(that.table.tr[0].td[2]).addEvent("click", function() {
			bigs();
		})
		//关闭
		$$(that.table.tr[0].td[3]).addEvent("click", function() {
			for(i = 0; i < that.closeFunc.length; i++) {
				that.closeFunc[i];
			};
			that.mask.style.display = "none";
		})
	}
	this.initMenu = function(menu) {
		if(typeof(menu) == "object") {
			that.menu = menu;
		}
	}
	this.SelectMenu = function(index) {
		return $$(that.table.tr[1].td[0].childNodes[0].tr[0].td[index]).treeMenu();
	}
	this.init = function(menu) {
		that.initMenu(menu);
		initMask();
		initMainWindow();
	}
	this.setTitle = function(title) {
		that.table.tr[0].td[0].innerHTML = title;
	};
	return this;
}
mdata.a.prototype.colorSelect = function(sure_func, cancel_func) {
	var left = this.getEleToBodyPosition(this.myobject);
	var browser = this.browser();
	var colors;
	var box = $$(document.body).addEle("div", {
		"backgroundColor": "white",
		"zIndex": "9999",
		"border": "1px solid black",
		"position": "absolute",
		"float": "left",
		"left": left.left + "px",
		"top": left.top + this.myobject.offsetHeight + "px",
		"width": "250px",
		"height": "250px"
	});
	var t = $$(box).table();
	t.table.style.position = "absolute";
	t.table.style.left = "0";
	$$(box).unSelect();
	t.addTr();
	t.addTr();
	t.addTr();
	t.addTr();
	t.addTd(0, {
		"width": "40%"
	});
	t.addTd(0, {
		"width": "20%"
	}).innerHTML = "R";

	t.addTd(1, {
		"width": "40%"
	});
	t.addTd(1, {
		"width": "20%"
	}).innerHTML = "G";

	t.addTd(2, {
		"width": "40%"
	});
	t.addTd(2, {
		"width": "20%"
	}).innerHTML = "B";

	t.addTd(3, {
		"width": "40%"
	});
	t.addTd(3, {
		"width": "20%"
	}).innerHTML = "A";

	t.table.style.width = "80%";
	t.table.style.height = "80%";

	var ov = $$(t.table.tr[3].td[1]).addEle("input", {
		"width": "60%",
		"height": "60%",
		"top": "10%",
		"top": "20%"
	}, {
		"type": "text",
		"min": 0,
		"max": 100,
		"step": 5,
		"value": 100
	});
	var o = $$(t.table.tr[3].td[0]).range("100%", "20px", 0, 100, 100, -1);

	var rv = $$(t.table.tr[0].td[1]).addEle("input", {
		"width": "60%",
		"height": "60%",
		"top": "10%",
		"top": "20%"
	}, {
		"type": "text",
		"min": 0,
		"max": 255,
		"step": 1,
		"value": 0
	});
	var gv = $$(t.table.tr[1].td[1]).addEle("input", {
		"width": "60%",
		"height": "60%",
		"top": "10%",
		"top": "20%"
	}, {
		"type": "text",
		"min": 0,
		"max": 255,
		"step": 1,
		"value": 0
	});
	var bv = $$(t.table.tr[2].td[1]).addEle("input", {
		"width": "60%",
		"height": "60%",
		"top": "10%",
		"top": "20%"
	}, {
		"type": "text",
		"min": 0,
		"max": 255,
		"step": 1,
		"value": 0
	});
	var r = $$(t.table.tr[0].td[0]).range("100%", "20px", 0, 255, 0, -1);
	var g = $$(t.table.tr[1].td[0]).range("100%", "20px", 0, 255, 0, -1);
	var b = $$(t.table.tr[2].td[0]).range("100%", "20px", 0, 255, 0, -1);
	var cobj = $$(box).addEle("div", {
		"width": "20%",
		"height": t.table.offsetHeight + "px",
		"position": "relative",
		"display": "inline-block",
		"left": "80%",
		"float": "left"
	});

	var color = function(typed) {
		if(typed == 0) {
			rv.value = r.getCurValue(0);
			gv.value = g.getCurValue(0);
			bv.value = b.getCurValue(0);
			ov.value = o.getCurValue(0);
		} else {
			rv.value = (rv.value > 255) ? 255 : rv.value;
			gv.value = (gv.value > 255) ? 255 : gv.value;
			bv.value = (bv.value > 255) ? 255 : bv.value;
			ov.value = (ov.value > 255) ? 100 : ov.value;
			r.setValue(rv.value);
			g.setValue(gv.value);
			b.setValue(bv.value);
			o.setValue(ov.value);
		}
		if(browser.browser == "IE" && browser.browserverson < 9) {
			colors = "rgb(" + r.getCurValue(0) + "," + g.getCurValue(0) + "," + b.getCurValue(0) + ")";
		} else {
			colors = "rgba(" + r.getCurValue(0) + "," + g.getCurValue(0) + "," + b.getCurValue(0) + "," + o.getCurValue(0) /
				100 + ")";
		}
		cobj.style.backgroundColor = colors;
	}
	o.setFunc(function() {
		color(0)
	});
	r.setFunc(function() {
		color(0)
	});
	g.setFunc(function() {
		color(0)
	});
	b.setFunc(function() {
		color(0)
	});
	$$(rv).addEvent("change", function() {
		color(1)
	});
	$$(gv).addEvent("change", function() {
		color(1)
	});
	$$(bv).addEvent("change", function() {
		color(1)
	});
	$$(ov).addEvent("change", function() {
		color(1)
	});
	if(browser.browser == "IE" && browser.browserverson < 9) {
		colors = "rgb(" + r.getCurValue(0) + "," + g.getCurValue(0) + "," + b.getCurValue(0) + ")";
	} else {
		colors = "rgba(" + r.getCurValue(0) + "," + g.getCurValue(0) + "," + b.getCurValue(0) + "," + o.getCurValue(0) / 100 +
			")";
	}
	cobj.style.backgroundColor = colors;
	var t1 = $$(box).table();
	t1.addTr();
	t1.addTd(0, {
		"width": "50%",
		"height": "100%"
	});
	t1.addTd(0, {
		"width": "50%",
		"height": "100%"
	});
	t1.table.style.width = "100%";
	t1.table.style.height = "20%";
	t1.table.style.textAlign = "center";
	var sure = $$(t1.table.tr[0].td[0]).addEle("button", 0, 0, "确定");
	$$(sure).addEvent("click", function() {
		if(typeof(sure_func) == "function") {
			sure_func(colors);
		};
		box.style.display = "none";
	})
	var cancel = $$(t1.table.tr[0].td[1]).addEle("button", 0, 0, "取消");
	$$(cancel).addEvent("click", function() {
		box.style.display = "none";
		if(typeof(cancel_func) == "function") {
			cancel_func();
		}
		box.style.display = "none";
	})
	box.style.display = "none";
	this.addEvent("click", function() {
		box.style.display = "inline-block";
	})
	this.display = function() {
		box.style.display = "inline-block";
	}
	this.undisplay = function() {
		box.style.display = "";
	}
	return this;
}
/**
 * 滑块
 * @param {String} width    [宽度，当宽度大于高度时，滑块横向，否则滑块垂直]
 * @param {String} height   [高度]
 * @param {Number} min      [最小值]
 * @param {Number} max      [最大值]
 * @param {Number} step     [点击滑块时步进数量,为负值时，滑块步进到鼠标位置，正值时，步进相关数据]
 * @param {Number} type     [滑块最小值类型，0左边和下边是最小值，1的时候右边和上边是最小值，默认0]
 * @param {Number} value    [默认值]
 * 
 */
mdata.a.prototype.range = function(width, height, min, max, value, step, type, movefunc) {
	var cwidth, cheight, cmin, cmax, cstep, cvalue, ctype, cfunc;
	cwidth = (typeof(width) != "undefined") ? width : 100;
	cheight = (typeof(height) != "undefined") ? height : 10;
	cmax = (typeof(max) == "number") ? max : 100;
	cmin = (typeof(min) == "number") ? min : 0;
	ctype = (typeof(type) == "number") ? 1 : 0;
	cstep = (typeof(step) == "number") ? step : -1;
	cvalue = (typeof(value) == "number") ? value : 0;

	var x = this.addEle("div", {
		"width": this.width_height(cwidth),
		"height": this.width_height(cheight)
	});
	var d, s;
	var flag = 0;
	x.style.cursor = "default";
	$$(x).unSelect();
	if(x.offsetHeight <= x.offsetWidth) {
		d = $$(x).addEle("div", {
			"width": "100%",
			"height": "10%",
			"backgroundColor": "gainsboro",
			"position": "relative",
			"top": "45%",
			"left": "0",
			"float": "left"
		});
		s = $$(x).addEle("div", {
			"width": "10%",
			"height": "60%",
			"backgroundColor": "dimgray",
			"position": "relative",
			"top": "20%"
		});
	} else {
		d = $$(x).addEle("div", {
			"width": "10%",
			"height": "100%",
			"backgroundColor": "gainsboro",
			"position": "relative",
			"left": "45%",
			"top": "0",
			"float": "left"
		});
		s = $$(x).addEle("div", {
			"width": "60%",
			"height": "10%",
			"backgroundColor": "dimgray",
			"position": "relative",
			"top": "90%",
			"left": "20%"
		});
	};
	$$(d).unSelect();
	$$(s).unSelect();
	$$(x).addEvent("mouseup", function(e) {
		flag = 0;
	});
	$$(window).addEvent("mouseup", function(e) {
		flag = 0;
	});
	$$().addEvent("mouseup", function(e) {
		flag = 0;
	});
	$$(s).addEvent("mousedown", function() {
		flag = 1;
	});
	$$(window).addEvent("mousemove", function(e) {
		if(flag == 1) {
			var f = $$().getMousePosition(e);
			if(x.offsetHeight <= x.offsetWidth) {
				var mo = f.x - $$().getEleToBodyPosition(x).left;
				if(mo < 0) {
					mo = 0;
				}
				if(mo >= x.offsetWidth * 0.9) {
					mo = x.offsetWidth * 0.9;
				}
				cvalue = mo * (cmax - cmin) / (x.offsetWidth - s.offsetWidth) + cmin;
				s.style.left = mo + "px";
				if(typeof(cfunc) == "function") {
					cfunc(cvalue);
				}

			} else {
				var mo = f.y - $$().getEleToBodyPosition(x).top;
				if(mo < 0) {
					mo = 0;
				}
				if(mo >= x.offsetHeight * 0.9) {
					mo = x.offsetHeight * 0.9;
				}
				cvalue = ((x.offsetHeight - s.offsetHeight) - mo) * (cmax - cmin) / (x.offsetHeight - s.offsetHeight) + cmin;
				s.style.top = mo + "px";
				if(typeof(cfunc) == "function") {
					cfunc(cvalue)
				}
			}
		}
	});
	$$(x).addEvent("click", function(e) {
		var f = $$().getMousePosition(e);
		if(x.offsetHeight <= x.offsetWidth) {
			var mo = f.x - $$().getEleToBodyPosition(x).left;
			if(mo < 0) {
				mo = 0;
			}
			if(mo >= x.offsetWidth * 0.9) {
				mo = x.offsetWidth * 0.9;
			}
			if(cstep > -1) {
				mo = s.offsetLeft + (cstep - cmin) / (cmax - cmin) * (x.offsetWidth - s.offsetWidth);
			}
			cvalue = mo * (cmax - cmin) / (x.offsetWidth - s.offsetWidth) + cmin;
			if(typeof(cfunc) == "function") {
				cfunc(cvalue)
			}
			s.style.left = mo + "px";
		} else {
			var mo = f.y - $$().getEleToBodyPosition(x).top;
			if(mo < 0) {
				mo = 0;
			}
			if(mo >= x.offsetHeight * 0.9) {
				mo = x.offsetHeight * 0.9;
			}
			if(cstep > -1) {
				mo = s.offsetLeft + (cstep - cmin) / (cmax - cmin) * (x.offsetHeight - s.offsetHeight);
			}
			cvalue = ((x.offsetHeight - s.offsetHeight) - mo) * (cmax - cmin) / (x.offsetHeight - s.offsetHeight) + cmin;
			if(typeof(cfunc) == "function") {
				cfunc(cvalue);
			}
			s.style.top = mo + "px";
		}
	});
	this.setMax = function(MaxValue) {
		cmax = MaxValue;
	};
	this.setMin = function(MinValue) {
		cmin = MinValue;
	};
	this.getCurValue = function(num) {
		num = (typeof(num) == "undefined") ? 0 : ((typeof(num) == "number") ? num : 0);
		return cvalue.toFixed(num);
	}
	this.setFunc = function(f) {
		cfunc = f;
	}
	this.setValue = function(CurValue) {
		value = parseFloat(CurValue);
		cvalue = value;
		var a = (value - cmin) / (cmax - cmin);
		a = (a >= 1) ? 1 : a;
		if(x.offsetHeight <= x.offsetWidth) {
			if(ctype == 0) {
				s.style.left = a * (x.offsetWidth - s.offsetWidth) + "px";
			}
			if(ctype == 1) {
				s.style.left = (x.offsetWidth - s.offsetWidth) - a * (x.offsetWidth - s.offsetWidth) + "px";
			}
		} else {
			if(ctype == 1) {
				s.style.top = a * (x.offsetHeight - s.offsetHeight) + "px";
			}
			if(ctype == 0) {
				s.style.top = (x.offsetHeight - s.offsetHeight) - a * (x.offsetHeight - s.offsetHeight) + "px";
			}
		}

	};
	this.setStep = function(StepValue) {
		cstep = StepValue;
	};
	this.setValue(cvalue)
	return this;
}
mdata.a.prototype.selectList = function(jsonstyle, cols) {
	this.div = $$().addEle("div", jsonstyle);
	this.selectcorlor = "rgb(34,190,235)"
	$$(this.div).mycss({
		"border": "1px solid black",
		"overflow": "auto"
	});
	this.table = $$(this.div).table();
	$$(this.table.table).mycss({
		"cellspading": "2px",
		"width": "100%"
	})
	var that = this;
	var t = this.table.table
	this.addfunction = function(j, index) {
		$$(t.tr[index].td[j]).addEvent("mouseenter", function() {
			t.tr[index].td[j].style.backgroundColor = that.selectcorlor;
		})
		$$(t.tr[index].td[j]).addEvent("mouseleave", function() {
			t.tr[index].td[j].style.backgroundColor = "";
		})

	}
	this.add = function() {
		that.table.addTr();
		that.table.addTd(t.tr.length - 1, {
			"width": 100 / cols + "%",
			"textAlign": "center"
		});
		that.table.addTd(t.tr.length - 1, {
			"width": 100 / cols + "%",
			"textAlign": "center"
		});
		that.table.addTd(t.tr.length - 1, {
			"width": 100 / cols + "%",
			"textAlign": "center"
		});
		that.addfunction(0, t.tr.length - 1);
		that.addfunction(1, t.tr.length - 1);
		that.addfunction(2, t.tr.length - 1);
	}
	this.add();
	tdnum = cols;

	this.addSelect = function(texct) {
		var jk = 0;
		for(var j = 0; j < tdnum; j++) {
			if(t.tr[t.tr.length - 1].td[j].innerHTML == "" && jk == 0) {
				jk = 1;
				d = $$(t.tr[t.tr.length - 1].td[j]).addEle("p", {
					"cursor": "default",
					"display": "inline-block"
				}, 0, texct);
			}
		}
		if(jk == 0) {
			that.add();
			$$(t.tr[t.tr.length - 1].td[0]).addEle("p", {
				"cursor": "default",
				"display": "inline-block"
			}, 0, texct);
		}

	}
	return this;
}
mdata.a.prototype.SelectM = function(obj, mystyle, mytype) {
	that = this;
	that.table = 0;
	var div;
	var span = ",";
	this.MaxDisplayNum = 10; //
	this.mode = 1; //1多选
	this.selectcolor = "#3399ff";
	this.clicked = 0;
	var strs = [];
	var box;
	var timestrobj;
	if(typeof(obj) != "object") {
		obj = this.myobject;
	}

	function getOffsetLeftByBody(el) {
		let offsetLeft = 0
		while(el && el.tagName !== 'BODY') {
			offsetLeft += el.offsetLeft;
			el = el.offsetParent;
		}
		return offsetLeft
	}

	function getOffsetTopByBody(el) {
		let offsetTop = 0
		while(el && el.tagName !== 'BODY') {
			offsetTop += el.offsetTop;
			el = el.offsetParent;
		}
		return offsetTop
	}
	this.setImg = function(src) {
		timeclickobj.innerHTML = "<img src='" + src + "'>"
	}
	this.setSpan = function(str) {
		span = str;
	}
	//创建可见区域
	div = $$(obj).addEle("div", mystyle, mytype);
	$$(div).unSelect();
	div.style.border = "1px solid black";
	div.style.cursor = "default";
	timestrobj = $$(div).addEle("input", {
		"width": div.offsetWidth - 24 + "px",
		"height": "100%",
		"display": "inline-block",
		"textAlign": "center",
		"border": "none"
	}, {
		"type": "text",
		"readonly": "readonly"
	});

	var sp = $$(div).addEle("div", {
		"width": "20px",
		"height": "100%",
		"display": "inline-block"
	});
	timestrobj.value = "";
	timeclickobj = $$(sp).addEle("span", 0, 0, "▽");
	timeclickobj.style.top = (sp.offsetHeight - timeclickobj.offsetHeight) / 2 + "px";
	timeclickobj.style.position = "relative";
	var fonts = $$().autoFontSize(1, "1970-01-01 08:00:00.000", timestrobj);
	timestrobj.style.fontSize = fonts;
	//选框区域
	var t = div.offsetTop + div.offsetHeight + "px";
	var l = div.offsetLeft + "px";
	box = $$().addEle("div", {
		"width": div.offsetWidth - 2 + "px",
		"border": "1px solid  black",
		"top": t,
		"left": l,
		"position": "absolute",
		"zIndex": "9999",
		"tabIndex": "0",
		"background-color": "white"
	});

	that.table = $$(box).table();
	that.table.table.style.width = "100%";
	box.style.display = "none";
	$$(box).unSelect();
	$$(timeclickobj).addEvent("click", function() {
		if(box.style.display == "none") {
			box.style.display = "";
			if(strs.length > that.MaxDisplayNum) {
				box.style.height = that.table.tr[0].offsetHeight * that.MaxDisplayNum + "px";
				box.style.overflowY = "scroll";
			}
			box.focus();
			box.style.left = div.offsetLeft + "px";
			box.style.top = div.offsetTop + div.offsetHeight + "px";
			that.clicked = 1;
		} else {
			box.style.display = "none";
			that.clicked = 0;
		}
	});
	this.show = function(enable) {
		if(typeof(enable) != "undefined") {
			if(enable == 1) {
				div.style.display = "";
			} else {
				div.style.display = "none";
			}

		} else {
			div.style.display = "none";
		}
	}
	this.clears = function() {
		that.strs = [];
		while(that.table.tr.length > 0) {
			that.table.removeTr(0);
		}
	}
	$$(box).addEvent("mousedown", function() {}, true)
	$$().addEvent("mousedown", function() {
		box.style.display = "none";
	})
	var lastSelect = 0;

	function sel(obj) {
		str = obj.innerHTML;
		if(that.mode == 1) {
			if(timestrobj.value.search(str + span) > -1) {
				var s = timestrobj.value;
				timestrobj.value = s.replace(str + span, ""); //把'is'替换为空字符串
				obj.style.backgroundColor = "";
			} else {
				timestrobj.value += str + span;
				obj.style.backgroundColor = that.selectcolor;
			}

		}
		if(that.mode == 0) {
			if(typeof(lastSelect) == "object") {
				lastSelect.style.backgroundColor = "";
			}
			lastSelect = obj;
			if(obj.style.backgroundColor == "") {
				obj.style.backgroundColor = that.selectcolor;
				timestrobj.value = str;
			} else {
				timestrobj.value = "";
				obj.style.backgroundColor = "";
			}
		}
	}
	this.SelectAll = function() {
		for(i in strs) {
			this.setSelectedByIndex(i);
		}
	}
	this.setSelectedByIndex = function(index) {
		sel(that.table.table.tr[index].td[0])
	}
	this.setSelectedByString = function(str) {
		for(i in strs) {
			if(strs[i] == str) {
				sel(that.table.table.tr[index].td[0])
			}
		}
	}
	this.getValue = function() {
		return timestrobj.value;
	}
	this.addSelect = function(str, CallBack) {
		that.table.addTr();
		strs.push(str);
		var i = that.table.table.tr.length;
		var d = that.table.addTd(i - 1);
		d.style.textAlign = "center";
		d.innerHTML = str;
		d.style.cursor = "default";
		(function(d, str) {
			$$(d).addEvent("mousedown", function() {
				sel(d)
				if(typeof(CallBack) == "function") {
					CallBack(str);
				}

			})
		})(d, str)
	};
	//创建弹窗区域外壳div
	return this;
}
mdata.a.prototype.dvideo = function(obj, src) {
	if(typeof(obj) != "object") {
		obj = this.myobject;
	}
	if(typeof(obj.id) == "undefined") {
		obj.id = $$().checkId();
	}
	if(obj.id == "") {
		obj.id = $$().checkId();
	}
	var id = obj.id;
	var video = new Dvideo({
		ele: "#" + id,
		title: 'Pneumatic Tokyo - EnV',
		nextVideoExtend: function() {
			alert('您点击了下一页')
		},
		showNext: true,
		width: obj.offsetWidth,
		height: obj.offsetHeight,
		src: src,
		autoplay: true,
		setVideoDefinition: function(type, e, current) {
			if(type === '0') {
				alert('你点击了标清')
				// video.setVideoInfo('這是標清','这里填写视频的标清地址',current)
			}
			if(type === '1') {
				alert('你点击了标清')
				// video.setVideoInfo('這是標清','这里填写视频的高清地址',current)
			}
			if(type === '2') {
				alert('你点击了标清')
				// video.setVideoInfo('這是標清','这里填写视频的超清地址',current)
			}
			video.showLoading(false)
		},
	});

	video.opt.ele.childNodes[2].firstChild.id = $$().checkId();
	// 全屏
	this.setFullScreen = function() {
		video.launchFullScreen(videoWrap)
	}
	// 播放
	this.play = function() {
		video.videoPlay()
		//		video.opt.ele.firstChild.firstChild.play()
	}

	// 暂停
	this.stop = function() {
		video.videoPause()
		video.videoRewind(99999)
	}

	// 播放暂停
	this.pause = function() {
		video.videoPlayPause()
	}

	this.setVolume = function(v) {
		video.updateVolume(v)
	}

	this.setBackRate = function(index) {
		video.setPlayBackRate(index)
	}

	this.setVideoForward = function() {
		video.videoForward(10)
	}

	this.setVideoRewind = function() {
		video.videoRewind(10)
	}

	this.showLoading = function() {
		video.showLoading(true, '视频清晰度切换中，请稍等')
	}

	this.showTopBottomCtrlNotClose = function() {
		video.showTopBottomCtrl()
	}

	this.hideTopBottomCtrlLi = function() {
		video.hideTopBottomCtrl(true)
	}

	this.showTopBottomCtrl = function() {
		video.showTopBottomCtrl(true)
	}

	this.hideTopBottomCtrl = function() {
		video.hideTopBottomCtrl()
	}
	this.setVideoSize = function() {
		video.updateVideoSize(720, 480)
	}
	this.setAttribute = function(key, value) {
		video.opt.ele.childNodes[2].firstChild.setAttribute(key, value)
	}
	this.vi = video;
	this.v = video.opt.ele.childNodes[2].firstChild;
	return this;
}

mdata.a.prototype.singleRollingText = function(obj, sheight,py) {
	if(typeof(obj) != "object") {
		obj = this.myobject;
	}
	if(typeof(py)=="undefined") {
		py=0
	}
	this.urls = [];
	this.msgs = [];
	this.box; //外壳div
	this.spans = [];
	this.clickfunc = function(msg, url) {};
	var that = this;
	this.init = function() {
		that.box = $$(obj).addEle("div", {
			"width": "100%",
			"height": "100%",
			"overflow": "hidden",
			"position": "relative"
		}, 1);
	}
	var an = function(obj) {
		obj.style.display = "";
		obj.style.top = obj.offsetHeight + sheight+py + "px";
		$$(obj).animate({
			"top": {
				"start": obj.offsetHeight + sheight+py + "px",
				"end": sheight+py + "px",
				"time": 1000,
				"speed": 10,
				"func": function() {
					var s = setTimeout(function() {
						$$(obj).animate({
							"top": {
								"start": true,
								"end": -1 * obj.offsetHeight - 10 + "px",
								"time": 1000,
								"speed": 10,
								"func": function() {
									obj.style.display = "none";
									obj = obj.nextSibling;
									if(obj == null) {
										obj = that.box.childNodes[0];
									}
									obj.style.display = "";
									obj.style.top = obj.offsetHeight + sheight+py + "px";
									an(obj);
								}
							}
						})
					}, 5000)
				}
			}
		})
	}
	this.anim = function(obj) {
		an(that.box.childNodes[0])
	}
	this.addStr = function(str, url) {
		var s = $$(that.box).addEle("span", {
			"display": "none",
			"position": "relative"
		}, 0, str);
		that.urls.push(url);
		that.spans.push(s);
		$$(s).addEvent("click", function() {
			if(typeof(that.clickfunc) == "function") {
				that.clickfunc(str, url);
			}
		})
	}
	this.removeStr = function(str) {
		var i = that.urls.indexOf(url);
		that.urls.remove(url);
		$$().removeElem(that.spans[i])
	}

	return this;

}

/**
 * 字幕滚动
 * @param {Object} obj
 * @param {Object} sheight   [两条字幕的高度偏差]
 * @param {Object} mystyle
 * @param {Object} mytype
 */
mdata.a.prototype.SubtitleRolling = function(fobj, sheight, mystyle, mytype) {
	if(typeof(fobj) != "object") {
		fobj = this.myobject;
	}
	var that = this;
	this.direction = 1; //方向，上下左右，1234
	this.spantime = 10; //一帧时长
	this.stoptime = 1000; //停留时间
	this.anitime = 2000; //每个字幕的运动时长
	var strs = []; //字幕
	var stro = []; //字幕元素
	var ls = 0;
	var stop = 0; //停止标志
	var anim = 0;
	var titleobjh = 0;
	var obj = 0;
	var startMoveFlag = 0
	var tt = 0
	var ids = []
	this.setTitle = function(str, mystyle, mytype) {
		var tt = $$(fobj).addEle("div", {
			"width": "100%",
			"position": "absolute"
		}, 0, str);
		$$(tt).mycss(mystyle);
		$$(tt).mytype(mytype);
		titleobjh = tt.offsetHeight;
		obj = $$(fobj).addEle("div", {
			"width": "100%",
			"position": "absolute"
		}, 0);
		obj.style.height = fobj.offsetHeight - tt.offsetHeight + "px";
		obj.style.top = tt.offsetHeight + "px";
		obj.style.overflow = "hidden"
		$$(tt).styleChange("height", function() {
			obj.style.height = fobj.offsetHeight - tt.offsetHeight + "px";
			obj.style.top = tt.offsetHeight + "px";
		})
		return tt;
	}
	this.addStr = function(str) {
		var id = $$().checkClass("spanobj");
		str = str.replace(/<number>(((?!<number>).)*)<number>/ig, "<span class='" + id +
			"' style=\"color:#ff9933;font-size:18px\">$1</span>");
		strs.push(str);
		$$("." + id).mycss({
			"fontSize": "2px"
		})
		var o = $$(obj).addEle("p", {
			"position": "absolute",
			"fontSize": "14px",
			"width": "99%",
			"left": "1%"
		}, 0, str);
		$$(o).mycss(mystyle);
		$$(o).mycss(mytype);
		o.spanClass = id;
		ids.push(id)
		stro.push(o);
		if(strs.length == 1) {
			o.style.top = obj.offsetHeight - 10 + "px";
		}
		if(strs.length > 1) {
			o.style.top = obj.offsetHeight + 200 + "px";
		}

	}
	this.startMove = function() {
		if(startMoveFlag > 0) {
			return;
		}
		startMoveFlag = 1
		for(var i = 0; i < stro.length; i++) {
			(function(o, that, tindex, objheight) {
				var sj = 0;
				var stop = 1;
				var oheight = o.offsetHeight
				var stopj = 0;
				var nextobj = false;
				var a2 = 0;
				var a1 = 0
				var num = 0;
				var ini = 0;
				var timer = -1
				var zk = -1
				setInterval(function() {
					if(o.offsetTop >= objheight || o.offsetTop < -1 * oheight) {
						o.style.top = objheight + "px";
						ini = 0
						zk = -1
					}
					if(o.offsetTop < objheight && o.offsetTop > -1 * oheight) {
						sj += 1;
						if(ini == 0) {
							var cafa = $$("." + ids[tindex]).selectionobj();
							for(var zz = 0; zz < cafa.length; zz++) {
								(function(zz) {
									zk = $$().NumberBigAnimation(cafa[zz], that.anitime / 2 + 800, 10)
								})(zz)
							}
							ini = 1;
						}
						var xjk = tindex + 1;
						if(xjk > stro.length - 1) {
							xjk = 0;
						}
						if(xjk != tindex) {
							nextobj = stro[xjk];
						}
						var t = sj * that.spantime;
						a1 = 2 * (objheight / 2) / ((that.anitime / 2) * (that.anitime / 2));
						var s = 0.5 * a1 * t * t;
						var s0 = 0.5 * a1 * (t - that.spantime) * (t - that.spantime);
						if((o.offsetTop - (s - s0)) > (objheight / 2 - o.offsetHeight / 2)) {
							o.style.top = (o.offsetTop - (s - s0)) + "px";
							stopj = sj;
						} else {
							if(sj * that.spantime <= stopj * that.spantime + that.stoptime) {
								o.style.top = objheight / 2 - o.offsetHeight / 2 - 20 + "px";
								if(zk != -1) {
									zk.stop();
									zk = -1
								}
							} else {
								t = sj * that.spantime - stopj * that.spantime - that.stoptime;
								o.style.top = objheight / 2 - o.offsetHeight / 2 - 0.5 * a1 * t * t + "px";
								dd = o.offsetTop + o.offsetHeight / 2 + sheight - objheight / 2;
								if(nextobj && num == 0 && dd < 0) {
									nextobj.style.top = objheight - 45 + "px";
									num = 1;
								}
								if(o.offsetTop <= -0.99 * oheight) {
									sj = 0;
									num = 0;
									ini = 0;
									o.style.top = objheight + "px";
								}

							}
						}
					}

				}, that.spantime)
			})(stro[i], that, i, fobj.offsetHeight)
		}
	}
	return this;
}

/**
 * 数字跳动动画
 * @param {Object} obj       [父元素]
 * @param {Number} time      [动画时长]
 * @param {Number} spantime  [动画间隔时间]
 */
mdata.a.prototype.NumberBigAnimation = function(obj, time, spantime) {

	var that = this;
	var flag = 1;
	if(typeof(obj) != "object") {
		obj = this.myobject;
	}
	var n = obj.innerHTML;
	var num = n.match(/([0-9.]+)/ig);
	var num = num[0];
	var b = 0;
	var timer1 = setInterval(function() {
		b += 1;
		var a = 2 * num / (time * time);
		var v = 0.5 * a * (b * spantime * b * spantime);
		v = parseInt(v)
		v = "" + v;
		num = "" + num;
		var v0 = v;
		if(v0.length < num.length) {
			for(var i = 0; i < num.length - v.length; i++) {
				v0 = "0" + v0;
			};
		};
		var xm = n.replace(/[0-9.]+/ig, v0)
		obj.innerHTML = xm;
		if(b * spantime > time) {
			clearInterval(timer1);
			obj.innerHTML = n
		}
	}, spantime)
	this.stop = function() {
		clearInterval(timer1);
		obj.innerHTML = n;
	}
	return this;
}
mdata.a.prototype.speech = function(ip, port) {
	var wurl = "ws://" + ip + ":" + port;
	var success = 0;
	this.calls = [];
	var ws = 0;
	var flag = [0]
	var that = this;
	ws = new WebSocket(wurl);
	success = 1;
	bind()

	function bind() {
		ws.addEventListener("message", function(e) {
			flag[0] = 0
			for(var i = 0; i < that.calls.length; i++) {
				that.calls[i](e.data, ws, flag)
			}
		})
		ws.addEventListener("error", function(e) {
			ws.close();
		})
		ws.addEventListener("close", function(e) {
			ws.close();
		})
	}
	this.addFunc = function(callback) {
		that.calls.push(callback);

	}

	return this;
}
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
mdata.a.prototype.Bubble = function(obj, config) {
	if(typeof(obj) != "object") {
		obj = this.selectobj
	}
	if(typeof(config) != "object") {
		// 静态属性
		config = {
			src: "./img/bu2.png",
			ballsnum: 10, // 小球数目
			spring: 0.8, // 弹力加速度
			bounce: -1, // 反弹
			gravity: 0.0, // 重力
			MaxSpeed: 7,
			size: 32,
			width: 32, //小球大小
			height: 32
		};
	}
	config["balls"] = []
	// 配置属性
	config["diameter"] = config["size"];
	config["timer"] = null
	config["radius"] = config["diameter"] / 2;

	// 上下左右边界
	config.T_bound = 0;
	config.B_bound = obj.clientHeight;
	config.L_bound = 0;
	config.R_bound = obj.clientWidth;
	this.fobj = $$(obj).addEle("div", {
		"width": "100%",
		"height": "100%",
		"position": "absolute",
		"left": "0",
		"top": "0"
	})
	var that = this;
	this.setCSS = function(mystyle, mytype) {
		$$(that.fobj).mycss(mystyle)
		$$(that.fobj).mytype(mytype)
	}

	function newball() {
		return $$(that.fobj).addEle("img", {
			"height": config["height"] + "px",
			"width": config["width"] + "px",
			"position": "absolute"
		}, {
			"width": config["width"],
			"height": config["height"],
			"src": config["src"]
		})
	}

	function createballs() {
		num = config["ballsnum"];
		i = 0;
		for(; i < num; i++) {
			var ball = newball();
			ball.radius = config.radius;
			ball.diameter = config.diameter;
			ball.style.left = (Math.random() * config.B_bound) + 'px';
			ball.style.top = (Math.random() * config.R_bound) + 'px';
			ball.vx = Math.random() * config.MaxSpeed - config.MaxSpeed / 2;
			ball.vy = Math.random() * config.MaxSpeed - config.MaxSpeed / 2;
			config["balls"].push(ball)
		}
	}

	function move(ball) {
		// 气泡运动
		ball.vy += config.gravity;
		ball.style.left = (ball.offsetLeft + ball.vx) + 'px';
		ball.style.top = (ball.offsetTop + ball.vy) + 'px';
		// 边界检测
		var T = config.T_bound,
			B = config.B_bound,
			L = config.L_bound,
			R = config.R_bound,
			BC = config.bounce;
		if(ball.offsetLeft + ball.diameter > R) {
			ball.style.left = R - ball.diameter + 'px';
			ball.vx *= BC;
		} else if(ball.offsetLeft < L) {
			ball.style.left = L + 'px';
			ball.vx *= BC;
		}
		if(ball.offsetTop + ball.diameter > B) {
			ball.style.top = B - ball.diameter + 'px';
			ball.vy *= BC;
		} else if(ball.offsetTop < T) {
			ball.style.top = T + 'px';
			ball.vy *= BC;
		}
		while(Math.abs(ball.vx) < 1) {
			ball.vx = Math.random() * config.MaxSpeed - config.MaxSpeed / 2;
		}
		while(Math.abs(ball.vx) < 1) {
			ball.vy = Math.random() * config.MaxSpeed - config.MaxSpeed / 2;
		}

	}

	function hittest() {
		// 碰撞检测
		num = config["ballsnum"],
			balls = config["balls"];
		for(var i = 0; i < num - 1; i++) {
			var ball0 = config["balls"][i];
			ball0.x = ball0.offsetLeft + ball0.radius;
			ball0.y = ball0.offsetTop + ball0.radius;
			for(var j = i + 1; j < num; j++) {
				var ball1 = config["balls"][j];
				ball1.x = ball1.offsetLeft + ball1.radius;
				ball1.y = ball1.offsetTop + ball1.radius;
				var dx = ball1.x - ball0.x;
				var dy = ball1.y - ball0.y;
				var dist = Math.sqrt(dx * dx + dy * dy);
				var misDist = ball0.radius + ball1.radius;
				if(dist < misDist) {
					var angle = Math.atan2(dy, dx);
					var tx = ball0.x + Math.cos(angle) * misDist;
					var ty = ball0.y + Math.sin(angle) * misDist;
					var ax = (tx - ball1.x) * config.spring;
					var ay = (ty - ball1.y) * config.spring;
					ball0.vx -= ax;
					ball0.vy -= ay;
					ball1.vx += ax;
					ball1.vy += ay;

				}
			}
		}
		for(var i = 0; i < config["ballsnum"]; i++) {
			move(config["balls"][i]);
		}
	}

	function init() {
		// 生成小球
		createballs();
		// 侦听碰撞
		config["timer"] = setInterval(function() {
			hittest();
		}, 32);

	}
	init()
	return this;
}
mdata.a.prototype.myWebSocket = function(host, port) {
	var mes = [];
	var ers = [];
	var ops = [];
	var cos = [];
	var opens = [];
	var success = 0;
	var ws = new WebSocket("ws://" + host + ":" + port + "/");
	bind();

	function bind() {
		// 建立 web socket 连接成功触发事件
		ws.onopen = function() {
			// 使用 send() 方法发送数据
			success = 1
			for(var i = 0; i < ops.length; i++) {
				if(typeof(ops[i]) == "function") {
					ops[i](evt.data, ws);
				}
			}
		};

		// 接收服务端数据时触发事件
		ws.onmessage = function(evt) {
			for(var i = 0; i < mes.length; i++) {
				if(typeof(mes[i]) == "function") {
					mes[i](evt.data, ws);
				}
			}
		};

		// 断开 web socket 连接成功触发事件
		ws.onclose = function() {
			success = 0;
			for(var i = 0; i < cos.length; i++) {
				if(typeof(cos[i]) == "function") {
					cos[i](evt.data, ws);
				}
			}
		};
		ws.onerror = function() {
			success = 0;
			for(var i = 0; i < ers.length; i++) {
				if(typeof(ers[i]) == "function") {
					ers[i](evt.data, ws);
				}
			}
		};
	}
	setInterval(function() {
		if(ws.readyState != 1 && success == 0) {
			ws.close()
			ws = new WebSocket("ws://" + host + ":" + port + "/");
			bind()
		}
	}, 3000)

	this.addError = function(s) {
		ers.push(s)
	}
	this.addOpen = function(s) {
		ops.push(s)
	}
	this.addMessage = function(s) {
		mes.push(s)
	}
	this.addClose = function(s) {
		cos.push(s)
	}
}
mdata.a.prototype.arrayF = function(array_object) {
	this.array_object = array_object;
	that = this;
	this.getIndexByString = function(str) {
		for(var i = 0; i < that.array_object.length; i++) {
			if(that.array_object[i] == str) {
				return i;
			}
		}
		return -1;
	};
	this.deleteByString = function(str) {
		for(var i = 0; i < that.array_object.length; i++) {
			if(that.array_object[i] == str) {
				that.array_object.splice(i, 1);
			}
		}
	};
	return this;
};
mdata.a.prototype.ExportPDF = function() {
	/**
	 * jsPDF
	 * (c) 2009 James Hall
	 * 
	 * Some parts based on FPDF.
	 */

	var jsPDF = function() {

		// Private properties
		var version = '20090504';
		var buffer = '';

		var pdfVersion = '1.3'; // PDF Version
		var defaultPageFormat = 'a4';
		var pageFormats = { // Size in mm of various paper formats
			'a3': [841.89, 1190.55],
			'a4': [595.28, 841.89],
			'a5': [420.94, 595.28],
			'letter': [612, 792],
			'legal': [612, 1008]
		};
		var textColor = '0 g';
		var page = 0;
		var objectNumber = 2; // 'n' Current object number
		var state = 0; // Current document state
		var pages = new Array();
		var offsets = new Array(); // List of offsets
		var lineWidth = 0.200025; // 2mm
		var pageHeight;
		var k; // Scale factor
		var unit = 'mm'; // Default to mm for units
		var fontNumber; // TODO: This is temp, replace with real font handling
		var documentProperties = {};
		var fontSize = 16; // Default font size
		var pageFontSize = 16;

		// Initilisation 
		if(unit == 'pt') {
			k = 1;
		} else if(unit == 'mm') {
			k = 72 / 25.4;
		} else if(unit == 'cm') {
			k = 72 / 2.54;
		} else if(unit == 'in') {
			k = 72;
		}

		// Private functions
		var newObject = function() {
			//Begin a new object
			objectNumber++;
			offsets[objectNumber] = buffer.length;
			out(objectNumber + ' 0 obj');
		}

		var putHeader = function() {
			out('%PDF-' + pdfVersion);
		}

		var putPages = function() {

			// TODO: Fix, hardcoded to a4 portrait
			var wPt = pageWidth * k;
			var hPt = pageHeight * k;

			for(n = 1; n <= page; n++) {
				newObject();
				out('<</Type /Page');
				out('/Parent 1 0 R');
				out('/Resources 2 0 R');
				out('/Contents ' + (objectNumber + 1) + ' 0 R>>');
				out('endobj');

				//Page content
				p = pages[n];
				newObject();
				out('<</Length ' + p.length + '>>');
				putStream(p);
				out('endobj');
			}
			offsets[1] = buffer.length;
			out('1 0 obj');
			out('<</Type /Pages');
			var kids = '/Kids [';
			for(i = 0; i < page; i++) {
				kids += (3 + 2 * i) + ' 0 R ';
			}
			out(kids + ']');
			out('/Count ' + page);
			out(sprintf('/MediaBox [0 0 %.2f %.2f]', wPt, hPt));
			out('>>');
			out('endobj');
		}

		var putStream = function(str) {
			out('stream');
			out(str);
			out('endstream');
		}

		var putResources = function() {
			putFonts();
			putImages();

			//Resource dictionary
			offsets[2] = buffer.length;
			out('2 0 obj');
			out('<<');
			putResourceDictionary();
			out('>>');
			out('endobj');
		}

		var putFonts = function() {
			// TODO: Only supports core font hardcoded to Helvetica
			newObject();
			fontNumber = objectNumber;
			name = 'Helvetica';
			out('<</Type /Font');
			out('/BaseFont /' + name);
			out('/Subtype /Type1');
			out('/Encoding /WinAnsiEncoding');
			out('>>');
			out('endobj');
		}

		var putImages = function() {
			// TODO
		}

		var putResourceDictionary = function() {
			out('/ProcSet [/PDF /Text /ImageB /ImageC /ImageI]');
			out('/Font <<');
			// Do this for each font, the '1' bit is the index of the font
			// fontNumber is currently the object number related to 'putFonts'
			out('/F1 ' + fontNumber + ' 0 R');
			out('>>');
			out('/XObject <<');
			putXobjectDict();
			out('>>');
		}

		var putXobjectDict = function() {
			// TODO
			// Loop through images
		}

		var putInfo = function() {
			out('/Producer (jsPDF ' + version + ')');
			if(documentProperties.title != undefined) {
				out('/Title (' + pdfEscape(documentProperties.title) + ')');
			}
			if(documentProperties.subject != undefined) {
				out('/Subject (' + pdfEscape(documentProperties.subject) + ')');
			}
			if(documentProperties.author != undefined) {
				out('/Author (' + pdfEscape(documentProperties.author) + ')');
			}
			if(documentProperties.keywords != undefined) {
				out('/Keywords (' + pdfEscape(documentProperties.keywords) + ')');
			}
			if(documentProperties.creator != undefined) {
				out('/Creator (' + pdfEscape(documentProperties.creator) + ')');
			}
			var created = new Date();
			var year = created.getFullYear();
			var month = (created.getMonth() + 1);
			var day = created.getDate();
			var hour = created.getHours();
			var minute = created.getMinutes();
			var second = created.getSeconds();
			out('/CreationDate (D:' + sprintf('%02d%02d%02d%02d%02d%02d', year, month, day, hour, minute, second) + ')');
		}

		var putCatalog = function() {
			out('/Type /Catalog');
			out('/Pages 1 0 R');
			// TODO: Add zoom and layout modes
			out('/OpenAction [3 0 R /FitH null]');
			out('/PageLayout /OneColumn');
		}

		function putTrailer() {
			out('/Size ' + (objectNumber + 1));
			out('/Root ' + objectNumber + ' 0 R');
			out('/Info ' + (objectNumber - 1) + ' 0 R');
		}

		var endDocument = function() {
			state = 1;
			putHeader();
			putPages();

			putResources();
			//Info
			newObject();
			out('<<');
			putInfo();
			out('>>');
			out('endobj');

			//Catalog
			newObject();
			out('<<');
			putCatalog();
			out('>>');
			out('endobj');

			//Cross-ref
			var o = buffer.length;
			out('xref');
			out('0 ' + (objectNumber + 1));
			out('0000000000 65535 f ');
			for(var i = 1; i <= objectNumber; i++) {
				out(sprintf('%010d 00000 n ', offsets[i]));
			}
			//Trailer
			out('trailer');
			out('<<');
			putTrailer();
			out('>>');
			out('startxref');
			out(o);
			out('%%EOF');
			state = 3;
		}

		var beginPage = function() {
			page++;
			// Do dimension stuff
			state = 2;
			pages[page] = '';

			// TODO: Hardcoded at A4 and portrait
			pageHeight = pageFormats['a4'][1] / k;
			pageWidth = pageFormats['a4'][0] / k;
		}

		var out = function(string) {
			if(state == 2) {
				pages[page] += string + '\n';
			} else {
				buffer += string + '\n';
			}
		}

		var _addPage = function() {
			beginPage();
			// Set line width
			out(sprintf('%.2f w', (lineWidth * k)));

			// Set font - TODO
			// 16 is the font size
			pageFontSize = fontSize;
			out('BT /F1 ' + parseInt(fontSize) + '.00 Tf ET');
		}

		// Add the first page automatically
		_addPage();

		// Escape text
		var pdfEscape = function(text) {
			return text.replace(/\\/g, '\\\\').replace(/\(/g, '\\(').replace(/\)/g, '\\)');
		}

		return {
			addPage: function() {
				_addPage();
			},
			text: function(x, y, text) {
				// need page height
				if(pageFontSize != fontSize) {
					out('BT /F1 ' + parseInt(fontSize) + '.00 Tf ET');
					pageFontSize = fontSize;
				}
				var str = sprintf('BT %.2f %.2f Td (%s) Tj ET', x * k, (pageHeight - y) * k, pdfEscape(text));
				out(str);
			},
			setProperties: function(properties) {
				documentProperties = properties;
			},
			addImage: function(imageData, format, x, y, w, h) {

			},
			output: function(type, options) {
				endDocument();
				if(type == undefined) {
					return buffer;
				}
				if(type == 'datauri') {
					document.location.href = 'data:application/pdf;base64,' + Base64.encode(buffer);
				}
				// @TODO: Add different output options
			},
			setFontSize: function(size) {
				fontSize = size;
			}
		}

	};
}
mdata.a.prototype.ExportExcel = function(tablethisid) {
	var getExplorer = function() {
		var explorer = window.navigator.userAgent;
		//ie
		if(explorer.indexOf("MSIE") >= 0) {
			return 'ie';
		}
		//firefox
		else if(explorer.indexOf("Firefox") >= 0) {
			return 'Firefox';
		}
		//Chrome
		else if(explorer.indexOf("Chrome") >= 0) {
			return 'Chrome';
		}
		//Opera
		else if(explorer.indexOf("Opera") >= 0) {
			return 'Opera';
		}
		//Safari
		else if(explorer.indexOf("Safari") >= 0) {
			return 'Safari';
		}
	}

	var Cleanup = function() {
		window.clearInterval(idTmr);
		CollectGarbage();
	}

	/*
	    template ： 定义文档的类型，相当于html页面中顶部的<!DOCTYPE> 声明。（个人理解，不确定）
	    encodeURIComponent:解码
	    unescape() 函数：对通过 escape() 编码的字符串进行解码。
	    window.btoa(window.encodeURIComponent(str)):支持汉字进行解码。
	    \w ：匹配包括下划线的任何单词字符。等价于’[A-Za-z0-9_]’
	    replace()方法：用于在字符串中用一些字符替换另一些字符，或替换一个与正则表达式匹配的子串。
	    {(\w+)}：匹配所有 {1个或更多字符} 形式的字符串；此处匹配输出内容是 “worksheet”
	    正则中的() ：是为了提取匹配的字符串。表达式中有几个()就有几个相应的匹配字符串。
	    讲解(/{(\w+)}/g, function(m, p) { return c[p]; } ：
	        /{(\w+)}/g 匹配出所有形式为“{worksheet}”的字符串；
	        function参数：  m  正则所匹配到的内容，即“worksheet”；
	                        p  正则表达式中分组的内容,即“(\w+)”分组中匹配到的内容，为“worksheet”；
	        c ：为object，见下图3
	        c[p] : 为“worksheet”

	*/
	var tableToExcel = (function() {
		var uri = 'data:application/vnd.ms-excel;base64,',
			template =
			'<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body><table>{table}</table></body></html>',
			base64 = function(s) {
				return window.btoa(unescape(encodeURIComponent(s)))
			},
			// 下面这段函数作用是：将template中的变量替换为页面内容ctx获取到的值
			format = function(s, c) {
				return s.replace(/{(\w+)}/g,
					function(m, p) {
						return c[p];
					}
				)
			};
		return function(table, name) {
			if(!table.nodeType) {
				table = document.getElementById(table)
			}
			// 获取表单的名字和表单查询的内容
			var ctx = {
				worksheet: name || 'Worksheet',
				table: table.innerHTML
			};
			// format()函数：通过格式操作使任意类型的数据转换成一个字符串
			// base64()：进行编码
			window.location.href = uri + base64(format(template, ctx))
		}
	})()
	var method1 = function(tableid) { //整个表格拷贝到EXCEL中
		if(getExplorer() == 'ie') {
			var curTbl = document.getElementById(tableid);
			var oXL = new ActiveXObject("Excel.Application");

			//创建AX对象excel
			var oWB = oXL.Workbooks.Add();
			//获取workbook对象
			var xlsheet = oWB.Worksheets(1);
			//激活当前sheet
			var sel = document.body.createTextRange();
			sel.moveToElementText(curTbl);
			//把表格中的内容移到TextRange中
			sel.select;
			//全选TextRange中内容
			sel.execCommand("Copy");
			//复制TextRange中内容
			xlsheet.Paste();
			//粘贴到活动的EXCEL中
			oXL.Visible = true;
			//设置excel可见属性

			try {
				var fname = oXL.Application.GetSaveAsFilename("Excel.xls", "Excel Spreadsheets (*.xls), *.xls");
			} catch(e) {
				print("Nested catch caught " + e);
			} finally {
				oWB.SaveAs(fname);

				oWB.Close(savechanges = false);
				//xls.visible = false;
				oXL.Quit();
				oXL = null;
				//结束excel进程，退出完成
				//window.setInterval("Cleanup();",1);
				idTmr = window.setInterval("Cleanup();", 1);
			}
		} else {
			tableToExcel(tablethisid)
		}
	}
	method1(tablethisid)
}

mdata.a.prototype.ExportExcel2 = function(tableid, filename) {
	if(typeof(filename) != "string") {
		filename = "file.xls";
	}
	var tablesToExcel = (function() {
		var uri = 'data:application/vnd.ms-excel;base64,',
			tmplWorkbookXML =
			'<?xml version="1.0"?><?mso-application progid="Excel.Sheet"?><Workbook xmlns="urn:schemas-microsoft-com:office:spreadsheet" xmlns:ss="urn:schemas-microsoft-com:office:spreadsheet">' +
			'<DocumentProperties xmlns="urn:schemas-microsoft-com:office:office"><Author>Axel Richter</Author><Created>{created}</Created></DocumentProperties>' +
			'<Styles>' +
			'<Style ss:ID="Currency"><NumberFormat ss:Format="Currency"></NumberFormat></Style>' +
			'<Style ss:ID="Date"><NumberFormat ss:Format="Medium Date"></NumberFormat></Style>' +
			'</Styles>' +
			'{worksheets}</Workbook>',
			tmplWorksheetXML = '<Worksheet ss:Name="{nameWS}"><Table>{rows}</Table></Worksheet>',
			tmplCellXML = '<Cell{attributeStyleID}{attributeFormula}><Data ss:Type="{nameType}">{data}</Data></Cell>',
			base64 = function(s) {
				return window.btoa(unescape(encodeURIComponent(s)))
			},
			format = function(s, c) {
				return s.replace(/{(\w+)}/g, function(m, p) {
					return c[p];
				})
			}
		return function(tables, wsnames, wbname, appname) {
			var ctx = "";
			var workbookXML = "";
			var worksheetsXML = "";
			var rowsXML = "";

			for(var i = 0; i < tables.length; i++) {
				if(!tables[i].nodeType) tables[i] = document.getElementById(tables[i]);

				//              控制要导出的行数
				for(var j = 0; j < tables[i].rows.length; j++) {
					rowsXML += '<Row>';

					//                    控制导出的列数（在本例中，最后一列为button,导出的文件会出错，所以导出到倒数第二列
					for(var k = 0; k < tables[i].rows[j].cells.length - 1; k++) {
						var dataType = tables[i].rows[j].cells[k].getAttribute("data-type");
						var dataStyle = tables[i].rows[j].cells[k].getAttribute("data-style");
						var dataValue = tables[i].rows[j].cells[k].getAttribute("data-value");
						dataValue = (dataValue) ? dataValue : tables[i].rows[j].cells[k].innerHTML;
						var dataFormula = tables[i].rows[j].cells[k].getAttribute("data-formula");
						dataFormula = (dataFormula) ? dataFormula : (appname == 'Calc' && dataType == 'DateTime') ? dataValue : null;
						ctx = {
							attributeStyleID: (dataStyle == 'Currency' || dataStyle == 'Date') ? ' ss:StyleID="' + dataStyle + '"' : '',
							nameType: (dataType == 'Number' || dataType == 'DateTime' || dataType == 'Boolean' || dataType == 'Error') ?
								dataType : 'String',
							data: (dataFormula) ? '' : dataValue,
							attributeFormula: (dataFormula) ? ' ss:Formula="' + dataFormula + '"' : ''
						};
						rowsXML += format(tmplCellXML, ctx);
					}
					rowsXML += '</Row>'
				}
				ctx = {
					rows: rowsXML,
					nameWS: wsnames[i] || 'Sheet' + i
				};
				worksheetsXML += format(tmplWorksheetXML, ctx);
				rowsXML = "";
			}

			ctx = {
				created: (new Date()).getTime(),
				worksheets: worksheetsXML
			};
			workbookXML = format(tmplWorkbookXML, ctx);

			//          查看后台的打印输出
			var link = document.createElement("A");
			link.href = uri + base64(workbookXML);
			link.download = wbname || 'Workbook.xls';
			link.target = '_blank';
			document.body.appendChild(link);
			link.click();
			document.body.removeChild(link);
		}
	})();
	tablesToExcel([tableid + ""], ['Sheet1'], filename, 'Excel')
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

mdata.a.prototype.floatText = function(obj, txt, classname) {

	classname = (typeof(classname) == "string") ? classname : "";
	if(typeof(obj) != "object") {
		obj = this.myobject;
	}
	var dddd = $$(obj).addEle("div", 0, {
		"class": classname + "-floatspan"
	});
	obj = this.myobject;
	var t = 0;
	$$(obj).addEvent("mouseover", function(e) {
		try {
			clearTimeout(t);
		} catch(e) {
			//TODO handle the exception
		}
		var m = $$().getMousePosition(e);
		var p = $$().getEleToBodyPosition(obj); //获得当前选项距离浏览器的绝对位置

		dddd.style.display = "block";
		dddd.style.position = "absolute";
		dddd.style.float = "left";
		dddd.style.display = "";
		dddd.style.left = p.left - dddd.offsetWidth / 2 + 15 + "px";
		dddd.style.top = p.top + obj.offsetHeight - 15 + "px";
		dddd.innerHTML = txt

	})
	$$(obj).addEvent("mouseout", function(e) {
		t = setTimeout(function() {
			dddd.style.display = "none";
		}, 50)

	});
}
mdata.a.prototype.inputTips=function(obj,text){
	if(typeof(obj)!="object"){
		obj=this.selectionobj();
	}
	$$(obj).mytype("tabindex","0")
	$$(obj).mytype("mdataplacehoder","1")
	$$(obj).HTML(text);
	$$(obj).addEvent("focus",function(){
		if($$(obj).HTML()==text){
			$$(obj).HTML("")
			$$(obj).mytype("mdataplacehoder","0")
		}
	})
	$$(obj).addEvent("blur",function(){
		if($$(obj).HTML()==""){
			$$(obj).mytype("mdataplacehoder","1")
			$$(obj).HTML(text)
		}
	})
}
mdata.a.prototype.sys_preview = function(classname, obj, mycss, mytype, title, imgvar, type, enableMask) {
	/*简介图片*/
	this.that = $$(obj); //mdata实例
	obj = this.that.selectionobj(); //选择器选择的元素
	var span = ";";
	if(typeof(obj) != "object") {
		obj = this.myobject;
	};
	if(typeof(classname) != "string") {
		classname = "sys_preview"
	};
	this.editenable = 0;
	this.classname = classname;
	var that = this;
	this.color1 = "#f5f5f5"; //横条颜色
	this.border1 = "#ddd solid 1px"; //横条边框
	this.div = 0;
	this.table;
	this.imgObj = 0;
	this.mask; //获取遮罩div
	this.maskBackground = "rgba(0,0,0,0.2)"; //遮罩区域颜色以及透明度，0-1,0完全透明，1完全不透明
	this.titleObj = 0;
	this.editZoneObj;
	this.submitObj;
	this.closeObj;
	this.submitResultObj;
	this.cancleObj;
	this.submitResultImgObj;
	this.content;
	this.tijiaoenable=true;
	this.submitfunc;
	this.loadcss = function(CSSPath) {
		var lin = document.createElement("link");
		lin.setAttribute("class", "mdata-controls");
		lin.setAttribute("rel", "stylesheet");
		lin.setAttribute("href", "http://" + window.location.host +CSSPath+that.classname+'.css?v=' + Math.random())
		document.body.appendChild(lin);
	}
	var addImage = function(obj, src, height, imgsize, x, y) {
		var b = $$(obj).create_Svg(0, 0, imgsize, height);
		b.setAttribute("x", "0px");
		b.setAttribute("y", "0px");
		b.style.position = "";
		b.setAttribute("viewBox", "0 0 " + imgsize + " " + height);
		b.innerHTML = '<image id="image0" width="' + imgsize + '" height="' + imgsize + '" x="' + x + '" y="' + y +
			'" href="' + src + '" />';
		return b;
	}
	//遮罩区域
	function initMask() {
		that.mask = $$(obj).addEle("div", {
			"cursor": "default",
			"width": "100%",
			"height": "100%",
			"zIndex": "9100",
			"position": "absolute",
			"float": "left",
			"top": "0",
			"left": "0",
			"background": that.maskBackground
		});
		$$().unSelect(that.mask);
		//弹窗情况下，屏蔽页面其他操作
		$$(that.mask).addEvent("mousedown", function() {}, true);
	};
	this.addSubmitFunc = function(func) {
		$$(that.submitObj).addEvent("click", function() {
			that.submitResultImgObj.style.opacity = "1";
			that.submitResultImgObj.setAttribute("submitimg", "0");
			if(typeof(func) == "function") {
				var fff = function(a) {
					if(typeof(a) == "number") {
						if(a == 1) {
							that.submitResultImgObj.setAttribute("submitimg", "1");
						} else {
							that.submitResultImgObj.setAttribute("submitimg", "2");
						}
					} else {
						that.submitResultImgObj.setAttribute("submitimg", "2");
					}
				}
				func(fff);
			}
		});
	}
	
	this.hideAll=function(){
		if(typeof(that.div) == "object") {
			that.div.style.display="none";
		};
		if(typeof(that.mask) == "object") {
			that.mask.style.display="none";
		
		};
	}
	this.showAll=function(){
		
		that.div.style.display="";
		that.mask.style.display="";
		
	}
	this.init = function() {
		$$(that.mask).addEvent("dblclick", function() {
			try {
				if(typeof(that.mask) == "object") {
					$$(that.mask).removeElem();
				}
			} catch(e) {
				//TODO handle the exception
			}
			try {
				if(typeof(that.div) == "object") {
					$$(that.div).removeElem();
				}
			} catch(e) {
				//TODO handle the exception
			}

		}, true);
		that.div = $$(obj).addEle("div", {
			"border": that.border1
		}, {
			"class": that.classname + "-div"
		});
		$$(that.div).mytype("type","1");
		$$(that.div).addEvent("dblclick", function() {
		}, true);

		that.table = $$(that.div).create_table(0, [""], {
			"tr0": ["20px", "", "0px", "", "20px", "20px", "20px"]
		});

		that.table.setAttribute("class", that.classname + "-table");
		$$(that.div).drag(that.table);
		$$(that.div).dragResize();
		initMask();
		that.div.style.float="left";
		that.div.style.zIndex = "9999";
		that.div.style.backgroundColor = "white";
		//that.table.style.backgroundColor=that.color1;
		that.table.tds[1].style.textAlign = "left"
		that.table.style.height = "";
		that.titleObj = $$(that.table.tds[1]).addEle("span", {
			"textAlign": "left",
			"fontWeight": "normal",
			"display": "inline-block"
		}, 0, title); //标题
		that.table.tds[4].innerHTML = "-";
		that.table.tds[5].innerHTML = "□";
		that.table.tds[6].innerHTML = "×";
		that.closeObj=that.table.tds[6];
		var ah = that.div.offsetHeight;
		var aw = that.div.offsetWidth;
		var jk = $$().getEleToBodyPosition(that.div);
		var al = jk["left"];
		var at = jk["top"];
		var aa = 0;
		var fullscreen = function() {
			if(that.div.offsetWidth == document.body.scrollWidth && that.div.offsetHeight == document.documentElement.clientHeight) {
				that.div.style.width = aw - parseInt(that.div.style.borderLeftWidth) - parseInt(that.div.style.borderRightWidth) +
					"px";
				that.div.style.height = ah - parseInt(that.div.style.borderBottomWidth) - parseInt(that.div.style.borderTopWidth) +
					"px";
				that.div.style.left = al + "px";
				that.div.style.top = at + "px";
				if(aa == 0) {
					//var h = that.div.offsetHeight - parseInt(that.div.style.borderBottomWidth) - parseInt(that.div.style.borderTopWidth)
					//that.content.style.height = h - that.table.offsetHeight + "px";
				}

			} else {
				ah = that.div.offsetHeight;
				aw = that.div.offsetWidth;
				al = that.div.offsetLeft;
				at = that.div.offsetTop;
				that.div.style.left = "0px";
				that.div.style.top = "0px";
				that.div.style.height = document.documentElement.clientHeight - parseInt(that.div.style.borderBottomWidth) -
					parseInt(that.div.style.borderTopWidth) + "px";
				if(aa == 0) {
					//var h = that.div.offsetHeight - parseInt(that.div.style.borderBottomWidth) - parseInt(that.div.style.borderTopWidth)
					//that.content.style.height = h - that.table.offsetHeight + "px";
				}
				that.div.style.width = document.body.scrollWidth - parseInt(that.div.style.borderLeftWidth) - parseInt(that.div.style
					.borderRightWidth) + "px";

			}
		}
		$$(that.table.tds[5]).addEvent("click", function() {
			fullscreen();
		})
		$$(that.table.tds[6]).addEvent("click", function() {
			if(typeof(that.div) == "object") {
				$$().removeElem(that.div)
			};
			if(typeof(that.mask) == "object") {
				$$().removeElem(that.mask)

			};
		})
		$$(that.table.tds[4]).addEvent("click", function() {
			if(typeof(that.div) == "object") {
				$$().removeElem(that.div)
			};
			if(typeof(that.mask) == "object") {
				$$().removeElem(that.mask)

			};
		})
		$$(that.table.tr[0]).addEvent("dblclick", function() {
			fullscreen();
		}, true)
		var bt = $$(that.table.tds[3]).create_table(0, [""], ["", "", "", ""]);
		bt.tds[1].style.display = "none";
		bt.tds[2].style.display = "none";
		bt.tds[3].style.display = "none";
		that.editZoneObj = $$(bt.tds[0]).addEle("button", {
			"float": "right",
			"border": "0"
		}, 0, "编辑"); //标题
		if(that.editenable == 0) {
			that.editZoneObj.style.display = "none";
		}
		$$(that.editZoneObj).addEvent("click", function() {
			that.submitObj.style.display = "";
			that.cancleObj.style.display = "";
			that.editZoneObj.style.display = "none";
			bt.tds[0].style.display = "none";
			bt.tds[1].style.display = "";
			bt.tds[2].style.display = "";
			bt.tds[3].style.display = "";

		});
		that.submitObj = $$(bt.tds[1]).addEle("button", 0, 0, "提交"); //标题
		if (that.tijiaoenable==false) {
			that.submitObj.style.display="none";
		} else{
			
		}
		bt.tds[2].style.textAlign = "center";
		bt.tds[2].setAttribute("class", that.classname+"-submitresult-td");
		that.submitResultImgObj = $$(bt.tds[2]).addEle("div", {
			"opacity": "0"
		}, {
			"class": that.classname+"-submitresult-img"
		});
		that.submitResultImgObj.setAttribute("submitimg", "-1");
		that.cancleObj = $$(bt.tds[3]).addEle("button", 0, 0, "取消"); //标题
		var errorobj = 0;
		$$(that.submitObj).addEvent("click", function() {
			that.submitResultImgObj.style.opacity = "1";
			that.submitResultImgObj.setAttribute("submitimg", "0");
			if(typeof(that.submitfunc) == "function") {
				var fff = function(a) {
					if(typeof(a) == "number") {
						if(a == 1) {
							that.submitResultImgObj.setAttribute("submitimg", "1");
						} else {
							that.submitResultImgObj.setAttribute("submitimg", "2");
						}
					} else {
						that.submitResultImgObj.setAttribute("submitimg", "2");
					}
				}
				that.submitfunc(fff);
			}
		});

		$$(that.cancleObj).addEvent("click", function() {
			that.submitResultImgObj.style.opacity = "0";
			that.submitResultImgObj.setAttribute("submitimg", "-1");
			that.submitObj.style.display = "none";
			that.cancleObj.style.display = "none";
			bt.tds[1].style.display = "none";
			bt.tds[2].style.display = "none";
			bt.tds[3].style.display = "none";
			bt.tds[0].style.display = "";
			that.editZoneObj.style.display = "";
		});
		$$(that.div).mycss(mycss);
		$$(that.div).mytype(mytype);
		that.submitObj.style.display = "none";
		that.cancleObj.style.display = "none";
		//that.editZoneObj.style.display = "none";
		var h = that.div.offsetHeight - parseInt(that.div.style.borderBottomWidth) - parseInt(that.div.style.borderTopWidth)
		that.content = $$(that.div).addEle("div", {
			"border": that.border1,
			"borderTop": "0px solid black",
			"overflowY": "auto"
		});
		that.content.setAttribute("class", that.classname + "-content")
	}
	return this;
}

mdata.a.prototype.getClasses = function() {
	var o = this.myobject;
	var b = 0;
	while(typeof(b) != "string" && typeof(o) == "object") {
		try {
			b = $$(o).getAttribute("class");
		} catch(e) {
			//TODO handle the exception
			o = 0
		}
		try {
			o = o.parentNode;
		} catch(e) {
			//TODO handle the exception
			o = 0
		}
	}
	if(b == 0) {
		b = ""
	}
	return b;
}

mdata.a.prototype.sys_selectmenu = function(config) {
	if (typeof(config)!="opbject") {
		config={}
	}
	var obj=config["obj"];
	var mystyle=config["mystyle"];
	var mytype=config["mytype"];
	var fobj=config["fobj"];
	this.table = 0;
	var span = ";";
	this.div; //可见区域外壳div
	this.selectButton; //下拉按钮
	this.inputObj; //输入输出元素
	this.MaxDisplayNum = 5; //
	this.mode = 1; //1多选
	this.selectcolor = "#3399ff";
	this.clicked = 0;
	this.strs = []; //所有选项字符串
	this.leftStr = "◀";
	this.afterStr = "▶";
	this.leftFunc = function() {};
	this.afterFunc = function() {};
	this.inputvalue=0;
	this.box; //下拉区域外壳
	if(typeof(obj) != "object") {
		obj = this.myobject;
	}
	this.privateClass = "-sys_selectmenu";
	this.zhezhao; //下拉框的遮罩层
	this.inputObjTable;
	this.selectFunc = function(s) {} //选中事件
	var lastSelect = -1;
	this.allflag=0;
	var that = this;
	//创建可见区域
	this.init = function(strarr, default_select_str, func, enable) {
		that.div = $$(obj).addEle("div", mystyle, mytype);
		$$(that.div).mytype({
			"class": that.mdataTheme + that.privateClass + "-div " + $$(obj).getClasses() + that.privateClass + "-div"
		});
		that.div.style.display = "inline-block";
		$$(that.div).unSelect();
		that.div.style.cursor = "default";
		that.div.style.overflow = "hidden";
		that.inputObj1 = $$(that.div).addEle("div", {
			"overflow": "hidden",
			"lineHeight": "100%",
			"height": "100%",
			"display": "inline-block",
			"textAlign": "center",
			"border": "0"
		}, {
			"type": "text",
			"readonly": "readonly"
		});
		that.inputObjTable = $$(that.inputObj1).create_table(0, [""], ['20px {"type":{"innerHTML":"' + that.leftStr + '"}}', "", "20px",'20px {"type":{"innerHTML":"' + that.afterStr + '"}}']);
		if(that.mode != 0) {
			that.inputObjTable.tr[0].td[0].style.display = "none";
			that.inputObjTable.tr[0].td[3].style.display = "none";
		}

		$$(that.inputObjTable.tr[0].td[0]).addEvent("click", function() {
			var v = that.getValue();
			var j = 1;
			if(v != "") {
				for(var i in that.strs) {
					if(that.strs[i] == v) {
						j = i;
					}
				}
			}
			j = j - 1;
			if(j <= -1) {
				j = that.strs.length - 1;
			}
			that.setSelectedByIndex(j);
			if(typeof(that.leftFunc) == "function") {
				that.leftFunc();
			}
		});
		that.inputObjTable.tr[0].td[1].style.overflow="hidden";
		$$(that.inputObjTable.tr[0].td[3]).addEvent("click", function() {
			var v = that.getValue();
			var j = parseInt(that.strs.length) + 1;
			if(v != "") {
				for(var i in that.strs) {
					if(that.strs[i] + "" == v + "") {
						j = i;
					}
				}
			}
			j = parseInt(j) + 1;
			if(j >= that.strs.length) {
				j = 0;
			}
			that.setSelectedByIndex(j);
			if(typeof(that.afterFunc) == "function") {
				that.afterFunc();
			}
		});
		//that.inputObj =that.inputObjTable.tr[0].td[1];
		that.inputObj=$$(that.inputObjTable.tr[0].td[1]).addEle("div");
		that.inputObj.style.overflow="hidden";
		that.inputObj.style.maxWidth="230px";
		that.inputObj.style.height="13px";
		that.inputObj.innerHTML="&nbsp;"
		that.sp = that.inputObjTable.tr[0].td[2];
		that.selectButton = that.sp;
		that.sp.innerHTML="▽";
		var fonts = $$().autoFontSize(1, "1970-01-01 08:00:00.000", that.inputObj);
		//选框区域
		that.box = $$(that.zhezhao).addEle("div", {
			"width": that.inputObj.offsetWidth + that.inputObjTable.tr[0].td[2].offsetWidth - 2 + "px",
			"display": "inline-block",
			"border": "1px solid  black",
			"top": that.div.offsetTop + that.div.offsetHeight + "px",
			"left": that.div.offsetLeft + "px",
			"position": "absolute",
			"float": "left",
			"zIndex": "9999",
			"tabIndex": "0",
			"background-color": "white"
		});
		$$(that.box).mytype({
			"class": that.mdataTheme + that.privateClass + "-alertWindowDiv " + $$(that.zhezhao).getClasses() + that.privateClass + "-alertWindowDiv"
		});
		that.box.style.display = "inline-block";
		that.table = $$(that.box).table();
		that.table.table.style.width = "100%";
		that.box.style.display = "none";
		$$(that.box).unSelect();
		$$(window).addEvent("resize", function() {
			that.box.style.display = "none";
			document.body.click()
		});
		$$(that.selectButton).addEvent("click", function(e) {
			that.box.style.width = that.inputObj.offsetWidth + that.inputObjTable.tr[0].td[2].offsetWidth - 1 + "px";
			if(that.box.style.display == "none") {
				try{
					that.box.style.display = "";
					if(that.strs.length > that.MaxDisplayNum) {
						that.box.style.height = that.table.tr[0].offsetHeight * that.MaxDisplayNum + "px";
						that.box.style.overflowY = "scroll";
					}
					that.box.focus();
					var v = $$(that.zhezhao).getEleToBodyPosition(that.zhezhao);
					var va = $$(that.inputObj).getEleToBodyPosition(that.inputObj);
					that.box.style.left = va["left"]+"px";// - v["left"] + 
					if(va["top"]+that.box.offsetHeight>=document.body.offsetHeight){
						
						that.box.style.top=va["top"]-that.box.offsetHeight-that.inputObj.offsetHeight+"px";
					}else{
						that.box.style.top=va["top"]+that.inputObj.offsetHeight+"px";//-v["top"]+that.selectButton.offsetHeight+that.inputObj.offsetHeight
					}
				}catch(e){
					//TODO handle the exception
				}
				that.clicked = 1;
			} else {
				that.box.style.display = "none";
				that.clicked = 0;
			};
		});
		var mm = 0;
		$$(that.box).addEvent("mouseenter", function() {
			mm = 1;
		});
		$$(that.box).addEvent("mouseleave", function() {
			mm = 0;
		});
		$$(that.box).addEvent("mousedown", function() {}, true)
		$$().addEvent("mousedown", function() {
			that.box.style.display = "none";
		});
		$$(that.zhezhao).addEvent("mousedown", function() {
			that.box.style.display = "none";
		});
		$$(that.box).addEvent("blur", function() {
			if(mm == 0) {
				that.box.style.display = "none";
			}
		});

		that.addSelects(strarr, that.selectFunc);
		if(typeof(default_select_str) == "string") {
			that.setSelectedByString(default_select_str)
		}
	}
	this.show = function(enable) {
		if(typeof(enable) != "undefined") {
			if(enable == 1) {
				that.div.style.display = "";
			} else {
				that.div.style.display = "none";
			}

		} else {
			that.div.style.display = "none";
		}
	}

	this.clears = function() {
		
		while(that.table.tr.length > 0) {
			that.table.removeTr(0);
		};
		that.table.table.innerHTML="";
		that.table.tr=[];
		that.table.table.tr=[];
		that.inputObj.innerHTML="";
		that.strs = [];
		lastSelect = -1;
	}

	this.sel=function(str,exeSelectFunc) {
		if (typeof(exeSelectFunc)=="undefined") {
			if(typeof(that.selectFunc) == "function") {
				that.selectFunc(str)
			}
		}
		
		var ind = this.strs.indexOf(str);
		var va = that.inputObj.innerHTML;
		if(that.mode == 1) {
			if (str=="全部") {
				if(that.allflag==0) {
					that.inputObj.innerHTML="";
					for (var inm in that.strs) {
						if (that.strs[inm]=="全部") {
							
						}else{
							if (that.table.table.tr[inm].td[0].innerHTML!="") {
								that.inputObj.innerHTML += that.table.table.tr[inm].td[0].innerHTML + span;
								that.table.table.tr[inm].td[0].setAttribute("select", "1");
							} else{
								
							}
							
						}
						
					}
					that.allflag=1;
					
					
				} else {
					that.inputObj.innerHTML="";
					for (var inm in that.strs) {
						that.table.table.tr[inm].td[0].setAttribute("select", "0");
					}
					that.allflag=0;
				}
			} else{
				if(that.inputObj.innerHTML.search(str + span) > -1) {
					var s = that.inputObj.innerHTML;
					that.inputObj.innerHTML = s.replace(str + span, ""); //把'is'替换为空字符串
					that.table.table.tr[ind].td[0].setAttribute("select", "0");
				} else {
					try {
						if(that.inputObj.innerHTML.length > 0) {
							if(that.inputObj.innerHTML[that.inputObj.innerHTML.length - 1] != span) {
								that.inputObj.innerHTML += span;
							}
						}
					} catch(e) {
						//TODO handle the exception
					}
					that.inputObj.innerHTML += str + span;
					that.table.table.tr[ind].td[0].setAttribute("select", "1");
				}
			}
			

		}
		if(that.mode == 0) {
			if(lastSelect >= 0 && lastSelect < that.table.table.tr.length) {
				that.table.table.tr[lastSelect].td[0].setAttribute("select", "0");
			}
			lastSelect = ind;
			if(lastSelect>=0){
				if(that.table.table.tr[lastSelect].td[0].getAttribute("select") == "1") {
					that.table.table.tr[lastSelect].td[0].setAttribute("select", "0")
					that.inputObj.innerHTML = "";
				} else {
	
					that.inputObj.innerHTML = str;
					that.table.table.tr[lastSelect].td[0].setAttribute("select", "1")
				}
			}
			
		}
	}
	this.SelectAll = function() {
		for(i in that.strs) {
			that.setSelectedByIndex(that.strs[i]);
		}
	}
	this.setSelectedByIndex = function(index,exeSelectFunc) {
		that.sel(that.table.table.tr[index].td[0].innerHTML,exeSelectFunc)
	}
	this.setSelectedByString = function(str,exeSelectFunc) {
		that.sel(str,exeSelectFunc);
	}
	this.removeSelectedByIndex = function(index) {
		$$(that.table.table).removeElem(that.table.tr[index])
		that.strs.splice(index, 1);
	}
	this.removeSelectedByString = function(str) {
		for(i in that.strs) {
			if(that.strs[i] == str) {
				that.removeSelectedByIndex(i);
			}
		}
	}
	this.getValue = function() {
		return $$(that.inputObj).HTML();
	}
	this.getSelectIndex=function(){
		var v=$$(that.inputObj).HTML();
		for (var i=0;i<that.strs.length;i++) {
			if (v==that.strs[i]) {
				
				return i;
			}
		}
		return -1
	}
	this.addSelects = function(values) {
		for(i in values) {
			(function(i) {
				that.addSelect(values[i])
			})(i)
		}
	}
	this.addSelect = function(str) {
		var tr = that.table.addTr();
		that.strs.push(str);
		var d = that.table.addTd(that.table.table.tr.length - 1);
		d.style.textAlign = "center";
		d.innerHTML = str;
		d.style.cursor = "default";
		$$(d).addEvent("mousedown", function() {
			that.sel(str);
			// if(typeof(that.selectFunc) == "function") {
			// 	console.log("exes")
			// 	that.selectFunc(str);
			// }
		});
		$$(tr).addEvent("mouseenter", function() {
			$$(tr).mytype("mouseenter", "1")
		});
		$$(tr).addEvent("mouseout", function() {
			$$(tr).mytype("mouseenter", "0")
		});
	};
	//创建弹窗区域外壳div
	return this;
}

mdata.a.prototype.sys_report = function(config) {
	var content = this.myobject;
	this.pagefff = 0; //请求超时页面
	this.timer = null; //周期执行的定时器
	this.scanTime = 100; //周期扫描时间
	this.RunCycFuncs = []; //周期执行函数数组
	this.InitFuncs = []; //初始化函数数组
	this.refreshdata = [];
	this.privatename = "report";
	this.singlePageMaxRows = (typeof(config["singlePageMaxRows"]) == "number" && config["singlePageMaxRows"] > 0) ? config["singlePageMaxRows"] : 50; //单页最多行数，此数据表示纯数据的行数
	this.footHeight = ""; //
	this.cellsMax = -1; //列数
	this.pageSelectWidth = "25px"; //底部页数选择宽度
	this.pageSelectObjs = []; //页数选择元素合集
	this.beforePage; //上一页选择
	this.afterPage; //下一页选择
	this.pages; //页数
	this.curPage = 1; //当前页数，从1开始
	this.curPageColor = "rgb(33,158,216)";
	this.borderstyle = "0px solid black"; //报表边框
	this.sys_ViewWordPage;
	this.config=config;
	this.inputpage;
	this.mouseCursor = "5px";
	this.exportFunc;
	this.box;
	this.headtable;
	this.table;
	this.foottable;
	this.footdisplay;
	this.tablediv;
	this.footrefresh;
	this.headtablediv;
	this.foottablediv;
	this.numselect; //行数选择
	this.tableMaxHeight = ""; //显示方式
	this.pageDatas = [];
	this.searchdiv;
	this.lastSelectNum=0;//上次选择数据
	this.fields = {}; //字段统计
	this.pageobjs={};//存储页数
	this.edittable = 0;
	this.curSelectDataIndex = -1;
	this.requestSrouce=0;
	var cssname = (typeof(config["cssname"]) == "string")?config["cssname"] : "sys_report"; //单页最多行数，此数据表示纯数据的行数
	this.curCSSPath = cssname;
	try {
		if(config["CSSPath"] != "") {
			this.curCSSPath = config["CSSPath"]
		}
	} catch(e) {
		//TODO handle the exception
	}
	this.curSelectData; //当前选择的行数的json数据
	this.lastselect;
	
	
	this.curSelectTr=0
	var that = this;
	/**
	 * 创建表格
	 * tdwidthArray  单元格宽度数组
	 * fatherobj     表格父元素
	 * xnum          tr个数
	 * ynum          单元格个数
	 * mycss         表格样式
	 * mytype        表格类型
	 * type          0的时候是表格，1的时候是页脚
	 */
	this.tablecreate = function(tdwidthArray, fatherobj, xnum, mycss, mytype, type) {
		var a = [];
		for(var i = 0; i < xnum; i++) {
			a.push("");
		};
		var b = {};
		for(var i = 0; i < xnum; i++) {
			b["tr" + i] = tdwidthArray;
		}
		var table = $$().create_table(fatherobj, a, b);
		return table;
	}
	this.loadcss = function() {
		var lin = document.createElement("link");
		lin.setAttribute("class", "mdata-controls");
		lin.setAttribute("rel", "stylesheet");
		lin.setAttribute("href", "http://" + window.location.host + that.curCSSPath + cssname+'.css?v=' + Math.random())
		document.body.appendChild(lin);
	}
	that.loadcss();
	this.searchfunction = function(searchinit, searchfunc) {
		var tdd=["10px"];
		for(var i in searchinit){
			tdd.push("");
			tdd.push("");
		}
		tdd.push("50px");
		if ("otherFuncArray" in config) {
			if (config["otherFuncArray"]!=0) {
				try{
					for (var jn  in config["otherFuncArray"]) {
						tdd.push("");
						tdd.push("");
					};
				}catch(e){
					//TODO handle the exception
				}
			}
		};
		var tr=[];
		for (var in0=0;in0<config["searchCol"];in0++) {
			tr.push("");
		};
		var t = $$(that.searchdiv).create_table(0,tr, tdd);
		t.style.height = "";
		t.setAttribute("class", that.privatename + " " + that.privatename + "-searchtable");
		t.style.width = "";
		var j = 0;
		var tssss = [];
		var searchinput=0;
		for(var i in searchinit) {
			if(typeof(searchinit[i])=="object"){
				t.tr[0].td[j+1].style.minWidth="100px";
				var c = $$(t.tr[0].td[j+1]).addEle("span", 0, 0, "&nbsp;&nbsp;&nbsp;&nbsp;"+searchinit[i]["title"] + ":&nbsp;&nbsp;&nbsp;&nbsp;");
				var n=searchinit[i].init({"fobj":t.tr[0].td[j+2],"thisconfig":searchinit[i]});
				tssss.push(n);
			}else{
				t.tr[0].td[j+1].style.minWidth="100px";
				var c = $$(t.tr[0].td[j+1]).addEle("span", 0, 0, searchinit[i] + ":&nbsp;&nbsp;&nbsp;&nbsp;");
				var n = $$(t.tr[0].td[j+2]).addEle("input", {
					"type": "text"
				});
				(function(n,j,t){
					$$(n).addEvent("paste",function(e){
						t.tr[0].td[j+2].setAttribute("contenteditable","false");
					})
				})(n,j,t)
				searchinput=n;
				t.tr[0].td[j+2].setAttribute("contenteditable","false");
				tssss.push(n);
			}
			j+=2;
		}
		
		try{
			for (var i in config["searchOther"]) {
				var jo=0;

				for (var ij in config["searchOther"][i]) {
					try{
						var c = $$(t.tr[parseInt(i)+1].td[jo+1]).addEle("span", 0, 0, "&nbsp;&nbsp;&nbsp;&nbsp;"+config["searchOther"][parseInt(i)][ij]["title"] + ":&nbsp;&nbsp;&nbsp;&nbsp;");
						var n=config["searchOther"][parseInt(i)][ij].init({"fobj":t.tr[parseInt(i)+1].td[jo+2],"thisconfig":config["searchOther"][parseInt(i)][ij]});
						tssss.push(n);
					}catch(e){
						//TODO handle the exception
					};
					jo=jo+2;
				}
			}
		}catch(e){
			//TODO handle the exception
		}
		
		var h = typeof(config["searchButtonName"]) == "string" ? config["searchButtonName"] : "搜索";
		t.tr[0].td[j+1].style.minWidth="100px"
		var m = $$(t.tr[0].td[j+1]).addEle("button", 0, {
			"class": that.privatename + " " + that.privatename + "-searchbutton"
		}, h);
		j=j+1;
		if ("otherFuncArray" in config) {
			if (config["otherFuncArray"]!=0) {
				try{
					for (var jn  in config["otherFuncArray"]) {
						config["otherFuncArray"][jn].init({"fobj":t.tr[0].td[j+1]});
					};
				}catch(e){
					//TODO handle the exception
				}
			}
			
		};

		if(typeof(searchfunc) == "function") {
			$$(m).addEvent("click", function() {
				that.lastSelectNum=0;
				searchfunc(that,tssss);
			});
			$$(that.searchdiv).addEvent("keydown", function(event) {
				if(event.keyCode == 13) {　　　　　　
					searchfunc(that,[searchinput],tssss,searchinit);　	　　
				}
			})
		}
	}
	
	this.funcc = {};
	this.init = function() {
		that.box = $$(that.myobject).addEle("div", 0, {
			"class": that.privatename + " " + that.privatename + "-reportbox"
		});
		that.searchdiv = $$(that.box).addEle("div", 0, {
			"class": that.privatename + " " + that.privatename + "-searchdiv"
		});
		that.exportFunc = $$(that.box).addEle("div", 0, {
			"class": that.privatename + " " + that.privatename + "-func"
		});
		var exportFunctt = $$(that.exportFunc).table({
			"width": "",
			"height": "100%"
		}, {
			"class": that.privatename + " " + that.privatename + "-func-table"
		});
		that.exportFunct = exportFunctt.table;
		exportFunctt.addTr();
		exportFunctt.addTd(0, {
			"width": "10px"
		});
		that.headtablediv = $$(that.box).addEle("div", {
			"width": "100%"
		}, {
			"class": that.privatename + " " + that.privatename + "-headtablediv"
		});
		try {
			for(var i in config["funcZone"]) {
				try{
					that.funcc[i] = config["funcZone"][i]
					
					exportFunctt.addTd(0, {
						"backgroundImage": config["funcZone"][i]["icon"]
					}, {
						"class": that.privatename + " " + that.privatename + "-func-icon"
					});
					var td = exportFunctt.addTd(0, 0, {
						"class": that.privatename + " " + that.privatename + "-func-txt"
					});
					td.innerHTML = config["funcZone"][i]["txt"]
					exportFunctt.addTd(0, {
						"width": "10px"
					}, {
						"class": that.privatename + " " + that.privatename + "-func-span"
					});
					if(typeof(config["funcZone"][i]["func"]) == "function") {
						(function(td, i) {
							$$(td).addEvent("click", function() {
								config["funcZone"][i]["func"](that, that.edittable, that.curSelectDataIndex, 0);
							});
						})(td, i)
					}
				}catch(e){
					//TODO handle the exception
				}
			}
		} catch(e) {
			//TODO handle the exception
		}

		that.tablediv = $$(that.box).addEle("div", {
			"width": "100%",
			"overflow": "scroll"
		}, {
			"class": that.privatename + " " + that.privatename + "-tablediv"
		});
		that.createiframe();
		that.foottablediv = $$(that.box).addEle("div", {
			"width": "100%"
		}, {
			"class": that.privatename + " " + that.privatename + "-foottablediv"
		});
		try {
			that.searchfunction(config["search"], config["searchFunc"])
		} catch(e) {
			//TODO handle the exception
		}
		try {
			that.report_ajax_post(config["ajaxurl"], config["ajaxdata"], config["ajaxloading"], config["ajaxFunc"]);
		} catch(e) {
			//TODO handle the exception
		}
	}
	this.createiframe=function(){
		try{
			that.table.innerHTML="";
			if (typeof(that.pagefff)=="object") {
				//that.tablediv.removeChild(that.pagefff)
				$$(that.tablediv).removeElem(that.pagefff);
			}
		}catch(e){
			//TODO handle the exception
		};

		that.pagefff = $$(that.tablediv).addEle("iframe", {
			"width": "100%",
			"height": "100%",
			"float": "left",
			//"position":"absolute",
			"top":"0",
			"left":"0",
			"zIndex": "9999",
			"border": ""
		}, {
			"src": config["ajaxloading"],
			"frameborder": "0"
		});
	}
	this.updateData=function(formdata,func,detailPageObj){
		$$().ajax_post({
			"url":config["ajaxurl"],
			"str":formdata,
			"response":undefined,
			"func":{
				"readystatechange":function(s) {
					var ddd=func(that,s,config);
					that.table.innerHTML=ddd[0];
					try{
						config["reportInitFunc"](that.table);
					}catch(e){
						//TODO handle the exception
					}
					var inhtml=that.footdisplay.innerHTML;
					inhtml=inhtml.replace(/总共[\d]+/,"总共"+ddd[1])
					that.footdisplay.innerHTML=inhtml;
				}
			},
			"freefunc":function(xml){
				try{
					config["detailAjaxLoading"](xml,detailPageObj)
				}catch(e){
					//TODO handle the exception
				}
			},
			"zipEnable":config["zipenable"]
		})
	}
	this.refreshData = function() {
		that.refreshFootDisplay();
		that.refreshAllData();
	}
	this.refreshAllData = function() {
		if(that.refreshdata.length > 0) {
			that.report_ajax_post(that.refreshdata[0],that.refreshdata[1],that.refreshdata[2],that.refreshdata[3],1);
		}
	}
	this.searchData = function(data, refreshDataSwitch) {
		if(that.refreshdata.length > 0) {
			that.report_ajax_post(that.refreshdata[0], data, that.refreshdata[2], that.refreshdata[3], func1, refreshDataSwitch);
		}
	}
	this.postData = function(data, refreshDataSwitch,func) {
		if (typeof(func)!="function") {
			func=that.refreshdata[3]
		}
		if(that.refreshdata.length > 0) {
			that.report_ajax_post(that.refreshdata[0], data, that.refreshdata[2], func, refreshDataSwitch);
		}
	}
	this.report_ajax_post = function(posturl, formdata, loadingurl, func, refreshDataSwitch) {
		if(typeof(refreshDataSwitch) == "undefined") {
			refreshDataSwitch = 2;
		}
		if(refreshDataSwitch == 2) {
			that.refreshdata = [posturl, formdata, loadingurl, func];
		}
		if(refreshDataSwitch>0) {
			that.createiframe();
			that.pagefff.style.display=""
			
			try {
				for(var i = 0; i < that.table.tr.length; i++) {
					that.table.tr[i].style.display = "none";
				}
			} catch(e) {
				//TODO handle the exception
			}
			if(typeof(that.headtable) == "object") {
				try {
					$$(that.headtable).removeElem()
				} catch(e) {
					//TODO handle the exception
				}
			}
			if(typeof(that.table) == "object") {
				try {
					$$(that.table).removeElem()
				} catch(e) {
					//TODO handle the exception
				}
			}
		}
		var lastsss = 0;
		var lastbbb = "正在加载数据，请稍后";
		that.pagefff.src = loadingurl + "?u=" + encodeURI(lastbbb);
		that.requestSrouce+=1;
		$$().ajax_post({
			"url":posturl,
			"str":formdata,
			"response":undefined,
			"func":{
				"readystatechange":function(s) {
					
					that.pagefff.style.display="none";
					if(refreshDataSwitch>0) {
						var dddd = func(that, s,config);
						that.initReport(dddd);
						that.refreshFootDisplay();
					}
					try {
						clearInterval(timer);
					} catch(e) {
						//TODO handle the exception
					}
				}
			},
			"otherfunc":function(s) {
				var b = "";
				if(s.readyState == 2) {
					if(s.status == 200) {
						b = "请求已发送出去，请稍后";
					}
				}
				if(s.readyState == 3) {
					if(s.status == 200) {
						b = "服务器已接收到请求，正在查询数据，请稍后";
					}
				}
				if(s.readyState == 4) {
					if(s.status == 200) {
						b = "接收到数据，正在处理，请稍后";
					}
				}
				if(b != lastbbb && b != "") {
					that.pagefff.src = loadingurl + "?u=" + encodeURI(b);
					lastbbb = b;
				}
				lastsss = s;
			},
			"zipEnable":config["zipenable"]
		})
		
	}
	
	/**
	 * 创建详情页
	 * obj 详情页父元素
	 * j   当前选择行的元素
	 * mode 1的时候详情，0的时候为增加数据
	 * initFunc function，详情页初始化函数
	 * 
	 */
	this.createDetailPage=function(obj, j, mode,initFunc,submitEnable){
    try{
  		if(typeof(obj) != "object") {
  			obj = document.body;
  		}
  		try{
  			var curin = j;
  			var realdata = {};
  			if(typeof(j)=="object") {
  				curin = j;
  			} else {
  				curin = that.table.rows[0];
  			}
  			var datajson={};
  			var ssf=curin.getElementsByTagName("td");
  			for(var i = 0; i < ssf.length; i++) {
  				var ids =ssf[i].getAttribute("fieldname");
  				datajson[ids]="";	
  				if(mode==1){
  					datajson[ids]=ssf[i].innerHTML;
  				}
  			}
  		}catch(e){
  			//TODO handle the exception
  		}
  		var jh={};
  		for (var i=0;i<config["DetailPageHideFieldsArray"].length;i++) {
  			jh[config["DetailPageHideFieldsArray"][i]]="";
  		}
  		var datajsons={};
  		for (var i in config["fieldNames"]) {
  			try{
  				datajsons[config["fieldNames"][i]]=datajson[config["fieldNames"][i]]
  			}catch(e){
  				//TODO handle the exception
				
  				datajsons[config["fieldNames"][i]]="";
  			}
  		}
  		that.curSelectTr=j
  		var detailAjaxFormData=config["detailAjaxFormDataFunc"](config["detailAjaxFormData"],datajsons);
  		var s=$$().sys_ViewWordPage({
  			"curCSSPath":config["CSSPath"],
  			"enableedit":"1",
  			"that":that,
  			"zipenable":config["zipenable"],
  			"submitDisplay":config["submitDisplay"],
  			"submitEnable":submitEnable,
  			"detailContentFree":config["detailContentFree"],
  			"jsondata":(mode==0)?datajsons:(config["detailAjaxEnable"]==true)?{}:datajsons,
  			"initFunc":initFunc,
  			"ajaxloading":config["ajaxloading"],
  			"submitFunc":config["detailSubmitFunc"],
  			"detailAjax":{
  				"enable":(mode==1)?config["detailAjaxEnable"]:false,
  				"url":config["ajaxurl"],
  				"zipenable":config["zipenable"],
  				"formdata":detailAjaxFormData,
  				"loading":config["detailAjaxLoading"],
  				"func":function(s){
  					return config["detailAjaxFunc"](s)
  				}},
  			"fieldNames":config["fieldNames"],
  			"chineseFields":config["fieldCHNNames"],
  			"hidefields":jh
  		});
  		that.sys_ViewWordPage=s;
    }catch(e){
			//TODO handle the exception
			console.log(e)
		}
		return s;
	}
	
	
	/*
	设置表格显示，该函数在每页数目改变，页数选择的时候
	value  ajax返回结果  table
	*/
	this.resetTable=function(value,page){
		if (typeof(value)=="string") {
			that.table.innerHTML +=value;
			try{
				config["reportInitFunc"](that.table);
			}catch(e){
				//TODO handle the exception
			}
		}
		
		
		
	}
	this.trclick=function(index,obj){
		var b = that.footdisplay.innerHTML;
		that.curSelectDataIndex = obj;
		that.footdisplay.innerHTML = b.replace(/当前选中第[\d]+条记录。$/ig, "");
		
		var displayNum=0;
		for (var jk=0;jk<that.table.rows.length;jk++) {
			if (jk<index && that.table.rows[jk].style.display=="") {
				displayNum+=1;
			} else{
				
			}
			
		}
		
		
		that.footdisplay.innerHTML += "当前选中第" + displayNum + "条记录。";
	}
	this.trmousedown=function(index,obj){
		if (typeof(obj)!="object") {
			obj=that.table.rows[index];
			
		}
		try{
			that.curSelectData = obj.getAttribute("data")
		}catch(e){
			//TODO handle the exception
		}
		try {
			that.lastselect.setAttribute("select", "0");
		} catch(e) {
			//TODO handle the exception
		}
		obj.setAttribute("select", "1");
		that.lastselect = obj;
	}
	this.trdblclick=function(index,obj){
		var b = that.footdisplay.innerHTML;
		
		if (typeof(obj)!="object") {
			obj=that.table.rows[index];
		} 
		try {
			if(typeof(obj.alert) != "undefined") {
				$$().removeElem(obj.alert);
			}
		} catch(e) {
			//TODO handle the exception
			
			obj.alert = 0;
		}
		try {
			if(config["edit"] == true) {
				try {
					if(typeof(that.funcc["修改"]["func"]) == "function") {
						that.funcc["修改"]["func"](that, that.edittable, that.curSelectDataIndex, 0);
					}
				} catch(e) {
				}
			} else {
				that.createPreview(obj, index);
			}
				
		} catch(e) {
			//TODO handle the exception
			try {
				if(typeof(that.funcc["修改"]["func"]) == "function") {
					that.funcc["修改"]["func"](that, that.edittable, that.curSelectDataIndex, 0);
				}
			} catch(e) {
				
			}
		}
	}
	this.createTable=function(va){
		try{
			that.cellsMax = config["displayField"].length; //表格列数
			if(typeof(that.headtable) == "object") {
				try {
					$$(that.headtable).removeElem();
				} catch(e) {
					//TODO handle the exception
				}
			}
			var lastselect = -1;
			that.headtable=$$(that.headtablediv).create_table(0,[""],[""]);
			that.headtable.setAttribute("class", that.privatename + " " + that.privatename + "-headtable");
			that.tablediv.innerHTML = va;
			that.table = that.tablediv.getElementsByTagName("table")[0];
			try{
				config["reportInitFunc"](that.table);
			}catch(e){
				//TODO handle the exception
			}
			try{
				that.table.id = $$().checkId("table");
			}catch(e){
				//TODO handle the exception
			}
			that.table.style.height = "";
			//that.table.style.height = "100%";
			that.table.style.width = "100%";
			that.table.style.textAlign = "center";
			that.table.style.tableLayout = "fixed";
			that.table.setAttribute("cellspacing", "0");
			that.table.setAttribute("cellpadding", "0");
			that.table.style.padding = "0";
			that.table.style.margin = "0";
			that.table.style.overflow = "hidden";
			that.table.style.cursor = "default";
			that.table.style.borderCollapse = "collapse";
			that.table.setAttribute("class", that.privatename + " " + that.privatename + "-contenttable");
			that.pages = Math.ceil(config["resultsNum"] / that.singlePageMaxRows);
			for(var i = 0; i < config["displayField"].length; i++) {
				if (i>0) {
					that.headtable.tr[0].td.push($$(that.headtable.tr[0]).addEle("td"));
				}
			}

			for (var j in config["displayField"]) {
				try{
					that.headtable.tr[0].td[j].innerHTML = config["fieldCHNNames"][config["displayField"][j]];
				}catch(e){
				}
			};
			try{
				config["headRefresh"](that.headtable);
			}catch(e){
				//TODO handle the exception
			}
			try{
				if (config["highspeed"]==true) {
					return;
				} else{
					
				}
			}catch(e){
				//TODO handle the exception
			}
			for(var i = 0; i < that.singlePageMaxRows; i++) {
				try{
					that.table.rows[i].style.display = "";
				}catch(e){
					//TODO handle the exception
				}
			};
			
			for(var i = 0; i < that.table.rows.length; i++) {
				(function(i) {
					$$(that.table.rows[i]).addEvent("click", function() {
						that.trclick(i);
					});
					$$(that.table.rows[i]).addEvent("mousedown", function() {
						that.trmousedown(i);
					}, true);
		
					$$(that.table.rows[i]).addEvent("dblclick", function() {
						that.trdblclick(i);
					});
				})(i);
			};
		}catch(e){
			//TODO handle the exception
		}
	}
	this.initReport = function(va) {
		try {
			that.pagefff.style.display="none"
		} catch(e) {
			//TODO handle the exception
		}
		try {
			if(typeof(that.table) == "object") {
				$$().removeElem(that.table);
			}
		} catch(e) {
			//TODO handle the exception
		}
		that.createTable(va);
		try {
			for(var mm = 0; mm < config["tablefields"].length; mm++) {
				that.fields[config["tablefields"][mm]] = 0;
			}
		} catch(e) {
			//TODO handle the exception
		}
		if(typeof(that.foottable) == "object") {
			try {
				$$().removeElem(that.numselect.box);
			} catch(e) {
				//TODO handle the exception
			}
			try {
				$$().removeElem(that.inputpage.box);
			} catch(e) {
				//TODO handle the exception
			}
			$$().removeElem(that.foottable);
		} else {
			//			that.createFoot();
			//			that.refreshPages();
		};
		that.createFoot();
		//that.refreshPages();

	}

	this.refreshPages = function() {
		try{
			var len=that.table.rows.length;
			if ( "resultsNum" in config) {
				len=config["resultsNum"]
			}
			that.pages = Math.ceil(len / that.singlePageMaxRows);
			var bb = [];
			for(var i = 1; i < that.pages + 1; i++) {
				bb.push("第" + i + "页");
			};
			that.curPage = 1;
			that.inputpage.clears()
			that.inputpage.addSelects(bb);
			that.inputpage.setSelectedByString("第1页",1);
		}catch(e){
			//TODO handle the exception
		}

	}
	this.refreshFootDisplay = function() {
		try{

			//var len=that.table.rows.length;
			var displayNum=0;
			for (var jk=0;jk<that.table.rows.length;jk++) {
				if (that.table.rows[jk].style.display=="") {
					displayNum+=1;
				} else{
					
				}
			}
			
			// if ( "resultsNum" in config) {
			// 	len=config["resultsNum"];
			// }
			try {
				var start = that.singlePageMaxRows * (that.curPage - 1) + 1;
				var end = start + that.singlePageMaxRows - 1;
				that.footdisplay.innerHTML = "当前显示第" + start + "-" + end + "行记录，总共" + displayNum + "条记录。";
	
			} catch(e) {
				//TODO handle the exception
			}
		}catch(e){
			//TODO handle the exception
			console.log(e)
		}
	}
	/**
	 * 创建页脚
	 * @param {Object} tdwidthArray
	 * @param {Object} numarray
	 */
	this.createFoot = function(tdwidthArray, numarray) {
		that.foottable = that.tablecreate(["", "", "", "", "", ""], that.foottablediv, 1, {
			"width": "100%",
			"height": "",
			"cellspacing": "0",
			"borderCollapse": "collapse"
		}, {
			"class": that.privatename + "-foottable"
		}, 1);

		that.foottable.rows[0].style.height = that.footHeight;
		that.footrefresh = $$(that.foottable.rows[0].cells[0]).addEle("div", {
			"lineHeight": "100%",
			"textAlign": "center"
		}, 0, "刷新");
		that.foottable.rows[0].cells[0].style.width = "50px";
		that.foottable.rows[0].cells[1].style.width = "50%";
		that.foottable.rows[0].cells[1].style.textAlign = "left";
		that.foottable.rows[0].cells[2].innerHTML = "每行记录条数：";

		$$(that.footrefresh).addEvent("click", function() {
			that.refreshFootDisplay();
			that.refreshAllData();

		})
		that.footdisplay = $$(that.foottable.rows[0].cells[1]).addEle("div", {
			"lineHeight": "100%"
		});
		that.numselect = $$(that.foottable.rows[0].cells[3]).sys_selectmenu();
		that.numselect.mode = 0;
		that.numselect.zhezhao = that.box;
		var func=function(that){	
			that.footdisplay.innerHTML = "当前显示第1-" + that.singlePageMaxRows + "行记录，总共" +config["resultsNum"]+ "条记录。";
			that.refreshPages();
			try{
				if(config["highspeed"]==true){
					return;
				}
			}catch(e){
				//TODO handle the exception
			}
			for(var i = 0; i < that.singlePageMaxRows; i++) {
				try {
					that.table.rows[i].style.display = "";
				} catch(e) {
					//TODO handle the exception
				}
			};
		}
		that.numselect.selectFunc = function(s) {
			try {
				if (parseInt(s)==that.lastSelectNum) {
				} else{
					that.lastSelectNum=parseInt(s);
					that.singlePageMaxRows = parseInt(s);
					try{
						if (config["highspeed"]==true) {
							console.log("提交了一个分页查询");
							config["highspeednumselectfunc"](that,that.table,that.singlePageMaxRows,func)
						}else{
							func(that);
						}
					}catch(e){
						//TODO handle the exception
					}
				}
				
				
			} catch(e) {
				//TODO handle the exception
				////console.log(e)
			}
			
			that.refreshFootDisplay();
		};
		if ("SelectNum" in config) {
			if (that.lastSelectNum==0) {
				that.lastSelectNum=config["SelectNum"];
				that.singlePageMaxRows=config["SelectNum"];
				that.numselect.init(["10", "20", "50", "100", "200", "500", "1000", "2000","5000"],config["SelectNum"]+"");
			} else{
				that.numselect.init(["10", "20", "50", "100", "200", "500", "1000", "2000","5000"],that.lastSelectNum+"");
			}
			
		} else{
			that.numselect.init(["10", "20", "50", "100", "200", "500", "1000", "2000","5000"],"5000");
		}
		that.inputpage = $$(that.foottable.rows[0].cells[4]).sys_selectmenu();
		that.inputpage.zhezhao = that.box;
		that.inputpage.mode = 0;
		var func2=function(that){
			//获取当前选择的表格
			try {
				that.refreshFootDisplay();
			} catch(e) {
				//TODO handle the exception
			}
		}
		that.inputpage.selectFunc = function(s) {
			that.curPage = parseInt(s.match(/[0-9]+/ig)[0]);
			try{
				
				if (config["highspeed"]==true) {
					that.createiframe();
					that.table.style.display="none";
					console.log("ff")
					config["highspeedpageselectfunc"](that,that.table,[ that.singlePageMaxRows * (that.curPage - 1)+1, that.singlePageMaxRows * that.curPage],func2)
				}else{
					func2(that);
				}
			}catch(e){
				//TODO handle the exception
			}
			try{
				if (config["highspeed"]==true) {
					return;
				}
			}catch(e){
				//TODO handle the exception
			}
			that.table.style.display="";
			//隐藏所有表格
			for(var i = 0; i < that.table.rows.length; i++) {
				try{
					that.table.rows[i].style.display = "none";
				}catch(e){
					//TODO handle the exception
				}
			};
			that.curPage = parseInt(s.match(/[0-9]+/ig)[0]);
			for(var i = that.singlePageMaxRows * (that.curPage - 1); i < that.singlePageMaxRows * that.curPage; i++) {
				try {
					that.table.rows[i].style.display = "";
				} catch(e) {
					//TODO handle the exception
				}
			};
		}
		var bb = [];
		for(var i = 1; i < that.pages + 1; i++) {
			bb.push("第" + i + "页");
		}
		that.inputpage.init(bb);
		that.inputpage.setSelectedByString("第1页",1);
	}
	return this;
}

mdata.a.prototype.sys_selectmenu2 = function(obj) {
	this.div; //可见区域外壳div
	this.strs = []; //所有选项字符串
	this.inputs = []; //选框OBJ合集，每一个元素都是一个div，这个div包括一个input属性和一个span属性
	if(typeof(obj) != "object") {
		obj = this.myobject;
	}
	var curselect = 0;
	this.privateClass = "-sys_selectmenu2";
	this.selectFunc = function(s) {} //选中事件
	var that = this;
	//创建可见区域
	this.init = function(strarr, default_select_str) {
		that.div = $$(obj).addEle("div");
		$$(that.div).mytype({
			"class": that.mdataTheme + that.privateClass + "-div " + $$(obj).getClasses() + that.privateClass + "-div"
		});
		that.div.style.display = "inline-block";
		$$(that.div).unSelect();
		that.div.style.cursor = "default";
		that.div.style.overflow = "hidden";

		that.addSelects(strarr, that.selectFunc);
		if(typeof(default_select_str) == "string") {
			that.setSelectedByString(default_select_str)
		}
	}
	this.show = function(enable) {
		if(typeof(enable) != "undefined") {
			if(enable == 1) {
				that.div.style.display = "";
			} else {
				that.div.style.display = "none";
			}

		} else {
			that.div.style.display = "none";
		}
	}

	this.clears = function() {
		that.strs = [];
		while(that.table.tr.length > 0) {
			that.table.removeTr(0);
		}
		lastSelect = -1;
	}

	function sel(str) {
		(function(str) {
			var ind = that.strs.indexOf(str);
			curselect = ind;
			for(var i = 0; i < that.inputs.length; i++) {
				if(i != ind) {
					that.inputs[i].inputobj.checked = false;
					that.inputs[i].setAttribute("selecte", "0");
				} else {
					that.inputs[i].inputobj.checked = true;
					that.inputs[ind].setAttribute("selecte", "1");
				}
			}
		})(str)

	}
	this.SelectAll = function() {
		for(i in that.strs) {
			that.setSelectedByIndex(that.strs[i]);
		}
	}
	this.setSelectedByIndex = function(index) {
		sel(that.table.table.tr[index].td[0].innerHTML)
	}
	this.setSelectedByString = function(str) {
		sel(str);
	}
	this.removeSelectedByIndex = function(index) {
		$$(that.table.table).removeElem(that.table.tr[index])
		that.strs.splice(index, 1);
	}
	this.removeSelectedByString = function(str) {
		for(var i in that.strs) {
			if(that.strs[i] == str) {
				that.removeSelectedByIndex(i);
			}
		}
	}
	this.getValue = function() {
		return $$(that.inputs[curselect].span).HTML();
	}
	this.addSelects = function(values) {
		for(var i in values) {
			(function(i) {
				that.addSelect(values[i])
			})(i)
		}
	}
	this.addSelect = function(str) {
		var d = $$(that.div).addEle("div", {
			"display": "inline-block"
		});
		d.inputobj = $$(d).addEle("input", {
			"display": "inline-block"
		}, {
			"type": "radio"
		});
		d.span = $$(d).addEle("span", 0, 0, str);
		that.strs.push(str);
		that.inputs.push(d);
		$$(d).addEvent("mousedown", function() {
			sel(str);
		});
		$$(d).addEvent("mouseenter", function() {
			$$(d).mytype("mouseenter", "1")
		});
		$$(d).addEvent("mouseout", function() {
			$$(d).mytype("mouseenter", "0")
		});
	};
	//创建弹窗区域外壳div
	return this;
}
mdata.a.prototype.sys_leftMenu = function(obj,config) {
	obj = $$(obj).selectionobj(); //选择器选择的元素
	if(typeof(obj) == "undefined") {
		obj = this.myobject;
	}
	this.mode=0;//mode为0时单项选择，1时多项选择
	this.SpanWidth = 10; //级别缩进
	this.div = 0; //外壳div
	this.headdiv;//头部div
	this.contentdiv;//内容div
	this.footdiv;//最下面的页脚div
	this.privateclass = "sys_leftMenu";
	this.left=1;
	this.objs = {};
	this.datas;
	this.displayFieldName;
	this.displayFieldNameChinese;
	this.displaydatas;
	this.displayiddata;
	this.widths;
	this.curSelect = []; //当前选择的选项，是一个数组，[box，title，href，index]
	this.boxx = []; //每行元素合集
	this.selectobjs={};//当前选中的元素合集
	this.selectFunc=function(){};//选项选中事件，默认4个参数，元素，标题，全标题，数据
	this.dblselectFunc=function(){};//选项选中事件，默认4个参数，元素，标题，全标题，数据
	this.calcelFunc=function(){};//选项选中事件，默认4个参数，元素，标题，全标题，数据
	this.chuli = [function(s) {
		var chulizhihou = s;
		return [chulizhihou, s];
	}];
	var that = this;
	this.loadcss = function(curCSSPath) {
		var lin = document.createElement("link");
		lin.setAttribute("class", "mdata-controls");
		lin.setAttribute("rel", "stylesheet");
		lin.setAttribute("href", "http://" + window.location.host + curCSSPath + 'sys_leftMenu.css?v=' + Math.random())
		document.body.appendChild(lin);
	}
	this.addData1 = function(thattt, fobj, datas) {
		for(var i in datas) {
			(function(i) {
				var ffobj = that.addSingle1(fobj, i, datas[i]);
				//savedata[i]=ffobj;
				if(typeof(datas[i]) == "object") {
					thattt.addData1(thattt, ffobj, datas[i]);
				}
			})(i)
		}
	}
	this.init = function() {
		that.div = $$(obj).addEle("div",0, {
			"class": that.privateclass+"-leftmenubox",
			"module": "sys_leftMenu",
			"type":"1"
			
		});
		that.headdiv = $$(that.div).addEle("div", {
			"width": "100%"
		}, {
			"class": that.privateclass + "-selectHeadDiv",
			"module": "sys_leftMenu"
		});
		that.contentdiv = $$(that.div).addEle("div", {
			"width": "100%"
		}, {
			"class": that.privateclass + "-selectContentDiv",
			"module": "sys_leftMenu"
		});
		that.footdiv = $$(that.div).addEle("div", {"overflow":"auto"}, {
			"class": that.privateclass + "-footdiv"
		});
	}
	this.removeAllData=function(){
		for (var i=0;i<that.contentdiv.childNodes.length;i++) {
			try{
				if (typeof(that.contentdiv.childNodes[i])=="object") {
					$$().removeElem(that.contentdiv.childNodes[i]);
				}
			}catch(e){
				//TODO handle the exception
			}
		}
	}
	this.addData = function(datas,displaydata,displayFieldName,displayFieldNameChinese,widths) {
		that.removeAllData();
		var fobj = that.contentdiv;
		that.displaydatas=displaydata;
		that.displayFieldName=displayFieldName;
		that.displayFieldNameChinese=displayFieldNameChinese;
		that.datas = datas;
		that.widths=widths;
		var tdd = ["", "", "", ""];
		for(var i in that.displayFieldName){
			tdd.push("");
		}
		that.headdiv.tablediv = $$(that.headdiv).create_table(0, [""], tdd);
		try{
			that.headdiv.tablediv.tr[0].td[1].innerHTML=displayFieldNameChinese[0];
			for(var i=1;i<that.displayFieldNameChinese.length;i++){
				that.headdiv.tablediv.tr[0].td[parseInt(i)+3].innerHTML=displayFieldNameChinese[parseInt(i)];
			}
			for (var i=0;i<that.headdiv.tablediv.tr[0].td.length;i++) {
				try{
					that.headdiv.tablediv.tr[0].td[i].style.width = that.widths[i];
				}catch(e){
					//TODO handle the exception
				}
			}
		}catch(e){
			//TODO handle the exception
		}
		for(var i in datas) {
			(function(i) {
				var ffobj = that.addSingle1(fobj, i, datas[i]);
				//savedata[i]=ffobj;
				if(typeof(datas[i]) == "object") {
					that.addData1(that, ffobj, datas[i]);
				}
			})(i)
		}
	}
	this.cancelSelectByStr=function(str){
		 if (str in that.selectobjs) {
		 		that.selectobjs[ttt].setAttribute("select","-1");
		 		
		 		try {
					var bbb=that.selectobjs[ttt].fobj.boxx.getAttribute("subselect");
					var aaa=(typeof(bbb)=="string")?parseInt(bbb):0;
					if (aaa<0) {
						aaa=0;
						that.selectobjs[ttt].fobj.boxx.setAttribute("subselect", "0");
					}else{
						that.selectobjs[ttt].fobj.boxx.setAttribute("subselect", "1");
					}
					that.selectobjs[ttt].fobj.boxx.setAttribute("subselects", aaa-1+"");
					
				} catch(e) {
					//TODO handle the exception
				}
				delete that.selectobj[str];
		 }
	}
	
	this.addSingle1 = function(fobj, title, href) {
		var ttt = title;
		var bsc = that.chuli[0](title);
		var beizhu = bsc[0];
		title = bsc[1];
		level = 1;
		var f = -1;
		var ffobj = fobj;
		if(typeof(fobj.func) == "undefined") {
			f = -1;
		} else {
			f = fobj.func;
		}
		try {
			if(typeof(fobj.getAttribute("level")) == "string") {
				level = parseInt(fobj.getAttribute("level")) + 1;
				ffobj = fobj.sub;
				fobj.z.innerHTML = ">";
			}
		} catch(e) {
			//TODO handle the exception

		}
		try{
			fobj.tit.setAttribute("openselect","1");
		}catch(e){
			//TODO handle the exception
		}
		//每个选项的主要父div
		
		var boxx = $$(ffobj).addEle("div", 0, {
			"class": that.privateclass +"-selectMainDiv",
			"level": level,
			"title": ttt,
			"text":title,
			"openselect":"-1"
		});
		try{
			if (typeof(config["selectMainDiv"])!="undefined") {
				try{
					config["selectMainDiv"](boxx,ttt,title)
				}catch(e){
					//TODO handle the exception
				}
			}
		}catch(e){
			//TODO handle the exception
		}
		
		
		that.boxx.push(boxx);
		//每个选项的下一个级别的父元素
		var box = $$(ffobj).addEle("div", 0, {
			"class": that.privateclass + "-selectSubDiv",
			"level": level
		});
		
		//每个选项的主要table
		var tdd = ["", "", "", ""];
		for(var i in that.displayFieldName){
			tdd.push("");
		}
		box.o = $$(boxx).create_table(0, [""], tdd)
		box.o.style.height = "";
		box.o.style.width = "100%";
		try{
			for(var ikk in that.displayFieldName){
				try{
				  box.o.tr[0].td[parseInt(ikk)+4].innerHTML=that.displaydatas[ttt][that.displayFieldName[ikk]];
				}catch(e){
					//TODO handle the exception		
				}
			}
		}catch(e){
			//TODO handle the exception
		}
		
		for (var i=0;i<box.o.tr[0].td.length;i++) {
			try{
				box.o.tr[0].td[i].style.width = that.widths[i];
			}catch(e){
				//TODO handle the exception
			}
		}
		$$(box.o).mytype({
			"class": that.contentdiv.getAttribute("class") + "-table " + box.getAttribute("class") + "-table",
			"level": level,
			"module": "sys_leftMenu"
		});
		var tod = $$(box.o.tr[0].td[1]).addEle("div", 0, {
			"class": box.getAttribute("class") + "-tit " + that.contentdiv.getAttribute("class") + "-tit",
			"module": "sys_leftMenu",
			"level": level
		});
		var tit = $$(tod).create_table(0, [""], [parseInt((level-1) * that.SpanWidth+that.left) + "px", "", ""])
		box.o.t = tit;
		tit.tr[0].td[0].style.width=(level-1) * that.SpanWidth+that.left+"px";
		tit.style.width = "";
		tit.tr[0].td[2].innerHTML = title;
		box.fobj = fobj;
		that.objs[title] = box;
		box.tit=tit;
		try{
			fobj.tit.tr[0].td[1].setAttribute("openselect", "1");
			if(level>2){
				fobj.tit.tr[0].td[1].setAttribute("openselect", "0");
				fobj.sub.style.height="1px";
				fobj.sub.style.display="none";
				fobj.o.tr[0].td[3].innerHTML = ">";
			}
		}catch(e){
			//TODO handle the exception
			//console.log(e)
		}
		box.z = box.o.tr[0].td[3];//箭头
		box.boxx = boxx;//每行主要div
		$$(tit.tr[0].td[1]).mytype({
			"class": that.privateclass + "-icon",
			"level": level,
			"openselect":"-1"
		});
		$$(box.o).addEvent("mousedown", function(s) {
			that.curSelect = [boxx,box, title, href, beizhu]
			if(typeof(that.curSelect) == "object") {
				that.curSelect[1].o.setAttribute("mousedown", "0");
			}
			box.o.setAttribute("mousedown", "1");	
			if(that.mode==0){
				for(var ii in that.boxx) {
					try {
						that.boxx[ii].setAttribute("select", "false");
					} catch(e) {
						//TODO handle the exception
					}
					try {
						fobj.boxx.setAttribute("subselect", "0");
						
					} catch(e) {
						//TODO handle the exception
					}
				}
				that.selectobjs={};
			}
			if (typeof(config["mainselect"])=="undefined" && box.childNodes[0].childNodes.length==0) {
					boxx.setAttribute("select", "true");
				}else{
					if (typeof(config["mainselect"])!="undefined") {
						boxx.setAttribute("select", "true");
					}
				}
			
			if (!(ttt in that.selectobjs)) {
				that.selectobjs[ttt]=boxx;
			};
			try {
				var bbb=fobj.boxx.getAttribute("subselect");
				var aaa=(typeof(bbb)=="string")?parseInt(bbb):0;
				fobj.boxx.setAttribute("subselects", aaa+1+"");
				fobj.boxx.setAttribute("subselect", "1");
			} catch(e) {
					//TODO handle the exception
			}
			
		});
		$$(box.o).addEvent("click", function() {
			if(typeof(that.selectFunc) == "function") {
				that.selectFunc(title,href,ttt);
			}
		});
		$$(box.o).addEvent("dblclick", function() {
			if(typeof(that.dblselectFunc) == "function") {
				that.dblselectFunc(title,href,ttt);
			}
		});
		$$(tit.tr[0].td[2]).mytype({
			"class": that.privateclass + "-text",
			"level": level
		});
		$$(box.o.tr[0].td[3]).mytype({
			"class": that.privateclass + "-jiantou",
			"level": level
		});
		box.sub = $$(box).addEle("div", 0, {
			"class": that.privateclass+ "-subdiv"
		});
		
		
		(function(box, fobj, ffobj) {
			
			var h = 0;
			if(f < 2000) {
				var clickc = function() {
					var dsss = box.sub.style.display;
					box.sub.style.display = "";
					h = box.sub.offsetHeight;
					box.sub.style.display = dsss;
					if(box.sub.childNodes.length > 0) {
						if(box.sub.style.display == "none") {
							box.sub.style.display = "";
							box.sub.style.height="1px";
							box.sub.style.display="block";
							try {
								tit.tr[0].td[1].setAttribute("openselect", "1");
								
							} catch(e) {
								//TODO handle the exception
							}
							box.sub.style.height = "1px";
							$$(box.sub).animate({
								"height": {
									"start": 0,
									"end": h + "px",
									"time": 500,
									"speed": 10,
									"func": function() {
										box.sub.style.height = ""
									}
								},
							})
							box.o.tr[0].td[3].innerHTML = "<";
						} else {
							box.o.tr[0].td[3].innerHTML = ">";
							try {
								tit.tr[0].td[1].setAttribute("openselect", "0")
							} catch(e) {
								//TODO handle the exception
							}
							box.style.overflow = "hidden";
							$$(box.sub).animate({
								"height": {
									"start": true,
									"end": "1px",
									"time": 500,
									"speed": 10,
									"func": function() {
										box.sub.style.height = "";
										box.sub.style.display = "none";
										
									}
								},
							})
						}
						box.sub.style.display = "";
					}
				}
				$$(tit.tr[0].td[1]).addEvent("mousedown", function() {
					clickc()
				})
				$$(box.o.tr[0].td[3]).addEvent("mousedown", function() {
					clickc()
				})
			}
		})(box, fobj, ffobj)
		fobj.func = 1;
		return box;
	}
	return this;
}
mdata.a.prototype.Theme = function(UIName) {
	this.uiframe;
	var that = this;
	document.body.style.margin = "0";
	document.body.style.padding = "0";
	document.body.style.overflow = 'hidden';
	document.body.style.width = window.innerWidth + "px";
	document.body.style.height = window.innerHeight + "px";
	$$().addEvent("resize", function() {
		document.body.style.width = window.innerWidth + "px";
		document.body.style.height = window.innerHeight + "px";
	});
	this.initUI = function() {
		that.uiframe = eval("$$()." + UIName + "();");
		that.uiframe.loadcss();
	};
	this.initUI();
	return this;
}
mdata.a.prototype.yanhua = function(obj) {
	this.privatec = "chunlian";
	if(typeof(obj) != "object") {
		obj = this.myobject;
	}
	this.center = 0;
	this.box = 0;
	var that = this;
	this.init = function() {
		var a = $$(obj).addEle("div", {
			"width": "100%",
			"height": "100%",
			"float": "left",
			"position": "absolute",
			"left": "0",
			"top": "0",
			"zIndex": "9999"
		}, {
			"class": that.privatec
		});
		that.box = a;
		var b = $$(a).addEle("div", 0, {
			"class": that.privatec + "-hengfu"
		});
		$$(b).addEle("div", 0, {
			"class": that.privatec + "-juanzhou-left"
		});
		$$(b).addEle("div", 0, {
			"class": that.privatec + "-juanzhou-right"
		});
		var c = $$(a).addEle("div", 0, {
			"class": that.privatec + "-left"
		});
		$$(c).addEle("div", 0, {
			"class": that.privatec + "-juanzhou-top"
		});
		$$(c).addEle("div", 0, {
			"class": that.privatec + "-juanzhou-bottom"
		});
		var d = $$(a).addEle("div", 0, {
			"class": that.privatec + "-right"
		});
		$$(d).addEle("div", 0, {
			"class": that.privatec + "-juanzhou-top"
		});
		$$(d).addEle("div", 0, {
			"class": that.privatec + "-juanzhou-bottom"
		});
		that.center = $$(a).addEle("div", 0, {
			"class": that.privatec + "-center"
		});
		that.baozhuobj = $$(that.center).addEle("canvas", 0, {
			"class": that.privatec + "-yanhua"

		});
		that.baozhuobj.id = that.privatec + "-baozhu"

	}
	this.yanhuaf = function() {
		var Fire = function(r, color) {
			this.radius = r || 12;
			this.color = color;
			this.xpos = 0;
			this.ypos = 0;
			this.zpos = 0;
			this.vx = 0;
			this.vy = 0;
			this.vz = 0;
			this.mass = 1;
			this.x = 0;
			this.y = 0;
			this.p = document.createElement("span");
			this.p.className = "fire";
			this.p.innerHTML = "*";
			this.p.style.fontSize = this.radius + "px";
			this.p.style.color = "#" + this.color;
		}
		Fire.prototype = {

			append: function(parent) {

				parent.appendChild(this.p);

			},

			setSize: function(scale) {

				this.p.style.fontSize = this.radius * scale + "px";

			},

			setPosition: function(x, y) {

				this.p.style.left = x + "px";

				this.p.style.top =  y + "px";

			},

			setVisible: function(b) {

				this.p.style.display = b ? "block" : "none";

			}

		}
		var fireworks = function(obj) {

			var fires = new Array();

			var count = 150;

			var fl = 250;

			var vpx = 500;

			var vpy = 300;

			var gravity = .5;

			var floor = 200;

			var bounce = -.8;

			var timer;

			var wind = ((Math.floor(Math.random() * 3) + 3) / 10) * (Math.random() * 2 - 1 > 0 ? 1 : -1) * .25;

			var wpos = 0;

			var wcount;

			return {

				init: function() {

					wcount = 100 + Math.floor(Math.random() * 100);

					for(var i = 0; i < count; i++) {

						var color = 0xFF0000;

						color = (Math.random() * 0xFFFFFF).toString(16).toString().split(".")[0];

						while(color.length < 6) {

							color = "0" + color;

						}

						var fire = new Fire(12, color);

						fires.push(fire);

						fire.ypos = -100;

						fire.vz = Math.random() * 6 - 3;

						fire.vx = (Math.random() * 2 - 1) * 2;

						fire.vy = Math.random() * -15 - 15;

						fire.x = 500

						fire.y = 600;

						fire.append(obj);

					}

					var that = this;

					timer = setInterval(function() {

						wpos++;

						if(wpos >= wcount) {

							wpos = 0;

							wcount = 50 + Math.floor(Math.random() * 100);

							wind = ((Math.floor(Math.random() * 3) + 3) / 10) * (Math.random() * 2 - 1 > 0 ? 1 : -1) * .25;

						}

						for(var i = 0; i < count; i++) {

							that.move(fires[i]);

						}

					}, 30);

				},

				move: function(fire) {

					fire.vy += gravity;

					fire.x += fire.vx;

					fire.y += fire.vy;

					fire.vx += wind;

					fire.setPosition(fire.x, fire.y);

					if(fire.x < 0 || fire.x > 1000 || fire.y  < 0 || fire.y  > 600) {

						fire.vx = (Math.random() * 2 - 1) * 2;

						fire.vy = Math.random() * -15 - 15;

						fire.x = 500;

						fire.y = 600;

						fire.setPosition(fire.x, fire.y);

					}

				}

			}

		}
		fireworks(that.center).init();
	}
// 	this.baozhu = function() {
// 		var ctx = document.querySelector("#" + that.privatec + "-baozhu").getContext('2d')
// 		ctx.canvas.width = window.innerWidth
// 		ctx.canvas.height = window.innerHeight
// 
// 		var sparks = []
// 		var fireworks = []
// 		var i = 20;
// 		while(i--) {
// 			fireworks.push(
// 				new Firework(Math.random() * window.innerWidth, window.innerHeight * Math.random())
// 			)
// 		}
// 
// 		render();
// 
// 		function render() {
// 			setTimeout(render, 1000 / 60);
// 			ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
// 			ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
// 			for(var firework of fireworks) {
// 				if(firework.dead){
// 					continue;
// 				};
// 				firework.move();
// 				firework.draw();
// 			};
// 			for(var spark of sparks) {
// 				if(spark.dead){
// 					continue;
// 				}
// 				spark.move();
// 				spark.draw();
// 			};
// 
// 			if(Math.random() < 0.05) {
// 				fireworks.push(new Firework());
// 			}
// 		}
// 
// 		function Spark(x, y, color) {
// 			this.x = x;
// 			this.y = y;
// 			this.dir = Math.random() * (Math.PI * 2);
// 			this.dead = false;
// 			this.color = color;
// 			this.speed = Math.random() * 3 + 3;
// 			this.walker = new Walker({
// 				radius: 20,
// 				speed: 0.25
// 			})
// 			this.gravity = 0.25
// 			this.dur = this.speed / 0.1;
// 			this.move = function() {
// 				this.dur--
// 					if(this.dur < 0) this.dead = true;
// 
// 				if(this.speed < 0) return;
// 				if(this.speed > 0) this.speed -= 0.1;
// 				var walk = this.walker.step();
// 				this.x += Math.cos(this.dir + walk) * this.speed;
// 				this.y += Math.sin(this.dir + walk) * this.speed;
// 				this.y += this.gravity;
// 				this.gravity += 0.05;
// 
// 			}
// 			this.draw = function() {
// 				drawCircle(this.x, this.y, 3, this.color);
// 			}
// 		}
// 
// 		function Firework(x, y) {
// 			this.xmove = new Walker({
// 				radius: 10,
// 				speed: 0.5
// 			});
// 			this.x = x || Math.random() * ctx.canvas.width;
// 			this.y = y || ctx.canvas.height;
// 			this.height = Math.random() * ctx.canvas.height / 2;
// 			this.dead = false;
// 			this.color = randomColor();
// 
// 			this.move = function() {
// 				this.x += this.xmove.step();
// 				if(this.y > this.height) this.y -= 1;
// 				else this.burst();
// 
// 			};
// 			this.draw = function() {
// 				drawCircle(this.x, this.y, 1, this.color);
// 			};
// 			this.burst = function() {
// 				this.dead = true;
// 				var i = 100;
// 				while(i--) sparks.push(new Spark(this.x, this.y, this.color));
// 			};
// 		}
// 
// 		function drawCircle(x, y, radius, color) {
// 			color = color || '#FFF';
// 			ctx.fillStyle = color;
// 			ctx.fillRect(x - radius / 2, y - radius / 2, radius, radius);
// 		}
// 
// 		function randomColor() {
// 			return ['#6ae5ab', '#88e3b2', '#36b89b', '#7bd7ec', '#66cbe1'][Math.floor(Math.random() * 5)];
// 		}
// 
// 		function Walker(options) {
// 			this.step = function() {
// 				this.direction = Math.sign(this.target) * this.speed;
// 				this.value += this.direction;
// 				this.target ?
// 					this.target -= this.direction :
// 					(this.value) ?
// 					(this.wander) ?
// 					this.target = this.newTarget() :
// 					this.target = -this.value :
// 					this.target = this.newTarget()
// 				return this.direction
// 			}
// 
// 			this.newTarget = function() {
// 				return Math.round(Math.random() * (this.radius * 2) - this.radius)
// 			}
// 
// 			this.start = 0
// 			this.value = 0
// 			this.radius = options.radius
// 			this.target = this.newTarget()
// 			this.direction = Math.sign(this.target)
// 			this.wander = options.wander
// 			this.speed = options.speed || 1
// 		}
// 	}
// 	
	this.baozhu=function(){}
	return this;
}



mdata.a.prototype.sys_preview = function(classname, obj, mycss, mytype, title, imgvar, type, enableMask) {
	/*简介图片*/
	this.that = $$(obj); //mdata实例
	obj = this.that.selectionobj(); //选择器选择的元素
	var span = ";";
	if(typeof(obj) != "object") {
		obj = this.myobject;
	};
	if(typeof(classname) != "string") {
		classname = "sys_preview"
	};
	this.editenable = 0;
	this.classname = classname;
	var that = this;
	this.color1 = "#f5f5f5"; //横条颜色
	this.border1 = "#ddd solid 1px"; //横条边框
	this.div = 0;
	this.table;
	this.imgObj = 0;
	this.closeFunc=0;
	this.mask; //获取遮罩div
	this.maskBackground = "rgba(0,0,0,0.2)"; //遮罩区域颜色以及透明度，0-1,0完全透明，1完全不透明
	this.titleObj = 0;
	this.editZoneObj;
	this.submitObj;
	this.closeObj;
	this.submitResultObj;
	this.cancleObj;
	this.submitResultImgObj;
	this.content;
	this.submitfunc;
	this.tijiaoenable=true;
	this.loadcss = function(CSSPath) {
		var lin = document.createElement("link");
		lin.setAttribute("class", "mdata-controls");
		lin.setAttribute("rel", "stylesheet");
		lin.setAttribute("href", "http://" + window.location.host +CSSPath+that.classname+'.css?v=' + Math.random())
		document.body.appendChild(lin);
	}
	var addImage = function(obj, src, height, imgsize, x, y) {
		var b = $$(obj).create_Svg(0, 0, imgsize, height);
		b.setAttribute("x", "0px");
		b.setAttribute("y", "0px");
		b.style.position = "";
		b.setAttribute("viewBox", "0 0 " + imgsize + " " + height);
		b.innerHTML = '<image id="image0" width="' + imgsize + '" height="' + imgsize + '" x="' + x + '" y="' + y +
			'" href="' + src + '" />';
		return b;
	}
	//遮罩区域
	function initMask() {
		that.mask = $$(obj).addEle("div", {
			"cursor": "default",
			"width": "100%",
			"height": "100%",
			"zIndex": "9100",
			"position": "absolute",
			"float": "left",
			"top": "0",
			"left": "0",
			"background": that.maskBackground
		});
		$$().unSelect(that.mask);
		//弹窗情况下，屏蔽页面其他操作
		$$(that.mask).addEvent("mousedown", function() {}, true);
	};
	this.addSubmitFunc = function(func) {
		$$(that.submitObj).addEvent("click", function() {
			that.submitResultImgObj.style.opacity = "1";
			that.submitResultImgObj.setAttribute("submitimg", "0");
			if(typeof(func) == "function") {
				var fff = function(a) {
					if(typeof(a) == "number") {
						if(a == 1) {
							that.submitResultImgObj.setAttribute("submitimg", "1");
						} else {
							that.submitResultImgObj.setAttribute("submitimg", "2");
						}
					} else {
						that.submitResultImgObj.setAttribute("submitimg", "2");
					}
				}
				func(fff);
			}
		});
	}
	this.init = function() {
		$$(that.mask).addEvent("dblclick", function() {
			if(that.closeFunc==0){
				//console.log("delete dept select");
        
				if(typeof(that.div) == "object") {
					$$().removeElem(that.div)
				};
				if(typeof(that.mask) == "object") {
					$$(that.mask).removeElem()
				
				};
				
			}else{
				that.closeFunc(that);
			}

		}, true);
		that.div = $$(obj).addEle("div", {
			"border": that.border1
		}, {
			"class": that.classname + "-div"
		});
		$$(that.div).mytype("type","1");
		$$(that.div).addEvent("dblclick", function() {
		}, true);

		that.table = $$(that.div).create_table(0, [""], {
			"tr0": ["20px", "", "0px", "", "20px", "20px", "20px"]
		});

		that.table.setAttribute("class", that.classname + "-table");
		$$(that.div).drag(that.table);
		$$(that.div).dragResize();
		initMask();
		that.div.style.float="left";
		that.div.style.zIndex = "9999";
		that.div.style.backgroundColor = "white";
		//that.table.style.backgroundColor=that.color1;
		that.table.tds[1].style.textAlign = "left"
		that.table.style.height = "";
		that.titleObj = $$(that.table.tds[1]).addEle("span", {
			"textAlign": "left",
			"fontWeight": "normal",
			"display": "inline-block"
		}, 0, title); //标题
		that.table.tds[4].innerHTML = "-";
		that.table.tds[5].innerHTML = "□";
		that.table.tds[6].innerHTML = "×";
		that.closeObj=that.table.tds[6];
		var ah = that.div.offsetHeight;
		var aw = that.div.offsetWidth;
		var jk = $$().getEleToBodyPosition(that.div);
		var al = jk["left"];
		var at = jk["top"];
		var aa = 0;
		var fullscreen = function() {
			if(that.div.offsetWidth == document.body.scrollWidth && that.div.offsetHeight == document.documentElement.clientHeight) {
				that.div.style.width = aw - parseInt(that.div.style.borderLeftWidth) - parseInt(that.div.style.borderRightWidth) +
					"px";
				that.div.style.height = ah - parseInt(that.div.style.borderBottomWidth) - parseInt(that.div.style.borderTopWidth) +
					"px";
				that.div.style.left = al + "px";
				that.div.style.top = at + "px";
				if(aa == 0) {
					//var h = that.div.offsetHeight - parseInt(that.div.style.borderBottomWidth) - parseInt(that.div.style.borderTopWidth)
					//that.content.style.height = h - that.table.offsetHeight + "px";
				}

			} else {
				ah = that.div.offsetHeight;
				aw = that.div.offsetWidth;
				al = that.div.offsetLeft;
				at = that.div.offsetTop;
				that.div.style.left = "0px";
				that.div.style.top = "0px";
				that.div.style.height = document.documentElement.clientHeight - parseInt(that.div.style.borderBottomWidth) -
					parseInt(that.div.style.borderTopWidth) + "px";
				if(aa == 0) {
					//var h = that.div.offsetHeight - parseInt(that.div.style.borderBottomWidth) - parseInt(that.div.style.borderTopWidth)
					//that.content.style.height = h - that.table.offsetHeight + "px";
				}
				that.div.style.width = document.body.scrollWidth - parseInt(that.div.style.borderLeftWidth) - parseInt(that.div.style
					.borderRightWidth) + "px";

			}
		}
		$$(that.table.tds[5]).addEvent("click", function() {
			fullscreen();
		})
		$$(that.table.tds[6]).addEvent("click", function() {
			if(that.closeFunc==0){
				console.log("delete dept select");
				if(typeof(that.div) == "object") {
					$$().removeElem(that.div)
				};
				if(typeof(that.mask) == "object") {
					$$().removeElem(that.mask)
				
				};
				
			}else{
				that.closeFunc(that);
			}
			
			
		})
		$$(that.table.tds[4]).addEvent("click", function() {
			//console.log("delete dept select");
			if(that.closeFunc==0){
				
				if(typeof(that.div) == "object") {
					$$().removeElem(that.div)
				};
				if(typeof(that.mask) == "object") {
					$$().removeElem(that.mask)
				
				};
				
			}else{
				that.closeFunc(that);
			}
		})
		$$(that.table.tr[0]).addEvent("dblclick", function() {
			fullscreen();
		}, true)
		var bt = $$(that.table.tds[3]).create_table(0, [""], ["", "", "", ""]);
		bt.tds[1].style.display = "none";
		bt.tds[2].style.display = "none";
		bt.tds[3].style.display = "none";
		that.editZoneObj = $$(bt.tds[0]).addEle("button", {
			"float": "right",
			"border": "0"
		}, 0, "编辑"); //标题
		if(that.editenable == 0) {
			that.editZoneObj.style.display = "none";
		}
		$$(that.editZoneObj).addEvent("click", function() {
			that.submitObj.style.display = "";
			that.cancleObj.style.display = "";
			that.editZoneObj.style.display = "none";
			bt.tds[0].style.display = "none";
			bt.tds[1].style.display = "";
			bt.tds[2].style.display = "";
			bt.tds[3].style.display = "";

		});
		
		that.submitObj = $$(bt.tds[1]).addEle("button", 0, 0, "提交"); //标题
		if (that.tijiaoenable==false) {
			that.submitObj.style.display="none";
		} else{
			
		}
		bt.tds[2].style.textAlign = "center";
		bt.tds[2].setAttribute("class", that.classname+"-submitresult-td");
		that.submitResultImgObj = $$(bt.tds[2]).addEle("div", {
			"opacity": "0"
		}, {
			"class": that.classname+"-submitresult-img"
		});
		that.submitResultImgObj.setAttribute("submitimg", "-1");
		that.cancleObj = $$(bt.tds[3]).addEle("button", 0, 0, "取消"); //标题
		var errorobj = 0;
		$$(that.submitObj).addEvent("click", function() {
			that.submitResultImgObj.style.opacity = "1";
			that.submitResultImgObj.setAttribute("submitimg", "0");
			if(typeof(that.submitfunc) == "function") {
				var fff = function(a) {
					if(typeof(a) == "number") {
						if(a == 1) {
							that.submitResultImgObj.setAttribute("submitimg", "1");
						} else {
							that.submitResultImgObj.setAttribute("submitimg", "2");
						}
					} else {
						that.submitResultImgObj.setAttribute("submitimg", "2");
					}
				}
				that.submitfunc(fff);
			}
		});

		$$(that.cancleObj).addEvent("click", function() {
			that.submitResultImgObj.style.opacity = "0";
			that.submitResultImgObj.setAttribute("submitimg", "-1");
			that.submitObj.style.display = "none";
			that.cancleObj.style.display = "none";
			bt.tds[1].style.display = "none";
			bt.tds[2].style.display = "none";
			bt.tds[3].style.display = "none";
			bt.tds[0].style.display = "";
			that.editZoneObj.style.display = "";
		});
		$$(that.div).mycss(mycss);
		$$(that.div).mytype(mytype);
		that.submitObj.style.display = "none";
		that.cancleObj.style.display = "none";
		//that.editZoneObj.style.display = "none";
		var h = that.div.offsetHeight - parseInt(that.div.style.borderBottomWidth) - parseInt(that.div.style.borderTopWidth)
		that.content = $$(that.div).addEle("div", {
			"border": that.border1,
			"borderTop": "0px solid black",
			"overflowY": "auto"
		});
		that.content.setAttribute("class", that.classname + "-content")
	}
	this.hideAll=function(){
		if(typeof(that.div) == "object") {
			that.div.style.display="none";
		};
		if(typeof(that.mask) == "object") {
			that.mask.style.display="none";
		
		};
	}
	this.showAll=function(){
		console.log("111")
		that.div.style.display="";
		that.mask.style.display="";
		console.log(that.div)
	}
	return this;
}

/**
 * word样式的控件
 * @param {Object} config   [json格式的配置项]
                           privateclass   
                           func
                           jsondata
                           hidefields
 */

mdata.a.prototype.sys_ViewWordPage =function(config) {
	this.mask;
	this.div;
	this.head;
	this.table;
	this.headtable;
	this.config=config;
	this.spans={};
	this.titleobjs={}
	this.content={}
	this.trobjs={}
	this.submitBtn=0;
	this.closeObj;
	this.bigObj;
	this.loadingFrame;
	this.boxdiv;
	this.privateclass=this.defaults(config["privateclass"],"sys_ViewWordPage");
	var that=this;
	
	if ("openpage" in config) {
		
	}else{
		config["openpage"]=0;
	}
	if ("detailContentFree" in config) {
		
	}else{
		config["detailContentFree"]=false;
	}
	this.loadcss = function() {
		try{
			if (that.privateclass=="sys_ViewWordPage") {
				if (document.body.getElementsByClassName("sys_ViewWordPage-CSS").length==0) {
					var lin = document.createElement("link");
					lin.setAttribute("class", "sys_ViewWordPage-CSS");
					lin.setAttribute("rel", "stylesheet");
					lin.setAttribute("href", "http://" + window.location.host + config["curCSSPath"] + 'sys_ViewWordPage.css?v=' + Math.random())
					document.body.appendChild(lin);
				}
			}
		}catch(e){
			//TODO handle the exception
		}
	}	
	this.init=function(){
		that.mask=$$(that.myobject).addEle("div",0,{"class":that.privateclass+"-mask"});
		$$(that.mask).addEvent("dblclick",function(){
			that.closeObj.click();
		},true)
		that.div=$$(that.myobject).addEle("div",0,{"class":that.privateclass+"-div"});
		$$(that.div).addEvent("dblclick",function(){},true)
		that.loadingFrame=$$(that.div).addEle("iframe",{"display":"none"},{"class":that.privateclass+"-loading","src":config["ajaxloading"]});
		that.head=$$(that.div).addEle("div",0,{"class":that.privateclass+"-head"});
		that.createFunc();
		$$(that.div).drag(that.head)
		$$(that.div).dragResize(that.div);
		that.boxdiv=$$(that.div).addEle("div",0,{"class":that.privateclass+"-boxdiv"});
		try{
			if ("openpage" in config) {
				
			}else{
				config["openpage"]=0;
			}
		}catch(e){
			//TODO handle the exception
		}
		try{
			if (config["detailContentFree"]==false && config["detailAjax"]["enable"]==false && config["openpage"]!=1) {
				that.loadingFrame.style.display="none";
				
				that.createContentTable();
			}
		}catch(e){
			//TODO handle the exception
		}
		try{
			if (config["detailContentFree"]==false && config["openpage"]==1) {
				$$(that.div).addEle("iframe",0,{"sandbox":"allow-forms allow-scripts","class":"openpage","src":config["pageurl"]})
			}
		}catch(e){
			//TODO handle the exception
		}
		
		that.refreshData();
	}
	this.createContentTable=function(){
		that.table=$$(that.boxdiv).create_table(0,$$().getJSONlength(config["jsondata"])*2,[""],0,0,0);
		that.table.style.overflow="";
		that.table.style.width="";
		that.table.style.height="";
		that.table.style.margin="";
		that.table.style.padding="";
		that.table.style.overflow="";
		that.table.style.textAlign="";
		$$(that.table).mytype({"class":that.privateclass+"-table2"});
		for (var i=0;i<that.table.tr.length;i++) {		
			if (i%2==0) {
				$$(that.table.tr[i].td[0]).mytype({"class":that.privateclass+"-table-title-td"});
				$$(that.table.tr[i].td[0]).addEle(that.defaults(config["tagname"],"span"),0,{"class":that.privateclass+"-table-title"});
				$$(that.table.tr[i].td[0]).addEle(that.defaults(config["tagname"],"span"),0,{"class":that.privateclass+"-table-title-span"});
			}else{
				$$(that.table.tr[i].td[0]).mytype({"class":that.privateclass+"-table-content"});
				if (config["enableedit"]=="1") {
					$$(that.table.tr[i].td[0]).mytype({"contenteditable":"plaintext-only"});
				}
			}
		}
	}
	this.createFunc=function(){
		var tables=$$(that.head).create_table(0,[""],["","","","","","","",""]);
		$$(tables).mytype({"class":that.privateclass+"-head-table"});
		
		tables.tr[0].td[1].innerHTML=(typeof(config["title"])=="string")?config["title"]:"数据详情";
		tables.tr[0].td[2].innerHTML="";
		tables.tr[0].td[0].setAttribute("class",that.privateclass+"-head-table-title-img");
		tables.tr[0].td[1].setAttribute("class",that.privateclass+"-head-table-title");
		tables.tr[0].td[2].setAttribute("class",that.privateclass+"-head-table-title-span");
		tables.tr[0].td[3].setAttribute("class",that.privateclass+"-head-table-title-submit");
		tables.tr[0].td[4].setAttribute("class",that.privateclass+"-head-table-title-small");
		tables.tr[0].td[5].setAttribute("class",that.privateclass+"-head-table-title-big");
		tables.tr[0].td[6].setAttribute("class",that.privateclass+"-head-table-title-close");
		tables.tr[0].td[7].setAttribute("class",that.privateclass+"-head-table-title-last");
		that.headtable=tables;
		var submit=$$(tables.tr[0].td[3]).addEle("button",0,0,"提交");
		
		try{
			if (config["submitDisplay"]==false) {
				submit.style.display="none";
			}
		}catch(e){
			//TODO handle the exception
		}
		$$(submit).addEvent("click", function() {
			if (config["submitEnable"]==false) {
				return;
			}
			var datas=config["jsondata"];
			try{
				if (config["detailContentFree"]==false) {
					var j=1;
					var k=-1;
					for (var ik in config["jsondata"]) {
						try{
							if(that.table.tr[j+1].td[0].getAttribute("dataid").length>0){
								datas[that.table.tr[j+1].td[0].getAttribute("dataid")]=that.table.tr[j+1].td[0].innerHTML+"";
							}				
						}catch(e){
						}
						j+=2
					}
				}
			}catch(e){
				//TODO handle the exception
			}	
			tables.tr[0].td[4].style.opacity = "1";	
			config["submitFunc"](config["that"],datas,tables.tr[0].td[4],that)
		});
		tables.tr[0].td[6].innerHTML="x";
		tables.tr[0].td[7].innerHTML="_";
		tables.tr[0].td[7].style.color="rgba(0,0,0,0)"
		that.closeObj=tables.tr[0].td[6];
		$$(that.closeObj).addEvent("click",function(){
			$$(that.mask).removeElem();
			$$(that.head).removeElem();
			$$(that.div).removeElem();
		})
		
		tables.tr[0].td[5].innerHTML="□"
		that.bigObj=tables.tr[0].td[5];
		var left,top,width,height;
		var big=function(){
			if (that.div.style.width=="100%") {
				that.div.style.width=width+"px";
				that.div.style.height=height+"px";
				that.div.style.left=left+"px";
				that.div.style.top=top+"px";
			} else{
				left=that.div.offsetLeft;
				top=that.div.offsetTop;
				width=that.div.offsetWidth;
				height=that.div.offsetHeight;
				that.div.style.width="100%";
				that.div.style.height="100%";
				that.div.style.left="0";
				that.div.style.top="0";
			}
		}
		$$(tables.tr[0].td[2]).addEvent("dblclick",function(){
			big();
		})
		$$(that.bigObj).addEvent("click",function(){		
			big();
		})
	}
	this.refreshData=function(){
		try{
			if (config["detailAjax"]["enable"]==true) {
				that.loadingFrame.style.display="";
				$$().ajax_post({
					"url":config["detailAjax"]["url"],
					"str":config["detailAjax"]["formdata"],
					"response":undefined,
					"func":{
						"readystatechange":function(s) {
							var mt=config["detailAjax"]["func"](s);

							config["jsondata"]=mt;//JSON.parse(JSON.stringify(mt))

							that.loadingFrame.style.display="none";
							try{
								if (config["detailContentFree"]==false) {
									that.createContentTable();
									that.initData();
								}
							}catch(e){
								//TODO handle the exception
							}
							config["initFunc"](that);
						}
						
					},
					"zipEnable":config["zipenable"]
				})
				
			} else{
				that.loadingFrame.style.display="none";
				try{
					if (config["detailContentFree"]==false) {
						that.initData();
					}
				}catch(e){
					//TODO handle the exception
				}
				config["initFunc"](that);
			}
		}catch(e){
			//TODO handle the exception
			//that.loadingFrame.style.display="none";
			that.initData()
			config["initFunc"](that);
		}
	}
	this.initData=function(){
		try{
			var j=0;
			for (var i in config["jsondata"]) {
				try{
					var numstr=i+".";
					if(that.defaults(config["numenable"],-1)==-1){
						numstr="";
					}
					if(!(i in config["hidefields"])){
						that.table.tr[j].td[0].childNodes[0].innerHTML=config["chineseFields"][i];
						that.table.tr[j].td[0].setAttribute("data_field",i);
						that.table.tr[j].td[0].childNodes[0].setAttribute("data_field",i);
						that.table.tr[j].td[0].childNodes[1].setAttribute("data_field",i);
						if (typeof(config["jsondata"][i])!="undefined") {
							that.table.tr[j+1].td[0].innerHTML=config["jsondata"][i];
							
						}
						that.trobjs[i]=[that.table.tr[j],that.table.tr[j+1]]
						that.titleobjs[i]=that.table.tr[j].td[0].childNodes[0]
						that.spans[i]=that.table.tr[j].td[0].childNodes[1]
						that.content[i]=that.table.tr[j+1].td[0]
						$$(that.table.tr[j+1].td[0]).mytype({"dataid":i});
						that.table.tr[j+1].td[0].setAttribute("class",that.table.tr[j+1].td[0].getAttribute("class")+" "+i);
						j+=2;
					}	
				}catch(e){
					//TODO handle the exception
					//console.log(e)
				}	
			}
		}catch(e){
			//TODO handle the exception
			//console.log(e)
		}
	}
	this.loadcss();
	this.init();
	return this;
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
mdata.a.prototype.deleteTable = function() {
	var obj =  this.myobject;
	this.keyobjs={};
	this.SpanWidth = 10; //级别缩进
	this.leftWidth=10;
	this.div = 0; //外壳div
	this.table;//头部div
	this.privateclass="sys_deletetable";
	this.curCSSPath="";
	this.tableobj;
	this.contentdiv;//内容div
	this.footdiv;//最下面的页脚div
	this.strarr;
	this.numbeforestr;
	this.content={};
	this.fields=0
	this.numafterstr;
	this.titlejson={};
	this.valuelength=0;
	this.config;
	this.values={};
	this.valuevalue={}
	this.emptyValue={};
	var that=this;
	/**
	 * 初始化
	 * colnum  number，列数
	 */
	this.init=function(config){	
		try{
			if (config["displaynumber"]!=false) {
				config["displaynumber"]=true;
			}
		}catch(e){
			//TODO handle the exception
			config["displaynumber"]=true;
		}
		try{
			if (typeof(config["displayType"])=="number") {
				config["displayType"]=1;
			}
		}catch(e){
			//TODO handle the exception
			config["displayType"]=1;
		}
		try{
			if (typeof(config["colsNum"])=="number") {
				config["colsNum"]=4;
			}
		}catch(e){
			//TODO handle the exception
			config["colsNum"]=4;
		}
		try{
			if (config["displayHead"]!=false) {
				config["displayHead"]=true;
			}
		}catch(e){
			//TODO handle the exception
			config["displayHead"]=true;
		}
		try{
			if (config["displaydelete"]!=false) {
				config["displaydelete"]=true;
			}
		}catch(e){
			//TODO handle the exception
			config["displaydelete"]=true;
		}
		try{
			if (typeof(config["numbeforestr"])!="string") {
				config["numbeforestr"]="";
			}
		}catch(e){
			//TODO handle the exception
			config["numbeforestr"]="";
		}
		try{
			if (typeof(config["numafterstr"])!="string") {
				config["numafterstr"]="";
			}
		}catch(e){
			//TODO handle the exception
			config["numafterstr"]="";
		}
		that.config=config;
		that.tableobj=$$(obj).table(0,{"class":that.privateclass+""});

		try{
			$$(that.tableobj.table).mycss(config["mycss"]);
		}catch(e){
			//TODO handle the exception
		}
		try{
			$$(that.tableobj.table).mytype(config["mytype"]);
		}catch(e){
			//TODO handle the exception
		}
		that.table=that.tableobj.table;
		that.valuelength=$$().getJSONlength(config.titlejson);
		that.numbeforestr=config.numbeforestr;
		that.numafterstr=config.numafterstr;
		that.titlejson=config.titlejson;
		var kongValue={};
		try{
			for (var i in config.initvalue[0]) {
				kongValue[i]= ''
			}
		}catch(e){
			//TODO handle the exception
		};
		
		var tr0=that.tableobj.addTr();
		try{
			if (config["titleTrNum"]>1) {
				for (var i=1;i<config["titleTrNum"];i++) {
					var tr=that.tableobj.addTr();
					try{
						config["titleInitFunc"](tr,that.tableobj);
					}catch(e){
						//TODO handle the exception
					}
				}
			}
		}catch(e){
			//TODO handle the exception
		}
		if (config["displayHead"]==true) {
			if (that.config["displaynumber"]==true) {
				that.tableobj.addTd(tr0,0,{"class":that.privateclass+"-left"},"序号");
			}
			for (var i in config.titlejson) {
				try{
					that.tableobj.addTd(tr0,0,{"class":that.privateclass+"-title-"+i},config.titlejson[i]);
					that.emptyValue[i]="";
				}catch(e){
					//TODO handle the exception
				}
			}
			if (that.config["displaydelete"]==true) {
				var m=that.tableobj.addTd(tr0,0,{"class":that.privateclass+"-add"});
				var j=$$(m).addEle("div");		
				$$(j).addEvent("click",function(){
					that.add(config.objfunc,that.emptyValue);
				});
			}
		}
		try{
			if ("initvalue" in config) {
				for (var i in config.initvalue) {
					that.add(config.objfunc,config.initvalue[i])
				}
			}else{
				that.add(config.objfunc,that.emptyValue);
			}
			
		}catch(e){
			//TODO handle the exception
			//console.log(e)
			
		}
		try{
			that.loadcss();
		}catch(e){
			//TODO handle the exception
		}
	}
	this.loadcss=function(){
		try{
			if (document.getElementsByClassName(that.privateclass+'-CSS').length==0) {
				var lin = document.createElement("link");
				lin.setAttribute("class", that.privateclass+"-CSS");
				lin.setAttribute("rel", "stylesheet");
				lin.setAttribute("href", "http://" + window.location.host + that.config["CSSPath"]+that.privateclass +'.css?v=' + Math.random());
				document.body.appendChild(lin);
			}
		}catch(e){
			//TODO handle the exception
			//console.log(e)
		}
	}
	
	var useChart=function(str){
		str=str.replace(/\s*/,"");
		return str
	}
	this.add=function(objfunc,jsonvalue){
		var k=that.tableobj.addTr();
		var len=that.table.rows.length-1;
		that.values[that.table.rows.length-1]={};
		var myvalue=that.values[that.table.rows.length-1];
		if (that.config["displaynumber"]==true) {
			var mobj=that.tableobj.addTd(k,0,{"class":that.privateclass+"-left"},"");
			if (typeof(that.numbeforestr)=="string") {
				var s=that.numbeforestr;
				if (typeof(that.numafterstr)=="string") {
					var xm=that.table.rows.length-1;
					s=s+xm+that.numafterstr;
				}
			};
			if (typeof(s)=="string") {
				mobj.innerHTML=s;
			}
		}
		for (var key in that.titlejson) {
			
			var td=that.tableobj.addTd(k,0,{"contenteditable":"plaintext-only","data_field":key,"class":that.privateclass+"-desc-"+key},(typeof(jsonvalue[key])=="undefined")?"":jsonvalue[key]);
			try{
				td.subobj=that.config["init"][key](td);
			}catch(e){
				//TODO handle the exception
			}
			(function(td){
				td.addEventListener("paste", function(e) {	
					// var att=td.getAttribute("contenteditable")
					// var textstr = e.clipboardData.getData("text/plain");
					// var v=$$().addEle("input",0,0,textstr);
					// textstr=$$(v).HTML();
					// $$().removeElem(v);
					// document.execCommand("insertText", false, textstr);	
					// td.setAttribute("contenteditable", "false");
					// setTimeout(function(){
					// 	td.setAttribute("contenteditable", "true");
					// },5)
				})
			})(td)
			myvalue[key]=td;
		}
		if (that.config["displaydelete"]==true) {
			var m=that.tableobj.addTd(k,0,{"class":that.privateclass+"-delete"});
			$$(m).addEle("div");
			$$(m).addEvent("click",function(){
				$$(that.table).removeElem(k);
				try{
					delete that.values[len];
				}catch(e){
					//TODO handle the exception
				}
				try{
					objfunc(k,"remove");
				}catch(e){
					//TODO handle the exception
				}
			})
		}
		if (typeof(objfunc)=="function") {
			objfunc(k,"add");
		}
	}
	this.getValues=function(){
		try{
			that.valuevalue={}
			for (var i in that.values) {
				that.valuevalue[i]={}
				try{
					for (var key in that.values[i]) {
						try{
							if (typeof(that.config["submit"][key])=="function") {
								that.valuevalue[i][key]=that.config["submit"][key](that.values[i][key]);
							}else{
								that.valuevalue[i][key]=that.values[i][key].innerHTML;
							}
						}catch(e){
							
							//TODO handle the exception
							that.valuevalue[i][key]=that.values[i][key].innerHTML;
						}
					}
				}catch(e){
					//TODO handle the exception
				}
			}
		}catch(e){
			//TODO handle the exception
		}
		return that.valuevalue;
	}
	return this;
}


mdata.a.prototype.sys_cardSelect1=function(config){
	
	this.table=0;
	this.content=0;
	var csspath="";
	this.privateclass="sys_cardSelect1";
	var that=this;
	try{
		var obj=(typeof(config["obj"])=="object")?config["obj"]:this.myobject;
	}catch(e){
		var obj=this.myobject;
	}
	try{
		this.privateclass=(typeof(config["privateclass"])=="string")?config["privateclass"]:"sys_cardSelect1";
	}catch(e){
		
	}
	try{
		csspath=config["CSSPath"];
		csspath=csspath.replace(/\/$/,"");
		csspath=csspath+"/";
	}catch(e){
		this.privateclass="sys_cardSelect1";
	}
	this.init=function(){
		that.loadcss();
		that.table=$$(obj).create_table(0,["","",""],{"tr0":[" {'type':{'colspan':'3'}}"],"tr1":["","",""],"tr2":[" {'type':{'colspan':'3'}}"]});
		that.table.setAttribute("class",that.privateclass+"-table");
		that.table.tr[0].setAttribute("class",that.privateclass+"-head");
		that.table.tr[1].td[0].setAttribute("class",that.privateclass+"-leftImg");
		that.table.tr[1].td[1].setAttribute("class",that.privateclass+"-content")
		that.table.tr[1].td[2].setAttribute("class",that.privateclass+"-rightImg");
		that.table.tr[2].setAttribute("class",that.privateclass+"-foot");
		that.table.style.width="";
		that.table.style.height="";
		that.table.style.tableLayout="";
		try{
			that.refreshData();
		}catch(e){
			//TODO handle the exception
		}
	}
	this.refreshData=function(){
		try{
			if (config["initFunc"]=="function") {
				config["initFunc"](config,that);
				that.initData();
			}else{
				that.initData();
			}
		}catch(e){
			//TODO handle the exception
			that.initData()
		}
	}
	this.initData=function(){
		try{
			if(typeof(config["title"])=="string"){
				that.table.tr[0].td[0].innerHTML=config["title"];
			}
		}catch(e){
			//TODO handle the exception
		}
		try{
			if(typeof(config["title"])=="function"){
				config["title"](that.table.tr[0].td[0]);
			}
		}catch(e){
			//TODO handle the exception
		}
		try{
			if(typeof(config["leftImg"]["initFunc"])=="function"){
				config["leftImg"]["initFunc"](that.table.tr[1].td[0]);
			}
		}catch(e){
			//TODO handle the exception
		}
		try{
			if(typeof(config["leftImg"]["src"])=="string"){
				var img=$$(that.table.tr[1].td[0]).addEle("div",{"backgroundImage":config["leftImg"]["src"]})
				try{
					if(typeof(config["leftImg"]["hrefFunc"])=="function"){
						$$(img).addEvent("click",function(){
							config["leftImg"]["hrefFunc"](img);
						})
					}
				}catch(e){
					//TODO handle the exception
					//console.log(e)
				}
			}
		}catch(e){
			//TODO handle the exception
			//console.log(e)
		}
		try{
			if(typeof(config["leftImg"]["src"])=="function"){
				config["leftImg"]["src"](that.table.tr[1].td[0]);
			}
		}catch(e){
			//TODO handle the exception
		}
		try{
			if(typeof(config["rightImg"]["initFunc"])=="function"){
				config["rightImg"]["initFunc"](that.table.tr[1].td[2]);
			}
		}catch(e){
			//TODO handle the exception
		}
		try{
			if(typeof(config["rightImg"]["src"])=="string"){
				var img=$$(that.table.tr[1].td[2]).addEle("div",{"backgroundImage":config["rightImg"]["src"]})
				if(typeof(config["rightImg"]["hrefFunc"])=="function"){
					$$(img).addEvent("click",function(){
						config["rightImg"]["hrefFunc"](img);
					})
				}
			}
		}catch(e){
			//TODO handle the exception
		}
		try{
			if(typeof(config["rightImg"]["src"])=="function"){
				config["rightImg"]["src"](that.table.tr[1].td[2]);
			}
		}catch(e){
			//TODO handle the exception
		}
		
		try{
			if(typeof(config["foot"])=="function"){
				config["foot"](that.table.tr[2].td[0]);
			}
		}catch(e){
			//TODO handle the exception
		}
		that.initContent();
	}
	
	this.initContent=function(){
		var trnum=1;
		
		var contnum=1;
		var contarray=[""];
		
		try{
			if (typeof(config["content"][1])=="object") {
				contnum=config["content"][1].length;
				contarray=[];
				for (var i=0;i<contnum;i++) {
					contarray.push("")
				}
			}
		}catch(e){
			//TODO handle the exception
		}
		var cont=[" {'type':{'colspan':'"+contnum+"'}}"];
		var trarray={"tr0":cont,"tr1":contarray,"tr2":cont,"tr3":cont};
		try{
			if (typeof(config["content"])=="object") {
				trnum=config["content"].length;
				trarray={"tr0":cont,"tr1":contarray};
				contarray=[];
				try{
					for (var i=2;i<trnum;i++) {
						trarray["tr"+i]=cont
					}
				}catch(e){
					//TODO handle the exception
				}
				for (var i in config["content"]) {
					contarray.push("");
				}
			}
		}catch(e){
			//TODO handle the exception
		}
		that.content=$$(that.table.tr[1].td[1]).create_table(0,contarray,trarray)
		that.content.setAttribute("class",that.privateclass+"-contenttable");
		that.content.style.width="";
		that.content.style.height="";
		that.content.style.textAlign="";
		that.content.style.tableLayout="";
		try{
			
			for (var i in config["content"]) {
				try{
					if (i!=1) {
						try{
							if (typeof(config["content"][i])=="string") {
								that.content.tr[i].td[0].innerHTML=config["content"][i]
							}
						}catch(e){
							//TODO handle the exception
						}
						try{
							if (typeof(config["content"][i])=="function") {
								config["content"][i](that.content.tr[i].td[0])
							}
						}catch(e){
							//TODO handle the exception
						}
					}
				}catch(e){
					//TODO handle the exception
				}
				try{
					if (i==1) {
						try{
							if (typeof(config["content"][1])=="object") {
								for (var j in config["content"][1]) {
									try{
										if(typeof(config["content"][1][j])=="string"){}
										that.content.tr[1].td[j].innerHTML=config["content"][1][j];
									}catch(e){
										//TODO handle the exception
									}
									try{
										if(typeof(config["content"][1][j])=="function"){}
										config["content"][1][j](that.content.tr[1].td[j].innerHTML);
									}catch(e){
										//TODO handle the exception
									}
								}
								
							}
						}catch(e){
							//TODO handle the exception
						}
						try{
							if (typeof(config["content"][1])=="string") {
								that.content.tr[1].td[0].innerHTML=config["content"][1];
								
							}
						}catch(e){
							//TODO handle the exception
						}
					}
				}catch(e){
					//TODO handle the exception
				}
			}
			
			
		}catch(e){
			//TODO handle the exception
		}
	}
	this.loadcss=function(){
		try{
			if (document.getElementsByClassName('sys_cardSelect1-CSS').length==0) {
				var lin = document.createElement("link");
				lin.setAttribute("class", "sys_cardSelect1-CSS");
				lin.setAttribute("rel", "stylesheet");
				lin.setAttribute("href", "http://" + window.location.host + csspath+that.privateclass +'.css?v=' + Math.random());
				document.body.appendChild(lin);
			}
		}catch(e){
			//TODO handle the exception
		}
	}
	
	
	return this;
}
mdata.a.prototype.sys_cardSelect2=function(config){
	

	this.content=0;
	this.div;
	this.head=0;
	this.content=0;
	this.foot=0;
	
	var csspath="";
	this.privateclass="sys_cardSelect2";
	var that=this;
	try{
		if (typeof(config)!="object") {
			config={}
		}
	}catch(e){
		//TODO handle the exception
	}
	try{
		var obj=(typeof(config["obj"])=="object")?config["obj"]:this.myobject;
	}catch(e){
		var obj=this.myobject;
	}
	try{
		this.privateclass=(typeof(config["privateclass"])=="string")?config["privateclass"]:"sys_cardSelect2";
	}catch(e){
		this.privateclass="sys_cardSelect2";
	}
	try{
		csspath=config["CSSPath"];
		csspath=csspath.replace(/\/$/,"");
		csspath=csspath+"/";
	}catch(e){
		
	}
	this.init=function(){
		that.loadcss();
		that.div=$$(obj).addEle(0,{"class":that.privateclass+"-div"});
		that.head=$$(that.div).addEle(0,{"class":that.privateclass+"-head"});
		that.content=$$(that.div).addEle(0,{"class":that.privateclass+"-content"});
		that.foot=$$(that.div).addEle(0,{"class":that.privateclass+"-foot"});
		
	}
	this.loadcss=function(){
		try{
			if (document.getElementsByClassName('sys_cardSelect2-CSS').length==0) {
				var lin = document.createElement("link");
				lin.setAttribute("class", "sys_cardSelect2-CSS");
				lin.setAttribute("rel", "stylesheet");
				lin.setAttribute("href", "http://" + window.location.host + csspath+that.privateclass +'.css?v=' + Math.random());
				document.body.appendChild(lin);
			}
		}catch(e){
			//TODO handle the exception
		}
	}
	
	
	return this;
}

mdata.a.prototype.pasteTable=function(table){
	for (var i=0;i<table.rows.length;i++) {
		for (var j=0;j<table.rows[i].cells.length;j++) {
			try{
				(function(i,j){
					$$(table.rows[i].cells[j]).addEvent("paste", function(e) {
							// if (table.rows[i].cells[j].childNodes.length>0) {
							// 	table.rows[i].cells[j].setAttribute("contenteditable", "false");
							// } else{
							// 	table.rows[i].cells[j].setAttribute("contenteditable", "false");
							// 	var textstr = e.clipboardData.getData("text/plain");
							// 	var v=$$().addEle("input",0,0,textstr);
							// 	textstr=$$(v).HTML();
							// 	$$().removeElem(v);
							// 	table.rows[i].cells[j].setAttribute("contenteditable", "true");
							// 	document.execCommand("insertText", false, textstr);	
							// 	table.rows[i].cells[j].setAttribute("contenteditable", "false");
							// 	setTimeout(function(){
							// 		table.rows[i].cells[j].setAttribute("contenteditable", "true");
							// 	},5)
							// }
							
							
							
					},true)
				})(i,j)
			}catch(e){
				//TODO handle the exception
				console.log(e)
			}
		}
	}
}
