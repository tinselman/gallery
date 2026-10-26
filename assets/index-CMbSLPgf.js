var hf=Object.defineProperty;var uf=(s,t,e)=>t in s?hf(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var D=(s,t,e)=>uf(s,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ul="186",ff=0,tc=1,df=2,Gr=1,pf=2,Hs=3,Li=0,en=1,Kn=2,ti=0,Vs=1,ec=2,nc=3,ic=4,mf=5,as=100,gf=101,xf=102,_f=103,vf=104,Mf=200,yf=201,Sf=202,bf=203,qh=204,Yh=205,wf=206,Ef=207,Tf=208,Af=209,Rf=210,Cf=211,Pf=212,Lf=213,If=214,ga=0,xa=1,_a=2,Zs=3,va=4,Ma=5,ya=6,Sa=7,fl=0,Df=1,Uf=2,Fn=0,$h=1,Kh=2,Zh=3,Jh=4,Qh=5,jh=6,dl=7,tu=300,Ii=301,ms=302,wo=303,Eo=304,go=306,ba=1e3,Qn=1001,wa=1002,ke=1003,Nf=1004,ar=1005,Be=1006,To=1007,yi=1008,tn=1009,eu=1010,nu=1011,Js=1012,pl=1013,zn=1014,Tn=1015,_n=1016,ml=1017,gl=1018,Qs=1020,iu=35902,su=35899,ru=1021,ou=1022,hn=1023,ii=1026,Pi=1027,xo=1028,xl=1029,Di=1030,_l=1031,vl=1033,Vr=33776,Wr=33777,Xr=33778,qr=33779,Ea=35840,Ta=35841,Aa=35842,Ra=35843,Ca=36196,Pa=37492,La=37496,Ia=37488,Da=37489,Zr=37490,Ua=37491,Na=37808,Fa=37809,za=37810,Oa=37811,ka=37812,Ba=37813,Ha=37814,Ga=37815,Va=37816,Wa=37817,Xa=37818,qa=37819,Ya=37820,$a=37821,Ka=36492,Za=36494,Ja=36495,Qa=36283,ja=36284,Jr=36285,tl=36286,Ff=3200,el=0,zf=1,vi="",Le="srgb",Qr="srgb-linear",jr="linear",he="srgb",Ao=7680,Of=519,kf=512,Bf=513,Hf=514,Ml=515,Gf=516,Vf=517,yl=518,Wf=519,au=35044,sc="300 es",Nn=2e3,js=2001;function Xf(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function tr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function qf(){const s=tr("canvas");return s.style.display="block",s}const rc={};function to(...s){const t="THREE."+s.shift();console.log(t,...s)}function lu(s){const t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=s[1];e&&e.isStackTrace?s[0]+=" "+e.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Gt(...s){s=lu(s);const t="THREE."+s.shift();{const e=s[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...s)}}function ie(...s){s=lu(s);const t="THREE."+s.shift();{const e=s[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...s)}}function ds(...s){const t=s.join(" ");t in rc||(rc[t]=!0,Gt(...s))}function Yf(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const $f={[ga]:xa,[_a]:ya,[va]:Sa,[Zs]:Ma,[xa]:ga,[ya]:_a,[Sa]:va,[Ma]:Zs};class Ni{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const i=n[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}}const Xe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let oc=1234567;const Ws=Math.PI/180,er=180/Math.PI;function ei(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Xe[s&255]+Xe[s>>8&255]+Xe[s>>16&255]+Xe[s>>24&255]+"-"+Xe[t&255]+Xe[t>>8&255]+"-"+Xe[t>>16&15|64]+Xe[t>>24&255]+"-"+Xe[e&63|128]+Xe[e>>8&255]+"-"+Xe[e>>16&255]+Xe[e>>24&255]+Xe[n&255]+Xe[n>>8&255]+Xe[n>>16&255]+Xe[n>>24&255]).toLowerCase()}function Qt(s,t,e){return Math.max(t,Math.min(e,s))}function Sl(s,t){return(s%t+t)%t}function Kf(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function Zf(s,t,e){return s!==t?(e-s)/(t-s):0}function Xs(s,t,e){return(1-e)*s+e*t}function Jf(s,t,e,n){return Xs(s,t,1-Math.exp(-e*n))}function Qf(s,t=1){return t-Math.abs(Sl(s,t*2)-t)}function jf(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function td(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function ed(s,t){return s+Math.floor(Math.random()*(t-s+1))}function nd(s,t){return s+Math.random()*(t-s)}function id(s){return s*(.5-Math.random())}function sd(s){s!==void 0&&(oc=s);let t=oc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function rd(s){return s*Ws}function od(s){return s*er}function ad(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}function ld(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function cd(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function hd(s,t,e,n,i){const r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),f=o((t-n)/2),d=r((n-t)/2),p=o((n-t)/2);switch(i){case"XYX":s.set(a*h,c*u,c*f,a*l);break;case"YZY":s.set(c*f,a*h,c*u,a*l);break;case"ZXZ":s.set(c*u,c*f,a*h,a*l);break;case"XZX":s.set(a*h,c*p,c*d,a*l);break;case"YXY":s.set(c*d,a*h,c*p,a*l);break;case"ZYZ":s.set(c*p,c*d,a*h,a*l);break;default:Gt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function wn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:case Uint8ClampedArray:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ue(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Xn={DEG2RAD:Ws,RAD2DEG:er,generateUUID:ei,clamp:Qt,euclideanModulo:Sl,mapLinear:Kf,inverseLerp:Zf,lerp:Xs,damp:Jf,pingpong:Qf,smoothstep:jf,smootherstep:td,randInt:ed,randFloat:nd,randFloatSpread:id,seededRandom:sd,degToRad:rd,radToDeg:od,isPowerOfTwo:ad,ceilPowerOfTwo:ld,floorPowerOfTwo:cd,setQuaternionFromProperEuler:hd,normalize:ue,denormalize:wn},kl=class kl{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Qt(this.x,t.x,e.x),this.y=Qt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Qt(this.x,t,e),this.y=Qt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Qt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};kl.prototype.isVector2=!0;let Bt=kl;class ve{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3],f=r[o+0],d=r[o+1],p=r[o+2],x=r[o+3];if(u!==x||c!==f||l!==d||h!==p){let g=c*f+l*d+h*p+u*x;g<0&&(f=-f,d=-d,p=-p,x=-x,g=-g);let m=1-a;if(g<.9995){const S=Math.acos(g),E=Math.sin(S);m=Math.sin(m*S)/E,a=Math.sin(a*S)/E,c=c*m+f*a,l=l*m+d*a,h=h*m+p*a,u=u*m+x*a}else{c=c*m+f*a,l=l*m+d*a,h=h*m+p*a,u=u*m+x*a;const S=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=S,l*=S,h*=S,u*=S}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,o){const a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=r[o],f=r[o+1],d=r[o+2],p=r[o+3];return t[e]=a*p+h*u+c*d-l*f,t[e+1]=c*p+h*f+l*u-a*d,t[e+2]=l*p+h*d+a*f-c*u,t[e+3]=h*p-a*u-c*f-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),u=a(r/2),f=c(n/2),d=c(i/2),p=c(r/2);switch(o){case"XYZ":this._x=f*h*u+l*d*p,this._y=l*d*u-f*h*p,this._z=l*h*p+f*d*u,this._w=l*h*u-f*d*p;break;case"YXZ":this._x=f*h*u+l*d*p,this._y=l*d*u-f*h*p,this._z=l*h*p-f*d*u,this._w=l*h*u+f*d*p;break;case"ZXY":this._x=f*h*u-l*d*p,this._y=l*d*u+f*h*p,this._z=l*h*p+f*d*u,this._w=l*h*u-f*d*p;break;case"ZYX":this._x=f*h*u-l*d*p,this._y=l*d*u+f*h*p,this._z=l*h*p-f*d*u,this._w=l*h*u+f*d*p;break;case"YZX":this._x=f*h*u+l*d*p,this._y=l*d*u+f*h*p,this._z=l*h*p-f*d*u,this._w=l*h*u-f*d*p;break;case"XZY":this._x=f*h*u-l*d*p,this._y=l*d*u-f*h*p,this._z=l*h*p+f*d*u,this._w=l*h*u+f*d*p;break;default:Gt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-c)*d,this._y=(r-l)*d,this._z=(o-i)*d}else if(n>a&&n>u){const d=2*Math.sqrt(1+n-a-u);this._w=(h-c)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(r+l)/d}else if(a>u){const d=2*Math.sqrt(1+a-n-u);this._w=(r-l)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(c+h)/d}else{const d=2*Math.sqrt(1+u-n-a);this._w=(o-i)/d,this._x=(r+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Qt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+i*l-r*c,this._y=i*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-i*a,this._w=o*h-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,i=-i,r=-r,o=-o,a=-a);let c=1-e;if(a<.9995){const l=Math.acos(a),h=Math.sin(l);c=Math.sin(c*l)/h,e=Math.sin(e*l)/h,this._x=this._x*c+n*e,this._y=this._y*c+i*e,this._z=this._z*c+r*e,this._w=this._w*c+o*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+i*e,this._z=this._z*c+r*e,this._w=this._w*c+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Bl=class Bl{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ac.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ac.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*i-a*n),h=2*(a*e-r*i),u=2*(r*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=i+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Qt(this.x,t.x,e.x),this.y=Qt(this.y,t.y,e.y),this.z=Qt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Qt(this.x,t,e),this.y=Qt(this.y,t,e),this.z=Qt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ro.copy(this).projectOnVector(t),this.sub(Ro)}reflect(t){return this.sub(Ro.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Qt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Bl.prototype.isVector3=!0;let F=Bl;const Ro=new F,ac=new ve,Hl=class Hl{constructor(t,e,n,i,r,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,c,l)}set(t,e,n,i,r,o,a,c,l){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],d=n[5],p=n[8],x=i[0],g=i[3],m=i[6],S=i[1],E=i[4],v=i[7],M=i[2],w=i[5],P=i[8];return r[0]=o*x+a*S+c*M,r[3]=o*g+a*E+c*w,r[6]=o*m+a*v+c*P,r[1]=l*x+h*S+u*M,r[4]=l*g+h*E+u*w,r[7]=l*m+h*v+u*P,r[2]=f*x+d*S+p*M,r[5]=f*g+d*E+p*w,r[8]=f*m+d*v+p*P,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+i*r*l-i*o*c}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,f=a*c-h*r,d=l*r-o*c,p=e*u+n*f+i*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/p;return t[0]=u*x,t[1]=(i*l-h*n)*x,t[2]=(a*n-i*o)*x,t[3]=f*x,t[4]=(h*e-i*c)*x,t[5]=(i*r-a*e)*x,t[6]=d*x,t[7]=(n*c-l*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-i*l,i*c,-i*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return ds("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Co.makeScale(t,e)),this}rotate(t){return ds("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Co.makeRotation(-t)),this}translate(t,e){return ds("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Co.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Hl.prototype.isMatrix3=!0;let Xt=Hl;const Co=new Xt,lc=new Xt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),cc=new Xt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ud(){const s={enabled:!0,workingColorSpace:Qr,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===he&&(i.r=ni(i.r),i.g=ni(i.g),i.b=ni(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===he&&(i.r=ps(i.r),i.g=ps(i.g),i.b=ps(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===vi?jr:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return ds("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return ds("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Qr]:{primaries:t,whitePoint:n,transfer:jr,toXYZ:lc,fromXYZ:cc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Le},outputColorSpaceConfig:{drawingBufferColorSpace:Le}},[Le]:{primaries:t,whitePoint:n,transfer:he,toXYZ:lc,fromXYZ:cc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Le}}}),s}const ee=ud();function ni(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ps(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Bi;class fd{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Bi===void 0&&(Bi=tr("canvas")),Bi.width=t.width,Bi.height=t.height;const i=Bi.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=Bi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=tr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=ni(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ni(e[n]/255)*255):e[n]=ni(e[n]);return{data:e,width:t.width,height:t.height}}else return Gt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let dd=0;class bl{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:dd++}),this.uuid=ei(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Po(i[o].image)):r.push(Po(i[o]))}else r=Po(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function Po(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?fd.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Gt("Texture: Unable to serialize Texture."),{})}let pd=0;const Lo=new F;class Ge extends Ni{constructor(t=Ge.DEFAULT_IMAGE,e=Ge.DEFAULT_MAPPING,n=Qn,i=Qn,r=Be,o=yi,a=hn,c=tn,l=Ge.DEFAULT_ANISOTROPY,h=vi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:pd++}),this.uuid=ei(),this.name="",this.source=new bl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Bt(0,0),this.repeat=new Bt(1,1),this.center=new Bt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Lo).x}get height(){return this.source.getSize(Lo).y}get depth(){return this.source.getSize(Lo).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){Gt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){Gt(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==tu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ba:t.x=t.x-Math.floor(t.x);break;case Qn:t.x=t.x<0?0:1;break;case wa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ba:t.y=t.y-Math.floor(t.y);break;case Qn:t.y=t.y<0?0:1;break;case wa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ge.DEFAULT_IMAGE=null;Ge.DEFAULT_MAPPING=tu;Ge.DEFAULT_ANISOTROPY=1;const Gl=class Gl{constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const c=t.elements,l=c[0],h=c[4],u=c[8],f=c[1],d=c[5],p=c[9],x=c[2],g=c[6],m=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(p+g)<.1&&Math.abs(l+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const E=(l+1)/2,v=(d+1)/2,M=(m+1)/2,w=(h+f)/4,P=(u+x)/4,_=(p+g)/4;return E>v&&E>M?E<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(E),i=w/n,r=P/n):v>M?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=w/i,r=_/i):M<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(M),n=P/r,i=_/r),this.set(n,i,r,e),this}let S=Math.sqrt((g-p)*(g-p)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(S)<.001&&(S=1),this.x=(g-p)/S,this.y=(u-x)/S,this.z=(f-h)/S,this.w=Math.acos((l+d+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Qt(this.x,t.x,e.x),this.y=Qt(this.y,t.y,e.y),this.z=Qt(this.z,t.z,e.z),this.w=Qt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Qt(this.x,t,e),this.y=Qt(this.y,t,e),this.z=Qt(this.z,t,e),this.w=Qt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Gl.prototype.isVector4=!0;let ge=Gl;class md extends Ni{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Be,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ge(0,0,t,e),this.scissorTest=!1,this.viewport=new ge(0,0,t,e),this.textures=[];const i={width:t,height:e,depth:n.depth},r=new Ge(i),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:Be,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const i=Object.assign({},t.textures[e].image);this.textures[e].source=new bl(i)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class mn extends md{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class cu extends Ge{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=ke,this.minFilter=ke,this.wrapR=Qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class gd extends Ge{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=ke,this.minFilter=ke,this.wrapR=Qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}const mo=class mo{constructor(t,e,n,i,r,o,a,c,l,h,u,f,d,p,x,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,c,l,h,u,f,d,p,x,g)}set(t,e,n,i,r,o,a,c,l,h,u,f,d,p,x,g){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=i,m[1]=r,m[5]=o,m[9]=a,m[13]=c,m[2]=l,m[6]=h,m[10]=u,m[14]=f,m[3]=d,m[7]=p,m[11]=x,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new mo().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,n=t.elements,i=1/Hi.setFromMatrixColumn(t,0).length(),r=1/Hi.setFromMatrixColumn(t,1).length(),o=1/Hi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const f=o*h,d=o*u,p=a*h,x=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=d+p*l,e[5]=f-x*l,e[9]=-a*c,e[2]=x-f*l,e[6]=p+d*l,e[10]=o*c}else if(t.order==="YXZ"){const f=c*h,d=c*u,p=l*h,x=l*u;e[0]=f+x*a,e[4]=p*a-d,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=d*a-p,e[6]=x+f*a,e[10]=o*c}else if(t.order==="ZXY"){const f=c*h,d=c*u,p=l*h,x=l*u;e[0]=f-x*a,e[4]=-o*u,e[8]=p+d*a,e[1]=d+p*a,e[5]=o*h,e[9]=x-f*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const f=o*h,d=o*u,p=a*h,x=a*u;e[0]=c*h,e[4]=p*l-d,e[8]=f*l+x,e[1]=c*u,e[5]=x*l+f,e[9]=d*l-p,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const f=o*c,d=o*l,p=a*c,x=a*l;e[0]=c*h,e[4]=x-f*u,e[8]=p*u+d,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=d*u+p,e[10]=f-x*u}else if(t.order==="XZY"){const f=o*c,d=o*l,p=a*c,x=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=f*u+x,e[5]=o*h,e[9]=d*u-p,e[2]=p*u-d,e[6]=a*h,e[10]=x*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(xd,t,_d)}lookAt(t,e,n){const i=this.elements;return sn.subVectors(t,e),sn.lengthSq()===0&&(sn.z=1),sn.normalize(),li.crossVectors(n,sn),li.lengthSq()===0&&(Math.abs(n.z)===1?sn.x+=1e-4:sn.z+=1e-4,sn.normalize(),li.crossVectors(n,sn)),li.normalize(),lr.crossVectors(sn,li),i[0]=li.x,i[4]=lr.x,i[8]=sn.x,i[1]=li.y,i[5]=lr.y,i[9]=sn.y,i[2]=li.z,i[6]=lr.z,i[10]=sn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],d=n[13],p=n[2],x=n[6],g=n[10],m=n[14],S=n[3],E=n[7],v=n[11],M=n[15],w=i[0],P=i[4],_=i[8],y=i[12],R=i[1],L=i[5],U=i[9],V=i[13],H=i[2],G=i[6],J=i[10],W=i[14],tt=i[3],B=i[7],Q=i[11],st=i[15];return r[0]=o*w+a*R+c*H+l*tt,r[4]=o*P+a*L+c*G+l*B,r[8]=o*_+a*U+c*J+l*Q,r[12]=o*y+a*V+c*W+l*st,r[1]=h*w+u*R+f*H+d*tt,r[5]=h*P+u*L+f*G+d*B,r[9]=h*_+u*U+f*J+d*Q,r[13]=h*y+u*V+f*W+d*st,r[2]=p*w+x*R+g*H+m*tt,r[6]=p*P+x*L+g*G+m*B,r[10]=p*_+x*U+g*J+m*Q,r[14]=p*y+x*V+g*W+m*st,r[3]=S*w+E*R+v*H+M*tt,r[7]=S*P+E*L+v*G+M*B,r[11]=S*_+E*U+v*J+M*Q,r[15]=S*y+E*V+v*W+M*st,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],f=t[10],d=t[14],p=t[3],x=t[7],g=t[11],m=t[15],S=c*d-l*f,E=a*d-l*u,v=a*f-c*u,M=o*d-l*h,w=o*f-c*h,P=o*u-a*h;return e*(x*S-g*E+m*v)-n*(p*S-g*M+m*w)+i*(p*E-x*M+m*P)-r*(p*v-x*w+g*P)}determinantAffine(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[1],o=t[5],a=t[9],c=t[2],l=t[6],h=t[10];return e*(o*h-a*l)-n*(r*h-a*c)+i*(r*l-o*c)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],f=t[10],d=t[11],p=t[12],x=t[13],g=t[14],m=t[15],S=e*a-n*o,E=e*c-i*o,v=e*l-r*o,M=n*c-i*a,w=n*l-r*a,P=i*l-r*c,_=h*x-u*p,y=h*g-f*p,R=h*m-d*p,L=u*g-f*x,U=u*m-d*x,V=f*m-d*g,H=S*V-E*U+v*L+M*R-w*y+P*_;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const G=1/H;return t[0]=(a*V-c*U+l*L)*G,t[1]=(i*U-n*V-r*L)*G,t[2]=(x*P-g*w+m*M)*G,t[3]=(f*w-u*P-d*M)*G,t[4]=(c*R-o*V-l*y)*G,t[5]=(e*V-i*R+r*y)*G,t[6]=(g*v-p*P-m*E)*G,t[7]=(h*P-f*v+d*E)*G,t[8]=(o*U-a*R+l*_)*G,t[9]=(n*R-e*U-r*_)*G,t[10]=(p*w-x*v+m*S)*G,t[11]=(u*v-h*w-d*S)*G,t[12]=(a*y-o*L-c*_)*G,t[13]=(e*L-n*y+i*_)*G,t[14]=(x*E-p*M-g*S)*G,t[15]=(h*M-u*E+f*S)*G,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*o,0,l*c-i*a,h*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,f=r*l,d=r*h,p=r*u,x=o*h,g=o*u,m=a*u,S=c*l,E=c*h,v=c*u,M=n.x,w=n.y,P=n.z;return i[0]=(1-(x+m))*M,i[1]=(d+v)*M,i[2]=(p-E)*M,i[3]=0,i[4]=(d-v)*w,i[5]=(1-(f+m))*w,i[6]=(g+S)*w,i[7]=0,i[8]=(p+E)*P,i[9]=(g-S)*P,i[10]=(1-(f+x))*P,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=Hi.set(i[0],i[1],i[2]).length();const a=Hi.set(i[4],i[5],i[6]).length(),c=Hi.set(i[8],i[9],i[10]).length();r<0&&(o=-o),yn.copy(this);const l=1/o,h=1/a,u=1/c;return yn.elements[0]*=l,yn.elements[1]*=l,yn.elements[2]*=l,yn.elements[4]*=h,yn.elements[5]*=h,yn.elements[6]*=h,yn.elements[8]*=u,yn.elements[9]*=u,yn.elements[10]*=u,e.setFromRotationMatrix(yn),n.x=o,n.y=a,n.z=c,this}makePerspective(t,e,n,i,r,o,a=Nn,c=!1){const l=this.elements,h=2*r/(e-t),u=2*r/(n-i),f=(e+t)/(e-t),d=(n+i)/(n-i);let p,x;if(c)p=r/(o-r),x=o*r/(o-r);else if(a===Nn)p=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===js)p=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=Nn,c=!1){const l=this.elements,h=2/(e-t),u=2/(n-i),f=-(e+t)/(e-t),d=-(n+i)/(n-i);let p,x;if(c)p=1/(o-r),x=o/(o-r);else if(a===Nn)p=-2/(o-r),x=-(o+r)/(o-r);else if(a===js)p=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=u,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=p,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};mo.prototype.isMatrix4=!0;let ne=mo;const Hi=new F,yn=new ne,xd=new F(0,0,0),_d=new F(1,1,1),li=new F,lr=new F,sn=new F,hc=new ne,uc=new ve;class vn{constructor(t=0,e=0,n=0,i=vn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],h=i[9],u=i[2],f=i[6],d=i[10];switch(e){case"XYZ":this._y=Math.asin(Qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Qt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Qt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Qt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Qt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Gt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return hc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(hc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return uc.setFromEuler(this),this.setFromQuaternion(uc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}vn.DEFAULT_ORDER="XYZ";class wl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let vd=0;const fc=new F,Gi=new ve,On=new ne,cr=new F,Ms=new F,Md=new F,yd=new ve,dc=new F(1,0,0),pc=new F(0,1,0),mc=new F(0,0,1),gc={type:"added"},Sd={type:"removed"},Vi={type:"childadded",child:null},Io={type:"childremoved",child:null};class Ie extends Ni{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vd++}),this.uuid=ei(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ie.DEFAULT_UP.clone();const t=new F,e=new vn,n=new ve,i=new F(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ne},normalMatrix:{value:new Xt}}),this.matrix=new ne,this.matrixWorld=new ne,this.matrixAutoUpdate=Ie.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ie.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new wl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Gi.setFromAxisAngle(t,e),this.quaternion.multiply(Gi),this}rotateOnWorldAxis(t,e){return Gi.setFromAxisAngle(t,e),this.quaternion.premultiply(Gi),this}rotateX(t){return this.rotateOnAxis(dc,t)}rotateY(t){return this.rotateOnAxis(pc,t)}rotateZ(t){return this.rotateOnAxis(mc,t)}translateOnAxis(t,e){return fc.copy(t).applyQuaternion(this.quaternion),this.position.add(fc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(dc,t)}translateY(t){return this.translateOnAxis(pc,t)}translateZ(t){return this.translateOnAxis(mc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(On.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?cr.copy(t):cr.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ms.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?On.lookAt(Ms,cr,this.up):On.lookAt(cr,Ms,this.up),this.quaternion.setFromRotationMatrix(On),i&&(On.extractRotation(i.matrixWorld),Gi.setFromRotationMatrix(On),this.quaternion.premultiply(Gi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ie("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(gc),Vi.child=t,this.dispatchEvent(Vi),Vi.child=null):ie("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Sd),Io.child=t,this.dispatchEvent(Io),Io.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),On.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),On.multiply(t.parent.matrixWorld)),t.applyMatrix4(On),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(gc),Vi.child=t,this.dispatchEvent(Vi),Vi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ms,t,Md),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ms,yd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,i=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*i,r[13]+=n-r[1]*e-r[5]*n-r[9]*i,r[14]+=i-r[2]*e-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){const r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),d=o(t.animations),p=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),p.length>0&&(n.nodes=p)}return n.object=i,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Ie.DEFAULT_UP=new F(0,1,0);Ie.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ie.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Pe extends Ie{constructor(){super(),this.isGroup=!0,this.type="Group"}}const bd={type:"move"};class Do{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const x of t.hand.values()){const g=e.getJointPose(x,n),m=this._getHandJoint(l,x);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,p=.005;l.inputState.pinching&&f>d+p?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=d-p&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(bd)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Pe;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const hu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ci={h:0,s:0,l:0},hr={h:0,s:0,l:0};function Uo(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class kt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Le){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ee.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=ee.workingColorSpace){return this.r=t,this.g=e,this.b=n,ee.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=ee.workingColorSpace){if(t=Sl(t,1),e=Qt(e,0,1),n=Qt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Uo(o,r,t+1/3),this.g=Uo(o,r,t),this.b=Uo(o,r,t-1/3)}return ee.colorSpaceToWorking(this,i),this}setStyle(t,e=Le){function n(r){r!==void 0&&parseFloat(r)<1&&Gt("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Gt("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Gt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Le){const n=hu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Gt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ni(t.r),this.g=ni(t.g),this.b=ni(t.b),this}copyLinearToSRGB(t){return this.r=ps(t.r),this.g=ps(t.g),this.b=ps(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Le){return ee.workingToColorSpace(qe.copy(this),t),Math.round(Qt(qe.r*255,0,255))*65536+Math.round(Qt(qe.g*255,0,255))*256+Math.round(Qt(qe.b*255,0,255))}getHexString(t=Le){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ee.workingColorSpace){ee.workingToColorSpace(qe.copy(this),e);const n=qe.r,i=qe.g,r=qe.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(i-r)/u+(i<r?6:0);break;case i:c=(r-n)/u+2;break;case r:c=(n-i)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=ee.workingColorSpace){return ee.workingToColorSpace(qe.copy(this),e),t.r=qe.r,t.g=qe.g,t.b=qe.b,t}getStyle(t=Le){ee.workingToColorSpace(qe.copy(this),t);const e=qe.r,n=qe.g,i=qe.b;return t!==Le?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(ci),this.setHSL(ci.h+t,ci.s+e,ci.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ci),t.getHSL(hr);const n=Xs(ci.h,hr.h,e),i=Xs(ci.s,hr.s,e),r=Xs(ci.l,hr.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const qe=new kt;kt.NAMES=hu;class El extends Ie{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new vn,this.environmentIntensity=1,this.environmentRotation=new vn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}const Sn=new F,kn=new F,No=new F,Bn=new F,Wi=new F,Xi=new F,xc=new F,Fo=new F,zo=new F,Oo=new F,ko=new ge,Bo=new ge,Ho=new ge;class pn{constructor(t=new F,e=new F,n=new F){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Sn.subVectors(t,e),i.cross(Sn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){Sn.subVectors(i,e),kn.subVectors(n,e),No.subVectors(t,e);const o=Sn.dot(Sn),a=Sn.dot(kn),c=Sn.dot(No),l=kn.dot(kn),h=kn.dot(No),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;const f=1/u,d=(l*c-a*h)*f,p=(o*h-a*c)*f;return r.set(1-d-p,p,d)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Bn)===null?!1:Bn.x>=0&&Bn.y>=0&&Bn.x+Bn.y<=1}static getInterpolation(t,e,n,i,r,o,a,c){return this.getBarycoord(t,e,n,i,Bn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Bn.x),c.addScaledVector(o,Bn.y),c.addScaledVector(a,Bn.z),c)}static getInterpolatedAttribute(t,e,n,i,r,o){return ko.setScalar(0),Bo.setScalar(0),Ho.setScalar(0),ko.fromBufferAttribute(t,e),Bo.fromBufferAttribute(t,n),Ho.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(ko,r.x),o.addScaledVector(Bo,r.y),o.addScaledVector(Ho,r.z),o}static isFrontFacing(t,e,n,i){return Sn.subVectors(n,e),kn.subVectors(t,e),Sn.cross(kn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Sn.subVectors(this.c,this.b),kn.subVectors(this.a,this.b),Sn.cross(kn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return pn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return pn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return pn.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return pn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return pn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let o,a;Wi.subVectors(i,n),Xi.subVectors(r,n),Fo.subVectors(t,n);const c=Wi.dot(Fo),l=Xi.dot(Fo);if(c<=0&&l<=0)return e.copy(n);zo.subVectors(t,i);const h=Wi.dot(zo),u=Xi.dot(zo);if(h>=0&&u<=h)return e.copy(i);const f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(Wi,o);Oo.subVectors(t,r);const d=Wi.dot(Oo),p=Xi.dot(Oo);if(p>=0&&d<=p)return e.copy(r);const x=d*l-c*p;if(x<=0&&l>=0&&p<=0)return a=l/(l-p),e.copy(n).addScaledVector(Xi,a);const g=h*p-d*u;if(g<=0&&u-h>=0&&d-p>=0)return xc.subVectors(r,i),a=(u-h)/(u-h+(d-p)),e.copy(i).addScaledVector(xc,a);const m=1/(g+x+f);return o=x*m,a=f*m,e.copy(n).addScaledVector(Wi,o).addScaledVector(Xi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Fi{constructor(t=new F(1/0,1/0,1/0),e=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(bn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(bn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=bn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,bn):bn.fromBufferAttribute(r,o),bn.applyMatrix4(t.matrixWorld),this.expandByPoint(bn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ur.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ur.copy(n.boundingBox)),ur.applyMatrix4(t.matrixWorld),this.union(ur)}const i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,bn),bn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ys),fr.subVectors(this.max,ys),qi.subVectors(t.a,ys),Yi.subVectors(t.b,ys),$i.subVectors(t.c,ys),hi.subVectors(Yi,qi),ui.subVectors($i,Yi),wi.subVectors(qi,$i);let e=[0,-hi.z,hi.y,0,-ui.z,ui.y,0,-wi.z,wi.y,hi.z,0,-hi.x,ui.z,0,-ui.x,wi.z,0,-wi.x,-hi.y,hi.x,0,-ui.y,ui.x,0,-wi.y,wi.x,0];return!Go(e,qi,Yi,$i,fr)||(e=[1,0,0,0,1,0,0,0,1],!Go(e,qi,Yi,$i,fr))?!1:(dr.crossVectors(hi,ui),e=[dr.x,dr.y,dr.z],Go(e,qi,Yi,$i,fr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,bn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(bn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Hn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Hn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Hn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Hn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Hn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Hn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Hn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Hn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Hn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Hn=[new F,new F,new F,new F,new F,new F,new F,new F],bn=new F,ur=new Fi,qi=new F,Yi=new F,$i=new F,hi=new F,ui=new F,wi=new F,ys=new F,fr=new F,dr=new F,Ei=new F;function Go(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Ei.fromArray(s,r);const a=i.x*Math.abs(Ei.x)+i.y*Math.abs(Ei.y)+i.z*Math.abs(Ei.z),c=t.dot(Ei),l=e.dot(Ei),h=n.dot(Ei);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const Zn=wd();function wd(){const s=new ArrayBuffer(4),t=new Float32Array(s),e=new Uint32Array(s),n=new Uint32Array(512),i=new Uint32Array(512);for(let c=0;c<256;++c){const l=c-127;l<-27?(n[c]=0,n[c|256]=32768,i[c]=24,i[c|256]=24):l<-14?(n[c]=1024>>-l-14,n[c|256]=1024>>-l-14|32768,i[c]=-l-1,i[c|256]=-l-1):l<=15?(n[c]=l+15<<10,n[c|256]=l+15<<10|32768,i[c]=13,i[c|256]=13):l<128?(n[c]=31744,n[c|256]=64512,i[c]=24,i[c|256]=24):(n[c]=31744,n[c|256]=64512,i[c]=13,i[c|256]=13)}const r=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let c=1;c<1024;++c){let l=c<<13,h=0;for(;!(l&8388608);)l<<=1,h-=8388608;l&=-8388609,h+=947912704,r[c]=l|h}for(let c=1024;c<2048;++c)r[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)o[c]=c<<23;o[31]=1199570944,o[32]=2147483648;for(let c=33;c<63;++c)o[c]=2147483648+(c-32<<23);o[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(a[c]=1024);return{floatView:t,uint32View:e,baseTable:n,shiftTable:i,mantissaTable:r,exponentTable:o,offsetTable:a}}function Ed(s){Math.abs(s)>65504&&Gt("DataUtils.toHalfFloat(): Value out of range."),s=Qt(s,-65504,65504),Zn.floatView[0]=s;const t=Zn.uint32View[0],e=t>>23&511;return Zn.baseTable[e]+((t&8388607)>>Zn.shiftTable[e])}function Td(s){const t=s>>10;return Zn.uint32View[0]=Zn.mantissaTable[Zn.offsetTable[t]+(s&1023)]+Zn.exponentTable[t],Zn.floatView[0]}class Ad{static toHalfFloat(t){return Ed(t)}static fromHalfFloat(t){return Td(t)}}const Re=new F,pr=new Bt;let Rd=0;class gn extends Ni{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Rd++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=au,this.updateRanges=[],this.gpuType=Tn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)pr.fromBufferAttribute(this,e),pr.applyMatrix3(t),this.setXY(e,pr.x,pr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyMatrix3(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyMatrix4(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyNormalMatrix(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.transformDirection(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=wn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ue(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=wn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=wn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=wn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=wn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array),i=ue(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array),i=ue(i,this.array),r=ue(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}}class uu extends gn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class fu extends gn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class se extends gn{constructor(t,e,n){super(new Float32Array(t),e,n)}}const Cd=new Fi,Ss=new F,Vo=new F;class _s{constructor(t=new F,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Cd.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ss.subVectors(t,this.center);const e=Ss.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Ss,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Vo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ss.copy(t.center).add(Vo)),this.expandByPoint(Ss.copy(t.center).sub(Vo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let Pd=0;const fn=new ne,Wo=new Ie,Ki=new F,rn=new Fi,bs=new Fi,ze=new F;class De extends Ni{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Pd++}),this.uuid=ei(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Xf(t)?fu:uu)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Xt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return fn.makeRotationFromQuaternion(t),this.applyMatrix4(fn),this}rotateX(t){return fn.makeRotationX(t),this.applyMatrix4(fn),this}rotateY(t){return fn.makeRotationY(t),this.applyMatrix4(fn),this}rotateZ(t){return fn.makeRotationZ(t),this.applyMatrix4(fn),this}translate(t,e,n){return fn.makeTranslation(t,e,n),this.applyMatrix4(fn),this}scale(t,e,n){return fn.makeScale(t,e,n),this.applyMatrix4(fn),this}lookAt(t){return Wo.lookAt(t),Wo.updateMatrix(),this.applyMatrix4(Wo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ki).negate(),this.translate(Ki.x,Ki.y,Ki.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,r=t.length;i<r;i++){const o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new se(n,3))}else{const n=Math.min(t.length,e.count);for(let i=0;i<n;i++){const r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&Gt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ie("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];rn.setFromBufferAttribute(r),this.morphTargetsRelative?(ze.addVectors(this.boundingBox.min,rn.min),this.boundingBox.expandByPoint(ze),ze.addVectors(this.boundingBox.max,rn.max),this.boundingBox.expandByPoint(ze)):(this.boundingBox.expandByPoint(rn.min),this.boundingBox.expandByPoint(rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ie('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _s);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ie("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(t){const n=this.boundingSphere.center;if(rn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];bs.setFromBufferAttribute(a),this.morphTargetsRelative?(ze.addVectors(rn.min,bs.min),rn.expandByPoint(ze),ze.addVectors(rn.max,bs.max),rn.expandByPoint(ze)):(rn.expandByPoint(bs.min),rn.expandByPoint(bs.max))}rn.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)ze.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(ze));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)ze.fromBufferAttribute(a,l),c&&(Ki.fromBufferAttribute(t,l),ze.add(Ki)),i=Math.max(i,n.distanceToSquared(ze))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&ie('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ie("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,r=e.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new gn(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));const a=[],c=[];for(let _=0;_<n.count;_++)a[_]=new F,c[_]=new F;const l=new F,h=new F,u=new F,f=new Bt,d=new Bt,p=new Bt,x=new F,g=new F;function m(_,y,R){l.fromBufferAttribute(n,_),h.fromBufferAttribute(n,y),u.fromBufferAttribute(n,R),f.fromBufferAttribute(r,_),d.fromBufferAttribute(r,y),p.fromBufferAttribute(r,R),h.sub(l),u.sub(l),d.sub(f),p.sub(f);const L=1/(d.x*p.y-p.x*d.y);isFinite(L)&&(x.copy(h).multiplyScalar(p.y).addScaledVector(u,-d.y).multiplyScalar(L),g.copy(u).multiplyScalar(d.x).addScaledVector(h,-p.x).multiplyScalar(L),a[_].add(x),a[y].add(x),a[R].add(x),c[_].add(g),c[y].add(g),c[R].add(g))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let _=0,y=S.length;_<y;++_){const R=S[_],L=R.start,U=R.count;for(let V=L,H=L+U;V<H;V+=3)m(t.getX(V+0),t.getX(V+1),t.getX(V+2))}const E=new F,v=new F,M=new F,w=new F;function P(_){M.fromBufferAttribute(i,_),w.copy(M);const y=a[_];E.copy(y),E.sub(M.multiplyScalar(M.dot(y))).normalize(),v.crossVectors(w,y);const L=v.dot(c[_])<0?-1:1;o.setXYZW(_,E.x,E.y,E.z,L)}for(let _=0,y=S.length;_<y;++_){const R=S[_],L=R.start,U=R.count;for(let V=L,H=L+U;V<H;V+=3)P(t.getX(V+0)),P(t.getX(V+1)),P(t.getX(V+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new gn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new F,r=new F,o=new F,a=new F,c=new F,l=new F,h=new F,u=new F;if(t)for(let f=0,d=t.count;f<d;f+=3){const p=t.getX(f+0),x=t.getX(f+1),g=t.getX(f+2);i.fromBufferAttribute(e,p),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,g),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,p),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,g),a.add(h),c.add(h),l.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let f=0,d=e.count;f<d;f+=3)i.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ze.fromBufferAttribute(t,e),ze.normalize(),t.setXYZ(e,ze.x,ze.y,ze.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,u=a.normalized,f=new l.constructor(c.length*h);let d=0,p=0;for(let x=0,g=c.length;x<g;x++){a.isInterleavedBufferAttribute?d=c[x]*a.data.stride+a.offset:d=c[x]*h;for(let m=0;m<h;m++)f[p++]=l[d++]}return new gn(f,h,u)}if(this.index===null)return Gt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new De,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=t(c,n);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){const f=l[h],d=t(f,n);c.push(d)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){const d=l[u];h.push(d.toJSON(t.data))}h.length>0&&(i[c]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const i=t.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],u=r[l];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ld{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=au,this.updateRanges=[],this.version=0,this.uuid=ei()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ei()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ei()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));const e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}}const $e=new F;class eo{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.applyMatrix4(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.applyNormalMatrix(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.transformDirection(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=wn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ue(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=wn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=wn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=wn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=wn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array),i=ue(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array),i=ue(i,this.array),r=ue(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){to("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new gn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new eo(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){to("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Xo=new F,Id=new F,Dd=new Xt;class qn{constructor(t=new F(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Xo.subVectors(n,e).cross(Id.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){const i=t.delta(Xo),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(i,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Dd.getNormalMatrix(t),i=this.coplanarPoint(Xo).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let Ud=0;class zi extends Ni{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ud++}),this.uuid=ei(),this.name="",this.type="Material",this.blending=Vs,this.side=Li,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qh,this.blendDst=Yh,this.blendEquation=as,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new kt(0,0,0),this.blendAlpha=0,this.depthFunc=Zs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Of,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ao,this.stencilZFail=Ao,this.stencilZPass=Ao,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){Gt(`Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){Gt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new kt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new qn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Bt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Bt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class du extends zi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new kt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Zi;const ws=new F,Ji=new F,Qi=new F,ji=new Bt,Es=new Bt,pu=new ne,mr=new F,Ts=new F,gr=new F,_c=new Bt,qo=new Bt,vc=new Bt;class Nd extends Ie{constructor(t=new du){if(super(),this.isSprite=!0,this.type="Sprite",Zi===void 0){Zi=new De;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ld(e,5);Zi.setIndex([0,1,2,0,2,3]),Zi.setAttribute("position",new eo(n,3,0,!1)),Zi.setAttribute("uv",new eo(n,2,3,!1))}this.geometry=Zi,this.material=t,this.center=new Bt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&ie('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ji.setFromMatrixScale(this.matrixWorld),pu.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Qi.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ji.multiplyScalar(-Qi.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const o=this.center;xr(mr.set(-.5,-.5,0),Qi,o,Ji,i,r),xr(Ts.set(.5,-.5,0),Qi,o,Ji,i,r),xr(gr.set(.5,.5,0),Qi,o,Ji,i,r),_c.set(0,0),qo.set(1,0),vc.set(1,1);let a=t.ray.intersectTriangle(mr,Ts,gr,!1,ws);if(a===null&&(xr(Ts.set(-.5,.5,0),Qi,o,Ji,i,r),qo.set(0,1),a=t.ray.intersectTriangle(mr,gr,Ts,!1,ws),a===null))return;const c=t.ray.origin.distanceTo(ws);c<t.near||c>t.far||e.push({distance:c,point:ws.clone(),uv:pn.getInterpolation(ws,mr,Ts,gr,_c,qo,vc,new Bt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function xr(s,t,e,n,i,r){ji.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(Es.x=r*ji.x-i*ji.y,Es.y=i*ji.x+r*ji.y):Es.copy(ji),s.copy(t),s.x+=Es.x,s.y+=Es.y,s.applyMatrix4(pu)}const Gn=new F,Yo=new F,_r=new F,vr=new F;class Tl{constructor(t=new F,e=new F(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Gn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Gn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Gn.copy(this.origin).addScaledVector(this.direction,e),Gn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Yo.copy(t).add(e).multiplyScalar(.5),_r.copy(e).sub(t).normalize(),vr.copy(this.origin).sub(Yo);const r=t.distanceTo(e)*.5,o=-this.direction.dot(_r),a=vr.dot(this.direction),c=-vr.dot(_r),l=vr.lengthSq(),h=Math.abs(1-o*o);let u,f,d,p;if(h>0)if(u=o*c-a,f=o*a-c,p=r*h,u>=0)if(f>=-p)if(f<=p){const x=1/h;u*=x,f*=x,d=u*(u+o*f+2*a)+f*(o*u+f+2*c)+l}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f<=-p?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l):f<=p?(u=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+l):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Yo).addScaledVector(_r,f),d}intersectSphere(t,e){if(t.radius<0)return null;Gn.subVectors(t.center,this.origin);const n=Gn.dot(this.direction),i=Gn.dot(Gn)-n*n,r=t.radius*t.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,i=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,i=(t.min.x-f.x)*l),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-f.z)*u,c=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,c=(t.min.z-f.z)*u),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Gn)!==null}intersectTriangle(t,e,n,i,r){const o=this.origin,a=this.direction,c=a.x,l=a.y,h=a.z,u=t.x-o.x,f=t.y-o.y,d=t.z-o.z,p=e.x-o.x,x=e.y-o.y,g=e.z-o.z,m=n.x-o.x,S=n.y-o.y,E=n.z-o.z,v=Math.abs(c),M=Math.abs(l),w=Math.abs(h);let P,_,y,R,L,U,V,H,G,J,W,tt;if(v>=M&&v>=w?(y=c,U=u,G=p,tt=m,c>=0?(P=l,_=h,R=f,L=d,V=x,H=g,J=S,W=E):(P=h,_=l,R=d,L=f,V=g,H=x,J=E,W=S)):M>=w?(y=l,U=f,G=x,tt=S,l>=0?(P=h,_=c,R=d,L=u,V=g,H=p,J=E,W=m):(P=c,_=h,R=u,L=d,V=p,H=g,J=m,W=E)):(y=h,U=d,G=g,tt=E,h>=0?(P=c,_=l,R=u,L=f,V=p,H=x,J=m,W=S):(P=l,_=c,R=f,L=u,V=x,H=p,J=S,W=m)),y===0)return null;const B=P/y,Q=_/y,st=1/y,ut=R-B*U,O=L-Q*U,X=V-B*G,z=H-Q*G,k=J-B*tt,C=W-Q*tt,T=k*z-C*X,I=ut*C-O*k,K=X*O-z*ut;if(i){if(T<0||I<0||K<0)return null}else if((T<0||I<0||K<0)&&(T>0||I>0||K>0))return null;const j=T+I+K;if(j===0)return null;const ft=st*(T*U+I*G+K*tt);return(j>0?ft<0:ft>0)?null:this.at(ft/j,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class jn extends zi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.combine=fl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Mc=new ne,Ti=new Tl,Mr=new _s,yc=new F,yr=new F,Sr=new F,br=new F,$o=new F,wr=new F,Sc=new F,Er=new F;class Ce extends Ie{constructor(t=new De,e=new jn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(r&&a){wr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],u=r[c];h!==0&&($o.fromBufferAttribute(u,t),o?wr.addScaledVector($o,h):wr.addScaledVector($o.sub(e),h))}e.add(wr)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Mr.copy(n.boundingSphere),Mr.applyMatrix4(r),Ti.copy(t.ray).recast(t.near),!(Mr.containsPoint(Ti.origin)===!1&&(Ti.intersectSphere(Mr,yc)===null||Ti.origin.distanceToSquared(yc)>(t.far-t.near)**2))&&(Mc.copy(r).invert(),Ti.copy(t.ray).applyMatrix4(Mc),!(n.boundingBox!==null&&Ti.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ti)))}_computeIntersections(t,e,n){let i;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,x=f.length;p<x;p++){const g=f[p],m=o[g.materialIndex],S=Math.max(g.start,d.start),E=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let v=S,M=E;v<M;v+=3){const w=a.getX(v),P=a.getX(v+1),_=a.getX(v+2);i=Tr(this,m,t,n,l,h,u,w,P,_),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{const p=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let g=p,m=x;g<m;g+=3){const S=a.getX(g),E=a.getX(g+1),v=a.getX(g+2);i=Tr(this,o,t,n,l,h,u,S,E,v),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let p=0,x=f.length;p<x;p++){const g=f[p],m=o[g.materialIndex],S=Math.max(g.start,d.start),E=Math.min(c.count,Math.min(g.start+g.count,d.start+d.count));for(let v=S,M=E;v<M;v+=3){const w=v,P=v+1,_=v+2;i=Tr(this,m,t,n,l,h,u,w,P,_),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{const p=Math.max(0,d.start),x=Math.min(c.count,d.start+d.count);for(let g=p,m=x;g<m;g+=3){const S=g,E=g+1,v=g+2;i=Tr(this,o,t,n,l,h,u,S,E,v),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}}}function Fd(s,t,e,n,i,r,o,a){let c;if(t.side===en?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,t.side===Li,a),c===null)return null;Er.copy(a),Er.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(Er);return l<e.near||l>e.far?null:{distance:l,point:Er.clone(),object:s}}function Tr(s,t,e,n,i,r,o,a,c,l){s.getVertexPosition(a,yr),s.getVertexPosition(c,Sr),s.getVertexPosition(l,br);const h=Fd(s,t,e,n,yr,Sr,br,Sc);if(h){const u=new F;pn.getBarycoord(Sc,yr,Sr,br,u),i&&(h.uv=pn.getInterpolatedAttribute(i,a,c,l,u,new Bt)),r&&(h.uv1=pn.getInterpolatedAttribute(r,a,c,l,u,new Bt)),o&&(h.normal=pn.getInterpolatedAttribute(o,a,c,l,u,new F),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:c,c:l,normal:new F,materialIndex:0};pn.getNormal(yr,Sr,br,f.normal),h.face=f,h.barycoord=u}return h}class gs extends Ge{constructor(t=null,e=1,n=1,i,r,o,a,c,l=ke,h=ke,u,f){super(null,o,a,c,l,h,i,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class bc extends gn{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const ts=new ne,wc=new ne,Ar=[],Ec=new Fi,zd=new ne,As=new Ce,Rs=new _s;class Yr extends Ce{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new bc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,zd)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Fi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ts),Ec.copy(t.boundingBox).applyMatrix4(ts),this.boundingBox.union(Ec)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new _s),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ts),Rs.copy(t.boundingSphere).applyMatrix4(ts),this.boundingSphere.union(Rs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(As.geometry=this.geometry,As.material=this.material,As.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Rs.copy(this.boundingSphere),Rs.applyMatrix4(n),t.ray.intersectsSphere(Rs)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,ts),wc.multiplyMatrices(n,ts),As.matrixWorld=wc,As.raycast(t,Ar);for(let o=0,a=Ar.length;o<a;o++){const c=Ar[o];c.instanceId=r,c.object=this,e.push(c)}Ar.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new bc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new gs(new Float32Array(i*this.count),i,this.count,xo,Tn));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=i*t;return r[c]=a,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Ai=new _s,Od=new Bt(.5,.5),Rr=new F;class Al{constructor(t=new qn,e=new qn,n=new qn,i=new qn,r=new qn,o=new qn){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Nn,n=!1){const i=this.planes,r=t.elements,o=r[0],a=r[1],c=r[2],l=r[3],h=r[4],u=r[5],f=r[6],d=r[7],p=r[8],x=r[9],g=r[10],m=r[11],S=r[12],E=r[13],v=r[14],M=r[15];if(i[0].setComponents(l-o,d-h,m-p,M-S).normalize(),i[1].setComponents(l+o,d+h,m+p,M+S).normalize(),i[2].setComponents(l+a,d+u,m+x,M+E).normalize(),i[3].setComponents(l-a,d-u,m-x,M-E).normalize(),n)i[4].setComponents(c,f,g,v).normalize(),i[5].setComponents(l-c,d-f,m-g,M-v).normalize();else if(i[4].setComponents(l-c,d-f,m-g,M-v).normalize(),e===Nn)i[5].setComponents(l+c,d+f,m+g,M+v).normalize();else if(e===js)i[5].setComponents(c,f,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ai.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ai.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ai)}intersectsSprite(t){Ai.center.set(0,0,0);const e=Od.distanceTo(t.center);return Ai.radius=.7071067811865476+e,Ai.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ai)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Rr.x=i.normal.x>0?t.max.x:t.min.x,Rr.y=i.normal.y>0?t.max.y:t.min.y,Rr.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Rr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class mu extends zi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new kt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const no=new F,io=new F,Tc=new ne,Cs=new Tl,Cr=new _s,Ko=new F,Ac=new F;class kd extends Ie{constructor(t=new De,e=new mu){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)no.fromBufferAttribute(e,i-1),io.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=no.distanceTo(io);t.setAttribute("lineDistance",new se(n,1))}else Gt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Cr.copy(n.boundingSphere),Cr.applyMatrix4(i),Cr.radius+=r,t.ray.intersectsSphere(Cr)===!1)return;Tc.copy(i).invert(),Cs.copy(t.ray).applyMatrix4(Tc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const d=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let x=d,g=p-1;x<g;x+=l){const m=h.getX(x),S=h.getX(x+1),E=Pr(this,t,Cs,c,m,S,x);E&&e.push(E)}if(this.isLineLoop){const x=h.getX(p-1),g=h.getX(d),m=Pr(this,t,Cs,c,x,g,p-1);m&&e.push(m)}}else{const d=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let x=d,g=p-1;x<g;x+=l){const m=Pr(this,t,Cs,c,x,x+1,x);m&&e.push(m)}if(this.isLineLoop){const x=Pr(this,t,Cs,c,p-1,d,p-1);x&&e.push(x)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Pr(s,t,e,n,i,r,o){const a=s.geometry.attributes.position;if(no.fromBufferAttribute(a,i),io.fromBufferAttribute(a,r),e.distanceSqToSegment(no,io,Ko,Ac)>n)return;Ko.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(Ko);if(!(l<t.near||l>t.far))return{distance:l,point:Ac.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}const Rc=new F,Cc=new F;class Bd extends kd{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)Rc.fromBufferAttribute(e,i),Cc.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Rc.distanceTo(Cc);t.setAttribute("lineDistance",new se(n,1))}else Gt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class gu extends Ge{constructor(t=[],e=Ii,n,i,r,o,a,c,l,h){super(t,e,n,i,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Rl extends Ge{constructor(t,e,n,i,r,o,a,c,l){super(t,e,n,i,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class nr extends Ge{constructor(t,e,n=zn,i,r,o,a=ke,c=ke,l,h=ii,u=1){if(h!==ii&&h!==Pi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:t,height:e,depth:u};super(f,i,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new bl(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class Hd extends nr{constructor(t,e=zn,n=Ii,i,r,o=ke,a=ke,c,l=ii){const h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,n,i,r,o,a,c,l),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class xu extends Ge{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class xn extends De{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],u=[];let f=0,d=0;p("z","y","x",-1,-1,n,e,t,o,r,0),p("z","y","x",1,-1,n,e,-t,o,r,1),p("x","z","y",1,1,t,n,e,i,o,2),p("x","z","y",1,-1,t,n,-e,i,o,3),p("x","y","z",1,-1,t,e,n,i,r,4),p("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new se(l,3)),this.setAttribute("normal",new se(h,3)),this.setAttribute("uv",new se(u,2));function p(x,g,m,S,E,v,M,w,P,_,y){const R=v/P,L=M/_,U=v/2,V=M/2,H=w/2,G=P+1,J=_+1;let W=0,tt=0;const B=new F;for(let Q=0;Q<J;Q++){const st=Q*L-V;for(let ut=0;ut<G;ut++){const O=ut*R-U;B[x]=O*S,B[g]=st*E,B[m]=H,l.push(B.x,B.y,B.z),B[x]=0,B[g]=0,B[m]=w>0?1:-1,h.push(B.x,B.y,B.z),u.push(ut/P),u.push(1-Q/_),W+=1}}for(let Q=0;Q<_;Q++)for(let st=0;st<P;st++){const ut=f+st+G*Q,O=f+st+G*(Q+1),X=f+(st+1)+G*(Q+1),z=f+(st+1)+G*Q;c.push(ut,O,z),c.push(O,X,z),tt+=6}a.addGroup(d,tt,y),d+=tt,f+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class qs extends De{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const r=[],o=[],a=[],c=[],l=new F,h=new Bt;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){const d=n+u/e*i;l.x=t*Math.cos(d),l.y=t*Math.sin(d),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new se(o,3)),this.setAttribute("normal",new se(a,3)),this.setAttribute("uv",new se(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qs(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class si extends De{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,u=t/a,f=e/c,d=[],p=[],x=[],g=[];for(let m=0;m<h;m++){const S=m*f-o;for(let E=0;E<l;E++){const v=E*u-r;p.push(v,-S,0),x.push(0,0,1),g.push(E/a),g.push(1-m/c)}}for(let m=0;m<c;m++)for(let S=0;S<a;S++){const E=S+l*m,v=S+l*(m+1),M=S+1+l*(m+1),w=S+1+l*m;d.push(E,v,w),d.push(v,M,w)}this.setIndex(d),this.setAttribute("position",new se(p,3)),this.setAttribute("normal",new se(x,3)),this.setAttribute("uv",new se(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new si(t.width,t.height,t.widthSegments,t.heightSegments)}}function xs(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];if(Pc(i))i.isRenderTargetTexture?(Gt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone();else if(Array.isArray(i))if(Pc(i[0])){const r=[];for(let o=0,a=i.length;o<a;o++)r[o]=i[o].clone();t[e][n]=r}else t[e][n]=i.slice();else t[e][n]=i}}return t}function Ke(s){const t={};for(let e=0;e<s.length;e++){const n=xs(s[e]);for(const i in n)t[i]=n[i]}return t}function Pc(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function Gd(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function _u(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ee.workingColorSpace}const Vd={clone:xs,merge:Ke};var Wd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Xd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class nn extends zi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Wd,this.fragmentShader=Xd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=xs(t.uniforms),this.uniformsGroups=Gd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const n in t.uniforms){const i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new kt().setHex(i.value);break;case"v2":this.uniforms[n].value=new Bt().fromArray(i.value);break;case"v3":this.uniforms[n].value=new F().fromArray(i.value);break;case"v4":this.uniforms[n].value=new ge().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Xt().fromArray(i.value);break;case"m4":this.uniforms[n].value=new ne().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class qd extends nn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class so extends zi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=el,this.normalScale=new Bt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.combine=fl,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Yd extends zi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ff,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class $d extends zi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Zo={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(Lc(s)||(this.files[s]=t))},get:function(s){if(this.enabled!==!1&&!Lc(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function Lc(s){try{const t=s.slice(s.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}class Kd{constructor(t,e,n){const i=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){const d=l[u],p=l[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Zd=new Kd;class Cl{constructor(t){this.manager=t!==void 0?t:Zd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}Cl.DEFAULT_MATERIAL_NAME="__DEFAULT";const es=new WeakMap;class Jd extends Cl{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=Zo.get(`image:${t}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0);else{let u=es.get(o);u===void 0&&(u=[],es.set(o,u)),u.push({onLoad:e,onError:i})}return o}const a=tr("img");function c(){h(),e&&e(this);const u=es.get(this)||[];for(let f=0;f<u.length;f++){const d=u[f];d.onLoad&&d.onLoad(this)}es.delete(this),r.manager.itemEnd(t)}function l(u){h(),i&&i(u),Zo.remove(`image:${t}`);const f=es.get(this)||[];for(let d=0;d<f.length;d++){const p=f[d];p.onError&&p.onError(u)}es.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Zo.add(`image:${t}`,a),r.manager.itemStart(t),a.src=t,a}}class nl extends Cl{constructor(t){super(t)}load(t,e,n,i){const r=new Ge,o=new Jd(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,i),r}}class vu extends Ie{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new kt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class Qd extends vu{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ie.DEFAULT_UP),this.updateMatrix(),this.groundColor=new kt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const Jo=new ne,Ic=new F,Dc=new F;class jd{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Bt(512,512),this.mapType=tn,this.map=null,this.mapPass=null,this.matrix=new ne,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Al,this._frameExtents=new Bt(1,1),this._viewportCount=1,this._viewports=[new ge(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera;Ic.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ic),Dc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Dc),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,i){Jo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Jo,t.coordinateSystem,t.reversedDepth);const r=this._frameExtents,o=i?i.z/r.x:1,a=i?i.w/r.y:1,c=i?i.x/r.x:0,l=i?i.y/r.y:0;t.coordinateSystem===js||t.reversedDepth?e.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,.5,.5,0,0,0,1),e.multiply(Jo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Lr=new F,Ir=new ve,Cn=new F;class Mu extends Ie{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ne,this.projectionMatrix=new ne,this.projectionMatrixInverse=new ne,this.coordinateSystem=Nn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Lr,Ir,Cn),Cn.x===1&&Cn.y===1&&Cn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Lr,Ir,Cn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Lr,Ir,Cn),Cn.x===1&&Cn.y===1&&Cn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Lr,Ir,Cn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const fi=new F,Uc=new Bt,Nc=new Bt;class je extends Mu{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=er*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ws*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return er*2*Math.atan(Math.tan(Ws*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){fi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(fi.x,fi.y).multiplyScalar(-t/fi.z),fi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(fi.x,fi.y).multiplyScalar(-t/fi.z)}getViewSize(t,e){return this.getViewBounds(t,Uc,Nc),e.subVectors(Nc,Uc)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ws*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,e-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class _o extends Mu{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=i+e,c=i-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class tp extends jd{constructor(){super(new _o(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ep extends vu{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ie.DEFAULT_UP),this.updateMatrix(),this.target=new Ie,this.shadow=new tp}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}const ns=-90,is=1;class np extends Ie{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new je(ns,is,t,e);i.layers=this.layers,this.add(i);const r=new je(ns,is,t,e);r.layers=this.layers,this.add(r);const o=new je(ns,is,t,e);o.layers=this.layers,this.add(o);const a=new je(ns,is,t,e);a.layers=this.layers,this.add(a);const c=new je(ns,is,t,e);c.layers=this.layers,this.add(c);const l=new je(ns,is,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===Nn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===js)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(n,0,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,4,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class ip extends je{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const Fc=new ne;class il{constructor(t,e,n=0,i=1/0){this.ray=new Tl(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new wl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):ie("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Fc.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Fc),this}intersectObject(t,e=!0,n=[]){return sl(t,this,n,e),n.sort(zc),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)sl(t[i],this,n,e);return n.sort(zc),n}}function zc(s,t){return s.distance-t.distance}function sl(s,t,e,n){let i=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let o=0,a=r.length;o<a;o++)sl(r[o],t,e,!0)}}const Vl=class Vl{constructor(t,e,n,i){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){const r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=i,this}};Vl.prototype.isMatrix2=!0;let Oc=Vl;function kc(s,t,e,n){const i=sp(n);switch(e){case ru:return s*t;case xo:return s*t/i.components*i.byteLength;case xl:return s*t/i.components*i.byteLength;case Di:return s*t*2/i.components*i.byteLength;case _l:return s*t*2/i.components*i.byteLength;case ou:return s*t*3/i.components*i.byteLength;case hn:return s*t*4/i.components*i.byteLength;case vl:return s*t*4/i.components*i.byteLength;case Vr:case Wr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Xr:case qr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Ta:case Ra:return Math.max(s,16)*Math.max(t,8)/4;case Ea:case Aa:return Math.max(s,8)*Math.max(t,8)/2;case Ca:case Pa:case Ia:case Da:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case La:case Zr:case Ua:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Na:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Fa:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case za:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Oa:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case ka:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Ba:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Ha:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Ga:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Va:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Wa:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Xa:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case qa:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Ya:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case $a:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Ka:case Za:case Ja:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Qa:case ja:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Jr:case tl:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function sp(s){switch(s){case tn:case eu:return{byteLength:1,components:1};case Js:case nu:case _n:return{byteLength:2,components:1};case ml:case gl:return{byteLength:2,components:4};case zn:case pl:case Tn:return{byteLength:4,components:1};case iu:case su:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ul}}));typeof window<"u"&&(window.__THREE__?Gt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ul);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function yu(){let s=null,t=!1,e=null,n=null;function i(r,o){n=s.requestAnimationFrame(i),e(r,o)}return{start:function(){t!==!0&&e!==null&&s!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function rp(s){const t=new WeakMap;function e(a,c){const l=a.array,h=a.usage,u=l.byteLength,f=s.createBuffer();s.bindBuffer(c,f),s.bufferData(c,l,h),a.onUploadCallback();let d;if(l instanceof Float32Array)d=s.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=s.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=s.SHORT;else if(l instanceof Uint32Array)d=s.UNSIGNED_INT;else if(l instanceof Int32Array)d=s.INT;else if(l instanceof Int8Array)d=s.BYTE;else if(l instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){const h=c.array,u=c.updateRanges;if(s.bindBuffer(l,a),u.length===0)s.bufferSubData(l,0,h);else{u.sort((d,p)=>d.start-p.start);let f=0;for(let d=1;d<u.length;d++){const p=u[f],x=u[d];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++f,u[f]=x)}u.length=f+1;for(let d=0,p=u.length;d<p;d++){const x=u[d];s.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(s.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:r,update:o}}var op=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ap=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,lp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,cp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,up=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,fp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,dp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,pp=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,mp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,gp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,xp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_p=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,vp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Mp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,yp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Sp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ep=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Tp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Ap=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Rp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Cp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Pp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Lp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Ip=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Dp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Up=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Np=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Fp="gl_FragColor = linearToOutputTexel( gl_FragColor );",zp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Op=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,kp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Bp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Hp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Gp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Vp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Wp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Xp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Yp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,$p=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Kp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Zp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Jp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Qp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,jp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,tm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,em=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,nm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,im=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,sm=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,rm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,om=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,am=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lm=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,cm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,um=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,dm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,pm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,mm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,gm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,_m=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,vm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Mm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ym=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,bm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Em=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Tm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Am=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Cm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Pm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Lm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Im=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Dm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Um=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Nm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Fm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,zm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Om=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,km=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Bm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Hm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Gm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Vm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Wm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Xm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,qm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ym=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,$m=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Km=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Zm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Jm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Qm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,jm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,t0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,e0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,n0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,i0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,s0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,r0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const o0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,a0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,l0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,c0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,h0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,u0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,f0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,d0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,p0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,m0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,g0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,x0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,v0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,M0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,y0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,S0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,b0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,w0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,E0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,T0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,A0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,R0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,C0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,P0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,L0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,I0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,D0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,U0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,N0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,F0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,z0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,O0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,k0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Kt={alphahash_fragment:op,alphahash_pars_fragment:ap,alphamap_fragment:lp,alphamap_pars_fragment:cp,alphatest_fragment:hp,alphatest_pars_fragment:up,aomap_fragment:fp,aomap_pars_fragment:dp,batching_pars_vertex:pp,batching_vertex:mp,begin_vertex:gp,beginnormal_vertex:xp,bsdfs:_p,iridescence_fragment:vp,bumpmap_pars_fragment:Mp,clipping_planes_fragment:yp,clipping_planes_pars_fragment:Sp,clipping_planes_pars_vertex:bp,clipping_planes_vertex:wp,color_fragment:Ep,color_pars_fragment:Tp,color_pars_vertex:Ap,color_vertex:Rp,common:Cp,cube_uv_reflection_fragment:Pp,defaultnormal_vertex:Lp,displacementmap_pars_vertex:Ip,displacementmap_vertex:Dp,emissivemap_fragment:Up,emissivemap_pars_fragment:Np,colorspace_fragment:Fp,colorspace_pars_fragment:zp,envmap_fragment:Op,envmap_common_pars_fragment:kp,envmap_pars_fragment:Bp,envmap_pars_vertex:Hp,envmap_physical_pars_fragment:Qp,envmap_vertex:Gp,fog_vertex:Vp,fog_pars_vertex:Wp,fog_fragment:Xp,fog_pars_fragment:qp,gradientmap_pars_fragment:Yp,lightmap_pars_fragment:$p,lights_lambert_fragment:Kp,lights_lambert_pars_fragment:Zp,lights_pars_begin:Jp,lights_toon_fragment:jp,lights_toon_pars_fragment:tm,lights_phong_fragment:em,lights_phong_pars_fragment:nm,lights_physical_fragment:im,lights_physical_pars_fragment:sm,lights_fragment_begin:rm,lights_fragment_maps:om,lights_fragment_end:am,lightprobes_pars_fragment:lm,logdepthbuf_fragment:cm,logdepthbuf_pars_fragment:hm,logdepthbuf_pars_vertex:um,logdepthbuf_vertex:fm,map_fragment:dm,map_pars_fragment:pm,map_particle_fragment:mm,map_particle_pars_fragment:gm,metalnessmap_fragment:xm,metalnessmap_pars_fragment:_m,morphinstance_vertex:vm,morphcolor_vertex:Mm,morphnormal_vertex:ym,morphtarget_pars_vertex:Sm,morphtarget_vertex:bm,normal_fragment_begin:wm,normal_fragment_maps:Em,normal_pars_fragment:Tm,normal_pars_vertex:Am,normal_vertex:Rm,normalmap_pars_fragment:Cm,clearcoat_normal_fragment_begin:Pm,clearcoat_normal_fragment_maps:Lm,clearcoat_pars_fragment:Im,iridescence_pars_fragment:Dm,opaque_fragment:Um,packing:Nm,premultiplied_alpha_fragment:Fm,project_vertex:zm,dithering_fragment:Om,dithering_pars_fragment:km,roughnessmap_fragment:Bm,roughnessmap_pars_fragment:Hm,shadowmap_pars_fragment:Gm,shadowmap_pars_vertex:Vm,shadowmap_vertex:Wm,shadowmask_pars_fragment:Xm,skinbase_vertex:qm,skinning_pars_vertex:Ym,skinning_vertex:$m,skinnormal_vertex:Km,specularmap_fragment:Zm,specularmap_pars_fragment:Jm,tonemapping_fragment:Qm,tonemapping_pars_fragment:jm,transmission_fragment:t0,transmission_pars_fragment:e0,uv_pars_fragment:n0,uv_pars_vertex:i0,uv_vertex:s0,worldpos_vertex:r0,background_vert:o0,background_frag:a0,backgroundCube_vert:l0,backgroundCube_frag:c0,cube_vert:h0,cube_frag:u0,depth_vert:f0,depth_frag:d0,distance_vert:p0,distance_frag:m0,equirect_vert:g0,equirect_frag:x0,linedashed_vert:_0,linedashed_frag:v0,meshbasic_vert:M0,meshbasic_frag:y0,meshlambert_vert:S0,meshlambert_frag:b0,meshmatcap_vert:w0,meshmatcap_frag:E0,meshnormal_vert:T0,meshnormal_frag:A0,meshphong_vert:R0,meshphong_frag:C0,meshphysical_vert:P0,meshphysical_frag:L0,meshtoon_vert:I0,meshtoon_frag:D0,points_vert:U0,points_frag:N0,shadow_vert:F0,shadow_frag:z0,sprite_vert:O0,sprite_frag:k0},yt={common:{diffuse:{value:new kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xt}},envmap:{envMap:{value:null},envMapRotation:{value:new Xt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xt},normalScale:{value:new Bt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new F},probesMax:{value:new F},probesResolution:{value:new F}},points:{diffuse:{value:new kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0},uvTransform:{value:new Xt}},sprite:{diffuse:{value:new kt(16777215)},opacity:{value:1},center:{value:new Bt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}}},Dn={basic:{uniforms:Ke([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.fog]),vertexShader:Kt.meshbasic_vert,fragmentShader:Kt.meshbasic_frag},lambert:{uniforms:Ke([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new kt(0)},envMapIntensity:{value:1}}]),vertexShader:Kt.meshlambert_vert,fragmentShader:Kt.meshlambert_frag},phong:{uniforms:Ke([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new kt(0)},specular:{value:new kt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Kt.meshphong_vert,fragmentShader:Kt.meshphong_frag},standard:{uniforms:Ke([yt.common,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.roughnessmap,yt.metalnessmap,yt.fog,yt.lights,{emissive:{value:new kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag},toon:{uniforms:Ke([yt.common,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.gradientmap,yt.fog,yt.lights,{emissive:{value:new kt(0)}}]),vertexShader:Kt.meshtoon_vert,fragmentShader:Kt.meshtoon_frag},matcap:{uniforms:Ke([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,{matcap:{value:null}}]),vertexShader:Kt.meshmatcap_vert,fragmentShader:Kt.meshmatcap_frag},points:{uniforms:Ke([yt.points,yt.fog]),vertexShader:Kt.points_vert,fragmentShader:Kt.points_frag},dashed:{uniforms:Ke([yt.common,yt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Kt.linedashed_vert,fragmentShader:Kt.linedashed_frag},depth:{uniforms:Ke([yt.common,yt.displacementmap]),vertexShader:Kt.depth_vert,fragmentShader:Kt.depth_frag},normal:{uniforms:Ke([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,{opacity:{value:1}}]),vertexShader:Kt.meshnormal_vert,fragmentShader:Kt.meshnormal_frag},sprite:{uniforms:Ke([yt.sprite,yt.fog]),vertexShader:Kt.sprite_vert,fragmentShader:Kt.sprite_frag},background:{uniforms:{uvTransform:{value:new Xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Kt.background_vert,fragmentShader:Kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xt}},vertexShader:Kt.backgroundCube_vert,fragmentShader:Kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Kt.cube_vert,fragmentShader:Kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Kt.equirect_vert,fragmentShader:Kt.equirect_frag},distance:{uniforms:Ke([yt.common,yt.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Kt.distance_vert,fragmentShader:Kt.distance_frag},shadow:{uniforms:Ke([yt.lights,yt.fog,{color:{value:new kt(0)},opacity:{value:1}}]),vertexShader:Kt.shadow_vert,fragmentShader:Kt.shadow_frag}};Dn.physical={uniforms:Ke([Dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xt},clearcoatNormalScale:{value:new Bt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xt},sheen:{value:0},sheenColor:{value:new kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xt},transmissionSamplerSize:{value:new Bt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xt},attenuationDistance:{value:0},attenuationColor:{value:new kt(0)},specularColor:{value:new kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xt},anisotropyVector:{value:new Bt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xt}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag};const Dr={r:0,b:0,g:0},B0=new ne,Su=new Xt;Su.set(-1,0,0,0,1,0,0,0,1);function H0(s,t,e,n,i,r){const o=new kt(0);let a=i===!0?0:1,c,l,h=null,u=0,f=null;function d(S){let E=S.isScene===!0?S.background:null;if(E&&E.isTexture){const v=S.backgroundBlurriness>0;E=t.get(E,v)}return E}function p(S){let E=!1;const v=d(S);v===null?g(o,a):v&&v.isColor&&(g(v,1),E=!0);const M=s.xr.getEnvironmentBlendMode();M==="additive"?e.buffers.color.setClear(0,0,0,1,r):M==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(s.autoClear||E)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function x(S,E){const v=d(E);v&&(v.isCubeTexture||v.mapping===go)?(l===void 0&&(l=new Ce(new xn(1,1,1),new nn({name:"BackgroundCubeMaterial",uniforms:xs(Dn.backgroundCube.uniforms),vertexShader:Dn.backgroundCube.vertexShader,fragmentShader:Dn.backgroundCube.fragmentShader,side:en,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(M,w,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=v,l.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(B0.makeRotationFromEuler(E.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Su),l.material.toneMapped=ee.getTransfer(v.colorSpace)!==he,(h!==v||u!==v.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,h=v,u=v.version,f=s.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Ce(new si(2,2),new nn({name:"BackgroundMaterial",uniforms:xs(Dn.background.uniforms),vertexShader:Dn.background.vertexShader,fragmentShader:Dn.background.fragmentShader,side:Li,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=ee.getTransfer(v.colorSpace)!==he,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||u!==v.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,h=v,u=v.version,f=s.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function g(S,E){S.getRGB(Dr,_u(s)),e.buffers.color.setClear(Dr.r,Dr.g,Dr.b,E,r)}function m(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(S,E=1){o.set(S),a=E,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(S){a=S,g(o,a)},render:p,addToRenderList:x,dispose:m}}function G0(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null);let r=i,o=!1;function a(L,U,V,H,G){let J=!1;const W=u(L,H,V,U);r!==W&&(r=W,l(r.object)),J=d(L,H,V,G),J&&p(L,H,V,G),G!==null&&t.update(G,s.ELEMENT_ARRAY_BUFFER),(J||o)&&(o=!1,v(L,U,V,H),G!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function c(){return s.createVertexArray()}function l(L){return s.bindVertexArray(L)}function h(L){return s.deleteVertexArray(L)}function u(L,U,V,H){const G=H.wireframe===!0;let J=n[U.id];J===void 0&&(J={},n[U.id]=J);const W=L.isInstancedMesh===!0?L.id:0;let tt=J[W];tt===void 0&&(tt={},J[W]=tt);let B=tt[V.id];B===void 0&&(B={},tt[V.id]=B);let Q=B[G];return Q===void 0&&(Q=f(c()),B[G]=Q),Q}function f(L){const U=[],V=[],H=[];for(let G=0;G<e;G++)U[G]=0,V[G]=0,H[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:V,attributeDivisors:H,object:L,attributes:{},index:null}}function d(L,U,V,H){const G=r.attributes,J=U.attributes;let W=0;const tt=V.getAttributes();for(const B in tt)if(tt[B].location>=0){const st=G[B];let ut=J[B];if(ut===void 0&&(B==="instanceMatrix"&&L.instanceMatrix&&(ut=L.instanceMatrix),B==="instanceColor"&&L.instanceColor&&(ut=L.instanceColor)),st===void 0||st.attribute!==ut||ut&&st.data!==ut.data)return!0;W++}return r.attributesNum!==W||r.index!==H}function p(L,U,V,H){const G={},J=U.attributes;let W=0;const tt=V.getAttributes();for(const B in tt)if(tt[B].location>=0){let st=J[B];st===void 0&&(B==="instanceMatrix"&&L.instanceMatrix&&(st=L.instanceMatrix),B==="instanceColor"&&L.instanceColor&&(st=L.instanceColor));const ut={};ut.attribute=st,st&&st.data&&(ut.data=st.data),G[B]=ut,W++}r.attributes=G,r.attributesNum=W,r.index=H}function x(){const L=r.newAttributes;for(let U=0,V=L.length;U<V;U++)L[U]=0}function g(L){m(L,0)}function m(L,U){const V=r.newAttributes,H=r.enabledAttributes,G=r.attributeDivisors;V[L]=1,H[L]===0&&(s.enableVertexAttribArray(L),H[L]=1),G[L]!==U&&(s.vertexAttribDivisor(L,U),G[L]=U)}function S(){const L=r.newAttributes,U=r.enabledAttributes;for(let V=0,H=U.length;V<H;V++)U[V]!==L[V]&&(s.disableVertexAttribArray(V),U[V]=0)}function E(L,U,V,H,G,J,W){W===!0?s.vertexAttribIPointer(L,U,V,G,J):s.vertexAttribPointer(L,U,V,H,G,J)}function v(L,U,V,H){x();const G=H.attributes,J=V.getAttributes(),W=U.defaultAttributeValues;for(const tt in J){const B=J[tt];if(B.location>=0){let Q=G[tt];if(Q===void 0&&(tt==="instanceMatrix"&&L.instanceMatrix&&(Q=L.instanceMatrix),tt==="instanceColor"&&L.instanceColor&&(Q=L.instanceColor)),Q!==void 0){const st=Q.normalized,ut=Q.itemSize,O=t.get(Q);if(O===void 0)continue;const X=O.buffer,z=O.type,k=O.bytesPerElement,C=z===s.INT||z===s.UNSIGNED_INT||Q.gpuType===pl;if(Q.isInterleavedBufferAttribute){const T=Q.data,I=T.stride,K=Q.offset;if(T.isInstancedInterleavedBuffer){for(let j=0;j<B.locationSize;j++)m(B.location+j,T.meshPerAttribute);L.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=T.meshPerAttribute*T.count)}else for(let j=0;j<B.locationSize;j++)g(B.location+j);s.bindBuffer(s.ARRAY_BUFFER,X);for(let j=0;j<B.locationSize;j++)E(B.location+j,ut/B.locationSize,z,st,I*k,(K+ut/B.locationSize*j)*k,C)}else{if(Q.isInstancedBufferAttribute){for(let T=0;T<B.locationSize;T++)m(B.location+T,Q.meshPerAttribute);L.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let T=0;T<B.locationSize;T++)g(B.location+T);s.bindBuffer(s.ARRAY_BUFFER,X);for(let T=0;T<B.locationSize;T++)E(B.location+T,ut/B.locationSize,z,st,ut*k,ut/B.locationSize*T*k,C)}}else if(W!==void 0){const st=W[tt];if(st!==void 0)switch(st.length){case 2:s.vertexAttrib2fv(B.location,st);break;case 3:s.vertexAttrib3fv(B.location,st);break;case 4:s.vertexAttrib4fv(B.location,st);break;default:s.vertexAttrib1fv(B.location,st)}}}}S()}function M(){y();for(const L in n){const U=n[L];for(const V in U){const H=U[V];for(const G in H){const J=H[G];for(const W in J)h(J[W].object),delete J[W];delete H[G]}}delete n[L]}}function w(L){if(n[L.id]===void 0)return;const U=n[L.id];for(const V in U){const H=U[V];for(const G in H){const J=H[G];for(const W in J)h(J[W].object),delete J[W];delete H[G]}}delete n[L.id]}function P(L){for(const U in n){const V=n[U];for(const H in V){const G=V[H];if(G[L.id]===void 0)continue;const J=G[L.id];for(const W in J)h(J[W].object),delete J[W];delete G[L.id]}}}function _(L){for(const U in n){const V=n[U],H=L.isInstancedMesh===!0?L.id:0,G=V[H];if(G!==void 0){for(const J in G){const W=G[J];for(const tt in W)h(W[tt].object),delete W[tt];delete G[J]}delete V[H],Object.keys(V).length===0&&delete n[U]}}}function y(){R(),o=!0,r!==i&&(r=i,l(r.object))}function R(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:y,resetDefaultState:R,dispose:M,releaseStatesOfGeometry:w,releaseStatesOfObject:_,releaseStatesOfProgram:P,initAttributes:x,enableAttribute:g,disableUnusedAttributes:S}}function V0(s,t,e){let n;function i(c){n=c}function r(c,l){s.drawArrays(n,c,l),e.update(l,n,1)}function o(c,l,h){h!==0&&(s.drawArraysInstanced(n,c,l,h),e.update(l,n,h))}function a(c,l,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let f=0;for(let d=0;d<h;d++)f+=l[d];e.update(f,n,1)}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function W0(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(P){return!(P!==hn&&n.convert(P)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){const _=P===_n&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==tn&&P!==Tn&&!_&&n.convert(P)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function c(P){if(P==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(Gt("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&f===!1&&Gt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),S=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),E=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),M=s.getParameter(s.MAX_SAMPLES),w=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:S,maxVaryings:E,maxFragmentUniforms:v,maxSamples:M,samples:w}}function X0(s){const t=this;let e=null,n=0,i=!1,r=!1;const o=new qn,a=new Xt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||n!==0||i;return i=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){const p=u.clippingPlanes,x=u.clipIntersection,g=u.clipShadows,m=s.get(u);if(!i||p===null||p.length===0||r&&!g)r?h(null):l();else{const S=r?0:n,E=S*4;let v=m.clippingState||null;c.value=v,v=h(p,f,E,d);for(let M=0;M!==E;++M)v[M]=e[M];m.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,p){const x=u!==null?u.length:0;let g=null;if(x!==0){if(g=c.value,p!==!0||g===null){const m=d+x*4,S=f.matrixWorldInverse;a.getNormalMatrix(S),(g===null||g.length<m)&&(g=new Float32Array(m));for(let E=0,v=d;E!==x;++E,v+=4)o.copy(u[E]).applyMatrix4(S,a),o.normal.toArray(g,v),g[v+3]=o.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,g}}const cs=4,q0=6,Y0=20,$0=256,Ps=new _o,Bc=new kt;let Qo=null,jo=0,ta=0,ea=!1;const K0=new F,Ri=new F;class Hc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,i=100,r={}){const{size:o=256,position:a=K0}=r;Qo=this._renderer.getRenderTarget(),jo=this._renderer.getActiveCubeFace(),ta=this._renderer.getActiveMipmapLevel(),ea=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,i,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Vc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Qo,jo,ta),this._renderer.xr.enabled=ea,t.scissorTest=!1,ss(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ii||t.mapping===ms?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Qo=this._renderer.getRenderTarget(),jo=this._renderer.getActiveCubeFace(),ta=this._renderer.getActiveMipmapLevel(),ea=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Be,minFilter:Be,generateMipmaps:!1,type:_n,format:hn,colorSpace:Qr,depthBuffer:!1},i=Gc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Gc(t,e,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Z0(r)),this._blurMaterial=Q0(r,t,e),this._ggxMaterial=J0(r,t,e)}return i}_compileMaterial(t){const e=new Ce(new De,t);this._renderer.compile(e,Ps)}_sceneToCubeUV(t,e,n,i,r){const c=new je(90,1,e,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(Bc),u.toneMapping=Fn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ce(new xn,new jn({name:"PMREM.Background",side:en,depthWrite:!1,depthTest:!1})));const x=this._backgroundBox,g=x.material;let m=!1;const S=t.background;S?S.isColor&&(g.color.copy(S),t.background=null,m=!0):(g.color.copy(Bc),m=!0);for(let E=0;E<6;E++){const v=E%3;v===0?(c.up.set(0,l[E],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[E],r.y,r.z)):v===1?(c.up.set(0,0,l[E]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[E],r.z)):(c.up.set(0,l[E],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[E]));const M=this._cubeSize;ss(i,v*M,E>2?M:0,M,M),u.setRenderTarget(i),m&&u.render(x,c),u.render(t,c)}u.toneMapping=d,u.autoClear=f,t.background=S}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Ii||t.mapping===ms;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Vc());const r=i?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;ss(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Ps)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){const i=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;const c=o.uniforms,l=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),u=Math.sqrt(l*l-h*h),f=l*1.25,d=u*f,{_lodMax:p}=this,x=this._sizeLods[n],g=3*x*(n>p-cs?n-p+cs:0),m=4*(this._cubeSize-x);c.envMap.value=t.texture,c.roughness.value=d,c.mipInt.value=p-e,ss(r,g,m,3*x,2*x),i.setRenderTarget(r),i.render(a,Ps),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=p-n,ss(t,g,m,3*x,2*x),i.setRenderTarget(t),i.render(a,Ps)}_blur(t,e,n,i){const r=this._pingPongRenderTarget,o=Math.min(i,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,o),this._blurPass(r,t,n,n,o)}_blurPass(t,e,n,i,r){const o=this._renderer,a=this._blurMaterial,c=this._lodMeshes[i];c.material=a;const l=a.uniforms;l.envMap.value=t.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-n;const h=this._sizeLods[i],u=3*h*(i>this._lodMax-cs?i-this._lodMax+cs:0),f=4*(this._cubeSize-h);ss(e,u,f,3*h,2*h),o.setRenderTarget(e),o.render(c,Ps)}}function Z0(s){const t=[],e=[];let n=s;const i=s-cs+1+q0;for(let r=0;r<i;r++){const o=Math.pow(2,n);t.push(o);const a=1/(o-2),c=-a,l=1+a,h=[c,c,l,c,l,l,c,c,l,l,c,l],u=6,f=6,d=3,p=new Float32Array(d*f*u),x=new Float32Array(d*f*u);for(let m=0;m<u;m++){const S=m%3*2/3-1,E=m>2?0:-1,v=[S,E,0,S+2/3,E,0,S+2/3,E+1,0,S,E,0,S+2/3,E+1,0,S,E+1,0];p.set(v,d*f*m);for(let M=0;M<f;M++){const w=h[M*2]*2-1,P=h[M*2+1]*2-1;m===0?Ri.set(1,P,w):m===1?Ri.set(-w,1,-P):m===2?Ri.set(-w,P,1):m===3?Ri.set(-1,P,-w):m===4?Ri.set(-w,-1,P):Ri.set(w,P,-1),Ri.toArray(x,(m*f+M)*d)}}const g=new De;g.setAttribute("position",new gn(p,d)),g.setAttribute("outputDirection",new gn(x,d)),e.push(new Ce(g,null)),n>cs&&n--}return{lodMeshes:e,sizeLods:t}}function Gc(s,t,e){const n=new mn(s,t,e);return n.texture.mapping=go,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ss(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function J0(s,t,e){return new nn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:$0,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:vo(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ti,depthTest:!1,depthWrite:!1})}function Q0(s,t,e){return new nn({name:"SphericalGaussianBlur",defines:{SAMPLES:Y0,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:vo(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:ti,depthTest:!1,depthWrite:!1})}function Vc(){return new nn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ti,depthTest:!1,depthWrite:!1})}function Wc(){return new nn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ti,depthTest:!1,depthWrite:!1})}function vo(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class bu extends mn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new gu(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new xn(5,5,5),r=new nn({name:"CubemapFromEquirect",uniforms:xs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:en,blending:ti});r.uniforms.tEquirect.value=e;const o=new Ce(i,r),a=e.minFilter;return e.minFilter===yi&&(e.minFilter=Be),new np(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}}function j0(s){let t=new WeakMap,e=new WeakMap,n=null;function i(f,d=!1){return f==null?null:d?o(f):r(f)}function r(f){if(f&&f.isTexture){const d=f.mapping;if(d===wo||d===Eo)if(t.has(f)){const p=t.get(f).texture;return a(p,f.mapping)}else{const p=f.image;if(p&&p.height>0){const x=new bu(p.height);return x.fromEquirectangularTexture(s,f),t.set(f,x),f.addEventListener("dispose",l),a(x.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture){const d=f.mapping,p=d===wo||d===Eo,x=d===Ii||d===ms;if(p||x){let g=e.get(f);const m=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==m)return n===null&&(n=new Hc(s)),g=p?n.fromEquirectangular(f,g):n.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,e.set(f,g),g.texture;if(g!==void 0)return g.texture;{const S=f.image;return p&&S&&S.height>0||x&&S&&c(S)?(n===null&&(n=new Hc(s)),g=p?n.fromEquirectangular(f):n.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,e.set(f,g),f.addEventListener("dispose",h),g.texture):null}}}return f}function a(f,d){return d===wo?f.mapping=Ii:d===Eo&&(f.mapping=ms),f}function c(f){let d=0;const p=6;for(let x=0;x<p;x++)f[x]!==void 0&&d++;return d===p}function l(f){const d=f.target;d.removeEventListener("dispose",l);const p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function h(f){const d=f.target;d.removeEventListener("dispose",h);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function u(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:u}}function tg(s){const t={};function e(n){if(t[n]!==void 0)return t[n];const i=s.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&ds("WebGLRenderer: "+n+" extension not supported."),i}}}function eg(s,t,e,n){const i={},r=new WeakMap;function o(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const p in f.attributes)t.remove(f.attributes[p]);f.removeEventListener("dispose",o),delete i[f.id];const d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,e.memory.geometries++),f}function c(u){const f=u.attributes;for(const d in f)t.update(f[d],s.ARRAY_BUFFER)}function l(u){const f=[],d=u.index,p=u.attributes.position;let x=0;if(p===void 0)return;if(d!==null){const S=d.array;x=d.version;for(let E=0,v=S.length;E<v;E+=3){const M=S[E+0],w=S[E+1],P=S[E+2];f.push(M,w,w,P,P,M)}}else{const S=p.array;x=p.version;for(let E=0,v=S.length/3-1;E<v;E+=3){const M=E+0,w=E+1,P=E+2;f.push(M,w,w,P,P,M)}}const g=new(p.count>=65535?fu:uu)(f,1);g.version=x;const m=r.get(u);m&&t.remove(m),r.set(u,g)}function h(u){const f=r.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function ng(s,t,e){let n;function i(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function c(u,f){s.drawElements(n,f,r,u*o),e.update(f,n,1)}function l(u,f,d){d!==0&&(s.drawElementsInstanced(n,f,r,u*o,d),e.update(f,n,d))}function h(u,f,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,u,0,d);let x=0;for(let g=0;g<d;g++)x+=f[g];e.update(x,n,1)}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function ig(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:ie("WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function sg(s,t,e){const n=new WeakMap,i=new ge;function r(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(a);if(f===void 0||f.count!==u){let R=function(){_.dispose(),n.delete(a),a.removeEventListener("dispose",R)};var d=R;f!==void 0&&f.texture.dispose();const p=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],S=a.morphAttributes.normal||[],E=a.morphAttributes.color||[];let v=0;p===!0&&(v=1),x===!0&&(v=2),g===!0&&(v=3);let M=a.attributes.position.count*v,w=1;M>t.maxTextureSize&&(w=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);const P=new Float32Array(M*w*4*u),_=new cu(P,M,w,u);_.type=Tn,_.needsUpdate=!0;const y=v*4;for(let L=0;L<u;L++){const U=m[L],V=S[L],H=E[L],G=M*w*4*L;for(let J=0;J<U.count;J++){const W=J*y;p===!0&&(i.fromBufferAttribute(U,J),P[G+W+0]=i.x,P[G+W+1]=i.y,P[G+W+2]=i.z,P[G+W+3]=0),x===!0&&(i.fromBufferAttribute(V,J),P[G+W+4]=i.x,P[G+W+5]=i.y,P[G+W+6]=i.z,P[G+W+7]=0),g===!0&&(i.fromBufferAttribute(H,J),P[G+W+8]=i.x,P[G+W+9]=i.y,P[G+W+10]=i.z,P[G+W+11]=H.itemSize===4?i.w:1)}}f={count:u,texture:_,size:new Bt(M,w)},n.set(a,f),a.addEventListener("dispose",R)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let p=0;for(let g=0;g<l.length;g++)p+=l[g];const x=a.morphTargetsRelative?1:1-p;c.getUniforms().setValue(s,"morphTargetBaseInfluence",x),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function rg(s,t,e,n,i){let r=new WeakMap;function o(l){const h=i.render.frame,u=l.geometry,f=t.get(l,u);if(r.get(f)!==h&&(t.update(f),r.set(f,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return f}function a(){r=new WeakMap}function c(l){const h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}const og={[$h]:"LINEAR_TONE_MAPPING",[Kh]:"REINHARD_TONE_MAPPING",[Zh]:"CINEON_TONE_MAPPING",[Jh]:"ACES_FILMIC_TONE_MAPPING",[jh]:"AGX_TONE_MAPPING",[dl]:"NEUTRAL_TONE_MAPPING",[Qh]:"CUSTOM_TONE_MAPPING"};function ag(s,t,e,n,i,r){const o=new mn(t,e,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let a=null,c=null;const l=new De;l.setAttribute("position",new se([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new se([0,2,0,0,2,0],2));const h=new qd({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new Ce(l,h),f=new _o(-1,1,1,-1,0,1);let d=null,p=null,x=!1,g,m=null,S=[],E=!1;this.setSize=function(v,M){o.setSize(v,M),a!==null&&a.setSize(v,M),c!==null&&c.setSize(v,M);for(let w=0;w<S.length;w++){const P=S[w];P.setSize&&P.setSize(v,M)}},this.setEffects=function(v){S=v,E=S.length>0&&S[0].isRenderPass===!0;const M=o.width,w=o.height;S.length>0&&a===null&&(a=new mn(M,w,{type:_n,depthBuffer:!1,stencilBuffer:!1}),c=new mn(M,w,{type:_n,depthBuffer:!1,stencilBuffer:!1}));for(let P=0;P<S.length;P++){const _=S[P];_.setSize&&_.setSize(M,w)}},this.begin=function(v,M){if(x||v.toneMapping===Fn&&S.length===0)return!1;if(m=M,M!==null){const w=M.width,P=M.height;(o.width!==w||o.height!==P)&&this.setSize(w,P)}return E===!1&&v.setRenderTarget(o),g=v.toneMapping,v.toneMapping=Fn,!0},this.hasRenderPass=function(){return E},this.end=function(v,M){v.toneMapping=g,x=!0;let w=o,P=a;for(let _=0;_<S.length;_++){const y=S[_];y.enabled!==!1&&(y.render(v,P,w,M),y.needsSwap!==!1&&(w=P,P=P===a?c:a))}if(d!==v.outputColorSpace||p!==v.toneMapping){d=v.outputColorSpace,p=v.toneMapping,h.defines={},ee.getTransfer(d)===he&&(h.defines.SRGB_TRANSFER="");const _=og[p];_&&(h.defines[_]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=w.texture,v.setRenderTarget(m),v.render(u,f),m=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),c!==null&&c.dispose(),l.dispose(),h.dispose()}}const wu=new Ge,rl=new nr(1,1),Eu=new cu,Tu=new gd,Au=new gu,Xc=[],qc=[],Yc=new Float32Array(16),$c=new Float32Array(9),Kc=new Float32Array(4);function vs(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=Xc[i];if(r===void 0&&(r=new Float32Array(i),Xc[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function Ue(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Ne(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Mo(s,t){let e=qc[t];e===void 0&&(e=new Int32Array(t),qc[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function lg(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function cg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;s.uniform2fv(this.addr,t),Ne(e,t)}}function hg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ue(e,t))return;s.uniform3fv(this.addr,t),Ne(e,t)}}function ug(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;s.uniform4fv(this.addr,t),Ne(e,t)}}function fg(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Ne(e,t)}else{if(Ue(e,n))return;Kc.set(n),s.uniformMatrix2fv(this.addr,!1,Kc),Ne(e,n)}}function dg(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Ne(e,t)}else{if(Ue(e,n))return;$c.set(n),s.uniformMatrix3fv(this.addr,!1,$c),Ne(e,n)}}function pg(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Ne(e,t)}else{if(Ue(e,n))return;Yc.set(n),s.uniformMatrix4fv(this.addr,!1,Yc),Ne(e,n)}}function mg(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function gg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;s.uniform2iv(this.addr,t),Ne(e,t)}}function xg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ue(e,t))return;s.uniform3iv(this.addr,t),Ne(e,t)}}function _g(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;s.uniform4iv(this.addr,t),Ne(e,t)}}function vg(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Mg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;s.uniform2uiv(this.addr,t),Ne(e,t)}}function yg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ue(e,t))return;s.uniform3uiv(this.addr,t),Ne(e,t)}}function Sg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;s.uniform4uiv(this.addr,t),Ne(e,t)}}function bg(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(rl.compareFunction=e.isReversedDepthBuffer()?yl:Ml,r=rl):r=wu,e.setTexture2D(t||r,i)}function wg(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Tu,i)}function Eg(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Au,i)}function Tg(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Eu,i)}function Ag(s){switch(s){case 5126:return lg;case 35664:return cg;case 35665:return hg;case 35666:return ug;case 35674:return fg;case 35675:return dg;case 35676:return pg;case 5124:case 35670:return mg;case 35667:case 35671:return gg;case 35668:case 35672:return xg;case 35669:case 35673:return _g;case 5125:return vg;case 36294:return Mg;case 36295:return yg;case 36296:return Sg;case 35678:case 36198:case 36298:case 36306:case 35682:return bg;case 35679:case 36299:case 36307:return wg;case 35680:case 36300:case 36308:case 36293:return Eg;case 36289:case 36303:case 36311:case 36292:return Tg}}function Rg(s,t){s.uniform1fv(this.addr,t)}function Cg(s,t){const e=vs(t,this.size,2);s.uniform2fv(this.addr,e)}function Pg(s,t){const e=vs(t,this.size,3);s.uniform3fv(this.addr,e)}function Lg(s,t){const e=vs(t,this.size,4);s.uniform4fv(this.addr,e)}function Ig(s,t){const e=vs(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Dg(s,t){const e=vs(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Ug(s,t){const e=vs(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Ng(s,t){s.uniform1iv(this.addr,t)}function Fg(s,t){s.uniform2iv(this.addr,t)}function zg(s,t){s.uniform3iv(this.addr,t)}function Og(s,t){s.uniform4iv(this.addr,t)}function kg(s,t){s.uniform1uiv(this.addr,t)}function Bg(s,t){s.uniform2uiv(this.addr,t)}function Hg(s,t){s.uniform3uiv(this.addr,t)}function Gg(s,t){s.uniform4uiv(this.addr,t)}function Vg(s,t,e){const n=this.cache,i=t.length,r=Mo(e,i);Ue(n,r)||(s.uniform1iv(this.addr,r),Ne(n,r));let o;this.type===s.SAMPLER_2D_SHADOW?o=rl:o=wu;for(let a=0;a!==i;++a)e.setTexture2D(t[a]||o,r[a])}function Wg(s,t,e){const n=this.cache,i=t.length,r=Mo(e,i);Ue(n,r)||(s.uniform1iv(this.addr,r),Ne(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Tu,r[o])}function Xg(s,t,e){const n=this.cache,i=t.length,r=Mo(e,i);Ue(n,r)||(s.uniform1iv(this.addr,r),Ne(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||Au,r[o])}function qg(s,t,e){const n=this.cache,i=t.length,r=Mo(e,i);Ue(n,r)||(s.uniform1iv(this.addr,r),Ne(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Eu,r[o])}function Yg(s){switch(s){case 5126:return Rg;case 35664:return Cg;case 35665:return Pg;case 35666:return Lg;case 35674:return Ig;case 35675:return Dg;case 35676:return Ug;case 5124:case 35670:return Ng;case 35667:case 35671:return Fg;case 35668:case 35672:return zg;case 35669:case 35673:return Og;case 5125:return kg;case 36294:return Bg;case 36295:return Hg;case 36296:return Gg;case 35678:case 36198:case 36298:case 36306:case 35682:return Vg;case 35679:case 36299:case 36307:return Wg;case 35680:case 36300:case 36308:case 36293:return Xg;case 36289:case 36303:case 36311:case 36292:return qg}}class $g{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Ag(e.type)}}class Kg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Yg(e.type)}}class Zg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(t,e[a.id],n)}}}const na=/(\w+)(\])?(\[|\.)?/g;function Zc(s,t){s.seq.push(t),s.map[t.id]=t}function Jg(s,t,e){const n=s.name,i=n.length;for(na.lastIndex=0;;){const r=na.exec(n),o=na.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){Zc(e,l===void 0?new $g(a,s,t):new Kg(a,s,t));break}else{let u=e.map[a];u===void 0&&(u=new Zg(a),Zc(e,u)),e=u}}}class $r{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const a=t.getActiveUniform(e,o),c=t.getUniformLocation(e,a.name);Jg(a,c,this)}const i=[],r=[];for(const o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(o):r.push(o);i.length>0&&(this.seq=i.concat(r))}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function Jc(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const Qg=37297;let jg=0;function tx(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const Qc=new Xt;function ex(s){ee._getMatrix(Qc,ee.workingColorSpace,s);const t=`mat3( ${Qc.elements.map(e=>e.toFixed(4))} )`;switch(ee.getTransfer(s)){case jr:return[t,"LinearTransferOETF"];case he:return[t,"sRGBTransferOETF"];default:return Gt("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function jc(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+tx(s.getShaderSource(t),a)}else return r}function nx(s,t){const e=ex(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const ix={[$h]:"Linear",[Kh]:"Reinhard",[Zh]:"Cineon",[Jh]:"ACESFilmic",[jh]:"AgX",[dl]:"Neutral",[Qh]:"Custom"};function sx(s,t){const e=ix[t];return e===void 0?(Gt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ur=new F;function rx(){ee.getLuminanceCoefficients(Ur);const s=Ur.x.toFixed(4),t=Ur.y.toFixed(4),e=Ur.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ox(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Gs).join(`
`)}function ax(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function lx(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function Gs(s){return s!==""}function th(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function eh(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const cx=/^[ \t]*#include +<([\w\d./]+)>/gm;function ol(s){return s.replace(cx,ux)}const hx=new Map;function ux(s,t){let e=Kt[t];if(e===void 0){const n=hx.get(t);if(n!==void 0)e=Kt[n],Gt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return ol(e)}const fx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function nh(s){return s.replace(fx,dx)}function dx(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function ih(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const px={[Gr]:"SHADOWMAP_TYPE_PCF",[Hs]:"SHADOWMAP_TYPE_VSM"};function mx(s){return px[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const gx={[Ii]:"ENVMAP_TYPE_CUBE",[ms]:"ENVMAP_TYPE_CUBE",[go]:"ENVMAP_TYPE_CUBE_UV"};function xx(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":gx[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const _x={[ms]:"ENVMAP_MODE_REFRACTION"};function vx(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":_x[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Mx={[fl]:"ENVMAP_BLENDING_MULTIPLY",[Df]:"ENVMAP_BLENDING_MIX",[Uf]:"ENVMAP_BLENDING_ADD"};function yx(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":Mx[s.combine]||"ENVMAP_BLENDING_NONE"}function Sx(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function bx(s,t,e,n){const i=s.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=mx(e),l=xx(e),h=vx(e),u=yx(e),f=Sx(e),d=ox(e),p=ax(r),x=i.createProgram();let g,m,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Gs).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Gs).join(`
`),m.length>0&&(m+=`
`)):(g=[ih(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Gs).join(`
`),m=[ih(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Fn?"#define TONE_MAPPING":"",e.toneMapping!==Fn?Kt.tonemapping_pars_fragment:"",e.toneMapping!==Fn?sx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Kt.colorspace_pars_fragment,nx("linearToOutputTexel",e.outputColorSpace),rx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Gs).join(`
`)),o=ol(o),o=th(o,e),o=eh(o,e),a=ol(a),a=th(a,e),a=eh(a,e),o=nh(o),a=nh(a),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",e.glslVersion===sc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===sc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const E=S+g+o,v=S+m+a,M=Jc(i,i.VERTEX_SHADER,E),w=Jc(i,i.FRAGMENT_SHADER,v);i.attachShader(x,M),i.attachShader(x,w),e.index0AttributeName!==void 0?i.bindAttribLocation(x,0,e.index0AttributeName):e.hasPositionAttribute===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function P(L){if(s.debug.checkShaderErrors){const U=i.getProgramInfoLog(x)||"",V=i.getShaderInfoLog(M)||"",H=i.getShaderInfoLog(w)||"",G=U.trim(),J=V.trim(),W=H.trim();let tt=!0,B=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(tt=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,x,M,w);else{const Q=jc(i,M,"vertex"),st=jc(i,w,"fragment");ie("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+G+`
`+Q+`
`+st)}else G!==""?Gt("WebGLProgram: Program Info Log:",G):(J===""||W==="")&&(B=!1);B&&(L.diagnostics={runnable:tt,programLog:G,vertexShader:{log:J,prefix:g},fragmentShader:{log:W,prefix:m}})}i.deleteShader(M),i.deleteShader(w),_=new $r(i,x),y=lx(i,x)}let _;this.getUniforms=function(){return _===void 0&&P(this),_};let y;this.getAttributes=function(){return y===void 0&&P(this),y};let R=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=i.getProgramParameter(x,Qg)),R},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=jg++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=M,this.fragmentShader=w,this}let wx=0;class Ex{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){const i=this._getShaderCacheForMaterial(t);return i.has(e)===!1&&(i.add(e),e.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Tx(t),e.set(t,n)),n}}class Tx{constructor(t){this.id=wx++,this.code=t,this.usedTimes=0}}function Ax(s){return s===Di||s===Zr||s===Jr}function Rx(s,t,e,n,i,r){const o=new wl,a=new Ex,c=new Set,l=[],h=new Map,u=n.logarithmicDepthBuffer;let f=n.precision;const d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(_){return c.add(_),_===0?"uv":`uv${_}`}function x(_,y,R,L,U,V){const H=L.fog,G=U.geometry,J=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?L.environment:null,W=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,tt=t.get(_.envMap||J,W),B=tt&&tt.mapping===go?tt.image.height:null,Q=d[_.type];_.precision!==null&&(f=n.getMaxPrecision(_.precision),f!==_.precision&&Gt("WebGLProgram.getParameters:",_.precision,"not supported, using",f,"instead."));const st=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ut=st!==void 0?st.length:0;let O=0;G.morphAttributes.position!==void 0&&(O=1),G.morphAttributes.normal!==void 0&&(O=2),G.morphAttributes.color!==void 0&&(O=3);let X,z,k,C;if(Q){const pe=Dn[Q];X=pe.vertexShader,z=pe.fragmentShader}else{X=_.vertexShader,z=_.fragmentShader;const pe=a.getVertexShaderStage(_),ae=a.getFragmentShaderStage(_);a.update(_,pe,ae),k=pe.id,C=ae.id}const T=s.getRenderTarget(),I=s.state.buffers.depth.getReversed(),K=U.isInstancedMesh===!0,j=U.isBatchedMesh===!0,ft=!!_.map,pt=!!_.matcap,wt=!!tt,zt=!!_.aoMap,Ot=!!_.lightMap,Wt=!!_.bumpMap&&_.wireframe===!1,oe=!!_.normalMap,Ee=!!_.displacementMap,Fe=!!_.emissiveMap,Me=!!_.metalnessMap,Te=!!_.roughnessMap,$=_.anisotropy>0,Ve=_.clearcoat>0,ce=_.dispersion>0,N=_.retroreflectivity>0,b=_.iridescence>0,Z=_.sheen>0,it=_.transmission>0,ot=$&&!!_.anisotropyMap,dt=Ve&&!!_.clearcoatMap,mt=Ve&&!!_.clearcoatNormalMap,at=Ve&&!!_.clearcoatRoughnessMap,ct=b&&!!_.iridescenceMap,gt=b&&!!_.iridescenceThicknessMap,Dt=Z&&!!_.sheenColorMap,Mt=Z&&!!_.sheenRoughnessMap,xt=!!_.specularMap,Ut=!!_.specularColorMap,Ht=!!_.specularIntensityMap,Yt=it&&!!_.transmissionMap,Y=it&&!!_.thicknessMap,_t=!!_.gradientMap,lt=!!_.alphaMap,vt=_.alphaTest>0,Et=!!_.alphaHash,ht=!!_.extensions;let Ft=Fn;_.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Ft=s.toneMapping);const Lt={shaderID:Q,shaderType:_.type,shaderName:_.name,vertexShader:X,fragmentShader:z,defines:_.defines,customVertexShaderID:k,customFragmentShaderID:C,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:f,batching:j,batchingColor:j&&U._colorsTexture!==null,instancing:K,instancingColor:K&&U.instanceColor!==null,instancingMorph:K&&U.morphTexture!==null,outputColorSpace:T===null?s.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:ee.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:ft,matcap:pt,envMap:wt,envMapMode:wt&&tt.mapping,envMapCubeUVHeight:B,aoMap:zt,lightMap:Ot,bumpMap:Wt,normalMap:oe,displacementMap:Ee,emissiveMap:Fe,normalMapObjectSpace:oe&&_.normalMapType===zf,normalMapTangentSpace:oe&&_.normalMapType===el,packedNormalMap:oe&&_.normalMapType===el&&Ax(_.normalMap.format),metalnessMap:Me,roughnessMap:Te,anisotropy:$,anisotropyMap:ot,clearcoat:Ve,clearcoatMap:dt,clearcoatNormalMap:mt,clearcoatRoughnessMap:at,dispersion:ce,retroreflection:N,iridescence:b,iridescenceMap:ct,iridescenceThicknessMap:gt,sheen:Z,sheenColorMap:Dt,sheenRoughnessMap:Mt,specularMap:xt,specularColorMap:Ut,specularIntensityMap:Ht,transmission:it,transmissionMap:Yt,thicknessMap:Y,gradientMap:_t,opaque:_.transparent===!1&&_.blending===Vs&&_.alphaToCoverage===!1,alphaMap:lt,alphaTest:vt,alphaHash:Et,combine:_.combine,mapUv:ft&&p(_.map.channel),aoMapUv:zt&&p(_.aoMap.channel),lightMapUv:Ot&&p(_.lightMap.channel),bumpMapUv:Wt&&p(_.bumpMap.channel),normalMapUv:oe&&p(_.normalMap.channel),displacementMapUv:Ee&&p(_.displacementMap.channel),emissiveMapUv:Fe&&p(_.emissiveMap.channel),metalnessMapUv:Me&&p(_.metalnessMap.channel),roughnessMapUv:Te&&p(_.roughnessMap.channel),anisotropyMapUv:ot&&p(_.anisotropyMap.channel),clearcoatMapUv:dt&&p(_.clearcoatMap.channel),clearcoatNormalMapUv:mt&&p(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:at&&p(_.clearcoatRoughnessMap.channel),iridescenceMapUv:ct&&p(_.iridescenceMap.channel),iridescenceThicknessMapUv:gt&&p(_.iridescenceThicknessMap.channel),sheenColorMapUv:Dt&&p(_.sheenColorMap.channel),sheenRoughnessMapUv:Mt&&p(_.sheenRoughnessMap.channel),specularMapUv:xt&&p(_.specularMap.channel),specularColorMapUv:Ut&&p(_.specularColorMap.channel),specularIntensityMapUv:Ht&&p(_.specularIntensityMap.channel),transmissionMapUv:Yt&&p(_.transmissionMap.channel),thicknessMapUv:Y&&p(_.thicknessMap.channel),alphaMapUv:lt&&p(_.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(oe||$),vertexNormals:!!G.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!G.attributes.uv&&(ft||lt),fog:!!H,useFog:_.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||G.attributes.normal===void 0&&oe===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:I,skinning:U.isSkinnedMesh===!0,hasPositionAttribute:G.attributes.position!==void 0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:ut,morphTextureStride:O,numSunLights:y.sun.length,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numSunLightShadows:y.sunShadowMap.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numLightProbeGrids:V.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:s.shadowMap.enabled&&R.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ft,decodeVideoTexture:ft&&_.map.isVideoTexture===!0&&ee.getTransfer(_.map.colorSpace)===he,decodeVideoTextureEmissive:Fe&&_.emissiveMap.isVideoTexture===!0&&ee.getTransfer(_.emissiveMap.colorSpace)===he,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Kn,flipSided:_.side===en,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:ht&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ht&&_.extensions.multiDraw===!0||j)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Lt.vertexUv1s=c.has(1),Lt.vertexUv2s=c.has(2),Lt.vertexUv3s=c.has(3),c.clear(),Lt}function g(_){const y=[];if(_.shaderID?y.push(_.shaderID):(y.push(_.customVertexShaderID),y.push(_.customFragmentShaderID)),_.defines!==void 0)for(const R in _.defines)y.push(R),y.push(_.defines[R]);return _.isRawShaderMaterial===!1&&(m(y,_),S(y,_),y.push(s.outputColorSpace)),y.push(_.customProgramCacheKey),y.join()}function m(_,y){_.push(y.precision),_.push(y.outputColorSpace),_.push(y.envMapMode),_.push(y.envMapCubeUVHeight),_.push(y.mapUv),_.push(y.alphaMapUv),_.push(y.lightMapUv),_.push(y.aoMapUv),_.push(y.bumpMapUv),_.push(y.normalMapUv),_.push(y.displacementMapUv),_.push(y.emissiveMapUv),_.push(y.metalnessMapUv),_.push(y.roughnessMapUv),_.push(y.anisotropyMapUv),_.push(y.clearcoatMapUv),_.push(y.clearcoatNormalMapUv),_.push(y.clearcoatRoughnessMapUv),_.push(y.iridescenceMapUv),_.push(y.iridescenceThicknessMapUv),_.push(y.sheenColorMapUv),_.push(y.sheenRoughnessMapUv),_.push(y.specularMapUv),_.push(y.specularColorMapUv),_.push(y.specularIntensityMapUv),_.push(y.transmissionMapUv),_.push(y.thicknessMapUv),_.push(y.combine),_.push(y.fogExp2),_.push(y.sizeAttenuation),_.push(y.morphTargetsCount),_.push(y.morphAttributeCount),_.push(y.numSunLights),_.push(y.numDirLights),_.push(y.numPointLights),_.push(y.numSpotLights),_.push(y.numSpotLightMaps),_.push(y.numHemiLights),_.push(y.numRectAreaLights),_.push(y.numSunLightShadows),_.push(y.numDirLightShadows),_.push(y.numPointLightShadows),_.push(y.numSpotLightShadows),_.push(y.numSpotLightShadowsWithMaps),_.push(y.numLightProbes),_.push(y.shadowMapType),_.push(y.toneMapping),_.push(y.numClippingPlanes),_.push(y.numClipIntersection),_.push(y.depthPacking)}function S(_,y){o.disableAll(),y.instancing&&o.enable(0),y.instancingColor&&o.enable(1),y.instancingMorph&&o.enable(2),y.matcap&&o.enable(3),y.envMap&&o.enable(4),y.normalMapObjectSpace&&o.enable(5),y.normalMapTangentSpace&&o.enable(6),y.clearcoat&&o.enable(7),y.iridescence&&o.enable(8),y.alphaTest&&o.enable(9),y.vertexColors&&o.enable(10),y.vertexAlphas&&o.enable(11),y.vertexUv1s&&o.enable(12),y.vertexUv2s&&o.enable(13),y.vertexUv3s&&o.enable(14),y.vertexTangents&&o.enable(15),y.anisotropy&&o.enable(16),y.alphaHash&&o.enable(17),y.batching&&o.enable(18),y.dispersion&&o.enable(19),y.retroreflection&&o.enable(24),y.batchingColor&&o.enable(20),y.gradientMap&&o.enable(21),y.packedNormalMap&&o.enable(22),y.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reversedDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),y.numLightProbeGrids>0&&o.enable(22),y.hasPositionAttribute&&o.enable(23),_.push(o.mask)}function E(_){const y=d[_.type];let R;if(y){const L=Dn[y];R=Vd.clone(L.uniforms)}else R=_.uniforms;return R}function v(_,y){let R=h.get(y);return R!==void 0?++R.usedTimes:(R=new bx(s,y,_,i),l.push(R),h.set(y,R)),R}function M(_){if(--_.usedTimes===0){const y=l.indexOf(_);l[y]=l[l.length-1],l.pop(),h.delete(_.cacheKey),_.destroy()}}function w(_){a.remove(_)}function P(){a.dispose()}return{getParameters:x,getProgramCacheKey:g,getUniforms:E,acquireProgram:v,releaseProgram:M,releaseShaderCache:w,programs:l,dispose:P}}function Cx(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,c){s.get(o)[a]=c}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function Px(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function sh(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function rh(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function a(f,d,p,x,g,m){let S=s[t];return S===void 0?(S={id:f.id,object:f,geometry:d,material:p,materialVariant:o(f),groupOrder:x,renderOrder:f.renderOrder,z:g,group:m},s[t]=S):(S.id=f.id,S.object=f,S.geometry=d,S.material=p,S.materialVariant=o(f),S.groupOrder=x,S.renderOrder=f.renderOrder,S.z=g,S.group=m),t++,S}function c(f,d,p,x,g,m,S){S.reversedDepth===!0&&(g=-g);const E=a(f,d,p,x,g,m);p.transmission>0?n.push(E):p.transparent===!0?i.push(E):e.push(E)}function l(f,d,p,x,g,m){const S=a(f,d,p,x,g,m);p.transmission>0?n.unshift(S):p.transparent===!0?i.unshift(S):e.unshift(S)}function h(f,d){e.length>1&&e.sort(f||Px),n.length>1&&n.sort(d||sh),i.length>1&&i.sort(d||sh)}function u(){for(let f=t,d=s.length;f<d;f++){const p=s[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:c,unshift:l,finish:u,sort:h}}function Lx(){let s=new WeakMap;function t(n,i){const r=s.get(n);let o;return r===void 0?(o=new rh,s.set(n,[o])):i>=r.length?(o=new rh,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function Ix(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new F,color:new kt};break;case"SpotLight":e={position:new F,direction:new F,color:new kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new F,color:new kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new F,skyColor:new kt,groundColor:new kt};break;case"RectAreaLight":e={color:new kt,position:new F,halfWidth:new F,halfHeight:new F};break}return s[t.id]=e,e}}}function Dx(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let Ux=0;function Nx(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Fx(s){const t=new Ix,e=Dx(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new F);const i=new F,r=new ne,o=new ne;function a(l){let h=0,u=0,f=0;for(let U=0;U<9;U++)n.probe[U].set(0,0,0);let d=0,p=0,x=0,g=0,m=0,S=0,E=0,v=0,M=0,w=0,P=0,_=0,y=0,R=0;l.sort(Nx);for(let U=0,V=l.length;U<V;U++){const H=l[U],G=H.color,J=H.intensity,W=H.distance;let tt=null;if(H.shadow&&H.shadow.map&&(H.shadow.map.texture.format===Di?tt=H.shadow.map.texture:tt=H.shadow.map.depthTexture||H.shadow.map.texture),H.isAmbientLight)h+=G.r*J,u+=G.g*J,f+=G.b*J;else if(H.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(H.sh.coefficients[B],J);R++}else if(H.isSunLight){const B=t.get(H);if(B.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const Q=H.shadow,st=e.get(H);st.shadowIntensity=Q.intensity,st.shadowBias=Q.bias,st.shadowNormalBias=Q.normalBias,st.shadowRadius=Q.radius,st.shadowMapSize.copy(Q.mapSize).multiply(Q.getFrameExtents()),n.sunShadow[p]=st,n.sunShadowMap[p]=tt;const ut=Q.getViewportCount();for(let O=0;O<ut;O++)n.sunShadowMatrix[x+O]=Q.getMatrix(O),n.sunShadowCascade[x+O]=Q._cascadeData[O];x+=ut,p++}n.sun[d]=B,d++}else if(H.isDirectionalLight){const B=t.get(H);if(B.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const Q=H.shadow,st=e.get(H);st.shadowIntensity=Q.intensity,st.shadowBias=Q.bias,st.shadowNormalBias=Q.normalBias,st.shadowRadius=Q.radius,st.shadowMapSize=Q.mapSize,n.directionalShadow[g]=st,n.directionalShadowMap[g]=tt,n.directionalShadowMatrix[g]=H.shadow.matrix,M++}n.directional[g]=B,g++}else if(H.isSpotLight){const B=t.get(H);B.position.setFromMatrixPosition(H.matrixWorld),B.color.copy(G).multiplyScalar(J),B.distance=W,B.coneCos=Math.cos(H.angle),B.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),B.decay=H.decay,n.spot[S]=B;const Q=H.shadow;if(H.map&&(n.spotLightMap[_]=H.map,_++,Q.updateMatrices(H),H.castShadow&&y++),n.spotLightMatrix[S]=Q.matrix,H.castShadow){const st=e.get(H);st.shadowIntensity=Q.intensity,st.shadowBias=Q.bias,st.shadowNormalBias=Q.normalBias,st.shadowRadius=Q.radius,st.shadowMapSize=Q.mapSize,n.spotShadow[S]=st,n.spotShadowMap[S]=tt,P++}S++}else if(H.isRectAreaLight){const B=t.get(H);B.color.copy(G).multiplyScalar(J),B.halfWidth.set(H.width*.5,0,0),B.halfHeight.set(0,H.height*.5,0),n.rectArea[E]=B,E++}else if(H.isPointLight){const B=t.get(H);if(B.color.copy(H.color).multiplyScalar(H.intensity),B.distance=H.distance,B.decay=H.decay,H.castShadow){const Q=H.shadow,st=e.get(H);st.shadowIntensity=Q.intensity,st.shadowBias=Q.bias,st.shadowNormalBias=Q.normalBias,st.shadowRadius=Q.radius,st.shadowMapSize=Q.mapSize,st.shadowCameraNear=Q.camera.near,st.shadowCameraFar=Q.camera.far,n.pointShadow[m]=st,n.pointShadowMap[m]=tt,n.pointShadowMatrix[m]=H.shadow.matrix,w++}n.point[m]=B,m++}else if(H.isHemisphereLight){const B=t.get(H);B.skyColor.copy(H.color).multiplyScalar(J),B.groundColor.copy(H.groundColor).multiplyScalar(J),n.hemi[v]=B,v++}}E>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=yt.LTC_FLOAT_1,n.rectAreaLTC2=yt.LTC_FLOAT_2):(n.rectAreaLTC1=yt.LTC_HALF_1,n.rectAreaLTC2=yt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const L=n.hash;(L.sunLength!==d||L.directionalLength!==g||L.pointLength!==m||L.spotLength!==S||L.rectAreaLength!==E||L.hemiLength!==v||L.numSunShadows!==p||L.numDirectionalShadows!==M||L.numPointShadows!==w||L.numSpotShadows!==P||L.numSpotMaps!==_||L.numLightProbes!==R)&&(n.sun.length=d,n.directional.length=g,n.spot.length=S,n.rectArea.length=E,n.point.length=m,n.hemi.length=v,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.directionalShadowMatrix.length=M,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=P,n.spotShadowMap.length=P,n.spotLightMatrix.length=P+_-y,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=y,n.numLightProbes=R,L.sunLength=d,L.directionalLength=g,L.pointLength=m,L.spotLength=S,L.rectAreaLength=E,L.hemiLength=v,L.numSunShadows=p,L.numDirectionalShadows=M,L.numPointShadows=w,L.numSpotShadows=P,L.numSpotMaps=_,L.numLightProbes=R,n.version=Ux++)}function c(l,h){let u=0,f=0,d=0,p=0,x=0,g=0;const m=h.matrixWorldInverse;for(let S=0,E=l.length;S<E;S++){const v=l[S];if(v.isSunLight){const M=n.sun[u];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(m),u++}else if(v.isDirectionalLight){const M=n.directional[f];M.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(m),f++}else if(v.isSpotLight){const M=n.spot[p];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(m),p++}else if(v.isRectAreaLight){const M=n.rectArea[x];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(m),o.identity(),r.copy(v.matrixWorld),r.premultiply(m),o.extractRotation(r),M.halfWidth.set(v.width*.5,0,0),M.halfHeight.set(0,v.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),x++}else if(v.isPointLight){const M=n.point[d];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(m),d++}else if(v.isHemisphereLight){const M=n.hemi[g];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(m),g++}}}return{setup:a,setupView:c,state:n}}function oh(s){const t=new Fx(s),e=[],n=[],i=[];function r(f){u.camera=f,e.length=0,n.length=0,i.length=0}function o(f){e.push(f)}function a(f){n.push(f)}function c(f){i.push(f)}function l(){t.setup(e)}function h(f){t.setupView(e,f)}const u={lightsArray:e,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:l,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:c}}function zx(s){let t=new WeakMap;function e(i,r=0){const o=t.get(i);let a;return o===void 0?(a=new oh(s),t.set(i,[a])):r>=o.length?(a=new oh(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const Ox=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,kx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Bx=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)],Hx=[new F(0,-1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1),new F(0,-1,0),new F(0,-1,0)],ah=new ne,Ls=new F,ia=new F;function Gx(s,t,e){let n=new Al;const i=new Bt,r=new Bt,o=new ge,a=new Yd,c=new $d,l={},h=e.maxTextureSize,u={[Li]:en,[en]:Li,[Kn]:Kn},f=new nn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Bt},radius:{value:4}},vertexShader:Ox,fragmentShader:kx}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const p=new De;p.setAttribute("position",new gn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Ce(p,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gr;let m=this.type;this.render=function(w,P,_){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||w.length===0)return;this.type===pf&&(Gt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Gr);const y=s.getRenderTarget(),R=s.getActiveCubeFace(),L=s.getActiveMipmapLevel(),U=s.state;U.setBlending(ti),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const V=m!==this.type;V&&P.traverse(function(H){H.material&&(Array.isArray(H.material)?H.material.forEach(G=>G.needsUpdate=!0):H.material.needsUpdate=!0)});for(let H=0,G=w.length;H<G;H++){const J=w[H],W=J.shadow;if(W===void 0){Gt("WebGLShadowMap:",J,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;i.copy(W.mapSize);const tt=W.getFrameExtents();i.multiply(tt),r.copy(W.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/tt.x),i.x=r.x*tt.x,W.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/tt.y),i.y=r.y*tt.y,W.mapSize.y=r.y));const B=s.state.buffers.depth.getReversed();if(W.camera._reversedDepth=B,W.map===null||V===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===Hs){if(J.isPointLight){Gt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new mn(i.x,i.y,{format:Di,type:_n,minFilter:Be,magFilter:Be,generateMipmaps:!1}),W.map.texture.name=J.name+".shadowMap",W.map.depthTexture=new nr(i.x,i.y,Tn),W.map.depthTexture.name=J.name+".shadowMapDepth",W.map.depthTexture.format=ii,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=ke,W.map.depthTexture.magFilter=ke}else J.isPointLight?(W.map=new bu(i.x),W.map.depthTexture=new Hd(i.x,zn)):(W.map=new mn(i.x,i.y),W.map.depthTexture=new nr(i.x,i.y,zn)),W.map.depthTexture.name=J.name+".shadowMap",W.map.depthTexture.format=ii,this.type===Gr?(W.map.depthTexture.compareFunction=B?yl:Ml,W.map.depthTexture.minFilter=Be,W.map.depthTexture.magFilter=Be):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=ke,W.map.depthTexture.magFilter=ke);W.camera.updateProjectionMatrix()}W.map.isWebGLCubeRenderTarget!==!0&&(W.map.width!==i.x||W.map.height!==i.y)&&W.map.setSize(i.x,i.y);const Q=W.map.isWebGLCubeRenderTarget?6:W.getViewportCount();J.isPointLight!==!0&&W.updateMatrices(J,_);for(let st=0;st<Q;st++){const ut=W.getCamera(st);if(J.isPointLight){const O=W.camera,X=W.matrix,z=J.distance||O.far;z!==O.far&&(O.far=z,O.updateProjectionMatrix()),Ls.setFromMatrixPosition(J.matrixWorld),O.position.copy(Ls),ia.copy(O.position),ia.add(Bx[st]),O.up.copy(Hx[st]),O.lookAt(ia),O.updateMatrixWorld(),X.makeTranslation(-Ls.x,-Ls.y,-Ls.z),ah.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),W._frustum.setFromProjectionMatrix(ah,O.coordinateSystem,O.reversedDepth)}if(W.map.isWebGLCubeRenderTarget)s.setRenderTarget(W.map,st),s.clear();else{st===0&&(s.setRenderTarget(W.map),s.clear());const O=W.getViewport(st);o.set(r.x*O.x,r.y*O.y,r.x*O.z,r.y*O.w),U.viewport(o)}n=W.getFrustum(st),v(P,_,ut,J,this.type)}W.isPointLightShadow!==!0&&this.type===Hs&&S(W,_),W.needsUpdate=!1}m=this.type,g.needsUpdate=!1,s.setRenderTarget(y,R,L)};function S(w,P){const _=t.update(x);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null?w.mapPass=new mn(i.x,i.y,{format:Di,type:_n}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),f.uniforms.shadow_pass.value=w.map.depthTexture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,s.setRenderTarget(w.mapPass),s.clear(),s.renderBufferDirect(P,null,_,f,x,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value.set(w.map.width,w.map.height),d.uniforms.radius.value=w.radius,s.setRenderTarget(w.map),s.clear(),s.renderBufferDirect(P,null,_,d,x,null)}function E(w,P,_,y){let R=null;const L=_.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(L!==void 0)R=L;else if(R=_.isPointLight===!0?c:a,s.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const U=R.uuid,V=P.uuid;let H=l[U];H===void 0&&(H={},l[U]=H);let G=H[V];G===void 0&&(G=R.clone(),H[V]=G,P.addEventListener("dispose",M)),R=G}if(R.visible=P.visible,R.wireframe=P.wireframe,y===Hs?R.side=P.shadowSide!==null?P.shadowSide:P.side:R.side=P.shadowSide!==null?P.shadowSide:u[P.side],R.alphaMap=P.alphaMap,R.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,R.map=P.map,R.clipShadows=P.clipShadows,R.clippingPlanes=P.clippingPlanes,R.clipIntersection=P.clipIntersection,R.displacementMap=P.displacementMap,R.displacementScale=P.displacementScale,R.displacementBias=P.displacementBias,R.wireframeLinewidth=P.wireframeLinewidth,R.linewidth=P.linewidth,_.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const U=s.properties.get(R);U.light=_}return R}function v(w,P,_,y,R){if(w.visible===!1)return;if(w.layers.test(P.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&R===Hs)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,w.matrixWorld);const V=t.update(w),H=w.material;if(Array.isArray(H)){const G=V.groups;for(let J=0,W=G.length;J<W;J++){const tt=G[J],B=H[tt.materialIndex];if(B&&B.visible){const Q=E(w,B,y,R);w.onBeforeShadow(s,w,P,_,V,Q,tt),s.renderBufferDirect(_,null,V,Q,w,tt),w.onAfterShadow(s,w,P,_,V,Q,tt)}}}else if(H.visible){const G=E(w,H,y,R);w.onBeforeShadow(s,w,P,_,V,G,null),s.renderBufferDirect(_,null,V,G,w,null),w.onAfterShadow(s,w,P,_,V,G,null)}}const U=w.children;for(let V=0,H=U.length;V<H;V++)v(U[V],P,_,y,R)}function M(w){w.target.removeEventListener("dispose",M);for(const _ in l){const y=l[_],R=w.target.uuid;R in y&&(y[R].dispose(),delete y[R])}}}function Vx(s,t){function e(){let Y=!1;const _t=new ge;let lt=null;const vt=new ge(0,0,0,0);return{setMask:function(Et){lt!==Et&&!Y&&(s.colorMask(Et,Et,Et,Et),lt=Et)},setLocked:function(Et){Y=Et},setClear:function(Et,ht,Ft,Lt,pe){pe===!0&&(Et*=Lt,ht*=Lt,Ft*=Lt),_t.set(Et,ht,Ft,Lt),vt.equals(_t)===!1&&(s.clearColor(Et,ht,Ft,Lt),vt.copy(_t))},reset:function(){Y=!1,lt=null,vt.set(-1,0,0,0)}}}function n(){let Y=!1,_t=!1,lt=null,vt=null,Et=null;return{setReversed:function(ht){if(_t!==ht){const Ft=t.get("EXT_clip_control");ht?Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.ZERO_TO_ONE_EXT):Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.NEGATIVE_ONE_TO_ONE_EXT),_t=ht;const Lt=Et;Et=null,this.setClear(Lt)}},getReversed:function(){return _t},setTest:function(ht){ht?T(s.DEPTH_TEST):I(s.DEPTH_TEST)},setMask:function(ht){lt!==ht&&!Y&&(s.depthMask(ht),lt=ht)},setFunc:function(ht){if(_t&&(ht=$f[ht]),vt!==ht){switch(ht){case ga:s.depthFunc(s.NEVER);break;case xa:s.depthFunc(s.ALWAYS);break;case _a:s.depthFunc(s.LESS);break;case Zs:s.depthFunc(s.LEQUAL);break;case va:s.depthFunc(s.EQUAL);break;case Ma:s.depthFunc(s.GEQUAL);break;case ya:s.depthFunc(s.GREATER);break;case Sa:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}vt=ht}},setLocked:function(ht){Y=ht},setClear:function(ht){Et!==ht&&(Et=ht,_t&&(ht=1-ht),s.clearDepth(ht))},reset:function(){Y=!1,lt=null,vt=null,Et=null,_t=!1}}}function i(){let Y=!1,_t=null,lt=null,vt=null,Et=null,ht=null,Ft=null,Lt=null,pe=null;return{setTest:function(ae){Y||(ae?T(s.STENCIL_TEST):I(s.STENCIL_TEST))},setMask:function(ae){_t!==ae&&!Y&&(s.stencilMask(ae),_t=ae)},setFunc:function(ae,Mn,An){(lt!==ae||vt!==Mn||Et!==An)&&(s.stencilFunc(ae,Mn,An),lt=ae,vt=Mn,Et=An)},setOp:function(ae,Mn,An){(ht!==ae||Ft!==Mn||Lt!==An)&&(s.stencilOp(ae,Mn,An),ht=ae,Ft=Mn,Lt=An)},setLocked:function(ae){Y=ae},setClear:function(ae){pe!==ae&&(s.clearStencil(ae),pe=ae)},reset:function(){Y=!1,_t=null,lt=null,vt=null,Et=null,ht=null,Ft=null,Lt=null,pe=null}}}const r=new e,o=new n,a=new i,c=new WeakMap,l=new WeakMap;let h={},u={},f={},d=new WeakMap,p=[],x=null,g=!1,m=null,S=null,E=null,v=null,M=null,w=null,P=null,_=new kt(0,0,0),y=0,R=!1,L=null,U=null,V=null,H=null,G=null;const J=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,tt=0;const B=s.getParameter(s.VERSION);B.indexOf("WebGL")!==-1?(tt=parseFloat(/^WebGL (\d)/.exec(B)[1]),W=tt>=1):B.indexOf("OpenGL ES")!==-1&&(tt=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),W=tt>=2);let Q=null,st={};const ut=s.getParameter(s.SCISSOR_BOX),O=s.getParameter(s.VIEWPORT),X=new ge().fromArray(ut),z=new ge().fromArray(O);function k(Y,_t,lt,vt){const Et=new Uint8Array(4),ht=s.createTexture();s.bindTexture(Y,ht),s.texParameteri(Y,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(Y,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ft=0;Ft<lt;Ft++)Y===s.TEXTURE_3D||Y===s.TEXTURE_2D_ARRAY?s.texImage3D(_t,0,s.RGBA,1,1,vt,0,s.RGBA,s.UNSIGNED_BYTE,Et):s.texImage2D(_t+Ft,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Et);return ht}const C={};C[s.TEXTURE_2D]=k(s.TEXTURE_2D,s.TEXTURE_2D,1),C[s.TEXTURE_CUBE_MAP]=k(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),C[s.TEXTURE_2D_ARRAY]=k(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),C[s.TEXTURE_3D]=k(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),T(s.DEPTH_TEST),o.setFunc(Zs),Wt(!1),oe(tc),T(s.CULL_FACE),zt(ti);function T(Y){h[Y]!==!0&&(s.enable(Y),h[Y]=!0)}function I(Y){h[Y]!==!1&&(s.disable(Y),h[Y]=!1)}function K(Y,_t){return f[Y]!==_t?(s.bindFramebuffer(Y,_t),f[Y]=_t,Y===s.DRAW_FRAMEBUFFER&&(f[s.FRAMEBUFFER]=_t),Y===s.FRAMEBUFFER&&(f[s.DRAW_FRAMEBUFFER]=_t),!0):!1}function j(Y,_t){let lt=p,vt=!1;if(Y){lt=d.get(_t),lt===void 0&&(lt=[],d.set(_t,lt));const Et=Y.textures;if(lt.length!==Et.length||lt[0]!==s.COLOR_ATTACHMENT0){for(let ht=0,Ft=Et.length;ht<Ft;ht++)lt[ht]=s.COLOR_ATTACHMENT0+ht;lt.length=Et.length,vt=!0}}else lt[0]!==s.BACK&&(lt[0]=s.BACK,vt=!0);vt&&s.drawBuffers(lt)}function ft(Y){return x!==Y?(s.useProgram(Y),x=Y,!0):!1}const pt={[as]:s.FUNC_ADD,[gf]:s.FUNC_SUBTRACT,[xf]:s.FUNC_REVERSE_SUBTRACT};pt[_f]=s.MIN,pt[vf]=s.MAX;const wt={[Mf]:s.ZERO,[yf]:s.ONE,[Sf]:s.SRC_COLOR,[qh]:s.SRC_ALPHA,[Rf]:s.SRC_ALPHA_SATURATE,[Tf]:s.DST_COLOR,[wf]:s.DST_ALPHA,[bf]:s.ONE_MINUS_SRC_COLOR,[Yh]:s.ONE_MINUS_SRC_ALPHA,[Af]:s.ONE_MINUS_DST_COLOR,[Ef]:s.ONE_MINUS_DST_ALPHA,[Cf]:s.CONSTANT_COLOR,[Pf]:s.ONE_MINUS_CONSTANT_COLOR,[Lf]:s.CONSTANT_ALPHA,[If]:s.ONE_MINUS_CONSTANT_ALPHA};function zt(Y,_t,lt,vt,Et,ht,Ft,Lt,pe,ae){if(Y===ti){g===!0&&(I(s.BLEND),g=!1);return}if(g===!1&&(T(s.BLEND),g=!0),Y!==mf){if(Y!==m||ae!==R){if((S!==as||M!==as)&&(s.blendEquation(s.FUNC_ADD),S=as,M=as),ae)switch(Y){case Vs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ec:s.blendFunc(s.ONE,s.ONE);break;case nc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ic:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:ie("WebGLState: Invalid blending: ",Y);break}else switch(Y){case Vs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ec:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case nc:ie("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ic:ie("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ie("WebGLState: Invalid blending: ",Y);break}E=null,v=null,w=null,P=null,_.set(0,0,0),y=0,m=Y,R=ae}return}Et=Et||_t,ht=ht||lt,Ft=Ft||vt,(_t!==S||Et!==M)&&(s.blendEquationSeparate(pt[_t],pt[Et]),S=_t,M=Et),(lt!==E||vt!==v||ht!==w||Ft!==P)&&(s.blendFuncSeparate(wt[lt],wt[vt],wt[ht],wt[Ft]),E=lt,v=vt,w=ht,P=Ft),(Lt.equals(_)===!1||pe!==y)&&(s.blendColor(Lt.r,Lt.g,Lt.b,pe),_.copy(Lt),y=pe),m=Y,R=!1}function Ot(Y,_t){Y.side===Kn?I(s.CULL_FACE):T(s.CULL_FACE);let lt=Y.side===en;_t&&(lt=!lt),Wt(lt),Y.blending===Vs&&Y.transparent===!1?zt(ti):zt(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),o.setFunc(Y.depthFunc),o.setTest(Y.depthTest),o.setMask(Y.depthWrite),r.setMask(Y.colorWrite);const vt=Y.stencilWrite;a.setTest(vt),vt&&(a.setMask(Y.stencilWriteMask),a.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),a.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),Fe(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?T(s.SAMPLE_ALPHA_TO_COVERAGE):I(s.SAMPLE_ALPHA_TO_COVERAGE)}function Wt(Y){L!==Y&&(Y?s.frontFace(s.CW):s.frontFace(s.CCW),L=Y)}function oe(Y){Y!==ff?(T(s.CULL_FACE),Y!==U&&(Y===tc?s.cullFace(s.BACK):Y===df?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):I(s.CULL_FACE),U=Y}function Ee(Y){Y!==V&&(W&&s.lineWidth(Y),V=Y)}function Fe(Y,_t,lt){Y?(T(s.POLYGON_OFFSET_FILL),(H!==_t||G!==lt)&&(H=_t,G=lt,o.getReversed()&&(_t=-_t),s.polygonOffset(_t,lt))):I(s.POLYGON_OFFSET_FILL)}function Me(Y){Y?T(s.SCISSOR_TEST):I(s.SCISSOR_TEST)}function Te(Y){Y===void 0&&(Y=s.TEXTURE0+J-1),Q!==Y&&(s.activeTexture(Y),Q=Y)}function $(Y,_t,lt){lt===void 0&&(Q===null?lt=s.TEXTURE0+J-1:lt=Q);let vt=st[lt];vt===void 0&&(vt={type:void 0,texture:void 0},st[lt]=vt),(vt.type!==Y||vt.texture!==_t)&&(Q!==lt&&(s.activeTexture(lt),Q=lt),s.bindTexture(Y,_t||C[Y]),vt.type=Y,vt.texture=_t)}function Ve(){const Y=st[Q];Y!==void 0&&Y.type!==void 0&&(s.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function ce(){try{s.compressedTexImage2D(...arguments)}catch(Y){ie("WebGLState:",Y)}}function N(){try{s.compressedTexImage3D(...arguments)}catch(Y){ie("WebGLState:",Y)}}function b(){try{s.texSubImage2D(...arguments)}catch(Y){ie("WebGLState:",Y)}}function Z(){try{s.texSubImage3D(...arguments)}catch(Y){ie("WebGLState:",Y)}}function it(){try{s.compressedTexSubImage2D(...arguments)}catch(Y){ie("WebGLState:",Y)}}function ot(){try{s.compressedTexSubImage3D(...arguments)}catch(Y){ie("WebGLState:",Y)}}function dt(){try{s.texStorage2D(...arguments)}catch(Y){ie("WebGLState:",Y)}}function mt(){try{s.texStorage3D(...arguments)}catch(Y){ie("WebGLState:",Y)}}function at(){try{s.texImage2D(...arguments)}catch(Y){ie("WebGLState:",Y)}}function ct(){try{s.texImage3D(...arguments)}catch(Y){ie("WebGLState:",Y)}}function gt(Y){return u[Y]!==void 0?u[Y]:s.getParameter(Y)}function Dt(Y,_t){u[Y]!==_t&&(s.pixelStorei(Y,_t),u[Y]=_t)}function Mt(Y){X.equals(Y)===!1&&(s.scissor(Y.x,Y.y,Y.z,Y.w),X.copy(Y))}function xt(Y){z.equals(Y)===!1&&(s.viewport(Y.x,Y.y,Y.z,Y.w),z.copy(Y))}function Ut(Y,_t){let lt=l.get(_t);lt===void 0&&(lt=new WeakMap,l.set(_t,lt));let vt=lt.get(Y);vt===void 0&&(vt=s.getUniformBlockIndex(_t,Y.name),lt.set(Y,vt))}function Ht(Y,_t){const vt=l.get(_t).get(Y);c.get(_t)!==vt&&(s.uniformBlockBinding(_t,vt,Y.__bindingPointIndex),c.set(_t,vt))}function Yt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},u={},Q=null,st={},f={},d=new WeakMap,p=[],x=null,g=!1,m=null,S=null,E=null,v=null,M=null,w=null,P=null,_=new kt(0,0,0),y=0,R=!1,L=null,U=null,V=null,H=null,G=null,X.set(0,0,s.canvas.width,s.canvas.height),z.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:T,disable:I,bindFramebuffer:K,drawBuffers:j,useProgram:ft,setBlending:zt,setMaterial:Ot,setFlipSided:Wt,setCullFace:oe,setLineWidth:Ee,setPolygonOffset:Fe,setScissorTest:Me,activeTexture:Te,bindTexture:$,unbindTexture:Ve,compressedTexImage2D:ce,compressedTexImage3D:N,texImage2D:at,texImage3D:ct,pixelStorei:Dt,getParameter:gt,updateUBOMapping:Ut,uniformBlockBinding:Ht,texStorage2D:dt,texStorage3D:mt,texSubImage2D:b,texSubImage3D:Z,compressedTexSubImage2D:it,compressedTexSubImage3D:ot,scissor:Mt,viewport:xt,reset:Yt}}function Wx(s,t,e,n,i,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Bt,h=new WeakMap,u=new Set;let f;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(N,b){return p?new OffscreenCanvas(N,b):tr("canvas")}function g(N,b,Z){let it=1;const ot=ce(N);if((ot.width>Z||ot.height>Z)&&(it=Z/Math.max(ot.width,ot.height)),it<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const dt=Math.floor(it*ot.width),mt=Math.floor(it*ot.height);f===void 0&&(f=x(dt,mt));const at=b?x(dt,mt):f;return at.width=dt,at.height=mt,at.getContext("2d").drawImage(N,0,0,dt,mt),Gt("WebGLRenderer: Texture has been resized from ("+ot.width+"x"+ot.height+") to ("+dt+"x"+mt+")."),at}else return"data"in N&&Gt("WebGLRenderer: Image in DataTexture is too big ("+ot.width+"x"+ot.height+")."),N;return N}function m(N){return N.generateMipmaps}function S(N){s.generateMipmap(N)}function E(N){return N.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?s.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function v(N,b,Z,it,ot,dt=!1){if(N!==null){if(s[N]!==void 0)return s[N];Gt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let mt;it&&(mt=t.get("EXT_texture_norm16"),mt||Gt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let at=b;if(b===s.RED&&(Z===s.FLOAT&&(at=s.R32F),Z===s.HALF_FLOAT&&(at=s.R16F),Z===s.UNSIGNED_BYTE&&(at=s.R8),Z===s.UNSIGNED_SHORT&&mt&&(at=mt.R16_EXT),Z===s.SHORT&&mt&&(at=mt.R16_SNORM_EXT)),b===s.RED_INTEGER&&(Z===s.UNSIGNED_BYTE&&(at=s.R8UI),Z===s.UNSIGNED_SHORT&&(at=s.R16UI),Z===s.UNSIGNED_INT&&(at=s.R32UI),Z===s.BYTE&&(at=s.R8I),Z===s.SHORT&&(at=s.R16I),Z===s.INT&&(at=s.R32I)),b===s.RG&&(Z===s.FLOAT&&(at=s.RG32F),Z===s.HALF_FLOAT&&(at=s.RG16F),Z===s.UNSIGNED_BYTE&&(at=s.RG8),Z===s.UNSIGNED_SHORT&&mt&&(at=mt.RG16_EXT),Z===s.SHORT&&mt&&(at=mt.RG16_SNORM_EXT)),b===s.RG_INTEGER&&(Z===s.UNSIGNED_BYTE&&(at=s.RG8UI),Z===s.UNSIGNED_SHORT&&(at=s.RG16UI),Z===s.UNSIGNED_INT&&(at=s.RG32UI),Z===s.BYTE&&(at=s.RG8I),Z===s.SHORT&&(at=s.RG16I),Z===s.INT&&(at=s.RG32I)),b===s.RGB_INTEGER&&(Z===s.UNSIGNED_BYTE&&(at=s.RGB8UI),Z===s.UNSIGNED_SHORT&&(at=s.RGB16UI),Z===s.UNSIGNED_INT&&(at=s.RGB32UI),Z===s.BYTE&&(at=s.RGB8I),Z===s.SHORT&&(at=s.RGB16I),Z===s.INT&&(at=s.RGB32I)),b===s.RGBA_INTEGER&&(Z===s.UNSIGNED_BYTE&&(at=s.RGBA8UI),Z===s.UNSIGNED_SHORT&&(at=s.RGBA16UI),Z===s.UNSIGNED_INT&&(at=s.RGBA32UI),Z===s.BYTE&&(at=s.RGBA8I),Z===s.SHORT&&(at=s.RGBA16I),Z===s.INT&&(at=s.RGBA32I)),b===s.RGB&&(Z===s.UNSIGNED_SHORT&&mt&&(at=mt.RGB16_EXT),Z===s.SHORT&&mt&&(at=mt.RGB16_SNORM_EXT),Z===s.UNSIGNED_INT_5_9_9_9_REV&&(at=s.RGB9_E5),Z===s.UNSIGNED_INT_10F_11F_11F_REV&&(at=s.R11F_G11F_B10F)),b===s.RGBA){const ct=dt?jr:ee.getTransfer(ot);Z===s.FLOAT&&(at=s.RGBA32F),Z===s.HALF_FLOAT&&(at=s.RGBA16F),Z===s.UNSIGNED_BYTE&&(at=ct===he?s.SRGB8_ALPHA8:s.RGBA8),Z===s.UNSIGNED_SHORT&&mt&&(at=mt.RGBA16_EXT),Z===s.SHORT&&mt&&(at=mt.RGBA16_SNORM_EXT),Z===s.UNSIGNED_SHORT_4_4_4_4&&(at=s.RGBA4),Z===s.UNSIGNED_SHORT_5_5_5_1&&(at=s.RGB5_A1)}return(at===s.R16F||at===s.R32F||at===s.RG16F||at===s.RG32F||at===s.RGBA16F||at===s.RGBA32F)&&t.get("EXT_color_buffer_float"),at}function M(N,b){let Z;return N?b===null||b===zn||b===Qs?Z=s.DEPTH24_STENCIL8:b===Tn?Z=s.DEPTH32F_STENCIL8:b===Js&&(Z=s.DEPTH24_STENCIL8,Gt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===zn||b===Qs?Z=s.DEPTH_COMPONENT24:b===Tn?Z=s.DEPTH_COMPONENT32F:b===Js&&(Z=s.DEPTH_COMPONENT16),Z}function w(N,b){return m(N)===!0||N.isFramebufferTexture&&N.minFilter!==ke&&N.minFilter!==Be?Math.log2(Math.max(b.width,b.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?b.mipmaps.length:1}function P(N){const b=N.target;b.removeEventListener("dispose",P),y(b),b.isVideoTexture&&h.delete(b),b.isHTMLTexture&&u.delete(b)}function _(N){const b=N.target;b.removeEventListener("dispose",_),L(b)}function y(N){const b=n.get(N);if(b.__webglInit===void 0)return;const Z=N.source,it=d.get(Z);if(it){const ot=it[b.__cacheKey];ot.usedTimes--,ot.usedTimes===0&&R(N),Object.keys(it).length===0&&d.delete(Z)}n.remove(N)}function R(N){const b=n.get(N);s.deleteTexture(b.__webglTexture);const Z=N.source,it=d.get(Z);delete it[b.__cacheKey],o.memory.textures--}function L(N){const b=n.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),n.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let it=0;it<6;it++){if(Array.isArray(b.__webglFramebuffer[it]))for(let ot=0;ot<b.__webglFramebuffer[it].length;ot++)s.deleteFramebuffer(b.__webglFramebuffer[it][ot]);else s.deleteFramebuffer(b.__webglFramebuffer[it]);b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer[it])}else{if(Array.isArray(b.__webglFramebuffer))for(let it=0;it<b.__webglFramebuffer.length;it++)s.deleteFramebuffer(b.__webglFramebuffer[it]);else s.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&s.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let it=0;it<b.__webglColorRenderbuffer.length;it++)b.__webglColorRenderbuffer[it]&&s.deleteRenderbuffer(b.__webglColorRenderbuffer[it]);b.__webglDepthRenderbuffer&&s.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const Z=N.textures;for(let it=0,ot=Z.length;it<ot;it++){const dt=n.get(Z[it]);dt.__webglTexture&&(s.deleteTexture(dt.__webglTexture),o.memory.textures--),n.remove(Z[it])}n.remove(N)}let U=0;function V(){U=0}function H(){return U}function G(N){U=N}function J(){const N=U;return N>=i.maxTextures&&Gt("WebGLTextures: Trying to use "+(N+1)+" texture units while this GPU supports only "+i.maxTextures),U+=1,N}function W(N){const b=[];return b.push(N.wrapS),b.push(N.wrapT),b.push(N.wrapR||0),b.push(N.magFilter),b.push(N.minFilter),b.push(N.anisotropy),b.push(N.internalFormat),b.push(N.format),b.push(N.type),b.push(N.generateMipmaps),b.push(N.premultiplyAlpha),b.push(N.flipY),b.push(N.unpackAlignment),b.push(N.colorSpace),b.join()}function tt(N,b){const Z=n.get(N);if(N.isVideoTexture&&$(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&Z.__version!==N.version){const it=N.image;if(it===null)Gt("WebGLRenderer: Texture marked for update but no image data found.");else if(it.complete===!1)Gt("WebGLRenderer: Texture marked for update but image is incomplete");else{I(Z,N,b);return}}else N.isExternalTexture&&(Z.__webglTexture=N.sourceTexture?N.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,Z.__webglTexture,s.TEXTURE0+b)}function B(N,b){const Z=n.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&Z.__version!==N.version){I(Z,N,b);return}else N.isExternalTexture&&(Z.__webglTexture=N.sourceTexture?N.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,Z.__webglTexture,s.TEXTURE0+b)}function Q(N,b){const Z=n.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&Z.__version!==N.version){I(Z,N,b);return}e.bindTexture(s.TEXTURE_3D,Z.__webglTexture,s.TEXTURE0+b)}function st(N,b){const Z=n.get(N);if(N.isCubeDepthTexture!==!0&&N.version>0&&Z.__version!==N.version){K(Z,N,b);return}e.bindTexture(s.TEXTURE_CUBE_MAP,Z.__webglTexture,s.TEXTURE0+b)}const ut={[ba]:s.REPEAT,[Qn]:s.CLAMP_TO_EDGE,[wa]:s.MIRRORED_REPEAT},O={[ke]:s.NEAREST,[Nf]:s.NEAREST_MIPMAP_NEAREST,[ar]:s.NEAREST_MIPMAP_LINEAR,[Be]:s.LINEAR,[To]:s.LINEAR_MIPMAP_NEAREST,[yi]:s.LINEAR_MIPMAP_LINEAR},X={[kf]:s.NEVER,[Wf]:s.ALWAYS,[Bf]:s.LESS,[Ml]:s.LEQUAL,[Hf]:s.EQUAL,[yl]:s.GEQUAL,[Gf]:s.GREATER,[Vf]:s.NOTEQUAL};function z(N,b){if(b.type===Tn&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Be||b.magFilter===To||b.magFilter===ar||b.magFilter===yi||b.minFilter===Be||b.minFilter===To||b.minFilter===ar||b.minFilter===yi)&&Gt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(N,s.TEXTURE_WRAP_S,ut[b.wrapS]),s.texParameteri(N,s.TEXTURE_WRAP_T,ut[b.wrapT]),(N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY)&&s.texParameteri(N,s.TEXTURE_WRAP_R,ut[b.wrapR]),s.texParameteri(N,s.TEXTURE_MAG_FILTER,O[b.magFilter]),s.texParameteri(N,s.TEXTURE_MIN_FILTER,O[b.minFilter]),b.compareFunction&&(s.texParameteri(N,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(N,s.TEXTURE_COMPARE_FUNC,X[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===ke||b.minFilter!==ar&&b.minFilter!==yi||b.type===Tn&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const Z=t.get("EXT_texture_filter_anisotropic");s.texParameterf(N,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function k(N,b){let Z=!1;N.__webglInit===void 0&&(N.__webglInit=!0,b.addEventListener("dispose",P));const it=b.source;let ot=d.get(it);ot===void 0&&(ot={},d.set(it,ot));const dt=W(b);if(dt!==N.__cacheKey){ot[dt]===void 0&&(ot[dt]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,Z=!0),ot[dt].usedTimes++;const mt=ot[N.__cacheKey];mt!==void 0&&(ot[N.__cacheKey].usedTimes--,mt.usedTimes===0&&R(b)),N.__cacheKey=dt,N.__webglTexture=ot[dt].texture}return Z}function C(N,b,Z){return Math.floor(Math.floor(N/Z)/b)}function T(N,b,Z,it){const dt=N.updateRanges;if(dt.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,b.width,b.height,Z,it,b.data);else{dt.sort((Dt,Mt)=>Dt.start-Mt.start);let mt=0;for(let Dt=1;Dt<dt.length;Dt++){const Mt=dt[mt],xt=dt[Dt],Ut=Mt.start+Mt.count,Ht=C(xt.start,b.width,4),Yt=C(Mt.start,b.width,4);xt.start<=Ut+1&&Ht===Yt&&C(xt.start+xt.count-1,b.width,4)===Ht?Mt.count=Math.max(Mt.count,xt.start+xt.count-Mt.start):(++mt,dt[mt]=xt)}dt.length=mt+1;const at=e.getParameter(s.UNPACK_ROW_LENGTH),ct=e.getParameter(s.UNPACK_SKIP_PIXELS),gt=e.getParameter(s.UNPACK_SKIP_ROWS);e.pixelStorei(s.UNPACK_ROW_LENGTH,b.width);for(let Dt=0,Mt=dt.length;Dt<Mt;Dt++){const xt=dt[Dt],Ut=Math.floor(xt.start/4),Ht=Math.ceil(xt.count/4),Yt=Ut%b.width,Y=Math.floor(Ut/b.width),_t=Ht,lt=1;e.pixelStorei(s.UNPACK_SKIP_PIXELS,Yt),e.pixelStorei(s.UNPACK_SKIP_ROWS,Y),e.texSubImage2D(s.TEXTURE_2D,0,Yt,Y,_t,lt,Z,it,b.data)}N.clearUpdateRanges(),e.pixelStorei(s.UNPACK_ROW_LENGTH,at),e.pixelStorei(s.UNPACK_SKIP_PIXELS,ct),e.pixelStorei(s.UNPACK_SKIP_ROWS,gt)}}function I(N,b,Z){let it=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(it=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&(it=s.TEXTURE_3D);const ot=k(N,b),dt=b.source;e.bindTexture(it,N.__webglTexture,s.TEXTURE0+Z);const mt=n.get(dt);if(dt.version!==mt.__version||ot===!0){if(e.activeTexture(s.TEXTURE0+Z),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){const lt=ee.getPrimaries(ee.workingColorSpace),vt=b.colorSpace===vi?null:ee.getPrimaries(b.colorSpace),Et=b.colorSpace===vi||lt===vt?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Et)}e.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment);let ct=g(b.image,!1,i.maxTextureSize);ct=Ve(b,ct);const gt=r.convert(b.format,b.colorSpace),Dt=r.convert(b.type);let Mt=v(b.internalFormat,gt,Dt,b.normalized,b.colorSpace,b.isVideoTexture);z(it,b);let xt;const Ut=b.mipmaps,Ht=b.isVideoTexture!==!0,Yt=mt.__version===void 0||ot===!0,Y=dt.dataReady,_t=w(b,ct);if(b.isDepthTexture)Mt=M(b.format===Pi,b.type),Yt&&(Ht?e.texStorage2D(s.TEXTURE_2D,1,Mt,ct.width,ct.height):e.texImage2D(s.TEXTURE_2D,0,Mt,ct.width,ct.height,0,gt,Dt,null));else if(b.isDataTexture)if(Ut.length>0){Ht&&Yt&&e.texStorage2D(s.TEXTURE_2D,_t,Mt,Ut[0].width,Ut[0].height);for(let lt=0,vt=Ut.length;lt<vt;lt++)xt=Ut[lt],Ht?Y&&e.texSubImage2D(s.TEXTURE_2D,lt,0,0,xt.width,xt.height,gt,Dt,xt.data):e.texImage2D(s.TEXTURE_2D,lt,Mt,xt.width,xt.height,0,gt,Dt,xt.data);b.generateMipmaps=!1}else Ht?(Yt&&e.texStorage2D(s.TEXTURE_2D,_t,Mt,ct.width,ct.height),Y&&T(b,ct,gt,Dt)):e.texImage2D(s.TEXTURE_2D,0,Mt,ct.width,ct.height,0,gt,Dt,ct.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Ht&&Yt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,_t,Mt,Ut[0].width,Ut[0].height,ct.depth);for(let lt=0,vt=Ut.length;lt<vt;lt++)if(xt=Ut[lt],b.format!==hn)if(gt!==null)if(Ht){if(Y)if(b.layerUpdates.size>0){const Et=kc(xt.width,xt.height,b.format,b.type);for(const ht of b.layerUpdates){const Ft=xt.data.subarray(ht*Et/xt.data.BYTES_PER_ELEMENT,(ht+1)*Et/xt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,lt,0,0,ht,xt.width,xt.height,1,gt,Ft)}}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,lt,0,0,0,xt.width,xt.height,ct.depth,gt,xt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,lt,Mt,xt.width,xt.height,ct.depth,0,xt.data,0,0);else Gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ht?Y&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,lt,0,0,0,xt.width,xt.height,ct.depth,gt,Dt,xt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,lt,Mt,xt.width,xt.height,ct.depth,0,gt,Dt,xt.data);b.layerUpdates.size>0&&b.clearLayerUpdates()}else{Ht&&Yt&&e.texStorage2D(s.TEXTURE_2D,_t,Mt,Ut[0].width,Ut[0].height);for(let lt=0,vt=Ut.length;lt<vt;lt++)xt=Ut[lt],b.format!==hn?gt!==null?Ht?Y&&e.compressedTexSubImage2D(s.TEXTURE_2D,lt,0,0,xt.width,xt.height,gt,xt.data):e.compressedTexImage2D(s.TEXTURE_2D,lt,Mt,xt.width,xt.height,0,xt.data):Gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ht?Y&&e.texSubImage2D(s.TEXTURE_2D,lt,0,0,xt.width,xt.height,gt,Dt,xt.data):e.texImage2D(s.TEXTURE_2D,lt,Mt,xt.width,xt.height,0,gt,Dt,xt.data)}else if(b.isDataArrayTexture)if(Ht){if(Yt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,_t,Mt,ct.width,ct.height,ct.depth),Y)if(b.layerUpdates.size>0){const lt=kc(ct.width,ct.height,b.format,b.type);for(const vt of b.layerUpdates){const Et=ct.data.subarray(vt*lt/ct.data.BYTES_PER_ELEMENT,(vt+1)*lt/ct.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,vt,ct.width,ct.height,1,gt,Dt,Et)}b.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ct.width,ct.height,ct.depth,gt,Dt,ct.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Mt,ct.width,ct.height,ct.depth,0,gt,Dt,ct.data);else if(b.isData3DTexture)Ht?(Yt&&e.texStorage3D(s.TEXTURE_3D,_t,Mt,ct.width,ct.height,ct.depth),Y&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ct.width,ct.height,ct.depth,gt,Dt,ct.data)):e.texImage3D(s.TEXTURE_3D,0,Mt,ct.width,ct.height,ct.depth,0,gt,Dt,ct.data);else if(b.isFramebufferTexture){if(Yt)if(Ht)e.texStorage2D(s.TEXTURE_2D,_t,Mt,ct.width,ct.height);else{let lt=ct.width,vt=ct.height;for(let Et=0;Et<_t;Et++)e.texImage2D(s.TEXTURE_2D,Et,Mt,lt,vt,0,gt,Dt,null),lt>>=1,vt>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in s){const lt=s.canvas;if(lt.hasAttribute("layoutsubtree")||lt.setAttribute("layoutsubtree","true"),ct.parentNode!==lt){lt.appendChild(ct),u.add(b),lt.onpaint=vt=>{const Et=vt.changedElements;for(const ht of u)Et.includes(ht.image)&&(ht.needsUpdate=!0)},lt.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,ct);else{const Et=s.RGBA,ht=s.RGBA,Ft=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,Et,ht,Ft,ct)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Ut.length>0){if(Ht&&Yt){const lt=ce(Ut[0]);e.texStorage2D(s.TEXTURE_2D,_t,Mt,lt.width,lt.height)}for(let lt=0,vt=Ut.length;lt<vt;lt++)xt=Ut[lt],Ht?Y&&e.texSubImage2D(s.TEXTURE_2D,lt,0,0,gt,Dt,xt):e.texImage2D(s.TEXTURE_2D,lt,Mt,gt,Dt,xt);b.generateMipmaps=!1}else if(Ht){if(Yt){const lt=ce(ct);e.texStorage2D(s.TEXTURE_2D,_t,Mt,lt.width,lt.height)}Y&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,gt,Dt,ct)}else e.texImage2D(s.TEXTURE_2D,0,Mt,gt,Dt,ct);m(b)&&S(it),mt.__version=dt.version,b.onUpdate&&b.onUpdate(b)}N.__version=b.version}function K(N,b,Z){if(b.image.length!==6)return;const it=k(N,b),ot=b.source;e.bindTexture(s.TEXTURE_CUBE_MAP,N.__webglTexture,s.TEXTURE0+Z);const dt=n.get(ot);if(ot.version!==dt.__version||it===!0){e.activeTexture(s.TEXTURE0+Z);const mt=ee.getPrimaries(ee.workingColorSpace),at=b.colorSpace===vi?null:ee.getPrimaries(b.colorSpace),ct=b.colorSpace===vi||mt===at?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),e.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ct);const gt=b.isCompressedTexture||b.image[0].isCompressedTexture,Dt=b.image[0]&&b.image[0].isDataTexture,Mt=[];for(let ht=0;ht<6;ht++)!gt&&!Dt?Mt[ht]=g(b.image[ht],!0,i.maxCubemapSize):Mt[ht]=Dt?b.image[ht].image:b.image[ht],Mt[ht]=Ve(b,Mt[ht]);const xt=Mt[0],Ut=r.convert(b.format,b.colorSpace),Ht=r.convert(b.type),Yt=v(b.internalFormat,Ut,Ht,b.normalized,b.colorSpace),Y=b.isVideoTexture!==!0,_t=dt.__version===void 0||it===!0,lt=ot.dataReady;let vt=w(b,xt);z(s.TEXTURE_CUBE_MAP,b);let Et;if(gt){Y&&_t&&e.texStorage2D(s.TEXTURE_CUBE_MAP,vt,Yt,xt.width,xt.height);for(let ht=0;ht<6;ht++){Et=Mt[ht].mipmaps;for(let Ft=0;Ft<Et.length;Ft++){const Lt=Et[Ft];b.format!==hn?Ut!==null?Y?lt&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Ft,0,0,Lt.width,Lt.height,Ut,Lt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Ft,Yt,Lt.width,Lt.height,0,Lt.data):Gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Y?lt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Ft,0,0,Lt.width,Lt.height,Ut,Ht,Lt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Ft,Yt,Lt.width,Lt.height,0,Ut,Ht,Lt.data)}}}else{if(Et=b.mipmaps,Y&&_t){Et.length>0&&vt++;const ht=ce(Mt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,vt,Yt,ht.width,ht.height)}for(let ht=0;ht<6;ht++)if(Dt){Y?lt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,0,0,Mt[ht].width,Mt[ht].height,Ut,Ht,Mt[ht].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,Yt,Mt[ht].width,Mt[ht].height,0,Ut,Ht,Mt[ht].data);for(let Ft=0;Ft<Et.length;Ft++){const pe=Et[Ft].image[ht].image;Y?lt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Ft+1,0,0,pe.width,pe.height,Ut,Ht,pe.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Ft+1,Yt,pe.width,pe.height,0,Ut,Ht,pe.data)}}else{Y?lt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,0,0,Ut,Ht,Mt[ht]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,Yt,Ut,Ht,Mt[ht]);for(let Ft=0;Ft<Et.length;Ft++){const Lt=Et[Ft];Y?lt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Ft+1,0,0,Ut,Ht,Lt.image[ht]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Ft+1,Yt,Ut,Ht,Lt.image[ht])}}}m(b)&&S(s.TEXTURE_CUBE_MAP),dt.__version=ot.version,b.onUpdate&&b.onUpdate(b)}N.__version=b.version}function j(N,b,Z,it,ot,dt){const mt=r.convert(Z.format,Z.colorSpace),at=r.convert(Z.type),ct=v(Z.internalFormat,mt,at,Z.normalized,Z.colorSpace),gt=n.get(b),Dt=n.get(Z);if(Dt.__renderTarget=b,!gt.__hasExternalTextures){const Mt=Math.max(1,b.width>>dt),xt=Math.max(1,b.height>>dt);ot===s.TEXTURE_3D||ot===s.TEXTURE_2D_ARRAY?e.texImage3D(ot,dt,ct,Mt,xt,b.depth,0,mt,at,null):e.texImage2D(ot,dt,ct,Mt,xt,0,mt,at,null)}e.bindFramebuffer(s.FRAMEBUFFER,N),Te(b)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,it,ot,Dt.__webglTexture,0,Me(b)):(ot===s.TEXTURE_2D||ot>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ot<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,it,ot,Dt.__webglTexture,dt),e.bindFramebuffer(s.FRAMEBUFFER,null)}function ft(N,b,Z){if(s.bindRenderbuffer(s.RENDERBUFFER,N),b.depthBuffer){const it=b.depthTexture,ot=it&&it.isDepthTexture?it.type:null,dt=M(b.stencilBuffer,ot),mt=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Te(b)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Me(b),dt,b.width,b.height):Z?s.renderbufferStorageMultisample(s.RENDERBUFFER,Me(b),dt,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,dt,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,mt,s.RENDERBUFFER,N)}else{const it=b.textures;for(let ot=0;ot<it.length;ot++){const dt=it[ot],mt=r.convert(dt.format,dt.colorSpace),at=r.convert(dt.type),ct=v(dt.internalFormat,mt,at,dt.normalized,dt.colorSpace);Te(b)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Me(b),ct,b.width,b.height):Z?s.renderbufferStorageMultisample(s.RENDERBUFFER,Me(b),ct,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,ct,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function pt(N,b,Z){const it=b.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(s.FRAMEBUFFER,N),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ot=n.get(b.depthTexture);if(ot.__renderTarget=b,(!ot.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),it){if(ot.__webglInit===void 0&&(ot.__webglInit=!0,b.depthTexture.addEventListener("dispose",P)),ot.__webglTexture===void 0){ot.__webglTexture=s.createTexture(),e.bindTexture(s.TEXTURE_CUBE_MAP,ot.__webglTexture),z(s.TEXTURE_CUBE_MAP,b.depthTexture);const gt=r.convert(b.depthTexture.format),Dt=r.convert(b.depthTexture.type);let Mt;b.depthTexture.format===ii?Mt=s.DEPTH_COMPONENT24:b.depthTexture.format===Pi&&(Mt=s.DEPTH24_STENCIL8);for(let xt=0;xt<6;xt++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,Mt,b.width,b.height,0,gt,Dt,null)}}else tt(b.depthTexture,0);const dt=ot.__webglTexture,mt=Me(b),at=it?s.TEXTURE_CUBE_MAP_POSITIVE_X+Z:s.TEXTURE_2D,ct=b.depthTexture.format===Pi?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(b.depthTexture.format===ii)Te(b)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ct,at,dt,0,mt):s.framebufferTexture2D(s.FRAMEBUFFER,ct,at,dt,0);else if(b.depthTexture.format===Pi)Te(b)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ct,at,dt,0,mt):s.framebufferTexture2D(s.FRAMEBUFFER,ct,at,dt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function wt(N){const b=n.get(N),Z=N.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==N.depthTexture){const it=N.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),it){const ot=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,it.removeEventListener("dispose",ot)};it.addEventListener("dispose",ot),b.__depthDisposeCallback=ot}b.__boundDepthTexture=it}if(N.depthTexture&&!b.__autoAllocateDepthBuffer)if(Z)for(let it=0;it<6;it++)pt(b.__webglFramebuffer[it],N,it);else{const it=N.texture.mipmaps;it&&it.length>0?pt(b.__webglFramebuffer[0],N,0):pt(b.__webglFramebuffer,N,0)}else if(Z){b.__webglDepthbuffer=[];for(let it=0;it<6;it++)if(e.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[it]),b.__webglDepthbuffer[it]===void 0)b.__webglDepthbuffer[it]=s.createRenderbuffer(),ft(b.__webglDepthbuffer[it],N,!1);else{const ot=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,dt=b.__webglDepthbuffer[it];s.bindRenderbuffer(s.RENDERBUFFER,dt),s.framebufferRenderbuffer(s.FRAMEBUFFER,ot,s.RENDERBUFFER,dt)}}else{const it=N.texture.mipmaps;if(it&&it.length>0?e.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=s.createRenderbuffer(),ft(b.__webglDepthbuffer,N,!1);else{const ot=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,dt=b.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,dt),s.framebufferRenderbuffer(s.FRAMEBUFFER,ot,s.RENDERBUFFER,dt)}}e.bindFramebuffer(s.FRAMEBUFFER,null)}function zt(N,b,Z){const it=n.get(N);b!==void 0&&j(it.__webglFramebuffer,N,N.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),Z!==void 0&&wt(N)}function Ot(N){const b=N.texture,Z=n.get(N),it=n.get(b);N.addEventListener("dispose",_);const ot=N.textures,dt=N.isWebGLCubeRenderTarget===!0,mt=ot.length>1;if(mt||(it.__webglTexture===void 0&&(it.__webglTexture=s.createTexture()),it.__version=b.version,o.memory.textures++),dt){Z.__webglFramebuffer=[];for(let at=0;at<6;at++)if(b.mipmaps&&b.mipmaps.length>0){Z.__webglFramebuffer[at]=[];for(let ct=0;ct<b.mipmaps.length;ct++)Z.__webglFramebuffer[at][ct]=s.createFramebuffer()}else Z.__webglFramebuffer[at]=s.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){Z.__webglFramebuffer=[];for(let at=0;at<b.mipmaps.length;at++)Z.__webglFramebuffer[at]=s.createFramebuffer()}else Z.__webglFramebuffer=s.createFramebuffer();if(mt)for(let at=0,ct=ot.length;at<ct;at++){const gt=n.get(ot[at]);gt.__webglTexture===void 0&&(gt.__webglTexture=s.createTexture(),o.memory.textures++)}if(N.samples>0&&Te(N)===!1){Z.__webglMultisampledFramebuffer=s.createFramebuffer(),Z.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let at=0;at<ot.length;at++){const ct=ot[at];Z.__webglColorRenderbuffer[at]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,Z.__webglColorRenderbuffer[at]);const gt=r.convert(ct.format,ct.colorSpace),Dt=r.convert(ct.type),Mt=v(ct.internalFormat,gt,Dt,ct.normalized,ct.colorSpace,N.isXRRenderTarget===!0),xt=Me(N);s.renderbufferStorageMultisample(s.RENDERBUFFER,xt,Mt,N.width,N.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+at,s.RENDERBUFFER,Z.__webglColorRenderbuffer[at])}s.bindRenderbuffer(s.RENDERBUFFER,null),N.depthBuffer&&(Z.__webglDepthRenderbuffer=s.createRenderbuffer(),ft(Z.__webglDepthRenderbuffer,N,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(dt){e.bindTexture(s.TEXTURE_CUBE_MAP,it.__webglTexture),z(s.TEXTURE_CUBE_MAP,b);for(let at=0;at<6;at++)if(b.mipmaps&&b.mipmaps.length>0)for(let ct=0;ct<b.mipmaps.length;ct++)j(Z.__webglFramebuffer[at][ct],N,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+at,ct);else j(Z.__webglFramebuffer[at],N,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);m(b)&&S(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(mt){for(let at=0,ct=ot.length;at<ct;at++){const gt=ot[at],Dt=n.get(gt);let Mt=s.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Mt=N.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(Mt,Dt.__webglTexture),z(Mt,gt),j(Z.__webglFramebuffer,N,gt,s.COLOR_ATTACHMENT0+at,Mt,0),m(gt)&&S(Mt)}e.unbindTexture()}else{let at=s.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(at=N.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(at,it.__webglTexture),z(at,b),b.mipmaps&&b.mipmaps.length>0)for(let ct=0;ct<b.mipmaps.length;ct++)j(Z.__webglFramebuffer[ct],N,b,s.COLOR_ATTACHMENT0,at,ct);else j(Z.__webglFramebuffer,N,b,s.COLOR_ATTACHMENT0,at,0);m(b)&&S(at),e.unbindTexture()}N.depthBuffer&&wt(N)}function Wt(N){const b=N.textures;for(let Z=0,it=b.length;Z<it;Z++){const ot=b[Z];if(m(ot)){const dt=E(N),mt=n.get(ot).__webglTexture;e.bindTexture(dt,mt),S(dt),e.unbindTexture()}}}const oe=[],Ee=[];function Fe(N){if(N.samples>0){if(Te(N)===!1){const b=N.textures,Z=N.width,it=N.height;let ot=s.COLOR_BUFFER_BIT;const dt=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,mt=n.get(N),at=b.length>1;if(at)for(let gt=0;gt<b.length;gt++)e.bindFramebuffer(s.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+gt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,mt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+gt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,mt.__webglMultisampledFramebuffer);const ct=N.texture.mipmaps;ct&&ct.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,mt.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,mt.__webglFramebuffer);for(let gt=0;gt<b.length;gt++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(ot|=s.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(ot|=s.STENCIL_BUFFER_BIT)),at){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,mt.__webglColorRenderbuffer[gt]);const Dt=n.get(b[gt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Dt,0)}s.blitFramebuffer(0,0,Z,it,0,0,Z,it,ot,s.NEAREST),c===!0&&(oe.length=0,Ee.length=0,oe.push(s.COLOR_ATTACHMENT0+gt),N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&(oe.push(dt),Ee.push(dt),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Ee)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,oe))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),at)for(let gt=0;gt<b.length;gt++){e.bindFramebuffer(s.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+gt,s.RENDERBUFFER,mt.__webglColorRenderbuffer[gt]);const Dt=n.get(b[gt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,mt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+gt,s.TEXTURE_2D,Dt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,mt.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&c){const b=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[b])}}}function Me(N){return Math.min(i.maxSamples,N.samples)}function Te(N){const b=n.get(N);return N.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function $(N){const b=o.render.frame;h.get(N)!==b&&(h.set(N,b),N.update())}function Ve(N,b){const Z=N.colorSpace,it=N.format,ot=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||Z!==Qr&&Z!==vi&&(ee.getTransfer(Z)===he?(it!==hn||ot!==tn)&&Gt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ie("WebGLTextures: Unsupported texture color space:",Z)),b}function ce(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(l.width=N.naturalWidth||N.width,l.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(l.width=N.displayWidth,l.height=N.displayHeight):(l.width=N.width,l.height=N.height),l}this.allocateTextureUnit=J,this.resetTextureUnits=V,this.getTextureUnits=H,this.setTextureUnits=G,this.setTexture2D=tt,this.setTexture2DArray=B,this.setTexture3D=Q,this.setTextureCube=st,this.rebindTextures=zt,this.setupRenderTarget=Ot,this.updateRenderTargetMipmap=Wt,this.updateMultisampleRenderTarget=Fe,this.setupDepthRenderbuffer=wt,this.setupFrameBufferTexture=j,this.useMultisampledRTT=Te,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Xx(s,t){function e(n,i=vi){let r;const o=ee.getTransfer(i);if(n===tn)return s.UNSIGNED_BYTE;if(n===ml)return s.UNSIGNED_SHORT_4_4_4_4;if(n===gl)return s.UNSIGNED_SHORT_5_5_5_1;if(n===iu)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===su)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===eu)return s.BYTE;if(n===nu)return s.SHORT;if(n===Js)return s.UNSIGNED_SHORT;if(n===pl)return s.INT;if(n===zn)return s.UNSIGNED_INT;if(n===Tn)return s.FLOAT;if(n===_n)return s.HALF_FLOAT;if(n===ru)return s.ALPHA;if(n===ou)return s.RGB;if(n===hn)return s.RGBA;if(n===ii)return s.DEPTH_COMPONENT;if(n===Pi)return s.DEPTH_STENCIL;if(n===xo)return s.RED;if(n===xl)return s.RED_INTEGER;if(n===Di)return s.RG;if(n===_l)return s.RG_INTEGER;if(n===vl)return s.RGBA_INTEGER;if(n===Vr||n===Wr||n===Xr||n===qr)if(o===he)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Vr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Wr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Xr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===qr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Vr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Wr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Xr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===qr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ea||n===Ta||n===Aa||n===Ra)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ea)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ta)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Aa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ra)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ca||n===Pa||n===La||n===Ia||n===Da||n===Zr||n===Ua)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ca||n===Pa)return o===he?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===La)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ia)return r.COMPRESSED_R11_EAC;if(n===Da)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Zr)return r.COMPRESSED_RG11_EAC;if(n===Ua)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Na||n===Fa||n===za||n===Oa||n===ka||n===Ba||n===Ha||n===Ga||n===Va||n===Wa||n===Xa||n===qa||n===Ya||n===$a)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Na)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Fa)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===za)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Oa)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ka)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ba)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ha)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ga)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Va)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Wa)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Xa)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===qa)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ya)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===$a)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ka||n===Za||n===Ja)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Ka)return o===he?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Za)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ja)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Qa||n===ja||n===Jr||n===tl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Qa)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ja)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Jr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===tl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Qs?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}const qx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Yx=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class $x{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new xu(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new nn({vertexShader:qx,fragmentShader:Yx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ce(new si(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Kx extends Ni{constructor(t,e){super();const n=this;let i=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,f=null,d=null,p=null;const x=typeof XRWebGLBinding<"u",g=new $x,m={},S=e.getContextAttributes();let E=null,v=null;const M=[],w=[],P=new Bt;let _=null,y=null;const R=new je;R.viewport=new ge;const L=new je;L.viewport=new ge;const U=[R,L],V=new ip;let H=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(C){let T=M[C];return T===void 0&&(T=new Do,M[C]=T),T.getTargetRaySpace()},this.getControllerGrip=function(C){let T=M[C];return T===void 0&&(T=new Do,M[C]=T),T.getGripSpace()},this.getHand=function(C){let T=M[C];return T===void 0&&(T=new Do,M[C]=T),T.getHandSpace()};function J(C){const T=w.indexOf(C.inputSource);if(T===-1)return;const I=M[T];I!==void 0&&(I.update(C.inputSource,C.frame,l||o),I.dispatchEvent({type:C.type,data:C.inputSource}))}function W(){i.removeEventListener("select",J),i.removeEventListener("selectstart",J),i.removeEventListener("selectend",J),i.removeEventListener("squeeze",J),i.removeEventListener("squeezestart",J),i.removeEventListener("squeezeend",J),i.removeEventListener("end",W),i.removeEventListener("inputsourceschange",tt);for(let C=0;C<M.length;C++){const T=w[C];T!==null&&(w[C]=null,M[C].disconnect(T))}H=null,G=null,g.reset();for(const C in m)delete m[C];if(t.setRenderTarget(E),d=null,f=null,u=null,i=null,v=null,k.stop(),n.isPresenting=!1,t.setPixelRatio(_),t.setSize(P.width,P.height,!1),y!==null){const C=y.camera;C.fov=y.fov,C.zoom=y.zoom,C.updateProjectionMatrix(),y=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(C){r=C,n.isPresenting===!0&&Gt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(C){a=C,n.isPresenting===!0&&Gt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(C){l=C},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(i,e)),u},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(C){if(i=C,i!==null){if(E=t.getRenderTarget(),i.addEventListener("select",J),i.addEventListener("selectstart",J),i.addEventListener("selectend",J),i.addEventListener("squeeze",J),i.addEventListener("squeezestart",J),i.addEventListener("squeezeend",J),i.addEventListener("end",W),i.addEventListener("inputsourceschange",tt),S.xrCompatible!==!0&&await e.makeXRCompatible(),_=t.getPixelRatio(),t.getSize(P),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let I=null,K=null,j=null;S.depth&&(j=S.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,I=S.stencil?Pi:ii,K=S.stencil?Qs:zn);const ft={colorFormat:e.RGBA8,depthFormat:j,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(ft),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),v=new mn(f.textureWidth,f.textureHeight,{format:hn,type:tn,depthTexture:new nr(f.textureWidth,f.textureHeight,K,void 0,void 0,void 0,void 0,void 0,void 0,I),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{const I={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,e,I),i.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new mn(d.framebufferWidth,d.framebufferHeight,{format:hn,type:tn,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),k.setContext(i),k.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function tt(C){for(let T=0;T<C.removed.length;T++){const I=C.removed[T],K=w.indexOf(I);K>=0&&(w[K]=null,M[K].disconnect(I))}for(let T=0;T<C.added.length;T++){const I=C.added[T];let K=w.indexOf(I);if(K===-1){for(let ft=0;ft<M.length;ft++)if(ft>=w.length){w.push(I),K=ft;break}else if(w[ft]===null){w[ft]=I,K=ft;break}if(K===-1)break}const j=M[K];j&&j.connect(I)}}const B=new F,Q=new F;function st(C,T,I){B.setFromMatrixPosition(T.matrixWorld),Q.setFromMatrixPosition(I.matrixWorld);const K=B.distanceTo(Q),j=T.projectionMatrix.elements,ft=I.projectionMatrix.elements,pt=j[14]/(j[10]-1),wt=j[14]/(j[10]+1),zt=(j[9]+1)/j[5],Ot=(j[9]-1)/j[5],Wt=(j[8]-1)/j[0],oe=(ft[8]+1)/ft[0],Ee=pt*Wt,Fe=pt*oe,Me=K/(-Wt+oe),Te=Me*-Wt;if(T.matrixWorld.decompose(C.position,C.quaternion,C.scale),C.translateX(Te),C.translateZ(Me),C.matrixWorld.compose(C.position,C.quaternion,C.scale),C.matrixWorldInverse.copy(C.matrixWorld).invert(),j[10]===-1)C.projectionMatrix.copy(T.projectionMatrix),C.projectionMatrixInverse.copy(T.projectionMatrixInverse);else{const $=pt+Me,Ve=wt+Me,ce=Ee-Te,N=Fe+(K-Te),b=zt*wt/Ve*$,Z=Ot*wt/Ve*$;C.projectionMatrix.makePerspective(ce,N,b,Z,$,Ve),C.projectionMatrixInverse.copy(C.projectionMatrix).invert()}}function ut(C,T){T===null?C.matrixWorld.copy(C.matrix):C.matrixWorld.multiplyMatrices(T.matrixWorld,C.matrix),C.matrixWorldInverse.copy(C.matrixWorld).invert()}this.updateCamera=function(C){if(i===null)return;let T=C.near,I=C.far;g.texture!==null&&(g.depthNear>0&&(T=g.depthNear),g.depthFar>0&&(I=g.depthFar)),V.near=L.near=R.near=T,V.far=L.far=R.far=I,(H!==V.near||G!==V.far)&&(i.updateRenderState({depthNear:V.near,depthFar:V.far}),H=V.near,G=V.far),V.layers.mask=C.layers.mask|6,R.layers.mask=V.layers.mask&-5,L.layers.mask=V.layers.mask&-3;const K=C.parent,j=V.cameras;ut(V,K);for(let ft=0;ft<j.length;ft++)ut(j[ft],K);j.length===2?st(V,R,L):V.projectionMatrix.copy(R.projectionMatrix),y===null&&C.isPerspectiveCamera&&(y={camera:C,fov:C.fov,zoom:C.zoom}),O(C,V,K)};function O(C,T,I){I===null?C.matrix.copy(T.matrixWorld):(C.matrix.copy(I.matrixWorld),C.matrix.invert(),C.matrix.multiply(T.matrixWorld)),C.matrix.decompose(C.position,C.quaternion,C.scale),C.updateMatrixWorld(!0),C.projectionMatrix.copy(T.projectionMatrix),C.projectionMatrixInverse.copy(T.projectionMatrixInverse),C.isPerspectiveCamera&&(C.fov=er*2*Math.atan(1/C.projectionMatrix.elements[5]),C.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(C){c=C,f!==null&&(f.fixedFoveation=C),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=C)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(V)},this.getCameraTexture=function(C){return m[C]};let X=null;function z(C,T){if(h=T.getViewerPose(l||o),p=T,h!==null){const I=h.views;d!==null&&(t.setRenderTargetFramebuffer(v,d.framebuffer),t.setRenderTarget(v));let K=!1;I.length!==V.cameras.length&&(V.cameras.length=0,K=!0);for(let wt=0;wt<I.length;wt++){const zt=I[wt];let Ot=null;if(d!==null)Ot=d.getViewport(zt);else{const oe=u.getViewSubImage(f,zt);Ot=oe.viewport,wt===0&&(t.setRenderTargetTextures(v,oe.colorTexture,oe.depthStencilTexture),t.setRenderTarget(v))}let Wt=U[wt];Wt===void 0&&(Wt=new je,Wt.layers.enable(wt),Wt.viewport=new ge,U[wt]=Wt),Wt.matrix.fromArray(zt.transform.matrix),Wt.matrix.decompose(Wt.position,Wt.quaternion,Wt.scale),Wt.projectionMatrix.fromArray(zt.projectionMatrix),Wt.projectionMatrixInverse.copy(Wt.projectionMatrix).invert(),Wt.viewport.set(Ot.x,Ot.y,Ot.width,Ot.height),wt===0&&(V.matrix.copy(Wt.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),K===!0&&V.cameras.push(Wt)}const j=i.enabledFeatures;if(j&&j.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&x){u=n.getBinding();const wt=u.getDepthInformation(I[0]);wt&&wt.isValid&&wt.texture&&g.init(wt,i.renderState)}if(j&&j.includes("camera-access")&&x){t.state.unbindTexture(),u=n.getBinding();for(let wt=0;wt<I.length;wt++){const zt=I[wt].camera;if(zt){let Ot=m[zt];Ot||(Ot=new xu,m[zt]=Ot);const Wt=u.getCameraImage(zt);Ot.sourceTexture=Wt}}}}for(let I=0;I<M.length;I++){const K=w[I],j=M[I];K!==null&&j!==void 0&&j.update(K,T,l||o)}X&&X(C,T),T.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:T}),p=null}const k=new yu;k.setAnimationLoop(z),this.setAnimationLoop=function(C){X=C},this.dispose=function(){}}}const Zx=new ne,Ru=new Xt;Ru.set(-1,0,0,0,1,0,0,0,1);function Jx(s,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,_u(s)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function i(g,m,S,E,v){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(g,m):m.isMeshLambertMaterial?(r(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(g,m),u(g,m)):m.isMeshPhongMaterial?(r(g,m),h(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(g,m),f(g,m),m.isMeshPhysicalMaterial&&d(g,m,v)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),x(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?c(g,m,S,E):m.isSpriteMaterial?l(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===en&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===en&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const S=t.get(m),E=S.envMap,v=S.envMapRotation;E&&(g.envMap.value=E,g.envMapRotation.value.setFromMatrix4(Zx.makeRotationFromEuler(v)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Ru),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function c(g,m,S,E){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*S,g.scale.value=E*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function l(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function u(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function f(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function d(g,m,S){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===en&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.retroreflectivity>0&&(g.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=S.texture,g.transmissionSamplerSize.value.set(S.width,S.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function x(g,m){const S=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(S.matrixWorld),g.nearDistance.value=S.shadow.camera.near,g.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Qx(s,t,e,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,M){const w=M.program;n.uniformBlockBinding(v,w)}function l(v,M){let w=i[v.id];w===void 0&&(g(v),w=h(v),i[v.id]=w,v.addEventListener("dispose",S));const P=M.program;n.updateUBOMapping(v,P);const _=t.render.frame;r[v.id]!==_&&(f(v),r[v.id]=_)}function h(v){const M=u();v.__bindingPointIndex=M;const w=s.createBuffer(),P=v.__size,_=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,w),s.bufferData(s.UNIFORM_BUFFER,P,_),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,M,w),w}function u(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return ie("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){const M=i[v.id],w=v.uniforms,P=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,M);for(let _=0,y=w.length;_<y;_++){const R=w[_];if(Array.isArray(R))for(let L=0,U=R.length;L<U;L++)d(R[L],_,L,P);else d(R,_,0,P)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(v,M,w,P){if(x(v,M,w,P)===!0){const _=v.__offset,y=v.value;if(Array.isArray(y)){let R=0;for(let L=0;L<y.length;L++){const U=y[L],V=m(U);p(U,v.__data,R),typeof U!="number"&&typeof U!="boolean"&&!U.isMatrix3&&!ArrayBuffer.isView(U)&&(R+=V.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(y,v.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,_,v.__data)}}function p(v,M,w){typeof v=="number"||typeof v=="boolean"?M[0]=v:v.isMatrix3?(M[0]=v.elements[0],M[1]=v.elements[1],M[2]=v.elements[2],M[3]=0,M[4]=v.elements[3],M[5]=v.elements[4],M[6]=v.elements[5],M[7]=0,M[8]=v.elements[6],M[9]=v.elements[7],M[10]=v.elements[8],M[11]=0):ArrayBuffer.isView(v)?M.set(new v.constructor(v.buffer,v.byteOffset,M.length)):v.toArray(M,w)}function x(v,M,w,P){const _=v.value,y=M+"_"+w;if(P[y]===void 0)return typeof _=="number"||typeof _=="boolean"?P[y]=_:ArrayBuffer.isView(_)?P[y]=_.slice():P[y]=_.clone(),!0;{const R=P[y];if(typeof _=="number"||typeof _=="boolean"){if(R!==_)return P[y]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(R.equals(_)===!1)return R.copy(_),!0}}return!1}function g(v){const M=v.uniforms;let w=0;const P=16;for(let y=0,R=M.length;y<R;y++){const L=Array.isArray(M[y])?M[y]:[M[y]];for(let U=0,V=L.length;U<V;U++){const H=L[U],G=Array.isArray(H.value)?H.value:[H.value];for(let J=0,W=G.length;J<W;J++){const tt=G[J],B=m(tt),Q=w%P,st=Q%B.boundary,ut=Q+st;w+=st,ut!==0&&P-ut<B.storage&&(w+=P-ut),H.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=w,w+=B.storage}}}const _=w%P;return _>0&&(w+=P-_),v.__size=w,v.__cache={},this}function m(v){const M={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(M.boundary=4,M.storage=4):v.isVector2?(M.boundary=8,M.storage=8):v.isVector3||v.isColor?(M.boundary=16,M.storage=12):v.isVector4?(M.boundary=16,M.storage=16):v.isMatrix3?(M.boundary=48,M.storage=48):v.isMatrix4?(M.boundary=64,M.storage=64):v.isTexture?Gt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(M.boundary=16,M.storage=v.byteLength):Gt("WebGLRenderer: Unsupported uniform value type.",v),M}function S(v){const M=v.target;M.removeEventListener("dispose",S);const w=o.indexOf(M.__bindingPointIndex);o.splice(w,1),s.deleteBuffer(i[M.id]),delete i[M.id],delete r[M.id]}function E(){for(const v in i)s.deleteBuffer(i[v]);o=[],i={},r={}}return{bind:c,update:l,dispose:E}}const jx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Pn=null;function t_(){return Pn===null&&(Pn=new gs(jx,16,16,Di,_n),Pn.name="DFG_LUT",Pn.minFilter=Be,Pn.magFilter=Be,Pn.wrapS=Qn,Pn.wrapT=Qn,Pn.generateMipmaps=!1,Pn.needsUpdate=!0),Pn}class e_{constructor(t={}){const{canvas:e=qf(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:d=tn}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const x=d,g=new Set([vl,_l,xl]),m=new Set([tn,zn,Js,Qs,ml,gl]),S=new Uint32Array(4),E=new Int32Array(4),v=new F;let M=null,w=null;const P=[],_=[];let y=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Fn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let L=!1,U=null,V=null,H=null,G=null;this._outputColorSpace=Le;let J=0,W=0,tt=null,B=-1,Q=null;const st=new ge,ut=new ge;let O=null;const X=new kt(0);let z=0,k=e.width,C=e.height,T=1,I=null,K=null;const j=new ge(0,0,k,C),ft=new ge(0,0,k,C);let pt=!1;const wt=new Al;let zt=!1,Ot=!1;const Wt=new ne,oe=new F,Ee=new ge,Fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Me=!1;function Te(){return tt===null?T:1}let $=n;function Ve(A,q){return e.getContext(A,q)}let ce,N,b,Z,it,ot,dt,mt,at,ct,gt,Dt,Mt,xt,Ut,Ht,Yt,Y,_t,lt,vt,Et,ht;try{const A={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ul}`),e.addEventListener("webglcontextlost",pe,!1),e.addEventListener("webglcontextrestored",ae,!1),e.addEventListener("webglcontextcreationerror",Mn,!1),$===null){const q="webgl2";if($=Ve(q,A),$===null)throw Ve(q)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ft()}catch(A){throw e.removeEventListener("webglcontextlost",pe,!1),e.removeEventListener("webglcontextrestored",ae,!1),e.removeEventListener("webglcontextcreationerror",Mn,!1),ie("WebGLRenderer: "+A.message),A}function Ft(){ce=new tg($),ce.init(),vt=new Xx($,ce),N=new W0($,ce,t,vt),b=new Vx($,ce),N.reversedDepthBuffer&&f&&b.buffers.depth.setReversed(!0),V=$.createFramebuffer(),H=$.createFramebuffer(),G=$.createFramebuffer(),Z=new ig($),it=new Cx,ot=new Wx($,ce,b,it,N,vt,Z),dt=new j0(R),mt=new rp($),Et=new G0($,mt),at=new eg($,mt,Z,Et),ct=new rg($,at,mt,Et,Z),Y=new sg($,N,ot),Ut=new X0(it),gt=new Rx(R,dt,ce,N,Et,Ut),Dt=new Jx(R,it),Mt=new Lx,xt=new zx(ce),Yt=new H0(R,dt,b,ct,p,c),Ht=new Gx(R,ct,N),ht=new Qx($,Z,N,b),_t=new V0($,ce,Z),lt=new ng($,ce,Z),Z.programs=gt.programs,R.capabilities=N,R.extensions=ce,R.properties=it,R.renderLists=Mt,R.shadowMap=Ht,R.state=b,R.info=Z}x!==tn&&(y=new ag(x,e.width,e.height,a,i,r));const Lt=new Kx(R,$);this.xr=Lt,this.getContext=function(){return $},this.getContextAttributes=function(){return $.getContextAttributes()},this.forceContextLoss=function(){const A=ce.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=ce.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return T},this.setPixelRatio=function(A){A!==void 0&&(T=A,this.setSize(k,C,!1))},this.getSize=function(A){return A.set(k,C)},this.setSize=function(A,q,rt=!0){if(Lt.isPresenting){Gt("WebGLRenderer: Can't change size while VR device is presenting.");return}k=A,C=q,e.width=Math.floor(A*T),e.height=Math.floor(q*T),rt===!0&&(e.style.width=A+"px",e.style.height=q+"px"),y!==null&&y.setSize(e.width,e.height),this.setViewport(0,0,A,q)},this.getDrawingBufferSize=function(A){return A.set(k*T,C*T).floor()},this.setDrawingBufferSize=function(A,q,rt){k=A,C=q,T=rt,e.width=Math.floor(A*rt),e.height=Math.floor(q*rt),this.setViewport(0,0,A,q)},this.setEffects=function(A){if(x===tn){ie("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let q=0;q<A.length;q++)if(A[q].isOutputPass===!0){Gt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}y.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(st)},this.getViewport=function(A){return A.copy(j)},this.setViewport=function(A,q,rt,et){A.isVector4?j.set(A.x,A.y,A.z,A.w):j.set(A,q,rt,et),b.viewport(st.copy(j).multiplyScalar(T).round())},this.getScissor=function(A){return A.copy(ft)},this.setScissor=function(A,q,rt,et){A.isVector4?ft.set(A.x,A.y,A.z,A.w):ft.set(A,q,rt,et),b.scissor(ut.copy(ft).multiplyScalar(T).round())},this.getScissorTest=function(){return pt},this.setScissorTest=function(A){b.setScissorTest(pt=A)},this.setOpaqueSort=function(A){I=A},this.setTransparentSort=function(A){K=A},this.getClearColor=function(A){return A.copy(Yt.getClearColor())},this.setClearColor=function(){Yt.setClearColor(...arguments)},this.getClearAlpha=function(){return Yt.getClearAlpha()},this.setClearAlpha=function(){Yt.setClearAlpha(...arguments)},this.clear=function(A=!0,q=!0,rt=!0){let et=0;if(A){let nt=!1;if(tt!==null){const bt=tt.texture.format;nt=g.has(bt)}if(nt){const bt=tt.texture.type,Rt=m.has(bt),St=Yt.getClearColor(),Ct=Yt.getClearAlpha(),It=St.r,$t=St.g,Jt=St.b;Rt?(S[0]=It,S[1]=$t,S[2]=Jt,S[3]=Ct,$.clearBufferuiv($.COLOR,0,S)):(E[0]=It,E[1]=$t,E[2]=Jt,E[3]=Ct,$.clearBufferiv($.COLOR,0,E))}else et|=$.COLOR_BUFFER_BIT}q&&(et|=$.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),rt&&(et|=$.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),et!==0&&$.clear(et)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),U=A},this.dispose=function(){e.removeEventListener("webglcontextlost",pe,!1),e.removeEventListener("webglcontextrestored",ae,!1),e.removeEventListener("webglcontextcreationerror",Mn,!1),Yt.dispose(),Mt.dispose(),xt.dispose(),it.dispose(),dt.dispose(),ct.dispose(),Et.dispose(),ht.dispose(),gt.dispose(),Lt.dispose(),Lt.removeEventListener("sessionstart",Xl),Lt.removeEventListener("sessionend",ql),bi.stop()};function pe(A){A.preventDefault(),to("WebGLRenderer: Context Lost."),L=!0}function ae(){to("WebGLRenderer: Context Restored."),L=!1;const A=Z.autoReset,q=Ht.enabled,rt=Ht.autoUpdate,et=Ht.needsUpdate,nt=Ht.type;Ft(),Z.autoReset=A,Ht.enabled=q,Ht.autoUpdate=rt,Ht.needsUpdate=et,Ht.type=nt}function Mn(A){ie("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function An(A){const q=A.target;q.removeEventListener("dispose",An),nf(q)}function nf(A){sf(A),it.remove(A)}function sf(A){const q=it.get(A).programs;q!==void 0&&(q.forEach(function(rt){gt.releaseProgram(rt)}),A.isShaderMaterial&&gt.releaseShaderCache(A))}this.renderBufferDirect=function(A,q,rt,et,nt,bt){q===null&&(q=Fe);const Rt=nt.isMesh&&nt.matrixWorld.determinantAffine()<0,St=af(A,q,rt,et,nt);b.setMaterial(et,Rt);let Ct=rt.index,It=1;if(et.wireframe===!0){if(Ct=at.getWireframeAttribute(rt),Ct===void 0)return;It=2}const $t=rt.drawRange,Jt=rt.attributes.position;let Pt=$t.start*It,le=($t.start+$t.count)*It;bt!==null&&(Pt=Math.max(Pt,bt.start*It),le=Math.min(le,(bt.start+bt.count)*It)),Ct!==null?(Pt=Math.max(Pt,0),le=Math.min(le,Ct.count)):Jt!=null&&(Pt=Math.max(Pt,0),le=Math.min(le,Jt.count));const Ae=le-Pt;if(Ae<0||Ae===1/0)return;Et.setup(nt,et,St,rt,Ct);let xe,de=_t;if(Ct!==null&&(xe=mt.get(Ct),de=lt,de.setIndex(xe)),nt.isMesh)et.wireframe===!0?(b.setLineWidth(et.wireframeLinewidth*Te()),de.setMode($.LINES)):de.setMode($.TRIANGLES);else if(nt.isLine){let We=et.linewidth;We===void 0&&(We=1),b.setLineWidth(We*Te()),nt.isLineSegments?de.setMode($.LINES):nt.isLineLoop?de.setMode($.LINE_LOOP):de.setMode($.LINE_STRIP)}else nt.isPoints?de.setMode($.POINTS):nt.isSprite&&de.setMode($.TRIANGLES);if(nt.isBatchedMesh)if(ce.get("WEBGL_multi_draw"))de.renderMultiDraw(nt._multiDrawStarts,nt._multiDrawCounts,nt._multiDrawCount);else{const We=nt._multiDrawStarts,At=nt._multiDrawCounts,Ye=nt._multiDrawCount,re=Ct?mt.get(Ct).bytesPerElement:1,un=it.get(et).currentProgram.getUniforms();for(let Rn=0;Rn<Ye;Rn++)un.setValue($,"_gl_DrawID",Rn),de.render(We[Rn]/re,At[Rn])}else if(nt.isInstancedMesh)de.renderInstances(Pt,Ae,nt.count);else if(rt.isInstancedBufferGeometry){const We=rt._maxInstanceCount!==void 0?rt._maxInstanceCount:1/0,At=Math.min(rt.instanceCount,We);de.renderInstances(Pt,Ae,At)}else de.render(Pt,Ae)};function Wl(A,q,rt,et){U!==null&&A.isNodeMaterial&&U.setObject(et,A),zt===!0&&Ut.setState(A,rt,!1),A.transparent===!0&&A.side===Kn&&A.forceSinglePass===!1?(A.side=en,A.needsUpdate=!0,or(A,q,et),A.side=Li,A.needsUpdate=!0,or(A,q,et),A.side=Kn):or(A,q,et)}this.compile=function(A,q,rt=null){rt===null&&(rt=A),U!==null&&U.renderStart(A,q,rt),w=xt.get(rt),w.init(q),_.push(w),rt.traverseVisible(function(nt){nt.isLight&&nt.layers.test(q.layers)&&(w.pushLight(nt),nt.castShadow&&w.pushShadow(nt))}),A!==rt&&A.traverseVisible(function(nt){nt.isLight&&nt.layers.test(q.layers)&&(w.pushLight(nt),nt.castShadow&&w.pushShadow(nt))}),w.setupLights(),U!==null&&U.updateLights(w.state.lightsArray),Ot=this.localClippingEnabled,zt=Ut.init(this.clippingPlanes,Ot),zt===!0&&Ut.setGlobalState(this.clippingPlanes,q),U!==null&&Ht.render(w.state.shadowsArray,rt,q);const et=new Set;return A.traverse(function(nt){if(!(nt.isMesh||nt.isPoints||nt.isLine||nt.isSprite))return;const bt=nt.material;if(bt)if(Array.isArray(bt))for(let Rt=0;Rt<bt.length;Rt++){const St=bt[Rt];Wl(St,rt,q,nt),et.add(St)}else Wl(bt,rt,q,nt),et.add(bt)}),w=_.pop(),U!==null&&U.renderEnd(),et},this.compileAsync=function(A,q,rt=null){const et=this.compile(A,q,rt);return new Promise(nt=>{function bt(){if(et.forEach(function(Rt){const Ct=it.get(Rt).currentProgram;(Ct===void 0||Ct.isReady())&&et.delete(Rt)}),et.size===0){nt(A);return}setTimeout(bt,10)}ce.get("KHR_parallel_shader_compile")!==null?bt():setTimeout(bt,10)})};let So=null;function rf(A){So&&So(A)}function Xl(){bi.stop()}function ql(){bi.start()}const bi=new yu;bi.setAnimationLoop(rf),typeof self<"u"&&bi.setContext(self),this.setAnimationLoop=function(A){So=A,Lt.setAnimationLoop(A),A===null?bi.stop():bi.start()},Lt.addEventListener("sessionstart",Xl),Lt.addEventListener("sessionend",ql),this.render=function(A,q){if(q!==void 0&&q.isCamera!==!0){ie("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;U!==null&&U.renderStart(A,q);const rt=Lt.enabled===!0&&Lt.isPresenting===!0,et=y!==null&&(tt===null||rt)&&y.begin(R,tt);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),Lt.enabled===!0&&Lt.isPresenting===!0&&(y===null||y.isCompositing()===!1)&&(Lt.cameraAutoUpdate===!0&&Lt.updateCamera(q),q=Lt.getCamera()),A.isScene===!0&&A.onBeforeRender(R,A,q,tt),w=xt.get(A,_.length),w.init(q),w.state.textureUnits=ot.getTextureUnits(),_.push(w),Wt.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),wt.setFromProjectionMatrix(Wt,Nn,q.reversedDepth),Ot=this.localClippingEnabled,zt=Ut.init(this.clippingPlanes,Ot),M=Mt.get(A,P.length),M.init(),P.push(M),Lt.enabled===!0&&Lt.isPresenting===!0){const Rt=R.xr.getDepthSensingMesh();Rt!==null&&bo(Rt,q,-1/0,R.sortObjects)}bo(A,q,0,R.sortObjects),M.finish(),U!==null&&U.updateLights(w.state.lightsArray),R.sortObjects===!0&&M.sort(I,K),Me=Lt.enabled===!1||Lt.isPresenting===!1||Lt.hasDepthSensing()===!1,Me&&Yt.addToRenderList(M,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),zt===!0&&Ut.beginShadows();const nt=w.state.shadowsArray;if(Ht.render(nt,A,q),zt===!0&&Ut.endShadows(),(et&&y.hasRenderPass())===!1){const Rt=M.opaque,St=M.transmissive;if(w.setupLights(),q.isArrayCamera){const Ct=q.cameras;if(St.length>0)for(let It=0,$t=Ct.length;It<$t;It++){const Jt=Ct[It];$l(Rt,St,A,Jt)}Me&&Yt.render(A);for(let It=0,$t=Ct.length;It<$t;It++){const Jt=Ct[It];Yl(M,A,Jt,Jt.viewport)}}else St.length>0&&$l(Rt,St,A,q),Me&&Yt.render(A),Yl(M,A,q)}tt!==null&&W===0&&(ot.updateMultisampleRenderTarget(tt),ot.updateRenderTargetMipmap(tt)),et&&y.end(R),A.isScene===!0&&A.onAfterRender(R,A,q),Et.resetDefaultState(),B=-1,Q=null,_.pop(),_.length>0?(w=_[_.length-1],ot.setTextureUnits(w.state.textureUnits),zt===!0&&Ut.setGlobalState(R.clippingPlanes,w.state.camera)):w=null,P.pop(),P.length>0?M=P[P.length-1]:M=null,U!==null&&U.renderEnd()};function bo(A,q,rt,et){if(A.visible===!1)return;if(A.layers.test(q.layers)){if(A.isGroup)rt=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(q);else if(A.isLightProbeGrid)w.pushLightProbeGrid(A);else if(A.isLight)w.pushLight(A),A.castShadow&&w.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||A.intersectsFrustum(wt)){et&&Ee.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Wt);const Rt=ct.update(A),St=A.material;St.visible&&M.push(A,Rt,St,rt,Ee.z,null,q)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||A.intersectsFrustum(wt))){const Rt=ct.update(A),St=A.material;if(et&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ee.copy(A.boundingSphere.center)):(Rt.boundingSphere===null&&Rt.computeBoundingSphere(),Ee.copy(Rt.boundingSphere.center)),Ee.applyMatrix4(A.matrixWorld).applyMatrix4(Wt)),Array.isArray(St)){const Ct=Rt.groups;for(let It=0,$t=Ct.length;It<$t;It++){const Jt=Ct[It],Pt=St[Jt.materialIndex];Pt&&Pt.visible&&M.push(A,Rt,Pt,rt,Ee.z,Jt,q)}}else St.visible&&M.push(A,Rt,St,rt,Ee.z,null,q)}}const bt=A.children;for(let Rt=0,St=bt.length;Rt<St;Rt++)bo(bt[Rt],q,rt,et)}function Yl(A,q,rt,et){const{opaque:nt,transmissive:bt,transparent:Rt}=A;w.setupLightsView(rt),zt===!0&&Ut.setGlobalState(R.clippingPlanes,rt),et&&b.viewport(st.copy(et)),nt.length>0&&rr(nt,q,rt),bt.length>0&&rr(bt,q,rt),Rt.length>0&&rr(Rt,q,rt),b.buffers.depth.setTest(!0),b.buffers.depth.setMask(!0),b.buffers.color.setMask(!0),b.setPolygonOffset(!1)}function $l(A,q,rt,et){if((rt.isScene===!0?rt.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[et.id]===void 0){const Pt=ce.has("EXT_color_buffer_half_float")||ce.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[et.id]=new mn(1,1,{generateMipmaps:!0,type:Pt?_n:tn,minFilter:yi,samples:Math.max(4,N.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ee.workingColorSpace})}const bt=w.state.transmissionRenderTarget[et.id],Rt=et.viewport||st;bt.setSize(Rt.z*R.transmissionResolutionScale,Rt.w*R.transmissionResolutionScale);const St=R.getRenderTarget(),Ct=R.getActiveCubeFace(),It=R.getActiveMipmapLevel();R.setRenderTarget(bt),R.getClearColor(X),z=R.getClearAlpha(),z<1&&R.setClearColor(16777215,.5),R.clear(),Me&&Yt.render(rt);const $t=R.toneMapping;R.toneMapping=Fn;const Jt=et.viewport;if(et.viewport!==void 0&&(et.viewport=void 0),w.setupLightsView(et),zt===!0&&Ut.setGlobalState(R.clippingPlanes,et),rr(A,rt,et),ot.updateMultisampleRenderTarget(bt),ot.updateRenderTargetMipmap(bt),ce.has("WEBGL_multisampled_render_to_texture")===!1){let Pt=!1;for(let le=0,Ae=q.length;le<Ae;le++){const xe=q[le],{object:de,geometry:We,material:At,group:Ye}=xe;if(At.side===Kn&&de.layers.test(et.layers)){const re=At.side;At.side=en,At.needsUpdate=!0,Kl(de,rt,et,We,At,Ye),At.side=re,At.needsUpdate=!0,Pt=!0}}Pt===!0&&(ot.updateMultisampleRenderTarget(bt),ot.updateRenderTargetMipmap(bt))}R.setRenderTarget(St,Ct,It),R.setClearColor(X,z),Jt!==void 0&&(et.viewport=Jt),R.toneMapping=$t}function rr(A,q,rt){const et=q.isScene===!0?q.overrideMaterial:null;for(let nt=0,bt=A.length;nt<bt;nt++){const Rt=A[nt],{object:St,geometry:Ct,group:It}=Rt;let $t=Rt.material;$t.allowOverride===!0&&et!==null&&($t=et),St.layers.test(rt.layers)&&Kl(St,q,rt,Ct,$t,It)}}function Kl(A,q,rt,et,nt,bt){U!==null&&nt.isNodeMaterial&&U.setObject(A,nt),A.onBeforeRender(R,q,rt,et,nt,bt),A.modelViewMatrix.multiplyMatrices(rt.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),nt.onBeforeRender(R,q,rt,et,A,bt),nt.transparent===!0&&nt.side===Kn&&nt.forceSinglePass===!1?(nt.side=en,nt.needsUpdate=!0,R.renderBufferDirect(rt,q,et,nt,A,bt),nt.side=Li,nt.needsUpdate=!0,R.renderBufferDirect(rt,q,et,nt,A,bt),nt.side=Kn):R.renderBufferDirect(rt,q,et,nt,A,bt),A.onAfterRender(R,q,rt,et,nt,bt)}function or(A,q,rt){q.isScene!==!0&&(q=Fe);const et=it.get(A),nt=w.state.lights,bt=w.state.shadowsArray,Rt=nt.state.version,St=gt.getParameters(A,nt.state,bt,q,rt,w.state.lightProbeGridArray),Ct=gt.getProgramCacheKey(St);let It=et.programs;et.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?q.environment:null,et.fog=q.fog;const $t=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;et.envMap=dt.get(A.envMap||et.environment,$t),et.envMapRotation=et.environment!==null&&A.envMap===null?q.environmentRotation:A.envMapRotation,It===void 0&&(A.addEventListener("dispose",An),It=new Map,et.programs=It);let Jt=It.get(Ct);if(Jt!==void 0){if(et.currentProgram===Jt&&et.lightsStateVersion===Rt)return Jl(A,St),Jt}else St.uniforms=gt.getUniforms(A),U!==null&&A.isNodeMaterial&&U.build(A,rt,St),A.onBeforeCompile(St,R),Jt=gt.acquireProgram(St,Ct),It.set(Ct,Jt),et.uniforms=St.uniforms;const Pt=et.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Pt.clippingPlanes=Ut.uniform),Jl(A,St),et.needsLights=cf(A),et.lightsStateVersion=Rt,et.needsLights&&(Pt.ambientLightColor.value=nt.state.ambient,Pt.lightProbe.value=nt.state.probe,Pt.sunLights.value=nt.state.sun,Pt.sunLightShadows.value=nt.state.sunShadow,Pt.directionalLights.value=nt.state.directional,Pt.directionalLightShadows.value=nt.state.directionalShadow,Pt.spotLights.value=nt.state.spot,Pt.spotLightShadows.value=nt.state.spotShadow,Pt.rectAreaLights.value=nt.state.rectArea,Pt.ltc_1.value=nt.state.rectAreaLTC1,Pt.ltc_2.value=nt.state.rectAreaLTC2,Pt.pointLights.value=nt.state.point,Pt.pointLightShadows.value=nt.state.pointShadow,Pt.hemisphereLights.value=nt.state.hemi,Pt.sunShadowMatrix.value=nt.state.sunShadowMatrix,Pt.sunShadowCascade.value=nt.state.sunShadowCascade,Pt.directionalShadowMatrix.value=nt.state.directionalShadowMatrix,Pt.spotLightMatrix.value=nt.state.spotLightMatrix,Pt.spotLightMap.value=nt.state.spotLightMap,Pt.pointShadowMatrix.value=nt.state.pointShadowMatrix),et.lightProbeGrid=w.state.lightProbeGridArray.length>0,et.currentProgram=Jt,et.uniformsList=null,Jt}function Zl(A){if(A.uniformsList===null){const q=A.currentProgram.getUniforms();A.uniformsList=$r.seqWithValue(q.seq,A.uniforms)}return A.uniformsList}function Jl(A,q){const rt=it.get(A);rt.outputColorSpace=q.outputColorSpace,rt.batching=q.batching,rt.batchingColor=q.batchingColor,rt.instancing=q.instancing,rt.instancingColor=q.instancingColor,rt.instancingMorph=q.instancingMorph,rt.skinning=q.skinning,rt.morphTargets=q.morphTargets,rt.morphNormals=q.morphNormals,rt.morphColors=q.morphColors,rt.morphTargetsCount=q.morphTargetsCount,rt.numClippingPlanes=q.numClippingPlanes,rt.numIntersection=q.numClipIntersection,rt.vertexAlphas=q.vertexAlphas,rt.vertexTangents=q.vertexTangents,rt.toneMapping=q.toneMapping}function of(A,q){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;v.setFromMatrixPosition(q.matrixWorld);for(let rt=0,et=A.length;rt<et;rt++){const nt=A[rt];if(nt.texture!==null&&nt.boundingBox.containsPoint(v))return nt}return null}function af(A,q,rt,et,nt){q.isScene!==!0&&(q=Fe),ot.resetTextureUnits();const bt=q.fog,Rt=et.isMeshStandardMaterial||et.isMeshLambertMaterial||et.isMeshPhongMaterial?q.environment:null,St=tt===null?R.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:ee.workingColorSpace,Ct=et.isMeshStandardMaterial||et.isMeshLambertMaterial&&!et.envMap||et.isMeshPhongMaterial&&!et.envMap,It=dt.get(et.envMap||Rt,Ct),$t=et.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,Jt=!!rt.attributes.tangent&&(!!et.normalMap||et.anisotropy>0),Pt=!!rt.morphAttributes.position,le=!!rt.morphAttributes.normal,Ae=!!rt.morphAttributes.color;let xe=Fn;et.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(xe=R.toneMapping);const de=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,We=de!==void 0?de.length:0,At=it.get(et),Ye=w.state.lights;if(zt===!0&&(Ot===!0||A!==Q)){const me=A===Q&&et.id===B;Ut.setState(et,A,me)}let re=!1;et.version===At.__version?(At.needsLights&&At.lightsStateVersion!==Ye.state.version||At.outputColorSpace!==St||nt.isBatchedMesh&&At.batching===!1||!nt.isBatchedMesh&&At.batching===!0||nt.isBatchedMesh&&At.batchingColor===!0&&nt._colorsTexture===null||nt.isBatchedMesh&&At.batchingColor===!1&&nt._colorsTexture!==null||nt.isInstancedMesh&&At.instancing===!1||!nt.isInstancedMesh&&At.instancing===!0||nt.isSkinnedMesh&&At.skinning===!1||!nt.isSkinnedMesh&&At.skinning===!0||nt.isInstancedMesh&&At.instancingColor===!0&&nt.instanceColor===null||nt.isInstancedMesh&&At.instancingColor===!1&&nt.instanceColor!==null||nt.isInstancedMesh&&At.instancingMorph===!0&&nt.morphTexture===null||nt.isInstancedMesh&&At.instancingMorph===!1&&nt.morphTexture!==null||At.envMap!==It||et.fog===!0&&At.fog!==bt||At.numClippingPlanes!==void 0&&(At.numClippingPlanes!==Ut.numPlanes||At.numIntersection!==Ut.numIntersection)||At.vertexAlphas!==$t||At.vertexTangents!==Jt||At.morphTargets!==Pt||At.morphNormals!==le||At.morphColors!==Ae||At.toneMapping!==xe||At.morphTargetsCount!==We||!!At.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(re=!0):(re=!0,At.__version=et.version);let un=At.currentProgram;re===!0&&(un=or(et,q,nt),U&&et.isNodeMaterial&&U.onUpdateProgram(et,un,At));let Rn=!1,ri=!1,Oi=!1;const fe=un.getUniforms(),be=At.uniforms;if(b.useProgram(un.program)&&(Rn=!0,ri=!0,Oi=!0),et.id!==B&&(B=et.id,ri=!0),At.needsLights){const me=of(w.state.lightProbeGridArray,nt);At.lightProbeGrid!==me&&(At.lightProbeGrid=me,ri=!0)}if(Rn||Q!==A){b.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),fe.setValue($,"projectionMatrix",A.projectionMatrix),fe.setValue($,"viewMatrix",A.matrixWorldInverse);const ai=fe.map.cameraPosition;ai!==void 0&&ai.setValue($,oe.setFromMatrixPosition(A.matrixWorld)),N.logarithmicDepthBuffer&&fe.setValue($,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(et.isMeshPhongMaterial||et.isMeshToonMaterial||et.isMeshLambertMaterial||et.isMeshBasicMaterial||et.isMeshStandardMaterial||et.isShaderMaterial)&&fe.setValue($,"isOrthographic",A.isOrthographicCamera===!0),Q!==A&&(Q=A,ri=!0,Oi=!0)}if(At.needsLights&&(Ye.state.sunShadowMap.length>0&&fe.setValue($,"sunShadowMap",Ye.state.sunShadowMap,ot),Ye.state.directionalShadowMap.length>0&&fe.setValue($,"directionalShadowMap",Ye.state.directionalShadowMap,ot),Ye.state.spotShadowMap.length>0&&fe.setValue($,"spotShadowMap",Ye.state.spotShadowMap,ot),Ye.state.pointShadowMap.length>0&&fe.setValue($,"pointShadowMap",Ye.state.pointShadowMap,ot)),nt.isSkinnedMesh){fe.setOptional($,nt,"bindMatrix"),fe.setOptional($,nt,"bindMatrixInverse");const me=nt.skeleton;me&&(me.boneTexture===null&&me.computeBoneTexture(),fe.setValue($,"boneTexture",me.boneTexture,ot))}nt.isBatchedMesh&&(fe.setOptional($,nt,"batchingTexture"),fe.setValue($,"batchingTexture",nt._matricesTexture,ot),fe.setOptional($,nt,"batchingIdTexture"),fe.setValue($,"batchingIdTexture",nt._indirectTexture,ot),fe.setOptional($,nt,"batchingColorTexture"),nt._colorsTexture!==null&&fe.setValue($,"batchingColorTexture",nt._colorsTexture,ot));const oi=rt.morphAttributes;if((oi.position!==void 0||oi.normal!==void 0||oi.color!==void 0)&&Y.update(nt,rt,un),(ri||At.receiveShadow!==nt.receiveShadow)&&(At.receiveShadow=nt.receiveShadow,fe.setValue($,"receiveShadow",nt.receiveShadow)),(et.isMeshStandardMaterial||et.isMeshLambertMaterial||et.isMeshPhongMaterial)&&et.envMap===null&&q.environment!==null&&(be.envMapIntensity.value=q.environmentIntensity),be.dfgLUT!==void 0&&(be.dfgLUT.value=t_()),ri){if(fe.setValue($,"toneMappingExposure",R.toneMappingExposure),At.needsLights&&lf(be,Oi),bt&&et.fog===!0&&Dt.refreshFogUniforms(be,bt),Dt.refreshMaterialUniforms(be,et,T,C,w.state.transmissionRenderTarget[A.id]),At.needsLights&&At.lightProbeGrid){const me=At.lightProbeGrid;be.probesSH.value=me.texture,be.probesMin.value.copy(me.boundingBox.min),be.probesMax.value.copy(me.boundingBox.max),be.probesResolution.value.copy(me.resolution)}$r.upload($,Zl(At),be,ot)}if(et.isShaderMaterial&&et.uniformsNeedUpdate===!0&&($r.upload($,Zl(At),be,ot),et.uniformsNeedUpdate=!1),et.isSpriteMaterial&&fe.setValue($,"center",nt.center),fe.setValue($,"modelViewMatrix",nt.modelViewMatrix),fe.setValue($,"normalMatrix",nt.normalMatrix),fe.setValue($,"modelMatrix",nt.matrixWorld),et.uniformsGroups!==void 0){const me=et.uniformsGroups;for(let ai=0,ki=me.length;ai<ki;ai++){const jl=me[ai];ht.update(jl,un),ht.bind(jl,un)}}return un}function lf(A,q){A.ambientLightColor.needsUpdate=q,A.lightProbe.needsUpdate=q,A.sunLights.needsUpdate=q,A.sunLightShadows.needsUpdate=q,A.directionalLights.needsUpdate=q,A.directionalLightShadows.needsUpdate=q,A.pointLights.needsUpdate=q,A.pointLightShadows.needsUpdate=q,A.spotLights.needsUpdate=q,A.spotLightShadows.needsUpdate=q,A.rectAreaLights.needsUpdate=q,A.hemisphereLights.needsUpdate=q}function cf(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return J},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return tt},this.setRenderTargetTextures=function(A,q,rt){const et=it.get(A);et.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,et.__autoAllocateDepthBuffer===!1&&(et.__useRenderToTexture=!1),it.get(A.texture).__webglTexture=q,it.get(A.depthTexture).__webglTexture=et.__autoAllocateDepthBuffer?void 0:rt,et.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,q){const rt=it.get(A);rt.__webglFramebuffer=q,rt.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(A,q=0,rt=0){tt=A,J=q,W=rt;let et=null,nt=!1,bt=!1;if(A){const St=it.get(A);if(St.__useDefaultFramebuffer!==void 0){b.bindFramebuffer($.FRAMEBUFFER,St.__webglFramebuffer),st.copy(A.viewport),ut.copy(A.scissor),O=A.scissorTest,b.viewport(st),b.scissor(ut),b.setScissorTest(O),B=-1;return}else if(St.__webglFramebuffer===void 0)ot.setupRenderTarget(A);else if(St.__hasExternalTextures)ot.rebindTextures(A,it.get(A.texture).__webglTexture,it.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const $t=A.depthTexture;if(St.__boundDepthTexture!==$t){if($t!==null&&it.has($t)&&(A.width!==$t.image.width||A.height!==$t.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ot.setupDepthRenderbuffer(A)}}const Ct=A.texture;(Ct.isData3DTexture||Ct.isDataArrayTexture||Ct.isCompressedArrayTexture)&&(bt=!0);const It=it.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(It[q])?et=It[q][rt]:et=It[q],nt=!0):A.samples>0&&ot.useMultisampledRTT(A)===!1?et=it.get(A).__webglMultisampledFramebuffer:Array.isArray(It)?et=It[rt]:et=It,st.copy(A.viewport),ut.copy(A.scissor),O=A.scissorTest}else st.copy(j).multiplyScalar(T).floor(),ut.copy(ft).multiplyScalar(T).floor(),O=pt;if(rt!==0&&(et=V),b.bindFramebuffer($.FRAMEBUFFER,et)&&b.drawBuffers(A,et),b.viewport(st),b.scissor(ut),b.setScissorTest(O),nt){const St=it.get(A.texture);$.framebufferTexture2D($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_CUBE_MAP_POSITIVE_X+q,St.__webglTexture,rt)}else if(bt){const St=q;for(let Ct=0;Ct<A.textures.length;Ct++){const It=it.get(A.textures[Ct]);$.framebufferTextureLayer($.FRAMEBUFFER,$.COLOR_ATTACHMENT0+Ct,It.__webglTexture,rt,St)}}else if(A!==null&&rt!==0){const St=it.get(A.texture);$.framebufferTexture2D($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_2D,St.__webglTexture,rt)}B=-1};function Ql(A){const q=it.get(A);return(q.__readFormat!==A.format||q.__readType!==A.type)&&(q.__readFormat=A.format,q.__readType=A.type,q.__formatReadable=N.textureFormatReadable(A.format),q.__typeReadable=N.textureTypeReadable(A.type)),q}this.readRenderTargetPixels=function(A,q,rt,et,nt,bt,Rt,St=0){if(!(A&&A.isWebGLRenderTarget)){ie("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ct=it.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Rt!==void 0&&(Ct=Ct[Rt]),Ct){b.bindFramebuffer($.FRAMEBUFFER,Ct);try{const It=A.textures[St],$t=It.format,Jt=It.type;A.textures.length>1&&$.readBuffer($.COLOR_ATTACHMENT0+St);const Pt=Ql(It);if(Pt.__formatReadable===!1){ie("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Pt.__typeReadable===!1){ie("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=A.width-et&&rt>=0&&rt<=A.height-nt&&$.readPixels(q,rt,et,nt,vt.convert($t),vt.convert(Jt),bt)}finally{const It=tt!==null?it.get(tt).__webglFramebuffer:null;b.bindFramebuffer($.FRAMEBUFFER,It)}}},this.readRenderTargetPixelsAsync=async function(A,q,rt,et,nt,bt,Rt,St=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ct=it.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Rt!==void 0&&(Ct=Ct[Rt]),Ct)if(q>=0&&q<=A.width-et&&rt>=0&&rt<=A.height-nt){b.bindFramebuffer($.FRAMEBUFFER,Ct);const It=A.textures[St],$t=It.format,Jt=It.type;A.textures.length>1&&$.readBuffer($.COLOR_ATTACHMENT0+St);const Pt=Ql(It);if(Pt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Pt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const le=$.createBuffer();$.bindBuffer($.PIXEL_PACK_BUFFER,le),$.bufferData($.PIXEL_PACK_BUFFER,bt.byteLength,$.STREAM_READ),$.readPixels(q,rt,et,nt,vt.convert($t),vt.convert(Jt),0),$.bindBuffer($.PIXEL_PACK_BUFFER,null);const Ae=tt!==null?it.get(tt).__webglFramebuffer:null;b.bindFramebuffer($.FRAMEBUFFER,Ae);const xe=$.fenceSync($.SYNC_GPU_COMMANDS_COMPLETE,0);return $.flush(),await Yf($,xe,4),$.bindBuffer($.PIXEL_PACK_BUFFER,le),$.getBufferSubData($.PIXEL_PACK_BUFFER,0,bt),$.bindBuffer($.PIXEL_PACK_BUFFER,null),$.deleteBuffer(le),$.deleteSync(xe),bt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,q=null,rt=0){const et=Math.pow(2,-rt),nt=Math.floor(A.image.width*et),bt=Math.floor(A.image.height*et),Rt=q!==null?q.x:0,St=q!==null?q.y:0;ot.setTexture2D(A,0),$.copyTexSubImage2D($.TEXTURE_2D,rt,0,0,Rt,St,nt,bt),b.unbindTexture()},this.copyTextureToTexture=function(A,q,rt=null,et=null,nt=0,bt=0){let Rt,St,Ct,It,$t,Jt,Pt,le,Ae;const xe=A.isCompressedTexture?A.mipmaps[bt]:A.image;if(rt!==null)Rt=rt.max.x-rt.min.x,St=rt.max.y-rt.min.y,Ct=rt.isBox3?rt.max.z-rt.min.z:1,It=rt.min.x,$t=rt.min.y,Jt=rt.isBox3?rt.min.z:0;else{const be=Math.pow(2,-nt);Rt=Math.floor(xe.width*be),St=Math.floor(xe.height*be),A.isDataArrayTexture?Ct=xe.depth:A.isData3DTexture?Ct=Math.floor(xe.depth*be):Ct=1,It=0,$t=0,Jt=0}et!==null?(Pt=et.x,le=et.y,Ae=et.z):(Pt=0,le=0,Ae=0);const de=vt.convert(q.format),We=vt.convert(q.type);let At;q.isData3DTexture?(ot.setTexture3D(q,0),At=$.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(ot.setTexture2DArray(q,0),At=$.TEXTURE_2D_ARRAY):(ot.setTexture2D(q,0),At=$.TEXTURE_2D),b.activeTexture($.TEXTURE0),b.pixelStorei($.UNPACK_FLIP_Y_WEBGL,q.flipY),b.pixelStorei($.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),b.pixelStorei($.UNPACK_ALIGNMENT,q.unpackAlignment);const Ye=b.getParameter($.UNPACK_ROW_LENGTH),re=b.getParameter($.UNPACK_IMAGE_HEIGHT),un=b.getParameter($.UNPACK_SKIP_PIXELS),Rn=b.getParameter($.UNPACK_SKIP_ROWS),ri=b.getParameter($.UNPACK_SKIP_IMAGES);b.pixelStorei($.UNPACK_ROW_LENGTH,xe.width),b.pixelStorei($.UNPACK_IMAGE_HEIGHT,xe.height),b.pixelStorei($.UNPACK_SKIP_PIXELS,It),b.pixelStorei($.UNPACK_SKIP_ROWS,$t),b.pixelStorei($.UNPACK_SKIP_IMAGES,Jt);const Oi=A.isDataArrayTexture||A.isData3DTexture,fe=q.isDataArrayTexture||q.isData3DTexture;if(A.isDepthTexture){const be=it.get(A),oi=it.get(q),me=it.get(be.__renderTarget),ai=it.get(oi.__renderTarget);b.bindFramebuffer($.READ_FRAMEBUFFER,me.__webglFramebuffer),b.bindFramebuffer($.DRAW_FRAMEBUFFER,ai.__webglFramebuffer);for(let ki=0;ki<Ct;ki++)Oi&&($.framebufferTextureLayer($.READ_FRAMEBUFFER,$.COLOR_ATTACHMENT0,it.get(A).__webglTexture,nt,Jt+ki),$.framebufferTextureLayer($.DRAW_FRAMEBUFFER,$.COLOR_ATTACHMENT0,it.get(q).__webglTexture,bt,Ae+ki)),$.blitFramebuffer(It,$t,Rt,St,Pt,le,Rt,St,$.DEPTH_BUFFER_BIT,$.NEAREST);b.bindFramebuffer($.READ_FRAMEBUFFER,null),b.bindFramebuffer($.DRAW_FRAMEBUFFER,null)}else if(nt!==0||A.isRenderTargetTexture||it.has(A)){const be=it.get(A),oi=it.get(q);b.bindFramebuffer($.READ_FRAMEBUFFER,H),b.bindFramebuffer($.DRAW_FRAMEBUFFER,G);for(let me=0;me<Ct;me++)Oi?$.framebufferTextureLayer($.READ_FRAMEBUFFER,$.COLOR_ATTACHMENT0,be.__webglTexture,nt,Jt+me):$.framebufferTexture2D($.READ_FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_2D,be.__webglTexture,nt),fe?$.framebufferTextureLayer($.DRAW_FRAMEBUFFER,$.COLOR_ATTACHMENT0,oi.__webglTexture,bt,Ae+me):$.framebufferTexture2D($.DRAW_FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_2D,oi.__webglTexture,bt),nt!==0?$.blitFramebuffer(It,$t,Rt,St,Pt,le,Rt,St,$.COLOR_BUFFER_BIT,$.NEAREST):fe?$.copyTexSubImage3D(At,bt,Pt,le,Ae+me,It,$t,Rt,St):$.copyTexSubImage2D(At,bt,Pt,le,It,$t,Rt,St);b.bindFramebuffer($.READ_FRAMEBUFFER,null),b.bindFramebuffer($.DRAW_FRAMEBUFFER,null)}else fe?A.isDataTexture||A.isData3DTexture?$.texSubImage3D(At,bt,Pt,le,Ae,Rt,St,Ct,de,We,xe.data):q.isCompressedArrayTexture?$.compressedTexSubImage3D(At,bt,Pt,le,Ae,Rt,St,Ct,de,xe.data):$.texSubImage3D(At,bt,Pt,le,Ae,Rt,St,Ct,de,We,xe):A.isDataTexture?$.texSubImage2D($.TEXTURE_2D,bt,Pt,le,Rt,St,de,We,xe.data):A.isCompressedTexture?$.compressedTexSubImage2D($.TEXTURE_2D,bt,Pt,le,xe.width,xe.height,de,xe.data):$.texSubImage2D($.TEXTURE_2D,bt,Pt,le,Rt,St,de,We,xe);b.pixelStorei($.UNPACK_ROW_LENGTH,Ye),b.pixelStorei($.UNPACK_IMAGE_HEIGHT,re),b.pixelStorei($.UNPACK_SKIP_PIXELS,un),b.pixelStorei($.UNPACK_SKIP_ROWS,Rn),b.pixelStorei($.UNPACK_SKIP_IMAGES,ri),bt===0&&q.generateMipmaps&&$.generateMipmap(At),b.unbindTexture()},this.initRenderTarget=function(A){it.get(A).__webglFramebuffer===void 0&&ot.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?ot.setTextureCube(A,0):A.isData3DTexture?ot.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?ot.setTexture2DArray(A,0):ot.setTexture2D(A,0),b.unbindTexture()},this.resetState=function(){J=0,W=0,tt=null,b.reset(),Et.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Nn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=ee._getDrawingBufferColorSpace(t),e.unpackColorSpace=ee._getUnpackColorSpace()}}const Cu="#f7f7f7",En=.0254,Pu={canvas:.038,panel:.022,paper:.012,digital:.012},ro={face:.75*En,depth:1.5*En,mat:3*En,lip:.25*En,bevel:.125*En},n_={black:"#161616",white:"#efeee9"},i_={white:"#f4f2ec",black:"#1c1c1c"},s_="#faf9f4";function Pl(s){const t=s.frame??{on:s.kind==="paper",color:"black",mat:"white"};return t.on?t:null}function r_(s){const t=Pl(s)?2*(ro.mat+ro.face):0;return[s.w*En+t,s.h*En+t]}const o_=s=>Pl(s)?ro.depth:Pu[s.kind];async function a_(){const s={},t=async r=>{const o=await fetch(`data/${r}.json?${Date.now()}`,{cache:"no-store"});if(!o.ok)throw new Error(`data/${r}.json: ${o.status}`);return s[r]=o.headers.get("x-rev")??"",o.json()},[e,n,i]=await Promise.all([t("catalogue"),t("layout"),t("images")]);return{catalogue:e,layout:n,images:i,revs:s}}const l_=(s,t)=>`${s}:${t}`,sa=(s,t,e)=>s.paint[l_(t,e)]??s.defaultPaint;function oo(s){if(s.guess)return"";const t=e=>{const n=Math.floor(e+1e-6),i=e-n,r=Math.round(i*8);return r===0?`${n}`:r===8?`${n+1}`:`${n||""}${{1:"⅛",2:"¼",3:"⅜",4:"½",5:"⅝",6:"¾",7:"⅞"}[r]}`};return`${t(s.w)}″ × ${t(s.h)}″`}const ao=s=>s.title.trim()||"Untitled",lh=.004;function c_(s){const t=s.outline,e=t.t,n=[{id:"N",outer:!0,axis:"x",t:e,rect:{x0:t.x0-e,x1:t.x1+e,z0:t.z0-e,z1:t.z0},a0:t.x0,a1:t.x1,sides:[1]},{id:"S",outer:!0,axis:"x",t:e,rect:{x0:t.x0-e,x1:t.x1+e,z0:t.z1,z1:t.z1+e},a0:t.x0,a1:t.x1,sides:[-1]},{id:"W",outer:!0,axis:"z",t:e,rect:{x0:t.x0-e,x1:t.x0,z0:t.z0,z1:t.z1},a0:t.z0,a1:t.z1,sides:[1]},{id:"E",outer:!0,axis:"z",t:e,rect:{x0:t.x1,x1:t.x1+e,z0:t.z0,z1:t.z1},a0:t.z0,a1:t.z1,sides:[-1]}];for(const i of s.walls)if(Math.abs(i.z1-i.z0)<1e-6){const o=Math.min(i.x0,i.x1),a=Math.max(i.x0,i.x1);n.push({id:i.id,outer:!1,axis:"x",t:i.t,rect:{x0:o,x1:a,z0:i.z0-i.t/2,z1:i.z0+i.t/2},a0:o,a1:a,sides:[1,-1]})}else{const o=Math.min(i.z0,i.z1),a=Math.max(i.z0,i.z1);n.push({id:i.id,outer:!1,axis:"z",t:i.t,rect:{x0:i.x0-i.t/2,x1:i.x0+i.t/2,z0:o,z1:a},a0:o,a1:a,sides:[1,-1]})}return n}const h_=(s,t,e)=>t>s.x0+1e-6&&t<s.x1-1e-6&&e>s.z0+1e-6&&e<s.z1-1e-6,ch=(s,t,e,n)=>s.some(i=>i.id!==n&&h_(i.rect,t,e));function hh(s,t,e){let n=[[s,t]];for(const[i,r]of e){const o=[];for(const[a,c]of n){if(r<=a||i>=c){o.push([a,c]);continue}i>a&&o.push([a,i]),r<c&&o.push([r,c])}n=o}return n.filter(([i,r])=>r-i>.05)}function u_(s){var d;const t=c_(s),e=s.outline,n={x0:e.x0,x1:e.x1,z0:e.z0,z1:e.z1},i=s.ceiling,r=s.doorHeight,o={a:s.entrance.x-s.entrance.w/2,b:s.entrance.x+s.entrance.w/2,z:e.z1},a=p=>{const x=s.doors.filter(g=>g.wall===p).map(g=>[Math.min(g.a,g.b),Math.max(g.a,g.b)]);return p==="S"&&x.push([o.a,o.b]),x},c=[],l=[];for(const p of t){for(const g of p.sides){const m=p.rect,S=p.axis==="x"?g>0?m.z1:m.z0:g>0?m.x1:m.x0,E=p.axis==="x"?[0,g]:[g,0],v=[E[1],-E[0]],M=[];for(const y of t){if(y===p)continue;const R=y.rect,L=p.axis==="x"?R.z0:R.x0,U=p.axis==="x"?R.z1:R.x1;if(!(g>0?L<=S+lh&&U>=S+.01:U>=S-lh&&L<=S-.01))continue;const H=p.axis==="x"?R.x0:R.z0,G=p.axis==="x"?R.x1:R.z1;M.push([H,G])}const w=p.outer?p.a0:Math.max(p.a0,p.axis==="x"?n.x0:n.z0),P=p.outer?p.a1:Math.min(p.a1,p.axis==="x"?n.x1:n.z1),_=a(p.id);for(const[y,R]of hh(w,P,M)){const L=U=>{const V=p.axis==="x"?U:S+E[0]*.02,H=p.axis==="x"?S+E[1]*.02:U;return ch(t,V,H,p.id)};c.push({key:`${p.id}:${g}:${y.toFixed(3)}`,wall:p.id,side:g,axis:p.axis,plane:S,u0:y,u1:R,n:E,right:v,cornerA:L(y-.02),cornerB:L(R+.02),freeA:!p.outer&&!L(y-.02)&&Math.abs(y-p.a0)<1e-6,freeB:!p.outer&&!L(R+.02)&&Math.abs(R-p.a1)<1e-6,outer:p.outer,t:p.t,doors:_.map(([U,V])=>[Math.max(U,y),Math.min(V,R)]).filter(([U,V])=>V-U>.01),color:((d=(s.paintAt??[]).find(U=>U.wall===p.id&&U.side===g&&U.u>=y-1e-6&&U.u<=R+1e-6))==null?void 0:d.color)??sa(s,p.id,g)})}}if(p.outer)continue;const x=sa(s,p.id,1);for(const g of[p.a0,p.a1]){const m=g===p.a0?-1:1,S=p.axis==="x"?g+m*.02:(p.rect.x0+p.rect.x1)/2,E=p.axis==="x"?(p.rect.z0+p.rect.z1)/2:g+m*.02;ch(t,S,E,p.id)||(p.axis==="x"?l.push(di(g,p.rect.z0,g,p.rect.z1,[m,0,0],i,x)):l.push(di(p.rect.x0,g,p.rect.x1,g,[0,0,m],i,x)))}for(const[g,m]of a(p.id)){const S=p.rect;p.axis==="x"?(l.push(di(g,S.z0,g,S.z1,[1,0,0],r,x)),l.push(di(m,S.z0,m,S.z1,[-1,0,0],r,x)),l.push(ra(g,m,S.z0,S.z1,"x",r,x))):(l.push(di(S.x0,g,S.x1,g,[0,0,1],r,x)),l.push(di(S.x0,m,S.x1,m,[0,0,-1],r,x)),l.push(ra(g,m,S.x0,S.x1,"z",r,x)))}}const h=.04,u=sa(s,"S",-1);l.push(di(o.a,e.z1,o.a,e.z1+h,[1,0,0],r,u)),l.push(di(o.b,e.z1,o.b,e.z1+h,[-1,0,0],r,u)),l.push(ra(o.a,o.b,e.z1,e.z1+h,"x",r,u));const f=[];for(const p of t){const x=p.rect,g=p.axis==="x"?[x.x0,x.x1]:[x.z0,x.z1];for(const[m,S]of hh(g[0],g[1],a(p.id)))f.push(p.axis==="x"?{x0:m,x1:S,z0:x.z0,z1:x.z1}:{x0:x.x0,x1:x.x1,z0:m,z1:S})}return{inner:n,H:i,doorH:r,walls:t,faces:c,extra:l,solids:f,entrance:o,ceilColor:s.ceilingPaint??Cu,ceilAt:s.ceilingAt??[]}}function di(s,t,e,n,i,r,o){const a=e-s,c=n-t,l=a*i[2]-c*i[0],[h,u]=l>0?[[s,t],[e,n]]:[[e,n],[s,t]];return{p:[[h[0],0,h[1]],[u[0],0,u[1]],[u[0],r,u[1]],[h[0],r,h[1]]],n:i,color:o}}function ra(s,t,e,n,i,r,o){const a=(l,h)=>i==="x"?[l,r,h]:[h,r,l];return{p:i==="x"?[a(s,e),a(t,e),a(t,n),a(s,n)]:[a(s,e),a(s,n),a(t,n),a(t,e)],n:[0,-1,0],color:o}}const Si=(s,t,e)=>s.axis==="x"?[t,e,s.plane]:[s.plane,e,t],Ll=s=>s.axis==="x"?s.right[0]:s.right[1];function Ui(s,t,e,n,i,r=0){const o=n-t,a=i-e;for(const c of s){let l=0,h=1;const u=(f,d)=>{if(Math.abs(f)<1e-12)return d>=0;const p=d/f;if(f<0){if(p>h)return!1;p>l&&(l=p)}else{if(p<l)return!1;p<h&&(h=p)}return!0};if(u(-o,t-c.x0)&&u(o,c.x1-t)&&u(-a,e-c.z0)&&u(a,c.z1-e)&&h-l>1e-4&&h>r&&l<1-r)return!0}return!1}function f_(s,t=.1){const e=s.inner,n=Math.ceil((e.x1-e.x0)/t),i=Math.ceil((e.z1-e.z0)/t),r=t/2,o=new Int32Array(n*i).fill(-2);for(const l of s.walls){const h=l.rect,u=Math.max(0,Math.floor((h.x0-r-e.x0)/t)),f=Math.min(n-1,Math.floor((h.x1+r-e.x0)/t)),d=Math.max(0,Math.floor((h.z0-r-e.z0)/t)),p=Math.min(i-1,Math.floor((h.z1+r-e.z0)/t));for(let x=d;x<=p;x++)for(let g=u;g<=f;g++)o[x*n+g]=-1}let a=0;const c=[];for(let l=0;l<n*i;l++)if(o[l]===-2){for(o[l]=a,c.push(l);c.length;){const h=c.pop(),u=h%n,f=(h-u)/n;u>0&&o[h-1]===-2&&(o[h-1]=a,c.push(h-1)),u<n-1&&o[h+1]===-2&&(o[h+1]=a,c.push(h+1)),f>0&&o[h-n]===-2&&(o[h-n]=a,c.push(h-n)),f<i-1&&o[h+n]===-2&&(o[h+n]=a,c.push(h+n))}a++}return{x0:e.x0,z0:e.z0,c:t,nx:n,nz:i,id:o,rooms:a}}function d_(s,t,e){const n=Math.floor((t-s.x0)/s.c),i=Math.floor((e-s.z0)/s.c);return n<0||i<0||n>=s.nx||i>=s.nz?-1:s.id[i*s.nx+n]}function p_(s,t){const e=new Array(t.rooms).fill(s.ceilColor);for(const n of s.ceilAt){const i=d_(t,n.x,n.z);i>=0&&(e[i]=n.color)}return e}const hs=.125,Ys=.086,uh=.12,lo=1e3,co='"Inter Tight", "Helvetica Neue", Helvetica, Arial, sans-serif',$s=140,ho=62,Lu=46;let Is=null;function m_(s){Is??(Is=document.createElement("canvas").getContext("2d")),Is.font=`300 ${$s}px ${co}`;const t=Is.measureText(s.title).width;Is.font=`400 ${ho}px ${co}`;const e=s.sub?Is.measureText(s.sub).width:0;return{w:(Math.max(t,e)+24)/lo,h:($s+(s.sub?Lu+ho:0)+30)/lo}}const al=.03,g_=.35,fh=1.1;function x_(s,t){if(s.text){const n=m_(s.text);return[n.w,n.h]}const e=t.get(s.id);return e?r_(e):[.3,.3]}function __(s,t){let e=null,n=1/0;for(const i of s.faces){if(i.wall!==t.wall||i.side!==t.side)continue;const r=t.u<i.u0?i.u0-t.u:t.u>i.u1?t.u-i.u1:0;r<n&&(n=r,e=i)}return e}function v_(s,t,e,n,i,r){const o=s.u0+i/2+al,a=s.u1-i/2-al,c=o>a?(s.u0+s.u1)/2:Math.max(o,Math.min(a,e)),l=r/2+.05,h=t-.12-r/2,u=l>h?t/2:Math.max(l,Math.min(h,n));return{u:c,y:u}}function M_(s,t,e,n,i){const r=Ll(s),o=t*r,a=r>0?s.u1:-s.u0;let c=o+n/2+uh+hs/2;c+hs/2>a-al&&(c=o-n/2-uh-hs/2);const l=Math.max(.2+Ys/2,e-i/2+Ys/2);return{pos:Si(s,c*r,l),w:hs,h:Ys}}function y_(s,t,e){const n=[],i=[];for(const c of s.hang){if(!c.text&&(!e.has(c.id)||e.get(c.id).off))continue;const l=__(t,c);if(!l){n.push(c);continue}const[h,u]=x_(c,e),f=v_(l,t.H,c.u,c.y,h,u);c.u=+f.u.toFixed(4),c.y=+f.y.toFixed(4);const d=c.text?void 0:e.get(c.id);i.push({id:c.id,work:d,text:c.text,place:c,face:l,pos:Si(l,f.u,f.y),w:h,h:u,depth:d?o_(d):.001,label:d?M_(l,f.u,f.y,h,u):null,over:!1})}const r=c=>c.face.axis==="x"?c.pos[0]:c.pos[2];for(let c=0;c<i.length;c++){const l=i[c];for(const[h,u]of l.face.doors)r(l)+l.w/2>h&&r(l)-l.w/2<u&&l.pos[1]-l.h/2<t.doorH&&(l.over=!0);for(let h=c+1;h<i.length;h++){const u=i[h];if(u.face!==l.face)continue;const f=Math.abs(r(l)-r(u))<(l.w+u.w)/2-.005,d=Math.abs(l.pos[1]-u.pos[1])<(l.h+u.h)/2-.005;f&&d&&(l.over=!0,u.over=!0)}}const o=[],a=new Map;for(const c of i)a.has(c.face)||a.set(c.face,[]),a.get(c.face).push(c);for(const[c,l]of a){const h=l.map((x,g)=>g),u=x=>h[x]===x?x:h[x]=u(h[x]);for(let x=0;x<l.length;x++)for(let g=x+1;g<l.length;g++){const m=l[x],S=l[g];if(m.text||S.text)continue;const E=Math.abs(r(m)-r(S))-(m.w+S.w)/2,v=Math.abs(m.pos[1]-S.pos[1])-(m.h+S.h)/2;Math.max(E,v)<g_&&(h[u(x)]=u(g))}const f=new Map;l.forEach((x,g)=>{const m=u(g);f.has(m)||f.set(m,[]),f.get(m).push(x)});const d=[c.n[0],0,c.n[1]],p=[c.right[0],0,c.right[1]];for(const x of f.values()){const g=Math.min(...x.map(w=>r(w)-w.w/2)),m=Math.max(...x.map(w=>r(w)+w.w/2)),S=Math.min(...x.map(w=>w.pos[1]-w.h/2)),E=Math.max(...x.map(w=>w.pos[1]+w.h/2)),v=Si(c,(g+m)/2,(S+E)/2),M={w:m-g,h:E-S};o.push({face:c,centre:v,normal:d,right:p,w:M.w,h:M.h,items:x,lamp:S_(v,d,p,M,x,t)})}}return{placed:o,items:i,homeless:n}}function S_(s,t,e,n,i,r){const o=r.H-.03;let a=fh;for(let S=.2;S<=fh+.25;S+=.05)if(Ui(r.solids,s[0]+t[0]*.02,s[2]+t[2]*.02,s[0]+t[0]*S,s[2]+t[2]*S)){a=Math.max(.35,(S-.25)*.8);break}const c=[s[0]+t[0]*a,o,s[2]+t[2]*a],l=i.reduce((S,E)=>S+E.depth,0)/Math.max(1,i.length),h=[s[0]+t[0]*l,s[1],s[2]+t[2]*l],u=[h[0]-c[0],h[1]-c[1],h[2]-c[2]],f=Math.hypot(u[0],u[1],u[2]),d=[u[0]/f,u[1]/f,u[2]/f];let p=0;for(const[S,E]of[[-1,-1],[1,-1],[1,1],[-1,1]]){const v=[s[0]+e[0]*S*n.w/2-c[0],s[1]+E*n.h/2-c[1],s[2]+e[2]*S*n.w/2-c[2]],M=Math.hypot(v[0],v[1],v[2]);p=Math.max(p,Math.acos(Math.min(1,(v[0]*d[0]+v[1]*d[1]+v[2]*d[2])/M)))}p+=1.5*Math.PI/180;const x=p+6*Math.PI/180,g=[-u[0]/f,-u[1]/f,-u[2]/f],m=g[0]*t[0]+g[2]*t[2];return{p:c,d,cOuter:Math.cos(x),cInner:Math.cos(p),i:f*f/Math.max(.2,m)}}const b_=1.45,Iu=.07,Du=.07,Uu=.125,w_=.086,Nu=.12,E_=1.3,Fu=.16,dh=1e3,ph='"Inter Tight", "Helvetica Neue", Helvetica, Arial, sans-serif',mh=140,gh=62,T_=46,A_=1.6;let Ds=null;function zu(s){Ds??(Ds=document.createElement("canvas").getContext("2d")),Ds.font=`300 ${mh}px ${ph}`;const t=Ds.measureText(s.title).width;Ds.font=`400 ${gh}px ${ph}`;const e=s.sub?Ds.measureText(s.sub).width:0;return{w:(Math.max(t,e)+24)/dh,h:(mh+(s.sub?T_+gh:0)+30)/dh,colW:[],colH:[]}}const R_=6400;function C_(s){return s.map(t=>({title:ao(t),detail:[t.medium,oo(t),t.year].filter(Boolean).join(", ")}))}const P_=s=>(150+C_(s).reduce((t,e)=>t+92+(e.detail?58:0),0))/R_,xh=.45,_h=.25,oa=.4,vh=.12,Mh=1.1,ll=s=>[s.w*En,s.h*En];function Ou(s,t){const e=[],n=[];for(const o of s){const a=o.map(c=>t.get(c)).filter(Boolean);e.push(Math.max(0,...a.map(c=>ll(c)[0]))),n.push(a.reduce((c,l)=>c+ll(l)[1],0)+Du*Math.max(0,a.length-1))}const i=e.reduce((o,a)=>o+a,0)+Iu*Math.max(0,s.length-1),r=Math.max(0,...n);return{w:i,h:r,colW:e,colH:n}}const L_=s=>s.cols.reduce((t,e)=>t+e.length,0),I_=s=>L_(s)>1?Fu:Uu,D_=(s,t)=>s.text?zu(s.text).w:Ou(s.cols,t).w+Nu+I_(s);function U_(s){const t=[];let e=s.u0+(s.cornerA?xh:_h);const n=s.u1-(s.cornerB?xh:_h);for(const[i,r]of[...s.doors].sort((o,a)=>o[0]-a[0]))i-oa-e>.3&&t.push([e,i-oa]),e=Math.max(e,r+oa);return n-e>.3&&t.push([e,n]),t}function N_(s,t){let e=null,n=1/0;for(const i of s.faces){if(i.wall!==t.wall||i.side!==t.side)continue;const r=t.u<i.u0?i.u0-t.u:t.u>i.u1?t.u-i.u1:0;r<n&&(n=r,e=i)}return e}function F_(s,t,e){const n=new Map,i=[];for(const o of s.hang){if(!o.text&&(o.cols=o.cols.map(c=>c.filter(l=>e.has(l))).filter(c=>c.length),!o.cols.length))continue;const a=N_(t,o);if(!a){i.push(o);continue}n.has(a)||n.set(a,[]),n.get(a).push(o)}const r=[];for(const[o,a]of n){const c=U_(o);if(!c.length){i.push(...a);continue}const l=c.map(()=>[]);for(const u of a){let f=0,d=1/0;c.forEach(([p,x],g)=>{const m=u.u<p?p-u.u:u.u>x?u.u-x:0;m<d&&(d=m,f=g)}),l[f].push(u)}const h=Ll(o);c.forEach(([u,f],d)=>{const p=l[d].sort((w,P)=>(w.u-P.u)*h);if(!p.length)return;const x=p.map(w=>D_(w,e)),g=f-u,m=x.reduce((w,P)=>w+P,0);let S=(g-m)/(p.length+1);const E=S<vh;E&&(S=vh);const v=m+S*(p.length+1);let M=(h>0?u:-f)+(g-v)/2+S;p.forEach((w,P)=>{const _=w.text?zu(w.text):Ou(w.cols,e),R=(M+_.w/2)*h;w.u=+R.toFixed(4),r.push(z_(w,o,R,_,e,t,E)),M+=x[P]+S})})}return{placed:r,homeless:i}}function z_(s,t,e,n,i,r,o){const a=Ll(t),c=[t.n[0],0,t.n[1]],l=[t.right[0],0,t.right[1]];let h=s.text?A_:b_;h-n.h/2<.35&&(h=.35+n.h/2),h+n.h/2>r.H-.3&&(h=Math.max(n.h/2+.1,r.H-.3-n.h/2));const u=[];let f=-n.w/2;s.cols.forEach((E,v)=>{const M=n.colW[v],w=n.colH[v];let P=h+w/2;for(const _ of E){const y=i.get(_),[R,L]=ll(y),U=f+M/2;u.push({work:y,pos:Si(t,e+U*a,P-L/2),w:R,h:L,depth:Pu[y.kind]}),P-=L+Du}f+=M+Iu});const d=s.cols.flat().map(E=>i.get(E)),p=d.length>1?Fu:Uu,x=d.length>1?P_(d):w_,g=e+(n.w/2+Nu+p/2)*a,m=Math.min(E_,h+n.h/2-x/2),S=Si(t,e,h);return{def:s,face:t,centre:S,normal:c,right:l,w:n.w,h:n.h,items:u,label:{pos:Si(t,g,Math.max(m,.3+x/2)),w:p,h:x,works:d},lamp:O_(S,c,l,n,u,r),over:o,text:s.text}}function O_(s,t,e,n,i,r){const o=r.H-.03;let a=Mh;for(let S=.2;S<=Mh+.25;S+=.05)if(Ui(r.solids,s[0]+t[0]*.02,s[2]+t[2]*.02,s[0]+t[0]*S,s[2]+t[2]*S)){a=Math.max(.35,(S-.25)*.8);break}const c=[s[0]+t[0]*a,o,s[2]+t[2]*a],l=i.reduce((S,E)=>S+E.depth,0)/Math.max(1,i.length),h=[s[0]+t[0]*l,s[1],s[2]+t[2]*l],u=[h[0]-c[0],h[1]-c[1],h[2]-c[2]],f=Math.hypot(u[0],u[1],u[2]),d=[u[0]/f,u[1]/f,u[2]/f];let p=0;for(const[S,E]of[[-1,-1],[1,-1],[1,1],[-1,1]]){const v=[s[0]+e[0]*S*n.w/2-c[0],s[1]+E*n.h/2-c[1],s[2]+e[2]*S*n.w/2-c[2]],M=Math.hypot(v[0],v[1],v[2]);p=Math.max(p,Math.acos(Math.min(1,(v[0]*d[0]+v[1]*d[1]+v[2]*d[2])/M)))}p+=1.5*Math.PI/180;const x=p+6*Math.PI/180,g=[-u[0]/f,-u[1]/f,-u[2]/f],m=g[0]*t[0]+g[2]*t[2];return{p:c,d,cOuter:Math.cos(x),cInner:Math.cos(p),i:f*f/Math.max(.2,m)}}function k_(s,t,e){if(s.version===2||!s.hang.some(o=>"cols"in o))return!1;const{placed:n}=F_(s,t,e),i=[],r=(o,a)=>+(o.axis==="x"?a[0]:a[2]).toFixed(4);for(const o of n){const a=o.face;o.text&&i.push({id:o.def.id,wall:a.wall,side:a.side,u:r(a,o.centre),y:+o.centre[1].toFixed(4),text:o.text});for(const c of o.items)i.push({id:c.work.id,wall:a.wall,side:a.side,u:r(a,c.pos),y:+c.pos[1].toFixed(4)})}return s.hang=i,s.version=2,!0}const B_=["b","c","s","t","sh","hl"],ku=s=>!s||B_.every(t=>!s[t]);function Bu(s){const t=e=>(s==null?void 0:s[e])??0;return{warm:[1+.1*t("t"),1,1-.1*t("t")],gamma:2**(-.8*t("b")),contrast:2**(.8*t("c")),sh:t("sh"),hl:t("hl"),sat:1+t("s")}}const yh=s=>Math.min(1,Math.max(0,s));function H_(s,t){let e=Math.pow(s,t.gamma);e=yh(.5+(e-.5)*t.contrast);const n=e*(1-e)*(1-e)*6.75,i=e*e*(1-e)*6.75;return yh(e+t.sh*.25*n+t.hl*.25*i)}const G_=`
  uniform float uAdj; uniform vec3 uWarm; uniform float uGamma; uniform float uContrast; uniform float uShadows; uniform float uHigh; uniform float uSat;
  vec3 toSRGB(vec3 c) { return mix(c * 12.92, 1.055 * pow(c, vec3(1.0 / 2.4)) - 0.055, step(0.0031308, c)); }
  vec3 toLinear(vec3 c) { return mix(c / 12.92, pow((c + 0.055) / 1.055, vec3(2.4)), step(0.04045, c)); }
  vec3 adjust(vec3 lin) {
    if (uAdj < 0.5) return lin;
    vec3 s = clamp(toSRGB(lin) * uWarm, 0.0, 1.0);
    s = pow(s, vec3(uGamma));
    s = clamp(0.5 + (s - 0.5) * uContrast, 0.0, 1.0);
    vec3 ws = s * (1.0 - s) * (1.0 - s) * 6.75, wh = s * s * (1.0 - s) * 6.75;
    s = clamp(s + uShadows * 0.25 * ws + uHigh * 0.25 * wh, 0.0, 1.0);
    float y = dot(s, vec3(0.2126, 0.7152, 0.0722));
    return toLinear(clamp(mix(vec3(y), s, uSat), 0.0, 1.0));
  }`;function V_(s){const t=Bu(s);return{uAdj:{value:ku(s)?0:1},uWarm:{value:new F(...t.warm)},uGamma:{value:t.gamma},uContrast:{value:t.contrast},uShadows:{value:t.sh},uHigh:{value:t.hl},uSat:{value:t.sat}}}let pi=null;const Sh="http://www.w3.org/2000/svg";function W_(s,t){if(ku(t))return"";pi||(pi=document.createElementNS(Sh,"svg"),pi.setAttribute("width","0"),pi.setAttribute("height","0"),pi.style.position="absolute",document.body.append(pi));const e=`adj-${s}`;let n=pi.querySelector(`#${CSS.escape(e)}`);n||(n=document.createElementNS(Sh,"filter"),n.id=e,n.setAttribute("color-interpolation-filters","sRGB"),pi.append(n));const i=Bu(t),[r,,o]=i.warm,a=[.2126,.7152,.0722],c=i.sat,l=Array.from({length:65},(u,f)=>H_(f/64,i).toFixed(4)).join(" "),h=[0,1,2].map(u=>[0,1,2].map(f=>((1-c)*a[f]+(u===f?c:0)).toFixed(4)).join(" ")+" 0 0").join("  ")+"  0 0 0 1 0";return n.innerHTML=`<feColorMatrix type="matrix" values="${r} 0 0 0 0  0 1 0 0 0  0 0 ${o} 0 0  0 0 0 1 0"/><feComponentTransfer><feFuncR type="table" tableValues="${l}"/><feFuncG type="table" tableValues="${l}"/><feFuncB type="table" tableValues="${l}"/></feComponentTransfer><feColorMatrix type="matrix" values="${h}"/>`,`url(#${e})`}const Yn=16,ls=48,Il=new kt(1,.965,.915),Hu=.72,X_=.55,Gu=1,Dl=4,q_=.6,Vu=`
float hash12(vec2 p) { vec3 p3 = fract(vec3(p.xyx) * 0.1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
float vnoise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash12(i), hash12(i + vec2(1, 0)), u.x), mix(hash12(i + vec2(0, 1)), hash12(i + vec2(1, 1)), u.x), u.y);
}
float fbm(vec2 p) { float s = 0.0, a = 0.5; for (int k = 0; k < 4; k++) { s += a * vnoise(p); p = p * 2.03 + 17.1; a *= 0.5; } return s; }
`,Ul=`
uniform sampler2D uAO;
uniform sampler2D uLT;
uniform vec2 uBO;
uniform vec4 uAoXf;
uniform vec4 uLtXf;
vec2 bakeUv(vec2 xz, vec4 xf) { return (xz - uBO) * xf.xy + xf.zw; }
float bakedAO(vec2 xz) { return texture2D(uAO, bakeUv(xz, uAoXf)).r; }
vec3 bakedLight(vec2 xz) { return texture2D(uLT, bakeUv(xz, uLtXf)).rgb; }
float bakedSpill(vec2 xz) { return texture2D(uLT, bakeUv(xz, uLtXf)).a; }
`,Wu=`
varying vec3 vW;
varying vec3 vN;
varying vec2 vUv;
void main() {
  vec4 w = modelMatrix * vec4(position, 1.0);
  vW = w.xyz;
  vN = normalize(mat3(modelMatrix) * normal);
  vUv = uv;
  gl_Position = projectionMatrix * viewMatrix * w;
}
`,Nl=`
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
`,Fl=s=>({uAO:{value:s.ao},uLT:{value:s.light},uBO:{value:s.origin},uAoXf:{value:s.aoXf},uLtXf:{value:s.lightXf}}),Xu=s=>({uCeilTex:{value:s.tex},uCeilO:{value:s.origin},uCeilS:{value:s.scale}}),qu=`
  uniform sampler2D uCeilTex; uniform vec2 uCeilO; uniform vec2 uCeilS;
  vec3 ceilingAt(vec2 xz) { return texture2D(uCeilTex, (xz - uCeilO) * uCeilS).rgb; }
`;function bh(s,t,e,n,i){const r=(o,a,c)=>{const l=o.slice(0,a);for(;l.length<a;)l.push(c());return l};return new nn({uniforms:{uN:{value:Math.min(s.lamps.length,Yn)},uLP:{value:r(s.lamps.map(o=>o.p),Yn,()=>new F)},uLD:{value:r(s.lamps.map(o=>o.d),Yn,()=>new F(0,-1,0))},uLC:{value:r(s.lamps.map(o=>o.c),Yn,()=>new Bt(1,1))},uLI:{value:r(s.lamps.map(o=>o.i),Yn,()=>0)},uB:{value:Math.min(s.boxes.length,ls)},uBC:{value:r(s.boxes.map(o=>o.c),ls,()=>new F(0,-99,0))},uBS:{value:r(s.boxes.map(o=>o.s),ls,()=>new F)},uBL:{value:r(s.boxes.map(o=>o.lamp),ls,()=>0)},uFN:{value:s.normal},uFR:{value:s.right},uAxisX:{value:s.axisX?1:0},uU0:{value:s.u0},uU1:{value:s.u1},uCA:{value:s.cornerA?1:0},uCB:{value:s.cornerB?1:0},uH:{value:e},uAlb:{value:t},uAmb:{value:Hu},uBounceK:{value:Dl},uLampK:{value:X_},uCeilK:{value:Gu},...Xu(i),uLCol:{value:Il},...Fl(n)},vertexShader:Wu,fragmentShader:`
      #define MAXL ${Yn}
      #define MAXB ${ls}
      uniform int uN;
      uniform vec3 uLP[MAXL]; uniform vec3 uLD[MAXL]; uniform vec2 uLC[MAXL]; uniform float uLI[MAXL];
      uniform int uB;
      uniform vec3 uBC[MAXB]; uniform vec3 uBS[MAXB]; uniform float uBL[MAXB];
      uniform vec3 uFN; uniform vec3 uFR;
      uniform float uAxisX, uU0, uU1, uCA, uCB, uH;
      uniform vec3 uAlb; uniform float uAmb; uniform float uBounceK; uniform float uLampK; uniform float uCeilK; uniform vec3 uLCol;
      varying vec3 vW; varying vec3 vN; varying vec2 vUv;
      ${qu}
      ${Ul}
      ${Vu}
      float occ(float d) { return 1.0 - 0.40 * exp(-max(d, 0.0) / 0.30); }
      // rounded corners and coves gather far less shadow than sharp ones
      float occSoft(float d) { return 1.0 - 0.16 * exp(-max(d, 0.0) / 0.30); }

      // 1 = lit, 0 = in the shadow box j throws from its own lamp
      float boxShadow(int j, vec3 p, out float contact) {
        contact = 1.0;
        vec3 q = p - uBC[j];
        if (abs(dot(q, uFN)) > 0.004) return 1.0;
        vec2 P = vec2(dot(q, uFR), q.y);
        vec2 hs = uBS[j].xy;
        contact = 1.0 - 0.30 * exp(-length(max(abs(P) - hs, 0.0)) / 0.010);
        int k = int(uBL[j] + 0.5);
        vec3 lq = uLP[k] - uBC[j];
        vec2 Lw = vec2(dot(lq, uFR), lq.y);
        float lz = dot(lq, uFN);
        if (lz <= uBS[j].z + 0.01) return 1.0;
        float s = lz / (lz - uBS[j].z);
        vec2 dl = P - Lw;
        float lo = 1.0 / s, hi = 1.0;
        for (int a = 0; a < 2; a++) {
          float dla = a == 0 ? dl.x : dl.y;
          float La = a == 0 ? Lw.x : Lw.y;
          float h = a == 0 ? hs.x : hs.y;
          if (abs(dla) < 1e-5) {
            if (La < -h || La > h) return 1.0;
          } else {
            float t0 = (-h - La) / dla, t1 = (h - La) / dla;
            lo = max(lo, min(t0, t1));
            hi = min(hi, max(t0, t1));
          }
        }
        float slack = (hi - lo) * length(dl);
        return 1.0 - smoothstep(-0.003, 0.003, slack);
      }

      void main() {
        vec3 n = normalize(vN);
        float sh[MAXL];
        for (int k = 0; k < MAXL; k++) sh[k] = 1.0;
        float contact = 1.0;
        for (int j = 0; j < MAXB; j++) {
          if (j >= uB) break;
          float c;
          float s = boxShadow(j, vW, c);
          contact *= c;
          int k = int(uBL[j] + 0.5);
          sh[k] *= s;
        }
        float direct = 0.0;
        for (int k = 0; k < MAXL; k++) {
          if (k >= uN) break;
          vec3 L = uLP[k] - vW;
          float d2 = dot(L, L);
          vec3 l = L * inversesqrt(d2);
          float spot = smoothstep(uLC[k].x, uLC[k].y, dot(-l, uLD[k]));
          if (spot > 0.0) direct += uLI[k] * spot * max(dot(n, l), 0.0) / d2 * sh[k];
        }
        float ao = occ(vW.y) * occSoft(uH - vW.y);
        float u = uAxisX > 0.5 ? vW.x : vW.z;
        if (uCA > 0.5) ao *= occSoft(u - uU0);
        if (uCB > 0.5) ao *= occSoft(uU1 - u);
        vec3 bounce = bakedLight(vW.xz + n.xz * 0.25);
        // the room's light leans a little one way, so each wall and every curve takes its own shade;
        // a cove turning to face down takes on the ceiling's brightness, and runs into it seamlessly;
        // the wall's paint stops halfway round the cove, where a painter would cut in the ceiling white
        // (only up in the cove: a doorway's head keeps the wall's paint); the ceiling's colour is
        // the one over this room, looked up a little way out from the wall
        float up = clamp(-n.y, 0.0, 1.0);
        vec3 ceil = ceilingAt(vW.xz + n.xz * 0.1);
        vec3 paint = mix(uAlb, ceil, smoothstep(0.68, 0.74, up) * step(uH - 0.35, vW.y));
        float amb = uAmb * (0.95 + 0.07 * dot(n.xz, vec2(0.45, 0.893)));
        float lum = max(dot(paint, vec3(0.299, 0.587, 0.114)), 0.5);
        amb = mix(amb, uCeilK * dot(ceil, vec3(0.299, 0.587, 0.114)) / lum, up);
        vec3 lightIn = uLCol * direct * uLampK * contact + (vec3(amb) + uBounceK * bounce) * ao * contact;
        vec2 t = abs(n.x) > 0.5 ? vW.zy : vW.xy;
        float grain = 1.0 + 0.018 * (vnoise(t * 41.0) - 0.5) + 0.012 * (fbm(t * 1.7) - 0.5);
        vec3 alb = paint * grain;
        if (vW.y < 0.015) alb *= 0.25;
        gl_FragColor = vec4(alb * lightIn, 1.0);
        ${Nl}
      }`})}function Y_(s,t){return new nn({uniforms:{uAmb:{value:Gu},uBounceK:{value:Dl},...Xu(t),...Fl(s)},vertexShader:Wu,fragmentShader:`
      uniform float uAmb; uniform float uBounceK;
      varying vec3 vW; varying vec3 vN; varying vec2 vUv;
      ${Ul}
      ${qu}
      void main() {
        float ao = mix(1.0, bakedAO(vW.xz), 0.3);
        vec3 l = vec3(uAmb) * ao + uBounceK * 0.5 * bakedLight(vW.xz) * ao;
        gl_FragColor = vec4(ceilingAt(vW.xz) * l, 1.0);
        ${Nl}
      }`})}function $_(s,t,e){return new nn({uniforms:{uRefl:{value:s},uTexMat:{value:t},uAmb:{value:Hu},uBounceK:{value:Dl},uSpillK:{value:q_},...Fl(e)},vertexShader:`
      uniform mat4 uTexMat;
      varying vec3 vW; varying vec3 vN; varying vec2 vUv; varying vec4 vR;
      void main() {
        vec4 w = modelMatrix * vec4(position, 1.0);
        vW = w.xyz; vN = vec3(0.0, 1.0, 0.0); vUv = uv;
        vR = uTexMat * w;
        gl_Position = projectionMatrix * viewMatrix * w;
      }`,fragmentShader:`
      uniform sampler2D uRefl;
      uniform float uAmb; uniform float uBounceK; uniform float uSpillK;
      varying vec3 vW; varying vec3 vN; varying vec2 vUv; varying vec4 vR;
      ${Ul}
      ${Vu}
      const vec2 DISC[8] = vec2[8](vec2(-0.613, 0.617), vec2(0.170, -0.040), vec2(-0.299, -0.792),
        vec2(0.645, 0.493), vec2(-0.651, -0.072), vec2(0.421, -0.581), vec2(-0.033, 0.977), vec2(0.928, -0.156));
      void main() {
        vec2 xz = vW.xz;
        float m = 0.55 * fbm(xz * 0.45) + 0.30 * fbm(xz * 2.6 + 5.0) + 0.15 * vnoise(xz * 23.0);
        vec3 alb = mix(vec3(0.30, 0.298, 0.292), vec3(0.47, 0.465, 0.455), m);
        float speck = step(0.93, vnoise(xz * 140.0));
        alb = mix(alb, alb * 1.35, speck * 0.5);
        vec2 g = abs(fract(xz / 2.1 + 0.5) - 0.5) * 2.1;
        float joint = min(g.x, g.y);
        alb *= mix(0.55, 1.0, smoothstep(0.0015, 0.0045, joint));
        float ao = bakedAO(xz);
        vec3 base = alb * (vec3(uAmb) * ao + (uBounceK * bakedLight(xz) + vec3(uSpillK * bakedSpill(xz))) * mix(1.0, ao, 0.5));
        vec2 ruv = vR.xy / vR.w;
        vec2 wob = (vec2(fbm(xz * 7.0 + 3.1), fbm(xz * 7.0 - 7.3)) - 0.5) * 0.010;
        vec3 V = normalize(cameraPosition - vW);
        float dist = length(cameraPosition - vW);
        float blur = 0.0035 + 0.006 * smoothstep(1.0, 8.0, dist);
        vec3 rc = vec3(0.0);
        for (int k = 0; k < 8; k++) rc += texture2D(uRefl, ruv + wob + DISC[k] * blur).rgb;
        rc /= 8.0;
        float F = 0.045 + 0.955 * pow(1.0 - max(V.y, 0.0), 5.0);
        float gloss = 0.80 * mix(1.0, 0.75, m);
        vec3 col = base * (1.0 - F * gloss) + rc * F * gloss;
        gl_FragColor = vec4(col, 1.0);
        ${Nl}
      }`})}function wh(s,t,e,n){return new nn({uniforms:{uMap:{value:s},...V_(n),uLP:{value:t.p},uLD:{value:t.d},uLC:{value:t.c},uLI:{value:t.i},uSide:{value:e??new kt(1,1,1)},uSideMode:{value:e?1:0},uLCol:{value:Il}},toneMapped:!1,vertexShader:`
      attribute float aSide; attribute vec3 aCol;
      varying vec3 vW; varying vec3 vN; varying vec2 vUv; varying float vSide; varying vec3 vCol;
      void main() {
        vec4 w = modelMatrix * vec4(position, 1.0);
        vW = w.xyz; vN = normalize(mat3(modelMatrix) * normal); vUv = uv; vSide = aSide; vCol = aCol;
        gl_Position = projectionMatrix * viewMatrix * w;
      }`,fragmentShader:`
      uniform sampler2D uMap;
      uniform vec3 uLP; uniform vec3 uLD; uniform vec2 uLC; uniform float uLI;
      uniform vec3 uSide; uniform float uSideMode; uniform vec3 uLCol;
      varying vec3 vW; varying vec3 vN; varying vec2 vUv; varying float vSide; varying vec3 vCol;
      ${G_}
      void main() {
        vec3 n = normalize(vN);
        vec3 L = uLP - vW;
        float d2 = dot(L, L);
        vec3 l = L * inversesqrt(d2);
        float spot = smoothstep(uLC.x, uLC.y, dot(-l, uLD));
        float e = uLI * spot * max(dot(n, l), 0.0) / d2;
        vec3 c = adjust(texture2D(uMap, vUv).rgb);        // the photo, with its colour corrections
        if (vSide > 0.5 && uSideMode > 0.5) c = uSide;
        if (vSide > 1.5) c = vCol;                         // a frame, its mat and the mat's cut edge
        // light on the front is ~1 at the centre; mix a touch of the lamp's warmth in
        vec3 lit = c * (0.07 + 0.95 * e * mix(vec3(1.0), uLCol, 0.35));
        gl_FragColor = vec4(lit, 1.0);
        #include <colorspace_fragment>
      }`})}const Us=.05,Ns=.2;function K_(s,t,e){const n=s.inner,i=n.x1-n.x0,r=n.z1-n.z0,o=Math.ceil(i/Us)+1,a=Math.ceil(r/Us)+1,c=new Uint8Array(o*a),l=s.solids;for(let E=0;E<a;E++){const v=n.z0+E*Us;for(let M=0;M<o;M++){const w=n.x0+M*Us;let P=1;for(const _ of l){const y=Math.max(_.x0-w,0,w-_.x1),R=Math.max(_.z0-v,0,v-_.z1),L=y*y+R*R;L>1.44||(P*=1-.42*Math.exp(-Math.sqrt(L)/.28))}c[E*o+M]=Math.round(Math.max(0,Math.min(1,P))*255)}}const h=Math.ceil(i/Ns)+1,u=Math.ceil(r/Ns)+1,f=new Float32Array(h*u*4),d=Il,p=t.map(E=>{const v=new kt(E.face.color),w=(E.w+.5)*(E.h+1)*.7*.55;return{c:[E.centre[0]+E.normal[0]*.05,1.2,E.centre[2]+E.normal[2]*.05],n:E.normal,rgb:[v.r*d.r*w,v.g*d.g*w,v.b*d.b*w],lamp:E.lamp}});for(let E=0;E<u;E++){const v=n.z0+E*Ns;for(let M=0;M<h;M++){const w=n.x0+M*Ns;let P=0,_=0,y=0,R=0;for(const U of p){const V=w-U.c[0],H=v-U.c[2],G=V*V+H*H;if(G>64)continue;const J=V*U.n[0]+H*U.n[2];if(J>.02){const X=Math.max(G+U.c[1]*U.c[1],.3),z=Math.sqrt(X),k=J/z*(U.c[1]/z)/(Math.PI*X);k>5e-4&&!Ui(s.solids,U.c[0],U.c[2],w,v)&&(P+=U.rgb[0]*k,_+=U.rgb[1]*k,y+=U.rgb[2]*k)}const W=U.lamp,tt=w-W.p[0],B=-W.p[1],Q=v-W.p[2],st=tt*tt+B*B+Q*Q,ut=Math.sqrt(st),O=(tt*W.d[0]+B*W.d[1]+Q*W.d[2])/ut;if(O>W.cOuter){const X=Math.min(1,(O-W.cOuter)/(W.cInner-W.cOuter)),z=X*X*(3-2*X),k=W.i*z*(W.p[1]/ut)/st;k>.002&&!Ui(s.solids,W.p[0],W.p[2],w,v)&&(R+=k)}}const L=(E*h+M)*4;f[L]=P,f[L+1]=_,f[L+2]=y,f[L+3]=R}}e==null||e.ao.dispose(),e==null||e.light.dispose();const x=new gs(c,o,a,xo,tn);x.magFilter=x.minFilter=Be,x.needsUpdate=!0;const g=new Uint16Array(f.length);for(let E=0;E<f.length;E++)g[E]=Ad.toHalfFloat(f[E]);const m=new gs(g,h,u,hn,_n);m.magFilter=m.minFilter=Be,m.needsUpdate=!0;const S=(E,v,M)=>new ge(1/(E*v),1/(E*M),.5/v,.5/M);return{ao:x,light:m,origin:new Bt(n.x0,n.z0),aoXf:S(Us,o,a),lightXf:S(Ns,h,u)}}const Oe=.15,He=8,$n=(s,t)=>[s[0]+t[0],s[1]+t[1],s[2]+t[2]],Vn=(s,t)=>[s[0]*t,s[1]*t,s[2]*t],Nr=(s,t)=>[s[0]-t[0],s[1]-t[1],s[2]-t[2]],Eh=(s,t)=>[s[1]*t[2]-s[2]*t[1],s[2]*t[0]-s[0]*t[2],s[0]*t[1]-s[1]*t[0]],Th=(s,t)=>s[0]*t[0]+s[1]*t[1]+s[2]*t[2],Z_=[0,1,0];class Yu{constructor(){D(this,"pos",[]);D(this,"nor",[]);D(this,"idx",[])}v(t,e){return this.pos.push(t[0],t[1],t[2]),this.nor.push(e[0],e[1],e[2]),this.pos.length/3-1}quad(t,e){const n=t.map((o,a)=>this.v(o,e[a])),i=Eh(Nr(t[2],t[0]),Nr(t[3],t[1])),r=$n($n(e[0],e[1]),$n(e[2],e[3]));Th(i,r)>=0?this.idx.push(n[0],n[1],n[2],n[0],n[2],n[3]):this.idx.push(n[0],n[2],n[1],n[0],n[3],n[2])}tri(t,e){const n=t.map(i=>this.v(i,e));Th(Eh(Nr(t[1],t[0]),Nr(t[2],t[0])),e)>=0?this.idx.push(n[0],n[1],n[2]):this.idx.push(n[0],n[2],n[1])}get empty(){return this.idx.length===0}geometry(){const t=new De;return t.setAttribute("position",new se(this.pos,3)),t.setAttribute("normal",new se(this.nor,3)),t.setAttribute("uv",new se(new Array(this.pos.length/3*2).fill(0),2)),t.setIndex(this.idx),t}}const $u=(s,t)=>s?Oe:Math.max(0,Math.min(Oe,t/2-.002));function J_(s,t,e){const n=new Yu,i=[s.n[0],0,s.n[1]],r=s.axis==="x"?[1,0,0]:[0,0,1],o=(_,y,R)=>{const L=Si(s,_,R);return[L[0]+i[0]*y,R,L[2]+i[2]*y]},a=$u(s.outer,s.t),c=t-Oe,l=Math.min(e,c),h=s.cornerA?"in":s.freeA?"free":"flat",u=s.cornerB?"in":s.freeB?"free":"flat",f=s.u0+(h==="in"?Oe:h==="free"?a:0),d=s.u1-(u==="in"?Oe:u==="free"?a:0);if(d-f<.01)return n;const p=(_,y,R,L)=>{y-_<1e-4||L-R<1e-4||n.quad([o(_,0,R),o(y,0,R),o(y,0,L),o(_,0,L)],[i,i,i,i])},x=[...s.doors].sort((_,y)=>_[0]-y[0]);if(!x.length)p(f,d,0,c);else{let _=f;for(const[y,R]of x)p(_,Math.min(d,y-a),0,l),_=Math.max(_,R+a);p(_,d,0,l),p(f,d,l,c)}const g=(_,y,R,L)=>{if(a<.01)return;const U=V=>$n(Vn(i,Math.cos(V)),Vn(y,Math.sin(V)));for(let V=0;V<He;V++){const H=V/He*Math.PI/2,G=(V+1)/He*Math.PI/2,J=(W,tt)=>$n(o(_,-a,tt),Vn(U(W),a));n.quad([J(H,R),J(G,R),J(G,L),J(H,L)],[U(H),U(G),U(G),U(H)])}},m=_=>[-_[0],-_[1],-_[2]];for(const[_,y]of x)_-s.u0>a+.01&&g(_-a,r,0,l),s.u1-y>a+.01&&g(y+a,m(r),0,l);h==="free"&&g(s.u0+a,m(r),0,t),u==="free"&&g(s.u1-a,r,0,t);const S=(_,y)=>{const R=$n($n(o(_,0,0),Vn(i,Oe)),Vn(y,Oe)),L=V=>$n(Vn(i,Math.cos(V)),Vn(y,Math.sin(V))),U=Math.PI/4;for(let V=0;V<He/2;V++){const H=V/(He/2)*U,G=(V+1)/(He/2)*U,J=(W,tt)=>[R[0]-Oe*L(W)[0],tt,R[2]-Oe*L(W)[2]];n.quad([J(H,0),J(G,0),J(G,c),J(H,c)],[L(H),L(G),L(G),L(H)]);for(let W=0;W<He;W++){const tt=W/He*Math.PI/2,B=(W+1)/He*Math.PI/2,Q=(ut,O)=>{const X=L(ut);return[R[0]-Oe*Math.cos(O)*X[0],c+Oe*Math.sin(O),R[2]-Oe*Math.cos(O)*X[2]]},st=(ut,O)=>{const X=L(ut);return[Math.cos(O)*X[0],-Math.sin(O),Math.cos(O)*X[2]]};n.quad([Q(H,tt),Q(G,tt),Q(G,B),Q(H,B)],[st(H,tt),st(G,tt),st(G,B),st(H,B)])}}};h==="in"&&S(s.u0,r),u==="in"&&S(s.u1,m(r));const E=h==="in"?s.u0+Oe:f,v=u==="in"?s.u1-Oe:d,M=(_,y)=>o(_,Oe-Oe*Math.cos(y),c+Oe*Math.sin(y)),w=_=>$n(Vn(i,Math.cos(_)),Vn(Z_,-Math.sin(_)));for(let _=0;_<He;_++){const y=_/He*Math.PI/2,R=(_+1)/He*Math.PI/2;n.quad([M(E,y),M(v,y),M(v,R),M(E,R)],[w(y),w(y),w(R),w(R)])}const P=(_,y)=>{const R=o(_,0,t);for(let L=0;L<He;L++){const U=L/He*Math.PI/2,V=(L+1)/He*Math.PI/2;n.tri([R,M(_,U),M(_,V)],y)}};return h!=="in"&&P(E,m(r)),u!=="in"&&P(v,r),n}function Q_(s,t){const e=new Map,n=a=>(e.has(a)||e.set(a,new Yu),e.get(a)),i=s.H,r=Math.min(s.doorH,i-Oe),o=a=>{var c,l;return((c=s.faces.find(h=>h.wall===a&&h.side===1))==null?void 0:c.color)??((l=s.faces.find(h=>h.wall===a))==null?void 0:l.color)??"#f2f1ee"};for(const a of s.walls){const c=a.id==="S";if(a.outer&&!c)continue;const l=n(o(a.id)),h=(E,v,M)=>a.axis==="x"?[E,M,v]:[v,M,E],u=a.axis==="x"?[1,0,0]:[0,0,1];a.axis;const[f,d]=a.axis==="x"?[a.rect.z0,a.rect.z1]:[a.rect.x0,a.rect.x1],p=$u(a.outer,a.t),x=c?[{c:f,s:-1}]:[{c:f,s:-1},{c:d,s:1}],g=f+p,m=c?f+t:d-p,S=c?[[s.entrance.a,s.entrance.b]]:s.faces.filter(E=>E.wall===a.id).flatMap(E=>E.doors).filter((E,v,M)=>M.findIndex(w=>Math.abs(w[0]-E[0])<1e-6)===v);for(const[E,v]of S){const M=(_,y)=>{m-g>.001&&l.quad([h(_,g,0),h(_,m,0),h(_,m,r),h(_,g,r)],[y,y,y,y])};M(E,u),M(v,[-u[0],0,-u[2]]);const w=[0,-1,0],P=c?f+t:d;l.quad([h(E,f,r),h(v,f,r),h(v,P,r),h(E,P,r)],[w,w,w,w]);for(const{c:_,s:y}of x)for(const[R,L]of[[E,1],[v,-1]]){if(p<.01)continue;const U=R-L*p,V=_-y*p,H=h(R,_,r);for(let G=0;G<He;G++){const J=W=>{const tt=W/He*Math.PI/2;return h(U+L*p*Math.sin(tt),V+y*p*Math.cos(tt),r)};l.tri([H,J(G),J(G+1)],w)}}}if(!a.outer)for(const E of s.faces.filter(v=>v.wall===a.id&&v.side===1)){const v=(M,w)=>{d-p-(f+p)>.001&&l.quad([h(M,f+p,0),h(M,d-p,0),h(M,d-p,i),h(M,f+p,i)],[w,w,w,w])};E.freeA&&v(E.u0,[-u[0],0,-u[2]]),E.freeB&&v(E.u1,u)}}return e}const Ah=new kt(1,1,1),Ku=.2;function j_(s,t,e,n){const i=new Pe;s.background=Ah,s.fog=null;const r=n.outline,o=r.t-Ku,a=r.x0-r.t,c=r.x1+r.t,l=r.z0-r.t,h=r.z1+r.t,u=n.ceiling,f=n.doorHeight,d=u+1.4,p=n.entrance.x-n.entrance.w/2,x=n.entrance.x+n.entrance.w/2,g=n.entrance.x,m=new jn({color:Ah,toneMapped:!1}),S=(_,y,R,L,U,V)=>{const H=new Ce(new xn(L,U,V),m);return H.position.set(_,y,R),H.userData.outside=!0,i.add(H),H},E=-.5,v=d,M=(E+v)/2,w=v-E;S((a+p)/2,M,h-o/2,p-a,w,o),S((x+c)/2,M,h-o/2,c-x,w,o),S(g,(f+v)/2,h-o/2,x-p,v-f,o),S((a+c)/2,M,l+o/2,c-a,w,o),S(a+o/2,M,(l+h)/2,o,w,h-l-2*o),S(c-o/2,M,(l+h)/2,o,w,h-l-2*o),S((a+c)/2,(u+v)/2+.05,(l+h)/2,c-a-.02,v-u-.1,h-l-.02);const P=new Ce(new si(400,400).rotateX(-Math.PI/2),m);return P.position.y=-.002,i.add(P),s.add(i),{group:i,dispose(){s.remove(i),i.traverse(_=>{var L;const y=_;y.geometry&&y.geometry.dispose();const R=Array.isArray(y.material)?y.material:y.material?[y.material]:[];for(const U of R)(L=U.map)==null||L.dispose(),U.dispose()})}}}class Rh{constructor(){D(this,"pos",[]);D(this,"nor",[]);D(this,"uv",[]);D(this,"idx",[])}add(t,e){const n=this.pos.length/3;for(const i of t)this.pos.push(i[0],i[1],i[2]),this.nor.push(e[0],e[1],e[2]);this.uv.push(0,0,1,0,1,1,0,1),this.idx.push(n,n+1,n+2,n,n+2,n+3)}geometry(){const t=new De;return t.setAttribute("position",new se(this.pos,3)),t.setAttribute("normal",new se(this.nor,3)),t.setAttribute("uv",new se(this.uv,2)),t.setIndex(this.idx),t}}const ir=s=>new F(s[0],s[1],s[2]),Zu=s=>({p:ir(s.p),d:ir(s.d),c:new Bt(s.cOuter,s.cInner),i:s.i});function tv(s,t,e){const n=t.filter(l=>l.face===s),i=n.map(l=>l.lamp),r=[],o=[],a=Math.min(40,Math.max(2,Math.ceil((s.u1-s.u0)/.5)));for(let l=0;l<=a;l++){const h=s.u0+(s.u1-s.u0)*l/a;for(const u of[.4,1.4,2.4])o.push(Si(s,h,u))}for(const l of t){if(l.face===s)continue;const h=l.lamp,u=o[0];if((h.p[0]-u[0])*s.n[0]+(h.p[2]-u[2])*s.n[1]<.1)continue;let d=1/0;for(const p of o){const x=p[0]-h.p[0],g=p[1]-h.p[1],m=p[2]-h.p[2],S=Math.hypot(x,g,m);S>7||(x*h.d[0]+g*h.d[1]+m*h.d[2])/S<=h.cOuter||Ui(e.solids,h.p[0],h.p[2],p[0]+s.n[0]*.03,p[2]+s.n[1]*.03)||(d=Math.min(d,S))}d<1/0&&r.push({L:h,d})}r.sort((l,h)=>l.d-h.d);for(const l of r){if(i.length>=Yn)break;i.push(l.L)}const c=[];return n.forEach((l,h)=>{if(!(h>=Yn))for(const u of l.items)c.length>=ls||u.text||c.push({c:ir(u.pos),s:new F(u.w/2,u.h/2,u.depth),lamp:h})}),{lamps:i.slice(0,Yn).map(Zu),boxes:c,normal:new F(s.n[0],0,s.n[1]),right:new F(s.right[0],0,s.right[1]),axisX:s.axis==="x",u0:s.u0,u1:s.u1,cornerA:s.cornerA,cornerB:s.cornerB}}const ev={lamps:[],boxes:[],normal:new F(0,0,1),right:new F(1,0,0),axisX:!0,u0:0,u1:0,cornerA:!1,cornerB:!1};function Ch(s,t,e,n=[0,1,0,1]){const[i,r,o,a]=n,c=[],l=[],h=[],u=[],f=[],d=(w,P,_,y)=>{const R=c.length/3;w.forEach((L,U)=>{c.push(...L),l.push(...P),h.push(..._[U]),u.push(y)}),f.push(R,R+1,R+2,R,R+2,R+3)},p=s/2,x=t/2,g=.004,m=i+g,S=r-g,E=o+g,v=a-g;d([[-p,-x,e],[p,-x,e],[p,x,e],[-p,x,e]],[0,0,1],[[i,o],[r,o],[r,a],[i,a]],0),d([[-p,x,e],[p,x,e],[p,x,0],[-p,x,0]],[0,1,0],[[i,v],[r,v],[r,v],[i,v]],1),d([[-p,-x,0],[p,-x,0],[p,-x,e],[-p,-x,e]],[0,-1,0],[[i,E],[r,E],[r,E],[i,E]],1),d([[-p,-x,0],[-p,-x,e],[-p,x,e],[-p,x,0]],[-1,0,0],[[m,o],[m,o],[m,a],[m,a]],1),d([[p,-x,e],[p,-x,0],[p,x,0],[p,x,e]],[1,0,0],[[S,o],[S,o],[S,a],[S,a]],1);const M=new De;return M.setAttribute("position",new se(c,3)),M.setAttribute("normal",new se(l,3)),M.setAttribute("uv",new se(h,2)),M.setAttribute("aSide",new se(u,1)),M.setIndex(f),M}function nv(s,t,e,n=[0,1,0,1]){const{face:i,depth:r,mat:o,lip:a,bevel:c}=ro,l=s/2,h=t/2,u=l+o+i,f=h+o+i,d=l+o,p=h+o,x=l+c,g=h+c,m=r-a,S=m-c,E=new kt(n_[e.color]),v=new kt(i_[e.mat]),M=new kt(s_),w=[],P=[],_=[],y=[],R=[],L=[],U=B=>new F(B[0],B[1],B[2]),V=(B,Q,st,ut=[[0,0],[0,0],[0,0],[0,0]])=>{const O=new F().crossVectors(U(B[1]).sub(U(B[0])),U(B[3]).sub(U(B[0]))).normalize();O.dot(U(Q))<0&&(B=[B[0],B[3],B[2],B[1]],ut=[ut[0],ut[3],ut[2],ut[1]],O.negate());const X=w.length/3;B.forEach((z,k)=>{w.push(...z),P.push(O.x,O.y,O.z),_.push(...ut[k]),y.push(st?2:0),R.push(...st?[st.r,st.g,st.b]:[0,0,0])}),L.push(X,X+1,X+2,X,X+2,X+3)};V([[-u,p,r],[u,p,r],[u,f,r],[-u,f,r]],[0,0,1],E),V([[-u,-f,r],[u,-f,r],[u,-p,r],[-u,-p,r]],[0,0,1],E),V([[-u,-p,r],[-d,-p,r],[-d,p,r],[-u,p,r]],[0,0,1],E),V([[d,-p,r],[u,-p,r],[u,p,r],[d,p,r]],[0,0,1],E),V([[-u,f,0],[u,f,0],[u,f,r],[-u,f,r]],[0,1,0],E),V([[-u,-f,0],[u,-f,0],[u,-f,r],[-u,-f,r]],[0,-1,0],E),V([[-u,-f,0],[-u,f,0],[-u,f,r],[-u,-f,r]],[-1,0,0],E),V([[u,-f,0],[u,f,0],[u,f,r],[u,-f,r]],[1,0,0],E),V([[-d,p,m],[d,p,m],[d,p,r],[-d,p,r]],[0,-1,0],E),V([[-d,-p,m],[d,-p,m],[d,-p,r],[-d,-p,r]],[0,1,0],E),V([[-d,-p,m],[-d,p,m],[-d,p,r],[-d,-p,r]],[1,0,0],E),V([[d,-p,m],[d,p,m],[d,p,r],[d,-p,r]],[-1,0,0],E),V([[-d,g,m],[d,g,m],[d,p,m],[-d,p,m]],[0,0,1],v),V([[-d,-p,m],[d,-p,m],[d,-g,m],[-d,-g,m]],[0,0,1],v),V([[-d,-g,m],[-x,-g,m],[-x,g,m],[-d,g,m]],[0,0,1],v),V([[x,-g,m],[d,-g,m],[d,g,m],[x,g,m]],[0,0,1],v),V([[-x,g,m],[x,g,m],[l,h,S],[-l,h,S]],[0,-1,1],M),V([[-x,-g,m],[x,-g,m],[l,-h,S],[-l,-h,S]],[0,1,1],M),V([[-x,-g,m],[-x,g,m],[-l,h,S],[-l,-h,S]],[1,0,1],M),V([[x,-g,m],[x,g,m],[l,h,S],[l,-h,S]],[-1,0,1],M);const[H,G,J,W]=n;V([[-l,-h,S],[l,-h,S],[l,h,S],[-l,h,S]],[0,0,1],null,[[H,J],[G,J],[G,W],[H,W]]);const tt=new De;return tt.setAttribute("position",new se(w,3)),tt.setAttribute("normal",new se(P,3)),tt.setAttribute("uv",new se(_,2)),tt.setAttribute("aSide",new se(y,1)),tt.setAttribute("aCol",new se(R,3)),tt.setIndex(L),tt}function Ph(s,t,e,n){const[i,r,o,a]=n??[0,0,1,1];let c=i,l=o,h=1-a,u=1-r;if(!e)return[c,l,h,u];const f=s/t,d=e[0]*(o-i)/(e[1]*(a-r));if(d>f){const p=f/d,x=(c+l)/2,g=(l-c)*p/2;c=x-g,l=x+g}else{const p=d/f,x=(h+u)/2,g=(u-h)*p/2;h=x-g,u=x+g}return[c,l,h,u]}const aa=(s,t,e,n)=>{const i=new ne().makeBasis(ir(e),new F(0,1,0),ir(t));s.quaternion.setFromRotationMatrix(i),s.position.set(n[0],n[1],n[2])};class iv{constructor(t,e){D(this,"map",new Map);D(this,"used",new Set);this.font=t,this.aniso=e}begin(){this.used.clear()}end(){for(const[t,e]of this.map)this.used.has(t)||(e.dispose(),this.map.delete(t))}single(t){const e=`1|${ao(t)}|${t.medium}|${oo(t)}|${t.year}`;return this.get(e,()=>{const i=Math.round(1024*Ys/hs),r=Ju(1024,i),o=r.getContext("2d");o.fillStyle="#f6f5f1",o.fillRect(0,0,1024,i),o.fillStyle="#121212";const a=70;let c=160;const l=[[`italic 500 84px ${this.font}`,ao(t)]];for(const h of[t.medium,oo(t),t.year])h&&l.push([`400 62px ${this.font}`,h]);for(const[h,u]of l)o.font=h,c=sv(o,u,a,c,1024-2*a,h.startsWith("italic")?92:74),c+=h.startsWith("italic")?20:8;return r})}get(t,e){this.used.add(t);let n=this.map.get(t);return n||(n=new Rl(e()),n.colorSpace=Le,n.anisotropy=this.aniso,this.map.set(t,n)),n}}const Ju=(s,t)=>{const e=document.createElement("canvas");return e.width=s,e.height=t,e};function sv(s,t,e,n,i,r){let o="";for(const a of t.split(" ")){const c=o?o+" "+a:a;s.measureText(c).width>i&&o?(s.fillText(o,e,n),n+=r,o=a):o=c}return s.fillText(o,e,n),n+r}const rv=s=>{const t=new kt(s);return .2126*t.r+.7152*t.g+.0722*t.b<.12};function ov(s,t,e,n){const i=Ju(Math.ceil(t*lo),Math.ceil(e*lo)),r=i.getContext("2d");r.fillStyle=rv(n)?"#eeede8":"#262625",r.textBaseline="alphabetic",r.font=`300 ${$s}px ${co}`,r.fillText(s.title,8,$s*.8),s.sub&&(r.font=`400 ${ho}px ${co}`,r.fillText(s.sub,10,$s+Lu+ho*.8));const o=new Rl(i);return o.colorSpace=Le,o.anisotropy=8,o}function av(s){const t=f_(s),e=p_(s,t).map(l=>new kt(l)),n=Int32Array.from(t.id),i=t.nx*t.nz;let r=[];for(let l=0;l<i;l++)n[l]>=0&&r.push(l);for(;r.length;){const l=[];for(const h of r){const u=h%t.nx;for(const f of[u>0?h-1:-1,u<t.nx-1?h+1:-1,h-t.nx,h+t.nx])f>=0&&f<i&&n[f]<0&&(n[f]=n[h],l.push(f))}r=l}const o=new Uint8Array(i*4),a=new kt(Cu);for(let l=0;l<i;l++){const h=e[n[l]]??a;o[l*4]=Math.round(h.r*255),o[l*4+1]=Math.round(h.g*255),o[l*4+2]=Math.round(h.b*255),o[l*4+3]=255}const c=new gs(o,t.nx,t.nz,hn);return c.magFilter=c.minFilter=ke,c.needsUpdate=!0,{tex:c,origin:new Bt(t.x0,t.z0),scale:new Bt(1/(t.nx*t.c),1/(t.nz*t.c))}}function lv(s,t,e,n,i,r,o,a){const c=new Pe,l=s.H,h=av(s),u=[],f=[],d=[h.tex],p=(_,y)=>{f.push(_),u.push(y);const R=new Ce(_,y);return c.add(R),R},x=[];for(const _ of s.faces){const y=J_(_,l,s.doorH);if(y.empty)continue;const R=p(y.geometry(),bh(tv(_,t,s),new kt(_.color),l,e,h));R.userData.face=_,x.push(R)}for(const[_,y]of Q_(s,Ku))y.empty||p(y.geometry(),bh(ev,new kt(_),l,e,h));const g=s.inner,m=s.entrance,S=new Rh;S.add([[g.x0,0,g.z1],[g.x1,0,g.z1],[g.x1,0,g.z0],[g.x0,0,g.z0]],[0,1,0]),S.add([[m.a,0,m.z+.4],[m.b,0,m.z+.4],[m.b,0,m.z],[m.a,0,m.z]],[0,1,0]),p(S.geometry(),$_(o,a,e)).layers.set(1);const v=new Rh;v.add([[g.x0,l,g.z0],[g.x1,l,g.z0],[g.x1,l,g.z1],[g.x0,l,g.z1]],[0,-1,0]),p(v.geometry(),Y_(e,h));const M=t.length;if(M){const _=new qs(.068,28).rotateX(Math.PI/2).translate(0,l-.0015,0),y=new qs(.05,24).rotateX(Math.PI/2).translate(0,l-.0025,0),R=new qs(.026,20).rotateX(Math.PI/2).translate(0,l-.0035,0),L=new jn({color:14276820,toneMapped:!1}),U=new jn({color:11842479,toneMapped:!1}),V=new jn({color:16777215,toneMapped:!1});f.push(_,y,R),u.push(L,U,V);const H=new Yr(_,L,M),G=new Yr(y,U,M),J=new Yr(R,V,M),W=new ne;t.forEach((tt,B)=>{W.makeTranslation(tt.lamp.p[0],0,tt.lamp.p[2]),H.setMatrixAt(B,W),G.setMatrixAt(B,W),J.setMatrixAt(B,W)}),c.add(H,G,J)}const w=[],P=[];r.begin();for(const _ of t){const y=Zu(_.lamp);for(const R of _.items){if(R.text){const Q=ov(R.text,R.w,R.h,R.face.color);d.push(Q);const st=p(new si(R.w,R.h),new jn({map:Q,transparent:!0,depthWrite:!1,toneMapped:!1}));aa(st,_.normal,_.right,[R.pos[0]+_.normal[0]*.002,R.pos[1],R.pos[2]+_.normal[2]*.002]),st.userData.title=R.id;continue}const L=R.work,U=L.kind==="paper"||L.kind==="digital"?new kt().setRGB(.92,.91,.88):null,V=wh(n(L.id),y,U,L.adjust),H=Pl(L),G=L.w*En,J=L.h*En,W=H?nv(G,J,H,Ph(G,J,i(L.id),L.crop)):Ch(R.w,R.h,R.depth,Ph(R.w,R.h,i(L.id),L.crop)),tt=p(W,V);aa(tt,_.normal,_.right,R.pos),tt.userData.work=L.id;const B={work:L,placed:_,mesh:tt,mat:V,w:R.w,h:R.h,label:null};if(w.push(B),R.label){const Q=p(Ch(hs,Ys,.003),wh(r.single(L),y,new kt(.95,.95,.93)));aa(Q,_.normal,_.right,R.label.pos),Q.userData.work=L.id,Q.userData.label=!0,P.push(Q),B.label=Q}}}return r.end(),{group:c,pictures:w,labels:P,faceMeshes:x,dispose(){for(const _ of f)_.dispose();for(const _ of u)_.dispose();for(const _ of d)_.dispose();c.traverse(_=>{const y=_;y.isInstancedMesh&&y.dispose()})}}}const Ks=class Ks{constructor(t,e,n,i,r,o){D(this,"cat",new Map);D(this,"arch");D(this,"placed",[]);D(this,"items",[]);D(this,"migrated",!1);D(this,"interior",null);D(this,"outside",null);D(this,"sharp",new Map);D(this,"small",new Map);D(this,"baked");D(this,"labels");D(this,"outsideKey","");D(this,"blank",new gs(new Uint8Array([128,128,128,255]),1,1));D(this,"onRebuilt",()=>{});D(this,"prepTex",t=>(t.colorSpace=Le,t.anisotropy=this.aniso,t.minFilter=yi,t));D(this,"texture",t=>this.sharp.get(t)??this.small.get(t)??this.blank);D(this,"px",t=>this.data.images[t]);this.data=t,this.scene=e,this.renderer=n,this.mirror=i,this.font=r,this.aniso=o,this.labels=new iv(r,o),this.blank.needsUpdate=!0}async loadSmall(){const t=new nl;await Promise.all(this.data.catalogue.map(e=>t.loadAsync(Ks.url(e.id,"s")).then(n=>{this.small.set(e.id,this.prepTex(n))}).catch(()=>{})))}async loadOne(t){const e=await new nl().loadAsync(`${Ks.url(t,"s")}?${Date.now()}`);this.small.set(t,this.prepTex(e))}rebuild(){var a;const t=this.data.layout;this.cat=new Map(this.data.catalogue.map(c=>[c.id,c])),this.arch=u_(t),k_(t,this.arch,this.cat)&&(this.migrated=!0);const{placed:e,items:n,homeless:i}=y_(t,this.arch,this.cat);i.length&&(t.hang=t.hang.filter(c=>!i.includes(c))),this.placed=e,this.items=n,this.baked=K_(this.arch,e,this.baked);const r=this.interior;this.interior=lv(this.arch,e,this.baked,this.texture,this.px,this.labels,this.mirror.target.texture,this.mirror.texMat),this.scene.add(this.interior.group),r&&(this.scene.remove(r.group),r.dispose());const o=JSON.stringify([t.outline,t.entrance,t.ceiling,t.doorHeight]);o!==this.outsideKey&&((a=this.outside)==null||a.dispose(),this.outside=j_(this.scene,this.font,this.aniso,t),this.outsideKey=o),this.onRebuilt(i)}hung(){return new Set(this.data.layout.hang.filter(t=>!t.text).map(t=>t.id))}storage(){const t=this.hung();return this.data.catalogue.filter(e=>!t.has(e.id)&&!e.off)}placementOf(t){return this.data.layout.hang.find(e=>e.id===t)}};D(Ks,"url",(t,e)=>`art/${t}-${e}.jpg`);let us=Ks;class cv{constructor(t,e){D(this,"target");D(this,"texMat",new ne);D(this,"cam",new je);D(this,"plane",new qn);D(this,"clip",new ge);D(this,"q",new ge);D(this,"n",new F(0,1,0));D(this,"p0",new F(0,0,0));D(this,"camPos",new F);D(this,"rot",new ne);D(this,"look",new F);D(this,"view",new F);D(this,"tgt",new F);this.target=new mn(t,e,{type:_n,depthBuffer:!0}),this.target.texture.generateMipmaps=!1,this.cam.layers.set(0)}setSize(t,e){this.target.setSize(Math.max(2,t),Math.max(2,e))}render(t,e,n){if(this.camPos.setFromMatrixPosition(n.matrixWorld),this.view.subVectors(this.p0,this.camPos),this.view.dot(this.n)>0)return;this.view.reflect(this.n).negate().add(this.p0),this.rot.extractRotation(n.matrixWorld),this.look.set(0,0,-1).applyMatrix4(this.rot).add(this.camPos),this.tgt.subVectors(this.p0,this.look).reflect(this.n).negate().add(this.p0);const i=this.cam;i.position.copy(this.view),i.up.set(0,1,0).applyMatrix4(this.rot).reflect(this.n),i.lookAt(this.tgt),i.far=n.far,i.near=n.near,i.updateMatrixWorld(),i.projectionMatrix.copy(n.projectionMatrix),this.texMat.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),this.texMat.multiply(i.projectionMatrix).multiply(i.matrixWorldInverse),this.plane.setFromNormalAndCoplanarPoint(this.n,this.p0).applyMatrix4(i.matrixWorldInverse),this.clip.set(this.plane.normal.x,this.plane.normal.y,this.plane.normal.z,this.plane.constant);const r=i.projectionMatrix.elements;this.q.x=(Math.sign(this.clip.x)+r[8])/r[0],this.q.y=(Math.sign(this.clip.y)+r[9])/r[5],this.q.z=-1,this.q.w=(1+r[10])/r[14],this.clip.multiplyScalar(2/this.clip.dot(this.q)),r[2]=this.clip.x,r[6]=this.clip.y,r[10]=this.clip.z+1-.003,r[14]=this.clip.w;const o=t.getRenderTarget();t.setRenderTarget(this.target),t.clear(),t.render(e,i),t.setRenderTarget(o)}}const cl=1.62,hv=12,uv=6.5,fv=2,dv=1.7,rs=1.15,Lh=.0022,pv=2.6,mv=4.6,on=.3;class gv{constructor(t){D(this,"pos",new F(6.6,cl,10.2));D(this,"vel",new F);D(this,"yaw",Math.atan2(6.6-4.2,10.2-.4));D(this,"pitch",.05);D(this,"yawVel",0);D(this,"pitchVel",0);D(this,"keys",new Set);D(this,"taps",new Map);D(this,"frozen",!1);D(this,"moved",!1);D(this,"solids",[]);D(this,"obstacles",[]);D(this,"world",{x0:-22,x1:39,z0:-38,z1:30});this.canvas=t,addEventListener("keydown",e=>{var n,i;e.metaKey||e.ctrlKey||e.altKey||(i=(n=e.target).closest)!=null&&i.call(n,"input, textarea, select")||(this.keys.add(e.code),["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"].includes(e.code)&&e.preventDefault())}),addEventListener("keyup",e=>this.keys.delete(e.code)),addEventListener("blur",()=>this.keys.clear()),addEventListener("mousemove",e=>{document.pointerLockElement!==this.canvas||this.frozen||(this.yaw-=e.movementX*Lh,this.pitch=Math.max(-rs,Math.min(rs,this.pitch-e.movementY*Lh)),this.moved=!0)})}get locked(){return document.pointerLockElement===this.canvas}tap(t,e){this.taps.set(t,e)}update(t){const e=this.frozen?new Set:this.taps.size?new Set([...this.keys,...this.taps.keys()]):this.keys;for(const[h,u]of this.taps)u-t<=0?this.taps.delete(h):this.taps.set(h,u-t);let n=0;e.has("ArrowLeft")&&(n+=1),e.has("ArrowRight")&&(n-=1),this.yawVel+=(n*fv-this.yawVel)*(1-Math.exp(-9*t)),this.yaw+=this.yawVel*t;let i=0;e.has("ArrowUp")&&(i+=1),e.has("ArrowDown")&&(i-=1),this.pitchVel+=(i*dv-this.pitchVel)*(1-Math.exp(-9*t)),this.pitch+=this.pitchVel*t,(this.pitch>rs||this.pitch<-rs)&&(this.pitch=Math.max(-rs,Math.min(rs,this.pitch)),this.pitchVel=0);let r=0,o=0;e.has("KeyW")&&(r+=1),e.has("KeyS")&&(r-=1),e.has("KeyD")&&(o+=1),e.has("KeyA")&&(o-=1),(r||o||n||i)&&(this.moved=!0);let a=0,c=0;if(r||o){const h=e.has("ShiftLeft")||e.has("ShiftRight")?mv:pv,u=Math.hypot(r,o),f=Math.sin(this.yaw),d=Math.cos(this.yaw);a=(-f*r+d*o)/u*h,c=(-d*r-f*o)/u*h}const l=1-Math.exp(-(r||o?hv:uv)*t);if(this.vel.x+=(a-this.vel.x)*l,this.vel.z+=(c-this.vel.z)*l,this.vel.lengthSq()>1e-8){const h=this.pos.x,u=this.pos.z;this.pos.x+=this.vel.x*t,this.pos.z+=this.vel.z*t,this.collide();const f=this.pos.x-(h+this.vel.x*t),d=this.pos.z-(u+this.vel.z*t),p=Math.hypot(f,d);if(p>1e-9){const x=f/p,g=d/p,m=this.vel.x*x+this.vel.z*g;m<0&&(this.vel.x-=x*m,this.vel.z-=g*m)}}}collide(){const t=this.pos;for(let e=0;e<2;e++)for(const n of this.solids){const i=Math.max(n.x0,Math.min(t.x,n.x1)),r=Math.max(n.z0,Math.min(t.z,n.z1)),o=t.x-i,a=t.z-r,c=o*o+a*a;if(!(c>=on*on))if(c>1e-12){const l=Math.sqrt(c);t.x+=o/l*(on-l),t.z+=a/l*(on-l)}else{const l=[t.x-n.x0+on,n.x1-t.x+on,t.z-n.z0+on,n.z1-t.z+on],h=Math.min(...l);h===l[0]?t.x=n.x0-on:h===l[1]?t.x=n.x1+on:h===l[2]?t.z=n.z0-on:t.z=n.z1+on}}for(const e of this.obstacles){const n=t.x-e.x,i=t.z-e.z,r=Math.hypot(n,i),o=on*.7+e.r;r<o&&r>1e-6&&(t.x=e.x+n/r*o,t.z=e.z+i/r*o)}t.x=Math.max(this.world.x0,Math.min(this.world.x1,t.x)),t.z=Math.max(this.world.z0,Math.min(this.world.z1,t.z))}apply(t){t.position.copy(this.pos),t.rotation.set(this.pitch,this.yaw,0,"YXZ")}}class xv{constructor(){D(this,"el");D(this,"tools");D(this,"low");D(this,"high");D(this,"cap");D(this,"frame");D(this,"open",!1);D(this,"busy",!1);D(this,"work",null);D(this,"px",[1,1]);D(this,"crop",[0,0,1,1]);D(this,"onClose",()=>{});D(this,"onShow",()=>{});D(this,"reserveRight",0);D(this,"relock",()=>!0);this.el=document.getElementById("view"),this.frame=this.el.querySelector(".frame"),this.low=this.el.querySelector("img.low"),this.high=this.el.querySelector("img.high"),this.cap=this.el.querySelector(".cap"),this.tools=document.createElement("div"),this.tools.className="view-tools",this.el.prepend(this.tools),this.high.addEventListener("load",()=>{this.open&&this.high.classList.add("in")}),addEventListener("resize",()=>{this.work&&this.fit()})}show(t,e,n,i){this.work=t,this.px=e??[1200,1200],this.crop=t.crop??[0,0,1,1],this.open=!0,this.busy=!1,this.high.classList.remove("in"),this.low.src=n,this.high.src=i,this.caption(),this.setFilter(W_(t.id,t.adjust)),this.fit(),this.el.classList.add("on"),this.onShow(t)}caption(){const t=this.work;if(!t)return;const e=[`<i>${Ih(ao(t))}</i>`],n=[t.medium,oo(t),t.year].filter(Boolean).map(i=>Ih(i));n.length&&e.push(n.join(" &nbsp;·&nbsp; ")),this.cap.innerHTML=e.join("<br>")}hide(){!this.open||this.busy||(this.open=!1,this.work=null,this.el.classList.remove("on"),this.onClose())}setFilter(t){this.low.style.filter=t,this.high.style.filter=t}refit(){this.el.style.paddingRight=this.reserveRight?`${this.reserveRight}px`:"",this.fit()}setCrop(t){this.crop=t,this.fit()}get frameEl(){return this.frame}fit(){const n=this.tools.childElementCount?56:0,[i,r,o,a]=this.crop,c=this.px[0]*(o-i),l=this.px[1]*(a-r),h=innerWidth-2*28-this.reserveRight,u=innerHeight-2*28-64-n,f=Math.min(1,h/c,u/l),d=Math.round(c*f),p=Math.round(l*f);this.frame.style.width=`${d}px`,this.frame.style.height=`${p}px`;const x=d/(o-i),g=p/(a-r);for(const m of[this.low,this.high])Object.assign(m.style,{width:`${x}px`,height:`${g}px`,left:`${-i*x}px`,top:`${-r*g}px`})}}const Ih=s=>s.replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]),_v=.62,la=5,vv=.18;class Mv{constructor(t=!0){D(this,"pic",null);D(this,"lit",null);D(this,"dark",0);D(this,"veil");D(this,"vScene",new El);D(this,"vCam",new _o(-1,1,1,-1,0,1));D(this,"hintEl");D(this,"hinted",null);D(this,"hintDone",!1);D(this,"v",new F);D(this,"f",new F);this.veil=new Ce(new si(2,2),new jn({color:0,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1,toneMapped:!1})),this.vScene.add(this.veil),this.hintEl=document.createElement("div"),this.hintEl.id="focus-hint",this.hintEl.textContent="CLICK FOR FULL SCREEN",t||(this.hintEl.style.display="none"),document.body.append(this.hintEl)}reach(t){return Math.min(6,Math.max(2.6,1.8+2.4*Math.max(t.w,t.h)))}update(t,e,n,i,r){let o=null,a=1/0,c=1/0;if(r){const u=e.getWorldPosition(this.v),f=e.getWorldDirection(this.f);for(const d of n){const p=d.mesh.position,x=d.placed.normal,g=p.x-u.x,m=p.y-u.y,S=p.z-u.z,E=Math.hypot(g,m,S);if(E>this.reach(d)||x[0]*-g+x[2]*-S<=0)continue;const v=Math.acos(Math.min(1,(g*f.x+m*f.y+S*f.z)/E)),M=Math.atan2(Math.max(d.w,d.h)*.5,E)+.17;if(v>M||Ui(i,u.x,u.z,p.x+x[0]*.05,p.z+x[2]*.05))continue;const w=v/M;w<a&&(a=w,o=d),d===this.pic&&(c=w)}this.pic&&c<a+.15&&(o=this.pic)}this.pic=o,o&&(this.lit=o);let l=0;if(o){const u=o.mesh.position.distanceTo(e.getWorldPosition(this.v)),f=this.reach(o),d=f*.4,p=Math.min(1,Math.max(0,(f-u)/(f-d)));l=_v*p*p*(3-2*p)}this.dark+=(l-this.dark)*(1-Math.exp(-t/vv)),this.dark<.003&&!o&&(this.lit=null),!this.hintDone&&o&&this.dark>.12&&!this.hinted&&(this.hinted=o);const h=!!this.hinted&&o===this.hinted&&this.dark>.08;this.hinted&&!h&&this.hintEl.classList.contains("on")&&(this.hintDone=!0,this.hinted=null),this.hintEl.classList.toggle("on",h)}opened(){this.hintDone=!0,this.hinted=null,this.hintEl.classList.remove("on")}clear(){this.pic=null,this.lit=null,this.dark=0,this.hintEl.classList.remove("on")}render(t,e,n){const i=this.lit;if(!i||this.dark<.003)return;this.veil.material.opacity=this.dark,t.autoClear=!1,t.render(this.vScene,this.vCam);const r=i.label?[i.mesh,i.label]:[i.mesh];for(const c of r)c.layers.enable(la);const o=n.layers.mask,a=e.background;n.layers.set(la),e.background=null,t.render(e,n),e.background=a,n.layers.mask=o;for(const c of r)c.layers.disable(la);t.autoClear=!0}}const yv=[[233,196,106],[237,214,197],[247,74,158],[124,196,124],[56,134,232],[150,106,76]],Sv=[[18,20,26],[198,44,48],[240,241,246],[72,178,96]],Qu=[[255,196,160],[255,132,112],[236,92,124],[255,110,178]],sr=.12,zl=[58,44,40],ca=s=>{const t=s/255;return t<=.04045?t/12.92:((t+.055)/1.055)**2.4},bv=s=>{const t=s<=.0031308?s*12.92:1.055*s**.4166666666666667-.055;return Math.round(Math.max(0,Math.min(1,t))*255)};function yo(s,t){const e=Math.max(0,Math.min(1,t))*(s.length-1),n=Math.min(s.length-2,Math.floor(e)),i=e-n,r=s[n],o=s[n+1];return[0,1,2].map(a=>bv(ca(r[a])+(ca(o[a])-ca(r[a]))*i))}function uo([s,t,e]){const n=s/255,i=t/255,r=e/255,o=Math.max(n,i,r),a=Math.min(n,i,r),c=(o+a)/2,l=o-a;if(!l)return[0,0,c];const h=c>.5?l/(2-o-a):l/(o+a);let u;return o===n?u=(i-r)/l+(i<r?6:0):o===i?u=(r-n)/l+2:u=(n-i)/l+4,[u*60,h,c]}function wv(s,t,e){if(s=(s%360+360)%360,t<=0){const l=Math.round(e*255);return[l,l,l]}const n=(1-Math.abs(2*e-1))*t,i=n*(1-Math.abs(s/60%2-1)),r=e-n/2;let o=0,a=0,c=0;return s<60?(o=n,a=i):s<120?(o=i,a=n):s<180?(a=n,c=i):s<240?(a=i,c=n):s<300?(o=i,c=n):(o=n,c=i),[Math.round((o+r)*255),Math.round((a+r)*255),Math.round((c+r)*255)]}function Ev(s,t){const[e,n,i]=uo(s);return n<.02?s:wv(e+t,n,i)}(()=>{const s=[];for(let t=0;t<=24;t++)s.push(`hsl(${t/24*360}, 72%, 56%) ${(t/24*100).toFixed(1)}%`);return`linear-gradient(90deg, ${s.join(", ")})`})();const Ol=s=>yo(yv,s.skin),Tv=s=>yo(Sv,s.mouthColor),Av=s=>yo(Qu,(s.cheeks-sr)/(1-sr)),Rv=s=>{const t=Math.max(0,Math.min(1,s.cheeks/sr));return t*t*(3-2*t)};(()=>{const s=["rgb(255,255,255) 0%"];for(let t=0;t<=16;t++){const[e,n,i]=yo(Qu,t/16);s.push(`rgb(${e},${n},${i}) ${((sr+t/16*(1-sr))*100).toFixed(1)}%`)}return`linear-gradient(90deg, ${s.join(", ")})`})();const Cv={shape:.35,eyeSize:.6,eyeSpacing:.5,eyeHeight:.5,browWeight:.5,browHeight:.5,noseLength:.5,noseHeight:.5,mouthWidth:.5,mouthColor:0,cheeks:0,skin:0,hairColor:uo(zl)[0]/360,hat:"none"},Vt=16,qt=16,Zt=16,Fs=[26,32,42],Dh=[236,240,246],an=(s,t)=>[Math.max(0,Math.min(255,Math.round(s[0]*t))),Math.max(0,Math.min(255,Math.round(s[1]*t))),Math.max(0,Math.min(255,Math.round(s[2]*t)))],Tt={felt:[44,52,66],leather:[122,84,56],band:[188,76,76],party:[226,120,92],partyAlt:[240,214,120],hair:zl,glass:[120,176,208],brass:[186,156,96],steel:[124,134,150],red:[190,58,54],gold:[216,178,82],leaf:[94,158,82],cream:[234,228,208],plum:[124,70,132]},Wn=(s,t)=>Math.round(Math.max(0,Math.min(1,s))*t),Uh=2.2,Pv=18,Lv=6,Nh=.55;function Iv(s){const t=Uh*Math.pow(Pv/Uh,Math.max(0,Math.min(1,s))),e=Vt/2,n=qt/2,i=Zt/2;return(r,o,a)=>{const c=Math.abs(r+.5-e)/e,l=Math.abs(o+.5-n)/n,h=c**t+l**t;if(h>1)return!1;const u=Math.abs(a+.5-i)/i;if(a>=Zt-Lv){const f=h<=Nh?1:((1-h)/(1-Nh))**(1/t);return u<=f}return h+u**t<=1}}function Dv(s){const t=Ol(s),e=Iv(s.shape),n=new Map,i=(O,X,z)=>`${O},${X},${z}`;let r=null;const o=new Set,a=new Set;let c;const l=(O,X,z,k)=>{const C=i(O,X,z);n.set(C,c?{x:O,y:X,z,c:k,part:c}:{x:O,y:X,z,c:k}),r&&r.add(C)},h=(O,X,z,k)=>{const C=i(O,X,z);n.set(C,{x:O,y:X,z,c:k}),o.delete(C),a.delete(C)},u=(O,X,z)=>n.has(i(O,X,z));for(let O=0;O<Vt;O++)for(let X=0;X<qt;X++)for(let z=0;z<Zt;z++)e(O,X,z)&&l(O,X,z,t);const f=(O,X)=>{for(let z=qt-1;z>=0;z--)if(u(O,z,X))return z;return-1},d=(O,X)=>{for(let z=Zt-1;z>=0;z--)if(u(O,X,z))return z;return-1},p=(O,X,z)=>{if(O<0||O>=Vt||X<0||X>=qt)return;const k=d(O,X);k>=0&&l(O,X,k,z)},x=Vt/2,g=1+Wn(s.eyeSize,3),m=1+Wn(s.eyeSize,3),S=Math.max(1,6-g),E=1+Wn(s.eyeSpacing,S-1),v=8+Wn(s.eyeHeight,4)-2-Math.floor((m-1)/2),M=v+m-1,w=[[x-E-g,x-E-1],[x+E,x+E+g-1]],P=g>=3&&m>=3;for(const[O,X]of w)for(let z=O;z<=X;z++)for(let k=v;k<=M;k++){const C=!!(P&&z>O&&z<X&&k>v&&k<M);c=P&&!C?"eye":"pupil",p(z,k,P?C?Fs:Dh:Fs)}c=void 0,r=o;const _=Wn(s.browWeight,3),y=M+2+(Wn(s.browHeight,4)-2);if(_>0){c="brow";for(const[O,X]of w)for(let z=O-1;z<=X+1;z++)for(let k=0;k<_;k++)p(z,y+k,Tt.hair);c=void 0}r=null;const R=Wn(s.noseLength,8),L=5+(Wn(s.noseHeight,6)-3);if(R>0){const O=an(t,.9);c="nose";for(let X=x-1;X<=x;X++)for(let z=L;z<=L+1;z++){const k=d(X,z);if(!(k<0))for(let C=1;C<=R;C++)l(X,z,k+C,O)}c=void 0}const U=2*Wn(s.mouthWidth,4),V=3;if(U>0){const O=Tv(s),X=U>=6?2:1;c="mouth";for(let z=x-U/2;z<=x+U/2-1;z++)for(let k=V;k<V+X;k++)p(z,k,O);c=void 0}const H=Rv(s);if(H>0){const O=Av(s),X=(T,I)=>T[0]===I[0]&&T[1]===I[1]&&T[2]===I[2],z=v-1,k=V+(U>=6?2:1),C=Math.max(k+.5,z-.5);for(const[T,I]of w){const K=I<x,j=(T+I)/2,ft=j+.35*((K?x-1.5:x+.5)-j);for(let pt=Math.floor(ft-2);pt<=Math.ceil(ft+2);pt++)if(!(K?pt>x-2:pt<x+1))for(let wt=k;wt<=z;wt++){const zt=1-((pt-ft)/1.9)**2-((wt-C)/1.3)**2;if(zt<=0)continue;const Ot=d(pt,wt),Wt=Ot>=0?n.get(i(pt,wt,Ot)):void 0;if(!Wt||Wt.part||!X(Wt.c,t))continue;const oe=H*.72*Math.pow(zt,.8),Ee=[0,1,2].map(Fe=>Math.round(t[Fe]+(O[Fe]-t[Fe])*oe));n.set(i(pt,wt,Ot),{x:pt,y:wt,z:Ot,c:Ee,blend:t})}}}const G=(O,X=1)=>{for(let z=0;z<Vt;z++)for(let k=0;k<Zt;k++){const C=f(z,k);if(!(C<0))for(let T=1;T<=X;T++)l(z,C+T,k,O)}},J=(O,X,z)=>{const k=Math.ceil(X)+1;for(let C=x-k;C<x+k;C++)for(let T=x-k;T<x+k;T++)Math.hypot(C+.5-x,T+.5-x)<=X&&l(C,O,T,z)},W=(O,X,z,k)=>{for(let C=O;C<=X;C++)for(let T=0;T<Vt;T++)for(let I=0;I<Zt;I++)Math.hypot(T+.5-x,I+.5-x)<=z&&l(T,C,I,k)},tt=(O,X,z,k,C)=>{const T=Math.ceil(k)+1;for(let I=Math.floor(O-T);I<=O+T;I++)for(let K=Math.floor(X-T);K<=X+T;K++)for(let j=Math.floor(z-T);j<=z+T;j++)Math.hypot(I+.5-O,K+.5-X,j+.5-z)<=k&&l(I,K,j,C)},B=(O,X,z,k=1)=>{for(let C=O;C<=X;C++)for(let T=0;T<Vt;T++){const I=d(T,C);I>=0&&l(T,C,I+k,z)}};switch(r=a,s.hat){case"birthday":{for(let O=0;O<9;O++)W(qt+O,qt+O,5.4-O*.62,O%2?Tt.partyAlt:Tt.party);tt(x,qt+9.5,x,1.6,Dh);break}case"mickey":{const O=f(x,x)+2;for(const X of[-.5,Vt+.5])tt(X,O,x,4.2,Fs);break}case"tophat":{J(qt,8.6,Tt.felt),W(qt+1,qt+10,5,Tt.felt),W(qt+3,qt+4,5.05,Tt.band);break}case"gangster":{J(qt,9.6,Tt.felt),W(qt+1,qt+5,5,Tt.felt),W(qt+1,qt+2,5.05,Tt.band);break}case"goggles":{B(v,M,Tt.brass);for(const[O,X]of w)for(let z=O;z<=X;z++)for(let k=v;k<=M;k++){const C=d(z,k);C>=0&&l(z,k,C+1,Tt.glass)}break}case"pilot":{G(Tt.leather,2),B(qt-4,qt-3,Tt.brass);for(let O=qt-4;O>=4;O--)for(const X of[0,1,Vt-2,Vt-1])for(let z=0;z<Zt;z++)u(X,O,z)&&l(X,O,z,Tt.leather);break}case"model":{J(qt,12.5,Tt.partyAlt),W(qt+1,qt+2,4.4,Tt.partyAlt);break}case"curls":{let O=7;const X=()=>(O=(O*1103515245+12345)%2147483648)/2147483648;for(let z=-2;z<Vt+2;z++)for(let k=-2;k<Zt+2;k++){const C=f(Math.max(0,Math.min(Vt-1,z)),Math.max(0,Math.min(Zt-1,k)));C<0||(X()<.6&&l(z,C+1,k,Tt.hair),X()<.34&&l(z,C+2,k,Tt.hair),X()<.14&&l(z,C+3,k,Tt.hair))}break}case"bob":{G(Tt.hair,2);for(let O=M+1;O<qt;O++)for(let X=0;X<Vt;X++)for(let z=0;z<Zt;z++)(X<=1||X>=Vt-2||z<=1)&&u(X,O,z)&&l(X,O,z,Tt.hair);break}case"pigtails":{G(Tt.hair,2);for(const O of[-1.5,Vt+1.5])tt(O,qt-5,x,3.4,Tt.hair);break}case"crown":{const O=Tt.gold,X=an(O,1.15),z=Tt.band,k=(I,K)=>{const j=Math.hypot(I+.5-x,K+.5-x);return j>=5.1&&j<=6.9};let C=0;for(let I=0;I<Vt;I++)for(let K=0;K<Zt;K++)k(I,K)&&(C=Math.max(C,f(I,K)+3));for(let I=0;I<Vt;I++)for(let K=0;K<Zt;K++){if(!k(I,K))continue;const j=f(I,K);if(!(j<0))for(let ft=j+1;ft<=C;ft++)l(I,ft,K,ft===C?X:O)}const T=[[7,13],[12,10],[2,10],[12,4],[2,4]];for(const[I,K]of T){const j=Math.hypot(I+1-x,K+1-x);for(let ft=I;ft<=I+1;ft++)for(let pt=K;pt<=K+1;pt++){const wt=Math.hypot(ft+.5-x,pt+.5-x)>j;for(let zt=1;zt<=(wt?5:3);zt++)l(ft,C+zt,pt,wt&&zt===5?X:O)}}for(let I=x-1;I<=x;I++)for(let K=C+2;K<=C+3;K++)for(let j=14;j<=15;j++)l(I,K,j,z);break}case"beanie":{const O=Tt.red,X=Tt.cream,z=Math.max(M+1,qt-6),k=Math.min(z+2,qt-1),C=[];for(let T=z;T<=k;T++)for(let I=-1;I<=Vt;I++)for(let K=-1;K<=Zt;K++)u(I,T,K)?l(I,T,K,X):(u(I-1,T,K)||u(I+1,T,K)||u(I,T,K-1)||u(I,T,K+1))&&C.push([I,T,K]);for(const[T,I,K]of C)l(T,I,K,X);for(let T=k+1;T<qt;T++)for(let I=0;I<Vt;I++)for(let K=0;K<Zt;K++)u(I,T,K)&&l(I,T,K,T===k+1?an(O,.82):O);for(let T=0;T<Vt;T++)for(let I=0;I<Zt;I++){const K=f(T,I);K<=k||(l(T,K+1,I,O),l(T,K+2,I,O))}tt(x,f(x,x)+4.5,x,1.9,X);break}case"cowboy":{let O=0;for(let X=0;X<Vt;X++)for(let z=0;z<Zt;z++)O=Math.max(O,f(X,z)+1);for(let X=0;X<Vt;X++)for(let z=0;z<Zt;z++){const k=f(X,z);if(!(k<0||Math.hypot(X+.5-x,z+.5-x)>5))for(let C=k+1;C<O;C++)l(X,C,z,Tt.leather)}for(let X=x-11;X<x+11;X++)for(let z=x-11;z<x+11;z++){const k=Math.abs(X+.5-x);if(Math.hypot(k,z+.5-x)>10.7)continue;const C=k>7.5?2:k>5.5?1:0;for(let T=0;T<=C;T++)l(X,O+T,z,Tt.leather)}for(let X=0;X<Vt;X++)for(let z=0;z<Zt;z++){const k=Math.abs(X+.5-x);if(Math.hypot(k,z+.5-x)>5)continue;const C=k<1?2:k<2?1:0;for(let T=O+1;T<=O+7-C;T++)l(X,T,z,Tt.leather);C>0&&l(X,O+7-C,z,an(Tt.leather,.8))}W(O+1,O+2,5.05,Tt.felt);break}case"wizard":{const O=Tt.plum,X=an(O,.82),z=f(x,x)+1;for(let I=x-6;I<x+6;I++)for(let K=x-6;K<x+6;K++){if(Math.hypot(I+.5-x,K+.5-x)>5.2)continue;const j=f(I,K);if(!(j<0))for(let ft=j+1;ft<=z;ft++)l(I,ft,K,O)}const k=11;for(let I=x-12;I<x+12;I++)for(let K=x-12;K<x+12;K++){const j=Math.hypot(I+.5-x,K+.5-x);if(j<=5.2||j>k)continue;const ft=I>=0&&I<Vt&&K>=0&&K<Zt?f(I,K):-1;l(I,Math.max(z-Math.max(0,Math.round(j)-8),ft+1,M+2),K,X)}const C=13;for(let I=0;I<=C;I++){const K=I/C,j=5-4.1*K,ft=x-6.5*K*K;for(let pt=x-6;pt<x+6;pt++)for(let wt=-2;wt<Zt;wt++)Math.hypot(pt+.5-x,wt+.5-ft)<=j&&l(pt,z+I,wt,O)}const T=(I,K)=>{for(let j=x-K;j<x+K;j++){const ft=d(j,I);ft>=0&&l(j,I,ft,Tt.gold)}};T(z+3,1),T(z+4,2),T(z+5,1),T(z+8,1),T(z+11,1);break}case"halo":{let O=-1;for(let I=0;I<Vt;I++)for(let K=0;K<Zt;K++)O=Math.max(O,f(I,K));const X=O+3,z=an(Tt.gold,1.15),k=4.9,C=6.7,T=Math.ceil(C)+1;for(let I=x-T;I<x+T;I++)for(let K=x-T;K<x+T;K++){const j=Math.hypot(I+.5-x,K+.5-x);j<k||j>C||l(I,X,K,K>=x?z:Tt.gold)}break}case"headphones":{const O=Math.min(M+1,10),X=x-2,z=x+1;for(let k=0;k<Vt;k++)for(let C=X;C<=z;C++){const T=f(k,C);T<0||(l(k,T+1,C,Tt.steel),l(k,T+2,C,Tt.steel))}for(let k=O+3;k<qt;k++)for(const C of[0,Vt-1])for(let T=X;T<=z;T++)u(C,k,T)&&l(C,k,T,Tt.steel);for(let k=0;k<3;k++)for(let C=O-4;C<=O+3;C++)for(let T=x-4;T<=x+3;T++)Math.hypot(C+.5-O,T+.5-x)>3.6||(l(-k,C,T,Fs),l(Vt-1+k,C,T,Fs));for(let k=O-2;k<=O+1;k++)for(let C=x-2;C<=x+1;C++)Math.hypot(k+.5-O,C+.5-x)<=1.6&&(l(-2,k,C,Tt.steel),l(Vt+1,k,C,Tt.steel));break}case"viking":{const O=an(Tt.steel,.78),X=Math.max(M+2,qt-5);for(let C=X;C<qt;C++)for(let T=0;T<Vt;T++)for(let I=0;I<Zt;I++)u(T,C,I)&&l(T,C,I,C===X?O:Tt.steel);for(let C=0;C<Vt;C++)for(let T=0;T<Zt;T++){const I=f(C,T);I<X||(l(C,I+1,T,Tt.steel),l(C,I+2,T,Tt.steel))}const z=Math.max(M+1,X-1);for(let C=z;C<=qt;C++)for(let T=x-1;T<=x;T++){const I=d(T,C);I>=0&&l(T,C,I+1,O)}const k=Math.max(f(5,x)-4,M+4);for(const C of[-1,1])for(let T=0;T<=18;T++){const I=T/18,K=I*2.05,j=x+C*(6.2+6*Math.sin(K));tt(j,k+8.4-8.4*Math.cos(K),x,2.6-1.6*I,Tt.cream)}break}case"flowers":{const O=Math.max(M+1,Math.min(M+3,qt-4)),X=Tt.leaf,z=an(Tt.leaf,.82),k=(j,ft)=>Math.floor(x+j*ft),C=[[0,1],[.87,.5],[.87,-.5],[0,-1]],T=[];for(const[j,ft]of C){let pt=2;for(;pt<12&&u(k(j,pt),O,k(ft,pt));)pt+=.5;T.push(pt)}const I=[];for(let j=O;j<=O+1;j++)for(let ft=0;ft<Vt;ft++)for(let pt=0;pt<Zt;pt++){if(!u(ft,j,pt))continue;let wt=!1;for(let zt=-1;zt<=1;zt++)for(let Ot=-1;Ot<=1;Ot++)u(ft+zt,j,pt+Ot)||(wt=!0,I.push([ft+zt,j,pt+Ot]));wt&&I.push([ft,j,pt])}for(const[j,ft,pt]of I)l(j,ft,pt,ft===O?z:X);const K=[Tt.red,Tt.gold,Tt.cream];for(let j=0;j<C.length;j++){const[ft,pt]=C[j],wt=Math.round(x+ft*(T[j]+1)),zt=Math.round(x+pt*(T[j]+1)),Ot=K[j%K.length];tt(wt,O+1.5,zt,1.5,Ot),ft>0&&tt(2*x-wt,O+1.5,zt,1.5,Ot)}break}case"afro":{const z=f(x,x),k=Math.max(M+2,qt-3);for(let C=x-10;C<x+10;C++)for(let T=x-10;T<x+10;T++){const I=Math.abs(C+.5-x),K=Math.abs(T+.5-x),j=(I*I+K*K)/(10*10),ft=f(C,T);if(j>1&&ft<0)continue;const pt=j>1?0:7.5*Math.sqrt(1-j),zt=T>=Zt-6?Math.max(M+1,k-Math.max(0,I-4.5)):M+1,Ot=ft>=0?zt:Math.max(zt,Math.ceil(z+.5-pt)),Wt=j>1?ft:Math.max(ft,Math.floor(z-.5+pt));for(let oe=Ot;oe<=Wt;oe++)l(C,oe,T,oe<zt+2?an(Tt.hair,.8):Tt.hair)}break}case"mohawk":{const O=Tt.hair,X=an(t,.74);for(let k=0;k<Vt;k++)for(let C=0;C<Zt;C++){const T=f(k,C);if(!(T<0))for(let I=M+2;I<=T;I++)u(k,I,C)&&h(k,I,C,X)}const z=f(x,x);for(let k=1;k<Zt-1;k++){if(f(x,k)<z-4)continue;const T=(k-1)/(Zt-3),I=2+Math.round(4*Math.sin(Math.PI*T));for(const K of[x-1,x])for(let j=f(K,k)+1;j<=f(K,k)+I;j++)l(K,j,k,O)}break}case"ponytail":{const O=Tt.hair,X=Math.max(f(x-1,2),f(x,2))-2;for(let z=0;z<Vt;z++)for(let k=0;k<Zt;k++){const C=f(z,k);C>M&&l(z,C,k,O)}G(O,2);for(let z=M+1;z<qt;z++)for(let k=0;k<Vt;k++)for(let C=0;C<Zt;C++)(k<=1||k>=Vt-2||C<=3)&&u(k,z,C)&&l(k,z,C,O);for(let z=3;z<=M;z++){const k=6-Math.max(0,Math.min(3,M-z));for(let C=x-k;C<x+k;C++)for(let T=0;T<=2;T++)u(C,z,T)&&l(C,z,T,O)}for(let z=0;z<=14;z++){const k=z/14;tt(x,X-10*k*k,1.5-4.4*Math.sqrt(k),2.7-1.3*k,O)}tt(x,X-.5,-.6,2.1,Tt.band);break}case"longhair":{const O=Tt.hair,X=Zt-5,z=2;G(O,2);for(let k=0;k<qt;k++)for(let C=0;C<Vt;C++)for(let T=0;T<Zt;T++){if(!u(C,k,T))continue;const I=T>=X,K=C<z||C>=Vt-z;I&&!K||I&&K&&k>=v&&k<=M||l(C,k,T,O)}for(let k=Math.max(qt-3,M+2);k<qt;k++)for(let C=0;C<Vt;C++)for(let T=X;T<Zt;T++)u(C,k,T)&&l(C,k,T,O);for(let k=0;k<Vt;k++)for(let C=0;C<Zt;C++){if(!(k<z||k>=Vt-z||C<z)||f(k,C)<0)continue;let I=0;for(;!u(k,I,C);)I++;for(let K=I-1;K>=I-3;K--)l(k,K,C,O)}break}case"buzz":{const O=Tt.hair,X=an(Tt.hair,1.75),z=Math.min(qt-2,Math.max(M+3,qt-3));for(let k=0;k<Vt;k++)for(let C=0;C<Zt;C++){const T=f(k,C);if(T<0)continue;const I=Math.abs(k+.5-x),j=C>=Zt-6?I<5.5?0:I<6.5?1:2:3,ft=Math.max(M+1,Math.min(z-j,T-1));for(let pt=ft;pt<=T;pt++)u(k,pt,C)&&l(k,pt,C,pt<z?X:O)}break}case"bun":{const O=an(Tt.hair,.74),X=M+2;for(let C=0;C<Vt;C++)for(let T=0;T<Zt;T++){const I=f(C,T);if(I<X)continue;const K=T<=5?5:T<=9?3:2;for(let j=I;j>I-K&&j>=X;j--)u(C,j,T)&&l(C,j,T,Tt.hair);l(C,I+1,T,Tt.hair)}const z=4.5,k=f(x,4);tt(x,k+3,z,3.1,Tt.hair);for(let C=x-4;C<x+4;C++)for(let T=1;T<=8;T++)if(Math.hypot(C+.5-x,T+.5-z)<=2.6)for(let I=k+1;I<=k+2;I++)l(C,I,T,O);break}case"braids":{G(Tt.hair,2);for(let z=M+1;z<qt;z++)for(let k=0;k<Vt;k++)for(let C=0;C<Zt;C++)(k<=1||k>=Vt-2||C<=1)&&u(k,z,C)&&l(k,z,C,Tt.hair);const O=an(Tt.hair,1.3),X=-5;for(const z of[-1,Vt]){const k=Math.max(0,Math.min(Vt-1,z)),C=Math.min(f(k,6),qt-4);if(!(C<0)){for(let T=X;T<=C;T++){const I=T<=X+3,K=T<=X+1;let j=(T%4+4)%4<2?Tt.hair:O;K&&(j=Tt.band);for(let ft=-1;ft<=1;ft++)for(let pt=-1;pt<=1;pt++)(!I||Math.abs(ft)+Math.abs(pt)<2)&&l(z+ft,T,6+pt,j)}tt(z+.5,X-2,6.5,1.9,Tt.band)}}break}}r=null;const Q=.18,st=.25;let ut=-1;if(a.size){const O=new Map;let X=0,z=0;for(const T of a){const I=n.get(T);if(!I)continue;z++;const K=`${I.c[0]},${I.c[1]},${I.c[2]}`,j=O.get(K);j?j.n++:O.set(K,{n:1,c:I.c,chroma:(Math.max(...I.c)-Math.min(...I.c))/255}),O.get(K).chroma>=Q&&X++}const k=z>0&&X/z<st;let C=null;for(const T of O.values())!k&&T.chroma<Q||(!C||T.n>C.n)&&(C=T);C&&(ut=uo(C.c)[0])}else o.size&&(ut=uo(zl)[0]);if(ut>=0){const O=s.hairColor*360-ut;if(Math.abs(O)>.5)for(const X of[...a,...o]){const z=n.get(X);z&&(z.c=Ev(z.c,O))}}return{voxels:[...n.values()],anchor:ut}}function Uv(s){return Dv(s).voxels}const Nv=[{n:[1,0,0],t1:[0,1,0],t2:[0,0,1]},{n:[-1,0,0],t1:[0,0,1],t2:[0,1,0]},{n:[0,1,0],t1:[0,0,1],t2:[1,0,0]},{n:[0,-1,0],t1:[1,0,0],t2:[0,0,1]},{n:[0,0,1],t1:[1,0,0],t2:[0,1,0]},{n:[0,0,-1],t1:[0,1,0],t2:[1,0,0]}],ha=.42,Fr=new kt,Fh=(s,t,e)=>(Fr.setRGB(s/255,t/255,e/255,Le),[Fr.r,Fr.g,Fr.b]);function Fv(s,t){const e=new Map;for(const y of s)e.set(`${y.x},${y.y},${y.z}`,y);const n=(y,R,L)=>e.get(`${y},${R},${L}`),i=(y,R)=>y[0]===R[0]&&y[1]===R[1]&&y[2]===R[2],r=(y,R)=>i(y.c,R.c)||!!y.blend&&(!!R.blend||i(y.blend,R.c))||!!R.blend&&i(R.blend,y.c);let o=1/0,a=1/0,c=1/0,l=-1/0,h=-1/0,u=-1/0;for(const y of s)y.x<o&&(o=y.x),y.y<a&&(a=y.y),y.z<c&&(c=y.z),y.x>l&&(l=y.x),y.y>h&&(h=y.y),y.z>u&&(u=y.z);const f=t?t[0]:(o+l)/2,d=t?t[1]:(a+h)/2,p=t?t[2]:(c+u)/2,x=[],g=[],m=[],S=[],E=[],v=new Set;for(const y of s){const R=y.x-f,L=y.y-d,U=y.z-p,V=Fh(y.c[0],y.c[1],y.c[2]),H=Fh(y.c[0]*ha,y.c[1]*ha,y.c[2]*ha);for(const{n:G,t1:J,t2:W}of Nv){if(n(y.x+G[0],y.y+G[1],y.z+G[2]))continue;const tt=(O,X)=>[R+G[0]/2+J[0]*O+W[0]*X,L+G[1]/2+J[1]*O+W[1]*X,U+G[2]/2+J[2]*O+W[2]*X],B=tt(-.5,-.5),Q=tt(.5,-.5),st=tt(.5,.5),ut=tt(-.5,.5);for(const O of[B,Q,st,B,st,ut])x.push(O[0],O[1],O[2]),g.push(G[0],G[1],G[2]),m.push(V[0],V[1],V[2]);for(const[O,X,z]of[[J,W,1],[J,W,-1],[W,J,1],[W,J,-1]]){const k=n(y.x+O[0]*z,y.y+O[1]*z,y.z+O[2]*z);if(k&&r(k,y)&&!n(y.x+O[0]*z+G[0],y.y+O[1]*z+G[1],y.z+O[2]*z+G[2]))continue;const C=wt=>[R+G[0]/2+O[0]*z/2+X[0]*wt/2,L+G[1]/2+O[1]*z/2+X[1]*wt/2,U+G[2]/2+O[2]*z/2+X[2]*wt/2],T=C(1),I=C(-1),K=T.map(wt=>wt.toFixed(2)).join(),j=I.map(wt=>wt.toFixed(2)).join(),ft=K<j?`${K}|${j}`:`${j}|${K}`;if(v.has(ft))continue;v.add(ft);const pt=.006;S.push(T[0]+G[0]*pt,T[1]+G[1]*pt,T[2]+G[2]*pt,I[0]+G[0]*pt,I[1]+G[1]*pt,I[2]+G[2]*pt),E.push(H[0],H[1],H[2],H[0],H[1],H[2])}}}const M=new De;M.setAttribute("position",new se(x,3)),M.setAttribute("normal",new se(g,3)),M.setAttribute("color",new se(m,3));const w=new De;w.setAttribute("position",new se(S,3)),w.setAttribute("color",new se(E,3));const P=[(l-o)/2+.5,(h-a)/2+.5,(u-c)/2+.5],_=Math.max(P[0],P[1],P[2])*1.15;return{faces:M,edges:w,radius:_}}const ju=["raise0","raise1","inner0","inner1","arch0","arch1","lid0","lid1","tilt0","tilt1","low0","low1","pupil","smile","open","skew","round","roll","nod"],jt=(s,t)=>({[s+"0"]:t,[s+"1"]:t}),zv={calm:{...jt("lid",.1),smile:.08},pleased:{...jt("lid",.2),...jt("low",.3),...jt("raise",.1),smile:.65},happy:{...jt("raise",.35),...jt("arch",.25),...jt("low",.42),smile:.9,open:.16},joy:{...jt("raise",.85),...jt("arch",.4),...jt("low",.55),smile:1,open:.6,roll:.06},surprised:{...jt("raise",1.5),...jt("arch",.45),...jt("lid",-.14),pupil:.7,open:.8,round:1},curious:{raise0:.2,raise1:1.05,arch0:.2,arch1:.75,lid0:.16,lid1:-.04,roll:.17,round:.4,open:.12,smile:.1},doubt:{raise0:-.55,raise1:1,inner0:-.38,lid0:.42,tilt0:.3,lid1:.04,skew:.65,smile:-.08,roll:-.07},thinking:{raise0:.55,inner1:.35,raise1:-.1,...jt("lid",.2),skew:.42},sad:{...jt("inner",.95),...jt("raise",-.1),...jt("lid",.36),...jt("tilt",-.5),smile:-.75,nod:.08},bored:{...jt("lid",.5),...jt("raise",-.28),smile:-.15,skew:.25,nod:.05},sleepy:{...jt("lid",.72),...jt("tilt",-.25),...jt("raise",-.2),...jt("inner",.2),smile:-.05,nod:.18},yawn:{...jt("lid",1),...jt("raise",.75),...jt("inner",.3),open:1,round:.55,nod:-.14},asleep:{...jt("lid",1.05),...jt("raise",-.12),...jt("inner",.12),smile:.05,open:.06},excited:{...jt("raise",.9),...jt("inner",-.1),...jt("lid",-.06),smile:.95,open:.38,pupil:1.12},asking:{...jt("raise",.85),...jt("arch",.3),...jt("lid",.04),roll:.12,smile:.25}},Ov={surprised:24,excited:14,joy:12,doubt:10,curious:9,sad:4,sleepy:3,bored:4,yawn:5,asleep:2.5},zh=()=>Object.fromEntries(ju.map(s=>[s,s==="pupil"?1:0])),kv=s=>new kt().setRGB(s[0]/255,s[1]/255,s[2]/255,Le);class Bv{constructor(t){D(this,"head",new Pe);D(this,"solid",[]);D(this,"drop");D(this,"roll",0);D(this,"nod",0);D(this,"own",[]);D(this,"brows",[]);D(this,"eyes",[]);D(this,"mouth",[]);D(this,"seam",0);D(this,"lipH",.5);D(this,"browLo",0);D(this,"browHi",0);D(this,"d",zh());D(this,"mood","calm");D(this,"feeling",null);D(this,"feelFor",0);D(this,"blinkIn",1.5);D(this,"blinkT",-1);D(this,"blinkLen",.13);D(this,"glance",new Bt);D(this,"glanceIn",1);D(this,"micro",new Bt);D(this,"microIn",.5);D(this,"talkT",0);D(this,"syl",0);D(this,"sylLen",.16);D(this,"sylAmp",0);D(this,"sylRound",0);D(this,"pause",0);D(this,"beat",0);D(this,"wasTalking",!1);D(this,"lookX",0);D(this,"lookY",0);const e=Uv(t);let n=1/0,i=1/0,r=1/0,o=-1/0,a=-1/0,c=-1/0;for(const B of e)n=Math.min(n,B.x),o=Math.max(o,B.x),i=Math.min(i,B.y),a=Math.max(a,B.y),r=Math.min(r,B.z),c=Math.max(c,B.z);const l=(n+o)/2,h=(i+a)/2,u=(r+c)/2;this.drop=(h-(qt-1)/2)/16;const f=Ol(t),d=8,p=B=>B<d?0:1,x=[!1,!1];for(const B of e)B.part==="eye"&&(x[p(B.x)]=!0);const g=[236,240,246],m=e.map(B=>B.part==="brow"||B.part==="mouth"?{...B,c:f,part:void 0}:B.part==="pupil"&&x[p(B.x)]?{...B,c:g}:B),{faces:S,edges:E}=Fv(m,[l,h,u]),v=new so({vertexColors:!0,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1}),M=new mu({vertexColors:!0});this.own.push(S,E,v,M);const w=new Ce(S,v);this.head.add(w,new Bd(E,M)),this.solid.push(w);const P=new xn(1,1,1);this.own.push(P);const _=new Map,y=B=>{const Q=B.join();let st=_.get(Q);return st||(st=new so({color:kv(B)}),_.set(Q,st),this.own.push(st)),st},R=B=>{const Q=new Ce(P,y(B));return this.head.add(Q),this.solid.push(Q),Q},L=B=>B.z-u+.5,U=e.filter(B=>B.part==="brow");for(const B of[0,1]){const Q=U.filter(k=>p(k.x)===B);if(!Q.length)continue;const st=Q.map(k=>k.x),ut=Math.min(...st),O=Math.max(...st),X=(ut+O)/2,z=Math.max(.5,(O-ut)/2);for(const k of Q){const C=B===0?(X-k.x)/z:(k.x-X)/z;this.brows.push({m:R(k.c),x:k.x-l,y:k.y-h,z:L(k),xn:C,side:B})}}const V=e.filter(B=>B.part==="eye"||B.part==="pupil"),H=f.map(B=>Math.round(B*.88));let G=-1/0;for(const B of[0,1]){const Q=V.filter(Ot=>p(Ot.x)===B);if(!Q.length)continue;const st=Q.map(Ot=>Ot.x),ut=Q.map(Ot=>Ot.y),O=Math.min(...st),X=Math.max(...st),z=Math.min(...ut),k=Math.max(...ut);G=Math.max(G,k);const C=Math.max(...Q.map(L)),T=(O+X)/2-l,I=(z+k)/2-h,K=X-O+1,j=k-z+1;let ft=null;const pt=Math.max(1,K-2),wt=Math.max(1,j-2);if(x[B]){const Ot=Q.find(Wt=>Wt.part==="pupil").c;ft=R(Ot),ft.scale.set(pt,wt,.05)}const zt=[];for(let Ot=O;Ot<=X;Ot++){const Wt=K>1?B===0?(Ot-O)/(K-1):(X-Ot)/(K-1):.5;zt.push({x:Ot-l,k:Wt,up:R(H),low:R(H)})}this.eyes.push({side:B,y0:z-h-.5,y1:k-h+.5,z:C,cx:T,cy:I,pupil:ft,pw:pt,ph:wt,reach:(K-pt)/2,cols:zt})}const J=e.filter(B=>B.part==="mouth");if(J.length){const B=[...new Set(J.map(C=>C.x))].sort((C,T)=>C-T),Q=J.map(C=>C.y),st=Math.min(...Q),ut=Math.max(...Q),O=ut-st+1;this.seam=O>=2?(st+ut)/2-h:st-h,this.lipH=O>=2?1:.5;const X=(B[0]+B[B.length-1])/2,z=Math.max(.5,(B[B.length-1]-B[0])/2),k=J[0].c;for(const C of B){const T=Math.max(...J.filter(I=>I.x===C).map(L));this.mouth.push({x:C-l,z:T,xn:(C-X)/z,top:R(k),bot:R(k),inside:R([46,22,28])})}}const W=this.brows.map(B=>B.y),tt=Math.max(...e.filter(B=>B.c[0]===f[0]&&B.c[1]===f[1]&&B.c[2]===f[2]).map(B=>B.y));this.browLo=G===-1/0?-2:G-h+.85-(W.length?Math.min(...W):0),this.browHi=tt-h-.8-(W.length?Math.max(...W):0),this.apply()}setMood(t){this.mood=t}feel(t,e=2.4){this.feeling=t,this.feelFor=e}blink(t=!1){this.blinkT<0&&(this.blinkT=0,this.blinkLen=t?.38:.13)}get current(){return this.feeling??this.mood}update(t,e,n,i=null){this.feeling&&(this.feelFor-=t,this.feelFor<=0&&(this.feeling=null));const r=this.current,o={...zh(),...zv[r]};if(i!==null&&(o.open=.05+.2*Math.max(0,Math.sin(Math.PI*2*(i-.5))),o.round=.6),n!==null){if(this.talkT+=t,this.syl-=t,this.pause>0&&(this.pause-=t),this.syl<=0){this.sylLen=.13+Math.random()*.08,this.syl=this.sylLen;const d=n.toLowerCase();".!?".includes(d)?(this.pause=.22,this.sylAmp=0):",;:".includes(d)?(this.pause=.1,this.sylAmp=.1):d===" "?this.sylAmp=.15:"aeiouy".includes(d)?this.sylAmp=.6+Math.random()*.35:this.sylAmp=.28+Math.random()*.2,this.sylRound="ou".includes(d)?.8:0,Math.random()<.16&&(this.beat=1),Math.random()<.05&&this.blink()}const u=1-this.syl/this.sylLen,f=this.pause>0?0:this.sylAmp*Math.pow(Math.sin(Math.PI*u),.65);o.open=Math.max(o.open*.6,f),o.round=Math.max(o.round,this.sylRound*f),o.lid0-=.05,o.lid1-=.05,this.wasTalking=!0}else this.wasTalking&&(this.wasTalking=!1,this.blink());this.beat=Math.max(0,this.beat-t*4),o.raise0+=.42*this.beat,o.raise1+=.42*this.beat,o.nod+=.05*this.beat;const a=Ov[r]??8;for(const u of ju){const f=u==="open"||u==="round"?30:u.startsWith("raise")?Math.max(a,12):a;this.d[u]+=(o[u]-this.d[u])*Math.min(1,t*f)}this.blinkIn-=r==="asleep"?0:t,this.blinkIn<=0&&(this.blink(r==="sleepy"),this.blinkIn=(r==="sleepy"?3:1.8)+Math.random()*3.6,Math.random()<.18&&(this.blinkIn=.28));let c=0;if(this.blinkT>=0){this.blinkT+=t;const u=this.blinkT/this.blinkLen;c=u<.4?u/.4:u<.55?1:1-(u-.55)/.45,u>=1&&(this.blinkT=-1)}this.glanceIn-=t,this.glanceIn<=0&&(this.glance.set((Math.random()-.5)*1.2,(Math.random()-.5)*.7),this.glanceIn=1.4+Math.random()*2.4),this.microIn-=t,this.microIn<=0&&(this.micro.set((Math.random()-.5)*.24,(Math.random()-.5)*.16),this.microIn=.35+Math.random()*.9);let l=this.glance.x,h=this.glance.y;if(e){const u=Math.max(.4,Math.abs(e.z));l=e.x/u*1.6,h=e.y/u*1.6}r==="thinking"&&(l=.7,h=.6),this.lookX+=(Xn.clamp(l+this.micro.x,-1,1)-this.lookX)*Math.min(1,t*16),this.lookY+=(Xn.clamp(h+this.micro.y,-1,1)-this.lookY)*Math.min(1,t*16),this.roll=this.d.roll,this.nod=this.d.nod,this.apply(c)}apply(t=0){const e=this.d,n=r=>e[r],i=.1;for(const r of this.brows){const o=r.side;let a=n("raise"+o)+n("inner"+o)*-r.xn*.65+n("arch"+o)*(1-r.xn*r.xn)*.9;a=Xn.clamp(a,this.browLo,this.browHi),r.m.position.set(r.x,r.y+a,r.z+.14+i/2),r.m.scale.set(1.001,1,i)}for(const r of this.eyes){const o=r.side,a=r.y1-r.y0;for(const c of r.cols){const l=Xn.clamp(Math.max(t*1.05,n("lid"+o)+n("tilt"+o)*(c.k-.5)*1.2),0,1.05)*a,h=.75+.5*(1-Math.abs(2*c.k-1)),u=t>.5?0:Xn.clamp(n("low"+o)*h,0,1)*a*.6;this.lid(c.up,c.x,r.y1+.08,-(l+(l>.01?.08:0)),r.z),this.lid(c.low,c.x,r.y0-.08,u+(u>.01?.08:0),r.z)}if(r.pupil){const c=Xn.clamp(e.pupil,.6,1.25);r.pupil.scale.set(r.pw*c,r.ph*c,.05),r.pupil.position.set(r.cx+this.lookX*r.reach*.95,r.cy+this.lookY*r.reach*.7,r.z+.02)}}for(const r of this.mouth){const o=r.xn,a=e.smile*(1.25*o*o-.25)+e.skew*o*.7,c=Xn.clamp(e.round,0,1),l=Math.max(0,e.open)*(1-.55*o*o)*(1-c*.75*o*o)*2.4,h=1-c*.35*Math.max(0,Math.abs(o)-.5)*2,u=this.seam+a;r.top.position.set(r.x,u+this.lipH/2,r.z+.01+i/2),r.top.scale.set(h,this.lipH,i),r.bot.position.set(r.x,u-l-this.lipH/2,r.z+.01+i/2),r.bot.scale.set(h,this.lipH,i),r.inside.visible=l>.02,r.inside.position.set(r.x,u-l/2,r.z+.005+i/4),r.inside.scale.set(h*.98,Math.max(.001,l),i/2)}}lid(t,e,n,i,r){const o=Math.abs(i);t.visible=o>.01,t.visible&&(t.position.set(e,n+i/2,r+.07+.03),t.scale.set(1.001,o,.06))}dispose(){for(const t of this.own)t.dispose()}}function Hv(s,t=!1){const e=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,c=new De;let l=0;for(let h=0;h<s.length;++h){const u=s[h];let f=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in u.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in u.morphAttributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(u.morphAttributes[d])}if(t){let d;if(e)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,d,h),l+=d}}if(e){let h=0;const u=[];for(let f=0;f<s.length;++f){const d=s[f].index;for(let p=0;p<d.count;++p)u.push(d.getX(p)+h);h+=s[f].attributes.position.count}c.setIndex(u)}for(const h in r){const u=Oh(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(const h in o){const u=o[h][0].length;if(u!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let f=0;f<u;++f){const d=[];for(let x=0;x<o[h].length;++x)d.push(o[h][x][f]);const p=Oh(d);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(p)}}}return c}function Oh(s){let t,e,n,i=-1,r=0;for(let l=0;l<s.length;++l){const h=s[l];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}const o=new t(r),a=new gn(o,e,n);let c=0;for(let l=0;l<s.length;++l){const h=s[l];if(h.isInterleavedBufferAttribute){const u=c/e;for(let f=0,d=h.count;f<d;f++)for(let p=0;p<e;p++){const x=h.getComponent(f,p);a.setComponent(f+u,p,x)}}else o.set(h.array,c);c+=h.count*e}return i!==void 0&&(a.gpuType=i),a}const ye=22,tf=.6,ln=Math.PI*2,we=(s,t,e)=>s<t?t:s>e?e:s,In=s=>s<0?0:s>1?1:s,Nt=(s,t,e)=>s+(t-s)*e,te=s=>{const t=In(s);return t*t*(3-2*t)},Gv=s=>{const t=In(s);return t*t*t*(t*(t*6-15)+10)},zs=s=>s-Math.floor(s),dn=s=>Math.atan2(Math.sin(s),Math.cos(s)),ef=(s,t)=>.05+.4*Math.max(0,1-s/(.55*t)),Jn=-.06,Qe=.11,Ze=.19;class Vv{constructor(t){D(this,"xs",[]);D(this,"zs",[]);D(this,"cum",[]);D(this,"total",0);const e=[];for(const i of t)(!e.length||Math.hypot(i.x-e[e.length-1].x,i.z-e[e.length-1].z)>1e-4)&&e.push(i);const n=(i,r)=>{const o=this.xs.length;if(o){const a=Math.hypot(i-this.xs[o-1],r-this.zs[o-1]);if(a<1e-5)return;this.total+=a}this.xs.push(i),this.zs.push(r),this.cum.push(this.total)};n(e[0].x,e[0].z);for(let i=1;i<e.length-1;i++){const r=e[i-1],o=e[i],a=e[i+1],c=Math.hypot(o.x-r.x,o.z-r.z),l=Math.hypot(a.x-o.x,a.z-o.z),h=(o.x-r.x)/c,u=(o.z-r.z)/c,f=(a.x-o.x)/l,d=(a.z-o.z)/l;if(h*f+u*d>.999){n(o.x,o.z);continue}const p=Math.min(.42,c*.5,l*.5),x=o.x-h*p,g=o.z-u*p,m=o.x+f*p,S=o.z+d*p;for(let E=0;E<=8;E++){const v=E/8,M=1-v;n(M*M*x+2*M*v*o.x+v*v*m,M*M*g+2*M*v*o.z+v*v*S)}}e.length>1&&n(e[e.length-1].x,e[e.length-1].z)}seg(t){const e=this.cum;if(t<=0||e.length<2)return 0;if(t>=this.total)return e.length-2;let n=0,i=e.length-1;for(;i-n>1;){const r=n+i>>1;e[r]<=t?n=r:i=r}return n}at(t,e){if(this.xs.length<2)return e.x=this.xs[0],e.z=this.zs[0],e;const n=this.seg(t),i=this.cum[n+1]-this.cum[n],r=i>0?In((t-this.cum[n])/i):0;return e.x=Nt(this.xs[n],this.xs[n+1],r),e.z=Nt(this.zs[n],this.zs[n+1],r),e}yawAt(t){if(this.xs.length<2)return 0;const e=this.seg(we(t,0,this.total-1e-4));return Math.atan2(this.xs[e+1]-this.xs[e],this.zs[e+1]-this.zs[e])}}const zr=.05,Or=.12;class Wv{constructor(t,e){D(this,"L");D(this,"thigh");D(this,"shin");D(this,"footH",.06);D(this,"hipX",.17);D(this,"armLen");D(this,"legless");D(this,"pos",new F);D(this,"yaw",0);D(this,"lean",0);D(this,"roll",0);D(this,"squash",0);D(this,"stretch",0);D(this,"feet");D(this,"arms");D(this,"onPuff",null);D(this,"onPrint",null);D(this,"airborne",!1);D(this,"rest","stand");D(this,"breath",0);D(this,"asleep",!1);D(this,"headDrop",0);D(this,"hipDrop",0);D(this,"scratch",null);D(this,"scratchIn",5);D(this,"world");D(this,"base",new F);D(this,"vy",0);D(this,"qv",0);D(this,"qRest",0);D(this,"leanV",0);D(this,"leanRest",0);D(this,"sv",0);D(this,"stretchRest",0);D(this,"speed",0);D(this,"lastSpeed",0);D(this,"wantYaw",null);D(this,"trip",null);D(this,"pending",null);D(this,"act",null);D(this,"phase",0);D(this,"running",0);D(this,"clockOn",!1);D(this,"gRef",0);D(this,"held",!1);D(this,"wallSide",0);D(this,"sway",0);D(this,"swayV",0);D(this,"shift",0);D(this,"shiftIn",3);D(this,"clock",0);D(this,"tapT",-1);D(this,"seq",null);D(this,"queued",[]);D(this,"restYaw",null);D(this,"anchor",{x:0,z:0,g:0,yaw:0});D(this,"t1",new F);D(this,"t2",new F);D(this,"t3",new F);D(this,"e1",new vn);this.world=e,this.L=Math.max(0,t-1),this.legless=this.L<.3;const n=Math.max(.3,this.L)-this.footH;this.thigh=n/2,this.shin=n/2,this.armLen=this.legless?.34:Math.min(3,Math.max(.6,this.L))*.85;const i=o=>({side:o,mode:"ground",sole:new F,yaw:0,pitch:0,from:new F,to:new F,fromYaw:0,toYaw:0,s:0,dur:.3,clocked:!1,apex:0,rel:new F,kneeOut:0,sy:0,ankle:new F,q:new ve,toe:0});this.feet=[i(-1),i(1)];const r=o=>({side:o,pitch:0,out:.08,elbow:.2,vp:0,vo:0,ve:0,tp:0,to:.08,te:.2,reach:null,reachW:0,flat:!1});this.arms=[r(-1),r(1)]}get legW(){return Math.max(.5,this.L)}gaitSpeed(t){const e=this.legW;return this.legless?t==="bound"?4.5:t==="run"?3.2:1.6:t==="walk"?Math.sqrt(.09*ye*e):t==="run"?Math.sqrt(.45*ye*e):Math.min(9,Math.sqrt(1.15*ye*e))}get boundFreq(){return Math.max(.85,1/(2*.43*Math.sqrt(this.legW/2)))}strideAt(t){const e=this.legW,n=Math.max(.02,t*t/(ye*e)),i=we(2*n**.3*e,.35*e,2.6*e),r=Math.max(i,t/this.boundFreq);return Nt(i,r,this.running)}get duty(){return Nt(.6,.2,this.running)}standY(t){return this.legless?t+.5:t+this.footH+(this.thigh+this.shin)*.975+.5}stepUpMax(){return .42*this.L+.02}stepDownMax(){return .7*this.L+.02}jumpUpMax(){return .82*this.L}place(t,e,n){this.trip=null,this.act=null,this.pending=null,this.seq=null,this.queued=[],this.rest="stand",this.asleep=!1,this.clockOn=!1,this.speed=0,this.yaw=n,this.wantYaw=null,this.base.set(t,0,e),this.pos.set(t,this.standY(this.world.groundAt(t,e)),e),this.gRef=this.world.groundAt(t,e),this.vy=0,this.lean=0,this.roll=0;for(const i of this.feet)this.neutral(i,this.base,n,i.sole),i.mode="ground",i.yaw=n,i.pitch=0;this.resolveFeet()}busy(){return!!this.trip||!!this.act||!!this.pending||!!this.seq||this.rest!=="stand"}travel(t,e,n){if(this.act&&this.act.kind==="leap"||this.rest!=="stand"||this.seq){this.trip=null,this.pending={cells:t,gait:e,onArrive:n},(this.rest!=="stand"||this.seq)&&this.setRest("stand");return}if(this.act=null,this.feetDown(),!t.length){this.trip=null,n==null||n();return}const i={x:this.base.x,z:this.base.z},r=this.legless?[{kind:"path",pts:[i,...t]}]:this.split(i,t);this.trip={gait:e,legs:r,path:null,s:0,ground:null,settle:0,onArrive:n},this.nextLeg()}stop(){this.trip=null,this.pending=null}turnTo(t){this.wantYaw=t}perform(t,e){if(this.act||this.rest!=="stand"||this.seq)return!1;const n={wave:1.3,cheer:1,spin:1.15,jump:1,sigh:1.4,tap:1.6}[t];return this.act={kind:t,t:0,dur:n,then:e,yaw0:this.yaw},(t==="jump"||t==="cheer")&&(this.act.jump=this.makeJump(!1,this.pos.clone(),t==="jump"?.5+.12*this.L:.28+.06*this.L,this.yaw)),t==="tap"&&(this.tapT=0),!0}setRest(t,e){if(this.legless&&t!=="stand")return!1;const n=this.queued.length?this.queued[this.queued.length-1]:this.seq?this.seq.to:this.rest;if(n===t)return!0;if(n==="stand"&&t!=="stand"){const r=this.restWay(this.base.x,this.base.z,e??this.yaw);if(!r)return!1;t==="lie"&&!r.lie&&(t="kneel"),this.restYaw=r.yaw}else if(t==="lie"&&!this.roomToRest(this.seq||this.rest!=="stand"?this.anchor.yaw:this.restYaw??this.yaw,!0))return!1;const i=[];return t==="lie"&&n==="stand"?i.push("kneel","lie"):t==="kneel"&&n==="lie"?i.push("stand","kneel"):i.push(t),this.queued.push(...i),t!=="stand"&&(this.trip=null,this.act=null),!0}restWay(t,e,n){const i=[0,.4,-.4,.8,-.8,1.2,-1.2,1.6,-1.6,2.1,-2.1,Math.PI].map(a=>n+a),r=i.find(a=>this.roomToRest(a,!0,t,e));if(r!==void 0)return{yaw:r,lie:!0};const o=i.find(a=>this.roomToRest(a,!1,t,e));return o===void 0?null:{yaw:o,lie:!1}}roomAt(t,e,n){return this.legless?null:this.restWay(t,e,n)}roomToRest(t,e,n=this.base.x,i=this.base.z){const r=this.world.groundAt(n,i),o=this.thigh+this.shin,a=Math.cos(t),c=Math.sin(t),l=(u,f)=>Math.abs(this.world.groundAt(n+a*u+c*f,i-c*u+a*f)-r)<.25,h=this.thigh+.4;for(let u=.3;u<h;u+=.3)if(!l(-.45,u)||!l(.45,u))return!1;if(!l(-.45,h)||!l(.45,h)||!l(0,-.45))return!1;if(!e)return!0;for(let u=.3;u<=o*.95+.35;u+=.3)if(!l(-.3,u)||!l(.3,u))return!1;if(!l(-.7,-.5)||!l(.7,-.5)||!l(0,-.6))return!1;for(let u=.1;u<=1.05;u+=.16)for(let f=.5;f<=o*.92+.35;f+=.3)if(!l(.25+Math.sin(u)*f,Math.cos(u)*f))return!1;for(const[u,f]of[[-.8,-.5],[-.8,0],[-.8,.5],[-.6,1.1],[-.3,.9]])if(!l(u,f))return!1;return!0}get lyingStill(){return this.rest==="lie"&&!this.seq}get idle(){return!this.trip&&!this.act&&!this.pending&&!this.seq&&this.rest==="stand"}split(t,e){const n=[];let i=[t],r={x:Math.round(t.x),z:Math.round(t.z)},o=this.world.groundAt(r.x,r.z);for(const a of e){const c=this.world.groundAt(a.x,a.z),l=c-o,h=l>this.stepUpMax()?l>this.jumpUpMax()?"climb":"jump":-l>this.stepDownMax()?"drop":null;if(h){const u={x:Math.sign(a.x-r.x),z:Math.sign(a.z-r.z)},f=h==="climb"?l>this.L?0:.12:h==="jump"?.14:.12;i.push({x:r.x+u.x*f,z:r.z+u.z*f}),n.push({kind:"path",pts:i}),n.push({kind:"edge",type:h,a:r,b:a,ha:o,hb:c}),i=[{x:a.x,z:a.z}]}else i.push(a);r=a,o=c}return i.length>1&&n.push({kind:"path",pts:i}),n}nextLeg(){var n;const t=this.trip,e=t.legs.shift();if(t.settle=0,!e){this.trip=null,(n=t.onArrive)==null||n.call(t);return}if(e.kind==="path"){const i=new Vv(e.pts);if(t.path=i,t.s=0,this.legless){t.ground=[];for(let r=0;r<=i.total+zr;r+=zr)i.at(r,this.t1),t.ground.push(this.world.groundAt(this.t1.x,this.t1.z))}else this.clockOn||this.startClock(i.yawAt(.05))}else{t.path=null,this.clockOn=!1;const i={x:Math.sign(e.b.x-e.a.x),z:Math.sign(e.b.z-e.a.z)},r=new F(e.b.x-i.x*.05,this.standY(e.hb),e.b.z-i.z*.05),o=e.type==="climb",a=o?.3+.05*this.L:e.hb>e.ha?.22+.04*this.L:.06+.03*this.L;if(this.act={kind:"leap",t:0,dur:9,yaw0:this.yaw},this.act.jump=this.makeJump(e.type==="drop",r,a,Math.atan2(i.x,i.z)),o){const c={x:(e.a.x+e.b.x)/2,z:(e.a.z+e.b.z)/2},l={x:i.z,z:-i.x};this.act.jump.grip=[-1,1].map(h=>new F(c.x+l.x*h*.3+i.x*.14,e.hb+.01,c.z+l.z*h*.3+i.z*.14))}}}startClock(t){const e=Math.sin(t),n=Math.cos(t),i=o=>(o.sole.x-this.base.x)*e+(o.sole.z-this.base.z)*n;for(const o of this.feet)o.mode==="swing"&&!o.clocked&&(o.mode="ground",o.sole.copy(o.to),o.yaw=o.toYaw);const r=i(this.feet[0])<=i(this.feet[1])?0:1;this.phase=r*.5+this.duty+.001,this.clockOn=!0}update(t){const e=Math.min(t,.05),n=Math.max(1,Math.ceil(e/(1/120)));for(let i=0;i<n;i++)this.step(e/n)}step(t){this.clock+=t,this.airborne=!1;for(const n of this.arms)n.reach=null,n.flat=!1;const e=this.trip;!this.seq&&this.queued.length&&!this.act&&!e&&this.readyToRest()&&this.beginRest(),this.seq||this.rest!=="stand"?this.stepRest(t):this.asleep?this.breath=zs(this.breath+t/3.6):this.act?this.stepAct(t):e&&e.path?this.legless?this.stepHopper(t,e):this.stepWalk(t,e):this.stepStand(t),this.stepSprings(t),this.resolveFeet(t)}stepWalk(t,e){const n=e.path,i=this.gaitSpeed(e.gait),r=e.gait==="bound",o=r?6.5:e.gait==="run"?7:5,a=r?5:e.gait==="run"?7:6,c=n.total-e.s;let l=Math.min(i,Math.sqrt(2*a*Math.max(0,c-.01))),h=1/0;this.held=!1;for(const M of this.feet)M.mode==="ground"&&(h=Math.min(h,M.sole.y));if(h<1/0){const M=Math.sin(this.yaw),w=Math.cos(this.yaw),P=this.world.groundAt(this.base.x,this.base.z);for(let _=0;_<=.8;_+=.05){const y=this.world.groundAt(this.base.x+M*_,this.base.z+w*_);if(y>Math.max(h,P)+.2){y<=h+this.stepUpMax()+.05&&(l=Math.min(l,Math.sqrt(2*a*2*Math.max(0,_-.18))),this.held=_<.45);break}}}const u=Math.abs(dn(n.yawAt(Math.min(n.total,e.s+.25))-this.yaw));l*=In((1.6-u)/1.1),this.speed+=we(l-this.speed,-a*2*t,o*t),c<=.01&&(this.speed=0);const f=this.gaitSpeed("walk"),d=this.gaitSpeed("bound"),p=In((this.speed-f*1.05)/(d*.85-f*1.05));this.running+=(p-this.running)*Math.min(1,t*6),e.s=Math.min(n.total,e.s+this.speed*t),n.at(e.s,this.base);const x=n.yawAt(Math.min(n.total,e.s+.25+.3*this.running)),g=Nt(4.5,8,this.running)*t;this.yaw+=we(dn(x-this.yaw),-g,g);const m=f/this.strideAt(f),S=Math.max(m*Nt(.75,1.5,te((u-.3)/.6)),this.speed/this.strideAt(Math.max(this.speed,.15))),E=this.duty,v=this.running>.45;if(this.clockOn){this.phase+=S*t;for(let M=0;M<2;M++){const w=this.feet[M],P=zs(this.phase-M*.5);P<E?w.mode==="swing"&&w.clocked&&this.touchDown(w,v?1:.55):(w.mode!=="swing"&&(this.liftOff(w,!0,0),this.feet.every(_=>_.mode!=="ground")&&(this.qv+=1.6*this.running)),w.s=(P-E)/(1-E),w.s<.7&&this.aimSwing(w,e,(1-P)/S,E/2/S)),this.footPitch(w,P,E,v)}}if(this.airborne=this.clockOn&&this.feet.every(M=>M.mode==="swing"),this.stretchRest=this.airborne?.09*this.running:0,c<=.01){if(this.clockOn){for(const w of this.feet)w.mode!=="swing"||!w.clocked||(w.clocked=!1,w.dur=Math.max(.08,(1-w.s)*((1-E)/S)),w.s=0,w.from.set(w.ankle.x,w.ankle.y-this.footH,w.ankle.z),w.fromYaw=w.yaw,w.apex=Math.max(w.from.y,w.to.y)+.02);this.clockOn=!1}this.stepStand(t,!0),e.settle+=t,(this.feet.every(w=>w.mode==="ground")&&e.settle>.12||e.settle>.9)&&this.nextLeg();return}this.bodyOver(t,v?"run":"walk",S,E)}liftOff(t,e,n){t.from.copy(t.sole),t.fromYaw=t.yaw,t.to.copy(t.sole),t.toYaw=t.yaw,t.mode="swing",t.clocked=e,t.s=0,t.dur=n,t.apex=t.sole.y+.1,t.sy=t.sole.y}touchDown(t,e){var n;t.mode="ground",t.sole.copy(t.to),t.yaw=t.toYaw,(n=this.onPrint)==null||n.call(this,t.sole,t.yaw),this.qv-=(.9+2.1*this.running)*e,this.vy-=(.3+.8*this.running)*e*Math.sqrt(this.legW/2)}aimSwing(t,e,n,i){const r=e.path,o=this.held?Math.max(this.speed,this.gaitSpeed("walk")*.8):this.speed,a=Math.min(r.total,e.s+Math.max(o*(n+i),this.held?.55:0)),c=r.at(a,this.t1),l=r.yawAt(a>=r.total-.01?r.total:a),h=Math.abs(dn(l-this.yaw))>1.2?this.yaw:l;this.neutral(t,c,h,t.to),t.toYaw=h,this.safeFoot(t.to,h),this.planApex(t,Nt(.06+.1*this.legW,.12+.2*this.legW,this.running))}neutral(t,e,n,i){const r=(this.hipX+.015)*t.side;return i.x=e.x+Math.cos(n)*r,i.z=e.z-Math.sin(n)*r,i.y=this.world.groundAt(i.x,i.z),i}safeFoot(t,e){const n=Math.sin(e),i=Math.cos(e),r=we(.3+.08*this.legW,.35,.55);for(let o=0;o<10;o++){const a=this.world.groundAt(t.x,t.z),c=this.world.groundAt(t.x+n*(Ze+.01),t.z+i*(Ze+.01)),l=this.world.groundAt(t.x+n*r,t.z+i*r),h=this.world.groundAt(t.x+n*(Jn-.02),t.z+i*(Jn-.02));if(c>a+.05||l>a+.25)t.x-=n*.06,t.z-=i*.06;else if(h<a-.05)t.x+=n*.05,t.z+=i*.05;else break}t.y=this.world.groundAt(t.x,t.z)}planApex(t,e){const n=e*we(Math.hypot(t.to.x-t.from.x,t.to.z-t.from.z)/(.45*this.legW),.3,1);let i=Math.max(t.from.y,t.to.y);for(let r=1;r<6;r++){const o=r/6;i=Math.max(i,this.world.groundAt(Nt(t.from.x,t.to.x,o),Nt(t.from.z,t.to.z,o)))}t.apex=i+n}footPitch(t,e,n,i){if(t.mode==="ground"){const r=e/n;i?t.pitch=r<.5?0:-.85*te((r-.5)/.5):t.pitch=r<.12?.22*(1-te(r/.12)):r<.6?0:-.7*te((r-.6)/.4)}else if(t.mode==="swing"){const r=t.s;t.pitch=r<.3?Nt(-.7,-.8,r/.3):r<.82?Nt(-.8,0,te((r-.3)/.52)):(i?-.05:.22)*te((r-.82)/.18)}}bodyOver(t,e,n,i){let r=this.shift;if(e!=="stand"&&this.clockOn)r=-(Nt(.03,.01,this.running)*this.legW*Math.min(1,this.speed/Math.max(.5,this.gaitSpeed("walk"))))*Math.cos(ln*(this.phase-i/2));else{const p=this.feet.filter(x=>x.mode==="ground");p.length===1&&(r=p[0].side*this.hipX*.85)}r+=this.wallNudge();const o=e==="stand"?40:150;this.swayV+=(o*(r-this.sway)-2*Math.sqrt(o)*.9*this.swayV)*t,this.sway+=this.swayV*t,this.pos.x=this.base.x+Math.cos(this.yaw)*this.sway,this.pos.z=this.base.z-Math.sin(this.yaw)*this.sway;const a=this.world.groundAt(this.pos.x,this.pos.z);if(this.legless){this.pos.y+=(a+.5+.006*Math.sin(this.clock*1.7)-this.pos.y)*Math.min(1,t*12);return}const c=this.reachTop();let l=c.soft-.012*this.legW;if(e!=="stand"){let p=-1/0,x=!1;for(const g of this.feet)g.mode==="ground"&&(p=Math.max(p,g.sole.y));for(const g of this.feet)g.mode==="swing"&&g.to.y>p+.2&&(x=!0);p>-1/0&&!x&&(l=Math.min(l,p+this.footH+(this.thigh+this.shin)*.955+.5))}let h=l;if(this.gRef+=(this.world.groundAt(this.base.x,this.base.z)-this.gRef)*Math.min(1,t*12),e==="run"&&this.clockOn){const p=.5/n,x=i/n,g=Math.max(0,p-x),m=ye*g*x/ln,S=this.speed*x/2,E=(this.thigh+this.shin)*.985,v=this.gRef+this.footH+Math.sqrt(Math.max(.25*E*E,E*E-S*S))+.5,M=zs(this.phase*2),w=x/p;let P;if(M<w)P=v-m*Math.sin(Math.PI*(M/w));else{const _=(M-w)*p;P=v+ye*g/2*_-ye/2*_*_}h=Nt(l,P,te((this.running-.45)/.25))}e==="stand"&&(h-=.006*this.legW*(1+Math.sin(this.clock*1.7)));for(const p of this.feet){if(p.mode!=="ground")continue;const x=this.kneeAt(p,this.t2),g=Math.sin(p.yaw)*.06,m=Math.cos(p.yaw)*.06;(this.world.solidAt(x.x,x.y,x.z)||this.world.solidAt(x.x+g,x.y-.06,x.z+m))&&(h=Math.max(h,c.hard))}const u=e==="run"?ln*7:ln*4.2,f=e==="run"?.9:.72;this.vy+=(u*u*(h-this.pos.y)-2*f*u*this.vy)*t,this.pos.y+=this.vy*t,this.pos.y>c.hard&&(this.pos.y=c.hard,this.vy>0&&(this.vy=0));const d=a+this.footH+.45*this.legW+.5;this.pos.y<d&&(this.pos.y=d,this.vy<0&&(this.vy=0))}plantedAnkle(t,e){const n=Math.sin(t.yaw),i=Math.cos(t.yaw),r=t.pitch,o=r>0?Jn:r<0?Qe:0,a=-o,c=this.footH,l=Math.cos(r),h=Math.sin(r),u=o+a*l-c*h;return e.set(t.sole.x+n*u,t.sole.y+a*h+c*l,t.sole.z+i*u)}kneeAt(t,e){const n=Math.cos(this.yaw),i=Math.sin(this.yaw),r=this.pos.x+n*t.side*this.hipX,o=this.pos.y-.5,a=this.pos.z-i*t.side*this.hipX,c=t.ankle.x-r,l=t.ankle.y-o,h=t.ankle.z-a,u=Math.hypot(c,l,h)||1e-6,f=this.thigh,d=this.shin,p=we(u,Math.abs(f-d)+.001,f+d-1e-4),x=c/u,g=l/u,m=h/u,S=we((f*f+p*p-d*d)/(2*f*p),-1,1),E=Math.sqrt(1-S*S),v=t.kneeOut,M=n*t.side,w=-i*t.side;let P=Math.sin(t.yaw)*(1-v*1.3)+M*(.12+1.2*v),_=ef(-l,this.legW),y=Math.cos(t.yaw)*(1-v*1.3)+w*(.12+1.2*v);const R=P*x+_*g+y*m;P-=x*R,_-=g*R,y-=m*R;const L=Math.hypot(P,_,y)||1;return e.set(r+f*(S*x+E*P/L),o+f*(S*g+E*_/L),a+f*(S*m+E*y/L))}kneeClear(t,e){const n=Math.sin(t.yaw)*.07,i=Math.cos(t.yaw)*.07,r=a=>{t.kneeOut=a;const c=this.kneeAt(t,this.t2);return this.world.solidAt(c.x,c.y,c.z)||this.world.solidAt(c.x+n,c.y-.07,c.z+i)},o=t.kneeOut;if(!r(o)){t.kneeOut=Math.max(0,o-e*2),r(t.kneeOut)&&(t.kneeOut=o);return}for(let a=.2;a<=1.001;a+=.2)if(o+a<=1.001&&!r(Math.min(1,o+a))||o-a>=-.001&&!r(Math.max(0,o-a)))return;t.kneeOut=o}wallNudge(){const t=-Math.cos(this.yaw),e=Math.sin(this.yaw),n=this.pos.y-.1,i=this.pos.y-.1-this.armLen*.5,r=.5+.14,o=.45+.45*this.running,a=Math.sin(this.yaw)*o,c=Math.cos(this.yaw)*o,l=(g,m)=>this.world.solidAt(g,n,m)||this.world.solidAt(g,i,m),h=g=>l(this.base.x+t*r*g,this.base.z+e*r*g),u=g=>l(this.base.x+t*r*g+a,this.base.z+e*r*g+c),f=h(1),d=h(-1),p=f||u(1)&&!d,x=d||u(-1)&&!f;return this.wallSide=p&&!x?-1:x&&!p?1:0,p&&!x?.22:x&&!p?-.22:0}reachTop(){const t=(this.thigh+this.shin)*.995,e=Math.cos(this.yaw),n=Math.sin(this.yaw),i=(c,l)=>{const h=this.pos.x+e*c.side*this.hipX,u=this.pos.z-n*c.side*this.hipX,f=l.x-h,d=l.z-u,p=t*t-f*f-d*d;return l.y+this.footH+(p>0?Math.sqrt(p):0)+.5};let r=1/0;for(const c of this.feet)c.mode==="ground"&&(r=Math.min(r,i(c,this.plantedAnkle(c,this.t1).setY(this.t1.y-this.footH))));let o=r;for(const c of this.feet){if(c.mode!=="swing")continue;const l=i(c,c.to),h=te((c.s-.55)/.4);h>0&&(o=Math.min(o,o===1/0?l+.3*(1-h):Nt(o,l,h))),c.s>.88&&(r=Math.min(r,l+.02))}const a=this.standY(this.world.groundAt(this.pos.x,this.pos.z));return r===1/0&&(r=a+2),o===1/0&&(o=a),{hard:r,soft:Math.min(o,r)}}stepStand(t,e=!1){if(!e){this.speed=0,this.running+=(0-this.running)*Math.min(1,t*4);const i=this.queued.length&&this.restYaw!==null?this.restYaw:this.wantYaw;i!==null&&(this.yaw+=we(dn(i-this.yaw),-3*t,3*t)),this.shiftIn-=t,this.shiftIn<=0&&(this.shiftIn=3.5+Math.random()*5,this.shift=(Math.random()*2-1)*this.hipX*.55)}let n=!1;for(const i of this.feet)i.mode!=="swing"||i.clocked||(n=!0,i.s=Math.min(1,i.s+t/i.dur),i.pitch=Math.sin(Math.PI*i.s)*-.45,i.s>=1&&this.touchDown(i,.35));if(!n&&!this.legless&&this.feet.every(i=>i.mode==="ground")){let i=null,r=0;for(const o of this.feet){const a=this.neutral(o,this.base,this.yaw,this.t2),c=Math.hypot(a.x-o.sole.x,a.z-o.sole.z)+Math.abs(dn(this.yaw-o.yaw))*.35;c>r&&(r=c,i=o)}if(i&&r>.09+.03*this.legW){const o=i;this.liftOff(o,!1,.2+.06*Math.sqrt(this.legW)),this.neutral(o,this.base,this.yaw,o.to),o.toYaw=this.yaw,this.safeFoot(o.to,this.yaw),this.planApex(o,.05+.04*this.legW)}}if(!e){for(const i of this.feet)i.mode==="ground"&&(i.pitch*=1-Math.min(1,t*8));this.footTap(t)}this.bodyOver(t,"stand",1,.5)}footTap(t){if(this.tapT<0)return;this.tapT+=t;const e=this.feet[0];e.mode==="ground"&&(e.pitch=Math.max(0,Math.sin(this.tapT*ln*2.6))*.42),this.tapT>1.5&&(this.tapT=-1,e.pitch=0)}oneLegPose(t){const e=this.feet[1];if(t>.02&&!this.legless){const n=this.legW;e.mode="body",e.rel.set(-.05*t,Nt(-n*.97,-n*.55,te(t)),Nt(0,.1*n,te(t))),e.pitch=-.75*t}else e.mode==="body"&&this.footDown(e)}footDown(t){t.mode="ground",this.neutral(t,this.base,this.yaw,t.sole),t.yaw=this.yaw,t.pitch=0}feetDown(){for(const t of this.feet)(t.mode==="body"||t.mode==="free")&&this.footDown(t)}pose(t){const e=(o,a,c)=>new F(o,a,c),n=this.thigh+this.shin,i=this.footH,r=this.hipX+.015;switch(t){case"stand":return{head:e(0,i+n*.975+.5,0),lean:0,roll:0,ankles:[e(-r,i,0),e(r,i,0)],feet:[0,0],hands:[null,null],hips:0};case"kneel":{const o=Or/2,a=Ze-.02,c=a+.07,l=Math.asin(we((a-o)/this.shin,-1,1)),h=Math.max(o+this.thigh*Math.sin(l+.19),c),u=Math.asin(we((h-o)/this.thigh,-1,1)),f=this.thigh*Math.cos(u),d=f-this.shin*Math.cos(l),p=this.hipX+.03,x=-.08,g=e(0,h,0).add(e(0,this.headDrop,0).applyEuler(this.e1.set(x,0,0))),m=this.fromPivot(g,x,0,[e(-p,a,d),e(p,a,d)],[-Math.PI/2,-Math.PI/2],[null,null],1),S=2*Math.max(.12,this.armLen/2-.05)*.92,E=m.head.y-.08-.04;return S*S-E*E>.35*.35&&(m.hands=[this.palm(m.head,x,0,0,-.12,.92),this.palm(m.head,x,0,1,.12,.92)]),m}case"lie":{const a=Math.PI/2,c=e(-.25,.5+Or,0),l=this.onGround(c,0,a,1,.62,.84,i+.2),h=new ve().setFromEuler(this.e1.set(0,0,a)),f=this.hipOf(c,h,1,1).lerp(l,Math.min(.45,.55/n));return f.y+=Or/2+.03,{head:c,lean:0,roll:a,ankles:[this.onGround(c,0,a,0,.85,.84,i+.04),l],feet:[-.35,-.35],hands:[this.palm(c,0,a,0,-.3,.8,.05),f],hips:1}}}}restOn(t,e){const n=new ve().setFromEuler(this.e1.set(t,0,e));let i=1/0;for(const r of[-.5,.5])for(const o of[-.5-this.headDrop,.5-this.headDrop])for(const a of[-.5,.5])i=Math.min(i,this.t1.set(r,o,a).applyQuaternion(n).y);return .005-i}onGround(t,e,n,i,r,o,a){const c=new ve().setFromEuler(this.e1.set(e,0,n)),l=this.hipOf(t,c,i,1),h=o*(this.thigh+this.shin),u=l.y-a,f=Math.sqrt(Math.max(0,h*h-u*u));return new F(l.x+Math.sin(r)*f,Math.max(a,l.y-h),l.z+Math.cos(r)*f)}palm(t,e,n,i,r,o,a=.04){const c=new ve().setFromEuler(this.e1.set(e,0,n)),l=this.arms[i].side,h=t.clone().add(new F(l*(.5+Or/2),-.08,0).applyQuaternion(c)),u=2*Math.max(.12,this.armLen/2-.05)*o,f=h.y-a,d=Math.sqrt(Math.max(0,u*u-f*f));return new F(h.x+Math.sin(r)*d,a,h.z+Math.cos(r)*d)}readyToRest(){return this.rest!=="stand"?!0:(this.restYaw===null||Math.abs(dn(this.restYaw-this.yaw))<.12)&&this.feet.every(e=>e.mode==="ground")}beginRest(){const t=this.queued.shift(),e=this.rest;if(e===t)return;e==="stand"&&(this.landSwings(),this.feetDown(),this.anchor={x:this.base.x,z:this.base.z,g:this.world.groundAt(this.base.x,this.base.z),yaw:this.yaw},this.clockOn=!1);let n;e==="stand"&&t==="kneel"?n=this.kneelDown():e==="kneel"&&t==="lie"?n=this.flopDown():n=this.springUp(e==="lie"?"lie":"kneel"),this.seq=n,this.asleep=!1,this.scratch=null,t==="kneel"&&(this.scratchIn=4+Math.random()*5)}pivotOf(t){return t.head.clone().sub(new F(0,.5,0).applyEuler(this.e1.set(t.lean,0,t.roll)))}fromPivot(t,e,n,i,r,o,a=0){return{head:t.clone().add(new F(0,.5,0).applyEuler(this.e1.set(e,0,n))),lean:e,roll:n,ankles:i,feet:r,hands:o,hips:a}}kneelDown(){var x,g;const t=Math.sqrt(this.legW/2),e=this.thigh+this.shin,n=this.pose("stand"),i=this.pose("kneel"),r=this.pivotOf(n),o=this.pivotOf(i),a=.14*e,c=r.y+.03*e,l=.12*t,h=Math.sqrt(2*ye*(c-(r.y-a))),u=l+h/ye+Math.sqrt(2*(c-o.y)/ye),f=u+.12*t,d=[],p=[];for(let m=0;;m=Math.min(f,m+1/40)){if(m<=l){const S=te(m/l);d.push(this.fromPivot(new F(0,r.y-a*S,0),.08*S,0,[n.ankles[0].clone(),n.ankles[1].clone()],[0,0],[null,null]))}else if(m<u){const S=m-l,E=S/(u-l),v=te(E),M=new F(0,r.y-a+h*S-.5*ye*S*S,o.z*v),w=[0,1].map(y=>n.ankles[y].clone().lerp(i.ankles[y],v)),P=Nt(0,i.feet[0],v),_=E>.5?[((x=i.hands[0])==null?void 0:x.clone())??null,((g=i.hands[1])==null?void 0:g.clone())??null]:[null,null];d.push(this.fromPivot(M,Nt(.08,i.lean,v),0,w,[P,P],_,v))}else d.push(i);if(p.push(m/f),m>=f)break}return{keys:d,at:p,dur:f,t:0,to:"kneel",thud:u/f,thudDone:!1,linear:!0,hit:2.4,dust:!0,push:l/f,pushDone:!1}}flopDown(){var E,v;const t=Math.sqrt(this.legW/2),e=this.pose("kneel"),n=this.pose("lie"),i=this.pivotOf(e),r=this.pivotOf(n),o=(M,w)=>new ve().setFromEuler(this.e1.set(M,0,w)),a=o(e.lean,e.roll),c=o(n.lean,n.roll),l=[0,1].map(M=>e.ankles[M].clone().sub(this.hipOf(e.head,a,M,1)).applyQuaternion(a.clone().invert())),h=[0,1].map(M=>n.ankles[M].clone().sub(this.hipOf(n.head,c,M,1)).applyQuaternion(c.clone().invert())),u=e.lean+.14,f=Math.max(i.y,r.y)+.2,d=.14*t,p=Math.sqrt(2*ye*(f-i.y)),x=d+p/ye+Math.sqrt(2*(f-r.y)/ye),g=x+.2*t,m=[],S=[];for(let M=0;;M=Math.min(g,M+1/40)){if(M<=d){const w=te(M/d);m.push(this.fromPivot(i.clone(),Nt(e.lean,u,w),0,[e.ankles[0].clone(),e.ankles[1].clone()],[e.feet[0],e.feet[1]],[((E=e.hands[0])==null?void 0:E.clone())??null,((v=e.hands[1])==null?void 0:v.clone())??null],1))}else if(M<x){const w=M-d,P=w/(x-d),_=te(P),y=new F(Nt(i.x,r.x,_),i.y+p*w-.5*ye*w*w,Nt(i.z,r.z,_)),R=Nt(u,n.lean,_),L=Nt(0,n.roll,_),U=o(R,L),V=y.clone().add(new F(0,.5,0).applyQuaternion(U)),H=[0,1].map(W=>{const tt=Nt(l[W].length(),h[W].length(),_),B=l[W].clone().normalize().lerp(h[W].clone().normalize(),_).normalize().multiplyScalar(tt).applyQuaternion(U),Q=this.hipOf(V,U,W,1).add(B);return Q.y=Math.max(Q.y,this.footH+.02),Q}),G=[0,1].map(W=>Nt(e.feet[W],n.feet[W],_)),J=[0,1].map(W=>{const tt=e.hands[W],B=n.hands[W];return tt&&B?tt.clone().lerp(B,_):B&&P>.5?B.clone():null});m.push(this.fromPivot(y,R,L,H,G,J,1))}else m.push(n);if(S.push(M/g),M>=g)break}return{keys:m,at:S,dur:g,t:0,to:"lie",thud:x/g,thudDone:!1,linear:!0,hit:1.6,dust:!0,push:d/g,pushDone:!1}}springUp(t){var w,P;const e=Math.sqrt(this.legW/2),n=this.thigh+this.shin,i=this.pose(t),r=this.pose("stand"),o=this.pivotOf(i),a=this.pivotOf(r),c=.12*n,l=a.y+.05*n,h=(t==="lie"?.16:.1)*e,u=Math.sqrt(2*ye*(l-o.y)),f=h+u/ye+Math.sqrt(2*(l-(a.y-c))/ye),d=f+.16*e,p=t==="kneel"?i.lean+.15:i.lean,x=t==="lie"?i.roll-.35:i.roll,g=new ve().setFromEuler(this.e1.set(i.lean,0,i.roll)),m=[0,1].map(_=>i.ankles[_].clone().sub(this.hipOf(i.head,g,_,i.hips))),S=new F(a.x,a.y-c,a.z),E=[0,1].map(_=>r.ankles[_].clone().sub(S.clone().add(new F(this.feet[_].side*this.hipX,0,0)))),v=[],M=[];for(let _=0;;_=Math.min(d,_+1/40)){if(_<=h){const y=te(_/h);v.push(this.fromPivot(o.clone(),Nt(i.lean,p,y),Nt(i.roll,x,y),[i.ankles[0].clone(),i.ankles[1].clone()],[i.feet[0],i.feet[1]],[((w=i.hands[0])==null?void 0:w.clone())??null,((P=i.hands[1])==null?void 0:P.clone())??null],i.hips))}else if(_<f){const y=_-h,R=y/(f-h),L=new F(Nt(o.x,a.x,te(R)),o.y+u*y-.5*ye*y*y,Nt(o.z,a.z,te(R))),U=Nt(p,0,te(R)),V=Nt(x,0,te(Math.min(1,R*1.4))),H=new ve().setFromEuler(this.e1.set(U,0,V)),G=L.clone().add(new F(0,.5,0).applyQuaternion(H)),J=te(Math.min(1,R*1.3)),W=Nt(i.hips,0,J),tt=[0,1].map(ut=>{const O=Nt(m[ut].length(),E[ut].length(),R)-.08*n*Math.sin(Math.PI*R),X=m[ut].clone().normalize().lerp(E[ut].clone().normalize(),J).normalize(),z=this.hipOf(G,H,ut,W).addScaledVector(X,O);return z.y=Math.max(z.y,this.footH+.02),z}),B=[0,1].map(ut=>Nt(i.feet[ut],0,te(R))),Q=G.y-.08<this.armLen*.92,st=[0,1].map(ut=>Q&&i.hands[ut]&&i.hands[ut].y<.15?i.hands[ut].clone():null);v.push(this.fromPivot(L,U,V,tt,B,st,W))}else{const y=te((_-f)/(d-f));v.push(this.fromPivot(new F(a.x,Nt(a.y-c,a.y,y),a.z),0,0,[r.ankles[0].clone(),r.ankles[1].clone()],[0,0],[null,null]))}if(M.push(_/d),_>=d)break}return{keys:v,at:M,dur:d,t:0,to:"stand",thud:f/d,thudDone:!1,linear:!0,hit:2.4,dust:!0,push:h/d,pushDone:!1}}stepRest(t){var o;const e=this.seq;let n;if(e){e.t+=t;const a=In(e.t/e.dur),c=e.linear?a:te(a);let l=0;for(;l<e.at.length-2&&c>e.at[l+1];)l++;const h=In((c-e.at[l])/(e.at[l+1]-e.at[l]));if(n=this.mix(e.keys[l],e.keys[l+1],h),e.push!==void 0&&!e.pushDone&&a>=e.push&&(e.pushDone=!0,this.qv+=1.8),!e.thudDone&&a>=e.thud){if(e.thudDone=!0,this.qv-=e.hit??(e.to==="lie"?1.5:2),e.dust)for(let u=0;u<3;u++)this.puffAt(this.pos.x,this.anchor.g,this.pos.z,.08+.04*Math.random());if(e.to==="stand")for(const u of this.feet)(o=this.onPrint)==null||o.call(this,this.t1.set(u.ankle.x,this.anchor.g,u.ankle.z),this.anchor.yaw)}a>=1&&(this.seq=null,this.rest=e.to,e.to==="stand"&&this.standUp())}else n=this.pose(this.rest==="lie"?"lie":"kneel");if(this.rest==="stand"&&!this.seq)return;const i=!e&&this.rest!=="stand";i&&this.rest==="kneel"&&!this.asleep&&n.hands[0]?this.stepScratch(t):this.scratch=null,this.breath=zs(this.breath+t/(this.rest==="lie"?3.6:4));const r=Math.sin(ln*this.breath);if(this.qRest=i?(this.rest==="lie"?.035:.045)*r:0,i&&this.rest==="lie"&&(n.head.y+=.012*r),i&&this.rest==="kneel"){const a=.5+.5*r;n.head.y+=.05*a,n.lean-=.035*a}this.applyPose(n)}stepScratch(t){const e=this.scratch;if(!e){(this.scratchIn-=t)<=0&&(this.scratch={side:Math.random()<.5?0:1,kind:Math.random()<.5?"chin":"head",t:0,dur:2+.5*this.armLen+Math.random()*.8,w:0,wiggle:0});return}e.t+=t;const n=.5+.25*this.armLen,i=n,r=e.dur-n-i;e.w=e.t<n?te(e.t/n):e.t>e.dur-i?te((e.dur-e.t)/i):1;const o=e.t-n;e.wiggle=o>0&&o<r?Math.sin(ln*(e.kind==="chin"?4.5:5.5)*o)*te(o/.15)*te((r-o)/.15):0,e.t>=e.dur&&(this.scratch=null,this.scratchIn=6+Math.random()*9)}mix(t,e,n){const i=(g,m)=>g&&m?g.clone().lerp(m,n):n<.5?g?g.clone():null:m?m.clone():null,r=Nt(t.lean,e.lean,n),o=Nt(t.roll,e.roll,n),a=(g,m)=>new ve().setFromEuler(this.e1.set(g,0,m)),c=a(t.lean,t.roll),l=a(e.lean,e.roll),h=a(r,o),u=t.head.clone().lerp(e.head,n);u.y=Math.max(u.y,this.restOn(r,o));const f=Nt(t.hips,e.hips,n),d=[0,1].map(g=>{const m=t.ankles[g].clone().sub(this.hipOf(t.head,c,g,t.hips)),S=e.ankles[g].clone().sub(this.hipOf(e.head,l,g,e.hips)),E=Nt(m.length(),S.length(),n),v=Nt(t.ankles[g].y,e.ankles[g].y,n),M=this.hipOf(u,h,g,f),w=Nt(m.x,S.x,n),P=Nt(m.z,S.z,n),_=Math.hypot(w,P),y=M.y-v,R=Math.sqrt(Math.max(0,E*E-y*y)),L=new F(M.x,Math.max(v,M.y-E),M.z);return _>1e-4&&(L.x+=w/_*R,L.z+=P/_*R),L.y=Math.max(L.y,this.footH+.02),L}),p=g=>{const m=t.hands[g],S=e.hands[g];if(!m||!S)return i(m,S);const E=Math.atan2(m.x-t.head.x,m.z-t.head.z),v=Math.atan2(S.x-e.head.x,S.z-e.head.z),M=E+dn(v-E)*n,w=Nt(Math.hypot(m.x-t.head.x,m.z-t.head.z),Math.hypot(S.x-e.head.x,S.z-e.head.z),n);return new F(u.x+Math.sin(M)*w,Nt(m.y,S.y,n),u.z+Math.cos(M)*w)},x=[p(0),p(1)];return x.forEach((g,m)=>{g&&(this.outsideBody(g,u,h,this.arms[m].side),g.y=Math.max(g.y,.03))}),{head:u,lean:r,roll:o,ankles:d,feet:[Nt(t.feet[0],e.feet[0],n),Nt(t.feet[1],e.feet[1],n)],hands:x,hips:f}}outsideBody(t,e,n,i){const r=t.clone().sub(e).applyQuaternion(n.clone().invert()),o=.5+.12;if(Math.abs(r.x)>=o||Math.abs(r.y)>=o||Math.abs(r.z)>=o)return;let a=1/0,c=-1,l=0;for(let h=0;h<3;h++)for(const u of[-1,1]){if(this.t1.set(0,0,0).setComponent(h,u).applyQuaternion(n).y<-.6)continue;const f=o-u*r.getComponent(h)-(h===0&&u===i?.25:0);f<a&&(a=f,c=h,l=u)}c<0||(r.setComponent(c,l*o),t.copy(r.applyQuaternion(n).add(e)))}hipOf(t,e,n,i=0){const r=this.feet[n].side;return t.clone().add(new F(r*this.hipX,-.5-i*this.headDrop,0).applyQuaternion(e))}applyPose(t){const e=this.anchor,n=Math.cos(e.yaw),i=Math.sin(e.yaw),r=(a,c)=>c.set(e.x+n*a.x+i*a.z,e.g+a.y,e.z-i*a.x+n*a.z);this.yaw=e.yaw,this.lean=t.lean,this.leanV=0,this.roll=t.roll,this.hipDrop=t.hips*this.headDrop;const o=this.t2.set(0,.5,0).applyEuler(this.e1.set(t.lean,0,t.roll));r(this.t1.copy(t.head).sub(o).add(this.t2.set(0,.5,0)),this.pos),this.base.set(e.x,0,e.z),this.feet.forEach((a,c)=>{a.mode="free",r(t.ankles[c],a.ankle),a.q.setFromAxisAngle(this.t2.set(0,1,0),e.yaw).multiply(new ve().setFromAxisAngle(this.t2.set(0,0,1),t.roll)).multiply(new ve().setFromAxisAngle(this.t2.set(1,0,0),-t.feet[c])),a.toe=t.feet[c]<-.9?-1.1*te((-t.feet[c]-.9)/.5):t.feet[c]<-.2?.2:0,a.yaw=e.yaw}),this.arms.forEach((a,c)=>{const l=t.hands[c];l&&(a.reach=r(l,new F),a.reachW=1,a.flat=!0)})}standUp(){this.asleep=!1,this.hipDrop=0;for(const t of this.feet)t.mode="ground",t.sole.set(t.ankle.x,this.world.groundAt(t.ankle.x,t.ankle.z),t.ankle.z),t.pitch=0;if(this.lean=0,this.roll=0,this.vy=0,this.pending){const t=this.pending;this.pending=null,this.travel(t.cells,t.gait,t.onArrive)}}envAt(t,e,n=.25,i=.55){const r=t.ground;let o=-1/0;for(let a=Math.max(0,Math.floor((e-n)/zr));a<=Math.min(r.length-1,Math.ceil((e+i)/zr));a++)o=Math.max(o,r[a]);return o===-1/0?this.world.groundAt(this.base.x,this.base.z):o}stepHopper(t,e){var l;const n=e.path,i=this.gaitSpeed(e.gait),r=n.total-e.s;this.speed+=we(Math.min(i,Math.sqrt(2*6*Math.max(0,r)))-this.speed,-8*t,6*t),e.s=Math.min(n.total,e.s+this.speed*t),n.at(e.s,this.base),this.yaw+=we(dn(n.yawAt(e.s+.2)-this.yaw),-8*t,8*t);const o=this.phase;this.phase+=t/(e.gait==="bound"?.22:.3),Math.floor(this.phase)!==Math.floor(o)&&(this.qv-=2.6);const a=zs(this.phase),c=this.envAt(e,e.s,.1,.3);this.pos.set(this.base.x,c+.5+Math.sin(Math.PI*a)*(e.gait==="bound"?.3:.16),this.base.z),this.qRest=.12*Math.sin(Math.PI*a),r<=.01&&(this.trip=null,this.speed=0,this.qRest=0,(l=e.onArrive)==null||l.call(e))}landSwings(){for(const t of this.feet)t.mode==="swing"&&(t.mode="ground",t.sole.copy(t.to),t.yaw=t.toYaw,t.pitch=0)}makeJump(t,e,n,i){this.landSwings();const r=this.feet.map(o=>{const a=this.neutral(o,e,i,new F);return this.safeFoot(a,i),a});return{phase:"gather",t:0,drop:t,to:e.clone(),apex:n,vx:0,vz:0,feet:r,y0:this.pos.y,air:1,yawTo:i,grip:null}}stepAct(t){const e=this.act;e.t+=t;for(const i of this.arms)i.tp=.02,i.to=.07,i.te=.16;if(e.jump){const i=this.stepJump(t,e.jump);e.kind==="cheer"&&this.armsTo(-2.75,.45,.3),i&&this.endAct();return}const n=e.t/e.dur;if(e.kind==="wave"){const i=this.arms[0];i.tp=-2.55,i.to=.42,i.te=.55+.42*Math.sin(e.t*ln*2.6),this.shift=this.hipX*.5}else if(e.kind==="spin"){const i=te(n/.15)*(1-te((n-.86)/.14));this.oneLegPose(i),this.yaw=e.yaw0+Gv((n-.12)/.74)*ln,this.feet[0].mode==="ground"&&(this.feet[0].yaw=this.yaw),this.armsTo(-.35,1.25*i+.08,.25)}else if(e.kind==="sigh"){const i=n<.45?Math.sin(Math.PI*In(n/.45)):0,r=n>.4?Math.sin(Math.PI*In((n-.4)/.6)):0;this.qRest=.08*i-.12*r,this.armsTo(.12*r,.06,.15)}else e.kind==="tap"&&this.tapT<0&&(this.tapT=0);this.stepStand(t),e.t>=e.dur&&(e.kind==="spin"&&(this.yaw=dn(this.yaw),this.feet[0].yaw=this.yaw),this.endAct())}endAct(){var e;const t=this.act;if(this.act=null,this.qRest=0,this.leanRest=0,(e=t.then)==null||e.call(t),t.kind==="leap")if(this.pending){const n=this.pending;this.pending=null,this.travel(n.cells,n.gait,n.onArrive)}else this.trip&&this.nextLeg()}stepJump(t,e){e.t+=t;const n=this.legW,i=e.drop?.1:.14+.05*Math.sqrt(n),r=.08+.02*Math.sqrt(n);if(e.phase==="gather"){const o=te(e.t/i);this.vy=0,this.pos.y=Nt(e.y0,this.reachTop().hard-(e.drop?.08:.22)*n,o),this.leanRest=.16*o,this.qRest=-.24*o,this.armsTo(.95*o,.12,.3),this.yaw+=we(dn(e.yawTo-this.yaw),-9*t,9*t);for(const a of this.feet)a.mode==="ground"&&(a.pitch*=.8);return e.t>=i&&(e.phase="push",e.t=0,e.y0=this.pos.y),!1}if(e.phase==="push"){const o=te(e.t/r);for(const a of this.feet)a.mode==="ground"&&(a.pitch=-.6*o);if(this.pos.y=Nt(e.y0,this.reachTop().hard,o),this.qRest=.22*o,this.armsTo(-1.5*o,.15,.25),e.t>=r){e.phase="air",e.t=0;const a=Math.max(.05,Math.max(this.pos.y,e.to.y)+e.apex+(e.grip?.2*this.L:0)-this.pos.y),c=Math.sqrt(2*a/ye),l=Math.sqrt(2*Math.max(.01,this.pos.y+a-e.to.y)/ye);this.vy=ye*c,e.air=c+l,e.vx=(e.to.x-this.pos.x)/e.air,e.vz=(e.to.z-this.pos.z)/e.air,this.qv+=3.2;for(const h of this.feet)h.mode="body"}return!1}if(e.phase==="air"){this.airborne=!0,this.vy-=ye*t,this.pos.x+=e.vx*t,this.pos.z+=e.vz*t,this.pos.y+=this.vy*t,this.base.x=this.pos.x,this.base.z=this.pos.z,this.sway=0,this.yaw+=we(dn(e.yawTo-this.yaw),-6*t,6*t);const o=e.t/e.air,a=Math.sin(Math.PI*In(o*1.15));for(const h of this.feet)h.mode="body",h.rel.set(0,-n*Nt(.97,e.grip?.68:.62,a),n*(e.grip?-.04:.16)*a),h.kneeOut=e.grip?.7*a:0,h.pitch=-.65*a;this.armsTo(-.55,.85,.35),e.grip&&o>.12&&o<.92&&this.arms.forEach((h,u)=>{h.reach=e.grip[u],h.flat=!0,h.reachW=Math.min(1,h.reachW+t*9)}),this.leanRest=e.grip?.18:.05,this.qRest=we(this.vy*.022,-.14,.18);const c=this.world.groundAt(e.to.x,e.to.z),l=this.standY(c);if(e.t>=e.air||this.vy<0&&this.pos.y<=l&&Math.hypot(this.pos.x-e.to.x,this.pos.z-e.to.z)<.3){this.pos.set(e.to.x,l,e.to.z),e.phase="land",e.t=0,this.feet.forEach((u,f)=>{var d;u.mode="ground",u.sole.copy(e.feet[f]).setY(this.world.groundAt(e.feet[f].x,e.feet[f].z)),u.yaw=e.yawTo,(d=this.onPrint)==null||d.call(this,u.sole,u.yaw),u.pitch=0,u.kneeOut=0});const h=Math.abs(this.vy);this.qv-=2.2+.8*h,this.qRest=0,this.leanV+=.6+.15*h;for(let u=0;u<(h>4?5:2);u++)this.puffAt(this.pos.x,c,this.pos.z,.08+.04*Math.random())}return!1}return this.leanRest=0,this.armsTo(-.45,.35,.4),this.base.x+=(e.to.x-this.base.x)*Math.min(1,t*10),this.base.z+=(e.to.z-this.base.z)*Math.min(1,t*10),this.bodyOver(t,"stand",1,.5),e.t>.32}puffAt(t,e,n,i){if(!this.onPuff)return;const r=new F((Math.random()-.5)*1.2,.5+Math.random()*.6,(Math.random()-.5)*1.2);this.onPuff(new F(t+(Math.random()-.5)*.2,e+.06,n+(Math.random()-.5)*.2),r,i)}armsTo(t,e,n){for(const i of this.arms)i.tp=t,i.to=e,i.te=n}stepSprings(t){const e=ln*3.1,n=.34;this.qv+=(e*e*(this.qRest-this.squash)-2*n*e*this.qv)*t,this.squash=we(this.squash+this.qv*t,-.45,.45);const i=220;if(this.sv+=(i*(this.stretchRest-this.stretch)-2*Math.sqrt(i)*.8*this.sv)*t,this.stretch+=this.sv*t,this.seq||this.rest!=="stand")return;const o=!!this.trip&&!this.act,a=(this.speed-this.lastSpeed)/Math.max(t,1e-4);this.lastSpeed=this.speed;const c=o?Nt(.035,.2,this.running)*Math.min(1,this.speed/Math.max(.3,this.gaitSpeed("walk"))):0,l=ln*2.4,h=.5;if(this.leanV+=(l*l*(c+this.leanRest-this.lean)-2*h*l*this.leanV-(o?3.5*we(a,-12,12):0))*t,this.lean=we(this.lean+this.leanV*t,-.6,.7),this.roll=we(-(this.sway/this.hipX)*.045,-.08,.08),o&&this.clockOn){const d=this.running,p=Nt(.3,1,d)*Math.min(1,this.speed/Math.max(.3,this.gaitSpeed("walk")));for(const x of this.arms)x.tp=(x.side===-1?1:-1)*p*Math.cos(ln*(this.phase-.04)),x.to=x.side===this.wallSide?.03:Nt(.07,.2,d),x.te=Nt(.24,1.55,d)+Math.max(0,-x.tp)*.35}else if(!this.act)for(const d of this.arms)d.tp=.02,d.to=.07,d.te=.16;const u=ln*2.3,f=.42;for(const d of this.arms)d.vp+=(u*u*(d.tp-d.pitch)-2*f*u*d.vp)*t,d.vo+=(u*u*(d.to-d.out)-2*f*u*d.vo)*t,d.ve+=(u*u*(d.te-d.elbow)-2*f*u*d.ve)*t,d.pitch+=d.vp*t,d.out+=d.vo*t,d.elbow=Math.max(0,d.elbow+d.ve*t),d.reach||(d.reachW=Math.max(0,d.reachW-t*3))}resolveFeet(t=0){const e=Math.cos(this.yaw),n=Math.sin(this.yaw);for(const i of this.feet){if(i.mode==="swing"){const r=i.s,o=te(r),a=Nt(i.from.x,i.to.x,o),c=Nt(i.from.z,i.to.z,o),l=Math.max(.04,i.apex-Math.max(i.from.y,i.to.y)),h=Nt(i.from.y,i.to.y,te((r-.15)/.75))+l*Math.pow(Math.sin(Math.PI*r),1.3),u=i.to.x-i.from.x,f=i.to.z-i.from.z,d=Math.hypot(u,f)||1,p=u/d,x=f/d,g=Math.min(Ze+.08+.35*(1-r),(1-o)*d+Ze+.04);let m=-1/0;for(let P=0;P<=4;P++){const _=Jn-.04+(g-Jn+.04)*(P/4);m=Math.max(m,this.world.groundAt(a+p*_,c+x*_))}const S=m+.07*(1-te((r-.82)/.18)),E=Math.max(h,r>.97?i.to.y:S);i.sy=E>i.sy?E:i.sy+(E-i.sy)*Math.min(1,t*30),r<.02&&(i.sy=Math.max(E,i.from.y)),i.ankle.set(a,i.sy+this.footH,c),i.yaw=i.fromYaw+dn(i.toYaw-i.fromYaw)*o,this.kneeClear(i,t);const v=Math.sin(i.yaw),M=Math.cos(i.yaw),w=i.ankle.y;for(let P=0;P<8;P++){const _=i.ankle.y-this.footH*.5,y=this.kneeAt(i,this.t2),R=y.x+v*.07,L=y.z+M*.07,U=(this.world.solidAt(y.x,y.y,y.z)||this.world.solidAt(R,y.y-.07,L))&&this.world.groundAt(R,L)<y.y+.4;if(!this.world.solidAt(i.ankle.x,_,i.ankle.z)&&!this.world.solidAt(i.ankle.x+v*Ze,_,i.ankle.z+M*Ze)&&!U||i.ankle.y-w>.45)break;i.ankle.y+=.06}i.toe=Nt(i.pitch<0?i.pitch:0,.28*Math.sin(Math.PI*r),te(r/.35))}else if(i.mode==="ground"){this.plantedAnkle(i,i.ankle),this.kneeClear(i,t);for(let r=0;r<2;r++){const o=this.kneeAt(i,this.t3),a=(o.x-i.ankle.x)*Math.sin(i.yaw)+(o.z-i.ankle.z)*Math.cos(i.yaw),c=Math.atan2(a,o.y-i.ankle.y),l=tf-.05-c;if(i.pitch<=l)break;i.pitch=l,this.plantedAnkle(i,i.ankle)}i.toe=i.pitch<0?i.pitch:0}else if(i.mode==="body"){const r=i.side*(this.hipX+i.rel.x),o=i.rel.z;i.ankle.set(this.pos.x+e*r+n*o,this.pos.y-.5+i.rel.y,this.pos.z-n*r+e*o),i.ankle.y=Math.max(i.ankle.y,this.world.groundAt(i.ankle.x,i.ankle.z)+this.footH+.01),i.yaw=this.yaw,i.toe=.2;const a=Math.sin(this.yaw),c=Math.cos(this.yaw),l=Math.cos(i.pitch),h=Math.sin(i.pitch);for(let u=0;u<8;u++){const f=i.ankle.x+a*l*Ze,d=i.ankle.y-this.footH+h*Ze,p=i.ankle.z+c*l*Ze;if(!this.world.solidAt(f,d,p)&&!this.world.solidAt(i.ankle.x,i.ankle.y-this.footH,i.ankle.z))break;i.ankle.x-=a*.05,i.ankle.z-=c*.05}}if(i.mode!=="free"){i.q.setFromEuler(this.e1.set(-i.pitch,i.yaw,0,"YXZ"));const r=i.pitch,o=Math.cos(r),a=Math.sin(r),c=Math.sin(i.yaw),l=Math.cos(i.yaw),h=i.ankle.x+c*o*Qe,u=i.ankle.z+l*o*Qe,f=i.ankle.y-this.footH*o+Qe*a,d=(this.world.groundAt(h+c*(Ze-Qe),u+l*(Ze-Qe))+.005-f)/(Ze-Qe);d>-1&&(i.toe=Math.min(i.toe,r-Math.asin(we(d,-1,1))))}}}}const ua=5,Xv=4935768,kh=.3,qv=14;function Yv(){const s=new si(.11,Qe-Jn-.01).rotateX(-Math.PI/2).translate(0,0,(Qe+Jn)/2-.005),t=new si(.11,Ze-Qe-.02).rotateX(-Math.PI/2).translate(0,0,(Ze+Qe)/2+.01),e=Hv([s,t]);return s.dispose(),t.dispose(),e}const Bh=72,$v=2.6;let Os=null;function Kv(){if(Os)return Os;const s=document.createElement("canvas");s.width=s.height=64;const t=s.getContext("2d");return t.fillStyle="#111",t.font='700 54px "Space Mono", "Courier New", monospace',t.textAlign="center",t.textBaseline="middle",t.fillText("Z",32,34),Os=new Rl(s),Os.colorSpace=Le,Os}class Zv{constructor(){D(this,"group",new Pe);D(this,"puffs",[]);D(this,"dust");D(this,"zeds",[]);D(this,"prints",[]);D(this,"printGeo",Yv());D(this,"own",[]);D(this,"m",new ne);D(this,"q",new ve);D(this,"s",new F);const t=new xn(1,1,1),e=new so({color:15987958});this.dust=new Yr(t,e,Bh),this.dust.count=0,this.dust.frustumCulled=!1,this.group.add(this.dust),this.own.push(t,e,this.printGeo)}print(t,e){const n=new jn({color:Xv,transparent:!0,opacity:kh,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),i=new Ce(this.printGeo,n);if(i.position.set(t.x,t.y+.004,t.z),i.rotation.y=e,i.renderOrder=1,this.group.add(i),this.prints.push({m:i,mat:n,age:0}),this.prints.length>ua+6){const r=this.prints.shift();r.m.removeFromParent(),r.mat.dispose()}}puff(t,e,n){this.puffs.length>=Bh&&this.puffs.shift(),this.puffs.push({p:t.clone(),v:e.clone(),age:0,life:.45+Math.random()*.3,size:n,spin:new vn(Math.random(),Math.random(),Math.random())})}z(t){const e=new du({map:Kv(),transparent:!0,depthWrite:!1,opacity:0}),n=new Nd(e);this.group.add(n),this.zeds.push({s:n,age:0,life:$v,x0:t.x,y0:t.y,z0:t.z,drift:Math.random()<.5?-1:1})}update(t){let e=0;this.puffs=this.puffs.filter(i=>(i.age+=t)<i.life);for(const i of this.puffs){i.v.multiplyScalar(Math.exp(-3.2*t)),i.v.y-=.6*t,i.p.addScaledVector(i.v,t);const r=i.age/i.life,o=r<.18?r/.18:1-(r-.18)/.82;this.s.setScalar(Math.max(.001,i.size*Math.pow(o,.8))),i.spin.x+=t*1.5,this.q.setFromEuler(i.spin),this.m.compose(i.p,this.q,this.s),this.dust.setMatrixAt(e++,this.m)}this.dust.count=e,this.dust.instanceMatrix.needsUpdate=!0;const n=this.prints.length;this.prints=this.prints.filter((i,r)=>{i.age+=t;const o=n-1-r,a=o<ua?1:Math.max(0,1-(o-ua+1)/3),c=1-Math.min(1,Math.max(0,(i.age-qv)/3)),l=kh*a*c;return i.mat.opacity+=(l-i.mat.opacity)*Math.min(1,t*5),l<=0&&i.mat.opacity<.005?(i.m.removeFromParent(),i.mat.dispose(),!1):!0}),this.zeds=this.zeds.filter(i=>{i.age+=t;const r=i.age/i.life;return r>=1?(i.s.removeFromParent(),i.s.material.dispose(),!1):(i.s.position.set(i.x0+i.drift*(.25*r+.06*Math.sin(r*7)),i.y0+.75*r,i.z0),i.s.scale.setScalar(.14+.2*r),i.s.material.opacity=Math.min(1,r*5)*(1-Math.max(0,(r-.6)/.4)),!0)})}dispose(){for(const t of this.zeds)t.s.material.dispose();for(const t of this.prints)t.mat.dispose();this.group.removeFromParent();for(const t of this.own)t.dispose()}}const _i=.12,ks={thick:.07,long:.15,wide:.135},Hh=2.6,Jv=2.9,Bs=2.5,kr={back:-.55,fwd:2.1,inward:-.22,out:1},os={up:-tf,down:.95,side:.3,twist:.35},fa={flex:1.55,side:.45,turn:1.6},Se=(s,t,e)=>s<t?t:s>e?e:s,da=(s,t,e)=>s+(t-s)*e;function Br(s,t,e,n){const i=new xn(_i,s-t,_i).translate(0,(s+t)/2,0);return n.push(i),new Ce(i,e)}function pa(s,t,e){return e.push(s),new Ce(s,t)}const cn=new F,Je=new F,Un=new F,fo=new ne;function po(s,t,e){return Je.copy(s).negate().normalize(),Un.copy(t).addScaledVector(Je,-t.dot(Je)),Un.lengthSq()<1e-8&&Un.set(1,0,0).cross(Je),Un.normalize(),cn.crossVectors(Je,Un),fo.makeBasis(cn,Je,Un),e.setFromRotationMatrix(fo)}const fs=new F,Ln=new F,Mi=new F,Kr=new F,hl=new F,Gh=new ve;function Ci(s,t,e,n,i,r,o,a=Math.PI){fs.subVectors(t,s);const c=fs.length(),l=Math.sqrt(Math.max(0,e*e+n*n-2*e*n*Math.cos(Math.PI-a))),h=Se(c,Math.max(Math.abs(e-n)+.001,l),e+n-1e-4);c<1e-6?Ln.set(0,-1,0):Ln.copy(fs).divideScalar(c);const u=Se((e*e+h*h-n*n)/(2*e*h),-1,1),f=Math.sqrt(1-u*u);Mi.copy(i).addScaledVector(Ln,-i.dot(Ln)),Mi.lengthSq()<1e-8&&Mi.set(0,0,1).addScaledVector(Ln,-Ln.z),Mi.normalize(),Kr.copy(s).addScaledVector(Ln,e*u).addScaledVector(Mi,e*f),hl.copy(s).addScaledVector(Ln,h),po(fs.subVectors(Kr,s),i,r),po(hl.sub(Kr),i,Gh),o.copy(r).invert().multiply(Gh)}const mi=new vn,Qv=new F;function Vh(s,t,e,n,i="XYZ"){mi.setFromQuaternion(s,i);const r=Se(mi.x,t[0],t[1]),o=Se(mi.y,e[0],e[1]),a=Se(mi.z,n[0],n[1]);(r!==mi.x||o!==mi.y||a!==mi.z)&&s.setFromEuler(mi.set(r,o,a,i))}class jv{constructor(t,e,n){D(this,"root",new Pe);D(this,"fx",new Zv);D(this,"motion");D(this,"placed",!1);D(this,"face");D(this,"world");D(this,"pelvis",new Pe);D(this,"turn",new Pe);D(this,"squash",new Pe);D(this,"legs",[]);D(this,"arms",[]);D(this,"solid",[]);D(this,"own",[]);D(this,"look",null);D(this,"targets",[null,null]);D(this,"talkCh",null);D(this,"clock",0);D(this,"lastBreath",0);D(this,"showing",null);D(this,"yawLook",0);D(this,"pitchLook",0);D(this,"a2");D(this,"v1",new F);D(this,"v2",new F);D(this,"v3",new F);D(this,"v4",new F);D(this,"v5",new F);D(this,"qa",new ve);D(this,"qb",new ve);D(this,"qc",new ve);D(this,"qd",new ve);D(this,"qm",new ne);D(this,"headCap",0);D(this,"scratchSeen",null);D(this,"sc1",new F);D(this,"sc2",new F);D(this,"sc3",new F);D(this,"qf",new ve);D(this,"pts",[0,1,2,3,4].map(()=>new F));D(this,"kg",[0,1,2,3,4,5].map(()=>new F));this.world=n,this.motion=new Wv(e,n),this.motion.onPuff=(c,l,h)=>this.fx.puff(c,l,h),this.motion.onPrint=(c,l)=>this.fx.print(c,l),this.a2=Math.max(.12,this.motion.armLen/2-.05),this.face=new Bv(t),this.motion.headDrop=this.face.drop,this.root.add(this.pelvis),this.pelvis.add(this.turn),this.turn.add(this.squash),this.face.head.scale.setScalar(1/16),this.face.head.position.y=.5,this.squash.add(this.face.head),this.solid.push(...this.face.solid);const[i,r,o]=Ol(t),a=new kt().setRGB(i/255,r/255,o/255,Le);this.buildLimbs(a)}buildLimbs(t){const e=this.motion,n=new so({color:t});this.own.push(n);const i=_i/2;if(!e.legless)for(const o of[-1,1]){const a=new Pe,c=new Pe,l=new Pe,h=new Pe;a.position.set(o*e.hipX,0,0);const u=Br(0,-e.thigh,n,this.own);a.add(u),c.position.y=-e.thigh;const f=Br(i,-e.shin-i,n,this.own);c.add(f),l.position.y=-e.shin;const d=pa(new xn(_i,e.footH,Qe-Jn).translate(0,-e.footH/2,(Qe+Jn)/2),n,this.own);h.position.set(0,-e.footH,Qe);const p=pa(new xn(_i,e.footH*.75,.08).translate(0,e.footH*.375,.04),n,this.own);h.add(p),l.add(d,h),c.add(l),a.add(c),this.pelvis.add(a),this.legs.push({hip:a,knee:c,ankle:l,toes:h,side:o}),this.solid.push(u,f,d,p)}const r=this.a2;for(const o of[-1,1]){const a=new Pe,c=new Pe,l=new Pe,h=Br(i,-r,n,this.own);a.add(h),c.position.y=-r;const u=Br(i,-r-i,n,this.own);c.add(u),l.position.y=-r;const f=pa(new xn(ks.thick,ks.long,ks.wide).translate(0,-.15/2-.02,0),n,this.own);l.add(f),c.add(l),a.add(c),this.turn.add(a);const d=()=>new ve;this.arms.push({shoulder:a,elbow:c,wrist:l,side:o,aimW:0,fk:[d(),d()],ik:[d(),d()],push:0,pushTo:new F,pushE:0,pushETo:new F,pushN:new F,flatW:0,palm:new F,palmDir:new F(0,0,1)}),this.solid.push(h,u,f)}}get pos(){return this.motion.pos}get yaw(){return this.motion.yaw}headCentre(t=new F){return this.squash.localToWorld(t.set(0,.5,0))}headTop(t=new F){return this.headCentre(t).add(this.v4.set(0,.85,0))}hit(t){return t.intersectObjects(this.solid,!1).some(e=>{for(let n=e.object;n;n=n.parent)if(!n.visible)return!1;return!0})}place(t,e,n){this.motion.place(t,e,n),this.placed=!0}travel(t,e,n){this.motion.travel(t,e,n)}stop(){this.motion.stop()}busy(){return this.motion.busy()}turnTo(t){this.motion.turnTo(t)}perform(t,e){return this.motion.perform(t,e)}rest(t,e){return this.motion.setRest(t,e)}roomAt(t,e,n){return this.motion.roomAt(t,e,n)}get resting(){return this.motion.rest}sleep(t){this.motion.asleep=t}lookAt(t){this.look=t?(this.look??new F).copy(t):null}point(t,e){this.targets=[t,e]}talk(t){this.talkCh=t}feel(t,e){this.face.feel(t,e)}mood(t){this.face.setMood(t)}blink(){this.face.blink()}get feeling(){return this.face.current}update(t){const e=this.motion;this.clock+=t,e.update(t);const n=this.root.parent??this.root;n.position.copy(e.pos),n.rotation.set(0,e.yaw,0),this.pelvis.position.set(0,-.5,0),this.pelvis.rotation.set(e.lean,0,e.roll);for(const d of this.legs)d.hip.position.y=-e.hipDrop;n.updateMatrixWorld(!0);let i=null;this.look?(i=this.pelvis.worldToLocal(this.v1.copy(this.look)).sub(this.v2.set(0,.5,0)),this.yawLook+=(Se(Math.atan2(i.x,i.z),-.55,.55)-this.yawLook)*Math.min(1,t*6),this.pitchLook+=(Se(-Math.atan2(i.y,Math.hypot(i.x,i.z)),-.35,.3)-this.pitchLook)*Math.min(1,t*6)):(this.yawLook*=1-Math.min(1,t*3),this.pitchLook*=1-Math.min(1,t*3)),e.airborne&&(this.yawLook*=.9,this.pitchLook*=.9),e.scratch&&e.scratch!==this.scratchSeen&&this.feel(e.scratch.kind==="chin"?"thinking":"doubt",e.scratch.dur),this.scratchSeen=e.scratch,this.face.update(t,i?i.applyAxisAngle(this.v2.set(0,1,0),-this.yawLook):null,this.talkCh,e.asleep?e.breath:null),this.headCap+=((e.feet.some(d=>d.mode==="free")&&!e.lyingStill?1:0)-this.headCap)*Math.min(1,t*5);const r=da(this.pitchLook+this.face.nod,Math.min(this.pitchLook+this.face.nod,.03),this.headCap),o=da(this.face.roll,Se(this.face.roll,-.03,.03),this.headCap),a=1-Se(Math.abs(e.roll)/.6,0,1);this.turn.rotation.set(r*a,this.yawLook*a,o*a,"YXZ");const c=1+e.squash,l=1+e.stretch,h=c/Math.sqrt(l),u=l/Math.sqrt(c),f=1/(Math.sqrt(c)*Math.sqrt(l));this.squash.scale.set(f,h,u);for(const d of this.arms)d.shoulder.position.set(d.side*(.5*f+_i/2),.42*h,0);this.pelvis.updateMatrixWorld(!0),this.solveLegs(),this.solveArms(t),e.asleep&&(this.lastBreath<.55&&e.breath>=.55&&this.fx.z(this.headCentre(this.v1).add(this.v2.set(0,.62,0))),this.lastBreath=e.breath),this.fx.update(t)}inHead(t,e,n=!1){const i=this.squash.worldToLocal(this.v4.copy(t)),r=n?this.motion.headDrop:this.motion.hipDrop;return Math.abs(i.x)<.5+e&&i.y>.02-r&&i.y<1+e-r&&Math.abs(i.z)<.5+e}outOfBody(t,e,n,i){const r=t.parent,o=i?this.motion.hipDrop:this.motion.headDrop;for(let a=0;a<24;a++){let c=-1,l=0;const h=e(),u=this.v3;for(let x=0;x<h.length;x++){const g=this.squash.worldToLocal(this.v4.copy(h[x]));if(!(Math.abs(g.x)<.5+n&&g.y>.02-o&&g.y<1+n-o&&Math.abs(g.z)<.5+n))continue;const m=[[.5+n-g.x,1,0,0],[g.x+.5+n,-1,0,0],[.5+n-g.z,0,0,1],[g.z+.5+n,0,0,-1],[1+n-o-g.y,0,1,0]];i&&m.push([g.y+o,0,-1,0]);let S=null;for(const E of m)!i&&this.v2.set(E[1],E[2],E[3]).transformDirection(this.squash.matrixWorld).y<-.6||(!S||E[0]<S[0])&&(S=E);S&&S[0]>l&&(l=S[0],c=x,u.set(S[1],S[2],S[3]))}if(c<0)return;u.transformDirection(this.squash.matrixWorld);const f=r.worldToLocal(this.v1.copy(h[c])),d=this.v2.copy(u).transformDirection(this.qm.copy(r.matrixWorld).invert()),p=Mi.subVectors(f,t.position).cross(d);if(p.lengthSq()<1e-8)return;t.quaternion.premultiply(this.qb.setFromAxisAngle(p.normalize(),.07))}}legPoints(t,e){const n=this.motion;return t.hip.updateMatrixWorld(!0),t.hip.localToWorld(e[0].set(0,-.4*n.thigh,0)),t.hip.localToWorld(e[1].set(0,-.75*n.thigh,0)),t.knee.getWorldPosition(e[2]),t.knee.localToWorld(e[3].set(0,-.5*n.shin,0)),t.ankle.getWorldPosition(e[4]),e}solveLegs(){const t=this.motion,e=this.pelvis.getWorldQuaternion(this.qa),n=this.qc.copy(e).invert();this.legs.forEach((i,r)=>{const o=t.feet[r],a=this.pelvis.worldToLocal(this.v1.copy(o.ankle)),c=this.v3.set(0,0,1).applyQuaternion(o.q).applyQuaternion(n),l=Math.atan2(c.x,c.z),h=i.side>0?Se(l,-.2,.7):Se(l,-.7,.2);if(h!==l){const w=Math.hypot(c.x,c.z);c.x=Math.sin(h)*w,c.z=Math.cos(h)*w}let u=o.q;if(o.mode!=="free"&&Math.abs(l-h)>os.twist*.85){const w=l-h-Math.sign(l-h)*os.twist*.85;u=this.qf.setFromAxisAngle(Un.set(0,1,0),-w).multiply(o.q)}const f=o.kneeOut,d=this.v2.copy(c).multiplyScalar(1-f*1.3).add(cn.set(i.side*(.12+1.2*f),ef(-a.y,t.L),0)),p=Qv.set(0,1,0).applyQuaternion(n);if(o.mode==="free"){const w=Se(Math.abs(t.roll)/(Math.PI/2),0,1);d.set(0,0,da(.6,1,w)).addScaledVector(p,1-.85*w);const P=Se(-a.z/.25,0,1);d.z+=1.6*P,d.addScaledVector(p,-.9*P)}const x=o.mode==="free"?Jv:Hh;Ci(i.hip.position,a,t.thigh,t.shin,d,i.hip.quaternion,i.knee.quaternion,x),o.mode!=="free"?this.kneeBelowHip(i,a,i.hip.position.y-.1,p.set(i.side,0,0)):this.kneeBelowHip(i,a,i.hip.position.y+.02,p.add(cn.set(i.side*.3,0,0)),x);const g=this.v3.set(0,-1,0).applyQuaternion(i.hip.quaternion),m=Math.atan2(g.z,-g.y),S=Math.asin(Se(g.x*i.side,-1,1)),E=Se(m,kr.back,kr.fwd),v=Se(S,o.mode==="free"?-.45:kr.inward,kr.out);if(E!==m||v!==S){const w=Je.set(i.side*Math.sin(v),-Math.cos(v)*Math.cos(E),Math.cos(v)*Math.sin(E));i.hip.quaternion.premultiply(this.qb.setFromUnitVectors(g,w))}o.mode==="free"&&this.kneeOverGround(i,a,x),this.outOfBody(i.hip,()=>this.legPoints(i,this.pts),.075,!0);const M=this.qb.copy(e).multiply(i.hip.quaternion).multiply(i.knee.quaternion);i.ankle.quaternion.copy(M.invert()).multiply(u),Vh(i.ankle.quaternion,[os.up,os.down],[-.35,os.twist],[-.3,os.side]),i.toes.rotation.set(Se(o.toe,-1.2,.5),0,0)})}kneeBelowHip(t,e,n,i,r=Hh){const o=this.motion,a=t.hip.position,c=this.v5.copy(e),l=this.v4.set(0,-o.thigh,0).applyQuaternion(t.hip.quaternion).add(a);if(l.y<=n)return;const h=this.v3.subVectors(c,a),u=h.length();if(u<1e-4)return;h.divideScalar(u);const f=this.v2.copy(a).addScaledVector(h,h.dot(this.v1.subVectors(l,a))),d=this.v1.subVectors(l,f),p=d.length();if(p<1e-4)return;d.divideScalar(p);const x=this.v4.crossVectors(h,d).normalize();x.dot(i)<0&&x.negate();let g=Math.PI/2;for(let S=1;S<=18;S++){const E=S/18*(Math.PI/2);if(f.y+p*(Math.cos(E)*d.y+Math.sin(E)*x.y)<=n){g=E;break}}const m=d.multiplyScalar(Math.cos(g)).addScaledVector(x,Math.sin(g));Ci(a,c,o.thigh,o.shin,m,t.hip.quaternion,t.knee.quaternion,r)}kneeOverGround(t,e,n){const i=this.motion,[r,o,a,c,l,h]=this.kg;if(t.hip.updateMatrixWorld(!0),t.knee.getWorldPosition(r),r.y>=this.world.groundAt(r.x,r.z)+_i/2)return;const u=t.hip.position,f=h.set(0,-i.thigh,0).applyQuaternion(t.hip.quaternion).add(u);l.subVectors(e,u);const d=l.length();if(d<1e-4)return;l.divideScalar(d),o.copy(u).addScaledVector(l,l.dot(a.subVectors(f,u))),a.subVectors(f,o);const p=a.length();if(p<1e-4)return;a.divideScalar(p),c.crossVectors(l,a).normalize(),c.dot(r.set(0,1,0).applyQuaternion(this.pelvis.getWorldQuaternion(this.qd).invert()))<0&&c.negate();let x=-1;for(let m=1;m<=24&&x<0;m++){const S=m/24*Math.PI;this.pelvis.localToWorld(h.copy(o).addScaledVector(a,p*Math.cos(S)).addScaledVector(c,p*Math.sin(S))),h.y>=this.world.groundAt(h.x,h.z)+_i/2&&(x=S)}if(x<0)return;const g=h.copy(a).multiplyScalar(Math.cos(x)).addScaledVector(c,Math.sin(x));Ci(u,e,i.thigh,i.shin,g,t.hip.quaternion,t.knee.quaternion,n)}armPoints(t,e){const n=this.a2;return t.shoulder.updateMatrixWorld(!0),t.shoulder.localToWorld(e[0].set(0,-.6*n,0)),t.elbow.getWorldPosition(e[1]),t.elbow.localToWorld(e[2].set(0,-.5*n,0)),t.wrist.getWorldPosition(e[3]),t.wrist.localToWorld(e[4].set(0,-.15/2-.02,0)),e}solveArms(t){const e=this.motion,n=this.a2,i=this.a2,r=n+i,o=d=>this.turn.worldToLocal(this.v1.copy(d)).x<0?0:1,a=[null,null],[c,l]=this.targets;if(c&&(a[o(c)]=c),l){const d=o(l);a[d]?Math.abs(this.turn.worldToLocal(this.v1.copy(l)).x)<.8?a[1-d]=l:Math.floor(this.clock/2.6)%2===1&&(a[d]=l):a[d]=l}this.showing=c&&a.includes(c)?a.includes(l)&&Math.floor(this.clock/2.6)%2===1?l:c:l;const h=e.idle,f=e.feet.some(d=>d.mode==="free")?this.turn.getWorldQuaternion(this.qd).invert():null;this.arms.forEach((d,p)=>{const x=e.arms[p],g=this.v2.set(d.side*.5,-.35,-1);if(f){g.set(0,1,0).applyQuaternion(f);const y=this.v3.set(0,.5,0).sub(d.shoulder.position).normalize();g.dot(y)>.3&&g.set(0,1,0),g.multiplyScalar(.45).add(Je.set(0,0,-1))}d.fk[0].setFromEuler(new vn(x.pitch,0,d.side*Math.max(.04,x.out))),d.fk[1].setFromAxisAngle(cn.set(1,0,0),-Se(x.elbow,0,Bs));let m=0,S=!1;const E=x.reach??(h?a[p]:null);if(E){const y=d.shoulder.position;if(x.reach&&x.flat){S=!0;const R=d.shoulder.getWorldPosition(this.v3),L=d.elbow.getWorldPosition(Kr);d.palm.copy(E);const U=fs.set(E.x-R.x,0,E.z-R.z);U.lengthSq()>1e-6&&U.normalize();const V=Ln.set(E.x-L.x,0,E.z-L.z).addScaledVector(U,.25);V.lengthSq()<1e-4&&V.set(Math.sin(e.yaw),0,Math.cos(e.yaw)),V.normalize(),d.palmDir.lerp(V,d.flatW<.05?1:Math.min(1,t*10)).normalize();const H=this.v1.copy(E).add(Je.set(0,ks.thick/2+.01,0)).addScaledVector(d.palmDir,-.095),G=this.turn.worldToLocal(H);Ci(y,G,n,i,g,d.ik[0],d.ik[1],Bs)}else{const R=this.turn.worldToLocal(this.v1.copy(E));if(x.reach||E===l){if(E===l){const L=d.shoulder.getWorldPosition(hl),U=fs.set(Se(L.x,l.x-.5,l.x+.5),Se(L.y,l.y-.5,l.y+.5),Se(L.z,l.z-.5,l.z+.5));U.addScaledVector(Ln.subVectors(L,U).normalize(),.06),this.turn.worldToLocal(R.copy(U))}R.distanceTo(y)<=r*.98||x.reach?Ci(y,R,n,i,g,d.ik[0],d.ik[1],Bs):this.pointAlong(d,R)}else this.pointAlong(d,R)}m=x.reach?x.reachW:1}const v=e.scratch;if(v&&v.side===p&&v.w>0&&x.reach){const y=d.shoulder.position,R=e.headDrop,L=this.turn.worldToLocal(this.sc1.copy(x.reach).add(Je.set(0,ks.thick/2+.01,0)).addScaledVector(d.palmDir,-.095)),U=v.kind==="chin"?this.sc2.set(d.side*(.14+.03*v.wiggle),-R-.15,.62):this.sc2.set(d.side*.4,1.14-R,-.04+.05*v.wiggle);let V=L;if(v.kind==="chin")V=L.lerp(U,v.w);else{const H=this.sc3.set(d.side*.9,1.25-R,.1),G=v.w,J=1-G;V=L.multiplyScalar(J*J).addScaledVector(H,2*G*J).addScaledVector(U,G*G)}g.lerp(v.kind==="chin"?cn.set(d.side,-.3,.1):cn.set(d.side,.35,-.15),v.w),Ci(y,V,n,i,g,d.ik[0],d.ik[1],Bs),S=v.w<.05,m=1}d.aimW+=((E?m:0)-d.aimW)*Math.min(1,t*(x.reach?30:7)),d.flatW+=((S?1:0)-d.flatW)*Math.min(1,t*12),d.shoulder.quaternion.slerpQuaternions(d.fk[0],d.ik[0],d.aimW),d.elbow.quaternion.slerpQuaternions(d.fk[1],d.ik[1],d.aimW),d.shoulder.updateMatrixWorld(!0);const M=this.pushOut(d.elbow.getWorldPosition(this.v1),.09,d.shoulder.getWorldPosition(this.v3));if(d.pushE=M?1:0,M&&d.pushETo.copy(M),d.pushE>0){const y=this.turn.worldToLocal(this.v1.copy(d.pushETo)).sub(d.shoulder.position);po(y,g,this.qa),d.shoulder.quaternion.slerp(this.qa,d.pushE)}d.shoulder.updateMatrixWorld(!0);const w=d.wrist.localToWorld(this.v1.set(0,-.15/2-.02,0)),P=S?null:this.pushOut(w,.13,d.shoulder.getWorldPosition(this.v3));if(P?(d.pushTo.copy(P),d.pushN.subVectors(P,w).normalize(),d.push=1):d.push=0,d.push>0){const y=this.turn.worldToLocal(this.v3.copy(d.pushTo).add(d.pushN)).sub(this.turn.worldToLocal(this.v1.copy(d.pushTo)));y.multiplyScalar(2).add(this.v1.set(0,-.3,-.6));const R=this.turn.worldToLocal(this.v1.copy(d.pushTo));Ci(d.shoulder.position,R,n,i,y,this.qa,this.qb,Bs),d.shoulder.quaternion.slerp(this.qa,d.push),d.elbow.quaternion.slerp(this.qb,d.push)}d.aimW>.5&&this.elbowClear(d),this.outOfBody(d.shoulder,()=>this.armPoints(d,this.pts),.045,!1);const _=this.qa.setFromAxisAngle(cn.set(1,0,0),Se(-.1-.05*x.vp,-.35,.35));if(d.flatW>.01){d.elbow.updateMatrixWorld(!0);const y=d.elbow.getWorldQuaternion(this.qb);cn.set(0,this.v3.set(1,0,0).applyQuaternion(y).y<0?-1:1,0),Je.copy(d.palmDir).negate(),Un.crossVectors(cn,Je).normalize(),Je.crossVectors(Un,cn).normalize(),fo.makeBasis(cn,Je,Un);const R=this.qc.setFromRotationMatrix(fo),L=y.invert().multiply(R);Vh(L,[-.45,fa.side],[-1.6,fa.turn],[-1.55,fa.flex],"YZX"),d.wrist.quaternion.slerpQuaternions(_,L,d.flatW)}else d.wrist.quaternion.copy(d.aimW>.5?d.wrist.quaternion.identity():_)})}elbowClear(t){const e=()=>this.armPoints(t,this.pts).some(c=>this.inHead(c,.01,!0));if(!e())return;const n=t.shoulder.position,i=this.turn.worldToLocal(t.wrist.getWorldPosition(this.v4)),r=this.v5.subVectors(i,n);if(r.lengthSq()<1e-6)return;r.normalize();const o=this.turn.worldToLocal(t.elbow.getWorldPosition(this.v3)).sub(n),a=Mi.crossVectors(r,o).x*t.side>=0?1:-1;for(let c=0;c<12;c++){t.shoulder.quaternion.premultiply(this.qb.setFromAxisAngle(r,a*.13));const l=t.elbow.getWorldPosition(this.v3);if(l.y<this.world.groundAt(l.x,l.z)+.08){t.shoulder.quaternion.premultiply(this.qb.setFromAxisAngle(r,-a*.13));return}if(!e())return}}pointAlong(t,e){const n=Mi.subVectors(e,t.shoulder.position);po(n,this.v2.set(t.side*.5,-.35,-1),t.ik[0]),t.ik[1].setFromAxisAngle(cn.set(1,0,0),-.08)}pushOut(t,e=.07,n){if(!this.world.solidAt(t.x,t.y,t.z))return null;const i=Math.round(t.x),r=Math.round(t.y),o=Math.round(t.z);let a=null,c=1/0;for(const[l,h,u]of[[1,0,0],[-1,0,0],[0,1,0],[0,0,1],[0,0,-1]]){if(this.world.solidAt(i+l,r+h,o+u))continue;const f=l?(i+l*.5-t.x)*l:h?r+.5-t.y:(o+u*.5-t.z)*u,d=n?l*(n.x-t.x)+h*(n.y-t.y)+u*(n.z-t.z):0,p=f-Math.max(0,d)*.8;p<c&&(c=p,a=new F(t.x+l*(f+e),t.y+h*(f+e),t.z+u*(f+e)))}return a}debug(){const t=this.motion,e=this.legs.map((a,c)=>a.ankle.getWorldPosition(new F).distanceTo(t.feet[c].ankle));let n=0,i=0;const r=a=>{this.world.solidAt(a.x,a.y,a.z)&&n++},o=[0,1,2,3,4].map(()=>new F);for(const a of this.legs)this.legPoints(a,o),[o[2],o[3],o[4]].forEach(r),i+=o.filter(c=>this.inHead(c,0)).length;for(const a of this.arms)this.armPoints(a,o),[o[1],o[4]].forEach(r),i+=o.filter(c=>this.inHead(c,0)).length;return{footErr:e,inside:n,self:i,modes:t.feet.map(a=>a.mode)}}dispose(){this.face.dispose(),this.fx.dispose();for(const t of this.own)t.dispose()}}const tM="Welcome to Robyn Miller's Popup Portrait Gallery! I'm your host. Getting around is easy—just use the {W} key to move forward. To look around, use your mouse! Or the {LEFT} and {RIGHT} keys.",eM="Click anywhere to look around.",nM="Just click anywhere. Nothing will break. Probably.",iM="Press {W} to walk. The door is right behind me.",sM="Click anywhere to carry on.",rM="That's it! This way.",oM="Walk up close to a painting and click to see it full screen. Click again to put it back.",aM="Hi, Welcome to Robyn Miller's gallery. Feel free to take a look around.",lM="You are currently one of {x} people in the gallery.",cM="Things are quiet. You are the only person in the gallery.",hM=["You may think that I'm not an appropriate host for an art gallery? Hm. Well maybe you're not an appropriate guest for our gallery!","My hat? I'm celebrating life!","Music? I'll see what I can find.","Take your time. The paintings aren't going anywhere. Neither am I.","Robyn painted every one of these. I just stand near them looking important.","Click on a painting to see it up close. I recommend it. I've seen them all up close. Very close.","Some people walk through a gallery in five minutes. Some take five hours. I've timed them.","Do you see the faces? I see faces everywhere. Even in the floor.","Between you and me, that one over there looked at me funny this morning.","Shh. The paintings are thinking.","I polished this floor myself. With my feet.","Every gallery needs a host. This one got me. Lucky gallery.","Art is long and I am short.","Stand back a little. Some paintings like their space.","I'm not allowed to touch the paintings. I'm barely allowed to touch the walls.","That one's my favourite. They're all my favourite.","Is it just me, or did that painting blink?","The lights in here are very flattering. To the paintings. And to me.","I've been told I have an excellent eye for art. I have two, actually.","Feel free to linger. Lingering is encouraged here.","If anyone asks, I'm security.","You can tell a lot from a face. Mine says 'party'.","There's no gift shop. I asked.","If you get lost, follow the walls. That's what I do.","Look closer. Then look from farther away. Then closer again. That's the trick.","Quiet in here, isn't it? I like it that way. Mostly.","Paintings get lonely if nobody looks at them. I made that up. But still.","Mind the doorways. They're bigger than they look. Or I'm smaller.","All the walls in here are white. I campaigned for polka dots. I lost.","Hm. You have good taste. I can tell by the way you stand.","This is the part where I say something profound. ... I'll get back to you.","I've counted the paintings twice. I got two different answers.","If you need me, I'll be right behind you. Always. Right behind you.","Sometimes I sit and stare at one for an hour. It doesn't mind.","Do you think they can see us? I think they can see us.","Not to brag, but I've been in every room of this gallery. Several times. Today.","Art is best enjoyed slowly. Like soup.","I'm told I add a certain something to the place. Nobody has said what.","Go ahead and stare. That's what they're for.","What do you think that one is about? I have a theory, but it's mostly about sandwiches.","I used to be just a block. Now I'm a block with legs. That's progress.","Every time someone visits, I feel taller. I'm not, though.","Close your eyes. Now open them. See? Still art.","Please don't lick the paintings. I'm not saying you would. I'm just saying.","I like this room. I like the other rooms too. I'm very agreeable.","That's a nice one. I'd hang it in my house, if I had a house. Or walls.","Some galleries have audio guides. You have me. You're welcome.","Ah, I was hoping you'd come this way.","Hmm-hmm-hmmm. Sorry. I hum when I'm happy.","Do you paint? You have a painter's way of squinting.","If these walls could talk... well, they'd probably just say 'white'.","Look at that brushwork! I think. I'm not entirely sure what brushwork is.","Did you see the little card next to each one? I read them all. Twice.","No hurry. I'm on gallery time.","The floor reflects the paintings. So technically you're seeing everything twice. You're welcome again.","I can't decide if that one is smiling or frowning. Maybe both. Like me before breakfast.","If you like one, stand in front of it a little longer. It'll like you back.","Some visitors talk to the paintings. I don't judge. I talk to them too.","I'm a professional. I've hosted at least one visitor before. Possibly two.","The best spot in the house is wherever you happen to be standing.","Squint a little. Go on. See how the colours move? That's free. No extra charge.","I tried painting once. It painted me back.","Don't mind me. I'm just here for the ambience. I am the ambience.",'Did you know the word "gallery" means a long room? I looked it up. I had time.',"If you hear snoring later, that wasn't me.","I'd tell you which one is the most famous, but they'd all get jealous.","This one was hung at exactly the right height. I checked with my hat.","You walk very gracefully. For a visitor.","Every painting here is somebody. Even the ones that look like nobody.","I like to think the paintings look forward to visitors. I know I do."],uM=["Yes? Can I help you?","Hey! Look at the art, not at me.","That tickles.","I'm working, you know.","Hello again!","Personal space! I'm very small. I need a lot of it.","Ooh. A fan.","Careful. I'm delicate. Like a watercolour.","Me? I'm not part of the exhibition. Or am I?","You found me! I wasn't hiding. Much.","Hmm? Oh, sorry. I was admiring that one.","My hat? I'm celebrating life!","Please do not poke the host.","Is this about the hat? It's about the hat, isn't it.","I'm flattered. Truly.","Music? I'll see what I can find."],fM=["Hm? Oh! I wasn't asleep. I was resting my eyes.","I'm up! I'm up!","Was I snoring? I don't snore. That was the ventilation.","Huh? Who? Oh. You. Welcome back."],dM=["Back again! I knew you would be.","Welcome back. I kept everything just where it was.","Oh good, you're back. It's lonely in here without you."],pM=["Leaving already? Come back soon!","Goodbye! Thank you for visiting.","Off you go, then. I'll keep an eye on things.","Bye! The paintings will miss you. So will I. A little.","Thanks for coming. Mind the white out there. There is a lot of it."],mM=["Lovely, isn't it?","Up close they get even stranger. In the best way.","Good choice.","That's one of my favourites. Don't tell the others.","I always see something new in that one."],gM=["Oh! Someone else just came in. There are {x} of you now.","Another visitor! That makes {x} of you."],xM=["Somebody just left. Now there are {x} of you."],_M=["Somebody just left. It's just you and me now."];function gi(s,t){let e=s.filter(i=>!t.has(i));if(!e.length){for(const i of s)t.delete(i);e=s}const n=e[Math.floor(Math.random()*e.length)];return t.add(n),n}const _e=.2,vM=Math.sqrt(9.81/(22*_e)),MM={...Cv,shape:1,eyeSize:0,eyeSpacing:1,eyeHeight:.23,browWeight:0,browHeight:1,noseLength:0,noseHeight:.49,mouthWidth:.28,mouthColor:.22,cheeks:.46,skin:0,hairColor:.03482587064676617,hat:"birthday"},Hr=(s,t,e,n=new F)=>n.set(s/_e,t/_e-.5,e/_e),Wh=(s,t=new F)=>t.set(s.x*_e,(s.y+.5)*_e,s.z*_e);class yM{constructor(t,e,n){D(this,"scene",new El);D(this,"cam",new je);D(this,"rig");D(this,"count",null);D(this,"onEnter",()=>{});D(this,"onLeave",()=>{});D(this,"el");D(this,"textEl");D(this,"bubble",null);D(this,"onKey",()=>{});D(this,"hidden",!1);D(this,"wasLocked",!1);D(this,"queue",[]);D(this,"used",new Set);D(this,"grid",null);D(this,"stage","waiting");D(this,"inv",{hello:!1,lookSaid:!1,lookAt:0,lockedAt:0,nudgedClick:!1,nudgedWalk:!1,leading:!1,startD:-1});D(this,"inside",!1);D(this,"wasInside",!1);D(this,"wasOut",!0);D(this,"quiet",0);D(this,"resting","no");D(this,"soughtRest",!1);D(this,"idleIn",6);D(this,"remarkIn",45);D(this,"followIn",0);D(this,"glanceIn",2);D(this,"glanceAt",null);D(this,"dest",null);D(this,"last",{x:0,z:0,yaw:0,pitch:0});D(this,"countSaid",0);D(this,"lastCrowd",-999);D(this,"clock",0);D(this,"v1",new F);D(this,"v2",new F);this.gallery=t,this.player=e,this.main=n;const i={groundAt:(o,a)=>this.wallAt(o*_e,a*_e)?this.gallery.arch.H/_e:-.5,solidAt:(o,a,c)=>{const l=(a+.5)*_e;return l<0?!0:l<this.gallery.arch.H&&this.wallAt(o*_e,c*_e)}};this.rig=new jv(MM,3,i),this.scene.add(this.rig.root,this.rig.fx.group),this.scene.add(new Qd(16777215,13815492,1.9));const r=new ep(16777215,1.5);r.position.set(.4,1,.7),this.scene.add(r),this.placeOutside(),this.el=document.createElement("div"),this.el.className="host-bubble",this.textEl=document.createElement("span"),this.el.append(this.textEl),this.textEl.addEventListener("click",o=>{var c;const a=(c=o.target.closest(".hk"))==null?void 0:c.dataset.k;a&&(o.preventDefault(),o.stopPropagation(),this.onKey(a),this.endBubble())}),document.body.append(this.el),this.last={x:e.pos.x,z:e.pos.z,yaw:e.yaw,pitch:e.pitch}}get arch(){return this.gallery.arch}wallAt(t,e){return this.arch.solids.some(n=>t>n.x0-.01&&t<n.x1+.01&&e>n.z0-.01&&e<n.z1+.01)}get at(){return{x:this.rig.pos.x*_e,z:this.rig.pos.z*_e}}doorSpot(){const t=this.arch.entrance;return{x:(t.a+t.b)/2+.6,z:t.z-1.4}}outsideSpot(){const t=this.arch.entrance;return{x:(t.a+t.b)/2+.7,z:t.z+this.gallery.data.layout.outline.t+3.2}}placeOutside(){const t=this.outsideSpot();this.rig.place(t.x/_e,t.z/_e,0),this.dest=null}gridFor(){if(this.grid&&this.grid.arch===this.arch)return this.grid;const t=this.arch,e=t.inner,n=.25,i=.32,r=this.gallery.data.layout.outline.t,o=7,a=e.x0-r-2.5,c=e.z0,l=Math.ceil((e.x1-e.x0+2*(r+2.5))/n),h=Math.ceil((e.z1-e.z0+r+o)/n),u=new Uint8Array(l*h);for(let f=0;f<h;f++)for(let d=0;d<l;d++){const p=a+(d+.5)*n,x=c+(f+.5)*n,g=p>e.x0+i&&p<e.x1-i&&x>e.z0+i&&x<e.z1-i,m=x>e.z1+r+i,S=p>t.entrance.a+i&&p<t.entrance.b-i&&x>e.z1-i-.01&&x<e.z1+r+i+.01;!g&&!m&&!S||t.solids.some(E=>p>E.x0-i&&p<E.x1+i&&x>E.z0-i&&x<E.z1+i)||(u[f*l+d]=1)}return this.grid={arch:t,x0:a,z0:c,nx:l,nz:h,c:n,free:u},this.grid}freeAt(t,e){const n=this.gridFor(),i=Math.floor((t-n.x0)/n.c),r=Math.floor((e-n.z0)/n.c);return i>=0&&r>=0&&i<n.nx&&r<n.nz&&n.free[r*n.nx+i]===1}clear(t,e,n,i){const r=Math.hypot(n-t,i-e),o=Math.max(1,Math.ceil(r/.1));for(let a=0;a<=o;a++)if(!this.freeAt(t+(n-t)*a/o,e+(i-e)*a/o))return!1;return!0}route(t,e){const n=this.gridFor(),i=this.at,r=(v,M)=>[Math.floor((v-n.x0)/n.c),Math.floor((M-n.z0)/n.c)];let[o,a]=r(i.x,i.z);const[c,l]=r(t,e),h=(v,M)=>v>=0&&M>=0&&v<n.nx&&M<n.nz&&n.free[M*n.nx+v]===1;if(!h(c,l))return null;if(!h(o,a)){let v=null,M=1/0;for(let w=-4;w<=4;w++)for(let P=-4;P<=4;P++)h(o+P,a+w)&&P*P+w*w<M&&(M=P*P+w*w,v=[o+P,a+w]);if(!v)return null;[o,a]=v}const u=n.nx*n.nz,f=new Float32Array(u).fill(1/0),d=new Int32Array(u).fill(-1),p=(v,M)=>{const w=Math.abs(v-c),P=Math.abs(M-l);return Math.max(w,P)+.414*Math.min(w,P)},x=[[p(o,a),a*n.nx+o]];f[a*n.nx+o]=0;const g=l*n.nx+c;for(;x.length;){let v=0;for(let _=1;_<x.length;_++)x[_][0]<x[v][0]&&(v=_);const[,M]=x.splice(v,1)[0];if(M===g)break;const w=M%n.nx,P=Math.floor(M/n.nx);for(const[_,y]of[[1,0],[-1,0],[0,1],[0,-1],[1,1],[1,-1],[-1,1],[-1,-1]]){const R=w+_,L=P+y;if(!h(R,L)||_&&y&&(!h(w+_,P)||!h(w,P+y)))continue;const U=L*n.nx+R,V=f[M]+(_&&y?1.414:1);V<f[U]&&(f[U]=V,d[U]=M,x.push([V+p(R,L),U]))}}if(!isFinite(f[g]))return null;const m=[];for(let v=g;v!==-1;v=d[v])m.unshift({x:n.x0+(v%n.nx+.5)*n.c,z:n.z0+(Math.floor(v/n.nx)+.5)*n.c});m[m.length-1]={x:t,z:e};const S=[i];let E=0;for(;E<m.length-1;){let v=m.length-1;const M=S[S.length-1];for(;v>E+1&&!this.clear(M.x,M.z,m[v].x,m[v].z);)v--;S.push(m[v]),E=v}return S}goTo(t,e){const n=this.route(t,e);if(!n||n.length<2)return!1;let i=0;for(let o=1;o<n.length;o++)i+=Math.hypot(n[o].x-n[o-1].x,n[o].z-n[o-1].z);if(i<.25)return!1;const r=i>3.2?"bound":i>1.6?"run":"walk";return this.rig.travel(n.slice(1).map(o=>({x:o.x/_e,z:o.z/_e})),r,()=>{this.dest=null}),this.dest={x:t,z:e},!0}seen(t,e){const n=this.player.pos;return!Ui(this.arch.solids,n.x,n.z,t,e)}goodSpot(t,e){const n=this.player.pos,i=Math.hypot(t-n.x,e-n.z),r=-Math.sin(this.player.yaw),o=-Math.cos(this.player.yaw),a=((t-n.x)*r+(e-n.z)*o)/Math.max(i,1e-6);return i>.75&&i<3.4&&a>-.2&&this.seen(t,e)}follow(){const t=this.player.pos,e=this.at;if(this.goodSpot(e.x,e.z)&&!this.dest)return;const n=-Math.sin(this.player.yaw),i=-Math.cos(this.player.yaw),r=Math.cos(this.player.yaw),o=-Math.sin(this.player.yaw),a=[[1.5,.9],[1.5,-.9],[1,1.4],[1,-1.4],[.3,1.3],[.3,-1.3],[2.2,0],[2.4,1.2],[2.4,-1.2],[-.6,1],[-.6,-1]];let c=null,l=1/0;if(a.forEach(([u,f],d)=>{const p=t.x+n*u+r*f,x=t.z+i*u+o*f;if(!this.freeAt(p,x)||!this.seen(p,x))return;const g=Math.hypot(p-e.x,x-e.z)+d*.15;g<l&&(l=g,c={x:p,z:x})}),!c)return;const h=c;this.dest&&Math.hypot(this.dest.x-h.x,this.dest.z-h.z)<.8||this.goTo(h.x,h.z)}say(t,e){this.bubble||this.queue.length?this.queue.push({text:t,feel:e}):this.start(t,e)}start(t,e){if(t==="{count}"&&(t=this.count===null?"{x}":this.count<=1?cM:lM),t.includes("{x}")&&this.count===null){const r=this.queue.shift();r&&this.start(r.text,r.feel);return}const n=t.replace("{x}",String(this.count)).split(/\{(W|LEFT|RIGHT)\}/).map((r,o)=>(o%2,r)).filter(r=>r!==""),i=n.map(r=>ma(r)?"o":r).join("");this.bubble={text:i,segs:n,shown:0,drawn:0,until:1/0},this.textEl.textContent="",this.el.classList.add("on"),e&&this.rig.feel(e,2.5)}endBubble(){this.bubble=null,this.el.classList.remove("on");const t=this.queue.shift();t&&this.start(t.text,t.feel)}grow(t,e){let n=0;for(const i of t.segs){const r=ma(i)?1:i.length,o=Math.max(t.drawn,n),a=Math.min(e,n+r);if(a>o)if(ma(i)){const c=document.createElement("button");c.className="hk",c.dataset.k=i,c.tabIndex=-1,c.title=bM[i],c.textContent=SM[i],this.textEl.append(c)}else{const c=i.slice(o-n,a-n),l=this.textEl.lastChild;l&&l.nodeType===Node.TEXT_NODE?l.appendData(c):this.textEl.append(c)}n+=r}t.drawn=e}countLine(){return"{count}"}poke(){this.quiet=0,this.wake(),!this.bubble&&(this.say(gi(uM,this.used),Math.random()<.5?"pleased":"surprised"),this.rig.busy()||this.rig.perform(Math.random()<.5?"wave":"spin"))}looked(){this.stage!=="company"||this.bubble||Math.random()>.35||!this.visible(6)||this.say(gi(mM,this.used),"pleased")}setCount(t){const e=this.count;this.count=t,!(e===null||t===e||this.stage!=="company"||this.clock-this.lastCrowd<60||this.resting!=="no")&&(this.lastCrowd=this.clock,t>e?this.say(gi(gM,this.used),"excited"):this.say(t<=1?_M[0]:gi(xM,this.used),"curious"))}hit(t){const e=new il(Hr(t.ray.origin.x,t.ray.origin.y,t.ray.origin.z),t.ray.direction.clone(),0,t.far/_e);return this.rig.hit(e)}visible(t){const e=this.player.pos,n=this.at;if(Math.hypot(n.x-e.x,n.z-e.z)>t||!this.seen(n.x,n.z))return!1;const i=Wh(this.rig.headCentre(this.v1),this.v2).project(this.main);return i.z<1&&Math.abs(i.x)<.95&&Math.abs(i.y)<.95}wake(){this.resting==="no"&&this.rig.resting==="stand"||(this.resting==="asleep"&&(this.rig.feel("surprised",1.2),this.rig.blink(),Math.random()<.6&&this.say(gi(fM,this.used))),this.resting="no",this.soughtRest=!1,this.rig.sleep(!1),this.rig.rest("stand"),this.rig.mood("calm"))}update(t){this.clock+=t;const e=this.player,n=this.rig,i=this.arch,r=Math.hypot(e.pos.x-this.last.x,e.pos.z-this.last.z)>.004||Math.abs(e.yaw-this.last.yaw)+Math.abs(e.pitch-this.last.pitch)>.003;this.last={x:e.pos.x,z:e.pos.z,yaw:e.yaw,pitch:e.pitch},this.quiet=r?0:this.quiet+t;const o=i.inner;this.inside=e.pos.x>o.x0&&e.pos.x<o.x1&&e.pos.z>o.z0&&e.pos.z<o.z1-.1,this.inside&&!this.wasInside&&(this.onEnter(),this.wake(),this.stage==="waiting"&&!this.countSaid?(this.stage="greeting",this.queue=[],n.turnTo(Math.atan2(e.pos.x-this.at.x,e.pos.z-this.at.z)),n.perform("wave"),this.say(aM,"happy"),this.say(this.countLine(),"pleased"),this.say(oM,"pleased"),this.countSaid=1):this.stage==="waiting"&&(this.stage="company",this.say(gi(dM,this.used),"happy")));const a=e.pos.z>o.z1+.3;if(a&&!this.wasOut&&this.stage!=="waiting"){this.onLeave(),this.stage==="company"&&(this.queue=[],this.wake(),this.say(gi(pM,this.used),"happy"),this.rig.perform("wave")),this.stage="waiting";const f=this.outsideSpot();this.goTo(f.x,f.z)}this.wasInside=this.inside,this.wasOut=a,this.stage==="waiting"&&!this.inside&&this.invite();const c=e.locked;this.wasLocked&&!c&&!this.hidden&&!this.bubble&&this.say(sM,"pleased"),this.wasLocked=c,this.stage==="greeting"&&!this.bubble&&!this.queue.length&&(this.stage="company",this.remarkIn=35+Math.random()*30);const l=this.bubble;if(l){l.shown=Math.min(l.text.length,l.shown+t*34);const f=Math.ceil(l.shown);f>l.drawn&&this.grow(l,f),l.until===1/0&&l.shown>=l.text.length&&(l.until=this.clock+Math.max(3.2,l.text.length*.06)),this.clock>l.until&&this.endBubble()}const h=!!l&&l.shown<l.text.length;n.talk(h?l.text[Math.max(0,Math.ceil(l.shown)-1)]:null),r&&(this.resting!=="no"||n.resting!=="stand")&&this.wake();const u=Hr(this.main.position.x,this.main.position.y,this.main.position.z,new F);if(this.stage==="company"&&this.resting==="no"&&((this.followIn-=t)<=0&&(this.followIn=.45,n.resting==="stand"&&this.follow()),!this.bubble&&(this.remarkIn-=t)<=0&&(this.remarkIn=45+Math.random()*45,this.visible(5.5)&&this.quiet<50&&this.say(gi(hM,this.used),Math.random()<.5?"pleased":"curious"))),this.resting!=="no"||n.resting!=="stand")(this.glanceIn-=t)<=0&&(this.glanceIn=3+Math.random()*4,this.glanceAt=this.somethingToLookAt(u)),n.lookAt(this.resting==="asleep"?null:h?u:this.glanceAt),this.resting==="kneeling"&&(this.quiet>=180?(this.resting="asleep",n.resting==="kneel"&&n.rest("lie",Math.atan2(u.x-n.pos.x,u.z-n.pos.z))?n.mood("sleepy"):(n.mood("asleep"),n.sleep(!0))):this.quiet>120&&(this.idleIn-=t)<=0&&(this.idleIn=9+Math.random()*6,n.feel("yawn",1.8))),this.resting==="asleep"&&n.resting==="lie"&&n.feeling!=="asleep"&&(n.mood("asleep"),n.sleep(!0));else if(n.busy())n.lookAt(h?u:null);else if(n.turnTo(Math.atan2(u.x-n.pos.x,u.z-n.pos.z)),(this.glanceIn-=t)<=0&&(this.glanceIn=2.2+Math.random()*3.5,this.glanceAt=this.somethingToLookAt(u)),n.lookAt(h?u:this.glanceAt),this.stage==="company"||this.stage==="waiting"){if(this.quiet>9&&this.quiet<25&&(this.idleIn-=t)<=0)this.idleIn=7+Math.random()*4,Math.random()<.35&&n.perform(Math.random()<.5?"spin":"jump");else if(this.quiet>=25&&this.quiet<60)n.mood("bored"),(this.idleIn-=t)<=0&&(this.idleIn=6+Math.random()*5,n.perform(Math.random()<.5?"sigh":"tap"));else if(this.quiet>=60&&!this.bubble){const f=Math.atan2(u.x-n.pos.x,u.z-n.pos.z),d=n.roomAt(n.pos.x,n.pos.z,f);if(!(d!=null&&d.lie)&&!this.soughtRest){this.soughtRest=!0;const p=this.restSpot(f);if(p&&this.goTo(p.x,p.z))return this.after(t)}this.resting="kneeling",n.mood("calm"),n.rest("kneel",f)}}this.after(t)}invite(){const t=this.player,e=this.inv,n=t.locked;if(this.countSaid||e.leading||(!e.hello&&this.clock>1.2&&(e.hello=!0,this.rig.perform("wave"),this.say(tM,"happy")),!e.hello))return;const i=!this.bubble&&!this.queue.length;n&&!e.lockedAt&&(e.lockedAt=this.clock),!n&&!e.lockedAt&&!e.lookSaid&&i&&(e.lookSaid=!0,e.lookAt=this.clock,this.say(eM,"pleased")),!n&&!e.lockedAt&&e.lookSaid&&!e.nudgedClick&&this.clock-e.lookAt>20&&i&&(e.nudgedClick=!0,this.say(nM,"curious"));const r=this.arch.entrance,o=Math.hypot(t.pos.x-(r.a+r.b)/2,t.pos.z-r.z);if(e.startD<0&&(e.startD=o),o<e.startD-1.2){e.leading=!0,this.wake(),this.queue=[],this.bubble&&(this.bubble.until=Math.min(this.bubble.until,this.clock+.5)),this.say(rM,"excited");const a=this.doorSpot();this.goTo(a.x,a.z);return}e.lockedAt&&!e.nudgedWalk&&this.clock-e.lockedAt>16&&o>e.startD-.3&&i&&(e.nudgedWalk=!0,this.say(iM,"curious"))}after(t){this.rig.update(t*vM),this.place()}restSpot(t){var n;const e=this.at;for(let i=.4;i<=2.4;i+=.4)for(let r=0;r<12;r++){const o=r/12*Math.PI*2,a=e.x+Math.cos(o)*i,c=e.z+Math.sin(o)*i;if(!(!this.freeAt(a,c)||!this.seen(a,c))&&(n=this.rig.roomAt(a/_e,c/_e,t))!=null&&n.lie)return{x:a,z:c}}return null}somethingToLookAt(t){const e=Math.random();if(e<.45)return t.clone();const n=this.at;let i=null,r=e<.75?2.5:6;for(const o of this.gallery.placed){const a=Math.hypot(o.centre[0]-n.x,o.centre[2]-n.z);a<r&&this.seen(o.centre[0],o.centre[2])&&(r=a,i=Hr(o.centre[0],o.centre[1],o.centre[2]))}return i??t.clone()}place(){const t=this.main;if(Hr(t.position.x,t.position.y,t.position.z,this.cam.position),this.cam.quaternion.copy(t.quaternion),(this.cam.fov!==t.fov||this.cam.aspect!==t.aspect||this.cam.near!==t.near/_e)&&(this.cam.fov=t.fov,this.cam.aspect=t.aspect,this.cam.near=t.near/_e,this.cam.far=t.far/_e,this.cam.updateProjectionMatrix()),this.cam.updateMatrixWorld(),this.bubble){const e=Wh(this.rig.headTop(this.v1),this.v2).project(t),n=innerWidth,i=innerHeight;let r=(e.x*.5+.5)*n,o=(-e.y*.5+.5)*i;const a=e.z>1;a&&(r=n/2,o=i-120),r=Math.max(170,Math.min(n-170,r)),o=Math.max(90,Math.min(i-30,o)),this.el.style.left=`${r}px`,this.el.style.top=`${o}px`,this.el.classList.toggle("free",a||!this.visible(30))}}render(t){t.autoClear=!1,t.render(this.scene,this.cam),t.autoClear=!0}hide(t){this.hidden=t,this.el.style.visibility=t?"hidden":""}get obstacle(){const t=this.at;return{x:t.x,z:t.z,r:.22}}}const ma=s=>s==="W"||s==="LEFT"||s==="RIGHT",SM={W:"W",LEFT:"←",RIGHT:"→"},bM={W:"Step forward",LEFT:"Turn left",RIGHT:"Turn right"};var Xh;class wM{constructor(t){D(this,"count",null);D(this,"onCount",()=>{});D(this,"id",(((Xh=crypto.randomUUID)==null?void 0:Xh.call(crypto))??String(Math.random()).slice(2)).slice(0,36));D(this,"inside",!1);D(this,"timer",0);D(this,"room","");this.url=t,t&&addEventListener("pagehide",()=>{this.inside&&this.beacon()})}enter(){!this.url||this.inside||(this.inside=!0,this.ping(),this.timer=window.setInterval(()=>this.ping(),2e4))}exit(){!this.url||!this.inside||(this.inside=!1,clearInterval(this.timer),this.beacon())}async ping(){try{const t=await fetch(`${this.url}/ping${this.room}`,{method:"POST",headers:{"content-type":"text/plain"},body:this.id});if(!t.ok||!this.inside)return;const e=await t.json();typeof e.count=="number"&&e.count!==this.count&&(this.count=e.count,this.onCount(e.count))}catch{}}beacon(){var e;const t=`${this.url}/leave${this.room}`;(e=navigator.sendBeacon)!=null&&e.call(navigator,t,this.id)||fetch(t,{method:"POST",body:this.id,keepalive:!0}).catch(()=>{})}}const xi=new URLSearchParams(location.search),EM=matchMedia("(hover: none) and (pointer: coarse)").matches&&!xi.has("desk");EM?(document.getElementById("mobile").classList.add("on"),document.getElementById("cover").classList.add("gone")):TM().catch(s=>{console.error(s),document.getElementById("cover").textContent="This browser could not open the gallery."});async function TM(){const s='"Inter Tight", "Helvetica Neue", Helvetica, Arial, sans-serif',[t]=await Promise.all([a_(),Promise.race([Promise.all(['300 40px "Inter Tight"','400 40px "Inter Tight"','italic 500 40px "Inter Tight"'].map(T=>document.fonts.load(T))),new Promise(T=>setTimeout(T,2500))])]),e=new e_({antialias:!0,powerPreference:"high-performance"});let i=Math.min(devicePixelRatio||1,2);e.setPixelRatio(i),e.setSize(innerWidth,innerHeight),e.toneMapping=dl,e.toneMappingExposure=1;const r=e.domElement;document.getElementById("stage").appendChild(r);const o=e.capabilities.getMaxAnisotropy(),a=new El,c=new je(62,innerWidth/innerHeight,.05,900);c.layers.enable(1);const l=new cv(1,1),h=()=>{e.setPixelRatio(i),e.setSize(innerWidth,innerHeight),c.aspect=innerWidth/innerHeight,c.updateProjectionMatrix();const T=e.getDrawingBufferSize(new Bt);l.setSize(Math.round(T.x/2),Math.round(T.y/2))};h(),addEventListener("resize",h);const u=new us(t,a,e,l,s,o);await u.loadSmall();const f=new gv(r),d=t.layout,p=d.entrance;f.pos.set(p.x+2.4,cl,d.outline.z1+d.outline.t+9.8),f.yaw=Math.atan2(2.4,9.8),f.pitch=.05;const x=xi.get("at");if(x){const[T,I,K,j]=x.split(",").map(Number);f.pos.set(T,cl,I),f.yaw=Xn.degToRad(K||0),f.pitch=Xn.degToRad(j||0)}const g=xi.get("hud")!=="0",m=document.getElementById("dot");m.style.display="none";const S=new Mv(g),E=new il;E.far=14,E.layers.enableAll();let v=[];const M=()=>{v=[],u.interior.group.traverse(T=>{T.isMesh&&!T.isInstancedMesh&&v.push(T)}),u.outside.group.traverse(T=>{T.isMesh&&T.userData.outside&&v.push(T)})},w=()=>{E.setFromCamera(new Bt(0,0),c);const T=E.intersectObjects(v,!1)[0];if(!T)return{kind:"none"};const I=T.object.userData;return I.label?{kind:"label",work:I.work,point:T.point,dist:T.distance}:I.work?{kind:"work",work:I.work,point:T.point,dist:T.distance}:I.face?{kind:"face",face:I.face,point:T.point,dist:T.distance}:{kind:"none",point:T.point,dist:T.distance}},P=new nl,_=new Set;let y=1;const R=T=>{let I=99;for(const K of u.interior.pictures)K.work.id===T&&(I=Math.min(I,Math.hypot(K.mesh.position.x-f.pos.x,K.mesh.position.z-f.pos.z)));return I};function L(){y=0;for(const[T,I]of u.sharp)if(!(R(T)<=14)){u.sharp.delete(T);for(const K of u.interior.pictures)K.work.id===T&&(K.mat.uniforms.uMap.value=u.texture(T));I.dispose()}for(const T of u.interior.pictures){const I=T.work.id;u.sharp.has(I)||R(I)>7.5||(y++,!(_.has(I)||_.size>=4)&&(_.add(I),P.loadAsync(us.url(I,"m")).then(K=>{_.delete(I),u.sharp.set(I,u.prepTex(K));for(const j of u.interior.pictures)j.work.id===I&&(j.mat.uniforms.uMap.value=K)}).catch(()=>_.delete(I))))}}const U=new xv;let V=!0;const H=T=>{const I=u.cat.get(T);I&&(V=f.locked,f.frozen=!0,U.show(I,t.images[T],us.url(T,u.sharp.has(T)?"m":"s"),us.url(T,"l")),S.opened())};U.onClose=()=>{f.frozen=!1,W.looked()};let G=0;const J={gallery:u,player:f,camera:c,renderer:e,canvas:r,viewer:U,scene:a,aim:w,openWork:H,dot:m};u.onRebuilt=()=>{f.solids=u.arch.solids;const T=t.layout.outline;f.world={x0:T.x0-30,x1:T.x1+30,z0:T.z0-30,z1:T.z1+30},f.collide(),M(),G=0},u.rebuild();const W=new yM(u,f,c),tt=new wM(xi.get("count")?void 0:"https://gallery-presence.robynmiller.workers.dev");tt.onCount=T=>W.setCount(T),xi.get("count")&&(W.count=+xi.get("count")),W.onEnter=()=>tt.enter(),W.onKey=T=>{f.tap(T==="W"?"KeyW":T==="LEFT"?"ArrowLeft":"ArrowRight",T==="W"?.3:.4),f.locked||r.requestPointerLock()},W.onLeave=()=>tt.exit();const B=new il;B.far=12;let Q=null;const st=T=>{if(T.button!==0&&T.button!==2)return;if(U.open){U.hide();return}if(!f.locked){if(S.pic){H(S.pic.work.id);return}r.requestPointerLock();return}if(B.setFromCamera(new Bt(0,0),c),W.hit(B)){W.poke();return}if(S.pic){H(S.pic.work.id);return}const I=w();(I.kind==="work"||I.kind==="label")&&H(I.work)};r.addEventListener("mousedown",st),addEventListener("mouseup",T=>Q==null?void 0:Q.release(T)),U.relock=()=>V&&!document.body.classList.contains("ed-page"),U.el.addEventListener("mousedown",T=>{U.busy||T.target.closest(".view-tools")||(T.preventDefault(),U.hide(),!U.open&&!f.locked&&U.relock()&&r.requestPointerLock())}),document.addEventListener("contextmenu",T=>{T.target.closest("input, textarea, select")||T.preventDefault()}),addEventListener("keydown",T=>{var K,j;if((j=(K=T.target).closest)!=null&&j.call(K,"input, textarea, select, button"))return;const I=T.code==="Enter"||T.code==="Space";if(U.open){(I||T.code==="Escape")&&!U.busy&&(T.preventDefault(),U.hide());return}I&&S.pic&&!document.body.classList.contains("ed-page")&&(T.preventDefault(),H(S.pic.work.id))}),document.addEventListener("pointerlockchange",()=>{!f.locked&&U.open&&U.hide()});const ut=xi.get("open");ut!==null&&H(ut.padStart(2,"0"));let O=performance.now(),X=0,z=0;const k=xi.get("near")==="1";function C(){const T=performance.now(),I=Math.min((T-O)/1e3,.05);O=T,f.update(I),f.apply(c),c.updateMatrixWorld();const K=document.body.classList.contains("ed-page");W.hide(K||U.open),W.update(I),f.obstacles=[W.obstacle],(G-=I)<=0&&(G=.3,L()),K||U.open?S.clear():S.update(I,c,u.interior.pictures,u.arch.solids,!0),l.render(e,a,c),e.render(a,c),K||W.render(e),K||S.render(e,a,c),X++,I>.024?z+=I:z=Math.max(0,z-I*.5),z>1.5&&i>1&&(i=Math.max(1,i-.25),z=0,h()),!window.__gReady&&X>3&&(!k||y===0)&&(window.__gReady=!0,document.getElementById("cover").classList.add("gone")),requestAnimationFrame(C)}requestAnimationFrame(C),window.__g={...J,data:t,editor:Q,host:W,presence:tt,focus:S}}
