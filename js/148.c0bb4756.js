(self["webpackChunkarmy_app"]=self["webpackChunkarmy_app"]||[]).push([[148],{874:function(t){"use strict";t.exports={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}},818:function(t,e,n){var r=n(874),s=n(851),i=Object.hasOwnProperty,o=Object.create(null);for(var a in r)i.call(r,a)&&(o[r[a]]=a);var c=t.exports={to:{},get:{}};function u(t,e,n){return Math.min(Math.max(e,t),n)}function l(t){var e=Math.round(t).toString(16).toUpperCase();return e.length<2?"0"+e:e}c.get=function(t){var e,n,r=t.substring(0,3).toLowerCase();switch(r){case"hsl":e=c.get.hsl(t),n="hsl";break;case"hwb":e=c.get.hwb(t),n="hwb";break;default:e=c.get.rgb(t),n="rgb";break}return e?{model:n,value:e}:null},c.get.rgb=function(t){if(!t)return null;var e,n,s,o=/^#([a-f0-9]{3,4})$/i,a=/^#([a-f0-9]{6})([a-f0-9]{2})?$/i,c=/^rgba?\(\s*([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/,l=/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/,h=/^(\w+)$/,d=[0,0,0,1];if(e=t.match(a)){for(s=e[2],e=e[1],n=0;n<3;n++){var f=2*n;d[n]=parseInt(e.slice(f,f+2),16)}s&&(d[3]=parseInt(s,16)/255)}else if(e=t.match(o)){for(e=e[1],s=e[3],n=0;n<3;n++)d[n]=parseInt(e[n]+e[n],16);s&&(d[3]=parseInt(s+s,16)/255)}else if(e=t.match(c)){for(n=0;n<3;n++)d[n]=parseInt(e[n+1],0);e[4]&&(e[5]?d[3]=.01*parseFloat(e[4]):d[3]=parseFloat(e[4]))}else{if(!(e=t.match(l)))return(e=t.match(h))?"transparent"===e[1]?[0,0,0,0]:i.call(r,e[1])?(d=r[e[1]],d[3]=1,d):null:null;for(n=0;n<3;n++)d[n]=Math.round(2.55*parseFloat(e[n+1]));e[4]&&(e[5]?d[3]=.01*parseFloat(e[4]):d[3]=parseFloat(e[4]))}for(n=0;n<3;n++)d[n]=u(d[n],0,255);return d[3]=u(d[3],0,1),d},c.get.hsl=function(t){if(!t)return null;var e=/^hsla?\(\s*([+-]?(?:\d{0,3}\.)?\d+)(?:deg)?\s*,?\s*([+-]?[\d\.]+)%\s*,?\s*([+-]?[\d\.]+)%\s*(?:[,|\/]\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/,n=t.match(e);if(n){var r=parseFloat(n[4]),s=(parseFloat(n[1])%360+360)%360,i=u(parseFloat(n[2]),0,100),o=u(parseFloat(n[3]),0,100),a=u(isNaN(r)?1:r,0,1);return[s,i,o,a]}return null},c.get.hwb=function(t){if(!t)return null;var e=/^hwb\(\s*([+-]?\d{0,3}(?:\.\d+)?)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/,n=t.match(e);if(n){var r=parseFloat(n[4]),s=(parseFloat(n[1])%360+360)%360,i=u(parseFloat(n[2]),0,100),o=u(parseFloat(n[3]),0,100),a=u(isNaN(r)?1:r,0,1);return[s,i,o,a]}return null},c.to.hex=function(){var t=s(arguments);return"#"+l(t[0])+l(t[1])+l(t[2])+(t[3]<1?l(Math.round(255*t[3])):"")},c.to.rgb=function(){var t=s(arguments);return t.length<4||1===t[3]?"rgb("+Math.round(t[0])+", "+Math.round(t[1])+", "+Math.round(t[2])+")":"rgba("+Math.round(t[0])+", "+Math.round(t[1])+", "+Math.round(t[2])+", "+t[3]+")"},c.to.rgb.percent=function(){var t=s(arguments),e=Math.round(t[0]/255*100),n=Math.round(t[1]/255*100),r=Math.round(t[2]/255*100);return t.length<4||1===t[3]?"rgb("+e+"%, "+n+"%, "+r+"%)":"rgba("+e+"%, "+n+"%, "+r+"%, "+t[3]+")"},c.to.hsl=function(){var t=s(arguments);return t.length<4||1===t[3]?"hsl("+t[0]+", "+t[1]+"%, "+t[2]+"%)":"hsla("+t[0]+", "+t[1]+"%, "+t[2]+"%, "+t[3]+")"},c.to.hwb=function(){var t=s(arguments),e="";return t.length>=4&&1!==t[3]&&(e=", "+t[3]),"hwb("+t[0]+", "+t[1]+"%, "+t[2]+"%"+e+")"},c.to.keyword=function(t){return o[t.slice(0,3)]}},767:function(t,e,n){const r=n(818),s=n(978),i=["keyword","gray","hex"],o={};for(const g of Object.keys(s))o[[...s[g].labels].sort().join("")]=g;const a={};function c(t,e){if(!(this instanceof c))return new c(t,e);if(e&&e in i&&(e=null),e&&!(e in s))throw new Error("Unknown model: "+e);let n,u;if(null==t)this.model="rgb",this.color=[0,0,0],this.valpha=1;else if(t instanceof c)this.model=t.model,this.color=[...t.color],this.valpha=t.valpha;else if("string"===typeof t){const e=r.get(t);if(null===e)throw new Error("Unable to parse color from string: "+t);this.model=e.model,u=s[this.model].channels,this.color=e.value.slice(0,u),this.valpha="number"===typeof e.value[u]?e.value[u]:1}else if(t.length>0){this.model=e||"rgb",u=s[this.model].channels;const n=Array.prototype.slice.call(t,0,u);this.color=p(n,u),this.valpha="number"===typeof t[u]?t[u]:1}else if("number"===typeof t)this.model="rgb",this.color=[t>>16&255,t>>8&255,255&t],this.valpha=1;else{this.valpha=1;const e=Object.keys(t);"alpha"in t&&(e.splice(e.indexOf("alpha"),1),this.valpha="number"===typeof t.alpha?t.alpha:0);const r=e.sort().join("");if(!(r in o))throw new Error("Unable to parse color from object: "+JSON.stringify(t));this.model=o[r];const{labels:i}=s[this.model],a=[];for(n=0;n<i.length;n++)a.push(t[i[n]]);this.color=p(a)}if(a[this.model])for(u=s[this.model].channels,n=0;n<u;n++){const t=a[this.model][n];t&&(this.color[n]=t(this.color[n]))}this.valpha=Math.max(0,Math.min(1,this.valpha)),Object.freeze&&Object.freeze(this)}c.prototype={toString(){return this.string()},toJSON(){return this[this.model]()},string(t){let e=this.model in r.to?this:this.rgb();e=e.round("number"===typeof t?t:1);const n=1===e.valpha?e.color:[...e.color,this.valpha];return r.to[e.model](n)},percentString(t){const e=this.rgb().round("number"===typeof t?t:1),n=1===e.valpha?e.color:[...e.color,this.valpha];return r.to.rgb.percent(n)},array(){return 1===this.valpha?[...this.color]:[...this.color,this.valpha]},object(){const t={},{channels:e}=s[this.model],{labels:n}=s[this.model];for(let r=0;r<e;r++)t[n[r]]=this.color[r];return 1!==this.valpha&&(t.alpha=this.valpha),t},unitArray(){const t=this.rgb().color;return t[0]/=255,t[1]/=255,t[2]/=255,1!==this.valpha&&t.push(this.valpha),t},unitObject(){const t=this.rgb().object();return t.r/=255,t.g/=255,t.b/=255,1!==this.valpha&&(t.alpha=this.valpha),t},round(t){return t=Math.max(t||0,0),new c([...this.color.map(l(t)),this.valpha],this.model)},alpha(t){return void 0!==t?new c([...this.color,Math.max(0,Math.min(1,t))],this.model):this.valpha},red:h("rgb",0,d(255)),green:h("rgb",1,d(255)),blue:h("rgb",2,d(255)),hue:h(["hsl","hsv","hsl","hwb","hcg"],0,(t=>(t%360+360)%360)),saturationl:h("hsl",1,d(100)),lightness:h("hsl",2,d(100)),saturationv:h("hsv",1,d(100)),value:h("hsv",2,d(100)),chroma:h("hcg",1,d(100)),gray:h("hcg",2,d(100)),white:h("hwb",1,d(100)),wblack:h("hwb",2,d(100)),cyan:h("cmyk",0,d(100)),magenta:h("cmyk",1,d(100)),yellow:h("cmyk",2,d(100)),black:h("cmyk",3,d(100)),x:h("xyz",0,d(95.047)),y:h("xyz",1,d(100)),z:h("xyz",2,d(108.833)),l:h("lab",0,d(100)),a:h("lab",1),b:h("lab",2),keyword(t){return void 0!==t?new c(t):s[this.model].keyword(this.color)},hex(t){return void 0!==t?new c(t):r.to.hex(this.rgb().round().color)},hexa(t){if(void 0!==t)return new c(t);const e=this.rgb().round().color;let n=Math.round(255*this.valpha).toString(16).toUpperCase();return 1===n.length&&(n="0"+n),r.to.hex(e)+n},rgbNumber(){const t=this.rgb().color;return(255&t[0])<<16|(255&t[1])<<8|255&t[2]},luminosity(){const t=this.rgb().color,e=[];for(const[n,r]of t.entries()){const t=r/255;e[n]=t<=.04045?t/12.92:((t+.055)/1.055)**2.4}return.2126*e[0]+.7152*e[1]+.0722*e[2]},contrast(t){const e=this.luminosity(),n=t.luminosity();return e>n?(e+.05)/(n+.05):(n+.05)/(e+.05)},level(t){const e=this.contrast(t);return e>=7?"AAA":e>=4.5?"AA":""},isDark(){const t=this.rgb().color,e=(2126*t[0]+7152*t[1]+722*t[2])/1e4;return e<128},isLight(){return!this.isDark()},negate(){const t=this.rgb();for(let e=0;e<3;e++)t.color[e]=255-t.color[e];return t},lighten(t){const e=this.hsl();return e.color[2]+=e.color[2]*t,e},darken(t){const e=this.hsl();return e.color[2]-=e.color[2]*t,e},saturate(t){const e=this.hsl();return e.color[1]+=e.color[1]*t,e},desaturate(t){const e=this.hsl();return e.color[1]-=e.color[1]*t,e},whiten(t){const e=this.hwb();return e.color[1]+=e.color[1]*t,e},blacken(t){const e=this.hwb();return e.color[2]+=e.color[2]*t,e},grayscale(){const t=this.rgb().color,e=.3*t[0]+.59*t[1]+.11*t[2];return c.rgb(e,e,e)},fade(t){return this.alpha(this.valpha-this.valpha*t)},opaquer(t){return this.alpha(this.valpha+this.valpha*t)},rotate(t){const e=this.hsl();let n=e.color[0];return n=(n+t)%360,n=n<0?360+n:n,e.color[0]=n,e},mix(t,e){if(!t||!t.rgb)throw new Error('Argument to "mix" was not a Color instance, but rather an instance of '+typeof t);const n=t.rgb(),r=this.rgb(),s=void 0===e?.5:e,i=2*s-1,o=n.alpha()-r.alpha(),a=((i*o===-1?i:(i+o)/(1+i*o))+1)/2,u=1-a;return c.rgb(a*n.red()+u*r.red(),a*n.green()+u*r.green(),a*n.blue()+u*r.blue(),n.alpha()*s+r.alpha()*(1-s))}};for(const g of Object.keys(s)){if(i.includes(g))continue;const{channels:t}=s[g];c.prototype[g]=function(...t){return this.model===g?new c(this):t.length>0?new c(t,g):new c([...f(s[this.model][g].raw(this.color)),this.valpha],g)},c[g]=function(...e){let n=e[0];return"number"===typeof n&&(n=p(e,t)),new c(n,g)}}function u(t,e){return Number(t.toFixed(e))}function l(t){return function(e){return u(e,t)}}function h(t,e,n){t=Array.isArray(t)?t:[t];for(const r of t)(a[r]||(a[r]=[]))[e]=n;return t=t[0],function(r){let s;return void 0!==r?(n&&(r=n(r)),s=this[t](),s.color[e]=r,s):(s=this[t]().color[e],n&&(s=n(s)),s)}}function d(t){return function(e){return Math.max(0,Math.min(t,e))}}function f(t){return Array.isArray(t)?t:[t]}function p(t,e){for(let n=0;n<e;n++)"number"!==typeof t[n]&&(t[n]=0);return t}t.exports=c},956:function(t,e,n){const r=n(900),s={};for(const a of Object.keys(r))s[r[a]]=a;const i={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}};t.exports=i;for(const a of Object.keys(i)){if(!("channels"in i[a]))throw new Error("missing channels property: "+a);if(!("labels"in i[a]))throw new Error("missing channel labels property: "+a);if(i[a].labels.length!==i[a].channels)throw new Error("channel and label counts mismatch: "+a);const{channels:t,labels:e}=i[a];delete i[a].channels,delete i[a].labels,Object.defineProperty(i[a],"channels",{value:t}),Object.defineProperty(i[a],"labels",{value:e})}function o(t,e){return(t[0]-e[0])**2+(t[1]-e[1])**2+(t[2]-e[2])**2}i.rgb.hsl=function(t){const e=t[0]/255,n=t[1]/255,r=t[2]/255,s=Math.min(e,n,r),i=Math.max(e,n,r),o=i-s;let a,c;i===s?a=0:e===i?a=(n-r)/o:n===i?a=2+(r-e)/o:r===i&&(a=4+(e-n)/o),a=Math.min(60*a,360),a<0&&(a+=360);const u=(s+i)/2;return c=i===s?0:u<=.5?o/(i+s):o/(2-i-s),[a,100*c,100*u]},i.rgb.hsv=function(t){let e,n,r,s,i;const o=t[0]/255,a=t[1]/255,c=t[2]/255,u=Math.max(o,a,c),l=u-Math.min(o,a,c),h=function(t){return(u-t)/6/l+.5};return 0===l?(s=0,i=0):(i=l/u,e=h(o),n=h(a),r=h(c),o===u?s=r-n:a===u?s=1/3+e-r:c===u&&(s=2/3+n-e),s<0?s+=1:s>1&&(s-=1)),[360*s,100*i,100*u]},i.rgb.hwb=function(t){const e=t[0],n=t[1];let r=t[2];const s=i.rgb.hsl(t)[0],o=1/255*Math.min(e,Math.min(n,r));return r=1-1/255*Math.max(e,Math.max(n,r)),[s,100*o,100*r]},i.rgb.cmyk=function(t){const e=t[0]/255,n=t[1]/255,r=t[2]/255,s=Math.min(1-e,1-n,1-r),i=(1-e-s)/(1-s)||0,o=(1-n-s)/(1-s)||0,a=(1-r-s)/(1-s)||0;return[100*i,100*o,100*a,100*s]},i.rgb.keyword=function(t){const e=s[t];if(e)return e;let n,i=1/0;for(const s of Object.keys(r)){const e=r[s],a=o(t,e);a<i&&(i=a,n=s)}return n},i.keyword.rgb=function(t){return r[t]},i.rgb.xyz=function(t){let e=t[0]/255,n=t[1]/255,r=t[2]/255;e=e>.04045?((e+.055)/1.055)**2.4:e/12.92,n=n>.04045?((n+.055)/1.055)**2.4:n/12.92,r=r>.04045?((r+.055)/1.055)**2.4:r/12.92;const s=.4124*e+.3576*n+.1805*r,i=.2126*e+.7152*n+.0722*r,o=.0193*e+.1192*n+.9505*r;return[100*s,100*i,100*o]},i.rgb.lab=function(t){const e=i.rgb.xyz(t);let n=e[0],r=e[1],s=e[2];n/=95.047,r/=100,s/=108.883,n=n>.008856?n**(1/3):7.787*n+16/116,r=r>.008856?r**(1/3):7.787*r+16/116,s=s>.008856?s**(1/3):7.787*s+16/116;const o=116*r-16,a=500*(n-r),c=200*(r-s);return[o,a,c]},i.hsl.rgb=function(t){const e=t[0]/360,n=t[1]/100,r=t[2]/100;let s,i,o;if(0===n)return o=255*r,[o,o,o];s=r<.5?r*(1+n):r+n-r*n;const a=2*r-s,c=[0,0,0];for(let u=0;u<3;u++)i=e+1/3*-(u-1),i<0&&i++,i>1&&i--,o=6*i<1?a+6*(s-a)*i:2*i<1?s:3*i<2?a+(s-a)*(2/3-i)*6:a,c[u]=255*o;return c},i.hsl.hsv=function(t){const e=t[0];let n=t[1]/100,r=t[2]/100,s=n;const i=Math.max(r,.01);r*=2,n*=r<=1?r:2-r,s*=i<=1?i:2-i;const o=(r+n)/2,a=0===r?2*s/(i+s):2*n/(r+n);return[e,100*a,100*o]},i.hsv.rgb=function(t){const e=t[0]/60,n=t[1]/100;let r=t[2]/100;const s=Math.floor(e)%6,i=e-Math.floor(e),o=255*r*(1-n),a=255*r*(1-n*i),c=255*r*(1-n*(1-i));switch(r*=255,s){case 0:return[r,c,o];case 1:return[a,r,o];case 2:return[o,r,c];case 3:return[o,a,r];case 4:return[c,o,r];case 5:return[r,o,a]}},i.hsv.hsl=function(t){const e=t[0],n=t[1]/100,r=t[2]/100,s=Math.max(r,.01);let i,o;o=(2-n)*r;const a=(2-n)*s;return i=n*s,i/=a<=1?a:2-a,i=i||0,o/=2,[e,100*i,100*o]},i.hwb.rgb=function(t){const e=t[0]/360;let n=t[1]/100,r=t[2]/100;const s=n+r;let i;s>1&&(n/=s,r/=s);const o=Math.floor(6*e),a=1-r;i=6*e-o,0!==(1&o)&&(i=1-i);const c=n+i*(a-n);let u,l,h;switch(o){default:case 6:case 0:u=a,l=c,h=n;break;case 1:u=c,l=a,h=n;break;case 2:u=n,l=a,h=c;break;case 3:u=n,l=c,h=a;break;case 4:u=c,l=n,h=a;break;case 5:u=a,l=n,h=c;break}return[255*u,255*l,255*h]},i.cmyk.rgb=function(t){const e=t[0]/100,n=t[1]/100,r=t[2]/100,s=t[3]/100,i=1-Math.min(1,e*(1-s)+s),o=1-Math.min(1,n*(1-s)+s),a=1-Math.min(1,r*(1-s)+s);return[255*i,255*o,255*a]},i.xyz.rgb=function(t){const e=t[0]/100,n=t[1]/100,r=t[2]/100;let s,i,o;return s=3.2406*e+-1.5372*n+-.4986*r,i=-.9689*e+1.8758*n+.0415*r,o=.0557*e+-.204*n+1.057*r,s=s>.0031308?1.055*s**(1/2.4)-.055:12.92*s,i=i>.0031308?1.055*i**(1/2.4)-.055:12.92*i,o=o>.0031308?1.055*o**(1/2.4)-.055:12.92*o,s=Math.min(Math.max(0,s),1),i=Math.min(Math.max(0,i),1),o=Math.min(Math.max(0,o),1),[255*s,255*i,255*o]},i.xyz.lab=function(t){let e=t[0],n=t[1],r=t[2];e/=95.047,n/=100,r/=108.883,e=e>.008856?e**(1/3):7.787*e+16/116,n=n>.008856?n**(1/3):7.787*n+16/116,r=r>.008856?r**(1/3):7.787*r+16/116;const s=116*n-16,i=500*(e-n),o=200*(n-r);return[s,i,o]},i.lab.xyz=function(t){const e=t[0],n=t[1],r=t[2];let s,i,o;i=(e+16)/116,s=n/500+i,o=i-r/200;const a=i**3,c=s**3,u=o**3;return i=a>.008856?a:(i-16/116)/7.787,s=c>.008856?c:(s-16/116)/7.787,o=u>.008856?u:(o-16/116)/7.787,s*=95.047,i*=100,o*=108.883,[s,i,o]},i.lab.lch=function(t){const e=t[0],n=t[1],r=t[2];let s;const i=Math.atan2(r,n);s=360*i/2/Math.PI,s<0&&(s+=360);const o=Math.sqrt(n*n+r*r);return[e,o,s]},i.lch.lab=function(t){const e=t[0],n=t[1],r=t[2],s=r/360*2*Math.PI,i=n*Math.cos(s),o=n*Math.sin(s);return[e,i,o]},i.rgb.ansi16=function(t,e=null){const[n,r,s]=t;let o=null===e?i.rgb.hsv(t)[2]:e;if(o=Math.round(o/50),0===o)return 30;let a=30+(Math.round(s/255)<<2|Math.round(r/255)<<1|Math.round(n/255));return 2===o&&(a+=60),a},i.hsv.ansi16=function(t){return i.rgb.ansi16(i.hsv.rgb(t),t[2])},i.rgb.ansi256=function(t){const e=t[0],n=t[1],r=t[2];if(e===n&&n===r)return e<8?16:e>248?231:Math.round((e-8)/247*24)+232;const s=16+36*Math.round(e/255*5)+6*Math.round(n/255*5)+Math.round(r/255*5);return s},i.ansi16.rgb=function(t){let e=t%10;if(0===e||7===e)return t>50&&(e+=3.5),e=e/10.5*255,[e,e,e];const n=.5*(1+~~(t>50)),r=(1&e)*n*255,s=(e>>1&1)*n*255,i=(e>>2&1)*n*255;return[r,s,i]},i.ansi256.rgb=function(t){if(t>=232){const e=10*(t-232)+8;return[e,e,e]}let e;t-=16;const n=Math.floor(t/36)/5*255,r=Math.floor((e=t%36)/6)/5*255,s=e%6/5*255;return[n,r,s]},i.rgb.hex=function(t){const e=((255&Math.round(t[0]))<<16)+((255&Math.round(t[1]))<<8)+(255&Math.round(t[2])),n=e.toString(16).toUpperCase();return"000000".substring(n.length)+n},i.hex.rgb=function(t){const e=t.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!e)return[0,0,0];let n=e[0];3===e[0].length&&(n=n.split("").map((t=>t+t)).join(""));const r=parseInt(n,16),s=r>>16&255,i=r>>8&255,o=255&r;return[s,i,o]},i.rgb.hcg=function(t){const e=t[0]/255,n=t[1]/255,r=t[2]/255,s=Math.max(Math.max(e,n),r),i=Math.min(Math.min(e,n),r),o=s-i;let a,c;return a=o<1?i/(1-o):0,c=o<=0?0:s===e?(n-r)/o%6:s===n?2+(r-e)/o:4+(e-n)/o,c/=6,c%=1,[360*c,100*o,100*a]},i.hsl.hcg=function(t){const e=t[1]/100,n=t[2]/100,r=n<.5?2*e*n:2*e*(1-n);let s=0;return r<1&&(s=(n-.5*r)/(1-r)),[t[0],100*r,100*s]},i.hsv.hcg=function(t){const e=t[1]/100,n=t[2]/100,r=e*n;let s=0;return r<1&&(s=(n-r)/(1-r)),[t[0],100*r,100*s]},i.hcg.rgb=function(t){const e=t[0]/360,n=t[1]/100,r=t[2]/100;if(0===n)return[255*r,255*r,255*r];const s=[0,0,0],i=e%1*6,o=i%1,a=1-o;let c=0;switch(Math.floor(i)){case 0:s[0]=1,s[1]=o,s[2]=0;break;case 1:s[0]=a,s[1]=1,s[2]=0;break;case 2:s[0]=0,s[1]=1,s[2]=o;break;case 3:s[0]=0,s[1]=a,s[2]=1;break;case 4:s[0]=o,s[1]=0,s[2]=1;break;default:s[0]=1,s[1]=0,s[2]=a}return c=(1-n)*r,[255*(n*s[0]+c),255*(n*s[1]+c),255*(n*s[2]+c)]},i.hcg.hsv=function(t){const e=t[1]/100,n=t[2]/100,r=e+n*(1-e);let s=0;return r>0&&(s=e/r),[t[0],100*s,100*r]},i.hcg.hsl=function(t){const e=t[1]/100,n=t[2]/100,r=n*(1-e)+.5*e;let s=0;return r>0&&r<.5?s=e/(2*r):r>=.5&&r<1&&(s=e/(2*(1-r))),[t[0],100*s,100*r]},i.hcg.hwb=function(t){const e=t[1]/100,n=t[2]/100,r=e+n*(1-e);return[t[0],100*(r-e),100*(1-r)]},i.hwb.hcg=function(t){const e=t[1]/100,n=t[2]/100,r=1-n,s=r-e;let i=0;return s<1&&(i=(r-s)/(1-s)),[t[0],100*s,100*i]},i.apple.rgb=function(t){return[t[0]/65535*255,t[1]/65535*255,t[2]/65535*255]},i.rgb.apple=function(t){return[t[0]/255*65535,t[1]/255*65535,t[2]/255*65535]},i.gray.rgb=function(t){return[t[0]/100*255,t[0]/100*255,t[0]/100*255]},i.gray.hsl=function(t){return[0,0,t[0]]},i.gray.hsv=i.gray.hsl,i.gray.hwb=function(t){return[0,100,t[0]]},i.gray.cmyk=function(t){return[0,0,0,t[0]]},i.gray.lab=function(t){return[t[0],0,0]},i.gray.hex=function(t){const e=255&Math.round(t[0]/100*255),n=(e<<16)+(e<<8)+e,r=n.toString(16).toUpperCase();return"000000".substring(r.length)+r},i.rgb.gray=function(t){const e=(t[0]+t[1]+t[2])/3;return[e/255*100]}},978:function(t,e,n){const r=n(956),s=n(774),i={},o=Object.keys(r);function a(t){const e=function(...e){const n=e[0];return void 0===n||null===n?n:(n.length>1&&(e=n),t(e))};return"conversion"in t&&(e.conversion=t.conversion),e}function c(t){const e=function(...e){const n=e[0];if(void 0===n||null===n)return n;n.length>1&&(e=n);const r=t(e);if("object"===typeof r)for(let t=r.length,s=0;s<t;s++)r[s]=Math.round(r[s]);return r};return"conversion"in t&&(e.conversion=t.conversion),e}o.forEach((t=>{i[t]={},Object.defineProperty(i[t],"channels",{value:r[t].channels}),Object.defineProperty(i[t],"labels",{value:r[t].labels});const e=s(t),n=Object.keys(e);n.forEach((n=>{const r=e[n];i[t][n]=c(r),i[t][n].raw=a(r)}))})),t.exports=i},774:function(t,e,n){const r=n(956);function s(){const t={},e=Object.keys(r);for(let n=e.length,r=0;r<n;r++)t[e[r]]={distance:-1,parent:null};return t}function i(t){const e=s(),n=[t];e[t].distance=0;while(n.length){const t=n.pop(),s=Object.keys(r[t]);for(let r=s.length,i=0;i<r;i++){const r=s[i],o=e[r];-1===o.distance&&(o.distance=e[t].distance+1,o.parent=t,n.unshift(r))}}return e}function o(t,e){return function(n){return e(t(n))}}function a(t,e){const n=[e[t].parent,t];let s=r[e[t].parent][t],i=e[t].parent;while(e[i].parent)n.unshift(e[i].parent),s=o(r[e[i].parent][i],s),i=e[i].parent;return s.conversion=n,s}t.exports=function(t){const e=i(t),n={},r=Object.keys(e);for(let s=r.length,i=0;i<s;i++){const t=r[i],s=e[t];null!==s.parent&&(n[t]=a(t,e))}return n}},900:function(t){"use strict";t.exports={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}},851:function(t,e,n){"use strict";var r=n(594),s=Array.prototype.concat,i=Array.prototype.slice,o=t.exports=function(t){for(var e=[],n=0,o=t.length;n<o;n++){var a=t[n];r(a)?e=s.call(e,i.call(a)):e.push(a)}return e};o.wrap=function(t){return function(){return t(o(arguments))}}},594:function(t){t.exports=function(t){return!(!t||"string"===typeof t)&&(t instanceof Array||Array.isArray(t)||t.length>=0&&(t.splice instanceof Function||Object.getOwnPropertyDescriptor(t,t.length-1)&&"String"!==t.constructor.name))}},148:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return tw}});var r=n(252),s=n(577),i=n(963);const o={class:"middle"},a={class:"timer",ref:"timer"},c={class:"timer-items"},u=["data-text"],l=["data-text"],h=["data-text"],d=["data-text"],f=(0,r.uE)('<div class="timer-items-text"><div class="timer-item-text" data-text="d">d</div><div class="timer-item-text" data-text="h">h</div><div class="timer-item-text" data-text="m">m</div><div class="timer-item-text" data-text="s">s</div></div>',1),p={class:"comments-box"},g={class:"bg-form"},m={key:0,class:"not-auth"},y=(0,r.Uk)(" To leave a comment "),v=(0,r._)("button",{class:"button b-send",type:"submit"},"Send",-1),w={class:"comments"};function b(t,e,n,b,I,E){const T=(0,r.up)("Header"),_=(0,r.up)("Message"),k=(0,r.up)("Footer");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(T),(0,r._)("div",o,[(0,r._)("div",a,[(0,r._)("div",c,[(0,r._)("div",{class:"timer-item timer-days","data-text":I.days<10?"0"+I.days:I.days},(0,s.zw)(E.tDays),9,u),(0,r._)("div",{class:"timer-item timer-hours","data-text":I.hours<10?"0"+I.hours:I.hours},(0,s.zw)(E.tHours),9,l),(0,r._)("div",{class:"timer-item timer-minutes","data-text":I.minutes<10?"0"+I.minutes:I.minutes},(0,s.zw)(E.tMinutes),9,h),(0,r._)("div",{class:"timer-item timer-seconds","data-text":I.seconds<10?"0"+I.seconds:I.seconds},(0,s.zw)(E.tSeconds),9,d)]),f],512),(0,r._)("div",p,[(0,r._)("div",g,[b.isLogin?((0,r.wg)(),(0,r.iD)("form",{key:1,onSubmit:e[2]||(e[2]=(0,i.iM)(((...t)=>b.addComment&&b.addComment(...t)),["prevent"])),class:"form-comment"},[(0,r.wy)((0,r._)("input",{type:"text","onUpdate:modelValue":e[1]||(e[1]=t=>b.message=t),placeholder:"Comment...",class:"input"},null,512),[[i.nr,b.message]]),v],32)):((0,r.wg)(),(0,r.iD)("div",m,[y,(0,r._)("span",{class:"link",onClick:e[0]||(e[0]=(...t)=>b.signIn&&b.signIn(...t))},"Sign In")]))]),(0,r._)("div",w,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(b.messages,(t=>((0,r.wg)(),(0,r.j4)(_,{key:t.id,data:t,sender:t.userId===b.user?.uid},null,8,["data","sender"])))),128))])])]),(0,r.Wm)(k)],64)}const I={class:"header"},E={key:1,class:"auth-box"},T=["src"];function _(t,e,n,i,o,a){return(0,r.wg)(),(0,r.iD)("div",I,[(0,r._)("div",{class:"logo",style:(0,s.j5)({color:a.getColor})},(0,s.zw)(i.isLogin?a.getColor:"#d98c07"),5),i.isLogin?((0,r.wg)(),(0,r.iD)("div",E,[(0,r._)("img",{class:"avatar",style:(0,s.j5)({outline:"3px solid "+a.getColor}),src:i.user.photoURL,alt:"avatar"},null,12,T),(0,r._)("button",{class:"btn-exit",onClick:e[1]||(e[1]=(...t)=>i.logOut&&i.logOut(...t))},"Sign Out")])):((0,r.wg)(),(0,r.iD)("button",{key:0,class:"btn-login",onClick:e[0]||(e[0]=(...t)=>i.signIn&&i.signIn(...t))},"Sign In"))])}
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
const k=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=63&s|128):55296===(64512&s)&&r+1<t.length&&56320===(64512&t.charCodeAt(r+1))?(s=65536+((1023&s)<<10)+(1023&t.charCodeAt(++r)),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=63&s|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=63&s|128)}return e},S=function(t){const e=[];let n=0,r=0;while(n<t.length){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((31&s)<<6|63&i)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((7&s)<<18|(63&i)<<12|(63&o)<<6|63&a)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(1023&c))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((15&s)<<12|(63&i)<<6|63&o)}}return e.join("")},C={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const e=t[s],i=s+1<t.length,o=i?t[s+1]:0,a=s+2<t.length,c=a?t[s+2]:0,u=e>>2,l=(3&e)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,i||(h=64)),r.push(n[u],n[l],n[h],n[d])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(k(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):S(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const e=n[t.charAt(s++)],i=s<t.length,o=i?n[t.charAt(s)]:0;++s;const a=s<t.length,c=a?n[t.charAt(s)]:64;++s;const u=s<t.length,l=u?n[t.charAt(s)]:64;if(++s,null==e||null==o||null==c||null==l)throw Error();const h=e<<2|o>>4;if(r.push(h),64!==c){const t=o<<4&240|c>>2;if(r.push(t),64!==l){const t=c<<6&192|l;r.push(t)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},A=function(t){const e=k(t);return C.encodeByteArray(e,!0)},N=function(t){return A(t).replace(/\./g,"")},D=function(t){try{return C.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
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
class R{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"===typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}}
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
function O(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function M(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(O())}function L(){const t="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof t&&void 0!==t.id}function P(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function x(){return O().indexOf("Electron/")>=0}function U(){const t=O();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function V(){return O().indexOf("MSAppHost/")>=0}function F(){return"object"===typeof indexedDB}function j(){return new Promise(((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var t;e((null===(t=s.error)||void 0===t?void 0:t.message)||"")}}catch(n){e(n)}}))}
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
const B="FirebaseError";class q extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=B,Object.setPrototypeOf(this,q.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,$.prototype.create)}}class ${constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},r=`${this.service}/${t}`,s=this.errors[t],i=s?z(s,n):"Error",o=`${this.serviceName}: ${i} (${r}).`,a=new q(r,o,n);return a}}function z(t,e){return t.replace(H,((t,n)=>{const r=e[n];return null!=r?String(r):`<${n}?>`}))}const H=/\{\$([^}]+)}/g;
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
 */function K(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function G(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const n=t[s],i=e[s];if(W(n)&&W(i)){if(!G(n,i))return!1}else if(n!==i)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function W(t){return null!==t&&"object"===typeof t}
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
 */function Q(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach((t=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(t))})):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function X(t){const e={},n=t.replace(/^\?/,"").split("&");return n.forEach((t=>{if(t){const[n,r]=t.split("=");e[decodeURIComponent(n)]=decodeURIComponent(r)}})),e}function Y(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}
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
 */function J(t,e){const n=new Z(t,e);return n.subscribe.bind(n)}class Z{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then((()=>{t(this)})).catch((t=>{this.error(t)}))}next(t){this.forEachObserver((e=>{e.next(t)}))}error(t){this.forEachObserver((e=>{e.error(t)})),this.close(t)}complete(){this.forEachObserver((t=>{t.complete()})),this.close()}subscribe(t,e,n){let r;if(void 0===t&&void 0===e&&void 0===n)throw new Error("Missing Observer.");r=tt(t,["next","error","complete"])?t:{next:t,error:e,complete:n},void 0===r.next&&(r.next=et),void 0===r.error&&(r.error=et),void 0===r.complete&&(r.complete=et);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(t){}})),this.observers.push(r),s}unsubscribeOne(t){void 0!==this.observers&&void 0!==this.observers[t]&&(delete this.observers[t],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[t])try{e(this.observers[t])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}}))}close(t){this.finalized||(this.finalized=!0,void 0!==t&&(this.finalError=t),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function tt(t,e){if("object"!==typeof t||null===t)return!1;for(const n of e)if(n in t&&"function"===typeof t[n])return!0;return!1}function et(){}
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
function nt(t){return t&&t._delegate?t._delegate:t}class rt{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
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
 */const st="[DEFAULT]";
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
 */class it{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new R;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(n){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null===t||void 0===t?void 0:t.identifier),r=null!==(e=null===t||void 0===t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(at(t))try{this.getOrInitializeService({instanceIdentifier:st})}catch(e){}for(const[t,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:r});n.resolve(t)}catch(e){}}}}clearInstance(t=st){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t=st){return this.instances.has(t)}getOptions(t=st){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[s,i]of this.instancesDeferred.entries()){const t=this.normalizeInstanceIdentifier(s);n===t&&i.resolve(r)}return r}onInit(t,e){var n;const r=this.normalizeInstanceIdentifier(e),s=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;s.add(t),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&t(i,r),()=>{s.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const r of n)try{r(t,e)}catch(ny){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:ot(t),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(ny){}return n||null}normalizeInstanceIdentifier(t=st){return this.component?this.component.multipleInstances?t:st:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function ot(t){return t===st?void 0:t}function at(t){return"EAGER"===t.instantiationMode}
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
 */class ct{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){const e=this.getProvider(t.name);e.isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new it(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}
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
const ut=[];var lt;(function(t){t[t["DEBUG"]=0]="DEBUG",t[t["VERBOSE"]=1]="VERBOSE",t[t["INFO"]=2]="INFO",t[t["WARN"]=3]="WARN",t[t["ERROR"]=4]="ERROR",t[t["SILENT"]=5]="SILENT"})(lt||(lt={}));const ht={debug:lt.DEBUG,verbose:lt.VERBOSE,info:lt.INFO,warn:lt.WARN,error:lt.ERROR,silent:lt.SILENT},dt=lt.INFO,ft={[lt.DEBUG]:"log",[lt.VERBOSE]:"log",[lt.INFO]:"info",[lt.WARN]:"warn",[lt.ERROR]:"error"},pt=(t,e,...n)=>{if(e<t.logLevel)return;const r=(new Date).toISOString(),s=ft[e];if(!s)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[s](`[${r}]  ${t.name}:`,...n)};class gt{constructor(t){this.name=t,this._logLevel=dt,this._logHandler=pt,this._userLogHandler=null,ut.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in lt))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"===typeof t?ht[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!==typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,lt.DEBUG,...t),this._logHandler(this,lt.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,lt.VERBOSE,...t),this._logHandler(this,lt.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,lt.INFO,...t),this._logHandler(this,lt.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,lt.WARN,...t),this._logHandler(this,lt.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,lt.ERROR,...t),this._logHandler(this,lt.ERROR,...t)}}const mt=(t,e)=>e.some((e=>t instanceof e));let yt,vt;function wt(){return yt||(yt=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function bt(){return vt||(vt=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const It=new WeakMap,Et=new WeakMap,Tt=new WeakMap,_t=new WeakMap,kt=new WeakMap;function St(t){const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("success",s),t.removeEventListener("error",i)},s=()=>{e(Ot(t.result)),r()},i=()=>{n(t.error),r()};t.addEventListener("success",s),t.addEventListener("error",i)}));return e.then((e=>{e instanceof IDBCursor&&It.set(e,t)})).catch((()=>{})),kt.set(e,t),e}function Ct(t){if(Et.has(t))return;const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",i),t.removeEventListener("abort",i)},s=()=>{e(),r()},i=()=>{n(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",s),t.addEventListener("error",i),t.addEventListener("abort",i)}));Et.set(t,e)}let At={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return Et.get(t);if("objectStoreNames"===e)return t.objectStoreNames||Tt.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ot(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t}};function Nt(t){At=t(At)}function Dt(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?bt().includes(t)?function(...e){return t.apply(Mt(this),e),Ot(It.get(this))}:function(...e){return Ot(t.apply(Mt(this),e))}:function(e,...n){const r=t.call(Mt(this),e,...n);return Tt.set(r,e.sort?e.sort():[e]),Ot(r)}}function Rt(t){return"function"===typeof t?Dt(t):(t instanceof IDBTransaction&&Ct(t),mt(t,wt())?new Proxy(t,At):t)}function Ot(t){if(t instanceof IDBRequest)return St(t);if(_t.has(t))return _t.get(t);const e=Rt(t);return e!==t&&(_t.set(t,e),kt.set(e,t)),e}const Mt=t=>kt.get(t);function Lt(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Ot(o);return r&&o.addEventListener("upgradeneeded",(t=>{r(Ot(o.result),t.oldVersion,t.newVersion,Ot(o.transaction))})),n&&o.addEventListener("blocked",(()=>n())),a.then((t=>{i&&t.addEventListener("close",(()=>i())),s&&t.addEventListener("versionchange",(()=>s()))})).catch((()=>{})),a}const Pt=["get","getKey","getAll","getAllKeys","count"],xt=["put","add","delete","clear"],Ut=new Map;function Vt(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!==typeof e)return;if(Ut.get(e))return Ut.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=xt.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!s&&!Pt.includes(n))return;const i=async function(t,...e){const i=this.transaction(t,s?"readwrite":"readonly");let o=i.store;return r&&(o=o.index(e.shift())),(await Promise.all([o[n](...e),s&&i.done]))[0]};return Ut.set(e,i),i}Nt((t=>({...t,get:(e,n,r)=>Vt(e,n)||t.get(e,n,r),has:(e,n)=>!!Vt(e,n)||t.has(e,n)})));
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
class Ft{constructor(t){this.container=t}getPlatformInfoString(){const t=this.container.getProviders();return t.map((t=>{if(jt(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}function jt(t){const e=t.getComponent();return"VERSION"===(null===e||void 0===e?void 0:e.type)}const Bt="@firebase/app",qt="0.7.27",$t=new gt("@firebase/app"),zt="@firebase/app-compat",Ht="@firebase/analytics-compat",Kt="@firebase/analytics",Gt="@firebase/app-check-compat",Wt="@firebase/app-check",Qt="@firebase/auth",Xt="@firebase/auth-compat",Yt="@firebase/database",Jt="@firebase/database-compat",Zt="@firebase/functions",te="@firebase/functions-compat",ee="@firebase/installations",ne="@firebase/installations-compat",re="@firebase/messaging",se="@firebase/messaging-compat",ie="@firebase/performance",oe="@firebase/performance-compat",ae="@firebase/remote-config",ce="@firebase/remote-config-compat",ue="@firebase/storage",le="@firebase/storage-compat",he="@firebase/firestore",de="@firebase/firestore-compat",fe="firebase",pe="9.8.4",ge="[DEFAULT]",me={[Bt]:"fire-core",[zt]:"fire-core-compat",[Kt]:"fire-analytics",[Ht]:"fire-analytics-compat",[Wt]:"fire-app-check",[Gt]:"fire-app-check-compat",[Qt]:"fire-auth",[Xt]:"fire-auth-compat",[Yt]:"fire-rtdb",[Jt]:"fire-rtdb-compat",[Zt]:"fire-fn",[te]:"fire-fn-compat",[ee]:"fire-iid",[ne]:"fire-iid-compat",[re]:"fire-fcm",[se]:"fire-fcm-compat",[ie]:"fire-perf",[oe]:"fire-perf-compat",[ae]:"fire-rc",[ce]:"fire-rc-compat",[ue]:"fire-gcs",[le]:"fire-gcs-compat",[he]:"fire-fst",[de]:"fire-fst-compat","fire-js":"fire-js",[fe]:"fire-js-all"},ye=new Map,ve=new Map;function we(t,e){try{t.container.addComponent(e)}catch(n){$t.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function be(t){const e=t.name;if(ve.has(e))return $t.debug(`There were multiple attempts to register component ${e}.`),!1;ve.set(e,t);for(const n of ye.values())we(n,t);return!0}function Ie(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}
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
const Ee={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},Te=new $("app","Firebase",Ee);
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
class _e{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new rt("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Te.create("app-deleted",{appName:this._name})}}
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
 */const ke=pe;function Se(t,e={}){if("object"!==typeof e){const t=e;e={name:t}}const n=Object.assign({name:ge,automaticDataCollectionEnabled:!1},e),r=n.name;if("string"!==typeof r||!r)throw Te.create("bad-app-name",{appName:String(r)});const s=ye.get(r);if(s){if(G(t,s.options)&&G(n,s.config))return s;throw Te.create("duplicate-app",{appName:r})}const i=new ct(r);for(const a of ve.values())i.addComponent(a);const o=new _e(t,n,i);return ye.set(r,o),o}function Ce(t=ge){const e=ye.get(t);if(!e)throw Te.create("no-app",{appName:t});return e}function Ae(t,e,n){var r;let s=null!==(r=me[t])&&void 0!==r?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const t=[`Unable to register library "${s}" with version "${e}":`];return i&&t.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&t.push("and"),o&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void $t.warn(t.join(" "))}be(new rt(`${s}-version`,(()=>({library:s,version:e})),"VERSION"))}
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
const Ne="firebase-heartbeat-database",De=1,Re="firebase-heartbeat-store";let Oe=null;function Me(){return Oe||(Oe=Lt(Ne,De,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Re)}}}).catch((t=>{throw Te.create("storage-open",{originalErrorMessage:t.message})}))),Oe}async function Le(t){var e;try{const e=await Me();return e.transaction(Re).objectStore(Re).get(xe(t))}catch(n){throw Te.create("storage-get",{originalErrorMessage:null===(e=n)||void 0===e?void 0:e.message})}}async function Pe(t,e){var n;try{const n=await Me(),r=n.transaction(Re,"readwrite"),s=r.objectStore(Re);return await s.put(e,xe(t)),r.done}catch(r){throw Te.create("storage-set",{originalErrorMessage:null===(n=r)||void 0===n?void 0:n.message})}}function xe(t){return`${t.name}!${t.options.appId}`}
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
 */const Ue=1024,Ve=2592e6;class Fe{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new qe(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate(),e=t.getPlatformInfoString(),n=je();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some((t=>t.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((t=>{const e=new Date(t.date).valueOf(),n=Date.now();return n-e<=Ve})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const t=je(),{heartbeatsToSend:e,unsentEntries:n}=Be(this._heartbeatsCache.heartbeats),r=N(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function je(){const t=new Date;return t.toISOString().substring(0,10)}function Be(t,e=Ue){const n=[];let r=t.slice();for(const s of t){const t=n.find((t=>t.agent===s.agent));if(t){if(t.dates.push(s.date),$e(n)>e){t.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),$e(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class qe{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!F()&&j().then((()=>!0)).catch((()=>!1))}async read(){const t=await this._canUseIndexedDBPromise;if(t){const t=await Le(this.app);return t||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Pe(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Pe(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}}function $e(t){return N(JSON.stringify({version:2,heartbeats:t})).length}
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
 */function ze(t){be(new rt("platform-logger",(t=>new Ft(t)),"PRIVATE")),be(new rt("heartbeat",(t=>new Fe(t)),"PRIVATE")),Ae(Bt,qt,t),Ae(Bt,qt,"esm2017"),Ae("fire-js","")}ze("");var He="firebase",Ke="9.8.4";
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
Ae(He,Ke,"app");function Ge(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var s=0;for(r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]])}return n}Object.create;Object.create;function We(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Qe=We,Xe=new $("auth","Firebase",We()),Ye=new gt("@firebase/auth");function Je(t,...e){Ye.logLevel<=lt.ERROR&&Ye.error(`Auth (${ke}): ${t}`,...e)}
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
 */function Ze(t,...e){throw rn(t,...e)}function tn(t,...e){return rn(t,...e)}function en(t,e,n){const r=Object.assign(Object.assign({},Qe()),{[e]:n}),s=new $("auth","Firebase",r);return s.create(e,{appName:t.name})}function nn(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Ze(t,"argument-error"),en(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function rn(t,...e){if("string"!==typeof t){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Xe.create(t,...e)}function sn(t,e,...n){if(!t)throw rn(e,...n)}function on(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Je(e),new Error(e)}function an(t,e){t||on(e)}
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
 */const cn=new Map;function un(t){an(t instanceof Function,"Expected a class definition");let e=cn.get(t);return e?(an(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,cn.set(t,e),e)}
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
 */function ln(t,e){const n=Ie(t,"auth");if(n.isInitialized()){const t=n.getImmediate(),r=n.getOptions();if(G(r,null!==e&&void 0!==e?e:{}))return t;Ze(t,"already-initialized")}const r=n.initialize({options:e});return r}function hn(t,e){const n=(null===e||void 0===e?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(un);(null===e||void 0===e?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,null===e||void 0===e?void 0:e.popupRedirectResolver)}
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
 */function dn(){var t;return"undefined"!==typeof self&&(null===(t=self.location)||void 0===t?void 0:t.href)||""}function fn(){return"http:"===pn()||"https:"===pn()}function pn(){var t;return"undefined"!==typeof self&&(null===(t=self.location)||void 0===t?void 0:t.protocol)||null}
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
 */function gn(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(fn()||L()||"connection"in navigator))||navigator.onLine}function mn(){if("undefined"===typeof navigator)return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}
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
 */class yn{constructor(t,e){this.shortDelay=t,this.longDelay=e,an(e>t,"Short delay should be less than long delay!"),this.isMobile=M()||P()}get(){return gn()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
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
 */function vn(t,e){an(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}
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
 */class wn{static initialize(t,e,n){this.fetchImpl=t,e&&(this.headersImpl=e),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void on("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void on("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void on("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
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
 */const bn={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"internal-error",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error"},In=new yn(3e4,6e4);
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
 */function En(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Tn(t,e,n,r,s={}){return _n(t,s,(async()=>{let s={},i={};r&&("GET"===e?i=r:s={body:JSON.stringify(r)});const o=Q(Object.assign({key:t.config.apiKey},i)).slice(1),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode),wn.fetch()(Sn(t,t.config.apiHost,n,o),Object.assign({method:e,headers:a,referrerPolicy:"no-referrer"},s))}))}async function _n(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},bn),e);try{const e=new Cn(t),s=await Promise.race([n(),e.promise]);e.clearNetworkTimeout();const i=await s.json();if("needConfirmation"in i)throw An(t,"account-exists-with-different-credential",i);if(s.ok&&!("errorMessage"in i))return i;{const e=s.ok?i.errorMessage:i.error.message,[n,o]=e.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw An(t,"credential-already-in-use",i);if("EMAIL_EXISTS"===n)throw An(t,"email-already-in-use",i);if("USER_DISABLED"===n)throw An(t,"user-disabled",i);const a=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw en(t,a,o);Ze(t,a)}}catch(s){if(s instanceof q)throw s;Ze(t,"network-request-failed")}}async function kn(t,e,n,r,s={}){const i=await Tn(t,e,n,r,s);return"mfaPendingCredential"in i&&Ze(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Sn(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?vn(t.config,s):`${t.config.apiScheme}://${s}`}class Cn{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise(((t,e)=>{this.timer=setTimeout((()=>e(tn(this.auth,"network-request-failed"))),In.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function An(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=tn(t,e,r);return s.customData._tokenResponse=n,s}
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
 */async function Nn(t,e){return Tn(t,"POST","/v1/accounts:delete",e)}async function Dn(t,e){return Tn(t,"POST","/v1/accounts:lookup",e)}
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
 */function Rn(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch(e){}}
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
 */async function On(t,e=!1){const n=nt(t),r=await n.getIdToken(e),s=Ln(r);sn(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i="object"===typeof s.firebase?s.firebase:void 0,o=null===i||void 0===i?void 0:i["sign_in_provider"];return{claims:s,token:r,authTime:Rn(Mn(s.auth_time)),issuedAtTime:Rn(Mn(s.iat)),expirationTime:Rn(Mn(s.exp)),signInProvider:o||null,signInSecondFactor:(null===i||void 0===i?void 0:i["sign_in_second_factor"])||null}}function Mn(t){return 1e3*Number(t)}function Ln(t){var e;const[n,r,s]=t.split(".");if(void 0===n||void 0===r||void 0===s)return Je("JWT malformed, contained fewer than 3 sections"),null;try{const t=D(r);return t?JSON.parse(t):(Je("Failed to decode base64 JWT payload"),null)}catch(i){return Je("Caught error parsing JWT payload as JSON",null===(e=i)||void 0===e?void 0:e.toString()),null}}function Pn(t){const e=Ln(t);return sn(e,"internal-error"),sn("undefined"!==typeof e.exp,"internal-error"),sn("undefined"!==typeof e.iat,"internal-error"),Number(e.exp)-Number(e.iat)}
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
 */async function xn(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof q&&Un(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Un({code:t}){return"auth/user-disabled"===t||"auth/user-token-expired"===t}
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
 */class Vn{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const t=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),t}{this.errorBackoff=3e4;const t=null!==(e=this.user.stsTokenManager.expirationTime)&&void 0!==e?e:0,n=t-Date.now()-3e5;return Math.max(0,n)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout((async()=>{await this.iteration()}),e)}async iteration(){var t;try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null===(t=e)||void 0===t?void 0:t.code)&&this.schedule(!0))}this.schedule()}}
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
 */class Fn{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=Rn(this.lastLoginAt),this.creationTime=Rn(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
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
 */async function jn(t){var e;const n=t.auth,r=await t.getIdToken(),s=await xn(t,Dn(n,{idToken:r}));sn(null===s||void 0===s?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=(null===(e=i.providerUserInfo)||void 0===e?void 0:e.length)?$n(i.providerUserInfo):[],a=qn(t.providerData,o),c=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(null===a||void 0===a?void 0:a.length),l=!!c&&u,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Fn(i.createdAt,i.lastLoginAt),isAnonymous:l};Object.assign(t,h)}async function Bn(t){const e=nt(t);await jn(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function qn(t,e){const n=t.filter((t=>!e.some((e=>e.providerId===t.providerId))));return[...n,...e]}function $n(t){return t.map((t=>{var{providerId:e}=t,n=Ge(t,["providerId"]);return{providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}
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
 */async function zn(t,e){const n=await _n(t,{},(async()=>{const n=Q({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:s}=t.config,i=Sn(t,r,"/v1/token",`key=${s}`),o=await t._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",wn.fetch()(i,{method:"POST",headers:o,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
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
 */class Hn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){sn(t.idToken,"internal-error"),sn("undefined"!==typeof t.idToken,"internal-error"),sn("undefined"!==typeof t.refreshToken,"internal-error");const e="expiresIn"in t&&"undefined"!==typeof t.expiresIn?Number(t.expiresIn):Pn(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}async getToken(t,e=!1){return sn(!this.accessToken||this.refreshToken,t,"user-token-expired"),e||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:n,refreshToken:r,expiresIn:s}=await zn(t,e);this.updateTokensAndExpiration(n,r,Number(s))}updateTokensAndExpiration(t,e,n){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(t,e){const{refreshToken:n,accessToken:r,expirationTime:s}=e,i=new Hn;return n&&(sn("string"===typeof n,"internal-error",{appName:t}),i.refreshToken=n),r&&(sn("string"===typeof r,"internal-error",{appName:t}),i.accessToken=r),s&&(sn("number"===typeof s,"internal-error",{appName:t}),i.expirationTime=s),i}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Hn,this.toJSON())}_performRefresh(){return on("not implemented")}}
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
 */function Kn(t,e){sn("string"===typeof t||"undefined"===typeof t,"internal-error",{appName:e})}class Gn{constructor(t){var{uid:e,auth:n,stsTokenManager:r}=t,s=Ge(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Vn(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Fn(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(t){const e=await xn(this,this.stsTokenManager.getToken(this.auth,t));return sn(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return On(this,t)}reload(){return Bn(this)}_assign(t){this!==t&&(sn(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map((t=>Object.assign({},t))),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){return new Gn(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(t){sn(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let n=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),n=!0),e&&await jn(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await xn(this,Nn(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((t=>Object.assign({},t))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var n,r,s,i,o,a,c,u;const l=null!==(n=e.displayName)&&void 0!==n?n:void 0,h=null!==(r=e.email)&&void 0!==r?r:void 0,d=null!==(s=e.phoneNumber)&&void 0!==s?s:void 0,f=null!==(i=e.photoURL)&&void 0!==i?i:void 0,p=null!==(o=e.tenantId)&&void 0!==o?o:void 0,g=null!==(a=e._redirectEventId)&&void 0!==a?a:void 0,m=null!==(c=e.createdAt)&&void 0!==c?c:void 0,y=null!==(u=e.lastLoginAt)&&void 0!==u?u:void 0,{uid:v,emailVerified:w,isAnonymous:b,providerData:I,stsTokenManager:E}=e;sn(v&&E,t,"internal-error");const T=Hn.fromJSON(this.name,E);sn("string"===typeof v,t,"internal-error"),Kn(l,t.name),Kn(h,t.name),sn("boolean"===typeof w,t,"internal-error"),sn("boolean"===typeof b,t,"internal-error"),Kn(d,t.name),Kn(f,t.name),Kn(p,t.name),Kn(g,t.name),Kn(m,t.name),Kn(y,t.name);const _=new Gn({uid:v,auth:t,email:h,emailVerified:w,displayName:l,isAnonymous:b,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:T,createdAt:m,lastLoginAt:y});return I&&Array.isArray(I)&&(_.providerData=I.map((t=>Object.assign({},t)))),g&&(_._redirectEventId=g),_}static async _fromIdTokenResponse(t,e,n=!1){const r=new Hn;r.updateFromServerResponse(e);const s=new Gn({uid:e.localId,auth:t,stsTokenManager:r,isAnonymous:n});return await jn(s),s}}
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
 */class Wn{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return void 0===e?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}Wn.type="NONE";const Qn=Wn;
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
 */function Xn(t,e,n){return`firebase:${t}:${e}:${n}`}class Yn{constructor(t,e,n){this.persistence=t,this.auth=e,this.userKey=n;const{config:r,name:s}=this.auth;this.fullUserKey=Xn(this.userKey,r.apiKey,s),this.fullPersistenceKey=Xn("persistence",r.apiKey,s),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?Gn._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=t,e?this.setCurrentUser(e):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,n="authUser"){if(!e.length)return new Yn(un(Qn),t,n);const r=(await Promise.all(e.map((async t=>{if(await t._isAvailable())return t})))).filter((t=>t));let s=r[0]||un(Qn);const i=Xn(n,t.config.apiKey,t.name);let o=null;for(const c of e)try{const e=await c._get(i);if(e){const n=Gn._fromJSON(t,e);c!==s&&(o=n),s=c;break}}catch(ny){}const a=r.filter((t=>t._shouldAllowMigration));return s._shouldAllowMigration&&a.length?(s=a[0],o&&await s._set(i,o.toJSON()),await Promise.all(e.map((async t=>{if(t!==s)try{await t._remove(i)}catch(ny){}}))),new Yn(s,t,n)):new Yn(s,t,n)}}
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
 */function Jn(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(nr(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Zn(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(sr(e))return"Blackberry";if(ir(e))return"Webos";if(tr(e))return"Safari";if((e.includes("chrome/")||er(e))&&!e.includes("edge/"))return"Chrome";if(rr(e))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=t.match(e);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function Zn(t=O()){return/firefox\//i.test(t)}function tr(t=O()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function er(t=O()){return/crios\//i.test(t)}function nr(t=O()){return/iemobile/i.test(t)}function rr(t=O()){return/android/i.test(t)}function sr(t=O()){return/blackberry/i.test(t)}function ir(t=O()){return/webos/i.test(t)}function or(t=O()){return/iphone|ipad|ipod/i.test(t)}function ar(t=O()){var e;return or(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}function cr(){return U()&&10===document.documentMode}function ur(t=O()){return or(t)||rr(t)||ir(t)||sr(t)||/windows phone/i.test(t)||nr(t)}function lr(){try{return!(!window||window===window.top)}catch(t){return!1}}
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
 */function hr(t,e=[]){let n;switch(t){case"Browser":n=Jn(O());break;case"Worker":n=`${Jn(O())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ke}/${r}`}
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
 */class dr{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,e){const n=e=>new Promise(((n,r)=>{try{const r=t(e);n(r)}catch(s){r(s)}}));n.onAbort=e,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(t){var e;if(this.auth.currentUser===t)return;const n=[];try{for(const e of this.queue)await e(t),e.onAbort&&n.push(e.onAbort)}catch(r){n.reverse();for(const t of n)try{t()}catch(s){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===(e=r)||void 0===e?void 0:e.message})}}}
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
 */class fr{constructor(t,e,n){this.app=t,this.heartbeatServiceProvider=e,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new gr(this),this.idTokenSubscription=new gr(this),this.beforeStateQueue=new dr(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Xe,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=un(e)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await Yn.create(this,t),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(s){}await this.initializeCurrentUser(e),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();return this.currentUser||t?this.currentUser&&t&&this.currentUser.uid===t.uid?(this._currentUser._assign(t),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(t,!0):void 0}async initializeCurrentUser(t){var e;const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(e=this.redirectUser)||void 0===e?void 0:e._redirectEventId,i=null===r||void 0===r?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(t);n&&n!==i||!(null===o||void 0===o?void 0:o.user)||(r=o.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(i){r=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(i)))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return sn(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch(n){await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){var e;try{await jn(t)}catch(n){if("auth/network-request-failed"!==(null===(e=n)||void 0===e?void 0:e.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=mn()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const e=t?nt(t):null;return e&&sn(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t,e=!1){if(!this._deleted)return t&&sn(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),e||await this.beforeStateQueue.runMiddleware(t),this.queue((async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue((async()=>{await this.assertedPersistence.setPersistence(un(t))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new $("auth","Firebase",t())}onAuthStateChanged(t,e,n){return this.registerStateListener(this.authStateSubscription,t,e,n)}beforeAuthStateChanged(t,e){return this.beforeStateQueue.pushCallback(t,e)}onIdTokenChanged(t,e,n){return this.registerStateListener(this.idTokenSubscription,t,e,n)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(t=this._currentUser)||void 0===t?void 0:t.toJSON()}}async _setRedirectUser(t,e){const n=await this.getOrInitRedirectPersistenceManager(e);return null===t?n.removeCurrentUser():n.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&un(t)||this._popupRedirectResolver;sn(e,this,"argument-error"),this.redirectPersistenceManager=await Yn.create(this,[un(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(e=this._currentUser)||void 0===e?void 0:e._redirectEventId)===t?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(t)))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(e=null===(t=this.currentUser)||void 0===t?void 0:t.uid)&&void 0!==e?e:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,n,r){if(this._deleted)return()=>{};const s="function"===typeof e?e:e.next.bind(e),i=this._isInitialized?Promise.resolve():this._initializationPromise;return sn(i,this,"internal-error"),i.then((()=>s(this.currentUser))),"function"===typeof e?t.addObserver(e,n,r):t.addObserver(e)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&(this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh()),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return sn(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){t&&!this.frameworks.includes(t)&&(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=hr(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const e={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(t=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===t?void 0:t.getHeartbeatsHeader());return n&&(e["X-Firebase-Client"]=n),e}}function pr(t){return nt(t)}class gr{constructor(t){this.auth=t,this.observer=null,this.addObserver=J((t=>this.observer=t))}get next(){return sn(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
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
class mr{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return on("not implemented")}_getIdTokenResponse(t){return on("not implemented")}_linkToIdToken(t,e){return on("not implemented")}_getReauthenticationResolver(t){return on("not implemented")}}
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
 */async function yr(t,e){return Tn(t,"POST","/v1/accounts:update",e)}
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
async function vr(t,e){return kn(t,"POST","/v1/accounts:signInWithPassword",En(t,e))}
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
async function wr(t,e){return kn(t,"POST","/v1/accounts:signInWithEmailLink",En(t,e))}async function br(t,e){return kn(t,"POST","/v1/accounts:signInWithEmailLink",En(t,e))}
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
 */class Ir extends mr{constructor(t,e,n,r=null){super("password",n),this._email=t,this._password=e,this._tenantId=r}static _fromEmailAndPassword(t,e){return new Ir(t,e,"password")}static _fromEmailAndCode(t,e,n=null){return new Ir(t,e,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const e="string"===typeof t?JSON.parse(t):t;if((null===e||void 0===e?void 0:e.email)&&(null===e||void 0===e?void 0:e.password)){if("password"===e.signInMethod)return this._fromEmailAndPassword(e.email,e.password);if("emailLink"===e.signInMethod)return this._fromEmailAndCode(e.email,e.password,e.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":return vr(t,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return wr(t,{email:this._email,oobCode:this._password});default:Ze(t,"internal-error")}}async _linkToIdToken(t,e){switch(this.signInMethod){case"password":return yr(t,{idToken:e,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return br(t,{idToken:e,email:this._email,oobCode:this._password});default:Ze(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}
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
 */async function Er(t,e){return kn(t,"POST","/v1/accounts:signInWithIdp",En(t,e))}
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
 */const Tr="http://localhost";class _r extends mr{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new _r(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):Ze("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e="string"===typeof t?JSON.parse(t):t,{providerId:n,signInMethod:r}=e,s=Ge(e,["providerId","signInMethod"]);if(!n||!r)return null;const i=new _r(n,r);return i.idToken=s.idToken||void 0,i.accessToken=s.accessToken||void 0,i.secret=s.secret,i.nonce=s.nonce,i.pendingToken=s.pendingToken||null,i}_getIdTokenResponse(t){const e=this.buildRequest();return Er(t,e)}_linkToIdToken(t,e){const n=this.buildRequest();return n.idToken=e,Er(t,n)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,Er(t,e)}buildRequest(){const t={requestUri:Tr,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e["id_token"]=this.idToken),this.accessToken&&(e["access_token"]=this.accessToken),this.secret&&(e["oauth_token_secret"]=this.secret),e["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(e["nonce"]=this.nonce),t.postBody=Q(e)}return t}}
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
 */async function kr(t,e){return Tn(t,"POST","/v1/accounts:sendVerificationCode",En(t,e))}async function Sr(t,e){return kn(t,"POST","/v1/accounts:signInWithPhoneNumber",En(t,e))}async function Cr(t,e){const n=await kn(t,"POST","/v1/accounts:signInWithPhoneNumber",En(t,e));if(n.temporaryProof)throw An(t,"account-exists-with-different-credential",n);return n}const Ar={["USER_NOT_FOUND"]:"user-not-found"};async function Nr(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return kn(t,"POST","/v1/accounts:signInWithPhoneNumber",En(t,n),Ar)}
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
 */class Dr extends mr{constructor(t){super("phone","phone"),this.params=t}static _fromVerification(t,e){return new Dr({verificationId:t,verificationCode:e})}static _fromTokenResponse(t,e){return new Dr({phoneNumber:t,temporaryProof:e})}_getIdTokenResponse(t){return Sr(t,this._makeVerificationRequest())}_linkToIdToken(t,e){return Cr(t,Object.assign({idToken:e},this._makeVerificationRequest()))}_getReauthenticationResolver(t){return Nr(t,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:t,phoneNumber:e,verificationId:n,verificationCode:r}=this.params;return t&&e?{temporaryProof:t,phoneNumber:e}:{sessionInfo:n,code:r}}toJSON(){const t={providerId:this.providerId};return this.params.phoneNumber&&(t.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(t.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(t.verificationCode=this.params.verificationCode),this.params.verificationId&&(t.verificationId=this.params.verificationId),t}static fromJSON(t){"string"===typeof t&&(t=JSON.parse(t));const{verificationId:e,verificationCode:n,phoneNumber:r,temporaryProof:s}=t;return n||e||r||s?new Dr({verificationId:e,verificationCode:n,phoneNumber:r,temporaryProof:s}):null}}
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
 */function Rr(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Or(t){const e=X(Y(t))["link"],n=e?X(Y(e))["deep_link_id"]:null,r=X(Y(t))["deep_link_id"],s=r?X(Y(r))["link"]:null;return s||r||n||e||t}class Mr{constructor(t){var e,n,r,s,i,o;const a=X(Y(t)),c=null!==(e=a["apiKey"])&&void 0!==e?e:null,u=null!==(n=a["oobCode"])&&void 0!==n?n:null,l=Rr(null!==(r=a["mode"])&&void 0!==r?r:null);sn(c&&u&&l,"argument-error"),this.apiKey=c,this.operation=l,this.code=u,this.continueUrl=null!==(s=a["continueUrl"])&&void 0!==s?s:null,this.languageCode=null!==(i=a["languageCode"])&&void 0!==i?i:null,this.tenantId=null!==(o=a["tenantId"])&&void 0!==o?o:null}static parseLink(t){const e=Or(t);try{return new Mr(e)}catch(ny){return null}}}
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
class Lr{constructor(){this.providerId=Lr.PROVIDER_ID}static credential(t,e){return Ir._fromEmailAndPassword(t,e)}static credentialWithLink(t,e){const n=Mr.parseLink(e);return sn(n,"argument-error"),Ir._fromEmailAndCode(t,n.code,n.tenantId)}}Lr.PROVIDER_ID="password",Lr.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Lr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
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
class Pr{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}
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
 */class xr extends Pr{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}
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
class Ur extends xr{constructor(){super("facebook.com")}static credential(t){return _r._fromParams({providerId:Ur.PROVIDER_ID,signInMethod:Ur.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Ur.credentialFromTaggedObject(t)}static credentialFromError(t){return Ur.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return Ur.credential(t.oauthAccessToken)}catch(ny){return null}}}Ur.FACEBOOK_SIGN_IN_METHOD="facebook.com",Ur.PROVIDER_ID="facebook.com";
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
class Vr extends xr{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return _r._fromParams({providerId:Vr.PROVIDER_ID,signInMethod:Vr.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return Vr.credentialFromTaggedObject(t)}static credentialFromError(t){return Vr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:n}=t;if(!e&&!n)return null;try{return Vr.credential(e,n)}catch(ny){return null}}}Vr.GOOGLE_SIGN_IN_METHOD="google.com",Vr.PROVIDER_ID="google.com";
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
class Fr extends xr{constructor(){super("github.com")}static credential(t){return _r._fromParams({providerId:Fr.PROVIDER_ID,signInMethod:Fr.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Fr.credentialFromTaggedObject(t)}static credentialFromError(t){return Fr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return Fr.credential(t.oauthAccessToken)}catch(ny){return null}}}Fr.GITHUB_SIGN_IN_METHOD="github.com",Fr.PROVIDER_ID="github.com";
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
class jr extends xr{constructor(){super("twitter.com")}static credential(t,e){return _r._fromParams({providerId:jr.PROVIDER_ID,signInMethod:jr.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return jr.credentialFromTaggedObject(t)}static credentialFromError(t){return jr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:n}=t;if(!e||!n)return null;try{return jr.credential(e,n)}catch(ny){return null}}}jr.TWITTER_SIGN_IN_METHOD="twitter.com",jr.PROVIDER_ID="twitter.com";
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
class Br{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,n,r=!1){const s=await Gn._fromIdTokenResponse(t,n,r),i=qr(n),o=new Br({user:s,providerId:i,_tokenResponse:n,operationType:e});return o}static async _forOperation(t,e,n){await t._updateTokensIfNecessary(n,!0);const r=qr(n);return new Br({user:t,providerId:r,_tokenResponse:n,operationType:e})}}function qr(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}
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
class $r extends q{constructor(t,e,n,r){var s;super(e.code,e.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,$r.prototype),this.customData={appName:t.name,tenantId:null!==(s=t.tenantId)&&void 0!==s?s:void 0,_serverResponse:e.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(t,e,n,r){return new $r(t,e,n,r)}}function zr(t,e,n,r){const s="reauthenticate"===e?n._getReauthenticationResolver(t):n._getIdTokenResponse(t);return s.catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw $r._fromErrorAndOperation(t,n,e,r);throw n}))}
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
 */async function Hr(t,e,n=!1){const r=await xn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Br._forOperation(t,"link",r)}
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
async function Kr(t,e,n=!1){var r;const{auth:s}=t,i="reauthenticate";try{const r=await xn(t,zr(s,i,e,t),n);sn(r.idToken,s,"internal-error");const o=Ln(r.idToken);sn(o,s,"internal-error");const{sub:a}=o;return sn(t.uid===a,s,"user-mismatch"),Br._forOperation(t,i,r)}catch(o){throw"auth/user-not-found"===(null===(r=o)||void 0===r?void 0:r.code)&&Ze(s,"user-mismatch"),o}}
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
 */async function Gr(t,e,n=!1){const r="signIn",s=await zr(t,r,e),i=await Br._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function Wr(t,e,n,r){return nt(t).onAuthStateChanged(e,n,r)}function Qr(t){return nt(t).signOut()}
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
function Xr(t,e){return Tn(t,"POST","/v2/accounts/mfaEnrollment:start",En(t,e))}function Yr(t,e){return Tn(t,"POST","/v2/accounts/mfaEnrollment:finalize",En(t,e))}new WeakMap;const Jr="__sak";
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
 */class Zr{constructor(t,e){this.storageRetriever=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem(Jr,"1"),this.storage.removeItem(Jr),Promise.resolve(!0)):Promise.resolve(!1)}catch(ny){return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}
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
 */function ts(){const t=O();return tr(t)||or(t)}const es=1e3,ns=10;class rs extends Zr{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=ts()&&lr(),this.fallbackToPolling=ur(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const n=this.storage.getItem(e),r=this.localCache[e];n!==r&&t(e,r,n)}}onStorageEvent(t,e=!1){if(!t.key)return void this.forAllChangedKeys(((t,e,n)=>{this.notifyListeners(t,n)}));const n=t.key;if(e?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(t.newValue!==r)null!==t.newValue?this.storage.setItem(n,t.newValue):this.storage.removeItem(n);else if(this.localCache[n]===t.newValue&&!e)return}const r=()=>{const t=this.storage.getItem(n);(e||this.localCache[n]!==t)&&this.notifyListeners(n,t)},s=this.storage.getItem(n);cr()&&s!==t.newValue&&t.newValue!==t.oldValue?setTimeout(r,ns):r()}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const r of Array.from(n))r(e?JSON.parse(e):e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((t,e,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:n}),!0)}))}),es)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}rs.type="LOCAL";const ss=rs;
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
 */class is extends Zr{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(t,e){}_removeListener(t,e){}}is.type="SESSION";const os=is;
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
 */function as(t){return Promise.all(t.map((async t=>{try{const e=await t;return{fulfilled:!0,value:e}}catch(e){return{fulfilled:!1,reason:e}}})))}
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
 */class cs{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find((e=>e.isListeningto(t)));if(e)return e;const n=new cs(t);return this.receivers.push(n),n}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:n,eventType:r,data:s}=e.data,i=this.handlersMap[r];if(!(null===i||void 0===i?void 0:i.size))return;e.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(i).map((async t=>t(e.origin,s))),a=await as(o);e.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(t,e){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),e&&0!==this.handlersMap[t].size||delete this.handlersMap[t],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
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
function us(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(10*Math.random());return t+n}
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
 */cs.receivers=[];class ls{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,n=50){const r="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let s,i;return new Promise(((o,a)=>{const c=us("",20);r.port1.start();const u=setTimeout((()=>{a(new Error("unsupported_event"))}),n);i={messageChannel:r,onMessage(t){const e=t;if(e.data.eventId===c)switch(e.data.status){case"ack":clearTimeout(u),s=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(s),o(e.data.response);break;default:clearTimeout(u),clearTimeout(s),a(new Error("invalid_response"));break}}},this.handlers.add(i),r.port1.addEventListener("message",i.onMessage),this.target.postMessage({eventType:t,eventId:c,data:e},[r.port2])})).finally((()=>{i&&this.removeMessageHandler(i)}))}}
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
 */function hs(){return window}function ds(t){hs().location.href=t}
/**
 * @license
 * Copyright 2020 Google LLC.
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
 */function fs(){return"undefined"!==typeof hs()["WorkerGlobalScope"]&&"function"===typeof hs()["importScripts"]}async function ps(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const t=await navigator.serviceWorker.ready;return t.active}catch(ny){return null}}function gs(){var t;return(null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null}function ms(){return fs()?self:null}
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
 */const ys="firebaseLocalStorageDb",vs=1,ws="firebaseLocalStorage",bs="fbase_key";class Is{constructor(t){this.request=t}toPromise(){return new Promise(((t,e)=>{this.request.addEventListener("success",(()=>{t(this.request.result)})),this.request.addEventListener("error",(()=>{e(this.request.error)}))}))}}function Es(t,e){return t.transaction([ws],e?"readwrite":"readonly").objectStore(ws)}function Ts(){const t=indexedDB.deleteDatabase(ys);return new Is(t).toPromise()}function _s(){const t=indexedDB.open(ys,vs);return new Promise(((e,n)=>{t.addEventListener("error",(()=>{n(t.error)})),t.addEventListener("upgradeneeded",(()=>{const e=t.result;try{e.createObjectStore(ws,{keyPath:bs})}catch(r){n(r)}})),t.addEventListener("success",(async()=>{const n=t.result;n.objectStoreNames.contains(ws)?e(n):(n.close(),await Ts(),e(await _s()))}))}))}async function ks(t,e,n){const r=Es(t,!0).put({[bs]:e,value:n});return new Is(r).toPromise()}async function Ss(t,e){const n=Es(t,!1).get(e),r=await new Is(n).toPromise();return void 0===r?null:r.value}function Cs(t,e){const n=Es(t,!0).delete(e);return new Is(n).toPromise()}const As=800,Ns=3;class Ds{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await _s()),this.db}async _withRetries(t){let e=0;while(1)try{const e=await this._openDb();return await t(e)}catch(n){if(e++>Ns)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return fs()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=cs._getInstance(ms()),this.receiver._subscribe("keyChanged",(async(t,e)=>{const n=await this._poll();return{keyProcessed:n.includes(e.key)}})),this.receiver._subscribe("ping",(async(t,e)=>["keyChanged"]))}async initializeSender(){var t,e;if(this.activeServiceWorker=await ps(),!this.activeServiceWorker)return;this.sender=new ls(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(t=n[0])||void 0===t?void 0:t.fulfilled)&&(null===(e=n[0])||void 0===e?void 0:e.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(this.sender&&this.activeServiceWorker&&gs()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch(ny){}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await _s();return await ks(t,Jr,"1"),await Cs(t,Jr),!0}catch(ny){}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite((async()=>(await this._withRetries((n=>ks(n,t,e))),this.localCache[t]=e,this.notifyServiceWorker(t))))}async _get(t){const e=await this._withRetries((e=>Ss(e,t)));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite((async()=>(await this._withRetries((e=>Cs(e,t))),delete this.localCache[t],this.notifyServiceWorker(t))))}async _poll(){const t=await this._withRetries((t=>{const e=Es(t,!1).getAll();return new Is(e).toPromise()}));if(!t)return[];if(0!==this.pendingWrites)return[];const e=[],n=new Set;for(const{fbase_key:r,value:s}of t)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(s)&&(this.notifyListeners(r,s),e.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),e.push(r));return e}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const r of Array.from(n))r(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),As)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&this.stopPolling()}}Ds.type="LOCAL";const Rs=Ds;
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
 */function Os(t,e){return Tn(t,"POST","/v2/accounts/mfaSignIn:start",En(t,e))}function Ms(t,e){return Tn(t,"POST","/v2/accounts/mfaSignIn:finalize",En(t,e))}
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
function Ls(){var t,e;return null!==(e=null===(t=document.getElementsByTagName("head"))||void 0===t?void 0:t[0])&&void 0!==e?e:document}function Ps(t){return new Promise(((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=t=>{const e=tn("internal-error");e.customData=t,n(e)},r.type="text/javascript",r.charset="UTF-8",Ls().appendChild(r)}))}function xs(t){return`__${t}${Math.floor(1e6*Math.random())}`}
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
xs("rcb"),new yn(3e4,6e4);
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
const Us="recaptcha";async function Vs(t,e,n){var r;const s=await n.verify();try{let i;if(sn("string"===typeof s,t,"argument-error"),sn(n.type===Us,t,"argument-error"),i="string"===typeof e?{phoneNumber:e}:e,"session"in i){const e=i.session;if("phoneNumber"in i){sn("enroll"===e.type,t,"internal-error");const n=await Xr(t,{idToken:e.credential,phoneEnrollmentInfo:{phoneNumber:i.phoneNumber,recaptchaToken:s}});return n.phoneSessionInfo.sessionInfo}{sn("signin"===e.type,t,"internal-error");const n=(null===(r=i.multiFactorHint)||void 0===r?void 0:r.uid)||i.multiFactorUid;sn(n,t,"missing-multi-factor-info");const o=await Os(t,{mfaPendingCredential:e.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:s}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:e}=await kr(t,{phoneNumber:i.phoneNumber,recaptchaToken:s});return e}}finally{n._reset()}}
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
class Fs{constructor(t){this.providerId=Fs.PROVIDER_ID,this.auth=pr(t)}verifyPhoneNumber(t,e){return Vs(this.auth,t,nt(e))}static credential(t,e){return Dr._fromVerification(t,e)}static credentialFromResult(t){const e=t;return Fs.credentialFromTaggedObject(e)}static credentialFromError(t){return Fs.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{phoneNumber:e,temporaryProof:n}=t;return e&&n?Dr._fromTokenResponse(e,n):null}}
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
function js(t,e){return e?un(e):(sn(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}
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
 */Fs.PROVIDER_ID="phone",Fs.PHONE_SIGN_IN_METHOD="phone";class Bs extends mr{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Er(t,this._buildIdpRequest())}_linkToIdToken(t,e){return Er(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return Er(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function qs(t){return Gr(t.auth,new Bs(t),t.bypassAuthState)}function $s(t){const{auth:e,user:n}=t;return sn(n,e,"internal-error"),Kr(n,new Bs(t),t.bypassAuthState)}async function zs(t){const{auth:e,user:n}=t;return sn(n,e,"internal-error"),Hr(n,new Bs(t),t.bypassAuthState)}
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
 */class Hs{constructor(t,e,n,r,s=!1){this.auth=t,this.resolver=n,this.user=r,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise((async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}}))}async onAuthEvent(t){const{urlResponse:e,sessionId:n,postBody:r,tenantId:s,error:i,type:o}=t;if(i)return void this.reject(i);const a={auth:this.auth,requestUri:e,sessionId:n,tenantId:s||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(c){this.reject(c)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return qs;case"linkViaPopup":case"linkViaRedirect":return zs;case"reauthViaPopup":case"reauthViaRedirect":return $s;default:Ze(this.auth,"internal-error")}}resolve(t){an(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){an(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
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
 */const Ks=new yn(2e3,1e4);async function Gs(t,e,n){const r=pr(t);nn(t,e,Pr);const s=js(r,n),i=new Ws(r,"signInViaPopup",e,s);return i.executeNotNull()}class Ws extends Hs{constructor(t,e,n,r,s){super(t,e,r,s),this.provider=n,this.authWindow=null,this.pollId=null,Ws.currentPopupAction&&Ws.currentPopupAction.cancel(),Ws.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return sn(t,this.auth,"internal-error"),t}async onExecution(){an(1===this.filter.length,"Popup operations only handle one event");const t=us();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch((t=>{this.reject(t)})),this.resolver._isIframeWebStorageSupported(this.auth,(t=>{t||this.reject(tn(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var t;return(null===(t=this.authWindow)||void 0===t?void 0:t.associatedEvent)||null}cancel(){this.reject(tn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ws.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,n;(null===(n=null===(e=this.authWindow)||void 0===e?void 0:e.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(tn(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(t,Ks.get())};t()}}Ws.currentPopupAction=null;
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
const Qs="pendingRedirect",Xs=new Map;class Ys extends Hs{constructor(t,e,n=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,n),this.eventId=null}async execute(){let t=Xs.get(this.auth._key());if(!t){try{const e=await Js(this.resolver,this.auth),n=e?await super.execute():null;t=()=>Promise.resolve(n)}catch(e){t=()=>Promise.reject(e)}Xs.set(this.auth._key(),t)}return this.bypassAuthState||Xs.set(this.auth._key(),(()=>Promise.resolve(null))),t()}async onAuthEvent(t){if("signInViaRedirect"===t.type)return super.onAuthEvent(t);if("unknown"!==t.type){if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function Js(t,e){const n=ei(e),r=ti(t);if(!await r._isAvailable())return!1;const s="true"===await r._get(n);return await r._remove(n),s}function Zs(t,e){Xs.set(t._key(),e)}function ti(t){return un(t._redirectPersistence)}function ei(t){return Xn(Qs,t.config.apiKey,t.name)}
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
 */async function ni(t,e,n=!1){const r=pr(t),s=js(r,e),i=new Ys(r,s,n),o=await i.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}
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
const ri=6e5;class si{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(t,n)&&(e=!0,this.sendToConsumer(t,n),this.saveEventToCache(t))})),this.hasHandledPotentialRedirect||!ai(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var n;if(t.error&&!oi(t)){const r=(null===(n=t.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";e.onError(tn(this.auth,r))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const n=null===e.eventId||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&n}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=ri&&this.cachedEventUids.clear(),this.cachedEventUids.has(ii(t))}saveEventToCache(t){this.cachedEventUids.add(ii(t)),this.lastProcessedEventTime=Date.now()}}function ii(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter((t=>t)).join("-")}function oi({type:t,error:e}){return"unknown"===t&&"auth/no-auth-event"===(null===e||void 0===e?void 0:e.code)}function ai(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return oi(t);default:return!1}}
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
 */async function ci(t,e={}){return Tn(t,"GET","/v1/projects",e)}
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
 */const ui=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,li=/^https?/;async function hi(t){if(t.config.emulator)return;const{authorizedDomains:e}=await ci(t);for(const n of e)try{if(di(n))return}catch(ny){}Ze(t,"unauthorized-domain")}function di(t){const e=dn(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const s=new URL(t);return""===s.hostname&&""===r?"chrome-extension:"===n&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):"chrome-extension:"===n&&s.hostname===r}if(!li.test(n))return!1;if(ui.test(t))return r===t;const s=t.replace(/\./g,"\\."),i=new RegExp("^(.+\\."+s+"|"+s+")$","i");return i.test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const fi=new yn(3e4,6e4);function pi(){const t=hs().___jsl;if(null===t||void 0===t?void 0:t.H)for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}function gi(t){return new Promise(((e,n)=>{var r,s,i;function o(){pi(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{pi(),n(tn(t,"network-request-failed"))},timeout:fi.get()})}if(null===(s=null===(r=hs().gapi)||void 0===r?void 0:r.iframes)||void 0===s?void 0:s.Iframe)e(gapi.iframes.getContext());else{if(!(null===(i=hs().gapi)||void 0===i?void 0:i.load)){const e=xs("iframefcb");return hs()[e]=()=>{gapi.load?o():n(tn(t,"network-request-failed"))},Ps(`https://apis.google.com/js/api.js?onload=${e}`).catch((t=>n(t)))}o()}})).catch((t=>{throw mi=null,t}))}let mi=null;function yi(t){return mi=mi||gi(t),mi}
/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const vi=new yn(5e3,15e3),wi="__/auth/iframe",bi="emulator/auth/iframe",Ii={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Ei=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Ti(t){const e=t.config;sn(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?vn(e,bi):`https://${t.config.authDomain}/${wi}`,r={apiKey:e.apiKey,appName:t.name,v:ke},s=Ei.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Q(r).slice(1)}`}async function _i(t){const e=await yi(t),n=hs().gapi;return sn(n,t,"internal-error"),e.open({where:document.body,url:Ti(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ii,dontclear:!0},(e=>new Promise((async(n,r)=>{await e.restyle({setHideOnLeave:!1});const s=tn(t,"network-request-failed"),i=hs().setTimeout((()=>{r(s)}),vi.get());function o(){hs().clearTimeout(i),n(e)}e.ping(o).then(o,(()=>{r(s)}))}))))}
/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const ki={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Si=500,Ci=600,Ai="_blank",Ni="http://localhost";class Di{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(t){}}}function Ri(t,e,n,r=Si,s=Ci){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},ki),{width:r.toString(),height:s.toString(),top:i,left:o}),u=O().toLowerCase();n&&(a=er(u)?Ai:n),Zn(u)&&(e=e||Ni,c.scrollbars="yes");const l=Object.entries(c).reduce(((t,[e,n])=>`${t}${e}=${n},`),"");if(ar(u)&&"_self"!==a)return Oi(e||"",a),new Di(null);const h=window.open(e||"",a,l);sn(h,t,"popup-blocked");try{h.focus()}catch(d){}return new Di(h)}function Oi(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
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
 */const Mi="__/auth/handler",Li="emulator/auth/handler";function Pi(t,e,n,r,s,i){sn(t.config.authDomain,t,"auth-domain-config-required"),sn(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ke,eventId:s};if(e instanceof Pr){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",K(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[t,e]of Object.entries(i||{}))o[t]=e}if(e instanceof xr){const t=e.getScopes().filter((t=>""!==t));t.length>0&&(o.scopes=t.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))void 0===a[c]&&delete a[c];return`${xi(t)}?${Q(a).slice(1)}`}function xi({config:t}){return t.emulator?vn(t,Li):`https://${t.authDomain}/${Mi}`}
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
 */const Ui="webStorageSupport";class Vi{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=os,this._completeRedirectFn=ni,this._overrideRedirectResult=Zs}async _openPopup(t,e,n,r){var s;an(null===(s=this.eventManagers[t._key()])||void 0===s?void 0:s.manager,"_initialize() not called before _openPopup()");const i=Pi(t,e,n,dn(),r);return Ri(t,i,us())}async _openRedirect(t,e,n,r){return await this._originValidation(t),ds(Pi(t,e,n,dn(),r)),new Promise((()=>{}))}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:t,promise:n}=this.eventManagers[e];return t?Promise.resolve(t):(an(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(t);return this.eventManagers[e]={promise:n},n.catch((()=>{delete this.eventManagers[e]})),n}async initAndGetManager(t){const e=await _i(t),n=new si(t);return e.register("authEvent",(e=>{sn(null===e||void 0===e?void 0:e.authEvent,t,"invalid-auth-event");const r=n.onEvent(e.authEvent);return{status:r?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:n},this.iframes[t._key()]=e,n}_isIframeWebStorageSupported(t,e){const n=this.iframes[t._key()];n.send(Ui,{type:Ui},(n=>{var r;const s=null===(r=null===n||void 0===n?void 0:n[0])||void 0===r?void 0:r[Ui];void 0!==s&&e(!!s),Ze(t,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=hi(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return ur()||tr()||or()}}const Fi=Vi;class ji{constructor(t){this.factorId=t}_process(t,e,n){switch(e.type){case"enroll":return this._finalizeEnroll(t,e.credential,n);case"signin":return this._finalizeSignIn(t,e.credential);default:return on("unexpected MultiFactorSessionType")}}}class Bi extends ji{constructor(t){super("phone"),this.credential=t}static _fromCredential(t){return new Bi(t)}_finalizeEnroll(t,e,n){return Yr(t,{idToken:e,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(t,e){return Ms(t,{mfaPendingCredential:e,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class qi{constructor(){}static assertion(t){return Bi._fromCredential(t)}}qi.FACTOR_ID="phone";var $i="@firebase/auth",zi="0.20.4";
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
class Hi{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),(null===(t=this.auth.currentUser)||void 0===t?void 0:t.uid)||null}async getToken(t){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const e=await this.auth.currentUser.getIdToken(t);return{accessToken:e}}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged((e=>{var n;t((null===(n=e)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)}));this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){sn(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
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
 */function Ki(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Gi(t){be(new rt("auth",((e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=r.options;return((e,r)=>{sn(i&&!i.includes(":"),"invalid-api-key",{appName:e.name}),sn(!(null===o||void 0===o?void 0:o.includes(":")),"argument-error",{appName:e.name});const s={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:hr(t)},a=new fr(e,r,s);return hn(a,n),a})(r,s)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((t,e,n)=>{const r=t.getProvider("auth-internal");r.initialize()}))),be(new rt("auth-internal",(t=>{const e=pr(t.getProvider("auth").getImmediate());return(t=>new Hi(t))(e)}),"PRIVATE").setInstantiationMode("EXPLICIT")),Ae($i,zi,Ki(t)),Ae($i,zi,"esm2017")}
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
 */function Wi(t=Ce()){const e=Ie(t,"auth");return e.isInitialized()?e.getImmediate():ln(t,{popupRedirectResolver:Fi,persistence:[Rs,ss,os]})}Gi("Browser");var Qi,Xi="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:"undefined"!==typeof self?self:{},Yi={},Ji=Ji||{},Zi=Xi||self;function to(){}function eo(t){var e=typeof t;return e="object"!=e?e:t?Array.isArray(t)?"array":e:"null","array"==e||"object"==e&&"number"==typeof t.length}function no(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}function ro(t){return Object.prototype.hasOwnProperty.call(t,so)&&t[so]||(t[so]=++io)}var so="closure_uid_"+(1e9*Math.random()>>>0),io=0;function oo(t,e,n){return t.call.apply(t.bind,arguments)}function ao(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function co(t,e,n){return co=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?oo:ao,co.apply(null,arguments)}function uo(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function lo(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(t,n,r){for(var s=Array(arguments.length-2),i=2;i<arguments.length;i++)s[i-2]=arguments[i];return e.prototype[n].apply(t,s)}}function ho(){this.s=this.s,this.o=this.o}var fo=0,po={};ho.prototype.s=!1,ho.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0!=fo)){var t=ro(this);delete po[t]}},ho.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const go=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"===typeof t)return"string"!==typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},mo=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const r=t.length,s="string"===typeof t?t.split(""):t;for(let i=0;i<r;i++)i in s&&e.call(n,s[i],i,t)};function yo(t){t:{var e=Lu;const n=t.length,r="string"===typeof t?t.split(""):t;for(let s=0;s<n;s++)if(s in r&&e.call(void 0,r[s],s,t)){e=s;break t}e=-1}return 0>e?null:"string"===typeof t?t.charAt(e):t[e]}function vo(t){return Array.prototype.concat.apply([],arguments)}function wo(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function bo(t){return/^[\s\xa0]*$/.test(t)}var Io,Eo=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function To(t,e){return-1!=t.indexOf(e)}function _o(t,e){return t<e?-1:t>e?1:0}t:{var ko=Zi.navigator;if(ko){var So=ko.userAgent;if(So){Io=So;break t}}Io=""}function Co(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function Ao(t){const e={};for(const n in t)e[n]=t[n];return e}var No="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Do(t,e){let n,r;for(let s=1;s<arguments.length;s++){for(n in r=arguments[s],r)t[n]=r[n];for(let e=0;e<No.length;e++)n=No[e],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Ro(t){return Ro[" "](t),t}function Oo(t){var e=Ho;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}Ro[" "]=to;var Mo,Lo=To(Io,"Opera"),Po=To(Io,"Trident")||To(Io,"MSIE"),xo=To(Io,"Edge"),Uo=xo||Po,Vo=To(Io,"Gecko")&&!(To(Io.toLowerCase(),"webkit")&&!To(Io,"Edge"))&&!(To(Io,"Trident")||To(Io,"MSIE"))&&!To(Io,"Edge"),Fo=To(Io.toLowerCase(),"webkit")&&!To(Io,"Edge");function jo(){var t=Zi.document;return t?t.documentMode:void 0}t:{var Bo="",qo=function(){var t=Io;return Vo?/rv:([^\);]+)(\)|;)/.exec(t):xo?/Edge\/([\d\.]+)/.exec(t):Po?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t):Fo?/WebKit\/(\S+)/.exec(t):Lo?/(?:Version)[ \/]?(\S+)/.exec(t):void 0}();if(qo&&(Bo=qo?qo[1]:""),Po){var $o=jo();if(null!=$o&&$o>parseFloat(Bo)){Mo=String($o);break t}}Mo=Bo}var zo,Ho={};function Ko(){return Oo((function(){let t=0;const e=Eo(String(Mo)).split("."),n=Eo("9").split("."),r=Math.max(e.length,n.length);for(let o=0;0==t&&o<r;o++){var s=e[o]||"",i=n[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],0==s[0].length&&0==i[0].length)break;t=_o(0==s[1].length?0:parseInt(s[1],10),0==i[1].length?0:parseInt(i[1],10))||_o(0==s[2].length,0==i[2].length)||_o(s[2],i[2]),s=s[3],i=i[3]}while(0==t)}return 0<=t}))}if(Zi.document&&Po){var Go=jo();zo=Go||(parseInt(Mo,10)||void 0)}else zo=void 0;var Wo=zo,Qo=function(){if(!Zi.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{Zi.addEventListener("test",to,e),Zi.removeEventListener("test",to,e)}catch(n){}return t}();function Xo(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}function Yo(t,e){if(Xo.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Vo){t:{try{Ro(e.nodeName);var s=!0;break t}catch(i){}s=!1}s||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"===typeof t.pointerType?t.pointerType:Jo[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Yo.Z.h.call(this)}}Xo.prototype.h=function(){this.defaultPrevented=!0},lo(Yo,Xo);var Jo={2:"touch",3:"pen",4:"mouse"};Yo.prototype.h=function(){Yo.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Zo="closure_listenable_"+(1e6*Math.random()|0),ta=0;function ea(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ia=s,this.key=++ta,this.ca=this.fa=!1}function na(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function ra(t){this.src=t,this.g={},this.h=0}function sa(t,e){var n=e.type;if(n in t.g){var r,s=t.g[n],i=go(s,e);(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(na(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function ia(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.ca&&i.listener==e&&i.capture==!!n&&i.ia==r)return s}return-1}ra.prototype.add=function(t,e,n,r,s){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=ia(t,e,r,s);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new ea(e,this.src,i,!!r,s),e.fa=n,t.push(e)),e};var oa="closure_lm_"+(1e6*Math.random()|0),aa={};function ca(t,e,n,r,s){if(r&&r.once)return ha(t,e,n,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)ca(t,e[i],n,r,s);return null}return n=va(n),t&&t[Zo]?t.N(e,n,no(r)?!!r.capture:!!r,s):ua(t,e,n,!1,r,s)}function ua(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=no(s)?!!s.capture:!!s,a=ma(t);if(a||(t[oa]=a=new ra(t)),n=a.add(e,n,r,o,i),n.proxy)return n;if(r=la(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)Qo||(s=o),void 0===s&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(pa(e.toString()),r);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(r)}return n}function la(){function t(n){return e.call(t.src,t.listener,n)}var e=ga;return t}function ha(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)ha(t,e[i],n,r,s);return null}return n=va(n),t&&t[Zo]?t.O(e,n,no(r)?!!r.capture:!!r,s):ua(t,e,n,!0,r,s)}function da(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)da(t,e[i],n,r,s);else r=no(r)?!!r.capture:!!r,n=va(n),t&&t[Zo]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=ia(i,n,r,s),-1<n&&(na(i[n]),Array.prototype.splice.call(i,n,1),0==i.length&&(delete t.g[e],t.h--)))):t&&(t=ma(t))&&(e=t.g[e.toString()],t=-1,e&&(t=ia(e,n,r,s)),(n=-1<t?e[t]:null)&&fa(n))}function fa(t){if("number"!==typeof t&&t&&!t.ca){var e=t.src;if(e&&e[Zo])sa(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(pa(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=ma(e))?(sa(n,t),0==n.h&&(n.src=null,e[oa]=null)):na(t)}}}function pa(t){return t in aa?aa[t]:aa[t]="on"+t}function ga(t,e){if(t.ca)t=!0;else{e=new Yo(e,this);var n=t.listener,r=t.ia||t.src;t.fa&&fa(t),t=n.call(r,e)}return t}function ma(t){return t=t[oa],t instanceof ra?t:null}var ya="__closure_events_fn_"+(1e9*Math.random()>>>0);function va(t){return"function"===typeof t?t:(t[ya]||(t[ya]=function(e){return t.handleEvent(e)}),t[ya])}function wa(){ho.call(this),this.i=new ra(this),this.P=this,this.I=null}function ba(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,"string"===typeof e)e=new Xo(e,t);else if(e instanceof Xo)e.target=e.target||t;else{var s=e;e=new Xo(r,t),Do(e,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=Ia(o,r,!0,e)&&s}if(o=e.g=t,s=Ia(o,r,!0,e)&&s,s=Ia(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)o=e.g=n[i],s=Ia(o,r,!1,e)&&s}function Ia(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&sa(t.i,o),s=!1!==a.call(c,r)&&s}}return s&&!r.defaultPrevented}lo(wa,ho),wa.prototype[Zo]=!0,wa.prototype.removeEventListener=function(t,e,n,r){da(this,t,e,n,r)},wa.prototype.M=function(){if(wa.Z.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)na(n[r]);delete e.g[t],e.h--}}this.I=null},wa.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)},wa.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};var Ea=Zi.JSON.stringify;function Ta(){var t=Oa;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class _a{constructor(){this.h=this.g=null}add(t,e){const n=Sa.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}}var ka,Sa=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}((()=>new Ca),(t=>t.reset()));class Ca{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function Aa(t){Zi.setTimeout((()=>{throw t}),0)}function Na(t,e){ka||Da(),Ra||(ka(),Ra=!0),Oa.add(t,e)}function Da(){var t=Zi.Promise.resolve(void 0);ka=function(){t.then(Ma)}}var Ra=!1,Oa=new _a;function Ma(){for(var t;t=Ta();){try{t.h.call(t.g)}catch(n){Aa(n)}var e=Sa;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Ra=!1}function La(t,e){wa.call(this),this.h=t||1,this.g=e||Zi,this.j=co(this.kb,this),this.l=Date.now()}function Pa(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}function xa(t,e,n){if("function"===typeof t)n&&(t=co(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=co(t.handleEvent,t)}return 2147483647<Number(e)?-1:Zi.setTimeout(t,e||0)}function Ua(t){t.g=xa((()=>{t.g=null,t.i&&(t.i=!1,Ua(t))}),t.j);const e=t.h;t.h=null,t.m.apply(null,e)}lo(La,wa),Qi=La.prototype,Qi.da=!1,Qi.S=null,Qi.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),ba(this,"tick"),this.da&&(Pa(this),this.start()))}},Qi.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},Qi.M=function(){La.Z.M.call(this),Pa(this),delete this.g};class Va extends ho{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Ua(this)}M(){super.M(),this.g&&(Zi.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Fa(t){ho.call(this),this.h=t,this.g={}}lo(Fa,ho);var ja=[];function Ba(t,e,n,r){Array.isArray(n)||(n&&(ja[0]=n.toString()),n=ja);for(var s=0;s<n.length;s++){var i=ca(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function qa(t){Co(t.g,(function(t,e){this.g.hasOwnProperty(e)&&fa(t)}),t),t.g={}}function $a(){this.g=!0}function za(t,e,n,r,s,i){t.info((function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&"type"==h[1]?o+(l+"=")+u+"&":o+(l+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+"\n"+n+"\n"+o}))}function Ha(t,e,n,r,s,i,o){t.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+"\n"+n+"\n"+i+" "+o}))}function Ka(t,e,n,r){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+Wa(t,n)+(r?" "+r:"")}))}function Ga(t,e){t.info((function(){return"TIMEOUT: "+e}))}function Wa(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if("noop"!=i&&"stop"!=i&&"close"!=i)for(var o=1;o<s.length;o++)s[o]=""}}}return Ea(n)}catch(a){return e}}Fa.prototype.M=function(){Fa.Z.M.call(this),qa(this)},Fa.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},$a.prototype.Aa=function(){this.g=!1},$a.prototype.info=function(){};var Qa={},Xa=null;function Ya(){return Xa=Xa||new wa}function Ja(t){Xo.call(this,Qa.Ma,t)}function Za(t){const e=Ya();ba(e,new Ja(e,t))}function tc(t,e){Xo.call(this,Qa.STAT_EVENT,t),this.stat=e}function ec(t){const e=Ya();ba(e,new tc(e,t))}function nc(t,e){Xo.call(this,Qa.Na,t),this.size=e}function rc(t,e){if("function"!==typeof t)throw Error("Fn must not be null and must be a function");return Zi.setTimeout((function(){t()}),e)}Qa.Ma="serverreachability",lo(Ja,Xo),Qa.STAT_EVENT="statevent",lo(tc,Xo),Qa.Na="timingevent",lo(nc,Xo);var sc={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},ic={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function oc(){}function ac(t){return t.h||(t.h=t.i())}function cc(){}oc.prototype.h=null;var uc,lc={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function hc(){Xo.call(this,"d")}function dc(){Xo.call(this,"c")}function fc(){}function pc(t,e,n,r){this.l=t,this.j=e,this.m=n,this.X=r||1,this.V=new Fa(this),this.P=mc,t=Uo?125:void 0,this.W=new La(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new gc}function gc(){this.i=null,this.g="",this.h=!1}lo(hc,Xo),lo(dc,Xo),lo(fc,oc),fc.prototype.g=function(){return new XMLHttpRequest},fc.prototype.i=function(){return{}},uc=new fc;var mc=45e3,yc={},vc={};function wc(t,e,n){t.K=1,t.v=zc(Vc(e)),t.s=n,t.U=!0,bc(t,null)}function bc(t,e){t.F=Date.now(),_c(t),t.A=Vc(t.v);var n=t.A,r=t.X;Array.isArray(r)||(r=[String(r)]),iu(n.h,"t",r),t.C=0,n=t.l.H,t.h=new gc,t.g=hl(t.l,n?e:null,!t.s),0<t.O&&(t.L=new Va(co(t.Ia,t,t.g),t.O)),Ba(t.V,t.g,"readystatechange",t.gb),e=t.H?Ao(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),Za(1),za(t.j,t.u,t.A,t.m,t.X,t.s)}function Ic(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Ba)}function Ec(t,e,n){let r,s=!0;for(;!t.I&&t.C<n.length;){if(r=Tc(t,n),r==vc){4==e&&(t.o=4,ec(14),s=!1),Ka(t.j,t.m,null,"[Incomplete Response]");break}if(r==yc){t.o=4,ec(15),Ka(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}Ka(t.j,t.m,r,null),Nc(t,r)}Ic(t)&&r!=vc&&r!=yc&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,ec(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),rl(e),e.L=!0,ec(11))):(Ka(t.j,t.m,n,"[Invalid Chunked Response]"),Ac(t),Cc(t))}function Tc(t,e){var n=t.C,r=e.indexOf("\n",n);return-1==r?vc:(n=Number(e.substring(n,r)),isNaN(n)?yc:(r+=1,r+n>e.length?vc:(e=e.substr(r,n),t.C=r+n,e)))}function _c(t){t.Y=Date.now()+t.P,kc(t,t.P)}function kc(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=rc(co(t.eb,t),e)}function Sc(t){t.B&&(Zi.clearTimeout(t.B),t.B=null)}function Cc(t){0==t.l.G||t.I||ol(t.l,t)}function Ac(t){Sc(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,Pa(t.W),qa(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Nc(t,e){try{var n=t.l;if(0!=n.G&&(n.g==t||fu(n.i,t)))if(n.I=t.N,!t.J&&fu(n.i,t)&&3==n.G){try{var r=n.Ca.g.parse(e)}catch(u){r=null}if(Array.isArray(r)&&3==r.length){var s=r;if(0==s[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;il(n),Gu(n)}nl(n),ec(18)}}else n.ta=s[1],0<n.ta-n.U&&37500>s[2]&&n.N&&0==n.A&&!n.v&&(n.v=rc(co(n.ab,n),6e3));if(1>=du(n.i)&&n.ka){try{n.ka()}catch(u){}n.ka=void 0}}else cl(n,11)}else if((t.J||n.g==t)&&il(n),!bo(e))for(s=n.Ca.g.parse(e),e=0;e<s.length;e++){let u=s[e];if(n.U=u[0],u=u[1],2==n.G)if("c"==u[0]){n.J=u[1],n.la=u[2];const e=u[3];null!=e&&(n.ma=e,n.h.info("VER="+n.ma));const s=u[4];null!=s&&(n.za=s,n.h.info("SVER="+n.za));const l=u[5];null!=l&&"number"===typeof l&&0<l&&(r=1.5*l,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=t.g;if(h){const t=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var i=r.i;!i.g&&(To(t,"spdy")||To(t,"quic")||To(t,"h2"))&&(i.j=i.l,i.g=new Set,i.h&&(pu(i,i.h),i.h=null))}if(r.D){const t=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(r.sa=t,$c(r.F,r.D,t))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),r=n;var o=t;if(r.oa=ll(r,r.H?r.la:null,r.W),o.J){gu(r.i,o);var a=o,c=r.K;c&&a.setTimeout(c),a.B&&(Sc(a),_c(a)),r.g=o}else el(r);0<n.l.length&&Xu(n)}else"stop"!=u[0]&&"close"!=u[0]||cl(n,7);else 3==n.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?cl(n,7):Ku(n):"noop"!=u[0]&&n.j&&n.j.wa(u),n.A=0)}Za(4)}catch(u){}}function Dc(t){if(t.R&&"function"==typeof t.R)return t.R();if("string"===typeof t)return t.split("");if(eo(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}for(r in e=[],n=0,t)e[n++]=t[r];return e}function Rc(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(eo(t)||"string"===typeof t)mo(t,e,void 0);else{if(t.T&&"function"==typeof t.T)var n=t.T();else if(t.R&&"function"==typeof t.R)n=void 0;else if(eo(t)||"string"===typeof t){n=[];for(var r=t.length,s=0;s<r;s++)n.push(s)}else for(s in n=[],r=0,t)n[r++]=s;r=Dc(t),s=r.length;for(var i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}}function Oc(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(t)if(t instanceof Oc)for(n=t.T(),r=0;r<n.length;r++)this.set(n[r],t.get(n[r]));else for(r in t)this.set(r,t[r])}function Mc(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var r=t.g[e];Lc(t.h,r)&&(t.g[n++]=r),e++}t.g.length=n}if(t.i!=t.g.length){var s={};for(n=e=0;e<t.g.length;)r=t.g[e],Lc(s,r)||(t.g[n++]=r,s[r]=1),e++;t.g.length=n}}function Lc(t,e){return Object.prototype.hasOwnProperty.call(t,e)}Qi=pc.prototype,Qi.setTimeout=function(t){this.P=t},Qi.gb=function(t){t=t.target;const e=this.L;e&&3==ju(t)?e.l():this.Ia(t)},Qi.Ia=function(t){try{if(t==this.g)t:{const l=ju(this.g);var e=this.g.Da();const h=this.g.ba();if(!(3>l)&&(3!=l||Uo||this.g&&(this.h.h||this.g.ga()||Bu(this.g)))){this.I||4!=l||7==e||Za(8==e||0>=h?3:2),Sc(this);var n=this.g.ba();this.N=n;e:if(Ic(this)){var r=Bu(this.g);t="";var s=r.length,i=4==ju(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){Ac(this),Cc(this);var o="";break e}this.h.i=new Zi.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=200==n,Ha(this.j,this.u,this.A,this.m,this.X,l,n),this.i){if(this.$&&!this.J){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!bo(a)){var u=a;break e}}u=null}if(!(n=u)){this.i=!1,this.o=3,ec(12),Ac(this),Cc(this);break t}Ka(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Nc(this,n)}this.U?(Ec(this,l,o),Uo&&this.i&&3==l&&(Ba(this.V,this.W,"tick",this.fb),this.W.start())):(Ka(this.j,this.m,o,null),Nc(this,o)),4==l&&Ac(this),this.i&&!this.I&&(4==l?ol(this.l,this):(this.i=!1,_c(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,ec(12)):(this.o=0,ec(13)),Ac(this),Cc(this)}}}catch(l){}},Qi.fb=function(){if(this.g){var t=ju(this.g),e=this.g.ga();this.C<e.length&&(Sc(this),Ec(this,t,e),this.i&&4!=t&&_c(this))}},Qi.cancel=function(){this.I=!0,Ac(this)},Qi.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(Ga(this.j,this.A),2!=this.K&&(Za(3),ec(17)),Ac(this),this.o=2,Cc(this)):kc(this,this.Y-t)},Qi=Oc.prototype,Qi.R=function(){Mc(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t},Qi.T=function(){return Mc(this),this.g.concat()},Qi.get=function(t,e){return Lc(this.h,t)?this.h[t]:e},Qi.set=function(t,e){Lc(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e},Qi.forEach=function(t,e){for(var n=this.T(),r=0;r<n.length;r++){var s=n[r],i=this.get(s);t.call(e,i,s,this)}};var Pc=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function xc(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function Uc(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof Uc){this.g=void 0!==e?e:t.g,Fc(this,t.j),this.s=t.s,jc(this,t.i),Bc(this,t.m),this.l=t.l,e=t.h;var n=new eu;n.i=e.i,e.g&&(n.g=new Oc(e.g),n.h=e.h),qc(this,n),this.o=t.o}else t&&(n=String(t).match(Pc))?(this.g=!!e,Fc(this,n[1]||"",!0),this.s=Gc(n[2]||""),jc(this,n[3]||"",!0),Bc(this,n[4]),this.l=Gc(n[5]||"",!0),qc(this,n[6]||"",!0),this.o=Gc(n[7]||"")):(this.g=!!e,this.h=new eu(null,this.g))}function Vc(t){return new Uc(t)}function Fc(t,e,n){t.j=n?Gc(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function jc(t,e,n){t.i=n?Gc(e,!0):e}function Bc(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function qc(t,e,n){e instanceof eu?(t.h=e,au(t.h,t.g)):(n||(e=Wc(e,Zc)),t.h=new eu(e,t.g))}function $c(t,e,n){t.h.set(e,n)}function zc(t){return $c(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Hc(t){return t instanceof Uc?Vc(t):new Uc(t,void 0)}function Kc(t,e,n,r){var s=new Uc(null,void 0);return t&&Fc(s,t),e&&jc(s,e),n&&Bc(s,n),r&&(s.l=r),s}function Gc(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Wc(t,e,n){return"string"===typeof t?(t=encodeURI(t).replace(e,Qc),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Qc(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(15&t).toString(16)}Uc.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Wc(e,Xc,!0),":");var n=this.i;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(Wc(e,Xc,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&t.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&t.push("/"),t.push(Wc(n,"/"==n.charAt(0)?Jc:Yc,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Wc(n,tu)),t.join("")};var Xc=/[#\/\?@]/g,Yc=/[#\?:]/g,Jc=/[#\?]/g,Zc=/[#\?@]/g,tu=/#/g;function eu(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function nu(t){t.g||(t.g=new Oc,t.h=0,t.i&&xc(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function ru(t,e){nu(t),e=ou(t,e),Lc(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,Lc(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&Mc(t)))}function su(t,e){return nu(t),e=ou(t,e),Lc(t.g.h,e)}function iu(t,e,n){ru(t,e),0<n.length&&(t.i=null,t.g.set(ou(t,e),wo(n)),t.h+=n.length)}function ou(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function au(t,e){e&&!t.j&&(nu(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(ru(this,e),iu(this,n,t))}),t)),t.j=e}Qi=eu.prototype,Qi.add=function(t,e){nu(this),this.i=null,t=ou(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},Qi.forEach=function(t,e){nu(this),this.g.forEach((function(n,r){mo(n,(function(n){t.call(e,n,r,this)}),this)}),this)},Qi.T=function(){nu(this);for(var t=this.g.R(),e=this.g.T(),n=[],r=0;r<e.length;r++)for(var s=t[r],i=0;i<s.length;i++)n.push(e[r]);return n},Qi.R=function(t){nu(this);var e=[];if("string"===typeof t)su(this,t)&&(e=vo(e,this.g.get(ou(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=vo(e,t[n])}return e},Qi.set=function(t,e){return nu(this),this.i=null,t=ou(this,t),su(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},Qi.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e},Qi.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var r=e[n],s=encodeURIComponent(String(r));r=this.R(r);for(var i=0;i<r.length;i++){var o=s;""!==r[i]&&(o+="="+encodeURIComponent(String(r[i]))),t.push(o)}}return this.i=t.join("&")};var cu=class{constructor(t,e){this.h=t,this.g=e}};function uu(t){this.l=t||lu,Zi.PerformanceNavigationTiming?(t=Zi.performance.getEntriesByType("navigation"),t=0<t.length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol)):t=!!(Zi.g&&Zi.g.Ea&&Zi.g.Ea()&&Zi.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var lu=10;function hu(t){return!!t.h||!!t.g&&t.g.size>=t.j}function du(t){return t.h?1:t.g?t.g.size:0}function fu(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function pu(t,e){t.g?t.g.add(e):t.h=e}function gu(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function mu(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return wo(t.i)}function yu(){}function vu(){this.g=new yu}function wu(t,e,n){const r=n||"";try{Rc(t,(function(t,n){let s=t;no(t)&&(s=Ea(t)),e.push(r+n+"="+encodeURIComponent(s))}))}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function bu(t,e){const n=new $a;if(Zi.Image){const r=new Image;r.onload=uo(Iu,n,r,"TestLoadImage: loaded",!0,e),r.onerror=uo(Iu,n,r,"TestLoadImage: error",!1,e),r.onabort=uo(Iu,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=uo(Iu,n,r,"TestLoadImage: timeout",!1,e),Zi.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=t}else e(!1)}function Iu(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch(i){}}function Eu(t){this.l=t.$b||null,this.j=t.ib||!1}function Tu(t,e){wa.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=_u,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}uu.prototype.cancel=function(){if(this.i=mu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}},yu.prototype.stringify=function(t){return Zi.JSON.stringify(t,void 0)},yu.prototype.parse=function(t){return Zi.JSON.parse(t,void 0)},lo(Eu,oc),Eu.prototype.g=function(){return new Tu(this.l,this.j)},Eu.prototype.i=function(t){return function(){return t}}({}),lo(Tu,wa);var _u=0;function ku(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}function Su(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Cu(t)}function Cu(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Qi=Tu.prototype,Qi.open=function(t,e){if(this.readyState!=_u)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Cu(this)},Qi.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||Zi).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))},Qi.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Su(this)),this.readyState=_u},Qi.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Cu(this)),this.g&&(this.readyState=3,Cu(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if("undefined"!==typeof Zi.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;ku(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))},Qi.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Su(this):Cu(this),3==this.readyState&&ku(this)}},Qi.Ua=function(t){this.g&&(this.response=this.responseText=t,Su(this))},Qi.Ta=function(t){this.g&&(this.response=t,Su(this))},Qi.ha=function(){this.g&&Su(this)},Qi.setRequestHeader=function(t,e){this.v.append(t,e)},Qi.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},Qi.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(Tu.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var Au=Zi.JSON.parse;function Nu(t){wa.call(this),this.headers=new Oc,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Du,this.K=this.L=!1}lo(Nu,wa);var Du="",Ru=/^https?$/i,Ou=["POST","PUT"];function Mu(t){return Po&&Ko()&&"number"===typeof t.timeout&&void 0!==t.ontimeout}function Lu(t){return"content-type"==t.toLowerCase()}function Pu(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,xu(t),Vu(t)}function xu(t){t.D||(t.D=!0,ba(t,"complete"),ba(t,"error"))}function Uu(t){if(t.h&&"undefined"!=typeof Ji&&(!t.C[1]||4!=ju(t)||2!=t.ba()))if(t.v&&4==ju(t))xa(t.Fa,0,t);else if(ba(t,"readystatechange"),4==ju(t)){t.h=!1;try{const c=t.ba();t:switch(c){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var r;if(r=0===c){var s=String(t.H).match(Pc)[1]||null;if(!s&&Zi.self&&Zi.self.location){var i=Zi.self.location.protocol;s=i.substr(0,i.length-1)}r=!Ru.test(s?s.toLowerCase():"")}n=r}if(n)ba(t,"complete"),ba(t,"success");else{t.m=6;try{var o=2<ju(t)?t.g.statusText:""}catch(a){o=""}t.j=o+" ["+t.ba()+"]",xu(t)}}finally{Vu(t)}}}function Vu(t,e){if(t.g){Fu(t);const r=t.g,s=t.C[0]?to:null;t.g=null,t.C=null,e||ba(t,"ready");try{r.onreadystatechange=s}catch(n){}}}function Fu(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(Zi.clearTimeout(t.A),t.A=null)}function ju(t){return t.g?t.g.readyState:0}function Bu(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Du:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(e){return null}}function qu(t){let e="";return Co(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function $u(t,e,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=qu(n),"string"===typeof t?null!=n&&encodeURIComponent(String(n)):$c(t,e,n))}function zu(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Hu(t){this.za=0,this.l=[],this.h=new $a,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=zu("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=zu("baseRetryDelayMs",5e3,t),this.$a=zu("retryDelaySeedMs",1e4,t),this.Ya=zu("forwardChannelMaxRetries",2,t),this.ra=zu("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new uu(t&&t.concurrentRequestLimit),this.Ca=new vu,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||!1!==t.Xb}function Ku(t){if(Wu(t),3==t.G){var e=t.V++,n=Vc(t.F);$c(n,"SID",t.J),$c(n,"RID",e),$c(n,"TYPE","terminate"),Zu(t,n),e=new pc(t,t.h,e,void 0),e.K=2,e.v=zc(Vc(n)),n=!1,Zi.navigator&&Zi.navigator.sendBeacon&&(n=Zi.navigator.sendBeacon(e.v.toString(),"")),!n&&Zi.Image&&((new Image).src=e.v,n=!0),n||(e.g=hl(e.l,null),e.g.ea(e.v)),e.F=Date.now(),_c(e)}ul(t)}function Gu(t){t.g&&(rl(t),t.g.cancel(),t.g=null)}function Wu(t){Gu(t),t.u&&(Zi.clearTimeout(t.u),t.u=null),il(t),t.i.cancel(),t.m&&("number"===typeof t.m&&Zi.clearTimeout(t.m),t.m=null)}function Qu(t,e){t.l.push(new cu(t.Za++,e)),3==t.G&&Xu(t)}function Xu(t){hu(t.i)||t.m||(t.m=!0,Na(t.Ha,t),t.C=0)}function Yu(t,e){return!(du(t.i)>=t.i.j-(t.m?1:0))&&(t.m?(t.l=e.D.concat(t.l),!0):!(1==t.G||2==t.G||t.C>=(t.Xa?0:t.Ya))&&(t.m=rc(co(t.Ha,t,e),al(t,t.C)),t.C++,!0))}function Ju(t,e){var n;n=e?e.m:t.V++;const r=Vc(t.F);$c(r,"SID",t.J),$c(r,"RID",n),$c(r,"AID",t.U),Zu(t,r),t.o&&t.s&&$u(r,t.o,t.s),n=new pc(t,t.h,n,t.C+1),null===t.o&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=tl(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),pu(t.i,n),wc(n,r,e)}function Zu(t,e){t.j&&Rc({},(function(t,n){$c(e,n,t)}))}function tl(t,e,n){n=Math.min(t.l.length,n);var r=t.j?co(t.j.Oa,t.j,t):null;t:{var s=t.l;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=s[0].h,t.push("ofs="+e)):e=0:t.push("ofs="+e);let i=!0;for(let o=0;o<n;o++){let n=s[o].h;const a=s[o].g;if(n-=e,0>n)e=Math.max(0,s[o].h-100),i=!1;else try{wu(a,t,"req"+n+"_")}catch(Fl){r&&r(a)}}if(i){r=t.join("&");break t}}}return t=t.l.splice(0,n),e.D=t,r}function el(t){t.g||t.u||(t.Y=1,Na(t.Ga,t),t.A=0)}function nl(t){return!(t.g||t.u||3<=t.A)&&(t.Y++,t.u=rc(co(t.Ga,t),al(t,t.A)),t.A++,!0)}function rl(t){null!=t.B&&(Zi.clearTimeout(t.B),t.B=null)}function sl(t){t.g=new pc(t,t.h,"rpc",t.Y),null===t.o&&(t.g.H=t.s),t.g.O=0;var e=Vc(t.oa);$c(e,"RID","rpc"),$c(e,"SID",t.J),$c(e,"CI",t.N?"0":"1"),$c(e,"AID",t.U),Zu(t,e),$c(e,"TYPE","xmlhttp"),t.o&&t.s&&$u(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=zc(Vc(e)),n.s=null,n.U=!0,bc(n,t)}function il(t){null!=t.v&&(Zi.clearTimeout(t.v),t.v=null)}function ol(t,e){var n=null;if(t.g==e){il(t),rl(t),t.g=null;var r=2}else{if(!fu(t.i,e))return;n=e.D,gu(t.i,e),r=1}if(t.I=e.N,0!=t.G)if(e.i)if(1==r){n=e.s?e.s.length:0,e=Date.now()-e.F;var s=t.C;r=Ya(),ba(r,new nc(r,n,e,s)),Xu(t)}else el(t);else if(s=e.o,3==s||0==s&&0<t.I||!(1==r&&Yu(t,e)||2==r&&nl(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:cl(t,5);break;case 4:cl(t,10);break;case 3:cl(t,6);break;default:cl(t,2)}}function al(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function cl(t,e){if(t.h.info("Error code "+e),2==e){var n=null;t.j&&(n=null);var r=co(t.jb,t);n||(n=new Uc("//www.google.com/images/cleardot.gif"),Zi.location&&"http"==Zi.location.protocol||Fc(n,"https"),zc(n)),bu(n.toString(),r)}else ec(2);t.G=0,t.j&&t.j.va(e),ul(t),Wu(t)}function ul(t){t.G=0,t.I=-1,t.j&&(0==mu(t.i).length&&0==t.l.length||(t.i.i.length=0,wo(t.l),t.l.length=0),t.j.ua())}function ll(t,e,n){let r=Hc(n);if(""!=r.i)e&&jc(r,e+"."+r.i),Bc(r,r.m);else{const t=Zi.location;r=Kc(t.protocol,e?e+"."+t.hostname:t.hostname,+t.port,n)}return t.aa&&Co(t.aa,(function(t,e){$c(r,e,t)})),e=t.D,n=t.sa,e&&n&&$c(r,e,n),$c(r,"VER",t.ma),Zu(t,r),r}function hl(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new Nu(new Eu({ib:!0})):new Nu(t.qa),e.L=t.H,e}function dl(){}function fl(){if(Po&&!(10<=Number(Wo)))throw Error("Environmental error: no available transport.")}function pl(t,e){wa.call(this),this.g=new Hu(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!bo(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!bo(e)&&(this.g.D=e,t=this.h,null!==t&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new yl(this)}function gl(t){hc.call(this);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function ml(){dc.call(this),this.status=1}function yl(t){this.g=t}Qi=Nu.prototype,Qi.ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():uc.g(),this.C=this.u?ac(this.u):ac(uc),this.g.onreadystatechange=co(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){return void Pu(this,i)}t=n||"";const s=new Oc(this.headers);r&&Rc(r,(function(t,e){s.set(e,t)})),r=yo(s.T()),n=Zi.FormData&&t instanceof Zi.FormData,!(0<=go(Ou,e))||r||n||s.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),s.forEach((function(t,e){this.g.setRequestHeader(e,t)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Fu(this),0<this.B&&((this.K=Mu(this.g))?(this.g.timeout=this.B,this.g.ontimeout=co(this.pa,this)):this.A=xa(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Pu(this,i)}},Qi.pa=function(){"undefined"!=typeof Ji&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ba(this,"timeout"),this.abort(8))},Qi.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,ba(this,"complete"),ba(this,"abort"),Vu(this))},Qi.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Vu(this,!0)),Nu.Z.M.call(this)},Qi.Fa=function(){this.s||(this.F||this.v||this.l?Uu(this):this.cb())},Qi.cb=function(){Uu(this)},Qi.ba=function(){try{return 2<ju(this)?this.g.status:-1}catch(t){return-1}},Qi.ga=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},Qi.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),Au(e)}},Qi.Da=function(){return this.m},Qi.La=function(){return"string"===typeof this.j?this.j:String(this.j)},Qi=Hu.prototype,Qi.ma=8,Qi.G=1,Qi.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch(e){}},Qi.Ha=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const s=new pc(this,this.h,t,void 0);let i=this.s;if(this.P&&(i?(i=Ao(i),Do(i,this.P)):i=this.P),null===this.o&&(s.H=i),this.ja)t:{for(var e=0,n=0;n<this.l.length;n++){var r=this.l[n];if(r="__data__"in r.g&&(r=r.g.__data__,"string"===typeof r)?r.length:void 0,void 0===r)break;if(e+=r,4096<e){e=n;break t}if(4096===e||n===this.l.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=tl(this,s,e),n=Vc(this.F),$c(n,"RID",t),$c(n,"CVER",22),this.D&&$c(n,"X-HTTP-Session-Id",this.D),Zu(this,n),this.o&&i&&$u(n,this.o,i),pu(this.i,s),this.Ra&&$c(n,"TYPE","init"),this.ja?($c(n,"$req",e),$c(n,"SID","null"),s.$=!0,wc(s,n,null)):wc(s,n,e),this.G=2}}else 3==this.G&&(t?Ju(this,t):0==this.l.length||hu(this.i)||Ju(this))},Qi.Ga=function(){if(this.u=null,sl(this),this.$&&!(this.L||null==this.g||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=rc(co(this.bb,this),t)}},Qi.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,ec(10),Gu(this),sl(this))},Qi.ab=function(){null!=this.v&&(this.v=null,Gu(this),nl(this),ec(19))},Qi.jb=function(t){t?(this.h.info("Successfully pinged google.com"),ec(2)):(this.h.info("Failed to ping google.com"),ec(1))},Qi=dl.prototype,Qi.xa=function(){},Qi.wa=function(){},Qi.va=function(){},Qi.ua=function(){},Qi.Oa=function(){},fl.prototype.g=function(t,e){return new pl(t,e)},lo(pl,wa),pl.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),Na(co(t.hb,t,e))),ec(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=ll(t,null,t.W),Xu(t)},pl.prototype.close=function(){Ku(this.g)},pl.prototype.u=function(t){if("string"===typeof t){var e={};e.__data__=t,Qu(this.g,e)}else this.v?(e={},e.__data__=Ea(t),Qu(this.g,e)):Qu(this.g,t)},pl.prototype.M=function(){this.g.j=null,delete this.j,Ku(this.g),delete this.g,pl.Z.M.call(this)},lo(gl,hc),lo(ml,dc),lo(yl,dl),yl.prototype.xa=function(){ba(this.g,"a")},yl.prototype.wa=function(t){ba(this.g,new gl(t))},yl.prototype.va=function(t){ba(this.g,new ml(t))},yl.prototype.ua=function(){ba(this.g,"b")},fl.prototype.createWebChannel=fl.prototype.g,pl.prototype.send=pl.prototype.u,pl.prototype.open=pl.prototype.m,pl.prototype.close=pl.prototype.close,sc.NO_ERROR=0,sc.TIMEOUT=8,sc.HTTP_ERROR=6,ic.COMPLETE="complete",cc.EventType=lc,lc.OPEN="a",lc.CLOSE="b",lc.ERROR="c",lc.MESSAGE="d",wa.prototype.listen=wa.prototype.N,Nu.prototype.listenOnce=Nu.prototype.O,Nu.prototype.getLastError=Nu.prototype.La,Nu.prototype.getLastErrorCode=Nu.prototype.Da,Nu.prototype.getStatus=Nu.prototype.ba,Nu.prototype.getResponseJson=Nu.prototype.Qa,Nu.prototype.getResponseText=Nu.prototype.ga,Nu.prototype.send=Nu.prototype.ea;var vl=Yi.createWebChannelTransport=function(){return new fl},wl=Yi.getStatEventTarget=function(){return Ya()},bl=Yi.ErrorCode=sc,Il=Yi.EventType=ic,El=Yi.Event=Qa,Tl=Yi.Stat={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},_l=Yi.FetchXmlHttpFactory=Eu,kl=Yi.WebChannel=cc,Sl=Yi.XhrIo=Nu;const Cl="@firebase/firestore";
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
 */class Al{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Al.UNAUTHENTICATED=new Al(null),Al.GOOGLE_CREDENTIALS=new Al("google-credentials-uid"),Al.FIRST_PARTY=new Al("first-party-uid"),Al.MOCK_USER=new Al("mock-user");
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
let Nl="9.8.4";
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
 */const Dl=new gt("@firebase/firestore");function Rl(){return Dl.logLevel}function Ol(t,...e){if(Dl.logLevel<=lt.DEBUG){const n=e.map(Pl);Dl.debug(`Firestore (${Nl}): ${t}`,...n)}}function Ml(t,...e){if(Dl.logLevel<=lt.ERROR){const n=e.map(Pl);Dl.error(`Firestore (${Nl}): ${t}`,...n)}}function Ll(t,...e){if(Dl.logLevel<=lt.WARN){const n=e.map(Pl);Dl.warn(`Firestore (${Nl}): ${t}`,...n)}}function Pl(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
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
 */function xl(t="Unexpected state"){const e=`FIRESTORE (${Nl}) INTERNAL ASSERTION FAILED: `+t;throw Ml(e),new Error(e)}function Ul(t,e){t||xl()}function Vl(t,e){return t}
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
 */const Fl={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class jl extends q{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
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
 */class Bl{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
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
 */class ql{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class $l{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(Al.UNAUTHENTICATED)))}shutdown(){}}class zl{constructor(t){this.t=t,this.currentUser=Al.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const r=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let s=new Bl;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Bl,t.enqueueRetryable((()=>r(this.currentUser)))};const i=()=>{const e=s;t.enqueueRetryable((async()=>{await e.promise,await r(this.currentUser)}))},o=t=>{Ol("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),i()};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(Ol("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Bl)}}),0),i()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(Ol("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(Ul("string"==typeof e.accessToken),new ql(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return Ul(null===t||"string"==typeof t),new Al(t)}}class Hl{constructor(t,e,n){this.type="FirstParty",this.user=Al.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",e);const r=t.auth.getAuthHeaderValueForFirstParty([]);r&&this.headers.set("Authorization",r),n&&this.headers.set("X-Goog-Iam-Authorization-Token",n)}}class Kl{constructor(t,e,n){this.h=t,this.l=e,this.m=n}getToken(){return Promise.resolve(new Hl(this.h,this.l,this.m))}start(t,e){t.enqueueRetryable((()=>e(Al.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Gl{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Wl{constructor(t){this.g=t,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(t,e){const n=t=>{null!=t.error&&Ol("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.p;return this.p=t.token,Ol("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const r=t=>{Ol("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.g.onInit((t=>r(t))),setTimeout((()=>{if(!this.appCheck){const t=this.g.getImmediate({optional:!0});t?r(t):Ol("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(Ul("string"==typeof t.token),this.p=t.token,new Gl(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
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
function Ql(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}
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
 */class Xl{static I(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const r=Ql(40);for(let s=0;s<r.length;++s)n.length<20&&r[s]<e&&(n+=t.charAt(r[s]%t.length))}return n}}function Yl(t,e){return t<e?-1:t>e?1:0}function Jl(t,e,n){return t.length===e.length&&t.every(((t,r)=>n(t,e[r])))}
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
class Zl{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new jl(Fl.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new jl(Fl.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new jl(Fl.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new jl(Fl.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return Zl.fromMillis(Date.now())}static fromDate(t){return Zl.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new Zl(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?Yl(this.nanoseconds,t.nanoseconds):Yl(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
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
 */class th{constructor(t){this.timestamp=t}static fromTimestamp(t){return new th(t)}static min(){return new th(new Zl(0,0))}static max(){return new th(new Zl(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
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
 */class eh{constructor(t,e,n){void 0===e?e=0:e>t.length&&xl(),void 0===n?n=t.length-e:n>t.length-e&&xl(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===eh.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof eh?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const n=t.get(r),s=e.get(r);if(n<s)return-1;if(n>s)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class nh extends eh{construct(t,e,n){return new nh(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new jl(Fl.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new nh(e)}static emptyPath(){return new nh([])}}const rh=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class sh extends eh{construct(t,e,n){return new sh(t,e,n)}static isValidIdentifier(t){return rh.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),sh.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new sh(["__name__"])}static fromServerFormat(t){const e=[];let n="",r=0;const s=()=>{if(0===n.length)throw new jl(Fl.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let i=!1;for(;r<t.length;){const e=t[r];if("\\"===e){if(r+1===t.length)throw new jl(Fl.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[r+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new jl(Fl.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,r+=2}else"`"===e?(i=!i,r++):"."!==e||i?(n+=e,r++):(s(),r++)}if(s(),i)throw new jl(Fl.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new sh(e)}static emptyPath(){return new sh([])}}
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
 */class ih{constructor(t){this.path=t}static fromPath(t){return new ih(nh.fromString(t))}static fromName(t){return new ih(nh.fromString(t).popFirst(5))}static empty(){return new ih(nh.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===nh.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return nh.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new ih(new nh(t.slice()))}}
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
 */class oh{constructor(t,e,n,r){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=r}}oh.UNKNOWN_ID=-1;function ah(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=th.fromTimestamp(1e9===r?new Zl(n+1,0):new Zl(n,r));return new uh(s,ih.empty(),e)}function ch(t){return new uh(t.readTime,t.key,-1)}class uh{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new uh(th.min(),ih.empty(),-1)}static max(){return new uh(th.max(),ih.empty(),-1)}}function lh(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=ih.comparator(t.documentKey,e.documentKey),0!==n?n:Yl(t.largestBatchId,e.largestBatchId))}
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
 */const hh="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class dh{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}
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
 */async function fh(t){if(t.code!==Fl.FAILED_PRECONDITION||t.message!==hh)throw t;Ol("LocalStore","Unexpectedly lost primary lease")}
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
 */class ph{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&xl(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new ph(((n,r)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,r)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,r)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof ph?e:ph.resolve(e)}catch(t){return ph.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):ph.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):ph.reject(e)}static resolve(t){return new ph(((e,n)=>{e(t)}))}static reject(t){return new ph(((e,n)=>{n(t)}))}static waitFor(t){return new ph(((e,n)=>{let r=0,s=0,i=!1;t.forEach((t=>{++r,t.next((()=>{++s,i&&s===r&&e()}),(t=>n(t)))})),i=!0,s===r&&e()}))}static or(t){let e=ph.resolve(!1);for(const n of t)e=e.next((t=>t?ph.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,r)=>{n.push(e.call(this,t,r))})),this.waitFor(n)}static mapArray(t,e){return new ph(((n,r)=>{const s=t.length,i=new Array(s);let o=0;for(let a=0;a<s;a++){const c=a;e(t[c]).next((t=>{i[c]=t,++o,o===s&&n(i)}),(t=>r(t)))}}))}static doWhile(t,e){return new ph(((n,r)=>{const s=()=>{!0===t()?e().next((()=>{s()}),r):n()};s()}))}}
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
 */function gh(t){return"IndexedDbTransactionError"===t.name}
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
class mh{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.it(t),this.rt=t=>e.writeSequenceNumber(t))}it(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.rt&&this.rt(t),t}}
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
 */function yh(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function vh(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function wh(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
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
 */mh.ot=-1;class bh{constructor(t,e){this.comparator=t,this.root=e||Eh.EMPTY}insert(t,e){return new bh(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Eh.BLACK,null,null))}remove(t){return new bh(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Eh.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(0===r)return e+n.left.size;r<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Ih(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Ih(this.root,t,this.comparator,!1)}getReverseIterator(){return new Ih(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Ih(this.root,t,this.comparator,!0)}}class Ih{constructor(t,e,n,r){this.isReverse=r,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=e?n(t.key,e):1,e&&r&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(0===s){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Eh{constructor(t,e,n,r,s){this.key=t,this.value=e,this.color=null!=n?n:Eh.RED,this.left=null!=r?r:Eh.EMPTY,this.right=null!=s?s:Eh.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,r,s){return new Eh(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=s?s:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let r=this;const s=n(t,r.key);return r=s<0?r.copy(null,null,null,r.left.insert(t,e,n),null):0===s?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Eh.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,r=this;if(e(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,e),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===e(t,r.key)){if(r.right.isEmpty())return Eh.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,e))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Eh.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Eh.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw xl();if(this.right.isRed())throw xl();const t=this.left.check();if(t!==this.right.check())throw xl();return t+(this.isRed()?0:1)}}Eh.EMPTY=null,Eh.RED=!0,Eh.BLACK=!1,Eh.EMPTY=new class{constructor(){this.size=0}get key(){throw xl()}get value(){throw xl()}get color(){throw xl()}get left(){throw xl()}get right(){throw xl()}copy(t,e,n,r,s){return this}insert(t,e,n){return new Eh(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
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
class Th{constructor(t){this.comparator=t,this.data=new bh(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,t[1])>=0)return;e(r.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new _h(this.data.getIterator())}getIteratorFrom(t){return new _h(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof Th))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(0!==this.comparator(t,r))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new Th(this.comparator);return e.data=t,e}}class _h{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
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
class kh{constructor(t){this.fields=t,t.sort(sh.comparator)}static empty(){return new kh([])}unionWith(t){let e=new Th(sh.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new kh(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Jl(this.fields,t.fields,((t,e)=>t.isEqual(e)))}}
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
class Sh{constructor(t){this.binaryString=t}static fromBase64String(t){const e=atob(t);return new Sh(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new Sh(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
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
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Yl(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Sh.EMPTY_BYTE_STRING=new Sh("");const Ch=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ah(t){if(Ul(!!t),"string"==typeof t){let e=0;const n=Ch.exec(t);if(Ul(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Nh(t.seconds),nanos:Nh(t.nanos)}}function Nh(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function Dh(t){return"string"==typeof t?Sh.fromBase64String(t):Sh.fromUint8Array(t)}
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
 */function Rh(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Oh(t){const e=t.mapValue.fields.__previous_value__;return Rh(e)?Oh(e):e}function Mh(t){const e=Ah(t.mapValue.fields.__local_write_time__.timestampValue);return new Zl(e.seconds,e.nanos)}
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
 */class Lh{constructor(t,e,n,r,s,i,o,a){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=r,this.ssl=s,this.forceLongPolling=i,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class Ph{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new Ph("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof Ph&&t.projectId===this.projectId&&t.database===this.database}}
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
 */function xh(t){return null==t}function Uh(t){return 0===t&&1/t==-1/0}function Vh(t){return"number"==typeof t&&Number.isInteger(t)&&!Uh(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
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
 */const Fh={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function jh(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Rh(t)?4:td(t)?9007199254740991:10:xl()}function Bh(t,e){if(t===e)return!0;const n=jh(t);if(n!==jh(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Mh(t).isEqual(Mh(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=Ah(t.timestampValue),r=Ah(e.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return Dh(t.bytesValue).isEqual(Dh(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return Nh(t.geoPointValue.latitude)===Nh(e.geoPointValue.latitude)&&Nh(t.geoPointValue.longitude)===Nh(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return Nh(t.integerValue)===Nh(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=Nh(t.doubleValue),r=Nh(e.doubleValue);return n===r?Uh(n)===Uh(r):isNaN(n)&&isNaN(r)}return!1}(t,e);case 9:return Jl(t.arrayValue.values||[],e.arrayValue.values||[],Bh);case 10:return function(t,e){const n=t.mapValue.fields||{},r=e.mapValue.fields||{};if(yh(n)!==yh(r))return!1;for(const s in n)if(n.hasOwnProperty(s)&&(void 0===r[s]||!Bh(n[s],r[s])))return!1;return!0}(t,e);default:return xl()}}function qh(t,e){return void 0!==(t.values||[]).find((t=>Bh(t,e)))}function $h(t,e){if(t===e)return 0;const n=jh(t),r=jh(e);if(n!==r)return Yl(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Yl(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=Nh(t.integerValue||t.doubleValue),r=Nh(e.integerValue||e.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(t,e);case 3:return zh(t.timestampValue,e.timestampValue);case 4:return zh(Mh(t),Mh(e));case 5:return Yl(t.stringValue,e.stringValue);case 6:return function(t,e){const n=Dh(t),r=Dh(e);return n.compareTo(r)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),r=e.split("/");for(let s=0;s<n.length&&s<r.length;s++){const t=Yl(n[s],r[s]);if(0!==t)return t}return Yl(n.length,r.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=Yl(Nh(t.latitude),Nh(e.latitude));return 0!==n?n:Yl(Nh(t.longitude),Nh(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const t=$h(n[s],r[s]);if(t)return t}return Yl(n.length,r.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){if(t===Fh.mapValue&&e===Fh.mapValue)return 0;if(t===Fh.mapValue)return 1;if(e===Fh.mapValue)return-1;const n=t.fields||{},r=Object.keys(n),s=e.fields||{},i=Object.keys(s);r.sort(),i.sort();for(let o=0;o<r.length&&o<i.length;++o){const t=Yl(r[o],i[o]);if(0!==t)return t;const e=$h(n[r[o]],s[i[o]]);if(0!==e)return e}return Yl(r.length,i.length)}(t.mapValue,e.mapValue);default:throw xl()}}function zh(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return Yl(t,e);const n=Ah(t),r=Ah(e),s=Yl(n.seconds,r.seconds);return 0!==s?s:Yl(n.nanos,r.nanos)}function Hh(t){return Kh(t)}function Kh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=Ah(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Dh(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,ih.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",n=!0;for(const r of t.values||[])n?n=!1:e+=",",e+=Kh(r);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",r=!0;for(const s of e)r?r=!1:n+=",",n+=`${s}:${Kh(t.fields[s])}`;return n+"}"}(t.mapValue):xl();var e,n}function Gh(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Wh(t){return!!t&&"integerValue"in t}function Qh(t){return!!t&&"arrayValue"in t}function Xh(t){return!!t&&"nullValue"in t}function Yh(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Jh(t){return!!t&&"mapValue"in t}function Zh(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return vh(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=Zh(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Zh(t.arrayValue.values[n]);return e}return Object.assign({},t)}function td(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
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
class ed{constructor(t){this.value=t}static empty(){return new ed({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!Jh(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Zh(e)}setAll(t){let e=sh.emptyPath(),n={},r=[];t.forEach(((t,s)=>{if(!e.isImmediateParentOf(s)){const t=this.getFieldsMap(e);this.applyChanges(t,n,r),n={},r=[],e=s.popLast()}t?n[s.lastSegment()]=Zh(t):r.push(s.lastSegment())}));const s=this.getFieldsMap(e);this.applyChanges(s,n,r)}delete(t){const e=this.field(t.popLast());Jh(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Bh(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let r=e.mapValue.fields[t.get(n)];Jh(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=r),e=r}return e.mapValue.fields}applyChanges(t,e,n){vh(e,((e,n)=>t[e]=n));for(const r of n)delete t[r]}clone(){return new ed(Zh(this.value))}}function nd(t){const e=[];return vh(t.fields,((t,n)=>{const r=new sh([t]);if(Jh(n)){const t=nd(n.mapValue).fields;if(0===t.length)e.push(r);else for(const n of t)e.push(r.child(n))}else e.push(r)})),new kh(e)
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
 */}class rd{constructor(t,e,n,r,s,i){this.key=t,this.documentType=e,this.version=n,this.readTime=r,this.data=s,this.documentState=i}static newInvalidDocument(t){return new rd(t,0,th.min(),th.min(),ed.empty(),0)}static newFoundDocument(t,e,n){return new rd(t,1,e,th.min(),n,0)}static newNoDocument(t,e){return new rd(t,2,e,th.min(),ed.empty(),0)}static newUnknownDocument(t,e){return new rd(t,3,e,th.min(),ed.empty(),2)}convertToFoundDocument(t,e){return this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=ed.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=ed.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=th.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof rd&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new rd(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
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
 */class sd{constructor(t,e=null,n=[],r=[],s=null,i=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=r,this.limit=s,this.startAt=i,this.endAt=o,this.ut=null}}function id(t,e=null,n=[],r=[],s=null,i=null,o=null){return new sd(t,e,n,r,s,i,o)}function od(t){const e=Vl(t);if(null===e.ut){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>{return(e=t).field.canonicalString()+e.op.toString()+Hh(e.value);var e})).join(","),t+="|ob:",t+=e.orderBy.map((t=>function(t){return t.field.canonicalString()+t.dir}(t))).join(","),xh(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((t=>Hh(t))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((t=>Hh(t))).join(",")),e.ut=t}return e.ut}function ad(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>{return`${(e=t).field.canonicalString()} ${e.op} ${Hh(e.value)}`;var e})).join(", ")}]`),xh(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t))).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((t=>Hh(t))).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((t=>Hh(t))).join(",")),`Target(${e})`}function cd(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let s=0;s<t.orderBy.length;s++)if(!Id(t.orderBy[s],e.orderBy[s]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let s=0;s<t.filters.length;s++)if(n=t.filters[s],r=e.filters[s],n.op!==r.op||!n.field.isEqual(r.field)||!Bh(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Td(t.startAt,e.startAt)&&Td(t.endAt,e.endAt)}function ud(t){return ih.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}class ld extends class{}{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.ct(t,e,n):new hd(t,e,n):"array-contains"===e?new gd(t,n):"in"===e?new md(t,n):"not-in"===e?new yd(t,n):"array-contains-any"===e?new vd(t,n):new ld(t,e,n)}static ct(t,e,n){return"in"===e?new dd(t,n):new fd(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.at($h(e,this.value)):null!==e&&jh(this.value)===jh(e)&&this.at($h(e,this.value))}at(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return xl()}}ht(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class hd extends ld{constructor(t,e,n){super(t,e,n),this.key=ih.fromName(n.referenceValue)}matches(t){const e=ih.comparator(t.key,this.key);return this.at(e)}}class dd extends ld{constructor(t,e){super(t,"in",e),this.keys=pd("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class fd extends ld{constructor(t,e){super(t,"not-in",e),this.keys=pd("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function pd(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>ih.fromName(t.referenceValue)))}class gd extends ld{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Qh(e)&&qh(e.arrayValue,this.value)}}class md extends ld{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&qh(this.value.arrayValue,e)}}class yd extends ld{constructor(t,e){super(t,"not-in",e)}matches(t){if(qh(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!qh(this.value.arrayValue,e)}}class vd extends ld{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Qh(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>qh(this.value.arrayValue,t)))}}class wd{constructor(t,e){this.position=t,this.inclusive=e}}class bd{constructor(t,e="asc"){this.field=t,this.dir=e}}function Id(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function Ed(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(r=i.field.isKeyField()?ih.comparator(ih.fromName(o.referenceValue),n.key):$h(o,n.data.field(i.field)),"desc"===i.dir&&(r*=-1),0!==r)break}return r}function Td(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Bh(t.position[n],e.position[n]))return!1;return!0}
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
 */class _d{constructor(t,e=null,n=[],r=[],s=null,i="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=r,this.limit=s,this.limitType=i,this.startAt=o,this.endAt=a,this.lt=null,this.ft=null,this.startAt,this.endAt}}function kd(t,e,n,r,s,i,o,a){return new _d(t,e,n,r,s,i,o,a)}function Sd(t){return new _d(t)}function Cd(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}function Ad(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Nd(t){for(const e of t.filters)if(e.ht())return e.field;return null}function Dd(t){return null!==t.collectionGroup}function Rd(t){const e=Vl(t);if(null===e.lt){e.lt=[];const t=Nd(e),n=Ad(e);if(null!==t&&null===n)t.isKeyField()||e.lt.push(new bd(t)),e.lt.push(new bd(sh.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e.lt.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.lt.push(new bd(sh.keyField(),t))}}}return e.lt}function Od(t){const e=Vl(t);if(!e.ft)if("F"===e.limitType)e.ft=id(e.path,e.collectionGroup,Rd(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const s of Rd(e)){const e="desc"===s.dir?"asc":"desc";t.push(new bd(s.field,e))}const n=e.endAt?new wd(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new wd(e.startAt.position,e.startAt.inclusive):null;e.ft=id(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}return e.ft}function Md(t,e,n){return new _d(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ld(t,e){return cd(Od(t),Od(e))&&t.limitType===e.limitType}function Pd(t){return`${od(Od(t))}|lt:${t.limitType}`}function xd(t){return`Query(target=${ad(Od(t))}; limitType=${t.limitType})`}function Ud(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):ih.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of t.explicitOrderBy)if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!function(t,e,n){const r=Ed(t,e,n);return t.inclusive?r<=0:r<0}(t.startAt,Rd(t),e))&&!(t.endAt&&!function(t,e,n){const r=Ed(t,e,n);return t.inclusive?r>=0:r>0}(t.endAt,Rd(t),e))}(t,e)}function Vd(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Fd(t){return(e,n)=>{let r=!1;for(const s of Rd(t)){const t=jd(s,e,n);if(0!==t)return t;r=r||s.field.isKeyField()}return 0}}function jd(t,e,n){const r=t.field.isKeyField()?ih.comparator(e.key,n.key):function(t,e,n){const r=e.data.field(t),s=n.data.field(t);return null!==r&&null!==s?$h(r,s):xl()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return xl()}}
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
 */function Bd(t,e){if(t.dt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Uh(e)?"-0":e}}function qd(t){return{integerValue:""+t}}function $d(t,e){return Vh(e)?qd(e):Bd(t,e)}
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
 */class zd{constructor(){this._=void 0}}function Hd(t,e,n){return t instanceof Wd?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof Qd?Xd(t,e):t instanceof Yd?Jd(t,e):function(t,e){const n=Gd(t,e),r=tf(n)+tf(t._t);return Wh(n)&&Wh(t._t)?qd(r):Bd(t.wt,r)}(t,e)}function Kd(t,e,n){return t instanceof Qd?Xd(t,e):t instanceof Yd?Jd(t,e):n}function Gd(t,e){return t instanceof Zd?Wh(n=e)||function(t){return!!t&&"doubleValue"in t}(n)?e:{integerValue:0}:null;var n}class Wd extends zd{}class Qd extends zd{constructor(t){super(),this.elements=t}}function Xd(t,e){const n=ef(e);for(const r of t.elements)n.some((t=>Bh(t,r)))||n.push(r);return{arrayValue:{values:n}}}class Yd extends zd{constructor(t){super(),this.elements=t}}function Jd(t,e){let n=ef(e);for(const r of t.elements)n=n.filter((t=>!Bh(t,r)));return{arrayValue:{values:n}}}class Zd extends zd{constructor(t,e){super(),this.wt=t,this._t=e}}function tf(t){return Nh(t.integerValue||t.doubleValue)}function ef(t){return Qh(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
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
 */class nf{constructor(t,e){this.field=t,this.transform=e}}function rf(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof Qd&&e instanceof Qd||t instanceof Yd&&e instanceof Yd?Jl(t.elements,e.elements,Bh):t instanceof Zd&&e instanceof Zd?Bh(t._t,e._t):t instanceof Wd&&e instanceof Wd}(t.transform,e.transform)}class sf{constructor(t,e){this.version=t,this.transformResults=e}}class of{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new of}static exists(t){return new of(void 0,t)}static updateTime(t){return new of(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function af(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class cf{}function uf(t,e){if(!t.hasLocalMutations||e&&0===e.fields.length)return null;if(null===e)return t.isNoDocument()?new wf(t.key,of.none()):new pf(t.key,t.data,of.none());{const n=t.data,r=ed.empty();let s=new Th(sh.comparator);for(let t of e.fields)if(!s.has(t)){let e=n.field(t);null===e&&t.length>1&&(t=t.popLast(),e=n.field(t)),null===e?r.delete(t):r.set(t,e),s=s.add(t)}return new gf(t.key,r,new kh(s.toArray()),of.none())}}function lf(t,e,n){t instanceof pf?function(t,e,n){const r=t.value.clone(),s=yf(t.fieldTransforms,e,n.transformResults);r.setAll(s),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):t instanceof gf?function(t,e,n){if(!af(t.precondition,e))return void e.convertToUnknownDocument(n.version);const r=yf(t.fieldTransforms,e,n.transformResults),s=e.data;s.setAll(mf(t)),s.setAll(r),e.convertToFoundDocument(n.version,s).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function hf(t,e,n,r){return t instanceof pf?function(t,e,n,r){if(!af(t.precondition,e))return n;const s=t.value.clone(),i=vf(t.fieldTransforms,r,e);return s.setAll(i),e.convertToFoundDocument(e.version,s).setHasLocalMutations(),null}(t,e,n,r):t instanceof gf?function(t,e,n,r){if(!af(t.precondition,e))return n;const s=vf(t.fieldTransforms,r,e),i=e.data;return i.setAll(mf(t)),i.setAll(s),e.convertToFoundDocument(e.version,i).setHasLocalMutations(),null===n?null:n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map((t=>t.field)))}(t,e,n,r):function(t,e,n){return af(t.precondition,e)?(e.convertToNoDocument(e.version).setHasLocalMutations(),null):n}(t,e,n)}function df(t,e){let n=null;for(const r of t.fieldTransforms){const t=e.data.field(r.field),s=Gd(r.transform,t||null);null!=s&&(null===n&&(n=ed.empty()),n.set(r.field,s))}return n||null}function ff(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&Jl(t,e,((t,e)=>rf(t,e)))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class pf extends cf{constructor(t,e,n,r=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class gf extends cf{constructor(t,e,n,r,s=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=r,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function mf(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}})),e}function yf(t,e,n){const r=new Map;Ul(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,Kd(o,a,n[s]))}return r}function vf(t,e,n){const r=new Map;for(const s of t){const t=s.transform,i=n.data.field(s.field);r.set(s.field,Hd(t,i,e))}return r}class wf extends cf{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class bf extends cf{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
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
 */class If{constructor(t){this.count=t}}
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
 */var Ef,Tf;function _f(t){switch(t){default:return xl();case Fl.CANCELLED:case Fl.UNKNOWN:case Fl.DEADLINE_EXCEEDED:case Fl.RESOURCE_EXHAUSTED:case Fl.INTERNAL:case Fl.UNAVAILABLE:case Fl.UNAUTHENTICATED:return!1;case Fl.INVALID_ARGUMENT:case Fl.NOT_FOUND:case Fl.ALREADY_EXISTS:case Fl.PERMISSION_DENIED:case Fl.FAILED_PRECONDITION:case Fl.ABORTED:case Fl.OUT_OF_RANGE:case Fl.UNIMPLEMENTED:case Fl.DATA_LOSS:return!0}}function kf(t){if(void 0===t)return Ml("GRPC error has no .code"),Fl.UNKNOWN;switch(t){case Ef.OK:return Fl.OK;case Ef.CANCELLED:return Fl.CANCELLED;case Ef.UNKNOWN:return Fl.UNKNOWN;case Ef.DEADLINE_EXCEEDED:return Fl.DEADLINE_EXCEEDED;case Ef.RESOURCE_EXHAUSTED:return Fl.RESOURCE_EXHAUSTED;case Ef.INTERNAL:return Fl.INTERNAL;case Ef.UNAVAILABLE:return Fl.UNAVAILABLE;case Ef.UNAUTHENTICATED:return Fl.UNAUTHENTICATED;case Ef.INVALID_ARGUMENT:return Fl.INVALID_ARGUMENT;case Ef.NOT_FOUND:return Fl.NOT_FOUND;case Ef.ALREADY_EXISTS:return Fl.ALREADY_EXISTS;case Ef.PERMISSION_DENIED:return Fl.PERMISSION_DENIED;case Ef.FAILED_PRECONDITION:return Fl.FAILED_PRECONDITION;case Ef.ABORTED:return Fl.ABORTED;case Ef.OUT_OF_RANGE:return Fl.OUT_OF_RANGE;case Ef.UNIMPLEMENTED:return Fl.UNIMPLEMENTED;case Ef.DATA_LOSS:return Fl.DATA_LOSS;default:return xl()}}(Tf=Ef||(Ef={}))[Tf.OK=0]="OK",Tf[Tf.CANCELLED=1]="CANCELLED",Tf[Tf.UNKNOWN=2]="UNKNOWN",Tf[Tf.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Tf[Tf.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Tf[Tf.NOT_FOUND=5]="NOT_FOUND",Tf[Tf.ALREADY_EXISTS=6]="ALREADY_EXISTS",Tf[Tf.PERMISSION_DENIED=7]="PERMISSION_DENIED",Tf[Tf.UNAUTHENTICATED=16]="UNAUTHENTICATED",Tf[Tf.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Tf[Tf.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Tf[Tf.ABORTED=10]="ABORTED",Tf[Tf.OUT_OF_RANGE=11]="OUT_OF_RANGE",Tf[Tf.UNIMPLEMENTED=12]="UNIMPLEMENTED",Tf[Tf.INTERNAL=13]="INTERNAL",Tf[Tf.UNAVAILABLE=14]="UNAVAILABLE",Tf[Tf.DATA_LOSS=15]="DATA_LOSS";
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
class Sf{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[r,s]of n)if(this.equalsFn(r,t))return s}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),r=this.inner[n];if(void 0===r)return this.inner[n]=[[t,e]],void this.innerSize++;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return void(r[s]=[t,e]);r.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],t))return 1===n.length?delete this.inner[e]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(t){vh(this.inner,((e,n)=>{for(const[r,s]of n)t(r,s)}))}isEmpty(){return wh(this.inner)}size(){return this.innerSize}}
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
 */const Cf=new bh(ih.comparator);function Af(){return Cf}const Nf=new bh(ih.comparator);function Df(...t){let e=Nf;for(const n of t)e=e.insert(n.key,n);return e}function Rf(t){let e=Nf;return t.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function Of(){return Lf()}function Mf(){return Lf()}function Lf(){return new Sf((t=>t.toString()),((t,e)=>t.isEqual(e)))}const Pf=new bh(ih.comparator),xf=new Th(ih.comparator);function Uf(...t){let e=xf;for(const n of t)e=e.add(n);return e}const Vf=new Th(Yl);function Ff(){return Vf}
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
 */class jf{constructor(t,e,n,r,s){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(t,e){const n=new Map;return n.set(t,Bf.createSynthesizedTargetChangeForCurrentChange(t,e)),new jf(th.min(),n,Ff(),Af(),Uf())}}class Bf{constructor(t,e,n,r,s){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(t,e){return new Bf(Sh.EMPTY_BYTE_STRING,e,Uf(),Uf(),Uf())}}
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
 */class qf{constructor(t,e,n,r){this.gt=t,this.removedTargetIds=e,this.key=n,this.yt=r}}class $f{constructor(t,e){this.targetId=t,this.It=e}}class zf{constructor(t,e,n=Sh.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=r}}class Hf{constructor(){this.Tt=0,this.Et=Wf(),this.At=Sh.EMPTY_BYTE_STRING,this.Rt=!1,this.bt=!0}get current(){return this.Rt}get resumeToken(){return this.At}get Pt(){return 0!==this.Tt}get vt(){return this.bt}Vt(t){t.approximateByteSize()>0&&(this.bt=!0,this.At=t)}St(){let t=Uf(),e=Uf(),n=Uf();return this.Et.forEach(((r,s)=>{switch(s){case 0:t=t.add(r);break;case 2:e=e.add(r);break;case 1:n=n.add(r);break;default:xl()}})),new Bf(this.At,this.Rt,t,e,n)}Dt(){this.bt=!1,this.Et=Wf()}Ct(t,e){this.bt=!0,this.Et=this.Et.insert(t,e)}xt(t){this.bt=!0,this.Et=this.Et.remove(t)}Nt(){this.Tt+=1}kt(){this.Tt-=1}Ot(){this.bt=!0,this.Rt=!0}}class Kf{constructor(t){this.Mt=t,this.Ft=new Map,this.$t=Af(),this.Bt=Gf(),this.Lt=new Th(Yl)}Ut(t){for(const e of t.gt)t.yt&&t.yt.isFoundDocument()?this.qt(e,t.yt):this.Kt(e,t.key,t.yt);for(const e of t.removedTargetIds)this.Kt(e,t.key,t.yt)}Gt(t){this.forEachTarget(t,(e=>{const n=this.Qt(e);switch(t.state){case 0:this.jt(e)&&n.Vt(t.resumeToken);break;case 1:n.kt(),n.Pt||n.Dt(),n.Vt(t.resumeToken);break;case 2:n.kt(),n.Pt||this.removeTarget(e);break;case 3:this.jt(e)&&(n.Ot(),n.Vt(t.resumeToken));break;case 4:this.jt(e)&&(this.Wt(e),n.Vt(t.resumeToken));break;default:xl()}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Ft.forEach(((t,n)=>{this.jt(n)&&e(n)}))}zt(t){const e=t.targetId,n=t.It.count,r=this.Ht(e);if(r){const t=r.target;if(ud(t))if(0===n){const n=new ih(t.path);this.Kt(e,n,rd.newNoDocument(n,th.min()))}else Ul(1===n);else this.Jt(e)!==n&&(this.Wt(e),this.Lt=this.Lt.add(e))}}Yt(t){const e=new Map;this.Ft.forEach(((n,r)=>{const s=this.Ht(r);if(s){if(n.current&&ud(s.target)){const e=new ih(s.target.path);null!==this.$t.get(e)||this.Xt(r,e)||this.Kt(r,e,rd.newNoDocument(e,t))}n.vt&&(e.set(r,n.St()),n.Dt())}}));let n=Uf();this.Bt.forEach(((t,e)=>{let r=!0;e.forEachWhile((t=>{const e=this.Ht(t);return!e||2===e.purpose||(r=!1,!1)})),r&&(n=n.add(t))})),this.$t.forEach(((e,n)=>n.setReadTime(t)));const r=new jf(t,e,this.Lt,this.$t,n);return this.$t=Af(),this.Bt=Gf(),this.Lt=new Th(Yl),r}qt(t,e){if(!this.jt(t))return;const n=this.Xt(t,e.key)?2:0;this.Qt(t).Ct(e.key,n),this.$t=this.$t.insert(e.key,e),this.Bt=this.Bt.insert(e.key,this.Zt(e.key).add(t))}Kt(t,e,n){if(!this.jt(t))return;const r=this.Qt(t);this.Xt(t,e)?r.Ct(e,1):r.xt(e),this.Bt=this.Bt.insert(e,this.Zt(e).delete(t)),n&&(this.$t=this.$t.insert(e,n))}removeTarget(t){this.Ft.delete(t)}Jt(t){const e=this.Qt(t).St();return this.Mt.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Nt(t){this.Qt(t).Nt()}Qt(t){let e=this.Ft.get(t);return e||(e=new Hf,this.Ft.set(t,e)),e}Zt(t){let e=this.Bt.get(t);return e||(e=new Th(Yl),this.Bt=this.Bt.insert(t,e)),e}jt(t){const e=null!==this.Ht(t);return e||Ol("WatchChangeAggregator","Detected inactive target",t),e}Ht(t){const e=this.Ft.get(t);return e&&e.Pt?null:this.Mt.te(t)}Wt(t){this.Ft.set(t,new Hf),this.Mt.getRemoteKeysForTarget(t).forEach((e=>{this.Kt(t,e,null)}))}Xt(t,e){return this.Mt.getRemoteKeysForTarget(t).has(e)}}function Gf(){return new bh(ih.comparator)}function Wf(){return new bh(ih.comparator)}
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
 */const Qf=(()=>{const t={asc:"ASCENDING",desc:"DESCENDING"};return t})(),Xf=(()=>{const t={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return t})();class Yf{constructor(t,e){this.databaseId=t,this.dt=e}}function Jf(t,e){return t.dt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Zf(t,e){return t.dt?e.toBase64():e.toUint8Array()}function tp(t,e){return Jf(t,e.toTimestamp())}function ep(t){return Ul(!!t),th.fromTimestamp(function(t){const e=Ah(t);return new Zl(e.seconds,e.nanos)}(t))}function np(t,e){return function(t){return new nh(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).canonicalString()}function rp(t){const e=nh.fromString(t);return Ul(Sp(e)),e}function sp(t,e){return np(t.databaseId,e.path)}function ip(t,e){const n=rp(e);if(n.get(1)!==t.databaseId.projectId)throw new jl(Fl.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new jl(Fl.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ih(up(n))}function op(t,e){return np(t.databaseId,e)}function ap(t){const e=rp(t);return 4===e.length?nh.emptyPath():up(e)}function cp(t){return new nh(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function up(t){return Ul(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function lp(t,e,n){return{name:sp(t,e),fields:n.value.mapValue.fields}}function hp(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:xl()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(t,e){return t.dt?(Ul(void 0===e||"string"==typeof e),Sh.fromBase64String(e||"")):(Ul(void 0===e||e instanceof Uint8Array),Sh.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(t){const e=void 0===t.code?Fl.UNKNOWN:kf(t.code);return new jl(e,t.message||"")}(o);n=new zf(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=ip(t,r.document.name),i=ep(r.document.updateTime),o=new ed({mapValue:{fields:r.document.fields}}),a=rd.newFoundDocument(s,i,o),c=r.targetIds||[],u=r.removedTargetIds||[];n=new qf(c,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=ip(t,r.document),i=r.readTime?ep(r.readTime):th.min(),o=rd.newNoDocument(s,i),a=r.removedTargetIds||[];n=new qf([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=ip(t,r.document),i=r.removedTargetIds||[];n=new qf([],i,s,null)}else{if(!("filter"in e))return xl();{e.filter;const t=e.filter;t.targetId;const r=t.count||0,s=new If(r),i=t.targetId;n=new $f(i,s)}}return n}function dp(t,e){let n;if(e instanceof pf)n={update:lp(t,e.key,e.value)};else if(e instanceof wf)n={delete:sp(t,e.key)};else if(e instanceof gf)n={update:lp(t,e.key,e.data),updateMask:kp(e.fieldMask)};else{if(!(e instanceof bf))return xl();n={verify:sp(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((t=>function(t,e){const n=e.transform;if(n instanceof Wd)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof Qd)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Yd)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof Zd)return{fieldPath:e.field.canonicalString(),increment:n._t};throw xl()}(0,t)))),e.precondition.isNone||(n.currentDocument=function(t,e){return void 0!==e.updateTime?{updateTime:tp(t,e.updateTime)}:void 0!==e.exists?{exists:e.exists}:xl()}(t,e.precondition)),n}function fp(t,e){return t&&t.length>0?(Ul(void 0!==e),t.map((t=>function(t,e){let n=t.updateTime?ep(t.updateTime):ep(e);return n.isEqual(th.min())&&(n=ep(e)),new sf(n,t.transformResults||[])}(t,e)))):[]}function pp(t,e){return{documents:[op(t,e.path)]}}function gp(t,e){const n={structuredQuery:{}},r=e.path;null!==e.collectionGroup?(n.parent=op(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=op(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(t){if(0===t.length)return;const e=t.map((t=>function(t){if("=="===t.op){if(Yh(t.value))return{unaryFilter:{field:Ip(t.field),op:"IS_NAN"}};if(Xh(t.value))return{unaryFilter:{field:Ip(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(Yh(t.value))return{unaryFilter:{field:Ip(t.field),op:"IS_NOT_NAN"}};if(Xh(t.value))return{unaryFilter:{field:Ip(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ip(t.field),op:bp(t.op),value:t.value}}}(t)));return 1===e.length?e[0]:{compositeFilter:{op:"AND",filters:e}}}(e.filters);s&&(n.structuredQuery.where=s);const i=function(t){if(0!==t.length)return t.map((t=>function(t){return{field:Ip(t.field),direction:wp(t.dir)}}(t)))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(t,e){return t.dt||xh(e)?e:{value:e}}(t,e.limit);var a;return null!==o&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(t){return{before:!t.inclusive,values:t.position}}(e.endAt)),n}function mp(t){let e=ap(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Ul(1===r);const t=n.from[0];t.allDescendants?s=t.collectionId:e=e.child(t.collectionId)}let i=[];n.where&&(i=vp(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((t=>function(t){return new bd(Ep(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t))));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,xh(e)?null:e}(n.limit));let c=null;n.startAt&&(c=function(t){const e=!!t.before,n=t.values||[];return new wd(n,e)}(n.startAt));let u=null;return n.endAt&&(u=function(t){const e=!t.before,n=t.values||[];return new wd(n,e)}(n.endAt)),kd(e,s,o,i,a,"F",c,u)}function yp(t,e){const n=function(t,e){switch(e){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return xl()}}(0,e.purpose);return null==n?null:{"goog-listen-tags":n}}function vp(t){return t?void 0!==t.unaryFilter?[_p(t)]:void 0!==t.fieldFilter?[Tp(t)]:void 0!==t.compositeFilter?t.compositeFilter.filters.map((t=>vp(t))).reduce(((t,e)=>t.concat(e))):xl():[]}function wp(t){return Qf[t]}function bp(t){return Xf[t]}function Ip(t){return{fieldPath:t.canonicalString()}}function Ep(t){return sh.fromServerFormat(t.fieldPath)}function Tp(t){return ld.create(Ep(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return xl()}}(t.fieldFilter.op),t.fieldFilter.value)}function _p(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Ep(t.unaryFilter.field);return ld.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Ep(t.unaryFilter.field);return ld.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Ep(t.unaryFilter.field);return ld.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Ep(t.unaryFilter.field);return ld.create(s,"!=",{nullValue:"NULL_VALUE"});default:return xl()}}function kp(t){const e=[];return t.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function Sp(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
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
 */const Cp=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],Ap=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Np=Ap;
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
class Dp{constructor(t,e,n,r){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let r=0;r<this.mutations.length;r++){const e=this.mutations[r];e.key.isEqual(t.key)&&lf(e,t,n[r])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=hf(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=hf(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=Mf();return this.mutations.forEach((r=>{const s=t.get(r.key),i=s.overlayedDocument;let o=this.applyToLocalView(i,s.mutatedFields);o=e.has(r.key)?null:o;const a=uf(i,o);null!==a&&n.set(r.key,a),i.isValidDocument()||i.convertToNoDocument(th.min())})),n}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),Uf())}isEqual(t){return this.batchId===t.batchId&&Jl(this.mutations,t.mutations,((t,e)=>ff(t,e)))&&Jl(this.baseMutations,t.baseMutations,((t,e)=>ff(t,e)))}}class Rp{constructor(t,e,n,r){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=r}static from(t,e,n){Ul(t.mutations.length===n.length);let r=Pf;const s=t.mutations;for(let i=0;i<s.length;i++)r=r.insert(s[i].key,n[i].version);return new Rp(t,e,n,r)}}
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
 */class Op{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
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
 */class Mp{constructor(t,e,n,r,s=th.min(),i=th.min(),o=Sh.EMPTY_BYTE_STRING){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=i,this.resumeToken=o}withSequenceNumber(t){return new Mp(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,e){return new Mp(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new Mp(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}
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
 */class Lp{constructor(t){this.ne=t}}function Pp(t){const e=mp({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?Md(e,e.limit,"L"):e}
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
class xp{constructor(){}re(t,e){this.oe(t,e),e.ue()}oe(t,e){if("nullValue"in t)this.ce(e,5);else if("booleanValue"in t)this.ce(e,10),e.ae(t.booleanValue?1:0);else if("integerValue"in t)this.ce(e,15),e.ae(Nh(t.integerValue));else if("doubleValue"in t){const n=Nh(t.doubleValue);isNaN(n)?this.ce(e,13):(this.ce(e,15),Uh(n)?e.ae(0):e.ae(n))}else if("timestampValue"in t){const n=t.timestampValue;this.ce(e,20),"string"==typeof n?e.he(n):(e.he(`${n.seconds||""}`),e.ae(n.nanos||0))}else if("stringValue"in t)this.le(t.stringValue,e),this.fe(e);else if("bytesValue"in t)this.ce(e,30),e.de(Dh(t.bytesValue)),this.fe(e);else if("referenceValue"in t)this._e(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.ce(e,45),e.ae(n.latitude||0),e.ae(n.longitude||0)}else"mapValue"in t?td(t)?this.ce(e,Number.MAX_SAFE_INTEGER):(this.we(t.mapValue,e),this.fe(e)):"arrayValue"in t?(this.me(t.arrayValue,e),this.fe(e)):xl()}le(t,e){this.ce(e,25),this.ge(t,e)}ge(t,e){e.he(t)}we(t,e){const n=t.fields||{};this.ce(e,55);for(const r of Object.keys(n))this.le(r,e),this.oe(n[r],e)}me(t,e){const n=t.values||[];this.ce(e,50);for(const r of n)this.oe(r,e)}_e(t,e){this.ce(e,37),ih.fromName(t).path.forEach((t=>{this.ce(e,60),this.ge(t,e)}))}ce(t,e){t.ae(e)}fe(t){t.ae(2)}}xp.ye=new xp;
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
class Up{constructor(){this.ze=new Vp}addToCollectionParentIndex(t,e){return this.ze.add(e),ph.resolve()}getCollectionParents(t,e){return ph.resolve(this.ze.getEntries(e))}addFieldIndex(t,e){return ph.resolve()}deleteFieldIndex(t,e){return ph.resolve()}getDocumentsMatchingTarget(t,e){return ph.resolve(null)}getIndexType(t,e){return ph.resolve(0)}getFieldIndexes(t,e){return ph.resolve([])}getNextCollectionGroupToUpdate(t){return ph.resolve(null)}getMinOffset(t,e){return ph.resolve(uh.min())}getMinOffsetFromCollectionGroup(t,e){return ph.resolve(uh.min())}updateCollectionGroup(t,e,n){return ph.resolve()}updateIndexEntries(t,e){return ph.resolve()}}class Vp{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e]||new Th(nh.comparator),s=!r.has(n);return this.index[e]=r.add(n),s}has(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e];return r&&r.has(n)}getEntries(t){return(this.index[t]||new Th(nh.comparator)).toArray()}}
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
 */new Uint8Array(0);class Fp{constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}static withCacheSize(t){return new Fp(t,Fp.DEFAULT_COLLECTION_PERCENTILE,Fp.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
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
 */Fp.DEFAULT_COLLECTION_PERCENTILE=10,Fp.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Fp.DEFAULT=new Fp(41943040,Fp.DEFAULT_COLLECTION_PERCENTILE,Fp.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Fp.DISABLED=new Fp(-1,0,0);
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
class jp{constructor(t){this.En=t}next(){return this.En+=2,this.En}static An(){return new jp(0)}static Rn(){return new jp(-1)}}
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
class Bp{constructor(){this.changes=new Sf((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,rd.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?ph.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
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
class qp{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}
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
 */class $p{constructor(t,e,n,r){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=r}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next((r=>(n=r,this.getBaseDocument(t,e,n)))).next((t=>(null!==n&&hf(n.mutation,t,kh.empty(),Zl.now()),t)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.getLocalViewOfDocuments(t,e,Uf()).next((()=>e))))}getLocalViewOfDocuments(t,e,n=Uf()){const r=Of();return this.populateOverlays(t,r,e).next((()=>this.computeViews(t,e,r,n).next((t=>{let e=Df();return t.forEach(((t,n)=>{e=e.insert(t,n.overlayedDocument)})),e}))))}getOverlayedDocuments(t,e){const n=Of();return this.populateOverlays(t,n,e).next((()=>this.computeViews(t,e,n,Uf())))}populateOverlays(t,e,n){const r=[];return n.forEach((t=>{e.has(t)||r.push(t)})),this.documentOverlayCache.getOverlays(t,r).next((t=>{t.forEach(((t,n)=>{e.set(t,n)}))}))}computeViews(t,e,n,r){let s=Af();const i=Lf(),o=Lf();return e.forEach(((t,e)=>{const o=n.get(e.key);r.has(e.key)&&(void 0===o||o.mutation instanceof gf)?s=s.insert(e.key,e):void 0!==o&&(i.set(e.key,o.mutation.getFieldMask()),hf(o.mutation,e,o.mutation.getFieldMask(),Zl.now()))})),this.recalculateAndSaveOverlays(t,s).next((t=>(t.forEach(((t,e)=>i.set(t,e))),e.forEach(((t,e)=>{var n;return o.set(t,new qp(e,null!==(n=i.get(t))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(t,e){const n=Lf();let r=new bh(((t,e)=>t-e)),s=Uf();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>{for(const s of t)s.keys().forEach((t=>{const i=e.get(t);if(null===i)return;let o=n.get(t)||kh.empty();o=s.applyToLocalView(i,o),n.set(t,o);const a=(r.get(s.batchId)||Uf()).add(t);r=r.insert(s.batchId,a)}))})).next((()=>{const i=[],o=r.getReverseIterator();for(;o.hasNext();){const r=o.getNext(),a=r.key,c=r.value,u=Mf();c.forEach((t=>{if(!s.has(t)){const r=uf(e.get(t),n.get(t));null!==r&&u.set(t,r),s=s.add(t)}})),i.push(this.documentOverlayCache.saveOverlays(t,a,u))}return ph.waitFor(i)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.recalculateAndSaveOverlays(t,e)))}getDocumentsMatchingQuery(t,e,n){return function(t){return ih.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Dd(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n):this.getDocumentsMatchingCollectionQuery(t,e,n)}getNextDocuments(t,e,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,r).next((s=>{const i=r-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,r-s.size):ph.resolve(Of());let o=-1,a=s;return i.next((e=>ph.forEach(e,((e,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),s.get(e)?ph.resolve():this.getBaseDocument(t,e,n).next((t=>{a=a.insert(e,t)}))))).next((()=>this.populateOverlays(t,e,s))).next((()=>this.computeViews(t,a,e,Uf()))).next((t=>({batchId:o,changes:Rf(t)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new ih(e)).next((t=>{let e=Df();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}getDocumentsMatchingCollectionGroupQuery(t,e,n){const r=e.collectionGroup;let s=Df();return this.indexManager.getCollectionParents(t,r).next((i=>ph.forEach(i,(i=>{const o=function(t,e){return new _d(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,i.child(r));return this.getDocumentsMatchingCollectionQuery(t,o,n).next((t=>{t.forEach(((t,e)=>{s=s.insert(t,e)}))}))})).next((()=>s))))}getDocumentsMatchingCollectionQuery(t,e,n){let r;return this.remoteDocumentCache.getAllFromCollection(t,e.path,n).next((s=>(r=s,this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId)))).next((t=>{t.forEach(((t,e)=>{const n=e.getKey();null===r.get(n)&&(r=r.insert(n,rd.newInvalidDocument(n)))}));let n=Df();return r.forEach(((r,s)=>{const i=t.get(r);void 0!==i&&hf(i.mutation,s,kh.empty(),Zl.now()),Ud(e,s)&&(n=n.insert(r,s))})),n}))}getBaseDocument(t,e,n){return null===n||1===n.mutation.type?this.remoteDocumentCache.getEntry(t,e):ph.resolve(rd.newInvalidDocument(e))}}
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
 */class zp{constructor(t){this.wt=t,this.Jn=new Map,this.Yn=new Map}getBundleMetadata(t,e){return ph.resolve(this.Jn.get(e))}saveBundleMetadata(t,e){var n;return this.Jn.set(e.id,{id:(n=e).id,version:n.version,createTime:ep(n.createTime)}),ph.resolve()}getNamedQuery(t,e){return ph.resolve(this.Yn.get(e))}saveNamedQuery(t,e){return this.Yn.set(e.name,function(t){return{name:t.name,query:Pp(t.bundledQuery),readTime:ep(t.readTime)}}(e)),ph.resolve()}}
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
 */class Hp{constructor(){this.overlays=new bh(ih.comparator),this.Xn=new Map}getOverlay(t,e){return ph.resolve(this.overlays.get(e))}getOverlays(t,e){const n=Of();return ph.forEach(e,(e=>this.getOverlay(t,e).next((t=>{null!==t&&n.set(e,t)})))).next((()=>n))}saveOverlays(t,e,n){return n.forEach(((n,r)=>{this.ie(t,e,r)})),ph.resolve()}removeOverlaysForBatchId(t,e,n){const r=this.Xn.get(n);return void 0!==r&&(r.forEach((t=>this.overlays=this.overlays.remove(t))),this.Xn.delete(n)),ph.resolve()}getOverlaysForCollection(t,e,n){const r=Of(),s=e.length+1,i=new ih(e.child("")),o=this.overlays.getIteratorFrom(i);for(;o.hasNext();){const t=o.getNext().value,i=t.getKey();if(!e.isPrefixOf(i.path))break;i.path.length===s&&t.largestBatchId>n&&r.set(t.getKey(),t)}return ph.resolve(r)}getOverlaysForCollectionGroup(t,e,n,r){let s=new bh(((t,e)=>t-e));const i=this.overlays.getIterator();for(;i.hasNext();){const t=i.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=s.get(t.largestBatchId);null===e&&(e=Of(),s=s.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const o=Of(),a=s.getIterator();for(;a.hasNext();)if(a.getNext().value.forEach(((t,e)=>o.set(t,e))),o.size()>=r)break;return ph.resolve(o)}ie(t,e,n){const r=this.overlays.get(n.key);if(null!==r){const t=this.Xn.get(r.largestBatchId).delete(n.key);this.Xn.set(r.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new Op(e,n));let s=this.Xn.get(e);void 0===s&&(s=Uf(),this.Xn.set(e,s)),this.Xn.set(e,s.add(n.key))}}
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
 */class Kp{constructor(){this.Zn=new Th(Gp.ts),this.es=new Th(Gp.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(t,e){const n=new Gp(t,e);this.Zn=this.Zn.add(n),this.es=this.es.add(n)}ss(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.rs(new Gp(t,e))}os(t,e){t.forEach((t=>this.removeReference(t,e)))}us(t){const e=new ih(new nh([])),n=new Gp(e,t),r=new Gp(e,t+1),s=[];return this.es.forEachInRange([n,r],(t=>{this.rs(t),s.push(t.key)})),s}cs(){this.Zn.forEach((t=>this.rs(t)))}rs(t){this.Zn=this.Zn.delete(t),this.es=this.es.delete(t)}hs(t){const e=new ih(new nh([])),n=new Gp(e,t),r=new Gp(e,t+1);let s=Uf();return this.es.forEachInRange([n,r],(t=>{s=s.add(t.key)})),s}containsKey(t){const e=new Gp(t,0),n=this.Zn.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class Gp{constructor(t,e){this.key=t,this.ls=e}static ts(t,e){return ih.comparator(t.key,e.key)||Yl(t.ls,e.ls)}static ns(t,e){return Yl(t.ls,e.ls)||ih.comparator(t.key,e.key)}}
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
 */class Wp{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.fs=1,this.ds=new Th(Gp.ts)}checkEmpty(t){return ph.resolve(0===this.mutationQueue.length)}addMutationBatch(t,e,n,r){const s=this.fs;this.fs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const i=new Dp(s,e,n,r);this.mutationQueue.push(i);for(const o of r)this.ds=this.ds.add(new Gp(o.key,s)),this.indexManager.addToCollectionParentIndex(t,o.key.path.popLast());return ph.resolve(i)}lookupMutationBatch(t,e){return ph.resolve(this._s(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,r=this.ws(n),s=r<0?0:r;return ph.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return ph.resolve(0===this.mutationQueue.length?-1:this.fs-1)}getAllMutationBatches(t){return ph.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new Gp(e,0),r=new Gp(e,Number.POSITIVE_INFINITY),s=[];return this.ds.forEachInRange([n,r],(t=>{const e=this._s(t.ls);s.push(e)})),ph.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new Th(Yl);return e.forEach((t=>{const e=new Gp(t,0),r=new Gp(t,Number.POSITIVE_INFINITY);this.ds.forEachInRange([e,r],(t=>{n=n.add(t.ls)}))})),ph.resolve(this.gs(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,r=n.length+1;let s=n;ih.isDocumentKey(s)||(s=s.child(""));const i=new Gp(new ih(s),0);let o=new Th(Yl);return this.ds.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===r&&(o=o.add(t.ls)),!0)}),i),ph.resolve(this.gs(o))}gs(t){const e=[];return t.forEach((t=>{const n=this._s(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){Ul(0===this.ys(e.batchId,"removed")),this.mutationQueue.shift();let n=this.ds;return ph.forEach(e.mutations,(r=>{const s=new Gp(r.key,e.batchId);return n=n.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)})).next((()=>{this.ds=n}))}In(t){}containsKey(t,e){const n=new Gp(e,0),r=this.ds.firstAfterOrEqual(n);return ph.resolve(e.isEqual(r&&r.key))}performConsistencyCheck(t){return this.mutationQueue.length,ph.resolve()}ys(t,e){return this.ws(t)}ws(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId}_s(t){const e=this.ws(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}
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
 */class Qp{constructor(t){this.ps=t,this.docs=new bh(ih.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,r=this.docs.get(n),s=r?r.size:0,i=this.ps(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:i}),this.size+=i-s,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return ph.resolve(n?n.document.mutableCopy():rd.newInvalidDocument(e))}getEntries(t,e){let n=Af();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():rd.newInvalidDocument(t))})),ph.resolve(n)}getAllFromCollection(t,e,n){let r=Af();const s=new ih(e.child("")),i=this.docs.getIteratorFrom(s);for(;i.hasNext();){const{key:t,value:{document:s}}=i.getNext();if(!e.isPrefixOf(t.path))break;t.path.length>e.length+1||lh(ch(s),n)<=0||(r=r.insert(s.key,s.mutableCopy()))}return ph.resolve(r)}getAllFromCollectionGroup(t,e,n,r){xl()}Is(t,e){return ph.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new Xp(this)}getSize(t){return ph.resolve(this.size)}}class Xp extends Bp{constructor(t){super(),this.zn=t}applyChanges(t){const e=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?e.push(this.zn.addEntry(t,r)):this.zn.removeEntry(n)})),ph.waitFor(e)}getFromCache(t,e){return this.zn.getEntry(t,e)}getAllFromCache(t,e){return this.zn.getEntries(t,e)}}
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
 */class Yp{constructor(t){this.persistence=t,this.Ts=new Sf((t=>od(t)),cd),this.lastRemoteSnapshotVersion=th.min(),this.highestTargetId=0,this.Es=0,this.As=new Kp,this.targetCount=0,this.Rs=jp.An()}forEachTarget(t,e){return this.Ts.forEach(((t,n)=>e(n))),ph.resolve()}getLastRemoteSnapshotVersion(t){return ph.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return ph.resolve(this.Es)}allocateTargetId(t){return this.highestTargetId=this.Rs.next(),ph.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.Es&&(this.Es=e),ph.resolve()}vn(t){this.Ts.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Rs=new jp(e),this.highestTargetId=e),t.sequenceNumber>this.Es&&(this.Es=t.sequenceNumber)}addTargetData(t,e){return this.vn(e),this.targetCount+=1,ph.resolve()}updateTargetData(t,e){return this.vn(e),ph.resolve()}removeTargetData(t,e){return this.Ts.delete(e.target),this.As.us(e.targetId),this.targetCount-=1,ph.resolve()}removeTargets(t,e,n){let r=0;const s=[];return this.Ts.forEach(((i,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Ts.delete(i),s.push(this.removeMatchingKeysForTargetId(t,o.targetId)),r++)})),ph.waitFor(s).next((()=>r))}getTargetCount(t){return ph.resolve(this.targetCount)}getTargetData(t,e){const n=this.Ts.get(e)||null;return ph.resolve(n)}addMatchingKeys(t,e,n){return this.As.ss(e,n),ph.resolve()}removeMatchingKeys(t,e,n){this.As.os(e,n);const r=this.persistence.referenceDelegate,s=[];return r&&e.forEach((e=>{s.push(r.markPotentiallyOrphaned(t,e))})),ph.waitFor(s)}removeMatchingKeysForTargetId(t,e){return this.As.us(e),ph.resolve()}getMatchingKeysForTargetId(t,e){const n=this.As.hs(e);return ph.resolve(n)}containsKey(t,e){return ph.resolve(this.As.containsKey(e))}}
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
 */class Jp{constructor(t,e){this.bs={},this.overlays={},this.Ps=new mh(0),this.vs=!1,this.vs=!0,this.referenceDelegate=t(this),this.Vs=new Yp(this),this.indexManager=new Up,this.remoteDocumentCache=function(t){return new Qp(t)}((t=>this.referenceDelegate.Ss(t))),this.wt=new Lp(e),this.Ds=new zp(this.wt)}start(){return Promise.resolve()}shutdown(){return this.vs=!1,Promise.resolve()}get started(){return this.vs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Hp,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.bs[t.toKey()];return n||(n=new Wp(e,this.referenceDelegate),this.bs[t.toKey()]=n),n}getTargetCache(){return this.Vs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ds}runTransaction(t,e,n){Ol("MemoryPersistence","Starting transaction:",t);const r=new Zp(this.Ps.next());return this.referenceDelegate.Cs(),n(r).next((t=>this.referenceDelegate.xs(r).next((()=>t)))).toPromise().then((t=>(r.raiseOnCommittedEvent(),t)))}Ns(t,e){return ph.or(Object.values(this.bs).map((n=>()=>n.containsKey(t,e))))}}class Zp extends dh{constructor(t){super(),this.currentSequenceNumber=t}}class tg{constructor(t){this.persistence=t,this.ks=new Kp,this.Os=null}static Ms(t){return new tg(t)}get Fs(){if(this.Os)return this.Os;throw xl()}addReference(t,e,n){return this.ks.addReference(n,e),this.Fs.delete(n.toString()),ph.resolve()}removeReference(t,e,n){return this.ks.removeReference(n,e),this.Fs.add(n.toString()),ph.resolve()}markPotentiallyOrphaned(t,e){return this.Fs.add(e.toString()),ph.resolve()}removeTarget(t,e){this.ks.us(e.targetId).forEach((t=>this.Fs.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.Fs.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}Cs(){this.Os=new Set}xs(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return ph.forEach(this.Fs,(n=>{const r=ih.fromPath(n);return this.$s(t,r).next((t=>{t||e.removeEntry(r,th.min())}))})).next((()=>(this.Os=null,e.apply(t))))}updateLimboDocument(t,e){return this.$s(t,e).next((t=>{t?this.Fs.delete(e.toString()):this.Fs.add(e.toString())}))}Ss(t){return 0}$s(t,e){return ph.or([()=>ph.resolve(this.ks.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ns(t,e)])}}
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
class eg{constructor(t,e,n,r){this.targetId=t,this.fromCache=e,this.Pi=n,this.vi=r}static Vi(t,e){let n=Uf(),r=Uf();for(const s of e.docChanges)switch(s.type){case 0:n=n.add(s.doc.key);break;case 1:r=r.add(s.doc.key)}return new eg(t,e.fromCache,n,r)}}
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
 */class ng{constructor(){this.Si=!1}initialize(t,e){this.Di=t,this.indexManager=e,this.Si=!0}getDocumentsMatchingQuery(t,e,n,r){return this.Ci(t,e).next((s=>s||this.xi(t,e,r,n))).next((n=>n||this.Ni(t,e)))}Ci(t,e){return ph.resolve(null)}xi(t,e,n,r){return Cd(e)||r.isEqual(th.min())?this.Ni(t,e):this.Di.getDocuments(t,n).next((s=>{const i=this.ki(e,s);return this.Oi(e,i,n,r)?this.Ni(t,e):(Rl()<=lt.DEBUG&&Ol("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),xd(e)),this.Mi(t,i,e,ah(r,-1)))}))}ki(t,e){let n=new Th(Fd(t));return e.forEach(((e,r)=>{Ud(t,r)&&(n=n.add(r))})),n}Oi(t,e,n,r){if(null===t.limit)return!1;if(n.size!==e.size)return!0;const s="F"===t.limitType?e.last():e.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(r)>0)}Ni(t,e){return Rl()<=lt.DEBUG&&Ol("QueryEngine","Using full collection scan to execute query:",xd(e)),this.Di.getDocumentsMatchingQuery(t,e,uh.min())}Mi(t,e,n,r){return this.Di.getDocumentsMatchingQuery(t,n,r).next((t=>(e.forEach((e=>{t=t.insert(e.key,e)})),t)))}}
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
 */class rg{constructor(t,e,n,r){this.persistence=t,this.Fi=e,this.wt=r,this.$i=new bh(Yl),this.Bi=new Sf((t=>od(t)),cd),this.Li=new Map,this.Ui=t.getRemoteDocumentCache(),this.Vs=t.getTargetCache(),this.Ds=t.getBundleCache(),this.qi(n)}qi(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new $p(this.Ui,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ui.setIndexManager(this.indexManager),this.Fi.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.$i)))}}function sg(t,e,n,r){return new rg(t,e,n,r)}async function ig(t,e){const n=Vl(t);return await n.persistence.runTransaction("Handle user change","readonly",(t=>{let r;return n.mutationQueue.getAllMutationBatches(t).next((s=>(r=s,n.qi(e),n.mutationQueue.getAllMutationBatches(t)))).next((e=>{const s=[],i=[];let o=Uf();for(const t of r){s.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){i.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return n.localDocuments.getDocuments(t,o).next((t=>({Ki:t,removedBatchIds:s,addedBatchIds:i})))}))}))}function og(t,e){const n=Vl(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(t=>{const r=e.batch.keys(),s=n.Ui.newChangeBuffer({trackRemovals:!0});return function(t,e,n,r){const s=n.batch,i=s.keys();let o=ph.resolve();return i.forEach((t=>{o=o.next((()=>r.getEntry(e,t))).next((e=>{const i=n.docVersions.get(t);Ul(null!==i),e.version.compareTo(i)<0&&(s.applyToRemoteDocument(e,n),e.isValidDocument()&&(e.setReadTime(n.commitVersion),r.addEntry(e)))}))})),o.next((()=>t.mutationQueue.removeMutationBatch(e,s)))}(n,t,e,s).next((()=>s.apply(t))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,r,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,function(t){let e=Uf();for(let n=0;n<t.mutationResults.length;++n)t.mutationResults[n].transformResults.length>0&&(e=e.add(t.batch.mutations[n].key));return e}(e)))).next((()=>n.localDocuments.getDocuments(t,r)))}))}function ag(t){const e=Vl(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Vs.getLastRemoteSnapshotVersion(t)))}function cg(t,e){const n=Vl(t),r=e.snapshotVersion;let s=n.$i;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(t=>{const i=n.Ui.newChangeBuffer({trackRemovals:!0});s=n.$i;const o=[];e.targetChanges.forEach(((i,a)=>{const c=s.get(a);if(!c)return;o.push(n.Vs.removeMatchingKeys(t,i.removedDocuments,a).next((()=>n.Vs.addMatchingKeys(t,i.addedDocuments,a))));let u=c.withSequenceNumber(t.currentSequenceNumber);e.targetMismatches.has(a)?u=u.withResumeToken(Sh.EMPTY_BYTE_STRING,th.min()).withLastLimboFreeSnapshotVersion(th.min()):i.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(i.resumeToken,r)),s=s.insert(a,u),function(t,e,n){return 0===t.resumeToken.approximateByteSize()||(e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(c,u,i)&&o.push(n.Vs.updateTargetData(t,u))}));let a=Af(),c=Uf();if(e.documentUpdates.forEach((r=>{e.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,r))})),o.push(ug(t,i,e.documentUpdates).next((t=>{a=t.Gi,c=t.Qi}))),!r.isEqual(th.min())){const e=n.Vs.getLastRemoteSnapshotVersion(t).next((e=>n.Vs.setTargetsMetadata(t,t.currentSequenceNumber,r)));o.push(e)}return ph.waitFor(o).next((()=>i.apply(t))).next((()=>n.localDocuments.getLocalViewOfDocuments(t,a,c))).next((()=>a))})).then((t=>(n.$i=s,t)))}function ug(t,e,n){let r=Uf(),s=Uf();return n.forEach((t=>r=r.add(t))),e.getEntries(t,r).next((t=>{let r=Af();return n.forEach(((n,i)=>{const o=t.get(n);i.isFoundDocument()!==o.isFoundDocument()&&(s=s.add(n)),i.isNoDocument()&&i.version.isEqual(th.min())?(e.removeEntry(n,i.readTime),r=r.insert(n,i)):!o.isValidDocument()||i.version.compareTo(o.version)>0||0===i.version.compareTo(o.version)&&o.hasPendingWrites?(e.addEntry(i),r=r.insert(n,i)):Ol("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",i.version)})),{Gi:r,Qi:s}}))}function lg(t,e){const n=Vl(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(t=>(void 0===e&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(t,e))))}function hg(t,e){const n=Vl(t);return n.persistence.runTransaction("Allocate target","readwrite",(t=>{let r;return n.Vs.getTargetData(t,e).next((s=>s?(r=s,ph.resolve(r)):n.Vs.allocateTargetId(t).next((s=>(r=new Mp(e,s,0,t.currentSequenceNumber),n.Vs.addTargetData(t,r).next((()=>r)))))))})).then((t=>{const r=n.$i.get(t.targetId);return(null===r||t.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.$i=n.$i.insert(t.targetId,t),n.Bi.set(e,t.targetId)),t}))}async function dg(t,e,n){const r=Vl(t),s=r.$i.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,(t=>r.persistence.referenceDelegate.removeTarget(t,s)))}catch(t){if(!gh(t))throw t;Ol("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}r.$i=r.$i.remove(e),r.Bi.delete(s.target)}function fg(t,e,n){const r=Vl(t);let s=th.min(),i=Uf();return r.persistence.runTransaction("Execute query","readonly",(t=>function(t,e,n){const r=Vl(t),s=r.Bi.get(n);return void 0!==s?ph.resolve(r.$i.get(s)):r.Vs.getTargetData(e,n)}(r,t,Od(e)).next((e=>{if(e)return s=e.lastLimboFreeSnapshotVersion,r.Vs.getMatchingKeysForTargetId(t,e.targetId).next((t=>{i=t}))})).next((()=>r.Fi.getDocumentsMatchingQuery(t,e,n?s:th.min(),n?i:Uf()))).next((t=>(pg(r,Vd(e),t),{documents:t,ji:i})))))}function pg(t,e,n){let r=th.min();n.forEach(((t,e)=>{e.readTime.compareTo(r)>0&&(r=e.readTime)})),t.Li.set(e,r)}class gg{constructor(){this.activeTargetIds=Ff()}Xi(t){this.activeTargetIds=this.activeTargetIds.add(t)}Zi(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Yi(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class mg{constructor(){this.Fr=new gg,this.$r={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.Fr.Xi(t),this.$r[t]||"not-current"}updateQueryState(t,e,n){this.$r[t]=e}removeLocalQueryTarget(t){this.Fr.Zi(t)}isLocalQueryTarget(t){return this.Fr.activeTargetIds.has(t)}clearQueryState(t){delete this.$r[t]}getAllActiveQueryTargets(){return this.Fr.activeTargetIds}isActiveQueryTarget(t){return this.Fr.activeTargetIds.has(t)}start(){return this.Fr=new gg,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}
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
 */class yg{Br(t){}shutdown(){}}
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
 */class vg{constructor(){this.Lr=()=>this.Ur(),this.qr=()=>this.Kr(),this.Gr=[],this.Qr()}Br(t){this.Gr.push(t)}shutdown(){window.removeEventListener("online",this.Lr),window.removeEventListener("offline",this.qr)}Qr(){window.addEventListener("online",this.Lr),window.addEventListener("offline",this.qr)}Ur(){Ol("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.Gr)t(0)}Kr(){Ol("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.Gr)t(1)}static V(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
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
 */const wg={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
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
 */class bg{constructor(t){this.jr=t.jr,this.Wr=t.Wr}zr(t){this.Hr=t}Jr(t){this.Yr=t}onMessage(t){this.Xr=t}close(){this.Wr()}send(t){this.jr(t)}Zr(){this.Hr()}eo(t){this.Yr(t)}no(t){this.Xr(t)}}
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
 */class Ig extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.so=e+"://"+t.host,this.io="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}ro(t,e,n,r,s){const i=this.oo(t,e);Ol("RestConnection","Sending: ",i,n);const o={};return this.uo(o,r,s),this.co(t,i,o,n).then((t=>(Ol("RestConnection","Received: ",t),t)),(e=>{throw Ll("RestConnection",`${t} failed with error: `,e,"url: ",i,"request:",n),e}))}ao(t,e,n,r,s,i){return this.ro(t,e,n,r,s)}uo(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+Nl,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}oo(t,e){const n=wg[t];return`${this.so}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}co(t,e,n,r){return new Promise(((s,i)=>{const o=new Sl;o.listenOnce(Il.COMPLETE,(()=>{try{switch(o.getLastErrorCode()){case bl.NO_ERROR:const e=o.getResponseJson();Ol("Connection","XHR received:",JSON.stringify(e)),s(e);break;case bl.TIMEOUT:Ol("Connection",'RPC "'+t+'" timed out'),i(new jl(Fl.DEADLINE_EXCEEDED,"Request time out"));break;case bl.HTTP_ERROR:const n=o.getStatus();if(Ol("Connection",'RPC "'+t+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const t=o.getResponseJson().error;if(t&&t.status&&t.message){const e=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(Fl).indexOf(e)>=0?e:Fl.UNKNOWN}(t.status);i(new jl(e,t.message))}else i(new jl(Fl.UNKNOWN,"Server responded with status "+o.getStatus()))}else i(new jl(Fl.UNAVAILABLE,"Connection failed."));break;default:xl()}}finally{Ol("Connection",'RPC "'+t+'" completed.')}}));const a=JSON.stringify(r);o.send(e,"POST",a,n,15)}))}ho(t,e,n){const r=[this.so,"/","google.firestore.v1.Firestore","/",t,"/channel"],s=vl(),i=wl(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new _l({})),this.uo(o.initMessageHeaders,e,n),M()||P()||x()||U()||V()||L()||(o.httpHeadersOverwriteParam="$httpHeaders");const a=r.join("");Ol("Connection","Creating WebChannel: "+a,o);const c=s.createWebChannel(a,o);let u=!1,l=!1;const h=new bg({jr:t=>{l?Ol("Connection","Not sending because WebChannel is closed:",t):(u||(Ol("Connection","Opening WebChannel transport."),c.open(),u=!0),Ol("Connection","WebChannel sending:",t),c.send(t))},Wr:()=>c.close()}),d=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return d(c,kl.EventType.OPEN,(()=>{l||Ol("Connection","WebChannel transport opened.")})),d(c,kl.EventType.CLOSE,(()=>{l||(l=!0,Ol("Connection","WebChannel transport closed"),h.eo())})),d(c,kl.EventType.ERROR,(t=>{l||(l=!0,Ll("Connection","WebChannel transport errored:",t),h.eo(new jl(Fl.UNAVAILABLE,"The operation could not be completed")))})),d(c,kl.EventType.MESSAGE,(t=>{var e;if(!l){const n=t.data[0];Ul(!!n);const r=n,s=r.error||(null===(e=r[0])||void 0===e?void 0:e.error);if(s){Ol("Connection","WebChannel received error:",s);const t=s.status;let e=function(t){const e=Ef[t];if(void 0!==e)return kf(e)}(t),n=s.message;void 0===e&&(e=Fl.INTERNAL,n="Unknown error status: "+t+" with message "+s.message),l=!0,h.eo(new jl(e,n)),c.close()}else Ol("Connection","WebChannel received:",n),h.no(n)}})),d(i,El.STAT_EVENT,(t=>{t.stat===Tl.PROXY?Ol("Connection","Detected buffering proxy"):t.stat===Tl.NOPROXY&&Ol("Connection","Detected no buffering proxy")})),setTimeout((()=>{h.Zr()}),0),h}}
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
 */function Eg(){return"undefined"!=typeof document?document:null}
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
 */function Tg(t){return new Yf(t,!0)}class _g{constructor(t,e,n=1e3,r=1.5,s=6e4){this.js=t,this.timerId=e,this.lo=n,this.fo=r,this._o=s,this.wo=0,this.mo=null,this.yo=Date.now(),this.reset()}reset(){this.wo=0}po(){this.wo=this._o}Io(t){this.cancel();const e=Math.floor(this.wo+this.To()),n=Math.max(0,Date.now()-this.yo),r=Math.max(0,e-n);r>0&&Ol("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.wo} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.mo=this.js.enqueueAfterDelay(this.timerId,r,(()=>(this.yo=Date.now(),t()))),this.wo*=this.fo,this.wo<this.lo&&(this.wo=this.lo),this.wo>this._o&&(this.wo=this._o)}Eo(){null!==this.mo&&(this.mo.skipDelay(),this.mo=null)}cancel(){null!==this.mo&&(this.mo.cancel(),this.mo=null)}To(){return(Math.random()-.5)*this.wo}}
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
 */class kg{constructor(t,e,n,r,s,i,o,a){this.js=t,this.Ao=n,this.Ro=r,this.bo=s,this.authCredentialsProvider=i,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Po=0,this.vo=null,this.Vo=null,this.stream=null,this.So=new _g(t,e)}Do(){return 1===this.state||5===this.state||this.Co()}Co(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.xo()}async stop(){this.Do()&&await this.close(0)}No(){this.state=0,this.So.reset()}ko(){this.Co()&&null===this.vo&&(this.vo=this.js.enqueueAfterDelay(this.Ao,6e4,(()=>this.Oo())))}Mo(t){this.Fo(),this.stream.send(t)}async Oo(){if(this.Co())return this.close(0)}Fo(){this.vo&&(this.vo.cancel(),this.vo=null)}$o(){this.Vo&&(this.Vo.cancel(),this.Vo=null)}async close(t,e){this.Fo(),this.$o(),this.So.cancel(),this.Po++,4!==t?this.So.reset():e&&e.code===Fl.RESOURCE_EXHAUSTED?(Ml(e.toString()),Ml("Using maximum backoff delay to prevent overloading the backend."),this.So.po()):e&&e.code===Fl.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Bo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Jr(e)}Bo(){}auth(){this.state=1;const t=this.Lo(this.Po),e=this.Po;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([t,n])=>{this.Po===e&&this.Uo(t,n)}),(e=>{t((()=>{const t=new jl(Fl.UNKNOWN,"Fetching auth token failed: "+e.message);return this.qo(t)}))}))}Uo(t,e){const n=this.Lo(this.Po);this.stream=this.Ko(t,e),this.stream.zr((()=>{n((()=>(this.state=2,this.Vo=this.js.enqueueAfterDelay(this.Ro,1e4,(()=>(this.Co()&&(this.state=3),Promise.resolve()))),this.listener.zr())))})),this.stream.Jr((t=>{n((()=>this.qo(t)))})),this.stream.onMessage((t=>{n((()=>this.onMessage(t)))}))}xo(){this.state=5,this.So.Io((async()=>{this.state=0,this.start()}))}qo(t){return Ol("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Lo(t){return e=>{this.js.enqueueAndForget((()=>this.Po===t?e():(Ol("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Sg extends kg{constructor(t,e,n,r,s,i){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,r,i),this.wt=s}Ko(t,e){return this.bo.ho("Listen",t,e)}onMessage(t){this.So.reset();const e=hp(this.wt,t),n=function(t){if(!("targetChange"in t))return th.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?th.min():e.readTime?ep(e.readTime):th.min()}(t);return this.listener.Go(e,n)}Qo(t){const e={};e.database=cp(this.wt),e.addTarget=function(t,e){let n;const r=e.target;return n=ud(r)?{documents:pp(t,r)}:{query:gp(t,r)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0?n.resumeToken=Zf(t,e.resumeToken):e.snapshotVersion.compareTo(th.min())>0&&(n.readTime=Jf(t,e.snapshotVersion.toTimestamp())),n}(this.wt,t);const n=yp(this.wt,t);n&&(e.labels=n),this.Mo(e)}jo(t){const e={};e.database=cp(this.wt),e.removeTarget=t,this.Mo(e)}}class Cg extends kg{constructor(t,e,n,r,s,i){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,r,i),this.wt=s,this.Wo=!1}get zo(){return this.Wo}start(){this.Wo=!1,this.lastStreamToken=void 0,super.start()}Bo(){this.Wo&&this.Ho([])}Ko(t,e){return this.bo.ho("Write",t,e)}onMessage(t){if(Ul(!!t.streamToken),this.lastStreamToken=t.streamToken,this.Wo){this.So.reset();const e=fp(t.writeResults,t.commitTime),n=ep(t.commitTime);return this.listener.Jo(n,e)}return Ul(!t.writeResults||0===t.writeResults.length),this.Wo=!0,this.listener.Yo()}Xo(){const t={};t.database=cp(this.wt),this.Mo(t)}Ho(t){const e={streamToken:this.lastStreamToken,writes:t.map((t=>dp(this.wt,t)))};this.Mo(e)}}
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
 */class Ag extends class{}{constructor(t,e,n,r){super(),this.authCredentials=t,this.appCheckCredentials=e,this.bo=n,this.wt=r,this.Zo=!1}tu(){if(this.Zo)throw new jl(Fl.FAILED_PRECONDITION,"The client has already been terminated.")}ro(t,e,n){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,s])=>this.bo.ro(t,e,n,r,s))).catch((t=>{throw"FirebaseError"===t.name?(t.code===Fl.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new jl(Fl.UNKNOWN,t.toString())}))}ao(t,e,n,r){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,i])=>this.bo.ao(t,e,n,s,i,r))).catch((t=>{throw"FirebaseError"===t.name?(t.code===Fl.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new jl(Fl.UNKNOWN,t.toString())}))}terminate(){this.Zo=!0}}class Ng{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.eu=0,this.nu=null,this.su=!0}iu(){0===this.eu&&(this.ru("Unknown"),this.nu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.nu=null,this.ou("Backend didn't respond within 10 seconds."),this.ru("Offline"),Promise.resolve()))))}uu(t){"Online"===this.state?this.ru("Unknown"):(this.eu++,this.eu>=1&&(this.cu(),this.ou(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ru("Offline")))}set(t){this.cu(),this.eu=0,"Online"===t&&(this.su=!1),this.ru(t)}ru(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}ou(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.su?(Ml(e),this.su=!1):Ol("OnlineStateTracker",e)}cu(){null!==this.nu&&(this.nu.cancel(),this.nu=null)}}
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
 */class Dg{constructor(t,e,n,r,s){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.au=[],this.hu=new Map,this.lu=new Set,this.fu=[],this.du=s,this.du.Br((t=>{n.enqueueAndForget((async()=>{Fg(this)&&(Ol("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=Vl(t);e.lu.add(4),await Og(e),e._u.set("Unknown"),e.lu.delete(4),await Rg(e)}(this))}))})),this._u=new Ng(n,r)}}async function Rg(t){if(Fg(t))for(const e of t.fu)await e(!0)}async function Og(t){for(const e of t.fu)await e(!1)}function Mg(t,e){const n=Vl(t);n.hu.has(e.targetId)||(n.hu.set(e.targetId,e),Vg(n)?Ug(n):rm(n).Co()&&Pg(n,e))}function Lg(t,e){const n=Vl(t),r=rm(n);n.hu.delete(e),r.Co()&&xg(n,e),0===n.hu.size&&(r.Co()?r.ko():Fg(n)&&n._u.set("Unknown"))}function Pg(t,e){t.wu.Nt(e.targetId),rm(t).Qo(e)}function xg(t,e){t.wu.Nt(e),rm(t).jo(e)}function Ug(t){t.wu=new Kf({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),te:e=>t.hu.get(e)||null}),rm(t).start(),t._u.iu()}function Vg(t){return Fg(t)&&!rm(t).Do()&&t.hu.size>0}function Fg(t){return 0===Vl(t).lu.size}function jg(t){t.wu=void 0}async function Bg(t){t.hu.forEach(((e,n)=>{Pg(t,e)}))}async function qg(t,e){jg(t),Vg(t)?(t._u.uu(e),Ug(t)):t._u.set("Unknown")}async function $g(t,e,n){if(t._u.set("Online"),e instanceof zf&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const r of e.targetIds)t.hu.has(r)&&(await t.remoteSyncer.rejectListen(r,n),t.hu.delete(r),t.wu.removeTarget(r))}(t,e)}catch(n){Ol("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await zg(t,n)}else if(e instanceof qf?t.wu.Ut(e):e instanceof $f?t.wu.zt(e):t.wu.Gt(e),!n.isEqual(th.min()))try{const e=await ag(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.wu.Yt(e);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const s=t.hu.get(r);s&&t.hu.set(r,s.withResumeToken(n.resumeToken,e))}})),n.targetMismatches.forEach((e=>{const n=t.hu.get(e);if(!n)return;t.hu.set(e,n.withResumeToken(Sh.EMPTY_BYTE_STRING,n.snapshotVersion)),xg(t,e);const r=new Mp(n.target,e,1,n.sequenceNumber);Pg(t,r)})),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){Ol("RemoteStore","Failed to raise snapshot:",e),await zg(t,e)}}async function zg(t,e,n){if(!gh(e))throw e;t.lu.add(1),await Og(t),t._u.set("Offline"),n||(n=()=>ag(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{Ol("RemoteStore","Retrying IndexedDB access"),await n(),t.lu.delete(1),await Rg(t)}))}function Hg(t,e){return e().catch((n=>zg(t,n,e)))}async function Kg(t){const e=Vl(t),n=sm(e);let r=e.au.length>0?e.au[e.au.length-1].batchId:-1;for(;Gg(e);)try{const t=await lg(e.localStore,r);if(null===t){0===e.au.length&&n.ko();break}r=t.batchId,Wg(e,t)}catch(t){await zg(e,t)}Qg(e)&&Xg(e)}function Gg(t){return Fg(t)&&t.au.length<10}function Wg(t,e){t.au.push(e);const n=sm(t);n.Co()&&n.zo&&n.Ho(e.mutations)}function Qg(t){return Fg(t)&&!sm(t).Do()&&t.au.length>0}function Xg(t){sm(t).start()}async function Yg(t){sm(t).Xo()}async function Jg(t){const e=sm(t);for(const n of t.au)e.Ho(n.mutations)}async function Zg(t,e,n){const r=t.au.shift(),s=Rp.from(r,e,n);await Hg(t,(()=>t.remoteSyncer.applySuccessfulWrite(s))),await Kg(t)}async function tm(t,e){e&&sm(t).zo&&await async function(t,e){if(n=e.code,_f(n)&&n!==Fl.ABORTED){const n=t.au.shift();sm(t).No(),await Hg(t,(()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e))),await Kg(t)}var n}(t,e),Qg(t)&&Xg(t)}async function em(t,e){const n=Vl(t);n.asyncQueue.verifyOperationInProgress(),Ol("RemoteStore","RemoteStore received new credentials");const r=Fg(n);n.lu.add(3),await Og(n),r&&n._u.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.lu.delete(3),await Rg(n)}async function nm(t,e){const n=Vl(t);e?(n.lu.delete(2),await Rg(n)):e||(n.lu.add(2),await Og(n),n._u.set("Unknown"))}function rm(t){return t.mu||(t.mu=function(t,e,n){const r=Vl(t);return r.tu(),new Sg(e,r.bo,r.authCredentials,r.appCheckCredentials,r.wt,n)
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
 */}(t.datastore,t.asyncQueue,{zr:Bg.bind(null,t),Jr:qg.bind(null,t),Go:$g.bind(null,t)}),t.fu.push((async e=>{e?(t.mu.No(),Vg(t)?Ug(t):t._u.set("Unknown")):(await t.mu.stop(),jg(t))}))),t.mu}function sm(t){return t.gu||(t.gu=function(t,e,n){const r=Vl(t);return r.tu(),new Cg(e,r.bo,r.authCredentials,r.appCheckCredentials,r.wt,n)}(t.datastore,t.asyncQueue,{zr:Yg.bind(null,t),Jr:tm.bind(null,t),Yo:Jg.bind(null,t),Jo:Zg.bind(null,t)}),t.fu.push((async e=>{e?(t.gu.No(),await Kg(t)):(await t.gu.stop(),t.au.length>0&&(Ol("RemoteStore",`Stopping write stream with ${t.au.length} pending writes`),t.au=[]))}))),t.gu
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
 */}class im{constructor(t,e,n,r,s){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=r,this.removalCallback=s,this.deferred=new Bl,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}static createAndSchedule(t,e,n,r,s){const i=Date.now()+n,o=new im(t,e,i,r,s);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new jl(Fl.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function om(t,e){if(Ml("AsyncQueue",`${e}: ${t}`),gh(t))return new jl(Fl.UNAVAILABLE,`${e}: ${t}`);throw t}
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
 */class am{constructor(t){this.comparator=t?(e,n)=>t(e,n)||ih.comparator(e.key,n.key):(t,e)=>ih.comparator(t.key,e.key),this.keyedMap=Df(),this.sortedSet=new bh(this.comparator)}static emptySet(t){return new am(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof am))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(!t.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new am;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
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
 */class cm{constructor(){this.yu=new bh(ih.comparator)}track(t){const e=t.doc.key,n=this.yu.get(e);n?0!==t.type&&3===n.type?this.yu=this.yu.insert(e,t):3===t.type&&1!==n.type?this.yu=this.yu.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.yu=this.yu.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.yu=this.yu.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.yu=this.yu.remove(e):1===t.type&&2===n.type?this.yu=this.yu.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.yu=this.yu.insert(e,{type:2,doc:t.doc}):xl():this.yu=this.yu.insert(e,t)}pu(){const t=[];return this.yu.inorderTraversal(((e,n)=>{t.push(n)})),t}}class um{constructor(t,e,n,r,s,i,o,a){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=s,this.fromCache=i,this.syncStateChanged=o,this.excludesMetadataChanges=a}static fromInitialDocuments(t,e,n,r){const s=[];return e.forEach((t=>{s.push({type:0,doc:t})})),new um(t,e,am.emptySet(e),s,n,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Ld(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let r=0;r<e.length;r++)if(e[r].type!==n[r].type||!e[r].doc.isEqual(n[r].doc))return!1;return!0}}
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
 */class lm{constructor(){this.Iu=void 0,this.listeners=[]}}class hm{constructor(){this.queries=new Sf((t=>Pd(t)),Ld),this.onlineState="Unknown",this.Tu=new Set}}async function dm(t,e){const n=Vl(t),r=e.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new lm),s)try{i.Iu=await n.onListen(r)}catch(t){const n=om(t,`Initialization of query '${xd(e.query)}' failed`);return void e.onError(n)}n.queries.set(r,i),i.listeners.push(e),e.Eu(n.onlineState),i.Iu&&e.Au(i.Iu)&&mm(n)}async function fm(t,e){const n=Vl(t),r=e.query;let s=!1;const i=n.queries.get(r);if(i){const t=i.listeners.indexOf(e);t>=0&&(i.listeners.splice(t,1),s=0===i.listeners.length)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function pm(t,e){const n=Vl(t);let r=!1;for(const s of e){const t=s.query,e=n.queries.get(t);if(e){for(const t of e.listeners)t.Au(s)&&(r=!0);e.Iu=s}}r&&mm(n)}function gm(t,e,n){const r=Vl(t),s=r.queries.get(e);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(e)}function mm(t){t.Tu.forEach((t=>{t.next()}))}class ym{constructor(t,e,n){this.query=t,this.Ru=e,this.bu=!1,this.Pu=null,this.onlineState="Unknown",this.options=n||{}}Au(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new um(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0)}let e=!1;return this.bu?this.vu(t)&&(this.Ru.next(t),e=!0):this.Vu(t,this.onlineState)&&(this.Su(t),e=!0),this.Pu=t,e}onError(t){this.Ru.error(t)}Eu(t){this.onlineState=t;let e=!1;return this.Pu&&!this.bu&&this.Vu(this.Pu,t)&&(this.Su(this.Pu),e=!0),e}Vu(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return(!this.options.Du||!n)&&(!t.docs.isEmpty()||"Offline"===e)}vu(t){if(t.docChanges.length>0)return!0;const e=this.Pu&&this.Pu.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}Su(t){t=um.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache),this.bu=!0,this.Ru.next(t)}}
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
class vm{constructor(t){this.key=t}}class wm{constructor(t){this.key=t}}class bm{constructor(t,e){this.query=t,this.Fu=e,this.$u=null,this.current=!1,this.Bu=Uf(),this.mutatedKeys=Uf(),this.Lu=Fd(t),this.Uu=new am(this.Lu)}get qu(){return this.Fu}Ku(t,e){const n=e?e.Gu:new cm,r=e?e.Uu:this.Uu;let s=e?e.mutatedKeys:this.mutatedKeys,i=r,o=!1;const a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,c="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal(((t,e)=>{const u=r.get(t),l=Ud(this.query,e)?e:null,h=!!u&&this.mutatedKeys.has(u.key),d=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let f=!1;u&&l?u.data.isEqual(l.data)?h!==d&&(n.track({type:3,doc:l}),f=!0):this.Qu(u,l)||(n.track({type:2,doc:l}),f=!0,(a&&this.Lu(l,a)>0||c&&this.Lu(l,c)<0)&&(o=!0)):!u&&l?(n.track({type:0,doc:l}),f=!0):u&&!l&&(n.track({type:1,doc:u}),f=!0,(a||c)&&(o=!0)),f&&(l?(i=i.add(l),s=d?s.add(t):s.delete(t)):(i=i.delete(t),s=s.delete(t)))})),null!==this.query.limit)for(;i.size>this.query.limit;){const t="F"===this.query.limitType?i.last():i.first();i=i.delete(t.key),s=s.delete(t.key),n.track({type:1,doc:t})}return{Uu:i,Gu:n,Oi:o,mutatedKeys:s}}Qu(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const r=this.Uu;this.Uu=t.Uu,this.mutatedKeys=t.mutatedKeys;const s=t.Gu.pu();s.sort(((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return xl()}};return n(t)-n(e)}
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
 */(t.type,e.type)||this.Lu(t.doc,e.doc))),this.ju(n);const i=e?this.Wu():[],o=0===this.Bu.size&&this.current?1:0,a=o!==this.$u;return this.$u=o,0!==s.length||a?{snapshot:new um(this.query,t.Uu,r,s,t.mutatedKeys,0===o,a,!1),zu:i}:{zu:i}}Eu(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({Uu:this.Uu,Gu:new cm,mutatedKeys:this.mutatedKeys,Oi:!1},!1)):{zu:[]}}Hu(t){return!this.Fu.has(t)&&!!this.Uu.has(t)&&!this.Uu.get(t).hasLocalMutations}ju(t){t&&(t.addedDocuments.forEach((t=>this.Fu=this.Fu.add(t))),t.modifiedDocuments.forEach((t=>{})),t.removedDocuments.forEach((t=>this.Fu=this.Fu.delete(t))),this.current=t.current)}Wu(){if(!this.current)return[];const t=this.Bu;this.Bu=Uf(),this.Uu.forEach((t=>{this.Hu(t.key)&&(this.Bu=this.Bu.add(t.key))}));const e=[];return t.forEach((t=>{this.Bu.has(t)||e.push(new wm(t))})),this.Bu.forEach((n=>{t.has(n)||e.push(new vm(n))})),e}Ju(t){this.Fu=t.ji,this.Bu=Uf();const e=this.Ku(t.documents);return this.applyChanges(e,!0)}Yu(){return um.fromInitialDocuments(this.query,this.Uu,this.mutatedKeys,0===this.$u)}}class Im{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class Em{constructor(t){this.key=t,this.Xu=!1}}class Tm{constructor(t,e,n,r,s,i){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=r,this.currentUser=s,this.maxConcurrentLimboResolutions=i,this.Zu={},this.tc=new Sf((t=>Pd(t)),Ld),this.ec=new Map,this.nc=new Set,this.sc=new bh(ih.comparator),this.ic=new Map,this.rc=new Kp,this.oc={},this.uc=new Map,this.cc=jp.Rn(),this.onlineState="Unknown",this.ac=void 0}get isPrimaryClient(){return!0===this.ac}}async function _m(t,e){const n=$m(t);let r,s;const i=n.tc.get(e);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.Yu();else{const t=await hg(n.localStore,Od(e));n.isPrimaryClient&&Mg(n.remoteStore,t);const i=n.sharedClientState.addLocalQueryTarget(t.targetId);r=t.targetId,s=await km(n,e,r,"current"===i)}return s}async function km(t,e,n,r){t.hc=(e,n,r)=>async function(t,e,n,r){let s=e.view.Ku(n);s.Oi&&(s=await fg(t.localStore,e.query,!1).then((({documents:t})=>e.view.Ku(t,s))));const i=r&&r.targetChanges.get(e.targetId),o=e.view.applyChanges(s,t.isPrimaryClient,i);return Um(t,e.targetId,o.zu),o.snapshot}(t,e,n,r);const s=await fg(t.localStore,e,!0),i=new bm(e,s.ji),o=i.Ku(s.documents),a=Bf.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==t.onlineState),c=i.applyChanges(o,t.isPrimaryClient,a);Um(t,n,c.zu);const u=new Im(e,n,i);return t.tc.set(e,u),t.ec.has(n)?t.ec.get(n).push(e):t.ec.set(n,[e]),c.snapshot}async function Sm(t,e){const n=Vl(t),r=n.tc.get(e),s=n.ec.get(r.targetId);if(s.length>1)return n.ec.set(r.targetId,s.filter((t=>!Ld(t,e)))),void n.tc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await dg(n.localStore,r.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(r.targetId),Lg(n.remoteStore,r.targetId),Pm(n,r.targetId)})).catch(fh)):(Pm(n,r.targetId),await dg(n.localStore,r.targetId,!0))}async function Cm(t,e,n){const r=zm(t);try{const t=await function(t,e){const n=Vl(t),r=Zl.now(),s=e.reduce(((t,e)=>t.add(e.key)),Uf());let i,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(t=>{let a=Af(),c=Uf();return n.Ui.getEntries(t,s).next((t=>{a=t,a.forEach(((t,e)=>{e.isValidDocument()||(c=c.add(t))}))})).next((()=>n.localDocuments.getOverlayedDocuments(t,a))).next((s=>{i=s;const o=[];for(const t of e){const e=df(t,i.get(t.key).overlayedDocument);null!=e&&o.push(new gf(t.key,e,nd(e.value.mapValue),of.exists(!0)))}return n.mutationQueue.addMutationBatch(t,r,o,e)})).next((e=>{o=e;const r=e.applyToLocalDocumentSet(i,c);return n.documentOverlayCache.saveOverlays(t,e.batchId,r)}))})).then((()=>({batchId:o.batchId,changes:Rf(i)})))}(r.localStore,e);r.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let r=t.oc[t.currentUser.toKey()];r||(r=new bh(Yl)),r=r.insert(e,n),t.oc[t.currentUser.toKey()]=r}(r,t.batchId,n),await jm(r,t.changes),await Kg(r.remoteStore)}catch(t){const e=om(t,"Failed to persist write");n.reject(e)}}async function Am(t,e){const n=Vl(t);try{const t=await cg(n.localStore,e);e.targetChanges.forEach(((t,e)=>{const r=n.ic.get(e);r&&(Ul(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?r.Xu=!0:t.modifiedDocuments.size>0?Ul(r.Xu):t.removedDocuments.size>0&&(Ul(r.Xu),r.Xu=!1))})),await jm(n,t,e)}catch(t){await fh(t)}}function Nm(t,e,n){const r=Vl(t);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const t=[];r.tc.forEach(((n,r)=>{const s=r.view.Eu(e);s.snapshot&&t.push(s.snapshot)})),function(t,e){const n=Vl(t);n.onlineState=e;let r=!1;n.queries.forEach(((t,n)=>{for(const s of n.listeners)s.Eu(e)&&(r=!0)})),r&&mm(n)}(r.eventManager,e),t.length&&r.Zu.Go(t),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Dm(t,e,n){const r=Vl(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.ic.get(e),i=s&&s.key;if(i){let t=new bh(ih.comparator);t=t.insert(i,rd.newNoDocument(i,th.min()));const n=Uf().add(i),s=new jf(th.min(),new Map,new Th(Yl),t,n);await Am(r,s),r.sc=r.sc.remove(i),r.ic.delete(e),Fm(r)}else await dg(r.localStore,e,!1).then((()=>Pm(r,e,n))).catch(fh)}async function Rm(t,e){const n=Vl(t),r=e.batch.batchId;try{const t=await og(n.localStore,e);Lm(n,r,null),Mm(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await jm(n,t)}catch(t){await fh(t)}}async function Om(t,e,n){const r=Vl(t);try{const t=await function(t,e){const n=Vl(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",(t=>{let r;return n.mutationQueue.lookupMutationBatch(t,e).next((e=>(Ul(null!==e),r=e.keys(),n.mutationQueue.removeMutationBatch(t,e)))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,r,e))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,r))).next((()=>n.localDocuments.getDocuments(t,r)))}))}(r.localStore,e);Lm(r,e,n),Mm(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await jm(r,t)}catch(n){await fh(n)}}function Mm(t,e){(t.uc.get(e)||[]).forEach((t=>{t.resolve()})),t.uc.delete(e)}function Lm(t,e,n){const r=Vl(t);let s=r.oc[r.currentUser.toKey()];if(s){const t=s.get(e);t&&(n?t.reject(n):t.resolve(),s=s.remove(e)),r.oc[r.currentUser.toKey()]=s}}function Pm(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.ec.get(e))t.tc.delete(r),n&&t.Zu.lc(r,n);t.ec.delete(e),t.isPrimaryClient&&t.rc.us(e).forEach((e=>{t.rc.containsKey(e)||xm(t,e)}))}function xm(t,e){t.nc.delete(e.path.canonicalString());const n=t.sc.get(e);null!==n&&(Lg(t.remoteStore,n),t.sc=t.sc.remove(e),t.ic.delete(n),Fm(t))}function Um(t,e,n){for(const r of n)r instanceof vm?(t.rc.addReference(r.key,e),Vm(t,r)):r instanceof wm?(Ol("SyncEngine","Document no longer in limbo: "+r.key),t.rc.removeReference(r.key,e),t.rc.containsKey(r.key)||xm(t,r.key)):xl()}function Vm(t,e){const n=e.key,r=n.path.canonicalString();t.sc.get(n)||t.nc.has(r)||(Ol("SyncEngine","New document in limbo: "+n),t.nc.add(r),Fm(t))}function Fm(t){for(;t.nc.size>0&&t.sc.size<t.maxConcurrentLimboResolutions;){const e=t.nc.values().next().value;t.nc.delete(e);const n=new ih(nh.fromString(e)),r=t.cc.next();t.ic.set(r,new Em(n)),t.sc=t.sc.insert(n,r),Mg(t.remoteStore,new Mp(Od(Sd(n.path)),r,2,mh.ot))}}async function jm(t,e,n){const r=Vl(t),s=[],i=[],o=[];r.tc.isEmpty()||(r.tc.forEach(((t,a)=>{o.push(r.hc(a,e,n).then((t=>{if(t){r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,t.fromCache?"not-current":"current"),s.push(t);const e=eg.Vi(a.targetId,t);i.push(e)}})))})),await Promise.all(o),r.Zu.Go(s),await async function(t,e){const n=Vl(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>ph.forEach(e,(e=>ph.forEach(e.Pi,(r=>n.persistence.referenceDelegate.addReference(t,e.targetId,r))).next((()=>ph.forEach(e.vi,(r=>n.persistence.referenceDelegate.removeReference(t,e.targetId,r)))))))))}catch(t){if(!gh(t))throw t;Ol("LocalStore","Failed to update sequence numbers: "+t)}for(const r of e){const t=r.targetId;if(!r.fromCache){const e=n.$i.get(t),r=e.snapshotVersion,s=e.withLastLimboFreeSnapshotVersion(r);n.$i=n.$i.insert(t,s)}}}(r.localStore,i))}async function Bm(t,e){const n=Vl(t);if(!n.currentUser.isEqual(e)){Ol("SyncEngine","User change. New user:",e.toKey());const t=await ig(n.localStore,e);n.currentUser=e,function(t,e){t.uc.forEach((t=>{t.forEach((t=>{t.reject(new jl(Fl.CANCELLED,e))}))})),t.uc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await jm(n,t.Ki)}}function qm(t,e){const n=Vl(t),r=n.ic.get(e);if(r&&r.Xu)return Uf().add(r.key);{let t=Uf();const r=n.ec.get(e);if(!r)return t;for(const e of r){const r=n.tc.get(e);t=t.unionWith(r.view.qu)}return t}}function $m(t){const e=Vl(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Am.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=qm.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Dm.bind(null,e),e.Zu.Go=pm.bind(null,e.eventManager),e.Zu.lc=gm.bind(null,e.eventManager),e}function zm(t){const e=Vl(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Rm.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Om.bind(null,e),e}class Hm{constructor(){this.synchronizeTabs=!1}async initialize(t){this.wt=Tg(t.databaseInfo.databaseId),this.sharedClientState=this.dc(t),this.persistence=this._c(t),await this.persistence.start(),this.localStore=this.wc(t),this.gcScheduler=this.mc(t,this.localStore),this.indexBackfillerScheduler=this.gc(t,this.localStore)}mc(t,e){return null}gc(t,e){return null}wc(t){return sg(this.persistence,new ng,t.initialUser,this.wt)}_c(t){return new Jp(tg.Ms,this.wt)}dc(t){return new mg}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Km{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>Nm(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=Bm.bind(null,this.syncEngine),await nm(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new hm}createDatastore(t){const e=Tg(t.databaseInfo.databaseId),n=(r=t.databaseInfo,new Ig(r));var r;return function(t,e,n,r){return new Ag(t,e,n,r)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return e=this.localStore,n=this.datastore,r=t.asyncQueue,s=t=>Nm(this.syncEngine,t,0),i=vg.V()?new vg:new yg,new Dg(e,n,r,s,i);var e,n,r,s,i}createSyncEngine(t,e){return function(t,e,n,r,s,i,o){const a=new Tm(t,e,n,r,s,i);return o&&(a.ac=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=Vl(t);Ol("RemoteStore","RemoteStore shutting down."),e.lu.add(5),await Og(e),e.du.shutdown(),e._u.set("Unknown")}(this.remoteStore)}}
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
class Gm{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Ic(this.observer.next,t)}error(t){this.observer.error?this.Ic(this.observer.error,t):console.error("Uncaught Error in snapshot listener:",t)}Tc(){this.muted=!0}Ic(t,e){this.muted||setTimeout((()=>{this.muted||t(e)}),0)}}
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
class Wm{constructor(t,e,n,r){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=r,this.user=Al.UNAUTHENTICATED,this.clientId=Xl.I(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async t=>{Ol("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(t=>(Ol("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new jl(Fl.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Bl;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=om(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}async function Qm(t,e){t.asyncQueue.verifyOperationInProgress(),Ol("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener((async t=>{r.isEqual(t)||(await ig(e.localStore,t),r=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t.offlineComponents=e}async function Xm(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Ym(t);Ol("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener((t=>em(e.remoteStore,t))),t.setAppCheckTokenChangeListener(((t,n)=>em(e.remoteStore,n))),t.onlineComponents=e}async function Ym(t){return t.offlineComponents||(Ol("FirestoreClient","Using default OfflineComponentProvider"),await Qm(t,new Hm)),t.offlineComponents}async function Jm(t){return t.onlineComponents||(Ol("FirestoreClient","Using default OnlineComponentProvider"),await Xm(t,new Km)),t.onlineComponents}function Zm(t){return Jm(t).then((t=>t.syncEngine))}async function ty(t){const e=await Jm(t),n=e.eventManager;return n.onListen=_m.bind(null,e.syncEngine),n.onUnlisten=Sm.bind(null,e.syncEngine),n}function ey(t,e,n={}){const r=new Bl;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,r,s){const i=new Gm({next:n=>{e.enqueueAndForget((()=>fm(t,o))),n.fromCache&&"server"===r.source?s.reject(new jl(Fl.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):s.resolve(n)},error:t=>s.reject(t)}),o=new ym(n,i,{includeMetadataChanges:!0,Du:!0});return dm(t,o)}(await ty(t),t.asyncQueue,e,n,r))),r.promise}const ny=new Map;
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
 */function ry(t,e,n){if(!n)throw new jl(Fl.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function sy(t,e,n,r){if(!0===e&&!0===r)throw new jl(Fl.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function iy(t){if(!ih.isDocumentKey(t))throw new jl(Fl.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function oy(t){if(ih.isDocumentKey(t))throw new jl(Fl.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function ay(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":xl()}function cy(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new jl(Fl.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ay(t);throw new jl(Fl.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
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
class uy{constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new jl(Fl.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new jl(Fl.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,sy("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}
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
 */class ly{constructor(t,e,n){this._authCredentials=e,this._appCheckCredentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new uy({}),this._settingsFrozen=!1,t instanceof Ph?this._databaseId=t:(this._app=t,this._databaseId=function(t){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new jl(Fl.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ph(t.options.projectId)}(t))}get app(){if(!this._app)throw new jl(Fl.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new jl(Fl.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new uy(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new $l;switch(t.type){case"gapi":const e=t.client;return Ul(!("object"!=typeof e||null===e||!e.auth||!e.auth.getAuthHeaderValueForFirstParty)),new Kl(e,t.sessionIndex||"0",t.iamToken||null);case"provider":return t.client;default:throw new jl(Fl.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=ny.get(t);e&&(Ol("ComponentProvider","Removing Datastore"),ny.delete(t),e.terminate())}(this),Promise.resolve()}}
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
class hy{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new fy(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new hy(this.firestore,t,this._key)}}class dy{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new dy(this.firestore,t,this._query)}}class fy extends dy{constructor(t,e,n){super(t,e,Sd(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new hy(this.firestore,null,new ih(t))}withConverter(t){return new fy(this.firestore,t,this._path)}}function py(t,e,...n){if(t=nt(t),ry("collection","path",e),t instanceof ly){const r=nh.fromString(e,...n);return oy(r),new fy(t,null,r)}{if(!(t instanceof hy||t instanceof fy))throw new jl(Fl.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(nh.fromString(e,...n));return oy(r),new fy(t.firestore,null,r)}}function gy(t,e,...n){if(t=nt(t),1===arguments.length&&(e=Xl.I()),ry("doc","path",e),t instanceof ly){const r=nh.fromString(e,...n);return iy(r),new hy(t,null,new ih(r))}{if(!(t instanceof hy||t instanceof fy))throw new jl(Fl.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(nh.fromString(e,...n));return iy(r),new hy(t.firestore,t instanceof fy?t.converter:null,new ih(r))}}
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
class my{constructor(){this.Oc=Promise.resolve(),this.Mc=[],this.Fc=!1,this.$c=[],this.Bc=null,this.Lc=!1,this.Uc=!1,this.qc=[],this.So=new _g(this,"async_queue_retry"),this.Kc=()=>{const t=Eg();t&&Ol("AsyncQueue","Visibility state changed to "+t.visibilityState),this.So.Eo()};const t=Eg();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Kc)}get isShuttingDown(){return this.Fc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Gc(),this.Qc(t)}enterRestrictedMode(t){if(!this.Fc){this.Fc=!0,this.Uc=t||!1;const e=Eg();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Kc)}}enqueue(t){if(this.Gc(),this.Fc)return new Promise((()=>{}));const e=new Bl;return this.Qc((()=>this.Fc&&this.Uc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Mc.push(t),this.jc())))}async jc(){if(0!==this.Mc.length){try{await this.Mc[0](),this.Mc.shift(),this.So.reset()}catch(lo){if(!gh(lo))throw lo;Ol("AsyncQueue","Operation failed with retryable error: "+lo)}this.Mc.length>0&&this.So.Io((()=>this.jc()))}}Qc(t){const e=this.Oc.then((()=>(this.Lc=!0,t().catch((t=>{this.Bc=t,this.Lc=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
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
 */(t);throw Ml("INTERNAL UNHANDLED ERROR: ",e),t})).then((t=>(this.Lc=!1,t))))));return this.Oc=e,e}enqueueAfterDelay(t,e,n){this.Gc(),this.qc.indexOf(t)>-1&&(e=0);const r=im.createAndSchedule(this,t,e,n,(t=>this.Wc(t)));return this.$c.push(r),r}Gc(){this.Bc&&xl()}verifyOperationInProgress(){}async zc(){let t;do{t=this.Oc,await t}while(t!==this.Oc)}Hc(t){for(const e of this.$c)if(e.timerId===t)return!0;return!1}Jc(t){return this.zc().then((()=>{this.$c.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.$c)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.zc()}))}Yc(t){this.qc.push(t)}Wc(t){const e=this.$c.indexOf(t);this.$c.splice(e,1)}}function yy(t){return function(t,e){if("object"!=typeof t||null===t)return!1;const n=t;for(const r of e)if(r in n&&"function"==typeof n[r])return!0;return!1}
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
 */(t,["next","error","complete"])}class vy extends ly{constructor(t,e,n){super(t,e,n),this.type="firestore",this._queue=new my,this._persistenceKey="name"in t?t.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||Iy(this),this._firestoreClient.terminate()}}function wy(t=Ce()){return Ie(t,"firestore").getImmediate()}function by(t){return t._firestoreClient||Iy(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Iy(t){var e;const n=t._freezeSettings(),r=function(t,e,n,r){return new Lh(t,e,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,r.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new Wm(t._authCredentials,t._appCheckCredentials,t._queue,r)}
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
class Ey{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new jl(Fl.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new sh(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
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
class Ty{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Ty(Sh.fromBase64String(t))}catch(t){throw new jl(Fl.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new Ty(Sh.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
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
 */class _y{constructor(t){this._methodName=t}}
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
 */class ky{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new jl(Fl.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new jl(Fl.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return Yl(this._lat,t._lat)||Yl(this._long,t._long)}}
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
 */const Sy=/^__.*__$/;class Cy{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new gf(t,this.data,this.fieldMask,e,this.fieldTransforms):new pf(t,this.data,e,this.fieldTransforms)}}function Ay(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw xl()}}class Ny{constructor(t,e,n,r,s,i){this.settings=t,this.databaseId=e,this.wt=n,this.ignoreUndefinedProperties=r,void 0===s&&this.Xc(),this.fieldTransforms=s||[],this.fieldMask=i||[]}get path(){return this.settings.path}get Zc(){return this.settings.Zc}ta(t){return new Ny(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.wt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ea(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.ta({path:n,na:!1});return r.sa(t),r}ia(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.ta({path:n,na:!1});return r.Xc(),r}ra(t){return this.ta({path:void 0,na:!0})}oa(t){return qy(t,this.settings.methodName,this.settings.ua||!1,this.path,this.settings.ca)}contains(t){return void 0!==this.fieldMask.find((e=>t.isPrefixOf(e)))||void 0!==this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))}Xc(){if(this.path)for(let t=0;t<this.path.length;t++)this.sa(this.path.get(t))}sa(t){if(0===t.length)throw this.oa("Document fields must not be empty");if(Ay(this.Zc)&&Sy.test(t))throw this.oa('Document fields cannot begin and end with "__"')}}class Dy{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.wt=n||Tg(t)}aa(t,e,n,r=!1){return new Ny({Zc:t,methodName:e,ca:n,path:sh.emptyPath(),na:!1,ua:r},this.databaseId,this.wt,this.ignoreUndefinedProperties)}}function Ry(t){const e=t._freezeSettings(),n=Tg(t._databaseId);return new Dy(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Oy(t,e,n,r,s,i={}){const o=t.aa(i.merge||i.mergeFields?2:0,e,n,s);Vy("Data must be an object, but it was:",o,r);const a=xy(r,o);let c,u;if(i.merge)c=new kh(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const t=[];for(const r of i.mergeFields){const s=Fy(e,r,n);if(!o.contains(s))throw new jl(Fl.INVALID_ARGUMENT,`Field '${s}' is specified in your field mask but missing from your input data.`);$y(t,s)||t.push(s)}c=new kh(t),u=o.fieldTransforms.filter((t=>c.covers(t.field)))}else c=null,u=o.fieldTransforms;return new Cy(new ed(a),c,u)}class My extends _y{_toFieldTransform(t){return new nf(t.path,new Wd)}isEqual(t){return t instanceof My}}function Ly(t,e,n,r=!1){return Py(n,t.aa(r?4:3,e))}function Py(t,e){if(Uy(t=nt(t)))return Vy("Unsupported field value:",e,t),xy(t,e);if(t instanceof _y)return function(t,e){if(!Ay(e.Zc))throw e.oa(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e.oa(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.na&&4!==e.Zc)throw e.oa("Nested arrays are not supported");return function(t,e){const n=[];let r=0;for(const s of t){let t=Py(s,e.ra(r));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),r++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=nt(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return $d(e.wt,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=Zl.fromDate(t);return{timestampValue:Jf(e.wt,n)}}if(t instanceof Zl){const n=new Zl(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:Jf(e.wt,n)}}if(t instanceof ky)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof Ty)return{bytesValue:Zf(e.wt,t._byteString)};if(t instanceof hy){const n=e.databaseId,r=t.firestore._databaseId;if(!r.isEqual(n))throw e.oa(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:np(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.oa(`Unsupported field value: ${ay(t)}`)}(t,e)}function xy(t,e){const n={};return wh(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):vh(t,((t,r)=>{const s=Py(r,e.ea(t));null!=s&&(n[t]=s)})),{mapValue:{fields:n}}}function Uy(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof Zl||t instanceof ky||t instanceof Ty||t instanceof hy||t instanceof _y)}function Vy(t,e,n){if(!Uy(n)||!function(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}(n)){const r=ay(n);throw"an object"===r?e.oa(t+" a custom object"):e.oa(t+" "+r)}}function Fy(t,e,n){if((e=nt(e))instanceof Ey)return e._internalPath;if("string"==typeof e)return By(t,e);throw qy("Field path arguments must be of type string or ",t,!1,void 0,n)}const jy=new RegExp("[~\\*/\\[\\]]");function By(t,e,n){if(e.search(jy)>=0)throw qy(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Ey(...e.split("."))._internalPath}catch(r){throw qy(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function qy(t,e,n,r,s){const i=r&&!r.isEmpty(),o=void 0!==s;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new jl(Fl.INVALID_ARGUMENT,a+t+c)}function $y(t,e){return t.some((t=>t.isEqual(e)))}
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
 */class zy{constructor(t,e,n,r,s){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=r,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new hy(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new Hy(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Ky("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class Hy extends zy{data(){return super.data()}}function Ky(t,e){return"string"==typeof e?By(t,e):e instanceof Ey?e._internalPath:e._delegate._internalPath}
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
 */class Gy{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Wy extends zy{constructor(t,e,n,r,s,i){super(t,e,n,r,i),this._firestore=t,this._firestoreImpl=t,this.metadata=s}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Qy(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(Ky("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class Qy extends Wy{data(t={}){return super.data(t)}}class Xy{constructor(t,e,n,r){this._firestore=t,this._userDataWriter=e,this._snapshot=r,this.metadata=new Gy(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach((n=>{t.call(e,new Qy(this._firestore,this._userDataWriter,n.key,n,new Gy(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new jl(Fl.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map((n=>({type:"added",doc:new Qy(t._firestore,t._userDataWriter,n.doc.key,n.doc,new Gy(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter),oldIndex:-1,newIndex:e++})))}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter((t=>e||3!==t.type)).map((e=>{const r=new Qy(t._firestore,t._userDataWriter,e.doc.key,e.doc,new Gy(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let s=-1,i=-1;return 0!==e.type&&(s=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),i=n.indexOf(e.doc.key)),{type:Yy(e.type),doc:r,oldIndex:s,newIndex:i}}))}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function Yy(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return xl()}}
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
function Jy(t){if("L"===t.limitType&&0===t.explicitOrderBy.length)throw new jl(Fl.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Zy{}function tv(t,...e){for(const n of e)t=n._apply(t);return t}class ev extends Zy{constructor(t,e,n){super(),this.fa=t,this.da=e,this._a=n,this.type="where"}_apply(t){const e=Ry(t.firestore),n=function(t,e,n,r,s,i,o){let a;if(s.isKeyField()){if("array-contains"===i||"array-contains-any"===i)throw new jl(Fl.INVALID_ARGUMENT,`Invalid Query. You can't perform '${i}' queries on documentId().`);if("in"===i||"not-in"===i){ov(o,i);const e=[];for(const n of o)e.push(iv(r,t,n));a={arrayValue:{values:e}}}else a=iv(r,t,o)}else"in"!==i&&"not-in"!==i&&"array-contains-any"!==i||ov(o,i),a=Ly(n,e,o,"in"===i||"not-in"===i);const c=ld.create(s,i,a);return function(t,e){if(e.ht()){const n=Nd(t);if(null!==n&&!n.isEqual(e.field))throw new jl(Fl.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${e.field.toString()}'`);const r=Ad(t);null!==r&&av(t,e.field,r)}const n=function(t,e){for(const n of t.filters)if(e.indexOf(n.op)>=0)return n.op;return null}(t,function(t){switch(t){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(null!==n)throw n===e.op?new jl(Fl.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new jl(Fl.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}(t,c),c}(t._query,"where",e,t.firestore._databaseId,this.fa,this.da,this._a);return new dy(t.firestore,t.converter,function(t,e){const n=t.filters.concat([e]);return new _d(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}(t._query,n))}}function nv(t,e,n){const r=e,s=Ky("where",t);return new ev(s,r,n)}class rv extends Zy{constructor(t,e){super(),this.fa=t,this.wa=e,this.type="orderBy"}_apply(t){const e=function(t,e,n){if(null!==t.startAt)throw new jl(Fl.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==t.endAt)throw new jl(Fl.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const r=new bd(e,n);return function(t,e){if(null===Ad(t)){const n=Nd(t);null!==n&&av(t,n,e.field)}}(t,r),r}(t._query,this.fa,this.wa);return new dy(t.firestore,t.converter,function(t,e){const n=t.explicitOrderBy.concat([e]);return new _d(t.path,t.collectionGroup,n,t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(t._query,e))}}function sv(t,e="asc"){const n=e,r=Ky("orderBy",t);return new rv(r,n)}function iv(t,e,n){if("string"==typeof(n=nt(n))){if(""===n)throw new jl(Fl.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Dd(e)&&-1!==n.indexOf("/"))throw new jl(Fl.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(nh.fromString(n));if(!ih.isDocumentKey(r))throw new jl(Fl.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Gh(t,new ih(r))}if(n instanceof hy)return Gh(t,n._key);throw new jl(Fl.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ay(n)}.`)}function ov(t,e){if(!Array.isArray(t)||0===t.length)throw new jl(Fl.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new jl(Fl.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function av(t,e,n){if(!n.isEqual(e))throw new jl(Fl.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}
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
class cv{convertValue(t,e="none"){switch(jh(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Nh(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Dh(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw xl()}}convertObject(t,e){const n={};return vh(t.fields,((t,r)=>{n[t]=this.convertValue(r,e)})),n}convertGeoPoint(t){return new ky(Nh(t.latitude),Nh(t.longitude))}convertArray(t,e){return(t.values||[]).map((t=>this.convertValue(t,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=Oh(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(Mh(t));default:return null}}convertTimestamp(t){const e=Ah(t);return new Zl(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=nh.fromString(t);Ul(Sp(n));const r=new Ph(n.get(1),n.get(3)),s=new ih(n.popFirst(5));return r.isEqual(e)||Ml(`Document ${s} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),s}}
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
 */function uv(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class lv extends cv{constructor(t){super(),this.firestore=t}convertBytes(t){return new Ty(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new hy(this.firestore,null,e)}}function hv(t){t=cy(t,dy);const e=cy(t.firestore,vy),n=by(e),r=new lv(e);return Jy(t._query),ey(n,t._query).then((n=>new Xy(e,r,t,n)))}function dv(t,e){const n=cy(t.firestore,vy),r=gy(t),s=uv(t.converter,e);return pv(n,[Oy(Ry(t.firestore),"addDoc",r._key,s,null!==t.converter,{}).toMutation(r._key,of.exists(!1))]).then((()=>r))}function fv(t,...e){var n,r,s;t=nt(t);let i={includeMetadataChanges:!1},o=0;"object"!=typeof e[o]||yy(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(yy(e[o])){const t=e[o];e[o]=null===(n=t.next)||void 0===n?void 0:n.bind(t),e[o+1]=null===(r=t.error)||void 0===r?void 0:r.bind(t),e[o+2]=null===(s=t.complete)||void 0===s?void 0:s.bind(t)}let c,u,l;if(t instanceof hy)u=cy(t.firestore,vy),l=Sd(t._key.path),c={next:n=>{e[o]&&e[o](gv(u,t,n))},error:e[o+1],complete:e[o+2]};else{const n=cy(t,dy);u=cy(n.firestore,vy),l=n._query;const r=new lv(u);c={next:t=>{e[o]&&e[o](new Xy(u,r,n,t))},error:e[o+1],complete:e[o+2]},Jy(t._query)}return function(t,e,n,r){const s=new Gm(r),i=new ym(e,s,n);return t.asyncQueue.enqueueAndForget((async()=>dm(await ty(t),i))),()=>{s.Tc(),t.asyncQueue.enqueueAndForget((async()=>fm(await ty(t),i)))}}(by(u),l,a,c)}function pv(t,e){return function(t,e){const n=new Bl;return t.asyncQueue.enqueueAndForget((async()=>Cm(await Zm(t),e,n))),n.promise}(by(t),e)}function gv(t,e,n){const r=n.docs.get(e._key),s=new lv(t);return new Wy(t,s,e._key,r,new Gy(n.hasPendingWrites,n.fromCache),e.converter)}
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
 */function mv(){return new My("serverTimestamp")}!function(t,e=!0){!function(t){Nl=t}(ke),be(new rt("firestore",((t,{options:n})=>{const r=t.getProvider("app").getImmediate(),s=new vy(r,new zl(t.getProvider("auth-internal")),new Wl(t.getProvider("app-check-internal")));return n=Object.assign({useFetchStreams:e},n),s._setSettings(n),s}),"PUBLIC")),Ae(Cl,"3.4.11",t),Ae(Cl,"3.4.11","esm2017")}();var yv=n(262);const vv={apiKey:"AIzaSyBRfQpbFsQcEK5sP6Tlv_x429zzTVoQHF0",authDomain:"army-app-3f258.firebaseapp.com",projectId:"army-app-3f258",storageBucket:"army-app-3f258.appspot.com",messagingSenderId:"1038167981016",appId:"1:1038167981016:web:91e4caa58119a1f3e990ad",measurementId:"G-1D1TXMW3XH"},wv=Se(vv),bv=Wi(wv),Iv=wy(wv),Ev=py(Iv,"colors");function Tv(){const t=(0,yv.iH)(null),e=Wr(bv,(e=>t.value=e));(0,r.Ah)(e);const n=(0,r.Fl)((()=>null!==t.value)),s=async()=>{const t=new jr;t.setCustomParameters({lang:"en"}),await Gs(bv,t).then((async t=>{const e=tv(Ev,nv("userId","==",t.user.uid)),n=await hv(e);let r=0;n.forEach((()=>{r++})),0==r&&dv(Ev,{userId:t.user.uid,color:"#"+Math.floor(16777215*Math.random()).toString(16)})}))},i=()=>Qr(bv);return{user:t,isLogin:n,signIn:s,logOut:i}}const _v=py(Iv,"messages"),kv=tv(_v,sv("createdAt"));function Sv(){const t=(0,yv.iH)([]),e=fv(kv,(e=>{t.value=e.docs.map((t=>({id:t.id,...t.data()}))).reverse()}));(0,r.Ah)(e);const{user:n,isLogin:s}=Tv(),i=t=>{if(!s.value)return;const{photoURL:e,uid:r,displayName:i}=n.value;t&&dv(_v,{userName:i,userId:r,userPhotoURL:e,text:t,datetime:Date.now(),createdAt:mv()})};return{messages:t,sendMessage:i}}function Cv(){const t=(0,yv.iH)([]),e=fv(Ev,(e=>{t.value=e.docs.map((t=>({id:t.id,...t.data()}))).reverse()}));(0,r.Ah)(e);const n=e=>{t.value.forEach((t=>{if(t.userId==e)return t.color}))};return{colors:t,getColor:n}}var Av={setup(){const{user:t,isLogin:e,signIn:n,logOut:r}=Tv(),{colors:s}=Cv();return{user:t,isLogin:e,signIn:n,logOut:r,colors:s}},computed:{getColor(){if(this.isLogin){let t="";return this.colors.forEach((e=>{e.userId!=this.user.uid||(t=e.color)})),t}return"#d98c07"}}},Nv=n(744);const Dv=(0,Nv.Z)(Av,[["render",_]]);var Rv=Dv;const Ov={class:"footer"},Mv={class:"copyright"},Lv=(0,r.Uk)(" © 2022 "),Pv={key:0},xv=(0,r.Uk)(" Babich Dmitriy "),Uv=(0,r.uE)('<div class="messangers"><a href="https://www.instagram.com/l3.dima/" target="_blank" class="instagram"><i class="fab fa-instagram"></i></a><a href="https://t.me/l3Dima" target="_blank" class="telegram"><i class="fab fa-telegram-plane"></i></a><a href="https://twitter.com/BabicDmitrij" target="_blank" class="twitter"><i class="fab fa-twitter"></i></a><a href="https://vk.com/l3_dima" target="_blank" class="vk"><i class="fab fa-vk"></i></a></div>',1);function Vv(t,e,n,s,i,o){return(0,r.wg)(),(0,r.iD)("div",Ov,[(0,r._)("div",Mv,[Lv,o.getWidth<=390?((0,r.wg)(),(0,r.iD)("br",Pv)):(0,r.kq)("",!0),xv]),Uv])}var Fv={computed:{getWidth(){return window.screen.width}}};const jv=(0,Nv.Z)(Fv,[["render",Vv]]);var Bv=jv;const qv=["src"],$v={class:"comment-box"},zv={key:0,class:"info"},Hv=["innerHTML"];function Kv(t,e,n,i,o,a){return(0,r.wg)(),(0,r.iD)("div",{class:(0,s.C_)(["comment",n.sender?"flex-row-reverse":""])},[(0,r._)("div",{class:(0,s.C_)(["wd-85",n.sender?"flex-row-reverse":""])},[(0,r._)("div",null,[(0,r._)("img",{src:n.data.userPhotoURL,alt:"avatar",class:(0,s.C_)(n.sender?"left":"right")},null,10,qv)]),(0,r._)("div",$v,[n.sender?(0,r.kq)("",!0):((0,r.wg)(),(0,r.iD)("div",zv,[(0,r._)("div",{class:"name",style:(0,s.j5)({color:a.getColor})},(0,s.zw)(n.data.userName),5)])),(0,r._)("div",{class:"message",style:(0,s.j5)({background:n.sender?a.getColor:"#c4ba93",color:n.sender?a.getColorText:"#000"})},(0,s.zw)(n.data.text),5)])],2),(0,r._)("div",{class:(0,s.C_)(["time",n.sender?"tm-sender":"tm"]),innerHTML:o.date.replace(/, /gi,"<br>")},null,10,Hv)],2)}var Gv=n(767),Wv=n.n(Gv),Qv={data(){return{date:new Date(this.data.datetime).toLocaleString("ru",{hour12:!1})}},props:["data","sender"],setup(){const{isLogin:t}=Tv(),{colors:e}=Cv();return{colors:e,isLogin:t}},computed:{getColor(){let t="";return this.colors.forEach((e=>{e.userId!=this.data.userId||(t=e.color)})),t},getColorText(){let t="",e=!1;return this.colors.forEach((n=>{if(n.userId==this.data.userId){t=n.color;const r=Wv()(t);e=r.isLight()}})),e?"#000000":"#ffffff"}}};const Xv=(0,Nv.Z)(Qv,[["render",Kv]]);var Yv=Xv,Jv={data(){return{days:null,hours:null,minutes:null,seconds:null,interval:null}},methods:{countdownTimer(){const t=new Date(2023,9,27),e=t-new Date;e<=0&&clearInterval(this.interval),this.days=e>0?Math.floor(e/1e3/60/60/24):0,this.hours=e>0?Math.floor(e/1e3/60/60)%24:0,this.minutes=e>0?Math.floor(e/1e3/60)%60:0,this.seconds=e>0?Math.floor(e/1e3)%60:0},setColor(t){this.colors.forEach((e=>{if(e.userId==t)return e}))}},mounted(){let t="",e=window.screen.width<=768?18:30;for(let n=0;n<e;n++)t+=(t?",":"")+1*-n+"px "+1*n+"px 0 #d98c07";this.$refs.timer.style.textShadow=t,this.countdownTimer(),this.interval=setInterval(this.countdownTimer,1e3)},computed:{tDays(){return this.days<10?"0"+this.days:this.days},tHours(){return this.hours<10?"0"+this.hours:this.hours},tMinutes(){return this.minutes<10?"0"+this.minutes:this.minutes},tSeconds(){return this.seconds<10?"0"+this.seconds:this.seconds}},setup(){const{user:t,isLogin:e,signIn:n,logOut:r}=Tv(),{messages:s,sendMessage:i}=Sv(),o=(0,yv.iH)(""),a=()=>{i(o.value),o.value=""};return{user:t,isLogin:e,signIn:n,logOut:r,messages:s,message:o,addComment:a}},components:{Header:Rv,Footer:Bv,Message:Yv}};const Zv=(0,Nv.Z)(Jv,[["render",b]]);var tw=Zv}}]);
//# sourceMappingURL=148.c0bb4756.js.map
