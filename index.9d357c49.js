function t(t,e,n,r){Object.defineProperty(t,e,{get:n,set:r,enumerable:!0,configurable:!0})}function e(t){return t&&t.__esModule?t.default:t}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},i={},s=n.parcelRequired76b;null==s&&((s=function(t){if(t in r)return r[t].exports;if(t in i){var e=i[t];delete i[t];var n={id:t,exports:{}};return r[t]=n,e.call(n.exports,n,n.exports),n.exports}var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(t,e){i[t]=e},n.parcelRequired76b=s),s.register("aFV0K",(function(t,e){var n=s("ed1K5"),r=s("3ILHO"),i=s("f6eBG"),o=s("fNqig");let a=1;const u=window.matchMedia("(min-width: 768px)").matches;return"Filmoteka"===document.title?(window.addEventListener("DOMContentLoaded",async function(){const t=await(0,n.fetchTrendingMovies)(a);c(t.data.page,t.data.total_pages),(0,i.insertMarkup)(r.refs.mainContainer,await(0,i.renderCards)(t.data)),r.refs.pagination.addEventListener("click",l),r.refs.mainContainer.addEventListener("click",o.showInfo)}()),void r.refs.form.addEventListener("submit",(async function(t){t.preventDefault();const{target:{searchQuery:e},currentTarget:s}=t,o=await(0,n.fetchMovies)(e.value,a);if(0===o.data.results||!o.data.results||0===o.data.results.length)return e.value="",r.refs.formAlert.classList.remove("visually-hidden"),void setTimeout((()=>{r.refs.formAlert.classList.add("visually-hidden")}),3e3);r.refs.pagination.removeEventListener("click",l),r.refs.pagination.addEventListener("click",h),c(o.data.page,o.data.total_pages),(0,i.insertMarkup)(r.refs.mainContainer,await(0,i.renderCards)(o.data))}))):void 0;function c(t,e){let n="";a=t;const i=t-2,s=t-1,o=t+1,c=t+2;t>1&&(u?(n+="<li class='pagination__item' data-action='prev'>&#129144;</li>",n+="<li class='pagination__item'>1</li>"):n+="<li class='pagination__item' data-action='prev'>&#129144;</li>"),t>4&&u&&(n+="<li class='pagination__item'>...</li>"),(!u&&t>=3||t>3)&&(n+=`<li class='pagination__item'>${i}</li>`),(!u&&t>=2||t>2)&&(n+=`<li class='pagination__item'>${s}</li>`),n+=`<li class='pagination__item pagination__current-page'>${a}</li>`,(!u&&e-1>=a||e-1>a)&&(n+=`<li class='pagination__item'>${o}</li>`),(!u&&e-2>=a||e-2>a)&&(n+=`<li class='pagination__item'>${c}</li>`),e-3>a&&u&&(n+="<li class='pagination__item'>...</li>"),e>a&&(u?(n+=`<li class='pagination__item'>${e}</li>`,n+="<li class='pagination__item' data-action='next'>&#129146;</li>"):n+="<li class='pagination__item' data-action='next'>&#129146;</li>"),r.refs.pagination.innerHTML=n}async function l(t){const{target:e,currentTarget:s}=t;if(e===s||"..."===e)return;if("next"===e.dataset.action){a+=1;const t=await(0,n.fetchTrendingMovies)(a);return(0,i.insertMarkup)(r.refs.mainContainer,await(0,i.renderCards)(t.data)),void c(t.data.page,t.data.total_pages)}if("prev"===e.dataset.action){a-=1;const t=await(0,n.fetchTrendingMovies)(a);return(0,i.insertMarkup)(r.refs.mainContainer,await(0,i.renderCards)(t.data)),void c(t.data.page,t.data.total_pages)}a=Number(e.textContent);const o=await(0,n.fetchTrendingMovies)(a);(0,i.insertMarkup)(r.refs.mainContainer,await(0,i.renderCards)(o.data)),c(o.data.page,o.data.total_pages)}async function h(t){const{target:e,currentTarget:s}=t;if(e===s||"..."===e)return;if("next"===e.dataset.action){a+=1;const t=await(0,n.fetchMovies)(r.refs.form.searchQuery.value,a);return(0,i.insertMarkup)(r.refs.mainContainer,await(0,i.renderCards)(t.data)),void c(t.data.page,t.data.total_pages)}if("prev"===e.dataset.action){a-=1;const t=await(0,n.fetchMovies)(r.refs.form.searchQuery.value,a);return(0,i.insertMarkup)(r.refs.mainContainer,await(0,i.renderCards)(t.data)),void c(t.data.page,t.data.total_pages)}a=Number(e.textContent);const o=await(0,n.fetchMovies)(r.refs.form.searchQuery.value,a);(0,i.insertMarkup)(r.refs.mainContainer,await(0,i.renderCards)(o.data)),c(o.data.page,o.data.total_pages)}})),s.register("ed1K5",(function(e,n){t(e.exports,"fetchTrendingMovies",(function(){return i})),t(e.exports,"fetchGenres",(function(){return o})),t(e.exports,"fetchMovies",(function(){return a})),t(e.exports,"fetchInfoMovieById",(function(){return u}));var r=s("2shzp");async function i(t=1){const e=await r.default.get(`https://api.themoviedb.org/3//trending/movie/day?api_key=f516fdc3d4918369a6ad5ae834597c19&page=${t}`);if(!e.status)throw new Error("Something went wrong");return e}async function o(){const t=await r.default.get("https://api.themoviedb.org/3/genre/movie/list?api_key=f516fdc3d4918369a6ad5ae834597c19");if(!t.status)throw new Error("Something went wrong");return t}async function a(t,e=1){const n=await r.default.get(`https://api.themoviedb.org/3//search/movie?api_key=f516fdc3d4918369a6ad5ae834597c19&query=${t}&page=${e}`);if(!n.status)throw new Error("Something went wrong");return n}async function u(t){const e=await r.default.get(`https://api.themoviedb.org/3//movie/${t}?api_key=f516fdc3d4918369a6ad5ae834597c19`);if(!e.status)throw new Error("Something went wrongs");return e}})),s.register("2shzp",(function(e,n){t(e.exports,"default",(function(){return m}));var r=s("bRlFp");const{Axios:i,AxiosError:o,CanceledError:a,isCancel:u,CancelToken:c,VERSION:l,all:h,Cancel:f,isAxiosError:d,spread:p,toFormData:g}=r.default;var m=r.default})),s.register("bRlFp",(function(e,n){t(e.exports,"default",(function(){return w}));var r=s("2bBga"),i=s("djt5d"),o=s("6zSb1"),a=s("d0EKm"),u=s("hqlPG"),c=s("4bmvb"),l=s("83xK9"),h=s("2sjhC"),f=s("ksuZT"),d=s("50GW0"),p=s("aewVa"),g=s("121rJ"),m=s("av9gA"),y=s("gNhGc");const v=function t(e){const n=new(0,o.default)(e),s=(0,i.default)(o.default.prototype.request,n);return r.default.extend(s,o.default.prototype,n,{allOwnKeys:!0}),r.default.extend(s,n,null,{allOwnKeys:!0}),s.create=function(n){return t((0,a.default)(e,n))},s}(u.default);v.Axios=o.default,v.CanceledError=l.default,v.CancelToken=h.default,v.isCancel=f.default,v.VERSION=d.VERSION,v.toFormData=p.default,v.AxiosError=g.default,v.Cancel=v.CanceledError,v.all=function(t){return Promise.all(t)},v.spread=m.default,v.isAxiosError=y.default,v.formToJSON=t=>(0,c.default)(r.default.isHTMLForm(t)?new FormData(t):t);var w=v})),s.register("2bBga",(function(e,n){t(e.exports,"default",(function(){return k}));var r=s("djt5d");const{toString:i}=Object.prototype,{getPrototypeOf:o}=Object,a=(u=Object.create(null),t=>{const e=i.call(t);return u[e]||(u[e]=e.slice(8,-1).toLowerCase())});var u;const c=t=>(t=t.toLowerCase(),e=>a(e)===t),l=t=>e=>typeof e===t,{isArray:h}=Array,f=l("undefined");const d=c("ArrayBuffer");const p=l("string"),g=l("function"),m=l("number"),y=t=>null!==t&&"object"==typeof t,v=t=>{if("object"!==a(t))return!1;const e=o(t);return!(null!==e&&e!==Object.prototype&&null!==Object.getPrototypeOf(e)||Symbol.toStringTag in t||Symbol.iterator in t)},w=c("Date"),E=c("File"),b=c("Blob"),T=c("FileList"),I=c("URLSearchParams");function S(t,e,{allOwnKeys:n=!1}={}){if(null==t)return;let r,i;if("object"!=typeof t&&(t=[t]),h(t))for(r=0,i=t.length;r<i;r++)e.call(null,t[r],r,t);else{const i=n?Object.getOwnPropertyNames(t):Object.keys(t),s=i.length;let o;for(r=0;r<s;r++)o=i[r],e.call(null,t[o],o,t)}}const C=(A="undefined"!=typeof Uint8Array&&o(Uint8Array),t=>A&&t instanceof A);var A;const _=c("HTMLFormElement"),D=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),x=c("RegExp"),N=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),r={};S(n,((n,i)=>{!1!==e(n,i,t)&&(r[i]=n)})),Object.defineProperties(t,r)};var k={isArray:h,isArrayBuffer:d,isBuffer:function(t){return null!==t&&!f(t)&&null!==t.constructor&&!f(t.constructor)&&g(t.constructor.isBuffer)&&t.constructor.isBuffer(t)},isFormData:t=>{const e="[object FormData]";return t&&("function"==typeof FormData&&t instanceof FormData||i.call(t)===e||g(t.toString)&&t.toString()===e)},isArrayBufferView:function(t){let e;return e="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&d(t.buffer),e},isString:p,isNumber:m,isBoolean:t=>!0===t||!1===t,isObject:y,isPlainObject:v,isUndefined:f,isDate:w,isFile:E,isBlob:b,isRegExp:x,isFunction:g,isStream:t=>y(t)&&g(t.pipe),isURLSearchParams:I,isTypedArray:C,isFileList:T,forEach:S,merge:function t(){const e={},n=(n,r)=>{v(e[r])&&v(n)?e[r]=t(e[r],n):v(n)?e[r]=t({},n):h(n)?e[r]=n.slice():e[r]=n};for(let t=0,e=arguments.length;t<e;t++)arguments[t]&&S(arguments[t],n);return e},extend:(t,e,n,{allOwnKeys:i}={})=>(S(e,((e,i)=>{n&&g(e)?t[i]=(0,r.default)(e,n):t[i]=e}),{allOwnKeys:i}),t),trim:t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:t=>(65279===t.charCodeAt(0)&&(t=t.slice(1)),t),inherits:(t,e,n,r)=>{t.prototype=Object.create(e.prototype,r),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},toFlatObject:(t,e,n,r)=>{let i,s,a;const u={};if(e=e||{},null==t)return e;do{for(i=Object.getOwnPropertyNames(t),s=i.length;s-- >0;)a=i[s],r&&!r(a,t,e)||u[a]||(e[a]=t[a],u[a]=!0);t=!1!==n&&o(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},kindOf:a,kindOfTest:c,endsWith:(t,e,n)=>{t=String(t),(void 0===n||n>t.length)&&(n=t.length),n-=e.length;const r=t.indexOf(e,n);return-1!==r&&r===n},toArray:t=>{if(!t)return null;if(h(t))return t;let e=t.length;if(!m(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},forEachEntry:(t,e)=>{const n=(t&&t[Symbol.iterator]).call(t);let r;for(;(r=n.next())&&!r.done;){const n=r.value;e.call(t,n[0],n[1])}},matchAll:(t,e)=>{let n;const r=[];for(;null!==(n=t.exec(e));)r.push(n);return r},isHTMLForm:_,hasOwnProperty:D,hasOwnProp:D,reduceDescriptors:N,freezeMethods:t=>{N(t,((e,n)=>{const r=t[n];g(r)&&(e.enumerable=!1,"writable"in e?e.writable=!1:e.set||(e.set=()=>{throw Error("Can not read-only method '"+n+"'")}))}))},toObjectSet:(t,e)=>{const n={},r=t=>{t.forEach((t=>{n[t]=!0}))};return h(t)?r(t):r(String(t).split(e)),n},toCamelCase:t=>t.toLowerCase().replace(/[_-\s]([a-z\d])(\w*)/g,(function(t,e,n){return e.toUpperCase()+n})),noop:()=>{},toFiniteNumber:(t,e)=>(t=+t,Number.isFinite(t)?t:e)}})),s.register("djt5d",(function(e,n){function r(t,e){return function(){return t.apply(e,arguments)}}t(e.exports,"default",(function(){return r}))})),s.register("6zSb1",(function(e,n){t(e.exports,"default",(function(){return p}));var r=s("2bBga"),i=s("2RNjJ"),o=s("5Dm7L"),a=s("eQ5d8"),u=s("d0EKm"),c=s("1ZTQa"),l=s("6zj0X"),h=s("gbTL1");const f=l.default.validators;class d{request(t,e){"string"==typeof t?(e=e||{}).url=t:e=t||{},e=(0,u.default)(this.defaults,e);const{transitional:n,paramsSerializer:i}=e;void 0!==n&&l.default.assertOptions(n,{silentJSONParsing:f.transitional(f.boolean),forcedJSONParsing:f.transitional(f.boolean),clarifyTimeoutError:f.transitional(f.boolean)},!1),void 0!==i&&l.default.assertOptions(i,{encode:f.function,serialize:f.function},!0),e.method=(e.method||this.defaults.method||"get").toLowerCase();const s=e.headers&&r.default.merge(e.headers.common,e.headers[e.method]);s&&r.default.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),e.headers=new(0,h.default)(e.headers,s);const o=[];let c=!0;this.interceptors.request.forEach((function(t){"function"==typeof t.runWhen&&!1===t.runWhen(e)||(c=c&&t.synchronous,o.unshift(t.fulfilled,t.rejected))}));const d=[];let p;this.interceptors.response.forEach((function(t){d.push(t.fulfilled,t.rejected)}));let g,m=0;if(!c){const t=[a.default.bind(this),void 0];for(t.unshift.apply(t,o),t.push.apply(t,d),g=t.length,p=Promise.resolve(e);m<g;)p=p.then(t[m++],t[m++]);return p}g=o.length;let y=e;for(m=0;m<g;){const t=o[m++],e=o[m++];try{y=t(y)}catch(t){e.call(this,t);break}}try{p=a.default.call(this,y)}catch(t){return Promise.reject(t)}for(m=0,g=d.length;m<g;)p=p.then(d[m++],d[m++]);return p}getUri(t){t=(0,u.default)(this.defaults,t);const e=(0,c.default)(t.baseURL,t.url);return(0,i.default)(e,t.params,t.paramsSerializer)}constructor(t){this.defaults=t,this.interceptors={request:new(0,o.default),response:new(0,o.default)}}}r.default.forEach(["delete","get","head","options"],(function(t){d.prototype[t]=function(e,n){return this.request((0,u.default)(n||{},{method:t,url:e,data:(n||{}).data}))}})),r.default.forEach(["post","put","patch"],(function(t){function e(e){return function(n,r,i){return this.request((0,u.default)(i||{},{method:t,headers:e?{"Content-Type":"multipart/form-data"}:{},url:n,data:r}))}}d.prototype[t]=e(),d.prototype[t+"Form"]=e(!0)}));var p=d})),s.register("2RNjJ",(function(e,n){t(e.exports,"default",(function(){return a}));var r=s("2bBga"),i=s("hz3Ym");function o(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function a(t,e,n){if(!e)return t;const s=n&&n.encode||o,a=n&&n.serialize;let u;if(u=a?a(e,n):r.default.isURLSearchParams(e)?e.toString():new(0,i.default)(e,n).toString(s),u){const e=t.indexOf("#");-1!==e&&(t=t.slice(0,e)),t+=(-1===t.indexOf("?")?"?":"&")+u}return t}})),s.register("hz3Ym",(function(e,n){t(e.exports,"default",(function(){return u}));var r=s("aewVa");function i(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,(function(t){return e[t]}))}function o(t,e){this._pairs=[],t&&(0,r.default)(t,this,e)}const a=o.prototype;a.append=function(t,e){this._pairs.push([t,e])},a.toString=function(t){const e=t?function(e){return t.call(this,e,i)}:i;return this._pairs.map((function(t){return e(t[0])+"="+e(t[1])}),"").join("&")};var u=o})),s.register("aewVa",(function(e,n){t(e.exports,"default",(function(){return f}));var r=s("2bBga"),i=s("121rJ"),o=s("cHBTa"),a=s("ihoyg").Buffer;function u(t){return r.default.isPlainObject(t)||r.default.isArray(t)}function c(t){return r.default.endsWith(t,"[]")?t.slice(0,-2):t}function l(t,e,n){return t?t.concat(e).map((function(t,e){return t=c(t),!n&&e?"["+t+"]":t})).join(n?".":""):e}const h=r.default.toFlatObject(r.default,{},null,(function(t){return/^is[A-Z]/.test(t)}));var f=function(t,e,n){if(!r.default.isObject(t))throw new TypeError("target must be an object");e=e||new(o.default||FormData);const s=(n=r.default.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(t,e){return!r.default.isUndefined(e[t])}))).metaTokens,f=n.visitor||v,d=n.dots,p=n.indexes,g=(n.Blob||"undefined"!=typeof Blob&&Blob)&&((m=e)&&r.default.isFunction(m.append)&&"FormData"===m[Symbol.toStringTag]&&m[Symbol.iterator]);var m;if(!r.default.isFunction(f))throw new TypeError("visitor must be a function");function y(t){if(null===t)return"";if(r.default.isDate(t))return t.toISOString();if(!g&&r.default.isBlob(t))throw new(0,i.default)("Blob is not supported. Use a Buffer instead.");return r.default.isArrayBuffer(t)||r.default.isTypedArray(t)?g&&"function"==typeof Blob?new Blob([t]):a.from(t):t}function v(t,n,i){let o=t;if(t&&!i&&"object"==typeof t)if(r.default.endsWith(n,"{}"))n=s?n:n.slice(0,-2),t=JSON.stringify(t);else if(r.default.isArray(t)&&function(t){return r.default.isArray(t)&&!t.some(u)}(t)||r.default.isFileList(t)||r.default.endsWith(n,"[]")&&(o=r.default.toArray(t)))return n=c(n),o.forEach((function(t,i){!r.default.isUndefined(t)&&null!==t&&e.append(!0===p?l([n],i,d):null===p?n:n+"[]",y(t))})),!1;return!!u(t)||(e.append(l(i,n,d),y(t)),!1)}const w=[],E=Object.assign(h,{defaultVisitor:v,convertValue:y,isVisitable:u});if(!r.default.isObject(t))throw new TypeError("data must be an object");return function t(n,i){if(!r.default.isUndefined(n)){if(-1!==w.indexOf(n))throw Error("Circular reference detected in "+i.join("."));w.push(n),r.default.forEach(n,(function(n,s){!0===(!(r.default.isUndefined(n)||null===n)&&f.call(e,n,r.default.isString(s)?s.trim():s,i,E))&&t(n,i?i.concat(s):[s])})),w.pop()}}(t),e}})),s.register("121rJ",(function(e,n){t(e.exports,"default",(function(){return u}));var r=s("2bBga");function i(t,e,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}r.default.inherits(i,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const o=i.prototype,a={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((t=>{a[t]={value:t}})),Object.defineProperties(i,a),Object.defineProperty(o,"isAxiosError",{value:!0}),i.from=(t,e,n,s,a,u)=>{const c=Object.create(o);return r.default.toFlatObject(t,c,(function(t){return t!==Error.prototype}),(t=>"isAxiosError"!==t)),i.call(c,t.message,e,n,s,a),c.cause=t,c.name=t.name,u&&Object.assign(c,u),c};var u=i})),s.register("cHBTa",(function(n,r){t(n.exports,"default",(function(){return i}));var i=e(s("FHeSn"))})),s.register("FHeSn",(function(t,e){t.exports="object"==typeof self?self.FormData:window.FormData})),s.register("ihoyg",(function(e,n){var r,i;t(e.exports,"Buffer",(function(){return r}),(function(t){return r=t})),t(e.exports,"INSPECT_MAX_BYTES",(function(){return i}),(function(t){return i=t}));var o=s("hqZtu"),a=s("5WQj6");const u="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;r=h,i=50;const c=2147483647;function l(t){if(t>c)throw new RangeError('The value "'+t+'" is invalid for option "size"');const e=new Uint8Array(t);return Object.setPrototypeOf(e,h.prototype),e}function h(t,e,n){if("number"==typeof t){if("string"==typeof e)throw new TypeError('The "string" argument must be of type string. Received type number');return p(t)}return f(t,e,n)}function f(t,e,n){if("string"==typeof t)return function(t,e){"string"==typeof e&&""!==e||(e="utf8");if(!h.isEncoding(e))throw new TypeError("Unknown encoding: "+e);const n=0|v(t,e);let r=l(n);const i=r.write(t,e);i!==n&&(r=r.slice(0,i));return r}(t,e);if(ArrayBuffer.isView(t))return function(t){if(J(t,Uint8Array)){const e=new Uint8Array(t);return m(e.buffer,e.byteOffset,e.byteLength)}return g(t)}(t);if(null==t)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t);if(J(t,ArrayBuffer)||t&&J(t.buffer,ArrayBuffer))return m(t,e,n);if("undefined"!=typeof SharedArrayBuffer&&(J(t,SharedArrayBuffer)||t&&J(t.buffer,SharedArrayBuffer)))return m(t,e,n);if("number"==typeof t)throw new TypeError('The "value" argument must not be of type number. Received type number');const r=t.valueOf&&t.valueOf();if(null!=r&&r!==t)return h.from(r,e,n);const i=function(t){if(h.isBuffer(t)){const e=0|y(t.length),n=l(e);return 0===n.length||t.copy(n,0,0,e),n}if(void 0!==t.length)return"number"!=typeof t.length||Z(t.length)?l(0):g(t);if("Buffer"===t.type&&Array.isArray(t.data))return g(t.data)}(t);if(i)return i;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof t[Symbol.toPrimitive])return h.from(t[Symbol.toPrimitive]("string"),e,n);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t)}function d(t){if("number"!=typeof t)throw new TypeError('"size" argument must be of type number');if(t<0)throw new RangeError('The value "'+t+'" is invalid for option "size"')}function p(t){return d(t),l(t<0?0:0|y(t))}function g(t){const e=t.length<0?0:0|y(t.length),n=l(e);for(let r=0;r<e;r+=1)n[r]=255&t[r];return n}function m(t,e,n){if(e<0||t.byteLength<e)throw new RangeError('"offset" is outside of buffer bounds');if(t.byteLength<e+(n||0))throw new RangeError('"length" is outside of buffer bounds');let r;return r=void 0===e&&void 0===n?new Uint8Array(t):void 0===n?new Uint8Array(t,e):new Uint8Array(t,e,n),Object.setPrototypeOf(r,h.prototype),r}function y(t){if(t>=c)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+c.toString(16)+" bytes");return 0|t}function v(t,e){if(h.isBuffer(t))return t.length;if(ArrayBuffer.isView(t)||J(t,ArrayBuffer))return t.byteLength;if("string"!=typeof t)throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof t);const n=t.length,r=arguments.length>2&&!0===arguments[2];if(!r&&0===n)return 0;let i=!1;for(;;)switch(e){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":return W(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*n;case"hex":return n>>>1;case"base64":return X(t).length;default:if(i)return r?-1:W(t).length;e=(""+e).toLowerCase(),i=!0}}function w(t,e,n){let r=!1;if((void 0===e||e<0)&&(e=0),e>this.length)return"";if((void 0===n||n>this.length)&&(n=this.length),n<=0)return"";if((n>>>=0)<=(e>>>=0))return"";for(t||(t="utf8");;)switch(t){case"hex":return L(this,e,n);case"utf8":case"utf-8":return x(this,e,n);case"ascii":return k(this,e,n);case"latin1":case"binary":return R(this,e,n);case"base64":return D(this,e,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return O(this,e,n);default:if(r)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),r=!0}}function E(t,e,n){const r=t[e];t[e]=t[n],t[n]=r}function b(t,e,n,r,i){if(0===t.length)return-1;if("string"==typeof n?(r=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),Z(n=+n)&&(n=i?0:t.length-1),n<0&&(n=t.length+n),n>=t.length){if(i)return-1;n=t.length-1}else if(n<0){if(!i)return-1;n=0}if("string"==typeof e&&(e=h.from(e,r)),h.isBuffer(e))return 0===e.length?-1:T(t,e,n,r,i);if("number"==typeof e)return e&=255,"function"==typeof Uint8Array.prototype.indexOf?i?Uint8Array.prototype.indexOf.call(t,e,n):Uint8Array.prototype.lastIndexOf.call(t,e,n):T(t,[e],n,r,i);throw new TypeError("val must be string, number or Buffer")}function T(t,e,n,r,i){let s,o=1,a=t.length,u=e.length;if(void 0!==r&&("ucs2"===(r=String(r).toLowerCase())||"ucs-2"===r||"utf16le"===r||"utf-16le"===r)){if(t.length<2||e.length<2)return-1;o=2,a/=2,u/=2,n/=2}function c(t,e){return 1===o?t[e]:t.readUInt16BE(e*o)}if(i){let r=-1;for(s=n;s<a;s++)if(c(t,s)===c(e,-1===r?0:s-r)){if(-1===r&&(r=s),s-r+1===u)return r*o}else-1!==r&&(s-=s-r),r=-1}else for(n+u>a&&(n=a-u),s=n;s>=0;s--){let n=!0;for(let r=0;r<u;r++)if(c(t,s+r)!==c(e,r)){n=!1;break}if(n)return s}return-1}function I(t,e,n,r){n=Number(n)||0;const i=t.length-n;r?(r=Number(r))>i&&(r=i):r=i;const s=e.length;let o;for(r>s/2&&(r=s/2),o=0;o<r;++o){const r=parseInt(e.substr(2*o,2),16);if(Z(r))return o;t[n+o]=r}return o}function S(t,e,n,r){return Y(W(e,t.length-n),t,n,r)}function C(t,e,n,r){return Y(function(t){const e=[];for(let n=0;n<t.length;++n)e.push(255&t.charCodeAt(n));return e}(e),t,n,r)}function A(t,e,n,r){return Y(X(e),t,n,r)}function _(t,e,n,r){return Y(function(t,e){let n,r,i;const s=[];for(let o=0;o<t.length&&!((e-=2)<0);++o)n=t.charCodeAt(o),r=n>>8,i=n%256,s.push(i),s.push(r);return s}(e,t.length-n),t,n,r)}function D(t,e,n){return 0===e&&n===t.length?o.fromByteArray(t):o.fromByteArray(t.slice(e,n))}function x(t,e,n){n=Math.min(t.length,n);const r=[];let i=e;for(;i<n;){const e=t[i];let s=null,o=e>239?4:e>223?3:e>191?2:1;if(i+o<=n){let n,r,a,u;switch(o){case 1:e<128&&(s=e);break;case 2:n=t[i+1],128==(192&n)&&(u=(31&e)<<6|63&n,u>127&&(s=u));break;case 3:n=t[i+1],r=t[i+2],128==(192&n)&&128==(192&r)&&(u=(15&e)<<12|(63&n)<<6|63&r,u>2047&&(u<55296||u>57343)&&(s=u));break;case 4:n=t[i+1],r=t[i+2],a=t[i+3],128==(192&n)&&128==(192&r)&&128==(192&a)&&(u=(15&e)<<18|(63&n)<<12|(63&r)<<6|63&a,u>65535&&u<1114112&&(s=u))}}null===s?(s=65533,o=1):s>65535&&(s-=65536,r.push(s>>>10&1023|55296),s=56320|1023&s),r.push(s),i+=o}return function(t){const e=t.length;if(e<=N)return String.fromCharCode.apply(String,t);let n="",r=0;for(;r<e;)n+=String.fromCharCode.apply(String,t.slice(r,r+=N));return n}(r)}h.TYPED_ARRAY_SUPPORT=function(){try{const t=new Uint8Array(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(t,e),42===t.foo()}catch(t){return!1}}(),h.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(h.prototype,"parent",{enumerable:!0,get:function(){if(h.isBuffer(this))return this.buffer}}),Object.defineProperty(h.prototype,"offset",{enumerable:!0,get:function(){if(h.isBuffer(this))return this.byteOffset}}),h.poolSize=8192,h.from=function(t,e,n){return f(t,e,n)},Object.setPrototypeOf(h.prototype,Uint8Array.prototype),Object.setPrototypeOf(h,Uint8Array),h.alloc=function(t,e,n){return function(t,e,n){return d(t),t<=0?l(t):void 0!==e?"string"==typeof n?l(t).fill(e,n):l(t).fill(e):l(t)}(t,e,n)},h.allocUnsafe=function(t){return p(t)},h.allocUnsafeSlow=function(t){return p(t)},h.isBuffer=function(t){return null!=t&&!0===t._isBuffer&&t!==h.prototype},h.compare=function(t,e){if(J(t,Uint8Array)&&(t=h.from(t,t.offset,t.byteLength)),J(e,Uint8Array)&&(e=h.from(e,e.offset,e.byteLength)),!h.isBuffer(t)||!h.isBuffer(e))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(t===e)return 0;let n=t.length,r=e.length;for(let i=0,s=Math.min(n,r);i<s;++i)if(t[i]!==e[i]){n=t[i],r=e[i];break}return n<r?-1:r<n?1:0},h.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},h.concat=function(t,e){if(!Array.isArray(t))throw new TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return h.alloc(0);let n;if(void 0===e)for(e=0,n=0;n<t.length;++n)e+=t[n].length;const r=h.allocUnsafe(e);let i=0;for(n=0;n<t.length;++n){let e=t[n];if(J(e,Uint8Array))i+e.length>r.length?(h.isBuffer(e)||(e=h.from(e)),e.copy(r,i)):Uint8Array.prototype.set.call(r,e,i);else{if(!h.isBuffer(e))throw new TypeError('"list" argument must be an Array of Buffers');e.copy(r,i)}i+=e.length}return r},h.byteLength=v,h.prototype._isBuffer=!0,h.prototype.swap16=function(){const t=this.length;if(t%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let e=0;e<t;e+=2)E(this,e,e+1);return this},h.prototype.swap32=function(){const t=this.length;if(t%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let e=0;e<t;e+=4)E(this,e,e+3),E(this,e+1,e+2);return this},h.prototype.swap64=function(){const t=this.length;if(t%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let e=0;e<t;e+=8)E(this,e,e+7),E(this,e+1,e+6),E(this,e+2,e+5),E(this,e+3,e+4);return this},h.prototype.toString=function(){const t=this.length;return 0===t?"":0===arguments.length?x(this,0,t):w.apply(this,arguments)},h.prototype.toLocaleString=h.prototype.toString,h.prototype.equals=function(t){if(!h.isBuffer(t))throw new TypeError("Argument must be a Buffer");return this===t||0===h.compare(this,t)},h.prototype.inspect=function(){let t="";const e=i;return t=this.toString("hex",0,e).replace(/(.{2})/g,"$1 ").trim(),this.length>e&&(t+=" ... "),"<Buffer "+t+">"},u&&(h.prototype[u]=h.prototype.inspect),h.prototype.compare=function(t,e,n,r,i){if(J(t,Uint8Array)&&(t=h.from(t,t.offset,t.byteLength)),!h.isBuffer(t))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof t);if(void 0===e&&(e=0),void 0===n&&(n=t?t.length:0),void 0===r&&(r=0),void 0===i&&(i=this.length),e<0||n>t.length||r<0||i>this.length)throw new RangeError("out of range index");if(r>=i&&e>=n)return 0;if(r>=i)return-1;if(e>=n)return 1;if(this===t)return 0;let s=(i>>>=0)-(r>>>=0),o=(n>>>=0)-(e>>>=0);const a=Math.min(s,o),u=this.slice(r,i),c=t.slice(e,n);for(let t=0;t<a;++t)if(u[t]!==c[t]){s=u[t],o=c[t];break}return s<o?-1:o<s?1:0},h.prototype.includes=function(t,e,n){return-1!==this.indexOf(t,e,n)},h.prototype.indexOf=function(t,e,n){return b(this,t,e,n,!0)},h.prototype.lastIndexOf=function(t,e,n){return b(this,t,e,n,!1)},h.prototype.write=function(t,e,n,r){if(void 0===e)r="utf8",n=this.length,e=0;else if(void 0===n&&"string"==typeof e)r=e,n=this.length,e=0;else{if(!isFinite(e))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");e>>>=0,isFinite(n)?(n>>>=0,void 0===r&&(r="utf8")):(r=n,n=void 0)}const i=this.length-e;if((void 0===n||n>i)&&(n=i),t.length>0&&(n<0||e<0)||e>this.length)throw new RangeError("Attempt to write outside buffer bounds");r||(r="utf8");let s=!1;for(;;)switch(r){case"hex":return I(this,t,e,n);case"utf8":case"utf-8":return S(this,t,e,n);case"ascii":case"latin1":case"binary":return C(this,t,e,n);case"base64":return A(this,t,e,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return _(this,t,e,n);default:if(s)throw new TypeError("Unknown encoding: "+r);r=(""+r).toLowerCase(),s=!0}},h.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};const N=4096;function k(t,e,n){let r="";n=Math.min(t.length,n);for(let i=e;i<n;++i)r+=String.fromCharCode(127&t[i]);return r}function R(t,e,n){let r="";n=Math.min(t.length,n);for(let i=e;i<n;++i)r+=String.fromCharCode(t[i]);return r}function L(t,e,n){const r=t.length;(!e||e<0)&&(e=0),(!n||n<0||n>r)&&(n=r);let i="";for(let r=e;r<n;++r)i+=tt[t[r]];return i}function O(t,e,n){const r=t.slice(e,n);let i="";for(let t=0;t<r.length-1;t+=2)i+=String.fromCharCode(r[t]+256*r[t+1]);return i}function M(t,e,n){if(t%1!=0||t<0)throw new RangeError("offset is not uint");if(t+e>n)throw new RangeError("Trying to access beyond buffer length")}function U(t,e,n,r,i,s){if(!h.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>i||e<s)throw new RangeError('"value" argument is out of bounds');if(n+r>t.length)throw new RangeError("Index out of range")}function B(t,e,n,r,i){H(e,r,i,t,n,7);let s=Number(e&BigInt(4294967295));t[n++]=s,s>>=8,t[n++]=s,s>>=8,t[n++]=s,s>>=8,t[n++]=s;let o=Number(e>>BigInt(32)&BigInt(4294967295));return t[n++]=o,o>>=8,t[n++]=o,o>>=8,t[n++]=o,o>>=8,t[n++]=o,n}function P(t,e,n,r,i){H(e,r,i,t,n,7);let s=Number(e&BigInt(4294967295));t[n+7]=s,s>>=8,t[n+6]=s,s>>=8,t[n+5]=s,s>>=8,t[n+4]=s;let o=Number(e>>BigInt(32)&BigInt(4294967295));return t[n+3]=o,o>>=8,t[n+2]=o,o>>=8,t[n+1]=o,o>>=8,t[n]=o,n+8}function F(t,e,n,r,i,s){if(n+r>t.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("Index out of range")}function V(t,e,n,r,i){return e=+e,n>>>=0,i||F(t,0,n,4),a.write(t,e,n,r,23,4),n+4}function j(t,e,n,r,i){return e=+e,n>>>=0,i||F(t,0,n,8),a.write(t,e,n,r,52,8),n+8}h.prototype.slice=function(t,e){const n=this.length;(t=~~t)<0?(t+=n)<0&&(t=0):t>n&&(t=n),(e=void 0===e?n:~~e)<0?(e+=n)<0&&(e=0):e>n&&(e=n),e<t&&(e=t);const r=this.subarray(t,e);return Object.setPrototypeOf(r,h.prototype),r},h.prototype.readUintLE=h.prototype.readUIntLE=function(t,e,n){t>>>=0,e>>>=0,n||M(t,e,this.length);let r=this[t],i=1,s=0;for(;++s<e&&(i*=256);)r+=this[t+s]*i;return r},h.prototype.readUintBE=h.prototype.readUIntBE=function(t,e,n){t>>>=0,e>>>=0,n||M(t,e,this.length);let r=this[t+--e],i=1;for(;e>0&&(i*=256);)r+=this[t+--e]*i;return r},h.prototype.readUint8=h.prototype.readUInt8=function(t,e){return t>>>=0,e||M(t,1,this.length),this[t]},h.prototype.readUint16LE=h.prototype.readUInt16LE=function(t,e){return t>>>=0,e||M(t,2,this.length),this[t]|this[t+1]<<8},h.prototype.readUint16BE=h.prototype.readUInt16BE=function(t,e){return t>>>=0,e||M(t,2,this.length),this[t]<<8|this[t+1]},h.prototype.readUint32LE=h.prototype.readUInt32LE=function(t,e){return t>>>=0,e||M(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},h.prototype.readUint32BE=h.prototype.readUInt32BE=function(t,e){return t>>>=0,e||M(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},h.prototype.readBigUInt64LE=et((function(t){z(t>>>=0,"offset");const e=this[t],n=this[t+7];void 0!==e&&void 0!==n||G(t,this.length-8);const r=e+256*this[++t]+65536*this[++t]+this[++t]*2**24,i=this[++t]+256*this[++t]+65536*this[++t]+n*2**24;return BigInt(r)+(BigInt(i)<<BigInt(32))})),h.prototype.readBigUInt64BE=et((function(t){z(t>>>=0,"offset");const e=this[t],n=this[t+7];void 0!==e&&void 0!==n||G(t,this.length-8);const r=e*2**24+65536*this[++t]+256*this[++t]+this[++t],i=this[++t]*2**24+65536*this[++t]+256*this[++t]+n;return(BigInt(r)<<BigInt(32))+BigInt(i)})),h.prototype.readIntLE=function(t,e,n){t>>>=0,e>>>=0,n||M(t,e,this.length);let r=this[t],i=1,s=0;for(;++s<e&&(i*=256);)r+=this[t+s]*i;return i*=128,r>=i&&(r-=Math.pow(2,8*e)),r},h.prototype.readIntBE=function(t,e,n){t>>>=0,e>>>=0,n||M(t,e,this.length);let r=e,i=1,s=this[t+--r];for(;r>0&&(i*=256);)s+=this[t+--r]*i;return i*=128,s>=i&&(s-=Math.pow(2,8*e)),s},h.prototype.readInt8=function(t,e){return t>>>=0,e||M(t,1,this.length),128&this[t]?-1*(255-this[t]+1):this[t]},h.prototype.readInt16LE=function(t,e){t>>>=0,e||M(t,2,this.length);const n=this[t]|this[t+1]<<8;return 32768&n?4294901760|n:n},h.prototype.readInt16BE=function(t,e){t>>>=0,e||M(t,2,this.length);const n=this[t+1]|this[t]<<8;return 32768&n?4294901760|n:n},h.prototype.readInt32LE=function(t,e){return t>>>=0,e||M(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},h.prototype.readInt32BE=function(t,e){return t>>>=0,e||M(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},h.prototype.readBigInt64LE=et((function(t){z(t>>>=0,"offset");const e=this[t],n=this[t+7];void 0!==e&&void 0!==n||G(t,this.length-8);const r=this[t+4]+256*this[t+5]+65536*this[t+6]+(n<<24);return(BigInt(r)<<BigInt(32))+BigInt(e+256*this[++t]+65536*this[++t]+this[++t]*2**24)})),h.prototype.readBigInt64BE=et((function(t){z(t>>>=0,"offset");const e=this[t],n=this[t+7];void 0!==e&&void 0!==n||G(t,this.length-8);const r=(e<<24)+65536*this[++t]+256*this[++t]+this[++t];return(BigInt(r)<<BigInt(32))+BigInt(this[++t]*2**24+65536*this[++t]+256*this[++t]+n)})),h.prototype.readFloatLE=function(t,e){return t>>>=0,e||M(t,4,this.length),a.read(this,t,!0,23,4)},h.prototype.readFloatBE=function(t,e){return t>>>=0,e||M(t,4,this.length),a.read(this,t,!1,23,4)},h.prototype.readDoubleLE=function(t,e){return t>>>=0,e||M(t,8,this.length),a.read(this,t,!0,52,8)},h.prototype.readDoubleBE=function(t,e){return t>>>=0,e||M(t,8,this.length),a.read(this,t,!1,52,8)},h.prototype.writeUintLE=h.prototype.writeUIntLE=function(t,e,n,r){if(t=+t,e>>>=0,n>>>=0,!r){U(this,t,e,n,Math.pow(2,8*n)-1,0)}let i=1,s=0;for(this[e]=255&t;++s<n&&(i*=256);)this[e+s]=t/i&255;return e+n},h.prototype.writeUintBE=h.prototype.writeUIntBE=function(t,e,n,r){if(t=+t,e>>>=0,n>>>=0,!r){U(this,t,e,n,Math.pow(2,8*n)-1,0)}let i=n-1,s=1;for(this[e+i]=255&t;--i>=0&&(s*=256);)this[e+i]=t/s&255;return e+n},h.prototype.writeUint8=h.prototype.writeUInt8=function(t,e,n){return t=+t,e>>>=0,n||U(this,t,e,1,255,0),this[e]=255&t,e+1},h.prototype.writeUint16LE=h.prototype.writeUInt16LE=function(t,e,n){return t=+t,e>>>=0,n||U(this,t,e,2,65535,0),this[e]=255&t,this[e+1]=t>>>8,e+2},h.prototype.writeUint16BE=h.prototype.writeUInt16BE=function(t,e,n){return t=+t,e>>>=0,n||U(this,t,e,2,65535,0),this[e]=t>>>8,this[e+1]=255&t,e+2},h.prototype.writeUint32LE=h.prototype.writeUInt32LE=function(t,e,n){return t=+t,e>>>=0,n||U(this,t,e,4,4294967295,0),this[e+3]=t>>>24,this[e+2]=t>>>16,this[e+1]=t>>>8,this[e]=255&t,e+4},h.prototype.writeUint32BE=h.prototype.writeUInt32BE=function(t,e,n){return t=+t,e>>>=0,n||U(this,t,e,4,4294967295,0),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t,e+4},h.prototype.writeBigUInt64LE=et((function(t,e=0){return B(this,t,e,BigInt(0),BigInt("0xffffffffffffffff"))})),h.prototype.writeBigUInt64BE=et((function(t,e=0){return P(this,t,e,BigInt(0),BigInt("0xffffffffffffffff"))})),h.prototype.writeIntLE=function(t,e,n,r){if(t=+t,e>>>=0,!r){const r=Math.pow(2,8*n-1);U(this,t,e,n,r-1,-r)}let i=0,s=1,o=0;for(this[e]=255&t;++i<n&&(s*=256);)t<0&&0===o&&0!==this[e+i-1]&&(o=1),this[e+i]=(t/s>>0)-o&255;return e+n},h.prototype.writeIntBE=function(t,e,n,r){if(t=+t,e>>>=0,!r){const r=Math.pow(2,8*n-1);U(this,t,e,n,r-1,-r)}let i=n-1,s=1,o=0;for(this[e+i]=255&t;--i>=0&&(s*=256);)t<0&&0===o&&0!==this[e+i+1]&&(o=1),this[e+i]=(t/s>>0)-o&255;return e+n},h.prototype.writeInt8=function(t,e,n){return t=+t,e>>>=0,n||U(this,t,e,1,127,-128),t<0&&(t=255+t+1),this[e]=255&t,e+1},h.prototype.writeInt16LE=function(t,e,n){return t=+t,e>>>=0,n||U(this,t,e,2,32767,-32768),this[e]=255&t,this[e+1]=t>>>8,e+2},h.prototype.writeInt16BE=function(t,e,n){return t=+t,e>>>=0,n||U(this,t,e,2,32767,-32768),this[e]=t>>>8,this[e+1]=255&t,e+2},h.prototype.writeInt32LE=function(t,e,n){return t=+t,e>>>=0,n||U(this,t,e,4,2147483647,-2147483648),this[e]=255&t,this[e+1]=t>>>8,this[e+2]=t>>>16,this[e+3]=t>>>24,e+4},h.prototype.writeInt32BE=function(t,e,n){return t=+t,e>>>=0,n||U(this,t,e,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t,e+4},h.prototype.writeBigInt64LE=et((function(t,e=0){return B(this,t,e,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),h.prototype.writeBigInt64BE=et((function(t,e=0){return P(this,t,e,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),h.prototype.writeFloatLE=function(t,e,n){return V(this,t,e,!0,n)},h.prototype.writeFloatBE=function(t,e,n){return V(this,t,e,!1,n)},h.prototype.writeDoubleLE=function(t,e,n){return j(this,t,e,!0,n)},h.prototype.writeDoubleBE=function(t,e,n){return j(this,t,e,!1,n)},h.prototype.copy=function(t,e,n,r){if(!h.isBuffer(t))throw new TypeError("argument should be a Buffer");if(n||(n=0),r||0===r||(r=this.length),e>=t.length&&(e=t.length),e||(e=0),r>0&&r<n&&(r=n),r===n)return 0;if(0===t.length||0===this.length)return 0;if(e<0)throw new RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("sourceEnd out of bounds");r>this.length&&(r=this.length),t.length-e<r-n&&(r=t.length-e+n);const i=r-n;return this===t&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(e,n,r):Uint8Array.prototype.set.call(t,this.subarray(n,r),e),i},h.prototype.fill=function(t,e,n,r){if("string"==typeof t){if("string"==typeof e?(r=e,e=0,n=this.length):"string"==typeof n&&(r=n,n=this.length),void 0!==r&&"string"!=typeof r)throw new TypeError("encoding must be a string");if("string"==typeof r&&!h.isEncoding(r))throw new TypeError("Unknown encoding: "+r);if(1===t.length){const e=t.charCodeAt(0);("utf8"===r&&e<128||"latin1"===r)&&(t=e)}}else"number"==typeof t?t&=255:"boolean"==typeof t&&(t=Number(t));if(e<0||this.length<e||this.length<n)throw new RangeError("Out of range index");if(n<=e)return this;let i;if(e>>>=0,n=void 0===n?this.length:n>>>0,t||(t=0),"number"==typeof t)for(i=e;i<n;++i)this[i]=t;else{const s=h.isBuffer(t)?t:h.from(t,r),o=s.length;if(0===o)throw new TypeError('The value "'+t+'" is invalid for argument "value"');for(i=0;i<n-e;++i)this[i+e]=s[i%o]}return this};const q={};function $(t,e,n){q[t]=class extends n{get code(){return t}set code(t){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:t,writable:!0})}toString(){return`${this.name} [${t}]: ${this.message}`}constructor(){super(),Object.defineProperty(this,"message",{value:e.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${t}]`,this.stack,delete this.name}}}function K(t){let e="",n=t.length;const r="-"===t[0]?1:0;for(;n>=r+4;n-=3)e=`_${t.slice(n-3,n)}${e}`;return`${t.slice(0,n)}${e}`}function H(t,e,n,r,i,s){if(t>n||t<e){const r="bigint"==typeof e?"n":"";let i;throw i=s>3?0===e||e===BigInt(0)?`>= 0${r} and < 2${r} ** ${8*(s+1)}${r}`:`>= -(2${r} ** ${8*(s+1)-1}${r}) and < 2 ** ${8*(s+1)-1}${r}`:`>= ${e}${r} and <= ${n}${r}`,new q.ERR_OUT_OF_RANGE("value",i,t)}!function(t,e,n){z(e,"offset"),void 0!==t[e]&&void 0!==t[e+n]||G(e,t.length-(n+1))}(r,i,s)}function z(t,e){if("number"!=typeof t)throw new q.ERR_INVALID_ARG_TYPE(e,"number",t)}function G(t,e,n){if(Math.floor(t)!==t)throw z(t,n),new q.ERR_OUT_OF_RANGE(n||"offset","an integer",t);if(e<0)throw new q.ERR_BUFFER_OUT_OF_BOUNDS;throw new q.ERR_OUT_OF_RANGE(n||"offset",`>= ${n?1:0} and <= ${e}`,t)}$("ERR_BUFFER_OUT_OF_BOUNDS",(function(t){return t?`${t} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"}),RangeError),$("ERR_INVALID_ARG_TYPE",(function(t,e){return`The "${t}" argument must be of type number. Received type ${typeof e}`}),TypeError),$("ERR_OUT_OF_RANGE",(function(t,e,n){let r=`The value of "${t}" is out of range.`,i=n;return Number.isInteger(n)&&Math.abs(n)>2**32?i=K(String(n)):"bigint"==typeof n&&(i=String(n),(n>BigInt(2)**BigInt(32)||n<-(BigInt(2)**BigInt(32)))&&(i=K(i)),i+="n"),r+=` It must be ${e}. Received ${i}`,r}),RangeError);const Q=/[^+/0-9A-Za-z-_]/g;function W(t,e){let n;e=e||1/0;const r=t.length;let i=null;const s=[];for(let o=0;o<r;++o){if(n=t.charCodeAt(o),n>55295&&n<57344){if(!i){if(n>56319){(e-=3)>-1&&s.push(239,191,189);continue}if(o+1===r){(e-=3)>-1&&s.push(239,191,189);continue}i=n;continue}if(n<56320){(e-=3)>-1&&s.push(239,191,189),i=n;continue}n=65536+(i-55296<<10|n-56320)}else i&&(e-=3)>-1&&s.push(239,191,189);if(i=null,n<128){if((e-=1)<0)break;s.push(n)}else if(n<2048){if((e-=2)<0)break;s.push(n>>6|192,63&n|128)}else if(n<65536){if((e-=3)<0)break;s.push(n>>12|224,n>>6&63|128,63&n|128)}else{if(!(n<1114112))throw new Error("Invalid code point");if((e-=4)<0)break;s.push(n>>18|240,n>>12&63|128,n>>6&63|128,63&n|128)}}return s}function X(t){return o.toByteArray(function(t){if((t=(t=t.split("=")[0]).trim().replace(Q,"")).length<2)return"";for(;t.length%4!=0;)t+="=";return t}(t))}function Y(t,e,n,r){let i;for(i=0;i<r&&!(i+n>=e.length||i>=t.length);++i)e[i+n]=t[i];return i}function J(t,e){return t instanceof e||null!=t&&null!=t.constructor&&null!=t.constructor.name&&t.constructor.name===e.name}function Z(t){return t!=t}const tt=function(){const t="0123456789abcdef",e=new Array(256);for(let n=0;n<16;++n){const r=16*n;for(let i=0;i<16;++i)e[r+i]=t[n]+t[i]}return e}();function et(t){return"undefined"==typeof BigInt?nt:t}function nt(){throw new Error("BigInt not supported")}})),s.register("hqZtu",(function(e,n){var r,i;t(e.exports,"toByteArray",(function(){return r}),(function(t){return r=t})),t(e.exports,"fromByteArray",(function(){return i}),(function(t){return i=t})),r=function(t){var e,n,r=h(t),i=r[0],s=r[1],u=new a(function(t,e,n){return 3*(e+n)/4-n}(0,i,s)),c=0,l=s>0?i-4:i;for(n=0;n<l;n+=4)e=o[t.charCodeAt(n)]<<18|o[t.charCodeAt(n+1)]<<12|o[t.charCodeAt(n+2)]<<6|o[t.charCodeAt(n+3)],u[c++]=e>>16&255,u[c++]=e>>8&255,u[c++]=255&e;2===s&&(e=o[t.charCodeAt(n)]<<2|o[t.charCodeAt(n+1)]>>4,u[c++]=255&e);1===s&&(e=o[t.charCodeAt(n)]<<10|o[t.charCodeAt(n+1)]<<4|o[t.charCodeAt(n+2)]>>2,u[c++]=e>>8&255,u[c++]=255&e);return u},i=function(t){for(var e,n=t.length,r=n%3,i=[],o=16383,a=0,u=n-r;a<u;a+=o)i.push(f(t,a,a+o>u?u:a+o));1===r?(e=t[n-1],i.push(s[e>>2]+s[e<<4&63]+"==")):2===r&&(e=(t[n-2]<<8)+t[n-1],i.push(s[e>>10]+s[e>>4&63]+s[e<<2&63]+"="));return i.join("")};for(var s=[],o=[],a="undefined"!=typeof Uint8Array?Uint8Array:Array,u="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",c=0,l=u.length;c<l;++c)s[c]=u[c],o[u.charCodeAt(c)]=c;function h(t){var e=t.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var n=t.indexOf("=");return-1===n&&(n=e),[n,n===e?0:4-n%4]}function f(t,e,n){for(var r,i,o=[],a=e;a<n;a+=3)r=(t[a]<<16&16711680)+(t[a+1]<<8&65280)+(255&t[a+2]),o.push(s[(i=r)>>18&63]+s[i>>12&63]+s[i>>6&63]+s[63&i]);return o.join("")}o["-".charCodeAt(0)]=62,o["_".charCodeAt(0)]=63})),s.register("5WQj6",(function(e,n){
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */var r,i;t(e.exports,"read",(function(){return r}),(function(t){return r=t})),t(e.exports,"write",(function(){return i}),(function(t){return i=t})),r=function(t,e,n,r,i){var s,o,a=8*i-r-1,u=(1<<a)-1,c=u>>1,l=-7,h=n?i-1:0,f=n?-1:1,d=t[e+h];for(h+=f,s=d&(1<<-l)-1,d>>=-l,l+=a;l>0;s=256*s+t[e+h],h+=f,l-=8);for(o=s&(1<<-l)-1,s>>=-l,l+=r;l>0;o=256*o+t[e+h],h+=f,l-=8);if(0===s)s=1-c;else{if(s===u)return o?NaN:1/0*(d?-1:1);o+=Math.pow(2,r),s-=c}return(d?-1:1)*o*Math.pow(2,s-r)},i=function(t,e,n,r,i,s){var o,a,u,c=8*s-i-1,l=(1<<c)-1,h=l>>1,f=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,d=r?0:s-1,p=r?1:-1,g=e<0||0===e&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(a=isNaN(e)?1:0,o=l):(o=Math.floor(Math.log(e)/Math.LN2),e*(u=Math.pow(2,-o))<1&&(o--,u*=2),(e+=o+h>=1?f/u:f*Math.pow(2,1-h))*u>=2&&(o++,u/=2),o+h>=l?(a=0,o=l):o+h>=1?(a=(e*u-1)*Math.pow(2,i),o+=h):(a=e*Math.pow(2,h-1)*Math.pow(2,i),o=0));i>=8;t[n+d]=255&a,d+=p,a/=256,i-=8);for(o=o<<i|a,c+=i;c>0;t[n+d]=255&o,d+=p,o/=256,c-=8);t[n+d-p]|=128*g}})),s.register("5Dm7L",(function(e,n){t(e.exports,"default",(function(){return i}));var r=s("2bBga");var i=class{use(t,e,n){return this.handlers.push({fulfilled:t,rejected:e,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){r.default.forEach(this.handlers,(function(e){null!==e&&t(e)}))}constructor(){this.handlers=[]}}})),s.register("eQ5d8",(function(e,n){t(e.exports,"default",(function(){return l}));var r=s("bhEpd"),i=s("ksuZT"),o=s("hqlPG"),a=s("83xK9"),u=s("gbTL1");function c(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new(0,a.default)}function l(t){c(t),t.headers=u.default.from(t.headers),t.data=r.default.call(t,t.transformRequest);return(t.adapter||o.default.adapter)(t).then((function(e){return c(t),e.data=r.default.call(t,t.transformResponse,e),e.headers=u.default.from(e.headers),e}),(function(e){return(0,i.default)(e)||(c(t),e&&e.response&&(e.response.data=r.default.call(t,t.transformResponse,e.response),e.response.headers=u.default.from(e.response.headers))),Promise.reject(e)}))}})),s.register("bhEpd",(function(e,n){t(e.exports,"default",(function(){return a}));var r=s("2bBga"),i=s("hqlPG"),o=s("gbTL1");function a(t,e){const n=this||i.default,s=e||n,a=o.default.from(s.headers);let u=s.data;return r.default.forEach(t,(function(t){u=t.call(n,u,a.normalize(),e?e.status:void 0)})),a.normalize(),u}})),s.register("hqlPG",(function(e,n){t(e.exports,"default",(function(){return g}));var r=s("2bBga"),i=s("121rJ"),o=s("2wfLM"),a=s("aewVa"),u=s("5tcKT");s("d5Oi9");var c=s("hdo0R"),l=s("4bmvb"),h=s("j5sbT"),f=s("4TNnu");const d={"Content-Type":"application/x-www-form-urlencoded"};const p={transitional:o.default,adapter:function(){let t;return"undefined"!=typeof XMLHttpRequest?t=h.default.getAdapter("xhr"):void 0!==f&&"process"===r.default.kindOf(f)&&(t=h.default.getAdapter("http")),t}(),transformRequest:[function(t,e){const n=e.getContentType()||"",i=n.indexOf("application/json")>-1,s=r.default.isObject(t);s&&r.default.isHTMLForm(t)&&(t=new FormData(t));if(r.default.isFormData(t))return i&&i?JSON.stringify((0,l.default)(t)):t;if(r.default.isArrayBuffer(t)||r.default.isBuffer(t)||r.default.isStream(t)||r.default.isFile(t)||r.default.isBlob(t))return t;if(r.default.isArrayBufferView(t))return t.buffer;if(r.default.isURLSearchParams(t))return e.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let o;if(s){if(n.indexOf("application/x-www-form-urlencoded")>-1)return(0,u.default)(t,this.formSerializer).toString();if((o=r.default.isFileList(t))||n.indexOf("multipart/form-data")>-1){const e=this.env&&this.env.FormData;return(0,a.default)(o?{"files[]":t}:t,e&&new e,this.formSerializer)}}return s||i?(e.setContentType("application/json",!1),function(t,e,n){if(r.default.isString(t))try{return(e||JSON.parse)(t),r.default.trim(t)}catch(t){if("SyntaxError"!==t.name)throw t}return(n||JSON.stringify)(t)}(t)):t}],transformResponse:[function(t){const e=this.transitional||p.transitional,n=e&&e.forcedJSONParsing,s="json"===this.responseType;if(t&&r.default.isString(t)&&(n&&!this.responseType||s)){const n=!(e&&e.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(t){if(n){if("SyntaxError"===t.name)throw i.default.from(t,i.default.ERR_BAD_RESPONSE,this,null,this.response);throw t}}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:c.default.classes.FormData,Blob:c.default.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};r.default.forEach(["delete","get","head"],(function(t){p.headers[t]={}})),r.default.forEach(["post","put","patch"],(function(t){p.headers[t]=r.default.merge(d)}));var g=p})),s.register("2wfLM",(function(e,n){t(e.exports,"default",(function(){return r}));var r={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1}})),s.register("5tcKT",(function(e,n){t(e.exports,"default",(function(){return a}));var r=s("2bBga"),i=s("aewVa");s("d5Oi9");var o=s("hdo0R");function a(t,e){return(0,i.default)(t,new o.default.classes.URLSearchParams,Object.assign({visitor:function(t,e,n,i){return o.default.isNode&&r.default.isBuffer(t)?(this.append(e,t.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},e))}})),s.register("d5Oi9",(function(e,n){t(e.exports,"default",(function(){return s("hdo0R").default}));s("hdo0R")})),s.register("hdo0R",(function(e,n){t(e.exports,"default",(function(){return a}));var r=s("9matH"),i=s("eN04z");const o=(()=>{let t;return("undefined"==typeof navigator||"ReactNative"!==(t=navigator.product)&&"NativeScript"!==t&&"NS"!==t)&&("undefined"!=typeof window&&"undefined"!=typeof document)})();var a={isBrowser:!0,classes:{URLSearchParams:r.default,FormData:i.default,Blob:Blob},isStandardBrowserEnv:o,protocols:["http","https","file","blob","url","data"]}})),s.register("9matH",(function(e,n){t(e.exports,"default",(function(){return i}));var r=s("hz3Ym"),i="undefined"!=typeof URLSearchParams?URLSearchParams:r.default})),s.register("eN04z",(function(e,n){t(e.exports,"default",(function(){return r}));var r=FormData})),s.register("4bmvb",(function(e,n){t(e.exports,"default",(function(){return i}));var r=s("2bBga");var i=function(t){function e(t,n,i,s){let o=t[s++];const a=Number.isFinite(+o),u=s>=t.length;if(o=!o&&r.default.isArray(i)?i.length:o,u)return r.default.hasOwnProp(i,o)?i[o]=[i[o],n]:i[o]=n,!a;i[o]&&r.default.isObject(i[o])||(i[o]=[]);return e(t,n,i[o],s)&&r.default.isArray(i[o])&&(i[o]=function(t){const e={},n=Object.keys(t);let r;const i=n.length;let s;for(r=0;r<i;r++)s=n[r],e[s]=t[s];return e}(i[o])),!a}if(r.default.isFormData(t)&&r.default.isFunction(t.entries)){const n={};return r.default.forEachEntry(t,((t,i)=>{e(function(t){return r.default.matchAll(/\w+|\[(\w*)]/g,t).map((t=>"[]"===t[0]?"":t[1]||t[0]))}(t),i,n,0)})),n}return null}})),s.register("j5sbT",(function(e,n){t(e.exports,"default",(function(){return a}));var r=s("2bBga"),i=s("9VVcb");const o={http:(i=s("9VVcb")).default,xhr:i.default};var a={getAdapter:t=>{if(r.default.isString(t)){const e=o[t];if(!t)throw Error(r.default.hasOwnProp(t)?`Adapter '${t}' is not available in the build`:`Can not resolve adapter '${t}'`);return e}if(!r.default.isFunction(t))throw new TypeError("adapter is not a function");return t},adapters:o}})),s.register("9VVcb",(function(e,n){t(e.exports,"default",(function(){return v}));var r=s("2bBga"),i=s("1TQad"),o=s("kTwUV"),a=s("2RNjJ"),u=s("1ZTQa"),c=s("g3yOT"),l=s("2wfLM"),h=s("121rJ"),f=s("83xK9"),d=s("8wMQb");s("d5Oi9");var p=s("hdo0R"),g=s("gbTL1"),m=s("5OiBb");function y(t,e){let n=0;const r=(0,m.default)(50,250);return i=>{const s=i.loaded,o=i.lengthComputable?i.total:void 0,a=s-n,u=r(a);n=s;const c={loaded:s,total:o,progress:o?s/o:void 0,bytes:a,rate:u||void 0,estimated:u&&o&&s<=o?(o-s)/u:void 0};c[e?"download":"upload"]=!0,t(c)}}function v(t){return new Promise((function(e,n){let s=t.data;const m=g.default.from(t.headers).normalize(),v=t.responseType;let w;function E(){t.cancelToken&&t.cancelToken.unsubscribe(w),t.signal&&t.signal.removeEventListener("abort",w)}r.default.isFormData(s)&&p.default.isStandardBrowserEnv&&m.setContentType(!1);let b=new XMLHttpRequest;if(t.auth){const e=t.auth.username||"",n=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";m.set("Authorization","Basic "+btoa(e+":"+n))}const T=(0,u.default)(t.baseURL,t.url);function I(){if(!b)return;const r=g.default.from("getAllResponseHeaders"in b&&b.getAllResponseHeaders()),s={data:v&&"text"!==v&&"json"!==v?b.response:b.responseText,status:b.status,statusText:b.statusText,headers:r,config:t,request:b};(0,i.default)((function(t){e(t),E()}),(function(t){n(t),E()}),s),b=null}if(b.open(t.method.toUpperCase(),(0,a.default)(T,t.params,t.paramsSerializer),!0),b.timeout=t.timeout,"onloadend"in b?b.onloadend=I:b.onreadystatechange=function(){b&&4===b.readyState&&(0!==b.status||b.responseURL&&0===b.responseURL.indexOf("file:"))&&setTimeout(I)},b.onabort=function(){b&&(n(new(0,h.default)("Request aborted",h.default.ECONNABORTED,t,b)),b=null)},b.onerror=function(){n(new(0,h.default)("Network Error",h.default.ERR_NETWORK,t,b)),b=null},b.ontimeout=function(){let e=t.timeout?"timeout of "+t.timeout+"ms exceeded":"timeout exceeded";const r=t.transitional||l.default;t.timeoutErrorMessage&&(e=t.timeoutErrorMessage),n(new(0,h.default)(e,r.clarifyTimeoutError?h.default.ETIMEDOUT:h.default.ECONNABORTED,t,b)),b=null},p.default.isStandardBrowserEnv){const e=(t.withCredentials||(0,c.default)(T))&&t.xsrfCookieName&&o.default.read(t.xsrfCookieName);e&&m.set(t.xsrfHeaderName,e)}void 0===s&&m.setContentType(null),"setRequestHeader"in b&&r.default.forEach(m.toJSON(),(function(t,e){b.setRequestHeader(e,t)})),r.default.isUndefined(t.withCredentials)||(b.withCredentials=!!t.withCredentials),v&&"json"!==v&&(b.responseType=t.responseType),"function"==typeof t.onDownloadProgress&&b.addEventListener("progress",y(t.onDownloadProgress,!0)),"function"==typeof t.onUploadProgress&&b.upload&&b.upload.addEventListener("progress",y(t.onUploadProgress)),(t.cancelToken||t.signal)&&(w=e=>{b&&(n(!e||e.type?new(0,f.default)(null,t,b):e),b.abort(),b=null)},t.cancelToken&&t.cancelToken.subscribe(w),t.signal&&(t.signal.aborted?w():t.signal.addEventListener("abort",w)));const S=(0,d.default)(T);S&&-1===p.default.protocols.indexOf(S)?n(new(0,h.default)("Unsupported protocol "+S+":",h.default.ERR_BAD_REQUEST,t)):b.send(s||null)}))}})),s.register("1TQad",(function(e,n){t(e.exports,"default",(function(){return i}));var r=s("121rJ");function i(t,e,n){const i=n.config.validateStatus;n.status&&i&&!i(n.status)?e(new(0,r.default)("Request failed with status code "+n.status,[r.default.ERR_BAD_REQUEST,r.default.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):t(n)}})),s.register("kTwUV",(function(e,n){t(e.exports,"default",(function(){return i}));var r=s("2bBga");s("d5Oi9");var i=s("hdo0R").default.isStandardBrowserEnv?{write:function(t,e,n,i,s,o){const a=[];a.push(t+"="+encodeURIComponent(e)),r.default.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),r.default.isString(i)&&a.push("path="+i),r.default.isString(s)&&a.push("domain="+s),!0===o&&a.push("secure"),document.cookie=a.join("; ")},read:function(t){const e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}})),s.register("1ZTQa",(function(e,n){t(e.exports,"default",(function(){return o}));var r=s("iUwU6"),i=s("91vFE");function o(t,e){return t&&!(0,r.default)(e)?(0,i.default)(t,e):e}})),s.register("iUwU6",(function(e,n){function r(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}t(e.exports,"default",(function(){return r}))})),s.register("91vFE",(function(e,n){function r(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}t(e.exports,"default",(function(){return r}))})),s.register("g3yOT",(function(e,n){t(e.exports,"default",(function(){return i}));var r=s("2bBga");s("d5Oi9");var i=s("hdo0R").default.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),e=document.createElement("a");let n;function i(n){let r=n;return t&&(e.setAttribute("href",r),r=e.href),e.setAttribute("href",r),{href:e.href,protocol:e.protocol?e.protocol.replace(/:$/,""):"",host:e.host,search:e.search?e.search.replace(/^\?/,""):"",hash:e.hash?e.hash.replace(/^#/,""):"",hostname:e.hostname,port:e.port,pathname:"/"===e.pathname.charAt(0)?e.pathname:"/"+e.pathname}}return n=i(window.location.href),function(t){const e=r.default.isString(t)?i(t):t;return e.protocol===n.protocol&&e.host===n.host}}():function(){return!0}})),s.register("83xK9",(function(e,n){t(e.exports,"default",(function(){return o}));var r=s("121rJ");function i(t,e,n){r.default.call(this,null==t?"canceled":t,r.default.ERR_CANCELED,e,n),this.name="CanceledError"}s("2bBga").default.inherits(i,r.default,{__CANCEL__:!0});var o=i})),s.register("8wMQb",(function(e,n){function r(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}t(e.exports,"default",(function(){return r}))})),s.register("gbTL1",(function(e,n){t(e.exports,"default",(function(){return d}));var r=s("2bBga"),i=s("9cPEm");const o=Symbol("internals"),a=Symbol("defaults");function u(t){return t&&String(t).trim().toLowerCase()}function c(t){return!1===t||null==t?t:r.default.isArray(t)?t.map(c):String(t)}function l(t,e,n,i){return r.default.isFunction(i)?i.call(this,e,n):r.default.isString(e)?r.default.isString(i)?-1!==e.indexOf(i):r.default.isRegExp(i)?i.test(e):void 0:void 0}function h(t,e){e=e.toLowerCase();const n=Object.keys(t);let r,i=n.length;for(;i-- >0;)if(r=n[i],e===r.toLowerCase())return r;return null}function f(t,e){t&&this.set(t),this[a]=e||null}Object.assign(f.prototype,{set:function(t,e,n){const i=this;function s(t,e,n){const r=u(e);if(!r)throw new Error("header name must be a non-empty string");const s=h(i,r);(!s||!0===n||!1!==i[s]&&!1!==n)&&(i[s||e]=c(t))}return r.default.isPlainObject(t)?r.default.forEach(t,((t,n)=>{s(t,n,e)})):s(e,t,n),this},get:function(t,e){if(!(t=u(t)))return;const n=h(this,t);if(n){const t=this[n];if(!e)return t;if(!0===e)return function(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(t);)e[r[1]]=r[2];return e}(t);if(r.default.isFunction(e))return e.call(this,t,n);if(r.default.isRegExp(e))return e.exec(t);throw new TypeError("parser must be boolean|regexp|function")}},has:function(t,e){if(t=u(t)){const n=h(this,t);return!(!n||e&&!l(0,this[n],n,e))}return!1},delete:function(t,e){const n=this;let i=!1;function s(t){if(t=u(t)){const r=h(n,t);!r||e&&!l(0,n[r],r,e)||(delete n[r],i=!0)}}return r.default.isArray(t)?t.forEach(s):s(t),i},clear:function(){return Object.keys(this).forEach(this.delete.bind(this))},normalize:function(t){const e=this,n={};return r.default.forEach(this,((r,i)=>{const s=h(n,i);if(s)return e[s]=c(r),void delete e[i];const o=t?function(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((t,e,n)=>e.toUpperCase()+n))}(i):String(i).trim();o!==i&&delete e[i],e[o]=c(r),n[o]=!0})),this},toJSON:function(t){const e=Object.create(null);return r.default.forEach(Object.assign({},this[a]||null,this),((n,i)=>{null!=n&&!1!==n&&(e[i]=t&&r.default.isArray(n)?n.join(", "):n)})),e}}),Object.assign(f,{from:function(t){return r.default.isString(t)?new this((0,i.default)(t)):t instanceof this?t:new this(t)},accessor:function(t){const e=(this[o]=this[o]={accessors:{}}).accessors,n=this.prototype;function i(t){const i=u(t);e[i]||(!function(t,e){const n=r.default.toCamelCase(" "+e);["get","set","has"].forEach((r=>{Object.defineProperty(t,r+n,{value:function(t,n,i){return this[r].call(this,e,t,n,i)},configurable:!0})}))}(n,t),e[i]=!0)}return r.default.isArray(t)?t.forEach(i):i(t),this}}),f.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent"]),r.default.freezeMethods(f.prototype),r.default.freezeMethods(f);var d=f})),s.register("9cPEm",(function(e,n){t(e.exports,"default",(function(){return i}));const r=s("2bBga").default.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);var i=t=>{const e={};let n,i,s;return t&&t.split("\n").forEach((function(t){s=t.indexOf(":"),n=t.substring(0,s).trim().toLowerCase(),i=t.substring(s+1).trim(),!n||e[n]&&r[n]||("set-cookie"===n?e[n]?e[n].push(i):e[n]=[i]:e[n]=e[n]?e[n]+", "+i:i)})),e}})),s.register("5OiBb",(function(e,n){t(e.exports,"default",(function(){return r}));var r=function(t,e){t=t||10;const n=new Array(t),r=new Array(t);let i,s=0,o=0;return e=void 0!==e?e:1e3,function(a){const u=Date.now(),c=r[o];i||(i=u),n[s]=a,r[s]=u;let l=o,h=0;for(;l!==s;)h+=n[l++],l%=t;if(s=(s+1)%t,s===o&&(o=(o+1)%t),u-i<e)return;const f=c&&u-c;return f?Math.round(1e3*h/f):void 0}}})),s.register("4TNnu",(function(t,e){var n,r,i=t.exports={};function s(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function a(t){if(n===setTimeout)return setTimeout(t,0);if((n===s||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:s}catch(t){n=s}try{r="function"==typeof clearTimeout?clearTimeout:o}catch(t){r=o}}();var u,c=[],l=!1,h=-1;function f(){l&&u&&(l=!1,u.length?c=u.concat(c):h=-1,c.length&&d())}function d(){if(!l){var t=a(f);l=!0;for(var e=c.length;e;){for(u=c,c=[];++h<e;)u&&u[h].run();h=-1,e=c.length}u=null,l=!1,function(t){if(r===clearTimeout)return clearTimeout(t);if((r===o||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(t);try{r(t)}catch(e){try{return r.call(null,t)}catch(e){return r.call(this,t)}}}(t)}}function p(t,e){this.fun=t,this.array=e}function g(){}i.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];c.push(new p(t,e)),1!==c.length||l||a(d)},p.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=g,i.addListener=g,i.once=g,i.off=g,i.removeListener=g,i.removeAllListeners=g,i.emit=g,i.prependListener=g,i.prependOnceListener=g,i.listeners=function(t){return[]},i.binding=function(t){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(t){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}})),s.register("ksuZT",(function(e,n){function r(t){return!(!t||!t.__CANCEL__)}t(e.exports,"default",(function(){return r}))})),s.register("d0EKm",(function(e,n){t(e.exports,"default",(function(){return i}));var r=s("2bBga");function i(t,e){e=e||{};const n={};function i(t,e){return r.default.isPlainObject(t)&&r.default.isPlainObject(e)?r.default.merge(t,e):r.default.isPlainObject(e)?r.default.merge({},e):r.default.isArray(e)?e.slice():e}function s(n){return r.default.isUndefined(e[n])?r.default.isUndefined(t[n])?void 0:i(void 0,t[n]):i(t[n],e[n])}function o(t){if(!r.default.isUndefined(e[t]))return i(void 0,e[t])}function a(n){return r.default.isUndefined(e[n])?r.default.isUndefined(t[n])?void 0:i(void 0,t[n]):i(void 0,e[n])}function u(n){return n in e?i(t[n],e[n]):n in t?i(void 0,t[n]):void 0}const c={url:o,method:o,data:o,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:u};return r.default.forEach(Object.keys(t).concat(Object.keys(e)),(function(t){const e=c[t]||s,i=e(t);r.default.isUndefined(i)&&e!==u||(n[t]=i)})),n}})),s.register("6zj0X",(function(e,n){t(e.exports,"default",(function(){return u}));var r=s("50GW0"),i=s("121rJ");const o={};["object","boolean","number","function","string","symbol"].forEach(((t,e)=>{o[t]=function(n){return typeof n===t||"a"+(e<1?"n ":" ")+t}}));const a={};o.transitional=function(t,e,n){function s(t,e){return"[Axios v"+r.VERSION+"] Transitional option '"+t+"'"+e+(n?". "+n:"")}return(n,r,o)=>{if(!1===t)throw new(0,i.default)(s(r," has been removed"+(e?" in "+e:"")),i.default.ERR_DEPRECATED);return e&&!a[r]&&(a[r]=!0,console.warn(s(r," has been deprecated since v"+e+" and will be removed in the near future"))),!t||t(n,r,o)}};var u={assertOptions:function(t,e,n){if("object"!=typeof t)throw new(0,i.default)("options must be an object",i.default.ERR_BAD_OPTION_VALUE);const r=Object.keys(t);let s=r.length;for(;s-- >0;){const o=r[s],a=e[o];if(a){const e=t[o],n=void 0===e||a(e,o,t);if(!0!==n)throw new(0,i.default)("option "+o+" must be "+n,i.default.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new(0,i.default)("Unknown option "+o,i.default.ERR_BAD_OPTION)}},validators:o}})),s.register("50GW0",(function(e,n){t(e.exports,"VERSION",(function(){return r}));const r="1.1.3"})),s.register("2sjhC",(function(e,n){t(e.exports,"default",(function(){return o}));var r=s("83xK9");class i{throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){this.reason?t(this.reason):this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const e=this._listeners.indexOf(t);-1!==e&&this._listeners.splice(e,1)}static source(){let t;return{token:new i((function(e){t=e})),cancel:t}}constructor(t){if("function"!=typeof t)throw new TypeError("executor must be a function.");let e;this.promise=new Promise((function(t){e=t}));const n=this;this.promise.then((t=>{if(!n._listeners)return;let e=n._listeners.length;for(;e-- >0;)n._listeners[e](t);n._listeners=null})),this.promise.then=t=>{let e;const r=new Promise((t=>{n.subscribe(t),e=t})).then(t);return r.cancel=function(){n.unsubscribe(e)},r},t((function(t,i,s){n.reason||(n.reason=new(0,r.default)(t,i,s),e(n.reason))}))}}var o=i})),s.register("av9gA",(function(e,n){function r(t){return function(e){return t.apply(null,e)}}t(e.exports,"default",(function(){return r}))})),s.register("gNhGc",(function(e,n){t(e.exports,"default",(function(){return i}));var r=s("2bBga");function i(t){return r.default.isObject(t)&&!0===t.isAxiosError}})),s.register("3ILHO",(function(e,n){t(e.exports,"refs",(function(){return r}));const r={mainContainer:document.querySelector(".movie-gallery"),libraryContainer:document.querySelector(".library__movie-gallery"),movieCard:document.getElementsByClassName("movie-card"),pagination:document.querySelector(".pagination"),form:document.querySelector(".form"),formAlert:document.querySelector(".form__alert"),modalInfo:document.querySelector(".modal"),backdrop:document.querySelector(".backdrop"),buttonCloseModal:document.querySelector("[data-modal-close]"),addWatchedBtn:document.querySelector('[data-value="watched"]'),addQueueBtn:document.querySelector('[data-value="queue"]'),getWatchedDataBtn:document.querySelector('.button-js[data-value="watched"]'),getQueueDataBtn:document.querySelector('.button-js[data-value="queue"]')}})),s.register("f6eBG",(function(e,n){t(e.exports,"ALT_IMAGE_URL",(function(){return i})),t(e.exports,"IMAGES_URL",(function(){return o})),t(e.exports,"renderCards",(function(){return a})),t(e.exports,"insertMarkup",(function(){return u}));var r=s("ed1K5");const i="https://www.csaff.org/wp-content/uploads/csaff-no-poster.jpg",o="https://image.tmdb.org/t/p/w500";async function a(t){try{const e=await(0,r.fetchGenres)();if(200!==e.status)throw new Error(e.status);if(void 0===e.data)throw new Error(e.data,"undefined");return t.results.reduce(((t,{poster_path:n,title:r,genre_ids:s="haven't genres",vote_average:a,name:u,id:c})=>{const l=e.data.genres.reduce(((t,e)=>(s.includes(e.id)&&t.push(e.name),t)),[]);return t+=`<li class="movie-card"  data-id='${c}'>\n  <img src='${n=void 0===n||"object"==typeof n?i:o+n}' loading='lazy'/>\n  <h3 class="movie-card__name">${r.toUpperCase()||u.toUpperCase()}</h3>\n  <p class="movie-card__genres">\n    ${0===l.length?"haven't genre":l.join(", ")} <span class="movie-card__ratio">${a?a.toFixed(1):"haven't ratio"}</span>\n  </p>\n</li>`}),"")}catch(t){console.log(t)}}function u(t,e){return t.innerHTML=e}})),s.register("fNqig",(function(e,n){t(e.exports,"showInfo",(function(){return l}));var r=s("3ILHO"),i=s("ed1K5"),o=s("f6eBG"),a=s("kThre");s("83ZX7");var u=s("3PjDZ");const c={img:r.refs.modalInfo.querySelector(".modal__img-wrapper img"),originalTitle:r.refs.modalInfo.querySelector(".modal__title"),ratio:r.refs.modalInfo.querySelector('.modal__ratio-info-list [data-value="ratio"]'),popularity:r.refs.modalInfo.querySelector('.modal__ratio-info-list [data-value="popularity"]'),refTitle:r.refs.modalInfo.querySelector('.modal__ratio-info-list [data-value="original-title"]'),genres:r.refs.modalInfo.querySelector('.modal__ratio-info-list [data-value="genre"]'),infoFilm:document.querySelector(".modal__full-info")};async function l(t){t.preventDefault();const{target:e,currentTarget:n}=t;if(e===n)return;const s=e.closest("li").getAttribute("data-id");if(!s)return;const l=await(0,i.fetchInfoMovieById)(s);if(null==l)return;const{title:d,name:p,vote_average:g,vote_count:m,popularity:y,overview:v,genres:w,poster_path:E}=l.data;c.img.src=o.IMAGES_URL+E||o.ALT_IMAGE_URL,c.originalTitle.textContent=d.toUpperCase()||p.toUpperCase(),c.ratio.firstElementChild.textContent=g?g.toFixed(1):"haven't ratio",c.ratio.lastElementChild.textContent=m||"",c.popularity.textContent=y?y.toFixed(1):"",c.refTitle.textContent=d.toUpperCase()||p.toUpperCase(),c.genres.textContent=w.map((t=>t.name)).join(", "),c.infoFilm.textContent=v||"haven't overview",r.refs.buttonCloseModal.addEventListener("click",h),r.refs.backdrop.addEventListener("click",f),r.refs.backdrop.classList.remove("is-hidden"),document.body.classList.add("no-scroll"),r.refs.addWatchedBtn.addEventListener("click",(()=>{(0,u.addDoc)(a.colRefWatched,l.data)})),r.refs.addQueueBtn.addEventListener("click",(()=>{(0,u.addDoc)(a.colRefQueue,l.data)})),window.addEventListener("keydown",f)}function h(t){r.refs.buttonCloseModal.removeEventListener("click",h),r.refs.backdrop.removeEventListener("click",h),d(),window.removeEventListener("keydown",f)}function f(t){const{target:e,currentTarget:n,code:r}=t;e===n&&d(),"Escape"===r&&d(),window.removeEventListener("keydown",f)}function d(){r.refs.backdrop.classList.add("is-hidden"),document.body.classList.remove("no-scroll"),c.img.src="#"}})),s.register("kThre",(function(e,n){t(e.exports,"colRefWatched",(function(){return l})),t(e.exports,"colRefQueue",(function(){return h})),s("25RCP");var r=s("ix4Jr");s("83ZX7");var i=s("3PjDZ"),o=s("3ILHO"),a=s("f6eBG");const u=(0,r.initializeApp)({apiKey:"AIzaSyCebWfsV7NOjyL02i7fSXE4AU5yFpXdziw",authDomain:"filmoteka-6b0fa.firebaseapp.com",projectId:"filmoteka-6b0fa",storageBucket:"filmoteka-6b0fa.appspot.com",messagingSenderId:"761691286246",appId:"1:761691286246:web:7601ab645d132396eb6927"}),c=(0,i.getFirestore)(u),l=(0,i.collection)(c,"watched/"),h=(0,i.collection)(c,"queue/");function f(t){return t.reduce(((e,{poster_path:n,title:r,genre_ids:i="haven't genres",vote_average:s,name:o,id:u},c)=>{const l=t[c].genres.map((t=>t.name));return e+=`<li class="movie-card"  data-id='${u}'>\n  <img src='${n=void 0===n||"object"==typeof n?a.ALT_IMAGE_URL:"https://image.tmdb.org/t/p/w500/"+n}' loading='lazy'/>\n  <h3 class="movie-card__name">${r.toUpperCase()||o.toUpperCase()}</h3>\n  <p class="movie-card__genres">\n    ${l} <span class="movie-card__ratio">${s?s.toFixed(1):"haven't ratio"}</span>\n  </p>\n</li>`}),"")}"Filmoteka Library"===document.title&&(o.refs.getWatchedDataBtn.addEventListener("click",(()=>{(0,i.getDocs)(l).then((async t=>{let e=[];return t.docs.forEach((t=>{e.push({...t.data(),baseId:t.id})})),e})).then((async t=>{console.log("watched",t),0===t.length&&console.log("empty 3:"),o.refs.libraryContainer.innerHTML=await f(t)})).catch((t=>{console.log(t)}))})),o.refs.getQueueDataBtn.addEventListener("click",(()=>{(0,i.getDocs)(h).then((t=>{let e=[];return t.docs.forEach((t=>{e.push({...t.data(),baseId:t.id})})),e})).then((async t=>{console.log("queue",t),0===t.length&&console.log("empty 3:"),o.refs.libraryContainer.innerHTML=await f(t)})).catch((t=>{console.log(t)}))})))})),s.register("25RCP",(function(e,n){t(e.exports,"initializeApp",(function(){return s("ix4Jr").initializeApp})),t(e.exports,"registerVersion",(function(){return s("ix4Jr").registerVersion}));s("ix4Jr");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,s("ix4Jr").registerVersion)("firebase","9.14.0","app")})),s.register("ix4Jr",(function(e,n){t(e.exports,"_registerComponent",(function(){return y})),t(e.exports,"_getProvider",(function(){return v})),t(e.exports,"_removeServiceInstance",(function(){return w})),t(e.exports,"SDK_VERSION",(function(){return I})),t(e.exports,"initializeApp",(function(){return S})),t(e.exports,"getApp",(function(){return C})),t(e.exports,"registerVersion",(function(){return A}));var r=s("4a6xH"),i=s("7vF8m"),o=s("ffjl9"),a=s("cCiiD");o=s("ffjl9");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class u{getPlatformInfoString(){return this.container.getProviders().map((t=>{if(function(t){const e=t.getComponent();return"VERSION"===(null==e?void 0:e.type)}(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}constructor(t){this.container=t}}const c="@firebase/app",l="0.8.4",h=new(0,i.Logger)("@firebase/app"),f="[DEFAULT]",d={[c]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},p=new Map,g=new Map;function m(t,e){try{t.container.addComponent(e)}catch(n){h.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function y(t){const e=t.name;if(g.has(e))return h.debug(`There were multiple attempts to register component ${e}.`),!1;g.set(e,t);for(const e of p.values())m(e,t);return!0}function v(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function w(t,e,n="[DEFAULT]"){v(t,e).clearInstance(n)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const E={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},b=new(0,o.ErrorFactory)("app","Firebase",E);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class T{get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw b.create("app-deleted",{appName:this._name})}constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new(0,r.Component)("app",(()=>this),"PUBLIC"))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I="9.14.0";function S(t,e={}){let n=t;if("object"!=typeof e){e={name:e}}const i=Object.assign({name:f,automaticDataCollectionEnabled:!1},e),s=i.name;if("string"!=typeof s||!s)throw b.create("bad-app-name",{appName:String(s)});if(n||(n=(0,o.getDefaultAppConfig)()),!n)throw b.create("no-options");const a=p.get(s);if(a){if((0,o.deepEqual)(n,a.options)&&(0,o.deepEqual)(i,a.config))return a;throw b.create("duplicate-app",{appName:s})}const u=new(0,r.ComponentContainer)(s);for(const t of g.values())u.addComponent(t);const c=new T(n,i,u);return p.set(s,c),c}function C(t="[DEFAULT]"){const e=p.get(t);if(!e&&t===f)return S();if(!e)throw b.create("no-app",{appName:t});return e}function A(t,e,n){var i;let s=null!==(i=d[t])&&void 0!==i?i:t;n&&(s+=`-${n}`);const o=s.match(/\s|\//),a=e.match(/\s|\//);if(o||a){const t=[`Unable to register library "${s}" with version "${e}":`];return o&&t.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&t.push("and"),a&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void h.warn(t.join(" "))}y(new(0,r.Component)(`${s}-version`,(()=>({library:s,version:e})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const _="firebase-heartbeat-store";let D=null;function x(){return D||(D=(0,a.openDB)("firebase-heartbeat-database",1,{upgrade:(t,e)=>{if(0===e)t.createObjectStore(_)}}).catch((t=>{throw b.create("idb-open",{originalErrorMessage:t.message})}))),D}async function N(t,e){var n;try{const n=(await x()).transaction(_,"readwrite"),r=n.objectStore(_);return await r.put(e,k(t)),n.done}catch(t){if(t instanceof o.FirebaseError)h.warn(t.message);else{const e=b.create("idb-set",{originalErrorMessage:null===(n=t)||void 0===n?void 0:n.message});h.warn(e.message)}}}function k(t){return`${t.name}!${t.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),e=L();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==e&&!this._heartbeatsCache.heartbeats.some((t=>t.date===e)))return this._heartbeatsCache.heartbeats.push({date:e,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((t=>{const e=new Date(t.date).valueOf();return Date.now()-e<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const t=L(),{heartbeatsToSend:e,unsentEntries:n}=function(t,e=1024){const n=[];let r=t.slice();for(const i of t){const t=n.find((t=>t.agent===i.agent));if(t){if(t.dates.push(i.date),M(n)>e){t.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),M(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),r=(0,o.base64urlEncodeWithoutPadding)(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new O(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}}function L(){return(new Date).toISOString().substring(0,10)}class O{async runIndexedDBEnvironmentCheck(){return!!(0,o.isIndexedDBAvailable)()&&(0,o.validateIndexedDBOpenable)().then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){return await async function(t){var e;try{return(await x()).transaction(_).objectStore(_).get(k(t))}catch(t){if(t instanceof o.FirebaseError)h.warn(t.message);else{const n=b.create("idb-get",{originalErrorMessage:null===(e=t)||void 0===e?void 0:e.message});h.warn(n.message)}}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const n=await this.read();return N(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;if(await this._canUseIndexedDBPromise){const n=await this.read();return N(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}}function M(t){return(0,o.base64urlEncodeWithoutPadding)(JSON.stringify({version:2,heartbeats:t})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var U;U="",y(new(0,r.Component)("platform-logger",(t=>new u(t)),"PRIVATE")),y(new(0,r.Component)("heartbeat",(t=>new R(t)),"PRIVATE")),A(c,l,U),A(c,l,"esm2017"),A("fire-js","")})),s.register("4a6xH",(function(e,n){t(e.exports,"Component",(function(){return i})),t(e.exports,"ComponentContainer",(function(){return u}));var r=s("ffjl9");class i{setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a{get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new(0,r.Deferred);if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(t){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null==t?void 0:t.identifier),r=null!==(e=null==t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(t){if(r)return null;throw t}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(function(t){return"EAGER"===t.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t))try{this.getOrInitializeService({instanceIdentifier:o})}catch(t){}for(const[t,e]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:n});e.resolve(t)}catch(t){}}}}clearInstance(t="[DEFAULT]"){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t="[DEFAULT]"){return this.instances.has(t)}getOptions(t="[DEFAULT]"){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[t,e]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(t)&&e.resolve(r)}return r}onInit(t,e){var n;const r=this.normalizeInstanceIdentifier(e),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(t),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&t(s,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const r of n)try{r(t,e)}catch(t){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(r=t,r===o?void 0:r),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(t){}var r;return n||null}normalizeInstanceIdentifier(t="[DEFAULT]"){return this.component?this.component.multipleInstances?t:o:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}}class u{addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new a(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}constructor(t){this.name=t,this.providers=new Map}}})),s.register("ffjl9",(function(e,r){t(e.exports,"base64urlEncodeWithoutPadding",(function(){return u})),t(e.exports,"getUA",(function(){return l})),t(e.exports,"isSafari",(function(){return h})),t(e.exports,"isIndexedDBAvailable",(function(){return f})),t(e.exports,"validateIndexedDBOpenable",(function(){return d})),t(e.exports,"getDefaultEmulatorHostnameAndPort",(function(){return m})),t(e.exports,"getDefaultAppConfig",(function(){return y})),t(e.exports,"Deferred",(function(){return v})),t(e.exports,"createMockUserToken",(function(){return w})),t(e.exports,"FirebaseError",(function(){return E})),t(e.exports,"ErrorFactory",(function(){return b})),t(e.exports,"deepEqual",(function(){return I})),t(e.exports,"getModularInstance",(function(){return C}));var i=s("4TNnu");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=63&i|128):55296==(64512&i)&&r+1<t.length&&56320==(64512&t.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&t.charCodeAt(++r)),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=63&i|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=63&i|128)}return e},a={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let e=0;e<t.length;e+=3){const i=t[e],s=e+1<t.length,o=s?t[e+1]:0,a=e+2<t.length,u=a?t[e+2]:0,c=i>>2,l=(3&i)<<4|o>>4;let h=(15&o)<<2|u>>6,f=63&u;a||(f=64,s||(h=64)),r.push(n[c],n[l],n[h],n[f])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(o(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=((7&i)<<18|(63&t[n++])<<12|(63&t[n++])<<6|63&t[n++])-65536;e[r++]=String.fromCharCode(55296+(s>>10)),e[r++]=String.fromCharCode(56320+(1023&s))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return e.join("")}(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let e=0;e<t.length;){const i=n[t.charAt(e++)],s=e<t.length?n[t.charAt(e)]:0;++e;const o=e<t.length?n[t.charAt(e)]:64;++e;const a=e<t.length?n[t.charAt(e)]:64;if(++e,null==i||null==s||null==o||null==a)throw Error();const u=i<<2|s>>4;if(r.push(u),64!==o){const t=s<<4&240|o>>2;if(r.push(t),64!==a){const t=o<<6&192|a;r.push(t)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},u=function(t){return function(t){const e=o(t);return a.encodeByteArray(e,!0)}(t).replace(/\./g,"")},c=function(t){try{return a.decodeString(t,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function l(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function h(){return!function(){try{return"[object process]"===Object.prototype.toString.call(n.process)}catch(t){return!1}}()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function f(){return"object"==typeof indexedDB}function d(){return new Promise(((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var t;e((null===(t=i.error)||void 0===t?void 0:t.message)||"")}}catch(t){e(t)}}))}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const p=()=>function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==n)return n;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,g=()=>{try{return p()||(()=>{if(void 0===i||void 0===i.env)return})()||(()=>{if("undefined"==typeof document)return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(t){return}const e=t&&c(t[1]);return e&&JSON.parse(e)})()}catch(t){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`)}},m=t=>{const e=(t=>{var e,n;return null===(n=null===(e=g())||void 0===e?void 0:e.emulatorHosts)||void 0===n?void 0:n[t]})(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return"["===e[0]?[e.substring(1,n-1),r]:[e.substring(0,n),r]},y=()=>{var t;return null===(t=g())||void 0===t?void 0:t.config};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class v{wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"==typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[u(JSON.stringify({alg:"none",type:"JWT"})),u(JSON.stringify(s)),""].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,E.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,b.prototype.create)}}class b{create(t,...e){const n=e[0]||{},r=`${this.service}/${t}`,i=this.errors[t],s=i?function(t,e){return t.replace(T,((t,n)=>{const r=e[n];return null!=r?String(r):`<${n}?>`}))}(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`;return new E(r,o,n)}constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}}const T=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const n=t[i],s=e[i];if(S(n)&&S(s)){if(!I(n,s))return!1}else if(n!==s)return!1}for(const t of r)if(!n.includes(t))return!1;return!0}function S(t){return null!==t&&"object"==typeof t}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function C(t){return t&&t._delegate?t._delegate:t}})),s.register("7vF8m",(function(e,n){t(e.exports,"LogLevel",(function(){return i})),t(e.exports,"Logger",(function(){return l})),t(e.exports,"setLogLevel",(function(){return h})),t(e.exports,"setUserLogHandler",(function(){return f}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=[];var i,s;(s=i||(i={}))[s.DEBUG=0]="DEBUG",s[s.VERBOSE=1]="VERBOSE",s[s.INFO=2]="INFO",s[s.WARN=3]="WARN",s[s.ERROR=4]="ERROR",s[s.SILENT=5]="SILENT";const o={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},a=i.INFO,u={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},c=(t,e,...n)=>{if(e<t.logLevel)return;const r=(new Date).toISOString(),i=u[e];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[i](`[${r}]  ${t.name}:`,...n)};class l{get logLevel(){return this._logLevel}set logLevel(t){if(!(t in i))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"==typeof t?o[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!=typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...t),this._logHandler(this,i.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...t),this._logHandler(this,i.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,i.INFO,...t),this._logHandler(this,i.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,i.WARN,...t),this._logHandler(this,i.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...t),this._logHandler(this,i.ERROR,...t)}constructor(t){this.name=t,this._logLevel=a,this._logHandler=c,this._userLogHandler=null,r.push(this)}}function h(t){r.forEach((e=>{e.setLogLevel(t)}))}function f(t,e){for(const n of r){let r=null;e&&e.level&&(r=o[e.level]),n.userLogHandler=null===t?null:(e,n,...s)=>{const o=s.map((t=>{if(null==t)return null;if("string"==typeof t)return t;if("number"==typeof t||"boolean"==typeof t)return t.toString();if(t instanceof Error)return t.message;try{return JSON.stringify(t)}catch(t){return null}})).filter((t=>t)).join(" ");n>=(null!=r?r:e.logLevel)&&t({level:i[n].toLowerCase(),message:o,args:s,type:e.name})}}}})),s.register("cCiiD",(function(e,n){t(e.exports,"openDB",(function(){return i}));var r=s("ekHjI");r=s("ekHjI");function i(t,e,{blocked:n,upgrade:i,blocking:s,terminated:o}={}){const a=indexedDB.open(t,e),u=(0,r.w)(a);return i&&a.addEventListener("upgradeneeded",(t=>{i((0,r.w)(a.result),t.oldVersion,t.newVersion,(0,r.w)(a.transaction))})),n&&a.addEventListener("blocked",(()=>n())),u.then((t=>{o&&t.addEventListener("close",(()=>o())),s&&t.addEventListener("versionchange",(()=>s()))})).catch((()=>{})),u}const o=["get","getKey","getAll","getAllKeys","count"],a=["put","add","delete","clear"],u=new Map;function c(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!=typeof e)return;if(u.get(e))return u.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=a.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!o.includes(n))return;const s=async function(t,...e){const s=this.transaction(t,i?"readwrite":"readonly");let o=s.store;return r&&(o=o.index(e.shift())),(await Promise.all([o[n](...e),i&&s.done]))[0]};return u.set(e,s),s}(0,r.r)((t=>({...t,get:(e,n,r)=>c(e,n)||t.get(e,n,r),has:(e,n)=>!!c(e,n)||t.has(e,n)})))})),s.register("ekHjI",(function(e,n){t(e.exports,"w",(function(){return p})),t(e.exports,"r",(function(){return h}));let r,i;const s=new WeakMap,o=new WeakMap,a=new WeakMap,u=new WeakMap,c=new WeakMap;let l={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return o.get(t);if("objectStoreNames"===e)return t.objectStoreNames||a.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return p(t[e])},set:(t,e,n)=>(t[e]=n,!0),has:(t,e)=>t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t};function h(t){l=t(l)}function f(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(i||(i=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(g(this),e),p(s.get(this))}:function(...e){return p(t.apply(g(this),e))}:function(e,...n){const r=t.call(g(this),e,...n);return a.set(r,e.sort?e.sort():[e]),p(r)}}function d(t){return"function"==typeof t?f(t):(t instanceof IDBTransaction&&function(t){if(o.has(t))return;const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",s),t.removeEventListener("abort",s)},i=()=>{e(),r()},s=()=>{n(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",s),t.addEventListener("abort",s)}));o.set(t,e)}(t),e=t,(r||(r=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((t=>e instanceof t))?new Proxy(t,l):t);var e}function p(t){if(t instanceof IDBRequest)return function(t){const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",s)},i=()=>{e(p(t.result)),r()},s=()=>{n(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",s)}));return e.then((e=>{e instanceof IDBCursor&&s.set(e,t)})).catch((()=>{})),c.set(e,t),e}(t);if(u.has(t))return u.get(t);const e=d(t);return e!==t&&(u.set(t,e),c.set(e,t)),e}const g=t=>c.get(t)})),s.register("83ZX7",(function(e,n){t(e.exports,"getFirestore",(function(){return s("3PjDZ").getFirestore})),t(e.exports,"collection",(function(){return s("3PjDZ").collection})),t(e.exports,"getDocs",(function(){return s("3PjDZ").getDocs})),t(e.exports,"addDoc",(function(){return s("3PjDZ").addDoc})),s("3PjDZ")})),s.register("3PjDZ",(function(e,n){t(e.exports,"collection",(function(){return Ns})),t(e.exports,"getFirestore",(function(){return qs})),t(e.exports,"getDocs",(function(){return So})),t(e.exports,"addDoc",(function(){return Co}));var r=s("ix4Jr"),i=s("4a6xH"),o=s("7vF8m"),a=s("ffjl9"),u=s("lW9Fu");s("4TNnu");const c="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l{isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}constructor(t){this.uid=t}}l.UNAUTHENTICATED=new l(null),l.GOOGLE_CREDENTIALS=new l("google-credentials-uid"),l.FIRST_PARTY=new l("first-party-uid"),l.MOCK_USER=new l("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let h="9.14.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f=new(0,o.Logger)("@firebase/firestore");function d(){return f.logLevel}function p(t,...e){if(f.logLevel<=o.LogLevel.DEBUG){const n=e.map(y);f.debug(`Firestore (${h}): ${t}`,...n)}}function g(t,...e){if(f.logLevel<=o.LogLevel.ERROR){const n=e.map(y);f.error(`Firestore (${h}): ${t}`,...n)}}function m(t,...e){if(f.logLevel<=o.LogLevel.WARN){const n=e.map(y);f.warn(`Firestore (${h}): ${t}`,...n)}}function y(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v(t="Unexpected state"){const e=`FIRESTORE (${h}) INTERNAL ASSERTION FAILED: `+t;throw g(e),new Error(e)}function w(t,e){t||v()}function E(t,e){return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class T extends a.FirebaseError{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class C{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(l.UNAUTHENTICATED)))}shutdown(){}}class A{getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}constructor(t){this.token=t,this.changeListener=null}}class _{start(t,e){let n=this.i;const r=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let i=new I;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new I,t.enqueueRetryable((()=>r(this.currentUser)))};const s=()=>{const e=i;t.enqueueRetryable((async()=>{await e.promise,await r(this.currentUser)}))},o=t=>{p("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(p("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new I)}}),0),s()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(p("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(w("string"==typeof e.accessToken),new S(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return w(null===t||"string"==typeof t),new l(t)}constructor(t){this.t=t,this.currentUser=l.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}}class D{I(){return this.g?this.g():(w(!("object"!=typeof this.h||null===this.h||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.p.set("Authorization",t),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}constructor(t,e,n,r){this.h=t,this.l=e,this.m=n,this.g=r,this.type="FirstParty",this.user=l.FIRST_PARTY,this.p=new Map}}class x{getToken(){return Promise.resolve(new D(this.h,this.l,this.m,this.g))}start(t,e){t.enqueueRetryable((()=>e(l.FIRST_PARTY)))}shutdown(){}invalidateToken(){}constructor(t,e,n,r){this.h=t,this.l=e,this.m=n,this.g=r}}class N{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class k{start(t,e){const n=t=>{null!=t.error&&p("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.A;return this.A=t.token,p("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const r=t=>{p("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.T.onInit((t=>r(t))),setTimeout((()=>{if(!this.appCheck){const t=this.T.getImmediate({optional:!0});t?r(t):p("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(w("string"==typeof t.token),this.A=t.token,new N(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}constructor(t){this.T=t,this.forceRefresh=!1,this.appCheck=null,this.A=null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function R(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let e=0;e<t;e++)n[e]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{static R(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const r=R(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<e&&(n+=t.charAt(r[i]%t.length))}return n}}function O(t,e){return t<e?-1:t>e?1:0}function M(t,e,n){return t.length===e.length&&t.every(((t,r)=>n(t,e[r])))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class U{static now(){return U.fromMillis(Date.now())}static fromDate(t){return U.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new U(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?O(this.nanoseconds,t.nanoseconds):O(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new T(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new T(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new T(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new T(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{static fromTimestamp(t){return new B(t)}static min(){return new B(new U(0,0))}static max(){return new B(new U(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}constructor(t){this.timestamp=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{get length(){return this.len}isEqual(t){return 0===P.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof P?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const n=t.get(r),i=e.get(r);if(n<i)return-1;if(n>i)return 1}return t.length<e.length?-1:t.length>e.length?1:0}constructor(t,e,n){void 0===e?e=0:e>t.length&&v(),void 0===n?n=t.length-e:n>t.length-e&&v(),this.segments=t,this.offset=e,this.len=n}}class F extends P{construct(t,e,n){return new F(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new T(b.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new F(e)}static emptyPath(){return new F([])}}const V=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class j extends P{construct(t,e,n){return new j(t,e,n)}static isValidIdentifier(t){return V.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),j.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new j(["__name__"])}static fromServerFormat(t){const e=[];let n="",r=0;const i=()=>{if(0===n.length)throw new T(b.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let s=!1;for(;r<t.length;){const e=t[r];if("\\"===e){if(r+1===t.length)throw new T(b.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[r+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new T(b.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,r+=2}else"`"===e?(s=!s,r++):"."!==e||s?(n+=e,r++):(i(),r++)}if(i(),s)throw new T(b.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new j(e)}static emptyPath(){return new j([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{static fromPath(t){return new q(F.fromString(t))}static fromName(t){return new q(F.fromString(t).popFirst(5))}static empty(){return new q(F.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===F.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return F.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new q(new F(t.slice()))}constructor(t){this.path=t}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(t,e,n,r){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=r}}$.UNKNOWN_ID=-1;function K(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=B.fromTimestamp(1e9===r?new U(n+1,0):new U(n,r));return new z(i,q.empty(),e)}function H(t){return new z(t.readTime,t.key,-1)}class z{static min(){return new z(B.min(),q.empty(),-1)}static max(){return new z(B.max(),q.empty(),-1)}constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}}function G(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=q.comparator(t.documentKey,e.documentKey),0!==n?n:O(t.largestBatchId,e.largestBatchId))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class W{addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}constructor(){this.onCommittedListeners=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function X(t){if(t.code!==b.FAILED_PRECONDITION||t.message!==Q)throw t;p("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&v(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new Y(((n,r)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,r)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,r)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof Y?e:Y.resolve(e)}catch(t){return Y.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):Y.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):Y.reject(e)}static resolve(t){return new Y(((e,n)=>{e(t)}))}static reject(t){return new Y(((e,n)=>{n(t)}))}static waitFor(t){return new Y(((e,n)=>{let r=0,i=0,s=!1;t.forEach((t=>{++r,t.next((()=>{++i,s&&i===r&&e()}),(t=>n(t)))})),s=!0,i===r&&e()}))}static or(t){let e=Y.resolve(!1);for(const n of t)e=e.next((t=>t?Y.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,r)=>{n.push(e.call(this,t,r))})),this.waitFor(n)}static mapArray(t,e){return new Y(((n,r)=>{const i=t.length,s=new Array(i);let o=0;for(let a=0;a<i;a++){const u=a;e(t[u]).next((t=>{s[u]=t,++o,o===i&&n(s)}),(t=>r(t)))}}))}static doWhile(t,e){return new Y(((n,r)=>{const i=()=>{!0===t()?e().next((()=>{i()}),r):n()};i()}))}constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J(t){return"IndexedDbTransactionError"===t.name}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Z{ut(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ct&&this.ct(t),t}constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.ut(t),this.ct=t=>e.writeSequenceNumber(t))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tt(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function et(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function nt(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Z.at=-1;class rt{insert(t,e){return new rt(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,st.BLACK,null,null))}remove(t){return new rt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,st.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(0===r)return e+n.left.size;r<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new it(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new it(this.root,t,this.comparator,!1)}getReverseIterator(){return new it(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new it(this.root,t,this.comparator,!0)}constructor(t,e){this.comparator=t,this.root=e||st.EMPTY}}class it{getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}constructor(t,e,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?n(t.key,e):1,e&&r&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(0===i){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}}class st{copy(t,e,n,r,i){return new st(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let r=this;const i=n(t,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(t,e,n),null):0===i?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return st.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,r=this;if(e(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,e),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===e(t,r.key)){if(r.right.isEmpty())return st.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,e))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,st.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,st.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw v();if(this.right.isRed())throw v();const t=this.left.check();if(t!==this.right.check())throw v();return t+(this.isRed()?0:1)}constructor(t,e,n,r,i){this.key=t,this.value=e,this.color=null!=n?n:st.RED,this.left=null!=r?r:st.EMPTY,this.right=null!=i?i:st.EMPTY,this.size=this.left.size+1+this.right.size}}st.EMPTY=null,st.RED=!0,st.BLACK=!1,st.EMPTY=new class{get key(){throw v()}get value(){throw v()}get color(){throw v()}get left(){throw v()}get right(){throw v()}copy(t,e,n,r,i){return this}insert(t,e,n){return new st(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}constructor(){this.size=0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ot{has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,t[1])>=0)return;e(r.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new at(this.data.getIterator())}getIteratorFrom(t){return new at(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof ot))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(0!==this.comparator(t,r))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new ot(this.comparator);return e.data=t,e}constructor(t){this.comparator=t,this.data=new rt(this.comparator)}}class at{getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}constructor(t){this.iter=t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ut{static empty(){return new ut([])}unionWith(t){let e=new ot(j.comparator);for(const t of this.fields)e=e.add(t);for(const n of t)e=e.add(n);return new ut(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return M(this.fields,t.fields,((t,e)=>t.isEqual(e)))}constructor(t){this.fields=t,t.sort(j.comparator)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ct=Symbol.iterator;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{static fromBase64String(t){const e=atob(t);return new lt(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new lt(e)}[ct](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){var t;return t=this.binaryString,btoa(t)}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return O(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}constructor(t){this.binaryString=t}}lt.EMPTY_BYTE_STRING=new lt("");const ht=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ft(t){if(w(!!t),"string"==typeof t){let e=0;const n=ht.exec(t);if(w(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:dt(t.seconds),nanos:dt(t.nanos)}}function dt(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function pt(t){return"string"==typeof t?lt.fromBase64String(t):lt.fromUint8Array(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gt(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function mt(t){const e=t.mapValue.fields.__previous_value__;return gt(e)?mt(e):e}function yt(t){const e=ft(t.mapValue.fields.__local_write_time__.timestampValue);return new U(e.seconds,e.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(t,e,n,r,i,s,o,a){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class wt{static empty(){return new wt("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof wt&&t.projectId===this.projectId&&t.database===this.database}constructor(t,e){this.projectId=t,this.database=e||"(default)"}}function Et(t){return null==t}function bt(t){return 0===t&&1/t==-1/0}function Tt(t){return"number"==typeof t&&Number.isInteger(t)&&!bt(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const It={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function St(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?gt(t)?4:Bt(t)?9007199254740991:10:v()}function Ct(t,e){if(t===e)return!0;const n=St(t);if(n!==St(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return yt(t).isEqual(yt(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=ft(t.timestampValue),r=ft(e.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return r=e,pt(t.bytesValue).isEqual(pt(r.bytesValue));case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return dt(t.geoPointValue.latitude)===dt(e.geoPointValue.latitude)&&dt(t.geoPointValue.longitude)===dt(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return dt(t.integerValue)===dt(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=dt(t.doubleValue),r=dt(e.doubleValue);return n===r?bt(n)===bt(r):isNaN(n)&&isNaN(r)}return!1}(t,e);case 9:return M(t.arrayValue.values||[],e.arrayValue.values||[],Ct);case 10:return function(t,e){const n=t.mapValue.fields||{},r=e.mapValue.fields||{};if(tt(n)!==tt(r))return!1;for(const t in n)if(n.hasOwnProperty(t)&&(void 0===r[t]||!Ct(n[t],r[t])))return!1;return!0}(t,e);default:return v()}var r}function At(t,e){return void 0!==(t.values||[]).find((t=>Ct(t,e)))}function _t(t,e){if(t===e)return 0;const n=St(t),r=St(e);if(n!==r)return O(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return O(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=dt(t.integerValue||t.doubleValue),r=dt(e.integerValue||e.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(t,e);case 3:return Dt(t.timestampValue,e.timestampValue);case 4:return Dt(yt(t),yt(e));case 5:return O(t.stringValue,e.stringValue);case 6:return function(t,e){const n=pt(t),r=pt(e);return n.compareTo(r)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),r=e.split("/");for(let t=0;t<n.length&&t<r.length;t++){const e=O(n[t],r[t]);if(0!==e)return e}return O(n.length,r.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=O(dt(t.latitude),dt(e.latitude));return 0!==n?n:O(dt(t.longitude),dt(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],r=e.values||[];for(let t=0;t<n.length&&t<r.length;++t){const e=_t(n[t],r[t]);if(e)return e}return O(n.length,r.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){if(t===It.mapValue&&e===It.mapValue)return 0;if(t===It.mapValue)return 1;if(e===It.mapValue)return-1;const n=t.fields||{},r=Object.keys(n),i=e.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let t=0;t<r.length&&t<s.length;++t){const e=O(r[t],s[t]);if(0!==e)return e;const o=_t(n[r[t]],i[s[t]]);if(0!==o)return o}return O(r.length,s.length)}(t.mapValue,e.mapValue);default:throw v()}}function Dt(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return O(t,e);const n=ft(t),r=ft(e),i=O(n.seconds,r.seconds);return 0!==i?i:O(n.nanos,r.nanos)}function xt(t){return Nt(t)}function Nt(t){var e,n;return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=ft(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?pt(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,q.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",n=!0;for(const r of t.values||[])n?n=!1:e+=",",e+=Nt(r);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",r=!0;for(const i of e)r?r=!1:n+=",",n+=`${i}:${Nt(t.fields[i])}`;return n+"}"}(t.mapValue):v()}function kt(t){return!!t&&"integerValue"in t}function Rt(t){return!!t&&"arrayValue"in t}function Lt(t){return!!t&&"nullValue"in t}function Ot(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Mt(t){return!!t&&"mapValue"in t}function Ut(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return et(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=Ut(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ut(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Bt(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Pt{static empty(){return new Pt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!Mt(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Ut(e)}setAll(t){let e=j.emptyPath(),n={},r=[];t.forEach(((t,i)=>{if(!e.isImmediateParentOf(i)){const t=this.getFieldsMap(e);this.applyChanges(t,n,r),n={},r=[],e=i.popLast()}t?n[i.lastSegment()]=Ut(t):r.push(i.lastSegment())}));const i=this.getFieldsMap(e);this.applyChanges(i,n,r)}delete(t){const e=this.field(t.popLast());Mt(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Ct(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let r=e.mapValue.fields[t.get(n)];Mt(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=r),e=r}return e.mapValue.fields}applyChanges(t,e,n){et(e,((e,n)=>t[e]=n));for(const e of n)delete t[e]}clone(){return new Pt(Ut(this.value))}constructor(t){this.value=t}}function Ft(t){const e=[];return et(t.fields,((t,n)=>{const r=new j([t]);if(Mt(n)){const t=Ft(n.mapValue).fields;if(0===t.length)e.push(r);else for(const n of t)e.push(r.child(n))}else e.push(r)})),new ut(e)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Vt{static newInvalidDocument(t){return new Vt(t,0,B.min(),B.min(),Pt.empty(),0)}static newFoundDocument(t,e,n){return new Vt(t,1,e,B.min(),n,0)}static newNoDocument(t,e){return new Vt(t,2,e,B.min(),Pt.empty(),0)}static newUnknownDocument(t,e){return new Vt(t,3,e,B.min(),Pt.empty(),2)}convertToFoundDocument(t,e){return this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Pt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Pt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=B.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof Vt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Vt(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}constructor(t,e,n,r,i,s){this.key=t,this.documentType=e,this.version=n,this.readTime=r,this.data=i,this.documentState=s}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(t,e=null,n=[],r=[],i=null,s=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.ht=null}}function qt(t,e=null,n=[],r=[],i=null,s=null,o=null){return new jt(t,e,n,r,i,s,o)}function $t(t){const e=E(t);if(null===e.ht){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>{var e;return(e=t).field.canonicalString()+e.op.toString()+xt(e.value)})).join(","),t+="|ob:",t+=e.orderBy.map((t=>{return(e=t).field.canonicalString()+e.dir;var e})).join(","),Et(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((t=>xt(t))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((t=>xt(t))).join(",")),e.ht=t}return e.ht}function Kt(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!re(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],r=e.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!Ct(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!se(t.startAt,e.startAt)&&se(t.endAt,e.endAt)}function Ht(t){return q.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}class zt extends class{}{static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.lt(t,e,n):new Gt(t,e,n):"array-contains"===e?new Yt(t,n):"in"===e?new Jt(t,n):"not-in"===e?new Zt(t,n):"array-contains-any"===e?new te(t,n):new zt(t,e,n)}static lt(t,e,n){return"in"===e?new Qt(t,n):new Wt(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.ft(_t(e,this.value)):null!==e&&St(this.value)===St(e)&&this.ft(_t(e,this.value))}ft(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return v()}}dt(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}}class Gt extends zt{matches(t){const e=q.comparator(t.key,this.key);return this.ft(e)}constructor(t,e,n){super(t,e,n),this.key=q.fromName(n.referenceValue)}}class Qt extends zt{matches(t){return this.keys.some((e=>e.isEqual(t.key)))}constructor(t,e){super(t,"in",e),this.keys=Xt("in",e)}}class Wt extends zt{matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}constructor(t,e){super(t,"not-in",e),this.keys=Xt("not-in",e)}}function Xt(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>q.fromName(t.referenceValue)))}class Yt extends zt{matches(t){const e=t.data.field(this.field);return Rt(e)&&At(e.arrayValue,this.value)}constructor(t,e){super(t,"array-contains",e)}}class Jt extends zt{matches(t){const e=t.data.field(this.field);return null!==e&&At(this.value.arrayValue,e)}constructor(t,e){super(t,"in",e)}}class Zt extends zt{matches(t){if(At(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!At(this.value.arrayValue,e)}constructor(t,e){super(t,"not-in",e)}}class te extends zt{matches(t){const e=t.data.field(this.field);return!(!Rt(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>At(this.value.arrayValue,t)))}constructor(t,e){super(t,"array-contains-any",e)}}class ee{constructor(t,e){this.position=t,this.inclusive=e}}class ne{constructor(t,e="asc"){this.field=t,this.dir=e}}function re(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function ie(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(r=s.field.isKeyField()?q.comparator(q.fromName(o.referenceValue),n.key):_t(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function se(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Ct(t.position[n],e.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(t,e=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this._t=null,this.wt=null,this.startAt,this.endAt}}function ae(t,e,n,r,i,s,o,a){return new oe(t,e,n,r,i,s,o,a)}function ue(t){return new oe(t)}function ce(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}function le(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function he(t){for(const e of t.filters)if(e.dt())return e.field;return null}function fe(t){return null!==t.collectionGroup}function de(t){const e=E(t);if(null===e._t){e._t=[];const t=he(e),n=le(e);if(null!==t&&null===n)t.isKeyField()||e._t.push(new ne(t)),e._t.push(new ne(j.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e._t.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e._t.push(new ne(j.keyField(),t))}}}return e._t}function pe(t){const e=E(t);if(!e.wt)if("F"===e.limitType)e.wt=qt(e.path,e.collectionGroup,de(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const n of de(e)){const e="desc"===n.dir?"asc":"desc";t.push(new ne(n.field,e))}const n=e.endAt?new ee(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new ee(e.startAt.position,e.startAt.inclusive):null;e.wt=qt(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}return e.wt}function ge(t,e,n){return new oe(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function me(t,e){return Kt(pe(t),pe(e))&&t.limitType===e.limitType}function ye(t){return`${$t(pe(t))}|lt:${t.limitType}`}function ve(t){return`Query(target=${function(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>{var e;return`${(e=t).field.canonicalString()} ${e.op} ${xt(e.value)}`})).join(", ")}]`),Et(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>{return`${(e=t).field.canonicalString()} (${e.dir})`;var e})).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((t=>xt(t))).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((t=>xt(t))).join(",")),`Target(${e})`}(pe(t))}; limitType=${t.limitType})`}function we(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):q.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of t.explicitOrderBy)if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&(r=e,!((n=t).startAt&&!function(t,e,n){const r=ie(t,e,n);return t.inclusive?r<=0:r<0}(n.startAt,de(n),r)||n.endAt&&!function(t,e,n){const r=ie(t,e,n);return t.inclusive?r>=0:r>0}(n.endAt,de(n),r)));var n,r}function Ee(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function be(t){return(e,n)=>{let r=!1;for(const i of de(t)){const t=Te(i,e,n);if(0!==t)return t;r=r||i.field.isKeyField()}return 0}}function Te(t,e,n){const r=t.field.isKeyField()?q.comparator(e.key,n.key):function(t,e,n){const r=e.data.field(t),i=n.data.field(t);return null!==r&&null!==i?_t(r,i):v()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return v()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ie(t,e){if(t.gt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:bt(e)?"-0":e}}function Se(t){return{integerValue:""+t}}function Ce(t,e){return Tt(e)?Se(e):Ie(t,e)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{constructor(){this._=void 0}}function _e(t,e,n){return t instanceof Ne?ke(t,e):t instanceof Re?Le(t,e):n}function De(t,e){var n,r;return t instanceof Oe?kt(n=e)||(r=n)&&"doubleValue"in r?e:{integerValue:0}:null}class xe extends Ae{}class Ne extends Ae{constructor(t){super(),this.elements=t}}function ke(t,e){const n=Ue(e);for(const e of t.elements)n.some((t=>Ct(t,e)))||n.push(e);return{arrayValue:{values:n}}}class Re extends Ae{constructor(t){super(),this.elements=t}}function Le(t,e){let n=Ue(e);for(const e of t.elements)n=n.filter((t=>!Ct(t,e)));return{arrayValue:{values:n}}}class Oe extends Ae{constructor(t,e){super(),this.It=t,this.yt=e}}function Me(t){return dt(t.integerValue||t.doubleValue)}function Ue(t){return Rt(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(t,e){this.version=t,this.transformResults=e}}class Pe{static none(){return new Pe}static exists(t){return new Pe(void 0,t)}static updateTime(t){return new Pe(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}constructor(t,e){this.updateTime=t,this.exists=e}}function Fe(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class Ve{}function je(t,e){if(!t.hasLocalMutations||e&&0===e.fields.length)return null;if(null===e)return t.isNoDocument()?new Ye(t.key,Pe.none()):new ze(t.key,t.data,Pe.none());{const n=t.data,r=Pt.empty();let i=new ot(j.comparator);for(let t of e.fields)if(!i.has(t)){let e=n.field(t);null===e&&t.length>1&&(t=t.popLast(),e=n.field(t)),null===e?r.delete(t):r.set(t,e),i=i.add(t)}return new Ge(t.key,r,new ut(i.toArray()),Pe.none())}}function qe(t,e,n){var r;t instanceof ze?function(t,e,n){const r=t.value.clone(),i=We(t.fieldTransforms,e,n.transformResults);r.setAll(i),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):t instanceof Ge?function(t,e,n){if(!Fe(t.precondition,e))return void e.convertToUnknownDocument(n.version);const r=We(t.fieldTransforms,e,n.transformResults),i=e.data;i.setAll(Qe(t)),i.setAll(r),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):(r=n,e.convertToNoDocument(r.version).setHasCommittedMutations())}function $e(t,e,n,r){return t instanceof ze?function(t,e,n,r){if(!Fe(t.precondition,e))return n;const i=t.value.clone(),s=Xe(t.fieldTransforms,r,e);return i.setAll(s),e.convertToFoundDocument(e.version,i).setHasLocalMutations(),null}(t,e,n,r):t instanceof Ge?function(t,e,n,r){if(!Fe(t.precondition,e))return n;const i=Xe(t.fieldTransforms,r,e),s=e.data;return s.setAll(Qe(t)),s.setAll(i),e.convertToFoundDocument(e.version,s).setHasLocalMutations(),null===n?null:n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map((t=>t.field)))}(t,e,n,r):(i=e,s=n,Fe(t.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):s);var i,s}function Ke(t,e){let n=null;for(const r of t.fieldTransforms){const t=e.data.field(r.field),i=De(r.transform,t||null);null!=i&&(null===n&&(n=Pt.empty()),n.set(r.field,i))}return n||null}function He(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&(n=t.fieldTransforms,r=e.fieldTransforms,!!(void 0===n&&void 0===r||n&&r&&M(n,r,((t,e)=>function(t,e){return t.field.isEqual(e.field)&&(n=t.transform,r=e.transform,n instanceof Ne&&r instanceof Ne||n instanceof Re&&r instanceof Re?M(n.elements,r.elements,Ct):n instanceof Oe&&r instanceof Oe?Ct(n.yt,r.yt):n instanceof xe&&r instanceof xe);var n,r}(t,e)))))&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask));var n,r}class ze extends Ve{getFieldMask(){return null}constructor(t,e,n,r=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=r,this.type=0}}class Ge extends Ve{getFieldMask(){return this.fieldMask}constructor(t,e,n,r,i=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}}function Qe(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}})),e}function We(t,e,n){const r=new Map;w(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,_e(o,a,n[i]))}return r}function Xe(t,e,n){const r=new Map;for(const a of t){const t=a.transform,u=n.data.field(a.field);r.set(a.field,(s=u,o=e,(i=t)instanceof xe?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&(n.fields.__previous_value__=e),{mapValue:n}}(o,s):i instanceof Ne?ke(i,s):i instanceof Re?Le(i,s):function(t,e){const n=De(t,e),r=Me(n)+Me(t.yt);return kt(n)&&kt(t.yt)?Se(r):Ie(t.It,r)}(i,s)))}var i,s,o;return r}class Ye extends Ve{getFieldMask(){return null}constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}}class Je extends Ve{getFieldMask(){return null}constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(t){this.count=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var tn,en;function nn(t){switch(t){default:return v();case b.CANCELLED:case b.UNKNOWN:case b.DEADLINE_EXCEEDED:case b.RESOURCE_EXHAUSTED:case b.INTERNAL:case b.UNAVAILABLE:case b.UNAUTHENTICATED:return!1;case b.INVALID_ARGUMENT:case b.NOT_FOUND:case b.ALREADY_EXISTS:case b.PERMISSION_DENIED:case b.FAILED_PRECONDITION:case b.ABORTED:case b.OUT_OF_RANGE:case b.UNIMPLEMENTED:case b.DATA_LOSS:return!0}}function rn(t){if(void 0===t)return g("GRPC error has no .code"),b.UNKNOWN;switch(t){case tn.OK:return b.OK;case tn.CANCELLED:return b.CANCELLED;case tn.UNKNOWN:return b.UNKNOWN;case tn.DEADLINE_EXCEEDED:return b.DEADLINE_EXCEEDED;case tn.RESOURCE_EXHAUSTED:return b.RESOURCE_EXHAUSTED;case tn.INTERNAL:return b.INTERNAL;case tn.UNAVAILABLE:return b.UNAVAILABLE;case tn.UNAUTHENTICATED:return b.UNAUTHENTICATED;case tn.INVALID_ARGUMENT:return b.INVALID_ARGUMENT;case tn.NOT_FOUND:return b.NOT_FOUND;case tn.ALREADY_EXISTS:return b.ALREADY_EXISTS;case tn.PERMISSION_DENIED:return b.PERMISSION_DENIED;case tn.FAILED_PRECONDITION:return b.FAILED_PRECONDITION;case tn.ABORTED:return b.ABORTED;case tn.OUT_OF_RANGE:return b.OUT_OF_RANGE;case tn.UNIMPLEMENTED:return b.UNIMPLEMENTED;case tn.DATA_LOSS:return b.DATA_LOSS;default:return v()}}(en=tn||(tn={}))[en.OK=0]="OK",en[en.CANCELLED=1]="CANCELLED",en[en.UNKNOWN=2]="UNKNOWN",en[en.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",en[en.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",en[en.NOT_FOUND=5]="NOT_FOUND",en[en.ALREADY_EXISTS=6]="ALREADY_EXISTS",en[en.PERMISSION_DENIED=7]="PERMISSION_DENIED",en[en.UNAUTHENTICATED=16]="UNAUTHENTICATED",en[en.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",en[en.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",en[en.ABORTED=10]="ABORTED",en[en.OUT_OF_RANGE=11]="OUT_OF_RANGE",en[en.UNIMPLEMENTED=12]="UNIMPLEMENTED",en[en.INTERNAL=13]="INTERNAL",en[en.UNAVAILABLE=14]="UNAVAILABLE",en[en.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class sn{get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[e,r]of n)if(this.equalsFn(e,t))return r}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),r=this.inner[n];if(void 0===r)return this.inner[n]=[[t,e]],void this.innerSize++;for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],t))return void(r[n]=[t,e]);r.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],t))return 1===n.length?delete this.inner[e]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(t){et(this.inner,((e,n)=>{for(const[e,r]of n)t(e,r)}))}isEmpty(){return nt(this.inner)}size(){return this.innerSize}constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const on=new rt(q.comparator);function an(){return on}const un=new rt(q.comparator);function cn(...t){let e=un;for(const n of t)e=e.insert(n.key,n);return e}function ln(t){let e=un;return t.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function hn(){return dn()}function fn(){return dn()}function dn(){return new sn((t=>t.toString()),((t,e)=>t.isEqual(e)))}const pn=new rt(q.comparator),gn=new ot(q.comparator);function mn(...t){let e=gn;for(const n of t)e=e.add(n);return e}const yn=new ot(O);function vn(){return yn}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{static createSynthesizedRemoteEventForCurrentChange(t,e,n){const r=new Map;return r.set(t,En.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new wn(B.min(),r,vn(),an(),mn())}constructor(t,e,n,r,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}}class En{static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new En(n,e,mn(),mn(),mn())}constructor(t,e,n,r,i){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(t,e,n,r){this.Tt=t,this.removedTargetIds=e,this.key=n,this.Et=r}}class Tn{constructor(t,e){this.targetId=t,this.At=e}}class In{constructor(t,e,n=lt.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=r}}class Sn{get current(){return this.vt}get resumeToken(){return this.Pt}get St(){return 0!==this.Rt}get Dt(){return this.Vt}Ct(t){t.approximateByteSize()>0&&(this.Vt=!0,this.Pt=t)}xt(){let t=mn(),e=mn(),n=mn();return this.bt.forEach(((r,i)=>{switch(i){case 0:t=t.add(r);break;case 2:e=e.add(r);break;case 1:n=n.add(r);break;default:v()}})),new En(this.Pt,this.vt,t,e,n)}Nt(){this.Vt=!1,this.bt=_n()}kt(t,e){this.Vt=!0,this.bt=this.bt.insert(t,e)}Ot(t){this.Vt=!0,this.bt=this.bt.remove(t)}Mt(){this.Rt+=1}Ft(){this.Rt-=1}$t(){this.Vt=!0,this.vt=!0}constructor(){this.Rt=0,this.bt=_n(),this.Pt=lt.EMPTY_BYTE_STRING,this.vt=!1,this.Vt=!0}}class Cn{Gt(t){for(const e of t.Tt)t.Et&&t.Et.isFoundDocument()?this.Qt(e,t.Et):this.jt(e,t.key,t.Et);for(const e of t.removedTargetIds)this.jt(e,t.key,t.Et)}Wt(t){this.forEachTarget(t,(e=>{const n=this.zt(e);switch(t.state){case 0:this.Ht(e)&&n.Ct(t.resumeToken);break;case 1:n.Ft(),n.St||n.Nt(),n.Ct(t.resumeToken);break;case 2:n.Ft(),n.St||this.removeTarget(e);break;case 3:this.Ht(e)&&(n.$t(),n.Ct(t.resumeToken));break;case 4:this.Ht(e)&&(this.Jt(e),n.Ct(t.resumeToken));break;default:v()}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Lt.forEach(((t,n)=>{this.Ht(n)&&e(n)}))}Yt(t){const e=t.targetId,n=t.At.count,r=this.Xt(e);if(r){const t=r.target;if(Ht(t))if(0===n){const n=new q(t.path);this.jt(e,n,Vt.newNoDocument(n,B.min()))}else w(1===n);else this.Zt(e)!==n&&(this.Jt(e),this.Kt=this.Kt.add(e))}}te(t){const e=new Map;this.Lt.forEach(((n,r)=>{const i=this.Xt(r);if(i){if(n.current&&Ht(i.target)){const e=new q(i.target.path);null!==this.Ut.get(e)||this.ee(r,e)||this.jt(r,e,Vt.newNoDocument(e,t))}n.Dt&&(e.set(r,n.xt()),n.Nt())}}));let n=mn();this.qt.forEach(((t,e)=>{let r=!0;e.forEachWhile((t=>{const e=this.Xt(t);return!e||2===e.purpose||(r=!1,!1)})),r&&(n=n.add(t))})),this.Ut.forEach(((e,n)=>n.setReadTime(t)));const r=new wn(t,e,this.Kt,this.Ut,n);return this.Ut=an(),this.qt=An(),this.Kt=new ot(O),r}Qt(t,e){if(!this.Ht(t))return;const n=this.ee(t,e.key)?2:0;this.zt(t).kt(e.key,n),this.Ut=this.Ut.insert(e.key,e),this.qt=this.qt.insert(e.key,this.ne(e.key).add(t))}jt(t,e,n){if(!this.Ht(t))return;const r=this.zt(t);this.ee(t,e)?r.kt(e,1):r.Ot(e),this.qt=this.qt.insert(e,this.ne(e).delete(t)),n&&(this.Ut=this.Ut.insert(e,n))}removeTarget(t){this.Lt.delete(t)}Zt(t){const e=this.zt(t).xt();return this.Bt.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Mt(t){this.zt(t).Mt()}zt(t){let e=this.Lt.get(t);return e||(e=new Sn,this.Lt.set(t,e)),e}ne(t){let e=this.qt.get(t);return e||(e=new ot(O),this.qt=this.qt.insert(t,e)),e}Ht(t){const e=null!==this.Xt(t);return e||p("WatchChangeAggregator","Detected inactive target",t),e}Xt(t){const e=this.Lt.get(t);return e&&e.St?null:this.Bt.se(t)}Jt(t){this.Lt.set(t,new Sn),this.Bt.getRemoteKeysForTarget(t).forEach((e=>{this.jt(t,e,null)}))}ee(t,e){return this.Bt.getRemoteKeysForTarget(t).has(e)}constructor(t){this.Bt=t,this.Lt=new Map,this.Ut=an(),this.qt=An(),this.Kt=new ot(O)}}function An(){return new rt(q.comparator)}function _n(){return new rt(q.comparator)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dn={asc:"ASCENDING",desc:"DESCENDING"},xn={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};class Nn{constructor(t,e){this.databaseId=t,this.gt=e}}function kn(t,e){return t.gt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Rn(t,e){return t.gt?e.toBase64():e.toUint8Array()}function Ln(t,e){return kn(t,e.toTimestamp())}function On(t){return w(!!t),B.fromTimestamp(function(t){const e=ft(t);return new U(e.seconds,e.nanos)}(t))}function Mn(t,e){return(n=t,new F(["projects",n.projectId,"databases",n.database])).child("documents").child(e).canonicalString();var n}function Un(t){const e=F.fromString(t);return w(er(e)),e}function Bn(t,e){return Mn(t.databaseId,e.path)}function Pn(t,e){const n=Un(e);if(n.get(1)!==t.databaseId.projectId)throw new T(b.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new T(b.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new q(qn(n))}function Fn(t,e){return Mn(t.databaseId,e)}function Vn(t){const e=Un(t);return 4===e.length?F.emptyPath():qn(e)}function jn(t){return new F(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function qn(t){return w(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function $n(t,e,n){return{name:Bn(t,e),fields:n.value.mapValue.fields}}function Kn(t,e){let n;if(e instanceof ze)n={update:$n(t,e.key,e.value)};else if(e instanceof Ye)n={delete:Bn(t,e.key)};else if(e instanceof Ge)n={update:$n(t,e.key,e.data),updateMask:tr(e.fieldMask)};else{if(!(e instanceof Je))return v();n={verify:Bn(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((t=>function(t,e){const n=e.transform;if(n instanceof xe)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof Ne)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Re)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof Oe)return{fieldPath:e.field.canonicalString(),increment:n.yt};throw v()}(0,t)))),e.precondition.isNone||(n.currentDocument=(r=t,void 0!==(i=e.precondition).updateTime?{updateTime:Ln(r,i.updateTime)}:void 0!==i.exists?{exists:i.exists}:v())),n;var r,i}function Hn(t,e){return{documents:[Fn(t,e.path)]}}function zn(t,e){const n={structuredQuery:{}},r=e.path;null!==e.collectionGroup?(n.parent=Fn(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Fn(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(t){if(0===t.length)return;const e=t.map((t=>function(t){if("=="===t.op){if(Ot(t.value))return{unaryFilter:{field:Yn(t.field),op:"IS_NAN"}};if(Lt(t.value))return{unaryFilter:{field:Yn(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(Ot(t.value))return{unaryFilter:{field:Yn(t.field),op:"IS_NOT_NAN"}};if(Lt(t.value))return{unaryFilter:{field:Yn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Yn(t.field),op:Xn(t.op),value:t.value}}}(t)));return 1===e.length?e[0]:{compositeFilter:{op:"AND",filters:e}}}(e.filters);i&&(n.structuredQuery.where=i);const s=function(t){if(0!==t.length)return t.map((t=>{return{field:Yn((e=t).field),direction:Wn(e.dir)};var e}))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=(a=t,u=e.limit,a.gt||Et(u)?u:{value:u});var a,u,c;return null!==o&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(c=e.startAt).inclusive,values:c.position}),e.endAt&&(n.structuredQuery.endAt=function(t){return{before:!t.inclusive,values:t.position}}(e.endAt)),n}function Gn(t){let e=Vn(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){w(1===r);const t=n.from[0];t.allDescendants?i=t.collectionId:e=e.child(t.collectionId)}let s=[];n.where&&(s=Qn(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((t=>{return new ne(Jn((e=t).field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction));var e})));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,Et(e)?null:e}(n.limit));let u=null;n.startAt&&(u=function(t){const e=!!t.before,n=t.values||[];return new ee(n,e)}(n.startAt));let c=null;return n.endAt&&(c=function(t){const e=!t.before,n=t.values||[];return new ee(n,e)}(n.endAt)),ae(e,i,o,s,a,"F",u,c)}function Qn(t){return t?void 0!==t.unaryFilter?[Zn(t)]:void 0!==t.fieldFilter?[(e=t,zt.create(Jn(e.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return v()}}(e.fieldFilter.op),e.fieldFilter.value))]:void 0!==t.compositeFilter?t.compositeFilter.filters.map((t=>Qn(t))).reduce(((t,e)=>t.concat(e))):v():[];var e}function Wn(t){return Dn[t]}function Xn(t){return xn[t]}function Yn(t){return{fieldPath:t.canonicalString()}}function Jn(t){return j.fromServerFormat(t.fieldPath)}function Zn(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Jn(t.unaryFilter.field);return zt.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Jn(t.unaryFilter.field);return zt.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Jn(t.unaryFilter.field);return zt.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Jn(t.unaryFilter.field);return zt.create(i,"!=",{nullValue:"NULL_VALUE"});default:return v()}}function tr(t){const e=[];return t.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function er(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nr=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],rr=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],ir=rr;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class sr{applyToRemoteDocument(t,e){const n=e.mutationResults;for(let e=0;e<this.mutations.length;e++){const r=this.mutations[e];r.key.isEqual(t.key)&&qe(r,t,n[e])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=$e(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=$e(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=fn();return this.mutations.forEach((r=>{const i=t.get(r.key),s=i.overlayedDocument;let o=this.applyToLocalView(s,i.mutatedFields);o=e.has(r.key)?null:o;const a=je(s,o);null!==a&&n.set(r.key,a),s.isValidDocument()||s.convertToNoDocument(B.min())})),n}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),mn())}isEqual(t){return this.batchId===t.batchId&&M(this.mutations,t.mutations,((t,e)=>He(t,e)))&&M(this.baseMutations,t.baseMutations,((t,e)=>He(t,e)))}constructor(t,e,n,r){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=r}}class or{static from(t,e,n){w(t.mutations.length===n.length);let r=pn;const i=t.mutations;for(let t=0;t<i.length;t++)r=r.insert(i[t].key,n[t].version);return new or(t,e,n,r)}constructor(t,e,n,r){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=r}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}constructor(t,e){this.largestBatchId=t,this.mutation=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{withSequenceNumber(t){return new ur(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,e){return new ur(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new ur(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}constructor(t,e,n,r,i=B.min(),s=B.min(),o=lt.EMPTY_BYTE_STRING){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{constructor(t){this.re=t}}function lr(t){const e=Gn({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?ge(e,e.limit,"L"):e}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr{ce(t,e){this.ae(t,e),e.he()}ae(t,e){if("nullValue"in t)this.le(e,5);else if("booleanValue"in t)this.le(e,10),e.fe(t.booleanValue?1:0);else if("integerValue"in t)this.le(e,15),e.fe(dt(t.integerValue));else if("doubleValue"in t){const n=dt(t.doubleValue);isNaN(n)?this.le(e,13):(this.le(e,15),bt(n)?e.fe(0):e.fe(n))}else if("timestampValue"in t){const n=t.timestampValue;this.le(e,20),"string"==typeof n?e.de(n):(e.de(`${n.seconds||""}`),e.fe(n.nanos||0))}else if("stringValue"in t)this._e(t.stringValue,e),this.we(e);else if("bytesValue"in t)this.le(e,30),e.me(pt(t.bytesValue)),this.we(e);else if("referenceValue"in t)this.ge(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.le(e,45),e.fe(n.latitude||0),e.fe(n.longitude||0)}else"mapValue"in t?Bt(t)?this.le(e,Number.MAX_SAFE_INTEGER):(this.ye(t.mapValue,e),this.we(e)):"arrayValue"in t?(this.pe(t.arrayValue,e),this.we(e)):v()}_e(t,e){this.le(e,25),this.Ie(t,e)}Ie(t,e){e.de(t)}ye(t,e){const n=t.fields||{};this.le(e,55);for(const t of Object.keys(n))this._e(t,e),this.ae(n[t],e)}pe(t,e){const n=t.values||[];this.le(e,50);for(const t of n)this.ae(t,e)}ge(t,e){this.le(e,37),q.fromName(t).path.forEach((t=>{this.le(e,60),this.Ie(t,e)}))}le(t,e){t.fe(e)}we(t){t.fe(2)}constructor(){}}hr.Te=new hr;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class fr{addToCollectionParentIndex(t,e){return this.Ye.add(e),Y.resolve()}getCollectionParents(t,e){return Y.resolve(this.Ye.getEntries(e))}addFieldIndex(t,e){return Y.resolve()}deleteFieldIndex(t,e){return Y.resolve()}getDocumentsMatchingTarget(t,e){return Y.resolve(null)}getIndexType(t,e){return Y.resolve(0)}getFieldIndexes(t,e){return Y.resolve([])}getNextCollectionGroupToUpdate(t){return Y.resolve(null)}getMinOffset(t,e){return Y.resolve(z.min())}getMinOffsetFromCollectionGroup(t,e){return Y.resolve(z.min())}updateCollectionGroup(t,e,n){return Y.resolve()}updateIndexEntries(t,e){return Y.resolve()}constructor(){this.Ye=new dr}}class dr{add(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e]||new ot(F.comparator),i=!r.has(n);return this.index[e]=r.add(n),i}has(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e];return r&&r.has(n)}getEntries(t){return(this.index[t]||new ot(F.comparator)).toArray()}constructor(){this.index={}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Uint8Array(0);class pr{static withCacheSize(t){return new pr(t,pr.DEFAULT_COLLECTION_PERCENTILE,pr.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */pr.DEFAULT_COLLECTION_PERCENTILE=10,pr.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,pr.DEFAULT=new pr(41943040,pr.DEFAULT_COLLECTION_PERCENTILE,pr.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),pr.DISABLED=new pr(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class gr{next(){return this.bn+=2,this.bn}static Pn(){return new gr(0)}static vn(){return new gr(-1)}constructor(t){this.bn=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class mr{addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Vt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?Y.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}constructor(){this.changes=new sn((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class yr{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr{getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next((r=>(n=r,this.getBaseDocument(t,e,n)))).next((t=>(null!==n&&$e(n.mutation,t,ut.empty(),U.now()),t)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.getLocalViewOfDocuments(t,e,mn()).next((()=>e))))}getLocalViewOfDocuments(t,e,n=mn()){const r=hn();return this.populateOverlays(t,r,e).next((()=>this.computeViews(t,e,r,n).next((t=>{let e=cn();return t.forEach(((t,n)=>{e=e.insert(t,n.overlayedDocument)})),e}))))}getOverlayedDocuments(t,e){const n=hn();return this.populateOverlays(t,n,e).next((()=>this.computeViews(t,e,n,mn())))}populateOverlays(t,e,n){const r=[];return n.forEach((t=>{e.has(t)||r.push(t)})),this.documentOverlayCache.getOverlays(t,r).next((t=>{t.forEach(((t,n)=>{e.set(t,n)}))}))}computeViews(t,e,n,r){let i=an();const s=dn(),o=dn();return e.forEach(((t,e)=>{const o=n.get(e.key);r.has(e.key)&&(void 0===o||o.mutation instanceof Ge)?i=i.insert(e.key,e):void 0!==o&&(s.set(e.key,o.mutation.getFieldMask()),$e(o.mutation,e,o.mutation.getFieldMask(),U.now()))})),this.recalculateAndSaveOverlays(t,i).next((t=>(t.forEach(((t,e)=>s.set(t,e))),e.forEach(((t,e)=>{var n;return o.set(t,new yr(e,null!==(n=s.get(t))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(t,e){const n=dn();let r=new rt(((t,e)=>t-e)),i=mn();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>{for(const i of t)i.keys().forEach((t=>{const s=e.get(t);if(null===s)return;let o=n.get(t)||ut.empty();o=i.applyToLocalView(s,o),n.set(t,o);const a=(r.get(i.batchId)||mn()).add(t);r=r.insert(i.batchId,a)}))})).next((()=>{const s=[],o=r.getReverseIterator();for(;o.hasNext();){const r=o.getNext(),a=r.key,u=r.value,c=fn();u.forEach((t=>{if(!i.has(t)){const r=je(e.get(t),n.get(t));null!==r&&c.set(t,r),i=i.add(t)}})),s.push(this.documentOverlayCache.saveOverlays(t,a,c))}return Y.waitFor(s)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.recalculateAndSaveOverlays(t,e)))}getDocumentsMatchingQuery(t,e,n){return r=e,q.isDocumentKey(r.path)&&null===r.collectionGroup&&0===r.filters.length?this.getDocumentsMatchingDocumentQuery(t,e.path):fe(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n):this.getDocumentsMatchingCollectionQuery(t,e,n);var r}getNextDocuments(t,e,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,r).next((i=>{const s=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,r-i.size):Y.resolve(hn());let o=-1,a=i;return s.next((e=>Y.forEach(e,((e,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),i.get(e)?Y.resolve():this.getBaseDocument(t,e,n).next((t=>{a=a.insert(e,t)}))))).next((()=>this.populateOverlays(t,e,i))).next((()=>this.computeViews(t,a,e,mn()))).next((t=>({batchId:o,changes:ln(t)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new q(e)).next((t=>{let e=cn();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}getDocumentsMatchingCollectionGroupQuery(t,e,n){const r=e.collectionGroup;let i=cn();return this.indexManager.getCollectionParents(t,r).next((s=>Y.forEach(s,(s=>{const o=(a=e,u=s.child(r),new oe(u,null,a.explicitOrderBy.slice(),a.filters.slice(),a.limit,a.limitType,a.startAt,a.endAt));var a,u;return this.getDocumentsMatchingCollectionQuery(t,o,n).next((t=>{t.forEach(((t,e)=>{i=i.insert(t,e)}))}))})).next((()=>i))))}getDocumentsMatchingCollectionQuery(t,e,n){let r;return this.remoteDocumentCache.getAllFromCollection(t,e.path,n).next((i=>(r=i,this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId)))).next((t=>{t.forEach(((t,e)=>{const n=e.getKey();null===r.get(n)&&(r=r.insert(n,Vt.newInvalidDocument(n)))}));let n=cn();return r.forEach(((r,i)=>{const s=t.get(r);void 0!==s&&$e(s.mutation,i,ut.empty(),U.now()),we(e,i)&&(n=n.insert(r,i))})),n}))}getBaseDocument(t,e,n){return null===n||1===n.mutation.type?this.remoteDocumentCache.getEntry(t,e):Y.resolve(Vt.newInvalidDocument(e))}constructor(t,e,n,r){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=r}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr{getBundleMetadata(t,e){return Y.resolve(this.Zn.get(e))}saveBundleMetadata(t,e){var n;return this.Zn.set(e.id,{id:(n=e).id,version:n.version,createTime:On(n.createTime)}),Y.resolve()}getNamedQuery(t,e){return Y.resolve(this.ts.get(e))}saveNamedQuery(t,e){return this.ts.set(e.name,{name:(n=e).name,query:lr(n.bundledQuery),readTime:On(n.readTime)}),Y.resolve();var n}constructor(t){this.It=t,this.Zn=new Map,this.ts=new Map}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er{getOverlay(t,e){return Y.resolve(this.overlays.get(e))}getOverlays(t,e){const n=hn();return Y.forEach(e,(e=>this.getOverlay(t,e).next((t=>{null!==t&&n.set(e,t)})))).next((()=>n))}saveOverlays(t,e,n){return n.forEach(((n,r)=>{this.ue(t,e,r)})),Y.resolve()}removeOverlaysForBatchId(t,e,n){const r=this.es.get(n);return void 0!==r&&(r.forEach((t=>this.overlays=this.overlays.remove(t))),this.es.delete(n)),Y.resolve()}getOverlaysForCollection(t,e,n){const r=hn(),i=e.length+1,s=new q(e.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){const t=o.getNext().value,s=t.getKey();if(!e.isPrefixOf(s.path))break;s.path.length===i&&t.largestBatchId>n&&r.set(t.getKey(),t)}return Y.resolve(r)}getOverlaysForCollectionGroup(t,e,n,r){let i=new rt(((t,e)=>t-e));const s=this.overlays.getIterator();for(;s.hasNext();){const t=s.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=i.get(t.largestBatchId);null===e&&(e=hn(),i=i.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const o=hn(),a=i.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach(((t,e)=>o.set(t,e))),!(o.size()>=r)););return Y.resolve(o)}ue(t,e,n){const r=this.overlays.get(n.key);if(null!==r){const t=this.es.get(r.largestBatchId).delete(n.key);this.es.set(r.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new ar(e,n));let i=this.es.get(e);void 0===i&&(i=mn(),this.es.set(e,i)),this.es.set(e,i.add(n.key))}constructor(){this.overlays=new rt(q.comparator),this.es=new Map}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br{isEmpty(){return this.ns.isEmpty()}addReference(t,e){const n=new Tr(t,e);this.ns=this.ns.add(n),this.rs=this.rs.add(n)}us(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.cs(new Tr(t,e))}hs(t,e){t.forEach((t=>this.removeReference(t,e)))}ls(t){const e=new q(new F([])),n=new Tr(e,t),r=new Tr(e,t+1),i=[];return this.rs.forEachInRange([n,r],(t=>{this.cs(t),i.push(t.key)})),i}fs(){this.ns.forEach((t=>this.cs(t)))}cs(t){this.ns=this.ns.delete(t),this.rs=this.rs.delete(t)}ds(t){const e=new q(new F([])),n=new Tr(e,t),r=new Tr(e,t+1);let i=mn();return this.rs.forEachInRange([n,r],(t=>{i=i.add(t.key)})),i}containsKey(t){const e=new Tr(t,0),n=this.ns.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}constructor(){this.ns=new ot(Tr.ss),this.rs=new ot(Tr.os)}}class Tr{static ss(t,e){return q.comparator(t.key,e.key)||O(t._s,e._s)}static os(t,e){return O(t._s,e._s)||q.comparator(t.key,e.key)}constructor(t,e){this.key=t,this._s=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{checkEmpty(t){return Y.resolve(0===this.mutationQueue.length)}addMutationBatch(t,e,n,r){const i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new sr(i,e,n,r);this.mutationQueue.push(s);for(const e of r)this.gs=this.gs.add(new Tr(e.key,i)),this.indexManager.addToCollectionParentIndex(t,e.key.path.popLast());return Y.resolve(s)}lookupMutationBatch(t,e){return Y.resolve(this.ys(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,r=this.ps(n),i=r<0?0:r;return Y.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return Y.resolve(0===this.mutationQueue.length?-1:this.ws-1)}getAllMutationBatches(t){return Y.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new Tr(e,0),r=new Tr(e,Number.POSITIVE_INFINITY),i=[];return this.gs.forEachInRange([n,r],(t=>{const e=this.ys(t._s);i.push(e)})),Y.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new ot(O);return e.forEach((t=>{const e=new Tr(t,0),r=new Tr(t,Number.POSITIVE_INFINITY);this.gs.forEachInRange([e,r],(t=>{n=n.add(t._s)}))})),Y.resolve(this.Is(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,r=n.length+1;let i=n;q.isDocumentKey(i)||(i=i.child(""));const s=new Tr(new q(i),0);let o=new ot(O);return this.gs.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===r&&(o=o.add(t._s)),!0)}),s),Y.resolve(this.Is(o))}Is(t){const e=[];return t.forEach((t=>{const n=this.ys(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){w(0===this.Ts(e.batchId,"removed")),this.mutationQueue.shift();let n=this.gs;return Y.forEach(e.mutations,(r=>{const i=new Tr(r.key,e.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)})).next((()=>{this.gs=n}))}An(t){}containsKey(t,e){const n=new Tr(e,0),r=this.gs.firstAfterOrEqual(n);return Y.resolve(e.isEqual(r&&r.key))}performConsistencyCheck(t){return this.mutationQueue.length,Y.resolve()}Ts(t,e){return this.ps(t)}ps(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId}ys(t){const e=this.ps(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.ws=1,this.gs=new ot(Tr.ss)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr{setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,r=this.docs.get(n),i=r?r.size:0,s=this.Es(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return Y.resolve(n?n.document.mutableCopy():Vt.newInvalidDocument(e))}getEntries(t,e){let n=an();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():Vt.newInvalidDocument(t))})),Y.resolve(n)}getAllFromCollection(t,e,n){let r=an();const i=new q(e.child("")),s=this.docs.getIteratorFrom(i);for(;s.hasNext();){const{key:t,value:{document:i}}=s.getNext();if(!e.isPrefixOf(t.path))break;t.path.length>e.length+1||G(H(i),n)<=0||(r=r.insert(i.key,i.mutableCopy()))}return Y.resolve(r)}getAllFromCollectionGroup(t,e,n,r){v()}As(t,e){return Y.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new Cr(this)}getSize(t){return Y.resolve(this.size)}constructor(t){this.Es=t,this.docs=new rt(q.comparator),this.size=0}}class Cr extends mr{applyChanges(t){const e=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?e.push(this.Yn.addEntry(t,r)):this.Yn.removeEntry(n)})),Y.waitFor(e)}getFromCache(t,e){return this.Yn.getEntry(t,e)}getAllFromCache(t,e){return this.Yn.getEntries(t,e)}constructor(t){super(),this.Yn=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar{forEachTarget(t,e){return this.Rs.forEach(((t,n)=>e(n))),Y.resolve()}getLastRemoteSnapshotVersion(t){return Y.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return Y.resolve(this.bs)}allocateTargetId(t){return this.highestTargetId=this.vs.next(),Y.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.bs&&(this.bs=e),Y.resolve()}Dn(t){this.Rs.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.vs=new gr(e),this.highestTargetId=e),t.sequenceNumber>this.bs&&(this.bs=t.sequenceNumber)}addTargetData(t,e){return this.Dn(e),this.targetCount+=1,Y.resolve()}updateTargetData(t,e){return this.Dn(e),Y.resolve()}removeTargetData(t,e){return this.Rs.delete(e.target),this.Ps.ls(e.targetId),this.targetCount-=1,Y.resolve()}removeTargets(t,e,n){let r=0;const i=[];return this.Rs.forEach(((s,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Rs.delete(s),i.push(this.removeMatchingKeysForTargetId(t,o.targetId)),r++)})),Y.waitFor(i).next((()=>r))}getTargetCount(t){return Y.resolve(this.targetCount)}getTargetData(t,e){const n=this.Rs.get(e)||null;return Y.resolve(n)}addMatchingKeys(t,e,n){return this.Ps.us(e,n),Y.resolve()}removeMatchingKeys(t,e,n){this.Ps.hs(e,n);const r=this.persistence.referenceDelegate,i=[];return r&&e.forEach((e=>{i.push(r.markPotentiallyOrphaned(t,e))})),Y.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this.Ps.ls(e),Y.resolve()}getMatchingKeysForTargetId(t,e){const n=this.Ps.ds(e);return Y.resolve(n)}containsKey(t,e){return Y.resolve(this.Ps.containsKey(e))}constructor(t){this.persistence=t,this.Rs=new sn((t=>$t(t)),Kt),this.lastRemoteSnapshotVersion=B.min(),this.highestTargetId=0,this.bs=0,this.Ps=new br,this.targetCount=0,this.vs=gr.Pn()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r{start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Er,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.Vs[t.toKey()];return n||(n=new Ir(e,this.referenceDelegate),this.Vs[t.toKey()]=n),n}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(t,e,n){p("MemoryPersistence","Starting transaction:",t);const r=new Dr(this.Ss.next());return this.referenceDelegate.ks(),n(r).next((t=>this.referenceDelegate.Os(r).next((()=>t)))).toPromise().then((t=>(r.raiseOnCommittedEvent(),t)))}Ms(t,e){return Y.or(Object.values(this.Vs).map((n=>()=>n.containsKey(t,e))))}constructor(t,e){this.Vs={},this.overlays={},this.Ss=new Z(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=t(this),this.Cs=new Ar(this),this.indexManager=new fr,this.remoteDocumentCache=new Sr((t=>this.referenceDelegate.xs(t))),this.It=new cr(e),this.Ns=new wr(this.It)}}class Dr extends W{constructor(t){super(),this.currentSequenceNumber=t}}class xr{static Bs(t){return new xr(t)}get Ls(){if(this.$s)return this.$s;throw v()}addReference(t,e,n){return this.Fs.addReference(n,e),this.Ls.delete(n.toString()),Y.resolve()}removeReference(t,e,n){return this.Fs.removeReference(n,e),this.Ls.add(n.toString()),Y.resolve()}markPotentiallyOrphaned(t,e){return this.Ls.add(e.toString()),Y.resolve()}removeTarget(t,e){this.Fs.ls(e.targetId).forEach((t=>this.Ls.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.Ls.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}ks(){this.$s=new Set}Os(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Y.forEach(this.Ls,(n=>{const r=q.fromPath(n);return this.Us(t,r).next((t=>{t||e.removeEntry(r,B.min())}))})).next((()=>(this.$s=null,e.apply(t))))}updateLimboDocument(t,e){return this.Us(t,e).next((t=>{t?this.Ls.delete(e.toString()):this.Ls.add(e.toString())}))}xs(t){return 0}Us(t,e){return Y.or([()=>Y.resolve(this.Fs.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ms(t,e)])}constructor(t){this.persistence=t,this.Fs=new br,this.$s=null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Nr{static Ci(t,e){let n=mn(),r=mn();for(const t of e.docChanges)switch(t.type){case 0:n=n.add(t.doc.key);break;case 1:r=r.add(t.doc.key)}return new Nr(t,e.fromCache,n,r)}constructor(t,e,n,r){this.targetId=t,this.fromCache=e,this.Si=n,this.Di=r}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{initialize(t,e){this.Ni=t,this.indexManager=e,this.xi=!0}getDocumentsMatchingQuery(t,e,n,r){return this.ki(t,e).next((i=>i||this.Oi(t,e,r,n))).next((n=>n||this.Mi(t,e)))}ki(t,e){if(ce(e))return Y.resolve(null);let n=pe(e);return this.indexManager.getIndexType(t,n).next((r=>0===r?null:(null!==e.limit&&1===r&&(e=ge(e,null,"F"),n=pe(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next((r=>{const i=mn(...r);return this.Ni.getDocuments(t,i).next((r=>this.indexManager.getMinOffset(t,n).next((n=>{const s=this.Fi(e,r);return this.$i(e,s,i,n.readTime)?this.ki(t,ge(e,null,"F")):this.Bi(t,s,e,n)}))))})))))}Oi(t,e,n,r){return ce(e)||r.isEqual(B.min())?this.Mi(t,e):this.Ni.getDocuments(t,n).next((i=>{const s=this.Fi(e,i);return this.$i(e,s,n,r)?this.Mi(t,e):(d()<=o.LogLevel.DEBUG&&p("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),ve(e)),this.Bi(t,s,e,K(r,-1)))}))}Fi(t,e){let n=new ot(be(t));return e.forEach(((e,r)=>{we(t,r)&&(n=n.add(r))})),n}$i(t,e,n,r){if(null===t.limit)return!1;if(n.size!==e.size)return!0;const i="F"===t.limitType?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Mi(t,e){return d()<=o.LogLevel.DEBUG&&p("QueryEngine","Using full collection scan to execute query:",ve(e)),this.Ni.getDocumentsMatchingQuery(t,e,z.min())}Bi(t,e,n,r){return this.Ni.getDocumentsMatchingQuery(t,n,r).next((t=>(e.forEach((e=>{t=t.insert(e.key,e)})),t)))}constructor(){this.xi=!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr{Qi(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new vr(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.Ui)))}constructor(t,e,n,r){this.persistence=t,this.Li=e,this.It=r,this.Ui=new rt(O),this.qi=new sn((t=>$t(t)),Kt),this.Ki=new Map,this.Gi=t.getRemoteDocumentCache(),this.Cs=t.getTargetCache(),this.Ns=t.getBundleCache(),this.Qi(n)}}function Lr(t,e,n,r){return new Rr(t,e,n,r)}async function Or(t,e){const n=E(t);return await n.persistence.runTransaction("Handle user change","readonly",(t=>{let r;return n.mutationQueue.getAllMutationBatches(t).next((i=>(r=i,n.Qi(e),n.mutationQueue.getAllMutationBatches(t)))).next((e=>{const i=[],s=[];let o=mn();for(const t of r){i.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){s.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return n.localDocuments.getDocuments(t,o).next((t=>({ji:t,removedBatchIds:i,addedBatchIds:s})))}))}))}function Mr(t){const e=E(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Cs.getLastRemoteSnapshotVersion(t)))}function Ur(t,e,n){let r=mn(),i=mn();return n.forEach((t=>r=r.add(t))),e.getEntries(t,r).next((t=>{let r=an();return n.forEach(((n,s)=>{const o=t.get(n);s.isFoundDocument()!==o.isFoundDocument()&&(i=i.add(n)),s.isNoDocument()&&s.version.isEqual(B.min())?(e.removeEntry(n,s.readTime),r=r.insert(n,s)):!o.isValidDocument()||s.version.compareTo(o.version)>0||0===s.version.compareTo(o.version)&&o.hasPendingWrites?(e.addEntry(s),r=r.insert(n,s)):p("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",s.version)})),{Wi:r,zi:i}}))}function Br(t,e){const n=E(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(t=>(void 0===e&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(t,e))))}function Pr(t,e){const n=E(t);return n.persistence.runTransaction("Allocate target","readwrite",(t=>{let r;return n.Cs.getTargetData(t,e).next((i=>i?(r=i,Y.resolve(r)):n.Cs.allocateTargetId(t).next((i=>(r=new ur(e,i,0,t.currentSequenceNumber),n.Cs.addTargetData(t,r).next((()=>r)))))))})).then((t=>{const r=n.Ui.get(t.targetId);return(null===r||t.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Ui=n.Ui.insert(t.targetId,t),n.qi.set(e,t.targetId)),t}))}async function Fr(t,e,n){const r=E(t),i=r.Ui.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,(t=>r.persistence.referenceDelegate.removeTarget(t,i)))}catch(t){if(!J(t))throw t;p("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}r.Ui=r.Ui.remove(e),r.qi.delete(i.target)}function Vr(t,e,n){const r=E(t);let i=B.min(),s=mn();return r.persistence.runTransaction("Execute query","readonly",(t=>function(t,e,n){const r=E(t),i=r.qi.get(n);return void 0!==i?Y.resolve(r.Ui.get(i)):r.Cs.getTargetData(e,n)}(r,t,pe(e)).next((e=>{if(e)return i=e.lastLimboFreeSnapshotVersion,r.Cs.getMatchingKeysForTargetId(t,e.targetId).next((t=>{s=t}))})).next((()=>r.Li.getDocumentsMatchingQuery(t,e,n?i:B.min(),n?s:mn()))).next((t=>(jr(r,Ee(e),t),{documents:t,Hi:s})))))}function jr(t,e,n){let r=t.Ki.get(e)||B.min();n.forEach(((t,e)=>{e.readTime.compareTo(r)>0&&(r=e.readTime)})),t.Ki.set(e,r)}class qr{er(t){this.activeTargetIds=this.activeTargetIds.add(t)}nr(t){this.activeTargetIds=this.activeTargetIds.delete(t)}tr(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}constructor(){this.activeTargetIds=vn()}}class $r{addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.Lr.er(t),this.Ur[t]||"not-current"}updateQueryState(t,e,n){this.Ur[t]=e}removeLocalQueryTarget(t){this.Lr.nr(t)}isLocalQueryTarget(t){return this.Lr.activeTargetIds.has(t)}clearQueryState(t){delete this.Ur[t]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(t){return this.Lr.activeTargetIds.has(t)}start(){return this.Lr=new qr,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}constructor(){this.Lr=new qr,this.Ur={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{qr(t){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{qr(t){this.Wr.push(t)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){p("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.Wr)t(0)}jr(){p("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.Wr)t(1)}static C(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zr={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{Yr(t){this.Xr=t}Zr(t){this.eo=t}onMessage(t){this.no=t}close(){this.Jr()}send(t){this.Hr(t)}so(){this.Xr()}io(t){this.eo(t)}ro(t){this.no(t)}constructor(t){this.Hr=t.Hr,this.Jr=t.Jr}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr extends class{get co(){return!1}ao(t,e,n,r,i){const s=this.ho(t,e);p("RestConnection","Sending: ",s,n);const o={};return this.lo(o,r,i),this.fo(t,s,o,n).then((t=>(p("RestConnection","Received: ",t),t)),(e=>{throw m("RestConnection",`${t} failed with error: `,e,"url: ",s,"request:",n),e}))}_o(t,e,n,r,i,s){return this.ao(t,e,n,r,i)}lo(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+h,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}ho(t,e){const n=zr[t];return`${this.oo}/v1/${e}:${n}`}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.oo=e+"://"+t.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}}{fo(t,e,n,r){return new Promise(((i,s)=>{const o=new(0,u.XhrIo);o.setWithCredentials(!0),o.listenOnce(u.EventType.COMPLETE,(()=>{var e;try{switch(o.getLastErrorCode()){case u.ErrorCode.NO_ERROR:const n=o.getResponseJson();p("Connection","XHR received:",JSON.stringify(n)),i(n);break;case u.ErrorCode.TIMEOUT:p("Connection",'RPC "'+t+'" timed out'),s(new T(b.DEADLINE_EXCEEDED,"Request time out"));break;case u.ErrorCode.HTTP_ERROR:const r=o.getStatus();if(p("Connection",'RPC "'+t+'" failed with status:',r,"response text:",o.getResponseText()),r>0){let t=o.getResponseJson();Array.isArray(t)&&(t=t[0]);const n=null===(e=t)||void 0===e?void 0:e.error;if(n&&n.status&&n.message){const t=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(b).indexOf(e)>=0?e:b.UNKNOWN}(n.status);s(new T(t,n.message))}else s(new T(b.UNKNOWN,"Server responded with status "+o.getStatus()))}else s(new T(b.UNAVAILABLE,"Connection failed."));break;default:v()}}finally{p("Connection",'RPC "'+t+'" completed.')}}));const a=JSON.stringify(r);o.send(e,"POST",a,n,15)}))}wo(t,e,n){const r=[this.oo,"/","google.firestore.v1.Firestore","/",t,"/channel"],i=(0,u.createWebChannelTransport)(),s=(0,u.getStatEventTarget)(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new(0,u.FetchXmlHttpFactory)({})),this.lo(o.initMessageHeaders,e,n),o.encodeInitMessageHeaders=!0;const a=r.join("");p("Connection","Creating WebChannel: "+a,o);const c=i.createWebChannel(a,o);let l=!1,h=!1;const f=new Gr({Hr:t=>{h?p("Connection","Not sending because WebChannel is closed:",t):(l||(p("Connection","Opening WebChannel transport."),c.open(),l=!0),p("Connection","WebChannel sending:",t),c.send(t))},Jr:()=>c.close()}),d=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return d(c,u.WebChannel.EventType.OPEN,(()=>{h||p("Connection","WebChannel transport opened.")})),d(c,u.WebChannel.EventType.CLOSE,(()=>{h||(h=!0,p("Connection","WebChannel transport closed"),f.io())})),d(c,u.WebChannel.EventType.ERROR,(t=>{h||(h=!0,m("Connection","WebChannel transport errored:",t),f.io(new T(b.UNAVAILABLE,"The operation could not be completed")))})),d(c,u.WebChannel.EventType.MESSAGE,(t=>{var e;if(!h){const n=t.data[0];w(!!n);const r=n,i=r.error||(null===(e=r[0])||void 0===e?void 0:e.error);if(i){p("Connection","WebChannel received error:",i);const t=i.status;let e=function(t){const e=tn[t];if(void 0!==e)return rn(e)}(t),n=i.message;void 0===e&&(e=b.INTERNAL,n="Unknown error status: "+t+" with message "+i.message),h=!0,f.io(new T(e,n)),c.close()}else p("Connection","WebChannel received:",n),f.ro(n)}})),d(s,u.Event.STAT_EVENT,(t=>{t.stat===u.Stat.PROXY?p("Connection","Detected buffering proxy"):t.stat===u.Stat.NOPROXY&&p("Connection","Detected no buffering proxy")})),setTimeout((()=>{f.so()}),0),f}constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wr(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xr(t){return new Nn(t,!0)}class Yr{reset(){this.Io=0}Ao(){this.Io=this.po}Ro(t){this.cancel();const e=Math.floor(this.Io+this.bo()),n=Math.max(0,Date.now()-this.Eo),r=Math.max(0,e-n);r>0&&p("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Io} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,r,(()=>(this.Eo=Date.now(),t()))),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){null!==this.To&&(this.To.skipDelay(),this.To=null)}cancel(){null!==this.To&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}constructor(t,e,n=1e3,r=1.5,i=6e4){this.Hs=t,this.timerId=e,this.mo=n,this.yo=r,this.po=i,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{No(){return 1===this.state||5===this.state||this.ko()}ko(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&null===this.Do&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,(()=>this.$o())))}Bo(t){this.Lo(),this.stream.send(t)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(t,e){this.Lo(),this.Uo(),this.xo.cancel(),this.So++,4!==t?this.xo.reset():e&&e.code===b.RESOURCE_EXHAUSTED?(g(e.toString()),g("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):e&&e.code===b.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.qo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Zr(e)}qo(){}auth(){this.state=1;const t=this.Ko(this.So),e=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([t,n])=>{this.So===e&&this.Go(t,n)}),(e=>{t((()=>{const t=new T(b.UNKNOWN,"Fetching auth token failed: "+e.message);return this.Qo(t)}))}))}Go(t,e){const n=this.Ko(this.So);this.stream=this.jo(t,e),this.stream.Yr((()=>{n((()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,(()=>(this.ko()&&(this.state=3),Promise.resolve()))),this.listener.Yr())))})),this.stream.Zr((t=>{n((()=>this.Qo(t)))})),this.stream.onMessage((t=>{n((()=>this.onMessage(t)))}))}Oo(){this.state=5,this.xo.Ro((async()=>{this.state=0,this.start()}))}Qo(t){return p("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Ko(t){return e=>{this.Hs.enqueueAndForget((()=>this.So===t?e():(p("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}constructor(t,e,n,r,i,s,o,a){this.Hs=t,this.vo=n,this.Vo=r,this.connection=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new Yr(t,e)}}class Zr extends Jr{jo(t,e){return this.connection.wo("Listen",t,e)}onMessage(t){this.xo.reset();const e=function(t,e){let n;if("targetChange"in e){e.targetChange;const i="NO_CHANGE"===(r=e.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===r?1:"REMOVE"===r?2:"CURRENT"===r?3:"RESET"===r?4:v(),s=e.targetChange.targetIds||[],o=function(t,e){return t.gt?(w(void 0===e||"string"==typeof e),lt.fromBase64String(e||"")):(w(void 0===e||e instanceof Uint8Array),lt.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),a=e.targetChange.cause,u=a&&function(t){const e=void 0===t.code?b.UNKNOWN:rn(t.code);return new T(e,t.message||"")}(a);n=new In(i,s,o,u||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Pn(t,r.document.name),s=On(r.document.updateTime),o=new Pt({mapValue:{fields:r.document.fields}}),a=Vt.newFoundDocument(i,s,o),u=r.targetIds||[],c=r.removedTargetIds||[];n=new bn(u,c,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Pn(t,r.document),s=r.readTime?On(r.readTime):B.min(),o=Vt.newNoDocument(i,s),a=r.removedTargetIds||[];n=new bn([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Pn(t,r.document),s=r.removedTargetIds||[];n=new bn([],s,i,null)}else{if(!("filter"in e))return v();{e.filter;const t=e.filter;t.targetId;const r=t.count||0,i=new Ze(r),s=t.targetId;n=new Tn(s,i)}}var r;return n}(this.It,t),n=function(t){if(!("targetChange"in t))return B.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?B.min():e.readTime?On(e.readTime):B.min()}(t);return this.listener.Wo(e,n)}zo(t){const e={};e.database=jn(this.It),e.addTarget=function(t,e){let n;const r=e.target;return n=Ht(r)?{documents:Hn(t,r)}:{query:zn(t,r)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0?n.resumeToken=Rn(t,e.resumeToken):e.snapshotVersion.compareTo(B.min())>0&&(n.readTime=kn(t,e.snapshotVersion.toTimestamp())),n}(this.It,t);const n=function(t,e){const n=function(t,e){switch(e){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return v()}}(0,e.purpose);return null==n?null:{"goog-listen-tags":n}}(this.It,t);n&&(e.labels=n),this.Bo(e)}Ho(t){const e={};e.database=jn(this.It),e.removeTarget=t,this.Bo(e)}constructor(t,e,n,r,i,s){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,r,s),this.It=i}}class ti extends Jr{get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Jo&&this.Xo([])}jo(t,e){return this.connection.wo("Write",t,e)}onMessage(t){if(w(!!t.streamToken),this.lastStreamToken=t.streamToken,this.Jo){this.xo.reset();const r=(e=t.writeResults,n=t.commitTime,e&&e.length>0?(w(void 0!==n),e.map((t=>function(t,e){let n=t.updateTime?On(t.updateTime):On(e);return n.isEqual(B.min())&&(n=On(e)),new Be(n,t.transformResults||[])}(t,n)))):[]),i=On(t.commitTime);return this.listener.Zo(i,r)}var e,n;return w(!t.writeResults||0===t.writeResults.length),this.Jo=!0,this.listener.tu()}eu(){const t={};t.database=jn(this.It),this.Bo(t)}Xo(t){const e={streamToken:this.lastStreamToken,writes:t.map((t=>Kn(this.It,t)))};this.Bo(e)}constructor(t,e,n,r,i,s){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,r,s),this.It=i,this.Jo=!1}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei extends class{}{su(){if(this.nu)throw new T(b.FAILED_PRECONDITION,"The client has already been terminated.")}ao(t,e,n){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,i])=>this.connection.ao(t,e,n,r,i))).catch((t=>{throw"FirebaseError"===t.name?(t.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new T(b.UNKNOWN,t.toString())}))}_o(t,e,n,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,s])=>this.connection._o(t,e,n,i,s,r))).catch((t=>{throw"FirebaseError"===t.name?(t.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new T(b.UNKNOWN,t.toString())}))}terminate(){this.nu=!0}constructor(t,e,n,r){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.It=r,this.nu=!1}}class ni{uu(){0===this.iu&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve()))))}hu(t){"Online"===this.state?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.cu("Offline")))}set(t){this.lu(),this.iu=0,"Online"===t&&(this.ou=!1),this.cu(t)}cu(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}au(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(g(e),this.ou=!1):p("OnlineStateTracker",e)}lu(){null!==this.ru&&(this.ru.cancel(),this.ru=null)}constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(t,e,n,r,i){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=i,this.mu.qr((t=>{n.enqueueAndForget((async()=>{fi(this)&&(p("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=E(t);e._u.add(4),await si(e),e.gu.set("Unknown"),e._u.delete(4),await ii(e)}(this))}))})),this.gu=new ni(n,r)}}async function ii(t){if(fi(t))for(const e of t.wu)await e(!0)}async function si(t){for(const e of t.wu)await e(!1)}function oi(t,e){const n=E(t);n.du.has(e.targetId)||(n.du.set(e.targetId,e),hi(n)?li(n):Ni(n).ko()&&ui(n,e))}function ai(t,e){const n=E(t),r=Ni(n);n.du.delete(e),r.ko()&&ci(n,e),0===n.du.size&&(r.ko()?r.Fo():fi(n)&&n.gu.set("Unknown"))}function ui(t,e){t.yu.Mt(e.targetId),Ni(t).zo(e)}function ci(t,e){t.yu.Mt(e),Ni(t).Ho(e)}function li(t){t.yu=new Cn({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),se:e=>t.du.get(e)||null}),Ni(t).start(),t.gu.uu()}function hi(t){return fi(t)&&!Ni(t).No()&&t.du.size>0}function fi(t){return 0===E(t)._u.size}function di(t){t.yu=void 0}async function pi(t){t.du.forEach(((e,n)=>{ui(t,e)}))}async function gi(t,e){di(t),hi(t)?(t.gu.hu(e),li(t)):t.gu.set("Unknown")}async function mi(t,e,n){if(t.gu.set("Online"),e instanceof In&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const r of e.targetIds)t.du.has(r)&&(await t.remoteSyncer.rejectListen(r,n),t.du.delete(r),t.yu.removeTarget(r))}(t,e)}catch(n){p("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await yi(t,n)}else if(e instanceof bn?t.yu.Gt(e):e instanceof Tn?t.yu.Yt(e):t.yu.Wt(e),!n.isEqual(B.min()))try{const e=await Mr(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.yu.te(e);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=t.du.get(r);i&&t.du.set(r,i.withResumeToken(n.resumeToken,e))}})),n.targetMismatches.forEach((e=>{const n=t.du.get(e);if(!n)return;t.du.set(e,n.withResumeToken(lt.EMPTY_BYTE_STRING,n.snapshotVersion)),ci(t,e);const r=new ur(n.target,e,1,n.sequenceNumber);ui(t,r)})),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){p("RemoteStore","Failed to raise snapshot:",e),await yi(t,e)}}async function yi(t,e,n){if(!J(e))throw e;t._u.add(1),await si(t),t.gu.set("Offline"),n||(n=()=>Mr(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{p("RemoteStore","Retrying IndexedDB access"),await n(),t._u.delete(1),await ii(t)}))}function vi(t,e){return e().catch((n=>yi(t,n,e)))}async function wi(t){const e=E(t),n=ki(e);let r=e.fu.length>0?e.fu[e.fu.length-1].batchId:-1;for(;Ei(e);)try{const t=await Br(e.localStore,r);if(null===t){0===e.fu.length&&n.Fo();break}r=t.batchId,bi(e,t)}catch(t){await yi(e,t)}Ti(e)&&Ii(e)}function Ei(t){return fi(t)&&t.fu.length<10}function bi(t,e){t.fu.push(e);const n=ki(t);n.ko()&&n.Yo&&n.Xo(e.mutations)}function Ti(t){return fi(t)&&!ki(t).No()&&t.fu.length>0}function Ii(t){ki(t).start()}async function Si(t){ki(t).eu()}async function Ci(t){const e=ki(t);for(const n of t.fu)e.Xo(n.mutations)}async function Ai(t,e,n){const r=t.fu.shift(),i=or.from(r,e,n);await vi(t,(()=>t.remoteSyncer.applySuccessfulWrite(i))),await wi(t)}async function _i(t,e){e&&ki(t).Yo&&await async function(t,e){if(nn(n=e.code)&&n!==b.ABORTED){const n=t.fu.shift();ki(t).Mo(),await vi(t,(()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e))),await wi(t)}var n}(t,e),Ti(t)&&Ii(t)}async function Di(t,e){const n=E(t);n.asyncQueue.verifyOperationInProgress(),p("RemoteStore","RemoteStore received new credentials");const r=fi(n);n._u.add(3),await si(n),r&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n._u.delete(3),await ii(n)}async function xi(t,e){const n=E(t);e?(n._u.delete(2),await ii(n)):e||(n._u.add(2),await si(n),n.gu.set("Unknown"))}function Ni(t){return t.pu||(t.pu=function(t,e,n){const r=E(t);return r.su(),new Zr(e,r.connection,r.authCredentials,r.appCheckCredentials,r.It,n)}(t.datastore,t.asyncQueue,{Yr:pi.bind(null,t),Zr:gi.bind(null,t),Wo:mi.bind(null,t)}),t.wu.push((async e=>{e?(t.pu.Mo(),hi(t)?li(t):t.gu.set("Unknown")):(await t.pu.stop(),di(t))}))),t.pu}function ki(t){return t.Iu||(t.Iu=function(t,e,n){const r=E(t);return r.su(),new ti(e,r.connection,r.authCredentials,r.appCheckCredentials,r.It,n)}(t.datastore,t.asyncQueue,{Yr:Si.bind(null,t),Zr:_i.bind(null,t),tu:Ci.bind(null,t),Zo:Ai.bind(null,t)}),t.wu.push((async e=>{e?(t.Iu.Mo(),await wi(t)):(await t.Iu.stop(),t.fu.length>0&&(p("RemoteStore",`Stopping write stream with ${t.fu.length} pending writes`),t.fu=[]))}))),t.Iu
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Ri{static createAndSchedule(t,e,n,r,i){const s=Date.now()+n,o=new Ri(t,e,s,r,i);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new T(b.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}constructor(t,e,n,r,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new I,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}}function Li(t,e){if(g("AsyncQueue",`${e}: ${t}`),J(t))return new T(b.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{static emptySet(t){return new Oi(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Oi))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(!t.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new Oi;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}constructor(t){this.comparator=t?(e,n)=>t(e,n)||q.comparator(e.key,n.key):(t,e)=>q.comparator(t.key,e.key),this.keyedMap=cn(),this.sortedSet=new rt(this.comparator)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{track(t){const e=t.doc.key,n=this.Tu.get(e);n?0!==t.type&&3===n.type?this.Tu=this.Tu.insert(e,t):3===t.type&&1!==n.type?this.Tu=this.Tu.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.Tu=this.Tu.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.Tu=this.Tu.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.Tu=this.Tu.remove(e):1===t.type&&2===n.type?this.Tu=this.Tu.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.Tu=this.Tu.insert(e,{type:2,doc:t.doc}):v():this.Tu=this.Tu.insert(e,t)}Eu(){const t=[];return this.Tu.inorderTraversal(((e,n)=>{t.push(n)})),t}constructor(){this.Tu=new rt(q.comparator)}}class Ui{static fromInitialDocuments(t,e,n,r,i){const s=[];return e.forEach((t=>{s.push({type:0,doc:t})})),new Ui(t,e,Oi.emptySet(e),s,n,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&me(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let t=0;t<e.length;t++)if(e[t].type!==n[t].type||!e[t].doc.isEqual(n[t].doc))return!1;return!0}constructor(t,e,n,r,i,s,o,a,u){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=u}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{constructor(){this.Au=void 0,this.listeners=[]}}class Pi{constructor(){this.queries=new sn((t=>ye(t)),me),this.onlineState="Unknown",this.Ru=new Set}}async function Fi(t,e){const n=E(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new Bi),i)try{s.Au=await n.onListen(r)}catch(t){const n=Li(t,`Initialization of query '${ve(e.query)}' failed`);return void e.onError(n)}n.queries.set(r,s),s.listeners.push(e),e.bu(n.onlineState),s.Au&&e.Pu(s.Au)&&$i(n)}async function Vi(t,e){const n=E(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const t=s.listeners.indexOf(e);t>=0&&(s.listeners.splice(t,1),i=0===s.listeners.length)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function ji(t,e){const n=E(t);let r=!1;for(const t of e){const e=t.query,i=n.queries.get(e);if(i){for(const e of i.listeners)e.Pu(t)&&(r=!0);i.Au=t}}r&&$i(n)}function qi(t,e,n){const r=E(t),i=r.queries.get(e);if(i)for(const t of i.listeners)t.onError(n);r.queries.delete(e)}function $i(t){t.Ru.forEach((t=>{t.next()}))}class Ki{Pu(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new Ui(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Vu?this.Du(t)&&(this.vu.next(t),e=!0):this.Cu(t,this.onlineState)&&(this.xu(t),e=!0),this.Su=t,e}onError(t){this.vu.error(t)}bu(t){this.onlineState=t;let e=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,t)&&(this.xu(this.Su),e=!0),e}Cu(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return(!this.options.Nu||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||"Offline"===e)}Du(t){if(t.docChanges.length>0)return!0;const e=this.Su&&this.Su.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}xu(t){t=Ui.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Vu=!0,this.vu.next(t)}constructor(t,e,n){this.query=t,this.vu=e,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=n||{}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Hi{constructor(t){this.key=t}}class zi{constructor(t){this.key=t}}class Gi{get ju(){return this.Uu}Wu(t,e){const n=e?e.zu:new Mi,r=e?e.Qu:this.Qu;let i=e?e.mutatedKeys:this.mutatedKeys,s=r,o=!1;const a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,u="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal(((t,e)=>{const c=r.get(t),l=we(this.query,e)?e:null,h=!!c&&this.mutatedKeys.has(c.key),f=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let d=!1;c&&l?c.data.isEqual(l.data)?h!==f&&(n.track({type:3,doc:l}),d=!0):this.Hu(c,l)||(n.track({type:2,doc:l}),d=!0,(a&&this.Gu(l,a)>0||u&&this.Gu(l,u)<0)&&(o=!0)):!c&&l?(n.track({type:0,doc:l}),d=!0):c&&!l&&(n.track({type:1,doc:c}),d=!0,(a||u)&&(o=!0)),d&&(l?(s=s.add(l),i=f?i.add(t):i.delete(t)):(s=s.delete(t),i=i.delete(t)))})),null!==this.query.limit)for(;s.size>this.query.limit;){const t="F"===this.query.limitType?s.last():s.first();s=s.delete(t.key),i=i.delete(t.key),n.track({type:1,doc:t})}return{Qu:s,zu:n,$i:o,mutatedKeys:i}}Hu(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const r=this.Qu;this.Qu=t.Qu,this.mutatedKeys=t.mutatedKeys;const i=t.zu.Eu();i.sort(((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return v()}};return n(t)-n(e)}(t.type,e.type)||this.Gu(t.doc,e.doc))),this.Ju(n);const s=e?this.Yu():[],o=0===this.Ku.size&&this.current?1:0,a=o!==this.qu;return this.qu=o,0!==i.length||a?{snapshot:new Ui(this.query,t.Qu,r,i,t.mutatedKeys,0===o,a,!1,!!n&&n.resumeToken.approximateByteSize()>0),Xu:s}:{Xu:s}}bu(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new Mi,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(t){return!this.Uu.has(t)&&!!this.Qu.has(t)&&!this.Qu.get(t).hasLocalMutations}Ju(t){t&&(t.addedDocuments.forEach((t=>this.Uu=this.Uu.add(t))),t.modifiedDocuments.forEach((t=>{})),t.removedDocuments.forEach((t=>this.Uu=this.Uu.delete(t))),this.current=t.current)}Yu(){if(!this.current)return[];const t=this.Ku;this.Ku=mn(),this.Qu.forEach((t=>{this.Zu(t.key)&&(this.Ku=this.Ku.add(t.key))}));const e=[];return t.forEach((t=>{this.Ku.has(t)||e.push(new zi(t))})),this.Ku.forEach((n=>{t.has(n)||e.push(new Hi(n))})),e}tc(t){this.Uu=t.Hi,this.Ku=mn();const e=this.Wu(t.documents);return this.applyChanges(e,!0)}ec(){return Ui.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,0===this.qu,this.hasCachedResults)}constructor(t,e){this.query=t,this.Uu=e,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=mn(),this.mutatedKeys=mn(),this.Gu=be(t),this.Qu=new Oi(this.Gu)}}class Qi{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class Wi{constructor(t){this.key=t,this.nc=!1}}class Xi{get isPrimaryClient(){return!0===this.dc}constructor(t,e,n,r,i,s){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.sc={},this.ic=new sn((t=>ye(t)),me),this.rc=new Map,this.oc=new Set,this.uc=new rt(q.comparator),this.cc=new Map,this.ac=new br,this.hc={},this.lc=new Map,this.fc=gr.vn(),this.onlineState="Unknown",this.dc=void 0}}async function Yi(t,e){const n=gs(t);let r,i;const s=n.ic.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.ec();else{const t=await Pr(n.localStore,pe(e));n.isPrimaryClient&&oi(n.remoteStore,t);const s=n.sharedClientState.addLocalQueryTarget(t.targetId);r=t.targetId,i=await Ji(n,e,r,"current"===s,t.resumeToken)}return i}async function Ji(t,e,n,r,i){t._c=(e,n,r)=>async function(t,e,n,r){let i=e.view.Wu(n);i.$i&&(i=await Vr(t.localStore,e.query,!1).then((({documents:t})=>e.view.Wu(t,i))));const s=r&&r.targetChanges.get(e.targetId),o=e.view.applyChanges(i,t.isPrimaryClient,s);return cs(t,e.targetId,o.Xu),o.snapshot}(t,e,n,r);const s=await Vr(t.localStore,e,!0),o=new Gi(e,s.Hi),a=o.Wu(s.documents),u=En.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==t.onlineState,i),c=o.applyChanges(a,t.isPrimaryClient,u);cs(t,n,c.Xu);const l=new Qi(e,n,o);return t.ic.set(e,l),t.rc.has(n)?t.rc.get(n).push(e):t.rc.set(n,[e]),c.snapshot}async function Zi(t,e){const n=E(t),r=n.ic.get(e),i=n.rc.get(r.targetId);if(i.length>1)return n.rc.set(r.targetId,i.filter((t=>!me(t,e)))),void n.ic.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Fr(n.localStore,r.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(r.targetId),ai(n.remoteStore,r.targetId),as(n,r.targetId)})).catch(X)):(as(n,r.targetId),await Fr(n.localStore,r.targetId,!0))}async function ts(t,e){const n=E(t);try{const t=await function(t,e){const n=E(t),r=e.snapshotVersion;let i=n.Ui;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(t=>{const s=n.Gi.newChangeBuffer({trackRemovals:!0});i=n.Ui;const o=[];e.targetChanges.forEach(((s,a)=>{const u=i.get(a);if(!u)return;o.push(n.Cs.removeMatchingKeys(t,s.removedDocuments,a).next((()=>n.Cs.addMatchingKeys(t,s.addedDocuments,a))));let c=u.withSequenceNumber(t.currentSequenceNumber);var l,h,f;e.targetMismatches.has(a)?c=c.withResumeToken(lt.EMPTY_BYTE_STRING,B.min()).withLastLimboFreeSnapshotVersion(B.min()):s.resumeToken.approximateByteSize()>0&&(c=c.withResumeToken(s.resumeToken,r)),i=i.insert(a,c),h=c,f=s,(0===(l=u).resumeToken.approximateByteSize()||h.snapshotVersion.toMicroseconds()-l.snapshotVersion.toMicroseconds()>=3e8||f.addedDocuments.size+f.modifiedDocuments.size+f.removedDocuments.size>0)&&o.push(n.Cs.updateTargetData(t,c))}));let a=an(),u=mn();if(e.documentUpdates.forEach((r=>{e.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,r))})),o.push(Ur(t,s,e.documentUpdates).next((t=>{a=t.Wi,u=t.zi}))),!r.isEqual(B.min())){const e=n.Cs.getLastRemoteSnapshotVersion(t).next((e=>n.Cs.setTargetsMetadata(t,t.currentSequenceNumber,r)));o.push(e)}return Y.waitFor(o).next((()=>s.apply(t))).next((()=>n.localDocuments.getLocalViewOfDocuments(t,a,u))).next((()=>a))})).then((t=>(n.Ui=i,t)))}(n.localStore,e);e.targetChanges.forEach(((t,e)=>{const r=n.cc.get(e);r&&(w(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?r.nc=!0:t.modifiedDocuments.size>0?w(r.nc):t.removedDocuments.size>0&&(w(r.nc),r.nc=!1))})),await fs(n,t,e)}catch(t){await X(t)}}function es(t,e,n){const r=E(t);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const t=[];r.ic.forEach(((n,r)=>{const i=r.view.bu(e);i.snapshot&&t.push(i.snapshot)})),function(t,e){const n=E(t);n.onlineState=e;let r=!1;n.queries.forEach(((t,n)=>{for(const t of n.listeners)t.bu(e)&&(r=!0)})),r&&$i(n)}(r.eventManager,e),t.length&&r.sc.Wo(t),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function ns(t,e,n){const r=E(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.cc.get(e),s=i&&i.key;if(s){let t=new rt(q.comparator);t=t.insert(s,Vt.newNoDocument(s,B.min()));const n=mn().add(s),i=new wn(B.min(),new Map,new ot(O),t,n);await ts(r,i),r.uc=r.uc.remove(s),r.cc.delete(e),hs(r)}else await Fr(r.localStore,e,!1).then((()=>as(r,e,n))).catch(X)}async function rs(t,e){const n=E(t),r=e.batch.batchId;try{const t=await function(t,e){const n=E(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(t=>{const r=e.batch.keys(),i=n.Gi.newChangeBuffer({trackRemovals:!0});return function(t,e,n,r){const i=n.batch,s=i.keys();let o=Y.resolve();return s.forEach((t=>{o=o.next((()=>r.getEntry(e,t))).next((e=>{const s=n.docVersions.get(t);w(null!==s),e.version.compareTo(s)<0&&(i.applyToRemoteDocument(e,n),e.isValidDocument()&&(e.setReadTime(n.commitVersion),r.addEntry(e)))}))})),o.next((()=>t.mutationQueue.removeMutationBatch(e,i)))}(n,t,e,i).next((()=>i.apply(t))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,r,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,function(t){let e=mn();for(let n=0;n<t.mutationResults.length;++n)t.mutationResults[n].transformResults.length>0&&(e=e.add(t.batch.mutations[n].key));return e}(e)))).next((()=>n.localDocuments.getDocuments(t,r)))}))}(n.localStore,e);os(n,r,null),ss(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await fs(n,t)}catch(t){await X(t)}}async function is(t,e,n){const r=E(t);try{const t=await function(t,e){const n=E(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",(t=>{let r;return n.mutationQueue.lookupMutationBatch(t,e).next((e=>(w(null!==e),r=e.keys(),n.mutationQueue.removeMutationBatch(t,e)))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,r,e))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,r))).next((()=>n.localDocuments.getDocuments(t,r)))}))}(r.localStore,e);os(r,e,n),ss(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await fs(r,t)}catch(t){await X(t)}}function ss(t,e){(t.lc.get(e)||[]).forEach((t=>{t.resolve()})),t.lc.delete(e)}function os(t,e,n){const r=E(t);let i=r.hc[r.currentUser.toKey()];if(i){const t=i.get(e);t&&(n?t.reject(n):t.resolve(),i=i.remove(e)),r.hc[r.currentUser.toKey()]=i}}function as(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.rc.get(e))t.ic.delete(r),n&&t.sc.wc(r,n);t.rc.delete(e),t.isPrimaryClient&&t.ac.ls(e).forEach((e=>{t.ac.containsKey(e)||us(t,e)}))}function us(t,e){t.oc.delete(e.path.canonicalString());const n=t.uc.get(e);null!==n&&(ai(t.remoteStore,n),t.uc=t.uc.remove(e),t.cc.delete(n),hs(t))}function cs(t,e,n){for(const r of n)r instanceof Hi?(t.ac.addReference(r.key,e),ls(t,r)):r instanceof zi?(p("SyncEngine","Document no longer in limbo: "+r.key),t.ac.removeReference(r.key,e),t.ac.containsKey(r.key)||us(t,r.key)):v()}function ls(t,e){const n=e.key,r=n.path.canonicalString();t.uc.get(n)||t.oc.has(r)||(p("SyncEngine","New document in limbo: "+n),t.oc.add(r),hs(t))}function hs(t){for(;t.oc.size>0&&t.uc.size<t.maxConcurrentLimboResolutions;){const e=t.oc.values().next().value;t.oc.delete(e);const n=new q(F.fromString(e)),r=t.fc.next();t.cc.set(r,new Wi(n)),t.uc=t.uc.insert(n,r),oi(t.remoteStore,new ur(pe(ue(n.path)),r,2,Z.at))}}async function fs(t,e,n){const r=E(t),i=[],s=[],o=[];r.ic.isEmpty()||(r.ic.forEach(((t,a)=>{o.push(r._c(a,e,n).then((t=>{if((t||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,(null==t?void 0:t.fromCache)?"not-current":"current"),t){i.push(t);const e=Nr.Ci(a.targetId,t);s.push(e)}})))})),await Promise.all(o),r.sc.Wo(i),await async function(t,e){const n=E(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>Y.forEach(e,(e=>Y.forEach(e.Si,(r=>n.persistence.referenceDelegate.addReference(t,e.targetId,r))).next((()=>Y.forEach(e.Di,(r=>n.persistence.referenceDelegate.removeReference(t,e.targetId,r)))))))))}catch(t){if(!J(t))throw t;p("LocalStore","Failed to update sequence numbers: "+t)}for(const t of e){const e=t.targetId;if(!t.fromCache){const t=n.Ui.get(e),r=t.snapshotVersion,i=t.withLastLimboFreeSnapshotVersion(r);n.Ui=n.Ui.insert(e,i)}}}(r.localStore,s))}async function ds(t,e){const n=E(t);if(!n.currentUser.isEqual(e)){p("SyncEngine","User change. New user:",e.toKey());const t=await Or(n.localStore,e);n.currentUser=e,(r=n).lc.forEach((t=>{t.forEach((t=>{t.reject(new T(b.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))}))})),r.lc.clear(),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await fs(n,t.ji)}var r}function ps(t,e){const n=E(t),r=n.cc.get(e);if(r&&r.nc)return mn().add(r.key);{let t=mn();const r=n.rc.get(e);if(!r)return t;for(const e of r){const r=n.ic.get(e);t=t.unionWith(r.view.ju)}return t}}function gs(t){const e=E(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=ts.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=ps.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=ns.bind(null,e),e.sc.Wo=ji.bind(null,e.eventManager),e.sc.wc=qi.bind(null,e.eventManager),e}function ms(t){const e=E(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=rs.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=is.bind(null,e),e}class ys{async initialize(t){this.It=Xr(t.databaseInfo.databaseId),this.sharedClientState=this.gc(t),this.persistence=this.yc(t),await this.persistence.start(),this.localStore=this.Ic(t),this.gcScheduler=this.Tc(t,this.localStore),this.indexBackfillerScheduler=this.Ec(t,this.localStore)}Tc(t,e){return null}Ec(t,e){return null}Ic(t){return Lr(this.persistence,new kr,t.initialUser,this.It)}yc(t){return new _r(xr.Bs,this.It)}gc(t){return new $r}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}constructor(){this.synchronizeTabs=!1}}class vs{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>es(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=ds.bind(null,this.syncEngine),await xi(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new Pi}createDatastore(t){const e=Xr(t.databaseInfo.databaseId),n=(r=t.databaseInfo,new Qr(r));var r,i,s;return i=t.authCredentials,s=t.appCheckCredentials,new ei(i,s,n,e)}createRemoteStore(t){var e,n,r,i,s;return e=this.localStore,n=this.datastore,r=t.asyncQueue,i=t=>es(this.syncEngine,t,0),s=Hr.C()?new Hr:new Kr,new ri(e,n,r,i,s)}createSyncEngine(t,e){return function(t,e,n,r,i,s,o){const a=new Xi(t,e,n,r,i,s);return o&&(a.dc=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=E(t);p("RemoteStore","RemoteStore shutting down."),e._u.add(5),await si(e),e.mu.shutdown(),e.gu.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ws(t,e,n){if(!n)throw new T(b.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Es(t){if(!q.isDocumentKey(t))throw new T(b.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function bs(t){if(q.isDocumentKey(t))throw new T(b.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Ts(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const n=(e=t).constructor?e.constructor.name:null;return n?`a custom ${n} object`:"an object"}}var e;return"function"==typeof t?"a function":v()}function Is(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new T(b.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ts(t);throw new T(b.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ss=new Map;class Cs{isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new T(b.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new T(b.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,function(t,e,n,r){if(!0===e&&!0===r)throw new T(b.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{get app(){if(!this._app)throw new T(b.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new T(b.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Cs(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new C;switch(t.type){case"gapi":const e=t.client;return new x(e,t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new T(b.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=Ss.get(t);e&&(p("ComponentProvider","Removing Datastore"),Ss.delete(t),e.terminate())}(this),Promise.resolve()}constructor(t,e,n,r){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Cs({}),this._settingsFrozen=!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _s{get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new xs(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new _s(this.firestore,t,this._key)}constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}}class Ds{withConverter(t){return new Ds(this.firestore,t,this._query)}constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}}class xs extends Ds{get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new _s(this.firestore,null,new q(t))}withConverter(t){return new xs(this.firestore,t,this._path)}constructor(t,e,n){super(t,e,ue(n)),this._path=n,this.type="collection"}}function Ns(t,e,...n){if(t=(0,a.getModularInstance)(t),ws("collection","path",e),t instanceof As){const r=F.fromString(e,...n);return bs(r),new xs(t,null,r)}{if(!(t instanceof _s||t instanceof xs))throw new T(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(F.fromString(e,...n));return bs(r),new xs(t.firestore,null,r)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ks{next(t){this.observer.next&&this.Rc(this.observer.next,t)}error(t){this.observer.error?this.Rc(this.observer.error,t):g("Uncaught Error in snapshot listener:",t.toString())}bc(){this.muted=!0}Rc(t,e){this.muted||setTimeout((()=>{this.muted||t(e)}),0)}constructor(t){this.observer=t,this.muted=!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Rs{async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new T(b.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new I;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=Li(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}constructor(t,e,n,r){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=r,this.user=l.UNAUTHENTICATED,this.clientId=L.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async t=>{p("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(t=>(p("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}}async function Ls(t,e){t.asyncQueue.verifyOperationInProgress(),p("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener((async t=>{r.isEqual(t)||(await Or(e.localStore,t),r=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t.offlineComponents=e}async function Os(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Ms(t);p("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener((t=>Di(e.remoteStore,t))),t.setAppCheckTokenChangeListener(((t,n)=>Di(e.remoteStore,n))),t.onlineComponents=e}async function Ms(t){return t.offlineComponents||(p("FirestoreClient","Using default OfflineComponentProvider"),await Ls(t,new ys)),t.offlineComponents}async function Us(t){return t.onlineComponents||(p("FirestoreClient","Using default OnlineComponentProvider"),await Os(t,new vs)),t.onlineComponents}function Bs(t){return Us(t).then((t=>t.syncEngine))}async function Ps(t){const e=await Us(t),n=e.eventManager;return n.onListen=Yi.bind(null,e.syncEngine),n.onUnlisten=Zi.bind(null,e.syncEngine),n}function Fs(t,e,n={}){const r=new I;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,r,i){const s=new ks({next:n=>{e.enqueueAndForget((()=>Vi(t,o))),n.fromCache&&"server"===r.source?i.reject(new T(b.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:t=>i.reject(t)}),o=new Ki(n,s,{includeMetadataChanges:!0,Nu:!0});return Fi(t,o)}(await Ps(t),t.asyncQueue,e,n,r))),r.promise}class Vs{get isShuttingDown(){return this.Uc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.zc(),this.Hc(t)}enterRestrictedMode(t){if(!this.Uc){this.Uc=!0,this.Qc=t||!1;const e=Wr();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Wc)}}enqueue(t){if(this.zc(),this.Uc)return new Promise((()=>{}));const e=new I;return this.Hc((()=>this.Uc&&this.Qc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Lc.push(t),this.Jc())))}async Jc(){if(0!==this.Lc.length){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(t){if(!J(t))throw t;p("AsyncQueue","Operation failed with retryable error: "+t)}this.Lc.length>0&&this.xo.Ro((()=>this.Jc()))}}Hc(t){const e=this.Bc.then((()=>(this.Gc=!0,t().catch((t=>{this.Kc=t,this.Gc=!1;throw g("INTERNAL UNHANDLED ERROR: ",function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}(t)),t})).then((t=>(this.Gc=!1,t))))));return this.Bc=e,e}enqueueAfterDelay(t,e,n){this.zc(),this.jc.indexOf(t)>-1&&(e=0);const r=Ri.createAndSchedule(this,t,e,n,(t=>this.Yc(t)));return this.qc.push(r),r}zc(){this.Kc&&v()}verifyOperationInProgress(){}async Xc(){let t;do{t=this.Bc,await t}while(t!==this.Bc)}Zc(t){for(const e of this.qc)if(e.timerId===t)return!0;return!1}ta(t){return this.Xc().then((()=>{this.qc.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.qc)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.Xc()}))}ea(t){this.jc.push(t)}Yc(t){const e=this.qc.indexOf(t);this.qc.splice(e,1)}constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.Uc=!1,this.qc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new Yr(this,"async_queue_retry"),this.Wc=()=>{const t=Wr();t&&p("AsyncQueue","Visibility state changed to "+t.visibilityState),this.xo.Po()};const t=Wr();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Wc)}}class js extends As{_terminate(){return this._firestoreClient||Ks(this),this._firestoreClient.terminate()}constructor(t,e,n,r){super(t,e,n,r),this.type="firestore",this._queue=new Vs,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}}function qs(t,e){const n="object"==typeof t?t:(0,r.getApp)(),i="string"==typeof t?t:e||"(default)",s=(0,r._getProvider)(n,"firestore").getImmediate({identifier:i});if(!s._initialized){const t=(0,a.getDefaultEmulatorHostnameAndPort)("firestore");t&&function(t,e,n,r={}){var i;const s=(t=Is(t,As))._getSettings();if("firestore.googleapis.com"!==s.host&&s.host!==e&&m("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let e,n;if("string"==typeof r.mockUserToken)e=r.mockUserToken,n=l.MOCK_USER;else{e=(0,a.createMockUserToken)(r.mockUserToken,null===(i=t._app)||void 0===i?void 0:i.options.projectId);const s=r.mockUserToken.sub||r.mockUserToken.user_id;if(!s)throw new T(b.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new l(s)}t._authCredentials=new A(new S(e,n))}}(s,...t)}return s}function $s(t){return t._firestoreClient||Ks(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Ks(t){var e;const n=t._freezeSettings(),r=(i=t._databaseId,s=(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",o=t._persistenceKey,new vt(i,s,o,(a=n).host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams));var i,s,o,a;t._firestoreClient=new Rs(t._authCredentials,t._appCheckCredentials,t._queue,r)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Hs{static fromBase64String(t){try{return new Hs(lt.fromBase64String(t))}catch(t){throw new T(b.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new Hs(lt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}constructor(t){this._byteString=t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs{isEqual(t){return this._internalPath.isEqual(t._internalPath)}constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new T(b.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new j(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Gs{constructor(t){this._methodName=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return O(this._lat,t._lat)||O(this._long,t._long)}constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new T(b.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new T(b.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ws=/^__.*__$/;class Xs{toMutation(t,e){return null!==this.fieldMask?new Ge(t,this.data,this.fieldMask,e,this.fieldTransforms):new ze(t,this.data,e,this.fieldTransforms)}constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}}function Ys(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw v()}}class Js{get path(){return this.settings.path}get sa(){return this.settings.sa}ia(t){return new Js(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.It,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.ia({path:n,oa:!1});return r.ua(t),r}ca(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.ia({path:n,oa:!1});return r.na(),r}aa(t){return this.ia({path:void 0,oa:!0})}ha(t){return co(t,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(t){return void 0!==this.fieldMask.find((e=>t.isPrefixOf(e)))||void 0!==this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))}na(){if(this.path)for(let t=0;t<this.path.length;t++)this.ua(this.path.get(t))}ua(t){if(0===t.length)throw this.ha("Document fields must not be empty");if(Ys(this.sa)&&Ws.test(t))throw this.ha('Document fields cannot begin and end with "__"')}constructor(t,e,n,r,i,s){this.settings=t,this.databaseId=e,this.It=n,this.ignoreUndefinedProperties=r,void 0===i&&this.na(),this.fieldTransforms=i||[],this.fieldMask=s||[]}}class Zs{da(t,e,n,r=!1){return new Js({sa:t,methodName:e,fa:n,path:j.emptyPath(),oa:!1,la:r},this.databaseId,this.It,this.ignoreUndefinedProperties)}constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.It=n||Xr(t)}}function to(t){const e=t._freezeSettings(),n=Xr(t._databaseId);return new Zs(t._databaseId,!!e.ignoreUndefinedProperties,n)}function eo(t,e,n,r,i,s={}){const o=t.da(s.merge||s.mergeFields?2:0,e,n,i);so("Data must be an object, but it was:",o,r);const a=ro(r,o);let u,c;if(s.merge)u=new ut(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const t=[];for(const r of s.mergeFields){const i=oo(e,r,n);if(!o.contains(i))throw new T(b.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);lo(t,i)||t.push(i)}u=new ut(t),c=o.fieldTransforms.filter((t=>u.covers(t.field)))}else u=null,c=o.fieldTransforms;return new Xs(new Pt(a),u,c)}function no(t,e){if(io(t=(0,a.getModularInstance)(t)))return so("Unsupported field value:",e,t),ro(t,e);if(t instanceof Gs)return function(t,e){if(!Ys(e.sa))throw e.ha(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e.ha(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.oa&&4!==e.sa)throw e.ha("Nested arrays are not supported");return function(t,e){const n=[];let r=0;for(const i of t){let t=no(i,e.aa(r));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),r++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=(0,a.getModularInstance)(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return Ce(e.It,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=U.fromDate(t);return{timestampValue:kn(e.It,n)}}if(t instanceof U){const n=new U(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:kn(e.It,n)}}if(t instanceof Qs)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof Hs)return{bytesValue:Rn(e.It,t._byteString)};if(t instanceof _s){const n=e.databaseId,r=t.firestore._databaseId;if(!r.isEqual(n))throw e.ha(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Mn(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.ha(`Unsupported field value: ${Ts(t)}`)}(t,e)}function ro(t,e){const n={};return nt(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):et(t,((t,r)=>{const i=no(r,e.ra(t));null!=i&&(n[t]=i)})),{mapValue:{fields:n}}}function io(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof U||t instanceof Qs||t instanceof Hs||t instanceof _s||t instanceof Gs)}function so(t,e,n){if(!io(n)||("object"!=typeof(r=n)||null===r||Object.getPrototypeOf(r)!==Object.prototype&&null!==Object.getPrototypeOf(r))){const r=Ts(n);throw"an object"===r?e.ha(t+" a custom object"):e.ha(t+" "+r)}var r}function oo(t,e,n){if((e=(0,a.getModularInstance)(e))instanceof zs)return e._internalPath;if("string"==typeof e)return uo(t,e);throw co("Field path arguments must be of type string or ",t,!1,void 0,n)}const ao=new RegExp("[~\\*/\\[\\]]");function uo(t,e,n){if(e.search(ao)>=0)throw co(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new zs(...e.split("."))._internalPath}catch(r){throw co(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function co(t,e,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new T(b.INVALID_ARGUMENT,a+t+u)}function lo(t,e){return t.some((t=>t.isEqual(e)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho{get id(){return this._key.path.lastSegment()}get ref(){return new _s(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new fo(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(po("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}constructor(t,e,n,r,i){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=r,this._converter=i}}class fo extends ho{data(){return super.data()}}function po(t,e){return"string"==typeof e?uo(t,e):e instanceof zs?e._internalPath:e._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function go(t){if("L"===t.limitType&&0===t.explicitOrderBy.length)throw new T(b.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class mo{convertValue(t,e="none"){switch(St(t)){case 0:return null;case 1:return t.booleanValue;case 2:return dt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(pt(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw v()}}convertObject(t,e){const n={};return et(t.fields,((t,r)=>{n[t]=this.convertValue(r,e)})),n}convertGeoPoint(t){return new Qs(dt(t.latitude),dt(t.longitude))}convertArray(t,e){return(t.values||[]).map((t=>this.convertValue(t,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=mt(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(yt(t));default:return null}}convertTimestamp(t){const e=ft(t);return new U(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=F.fromString(t);w(er(n));const r=new wt(n.get(1),n.get(3)),i=new q(n.popFirst(5));return r.isEqual(e)||g(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yo(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vo{isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}}class wo extends ho{exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Eo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(po("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}constructor(t,e,n,r,i,s){super(t,e,n,r,s),this._firestore=t,this._firestoreImpl=t,this.metadata=i}}class Eo extends wo{data(t={}){return super.data(t)}}class bo{get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach((n=>{t.call(e,new Eo(this._firestore,this._userDataWriter,n.key,n,new vo(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new T(b.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map((n=>{const r=new Eo(t._firestore,t._userDataWriter,n.doc.key,n.doc,new vo(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter);return n.doc,{type:"added",doc:r,oldIndex:-1,newIndex:e++}}))}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter((t=>e||3!==t.type)).map((e=>{const r=new Eo(t._firestore,t._userDataWriter,e.doc.key,e.doc,new vo(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let i=-1,s=-1;return 0!==e.type&&(i=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),s=n.indexOf(e.doc.key)),{type:To(e.type),doc:r,oldIndex:i,newIndex:s}}))}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}constructor(t,e,n,r){this._firestore=t,this._userDataWriter=e,this._snapshot=r,this.metadata=new vo(r.hasPendingWrites,r.fromCache),this.query=n}}function To(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return v()}}class Io extends mo{convertBytes(t){return new Hs(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new _s(this.firestore,null,e)}constructor(t){super(),this.firestore=t}}function So(t){t=Is(t,Ds);const e=Is(t.firestore,js),n=$s(e),r=new Io(e);return go(t._query),Fs(n,t._query).then((n=>new bo(e,r,t,n)))}function Co(t,e){const n=Is(t.firestore,js),r=function(t,e,...n){if(t=(0,a.getModularInstance)(t),1===arguments.length&&(e=L.R()),ws("doc","path",e),t instanceof As){const r=F.fromString(e,...n);return Es(r),new _s(t,null,new q(r))}{if(!(t instanceof _s||t instanceof xs))throw new T(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(F.fromString(e,...n));return Es(r),new _s(t.firestore,t instanceof xs?t.converter:null,new q(r))}}(t),i=yo(t.converter,e);return Ao(n,[eo(to(t.firestore),"addDoc",r._key,i,null!==t.converter,{}).toMutation(r._key,Pe.exists(!1))]).then((()=>r))}function Ao(t,e){return function(t,e){const n=new I;return t.asyncQueue.enqueueAndForget((async()=>async function(t,e,n){const r=ms(t);try{const t=await function(t,e){const n=E(t),r=U.now(),i=e.reduce(((t,e)=>t.add(e.key)),mn());let s,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(t=>{let a=an(),u=mn();return n.Gi.getEntries(t,i).next((t=>{a=t,a.forEach(((t,e)=>{e.isValidDocument()||(u=u.add(t))}))})).next((()=>n.localDocuments.getOverlayedDocuments(t,a))).next((i=>{s=i;const o=[];for(const t of e){const e=Ke(t,s.get(t.key).overlayedDocument);null!=e&&o.push(new Ge(t.key,e,Ft(e.value.mapValue),Pe.exists(!0)))}return n.mutationQueue.addMutationBatch(t,r,o,e)})).next((e=>{o=e;const r=e.applyToLocalDocumentSet(s,u);return n.documentOverlayCache.saveOverlays(t,e.batchId,r)}))})).then((()=>({batchId:o.batchId,changes:ln(s)})))}(r.localStore,e);r.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let r=t.hc[t.currentUser.toKey()];r||(r=new rt(O)),r=r.insert(e,n),t.hc[t.currentUser.toKey()]=r}(r,t.batchId,n),await fs(r,t.changes),await wi(r.remoteStore)}catch(t){const e=Li(t,"Failed to persist write");n.reject(e)}}(await Bs(t),e,n))),n.promise}($s(t),e)}!function(t,e=!0){var n;n=r.SDK_VERSION,h=n,(0,r._registerComponent)(new(0,i.Component)("firestore",((t,{instanceIdentifier:n,options:r})=>{const i=t.getProvider("app").getImmediate(),s=new js(new _(t.getProvider("auth-internal")),new k(t.getProvider("app-check-internal")),function(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new T(b.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new wt(t.options.projectId,e)}(i,n),i);return r=Object.assign({useFetchStreams:e},r),s._setSettings(r),s}),"PUBLIC").setMultipleInstances(!0)),(0,r.registerVersion)(c,"3.7.3",t),(0,r.registerVersion)(c,"3.7.3","esm2017")}()})),s.register("lW9Fu",(function(e,r){t(e.exports,"createWebChannelTransport",(function(){return Jn})),t(e.exports,"getStatEventTarget",(function(){return Zn})),t(e.exports,"ErrorCode",(function(){return tr})),t(e.exports,"EventType",(function(){return er})),t(e.exports,"Event",(function(){return nr})),t(e.exports,"Stat",(function(){return rr})),t(e.exports,"FetchXmlHttpFactory",(function(){return ir})),t(e.exports,"WebChannel",(function(){return sr})),t(e.exports,"XhrIo",(function(){return or}));var i,s="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==n?n:"undefined"!=typeof self?self:{},o={},a=a||{},u=s||self;function c(){}function l(t){var e=typeof t;return"array"==(e="object"!=e?e:t?Array.isArray(t)?"array":e:"null")||"object"==e&&"number"==typeof t.length}function h(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}var f="closure_uid_"+(1e9*Math.random()>>>0),d=0;function p(t,e,n){return t.call.apply(t.bind,arguments)}function g(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function m(t,e,n){return(m=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?p:g).apply(null,arguments)}function y(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function v(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(t,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return e.prototype[n].apply(t,i)}}function w(){this.s=this.s,this.o=this.o}w.prototype.s=!1,w.prototype.na=function(){var t;!this.s&&(this.s=!0,this.M(),0)&&(t=this,Object.prototype.hasOwnProperty.call(t,f)&&t[f]||(t[f]=++d))},w.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const E=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"==typeof t)return"string"!=typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function b(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function T(t,e){for(let e=1;e<arguments.length;e++){const n=arguments[e];if(l(n)){const e=t.length||0,r=n.length||0;t.length=e+r;for(let i=0;i<r;i++)t[e+i]=n[i]}else t.push(n)}}function I(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}I.prototype.h=function(){this.defaultPrevented=!0};var S=function(){if(!u.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{u.addEventListener("test",c,e),u.removeEventListener("test",c,e)}catch(t){}return t}();function C(t){return/^[\s\xa0]*$/.test(t)}var A=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function _(t,e){return t<e?-1:t>e?1:0}function D(){var t=u.navigator;return t&&(t=t.userAgent)?t:""}function x(t){return-1!=D().indexOf(t)}function N(t){return N[" "](t),t}N[" "]=c;var k,R,L=x("Opera"),O=x("Trident")||x("MSIE"),M=x("Edge"),U=M||O,B=x("Gecko")&&!(-1!=D().toLowerCase().indexOf("webkit")&&!x("Edge"))&&!(x("Trident")||x("MSIE"))&&!x("Edge"),P=-1!=D().toLowerCase().indexOf("webkit")&&!x("Edge");function F(){var t=u.document;return t?t.documentMode:void 0}t:{var V="",j=(R=D(),B?/rv:([^\);]+)(\)|;)/.exec(R):M?/Edge\/([\d\.]+)/.exec(R):O?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(R):P?/WebKit\/(\S+)/.exec(R):L?/(?:Version)[ \/]?(\S+)/.exec(R):void 0);if(j&&(V=j?j[1]:""),O){var q=F();if(null!=q&&q>parseFloat(V)){k=String(q);break t}}k=V}var $,K={};function H(){return function(t){var e=K;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}((function(){let t=0;const e=A(String(k)).split("."),n=A("9").split("."),r=Math.max(e.length,n.length);for(let o=0;0==t&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],0==i[0].length&&0==s[0].length)break;t=_(0==i[1].length?0:parseInt(i[1],10),0==s[1].length?0:parseInt(s[1],10))||_(0==i[2].length,0==s[2].length)||_(i[2],s[2]),i=i[3],s=s[3]}while(0==t)}return 0<=t}))}if(u.document&&O){var z=F();$=z||(parseInt(k,10)||void 0)}else $=void 0;var G=$;function Q(t,e){if(I.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(B){t:{try{N(e.nodeName);var i=!0;break t}catch(t){}i=!1}i||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"==typeof t.pointerType?t.pointerType:W[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Q.X.h.call(this)}}v(Q,I);var W={2:"touch",3:"pen",4:"mouse"};Q.prototype.h=function(){Q.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var X="closure_listenable_"+(1e6*Math.random()|0),Y=0;function J(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ha=i,this.key=++Y,this.ba=this.ea=!1}function Z(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function tt(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function et(t){const e={};for(const n in t)e[n]=t[n];return e}const nt="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function rt(t,e){let n,r;for(let e=1;e<arguments.length;e++){for(n in r=arguments[e],r)t[n]=r[n];for(let e=0;e<nt.length;e++)n=nt[e],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function it(t){this.src=t,this.g={},this.h=0}function st(t,e){var n=e.type;if(n in t.g){var r,i=t.g[n],s=E(i,e);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(Z(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function ot(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ba&&s.listener==e&&s.capture==!!n&&s.ha==r)return i}return-1}it.prototype.add=function(t,e,n,r,i){var s=t.toString();(t=this.g[s])||(t=this.g[s]=[],this.h++);var o=ot(t,e,r,i);return-1<o?(e=t[o],n||(e.ea=!1)):((e=new J(e,this.src,s,!!r,i)).ea=n,t.push(e)),e};var at="closure_lm_"+(1e6*Math.random()|0),ut={};function ct(t,e,n,r,i){if(r&&r.once)return ht(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)ct(t,e[s],n,r,i);return null}return n=vt(n),t&&t[X]?t.N(e,n,h(r)?!!r.capture:!!r,i):lt(t,e,n,!1,r,i)}function lt(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=h(i)?!!i.capture:!!i,a=mt(t);if(a||(t[at]=a=new it(t)),(n=a.add(e,n,r,o,s)).proxy)return n;if(r=function(){function t(n){return e.call(t.src,t.listener,n)}const e=gt;return t}(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)S||(i=o),void 0===i&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(pt(e.toString()),r);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(r)}return n}function ht(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)ht(t,e[s],n,r,i);return null}return n=vt(n),t&&t[X]?t.O(e,n,h(r)?!!r.capture:!!r,i):lt(t,e,n,!0,r,i)}function ft(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)ft(t,e[s],n,r,i);else r=h(r)?!!r.capture:!!r,n=vt(n),t&&t[X]?(t=t.i,(e=String(e).toString())in t.g&&(-1<(n=ot(s=t.g[e],n,r,i))&&(Z(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete t.g[e],t.h--)))):t&&(t=mt(t))&&(e=t.g[e.toString()],t=-1,e&&(t=ot(e,n,r,i)),(n=-1<t?e[t]:null)&&dt(n))}function dt(t){if("number"!=typeof t&&t&&!t.ba){var e=t.src;if(e&&e[X])st(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(pt(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=mt(e))?(st(n,t),0==n.h&&(n.src=null,e[at]=null)):Z(t)}}}function pt(t){return t in ut?ut[t]:ut[t]="on"+t}function gt(t,e){if(t.ba)t=!0;else{e=new Q(e,this);var n=t.listener,r=t.ha||t.src;t.ea&&dt(t),t=n.call(r,e)}return t}function mt(t){return(t=t[at])instanceof it?t:null}var yt="__closure_events_fn_"+(1e9*Math.random()>>>0);function vt(t){return"function"==typeof t?t:(t[yt]||(t[yt]=function(e){return t.handleEvent(e)}),t[yt])}function wt(){w.call(this),this.i=new it(this),this.P=this,this.I=null}function Et(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,"string"==typeof e)e=new I(e,t);else if(e instanceof I)e.target=e.target||t;else{var i=e;rt(e=new I(r,t),i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=bt(o,r,!0,e)&&i}if(i=bt(o=e.g=t,r,!0,e)&&i,i=bt(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)i=bt(o=e.g=n[s],r,!1,e)&&i}function bt(t,e,n,r){if(!(e=t.i.g[String(e)]))return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ba&&o.capture==n){var a=o.listener,u=o.ha||o.src;o.ea&&st(t.i,o),i=!1!==a.call(u,r)&&i}}return i&&!r.defaultPrevented}v(wt,w),wt.prototype[X]=!0,wt.prototype.removeEventListener=function(t,e,n,r){ft(this,t,e,n,r)},wt.prototype.M=function(){if(wt.X.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)Z(n[r]);delete e.g[t],e.h--}}this.I=null},wt.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)},wt.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};var Tt=u.JSON.stringify;function It(){var t=Nt;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}var St,Ct=new class{get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}}((()=>new At),(t=>t.reset()));class At{set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}constructor(){this.next=this.g=this.h=null}}function _t(t){u.setTimeout((()=>{throw t}),0)}function Dt(t,e){St||function(){var t=u.Promise.resolve(void 0);St=function(){t.then(kt)}}(),xt||(St(),xt=!0),Nt.add(t,e)}var xt=!1,Nt=new class{add(t,e){const n=Ct.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}constructor(){this.h=this.g=null}};function kt(){for(var t;t=It();){try{t.h.call(t.g)}catch(t){_t(t)}var e=Ct;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}xt=!1}function Rt(t,e){wt.call(this),this.h=t||1,this.g=e||u,this.j=m(this.lb,this),this.l=Date.now()}function Lt(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}function Ot(t,e,n){if("function"==typeof t)n&&(t=m(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=m(t.handleEvent,t)}return 2147483647<Number(e)?-1:u.setTimeout(t,e||0)}function Mt(t){t.g=Ot((()=>{t.g=null,t.i&&(t.i=!1,Mt(t))}),t.j);const e=t.h;t.h=null,t.m.apply(null,e)}v(Rt,wt),(i=Rt.prototype).ca=!1,i.R=null,i.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Et(this,"tick"),this.ca&&(Lt(this),this.start()))}},i.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())},i.M=function(){Rt.X.M.call(this),Lt(this),delete this.g};class Ut extends w{l(t){this.h=arguments,this.g?this.i=!0:Mt(this)}M(){super.M(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}}function Bt(t){w.call(this),this.h=t,this.g={}}v(Bt,w);var Pt=[];function Ft(t,e,n,r){Array.isArray(n)||(n&&(Pt[0]=n.toString()),n=Pt);for(var i=0;i<n.length;i++){var s=ct(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function Vt(t){tt(t.g,(function(t,e){this.g.hasOwnProperty(e)&&dt(t)}),t),t.g={}}function jt(){this.g=!0}function qt(t,e,n,r){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+function(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}return Tt(n)}catch(t){return e}}(t,n)+(r?" "+r:"")}))}Bt.prototype.M=function(){Bt.X.M.call(this),Vt(this)},Bt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},jt.prototype.Aa=function(){this.g=!1},jt.prototype.info=function(){};var $t={},Kt=null;function Ht(){return Kt=Kt||new wt}function zt(t){I.call(this,$t.Pa,t)}function Gt(t){const e=Ht();Et(e,new zt(e))}function Qt(t,e){I.call(this,$t.STAT_EVENT,t),this.stat=e}function Wt(t){const e=Ht();Et(e,new Qt(e,t))}function Xt(t,e){I.call(this,$t.Qa,t),this.size=e}function Yt(t,e){if("function"!=typeof t)throw Error("Fn must not be null and must be a function");return u.setTimeout((function(){t()}),e)}$t.Pa="serverreachability",v(zt,I),$t.STAT_EVENT="statevent",v(Qt,I),$t.Qa="timingevent",v(Xt,I);var Jt={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},Zt={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function te(){}function ee(t){return t.h||(t.h=t.i())}function ne(){}te.prototype.h=null;var re,ie={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function se(){I.call(this,"d")}function oe(){I.call(this,"c")}function ae(){}function ue(t,e,n,r){this.l=t,this.j=e,this.m=n,this.U=r||1,this.S=new Bt(this),this.O=le,t=U?125:void 0,this.T=new Rt(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new ce}function ce(){this.i=null,this.g="",this.h=!1}v(se,I),v(oe,I),v(ae,te),ae.prototype.g=function(){return new XMLHttpRequest},ae.prototype.i=function(){return{}},re=new ae;var le=45e3,he={},fe={};function de(t,e,n){t.K=1,t.v=Re(_e(e)),t.s=n,t.P=!0,pe(t,null)}function pe(t,e){t.F=Date.now(),ve(t),t.A=_e(t.v);var n=t.A,r=t.U;Array.isArray(r)||(r=[String(r)]),He(n.i,"t",r),t.C=0,n=t.l.H,t.h=new ce,t.g=Hn(t.l,n?e:null,!t.s),0<t.N&&(t.L=new Ut(m(t.La,t,t.g),t.N)),Ft(t.S,t.g,"readystatechange",t.ib),e=t.H?et(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),Gt(),function(t,e,n,r,i,s){t.info((function(){if(t.g)if(s)for(var o="",a=s.split("&"),u=0;u<a.length;u++){var c=a[u].split("=");if(1<c.length){var l=c[0];c=c[1];var h=l.split("_");o=2<=h.length&&"type"==h[1]?o+(l+"=")+c+"&":o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+"\n"+n+"\n"+o}))}(t.j,t.u,t.A,t.m,t.U,t.s)}function ge(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Da)}function me(t,e,n){let r,i=!0;for(;!t.I&&t.C<n.length;){if(r=ye(t,n),r==fe){4==e&&(t.o=4,Wt(14),i=!1),qt(t.j,t.m,null,"[Incomplete Response]");break}if(r==he){t.o=4,Wt(15),qt(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}qt(t.j,t.m,r,null),Ie(t,r)}ge(t)&&r!=fe&&r!=he&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,Wt(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.$&&(t.$=!0,(e=t.l).g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Bn(e),e.K=!0,Wt(11))):(qt(t.j,t.m,n,"[Invalid Chunked Response]"),Te(t),be(t))}function ye(t,e){var n=t.C,r=e.indexOf("\n",n);return-1==r?fe:(n=Number(e.substring(n,r)),isNaN(n)?he:(r+=1)+n>e.length?fe:(e=e.substr(r,n),t.C=r+n,e))}function ve(t){t.V=Date.now()+t.O,we(t,t.O)}function we(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=Yt(m(t.gb,t),e)}function Ee(t){t.B&&(u.clearTimeout(t.B),t.B=null)}function be(t){0==t.l.G||t.I||Vn(t.l,t)}function Te(t){Ee(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,Lt(t.T),Vt(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Ie(t,e){try{var n=t.l;if(0!=n.G&&(n.g==t||Ye(n.h,t)))if(!t.J&&Ye(n.h,t)&&3==n.G){try{var r=n.Fa.g.parse(e)}catch(t){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;Fn(n),xn(n)}Un(n),Wt(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&0==n.A&&!n.v&&(n.v=Yt(m(n.cb,n),6e3));if(1>=Xe(n.h)&&n.ja){try{n.ja()}catch(t){}n.ja=void 0}}else qn(n,11)}else if((t.J||n.g==t)&&Fn(n),!C(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let c=i[e];if(n.T=c[0],c=c[1],2==n.G)if("c"==c[0]){n.I=c[1],n.ka=c[2];const e=c[3];null!=e&&(n.ma=e,n.j.info("VER="+n.ma));const i=c[4];null!=i&&(n.Ca=i,n.j.info("SVER="+n.Ca));const l=c[5];null!=l&&"number"==typeof l&&0<l&&(r=1.5*l,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=t.g;if(h){const t=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var s=r.h;s.g||-1==t.indexOf("spdy")&&-1==t.indexOf("quic")&&-1==t.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(Je(s,s.h),s.h=null))}if(r.D){const t=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(r.za=t,ke(r.F,r.D,t))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms"));var o=t;if((r=n).sa=Kn(r,r.H?r.ka:null,r.V),o.J){Ze(r.h,o);var a=o,u=r.J;u&&a.setTimeout(u),a.B&&(Ee(a),ve(a)),r.g=o}else Mn(r);0<n.i.length&&kn(n)}else"stop"!=c[0]&&"close"!=c[0]||qn(n,7);else 3==n.G&&("stop"==c[0]||"close"==c[0]?"stop"==c[0]?qn(n,7):Dn(n):"noop"!=c[0]&&n.l&&n.l.wa(c),n.A=0)}Gt()}catch(t){}}function Se(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(l(t)||"string"==typeof t)Array.prototype.forEach.call(t,e,void 0);else for(var n=function(t){if(t.oa&&"function"==typeof t.oa)return t.oa();if(!t.W||"function"!=typeof t.W){if("undefined"!=typeof Map&&t instanceof Map)return Array.from(t.keys());if(!("undefined"!=typeof Set&&t instanceof Set)){if(l(t)||"string"==typeof t){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}(t),r=function(t){if(t.W&&"function"==typeof t.W)return t.W();if("undefined"!=typeof Map&&t instanceof Map||"undefined"!=typeof Set&&t instanceof Set)return Array.from(t.values());if("string"==typeof t)return t.split("");if(l(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}for(r in e=[],n=0,t)e[n++]=t[r];return e}(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}(i=ue.prototype).setTimeout=function(t){this.O=t},i.ib=function(t){t=t.target;const e=this.L;e&&3==Tn(t)?e.l():this.La(t)},i.La=function(t){try{if(t==this.g)t:{const h=Tn(this.g);var e=this.g.Ea();this.g.aa();if(!(3>h)&&(3!=h||U||this.g&&(this.h.h||this.g.fa()||In(this.g)))){this.I||4!=h||7==e||Gt(),Ee(this);var n=this.g.aa();this.Y=n;e:if(ge(this)){var r=In(this.g);t="";var i=r.length,s=4==Tn(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){Te(this),be(this);var o="";break e}this.h.i=new u.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=200==n,function(t,e,n,r,i,s,o){t.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+"\n"+n+"\n"+s+" "+o}))}(this.j,this.u,this.A,this.m,this.U,h,n),this.i){if(this.Z&&!this.J){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!C(a)){var l=a;break e}}l=null}if(!(n=l)){this.i=!1,this.o=3,Wt(12),Te(this),be(this);break t}qt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Ie(this,n)}this.P?(me(this,h,o),U&&this.i&&3==h&&(Ft(this.S,this.T,"tick",this.hb),this.T.start())):(qt(this.j,this.m,o,null),Ie(this,o)),4==h&&Te(this),this.i&&!this.I&&(4==h?Vn(this.l,this):(this.i=!1,ve(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,Wt(12)):(this.o=0,Wt(13)),Te(this),be(this)}}}catch(t){}},i.hb=function(){if(this.g){var t=Tn(this.g),e=this.g.fa();this.C<e.length&&(Ee(this),me(this,t,e),this.i&&4!=t&&ve(this))}},i.cancel=function(){this.I=!0,Te(this)},i.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(function(t,e){t.info((function(){return"TIMEOUT: "+e}))}(this.j,this.A),2!=this.K&&(Gt(),Wt(17)),Te(this),this.o=2,be(this)):we(this,this.V-t)};var Ce=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ae(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Ae){this.h=void 0!==e?e:t.h,De(this,t.j),this.s=t.s,this.g=t.g,xe(this,t.m),this.l=t.l,e=t.i;var n=new je;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Ne(this,n),this.o=t.o}else t&&(n=String(t).match(Ce))?(this.h=!!e,De(this,n[1]||"",!0),this.s=Le(n[2]||""),this.g=Le(n[3]||"",!0),xe(this,n[4]),this.l=Le(n[5]||"",!0),Ne(this,n[6]||"",!0),this.o=Le(n[7]||"")):(this.h=!!e,this.i=new je(null,this.h))}function _e(t){return new Ae(t)}function De(t,e,n){t.j=n?Le(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function xe(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Ne(t,e,n){e instanceof je?(t.i=e,function(t,e){e&&!t.j&&(qe(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&($e(this,e),He(this,n,t))}),t)),t.j=e}(t.i,t.h)):(n||(e=Oe(e,Fe)),t.i=new je(e,t.h))}function ke(t,e,n){t.i.set(e,n)}function Re(t){return ke(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Le(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Oe(t,e,n){return"string"==typeof t?(t=encodeURI(t).replace(e,Me),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Me(t){return"%"+((t=t.charCodeAt(0))>>4&15).toString(16)+(15&t).toString(16)}Ae.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Oe(e,Ue,!0),":");var n=this.g;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(Oe(e,Ue,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&t.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&t.push("/"),t.push(Oe(n,"/"==n.charAt(0)?Pe:Be,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Oe(n,Ve)),t.join("")};var Ue=/[#\/\?@]/g,Be=/[#\?:]/g,Pe=/[#\?]/g,Fe=/[#\?@]/g,Ve=/#/g;function je(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function qe(t){t.g||(t.g=new Map,t.h=0,t.i&&function(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function $e(t,e){qe(t),e=ze(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Ke(t,e){return qe(t),e=ze(t,e),t.g.has(e)}function He(t,e,n){$e(t,e),0<n.length&&(t.i=null,t.g.set(ze(t,e),b(n)),t.h+=n.length)}function ze(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}(i=je.prototype).add=function(t,e){qe(this),this.i=null,t=ze(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},i.forEach=function(t,e){qe(this),this.g.forEach((function(n,r){n.forEach((function(n){t.call(e,n,r,this)}),this)}),this)},i.oa=function(){qe(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let t=0;t<i.length;t++)n.push(e[r])}return n},i.W=function(t){qe(this);let e=[];if("string"==typeof t)Ke(this,t)&&(e=e.concat(this.g.get(ze(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e},i.set=function(t,e){return qe(this),this.i=null,Ke(this,t=ze(this,t))&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},i.get=function(t,e){return t&&0<(t=this.W(t)).length?String(t[0]):e},i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.W(r);for(r=0;r<o.length;r++){var i=s;""!==o[r]&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function Ge(t){this.l=t||Qe,u.PerformanceNavigationTiming?t=0<(t=u.performance.getEntriesByType("navigation")).length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol):t=!!(u.g&&u.g.Ga&&u.g.Ga()&&u.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Qe=10;function We(t){return!!t.h||!!t.g&&t.g.size>=t.j}function Xe(t){return t.h?1:t.g?t.g.size:0}function Ye(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function Je(t,e){t.g?t.g.add(e):t.h=e}function Ze(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function tn(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return b(t.i)}function en(){}function nn(){this.g=new en}function rn(t,e,n){const r=n||"";try{Se(t,(function(t,n){let i=t;h(t)&&(i=Tt(t)),e.push(r+n+"="+encodeURIComponent(i))}))}catch(t){throw e.push(r+"type="+encodeURIComponent("_badmap")),t}}function sn(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch(t){}}function on(t){this.l=t.ac||null,this.j=t.jb||!1}function an(t,e){wt.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=un,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ge.prototype.cancel=function(){if(this.i=tn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}},en.prototype.stringify=function(t){return u.JSON.stringify(t,void 0)},en.prototype.parse=function(t){return u.JSON.parse(t,void 0)},v(on,te),on.prototype.g=function(){return new an(this.l,this.j)},on.prototype.i=function(t){return function(){return t}}({}),v(an,wt);var un=0;function cn(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}function ln(t){t.readyState=4,t.l=null,t.j=null,t.A=null,hn(t)}function hn(t){t.onreadystatechange&&t.onreadystatechange.call(t)}(i=an.prototype).open=function(t,e){if(this.readyState!=un)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,hn(this)},i.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||u).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,ln(this)),this.readyState=un},i.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,hn(this)),this.g&&(this.readyState=3,hn(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(void 0!==u.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;cn(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))},i.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?ln(this):hn(this),3==this.readyState&&cn(this)}},i.Va=function(t){this.g&&(this.response=this.responseText=t,ln(this))},i.Ua=function(t){this.g&&(this.response=t,ln(this))},i.ga=function(){this.g&&ln(this)},i.setRequestHeader=function(t,e){this.v.append(t,e)},i.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(an.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var fn=u.JSON.parse;function dn(t){wt.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=pn,this.K=this.L=!1}v(dn,wt);var pn="",gn=/^https?$/i,mn=["POST","PUT"];function yn(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,vn(t),En(t)}function vn(t){t.D||(t.D=!0,Et(t,"complete"),Et(t,"error"))}function wn(t){if(t.h&&void 0!==a&&(!t.C[1]||4!=Tn(t)||2!=t.aa()))if(t.v&&4==Tn(t))Ot(t.Ha,0,t);else if(Et(t,"readystatechange"),4==Tn(t)){t.h=!1;try{const a=t.aa();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var r;if(r=0===a){var i=String(t.H).match(Ce)[1]||null;if(!i&&u.self&&u.self.location){var s=u.self.location.protocol;i=s.substr(0,s.length-1)}r=!gn.test(i?i.toLowerCase():"")}n=r}if(n)Et(t,"complete"),Et(t,"success");else{t.m=6;try{var o=2<Tn(t)?t.g.statusText:""}catch(t){o=""}t.j=o+" ["+t.aa()+"]",vn(t)}}finally{En(t)}}}function En(t,e){if(t.g){bn(t);const n=t.g,r=t.C[0]?c:null;t.g=null,t.C=null,e||Et(t,"ready");try{n.onreadystatechange=r}catch(t){}}}function bn(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(u.clearTimeout(t.A),t.A=null)}function Tn(t){return t.g?t.g.readyState:0}function In(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case pn:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(t){return null}}function Sn(t){let e="";return tt(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function Cn(t,e,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=Sn(n),"string"==typeof t?null!=n&&encodeURIComponent(String(n)):ke(t,e,n))}function An(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function _n(t){this.Ca=0,this.i=[],this.j=new jt,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=An("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=An("baseRetryDelayMs",5e3,t),this.bb=An("retryDelaySeedMs",1e4,t),this.$a=An("forwardChannelMaxRetries",2,t),this.ta=An("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new Ge(t&&t.concurrentRequestLimit),this.Fa=new nn,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}function Dn(t){if(Nn(t),3==t.G){var e=t.U++,n=_e(t.F);ke(n,"SID",t.I),ke(n,"RID",e),ke(n,"TYPE","terminate"),Ln(t,n),(e=new ue(t,t.j,e,void 0)).K=2,e.v=Re(_e(n)),n=!1,u.navigator&&u.navigator.sendBeacon&&(n=u.navigator.sendBeacon(e.v.toString(),"")),!n&&u.Image&&((new Image).src=e.v,n=!0),n||(e.g=Hn(e.l,null),e.g.da(e.v)),e.F=Date.now(),ve(e)}$n(t)}function xn(t){t.g&&(Bn(t),t.g.cancel(),t.g=null)}function Nn(t){xn(t),t.u&&(u.clearTimeout(t.u),t.u=null),Fn(t),t.h.cancel(),t.m&&("number"==typeof t.m&&u.clearTimeout(t.m),t.m=null)}function kn(t){We(t.h)||t.m||(t.m=!0,Dt(t.Ja,t),t.C=0)}function Rn(t,e){var n;n=e?e.m:t.U++;const r=_e(t.F);ke(r,"SID",t.I),ke(r,"RID",n),ke(r,"AID",t.T),Ln(t,r),t.o&&t.s&&Cn(r,t.o,t.s),n=new ue(t,t.j,n,t.C+1),null===t.o&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=On(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),Je(t.h,n),de(n,r,e)}function Ln(t,e){t.ia&&tt(t.ia,(function(t,n){ke(e,n,t)})),t.l&&Se({},(function(t,n){ke(e,n,t)}))}function On(t,e,n){n=Math.min(t.i.length,n);var r=t.l?m(t.l.Ra,t.l,t):null;t:{var i=t.i;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=i[0].h,t.push("ofs="+e)):e=0:t.push("ofs="+e);let s=!0;for(let o=0;o<n;o++){let n=i[o].h;const a=i[o].g;if(n-=e,0>n)e=Math.max(0,i[o].h-100),s=!1;else try{rn(a,t,"req"+n+"_")}catch(t){r&&r(a)}}if(s){r=t.join("&");break t}}}return t=t.i.splice(0,n),e.D=t,r}function Mn(t){t.g||t.u||(t.Z=1,Dt(t.Ia,t),t.A=0)}function Un(t){return!(t.g||t.u||3<=t.A)&&(t.Z++,t.u=Yt(m(t.Ia,t),jn(t,t.A)),t.A++,!0)}function Bn(t){null!=t.B&&(u.clearTimeout(t.B),t.B=null)}function Pn(t){t.g=new ue(t,t.j,"rpc",t.Z),null===t.o&&(t.g.H=t.s),t.g.N=0;var e=_e(t.sa);ke(e,"RID","rpc"),ke(e,"SID",t.I),ke(e,"CI",t.L?"0":"1"),ke(e,"AID",t.T),ke(e,"TYPE","xmlhttp"),Ln(t,e),t.o&&t.s&&Cn(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=Re(_e(e)),n.s=null,n.P=!0,pe(n,t)}function Fn(t){null!=t.v&&(u.clearTimeout(t.v),t.v=null)}function Vn(t,e){var n=null;if(t.g==e){Fn(t),Bn(t),t.g=null;var r=2}else{if(!Ye(t.h,e))return;n=e.D,Ze(t.h,e),r=1}if(0!=t.G)if(t.pa=e.Y,e.i)if(1==r){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;Et(r=Ht(),new Xt(r,n)),kn(t)}else Mn(t);else if(3==(i=e.o)||0==i&&0<t.pa||!(1==r&&function(t,e){return!(Xe(t.h)>=t.h.j-(t.m?1:0)||(t.m?(t.i=e.D.concat(t.i),0):1==t.G||2==t.G||t.C>=(t.Za?0:t.$a)||(t.m=Yt(m(t.Ja,t,e),jn(t,t.C)),t.C++,0)))}(t,e)||2==r&&Un(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:qn(t,5);break;case 4:qn(t,10);break;case 3:qn(t,6);break;default:qn(t,2)}}function jn(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function qn(t,e){if(t.j.info("Error code "+e),2==e){var n=null;t.l&&(n=null);var r=m(t.kb,t);n||(n=new Ae("//www.google.com/images/cleardot.gif"),u.location&&"http"==u.location.protocol||De(n,"https"),Re(n)),function(t,e){const n=new jt;if(u.Image){const r=new Image;r.onload=y(sn,n,r,"TestLoadImage: loaded",!0,e),r.onerror=y(sn,n,r,"TestLoadImage: error",!1,e),r.onabort=y(sn,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=y(sn,n,r,"TestLoadImage: timeout",!1,e),u.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=t}else e(!1)}(n.toString(),r)}else Wt(2);t.G=0,t.l&&t.l.va(e),$n(t),Nn(t)}function $n(t){if(t.G=0,t.la=[],t.l){const e=tn(t.h);0==e.length&&0==t.i.length||(T(t.la,e),T(t.la,t.i),t.h.i.length=0,b(t.i),t.i.length=0),t.l.ua()}}function Kn(t,e,n){var r=n instanceof Ae?_e(n):new Ae(n,void 0);if(""!=r.g)e&&(r.g=e+"."+r.g),xe(r,r.m);else{var i=u.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new Ae(null,void 0);r&&De(s,r),e&&(s.g=e),i&&xe(s,i),n&&(s.l=n),r=s}return n=t.D,e=t.za,n&&e&&ke(r,n,e),ke(r,"VER",t.ma),Ln(t,r),r}function Hn(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return(e=n&&t.Da&&!t.ra?new dn(new on({jb:!0})):new dn(t.ra)).Ka(t.H),e}function zn(){}function Gn(){if(O&&!(10<=Number(G)))throw Error("Environmental error: no available transport.")}function Qn(t,e){wt.call(this),this.g=new _n(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!C(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!C(e)&&(this.g.D=e,null!==(t=this.h)&&e in t&&(e in(t=this.h)&&delete t[e])),this.j=new Yn(this)}function Wn(t){se.call(this);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function Xn(){oe.call(this),this.status=1}function Yn(t){this.g=t}(i=dn.prototype).Ka=function(t){this.L=t},i.da=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():re.g(),this.C=this.u?ee(this.u):ee(re),this.g.onreadystatechange=m(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(t){return void yn(this,t)}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else{if("function"!=typeof r.keys||"function"!=typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const t of r.keys())n.set(t,r.get(t))}r=Array.from(n.keys()).find((t=>"content-type"==t.toLowerCase())),i=u.FormData&&t instanceof u.FormData,!(0<=E(mn,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[t,e]of n)this.g.setRequestHeader(t,e);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{bn(this),0<this.B&&((this.K=function(t){return O&&H()&&"number"==typeof t.timeout&&void 0!==t.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=m(this.qa,this)):this.A=Ot(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(t){yn(this,t)}},i.qa=function(){void 0!==a&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Et(this,"timeout"),this.abort(8))},i.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Et(this,"complete"),Et(this,"abort"),En(this))},i.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),En(this,!0)),dn.X.M.call(this)},i.Ha=function(){this.s||(this.F||this.v||this.l?wn(this):this.fb())},i.fb=function(){wn(this)},i.aa=function(){try{return 2<Tn(this)?this.g.status:-1}catch(t){return-1}},i.fa=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},i.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),fn(e)}},i.Ea=function(){return this.m},i.Oa=function(){return"string"==typeof this.j?this.j:String(this.j)},(i=_n.prototype).ma=8,i.G=1,i.Ja=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new ue(this,this.j,t,void 0);let s=this.s;if(this.S&&(s?(s=et(s),rt(s,this.S)):s=this.S),null!==this.o||this.N||(i.H=s,s=null),this.O)t:{for(var e=0,n=0;n<this.i.length;n++){var r=this.i[n];if(void 0===(r="__data__"in r.g&&"string"==typeof(r=r.g.__data__)?r.length:void 0))break;if(4096<(e+=r)){e=n;break t}if(4096===e||n===this.i.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=On(this,i,e),ke(n=_e(this.F),"RID",t),ke(n,"CVER",22),this.D&&ke(n,"X-HTTP-Session-Id",this.D),Ln(this,n),s&&(this.N?e="headers="+encodeURIComponent(String(Sn(s)))+"&"+e:this.o&&Cn(n,this.o,s)),Je(this.h,i),this.Ya&&ke(n,"TYPE","init"),this.O?(ke(n,"$req",e),ke(n,"SID","null"),i.Z=!0,de(i,n,null)):de(i,n,e),this.G=2}}else 3==this.G&&(t?Rn(this,t):0==this.i.length||We(this.h)||Rn(this))},i.Ia=function(){if(this.u=null,Pn(this),this.$&&!(this.K||null==this.g||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=Yt(m(this.eb,this),t)}},i.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Wt(10),xn(this),Pn(this))},i.cb=function(){null!=this.v&&(this.v=null,xn(this),Un(this),Wt(19))},i.kb=function(t){t?(this.j.info("Successfully pinged google.com"),Wt(2)):(this.j.info("Failed to ping google.com"),Wt(1))},(i=zn.prototype).xa=function(){},i.wa=function(){},i.va=function(){},i.ua=function(){},i.Ra=function(){},Gn.prototype.g=function(t,e){return new Qn(t,e)},v(Qn,wt),Qn.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;Wt(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=Kn(t,null,t.V),kn(t)},Qn.prototype.close=function(){Dn(this.g)},Qn.prototype.u=function(t){var e=this.g;if("string"==typeof t){var n={};n.__data__=t,t=n}else this.v&&((n={}).__data__=Tt(t),t=n);e.i.push(new class{constructor(t,e){this.h=t,this.g=e}}(e.ab++,t)),3==e.G&&kn(e)},Qn.prototype.M=function(){this.g.l=null,delete this.j,Dn(this.g),delete this.g,Qn.X.M.call(this)},v(Wn,se),v(Xn,oe),v(Yn,zn),Yn.prototype.xa=function(){Et(this.g,"a")},Yn.prototype.wa=function(t){Et(this.g,new Wn(t))},Yn.prototype.va=function(t){Et(this.g,new Xn)},Yn.prototype.ua=function(){Et(this.g,"b")},Gn.prototype.createWebChannel=Gn.prototype.g,Qn.prototype.send=Qn.prototype.u,Qn.prototype.open=Qn.prototype.m,Qn.prototype.close=Qn.prototype.close,Jt.NO_ERROR=0,Jt.TIMEOUT=8,Jt.HTTP_ERROR=6,Zt.COMPLETE="complete",ne.EventType=ie,ie.OPEN="a",ie.CLOSE="b",ie.ERROR="c",ie.MESSAGE="d",wt.prototype.listen=wt.prototype.N,dn.prototype.listenOnce=dn.prototype.O,dn.prototype.getLastError=dn.prototype.Oa,dn.prototype.getLastErrorCode=dn.prototype.Ea,dn.prototype.getStatus=dn.prototype.aa,dn.prototype.getResponseJson=dn.prototype.Sa,dn.prototype.getResponseText=dn.prototype.fa,dn.prototype.send=dn.prototype.da,dn.prototype.setWithCredentials=dn.prototype.Ka;var Jn=o.createWebChannelTransport=function(){return new Gn},Zn=o.getStatEventTarget=function(){return Ht()},tr=o.ErrorCode=Jt,er=o.EventType=Zt,nr=o.Event=$t,rr=o.Stat={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},ir=o.FetchXmlHttpFactory=on,sr=o.WebChannel=ne,or=o.XhrIo=dn})),s("ed1K5"),s("kThre"),s("aFV0K"),s("3ILHO"),s("fNqig"),s("f6eBG");
//# sourceMappingURL=index.9d357c49.js.map
