var ef=Object.defineProperty;var nf=(s,t,e)=>t in s?ef(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var I=(s,t,e)=>nf(s,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const cl="186",sf=0,Jl=1,rf=2,Br=1,of=2,ks=3,Ci=0,en=1,$n=2,jn=0,Hs=1,Ql=2,jl=3,tc=4,af=5,rs=100,lf=101,cf=102,hf=103,uf=104,ff=200,df=201,pf=202,mf=203,Bh=204,Hh=205,gf=206,xf=207,_f=208,vf=209,Mf=210,yf=211,Sf=212,bf=213,wf=214,pa=0,ma=1,ga=2,$s=3,xa=4,_a=5,va=6,Ma=7,hl=0,Ef=1,Tf=2,Nn=0,Gh=1,Vh=2,Wh=3,Xh=4,qh=5,Yh=6,ul=7,$h=300,Pi=301,ds=302,So=303,bo=304,po=306,ya=1e3,Jn=1001,Sa=1002,Oe=1003,Af=1004,rr=1005,ke=1006,wo=1007,vi=1008,tn=1009,Kh=1010,Zh=1011,Ks=1012,fl=1013,Fn=1014,En=1015,_n=1016,dl=1017,pl=1018,Zs=1020,Jh=35902,Qh=35899,jh=1021,tu=1022,hn=1023,ni=1026,Ri=1027,mo=1028,ml=1029,Li=1030,gl=1031,xl=1033,Hr=33776,Gr=33777,Vr=33778,Wr=33779,ba=35840,wa=35841,Ea=35842,Ta=35843,Aa=36196,Ra=37492,Ca=37496,Pa=37488,La=37489,$r=37490,Ia=37491,Da=37808,Ua=37809,Na=37810,Fa=37811,za=37812,Oa=37813,ka=37814,Ba=37815,Ha=37816,Ga=37817,Va=37818,Wa=37819,Xa=37820,qa=37821,Ya=36492,$a=36494,Ka=36495,Za=36283,Ja=36284,Kr=36285,Qa=36286,Rf=3200,ja=0,Cf=1,xi="",Le="srgb",Zr="srgb-linear",Jr="linear",ce="srgb",Eo=7680,Pf=519,Lf=512,If=513,Df=514,_l=515,Uf=516,Nf=517,vl=518,Ff=519,eu=35044,ec="300 es",Un=2e3,Js=2001;function zf(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Qs(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Of(){const s=Qs("canvas");return s.style.display="block",s}const nc={};function Qr(...s){const t="THREE."+s.shift();console.log(t,...s)}function nu(s){const t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=s[1];e&&e.isStackTrace?s[0]+=" "+e.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Ht(...s){s=nu(s);const t="THREE."+s.shift();{const e=s[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...s)}}function ie(...s){s=nu(s);const t="THREE."+s.shift();{const e=s[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...s)}}function us(...s){const t=s.join(" ");t in nc||(nc[t]=!0,Ht(...s))}function kf(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const Bf={[pa]:ma,[ga]:va,[xa]:Ma,[$s]:_a,[ma]:pa,[va]:ga,[Ma]:xa,[_a]:$s};class Di{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const i=n[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}}const Xe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ic=1234567;const Gs=Math.PI/180,js=180/Math.PI;function ti(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Xe[s&255]+Xe[s>>8&255]+Xe[s>>16&255]+Xe[s>>24&255]+"-"+Xe[t&255]+Xe[t>>8&255]+"-"+Xe[t>>16&15|64]+Xe[t>>24&255]+"-"+Xe[e&63|128]+Xe[e>>8&255]+"-"+Xe[e>>16&255]+Xe[e>>24&255]+Xe[n&255]+Xe[n>>8&255]+Xe[n>>16&255]+Xe[n>>24&255]).toLowerCase()}function Qt(s,t,e){return Math.max(t,Math.min(e,s))}function Ml(s,t){return(s%t+t)%t}function Hf(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function Gf(s,t,e){return s!==t?(e-s)/(t-s):0}function Vs(s,t,e){return(1-e)*s+e*t}function Vf(s,t,e,n){return Vs(s,t,1-Math.exp(-e*n))}function Wf(s,t=1){return t-Math.abs(Ml(s,t*2)-t)}function Xf(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function qf(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function Yf(s,t){return s+Math.floor(Math.random()*(t-s+1))}function $f(s,t){return s+Math.random()*(t-s)}function Kf(s){return s*(.5-Math.random())}function Zf(s){s!==void 0&&(ic=s);let t=ic+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Jf(s){return s*Gs}function Qf(s){return s*js}function jf(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}function td(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function ed(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function nd(s,t,e,n,i){const r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),f=o((t-n)/2),d=r((n-t)/2),m=o((n-t)/2);switch(i){case"XYX":s.set(a*h,c*u,c*f,a*l);break;case"YZY":s.set(c*f,a*h,c*u,a*l);break;case"ZXZ":s.set(c*u,c*f,a*h,a*l);break;case"XZX":s.set(a*h,c*m,c*d,a*l);break;case"YXY":s.set(c*d,a*h,c*m,a*l);break;case"ZYZ":s.set(c*m,c*d,a*h,a*l);break;default:Ht("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function wn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:case Uint8ClampedArray:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function he(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Wn={DEG2RAD:Gs,RAD2DEG:js,generateUUID:ti,clamp:Qt,euclideanModulo:Ml,mapLinear:Hf,inverseLerp:Gf,lerp:Vs,damp:Vf,pingpong:Wf,smoothstep:Xf,smootherstep:qf,randInt:Yf,randFloat:$f,randFloatSpread:Kf,seededRandom:Zf,degToRad:Jf,radToDeg:Qf,isPowerOfTwo:jf,ceilPowerOfTwo:td,floorPowerOfTwo:ed,setQuaternionFromProperEuler:nd,normalize:he,denormalize:wn},Fl=class Fl{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Qt(this.x,t.x,e.x),this.y=Qt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Qt(this.x,t,e),this.y=Qt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Qt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Fl.prototype.isVector2=!0;let kt=Fl;class ve{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3],f=r[o+0],d=r[o+1],m=r[o+2],x=r[o+3];if(u!==x||c!==f||l!==d||h!==m){let p=c*f+l*d+h*m+u*x;p<0&&(f=-f,d=-d,m=-m,x=-x,p=-p);let g=1-a;if(p<.9995){const b=Math.acos(p),T=Math.sin(b);g=Math.sin(g*b)/T,a=Math.sin(a*b)/T,c=c*g+f*a,l=l*g+d*a,h=h*g+m*a,u=u*g+x*a}else{c=c*g+f*a,l=l*g+d*a,h=h*g+m*a,u=u*g+x*a;const b=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=b,l*=b,h*=b,u*=b}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,o){const a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=r[o],f=r[o+1],d=r[o+2],m=r[o+3];return t[e]=a*m+h*u+c*d-l*f,t[e+1]=c*m+h*f+l*u-a*d,t[e+2]=l*m+h*d+a*f-c*u,t[e+3]=h*m-a*u-c*f-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),u=a(r/2),f=c(n/2),d=c(i/2),m=c(r/2);switch(o){case"XYZ":this._x=f*h*u+l*d*m,this._y=l*d*u-f*h*m,this._z=l*h*m+f*d*u,this._w=l*h*u-f*d*m;break;case"YXZ":this._x=f*h*u+l*d*m,this._y=l*d*u-f*h*m,this._z=l*h*m-f*d*u,this._w=l*h*u+f*d*m;break;case"ZXY":this._x=f*h*u-l*d*m,this._y=l*d*u+f*h*m,this._z=l*h*m+f*d*u,this._w=l*h*u-f*d*m;break;case"ZYX":this._x=f*h*u-l*d*m,this._y=l*d*u+f*h*m,this._z=l*h*m-f*d*u,this._w=l*h*u+f*d*m;break;case"YZX":this._x=f*h*u+l*d*m,this._y=l*d*u+f*h*m,this._z=l*h*m-f*d*u,this._w=l*h*u-f*d*m;break;case"XZY":this._x=f*h*u-l*d*m,this._y=l*d*u-f*h*m,this._z=l*h*m+f*d*u,this._w=l*h*u+f*d*m;break;default:Ht("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-c)*d,this._y=(r-l)*d,this._z=(o-i)*d}else if(n>a&&n>u){const d=2*Math.sqrt(1+n-a-u);this._w=(h-c)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(r+l)/d}else if(a>u){const d=2*Math.sqrt(1+a-n-u);this._w=(r-l)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(c+h)/d}else{const d=2*Math.sqrt(1+u-n-a);this._w=(o-i)/d,this._x=(r+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Qt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+i*l-r*c,this._y=i*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-i*a,this._w=o*h-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,i=-i,r=-r,o=-o,a=-a);let c=1-e;if(a<.9995){const l=Math.acos(a),h=Math.sin(l);c=Math.sin(c*l)/h,e=Math.sin(e*l)/h,this._x=this._x*c+n*e,this._y=this._y*c+i*e,this._z=this._z*c+r*e,this._w=this._w*c+o*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+i*e,this._z=this._z*c+r*e,this._w=this._w*c+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const zl=class zl{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(sc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(sc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*i-a*n),h=2*(a*e-r*i),u=2*(r*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=i+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Qt(this.x,t.x,e.x),this.y=Qt(this.y,t.y,e.y),this.z=Qt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Qt(this.x,t,e),this.y=Qt(this.y,t,e),this.z=Qt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return To.copy(this).projectOnVector(t),this.sub(To)}reflect(t){return this.sub(To.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Qt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};zl.prototype.isVector3=!0;let N=zl;const To=new N,sc=new ve,Ol=class Ol{constructor(t,e,n,i,r,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,c,l)}set(t,e,n,i,r,o,a,c,l){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],d=n[5],m=n[8],x=i[0],p=i[3],g=i[6],b=i[1],T=i[4],v=i[7],y=i[2],w=i[5],P=i[8];return r[0]=o*x+a*b+c*y,r[3]=o*p+a*T+c*w,r[6]=o*g+a*v+c*P,r[1]=l*x+h*b+u*y,r[4]=l*p+h*T+u*w,r[7]=l*g+h*v+u*P,r[2]=f*x+d*b+m*y,r[5]=f*p+d*T+m*w,r[8]=f*g+d*v+m*P,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+i*r*l-i*o*c}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,f=a*c-h*r,d=l*r-o*c,m=e*u+n*f+i*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/m;return t[0]=u*x,t[1]=(i*l-h*n)*x,t[2]=(a*n-i*o)*x,t[3]=f*x,t[4]=(h*e-i*c)*x,t[5]=(i*r-a*e)*x,t[6]=d*x,t[7]=(n*c-l*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-i*l,i*c,-i*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return us("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ao.makeScale(t,e)),this}rotate(t){return us("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ao.makeRotation(-t)),this}translate(t,e){return us("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ao.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Ol.prototype.isMatrix3=!0;let Xt=Ol;const Ao=new Xt,rc=new Xt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),oc=new Xt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function id(){const s={enabled:!0,workingColorSpace:Zr,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ce&&(i.r=ei(i.r),i.g=ei(i.g),i.b=ei(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ce&&(i.r=fs(i.r),i.g=fs(i.g),i.b=fs(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===xi?Jr:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return us("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return us("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Zr]:{primaries:t,whitePoint:n,transfer:Jr,toXYZ:rc,fromXYZ:oc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Le},outputColorSpaceConfig:{drawingBufferColorSpace:Le}},[Le]:{primaries:t,whitePoint:n,transfer:ce,toXYZ:rc,fromXYZ:oc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Le}}}),s}const ee=id();function ei(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function fs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Oi;class sd{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Oi===void 0&&(Oi=Qs("canvas")),Oi.width=t.width,Oi.height=t.height;const i=Oi.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=Oi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Qs("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=ei(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ei(e[n]/255)*255):e[n]=ei(e[n]);return{data:e,width:t.width,height:t.height}}else return Ht("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let rd=0;class yl{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:rd++}),this.uuid=ti(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Ro(i[o].image)):r.push(Ro(i[o]))}else r=Ro(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function Ro(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?sd.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Ht("Texture: Unable to serialize Texture."),{})}let od=0;const Co=new N;class Ge extends Di{constructor(t=Ge.DEFAULT_IMAGE,e=Ge.DEFAULT_MAPPING,n=Jn,i=Jn,r=ke,o=vi,a=hn,c=tn,l=Ge.DEFAULT_ANISOTROPY,h=xi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:od++}),this.uuid=ti(),this.name="",this.source=new yl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new kt(0,0),this.repeat=new kt(1,1),this.center=new kt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Co).x}get height(){return this.source.getSize(Co).y}get depth(){return this.source.getSize(Co).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){Ht(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){Ht(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==$h)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ya:t.x=t.x-Math.floor(t.x);break;case Jn:t.x=t.x<0?0:1;break;case Sa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ya:t.y=t.y-Math.floor(t.y);break;case Jn:t.y=t.y<0?0:1;break;case Sa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ge.DEFAULT_IMAGE=null;Ge.DEFAULT_MAPPING=$h;Ge.DEFAULT_ANISOTROPY=1;const kl=class kl{constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const c=t.elements,l=c[0],h=c[4],u=c[8],f=c[1],d=c[5],m=c[9],x=c[2],p=c[6],g=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(m-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(m+p)<.1&&Math.abs(l+d+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const T=(l+1)/2,v=(d+1)/2,y=(g+1)/2,w=(h+f)/4,P=(u+x)/4,_=(m+p)/4;return T>v&&T>y?T<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(T),i=w/n,r=P/n):v>y?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=w/i,r=_/i):y<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(y),n=P/r,i=_/r),this.set(n,i,r,e),this}let b=Math.sqrt((p-m)*(p-m)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(b)<.001&&(b=1),this.x=(p-m)/b,this.y=(u-x)/b,this.z=(f-h)/b,this.w=Math.acos((l+d+g-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Qt(this.x,t.x,e.x),this.y=Qt(this.y,t.y,e.y),this.z=Qt(this.z,t.z,e.z),this.w=Qt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Qt(this.x,t,e),this.y=Qt(this.y,t,e),this.z=Qt(this.z,t,e),this.w=Qt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};kl.prototype.isVector4=!0;let ge=kl;class ad extends Di{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ke,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ge(0,0,t,e),this.scissorTest=!1,this.viewport=new ge(0,0,t,e),this.textures=[];const i={width:t,height:e,depth:n.depth},r=new Ge(i),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:ke,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const i=Object.assign({},t.textures[e].image);this.textures[e].source=new yl(i)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class mn extends ad{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class iu extends Ge{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Oe,this.minFilter=Oe,this.wrapR=Jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class ld extends Ge{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Oe,this.minFilter=Oe,this.wrapR=Jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}const fo=class fo{constructor(t,e,n,i,r,o,a,c,l,h,u,f,d,m,x,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,c,l,h,u,f,d,m,x,p)}set(t,e,n,i,r,o,a,c,l,h,u,f,d,m,x,p){const g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=i,g[1]=r,g[5]=o,g[9]=a,g[13]=c,g[2]=l,g[6]=h,g[10]=u,g[14]=f,g[3]=d,g[7]=m,g[11]=x,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new fo().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,n=t.elements,i=1/ki.setFromMatrixColumn(t,0).length(),r=1/ki.setFromMatrixColumn(t,1).length(),o=1/ki.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const f=o*h,d=o*u,m=a*h,x=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=d+m*l,e[5]=f-x*l,e[9]=-a*c,e[2]=x-f*l,e[6]=m+d*l,e[10]=o*c}else if(t.order==="YXZ"){const f=c*h,d=c*u,m=l*h,x=l*u;e[0]=f+x*a,e[4]=m*a-d,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=d*a-m,e[6]=x+f*a,e[10]=o*c}else if(t.order==="ZXY"){const f=c*h,d=c*u,m=l*h,x=l*u;e[0]=f-x*a,e[4]=-o*u,e[8]=m+d*a,e[1]=d+m*a,e[5]=o*h,e[9]=x-f*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const f=o*h,d=o*u,m=a*h,x=a*u;e[0]=c*h,e[4]=m*l-d,e[8]=f*l+x,e[1]=c*u,e[5]=x*l+f,e[9]=d*l-m,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const f=o*c,d=o*l,m=a*c,x=a*l;e[0]=c*h,e[4]=x-f*u,e[8]=m*u+d,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=d*u+m,e[10]=f-x*u}else if(t.order==="XZY"){const f=o*c,d=o*l,m=a*c,x=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=f*u+x,e[5]=o*h,e[9]=d*u-m,e[2]=m*u-d,e[6]=a*h,e[10]=x*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(cd,t,hd)}lookAt(t,e,n){const i=this.elements;return sn.subVectors(t,e),sn.lengthSq()===0&&(sn.z=1),sn.normalize(),ai.crossVectors(n,sn),ai.lengthSq()===0&&(Math.abs(n.z)===1?sn.x+=1e-4:sn.z+=1e-4,sn.normalize(),ai.crossVectors(n,sn)),ai.normalize(),or.crossVectors(sn,ai),i[0]=ai.x,i[4]=or.x,i[8]=sn.x,i[1]=ai.y,i[5]=or.y,i[9]=sn.y,i[2]=ai.z,i[6]=or.z,i[10]=sn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],d=n[13],m=n[2],x=n[6],p=n[10],g=n[14],b=n[3],T=n[7],v=n[11],y=n[15],w=i[0],P=i[4],_=i[8],M=i[12],R=i[1],L=i[5],U=i[9],W=i[13],B=i[2],H=i[6],K=i[10],V=i[14],it=i[3],G=i[7],et=i[11],rt=i[15];return r[0]=o*w+a*R+c*B+l*it,r[4]=o*P+a*L+c*H+l*G,r[8]=o*_+a*U+c*K+l*et,r[12]=o*M+a*W+c*V+l*rt,r[1]=h*w+u*R+f*B+d*it,r[5]=h*P+u*L+f*H+d*G,r[9]=h*_+u*U+f*K+d*et,r[13]=h*M+u*W+f*V+d*rt,r[2]=m*w+x*R+p*B+g*it,r[6]=m*P+x*L+p*H+g*G,r[10]=m*_+x*U+p*K+g*et,r[14]=m*M+x*W+p*V+g*rt,r[3]=b*w+T*R+v*B+y*it,r[7]=b*P+T*L+v*H+y*G,r[11]=b*_+T*U+v*K+y*et,r[15]=b*M+T*W+v*V+y*rt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],f=t[10],d=t[14],m=t[3],x=t[7],p=t[11],g=t[15],b=c*d-l*f,T=a*d-l*u,v=a*f-c*u,y=o*d-l*h,w=o*f-c*h,P=o*u-a*h;return e*(x*b-p*T+g*v)-n*(m*b-p*y+g*w)+i*(m*T-x*y+g*P)-r*(m*v-x*w+p*P)}determinantAffine(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[1],o=t[5],a=t[9],c=t[2],l=t[6],h=t[10];return e*(o*h-a*l)-n*(r*h-a*c)+i*(r*l-o*c)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],f=t[10],d=t[11],m=t[12],x=t[13],p=t[14],g=t[15],b=e*a-n*o,T=e*c-i*o,v=e*l-r*o,y=n*c-i*a,w=n*l-r*a,P=i*l-r*c,_=h*x-u*m,M=h*p-f*m,R=h*g-d*m,L=u*p-f*x,U=u*g-d*x,W=f*g-d*p,B=b*W-T*U+v*L+y*R-w*M+P*_;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const H=1/B;return t[0]=(a*W-c*U+l*L)*H,t[1]=(i*U-n*W-r*L)*H,t[2]=(x*P-p*w+g*y)*H,t[3]=(f*w-u*P-d*y)*H,t[4]=(c*R-o*W-l*M)*H,t[5]=(e*W-i*R+r*M)*H,t[6]=(p*v-m*P-g*T)*H,t[7]=(h*P-f*v+d*T)*H,t[8]=(o*U-a*R+l*_)*H,t[9]=(n*R-e*U-r*_)*H,t[10]=(m*w-x*v+g*b)*H,t[11]=(u*v-h*w-d*b)*H,t[12]=(a*M-o*L-c*_)*H,t[13]=(e*L-n*M+i*_)*H,t[14]=(x*T-m*y-p*b)*H,t[15]=(h*y-u*T+f*b)*H,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*o,0,l*c-i*a,h*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,f=r*l,d=r*h,m=r*u,x=o*h,p=o*u,g=a*u,b=c*l,T=c*h,v=c*u,y=n.x,w=n.y,P=n.z;return i[0]=(1-(x+g))*y,i[1]=(d+v)*y,i[2]=(m-T)*y,i[3]=0,i[4]=(d-v)*w,i[5]=(1-(f+g))*w,i[6]=(p+b)*w,i[7]=0,i[8]=(m+T)*P,i[9]=(p-b)*P,i[10]=(1-(f+x))*P,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=ki.set(i[0],i[1],i[2]).length();const a=ki.set(i[4],i[5],i[6]).length(),c=ki.set(i[8],i[9],i[10]).length();r<0&&(o=-o),yn.copy(this);const l=1/o,h=1/a,u=1/c;return yn.elements[0]*=l,yn.elements[1]*=l,yn.elements[2]*=l,yn.elements[4]*=h,yn.elements[5]*=h,yn.elements[6]*=h,yn.elements[8]*=u,yn.elements[9]*=u,yn.elements[10]*=u,e.setFromRotationMatrix(yn),n.x=o,n.y=a,n.z=c,this}makePerspective(t,e,n,i,r,o,a=Un,c=!1){const l=this.elements,h=2*r/(e-t),u=2*r/(n-i),f=(e+t)/(e-t),d=(n+i)/(n-i);let m,x;if(c)m=r/(o-r),x=o*r/(o-r);else if(a===Un)m=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===Js)m=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=Un,c=!1){const l=this.elements,h=2/(e-t),u=2/(n-i),f=-(e+t)/(e-t),d=-(n+i)/(n-i);let m,x;if(c)m=1/(o-r),x=o/(o-r);else if(a===Un)m=-2/(o-r),x=-(o+r)/(o-r);else if(a===Js)m=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=u,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=m,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};fo.prototype.isMatrix4=!0;let ne=fo;const ki=new N,yn=new ne,cd=new N(0,0,0),hd=new N(1,1,1),ai=new N,or=new N,sn=new N,ac=new ne,lc=new ve;class vn{constructor(t=0,e=0,n=0,i=vn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],h=i[9],u=i[2],f=i[6],d=i[10];switch(e){case"XYZ":this._y=Math.asin(Qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Qt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Qt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Qt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Qt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Ht("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ac.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ac,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return lc.setFromEuler(this),this.setFromQuaternion(lc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}vn.DEFAULT_ORDER="XYZ";class Sl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let ud=0;const cc=new N,Bi=new ve,zn=new ne,ar=new N,_s=new N,fd=new N,dd=new ve,hc=new N(1,0,0),uc=new N(0,1,0),fc=new N(0,0,1),dc={type:"added"},pd={type:"removed"},Hi={type:"childadded",child:null},Po={type:"childremoved",child:null};class Ie extends Di{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ud++}),this.uuid=ti(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ie.DEFAULT_UP.clone();const t=new N,e=new vn,n=new ve,i=new N(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ne},normalMatrix:{value:new Xt}}),this.matrix=new ne,this.matrixWorld=new ne,this.matrixAutoUpdate=Ie.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ie.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Sl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Bi.setFromAxisAngle(t,e),this.quaternion.multiply(Bi),this}rotateOnWorldAxis(t,e){return Bi.setFromAxisAngle(t,e),this.quaternion.premultiply(Bi),this}rotateX(t){return this.rotateOnAxis(hc,t)}rotateY(t){return this.rotateOnAxis(uc,t)}rotateZ(t){return this.rotateOnAxis(fc,t)}translateOnAxis(t,e){return cc.copy(t).applyQuaternion(this.quaternion),this.position.add(cc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(hc,t)}translateY(t){return this.translateOnAxis(uc,t)}translateZ(t){return this.translateOnAxis(fc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(zn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ar.copy(t):ar.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),_s.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zn.lookAt(_s,ar,this.up):zn.lookAt(ar,_s,this.up),this.quaternion.setFromRotationMatrix(zn),i&&(zn.extractRotation(i.matrixWorld),Bi.setFromRotationMatrix(zn),this.quaternion.premultiply(Bi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ie("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(dc),Hi.child=t,this.dispatchEvent(Hi),Hi.child=null):ie("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(pd),Po.child=t,this.dispatchEvent(Po),Po.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),zn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),zn.multiply(t.parent.matrixWorld)),t.applyMatrix4(zn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(dc),Hi.child=t,this.dispatchEvent(Hi),Hi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_s,t,fd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_s,dd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,i=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*i,r[13]+=n-r[1]*e-r[5]*n-r[9]*i,r[14]+=i-r[2]*e-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){const r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),d=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=i,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Ie.DEFAULT_UP=new N(0,1,0);Ie.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ie.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Pe extends Ie{constructor(){super(),this.isGroup=!0,this.type="Group"}}const md={type:"move"};class Lo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const x of t.hand.values()){const p=e.getJointPose(x,n),g=this._getHandJoint(l,x);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,m=.005;l.inputState.pinching&&f>d+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=d-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(md)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Pe;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const su={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},li={h:0,s:0,l:0},lr={h:0,s:0,l:0};function Io(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class Gt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Le){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ee.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=ee.workingColorSpace){return this.r=t,this.g=e,this.b=n,ee.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=ee.workingColorSpace){if(t=Ml(t,1),e=Qt(e,0,1),n=Qt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Io(o,r,t+1/3),this.g=Io(o,r,t),this.b=Io(o,r,t-1/3)}return ee.colorSpaceToWorking(this,i),this}setStyle(t,e=Le){function n(r){r!==void 0&&parseFloat(r)<1&&Ht("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Ht("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Ht("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Le){const n=su[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Ht("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ei(t.r),this.g=ei(t.g),this.b=ei(t.b),this}copyLinearToSRGB(t){return this.r=fs(t.r),this.g=fs(t.g),this.b=fs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Le){return ee.workingToColorSpace(qe.copy(this),t),Math.round(Qt(qe.r*255,0,255))*65536+Math.round(Qt(qe.g*255,0,255))*256+Math.round(Qt(qe.b*255,0,255))}getHexString(t=Le){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ee.workingColorSpace){ee.workingToColorSpace(qe.copy(this),e);const n=qe.r,i=qe.g,r=qe.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(i-r)/u+(i<r?6:0);break;case i:c=(r-n)/u+2;break;case r:c=(n-i)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=ee.workingColorSpace){return ee.workingToColorSpace(qe.copy(this),e),t.r=qe.r,t.g=qe.g,t.b=qe.b,t}getStyle(t=Le){ee.workingToColorSpace(qe.copy(this),t);const e=qe.r,n=qe.g,i=qe.b;return t!==Le?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(li),this.setHSL(li.h+t,li.s+e,li.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(li),t.getHSL(lr);const n=Vs(li.h,lr.h,e),i=Vs(li.s,lr.s,e),r=Vs(li.l,lr.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const qe=new Gt;Gt.NAMES=su;class bl extends Ie{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new vn,this.environmentIntensity=1,this.environmentRotation=new vn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}const Sn=new N,On=new N,Do=new N,kn=new N,Gi=new N,Vi=new N,pc=new N,Uo=new N,No=new N,Fo=new N,zo=new ge,Oo=new ge,ko=new ge;class pn{constructor(t=new N,e=new N,n=new N){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Sn.subVectors(t,e),i.cross(Sn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){Sn.subVectors(i,e),On.subVectors(n,e),Do.subVectors(t,e);const o=Sn.dot(Sn),a=Sn.dot(On),c=Sn.dot(Do),l=On.dot(On),h=On.dot(Do),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;const f=1/u,d=(l*c-a*h)*f,m=(o*h-a*c)*f;return r.set(1-d-m,m,d)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,kn)===null?!1:kn.x>=0&&kn.y>=0&&kn.x+kn.y<=1}static getInterpolation(t,e,n,i,r,o,a,c){return this.getBarycoord(t,e,n,i,kn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,kn.x),c.addScaledVector(o,kn.y),c.addScaledVector(a,kn.z),c)}static getInterpolatedAttribute(t,e,n,i,r,o){return zo.setScalar(0),Oo.setScalar(0),ko.setScalar(0),zo.fromBufferAttribute(t,e),Oo.fromBufferAttribute(t,n),ko.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(zo,r.x),o.addScaledVector(Oo,r.y),o.addScaledVector(ko,r.z),o}static isFrontFacing(t,e,n,i){return Sn.subVectors(n,e),On.subVectors(t,e),Sn.cross(On).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Sn.subVectors(this.c,this.b),On.subVectors(this.a,this.b),Sn.cross(On).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return pn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return pn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return pn.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return pn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return pn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let o,a;Gi.subVectors(i,n),Vi.subVectors(r,n),Uo.subVectors(t,n);const c=Gi.dot(Uo),l=Vi.dot(Uo);if(c<=0&&l<=0)return e.copy(n);No.subVectors(t,i);const h=Gi.dot(No),u=Vi.dot(No);if(h>=0&&u<=h)return e.copy(i);const f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(Gi,o);Fo.subVectors(t,r);const d=Gi.dot(Fo),m=Vi.dot(Fo);if(m>=0&&d<=m)return e.copy(r);const x=d*l-c*m;if(x<=0&&l>=0&&m<=0)return a=l/(l-m),e.copy(n).addScaledVector(Vi,a);const p=h*m-d*u;if(p<=0&&u-h>=0&&d-m>=0)return pc.subVectors(r,i),a=(u-h)/(u-h+(d-m)),e.copy(i).addScaledVector(pc,a);const g=1/(p+x+f);return o=x*g,a=f*g,e.copy(n).addScaledVector(Gi,o).addScaledVector(Vi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Ui{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(bn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(bn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=bn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,bn):bn.fromBufferAttribute(r,o),bn.applyMatrix4(t.matrixWorld),this.expandByPoint(bn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),cr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),cr.copy(n.boundingBox)),cr.applyMatrix4(t.matrixWorld),this.union(cr)}const i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,bn),bn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(vs),hr.subVectors(this.max,vs),Wi.subVectors(t.a,vs),Xi.subVectors(t.b,vs),qi.subVectors(t.c,vs),ci.subVectors(Xi,Wi),hi.subVectors(qi,Xi),Si.subVectors(Wi,qi);let e=[0,-ci.z,ci.y,0,-hi.z,hi.y,0,-Si.z,Si.y,ci.z,0,-ci.x,hi.z,0,-hi.x,Si.z,0,-Si.x,-ci.y,ci.x,0,-hi.y,hi.x,0,-Si.y,Si.x,0];return!Bo(e,Wi,Xi,qi,hr)||(e=[1,0,0,0,1,0,0,0,1],!Bo(e,Wi,Xi,qi,hr))?!1:(ur.crossVectors(ci,hi),e=[ur.x,ur.y,ur.z],Bo(e,Wi,Xi,qi,hr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,bn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(bn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Bn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Bn=[new N,new N,new N,new N,new N,new N,new N,new N],bn=new N,cr=new Ui,Wi=new N,Xi=new N,qi=new N,ci=new N,hi=new N,Si=new N,vs=new N,hr=new N,ur=new N,bi=new N;function Bo(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){bi.fromArray(s,r);const a=i.x*Math.abs(bi.x)+i.y*Math.abs(bi.y)+i.z*Math.abs(bi.z),c=t.dot(bi),l=e.dot(bi),h=n.dot(bi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const Kn=gd();function gd(){const s=new ArrayBuffer(4),t=new Float32Array(s),e=new Uint32Array(s),n=new Uint32Array(512),i=new Uint32Array(512);for(let c=0;c<256;++c){const l=c-127;l<-27?(n[c]=0,n[c|256]=32768,i[c]=24,i[c|256]=24):l<-14?(n[c]=1024>>-l-14,n[c|256]=1024>>-l-14|32768,i[c]=-l-1,i[c|256]=-l-1):l<=15?(n[c]=l+15<<10,n[c|256]=l+15<<10|32768,i[c]=13,i[c|256]=13):l<128?(n[c]=31744,n[c|256]=64512,i[c]=24,i[c|256]=24):(n[c]=31744,n[c|256]=64512,i[c]=13,i[c|256]=13)}const r=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let c=1;c<1024;++c){let l=c<<13,h=0;for(;!(l&8388608);)l<<=1,h-=8388608;l&=-8388609,h+=947912704,r[c]=l|h}for(let c=1024;c<2048;++c)r[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)o[c]=c<<23;o[31]=1199570944,o[32]=2147483648;for(let c=33;c<63;++c)o[c]=2147483648+(c-32<<23);o[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(a[c]=1024);return{floatView:t,uint32View:e,baseTable:n,shiftTable:i,mantissaTable:r,exponentTable:o,offsetTable:a}}function xd(s){Math.abs(s)>65504&&Ht("DataUtils.toHalfFloat(): Value out of range."),s=Qt(s,-65504,65504),Kn.floatView[0]=s;const t=Kn.uint32View[0],e=t>>23&511;return Kn.baseTable[e]+((t&8388607)>>Kn.shiftTable[e])}function _d(s){const t=s>>10;return Kn.uint32View[0]=Kn.mantissaTable[Kn.offsetTable[t]+(s&1023)]+Kn.exponentTable[t],Kn.floatView[0]}class vd{static toHalfFloat(t){return xd(t)}static fromHalfFloat(t){return _d(t)}}const Re=new N,fr=new kt;let Md=0;class gn extends Di{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Md++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=eu,this.updateRanges=[],this.gpuType=En,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)fr.fromBufferAttribute(this,e),fr.applyMatrix3(t),this.setXY(e,fr.x,fr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyMatrix3(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyMatrix4(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyNormalMatrix(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.transformDirection(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=wn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=he(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=wn(e,this.array)),e}setX(t,e){return this.normalized&&(e=he(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=wn(e,this.array)),e}setY(t,e){return this.normalized&&(e=he(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=wn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=he(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=wn(e,this.array)),e}setW(t,e){return this.normalized&&(e=he(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=he(e,this.array),n=he(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=he(e,this.array),n=he(n,this.array),i=he(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=he(e,this.array),n=he(n,this.array),i=he(i,this.array),r=he(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}}class ru extends gn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class ou extends gn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ue extends gn{constructor(t,e,n){super(new Float32Array(t),e,n)}}const yd=new Ui,Ms=new N,Ho=new N;class gs{constructor(t=new N,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):yd.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ms.subVectors(t,this.center);const e=Ms.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Ms,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ho.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ms.copy(t.center).add(Ho)),this.expandByPoint(Ms.copy(t.center).sub(Ho))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let Sd=0;const fn=new ne,Go=new Ie,Yi=new N,rn=new Ui,ys=new Ui,Fe=new N;class Be extends Di{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Sd++}),this.uuid=ti(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(zf(t)?ou:ru)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Xt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return fn.makeRotationFromQuaternion(t),this.applyMatrix4(fn),this}rotateX(t){return fn.makeRotationX(t),this.applyMatrix4(fn),this}rotateY(t){return fn.makeRotationY(t),this.applyMatrix4(fn),this}rotateZ(t){return fn.makeRotationZ(t),this.applyMatrix4(fn),this}translate(t,e,n){return fn.makeTranslation(t,e,n),this.applyMatrix4(fn),this}scale(t,e,n){return fn.makeScale(t,e,n),this.applyMatrix4(fn),this}lookAt(t){return Go.lookAt(t),Go.updateMatrix(),this.applyMatrix4(Go.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Yi).negate(),this.translate(Yi.x,Yi.y,Yi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,r=t.length;i<r;i++){const o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ue(n,3))}else{const n=Math.min(t.length,e.count);for(let i=0;i<n;i++){const r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&Ht("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ui);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ie("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];rn.setFromBufferAttribute(r),this.morphTargetsRelative?(Fe.addVectors(this.boundingBox.min,rn.min),this.boundingBox.expandByPoint(Fe),Fe.addVectors(this.boundingBox.max,rn.max),this.boundingBox.expandByPoint(Fe)):(this.boundingBox.expandByPoint(rn.min),this.boundingBox.expandByPoint(rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ie('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ie("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){const n=this.boundingSphere.center;if(rn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];ys.setFromBufferAttribute(a),this.morphTargetsRelative?(Fe.addVectors(rn.min,ys.min),rn.expandByPoint(Fe),Fe.addVectors(rn.max,ys.max),rn.expandByPoint(Fe)):(rn.expandByPoint(ys.min),rn.expandByPoint(ys.max))}rn.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)Fe.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Fe));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Fe.fromBufferAttribute(a,l),c&&(Yi.fromBufferAttribute(t,l),Fe.add(Yi)),i=Math.max(i,n.distanceToSquared(Fe))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&ie('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ie("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,r=e.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new gn(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));const a=[],c=[];for(let _=0;_<n.count;_++)a[_]=new N,c[_]=new N;const l=new N,h=new N,u=new N,f=new kt,d=new kt,m=new kt,x=new N,p=new N;function g(_,M,R){l.fromBufferAttribute(n,_),h.fromBufferAttribute(n,M),u.fromBufferAttribute(n,R),f.fromBufferAttribute(r,_),d.fromBufferAttribute(r,M),m.fromBufferAttribute(r,R),h.sub(l),u.sub(l),d.sub(f),m.sub(f);const L=1/(d.x*m.y-m.x*d.y);isFinite(L)&&(x.copy(h).multiplyScalar(m.y).addScaledVector(u,-d.y).multiplyScalar(L),p.copy(u).multiplyScalar(d.x).addScaledVector(h,-m.x).multiplyScalar(L),a[_].add(x),a[M].add(x),a[R].add(x),c[_].add(p),c[M].add(p),c[R].add(p))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let _=0,M=b.length;_<M;++_){const R=b[_],L=R.start,U=R.count;for(let W=L,B=L+U;W<B;W+=3)g(t.getX(W+0),t.getX(W+1),t.getX(W+2))}const T=new N,v=new N,y=new N,w=new N;function P(_){y.fromBufferAttribute(i,_),w.copy(y);const M=a[_];T.copy(M),T.sub(y.multiplyScalar(y.dot(M))).normalize(),v.crossVectors(w,M);const L=v.dot(c[_])<0?-1:1;o.setXYZW(_,T.x,T.y,T.z,L)}for(let _=0,M=b.length;_<M;++_){const R=b[_],L=R.start,U=R.count;for(let W=L,B=L+U;W<B;W+=3)P(t.getX(W+0)),P(t.getX(W+1)),P(t.getX(W+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new gn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new N,r=new N,o=new N,a=new N,c=new N,l=new N,h=new N,u=new N;if(t)for(let f=0,d=t.count;f<d;f+=3){const m=t.getX(f+0),x=t.getX(f+1),p=t.getX(f+2);i.fromBufferAttribute(e,m),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,p),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,m),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,p),a.add(h),c.add(h),l.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let f=0,d=e.count;f<d;f+=3)i.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Fe.fromBufferAttribute(t,e),Fe.normalize(),t.setXYZ(e,Fe.x,Fe.y,Fe.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,u=a.normalized,f=new l.constructor(c.length*h);let d=0,m=0;for(let x=0,p=c.length;x<p;x++){a.isInterleavedBufferAttribute?d=c[x]*a.data.stride+a.offset:d=c[x]*h;for(let g=0;g<h;g++)f[m++]=l[d++]}return new gn(f,h,u)}if(this.index===null)return Ht("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Be,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=t(c,n);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){const f=l[h],d=t(f,n);c.push(d)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){const d=l[u];h.push(d.toJSON(t.data))}h.length>0&&(i[c]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const i=t.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],u=r[l];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class bd{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=eu,this.updateRanges=[],this.version=0,this.uuid=ti()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ti()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ti()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));const e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}}const $e=new N;class jr{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.applyMatrix4(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.applyNormalMatrix(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.transformDirection(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=wn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=he(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=he(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=he(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=he(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=he(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=wn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=wn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=wn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=wn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=he(e,this.array),n=he(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=he(e,this.array),n=he(n,this.array),i=he(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=he(e,this.array),n=he(n,this.array),i=he(i,this.array),r=he(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Qr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new gn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new jr(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Qr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Vo=new N,wd=new N,Ed=new Xt;class Xn{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Vo.subVectors(n,e).cross(wd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){const i=t.delta(Vo),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(i,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Ed.getNormalMatrix(t),i=this.coplanarPoint(Vo).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let Td=0;class Ni extends Di{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Td++}),this.uuid=ti(),this.name="",this.type="Material",this.blending=Hs,this.side=Ci,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Bh,this.blendDst=Hh,this.blendEquation=rs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Gt(0,0,0),this.blendAlpha=0,this.depthFunc=$s,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Pf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Eo,this.stencilZFail=Eo,this.stencilZPass=Eo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){Ht(`Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){Ht(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Gt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Xn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new kt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new kt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class au extends Ni{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Gt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let $i;const Ss=new N,Ki=new N,Zi=new N,Ji=new kt,bs=new kt,lu=new ne,dr=new N,ws=new N,pr=new N,mc=new kt,Wo=new kt,gc=new kt;class Ad extends Ie{constructor(t=new au){if(super(),this.isSprite=!0,this.type="Sprite",$i===void 0){$i=new Be;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new bd(e,5);$i.setIndex([0,1,2,0,2,3]),$i.setAttribute("position",new jr(n,3,0,!1)),$i.setAttribute("uv",new jr(n,2,3,!1))}this.geometry=$i,this.material=t,this.center=new kt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&ie('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ki.setFromMatrixScale(this.matrixWorld),lu.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Zi.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ki.multiplyScalar(-Zi.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const o=this.center;mr(dr.set(-.5,-.5,0),Zi,o,Ki,i,r),mr(ws.set(.5,-.5,0),Zi,o,Ki,i,r),mr(pr.set(.5,.5,0),Zi,o,Ki,i,r),mc.set(0,0),Wo.set(1,0),gc.set(1,1);let a=t.ray.intersectTriangle(dr,ws,pr,!1,Ss);if(a===null&&(mr(ws.set(-.5,.5,0),Zi,o,Ki,i,r),Wo.set(0,1),a=t.ray.intersectTriangle(dr,pr,ws,!1,Ss),a===null))return;const c=t.ray.origin.distanceTo(Ss);c<t.near||c>t.far||e.push({distance:c,point:Ss.clone(),uv:pn.getInterpolation(Ss,dr,ws,pr,mc,Wo,gc,new kt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function mr(s,t,e,n,i,r){Ji.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(bs.x=r*Ji.x-i*Ji.y,bs.y=i*Ji.x+r*Ji.y):bs.copy(Ji),s.copy(t),s.x+=bs.x,s.y+=bs.y,s.applyMatrix4(lu)}const Hn=new N,Xo=new N,gr=new N,xr=new N;class wl{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Hn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Hn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Hn.copy(this.origin).addScaledVector(this.direction,e),Hn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Xo.copy(t).add(e).multiplyScalar(.5),gr.copy(e).sub(t).normalize(),xr.copy(this.origin).sub(Xo);const r=t.distanceTo(e)*.5,o=-this.direction.dot(gr),a=xr.dot(this.direction),c=-xr.dot(gr),l=xr.lengthSq(),h=Math.abs(1-o*o);let u,f,d,m;if(h>0)if(u=o*c-a,f=o*a-c,m=r*h,u>=0)if(f>=-m)if(f<=m){const x=1/h;u*=x,f*=x,d=u*(u+o*f+2*a)+f*(o*u+f+2*c)+l}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f<=-m?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l):f<=m?(u=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+l):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Xo).addScaledVector(gr,f),d}intersectSphere(t,e){if(t.radius<0)return null;Hn.subVectors(t.center,this.origin);const n=Hn.dot(this.direction),i=Hn.dot(Hn)-n*n,r=t.radius*t.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,i=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,i=(t.min.x-f.x)*l),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-f.z)*u,c=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,c=(t.min.z-f.z)*u),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Hn)!==null}intersectTriangle(t,e,n,i,r){const o=this.origin,a=this.direction,c=a.x,l=a.y,h=a.z,u=t.x-o.x,f=t.y-o.y,d=t.z-o.z,m=e.x-o.x,x=e.y-o.y,p=e.z-o.z,g=n.x-o.x,b=n.y-o.y,T=n.z-o.z,v=Math.abs(c),y=Math.abs(l),w=Math.abs(h);let P,_,M,R,L,U,W,B,H,K,V,it;if(v>=y&&v>=w?(M=c,U=u,H=m,it=g,c>=0?(P=l,_=h,R=f,L=d,W=x,B=p,K=b,V=T):(P=h,_=l,R=d,L=f,W=p,B=x,K=T,V=b)):y>=w?(M=l,U=f,H=x,it=b,l>=0?(P=h,_=c,R=d,L=u,W=p,B=m,K=T,V=g):(P=c,_=h,R=u,L=d,W=m,B=p,K=g,V=T)):(M=h,U=d,H=p,it=T,h>=0?(P=c,_=l,R=u,L=f,W=m,B=x,K=g,V=b):(P=l,_=c,R=f,L=u,W=x,B=m,K=b,V=g)),M===0)return null;const G=P/M,et=_/M,rt=1/M,ft=R-G*U,O=L-et*U,X=W-G*H,F=B-et*H,z=K-G*it,E=V-et*it,C=z*F-E*X,k=ft*E-O*z,J=X*O-F*ft;if(i){if(C<0||k<0||J<0)return null}else if((C<0||k<0||J<0)&&(C>0||k>0||J>0))return null;const tt=C+k+J;if(tt===0)return null;const ut=rt*(C*U+k*H+J*it);return(tt>0?ut<0:ut>0)?null:this.at(ut/tt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Qn extends Ni{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.combine=hl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const xc=new ne,wi=new wl,_r=new gs,_c=new N,vr=new N,Mr=new N,yr=new N,qo=new N,Sr=new N,vc=new N,br=new N;class Ce extends Ie{constructor(t=new Be,e=new Qn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(r&&a){Sr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],u=r[c];h!==0&&(qo.fromBufferAttribute(u,t),o?Sr.addScaledVector(qo,h):Sr.addScaledVector(qo.sub(e),h))}e.add(Sr)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),_r.copy(n.boundingSphere),_r.applyMatrix4(r),wi.copy(t.ray).recast(t.near),!(_r.containsPoint(wi.origin)===!1&&(wi.intersectSphere(_r,_c)===null||wi.origin.distanceToSquared(_c)>(t.far-t.near)**2))&&(xc.copy(r).invert(),wi.copy(t.ray).applyMatrix4(xc),!(n.boundingBox!==null&&wi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,wi)))}_computeIntersections(t,e,n){let i;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,x=f.length;m<x;m++){const p=f[m],g=o[p.materialIndex],b=Math.max(p.start,d.start),T=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let v=b,y=T;v<y;v+=3){const w=a.getX(v),P=a.getX(v+1),_=a.getX(v+2);i=wr(this,g,t,n,l,h,u,w,P,_),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const m=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let p=m,g=x;p<g;p+=3){const b=a.getX(p),T=a.getX(p+1),v=a.getX(p+2);i=wr(this,o,t,n,l,h,u,b,T,v),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let m=0,x=f.length;m<x;m++){const p=f[m],g=o[p.materialIndex],b=Math.max(p.start,d.start),T=Math.min(c.count,Math.min(p.start+p.count,d.start+d.count));for(let v=b,y=T;v<y;v+=3){const w=v,P=v+1,_=v+2;i=wr(this,g,t,n,l,h,u,w,P,_),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const m=Math.max(0,d.start),x=Math.min(c.count,d.start+d.count);for(let p=m,g=x;p<g;p+=3){const b=p,T=p+1,v=p+2;i=wr(this,o,t,n,l,h,u,b,T,v),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}}}function Rd(s,t,e,n,i,r,o,a){let c;if(t.side===en?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,t.side===Ci,a),c===null)return null;br.copy(a),br.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(br);return l<e.near||l>e.far?null:{distance:l,point:br.clone(),object:s}}function wr(s,t,e,n,i,r,o,a,c,l){s.getVertexPosition(a,vr),s.getVertexPosition(c,Mr),s.getVertexPosition(l,yr);const h=Rd(s,t,e,n,vr,Mr,yr,vc);if(h){const u=new N;pn.getBarycoord(vc,vr,Mr,yr,u),i&&(h.uv=pn.getInterpolatedAttribute(i,a,c,l,u,new kt)),r&&(h.uv1=pn.getInterpolatedAttribute(r,a,c,l,u,new kt)),o&&(h.normal=pn.getInterpolatedAttribute(o,a,c,l,u,new N),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:c,c:l,normal:new N,materialIndex:0};pn.getNormal(vr,Mr,yr,f.normal),h.face=f,h.barycoord=u}return h}class ps extends Ge{constructor(t=null,e=1,n=1,i,r,o,a,c,l=Oe,h=Oe,u,f){super(null,o,a,c,l,h,i,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Mc extends gn{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Qi=new ne,yc=new ne,Er=[],Sc=new Ui,Cd=new ne,Es=new Ce,Ts=new gs;class Xr extends Ce{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Mc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Cd)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ui),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Qi),Sc.copy(t.boundingBox).applyMatrix4(Qi),this.boundingBox.union(Sc)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new gs),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Qi),Ts.copy(t.boundingSphere).applyMatrix4(Qi),this.boundingSphere.union(Ts)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(Es.geometry=this.geometry,Es.material=this.material,Es.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ts.copy(this.boundingSphere),Ts.applyMatrix4(n),t.ray.intersectsSphere(Ts)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Qi),yc.multiplyMatrices(n,Qi),Es.matrixWorld=yc,Es.raycast(t,Er);for(let o=0,a=Er.length;o<a;o++){const c=Er[o];c.instanceId=r,c.object=this,e.push(c)}Er.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Mc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new ps(new Float32Array(i*this.count),i,this.count,mo,En));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=i*t;return r[c]=a,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Ei=new gs,Pd=new kt(.5,.5),Tr=new N;class El{constructor(t=new Xn,e=new Xn,n=new Xn,i=new Xn,r=new Xn,o=new Xn){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Un,n=!1){const i=this.planes,r=t.elements,o=r[0],a=r[1],c=r[2],l=r[3],h=r[4],u=r[5],f=r[6],d=r[7],m=r[8],x=r[9],p=r[10],g=r[11],b=r[12],T=r[13],v=r[14],y=r[15];if(i[0].setComponents(l-o,d-h,g-m,y-b).normalize(),i[1].setComponents(l+o,d+h,g+m,y+b).normalize(),i[2].setComponents(l+a,d+u,g+x,y+T).normalize(),i[3].setComponents(l-a,d-u,g-x,y-T).normalize(),n)i[4].setComponents(c,f,p,v).normalize(),i[5].setComponents(l-c,d-f,g-p,y-v).normalize();else if(i[4].setComponents(l-c,d-f,g-p,y-v).normalize(),e===Un)i[5].setComponents(l+c,d+f,g+p,y+v).normalize();else if(e===Js)i[5].setComponents(c,f,p,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ei.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ei.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ei)}intersectsSprite(t){Ei.center.set(0,0,0);const e=Pd.distanceTo(t.center);return Ei.radius=.7071067811865476+e,Ei.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ei)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Tr.x=i.normal.x>0?t.max.x:t.min.x,Tr.y=i.normal.y>0?t.max.y:t.min.y,Tr.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Tr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class cu extends Ni{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Gt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const to=new N,eo=new N,bc=new ne,As=new wl,Ar=new gs,Yo=new N,wc=new N;class Ld extends Ie{constructor(t=new Be,e=new cu){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)to.fromBufferAttribute(e,i-1),eo.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=to.distanceTo(eo);t.setAttribute("lineDistance",new ue(n,1))}else Ht("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ar.copy(n.boundingSphere),Ar.applyMatrix4(i),Ar.radius+=r,t.ray.intersectsSphere(Ar)===!1)return;bc.copy(i).invert(),As.copy(t.ray).applyMatrix4(bc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const d=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let x=d,p=m-1;x<p;x+=l){const g=h.getX(x),b=h.getX(x+1),T=Rr(this,t,As,c,g,b,x);T&&e.push(T)}if(this.isLineLoop){const x=h.getX(m-1),p=h.getX(d),g=Rr(this,t,As,c,x,p,m-1);g&&e.push(g)}}else{const d=Math.max(0,o.start),m=Math.min(f.count,o.start+o.count);for(let x=d,p=m-1;x<p;x+=l){const g=Rr(this,t,As,c,x,x+1,x);g&&e.push(g)}if(this.isLineLoop){const x=Rr(this,t,As,c,m-1,d,m-1);x&&e.push(x)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Rr(s,t,e,n,i,r,o){const a=s.geometry.attributes.position;if(to.fromBufferAttribute(a,i),eo.fromBufferAttribute(a,r),e.distanceSqToSegment(to,eo,Yo,wc)>n)return;Yo.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(Yo);if(!(l<t.near||l>t.far))return{distance:l,point:wc.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}const Ec=new N,Tc=new N;class Id extends Ld{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)Ec.fromBufferAttribute(e,i),Tc.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Ec.distanceTo(Tc);t.setAttribute("lineDistance",new ue(n,1))}else Ht("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class hu extends Ge{constructor(t=[],e=Pi,n,i,r,o,a,c,l,h){super(t,e,n,i,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Tl extends Ge{constructor(t,e,n,i,r,o,a,c,l){super(t,e,n,i,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class tr extends Ge{constructor(t,e,n=Fn,i,r,o,a=Oe,c=Oe,l,h=ni,u=1){if(h!==ni&&h!==Ri)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:t,height:e,depth:u};super(f,i,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new yl(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class Dd extends tr{constructor(t,e=Fn,n=Pi,i,r,o=Oe,a=Oe,c,l=ni){const h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,n,i,r,o,a,c,l),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class uu extends Ge{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class xn extends Be{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],u=[];let f=0,d=0;m("z","y","x",-1,-1,n,e,t,o,r,0),m("z","y","x",1,-1,n,e,-t,o,r,1),m("x","z","y",1,1,t,n,e,i,o,2),m("x","z","y",1,-1,t,n,-e,i,o,3),m("x","y","z",1,-1,t,e,n,i,r,4),m("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new ue(l,3)),this.setAttribute("normal",new ue(h,3)),this.setAttribute("uv",new ue(u,2));function m(x,p,g,b,T,v,y,w,P,_,M){const R=v/P,L=y/_,U=v/2,W=y/2,B=w/2,H=P+1,K=_+1;let V=0,it=0;const G=new N;for(let et=0;et<K;et++){const rt=et*L-W;for(let ft=0;ft<H;ft++){const O=ft*R-U;G[x]=O*b,G[p]=rt*T,G[g]=B,l.push(G.x,G.y,G.z),G[x]=0,G[p]=0,G[g]=w>0?1:-1,h.push(G.x,G.y,G.z),u.push(ft/P),u.push(1-et/_),V+=1}}for(let et=0;et<_;et++)for(let rt=0;rt<P;rt++){const ft=f+rt+H*et,O=f+rt+H*(et+1),X=f+(rt+1)+H*(et+1),F=f+(rt+1)+H*et;c.push(ft,O,F),c.push(O,X,F),it+=6}a.addGroup(d,it,M),d+=it,f+=V}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Ws extends Be{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const r=[],o=[],a=[],c=[],l=new N,h=new kt;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){const d=n+u/e*i;l.x=t*Math.cos(d),l.y=t*Math.sin(d),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ue(o,3)),this.setAttribute("normal",new ue(a,3)),this.setAttribute("uv",new ue(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ws(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class ii extends Be{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,u=t/a,f=e/c,d=[],m=[],x=[],p=[];for(let g=0;g<h;g++){const b=g*f-o;for(let T=0;T<l;T++){const v=T*u-r;m.push(v,-b,0),x.push(0,0,1),p.push(T/a),p.push(1-g/c)}}for(let g=0;g<c;g++)for(let b=0;b<a;b++){const T=b+l*g,v=b+l*(g+1),y=b+1+l*(g+1),w=b+1+l*g;d.push(T,v,w),d.push(v,y,w)}this.setIndex(d),this.setAttribute("position",new ue(m,3)),this.setAttribute("normal",new ue(x,3)),this.setAttribute("uv",new ue(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ii(t.width,t.height,t.widthSegments,t.heightSegments)}}function ms(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];if(Ac(i))i.isRenderTargetTexture?(Ht("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone();else if(Array.isArray(i))if(Ac(i[0])){const r=[];for(let o=0,a=i.length;o<a;o++)r[o]=i[o].clone();t[e][n]=r}else t[e][n]=i.slice();else t[e][n]=i}}return t}function Ke(s){const t={};for(let e=0;e<s.length;e++){const n=ms(s[e]);for(const i in n)t[i]=n[i]}return t}function Ac(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function Ud(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function fu(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ee.workingColorSpace}const Nd={clone:ms,merge:Ke};var Fd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class nn extends Ni{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Fd,this.fragmentShader=zd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ms(t.uniforms),this.uniformsGroups=Ud(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const n in t.uniforms){const i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new Gt().setHex(i.value);break;case"v2":this.uniforms[n].value=new kt().fromArray(i.value);break;case"v3":this.uniforms[n].value=new N().fromArray(i.value);break;case"v4":this.uniforms[n].value=new ge().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Xt().fromArray(i.value);break;case"m4":this.uniforms[n].value=new ne().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class Od extends nn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class no extends Ni{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ja,this.normalScale=new kt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.combine=hl,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class kd extends Ni{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Rf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Bd extends Ni{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const $o={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(Rc(s)||(this.files[s]=t))},get:function(s){if(this.enabled!==!1&&!Rc(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function Rc(s){try{const t=s.slice(s.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}class Hd{constructor(t,e,n){const i=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){const d=l[u],m=l[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Gd=new Hd;class Al{constructor(t){this.manager=t!==void 0?t:Gd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}Al.DEFAULT_MATERIAL_NAME="__DEFAULT";const ji=new WeakMap;class Vd extends Al{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=$o.get(`image:${t}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0);else{let u=ji.get(o);u===void 0&&(u=[],ji.set(o,u)),u.push({onLoad:e,onError:i})}return o}const a=Qs("img");function c(){h(),e&&e(this);const u=ji.get(this)||[];for(let f=0;f<u.length;f++){const d=u[f];d.onLoad&&d.onLoad(this)}ji.delete(this),r.manager.itemEnd(t)}function l(u){h(),i&&i(u),$o.remove(`image:${t}`);const f=ji.get(this)||[];for(let d=0;d<f.length;d++){const m=f[d];m.onError&&m.onError(u)}ji.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),$o.add(`image:${t}`,a),r.manager.itemStart(t),a.src=t,a}}class tl extends Al{constructor(t){super(t)}load(t,e,n,i){const r=new Ge,o=new Vd(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,i),r}}class du extends Ie{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Gt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class Wd extends du{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ie.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Gt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const Ko=new ne,Cc=new N,Pc=new N;class Xd{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new kt(512,512),this.mapType=tn,this.map=null,this.mapPass=null,this.matrix=new ne,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new El,this._frameExtents=new kt(1,1),this._viewportCount=1,this._viewports=[new ge(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera;Cc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Cc),Pc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Pc),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,i){Ko.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Ko,t.coordinateSystem,t.reversedDepth);const r=this._frameExtents,o=i?i.z/r.x:1,a=i?i.w/r.y:1,c=i?i.x/r.x:0,l=i?i.y/r.y:0;t.coordinateSystem===Js||t.reversedDepth?e.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,.5,.5,0,0,0,1),e.multiply(Ko)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Cr=new N,Pr=new ve,Rn=new N;class pu extends Ie{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ne,this.projectionMatrix=new ne,this.projectionMatrixInverse=new ne,this.coordinateSystem=Un,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Cr,Pr,Rn),Rn.x===1&&Rn.y===1&&Rn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Cr,Pr,Rn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Cr,Pr,Rn),Rn.x===1&&Rn.y===1&&Rn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Cr,Pr,Rn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ui=new N,Lc=new kt,Ic=new kt;class je extends pu{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=js*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Gs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return js*2*Math.atan(Math.tan(Gs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ui.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ui.x,ui.y).multiplyScalar(-t/ui.z),ui.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ui.x,ui.y).multiplyScalar(-t/ui.z)}getViewSize(t,e){return this.getViewBounds(t,Lc,Ic),e.subVectors(Ic,Lc)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Gs*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,e-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class go extends pu{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=i+e,c=i-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class qd extends Xd{constructor(){super(new go(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Yd extends du{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ie.DEFAULT_UP),this.updateMatrix(),this.target=new Ie,this.shadow=new qd}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}const ts=-90,es=1;class $d extends Ie{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new je(ts,es,t,e);i.layers=this.layers,this.add(i);const r=new je(ts,es,t,e);r.layers=this.layers,this.add(r);const o=new je(ts,es,t,e);o.layers=this.layers,this.add(o);const a=new je(ts,es,t,e);a.layers=this.layers,this.add(a);const c=new je(ts,es,t,e);c.layers=this.layers,this.add(c);const l=new je(ts,es,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===Un)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Js)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(n,0,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,4,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class Kd extends je{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const Dc=new ne;class el{constructor(t,e,n=0,i=1/0){this.ray=new wl(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new Sl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):ie("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Dc.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Dc),this}intersectObject(t,e=!0,n=[]){return nl(t,this,n,e),n.sort(Uc),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)nl(t[i],this,n,e);return n.sort(Uc),n}}function Uc(s,t){return s.distance-t.distance}function nl(s,t,e,n){let i=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let o=0,a=r.length;o<a;o++)nl(r[o],t,e,!0)}}const Bl=class Bl{constructor(t,e,n,i){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){const r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=i,this}};Bl.prototype.isMatrix2=!0;let Nc=Bl;function Fc(s,t,e,n){const i=Zd(n);switch(e){case jh:return s*t;case mo:return s*t/i.components*i.byteLength;case ml:return s*t/i.components*i.byteLength;case Li:return s*t*2/i.components*i.byteLength;case gl:return s*t*2/i.components*i.byteLength;case tu:return s*t*3/i.components*i.byteLength;case hn:return s*t*4/i.components*i.byteLength;case xl:return s*t*4/i.components*i.byteLength;case Hr:case Gr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Vr:case Wr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case wa:case Ta:return Math.max(s,16)*Math.max(t,8)/4;case ba:case Ea:return Math.max(s,8)*Math.max(t,8)/2;case Aa:case Ra:case Pa:case La:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Ca:case $r:case Ia:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Da:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Ua:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Na:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Fa:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case za:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Oa:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case ka:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Ba:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Ha:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Ga:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Va:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Wa:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Xa:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case qa:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Ya:case $a:case Ka:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Za:case Ja:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Kr:case Qa:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Zd(s){switch(s){case tn:case Kh:return{byteLength:1,components:1};case Ks:case Zh:case _n:return{byteLength:2,components:1};case dl:case pl:return{byteLength:2,components:4};case Fn:case fl:case En:return{byteLength:4,components:1};case Jh:case Qh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:cl}}));typeof window<"u"&&(window.__THREE__?Ht("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=cl);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function mu(){let s=null,t=!1,e=null,n=null;function i(r,o){n=s.requestAnimationFrame(i),e(r,o)}return{start:function(){t!==!0&&e!==null&&s!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Jd(s){const t=new WeakMap;function e(a,c){const l=a.array,h=a.usage,u=l.byteLength,f=s.createBuffer();s.bindBuffer(c,f),s.bufferData(c,l,h),a.onUploadCallback();let d;if(l instanceof Float32Array)d=s.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=s.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=s.SHORT;else if(l instanceof Uint32Array)d=s.UNSIGNED_INT;else if(l instanceof Int32Array)d=s.INT;else if(l instanceof Int8Array)d=s.BYTE;else if(l instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){const h=c.array,u=c.updateRanges;if(s.bindBuffer(l,a),u.length===0)s.bufferSubData(l,0,h);else{u.sort((d,m)=>d.start-m.start);let f=0;for(let d=1;d<u.length;d++){const m=u[f],x=u[d];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++f,u[f]=x)}u.length=f+1;for(let d=0,m=u.length;d<m;d++){const x=u[d];s.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(s.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:r,update:o}}var Qd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,jd=`#ifdef USE_ALPHAHASH
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
#endif`,tp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ep=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,np=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ip=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,sp=`#ifdef USE_AOMAP
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
#endif`,rp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,op=`#ifdef USE_BATCHING
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
#endif`,ap=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,lp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,cp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,up=`#ifdef USE_IRIDESCENCE
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
#endif`,fp=`#ifdef USE_BUMPMAP
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
#endif`,dp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,pp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,mp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,gp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,_p=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,vp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Mp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,yp=`#define PI 3.141592653589793
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
} // validated`,Sp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,bp=`vec3 transformedNormal = objectNormal;
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
#endif`,wp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ep=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Tp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ap=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Rp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Cp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Pp=`#ifdef USE_ENVMAP
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
#endif`,Lp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Ip=`#ifdef USE_ENVMAP
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
#endif`,Dp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Up=`#ifdef USE_ENVMAP
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
#endif`,Np=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Fp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,zp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Op=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,kp=`#ifdef USE_GRADIENTMAP
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
}`,Bp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Hp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Gp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Vp=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Wp=`#ifdef USE_ENVMAP
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
#endif`,Xp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Yp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$p=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Kp=`PhysicalMaterial material;
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
#endif`,Zp=`uniform sampler2D dfgLUT;
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
}`,Jp=`
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
#endif`,Qp=`#if defined( RE_IndirectDiffuse )
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
#endif`,jp=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,tm=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,em=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,nm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,im=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,rm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,om=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,am=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,lm=`#if defined( USE_POINTS_UV )
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
#endif`,cm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,hm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,um=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,fm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,dm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pm=`#ifdef USE_MORPHTARGETS
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
#endif`,mm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,xm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,_m=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,ym=`#ifdef USE_NORMALMAP
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
#endif`,Sm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,bm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,wm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Em=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Tm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Am=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Rm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Cm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Pm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Lm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Im=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Dm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Um=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Nm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Fm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,zm=`float getShadowMask() {
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
}`,Om=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,km=`#ifdef USE_SKINNING
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
#endif`,Bm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Hm=`#ifdef USE_SKINNING
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
#endif`,Gm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Vm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Wm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Xm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,qm=`#ifdef USE_TRANSMISSION
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
#endif`,Ym=`#ifdef USE_TRANSMISSION
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
#endif`,$m=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Km=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Qm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,jm=`uniform sampler2D t2D;
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
}`,t0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,e0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,n0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,i0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,s0=`#include <common>
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
}`,r0=`#if DEPTH_PACKING == 3200
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
}`,o0=`#define DISTANCE
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
}`,a0=`#define DISTANCE
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
}`,l0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,c0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,h0=`uniform float scale;
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
}`,u0=`uniform vec3 diffuse;
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
}`,f0=`#include <common>
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
}`,d0=`uniform vec3 diffuse;
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
}`,p0=`#define LAMBERT
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
}`,m0=`#define LAMBERT
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
}`,g0=`#define MATCAP
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
}`,x0=`#define MATCAP
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
}`,_0=`#define NORMAL
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
}`,v0=`#define NORMAL
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
}`,M0=`#define PHONG
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
}`,y0=`#define PHONG
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
}`,S0=`#define STANDARD
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
}`,b0=`#define STANDARD
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
}`,w0=`#define TOON
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
}`,E0=`#define TOON
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
}`,T0=`uniform float size;
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
}`,A0=`uniform vec3 diffuse;
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
}`,R0=`#include <common>
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
}`,C0=`uniform vec3 color;
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
}`,P0=`uniform float rotation;
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
}`,L0=`uniform vec3 diffuse;
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
}`,Kt={alphahash_fragment:Qd,alphahash_pars_fragment:jd,alphamap_fragment:tp,alphamap_pars_fragment:ep,alphatest_fragment:np,alphatest_pars_fragment:ip,aomap_fragment:sp,aomap_pars_fragment:rp,batching_pars_vertex:op,batching_vertex:ap,begin_vertex:lp,beginnormal_vertex:cp,bsdfs:hp,iridescence_fragment:up,bumpmap_pars_fragment:fp,clipping_planes_fragment:dp,clipping_planes_pars_fragment:pp,clipping_planes_pars_vertex:mp,clipping_planes_vertex:gp,color_fragment:xp,color_pars_fragment:_p,color_pars_vertex:vp,color_vertex:Mp,common:yp,cube_uv_reflection_fragment:Sp,defaultnormal_vertex:bp,displacementmap_pars_vertex:wp,displacementmap_vertex:Ep,emissivemap_fragment:Tp,emissivemap_pars_fragment:Ap,colorspace_fragment:Rp,colorspace_pars_fragment:Cp,envmap_fragment:Pp,envmap_common_pars_fragment:Lp,envmap_pars_fragment:Ip,envmap_pars_vertex:Dp,envmap_physical_pars_fragment:Wp,envmap_vertex:Up,fog_vertex:Np,fog_pars_vertex:Fp,fog_fragment:zp,fog_pars_fragment:Op,gradientmap_pars_fragment:kp,lightmap_pars_fragment:Bp,lights_lambert_fragment:Hp,lights_lambert_pars_fragment:Gp,lights_pars_begin:Vp,lights_toon_fragment:Xp,lights_toon_pars_fragment:qp,lights_phong_fragment:Yp,lights_phong_pars_fragment:$p,lights_physical_fragment:Kp,lights_physical_pars_fragment:Zp,lights_fragment_begin:Jp,lights_fragment_maps:Qp,lights_fragment_end:jp,lightprobes_pars_fragment:tm,logdepthbuf_fragment:em,logdepthbuf_pars_fragment:nm,logdepthbuf_pars_vertex:im,logdepthbuf_vertex:sm,map_fragment:rm,map_pars_fragment:om,map_particle_fragment:am,map_particle_pars_fragment:lm,metalnessmap_fragment:cm,metalnessmap_pars_fragment:hm,morphinstance_vertex:um,morphcolor_vertex:fm,morphnormal_vertex:dm,morphtarget_pars_vertex:pm,morphtarget_vertex:mm,normal_fragment_begin:gm,normal_fragment_maps:xm,normal_pars_fragment:_m,normal_pars_vertex:vm,normal_vertex:Mm,normalmap_pars_fragment:ym,clearcoat_normal_fragment_begin:Sm,clearcoat_normal_fragment_maps:bm,clearcoat_pars_fragment:wm,iridescence_pars_fragment:Em,opaque_fragment:Tm,packing:Am,premultiplied_alpha_fragment:Rm,project_vertex:Cm,dithering_fragment:Pm,dithering_pars_fragment:Lm,roughnessmap_fragment:Im,roughnessmap_pars_fragment:Dm,shadowmap_pars_fragment:Um,shadowmap_pars_vertex:Nm,shadowmap_vertex:Fm,shadowmask_pars_fragment:zm,skinbase_vertex:Om,skinning_pars_vertex:km,skinning_vertex:Bm,skinnormal_vertex:Hm,specularmap_fragment:Gm,specularmap_pars_fragment:Vm,tonemapping_fragment:Wm,tonemapping_pars_fragment:Xm,transmission_fragment:qm,transmission_pars_fragment:Ym,uv_pars_fragment:$m,uv_pars_vertex:Km,uv_vertex:Zm,worldpos_vertex:Jm,background_vert:Qm,background_frag:jm,backgroundCube_vert:t0,backgroundCube_frag:e0,cube_vert:n0,cube_frag:i0,depth_vert:s0,depth_frag:r0,distance_vert:o0,distance_frag:a0,equirect_vert:l0,equirect_frag:c0,linedashed_vert:h0,linedashed_frag:u0,meshbasic_vert:f0,meshbasic_frag:d0,meshlambert_vert:p0,meshlambert_frag:m0,meshmatcap_vert:g0,meshmatcap_frag:x0,meshnormal_vert:_0,meshnormal_frag:v0,meshphong_vert:M0,meshphong_frag:y0,meshphysical_vert:S0,meshphysical_frag:b0,meshtoon_vert:w0,meshtoon_frag:E0,points_vert:T0,points_frag:A0,shadow_vert:R0,shadow_frag:C0,sprite_vert:P0,sprite_frag:L0},yt={common:{diffuse:{value:new Gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xt}},envmap:{envMap:{value:null},envMapRotation:{value:new Xt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xt},normalScale:{value:new kt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new N},probesMax:{value:new N},probesResolution:{value:new N}},points:{diffuse:{value:new Gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0},uvTransform:{value:new Xt}},sprite:{diffuse:{value:new Gt(16777215)},opacity:{value:1},center:{value:new kt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}}},In={basic:{uniforms:Ke([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.fog]),vertexShader:Kt.meshbasic_vert,fragmentShader:Kt.meshbasic_frag},lambert:{uniforms:Ke([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new Gt(0)},envMapIntensity:{value:1}}]),vertexShader:Kt.meshlambert_vert,fragmentShader:Kt.meshlambert_frag},phong:{uniforms:Ke([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new Gt(0)},specular:{value:new Gt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Kt.meshphong_vert,fragmentShader:Kt.meshphong_frag},standard:{uniforms:Ke([yt.common,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.roughnessmap,yt.metalnessmap,yt.fog,yt.lights,{emissive:{value:new Gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag},toon:{uniforms:Ke([yt.common,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.gradientmap,yt.fog,yt.lights,{emissive:{value:new Gt(0)}}]),vertexShader:Kt.meshtoon_vert,fragmentShader:Kt.meshtoon_frag},matcap:{uniforms:Ke([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,{matcap:{value:null}}]),vertexShader:Kt.meshmatcap_vert,fragmentShader:Kt.meshmatcap_frag},points:{uniforms:Ke([yt.points,yt.fog]),vertexShader:Kt.points_vert,fragmentShader:Kt.points_frag},dashed:{uniforms:Ke([yt.common,yt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Kt.linedashed_vert,fragmentShader:Kt.linedashed_frag},depth:{uniforms:Ke([yt.common,yt.displacementmap]),vertexShader:Kt.depth_vert,fragmentShader:Kt.depth_frag},normal:{uniforms:Ke([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,{opacity:{value:1}}]),vertexShader:Kt.meshnormal_vert,fragmentShader:Kt.meshnormal_frag},sprite:{uniforms:Ke([yt.sprite,yt.fog]),vertexShader:Kt.sprite_vert,fragmentShader:Kt.sprite_frag},background:{uniforms:{uvTransform:{value:new Xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Kt.background_vert,fragmentShader:Kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xt}},vertexShader:Kt.backgroundCube_vert,fragmentShader:Kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Kt.cube_vert,fragmentShader:Kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Kt.equirect_vert,fragmentShader:Kt.equirect_frag},distance:{uniforms:Ke([yt.common,yt.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Kt.distance_vert,fragmentShader:Kt.distance_frag},shadow:{uniforms:Ke([yt.lights,yt.fog,{color:{value:new Gt(0)},opacity:{value:1}}]),vertexShader:Kt.shadow_vert,fragmentShader:Kt.shadow_frag}};In.physical={uniforms:Ke([In.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xt},clearcoatNormalScale:{value:new kt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xt},sheen:{value:0},sheenColor:{value:new Gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xt},transmissionSamplerSize:{value:new kt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xt},attenuationDistance:{value:0},attenuationColor:{value:new Gt(0)},specularColor:{value:new Gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xt},anisotropyVector:{value:new kt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xt}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag};const Lr={r:0,b:0,g:0},I0=new ne,gu=new Xt;gu.set(-1,0,0,0,1,0,0,0,1);function D0(s,t,e,n,i,r){const o=new Gt(0);let a=i===!0?0:1,c,l,h=null,u=0,f=null;function d(b){let T=b.isScene===!0?b.background:null;if(T&&T.isTexture){const v=b.backgroundBlurriness>0;T=t.get(T,v)}return T}function m(b){let T=!1;const v=d(b);v===null?p(o,a):v&&v.isColor&&(p(v,1),T=!0);const y=s.xr.getEnvironmentBlendMode();y==="additive"?e.buffers.color.setClear(0,0,0,1,r):y==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(s.autoClear||T)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function x(b,T){const v=d(T);v&&(v.isCubeTexture||v.mapping===po)?(l===void 0&&(l=new Ce(new xn(1,1,1),new nn({name:"BackgroundCubeMaterial",uniforms:ms(In.backgroundCube.uniforms),vertexShader:In.backgroundCube.vertexShader,fragmentShader:In.backgroundCube.fragmentShader,side:en,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(y,w,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=v,l.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(I0.makeRotationFromEuler(T.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(gu),l.material.toneMapped=ee.getTransfer(v.colorSpace)!==ce,(h!==v||u!==v.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,h=v,u=v.version,f=s.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Ce(new ii(2,2),new nn({name:"BackgroundMaterial",uniforms:ms(In.background.uniforms),vertexShader:In.background.vertexShader,fragmentShader:In.background.fragmentShader,side:Ci,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.toneMapped=ee.getTransfer(v.colorSpace)!==ce,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||u!==v.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,h=v,u=v.version,f=s.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function p(b,T){b.getRGB(Lr,fu(s)),e.buffers.color.setClear(Lr.r,Lr.g,Lr.b,T,r)}function g(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(b,T=1){o.set(b),a=T,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(b){a=b,p(o,a)},render:m,addToRenderList:x,dispose:g}}function U0(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null);let r=i,o=!1;function a(L,U,W,B,H){let K=!1;const V=u(L,B,W,U);r!==V&&(r=V,l(r.object)),K=d(L,B,W,H),K&&m(L,B,W,H),H!==null&&t.update(H,s.ELEMENT_ARRAY_BUFFER),(K||o)&&(o=!1,v(L,U,W,B),H!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function c(){return s.createVertexArray()}function l(L){return s.bindVertexArray(L)}function h(L){return s.deleteVertexArray(L)}function u(L,U,W,B){const H=B.wireframe===!0;let K=n[U.id];K===void 0&&(K={},n[U.id]=K);const V=L.isInstancedMesh===!0?L.id:0;let it=K[V];it===void 0&&(it={},K[V]=it);let G=it[W.id];G===void 0&&(G={},it[W.id]=G);let et=G[H];return et===void 0&&(et=f(c()),G[H]=et),et}function f(L){const U=[],W=[],B=[];for(let H=0;H<e;H++)U[H]=0,W[H]=0,B[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:W,attributeDivisors:B,object:L,attributes:{},index:null}}function d(L,U,W,B){const H=r.attributes,K=U.attributes;let V=0;const it=W.getAttributes();for(const G in it)if(it[G].location>=0){const rt=H[G];let ft=K[G];if(ft===void 0&&(G==="instanceMatrix"&&L.instanceMatrix&&(ft=L.instanceMatrix),G==="instanceColor"&&L.instanceColor&&(ft=L.instanceColor)),rt===void 0||rt.attribute!==ft||ft&&rt.data!==ft.data)return!0;V++}return r.attributesNum!==V||r.index!==B}function m(L,U,W,B){const H={},K=U.attributes;let V=0;const it=W.getAttributes();for(const G in it)if(it[G].location>=0){let rt=K[G];rt===void 0&&(G==="instanceMatrix"&&L.instanceMatrix&&(rt=L.instanceMatrix),G==="instanceColor"&&L.instanceColor&&(rt=L.instanceColor));const ft={};ft.attribute=rt,rt&&rt.data&&(ft.data=rt.data),H[G]=ft,V++}r.attributes=H,r.attributesNum=V,r.index=B}function x(){const L=r.newAttributes;for(let U=0,W=L.length;U<W;U++)L[U]=0}function p(L){g(L,0)}function g(L,U){const W=r.newAttributes,B=r.enabledAttributes,H=r.attributeDivisors;W[L]=1,B[L]===0&&(s.enableVertexAttribArray(L),B[L]=1),H[L]!==U&&(s.vertexAttribDivisor(L,U),H[L]=U)}function b(){const L=r.newAttributes,U=r.enabledAttributes;for(let W=0,B=U.length;W<B;W++)U[W]!==L[W]&&(s.disableVertexAttribArray(W),U[W]=0)}function T(L,U,W,B,H,K,V){V===!0?s.vertexAttribIPointer(L,U,W,H,K):s.vertexAttribPointer(L,U,W,B,H,K)}function v(L,U,W,B){x();const H=B.attributes,K=W.getAttributes(),V=U.defaultAttributeValues;for(const it in K){const G=K[it];if(G.location>=0){let et=H[it];if(et===void 0&&(it==="instanceMatrix"&&L.instanceMatrix&&(et=L.instanceMatrix),it==="instanceColor"&&L.instanceColor&&(et=L.instanceColor)),et!==void 0){const rt=et.normalized,ft=et.itemSize,O=t.get(et);if(O===void 0)continue;const X=O.buffer,F=O.type,z=O.bytesPerElement,E=F===s.INT||F===s.UNSIGNED_INT||et.gpuType===fl;if(et.isInterleavedBufferAttribute){const C=et.data,k=C.stride,J=et.offset;if(C.isInstancedInterleavedBuffer){for(let tt=0;tt<G.locationSize;tt++)g(G.location+tt,C.meshPerAttribute);L.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=C.meshPerAttribute*C.count)}else for(let tt=0;tt<G.locationSize;tt++)p(G.location+tt);s.bindBuffer(s.ARRAY_BUFFER,X);for(let tt=0;tt<G.locationSize;tt++)T(G.location+tt,ft/G.locationSize,F,rt,k*z,(J+ft/G.locationSize*tt)*z,E)}else{if(et.isInstancedBufferAttribute){for(let C=0;C<G.locationSize;C++)g(G.location+C,et.meshPerAttribute);L.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let C=0;C<G.locationSize;C++)p(G.location+C);s.bindBuffer(s.ARRAY_BUFFER,X);for(let C=0;C<G.locationSize;C++)T(G.location+C,ft/G.locationSize,F,rt,ft*z,ft/G.locationSize*C*z,E)}}else if(V!==void 0){const rt=V[it];if(rt!==void 0)switch(rt.length){case 2:s.vertexAttrib2fv(G.location,rt);break;case 3:s.vertexAttrib3fv(G.location,rt);break;case 4:s.vertexAttrib4fv(G.location,rt);break;default:s.vertexAttrib1fv(G.location,rt)}}}}b()}function y(){M();for(const L in n){const U=n[L];for(const W in U){const B=U[W];for(const H in B){const K=B[H];for(const V in K)h(K[V].object),delete K[V];delete B[H]}}delete n[L]}}function w(L){if(n[L.id]===void 0)return;const U=n[L.id];for(const W in U){const B=U[W];for(const H in B){const K=B[H];for(const V in K)h(K[V].object),delete K[V];delete B[H]}}delete n[L.id]}function P(L){for(const U in n){const W=n[U];for(const B in W){const H=W[B];if(H[L.id]===void 0)continue;const K=H[L.id];for(const V in K)h(K[V].object),delete K[V];delete H[L.id]}}}function _(L){for(const U in n){const W=n[U],B=L.isInstancedMesh===!0?L.id:0,H=W[B];if(H!==void 0){for(const K in H){const V=H[K];for(const it in V)h(V[it].object),delete V[it];delete H[K]}delete W[B],Object.keys(W).length===0&&delete n[U]}}}function M(){R(),o=!0,r!==i&&(r=i,l(r.object))}function R(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:M,resetDefaultState:R,dispose:y,releaseStatesOfGeometry:w,releaseStatesOfObject:_,releaseStatesOfProgram:P,initAttributes:x,enableAttribute:p,disableUnusedAttributes:b}}function N0(s,t,e){let n;function i(c){n=c}function r(c,l){s.drawArrays(n,c,l),e.update(l,n,1)}function o(c,l,h){h!==0&&(s.drawArraysInstanced(n,c,l,h),e.update(l,n,h))}function a(c,l,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let f=0;for(let d=0;d<h;d++)f+=l[d];e.update(f,n,1)}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function F0(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(P){return!(P!==hn&&n.convert(P)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){const _=P===_n&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==tn&&P!==En&&!_&&n.convert(P)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function c(P){if(P==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(Ht("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&f===!1&&Ht("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),p=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),b=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),T=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),y=s.getParameter(s.MAX_SAMPLES),w=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:b,maxVaryings:T,maxFragmentUniforms:v,maxSamples:y,samples:w}}function z0(s){const t=this;let e=null,n=0,i=!1,r=!1;const o=new Xn,a=new Xt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||n!==0||i;return i=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){const m=u.clippingPlanes,x=u.clipIntersection,p=u.clipShadows,g=s.get(u);if(!i||m===null||m.length===0||r&&!p)r?h(null):l();else{const b=r?0:n,T=b*4;let v=g.clippingState||null;c.value=v,v=h(m,f,T,d);for(let y=0;y!==T;++y)v[y]=e[y];g.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,m){const x=u!==null?u.length:0;let p=null;if(x!==0){if(p=c.value,m!==!0||p===null){const g=d+x*4,b=f.matrixWorldInverse;a.getNormalMatrix(b),(p===null||p.length<g)&&(p=new Float32Array(g));for(let T=0,v=d;T!==x;++T,v+=4)o.copy(u[T]).applyMatrix4(b,a),o.normal.toArray(p,v),p[v+3]=o.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,p}}const as=4,O0=6,k0=20,B0=256,Rs=new go,zc=new Gt;let Zo=null,Jo=0,Qo=0,jo=!1;const H0=new N,Ti=new N;class Oc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,i=100,r={}){const{size:o=256,position:a=H0}=r;Zo=this._renderer.getRenderTarget(),Jo=this._renderer.getActiveCubeFace(),Qo=this._renderer.getActiveMipmapLevel(),jo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,i,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Hc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Zo,Jo,Qo),this._renderer.xr.enabled=jo,t.scissorTest=!1,ns(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Pi||t.mapping===ds?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Zo=this._renderer.getRenderTarget(),Jo=this._renderer.getActiveCubeFace(),Qo=this._renderer.getActiveMipmapLevel(),jo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:ke,minFilter:ke,generateMipmaps:!1,type:_n,format:hn,colorSpace:Zr,depthBuffer:!1},i=kc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=kc(t,e,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=G0(r)),this._blurMaterial=W0(r,t,e),this._ggxMaterial=V0(r,t,e)}return i}_compileMaterial(t){const e=new Ce(new Be,t);this._renderer.compile(e,Rs)}_sceneToCubeUV(t,e,n,i,r){const c=new je(90,1,e,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(zc),u.toneMapping=Nn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ce(new xn,new Qn({name:"PMREM.Background",side:en,depthWrite:!1,depthTest:!1})));const x=this._backgroundBox,p=x.material;let g=!1;const b=t.background;b?b.isColor&&(p.color.copy(b),t.background=null,g=!0):(p.color.copy(zc),g=!0);for(let T=0;T<6;T++){const v=T%3;v===0?(c.up.set(0,l[T],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[T],r.y,r.z)):v===1?(c.up.set(0,0,l[T]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[T],r.z)):(c.up.set(0,l[T],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[T]));const y=this._cubeSize;ns(i,v*y,T>2?y:0,y,y),u.setRenderTarget(i),g&&u.render(x,c),u.render(t,c)}u.toneMapping=d,u.autoClear=f,t.background=b}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Pi||t.mapping===ds;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Hc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bc());const r=i?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;ns(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Rs)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){const i=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;const c=o.uniforms,l=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),u=Math.sqrt(l*l-h*h),f=l*1.25,d=u*f,{_lodMax:m}=this,x=this._sizeLods[n],p=3*x*(n>m-as?n-m+as:0),g=4*(this._cubeSize-x);c.envMap.value=t.texture,c.roughness.value=d,c.mipInt.value=m-e,ns(r,p,g,3*x,2*x),i.setRenderTarget(r),i.render(a,Rs),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=m-n,ns(t,p,g,3*x,2*x),i.setRenderTarget(t),i.render(a,Rs)}_blur(t,e,n,i){const r=this._pingPongRenderTarget,o=Math.min(i,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,o),this._blurPass(r,t,n,n,o)}_blurPass(t,e,n,i,r){const o=this._renderer,a=this._blurMaterial,c=this._lodMeshes[i];c.material=a;const l=a.uniforms;l.envMap.value=t.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-n;const h=this._sizeLods[i],u=3*h*(i>this._lodMax-as?i-this._lodMax+as:0),f=4*(this._cubeSize-h);ns(e,u,f,3*h,2*h),o.setRenderTarget(e),o.render(c,Rs)}}function G0(s){const t=[],e=[];let n=s;const i=s-as+1+O0;for(let r=0;r<i;r++){const o=Math.pow(2,n);t.push(o);const a=1/(o-2),c=-a,l=1+a,h=[c,c,l,c,l,l,c,c,l,l,c,l],u=6,f=6,d=3,m=new Float32Array(d*f*u),x=new Float32Array(d*f*u);for(let g=0;g<u;g++){const b=g%3*2/3-1,T=g>2?0:-1,v=[b,T,0,b+2/3,T,0,b+2/3,T+1,0,b,T,0,b+2/3,T+1,0,b,T+1,0];m.set(v,d*f*g);for(let y=0;y<f;y++){const w=h[y*2]*2-1,P=h[y*2+1]*2-1;g===0?Ti.set(1,P,w):g===1?Ti.set(-w,1,-P):g===2?Ti.set(-w,P,1):g===3?Ti.set(-1,P,-w):g===4?Ti.set(-w,-1,P):Ti.set(w,P,-1),Ti.toArray(x,(g*f+y)*d)}}const p=new Be;p.setAttribute("position",new gn(m,d)),p.setAttribute("outputDirection",new gn(x,d)),e.push(new Ce(p,null)),n>as&&n--}return{lodMeshes:e,sizeLods:t}}function kc(s,t,e){const n=new mn(s,t,e);return n.texture.mapping=po,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ns(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function V0(s,t,e){return new nn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:B0,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:xo(),fragmentShader:`

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
		`,blending:jn,depthTest:!1,depthWrite:!1})}function W0(s,t,e){return new nn({name:"SphericalGaussianBlur",defines:{SAMPLES:k0,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:xo(),fragmentShader:`

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
		`,blending:jn,depthTest:!1,depthWrite:!1})}function Bc(){return new nn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xo(),fragmentShader:`

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
		`,blending:jn,depthTest:!1,depthWrite:!1})}function Hc(){return new nn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:jn,depthTest:!1,depthWrite:!1})}function xo(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class xu extends mn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new hu(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new xn(5,5,5),r=new nn({name:"CubemapFromEquirect",uniforms:ms(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:en,blending:jn});r.uniforms.tEquirect.value=e;const o=new Ce(i,r),a=e.minFilter;return e.minFilter===vi&&(e.minFilter=ke),new $d(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}}function X0(s){let t=new WeakMap,e=new WeakMap,n=null;function i(f,d=!1){return f==null?null:d?o(f):r(f)}function r(f){if(f&&f.isTexture){const d=f.mapping;if(d===So||d===bo)if(t.has(f)){const m=t.get(f).texture;return a(m,f.mapping)}else{const m=f.image;if(m&&m.height>0){const x=new xu(m.height);return x.fromEquirectangularTexture(s,f),t.set(f,x),f.addEventListener("dispose",l),a(x.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture){const d=f.mapping,m=d===So||d===bo,x=d===Pi||d===ds;if(m||x){let p=e.get(f);const g=p!==void 0?p.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==g)return n===null&&(n=new Oc(s)),p=m?n.fromEquirectangular(f,p):n.fromCubemap(f,p),p.texture.pmremVersion=f.pmremVersion,e.set(f,p),p.texture;if(p!==void 0)return p.texture;{const b=f.image;return m&&b&&b.height>0||x&&b&&c(b)?(n===null&&(n=new Oc(s)),p=m?n.fromEquirectangular(f):n.fromCubemap(f),p.texture.pmremVersion=f.pmremVersion,e.set(f,p),f.addEventListener("dispose",h),p.texture):null}}}return f}function a(f,d){return d===So?f.mapping=Pi:d===bo&&(f.mapping=ds),f}function c(f){let d=0;const m=6;for(let x=0;x<m;x++)f[x]!==void 0&&d++;return d===m}function l(f){const d=f.target;d.removeEventListener("dispose",l);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function h(f){const d=f.target;d.removeEventListener("dispose",h);const m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function u(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:u}}function q0(s){const t={};function e(n){if(t[n]!==void 0)return t[n];const i=s.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&us("WebGLRenderer: "+n+" extension not supported."),i}}}function Y0(s,t,e,n){const i={},r=new WeakMap;function o(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const m in f.attributes)t.remove(f.attributes[m]);f.removeEventListener("dispose",o),delete i[f.id];const d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,e.memory.geometries++),f}function c(u){const f=u.attributes;for(const d in f)t.update(f[d],s.ARRAY_BUFFER)}function l(u){const f=[],d=u.index,m=u.attributes.position;let x=0;if(m===void 0)return;if(d!==null){const b=d.array;x=d.version;for(let T=0,v=b.length;T<v;T+=3){const y=b[T+0],w=b[T+1],P=b[T+2];f.push(y,w,w,P,P,y)}}else{const b=m.array;x=m.version;for(let T=0,v=b.length/3-1;T<v;T+=3){const y=T+0,w=T+1,P=T+2;f.push(y,w,w,P,P,y)}}const p=new(m.count>=65535?ou:ru)(f,1);p.version=x;const g=r.get(u);g&&t.remove(g),r.set(u,p)}function h(u){const f=r.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function $0(s,t,e){let n;function i(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function c(u,f){s.drawElements(n,f,r,u*o),e.update(f,n,1)}function l(u,f,d){d!==0&&(s.drawElementsInstanced(n,f,r,u*o,d),e.update(f,n,d))}function h(u,f,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,u,0,d);let x=0;for(let p=0;p<d;p++)x+=f[p];e.update(x,n,1)}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function K0(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:ie("WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Z0(s,t,e){const n=new WeakMap,i=new ge;function r(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(a);if(f===void 0||f.count!==u){let R=function(){_.dispose(),n.delete(a),a.removeEventListener("dispose",R)};var d=R;f!==void 0&&f.texture.dispose();const m=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],b=a.morphAttributes.normal||[],T=a.morphAttributes.color||[];let v=0;m===!0&&(v=1),x===!0&&(v=2),p===!0&&(v=3);let y=a.attributes.position.count*v,w=1;y>t.maxTextureSize&&(w=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);const P=new Float32Array(y*w*4*u),_=new iu(P,y,w,u);_.type=En,_.needsUpdate=!0;const M=v*4;for(let L=0;L<u;L++){const U=g[L],W=b[L],B=T[L],H=y*w*4*L;for(let K=0;K<U.count;K++){const V=K*M;m===!0&&(i.fromBufferAttribute(U,K),P[H+V+0]=i.x,P[H+V+1]=i.y,P[H+V+2]=i.z,P[H+V+3]=0),x===!0&&(i.fromBufferAttribute(W,K),P[H+V+4]=i.x,P[H+V+5]=i.y,P[H+V+6]=i.z,P[H+V+7]=0),p===!0&&(i.fromBufferAttribute(B,K),P[H+V+8]=i.x,P[H+V+9]=i.y,P[H+V+10]=i.z,P[H+V+11]=B.itemSize===4?i.w:1)}}f={count:u,texture:_,size:new kt(y,w)},n.set(a,f),a.addEventListener("dispose",R)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let m=0;for(let p=0;p<l.length;p++)m+=l[p];const x=a.morphTargetsRelative?1:1-m;c.getUniforms().setValue(s,"morphTargetBaseInfluence",x),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function J0(s,t,e,n,i){let r=new WeakMap;function o(l){const h=i.render.frame,u=l.geometry,f=t.get(l,u);if(r.get(f)!==h&&(t.update(f),r.set(f,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return f}function a(){r=new WeakMap}function c(l){const h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}const Q0={[Gh]:"LINEAR_TONE_MAPPING",[Vh]:"REINHARD_TONE_MAPPING",[Wh]:"CINEON_TONE_MAPPING",[Xh]:"ACES_FILMIC_TONE_MAPPING",[Yh]:"AGX_TONE_MAPPING",[ul]:"NEUTRAL_TONE_MAPPING",[qh]:"CUSTOM_TONE_MAPPING"};function j0(s,t,e,n,i,r){const o=new mn(t,e,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let a=null,c=null;const l=new Be;l.setAttribute("position",new ue([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new ue([0,2,0,0,2,0],2));const h=new Od({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new Ce(l,h),f=new go(-1,1,1,-1,0,1);let d=null,m=null,x=!1,p,g=null,b=[],T=!1;this.setSize=function(v,y){o.setSize(v,y),a!==null&&a.setSize(v,y),c!==null&&c.setSize(v,y);for(let w=0;w<b.length;w++){const P=b[w];P.setSize&&P.setSize(v,y)}},this.setEffects=function(v){b=v,T=b.length>0&&b[0].isRenderPass===!0;const y=o.width,w=o.height;b.length>0&&a===null&&(a=new mn(y,w,{type:_n,depthBuffer:!1,stencilBuffer:!1}),c=new mn(y,w,{type:_n,depthBuffer:!1,stencilBuffer:!1}));for(let P=0;P<b.length;P++){const _=b[P];_.setSize&&_.setSize(y,w)}},this.begin=function(v,y){if(x||v.toneMapping===Nn&&b.length===0)return!1;if(g=y,y!==null){const w=y.width,P=y.height;(o.width!==w||o.height!==P)&&this.setSize(w,P)}return T===!1&&v.setRenderTarget(o),p=v.toneMapping,v.toneMapping=Nn,!0},this.hasRenderPass=function(){return T},this.end=function(v,y){v.toneMapping=p,x=!0;let w=o,P=a;for(let _=0;_<b.length;_++){const M=b[_];M.enabled!==!1&&(M.render(v,P,w,y),M.needsSwap!==!1&&(w=P,P=P===a?c:a))}if(d!==v.outputColorSpace||m!==v.toneMapping){d=v.outputColorSpace,m=v.toneMapping,h.defines={},ee.getTransfer(d)===ce&&(h.defines.SRGB_TRANSFER="");const _=Q0[m];_&&(h.defines[_]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=w.texture,v.setRenderTarget(g),v.render(u,f),g=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),c!==null&&c.dispose(),l.dispose(),h.dispose()}}const _u=new Ge,il=new tr(1,1),vu=new iu,Mu=new ld,yu=new hu,Gc=[],Vc=[],Wc=new Float32Array(16),Xc=new Float32Array(9),qc=new Float32Array(4);function xs(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=Gc[i];if(r===void 0&&(r=new Float32Array(i),Gc[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function De(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Ue(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function _o(s,t){let e=Vc[t];e===void 0&&(e=new Int32Array(t),Vc[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function tg(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function eg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;s.uniform2fv(this.addr,t),Ue(e,t)}}function ng(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(De(e,t))return;s.uniform3fv(this.addr,t),Ue(e,t)}}function ig(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;s.uniform4fv(this.addr,t),Ue(e,t)}}function sg(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Ue(e,t)}else{if(De(e,n))return;qc.set(n),s.uniformMatrix2fv(this.addr,!1,qc),Ue(e,n)}}function rg(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Ue(e,t)}else{if(De(e,n))return;Xc.set(n),s.uniformMatrix3fv(this.addr,!1,Xc),Ue(e,n)}}function og(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Ue(e,t)}else{if(De(e,n))return;Wc.set(n),s.uniformMatrix4fv(this.addr,!1,Wc),Ue(e,n)}}function ag(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function lg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;s.uniform2iv(this.addr,t),Ue(e,t)}}function cg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(De(e,t))return;s.uniform3iv(this.addr,t),Ue(e,t)}}function hg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;s.uniform4iv(this.addr,t),Ue(e,t)}}function ug(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function fg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;s.uniform2uiv(this.addr,t),Ue(e,t)}}function dg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(De(e,t))return;s.uniform3uiv(this.addr,t),Ue(e,t)}}function pg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;s.uniform4uiv(this.addr,t),Ue(e,t)}}function mg(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(il.compareFunction=e.isReversedDepthBuffer()?vl:_l,r=il):r=_u,e.setTexture2D(t||r,i)}function gg(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Mu,i)}function xg(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||yu,i)}function _g(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||vu,i)}function vg(s){switch(s){case 5126:return tg;case 35664:return eg;case 35665:return ng;case 35666:return ig;case 35674:return sg;case 35675:return rg;case 35676:return og;case 5124:case 35670:return ag;case 35667:case 35671:return lg;case 35668:case 35672:return cg;case 35669:case 35673:return hg;case 5125:return ug;case 36294:return fg;case 36295:return dg;case 36296:return pg;case 35678:case 36198:case 36298:case 36306:case 35682:return mg;case 35679:case 36299:case 36307:return gg;case 35680:case 36300:case 36308:case 36293:return xg;case 36289:case 36303:case 36311:case 36292:return _g}}function Mg(s,t){s.uniform1fv(this.addr,t)}function yg(s,t){const e=xs(t,this.size,2);s.uniform2fv(this.addr,e)}function Sg(s,t){const e=xs(t,this.size,3);s.uniform3fv(this.addr,e)}function bg(s,t){const e=xs(t,this.size,4);s.uniform4fv(this.addr,e)}function wg(s,t){const e=xs(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Eg(s,t){const e=xs(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Tg(s,t){const e=xs(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Ag(s,t){s.uniform1iv(this.addr,t)}function Rg(s,t){s.uniform2iv(this.addr,t)}function Cg(s,t){s.uniform3iv(this.addr,t)}function Pg(s,t){s.uniform4iv(this.addr,t)}function Lg(s,t){s.uniform1uiv(this.addr,t)}function Ig(s,t){s.uniform2uiv(this.addr,t)}function Dg(s,t){s.uniform3uiv(this.addr,t)}function Ug(s,t){s.uniform4uiv(this.addr,t)}function Ng(s,t,e){const n=this.cache,i=t.length,r=_o(e,i);De(n,r)||(s.uniform1iv(this.addr,r),Ue(n,r));let o;this.type===s.SAMPLER_2D_SHADOW?o=il:o=_u;for(let a=0;a!==i;++a)e.setTexture2D(t[a]||o,r[a])}function Fg(s,t,e){const n=this.cache,i=t.length,r=_o(e,i);De(n,r)||(s.uniform1iv(this.addr,r),Ue(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Mu,r[o])}function zg(s,t,e){const n=this.cache,i=t.length,r=_o(e,i);De(n,r)||(s.uniform1iv(this.addr,r),Ue(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||yu,r[o])}function Og(s,t,e){const n=this.cache,i=t.length,r=_o(e,i);De(n,r)||(s.uniform1iv(this.addr,r),Ue(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||vu,r[o])}function kg(s){switch(s){case 5126:return Mg;case 35664:return yg;case 35665:return Sg;case 35666:return bg;case 35674:return wg;case 35675:return Eg;case 35676:return Tg;case 5124:case 35670:return Ag;case 35667:case 35671:return Rg;case 35668:case 35672:return Cg;case 35669:case 35673:return Pg;case 5125:return Lg;case 36294:return Ig;case 36295:return Dg;case 36296:return Ug;case 35678:case 36198:case 36298:case 36306:case 35682:return Ng;case 35679:case 36299:case 36307:return Fg;case 35680:case 36300:case 36308:case 36293:return zg;case 36289:case 36303:case 36311:case 36292:return Og}}class Bg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=vg(e.type)}}class Hg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=kg(e.type)}}class Gg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(t,e[a.id],n)}}}const ta=/(\w+)(\])?(\[|\.)?/g;function Yc(s,t){s.seq.push(t),s.map[t.id]=t}function Vg(s,t,e){const n=s.name,i=n.length;for(ta.lastIndex=0;;){const r=ta.exec(n),o=ta.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){Yc(e,l===void 0?new Bg(a,s,t):new Hg(a,s,t));break}else{let u=e.map[a];u===void 0&&(u=new Gg(a),Yc(e,u)),e=u}}}class qr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const a=t.getActiveUniform(e,o),c=t.getUniformLocation(e,a.name);Vg(a,c,this)}const i=[],r=[];for(const o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(o):r.push(o);i.length>0&&(this.seq=i.concat(r))}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function $c(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const Wg=37297;let Xg=0;function qg(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const Kc=new Xt;function Yg(s){ee._getMatrix(Kc,ee.workingColorSpace,s);const t=`mat3( ${Kc.elements.map(e=>e.toFixed(4))} )`;switch(ee.getTransfer(s)){case Jr:return[t,"LinearTransferOETF"];case ce:return[t,"sRGBTransferOETF"];default:return Ht("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Zc(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+qg(s.getShaderSource(t),a)}else return r}function $g(s,t){const e=Yg(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const Kg={[Gh]:"Linear",[Vh]:"Reinhard",[Wh]:"Cineon",[Xh]:"ACESFilmic",[Yh]:"AgX",[ul]:"Neutral",[qh]:"Custom"};function Zg(s,t){const e=Kg[t];return e===void 0?(Ht("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ir=new N;function Jg(){ee.getLuminanceCoefficients(Ir);const s=Ir.x.toFixed(4),t=Ir.y.toFixed(4),e=Ir.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Qg(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Bs).join(`
`)}function jg(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function tx(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function Bs(s){return s!==""}function Jc(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Qc(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const ex=/^[ \t]*#include +<([\w\d./]+)>/gm;function sl(s){return s.replace(ex,ix)}const nx=new Map;function ix(s,t){let e=Kt[t];if(e===void 0){const n=nx.get(t);if(n!==void 0)e=Kt[n],Ht('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return sl(e)}const sx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function jc(s){return s.replace(sx,rx)}function rx(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function th(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}const ox={[Br]:"SHADOWMAP_TYPE_PCF",[ks]:"SHADOWMAP_TYPE_VSM"};function ax(s){return ox[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const lx={[Pi]:"ENVMAP_TYPE_CUBE",[ds]:"ENVMAP_TYPE_CUBE",[po]:"ENVMAP_TYPE_CUBE_UV"};function cx(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":lx[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const hx={[ds]:"ENVMAP_MODE_REFRACTION"};function ux(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":hx[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const fx={[hl]:"ENVMAP_BLENDING_MULTIPLY",[Ef]:"ENVMAP_BLENDING_MIX",[Tf]:"ENVMAP_BLENDING_ADD"};function dx(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":fx[s.combine]||"ENVMAP_BLENDING_NONE"}function px(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function mx(s,t,e,n){const i=s.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=ax(e),l=cx(e),h=ux(e),u=dx(e),f=px(e),d=Qg(e),m=jg(r),x=i.createProgram();let p,g,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Bs).join(`
`),p.length>0&&(p+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Bs).join(`
`),g.length>0&&(g+=`
`)):(p=[th(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Bs).join(`
`),g=[th(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Nn?"#define TONE_MAPPING":"",e.toneMapping!==Nn?Kt.tonemapping_pars_fragment:"",e.toneMapping!==Nn?Zg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Kt.colorspace_pars_fragment,$g("linearToOutputTexel",e.outputColorSpace),Jg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Bs).join(`
`)),o=sl(o),o=Jc(o,e),o=Qc(o,e),a=sl(a),a=Jc(a,e),a=Qc(a,e),o=jc(o),a=jc(a),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,g=["#define varying in",e.glslVersion===ec?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ec?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const T=b+p+o,v=b+g+a,y=$c(i,i.VERTEX_SHADER,T),w=$c(i,i.FRAGMENT_SHADER,v);i.attachShader(x,y),i.attachShader(x,w),e.index0AttributeName!==void 0?i.bindAttribLocation(x,0,e.index0AttributeName):e.hasPositionAttribute===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function P(L){if(s.debug.checkShaderErrors){const U=i.getProgramInfoLog(x)||"",W=i.getShaderInfoLog(y)||"",B=i.getShaderInfoLog(w)||"",H=U.trim(),K=W.trim(),V=B.trim();let it=!0,G=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(it=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,x,y,w);else{const et=Zc(i,y,"vertex"),rt=Zc(i,w,"fragment");ie("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+H+`
`+et+`
`+rt)}else H!==""?Ht("WebGLProgram: Program Info Log:",H):(K===""||V==="")&&(G=!1);G&&(L.diagnostics={runnable:it,programLog:H,vertexShader:{log:K,prefix:p},fragmentShader:{log:V,prefix:g}})}i.deleteShader(y),i.deleteShader(w),_=new qr(i,x),M=tx(i,x)}let _;this.getUniforms=function(){return _===void 0&&P(this),_};let M;this.getAttributes=function(){return M===void 0&&P(this),M};let R=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=i.getProgramParameter(x,Wg)),R},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Xg++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=y,this.fragmentShader=w,this}let gx=0;class xx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){const i=this._getShaderCacheForMaterial(t);return i.has(e)===!1&&(i.add(e),e.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new _x(t),e.set(t,n)),n}}class _x{constructor(t){this.id=gx++,this.code=t,this.usedTimes=0}}function vx(s){return s===Li||s===$r||s===Kr}function Mx(s,t,e,n,i,r){const o=new Sl,a=new xx,c=new Set,l=[],h=new Map,u=n.logarithmicDepthBuffer;let f=n.precision;const d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(_){return c.add(_),_===0?"uv":`uv${_}`}function x(_,M,R,L,U,W){const B=L.fog,H=U.geometry,K=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?L.environment:null,V=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,it=t.get(_.envMap||K,V),G=it&&it.mapping===po?it.image.height:null,et=d[_.type];_.precision!==null&&(f=n.getMaxPrecision(_.precision),f!==_.precision&&Ht("WebGLProgram.getParameters:",_.precision,"not supported, using",f,"instead."));const rt=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,ft=rt!==void 0?rt.length:0;let O=0;H.morphAttributes.position!==void 0&&(O=1),H.morphAttributes.normal!==void 0&&(O=2),H.morphAttributes.color!==void 0&&(O=3);let X,F,z,E;if(et){const pe=In[et];X=pe.vertexShader,F=pe.fragmentShader}else{X=_.vertexShader,F=_.fragmentShader;const pe=a.getVertexShaderStage(_),oe=a.getFragmentShaderStage(_);a.update(_,pe,oe),z=pe.id,E=oe.id}const C=s.getRenderTarget(),k=s.state.buffers.depth.getReversed(),J=U.isInstancedMesh===!0,tt=U.isBatchedMesh===!0,ut=!!_.map,pt=!!_.matcap,wt=!!it,zt=!!_.aoMap,Ot=!!_.lightMap,Wt=!!_.bumpMap&&_.wireframe===!1,re=!!_.normalMap,Ee=!!_.displacementMap,Ne=!!_.emissiveMap,Me=!!_.metalnessMap,Te=!!_.roughnessMap,$=_.anisotropy>0,Ve=_.clearcoat>0,le=_.dispersion>0,D=_.retroreflectivity>0,S=_.iridescence>0,Z=_.sheen>0,nt=_.transmission>0,ot=$&&!!_.anisotropyMap,dt=Ve&&!!_.clearcoatMap,mt=Ve&&!!_.clearcoatNormalMap,at=Ve&&!!_.clearcoatRoughnessMap,ct=S&&!!_.iridescenceMap,gt=S&&!!_.iridescenceThicknessMap,Dt=Z&&!!_.sheenColorMap,Mt=Z&&!!_.sheenRoughnessMap,xt=!!_.specularMap,Ut=!!_.specularColorMap,Bt=!!_.specularIntensityMap,Yt=nt&&!!_.transmissionMap,Y=nt&&!!_.thicknessMap,_t=!!_.gradientMap,lt=!!_.alphaMap,vt=_.alphaTest>0,Et=!!_.alphaHash,ht=!!_.extensions;let Ft=Nn;_.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Ft=s.toneMapping);const Lt={shaderID:et,shaderType:_.type,shaderName:_.name,vertexShader:X,fragmentShader:F,defines:_.defines,customVertexShaderID:z,customFragmentShaderID:E,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:f,batching:tt,batchingColor:tt&&U._colorsTexture!==null,instancing:J,instancingColor:J&&U.instanceColor!==null,instancingMorph:J&&U.morphTexture!==null,outputColorSpace:C===null?s.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:ee.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:ut,matcap:pt,envMap:wt,envMapMode:wt&&it.mapping,envMapCubeUVHeight:G,aoMap:zt,lightMap:Ot,bumpMap:Wt,normalMap:re,displacementMap:Ee,emissiveMap:Ne,normalMapObjectSpace:re&&_.normalMapType===Cf,normalMapTangentSpace:re&&_.normalMapType===ja,packedNormalMap:re&&_.normalMapType===ja&&vx(_.normalMap.format),metalnessMap:Me,roughnessMap:Te,anisotropy:$,anisotropyMap:ot,clearcoat:Ve,clearcoatMap:dt,clearcoatNormalMap:mt,clearcoatRoughnessMap:at,dispersion:le,retroreflection:D,iridescence:S,iridescenceMap:ct,iridescenceThicknessMap:gt,sheen:Z,sheenColorMap:Dt,sheenRoughnessMap:Mt,specularMap:xt,specularColorMap:Ut,specularIntensityMap:Bt,transmission:nt,transmissionMap:Yt,thicknessMap:Y,gradientMap:_t,opaque:_.transparent===!1&&_.blending===Hs&&_.alphaToCoverage===!1,alphaMap:lt,alphaTest:vt,alphaHash:Et,combine:_.combine,mapUv:ut&&m(_.map.channel),aoMapUv:zt&&m(_.aoMap.channel),lightMapUv:Ot&&m(_.lightMap.channel),bumpMapUv:Wt&&m(_.bumpMap.channel),normalMapUv:re&&m(_.normalMap.channel),displacementMapUv:Ee&&m(_.displacementMap.channel),emissiveMapUv:Ne&&m(_.emissiveMap.channel),metalnessMapUv:Me&&m(_.metalnessMap.channel),roughnessMapUv:Te&&m(_.roughnessMap.channel),anisotropyMapUv:ot&&m(_.anisotropyMap.channel),clearcoatMapUv:dt&&m(_.clearcoatMap.channel),clearcoatNormalMapUv:mt&&m(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:at&&m(_.clearcoatRoughnessMap.channel),iridescenceMapUv:ct&&m(_.iridescenceMap.channel),iridescenceThicknessMapUv:gt&&m(_.iridescenceThicknessMap.channel),sheenColorMapUv:Dt&&m(_.sheenColorMap.channel),sheenRoughnessMapUv:Mt&&m(_.sheenRoughnessMap.channel),specularMapUv:xt&&m(_.specularMap.channel),specularColorMapUv:Ut&&m(_.specularColorMap.channel),specularIntensityMapUv:Bt&&m(_.specularIntensityMap.channel),transmissionMapUv:Yt&&m(_.transmissionMap.channel),thicknessMapUv:Y&&m(_.thicknessMap.channel),alphaMapUv:lt&&m(_.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(re||$),vertexNormals:!!H.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!H.attributes.uv&&(ut||lt),fog:!!B,useFog:_.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||H.attributes.normal===void 0&&re===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:k,skinning:U.isSkinnedMesh===!0,hasPositionAttribute:H.attributes.position!==void 0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:ft,morphTextureStride:O,numSunLights:M.sun.length,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numSunLightShadows:M.sunShadowMap.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:W.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:s.shadowMap.enabled&&R.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ft,decodeVideoTexture:ut&&_.map.isVideoTexture===!0&&ee.getTransfer(_.map.colorSpace)===ce,decodeVideoTextureEmissive:Ne&&_.emissiveMap.isVideoTexture===!0&&ee.getTransfer(_.emissiveMap.colorSpace)===ce,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===$n,flipSided:_.side===en,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:ht&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ht&&_.extensions.multiDraw===!0||tt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Lt.vertexUv1s=c.has(1),Lt.vertexUv2s=c.has(2),Lt.vertexUv3s=c.has(3),c.clear(),Lt}function p(_){const M=[];if(_.shaderID?M.push(_.shaderID):(M.push(_.customVertexShaderID),M.push(_.customFragmentShaderID)),_.defines!==void 0)for(const R in _.defines)M.push(R),M.push(_.defines[R]);return _.isRawShaderMaterial===!1&&(g(M,_),b(M,_),M.push(s.outputColorSpace)),M.push(_.customProgramCacheKey),M.join()}function g(_,M){_.push(M.precision),_.push(M.outputColorSpace),_.push(M.envMapMode),_.push(M.envMapCubeUVHeight),_.push(M.mapUv),_.push(M.alphaMapUv),_.push(M.lightMapUv),_.push(M.aoMapUv),_.push(M.bumpMapUv),_.push(M.normalMapUv),_.push(M.displacementMapUv),_.push(M.emissiveMapUv),_.push(M.metalnessMapUv),_.push(M.roughnessMapUv),_.push(M.anisotropyMapUv),_.push(M.clearcoatMapUv),_.push(M.clearcoatNormalMapUv),_.push(M.clearcoatRoughnessMapUv),_.push(M.iridescenceMapUv),_.push(M.iridescenceThicknessMapUv),_.push(M.sheenColorMapUv),_.push(M.sheenRoughnessMapUv),_.push(M.specularMapUv),_.push(M.specularColorMapUv),_.push(M.specularIntensityMapUv),_.push(M.transmissionMapUv),_.push(M.thicknessMapUv),_.push(M.combine),_.push(M.fogExp2),_.push(M.sizeAttenuation),_.push(M.morphTargetsCount),_.push(M.morphAttributeCount),_.push(M.numSunLights),_.push(M.numDirLights),_.push(M.numPointLights),_.push(M.numSpotLights),_.push(M.numSpotLightMaps),_.push(M.numHemiLights),_.push(M.numRectAreaLights),_.push(M.numSunLightShadows),_.push(M.numDirLightShadows),_.push(M.numPointLightShadows),_.push(M.numSpotLightShadows),_.push(M.numSpotLightShadowsWithMaps),_.push(M.numLightProbes),_.push(M.shadowMapType),_.push(M.toneMapping),_.push(M.numClippingPlanes),_.push(M.numClipIntersection),_.push(M.depthPacking)}function b(_,M){o.disableAll(),M.instancing&&o.enable(0),M.instancingColor&&o.enable(1),M.instancingMorph&&o.enable(2),M.matcap&&o.enable(3),M.envMap&&o.enable(4),M.normalMapObjectSpace&&o.enable(5),M.normalMapTangentSpace&&o.enable(6),M.clearcoat&&o.enable(7),M.iridescence&&o.enable(8),M.alphaTest&&o.enable(9),M.vertexColors&&o.enable(10),M.vertexAlphas&&o.enable(11),M.vertexUv1s&&o.enable(12),M.vertexUv2s&&o.enable(13),M.vertexUv3s&&o.enable(14),M.vertexTangents&&o.enable(15),M.anisotropy&&o.enable(16),M.alphaHash&&o.enable(17),M.batching&&o.enable(18),M.dispersion&&o.enable(19),M.retroreflection&&o.enable(24),M.batchingColor&&o.enable(20),M.gradientMap&&o.enable(21),M.packedNormalMap&&o.enable(22),M.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),M.numLightProbeGrids>0&&o.enable(22),M.hasPositionAttribute&&o.enable(23),_.push(o.mask)}function T(_){const M=d[_.type];let R;if(M){const L=In[M];R=Nd.clone(L.uniforms)}else R=_.uniforms;return R}function v(_,M){let R=h.get(M);return R!==void 0?++R.usedTimes:(R=new mx(s,M,_,i),l.push(R),h.set(M,R)),R}function y(_){if(--_.usedTimes===0){const M=l.indexOf(_);l[M]=l[l.length-1],l.pop(),h.delete(_.cacheKey),_.destroy()}}function w(_){a.remove(_)}function P(){a.dispose()}return{getParameters:x,getProgramCacheKey:p,getUniforms:T,acquireProgram:v,releaseProgram:y,releaseShaderCache:w,programs:l,dispose:P}}function yx(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,c){s.get(o)[a]=c}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function Sx(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function eh(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function nh(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function a(f,d,m,x,p,g){let b=s[t];return b===void 0?(b={id:f.id,object:f,geometry:d,material:m,materialVariant:o(f),groupOrder:x,renderOrder:f.renderOrder,z:p,group:g},s[t]=b):(b.id=f.id,b.object=f,b.geometry=d,b.material=m,b.materialVariant=o(f),b.groupOrder=x,b.renderOrder=f.renderOrder,b.z=p,b.group=g),t++,b}function c(f,d,m,x,p,g,b){b.reversedDepth===!0&&(p=-p);const T=a(f,d,m,x,p,g);m.transmission>0?n.push(T):m.transparent===!0?i.push(T):e.push(T)}function l(f,d,m,x,p,g){const b=a(f,d,m,x,p,g);m.transmission>0?n.unshift(b):m.transparent===!0?i.unshift(b):e.unshift(b)}function h(f,d){e.length>1&&e.sort(f||Sx),n.length>1&&n.sort(d||eh),i.length>1&&i.sort(d||eh)}function u(){for(let f=t,d=s.length;f<d;f++){const m=s[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:c,unshift:l,finish:u,sort:h}}function bx(){let s=new WeakMap;function t(n,i){const r=s.get(n);let o;return r===void 0?(o=new nh,s.set(n,[o])):i>=r.length?(o=new nh,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function wx(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new N,color:new Gt};break;case"SpotLight":e={position:new N,direction:new N,color:new Gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new Gt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new Gt,groundColor:new Gt};break;case"RectAreaLight":e={color:new Gt,position:new N,halfWidth:new N,halfHeight:new N};break}return s[t.id]=e,e}}}function Ex(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let Tx=0;function Ax(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Rx(s){const t=new wx,e=Ex(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new N);const i=new N,r=new ne,o=new ne;function a(l){let h=0,u=0,f=0;for(let U=0;U<9;U++)n.probe[U].set(0,0,0);let d=0,m=0,x=0,p=0,g=0,b=0,T=0,v=0,y=0,w=0,P=0,_=0,M=0,R=0;l.sort(Ax);for(let U=0,W=l.length;U<W;U++){const B=l[U],H=B.color,K=B.intensity,V=B.distance;let it=null;if(B.shadow&&B.shadow.map&&(B.shadow.map.texture.format===Li?it=B.shadow.map.texture:it=B.shadow.map.depthTexture||B.shadow.map.texture),B.isAmbientLight)h+=H.r*K,u+=H.g*K,f+=H.b*K;else if(B.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(B.sh.coefficients[G],K);R++}else if(B.isSunLight){const G=t.get(B);if(G.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const et=B.shadow,rt=e.get(B);rt.shadowIntensity=et.intensity,rt.shadowBias=et.bias,rt.shadowNormalBias=et.normalBias,rt.shadowRadius=et.radius,rt.shadowMapSize.copy(et.mapSize).multiply(et.getFrameExtents()),n.sunShadow[m]=rt,n.sunShadowMap[m]=it;const ft=et.getViewportCount();for(let O=0;O<ft;O++)n.sunShadowMatrix[x+O]=et.getMatrix(O),n.sunShadowCascade[x+O]=et._cascadeData[O];x+=ft,m++}n.sun[d]=G,d++}else if(B.isDirectionalLight){const G=t.get(B);if(G.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const et=B.shadow,rt=e.get(B);rt.shadowIntensity=et.intensity,rt.shadowBias=et.bias,rt.shadowNormalBias=et.normalBias,rt.shadowRadius=et.radius,rt.shadowMapSize=et.mapSize,n.directionalShadow[p]=rt,n.directionalShadowMap[p]=it,n.directionalShadowMatrix[p]=B.shadow.matrix,y++}n.directional[p]=G,p++}else if(B.isSpotLight){const G=t.get(B);G.position.setFromMatrixPosition(B.matrixWorld),G.color.copy(H).multiplyScalar(K),G.distance=V,G.coneCos=Math.cos(B.angle),G.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),G.decay=B.decay,n.spot[b]=G;const et=B.shadow;if(B.map&&(n.spotLightMap[_]=B.map,_++,et.updateMatrices(B),B.castShadow&&M++),n.spotLightMatrix[b]=et.matrix,B.castShadow){const rt=e.get(B);rt.shadowIntensity=et.intensity,rt.shadowBias=et.bias,rt.shadowNormalBias=et.normalBias,rt.shadowRadius=et.radius,rt.shadowMapSize=et.mapSize,n.spotShadow[b]=rt,n.spotShadowMap[b]=it,P++}b++}else if(B.isRectAreaLight){const G=t.get(B);G.color.copy(H).multiplyScalar(K),G.halfWidth.set(B.width*.5,0,0),G.halfHeight.set(0,B.height*.5,0),n.rectArea[T]=G,T++}else if(B.isPointLight){const G=t.get(B);if(G.color.copy(B.color).multiplyScalar(B.intensity),G.distance=B.distance,G.decay=B.decay,B.castShadow){const et=B.shadow,rt=e.get(B);rt.shadowIntensity=et.intensity,rt.shadowBias=et.bias,rt.shadowNormalBias=et.normalBias,rt.shadowRadius=et.radius,rt.shadowMapSize=et.mapSize,rt.shadowCameraNear=et.camera.near,rt.shadowCameraFar=et.camera.far,n.pointShadow[g]=rt,n.pointShadowMap[g]=it,n.pointShadowMatrix[g]=B.shadow.matrix,w++}n.point[g]=G,g++}else if(B.isHemisphereLight){const G=t.get(B);G.skyColor.copy(B.color).multiplyScalar(K),G.groundColor.copy(B.groundColor).multiplyScalar(K),n.hemi[v]=G,v++}}T>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=yt.LTC_FLOAT_1,n.rectAreaLTC2=yt.LTC_FLOAT_2):(n.rectAreaLTC1=yt.LTC_HALF_1,n.rectAreaLTC2=yt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const L=n.hash;(L.sunLength!==d||L.directionalLength!==p||L.pointLength!==g||L.spotLength!==b||L.rectAreaLength!==T||L.hemiLength!==v||L.numSunShadows!==m||L.numDirectionalShadows!==y||L.numPointShadows!==w||L.numSpotShadows!==P||L.numSpotMaps!==_||L.numLightProbes!==R)&&(n.sun.length=d,n.directional.length=p,n.spot.length=b,n.rectArea.length=T,n.point.length=g,n.hemi.length=v,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.directionalShadowMatrix.length=y,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=P,n.spotShadowMap.length=P,n.spotLightMatrix.length=P+_-M,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=M,n.numLightProbes=R,L.sunLength=d,L.directionalLength=p,L.pointLength=g,L.spotLength=b,L.rectAreaLength=T,L.hemiLength=v,L.numSunShadows=m,L.numDirectionalShadows=y,L.numPointShadows=w,L.numSpotShadows=P,L.numSpotMaps=_,L.numLightProbes=R,n.version=Tx++)}function c(l,h){let u=0,f=0,d=0,m=0,x=0,p=0;const g=h.matrixWorldInverse;for(let b=0,T=l.length;b<T;b++){const v=l[b];if(v.isSunLight){const y=n.sun[u];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(g),u++}else if(v.isDirectionalLight){const y=n.directional[f];y.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(g),f++}else if(v.isSpotLight){const y=n.spot[m];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(g),m++}else if(v.isRectAreaLight){const y=n.rectArea[x];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(g),o.identity(),r.copy(v.matrixWorld),r.premultiply(g),o.extractRotation(r),y.halfWidth.set(v.width*.5,0,0),y.halfHeight.set(0,v.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),x++}else if(v.isPointLight){const y=n.point[d];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(g),d++}else if(v.isHemisphereLight){const y=n.hemi[p];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(g),p++}}}return{setup:a,setupView:c,state:n}}function ih(s){const t=new Rx(s),e=[],n=[],i=[];function r(f){u.camera=f,e.length=0,n.length=0,i.length=0}function o(f){e.push(f)}function a(f){n.push(f)}function c(f){i.push(f)}function l(){t.setup(e)}function h(f){t.setupView(e,f)}const u={lightsArray:e,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:l,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:c}}function Cx(s){let t=new WeakMap;function e(i,r=0){const o=t.get(i);let a;return o===void 0?(a=new ih(s),t.set(i,[a])):r>=o.length?(a=new ih(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const Px=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Lx=`uniform sampler2D shadow_pass;
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
}`,Ix=[new N(1,0,0),new N(-1,0,0),new N(0,1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1)],Dx=[new N(0,-1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1),new N(0,-1,0),new N(0,-1,0)],sh=new ne,Cs=new N,ea=new N;function Ux(s,t,e){let n=new El;const i=new kt,r=new kt,o=new ge,a=new kd,c=new Bd,l={},h=e.maxTextureSize,u={[Ci]:en,[en]:Ci,[$n]:$n},f=new nn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new kt},radius:{value:4}},vertexShader:Px,fragmentShader:Lx}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const m=new Be;m.setAttribute("position",new gn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Ce(m,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Br;let g=this.type;this.render=function(w,P,_){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;this.type===of&&(Ht("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Br);const M=s.getRenderTarget(),R=s.getActiveCubeFace(),L=s.getActiveMipmapLevel(),U=s.state;U.setBlending(jn),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const W=g!==this.type;W&&P.traverse(function(B){B.material&&(Array.isArray(B.material)?B.material.forEach(H=>H.needsUpdate=!0):B.material.needsUpdate=!0)});for(let B=0,H=w.length;B<H;B++){const K=w[B],V=K.shadow;if(V===void 0){Ht("WebGLShadowMap:",K,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;i.copy(V.mapSize);const it=V.getFrameExtents();i.multiply(it),r.copy(V.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/it.x),i.x=r.x*it.x,V.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/it.y),i.y=r.y*it.y,V.mapSize.y=r.y));const G=s.state.buffers.depth.getReversed();if(V.camera._reversedDepth=G,V.map===null||W===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===ks){if(K.isPointLight){Ht("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new mn(i.x,i.y,{format:Li,type:_n,minFilter:ke,magFilter:ke,generateMipmaps:!1}),V.map.texture.name=K.name+".shadowMap",V.map.depthTexture=new tr(i.x,i.y,En),V.map.depthTexture.name=K.name+".shadowMapDepth",V.map.depthTexture.format=ni,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Oe,V.map.depthTexture.magFilter=Oe}else K.isPointLight?(V.map=new xu(i.x),V.map.depthTexture=new Dd(i.x,Fn)):(V.map=new mn(i.x,i.y),V.map.depthTexture=new tr(i.x,i.y,Fn)),V.map.depthTexture.name=K.name+".shadowMap",V.map.depthTexture.format=ni,this.type===Br?(V.map.depthTexture.compareFunction=G?vl:_l,V.map.depthTexture.minFilter=ke,V.map.depthTexture.magFilter=ke):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Oe,V.map.depthTexture.magFilter=Oe);V.camera.updateProjectionMatrix()}V.map.isWebGLCubeRenderTarget!==!0&&(V.map.width!==i.x||V.map.height!==i.y)&&V.map.setSize(i.x,i.y);const et=V.map.isWebGLCubeRenderTarget?6:V.getViewportCount();K.isPointLight!==!0&&V.updateMatrices(K,_);for(let rt=0;rt<et;rt++){const ft=V.getCamera(rt);if(K.isPointLight){const O=V.camera,X=V.matrix,F=K.distance||O.far;F!==O.far&&(O.far=F,O.updateProjectionMatrix()),Cs.setFromMatrixPosition(K.matrixWorld),O.position.copy(Cs),ea.copy(O.position),ea.add(Ix[rt]),O.up.copy(Dx[rt]),O.lookAt(ea),O.updateMatrixWorld(),X.makeTranslation(-Cs.x,-Cs.y,-Cs.z),sh.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),V._frustum.setFromProjectionMatrix(sh,O.coordinateSystem,O.reversedDepth)}if(V.map.isWebGLCubeRenderTarget)s.setRenderTarget(V.map,rt),s.clear();else{rt===0&&(s.setRenderTarget(V.map),s.clear());const O=V.getViewport(rt);o.set(r.x*O.x,r.y*O.y,r.x*O.z,r.y*O.w),U.viewport(o)}n=V.getFrustum(rt),v(P,_,ft,K,this.type)}V.isPointLightShadow!==!0&&this.type===ks&&b(V,_),V.needsUpdate=!1}g=this.type,p.needsUpdate=!1,s.setRenderTarget(M,R,L)};function b(w,P){const _=t.update(x);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null?w.mapPass=new mn(i.x,i.y,{format:Li,type:_n}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),f.uniforms.shadow_pass.value=w.map.depthTexture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,s.setRenderTarget(w.mapPass),s.clear(),s.renderBufferDirect(P,null,_,f,x,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value.set(w.map.width,w.map.height),d.uniforms.radius.value=w.radius,s.setRenderTarget(w.map),s.clear(),s.renderBufferDirect(P,null,_,d,x,null)}function T(w,P,_,M){let R=null;const L=_.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(L!==void 0)R=L;else if(R=_.isPointLight===!0?c:a,s.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const U=R.uuid,W=P.uuid;let B=l[U];B===void 0&&(B={},l[U]=B);let H=B[W];H===void 0&&(H=R.clone(),B[W]=H,P.addEventListener("dispose",y)),R=H}if(R.visible=P.visible,R.wireframe=P.wireframe,M===ks?R.side=P.shadowSide!==null?P.shadowSide:P.side:R.side=P.shadowSide!==null?P.shadowSide:u[P.side],R.alphaMap=P.alphaMap,R.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,R.map=P.map,R.clipShadows=P.clipShadows,R.clippingPlanes=P.clippingPlanes,R.clipIntersection=P.clipIntersection,R.displacementMap=P.displacementMap,R.displacementScale=P.displacementScale,R.displacementBias=P.displacementBias,R.wireframeLinewidth=P.wireframeLinewidth,R.linewidth=P.linewidth,_.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const U=s.properties.get(R);U.light=_}return R}function v(w,P,_,M,R){if(w.visible===!1)return;if(w.layers.test(P.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&R===ks)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,w.matrixWorld);const W=t.update(w),B=w.material;if(Array.isArray(B)){const H=W.groups;for(let K=0,V=H.length;K<V;K++){const it=H[K],G=B[it.materialIndex];if(G&&G.visible){const et=T(w,G,M,R);w.onBeforeShadow(s,w,P,_,W,et,it),s.renderBufferDirect(_,null,W,et,w,it),w.onAfterShadow(s,w,P,_,W,et,it)}}}else if(B.visible){const H=T(w,B,M,R);w.onBeforeShadow(s,w,P,_,W,H,null),s.renderBufferDirect(_,null,W,H,w,null),w.onAfterShadow(s,w,P,_,W,H,null)}}const U=w.children;for(let W=0,B=U.length;W<B;W++)v(U[W],P,_,M,R)}function y(w){w.target.removeEventListener("dispose",y);for(const _ in l){const M=l[_],R=w.target.uuid;R in M&&(M[R].dispose(),delete M[R])}}}function Nx(s,t){function e(){let Y=!1;const _t=new ge;let lt=null;const vt=new ge(0,0,0,0);return{setMask:function(Et){lt!==Et&&!Y&&(s.colorMask(Et,Et,Et,Et),lt=Et)},setLocked:function(Et){Y=Et},setClear:function(Et,ht,Ft,Lt,pe){pe===!0&&(Et*=Lt,ht*=Lt,Ft*=Lt),_t.set(Et,ht,Ft,Lt),vt.equals(_t)===!1&&(s.clearColor(Et,ht,Ft,Lt),vt.copy(_t))},reset:function(){Y=!1,lt=null,vt.set(-1,0,0,0)}}}function n(){let Y=!1,_t=!1,lt=null,vt=null,Et=null;return{setReversed:function(ht){if(_t!==ht){const Ft=t.get("EXT_clip_control");ht?Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.ZERO_TO_ONE_EXT):Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.NEGATIVE_ONE_TO_ONE_EXT),_t=ht;const Lt=Et;Et=null,this.setClear(Lt)}},getReversed:function(){return _t},setTest:function(ht){ht?C(s.DEPTH_TEST):k(s.DEPTH_TEST)},setMask:function(ht){lt!==ht&&!Y&&(s.depthMask(ht),lt=ht)},setFunc:function(ht){if(_t&&(ht=Bf[ht]),vt!==ht){switch(ht){case pa:s.depthFunc(s.NEVER);break;case ma:s.depthFunc(s.ALWAYS);break;case ga:s.depthFunc(s.LESS);break;case $s:s.depthFunc(s.LEQUAL);break;case xa:s.depthFunc(s.EQUAL);break;case _a:s.depthFunc(s.GEQUAL);break;case va:s.depthFunc(s.GREATER);break;case Ma:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}vt=ht}},setLocked:function(ht){Y=ht},setClear:function(ht){Et!==ht&&(Et=ht,_t&&(ht=1-ht),s.clearDepth(ht))},reset:function(){Y=!1,lt=null,vt=null,Et=null,_t=!1}}}function i(){let Y=!1,_t=null,lt=null,vt=null,Et=null,ht=null,Ft=null,Lt=null,pe=null;return{setTest:function(oe){Y||(oe?C(s.STENCIL_TEST):k(s.STENCIL_TEST))},setMask:function(oe){_t!==oe&&!Y&&(s.stencilMask(oe),_t=oe)},setFunc:function(oe,Mn,Tn){(lt!==oe||vt!==Mn||Et!==Tn)&&(s.stencilFunc(oe,Mn,Tn),lt=oe,vt=Mn,Et=Tn)},setOp:function(oe,Mn,Tn){(ht!==oe||Ft!==Mn||Lt!==Tn)&&(s.stencilOp(oe,Mn,Tn),ht=oe,Ft=Mn,Lt=Tn)},setLocked:function(oe){Y=oe},setClear:function(oe){pe!==oe&&(s.clearStencil(oe),pe=oe)},reset:function(){Y=!1,_t=null,lt=null,vt=null,Et=null,ht=null,Ft=null,Lt=null,pe=null}}}const r=new e,o=new n,a=new i,c=new WeakMap,l=new WeakMap;let h={},u={},f={},d=new WeakMap,m=[],x=null,p=!1,g=null,b=null,T=null,v=null,y=null,w=null,P=null,_=new Gt(0,0,0),M=0,R=!1,L=null,U=null,W=null,B=null,H=null;const K=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,it=0;const G=s.getParameter(s.VERSION);G.indexOf("WebGL")!==-1?(it=parseFloat(/^WebGL (\d)/.exec(G)[1]),V=it>=1):G.indexOf("OpenGL ES")!==-1&&(it=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),V=it>=2);let et=null,rt={};const ft=s.getParameter(s.SCISSOR_BOX),O=s.getParameter(s.VIEWPORT),X=new ge().fromArray(ft),F=new ge().fromArray(O);function z(Y,_t,lt,vt){const Et=new Uint8Array(4),ht=s.createTexture();s.bindTexture(Y,ht),s.texParameteri(Y,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(Y,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ft=0;Ft<lt;Ft++)Y===s.TEXTURE_3D||Y===s.TEXTURE_2D_ARRAY?s.texImage3D(_t,0,s.RGBA,1,1,vt,0,s.RGBA,s.UNSIGNED_BYTE,Et):s.texImage2D(_t+Ft,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Et);return ht}const E={};E[s.TEXTURE_2D]=z(s.TEXTURE_2D,s.TEXTURE_2D,1),E[s.TEXTURE_CUBE_MAP]=z(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),E[s.TEXTURE_2D_ARRAY]=z(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),E[s.TEXTURE_3D]=z(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),C(s.DEPTH_TEST),o.setFunc($s),Wt(!1),re(Jl),C(s.CULL_FACE),zt(jn);function C(Y){h[Y]!==!0&&(s.enable(Y),h[Y]=!0)}function k(Y){h[Y]!==!1&&(s.disable(Y),h[Y]=!1)}function J(Y,_t){return f[Y]!==_t?(s.bindFramebuffer(Y,_t),f[Y]=_t,Y===s.DRAW_FRAMEBUFFER&&(f[s.FRAMEBUFFER]=_t),Y===s.FRAMEBUFFER&&(f[s.DRAW_FRAMEBUFFER]=_t),!0):!1}function tt(Y,_t){let lt=m,vt=!1;if(Y){lt=d.get(_t),lt===void 0&&(lt=[],d.set(_t,lt));const Et=Y.textures;if(lt.length!==Et.length||lt[0]!==s.COLOR_ATTACHMENT0){for(let ht=0,Ft=Et.length;ht<Ft;ht++)lt[ht]=s.COLOR_ATTACHMENT0+ht;lt.length=Et.length,vt=!0}}else lt[0]!==s.BACK&&(lt[0]=s.BACK,vt=!0);vt&&s.drawBuffers(lt)}function ut(Y){return x!==Y?(s.useProgram(Y),x=Y,!0):!1}const pt={[rs]:s.FUNC_ADD,[lf]:s.FUNC_SUBTRACT,[cf]:s.FUNC_REVERSE_SUBTRACT};pt[hf]=s.MIN,pt[uf]=s.MAX;const wt={[ff]:s.ZERO,[df]:s.ONE,[pf]:s.SRC_COLOR,[Bh]:s.SRC_ALPHA,[Mf]:s.SRC_ALPHA_SATURATE,[_f]:s.DST_COLOR,[gf]:s.DST_ALPHA,[mf]:s.ONE_MINUS_SRC_COLOR,[Hh]:s.ONE_MINUS_SRC_ALPHA,[vf]:s.ONE_MINUS_DST_COLOR,[xf]:s.ONE_MINUS_DST_ALPHA,[yf]:s.CONSTANT_COLOR,[Sf]:s.ONE_MINUS_CONSTANT_COLOR,[bf]:s.CONSTANT_ALPHA,[wf]:s.ONE_MINUS_CONSTANT_ALPHA};function zt(Y,_t,lt,vt,Et,ht,Ft,Lt,pe,oe){if(Y===jn){p===!0&&(k(s.BLEND),p=!1);return}if(p===!1&&(C(s.BLEND),p=!0),Y!==af){if(Y!==g||oe!==R){if((b!==rs||y!==rs)&&(s.blendEquation(s.FUNC_ADD),b=rs,y=rs),oe)switch(Y){case Hs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ql:s.blendFunc(s.ONE,s.ONE);break;case jl:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case tc:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:ie("WebGLState: Invalid blending: ",Y);break}else switch(Y){case Hs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ql:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case jl:ie("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case tc:ie("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ie("WebGLState: Invalid blending: ",Y);break}T=null,v=null,w=null,P=null,_.set(0,0,0),M=0,g=Y,R=oe}return}Et=Et||_t,ht=ht||lt,Ft=Ft||vt,(_t!==b||Et!==y)&&(s.blendEquationSeparate(pt[_t],pt[Et]),b=_t,y=Et),(lt!==T||vt!==v||ht!==w||Ft!==P)&&(s.blendFuncSeparate(wt[lt],wt[vt],wt[ht],wt[Ft]),T=lt,v=vt,w=ht,P=Ft),(Lt.equals(_)===!1||pe!==M)&&(s.blendColor(Lt.r,Lt.g,Lt.b,pe),_.copy(Lt),M=pe),g=Y,R=!1}function Ot(Y,_t){Y.side===$n?k(s.CULL_FACE):C(s.CULL_FACE);let lt=Y.side===en;_t&&(lt=!lt),Wt(lt),Y.blending===Hs&&Y.transparent===!1?zt(jn):zt(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),o.setFunc(Y.depthFunc),o.setTest(Y.depthTest),o.setMask(Y.depthWrite),r.setMask(Y.colorWrite);const vt=Y.stencilWrite;a.setTest(vt),vt&&(a.setMask(Y.stencilWriteMask),a.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),a.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),Ne(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?C(s.SAMPLE_ALPHA_TO_COVERAGE):k(s.SAMPLE_ALPHA_TO_COVERAGE)}function Wt(Y){L!==Y&&(Y?s.frontFace(s.CW):s.frontFace(s.CCW),L=Y)}function re(Y){Y!==sf?(C(s.CULL_FACE),Y!==U&&(Y===Jl?s.cullFace(s.BACK):Y===rf?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):k(s.CULL_FACE),U=Y}function Ee(Y){Y!==W&&(V&&s.lineWidth(Y),W=Y)}function Ne(Y,_t,lt){Y?(C(s.POLYGON_OFFSET_FILL),(B!==_t||H!==lt)&&(B=_t,H=lt,o.getReversed()&&(_t=-_t),s.polygonOffset(_t,lt))):k(s.POLYGON_OFFSET_FILL)}function Me(Y){Y?C(s.SCISSOR_TEST):k(s.SCISSOR_TEST)}function Te(Y){Y===void 0&&(Y=s.TEXTURE0+K-1),et!==Y&&(s.activeTexture(Y),et=Y)}function $(Y,_t,lt){lt===void 0&&(et===null?lt=s.TEXTURE0+K-1:lt=et);let vt=rt[lt];vt===void 0&&(vt={type:void 0,texture:void 0},rt[lt]=vt),(vt.type!==Y||vt.texture!==_t)&&(et!==lt&&(s.activeTexture(lt),et=lt),s.bindTexture(Y,_t||E[Y]),vt.type=Y,vt.texture=_t)}function Ve(){const Y=rt[et];Y!==void 0&&Y.type!==void 0&&(s.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function le(){try{s.compressedTexImage2D(...arguments)}catch(Y){ie("WebGLState:",Y)}}function D(){try{s.compressedTexImage3D(...arguments)}catch(Y){ie("WebGLState:",Y)}}function S(){try{s.texSubImage2D(...arguments)}catch(Y){ie("WebGLState:",Y)}}function Z(){try{s.texSubImage3D(...arguments)}catch(Y){ie("WebGLState:",Y)}}function nt(){try{s.compressedTexSubImage2D(...arguments)}catch(Y){ie("WebGLState:",Y)}}function ot(){try{s.compressedTexSubImage3D(...arguments)}catch(Y){ie("WebGLState:",Y)}}function dt(){try{s.texStorage2D(...arguments)}catch(Y){ie("WebGLState:",Y)}}function mt(){try{s.texStorage3D(...arguments)}catch(Y){ie("WebGLState:",Y)}}function at(){try{s.texImage2D(...arguments)}catch(Y){ie("WebGLState:",Y)}}function ct(){try{s.texImage3D(...arguments)}catch(Y){ie("WebGLState:",Y)}}function gt(Y){return u[Y]!==void 0?u[Y]:s.getParameter(Y)}function Dt(Y,_t){u[Y]!==_t&&(s.pixelStorei(Y,_t),u[Y]=_t)}function Mt(Y){X.equals(Y)===!1&&(s.scissor(Y.x,Y.y,Y.z,Y.w),X.copy(Y))}function xt(Y){F.equals(Y)===!1&&(s.viewport(Y.x,Y.y,Y.z,Y.w),F.copy(Y))}function Ut(Y,_t){let lt=l.get(_t);lt===void 0&&(lt=new WeakMap,l.set(_t,lt));let vt=lt.get(Y);vt===void 0&&(vt=s.getUniformBlockIndex(_t,Y.name),lt.set(Y,vt))}function Bt(Y,_t){const vt=l.get(_t).get(Y);c.get(_t)!==vt&&(s.uniformBlockBinding(_t,vt,Y.__bindingPointIndex),c.set(_t,vt))}function Yt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},u={},et=null,rt={},f={},d=new WeakMap,m=[],x=null,p=!1,g=null,b=null,T=null,v=null,y=null,w=null,P=null,_=new Gt(0,0,0),M=0,R=!1,L=null,U=null,W=null,B=null,H=null,X.set(0,0,s.canvas.width,s.canvas.height),F.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:C,disable:k,bindFramebuffer:J,drawBuffers:tt,useProgram:ut,setBlending:zt,setMaterial:Ot,setFlipSided:Wt,setCullFace:re,setLineWidth:Ee,setPolygonOffset:Ne,setScissorTest:Me,activeTexture:Te,bindTexture:$,unbindTexture:Ve,compressedTexImage2D:le,compressedTexImage3D:D,texImage2D:at,texImage3D:ct,pixelStorei:Dt,getParameter:gt,updateUBOMapping:Ut,uniformBlockBinding:Bt,texStorage2D:dt,texStorage3D:mt,texSubImage2D:S,texSubImage3D:Z,compressedTexSubImage2D:nt,compressedTexSubImage3D:ot,scissor:Mt,viewport:xt,reset:Yt}}function Fx(s,t,e,n,i,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new kt,h=new WeakMap,u=new Set;let f;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(D,S){return m?new OffscreenCanvas(D,S):Qs("canvas")}function p(D,S,Z){let nt=1;const ot=le(D);if((ot.width>Z||ot.height>Z)&&(nt=Z/Math.max(ot.width,ot.height)),nt<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const dt=Math.floor(nt*ot.width),mt=Math.floor(nt*ot.height);f===void 0&&(f=x(dt,mt));const at=S?x(dt,mt):f;return at.width=dt,at.height=mt,at.getContext("2d").drawImage(D,0,0,dt,mt),Ht("WebGLRenderer: Texture has been resized from ("+ot.width+"x"+ot.height+") to ("+dt+"x"+mt+")."),at}else return"data"in D&&Ht("WebGLRenderer: Image in DataTexture is too big ("+ot.width+"x"+ot.height+")."),D;return D}function g(D){return D.generateMipmaps}function b(D){s.generateMipmap(D)}function T(D){return D.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?s.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function v(D,S,Z,nt,ot,dt=!1){if(D!==null){if(s[D]!==void 0)return s[D];Ht("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let mt;nt&&(mt=t.get("EXT_texture_norm16"),mt||Ht("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let at=S;if(S===s.RED&&(Z===s.FLOAT&&(at=s.R32F),Z===s.HALF_FLOAT&&(at=s.R16F),Z===s.UNSIGNED_BYTE&&(at=s.R8),Z===s.UNSIGNED_SHORT&&mt&&(at=mt.R16_EXT),Z===s.SHORT&&mt&&(at=mt.R16_SNORM_EXT)),S===s.RED_INTEGER&&(Z===s.UNSIGNED_BYTE&&(at=s.R8UI),Z===s.UNSIGNED_SHORT&&(at=s.R16UI),Z===s.UNSIGNED_INT&&(at=s.R32UI),Z===s.BYTE&&(at=s.R8I),Z===s.SHORT&&(at=s.R16I),Z===s.INT&&(at=s.R32I)),S===s.RG&&(Z===s.FLOAT&&(at=s.RG32F),Z===s.HALF_FLOAT&&(at=s.RG16F),Z===s.UNSIGNED_BYTE&&(at=s.RG8),Z===s.UNSIGNED_SHORT&&mt&&(at=mt.RG16_EXT),Z===s.SHORT&&mt&&(at=mt.RG16_SNORM_EXT)),S===s.RG_INTEGER&&(Z===s.UNSIGNED_BYTE&&(at=s.RG8UI),Z===s.UNSIGNED_SHORT&&(at=s.RG16UI),Z===s.UNSIGNED_INT&&(at=s.RG32UI),Z===s.BYTE&&(at=s.RG8I),Z===s.SHORT&&(at=s.RG16I),Z===s.INT&&(at=s.RG32I)),S===s.RGB_INTEGER&&(Z===s.UNSIGNED_BYTE&&(at=s.RGB8UI),Z===s.UNSIGNED_SHORT&&(at=s.RGB16UI),Z===s.UNSIGNED_INT&&(at=s.RGB32UI),Z===s.BYTE&&(at=s.RGB8I),Z===s.SHORT&&(at=s.RGB16I),Z===s.INT&&(at=s.RGB32I)),S===s.RGBA_INTEGER&&(Z===s.UNSIGNED_BYTE&&(at=s.RGBA8UI),Z===s.UNSIGNED_SHORT&&(at=s.RGBA16UI),Z===s.UNSIGNED_INT&&(at=s.RGBA32UI),Z===s.BYTE&&(at=s.RGBA8I),Z===s.SHORT&&(at=s.RGBA16I),Z===s.INT&&(at=s.RGBA32I)),S===s.RGB&&(Z===s.UNSIGNED_SHORT&&mt&&(at=mt.RGB16_EXT),Z===s.SHORT&&mt&&(at=mt.RGB16_SNORM_EXT),Z===s.UNSIGNED_INT_5_9_9_9_REV&&(at=s.RGB9_E5),Z===s.UNSIGNED_INT_10F_11F_11F_REV&&(at=s.R11F_G11F_B10F)),S===s.RGBA){const ct=dt?Jr:ee.getTransfer(ot);Z===s.FLOAT&&(at=s.RGBA32F),Z===s.HALF_FLOAT&&(at=s.RGBA16F),Z===s.UNSIGNED_BYTE&&(at=ct===ce?s.SRGB8_ALPHA8:s.RGBA8),Z===s.UNSIGNED_SHORT&&mt&&(at=mt.RGBA16_EXT),Z===s.SHORT&&mt&&(at=mt.RGBA16_SNORM_EXT),Z===s.UNSIGNED_SHORT_4_4_4_4&&(at=s.RGBA4),Z===s.UNSIGNED_SHORT_5_5_5_1&&(at=s.RGB5_A1)}return(at===s.R16F||at===s.R32F||at===s.RG16F||at===s.RG32F||at===s.RGBA16F||at===s.RGBA32F)&&t.get("EXT_color_buffer_float"),at}function y(D,S){let Z;return D?S===null||S===Fn||S===Zs?Z=s.DEPTH24_STENCIL8:S===En?Z=s.DEPTH32F_STENCIL8:S===Ks&&(Z=s.DEPTH24_STENCIL8,Ht("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Fn||S===Zs?Z=s.DEPTH_COMPONENT24:S===En?Z=s.DEPTH_COMPONENT32F:S===Ks&&(Z=s.DEPTH_COMPONENT16),Z}function w(D,S){return g(D)===!0||D.isFramebufferTexture&&D.minFilter!==Oe&&D.minFilter!==ke?Math.log2(Math.max(S.width,S.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?S.mipmaps.length:1}function P(D){const S=D.target;S.removeEventListener("dispose",P),M(S),S.isVideoTexture&&h.delete(S),S.isHTMLTexture&&u.delete(S)}function _(D){const S=D.target;S.removeEventListener("dispose",_),L(S)}function M(D){const S=n.get(D);if(S.__webglInit===void 0)return;const Z=D.source,nt=d.get(Z);if(nt){const ot=nt[S.__cacheKey];ot.usedTimes--,ot.usedTimes===0&&R(D),Object.keys(nt).length===0&&d.delete(Z)}n.remove(D)}function R(D){const S=n.get(D);s.deleteTexture(S.__webglTexture);const Z=D.source,nt=d.get(Z);delete nt[S.__cacheKey],o.memory.textures--}function L(D){const S=n.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),n.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let nt=0;nt<6;nt++){if(Array.isArray(S.__webglFramebuffer[nt]))for(let ot=0;ot<S.__webglFramebuffer[nt].length;ot++)s.deleteFramebuffer(S.__webglFramebuffer[nt][ot]);else s.deleteFramebuffer(S.__webglFramebuffer[nt]);S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer[nt])}else{if(Array.isArray(S.__webglFramebuffer))for(let nt=0;nt<S.__webglFramebuffer.length;nt++)s.deleteFramebuffer(S.__webglFramebuffer[nt]);else s.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&s.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let nt=0;nt<S.__webglColorRenderbuffer.length;nt++)S.__webglColorRenderbuffer[nt]&&s.deleteRenderbuffer(S.__webglColorRenderbuffer[nt]);S.__webglDepthRenderbuffer&&s.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const Z=D.textures;for(let nt=0,ot=Z.length;nt<ot;nt++){const dt=n.get(Z[nt]);dt.__webglTexture&&(s.deleteTexture(dt.__webglTexture),o.memory.textures--),n.remove(Z[nt])}n.remove(D)}let U=0;function W(){U=0}function B(){return U}function H(D){U=D}function K(){const D=U;return D>=i.maxTextures&&Ht("WebGLTextures: Trying to use "+(D+1)+" texture units while this GPU supports only "+i.maxTextures),U+=1,D}function V(D){const S=[];return S.push(D.wrapS),S.push(D.wrapT),S.push(D.wrapR||0),S.push(D.magFilter),S.push(D.minFilter),S.push(D.anisotropy),S.push(D.internalFormat),S.push(D.format),S.push(D.type),S.push(D.generateMipmaps),S.push(D.premultiplyAlpha),S.push(D.flipY),S.push(D.unpackAlignment),S.push(D.colorSpace),S.join()}function it(D,S){const Z=n.get(D);if(D.isVideoTexture&&$(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&Z.__version!==D.version){const nt=D.image;if(nt===null)Ht("WebGLRenderer: Texture marked for update but no image data found.");else if(nt.complete===!1)Ht("WebGLRenderer: Texture marked for update but image is incomplete");else{k(Z,D,S);return}}else D.isExternalTexture&&(Z.__webglTexture=D.sourceTexture?D.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,Z.__webglTexture,s.TEXTURE0+S)}function G(D,S){const Z=n.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&Z.__version!==D.version){k(Z,D,S);return}else D.isExternalTexture&&(Z.__webglTexture=D.sourceTexture?D.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,Z.__webglTexture,s.TEXTURE0+S)}function et(D,S){const Z=n.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&Z.__version!==D.version){k(Z,D,S);return}e.bindTexture(s.TEXTURE_3D,Z.__webglTexture,s.TEXTURE0+S)}function rt(D,S){const Z=n.get(D);if(D.isCubeDepthTexture!==!0&&D.version>0&&Z.__version!==D.version){J(Z,D,S);return}e.bindTexture(s.TEXTURE_CUBE_MAP,Z.__webglTexture,s.TEXTURE0+S)}const ft={[ya]:s.REPEAT,[Jn]:s.CLAMP_TO_EDGE,[Sa]:s.MIRRORED_REPEAT},O={[Oe]:s.NEAREST,[Af]:s.NEAREST_MIPMAP_NEAREST,[rr]:s.NEAREST_MIPMAP_LINEAR,[ke]:s.LINEAR,[wo]:s.LINEAR_MIPMAP_NEAREST,[vi]:s.LINEAR_MIPMAP_LINEAR},X={[Lf]:s.NEVER,[Ff]:s.ALWAYS,[If]:s.LESS,[_l]:s.LEQUAL,[Df]:s.EQUAL,[vl]:s.GEQUAL,[Uf]:s.GREATER,[Nf]:s.NOTEQUAL};function F(D,S){if(S.type===En&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===ke||S.magFilter===wo||S.magFilter===rr||S.magFilter===vi||S.minFilter===ke||S.minFilter===wo||S.minFilter===rr||S.minFilter===vi)&&Ht("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(D,s.TEXTURE_WRAP_S,ft[S.wrapS]),s.texParameteri(D,s.TEXTURE_WRAP_T,ft[S.wrapT]),(D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY)&&s.texParameteri(D,s.TEXTURE_WRAP_R,ft[S.wrapR]),s.texParameteri(D,s.TEXTURE_MAG_FILTER,O[S.magFilter]),s.texParameteri(D,s.TEXTURE_MIN_FILTER,O[S.minFilter]),S.compareFunction&&(s.texParameteri(D,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(D,s.TEXTURE_COMPARE_FUNC,X[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Oe||S.minFilter!==rr&&S.minFilter!==vi||S.type===En&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const Z=t.get("EXT_texture_filter_anisotropic");s.texParameterf(D,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function z(D,S){let Z=!1;D.__webglInit===void 0&&(D.__webglInit=!0,S.addEventListener("dispose",P));const nt=S.source;let ot=d.get(nt);ot===void 0&&(ot={},d.set(nt,ot));const dt=V(S);if(dt!==D.__cacheKey){ot[dt]===void 0&&(ot[dt]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,Z=!0),ot[dt].usedTimes++;const mt=ot[D.__cacheKey];mt!==void 0&&(ot[D.__cacheKey].usedTimes--,mt.usedTimes===0&&R(S)),D.__cacheKey=dt,D.__webglTexture=ot[dt].texture}return Z}function E(D,S,Z){return Math.floor(Math.floor(D/Z)/S)}function C(D,S,Z,nt){const dt=D.updateRanges;if(dt.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,S.width,S.height,Z,nt,S.data);else{dt.sort((Dt,Mt)=>Dt.start-Mt.start);let mt=0;for(let Dt=1;Dt<dt.length;Dt++){const Mt=dt[mt],xt=dt[Dt],Ut=Mt.start+Mt.count,Bt=E(xt.start,S.width,4),Yt=E(Mt.start,S.width,4);xt.start<=Ut+1&&Bt===Yt&&E(xt.start+xt.count-1,S.width,4)===Bt?Mt.count=Math.max(Mt.count,xt.start+xt.count-Mt.start):(++mt,dt[mt]=xt)}dt.length=mt+1;const at=e.getParameter(s.UNPACK_ROW_LENGTH),ct=e.getParameter(s.UNPACK_SKIP_PIXELS),gt=e.getParameter(s.UNPACK_SKIP_ROWS);e.pixelStorei(s.UNPACK_ROW_LENGTH,S.width);for(let Dt=0,Mt=dt.length;Dt<Mt;Dt++){const xt=dt[Dt],Ut=Math.floor(xt.start/4),Bt=Math.ceil(xt.count/4),Yt=Ut%S.width,Y=Math.floor(Ut/S.width),_t=Bt,lt=1;e.pixelStorei(s.UNPACK_SKIP_PIXELS,Yt),e.pixelStorei(s.UNPACK_SKIP_ROWS,Y),e.texSubImage2D(s.TEXTURE_2D,0,Yt,Y,_t,lt,Z,nt,S.data)}D.clearUpdateRanges(),e.pixelStorei(s.UNPACK_ROW_LENGTH,at),e.pixelStorei(s.UNPACK_SKIP_PIXELS,ct),e.pixelStorei(s.UNPACK_SKIP_ROWS,gt)}}function k(D,S,Z){let nt=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(nt=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&(nt=s.TEXTURE_3D);const ot=z(D,S),dt=S.source;e.bindTexture(nt,D.__webglTexture,s.TEXTURE0+Z);const mt=n.get(dt);if(dt.version!==mt.__version||ot===!0){if(e.activeTexture(s.TEXTURE0+Z),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){const lt=ee.getPrimaries(ee.workingColorSpace),vt=S.colorSpace===xi?null:ee.getPrimaries(S.colorSpace),Et=S.colorSpace===xi||lt===vt?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Et)}e.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment);let ct=p(S.image,!1,i.maxTextureSize);ct=Ve(S,ct);const gt=r.convert(S.format,S.colorSpace),Dt=r.convert(S.type);let Mt=v(S.internalFormat,gt,Dt,S.normalized,S.colorSpace,S.isVideoTexture);F(nt,S);let xt;const Ut=S.mipmaps,Bt=S.isVideoTexture!==!0,Yt=mt.__version===void 0||ot===!0,Y=dt.dataReady,_t=w(S,ct);if(S.isDepthTexture)Mt=y(S.format===Ri,S.type),Yt&&(Bt?e.texStorage2D(s.TEXTURE_2D,1,Mt,ct.width,ct.height):e.texImage2D(s.TEXTURE_2D,0,Mt,ct.width,ct.height,0,gt,Dt,null));else if(S.isDataTexture)if(Ut.length>0){Bt&&Yt&&e.texStorage2D(s.TEXTURE_2D,_t,Mt,Ut[0].width,Ut[0].height);for(let lt=0,vt=Ut.length;lt<vt;lt++)xt=Ut[lt],Bt?Y&&e.texSubImage2D(s.TEXTURE_2D,lt,0,0,xt.width,xt.height,gt,Dt,xt.data):e.texImage2D(s.TEXTURE_2D,lt,Mt,xt.width,xt.height,0,gt,Dt,xt.data);S.generateMipmaps=!1}else Bt?(Yt&&e.texStorage2D(s.TEXTURE_2D,_t,Mt,ct.width,ct.height),Y&&C(S,ct,gt,Dt)):e.texImage2D(s.TEXTURE_2D,0,Mt,ct.width,ct.height,0,gt,Dt,ct.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Bt&&Yt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,_t,Mt,Ut[0].width,Ut[0].height,ct.depth);for(let lt=0,vt=Ut.length;lt<vt;lt++)if(xt=Ut[lt],S.format!==hn)if(gt!==null)if(Bt){if(Y)if(S.layerUpdates.size>0){const Et=Fc(xt.width,xt.height,S.format,S.type);for(const ht of S.layerUpdates){const Ft=xt.data.subarray(ht*Et/xt.data.BYTES_PER_ELEMENT,(ht+1)*Et/xt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,lt,0,0,ht,xt.width,xt.height,1,gt,Ft)}}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,lt,0,0,0,xt.width,xt.height,ct.depth,gt,xt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,lt,Mt,xt.width,xt.height,ct.depth,0,xt.data,0,0);else Ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Bt?Y&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,lt,0,0,0,xt.width,xt.height,ct.depth,gt,Dt,xt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,lt,Mt,xt.width,xt.height,ct.depth,0,gt,Dt,xt.data);S.layerUpdates.size>0&&S.clearLayerUpdates()}else{Bt&&Yt&&e.texStorage2D(s.TEXTURE_2D,_t,Mt,Ut[0].width,Ut[0].height);for(let lt=0,vt=Ut.length;lt<vt;lt++)xt=Ut[lt],S.format!==hn?gt!==null?Bt?Y&&e.compressedTexSubImage2D(s.TEXTURE_2D,lt,0,0,xt.width,xt.height,gt,xt.data):e.compressedTexImage2D(s.TEXTURE_2D,lt,Mt,xt.width,xt.height,0,xt.data):Ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Bt?Y&&e.texSubImage2D(s.TEXTURE_2D,lt,0,0,xt.width,xt.height,gt,Dt,xt.data):e.texImage2D(s.TEXTURE_2D,lt,Mt,xt.width,xt.height,0,gt,Dt,xt.data)}else if(S.isDataArrayTexture)if(Bt){if(Yt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,_t,Mt,ct.width,ct.height,ct.depth),Y)if(S.layerUpdates.size>0){const lt=Fc(ct.width,ct.height,S.format,S.type);for(const vt of S.layerUpdates){const Et=ct.data.subarray(vt*lt/ct.data.BYTES_PER_ELEMENT,(vt+1)*lt/ct.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,vt,ct.width,ct.height,1,gt,Dt,Et)}S.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ct.width,ct.height,ct.depth,gt,Dt,ct.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Mt,ct.width,ct.height,ct.depth,0,gt,Dt,ct.data);else if(S.isData3DTexture)Bt?(Yt&&e.texStorage3D(s.TEXTURE_3D,_t,Mt,ct.width,ct.height,ct.depth),Y&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ct.width,ct.height,ct.depth,gt,Dt,ct.data)):e.texImage3D(s.TEXTURE_3D,0,Mt,ct.width,ct.height,ct.depth,0,gt,Dt,ct.data);else if(S.isFramebufferTexture){if(Yt)if(Bt)e.texStorage2D(s.TEXTURE_2D,_t,Mt,ct.width,ct.height);else{let lt=ct.width,vt=ct.height;for(let Et=0;Et<_t;Et++)e.texImage2D(s.TEXTURE_2D,Et,Mt,lt,vt,0,gt,Dt,null),lt>>=1,vt>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in s){const lt=s.canvas;if(lt.hasAttribute("layoutsubtree")||lt.setAttribute("layoutsubtree","true"),ct.parentNode!==lt){lt.appendChild(ct),u.add(S),lt.onpaint=vt=>{const Et=vt.changedElements;for(const ht of u)Et.includes(ht.image)&&(ht.needsUpdate=!0)},lt.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,ct);else{const Et=s.RGBA,ht=s.RGBA,Ft=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,Et,ht,Ft,ct)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Ut.length>0){if(Bt&&Yt){const lt=le(Ut[0]);e.texStorage2D(s.TEXTURE_2D,_t,Mt,lt.width,lt.height)}for(let lt=0,vt=Ut.length;lt<vt;lt++)xt=Ut[lt],Bt?Y&&e.texSubImage2D(s.TEXTURE_2D,lt,0,0,gt,Dt,xt):e.texImage2D(s.TEXTURE_2D,lt,Mt,gt,Dt,xt);S.generateMipmaps=!1}else if(Bt){if(Yt){const lt=le(ct);e.texStorage2D(s.TEXTURE_2D,_t,Mt,lt.width,lt.height)}Y&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,gt,Dt,ct)}else e.texImage2D(s.TEXTURE_2D,0,Mt,gt,Dt,ct);g(S)&&b(nt),mt.__version=dt.version,S.onUpdate&&S.onUpdate(S)}D.__version=S.version}function J(D,S,Z){if(S.image.length!==6)return;const nt=z(D,S),ot=S.source;e.bindTexture(s.TEXTURE_CUBE_MAP,D.__webglTexture,s.TEXTURE0+Z);const dt=n.get(ot);if(ot.version!==dt.__version||nt===!0){e.activeTexture(s.TEXTURE0+Z);const mt=ee.getPrimaries(ee.workingColorSpace),at=S.colorSpace===xi?null:ee.getPrimaries(S.colorSpace),ct=S.colorSpace===xi||mt===at?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ct);const gt=S.isCompressedTexture||S.image[0].isCompressedTexture,Dt=S.image[0]&&S.image[0].isDataTexture,Mt=[];for(let ht=0;ht<6;ht++)!gt&&!Dt?Mt[ht]=p(S.image[ht],!0,i.maxCubemapSize):Mt[ht]=Dt?S.image[ht].image:S.image[ht],Mt[ht]=Ve(S,Mt[ht]);const xt=Mt[0],Ut=r.convert(S.format,S.colorSpace),Bt=r.convert(S.type),Yt=v(S.internalFormat,Ut,Bt,S.normalized,S.colorSpace),Y=S.isVideoTexture!==!0,_t=dt.__version===void 0||nt===!0,lt=ot.dataReady;let vt=w(S,xt);F(s.TEXTURE_CUBE_MAP,S);let Et;if(gt){Y&&_t&&e.texStorage2D(s.TEXTURE_CUBE_MAP,vt,Yt,xt.width,xt.height);for(let ht=0;ht<6;ht++){Et=Mt[ht].mipmaps;for(let Ft=0;Ft<Et.length;Ft++){const Lt=Et[Ft];S.format!==hn?Ut!==null?Y?lt&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Ft,0,0,Lt.width,Lt.height,Ut,Lt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Ft,Yt,Lt.width,Lt.height,0,Lt.data):Ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Y?lt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Ft,0,0,Lt.width,Lt.height,Ut,Bt,Lt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Ft,Yt,Lt.width,Lt.height,0,Ut,Bt,Lt.data)}}}else{if(Et=S.mipmaps,Y&&_t){Et.length>0&&vt++;const ht=le(Mt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,vt,Yt,ht.width,ht.height)}for(let ht=0;ht<6;ht++)if(Dt){Y?lt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,0,0,Mt[ht].width,Mt[ht].height,Ut,Bt,Mt[ht].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,Yt,Mt[ht].width,Mt[ht].height,0,Ut,Bt,Mt[ht].data);for(let Ft=0;Ft<Et.length;Ft++){const pe=Et[Ft].image[ht].image;Y?lt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Ft+1,0,0,pe.width,pe.height,Ut,Bt,pe.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Ft+1,Yt,pe.width,pe.height,0,Ut,Bt,pe.data)}}else{Y?lt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,0,0,Ut,Bt,Mt[ht]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,Yt,Ut,Bt,Mt[ht]);for(let Ft=0;Ft<Et.length;Ft++){const Lt=Et[Ft];Y?lt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Ft+1,0,0,Ut,Bt,Lt.image[ht]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Ft+1,Yt,Ut,Bt,Lt.image[ht])}}}g(S)&&b(s.TEXTURE_CUBE_MAP),dt.__version=ot.version,S.onUpdate&&S.onUpdate(S)}D.__version=S.version}function tt(D,S,Z,nt,ot,dt){const mt=r.convert(Z.format,Z.colorSpace),at=r.convert(Z.type),ct=v(Z.internalFormat,mt,at,Z.normalized,Z.colorSpace),gt=n.get(S),Dt=n.get(Z);if(Dt.__renderTarget=S,!gt.__hasExternalTextures){const Mt=Math.max(1,S.width>>dt),xt=Math.max(1,S.height>>dt);ot===s.TEXTURE_3D||ot===s.TEXTURE_2D_ARRAY?e.texImage3D(ot,dt,ct,Mt,xt,S.depth,0,mt,at,null):e.texImage2D(ot,dt,ct,Mt,xt,0,mt,at,null)}e.bindFramebuffer(s.FRAMEBUFFER,D),Te(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,nt,ot,Dt.__webglTexture,0,Me(S)):(ot===s.TEXTURE_2D||ot>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ot<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,nt,ot,Dt.__webglTexture,dt),e.bindFramebuffer(s.FRAMEBUFFER,null)}function ut(D,S,Z){if(s.bindRenderbuffer(s.RENDERBUFFER,D),S.depthBuffer){const nt=S.depthTexture,ot=nt&&nt.isDepthTexture?nt.type:null,dt=y(S.stencilBuffer,ot),mt=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Te(S)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Me(S),dt,S.width,S.height):Z?s.renderbufferStorageMultisample(s.RENDERBUFFER,Me(S),dt,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,dt,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,mt,s.RENDERBUFFER,D)}else{const nt=S.textures;for(let ot=0;ot<nt.length;ot++){const dt=nt[ot],mt=r.convert(dt.format,dt.colorSpace),at=r.convert(dt.type),ct=v(dt.internalFormat,mt,at,dt.normalized,dt.colorSpace);Te(S)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Me(S),ct,S.width,S.height):Z?s.renderbufferStorageMultisample(s.RENDERBUFFER,Me(S),ct,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,ct,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function pt(D,S,Z){const nt=S.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(s.FRAMEBUFFER,D),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ot=n.get(S.depthTexture);if(ot.__renderTarget=S,(!ot.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),nt){if(ot.__webglInit===void 0&&(ot.__webglInit=!0,S.depthTexture.addEventListener("dispose",P)),ot.__webglTexture===void 0){ot.__webglTexture=s.createTexture(),e.bindTexture(s.TEXTURE_CUBE_MAP,ot.__webglTexture),F(s.TEXTURE_CUBE_MAP,S.depthTexture);const gt=r.convert(S.depthTexture.format),Dt=r.convert(S.depthTexture.type);let Mt;S.depthTexture.format===ni?Mt=s.DEPTH_COMPONENT24:S.depthTexture.format===Ri&&(Mt=s.DEPTH24_STENCIL8);for(let xt=0;xt<6;xt++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,Mt,S.width,S.height,0,gt,Dt,null)}}else it(S.depthTexture,0);const dt=ot.__webglTexture,mt=Me(S),at=nt?s.TEXTURE_CUBE_MAP_POSITIVE_X+Z:s.TEXTURE_2D,ct=S.depthTexture.format===Ri?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(S.depthTexture.format===ni)Te(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ct,at,dt,0,mt):s.framebufferTexture2D(s.FRAMEBUFFER,ct,at,dt,0);else if(S.depthTexture.format===Ri)Te(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ct,at,dt,0,mt):s.framebufferTexture2D(s.FRAMEBUFFER,ct,at,dt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function wt(D){const S=n.get(D),Z=D.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==D.depthTexture){const nt=D.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),nt){const ot=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,nt.removeEventListener("dispose",ot)};nt.addEventListener("dispose",ot),S.__depthDisposeCallback=ot}S.__boundDepthTexture=nt}if(D.depthTexture&&!S.__autoAllocateDepthBuffer)if(Z)for(let nt=0;nt<6;nt++)pt(S.__webglFramebuffer[nt],D,nt);else{const nt=D.texture.mipmaps;nt&&nt.length>0?pt(S.__webglFramebuffer[0],D,0):pt(S.__webglFramebuffer,D,0)}else if(Z){S.__webglDepthbuffer=[];for(let nt=0;nt<6;nt++)if(e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[nt]),S.__webglDepthbuffer[nt]===void 0)S.__webglDepthbuffer[nt]=s.createRenderbuffer(),ut(S.__webglDepthbuffer[nt],D,!1);else{const ot=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,dt=S.__webglDepthbuffer[nt];s.bindRenderbuffer(s.RENDERBUFFER,dt),s.framebufferRenderbuffer(s.FRAMEBUFFER,ot,s.RENDERBUFFER,dt)}}else{const nt=D.texture.mipmaps;if(nt&&nt.length>0?e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=s.createRenderbuffer(),ut(S.__webglDepthbuffer,D,!1);else{const ot=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,dt=S.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,dt),s.framebufferRenderbuffer(s.FRAMEBUFFER,ot,s.RENDERBUFFER,dt)}}e.bindFramebuffer(s.FRAMEBUFFER,null)}function zt(D,S,Z){const nt=n.get(D);S!==void 0&&tt(nt.__webglFramebuffer,D,D.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),Z!==void 0&&wt(D)}function Ot(D){const S=D.texture,Z=n.get(D),nt=n.get(S);D.addEventListener("dispose",_);const ot=D.textures,dt=D.isWebGLCubeRenderTarget===!0,mt=ot.length>1;if(mt||(nt.__webglTexture===void 0&&(nt.__webglTexture=s.createTexture()),nt.__version=S.version,o.memory.textures++),dt){Z.__webglFramebuffer=[];for(let at=0;at<6;at++)if(S.mipmaps&&S.mipmaps.length>0){Z.__webglFramebuffer[at]=[];for(let ct=0;ct<S.mipmaps.length;ct++)Z.__webglFramebuffer[at][ct]=s.createFramebuffer()}else Z.__webglFramebuffer[at]=s.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){Z.__webglFramebuffer=[];for(let at=0;at<S.mipmaps.length;at++)Z.__webglFramebuffer[at]=s.createFramebuffer()}else Z.__webglFramebuffer=s.createFramebuffer();if(mt)for(let at=0,ct=ot.length;at<ct;at++){const gt=n.get(ot[at]);gt.__webglTexture===void 0&&(gt.__webglTexture=s.createTexture(),o.memory.textures++)}if(D.samples>0&&Te(D)===!1){Z.__webglMultisampledFramebuffer=s.createFramebuffer(),Z.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let at=0;at<ot.length;at++){const ct=ot[at];Z.__webglColorRenderbuffer[at]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,Z.__webglColorRenderbuffer[at]);const gt=r.convert(ct.format,ct.colorSpace),Dt=r.convert(ct.type),Mt=v(ct.internalFormat,gt,Dt,ct.normalized,ct.colorSpace,D.isXRRenderTarget===!0),xt=Me(D);s.renderbufferStorageMultisample(s.RENDERBUFFER,xt,Mt,D.width,D.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+at,s.RENDERBUFFER,Z.__webglColorRenderbuffer[at])}s.bindRenderbuffer(s.RENDERBUFFER,null),D.depthBuffer&&(Z.__webglDepthRenderbuffer=s.createRenderbuffer(),ut(Z.__webglDepthRenderbuffer,D,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(dt){e.bindTexture(s.TEXTURE_CUBE_MAP,nt.__webglTexture),F(s.TEXTURE_CUBE_MAP,S);for(let at=0;at<6;at++)if(S.mipmaps&&S.mipmaps.length>0)for(let ct=0;ct<S.mipmaps.length;ct++)tt(Z.__webglFramebuffer[at][ct],D,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+at,ct);else tt(Z.__webglFramebuffer[at],D,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);g(S)&&b(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(mt){for(let at=0,ct=ot.length;at<ct;at++){const gt=ot[at],Dt=n.get(gt);let Mt=s.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Mt=D.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(Mt,Dt.__webglTexture),F(Mt,gt),tt(Z.__webglFramebuffer,D,gt,s.COLOR_ATTACHMENT0+at,Mt,0),g(gt)&&b(Mt)}e.unbindTexture()}else{let at=s.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(at=D.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(at,nt.__webglTexture),F(at,S),S.mipmaps&&S.mipmaps.length>0)for(let ct=0;ct<S.mipmaps.length;ct++)tt(Z.__webglFramebuffer[ct],D,S,s.COLOR_ATTACHMENT0,at,ct);else tt(Z.__webglFramebuffer,D,S,s.COLOR_ATTACHMENT0,at,0);g(S)&&b(at),e.unbindTexture()}D.depthBuffer&&wt(D)}function Wt(D){const S=D.textures;for(let Z=0,nt=S.length;Z<nt;Z++){const ot=S[Z];if(g(ot)){const dt=T(D),mt=n.get(ot).__webglTexture;e.bindTexture(dt,mt),b(dt),e.unbindTexture()}}}const re=[],Ee=[];function Ne(D){if(D.samples>0){if(Te(D)===!1){const S=D.textures,Z=D.width,nt=D.height;let ot=s.COLOR_BUFFER_BIT;const dt=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,mt=n.get(D),at=S.length>1;if(at)for(let gt=0;gt<S.length;gt++)e.bindFramebuffer(s.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+gt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,mt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+gt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,mt.__webglMultisampledFramebuffer);const ct=D.texture.mipmaps;ct&&ct.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,mt.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,mt.__webglFramebuffer);for(let gt=0;gt<S.length;gt++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(ot|=s.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(ot|=s.STENCIL_BUFFER_BIT)),at){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,mt.__webglColorRenderbuffer[gt]);const Dt=n.get(S[gt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Dt,0)}s.blitFramebuffer(0,0,Z,nt,0,0,Z,nt,ot,s.NEAREST),c===!0&&(re.length=0,Ee.length=0,re.push(s.COLOR_ATTACHMENT0+gt),D.depthBuffer&&D.storeMultisampledDepthBuffer===!1&&(re.push(dt),Ee.push(dt),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Ee)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,re))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),at)for(let gt=0;gt<S.length;gt++){e.bindFramebuffer(s.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+gt,s.RENDERBUFFER,mt.__webglColorRenderbuffer[gt]);const Dt=n.get(S[gt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,mt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+gt,s.TEXTURE_2D,Dt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,mt.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.storeMultisampledDepthBuffer===!1&&c){const S=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[S])}}}function Me(D){return Math.min(i.maxSamples,D.samples)}function Te(D){const S=n.get(D);return D.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function $(D){const S=o.render.frame;h.get(D)!==S&&(h.set(D,S),D.update())}function Ve(D,S){const Z=D.colorSpace,nt=D.format,ot=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||Z!==Zr&&Z!==xi&&(ee.getTransfer(Z)===ce?(nt!==hn||ot!==tn)&&Ht("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ie("WebGLTextures: Unsupported texture color space:",Z)),S}function le(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(l.width=D.naturalWidth||D.width,l.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(l.width=D.displayWidth,l.height=D.displayHeight):(l.width=D.width,l.height=D.height),l}this.allocateTextureUnit=K,this.resetTextureUnits=W,this.getTextureUnits=B,this.setTextureUnits=H,this.setTexture2D=it,this.setTexture2DArray=G,this.setTexture3D=et,this.setTextureCube=rt,this.rebindTextures=zt,this.setupRenderTarget=Ot,this.updateRenderTargetMipmap=Wt,this.updateMultisampleRenderTarget=Ne,this.setupDepthRenderbuffer=wt,this.setupFrameBufferTexture=tt,this.useMultisampledRTT=Te,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function zx(s,t){function e(n,i=xi){let r;const o=ee.getTransfer(i);if(n===tn)return s.UNSIGNED_BYTE;if(n===dl)return s.UNSIGNED_SHORT_4_4_4_4;if(n===pl)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Jh)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Qh)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===Kh)return s.BYTE;if(n===Zh)return s.SHORT;if(n===Ks)return s.UNSIGNED_SHORT;if(n===fl)return s.INT;if(n===Fn)return s.UNSIGNED_INT;if(n===En)return s.FLOAT;if(n===_n)return s.HALF_FLOAT;if(n===jh)return s.ALPHA;if(n===tu)return s.RGB;if(n===hn)return s.RGBA;if(n===ni)return s.DEPTH_COMPONENT;if(n===Ri)return s.DEPTH_STENCIL;if(n===mo)return s.RED;if(n===ml)return s.RED_INTEGER;if(n===Li)return s.RG;if(n===gl)return s.RG_INTEGER;if(n===xl)return s.RGBA_INTEGER;if(n===Hr||n===Gr||n===Vr||n===Wr)if(o===ce)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Hr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Gr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Vr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Wr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Hr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Gr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Vr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Wr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ba||n===wa||n===Ea||n===Ta)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ba)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===wa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ea)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ta)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Aa||n===Ra||n===Ca||n===Pa||n===La||n===$r||n===Ia)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Aa||n===Ra)return o===ce?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ca)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Pa)return r.COMPRESSED_R11_EAC;if(n===La)return r.COMPRESSED_SIGNED_R11_EAC;if(n===$r)return r.COMPRESSED_RG11_EAC;if(n===Ia)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Da||n===Ua||n===Na||n===Fa||n===za||n===Oa||n===ka||n===Ba||n===Ha||n===Ga||n===Va||n===Wa||n===Xa||n===qa)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Da)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ua)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Na)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Fa)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===za)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Oa)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ka)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ba)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ha)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ga)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Va)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Wa)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Xa)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===qa)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ya||n===$a||n===Ka)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Ya)return o===ce?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===$a)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ka)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Za||n===Ja||n===Kr||n===Qa)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Za)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ja)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Kr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Qa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Zs?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}const Ox=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,kx=`
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

}`;class Bx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new uu(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new nn({vertexShader:Ox,fragmentShader:kx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ce(new ii(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Hx extends Di{constructor(t,e){super();const n=this;let i=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,f=null,d=null,m=null;const x=typeof XRWebGLBinding<"u",p=new Bx,g={},b=e.getContextAttributes();let T=null,v=null;const y=[],w=[],P=new kt;let _=null,M=null;const R=new je;R.viewport=new ge;const L=new je;L.viewport=new ge;const U=[R,L],W=new Kd;let B=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(E){let C=y[E];return C===void 0&&(C=new Lo,y[E]=C),C.getTargetRaySpace()},this.getControllerGrip=function(E){let C=y[E];return C===void 0&&(C=new Lo,y[E]=C),C.getGripSpace()},this.getHand=function(E){let C=y[E];return C===void 0&&(C=new Lo,y[E]=C),C.getHandSpace()};function K(E){const C=w.indexOf(E.inputSource);if(C===-1)return;const k=y[C];k!==void 0&&(k.update(E.inputSource,E.frame,l||o),k.dispatchEvent({type:E.type,data:E.inputSource}))}function V(){i.removeEventListener("select",K),i.removeEventListener("selectstart",K),i.removeEventListener("selectend",K),i.removeEventListener("squeeze",K),i.removeEventListener("squeezestart",K),i.removeEventListener("squeezeend",K),i.removeEventListener("end",V),i.removeEventListener("inputsourceschange",it);for(let E=0;E<y.length;E++){const C=w[E];C!==null&&(w[E]=null,y[E].disconnect(C))}B=null,H=null,p.reset();for(const E in g)delete g[E];if(t.setRenderTarget(T),d=null,f=null,u=null,i=null,v=null,z.stop(),n.isPresenting=!1,t.setPixelRatio(_),t.setSize(P.width,P.height,!1),M!==null){const E=M.camera;E.fov=M.fov,E.zoom=M.zoom,E.updateProjectionMatrix(),M=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(E){r=E,n.isPresenting===!0&&Ht("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(E){a=E,n.isPresenting===!0&&Ht("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(E){l=E},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(i,e)),u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(E){if(i=E,i!==null){if(T=t.getRenderTarget(),i.addEventListener("select",K),i.addEventListener("selectstart",K),i.addEventListener("selectend",K),i.addEventListener("squeeze",K),i.addEventListener("squeezestart",K),i.addEventListener("squeezeend",K),i.addEventListener("end",V),i.addEventListener("inputsourceschange",it),b.xrCompatible!==!0&&await e.makeXRCompatible(),_=t.getPixelRatio(),t.getSize(P),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let k=null,J=null,tt=null;b.depth&&(tt=b.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,k=b.stencil?Ri:ni,J=b.stencil?Zs:Fn);const ut={colorFormat:e.RGBA8,depthFormat:tt,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(ut),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),v=new mn(f.textureWidth,f.textureHeight,{format:hn,type:tn,depthTexture:new tr(f.textureWidth,f.textureHeight,J,void 0,void 0,void 0,void 0,void 0,void 0,k),stencilBuffer:b.stencil,colorSpace:t.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{const k={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,e,k),i.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new mn(d.framebufferWidth,d.framebufferHeight,{format:hn,type:tn,colorSpace:t.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),z.setContext(i),z.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function it(E){for(let C=0;C<E.removed.length;C++){const k=E.removed[C],J=w.indexOf(k);J>=0&&(w[J]=null,y[J].disconnect(k))}for(let C=0;C<E.added.length;C++){const k=E.added[C];let J=w.indexOf(k);if(J===-1){for(let ut=0;ut<y.length;ut++)if(ut>=w.length){w.push(k),J=ut;break}else if(w[ut]===null){w[ut]=k,J=ut;break}if(J===-1)break}const tt=y[J];tt&&tt.connect(k)}}const G=new N,et=new N;function rt(E,C,k){G.setFromMatrixPosition(C.matrixWorld),et.setFromMatrixPosition(k.matrixWorld);const J=G.distanceTo(et),tt=C.projectionMatrix.elements,ut=k.projectionMatrix.elements,pt=tt[14]/(tt[10]-1),wt=tt[14]/(tt[10]+1),zt=(tt[9]+1)/tt[5],Ot=(tt[9]-1)/tt[5],Wt=(tt[8]-1)/tt[0],re=(ut[8]+1)/ut[0],Ee=pt*Wt,Ne=pt*re,Me=J/(-Wt+re),Te=Me*-Wt;if(C.matrixWorld.decompose(E.position,E.quaternion,E.scale),E.translateX(Te),E.translateZ(Me),E.matrixWorld.compose(E.position,E.quaternion,E.scale),E.matrixWorldInverse.copy(E.matrixWorld).invert(),tt[10]===-1)E.projectionMatrix.copy(C.projectionMatrix),E.projectionMatrixInverse.copy(C.projectionMatrixInverse);else{const $=pt+Me,Ve=wt+Me,le=Ee-Te,D=Ne+(J-Te),S=zt*wt/Ve*$,Z=Ot*wt/Ve*$;E.projectionMatrix.makePerspective(le,D,S,Z,$,Ve),E.projectionMatrixInverse.copy(E.projectionMatrix).invert()}}function ft(E,C){C===null?E.matrixWorld.copy(E.matrix):E.matrixWorld.multiplyMatrices(C.matrixWorld,E.matrix),E.matrixWorldInverse.copy(E.matrixWorld).invert()}this.updateCamera=function(E){if(i===null)return;let C=E.near,k=E.far;p.texture!==null&&(p.depthNear>0&&(C=p.depthNear),p.depthFar>0&&(k=p.depthFar)),W.near=L.near=R.near=C,W.far=L.far=R.far=k,(B!==W.near||H!==W.far)&&(i.updateRenderState({depthNear:W.near,depthFar:W.far}),B=W.near,H=W.far),W.layers.mask=E.layers.mask|6,R.layers.mask=W.layers.mask&-5,L.layers.mask=W.layers.mask&-3;const J=E.parent,tt=W.cameras;ft(W,J);for(let ut=0;ut<tt.length;ut++)ft(tt[ut],J);tt.length===2?rt(W,R,L):W.projectionMatrix.copy(R.projectionMatrix),M===null&&E.isPerspectiveCamera&&(M={camera:E,fov:E.fov,zoom:E.zoom}),O(E,W,J)};function O(E,C,k){k===null?E.matrix.copy(C.matrixWorld):(E.matrix.copy(k.matrixWorld),E.matrix.invert(),E.matrix.multiply(C.matrixWorld)),E.matrix.decompose(E.position,E.quaternion,E.scale),E.updateMatrixWorld(!0),E.projectionMatrix.copy(C.projectionMatrix),E.projectionMatrixInverse.copy(C.projectionMatrixInverse),E.isPerspectiveCamera&&(E.fov=js*2*Math.atan(1/E.projectionMatrix.elements[5]),E.zoom=1)}this.getCamera=function(){return W},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(E){c=E,f!==null&&(f.fixedFoveation=E),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=E)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(W)},this.getCameraTexture=function(E){return g[E]};let X=null;function F(E,C){if(h=C.getViewerPose(l||o),m=C,h!==null){const k=h.views;d!==null&&(t.setRenderTargetFramebuffer(v,d.framebuffer),t.setRenderTarget(v));let J=!1;k.length!==W.cameras.length&&(W.cameras.length=0,J=!0);for(let wt=0;wt<k.length;wt++){const zt=k[wt];let Ot=null;if(d!==null)Ot=d.getViewport(zt);else{const re=u.getViewSubImage(f,zt);Ot=re.viewport,wt===0&&(t.setRenderTargetTextures(v,re.colorTexture,re.depthStencilTexture),t.setRenderTarget(v))}let Wt=U[wt];Wt===void 0&&(Wt=new je,Wt.layers.enable(wt),Wt.viewport=new ge,U[wt]=Wt),Wt.matrix.fromArray(zt.transform.matrix),Wt.matrix.decompose(Wt.position,Wt.quaternion,Wt.scale),Wt.projectionMatrix.fromArray(zt.projectionMatrix),Wt.projectionMatrixInverse.copy(Wt.projectionMatrix).invert(),Wt.viewport.set(Ot.x,Ot.y,Ot.width,Ot.height),wt===0&&(W.matrix.copy(Wt.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale)),J===!0&&W.cameras.push(Wt)}const tt=i.enabledFeatures;if(tt&&tt.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&x){u=n.getBinding();const wt=u.getDepthInformation(k[0]);wt&&wt.isValid&&wt.texture&&p.init(wt,i.renderState)}if(tt&&tt.includes("camera-access")&&x){t.state.unbindTexture(),u=n.getBinding();for(let wt=0;wt<k.length;wt++){const zt=k[wt].camera;if(zt){let Ot=g[zt];Ot||(Ot=new uu,g[zt]=Ot);const Wt=u.getCameraImage(zt);Ot.sourceTexture=Wt}}}}for(let k=0;k<y.length;k++){const J=w[k],tt=y[k];J!==null&&tt!==void 0&&tt.update(J,C,l||o)}X&&X(E,C),C.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:C}),m=null}const z=new mu;z.setAnimationLoop(F),this.setAnimationLoop=function(E){X=E},this.dispose=function(){}}}const Gx=new ne,Su=new Xt;Su.set(-1,0,0,0,1,0,0,0,1);function Vx(s,t){function e(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function n(p,g){g.color.getRGB(p.fogColor.value,fu(s)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function i(p,g,b,T,v){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(p,g):g.isMeshLambertMaterial?(r(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(p,g),u(p,g)):g.isMeshPhongMaterial?(r(p,g),h(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(p,g),f(p,g),g.isMeshPhysicalMaterial&&d(p,g,v)):g.isMeshMatcapMaterial?(r(p,g),m(p,g)):g.isMeshDepthMaterial?r(p,g):g.isMeshDistanceMaterial?(r(p,g),x(p,g)):g.isMeshNormalMaterial?r(p,g):g.isLineBasicMaterial?(o(p,g),g.isLineDashedMaterial&&a(p,g)):g.isPointsMaterial?c(p,g,b,T):g.isSpriteMaterial?l(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,e(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===en&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,e(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===en&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,e(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,e(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);const b=t.get(g),T=b.envMap,v=b.envMapRotation;T&&(p.envMap.value=T,p.envMapRotation.value.setFromMatrix4(Gx.makeRotationFromEuler(v)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Su),p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,p.aoMapTransform))}function o(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform))}function a(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function c(p,g,b,T){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*b,p.scale.value=T*.5,g.map&&(p.map.value=g.map,e(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function l(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function h(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function u(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function f(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function d(p,g,b){p.ior.value=g.ior,g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===en&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.retroreflectivity>0&&(p.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,g){g.matcap&&(p.matcap.value=g.matcap)}function x(p,g){const b=t.get(g).light;p.referencePosition.value.setFromMatrixPosition(b.matrixWorld),p.nearDistance.value=b.shadow.camera.near,p.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Wx(s,t,e,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,y){const w=y.program;n.uniformBlockBinding(v,w)}function l(v,y){let w=i[v.id];w===void 0&&(p(v),w=h(v),i[v.id]=w,v.addEventListener("dispose",b));const P=y.program;n.updateUBOMapping(v,P);const _=t.render.frame;r[v.id]!==_&&(f(v),r[v.id]=_)}function h(v){const y=u();v.__bindingPointIndex=y;const w=s.createBuffer(),P=v.__size,_=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,w),s.bufferData(s.UNIFORM_BUFFER,P,_),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,y,w),w}function u(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return ie("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){const y=i[v.id],w=v.uniforms,P=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,y);for(let _=0,M=w.length;_<M;_++){const R=w[_];if(Array.isArray(R))for(let L=0,U=R.length;L<U;L++)d(R[L],_,L,P);else d(R,_,0,P)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(v,y,w,P){if(x(v,y,w,P)===!0){const _=v.__offset,M=v.value;if(Array.isArray(M)){let R=0;for(let L=0;L<M.length;L++){const U=M[L],W=g(U);m(U,v.__data,R),typeof U!="number"&&typeof U!="boolean"&&!U.isMatrix3&&!ArrayBuffer.isView(U)&&(R+=W.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(M,v.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,_,v.__data)}}function m(v,y,w){typeof v=="number"||typeof v=="boolean"?y[0]=v:v.isMatrix3?(y[0]=v.elements[0],y[1]=v.elements[1],y[2]=v.elements[2],y[3]=0,y[4]=v.elements[3],y[5]=v.elements[4],y[6]=v.elements[5],y[7]=0,y[8]=v.elements[6],y[9]=v.elements[7],y[10]=v.elements[8],y[11]=0):ArrayBuffer.isView(v)?y.set(new v.constructor(v.buffer,v.byteOffset,y.length)):v.toArray(y,w)}function x(v,y,w,P){const _=v.value,M=y+"_"+w;if(P[M]===void 0)return typeof _=="number"||typeof _=="boolean"?P[M]=_:ArrayBuffer.isView(_)?P[M]=_.slice():P[M]=_.clone(),!0;{const R=P[M];if(typeof _=="number"||typeof _=="boolean"){if(R!==_)return P[M]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(R.equals(_)===!1)return R.copy(_),!0}}return!1}function p(v){const y=v.uniforms;let w=0;const P=16;for(let M=0,R=y.length;M<R;M++){const L=Array.isArray(y[M])?y[M]:[y[M]];for(let U=0,W=L.length;U<W;U++){const B=L[U],H=Array.isArray(B.value)?B.value:[B.value];for(let K=0,V=H.length;K<V;K++){const it=H[K],G=g(it),et=w%P,rt=et%G.boundary,ft=et+rt;w+=rt,ft!==0&&P-ft<G.storage&&(w+=P-ft),B.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=w,w+=G.storage}}}const _=w%P;return _>0&&(w+=P-_),v.__size=w,v.__cache={},this}function g(v){const y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?Ht("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(y.boundary=16,y.storage=v.byteLength):Ht("WebGLRenderer: Unsupported uniform value type.",v),y}function b(v){const y=v.target;y.removeEventListener("dispose",b);const w=o.indexOf(y.__bindingPointIndex);o.splice(w,1),s.deleteBuffer(i[y.id]),delete i[y.id],delete r[y.id]}function T(){for(const v in i)s.deleteBuffer(i[v]);o=[],i={},r={}}return{bind:c,update:l,dispose:T}}const Xx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Cn=null;function qx(){return Cn===null&&(Cn=new ps(Xx,16,16,Li,_n),Cn.name="DFG_LUT",Cn.minFilter=ke,Cn.magFilter=ke,Cn.wrapS=Jn,Cn.wrapT=Jn,Cn.generateMipmaps=!1,Cn.needsUpdate=!0),Cn}class Yx{constructor(t={}){const{canvas:e=Of(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:d=tn}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;const x=d,p=new Set([xl,gl,ml]),g=new Set([tn,Fn,Ks,Zs,dl,pl]),b=new Uint32Array(4),T=new Int32Array(4),v=new N;let y=null,w=null;const P=[],_=[];let M=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Nn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let L=!1,U=null,W=null,B=null,H=null;this._outputColorSpace=Le;let K=0,V=0,it=null,G=-1,et=null;const rt=new ge,ft=new ge;let O=null;const X=new Gt(0);let F=0,z=e.width,E=e.height,C=1,k=null,J=null;const tt=new ge(0,0,z,E),ut=new ge(0,0,z,E);let pt=!1;const wt=new El;let zt=!1,Ot=!1;const Wt=new ne,re=new N,Ee=new ge,Ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Me=!1;function Te(){return it===null?C:1}let $=n;function Ve(A,q){return e.getContext(A,q)}let le,D,S,Z,nt,ot,dt,mt,at,ct,gt,Dt,Mt,xt,Ut,Bt,Yt,Y,_t,lt,vt,Et,ht;try{const A={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${cl}`),e.addEventListener("webglcontextlost",pe,!1),e.addEventListener("webglcontextrestored",oe,!1),e.addEventListener("webglcontextcreationerror",Mn,!1),$===null){const q="webgl2";if($=Ve(q,A),$===null)throw Ve(q)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ft()}catch(A){throw e.removeEventListener("webglcontextlost",pe,!1),e.removeEventListener("webglcontextrestored",oe,!1),e.removeEventListener("webglcontextcreationerror",Mn,!1),ie("WebGLRenderer: "+A.message),A}function Ft(){le=new q0($),le.init(),vt=new zx($,le),D=new F0($,le,t,vt),S=new Nx($,le),D.reversedDepthBuffer&&f&&S.buffers.depth.setReversed(!0),W=$.createFramebuffer(),B=$.createFramebuffer(),H=$.createFramebuffer(),Z=new K0($),nt=new yx,ot=new Fx($,le,S,nt,D,vt,Z),dt=new X0(R),mt=new Jd($),Et=new U0($,mt),at=new Y0($,mt,Z,Et),ct=new J0($,at,mt,Et,Z),Y=new Z0($,D,ot),Ut=new z0(nt),gt=new Mx(R,dt,le,D,Et,Ut),Dt=new Vx(R,nt),Mt=new bx,xt=new Cx(le),Yt=new D0(R,dt,S,ct,m,c),Bt=new Ux(R,ct,D),ht=new Wx($,Z,D,S),_t=new N0($,le,Z),lt=new $0($,le,Z),Z.programs=gt.programs,R.capabilities=D,R.extensions=le,R.properties=nt,R.renderLists=Mt,R.shadowMap=Bt,R.state=S,R.info=Z}x!==tn&&(M=new j0(x,e.width,e.height,a,i,r));const Lt=new Hx(R,$);this.xr=Lt,this.getContext=function(){return $},this.getContextAttributes=function(){return $.getContextAttributes()},this.forceContextLoss=function(){const A=le.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=le.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return C},this.setPixelRatio=function(A){A!==void 0&&(C=A,this.setSize(z,E,!1))},this.getSize=function(A){return A.set(z,E)},this.setSize=function(A,q,st=!0){if(Lt.isPresenting){Ht("WebGLRenderer: Can't change size while VR device is presenting.");return}z=A,E=q,e.width=Math.floor(A*C),e.height=Math.floor(q*C),st===!0&&(e.style.width=A+"px",e.style.height=q+"px"),M!==null&&M.setSize(e.width,e.height),this.setViewport(0,0,A,q)},this.getDrawingBufferSize=function(A){return A.set(z*C,E*C).floor()},this.setDrawingBufferSize=function(A,q,st){z=A,E=q,C=st,e.width=Math.floor(A*st),e.height=Math.floor(q*st),this.setViewport(0,0,A,q)},this.setEffects=function(A){if(x===tn){ie("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let q=0;q<A.length;q++)if(A[q].isOutputPass===!0){Ht("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}M.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(rt)},this.getViewport=function(A){return A.copy(tt)},this.setViewport=function(A,q,st,Q){A.isVector4?tt.set(A.x,A.y,A.z,A.w):tt.set(A,q,st,Q),S.viewport(rt.copy(tt).multiplyScalar(C).round())},this.getScissor=function(A){return A.copy(ut)},this.setScissor=function(A,q,st,Q){A.isVector4?ut.set(A.x,A.y,A.z,A.w):ut.set(A,q,st,Q),S.scissor(ft.copy(ut).multiplyScalar(C).round())},this.getScissorTest=function(){return pt},this.setScissorTest=function(A){S.setScissorTest(pt=A)},this.setOpaqueSort=function(A){k=A},this.setTransparentSort=function(A){J=A},this.getClearColor=function(A){return A.copy(Yt.getClearColor())},this.setClearColor=function(){Yt.setClearColor(...arguments)},this.getClearAlpha=function(){return Yt.getClearAlpha()},this.setClearAlpha=function(){Yt.setClearAlpha(...arguments)},this.clear=function(A=!0,q=!0,st=!0){let Q=0;if(A){let j=!1;if(it!==null){const bt=it.texture.format;j=p.has(bt)}if(j){const bt=it.texture.type,Rt=g.has(bt),St=Yt.getClearColor(),Ct=Yt.getClearAlpha(),It=St.r,$t=St.g,Jt=St.b;Rt?(b[0]=It,b[1]=$t,b[2]=Jt,b[3]=Ct,$.clearBufferuiv($.COLOR,0,b)):(T[0]=It,T[1]=$t,T[2]=Jt,T[3]=Ct,$.clearBufferiv($.COLOR,0,T))}else Q|=$.COLOR_BUFFER_BIT}q&&(Q|=$.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),st&&(Q|=$.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Q!==0&&$.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),U=A},this.dispose=function(){e.removeEventListener("webglcontextlost",pe,!1),e.removeEventListener("webglcontextrestored",oe,!1),e.removeEventListener("webglcontextcreationerror",Mn,!1),Yt.dispose(),Mt.dispose(),xt.dispose(),nt.dispose(),dt.dispose(),ct.dispose(),Et.dispose(),ht.dispose(),gt.dispose(),Lt.dispose(),Lt.removeEventListener("sessionstart",Gl),Lt.removeEventListener("sessionend",Vl),yi.stop()};function pe(A){A.preventDefault(),Qr("WebGLRenderer: Context Lost."),L=!0}function oe(){Qr("WebGLRenderer: Context Restored."),L=!1;const A=Z.autoReset,q=Bt.enabled,st=Bt.autoUpdate,Q=Bt.needsUpdate,j=Bt.type;Ft(),Z.autoReset=A,Bt.enabled=q,Bt.autoUpdate=st,Bt.needsUpdate=Q,Bt.type=j}function Mn(A){ie("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Tn(A){const q=A.target;q.removeEventListener("dispose",Tn),$u(q)}function $u(A){Ku(A),nt.remove(A)}function Ku(A){const q=nt.get(A).programs;q!==void 0&&(q.forEach(function(st){gt.releaseProgram(st)}),A.isShaderMaterial&&gt.releaseShaderCache(A))}this.renderBufferDirect=function(A,q,st,Q,j,bt){q===null&&(q=Ne);const Rt=j.isMesh&&j.matrixWorld.determinantAffine()<0,St=Qu(A,q,st,Q,j);S.setMaterial(Q,Rt);let Ct=st.index,It=1;if(Q.wireframe===!0){if(Ct=at.getWireframeAttribute(st),Ct===void 0)return;It=2}const $t=st.drawRange,Jt=st.attributes.position;let Pt=$t.start*It,ae=($t.start+$t.count)*It;bt!==null&&(Pt=Math.max(Pt,bt.start*It),ae=Math.min(ae,(bt.start+bt.count)*It)),Ct!==null?(Pt=Math.max(Pt,0),ae=Math.min(ae,Ct.count)):Jt!=null&&(Pt=Math.max(Pt,0),ae=Math.min(ae,Jt.count));const Ae=ae-Pt;if(Ae<0||Ae===1/0)return;Et.setup(j,Q,St,st,Ct);let xe,de=_t;if(Ct!==null&&(xe=mt.get(Ct),de=lt,de.setIndex(xe)),j.isMesh)Q.wireframe===!0?(S.setLineWidth(Q.wireframeLinewidth*Te()),de.setMode($.LINES)):de.setMode($.TRIANGLES);else if(j.isLine){let We=Q.linewidth;We===void 0&&(We=1),S.setLineWidth(We*Te()),j.isLineSegments?de.setMode($.LINES):j.isLineLoop?de.setMode($.LINE_LOOP):de.setMode($.LINE_STRIP)}else j.isPoints?de.setMode($.POINTS):j.isSprite&&de.setMode($.TRIANGLES);if(j.isBatchedMesh)if(le.get("WEBGL_multi_draw"))de.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const We=j._multiDrawStarts,At=j._multiDrawCounts,Ye=j._multiDrawCount,se=Ct?mt.get(Ct).bytesPerElement:1,un=nt.get(Q).currentProgram.getUniforms();for(let An=0;An<Ye;An++)un.setValue($,"_gl_DrawID",An),de.render(We[An]/se,At[An])}else if(j.isInstancedMesh)de.renderInstances(Pt,Ae,j.count);else if(st.isInstancedBufferGeometry){const We=st._maxInstanceCount!==void 0?st._maxInstanceCount:1/0,At=Math.min(st.instanceCount,We);de.renderInstances(Pt,Ae,At)}else de.render(Pt,Ae)};function Hl(A,q,st,Q){U!==null&&A.isNodeMaterial&&U.setObject(Q,A),zt===!0&&Ut.setState(A,st,!1),A.transparent===!0&&A.side===$n&&A.forceSinglePass===!1?(A.side=en,A.needsUpdate=!0,sr(A,q,Q),A.side=Ci,A.needsUpdate=!0,sr(A,q,Q),A.side=$n):sr(A,q,Q)}this.compile=function(A,q,st=null){st===null&&(st=A),U!==null&&U.renderStart(A,q,st),w=xt.get(st),w.init(q),_.push(w),st.traverseVisible(function(j){j.isLight&&j.layers.test(q.layers)&&(w.pushLight(j),j.castShadow&&w.pushShadow(j))}),A!==st&&A.traverseVisible(function(j){j.isLight&&j.layers.test(q.layers)&&(w.pushLight(j),j.castShadow&&w.pushShadow(j))}),w.setupLights(),U!==null&&U.updateLights(w.state.lightsArray),Ot=this.localClippingEnabled,zt=Ut.init(this.clippingPlanes,Ot),zt===!0&&Ut.setGlobalState(this.clippingPlanes,q),U!==null&&Bt.render(w.state.shadowsArray,st,q);const Q=new Set;return A.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const bt=j.material;if(bt)if(Array.isArray(bt))for(let Rt=0;Rt<bt.length;Rt++){const St=bt[Rt];Hl(St,st,q,j),Q.add(St)}else Hl(bt,st,q,j),Q.add(bt)}),w=_.pop(),U!==null&&U.renderEnd(),Q},this.compileAsync=function(A,q,st=null){const Q=this.compile(A,q,st);return new Promise(j=>{function bt(){if(Q.forEach(function(Rt){const Ct=nt.get(Rt).currentProgram;(Ct===void 0||Ct.isReady())&&Q.delete(Rt)}),Q.size===0){j(A);return}setTimeout(bt,10)}le.get("KHR_parallel_shader_compile")!==null?bt():setTimeout(bt,10)})};let Mo=null;function Zu(A){Mo&&Mo(A)}function Gl(){yi.stop()}function Vl(){yi.start()}const yi=new mu;yi.setAnimationLoop(Zu),typeof self<"u"&&yi.setContext(self),this.setAnimationLoop=function(A){Mo=A,Lt.setAnimationLoop(A),A===null?yi.stop():yi.start()},Lt.addEventListener("sessionstart",Gl),Lt.addEventListener("sessionend",Vl),this.render=function(A,q){if(q!==void 0&&q.isCamera!==!0){ie("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;U!==null&&U.renderStart(A,q);const st=Lt.enabled===!0&&Lt.isPresenting===!0,Q=M!==null&&(it===null||st)&&M.begin(R,it);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),Lt.enabled===!0&&Lt.isPresenting===!0&&(M===null||M.isCompositing()===!1)&&(Lt.cameraAutoUpdate===!0&&Lt.updateCamera(q),q=Lt.getCamera()),A.isScene===!0&&A.onBeforeRender(R,A,q,it),w=xt.get(A,_.length),w.init(q),w.state.textureUnits=ot.getTextureUnits(),_.push(w),Wt.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),wt.setFromProjectionMatrix(Wt,Un,q.reversedDepth),Ot=this.localClippingEnabled,zt=Ut.init(this.clippingPlanes,Ot),y=Mt.get(A,P.length),y.init(),P.push(y),Lt.enabled===!0&&Lt.isPresenting===!0){const Rt=R.xr.getDepthSensingMesh();Rt!==null&&yo(Rt,q,-1/0,R.sortObjects)}yo(A,q,0,R.sortObjects),y.finish(),U!==null&&U.updateLights(w.state.lightsArray),R.sortObjects===!0&&y.sort(k,J),Me=Lt.enabled===!1||Lt.isPresenting===!1||Lt.hasDepthSensing()===!1,Me&&Yt.addToRenderList(y,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),zt===!0&&Ut.beginShadows();const j=w.state.shadowsArray;if(Bt.render(j,A,q),zt===!0&&Ut.endShadows(),(Q&&M.hasRenderPass())===!1){const Rt=y.opaque,St=y.transmissive;if(w.setupLights(),q.isArrayCamera){const Ct=q.cameras;if(St.length>0)for(let It=0,$t=Ct.length;It<$t;It++){const Jt=Ct[It];Xl(Rt,St,A,Jt)}Me&&Yt.render(A);for(let It=0,$t=Ct.length;It<$t;It++){const Jt=Ct[It];Wl(y,A,Jt,Jt.viewport)}}else St.length>0&&Xl(Rt,St,A,q),Me&&Yt.render(A),Wl(y,A,q)}it!==null&&V===0&&(ot.updateMultisampleRenderTarget(it),ot.updateRenderTargetMipmap(it)),Q&&M.end(R),A.isScene===!0&&A.onAfterRender(R,A,q),Et.resetDefaultState(),G=-1,et=null,_.pop(),_.length>0?(w=_[_.length-1],ot.setTextureUnits(w.state.textureUnits),zt===!0&&Ut.setGlobalState(R.clippingPlanes,w.state.camera)):w=null,P.pop(),P.length>0?y=P[P.length-1]:y=null,U!==null&&U.renderEnd()};function yo(A,q,st,Q){if(A.visible===!1)return;if(A.layers.test(q.layers)){if(A.isGroup)st=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(q);else if(A.isLightProbeGrid)w.pushLightProbeGrid(A);else if(A.isLight)w.pushLight(A),A.castShadow&&w.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||A.intersectsFrustum(wt)){Q&&Ee.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Wt);const Rt=ct.update(A),St=A.material;St.visible&&y.push(A,Rt,St,st,Ee.z,null,q)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||A.intersectsFrustum(wt))){const Rt=ct.update(A),St=A.material;if(Q&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ee.copy(A.boundingSphere.center)):(Rt.boundingSphere===null&&Rt.computeBoundingSphere(),Ee.copy(Rt.boundingSphere.center)),Ee.applyMatrix4(A.matrixWorld).applyMatrix4(Wt)),Array.isArray(St)){const Ct=Rt.groups;for(let It=0,$t=Ct.length;It<$t;It++){const Jt=Ct[It],Pt=St[Jt.materialIndex];Pt&&Pt.visible&&y.push(A,Rt,Pt,st,Ee.z,Jt,q)}}else St.visible&&y.push(A,Rt,St,st,Ee.z,null,q)}}const bt=A.children;for(let Rt=0,St=bt.length;Rt<St;Rt++)yo(bt[Rt],q,st,Q)}function Wl(A,q,st,Q){const{opaque:j,transmissive:bt,transparent:Rt}=A;w.setupLightsView(st),zt===!0&&Ut.setGlobalState(R.clippingPlanes,st),Q&&S.viewport(rt.copy(Q)),j.length>0&&ir(j,q,st),bt.length>0&&ir(bt,q,st),Rt.length>0&&ir(Rt,q,st),S.buffers.depth.setTest(!0),S.buffers.depth.setMask(!0),S.buffers.color.setMask(!0),S.setPolygonOffset(!1)}function Xl(A,q,st,Q){if((st.isScene===!0?st.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[Q.id]===void 0){const Pt=le.has("EXT_color_buffer_half_float")||le.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[Q.id]=new mn(1,1,{generateMipmaps:!0,type:Pt?_n:tn,minFilter:vi,samples:Math.max(4,D.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ee.workingColorSpace})}const bt=w.state.transmissionRenderTarget[Q.id],Rt=Q.viewport||rt;bt.setSize(Rt.z*R.transmissionResolutionScale,Rt.w*R.transmissionResolutionScale);const St=R.getRenderTarget(),Ct=R.getActiveCubeFace(),It=R.getActiveMipmapLevel();R.setRenderTarget(bt),R.getClearColor(X),F=R.getClearAlpha(),F<1&&R.setClearColor(16777215,.5),R.clear(),Me&&Yt.render(st);const $t=R.toneMapping;R.toneMapping=Nn;const Jt=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),w.setupLightsView(Q),zt===!0&&Ut.setGlobalState(R.clippingPlanes,Q),ir(A,st,Q),ot.updateMultisampleRenderTarget(bt),ot.updateRenderTargetMipmap(bt),le.has("WEBGL_multisampled_render_to_texture")===!1){let Pt=!1;for(let ae=0,Ae=q.length;ae<Ae;ae++){const xe=q[ae],{object:de,geometry:We,material:At,group:Ye}=xe;if(At.side===$n&&de.layers.test(Q.layers)){const se=At.side;At.side=en,At.needsUpdate=!0,ql(de,st,Q,We,At,Ye),At.side=se,At.needsUpdate=!0,Pt=!0}}Pt===!0&&(ot.updateMultisampleRenderTarget(bt),ot.updateRenderTargetMipmap(bt))}R.setRenderTarget(St,Ct,It),R.setClearColor(X,F),Jt!==void 0&&(Q.viewport=Jt),R.toneMapping=$t}function ir(A,q,st){const Q=q.isScene===!0?q.overrideMaterial:null;for(let j=0,bt=A.length;j<bt;j++){const Rt=A[j],{object:St,geometry:Ct,group:It}=Rt;let $t=Rt.material;$t.allowOverride===!0&&Q!==null&&($t=Q),St.layers.test(st.layers)&&ql(St,q,st,Ct,$t,It)}}function ql(A,q,st,Q,j,bt){U!==null&&j.isNodeMaterial&&U.setObject(A,j),A.onBeforeRender(R,q,st,Q,j,bt),A.modelViewMatrix.multiplyMatrices(st.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),j.onBeforeRender(R,q,st,Q,A,bt),j.transparent===!0&&j.side===$n&&j.forceSinglePass===!1?(j.side=en,j.needsUpdate=!0,R.renderBufferDirect(st,q,Q,j,A,bt),j.side=Ci,j.needsUpdate=!0,R.renderBufferDirect(st,q,Q,j,A,bt),j.side=$n):R.renderBufferDirect(st,q,Q,j,A,bt),A.onAfterRender(R,q,st,Q,j,bt)}function sr(A,q,st){q.isScene!==!0&&(q=Ne);const Q=nt.get(A),j=w.state.lights,bt=w.state.shadowsArray,Rt=j.state.version,St=gt.getParameters(A,j.state,bt,q,st,w.state.lightProbeGridArray),Ct=gt.getProgramCacheKey(St);let It=Q.programs;Q.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?q.environment:null,Q.fog=q.fog;const $t=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;Q.envMap=dt.get(A.envMap||Q.environment,$t),Q.envMapRotation=Q.environment!==null&&A.envMap===null?q.environmentRotation:A.envMapRotation,It===void 0&&(A.addEventListener("dispose",Tn),It=new Map,Q.programs=It);let Jt=It.get(Ct);if(Jt!==void 0){if(Q.currentProgram===Jt&&Q.lightsStateVersion===Rt)return $l(A,St),Jt}else St.uniforms=gt.getUniforms(A),U!==null&&A.isNodeMaterial&&U.build(A,st,St),A.onBeforeCompile(St,R),Jt=gt.acquireProgram(St,Ct),It.set(Ct,Jt),Q.uniforms=St.uniforms;const Pt=Q.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Pt.clippingPlanes=Ut.uniform),$l(A,St),Q.needsLights=tf(A),Q.lightsStateVersion=Rt,Q.needsLights&&(Pt.ambientLightColor.value=j.state.ambient,Pt.lightProbe.value=j.state.probe,Pt.sunLights.value=j.state.sun,Pt.sunLightShadows.value=j.state.sunShadow,Pt.directionalLights.value=j.state.directional,Pt.directionalLightShadows.value=j.state.directionalShadow,Pt.spotLights.value=j.state.spot,Pt.spotLightShadows.value=j.state.spotShadow,Pt.rectAreaLights.value=j.state.rectArea,Pt.ltc_1.value=j.state.rectAreaLTC1,Pt.ltc_2.value=j.state.rectAreaLTC2,Pt.pointLights.value=j.state.point,Pt.pointLightShadows.value=j.state.pointShadow,Pt.hemisphereLights.value=j.state.hemi,Pt.sunShadowMatrix.value=j.state.sunShadowMatrix,Pt.sunShadowCascade.value=j.state.sunShadowCascade,Pt.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Pt.spotLightMatrix.value=j.state.spotLightMatrix,Pt.spotLightMap.value=j.state.spotLightMap,Pt.pointShadowMatrix.value=j.state.pointShadowMatrix),Q.lightProbeGrid=w.state.lightProbeGridArray.length>0,Q.currentProgram=Jt,Q.uniformsList=null,Jt}function Yl(A){if(A.uniformsList===null){const q=A.currentProgram.getUniforms();A.uniformsList=qr.seqWithValue(q.seq,A.uniforms)}return A.uniformsList}function $l(A,q){const st=nt.get(A);st.outputColorSpace=q.outputColorSpace,st.batching=q.batching,st.batchingColor=q.batchingColor,st.instancing=q.instancing,st.instancingColor=q.instancingColor,st.instancingMorph=q.instancingMorph,st.skinning=q.skinning,st.morphTargets=q.morphTargets,st.morphNormals=q.morphNormals,st.morphColors=q.morphColors,st.morphTargetsCount=q.morphTargetsCount,st.numClippingPlanes=q.numClippingPlanes,st.numIntersection=q.numClipIntersection,st.vertexAlphas=q.vertexAlphas,st.vertexTangents=q.vertexTangents,st.toneMapping=q.toneMapping}function Ju(A,q){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;v.setFromMatrixPosition(q.matrixWorld);for(let st=0,Q=A.length;st<Q;st++){const j=A[st];if(j.texture!==null&&j.boundingBox.containsPoint(v))return j}return null}function Qu(A,q,st,Q,j){q.isScene!==!0&&(q=Ne),ot.resetTextureUnits();const bt=q.fog,Rt=Q.isMeshStandardMaterial||Q.isMeshLambertMaterial||Q.isMeshPhongMaterial?q.environment:null,St=it===null?R.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:ee.workingColorSpace,Ct=Q.isMeshStandardMaterial||Q.isMeshLambertMaterial&&!Q.envMap||Q.isMeshPhongMaterial&&!Q.envMap,It=dt.get(Q.envMap||Rt,Ct),$t=Q.vertexColors===!0&&!!st.attributes.color&&st.attributes.color.itemSize===4,Jt=!!st.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),Pt=!!st.morphAttributes.position,ae=!!st.morphAttributes.normal,Ae=!!st.morphAttributes.color;let xe=Nn;Q.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(xe=R.toneMapping);const de=st.morphAttributes.position||st.morphAttributes.normal||st.morphAttributes.color,We=de!==void 0?de.length:0,At=nt.get(Q),Ye=w.state.lights;if(zt===!0&&(Ot===!0||A!==et)){const me=A===et&&Q.id===G;Ut.setState(Q,A,me)}let se=!1;Q.version===At.__version?(At.needsLights&&At.lightsStateVersion!==Ye.state.version||At.outputColorSpace!==St||j.isBatchedMesh&&At.batching===!1||!j.isBatchedMesh&&At.batching===!0||j.isBatchedMesh&&At.batchingColor===!0&&j._colorsTexture===null||j.isBatchedMesh&&At.batchingColor===!1&&j._colorsTexture!==null||j.isInstancedMesh&&At.instancing===!1||!j.isInstancedMesh&&At.instancing===!0||j.isSkinnedMesh&&At.skinning===!1||!j.isSkinnedMesh&&At.skinning===!0||j.isInstancedMesh&&At.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&At.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&At.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&At.instancingMorph===!1&&j.morphTexture!==null||At.envMap!==It||Q.fog===!0&&At.fog!==bt||At.numClippingPlanes!==void 0&&(At.numClippingPlanes!==Ut.numPlanes||At.numIntersection!==Ut.numIntersection)||At.vertexAlphas!==$t||At.vertexTangents!==Jt||At.morphTargets!==Pt||At.morphNormals!==ae||At.morphColors!==Ae||At.toneMapping!==xe||At.morphTargetsCount!==We||!!At.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(se=!0):(se=!0,At.__version=Q.version);let un=At.currentProgram;se===!0&&(un=sr(Q,q,j),U&&Q.isNodeMaterial&&U.onUpdateProgram(Q,un,At));let An=!1,si=!1,Fi=!1;const fe=un.getUniforms(),be=At.uniforms;if(S.useProgram(un.program)&&(An=!0,si=!0,Fi=!0),Q.id!==G&&(G=Q.id,si=!0),At.needsLights){const me=Ju(w.state.lightProbeGridArray,j);At.lightProbeGrid!==me&&(At.lightProbeGrid=me,si=!0)}if(An||et!==A){S.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),fe.setValue($,"projectionMatrix",A.projectionMatrix),fe.setValue($,"viewMatrix",A.matrixWorldInverse);const oi=fe.map.cameraPosition;oi!==void 0&&oi.setValue($,re.setFromMatrixPosition(A.matrixWorld)),D.logarithmicDepthBuffer&&fe.setValue($,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&fe.setValue($,"isOrthographic",A.isOrthographicCamera===!0),et!==A&&(et=A,si=!0,Fi=!0)}if(At.needsLights&&(Ye.state.sunShadowMap.length>0&&fe.setValue($,"sunShadowMap",Ye.state.sunShadowMap,ot),Ye.state.directionalShadowMap.length>0&&fe.setValue($,"directionalShadowMap",Ye.state.directionalShadowMap,ot),Ye.state.spotShadowMap.length>0&&fe.setValue($,"spotShadowMap",Ye.state.spotShadowMap,ot),Ye.state.pointShadowMap.length>0&&fe.setValue($,"pointShadowMap",Ye.state.pointShadowMap,ot)),j.isSkinnedMesh){fe.setOptional($,j,"bindMatrix"),fe.setOptional($,j,"bindMatrixInverse");const me=j.skeleton;me&&(me.boneTexture===null&&me.computeBoneTexture(),fe.setValue($,"boneTexture",me.boneTexture,ot))}j.isBatchedMesh&&(fe.setOptional($,j,"batchingTexture"),fe.setValue($,"batchingTexture",j._matricesTexture,ot),fe.setOptional($,j,"batchingIdTexture"),fe.setValue($,"batchingIdTexture",j._indirectTexture,ot),fe.setOptional($,j,"batchingColorTexture"),j._colorsTexture!==null&&fe.setValue($,"batchingColorTexture",j._colorsTexture,ot));const ri=st.morphAttributes;if((ri.position!==void 0||ri.normal!==void 0||ri.color!==void 0)&&Y.update(j,st,un),(si||At.receiveShadow!==j.receiveShadow)&&(At.receiveShadow=j.receiveShadow,fe.setValue($,"receiveShadow",j.receiveShadow)),(Q.isMeshStandardMaterial||Q.isMeshLambertMaterial||Q.isMeshPhongMaterial)&&Q.envMap===null&&q.environment!==null&&(be.envMapIntensity.value=q.environmentIntensity),be.dfgLUT!==void 0&&(be.dfgLUT.value=qx()),si){if(fe.setValue($,"toneMappingExposure",R.toneMappingExposure),At.needsLights&&ju(be,Fi),bt&&Q.fog===!0&&Dt.refreshFogUniforms(be,bt),Dt.refreshMaterialUniforms(be,Q,C,E,w.state.transmissionRenderTarget[A.id]),At.needsLights&&At.lightProbeGrid){const me=At.lightProbeGrid;be.probesSH.value=me.texture,be.probesMin.value.copy(me.boundingBox.min),be.probesMax.value.copy(me.boundingBox.max),be.probesResolution.value.copy(me.resolution)}qr.upload($,Yl(At),be,ot)}if(Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(qr.upload($,Yl(At),be,ot),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&fe.setValue($,"center",j.center),fe.setValue($,"modelViewMatrix",j.modelViewMatrix),fe.setValue($,"normalMatrix",j.normalMatrix),fe.setValue($,"modelMatrix",j.matrixWorld),Q.uniformsGroups!==void 0){const me=Q.uniformsGroups;for(let oi=0,zi=me.length;oi<zi;oi++){const Zl=me[oi];ht.update(Zl,un),ht.bind(Zl,un)}}return un}function ju(A,q){A.ambientLightColor.needsUpdate=q,A.lightProbe.needsUpdate=q,A.sunLights.needsUpdate=q,A.sunLightShadows.needsUpdate=q,A.directionalLights.needsUpdate=q,A.directionalLightShadows.needsUpdate=q,A.pointLights.needsUpdate=q,A.pointLightShadows.needsUpdate=q,A.spotLights.needsUpdate=q,A.spotLightShadows.needsUpdate=q,A.rectAreaLights.needsUpdate=q,A.hemisphereLights.needsUpdate=q}function tf(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return K},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return it},this.setRenderTargetTextures=function(A,q,st){const Q=nt.get(A);Q.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,Q.__autoAllocateDepthBuffer===!1&&(Q.__useRenderToTexture=!1),nt.get(A.texture).__webglTexture=q,nt.get(A.depthTexture).__webglTexture=Q.__autoAllocateDepthBuffer?void 0:st,Q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,q){const st=nt.get(A);st.__webglFramebuffer=q,st.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(A,q=0,st=0){it=A,K=q,V=st;let Q=null,j=!1,bt=!1;if(A){const St=nt.get(A);if(St.__useDefaultFramebuffer!==void 0){S.bindFramebuffer($.FRAMEBUFFER,St.__webglFramebuffer),rt.copy(A.viewport),ft.copy(A.scissor),O=A.scissorTest,S.viewport(rt),S.scissor(ft),S.setScissorTest(O),G=-1;return}else if(St.__webglFramebuffer===void 0)ot.setupRenderTarget(A);else if(St.__hasExternalTextures)ot.rebindTextures(A,nt.get(A.texture).__webglTexture,nt.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const $t=A.depthTexture;if(St.__boundDepthTexture!==$t){if($t!==null&&nt.has($t)&&(A.width!==$t.image.width||A.height!==$t.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ot.setupDepthRenderbuffer(A)}}const Ct=A.texture;(Ct.isData3DTexture||Ct.isDataArrayTexture||Ct.isCompressedArrayTexture)&&(bt=!0);const It=nt.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(It[q])?Q=It[q][st]:Q=It[q],j=!0):A.samples>0&&ot.useMultisampledRTT(A)===!1?Q=nt.get(A).__webglMultisampledFramebuffer:Array.isArray(It)?Q=It[st]:Q=It,rt.copy(A.viewport),ft.copy(A.scissor),O=A.scissorTest}else rt.copy(tt).multiplyScalar(C).floor(),ft.copy(ut).multiplyScalar(C).floor(),O=pt;if(st!==0&&(Q=W),S.bindFramebuffer($.FRAMEBUFFER,Q)&&S.drawBuffers(A,Q),S.viewport(rt),S.scissor(ft),S.setScissorTest(O),j){const St=nt.get(A.texture);$.framebufferTexture2D($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_CUBE_MAP_POSITIVE_X+q,St.__webglTexture,st)}else if(bt){const St=q;for(let Ct=0;Ct<A.textures.length;Ct++){const It=nt.get(A.textures[Ct]);$.framebufferTextureLayer($.FRAMEBUFFER,$.COLOR_ATTACHMENT0+Ct,It.__webglTexture,st,St)}}else if(A!==null&&st!==0){const St=nt.get(A.texture);$.framebufferTexture2D($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_2D,St.__webglTexture,st)}G=-1};function Kl(A){const q=nt.get(A);return(q.__readFormat!==A.format||q.__readType!==A.type)&&(q.__readFormat=A.format,q.__readType=A.type,q.__formatReadable=D.textureFormatReadable(A.format),q.__typeReadable=D.textureTypeReadable(A.type)),q}this.readRenderTargetPixels=function(A,q,st,Q,j,bt,Rt,St=0){if(!(A&&A.isWebGLRenderTarget)){ie("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ct=nt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Rt!==void 0&&(Ct=Ct[Rt]),Ct){S.bindFramebuffer($.FRAMEBUFFER,Ct);try{const It=A.textures[St],$t=It.format,Jt=It.type;A.textures.length>1&&$.readBuffer($.COLOR_ATTACHMENT0+St);const Pt=Kl(It);if(Pt.__formatReadable===!1){ie("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Pt.__typeReadable===!1){ie("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=A.width-Q&&st>=0&&st<=A.height-j&&$.readPixels(q,st,Q,j,vt.convert($t),vt.convert(Jt),bt)}finally{const It=it!==null?nt.get(it).__webglFramebuffer:null;S.bindFramebuffer($.FRAMEBUFFER,It)}}},this.readRenderTargetPixelsAsync=async function(A,q,st,Q,j,bt,Rt,St=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ct=nt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Rt!==void 0&&(Ct=Ct[Rt]),Ct)if(q>=0&&q<=A.width-Q&&st>=0&&st<=A.height-j){S.bindFramebuffer($.FRAMEBUFFER,Ct);const It=A.textures[St],$t=It.format,Jt=It.type;A.textures.length>1&&$.readBuffer($.COLOR_ATTACHMENT0+St);const Pt=Kl(It);if(Pt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Pt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ae=$.createBuffer();$.bindBuffer($.PIXEL_PACK_BUFFER,ae),$.bufferData($.PIXEL_PACK_BUFFER,bt.byteLength,$.STREAM_READ),$.readPixels(q,st,Q,j,vt.convert($t),vt.convert(Jt),0),$.bindBuffer($.PIXEL_PACK_BUFFER,null);const Ae=it!==null?nt.get(it).__webglFramebuffer:null;S.bindFramebuffer($.FRAMEBUFFER,Ae);const xe=$.fenceSync($.SYNC_GPU_COMMANDS_COMPLETE,0);return $.flush(),await kf($,xe,4),$.bindBuffer($.PIXEL_PACK_BUFFER,ae),$.getBufferSubData($.PIXEL_PACK_BUFFER,0,bt),$.bindBuffer($.PIXEL_PACK_BUFFER,null),$.deleteBuffer(ae),$.deleteSync(xe),bt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,q=null,st=0){const Q=Math.pow(2,-st),j=Math.floor(A.image.width*Q),bt=Math.floor(A.image.height*Q),Rt=q!==null?q.x:0,St=q!==null?q.y:0;ot.setTexture2D(A,0),$.copyTexSubImage2D($.TEXTURE_2D,st,0,0,Rt,St,j,bt),S.unbindTexture()},this.copyTextureToTexture=function(A,q,st=null,Q=null,j=0,bt=0){let Rt,St,Ct,It,$t,Jt,Pt,ae,Ae;const xe=A.isCompressedTexture?A.mipmaps[bt]:A.image;if(st!==null)Rt=st.max.x-st.min.x,St=st.max.y-st.min.y,Ct=st.isBox3?st.max.z-st.min.z:1,It=st.min.x,$t=st.min.y,Jt=st.isBox3?st.min.z:0;else{const be=Math.pow(2,-j);Rt=Math.floor(xe.width*be),St=Math.floor(xe.height*be),A.isDataArrayTexture?Ct=xe.depth:A.isData3DTexture?Ct=Math.floor(xe.depth*be):Ct=1,It=0,$t=0,Jt=0}Q!==null?(Pt=Q.x,ae=Q.y,Ae=Q.z):(Pt=0,ae=0,Ae=0);const de=vt.convert(q.format),We=vt.convert(q.type);let At;q.isData3DTexture?(ot.setTexture3D(q,0),At=$.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(ot.setTexture2DArray(q,0),At=$.TEXTURE_2D_ARRAY):(ot.setTexture2D(q,0),At=$.TEXTURE_2D),S.activeTexture($.TEXTURE0),S.pixelStorei($.UNPACK_FLIP_Y_WEBGL,q.flipY),S.pixelStorei($.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),S.pixelStorei($.UNPACK_ALIGNMENT,q.unpackAlignment);const Ye=S.getParameter($.UNPACK_ROW_LENGTH),se=S.getParameter($.UNPACK_IMAGE_HEIGHT),un=S.getParameter($.UNPACK_SKIP_PIXELS),An=S.getParameter($.UNPACK_SKIP_ROWS),si=S.getParameter($.UNPACK_SKIP_IMAGES);S.pixelStorei($.UNPACK_ROW_LENGTH,xe.width),S.pixelStorei($.UNPACK_IMAGE_HEIGHT,xe.height),S.pixelStorei($.UNPACK_SKIP_PIXELS,It),S.pixelStorei($.UNPACK_SKIP_ROWS,$t),S.pixelStorei($.UNPACK_SKIP_IMAGES,Jt);const Fi=A.isDataArrayTexture||A.isData3DTexture,fe=q.isDataArrayTexture||q.isData3DTexture;if(A.isDepthTexture){const be=nt.get(A),ri=nt.get(q),me=nt.get(be.__renderTarget),oi=nt.get(ri.__renderTarget);S.bindFramebuffer($.READ_FRAMEBUFFER,me.__webglFramebuffer),S.bindFramebuffer($.DRAW_FRAMEBUFFER,oi.__webglFramebuffer);for(let zi=0;zi<Ct;zi++)Fi&&($.framebufferTextureLayer($.READ_FRAMEBUFFER,$.COLOR_ATTACHMENT0,nt.get(A).__webglTexture,j,Jt+zi),$.framebufferTextureLayer($.DRAW_FRAMEBUFFER,$.COLOR_ATTACHMENT0,nt.get(q).__webglTexture,bt,Ae+zi)),$.blitFramebuffer(It,$t,Rt,St,Pt,ae,Rt,St,$.DEPTH_BUFFER_BIT,$.NEAREST);S.bindFramebuffer($.READ_FRAMEBUFFER,null),S.bindFramebuffer($.DRAW_FRAMEBUFFER,null)}else if(j!==0||A.isRenderTargetTexture||nt.has(A)){const be=nt.get(A),ri=nt.get(q);S.bindFramebuffer($.READ_FRAMEBUFFER,B),S.bindFramebuffer($.DRAW_FRAMEBUFFER,H);for(let me=0;me<Ct;me++)Fi?$.framebufferTextureLayer($.READ_FRAMEBUFFER,$.COLOR_ATTACHMENT0,be.__webglTexture,j,Jt+me):$.framebufferTexture2D($.READ_FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_2D,be.__webglTexture,j),fe?$.framebufferTextureLayer($.DRAW_FRAMEBUFFER,$.COLOR_ATTACHMENT0,ri.__webglTexture,bt,Ae+me):$.framebufferTexture2D($.DRAW_FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_2D,ri.__webglTexture,bt),j!==0?$.blitFramebuffer(It,$t,Rt,St,Pt,ae,Rt,St,$.COLOR_BUFFER_BIT,$.NEAREST):fe?$.copyTexSubImage3D(At,bt,Pt,ae,Ae+me,It,$t,Rt,St):$.copyTexSubImage2D(At,bt,Pt,ae,It,$t,Rt,St);S.bindFramebuffer($.READ_FRAMEBUFFER,null),S.bindFramebuffer($.DRAW_FRAMEBUFFER,null)}else fe?A.isDataTexture||A.isData3DTexture?$.texSubImage3D(At,bt,Pt,ae,Ae,Rt,St,Ct,de,We,xe.data):q.isCompressedArrayTexture?$.compressedTexSubImage3D(At,bt,Pt,ae,Ae,Rt,St,Ct,de,xe.data):$.texSubImage3D(At,bt,Pt,ae,Ae,Rt,St,Ct,de,We,xe):A.isDataTexture?$.texSubImage2D($.TEXTURE_2D,bt,Pt,ae,Rt,St,de,We,xe.data):A.isCompressedTexture?$.compressedTexSubImage2D($.TEXTURE_2D,bt,Pt,ae,xe.width,xe.height,de,xe.data):$.texSubImage2D($.TEXTURE_2D,bt,Pt,ae,Rt,St,de,We,xe);S.pixelStorei($.UNPACK_ROW_LENGTH,Ye),S.pixelStorei($.UNPACK_IMAGE_HEIGHT,se),S.pixelStorei($.UNPACK_SKIP_PIXELS,un),S.pixelStorei($.UNPACK_SKIP_ROWS,An),S.pixelStorei($.UNPACK_SKIP_IMAGES,si),bt===0&&q.generateMipmaps&&$.generateMipmap(At),S.unbindTexture()},this.initRenderTarget=function(A){nt.get(A).__webglFramebuffer===void 0&&ot.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?ot.setTextureCube(A,0):A.isData3DTexture?ot.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?ot.setTexture2DArray(A,0):ot.setTexture2D(A,0),S.unbindTexture()},this.resetState=function(){K=0,V=0,it=null,S.reset(),Et.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Un}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=ee._getDrawingBufferColorSpace(t),e.unpackColorSpace=ee._getUnpackColorSpace()}}const bu="#f7f7f7",io=.0254,wu={canvas:.038,panel:.022,paper:.012,digital:.012};async function $x(){const s={},t=async r=>{const o=await fetch(`data/${r}.json?${Date.now()}`,{cache:"no-store"});if(!o.ok)throw new Error(`data/${r}.json: ${o.status}`);return s[r]=o.headers.get("x-rev")??"",o.json()},[e,n,i]=await Promise.all([t("catalogue"),t("layout"),t("images")]);return{catalogue:e,layout:n,images:i,revs:s}}const Kx=(s,t)=>`${s}:${t}`,na=(s,t,e)=>s.paint[Kx(t,e)]??s.defaultPaint;function so(s){if(s.guess)return"";const t=e=>{const n=Math.floor(e+1e-6),i=e-n,r=Math.round(i*8);return r===0?`${n}`:r===8?`${n+1}`:`${n||""}${{1:"⅛",2:"¼",3:"⅜",4:"½",5:"⅝",6:"¾",7:"⅞"}[r]}`};return`${t(s.w)}″ × ${t(s.h)}″`}const ro=s=>s.title.trim()||"Untitled",rh=.004;function Zx(s){const t=s.outline,e=t.t,n=[{id:"N",outer:!0,axis:"x",t:e,rect:{x0:t.x0-e,x1:t.x1+e,z0:t.z0-e,z1:t.z0},a0:t.x0,a1:t.x1,sides:[1]},{id:"S",outer:!0,axis:"x",t:e,rect:{x0:t.x0-e,x1:t.x1+e,z0:t.z1,z1:t.z1+e},a0:t.x0,a1:t.x1,sides:[-1]},{id:"W",outer:!0,axis:"z",t:e,rect:{x0:t.x0-e,x1:t.x0,z0:t.z0,z1:t.z1},a0:t.z0,a1:t.z1,sides:[1]},{id:"E",outer:!0,axis:"z",t:e,rect:{x0:t.x1,x1:t.x1+e,z0:t.z0,z1:t.z1},a0:t.z0,a1:t.z1,sides:[-1]}];for(const i of s.walls)if(Math.abs(i.z1-i.z0)<1e-6){const o=Math.min(i.x0,i.x1),a=Math.max(i.x0,i.x1);n.push({id:i.id,outer:!1,axis:"x",t:i.t,rect:{x0:o,x1:a,z0:i.z0-i.t/2,z1:i.z0+i.t/2},a0:o,a1:a,sides:[1,-1]})}else{const o=Math.min(i.z0,i.z1),a=Math.max(i.z0,i.z1);n.push({id:i.id,outer:!1,axis:"z",t:i.t,rect:{x0:i.x0-i.t/2,x1:i.x0+i.t/2,z0:o,z1:a},a0:o,a1:a,sides:[1,-1]})}return n}const Jx=(s,t,e)=>t>s.x0+1e-6&&t<s.x1-1e-6&&e>s.z0+1e-6&&e<s.z1-1e-6,oh=(s,t,e,n)=>s.some(i=>i.id!==n&&Jx(i.rect,t,e));function ah(s,t,e){let n=[[s,t]];for(const[i,r]of e){const o=[];for(const[a,c]of n){if(r<=a||i>=c){o.push([a,c]);continue}i>a&&o.push([a,i]),r<c&&o.push([r,c])}n=o}return n.filter(([i,r])=>r-i>.05)}function Qx(s){var d;const t=Zx(s),e=s.outline,n={x0:e.x0,x1:e.x1,z0:e.z0,z1:e.z1},i=s.ceiling,r=s.doorHeight,o={a:s.entrance.x-s.entrance.w/2,b:s.entrance.x+s.entrance.w/2,z:e.z1},a=m=>{const x=s.doors.filter(p=>p.wall===m).map(p=>[Math.min(p.a,p.b),Math.max(p.a,p.b)]);return m==="S"&&x.push([o.a,o.b]),x},c=[],l=[];for(const m of t){for(const p of m.sides){const g=m.rect,b=m.axis==="x"?p>0?g.z1:g.z0:p>0?g.x1:g.x0,T=m.axis==="x"?[0,p]:[p,0],v=[T[1],-T[0]],y=[];for(const M of t){if(M===m)continue;const R=M.rect,L=m.axis==="x"?R.z0:R.x0,U=m.axis==="x"?R.z1:R.x1;if(!(p>0?L<=b+rh&&U>=b+.01:U>=b-rh&&L<=b-.01))continue;const B=m.axis==="x"?R.x0:R.z0,H=m.axis==="x"?R.x1:R.z1;y.push([B,H])}const w=m.outer?m.a0:Math.max(m.a0,m.axis==="x"?n.x0:n.z0),P=m.outer?m.a1:Math.min(m.a1,m.axis==="x"?n.x1:n.z1),_=a(m.id);for(const[M,R]of ah(w,P,y)){const L=U=>{const W=m.axis==="x"?U:b+T[0]*.02,B=m.axis==="x"?b+T[1]*.02:U;return oh(t,W,B,m.id)};c.push({key:`${m.id}:${p}:${M.toFixed(3)}`,wall:m.id,side:p,axis:m.axis,plane:b,u0:M,u1:R,n:T,right:v,cornerA:L(M-.02),cornerB:L(R+.02),freeA:!m.outer&&!L(M-.02)&&Math.abs(M-m.a0)<1e-6,freeB:!m.outer&&!L(R+.02)&&Math.abs(R-m.a1)<1e-6,outer:m.outer,t:m.t,doors:_.map(([U,W])=>[Math.max(U,M),Math.min(W,R)]).filter(([U,W])=>W-U>.01),color:((d=(s.paintAt??[]).find(U=>U.wall===m.id&&U.side===p&&U.u>=M-1e-6&&U.u<=R+1e-6))==null?void 0:d.color)??na(s,m.id,p)})}}if(m.outer)continue;const x=na(s,m.id,1);for(const p of[m.a0,m.a1]){const g=p===m.a0?-1:1,b=m.axis==="x"?p+g*.02:(m.rect.x0+m.rect.x1)/2,T=m.axis==="x"?(m.rect.z0+m.rect.z1)/2:p+g*.02;oh(t,b,T,m.id)||(m.axis==="x"?l.push(fi(p,m.rect.z0,p,m.rect.z1,[g,0,0],i,x)):l.push(fi(m.rect.x0,p,m.rect.x1,p,[0,0,g],i,x)))}for(const[p,g]of a(m.id)){const b=m.rect;m.axis==="x"?(l.push(fi(p,b.z0,p,b.z1,[1,0,0],r,x)),l.push(fi(g,b.z0,g,b.z1,[-1,0,0],r,x)),l.push(ia(p,g,b.z0,b.z1,"x",r,x))):(l.push(fi(b.x0,p,b.x1,p,[0,0,1],r,x)),l.push(fi(b.x0,g,b.x1,g,[0,0,-1],r,x)),l.push(ia(p,g,b.x0,b.x1,"z",r,x)))}}const h=.04,u=na(s,"S",-1);l.push(fi(o.a,e.z1,o.a,e.z1+h,[1,0,0],r,u)),l.push(fi(o.b,e.z1,o.b,e.z1+h,[-1,0,0],r,u)),l.push(ia(o.a,o.b,e.z1,e.z1+h,"x",r,u));const f=[];for(const m of t){const x=m.rect,p=m.axis==="x"?[x.x0,x.x1]:[x.z0,x.z1];for(const[g,b]of ah(p[0],p[1],a(m.id)))f.push(m.axis==="x"?{x0:g,x1:b,z0:x.z0,z1:x.z1}:{x0:x.x0,x1:x.x1,z0:g,z1:b})}return{inner:n,H:i,doorH:r,walls:t,faces:c,extra:l,solids:f,entrance:o,ceilColor:s.ceilingPaint??bu,ceilAt:s.ceilingAt??[]}}function fi(s,t,e,n,i,r,o){const a=e-s,c=n-t,l=a*i[2]-c*i[0],[h,u]=l>0?[[s,t],[e,n]]:[[e,n],[s,t]];return{p:[[h[0],0,h[1]],[u[0],0,u[1]],[u[0],r,u[1]],[h[0],r,h[1]]],n:i,color:o}}function ia(s,t,e,n,i,r,o){const a=(l,h)=>i==="x"?[l,r,h]:[h,r,l];return{p:i==="x"?[a(s,e),a(t,e),a(t,n),a(s,n)]:[a(s,e),a(s,n),a(t,n),a(t,e)],n:[0,-1,0],color:o}}const Mi=(s,t,e)=>s.axis==="x"?[t,e,s.plane]:[s.plane,e,t],Rl=s=>s.axis==="x"?s.right[0]:s.right[1];function Ii(s,t,e,n,i,r=0){const o=n-t,a=i-e;for(const c of s){let l=0,h=1;const u=(f,d)=>{if(Math.abs(f)<1e-12)return d>=0;const m=d/f;if(f<0){if(m>h)return!1;m>l&&(l=m)}else{if(m<l)return!1;m<h&&(h=m)}return!0};if(u(-o,t-c.x0)&&u(o,c.x1-t)&&u(-a,e-c.z0)&&u(a,c.z1-e)&&h-l>1e-4&&h>r&&l<1-r)return!0}return!1}function jx(s,t=.1){const e=s.inner,n=Math.ceil((e.x1-e.x0)/t),i=Math.ceil((e.z1-e.z0)/t),r=t/2,o=new Int32Array(n*i).fill(-2);for(const l of s.walls){const h=l.rect,u=Math.max(0,Math.floor((h.x0-r-e.x0)/t)),f=Math.min(n-1,Math.floor((h.x1+r-e.x0)/t)),d=Math.max(0,Math.floor((h.z0-r-e.z0)/t)),m=Math.min(i-1,Math.floor((h.z1+r-e.z0)/t));for(let x=d;x<=m;x++)for(let p=u;p<=f;p++)o[x*n+p]=-1}let a=0;const c=[];for(let l=0;l<n*i;l++)if(o[l]===-2){for(o[l]=a,c.push(l);c.length;){const h=c.pop(),u=h%n,f=(h-u)/n;u>0&&o[h-1]===-2&&(o[h-1]=a,c.push(h-1)),u<n-1&&o[h+1]===-2&&(o[h+1]=a,c.push(h+1)),f>0&&o[h-n]===-2&&(o[h-n]=a,c.push(h-n)),f<i-1&&o[h+n]===-2&&(o[h+n]=a,c.push(h+n))}a++}return{x0:e.x0,z0:e.z0,c:t,nx:n,nz:i,id:o,rooms:a}}function t_(s,t,e){const n=Math.floor((t-s.x0)/s.c),i=Math.floor((e-s.z0)/s.c);return n<0||i<0||n>=s.nx||i>=s.nz?-1:s.id[i*s.nx+n]}function e_(s,t){const e=new Array(t.rooms).fill(s.ceilColor);for(const n of s.ceilAt){const i=t_(t,n.x,n.z);i>=0&&(e[i]=n.color)}return e}const ls=.125,Xs=.086,lh=.12,oo=1e3,ao='"Inter Tight", "Helvetica Neue", Helvetica, Arial, sans-serif',qs=140,lo=62,Eu=46;let Ps=null;function n_(s){Ps??(Ps=document.createElement("canvas").getContext("2d")),Ps.font=`300 ${qs}px ${ao}`;const t=Ps.measureText(s.title).width;Ps.font=`400 ${lo}px ${ao}`;const e=s.sub?Ps.measureText(s.sub).width:0;return{w:(Math.max(t,e)+24)/oo,h:(qs+(s.sub?Eu+lo:0)+30)/oo}}const rl=.03,i_=.35,ch=1.1;function s_(s,t){if(s.text){const n=n_(s.text);return[n.w,n.h]}const e=t.get(s.id);return e?[e.w*io,e.h*io]:[.3,.3]}function r_(s,t){let e=null,n=1/0;for(const i of s.faces){if(i.wall!==t.wall||i.side!==t.side)continue;const r=t.u<i.u0?i.u0-t.u:t.u>i.u1?t.u-i.u1:0;r<n&&(n=r,e=i)}return e}function o_(s,t,e,n,i,r){const o=s.u0+i/2+rl,a=s.u1-i/2-rl,c=o>a?(s.u0+s.u1)/2:Math.max(o,Math.min(a,e)),l=r/2+.05,h=t-.12-r/2,u=l>h?t/2:Math.max(l,Math.min(h,n));return{u:c,y:u}}function a_(s,t,e,n,i){const r=Rl(s),o=t*r,a=r>0?s.u1:-s.u0;let c=o+n/2+lh+ls/2;c+ls/2>a-rl&&(c=o-n/2-lh-ls/2);const l=Math.max(.2+Xs/2,e-i/2+Xs/2);return{pos:Mi(s,c*r,l),w:ls,h:Xs}}function l_(s,t,e){const n=[],i=[];for(const c of s.hang){if(!c.text&&(!e.has(c.id)||e.get(c.id).off))continue;const l=r_(t,c);if(!l){n.push(c);continue}const[h,u]=s_(c,e),f=o_(l,t.H,c.u,c.y,h,u);c.u=+f.u.toFixed(4),c.y=+f.y.toFixed(4);const d=c.text?void 0:e.get(c.id);i.push({id:c.id,work:d,text:c.text,place:c,face:l,pos:Mi(l,f.u,f.y),w:h,h:u,depth:d?wu[d.kind]:.001,label:d?a_(l,f.u,f.y,h,u):null,over:!1})}const r=c=>c.face.axis==="x"?c.pos[0]:c.pos[2];for(let c=0;c<i.length;c++){const l=i[c];for(const[h,u]of l.face.doors)r(l)+l.w/2>h&&r(l)-l.w/2<u&&l.pos[1]-l.h/2<t.doorH&&(l.over=!0);for(let h=c+1;h<i.length;h++){const u=i[h];if(u.face!==l.face)continue;const f=Math.abs(r(l)-r(u))<(l.w+u.w)/2-.005,d=Math.abs(l.pos[1]-u.pos[1])<(l.h+u.h)/2-.005;f&&d&&(l.over=!0,u.over=!0)}}const o=[],a=new Map;for(const c of i)a.has(c.face)||a.set(c.face,[]),a.get(c.face).push(c);for(const[c,l]of a){const h=l.map((x,p)=>p),u=x=>h[x]===x?x:h[x]=u(h[x]);for(let x=0;x<l.length;x++)for(let p=x+1;p<l.length;p++){const g=l[x],b=l[p];if(g.text||b.text)continue;const T=Math.abs(r(g)-r(b))-(g.w+b.w)/2,v=Math.abs(g.pos[1]-b.pos[1])-(g.h+b.h)/2;Math.max(T,v)<i_&&(h[u(x)]=u(p))}const f=new Map;l.forEach((x,p)=>{const g=u(p);f.has(g)||f.set(g,[]),f.get(g).push(x)});const d=[c.n[0],0,c.n[1]],m=[c.right[0],0,c.right[1]];for(const x of f.values()){const p=Math.min(...x.map(w=>r(w)-w.w/2)),g=Math.max(...x.map(w=>r(w)+w.w/2)),b=Math.min(...x.map(w=>w.pos[1]-w.h/2)),T=Math.max(...x.map(w=>w.pos[1]+w.h/2)),v=Mi(c,(p+g)/2,(b+T)/2),y={w:g-p,h:T-b};o.push({face:c,centre:v,normal:d,right:m,w:y.w,h:y.h,items:x,lamp:c_(v,d,m,y,x,t)})}}return{placed:o,items:i,homeless:n}}function c_(s,t,e,n,i,r){const o=r.H-.03;let a=ch;for(let b=.2;b<=ch+.25;b+=.05)if(Ii(r.solids,s[0]+t[0]*.02,s[2]+t[2]*.02,s[0]+t[0]*b,s[2]+t[2]*b)){a=Math.max(.35,(b-.25)*.8);break}const c=[s[0]+t[0]*a,o,s[2]+t[2]*a],l=i.reduce((b,T)=>b+T.depth,0)/Math.max(1,i.length),h=[s[0]+t[0]*l,s[1],s[2]+t[2]*l],u=[h[0]-c[0],h[1]-c[1],h[2]-c[2]],f=Math.hypot(u[0],u[1],u[2]),d=[u[0]/f,u[1]/f,u[2]/f];let m=0;for(const[b,T]of[[-1,-1],[1,-1],[1,1],[-1,1]]){const v=[s[0]+e[0]*b*n.w/2-c[0],s[1]+T*n.h/2-c[1],s[2]+e[2]*b*n.w/2-c[2]],y=Math.hypot(v[0],v[1],v[2]);m=Math.max(m,Math.acos(Math.min(1,(v[0]*d[0]+v[1]*d[1]+v[2]*d[2])/y)))}m+=1.5*Math.PI/180;const x=m+6*Math.PI/180,p=[-u[0]/f,-u[1]/f,-u[2]/f],g=p[0]*t[0]+p[2]*t[2];return{p:c,d,cOuter:Math.cos(x),cInner:Math.cos(m),i:f*f/Math.max(.2,g)}}const h_=1.45,Tu=.07,Au=.07,Ru=.125,u_=.086,Cu=.12,f_=1.3,Pu=.16,hh=1e3,uh='"Inter Tight", "Helvetica Neue", Helvetica, Arial, sans-serif',fh=140,dh=62,d_=46,p_=1.6;let Ls=null;function Lu(s){Ls??(Ls=document.createElement("canvas").getContext("2d")),Ls.font=`300 ${fh}px ${uh}`;const t=Ls.measureText(s.title).width;Ls.font=`400 ${dh}px ${uh}`;const e=s.sub?Ls.measureText(s.sub).width:0;return{w:(Math.max(t,e)+24)/hh,h:(fh+(s.sub?d_+dh:0)+30)/hh,colW:[],colH:[]}}const m_=6400;function g_(s){return s.map(t=>({title:ro(t),detail:[t.medium,so(t),t.year].filter(Boolean).join(", ")}))}const x_=s=>(150+g_(s).reduce((t,e)=>t+92+(e.detail?58:0),0))/m_,ph=.45,mh=.25,sa=.4,gh=.12,xh=1.1,ol=s=>[s.w*io,s.h*io];function Iu(s,t){const e=[],n=[];for(const o of s){const a=o.map(c=>t.get(c)).filter(Boolean);e.push(Math.max(0,...a.map(c=>ol(c)[0]))),n.push(a.reduce((c,l)=>c+ol(l)[1],0)+Au*Math.max(0,a.length-1))}const i=e.reduce((o,a)=>o+a,0)+Tu*Math.max(0,s.length-1),r=Math.max(0,...n);return{w:i,h:r,colW:e,colH:n}}const __=s=>s.cols.reduce((t,e)=>t+e.length,0),v_=s=>__(s)>1?Pu:Ru,M_=(s,t)=>s.text?Lu(s.text).w:Iu(s.cols,t).w+Cu+v_(s);function y_(s){const t=[];let e=s.u0+(s.cornerA?ph:mh);const n=s.u1-(s.cornerB?ph:mh);for(const[i,r]of[...s.doors].sort((o,a)=>o[0]-a[0]))i-sa-e>.3&&t.push([e,i-sa]),e=Math.max(e,r+sa);return n-e>.3&&t.push([e,n]),t}function S_(s,t){let e=null,n=1/0;for(const i of s.faces){if(i.wall!==t.wall||i.side!==t.side)continue;const r=t.u<i.u0?i.u0-t.u:t.u>i.u1?t.u-i.u1:0;r<n&&(n=r,e=i)}return e}function b_(s,t,e){const n=new Map,i=[];for(const o of s.hang){if(!o.text&&(o.cols=o.cols.map(c=>c.filter(l=>e.has(l))).filter(c=>c.length),!o.cols.length))continue;const a=S_(t,o);if(!a){i.push(o);continue}n.has(a)||n.set(a,[]),n.get(a).push(o)}const r=[];for(const[o,a]of n){const c=y_(o);if(!c.length){i.push(...a);continue}const l=c.map(()=>[]);for(const u of a){let f=0,d=1/0;c.forEach(([m,x],p)=>{const g=u.u<m?m-u.u:u.u>x?u.u-x:0;g<d&&(d=g,f=p)}),l[f].push(u)}const h=Rl(o);c.forEach(([u,f],d)=>{const m=l[d].sort((w,P)=>(w.u-P.u)*h);if(!m.length)return;const x=m.map(w=>M_(w,e)),p=f-u,g=x.reduce((w,P)=>w+P,0);let b=(p-g)/(m.length+1);const T=b<gh;T&&(b=gh);const v=g+b*(m.length+1);let y=(h>0?u:-f)+(p-v)/2+b;m.forEach((w,P)=>{const _=w.text?Lu(w.text):Iu(w.cols,e),R=(y+_.w/2)*h;w.u=+R.toFixed(4),r.push(w_(w,o,R,_,e,t,T)),y+=x[P]+b})})}return{placed:r,homeless:i}}function w_(s,t,e,n,i,r,o){const a=Rl(t),c=[t.n[0],0,t.n[1]],l=[t.right[0],0,t.right[1]];let h=s.text?p_:h_;h-n.h/2<.35&&(h=.35+n.h/2),h+n.h/2>r.H-.3&&(h=Math.max(n.h/2+.1,r.H-.3-n.h/2));const u=[];let f=-n.w/2;s.cols.forEach((T,v)=>{const y=n.colW[v],w=n.colH[v];let P=h+w/2;for(const _ of T){const M=i.get(_),[R,L]=ol(M),U=f+y/2;u.push({work:M,pos:Mi(t,e+U*a,P-L/2),w:R,h:L,depth:wu[M.kind]}),P-=L+Au}f+=y+Tu});const d=s.cols.flat().map(T=>i.get(T)),m=d.length>1?Pu:Ru,x=d.length>1?x_(d):u_,p=e+(n.w/2+Cu+m/2)*a,g=Math.min(f_,h+n.h/2-x/2),b=Mi(t,e,h);return{def:s,face:t,centre:b,normal:c,right:l,w:n.w,h:n.h,items:u,label:{pos:Mi(t,p,Math.max(g,.3+x/2)),w:m,h:x,works:d},lamp:E_(b,c,l,n,u,r),over:o,text:s.text}}function E_(s,t,e,n,i,r){const o=r.H-.03;let a=xh;for(let b=.2;b<=xh+.25;b+=.05)if(Ii(r.solids,s[0]+t[0]*.02,s[2]+t[2]*.02,s[0]+t[0]*b,s[2]+t[2]*b)){a=Math.max(.35,(b-.25)*.8);break}const c=[s[0]+t[0]*a,o,s[2]+t[2]*a],l=i.reduce((b,T)=>b+T.depth,0)/Math.max(1,i.length),h=[s[0]+t[0]*l,s[1],s[2]+t[2]*l],u=[h[0]-c[0],h[1]-c[1],h[2]-c[2]],f=Math.hypot(u[0],u[1],u[2]),d=[u[0]/f,u[1]/f,u[2]/f];let m=0;for(const[b,T]of[[-1,-1],[1,-1],[1,1],[-1,1]]){const v=[s[0]+e[0]*b*n.w/2-c[0],s[1]+T*n.h/2-c[1],s[2]+e[2]*b*n.w/2-c[2]],y=Math.hypot(v[0],v[1],v[2]);m=Math.max(m,Math.acos(Math.min(1,(v[0]*d[0]+v[1]*d[1]+v[2]*d[2])/y)))}m+=1.5*Math.PI/180;const x=m+6*Math.PI/180,p=[-u[0]/f,-u[1]/f,-u[2]/f],g=p[0]*t[0]+p[2]*t[2];return{p:c,d,cOuter:Math.cos(x),cInner:Math.cos(m),i:f*f/Math.max(.2,g)}}function T_(s,t,e){if(s.version===2||!s.hang.some(o=>"cols"in o))return!1;const{placed:n}=b_(s,t,e),i=[],r=(o,a)=>+(o.axis==="x"?a[0]:a[2]).toFixed(4);for(const o of n){const a=o.face;o.text&&i.push({id:o.def.id,wall:a.wall,side:a.side,u:r(a,o.centre),y:+o.centre[1].toFixed(4),text:o.text});for(const c of o.items)i.push({id:c.work.id,wall:a.wall,side:a.side,u:r(a,c.pos),y:+c.pos[1].toFixed(4)})}return s.hang=i,s.version=2,!0}const qn=16,os=48,Cl=new Gt(1,.965,.915),Du=.72,A_=.55,Uu=1,Pl=4,R_=.6,Nu=`
float hash12(vec2 p) { vec3 p3 = fract(vec3(p.xyx) * 0.1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
float vnoise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash12(i), hash12(i + vec2(1, 0)), u.x), mix(hash12(i + vec2(0, 1)), hash12(i + vec2(1, 1)), u.x), u.y);
}
float fbm(vec2 p) { float s = 0.0, a = 0.5; for (int k = 0; k < 4; k++) { s += a * vnoise(p); p = p * 2.03 + 17.1; a *= 0.5; } return s; }
`,Ll=`
uniform sampler2D uAO;
uniform sampler2D uLT;
uniform vec2 uBO;
uniform vec4 uAoXf;
uniform vec4 uLtXf;
vec2 bakeUv(vec2 xz, vec4 xf) { return (xz - uBO) * xf.xy + xf.zw; }
float bakedAO(vec2 xz) { return texture2D(uAO, bakeUv(xz, uAoXf)).r; }
vec3 bakedLight(vec2 xz) { return texture2D(uLT, bakeUv(xz, uLtXf)).rgb; }
float bakedSpill(vec2 xz) { return texture2D(uLT, bakeUv(xz, uLtXf)).a; }
`,Fu=`
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
`,Il=`
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
`,Dl=s=>({uAO:{value:s.ao},uLT:{value:s.light},uBO:{value:s.origin},uAoXf:{value:s.aoXf},uLtXf:{value:s.lightXf}}),zu=s=>({uCeilTex:{value:s.tex},uCeilO:{value:s.origin},uCeilS:{value:s.scale}}),Ou=`
  uniform sampler2D uCeilTex; uniform vec2 uCeilO; uniform vec2 uCeilS;
  vec3 ceilingAt(vec2 xz) { return texture2D(uCeilTex, (xz - uCeilO) * uCeilS).rgb; }
`;function _h(s,t,e,n,i){const r=(o,a,c)=>{const l=o.slice(0,a);for(;l.length<a;)l.push(c());return l};return new nn({uniforms:{uN:{value:Math.min(s.lamps.length,qn)},uLP:{value:r(s.lamps.map(o=>o.p),qn,()=>new N)},uLD:{value:r(s.lamps.map(o=>o.d),qn,()=>new N(0,-1,0))},uLC:{value:r(s.lamps.map(o=>o.c),qn,()=>new kt(1,1))},uLI:{value:r(s.lamps.map(o=>o.i),qn,()=>0)},uB:{value:Math.min(s.boxes.length,os)},uBC:{value:r(s.boxes.map(o=>o.c),os,()=>new N(0,-99,0))},uBS:{value:r(s.boxes.map(o=>o.s),os,()=>new N)},uBL:{value:r(s.boxes.map(o=>o.lamp),os,()=>0)},uFN:{value:s.normal},uFR:{value:s.right},uAxisX:{value:s.axisX?1:0},uU0:{value:s.u0},uU1:{value:s.u1},uCA:{value:s.cornerA?1:0},uCB:{value:s.cornerB?1:0},uH:{value:e},uAlb:{value:t},uAmb:{value:Du},uBounceK:{value:Pl},uLampK:{value:A_},uCeilK:{value:Uu},...zu(i),uLCol:{value:Cl},...Dl(n)},vertexShader:Fu,fragmentShader:`
      #define MAXL ${qn}
      #define MAXB ${os}
      uniform int uN;
      uniform vec3 uLP[MAXL]; uniform vec3 uLD[MAXL]; uniform vec2 uLC[MAXL]; uniform float uLI[MAXL];
      uniform int uB;
      uniform vec3 uBC[MAXB]; uniform vec3 uBS[MAXB]; uniform float uBL[MAXB];
      uniform vec3 uFN; uniform vec3 uFR;
      uniform float uAxisX, uU0, uU1, uCA, uCB, uH;
      uniform vec3 uAlb; uniform float uAmb; uniform float uBounceK; uniform float uLampK; uniform float uCeilK; uniform vec3 uLCol;
      varying vec3 vW; varying vec3 vN; varying vec2 vUv;
      ${Ou}
      ${Ll}
      ${Nu}
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
        ${Il}
      }`})}function C_(s,t){return new nn({uniforms:{uAmb:{value:Uu},uBounceK:{value:Pl},...zu(t),...Dl(s)},vertexShader:Fu,fragmentShader:`
      uniform float uAmb; uniform float uBounceK;
      varying vec3 vW; varying vec3 vN; varying vec2 vUv;
      ${Ll}
      ${Ou}
      void main() {
        float ao = mix(1.0, bakedAO(vW.xz), 0.3);
        vec3 l = vec3(uAmb) * ao + uBounceK * 0.5 * bakedLight(vW.xz) * ao;
        gl_FragColor = vec4(ceilingAt(vW.xz) * l, 1.0);
        ${Il}
      }`})}function P_(s,t,e){return new nn({uniforms:{uRefl:{value:s},uTexMat:{value:t},uAmb:{value:Du},uBounceK:{value:Pl},uSpillK:{value:R_},...Dl(e)},vertexShader:`
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
      ${Ll}
      ${Nu}
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
        ${Il}
      }`})}function vh(s,t,e){return new nn({uniforms:{uMap:{value:s},uLP:{value:t.p},uLD:{value:t.d},uLC:{value:t.c},uLI:{value:t.i},uSide:{value:e??new Gt(1,1,1)},uSideMode:{value:e?1:0},uLCol:{value:Cl}},toneMapped:!1,vertexShader:`
      attribute float aSide;
      varying vec3 vW; varying vec3 vN; varying vec2 vUv; varying float vSide;
      void main() {
        vec4 w = modelMatrix * vec4(position, 1.0);
        vW = w.xyz; vN = normalize(mat3(modelMatrix) * normal); vUv = uv; vSide = aSide;
        gl_Position = projectionMatrix * viewMatrix * w;
      }`,fragmentShader:`
      uniform sampler2D uMap;
      uniform vec3 uLP; uniform vec3 uLD; uniform vec2 uLC; uniform float uLI;
      uniform vec3 uSide; uniform float uSideMode; uniform vec3 uLCol;
      varying vec3 vW; varying vec3 vN; varying vec2 vUv; varying float vSide;
      void main() {
        vec3 n = normalize(vN);
        vec3 L = uLP - vW;
        float d2 = dot(L, L);
        vec3 l = L * inversesqrt(d2);
        float spot = smoothstep(uLC.x, uLC.y, dot(-l, uLD));
        float e = uLI * spot * max(dot(n, l), 0.0) / d2;
        vec3 c = texture2D(uMap, vUv).rgb;
        if (vSide > 0.5 && uSideMode > 0.5) c = uSide;
        // light on the front is ~1 at the centre; mix a touch of the lamp's warmth in
        vec3 lit = c * (0.07 + 0.95 * e * mix(vec3(1.0), uLCol, 0.35));
        gl_FragColor = vec4(lit, 1.0);
        #include <colorspace_fragment>
      }`})}const Is=.05,Ds=.2;function L_(s,t,e){const n=s.inner,i=n.x1-n.x0,r=n.z1-n.z0,o=Math.ceil(i/Is)+1,a=Math.ceil(r/Is)+1,c=new Uint8Array(o*a),l=s.solids;for(let T=0;T<a;T++){const v=n.z0+T*Is;for(let y=0;y<o;y++){const w=n.x0+y*Is;let P=1;for(const _ of l){const M=Math.max(_.x0-w,0,w-_.x1),R=Math.max(_.z0-v,0,v-_.z1),L=M*M+R*R;L>1.44||(P*=1-.42*Math.exp(-Math.sqrt(L)/.28))}c[T*o+y]=Math.round(Math.max(0,Math.min(1,P))*255)}}const h=Math.ceil(i/Ds)+1,u=Math.ceil(r/Ds)+1,f=new Float32Array(h*u*4),d=Cl,m=t.map(T=>{const v=new Gt(T.face.color),w=(T.w+.5)*(T.h+1)*.7*.55;return{c:[T.centre[0]+T.normal[0]*.05,1.2,T.centre[2]+T.normal[2]*.05],n:T.normal,rgb:[v.r*d.r*w,v.g*d.g*w,v.b*d.b*w],lamp:T.lamp}});for(let T=0;T<u;T++){const v=n.z0+T*Ds;for(let y=0;y<h;y++){const w=n.x0+y*Ds;let P=0,_=0,M=0,R=0;for(const U of m){const W=w-U.c[0],B=v-U.c[2],H=W*W+B*B;if(H>64)continue;const K=W*U.n[0]+B*U.n[2];if(K>.02){const X=Math.max(H+U.c[1]*U.c[1],.3),F=Math.sqrt(X),z=K/F*(U.c[1]/F)/(Math.PI*X);z>5e-4&&!Ii(s.solids,U.c[0],U.c[2],w,v)&&(P+=U.rgb[0]*z,_+=U.rgb[1]*z,M+=U.rgb[2]*z)}const V=U.lamp,it=w-V.p[0],G=-V.p[1],et=v-V.p[2],rt=it*it+G*G+et*et,ft=Math.sqrt(rt),O=(it*V.d[0]+G*V.d[1]+et*V.d[2])/ft;if(O>V.cOuter){const X=Math.min(1,(O-V.cOuter)/(V.cInner-V.cOuter)),F=X*X*(3-2*X),z=V.i*F*(V.p[1]/ft)/rt;z>.002&&!Ii(s.solids,V.p[0],V.p[2],w,v)&&(R+=z)}}const L=(T*h+y)*4;f[L]=P,f[L+1]=_,f[L+2]=M,f[L+3]=R}}e==null||e.ao.dispose(),e==null||e.light.dispose();const x=new ps(c,o,a,mo,tn);x.magFilter=x.minFilter=ke,x.needsUpdate=!0;const p=new Uint16Array(f.length);for(let T=0;T<f.length;T++)p[T]=vd.toHalfFloat(f[T]);const g=new ps(p,h,u,hn,_n);g.magFilter=g.minFilter=ke,g.needsUpdate=!0;const b=(T,v,y)=>new ge(1/(T*v),1/(T*y),.5/v,.5/y);return{ao:x,light:g,origin:new kt(n.x0,n.z0),aoXf:b(Is,o,a),lightXf:b(Ds,h,u)}}const ze=.15,He=8,Yn=(s,t)=>[s[0]+t[0],s[1]+t[1],s[2]+t[2]],Gn=(s,t)=>[s[0]*t,s[1]*t,s[2]*t],Dr=(s,t)=>[s[0]-t[0],s[1]-t[1],s[2]-t[2]],Mh=(s,t)=>[s[1]*t[2]-s[2]*t[1],s[2]*t[0]-s[0]*t[2],s[0]*t[1]-s[1]*t[0]],yh=(s,t)=>s[0]*t[0]+s[1]*t[1]+s[2]*t[2],I_=[0,1,0];class ku{constructor(){I(this,"pos",[]);I(this,"nor",[]);I(this,"idx",[])}v(t,e){return this.pos.push(t[0],t[1],t[2]),this.nor.push(e[0],e[1],e[2]),this.pos.length/3-1}quad(t,e){const n=t.map((o,a)=>this.v(o,e[a])),i=Mh(Dr(t[2],t[0]),Dr(t[3],t[1])),r=Yn(Yn(e[0],e[1]),Yn(e[2],e[3]));yh(i,r)>=0?this.idx.push(n[0],n[1],n[2],n[0],n[2],n[3]):this.idx.push(n[0],n[2],n[1],n[0],n[3],n[2])}tri(t,e){const n=t.map(i=>this.v(i,e));yh(Mh(Dr(t[1],t[0]),Dr(t[2],t[0])),e)>=0?this.idx.push(n[0],n[1],n[2]):this.idx.push(n[0],n[2],n[1])}get empty(){return this.idx.length===0}geometry(){const t=new Be;return t.setAttribute("position",new ue(this.pos,3)),t.setAttribute("normal",new ue(this.nor,3)),t.setAttribute("uv",new ue(new Array(this.pos.length/3*2).fill(0),2)),t.setIndex(this.idx),t}}const Bu=(s,t)=>s?ze:Math.max(0,Math.min(ze,t/2-.002));function D_(s,t,e){const n=new ku,i=[s.n[0],0,s.n[1]],r=s.axis==="x"?[1,0,0]:[0,0,1],o=(_,M,R)=>{const L=Mi(s,_,R);return[L[0]+i[0]*M,R,L[2]+i[2]*M]},a=Bu(s.outer,s.t),c=t-ze,l=Math.min(e,c),h=s.cornerA?"in":s.freeA?"free":"flat",u=s.cornerB?"in":s.freeB?"free":"flat",f=s.u0+(h==="in"?ze:h==="free"?a:0),d=s.u1-(u==="in"?ze:u==="free"?a:0);if(d-f<.01)return n;const m=(_,M,R,L)=>{M-_<1e-4||L-R<1e-4||n.quad([o(_,0,R),o(M,0,R),o(M,0,L),o(_,0,L)],[i,i,i,i])},x=[...s.doors].sort((_,M)=>_[0]-M[0]);if(!x.length)m(f,d,0,c);else{let _=f;for(const[M,R]of x)m(_,Math.min(d,M-a),0,l),_=Math.max(_,R+a);m(_,d,0,l),m(f,d,l,c)}const p=(_,M,R,L)=>{if(a<.01)return;const U=W=>Yn(Gn(i,Math.cos(W)),Gn(M,Math.sin(W)));for(let W=0;W<He;W++){const B=W/He*Math.PI/2,H=(W+1)/He*Math.PI/2,K=(V,it)=>Yn(o(_,-a,it),Gn(U(V),a));n.quad([K(B,R),K(H,R),K(H,L),K(B,L)],[U(B),U(H),U(H),U(B)])}},g=_=>[-_[0],-_[1],-_[2]];for(const[_,M]of x)_-s.u0>a+.01&&p(_-a,r,0,l),s.u1-M>a+.01&&p(M+a,g(r),0,l);h==="free"&&p(s.u0+a,g(r),0,t),u==="free"&&p(s.u1-a,r,0,t);const b=(_,M)=>{const R=Yn(Yn(o(_,0,0),Gn(i,ze)),Gn(M,ze)),L=W=>Yn(Gn(i,Math.cos(W)),Gn(M,Math.sin(W))),U=Math.PI/4;for(let W=0;W<He/2;W++){const B=W/(He/2)*U,H=(W+1)/(He/2)*U,K=(V,it)=>[R[0]-ze*L(V)[0],it,R[2]-ze*L(V)[2]];n.quad([K(B,0),K(H,0),K(H,c),K(B,c)],[L(B),L(H),L(H),L(B)]);for(let V=0;V<He;V++){const it=V/He*Math.PI/2,G=(V+1)/He*Math.PI/2,et=(ft,O)=>{const X=L(ft);return[R[0]-ze*Math.cos(O)*X[0],c+ze*Math.sin(O),R[2]-ze*Math.cos(O)*X[2]]},rt=(ft,O)=>{const X=L(ft);return[Math.cos(O)*X[0],-Math.sin(O),Math.cos(O)*X[2]]};n.quad([et(B,it),et(H,it),et(H,G),et(B,G)],[rt(B,it),rt(H,it),rt(H,G),rt(B,G)])}}};h==="in"&&b(s.u0,r),u==="in"&&b(s.u1,g(r));const T=h==="in"?s.u0+ze:f,v=u==="in"?s.u1-ze:d,y=(_,M)=>o(_,ze-ze*Math.cos(M),c+ze*Math.sin(M)),w=_=>Yn(Gn(i,Math.cos(_)),Gn(I_,-Math.sin(_)));for(let _=0;_<He;_++){const M=_/He*Math.PI/2,R=(_+1)/He*Math.PI/2;n.quad([y(T,M),y(v,M),y(v,R),y(T,R)],[w(M),w(M),w(R),w(R)])}const P=(_,M)=>{const R=o(_,0,t);for(let L=0;L<He;L++){const U=L/He*Math.PI/2,W=(L+1)/He*Math.PI/2;n.tri([R,y(_,U),y(_,W)],M)}};return h!=="in"&&P(T,g(r)),u!=="in"&&P(v,r),n}function U_(s,t){const e=new Map,n=a=>(e.has(a)||e.set(a,new ku),e.get(a)),i=s.H,r=Math.min(s.doorH,i-ze),o=a=>{var c,l;return((c=s.faces.find(h=>h.wall===a&&h.side===1))==null?void 0:c.color)??((l=s.faces.find(h=>h.wall===a))==null?void 0:l.color)??"#f2f1ee"};for(const a of s.walls){const c=a.id==="S";if(a.outer&&!c)continue;const l=n(o(a.id)),h=(T,v,y)=>a.axis==="x"?[T,y,v]:[v,y,T],u=a.axis==="x"?[1,0,0]:[0,0,1];a.axis;const[f,d]=a.axis==="x"?[a.rect.z0,a.rect.z1]:[a.rect.x0,a.rect.x1],m=Bu(a.outer,a.t),x=c?[{c:f,s:-1}]:[{c:f,s:-1},{c:d,s:1}],p=f+m,g=c?f+t:d-m,b=c?[[s.entrance.a,s.entrance.b]]:s.faces.filter(T=>T.wall===a.id).flatMap(T=>T.doors).filter((T,v,y)=>y.findIndex(w=>Math.abs(w[0]-T[0])<1e-6)===v);for(const[T,v]of b){const y=(_,M)=>{g-p>.001&&l.quad([h(_,p,0),h(_,g,0),h(_,g,r),h(_,p,r)],[M,M,M,M])};y(T,u),y(v,[-u[0],0,-u[2]]);const w=[0,-1,0],P=c?f+t:d;l.quad([h(T,f,r),h(v,f,r),h(v,P,r),h(T,P,r)],[w,w,w,w]);for(const{c:_,s:M}of x)for(const[R,L]of[[T,1],[v,-1]]){if(m<.01)continue;const U=R-L*m,W=_-M*m,B=h(R,_,r);for(let H=0;H<He;H++){const K=V=>{const it=V/He*Math.PI/2;return h(U+L*m*Math.sin(it),W+M*m*Math.cos(it),r)};l.tri([B,K(H),K(H+1)],w)}}}if(!a.outer)for(const T of s.faces.filter(v=>v.wall===a.id&&v.side===1)){const v=(y,w)=>{d-m-(f+m)>.001&&l.quad([h(y,f+m,0),h(y,d-m,0),h(y,d-m,i),h(y,f+m,i)],[w,w,w,w])};T.freeA&&v(T.u0,[-u[0],0,-u[2]]),T.freeB&&v(T.u1,u)}}return e}const Sh=new Gt(1,1,1),Hu=.2;function N_(s,t,e,n){const i=new Pe;s.background=Sh,s.fog=null;const r=n.outline,o=r.t-Hu,a=r.x0-r.t,c=r.x1+r.t,l=r.z0-r.t,h=r.z1+r.t,u=n.ceiling,f=n.doorHeight,d=u+1.4,m=n.entrance.x-n.entrance.w/2,x=n.entrance.x+n.entrance.w/2,p=n.entrance.x,g=new Qn({color:Sh,toneMapped:!1}),b=(_,M,R,L,U,W)=>{const B=new Ce(new xn(L,U,W),g);return B.position.set(_,M,R),B.userData.outside=!0,i.add(B),B},T=-.5,v=d,y=(T+v)/2,w=v-T;b((a+m)/2,y,h-o/2,m-a,w,o),b((x+c)/2,y,h-o/2,c-x,w,o),b(p,(f+v)/2,h-o/2,x-m,v-f,o),b((a+c)/2,y,l+o/2,c-a,w,o),b(a+o/2,y,(l+h)/2,o,w,h-l-2*o),b(c-o/2,y,(l+h)/2,o,w,h-l-2*o),b((a+c)/2,(u+v)/2+.05,(l+h)/2,c-a-.02,v-u-.1,h-l-.02);const P=new Ce(new ii(400,400).rotateX(-Math.PI/2),g);return P.position.y=-.002,i.add(P),s.add(i),{group:i,dispose(){s.remove(i),i.traverse(_=>{var L;const M=_;M.geometry&&M.geometry.dispose();const R=Array.isArray(M.material)?M.material:M.material?[M.material]:[];for(const U of R)(L=U.map)==null||L.dispose(),U.dispose()})}}}class bh{constructor(){I(this,"pos",[]);I(this,"nor",[]);I(this,"uv",[]);I(this,"idx",[])}add(t,e){const n=this.pos.length/3;for(const i of t)this.pos.push(i[0],i[1],i[2]),this.nor.push(e[0],e[1],e[2]);this.uv.push(0,0,1,0,1,1,0,1),this.idx.push(n,n+1,n+2,n,n+2,n+3)}geometry(){const t=new Be;return t.setAttribute("position",new ue(this.pos,3)),t.setAttribute("normal",new ue(this.nor,3)),t.setAttribute("uv",new ue(this.uv,2)),t.setIndex(this.idx),t}}const er=s=>new N(s[0],s[1],s[2]),Gu=s=>({p:er(s.p),d:er(s.d),c:new kt(s.cOuter,s.cInner),i:s.i});function F_(s,t,e){const n=t.filter(l=>l.face===s),i=n.map(l=>l.lamp),r=[],o=[],a=Math.min(40,Math.max(2,Math.ceil((s.u1-s.u0)/.5)));for(let l=0;l<=a;l++){const h=s.u0+(s.u1-s.u0)*l/a;for(const u of[.4,1.4,2.4])o.push(Mi(s,h,u))}for(const l of t){if(l.face===s)continue;const h=l.lamp,u=o[0];if((h.p[0]-u[0])*s.n[0]+(h.p[2]-u[2])*s.n[1]<.1)continue;let d=1/0;for(const m of o){const x=m[0]-h.p[0],p=m[1]-h.p[1],g=m[2]-h.p[2],b=Math.hypot(x,p,g);b>7||(x*h.d[0]+p*h.d[1]+g*h.d[2])/b<=h.cOuter||Ii(e.solids,h.p[0],h.p[2],m[0]+s.n[0]*.03,m[2]+s.n[1]*.03)||(d=Math.min(d,b))}d<1/0&&r.push({L:h,d})}r.sort((l,h)=>l.d-h.d);for(const l of r){if(i.length>=qn)break;i.push(l.L)}const c=[];return n.forEach((l,h)=>{if(!(h>=qn))for(const u of l.items)c.length>=os||u.text||c.push({c:er(u.pos),s:new N(u.w/2,u.h/2,u.depth),lamp:h})}),{lamps:i.slice(0,qn).map(Gu),boxes:c,normal:new N(s.n[0],0,s.n[1]),right:new N(s.right[0],0,s.right[1]),axisX:s.axis==="x",u0:s.u0,u1:s.u1,cornerA:s.cornerA,cornerB:s.cornerB}}const z_={lamps:[],boxes:[],normal:new N(0,0,1),right:new N(1,0,0),axisX:!0,u0:0,u1:0,cornerA:!1,cornerB:!1};function wh(s,t,e,n=[0,1,0,1]){const[i,r,o,a]=n,c=[],l=[],h=[],u=[],f=[],d=(w,P,_,M)=>{const R=c.length/3;w.forEach((L,U)=>{c.push(...L),l.push(...P),h.push(..._[U]),u.push(M)}),f.push(R,R+1,R+2,R,R+2,R+3)},m=s/2,x=t/2,p=.004,g=i+p,b=r-p,T=o+p,v=a-p;d([[-m,-x,e],[m,-x,e],[m,x,e],[-m,x,e]],[0,0,1],[[i,o],[r,o],[r,a],[i,a]],0),d([[-m,x,e],[m,x,e],[m,x,0],[-m,x,0]],[0,1,0],[[i,v],[r,v],[r,v],[i,v]],1),d([[-m,-x,0],[m,-x,0],[m,-x,e],[-m,-x,e]],[0,-1,0],[[i,T],[r,T],[r,T],[i,T]],1),d([[-m,-x,0],[-m,-x,e],[-m,x,e],[-m,x,0]],[-1,0,0],[[g,o],[g,o],[g,a],[g,a]],1),d([[m,-x,e],[m,-x,0],[m,x,0],[m,x,e]],[1,0,0],[[b,o],[b,o],[b,a],[b,a]],1);const y=new Be;return y.setAttribute("position",new ue(c,3)),y.setAttribute("normal",new ue(l,3)),y.setAttribute("uv",new ue(h,2)),y.setAttribute("aSide",new ue(u,1)),y.setIndex(f),y}function O_(s,t,e,n){const[i,r,o,a]=n??[0,0,1,1];let c=i,l=o,h=1-a,u=1-r;if(!e)return[c,l,h,u];const f=s/t,d=e[0]*(o-i)/(e[1]*(a-r));if(d>f){const m=f/d,x=(c+l)/2,p=(l-c)*m/2;c=x-p,l=x+p}else{const m=d/f,x=(h+u)/2,p=(u-h)*m/2;h=x-p,u=x+p}return[c,l,h,u]}const ra=(s,t,e,n)=>{const i=new ne().makeBasis(er(e),new N(0,1,0),er(t));s.quaternion.setFromRotationMatrix(i),s.position.set(n[0],n[1],n[2])};class k_{constructor(t,e){I(this,"map",new Map);I(this,"used",new Set);this.font=t,this.aniso=e}begin(){this.used.clear()}end(){for(const[t,e]of this.map)this.used.has(t)||(e.dispose(),this.map.delete(t))}single(t){const e=`1|${ro(t)}|${t.medium}|${so(t)}|${t.year}`;return this.get(e,()=>{const i=Math.round(1024*Xs/ls),r=Vu(1024,i),o=r.getContext("2d");o.fillStyle="#f6f5f1",o.fillRect(0,0,1024,i),o.fillStyle="#121212";const a=70;let c=160;const l=[[`italic 500 84px ${this.font}`,ro(t)]];for(const h of[t.medium,so(t),t.year])h&&l.push([`400 62px ${this.font}`,h]);for(const[h,u]of l)o.font=h,c=B_(o,u,a,c,1024-2*a,h.startsWith("italic")?92:74),c+=h.startsWith("italic")?20:8;return r})}get(t,e){this.used.add(t);let n=this.map.get(t);return n||(n=new Tl(e()),n.colorSpace=Le,n.anisotropy=this.aniso,this.map.set(t,n)),n}}const Vu=(s,t)=>{const e=document.createElement("canvas");return e.width=s,e.height=t,e};function B_(s,t,e,n,i,r){let o="";for(const a of t.split(" ")){const c=o?o+" "+a:a;s.measureText(c).width>i&&o?(s.fillText(o,e,n),n+=r,o=a):o=c}return s.fillText(o,e,n),n+r}const H_=s=>{const t=new Gt(s);return .2126*t.r+.7152*t.g+.0722*t.b<.12};function G_(s,t,e,n){const i=Vu(Math.ceil(t*oo),Math.ceil(e*oo)),r=i.getContext("2d");r.fillStyle=H_(n)?"#eeede8":"#262625",r.textBaseline="alphabetic",r.font=`300 ${qs}px ${ao}`,r.fillText(s.title,8,qs*.8),s.sub&&(r.font=`400 ${lo}px ${ao}`,r.fillText(s.sub,10,qs+Eu+lo*.8));const o=new Tl(i);return o.colorSpace=Le,o.anisotropy=8,o}function V_(s){const t=jx(s),e=e_(s,t).map(l=>new Gt(l)),n=Int32Array.from(t.id),i=t.nx*t.nz;let r=[];for(let l=0;l<i;l++)n[l]>=0&&r.push(l);for(;r.length;){const l=[];for(const h of r){const u=h%t.nx;for(const f of[u>0?h-1:-1,u<t.nx-1?h+1:-1,h-t.nx,h+t.nx])f>=0&&f<i&&n[f]<0&&(n[f]=n[h],l.push(f))}r=l}const o=new Uint8Array(i*4),a=new Gt(bu);for(let l=0;l<i;l++){const h=e[n[l]]??a;o[l*4]=Math.round(h.r*255),o[l*4+1]=Math.round(h.g*255),o[l*4+2]=Math.round(h.b*255),o[l*4+3]=255}const c=new ps(o,t.nx,t.nz,hn);return c.magFilter=c.minFilter=Oe,c.needsUpdate=!0,{tex:c,origin:new kt(t.x0,t.z0),scale:new kt(1/(t.nx*t.c),1/(t.nz*t.c))}}function W_(s,t,e,n,i,r,o,a){const c=new Pe,l=s.H,h=V_(s),u=[],f=[],d=[h.tex],m=(_,M)=>{f.push(_),u.push(M);const R=new Ce(_,M);return c.add(R),R},x=[];for(const _ of s.faces){const M=D_(_,l,s.doorH);if(M.empty)continue;const R=m(M.geometry(),_h(F_(_,t,s),new Gt(_.color),l,e,h));R.userData.face=_,x.push(R)}for(const[_,M]of U_(s,Hu))M.empty||m(M.geometry(),_h(z_,new Gt(_),l,e,h));const p=s.inner,g=s.entrance,b=new bh;b.add([[p.x0,0,p.z1],[p.x1,0,p.z1],[p.x1,0,p.z0],[p.x0,0,p.z0]],[0,1,0]),b.add([[g.a,0,g.z+.4],[g.b,0,g.z+.4],[g.b,0,g.z],[g.a,0,g.z]],[0,1,0]),m(b.geometry(),P_(o,a,e)).layers.set(1);const v=new bh;v.add([[p.x0,l,p.z0],[p.x1,l,p.z0],[p.x1,l,p.z1],[p.x0,l,p.z1]],[0,-1,0]),m(v.geometry(),C_(e,h));const y=t.length;if(y){const _=new Ws(.068,28).rotateX(Math.PI/2).translate(0,l-.0015,0),M=new Ws(.05,24).rotateX(Math.PI/2).translate(0,l-.0025,0),R=new Ws(.026,20).rotateX(Math.PI/2).translate(0,l-.0035,0),L=new Qn({color:14276820,toneMapped:!1}),U=new Qn({color:11842479,toneMapped:!1}),W=new Qn({color:16777215,toneMapped:!1});f.push(_,M,R),u.push(L,U,W);const B=new Xr(_,L,y),H=new Xr(M,U,y),K=new Xr(R,W,y),V=new ne;t.forEach((it,G)=>{V.makeTranslation(it.lamp.p[0],0,it.lamp.p[2]),B.setMatrixAt(G,V),H.setMatrixAt(G,V),K.setMatrixAt(G,V)}),c.add(B,H,K)}const w=[],P=[];r.begin();for(const _ of t){const M=Gu(_.lamp);for(const R of _.items){if(R.text){const K=G_(R.text,R.w,R.h,R.face.color);d.push(K);const V=m(new ii(R.w,R.h),new Qn({map:K,transparent:!0,depthWrite:!1,toneMapped:!1}));ra(V,_.normal,_.right,[R.pos[0]+_.normal[0]*.002,R.pos[1],R.pos[2]+_.normal[2]*.002]),V.userData.title=R.id;continue}const L=R.work,U=L.kind==="paper"||L.kind==="digital"?new Gt().setRGB(.92,.91,.88):null,W=vh(n(L.id),M,U),B=m(wh(R.w,R.h,R.depth,O_(R.w,R.h,i(L.id),L.crop)),W);ra(B,_.normal,_.right,R.pos),B.userData.work=L.id;const H={work:L,placed:_,mesh:B,mat:W,w:R.w,h:R.h,label:null};if(w.push(H),R.label){const K=m(wh(ls,Xs,.003),vh(r.single(L),M,new Gt(.95,.95,.93)));ra(K,_.normal,_.right,R.label.pos),K.userData.work=L.id,K.userData.label=!0,P.push(K),H.label=K}}}return r.end(),{group:c,pictures:w,labels:P,faceMeshes:x,dispose(){for(const _ of f)_.dispose();for(const _ of u)_.dispose();for(const _ of d)_.dispose();c.traverse(_=>{const M=_;M.isInstancedMesh&&M.dispose()})}}}const Ys=class Ys{constructor(t,e,n,i,r,o){I(this,"cat",new Map);I(this,"arch");I(this,"placed",[]);I(this,"items",[]);I(this,"migrated",!1);I(this,"interior",null);I(this,"outside",null);I(this,"sharp",new Map);I(this,"small",new Map);I(this,"baked");I(this,"labels");I(this,"outsideKey","");I(this,"blank",new ps(new Uint8Array([128,128,128,255]),1,1));I(this,"onRebuilt",()=>{});I(this,"prepTex",t=>(t.colorSpace=Le,t.anisotropy=this.aniso,t.minFilter=vi,t));I(this,"texture",t=>this.sharp.get(t)??this.small.get(t)??this.blank);I(this,"px",t=>this.data.images[t]);this.data=t,this.scene=e,this.renderer=n,this.mirror=i,this.font=r,this.aniso=o,this.labels=new k_(r,o),this.blank.needsUpdate=!0}async loadSmall(){const t=new tl;await Promise.all(this.data.catalogue.map(e=>t.loadAsync(Ys.url(e.id,"s")).then(n=>{this.small.set(e.id,this.prepTex(n))}).catch(()=>{})))}async loadOne(t){const e=await new tl().loadAsync(`${Ys.url(t,"s")}?${Date.now()}`);this.small.set(t,this.prepTex(e))}rebuild(){var a;const t=this.data.layout;this.cat=new Map(this.data.catalogue.map(c=>[c.id,c])),this.arch=Qx(t),T_(t,this.arch,this.cat)&&(this.migrated=!0);const{placed:e,items:n,homeless:i}=l_(t,this.arch,this.cat);i.length&&(t.hang=t.hang.filter(c=>!i.includes(c))),this.placed=e,this.items=n,this.baked=L_(this.arch,e,this.baked);const r=this.interior;this.interior=W_(this.arch,e,this.baked,this.texture,this.px,this.labels,this.mirror.target.texture,this.mirror.texMat),this.scene.add(this.interior.group),r&&(this.scene.remove(r.group),r.dispose());const o=JSON.stringify([t.outline,t.entrance,t.ceiling,t.doorHeight]);o!==this.outsideKey&&((a=this.outside)==null||a.dispose(),this.outside=N_(this.scene,this.font,this.aniso,t),this.outsideKey=o),this.onRebuilt(i)}hung(){return new Set(this.data.layout.hang.filter(t=>!t.text).map(t=>t.id))}storage(){const t=this.hung();return this.data.catalogue.filter(e=>!t.has(e.id)&&!e.off)}placementOf(t){return this.data.layout.hang.find(e=>e.id===t)}};I(Ys,"url",(t,e)=>`art/${t}-${e}.jpg`);let cs=Ys;class X_{constructor(t,e){I(this,"target");I(this,"texMat",new ne);I(this,"cam",new je);I(this,"plane",new Xn);I(this,"clip",new ge);I(this,"q",new ge);I(this,"n",new N(0,1,0));I(this,"p0",new N(0,0,0));I(this,"camPos",new N);I(this,"rot",new ne);I(this,"look",new N);I(this,"view",new N);I(this,"tgt",new N);this.target=new mn(t,e,{type:_n,depthBuffer:!0}),this.target.texture.generateMipmaps=!1,this.cam.layers.set(0)}setSize(t,e){this.target.setSize(Math.max(2,t),Math.max(2,e))}render(t,e,n){if(this.camPos.setFromMatrixPosition(n.matrixWorld),this.view.subVectors(this.p0,this.camPos),this.view.dot(this.n)>0)return;this.view.reflect(this.n).negate().add(this.p0),this.rot.extractRotation(n.matrixWorld),this.look.set(0,0,-1).applyMatrix4(this.rot).add(this.camPos),this.tgt.subVectors(this.p0,this.look).reflect(this.n).negate().add(this.p0);const i=this.cam;i.position.copy(this.view),i.up.set(0,1,0).applyMatrix4(this.rot).reflect(this.n),i.lookAt(this.tgt),i.far=n.far,i.near=n.near,i.updateMatrixWorld(),i.projectionMatrix.copy(n.projectionMatrix),this.texMat.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),this.texMat.multiply(i.projectionMatrix).multiply(i.matrixWorldInverse),this.plane.setFromNormalAndCoplanarPoint(this.n,this.p0).applyMatrix4(i.matrixWorldInverse),this.clip.set(this.plane.normal.x,this.plane.normal.y,this.plane.normal.z,this.plane.constant);const r=i.projectionMatrix.elements;this.q.x=(Math.sign(this.clip.x)+r[8])/r[0],this.q.y=(Math.sign(this.clip.y)+r[9])/r[5],this.q.z=-1,this.q.w=(1+r[10])/r[14],this.clip.multiplyScalar(2/this.clip.dot(this.q)),r[2]=this.clip.x,r[6]=this.clip.y,r[10]=this.clip.z+1-.003,r[14]=this.clip.w;const o=t.getRenderTarget();t.setRenderTarget(this.target),t.clear(),t.render(e,i),t.setRenderTarget(o)}}const al=1.62,q_=12,Y_=6.5,$_=2,K_=1.7,is=1.15,Eh=.0022,Z_=2.6,J_=4.6,on=.3;class Q_{constructor(t){I(this,"pos",new N(6.6,al,10.2));I(this,"vel",new N);I(this,"yaw",Math.atan2(6.6-4.2,10.2-.4));I(this,"pitch",.05);I(this,"yawVel",0);I(this,"pitchVel",0);I(this,"keys",new Set);I(this,"taps",new Map);I(this,"frozen",!1);I(this,"moved",!1);I(this,"solids",[]);I(this,"obstacles",[]);I(this,"world",{x0:-22,x1:39,z0:-38,z1:30});this.canvas=t,addEventListener("keydown",e=>{var n,i;e.metaKey||e.ctrlKey||e.altKey||(i=(n=e.target).closest)!=null&&i.call(n,"input, textarea, select")||(this.keys.add(e.code),["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"].includes(e.code)&&e.preventDefault())}),addEventListener("keyup",e=>this.keys.delete(e.code)),addEventListener("blur",()=>this.keys.clear()),addEventListener("mousemove",e=>{document.pointerLockElement!==this.canvas||this.frozen||(this.yaw-=e.movementX*Eh,this.pitch=Math.max(-is,Math.min(is,this.pitch-e.movementY*Eh)),this.moved=!0)})}get locked(){return document.pointerLockElement===this.canvas}tap(t,e){this.taps.set(t,e)}update(t){const e=this.frozen?new Set:this.taps.size?new Set([...this.keys,...this.taps.keys()]):this.keys;for(const[h,u]of this.taps)u-t<=0?this.taps.delete(h):this.taps.set(h,u-t);let n=0;e.has("ArrowLeft")&&(n+=1),e.has("ArrowRight")&&(n-=1),this.yawVel+=(n*$_-this.yawVel)*(1-Math.exp(-9*t)),this.yaw+=this.yawVel*t;let i=0;e.has("ArrowUp")&&(i+=1),e.has("ArrowDown")&&(i-=1),this.pitchVel+=(i*K_-this.pitchVel)*(1-Math.exp(-9*t)),this.pitch+=this.pitchVel*t,(this.pitch>is||this.pitch<-is)&&(this.pitch=Math.max(-is,Math.min(is,this.pitch)),this.pitchVel=0);let r=0,o=0;e.has("KeyW")&&(r+=1),e.has("KeyS")&&(r-=1),e.has("KeyD")&&(o+=1),e.has("KeyA")&&(o-=1),(r||o||n||i)&&(this.moved=!0);let a=0,c=0;if(r||o){const h=e.has("ShiftLeft")||e.has("ShiftRight")?J_:Z_,u=Math.hypot(r,o),f=Math.sin(this.yaw),d=Math.cos(this.yaw);a=(-f*r+d*o)/u*h,c=(-d*r-f*o)/u*h}const l=1-Math.exp(-(r||o?q_:Y_)*t);if(this.vel.x+=(a-this.vel.x)*l,this.vel.z+=(c-this.vel.z)*l,this.vel.lengthSq()>1e-8){const h=this.pos.x,u=this.pos.z;this.pos.x+=this.vel.x*t,this.pos.z+=this.vel.z*t,this.collide();const f=this.pos.x-(h+this.vel.x*t),d=this.pos.z-(u+this.vel.z*t),m=Math.hypot(f,d);if(m>1e-9){const x=f/m,p=d/m,g=this.vel.x*x+this.vel.z*p;g<0&&(this.vel.x-=x*g,this.vel.z-=p*g)}}}collide(){const t=this.pos;for(let e=0;e<2;e++)for(const n of this.solids){const i=Math.max(n.x0,Math.min(t.x,n.x1)),r=Math.max(n.z0,Math.min(t.z,n.z1)),o=t.x-i,a=t.z-r,c=o*o+a*a;if(!(c>=on*on))if(c>1e-12){const l=Math.sqrt(c);t.x+=o/l*(on-l),t.z+=a/l*(on-l)}else{const l=[t.x-n.x0+on,n.x1-t.x+on,t.z-n.z0+on,n.z1-t.z+on],h=Math.min(...l);h===l[0]?t.x=n.x0-on:h===l[1]?t.x=n.x1+on:h===l[2]?t.z=n.z0-on:t.z=n.z1+on}}for(const e of this.obstacles){const n=t.x-e.x,i=t.z-e.z,r=Math.hypot(n,i),o=on*.7+e.r;r<o&&r>1e-6&&(t.x=e.x+n/r*o,t.z=e.z+i/r*o)}t.x=Math.max(this.world.x0,Math.min(this.world.x1,t.x)),t.z=Math.max(this.world.z0,Math.min(this.world.z1,t.z))}apply(t){t.position.copy(this.pos),t.rotation.set(this.pitch,this.yaw,0,"YXZ")}}class j_{constructor(){I(this,"el");I(this,"tools");I(this,"low");I(this,"high");I(this,"cap");I(this,"frame");I(this,"open",!1);I(this,"busy",!1);I(this,"work",null);I(this,"px",[1,1]);I(this,"crop",[0,0,1,1]);I(this,"onClose",()=>{});I(this,"onShow",()=>{});I(this,"relock",()=>!0);this.el=document.getElementById("view"),this.frame=this.el.querySelector(".frame"),this.low=this.el.querySelector("img.low"),this.high=this.el.querySelector("img.high"),this.cap=this.el.querySelector(".cap"),this.tools=document.createElement("div"),this.tools.className="view-tools",this.el.prepend(this.tools),this.high.addEventListener("load",()=>{this.open&&this.high.classList.add("in")}),addEventListener("resize",()=>{this.work&&this.fit()})}show(t,e,n,i){this.work=t,this.px=e??[1200,1200],this.crop=t.crop??[0,0,1,1],this.open=!0,this.busy=!1,this.high.classList.remove("in"),this.low.src=n,this.high.src=i,this.caption(),this.fit(),this.el.classList.add("on"),this.onShow(t)}caption(){const t=this.work;if(!t)return;const e=[`<i>${Th(ro(t))}</i>`],n=[t.medium,so(t),t.year].filter(Boolean).map(i=>Th(i));n.length&&e.push(n.join(" &nbsp;·&nbsp; ")),this.cap.innerHTML=e.join("<br>")}hide(){!this.open||this.busy||(this.open=!1,this.work=null,this.el.classList.remove("on"),this.onClose())}setCrop(t){this.crop=t,this.fit()}get frameEl(){return this.frame}fit(){const n=this.tools.childElementCount?56:0,[i,r,o,a]=this.crop,c=this.px[0]*(o-i),l=this.px[1]*(a-r),h=innerWidth-2*28,u=innerHeight-2*28-64-n,f=Math.min(1,h/c,u/l),d=Math.round(c*f),m=Math.round(l*f);this.frame.style.width=`${d}px`,this.frame.style.height=`${m}px`;const x=d/(o-i),p=m/(a-r);for(const g of[this.low,this.high])Object.assign(g.style,{width:`${x}px`,height:`${p}px`,left:`${-i*x}px`,top:`${-r*p}px`})}}const Th=s=>s.replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]),tv=.62,oa=5,ev=.18;class nv{constructor(t=!0){I(this,"pic",null);I(this,"lit",null);I(this,"dark",0);I(this,"veil");I(this,"vScene",new bl);I(this,"vCam",new go(-1,1,1,-1,0,1));I(this,"hintEl");I(this,"hinted",null);I(this,"hintDone",!1);I(this,"v",new N);I(this,"f",new N);this.veil=new Ce(new ii(2,2),new Qn({color:0,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1,toneMapped:!1})),this.vScene.add(this.veil),this.hintEl=document.createElement("div"),this.hintEl.id="focus-hint",this.hintEl.textContent="CLICK FOR FULL SCREEN",t||(this.hintEl.style.display="none"),document.body.append(this.hintEl)}reach(t){return Math.min(6,Math.max(2.6,1.8+2.4*Math.max(t.w,t.h)))}update(t,e,n,i,r){let o=null,a=1/0,c=1/0;if(r){const u=e.getWorldPosition(this.v),f=e.getWorldDirection(this.f);for(const d of n){const m=d.mesh.position,x=d.placed.normal,p=m.x-u.x,g=m.y-u.y,b=m.z-u.z,T=Math.hypot(p,g,b);if(T>this.reach(d)||x[0]*-p+x[2]*-b<=0)continue;const v=Math.acos(Math.min(1,(p*f.x+g*f.y+b*f.z)/T)),y=Math.atan2(Math.max(d.w,d.h)*.5,T)+.17;if(v>y||Ii(i,u.x,u.z,m.x+x[0]*.05,m.z+x[2]*.05))continue;const w=v/y;w<a&&(a=w,o=d),d===this.pic&&(c=w)}this.pic&&c<a+.15&&(o=this.pic)}this.pic=o,o&&(this.lit=o);let l=0;if(o){const u=o.mesh.position.distanceTo(e.getWorldPosition(this.v)),f=this.reach(o),d=f*.4,m=Math.min(1,Math.max(0,(f-u)/(f-d)));l=tv*m*m*(3-2*m)}this.dark+=(l-this.dark)*(1-Math.exp(-t/ev)),this.dark<.003&&!o&&(this.lit=null),!this.hintDone&&o&&this.dark>.12&&!this.hinted&&(this.hinted=o);const h=!!this.hinted&&o===this.hinted&&this.dark>.08;this.hinted&&!h&&this.hintEl.classList.contains("on")&&(this.hintDone=!0,this.hinted=null),this.hintEl.classList.toggle("on",h)}opened(){this.hintDone=!0,this.hinted=null,this.hintEl.classList.remove("on")}clear(){this.pic=null,this.lit=null,this.dark=0,this.hintEl.classList.remove("on")}render(t,e,n){const i=this.lit;if(!i||this.dark<.003)return;this.veil.material.opacity=this.dark,t.autoClear=!1,t.render(this.vScene,this.vCam);const r=i.label?[i.mesh,i.label]:[i.mesh];for(const c of r)c.layers.enable(oa);const o=n.layers.mask,a=e.background;n.layers.set(oa),e.background=null,t.render(e,n),e.background=a,n.layers.mask=o;for(const c of r)c.layers.disable(oa);t.autoClear=!0}}const iv=[[233,196,106],[237,214,197],[247,74,158],[124,196,124],[56,134,232],[150,106,76]],sv=[[18,20,26],[198,44,48],[240,241,246],[72,178,96]],Wu=[[255,196,160],[255,132,112],[236,92,124],[255,110,178]],nr=.12,Ul=[58,44,40],aa=s=>{const t=s/255;return t<=.04045?t/12.92:((t+.055)/1.055)**2.4},rv=s=>{const t=s<=.0031308?s*12.92:1.055*s**.4166666666666667-.055;return Math.round(Math.max(0,Math.min(1,t))*255)};function vo(s,t){const e=Math.max(0,Math.min(1,t))*(s.length-1),n=Math.min(s.length-2,Math.floor(e)),i=e-n,r=s[n],o=s[n+1];return[0,1,2].map(a=>rv(aa(r[a])+(aa(o[a])-aa(r[a]))*i))}function co([s,t,e]){const n=s/255,i=t/255,r=e/255,o=Math.max(n,i,r),a=Math.min(n,i,r),c=(o+a)/2,l=o-a;if(!l)return[0,0,c];const h=c>.5?l/(2-o-a):l/(o+a);let u;return o===n?u=(i-r)/l+(i<r?6:0):o===i?u=(r-n)/l+2:u=(n-i)/l+4,[u*60,h,c]}function ov(s,t,e){if(s=(s%360+360)%360,t<=0){const l=Math.round(e*255);return[l,l,l]}const n=(1-Math.abs(2*e-1))*t,i=n*(1-Math.abs(s/60%2-1)),r=e-n/2;let o=0,a=0,c=0;return s<60?(o=n,a=i):s<120?(o=i,a=n):s<180?(a=n,c=i):s<240?(a=i,c=n):s<300?(o=i,c=n):(o=n,c=i),[Math.round((o+r)*255),Math.round((a+r)*255),Math.round((c+r)*255)]}function av(s,t){const[e,n,i]=co(s);return n<.02?s:ov(e+t,n,i)}(()=>{const s=[];for(let t=0;t<=24;t++)s.push(`hsl(${t/24*360}, 72%, 56%) ${(t/24*100).toFixed(1)}%`);return`linear-gradient(90deg, ${s.join(", ")})`})();const Nl=s=>vo(iv,s.skin),lv=s=>vo(sv,s.mouthColor),cv=s=>vo(Wu,(s.cheeks-nr)/(1-nr)),hv=s=>{const t=Math.max(0,Math.min(1,s.cheeks/nr));return t*t*(3-2*t)};(()=>{const s=["rgb(255,255,255) 0%"];for(let t=0;t<=16;t++){const[e,n,i]=vo(Wu,t/16);s.push(`rgb(${e},${n},${i}) ${((nr+t/16*(1-nr))*100).toFixed(1)}%`)}return`linear-gradient(90deg, ${s.join(", ")})`})();const uv={shape:.35,eyeSize:.6,eyeSpacing:.5,eyeHeight:.5,browWeight:.5,browHeight:.5,noseLength:.5,noseHeight:.5,mouthWidth:.5,mouthColor:0,cheeks:0,skin:0,hairColor:co(Ul)[0]/360,hat:"none"},Vt=16,qt=16,Zt=16,Us=[26,32,42],Ah=[236,240,246],an=(s,t)=>[Math.max(0,Math.min(255,Math.round(s[0]*t))),Math.max(0,Math.min(255,Math.round(s[1]*t))),Math.max(0,Math.min(255,Math.round(s[2]*t)))],Tt={felt:[44,52,66],leather:[122,84,56],band:[188,76,76],party:[226,120,92],partyAlt:[240,214,120],hair:Ul,glass:[120,176,208],brass:[186,156,96],steel:[124,134,150],red:[190,58,54],gold:[216,178,82],leaf:[94,158,82],cream:[234,228,208],plum:[124,70,132]},Vn=(s,t)=>Math.round(Math.max(0,Math.min(1,s))*t),Rh=2.2,fv=18,dv=6,Ch=.55;function pv(s){const t=Rh*Math.pow(fv/Rh,Math.max(0,Math.min(1,s))),e=Vt/2,n=qt/2,i=Zt/2;return(r,o,a)=>{const c=Math.abs(r+.5-e)/e,l=Math.abs(o+.5-n)/n,h=c**t+l**t;if(h>1)return!1;const u=Math.abs(a+.5-i)/i;if(a>=Zt-dv){const f=h<=Ch?1:((1-h)/(1-Ch))**(1/t);return u<=f}return h+u**t<=1}}function mv(s){const t=Nl(s),e=pv(s.shape),n=new Map,i=(O,X,F)=>`${O},${X},${F}`;let r=null;const o=new Set,a=new Set;let c;const l=(O,X,F,z)=>{const E=i(O,X,F);n.set(E,c?{x:O,y:X,z:F,c:z,part:c}:{x:O,y:X,z:F,c:z}),r&&r.add(E)},h=(O,X,F,z)=>{const E=i(O,X,F);n.set(E,{x:O,y:X,z:F,c:z}),o.delete(E),a.delete(E)},u=(O,X,F)=>n.has(i(O,X,F));for(let O=0;O<Vt;O++)for(let X=0;X<qt;X++)for(let F=0;F<Zt;F++)e(O,X,F)&&l(O,X,F,t);const f=(O,X)=>{for(let F=qt-1;F>=0;F--)if(u(O,F,X))return F;return-1},d=(O,X)=>{for(let F=Zt-1;F>=0;F--)if(u(O,X,F))return F;return-1},m=(O,X,F)=>{if(O<0||O>=Vt||X<0||X>=qt)return;const z=d(O,X);z>=0&&l(O,X,z,F)},x=Vt/2,p=1+Vn(s.eyeSize,3),g=1+Vn(s.eyeSize,3),b=Math.max(1,6-p),T=1+Vn(s.eyeSpacing,b-1),v=8+Vn(s.eyeHeight,4)-2-Math.floor((g-1)/2),y=v+g-1,w=[[x-T-p,x-T-1],[x+T,x+T+p-1]],P=p>=3&&g>=3;for(const[O,X]of w)for(let F=O;F<=X;F++)for(let z=v;z<=y;z++){const E=!!(P&&F>O&&F<X&&z>v&&z<y);c=P&&!E?"eye":"pupil",m(F,z,P?E?Us:Ah:Us)}c=void 0,r=o;const _=Vn(s.browWeight,3),M=y+2+(Vn(s.browHeight,4)-2);if(_>0){c="brow";for(const[O,X]of w)for(let F=O-1;F<=X+1;F++)for(let z=0;z<_;z++)m(F,M+z,Tt.hair);c=void 0}r=null;const R=Vn(s.noseLength,8),L=5+(Vn(s.noseHeight,6)-3);if(R>0){const O=an(t,.9);c="nose";for(let X=x-1;X<=x;X++)for(let F=L;F<=L+1;F++){const z=d(X,F);if(!(z<0))for(let E=1;E<=R;E++)l(X,F,z+E,O)}c=void 0}const U=2*Vn(s.mouthWidth,4),W=3;if(U>0){const O=lv(s),X=U>=6?2:1;c="mouth";for(let F=x-U/2;F<=x+U/2-1;F++)for(let z=W;z<W+X;z++)m(F,z,O);c=void 0}const B=hv(s);if(B>0){const O=cv(s),X=(C,k)=>C[0]===k[0]&&C[1]===k[1]&&C[2]===k[2],F=v-1,z=W+(U>=6?2:1),E=Math.max(z+.5,F-.5);for(const[C,k]of w){const J=k<x,tt=(C+k)/2,ut=tt+.35*((J?x-1.5:x+.5)-tt);for(let pt=Math.floor(ut-2);pt<=Math.ceil(ut+2);pt++)if(!(J?pt>x-2:pt<x+1))for(let wt=z;wt<=F;wt++){const zt=1-((pt-ut)/1.9)**2-((wt-E)/1.3)**2;if(zt<=0)continue;const Ot=d(pt,wt),Wt=Ot>=0?n.get(i(pt,wt,Ot)):void 0;if(!Wt||Wt.part||!X(Wt.c,t))continue;const re=B*.72*Math.pow(zt,.8),Ee=[0,1,2].map(Ne=>Math.round(t[Ne]+(O[Ne]-t[Ne])*re));n.set(i(pt,wt,Ot),{x:pt,y:wt,z:Ot,c:Ee,blend:t})}}}const H=(O,X=1)=>{for(let F=0;F<Vt;F++)for(let z=0;z<Zt;z++){const E=f(F,z);if(!(E<0))for(let C=1;C<=X;C++)l(F,E+C,z,O)}},K=(O,X,F)=>{const z=Math.ceil(X)+1;for(let E=x-z;E<x+z;E++)for(let C=x-z;C<x+z;C++)Math.hypot(E+.5-x,C+.5-x)<=X&&l(E,O,C,F)},V=(O,X,F,z)=>{for(let E=O;E<=X;E++)for(let C=0;C<Vt;C++)for(let k=0;k<Zt;k++)Math.hypot(C+.5-x,k+.5-x)<=F&&l(C,E,k,z)},it=(O,X,F,z,E)=>{const C=Math.ceil(z)+1;for(let k=Math.floor(O-C);k<=O+C;k++)for(let J=Math.floor(X-C);J<=X+C;J++)for(let tt=Math.floor(F-C);tt<=F+C;tt++)Math.hypot(k+.5-O,J+.5-X,tt+.5-F)<=z&&l(k,J,tt,E)},G=(O,X,F,z=1)=>{for(let E=O;E<=X;E++)for(let C=0;C<Vt;C++){const k=d(C,E);k>=0&&l(C,E,k+z,F)}};switch(r=a,s.hat){case"birthday":{for(let O=0;O<9;O++)V(qt+O,qt+O,5.4-O*.62,O%2?Tt.partyAlt:Tt.party);it(x,qt+9.5,x,1.6,Ah);break}case"mickey":{const O=f(x,x)+2;for(const X of[-.5,Vt+.5])it(X,O,x,4.2,Us);break}case"tophat":{K(qt,8.6,Tt.felt),V(qt+1,qt+10,5,Tt.felt),V(qt+3,qt+4,5.05,Tt.band);break}case"gangster":{K(qt,9.6,Tt.felt),V(qt+1,qt+5,5,Tt.felt),V(qt+1,qt+2,5.05,Tt.band);break}case"goggles":{G(v,y,Tt.brass);for(const[O,X]of w)for(let F=O;F<=X;F++)for(let z=v;z<=y;z++){const E=d(F,z);E>=0&&l(F,z,E+1,Tt.glass)}break}case"pilot":{H(Tt.leather,2),G(qt-4,qt-3,Tt.brass);for(let O=qt-4;O>=4;O--)for(const X of[0,1,Vt-2,Vt-1])for(let F=0;F<Zt;F++)u(X,O,F)&&l(X,O,F,Tt.leather);break}case"model":{K(qt,12.5,Tt.partyAlt),V(qt+1,qt+2,4.4,Tt.partyAlt);break}case"curls":{let O=7;const X=()=>(O=(O*1103515245+12345)%2147483648)/2147483648;for(let F=-2;F<Vt+2;F++)for(let z=-2;z<Zt+2;z++){const E=f(Math.max(0,Math.min(Vt-1,F)),Math.max(0,Math.min(Zt-1,z)));E<0||(X()<.6&&l(F,E+1,z,Tt.hair),X()<.34&&l(F,E+2,z,Tt.hair),X()<.14&&l(F,E+3,z,Tt.hair))}break}case"bob":{H(Tt.hair,2);for(let O=y+1;O<qt;O++)for(let X=0;X<Vt;X++)for(let F=0;F<Zt;F++)(X<=1||X>=Vt-2||F<=1)&&u(X,O,F)&&l(X,O,F,Tt.hair);break}case"pigtails":{H(Tt.hair,2);for(const O of[-1.5,Vt+1.5])it(O,qt-5,x,3.4,Tt.hair);break}case"crown":{const O=Tt.gold,X=an(O,1.15),F=Tt.band,z=(k,J)=>{const tt=Math.hypot(k+.5-x,J+.5-x);return tt>=5.1&&tt<=6.9};let E=0;for(let k=0;k<Vt;k++)for(let J=0;J<Zt;J++)z(k,J)&&(E=Math.max(E,f(k,J)+3));for(let k=0;k<Vt;k++)for(let J=0;J<Zt;J++){if(!z(k,J))continue;const tt=f(k,J);if(!(tt<0))for(let ut=tt+1;ut<=E;ut++)l(k,ut,J,ut===E?X:O)}const C=[[7,13],[12,10],[2,10],[12,4],[2,4]];for(const[k,J]of C){const tt=Math.hypot(k+1-x,J+1-x);for(let ut=k;ut<=k+1;ut++)for(let pt=J;pt<=J+1;pt++){const wt=Math.hypot(ut+.5-x,pt+.5-x)>tt;for(let zt=1;zt<=(wt?5:3);zt++)l(ut,E+zt,pt,wt&&zt===5?X:O)}}for(let k=x-1;k<=x;k++)for(let J=E+2;J<=E+3;J++)for(let tt=14;tt<=15;tt++)l(k,J,tt,F);break}case"beanie":{const O=Tt.red,X=Tt.cream,F=Math.max(y+1,qt-6),z=Math.min(F+2,qt-1),E=[];for(let C=F;C<=z;C++)for(let k=-1;k<=Vt;k++)for(let J=-1;J<=Zt;J++)u(k,C,J)?l(k,C,J,X):(u(k-1,C,J)||u(k+1,C,J)||u(k,C,J-1)||u(k,C,J+1))&&E.push([k,C,J]);for(const[C,k,J]of E)l(C,k,J,X);for(let C=z+1;C<qt;C++)for(let k=0;k<Vt;k++)for(let J=0;J<Zt;J++)u(k,C,J)&&l(k,C,J,C===z+1?an(O,.82):O);for(let C=0;C<Vt;C++)for(let k=0;k<Zt;k++){const J=f(C,k);J<=z||(l(C,J+1,k,O),l(C,J+2,k,O))}it(x,f(x,x)+4.5,x,1.9,X);break}case"cowboy":{let O=0;for(let X=0;X<Vt;X++)for(let F=0;F<Zt;F++)O=Math.max(O,f(X,F)+1);for(let X=0;X<Vt;X++)for(let F=0;F<Zt;F++){const z=f(X,F);if(!(z<0||Math.hypot(X+.5-x,F+.5-x)>5))for(let E=z+1;E<O;E++)l(X,E,F,Tt.leather)}for(let X=x-11;X<x+11;X++)for(let F=x-11;F<x+11;F++){const z=Math.abs(X+.5-x);if(Math.hypot(z,F+.5-x)>10.7)continue;const E=z>7.5?2:z>5.5?1:0;for(let C=0;C<=E;C++)l(X,O+C,F,Tt.leather)}for(let X=0;X<Vt;X++)for(let F=0;F<Zt;F++){const z=Math.abs(X+.5-x);if(Math.hypot(z,F+.5-x)>5)continue;const E=z<1?2:z<2?1:0;for(let C=O+1;C<=O+7-E;C++)l(X,C,F,Tt.leather);E>0&&l(X,O+7-E,F,an(Tt.leather,.8))}V(O+1,O+2,5.05,Tt.felt);break}case"wizard":{const O=Tt.plum,X=an(O,.82),F=f(x,x)+1;for(let k=x-6;k<x+6;k++)for(let J=x-6;J<x+6;J++){if(Math.hypot(k+.5-x,J+.5-x)>5.2)continue;const tt=f(k,J);if(!(tt<0))for(let ut=tt+1;ut<=F;ut++)l(k,ut,J,O)}const z=11;for(let k=x-12;k<x+12;k++)for(let J=x-12;J<x+12;J++){const tt=Math.hypot(k+.5-x,J+.5-x);if(tt<=5.2||tt>z)continue;const ut=k>=0&&k<Vt&&J>=0&&J<Zt?f(k,J):-1;l(k,Math.max(F-Math.max(0,Math.round(tt)-8),ut+1,y+2),J,X)}const E=13;for(let k=0;k<=E;k++){const J=k/E,tt=5-4.1*J,ut=x-6.5*J*J;for(let pt=x-6;pt<x+6;pt++)for(let wt=-2;wt<Zt;wt++)Math.hypot(pt+.5-x,wt+.5-ut)<=tt&&l(pt,F+k,wt,O)}const C=(k,J)=>{for(let tt=x-J;tt<x+J;tt++){const ut=d(tt,k);ut>=0&&l(tt,k,ut,Tt.gold)}};C(F+3,1),C(F+4,2),C(F+5,1),C(F+8,1),C(F+11,1);break}case"halo":{let O=-1;for(let k=0;k<Vt;k++)for(let J=0;J<Zt;J++)O=Math.max(O,f(k,J));const X=O+3,F=an(Tt.gold,1.15),z=4.9,E=6.7,C=Math.ceil(E)+1;for(let k=x-C;k<x+C;k++)for(let J=x-C;J<x+C;J++){const tt=Math.hypot(k+.5-x,J+.5-x);tt<z||tt>E||l(k,X,J,J>=x?F:Tt.gold)}break}case"headphones":{const O=Math.min(y+1,10),X=x-2,F=x+1;for(let z=0;z<Vt;z++)for(let E=X;E<=F;E++){const C=f(z,E);C<0||(l(z,C+1,E,Tt.steel),l(z,C+2,E,Tt.steel))}for(let z=O+3;z<qt;z++)for(const E of[0,Vt-1])for(let C=X;C<=F;C++)u(E,z,C)&&l(E,z,C,Tt.steel);for(let z=0;z<3;z++)for(let E=O-4;E<=O+3;E++)for(let C=x-4;C<=x+3;C++)Math.hypot(E+.5-O,C+.5-x)>3.6||(l(-z,E,C,Us),l(Vt-1+z,E,C,Us));for(let z=O-2;z<=O+1;z++)for(let E=x-2;E<=x+1;E++)Math.hypot(z+.5-O,E+.5-x)<=1.6&&(l(-2,z,E,Tt.steel),l(Vt+1,z,E,Tt.steel));break}case"viking":{const O=an(Tt.steel,.78),X=Math.max(y+2,qt-5);for(let E=X;E<qt;E++)for(let C=0;C<Vt;C++)for(let k=0;k<Zt;k++)u(C,E,k)&&l(C,E,k,E===X?O:Tt.steel);for(let E=0;E<Vt;E++)for(let C=0;C<Zt;C++){const k=f(E,C);k<X||(l(E,k+1,C,Tt.steel),l(E,k+2,C,Tt.steel))}const F=Math.max(y+1,X-1);for(let E=F;E<=qt;E++)for(let C=x-1;C<=x;C++){const k=d(C,E);k>=0&&l(C,E,k+1,O)}const z=Math.max(f(5,x)-4,y+4);for(const E of[-1,1])for(let C=0;C<=18;C++){const k=C/18,J=k*2.05,tt=x+E*(6.2+6*Math.sin(J));it(tt,z+8.4-8.4*Math.cos(J),x,2.6-1.6*k,Tt.cream)}break}case"flowers":{const O=Math.max(y+1,Math.min(y+3,qt-4)),X=Tt.leaf,F=an(Tt.leaf,.82),z=(tt,ut)=>Math.floor(x+tt*ut),E=[[0,1],[.87,.5],[.87,-.5],[0,-1]],C=[];for(const[tt,ut]of E){let pt=2;for(;pt<12&&u(z(tt,pt),O,z(ut,pt));)pt+=.5;C.push(pt)}const k=[];for(let tt=O;tt<=O+1;tt++)for(let ut=0;ut<Vt;ut++)for(let pt=0;pt<Zt;pt++){if(!u(ut,tt,pt))continue;let wt=!1;for(let zt=-1;zt<=1;zt++)for(let Ot=-1;Ot<=1;Ot++)u(ut+zt,tt,pt+Ot)||(wt=!0,k.push([ut+zt,tt,pt+Ot]));wt&&k.push([ut,tt,pt])}for(const[tt,ut,pt]of k)l(tt,ut,pt,ut===O?F:X);const J=[Tt.red,Tt.gold,Tt.cream];for(let tt=0;tt<E.length;tt++){const[ut,pt]=E[tt],wt=Math.round(x+ut*(C[tt]+1)),zt=Math.round(x+pt*(C[tt]+1)),Ot=J[tt%J.length];it(wt,O+1.5,zt,1.5,Ot),ut>0&&it(2*x-wt,O+1.5,zt,1.5,Ot)}break}case"afro":{const F=f(x,x),z=Math.max(y+2,qt-3);for(let E=x-10;E<x+10;E++)for(let C=x-10;C<x+10;C++){const k=Math.abs(E+.5-x),J=Math.abs(C+.5-x),tt=(k*k+J*J)/(10*10),ut=f(E,C);if(tt>1&&ut<0)continue;const pt=tt>1?0:7.5*Math.sqrt(1-tt),zt=C>=Zt-6?Math.max(y+1,z-Math.max(0,k-4.5)):y+1,Ot=ut>=0?zt:Math.max(zt,Math.ceil(F+.5-pt)),Wt=tt>1?ut:Math.max(ut,Math.floor(F-.5+pt));for(let re=Ot;re<=Wt;re++)l(E,re,C,re<zt+2?an(Tt.hair,.8):Tt.hair)}break}case"mohawk":{const O=Tt.hair,X=an(t,.74);for(let z=0;z<Vt;z++)for(let E=0;E<Zt;E++){const C=f(z,E);if(!(C<0))for(let k=y+2;k<=C;k++)u(z,k,E)&&h(z,k,E,X)}const F=f(x,x);for(let z=1;z<Zt-1;z++){if(f(x,z)<F-4)continue;const C=(z-1)/(Zt-3),k=2+Math.round(4*Math.sin(Math.PI*C));for(const J of[x-1,x])for(let tt=f(J,z)+1;tt<=f(J,z)+k;tt++)l(J,tt,z,O)}break}case"ponytail":{const O=Tt.hair,X=Math.max(f(x-1,2),f(x,2))-2;for(let F=0;F<Vt;F++)for(let z=0;z<Zt;z++){const E=f(F,z);E>y&&l(F,E,z,O)}H(O,2);for(let F=y+1;F<qt;F++)for(let z=0;z<Vt;z++)for(let E=0;E<Zt;E++)(z<=1||z>=Vt-2||E<=3)&&u(z,F,E)&&l(z,F,E,O);for(let F=3;F<=y;F++){const z=6-Math.max(0,Math.min(3,y-F));for(let E=x-z;E<x+z;E++)for(let C=0;C<=2;C++)u(E,F,C)&&l(E,F,C,O)}for(let F=0;F<=14;F++){const z=F/14;it(x,X-10*z*z,1.5-4.4*Math.sqrt(z),2.7-1.3*z,O)}it(x,X-.5,-.6,2.1,Tt.band);break}case"longhair":{const O=Tt.hair,X=Zt-5,F=2;H(O,2);for(let z=0;z<qt;z++)for(let E=0;E<Vt;E++)for(let C=0;C<Zt;C++){if(!u(E,z,C))continue;const k=C>=X,J=E<F||E>=Vt-F;k&&!J||k&&J&&z>=v&&z<=y||l(E,z,C,O)}for(let z=Math.max(qt-3,y+2);z<qt;z++)for(let E=0;E<Vt;E++)for(let C=X;C<Zt;C++)u(E,z,C)&&l(E,z,C,O);for(let z=0;z<Vt;z++)for(let E=0;E<Zt;E++){if(!(z<F||z>=Vt-F||E<F)||f(z,E)<0)continue;let k=0;for(;!u(z,k,E);)k++;for(let J=k-1;J>=k-3;J--)l(z,J,E,O)}break}case"buzz":{const O=Tt.hair,X=an(Tt.hair,1.75),F=Math.min(qt-2,Math.max(y+3,qt-3));for(let z=0;z<Vt;z++)for(let E=0;E<Zt;E++){const C=f(z,E);if(C<0)continue;const k=Math.abs(z+.5-x),tt=E>=Zt-6?k<5.5?0:k<6.5?1:2:3,ut=Math.max(y+1,Math.min(F-tt,C-1));for(let pt=ut;pt<=C;pt++)u(z,pt,E)&&l(z,pt,E,pt<F?X:O)}break}case"bun":{const O=an(Tt.hair,.74),X=y+2;for(let E=0;E<Vt;E++)for(let C=0;C<Zt;C++){const k=f(E,C);if(k<X)continue;const J=C<=5?5:C<=9?3:2;for(let tt=k;tt>k-J&&tt>=X;tt--)u(E,tt,C)&&l(E,tt,C,Tt.hair);l(E,k+1,C,Tt.hair)}const F=4.5,z=f(x,4);it(x,z+3,F,3.1,Tt.hair);for(let E=x-4;E<x+4;E++)for(let C=1;C<=8;C++)if(Math.hypot(E+.5-x,C+.5-F)<=2.6)for(let k=z+1;k<=z+2;k++)l(E,k,C,O);break}case"braids":{H(Tt.hair,2);for(let F=y+1;F<qt;F++)for(let z=0;z<Vt;z++)for(let E=0;E<Zt;E++)(z<=1||z>=Vt-2||E<=1)&&u(z,F,E)&&l(z,F,E,Tt.hair);const O=an(Tt.hair,1.3),X=-5;for(const F of[-1,Vt]){const z=Math.max(0,Math.min(Vt-1,F)),E=Math.min(f(z,6),qt-4);if(!(E<0)){for(let C=X;C<=E;C++){const k=C<=X+3,J=C<=X+1;let tt=(C%4+4)%4<2?Tt.hair:O;J&&(tt=Tt.band);for(let ut=-1;ut<=1;ut++)for(let pt=-1;pt<=1;pt++)(!k||Math.abs(ut)+Math.abs(pt)<2)&&l(F+ut,C,6+pt,tt)}it(F+.5,X-2,6.5,1.9,Tt.band)}}break}}r=null;const et=.18,rt=.25;let ft=-1;if(a.size){const O=new Map;let X=0,F=0;for(const C of a){const k=n.get(C);if(!k)continue;F++;const J=`${k.c[0]},${k.c[1]},${k.c[2]}`,tt=O.get(J);tt?tt.n++:O.set(J,{n:1,c:k.c,chroma:(Math.max(...k.c)-Math.min(...k.c))/255}),O.get(J).chroma>=et&&X++}const z=F>0&&X/F<rt;let E=null;for(const C of O.values())!z&&C.chroma<et||(!E||C.n>E.n)&&(E=C);E&&(ft=co(E.c)[0])}else o.size&&(ft=co(Ul)[0]);if(ft>=0){const O=s.hairColor*360-ft;if(Math.abs(O)>.5)for(const X of[...a,...o]){const F=n.get(X);F&&(F.c=av(F.c,O))}}return{voxels:[...n.values()],anchor:ft}}function gv(s){return mv(s).voxels}const xv=[{n:[1,0,0],t1:[0,1,0],t2:[0,0,1]},{n:[-1,0,0],t1:[0,0,1],t2:[0,1,0]},{n:[0,1,0],t1:[0,0,1],t2:[1,0,0]},{n:[0,-1,0],t1:[1,0,0],t2:[0,0,1]},{n:[0,0,1],t1:[1,0,0],t2:[0,1,0]},{n:[0,0,-1],t1:[0,1,0],t2:[1,0,0]}],la=.42,Ur=new Gt,Ph=(s,t,e)=>(Ur.setRGB(s/255,t/255,e/255,Le),[Ur.r,Ur.g,Ur.b]);function _v(s,t){const e=new Map;for(const M of s)e.set(`${M.x},${M.y},${M.z}`,M);const n=(M,R,L)=>e.get(`${M},${R},${L}`),i=(M,R)=>M[0]===R[0]&&M[1]===R[1]&&M[2]===R[2],r=(M,R)=>i(M.c,R.c)||!!M.blend&&(!!R.blend||i(M.blend,R.c))||!!R.blend&&i(R.blend,M.c);let o=1/0,a=1/0,c=1/0,l=-1/0,h=-1/0,u=-1/0;for(const M of s)M.x<o&&(o=M.x),M.y<a&&(a=M.y),M.z<c&&(c=M.z),M.x>l&&(l=M.x),M.y>h&&(h=M.y),M.z>u&&(u=M.z);const f=t?t[0]:(o+l)/2,d=t?t[1]:(a+h)/2,m=t?t[2]:(c+u)/2,x=[],p=[],g=[],b=[],T=[],v=new Set;for(const M of s){const R=M.x-f,L=M.y-d,U=M.z-m,W=Ph(M.c[0],M.c[1],M.c[2]),B=Ph(M.c[0]*la,M.c[1]*la,M.c[2]*la);for(const{n:H,t1:K,t2:V}of xv){if(n(M.x+H[0],M.y+H[1],M.z+H[2]))continue;const it=(O,X)=>[R+H[0]/2+K[0]*O+V[0]*X,L+H[1]/2+K[1]*O+V[1]*X,U+H[2]/2+K[2]*O+V[2]*X],G=it(-.5,-.5),et=it(.5,-.5),rt=it(.5,.5),ft=it(-.5,.5);for(const O of[G,et,rt,G,rt,ft])x.push(O[0],O[1],O[2]),p.push(H[0],H[1],H[2]),g.push(W[0],W[1],W[2]);for(const[O,X,F]of[[K,V,1],[K,V,-1],[V,K,1],[V,K,-1]]){const z=n(M.x+O[0]*F,M.y+O[1]*F,M.z+O[2]*F);if(z&&r(z,M)&&!n(M.x+O[0]*F+H[0],M.y+O[1]*F+H[1],M.z+O[2]*F+H[2]))continue;const E=wt=>[R+H[0]/2+O[0]*F/2+X[0]*wt/2,L+H[1]/2+O[1]*F/2+X[1]*wt/2,U+H[2]/2+O[2]*F/2+X[2]*wt/2],C=E(1),k=E(-1),J=C.map(wt=>wt.toFixed(2)).join(),tt=k.map(wt=>wt.toFixed(2)).join(),ut=J<tt?`${J}|${tt}`:`${tt}|${J}`;if(v.has(ut))continue;v.add(ut);const pt=.006;b.push(C[0]+H[0]*pt,C[1]+H[1]*pt,C[2]+H[2]*pt,k[0]+H[0]*pt,k[1]+H[1]*pt,k[2]+H[2]*pt),T.push(B[0],B[1],B[2],B[0],B[1],B[2])}}}const y=new Be;y.setAttribute("position",new ue(x,3)),y.setAttribute("normal",new ue(p,3)),y.setAttribute("color",new ue(g,3));const w=new Be;w.setAttribute("position",new ue(b,3)),w.setAttribute("color",new ue(T,3));const P=[(l-o)/2+.5,(h-a)/2+.5,(u-c)/2+.5],_=Math.max(P[0],P[1],P[2])*1.15;return{faces:y,edges:w,radius:_}}const Xu=["raise0","raise1","inner0","inner1","arch0","arch1","lid0","lid1","tilt0","tilt1","low0","low1","pupil","smile","open","skew","round","roll","nod"],jt=(s,t)=>({[s+"0"]:t,[s+"1"]:t}),vv={calm:{...jt("lid",.1),smile:.08},pleased:{...jt("lid",.2),...jt("low",.3),...jt("raise",.1),smile:.65},happy:{...jt("raise",.35),...jt("arch",.25),...jt("low",.42),smile:.9,open:.16},joy:{...jt("raise",.85),...jt("arch",.4),...jt("low",.55),smile:1,open:.6,roll:.06},surprised:{...jt("raise",1.5),...jt("arch",.45),...jt("lid",-.14),pupil:.7,open:.8,round:1},curious:{raise0:.2,raise1:1.05,arch0:.2,arch1:.75,lid0:.16,lid1:-.04,roll:.17,round:.4,open:.12,smile:.1},doubt:{raise0:-.55,raise1:1,inner0:-.38,lid0:.42,tilt0:.3,lid1:.04,skew:.65,smile:-.08,roll:-.07},thinking:{raise0:.55,inner1:.35,raise1:-.1,...jt("lid",.2),skew:.42},sad:{...jt("inner",.95),...jt("raise",-.1),...jt("lid",.36),...jt("tilt",-.5),smile:-.75,nod:.08},bored:{...jt("lid",.5),...jt("raise",-.28),smile:-.15,skew:.25,nod:.05},sleepy:{...jt("lid",.72),...jt("tilt",-.25),...jt("raise",-.2),...jt("inner",.2),smile:-.05,nod:.18},yawn:{...jt("lid",1),...jt("raise",.75),...jt("inner",.3),open:1,round:.55,nod:-.14},asleep:{...jt("lid",1.05),...jt("raise",-.12),...jt("inner",.12),smile:.05,open:.06},excited:{...jt("raise",.9),...jt("inner",-.1),...jt("lid",-.06),smile:.95,open:.38,pupil:1.12},asking:{...jt("raise",.85),...jt("arch",.3),...jt("lid",.04),roll:.12,smile:.25}},Mv={surprised:24,excited:14,joy:12,doubt:10,curious:9,sad:4,sleepy:3,bored:4,yawn:5,asleep:2.5},Lh=()=>Object.fromEntries(Xu.map(s=>[s,s==="pupil"?1:0])),yv=s=>new Gt().setRGB(s[0]/255,s[1]/255,s[2]/255,Le);class Sv{constructor(t){I(this,"head",new Pe);I(this,"solid",[]);I(this,"drop");I(this,"roll",0);I(this,"nod",0);I(this,"own",[]);I(this,"brows",[]);I(this,"eyes",[]);I(this,"mouth",[]);I(this,"seam",0);I(this,"lipH",.5);I(this,"browLo",0);I(this,"browHi",0);I(this,"d",Lh());I(this,"mood","calm");I(this,"feeling",null);I(this,"feelFor",0);I(this,"blinkIn",1.5);I(this,"blinkT",-1);I(this,"blinkLen",.13);I(this,"glance",new kt);I(this,"glanceIn",1);I(this,"micro",new kt);I(this,"microIn",.5);I(this,"talkT",0);I(this,"syl",0);I(this,"sylLen",.16);I(this,"sylAmp",0);I(this,"sylRound",0);I(this,"pause",0);I(this,"beat",0);I(this,"wasTalking",!1);I(this,"lookX",0);I(this,"lookY",0);const e=gv(t);let n=1/0,i=1/0,r=1/0,o=-1/0,a=-1/0,c=-1/0;for(const G of e)n=Math.min(n,G.x),o=Math.max(o,G.x),i=Math.min(i,G.y),a=Math.max(a,G.y),r=Math.min(r,G.z),c=Math.max(c,G.z);const l=(n+o)/2,h=(i+a)/2,u=(r+c)/2;this.drop=(h-(qt-1)/2)/16;const f=Nl(t),d=8,m=G=>G<d?0:1,x=[!1,!1];for(const G of e)G.part==="eye"&&(x[m(G.x)]=!0);const p=[236,240,246],g=e.map(G=>G.part==="brow"||G.part==="mouth"?{...G,c:f,part:void 0}:G.part==="pupil"&&x[m(G.x)]?{...G,c:p}:G),{faces:b,edges:T}=_v(g,[l,h,u]),v=new no({vertexColors:!0,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1}),y=new cu({vertexColors:!0});this.own.push(b,T,v,y);const w=new Ce(b,v);this.head.add(w,new Id(T,y)),this.solid.push(w);const P=new xn(1,1,1);this.own.push(P);const _=new Map,M=G=>{const et=G.join();let rt=_.get(et);return rt||(rt=new no({color:yv(G)}),_.set(et,rt),this.own.push(rt)),rt},R=G=>{const et=new Ce(P,M(G));return this.head.add(et),this.solid.push(et),et},L=G=>G.z-u+.5,U=e.filter(G=>G.part==="brow");for(const G of[0,1]){const et=U.filter(z=>m(z.x)===G);if(!et.length)continue;const rt=et.map(z=>z.x),ft=Math.min(...rt),O=Math.max(...rt),X=(ft+O)/2,F=Math.max(.5,(O-ft)/2);for(const z of et){const E=G===0?(X-z.x)/F:(z.x-X)/F;this.brows.push({m:R(z.c),x:z.x-l,y:z.y-h,z:L(z),xn:E,side:G})}}const W=e.filter(G=>G.part==="eye"||G.part==="pupil"),B=f.map(G=>Math.round(G*.88));let H=-1/0;for(const G of[0,1]){const et=W.filter(Ot=>m(Ot.x)===G);if(!et.length)continue;const rt=et.map(Ot=>Ot.x),ft=et.map(Ot=>Ot.y),O=Math.min(...rt),X=Math.max(...rt),F=Math.min(...ft),z=Math.max(...ft);H=Math.max(H,z);const E=Math.max(...et.map(L)),C=(O+X)/2-l,k=(F+z)/2-h,J=X-O+1,tt=z-F+1;let ut=null;const pt=Math.max(1,J-2),wt=Math.max(1,tt-2);if(x[G]){const Ot=et.find(Wt=>Wt.part==="pupil").c;ut=R(Ot),ut.scale.set(pt,wt,.05)}const zt=[];for(let Ot=O;Ot<=X;Ot++){const Wt=J>1?G===0?(Ot-O)/(J-1):(X-Ot)/(J-1):.5;zt.push({x:Ot-l,k:Wt,up:R(B),low:R(B)})}this.eyes.push({side:G,y0:F-h-.5,y1:z-h+.5,z:E,cx:C,cy:k,pupil:ut,pw:pt,ph:wt,reach:(J-pt)/2,cols:zt})}const K=e.filter(G=>G.part==="mouth");if(K.length){const G=[...new Set(K.map(E=>E.x))].sort((E,C)=>E-C),et=K.map(E=>E.y),rt=Math.min(...et),ft=Math.max(...et),O=ft-rt+1;this.seam=O>=2?(rt+ft)/2-h:rt-h,this.lipH=O>=2?1:.5;const X=(G[0]+G[G.length-1])/2,F=Math.max(.5,(G[G.length-1]-G[0])/2),z=K[0].c;for(const E of G){const C=Math.max(...K.filter(k=>k.x===E).map(L));this.mouth.push({x:E-l,z:C,xn:(E-X)/F,top:R(z),bot:R(z),inside:R([46,22,28])})}}const V=this.brows.map(G=>G.y),it=Math.max(...e.filter(G=>G.c[0]===f[0]&&G.c[1]===f[1]&&G.c[2]===f[2]).map(G=>G.y));this.browLo=H===-1/0?-2:H-h+.85-(V.length?Math.min(...V):0),this.browHi=it-h-.8-(V.length?Math.max(...V):0),this.apply()}setMood(t){this.mood=t}feel(t,e=2.4){this.feeling=t,this.feelFor=e}blink(t=!1){this.blinkT<0&&(this.blinkT=0,this.blinkLen=t?.38:.13)}get current(){return this.feeling??this.mood}update(t,e,n,i=null){this.feeling&&(this.feelFor-=t,this.feelFor<=0&&(this.feeling=null));const r=this.current,o={...Lh(),...vv[r]};if(i!==null&&(o.open=.05+.2*Math.max(0,Math.sin(Math.PI*2*(i-.5))),o.round=.6),n!==null){if(this.talkT+=t,this.syl-=t,this.pause>0&&(this.pause-=t),this.syl<=0){this.sylLen=.13+Math.random()*.08,this.syl=this.sylLen;const d=n.toLowerCase();".!?".includes(d)?(this.pause=.22,this.sylAmp=0):",;:".includes(d)?(this.pause=.1,this.sylAmp=.1):d===" "?this.sylAmp=.15:"aeiouy".includes(d)?this.sylAmp=.6+Math.random()*.35:this.sylAmp=.28+Math.random()*.2,this.sylRound="ou".includes(d)?.8:0,Math.random()<.16&&(this.beat=1),Math.random()<.05&&this.blink()}const u=1-this.syl/this.sylLen,f=this.pause>0?0:this.sylAmp*Math.pow(Math.sin(Math.PI*u),.65);o.open=Math.max(o.open*.6,f),o.round=Math.max(o.round,this.sylRound*f),o.lid0-=.05,o.lid1-=.05,this.wasTalking=!0}else this.wasTalking&&(this.wasTalking=!1,this.blink());this.beat=Math.max(0,this.beat-t*4),o.raise0+=.42*this.beat,o.raise1+=.42*this.beat,o.nod+=.05*this.beat;const a=Mv[r]??8;for(const u of Xu){const f=u==="open"||u==="round"?30:u.startsWith("raise")?Math.max(a,12):a;this.d[u]+=(o[u]-this.d[u])*Math.min(1,t*f)}this.blinkIn-=r==="asleep"?0:t,this.blinkIn<=0&&(this.blink(r==="sleepy"),this.blinkIn=(r==="sleepy"?3:1.8)+Math.random()*3.6,Math.random()<.18&&(this.blinkIn=.28));let c=0;if(this.blinkT>=0){this.blinkT+=t;const u=this.blinkT/this.blinkLen;c=u<.4?u/.4:u<.55?1:1-(u-.55)/.45,u>=1&&(this.blinkT=-1)}this.glanceIn-=t,this.glanceIn<=0&&(this.glance.set((Math.random()-.5)*1.2,(Math.random()-.5)*.7),this.glanceIn=1.4+Math.random()*2.4),this.microIn-=t,this.microIn<=0&&(this.micro.set((Math.random()-.5)*.24,(Math.random()-.5)*.16),this.microIn=.35+Math.random()*.9);let l=this.glance.x,h=this.glance.y;if(e){const u=Math.max(.4,Math.abs(e.z));l=e.x/u*1.6,h=e.y/u*1.6}r==="thinking"&&(l=.7,h=.6),this.lookX+=(Wn.clamp(l+this.micro.x,-1,1)-this.lookX)*Math.min(1,t*16),this.lookY+=(Wn.clamp(h+this.micro.y,-1,1)-this.lookY)*Math.min(1,t*16),this.roll=this.d.roll,this.nod=this.d.nod,this.apply(c)}apply(t=0){const e=this.d,n=r=>e[r],i=.1;for(const r of this.brows){const o=r.side;let a=n("raise"+o)+n("inner"+o)*-r.xn*.65+n("arch"+o)*(1-r.xn*r.xn)*.9;a=Wn.clamp(a,this.browLo,this.browHi),r.m.position.set(r.x,r.y+a,r.z+.14+i/2),r.m.scale.set(1.001,1,i)}for(const r of this.eyes){const o=r.side,a=r.y1-r.y0;for(const c of r.cols){const l=Wn.clamp(Math.max(t*1.05,n("lid"+o)+n("tilt"+o)*(c.k-.5)*1.2),0,1.05)*a,h=.75+.5*(1-Math.abs(2*c.k-1)),u=t>.5?0:Wn.clamp(n("low"+o)*h,0,1)*a*.6;this.lid(c.up,c.x,r.y1+.08,-(l+(l>.01?.08:0)),r.z),this.lid(c.low,c.x,r.y0-.08,u+(u>.01?.08:0),r.z)}if(r.pupil){const c=Wn.clamp(e.pupil,.6,1.25);r.pupil.scale.set(r.pw*c,r.ph*c,.05),r.pupil.position.set(r.cx+this.lookX*r.reach*.95,r.cy+this.lookY*r.reach*.7,r.z+.02)}}for(const r of this.mouth){const o=r.xn,a=e.smile*(1.25*o*o-.25)+e.skew*o*.7,c=Wn.clamp(e.round,0,1),l=Math.max(0,e.open)*(1-.55*o*o)*(1-c*.75*o*o)*2.4,h=1-c*.35*Math.max(0,Math.abs(o)-.5)*2,u=this.seam+a;r.top.position.set(r.x,u+this.lipH/2,r.z+.01+i/2),r.top.scale.set(h,this.lipH,i),r.bot.position.set(r.x,u-l-this.lipH/2,r.z+.01+i/2),r.bot.scale.set(h,this.lipH,i),r.inside.visible=l>.02,r.inside.position.set(r.x,u-l/2,r.z+.005+i/4),r.inside.scale.set(h*.98,Math.max(.001,l),i/2)}}lid(t,e,n,i,r){const o=Math.abs(i);t.visible=o>.01,t.visible&&(t.position.set(e,n+i/2,r+.07+.03),t.scale.set(1.001,o,.06))}dispose(){for(const t of this.own)t.dispose()}}function bv(s,t=!1){const e=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,c=new Be;let l=0;for(let h=0;h<s.length;++h){const u=s[h];let f=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in u.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in u.morphAttributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(u.morphAttributes[d])}if(t){let d;if(e)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,d,h),l+=d}}if(e){let h=0;const u=[];for(let f=0;f<s.length;++f){const d=s[f].index;for(let m=0;m<d.count;++m)u.push(d.getX(m)+h);h+=s[f].attributes.position.count}c.setIndex(u)}for(const h in r){const u=Ih(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(const h in o){const u=o[h][0].length;if(u!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let f=0;f<u;++f){const d=[];for(let x=0;x<o[h].length;++x)d.push(o[h][x][f]);const m=Ih(d);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(m)}}}return c}function Ih(s){let t,e,n,i=-1,r=0;for(let l=0;l<s.length;++l){const h=s[l];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}const o=new t(r),a=new gn(o,e,n);let c=0;for(let l=0;l<s.length;++l){const h=s[l];if(h.isInterleavedBufferAttribute){const u=c/e;for(let f=0,d=h.count;f<d;f++)for(let m=0;m<e;m++){const x=h.getComponent(f,m);a.setComponent(f+u,m,x)}}else o.set(h.array,c);c+=h.count*e}return i!==void 0&&(a.gpuType=i),a}const ye=22,qu=.6,ln=Math.PI*2,we=(s,t,e)=>s<t?t:s>e?e:s,Ln=s=>s<0?0:s>1?1:s,Nt=(s,t,e)=>s+(t-s)*e,te=s=>{const t=Ln(s);return t*t*(3-2*t)},wv=s=>{const t=Ln(s);return t*t*t*(t*(t*6-15)+10)},Ns=s=>s-Math.floor(s),dn=s=>Math.atan2(Math.sin(s),Math.cos(s)),Yu=(s,t)=>.05+.4*Math.max(0,1-s/(.55*t)),Zn=-.06,Qe=.11,Ze=.19;class Ev{constructor(t){I(this,"xs",[]);I(this,"zs",[]);I(this,"cum",[]);I(this,"total",0);const e=[];for(const i of t)(!e.length||Math.hypot(i.x-e[e.length-1].x,i.z-e[e.length-1].z)>1e-4)&&e.push(i);const n=(i,r)=>{const o=this.xs.length;if(o){const a=Math.hypot(i-this.xs[o-1],r-this.zs[o-1]);if(a<1e-5)return;this.total+=a}this.xs.push(i),this.zs.push(r),this.cum.push(this.total)};n(e[0].x,e[0].z);for(let i=1;i<e.length-1;i++){const r=e[i-1],o=e[i],a=e[i+1],c=Math.hypot(o.x-r.x,o.z-r.z),l=Math.hypot(a.x-o.x,a.z-o.z),h=(o.x-r.x)/c,u=(o.z-r.z)/c,f=(a.x-o.x)/l,d=(a.z-o.z)/l;if(h*f+u*d>.999){n(o.x,o.z);continue}const m=Math.min(.42,c*.5,l*.5),x=o.x-h*m,p=o.z-u*m,g=o.x+f*m,b=o.z+d*m;for(let T=0;T<=8;T++){const v=T/8,y=1-v;n(y*y*x+2*y*v*o.x+v*v*g,y*y*p+2*y*v*o.z+v*v*b)}}e.length>1&&n(e[e.length-1].x,e[e.length-1].z)}seg(t){const e=this.cum;if(t<=0||e.length<2)return 0;if(t>=this.total)return e.length-2;let n=0,i=e.length-1;for(;i-n>1;){const r=n+i>>1;e[r]<=t?n=r:i=r}return n}at(t,e){if(this.xs.length<2)return e.x=this.xs[0],e.z=this.zs[0],e;const n=this.seg(t),i=this.cum[n+1]-this.cum[n],r=i>0?Ln((t-this.cum[n])/i):0;return e.x=Nt(this.xs[n],this.xs[n+1],r),e.z=Nt(this.zs[n],this.zs[n+1],r),e}yawAt(t){if(this.xs.length<2)return 0;const e=this.seg(we(t,0,this.total-1e-4));return Math.atan2(this.xs[e+1]-this.xs[e],this.zs[e+1]-this.zs[e])}}const Nr=.05,Fr=.12;class Tv{constructor(t,e){I(this,"L");I(this,"thigh");I(this,"shin");I(this,"footH",.06);I(this,"hipX",.17);I(this,"armLen");I(this,"legless");I(this,"pos",new N);I(this,"yaw",0);I(this,"lean",0);I(this,"roll",0);I(this,"squash",0);I(this,"stretch",0);I(this,"feet");I(this,"arms");I(this,"onPuff",null);I(this,"onPrint",null);I(this,"airborne",!1);I(this,"rest","stand");I(this,"breath",0);I(this,"asleep",!1);I(this,"headDrop",0);I(this,"hipDrop",0);I(this,"scratch",null);I(this,"scratchIn",5);I(this,"world");I(this,"base",new N);I(this,"vy",0);I(this,"qv",0);I(this,"qRest",0);I(this,"leanV",0);I(this,"leanRest",0);I(this,"sv",0);I(this,"stretchRest",0);I(this,"speed",0);I(this,"lastSpeed",0);I(this,"wantYaw",null);I(this,"trip",null);I(this,"pending",null);I(this,"act",null);I(this,"phase",0);I(this,"running",0);I(this,"clockOn",!1);I(this,"gRef",0);I(this,"held",!1);I(this,"wallSide",0);I(this,"sway",0);I(this,"swayV",0);I(this,"shift",0);I(this,"shiftIn",3);I(this,"clock",0);I(this,"tapT",-1);I(this,"seq",null);I(this,"queued",[]);I(this,"restYaw",null);I(this,"anchor",{x:0,z:0,g:0,yaw:0});I(this,"t1",new N);I(this,"t2",new N);I(this,"t3",new N);I(this,"e1",new vn);this.world=e,this.L=Math.max(0,t-1),this.legless=this.L<.3;const n=Math.max(.3,this.L)-this.footH;this.thigh=n/2,this.shin=n/2,this.armLen=this.legless?.34:Math.min(3,Math.max(.6,this.L))*.85;const i=o=>({side:o,mode:"ground",sole:new N,yaw:0,pitch:0,from:new N,to:new N,fromYaw:0,toYaw:0,s:0,dur:.3,clocked:!1,apex:0,rel:new N,kneeOut:0,sy:0,ankle:new N,q:new ve,toe:0});this.feet=[i(-1),i(1)];const r=o=>({side:o,pitch:0,out:.08,elbow:.2,vp:0,vo:0,ve:0,tp:0,to:.08,te:.2,reach:null,reachW:0,flat:!1});this.arms=[r(-1),r(1)]}get legW(){return Math.max(.5,this.L)}gaitSpeed(t){const e=this.legW;return this.legless?t==="bound"?4.5:t==="run"?3.2:1.6:t==="walk"?Math.sqrt(.09*ye*e):t==="run"?Math.sqrt(.45*ye*e):Math.min(9,Math.sqrt(1.15*ye*e))}get boundFreq(){return Math.max(.85,1/(2*.43*Math.sqrt(this.legW/2)))}strideAt(t){const e=this.legW,n=Math.max(.02,t*t/(ye*e)),i=we(2*n**.3*e,.35*e,2.6*e),r=Math.max(i,t/this.boundFreq);return Nt(i,r,this.running)}get duty(){return Nt(.6,.2,this.running)}standY(t){return this.legless?t+.5:t+this.footH+(this.thigh+this.shin)*.975+.5}stepUpMax(){return .42*this.L+.02}stepDownMax(){return .7*this.L+.02}jumpUpMax(){return .82*this.L}place(t,e,n){this.trip=null,this.act=null,this.pending=null,this.seq=null,this.queued=[],this.rest="stand",this.asleep=!1,this.clockOn=!1,this.speed=0,this.yaw=n,this.wantYaw=null,this.base.set(t,0,e),this.pos.set(t,this.standY(this.world.groundAt(t,e)),e),this.gRef=this.world.groundAt(t,e),this.vy=0,this.lean=0,this.roll=0;for(const i of this.feet)this.neutral(i,this.base,n,i.sole),i.mode="ground",i.yaw=n,i.pitch=0;this.resolveFeet()}busy(){return!!this.trip||!!this.act||!!this.pending||!!this.seq||this.rest!=="stand"}travel(t,e,n){if(this.act&&this.act.kind==="leap"||this.rest!=="stand"||this.seq){this.trip=null,this.pending={cells:t,gait:e,onArrive:n},(this.rest!=="stand"||this.seq)&&this.setRest("stand");return}if(this.act=null,this.feetDown(),!t.length){this.trip=null,n==null||n();return}const i={x:this.base.x,z:this.base.z},r=this.legless?[{kind:"path",pts:[i,...t]}]:this.split(i,t);this.trip={gait:e,legs:r,path:null,s:0,ground:null,settle:0,onArrive:n},this.nextLeg()}stop(){this.trip=null,this.pending=null}turnTo(t){this.wantYaw=t}perform(t,e){if(this.act||this.rest!=="stand"||this.seq)return!1;const n={wave:1.3,cheer:1,spin:1.15,jump:1,sigh:1.4,tap:1.6}[t];return this.act={kind:t,t:0,dur:n,then:e,yaw0:this.yaw},(t==="jump"||t==="cheer")&&(this.act.jump=this.makeJump(!1,this.pos.clone(),t==="jump"?.5+.12*this.L:.28+.06*this.L,this.yaw)),t==="tap"&&(this.tapT=0),!0}setRest(t,e){if(this.legless&&t!=="stand")return!1;const n=this.queued.length?this.queued[this.queued.length-1]:this.seq?this.seq.to:this.rest;if(n===t)return!0;if(n==="stand"&&t!=="stand"){const r=this.restWay(this.base.x,this.base.z,e??this.yaw);if(!r)return!1;t==="lie"&&!r.lie&&(t="kneel"),this.restYaw=r.yaw}else if(t==="lie"&&!this.roomToRest(this.seq||this.rest!=="stand"?this.anchor.yaw:this.restYaw??this.yaw,!0))return!1;const i=[];return t==="lie"&&n==="stand"?i.push("kneel","lie"):t==="kneel"&&n==="lie"?i.push("stand","kneel"):i.push(t),this.queued.push(...i),t!=="stand"&&(this.trip=null,this.act=null),!0}restWay(t,e,n){const i=[0,.4,-.4,.8,-.8,1.2,-1.2,1.6,-1.6,2.1,-2.1,Math.PI].map(a=>n+a),r=i.find(a=>this.roomToRest(a,!0,t,e));if(r!==void 0)return{yaw:r,lie:!0};const o=i.find(a=>this.roomToRest(a,!1,t,e));return o===void 0?null:{yaw:o,lie:!1}}roomAt(t,e,n){return this.legless?null:this.restWay(t,e,n)}roomToRest(t,e,n=this.base.x,i=this.base.z){const r=this.world.groundAt(n,i),o=this.thigh+this.shin,a=Math.cos(t),c=Math.sin(t),l=(u,f)=>Math.abs(this.world.groundAt(n+a*u+c*f,i-c*u+a*f)-r)<.25,h=this.thigh+.4;for(let u=.3;u<h;u+=.3)if(!l(-.45,u)||!l(.45,u))return!1;if(!l(-.45,h)||!l(.45,h)||!l(0,-.45))return!1;if(!e)return!0;for(let u=.3;u<=o*.95+.35;u+=.3)if(!l(-.3,u)||!l(.3,u))return!1;if(!l(-.7,-.5)||!l(.7,-.5)||!l(0,-.6))return!1;for(let u=.1;u<=1.05;u+=.16)for(let f=.5;f<=o*.92+.35;f+=.3)if(!l(.25+Math.sin(u)*f,Math.cos(u)*f))return!1;for(const[u,f]of[[-.8,-.5],[-.8,0],[-.8,.5],[-.6,1.1],[-.3,.9]])if(!l(u,f))return!1;return!0}get lyingStill(){return this.rest==="lie"&&!this.seq}get idle(){return!this.trip&&!this.act&&!this.pending&&!this.seq&&this.rest==="stand"}split(t,e){const n=[];let i=[t],r={x:Math.round(t.x),z:Math.round(t.z)},o=this.world.groundAt(r.x,r.z);for(const a of e){const c=this.world.groundAt(a.x,a.z),l=c-o,h=l>this.stepUpMax()?l>this.jumpUpMax()?"climb":"jump":-l>this.stepDownMax()?"drop":null;if(h){const u={x:Math.sign(a.x-r.x),z:Math.sign(a.z-r.z)},f=h==="climb"?l>this.L?0:.12:h==="jump"?.14:.12;i.push({x:r.x+u.x*f,z:r.z+u.z*f}),n.push({kind:"path",pts:i}),n.push({kind:"edge",type:h,a:r,b:a,ha:o,hb:c}),i=[{x:a.x,z:a.z}]}else i.push(a);r=a,o=c}return i.length>1&&n.push({kind:"path",pts:i}),n}nextLeg(){var n;const t=this.trip,e=t.legs.shift();if(t.settle=0,!e){this.trip=null,(n=t.onArrive)==null||n.call(t);return}if(e.kind==="path"){const i=new Ev(e.pts);if(t.path=i,t.s=0,this.legless){t.ground=[];for(let r=0;r<=i.total+Nr;r+=Nr)i.at(r,this.t1),t.ground.push(this.world.groundAt(this.t1.x,this.t1.z))}else this.clockOn||this.startClock(i.yawAt(.05))}else{t.path=null,this.clockOn=!1;const i={x:Math.sign(e.b.x-e.a.x),z:Math.sign(e.b.z-e.a.z)},r=new N(e.b.x-i.x*.05,this.standY(e.hb),e.b.z-i.z*.05),o=e.type==="climb",a=o?.3+.05*this.L:e.hb>e.ha?.22+.04*this.L:.06+.03*this.L;if(this.act={kind:"leap",t:0,dur:9,yaw0:this.yaw},this.act.jump=this.makeJump(e.type==="drop",r,a,Math.atan2(i.x,i.z)),o){const c={x:(e.a.x+e.b.x)/2,z:(e.a.z+e.b.z)/2},l={x:i.z,z:-i.x};this.act.jump.grip=[-1,1].map(h=>new N(c.x+l.x*h*.3+i.x*.14,e.hb+.01,c.z+l.z*h*.3+i.z*.14))}}}startClock(t){const e=Math.sin(t),n=Math.cos(t),i=o=>(o.sole.x-this.base.x)*e+(o.sole.z-this.base.z)*n;for(const o of this.feet)o.mode==="swing"&&!o.clocked&&(o.mode="ground",o.sole.copy(o.to),o.yaw=o.toYaw);const r=i(this.feet[0])<=i(this.feet[1])?0:1;this.phase=r*.5+this.duty+.001,this.clockOn=!0}update(t){const e=Math.min(t,.05),n=Math.max(1,Math.ceil(e/(1/120)));for(let i=0;i<n;i++)this.step(e/n)}step(t){this.clock+=t,this.airborne=!1;for(const n of this.arms)n.reach=null,n.flat=!1;const e=this.trip;!this.seq&&this.queued.length&&!this.act&&!e&&this.readyToRest()&&this.beginRest(),this.seq||this.rest!=="stand"?this.stepRest(t):this.asleep?this.breath=Ns(this.breath+t/3.6):this.act?this.stepAct(t):e&&e.path?this.legless?this.stepHopper(t,e):this.stepWalk(t,e):this.stepStand(t),this.stepSprings(t),this.resolveFeet(t)}stepWalk(t,e){const n=e.path,i=this.gaitSpeed(e.gait),r=e.gait==="bound",o=r?6.5:e.gait==="run"?7:5,a=r?5:e.gait==="run"?7:6,c=n.total-e.s;let l=Math.min(i,Math.sqrt(2*a*Math.max(0,c-.01))),h=1/0;this.held=!1;for(const y of this.feet)y.mode==="ground"&&(h=Math.min(h,y.sole.y));if(h<1/0){const y=Math.sin(this.yaw),w=Math.cos(this.yaw),P=this.world.groundAt(this.base.x,this.base.z);for(let _=0;_<=.8;_+=.05){const M=this.world.groundAt(this.base.x+y*_,this.base.z+w*_);if(M>Math.max(h,P)+.2){M<=h+this.stepUpMax()+.05&&(l=Math.min(l,Math.sqrt(2*a*2*Math.max(0,_-.18))),this.held=_<.45);break}}}const u=Math.abs(dn(n.yawAt(Math.min(n.total,e.s+.25))-this.yaw));l*=Ln((1.6-u)/1.1),this.speed+=we(l-this.speed,-a*2*t,o*t),c<=.01&&(this.speed=0);const f=this.gaitSpeed("walk"),d=this.gaitSpeed("bound"),m=Ln((this.speed-f*1.05)/(d*.85-f*1.05));this.running+=(m-this.running)*Math.min(1,t*6),e.s=Math.min(n.total,e.s+this.speed*t),n.at(e.s,this.base);const x=n.yawAt(Math.min(n.total,e.s+.25+.3*this.running)),p=Nt(4.5,8,this.running)*t;this.yaw+=we(dn(x-this.yaw),-p,p);const g=f/this.strideAt(f),b=Math.max(g*Nt(.75,1.5,te((u-.3)/.6)),this.speed/this.strideAt(Math.max(this.speed,.15))),T=this.duty,v=this.running>.45;if(this.clockOn){this.phase+=b*t;for(let y=0;y<2;y++){const w=this.feet[y],P=Ns(this.phase-y*.5);P<T?w.mode==="swing"&&w.clocked&&this.touchDown(w,v?1:.55):(w.mode!=="swing"&&(this.liftOff(w,!0,0),this.feet.every(_=>_.mode!=="ground")&&(this.qv+=1.6*this.running)),w.s=(P-T)/(1-T),w.s<.7&&this.aimSwing(w,e,(1-P)/b,T/2/b)),this.footPitch(w,P,T,v)}}if(this.airborne=this.clockOn&&this.feet.every(y=>y.mode==="swing"),this.stretchRest=this.airborne?.09*this.running:0,c<=.01){if(this.clockOn){for(const w of this.feet)w.mode!=="swing"||!w.clocked||(w.clocked=!1,w.dur=Math.max(.08,(1-w.s)*((1-T)/b)),w.s=0,w.from.set(w.ankle.x,w.ankle.y-this.footH,w.ankle.z),w.fromYaw=w.yaw,w.apex=Math.max(w.from.y,w.to.y)+.02);this.clockOn=!1}this.stepStand(t,!0),e.settle+=t,(this.feet.every(w=>w.mode==="ground")&&e.settle>.12||e.settle>.9)&&this.nextLeg();return}this.bodyOver(t,v?"run":"walk",b,T)}liftOff(t,e,n){t.from.copy(t.sole),t.fromYaw=t.yaw,t.to.copy(t.sole),t.toYaw=t.yaw,t.mode="swing",t.clocked=e,t.s=0,t.dur=n,t.apex=t.sole.y+.1,t.sy=t.sole.y}touchDown(t,e){var n;t.mode="ground",t.sole.copy(t.to),t.yaw=t.toYaw,(n=this.onPrint)==null||n.call(this,t.sole,t.yaw),this.qv-=(.9+2.1*this.running)*e,this.vy-=(.3+.8*this.running)*e*Math.sqrt(this.legW/2)}aimSwing(t,e,n,i){const r=e.path,o=this.held?Math.max(this.speed,this.gaitSpeed("walk")*.8):this.speed,a=Math.min(r.total,e.s+Math.max(o*(n+i),this.held?.55:0)),c=r.at(a,this.t1),l=r.yawAt(a>=r.total-.01?r.total:a),h=Math.abs(dn(l-this.yaw))>1.2?this.yaw:l;this.neutral(t,c,h,t.to),t.toYaw=h,this.safeFoot(t.to,h),this.planApex(t,Nt(.06+.1*this.legW,.12+.2*this.legW,this.running))}neutral(t,e,n,i){const r=(this.hipX+.015)*t.side;return i.x=e.x+Math.cos(n)*r,i.z=e.z-Math.sin(n)*r,i.y=this.world.groundAt(i.x,i.z),i}safeFoot(t,e){const n=Math.sin(e),i=Math.cos(e),r=we(.3+.08*this.legW,.35,.55);for(let o=0;o<10;o++){const a=this.world.groundAt(t.x,t.z),c=this.world.groundAt(t.x+n*(Ze+.01),t.z+i*(Ze+.01)),l=this.world.groundAt(t.x+n*r,t.z+i*r),h=this.world.groundAt(t.x+n*(Zn-.02),t.z+i*(Zn-.02));if(c>a+.05||l>a+.25)t.x-=n*.06,t.z-=i*.06;else if(h<a-.05)t.x+=n*.05,t.z+=i*.05;else break}t.y=this.world.groundAt(t.x,t.z)}planApex(t,e){const n=e*we(Math.hypot(t.to.x-t.from.x,t.to.z-t.from.z)/(.45*this.legW),.3,1);let i=Math.max(t.from.y,t.to.y);for(let r=1;r<6;r++){const o=r/6;i=Math.max(i,this.world.groundAt(Nt(t.from.x,t.to.x,o),Nt(t.from.z,t.to.z,o)))}t.apex=i+n}footPitch(t,e,n,i){if(t.mode==="ground"){const r=e/n;i?t.pitch=r<.5?0:-.85*te((r-.5)/.5):t.pitch=r<.12?.22*(1-te(r/.12)):r<.6?0:-.7*te((r-.6)/.4)}else if(t.mode==="swing"){const r=t.s;t.pitch=r<.3?Nt(-.7,-.8,r/.3):r<.82?Nt(-.8,0,te((r-.3)/.52)):(i?-.05:.22)*te((r-.82)/.18)}}bodyOver(t,e,n,i){let r=this.shift;if(e!=="stand"&&this.clockOn)r=-(Nt(.03,.01,this.running)*this.legW*Math.min(1,this.speed/Math.max(.5,this.gaitSpeed("walk"))))*Math.cos(ln*(this.phase-i/2));else{const m=this.feet.filter(x=>x.mode==="ground");m.length===1&&(r=m[0].side*this.hipX*.85)}r+=this.wallNudge();const o=e==="stand"?40:150;this.swayV+=(o*(r-this.sway)-2*Math.sqrt(o)*.9*this.swayV)*t,this.sway+=this.swayV*t,this.pos.x=this.base.x+Math.cos(this.yaw)*this.sway,this.pos.z=this.base.z-Math.sin(this.yaw)*this.sway;const a=this.world.groundAt(this.pos.x,this.pos.z);if(this.legless){this.pos.y+=(a+.5+.006*Math.sin(this.clock*1.7)-this.pos.y)*Math.min(1,t*12);return}const c=this.reachTop();let l=c.soft-.012*this.legW;if(e!=="stand"){let m=-1/0,x=!1;for(const p of this.feet)p.mode==="ground"&&(m=Math.max(m,p.sole.y));for(const p of this.feet)p.mode==="swing"&&p.to.y>m+.2&&(x=!0);m>-1/0&&!x&&(l=Math.min(l,m+this.footH+(this.thigh+this.shin)*.955+.5))}let h=l;if(this.gRef+=(this.world.groundAt(this.base.x,this.base.z)-this.gRef)*Math.min(1,t*12),e==="run"&&this.clockOn){const m=.5/n,x=i/n,p=Math.max(0,m-x),g=ye*p*x/ln,b=this.speed*x/2,T=(this.thigh+this.shin)*.985,v=this.gRef+this.footH+Math.sqrt(Math.max(.25*T*T,T*T-b*b))+.5,y=Ns(this.phase*2),w=x/m;let P;if(y<w)P=v-g*Math.sin(Math.PI*(y/w));else{const _=(y-w)*m;P=v+ye*p/2*_-ye/2*_*_}h=Nt(l,P,te((this.running-.45)/.25))}e==="stand"&&(h-=.006*this.legW*(1+Math.sin(this.clock*1.7)));for(const m of this.feet){if(m.mode!=="ground")continue;const x=this.kneeAt(m,this.t2),p=Math.sin(m.yaw)*.06,g=Math.cos(m.yaw)*.06;(this.world.solidAt(x.x,x.y,x.z)||this.world.solidAt(x.x+p,x.y-.06,x.z+g))&&(h=Math.max(h,c.hard))}const u=e==="run"?ln*7:ln*4.2,f=e==="run"?.9:.72;this.vy+=(u*u*(h-this.pos.y)-2*f*u*this.vy)*t,this.pos.y+=this.vy*t,this.pos.y>c.hard&&(this.pos.y=c.hard,this.vy>0&&(this.vy=0));const d=a+this.footH+.45*this.legW+.5;this.pos.y<d&&(this.pos.y=d,this.vy<0&&(this.vy=0))}plantedAnkle(t,e){const n=Math.sin(t.yaw),i=Math.cos(t.yaw),r=t.pitch,o=r>0?Zn:r<0?Qe:0,a=-o,c=this.footH,l=Math.cos(r),h=Math.sin(r),u=o+a*l-c*h;return e.set(t.sole.x+n*u,t.sole.y+a*h+c*l,t.sole.z+i*u)}kneeAt(t,e){const n=Math.cos(this.yaw),i=Math.sin(this.yaw),r=this.pos.x+n*t.side*this.hipX,o=this.pos.y-.5,a=this.pos.z-i*t.side*this.hipX,c=t.ankle.x-r,l=t.ankle.y-o,h=t.ankle.z-a,u=Math.hypot(c,l,h)||1e-6,f=this.thigh,d=this.shin,m=we(u,Math.abs(f-d)+.001,f+d-1e-4),x=c/u,p=l/u,g=h/u,b=we((f*f+m*m-d*d)/(2*f*m),-1,1),T=Math.sqrt(1-b*b),v=t.kneeOut,y=n*t.side,w=-i*t.side;let P=Math.sin(t.yaw)*(1-v*1.3)+y*(.12+1.2*v),_=Yu(-l,this.legW),M=Math.cos(t.yaw)*(1-v*1.3)+w*(.12+1.2*v);const R=P*x+_*p+M*g;P-=x*R,_-=p*R,M-=g*R;const L=Math.hypot(P,_,M)||1;return e.set(r+f*(b*x+T*P/L),o+f*(b*p+T*_/L),a+f*(b*g+T*M/L))}kneeClear(t,e){const n=Math.sin(t.yaw)*.07,i=Math.cos(t.yaw)*.07,r=a=>{t.kneeOut=a;const c=this.kneeAt(t,this.t2);return this.world.solidAt(c.x,c.y,c.z)||this.world.solidAt(c.x+n,c.y-.07,c.z+i)},o=t.kneeOut;if(!r(o)){t.kneeOut=Math.max(0,o-e*2),r(t.kneeOut)&&(t.kneeOut=o);return}for(let a=.2;a<=1.001;a+=.2)if(o+a<=1.001&&!r(Math.min(1,o+a))||o-a>=-.001&&!r(Math.max(0,o-a)))return;t.kneeOut=o}wallNudge(){const t=-Math.cos(this.yaw),e=Math.sin(this.yaw),n=this.pos.y-.1,i=this.pos.y-.1-this.armLen*.5,r=.5+.14,o=.45+.45*this.running,a=Math.sin(this.yaw)*o,c=Math.cos(this.yaw)*o,l=(p,g)=>this.world.solidAt(p,n,g)||this.world.solidAt(p,i,g),h=p=>l(this.base.x+t*r*p,this.base.z+e*r*p),u=p=>l(this.base.x+t*r*p+a,this.base.z+e*r*p+c),f=h(1),d=h(-1),m=f||u(1)&&!d,x=d||u(-1)&&!f;return this.wallSide=m&&!x?-1:x&&!m?1:0,m&&!x?.22:x&&!m?-.22:0}reachTop(){const t=(this.thigh+this.shin)*.995,e=Math.cos(this.yaw),n=Math.sin(this.yaw),i=(c,l)=>{const h=this.pos.x+e*c.side*this.hipX,u=this.pos.z-n*c.side*this.hipX,f=l.x-h,d=l.z-u,m=t*t-f*f-d*d;return l.y+this.footH+(m>0?Math.sqrt(m):0)+.5};let r=1/0;for(const c of this.feet)c.mode==="ground"&&(r=Math.min(r,i(c,this.plantedAnkle(c,this.t1).setY(this.t1.y-this.footH))));let o=r;for(const c of this.feet){if(c.mode!=="swing")continue;const l=i(c,c.to),h=te((c.s-.55)/.4);h>0&&(o=Math.min(o,o===1/0?l+.3*(1-h):Nt(o,l,h))),c.s>.88&&(r=Math.min(r,l+.02))}const a=this.standY(this.world.groundAt(this.pos.x,this.pos.z));return r===1/0&&(r=a+2),o===1/0&&(o=a),{hard:r,soft:Math.min(o,r)}}stepStand(t,e=!1){if(!e){this.speed=0,this.running+=(0-this.running)*Math.min(1,t*4);const i=this.queued.length&&this.restYaw!==null?this.restYaw:this.wantYaw;i!==null&&(this.yaw+=we(dn(i-this.yaw),-3*t,3*t)),this.shiftIn-=t,this.shiftIn<=0&&(this.shiftIn=3.5+Math.random()*5,this.shift=(Math.random()*2-1)*this.hipX*.55)}let n=!1;for(const i of this.feet)i.mode!=="swing"||i.clocked||(n=!0,i.s=Math.min(1,i.s+t/i.dur),i.pitch=Math.sin(Math.PI*i.s)*-.45,i.s>=1&&this.touchDown(i,.35));if(!n&&!this.legless&&this.feet.every(i=>i.mode==="ground")){let i=null,r=0;for(const o of this.feet){const a=this.neutral(o,this.base,this.yaw,this.t2),c=Math.hypot(a.x-o.sole.x,a.z-o.sole.z)+Math.abs(dn(this.yaw-o.yaw))*.35;c>r&&(r=c,i=o)}if(i&&r>.09+.03*this.legW){const o=i;this.liftOff(o,!1,.2+.06*Math.sqrt(this.legW)),this.neutral(o,this.base,this.yaw,o.to),o.toYaw=this.yaw,this.safeFoot(o.to,this.yaw),this.planApex(o,.05+.04*this.legW)}}if(!e){for(const i of this.feet)i.mode==="ground"&&(i.pitch*=1-Math.min(1,t*8));this.footTap(t)}this.bodyOver(t,"stand",1,.5)}footTap(t){if(this.tapT<0)return;this.tapT+=t;const e=this.feet[0];e.mode==="ground"&&(e.pitch=Math.max(0,Math.sin(this.tapT*ln*2.6))*.42),this.tapT>1.5&&(this.tapT=-1,e.pitch=0)}oneLegPose(t){const e=this.feet[1];if(t>.02&&!this.legless){const n=this.legW;e.mode="body",e.rel.set(-.05*t,Nt(-n*.97,-n*.55,te(t)),Nt(0,.1*n,te(t))),e.pitch=-.75*t}else e.mode==="body"&&this.footDown(e)}footDown(t){t.mode="ground",this.neutral(t,this.base,this.yaw,t.sole),t.yaw=this.yaw,t.pitch=0}feetDown(){for(const t of this.feet)(t.mode==="body"||t.mode==="free")&&this.footDown(t)}pose(t){const e=(o,a,c)=>new N(o,a,c),n=this.thigh+this.shin,i=this.footH,r=this.hipX+.015;switch(t){case"stand":return{head:e(0,i+n*.975+.5,0),lean:0,roll:0,ankles:[e(-r,i,0),e(r,i,0)],feet:[0,0],hands:[null,null],hips:0};case"kneel":{const o=Fr/2,a=Ze-.02,c=a+.07,l=Math.asin(we((a-o)/this.shin,-1,1)),h=Math.max(o+this.thigh*Math.sin(l+.19),c),u=Math.asin(we((h-o)/this.thigh,-1,1)),f=this.thigh*Math.cos(u),d=f-this.shin*Math.cos(l),m=this.hipX+.03,x=-.08,p=e(0,h,0).add(e(0,this.headDrop,0).applyEuler(this.e1.set(x,0,0))),g=this.fromPivot(p,x,0,[e(-m,a,d),e(m,a,d)],[-Math.PI/2,-Math.PI/2],[null,null],1),b=2*Math.max(.12,this.armLen/2-.05)*.92,T=g.head.y-.08-.04;return b*b-T*T>.35*.35&&(g.hands=[this.palm(g.head,x,0,0,-.12,.92),this.palm(g.head,x,0,1,.12,.92)]),g}case"lie":{const a=Math.PI/2,c=e(-.25,.5+Fr,0),l=this.onGround(c,0,a,1,.62,.84,i+.2),h=new ve().setFromEuler(this.e1.set(0,0,a)),f=this.hipOf(c,h,1,1).lerp(l,Math.min(.45,.55/n));return f.y+=Fr/2+.03,{head:c,lean:0,roll:a,ankles:[this.onGround(c,0,a,0,.85,.84,i+.04),l],feet:[-.35,-.35],hands:[this.palm(c,0,a,0,-.3,.8,.05),f],hips:1}}}}restOn(t,e){const n=new ve().setFromEuler(this.e1.set(t,0,e));let i=1/0;for(const r of[-.5,.5])for(const o of[-.5-this.headDrop,.5-this.headDrop])for(const a of[-.5,.5])i=Math.min(i,this.t1.set(r,o,a).applyQuaternion(n).y);return .005-i}onGround(t,e,n,i,r,o,a){const c=new ve().setFromEuler(this.e1.set(e,0,n)),l=this.hipOf(t,c,i,1),h=o*(this.thigh+this.shin),u=l.y-a,f=Math.sqrt(Math.max(0,h*h-u*u));return new N(l.x+Math.sin(r)*f,Math.max(a,l.y-h),l.z+Math.cos(r)*f)}palm(t,e,n,i,r,o,a=.04){const c=new ve().setFromEuler(this.e1.set(e,0,n)),l=this.arms[i].side,h=t.clone().add(new N(l*(.5+Fr/2),-.08,0).applyQuaternion(c)),u=2*Math.max(.12,this.armLen/2-.05)*o,f=h.y-a,d=Math.sqrt(Math.max(0,u*u-f*f));return new N(h.x+Math.sin(r)*d,a,h.z+Math.cos(r)*d)}readyToRest(){return this.rest!=="stand"?!0:(this.restYaw===null||Math.abs(dn(this.restYaw-this.yaw))<.12)&&this.feet.every(e=>e.mode==="ground")}beginRest(){const t=this.queued.shift(),e=this.rest;if(e===t)return;e==="stand"&&(this.landSwings(),this.feetDown(),this.anchor={x:this.base.x,z:this.base.z,g:this.world.groundAt(this.base.x,this.base.z),yaw:this.yaw},this.clockOn=!1);let n;e==="stand"&&t==="kneel"?n=this.kneelDown():e==="kneel"&&t==="lie"?n=this.flopDown():n=this.springUp(e==="lie"?"lie":"kneel"),this.seq=n,this.asleep=!1,this.scratch=null,t==="kneel"&&(this.scratchIn=4+Math.random()*5)}pivotOf(t){return t.head.clone().sub(new N(0,.5,0).applyEuler(this.e1.set(t.lean,0,t.roll)))}fromPivot(t,e,n,i,r,o,a=0){return{head:t.clone().add(new N(0,.5,0).applyEuler(this.e1.set(e,0,n))),lean:e,roll:n,ankles:i,feet:r,hands:o,hips:a}}kneelDown(){var x,p;const t=Math.sqrt(this.legW/2),e=this.thigh+this.shin,n=this.pose("stand"),i=this.pose("kneel"),r=this.pivotOf(n),o=this.pivotOf(i),a=.14*e,c=r.y+.03*e,l=.12*t,h=Math.sqrt(2*ye*(c-(r.y-a))),u=l+h/ye+Math.sqrt(2*(c-o.y)/ye),f=u+.12*t,d=[],m=[];for(let g=0;;g=Math.min(f,g+1/40)){if(g<=l){const b=te(g/l);d.push(this.fromPivot(new N(0,r.y-a*b,0),.08*b,0,[n.ankles[0].clone(),n.ankles[1].clone()],[0,0],[null,null]))}else if(g<u){const b=g-l,T=b/(u-l),v=te(T),y=new N(0,r.y-a+h*b-.5*ye*b*b,o.z*v),w=[0,1].map(M=>n.ankles[M].clone().lerp(i.ankles[M],v)),P=Nt(0,i.feet[0],v),_=T>.5?[((x=i.hands[0])==null?void 0:x.clone())??null,((p=i.hands[1])==null?void 0:p.clone())??null]:[null,null];d.push(this.fromPivot(y,Nt(.08,i.lean,v),0,w,[P,P],_,v))}else d.push(i);if(m.push(g/f),g>=f)break}return{keys:d,at:m,dur:f,t:0,to:"kneel",thud:u/f,thudDone:!1,linear:!0,hit:2.4,dust:!0,push:l/f,pushDone:!1}}flopDown(){var T,v;const t=Math.sqrt(this.legW/2),e=this.pose("kneel"),n=this.pose("lie"),i=this.pivotOf(e),r=this.pivotOf(n),o=(y,w)=>new ve().setFromEuler(this.e1.set(y,0,w)),a=o(e.lean,e.roll),c=o(n.lean,n.roll),l=[0,1].map(y=>e.ankles[y].clone().sub(this.hipOf(e.head,a,y,1)).applyQuaternion(a.clone().invert())),h=[0,1].map(y=>n.ankles[y].clone().sub(this.hipOf(n.head,c,y,1)).applyQuaternion(c.clone().invert())),u=e.lean+.14,f=Math.max(i.y,r.y)+.2,d=.14*t,m=Math.sqrt(2*ye*(f-i.y)),x=d+m/ye+Math.sqrt(2*(f-r.y)/ye),p=x+.2*t,g=[],b=[];for(let y=0;;y=Math.min(p,y+1/40)){if(y<=d){const w=te(y/d);g.push(this.fromPivot(i.clone(),Nt(e.lean,u,w),0,[e.ankles[0].clone(),e.ankles[1].clone()],[e.feet[0],e.feet[1]],[((T=e.hands[0])==null?void 0:T.clone())??null,((v=e.hands[1])==null?void 0:v.clone())??null],1))}else if(y<x){const w=y-d,P=w/(x-d),_=te(P),M=new N(Nt(i.x,r.x,_),i.y+m*w-.5*ye*w*w,Nt(i.z,r.z,_)),R=Nt(u,n.lean,_),L=Nt(0,n.roll,_),U=o(R,L),W=M.clone().add(new N(0,.5,0).applyQuaternion(U)),B=[0,1].map(V=>{const it=Nt(l[V].length(),h[V].length(),_),G=l[V].clone().normalize().lerp(h[V].clone().normalize(),_).normalize().multiplyScalar(it).applyQuaternion(U),et=this.hipOf(W,U,V,1).add(G);return et.y=Math.max(et.y,this.footH+.02),et}),H=[0,1].map(V=>Nt(e.feet[V],n.feet[V],_)),K=[0,1].map(V=>{const it=e.hands[V],G=n.hands[V];return it&&G?it.clone().lerp(G,_):G&&P>.5?G.clone():null});g.push(this.fromPivot(M,R,L,B,H,K,1))}else g.push(n);if(b.push(y/p),y>=p)break}return{keys:g,at:b,dur:p,t:0,to:"lie",thud:x/p,thudDone:!1,linear:!0,hit:1.6,dust:!0,push:d/p,pushDone:!1}}springUp(t){var w,P;const e=Math.sqrt(this.legW/2),n=this.thigh+this.shin,i=this.pose(t),r=this.pose("stand"),o=this.pivotOf(i),a=this.pivotOf(r),c=.12*n,l=a.y+.05*n,h=(t==="lie"?.16:.1)*e,u=Math.sqrt(2*ye*(l-o.y)),f=h+u/ye+Math.sqrt(2*(l-(a.y-c))/ye),d=f+.16*e,m=t==="kneel"?i.lean+.15:i.lean,x=t==="lie"?i.roll-.35:i.roll,p=new ve().setFromEuler(this.e1.set(i.lean,0,i.roll)),g=[0,1].map(_=>i.ankles[_].clone().sub(this.hipOf(i.head,p,_,i.hips))),b=new N(a.x,a.y-c,a.z),T=[0,1].map(_=>r.ankles[_].clone().sub(b.clone().add(new N(this.feet[_].side*this.hipX,0,0)))),v=[],y=[];for(let _=0;;_=Math.min(d,_+1/40)){if(_<=h){const M=te(_/h);v.push(this.fromPivot(o.clone(),Nt(i.lean,m,M),Nt(i.roll,x,M),[i.ankles[0].clone(),i.ankles[1].clone()],[i.feet[0],i.feet[1]],[((w=i.hands[0])==null?void 0:w.clone())??null,((P=i.hands[1])==null?void 0:P.clone())??null],i.hips))}else if(_<f){const M=_-h,R=M/(f-h),L=new N(Nt(o.x,a.x,te(R)),o.y+u*M-.5*ye*M*M,Nt(o.z,a.z,te(R))),U=Nt(m,0,te(R)),W=Nt(x,0,te(Math.min(1,R*1.4))),B=new ve().setFromEuler(this.e1.set(U,0,W)),H=L.clone().add(new N(0,.5,0).applyQuaternion(B)),K=te(Math.min(1,R*1.3)),V=Nt(i.hips,0,K),it=[0,1].map(ft=>{const O=Nt(g[ft].length(),T[ft].length(),R)-.08*n*Math.sin(Math.PI*R),X=g[ft].clone().normalize().lerp(T[ft].clone().normalize(),K).normalize(),F=this.hipOf(H,B,ft,V).addScaledVector(X,O);return F.y=Math.max(F.y,this.footH+.02),F}),G=[0,1].map(ft=>Nt(i.feet[ft],0,te(R))),et=H.y-.08<this.armLen*.92,rt=[0,1].map(ft=>et&&i.hands[ft]&&i.hands[ft].y<.15?i.hands[ft].clone():null);v.push(this.fromPivot(L,U,W,it,G,rt,V))}else{const M=te((_-f)/(d-f));v.push(this.fromPivot(new N(a.x,Nt(a.y-c,a.y,M),a.z),0,0,[r.ankles[0].clone(),r.ankles[1].clone()],[0,0],[null,null]))}if(y.push(_/d),_>=d)break}return{keys:v,at:y,dur:d,t:0,to:"stand",thud:f/d,thudDone:!1,linear:!0,hit:2.4,dust:!0,push:h/d,pushDone:!1}}stepRest(t){var o;const e=this.seq;let n;if(e){e.t+=t;const a=Ln(e.t/e.dur),c=e.linear?a:te(a);let l=0;for(;l<e.at.length-2&&c>e.at[l+1];)l++;const h=Ln((c-e.at[l])/(e.at[l+1]-e.at[l]));if(n=this.mix(e.keys[l],e.keys[l+1],h),e.push!==void 0&&!e.pushDone&&a>=e.push&&(e.pushDone=!0,this.qv+=1.8),!e.thudDone&&a>=e.thud){if(e.thudDone=!0,this.qv-=e.hit??(e.to==="lie"?1.5:2),e.dust)for(let u=0;u<3;u++)this.puffAt(this.pos.x,this.anchor.g,this.pos.z,.08+.04*Math.random());if(e.to==="stand")for(const u of this.feet)(o=this.onPrint)==null||o.call(this,this.t1.set(u.ankle.x,this.anchor.g,u.ankle.z),this.anchor.yaw)}a>=1&&(this.seq=null,this.rest=e.to,e.to==="stand"&&this.standUp())}else n=this.pose(this.rest==="lie"?"lie":"kneel");if(this.rest==="stand"&&!this.seq)return;const i=!e&&this.rest!=="stand";i&&this.rest==="kneel"&&!this.asleep&&n.hands[0]?this.stepScratch(t):this.scratch=null,this.breath=Ns(this.breath+t/(this.rest==="lie"?3.6:4));const r=Math.sin(ln*this.breath);if(this.qRest=i?(this.rest==="lie"?.035:.045)*r:0,i&&this.rest==="lie"&&(n.head.y+=.012*r),i&&this.rest==="kneel"){const a=.5+.5*r;n.head.y+=.05*a,n.lean-=.035*a}this.applyPose(n)}stepScratch(t){const e=this.scratch;if(!e){(this.scratchIn-=t)<=0&&(this.scratch={side:Math.random()<.5?0:1,kind:Math.random()<.5?"chin":"head",t:0,dur:2+.5*this.armLen+Math.random()*.8,w:0,wiggle:0});return}e.t+=t;const n=.5+.25*this.armLen,i=n,r=e.dur-n-i;e.w=e.t<n?te(e.t/n):e.t>e.dur-i?te((e.dur-e.t)/i):1;const o=e.t-n;e.wiggle=o>0&&o<r?Math.sin(ln*(e.kind==="chin"?4.5:5.5)*o)*te(o/.15)*te((r-o)/.15):0,e.t>=e.dur&&(this.scratch=null,this.scratchIn=6+Math.random()*9)}mix(t,e,n){const i=(p,g)=>p&&g?p.clone().lerp(g,n):n<.5?p?p.clone():null:g?g.clone():null,r=Nt(t.lean,e.lean,n),o=Nt(t.roll,e.roll,n),a=(p,g)=>new ve().setFromEuler(this.e1.set(p,0,g)),c=a(t.lean,t.roll),l=a(e.lean,e.roll),h=a(r,o),u=t.head.clone().lerp(e.head,n);u.y=Math.max(u.y,this.restOn(r,o));const f=Nt(t.hips,e.hips,n),d=[0,1].map(p=>{const g=t.ankles[p].clone().sub(this.hipOf(t.head,c,p,t.hips)),b=e.ankles[p].clone().sub(this.hipOf(e.head,l,p,e.hips)),T=Nt(g.length(),b.length(),n),v=Nt(t.ankles[p].y,e.ankles[p].y,n),y=this.hipOf(u,h,p,f),w=Nt(g.x,b.x,n),P=Nt(g.z,b.z,n),_=Math.hypot(w,P),M=y.y-v,R=Math.sqrt(Math.max(0,T*T-M*M)),L=new N(y.x,Math.max(v,y.y-T),y.z);return _>1e-4&&(L.x+=w/_*R,L.z+=P/_*R),L.y=Math.max(L.y,this.footH+.02),L}),m=p=>{const g=t.hands[p],b=e.hands[p];if(!g||!b)return i(g,b);const T=Math.atan2(g.x-t.head.x,g.z-t.head.z),v=Math.atan2(b.x-e.head.x,b.z-e.head.z),y=T+dn(v-T)*n,w=Nt(Math.hypot(g.x-t.head.x,g.z-t.head.z),Math.hypot(b.x-e.head.x,b.z-e.head.z),n);return new N(u.x+Math.sin(y)*w,Nt(g.y,b.y,n),u.z+Math.cos(y)*w)},x=[m(0),m(1)];return x.forEach((p,g)=>{p&&(this.outsideBody(p,u,h,this.arms[g].side),p.y=Math.max(p.y,.03))}),{head:u,lean:r,roll:o,ankles:d,feet:[Nt(t.feet[0],e.feet[0],n),Nt(t.feet[1],e.feet[1],n)],hands:x,hips:f}}outsideBody(t,e,n,i){const r=t.clone().sub(e).applyQuaternion(n.clone().invert()),o=.5+.12;if(Math.abs(r.x)>=o||Math.abs(r.y)>=o||Math.abs(r.z)>=o)return;let a=1/0,c=-1,l=0;for(let h=0;h<3;h++)for(const u of[-1,1]){if(this.t1.set(0,0,0).setComponent(h,u).applyQuaternion(n).y<-.6)continue;const f=o-u*r.getComponent(h)-(h===0&&u===i?.25:0);f<a&&(a=f,c=h,l=u)}c<0||(r.setComponent(c,l*o),t.copy(r.applyQuaternion(n).add(e)))}hipOf(t,e,n,i=0){const r=this.feet[n].side;return t.clone().add(new N(r*this.hipX,-.5-i*this.headDrop,0).applyQuaternion(e))}applyPose(t){const e=this.anchor,n=Math.cos(e.yaw),i=Math.sin(e.yaw),r=(a,c)=>c.set(e.x+n*a.x+i*a.z,e.g+a.y,e.z-i*a.x+n*a.z);this.yaw=e.yaw,this.lean=t.lean,this.leanV=0,this.roll=t.roll,this.hipDrop=t.hips*this.headDrop;const o=this.t2.set(0,.5,0).applyEuler(this.e1.set(t.lean,0,t.roll));r(this.t1.copy(t.head).sub(o).add(this.t2.set(0,.5,0)),this.pos),this.base.set(e.x,0,e.z),this.feet.forEach((a,c)=>{a.mode="free",r(t.ankles[c],a.ankle),a.q.setFromAxisAngle(this.t2.set(0,1,0),e.yaw).multiply(new ve().setFromAxisAngle(this.t2.set(0,0,1),t.roll)).multiply(new ve().setFromAxisAngle(this.t2.set(1,0,0),-t.feet[c])),a.toe=t.feet[c]<-.9?-1.1*te((-t.feet[c]-.9)/.5):t.feet[c]<-.2?.2:0,a.yaw=e.yaw}),this.arms.forEach((a,c)=>{const l=t.hands[c];l&&(a.reach=r(l,new N),a.reachW=1,a.flat=!0)})}standUp(){this.asleep=!1,this.hipDrop=0;for(const t of this.feet)t.mode="ground",t.sole.set(t.ankle.x,this.world.groundAt(t.ankle.x,t.ankle.z),t.ankle.z),t.pitch=0;if(this.lean=0,this.roll=0,this.vy=0,this.pending){const t=this.pending;this.pending=null,this.travel(t.cells,t.gait,t.onArrive)}}envAt(t,e,n=.25,i=.55){const r=t.ground;let o=-1/0;for(let a=Math.max(0,Math.floor((e-n)/Nr));a<=Math.min(r.length-1,Math.ceil((e+i)/Nr));a++)o=Math.max(o,r[a]);return o===-1/0?this.world.groundAt(this.base.x,this.base.z):o}stepHopper(t,e){var l;const n=e.path,i=this.gaitSpeed(e.gait),r=n.total-e.s;this.speed+=we(Math.min(i,Math.sqrt(2*6*Math.max(0,r)))-this.speed,-8*t,6*t),e.s=Math.min(n.total,e.s+this.speed*t),n.at(e.s,this.base),this.yaw+=we(dn(n.yawAt(e.s+.2)-this.yaw),-8*t,8*t);const o=this.phase;this.phase+=t/(e.gait==="bound"?.22:.3),Math.floor(this.phase)!==Math.floor(o)&&(this.qv-=2.6);const a=Ns(this.phase),c=this.envAt(e,e.s,.1,.3);this.pos.set(this.base.x,c+.5+Math.sin(Math.PI*a)*(e.gait==="bound"?.3:.16),this.base.z),this.qRest=.12*Math.sin(Math.PI*a),r<=.01&&(this.trip=null,this.speed=0,this.qRest=0,(l=e.onArrive)==null||l.call(e))}landSwings(){for(const t of this.feet)t.mode==="swing"&&(t.mode="ground",t.sole.copy(t.to),t.yaw=t.toYaw,t.pitch=0)}makeJump(t,e,n,i){this.landSwings();const r=this.feet.map(o=>{const a=this.neutral(o,e,i,new N);return this.safeFoot(a,i),a});return{phase:"gather",t:0,drop:t,to:e.clone(),apex:n,vx:0,vz:0,feet:r,y0:this.pos.y,air:1,yawTo:i,grip:null}}stepAct(t){const e=this.act;e.t+=t;for(const i of this.arms)i.tp=.02,i.to=.07,i.te=.16;if(e.jump){const i=this.stepJump(t,e.jump);e.kind==="cheer"&&this.armsTo(-2.75,.45,.3),i&&this.endAct();return}const n=e.t/e.dur;if(e.kind==="wave"){const i=this.arms[0];i.tp=-2.55,i.to=.42,i.te=.55+.42*Math.sin(e.t*ln*2.6),this.shift=this.hipX*.5}else if(e.kind==="spin"){const i=te(n/.15)*(1-te((n-.86)/.14));this.oneLegPose(i),this.yaw=e.yaw0+wv((n-.12)/.74)*ln,this.feet[0].mode==="ground"&&(this.feet[0].yaw=this.yaw),this.armsTo(-.35,1.25*i+.08,.25)}else if(e.kind==="sigh"){const i=n<.45?Math.sin(Math.PI*Ln(n/.45)):0,r=n>.4?Math.sin(Math.PI*Ln((n-.4)/.6)):0;this.qRest=.08*i-.12*r,this.armsTo(.12*r,.06,.15)}else e.kind==="tap"&&this.tapT<0&&(this.tapT=0);this.stepStand(t),e.t>=e.dur&&(e.kind==="spin"&&(this.yaw=dn(this.yaw),this.feet[0].yaw=this.yaw),this.endAct())}endAct(){var e;const t=this.act;if(this.act=null,this.qRest=0,this.leanRest=0,(e=t.then)==null||e.call(t),t.kind==="leap")if(this.pending){const n=this.pending;this.pending=null,this.travel(n.cells,n.gait,n.onArrive)}else this.trip&&this.nextLeg()}stepJump(t,e){e.t+=t;const n=this.legW,i=e.drop?.1:.14+.05*Math.sqrt(n),r=.08+.02*Math.sqrt(n);if(e.phase==="gather"){const o=te(e.t/i);this.vy=0,this.pos.y=Nt(e.y0,this.reachTop().hard-(e.drop?.08:.22)*n,o),this.leanRest=.16*o,this.qRest=-.24*o,this.armsTo(.95*o,.12,.3),this.yaw+=we(dn(e.yawTo-this.yaw),-9*t,9*t);for(const a of this.feet)a.mode==="ground"&&(a.pitch*=.8);return e.t>=i&&(e.phase="push",e.t=0,e.y0=this.pos.y),!1}if(e.phase==="push"){const o=te(e.t/r);for(const a of this.feet)a.mode==="ground"&&(a.pitch=-.6*o);if(this.pos.y=Nt(e.y0,this.reachTop().hard,o),this.qRest=.22*o,this.armsTo(-1.5*o,.15,.25),e.t>=r){e.phase="air",e.t=0;const a=Math.max(.05,Math.max(this.pos.y,e.to.y)+e.apex+(e.grip?.2*this.L:0)-this.pos.y),c=Math.sqrt(2*a/ye),l=Math.sqrt(2*Math.max(.01,this.pos.y+a-e.to.y)/ye);this.vy=ye*c,e.air=c+l,e.vx=(e.to.x-this.pos.x)/e.air,e.vz=(e.to.z-this.pos.z)/e.air,this.qv+=3.2;for(const h of this.feet)h.mode="body"}return!1}if(e.phase==="air"){this.airborne=!0,this.vy-=ye*t,this.pos.x+=e.vx*t,this.pos.z+=e.vz*t,this.pos.y+=this.vy*t,this.base.x=this.pos.x,this.base.z=this.pos.z,this.sway=0,this.yaw+=we(dn(e.yawTo-this.yaw),-6*t,6*t);const o=e.t/e.air,a=Math.sin(Math.PI*Ln(o*1.15));for(const h of this.feet)h.mode="body",h.rel.set(0,-n*Nt(.97,e.grip?.68:.62,a),n*(e.grip?-.04:.16)*a),h.kneeOut=e.grip?.7*a:0,h.pitch=-.65*a;this.armsTo(-.55,.85,.35),e.grip&&o>.12&&o<.92&&this.arms.forEach((h,u)=>{h.reach=e.grip[u],h.flat=!0,h.reachW=Math.min(1,h.reachW+t*9)}),this.leanRest=e.grip?.18:.05,this.qRest=we(this.vy*.022,-.14,.18);const c=this.world.groundAt(e.to.x,e.to.z),l=this.standY(c);if(e.t>=e.air||this.vy<0&&this.pos.y<=l&&Math.hypot(this.pos.x-e.to.x,this.pos.z-e.to.z)<.3){this.pos.set(e.to.x,l,e.to.z),e.phase="land",e.t=0,this.feet.forEach((u,f)=>{var d;u.mode="ground",u.sole.copy(e.feet[f]).setY(this.world.groundAt(e.feet[f].x,e.feet[f].z)),u.yaw=e.yawTo,(d=this.onPrint)==null||d.call(this,u.sole,u.yaw),u.pitch=0,u.kneeOut=0});const h=Math.abs(this.vy);this.qv-=2.2+.8*h,this.qRest=0,this.leanV+=.6+.15*h;for(let u=0;u<(h>4?5:2);u++)this.puffAt(this.pos.x,c,this.pos.z,.08+.04*Math.random())}return!1}return this.leanRest=0,this.armsTo(-.45,.35,.4),this.base.x+=(e.to.x-this.base.x)*Math.min(1,t*10),this.base.z+=(e.to.z-this.base.z)*Math.min(1,t*10),this.bodyOver(t,"stand",1,.5),e.t>.32}puffAt(t,e,n,i){if(!this.onPuff)return;const r=new N((Math.random()-.5)*1.2,.5+Math.random()*.6,(Math.random()-.5)*1.2);this.onPuff(new N(t+(Math.random()-.5)*.2,e+.06,n+(Math.random()-.5)*.2),r,i)}armsTo(t,e,n){for(const i of this.arms)i.tp=t,i.to=e,i.te=n}stepSprings(t){const e=ln*3.1,n=.34;this.qv+=(e*e*(this.qRest-this.squash)-2*n*e*this.qv)*t,this.squash=we(this.squash+this.qv*t,-.45,.45);const i=220;if(this.sv+=(i*(this.stretchRest-this.stretch)-2*Math.sqrt(i)*.8*this.sv)*t,this.stretch+=this.sv*t,this.seq||this.rest!=="stand")return;const o=!!this.trip&&!this.act,a=(this.speed-this.lastSpeed)/Math.max(t,1e-4);this.lastSpeed=this.speed;const c=o?Nt(.035,.2,this.running)*Math.min(1,this.speed/Math.max(.3,this.gaitSpeed("walk"))):0,l=ln*2.4,h=.5;if(this.leanV+=(l*l*(c+this.leanRest-this.lean)-2*h*l*this.leanV-(o?3.5*we(a,-12,12):0))*t,this.lean=we(this.lean+this.leanV*t,-.6,.7),this.roll=we(-(this.sway/this.hipX)*.045,-.08,.08),o&&this.clockOn){const d=this.running,m=Nt(.3,1,d)*Math.min(1,this.speed/Math.max(.3,this.gaitSpeed("walk")));for(const x of this.arms)x.tp=(x.side===-1?1:-1)*m*Math.cos(ln*(this.phase-.04)),x.to=x.side===this.wallSide?.03:Nt(.07,.2,d),x.te=Nt(.24,1.55,d)+Math.max(0,-x.tp)*.35}else if(!this.act)for(const d of this.arms)d.tp=.02,d.to=.07,d.te=.16;const u=ln*2.3,f=.42;for(const d of this.arms)d.vp+=(u*u*(d.tp-d.pitch)-2*f*u*d.vp)*t,d.vo+=(u*u*(d.to-d.out)-2*f*u*d.vo)*t,d.ve+=(u*u*(d.te-d.elbow)-2*f*u*d.ve)*t,d.pitch+=d.vp*t,d.out+=d.vo*t,d.elbow=Math.max(0,d.elbow+d.ve*t),d.reach||(d.reachW=Math.max(0,d.reachW-t*3))}resolveFeet(t=0){const e=Math.cos(this.yaw),n=Math.sin(this.yaw);for(const i of this.feet){if(i.mode==="swing"){const r=i.s,o=te(r),a=Nt(i.from.x,i.to.x,o),c=Nt(i.from.z,i.to.z,o),l=Math.max(.04,i.apex-Math.max(i.from.y,i.to.y)),h=Nt(i.from.y,i.to.y,te((r-.15)/.75))+l*Math.pow(Math.sin(Math.PI*r),1.3),u=i.to.x-i.from.x,f=i.to.z-i.from.z,d=Math.hypot(u,f)||1,m=u/d,x=f/d,p=Math.min(Ze+.08+.35*(1-r),(1-o)*d+Ze+.04);let g=-1/0;for(let P=0;P<=4;P++){const _=Zn-.04+(p-Zn+.04)*(P/4);g=Math.max(g,this.world.groundAt(a+m*_,c+x*_))}const b=g+.07*(1-te((r-.82)/.18)),T=Math.max(h,r>.97?i.to.y:b);i.sy=T>i.sy?T:i.sy+(T-i.sy)*Math.min(1,t*30),r<.02&&(i.sy=Math.max(T,i.from.y)),i.ankle.set(a,i.sy+this.footH,c),i.yaw=i.fromYaw+dn(i.toYaw-i.fromYaw)*o,this.kneeClear(i,t);const v=Math.sin(i.yaw),y=Math.cos(i.yaw),w=i.ankle.y;for(let P=0;P<8;P++){const _=i.ankle.y-this.footH*.5,M=this.kneeAt(i,this.t2),R=M.x+v*.07,L=M.z+y*.07,U=(this.world.solidAt(M.x,M.y,M.z)||this.world.solidAt(R,M.y-.07,L))&&this.world.groundAt(R,L)<M.y+.4;if(!this.world.solidAt(i.ankle.x,_,i.ankle.z)&&!this.world.solidAt(i.ankle.x+v*Ze,_,i.ankle.z+y*Ze)&&!U||i.ankle.y-w>.45)break;i.ankle.y+=.06}i.toe=Nt(i.pitch<0?i.pitch:0,.28*Math.sin(Math.PI*r),te(r/.35))}else if(i.mode==="ground"){this.plantedAnkle(i,i.ankle),this.kneeClear(i,t);for(let r=0;r<2;r++){const o=this.kneeAt(i,this.t3),a=(o.x-i.ankle.x)*Math.sin(i.yaw)+(o.z-i.ankle.z)*Math.cos(i.yaw),c=Math.atan2(a,o.y-i.ankle.y),l=qu-.05-c;if(i.pitch<=l)break;i.pitch=l,this.plantedAnkle(i,i.ankle)}i.toe=i.pitch<0?i.pitch:0}else if(i.mode==="body"){const r=i.side*(this.hipX+i.rel.x),o=i.rel.z;i.ankle.set(this.pos.x+e*r+n*o,this.pos.y-.5+i.rel.y,this.pos.z-n*r+e*o),i.ankle.y=Math.max(i.ankle.y,this.world.groundAt(i.ankle.x,i.ankle.z)+this.footH+.01),i.yaw=this.yaw,i.toe=.2;const a=Math.sin(this.yaw),c=Math.cos(this.yaw),l=Math.cos(i.pitch),h=Math.sin(i.pitch);for(let u=0;u<8;u++){const f=i.ankle.x+a*l*Ze,d=i.ankle.y-this.footH+h*Ze,m=i.ankle.z+c*l*Ze;if(!this.world.solidAt(f,d,m)&&!this.world.solidAt(i.ankle.x,i.ankle.y-this.footH,i.ankle.z))break;i.ankle.x-=a*.05,i.ankle.z-=c*.05}}if(i.mode!=="free"){i.q.setFromEuler(this.e1.set(-i.pitch,i.yaw,0,"YXZ"));const r=i.pitch,o=Math.cos(r),a=Math.sin(r),c=Math.sin(i.yaw),l=Math.cos(i.yaw),h=i.ankle.x+c*o*Qe,u=i.ankle.z+l*o*Qe,f=i.ankle.y-this.footH*o+Qe*a,d=(this.world.groundAt(h+c*(Ze-Qe),u+l*(Ze-Qe))+.005-f)/(Ze-Qe);d>-1&&(i.toe=Math.min(i.toe,r-Math.asin(we(d,-1,1))))}}}}const ca=5,Av=4935768,Dh=.3,Rv=14;function Cv(){const s=new ii(.11,Qe-Zn-.01).rotateX(-Math.PI/2).translate(0,0,(Qe+Zn)/2-.005),t=new ii(.11,Ze-Qe-.02).rotateX(-Math.PI/2).translate(0,0,(Ze+Qe)/2+.01),e=bv([s,t]);return s.dispose(),t.dispose(),e}const Uh=72,Pv=2.6;let Fs=null;function Lv(){if(Fs)return Fs;const s=document.createElement("canvas");s.width=s.height=64;const t=s.getContext("2d");return t.fillStyle="#111",t.font='700 54px "Space Mono", "Courier New", monospace',t.textAlign="center",t.textBaseline="middle",t.fillText("Z",32,34),Fs=new Tl(s),Fs.colorSpace=Le,Fs}class Iv{constructor(){I(this,"group",new Pe);I(this,"puffs",[]);I(this,"dust");I(this,"zeds",[]);I(this,"prints",[]);I(this,"printGeo",Cv());I(this,"own",[]);I(this,"m",new ne);I(this,"q",new ve);I(this,"s",new N);const t=new xn(1,1,1),e=new no({color:15987958});this.dust=new Xr(t,e,Uh),this.dust.count=0,this.dust.frustumCulled=!1,this.group.add(this.dust),this.own.push(t,e,this.printGeo)}print(t,e){const n=new Qn({color:Av,transparent:!0,opacity:Dh,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),i=new Ce(this.printGeo,n);if(i.position.set(t.x,t.y+.004,t.z),i.rotation.y=e,i.renderOrder=1,this.group.add(i),this.prints.push({m:i,mat:n,age:0}),this.prints.length>ca+6){const r=this.prints.shift();r.m.removeFromParent(),r.mat.dispose()}}puff(t,e,n){this.puffs.length>=Uh&&this.puffs.shift(),this.puffs.push({p:t.clone(),v:e.clone(),age:0,life:.45+Math.random()*.3,size:n,spin:new vn(Math.random(),Math.random(),Math.random())})}z(t){const e=new au({map:Lv(),transparent:!0,depthWrite:!1,opacity:0}),n=new Ad(e);this.group.add(n),this.zeds.push({s:n,age:0,life:Pv,x0:t.x,y0:t.y,z0:t.z,drift:Math.random()<.5?-1:1})}update(t){let e=0;this.puffs=this.puffs.filter(i=>(i.age+=t)<i.life);for(const i of this.puffs){i.v.multiplyScalar(Math.exp(-3.2*t)),i.v.y-=.6*t,i.p.addScaledVector(i.v,t);const r=i.age/i.life,o=r<.18?r/.18:1-(r-.18)/.82;this.s.setScalar(Math.max(.001,i.size*Math.pow(o,.8))),i.spin.x+=t*1.5,this.q.setFromEuler(i.spin),this.m.compose(i.p,this.q,this.s),this.dust.setMatrixAt(e++,this.m)}this.dust.count=e,this.dust.instanceMatrix.needsUpdate=!0;const n=this.prints.length;this.prints=this.prints.filter((i,r)=>{i.age+=t;const o=n-1-r,a=o<ca?1:Math.max(0,1-(o-ca+1)/3),c=1-Math.min(1,Math.max(0,(i.age-Rv)/3)),l=Dh*a*c;return i.mat.opacity+=(l-i.mat.opacity)*Math.min(1,t*5),l<=0&&i.mat.opacity<.005?(i.m.removeFromParent(),i.mat.dispose(),!1):!0}),this.zeds=this.zeds.filter(i=>{i.age+=t;const r=i.age/i.life;return r>=1?(i.s.removeFromParent(),i.s.material.dispose(),!1):(i.s.position.set(i.x0+i.drift*(.25*r+.06*Math.sin(r*7)),i.y0+.75*r,i.z0),i.s.scale.setScalar(.14+.2*r),i.s.material.opacity=Math.min(1,r*5)*(1-Math.max(0,(r-.6)/.4)),!0)})}dispose(){for(const t of this.zeds)t.s.material.dispose();for(const t of this.prints)t.mat.dispose();this.group.removeFromParent();for(const t of this.own)t.dispose()}}const gi=.12,zs={thick:.07,long:.15,wide:.135},Nh=2.6,Dv=2.9,Os=2.5,zr={back:-.55,fwd:2.1,inward:-.22,out:1},ss={up:-qu,down:.95,side:.3,twist:.35},ha={flex:1.55,side:.45,turn:1.6},Se=(s,t,e)=>s<t?t:s>e?e:s,ua=(s,t,e)=>s+(t-s)*e;function Or(s,t,e,n){const i=new xn(gi,s-t,gi).translate(0,(s+t)/2,0);return n.push(i),new Ce(i,e)}function fa(s,t,e){return e.push(s),new Ce(s,t)}const cn=new N,Je=new N,Dn=new N,ho=new ne;function uo(s,t,e){return Je.copy(s).negate().normalize(),Dn.copy(t).addScaledVector(Je,-t.dot(Je)),Dn.lengthSq()<1e-8&&Dn.set(1,0,0).cross(Je),Dn.normalize(),cn.crossVectors(Je,Dn),ho.makeBasis(cn,Je,Dn),e.setFromRotationMatrix(ho)}const hs=new N,Pn=new N,_i=new N,Yr=new N,ll=new N,Fh=new ve;function Ai(s,t,e,n,i,r,o,a=Math.PI){hs.subVectors(t,s);const c=hs.length(),l=Math.sqrt(Math.max(0,e*e+n*n-2*e*n*Math.cos(Math.PI-a))),h=Se(c,Math.max(Math.abs(e-n)+.001,l),e+n-1e-4);c<1e-6?Pn.set(0,-1,0):Pn.copy(hs).divideScalar(c);const u=Se((e*e+h*h-n*n)/(2*e*h),-1,1),f=Math.sqrt(1-u*u);_i.copy(i).addScaledVector(Pn,-i.dot(Pn)),_i.lengthSq()<1e-8&&_i.set(0,0,1).addScaledVector(Pn,-Pn.z),_i.normalize(),Yr.copy(s).addScaledVector(Pn,e*u).addScaledVector(_i,e*f),ll.copy(s).addScaledVector(Pn,h),uo(hs.subVectors(Yr,s),i,r),uo(ll.sub(Yr),i,Fh),o.copy(r).invert().multiply(Fh)}const di=new vn,Uv=new N;function zh(s,t,e,n,i="XYZ"){di.setFromQuaternion(s,i);const r=Se(di.x,t[0],t[1]),o=Se(di.y,e[0],e[1]),a=Se(di.z,n[0],n[1]);(r!==di.x||o!==di.y||a!==di.z)&&s.setFromEuler(di.set(r,o,a,i))}class Nv{constructor(t,e,n){I(this,"root",new Pe);I(this,"fx",new Iv);I(this,"motion");I(this,"placed",!1);I(this,"face");I(this,"world");I(this,"pelvis",new Pe);I(this,"turn",new Pe);I(this,"squash",new Pe);I(this,"legs",[]);I(this,"arms",[]);I(this,"solid",[]);I(this,"own",[]);I(this,"look",null);I(this,"targets",[null,null]);I(this,"talkCh",null);I(this,"clock",0);I(this,"lastBreath",0);I(this,"showing",null);I(this,"yawLook",0);I(this,"pitchLook",0);I(this,"a2");I(this,"v1",new N);I(this,"v2",new N);I(this,"v3",new N);I(this,"v4",new N);I(this,"v5",new N);I(this,"qa",new ve);I(this,"qb",new ve);I(this,"qc",new ve);I(this,"qd",new ve);I(this,"qm",new ne);I(this,"headCap",0);I(this,"scratchSeen",null);I(this,"sc1",new N);I(this,"sc2",new N);I(this,"sc3",new N);I(this,"qf",new ve);I(this,"pts",[0,1,2,3,4].map(()=>new N));I(this,"kg",[0,1,2,3,4,5].map(()=>new N));this.world=n,this.motion=new Tv(e,n),this.motion.onPuff=(c,l,h)=>this.fx.puff(c,l,h),this.motion.onPrint=(c,l)=>this.fx.print(c,l),this.a2=Math.max(.12,this.motion.armLen/2-.05),this.face=new Sv(t),this.motion.headDrop=this.face.drop,this.root.add(this.pelvis),this.pelvis.add(this.turn),this.turn.add(this.squash),this.face.head.scale.setScalar(1/16),this.face.head.position.y=.5,this.squash.add(this.face.head),this.solid.push(...this.face.solid);const[i,r,o]=Nl(t),a=new Gt().setRGB(i/255,r/255,o/255,Le);this.buildLimbs(a)}buildLimbs(t){const e=this.motion,n=new no({color:t});this.own.push(n);const i=gi/2;if(!e.legless)for(const o of[-1,1]){const a=new Pe,c=new Pe,l=new Pe,h=new Pe;a.position.set(o*e.hipX,0,0);const u=Or(0,-e.thigh,n,this.own);a.add(u),c.position.y=-e.thigh;const f=Or(i,-e.shin-i,n,this.own);c.add(f),l.position.y=-e.shin;const d=fa(new xn(gi,e.footH,Qe-Zn).translate(0,-e.footH/2,(Qe+Zn)/2),n,this.own);h.position.set(0,-e.footH,Qe);const m=fa(new xn(gi,e.footH*.75,.08).translate(0,e.footH*.375,.04),n,this.own);h.add(m),l.add(d,h),c.add(l),a.add(c),this.pelvis.add(a),this.legs.push({hip:a,knee:c,ankle:l,toes:h,side:o}),this.solid.push(u,f,d,m)}const r=this.a2;for(const o of[-1,1]){const a=new Pe,c=new Pe,l=new Pe,h=Or(i,-r,n,this.own);a.add(h),c.position.y=-r;const u=Or(i,-r-i,n,this.own);c.add(u),l.position.y=-r;const f=fa(new xn(zs.thick,zs.long,zs.wide).translate(0,-.15/2-.02,0),n,this.own);l.add(f),c.add(l),a.add(c),this.turn.add(a);const d=()=>new ve;this.arms.push({shoulder:a,elbow:c,wrist:l,side:o,aimW:0,fk:[d(),d()],ik:[d(),d()],push:0,pushTo:new N,pushE:0,pushETo:new N,pushN:new N,flatW:0,palm:new N,palmDir:new N(0,0,1)}),this.solid.push(h,u,f)}}get pos(){return this.motion.pos}get yaw(){return this.motion.yaw}headCentre(t=new N){return this.squash.localToWorld(t.set(0,.5,0))}headTop(t=new N){return this.headCentre(t).add(this.v4.set(0,.85,0))}hit(t){return t.intersectObjects(this.solid,!1).some(e=>{for(let n=e.object;n;n=n.parent)if(!n.visible)return!1;return!0})}place(t,e,n){this.motion.place(t,e,n),this.placed=!0}travel(t,e,n){this.motion.travel(t,e,n)}stop(){this.motion.stop()}busy(){return this.motion.busy()}turnTo(t){this.motion.turnTo(t)}perform(t,e){return this.motion.perform(t,e)}rest(t,e){return this.motion.setRest(t,e)}roomAt(t,e,n){return this.motion.roomAt(t,e,n)}get resting(){return this.motion.rest}sleep(t){this.motion.asleep=t}lookAt(t){this.look=t?(this.look??new N).copy(t):null}point(t,e){this.targets=[t,e]}talk(t){this.talkCh=t}feel(t,e){this.face.feel(t,e)}mood(t){this.face.setMood(t)}blink(){this.face.blink()}get feeling(){return this.face.current}update(t){const e=this.motion;this.clock+=t,e.update(t);const n=this.root.parent??this.root;n.position.copy(e.pos),n.rotation.set(0,e.yaw,0),this.pelvis.position.set(0,-.5,0),this.pelvis.rotation.set(e.lean,0,e.roll);for(const d of this.legs)d.hip.position.y=-e.hipDrop;n.updateMatrixWorld(!0);let i=null;this.look?(i=this.pelvis.worldToLocal(this.v1.copy(this.look)).sub(this.v2.set(0,.5,0)),this.yawLook+=(Se(Math.atan2(i.x,i.z),-.55,.55)-this.yawLook)*Math.min(1,t*6),this.pitchLook+=(Se(-Math.atan2(i.y,Math.hypot(i.x,i.z)),-.35,.3)-this.pitchLook)*Math.min(1,t*6)):(this.yawLook*=1-Math.min(1,t*3),this.pitchLook*=1-Math.min(1,t*3)),e.airborne&&(this.yawLook*=.9,this.pitchLook*=.9),e.scratch&&e.scratch!==this.scratchSeen&&this.feel(e.scratch.kind==="chin"?"thinking":"doubt",e.scratch.dur),this.scratchSeen=e.scratch,this.face.update(t,i?i.applyAxisAngle(this.v2.set(0,1,0),-this.yawLook):null,this.talkCh,e.asleep?e.breath:null),this.headCap+=((e.feet.some(d=>d.mode==="free")&&!e.lyingStill?1:0)-this.headCap)*Math.min(1,t*5);const r=ua(this.pitchLook+this.face.nod,Math.min(this.pitchLook+this.face.nod,.03),this.headCap),o=ua(this.face.roll,Se(this.face.roll,-.03,.03),this.headCap),a=1-Se(Math.abs(e.roll)/.6,0,1);this.turn.rotation.set(r*a,this.yawLook*a,o*a,"YXZ");const c=1+e.squash,l=1+e.stretch,h=c/Math.sqrt(l),u=l/Math.sqrt(c),f=1/(Math.sqrt(c)*Math.sqrt(l));this.squash.scale.set(f,h,u);for(const d of this.arms)d.shoulder.position.set(d.side*(.5*f+gi/2),.42*h,0);this.pelvis.updateMatrixWorld(!0),this.solveLegs(),this.solveArms(t),e.asleep&&(this.lastBreath<.55&&e.breath>=.55&&this.fx.z(this.headCentre(this.v1).add(this.v2.set(0,.62,0))),this.lastBreath=e.breath),this.fx.update(t)}inHead(t,e,n=!1){const i=this.squash.worldToLocal(this.v4.copy(t)),r=n?this.motion.headDrop:this.motion.hipDrop;return Math.abs(i.x)<.5+e&&i.y>.02-r&&i.y<1+e-r&&Math.abs(i.z)<.5+e}outOfBody(t,e,n,i){const r=t.parent,o=i?this.motion.hipDrop:this.motion.headDrop;for(let a=0;a<24;a++){let c=-1,l=0;const h=e(),u=this.v3;for(let x=0;x<h.length;x++){const p=this.squash.worldToLocal(this.v4.copy(h[x]));if(!(Math.abs(p.x)<.5+n&&p.y>.02-o&&p.y<1+n-o&&Math.abs(p.z)<.5+n))continue;const g=[[.5+n-p.x,1,0,0],[p.x+.5+n,-1,0,0],[.5+n-p.z,0,0,1],[p.z+.5+n,0,0,-1],[1+n-o-p.y,0,1,0]];i&&g.push([p.y+o,0,-1,0]);let b=null;for(const T of g)!i&&this.v2.set(T[1],T[2],T[3]).transformDirection(this.squash.matrixWorld).y<-.6||(!b||T[0]<b[0])&&(b=T);b&&b[0]>l&&(l=b[0],c=x,u.set(b[1],b[2],b[3]))}if(c<0)return;u.transformDirection(this.squash.matrixWorld);const f=r.worldToLocal(this.v1.copy(h[c])),d=this.v2.copy(u).transformDirection(this.qm.copy(r.matrixWorld).invert()),m=_i.subVectors(f,t.position).cross(d);if(m.lengthSq()<1e-8)return;t.quaternion.premultiply(this.qb.setFromAxisAngle(m.normalize(),.07))}}legPoints(t,e){const n=this.motion;return t.hip.updateMatrixWorld(!0),t.hip.localToWorld(e[0].set(0,-.4*n.thigh,0)),t.hip.localToWorld(e[1].set(0,-.75*n.thigh,0)),t.knee.getWorldPosition(e[2]),t.knee.localToWorld(e[3].set(0,-.5*n.shin,0)),t.ankle.getWorldPosition(e[4]),e}solveLegs(){const t=this.motion,e=this.pelvis.getWorldQuaternion(this.qa),n=this.qc.copy(e).invert();this.legs.forEach((i,r)=>{const o=t.feet[r],a=this.pelvis.worldToLocal(this.v1.copy(o.ankle)),c=this.v3.set(0,0,1).applyQuaternion(o.q).applyQuaternion(n),l=Math.atan2(c.x,c.z),h=i.side>0?Se(l,-.2,.7):Se(l,-.7,.2);if(h!==l){const w=Math.hypot(c.x,c.z);c.x=Math.sin(h)*w,c.z=Math.cos(h)*w}let u=o.q;if(o.mode!=="free"&&Math.abs(l-h)>ss.twist*.85){const w=l-h-Math.sign(l-h)*ss.twist*.85;u=this.qf.setFromAxisAngle(Dn.set(0,1,0),-w).multiply(o.q)}const f=o.kneeOut,d=this.v2.copy(c).multiplyScalar(1-f*1.3).add(cn.set(i.side*(.12+1.2*f),Yu(-a.y,t.L),0)),m=Uv.set(0,1,0).applyQuaternion(n);if(o.mode==="free"){const w=Se(Math.abs(t.roll)/(Math.PI/2),0,1);d.set(0,0,ua(.6,1,w)).addScaledVector(m,1-.85*w);const P=Se(-a.z/.25,0,1);d.z+=1.6*P,d.addScaledVector(m,-.9*P)}const x=o.mode==="free"?Dv:Nh;Ai(i.hip.position,a,t.thigh,t.shin,d,i.hip.quaternion,i.knee.quaternion,x),o.mode!=="free"?this.kneeBelowHip(i,a,i.hip.position.y-.1,m.set(i.side,0,0)):this.kneeBelowHip(i,a,i.hip.position.y+.02,m.add(cn.set(i.side*.3,0,0)),x);const p=this.v3.set(0,-1,0).applyQuaternion(i.hip.quaternion),g=Math.atan2(p.z,-p.y),b=Math.asin(Se(p.x*i.side,-1,1)),T=Se(g,zr.back,zr.fwd),v=Se(b,o.mode==="free"?-.45:zr.inward,zr.out);if(T!==g||v!==b){const w=Je.set(i.side*Math.sin(v),-Math.cos(v)*Math.cos(T),Math.cos(v)*Math.sin(T));i.hip.quaternion.premultiply(this.qb.setFromUnitVectors(p,w))}o.mode==="free"&&this.kneeOverGround(i,a,x),this.outOfBody(i.hip,()=>this.legPoints(i,this.pts),.075,!0);const y=this.qb.copy(e).multiply(i.hip.quaternion).multiply(i.knee.quaternion);i.ankle.quaternion.copy(y.invert()).multiply(u),zh(i.ankle.quaternion,[ss.up,ss.down],[-.35,ss.twist],[-.3,ss.side]),i.toes.rotation.set(Se(o.toe,-1.2,.5),0,0)})}kneeBelowHip(t,e,n,i,r=Nh){const o=this.motion,a=t.hip.position,c=this.v5.copy(e),l=this.v4.set(0,-o.thigh,0).applyQuaternion(t.hip.quaternion).add(a);if(l.y<=n)return;const h=this.v3.subVectors(c,a),u=h.length();if(u<1e-4)return;h.divideScalar(u);const f=this.v2.copy(a).addScaledVector(h,h.dot(this.v1.subVectors(l,a))),d=this.v1.subVectors(l,f),m=d.length();if(m<1e-4)return;d.divideScalar(m);const x=this.v4.crossVectors(h,d).normalize();x.dot(i)<0&&x.negate();let p=Math.PI/2;for(let b=1;b<=18;b++){const T=b/18*(Math.PI/2);if(f.y+m*(Math.cos(T)*d.y+Math.sin(T)*x.y)<=n){p=T;break}}const g=d.multiplyScalar(Math.cos(p)).addScaledVector(x,Math.sin(p));Ai(a,c,o.thigh,o.shin,g,t.hip.quaternion,t.knee.quaternion,r)}kneeOverGround(t,e,n){const i=this.motion,[r,o,a,c,l,h]=this.kg;if(t.hip.updateMatrixWorld(!0),t.knee.getWorldPosition(r),r.y>=this.world.groundAt(r.x,r.z)+gi/2)return;const u=t.hip.position,f=h.set(0,-i.thigh,0).applyQuaternion(t.hip.quaternion).add(u);l.subVectors(e,u);const d=l.length();if(d<1e-4)return;l.divideScalar(d),o.copy(u).addScaledVector(l,l.dot(a.subVectors(f,u))),a.subVectors(f,o);const m=a.length();if(m<1e-4)return;a.divideScalar(m),c.crossVectors(l,a).normalize(),c.dot(r.set(0,1,0).applyQuaternion(this.pelvis.getWorldQuaternion(this.qd).invert()))<0&&c.negate();let x=-1;for(let g=1;g<=24&&x<0;g++){const b=g/24*Math.PI;this.pelvis.localToWorld(h.copy(o).addScaledVector(a,m*Math.cos(b)).addScaledVector(c,m*Math.sin(b))),h.y>=this.world.groundAt(h.x,h.z)+gi/2&&(x=b)}if(x<0)return;const p=h.copy(a).multiplyScalar(Math.cos(x)).addScaledVector(c,Math.sin(x));Ai(u,e,i.thigh,i.shin,p,t.hip.quaternion,t.knee.quaternion,n)}armPoints(t,e){const n=this.a2;return t.shoulder.updateMatrixWorld(!0),t.shoulder.localToWorld(e[0].set(0,-.6*n,0)),t.elbow.getWorldPosition(e[1]),t.elbow.localToWorld(e[2].set(0,-.5*n,0)),t.wrist.getWorldPosition(e[3]),t.wrist.localToWorld(e[4].set(0,-.15/2-.02,0)),e}solveArms(t){const e=this.motion,n=this.a2,i=this.a2,r=n+i,o=d=>this.turn.worldToLocal(this.v1.copy(d)).x<0?0:1,a=[null,null],[c,l]=this.targets;if(c&&(a[o(c)]=c),l){const d=o(l);a[d]?Math.abs(this.turn.worldToLocal(this.v1.copy(l)).x)<.8?a[1-d]=l:Math.floor(this.clock/2.6)%2===1&&(a[d]=l):a[d]=l}this.showing=c&&a.includes(c)?a.includes(l)&&Math.floor(this.clock/2.6)%2===1?l:c:l;const h=e.idle,f=e.feet.some(d=>d.mode==="free")?this.turn.getWorldQuaternion(this.qd).invert():null;this.arms.forEach((d,m)=>{const x=e.arms[m],p=this.v2.set(d.side*.5,-.35,-1);if(f){p.set(0,1,0).applyQuaternion(f);const M=this.v3.set(0,.5,0).sub(d.shoulder.position).normalize();p.dot(M)>.3&&p.set(0,1,0),p.multiplyScalar(.45).add(Je.set(0,0,-1))}d.fk[0].setFromEuler(new vn(x.pitch,0,d.side*Math.max(.04,x.out))),d.fk[1].setFromAxisAngle(cn.set(1,0,0),-Se(x.elbow,0,Os));let g=0,b=!1;const T=x.reach??(h?a[m]:null);if(T){const M=d.shoulder.position;if(x.reach&&x.flat){b=!0;const R=d.shoulder.getWorldPosition(this.v3),L=d.elbow.getWorldPosition(Yr);d.palm.copy(T);const U=hs.set(T.x-R.x,0,T.z-R.z);U.lengthSq()>1e-6&&U.normalize();const W=Pn.set(T.x-L.x,0,T.z-L.z).addScaledVector(U,.25);W.lengthSq()<1e-4&&W.set(Math.sin(e.yaw),0,Math.cos(e.yaw)),W.normalize(),d.palmDir.lerp(W,d.flatW<.05?1:Math.min(1,t*10)).normalize();const B=this.v1.copy(T).add(Je.set(0,zs.thick/2+.01,0)).addScaledVector(d.palmDir,-.095),H=this.turn.worldToLocal(B);Ai(M,H,n,i,p,d.ik[0],d.ik[1],Os)}else{const R=this.turn.worldToLocal(this.v1.copy(T));if(x.reach||T===l){if(T===l){const L=d.shoulder.getWorldPosition(ll),U=hs.set(Se(L.x,l.x-.5,l.x+.5),Se(L.y,l.y-.5,l.y+.5),Se(L.z,l.z-.5,l.z+.5));U.addScaledVector(Pn.subVectors(L,U).normalize(),.06),this.turn.worldToLocal(R.copy(U))}R.distanceTo(M)<=r*.98||x.reach?Ai(M,R,n,i,p,d.ik[0],d.ik[1],Os):this.pointAlong(d,R)}else this.pointAlong(d,R)}g=x.reach?x.reachW:1}const v=e.scratch;if(v&&v.side===m&&v.w>0&&x.reach){const M=d.shoulder.position,R=e.headDrop,L=this.turn.worldToLocal(this.sc1.copy(x.reach).add(Je.set(0,zs.thick/2+.01,0)).addScaledVector(d.palmDir,-.095)),U=v.kind==="chin"?this.sc2.set(d.side*(.14+.03*v.wiggle),-R-.15,.62):this.sc2.set(d.side*.4,1.14-R,-.04+.05*v.wiggle);let W=L;if(v.kind==="chin")W=L.lerp(U,v.w);else{const B=this.sc3.set(d.side*.9,1.25-R,.1),H=v.w,K=1-H;W=L.multiplyScalar(K*K).addScaledVector(B,2*H*K).addScaledVector(U,H*H)}p.lerp(v.kind==="chin"?cn.set(d.side,-.3,.1):cn.set(d.side,.35,-.15),v.w),Ai(M,W,n,i,p,d.ik[0],d.ik[1],Os),b=v.w<.05,g=1}d.aimW+=((T?g:0)-d.aimW)*Math.min(1,t*(x.reach?30:7)),d.flatW+=((b?1:0)-d.flatW)*Math.min(1,t*12),d.shoulder.quaternion.slerpQuaternions(d.fk[0],d.ik[0],d.aimW),d.elbow.quaternion.slerpQuaternions(d.fk[1],d.ik[1],d.aimW),d.shoulder.updateMatrixWorld(!0);const y=this.pushOut(d.elbow.getWorldPosition(this.v1),.09,d.shoulder.getWorldPosition(this.v3));if(d.pushE=y?1:0,y&&d.pushETo.copy(y),d.pushE>0){const M=this.turn.worldToLocal(this.v1.copy(d.pushETo)).sub(d.shoulder.position);uo(M,p,this.qa),d.shoulder.quaternion.slerp(this.qa,d.pushE)}d.shoulder.updateMatrixWorld(!0);const w=d.wrist.localToWorld(this.v1.set(0,-.15/2-.02,0)),P=b?null:this.pushOut(w,.13,d.shoulder.getWorldPosition(this.v3));if(P?(d.pushTo.copy(P),d.pushN.subVectors(P,w).normalize(),d.push=1):d.push=0,d.push>0){const M=this.turn.worldToLocal(this.v3.copy(d.pushTo).add(d.pushN)).sub(this.turn.worldToLocal(this.v1.copy(d.pushTo)));M.multiplyScalar(2).add(this.v1.set(0,-.3,-.6));const R=this.turn.worldToLocal(this.v1.copy(d.pushTo));Ai(d.shoulder.position,R,n,i,M,this.qa,this.qb,Os),d.shoulder.quaternion.slerp(this.qa,d.push),d.elbow.quaternion.slerp(this.qb,d.push)}d.aimW>.5&&this.elbowClear(d),this.outOfBody(d.shoulder,()=>this.armPoints(d,this.pts),.045,!1);const _=this.qa.setFromAxisAngle(cn.set(1,0,0),Se(-.1-.05*x.vp,-.35,.35));if(d.flatW>.01){d.elbow.updateMatrixWorld(!0);const M=d.elbow.getWorldQuaternion(this.qb);cn.set(0,this.v3.set(1,0,0).applyQuaternion(M).y<0?-1:1,0),Je.copy(d.palmDir).negate(),Dn.crossVectors(cn,Je).normalize(),Je.crossVectors(Dn,cn).normalize(),ho.makeBasis(cn,Je,Dn);const R=this.qc.setFromRotationMatrix(ho),L=M.invert().multiply(R);zh(L,[-.45,ha.side],[-1.6,ha.turn],[-1.55,ha.flex],"YZX"),d.wrist.quaternion.slerpQuaternions(_,L,d.flatW)}else d.wrist.quaternion.copy(d.aimW>.5?d.wrist.quaternion.identity():_)})}elbowClear(t){const e=()=>this.armPoints(t,this.pts).some(c=>this.inHead(c,.01,!0));if(!e())return;const n=t.shoulder.position,i=this.turn.worldToLocal(t.wrist.getWorldPosition(this.v4)),r=this.v5.subVectors(i,n);if(r.lengthSq()<1e-6)return;r.normalize();const o=this.turn.worldToLocal(t.elbow.getWorldPosition(this.v3)).sub(n),a=_i.crossVectors(r,o).x*t.side>=0?1:-1;for(let c=0;c<12;c++){t.shoulder.quaternion.premultiply(this.qb.setFromAxisAngle(r,a*.13));const l=t.elbow.getWorldPosition(this.v3);if(l.y<this.world.groundAt(l.x,l.z)+.08){t.shoulder.quaternion.premultiply(this.qb.setFromAxisAngle(r,-a*.13));return}if(!e())return}}pointAlong(t,e){const n=_i.subVectors(e,t.shoulder.position);uo(n,this.v2.set(t.side*.5,-.35,-1),t.ik[0]),t.ik[1].setFromAxisAngle(cn.set(1,0,0),-.08)}pushOut(t,e=.07,n){if(!this.world.solidAt(t.x,t.y,t.z))return null;const i=Math.round(t.x),r=Math.round(t.y),o=Math.round(t.z);let a=null,c=1/0;for(const[l,h,u]of[[1,0,0],[-1,0,0],[0,1,0],[0,0,1],[0,0,-1]]){if(this.world.solidAt(i+l,r+h,o+u))continue;const f=l?(i+l*.5-t.x)*l:h?r+.5-t.y:(o+u*.5-t.z)*u,d=n?l*(n.x-t.x)+h*(n.y-t.y)+u*(n.z-t.z):0,m=f-Math.max(0,d)*.8;m<c&&(c=m,a=new N(t.x+l*(f+e),t.y+h*(f+e),t.z+u*(f+e)))}return a}debug(){const t=this.motion,e=this.legs.map((a,c)=>a.ankle.getWorldPosition(new N).distanceTo(t.feet[c].ankle));let n=0,i=0;const r=a=>{this.world.solidAt(a.x,a.y,a.z)&&n++},o=[0,1,2,3,4].map(()=>new N);for(const a of this.legs)this.legPoints(a,o),[o[2],o[3],o[4]].forEach(r),i+=o.filter(c=>this.inHead(c,0)).length;for(const a of this.arms)this.armPoints(a,o),[o[1],o[4]].forEach(r),i+=o.filter(c=>this.inHead(c,0)).length;return{footErr:e,inside:n,self:i,modes:t.feet.map(a=>a.mode)}}dispose(){this.face.dispose(),this.fx.dispose();for(const t of this.own)t.dispose()}}const Fv="Welcome to Robyn Miller's Popup Portrait Gallery! I'm your host. Getting around is easy—just use the {W} key to move forward. To look around, use your mouse! Or the {LEFT} and {RIGHT} keys.",zv="Click anywhere to look around.",Ov="Just click anywhere. Nothing will break. Probably.",kv="Press {W} to walk. The door is right behind me.",Bv="Click anywhere to carry on.",Hv="That's it! This way.",Gv="Walk up close to a painting and click to see it full screen. Click again to put it back.",Vv="Hi, Welcome to Robyn Miller's gallery. Feel free to take a look around.",Wv="You are currently one of {x} people in the gallery.",Xv="Things are quiet. You are the only person in the gallery.",qv=["You may think that I'm not an appropriate host for an art gallery? Hm. Well maybe you're not an appropriate guest for our gallery!","My hat? I'm celebrating life!","Music? I'll see what I can find.","Take your time. The paintings aren't going anywhere. Neither am I.","Robyn painted every one of these. I just stand near them looking important.","Click on a painting to see it up close. I recommend it. I've seen them all up close. Very close.","Some people walk through a gallery in five minutes. Some take five hours. I've timed them.","Do you see the faces? I see faces everywhere. Even in the floor.","Between you and me, that one over there looked at me funny this morning.","Shh. The paintings are thinking.","I polished this floor myself. With my feet.","Every gallery needs a host. This one got me. Lucky gallery.","Art is long and I am short.","Stand back a little. Some paintings like their space.","I'm not allowed to touch the paintings. I'm barely allowed to touch the walls.","That one's my favourite. They're all my favourite.","Is it just me, or did that painting blink?","The lights in here are very flattering. To the paintings. And to me.","I've been told I have an excellent eye for art. I have two, actually.","Feel free to linger. Lingering is encouraged here.","If anyone asks, I'm security.","You can tell a lot from a face. Mine says 'party'.","There's no gift shop. I asked.","If you get lost, follow the walls. That's what I do.","Look closer. Then look from farther away. Then closer again. That's the trick.","Quiet in here, isn't it? I like it that way. Mostly.","Paintings get lonely if nobody looks at them. I made that up. But still.","Mind the doorways. They're bigger than they look. Or I'm smaller.","All the walls in here are white. I campaigned for polka dots. I lost.","Hm. You have good taste. I can tell by the way you stand.","This is the part where I say something profound. ... I'll get back to you.","I've counted the paintings twice. I got two different answers.","If you need me, I'll be right behind you. Always. Right behind you.","Sometimes I sit and stare at one for an hour. It doesn't mind.","Do you think they can see us? I think they can see us.","Not to brag, but I've been in every room of this gallery. Several times. Today.","Art is best enjoyed slowly. Like soup.","I'm told I add a certain something to the place. Nobody has said what.","Go ahead and stare. That's what they're for.","What do you think that one is about? I have a theory, but it's mostly about sandwiches.","I used to be just a block. Now I'm a block with legs. That's progress.","Every time someone visits, I feel taller. I'm not, though.","Close your eyes. Now open them. See? Still art.","Please don't lick the paintings. I'm not saying you would. I'm just saying.","I like this room. I like the other rooms too. I'm very agreeable.","That's a nice one. I'd hang it in my house, if I had a house. Or walls.","Some galleries have audio guides. You have me. You're welcome.","Ah, I was hoping you'd come this way.","Hmm-hmm-hmmm. Sorry. I hum when I'm happy.","Do you paint? You have a painter's way of squinting.","If these walls could talk... well, they'd probably just say 'white'.","Look at that brushwork! I think. I'm not entirely sure what brushwork is.","Did you see the little card next to each one? I read them all. Twice.","No hurry. I'm on gallery time.","The floor reflects the paintings. So technically you're seeing everything twice. You're welcome again.","I can't decide if that one is smiling or frowning. Maybe both. Like me before breakfast.","If you like one, stand in front of it a little longer. It'll like you back.","Some visitors talk to the paintings. I don't judge. I talk to them too.","I'm a professional. I've hosted at least one visitor before. Possibly two.","The best spot in the house is wherever you happen to be standing.","Squint a little. Go on. See how the colours move? That's free. No extra charge.","I tried painting once. It painted me back.","Don't mind me. I'm just here for the ambience. I am the ambience.",'Did you know the word "gallery" means a long room? I looked it up. I had time.',"If you hear snoring later, that wasn't me.","I'd tell you which one is the most famous, but they'd all get jealous.","This one was hung at exactly the right height. I checked with my hat.","You walk very gracefully. For a visitor.","Every painting here is somebody. Even the ones that look like nobody.","I like to think the paintings look forward to visitors. I know I do."],Yv=["Yes? Can I help you?","Hey! Look at the art, not at me.","That tickles.","I'm working, you know.","Hello again!","Personal space! I'm very small. I need a lot of it.","Ooh. A fan.","Careful. I'm delicate. Like a watercolour.","Me? I'm not part of the exhibition. Or am I?","You found me! I wasn't hiding. Much.","Hmm? Oh, sorry. I was admiring that one.","My hat? I'm celebrating life!","Please do not poke the host.","Is this about the hat? It's about the hat, isn't it.","I'm flattered. Truly.","Music? I'll see what I can find."],$v=["Hm? Oh! I wasn't asleep. I was resting my eyes.","I'm up! I'm up!","Was I snoring? I don't snore. That was the ventilation.","Huh? Who? Oh. You. Welcome back."],Kv=["Back again! I knew you would be.","Welcome back. I kept everything just where it was.","Oh good, you're back. It's lonely in here without you."],Zv=["Leaving already? Come back soon!","Goodbye! Thank you for visiting.","Off you go, then. I'll keep an eye on things.","Bye! The paintings will miss you. So will I. A little.","Thanks for coming. Mind the white out there. There is a lot of it."],Jv=["Lovely, isn't it?","Up close they get even stranger. In the best way.","Good choice.","That's one of my favourites. Don't tell the others.","I always see something new in that one."],Qv=["Oh! Someone else just came in. There are {x} of you now.","Another visitor! That makes {x} of you."],jv=["Somebody just left. Now there are {x} of you."],tM=["Somebody just left. It's just you and me now."];function pi(s,t){let e=s.filter(i=>!t.has(i));if(!e.length){for(const i of s)t.delete(i);e=s}const n=e[Math.floor(Math.random()*e.length)];return t.add(n),n}const _e=.2,eM=Math.sqrt(9.81/(22*_e)),nM={...uv,shape:1,eyeSize:0,eyeSpacing:1,eyeHeight:.23,browWeight:0,browHeight:1,noseLength:0,noseHeight:.49,mouthWidth:.28,mouthColor:.22,cheeks:.46,skin:0,hairColor:.03482587064676617,hat:"birthday"},kr=(s,t,e,n=new N)=>n.set(s/_e,t/_e-.5,e/_e),Oh=(s,t=new N)=>t.set(s.x*_e,(s.y+.5)*_e,s.z*_e);class iM{constructor(t,e,n){I(this,"scene",new bl);I(this,"cam",new je);I(this,"rig");I(this,"count",null);I(this,"onEnter",()=>{});I(this,"onLeave",()=>{});I(this,"el");I(this,"textEl");I(this,"bubble",null);I(this,"onKey",()=>{});I(this,"hidden",!1);I(this,"wasLocked",!1);I(this,"queue",[]);I(this,"used",new Set);I(this,"grid",null);I(this,"stage","waiting");I(this,"inv",{hello:!1,lookSaid:!1,lookAt:0,lockedAt:0,nudgedClick:!1,nudgedWalk:!1,leading:!1,startD:-1});I(this,"inside",!1);I(this,"wasInside",!1);I(this,"wasOut",!0);I(this,"quiet",0);I(this,"resting","no");I(this,"soughtRest",!1);I(this,"idleIn",6);I(this,"remarkIn",45);I(this,"followIn",0);I(this,"glanceIn",2);I(this,"glanceAt",null);I(this,"dest",null);I(this,"last",{x:0,z:0,yaw:0,pitch:0});I(this,"countSaid",0);I(this,"lastCrowd",-999);I(this,"clock",0);I(this,"v1",new N);I(this,"v2",new N);this.gallery=t,this.player=e,this.main=n;const i={groundAt:(o,a)=>this.wallAt(o*_e,a*_e)?this.gallery.arch.H/_e:-.5,solidAt:(o,a,c)=>{const l=(a+.5)*_e;return l<0?!0:l<this.gallery.arch.H&&this.wallAt(o*_e,c*_e)}};this.rig=new Nv(nM,3,i),this.scene.add(this.rig.root,this.rig.fx.group),this.scene.add(new Wd(16777215,13815492,1.9));const r=new Yd(16777215,1.5);r.position.set(.4,1,.7),this.scene.add(r),this.placeOutside(),this.el=document.createElement("div"),this.el.className="host-bubble",this.textEl=document.createElement("span"),this.el.append(this.textEl),this.textEl.addEventListener("click",o=>{var c;const a=(c=o.target.closest(".hk"))==null?void 0:c.dataset.k;a&&(o.preventDefault(),o.stopPropagation(),this.onKey(a),this.endBubble())}),document.body.append(this.el),this.last={x:e.pos.x,z:e.pos.z,yaw:e.yaw,pitch:e.pitch}}get arch(){return this.gallery.arch}wallAt(t,e){return this.arch.solids.some(n=>t>n.x0-.01&&t<n.x1+.01&&e>n.z0-.01&&e<n.z1+.01)}get at(){return{x:this.rig.pos.x*_e,z:this.rig.pos.z*_e}}doorSpot(){const t=this.arch.entrance;return{x:(t.a+t.b)/2+.6,z:t.z-1.4}}outsideSpot(){const t=this.arch.entrance;return{x:(t.a+t.b)/2+.7,z:t.z+this.gallery.data.layout.outline.t+3.2}}placeOutside(){const t=this.outsideSpot();this.rig.place(t.x/_e,t.z/_e,0),this.dest=null}gridFor(){if(this.grid&&this.grid.arch===this.arch)return this.grid;const t=this.arch,e=t.inner,n=.25,i=.32,r=this.gallery.data.layout.outline.t,o=7,a=e.x0-r-2.5,c=e.z0,l=Math.ceil((e.x1-e.x0+2*(r+2.5))/n),h=Math.ceil((e.z1-e.z0+r+o)/n),u=new Uint8Array(l*h);for(let f=0;f<h;f++)for(let d=0;d<l;d++){const m=a+(d+.5)*n,x=c+(f+.5)*n,p=m>e.x0+i&&m<e.x1-i&&x>e.z0+i&&x<e.z1-i,g=x>e.z1+r+i,b=m>t.entrance.a+i&&m<t.entrance.b-i&&x>e.z1-i-.01&&x<e.z1+r+i+.01;!p&&!g&&!b||t.solids.some(T=>m>T.x0-i&&m<T.x1+i&&x>T.z0-i&&x<T.z1+i)||(u[f*l+d]=1)}return this.grid={arch:t,x0:a,z0:c,nx:l,nz:h,c:n,free:u},this.grid}freeAt(t,e){const n=this.gridFor(),i=Math.floor((t-n.x0)/n.c),r=Math.floor((e-n.z0)/n.c);return i>=0&&r>=0&&i<n.nx&&r<n.nz&&n.free[r*n.nx+i]===1}clear(t,e,n,i){const r=Math.hypot(n-t,i-e),o=Math.max(1,Math.ceil(r/.1));for(let a=0;a<=o;a++)if(!this.freeAt(t+(n-t)*a/o,e+(i-e)*a/o))return!1;return!0}route(t,e){const n=this.gridFor(),i=this.at,r=(v,y)=>[Math.floor((v-n.x0)/n.c),Math.floor((y-n.z0)/n.c)];let[o,a]=r(i.x,i.z);const[c,l]=r(t,e),h=(v,y)=>v>=0&&y>=0&&v<n.nx&&y<n.nz&&n.free[y*n.nx+v]===1;if(!h(c,l))return null;if(!h(o,a)){let v=null,y=1/0;for(let w=-4;w<=4;w++)for(let P=-4;P<=4;P++)h(o+P,a+w)&&P*P+w*w<y&&(y=P*P+w*w,v=[o+P,a+w]);if(!v)return null;[o,a]=v}const u=n.nx*n.nz,f=new Float32Array(u).fill(1/0),d=new Int32Array(u).fill(-1),m=(v,y)=>{const w=Math.abs(v-c),P=Math.abs(y-l);return Math.max(w,P)+.414*Math.min(w,P)},x=[[m(o,a),a*n.nx+o]];f[a*n.nx+o]=0;const p=l*n.nx+c;for(;x.length;){let v=0;for(let _=1;_<x.length;_++)x[_][0]<x[v][0]&&(v=_);const[,y]=x.splice(v,1)[0];if(y===p)break;const w=y%n.nx,P=Math.floor(y/n.nx);for(const[_,M]of[[1,0],[-1,0],[0,1],[0,-1],[1,1],[1,-1],[-1,1],[-1,-1]]){const R=w+_,L=P+M;if(!h(R,L)||_&&M&&(!h(w+_,P)||!h(w,P+M)))continue;const U=L*n.nx+R,W=f[y]+(_&&M?1.414:1);W<f[U]&&(f[U]=W,d[U]=y,x.push([W+m(R,L),U]))}}if(!isFinite(f[p]))return null;const g=[];for(let v=p;v!==-1;v=d[v])g.unshift({x:n.x0+(v%n.nx+.5)*n.c,z:n.z0+(Math.floor(v/n.nx)+.5)*n.c});g[g.length-1]={x:t,z:e};const b=[i];let T=0;for(;T<g.length-1;){let v=g.length-1;const y=b[b.length-1];for(;v>T+1&&!this.clear(y.x,y.z,g[v].x,g[v].z);)v--;b.push(g[v]),T=v}return b}goTo(t,e){const n=this.route(t,e);if(!n||n.length<2)return!1;let i=0;for(let o=1;o<n.length;o++)i+=Math.hypot(n[o].x-n[o-1].x,n[o].z-n[o-1].z);if(i<.25)return!1;const r=i>3.2?"bound":i>1.6?"run":"walk";return this.rig.travel(n.slice(1).map(o=>({x:o.x/_e,z:o.z/_e})),r,()=>{this.dest=null}),this.dest={x:t,z:e},!0}seen(t,e){const n=this.player.pos;return!Ii(this.arch.solids,n.x,n.z,t,e)}goodSpot(t,e){const n=this.player.pos,i=Math.hypot(t-n.x,e-n.z),r=-Math.sin(this.player.yaw),o=-Math.cos(this.player.yaw),a=((t-n.x)*r+(e-n.z)*o)/Math.max(i,1e-6);return i>.75&&i<3.4&&a>-.2&&this.seen(t,e)}follow(){const t=this.player.pos,e=this.at;if(this.goodSpot(e.x,e.z)&&!this.dest)return;const n=-Math.sin(this.player.yaw),i=-Math.cos(this.player.yaw),r=Math.cos(this.player.yaw),o=-Math.sin(this.player.yaw),a=[[1.5,.9],[1.5,-.9],[1,1.4],[1,-1.4],[.3,1.3],[.3,-1.3],[2.2,0],[2.4,1.2],[2.4,-1.2],[-.6,1],[-.6,-1]];let c=null,l=1/0;if(a.forEach(([u,f],d)=>{const m=t.x+n*u+r*f,x=t.z+i*u+o*f;if(!this.freeAt(m,x)||!this.seen(m,x))return;const p=Math.hypot(m-e.x,x-e.z)+d*.15;p<l&&(l=p,c={x:m,z:x})}),!c)return;const h=c;this.dest&&Math.hypot(this.dest.x-h.x,this.dest.z-h.z)<.8||this.goTo(h.x,h.z)}say(t,e){this.bubble||this.queue.length?this.queue.push({text:t,feel:e}):this.start(t,e)}start(t,e){if(t==="{count}"&&(t=this.count===null?"{x}":this.count<=1?Xv:Wv),t.includes("{x}")&&this.count===null){const r=this.queue.shift();r&&this.start(r.text,r.feel);return}const n=t.replace("{x}",String(this.count)).split(/\{(W|LEFT|RIGHT)\}/).map((r,o)=>(o%2,r)).filter(r=>r!==""),i=n.map(r=>da(r)?"o":r).join("");this.bubble={text:i,segs:n,shown:0,drawn:0,until:1/0},this.textEl.textContent="",this.el.classList.add("on"),e&&this.rig.feel(e,2.5)}endBubble(){this.bubble=null,this.el.classList.remove("on");const t=this.queue.shift();t&&this.start(t.text,t.feel)}grow(t,e){let n=0;for(const i of t.segs){const r=da(i)?1:i.length,o=Math.max(t.drawn,n),a=Math.min(e,n+r);if(a>o)if(da(i)){const c=document.createElement("button");c.className="hk",c.dataset.k=i,c.tabIndex=-1,c.title=rM[i],c.textContent=sM[i],this.textEl.append(c)}else{const c=i.slice(o-n,a-n),l=this.textEl.lastChild;l&&l.nodeType===Node.TEXT_NODE?l.appendData(c):this.textEl.append(c)}n+=r}t.drawn=e}countLine(){return"{count}"}poke(){this.quiet=0,this.wake(),!this.bubble&&(this.say(pi(Yv,this.used),Math.random()<.5?"pleased":"surprised"),this.rig.busy()||this.rig.perform(Math.random()<.5?"wave":"spin"))}looked(){this.stage!=="company"||this.bubble||Math.random()>.35||!this.visible(6)||this.say(pi(Jv,this.used),"pleased")}setCount(t){const e=this.count;this.count=t,!(e===null||t===e||this.stage!=="company"||this.clock-this.lastCrowd<60||this.resting!=="no")&&(this.lastCrowd=this.clock,t>e?this.say(pi(Qv,this.used),"excited"):this.say(t<=1?tM[0]:pi(jv,this.used),"curious"))}hit(t){const e=new el(kr(t.ray.origin.x,t.ray.origin.y,t.ray.origin.z),t.ray.direction.clone(),0,t.far/_e);return this.rig.hit(e)}visible(t){const e=this.player.pos,n=this.at;if(Math.hypot(n.x-e.x,n.z-e.z)>t||!this.seen(n.x,n.z))return!1;const i=Oh(this.rig.headCentre(this.v1),this.v2).project(this.main);return i.z<1&&Math.abs(i.x)<.95&&Math.abs(i.y)<.95}wake(){this.resting==="no"&&this.rig.resting==="stand"||(this.resting==="asleep"&&(this.rig.feel("surprised",1.2),this.rig.blink(),Math.random()<.6&&this.say(pi($v,this.used))),this.resting="no",this.soughtRest=!1,this.rig.sleep(!1),this.rig.rest("stand"),this.rig.mood("calm"))}update(t){this.clock+=t;const e=this.player,n=this.rig,i=this.arch,r=Math.hypot(e.pos.x-this.last.x,e.pos.z-this.last.z)>.004||Math.abs(e.yaw-this.last.yaw)+Math.abs(e.pitch-this.last.pitch)>.003;this.last={x:e.pos.x,z:e.pos.z,yaw:e.yaw,pitch:e.pitch},this.quiet=r?0:this.quiet+t;const o=i.inner;this.inside=e.pos.x>o.x0&&e.pos.x<o.x1&&e.pos.z>o.z0&&e.pos.z<o.z1-.1,this.inside&&!this.wasInside&&(this.onEnter(),this.wake(),this.stage==="waiting"&&!this.countSaid?(this.stage="greeting",this.queue=[],n.turnTo(Math.atan2(e.pos.x-this.at.x,e.pos.z-this.at.z)),n.perform("wave"),this.say(Vv,"happy"),this.say(this.countLine(),"pleased"),this.say(Gv,"pleased"),this.countSaid=1):this.stage==="waiting"&&(this.stage="company",this.say(pi(Kv,this.used),"happy")));const a=e.pos.z>o.z1+.3;if(a&&!this.wasOut&&this.stage!=="waiting"){this.onLeave(),this.stage==="company"&&(this.queue=[],this.wake(),this.say(pi(Zv,this.used),"happy"),this.rig.perform("wave")),this.stage="waiting";const f=this.outsideSpot();this.goTo(f.x,f.z)}this.wasInside=this.inside,this.wasOut=a,this.stage==="waiting"&&!this.inside&&this.invite();const c=e.locked;this.wasLocked&&!c&&!this.hidden&&!this.bubble&&this.say(Bv,"pleased"),this.wasLocked=c,this.stage==="greeting"&&!this.bubble&&!this.queue.length&&(this.stage="company",this.remarkIn=35+Math.random()*30);const l=this.bubble;if(l){l.shown=Math.min(l.text.length,l.shown+t*34);const f=Math.ceil(l.shown);f>l.drawn&&this.grow(l,f),l.until===1/0&&l.shown>=l.text.length&&(l.until=this.clock+Math.max(3.2,l.text.length*.06)),this.clock>l.until&&this.endBubble()}const h=!!l&&l.shown<l.text.length;n.talk(h?l.text[Math.max(0,Math.ceil(l.shown)-1)]:null),r&&(this.resting!=="no"||n.resting!=="stand")&&this.wake();const u=kr(this.main.position.x,this.main.position.y,this.main.position.z,new N);if(this.stage==="company"&&this.resting==="no"&&((this.followIn-=t)<=0&&(this.followIn=.45,n.resting==="stand"&&this.follow()),!this.bubble&&(this.remarkIn-=t)<=0&&(this.remarkIn=45+Math.random()*45,this.visible(5.5)&&this.quiet<50&&this.say(pi(qv,this.used),Math.random()<.5?"pleased":"curious"))),this.resting!=="no"||n.resting!=="stand")(this.glanceIn-=t)<=0&&(this.glanceIn=3+Math.random()*4,this.glanceAt=this.somethingToLookAt(u)),n.lookAt(this.resting==="asleep"?null:h?u:this.glanceAt),this.resting==="kneeling"&&(this.quiet>=180?(this.resting="asleep",n.resting==="kneel"&&n.rest("lie",Math.atan2(u.x-n.pos.x,u.z-n.pos.z))?n.mood("sleepy"):(n.mood("asleep"),n.sleep(!0))):this.quiet>120&&(this.idleIn-=t)<=0&&(this.idleIn=9+Math.random()*6,n.feel("yawn",1.8))),this.resting==="asleep"&&n.resting==="lie"&&n.feeling!=="asleep"&&(n.mood("asleep"),n.sleep(!0));else if(n.busy())n.lookAt(h?u:null);else if(n.turnTo(Math.atan2(u.x-n.pos.x,u.z-n.pos.z)),(this.glanceIn-=t)<=0&&(this.glanceIn=2.2+Math.random()*3.5,this.glanceAt=this.somethingToLookAt(u)),n.lookAt(h?u:this.glanceAt),this.stage==="company"||this.stage==="waiting"){if(this.quiet>9&&this.quiet<25&&(this.idleIn-=t)<=0)this.idleIn=7+Math.random()*4,Math.random()<.35&&n.perform(Math.random()<.5?"spin":"jump");else if(this.quiet>=25&&this.quiet<60)n.mood("bored"),(this.idleIn-=t)<=0&&(this.idleIn=6+Math.random()*5,n.perform(Math.random()<.5?"sigh":"tap"));else if(this.quiet>=60&&!this.bubble){const f=Math.atan2(u.x-n.pos.x,u.z-n.pos.z),d=n.roomAt(n.pos.x,n.pos.z,f);if(!(d!=null&&d.lie)&&!this.soughtRest){this.soughtRest=!0;const m=this.restSpot(f);if(m&&this.goTo(m.x,m.z))return this.after(t)}this.resting="kneeling",n.mood("calm"),n.rest("kneel",f)}}this.after(t)}invite(){const t=this.player,e=this.inv,n=t.locked;if(this.countSaid||e.leading||(!e.hello&&this.clock>1.2&&(e.hello=!0,this.rig.perform("wave"),this.say(Fv,"happy")),!e.hello))return;const i=!this.bubble&&!this.queue.length;n&&!e.lockedAt&&(e.lockedAt=this.clock),!n&&!e.lockedAt&&!e.lookSaid&&i&&(e.lookSaid=!0,e.lookAt=this.clock,this.say(zv,"pleased")),!n&&!e.lockedAt&&e.lookSaid&&!e.nudgedClick&&this.clock-e.lookAt>20&&i&&(e.nudgedClick=!0,this.say(Ov,"curious"));const r=this.arch.entrance,o=Math.hypot(t.pos.x-(r.a+r.b)/2,t.pos.z-r.z);if(e.startD<0&&(e.startD=o),o<e.startD-1.2){e.leading=!0,this.wake(),this.queue=[],this.bubble&&(this.bubble.until=Math.min(this.bubble.until,this.clock+.5)),this.say(Hv,"excited");const a=this.doorSpot();this.goTo(a.x,a.z);return}e.lockedAt&&!e.nudgedWalk&&this.clock-e.lockedAt>16&&o>e.startD-.3&&i&&(e.nudgedWalk=!0,this.say(kv,"curious"))}after(t){this.rig.update(t*eM),this.place()}restSpot(t){var n;const e=this.at;for(let i=.4;i<=2.4;i+=.4)for(let r=0;r<12;r++){const o=r/12*Math.PI*2,a=e.x+Math.cos(o)*i,c=e.z+Math.sin(o)*i;if(!(!this.freeAt(a,c)||!this.seen(a,c))&&(n=this.rig.roomAt(a/_e,c/_e,t))!=null&&n.lie)return{x:a,z:c}}return null}somethingToLookAt(t){const e=Math.random();if(e<.45)return t.clone();const n=this.at;let i=null,r=e<.75?2.5:6;for(const o of this.gallery.placed){const a=Math.hypot(o.centre[0]-n.x,o.centre[2]-n.z);a<r&&this.seen(o.centre[0],o.centre[2])&&(r=a,i=kr(o.centre[0],o.centre[1],o.centre[2]))}return i??t.clone()}place(){const t=this.main;if(kr(t.position.x,t.position.y,t.position.z,this.cam.position),this.cam.quaternion.copy(t.quaternion),(this.cam.fov!==t.fov||this.cam.aspect!==t.aspect||this.cam.near!==t.near/_e)&&(this.cam.fov=t.fov,this.cam.aspect=t.aspect,this.cam.near=t.near/_e,this.cam.far=t.far/_e,this.cam.updateProjectionMatrix()),this.cam.updateMatrixWorld(),this.bubble){const e=Oh(this.rig.headTop(this.v1),this.v2).project(t),n=innerWidth,i=innerHeight;let r=(e.x*.5+.5)*n,o=(-e.y*.5+.5)*i;const a=e.z>1;a&&(r=n/2,o=i-120),r=Math.max(170,Math.min(n-170,r)),o=Math.max(90,Math.min(i-30,o)),this.el.style.left=`${r}px`,this.el.style.top=`${o}px`,this.el.classList.toggle("free",a||!this.visible(30))}}render(t){t.autoClear=!1,t.render(this.scene,this.cam),t.autoClear=!0}hide(t){this.hidden=t,this.el.style.visibility=t?"hidden":""}get obstacle(){const t=this.at;return{x:t.x,z:t.z,r:.22}}}const da=s=>s==="W"||s==="LEFT"||s==="RIGHT",sM={W:"W",LEFT:"←",RIGHT:"→"},rM={W:"Step forward",LEFT:"Turn left",RIGHT:"Turn right"};var kh;class oM{constructor(t){I(this,"count",null);I(this,"onCount",()=>{});I(this,"id",(((kh=crypto.randomUUID)==null?void 0:kh.call(crypto))??String(Math.random()).slice(2)).slice(0,36));I(this,"inside",!1);I(this,"timer",0);I(this,"room","");this.url=t,t&&addEventListener("pagehide",()=>{this.inside&&this.beacon()})}enter(){!this.url||this.inside||(this.inside=!0,this.ping(),this.timer=window.setInterval(()=>this.ping(),2e4))}exit(){!this.url||!this.inside||(this.inside=!1,clearInterval(this.timer),this.beacon())}async ping(){try{const t=await fetch(`${this.url}/ping${this.room}`,{method:"POST",headers:{"content-type":"text/plain"},body:this.id});if(!t.ok||!this.inside)return;const e=await t.json();typeof e.count=="number"&&e.count!==this.count&&(this.count=e.count,this.onCount(e.count))}catch{}}beacon(){var e;const t=`${this.url}/leave${this.room}`;(e=navigator.sendBeacon)!=null&&e.call(navigator,t,this.id)||fetch(t,{method:"POST",body:this.id,keepalive:!0}).catch(()=>{})}}const mi=new URLSearchParams(location.search),aM=matchMedia("(hover: none) and (pointer: coarse)").matches&&!mi.has("desk");aM?(document.getElementById("mobile").classList.add("on"),document.getElementById("cover").classList.add("gone")):lM().catch(s=>{console.error(s),document.getElementById("cover").textContent="This browser could not open the gallery."});async function lM(){const s='"Inter Tight", "Helvetica Neue", Helvetica, Arial, sans-serif',[t]=await Promise.all([$x(),Promise.race([Promise.all(['300 40px "Inter Tight"','400 40px "Inter Tight"','italic 500 40px "Inter Tight"'].map(E=>document.fonts.load(E))),new Promise(E=>setTimeout(E,2500))])]),e=new Yx({antialias:!0,powerPreference:"high-performance"});let i=Math.min(devicePixelRatio||1,2);e.setPixelRatio(i),e.setSize(innerWidth,innerHeight),e.toneMapping=ul,e.toneMappingExposure=1;const r=e.domElement;document.getElementById("stage").appendChild(r);const o=e.capabilities.getMaxAnisotropy(),a=new bl,c=new je(62,innerWidth/innerHeight,.05,900);c.layers.enable(1);const l=new X_(1,1),h=()=>{e.setPixelRatio(i),e.setSize(innerWidth,innerHeight),c.aspect=innerWidth/innerHeight,c.updateProjectionMatrix();const E=e.getDrawingBufferSize(new kt);l.setSize(Math.round(E.x/2),Math.round(E.y/2))};h(),addEventListener("resize",h);const u=new cs(t,a,e,l,s,o);await u.loadSmall();const f=new Q_(r),d=t.layout,m=d.entrance;f.pos.set(m.x+2.4,al,d.outline.z1+d.outline.t+9.8),f.yaw=Math.atan2(2.4,9.8),f.pitch=.05;const x=mi.get("at");if(x){const[E,C,k,J]=x.split(",").map(Number);f.pos.set(E,al,C),f.yaw=Wn.degToRad(k||0),f.pitch=Wn.degToRad(J||0)}const p=mi.get("hud")!=="0",g=document.getElementById("dot");g.style.display="none";const b=new nv(p),T=new el;T.far=14,T.layers.enableAll();let v=[];const y=()=>{v=[],u.interior.group.traverse(E=>{E.isMesh&&!E.isInstancedMesh&&v.push(E)}),u.outside.group.traverse(E=>{E.isMesh&&E.userData.outside&&v.push(E)})},w=()=>{T.setFromCamera(new kt(0,0),c);const E=T.intersectObjects(v,!1)[0];if(!E)return{kind:"none"};const C=E.object.userData;return C.label?{kind:"label",work:C.work,point:E.point,dist:E.distance}:C.work?{kind:"work",work:C.work,point:E.point,dist:E.distance}:C.face?{kind:"face",face:C.face,point:E.point,dist:E.distance}:{kind:"none",point:E.point,dist:E.distance}},P=new tl,_=new Set;let M=1;const R=E=>{let C=99;for(const k of u.interior.pictures)k.work.id===E&&(C=Math.min(C,Math.hypot(k.mesh.position.x-f.pos.x,k.mesh.position.z-f.pos.z)));return C};function L(){M=0;for(const[E,C]of u.sharp)if(!(R(E)<=14)){u.sharp.delete(E);for(const k of u.interior.pictures)k.work.id===E&&(k.mat.uniforms.uMap.value=u.texture(E));C.dispose()}for(const E of u.interior.pictures){const C=E.work.id;u.sharp.has(C)||R(C)>7.5||(M++,!(_.has(C)||_.size>=4)&&(_.add(C),P.loadAsync(cs.url(C,"m")).then(k=>{_.delete(C),u.sharp.set(C,u.prepTex(k));for(const J of u.interior.pictures)J.work.id===C&&(J.mat.uniforms.uMap.value=k)}).catch(()=>_.delete(C))))}}const U=new j_,W=E=>{const C=u.cat.get(E);C&&(f.frozen=!0,U.show(C,t.images[E],cs.url(E,u.sharp.has(E)?"m":"s"),cs.url(E,"l")),b.opened())};U.onClose=()=>{f.frozen=!1,K.looked()};let B=0;const H={gallery:u,player:f,camera:c,renderer:e,canvas:r,viewer:U,scene:a,aim:w,openWork:W,dot:g};u.onRebuilt=()=>{f.solids=u.arch.solids;const E=t.layout.outline;f.world={x0:E.x0-30,x1:E.x1+30,z0:E.z0-30,z1:E.z1+30},f.collide(),y(),B=0},u.rebuild();const K=new iM(u,f,c),V=new oM(mi.get("count")?void 0:"https://gallery-presence.robynmiller.workers.dev");V.onCount=E=>K.setCount(E),mi.get("count")&&(K.count=+mi.get("count")),K.onEnter=()=>V.enter(),K.onKey=E=>{f.tap(E==="W"?"KeyW":E==="LEFT"?"ArrowLeft":"ArrowRight",E==="W"?.3:.4),f.locked||r.requestPointerLock()},K.onLeave=()=>V.exit();const it=new el;it.far=12;let G=null;const et=E=>{if(E.button!==0&&E.button!==2)return;if(U.open){U.hide();return}if(!f.locked){r.requestPointerLock();return}if(it.setFromCamera(new kt(0,0),c),K.hit(it)){K.poke();return}if(b.pic){W(b.pic.work.id);return}const C=w();(C.kind==="work"||C.kind==="label")&&W(C.work)};r.addEventListener("mousedown",et),addEventListener("mouseup",E=>G==null?void 0:G.release(E)),U.relock=()=>!document.body.classList.contains("ed-page"),U.el.addEventListener("mousedown",E=>{U.busy||E.target.closest(".view-tools")||(E.preventDefault(),U.hide(),!U.open&&!f.locked&&U.relock()&&r.requestPointerLock())}),document.addEventListener("contextmenu",E=>{E.target.closest("input, textarea, select")||E.preventDefault()}),addEventListener("keydown",E=>{E.code==="Escape"&&U.open&&!U.busy&&U.hide()}),document.addEventListener("pointerlockchange",()=>{!f.locked&&U.open&&U.hide()});const rt=mi.get("open");rt!==null&&W(rt.padStart(2,"0"));let ft=performance.now(),O=0,X=0;const F=mi.get("near")==="1";function z(){const E=performance.now(),C=Math.min((E-ft)/1e3,.05);ft=E,f.update(C),f.apply(c),c.updateMatrixWorld();const k=document.body.classList.contains("ed-page");K.hide(k||U.open),K.update(C),f.obstacles=[K.obstacle],(B-=C)<=0&&(B=.3,L()),k||U.open?b.clear():b.update(C,c,u.interior.pictures,u.arch.solids,f.locked&&!0),l.render(e,a,c),e.render(a,c),k||K.render(e),k||b.render(e,a,c),O++,C>.024?X+=C:X=Math.max(0,X-C*.5),X>1.5&&i>1&&(i=Math.max(1,i-.25),X=0,h()),!window.__gReady&&O>3&&(!F||M===0)&&(window.__gReady=!0,document.getElementById("cover").classList.add("gone")),requestAnimationFrame(z)}requestAnimationFrame(z),window.__g={...H,data:t,editor:G,host:K,presence:V,focus:b}}
